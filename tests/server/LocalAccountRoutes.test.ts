// @vitest-environment node
import { mkdtempSync, rmSync } from "fs";
import { tmpdir } from "os";
import express from "express";
import { createServer, type Server } from "http";
import path from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { hashLocalPassword } from "../../src/server/LocalAuth";
import { registerLocalAccountRoutes } from "../../src/server/LocalAccountRoutes";
import { LocalDataStore } from "../../src/server/LocalDataStore";

describe("local account routes", () => {
  let server: Server;
  let store: LocalDataStore;
  let baseUrl: string;
  let directory: string;
  const oldEnv = {
    authSecret: process.env.LOCAL_AUTH_SECRET,
    domain: process.env.DOMAIN,
  };

  beforeEach(async () => {
    directory = mkdtempSync(path.join(tmpdir(), "openfront-local-routes-"));
    store = new LocalDataStore(directory);
    const password = hashLocalPassword("test-password-123");
    store.createAccount({
      username: "A13",
      phone: null,
      passwordSalt: password.salt,
      passwordHash: password.hash,
    });
    store.createProduct({
      name: "Visible product",
      description: "Test",
      price: 300,
      currency: "تومان",
      active: true,
      image: {
        bytes: Buffer.from([
          0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1,
        ]),
        mime: "image/png",
      },
    });
    process.env.LOCAL_AUTH_SECRET =
      "test-local-auth-secret-with-more-than-32-characters";
    process.env.DOMAIN = "localhost";
    const app = express();
    app.use(express.json());
    registerLocalAccountRoutes({ app, store, workerId: 0 });
    server = createServer(app);
    await new Promise<void>((resolve) =>
      server.listen(0, "127.0.0.1", resolve),
    );
    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("Expected ephemeral server address");
    }
    baseUrl = `http://127.0.0.1:${address.port}`;
  });

  afterEach(async () => {
    await new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
    store.close();
    rmSync(directory, { recursive: true, force: true });
    restoreEnv("LOCAL_AUTH_SECRET", oldEnv.authSecret);
    restoreEnv("DOMAIN", oldEnv.domain);
  });

  it("authenticates a local account and returns its project profile", async () => {
    const login = await fetch(`${baseUrl}/api/local/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "a13",
        password: "test-password-123",
      }),
    });
    expect(login.status).toBe(200);
    const { token } = (await login.json()) as { token: string };
    const me = await fetch(`${baseUrl}/api/local/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(me.status).toBe(200);
    expect(await me.json()).toMatchObject({
      player: { username: "A13", adfree: false, friends: [] },
    });
  });

  it("shows only active products and serves stored image bytes", async () => {
    const response = await fetch(`${baseUrl}/api/local/products`);
    expect(response.status).toBe(200);
    const result = (await response.json()) as {
      products: { id: string; imageUrl: string }[];
    };
    expect(result.products).toHaveLength(1);
    const image = await fetch(
      `${baseUrl}${result.products[0].imageUrl.replace(/^\/w0/, "")}`,
    );
    expect(image.status).toBe(200);
    expect(image.headers.get("content-type")).toBe("image/png");
  });

  it("returns only the signed-in local account's stored product inventory", async () => {
    const login = await fetch(`${baseUrl}/api/local/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "A13",
        password: "test-password-123",
      }),
    });
    const { token } = (await login.json()) as { token: string };
    const account = store.findAccountByUsername("A13");
    const product = store.listProducts()[0];
    if (!account || !product) throw new Error("Expected account and product fixtures");
    store.grantInventoryItem(account.id, product.id, "TestAdmin");

    const inventory = await fetch(`${baseUrl}/api/local/inventory`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(inventory.status).toBe(200);
    expect(inventory.headers.get("cache-control")).toContain("no-store");
    expect(await inventory.json()).toMatchObject({
      items: [{ accountId: account.id, productId: product.id, name: "Visible product" }],
    });
  });
});

function restoreEnv(key: string, value: string | undefined) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}
