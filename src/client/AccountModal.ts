import { PlayerStatsTree, UserMeResponse } from "@openfront/shared/ApiSchemas";
import { assetUrl } from "@openfront/shared/AssetUrls";
import { html, nothing, TemplateResult } from "lit";
import { customElement, state } from "lit/decorators.js";
import { ClientEnv } from "src/client/ClientEnv";
import { hasLinkedIdentity } from "./AccountIdentity";
import { fetchPlayerById, getUserMe, invalidateUserMe } from "./Api";
import {
  linkGoogle,
  linkSteam,
  isLocalPhoneSignupEnabled,
  LocalAccountLoginUnavailableError,
  LocalPhoneAuthError,
  loginLocalAccount,
  loginLocalAccountByPhone,
  logOut,
  reauthAfterCrazyGamesChange,
  registerLocalAccountByPhone,
  requestLocalPhoneCode,
} from "./Auth";
import "./components/baseComponents/stats/DiscordUserHeader";
import "./components/baseComponents/stats/PlayerGameHistoryView";
import type { PlayerGameHistoryCache } from "./components/baseComponents/stats/PlayerGameHistoryView";
import "./components/baseComponents/stats/PlayerStatsTable";
import "./components/baseComponents/stats/PlayerStatsTree";
import "./components/baseComponents/stats/SteamUserHeader";
import { BaseModal } from "./components/BaseModal";
import "./components/CopyButton";
import "./components/CreatorCodePanel";
import type { CreatorChangedDetail } from "./components/CreatorCodePanel";
import "./components/CurrencyDisplay";
import "./components/Difficulties";
import "./components/FriendsList";
import "./components/RewardsPanel";
import type { RewardsChangedDetail } from "./components/RewardsPanel";
import { googleLinkButton } from "./components/ui/GoogleLinkButton";
import { modalHeader } from "./components/ui/ModalHeader";
import { steamGlyph, steamLinkButton } from "./components/ui/SteamLinkButton";
import { crazyGamesSDK, type CrazyGamesUser } from "./CrazyGamesSDK";
import { desktopLinkGate, isDesktopShell } from "./DesktopShell";
import "./GameStatsModal";
import {
  GLOBAL_CHAT_AUTH_CHANGED_EVENT,
  GLOBAL_CHAT_TEST_SESSION_KEY,
} from "./GlobalChatAuth";
import { showInGameAlert } from "./InGameModal";
import { consumeLinkResult } from "./LinkResult";
import { consumeLoginResult, LoginResult } from "./LoginResult";
import "./PlayerProfileModal";
import { steamSDK } from "./SteamSDK";
import { playerProfileUrl } from "./utilities/PlayerProfileUrl";
import { currentPagePath, showToast, translateText } from "./Utils";

// Each login refusal says its own thing. Sharing one string was fine while
// email_exists was the only recognised result; a player refused because their
// account is pending deletion, or because a Steam OpenID response did not
// verify, must not be told their email is already in use.
const LOGIN_ERROR_KEYS: Record<LoginResult, string> = {
  email_exists: "account_modal.login_email_exists",
  deleted: "account_modal.login_deleted",
  error: "account_modal.login_error",
  no_account: "account_modal.login_no_account",
};

const PHONE_AUTH_TEXT_FA: Record<string, string> = {
  "account_modal.phone_number": "شماره تلفن",
  "account_modal.phone_placeholder": "۹۱۲۳۴۵۶۷۸۹",
  "account_modal.auth_login": "ورود",
  "account_modal.auth_register": "ثبت‌نام",
  "account_modal.auth_phone": "شماره تلفن",
  "account_modal.auth_username": "نام کاربری",
  "account_modal.auth_signing_in": "در حال ورود…",
  "account_modal.auth_password": "رمز عبور",
  "account_modal.auth_code": "کد تأیید پیامک",
  "account_modal.auth_send_code": "ارسال کد",
  "account_modal.auth_code_sent": "کد تأیید برای شماره شما ارسال شد.",
  "account_modal.auth_code_sending": "در حال ارسال…",
  "account_modal.auth_submit_login": "ورود به حساب",
  "account_modal.auth_submit_register": "ساخت حساب",
  "account_modal.auth_phone_rate_limited": "برای ارسال دوباره کد کمی صبر کنید.",
  "account_modal.auth_phone_unavailable":
    "ارسال پیامک موقتاً در دسترس نیست. با مدیر سرور تماس بگیرید.",
  "account_modal.auth_register_failed":
    "ساخت حساب انجام نشد. اطلاعات را بررسی و دوباره تلاش کنید.",
  "account_modal.auth_username_required": "نام کاربری را وارد کنید.",
  "account_modal.auth_password_min": "رمز عبور باید حداقل ۸ نویسه باشد.",
  "account_modal.auth_code_required": "کد تأیید پیامک‌شده را وارد کنید.",
  "account_modal.auth_login_method": "روش ورود",
  "account_modal.auth_login_fields_required":
    "شماره تلفن یا نام کاربری و رمز عبور را کامل کنید.",
  "account_modal.auth_login_failed":
    "نام کاربری یا رمز عبور نادرست است، یا این حساب مسدود شده است.",
  "account_modal.auth_local_login_unavailable":
    "ورود حساب‌های محلی روی سرور تنظیم نشده است. با مدیر سرور تماس بگیرید.",
  "account_modal.auth_test_login_success": "با حساب {username} وارد شدی.",
  "account_modal.auth_phone_invalid":
    "شماره را بدون +98 و با ۱۰ رقم وارد کنید؛ شماره باید با 9 شروع شود.",
  "account_modal.auth_password_required": "رمز عبور را وارد کنید.",
};

function phoneAuthText(key: string): string {
  const translated = translateText(key);
  if (document.documentElement.dir === "rtl" && PHONE_AUTH_TEXT_FA[key]) {
    return PHONE_AUTH_TEXT_FA[key];
  }
  return translated === key ? (PHONE_AUTH_TEXT_FA[key] ?? key) : translated;
}

function phoneAuthErrorKey(
  status: number,
  purpose: "login" | "register",
): string {
  if (status === 429) return "account_modal.auth_phone_rate_limited";
  if (status === 503) return "account_modal.auth_phone_unavailable";
  return purpose === "login"
    ? "account_modal.auth_login_failed"
    : "account_modal.auth_register_failed";
}

@customElement("account-modal")
export class AccountModal extends BaseModal {
  protected routerName = "account";

  @state() private phoneNumber = "";
  @state() private username = "";
  @state() private password = "";
  @state() private verificationCode = "";
  @state() private authMode: "login" | "register" = "login";
  @state() private phoneSignupEnabled = false;
  @state() private loginMethod: "phone" | "username" = "username";
  @state() private authSubmitting = false;
  @state() private isLoadingUser: boolean = false;
  // Set on CrazyGames when a CrazyGames user is signed in. Their identity comes
  // from the SDK, not our backend user object.
  @state() private crazyGamesUser: CrazyGamesUser | null = null;
  // One-shot outcome of a rejected sign-in, read from the `login=` router
  // arg on open. Reassigned on every open, so reopening clears it.
  @state() private loginError: LoginResult | undefined;
  // One-shot prefill for the creator-code panel's unbound-state input, read
  // from the `creatorCode=` router arg (a `/c/CODE` share-link visit).
  // Reassigned on every open, same as loginError above.
  @state() private prefillCreatorCode: string | undefined;

  private userMeResponse: UserMeResponse | null = null;
  private statsTree: PlayerStatsTree | null = null;
  // Preserves the Games tab's accumulated list + cursor across tab switches.
  private gameHistoryCache: PlayerGameHistoryCache | null = null;
  private gamesScrollTop = 0;
  private restoreGamesScrollAfterOpen = false;

  constructor() {
    super();

    document.addEventListener("userMeResponse", (event: Event) => {
      // A CrazyGames sign-in fires userMeResponse (via Main's auth listener);
      // re-fetch the SDK profile so the modal leaves the sign-in screen.
      this.refreshCrazyGamesUser();
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        const previousPublicId = this.userMeResponse?.player?.publicId;
        this.userMeResponse = customEvent.detail as UserMeResponse;
        // Reset whenever the player identity changes (login, or switching to a
        // different account) so stats/history from the previous player don't
        // linger.
        if (this.userMeResponse?.player?.publicId !== previousPublicId) {
          this.resetPlayerData();
          this.requestUpdate();
        }
      } else {
        this.resetPlayerData();
        this.requestUpdate();
      }
    });
  }

  // Refresh the signed-in CrazyGames identity from the SDK. No-op off
  // CrazyGames; drives isLinkedAccount() so the modal shows the profile.
  private refreshCrazyGamesUser() {
    if (!crazyGamesSDK.isOnCrazyGames()) return;
    void crazyGamesSDK.getUserProfile().then((user) => {
      this.crazyGamesUser = user;
      this.requestUpdate();
    });
  }

  private hasAnyStats(): boolean {
    if (!this.statsTree) return false;
    // Check if statsTree has any data
    return (
      Object.keys(this.statsTree).length > 0 &&
      Object.values(this.statsTree).some(
        (gameTypeStats) =>
          gameTypeStats && Object.keys(gameTypeStats).length > 0,
      )
    );
  }

  protected renderHeaderSlot() {
    const isLoggedIn = !!this.userMeResponse?.user;
    const publicId = this.userMeResponse?.player?.publicId ?? "";
    return modalHeader({
      title: translateText("account_modal.title"),
      onBack: () => this.close(),
      ariaLabel: translateText("common.back"),
      rightContent:
        isLoggedIn && !this.isLoadingUser && publicId
          ? html`
              <copy-button
                class="shrink-0"
                .copyText=${playerProfileUrl(publicId)}
                .displayText=${translateText("player_profile.share")}
                .showVisibilityToggle=${false}
              ></copy-button>
            `
          : undefined,
    });
  }

  private isLinkedAccount(): boolean {
    // The CrazyGames identity only counts once the backend token exchange
    // produced a session — otherwise a failed exchange would show a dead
    // "connected as" view with no way to retry.
    return (
      hasLinkedIdentity(this.userMeResponse?.user) ||
      (!!this.crazyGamesUser && this.userMeResponse !== null)
    );
  }

  protected modalConfig() {
    if (this.isLoadingUser || !this.isLinkedAccount()) {
      return {};
    }
    return {
      tabs: [
        { key: "account", label: translateText("account_modal.tab_account") },
        { key: "stats", label: translateText("account_modal.tab_stats") },
        { key: "games", label: translateText("account_modal.tab_games") },
        { key: "friends", label: translateText("account_modal.tab_friends") },
      ],
    };
  }

  protected renderBody(tab: string) {
    if (this.isLoadingUser) {
      return this.renderLoadingSpinner(
        translateText("account_modal.fetching_account"),
      );
    }
    if (!this.isLinkedAccount()) {
      return html`<div class="custom-scrollbar mr-1">
        ${crazyGamesSDK.isOnCrazyGames()
          ? this.renderCrazyGamesSignIn()
          : this.renderLoginOptions()}
      </div>`;
    }
    return html`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(tab)}</div>
      </div>
    `;
  }

  private renderTab(tab: string): TemplateResult {
    switch (tab) {
      case "stats":
        return this.renderStatsTab();
      case "games":
        return this.renderGamesTab();
      case "friends":
        return this.renderFriendsTab();
      default:
        return this.renderAccountTab();
    }
  }

  private renderPhoneField(): TemplateResult {
    return html`
      <div
        class="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition focus-within:border-amber-300/50 focus-within:ring-2 focus-within:ring-amber-300/10"
        dir="ltr"
      >
        <span
          class="border-r border-white/10 px-4 py-4 text-sm font-bold text-amber-200"
          >+98</span
        >
        <input
          type="tel"
          inputmode="numeric"
          autocomplete="tel-national"
          maxlength="10"
          .value=${this.phoneNumber}
          @input=${this.handlePhoneInput}
          placeholder=${phoneAuthText("account_modal.phone_placeholder")}
          aria-label=${phoneAuthText("account_modal.phone_number")}
          class="min-w-0 flex-1 bg-transparent px-4 py-4 text-left text-sm font-medium text-white outline-none placeholder:text-white/25"
        />
      </div>
    `;
  }

  private renderPhoneCodeField(): TemplateResult {
    return html`
      <div class="flex gap-2">
        <input
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          maxlength="6"
          .value=${this.verificationCode}
          @input=${(event: InputEvent) => {
            this.verificationCode = (event.target as HTMLInputElement).value
              .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
              .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
              .replace(/\D/g, "")
              .slice(0, 6);
          }}
          placeholder=${phoneAuthText("account_modal.auth_code")}
          aria-label=${phoneAuthText("account_modal.auth_code")}
          class="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
        />
        <button
          type="button"
          ?disabled=${this.authSubmitting}
          class="shrink-0 rounded-xl border border-amber-200/25 bg-amber-200/[.08] px-3 text-xs font-bold text-amber-100 transition hover:bg-amber-200/[.14] disabled:cursor-wait disabled:opacity-50"
          @click=${() => void this.handleRequestPhoneCode()}
        >
          ${this.authSubmitting
            ? phoneAuthText("account_modal.auth_code_sending")
            : phoneAuthText("account_modal.auth_send_code")}
        </button>
      </div>
    `;
  }

  private renderPasswordField(): TemplateResult {
    return html`<input
      type="password"
      autocomplete=${this.authMode === "login"
        ? "current-password"
        : "new-password"}
      .value=${this.password}
      @input=${(event: InputEvent) => {
        this.password = (event.target as HTMLInputElement).value;
      }}
      placeholder=${phoneAuthText("account_modal.auth_password")}
      aria-label=${phoneAuthText("account_modal.auth_password")}
      class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
    />`;
  }

  private renderAuthModeToggle() {
    return html`<div
      class="grid ${this.phoneSignupEnabled ? "grid-cols-2" : "grid-cols-1"} gap-1 rounded-xl border border-white/10 bg-black/20 p-1"
      role="tablist"
      aria-label=${phoneAuthText("account_modal.auth_login_method")}
    >
      <button
        type="button"
        role="tab"
        aria-selected=${this.authMode === "login"}
        class="rounded-lg px-3 py-2.5 text-sm font-bold transition ${this
          .authMode === "login"
          ? "bg-amber-300/15 text-amber-100"
          : "text-white/50 hover:text-white"}"
        @click=${() => (this.authMode = "login")}
      >
        ${phoneAuthText("account_modal.auth_login")}
      </button>
      ${this.phoneSignupEnabled
        ? html`<button
            type="button"
            role="tab"
            aria-selected=${this.authMode === "register"}
            class="rounded-lg px-3 py-2.5 text-sm font-bold transition ${this
              .authMode === "register"
              ? "bg-amber-300/15 text-amber-100"
              : "text-white/50 hover:text-white"}"
            @click=${() => (this.authMode = "register")}
          >
            ${phoneAuthText("account_modal.auth_register")}
          </button>`
        : nothing}
    </div>`;
  }

  private renderFriendsTab(): TemplateResult {
    const myPublicId = this.userMeResponse?.player?.publicId ?? "";
    return html`<friends-list
      .myPublicId=${myPublicId}
      @view-profile=${(e: CustomEvent<{ publicId: string }>) =>
        this.openPlayerProfile(e.detail.publicId)}
    ></friends-list>`;
  }

  private openPlayerProfile(publicId: string): void {
    const profileModal = document.querySelector<
      HTMLElement & { openFromAccount(publicId: string): void }
    >("player-profile-modal");
    profileModal?.openFromAccount(publicId);
  }

  public returnToFriends(): void {
    this.open({ tab: "friends" });
  }

  private renderAccountTab(): TemplateResult {
    if (this.crazyGamesUser) {
      return this.renderCrazyGamesAccount(this.crazyGamesUser);
    }
    return html`
      <div class="flex flex-col gap-6">
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${translateText("account_modal.connected_as")}
            </div>
            <div class="flex items-center gap-8 justify-center flex-wrap">
              <discord-user-header
                .data=${this.userMeResponse?.user?.discord ?? null}
              ></discord-user-header>
              ${this.userMeResponse?.user?.steam
                ? html`<steam-user-header
                    .data=${this.userMeResponse.user.steam}
                  ></steam-user-header>`
                : null}
              ${this.renderLoggedInAs()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()} ${this.renderCreatorCodePanel()}
        ${this.renderDesktopLinkGateAction()}
      </div>
    `;
  }

  // Re-entry to the desktop shell's account-linking gate shown at first
  // launch. Absent entirely on plain web (no window.openfrontDesktop there),
  // present whenever the desktop bridge exposes a callable showLinkGate —
  // see desktopLinkGate() in DesktopShell.ts for why the guard is scoped
  // that way. Needed because the desktop app's menu bar will eventually be
  // hidden and the game runs fullscreen borderless, so a dismissed or
  // since-linked player needs another way back to that gate.
  private renderDesktopLinkGateAction(): TemplateResult | typeof nothing {
    if (desktopLinkGate() === null) return nothing;
    return html`
      <o-button
        variant="secondary"
        width="block"
        size="md"
        translationKey="account_modal.link_existing_account"
        @click=${this.handleShowLinkGate}
      ></o-button>
    `;
  }

  private handleShowLinkGate(): void {
    // The bare `void` form swallowed a rejection into an unhandled promise.
    // This is an IPC round trip to the Electron main process, so it can
    // genuinely reject (no window, a main-process throw); catching keeps the
    // failure visible in the console instead of surfacing as a button that
    // silently does nothing.
    desktopLinkGate()
      ?.showLinkGate()
      .catch((err) => {
        console.error("AccountModal: showLinkGate failed", err);
      });
  }

  // CrazyGames "connected as" view: avatar + username from the SDK, plus
  // currency/subscription. No Discord/Google/email link or logout (CrazyGames
  // owns the account and its logout).
  private renderCrazyGamesAccount(user: CrazyGamesUser): TemplateResult {
    return html`
      <div class="flex flex-col gap-6">
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${translateText("account_modal.connected_as")}
            </div>
            <div class="flex flex-col items-center gap-3">
              <img
                src=${user.profilePictureUrl}
                alt=${user.username}
                class="w-16 h-16 rounded-full object-cover"
                referrerpolicy="no-referrer"
              />
              <div class="text-white text-lg font-medium">${user.username}</div>
              ${this.renderCurrency()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()}
      </div>
    `;
  }

  // Shown when a CrazyGames guest opens the modal: hand off to CrazyGames' own
  // sign-in prompt (no Discord/Google/email on CrazyGames).
  private renderCrazyGamesSignIn(): TemplateResult {
    return html`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/50 text-sm font-medium mb-6">
            ${translateText("account_modal.sign_in_desc")}
          </p>
          <o-button
            variant="primary"
            width="block"
            size="md"
            translationKey="main.sign_in"
            @click=${this.handleCrazyGamesSignIn}
          ></o-button>
        </div>
      </div>
    `;
  }

  private renderStatsTab(): TemplateResult {
    if (!this.hasAnyStats()) {
      return this.renderEmptyState(
        "📊",
        translateText("account_modal.no_stats"),
      );
    }
    return html`
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `;
  }

  private renderGamesTab(): TemplateResult {
    const publicId = this.userMeResponse?.player?.publicId ?? "";
    if (!publicId) {
      return this.renderEmptyState(
        "🎮",
        translateText("account_modal.no_games"),
      );
    }
    return html`
      <player-game-history-view
        .publicId=${publicId}
        .cachedState=${this.gameHistoryCache?.publicId === publicId
          ? this.gameHistoryCache
          : null}
        @history-updated=${(e: CustomEvent<PlayerGameHistoryCache>) => {
          this.gameHistoryCache = e.detail;
        }}
        @view-stats=${(e: CustomEvent<{ gameId: string }>) =>
          this.openGameStats(e.detail.gameId)}
        @view-game=${(e: CustomEvent<{ gameId: string }>) =>
          void this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `;
  }

  private renderEmptyState(icon: string, message: string): TemplateResult {
    return html`
      <div
        class="bg-white/5 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
      >
        <div class="text-4xl mb-3">${icon}</div>
        <p class="text-white/60 text-sm">${message}</p>
      </div>
    `;
  }

  private renderRewardsPanel(): TemplateResult | "" {
    const rewards = this.userMeResponse?.player?.rewards ?? [];
    if (rewards.length === 0) return "";
    return html`<rewards-panel
      .rewards=${rewards}
      @rewards-changed=${this.handleRewardsChanged}
    ></rewards-panel>`;
  }

  // Not rendered on the CrazyGames account branch (renderCrazyGamesAccount) —
  // CrazyGames identity comes from the SDK, not the /users/@me `player`
  // record this panel reads its state from.
  private renderCreatorCodePanel(): TemplateResult {
    return html`<creator-code-panel
      .creator=${this.userMeResponse?.player?.creator}
      .prefillCode=${this.prefillCreatorCode}
      @creator-changed=${this.handleCreatorChanged}
    ></creator-code-panel>`;
  }

  // A claim moved unclaimed rewards into the balances; both were returned by
  // the claim endpoint, so update in place instead of re-fetching /users/@me.
  private handleRewardsChanged = (
    event: CustomEvent<RewardsChangedDetail>,
  ): void => {
    if (!this.userMeResponse) return;
    this.userMeResponse.player.rewards = event.detail.rewards;
    if (event.detail.currency) {
      this.userMeResponse.player.currency = event.detail.currency;
    }
    this.requestUpdate();
  };

  // The panel already re-fetched /users/@me itself (its mutating calls
  // invalidate the cache) after a successful set/switch/unsupport — patch the
  // fresh creator field into our own cached copy in place, same idiom as
  // handleRewardsChanged above, rather than reloading the page.
  private handleCreatorChanged = (
    event: CustomEvent<CreatorChangedDetail>,
  ): void => {
    if (!this.userMeResponse) return;
    this.userMeResponse.player.creator = event.detail.creator;
    // One-shot: a share-link prefill must not reappear in the input after the
    // player has bound or unbound a creator in this session.
    this.prefillCreatorCode = undefined;
    this.requestUpdate();
  };

  private renderCurrency(): TemplateResult {
    const currency = this.userMeResponse?.player?.currency;
    if (!currency) return html``;

    return html`
      <currency-display
        .hard=${currency.hard}
        .soft=${currency.soft}
      ></currency-display>
    `;
  }

  private renderLoggedInAs(): TemplateResult {
    const me = this.userMeResponse?.user;
    if (me?.discord) {
      return html`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `;
    } else if (me?.google) {
      return html`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${translateText("account_modal.linked_account", {
              account_name: me.google.email,
            })}
          </div>
          ${this.renderCurrency()} ${this.renderSteamLink()}
        </div>
      `;
    } else if (me?.email) {
      return html`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${translateText("account_modal.linked_account", {
              account_name: me.email,
            })}
          </div>
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `;
    } else if (me?.steam) {
      // Steam is the primary login and v1 does not support linking a second
      // identity or unlinking Steam itself, so no Discord/Google CTA here —
      // just the currency balance and (session) logout.
      return html`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()}
        </div>
      `;
    }
    return html``;
  }

  // Show the Google link state: a confirmation line when a Google account is
  // already linked, otherwise the button to link one.
  private renderGoogleLink(): TemplateResult {
    const google = this.userMeResponse?.user?.google;
    if (google) {
      const label = google.email
        ? translateText("account_modal.linked_to_google_email", {
            email: google.email,
          })
        : translateText("account_modal.linked_to_google");
      return html`
        <div class="flex items-center gap-2 text-white/70 text-sm">
          <img
            src=${assetUrl("images/GoogleLogo.svg")}
            alt=${translateText("account_modal.google_alt")}
            class="w-4 h-4"
          />
          <span>${label}</span>
        </div>
      `;
    }
    return this.renderLinkGoogleButton();
  }

  // Shown when logged in without a Google identity yet. Lets the user attach
  // Google to their existing account (we never auto-merge by email).
  private renderLinkGoogleButton(): TemplateResult {
    if (this.userMeResponse?.user?.google) return html``;
    return googleLinkButton(
      this.handleLinkGoogle,
      // The shell sends the player to the website for this (see linkGoogle
      // in Auth.ts); the caption has to say so.
      isDesktopShell()
        ? "account_modal.link_google_on_web"
        : "account_modal.link_google",
    );
  }

  // Steam link state (OPE-115): the linked account when there is one,
  // otherwise the button to link one.
  //
  // NOTE THE ASYMMETRY WITH GOOGLE, WHICH IS DELIBERATE: there is no unlink
  // control here, and there is a permanence warning on the button. Steam
  // recommends that users cannot self-unlink Steam from an external account,
  // so this is a one-way change that only support can reverse — the warning
  // has to be readable BEFORE the click, because afterwards the link exists.
  //
  // Not shown inside the desktop shell: a shell player already holds this
  // identity through the native Steam ticket.
  private renderSteamLink(): TemplateResult {
    if (isDesktopShell()) return html``;
    const steam = this.userMeResponse?.user?.steam;
    if (steam) {
      // The attached account is NAMED, not merely reported as linked: a wrong
      // link — the player's browser was signed into someone else's Steam when
      // they clicked — cannot be undone by them, so noticing it immediately is
      // the difference between a quick support fix and a permanent one.
      // Steam's own consent page is the first defence; this is the second.
      //
      // The persona and avatar come from the <steam-user-header> that
      // renderAccountTab already renders whenever user.steam is set, for every
      // branch including Steam-primary. Rendering a second one here showed it
      // TWICE to exactly the players this row is for — anyone Discord-,
      // Google- or email-primary with Steam linked.
      return html`
        <div class="flex flex-col items-center gap-1">
          <div class="flex items-center gap-2 text-white/70 text-sm">
            ${steamGlyph("w-4 h-4 shrink-0")}
            <span>${translateText("account_modal.linked_to_steam")}</span>
          </div>
          <span class="text-white/40 text-xs text-center">
            ${translateText("account_modal.link_steam_permanent")}
          </span>
        </div>
      `;
    }
    return html`
      <div class="w-full flex flex-col gap-1">
        ${steamLinkButton(this.handleLinkSteam)}
        <span class="text-white/40 text-xs text-center">
          ${translateText("account_modal.link_steam_permanent")}
        </span>
      </div>
    `;
  }

  private handleLinkSteam = async (): Promise<void> => {
    // On success linkSteam navigates to Steam; the result comes back as a
    // `link=...` router arg handled by consumeLinkResult. A false return means
    // we couldn't start it.
    const started = await linkSteam();
    if (!started) {
      await showInGameAlert(translateText("account_modal.link_steam_failed"));
    }
  };

  private async viewGame(gameId: string): Promise<void> {
    this.close();
    const encodedGameId = encodeURIComponent(gameId);
    const newUrl = currentPagePath(ClientEnv.gamePath(gameId));

    history.pushState({ join: gameId }, "", newUrl);
    window.dispatchEvent(
      new CustomEvent("join-changed", { detail: { gameId: encodedGameId } }),
    );
  }

  private openGameStats(gameId: string): void {
    this.gamesScrollTop = this.modalEl?.getScrollTop() ?? 0;
    const statsModal = document.querySelector<
      HTMLElement & { openFromAccount(gameId: string): void }
    >("game-stats-modal");
    statsModal?.openFromAccount(gameId);
  }

  public returnToGames(): void {
    this.restoreGamesScrollAfterOpen = true;
    this.open({ tab: "games" });
  }

  private async restoreGamesScroll(): Promise<void> {
    await this.updateComplete;
    await this.modalEl?.updateComplete;
    const historyView = this.querySelector<
      HTMLElement & { updateComplete?: Promise<boolean> }
    >("player-game-history-view");
    await historyView?.updateComplete;
    this.modalEl?.setScrollTop(this.gamesScrollTop);
  }

  private finishLoadingUser(): void {
    this.isLoadingUser = false;
    this.requestUpdate();
    if (this.restoreGamesScrollAfterOpen) {
      this.restoreGamesScrollAfterOpen = false;
      void this.restoreGamesScroll();
    }
  }

  private resetPlayerData(): void {
    this.statsTree = null;
    this.gameHistoryCache = null;
    this.gamesScrollTop = 0;
    this.restoreGamesScrollAfterOpen = false;
  }

  // Shown when a sign-in was rejected because the provider's verified email
  // already belongs to an account. We deliberately don't name which provider
  // that account uses — the visitor has only proven control of the email.
  private renderLoginError(): TemplateResult {
    if (this.loginError === undefined) return html``;
    return html`
      <div
        class="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
      >
        <span class="text-red-400 text-lg leading-none" aria-hidden="true">
          &#9888;
        </span>
        <p class="flex-1 text-sm text-red-200">
          ${translateText(LOGIN_ERROR_KEYS[this.loginError])}
        </p>
        <button
          class="text-red-200/60 hover:text-red-200 text-lg leading-none"
          aria-label=${translateText("common.close")}
          @click=${() => (this.loginError = undefined)}
        >
          &times;
        </button>
      </div>
    `;
  }

  private renderLoginOptions() {
    return html`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8"
        >
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-inner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
            <p class="text-white/50 text-sm font-medium">
              ${translateText("account_modal.sign_in_desc")}
            </p>
            ${this.renderCurrency()}
          </div>

          ${this.renderLoginError()}

          <div class="space-y-4">
            ${this.renderAuthModeToggle()}
            ${this.authMode === "login"
              ? html`
                  <div
                    class="flex gap-2 text-xs"
                    role="group"
                    aria-label=${phoneAuthText(
                      "account_modal.auth_login_method",
                    )}
                  >
                    <button
                      type="button"
                      class="rounded-lg px-3 py-2 transition ${this
                        .loginMethod === "phone"
                        ? "bg-white/10 text-amber-100"
                        : "text-white/45 hover:text-white"}"
                      aria-pressed=${this.loginMethod === "phone"}
                      @click=${() => (this.loginMethod = "phone")}
                    >
                      ${phoneAuthText("account_modal.auth_phone")}
                    </button>
                    <button
                      type="button"
                      class="rounded-lg px-3 py-2 transition ${this
                        .loginMethod === "username"
                        ? "bg-white/10 text-amber-100"
                        : "text-white/45 hover:text-white"}"
                      aria-pressed=${this.loginMethod === "username"}
                      @click=${() => (this.loginMethod = "username")}
                    >
                      ${phoneAuthText("account_modal.auth_username")}
                    </button>
                  </div>
                  ${this.loginMethod === "phone"
                    ? html`${this.renderPhoneField()}${this.renderPhoneCodeField()}`
                    : html`<input
                        type="text"
                        autocomplete="username"
                        .value=${this.username}
                        @input=${(event: InputEvent) => {
                          this.username = (
                            event.target as HTMLInputElement
                          ).value;
                        }}
                        placeholder=${phoneAuthText(
                          "account_modal.auth_username",
                        )}
                        aria-label=${phoneAuthText(
                          "account_modal.auth_username",
                        )}
                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
                      />`}
                  ${this.loginMethod === "username"
                    ? this.renderPasswordField()
                    : nothing}
                  <button
                    type="button"
                    ?disabled=${this.authSubmitting}
                    class="w-full rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-3.5 text-sm font-black text-zinc-950 transition hover:from-amber-100 hover:to-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
                    @click=${() => void this.handleLogin()}
                  >
                    ${this.authSubmitting
                      ? phoneAuthText("account_modal.auth_signing_in")
                      : phoneAuthText("account_modal.auth_submit_login")}
                  </button>
                `
              : html`
                  ${this.renderPhoneField()}
                  <input
                    type="text"
                    autocomplete="username"
                    .value=${this.username}
                    @input=${(event: InputEvent) => {
                      this.username = (event.target as HTMLInputElement).value;
                    }}
                    placeholder=${phoneAuthText("account_modal.auth_username")}
                    aria-label=${phoneAuthText("account_modal.auth_username")}
                    class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
                  />
                  ${this.renderPhoneCodeField()} ${this.renderPasswordField()}
                  <button
                    type="button"
                    ?disabled=${this.authSubmitting}
                    class="w-full rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-3.5 text-sm font-black text-zinc-950 transition hover:from-amber-100 hover:to-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
                    @click=${() => void this.handleRegister()}
                  >
                    ${this.authSubmitting
                      ? phoneAuthText("account_modal.auth_signing_in")
                      : phoneAuthText("account_modal.auth_submit_register")}
                  </button>
                `}
          </div>

          <!-- Not on Steam: the Steam ticket re-creates the session on reload. -->
          ${steamSDK.isOnSteam()
            ? nothing
            : html`<div class="mt-8 text-center border-t border-white/10 pt-6">
                <button
                  @click="${this.handleLogout}"
                  class="text-[10px] font-bold text-white/20 hover:text-red-400 transition-colors uppercase tracking-widest pb-0.5"
                >
                  ${translateText("account_modal.clear_session")}
                </button>
              </div>`}
        </div>
      </div>
    `;
  }

  private handlePhoneInput(event: InputEvent) {
    const target = event.target as HTMLInputElement;
    const normalizedDigits = target.value
      .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
      .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
      .replace(/\D/g, "")
      .slice(0, 10);
    this.phoneNumber = normalizedDigits;
  }

  private async handleLogin() {
    const phoneLogin = this.loginMethod === "phone";
    const hasIdentifier = phoneLogin
      ? /^9\d{9}$/.test(this.phoneNumber)
      : this.username.trim().length > 0;
    if (!hasIdentifier || (!phoneLogin && this.password.length === 0)) {
      await showInGameAlert(
        phoneAuthText("account_modal.auth_login_fields_required"),
      );
      return;
    }
    if (phoneLogin && this.verificationCode.length !== 6) {
      await showInGameAlert(phoneAuthText("account_modal.auth_code_required"));
      return;
    }

    this.authSubmitting = true;
    try {
      const profile = phoneLogin
        ? await loginLocalAccountByPhone(
            this.phoneNumber,
            this.verificationCode,
          )
        : await loginLocalAccount(this.username.trim(), this.password);
      invalidateUserMe();
      this.userMeResponse = profile;
      showToast(
        translateText("account_modal.auth_test_login_success", {
          username:
            profile.player.username ??
            (phoneLogin ? this.phoneNumber : this.username.trim()),
        }),
        "green",
      );
      this.close();
    } catch (error) {
      const errorKey =
        error instanceof LocalPhoneAuthError
          ? phoneAuthErrorKey(error.status, "login")
          : error instanceof LocalAccountLoginUnavailableError
            ? "account_modal.auth_local_login_unavailable"
            : "account_modal.auth_login_failed";
      await showInGameAlert(phoneAuthText(errorKey));
    } finally {
      this.authSubmitting = false;
    }
  }

  private async handleRequestPhoneCode() {
    if (!/^9\d{9}$/.test(this.phoneNumber)) {
      await showInGameAlert(phoneAuthText("account_modal.auth_phone_invalid"));
      return;
    }
    this.authSubmitting = true;
    try {
      await requestLocalPhoneCode(this.phoneNumber, this.authMode);
      showToast(phoneAuthText("account_modal.auth_code_sent"), "green");
    } catch (error) {
      const errorKey =
        error instanceof LocalPhoneAuthError
          ? phoneAuthErrorKey(error.status, this.authMode)
          : "account_modal.auth_phone_unavailable";
      await showInGameAlert(phoneAuthText(errorKey));
    } finally {
      this.authSubmitting = false;
    }
  }

  private async handleRegister() {
    if (!/^9\d{9}$/.test(this.phoneNumber)) {
      await showInGameAlert(phoneAuthText("account_modal.auth_phone_invalid"));
      return;
    }
    if (this.verificationCode.length !== 6) {
      await showInGameAlert(phoneAuthText("account_modal.auth_code_required"));
      return;
    }
    if (this.username.trim().length === 0) {
      await showInGameAlert(
        phoneAuthText("account_modal.auth_username_required"),
      );
      return;
    }
    if (this.password.length < 8) {
      await showInGameAlert(phoneAuthText("account_modal.auth_password_min"));
      return;
    }
    this.authSubmitting = true;
    try {
      const profile = await registerLocalAccountByPhone(
        this.phoneNumber,
        this.verificationCode,
        this.username.trim(),
        this.password,
      );
      invalidateUserMe();
      this.userMeResponse = profile;
      showToast(
        translateText("account_modal.auth_test_login_success", {
          username: profile.player.username ?? this.username.trim(),
        }),
        "green",
      );
      this.close();
    } catch (error) {
      const errorKey =
        error instanceof LocalPhoneAuthError
          ? phoneAuthErrorKey(error.status, "register")
          : "account_modal.auth_register_failed";
      await showInGameAlert(phoneAuthText(errorKey));
    } finally {
      this.authSubmitting = false;
    }
  }

  // CrazyGames sign-in: after their prompt completes, exchange the new token
  // for a session and refresh the modal so it shows the signed-in profile.
  private async handleCrazyGamesSignIn() {
    await crazyGamesSDK.showAuthPrompt();
    const profile = await crazyGamesSDK.getUserProfile();
    if (!profile) return; // prompt cancelled / still not signed in
    invalidateUserMe();
    await reauthAfterCrazyGamesChange();
    const userMe = await getUserMe();
    if (userMe) this.userMeResponse = userMe;
    this.crazyGamesUser = profile;
    this.requestUpdate();
  }

  private handleLinkGoogle = async (): Promise<void> => {
    // On success linkGoogle navigates to Google; the result comes back as a
    // `link=...` router arg handled by consumeLinkResult. A false return
    // means we couldn't start it.
    const started = await linkGoogle();
    if (!started) {
      await showInGameAlert(translateText("account_modal.link_google_failed"));
    }
  };

  // Reads the one-shot `creatorCode=` router arg and strips it from the URL,
  // same idiom as consumeLoginResult above — a refresh or re-open must not
  // replay a stale prefill into the (by-then possibly bound) panel.
  private consumeCreatorCodeArg(
    args?: Record<string, unknown>,
  ): string | undefined {
    const code =
      typeof args?.creatorCode === "string" ? args.creatorCode : undefined;
    // Empty string counts as absent, same as undefined: a bare
    // `creatorCode=` in the hash (or an upstream edge case that resolves to
    // "") must never reach the panel as a prefill -- normalizeCreatorCodeInput
    // would reject it as too short and the panel would show a spurious
    // "invalid code" error for a player who never actually had one.
    if (!code) return undefined;

    const params = new URLSearchParams(window.location.hash.slice(1));
    params.delete("creatorCode");
    const rest = params.toString();
    history.replaceState(
      null,
      "",
      rest ? `#${rest}` : window.location.pathname + window.location.search,
    );

    return code;
  }

  protected onOpen(args?: Record<string, unknown>): void {
    this.isLoadingUser = true;
    consumeLinkResult(args);
    this.loginError = consumeLoginResult(args);
    this.prefillCreatorCode = this.consumeCreatorCodeArg(args);

    this.refreshCrazyGamesUser();
    void isLocalPhoneSignupEnabled()
      .then((enabled) => {
        this.phoneSignupEnabled = enabled;
        if (!enabled) this.authMode = "login";
      })
      .catch((error: unknown) => {
        console.warn("Failed to fetch local account options:", error);
        this.phoneSignupEnabled = false;
        this.authMode = "login";
      });

    void getUserMe()
      .then((userMe) => {
        if (userMe) {
          this.userMeResponse = userMe;
          if (this.userMeResponse?.player?.publicId) {
            this.loadPlayerProfile(this.userMeResponse.player.publicId);
          }
        }
        this.finishLoadingUser();
      })
      .catch((err) => {
        console.warn("Failed to fetch user info in AccountModal.open():", err);
        this.finishLoadingUser();
      });
    this.requestUpdate();
  }

  protected onClose(): void {
    this.dispatchEvent(
      new CustomEvent("close", { bubbles: true, composed: true }),
    );
  }

  private async handleLogout() {
    localStorage.removeItem(GLOBAL_CHAT_TEST_SESSION_KEY);
    sessionStorage.removeItem(GLOBAL_CHAT_TEST_SESSION_KEY);
    window.dispatchEvent(new Event(GLOBAL_CHAT_AUTH_CHANGED_EVENT));
    await logOut();
    this.close();
    // Refresh the page after logout to update the UI state
    window.location.reload();
  }

  private async loadPlayerProfile(publicId: string): Promise<void> {
    try {
      const data = await fetchPlayerById(publicId);
      if (!data) {
        this.requestUpdate();
        return;
      }

      this.statsTree = data.stats;

      this.requestUpdate();
    } catch (err) {
      console.warn("Failed to load player data:", err);
      this.requestUpdate();
    }
  }
}
