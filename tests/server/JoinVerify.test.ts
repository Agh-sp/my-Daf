import { afterEach, describe, expect, it, vi } from "vitest";
import { planJoinVerify, verifyJoin } from "../../src/server/JoinVerify";

// verifyJoin resolves its endpoint from ServerEnv.jwtIssuer(), which throws
// if DOMAIN is unset.
process.env.DOMAIN ??= "localhost";

function jsonResponse(body: unknown, status = 200) {
  return { ok: status < 300, status, json: async () => body };
}

describe("verifyJoin", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns the display-ready pair on approval and posts the identity", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse({
        status: "approved",
        username: "SnugglePuppy",
        clanTag: "COOL",
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const verdict = await verifyJoin("1.2.3.4", "xXblackxX", "CoOl");

    expect(verdict).toEqual({
      status: "approved",
      username: "SnugglePuppy",
      clanTag: "COOL",
    });
    const [, init] = fetchMock.mock.calls[0];
    expect(JSON.parse(init.body)).toEqual({
      ip: "1.2.3.4",
      token: null,
      username: "xXblackxX",
      clanTag: "CoOl",
    });
  });

  it("normalizes an absent clanTag to null on approval", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(
          jsonResponse({ status: "approved", username: "Alice" }),
        ),
    );
    expect(await verifyJoin("ip", "Alice", null)).toEqual({
      status: "approved",
      username: "Alice",
      clanTag: null,
    });
  });

  it("passes a rejection through (extra identity fields are stripped)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        jsonResponse({ status: "rejected", reason: "join rejected" }),
      ),
    );
    expect(await verifyJoin("ip", "xXblackxX", null)).toEqual({
      status: "rejected",
      reason: "join rejected",
    });
  });

  it("sends a null bot-check token while screening the name", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse({
        status: "approved",
        username: "SnugglePuppy",
        clanTag: null,
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const verdict = await verifyJoin("ip", "xXblackxX", null);

    expect(verdict).toEqual({
      status: "approved",
      username: "SnugglePuppy",
      clanTag: null,
    });
    const [, init] = fetchMock.mock.calls[0];
    expect(JSON.parse(init.body).token).toBeNull();
  });

  it("returns error on a 4xx without retrying", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(jsonResponse({ message: "bad payload" }, 400));
    vi.stubGlobal("fetch", fetchMock);

    expect((await verifyJoin("ip", "Alice", null)).status).toBe("error");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns error on a 5xx without retrying", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(jsonResponse({ message: "boom" }, 500));
    vi.stubGlobal("fetch", fetchMock);

    expect((await verifyJoin("ip", "Alice", null)).status).toBe("error");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns error on a network error / timeout without retrying", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("network down"));
    vi.stubGlobal("fetch", fetchMock);

    expect((await verifyJoin("ip", "Alice", null)).status).toBe("error");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("returns error on a malformed body without retrying", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(jsonResponse({ approved: true }));
    vi.stubGlobal("fetch", fetchMock);

    expect((await verifyJoin("ip", "Alice", null)).status).toBe("error");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

describe("planJoinVerify", () => {
  const firstJoin = {
    isReadmit: false,
    gameStarted: false,
    identityUnchanged: false,
  };
  const readmit = { ...firstJoin, isReadmit: true };

  it("verifies a first join without a bot-check token", () => {
    expect(planJoinVerify(firstJoin)).toEqual({
      action: "verify",
    });
  });

  // First joins always go through API-side name screening.
  it("never skips a first join, whatever the game/identity state", () => {
    expect(
      planJoinVerify({
        ...firstJoin,
        gameStarted: true,
        identityUnchanged: true,
      }),
    ).toEqual({ action: "verify" });
  });

  it("verifies a pre-start re-admit with a changed identity using a null token", () => {
    expect(planJoinVerify(readmit)).toEqual({ action: "verify" });
  });

  it("skips re-admits into a started game (identity updates no longer apply)", () => {
    expect(planJoinVerify({ ...readmit, gameStarted: true })).toEqual({
      action: "skip",
    });
  });

  it("skips re-admits whose identity is unchanged (already screened at admission)", () => {
    expect(planJoinVerify({ ...readmit, identityUnchanged: true })).toEqual({
      action: "skip",
    });
  });

});
