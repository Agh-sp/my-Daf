import {
  TradeOfferIntent,
  TradeOfferResponseIntent,
} from "@openfront/engine-api/Schemas";
import { UnitType } from "@openfront/engine-api/game/GameTypes";
import { zPlayerRef } from "@openfront/engine-lib/snapshot/SnapshotType";
import { z } from "zod";
import { Execution, Game, Player } from "../game/Game";
import { execSnapshotType } from "../snapshot/ExecutionSnapshot";
import type {
  ExecRecord,
  SnapshotReader,
  SnapshotWriter,
} from "../snapshot/SnapshotContext";

type TradeIntent = TradeOfferIntent | TradeOfferResponseIntent;
type TradeResource = "gold" | "oil" | "gas" | "uranium" | "missile";

export class TradeOfferExecution implements Execution {
  private active = true;
  private game: Game;
  private target: Player | null = null;

  constructor(
    private player: Player,
    private intent: TradeIntent,
  ) {}

  init(mg: Game): void {
    this.game = mg;
    const targetID =
      this.intent.type === "trade_offer"
        ? this.intent.recipient
        : this.intent.target;
    if (!mg.hasPlayer(targetID)) {
      console.warn(`TradeOfferExecution target ${targetID} not found`);
      this.active = false;
      return;
    }
    this.target = mg.player(targetID);
  }

  tick(tick: number): void {
    const target = this.target;
    if (!target || !this.player.isAlive() || !target.isAlive()) {
      console.warn("TradeOfferExecution requires two living players");
      this.active = false;
      return;
    }

    if (this.intent.type === "trade_offer") {
      this.createOffer(target, this.intent, tick);
    } else {
      this.respondToOffer(target, this.intent, tick);
    }
    this.active = false;
  }

  private createOffer(
    recipient: Player,
    offer: TradeOfferIntent,
    tick: number,
  ): void {
    if (
      recipient === this.player ||
      !this.player.canTrade(recipient) ||
      offer.offeredResource === offer.requestedResource ||
      !hasResource(this.player, offer.offeredResource, offer.offeredAmount) ||
      (offer.offeredResource === "missile" &&
        !hasMissileCapacity(recipient, offer.offeredAmount)) ||
      (offer.requestedResource === "missile" &&
        !hasMissileCapacity(this.player, offer.requestedAmount))
    ) {
      console.warn("Invalid trade offer");
      return;
    }

    this.player.setTradeOffer({
      recipientID: recipient.id(),
      offeredResource: offer.offeredResource,
      offeredAmount: offer.offeredAmount,
      requestedResource: offer.requestedResource,
      requestedAmount: offer.requestedAmount,
      createdAt: tick,
      expiresAt: tick + 20 * 10,
    });
  }

  private respondToOffer(
    target: Player,
    response: TradeOfferResponseIntent,
    tick: number,
  ): void {
    if (response.action === "cancel") {
      const ownOffer = this.player.tradeOffer();
      if (!ownOffer || ownOffer.recipientID !== target.id()) {
        console.warn("Trade offer cancellation has no matching pending offer");
        return;
      }
      this.player.setTradeOffer(null);
      return;
    }

    const offer = target.tradeOffer();
    if (!offer || offer.recipientID !== this.player.id()) {
      console.warn("Trade offer response has no matching pending offer");
      return;
    }
    if (offer.expiresAt <= tick) {
      target.setTradeOffer(null);
      return;
    }

    if (response.action === "reject") {
      target.setTradeOffer(null);
      return;
    }

    if (!this.player.canTrade(target)) {
      target.setTradeOffer(null);
      return;
    }

    if (
      !hasResource(
        this.player,
        offer.requestedResource,
        offer.requestedAmount,
      ) ||
      !hasResource(target, offer.offeredResource, offer.offeredAmount) ||
      (offer.requestedResource === "missile" &&
        !hasMissileCapacity(this.player, offer.requestedAmount)) ||
      (offer.offeredResource === "missile" &&
        !hasMissileCapacity(target, offer.offeredAmount))
    ) {
      console.warn("Trade offer cannot be accepted: insufficient resources");
      target.setTradeOffer(null);
      return;
    }

    if (
      !removeResource(target, offer.offeredResource, offer.offeredAmount) ||
      !removeResource(
        this.player,
        offer.requestedResource,
        offer.requestedAmount,
      )
    ) {
      throw new Error("Trade resource balance changed during atomic exchange");
    }
    addResource(this.player, offer.offeredResource, offer.offeredAmount);
    addResource(target, offer.requestedResource, offer.requestedAmount);
    target.setTradeOffer(null);
  }

  isActive(): boolean {
    return this.active;
  }

  activeDuringSpawnPhase(): boolean {
    return false;
  }

  snapshot(w: SnapshotWriter): ExecRecord {
    return TradeOfferExecutionSnapshot.write({
      active: this.active,
      initialized: this.game !== undefined,
      player: w.player(this.player),
      target: this.target ? w.player(this.target) : null,
      intent: this.intent,
    });
  }

  restoreSnapshot(s: TradeOfferState, r: SnapshotReader): void {
    this.active = s.active;
    if (s.initialized) this.game = r.game;
    this.player = r.player(s.player);
    this.target = s.target === null ? null : r.player(s.target);
    this.intent = s.intent;
  }
}

function storageUnits(player: Player) {
  return player
    .units(UnitType.Arsenal)
    .filter((unit) => unit.isActive() && !unit.isUnderConstruction());
}

function storedMissiles(player: Player): number {
  return storageUnits(player).reduce(
    (total, unit) => total + unit.missilesStored(),
    0,
  );
}

function hasMissileCapacity(player: Player, amount: number): boolean {
  const capacity = storageUnits(player).reduce(
    (total, unit) =>
      total + Math.max(0, unit.missileCapacity() - unit.missilesStored()),
    0,
  );
  return capacity >= amount;
}

function hasResource(
  player: Player,
  resource: TradeResource,
  amount: number,
): boolean {
  switch (resource) {
    case "gold":
      return player.gold() >= BigInt(amount);
    case "oil":
      return player.oil() >= amount;
    case "gas":
      return player.gas() >= amount;
    case "uranium":
      return player.uranium() >= amount;
    case "missile":
      return storedMissiles(player) >= amount;
  }
}

function removeResource(
  player: Player,
  resource: TradeResource,
  amount: number,
): boolean {
  switch (resource) {
    case "gold":
      return player.removeGold(BigInt(amount)) === BigInt(amount);
    case "oil":
      return player.consumeFuel({ oil: amount, gas: 0, uranium: 0 });
    case "gas":
      return player.consumeFuel({ oil: 0, gas: amount, uranium: 0 });
    case "uranium":
      return player.consumeFuel({ oil: 0, gas: 0, uranium: amount });
    case "missile": {
      let remaining = amount;
      for (const unit of storageUnits(player)) {
        while (remaining > 0 && unit.missilesStored() > 0) {
          if (!unit.consumeMissile()) return false;
          remaining--;
        }
      }
      return remaining === 0;
    }
  }
}

function addResource(
  player: Player,
  resource: TradeResource,
  amount: number,
): void {
  switch (resource) {
    case "gold":
      player.addGold(BigInt(amount));
      break;
    case "oil":
      player.addOil(amount);
      break;
    case "gas":
      player.addGas(amount);
      break;
    case "uranium":
      player.addUranium(amount);
      break;
    case "missile": {
      let remaining = amount;
      for (const unit of storageUnits(player)) {
        while (
          remaining > 0 &&
          unit.missilesStored() < unit.missileCapacity() &&
          unit.storeMissile()
        ) {
          remaining--;
        }
      }
      if (remaining !== 0) {
        throw new Error("Missile inventory capacity changed during trade");
      }
      break;
    }
  }
}

const TradeOfferStateSchema = z.object({
  active: z.boolean(),
  initialized: z.boolean().default(true),
  player: zPlayerRef(),
  target: zPlayerRef().nullable(),
  intent: z.discriminatedUnion("type", [
    z.object({
      type: z.literal("trade_offer"),
      recipient: z.string(),
      offeredResource: z.enum(["gold", "oil", "gas", "uranium", "missile"]),
      offeredAmount: z.number().int().safe(),
      requestedResource: z.enum(["gold", "oil", "gas", "uranium", "missile"]),
      requestedAmount: z.number().int().safe(),
    }),
    z.object({
      type: z.literal("trade_offer_response"),
      target: z.string(),
      action: z.enum(["accept", "reject", "cancel"]),
    }),
  ]),
});
type TradeOfferState = z.infer<typeof TradeOfferStateSchema>;

export const TradeOfferExecutionSnapshot = execSnapshotType({
  name: "TradeOffer",
  version: 1,
  schema: TradeOfferStateSchema,
  cls: () => TradeOfferExecution,
});
