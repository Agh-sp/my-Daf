import { assetUrl } from "@openfront/shared/AssetUrls";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { USER_SETTINGS_CHANGED_EVENT, UserSettings } from "../UserSettings";
import { translateText } from "../Utils";

type PlaybackState = "loading" | "playing" | "stopped" | "blocked" | "error";
const MUSIC_VOLUME_CHANGED_EVENT = `${USER_SETTINGS_CHANGED_EVENT}:settings.audio.music`;

@customElement("music-player")
export class MusicPlayer extends LitElement {
  @state() private playbackState: PlaybackState = "loading";
  private audio: HTMLAudioElement | null = null;
  private playbackAttempt = 0;
  private userPaused = false;
  private userSettings = new UserSettings();

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.audio = new Audio(assetUrl("sounds/music/harifet_manam.mp3"));
    this.audio.loop = true;
    this.audio.preload = "auto";
    this.audio.volume = this.musicGain();
    this.audio.addEventListener("playing", this.onPlaying);
    this.audio.addEventListener("pause", this.onStopped);
    this.audio.addEventListener("error", this.onError);
    globalThis.addEventListener(
      MUSIC_VOLUME_CHANGED_EVENT,
      this.onMusicVolumeChanged,
    );
    void this.startPlayback();
  }

  disconnectedCallback() {
    globalThis.removeEventListener(
      MUSIC_VOLUME_CHANGED_EVENT,
      this.onMusicVolumeChanged,
    );
    this.audio?.removeEventListener("playing", this.onPlaying);
    this.audio?.removeEventListener("pause", this.onStopped);
    this.audio?.removeEventListener("error", this.onError);
    this.audio?.pause();
    this.audio = null;
    super.disconnectedCallback();
  }

  private onPlaying = () => {
    this.playbackState = "playing";
  };

  private onStopped = () => {
    if (this.playbackState !== "error") this.playbackState = "stopped";
  };

  private onError = () => {
    console.error("Music player could not load the selected track.");
    this.playbackState = "error";
  };

  private musicGain(): number {
    const volume = this.userSettings.audioVolume("music");
    return volume * volume * 0.89;
  }

  private onMusicVolumeChanged = () => {
    if (!this.audio) return;
    this.audio.volume = this.musicGain();
    if (this.userSettings.audioVolume("music") === 0) {
      this.audio.pause();
      this.playbackState = "stopped";
    } else if (!this.userPaused) {
      void this.startPlayback();
    }
  };

  private async startPlayback() {
    if (!this.audio || this.playbackState === "playing") return;
    const audio = this.audio;
    const attempt = ++this.playbackAttempt;
    this.playbackState = "loading";
    try {
      await audio.play();
      if (attempt !== this.playbackAttempt || this.audio !== audio) return;
      this.playbackState = "playing";
    } catch (error) {
      if (attempt !== this.playbackAttempt || this.audio !== audio) return;
      if (error instanceof DOMException && error.name === "NotAllowedError") {
        this.playbackState = "blocked";
        return;
      }
      console.error("Music player playback failed:", error);
      this.playbackState = "error";
    }
  }

  private stopPlayback() {
    if (!this.audio) return;
    this.userPaused = true;
    this.playbackAttempt++;
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playbackState = "stopped";
  }

  private async togglePlayback() {
    if (this.playbackState === "playing" || this.playbackState === "loading") {
      this.stopPlayback();
      return;
    }
    this.userPaused = false;
    await this.startPlayback();
  }

  private text(key: string, fallback: string): string {
    const translated = translateText(key);
    return translated === key ? fallback : translated;
  }

  private get statusText(): string {
    switch (this.playbackState) {
      case "playing":
        return this.text("main.music_now_playing", "در حال پخش");
      case "loading":
        return this.text("main.music_loading", "در حال بارگذاری...");
      case "blocked":
        return this.text("main.music_autoplay_blocked", "برای پخش لمس کنید");
      case "error":
        return this.text("main.music_error", "پخش آهنگ ممکن نشد");
      case "stopped":
        return this.text("main.music_player", "پخش موسیقی");
    }
  }

  render() {
    const playing =
      this.playbackState === "playing" || this.playbackState === "loading";
    const buttonLabel = playing
      ? this.text("main.music_stop", "توقف")
      : this.text("main.music_play", "پخش");

    return html`
      <aside
        class="flex w-[min(19rem,calc(100vw-2rem))] items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/95 p-3 text-white shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        aria-label=${this.text("main.music_player", "پخش موسیقی")}
      >
        <div class="relative size-14 shrink-0">
          <img
            class="size-14 rounded-full border-2 border-amber-200/70 object-cover shadow-[0_0_18px_rgba(251,191,36,0.28)]"
            src=${assetUrl("images/music/harifet-manam-cover.png")}
            alt=${this.text("main.music_track", "حریفت منم")}
          />
          ${this.playbackState === "playing"
            ? html`<span
                class="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-slate-950 bg-emerald-400"
                aria-hidden="true"
              ></span>`
            : ""}
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-bold">
            ${this.text("main.music_track", "حریفت منم")}
          </p>
          <p
            class="mt-0.5 truncate text-[11px] text-white/60"
            aria-live="polite"
          >
            ${this.statusText}
          </p>
        </div>
        <button
          class="grid size-10 shrink-0 place-items-center rounded-full bg-amber-300 text-slate-950 shadow transition hover:scale-105 hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-100 disabled:cursor-wait disabled:opacity-70"
          type="button"
          aria-label=${buttonLabel}
          title=${buttonLabel}
          @click=${this.togglePlayback}
        >
          ${playing
            ? html`<svg
                viewBox="0 0 24 24"
                class="size-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>`
            : html`<svg
                viewBox="0 0 24 24"
                class="ms-0.5 size-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7 4.8a1 1 0 0 1 1.5-.86l11.2 6.7a1.6 1.6 0 0 1 0 2.72l-11.2 6.7A1 1 0 0 1 7 19.2V4.8Z"
                />
              </svg>`}
        </button>
      </aside>
    `;
  }
}
