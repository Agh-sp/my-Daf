import { describe, expect, it } from "vitest";
import { layoutString } from "../../src/client/render/gl/passes/name-pass/TextLayout";
import {
  CHAR_RANGE,
  MAX_CHARS,
} from "../../src/client/render/gl/passes/name-pass/Types";

describe("name pass text layout", () => {
  it("transliterates Persian names before writing to the Latin glyph atlas", () => {
    const glyph = {
      advance: new Float32Array(CHAR_RANGE).fill(6),
      xOffset: new Float32Array(CHAR_RANGE),
      visW: new Float32Array(CHAR_RANGE).fill(5),
    };
    const charCodes = new Uint8Array(MAX_CHARS);
    const cursors = new Float32Array(MAX_CHARS);

    layoutString(
      "ایران",
      glyph,
      new Int8Array(CHAR_RANGE * CHAR_RANGE),
      charCodes,
      cursors,
    );

    expect(String.fromCharCode(...charCodes.slice(0, 4))).toBe("iran");
  });
});
