import { ID } from "@openfront/engine-api/Schemas";
import { createHmac, scrypt, timingSafeEqual } from "crypto";
import type { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import os from "os";
import { promisify } from "util";
import { z } from "zod";
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
}: {
  app: import("express").Application;
  gm: GameManager;
  workerId: number;
  chatReports?: () => readonly GlobalChatReport[];
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
      games: gm.adminOverview(),
    });
  });

  app.get("/api/admin/reports", async (req, res) => {
    if (!(await authorizeAdmin(req, res))) return;
    return res.json({ reports: chatReports() });
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
}
