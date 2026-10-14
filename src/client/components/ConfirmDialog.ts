import { html, LitElement, render as litRender } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { translateText } from "../Utils";

/**
 * A reusable inline confirmation / acknowledgement dialog.
 *
 * Usage:
 * ```html
 * <confirm-dialog
 *   .message=${"Are you sure?"}
 *   variant="danger"
 *   @confirm=${() => doThing()}
 *   @cancel=${() => {}}
 * ></confirm-dialog>
 * ```
 *
 * For ban-style flows, add a textarea:
 * ```html
 * <confirm-dialog
 *   .message=${"Ban this player?"}
 *   variant="warning"
 *   textareaPlaceholder="Reason (optional)"
 *   @confirm=${(e) => ban(e.detail.text)}
 *   @cancel=${() => {}}
 * ></confirm-dialog>
 * ```
 */
@customElement("confirm-dialog")
export class ConfirmDialog extends LitElement {
  @property() heading = "";
  @property() message = "";
  @property() variant: "danger" | "warning" | "iranianMilitary" = "danger";
  @property() textareaPlaceholder = "";
  @property() confirmText = "";
  @property() cancelText = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) showClose = false;
  @property({ type: Boolean }) wide = false;
  @property() buttons: "confirmCancel" | "confirmOnly" | "none" =
    "confirmCancel";

  @state() private text = "";

  private portal: HTMLDivElement | null = null;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.portal = document.createElement("div");
    document.body.appendChild(this.portal);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.portal) {
      litRender(html``, this.portal);
      this.portal.remove();
      this.portal = null;
    }
  }

  render() {
    if (this.portal) {
      litRender(this.renderOverlay(), this.portal);
    }
    return html``;
  }

  private renderOverlay() {
    const isMilitary = this.variant === "iranianMilitary";
    const isDanger = this.variant === "danger";
    const borderColor = isMilitary
      ? "border-emerald-500/50"
      : isDanger
        ? "border-red-500/50"
        : "border-amber-500/50";
    const cardBg = isMilitary ? "bg-[#111914]" : "bg-surface";
    const textColor = isMilitary
      ? "text-emerald-100"
      : isDanger
        ? "text-red-300"
        : "text-amber-300";
    const btnClass = isMilitary
      ? "bg-emerald-700 text-white hover:bg-emerald-600"
      : isDanger
        ? "bg-red-600 text-white hover:bg-red-700"
        : "bg-amber-600 text-white hover:bg-amber-700";

    return html`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${(e: Event) => {
          if (e.target === e.currentTarget) this.handleCancel();
        }}
      >
        <div
          class="relative mx-4 w-full overflow-hidden ${this.wide
            ? "max-w-md"
            : "max-w-sm"} p-6 rounded-2xl border ${borderColor} ${cardBg} shadow-2xl"
        >
          ${isMilitary
            ? html`<div class="absolute inset-x-0 top-0 flex h-1 flex-col">
                <span class="flex-1 bg-emerald-500"></span>
                <span class="flex-1 bg-white"></span>
                <span class="flex-1 bg-red-500"></span>
              </div>`
            : ""}
          ${this.showClose
            ? html`<button
                @click=${() => this.handleCancel()}
                class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                ×
              </button>`
            : ""}
          ${this.heading
            ? html`<h2 class="text-lg font-bold text-white mb-2 pr-8">
                ${this.heading}
              </h2>`
            : ""}
          ${isMilitary
            ? html`<div class="mb-5 flex items-center gap-3">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-900/50 shadow-inner"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 48 48" class="h-9 w-9">
                    <path
                      d="M9 21a15 15 0 0 1 30 0v15H9z"
                      fill="#315b3e"
                      stroke="#b9c98a"
                      stroke-width="1.5"
                    />
                    <path d="M14 20a10 10 0 0 1 20 0z" fill="#758c4e" />
                    <path d="M17 20h14v3H17z" fill="#c7ad70" />
                    <rect
                      x="18"
                      y="25"
                      width="12"
                      height="8"
                      rx="3"
                      fill="#c99668"
                    />
                    <path d="M18 28h12v2H18z" fill="#493b30" />
                    <path
                      d="M12 37h24l4 7H8z"
                      fill="#365d3b"
                      stroke="#b9c98a"
                      stroke-width="1.2"
                    />
                    <path d="M18 38h12v2H18z" fill="#16864a" />
                    <path d="M18 40h12v2H18z" fill="#f5f1df" />
                    <path d="M18 42h12v2H18z" fill="#d8323b" />
                    <circle cx="21" cy="27" r="1" fill="#262821" />
                    <circle cx="27" cy="27" r="1" fill="#262821" />
                  </svg>
                </div>
                <p class="text-sm font-medium ${textColor}">${this.message}</p>
              </div>`
            : html`<p class="text-sm font-medium ${textColor} mb-5">
                ${this.message}
              </p>`}
          ${this.textareaPlaceholder
            ? html`<textarea
                .value=${this.text}
                @input=${(e: Event) =>
                  (this.text = (e.target as HTMLTextAreaElement).value)}
                maxlength="200"
                rows="2"
                placeholder="${this.textareaPlaceholder}"
                class="w-full px-3 py-2 mb-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm resize-none"
              ></textarea>`
            : ""}
          ${this.buttons === "none"
            ? ""
            : html`<div class="flex gap-3">
                ${this.buttons === "confirmCancel"
                  ? html`<button
                      @click=${() => this.handleCancel()}
                      ?disabled=${this.disabled}
                      class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${this.cancelText || translateText("common.cancel")}
                    </button>`
                  : ""}
                <button
                  @click=${() => this.handleConfirm()}
                  ?disabled=${this.disabled}
                  class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl ${btnClass} transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
                >
                  ${this.confirmText || translateText("common.confirm")}
                </button>
              </div>`}
        </div>
      </div>
    `;
  }

  private handleConfirm() {
    this.dispatchEvent(
      new CustomEvent("confirm", { detail: { text: this.text } }),
    );
    this.text = "";
  }

  private handleCancel() {
    this.dispatchEvent(new CustomEvent("cancel"));
    this.text = "";
  }
}
