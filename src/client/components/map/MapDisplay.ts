import {
  Difficulty,
  GameMapType,
  maps,
} from "@openfront/engine-api/game/GameTypes";
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { terrainMapFileLoader } from "../../TerrainMapFileLoader";
import { translateText } from "../../Utils";
import { favoriteMapIcon } from "./MapFavorites";
import { MEDAL_ORDER, medalIcon } from "./Medals";

@customElement("map-display")
export class MapDisplay extends LitElement {
  @property({ type: String }) mapKey = "";
  @property({ type: Boolean }) selected = false;
  @property({ type: String }) translation: string = "";
  @property({ type: Boolean }) showMedals = false;
  @property({ type: Boolean }) favorite = false;
  @property({ attribute: false }) wins: Set<Difficulty> = new Set();
  @property({ attribute: false }) onToggleFavorite?: () => void;
  @state() private mapWebpPath: string | null = null;
  @state() private mapName: string | null = null;
  @state() private isLoading = true;
  @state() private hasNations = true;
  private observer: IntersectionObserver | null = null;
  private dataLoaded = false;
  private mapLoadRequestId = 0;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !this.dataLoaded) {
          this.dataLoaded = true;
          this.loadMapData();
          this.observer?.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    this.observer.observe(this);
  }

  disconnectedCallback() {
    if (this.isLoading) {
      this.dataLoaded = false;
    }
    this.mapLoadRequestId++;
    this.observer?.disconnect();
    this.observer = null;
    super.disconnectedCallback();
  }

  updated(changedProperties: Map<string, unknown>) {
    // If this element is reused for a different map, reload its data —
    // otherwise it keeps showing the previous map's thumbnail.
    const previousMapKey = changedProperties.get("mapKey");
    if (
      changedProperties.has("mapKey") &&
      previousMapKey !== undefined &&
      previousMapKey !== this.mapKey &&
      this.dataLoaded
    ) {
      this.loadMapData();
    }
  }

  private async loadMapData() {
    if (!this.mapKey) return;

    const requestId = ++this.mapLoadRequestId;
    const mapKey = this.mapKey;
    try {
      this.isLoading = true;
      const mapValue = GameMapType[mapKey as keyof typeof GameMapType];
      const data = terrainMapFileLoader.getMapData(mapValue);
      this.mapWebpPath = data.webpPath;
      const manifest = await data.manifest();
      if (requestId !== this.mapLoadRequestId || mapKey !== this.mapKey) return;
      this.mapName = manifest.name;
      this.hasNations =
        Array.isArray(manifest.nations) && manifest.nations.length > 0;
    } catch (error) {
      if (requestId === this.mapLoadRequestId) {
        console.warn("Failed to load map data:", error);
      }
    } finally {
      if (requestId === this.mapLoadRequestId) {
        this.isLoading = false;
      }
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    // Trigger the same activation logic as click when Enter or Space is pressed
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      // Dispatch a click event to maintain compatibility with parent click handlers
      (event.target as HTMLElement).click();
    }
  }

  private preventImageDrag(event: DragEvent) {
    event.preventDefault();
  }

  private handleToggleFavorite(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.onToggleFavorite?.();
  }

  private renderFavoriteButton() {
    if (!this.onToggleFavorite) return null;
    return html`<button
      type="button"
      @click=${this.handleToggleFavorite}
      @keydown=${(e: KeyboardEvent) => e.stopPropagation()}
      aria-pressed=${this.favorite}
      aria-label=${translateText(
        this.favorite ? "map_component.unfavorite" : "map_component.favorite",
      )}
      title=${translateText(
        this.favorite ? "map_component.unfavorite" : "map_component.favorite",
      )}
      class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-200 active:scale-90 ${this
        .favorite
        ? "opacity-100 text-cyber-yellow"
        : "opacity-0 group-hover:opacity-100 text-white hover:text-cyber-yellow"}"
    >
      ${favoriteMapIcon(this.favorite, "w-4 h-4")}
    </button>`;
  }

  render() {
    const nationCount = maps.find(
      (map) => map.id === this.mapKey,
    )?.defaultNationCount;

    return html`
      <div
        role="button"
        tabindex="0"
        aria-selected="${this.selected}"
        aria-label="${this.translation ?? this.mapName ?? this.mapKey}"
        @keydown="${this.handleKeydown}"
        class="w-full h-full p-3 flex flex-col items-center justify-between rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 gap-3 group ${this
          .selected
          ? "bg-cyber-yellow/[0.09] border-cyber-yellow/60 shadow-[0_0_28px_rgba(245,190,58,0.12)]"
          : "bg-slate-950/35 border-white/10 hover:bg-white/[0.07] hover:border-cyber-yellow/30 hover:-translate-y-0.5"}"
      >
        ${this.isLoading
          ? html`<div
              class="w-full aspect-[2/1] text-white/40 transition-transform duration-200 rounded-lg bg-black/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center animate-pulse"
            >
              ${translateText("common.loading")}
            </div>`
          : this.mapWebpPath
            ? html`<div
                class="w-full aspect-[2/1] relative overflow-hidden rounded-lg bg-black/20"
              >
                <img
                  src="${this.mapWebpPath}"
                  alt="${this.translation || this.mapName}"
                  draggable="false"
                  @dragstart=${this.preventImageDrag}
                  class="w-full h-full object-cover ${this.selected
                    ? "opacity-100"
                    : "opacity-80"} group-hover:opacity-100 transition-opacity duration-200"
                />
                ${this.renderFavoriteButton()}
              </div>`
            : html`<div
                class="w-full aspect-[2/1] text-red-400 transition-transform duration-200 rounded-lg bg-red-500/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center"
              >
                ${translateText("map_component.error")}
              </div>`}
        ${this.showMedals && this.hasNations
          ? html`<div class="flex gap-1 justify-center w-full">
              ${this.renderMedals()}
            </div>`
          : null}
        <div class="flex w-full items-center justify-between gap-2">
          <span
            class="min-w-0 truncate text-left text-sm font-semibold tracking-wide text-white"
          >
            ${this.translation || this.mapName}
          </span>
          ${nationCount
            ? html`<span
                class="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-black/25 px-2 py-1 text-[10px] font-medium tabular-nums text-white/65"
                title=${translateText("map_component.nations_count", {
                  count: String(nationCount),
                })}
              >
                <svg
                  viewBox="0 0 20 20"
                  class="size-3.5 text-cyber-yellow"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6.5-.5a2 2 0 1 0 0-4M2.5 16a4.5 4.5 0 0 1 9 0m1.5-4a3.5 3.5 0 0 1 4.5 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                ${nationCount}
              </span>`
            : null}
        </div>
      </div>
    `;
  }

  private renderMedals() {
    const wins = this.readWins();
    return MEDAL_ORDER.map((medal) =>
      medalIcon(medal, "w-5 h-5", wins.has(medal)),
    );
  }

  private readWins(): Set<Difficulty> {
    return this.wins ?? new Set();
  }
}
