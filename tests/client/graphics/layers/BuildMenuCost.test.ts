import { render } from "lit";
import { describe, expect, it, vi } from "vitest";

// Side-effect import: the @customElement decorator registers <build-menu>
// when the module is evaluated, and a type-only reference would not evaluate it.
import { TileRef } from "@openfront/engine-api/game/GameMap";
import { BuildableUnit, UnitType } from "@openfront/engine-api/game/GameTypes";
import {
  buildIconDataUrl,
  renderBuildIcon,
  STRUCTURE_ICON_TYPES,
} from "../../../../src/client/hud/layers/BuildIcons";
import "../../../../src/client/hud/layers/BuildMenu";
import type { BuildMenu } from "../../../../src/client/hud/layers/BuildMenu";
import type { GameView } from "../../../../src/client/view";

function makeMenu(): BuildMenu {
  return document.createElement("build-menu") as BuildMenu;
}

const item = (unitType: UnitType) => ({ unitType, icon: "" }) as any;

describe("BuildMenu.cost", () => {
  it("returns the buildable's cost for a matching unit type", () => {
    const menu = makeMenu();
    menu.playerBuildables = [
      { type: UnitType.City, canBuild: true, canUpgrade: false, cost: 125n },
      { type: UnitType.Port, canBuild: false, canUpgrade: false, cost: 5n },
    ] as unknown as BuildableUnit[];

    // Skips non-matching entries before finding the match.
    expect(menu.cost(item(UnitType.Port))).toBe(5n);
    expect(menu.cost(item(UnitType.City))).toBe(125n);
  });

  describe("BuildMenu refresh", () => {
    it("coalesces tick refreshes and ignores results after the menu closes", async () => {
      let resolveBuildables!: (buildables: BuildableUnit[]) => void;
      const buildables = vi.fn(
        () =>
          new Promise<BuildableUnit[]>((resolve) => {
            resolveBuildables = resolve;
          }),
      );
      const menu = makeMenu();
      let ticks = 0;
      menu.game = {
        ticks: () => ticks,
        myPlayer: () => ({ buildables }),
        config: () => ({ isUnitDisabled: () => false }),
      } as unknown as GameView;

      menu.showMenu(1 as TileRef);
      for (let i = 0; i < 20; i++) menu.tick();
      expect(buildables).toHaveBeenCalledTimes(1);

      menu.hideMenu();
      resolveBuildables([]);
      await Promise.resolve();

      expect(menu.playerBuildables).toBeNull();
    });

    it("refreshes buildable costs at most once per ten game ticks", async () => {
      const buildables = vi.fn().mockResolvedValue([]);
      const menu = makeMenu();
      let ticks = 0;
      menu.game = {
        ticks: () => ticks,
        myPlayer: () => ({ buildables }),
        config: () => ({ isUnitDisabled: () => false }),
      } as unknown as GameView;

      menu.showMenu(1 as TileRef);
      await new Promise((resolve) => setTimeout(resolve, 0));
      ticks = 9;
      menu.tick();
      expect(buildables).toHaveBeenCalledTimes(1);

      ticks = 10;
      menu.tick();
      expect(buildables).toHaveBeenCalledTimes(2);
    });
  });

  describe("BuildIcons structure atlas", () => {
    it("uses the exact build-menu SVG for every map structure sprite", () => {
      for (const type of STRUCTURE_ICON_TYPES) {
        const container = document.createElement("div");
        render(renderBuildIcon(type), container);
        const svg = container.querySelector("svg");
        if (!svg) {
          throw new Error(`Failed to render the build-menu icon for ${type}`);
        }

        expect(buildIconDataUrl(type)).toBe(
          `data:image/svg+xml,${encodeURIComponent(svg.outerHTML)}`,
        );
      }
    });
  });

  describe("BuildIcons radial menu assets", () => {
    it("serializes the redesigned structure SVG for radial menu use", () => {
      const icon = buildIconDataUrl(UnitType.UraniumPlant);

      expect(icon).toMatch(/^data:image\/svg\+xml,/);
      const svg = decodeURIComponent(icon.slice("data:image/svg+xml,".length));
      expect(svg).toContain("<svg");
      expect(svg).toContain("http://www.w3.org/2000/svg");
      expect(svg).toContain("<path");
    });
  });

  it("falls back to 0 when the unit type is not buildable here", () => {
    const menu = makeMenu();
    menu.playerBuildables = [
      { type: UnitType.City, canBuild: true, canUpgrade: false, cost: 125n },
    ] as unknown as BuildableUnit[];

    expect(menu.cost(item(UnitType.Factory))).toBe(0n);
  });

  it("falls back to 0 before the buildables have arrived", () => {
    const menu = makeMenu();
    menu.playerBuildables = null;

    expect(menu.cost(item(UnitType.City))).toBe(0n);
  });
});
