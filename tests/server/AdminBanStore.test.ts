import { mkdtemp, rm } from "fs/promises";
import os from "os";
import path from "path";
import { afterEach, describe, expect, it } from "vitest";
import { AdminBanStore, adminAccountKey } from "../../src/server/AdminBanStore";

const originalDataDirectory = process.env.ADMIN_DATA_DIR;
let temporaryDirectory: string | undefined;

describe("AdminBanStore", () => {
  afterEach(async () => {
    if (temporaryDirectory) {
      await rm(temporaryDirectory, { recursive: true, force: true });
      temporaryDirectory = undefined;
    }
    if (originalDataDirectory === undefined) {
      delete process.env.ADMIN_DATA_DIR;
    } else {
      process.env.ADMIN_DATA_DIR = originalDataDirectory;
    }
  });

  it("persists game bans shared across workers and supports removal", async () => {
    temporaryDirectory = await mkdtemp(
      path.join(os.tmpdir(), "openfront-admin-bans-"),
    );
    process.env.ADMIN_DATA_DIR = temporaryDirectory;
    const workerZero = new AdminBanStore(0, 2);
    const workerOne = new AdminBanStore(1, 2);
    const accountKey = adminAccountKey("account-stable-id");

    await workerZero.add(accountKey);
    expect(await workerOne.isBanned(accountKey)).toBe(true);
    expect(await workerOne.list()).toEqual([accountKey]);

    await workerOne.remove(accountKey);
    expect(await workerZero.isBanned(accountKey)).toBe(true);
    await workerZero.remove(accountKey);
    expect(await workerZero.isBanned(accountKey)).toBe(false);
  });
});
