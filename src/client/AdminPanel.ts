import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { z } from "zod";
import { ClientEnv } from "./ClientEnv";
import { ensureServerList } from "./ServerList";
import { translateText as baseTranslateText } from "./Utils";

const ADMIN_TEXT_FA: Record<string, string> = {
  "admin_panel.action_failed": "انجام عملیات ناموفق بود (HTTP {status}).",
  "admin_panel.active_games": "بازی‌های فعال",
  "admin_panel.actions": "عملیات",
  "admin_panel.admin_session": "نشست مدیر فعال است",
  "admin_panel.authenticating": "در حال ورود…",
  "admin_panel.ban_integration_note":
    "برای اعمال بن سراسری باید سرویس حساب کاربری هنگام ورود به هر سرور، بن را بررسی کند. این سرور هنوز API پایدار بن ندارد؛ بنابراین کیک محلی را به‌عنوان بن سراسری نمایش نمی‌دهیم.",
  "admin_panel.bans": "بن‌ها",
  "admin_panel.eyebrow": "مدیریت سرور",
  "admin_panel.game": "بازی",
  "admin_panel.health_subtitle": "وضعیت زندهٔ سرورهای بازی",
  "admin_panel.healthy": "سالم",
  "admin_panel.in_game": "آنلاین",
  "admin_panel.internal_use": "فقط برای استفادهٔ داخلی",
  "admin_panel.invalid_credentials": "نام کاربری یا رمز عبور نادرست است.",
  "admin_panel.kick": "کیک",
  "admin_panel.last_updated": "به‌روزرسانی: {time}",
  "admin_panel.load_average": "میانگین بار",
  "admin_panel.load_failed": "بارگیری پنل مدیریت ناموفق بود.",
  "admin_panel.login_failed":
    "ورود ناموفق بود. اتصال را بررسی و دوباره تلاش کنید.",
  "admin_panel.login_not_configured": "ورود مدیر در این سرور تنظیم نشده است.",
  "admin_panel.login_rate_limited":
    "تلاش‌های ورود بیش از حد بود. ۱۵ دقیقه صبر کنید.",
  "admin_panel.login_subtitle":
    "برای مدیریت کاربران آنلاین و مشاهدهٔ وضعیت سرورها وارد شوید.",
  "admin_panel.login_title": "ورود مدیر",
  "admin_panel.memory_rss": "حافظهٔ سرور",
  "admin_panel.no_players": "کاربر آنلاینی پیدا نشد.",
  "admin_panel.navigation": "مدیریت",
  "admin_panel.online_user_count": "{count} کاربر آنلاین",
  "admin_panel.online_users": "کاربران آنلاین",
  "admin_panel.overview": "نمای کلی",
  "admin_panel.player": "بازیکن",
  "admin_panel.player_not_found": "بازیکن دیگر آنلاین نیست.",
  "admin_panel.platform": "پلتفرم",
  "admin_panel.password": "رمز عبور",
  "admin_panel.no_reports": "گزارشی برای نمایش وجود ندارد.",
  "admin_panel.report_reason_abusive_language": "فحاشی یا الفاظ نامناسب",
  "admin_panel.report_reason_harassment": "آزار و تهدید",
  "admin_panel.report_reason_other": "مورد دیگر",
  "admin_panel.report_reason_spam": "هرزنامه",
  "admin_panel.reported_message": "پیام گزارش‌شده",
  "admin_panel.reported_user": "کاربر گزارش‌شده",
  "admin_panel.reporter": "گزارش‌دهنده",
  "admin_panel.reports_memory_note":
    "گزارش‌ها در حافظهٔ سرور ذخیره می‌شوند و پس از راه‌اندازی مجدد پاک خواهند شد.",
  "admin_panel.reports": "گزارش‌ها",
  "admin_panel.reports_future_note":
    "پس از اضافه‌شدن گزارش بازیکنان، صندوق گزارش‌ها به این بخش وصل می‌شود. فعلاً گزارشی ثبت نشده است.",
  "admin_panel.refresh": "تازه‌سازی",
  "admin_panel.refreshing": "در حال تازه‌سازی…",
  "admin_panel.recent_players": "بازیکنان اخیر",
  "admin_panel.requires_account_api": "نیازمند اتصال به سرویس حساب‌ها",
  "admin_panel.search": "جست‌وجوی نام یا شناسهٔ بازی",
  "admin_panel.secure_session": "نشست امن سرور · پایان خودکار اعتبار",
  "admin_panel.session_expired": "نشست مدیر منقضی شد؛ دوباره وارد شوید.",
  "admin_panel.sign_in": "ورود",
  "admin_panel.sign_out": "خروج",
  "admin_panel.server_health": "سلامت سرور",
  "admin_panel.spectator": "تماشاگر",
  "admin_panel.status": "وضعیت",
  "admin_panel.subtitle": "فعالیت سرورها و مدیریت کاربران را بررسی کنید.",
  "admin_panel.title": "پنل مدیریت",
  "admin_panel.uptime": "مدت فعالیت",
  "admin_panel.username": "نام کاربری",
  "admin_panel.users": "کاربران",
  "admin_panel.worker": "ورکر",
  "admin_panel.worker_failed":
    "دریافت اطلاعات ورکر {worker} ناموفق بود (HTTP {status}).",
  "admin_panel.worker_memory": "حافظهٔ پردازه",
  "admin_panel.workers": "ورکرها",
  "admin_panel.workers_online": "ورکر آنلاین",
  "admin_panel.view_all": "نمایش همه",
};

const translateText = (
  key: string,
  params?: Record<string, string | number>,
): string => {
  const translated = baseTranslateText(key, params);
  if (translated !== key) return translated;
  return (ADMIN_TEXT_FA[key] ?? key).replace(
    /\{(\w+)\}/g,
    (placeholder, name: string) => String(params?.[name] ?? placeholder),
  );
};

type AdminPlayer = {
  clientID: string;
  username: string;
  spectator: boolean;
  platform: string;
};

type AdminGame = {
  gameID: string;
  phase: string;
  gameType: string;
  createdAt: number;
  players: AdminPlayer[];
};

type AdminWorkerOverview = {
  workerId: number;
  workerCount: number;
  uptimeSeconds: number;
  loadAverage: number[];
  memory: { rss: number; heapUsed: number; heapTotal: number };
  games: AdminGame[];
};

const AdminChatReportSchema = z.object({
  id: z.string(),
  messageId: z.string(),
  reportedBy: z.object({ publicId: z.string(), username: z.string() }),
  reported: z.object({ publicId: z.string(), username: z.string() }),
  message: z.string(),
  reason: z.enum(["abusive_language", "harassment", "spam", "other"]),
  createdAt: z.number(),
});

type AdminChatReport = z.infer<typeof AdminChatReportSchema> & {
  workerId: number;
};

type AdminTab = "overview" | "users" | "bans" | "reports";
const SESSION_KEY = "openfront_admin_session";

@customElement("admin-panel")
export class AdminPanel extends LitElement {
  @state() private overviews: AdminWorkerOverview[] = [];
  @state() private reports: AdminChatReport[] = [];
  @state() private loading = false;
  @state() private submitting = false;
  @state() private error: string | null = null;
  @state() private search = "";
  @state() private lastUpdated: number | null = null;
  @state() private username = "";
  @state() private password = "";
  @state() private loggedIn = false;
  @state() private tab: AdminTab = "overview";

  private refreshTimer: ReturnType<typeof setInterval> | undefined;
  private active = false;
  private readonly onPageChange = (event: Event) => {
    this.active = (event as CustomEvent<string>).detail === "page-admin-panel";
    document.body.classList.toggle("admin-panel-open", this.active);
    if (this.active && sessionStorage.getItem(SESSION_KEY)) {
      void this.refresh();
    } else {
      this.stopRefresh();
    }
  };

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("showPage", this.onPageChange);
    this.active = !this.classList.contains("hidden");
    document.body.classList.toggle("admin-panel-open", this.active);
    if (this.active && sessionStorage.getItem(SESSION_KEY)) {
      void this.refresh();
    }
  }

  disconnectedCallback() {
    window.removeEventListener("showPage", this.onPageChange);
    document.body.classList.remove("admin-panel-open");
    this.stopRefresh();
    super.disconnectedCallback();
  }

  private stopRefresh() {
    if (this.refreshTimer !== undefined) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = undefined;
    }
  }

  private async apiBase(): Promise<{ base: string; workerCount: number }> {
    await ensureServerList();
    return {
      base: ClientEnv.serverHttpBase(),
      workerCount: ClientEnv.numWorkers(),
    };
  }

  private async login(event: SubmitEvent) {
    event.preventDefault();
    this.submitting = true;
    this.error = null;
    try {
      const { base } = await this.apiBase();
      const response = await fetch(`${base}/w0/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });
      if (!response.ok) {
        throw new Error(
          response.status === 429
            ? translateText("admin_panel.login_rate_limited")
            : response.status === 503
              ? translateText("admin_panel.login_not_configured")
              : translateText("admin_panel.invalid_credentials"),
        );
      }
      const result = (await response.json()) as { token: string };
      sessionStorage.setItem(SESSION_KEY, result.token);
      this.password = "";
      this.loggedIn = true;
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.login_failed");
    } finally {
      this.submitting = false;
    }
  }

  private signOut() {
    sessionStorage.removeItem(SESSION_KEY);
    this.loggedIn = false;
    this.overviews = [];
    this.stopRefresh();
  }

  private async refresh() {
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      return;
    }
    this.loading = true;
    this.error = null;
    try {
      const { base, workerCount } = await this.apiBase();
      const results = await Promise.all(
        Array.from({ length: workerCount }, async (_, workerId) => {
          const response = await fetch(
            `${base}/w${workerId}/api/admin/overview`,
            { headers: { Authorization: `Bearer ${token}` } },
          );
          if (response.status === 401) {
            sessionStorage.removeItem(SESSION_KEY);
            this.loggedIn = false;
            throw new Error(translateText("admin_panel.session_expired"));
          }
          if (!response.ok) {
            throw new Error(
              translateText("admin_panel.worker_failed", {
                worker: workerId,
                status: response.status,
              }),
            );
          }
          return (await response.json()) as AdminWorkerOverview;
        }),
      );
      this.overviews = results;
      this.reports = await this.fetchReports(base, workerCount, token);
      this.loggedIn = true;
      this.lastUpdated = Date.now();
      if (this.active) {
        this.refreshTimer ??= setInterval(() => void this.refresh(), 15_000);
      }
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.load_failed");
      this.overviews = [];
      this.reports = [];
      this.stopRefresh();
    } finally {
      this.loading = false;
    }
  }

  private async fetchReports(
    base: string,
    workerCount: number,
    token: string,
  ): Promise<AdminChatReport[]> {
    const perWorker = await Promise.all(
      Array.from({ length: workerCount }, async (_, workerId) => {
        const response = await fetch(`${base}/w${workerId}/api/admin/reports`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status === 401) {
          sessionStorage.removeItem(SESSION_KEY);
          this.loggedIn = false;
          throw new Error(translateText("admin_panel.session_expired"));
        }
        if (!response.ok) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: response.status,
            }),
          );
        }
        const data: unknown = await response.json();
        const parsedData = z.object({ reports: z.unknown() }).safeParse(data);
        const parsedReports = parsedData.success
          ? z.array(AdminChatReportSchema).safeParse(parsedData.data.reports)
          : null;
        if (!parsedReports?.success) {
          throw new Error(
            translateText("admin_panel.worker_failed", {
              worker: workerId,
              status: "invalid report data",
            }),
          );
        }
        return parsedReports.data.map((report) => ({ ...report, workerId }));
      }),
    );
    return perWorker.flat().sort((a, b) => b.createdAt - a.createdAt);
  }

  private async kick(gameID: string, clientID: string) {
    const token = sessionStorage.getItem(SESSION_KEY);
    if (!token) {
      this.loggedIn = false;
      this.error = translateText("admin_panel.session_expired");
      return;
    }
    try {
      const overview = this.overviews.find((entry) =>
        entry.games.some((game) => game.gameID === gameID),
      );
      if (!overview)
        throw new Error(translateText("admin_panel.player_not_found"));
      const { base } = await this.apiBase();
      const response = await fetch(
        `${base}/w${overview.workerId}/api/admin/kick`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gameID, clientID }),
        },
      );
      if (response.status === 401) {
        this.signOut();
        throw new Error(translateText("admin_panel.session_expired"));
      }
      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? translateText("admin_panel.player_not_found")
            : translateText("admin_panel.action_failed", {
                status: response.status,
              }),
        );
      }
      await this.refresh();
    } catch (error) {
      this.error =
        error instanceof Error
          ? error.message
          : translateText("admin_panel.action_failed", { status: "?" });
    }
  }

  private filteredPlayers(): {
    game: AdminGame;
    player: AdminPlayer;
    workerId: number;
  }[] {
    const query = this.search.trim().toLocaleLowerCase();
    return this.overviews.flatMap((overview) =>
      overview.games.flatMap((game) =>
        game.players
          .filter(
            (player) =>
              !query ||
              player.username.toLocaleLowerCase().includes(query) ||
              player.clientID.toLocaleLowerCase().includes(query) ||
              game.gameID.toLocaleLowerCase().includes(query),
          )
          .map((player) => ({ game, player, workerId: overview.workerId })),
      ),
    );
  }

  private formatBytes(bytes: number): string {
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private formatUptime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(hours / 24);
    return days > 0
      ? `${days}d ${hours % 24}h`
      : `${hours}h ${Math.floor((seconds % 3600) / 60)}m`;
  }

  private navButton(tab: AdminTab, label: string, icon: string) {
    const selected = this.tab === tab;
    return html`
      <button
        class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition ${selected
          ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-inset ring-indigo-400/20"
          : "text-slate-400 hover:bg-white/5 hover:text-white"}"
        aria-current=${selected ? "page" : "false"}
        @click=${() => (this.tab = tab)}
      >
        <span
          class="grid size-6 place-items-center rounded-md bg-white/5 text-xs"
          >${icon}</span
        >
        <span>${label}</span>
      </button>
    `;
  }

  private renderLogin() {
    return html`
      <style>
        body.admin-panel-open desktop-nav-bar,
        body.admin-panel-open mobile-nav-bar,
        body.admin-panel-open page-footer,
        body.admin-panel-open music-player {
          display: none !important;
        }
        body.admin-panel-open main-layout > main {
          width: 100%;
          max-width: none;
          padding: 0 !important;
        }
        body.admin-panel-open main-layout > main > div {
          width: 100%;
          max-width: none;
          padding: 0 !important;
          overflow: visible;
        }
        body.admin-panel-open main-layout {
          display: block !important;
        }
      </style>
      <main
        class="grid min-h-screen place-items-center bg-[#0b0e14] px-4 text-slate-100"
      >
        <section
          class="w-full max-w-md rounded-2xl border border-white/10 bg-[#111620] p-8 shadow-2xl shadow-black/40"
        >
          <div class="mb-7 flex items-center gap-3">
            <div
              class="grid size-11 place-items-center rounded-xl bg-indigo-500 text-lg font-black text-white"
            >
              O
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300"
              >
                OpenFront
              </p>
              <h1 class="text-xl font-bold">
                ${translateText("admin_panel.login_title")}
              </h1>
            </div>
          </div>
          <p class="mb-6 text-sm leading-6 text-slate-400">
            ${translateText("admin_panel.login_subtitle")}
          </p>
          ${this.error
            ? html`<div
                role="alert"
                class="mb-4 rounded-lg border border-rose-400/30 bg-rose-950/40 px-3 py-2 text-sm text-rose-200"
              >
                ${this.error}
              </div>`
            : ""}
          <form
            class="space-y-4"
            @submit=${(event: SubmitEvent) => void this.login(event)}
          >
            <label class="block space-y-1.5 text-sm">
              <span class="text-slate-300"
                >${translateText("admin_panel.username")}</span
              >
              <input
                class="w-full rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2.5 outline-none transition focus:border-indigo-400"
                autocomplete="username"
                required
                .value=${this.username}
                @input=${(event: InputEvent) =>
                  (this.username = (event.target as HTMLInputElement).value)}
              />
            </label>
            <label class="block space-y-1.5 text-sm">
              <span class="text-slate-300"
                >${translateText("admin_panel.password")}</span
              >
              <input
                class="w-full rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2.5 outline-none transition focus:border-indigo-400"
                type="password"
                autocomplete="current-password"
                required
                .value=${this.password}
                @input=${(event: InputEvent) =>
                  (this.password = (event.target as HTMLInputElement).value)}
              />
            </label>
            <button
              class="mt-2 w-full rounded-lg bg-indigo-500 px-4 py-2.5 font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-wait disabled:opacity-60"
              ?disabled=${this.submitting}
            >
              ${this.submitting
                ? translateText("admin_panel.authenticating")
                : translateText("admin_panel.sign_in")}
            </button>
          </form>
          <p class="mt-6 text-center text-xs text-slate-500">
            ${translateText("admin_panel.secure_session")}
          </p>
        </section>
      </main>
    `;
  }

  private renderUsers() {
    const entries = this.filteredPlayers();
    return html`
      <section
        class="overflow-hidden rounded-xl border border-white/[0.07] bg-[#111620]"
      >
        <header
          class="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4"
        >
          <div>
            <h2 class="font-semibold text-slate-100">
              ${translateText("admin_panel.users")}
            </h2>
            <p class="mt-1 text-xs text-slate-500">
              ${translateText("admin_panel.online_user_count", {
                count: entries.length,
              })}
            </p>
          </div>
          <input
            class="min-w-56 rounded-lg border border-white/10 bg-[#0b0e14] px-3 py-2 text-sm outline-none focus:border-indigo-400"
            type="search"
            .value=${this.search}
            placeholder=${translateText("admin_panel.search")}
            @input=${(event: InputEvent) =>
              (this.search = (event.target as HTMLInputElement).value)}
          />
        </header>
        <div class="overflow-x-auto">
          <table class="w-full min-w-[680px] text-left text-sm">
            <thead
              class="bg-white/[0.025] text-xs uppercase tracking-wider text-slate-500"
            >
              <tr>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.player")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.game")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.status")}
                </th>
                <th class="px-5 py-3 font-medium">
                  ${translateText("admin_panel.platform")}
                </th>
                <th class="px-5 py-3 text-right font-medium">
                  ${translateText("admin_panel.actions")}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.06]">
              ${entries.map(
                ({ game, player }) => html`
                  <tr class="hover:bg-white/[0.025]">
                    <td class="px-5 py-3.5">
                      <div class="font-medium text-slate-200">
                        ${player.username}
                      </div>
                      <div class="mt-1 font-mono text-[11px] text-slate-500">
                        ${player.clientID}
                      </div>
                    </td>
                    <td class="px-5 py-3.5 font-mono text-slate-300">
                      ${game.gameID}
                    </td>
                    <td class="px-5 py-3.5">
                      <span
                        class="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300"
                      >
                        <span
                          class="size-1.5 rounded-full bg-emerald-400"
                        ></span>
                        ${player.spectator
                          ? translateText("admin_panel.spectator")
                          : translateText("admin_panel.in_game")}
                      </span>
                    </td>
                    <td class="px-5 py-3.5 text-slate-400">
                      ${player.platform}
                    </td>
                    <td class="px-5 py-3.5 text-right">
                      <button
                        class="rounded-md border border-rose-400/20 px-2.5 py-1.5 text-xs text-rose-300 transition hover:bg-rose-400/10"
                        @click=${() =>
                          void this.kick(game.gameID, player.clientID)}
                      >
                        ${translateText("admin_panel.kick")}
                      </button>
                    </td>
                  </tr>
                `,
              )}
              ${entries.length === 0
                ? html`<tr>
                    <td
                      colspan="5"
                      class="px-5 py-12 text-center text-slate-500"
                    >
                      ${translateText("admin_panel.no_players")}
                    </td>
                  </tr>`
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  private renderPlaceholder(tab: "bans" | "reports") {
    const isBans = tab === "bans";
    return html`
      <section
        class="rounded-xl border border-white/[0.07] bg-[#111620] p-8 sm:p-10"
      >
        <div class="mx-auto max-w-xl text-center">
          <div
            class="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-indigo-400/10 text-2xl text-indigo-300"
          >
            ${isBans ? "⊘" : "⚑"}
          </div>
          <h2 class="text-xl font-semibold">
            ${translateText(
              isBans ? "admin_panel.bans" : "admin_panel.reports",
            )}
          </h2>
          <p class="mt-3 text-sm leading-6 text-slate-400">
            ${translateText(
              isBans
                ? "admin_panel.ban_integration_note"
                : "admin_panel.reports_future_note",
            )}
          </p>
          <span
            class="mt-5 inline-flex rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-200"
            >${translateText("admin_panel.requires_account_api")}</span
          >
        </div>
      </section>
    `;
  }

  private renderReports() {
    return html`
      <section class="space-y-4">
        <p class="text-xs text-slate-500">
          ${translateText("admin_panel.reports_memory_note")}
        </p>
        ${this.reports.length === 0
          ? html`<div
              class="rounded-xl border border-white/[0.07] bg-[#111620] p-10 text-center text-sm text-slate-400"
            >
              ${translateText("admin_panel.no_reports")}
            </div>`
          : this.reports.map(
              (report) => html`
                <article
                  class="rounded-xl border border-white/[0.07] bg-[#111620] p-5"
                >
                  <header
                    class="flex flex-wrap items-center justify-between gap-2"
                  >
                    <div class="flex flex-wrap items-center gap-2">
                      <span
                        class="rounded-full border border-rose-300/20 bg-rose-300/10 px-2.5 py-1 text-xs font-semibold text-rose-200"
                      >
                        ${translateText(
                          `admin_panel.report_reason_${report.reason}`,
                        )}
                      </span>
                      <span class="text-xs text-slate-500"
                        >Worker ${report.workerId}</span
                      >
                    </div>
                    <time class="text-xs text-slate-500"
                      >${new Date(report.createdAt).toLocaleString()}</time
                    >
                  </header>
                  <div class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                    <p>
                      <span class="text-slate-500"
                        >${translateText("admin_panel.reported_user")}:
                      </span>
                      <strong class="text-slate-200"
                        >${report.reported.username}</strong
                      >
                    </p>
                    <p>
                      <span class="text-slate-500"
                        >${translateText("admin_panel.reporter")}:
                      </span>
                      <strong class="text-slate-200"
                        >${report.reportedBy.username}</strong
                      >
                    </p>
                  </div>
                  <div
                    class="mt-4 rounded-lg border border-white/[0.06] bg-black/20 p-3"
                  >
                    <p class="mb-1 text-[10px] font-semibold text-slate-500">
                      ${translateText("admin_panel.reported_message")}
                    </p>
                    <p
                      class="whitespace-pre-wrap break-words text-sm leading-6 text-slate-200"
                    >
                      ${report.message}
                    </p>
                  </div>
                </article>
              `,
            )}
      </section>
    `;
  }

  private renderDashboard() {
    const players = this.overviews.flatMap((overview) =>
      overview.games.flatMap((game) => game.players),
    );
    const totalGames = this.overviews.reduce(
      (sum, overview) => sum + overview.games.length,
      0,
    );
    const totalMemory = this.overviews.reduce(
      (sum, overview) => sum + overview.memory.rss,
      0,
    );
    const content =
      this.tab === "users"
        ? this.renderUsers()
        : this.tab === "bans"
          ? this.renderPlaceholder("bans")
          : this.tab === "reports"
            ? this.renderReports()
            : html`
                <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  ${this.statCard(
                    translateText("admin_panel.online_users"),
                    `${players.length}`,
                    "●",
                    "text-emerald-300",
                  )}
                  ${this.statCard(
                    translateText("admin_panel.active_games"),
                    `${totalGames}`,
                    "▣",
                    "text-indigo-300",
                  )}
                  ${this.statCard(
                    translateText("admin_panel.memory_rss"),
                    this.formatBytes(totalMemory),
                    "▤",
                    "text-sky-300",
                  )}
                  ${this.statCard(
                    translateText("admin_panel.workers"),
                    `${this.overviews.length} / ${this.overviews[0]?.workerCount ?? 0}`,
                    "⌘",
                    "text-amber-300",
                  )}
                </div>
                <section
                  class="mt-5 rounded-xl border border-white/[0.07] bg-[#111620] p-5"
                >
                  <header class="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h2 class="font-semibold">
                        ${translateText("admin_panel.server_health")}
                      </h2>
                      <p class="mt-1 text-xs text-slate-500">
                        ${translateText("admin_panel.health_subtitle")}
                      </p>
                    </div>
                    <span
                      class="inline-flex items-center gap-2 text-xs text-emerald-300"
                      ><span class="size-1.5 rounded-full bg-emerald-400"></span
                      >${translateText("admin_panel.healthy")}</span
                    >
                  </header>
                  <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    ${this.overviews.map(
                      (overview) => html`
                        <article
                          class="rounded-lg border border-white/[0.06] bg-[#0c1018] p-4"
                        >
                          <h3 class="text-sm font-medium">
                            ${translateText("admin_panel.worker")}
                            ${overview.workerId}
                          </h3>
                          <div class="mt-3 space-y-2 text-xs text-slate-400">
                            <p>
                              ${translateText("admin_panel.uptime")}:
                              <span class="text-slate-200"
                                >${this.formatUptime(
                                  overview.uptimeSeconds,
                                )}</span
                              >
                            </p>
                            <p>
                              ${translateText("admin_panel.worker_memory")}:
                              <span class="text-slate-200"
                                >${this.formatBytes(overview.memory.rss)}</span
                              >
                            </p>
                            <p>
                              ${translateText("admin_panel.load_average")}:
                              <span class="text-slate-200"
                                >${overview.loadAverage
                                  .map((load) => load.toFixed(2))
                                  .join(" / ")}</span
                              >
                            </p>
                          </div>
                        </article>
                      `,
                    )}
                  </div>
                </section>
                <section
                  class="mt-5 rounded-xl border border-white/[0.07] bg-[#111620]"
                >
                  <header
                    class="flex items-center justify-between border-b border-white/[0.07] px-5 py-4"
                  >
                    <h2 class="font-semibold">
                      ${translateText("admin_panel.recent_players")}
                    </h2>
                    <button
                      class="text-xs text-indigo-300 hover:text-indigo-200"
                      @click=${() => (this.tab = "users")}
                    >
                      ${translateText("admin_panel.view_all")}
                    </button>
                  </header>
                  <div class="divide-y divide-white/[0.06]">
                    ${this.filteredPlayers()
                      .slice(0, 6)
                      .map(
                        ({ game, player }) => html`
                          <div
                            class="flex items-center justify-between gap-3 px-5 py-3"
                          >
                            <div class="min-w-0">
                              <p class="truncate text-sm text-slate-200">
                                ${player.username}
                              </p>
                              <p class="mt-1 text-xs text-slate-500">
                                ${translateText("admin_panel.game")}
                                ${game.gameID} · ${player.platform}
                              </p>
                            </div>
                            <button
                              class="shrink-0 rounded-md border border-rose-400/20 px-2.5 py-1.5 text-xs text-rose-300 hover:bg-rose-400/10"
                              @click=${() =>
                                void this.kick(game.gameID, player.clientID)}
                            >
                              ${translateText("admin_panel.kick")}
                            </button>
                          </div>
                        `,
                      )}
                    ${players.length === 0
                      ? html`<p
                          class="px-5 py-10 text-center text-sm text-slate-500"
                        >
                          ${translateText("admin_panel.no_players")}
                        </p>`
                      : ""}
                  </div>
                </section>
              `;

    return html`
      <style>
        body.admin-panel-open desktop-nav-bar,
        body.admin-panel-open mobile-nav-bar,
        body.admin-panel-open page-footer,
        body.admin-panel-open music-player {
          display: none !important;
        }
        body.admin-panel-open main-layout > main {
          width: 100%;
          max-width: none;
          padding: 0 !important;
        }
        body.admin-panel-open main-layout > main > div {
          width: 100%;
          max-width: none;
          padding: 0 !important;
          overflow: visible;
        }
        body.admin-panel-open main-layout {
          display: block !important;
        }
      </style>
      <div class="flex min-h-screen bg-[#0b0e14] text-slate-100">
        <aside
          class="hidden w-60 shrink-0 border-r border-white/[0.07] bg-[#0e121a] px-3 py-5 md:flex md:flex-col"
        >
          <div class="mb-8 flex items-center gap-3 px-2">
            <div
              class="grid size-9 place-items-center rounded-lg bg-indigo-500 font-black"
            >
              O
            </div>
            <div>
              <p class="text-sm font-bold">OpenFront</p>
              <p class="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Control panel
              </p>
            </div>
          </div>
          <p
            class="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600"
          >
            ${translateText("admin_panel.navigation")}
          </p>
          <nav class="space-y-1">
            ${this.navButton(
              "overview",
              translateText("admin_panel.overview"),
              "⌂",
            )}
            ${this.navButton("users", translateText("admin_panel.users"), "♙")}
            ${this.navButton("bans", translateText("admin_panel.bans"), "⊘")}
            ${this.navButton(
              "reports",
              translateText("admin_panel.reports"),
              "⚑",
            )}
          </nav>
          <div
            class="mt-auto rounded-lg border border-white/[0.07] bg-white/[0.02] p-3"
          >
            <div class="flex items-center gap-2 text-xs text-slate-300">
              <span class="size-2 rounded-full bg-emerald-400"></span
              >${translateText("admin_panel.admin_session")}
            </div>
            <button
              class="mt-3 text-xs text-slate-500 hover:text-white"
              @click=${this.signOut}
            >
              ${translateText("admin_panel.sign_out")}
            </button>
          </div>
        </aside>
        <div class="min-w-0 flex-1">
          <header
            class="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-white/[0.07] bg-[#0b0e14]/95 px-4 backdrop-blur sm:px-7"
          >
            <div class="flex items-center gap-3">
              <span
                class="grid size-8 place-items-center rounded-lg bg-indigo-500 font-black md:hidden"
                >O</span
              >
              <div>
                <p class="text-sm font-semibold">
                  ${translateText("admin_panel.title")}
                </p>
                <p class="text-xs text-slate-500">
                  ${translateText("admin_panel.eyebrow")}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="hidden text-xs text-slate-500 sm:inline"
                >${this.lastUpdated
                  ? translateText("admin_panel.last_updated", {
                      time: new Date(this.lastUpdated).toLocaleTimeString(),
                    })
                  : ""}</span
              >
              <button
                class="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 hover:bg-white/5 disabled:opacity-50"
                ?disabled=${this.loading}
                @click=${() => void this.refresh()}
              >
                ${this.loading
                  ? translateText("admin_panel.refreshing")
                  : translateText("admin_panel.refresh")}
              </button>
              <button
                class="text-xs text-slate-400 hover:text-white md:hidden"
                @click=${this.signOut}
              >
                ${translateText("admin_panel.sign_out")}
              </button>
            </div>
          </header>
          <main class="mx-auto max-w-[1500px] p-4 sm:p-7">
            ${this.error
              ? html`<div
                  role="alert"
                  class="mb-5 rounded-lg border border-rose-400/20 bg-rose-950/30 px-4 py-3 text-sm text-rose-200"
                >
                  ${this.error}
                </div>`
              : ""}
            <div class="mb-5">
              <h1 class="text-xl font-semibold">
                ${translateText(`admin_panel.${this.tab}`)}
              </h1>
              <p class="mt-1 text-sm text-slate-500">
                ${translateText("admin_panel.subtitle")}
              </p>
            </div>
            ${content}
            <footer
              class="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600"
            >
              <span
                >OpenFront Admin ·
                ${translateText("admin_panel.internal_use")}</span
              >
              <span
                >${this.overviews.length}
                ${translateText("admin_panel.workers_online")}</span
              >
            </footer>
          </main>
        </div>
      </div>
    `;
  }

  private statCard(title: string, value: string, icon: string, color: string) {
    return html`
      <article class="rounded-xl border border-white/[0.07] bg-[#111620] p-4">
        <div class="flex items-center justify-between">
          <p class="text-xs text-slate-400">${title}</p>
          <span
            class="grid size-8 place-items-center rounded-lg bg-white/[0.04] ${color}"
            >${icon}</span
          >
        </div>
        <p class="mt-3 text-2xl font-semibold tracking-tight">${value}</p>
      </article>
    `;
  }

  render() {
    return this.loggedIn ? this.renderDashboard() : this.renderLogin();
  }
}
