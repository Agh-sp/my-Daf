import{st as e}from"./decorate-DDFJEDDP.js";var t=({options:t,value:n,onChange:r,ariaLabel:i,className:a=``})=>e`
  <div class="relative ${a}">
    <select
      class="w-full appearance-none py-1.5 pl-3 pr-9 border border-white/20 rounded-lg bg-black/40 text-white text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      aria-label=${i}
      .value=${n}
      @change=${e=>r(e.target.value)}
    >
      ${t.map(t=>e`<option
            value=${t.value}
            ?selected=${t.value===n}
            class="bg-surface text-white"
          >
            ${t.label}
          </option>`)}
    </select>
    <span
      class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
      aria-hidden="true"
    >
      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </div>
`;export{t};