import {
  PlayerInfo,
  PlayerType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { ConstructionExecution } from "@openfront/engine/execution/ConstructionExecution";
import { MissileFactoryExecution } from "@openfront/engine/execution/MissileFactoryExecution";
import { NukeExecution } from "@openfront/engine/execution/NukeExecution";
import { Game, Player } from "@openfront/engine/game/Game";
import { setup } from "../../util/Setup";
import { roundTrip } from "../../util/Snapshot";
import { executeTicks } from "../../util/utils";

async function makeGame(): Promise<{ game: Game; player: Player }> {
  const game = await setup("plains", { instantBuild: true }, [
    new PlayerInfo("player", PlayerType.Human, "client", "player_id"),
    new PlayerInfo("other", PlayerType.Human, "other_client", "other_id"),
  ]);
  const player = game.player("player_id");
  player.conquer(game.ref(1, 1));
  player.addGold(10_000_000n);
  return { game, player };
}

describe("MissileFactoryExecution", () => {
  test("produces into an arsenal on a 600-tick cadence and preserves snapshots", async () => {
    const { game, player } = await makeGame();
    player.buildUnit(UnitType.OilStorage, game.ref(10, 10), {});
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    const factory = player.buildUnit(
      UnitType.MissileFactory,
      game.ref(30, 30),
      {},
    );
    player.addOil(1_000);
    player.addGas(500);
    const goldBeforeProduction = player.gold();
    const oilBeforeProduction = player.oil();
    const gasBeforeProduction = player.gas();

    game.addExecution(new MissileFactoryExecution(factory));
    executeTicks(game, 1); // Initialize the factory execution.
    executeTicks(game, 300);
    expect(arsenal.missilesStored()).toBe(0);

    const { restored } = await roundTrip(game, "plains");
    const restoredPlayer = restored.player("player_id");
    const restoredArsenal = restoredPlayer.units(UnitType.Arsenal)[0];
    executeTicks(game, 299);
    executeTicks(restored, 299);

    expect(arsenal.missilesStored()).toBe(0);
    expect(restoredArsenal.missilesStored()).toBe(0);
    executeTicks(game, 1);
    executeTicks(restored, 1);

    expect(arsenal.missilesStored()).toBe(1);
    expect(restoredArsenal.missilesStored()).toBe(1);
    expect(player.gold()).toBe(goldBeforeProduction - 100_000n);
    expect(player.oil()).toBe(oilBeforeProduction - 500);
    expect(player.gas()).toBe(gasBeforeProduction - 200);
    expect(restoredPlayer.gold()).toBe(player.gold());
    expect(restoredPlayer.oil()).toBe(player.oil());
    expect(restoredPlayer.gas()).toBe(player.gas());
    const { restored: stockedSnapshot } = await roundTrip(game, "plains");
    expect(
      stockedSnapshot
        .player("player_id")
        .units(UnitType.Arsenal)[0]
        .missilesStored(),
    ).toBe(1);
  });

  test("waits for arsenal capacity before charging production costs", async () => {
    const { game, player } = await makeGame();
    player.buildUnit(UnitType.OilStorage, game.ref(10, 10), {});
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    const factory = player.buildUnit(
      UnitType.MissileFactory,
      game.ref(30, 30),
      {},
    );
    for (let i = 0; i < 10; i++) {
      expect(arsenal.storeMissile()).toBe(true);
    }
    player.addOil(1_000);
    player.addGas(500);
    const goldBeforeProduction = player.gold();
    const oilBeforeProduction = player.oil();
    const gasBeforeProduction = player.gas();

    game.addExecution(new MissileFactoryExecution(factory));
    executeTicks(game, 1);
    executeTicks(game, 600);

    expect(arsenal.missilesStored()).toBe(10);
    expect(player.gold()).toBe(goldBeforeProduction);
    expect(player.oil()).toBe(oilBeforeProduction);
    expect(player.gas()).toBe(gasBeforeProduction);

    expect(arsenal.consumeMissile()).toBe(true);
    executeTicks(game, 1);
    expect(arsenal.missilesStored()).toBe(10);
    expect(player.gold()).toBe(goldBeforeProduction - 100_000n);
    expect(player.oil()).toBe(oilBeforeProduction - 500);
    expect(player.gas()).toBe(gasBeforeProduction - 200);
  });
});

describe("OilStorage and Arsenal mechanics", () => {
  test("OilStorage expands the base reserve and loss clamps held oil", async () => {
    const { game, player } = await makeGame();
    player.addOil(5_000);
    expect(player.oil()).toBe(2_000);

    const firstStorage = player.buildUnit(
      UnitType.OilStorage,
      game.ref(10, 10),
      {},
    );
    player.addOil(12_000);
    expect(player.oil()).toBe(12_000);

    const secondStorage = player.buildUnit(
      UnitType.OilStorage,
      game.ref(20, 20),
      {},
    );
    player.addOil(10_000);
    expect(player.oil()).toBe(22_000);
    const { restored } = await roundTrip(game, "plains");
    expect(restored.player("player_id").oil()).toBe(22_000);

    secondStorage.delete();
    expect(player.oil()).toBe(12_000);
    firstStorage.delete();
    expect(player.oil()).toBe(2_000);
  });

  test("GasStorage expands the base reserve and loss clamps held gas", async () => {
    const { game, player } = await makeGame();
    player.addGas(5_000);
    expect(player.gas()).toBe(2_000);

    const storage = player.buildUnit(UnitType.GasStorage, game.ref(10, 10), {});
    player.addGas(10_000);
    expect(player.gas()).toBe(12_000);

    const { restored } = await roundTrip(game, "plains");
    expect(restored.player("player_id").gas()).toBe(12_000);

    storage.delete();
    expect(player.gas()).toBe(2_000);
  });

  test("a ballistic launch consumes one stored silo missile without gold cost", async () => {
    const { game, player } = await makeGame();
    const target = game.player("other_id");
    target.conquer(game.ref(50, 50));
    player.buildUnit(UnitType.Radar, game.ref(5, 5), {});
    player.buildUnit(UnitType.MissileSilo, game.ref(1, 1), {});
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    arsenal.storeMissile();
    player.addGas(500);
    const goldBeforeLaunch = player.gold();
    const gasBeforeLaunch = player.gas();

    expect(
      player.canBuild(UnitType.BallisticMissile, game.ref(50, 50)),
    ).not.toBe(false);
    game.addExecution(
      new NukeExecution(
        UnitType.BallisticMissile,
        player,
        game.ref(50, 50),
        game.ref(1, 1),
      ),
    );
    executeTicks(game, 2);

    expect(arsenal.missilesStored()).toBe(0);
    expect(player.gold()).toBe(goldBeforeLaunch);
    expect(player.gas()).toBe(
      gasBeforeLaunch - game.config().missileFuelCost(UnitType.BallisticMissile).gas,
    );
    expect(player.units(UnitType.BallisticMissile)).toHaveLength(1);
    expect(player.canBuild(UnitType.BallisticMissile, game.ref(50, 50))).toBe(
      false,
    );
  });

  test("cannot launch a ballistic missile without silo stock", async () => {
    const { game, player } = await makeGame();
    const target = game.player("other_id");
    target.conquer(game.ref(50, 50));
    player.buildUnit(UnitType.Radar, game.ref(5, 5), {});
    player.buildUnit(UnitType.MissileSilo, game.ref(1, 1), {});
    player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    player.addGas(500);

    game.addExecution(
      new NukeExecution(
        UnitType.BallisticMissile,
        player,
        game.ref(50, 50),
        game.ref(1, 1),
      ),
    );
    executeTicks(game, 2);

    expect(player.units(UnitType.BallisticMissile)).toHaveLength(0);
    expect(player.gas()).toBe(500);
  });

  test("losing arsenal health destroys all stored missiles", async () => {
    const { game, player } = await makeGame();
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    const attacker = game.player("other_id");
    for (let i = 0; i < 10; i++) expect(arsenal.storeMissile()).toBe(true);

    arsenal.modifyHealth(-1, attacker);

    expect(arsenal.missilesStored()).toBe(0);
  });

  test("each arsenal upgrade adds ten missile storage spaces", async () => {
    const { game, player } = await makeGame();
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 20), {});
    expect(arsenal.missileCapacity()).toBe(10);
    player.upgradeUnit(arsenal);
    expect(arsenal.missileCapacity()).toBe(20);
    for (let i = 0; i < 20; i++) expect(arsenal.storeMissile()).toBe(true);
    expect(arsenal.storeMissile()).toBe(false);
  });
});

describe("tribal engine-feature rollback", () => {
  test("does not schedule DefensePost or build Speedboat through engine construction", async () => {
    const { game, player } = await makeGame();
    const tile = game.ref(10, 10);
    player.conquer(tile);

    game.addExecution(
      new ConstructionExecution(player, UnitType.DefensePost, tile),
    );
    executeTicks(game, 2);
    expect(game.unitCount(UnitType.DefensePost)).toBe(1);
    expect(player.canBuild(UnitType.Speedboat, tile)).toBe(false);
    game.addExecution(
      new ConstructionExecution(player, UnitType.Speedboat, tile),
    );
    executeTicks(game, 2);
    expect(game.unitCount(UnitType.Speedboat)).toBe(0);
  });
});
