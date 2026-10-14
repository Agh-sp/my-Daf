import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

const indexHtml = fs.readFileSync(
  path.join(process.cwd(), "index.html"),
  "utf8",
);
const styles = fs.readFileSync(
  path.join(process.cwd(), "src/client/styles.css"),
  "utf8",
);
const eventsDisplay = fs.readFileSync(
  path.join(process.cwd(), "src/client/hud/layers/EventsDisplay.ts"),
  "utf8",
);

describe("game HUD layout", () => {
  it("anchors attacks separately from the lower activity feed", () => {
    expect(indexHtml).toContain(
      '<attacks-display\n          class="game-attacks-anchor w-full pointer-events-auto"',
    );
    expect(styles).toContain(
      ".game-attacks-anchor {\n  position: fixed !important;",
    );
    expect(styles).toContain(
      ".game-activity-feed-anchor {\n  position: fixed !important;",
    );
  });

  it("keeps battlefield news fixed at the upper center of the viewport", () => {
    expect(styles).toContain(
      "  transform: none !important;\n}\n\n.game-activity-feed-anchor > section",
    );
    expect(eventsDisplay).toContain(
      "fixed left-1/2 top-[max(3.5rem,env(safe-area-inset-top))]",
    );
  });

  it("gives the in-game command and construction panels a Persian-inspired defense theme", () => {
    expect(styles).toContain(".in-game #game-action-sidebar {");
    expect(styles).toContain("repeating-linear-gradient(");
    expect(styles).toContain(".unit-display-shell h2 {");
    expect(styles).toContain(".game-battle-news-badge {");
    expect(styles).toContain(".game-attacks-anchor > div {");
  });
});
