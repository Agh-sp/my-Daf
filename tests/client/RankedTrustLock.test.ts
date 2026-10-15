import type { UserMeResponse } from "@openfront/shared/ApiSchemas";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ClientEnv } from "../../src/client/ClientEnv";

vi.mock("../../src/client/LobbySocket", () => ({
  PublicLobbySocket: class {
    start(): void {}
    stop(): void {}
  },
}));

import "../../src/client/GameModeSelector";

type Selector = HTMLElement & { updateComplete: Promise<unknown> };

function me(trustTier: "trusted" | "untrusted"): UserMeResponse {
  return {
    user: { email: "player@example.com" },
    player: { trustTier },
  } as unknown as UserMeResponse;
}

async function mount(): Promise<Selector> {
  const selector = document.createElement("game-mode-selector") as Selector;
  document.body.appendChild(selector);
  await selector.updateComplete;
  return selector;
}

async function broadcast(
  selector: Selector,
  response: UserMeResponse | false,
): Promise<void> {
  document.dispatchEvent(
    new CustomEvent("userMeResponse", { detail: response }),
  );
  await selector.updateComplete;
}

beforeEach(() => {
  window.BOOTSTRAP_CONFIG = {
    gameEnv: "dev",
    numWorkers: 1,
    turnstileSiteKey: "",
    jwtAudience: "test",
    instanceId: "test",
    gitCommit: "test",
  };
  ClientEnv.reset();
});

afterEach(() => {
  document.body.innerHTML = "";
  window.BOOTSTRAP_CONFIG = undefined;
  ClientEnv.reset();
});

describe("Ranked button", () => {
  it.each([
    ["untrusted", me("untrusted")],
    ["trusted", me("trusted")],
    ["signed out", false],
  ] as const)("has no trust lock for a %s viewer", async (_, response) => {
    const selector = await mount();
    await broadcast(selector, response);
    const button = [
      ...selector.querySelectorAll<HTMLButtonElement>("button"),
    ].find((candidate) =>
      candidate.textContent?.includes("mode_selector.ranked_title"),
    );
    expect(button).toBeDefined();
    expect(button?.querySelector("[data-trust]")).toBeNull();
  });

  it("opens the ranked modal without checking trust tier", async () => {
    const showPage = vi.fn();
    (window as unknown as { showPage: unknown }).showPage = showPage;
    const selector = await mount();
    await broadcast(selector, me("untrusted"));
    const button = [
      ...selector.querySelectorAll<HTMLButtonElement>("button"),
    ].find((candidate) =>
      candidate.textContent?.includes("mode_selector.ranked_title"),
    );
    button!.click();
    await selector.updateComplete;
    expect(showPage).toHaveBeenCalledWith("page-ranked");
    expect(selector.querySelector("confirm-dialog")).toBeNull();
    delete (window as unknown as { showPage?: unknown }).showPage;
  });
});
