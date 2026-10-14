import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { Footer } from "../../../src/client/components/Footer";

describe("page-footer brand labels", () => {
  let footer: Footer;

  beforeEach(() => {
    if (!customElements.get("page-footer")) {
      customElements.define("page-footer", Footer);
    }
  });

  afterEach(() => {
    footer?.remove();
  });

  it("uses the product edition label consistently", async () => {
    footer = document.createElement("page-footer") as Footer;
    document.body.appendChild(footer);
    await footer.updateComplete;

    const line = footer.querySelector(".footer-version");
    expect(line?.textContent?.trim()).toBe("Edition 1");
    expect(line?.getAttribute("data-i18n")).toBe("main.edition");
  });

  it("shows the named developer without linking to an external profile", async () => {
    footer = document.createElement("page-footer") as Footer;
    document.body.appendChild(footer);
    await footer.updateComplete;

    const developer = footer.querySelector('[data-i18n="main.developer"]');
    expect(developer?.tagName).toBe("SPAN");
    expect(footer.querySelector('a[href*="github.com"]')).toBeNull();
    expect(footer.querySelector('a[href*="t.me"]')).toBeNull();
  });
});
