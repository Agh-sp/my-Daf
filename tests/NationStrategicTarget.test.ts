import {
  Difficulty,
  PlayerInfo,
  PlayerType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { findJuiciestTarget } from "@openfront/engine/execution/nation/NationUtils";
import { setup } from "./util/Setup";

describe("nation strategic target selection", () => {
  it("prioritizes military and resource infrastructure over ordinary cities", async () => {
    const game = await setup(
      "big_plains",
      { difficulty: Difficulty.Impossible },
      [
        new PlayerInfo("industrial", PlayerType.Human, null, "industrial_id"),
        new PlayerInfo("military", PlayerType.Human, null, "military_id"),
      ],
    );
    const industrial = game.player("industrial_id");
    const military = game.player("military_id");

    for (let x = 10; x < 30; x++) {
      for (let y = 10; y < 30; y++) {
        industrial.conquer(game.ref(x, y));
      }
    }
    for (let x = 40; x < 60; x++) {
      for (let y = 40; y < 60; y++) {
        military.conquer(game.ref(x, y));
      }
    }

    industrial.buildUnit(UnitType.City, game.ref(15, 15), {});
    military.buildUnit(UnitType.City, game.ref(45, 46), {});
    military.buildUnit(UnitType.SAMLauncher, game.ref(45, 45), {});
    military.buildUnit(UnitType.UraniumPlant, game.ref(46, 45), {});

    expect(findJuiciestTarget(game, [industrial, military])).toBe(military);
  });
});
