import { TileRef } from "@openfront/engine-api/game/GameMap";
import {
  GameMode,
  GameType,
  Gold,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { GameUpdateType } from "@openfront/engine-api/game/GameUpdates";
import { ClientID } from "@openfront/engine-api/Schemas";
import { Config } from "@openfront/engine-lib/configuration/Config";
import { renderNumber, renderTroops } from "@openfront/engine-lib/Format";
import { assetUrl } from "@openfront/shared/AssetUrls";
import { EventBus } from "@openfront/shared/EventBus";
import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { keyed } from "lit/directives/keyed.js";
import { Controller } from "../../Controller";
import { AttackRatioEvent } from "../../InputHandler";
import { UIState } from "../../UIState";
import { USER_SETTINGS_CHANGED_EVENT, UserSettings } from "../../UserSettings";
import { getGamesPlayed, translateText } from "../../Utils";
import { GameView } from "../../view";
import { PlayerView } from "../../view/PlayerView";
import { soldierIcon } from "../HotbarIcons";
import { TutorialHighlight, TutorialHighlightEvent } from "../Tutorial";
import type { ResourceIconType } from "./BuildIcons";
import { renderResourceIcon } from "./BuildIcons";
const swordIcon = assetUrl("images/SwordIcon.svg");

@customElement("control-panel")
export class ControlPanel extends LitElement implements Controller {
  public game: GameView;
  public clientID: ClientID;
  public eventBus: EventBus;
  public uiState: UIState;

  @state()
  private attackRatio: number = 0.2;

  @state()
  private _maxTroops: number;

  @state()
  private troopRate: number;

  @state()
  private _troops: number;

  @state()
  private _isVisible = false;

  @state()
  private _notification: { type: "warning" | "info"; message: string } | null =
    null;

  @state()
  private _gold: Gold;

  @state()
  private _oil = 0;

  @state()
  private _gas = 0;

  @state()
  private _uranium = 0;

  @state()
  private _storedMissiles = 0;

  @state()
  private _missileCapacity = 0;

  @state()
  private _attackingTroops: number = 0;

  @state()
  private _goldGain: bigint | null = null;
  @state()
  private _goldGainPulseId: number = 0;
  private _goldGainTimeoutId: ReturnType<typeof setTimeout> | null = null;

  @state()
  private _tutorialHighlight: TutorialHighlight | null = null;

  private _troopRateIsIncreasing: boolean = true;

  private _lastTroopIncreaseRate: number;

  // Border detection cache
  private _nearbyPlayerIDs: Set<number> = new Set();
  private _borderRefreshCounter: number = 0;
  private _borderTilesPromise: Promise<void> | null = null;
  // Track last attack tick per target player (for 15-second threshold)
  private _lastAttackTickByTarget: Map<number, number> = new Map();
  private static readonly BORDER_REFRESH_INTERVAL = 10; // recompute every 1s
  private static readonly ATTACK_THRESHOLD_TICKS = 15 * 10; // 15 seconds

  connectedCallback() {
    super.connectedCallback();
    // The attack ratio is cached below for the lifetime of the game, but the
    // settings modal is now reachable mid-match, so follow the stored value
    // when it changes there. (This panel's own slider is session-only: it
    // never writes UserSettings, so there is no loop.)
    globalThis.addEventListener(
      `${USER_SETTINGS_CHANGED_EVENT}:settings.attackRatio`,
      this.onAttackRatioSettingChanged,
    );
  }

  init() {
    this.attackRatio = new UserSettings().attackRatio();
    this.uiState.attackRatio = this.attackRatio;
    this.eventBus.on(TutorialHighlightEvent, (e) => {
      this._tutorialHighlight = e.target;
    });
    this.eventBus.on(AttackRatioEvent, (event) => {
      let newAttackRatio = this.attackRatio + event.attackRatio / 100;

      if (newAttackRatio < 0.01) {
        newAttackRatio = 0.01;
      }

      if (newAttackRatio > 1) {
        newAttackRatio = 1;
      }

      if (newAttackRatio === 0.11 && this.attackRatio === 0.01) {
        // If we're changing the ratio from 1%, then set it to 10% instead of 11% to keep a consistency
        newAttackRatio = 0.1;
      }

      this.attackRatio = newAttackRatio;
      this.onAttackRatioChange(this.attackRatio);
    });
  }

  tick() {
    if (!this._isVisible && !this.game.inSpawnPhase()) {
      this.setVisibile(true);
    }

    const player = this.game.myPlayer();
    if (player === null || !player.isAlive()) {
      this.setVisibile(false);
      return;
    }

    this.updateTroopIncrease();

    const config = this.game.config();
    this._maxTroops = config.maxTroops(player);
    this._gold = player.gold();
    this._oil = player.oil();
    this._gas = player.gas();
    this._uranium = player.uranium();
    const arsenals = player
      .units(UnitType.Arsenal)
      .filter(
        (arsenal) => arsenal.isActive() && !arsenal.isUnderConstruction(),
      );
    this._storedMissiles = arsenals.reduce(
      (total, arsenal) => total + arsenal.missilesStored(),
      0,
    );
    this._missileCapacity = arsenals.reduce(
      (total, arsenal) => total + arsenal.missileCapacity(),
      0,
    );
    this._troops = player.troops();
    this._attackingTroops = player
      .outgoingAttacks()
      .map((a) => a.troops)
      .reduce((a, b) => a + b, 0);
    this.troopRate = config.troopIncreaseRate(player) * 10;

    const helpEnabled = new UserSettings().helpMessages();

    // Don't target veteran players
    if (helpEnabled && getGamesPlayed() < 20) {
      // Track outgoing attacks for 15-second threshold
      this.trackOutgoingAttacks(player);

      // Refresh border detection cache periodically
      this.refreshNearbyPlayers(player);

      // Compute notification
      this._notification = this.computeNotification(player, config);
    }

    const updates = this.game.updatesSinceLastTick();
    if (updates) {
      const myID = player.id();
      const bonusEvents = updates[GameUpdateType.BonusEvent];
      if (bonusEvents) {
        for (const ev of bonusEvents) {
          if (ev.player === myID && ev.gold > 0) {
            this.addGoldGain(BigInt(ev.gold));
          }
        }
      }
      const conquestEvents = updates[GameUpdateType.ConquestEvent];
      if (conquestEvents) {
        for (const ev of conquestEvents) {
          if (ev.conquerorId === myID && ev.gold > 0n) {
            this.addGoldGain(ev.gold);
          }
        }
      }
      const donateEvents = updates[GameUpdateType.DonateEvent];
      if (donateEvents) {
        for (const ev of donateEvents) {
          if (
            ev.donationType === "gold" &&
            ev.recipientId === myID &&
            ev.amount > 0n
          ) {
            this.addGoldGain(ev.amount);
          }
        }
      }
    }

    this.requestUpdate();
  }

  // Last-wins: when multiple gold events arrive in one tick, the pip shows
  // only the most recent amount (not a sum) — each gain restarts the pulse.
  private addGoldGain(amount: bigint) {
    this._goldGain = amount;
    this._goldGainPulseId++;
    if (this._goldGainTimeoutId !== null) {
      clearTimeout(this._goldGainTimeoutId);
    }
    this._goldGainTimeoutId = setTimeout(() => {
      this._goldGain = null;
      this._goldGainTimeoutId = null;
      this.requestUpdate();
    }, 2000);
  }

  private trackOutgoingAttacks(player: PlayerView) {
    const currentTick = this.game.ticks();
    for (const attack of player.outgoingAttacks()) {
      if (attack.targetID !== 0 && !attack.retreating) {
        this._lastAttackTickByTarget.set(attack.targetID, currentTick);
      }
    }
    // Clean up old entries
    for (const [playerID, tick] of this._lastAttackTickByTarget.entries()) {
      if (currentTick - tick > ControlPanel.ATTACK_THRESHOLD_TICKS * 2) {
        this._lastAttackTickByTarget.delete(playerID);
      }
    }
  }

  private refreshNearbyPlayers(player: PlayerView) {
    this._borderRefreshCounter++;
    if (
      this._borderRefreshCounter < ControlPanel.BORDER_REFRESH_INTERVAL ||
      this._borderTilesPromise !== null
    ) {
      return;
    }
    this._borderRefreshCounter = 0;
    this._borderTilesPromise = player.borderTiles().then((bt) => {
      this._borderTilesPromise = null;
      const myID = player.smallID();
      const nearby = new Set<number>();
      for (const tile of bt.borderTiles) {
        for (const neighbor of this.game.neighbors(tile as TileRef)) {
          const ownerID = this.game.ownerID(neighbor);
          if (ownerID !== 0 && ownerID !== myID) {
            nearby.add(ownerID);
          }
        }
      }
      this._nearbyPlayerIDs = nearby;
    });
  }

  private computeNotification(
    player: PlayerView,
    config: Config,
  ): { type: "warning" | "info"; message: string } | null {
    const currentTick = this.game.ticks();

    // Army limit warning
    const { gameMode, gameType } = config.gameConfig();
    const isPublicTeamGame =
      gameMode === GameMode.Team && gameType === GameType.Public;
    const canDonateTroops = config.donateTroops();
    if (isPublicTeamGame && canDonateTroops) {
      const ratio = this._troops / Math.max(this._maxTroops, 1);
      if (ratio >= config.armyLimitWarningThreshold()) {
        return {
          type: "warning",
          message: "control_panel.army_limit_warning",
        };
      }
    }

    // Low troops (Less than 1k) warning
    if (this._troops < 10000 && this._troops > 0) {
      return { type: "warning", message: "control_panel.low_troops_warning" };
    }

    // Info messages: check nearby players for traitors, AFK allies, AFK teammates
    for (const nearbyID of this._nearbyPlayerIDs) {
      let other;
      try {
        other = this.game.playerBySmallID(nearbyID);
      } catch {
        continue;
      }
      if (!other.isPlayer() || !other.isAlive()) continue;

      const lastAttackTick = this._lastAttackTickByTarget.get(nearbyID) ?? -1;
      const secondsSinceAttack = (currentTick - lastAttackTick) / 10;
      const hasNotAttackedRecently =
        lastAttackTick < 0 || secondsSinceAttack > 15;

      if (!hasNotAttackedRecently) continue;

      if (other.isTraitor() && player.isAlliedWith(other)) {
        return { type: "info", message: "control_panel.traitor_neighbor_info" };
      }
      if (other.isDisconnected() && player.isAlliedWith(other)) {
        return {
          type: "info",
          message: "control_panel.allied_afk_neighbor_info",
        };
      }
      if (other.isDisconnected() && player.isOnSameTeam(other)) {
        return {
          type: "info",
          message: "control_panel.teammate_afk_neighbor_info",
        };
      }
    }

    return null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    globalThis.removeEventListener(
      `${USER_SETTINGS_CHANGED_EVENT}:settings.attackRatio`,
      this.onAttackRatioSettingChanged,
    );
    if (this._goldGainTimeoutId !== null) {
      clearTimeout(this._goldGainTimeoutId);
      this._goldGainTimeoutId = null;
    }
  }

  private updateTroopIncrease() {
    const player = this.game?.myPlayer();
    if (player === null) return;
    const troopIncreaseRate = this.game.config().troopIncreaseRate(player);
    this._troopRateIsIncreasing =
      troopIncreaseRate >= this._lastTroopIncreaseRate;
    this._lastTroopIncreaseRate = troopIncreaseRate;
  }

  onAttackRatioChange(newRatio: number) {
    // The element outlives any one game; uiState only exists once init() ran.
    // Before that (the hidden slider on the lobby page) this.attackRatio holds
    // the value, and init() reloads it from UserSettings anyway.
    if (this.uiState === undefined) return;
    this.uiState.attackRatio = newRatio;
  }

  private onAttackRatioSettingChanged = () => {
    if (this.uiState === undefined) return;
    this.attackRatio = new UserSettings().attackRatio();
    this.onAttackRatioChange(this.attackRatio);
    this.requestUpdate();
  };

  setVisibile(visible: boolean) {
    this._isVisible = visible;
    this.requestUpdate();
  }

  private handleRatioSliderInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = Number(input.value);
    this.attackRatio = value / 100;
    this.onAttackRatioChange(this.attackRatio);
  }

  private handleRatioSliderPointerUp(e: Event) {
    (e.target as HTMLInputElement).blur();
  }

  private calculateTroopBar(): { greenPercent: number; orangePercent: number } {
    const base = Math.max(this._maxTroops, 1);
    const greenPercentRaw = (this._troops / base) * 100;
    const orangePercentRaw = (this._attackingTroops / base) * 100;

    const greenPercent = Math.max(0, Math.min(100, greenPercentRaw));
    const orangePercent = Math.max(
      0,
      Math.min(100 - greenPercent, orangePercentRaw),
    );

    return { greenPercent, orangePercent };
  }

  private renderMobileTroopBar() {
    const { greenPercent, orangePercent } = this.calculateTroopBar();
    return html`
      <div
        class="w-full h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: scaleX(${greenPercent / 100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-aquarius transition-transform duration-200 ease-out"
            style="transform: translateX(${greenPercent}%) scaleX(${orangePercent /
            100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-xs font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${renderTroops(this._troops)}</span
          >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${renderTroops(this._maxTroops)}</span
          >
        </div>
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
          translate="no"
        >
          <div
            class="flex items-center gap-0.5 px-1 ${this.tutorialHighlightClass(
              "troop_rate",
            )}"
          >
            <img
              src=${soldierIcon}
              alt=""
              aria-hidden="true"
              width="12"
              height="12"
              class="brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            />
            <span
              class="text-[10px] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${this
                ._troopRateIsIncreasing
                ? "text-green-400"
                : "text-orange-400"}"
              >+${renderTroops(this.troopRate)}/s</span
            >
          </div>
        </div>
      </div>
    `;
  }

  private renderDesktopTroopBar() {
    const { greenPercent, orangePercent } = this.calculateTroopBar();
    return html`
      <div
        class="w-full h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: scaleX(${greenPercent / 100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-aquarius transition-transform duration-200 ease-out"
            style="transform: translateX(${greenPercent}%) scaleX(${orangePercent /
            100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center text-lg font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="flex-1 flex justify-end h-full items-center pr-0.5">
            <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              >${renderTroops(this._troops)}</span
            >
          </span>
          <span
            class="h-full flex items-center px-0.5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >/</span
          >
          <span
            class="flex-1 flex justify-start h-full items-center pl-0.5 gap-0.5"
          >
            <span
              class="text-white tabular-nums w-[3.5rem] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              >${renderTroops(this._maxTroops)}</span
            >
            <img
              src=${soldierIcon}
              alt=""
              aria-hidden="true"
              width="22"
              height="22"
              class="shrink-0 brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ml-1.5"
            />
          </span>
        </div>
      </div>
    `;
  }

  private tutorialHighlightClass(target: TutorialHighlight): string {
    return this._tutorialHighlight === target ? "tutorial-highlight" : "";
  }

  private renderNotification() {
    if (!this._notification) return html``;
    const isWarning = this._notification.type === "warning";
    return html`
      <div
        class="flex items-center gap-1.5 px-1.5 py-1 rounded-md border text-xs font-medium mb-1 ${isWarning
          ? "border-orange-400/60 bg-orange-400/10 text-orange-300"
          : "border-blue-400/60 bg-blue-400/10 text-blue-300"}"
      >
        <span class="shrink-0">${isWarning ? "⚠" : "ℹ"}</span>
        <span>${translateText(this._notification.message)}</span>
      </div>
    `;
  }

  private renderDesktop() {
    return html`
      ${this.renderNotification()}
      <!-- Row 1: troop rate | troop bar | gold -->
      <div class="flex gap-1.5 items-center mb-1">
        <!-- Troop rate -->
        <div
          class="flex items-center gap-1 shrink-0 border rounded-md font-bold text-sm py-0.5 px-1 w-[5.5rem] ${this.tutorialHighlightClass(
            "troop_rate",
          )} ${this._troopRateIsIncreasing
            ? "border-green-400"
            : "border-orange-400"}"
          translate="no"
        >
          <img
            src=${soldierIcon}
            alt=""
            aria-hidden="true"
            width="13"
            height="13"
            class="shrink-0"
            style="filter: ${this._troopRateIsIncreasing
              ? "brightness(0) saturate(100%) invert(74%) sepia(44%) saturate(500%) hue-rotate(83deg) brightness(103%)"
              : "brightness(0) saturate(100%) invert(65%) sepia(60%) saturate(600%) hue-rotate(330deg) brightness(105%)"}"
          />
          <span
            class="text-sm font-bold tabular-nums ${this._troopRateIsIncreasing
              ? "text-green-400"
              : "text-orange-400"}"
            >+${renderTroops(this.troopRate)}/s</span
          >
        </div>
        <!-- Troop bar -->
        <div class="flex-1 ${this.tutorialHighlightClass("troops")}">
          ${this.renderDesktopTroopBar()}
        </div>
        ${this.renderFuelAmount("oil", this._oil, "control_panel.oil")}
        ${this.renderFuelAmount("gas", this._gas, "control_panel.gas")}
        ${this.renderFuelAmount(
          "uranium",
          this._uranium,
          "control_panel.uranium",
        )}
        <!-- Gold -->
        <div
          class="flex items-center gap-1 shrink-0 border rounded-md border-yellow-400 font-bold text-yellow-400 text-sm py-0.5 px-1 min-w-[4.5rem] relative ${this.tutorialHighlightClass(
            "gold",
          )}"
          translate="no"
        >
          ${this._goldGain !== null
            ? keyed(
                this._goldGainPulseId,
                html`<span
                  class="gold-gain-pop absolute -top-5 right-[5px] min-[1015px]:right-[9px] text-green-400 text-sm font-extrabold tabular-nums whitespace-nowrap pointer-events-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                  >+${renderNumber(this._goldGain)}</span
                >`,
              )
            : ""}
          ${renderResourceIcon("gold")}
          <span class="tabular-nums">${renderNumber(this._gold)}</span>
        </div>
      </div>
      <!-- Row 2: attack ratio | slider -->
      <div
        class="flex items-center gap-1.5 ${this.tutorialHighlightClass(
          "attack_ratio",
        )}"
        translate="no"
      >
        <div
          class="flex items-center gap-1 shrink-0 border border-gray-600 rounded-md px-1 py-0.5 text-sm font-bold text-white cursor-pointer w-[8rem]"
        >
          <img
            src=${swordIcon}
            alt=""
            aria-hidden="true"
            width="12"
            height="12"
            style="filter: brightness(0) invert(1);"
          />
          <span
            >${(this.attackRatio * 100).toFixed(0)}%
            (${renderTroops(
              (this.game?.myPlayer()?.troops() ?? 0) * this.attackRatio,
            )})</span
          >
        </div>
        <input
          type="range"
          min="1"
          max="100"
          .value=${String(Math.round(this.attackRatio * 100))}
          @input=${(e: Event) => this.handleRatioSliderInput(e)}
          @pointerup=${(e: Event) => this.handleRatioSliderPointerUp(e)}
          class="flex-1 h-1.5 accent-aquarius cursor-pointer"
        />
      </div>
    `;
  }

  private renderSidebar() {
    return html`
      ${this.renderNotification()}
      <section
        class="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/25 p-2"
      >
        <div
          class="flex items-center justify-between gap-2 rounded-lg border border-amber-300/25 bg-amber-300/5 px-2 py-1.5"
        >
          <div
            class="flex items-center gap-1.5 text-sm font-bold text-amber-200"
            translate="no"
          >
            ${renderResourceIcon("gold")}
            <span>${translateText("control_panel.gold")}</span>
          </div>
          <span class="tabular-nums text-sm font-bold text-amber-100"
            >${renderNumber(this._gold)}</span
          >
        </div>
        <div class="grid grid-cols-2 gap-1.5">
          ${[
            {
              icon: "oil" as const,
              value: this._oil,
              label: "control_panel.oil",
            },
            {
              icon: "gas" as const,
              value: this._gas,
              label: "control_panel.gas",
            },
            {
              icon: "uranium" as const,
              value: this._uranium,
              label: "control_panel.uranium",
            },
            {
              icon: "missile" as const,
              value: this._storedMissiles,
              label: "control_panel.missile_assets",
              capacity: this._missileCapacity,
            },
          ].map(
            ({ icon, value, label, capacity }) => html`
              <div
                class="flex min-w-0 flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-1 py-2"
                title=${translateText(label)}
              >
                ${renderResourceIcon(icon)}
                <span class="text-[0.65rem] text-zinc-400"
                  >${translateText(label)}</span
                >
                <span class="max-w-full truncate text-xs font-bold tabular-nums"
                  >${renderNumber(value)}${capacity === undefined
                    ? ""
                    : ` / ${renderNumber(capacity)}`}</span
                >
              </div>
            `,
          )}
        </div>
        <div class="flex items-center justify-between text-xs text-zinc-300">
          <span>${translateText("control_panel.troops")}</span>
          <span class="flex items-center gap-1 font-semibold tabular-nums">
            <img src=${soldierIcon} width="15" height="15" alt="" />
            ${renderTroops(this._troops)} / ${renderTroops(this._maxTroops)}
          </span>
        </div>
        ${this.renderDesktopTroopBar()}
        <div
          class="flex items-center justify-between rounded-lg border border-white/10 px-2 py-1.5 text-xs"
        >
          <span
            class=${this._troopRateIsIncreasing
              ? "text-green-300"
              : "text-orange-300"}
          >
            ${translateText("control_panel.troop_rate")}
          </span>
          <span
            class="font-bold tabular-nums ${this._troopRateIsIncreasing
              ? "text-green-300"
              : "text-orange-300"}"
          >
            +${renderTroops(this.troopRate)}/s
          </span>
        </div>
        <label
          class="flex flex-col gap-1 rounded-lg border border-white/10 px-2 py-1.5 text-xs"
        >
          <span class="flex items-center justify-between gap-2">
            <span class="flex items-center gap-1 text-zinc-300">
              <img src=${swordIcon} width="13" height="13" alt="" />
              ${translateText("control_panel.attack_ratio", {
                percent: (this.attackRatio * 100).toFixed(0),
                troops: renderTroops(this._troops * this.attackRatio),
              })}
            </span>
            <span class="font-bold text-amber-200"
              >${(this.attackRatio * 100).toFixed(0)}%</span
            >
          </span>
          <input
            type="range"
            min="1"
            max="100"
            .value=${String(Math.round(this.attackRatio * 100))}
            @input=${(e: Event) => this.handleRatioSliderInput(e)}
            @pointerup=${(e: Event) => this.handleRatioSliderPointerUp(e)}
            class="w-full accent-amber-400"
          />
        </label>
      </section>
    `;
  }

  private renderMobile() {
    return html`
      ${this.renderNotification()}
      <div class="flex gap-2 items-center">
        <!-- Gold -->
        <div
          class="flex items-center justify-center p-1 gap-0.5 border rounded-md border-yellow-400 font-bold text-yellow-400 text-xs w-[15%] shrink-0 relative ${this.tutorialHighlightClass(
            "gold",
          )}"
          translate="no"
        >
          ${this._goldGain !== null
            ? keyed(
                this._goldGainPulseId,
                html`<span
                  class="gold-gain-pop absolute -top-5 right-[5px] min-[1015px]:right-[9px] text-green-400 text-xs font-extrabold tabular-nums whitespace-nowrap pointer-events-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                  >+${renderNumber(this._goldGain)}</span
                >`,
              )
            : ""}
          ${renderResourceIcon("gold")}
          <span class="px-0.5">${renderNumber(this._gold)}</span>
        </div>
        ${this.renderFuelAmount("oil", this._oil, "control_panel.oil", true)}
        ${this.renderFuelAmount("gas", this._gas, "control_panel.gas", true)}
        ${this.renderFuelAmount(
          "uranium",
          this._uranium,
          "control_panel.uranium",
          true,
        )}
        ${this.renderFuelAmount(
          "missile",
          this._storedMissiles,
          "control_panel.missile_assets",
          true,
          this._missileCapacity,
        )}
        <!-- Troop bar -->
        <div
          class="w-[23%] shrink-0 flex items-center ${this.tutorialHighlightClass(
            "troops",
          )}"
        >
          ${this.renderMobileTroopBar()}
        </div>
        <!-- Sword + % and troop count label -->
        <div class="flex flex-col items-center justify-center shrink-0">
          <div class="flex items-center gap-0.5">
            <img
              src=${swordIcon}
              alt=""
              aria-hidden="true"
              width="10"
              height="10"
              style="filter: brightness(0) invert(1);"
            />
            <span
              class="text-white text-[11px] font-bold tabular-nums text-center leading-tight whitespace-pre-wrap"
              >${translateText("control_panel.attack_ratio", {
                percent: (this.attackRatio * 100).toFixed(0),
                troops: renderTroops(
                  (this.game?.myPlayer()?.troops() ?? 0) * this.attackRatio,
                ),
              })}</span
            >
          </div>
        </div>
        <!-- Attack ratio slider -->
        <div
          class="flex-1 ${this.tutorialHighlightClass("attack_ratio")}"
          translate="no"
        >
          <input
            type="range"
            min="1"
            max="100"
            .value=${String(Math.round(this.attackRatio * 100))}
            @input=${(e: Event) => this.handleRatioSliderInput(e)}
            @pointerup=${(e: Event) => this.handleRatioSliderPointerUp(e)}
            class="w-full h-1.5 accent-aquarius cursor-pointer"
          />
        </div>
      </div>
    `;
  }

  private renderFuelAmount(
    icon: ResourceIconType,
    amount: number,
    labelKey: string,
    mobile = false,
    capacity?: number,
  ) {
    const label = translateText(labelKey);
    return html`
      <div
        class="flex items-center justify-center gap-1 shrink-0 border rounded-md ${mobile
          ? icon === "missile"
            ? "w-[13%] p-1 text-[10px]"
            : "w-[9%] p-1 text-[10px]"
          : "min-w-[4rem] px-1 py-0.5 text-sm"} font-bold text-white border-gray-500 tabular-nums"
        title=${label}
        aria-label=${`${label}: ${renderNumber(amount)}`}
        translate="no"
      >
        ${renderResourceIcon(icon)}
        <span
          >${renderNumber(amount)}${capacity === undefined
            ? ""
            : `/${renderNumber(capacity)}`}</span
        >
      </div>
    `;
  }

  render() {
    return html`
      <style>
        @keyframes gold-gain-pop {
          0% {
            transform: translateY(4px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .gold-gain-pop {
          animation: gold-gain-pop 0.25s ease-out;
        }
      </style>
      <div
        class="pointer-events-auto ${this._isVisible
          ? "w-full text-sm"
          : "hidden"}"
        @contextmenu=${(e: MouseEvent) => e.preventDefault()}
      >
        <div class="hidden max-[639px]:block">${this.renderMobile()}</div>
        <div class="block max-[639px]:hidden">${this.renderSidebar()}</div>
      </div>
    `;
  }

  createRenderRoot() {
    return this; // Disable shadow DOM to allow Tailwind styles
  }
}
