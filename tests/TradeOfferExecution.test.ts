import { PlayerType, UnitType } from "@openfront/engine-api/game/GameTypes";
import { TradeOfferExecution } from "@openfront/engine/execution/TradeOfferExecution";
import { Game, Player } from "@openfront/engine/game/Game";
import { playerInfo, setup } from "./util/Setup";
import { roundTrip } from "./util/Snapshot";

describe("TradeOfferExecution", () => {
  let game: Game;
  let seller: Player;
  let buyer: Player;

  function execute(execution: TradeOfferExecution): void {
    game.addExecution(execution);
    game.executeNextTick();
    game.executeNextTick();
  }

  beforeEach(async () => {
    game = await setup("plains", { infiniteGold: true, instantBuild: true }, [
      playerInfo("seller", PlayerType.Human),
      playerInfo("buyer", PlayerType.Human),
    ]);
    seller = game.player("seller");
    buyer = game.player("buyer");
    seller.conquer(game.ref(0, 0));
    buyer.conquer(game.ref(0, 1));
    seller.buildUnit(UnitType.OilStorage, game.ref(0, 0), {});
    buyer.buildUnit(UnitType.OilStorage, game.ref(0, 1), {});
  });

  test("moves uranium and gold only after an offer is accepted", () => {
    seller.addUranium(50_000);
    buyer.addGold(5_000_000n);

    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "uranium",
        offeredAmount: 50_000,
        requestedResource: "gold",
        requestedAmount: 5_000_000,
      }),
    );
    const sellerGoldBeforeAccept = seller.gold();
    const buyerGoldBeforeAccept = buyer.gold();

    expect(seller.uranium()).toBe(50_000);
    expect(buyer.gold()).toBe(5_000_000n);
    expect(seller.tradeOffer()).toEqual({
      recipientID: buyer.id(),
      offeredResource: "uranium",
      offeredAmount: 50_000,
      requestedResource: "gold",
      requestedAmount: 5_000_000,
      createdAt: 1,
      expiresAt: 201,
    });

    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "accept",
      }),
    );

    expect(seller.uranium()).toBe(0);
    expect(seller.gold() - sellerGoldBeforeAccept).toBe(5_000_000n);
    expect(buyer.uranium()).toBe(50_000);
    expect(buyerGoldBeforeAccept - buyer.gold()).toBe(5_000_000n);
    expect(seller.tradeOffer()).toBeNull();
  });

  test("transfers gas only after an offer is accepted", () => {
    seller.addGas(1_000);
    buyer.addGold(50_000n);

    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "gas",
        offeredAmount: 500,
        requestedResource: "gold",
        requestedAmount: 50_000,
      }),
    );
    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "accept",
      }),
    );

    expect(seller.gas()).toBe(500);
    expect(buyer.gas()).toBe(500);
    expect(seller.gold()).toBe(50_000n);
    expect(buyer.gold()).toBe(0n);
  });

  test("embargo cancels pending deals and prevents new offers", () => {
    seller.addOil(800);
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );
    buyer.setTradeOffer({
      recipientID: seller.id(),
      offeredResource: "uranium",
      offeredAmount: 100,
      requestedResource: "oil",
      requestedAmount: 500,
      createdAt: game.ticks(),
      expiresAt: game.ticks() + 200,
    });
    expect(seller.tradeOffer()).not.toBeNull();
    expect(buyer.tradeOffer()).not.toBeNull();

    seller.addEmbargo(buyer, false);

    expect(seller.tradeOffer()).toBeNull();
    expect(buyer.tradeOffer()).toBeNull();
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );
    expect(seller.tradeOffer()).toBeNull();
  });

  test("transfers stored missiles only when the recipient has arsenal capacity", () => {
    const sellerArsenal = seller.buildUnit(
      UnitType.Arsenal,
      game.ref(1, 0),
      {},
    );
    const buyerArsenal = buyer.buildUnit(UnitType.Arsenal, game.ref(1, 1), {});
    expect(sellerArsenal.storeMissile()).toBe(true);
    expect(sellerArsenal.storeMissile()).toBe(true);
    buyer.addOil(100);

    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "missile",
        offeredAmount: 2,
        requestedResource: "oil",
        requestedAmount: 100,
      }),
    );
    expect(seller.tradeOffer()?.offeredResource).toBe("missile");

    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "accept",
      }),
    );

    expect(sellerArsenal.missilesStored()).toBe(0);
    expect(buyerArsenal.missilesStored()).toBe(2);
    expect(seller.tradeOffer()).toBeNull();
  });

  test("rejects a missile trade offer when recipient arsenals are full", () => {
    const sellerArsenal = seller.buildUnit(
      UnitType.Arsenal,
      game.ref(1, 0),
      {},
    );
    const buyerArsenal = buyer.buildUnit(UnitType.Arsenal, game.ref(1, 1), {});
    expect(sellerArsenal.storeMissile()).toBe(true);
    for (let i = 0; i < buyerArsenal.missileCapacity(); i++) {
      expect(buyerArsenal.storeMissile()).toBe(true);
    }
    buyer.addOil(100);

    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "missile",
        offeredAmount: 1,
        requestedResource: "oil",
        requestedAmount: 100,
      }),
    );

    expect(seller.tradeOffer()).toBeNull();
    expect(sellerArsenal.missilesStored()).toBe(1);
    expect(buyerArsenal.missilesStored()).toBe(buyerArsenal.missileCapacity());
  });

  test("rejecting or cancelling an offer never transfers resources", () => {
    seller.addOil(800);
    buyer.addUranium(300);
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );

    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "reject",
      }),
    );
    expect(seller.tradeOffer()).toBeNull();
    expect(seller.oil()).toBe(800);
    expect(buyer.uranium()).toBe(300);

    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer_response",
        target: buyer.id(),
        action: "cancel",
      }),
    );

    expect(seller.tradeOffer()).toBeNull();
    expect(seller.oil()).toBe(800);
    expect(buyer.uranium()).toBe(300);
  });

  test("clears an offer if the recipient cannot pay when accepting", () => {
    seller.addOil(800);
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );

    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "accept",
      }),
    );

    expect(seller.tradeOffer()).toBeNull();
    expect(seller.oil()).toBe(800);
    expect(buyer.uranium()).toBe(0);
  });

  test("preserves pending offers in game snapshots", async () => {
    seller.addOil(800);
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "uranium",
        requestedAmount: 100,
      }),
    );

    const { restored } = await roundTrip(game, "plains");
    expect(restored.player(seller.id()).tradeOffer()).toEqual(
      seller.tradeOffer(),
    );
  });

  test("expires offers after 20 seconds and refuses late acceptance", () => {
    seller.addOil(800);
    execute(
      new TradeOfferExecution(seller, {
        type: "trade_offer",
        recipient: buyer.id(),
        offeredResource: "oil",
        offeredAmount: 500,
        requestedResource: "gold",
        requestedAmount: 100,
      }),
    );
    buyer.addGold(100n);

    const offer = seller.tradeOffer();
    expect(offer).not.toBeNull();
    for (let i = 0; i < 200; i++) game.executeNextTick();

    expect(seller.tradeOffer()).toBeNull();
    execute(
      new TradeOfferExecution(buyer, {
        type: "trade_offer_response",
        target: seller.id(),
        action: "accept",
      }),
    );
    expect(seller.oil()).toBe(800);
    expect(buyer.gold()).toBe(100n);
  });
});
