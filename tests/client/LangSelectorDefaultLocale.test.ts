import { describe, expect, it } from "vitest";
import metadata from "../../resources/lang/metadata.json";
import { LangSelector } from "../../src/client/LangSelector";

function langSelectorInternals() {
  const selector = new LangSelector();
  return selector as unknown as {
    defaultLocale(): string;
    getClosestSupportedLang(lang: string): string;
  };
}

describe("LangSelector default locale", () => {
  it("defaults to Persian", () => {
    expect(langSelectorInternals().defaultLocale()).toBe("fa");
  });

  it("does not offer Hebrew or the Israeli flag", () => {
    expect(
      metadata.some(({ code, svg }) => code === "he" || svg === "il"),
    ).toBe(false);
    expect(langSelectorInternals().getClosestSupportedLang("he-IL")).toBe("fa");
  });
});
