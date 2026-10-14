import {
  Cell,
  Difficulty,
  Nation,
  PlayerInfo,
  PlayerType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { MissileSiloExecution } from "@openfront/engine/execution/MissileSiloExecution";
import { NationExecution } from "@openfront/engine/execution/NationExecution";
import { SAMLauncherExecution } from "@openfront/engine/execution/SAMLauncherExecution";
import { setup } from "./util/Setup";
import { executeTicks } from "./util/utils";

describe("NationNukeBehavior - maybeDestroyEnemySam", () => {
  test.each([
    {
      difficulty: Difficulty.Impossible,
      samLevel: 1,
      expectedBombs: 2,
      siloCount: 3,
    },
    {
      difficulty: Difficulty.Hard,
      samLevel: 4,
      expectedBombs: 6,
      siloCount: 8,
    },
  ])(
    "overwhelms level-$samLevel enemy SAM on $difficulty difficulty",
    async ({ difficulty, samLevel, expectedBombs, siloCount }) => {
      // With two players, the nation targets the human. The SAM covers all
      // human territory so every nuke trajectory is interceptable, leaving no
      // normal target and triggering the overwhelm plan.
      const game = await setup("big_plains", {
        difficulty,
        infiniteGold: true,
        instantBuild: true,
      });

      const nationInfo = new PlayerInfo(
        "nation",
        PlayerType.Nation,
        null,
        "nation_id",
      );
      const humanInfo = new PlayerInfo(
        "human",
        PlayerType.Human,
        null,
        "human_id",
      );

      game.addPlayer(nationInfo);
      game.addPlayer(humanInfo);

      const nation = game.player("nation_id");
      const human = game.player("human_id");

      // Assign territory blocks (30×30 each, well separated)
      for (let x = 10; x < 40; x++) {
        for (let y = 10; y < 40; y++) {
          const tile = game.ref(x, y);
          if (game.map().isLand(tile)) nation.conquer(tile);
        }
      }
      for (let x = 60; x < 90; x++) {
        for (let y = 60; y < 90; y++) {
          const tile = game.ref(x, y);
          if (game.map().isLand(tile)) human.conquer(tile);
        }
      }

      // Keep the human territory inside the SAM range so all target trajectories
      // are intercepted until the SAM is overwhelmed.
      const samTile = game.ref(75, 75);
      const sam = human.buildUnit(UnitType.SAMLauncher, samTile, {});
      for (let level = 1; level < samLevel; level++) {
        sam.increaseLevel();
      }
      game.addExecution(new SAMLauncherExecution(human, null, sam));

      // The AI needs enough silo slots to fire the complete salvo in one SAM
      // cooldown window.
      const siloTiles = [
        [20, 20],
        [25, 25],
        [30, 30],
        [20, 25],
        [25, 20],
        [30, 25],
        [25, 30],
        [35, 25],
      ] as const;
      for (const [x, y] of siloTiles.slice(0, siloCount)) {
        const silo = nation.buildUnit(UnitType.MissileSilo, game.ref(x, y), {});
        game.addExecution(new MissileSiloExecution(silo));
      }

      // infiniteGold only applies to Human players, so the nation needs gold
      nation.addGold(1_000_000_000n);
      nation.addTroops(100_000);
      human.addTroops(100_000);

      expect(nation.units(UnitType.MissileSilo)).toHaveLength(siloCount);
      expect(human.units(UnitType.SAMLauncher)).toHaveLength(1);
      expect(nation.units(UnitType.AtomBomb)).toHaveLength(0);

      // Try multiple game IDs to account for random attack-tick alignment
      // (attackRate ∈ [30,50] on Impossible). 150 inner ticks guarantees ≥2
      // attack ticks for the worst-case seed: 1st initializes behaviors, 2nd
      // fires maybeSendNuke → maybeDestroyEnemySam.
      const testNation = new Nation(new Cell(25, 25), nation.info());
      let salvoLaunched = false;

      for (let i = 0; i < 10 && !salvoLaunched; i++) {
        // Let any executions from a prior iteration settle
        if (i > 0) executeTicks(game, 50);

        const exec = new NationExecution(`game_${i}`, testNation);
        exec.init(game);

        for (let tick = 0; tick < 150; tick++) {
          exec.tick(tick);
          // Advance the game sparingly so NukeExecution creates atom-bomb units
          // but they don't complete their flight before we detect them.
          if (tick % 10 === 0) game.executeNextTick();

          if (nation.units(UnitType.AtomBomb).length > 0) {
            salvoLaunched = true;
            break;
          }
        }
      }

      expect(salvoLaunched).toBe(true);

      // A level-N SAM intercepts N bombs; the AI sends an additional bomb to
      // pass through, plus a safety margin for an evolving defense.
      const atomBombs = nation.units(UnitType.AtomBomb);
      expect(atomBombs.length).toBeGreaterThanOrEqual(expectedBombs);

      // All bombs should target the SAM tile
      for (const bomb of atomBombs) {
        expect(bomb.targetTile()).toBe(samTile);
      }
    },
  );
});
