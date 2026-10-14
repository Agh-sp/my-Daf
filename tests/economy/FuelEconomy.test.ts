import {
  PlayerInfo,
  PlayerType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { EngineConfig } from "@openfront/engine/configuration/EngineConfig";
import { ConstructionExecution } from "@openfront/engine/execution/ConstructionExecution";
import { PlayerExecution } from "@openfront/engine/execution/PlayerExecution";
import { SpawnExecution } from "@openfront/engine/execution/SpawnExecution";
import { TransportShipExecution } from "@openfront/engine/execution/TransportShipExecution";
import { Game, Player } from "@openfront/engine/game/Game";
import { setup } from "../util/Setup";

describe("fuel economy", () => {
  let game: Game;
  let player: Player;
  const playerInfo = new PlayerInfo("fuel", PlayerType.Human, null, "fuel_id");

  beforeEach(async () => {
    game = await setup(
      "plains",
      { instantBuild: true },
      [playerInfo],
      undefined,
      EngineConfig,
    );
    player = game.player(playerInfo.id);
    player.conquer(game.ref(0, 10));
    player.conquer(game.ref(20, 10));
  });

  test("active oil and gas fields produce their resources each tick", () => {
    player.addGold(2_000_000n);
    player.conquer(game.ref(40, 10));
    game.addExecution(
      new ConstructionExecution(player, UnitType.OilField, game.ref(0, 10)),
    );
    game.addExecution(
      new ConstructionExecution(player, UnitType.GasField, game.ref(20, 10)),
    );
    game.addExecution(
      new ConstructionExecution(
        player,
        UnitType.UraniumPlant,
        game.ref(40, 10),
      ),
    );
    game.executeNextTick(); // initialize construction
    game.executeNextTick(); // complete construction

    expect(player.units(UnitType.OilField)).toHaveLength(1);
    expect(player.units(UnitType.GasField)).toHaveLength(1);
    expect(player.units(UnitType.UraniumPlant)).toHaveLength(1);

    game.addExecution(new PlayerExecution(player));
    game.executeNextTick(); // initialize the execution
    game.executeNextTick(); // produce resources

    expect(player.oil()).toBe(game.config().oilFieldProductionPerTick());
    expect(player.gas()).toBe(game.config().gasFieldProductionPerTick());
    expect(player.uranium()).toBe(
      game.config().uraniumPlantProductionPerTick(),
    );

    player.units(UnitType.OilField)[0].increaseLevel();
    player.units(UnitType.GasField)[0].increaseLevel();
    player.units(UnitType.UraniumPlant)[0].increaseLevel();
    game.executeNextTick();

    expect(player.oil()).toBe(3 * game.config().oilFieldProductionPerTick());
    expect(player.gas()).toBe(3 * game.config().gasFieldProductionPerTick());
    expect(player.uranium()).toBe(
      3 * game.config().uraniumPlantProductionPerTick(),
    );
  });

  test("fuel consumption is atomic when either resource is short", () => {
    player.addOil(1_000);
    player.addGas(400);

    expect(player.consumeFuel({ oil: 500, gas: 500, uranium: 0 })).toBe(false);
    expect(player.oil()).toBe(1_000);
    expect(player.gas()).toBe(400);

    player.addGas(100);
    expect(player.consumeFuel({ oil: 500, gas: 500, uranium: 0 })).toBe(true);
    expect(player.oil()).toBe(500);
    expect(player.gas()).toBe(0);
  });

  test("troop transports are fuel-free while other ships use oil", () => {
    const missileCost = game
      .config()
      .missileFuelCost(UnitType.BallisticMissile);
    const transportCost = game.config().transportShipFuelCost();
    const tradeShipCost = game.config().tradeShipFuelCost();
    const warshipBuildCost = game.config().warshipBuildFuelCost();
    const warshipShellCost = game.config().warshipShellFuelCost();

    expect(missileCost).toEqual({ oil: 0, gas: 500, uranium: 0 });
    expect(transportCost).toEqual({ oil: 0, gas: 0, uranium: 0 });
    expect(tradeShipCost).toEqual({ oil: 500, gas: 0, uranium: 0 });
    expect(warshipBuildCost).toEqual({ oil: 2_500, gas: 0, uranium: 0 });
    expect(warshipShellCost).toEqual({ oil: 50, gas: 0, uranium: 0 });
    player.buildUnit(UnitType.OilStorage, game.ref(0, 10), {});

    player.addGas(missileCost.gas);
    expect(player.consumeFuel(missileCost)).toBe(true);
    expect(player.gas()).toBe(0);
    expect(player.oil()).toBe(0);

    player.addOil(500);
    expect(player.consumeFuel(transportCost)).toBe(true);
    expect(player.oil()).toBe(500);
    expect(player.gas()).toBe(0);

    player.addOil(tradeShipCost.oil);
    expect(player.consumeFuel(tradeShipCost)).toBe(true);
    expect(player.oil()).toBe(500);

    player.addOil(warshipBuildCost.oil);
    expect(player.consumeFuel(warshipBuildCost)).toBe(true);
    expect(player.oil()).toBe(500);

    player.addOil(warshipShellCost.oil);
    expect(player.consumeFuel(warshipShellCost)).toBe(true);
    expect(player.oil()).toBe(500);
    expect(player.gas()).toBe(0);
  });

  test("transport ship troop delivery works without oil", async () => {
    const attackerInfo = new PlayerInfo(
      "transport attacker",
      PlayerType.Human,
      null,
      "transport_attacker",
    );
    const defenderInfo = new PlayerInfo(
      "transport defender",
      PlayerType.Human,
      null,
      "transport_defender",
    );
    const transportGame = await setup(
      "ocean_and_land",
      { instantBuild: true },
      [],
      undefined,
      EngineConfig,
    );
    const attacker = transportGame.addPlayer(attackerInfo);
    transportGame.addPlayer(defenderInfo);
    transportGame.addExecution(
      new SpawnExecution(
        "fuel_free_transport",
        attackerInfo,
        transportGame.ref(7, 0),
      ),
      new SpawnExecution(
        "fuel_free_transport",
        defenderInfo,
        transportGame.ref(7, 15),
      ),
    );
    transportGame.executeNextTick();
    transportGame.executeNextTick();

    while (transportGame.isSpawnImmunityActive()) {
      transportGame.executeNextTick();
    }

    transportGame.addExecution(
      new TransportShipExecution(attacker, transportGame.ref(7, 15), 10),
    );
    transportGame.executeNextTick();

    expect(attacker.units(UnitType.TransportShip)).toHaveLength(1);
    expect(attacker.oil()).toBe(0);
    expect(attacker.gas()).toBe(0);
  });

  test("missile launch availability requires gas but not radar or oil", () => {
    const siloTile = game.ref(0, 10);
    const targetTile = game.ref(7, 7);
    player.buildUnit(UnitType.MissileSilo, siloTile, {});
    const arsenal = player.buildUnit(UnitType.Arsenal, game.ref(20, 10), {});
    arsenal.storeMissile();
    player.addGold(1_000_000_000n);

    while (game.isSpawnImmunityActive()) {
      game.executeNextTick();
    }

    expect(player.canBuild(UnitType.BallisticMissile, targetTile)).toBe(false);

    player.addGas(game.config().missileFuelCost(UnitType.BallisticMissile).gas);
    expect(player.canBuild(UnitType.BallisticMissile, targetTile)).not.toBe(
      false,
    );
    expect(player.oil()).toBe(0);
  });

  test("radar cannot be built while the radar feature is disabled", () => {
    player.addGold(1_000_000_000n);
    expect(player.canBuild(UnitType.Radar, game.ref(0, 10))).toBe(false);
  });

  test("atomic bomb availability requires uranium as well as gas", () => {
    const siloTile = game.ref(0, 10);
    const targetTile = game.ref(7, 7);
    player.buildUnit(UnitType.MissileSilo, siloTile, {});
    player.addGold(1_000_000_000n);

    while (game.isSpawnImmunityActive()) {
      game.executeNextTick();
    }

    const cost = game.config().missileFuelCost(UnitType.AtomBomb);
    player.addGas(cost.gas);
    expect(player.canBuild(UnitType.AtomBomb, targetTile)).toBe(false);

    player.addUranium(cost.uranium);
    expect(player.canBuild(UnitType.AtomBomb, targetTile)).not.toBe(false);
    expect(player.oil()).toBe(0);
  });
});
