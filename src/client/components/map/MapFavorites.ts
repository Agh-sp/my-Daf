import { GameMapType } from "@openfront/engine-api/game/GameTypes";
import { TemplateResult, html } from "lit";

const FAVORITES_KEY = "map-favorites";

const validMaps = new Set<string>(Object.values(GameMapType));

export function getFavoriteMaps(): GameMapType[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (raw === null) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (m): m is GameMapType => typeof m === "string" && validMaps.has(m),
    );
  } catch (error) {
    console.warn("Failed to read favorite maps from localStorage:", error);
    return [];
  }
}

export function isFavoriteMap(map: GameMapType): boolean {
  return getFavoriteMaps().includes(map);
}

export function toggleFavoriteMap(map: GameMapType): GameMapType[] {
  const favorites = getFavoriteMaps();
  const index = favorites.indexOf(map);
  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push(map);
  }
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.warn("Failed to save favorite maps to localStorage:", error);
  }
  return favorites;
}

export function favoriteMapIcon(
  filled: boolean,
  className = "",
): TemplateResult {
  return html`<svg
    viewBox="0 0 24 24"
    class=${className}
    fill=${filled ? "currentColor" : "none"}
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21L12 16.8 5.5 21V4.5a1 1 0 0 1 1-1Z" />
    <path d="M12 7.2c-2.4 1.7-2.4 3.5 0 5.1 2.4-1.6 2.4-3.4 0-5.1Z" />
    <path d="M12 12.2v2.1m0-1.7-2.1-1m2.1 1 2.1-1" />
  </svg>`;
}
