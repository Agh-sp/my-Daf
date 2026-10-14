import { TileRef } from "@openfront/engine-api/game/GameMap";
import {
  BuildableUnit,
  BuildMenus,
  Gold,
  PlayerBuildableUnitType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { renderNumber } from "@openfront/engine-lib/Format";
import { EventBus } from "@openfront/shared/EventBus";
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { translateText } from "../../../client/Utils";
import { Controller } from "../../Controller";
import {
  CloseViewEvent,
  MouseDownEvent,
  ShowBuildMenuEvent,
  ShowEmojiMenuEvent,
} from "../../InputHandler";
import { TransformHandler } from "../../TransformHandler";
import {
  BuildUnitIntentEvent,
  SendUpgradeStructureIntentEvent,
} from "../../Transport";
import { UIState } from "../../UIState";
import { GameView } from "../../view";
import { renderBuildIcon, renderResourceIcon } from "./BuildIcons";

export interface BuildItemDisplay {
  unitType: PlayerBuildableUnitType;
  description?: string;
  key?: string;
  countable?: boolean;
}

export const buildTable: BuildItemDisplay[][] = [
  [
    {
      unitType: UnitType.AtomBomb,
      description: "build_menu.desc.atom_bomb",
      key: "unit_type.atom_bomb",
      countable: false,
    },
    {
      unitType: UnitType.BallisticMissile,
      description: "build_menu.desc.ballistic_missile",
      key: "unit_type.ballistic_missile",
      countable: false,
    },
    {
      unitType: UnitType.MIRV,
      description: "build_menu.desc.mirv",
      key: "unit_type.mirv",
      countable: false,
    },
    {
      unitType: UnitType.HydrogenBomb,
      description: "build_menu.desc.hydrogen_bomb",
      key: "unit_type.hydrogen_bomb",
      countable: false,
    },
  ],
  [
    {
      unitType: UnitType.Warship,
      description: "build_menu.desc.warship",
      key: "unit_type.warship",
      countable: true,
    },
    {
      unitType: UnitType.Port,
      description: "build_menu.desc.port",
      key: "unit_type.port",
      countable: true,
    },
    {
      unitType: UnitType.MissileSilo,
      description: "build_menu.desc.missile_silo",
      key: "unit_type.missile_silo",
      countable: true,
    },
    {
      unitType: UnitType.SAMLauncher,
      description: "build_menu.desc.sam_launcher",
      key: "unit_type.sam_launcher",
      countable: true,
    },
    {
      unitType: UnitType.DefensePost,
      description: "build_menu.desc.defense_post",
      key: "unit_type.defense_post",
      countable: true,
    },
  ],
  [
    {
      unitType: UnitType.City,
      description: "build_menu.desc.city",
      key: "unit_type.city",
      countable: true,
    },
    {
      unitType: UnitType.Factory,
      description: "build_menu.desc.factory",
      key: "unit_type.factory",
      countable: true,
    },
    {
      unitType: UnitType.OilField,
      description: "build_menu.desc.oil_field",
      key: "unit_type.oil_field",
      countable: true,
    },
    {
      unitType: UnitType.GasField,
      description: "build_menu.desc.gas_field",
      key: "unit_type.gas_field",
      countable: true,
    },
    {
      unitType: UnitType.UraniumPlant,
      description: "build_menu.desc.uranium_plant",
      key: "unit_type.uranium_plant",
      countable: true,
    },
    {
      unitType: UnitType.MissileFactory,
      description: "build_menu.desc.missile_factory",
      key: "unit_type.missile_factory",
      countable: true,
    },
    {
      unitType: UnitType.OilStorage,
      description: "build_menu.desc.oil_storage",
      key: "unit_type.oil_storage",
      countable: true,
    },
    {
      unitType: UnitType.GasStorage,
      description: "build_menu.desc.gas_storage",
      key: "unit_type.gas_storage",
      countable: true,
    },
  ],
];

export const flattenedBuildTable = buildTable.flat();
const BUILD_MENU_REFRESH_INTERVAL_TICKS = 10;

@customElement("build-menu")
export class BuildMenu extends LitElement implements Controller {
  public game: GameView;
  public eventBus: EventBus;
  public uiState: UIState;
  private clickedTile: TileRef;
  private refreshRequestId = 0;
  private lastRefreshTick = Number.NEGATIVE_INFINITY;
  private refreshInFlight = false;
  public playerBuildables: BuildableUnit[] | null = null;
  private filteredBuildTable: BuildItemDisplay[][] = buildTable;
  public transformHandler: TransformHandler;

  init() {
    this.eventBus.on(ShowBuildMenuEvent, (e) => {
      if (!this.game.myPlayer()?.isAlive()) {
        return;
      }
      if (!this._hidden) {
        // Players sometimes hold control while building a unit,
        // so if the menu is already open, ignore the event.
        return;
      }
      const clickedCell = this.transformHandler.screenToWorldCoordinates(
        e.x,
        e.y,
      );
      if (!this.game.isValidCoord(clickedCell.x, clickedCell.y)) {
        return;
      }
      const tile = this.game.ref(clickedCell.x, clickedCell.y);
      this.showMenu(tile);
    });
    this.eventBus.on(CloseViewEvent, () => this.hideMenu());
    this.eventBus.on(ShowEmojiMenuEvent, () => this.hideMenu());
    this.eventBus.on(MouseDownEvent, () => this.hideMenu());
  }

  tick() {
    if (!this._hidden) {
      this.refresh();
    }
  }

  static styles = css`
    :host {
      display: block;
    }
    .build-menu {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      background: linear-gradient(
        145deg,
        rgba(12, 34, 37, 0.98),
        rgba(5, 17, 21, 0.98)
      );
      border: 1px solid rgba(92, 210, 195, 0.32);
      padding: 20px;
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.68),
        0 0 35px rgba(92, 210, 195, 0.09);
      border-radius: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: min(1000px, 95vw);
      max-height: 95vh;
      overflow: auto;
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
    }
    .build-description {
      font-size: 0.68rem;
      color: #bdd1ce;
      line-height: 1.35;
    }
    .build-fuel-cost {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 0.65rem;
      color: #bdd1ce;
      text-align: center;
    }
    .resource-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
    .build-cost .resource-icon {
      width: 18px;
      height: 18px;
      margin-left: 2px;
    }
    .build-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(126px, 1fr));
      gap: 12px;
      width: 100%;
    }
    .build-button {
      position: relative;
      width: 100%;
      min-width: 0;
      min-height: 154px;
      border: 1px solid rgba(179, 224, 217, 0.13);
      background: linear-gradient(
        145deg,
        rgba(24, 53, 54, 0.9),
        rgba(8, 23, 27, 0.96)
      );
      color: #e5edf7;
      border-radius: 17px;
      cursor: pointer;
      transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease,
        filter 0.18s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 13px 9px;
      gap: 7px;
    }
    .build-button:not(:disabled):hover {
      background: linear-gradient(
        155deg,
        rgba(64, 53, 27, 0.92),
        rgba(24, 23, 19, 0.98)
      );
      transform: translateY(-3px);
      border-color: rgba(92, 210, 195, 0.72);
      box-shadow:
        0 10px 26px rgba(0, 0, 0, 0.28),
        0 0 22px rgba(92, 210, 195, 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.12);
    }
    .build-button:not(:disabled):active {
      transform: translateY(0) scale(0.98);
    }
    .build-button:disabled {
      background: linear-gradient(
        145deg,
        rgba(21, 30, 32, 0.92),
        rgba(10, 17, 19, 0.96)
      );
      border-color: rgba(255, 255, 255, 0.1);
      cursor: not-allowed;
    }
    .build-button:disabled .build-icon {
      filter: grayscale(0.72) saturate(0.55) brightness(0.78)
        drop-shadow(0 3px 6px rgba(0, 0, 0, 0.42));
    }
    .build-button:disabled .build-cost {
      color: #e6bd68;
    }
    .build-icon {
      display: block;
      width: 58px;
      height: 58px;
      margin-bottom: 3px;
      filter: drop-shadow(0 5px 9px rgba(0, 0, 0, 0.46))
        drop-shadow(0 0 10px rgba(120, 200, 210, 0.16));
      transition:
        filter 0.18s ease,
        transform 0.18s ease;
    }
    .build-button:not(:disabled):hover .build-icon {
      transform: translateY(-1px) scale(1.06);
      filter: drop-shadow(0 7px 11px rgba(0, 0, 0, 0.5))
        drop-shadow(0 0 13px rgba(120, 200, 210, 0.28));
    }
    .build-name {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 0;
      text-align: center;
      line-height: 1.25;
    }
    .build-cost {
      font-size: 13px;
      color: #f3cb78;
      font-weight: 550;
    }
    .hidden {
      display: none !important;
    }
    .build-count-chip {
      position: absolute;
      top: 7px;
      right: 7px;
      background-color: rgba(12, 12, 12, 0.85);
      color: #f4d26e;
      padding: 2px 8px;
      border-radius: 10000px;
      transition: all 0.2s ease;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-content: center;
      border: 1px solid rgba(92, 210, 195, 0.24);
    }
    .build-button:not(:disabled):hover > .build-count-chip {
      background-color: #433716;
      border-color: #5cd2c3;
    }
    .build-button:not(:disabled):active > .build-count-chip {
      background-color: #56461a;
    }
    .build-button:disabled > .build-count-chip {
      background-color: #151515;
      border-color: #33302a;
      cursor: not-allowed;
    }
    .build-count {
      font-weight: bold;
      font-size: 12px;
    }

    @media (max-width: 768px) {
      .build-menu {
        padding: 12px;
        max-height: 80vh;
        width: 94vw;
      }
      .build-button {
        min-height: 120px;
        padding: 8px 5px;
        gap: 4px;
      }
      .build-icon {
        width: 44px;
        height: 44px;
      }
      .build-name {
        font-size: 12px;
        margin-bottom: 3px;
      }
      .build-cost {
        font-size: 11px;
      }
      .build-count {
        font-weight: bold;
        font-size: 10px;
      }
      .build-count-chip {
        padding: 1px 5px;
      }
    }

    @media (max-width: 480px) {
      .build-menu {
        padding: 8px;
        max-height: 70vh;
      }
      .build-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 7px;
      }
      .build-button {
        min-height: 102px;
        padding: 7px 4px;
      }
      .build-icon {
        width: 40px;
        height: 40px;
      }
      .build-name {
        font-size: 10px;
        margin-bottom: 2px;
      }
      .build-cost {
        font-size: 9px;
      }
      .build-fuel-cost {
        font-size: 8px;
      }
      .build-count {
        font-weight: bold;
        font-size: 8px;
      }
      .build-count-chip {
        padding: 0 3px;
      }
      .build-button img {
        width: 24px;
        height: 24px;
      }
      .build-cost img {
        width: 10px;
        height: 10px;
      }
    }
  `;

  @state()
  private _hidden = true;

  public canBuildOrUpgrade(item: BuildItemDisplay): boolean {
    if (this.game?.myPlayer() === null || this.playerBuildables === null) {
      return false;
    }
    const unit = this.playerBuildables.find((u) => u.type === item.unitType);
    return unit ? unit.canBuild !== false || unit.canUpgrade !== false : false;
  }

  public cost(item: BuildItemDisplay): Gold {
    for (const bu of this.playerBuildables ?? []) {
      if (bu.type === item.unitType) {
        return bu.cost;
      }
    }
    return 0n;
  }

  public count(item: BuildItemDisplay): string {
    const player = this.game?.myPlayer();
    if (!player) {
      return "?";
    }

    return player.totalUnitLevels(item.unitType).toString();
  }

  private fuelUsage(item: BuildItemDisplay) {
    const config = this.game?.config();
    if (!config) return [];

    switch (item.unitType) {
      case UnitType.AtomBomb:
      case UnitType.BallisticMissile:
      case UnitType.HydrogenBomb:
      case UnitType.MIRV: {
        const cost = config.missileFuelCost(item.unitType);
        return [
          ...(cost.gas > 0
            ? [
                {
                  label: "build_menu.fuel_per_launch",
                  amount: cost.gas,
                  icon: "gas" as const,
                },
              ]
            : []),
          ...(cost.uranium > 0
            ? [
                {
                  label: "build_menu.uranium_per_bomb",
                  amount: cost.uranium,
                  icon: "uranium" as const,
                },
              ]
            : []),
        ];
      }
      case UnitType.Warship: {
        const shellCost = config.warshipShellFuelCost();
        const boatCost = config.transportShipFuelCost();
        return [
          ...(shellCost.oil > 0
            ? [
                {
                  label: "build_menu.fuel_per_shot",
                  amount: shellCost.oil,
                  icon: "oil" as const,
                },
              ]
            : []),
          ...(boatCost.oil > 0
            ? [
                {
                  label: "build_menu.fuel_per_transport_attack",
                  amount: boatCost.oil,
                  icon: "oil" as const,
                },
              ]
            : []),
          ...(config.warshipBuildFuelCost().oil > 0
            ? [
                {
                  label: "build_menu.oil_per_ship",
                  amount: config.warshipBuildFuelCost().oil,
                  icon: "oil" as const,
                },
              ]
            : []),
        ];
      }
      case UnitType.Port: {
        const cost = config.tradeShipFuelCost();
        return cost.oil > 0
          ? [
              {
                label: "build_menu.oil_per_trade_ship",
                amount: cost.oil,
                icon: "oil" as const,
              },
            ]
          : [];
      }
      default:
        return [];
    }
  }

  public sendBuildOrUpgrade(buildableUnit: BuildableUnit, tile: TileRef): void {
    if (buildableUnit.canUpgrade !== false) {
      this.eventBus.emit(
        new SendUpgradeStructureIntentEvent(
          buildableUnit.canUpgrade,
          buildableUnit.type,
        ),
      );
    } else if (buildableUnit.canBuild) {
      const rocketDirectionUp =
        buildableUnit.type === UnitType.AtomBomb ||
        buildableUnit.type === UnitType.HydrogenBomb
          ? this.uiState.rocketDirectionUp
          : undefined;
      this.eventBus.emit(
        new BuildUnitIntentEvent(buildableUnit.type, tile, rocketDirectionUp),
      );
    }
    this.hideMenu();
  }

  render() {
    return html`
      <div
        class="build-menu ${this._hidden ? "hidden" : ""}"
        @contextmenu=${(e: MouseEvent) => e.preventDefault()}
      >
        ${this.filteredBuildTable.map(
          (row) => html`
            <div class="build-row">
              ${row.map((item) => {
                const buildableUnit = this.playerBuildables?.find(
                  (bu) => bu.type === item.unitType,
                );
                if (buildableUnit === undefined) {
                  return html``;
                }
                const enabled =
                  buildableUnit.canBuild !== false ||
                  buildableUnit.canUpgrade !== false;
                return html`
                  <button
                    class="build-button"
                    @click=${() =>
                      this.sendBuildOrUpgrade(buildableUnit, this.clickedTile)}
                    ?disabled=${!enabled}
                    title=${!enabled
                      ? translateText("build_menu.not_enough_money")
                      : ""}
                  >
                    ${renderBuildIcon(item.unitType)}
                    <span class="build-name">
                      ${item.key && translateText(item.key)}
                    </span>
                    <span class="build-description"
                      >${item.description &&
                      translateText(item.description)}</span
                    >
                    ${this.fuelUsage(item).map(
                      ({ label, amount, icon }) => html`
                        <span class="build-fuel-cost" translate="no">
                          ${translateText(label)} ${renderResourceIcon(icon)}
                          ${renderNumber(amount)}
                        </span>
                      `,
                    )}
                    <span class="build-cost" translate="no">
                      ${renderNumber(
                        this.game && this.game.myPlayer() ? this.cost(item) : 0,
                      )}
                      ${renderResourceIcon("gold")}
                    </span>
                    ${item.countable
                      ? html`<div class="build-count-chip">
                          <span class="build-count">${this.count(item)}</span>
                        </div>`
                      : ""}
                  </button>
                `;
              })}
            </div>
          `,
        )}
      </div>
    `;
  }

  hideMenu() {
    this._hidden = true;
    this.refreshRequestId++;
    this.refreshInFlight = false;
    this.lastRefreshTick = Number.NEGATIVE_INFINITY;
    this.requestUpdate();
  }

  showMenu(clickedTile: TileRef) {
    this.refreshRequestId++;
    this.clickedTile = clickedTile;
    this._hidden = false;
    this.playerBuildables = null;
    this.lastRefreshTick = Number.NEGATIVE_INFINITY;
    this.refresh();
  }

  private refresh() {
    if (
      this.refreshInFlight ||
      this.game.ticks() - this.lastRefreshTick <
        BUILD_MENU_REFRESH_INTERVAL_TICKS
    ) {
      return;
    }

    const player = this.game.myPlayer();
    if (!player) return;

    const requestId = ++this.refreshRequestId;
    const requestedTile = this.clickedTile;
    this.refreshInFlight = true;
    this.lastRefreshTick = this.game.ticks();
    this.filteredBuildTable = this.getBuildableUnits();

    player
      .buildables(requestedTile, BuildMenus.types)
      .then((buildables) => {
        if (
          requestId !== this.refreshRequestId ||
          this._hidden ||
          this.clickedTile !== requestedTile
        ) {
          return;
        }
        this.playerBuildables = buildables;
        this.requestUpdate();
      })
      .catch((error: unknown) => {
        console.error("Failed to refresh build menu:", error);
      })
      .finally(() => {
        if (requestId === this.refreshRequestId) {
          this.refreshInFlight = false;
        }
      });
  }

  private getBuildableUnits(): BuildItemDisplay[][] {
    return buildTable.map((row) =>
      row.filter((item) => !this.game?.config()?.isUnitDisabled(item.unitType)),
    );
  }

  get isVisible() {
    return !this._hidden;
  }
}
