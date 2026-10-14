import { PlayerType } from "@openfront/engine-api/game/GameTypes";
import { simpleHash } from "@openfront/engine-lib/Util";
import { handleAITrades } from "@openfront/engine/execution/nation/AiTradeBehavior";
import { Game, Player } from "@openfront/engine/game/Game";
import { playerInfo, setup } from "./util/Setup";

describe("AI trade behavior", () => {
  let game: Game;
  let nation: Player;
  let human: Player;
  let tribe: Player;

  beforeEach(async () => {
    game = await setup("plains", {}, [
      playerInfo("nation", PlayerType.Nation),
      playerInfo("human", PlayerType.Human),
      playerInfo("tribe", PlayerType.Bot),
    ]);
    nation = game.player("nation");
    human = game.player("human");
    tribe = game.player("tribe");
    nation.conquer(game.ref(0, 0));
    human.conquer(game.ref(0, 1));
    tribe.conquer(game.ref(0, 2));
  });

  test("can propose trades to tribes when they can cover the shortage", () => {
    nation.addGold(5_000_000n);
    tribe.addOil(10_000);
    nation.updateRelation(tribe, 100);

    handleAITrades(game, nation, simpleHash(nation.id()) % 100);
    game.executeNextTick();
    game.executeNextTick();

    expect(nation.tradeOffer()).toMatchObject({
      recipientID: tribe.id(),
      offeredResource: "gold",
      requestedResource: "oil",
    });
  });

  test("accepts a fair offer from a friendly player when resources are available", () => {
    nation.addOil(2_000);
    human.addGold(1_000_000n);
    nation.updateRelation(human, 100);
    human.setTradeOffer({
      recipientID: nation.id(),
      offeredResource: "gold",
      offeredAmount: 1_000_000,
      requestedResource: "oil",
      requestedAmount: 500,
      createdAt: game.ticks(),
      expiresAt: game.ticks() + 200,
    });

    handleAITrades(game, nation, simpleHash(nation.id()) % 100);
    game.executeNextTick();
    game.executeNextTick();

    expect(human.tradeOffer()).toBeNull();
    expect(nation.oil()).toBe(1_500);
  });

  test("offers surplus gold for oil when the nation has an oil shortage", () => {
    nation.addGold(5_000_000n);
    human.addOil(10_000);
    nation.updateRelation(human, 100);

    handleAITrades(game, nation, simpleHash(nation.id()) % 100);
    game.executeNextTick();
    game.executeNextTick();

    expect(nation.tradeOffer()).toMatchObject({
      recipientID: human.id(),
      offeredResource: "gold",
      requestedResource: "oil",
    });
  });

  test("offers surplus gold for gas when the nation needs missile fuel", () => {
    nation.addGold(5_000_000n);
    nation.addOil(2_000);
    nation.addUranium(200);
    human.addGas(10_000);
    nation.updateRelation(human, 100);

    handleAITrades(game, nation, simpleHash(nation.id()) % 100);
    game.executeNextTick();
    game.executeNextTick();

    expect(nation.tradeOffer()).toMatchObject({
      recipientID: human.id(),
      offeredResource: "gold",
      requestedResource: "gas",
    });
  });

  test("rejects trade offers from hostile players", () => {
    nation.updateRelation(human, -100);
    human.setTradeOffer({
      recipientID: nation.id(),
      offeredResource: "oil",
      offeredAmount: 1_000,
      requestedResource: "gold",
      requestedAmount: 100_000,
      createdAt: game.ticks(),
      expiresAt: game.ticks() + 200,
    });
    nation.addGold(1_000_000n);

    handleAITrades(game, nation, simpleHash(nation.id()) % 100);
    game.executeNextTick();
    game.executeNextTick();

    expect(human.tradeOffer()).toBeNull();
  });
});
