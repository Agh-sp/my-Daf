import { describe, expect, it } from "vitest";
import { countryReligionKey } from "../../../src/client/view/CountryReligion";

describe("country religion data", () => {
  it("returns the largest 2020 affiliation for covered countries", () => {
    expect(countryReligionKey("ir")).toBe("islam");
    expect(countryReligionKey("cn")).toBe("unaffiliated");
    expect(countryReligionKey("TW")).toBe("other");
    expect(countryReligionKey("il")).toBe("judaism");
  });

  it("does not infer an affiliation for places absent from the source", () => {
    expect(countryReligionKey("ax")).toBeUndefined();
    expect(countryReligionKey("unknown")).toBeUndefined();
  });
});
