import { ID } from "@openfront/engine-api/Schemas";
import { createHmac, scrypt, timingSafeEqual } from "crypto";
import { execFile } from "child_process";
import type { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import os from "os";
import { promisify } from "util";
import { z } from "zod";
import { AdminBanStore, adminAccountKey } from "./AdminBanStore";
import { hashLocalPassword } from "./LocalAuth";
import { LocalDataStore } from "./LocalDataStore";
import { recentAdminLogs, sanitizeAdminLog } from "./AdminLogBuffer";
import { GameManager } from "./GameManager";
import type { GlobalChatReport } from "./GlobalChatRoom";
import { logger } from "./Logger";
import { ServerEnv } from "./ServerEnv";

const log = logger.child({ comp: "admin_panel" });
const scryptAsync = promisify(scrypt);
const SESSION_DURATION_SECONDS = 12 * 60 * 60;
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

function sessionSecret(): string | undefined {
  const secret = process.env.ADMIN_PANEL_SESSION_SECRET;
  return secret && secret.length >= 32 ? secret : undefined;
}

function signSession(
  payload: { username: string; exp: number },
  secret: string,
) {
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createHmac("sha256", secret)
    .update(encoded)
    .digest("base64url");
  return `${encoded}.${signature}`;
}

function verifySession(token: string, secret: string): boolean {
  const [encoded, signature, extra] = token.split(".");
  if (!encoded || !signature || extra !== undefined) return false;
  const expected = createHmac("sha256", secret).update(encoded).digest();
  let actual: Buffer;
  try {
    actual = Buffer.from(signature, "base64url");
  } catch {
    return false;
  }
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) {
    return false;
  }
  try {
    const payload: unknown = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    );
    const parsed = z
      .object({ username: z.string(), exp: z.number().int() })
      .safeParse(payload);
    return (
      parsed.success &&
      parsed.data.username === process.env.ADMIN_PANEL_USERNAME &&
      parsed.data.exp > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

async function passwordMatches(password: string): Promise<boolean> {
  const serialized = process.env.ADMIN_PANEL_PASSWORD_HASH;
  if (!serialized) return false;
  const [algorithm, saltHex, expectedHex, extra] = serialized.split("$");
  if (
    algorithm !== "scrypt" ||
    !saltHex ||
    !/^[0-9a-f]{64}$/i.test(expectedHex ?? "") ||
    extra !== undefined
  ) {
    return false;
  }
  const salt = Buffer.from(saltHex, "hex");
  if (salt.length < 16 || salt.length > 64) return false;
  const expected = Buffer.from(expectedHex, "hex");
  const actual = (await scryptAsync(password, salt, expected.length)) as Buffer;
  return timingSafeEqual(actual, expected);
}

async function authorizeAdmin(req: Request, res: Response): Promise<boolean> {
  const authorization = req.headers.authorization;
  if (!authorization?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authentication required" });
    return false;
  }

  const secret = sessionSecret();
  if (
    secret !== undefined &&
    verifySession(authorization.substring("Bearer ".length), secret)
  ) {
    return true;
  }
  res.status(401).json({ error: "Invalid or expired admin session" });
  return false;
}

export function registerAdminPanelRoutes({
  app,
  gm,
  workerId,
  chatReports = () => [],
  banStore,
  localDataStore,
}: {
  app: import("express").Application;
  gm: GameManager;
  workerId: number;
  chatReports?: () => readonly GlobalChatReport[];
  banStore?: AdminBanStore;
  localDataStore?: LocalDataStore;
}) {
  app.post("/api/admin/login", loginLimiter, async (req, res) => {
    const parsed = z
      .object({
        username: z.string().min(1).max(80),
        password: z.string().min(1).max(256),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Username and password required" });
    }

    const username = process.env.ADMIN_PANEL_USERNAME;
    const secret = sessionSecret();
    if (!username || secret === undefined) {
      log.error("Admin panel credentials are not configured");
      return res.status(503).json({ error: "Admin panel is not configured" });
    }

    const validUsername = parsed.data.username === username;
    if (!validUsername || !(await passwordMatches(parsed.data.password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
    return res.json({
      token: signSession({ username, exp: expiresAt }, secret),
      username,
      expiresAt,
    });
  });

  app.get("/api/admin/session", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    return res.status(204).end();
  });

  app.get("/api/admin/overview", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;

    res.json({
      workerId,
      workerCount: ServerEnv.numWorkers(),
      uptimeSeconds: process.uptime(),
      loadAverage: os.loadavg(),
      memory: process.memoryUsage(),
      systemMemory: {
        totalBytes: os.totalmem(),
        freeBytes: os.freemem(),
      },
      maintenanceMode: gm.isMaintenanceMode(),
      games: gm.adminOverview(),
    });
  });

  app.get("/api/admin/logs", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    const parsed = z
      .object({ limit: z.coerce.number().int().min(1).max(500).default(200) })
      .safeParse(req.query);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid log limit" });
    }
    return res.json({
      logs: localDataStore?.listAdminLogs(parsed.data.limit) ?? recentAdminLogs(parsed.data.limit),
    });
  });

  app.get("/api/admin/system-logs", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    res.setHeader("Cache-Control", "no-store");
    if (process.platform !== "linux") {
      return res.json({
        available: false,
        reason: "Linux journal logs are only available on the Linux server.",
        logs: [],
      });
    }
    const unit = process.env.ADMIN_SYSTEMD_UNIT;
    if (!unit || !/^[a-zA-Z0-9_.@:-]+\.service$/.test(unit)) {
      return res.json({
        available: false,
        reason: "Set ADMIN_SYSTEMD_UNIT to the application systemd service name.",
        logs: [],
      });
    }
    try {
      const output = await new Promise<string>((resolve, reject) => {
        execFile(
          "journalctl",
          ["--no-pager", "--output=json", "--lines=200", "--unit", unit],
          { timeout: 10_000, maxBuffer: 2 * 1024 * 1024, encoding: "utf8" },
          (error, stdout) => {
            if (error) reject(error);
            else resolve(stdout);
          },
        );
      });
      const logs = output
        .split(/\r?\n/)
        .filter(Boolean)
        .map((line) => {
          const entry = JSON.parse(line) as Record<string, unknown>;
          const micros = Number(entry.__REALTIME_TIMESTAMP);
          return sanitizeAdminLog({
            timestamp: Number.isFinite(micros)
              ? new Date(micros / 1000).toISOString()
              : new Date().toISOString(),
            level: String(entry.PRIORITY ?? "info"),
            message: String(entry.MESSAGE ?? ""),
            metadata: {
              unit,
              pid: entry._PID,
              identifier: entry.SYSLOG_IDENTIFIER,
            },
          });
        });
      return res.json({ available: true, reason: null, logs });
    } catch (error) {
      log.error("could not read Linux journal logs", { error, unit, workerId });
      return res.json({
        available: false,
        reason: "journalctl failed; check the service account's journal permissions.",
        logs: [],
      });
    }
  });

  app.post("/api/admin/maintenance", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    const parsed = z.object({ enabled: z.boolean() }).safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "enabled must be a boolean" });
    }
    localDataStore?.setMaintenanceMode(parsed.data.enabled);
    await gm.setMaintenanceMode(parsed.data.enabled);
    log.warn("admin changed game maintenance mode", {
      enabled: parsed.data.enabled,
      workerId,
    });
    return res.json({ maintenanceMode: gm.isMaintenanceMode() });
  });

  app.post("/api/admin/ban", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    const parsed = z
      .object({ accountKey: z.string().regex(/^[0-9a-f]{64}$/) })
      .safeParse(req.body);
    if (!parsed.success || !banStore) {
      return res.status(parsed.success ? 503 : 400).json({
        error: parsed.success
          ? "Account bans are not configured"
          : "Invalid account key",
      });
    }
    await banStore.add(parsed.data.accountKey);
    const kickedCount = gm.adminBanAccount(parsed.data.accountKey);
    log.warn("admin banned account from game servers", {
      accountKey: parsed.data.accountKey,
      kickedCount,
      workerId,
    });
    return res.json({ kickedCount });
  });

  app.get("/api/admin/bans", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!banStore) {
      return res.status(503).json({ error: "Account bans are not configured" });
    }
    return res.json({ accountKeys: await banStore.list() });
  });

  app.post("/api/admin/unban", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    const parsed = z
      .object({ accountKey: z.string().regex(/^[0-9a-f]{64}$/) })
      .safeParse(req.body);
    if (!parsed.success || !banStore) {
      return res.status(parsed.success ? 503 : 400).json({
        error: parsed.success
          ? "Account bans are not configured"
          : "Invalid account key",
      });
    }
    await banStore.remove(parsed.data.accountKey);
    log.warn("admin removed account game ban", {
      accountKey: parsed.data.accountKey,
      workerId,
    });
    return res.status(204).end();
  });

  app.get("/api/admin/reports", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    const currentReports = [
      ...chatReports().map((report) => ({
        ...report,
        source: "chat" as const,
        workerId,
      })),
      ...gm.adminReports().map((report) => ({ ...report, workerId })),
    ];
    localDataStore?.saveReports(currentReports);
    return res.json({
      reports: (localDataStore?.listReports() ?? currentReports).sort(
        (a, b) => b.createdAt - a.createdAt,
      ),
    });
  });

  app.post("/api/admin/kick", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;

    const parsed = z.object({ gameID: ID, clientID: ID }).safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Invalid game or client ID" });
    }

    const game = gm.game(parsed.data.gameID);
    if (game === null || !game.adminKickClient(parsed.data.clientID)) {
      return res.status(404).json({ error: "Online player not found" });
    }
    log.info("player kicked from admin panel", {
      gameID: parsed.data.gameID,
      clientID: parsed.data.clientID,
      workerId,
    });
    return res.status(204).end();
  });

  app.get("/api/admin/accounts", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    return res.json({ accounts: localDataStore.listAccounts() });
  });

  app.get("/api/admin/accounts/:id/inventory", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    if (!localDataStore.getAccount(req.params.id)) {
      return res.status(404).json({ error: "Account not found" });
    }
    return res.json({
      items: localDataStore.listAccountInventory(req.params.id),
    });
  });

  app.get("/api/admin/export", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local data store unavailable" });
    }
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Pragma", "no-cache");
    const content = JSON.stringify(
      {
        exportedAt: new Date().toISOString(),
        ...localDataStore.exportData(),
        gameAccountBanKeys: (await banStore?.list()) ?? [],
      },
      null,
      2,
    );
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="openfront-admin-export.json"',
    );
    res.setHeader("Cache-Control", "no-store");
    return res.send(content);
  });

  app.post("/api/admin/accounts", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const parsed = accountInputSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    const { username, password, phone } = parsed.data;
    const passwordHash = hashLocalPassword(password);
    try {
      const account = localDataStore.createAccount({
        username,
        phone: phone ?? null,
        passwordSalt: passwordHash.salt,
        passwordHash: passwordHash.hash,
      });
      log.info("admin created local account", { accountId: account.id, workerId });
      return res.status(201).json({ account });
    } catch (error) {
      if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
        return res.status(409).json({ error: "Username already exists" });
      }
      log.error("admin failed to create local account", { error, workerId });
      return res.status(500).json({ error: "Could not create account" });
    }
  });

  app.put("/api/admin/accounts/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const parsed = accountUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    const passwordHash = parsed.data.password
      ? hashLocalPassword(parsed.data.password)
      : undefined;
    try {
      const account = localDataStore.updateAccount(req.params.id, {
        username: parsed.data.username,
        phone: parsed.data.phone ?? null,
        passwordSalt: passwordHash?.salt,
        passwordHash: passwordHash?.hash,
      });
      if (!account) return res.status(404).json({ error: "Account not found" });
      log.info("admin updated local account", { accountId: account.id, workerId });
      return res.json({ account });
    } catch (error) {
      if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
        return res.status(409).json({ error: "Username already exists" });
      }
      log.error("admin failed to update local account", {
        error,
        accountId: req.params.id,
        workerId,
      });
      return res.status(500).json({ error: "Could not update account" });
    }
  });

  app.post("/api/admin/accounts/:id/ban", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const account = localDataStore.setAccountBanned(req.params.id, true);
    if (!account) return res.status(404).json({ error: "Account not found" });
    const kickedCount = gm.adminBanAccount(adminAccountKey(account.id));
    log.warn("admin banned local account", {
      accountId: account.id,
      kickedCount,
      workerId,
    });
    return res.json({ account, kickedCount });
  });

  app.post("/api/admin/accounts/:id/unban", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const account = localDataStore.setAccountBanned(req.params.id, false);
    if (!account) return res.status(404).json({ error: "Account not found" });
    log.info("admin unbanned local account", {
      accountId: account.id,
      workerId,
    });
    return res.json({ account });
  });

  app.post("/api/admin/accounts/:id/warn", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const parsed = z
      .object({ message: z.string().trim().min(1).max(500) })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Warning message is required" });
    }
    const account = localDataStore.warnAccount(req.params.id, parsed.data.message);
    if (!account) return res.status(404).json({ error: "Account not found" });
    log.warn("admin warned local account", {
      accountId: account.id,
      warningCount: account.warningCount,
      workerId,
    });
    return res.json({ account });
  });

  app.post("/api/admin/accounts/:id/inventory", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const parsed = z.object({ productId: z.string().uuid() }).safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "A valid productId is required" });
    }
    if (!localDataStore.getAccount(req.params.id)) {
      return res.status(404).json({ error: "Account not found" });
    }
    const item = localDataStore.grantInventoryItem(
      req.params.id,
      parsed.data.productId,
      process.env.ADMIN_PANEL_USERNAME ?? "admin",
    );
    if (!item) return res.status(404).json({ error: "Product not found" });
    log.info("admin granted local inventory item", {
      accountId: req.params.id,
      productId: parsed.data.productId,
      inventoryItemId: item.id,
      workerId,
    });
    return res.status(201).json({ item });
  });

  app.post("/api/admin/accounts/:id/temporary-ban", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const parsed = z
      .object({
        hours: z.number().int().min(1).max(24 * 365),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Ban duration must be 1-8760 hours" });
    }
    const account = localDataStore.setAccountTemporaryBan(
      req.params.id,
      Date.now() + parsed.data.hours * 60 * 60 * 1000,
    );
    if (!account) return res.status(404).json({ error: "Account not found" });
    const kickedCount = gm.adminBanAccount(adminAccountKey(account.id));
    log.warn("admin temporarily banned local account", {
      accountId: account.id,
      bannedUntil: account.bannedUntil,
      kickedCount,
      workerId,
    });
    return res.json({ account, kickedCount });
  });

  app.delete("/api/admin/accounts/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local account store unavailable" });
    }
    const account = localDataStore.getAccount(req.params.id);
    if (!account || !localDataStore.deleteAccount(req.params.id)) {
      return res.status(404).json({ error: "Account not found" });
    }
    gm.adminBanAccount(adminAccountKey(account.id));
    log.warn("admin deleted local account", {
      accountId: req.params.id,
      workerId,
    });
    return res.status(204).end();
  });

  app.get("/api/admin/products", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    return res.json({
      categories: localDataStore.listCategories(),
      products: localDataStore.listProducts().map((product) => ({
        ...product,
        imageUrl:
          product.imageMime === null
            ? null
            : `/w${workerId}/api/local/products/${product.id}/image`,
      })),
    });
  });

  app.get("/api/admin/categories", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    return res.json({ categories: localDataStore.listCategories() });
  });

  app.post("/api/admin/categories", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    const parsed = categoryInputSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    try {
      const category = localDataStore.createCategory(parsed.data.name);
      log.info("admin created local product category", {
        categoryId: category.id,
        workerId,
      });
      return res.status(201).json({ category });
    } catch (error) {
      if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
        return res.status(409).json({ error: "Category already exists" });
      }
      log.error("admin failed to create local product category", {
        error,
        workerId,
      });
      return res.status(500).json({ error: "Could not create category" });
    }
  });

  app.put("/api/admin/categories/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    const parsed = categoryInputSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    try {
      const category = localDataStore.updateCategory(req.params.id, parsed.data.name);
      if (!category) return res.status(404).json({ error: "Category not found" });
      log.info("admin updated local product category", {
        categoryId: category.id,
        workerId,
      });
      return res.json({ category });
    } catch (error) {
      if (error instanceof Error && error.message.includes("UNIQUE constraint")) {
        return res.status(409).json({ error: "Category already exists" });
      }
      log.error("admin failed to update local product category", {
        error,
        categoryId: req.params.id,
        workerId,
      });
      return res.status(500).json({ error: "Could not update category" });
    }
  });

  app.delete("/api/admin/categories/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    if (!localDataStore.deleteCategory(req.params.id)) {
      return res.status(404).json({ error: "Category not found" });
    }
    log.info("admin deleted local product category", {
      categoryId: req.params.id,
      workerId,
    });
    return res.status(204).end();
  });

  app.post("/api/admin/products", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    const parsed = productInputSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    if (
      parsed.data.categoryId &&
      !localDataStore.getCategory(parsed.data.categoryId)
    ) {
      return res.status(400).json({ error: "Category not found" });
    }
    let image: { bytes: Buffer; mime: string } | undefined;
    try {
      image = parseProductImage(parsed.data.imageDataUrl);
    } catch (error) {
      return res.status(400).json({
        error:
          error instanceof Error ? error.message : "Invalid product image",
      });
    }
    try {
      const product = localDataStore.createProduct({
        name: parsed.data.name,
        description: parsed.data.description,
        price: parsed.data.price,
        currency: parsed.data.currency,
        paymentUrl: parsed.data.paymentUrl,
        categoryId: parsed.data.categoryId,
        active: parsed.data.active,
        image,
      });
      log.info("admin created local product", { productId: product.id, workerId });
      return res.status(201).json({
        product: {
          ...product,
          imageUrl:
            product.imageMime === null
              ? null
              : `/w${workerId}/api/local/products/${product.id}/image`,
        },
      });
    } catch (error) {
      log.error("admin failed to create local product", { error, workerId });
      return res.status(500).json({ error: "Could not save product" });
    }
  });

  app.put("/api/admin/products/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    const parsed = productUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: z.prettifyError(parsed.error) });
    }
    if (
      parsed.data.categoryId &&
      !localDataStore.getCategory(parsed.data.categoryId)
    ) {
      return res.status(400).json({ error: "Category not found" });
    }
    let image: { bytes: Buffer; mime: string } | null | undefined;
    try {
      image =
        parsed.data.imageDataUrl === undefined
          ? undefined
          : parsed.data.imageDataUrl === null
            ? null
            : parseProductImage(parsed.data.imageDataUrl);
    } catch (error) {
      return res.status(400).json({
        error:
          error instanceof Error ? error.message : "Invalid product image",
      });
    }
    try {
      const product = localDataStore.updateProduct(req.params.id, {
        name: parsed.data.name,
        description: parsed.data.description,
        price: parsed.data.price,
        currency: parsed.data.currency,
        paymentUrl: parsed.data.paymentUrl,
        categoryId: parsed.data.categoryId,
        active: parsed.data.active,
        image,
      });
      if (!product) return res.status(404).json({ error: "Product not found" });
      log.info("admin updated local product", {
        productId: product.id,
        workerId,
      });
      return res.json({
        product: {
          ...product,
          imageUrl:
            product.imageMime === null
              ? null
              : `/w${workerId}/api/local/products/${product.id}/image`,
        },
      });
    } catch (error) {
      log.error("admin failed to update local product", {
        error,
        productId: req.params.id,
        workerId,
      });
      return res.status(500).json({ error: "Could not update product" });
    }
  });

  app.delete("/api/admin/products/:id", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    if (!localDataStore) {
      return res.status(503).json({ error: "Local product store unavailable" });
    }
    if (!localDataStore.deleteProduct(req.params.id)) {
      return res.status(404).json({ error: "Product not found" });
    }
    log.info("admin deleted local product", {
      productId: req.params.id,
      workerId,
    });
    return res.status(204).end();
  });
}

const usernameSchema = z
  .string()
  .trim()
  .min(2)
  .max(32)
  .regex(/^[\p{L}\p{N}_.-]+$/u);
const phoneSchema = z.string().trim().min(3).max(24).nullable().optional();
const accountInputSchema = z.object({
  username: usernameSchema,
  password: z.string().min(8).max(256),
  phone: phoneSchema,
});
const accountUpdateSchema = z.object({
  username: usernameSchema,
  password: z.string().min(8).max(256).optional(),
  phone: phoneSchema,
});
const productFieldsSchema = z.object({
  name: z.string().trim().min(1).max(120),
  description: z.string().max(2000).default(""),
  price: z.number().int().min(0).max(1_000_000_000),
  currency: z.enum(["تومان", "ریال", "USD"]),
  paymentUrl: z
    .string()
    .trim()
    .max(2048)
    .refine((value) => {
      try {
        return new URL(value).protocol === "https:";
      } catch {
        return false;
      }
    }, "Payment link must use HTTPS")
    .nullable()
    .optional(),
  categoryId: z.string().uuid().nullable().optional(),
  active: z.boolean().default(true),
});
const categoryInputSchema = z.object({
  name: z.string().trim().min(1).max(80),
});
const productInputSchema = productFieldsSchema.extend({
  imageDataUrl: z.string().max(4_200_000).nullable().optional(),
});
const productUpdateSchema = productFieldsSchema.extend({
  imageDataUrl: z.string().max(4_200_000).nullable().optional(),
});

function parseProductImage(
  dataUrl: string | null | undefined,
): { bytes: Buffer; mime: string } | undefined {
  if (!dataUrl) return undefined;
  const match = /^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(
    dataUrl,
  );
  if (!match) throw new Error("Unsupported product image encoding");
  const bytes = Buffer.from(match[2], "base64");
  if (bytes.length === 0 || bytes.length > 3 * 1024 * 1024) {
    throw new Error("Product image must be smaller than 3 MB");
  }
  const validSignature =
    (match[1] === "image/png" &&
      bytes.length >= 8 &&
      bytes.subarray(0, 8).equals(
        Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
      )) ||
    (match[1] === "image/jpeg" &&
      bytes.length >= 3 &&
      bytes[0] === 0xff &&
      bytes[1] === 0xd8 &&
      bytes[2] === 0xff) ||
    (match[1] === "image/webp" &&
      bytes.length >= 12 &&
      bytes.toString("ascii", 0, 4) === "RIFF" &&
      bytes.toString("ascii", 8, 12) === "WEBP");
  if (!validSignature) throw new Error("Product image data is invalid");
  return { mime: match[1], bytes };
}
