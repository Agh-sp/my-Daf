import { UnitType } from "@openfront/engine-api/game/GameTypes";
import { TradeOfferView } from "@openfront/engine-api/game/GameUpdates";
import { TradeResource } from "@openfront/engine-api/Schemas";
import { renderNumber } from "@openfront/engine-lib/Format";
import { assetUrl } from "@openfront/shared/AssetUrls";
import { EventBus } from "@openfront/shared/EventBus";
import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  RespondTradeOfferIntentEvent,
  SendEmbargoIntentEvent,
  SendTradeOfferIntentEvent,
} from "../../Transport";
import { textDirection, translateText } from "../../Utils";
import { PlayerView } from "../../view";
import { buildIconDataUrl } from "./BuildIcons";

const RESOURCE_TYPES: TradeResource[] = [
  "gold",
  "oil",
  "gas",
  "uranium",
  "missile",
];
const RESOURCE_ICONS: Record<TradeResource, string> = {
  gold: assetUrl("images/GoldCoinIcon.svg"),
  oil: assetUrl("images/OilDropIcon.svg"),
  gas: assetUrl("images/GasFlameIcon.svg"),
  uranium: assetUrl("images/UraniumIcon.svg"),
  missile: buildIconDataUrl(UnitType.BallisticMissile),
};

@customElement("trade-deal-modal")
export class TradeDealModal extends LitElement {
  @property({ attribute: false }) eventBus: EventBus | null = null;
  @property({ attribute: false }) viewer: PlayerView | null = null;
  @property({ attribute: false }) target: PlayerView | null = null;

  @state() private offeredResource: TradeResource = "gold";
  @state() private requestedResource: TradeResource = "oil";
  @state() private offeredAmount = "1000";
  @state() private requestedAmount = "1000";
  @state() private activeCategory: "trade" | "sanctions" = "trade";

  createRenderRoot() {
    return this;
  }

  private close = (): void => {
    this.dispatchEvent(
      new CustomEvent("close", { bubbles: true, composed: true }),
    );
  };

  private sendOffer = (): void => {
    const offeredAmount = Number(this.offeredAmount);
    const requestedAmount = Number(this.requestedAmount);
    if (
      !this.eventBus ||
      !this.target ||
      this.viewer?.hasEmbargo(this.target) ||
      !Number.isSafeInteger(offeredAmount) ||
      !Number.isSafeInteger(requestedAmount) ||
      offeredAmount < 1 ||
      requestedAmount < 1 ||
      offeredAmount > this.available(this.viewer, this.offeredResource) ||
      this.offeredResource === this.requestedResource
    ) {
      return;
    }

    this.eventBus.emit(
      new SendTradeOfferIntentEvent(
        this.target,
        this.offeredResource,
        offeredAmount,
        this.requestedResource,
        requestedAmount,
      ),
    );
    this.close();
  };

  private respond(action: "accept" | "reject" | "cancel"): void {
    if (!this.eventBus || !this.target) return;
    if (action === "accept" && this.viewer?.hasEmbargo(this.target)) return;
    this.eventBus.emit(new RespondTradeOfferIntentEvent(this.target, action));
    this.close();
  }

  private toggleEmbargo(): void {
    const viewer = this.viewer;
    const target = this.target;
    if (!this.eventBus || !viewer || !target) return;
    this.eventBus.emit(
      new SendEmbargoIntentEvent(
        target,
        viewer.hasEmbargoAgainst(target) ? "stop" : "start",
      ),
    );
  }

  private available(
    player: PlayerView | null,
    resource: TradeResource,
  ): number {
    if (!player) return 0;
    switch (resource) {
      case "gold":
        return Number(player.gold());
      case "oil":
        return player.oil();
      case "gas":
        return player.gas();
      case "uranium":
        return player.uranium();
      case "missile":
        return player
          .units(UnitType.Arsenal)
          .filter(
            (arsenal) => arsenal.isActive() && !arsenal.isUnderConstruction(),
          )
          .reduce((total, silo) => total + silo.missilesStored(), 0);
    }
  }

  private resourceLabel(resource: TradeResource): string {
    switch (resource) {
      case "gold":
        return translateText("deal.resource.gold");
      case "oil":
        return translateText("deal.resource.oil");
      case "gas":
        return translateText("deal.resource.gas");
      case "uranium":
        return translateText("deal.resource.uranium");
      case "missile":
        return translateText("deal.resource.missile");
    }
  }

  private renderAmount(resource: TradeResource, amount: number) {
    return html`<span class="inline-flex items-center gap-1" translate="no">
      <img
        src=${RESOURCE_ICONS[resource]}
        alt=""
        class="size-4 object-contain"
      />
      <span>${renderNumber(amount)}</span>
      <span translate="yes">${this.resourceLabel(resource)}</span>
    </span>`;
  }

  private renderAmountInput(
    resource: TradeResource,
    amount: string,
    update: (value: string) => void,
    availableFrom: PlayerView | null = this.viewer,
    max?: number,
  ) {
    return html`<label class="flex min-w-0 flex-1 flex-col gap-1">
      <span class="text-xs text-zinc-300">${this.resourceLabel(resource)}</span>
      <input
        type="number"
        min="1"
        max=${max ?? Number.MAX_SAFE_INTEGER}
        step="1"
        inputmode="numeric"
        .value=${amount}
        @input=${(event: InputEvent) =>
          update((event.currentTarget as HTMLInputElement).value)}
        class="w-full rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white outline-none focus:border-cyan-400"
      />
      <span class="text-xs text-zinc-400">
        ${translateText("deal.available", {
          amount: renderNumber(this.available(availableFrom, resource)),
        })}
      </span>
    </label>`;
  }

  private renderOffer(offer: TradeOfferView, incoming: boolean) {
    const from = offer.offeredResource;
    const fromAmount = offer.offeredAmount;
    const to = offer.requestedResource;
    const toAmount = offer.requestedAmount;

    return html`<div
      class="rounded-xl border border-cyan-400/25 bg-cyan-950/30 p-3"
    >
      <div class="mb-2 font-semibold text-cyan-100">
        ${translateText(
          incoming ? "deal.incoming_offer" : "deal.pending_offer",
        )}
      </div>
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <span
          >${translateText(incoming ? "deal.they_give" : "deal.you_give")}</span
        >
        ${this.renderAmount(from, fromAmount)}
      </div>
      <div class="my-1 text-center text-zinc-400">↕</div>
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <span
          >${translateText(incoming ? "deal.you_give" : "deal.they_give")}</span
        >
        ${this.renderAmount(to, toAmount)}
      </div>
      ${incoming
        ? html`<div class="mt-3 flex gap-2">
            <button
              class="flex-1 rounded-lg bg-emerald-600 px-3 py-2 font-semibold hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
              ?disabled=${Boolean(
                this.viewer &&
                this.target &&
                this.viewer.hasEmbargo(this.target),
              )}
              @click=${() => this.respond("accept")}
            >
              ${translateText("deal.accept")}
            </button>
            <button
              class="flex-1 rounded-lg bg-zinc-700 px-3 py-2 hover:bg-zinc-600"
              @click=${() => this.respond("reject")}
            >
              ${translateText("deal.reject")}
            </button>
          </div>`
        : html`<button
            class="mt-3 w-full rounded-lg bg-zinc-700 px-3 py-2 hover:bg-zinc-600"
            @click=${() => this.respond("cancel")}
          >
            ${translateText("deal.cancel_offer")}
          </button>`}
    </div>`;
  }

  render() {
    const viewer = this.viewer;
    const target = this.target;
    if (!viewer || !target) return html``;
    const incomingOffer =
      target.tradeOffer()?.recipientID === viewer.id()
        ? target.tradeOffer()
        : null;
    const outgoingOffer =
      viewer.tradeOffer()?.recipientID === target.id()
        ? viewer.tradeOffer()
        : null;
    const amount = Number(this.offeredAmount);
    const canSend =
      !viewer.hasEmbargo(target) &&
      Number.isSafeInteger(amount) &&
      amount > 0 &&
      amount <= this.available(viewer, this.offeredResource) &&
      Number.isSafeInteger(Number(this.requestedAmount)) &&
      Number(this.requestedAmount) > 0 &&
      this.offeredResource !== this.requestedResource;

    return html`<div
      class="fixed inset-0 z-[10003] flex items-center justify-center overflow-y-auto bg-black/70 p-3"
      dir=${textDirection()}
      @click=${this.close}
      @keydown=${(event: KeyboardEvent) => {
        if (event.key === "Escape") this.close();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trade-deal-title"
        class="w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-900 text-zinc-100 shadow-2xl"
        @click=${(event: Event) => event.stopPropagation()}
      >
        <header
          class="flex items-center justify-between border-b border-white/10 px-5 py-4"
        >
          <div>
            <h2 id="trade-deal-title" class="text-lg font-bold">
              ${translateText("deal.title")}
            </h2>
            <p class="text-sm text-zinc-400">${target.displayName()}</p>
          </div>
          <button
            class="rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/10"
            aria-label=${translateText("common.close")}
            @click=${this.close}
          >
            ✕
          </button>
        </header>

        <div class="max-h-[75vh] space-y-4 overflow-y-auto p-5">
          <nav
            class="grid grid-cols-2 gap-2 sm:grid-cols-4"
            aria-label=${translateText("deal.categories")}
          >
            ${["defense_pact", "protectorate"].map(
              (category) =>
                html`<button
                  disabled
                  class="rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-500"
                  title=${translateText("deal.coming_soon")}
                >
                  ${translateText(`deal.${category}`)}
                  <span class="mt-1 block"
                    >${translateText("deal.coming_soon")}</span
                  >
                </button>`,
            )}
            <button
              aria-current=${this.activeCategory === "sanctions"
                ? "page"
                : undefined}
              class=${this.activeCategory === "sanctions"
                ? "rounded-xl border border-cyan-400/40 bg-cyan-950/60 px-2 py-3 text-xs font-semibold text-cyan-100"
                : "rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-300"}
              @click=${() => (this.activeCategory = "sanctions")}
            >
              ${translateText("deal.sanctions")}
              <span class="mt-1 block"
                >${translateText("player_panel.stop_trade")}</span
              >
            </button>
            <button
              aria-current=${this.activeCategory === "trade"
                ? "page"
                : undefined}
              class=${this.activeCategory === "trade"
                ? "rounded-xl border border-cyan-400/40 bg-cyan-950/60 px-2 py-3 text-xs font-semibold text-cyan-100"
                : "rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-300"}
              @click=${() => (this.activeCategory = "trade")}
            >
              ${translateText("deal.trade")}
            </button>
          </nav>

          ${this.activeCategory === "sanctions"
            ? html`<div
                class="rounded-xl border border-violet-400/25 bg-violet-950/30 p-4"
              >
                <h3 class="mb-3 font-semibold">
                  ${translateText("deal.sanctions")}
                </h3>
                <button
                  class="w-full rounded-xl bg-violet-700 px-4 py-3 font-bold text-white transition hover:bg-violet-600"
                  @click=${this.toggleEmbargo}
                >
                  ${translateText(
                    viewer.hasEmbargoAgainst(target)
                      ? "player_panel.start_trade"
                      : "player_panel.stop_trade",
                  )}
                </button>
              </div>`
            : html`
                ${incomingOffer ? this.renderOffer(incomingOffer, true) : ""}
                ${outgoingOffer ? this.renderOffer(outgoingOffer, false) : ""}
                <div
                  class="rounded-xl border border-white/10 bg-zinc-800/50 p-4"
                >
                  <h3 class="mb-3 font-semibold">
                    ${translateText("deal.make_offer")}
                  </h3>
                  <div class="grid grid-cols-2 gap-3">
                    <label class="flex min-w-0 flex-col gap-1">
                      <span class="text-xs text-zinc-300"
                        >${translateText("deal.you_give")}</span
                      >
                      <select
                        .value=${this.offeredResource}
                        @change=${(event: Event) => {
                          this.offeredResource = (
                            event.currentTarget as HTMLSelectElement
                          ).value as TradeResource;
                          if (this.offeredResource === this.requestedResource) {
                            this.requestedResource = RESOURCE_TYPES.find(
                              (resource) => resource !== this.offeredResource,
                            )!;
                          }
                        }}
                        class="rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white"
                      >
                        ${RESOURCE_TYPES.map(
                          (resource) =>
                            html`<option value=${resource}>
                              ${this.resourceLabel(resource)}
                            </option>`,
                        )}
                      </select>
                    </label>
                    ${this.renderAmountInput(
                      this.offeredResource,
                      this.offeredAmount,
                      (value) => (this.offeredAmount = value),
                      viewer,
                      this.available(viewer, this.offeredResource),
                    )}
                    <label class="flex min-w-0 flex-col gap-1">
                      <span class="text-xs text-zinc-300"
                        >${translateText("deal.you_receive")}</span
                      >
                      <select
                        .value=${this.requestedResource}
                        @change=${(event: Event) =>
                          (this.requestedResource = (
                            event.currentTarget as HTMLSelectElement
                          ).value as TradeResource)}
                        class="rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white"
                      >
                        ${RESOURCE_TYPES.map(
                          (resource) =>
                            html`<option
                              value=${resource}
                              ?disabled=${resource === this.offeredResource}
                            >
                              ${this.resourceLabel(resource)}
                            </option>`,
                        )}
                      </select>
                    </label>
                    ${this.renderAmountInput(
                      this.requestedResource,
                      this.requestedAmount,
                      (value) => (this.requestedAmount = value),
                      target,
                    )}
                  </div>
                  <button
                    class="mt-4 w-full rounded-xl bg-cyan-600 px-4 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40"
                    ?disabled=${!canSend}
                    @click=${this.sendOffer}
                  >
                    ${translateText("deal.send_offer")}
                  </button>
                  <p class="mt-2 text-xs text-zinc-400">
                    ${translateText("deal.acceptance_note")}
                  </p>
                </div>
              `}
        </div>
      </section>
    </div>`;
  }
}
