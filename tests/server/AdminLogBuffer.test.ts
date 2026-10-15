import type { TransformableInfo } from "logform";
import { describe, expect, it } from "vitest";
import {
  AdminLogBuffer,
  recentAdminLogs,
  setAdminLogPersistence,
} from "../../src/server/AdminLogBuffer";

describe("AdminLogBuffer", () => {
  it("redacts credential fields and bearer tokens from admin-visible logs", () => {
    const buffer = new AdminLogBuffer();
    const info: TransformableInfo = {
      level: "warn",
      message: "request failed with Bearer abc.def.ghi",
      timestamp: "2026-10-15T12:00:00.000Z",
      password: "must-not-appear",
    };
    buffer.log(info, () => undefined);

    expect(recentAdminLogs(1)[0]).toMatchObject({
      level: "warn",
      message: "request failed with Bearer [REDACTED]",
      metadata: { password: "[REDACTED]" },
    });
    expect(JSON.stringify(recentAdminLogs(1))).not.toContain("must-not-appear");
  });

  it("persists the sanitized entry for durable server logs", () => {
    const saved: { message: string; metadata: Record<string, unknown> }[] = [];
    setAdminLogPersistence((entry) => saved.push(entry));
    try {
      const buffer = new AdminLogBuffer();
      buffer.log(
        {
          level: "info",
          message: "request Authorization: Bearer abc.def.ghi",
          timestamp: "2026-10-15T12:00:00.000Z",
          accessToken: "must-not-appear",
        },
        () => undefined,
      );
      expect(saved).toHaveLength(1);
      expect(saved[0].metadata.accessToken).toBe("[REDACTED]");
    } finally {
      setAdminLogPersistence(undefined);
    }
  });
});
