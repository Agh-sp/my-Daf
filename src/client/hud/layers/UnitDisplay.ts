import {
  BuildableUnit,
  BuildMenus,
  Gold,
  PlayerBuildableUnitType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { renderNumber } from "@openfront/engine-lib/Format";
import { EventBus } from "@openfront/shared/EventBus";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Controller } from "../../Controller";
import { ToggleStructureEvent } from "../../InputHandler";
import { UIState } from "../../UIState";
import { UserSettings } from "../../UserSettings";
import { translateText } from "../../Utils";
import { GameView } from "../../view";
import { TutorialHighlight, TutorialHighlightEvent } from "../Tutorial";
import { renderResourceIcon, renderUnitIcon } from "./BuildIcons";

@customElement("unit-display")
export class UnitDisplay extends LitElement implements Controller {
  public game: GameView;
  public eventBus: EventBus;
  public uiState: UIState;
  private playerBuildables: BuildableUnit[] | null = null;
  private keybinds: Record<string, { value: string; key: string }> = {};
  private _cities = 0;
  private _warships = 0;
  private _factories = 0;
  private _missileSilo = 0;
  private _port = 0;
  private _defensePost = 0;
  private _samLauncher = 0;
  private allDisabled = false;
  private _hoveredUnit: PlayerBuildableUnitType | null = null;
  private tutorialHighlight: PlayerBuildableUnitType | null = null;

  createRenderRoot() {
    return this;
  }

  init() {
    const config = this.game.config();
    const userSettings = new UserSettings();

    this.keybinds = userSettings.parsedUserKeybinds();

    this.allDisabled = BuildMenus.types.every((u) => config.isUnitDisabled(u));

    const highlightUnits: Partial<
      Record<TutorialHighlight, PlayerBuildableUnitType>
    > = {
      city: UnitType.City,
      port: UnitType.Port,
      defense_post: UnitType.DefensePost,
      factory: UnitType.Factory,
      warship: UnitType.Warship,
      silo: UnitType.MissileSilo,
      atom: UnitType.AtomBomb,
      hydrogen: UnitType.HydrogenBomb,
      mirv: UnitType.MIRV,
      sam: UnitType.SAMLauncher,
    };
    this.eventBus.on(TutorialHighlightEvent, (e) => {
      this.tutorialHighlight = (e.target && highlightUnits[e.target]) ?? null;
      this.requestUpdate();
    });
    this.requestUpdate();
  }

  private cost(item: UnitType): Gold {
    for (const bu of this.playerBuildables ?? []) {
      if (bu.type === item) {
        return bu.cost;
      }
    }
    return 0n;
  }

  private canBuild(item: UnitType): boolean {
    if (this.game?.config().isUnitDisabled(item)) return false;
    const player = this.game?.myPlayer();
    const config = this.game?.config();
    if (!player || !config) return false;
    switch (item) {
      case UnitType.AtomBomb:
      case UnitType.BallisticMissile:
      case UnitType.HydrogenBomb:
      case UnitType.MIRV: {
        const fuel = config.missileFuelCost(item);
        return (
          this.cost(item) <= player.gold() &&
          player.units(UnitType.MissileSilo).length > 0 &&
          player.oil() >= fuel.oil &&
          player.gas() >= fuel.gas &&
          player.uranium() >= fuel.uranium
        );
      }
      case UnitType.Warship:
        return (
          this.cost(item) <= player.gold() &&
          player.units(UnitType.Port).length > 0 &&
          player.oil() >= config.warshipBuildFuelCost().oil
        );
      default:
        return (
          this.cost(item) <= player.gold() &&
          (item !== UnitType.TransportShip ||
            player.oil() >= config.transportShipFuelCost().oil)
        );
    }
  }

  private totalStoredMissiles(): number {
    return (this.game.myPlayer()?.units(UnitType.Arsenal) ?? []).reduce(
      (total, arsenal) =>
        total +
        (arsenal.isActive() && !arsenal.isUnderConstruction()
          ? arsenal.missilesStored()
          : 0),
      0,
    );
  }

  private totalMissileCapacity(): number {
    return (this.game.myPlayer()?.units(UnitType.Arsenal) ?? []).reduce(
      (total, arsenal) =>
        total +
        (arsenal.isActive() && !arsenal.isUnderConstruction()
          ? arsenal.missileCapacity()
          : 0),
      0,
    );
  }

  private fuelUsage(unitType: UnitType) {
    const config = this.game?.config();
    if (!config) return [];

    switch (unitType) {
      case UnitType.AtomBomb:
      case UnitType.BallisticMissile:
      case UnitType.HydrogenBomb:
      case UnitType.MIRV: {
        const cost = config.missileFuelCost(unitType);
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
      case UnitType.Warship:
        return [
          {
            label: "build_menu.oil_per_ship",
            amount: config.warshipBuildFuelCost().oil,
            icon: "oil" as const,
          },
          {
            label: "build_menu.fuel_per_shot",
            amount: config.warshipShellFuelCost().oil,
            icon: "oil" as const,
          },
          {
            label: "build_menu.fuel_per_transport_attack",
            amount: config.transportShipFuelCost().oil,
            icon: "oil" as const,
          },
        ].filter(({ amount }) => amount > 0);
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

  tick() {
    const player = this.game?.myPlayer();
    if (!player) return;
    player.buildables(undefined, BuildMenus.types).then((buildables) => {
      this.playerBuildables = buildables;
    });
    this._cities = player.totalUnitLevels(UnitType.City);
    this._missileSilo = player.totalUnitLevels(UnitType.MissileSilo);
    this._port = player.totalUnitLevels(UnitType.Port);
    this._defensePost = player.totalUnitLevels(UnitType.DefensePost);
    this._samLauncher = player.totalUnitLevels(UnitType.SAMLauncher);
    this._factories = player.totalUnitLevels(UnitType.Factory);
    this._warships = player.totalUnitLevels(UnitType.Warship);
    this.requestUpdate();
  }

  render() {
    const myPlayer = this.game?.myPlayer();
    if (
      !this.game ||
      !myPlayer ||
      this.game.inSpawnPhase() ||
      !myPlayer.isAlive()
    ) {
      return null;
    }
    if (this.allDisabled) {
      return null;
    }
    return html`
      <div class="unit-display-shell">
        <h2
          class="px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-amber-200/80"
        >
          ${translateText("build_menu.title")}
        </h2>
        <div class="unit-display-list">
          ${this.renderUnitItem(
            this._cities,
            UnitType.City,
            "city",
            this.keybinds["buildCity"]?.key ?? "1",
          )}
          ${this.renderUnitItem(
            this._factories,
            UnitType.Factory,
            "factory",
            this.keybinds["buildFactory"]?.key ?? "2",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.OilField),
            UnitType.OilField,
            "oil_field",
            this.keybinds["buildOilField"]?.key ?? "o",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.GasField),
            UnitType.GasField,
            "gas_field",
            this.keybinds["buildGasField"]?.key ?? "i",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.UraniumPlant),
            UnitType.UraniumPlant,
            "uranium_plant",
            this.keybinds["buildUraniumPlant"]?.key ?? "j",
          )}
          ${this.renderUnitItem(
            this._port,
            UnitType.Port,
            "port",
            this.keybinds["buildPort"]?.key ?? "3",
          )}
          ${this.renderUnitItem(
            this._defensePost,
            UnitType.DefensePost,
            "defense_post",
            this.keybinds["buildDefensePost"]?.key ?? "4",
          )}
          ${this.renderUnitItem(
            this._missileSilo,
            UnitType.MissileSilo,
            "missile_silo",
            this.keybinds["buildMissileSilo"]?.key ?? "5",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.Arsenal),
            UnitType.Arsenal,
            "arsenal",
            this.keybinds["buildArsenal"]?.key ?? "Shift+A",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.MissileFactory),
            UnitType.MissileFactory,
            "missile_factory",
            this.keybinds["buildMissileFactory"]?.key ?? "m",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.OilStorage),
            UnitType.OilStorage,
            "oil_storage",
            this.keybinds["buildOilStorage"]?.key ?? "l",
          )}
          ${this.renderUnitItem(
            myPlayer.totalUnitLevels(UnitType.GasStorage),
            UnitType.GasStorage,
            "gas_storage",
            this.keybinds["buildGasStorage"]?.key ?? "h",
          )}
          ${this.renderUnitItem(
            this._samLauncher,
            UnitType.SAMLauncher,
            "sam_launcher",
            this.keybinds["buildSamLauncher"]?.key ?? "6",
          )}
          ${this.renderUnitItem(
            this._warships,
            UnitType.Warship,
            "warship",
            this.keybinds["buildWarship"]?.key ?? "7",
          )}
          ${this.renderUnitItem(
            null,
            UnitType.BallisticMissile,
            "ballistic_missile",
            this.keybinds["buildBallisticMissile"]?.key ?? "b",
          )}
          ${this.renderUnitItem(
            null,
            UnitType.AtomBomb,
            "atom_bomb",
            this.keybinds["buildAtomBomb"]?.key ?? "8",
          )}
          ${this.renderUnitItem(
            null,
            UnitType.HydrogenBomb,
            "hydrogen_bomb",
            this.keybinds["buildHydrogenBomb"]?.key ?? "9",
          )}
          ${this.renderUnitItem(
            null,
            UnitType.MIRV,
            "mirv",
            this.keybinds["buildMIRV"]?.key ?? "0",
          )}
        </div>
      </div>
    `;
  }

  private renderUnitItem(
    number: number | null,
    unitType: PlayerBuildableUnitType,
    structureKey: string,
    hotkey: string,
  ) {
    if (this.game.config().isUnitDisabled(unitType)) {
      return html``;
    }
    const selected = this.uiState.ghostStructure === unitType;
    const hovered = this._hoveredUnit === unitType;
    const displayHotkey = hotkey
      .replace("Digit", "")
      .replace("Key", "")
      .toUpperCase();

    return html`
      <div
        class="unit-display-item"
        @mouseenter=${() => {
          this._hoveredUnit = unitType;
          this.requestUpdate();
        }}
        @mouseleave=${() => {
          this._hoveredUnit = null;
          this.requestUpdate();
        }}
      >
        ${hovered
          ? html`
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-gray-200 text-center w-max text-xs bg-gray-800/90 backdrop-blur-xs rounded-sm p-1 z-[100] shadow-lg pointer-events-none"
              >
                <div class="font-bold text-sm mb-1">
                  ${translateText(
                    "unit_type." + structureKey,
                  )}${` [${displayHotkey}]`}
                </div>
                <div class="p-2">
                  ${translateText("build_menu.desc." + structureKey)}
                </div>
                ${unitType === UnitType.Arsenal
                  ? html`<div
                      class="border-t border-white/10 px-2 py-1 text-amber-200"
                    >
                      ${translateText("build_menu.desc.arsenal_stock", {
                        amount: `${renderNumber(this.totalStoredMissiles())} / ${renderNumber(this.totalMissileCapacity())}`,
                      })}
                    </div>`
                  : null}
                ${unitType === UnitType.Warship
                  ? html`<div
                      class="mt-1 px-2 py-1 text-[10px] text-cyan-300 border-t border-white/10"
                    >
                      ⇧ ${translateText("build_menu.warship_shift_hint")}
                    </div>`
                  : null}
                <div class="flex items-center justify-center gap-1">
                  ${renderResourceIcon("gold")}
                  <span class="text-yellow-300"
                    >${renderNumber(this.cost(unitType))}</span
                  >
                </div>
                ${this.fuelUsage(unitType).map(
                  ({ label, amount, icon }) => html`
                    <div
                      class="mt-1 flex items-center justify-center gap-1 text-cyan-200"
                    >
                      <span>${translateText(label)}</span>
                      ${renderResourceIcon(icon)}
                      <span>${renderNumber(amount)}</span>
                    </div>
                  `,
                )}
              </div>
            `
          : null}
        <div
          class="unit-display-button ${this.canBuild(unitType)
            ? ""
            : "is-unavailable"}
             ${selected ? "is-selected" : ""}
             ${this.tutorialHighlight === unitType ? "tutorial-highlight" : ""}"
          @click=${() => {
            if (selected) {
              this.uiState.ghostStructure = null;
            } else if (this.canBuild(unitType)) {
              this.uiState.ghostStructure = unitType;
            }
            this.requestUpdate();
          }}
          @mouseenter=${() => {
            switch (unitType) {
              case UnitType.AtomBomb:
              case UnitType.BallisticMissile:
              case UnitType.HydrogenBomb:
                this.eventBus?.emit(
                  new ToggleStructureEvent([
                    UnitType.MissileSilo,
                    UnitType.SAMLauncher,
                  ]),
                );
                break;
              case UnitType.Warship:
                this.eventBus?.emit(new ToggleStructureEvent([UnitType.Port]));
                break;
              default:
                this.eventBus?.emit(new ToggleStructureEvent([unitType]));
            }
          }}
          @mouseleave=${() =>
            this.eventBus?.emit(new ToggleStructureEvent(null))}
        >
          ${html`<div class="unit-display-key">${displayHotkey}</div>`}
          <div class="unit-display-content">
            ${renderUnitIcon(unitType)}
            <span class="unit-display-name"
              >${translateText(`unit_type.${structureKey}`)}</span
            >
            ${number !== null
              ? html`<span class="unit-display-count"
                  >${renderNumber(number)}</span
                >`
              : null}
          </div>
        </div>
      </div>
    `;
  }
}
