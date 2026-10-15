import type { TransformableInfo } from "logform";
import Transport from "winston-transport";

const MAX_ADMIN_LOGS = 2000;
const MAX_LOG_MESSAGE_LENGTH = 4000;
const SENSITIVE_KEY =
  /password|token|secret|authorization|api.?key|cookie|private.?key/i;

export type AdminLogEntry = {
  timestamp: string;
  level: string;
  message: string;
  metadata: Record<string, unknown>;
};

const entries: AdminLogEntry[] = [];
let persistEntry: ((entry: AdminLogEntry) => void) | undefined;

function redactText(value: string): string {
  return value
    .replace(/\bBearer\s+\S+/gi, "Bearer [REDACTED]")
    .replace(
      /\beyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\b/g,
      "[REDACTED TOKEN]",
    )
    .slice(0, MAX_LOG_MESSAGE_LENGTH);
}

function sanitizeValue(value: unknown, key = ""): unknown {
  if (SENSITIVE_KEY.test(key)) return "[REDACTED]";
  if (typeof value === "string") return redactText(value);
  if (Array.isArray(value)) return value.map((item) => sanitizeValue(item));
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, childValue]) => [
        childKey,
        sanitizeValue(childValue, childKey),
      ]),
    );
  }
  return value;
}

export function sanitizeAdminLog(entry: AdminLogEntry): AdminLogEntry {
  return {
    ...entry,
    message: redactText(entry.message),
    metadata: sanitizeValue(entry.metadata) as Record<string, unknown>,
  };
}

export function setAdminLogPersistence(
  persist: ((entry: AdminLogEntry) => void) | undefined,
): void {
  persistEntry = persist;
}

export function recentAdminLogs(limit: number): AdminLogEntry[] {
  return entries.slice(-limit).reverse();
}

export class AdminLogBuffer extends Transport {
  log(info: TransformableInfo, callback: () => void): void {
    const { timestamp, level, message, ...metadata } = info;
    const entry = sanitizeAdminLog({
      timestamp:
        typeof timestamp === "string" ? timestamp : new Date().toISOString(),
      level: typeof level === "string" ? level : "info",
      message: String(message ?? ""),
      metadata: metadata as Record<string, unknown>,
    });
    entries.push(entry);
    try {
      persistEntry?.(entry);
    } catch (error) {
      process.stderr.write(
        `Could not persist admin log: ${error instanceof Error ? error.message : String(error)}\n`,
      );
    }
    if (entries.length > MAX_ADMIN_LOGS) {
      entries.splice(0, entries.length - MAX_ADMIN_LOGS);
    }
    callback();
  }
}
