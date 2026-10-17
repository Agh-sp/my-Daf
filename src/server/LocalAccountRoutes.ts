import { randomInt } from "crypto";
import type { Application } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import {
  hashLocalPassword,
  hashLocalPhoneVerificationCode,
  issueLocalAccessToken,
  localPasswordMatches,
  localUserMe,
  verifyLocalAccessToken,
} from "./LocalAuth";
import { LocalDataStore, LocalPhoneAlreadyExistsError } from "./LocalDataStore";
import { logger } from "./Logger";
import {
  sendSmsIrVerificationCode,
  SmsIrConfigurationError,
  SmsIrRequestError,
} from "./SmsIr";

const PHONE_CODE_TTL_MS = 5 * 60 * 1000;
const PHONE_CODE_COOLDOWN_MS = 60 * 1000;
const PHONE_CODE_MAX_ATTEMPTS = 5;

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});
const phoneCodeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});
const phoneAuthLimiter = rateLimit({
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
  sendVerificationCode = sendSmsIrVerificationCode,
}: {
  app: Application;
  store: LocalDataStore;
  workerId: number;
  sendVerificationCode?: (mobile: string, code: string) => Promise<void>;
}) {
  app.get("/api/local/auth-options", (_req, res) => {
    res.json({
      phoneSignupEnabled: process.env.LOCAL_PHONE_SIGNUP_ENABLED === "true",
    });
  });

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
      return res
        .status(503)
        .json({ error: "Local account login is not configured" });
    }
  });

  app.post(
    "/api/local/phone/request-code",
    phoneCodeLimiter,
    async (req, res) => {
      const parsed = z
        .object({
          phone: z.string().trim().min(1).max(32),
          purpose: z.enum(["login", "register"]),
        })
        .safeParse(req.body);
      if (!parsed.success) {
        return res
          .status(400)
          .json({ error: "Valid phone and purpose required" });
      }
      if (
        parsed.data.purpose === "register" &&
        process.env.LOCAL_PHONE_SIGNUP_ENABLED !== "true"
      ) {
        return res.status(403).json({ error: "Phone signup is disabled" });
      }
      const mobile = normalizeIranianMobile(parsed.data.phone);
      if (!mobile) {
        return res.status(400).json({ error: "Invalid Iranian mobile number" });
      }

      const now = Date.now();
      if (
        !store.reservePhoneVerification(
          mobile,
          parsed.data.purpose,
          now,
          PHONE_CODE_COOLDOWN_MS,
          now + PHONE_CODE_TTL_MS,
        )
      ) {
        return res
          .status(429)
          .json({ error: "Please wait before requesting another code" });
      }

      const code = randomInt(0, 1_000_000).toString().padStart(6, "0");
      try {
        const codeHash = hashLocalPhoneVerificationCode(
          mobile,
          parsed.data.purpose,
          code,
        );
        await sendVerificationCode(mobile, code);
        store.completePhoneVerification(mobile, parsed.data.purpose, codeHash);
        log.info("local phone verification code sent", {
          purpose: parsed.data.purpose,
          workerId,
        });
        return res.json({ expiresIn: PHONE_CODE_TTL_MS / 1000 });
      } catch (error) {
        if (error instanceof SmsIrConfigurationError) {
          log.error("SMS.ir phone verification is not configured", {
            workerId,
          });
          return res
            .status(503)
            .json({ error: "Phone verification is not configured" });
        }
        if (error instanceof SmsIrRequestError) {
          log.error("SMS.ir rejected a phone verification request", {
            httpStatus: error.httpStatus,
            providerStatus: error.providerStatus,
            workerId,
          });
          return res
            .status(503)
            .json({ error: "Could not send verification code" });
        }
        log.error("Failed to send local phone verification code", {
          error: error instanceof Error ? error.message : String(error),
          workerId,
        });
        return res
          .status(503)
          .json({ error: "Phone verification is unavailable" });
      }
    },
  );

  app.post("/api/local/phone/login", phoneAuthLimiter, async (req, res) => {
    const parsed = z
      .object({
        phone: z.string().trim().min(1).max(32),
        code: z.string().regex(/^\d{6}$/),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: "Valid phone and code required" });
    }
    const mobile = normalizeIranianMobile(parsed.data.phone);
    if (!mobile) {
      return res.status(400).json({ error: "Invalid Iranian mobile number" });
    }
    let codeHash: string;
    try {
      codeHash = hashLocalPhoneVerificationCode(
        mobile,
        "login",
        parsed.data.code,
      );
    } catch (error) {
      log.error("Local phone authentication is not configured", {
        error: error instanceof Error ? error.message : String(error),
        workerId,
      });
      return res
        .status(503)
        .json({ error: "Phone verification is not configured" });
    }
    if (
      !store.consumePhoneVerification(
        mobile,
        "login",
        codeHash,
        Date.now(),
        PHONE_CODE_MAX_ATTEMPTS,
      )
    ) {
      return res
        .status(401)
        .json({ error: "Invalid or expired verification code" });
    }

    const accounts = store.findAccountsByPhone(mobile);
    if (accounts.length !== 1) {
      return res
        .status(401)
        .json({ error: "Invalid or expired verification code" });
    }
    const account = accounts[0];
    if (
      account.banned ||
      (account.bannedUntil !== null && account.bannedUntil > Date.now())
    ) {
      return res.status(403).json({ error: "Account is banned or suspended" });
    }
    try {
      const session = await issueLocalAccessToken(account.id);
      log.info("local account signed in with phone verification", {
        accountId: account.id,
        workerId,
      });
      return res.json({ ...session, user: localUserMe(account.id, store) });
    } catch (error) {
      log.error("Failed to issue local account session", {
        error: error instanceof Error ? error.message : String(error),
      });
      return res
        .status(503)
        .json({ error: "Local account login is not configured" });
    }
  });

  app.post("/api/local/phone/register", phoneAuthLimiter, async (req, res) => {
    if (process.env.LOCAL_PHONE_SIGNUP_ENABLED !== "true") {
      return res.status(403).json({ error: "Phone signup is disabled" });
    }
    const parsed = z
      .object({
        phone: z.string().trim().min(1).max(32),
        code: z.string().regex(/^\d{6}$/),
        username: z.string().trim().min(1).max(80),
        password: z.string().min(8).max(256),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ error: "Valid phone, code, username and password required" });
    }
    const mobile = normalizeIranianMobile(parsed.data.phone);
    if (!mobile) {
      return res.status(400).json({ error: "Invalid Iranian mobile number" });
    }
    if (store.findAccountsByPhone(mobile).length > 0) {
      return res.status(409).json({ error: "Phone number already exists" });
    }
    let codeHash: string;
    try {
      codeHash = hashLocalPhoneVerificationCode(
        mobile,
        "register",
        parsed.data.code,
      );
    } catch (error) {
      log.error("Local phone authentication is not configured", {
        error: error instanceof Error ? error.message : String(error),
        workerId,
      });
      return res
        .status(503)
        .json({ error: "Phone verification is not configured" });
    }
    if (
      !store.consumePhoneVerification(
        mobile,
        "register",
        codeHash,
        Date.now(),
        PHONE_CODE_MAX_ATTEMPTS,
      )
    ) {
      return res
        .status(401)
        .json({ error: "Invalid or expired verification code" });
    }

    const password = hashLocalPassword(parsed.data.password);
    try {
      const account = store.createPhoneAccount({
        mobile,
        username: parsed.data.username,
        passwordSalt: password.salt,
        passwordHash: password.hash,
      });
      const session = await issueLocalAccessToken(account.id);
      log.info("local account registered with phone verification", {
        accountId: account.id,
        workerId,
      });
      return res
        .status(201)
        .json({ ...session, user: localUserMe(account.id, store) });
    } catch (error) {
      if (error instanceof LocalPhoneAlreadyExistsError) {
        return res.status(409).json({ error: "Phone number already exists" });
      }
      if (
        error instanceof Error &&
        error.message.includes("UNIQUE constraint")
      ) {
        return res.status(409).json({ error: "Username already exists" });
      }
      log.error("Failed to register local account", {
        error: error instanceof Error ? error.message : String(error),
        workerId,
      });
      return res.status(500).json({ error: "Could not create account" });
    }
  });

  app.get("/api/local/me", async (req, res) => {
    const token = bearerToken(req.headers.authorization);
    if (!token)
      return res.status(401).json({ error: "Authentication required" });
    const verified = await verifyLocalAccessToken(token, store);
    if (verified.type !== "success") {
      return res.status(401).json({ error: "Invalid or expired session" });
    }
    return res.json(localUserMe(verified.accountId, store));
  });

  app.get("/api/local/inventory", async (req, res) => {
    const token = bearerToken(req.headers.authorization);
    if (!token)
      return res.status(401).json({ error: "Authentication required" });
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
      products: store.listProducts(true).map((product) => ({
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

function normalizeIranianMobile(value: string): string | null {
  const digits = value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/\D/g, "");
  const mobile = digits.startsWith("0098")
    ? digits.slice(4)
    : digits.startsWith("98")
      ? digits.slice(2)
      : digits.startsWith("0")
        ? digits.slice(1)
        : digits;
  return /^9\d{9}$/.test(mobile) ? mobile : null;
}
