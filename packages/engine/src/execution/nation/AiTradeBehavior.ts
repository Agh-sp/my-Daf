import { Relation, UnitType } from "@openfront/engine-api/game/GameTypes";
import { simpleHash } from "@openfront/engine-lib/Util";
import { Game, Player } from "../../game/Game";
import { TradeOfferExecution } from "../TradeOfferExecution";

type TradeResource = "gold" | "oil" | "gas" | "uranium" | "missile";

const RESOURCES: readonly TradeResource[] = [
  "gold",
  "oil",
  "gas",
  "uranium",
];
const RESOURCE_VALUE: Record<TradeResource, number> = {
  gold: 1,
  oil: 1_000,
  gas: 1_000,
  uranium: 10_000,
  missile: 500_000,
};
const RESOURCE_TARGET: Record<TradeResource, number> = {
  gold: 500_000,
  oil: 1_000,
  gas: 1_000,
  uranium: 100,
  missile: 2,
};

export function handleAITrades(game: Game, player: Player, tick: number): void {
  if (!player.isAlive() || tick % 100 !== simpleHash(player.id()) % 100) return;

  for (const other of game.players()) {
    const offer = other.tradeOffer();
    if (!offer || offer.recipientID !== player.id()) continue;

    const relation = player.relation(other);
    const canAfford =
      resourceBalance(player, offer.requestedResource) >=
      offer.requestedAmount + reserve(offer.requestedResource);
    const valueRatio =
      (offer.offeredAmount * RESOURCE_VALUE[offer.offeredResource]) /
      Math.max(
        offer.requestedAmount * RESOURCE_VALUE[offer.requestedResource],
        1,
      );
    const friendly = player.isFriendly(other);
    const accepted =
      relation >= Relation.Neutral &&
      canAfford &&
      valueRatio >= (friendly ? 0.75 : 1.1);

    game.addExecution(
      new TradeOfferExecution(player, {
        type: "trade_offer_response",
        target: other.id(),
        action: accepted ? "accept" : "reject",
      }),
    );
    return;
  }

  if (player.tradeOffer()) return;

  const shortage = RESOURCES.map((resource) => ({
    resource,
    balance: resourceBalance(player, resource),
    target: RESOURCE_TARGET[resource],
  }))
    .filter(({ balance, target }) => balance < target * 0.65)
    .sort((a, b) => a.balance / a.target - b.balance / b.target)[0];
  if (!shortage) return;

  const requestedAmount = Math.floor(
    Math.min(shortage.target - shortage.balance, shortage.target * 0.4),
  );
  if (requestedAmount < 1) return;

  const payment = RESOURCES.map((resource) => ({
    resource,
    available: resourceBalance(player, resource) - reserve(resource),
  }))
    .filter(
      ({ resource, available }) =>
        resource !== shortage.resource && available >= 1,
    )
    .sort(
      (a, b) =>
        b.available * RESOURCE_VALUE[b.resource] -
        a.available * RESOURCE_VALUE[a.resource],
    )[0];
  if (!payment) return;

  const requestedValue = requestedAmount * RESOURCE_VALUE[shortage.resource];
  const offeredAmount = Math.min(
    payment.available,
    Math.floor((requestedValue * 0.8) / RESOURCE_VALUE[payment.resource]),
  );
  if (offeredAmount < 1) return;

  const recipient = game
    .players()
    .filter(
      (other) =>
        other !== player &&
        other.isAlive() &&
        player.canTrade(other) &&
        player.relation(other) >= Relation.Neutral &&
        !other.tradeOffer() &&
        resourceBalance(other, shortage.resource) >=
          requestedAmount + reserve(shortage.resource),
    )
    .sort((a, b) => {
      const relationDelta = player.relation(b) - player.relation(a);
      return relationDelta || a.id().localeCompare(b.id());
    })[0];
  if (!recipient) return;

  game.addExecution(
    new TradeOfferExecution(player, {
      type: "trade_offer",
      recipient: recipient.id(),
      offeredResource: payment.resource,
      offeredAmount,
      requestedResource: shortage.resource,
      requestedAmount,
    }),
  );
}

function resourceBalance(player: Player, resource: TradeResource): number {
  switch (resource) {
    case "gold":
      return Math.min(Number(player.gold()), Number.MAX_SAFE_INTEGER);
    case "oil":
      return player.oil();
    case "gas":
      return player.gas();
    case "uranium":
      return player.uranium();
    case "missile":
      return player
        .units(UnitType.Arsenal)
        .reduce(
          (total, unit) =>
            total +
            (unit.isActive() && !unit.isUnderConstruction()
              ? unit.missilesStored()
              : 0),
          0,
        );
  }
}

function reserve(resource: TradeResource): number {
  return Math.floor(RESOURCE_TARGET[resource] * 0.2);
}
