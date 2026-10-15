import { createHmac, scryptSync } from "crypto";
import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import path from "path";
import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerAdminPanelRoutes } from "../../src/server/AdminPanelRoutes";
import { LocalDataStore } from "../../src/server/LocalDataStore";

const PASSWORD = "test-panel-password";
const SESSION_SECRET = "test-admin-panel-session-secret-32-chars";

describe("admin panel login and sessions", () => {
  let app: Express;
  let server: Server;
  let baseUrl: string;
  let store: LocalDataStore;
  let dataDirectory: string;
  let reports: { id: string; createdAt: number; [key: string]: unknown }[];
  const originalEnv = {
    username: process.env.ADMIN_PANEL_USERNAME,
    passwordHash: process.env.ADMIN_PANEL_PASSWORD_HASH,
    sessionSecret: process.env.ADMIN_PANEL_SESSION_SECRET,
    numWorkers: process.env.NUM_WORKERS,
  };
  let maintenanceMode = false;

  beforeEach(async () => {
    const salt = "7bfa0a8d8e374bf3b1ca614874af92d0";
    process.env.ADMIN_PANEL_USERNAME = "TestAdmin";
    process.env.ADMIN_PANEL_PASSWORD_HASH = `scrypt$${salt}$${scryptSync(PASSWORD, Buffer.from(salt, "hex"), 32).toString("hex")}`;
    process.env.ADMIN_PANEL_SESSION_SECRET = SESSION_SECRET;
    process.env.NUM_WORKERS = "1";
    maintenanceMode = false;
    reports = [];
    dataDirectory = mkdtempSync(path.join(tmpdir(), "openfront-admin-data-"));
    store = new LocalDataStore(dataDirectory);

    app = express();
    app.use(express.json());
    registerAdminPanelRoutes({
      app,
      gm: {
        adminOverview: () => [],
        adminReports: () => reports,
        game: () => null,
        isMaintenanceMode: () => maintenanceMode,
        setMaintenanceMode: async (enabled: boolean) => {
          maintenanceMode = enabled;
        },
        adminBanAccount: () => 0,
      } as never,
      workerId: 0,
      localDataStore: store,
    });
    server = createServer(app);
    await new Promise<void>((resolve) =>
      server.listen(0, "127.0.0.1", resolve),
    );
    const address = server.address();
    if (address === null || typeof address === "string") {
      throw new Error("Expected ephemeral TCP server address");
    }
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterEach(async () => {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
    store.close();
    rmSync(dataDirectory, { recursive: true, force: true });
    restoreEnv("ADMIN_PANEL_USERNAME", originalEnv.username);
    restoreEnv("ADMIN_PANEL_PASSWORD_HASH", originalEnv.passwordHash);
    restoreEnv("ADMIN_PANEL_SESSION_SECRET", originalEnv.sessionSecret);
    restoreEnv("NUM_WORKERS", originalEnv.numWorkers);
  });

  it("issues a server-signed session for configured credentials", async () => {
    const response = await fetch(`${baseUrl}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "TestAdmin", password: PASSWORD }),
    });
    expect(response.status).toBe(200);
    const session = (await response.json()) as { token: string };
    expect(session.token).toContain(".");

    const protectedResponse = await fetch(`${baseUrl}/api/admin/session`, {
      headers: { Authorization: `Bearer ${session.token}` },
    });
    expect(protectedResponse.status).toBe(204);
  });

  it("rejects invalid credentials and protects routes without a session", async () => {
    const response = await fetch(`${baseUrl}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "TestAdmin", password: "wrong" }),
    });
    expect(response.status).toBe(401);

    const protectedResponse = await fetch(`${baseUrl}/api/admin/session`);
    expect(protectedResponse.status).toBe(401);
  });

  it("rejects a session after its signing secret changes", async () => {
    const login = await fetch(`${baseUrl}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "TestAdmin", password: PASSWORD }),
    });
    const { token } = (await login.json()) as { token: string };
    process.env.ADMIN_PANEL_SESSION_SECRET =
      "changed-admin-panel-secret-32-characters";

    const protectedResponse = await fetch(`${baseUrl}/api/admin/session`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(protectedResponse.status).toBe(401);
  });

  it("protects operational logs and allows authenticated maintenance control", async () => {
    const login = await fetch(`${baseUrl}/api/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "TestAdmin", password: PASSWORD }),
    });
    const { token } = (await login.json()) as { token: string };
    const authorization = { Authorization: `Bearer ${token}` };
    store.appendAdminLog({
      timestamp: new Date().toISOString(),
      level: "info",
      message: "test persisted log",
      metadata: {},
    });

    expect((await fetch(`${baseUrl}/api/admin/logs`)).status).toBe(401);
    const logs = await fetch(`${baseUrl}/api/admin/logs?limit=10`, {
      headers: authorization,
    });
    expect(logs.status).toBe(200);
    expect(await logs.json()).toMatchObject({
      logs: [expect.objectContaining({ message: "test persisted log" })],
    });
    const systemLogs = await fetch(`${baseUrl}/api/admin/system-logs`, {
      headers: authorization,
    });
    expect(systemLogs.status).toBe(200);
    expect(await systemLogs.json()).toMatchObject({
      available: expect.any(Boolean),
      logs: expect.any(Array),
    });

    const maintenance = await fetch(`${baseUrl}/api/admin/maintenance`, {
      method: "POST",
      headers: { ...authorization, "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: true }),
    });
    expect(maintenance.status).toBe(200);
    expect(await maintenance.json()).toEqual({ maintenanceMode: true });
    expect(maintenanceMode).toBe(true);
  });

  it("manages local accounts without exposing password hashes", async () => {
    const token = testAdminToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const create = await fetch(`${baseUrl}/api/admin/accounts`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username: "A13",
        password: "local-password-123",
        phone: "09123456789",
      }),
    });
    expect(create.status).toBe(201);
    const { account } = (await create.json()) as {
      account: { id: string; username: string; banned: boolean };
    };
    expect(account).toMatchObject({ username: "A13", banned: false });
    expect(account).not.toHaveProperty("passwordHash");
    expect(account).not.toHaveProperty("passwordSalt");

    const warning = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}/warn`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ message: "Please follow the rules" }),
      },
    );
    expect(await warning.json()).toMatchObject({
      account: { warningCount: 1 },
    });

    const temporaryBan = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}/temporary-ban`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ hours: 1 }),
      },
    );
    expect(await temporaryBan.json()).toMatchObject({
      account: { banned: false, bannedUntil: expect.any(Number) },
      kickedCount: 0,
    });

    const duplicate = await fetch(`${baseUrl}/api/admin/accounts`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        username: "a13",
        password: "another-password-123",
      }),
    });
    expect(duplicate.status).toBe(409);

    const update = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          username: "A13-edited",
          password: "new-local-password-123",
          phone: null,
        }),
      },
    );
    expect(update.status).toBe(200);
    expect(await update.json()).toMatchObject({
      account: { username: "A13-edited", phone: null },
    });

    const ban = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}/ban`,
      { method: "POST", headers },
    );
    expect(await ban.json()).toMatchObject({ account: { banned: true } });
    const unban = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}/unban`,
      { method: "POST", headers },
    );
    expect(await unban.json()).toMatchObject({ account: { banned: false } });

    const list = await fetch(`${baseUrl}/api/admin/accounts`, { headers });
    expect(await list.json()).toMatchObject({
      accounts: [
        {
          id: account.id,
          username: "A13-edited",
          bannedUntil: null,
          warningCount: 1,
        },
      ],
    });

    const remove = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}`,
      { method: "DELETE", headers },
    );
    expect(remove.status).toBe(204);
  });

  it("persists reports and exports a complete sensitive backup", async () => {
    const token = testAdminToken();
    const headers = { Authorization: `Bearer ${token}` };
    const account = store.createAccount({
      username: "ExportedUser",
      phone: null,
      passwordSalt: "ab".repeat(16),
      passwordHash: "cd".repeat(32),
    });
    store.createProduct({
      name: "Exported product",
      description: "",
      price: 10,
      currency: "USD",
      active: true,
    });
    reports = [
      {
        id: "game-1:report-1",
        source: "game",
        workerId: 0,
        createdAt: Date.now(),
        reportedBy: { username: "Reporter" },
        reported: { username: "ExportedUser" },
        reason: "other",
      },
    ];

    const firstRead = await fetch(`${baseUrl}/api/admin/reports`, { headers });
    expect(await firstRead.json()).toMatchObject({
      reports: [{ id: "game-1:report-1" }],
    });
    reports = [];
    const afterRestartLikeRead = await fetch(`${baseUrl}/api/admin/reports`, {
      headers,
    });
    expect(await afterRestartLikeRead.json()).toMatchObject({
      reports: [{ id: "game-1:report-1" }],
    });

    const exportResponse = await fetch(`${baseUrl}/api/admin/export`, {
      headers,
    });
    expect(exportResponse.headers.get("content-disposition")).toContain(
      "attachment",
    );
    const exported = await exportResponse.json();
    expect(exported).toMatchObject({
      accounts: [{ id: account.id, username: "ExportedUser" }],
      accountCredentials: [
        {
          accountId: account.id,
          passwordSalt: "ab".repeat(16),
          passwordHash: "cd".repeat(32),
        },
      ],
      products: [{ name: "Exported product" }],
    });
    expect(exportResponse.headers.get("cache-control")).toContain("no-store");
  });

  it("creates product categories and grants products into persistent account inventory", async () => {
    const headers = {
      Authorization: `Bearer ${testAdminToken()}`,
      "Content-Type": "application/json",
    };
    const account = store.createAccount({
      username: "InventoryUser",
      phone: null,
      passwordSalt: "ab".repeat(16),
      passwordHash: "cd".repeat(32),
    });
    const categoryResponse = await fetch(`${baseUrl}/api/admin/categories`, {
      method: "POST",
      headers,
      body: JSON.stringify({ name: "Bundles" }),
    });
    expect(categoryResponse.status).toBe(201);
    const { category } = (await categoryResponse.json()) as {
      category: { id: string; name: string };
    };
    const productResponse = await fetch(`${baseUrl}/api/admin/products`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: "Welcome pack",
        description: "Granted item",
        price: 0,
        currency: "USD",
        categoryId: category.id,
        active: true,
      }),
    });
    expect(productResponse.status).toBe(201);
    const { product } = (await productResponse.json()) as {
      product: { id: string; categoryName: string };
    };
    expect(product.categoryName).toBe("Bundles");
    const renameCategory = await fetch(
      `${baseUrl}/api/admin/categories/${category.id}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({ name: "Featured" }),
      },
    );
    expect(renameCategory.status).toBe(200);
    expect(store.getProduct(product.id)?.categoryName).toBe("Featured");

    const grant = await fetch(
      `${baseUrl}/api/admin/accounts/${account.id}/inventory`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ productId: product.id }),
      },
    );
    expect(grant.status).toBe(201);
    expect(await grant.json()).toMatchObject({
      item: { accountId: account.id, productId: product.id, name: "Welcome pack" },
    });
    expect(store.getAccount(account.id)?.inventoryCount).toBe(1);
    const deleteCategory = await fetch(
      `${baseUrl}/api/admin/categories/${category.id}`,
      { method: "DELETE", headers },
    );
    expect(deleteCategory.status).toBe(204);
    expect(store.getProduct(product.id)?.categoryId).toBeNull();
  });

  it("manages local products and rejects invalid image data", async () => {
    const token = testAdminToken();
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const pngDataUrl =
      "data:image/png;base64,iVBORw0KGgoBAgM=";

    const create = await fetch(`${baseUrl}/api/admin/products`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: "Starter product",
        description: "Local catalog item",
        price: 250000,
        currency: "تومان",
        active: true,
        paymentUrl: "https://pay.example.test/checkout",
        imageDataUrl: pngDataUrl,
      }),
    });
    expect(create.status).toBe(201);
    const { product } = (await create.json()) as {
      product: {
        id: string;
        imageUrl: string;
        imageMime: string;
        paymentUrl: string;
      };
    };
    expect(product.imageUrl).toContain("/api/local/products/");
    expect(product.imageMime).toBe("image/png");
    expect(product.paymentUrl).toBe("https://pay.example.test/checkout");

    const invalidPaymentUrl = await fetch(`${baseUrl}/api/admin/products`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: "Unsafe link",
        price: 1,
        currency: "USD",
        paymentUrl: "http://untrusted.example.test/checkout",
      }),
    });
    expect(invalidPaymentUrl.status).toBe(400);

    const invalidImage = await fetch(`${baseUrl}/api/admin/products`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: "Invalid image",
        price: 1,
        currency: "USD",
        imageDataUrl: "data:image/png;base64,aGVsbG8=",
      }),
    });
    expect(invalidImage.status).toBe(400);

    const update = await fetch(
      `${baseUrl}/api/admin/products/${product.id}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          name: "Updated product",
          description: "Edited",
          price: 300000,
          currency: "ریال",
          active: false,
          paymentUrl: null,
          imageDataUrl: null,
        }),
      },
    );
    expect(update.status).toBe(200);
    expect(await update.json()).toMatchObject({
      product: {
        name: "Updated product",
        price: 300000,
        currency: "ریال",
        active: false,
        imageMime: null,
        paymentUrl: null,
      },
    });

    const remove = await fetch(
      `${baseUrl}/api/admin/products/${product.id}`,
      { method: "DELETE", headers },
    );
    expect(remove.status).toBe(204);
  });
});

function restoreEnv(key: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[key];
  } else {
    process.env[key] = value;
  }
}

function testAdminToken(): string {
  const payload = Buffer.from(
    JSON.stringify({
      username: "TestAdmin",
      exp: Math.floor(Date.now() / 1000) + 60,
    }),
  ).toString("base64url");
  const signature = createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("base64url");
  return `${payload}.${signature}`;
}
