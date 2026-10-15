import { GameConfigSchema } from "@openfront/engine-api/Schemas";
import { describe, expect, it, vi } from "vitest";
import { MapPlaylist } from "../../src/server/MapPlaylist";

vi.mock("../../src/server/MapLandTiles", () => ({
  getMapLandTiles: async () => 1_000_000,
}));

describe("MapPlaylist public games", () => {
  it("does not create trust-locked scheduled public games", async () => {
    const playlist = new MapPlaylist();
    const types = ["ffa", "team", "special"] as const;
    for (let i = 0; i < 21; i++) {
      const config = await playlist.gameConfig(types[i % types.length]);
      expect(GameConfigSchema.safeParse(config).success).toBe(true);
      expect(config.trusted).toBeUndefined();
    }
  });
});
