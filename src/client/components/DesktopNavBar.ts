import { assetUrl } from "@openfront/shared/AssetUrls";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { whenModalLoaded } from "../LazyModals";
import { NavNotificationsController } from "./NavNotificationsController";
import "./NavUtilityIcons";

@customElement("desktop-nav-bar")
export class DesktopNavBar extends LitElement {
  private _notifications = new NavNotificationsController(this);

  private openFriends() {
    whenModalLoaded("account-modal", () => {
      document
        .querySelector<
          HTMLElement & { open(args?: Record<string, unknown>): void }
        >("account-modal")
        ?.open({ tab: "friends" });
    });
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("showPage", this._onShowPage);

    const current = window.currentPageId;
    if (current) {
      // Wait for render
      this.updateComplete.then(() => {
        this._updateActiveState(current);
      });
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("showPage", this._onShowPage);
  }

  private _onShowPage = (e: Event) => {
    const pageId = (e as CustomEvent).detail;
    this._updateActiveState(pageId);
  };

  private _updateActiveState(pageId: string) {
    this.querySelectorAll(".nav-menu-item").forEach((el) => {
      if ((el as HTMLElement).dataset.page === pageId) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  render() {
    window.currentPageId ??= "page-play";
    const currentPage = window.currentPageId;

    return html`
      <nav
        class="hidden lg:flex w-full bg-zinc-900/90 backdrop-blur-md items-center justify-center gap-8 py-4 shrink-0 z-50 relative"
      >
        <div class="game-brand">
          <img
            src=${assetUrl("images/MiddleEastDefendUserLogo.jpg")}
            alt="دفاع خاورمیانه"
            class="game-brand-emblem-image"
          />
          <span id="game-version" class="sr-only" aria-hidden="true"></span>
        </div>
        <button
          class="nav-menu-item ${currentPage === "page-play"
            ? "active"
            : ""} text-white/70 hover:text-amber-200 font-medium tracking-wider uppercase cursor-pointer transition-colors [&.active]:text-amber-200 "
          data-page="page-play"
          data-i18n="main.play"
        ></button>
        <button
          class="nav-menu-item ${currentPage === "page-news"
            ? "active"
            : ""} text-white/70 hover:text-amber-200 font-medium tracking-wider uppercase cursor-pointer transition-colors [&.active]:text-amber-200"
          data-page="page-news"
          data-i18n="main.news"
        ></button>
        <!-- Desktop Navigation Menu Items -->
        <div class="relative no-crazygames">
          <button
            class="nav-menu-item ${currentPage === "page-item-store"
              ? "active"
              : ""} text-white/70 hover:text-amber-200 font-medium tracking-wider uppercase cursor-pointer transition-colors [&.active]:text-amber-200 "
            data-page="page-item-store"
            data-i18n="main.store"
            @click=${this._notifications.onStoreClick}
          ></button>
          ${this._notifications.showStoreDot()
            ? html`
                <span
                  class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"
                ></span>
                <span
                  class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"
                ></span>
              `
            : ""}
        </div>
        <button
          class="nav-menu-item ${currentPage === "page-inventory"
            ? "active"
            : ""} text-white/70 hover:text-amber-200 font-medium tracking-wider uppercase cursor-pointer transition-colors [&.active]:text-amber-200"
          data-page="page-inventory"
          data-i18n="main.inventory"
        ></button>
        <div class="relative">
          <button
            class="nav-menu-item text-white/70 hover:text-amber-200 font-medium tracking-wider uppercase cursor-pointer transition-colors"
            data-i18n="main.friends"
            @click=${this.openFriends}
          ></button>
          ${this._notifications.friendRequestCount() > 0
            ? html`<span
                class="absolute -top-1 -right-2 grid min-w-4 h-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white"
                aria-label="${this._notifications.friendRequestCount()} friend requests"
                >${this._notifications.friendRequestCount()}</span
              >`
            : ""}
        </div>
        <!-- Utility cluster: bell, help, settings and the profile control are
             account/notification/utility affordances rather than page links,
             so they sit tight together behind a divider instead of in the nav
             item list. -->
        <div class="flex items-center gap-1 pl-5 ml-1 border-l border-white/10">
          <nav-utility-icons size="desktop"></nav-utility-icons>
        </div>
      </nav>
    `;
  }
}
