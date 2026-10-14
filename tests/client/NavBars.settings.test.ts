import { beforeEach, describe, expect, it } from "vitest";

import "../../src/client/components/DesktopNavBar";
import "../../src/client/components/NavUtilityIcons";
import "../../src/client/components/PlayPage";
import { initNavigation } from "../../src/client/Navigation";

// jsdom has no ResizeObserver, and the mobile top bar shares a subtree with
// <steam-wishlist>, which constructs one on first update.
globalThis.ResizeObserver ??= class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof ResizeObserver;

type Mountable = HTMLElement & { updateComplete: Promise<unknown> };

async function mount(tag: string): Promise<Mountable> {
  const el = document.createElement(tag) as Mountable;
  document.body.appendChild(el);
  await el.updateComplete;
  // Host bars render <nav-utility-icons> as a child, which then upgrades and
  // renders on its own cycle.
  const child = el.querySelector("nav-utility-icons") as Mountable | null;
  if (child !== null) await child.updateComplete;
  return el;
}

const settingsButton = (root: ParentNode) =>
  root.querySelector<HTMLElement>('.nav-menu-item[data-page="page-settings"]');

// Settings remains directly reachable without exposing an account sign-in
// entry; its rosette icon is paired with the help compass.
describe("nav-utility-icons settings rosette", () => {
  let icons: Mountable;

  beforeEach(async () => {
    document.body.innerHTML = "";
    window.currentPageId = "page-play";
    icons = await mount("nav-utility-icons");
  });

  it("renders a settings button the delegated router can route", () => {
    const button = settingsButton(icons);
    expect(button).not.toBeNull();
    // Navigation.ts routes every .nav-menu-item[data-page] click through
    // showPage(), and index.html carries <user-setting id="page-settings"
    // inline>, whose first tab is Gameplay. No routing code is needed.
    expect(button!.tagName).toBe("BUTTON");
    expect(button!.querySelector("svg")).not.toBeNull();
  });

  it("labels the button for screen readers and on hover", () => {
    const button = settingsButton(icons)!;
    expect(button.getAttribute("data-i18n-aria-label")).toBe("main.settings");
    expect(button.getAttribute("data-i18n-title")).toBe("main.settings");
    // The icon itself must not be announced separately.
    expect(button.querySelector("svg")!.getAttribute("aria-hidden")).toBe(
      "true",
    );
  });

  it("matches the help icon's box and hover treatment", () => {
    // The two have to read as a pair, so they share buttonClass().
    const help = icons.querySelector<HTMLElement>(
      '.nav-menu-item[data-page="page-help"]',
    )!;
    const settings = settingsButton(icons)!;
    const shared = (el: HTMLElement) =>
      el.className
        .split(/\s+/)
        .filter((c) => c !== "active" && c !== "")
        .sort();
    expect(shared(settings)).toEqual(shared(help));
  });

  it("sits last in the cluster, immediately left of the profile control", () => {
    const buttons = Array.from(
      icons.querySelectorAll<HTMLElement>(".nav-menu-item[data-page]"),
    ).map((b) => b.dataset.page);
    expect(buttons).toEqual(["page-help", "page-settings"]);
  });

  it("marks the button active once the settings page is shown", async () => {
    expect(settingsButton(icons)!.classList.contains("active")).toBe(false);

    // Drive the real caller: initNavigation installs the showPage that sets
    // currentPageId and dispatches the event this component listens for.
    initNavigation();
    window.showPage!("page-settings");
    await icons.updateComplete;

    expect(settingsButton(icons)!.classList.contains("active")).toBe(true);
  });
});

describe("the nav bars that host the cluster", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    window.currentPageId = "page-play";
  });

  it("keeps settings in the desktop utility cluster without an account entry", async () => {
    const bar = await mount("desktop-nav-bar");
    expect(settingsButton(bar)).not.toBeNull();

    const cluster = bar.querySelector("nav-utility-icons")!;
    expect(cluster.nextElementSibling).toBeNull();
    expect(bar.querySelector("nav-account-menu")).toBeNull();
    expect(bar.querySelector('[data-page="page-leaderboard"]')).toBeNull();
    expect(bar.querySelector('[data-page="page-clan"]')).toBeNull();
  });

  it("keeps settings in the mobile utility bar without an account entry", async () => {
    const page = await mount("play-page");
    const cluster = page.querySelector("nav-utility-icons")!;
    expect(cluster.getAttribute("size")).toBe("mobile");
    expect(settingsButton(cluster)).not.toBeNull();
    expect(cluster.nextElementSibling).toBeNull();
    expect(page.querySelector("nav-account-menu")).toBeNull();
    expect(page.querySelector("token-login")).not.toBeNull();
  });

  it("omits leaderboard and clans from the mobile navigation", async () => {
    const bar = await mount("mobile-nav-bar");

    expect(bar.querySelector('[data-page="page-leaderboard"]')).toBeNull();
    expect(bar.querySelector('[data-page="page-clan"]')).toBeNull();
  });
});
