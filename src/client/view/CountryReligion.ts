// Largest self-identified religious affiliation in 2020, based on Pew Research
// Center estimates processed by Our World in Data. Uncovered territories are
// intentionally left unknown rather than inferred from neighboring countries.
// Sources: https://ourworldindata.org/grapher/most-common-religion
// https://www.pewresearch.org/religion/2025/06/09/global-religious-change-methodology/
const RELIGION_FLAGS: Record<string, string> = {
  buddhism: "bt kh la lk mm mn sg th",
  christianity:
    "am ao ar at au aw bb be bg bi bj bo br bs bw by bz ca cd cf ch cl cm co cr cu cv cw cy de dk do ec ee es et fi fj fm fr ga gb gd ge gf gh gp gq gr gt gu gy hn hr ht hu ie is it jm ke ki lc lr ls lt lu lv md me mg mk mq mt mw mx mz na nc ni no pa pe pf pg ph pl pr py re ro rs ru rw sb sc se si sk sr ss st sv sz tg tl to tt tz ua ug us vc ve vi vu ws za zm zw",
  hinduism: "in mu np",
  islam:
    "ae af al az ba bd bf bh bn ci dj dz eg eh er gm gn gw id iq ir jo kg km kw kz lb ly ma ml mr mv my ne ng om pk ps qa sa sd sl sn so sy td tj tm tn tr uz ye yt",
  judaism: "il",
  other: "tw",
  unaffiliated: "cn cz hk jp kp kr mo nl nz uy vn",
};

const RELIGION_BY_FLAG = new Map<string, string>(
  Object.entries(RELIGION_FLAGS).flatMap(([religion, flags]) =>
    flags
      .split(/\s+/)
      .filter(Boolean)
      .map((flag) => [flag, religion]),
  ),
);

export function countryReligionKey(flagCode: string): string | undefined {
  return RELIGION_BY_FLAG.get(flagCode.toLowerCase());
}
