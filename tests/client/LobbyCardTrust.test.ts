import { GameMapType, GameMode } from "@openfront/engine-api/game/GameTypes";
import type { GameConfig } from "@openfront/engine-api/Schemas";
import type { PublicGameInfo } from "@openfront/shared/WireSchemas";
import { render } from "lit";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../src/client/TerrainMapFileLoader", () => ({
  terrainMapFileLoader: {
    getMapData: vi.fn((map: GameMapType) => ({
      webpPath: `/maps/${map}.webp`,
    })),
  },
}));

vi.mock("../../src/client/Utils", () => ({
  translateText: vi.fn((key: string) => key),
  getMapName: vi.fn((m: string | undefined) => m ?? null),
  getModifierLabels: vi.fn(() => []),
}));

import { lobbyCard } from "../../src/client/components/LobbyCard";

function lobby(trusted: boolean): PublicGameInfo {
  return {
    gameID: "game0001",
    numClients: 3,
    publicGameType: "ffa",
    gameConfig: {
      gameMap: GameMapType.World,
      gameMode: GameMode.FFA,
      maxPlayers: 8,
      trusted,
    } as unknown as GameConfig,
  };
}

describe("lobbyCard trust display", () => {
  it.each([true, false])(
    "does not display a trust lock when legacy trusted is %s",
    (trusted) => {
      const host = document.createElement("div");
      render(
        lobbyCard({
          lobby: lobby(trusted),
          subtitle: "FFA",
          timeDisplay: "0:30",
          onClick: () => {},
        }),
        host,
      );
      expect(host.querySelector("[data-trust]")).toBeNull();
      expect(host.querySelector("confirm-dialog")).toBeNull();
    },
  );
});
