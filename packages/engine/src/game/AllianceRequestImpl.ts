import { Tick } from "@openfront/engine-api/game/GameTypes";
import {
  AllianceRequestUpdate,
  GameUpdateType,
} from "@openfront/engine-api/game/GameUpdates";
import {
  snapshotType,
  zInt,
  zPlayerRef,
} from "@openfront/engine-lib/snapshot/SnapshotType";
import { z } from "zod";
import type {
  SnapshotReader,
  SnapshotWriter,
} from "../snapshot/SnapshotContext";
import { AllianceRequest, Player } from "./Game";
import { GameImpl } from "./GameImpl";

export class AllianceRequestImpl implements AllianceRequest {
  private status_: "pending" | "accepted" | "rejected" = "pending";

  constructor(
    private requestor_: Player,
    private recipient_: Player,
    private tickCreated: number,
    private peaceRequest: boolean,
    private game: GameImpl,
  ) {}

  status(): "pending" | "accepted" | "rejected" {
    return this.status_;
  }

  requestor(): Player {
    return this.requestor_;
  }

  recipient(): Player {
    return this.recipient_;
  }

  createdAt(): Tick {
    return this.tickCreated;
  }

  isPeaceRequest(): boolean {
    return this.peaceRequest;
  }

  accept(): void {
    this.status_ = "accepted";
    this.game.acceptAllianceRequest(this);
  }
  reject(): void {
    this.status_ = "rejected";
    this.game.rejectAllianceRequest(this);
  }

  toUpdate(): AllianceRequestUpdate {
    return {
      type: GameUpdateType.AllianceRequest,
      requestorID: this.requestor_.smallID(),
      recipientID: this.recipient_.smallID(),
      createdAt: this.tickCreated,
      isPeaceRequest: this.peaceRequest,
    };
  }

  snapshot(w: SnapshotWriter): AllianceRequestState {
    return {
      requestor: w.player(this.requestor_),
      recipient: w.player(this.recipient_),
      createdAt: this.tickCreated,
      isPeaceRequest: this.peaceRequest,
      status: this.status_,
    };
  }

  /** Fills a prototype-only shell; see RestorableExecution.restoreSnapshot. */
  restoreSnapshot(s: AllianceRequestState, r: SnapshotReader): void {
    this.game = r.game;
    this.requestor_ = r.player(s.requestor);
    this.recipient_ = r.player(s.recipient);
    this.tickCreated = s.createdAt;
    this.peaceRequest = s.isPeaceRequest;
    this.status_ = s.status;
  }
}

export const AllianceRequestSnapshot = snapshotType({
  name: "AllianceRequest",
  version: 2,
  schema: z.object({
    requestor: zPlayerRef(),
    recipient: zPlayerRef(),
    createdAt: zInt(),
    isPeaceRequest: z.boolean(),
    status: z.enum(["pending", "accepted", "rejected"]),
  }),
  migrations: {
    1: (data) => ({ ...data, isPeaceRequest: false }),
  },
});
export type AllianceRequestState = z.infer<
  typeof AllianceRequestSnapshot.schema
>;
