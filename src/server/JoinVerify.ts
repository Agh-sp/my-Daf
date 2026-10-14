import { z } from "zod";
import { ServerEnv } from "./ServerEnv";

const JoinVerifyVerdictSchema = z.discriminatedUnion("status", [
  z.object({
    status: z.literal("approved"),
    username: z.string(),
    clanTag: z.string().nullable().optional(),
  }),
  z.object({
    status: z.literal("rejected"),
    reason: z.string(),
  }),
]);

export type JoinVerifyResponse =
  | { status: "approved"; username: string; clanTag: string | null }
  | { status: "rejected"; reason: string }
  | { status: "error"; reason: string };

export type JoinVerifyPlan =
  | { action: "skip" }
  | { action: "verify" };

/**
 * Pure decision for whether a join needs API-side name screening, kept free
 * of I/O so the admission logic is unit-testable. First joins are always
 * screened. Re-admits are screened only when an identity update could still
 * apply; unchanged identities and joins after game start need no update.
 */
export function planJoinVerify(args: {
  isReadmit: boolean;
  gameStarted: boolean;
  identityUnchanged: boolean;
}): JoinVerifyPlan {
  if (!args.isReadmit) return { action: "verify" };
  if (args.gameStarted || args.identityUnchanged) {
    return { action: "skip" };
  }
  return { action: "verify" };
}

/**
 * Screen a joining player's identity through the API. The legacy API request
 * still accepts a `token` field; send null to request name screening without
 * an external bot challenge. On approval, the returned identity is the
 * display-ready pair for this session.
 */
export async function verifyJoin(
  ip: string,
  username: string,
  clanTag: string | null,
): Promise<JoinVerifyResponse> {
  try {
    const response = await fetch(`${ServerEnv.jwtIssuer()}/join_verify`, {
      method: "POST",
      // First sighting of a novel flagged name adds an LLM round-trip of
      // up to ~3s server-side, so the timeout must stay at 5s or above.
      signal: AbortSignal.timeout(5000),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ServerEnv.apiKey(),
      },
      body: JSON.stringify({ ip, token: null, username, clanTag }),
    });
    if (!response.ok) {
      return {
        status: "error",
        reason: `api-worker returned ${response.status}`,
      };
    }
    const parsed = JoinVerifyVerdictSchema.safeParse(await response.json());
    if (!parsed.success) {
      return {
        status: "error",
        reason: `api-worker returned malformed response: ${parsed.error.message}`,
      };
    }
    if (parsed.data.status === "approved") {
      return {
        status: "approved",
        username: parsed.data.username,
        clanTag: parsed.data.clanTag ?? null,
      };
    }
    return parsed.data;
  } catch (e) {
    return { status: "error", reason: `api-worker unavailable: ${e}` };
  }
}
