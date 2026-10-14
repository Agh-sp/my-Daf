import {
  PlayerBuildableUnitType,
  UnitType,
} from "@openfront/engine-api/game/GameTypes";
import { html, render, svg, TemplateResult } from "lit";

export type ResourceIconType = "gold" | "oil" | "gas" | "uranium" | "missile";

type IconType = PlayerBuildableUnitType | ResourceIconType;
type IconPalette = { main: string; light: string; shade: string; glow: string };

export const STRUCTURE_ICON_TYPES: readonly PlayerBuildableUnitType[] = [
  UnitType.City,
  UnitType.Port,
  UnitType.Factory,
  UnitType.DefensePost,
  UnitType.SAMLauncher,
  UnitType.MissileSilo,
  UnitType.Arsenal,
  UnitType.OilField,
  UnitType.GasField,
  UnitType.UraniumPlant,
  UnitType.Radar,
  UnitType.MissileFactory,
  UnitType.OilStorage,
  UnitType.GasStorage,
];

const palettes: Record<IconType, IconPalette> = {
  [UnitType.AtomBomb]: {
    main: "#ff765e",
    light: "#ffe08a",
    shade: "#c83f63",
    glow: "#642b50",
  },
  [UnitType.BallisticMissile]: {
    main: "#688cff",
    light: "#d9e7ff",
    shade: "#3e54c4",
    glow: "#263479",
  },
  [UnitType.MIRV]: {
    main: "#b17aff",
    light: "#f1d8ff",
    shade: "#7447ce",
    glow: "#462677",
  },
  [UnitType.HydrogenBomb]: {
    main: "#ff895d",
    light: "#ffe69a",
    shade: "#df5149",
    glow: "#773643",
  },
  [UnitType.Warship]: {
    main: "#3dd4e6",
    light: "#d4ffff",
    shade: "#268cae",
    glow: "#174b69",
  },
  [UnitType.TransportShip]: {
    main: "#58c9ff",
    light: "#def8ff",
    shade: "#3489c9",
    glow: "#214c79",
  },
  [UnitType.Port]: {
    main: "#176b70",
    light: "#8dfff0",
    shade: "#12434d",
    glow: "#0b2631",
  },
  [UnitType.MissileSilo]: {
    main: "#245b76",
    light: "#9beeff",
    shade: "#183d53",
    glow: "#102936",
  },
  [UnitType.Arsenal]: {
    main: "#84621f",
    light: "#ffe18a",
    shade: "#50391f",
    glow: "#261e1c",
  },
  [UnitType.SAMLauncher]: {
    main: "#1e7668",
    light: "#8dffe0",
    shade: "#164c50",
    glow: "#0d292f",
  },
  [UnitType.DefensePost]: {
    main: "#946329",
    light: "#ffdf86",
    shade: "#583c2a",
    glow: "#2a2221",
  },
  [UnitType.City]: {
    main: "#207451",
    light: "#a6ffd1",
    shade: "#174a3c",
    glow: "#0c292a",
  },
  [UnitType.Factory]: {
    main: "#a45a30",
    light: "#ffd18a",
    shade: "#633b31",
    glow: "#30242a",
  },
  [UnitType.OilField]: {
    main: "#98602b",
    light: "#ffd58c",
    shade: "#573a2b",
    glow: "#2b2229",
  },
  [UnitType.GasField]: {
    main: "#176a77",
    light: "#8dfff0",
    shade: "#164953",
    glow: "#0d2935",
  },
  [UnitType.UraniumPlant]: {
    main: "#4c7834",
    light: "#c7ff83",
    shade: "#31553d",
    glow: "#1b302e",
  },
  [UnitType.Radar]: {
    main: "#3c68a2",
    light: "#a9e8ff",
    shade: "#344a7e",
    glow: "#202d4a",
  },
  [UnitType.MissileFactory]: {
    main: "#a3483f",
    light: "#ffc18a",
    shade: "#693344",
    glow: "#302332",
  },
  [UnitType.OilStorage]: {
    main: "#89522e",
    light: "#ffd29b",
    shade: "#5c3d35",
    glow: "#2d252d",
  },
  [UnitType.GasStorage]: {
    main: "#176a77",
    light: "#8dfff0",
    shade: "#164953",
    glow: "#0d2935",
  },
  gold: {
    main: "#ffd447",
    light: "#fff8b4",
    shade: "#ed952c",
    glow: "#784a24",
  },
  oil: {
    main: "#ffad52",
    light: "#ffecb1",
    shade: "#c86a3e",
    glow: "#663845",
  },
  gas: {
    main: "#42dfd2",
    light: "#d7fff3",
    shade: "#238db0",
    glow: "#194768",
  },
  uranium: {
    main: "#a7e84d",
    light: "#f1ff9d",
    shade: "#5ba951",
    glow: "#315346",
  },
  missile: {
    main: "#ff8754",
    light: "#ffe7bd",
    shade: "#c84d3a",
    glow: "#6b3040",
  },
};

function shape(type: IconType, c: (typeof palettes)[IconType]) {
  switch (type) {
    case UnitType.AtomBomb:
    case UnitType.HydrogenBomb:
      return svg`
        <path d="M24 7v5m-8-3 3 5m13-5-3 5" stroke=${c.light} />
        <path
          d="M24 12c-5 0-9 4-9 9 0 7 9 18 9 18s9-11 9-18c0-5-4-9-9-9Z"
          fill=${c.shade}
          stroke=${c.glow}
          stroke-width="2.6"
        />
        <path
          d="M24 14c-3.8 0-7 3.1-7 7.2 0 4.8 5 11.6 7 14.2 2-2.6 7-9.4 7-14.2 0-4.1-3.2-7.2-7-7.2Z"
          fill=${c.main}
          stroke=${c.light}
        />
        <path d="m20 18 4-2 4 2v5l-4 3-4-3v-5Z" fill=${c.shade} />
        <circle cx="24" cy="21" r="2.6" fill=${c.light} />
        <path d="M20 31c1 2 2.5 4.2 4 6.2 1.5-2 3-4.2 4-6.2" fill=${c.main} />
      `;
    case UnitType.BallisticMissile:
    case UnitType.MIRV:
      return svg`
        <path d="M24 5c-2 3-4 7-4 11v4h8v-4c0-4-2-8-4-11Z" fill=${c.light} />
        <path
          d="M24 6c-5 5-8 13-8 21v8h16v-8c0-8-3-16-8-21Z"
          fill=${c.shade}
          stroke=${c.glow}
          stroke-width="2.5"
        />
        <path
          d="M24 10c-3.7 4.8-5.5 11-5.5 17v5h11v-5c0-6-1.8-12.2-5.5-17Z"
          fill=${c.main}
          stroke=${c.light}
        />
        <path
          d="m17 27-7 6v5l10-3m11-8 7 6v5l-10-3"
          fill=${c.shade}
          stroke=${c.glow}
          stroke-width="2.5"
        />
        <path d="M24 11v14" stroke=${c.light} stroke-width="2.5" />
        <path d="m20 35 4 9 4-9Z" fill=${c.light} />
        <path d="M21 28h6m-6 3h6" stroke=${c.shade} stroke-width="1.5" />
      `;
    case UnitType.Warship:
      return svg`
        <path d="M7 30h34l-6 10H14L7 30Z" fill=${c.glow} />
        <path d="M8 28h32l-5 9H15l-7-9Z" fill=${c.main} stroke=${c.light} />
        <path
          d="M14 28V18h9v10m3 0V12h9v16"
          fill=${c.shade}
          stroke=${c.light}
        />
        <rect x="16" y="20" width="4" height="5" rx="1" fill=${c.light} />
        <rect x="28" y="15" width="5" height="6" rx="1" fill=${c.main} />
        <path
          d="M7 42c4-3 7 3 11 0s7 3 11 0 7 3 11 0"
          fill="none"
          stroke=${c.light}
          stroke-width="2.3"
        />
        <path d="m11 34 5 3m9-3 5 3" stroke=${c.shade} stroke-width="2" />
      `;
    case UnitType.TransportShip:
      return svg`
        <path d="M7 31h34l-6 9H14l-7-9Z" fill=${c.glow} />
        <path d="M8 29h32l-5 8H15l-7-8Z" fill=${c.main} stroke=${c.light} />
        <path d="M14 28V17h20v11Z" fill=${c.shade} stroke=${c.light} />
        <path d="M18 20h12v2H18zm0 4h12v2H18z" fill=${c.light} />
        <path
          d="M11 42c4-2 7 2 11 0s7 2 11 0 5 1 6 0"
          fill="none"
          stroke=${c.light}
          stroke-width="2"
        />
        <path d="M21 17v-5h7v5" fill=${c.main} stroke=${c.light} />
        <path d="M21 12h7" stroke=${c.glow} stroke-width="2" />
      `;
    case UnitType.Port:
      return svg`
        <g transform="translate(4 10) scale(.3)">
          <path d="M9 91q14-11 28 0t28 0 28 0 28 0" fill="none" stroke="#41cfff" stroke-width="4"/>
          <path d="M23 67h111l-17 24H42Z" fill="#264958" stroke="#8eefff" stroke-width="3" stroke-linejoin="round"/>
          <path d="M41 67V51h46v16" fill="#155c63" stroke="#a1fff0" stroke-width="3"/>
          <path d="M47 58h33M47 64h33" stroke="#b8fff5" stroke-width="3"/>
          <path d="M87 47h29l16 20H87Z" fill="#2d7590" stroke="#a5edff" stroke-width="3" stroke-linejoin="round"/>
          <path d="M98 45V23h19v24m-10-24V13" fill="none" stroke="#ffe08b" stroke-width="4"/>
          <path d="M95 31h24" stroke="#ffe08b" stroke-width="4"/>
          <circle cx="107" cy="12" r="4" fill="#ffd36e"/>
        </g>
      `;
    case UnitType.MissileSilo:
      return svg`
        <g transform="translate(8 7) scale(.42)">
          <path d="M75 8 62 29v39l13 10 13-10V29Z" fill="#dce9df" stroke="#fff0b1" stroke-width="3" stroke-linejoin="round"/>
          <path d="m75 8-13 21h26Z" fill="#ff9b71" stroke="#fff0b1" stroke-width="2"/>
          <path d="M64 36h22m-22 8h22" stroke="#ff9b71" stroke-width="3"/>
          <path d="m62 57-10 15 15-4m21-11 10 15-15-4" fill="#8da8a0" stroke="#e8fff3" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="m58 87 9-26m25 26-9-26" fill="none" stroke="#a7eaff" stroke-width="4" stroke-linecap="round"/>
          <path d="M47 89h56" stroke="#75e8ff" stroke-width="4" stroke-linecap="round"/>
          <path d="M69 77v10m12-10v10" stroke="#d9eee5" stroke-width="3"/>
        </g>
      `;
    case UnitType.Arsenal:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M17 91V51l51-30 51 30v40Z" fill="#584526" stroke="#ffd882" stroke-width="3" stroke-linejoin="round"/>
          <path d="M25 87V55l43-25 43 25v32Z" fill="#7b5b2c" stroke="#ffe5a0" stroke-width="2"/>
          <path d="M36 59h65v28H36z" fill="#15252a" stroke="#d2b86e" stroke-width="3"/>
          <path d="M45 70h45" stroke="#cdd5cf" stroke-width="5"/>
          <path d="m48 70 12-12m11 12 12-12m-33 12 12 12m11-12 12 12" stroke="#f5c56b" stroke-width="3"/>
          <path d="M57 55V39m21 16V39" stroke="#d7e3dc" stroke-width="4"/>
          <path d="M9 96h118" stroke="#ffd882" stroke-width="3"/>
        </g>
      `;
    case UnitType.OilStorage:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M22 45h42v55H22zm53 0h42v55H75z" fill="#68462e" stroke="#ffd29b" stroke-width="3"/>
          <path d="M27 50h32v44H27zm53 0h32v44H80z" fill="#94602d" stroke="#ffdaa0" stroke-width="2"/>
          <path d="M27 61h32m-32 13h32m-32 13h32m21-26h32m-32 13h32m-32 13h32" stroke="#d59b59" stroke-width="3"/>
          <path d="M34 50V39h18v11m53 0V39h18v11" fill="none" stroke="#ffe1aa" stroke-width="3"/>
          <path d="M36 37h14m53 0h14" stroke="#ffbf72" stroke-width="3"/>
          <path d="M41 67q-8 10 0 16 8-6 0-16m53 0q-8 10 0 16 8-6 0-16" fill="#ffc47b"/>
        </g>
      `;
    case UnitType.GasStorage:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M20 44h43v55H20zm56 0h43v55H76z" fill="#174e5a" stroke="#8dfff0" stroke-width="3"/>
          <path d="M25 49h33v45H25zm56 0h33v45H81z" fill="#176a77"/>
          <path d="M25 61h33m-33 13h33m-33 13h33m23-26h33m-33 13h33m-33 13h33" stroke="#58bbc3" stroke-width="3"/>
          <path d="M31 44V33h20v11m56 0V33h20v11" fill="none" stroke="#b9ffff" stroke-width="3"/>
          <path d="M35 31h12m56 0h12" stroke="#b9ffff" stroke-width="3"/>
          <circle cx="42" cy="71" r="6" fill="#a8faff"/><circle cx="98" cy="71" r="6" fill="#a8faff"/>
        </g>
      `;
    case UnitType.SAMLauncher:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M19 94h103q8 0 8 8t-8 8H19q-8 0-8-8t8-8Z" fill="#173c4b" stroke="#82eaff" stroke-width="3"/>
          <path d="M29 93h85" stroke="#b9fff4" stroke-width="2"/>
          <circle cx="30" cy="102" r="4" fill="#8dfff0"/><circle cx="46" cy="102" r="4" fill="#8dfff0"/><circle cx="62" cy="102" r="4" fill="#8dfff0"/><circle cx="78" cy="102" r="4" fill="#8dfff0"/><circle cx="94" cy="102" r="4" fill="#8dfff0"/><circle cx="110" cy="102" r="4" fill="#8dfff0"/>
          <path d="M43 91h57L92 78H51Z" fill="#344954" stroke="#c1eaf0" stroke-width="3" stroke-linejoin="round"/>
          <path d="M64 81 89 42l10 6-25 40Z" fill="#526d71" stroke="#d9f3e9" stroke-width="3" stroke-linejoin="round"/>
          <path d="m83 50 19-30 9 6-19 30Z" fill="#d9e8df" stroke="#fff0b1" stroke-width="3" stroke-linejoin="round"/>
          <path d="m101 22 10 4 5-8-3-11-9 7Z" fill="#ff8e7d" stroke="#ffe0a0" stroke-width="2" stroke-linejoin="round"/>
          <path d="m89 47 11 7-7 8-11-7Zm-9 14 11 7-7 8-11-7Z" fill="#ffc45f" stroke="#fff0b1" stroke-width="2" stroke-linejoin="round"/>
        </g>
      `;
    case UnitType.Radar:
      return svg`
        <path d="M8 37h32l-5 6H13l-5-6Z" fill=${c.glow} />
        <path d="M10 35h28l-4 5H14l-4-5Z" fill=${c.shade} stroke=${c.light} />
        <path d="M18 34 24 18l6 16Z" fill=${c.main} stroke=${c.light} />
        <circle cx="24" cy="17" r="3.2" fill=${c.light} stroke=${c.shade} />
        <path d="M24 17 35 9" stroke=${c.light} stroke-width="2.4" />
        <path
          d="M17 14a10 10 0 0 1 14 0m-18-4a16 16 0 0 1 22 0"
          fill="none"
          stroke=${c.main}
          stroke-width="2.3"
        />
        <circle cx="35" cy="9" r="2" fill=${c.light} />
      `;
    case UnitType.DefensePost:
      return svg`
        <g transform="translate(7 7) scale(.3)">
          <path d="m62 8 49 18v31c0 31-21 49-49 61C34 106 13 88 13 57V26Z" fill="#78512c" stroke="#ffd783" stroke-width="3" stroke-linejoin="round"/>
          <path d="m62 18 38 14v25c0 23-15 37-38 48-23-11-38-25-38-48V32Z" fill="#243e3f" stroke="#ffdf91" stroke-width="2"/>
          <path d="M39 60h48v30H39z" fill="#344954" stroke="#b9d4d0" stroke-width="3"/>
          <path d="M35 58h56V48H35z" fill="#566d70" stroke="#e8f5d3" stroke-width="3"/>
          <path d="M50 48V37h25v11m-17-11V31h10v6" fill="none" stroke="#ffe08b" stroke-width="4"/>
          <circle cx="62" cy="66" r="7" fill="#ffd36e"/>
        </g>
      `;
    case UnitType.City:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M13 91V53h31v38m4 0V28h42v63m5 0V44h29v47Z" fill="#1b6c55" stroke="#a6ffd1" stroke-width="3" stroke-linejoin="round"/>
          <path d="M56 28V14h24v14m-12-14V5" fill="none" stroke="#baffec" stroke-width="4"/>
          <g fill="#ffd36e"><rect x="22" y="61" width="7" height="9" rx="1"/><rect x="34" y="61" width="7" height="9" rx="1"/><rect x="58" y="40" width="8" height="10" rx="1"/><rect x="73" y="40" width="8" height="10" rx="1"/><rect x="58" y="58" width="8" height="10" rx="1"/><rect x="73" y="58" width="8" height="10" rx="1"/><rect x="105" y="55" width="7" height="9" rx="1"/></g>
          <path d="M5 96h132" stroke="#9dfff0" stroke-width="3"/>
        </g>
      `;
    case UnitType.Factory:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M17 92V54l31 16V49l31 18V48l36 20v24Z" fill="#9a4f32" stroke="#ffc18a" stroke-width="3" stroke-linejoin="round"/>
          <path d="M18 89V57l29 15V53l30 18V53l33 18v18Z" fill="#b96334"/>
          <path d="M91 50V16h19v44M98 16V7h6v9" fill="#4a5557" stroke="#ffe0a0" stroke-width="3"/>
          <path d="M95 6q-9-7 0-13m13 13q8-7 0-13" fill="none" stroke="#9cc8c7" stroke-width="3"/>
          <g fill="#ffe6a3"><rect x="31" y="75" width="9" height="8"/><rect x="56" y="75" width="9" height="8"/><rect x="84" y="76" width="9" height="8"/></g>
          <path d="M8 96h122" stroke="#ffbd75" stroke-width="3"/>
        </g>
      `;
    case UnitType.MissileFactory:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M10 97h128M20 90V57l30 15V55l28 17V53l34 19v18Z" fill="#763e3d" stroke="#ffc08b" stroke-width="3" stroke-linejoin="round"/>
          <path d="M47 56V29h10v35m54 8V25h10v49" fill="#364b54" stroke="#c8f3ed" stroke-width="3"/>
          <path d="M85 70V35q0-13 12-25 12 12 12 25v35Z" fill="#e4e5d4" stroke="#ffcb79" stroke-width="3"/>
          <path d="M87 46h20M90 59h10" stroke="#ff855f" stroke-width="3"/>
          <path d="m85 69-7 9v7l13-5m6-11 7 9v7l-13-5" fill="#a8babc" stroke="#e1f6e8" stroke-width="2"/>
          <path d="M10 101h128" stroke="#ff8a52" stroke-width="3"/>
        </g>
      `;
    case UnitType.OilField:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M13 94h112" stroke="#ffd088" stroke-width="3"/>
          <path d="m68 13 13 9-10 11 15 8-18 3-9-10 5-12Z" fill="#f6bd58" stroke="#ffe4a0" stroke-width="3" stroke-linejoin="round"/>
          <path d="m53 42-9 47m30-46 10 46M34 89h69" fill="none" stroke="#f1d59b" stroke-width="4"/>
          <path d="m47 64 28 11m-25 0 20 10" stroke="#f7c56b" stroke-width="4"/>
          <path d="M84 47h20v41H84z" fill="#574232" stroke="#ffc889" stroke-width="3"/>
          <path d="M88 56h12m-12 11h12m-12 11h12" stroke="#ddb27c" stroke-width="3"/>
          <path d="M94 43V35h8v8" fill="none" stroke="#ffc889" stroke-width="3"/>
          <path d="M104 90q10-6 18 0" fill="none" stroke="#ffd36e" stroke-width="3"/>
        </g>
      `;
    case UnitType.GasField:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M20 96h112" stroke="#7df3ff" stroke-width="3"/>
          <path d="M42 89V53h26v36m7 0V34h26v55" fill="#14545d" stroke="#8dfff0" stroke-width="3"/>
          <path d="M85 34V18h12l-6-11" fill="none" stroke="#b5ffff" stroke-width="4"/>
          <path d="M88 15q-14-13 0-23m10 23q15-13 0-23" fill="none" stroke="#5de7ff" stroke-width="3"/>
          <path d="M48 62h14m-14 9h14m19-25h14m-14 9h14" stroke="#b6fff0" stroke-width="3"/>
          <circle cx="55" cy="48" r="4" fill="#84dcff"/><circle cx="91" cy="28" r="4" fill="#84dcff"/>
        </g>
      `;
    case UnitType.UraniumPlant:
      return svg`
        <g transform="translate(5 8) scale(.29)">
          <path d="M23 96V54h101v42Z" fill="#315640" stroke="#bdff82" stroke-width="3"/>
          <path d="M34 54V29h27v25m11 0V20h27v34m11 0V35h13v19" fill="#426b49" stroke="#ddff9f" stroke-width="3"/>
          <path d="M77 20V9h27v11m-15-11V1h7v8" fill="none" stroke="#d7edc2" stroke-width="3"/>
          <path d="M44 65h15v18H44zm39 0h15v18H83z" fill="#172c25" stroke="#d1ff8c" stroke-width="2"/>
          <circle cx="26" cy="30" r="10" fill="#b6f779"/><circle cx="26" cy="30" r="4" fill="#253c2c"/>
          <path d="M17 30h18M26 21v18M20 24l12 12m0-12L20 36" stroke="#294838" stroke-width="2"/>
        </g>
      `;
    case "oil":
      return svg`
        <path
          d="M24 7c-5 8-12 15-12 23a12 12 0 0 0 24 0c0-8-7-15-12-23Z"
          fill=${c.main}
          stroke=${c.light}
        />
        <path d="M18 30c0 4 2 6 5 7" stroke=${c.light} />
      `;
    case "gas":
      return svg`
        <path
          d="M26 7c2 7-4 10-2 15 1-3 4-4 5-7 6 6 9 12 6 19-2 5-6 8-11 8-7 0-12-5-12-12 0-6 4-10 8-14 0 5 1 7 2 8 3-5 4-10 4-17Z"
          fill=${c.main}
          stroke=${c.light}
        />
        <path
          d="M24 30c3 3 4 5 3 8-1 2-2 3-4 3-3 0-5-2-5-5 0-2 2-4 4-6 0 2 1 3 2 4v-4Z"
          fill=${c.light}
        />
      `;
    case "uranium":
      return svg`
        <circle cx="24" cy="24" r="16" fill=${c.main} stroke=${c.light} />
        <circle cx="24" cy="24" r="3.5" fill=${c.glow} />
        <path
          d="M22 20 18 11a14 14 0 0 0-6 4l8 6m8 0 8-6a14 14 0 0 0-6-4l-4 9m-4 5-4 9a14 14 0 0 0 8 0l-4-9"
          fill=${c.shade}
          stroke=${c.light}
        />
      `;
    case "gold":
      return svg`
        <ellipse
          cx="24"
          cy="24"
          rx="16"
          ry="18"
          fill=${c.main}
          stroke=${c.light}
        />
        <path
          d="M19 18h8a4 4 0 0 1 0 8h-6a4 4 0 0 0 0 8h8m-7-20v20m4-20v20"
          fill="none"
          stroke=${c.glow}
        />
        <path
          d="M19 18h8a4 4 0 0 1 0 8h-6a4 4 0 0 0 0 8h8"
          fill="none"
          stroke=${c.light}
        />
      `;
    case "missile":
      return svg`
        <path d="M24 5c-4 6-7 12-7 20v10h14V25c0-8-3-14-7-20Z" fill=${c.main} stroke=${c.light} stroke-width="2" />
        <path d="m17 27-6 7v5l8-3m12-9 6 7v5l-8-3" fill=${c.shade} stroke=${c.light} stroke-width="1.5" />
        <path d="m21 35 3 9 3-9Z" fill=${c.light} />
      `;
  }
}

export function renderBuildIcon(type: PlayerBuildableUnitType): TemplateResult {
  return renderIcon(type, "build-icon");
}

export function renderResourceIcon(type: ResourceIconType): TemplateResult {
  return renderIcon(type, "resource-icon");
}

export function renderUnitIcon(type: PlayerBuildableUnitType): TemplateResult {
  return renderIcon(type, "unit-icon");
}

const buildIconDataUrls = new Map<PlayerBuildableUnitType, string>();

export function buildIconDataUrl(type: PlayerBuildableUnitType): string {
  const cached = buildIconDataUrls.get(type);
  if (cached) return cached;

  const container = document.createElement("div");
  render(renderBuildIcon(type), container);
  const icon = container.querySelector("svg");
  if (!icon) {
    throw new Error(`Failed to render build icon for ${type}`);
  }
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(icon.outerHTML)}`;
  buildIconDataUrls.set(type, dataUrl);
  return dataUrl;
}

function renderIcon(
  type: IconType,
  className: "build-icon" | "resource-icon" | "unit-icon",
): TemplateResult {
  const c = palettes[type];
  return html`
    <svg
      class=${className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48"
      height="48"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M12 3h24a9 9 0 0 1 9 9v24a9 9 0 0 1-9 9H12a9 9 0 0 1-9-9V12a9 9 0 0 1 9-9Z"
          fill=${c.glow}
          fill-opacity="0.9"
          stroke=${c.light}
          stroke-opacity="0.72"
          stroke-width="1.4"
        />
        <path
          d="M13 7h22a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H13a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Z"
          fill=${c.main}
          fill-opacity="0.18"
          stroke=${c.light}
          stroke-opacity="0.32"
          stroke-width="1"
        />
        <path
          d="M10 12h28M10 36h28"
          fill="none"
          stroke=${c.light}
          stroke-opacity="0.16"
          stroke-width="1.2"
        />
        ${shape(type, c)}
      </g>
    </svg>
  `;
}
