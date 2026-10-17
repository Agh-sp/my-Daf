import {
  TokenPayload,
  TokenPayloadSchema,
  UserMeResponse,
} from "@openfront/shared/ApiSchemas";
import { base64urlToUuid, uuidToBase64url } from "@openfront/shared/Base64";
import { createHmac, randomUUID, scryptSync, timingSafeEqual } from "crypto";
import { decodeJwt, jwtVerify, SignJWT } from "jose";
import { getLocalDataStore, LocalDataStore } from "./LocalDataStore";
import { ServerEnv } from "./ServerEnv";

const ENCODER = new TextEncoder();
const SCRYPT_BYTES = 32;

function secret(): Uint8Array {
  const value = process.env.LOCAL_AUTH_SECRET;
  if (!value || value.length < 32) {
    throw new Error("LOCAL_AUTH_SECRET must be at least 32 characters");
  }
  return ENCODER.encode(value);
}

export function hashLocalPhoneVerificationCode(
  mobile: string,
  purpose: "login" | "register",
  code: string,
): string {
  return createHmac("sha256", secret())
    .update(`${mobile}\0${purpose}\0${code}`)
    .digest("hex");
}

export function hashLocalPassword(password: string): {
  salt: string;
  hash: string;
} {
  const salt = randomUUID().replace(/-/g, "");
  return {
    salt,
    hash: scryptSync(password, Buffer.from(salt, "hex"), SCRYPT_BYTES).toString(
      "hex",
    ),
  };
}

export function localPasswordMatches(
  password: string,
  saltHex: string,
  hashHex: string,
): boolean {
  if (!/^[0-9a-f]{32}$/i.test(saltHex) || !/^[0-9a-f]{64}$/i.test(hashHex)) {
    return false;
  }
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(
    password,
    Buffer.from(saltHex, "hex"),
    expected.length,
  );
  return timingSafeEqual(actual, expected);
}

export async function issueLocalAccessToken(accountId: string): Promise<{
  token: string;
  expiresIn: number;
}> {
  const expiresIn = 12 * 60 * 60;
  const token = await new SignJWT({ provider: "local", role: "user" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(ServerEnv.jwtIssuer())
    .setAudience(ServerEnv.jwtAudience())
    .setSubject(uuidToBase64url(accountId))
    .setJti(randomUUID())
    .setIssuedAt()
    .setExpirationTime(`${expiresIn}s`)
    .sign(secret());
  return { token, expiresIn };
}

export async function verifyLocalAccessToken(
  token: string,
  store: LocalDataStore = getLocalDataStore(),
): Promise<
  | { type: "success"; accountId: string; claims: TokenPayload }
  | { type: "not_local" }
  | { type: "error"; message: string }
> {
  try {
    if (decodeJwt(token).provider !== "local") return { type: "not_local" };
  } catch {
    return { type: "not_local" };
  }

  try {
    const { payload } = await jwtVerify(token, secret(), {
      algorithms: ["HS256"],
      issuer: ServerEnv.jwtIssuer(),
      audience: ServerEnv.jwtAudience(),
    });
    const parsed = TokenPayloadSchema.safeParse(payload);
    if (!parsed.success || parsed.data.provider !== "local") {
      return { type: "error", message: "Invalid local account token" };
    }
    const accountId = base64urlToUuid(payload.sub as string);
    const account = store.getAccount(accountId);
    if (
      !account ||
      account.banned ||
      (account.bannedUntil !== null && account.bannedUntil > Date.now())
    ) {
      return {
        type: "error",
        message: account
          ? "Account is banned or temporarily suspended"
          : "Account not found",
      };
    }
    return { type: "success", accountId, claims: parsed.data };
  } catch (error) {
    return {
      type: "error",
      message:
        error instanceof Error ? error.message : "Invalid local account token",
    };
  }
}

export function localUserMe(
  accountId: string,
  store: LocalDataStore = getLocalDataStore(),
): UserMeResponse {
  const account = store.getAccount(accountId);
  if (
    !account ||
    account.banned ||
    (account.bannedUntil !== null && account.bannedUntil > Date.now())
  ) {
    throw new Error("Local account is unavailable");
  }
  return {
    user: {},
    ban: null,
    player: {
      publicId: account.id,
      username: account.username,
      usernameBase: account.username,
      adfree: false,
      unlimitedRanked: false,
      canCreatePublicLobbies: false,
      trustTier: "untrusted",
      achievements: { singleplayerMap: [], player: [] },
      friends: [],
      subscription: null,
    },
  };
}
