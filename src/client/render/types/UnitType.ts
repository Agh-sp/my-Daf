/**
 * Canonical unit type string constants.
 *
 * These match the strings the upstream game sends in UnitEventUpdate.unitType.
 * Use these instead of raw string literals to prevent typos and enable
 * find-all-references.
 */

// ---------------------------------------------------------------------------
// Individual unit type constants
// ---------------------------------------------------------------------------

// Mobile units
export const UT_TRANSPORT = "Transport" as const;
export const UT_TRADE_SHIP = "Trade Ship" as const;
export const UT_WARSHIP = "Warship" as const;
export const UT_SPEEDBOAT = "Speedboat" as const;
export const UT_ATOM_BOMB = "Atom Bomb" as const;
export const UT_BALLISTIC_MISSILE = "Ballistic Missile" as const;
export const UT_HYDROGEN_BOMB = "Hydrogen Bomb" as const;
export const UT_MIRV = "MIRV" as const;
export const UT_SAM_MISSILE = "SAMMissile" as const;
export const UT_SHELL = "Shell" as const;
export const UT_MIRV_WARHEAD = "MIRV Warhead" as const;
export const UT_TRAIN = "Train" as const;

// Structures
export const UT_CITY = "City" as const;
export const UT_PORT = "Port" as const;
export const UT_FACTORY = "Factory" as const;
export const UT_DEFENSE_POST = "Defense Post" as const;
export const UT_SAM_LAUNCHER = "SAM Launcher" as const;
export const UT_MISSILE_SILO = "Missile Silo" as const;
export const UT_OIL_FIELD = "Oil Field" as const;
export const UT_GAS_FIELD = "Gas Field" as const;
export const UT_URANIUM_PLANT = "Uranium Plant" as const;
export const UT_RADAR = "Radar" as const;
export const UT_MISSILE_FACTORY = "Missile Factory" as const;
export const UT_ARSENAL = "Arsenal" as const;
export const UT_OIL_STORAGE = "Oil Storage" as const;
export const UT_GAS_STORAGE = "Gas Storage" as const;
export const UT_UNKNOWN_STRUCTURE = "Unknown Structure" as const;

// ---------------------------------------------------------------------------
// Derived sets
// ---------------------------------------------------------------------------

export const STRUCTURE_TYPES: ReadonlySet<string> = new Set([
  UT_CITY,
  UT_PORT,
  UT_FACTORY,
  UT_DEFENSE_POST,
  UT_SAM_LAUNCHER,
  UT_MISSILE_SILO,
  UT_OIL_FIELD,
  UT_GAS_FIELD,
  UT_URANIUM_PLANT,
  UT_RADAR,
  UT_MISSILE_FACTORY,
  UT_ARSENAL,
  UT_OIL_STORAGE,
  UT_GAS_STORAGE,
]);

export const NUKE_TYPES: ReadonlySet<string> = new Set([
  UT_ATOM_BOMB,
  UT_BALLISTIC_MISSILE,
  UT_HYDROGEN_BOMB,
  UT_MIRV,
]);

/** Nuke types whose rendered position is interpolated lastPos→pos each render
 *  frame (UnitPass). Their trails stamp only up to lastPos so the tail never
 *  leads the smoothly-moving missile. */
export const SMOOTHED_NUKE_TYPES: ReadonlySet<string> = new Set([
  UT_ATOM_BOMB,
  UT_BALLISTIC_MISSILE,
  UT_HYDROGEN_BOMB,
  UT_MIRV,
  UT_MIRV_WARHEAD,
]);

/** Units that leave a trail on the map (TrailManager). */
export const TRAIL_TYPES: ReadonlySet<string> = new Set([
  UT_TRANSPORT,
  UT_ATOM_BOMB,
  UT_BALLISTIC_MISSILE,
  UT_HYDROGEN_BOMB,
  UT_MIRV,
  UT_MIRV_WARHEAD,
]);

/** Blast radii (in tiles) matching upstream DefaultConfig.nukeMagnitudes(). */
export const NUKE_MAGNITUDES: Readonly<
  Record<string, { inner: number; outer: number }>
> = {
  [UT_ATOM_BOMB]: { inner: 12, outer: 30 },
  [UT_BALLISTIC_MISSILE]: { inner: 5, outer: 12 },
  [UT_HYDROGEN_BOMB]: { inner: 80, outer: 100 },
  [UT_MIRV_WARHEAD]: { inner: 12, outer: 18 },
};

// ---------------------------------------------------------------------------
// Ordered lists (atlas column order — used by GPU passes + header)
// ---------------------------------------------------------------------------

/** All unit type strings in the canonical order used by RendererConfig.unitTypes. */
export const ALL_UNIT_TYPES = [
  UT_TRANSPORT,
  UT_TRADE_SHIP,
  UT_WARSHIP,
  UT_SPEEDBOAT,
  UT_ATOM_BOMB,
  UT_BALLISTIC_MISSILE,
  UT_HYDROGEN_BOMB,
  UT_MIRV,
  UT_SAM_MISSILE,
  UT_SHELL,
  UT_MIRV_WARHEAD,
  UT_CITY,
  UT_PORT,
  UT_FACTORY,
  UT_DEFENSE_POST,
  UT_SAM_LAUNCHER,
  UT_MISSILE_SILO,
  UT_OIL_FIELD,
  UT_GAS_FIELD,
  UT_URANIUM_PLANT,
  UT_RADAR,
  UT_MISSILE_FACTORY,
  UT_ARSENAL,
  UT_OIL_STORAGE,
  UT_GAS_STORAGE,
  UT_TRAIN,
] as const;
