import { createHash, randomUUID } from "crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "fs/promises";
import path from "path";
import { z } from "zod";

const BanFileSchema = z.array(z.string().regex(/^[0-9a-f]{64}$/));

function dataDirectory(): string {
  return path.resolve(process.env.ADMIN_DATA_DIR ?? ".admin-data");
}

function banFile(workerId: number): string {
  return path.join(dataDirectory(), `bans-worker-${workerId}.json`);
}

async function readBanFile(workerId: number): Promise<Set<string>> {
  try {
    const content = await readFile(banFile(workerId), "utf8");
    const parsed = BanFileSchema.safeParse(JSON.parse(content));
    if (!parsed.success) {
      throw new Error(`Invalid admin ban file for worker ${workerId}`);
    }
    return new Set(parsed.data);
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return new Set();
    }
    throw error;
  }
}

export function adminAccountKey(persistentId: string): string {
  return createHash("sha256").update(persistentId).digest("hex");
}

export class AdminBanStore {
  constructor(
    private readonly workerId: number,
    private readonly workerCount: number,
  ) {}

  async isBanned(accountKey: string): Promise<boolean> {
    for (let workerId = 0; workerId < this.workerCount; workerId++) {
      if ((await readBanFile(workerId)).has(accountKey)) return true;
    }
    return false;
  }

  async list(): Promise<string[]> {
    const all = new Set<string>();
    for (let workerId = 0; workerId < this.workerCount; workerId++) {
      for (const accountKey of await readBanFile(workerId)) all.add(accountKey);
    }
    return [...all];
  }

  async add(accountKey: string): Promise<void> {
    if (!/^[0-9a-f]{64}$/.test(accountKey)) {
      throw new Error("Invalid admin account key");
    }
    const existing = await readBanFile(this.workerId);
    if (existing.has(accountKey)) return;
    existing.add(accountKey);
    await this.write(existing);
  }

  async remove(accountKey: string): Promise<void> {
    if (!/^[0-9a-f]{64}$/.test(accountKey)) {
      throw new Error("Invalid admin account key");
    }
    const existing = await readBanFile(this.workerId);
    if (!existing.delete(accountKey)) return;
    await this.write(existing);
  }

  private async write(existing: Set<string>): Promise<void> {
    await mkdir(dataDirectory(), { recursive: true, mode: 0o700 });
    const target = banFile(this.workerId);
    const temporary = `${target}.${process.pid}.${randomUUID()}.tmp`;
    try {
      await writeFile(temporary, JSON.stringify([...existing]), {
        encoding: "utf8",
        mode: 0o600,
      });
      await rename(temporary, target);
    } catch (error) {
      await unlink(temporary).catch(() => undefined);
      throw error;
    }
  }
}
