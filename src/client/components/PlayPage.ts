import { GameMapType } from "@openfront/engine-api/game/GameTypes";
import { assetUrl } from "@openfront/shared/AssetUrls";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import front01 from "../assets/welcome/front-01.jpg";
import front02 from "../assets/welcome/front-02.jpg";
import front03 from "../assets/welcome/front-03.jpg";
import front04 from "../assets/welcome/front-04.jpg";
import { terrainMapFileLoader } from "../TerrainMapFileLoader";
import { getGameName, translateText } from "../Utils";
import "./GlobalChat";
import "./NavUtilityIcons";

type HomeScreen = "home" | "real-war" | "play";

const SITE_LOGO = "images/MiddleEastDefendUserLogo.jpg";
const SITE_BACKDROPS = [front01, front02, front03, front04];
const ALLIANCE_MARKS = [
  { label: "حماس", src: assetUrl("flags/alliance-hamas.png") },
  { label: "انصارالله", src: assetUrl("flags/alliance-ansar-allah.png") },
  { label: "سپاه", src: assetUrl("flags/alliance-sepah.png") },
  { label: "فلسطین", src: assetUrl("flags/alliance-palestine.png") },
  { label: "ایران", src: assetUrl("flags/alliance-iran.png") },
] as const;

const HOME_TRANSLATION_FALLBACKS: Record<string, string> = {
  "main.back_home": "بازگشت به صفحهٔ اصلی",
  "main.choose_front": "حالت بازی را انتخاب کن",
  "main.edition": "نسخهٔ ۱",
  "main.home_alliance": "اتحاد",
  "main.home_front_id": "نقشهٔ ایران",
  "main.home_front_note": "برای شروع، یک حالت بازی انتخاب کن.",
  "main.home_region": "ایران",
  "main.help": "راهنما",
  "main.menu": "منو",
  "main.news": "خبرها",
  "main.normal_game": "بازی عادی",
  "main.open_real_war": "مشاهدهٔ جنگ واقعیت",
  "main.play": "بازی عادی",
  "main.real_war": "جنگ واقعیت",
  "main.real_war_desc": "سبک بازی متفاوت؛ این بخش فعلاً قفل است.",
  "main.real_war_intro":
    "جنگ واقعیت با شیوه‌ای تازه از بازی در دست ساخت است و فعلاً در دسترس نیست.",
  "main.real_war_locked": "قفل است — به‌زودی",
  "main.settings": "تنظیمات",
  "main.tagline":
    "کشورت را بساز، نقشه را شکل بده و در دنیایی زنده از راهبرد، رقبا را پشت سر بگذار.",
  "main.utilities": "ابزارها",
};

@customElement("play-page")
export class PlayPage extends LitElement {
  @state() private screen: HomeScreen = "home";
  @state() private middleEastMapUrl: string | null = null;
  @state() private welcomeVisible = true;
  @state() private activeBackdrop = 0;
  private backdropTimer: number | null = null;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("showPage", this.handleShowPage);
    void this.loadMiddleEastMapPreview();
    this.backdropTimer = window.setInterval(() => {
      this.activeBackdrop = (this.activeBackdrop + 1) % SITE_BACKDROPS.length;
    }, 5500);
  }

  disconnectedCallback() {
    window.removeEventListener("showPage", this.handleShowPage);
    if (this.backdropTimer !== null) window.clearInterval(this.backdropTimer);
    this.backdropTimer = null;
    super.disconnectedCallback();
  }

  private handleShowPage = (event: Event) => {
    if ((event as CustomEvent).detail === "page-play") {
      this.screen = "home";
    }
  };

  protected updated() {
    this.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (!key) return;
      const translated = translateText(key);
      const text =
        translated === key ? HOME_TRANSLATION_FALLBACKS[key] : translated;
      if (text !== undefined) element.textContent = text;
    });

    this.querySelectorAll<HTMLElement>(
      "[data-i18n-aria-label], [data-i18n-title]",
    ).forEach((element) => {
      for (const [dataAttribute, attribute] of [
        ["data-i18n-aria-label", "aria-label"],
        ["data-i18n-title", "title"],
      ]) {
        const key = element.getAttribute(dataAttribute);
        if (!key) continue;
        const translated = translateText(key);
        const text =
          translated === key ? HOME_TRANSLATION_FALLBACKS[key] : translated;
        if (text !== undefined) element.setAttribute(attribute, text);
      }
    });
  }

  createRenderRoot() {
    return this;
  }

  private async loadMiddleEastMapPreview() {
    try {
      this.middleEastMapUrl = terrainMapFileLoader.getMapData(
        GameMapType.MiddleEast,
      ).webpPath;
    } catch (error) {
      console.warn("Failed to load Middle East map preview:", error);
    }
  }

  private showScreen(screen: HomeScreen) {
    this.screen = screen;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  private renderBrandMark() {
    return html`
      <img
        class="home-brand-logo"
        src=${assetUrl(SITE_LOGO)}
        alt=${getGameName()}
      />
    `;
  }

  private renderRegionalMapFigure() {
    return html`
      <figure class="regional-map-figure">
        <div class="regional-map-frame">
          ${this.middleEastMapUrl
            ? html`<img
                class="regional-map-emblem"
                src=${this.middleEastMapUrl}
                alt="نقشهٔ خاورمیانه"
              />`
            : html`<span class="regional-map-loading">نقشهٔ خاورمیانه</span>`}
        </div>
        <figcaption class="regional-map-caption">نقشهٔ خاورمیانه</figcaption>
      </figure>
    `;
  }

  private renderWelcome() {
    return html`
      <section
        class="welcome-screen fixed inset-0 z-[100] grid place-items-center overflow-y-auto px-4 py-8 sm:px-8"
        dir="rtl"
        aria-labelledby="welcome-title"
      >
        <div
          class="welcome-card relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-amber-100/20 bg-[#0b1110] shadow-2xl md:flex-row"
        >
          <div
            class="welcome-art relative aspect-[16/10] w-full shrink-0 overflow-hidden md:aspect-auto md:w-[56%]"
          >
            ${SITE_BACKDROPS.map(
              (image, index) =>
                html`<img
                  class="welcome-image ${index === this.activeBackdrop
                    ? "is-active"
                    : ""}"
                  src=${image}
                  alt=""
                  aria-hidden="true"
                />`,
            )}
            <div class="welcome-art-shade"></div>
            <p
              class="welcome-art-caption absolute right-4 top-4 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-xs font-bold text-amber-100 backdrop-blur sm:right-6 sm:top-6"
            >
              بازی راهبردی خاورمیانه
            </p>
          </div>
          <div
            class="welcome-copy relative z-10 flex flex-col justify-center p-6 sm:p-8 md:w-[44%] md:p-10"
          >
            <img
              src=${assetUrl(SITE_LOGO)}
              alt=${getGameName()}
              class="welcome-brand-logo mb-1 h-auto w-36 self-start"
            />
            <h1
              id="welcome-title"
              class="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl"
            >
              خوش آمدید
            </h1>
            <p
              class="mt-3 max-w-3xl text-sm leading-7 text-stone-200 sm:text-base sm:leading-8"
            >
              در این بازی راهبردی، کشور خود را انتخاب کنید، قلمروتان را گسترش
              دهید، نیروها را مدیریت کنید و برای پیروزی با دیگر بازیکنان رقابت
              کنید.
            </p>
            <button
              class="welcome-continue mt-5 inline-flex min-h-12 w-full items-center justify-center gap-3 self-start rounded-xl bg-amber-300 px-6 py-3 text-sm font-black text-zinc-950 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 sm:w-auto"
              @click=${() => (this.welcomeVisible = false)}
            >
              <span>ورود به بازی</span>
              <span aria-hidden="true">←</span>
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private renderHome() {
    return html`
      <main
        data-home-screen="home"
        class="home-page mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-5 pb-14 pt-8 sm:px-8 lg:gap-16 lg:px-12 lg:pb-20 lg:pt-12"
      >
        <section class="home-hero" aria-labelledby="home-title">
          <div class="home-hero-copy">
            <p class="home-eyebrow">
              <span class="home-eyebrow-mark" aria-hidden="true"></span>
              میدان راهبرد؛ از نگاه تو
            </p>
            <h1 id="home-title" class="home-title">
              ${translateText("main.title")}
              <span>هر تصمیم، سرنوشت یک قلمرو.</span>
            </h1>
            <p class="home-description">
              نقشه را بخوان، هوشمندانه گسترش پیدا کن و در رقابتی زنده، راه خودت
              را برای پیروزی بساز.
            </p>

            <div class="home-player-field">
              <label for="home-player-name">نام فرمانده</label>
              <username-input
                id="home-player-name"
                class="h-12 min-w-0"
                hide-clan-tag
              ></username-input>
            </div>

            <div class="home-actions">
              <button
                class="home-primary-action"
                @click=${() => this.showScreen("play")}
              >
                <span>ورود به میدان</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  class="size-5"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="home-secondary-action"
                @click=${() =>
                  this.querySelector("#home-how-to-play")?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })}
              >
                راهنمای بازی
              </button>
            </div>
            <div class="home-meta">
              <span class="home-meta-indicator" aria-hidden="true"></span>
              بازی راهبردی چندنفره
              <span class="home-meta-divider" aria-hidden="true"></span>
              نقشهٔ خاورمیانه
            </div>
          </div>

          <figure class="home-feature">
            <div class="home-feature-image">
              ${SITE_BACKDROPS.map(
                (image, index) =>
                  html`<img
                    class="home-feature-slide ${index === this.activeBackdrop
                      ? "is-active"
                      : ""}"
                    src=${image}
                    alt=""
                    aria-hidden="true"
                  />`,
              )}
              <div class="home-feature-topline">
                <span class="home-feature-index"
                  >۰${this.activeBackdrop + 1}
                  <span>/ ۰${SITE_BACKDROPS.length}</span></span
                >
              </div>
            </div>
            <div class="home-feature-foot">
              <div
                class="home-feature-unity"
                role="img"
                aria-label="${translateText(
                  "main.home_alliance",
                )}: حماس، انصارالله، سپاه، فلسطین و ایران"
                title="نماد همبستگی"
              >
                <span class="home-unity-symbol" aria-label="نماد صلح">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="9.2"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <path
                      d="M12 2.8v9.4m0 0-6.2 6.2m6.2-6.2 6.2 6.2"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div class="home-unity-flags" aria-hidden="true">
                  ${ALLIANCE_MARKS.map(
                    ({ label, src }) =>
                      html`<img
                        class="home-unity-flag"
                        src=${src}
                        alt=""
                        title=${label}
                      />`,
                  )}
                </div>
              </div>
              <div class="home-feature-copy">
                <strong>خاورمیانه</strong>
                <span>راهبردت را بچین؛ قلمروت را گسترش بده.</span>
              </div>
              <div class="home-feature-controls" aria-label="تصاویر میدان">
                ${SITE_BACKDROPS.map(
                  (_, index) =>
                    html`<button
                      type="button"
                      class="home-feature-dot ${index === this.activeBackdrop
                        ? "is-active"
                        : ""}"
                      aria-label=${`نمایش تصویر ${index + 1}`}
                      aria-pressed=${index === this.activeBackdrop}
                      @click=${() => (this.activeBackdrop = index)}
                    ></button>`,
                )}
              </div>
            </div>
          </figure>
        </section>

        <section
          id="home-how-to-play"
          class="home-guide"
          aria-labelledby="home-guide-title"
        >
          <div class="home-section-heading">
            <div>
              <p class="home-section-kicker">شروع مأموریت</p>
              <h2 id="home-guide-title">میدان را به روش خودت بازی کن</h2>
            </div>
            <button
              class="home-war-link"
              @click=${() => this.showScreen("real-war")}
            >
              <span data-i18n="main.open_real_war"></span>
              <span aria-hidden="true">←</span>
            </button>
          </div>
          <div class="home-guide-grid">
            ${[
              {
                number: "01",
                title: "یک حالت انتخاب کن",
                description: "انفرادی تمرین کن یا وارد رقابت آنلاین شو.",
                icon: html`<svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 18.5V8.7L12 4l8 4.7v9.8l-8 4-8-4Z" />
                  <path d="m4.5 8.8 7.5 4.4 7.5-4.4M12 13.2v8.9" />
                  <path d="m9.2 5.6 8 4.5" />
                </svg>`,
              },
              {
                number: "02",
                title: "نقطهٔ شروع را پیدا کن",
                description: "جایگاهت را روی نقشه انتخاب و تثبیت کن.",
                icon: html`<svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M19 10.2c0 5.1-7 10.3-7 10.3S5 15.3 5 10.2a7 7 0 1 1 14 0Z"
                  />
                  <circle cx="12" cy="10" r="2.35" />
                  <path d="M3 5V3h2m14 0h2v2M3 19v2h2m14 0h2v-2" />
                </svg>`,
              },
              {
                number: "03",
                title: "گسترش بده و فرمان بران",
                description: "منابع و نیروهایت را برای پیروزی مدیریت کن.",
                icon: html`<svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 19V5m0 14h16" />
                  <path d="m7 15 4-4 3 2 6-7" />
                  <path d="M15.5 6H20v4.5" />
                </svg>`,
              },
            ].map(
              ({ number, title, description, icon }) => html`
                <article class="home-guide-card">
                  <div class="home-guide-card-top">
                    <span class="home-guide-number">${number}</span>
                    <span class="home-guide-icon">${icon}</span>
                  </div>
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )}
          </div>
        </section>
      </main>
    `;
  }

  private renderRealWar() {
    return html`
      <main
        data-home-screen="real-war"
        class="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-5 pb-12 pt-8 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-12 lg:py-12"
      >
        <section>
          <button
            class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-100/70 transition hover:text-amber-100"
            @click=${() => this.showScreen("home")}
          >
            <span aria-hidden="true">←</span>
            <span data-i18n="main.back_home"></span>
          </button>
          <p
            class="text-xs font-bold uppercase tracking-[0.28em] text-amber-200/70"
            data-i18n="main.edition"
          ></p>
          <h1
            class="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl"
            data-i18n="main.real_war"
          ></h1>
          <p
            class="mt-6 max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8"
            data-i18n="main.real_war_intro"
          ></p>
          <div
            class="mt-9 inline-flex min-h-12 cursor-not-allowed items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white/55"
            aria-disabled="true"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-5"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              aria-hidden="true"
            >
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
            </svg>
            <span data-i18n="main.real_war_locked"></span>
          </div>
        </section>
        <div
          class="relative mx-auto grid aspect-square w-full max-w-[35rem] place-items-center overflow-hidden rounded-[2rem] border border-amber-200/20 bg-[radial-gradient(circle_at_50%_40%,rgba(241,200,76,.12),transparent_55%),linear-gradient(145deg,#191817,#090a0c)]"
        >
          <div
            class="absolute inset-5 rounded-[1.5rem] border border-white/[0.07]"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-x-8 top-8 flex justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-white/30"
            aria-hidden="true"
          >
            <span data-i18n="main.home_region"></span
            ><span data-i18n="main.home_front_id"></span>
          </div>
          <div class="w-[92%]">${this.renderRegionalMapFigure()}</div>
          <div
            class="absolute inset-x-8 bottom-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-stone-400"
          >
            <span data-i18n="main.real_war_desc"></span>
            <span
              class="ml-3 size-2 shrink-0 rounded-full bg-amber-300 shadow-[0_0_16px_rgba(241,200,76,.8)]"
              aria-hidden="true"
            ></span>
          </div>
        </div>
        <section
          class="lg:col-span-2 rounded-2xl border border-amber-200/15 bg-amber-200/[0.04] p-6 text-center"
        >
          <p
            class="text-xs font-bold uppercase tracking-[0.25em] text-amber-100/60"
            data-i18n="main.edition"
          ></p>
          <p
            class="mt-3 text-lg font-bold text-white"
            data-i18n="main.real_war_locked"
          ></p>
        </section>
      </main>
    `;
  }

  private renderPlay() {
    return html`
      <main
        class="mx-auto w-full max-w-7xl flex-1 px-5 pb-12 pt-8 sm:px-8 lg:px-12 lg:py-12"
        data-home-screen="play"
      >
        <section class="play-command-banner">
          <div class="play-command-copy">
            <button
              class="play-command-back"
              @click=${() => this.showScreen("home")}
            >
              <span aria-hidden="true">←</span>
              <span data-i18n="main.back_home"></span>
            </button>
            <p class="play-command-edition" data-i18n="main.edition"></p>
            <h1 data-i18n="main.normal_game"></h1>
          </div>
          <div class="play-command-art" aria-hidden="true">
            <svg viewBox="0 0 220 150" fill="none">
              <path
                d="M0 30h220M0 75h220M0 120h220M38 0v150M82 0v150M126 0v150M170 0v150"
                stroke="currentColor"
                stroke-opacity=".1"
              />
              <path
                d="M-12 112c24-20 31-4 51-23 20-18 27-4 47-25 17-18 31-8 48-24 17-15 29-6 45-20 13-12 26-12 49-28M-9 134c24-20 31-4 51-23 20-18 27-4 47-25 17-18 31-8 48-24 17-15 29-6 45-20 13-12 26-12 49-28"
                stroke="currentColor"
                stroke-opacity=".28"
                stroke-width="1.5"
              />
              <circle
                cx="142"
                cy="74"
                r="31"
                stroke="currentColor"
                stroke-opacity=".48"
              />
              <circle
                cx="142"
                cy="74"
                r="15"
                stroke="currentColor"
                stroke-opacity=".6"
              />
              <path
                d="M142 29v27m0 36v27m-45-45h27m36 0h27m-45-45v90m-45-45h90"
                stroke="currentColor"
                stroke-opacity=".42"
              />
              <circle cx="142" cy="74" r="3.5" fill="currentColor" />
              <path
                d="M22 39h23v4H22zM22 47h14v2H22zm165 61h10v3h-10z"
                fill="currentColor"
                fill-opacity=".5"
              />
            </svg>
            <span></span>
          </div>
        </section>
        <section class="play-operation-shell">
          <div class="flex flex-col items-stretch gap-6">
            <game-mode-selector class="block min-w-0"></game-mode-selector>
            <global-chat class="block w-full min-w-0"></global-chat>
          </div>
        </section>
      </main>
    `;
  }

  render() {
    return html`
      <div
        id="page-play"
        class="relative isolate flex min-h-dvh flex-1 flex-col bg-[#08090b] text-white"
      >
        <token-login class="absolute"></token-login>
        <rewards-modal class="absolute"></rewards-modal>
        <div class="border-b border-white/10 bg-black/40 lg:hidden">
          <header
            class="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12"
          >
            <button
              id="hamburger-btn"
              class="grid size-10 shrink-0 place-items-center rounded-lg text-white/75 transition hover:bg-white/5 hover:text-amber-100"
              data-i18n-aria-label="main.menu"
              data-i18n-title="main.menu"
              aria-expanded="false"
              aria-controls="sidebar-menu"
              aria-haspopup="dialog"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                class="size-6"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
            <div class="flex min-w-0 items-center">
              ${this.renderBrandMark()}
              <span id="game-version" class="sr-only" aria-hidden="true"></span>
            </div>
            <nav
              class="flex items-center gap-1 sm:gap-3"
              data-i18n-aria-label="main.utilities"
            >
              <button
                class="nav-menu-item grid size-9 place-items-center rounded-full text-white/70 transition-colors hover:text-amber-200 [&.active]:text-amber-200"
                data-page="page-news"
                data-i18n-aria-label="main.news"
                data-i18n-title="main.news"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-5 pointer-events-none"
                  aria-hidden="true"
                >
                  <path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5" />
                </svg>
              </button>
              <nav-utility-icons size="mobile"></nav-utility-icons>
            </nav>
          </header>
        </div>
        ${this.screen === "home"
          ? this.renderHome()
          : this.screen === "real-war"
            ? this.renderRealWar()
            : this.renderPlay()}
        <div data-site-backdrop class="site-image-backdrop" aria-hidden="true">
          ${SITE_BACKDROPS.map(
            (image, index) =>
              html`<img
                class="site-background-image ${index === this.activeBackdrop
                  ? "is-active"
                  : ""}"
                src=${image}
                alt=""
              />`,
          )}
          <div class="site-background-shade"></div>
        </div>
        ${this.welcomeVisible ? this.renderWelcome() : ""}
      </div>
    `;
  }
}
