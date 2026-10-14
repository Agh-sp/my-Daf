import { TileRef } from "@openfront/engine-api/game/GameMap";
import {
  zInt,
  zPlayerRef,
  zRef,
  zTile,
} from "@openfront/engine-lib/snapshot/SnapshotType";
import { z } from "zod";
import { Execution, Game, isUnit, OwnerComp, Unit } from "../game/Game";
import { WaterPathFinder } from "../pathfinding/PathFinder";
import { execSnapshotType } from "../snapshot/ExecutionSnapshot";
import {
  restoreWaterPathFinder,
  WaterPathFinderSchema,
  waterPathFinderState,
} from "../snapshot/PathfinderSnapshots";
import type {
  ExecRecord,
  SnapshotReader,
  SnapshotWriter,
} from "../snapshot/SnapshotContext";

type SpeedboatInput = ({ targetTile: TileRef } & OwnerComp) | Unit;

export class SpeedboatExecution implements Execution {
  private active = true;
  private boat: Unit | undefined;
  private mg: Game;
  private pathfinder: WaterPathFinder;
  private homeTile: TileRef | undefined;
  private target: Unit | undefined;
  private targetTile: TileRef | undefined;
  private lastShellAttack = 0;
  private alreadySentShell = new Set<Unit>();

  constructor(private input: SpeedboatInput) {}

  init(mg: Game): void {
    this.mg = mg;
    // Retained only so snapshots from older games can be decoded.
    this.active = false;
  }

  tick(_ticks: number): void {}

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  snapshot(w: SnapshotWriter): ExecRecord {
    return SpeedboatExecutionSnapshot.write({
      active: this.active,
      initialized: this.mg !== undefined,
      boat: this.boat === undefined ? null : w.unit(this.boat),
      pathfinder:
        this.pathfinder === undefined
          ? null
          : waterPathFinderState(this.pathfinder),
      homeTile: this.homeTile ?? null,
      target: w.unitOrNull(this.target ?? null),
      targetTile: this.targetTile ?? null,
      lastShellAttack: this.lastShellAttack,
      alreadySentShell: [...this.alreadySentShell].map((unit) => w.unit(unit)),
      input: isUnit(this.input)
        ? { type: "unit", unit: w.unit(this.input) }
        : {
            type: "owner",
            owner: w.player(this.input.owner),
            targetTile: this.input.targetTile,
          },
    });
  }

  restoreSnapshot(s: SpeedboatState, r: SnapshotReader): void {
    this.active = false;
    if (s.initialized) {
      this.mg = r.game;
      if (s.pathfinder !== null) {
        this.pathfinder = restoreWaterPathFinder(r.game, s.pathfinder);
      }
    }
    this.boat = s.boat === null ? undefined : r.unit(s.boat);
    this.homeTile = s.homeTile ?? undefined;
    this.target = r.unitOrNull(s.target) ?? undefined;
    this.targetTile = s.targetTile ?? undefined;
    this.lastShellAttack = s.lastShellAttack;
    this.alreadySentShell = new Set(
      s.alreadySentShell.map((unit) => r.unit(unit)),
    );
    this.input =
      s.input.type === "unit"
        ? r.unit(s.input.unit)
        : {
            owner: r.player(s.input.owner),
            targetTile: s.input.targetTile,
          };
  }
}

const SpeedboatStateSchema = z.object({
  active: z.boolean(),
  initialized: z.boolean(),
  boat: zRef().nullable(),
  pathfinder: WaterPathFinderSchema.nullable(),
  homeTile: zTile().nullable(),
  target: zRef().nullable(),
  targetTile: zTile().nullable(),
  lastShellAttack: zInt(),
  alreadySentShell: z.array(zRef()),
  input: z.discriminatedUnion("type", [
    z.object({ type: z.literal("unit"), unit: zRef() }),
    z.object({
      type: z.literal("owner"),
      owner: zPlayerRef(),
      targetTile: zTile(),
    }),
  ]),
});
type SpeedboatState = z.infer<typeof SpeedboatStateSchema>;

export const SpeedboatExecutionSnapshot = execSnapshotType({
  name: "Speedboat",
  version: 1,
  schema: SpeedboatStateSchema,
  cls: () => SpeedboatExecution,
});
