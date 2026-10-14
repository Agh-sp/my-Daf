import { afterEach, describe, expect, it, vi } from "vitest";

const audioInstances: Array<{
  currentTime: number;
  loop: boolean;
  pause: ReturnType<typeof vi.fn>;
  play: ReturnType<typeof vi.fn>;
  preload: string;
  src: string;
  volume: number;
}> = [];

vi.stubGlobal(
  "Audio",
  class extends EventTarget {
    currentTime = 0;
    loop = false;
    preload = "";
    src: string;
    volume = 1;
    pause = vi.fn();
    play = vi.fn(() => Promise.resolve());

    constructor(src: string) {
      super();
      this.src = src;
      audioInstances.push(this);
    }
  },
);

// Some utility icons reach for browser APIs jsdom doesn't ship.
vi.stubGlobal(
  "ResizeObserver",
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
);
vi.stubGlobal("scrollTo", vi.fn());

import { MusicPlayer } from "../../src/client/components/MusicPlayer";
import { PlayPage } from "../../src/client/components/PlayPage";
import { UserSettings } from "../../src/client/UserSettings";

describe("play-page", () => {
  let el: PlayPage;

  async function mount() {
    if (!customElements.get("play-page")) {
      customElements.define("play-page", PlayPage);
    }
    el = document.createElement("play-page") as PlayPage;
    document.body.appendChild(el);
    await el.updateComplete;
  }

  async function mountMusicPlayer() {
    if (!customElements.get("music-player")) {
      customElements.define("music-player", MusicPlayer);
    }
    const player = document.createElement("music-player") as MusicPlayer;
    document.body.appendChild(player);
    await player.updateComplete;
    await Promise.resolve();
    return player;
  }

  afterEach(() => {
    el?.remove();
    audioInstances.length = 0;
    vi.clearAllMocks();
  });

  it("uses the new utility bar without exposing the account sign-in controls", async () => {
    await mount();

    expect(el.querySelector("#hamburger-btn")).not.toBeNull();
    expect(el.querySelector('[data-page="page-news"]')).not.toBeNull();
    expect(el.querySelector("nav-utility-icons")).not.toBeNull();
    expect(el.querySelector("nav-account-menu")).toBeNull();
    expect(el.querySelector("token-login")).not.toBeNull();
  });

  it("shows the Middle East map in a circular medallion", async () => {
    await mount();

    const regionalMap = el.querySelector<HTMLImageElement>(
      ".regional-map-emblem",
    );
    expect(regionalMap).not.toBeNull();
    expect(regionalMap?.getAttribute("src")).toContain(
      "maps/middleeast/thumbnail.webp",
    );
    expect(el.querySelector(".regional-map-frame")).not.toBeNull();
    expect(el.querySelector(".regional-map-figure")).not.toBeNull();
    expect(el.textContent).toContain("نقشهٔ خاورمیانه");
  });

  it("opens game modes from the clear home start action", async () => {
    await mount();
    const startButton = Array.from(el.querySelectorAll("button")).find(
      (button) => button.textContent?.includes("شروع بازی"),
    );
    startButton!.click();
    await el.updateComplete;

    expect(el.querySelector('[data-home-screen="play"]')).not.toBeNull();
    expect(el.querySelector("game-mode-selector")).not.toBeNull();
  });

  it("explains the three basic steps to new players", async () => {
    await mount();

    expect(el.querySelectorAll(".home-guide-card")).toHaveLength(3);
    expect(el.textContent).toContain("راهنمای شروع");
    expect(el.textContent).not.toContain("main.home_");
  });

  it("autoplays globally through games and exposes working play and stop controls", async () => {
    const player = await mountMusicPlayer();

    const audio = audioInstances[0];
    expect(audio.src).toContain("sounds/music/harifet_manam.mp3");
    expect(audio.loop).toBe(true);
    expect(audio.play).toHaveBeenCalledOnce();
    expect(
      player
        .querySelector<HTMLImageElement>("img")!
        .src.endsWith("images/music/harifet-manam-cover.png"),
    ).toBe(true);

    document.dispatchEvent(new Event("game-starting"));
    expect(audio.pause).not.toHaveBeenCalled();

    const stopButton = player.querySelector<HTMLButtonElement>(
      'button[aria-label="توقف"]',
    )!;
    expect(stopButton).not.toBeNull();
    stopButton.click();
    expect(audio.pause).toHaveBeenCalledOnce();
    expect(audio.currentTime).toBe(0);

    await player.updateComplete;
    const playButton = player.querySelector<HTMLButtonElement>(
      'button[aria-label="پخش"]',
    )!;
    expect(playButton).not.toBeNull();
    playButton.click();
    expect(audio.play).toHaveBeenCalledTimes(2);
  });

  it("follows the Music slider in settings", async () => {
    const player = await mountMusicPlayer();
    const audio = audioInstances[0];
    const settings = new UserSettings();
    const originalMusicVolume = settings.audioVolume("music");

    settings.setAudioVolume("music", 0);
    expect(audio.volume).toBe(0);
    expect(audio.pause).toHaveBeenCalled();

    settings.setAudioVolume("music", originalMusicVolume);
    await Promise.resolve();
    expect(audio.volume).toBeCloseTo(originalMusicVolume ** 2 * 0.89);
    expect(audio.play).toHaveBeenCalledTimes(2);

    player.remove();
  });
});
