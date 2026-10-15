import type { Application } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { logger } from "./Logger";
import {
  issueLocalAccessToken,
  localPasswordMatches,
  localUserMe,
  verifyLocalAccessToken,
} from "./LocalAuth";
import { LocalDataStore } from "./LocalDataStore";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
const log = logger.child({ comp: "local_accounts" });

export function registerLocalAccountRoutes({
  app,
  store,
  workerId,
}: {
  app: Application;
  store: LocalDataStore;
  workerId: number;
}) {
  app.post("/api/local/login", loginLimiter, async (req, res) => {
    const parsed = z
      .object({
        username: z.string().trim().min(1).max(80),
        password: z.string().min(1).max(256),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Username and password required" });
    }

    const account = store.findAccountByUsername(parsed.data.username);
    const validPassword =
      account !== null &&
      localPasswordMatches(
        parsed.data.password,
        account.passwordSalt,
        account.passwordHash,
      );
    if (!validPassword || !account) {
      log.warn("local account sign-in rejected", {
        username: parsed.data.username,
        workerId,
      });
      return res.status(401).json({ error: "Invalid username or password" });
    }
    if (
      account.banned ||
      (account.bannedUntil !== null && account.bannedUntil > Date.now())
    ) {
      return res.status(403).json({ error: "Account is banned or suspended" });
    }
    try {
      const session = await issueLocalAccessToken(account.id);
      log.info("local account signed in", {
        accountId: account.id,
        workerId,
      });
      return res.json({ ...session, user: localUserMe(account.id, store) });
    } catch (error) {
      log.error("Failed to issue local account session", {
        error: error instanceof Error ? error.message : String(error),
      });
      return res.status(503).json({ error: "Local account login is not configured" });
    }
  });

  app.get("/api/local/me", async (req, res) => {
    const token = bearerToken(req.headers.authorization);
    if (!token) return res.status(401).json({ error: "Authentication required" });
    const verified = await verifyLocalAccessToken(token, store);
    if (verified.type !== "success") {
      return res.status(401).json({ error: "Invalid or expired session" });
    }
    return res.json(localUserMe(verified.accountId, store));
  });

  app.get("/api/local/inventory", async (req, res) => {
    const token = bearerToken(req.headers.authorization);
    if (!token) return res.status(401).json({ error: "Authentication required" });
    const verified = await verifyLocalAccessToken(token, store);
    if (verified.type !== "success") {
      return res.status(401).json({ error: "Invalid or expired session" });
    }
    res.setHeader("Cache-Control", "no-store");
    return res.json({ items: store.listAccountInventory(verified.accountId) });
  });

  app.get("/api/local/products", (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    return res.json({
      categories: store.listCategories(),
      products: store
        .listProducts(true)
        .map((product) => ({
          ...product,
          imageUrl:
            product.imageMime === null
              ? null
              : `/w${workerId}/api/local/products/${product.id}/image`,
        })),
    });
  });

  app.get("/api/local/products/:id/image", (req, res) => {
    const image = store.getProductImage(req.params.id);
    if (!image) return res.status(404).json({ error: "Image not found" });
    res.setHeader("Content-Type", image.mime);
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.setHeader("X-Content-Type-Options", "nosniff");
    return res.send(image.bytes);
  });
}

function bearerToken(authorization: string | undefined): string | null {
  if (!authorization?.startsWith("Bearer ")) return null;
  const token = authorization.slice("Bearer ".length);
  return token.length > 0 ? token : null;
}
