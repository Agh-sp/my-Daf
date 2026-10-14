import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { getCosmeticsHash, getGamesPlayed } = vi.hoisted(() => ({
  getCosmeticsHash: vi.fn(async () => "hash-2"),
  getGamesPlayed: vi.fn(() => 0),
}));
vi.mock("../../src/client/Cosmetics", () => ({ getCosmeticsHash }));
vi.mock("../../src/client/Utils", () => ({ getGamesPlayed }));

import {
  NavNotificationsController,
  navNotifications,
} from "../../src/client/components/NavNotificationsController";
import { setIncomingFriendRequestCount } from "../../src/client/GlobalChatAuth";

// Two components with their own controller — the help icon and store nav.
function host() {
  const requestUpdate = vi.fn();
  const stub = {
    requestUpdate,
    addController: () => {},
    removeController: () => {},
    updateComplete: Promise.resolve(true),
  };
  const controller = new NavNotificationsController(stub as never);
  controller.hostConnected();
  return { controller, requestUpdate };
}

describe("nav notifications", () => {
  beforeEach(() => {
    navNotifications.reset();
    localStorage.clear();
    // An older cosmetics hash means the store has something new.
    localStorage.setItem("storeSeenHash", "hash-1");
  });

  afterEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("shares cosmetics state across components and shows the store dot", async () => {
    const help = host();
    const navBar = host();
    // Let the cosmetics-hash fetch settle.
    await Promise.resolve();
    await Promise.resolve();

    expect(navBar.controller.showStoreDot()).toBe(true);
    expect(help.controller.showHelpDot()).toBe(false);

    navBar.controller.onStoreClick();

    expect(navBar.controller.showStoreDot()).toBe(false);
    expect(help.controller.showHelpDot()).toBe(true);
    expect(help.requestUpdate).toHaveBeenCalled();
  });

  it("shows help only when no cosmetic update is pending", async () => {
    const navBar = host();
    await Promise.resolve();
    await Promise.resolve();

    expect(navBar.controller.showHelpDot()).toBe(false);
    navBar.controller.onStoreClick();
    expect(navBar.controller.showHelpDot()).toBe(true);
    navBar.controller.onHelpClick();
    expect(navBar.controller.showHelpDot()).toBe(false);
  });

  it("shares incoming friend-request counts across nav components", () => {
    const help = host();
    const navBar = host();

    setIncomingFriendRequestCount(2);

    expect(navBar.controller.friendRequestCount()).toBe(2);
    expect(help.controller.friendRequestCount()).toBe(2);
    expect(help.requestUpdate).toHaveBeenCalled();
  });
});
