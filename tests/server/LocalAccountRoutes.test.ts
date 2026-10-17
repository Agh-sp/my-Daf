// @vitest-environment node
import express from "express";
import { mkdtempSync, rmSync } from "fs";
import { createServer, type Server } from "http";
import { tmpdir } from "os";
import path from "path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { registerLocalAccountRoutes } from "../../src/server/LocalAccountRoutes";
import { hashLocalPassword } from "../../src/server/LocalAuth";
import { LocalDataStore } from "../../src/server/LocalDataStore";

describe("local account routes", () => {
  let server: Server;
  let store: LocalDataStore;
  let baseUrl: string;
  let directory: string;
  let sendVerificationCode: (mobile: string, code: string) => Promise<void>;
  let sentVerification: { mobile: string; code: string } | null;
  const oldEnv = {
    authSecret: process.env.LOCAL_AUTH_SECRET,
    domain: process.env.DOMAIN,
    phoneSignupEnabled: process.env.LOCAL_PHONE_SIGNUP_ENABLED,
  };

  beforeEach(async () => {
    directory = mkdtempSync(path.join(tmpdir(), "openfront-local-routes-"));
    store = new LocalDataStore(directory);
    const password = hashLocalPassword("test-password-123");
    store.createAccount({
      username: "A13",
      phone: "09123456789",
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
        bytes: Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 1]),
        mime: "image/png",
      },
    });
    process.env.LOCAL_AUTH_SECRET =
      "test-local-auth-secret-with-more-than-32-characters";
    process.env.DOMAIN = "localhost";
    process.env.LOCAL_PHONE_SIGNUP_ENABLED = "true";
    const app = express();
    app.use(express.json());
    sentVerification = null;
    sendVerificationCode = async (mobile, code) => {
      sentVerification = { mobile, code };
    };
    registerLocalAccountRoutes({
      app,
      store,
      workerId: 0,
      sendVerificationCode,
    });
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
    restoreEnv("LOCAL_PHONE_SIGNUP_ENABLED", oldEnv.phoneSignupEnabled);
  });

  it("disables public phone signup when the feature flag is off", async () => {
    process.env.LOCAL_PHONE_SIGNUP_ENABLED = "false";

    const options = await fetch(`${baseUrl}/api/local/auth-options`);
    expect(await options.json()).toEqual({ phoneSignupEnabled: false });

    const codeRequest = await fetch(
      `${baseUrl}/api/local/phone/request-code`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: "9123456788", purpose: "register" }),
      },
    );
    expect(codeRequest.status).toBe(403);

    const registration = await fetch(`${baseUrl}/api/local/phone/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "9123456788",
        code: "123456",
        username: "PhonePlayer",
        password: "new-password-123",
      }),
    });
    expect(registration.status).toBe(403);
    expect(sentVerification).toBeNull();
    expect(store.findAccountsByPhone("9123456788")).toHaveLength(0);
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

  it("sends a login code and consumes it once for phone sign-in", async () => {
    const requestCode = await fetch(`${baseUrl}/api/local/phone/request-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "+989123456789", purpose: "login" }),
    });
    expect(requestCode.status).toBe(200);
    const sent = sentVerification;
    if (!sent) throw new Error("Expected a verification SMS");
    const { mobile, code } = sent;
    expect(mobile).toBe("9123456789");
    expect(code).toMatch(/^\d{6}$/);

    const repeatedRequest = await fetch(
      `${baseUrl}/api/local/phone/request-code`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: mobile, purpose: "login" }),
      },
    );
    expect(repeatedRequest.status).toBe(429);

    const login = await fetch(`${baseUrl}/api/local/phone/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "09123456789", code }),
    });
    expect(login.status).toBe(200);
    expect(await login.json()).toMatchObject({
      user: { player: { username: "A13" } },
    });

    const reusedCode = await fetch(`${baseUrl}/api/local/phone/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "9123456789", code }),
    });
    expect(reusedCode.status).toBe(401);
  });

  it("creates an account only after a valid registration code", async () => {
    const phone = "9123456788";
    const requestCode = await fetch(`${baseUrl}/api/local/phone/request-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, purpose: "register" }),
    });
    expect(requestCode.status).toBe(200);
    const sent = sentVerification;
    if (!sent) throw new Error("Expected a verification SMS");
    const { code } = sent;
    const wrongCode = code === "000000" ? "000001" : "000000";

    const invalidCode = await fetch(`${baseUrl}/api/local/phone/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone,
        code: wrongCode,
        username: "PhonePlayer",
        password: "new-password-123",
      }),
    });
    expect(invalidCode.status).toBe(401);

    const registration = await fetch(`${baseUrl}/api/local/phone/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone,
        code,
        username: "PhonePlayer",
        password: "new-password-123",
      }),
    });
    expect(registration.status).toBe(201);
    expect(await registration.json()).toMatchObject({
      user: { player: { username: "PhonePlayer" } },
    });
    expect(store.findAccountsByPhone(phone)).toHaveLength(1);
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
    if (!account || !product)
      throw new Error("Expected account and product fixtures");
    store.grantInventoryItem(account.id, product.id, "TestAdmin");

    const inventory = await fetch(`${baseUrl}/api/local/inventory`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(inventory.status).toBe(200);
    expect(inventory.headers.get("cache-control")).toContain("no-store");
    expect(await inventory.json()).toMatchObject({
      items: [
        {
          accountId: account.id,
          productId: product.id,
          name: "Visible product",
        },
      ],
    });
  });
});

function restoreEnv(key: string, value: string | undefined) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}
