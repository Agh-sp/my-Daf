import { TileRef } from "@openfront/engine-api/game/GameMap";
import {
  Difficulty,
  PlayerInfo,
  PlayerType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import type { GameConfig } from "@openfront/engine-api/Schemas";
import {
  Config,
  NukeMagnitude,
} from "@openfront/engine-lib/configuration/Config";
import { PseudoRandom } from "@openfront/engine-lib/PseudoRandom";
import { NationAllianceBehavior } from "@openfront/engine/execution/nation/NationAllianceBehavior";
import { NationEmojiBehavior } from "@openfront/engine/execution/nation/NationEmojiBehavior";
import { NationNukeBehavior } from "@openfront/engine/execution/nation/NationNukeBehavior";
import { AiAttackBehavior } from "@openfront/engine/execution/utils/AiAttackBehavior";
import { Game, Player, Unit } from "@openfront/engine/game/Game";
import { vi } from "vitest";
import { setup } from "./util/Setup";
import { TestConfig } from "./util/TestConfig";

class RealNukeRadiusConfig extends TestConfig {
  nukeMagnitudes(unitType: UnitType): NukeMagnitude {
    return Config.prototype.nukeMagnitudes.call(this, unitType);
  }
}

const ISLAND = { min: 130, max: 170 };

/**
 * Hard FFA on the 200x200 all-land map. The nation owns the top-left corner
 * with a silo, the human owns a 40x40 block in the bottom-right.
 */
async function setupDuel(
  withThirdPlayer = false,
  config: Partial<GameConfig> = {},
) {
  const infos = [
    new PlayerInfo("nation", PlayerType.Nation, null, "nation_id"),
    new PlayerInfo("human", PlayerType.Human, null, "human_id"),
  ];
  if (withThirdPlayer) {
    infos.push(new PlayerInfo("other", PlayerType.Nation, null, "other_id"));
  }
  const game = await setup(
    "big_plains",
    { difficulty: Difficulty.Hard, ...config },
    infos,
    undefined,
    RealNukeRadiusConfig,
  );
  const nation = game.player("nation_id");
  const human = game.player("human_id");

  conquerRect(game, nation, 0, 0, 15, 15);
  nation.buildUnit(UnitType.MissileSilo, game.ref(5, 5), {});
  nation.addGold(10_000_000n);
  conquerRect(game, human, ISLAND.min, ISLAND.min, ISLAND.max, ISLAND.max);

  return { game, nation, human };
}

function conquerRect(
  game: Game,
  player: Player,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
) {
  for (let x = x0; x < x1; x++) {
    for (let y = y0; y < y1; y++) {
      player.conquer(game.ref(x, y));
    }
  }
}

function launchNukes(
  game: Game,
  nation: Player,
  attackBehaviorOverride?: AiAttackBehavior,
): Unit[] {
  const emojiBehavior = new NationEmojiBehavior(
    new PseudoRandom(1),
    game,
    nation,
  );
  const allianceBehavior = new NationAllianceBehavior(
    new PseudoRandom(1),
    game,
    nation,
    emojiBehavior,
  );
  const attackBehavior =
    attackBehaviorOverride ??
    new AiAttackBehavior(
      new PseudoRandom(1),
      game,
      nation,
      0.5,
      0.3,
      0.2,
      allianceBehavior,
      emojiBehavior,
    );
  new NationNukeBehavior(
    // Seed 2 doesn't roll a hydro-only nation
    new PseudoRandom(2),
    game,
    nation,
    attackBehavior,
    emojiBehavior,
  ).maybeSendNuke();
  // First tick initializes the NukeExecution, the second launches the bomb
  game.executeNextTick();
  game.executeNextTick();
  return nation.units(
    UnitType.AtomBomb,
    UnitType.BallisticMissile,
    UnitType.HydrogenBomb,
  );
}

function isOnIsland(game: Game, tile: TileRef): boolean {
  const [x, y] = [game.x(tile), game.y(tile)];
  return x >= ISLAND.min && x < ISLAND.max && y >= ISLAND.min && y < ISLAND.max;
}

describe("Nation nuke targeting", () => {
  it("prioritizes active military assets and stocked fuel storage", async () => {
    const { game, nation, human } = await setupDuel();
    const behavior = new NationNukeBehavior(
      new PseudoRandom(2),
      game,
      nation,
      new AiAttackBehavior(new PseudoRandom(1), game, nation, 0.5, 0.3, 0.2),
      new NationEmojiBehavior(new PseudoRandom(1), game, nation),
    );
    const targetTile = game.ref(ISLAND.min, ISLAND.min);
    const silos = nation.units(UnitType.MissileSilo);
    const scoreNukeTarget = (
      type: UnitType,
      owner: Player = human,
      active = true,
    ) => {
      const target = {
        type: () => type,
        level: () => 1,
        tile: () => targetTile,
        isActive: () => active,
        isUnderConstruction: () => false,
        owner: () => owner,
      } as unknown as Unit;
      return (
        behavior as unknown as {
          nukeTileScore: (
            tile: TileRef,
            silos: Unit[],
            targets: Unit[],
            nukeType: UnitType,
          ) => number;
        }
      ).nukeTileScore(targetTile, silos, [target], UnitType.HydrogenBomb);
    };

    human.addOil(0);
    const emptyStorageScore = scoreNukeTarget(UnitType.OilStorage);
    human.addOil(game.config().oilStorageCapacity());
    const stockedStorageScore = scoreNukeTarget(UnitType.OilStorage);

    expect(scoreNukeTarget(UnitType.City)).toBeGreaterThan(
      scoreNukeTarget(UnitType.Arsenal),
    );
    expect(scoreNukeTarget(UnitType.City)).toBeGreaterThan(
      scoreNukeTarget(UnitType.MissileFactory),
    );
    expect(scoreNukeTarget(UnitType.City)).toBeGreaterThan(
      scoreNukeTarget(UnitType.UraniumPlant),
    );
    expect(stockedStorageScore).toBeGreaterThan(emptyStorageScore);
    expect(scoreNukeTarget(UnitType.MissileFactory, human, false)).toBe(0);
  });
  it("prioritizes active military assets and stocked fuel storage", async () => {
    const { game, nation, human } = await setupDuel();
    const behavior = new NationNukeBehavior(
      new PseudoRandom(2),
      game,
      nation,
      new AiAttackBehavior(new PseudoRandom(1), game, nation, 0.5, 0.3, 0.2),
      new NationEmojiBehavior(new PseudoRandom(1), game, nation),
    );
    const targetTile = game.ref(ISLAND.min, ISLAND.min);
    const silo = nation.units(UnitType.MissileSilo);
    const scoreNukeTarget = (
      type: UnitType,
      owner: Player = human,
      active = true,
    ) => {
      const target = {
        type: () => type,
        level: () => 1,
        tile: () => targetTile,
        isActive: () => active,
        isUnderConstruction: () => false,
        owner: () => owner,
      } as unknown as Unit;
      return (
        behavior as unknown as {
          nukeTileScore: (
            tile: TileRef,
            silos: Unit[],
            targets: Unit[],
            nukeType: UnitType,
          ) => number;
        }
      ).nukeTileScore(targetTile, silo, [target], UnitType.HydrogenBomb);
    };

    human.addOil(0);
    const emptyStorageScore = scoreNukeTarget(UnitType.OilStorage);
    human.addOil(game.config().oilStorageCapacity());
    const stockedStorageScore = scoreNukeTarget(UnitType.OilStorage);

    expect(scoreNukeTarget(UnitType.City)).toBeGreaterThan(
      scoreNukeTarget(UnitType.Arsenal),
    );
    expect(stockedStorageScore).toBeGreaterThan(emptyStorageScore);
    expect(scoreNukeTarget(UnitType.MissileFactory, human, false)).toBe(0);
  });

  it("uses an atom bomb instead of a hydrogen bomb on a small island", async () => {
    const { game, nation, human } = await setupDuel();
    game.map().forEachTile((tile) => {
      if (!game.hasOwner(tile)) game.setWater(tile);
    });

    const nukes = launchNukes(game, nation);

    expect(nukes).toHaveLength(1);
    expect(nukes[0].type()).toBe(UnitType.AtomBomb);
    expect(game.owner(nukes[0].targetTile()!)).toBe(human);
  });

  it("does not nuke land that is mostly fallout already", async () => {
    const { game, nation, human } = await setupDuel();
    // Leave the human a 4-tile rim around a fallout crater
    for (let x = ISLAND.min + 4; x < ISLAND.max - 4; x++) {
      for (let y = ISLAND.min + 4; y < ISLAND.max - 4; y++) {
        const tile = game.ref(x, y);
        human.relinquish(tile);
        game.setFallout(tile, true);
      }
    }

    expect(launchNukes(game, nation)).toHaveLength(0);
  });

  it("does not randomly refuse to nuke the player currently attacking it", async () => {
    const { game, nation, human } = await setupDuel();
    const attackBehavior = new AiAttackBehavior(
      new PseudoRandom(1),
      game,
      nation,
      0.5,
      0.3,
      0.2,
    );
    vi.spyOn(attackBehavior, "findIncomingAttackPlayer").mockReturnValue(human);
    vi.spyOn(attackBehavior, "shouldAttack").mockReturnValue(false);

    expect(launchNukes(game, nation, attackBehavior)).toHaveLength(1);
  });

  it("retaliates against an incoming missile with a stored ballistic missile", async () => {
    const { game, nation, human } = await setupDuel();
    const arsenal = nation.buildUnit(UnitType.Arsenal, game.ref(10, 10), {});
    expect(arsenal.storeMissile()).toBe(true);
    human.buildUnit(UnitType.BallisticMissile, game.ref(150, 150), {
      targetTile: game.ref(5, 5),
      trajectory: [],
    });

    const attackBehavior = new AiAttackBehavior(
      new PseudoRandom(1),
      game,
      nation,
      0.5,
      0.3,
      0.2,
    );
    vi.spyOn(attackBehavior, "shouldAttack").mockReturnValue(false);

    const nukes = launchNukes(game, nation, attackBehavior);

    expect(nukes).toHaveLength(1);
    expect(nukes[0].type()).toBe(UnitType.BallisticMissile);
    expect(game.owner(nukes[0].targetTile()!)).toBe(human);
    expect(arsenal.missilesStored()).toBe(0);
  });

  it("uses stocked ballistic missiles for strategic attacks on Hard", async () => {
    const { game, nation } = await setupDuel();
    const arsenal = nation.buildUnit(UnitType.Arsenal, game.ref(10, 10), {});
    expect(arsenal.storeMissile()).toBe(true);
    nation.addGas(game.config().missileFuelCost(UnitType.BallisticMissile).gas);

    const behavior = new NationNukeBehavior(
      new PseudoRandom(2),
      game,
      nation,
      new AiAttackBehavior(new PseudoRandom(1), game, nation, 0.5, 0.3, 0.2),
      new NationEmojiBehavior(new PseudoRandom(1), game, nation),
    );
    const types = (
      behavior as unknown as {
        nukeTypesToTry: (retaliation: boolean) => UnitType[];
      }
    ).nukeTypesToTry(false);

    expect(types[0]).toBe(UnitType.BallisticMissile);
  });

  it("launches a coordinated ballistic strike around separate cities during an offensive", async () => {
    const { game, nation, human } = await setupDuel(false, {
      instantBuild: true,
    });
    nation.buildUnit(UnitType.MissileSilo, game.ref(8, 8), {});
    nation.buildUnit(UnitType.MissileSilo, game.ref(12, 8), {});
    const arsenal = nation.buildUnit(UnitType.Arsenal, game.ref(10, 10), {});
    expect(arsenal.storeMissile()).toBe(true);
    expect(arsenal.storeMissile()).toBe(true);
    expect(arsenal.storeMissile()).toBe(true);
    nation.addGas(
      game.config().missileFuelCost(UnitType.BallisticMissile).gas * 3,
    );

    const cities = [game.ref(132, 132), game.ref(168, 132), game.ref(150, 168)];
    for (const tile of cities) {
      human.buildUnit(UnitType.City, tile, {});
    }

    const missiles = launchNukes(game, nation);

    expect(missiles).toHaveLength(3);
    expect(
      missiles.every((missile) => missile.type() === UnitType.BallisticMissile),
    ).toBe(true);
    const blastRadius = game
      .config()
      .nukeMagnitudes(UnitType.BallisticMissile).outer;
    expect(
      missiles.every((missile) =>
        cities.some(
          (city) =>
            game.euclideanDistSquared(missile.targetTile()!, city) <=
            blastRadius * blastRadius,
        ),
      ),
    ).toBe(true);
    for (let i = 0; i < missiles.length; i++) {
      for (let j = i + 1; j < missiles.length; j++) {
        expect(
          game.euclideanDistSquared(
            missiles[i].targetTile()!,
            missiles[j].targetTile()!,
          ),
        ).toBeGreaterThan(
          (game.config().nukeMagnitudes(UnitType.BallisticMissile).inner * 2) **
            2,
        );
      }
    }
  });

  it("uses all available launch slots in a full-force defensive salvo", async () => {
    const { game, nation, human } = await setupDuel(false, {
      instantBuild: true,
    });
    conquerRect(game, nation, 0, 0, 20, 20);
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (x === 5 && y === 5) continue;
        nation.buildUnit(UnitType.MissileSilo, game.ref(x, y), {});
      }
    }

    const arsenals = [];
    for (let x = 10; x < 20; x++) {
      arsenals.push(nation.buildUnit(UnitType.Arsenal, game.ref(x, 0), {}));
    }
    for (const arsenal of arsenals) {
      for (let missile = 0; missile < arsenal.missileCapacity(); missile++) {
        expect(arsenal.storeMissile()).toBe(true);
      }
    }
    const missileCount = arsenals.reduce(
      (count, arsenal) => count + arsenal.missilesStored(),
      0,
    );
    expect(missileCount).toBe(100);

    conquerRect(game, human, 40, 40, 160, 160);
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        human.buildUnit(UnitType.City, game.ref(45 + x * 11, 45 + y * 11), {});
      }
    }
    const fuel = game.config().missileFuelCost(UnitType.BallisticMissile);
    nation.addOil(fuel.oil * missileCount);
    nation.addGas(fuel.gas * missileCount);
    nation.addUranium(fuel.uranium * missileCount);

    const attackBehavior = new AiAttackBehavior(
      new PseudoRandom(1),
      game,
      nation,
      0.5,
      0.3,
      0.2,
    );
    vi.spyOn(attackBehavior, "findIncomingAttackPlayer").mockReturnValue(human);

    const missiles = launchNukes(game, nation, attackBehavior);

    expect(missiles).toHaveLength(missileCount);
    expect(
      missiles.every((missile) => missile.type() === UnitType.BallisticMissile),
    ).toBe(true);
  });

  it("does not nuke a spot where another player's nuke is already landing", async () => {
    const { game, nation, human } = await setupDuel(true);
    const other = game.player("other_id");
    conquerRect(game, other, 0, 185, 15, 200);
    // Hostile, so the nation picks the human as its target among three players
    nation.updateRelation(human, -100);
    other.buildUnit(UnitType.HydrogenBomb, game.ref(5, 190), {
      targetTile: game.ref(150, 150),
      trajectory: [],
    });

    expect(launchNukes(game, nation)).toHaveLength(0);
  });

  it.each([
    [false, 1],
    [true, 0],
  ])(
    "hits a third player around the target unless allied with them (allied: %s)",
    async (allied, expectedNukes) => {
      const { game, nation, human } = await setupDuel(true);
      const other = game.player("other_id");
      for (let x = 100; x < 200; x++) {
        for (let y = 100; y < 200; y++) {
          const tile = game.ref(x, y);
          if (game.owner(tile) !== human) other.conquer(tile);
        }
      }
      nation.updateRelation(human, -100);
      if (allied) nation.createAllianceRequest(other)?.accept();

      const nukes = launchNukes(game, nation);
      expect(nukes).toHaveLength(expectedNukes);
      for (const nuke of nukes) {
        expect(game.owner(nuke.targetTile()!)).toBe(human);
      }
    },
  );

  it.each(["own", "allied"])(
    "never nukes an %s enclave inside the target's land",
    async (enclave) => {
      const { game, nation, human } = await setupDuel(true);
      const other = game.player("other_id");
      conquerRect(game, other, 0, 185, 15, 200);
      nation.updateRelation(human, -100);
      if (enclave === "allied") nation.createAllianceRequest(other)?.accept();
      const enclaveOwner = enclave === "own" ? nation : other;
      conquerRect(game, enclaveOwner, 149, 149, 151, 151);

      expect(launchNukes(game, nation)).toHaveLength(0);
    },
  );

  it("nukes the same spot when no other nuke is landing there", async () => {
    const { game, nation, human } = await setupDuel(true);
    conquerRect(game, game.player("other_id"), 0, 185, 15, 200);
    nation.updateRelation(human, -100);

    const nukes = launchNukes(game, nation);
    expect(nukes).toHaveLength(1);
    expect(isOnIsland(game, nukes[0].targetTile()!)).toBe(true);
  });
});
