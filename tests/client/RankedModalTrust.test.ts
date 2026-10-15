import type { UserMeResponse } from "@openfront/shared/ApiSchemas";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const getUserMe = vi.fn<() => Promise<UserMeResponse | false>>();

vi.mock("../../src/client/Api", () => ({
  getUserMe: () => getUserMe(),
}));

const userAuth = vi.fn(async (): Promise<unknown> => ({ jwt: "token" }));
vi.mock("../../src/client/Auth", () => ({
  userAuth: () => userAuth(),
}));

vi.mock("../../src/client/CrazyGamesSDK", () => ({
  crazyGamesSDK: {
    isOnCrazyGames: vi.fn(() => false),
    getUserProfile: vi.fn(async () => null),
  },
}));

vi.mock("../../src/client/TerrainMapFileLoader", () => ({
  terrainMapFileLoader: { getMapData: vi.fn() },
}));

vi.mock("../../src/client/Utils", () => ({
  translateText: vi.fn((key: string) => key),
  getMapName: vi.fn(),
  getModifierLabels: vi.fn(() => []),
}));

import { RankedModal } from "../../src/client/components/RankedModal";

function userMe(trustTier: "trusted" | "untrusted"): UserMeResponse {
  return {
    user: { email: "player@example.com" },
    player: {
      publicId: "player-id",
      adfree: false,
      unlimitedRanked: false,
      canCreatePublicLobbies: false,
      achievements: { singleplayerMap: [], player: [] },
      friends: [],
      subscription: null,
      trustTier,
    },
  } as unknown as UserMeResponse;
}

describe("RankedModal trust gate removed", () => {
  let modal: RankedModal;
  let openMatchmaking: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    getUserMe.mockReset();
    userAuth.mockResolvedValue({ jwt: "token" });
    openMatchmaking = vi.fn();
    document.addEventListener(
      "open-matchmaking",
      openMatchmaking as EventListener,
    );
    modal = new RankedModal();
    document.body.appendChild(modal);
  });

  afterEach(() => {
    document.removeEventListener(
      "open-matchmaking",
      openMatchmaking as EventListener,
    );
    modal.remove();
  });

  async function openWith(response: UserMeResponse | false): Promise<void> {
    getUserMe.mockResolvedValue(response);
    modal.open();
    await vi.waitFor(() => expect(getUserMe).toHaveBeenCalled());
    await modal.updateComplete;
  }

  it.each(["trusted", "untrusted"] as const)(
    "allows a %s account to enter the ranked queue",
    async (tier) => {
      await openWith(userMe(tier));
      modal.querySelectorAll("button")[2].click();
      await vi.waitFor(() => expect(openMatchmaking).toHaveBeenCalledOnce());
      expect((openMatchmaking.mock.calls[0][0] as CustomEvent).detail).toEqual({
        mode: "2v2",
      });
      expect(modal.querySelector("[data-trust]")).toBeNull();
      expect(modal.querySelector("confirm-dialog")).toBeNull();
    },
  );
});
