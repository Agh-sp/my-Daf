export const ACTIVE_CARD =
  "bg-gradient-to-b from-malibu-blue/20 via-malibu-blue/10 to-black/25 border-malibu-blue/55 shadow-[0_10px_22px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14),var(--shadow-malibu-blue)]";
export const INACTIVE_CARD =
  "bg-gradient-to-b from-white/[0.075] to-black/25 border-white/10 shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.07)] hover:-translate-y-0.5 hover:from-white/10 hover:border-white/20 hover:shadow-[0_9px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.1)]";
export const INPUT_CLASS =
  "w-full text-center rounded bg-black/60 text-white text-sm font-bold border border-white/20 focus:outline-none focus:border-malibu-blue p-1 my-1";
export const CARD_LABEL_CLASS =
  "text-xs uppercase font-bold tracking-wider leading-tight break-words hyphens-auto";

export function cardClass(active: boolean, extra = ""): string {
  return `w-full h-full rounded-2xl border cursor-pointer transition-all duration-200 active:translate-y-0 active:scale-[0.99] relative overflow-hidden ${extra} ${active ? ACTIVE_CARD : INACTIVE_CARD}`;
}
