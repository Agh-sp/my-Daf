import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { LangSelector } from "./LangSelector";
import { translateText } from "./Utils";

type StartingTextKey =
  | "game_starting_modal.attribution"
  | "game_starting_modal.connecting"
  | "game_starting_modal.subtitle";

@customElement("game-starting-modal")
export class GameStartingModal extends LitElement {
  @state()
  isVisible = false;

  createRenderRoot() {
    return this;
  }

  private text(key: StartingTextKey, persianText: string): string {
    const language = document.querySelector<LangSelector>("lang-selector")
      ?.currentLang;
    if (language?.split("-")[0] === "fa") return persianText;

    return translateText(
      key,
      undefined,
      key === "game_starting_modal.attribution"
        ? { preserveOpenFront: true }
        : undefined,
    );
  }

  render() {
    const isVisible = this.isVisible;
    return html`
      <div
        class="fixed inset-0 z-[9998] bg-slate-950/80 backdrop-blur-sm transition-all duration-300 ${isVisible
          ? "opacity-100 visible"
          : "opacity-0 invisible"}"
        aria-hidden="true"
      ></div>
      <div
        class="fixed left-1/2 top-1/2 z-[9999] w-[min(92vw,28rem)] -translate-x-1/2 rounded-3xl border border-cyan-200/15 bg-gradient-to-b from-slate-900 to-slate-950 p-7 text-center text-white shadow-[0_25px_100px_rgba(0,0,0,.65)] transition-all duration-300 ${isVisible
          ? "opacity-100 visible -translate-y-1/2"
          : "opacity-0 invisible -translate-y-[48%]"}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-starting-title"
        aria-live="polite"
      >
        <div
          class="pointer-events-none absolute -top-20 left-1/2 size-44 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        ></div>
        <div class="relative mx-auto mb-6 grid size-20 place-items-center">
          <span
            class="absolute inset-0 rounded-full border-2 border-cyan-200/15 border-t-cyan-200 animate-spin"
            aria-hidden="true"
          ></span>
          <span
            class="absolute inset-2 rounded-full border border-amber-200/20"
            aria-hidden="true"
          ></span>
          <svg
            class="size-8 text-cyan-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            aria-hidden="true"
          >
            <path d="M12 2.5 20 7v10l-8 4.5L4 17V7l8-4.5Z" />
            <path d="M4.5 7.3 12 12l7.5-4.7M12 12v9" />
          </svg>
        </div>
        <p
          class="relative mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-200/70"
        >
          ${this.text(
            "game_starting_modal.connecting",
            "در حال آماده‌سازی میدان نبرد",
          )}
        </p>
        <p
          id="game-starting-title"
          class="relative text-2xl font-black tracking-wide text-white sm:text-3xl"
        >
          ${translateText("game_starting_modal.title")}
        </p>
        <p class="relative mt-3 text-sm leading-6 text-slate-300">
          ${this.text(
            "game_starting_modal.subtitle",
            "در حال اتصال به بازی و هماهنگ‌سازی بازیکنان...",
          )}
        </p>
        <p
          class="relative mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400"
        >
          ${this.text(
            "game_starting_modal.attribution",
            "دفاع خاورمیانه با الهام از پروژهٔ متن‌باز OpenFront ساخته شده؛ اما تجربه‌ای مستقل، متفاوت و نوآورانه با ویژگی‌های مدرن است. با سپاس از مشارکت‌کنندگان OpenFront.",
          )}
        </p>
        <div
          class="relative mt-7 h-1.5 overflow-hidden rounded-full bg-white/10"
          aria-hidden="true"
        >
          <span
            class="block h-full w-2/5 rounded-full bg-gradient-to-r from-cyan-300 to-amber-200 animate-pulse"
          ></span>
        </div>
      </div>
    `;
  }

  show() {
    this.isVisible = true;
    this.requestUpdate();
  }

  hide() {
    this.isVisible = false;
    this.requestUpdate();
  }
}
