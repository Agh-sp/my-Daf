import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
// Side-effect import registers <news-modal>; a type-only import would be
// elided and leave the element inert.
import "../../src/client/NewsModal";
import { NewsModal } from "../../src/client/NewsModal";

beforeEach(() => {
  document.body.innerHTML = "";
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("NewsModal", () => {
  it("starts with the game introduction and initial update", () => {
    const modal = new NewsModal();
    expect(modal.markdown).toContain("# دفاع خاورمیانه");
    expect(modal.markdown).toContain("به‌روزرسانی آغازین");
    expect(modal.markdown).toContain("شروع سریع");
  });

  it("shows the static introduction without fetching a changelog", () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const modal = new NewsModal();
    modal.open();
    modal.open();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(modal.markdown).toContain("نقشهٔ ایران");
  });
});
