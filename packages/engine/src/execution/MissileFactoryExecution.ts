import { UnitType } from "@openfront/engine-api/game/GameTypes";
import { zInt, zRef } from "@openfront/engine-lib/snapshot/SnapshotType";
import { z } from "zod";
import { Execution, Game, Unit } from "../game/Game";
import { execSnapshotType } from "../snapshot/ExecutionSnapshot";
import type {
  ExecRecord,
  SnapshotReader,
  SnapshotWriter,
} from "../snapshot/SnapshotContext";

export class MissileFactoryExecution implements Execution {
  private active = true;
  private game: Game;
  private ticksUntilProduction = -1;

  constructor(private factory: Unit) {}

  init(game: Game, _ticks: number): void {
    this.game = game;
    if (this.ticksUntilProduction < 0) {
      this.ticksUntilProduction = game
        .config()
        .missileFactoryProductionInterval();
    }
  }

  tick(_ticks: number): void {
    if (!this.factory.isActive()) {
      this.active = false;
      return;
    }
    if (this.factory.isUnderConstruction()) {
      return;
    }

    if (this.ticksUntilProduction > 0) {
      this.ticksUntilProduction--;
    }
    if (this.ticksUntilProduction > 0) {
      return;
    }

    const owner = this.factory.owner();
    const arsenal = owner
      .units(UnitType.Arsenal)
      .find(
        (unit) =>
          unit.isActive() &&
          !unit.isUnderConstruction() &&
          unit.missilesStored() < unit.missileCapacity(),
      );
    if (
      arsenal === undefined ||
      owner.gold() < this.game.config().missileFactoryProductionGoldCost() ||
      !owner.hasFuel({
        oil: this.game.config().missileFactoryProductionOilCost(),
        gas: this.game.config().missileFactoryProductionGasCost(),
        uranium: 0,
      })
    ) {
      return;
    }

    if (!arsenal.storeMissile()) {
      return;
    }
    owner.removeGold(this.game.config().missileFactoryProductionGoldCost());
    owner.consumeFuel({
      oil: this.game.config().missileFactoryProductionOilCost(),
      gas: this.game.config().missileFactoryProductionGasCost(),
      uranium: 0,
    });
    this.ticksUntilProduction = this.game
      .config()
      .missileFactoryProductionInterval();
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  snapshot(w: SnapshotWriter): ExecRecord {
    return MissileFactoryExecutionSnapshot.write({
      active: this.active,
      initialized: this.game !== undefined,
      factory: w.unit(this.factory),
      ticksUntilProduction: this.ticksUntilProduction,
    });
  }

  restoreSnapshot(s: MissileFactoryState, r: SnapshotReader): void {
    this.active = s.active;
    if (s.initialized) this.game = r.game;
    this.factory = r.unit(s.factory);
    this.ticksUntilProduction = s.ticksUntilProduction;
  }
}

const MissileFactoryStateSchema = z.object({
  active: z.boolean(),
  initialized: z.boolean(),
  factory: zRef(),
  ticksUntilProduction: zInt(),
});
type MissileFactoryState = z.infer<typeof MissileFactoryStateSchema>;

export const MissileFactoryExecutionSnapshot = execSnapshotType({
  name: "MissileFactory",
  version: 1,
  schema: MissileFactoryStateSchema,
  cls: () => MissileFactoryExecution,
});
