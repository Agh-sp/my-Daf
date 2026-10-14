import { TileRef } from "@openfront/engine-api/game/GameMap";
import { PlayerType, UnitType } from "@openfront/engine-api/game/GameTypes";
import { TribeExecution } from "@openfront/engine/execution/TribeExecution";
import type { SnapshotWriter } from "@openfront/engine/snapshot/SnapshotContext";
import { playerInfo, setup } from "./util/Setup";

describe("tribe baseline behavior", () => {
  test("terrorist behavior attacks more often and commits more troops", async () => {
    const game = await setup("half_land_half_ocean", {}, [
      playerInfo("tribe", PlayerType.Bot),
      playerInfo("human", PlayerType.Human),
    ]);
    const tribe = game.player("tribe");
    const writer = {
      player: () => 0,
      random: () => 0,
    } as unknown as SnapshotWriter;

    const regular = new TribeExecution(tribe).snapshot(writer).d as {
      attackRate: number;
      expandRatio: number;
      reserveRatio: number;
      terrorist: boolean;
      triggerRatio: number;
    };
    const terrorist = new TribeExecution(tribe, true).snapshot(writer).d as {
      attackRate: number;
      expandRatio: number;
      reserveRatio: number;
      terrorist: boolean;
      triggerRatio: number;
    };

    expect(regular.terrorist).toBe(false);
    expect(terrorist.terrorist).toBe(true);
    expect(terrorist.attackRate).toBeLessThan(regular.attackRate);
    expect(terrorist.triggerRatio).toBeLessThan(regular.triggerRatio);
    expect(terrorist.reserveRatio).toBeLessThan(regular.reserveRatio);
    expect(terrorist.expandRatio).toBeLessThan(regular.expandRatio);
  });

  test("tribes do not build the removed military camps or ports", async () => {
    const game = await setup(
      "half_land_half_ocean",
      { infiniteGold: true, instantBuild: true },
      [
        playerInfo("tribe", PlayerType.Bot),
        playerInfo("human", PlayerType.Human),
      ],
    );
    const tribe = game.player("tribe");
    let coast: TileRef | undefined;
    game.forEachTile((tile) => {
      if (coast === undefined && game.isLand(tile) && game.isShoreline(tile)) {
        coast = tile;
      }
    });
    if (coast === undefined) throw new Error("Test map has no shoreline");
    tribe.conquer(coast);
    tribe.addGold(1_000_000n);
    game.addExecution(new TribeExecution(tribe));

    for (let i = 0; i < 500; i++) {
      game.executeNextTick();
    }

    expect(tribe.units(UnitType.DefensePost)).toHaveLength(0);
    expect(tribe.units(UnitType.Port)).toHaveLength(0);
  });
});
