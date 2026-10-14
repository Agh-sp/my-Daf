import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

const styles = fs.readFileSync(
  path.join(process.cwd(), "src/client/styles.css"),
  "utf8",
);

describe("public site visual theme", () => {
  it("scopes the Persian-inspired navigation and home styling outside gameplay", () => {
    expect(styles).toContain("body:not(.in-game) desktop-nav-bar nav::after");
    expect(styles).toContain("body:not(.in-game) #page-play .home-guide-card");
    expect(styles).not.toContain(
      "body:not(.in-game) #page-play .mideast-medallion::before",
    );
    expect(styles).toContain("body:not(.in-game) page-footer::before");
  });

  it("uses simple saffron-teal accents across public pages", () => {
    expect(styles).not.toContain("repeating-conic-gradient(");
    expect(styles).toContain("rgba(45, 212, 191");
    expect(styles).toContain("rgba(241, 200, 76");
    expect(styles).toContain("body:not(.in-game) #sidebar-menu");
  });
});
