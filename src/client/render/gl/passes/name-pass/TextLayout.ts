/**
 * Pure CPU text shaping — cursor position computation and number formatting.
 * No WebGL dependency.
 */

import type { GlyphTables } from "./AtlasData";
import { CHAR_RANGE, MAX_CHARS } from "./Types";

export interface LayoutResult {
  charCodes: Uint8Array; // char code per slot (MAX_CHARS, zero-padded)
  cursors: Float32Array; // centered cursor X per slot (MAX_CHARS)
  halfWidth: number; // visual half-width in font units
}

const PERSIAN_NAME_TRANSLITERATION: Record<string, string> = {
  ا: "a",
  آ: "a",
  أ: "a",
  إ: "e",
  ء: "",
  ؤ: "v",
  ئ: "y",
  ب: "b",
  پ: "p",
  ت: "t",
  ث: "s",
  ج: "j",
  چ: "ch",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "z",
  ر: "r",
  ز: "z",
  ژ: "zh",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "z",
  ط: "t",
  ظ: "z",
  ع: "a",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ک: "k",
  گ: "g",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  ة: "h",
  و: "v",
  ي: "y",
  ی: "y",
  ى: "a",
  "۰": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
  "٠": "0",
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
};

function textForNameAtlas(text: string): string {
  const transliterated = Array.from(text, (character) => {
    const codePoint = character.codePointAt(0)!;
    if (codePoint <= 0xff) return character;
    return PERSIAN_NAME_TRANSLITERATION[character] ?? "";
  }).join("");
  return transliterated.replace(/^a[yi]/, "i");
}

/**
 * Lay out a string: encode char codes, compute advance-based cursor X
 * positions, then center on visual bounds.
 *
 * Writes into caller-provided buffers to avoid allocation.
 */
export function layoutString(
  text: string,
  glyph: GlyphTables,
  kernTable: Int8Array,
  charCodes: Uint8Array,
  cursors: Float32Array,
): number {
  charCodes.fill(0);
  cursors.fill(0);
  const atlasText = textForNameAtlas(text);
  const len = Math.min(atlasText.length, MAX_CHARS);

  for (let i = 0; i < len; i++) {
    charCodes[i] = atlasText.charCodeAt(i);
  }

  if (len === 0) return 0;

  // Advance-based cursor positions
  let cumulative = 0;
  let prevCode = 0;
  for (let i = 0; i < len; i++) {
    const code = charCodes[i];
    cursors[i] = cumulative;
    let adv = glyph.advance[code];
    if (i > 0) {
      adv += kernTable[prevCode * CHAR_RANGE + code];
    }
    cumulative += adv;
    prevCode = code;
  }

  // Center on visual bounds (not advance bounds)
  const firstCode = charCodes[0];
  const lastCode = charCodes[len - 1];
  const visualLeft = cursors[0] + glyph.xOffset[firstCode];
  const visualRight =
    cursors[len - 1] + glyph.xOffset[lastCode] + glyph.visW[lastCode];
  const visualCenter = (visualLeft + visualRight) * 0.5;
  for (let i = 0; i < len; i++) {
    cursors[i] -= visualCenter;
  }

  return (visualRight - visualLeft) * 0.5;
}
