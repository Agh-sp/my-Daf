import { GameMode, type Team } from "@openfront/engine-api/game/GameTypes";
import type { EventBus } from "@openfront/shared/EventBus";
import { Colord } from "colord";
import { html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import type { Controller } from "../../Controller";
import { Platform } from "../../Platform";
import { themeProvider } from "../../theme/ThemeProvider";
import { getTranslatedPlayerTeamLabel, translateText } from "../../Utils";
import type { GameView } from "../../view";
import { ImmunityBarVisibleEvent } from "./ImmunityTimer";
import "./PlayerStats";
import type { PlayerStats } from "./PlayerStats";
import { SpawnBarVisibleEvent } from "./SpawnTimer";
import "./TeamStats";
import type { TeamStats } from "./TeamStats";

@customElement("game-left-sidebar")
export class GameLeftSidebar extends LitElement implements Controller {
  @state()
  private isPlayerStatsShown = false;
  @state()
  private isTeamStatsShown = false;
  @state()
  private isVisible = false;
  @state()
  private isPlayerTeamLabelVisible = false;
  @state()
  private playerTeam: Team | null = null;
  @state()
  private spawnBarVisible = false;
  @state()
  private immunityBarVisible = false;

  private playerColor: Colord = new Colord("#FFFFFF");
  @property({ attribute: false }) public game: GameView | null = null;
  @property({ attribute: false }) public eventBus: EventBus | null = null;
  @query("player-stats") private playerStats?: PlayerStats;
  @query("team-stats") private teamStats?: TeamStats;
  private showPlayerStatsAfterSpawn = false;

  createRenderRoot() {
    return this;
  }

  init() {
    this.isVisible = true;
    this.eventBus?.on(SpawnBarVisibleEvent, (e) => {
      this.spawnBarVisible = e.visible;
    });
    this.eventBus?.on(ImmunityBarVisibleEvent, (e) => {
      this.immunityBarVisible = e.visible;
    });
    if (this.isTeamGame) {
      this.isPlayerTeamLabelVisible = true;
    }
    // Make it visible by default on large screens
    if (Platform.isDesktopWidth) {
      this.showPlayerStatsAfterSpawn = true;
    }
  }

  getTickIntervalMs() {
    return 1000;
  }

  tick() {
    if (this.game === null) return;

    const team = this.game.myPlayer()?.team();
    if (this.playerTeam === null && team !== null && team !== undefined) {
      this.playerTeam = team;
      this.playerColor = themeProvider.current().teamColor(team);
    }

    if (this.showPlayerStatsAfterSpawn && !this.game.inSpawnPhase()) {
      this.showPlayerStatsAfterSpawn = false;
      this.isPlayerStatsShown = true;
    }

    if (!this.game.inSpawnPhase() && this.isPlayerTeamLabelVisible) {
      this.isPlayerTeamLabelVisible = false;
    }

    this.playerStats?.refresh();
    this.teamStats?.refresh();
  }

  private get barOffset(): number {
    return (this.spawnBarVisible ? 7 : 0) + (this.immunityBarVisible ? 7 : 0);
  }

  private togglePlayerStats(): void {
    this.isPlayerStatsShown = !this.isPlayerStatsShown;
  }

  private toggleTeamStats(): void {
    this.isTeamStatsShown = !this.isTeamStatsShown;
  }

  private get isTeamGame(): boolean {
    return this.game?.config().gameConfig().gameMode === GameMode.Team;
  }

  render() {
    return html`
      <aside
        class=${`fixed top-0 left-0 z-900 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto rounded-br-2xl border-b border-r border-amber-200/15 bg-[#11110e]/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl ${this.isPlayerStatsShown || this.isTeamStatsShown ? "max-[400px]:w-full max-[400px]:rounded-none" : ""} transition-all duration-300 ease-out transform ${
          this.isVisible ? "translate-x-0" : "hidden"
        }`}
        style="margin-top: ${this.barOffset}px;"
      >
        <div class="flex items-center gap-4 xl:gap-6 text-white">
          <button
            type="button"
            class="flex items-center gap-2 rounded-lg border border-amber-200/20 bg-amber-200/[0.06] p-2 text-amber-100 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10"
            aria-label=${translateText("leaderboard.player")}
            aria-pressed=${this.isPlayerStatsShown}
            @click=${this.togglePlayerStats}
          >
            <svg
              viewBox="0 0 24 24"
              class="size-5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 19V5m0 14h17M8 16v-4m4 4V8m4 8v-6m4 6V4"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
            ${this.isPlayerStatsShown
              ? html`<span class="text-xs font-bold"
                  >${translateText("leaderboard.player")}</span
                >`
              : ""}
          </button>
          ${this.isTeamGame
            ? html`
                <button
                  type="button"
                  class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-2 text-stone-300 transition-colors hover:border-amber-200/30 hover:bg-amber-200/[0.06]"
                  aria-label=${translateText("leaderboard.team")}
                  aria-pressed=${this.isTeamStatsShown}
                  @click=${this.toggleTeamStats}
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="size-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m10.5-12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3.5 2a2.5 2.5 0 1 0-1.5-4.5m1.5 8h.5a3.5 3.5 0 0 1 3.5 3.5V20"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  ${this.isTeamStatsShown
                    ? html`<span class="text-xs font-bold"
                        >${translateText("leaderboard.team")}</span
                      >`
                    : ""}
                </button>
              `
            : null}
          ${this.isPlayerStatsShown || this.isTeamStatsShown
            ? html`<span
                class="ml-auto text-[10px] text-slate-500 select-all leading-none self-start"
                title=${translateText("help_modal.game_id_tooltip")}
                >${this.game?.gameID() ?? ""}</span
              >`
            : null}
        </div>
        ${this.isPlayerTeamLabelVisible
          ? html`
              <div
                class="flex items-center w-full text-white mt-2"
                @contextmenu=${(e: Event) => e.preventDefault()}
              >
                ${translateText("help_modal.ui_your_team")}
                <span
                  style="--color: ${this.playerColor.toRgbString()}"
                  class="text-(--color)"
                >
                  &nbsp;${getTranslatedPlayerTeamLabel(
                    this.playerTeam,
                    this.game?.teamClanTag(this.playerTeam),
                  )}
                  &#10687;
                </span>
              </div>
            `
          : null}
        <div class="flex flex-col gap-2 min-w-0 w-full">
          <player-stats
            class=${this.isPlayerStatsShown ? "block min-w-0" : "hidden"}
            .game=${this.game}
            .eventBus=${this.eventBus}
            .visible=${this.isPlayerStatsShown}
          ></player-stats>
          <team-stats
            class=${this.isTeamStatsShown && this.isTeamGame
              ? "block min-w-0"
              : "hidden"}
            .game=${this.game}
            .visible=${this.isTeamStatsShown && this.isTeamGame}
          ></team-stats>
        </div>
        <slot></slot>
      </aside>
    `;
  }
}
