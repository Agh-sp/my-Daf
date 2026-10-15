import { GameType } from "@openfront/engine-api/game/GameTypes";
import { describe, expect, it } from "vitest";
import {
  cid,
  makeClient as harnessClient,
  makeGame as harnessGame,
  mockWsOf,
} from "../util/GameServerHarness";

const C1 = cid("t1");
const C2 = cid("t2");

function makeClient(
  clientID: string,
  persistentID: string,
  trusted: boolean,
  spectator = false,
) {
  return harnessClient({
    clientID,
    persistentID,
    trusted,
    spectator,
    username: "TestUser",
  });
}

function makeGame() {
  return harnessGame({
    config: {
      gameType: GameType.Private,
      trusted: true,
    },
  });
}

describe("GameServer trust tier no longer gates joining", () => {
  it("admits untrusted accounts to a lobby carrying the legacy trusted flag", () => {
    const game = makeGame();
    expect(game.joinClient(makeClient(C1, "p1", false))).toBe("joined");
  });

  it("allows an untrusted spectator to take an open player seat", async () => {
    const game = makeGame();
    const client = makeClient(C1, "p1", false, true);
    expect(game.joinClient(client)).toBe("joined");
    expect(client.spectator).toBe(true);

    await mockWsOf(client).emit({ type: "spectate", spectator: false });
    expect(client.spectator).toBe(false);
  });

  it("still enforces explicit allowlists", () => {
    const game = harnessGame({
      config: {
        gameType: GameType.Private,
        trusted: true,
        allowedPublicIds: ["allowed-player"],
      },
    });
    const denied = harnessClient({
      clientID: C2,
      persistentID: "p2",
      publicId: "other-player",
      trusted: true,
      username: "TestUser",
    });
    expect(game.joinClient(denied)).toBe("not_allowlisted");
  });
});
