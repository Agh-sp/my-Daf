import { scryptSync } from "crypto";
import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerAdminPanelRoutes } from "../../src/server/AdminPanelRoutes";

const PASSWORD = "test-panel-password";
const SESSION_SECRET = "test-admin-panel-session-secret-32-chars";

describe("admin panel login and sessions", () => {
  let app: Express;
  let server: Server;
  let baseUrl: string;
  const originalEnv = {
    username: process.env.ADMIN_PANEL_USERNAME,
    passwordHash: process.env.ADMIN_PANEL_PASSWORD_HASH,
    sessionSecret: process.env.ADMIN_PANEL_SESSION_SECRET,
    numWorkers: process.env.NUM_WORKERS,
  };

  beforeEach(async () => {
    const salt = "7bfa0a8d8e374bf3b1ca614874af92d0";
    process.env.ADMIN_PANEL_USERNAME = "TestAdmin";
    process.env.ADMIN_PANEL_PASSWORD_HASH = `scrypt$${salt}$${scryptSync(PASSWORD, Buffer.from(salt, "hex"), 32).toString("hex")}`;
    process.env.ADMIN_PANEL_SESSION_SECRET = SESSION_SECRET;
    process.env.NUM_WORKERS = "1";

    app = express();
    app.use(express.json());
    registerAdminPanelRoutes({
      app,
      gm: { adminOverview: () => [], game: () => null } as never,
      workerId: 0,
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
});

function restoreEnv(key: string, value: string | undefined) {
  if (value === undefined) {
    delete process.env[key];
  } else {
    process.env[key] = value;
  }
}
