import { html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { desktopQuit, requestDesktopQuit } from "../DesktopShell";
import { NavNotificationsController } from "./NavNotificationsController";

/**
 * The Persian-inspired compass, settings rosette and (on the desktop shell) a
 * power button as icon buttons, with a help notification dot.
 *
 * Shared by the desktop nav bar and the mobile top bar so both read as the same
 * cluster next to the profile control — they're utility affordances rather than
 * page links, which is why they've left the nav item lists. The settings icon sits
 * last among the page links, immediately left of the profile control, and is a
 * plain page link with no auth dependency: it looks and behaves the same
 * signed in or out. The power button, when it renders, sits right after it.
 */
@customElement("nav-utility-icons")
export class NavUtilityIcons extends LitElement {
  /** Mobile trims the hit area to fit the top bar beside the logo. */
  @property({ type: String }) size: "desktop" | "mobile" = "desktop";

  private _notifications = new NavNotificationsController(this);

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("showPage", this._onShowPage);
  }

  disconnectedCallback() {
    window.removeEventListener("showPage", this._onShowPage);
    super.disconnectedCallback();
  }

  // The active page drives the highlight, and Navigation only updates
  // `.nav-menu-item` classes for elements that exist at click time.
  private _onShowPage = () => {
    this.requestUpdate();
  };

  private buttonClass(): string {
    const box = this.size === "mobile" ? "w-9 h-9" : "w-10 h-10";
    return (
      `nav-menu-item flex items-center justify-center ${box} rounded-full ` +
      "text-white/70 hover:text-malibu-blue cursor-pointer transition-colors " +
      "[&.active]:text-malibu-blue"
    );
  }

  private handleQuit = () => {
    requestDesktopQuit();
  };

  /**
   * The in-app way out (OPE-402), moved here from the settings modal (OPE-445)
   * so it is a one-click icon beside the cog instead of three menu levels
   * deep (nav cog -> settings modal -> Display tab).
   *
   * Still no confirmation dialog, but the old justification for that -- "no
   * accidental path to a button three levels in" -- no longer holds; moving
   * the button to the nav *is* giving it an accidental path. The reason it
   * still stands: this whole bar sits inside the wrapper carrying
   * `in-[.in-game]:hidden` (index.html, around <desktop-nav-bar>), so the
   * icon is never on screen during a match. An accidental press can only
   * happen at the menu, where quitting costs nothing -- there is no run in
   * progress to lose.
   *
   * Renders nothing on the web, on CrazyGames and on a shell too old to
   * expose quit() -- desktopQuit() is already null in all three, the same
   * feature-detection rule the settings cog's neighbours never needed because
   * they have no shell dependency.
   */
  private renderQuitButton(): TemplateResult | string {
    if (desktopQuit() === null) return "";
    return html`
      <button
        class="${this.buttonClass()}"
        data-i18n-aria-label="main.quit"
        data-i18n-title="main.quit"
        @click=${this.handleQuit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6 pointer-events-none"
          aria-hidden="true"
        >
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
          <line x1="12" y1="2" x2="12" y2="12" />
        </svg>
      </button>
    `;
  }

  private renderDot(color: string): TemplateResult {
    return html`
      <span
        class="absolute top-0 right-0 w-2 h-2 ${color} rounded-full animate-ping"
      ></span>
      <span class="absolute top-0 right-0 w-2 h-2 ${color} rounded-full"></span>
    `;
  }

  render(): TemplateResult {
    const currentPage = window.currentPageId;
    return html`
      <div class="flex items-center gap-1">
        <div class="relative">
          <button
            class="${this.buttonClass()} ${currentPage === "page-help"
              ? "active"
              : ""}"
            data-page="page-help"
            data-i18n-aria-label="main.help"
            data-i18n-title="main.help"
            @click=${this._notifications.onHelpClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.65"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-[1.35rem] h-[1.35rem] pointer-events-none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="8.7" />
              <path d="m14.9 9.1-1.75 4.05L9.1 14.9l1.75-4.05L14.9 9.1Z" />
              <path d="M12 2v2.1M22 12h-2.1M12 22v-2.1M2 12h2.1" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
          </button>
          ${this._notifications.showHelpDot()
            ? this.renderDot("bg-yellow-400")
            : ""}
        </div>
        <button
          class="${this.buttonClass()} ${currentPage === "page-settings"
            ? "active"
            : ""}"
          data-page="page-settings"
          data-i18n-aria-label="main.settings"
          data-i18n-title="main.settings"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-[1.35rem] h-[1.35rem] pointer-events-none"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
            <circle cx="9" cy="6" r="2" fill="#09110f" />
            <circle cx="15" cy="12" r="2" fill="#09110f" />
            <circle cx="11" cy="18" r="2" fill="#09110f" />
          </svg>
        </button>
        ${this.renderQuitButton()}
      </div>
    `;
  }
}
