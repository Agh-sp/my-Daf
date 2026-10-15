import { GameEnv } from "@openfront/shared/configuration/Env";
import { PUBLIC_LOBBY_START_DELAY_MS } from "@openfront/shared/WireSchemas";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ClientEnv } from "../src/client/ClientEnv";
import { ServerEnv } from "../src/server/ServerEnv";

describe("public lobby start delay", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("gives development public lobbies at least one minute to fill", () => {
    vi.spyOn(ClientEnv, "env").mockReturnValue(GameEnv.Dev);
    vi.spyOn(ServerEnv, "env").mockReturnValue(GameEnv.Dev);

    expect(PUBLIC_LOBBY_START_DELAY_MS).toBe(60_000);
    expect(ClientEnv.gameCreationRate()).toBe(PUBLIC_LOBBY_START_DELAY_MS);
    expect(ServerEnv.gameCreationRate()).toBe(PUBLIC_LOBBY_START_DELAY_MS);
  });

  it("preserves the existing two-minute production lobby interval", () => {
    vi.spyOn(ClientEnv, "env").mockReturnValue(GameEnv.Prod);
    vi.spyOn(ServerEnv, "env").mockReturnValue(GameEnv.Prod);

    expect(ClientEnv.gameCreationRate()).toBe(120_000);
    expect(ServerEnv.gameCreationRate()).toBe(120_000);
  });
});
