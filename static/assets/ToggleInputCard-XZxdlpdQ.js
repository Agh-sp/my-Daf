import{E as e,M as t,N as n,T as r,c as i,f as a,j as o,s,u as c,v as l}from"./Platform-CHHnD-iM.js";import{t as u}from"./AssetUrls-DSHI1MKX.js";import{$ as d,Q as f,Z as p,et as m,ot as h,rt as g,st as _,t as v,tt as y,z as b}from"./decorate-DDFJEDDP.js";import{Wt as x}from"./index-BCzm4E-v.js";import"./Difficulties-Dt6XMdGC.js";import{n as S}from"./BuildIcons-Dh4GSytj.js";import{t as ee}from"./repeat-DYkGUzWX.js";import{t as te}from"./DoomsdayClock-B0kwTCEE.js";var ne={[s.Easy]:50,[s.Medium]:75,[s.Hard]:100,[s.Impossible]:125},re=new Set([s.Medium,s.Hard]),C=class extends y{constructor(...e){super(...e),this.difficultyKey=``,this.disabled=!1}createRenderRoot(){return this}render(){if(this.disabled)return g;let e=this.difficultyKey,t=ne[e];if(t===void 0)return g;let n=this.difficultyKey.toLowerCase(),r=t===100?b(`difficulty.info_troops_same`):b(`difficulty.info_troops`,{percent:t});return _`<div
      data-difficulty-info
      class="group/difficulty-info pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-end hover:z-20 focus-within:z-20"
      @click=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label=${b(`difficulty.info_label`)}
        class="pointer-events-auto flex h-6 w-6 cursor-help items-center justify-center rounded-full bg-black/55 text-xs font-black text-white/80 ring-1 ring-white/20 opacity-0 transition-opacity duration-200 hover:bg-black/80 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group-hover/difficulty-card:opacity-100 pointer-coarse:opacity-100"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute right-0 top-8 hidden w-max max-w-full flex-col gap-1 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs normal-case tracking-normal text-white/90 shadow-xl group-hover/difficulty-info:flex group-focus-within/difficulty-info:flex"
      >
        <div>
          ${b(`difficulty.info`,{smarts:b(`difficulty.info_smarts_${n}`),troops:r})}
        </div>
        ${re.has(e)?_`<div class="text-white/60">
              ${b(`difficulty.info_note_${n}`)}
            </div>`:g}
      </div>
    </div>`}};v([d({type:String})],C.prototype,`difficultyKey`,void 0),v([d({type:Boolean})],C.prototype,`disabled`,void 0),C=v([m(`difficulty-info`)],C);var w=class extends y{constructor(...e){super(...e),this.value=0,this.min=0,this.max=400,this.step=1,this.labelKey=``,this.disabledKey=``,this.defaultValue=void 0,this.defaultLabelKey=``,this.isEditing=!1}createRenderRoot(){return this}dispatchValueChange(){this.dispatchEvent(new CustomEvent(`value-changed`,{detail:{value:this.value},bubbles:!0,composed:!0}))}handleSliderInput(e){let t=e.target;this.value=t.valueAsNumber}handleSliderChange(e){let t=e.target;this.value=t.valueAsNumber,this.dispatchValueChange()}handleNumberInput(e){let t=e.target.valueAsNumber;isNaN(t)&&(t=this.min),t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.value=t}handleNumberComplete(){this.dispatchValueChange()}handleNumberKeyDown(e){e.key===`Enter`&&(this.isEditing=!1,this.handleNumberComplete())}enableEditing(){this.isEditing=!0,this.updateComplete.then(()=>this.numberInput?.focus())}render(){let e=this.max===this.min?0:(this.value-this.min)/(this.max-this.min)*100;return _`
      <div
        class="flex flex-col items-center justify-center gap-1 w-full text-center"
      >
        <input
          type="range"
          dir="ltr"
          aria-label=${this.labelKey?b(this.labelKey):``}
          .min=${this.min}
          .max=${this.max}
          .step=${this.step}
          .valueAsNumber=${this.value}
          style="background: linear-gradient(to right, var(--color-malibu-blue) 0%, var(--color-malibu-blue) ${e}%, rgba(255, 255, 255, 0.15) ${e}%, rgba(255, 255, 255, 0.15) 100%); background-size: 100% 6px; background-repeat: no-repeat; background-position: center; border-radius: 9999px;"
          class="w-full h-6 p-0 m-0 bg-transparent appearance-none cursor-pointer focus:outline-none 
                 [&::-webkit-slider-runnable-track]:w-full [&::-webkit-slider-runnable-track]:h-[6px] [&::-webkit-slider-runnable-track]:cursor-pointer [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:transition-colors
                 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[18px] [&::-webkit-slider-thumb]:w-[18px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-malibu-blue [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:-mt-[6px] [&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-webkit-slider-thumb]:transition-all active:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]
                 [&::-moz-range-track]:w-full [&::-moz-range-track]:h-[6px] [&::-moz-range-track]:cursor-pointer [&::-moz-range-track]:bg-transparent [&::-moz-range-track]:rounded-full [&::-moz-range-track]:transition-colors
                 [&::-moz-range-thumb]:h-[18px] [&::-moz-range-thumb]:w-[18px] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-malibu-blue [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-sm)] [&::-moz-range-thumb]:transition-all active:[&::-moz-range-thumb]:scale-110 active:[&::-moz-range-thumb]:shadow-[var(--shadow-malibu-blue-ring-lg)]"
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        <div
          class="text-xs uppercase font-bold tracking-wider text-center w-full leading-tight mb-1 flex flex-col items-center ${this.value>0?`text-white`:`text-white/60`}"
        >
          <span>${this.labelKey?b(this.labelKey):``}</span>
          ${this.isEditing?_`<input
                type="number"
                .min=${this.min}
                .max=${this.max}
                .valueAsNumber=${this.value}
                class="w-[60px] bg-black/60 text-white border border-white/20 text-center rounded text-sm p-1 leading-none font-bold font-inherit mt-1 focus:outline-none focus:border-blue-500"
                @input=${this.handleNumberInput}
                @blur=${()=>{this.isEditing=!1,this.handleNumberComplete()}}
                @keydown=${this.handleNumberKeyDown}
              />`:_`<span
                class="cursor-pointer min-w-[60px] inline-block text-center text-sm font-bold select-none hover:text-white transition-colors mt-1 ${this.value>0?`text-white`:`text-white/60`}"
                role="button"
                tabindex="0"
                @click=${this.enableEditing}
                @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(this.enableEditing(),e.preventDefault())}}
              >
                ${this.value===0&&this.disabledKey?b(this.disabledKey):this.defaultValue!==void 0&&this.value===this.defaultValue&&this.defaultLabelKey?_`${this.value}
                        <span class="text-white/40 uppercase"
                          >(${b(this.defaultLabelKey)})</span
                        >`:this.value}
              </span>`}
        </div>
      </div>
    `}};v([d({type:Number})],w.prototype,`value`,void 0),v([d({type:Number})],w.prototype,`min`,void 0),v([d({type:Number})],w.prototype,`max`,void 0),v([d({type:Number})],w.prototype,`step`,void 0),v([d({type:String})],w.prototype,`labelKey`,void 0),v([d({type:String})],w.prototype,`disabledKey`,void 0),v([d({type:Number})],w.prototype,`defaultValue`,void 0),v([d({type:String})],w.prototype,`defaultLabelKey`,void 0),v([f()],w.prototype,`isEditing`,void 0),v([p(`input[type='number']`)],w.prototype,`numberInput`,void 0),w=v([m(`fluent-slider`)],w);var T=`map-favorites`,E=new Set(Object.values(o));function D(){try{let e=localStorage.getItem(T);if(e===null)return[];let t=JSON.parse(e);return Array.isArray(t)?t.filter(e=>typeof e==`string`&&E.has(e)):[]}catch(e){return console.warn(`Failed to read favorite maps from localStorage:`,e),[]}}function O(e){let t=D(),n=t.indexOf(e);n>=0?t.splice(n,1):t.push(e);try{localStorage.setItem(T,JSON.stringify(t))}catch(e){console.warn(`Failed to save favorite maps to localStorage:`,e)}return t}function k(e,t=``){return _`<svg
    viewBox="0 0 24 24"
    class=${t}
    fill=${e?`currentColor`:`none`}
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M6.5 3.5h11a1 1 0 0 1 1 1V21L12 16.8 5.5 21V4.5a1 1 0 0 1 1-1Z" />
    <path d="M12 7.2c-2.4 1.7-2.4 3.5 0 5.1 2.4-1.6 2.4-3.4 0-5.1Z" />
    <path d="M12 12.2v2.1m0-1.7-2.1-1m2.1 1 2.1-1" />
  </svg>`}var A=`url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%0A%20%20%3Cpath%20d%3D%22m59.903346%2013.687732v6.602231h6.60223v19.806691h-6.60223v6.602231H40.096654v-6.602231h-6.60223V20.289963h6.60223v-6.602231z%22%20fill%3D%22white%22%2F%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M33.494424.48327138V7.0855019h-6.602231v6.6022301h-6.60223v33.011153h6.60223v6.60223h6.602231v6.602231h-6.602231v39.613383h6.602231v-6.602231h6.60223v-6.60223h4.951673v-6.602231h6.602231v6.602231h6.60223v6.60223h6.602231v6.602231h6.60223V59.903346h-4.951673v-6.602231h6.602231v-6.60223h6.60223V13.687732h-6.60223V7.0855019H66.505576V.48327138ZM58.252788%2086.312268v-6.602231h-6.60223v-6.60223h-6.602231v6.60223h-6.60223v6.602231H33.494424V59.903346H64.855019V86.312268ZM59.903346%207.0855019H40.096654v6.6022301h-6.60223v6.602231h-6.602231v19.806691h6.602231v6.602231h6.60223v6.60223h19.806692v-6.60223h6.60223v-6.602231h6.602231V20.289963h-6.602231v-6.602231h-6.60223z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A') no-repeat center / contain`,j=[s.Easy,s.Medium,s.Hard,s.Impossible],ie={[s.Easy]:`var(--medal-easy)`,[s.Medium]:`var(--medal-medium)`,[s.Hard]:`var(--medal-hard)`,[s.Impossible]:`var(--medal-impossible)`};function M(e,t=`w-5 h-5`,n=!0){return _`<div
    class="${t} ${n?`opacity-100`:`opacity-25`}"
    style="background-color:${ie[e]}; mask:${A}; -webkit-mask:${A};"
    title=${b(`difficulty.${e.toLowerCase()}`)}
  ></div>`}var N=class extends y{constructor(...e){super(...e),this.mapKey=``,this.selected=!1,this.translation=``,this.showMedals=!1,this.favorite=!1,this.wins=new Set,this.mapWebpPath=null,this.mapName=null,this.isLoading=!0,this.hasNations=!0,this.observer=null,this.dataLoaded=!1,this.mapLoadRequestId=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.observer=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&!this.dataLoaded&&(this.dataLoaded=!0,this.loadMapData(),this.observer?.disconnect())},{rootMargin:`200px`}),this.observer.observe(this)}disconnectedCallback(){this.isLoading&&(this.dataLoaded=!1),this.mapLoadRequestId++,this.observer?.disconnect(),this.observer=null,super.disconnectedCallback()}updated(e){let t=e.get(`mapKey`);e.has(`mapKey`)&&t!==void 0&&t!==this.mapKey&&this.dataLoaded&&this.loadMapData()}async loadMapData(){if(!this.mapKey)return;let e=++this.mapLoadRequestId,t=this.mapKey;try{this.isLoading=!0;let n=o[t],r=x.getMapData(n);this.mapWebpPath=r.webpPath;let i=await r.manifest();if(e!==this.mapLoadRequestId||t!==this.mapKey)return;this.mapName=i.name,this.hasNations=Array.isArray(i.nations)&&i.nations.length>0}catch(t){e===this.mapLoadRequestId&&console.warn(`Failed to load map data:`,t)}finally{e===this.mapLoadRequestId&&(this.isLoading=!1)}}handleKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.target.click())}preventImageDrag(e){e.preventDefault()}handleToggleFavorite(e){e.stopPropagation(),e.preventDefault(),this.onToggleFavorite?.()}renderFavoriteButton(){return this.onToggleFavorite?_`<button
      type="button"
      @click=${this.handleToggleFavorite}
      @keydown=${e=>e.stopPropagation()}
      aria-pressed=${this.favorite}
      aria-label=${b(this.favorite?`map_component.unfavorite`:`map_component.favorite`)}
      title=${b(this.favorite?`map_component.unfavorite`:`map_component.favorite`)}
      class="absolute top-1.5 right-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-all duration-200 active:scale-90 ${this.favorite?`opacity-100 text-cyber-yellow`:`opacity-0 group-hover:opacity-100 text-white hover:text-cyber-yellow`}"
    >
      ${k(this.favorite,`w-4 h-4`)}
    </button>`:null}render(){let e=n.find(e=>e.id===this.mapKey)?.defaultNationCount;return _`
      <div
        role="button"
        tabindex="0"
        aria-selected="${this.selected}"
        aria-label="${this.translation??this.mapName??this.mapKey}"
        @keydown="${this.handleKeydown}"
        class="w-full h-full p-3 flex flex-col items-center justify-between rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 gap-3 group ${this.selected?`bg-cyber-yellow/[0.09] border-cyber-yellow/60 shadow-[0_0_28px_rgba(245,190,58,0.12)]`:`bg-slate-950/35 border-white/10 hover:bg-white/[0.07] hover:border-cyber-yellow/30 hover:-translate-y-0.5`}"
      >
        ${this.isLoading?_`<div
              class="w-full aspect-[2/1] text-white/40 transition-transform duration-200 rounded-lg bg-black/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center animate-pulse"
            >
              ${b(`common.loading`)}
            </div>`:this.mapWebpPath?_`<div
                class="w-full aspect-[2/1] relative overflow-hidden rounded-lg bg-black/20"
              >
                <img
                  src="${this.mapWebpPath}"
                  alt="${this.translation||this.mapName}"
                  draggable="false"
                  @dragstart=${this.preventImageDrag}
                  class="w-full h-full object-cover ${this.selected?`opacity-100`:`opacity-80`} group-hover:opacity-100 transition-opacity duration-200"
                />
                ${this.renderFavoriteButton()}
              </div>`:_`<div
                class="w-full aspect-[2/1] text-red-400 transition-transform duration-200 rounded-lg bg-red-500/10 text-xs font-bold uppercase tracking-wider flex items-center justify-center"
              >
                ${b(`map_component.error`)}
              </div>`}
        ${this.showMedals&&this.hasNations?_`<div class="flex gap-1 justify-center w-full">
              ${this.renderMedals()}
            </div>`:null}
        <div class="flex w-full items-center justify-between gap-2">
          <span
            class="min-w-0 truncate text-left text-sm font-semibold tracking-wide text-white"
          >
            ${this.translation||this.mapName}
          </span>
          ${e?_`<span
                class="flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-black/25 px-2 py-1 text-[10px] font-medium tabular-nums text-white/65"
                title=${b(`map_component.nations_count`,{count:String(e)})}
              >
                <svg
                  viewBox="0 0 20 20"
                  class="size-3.5 text-cyber-yellow"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6.5-.5a2 2 0 1 0 0-4M2.5 16a4.5 4.5 0 0 1 9 0m1.5-4a3.5 3.5 0 0 1 4.5 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                ${e}
              </span>`:null}
        </div>
      </div>
    `}renderMedals(){let e=this.readWins();return j.map(t=>M(t,`w-5 h-5`,e.has(t)))}readWins(){return this.wins??new Set}};v([d({type:String})],N.prototype,`mapKey`,void 0),v([d({type:Boolean})],N.prototype,`selected`,void 0),v([d({type:String})],N.prototype,`translation`,void 0),v([d({type:Boolean})],N.prototype,`showMedals`,void 0),v([d({type:Boolean})],N.prototype,`favorite`,void 0),v([d({attribute:!1})],N.prototype,`wins`,void 0),v([d({attribute:!1})],N.prototype,`onToggleFavorite`,void 0),v([f()],N.prototype,`mapWebpPath`,void 0),v([f()],N.prototype,`mapName`,void 0),v([f()],N.prototype,`isLoading`,void 0),v([f()],N.prototype,`hasNations`,void 0),N=v([m(`map-display`)],N);var ae=u(`images/RandomMap.webp`),P=n.filter(e=>e.categories.includes(`featured`)).sort((e,t)=>(e.featuredRank??2**53-1)-(t.featuredRank??2**53-1));function F(e){return n.filter(t=>t.categories.includes(e))}var I=class extends y{constructor(...e){super(...e),this.selectedMap=o.World,this.useRandomMap=!1,this.showMedals=!1,this.randomMapDivider=!1,this.searchQuery=``,this.mapWins=new Map,this.activeTab=`featured`,this.expandedCategories=new Set,this.favorites=D(),this.handleSelectRandomMap=()=>{this.onSelectRandom?.()}}createRenderRoot(){return this}handleToggleFavorite(e){this.favorites=O(e)}handleMapSelection(e){this.onSelectMap?.(e)}toggleCategory(e){let t=new Set(this.expandedCategories);t.has(e)?t.delete(e):t.add(e),this.expandedCategories=t}get allCategories(){return t.filter(e=>e!==`featured`)}toggleExpandAll(){this.expandedCategories=this.expandedCategories.size>0?new Set:new Set(this.allCategories)}preventImageDrag(e){e.preventDefault()}get filteredMaps(){if(!this.searchQuery.trim())return[];let e=this.searchQuery.trim().toLowerCase();return n.filter(t=>{let n=b(t.translationKey).toLowerCase(),r=t.id.toLowerCase();return n.includes(e)||r.includes(e)})}getWins(e){return this.mapWins?.get(e)??new Set}renderMapCard(e){return _`
      <div
        @click=${()=>this.handleMapSelection(e.type)}
        class="cursor-pointer"
      >
        <map-display
          .mapKey=${e.id}
          .selected=${!this.useRandomMap&&this.selectedMap===e.type}
          .showMedals=${this.showMedals}
          .wins=${this.getWins(e.type)}
          .favorite=${this.favorites.includes(e.type)}
          .onToggleFavorite=${()=>this.handleToggleFavorite(e.type)}
          .translation=${b(e.translationKey)}
        ></map-display>
      </div>
    `}renderMapGrid(e){return _`<div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      ${ee(e,e=>e.id,e=>this.renderMapCard(e))}
    </div>`}renderSectionHeading(e){return _`<h4
      class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 pl-2"
    >
      ${e}
    </h4>`}renderCategoryBar(e,t){let n=this.expandedCategories.has(e);return _`<div class="w-full">
      <button
        type="button"
        aria-expanded=${n}
        @click=${()=>this.toggleCategory(e)}
        class="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border transition-all duration-200 active:scale-[0.99] ${n?`bg-cyber-yellow/[0.09] border-cyber-yellow/50`:`bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`}"
      >
        <span
          class="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider"
        >
          <svg
            class="w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${n?`rotate-90`:``}"
            viewBox="0 0 12 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4 2l5 4-5 4z" />
          </svg>
          ${b(`map_categories.${e}`)}
        </span>
        <span class="text-xs font-bold text-white/40">${t.length}</span>
      </button>
      ${n?_`<div class="mt-4">${this.renderMapGrid(t)}</div>`:null}
    </div>`}renderFeaturedTab(){let e=P,t=n.find(e=>e.type===this.selectedMap);return!this.useRandomMap&&t!==void 0&&!P.includes(t)&&(e=[t,...P]),_`<div class="w-full">
      ${this.renderSectionHeading(b(`map_categories.featured`))}
      ${this.renderMapGrid(e)}
    </div>`}renderAllTab(){return _`<div class="space-y-3">
      ${this.allCategories.map(e=>this.renderCategoryBar(e,F(e)))}
    </div>`}renderExpandToggle(){let e=this.expandedCategories.size>0;return _`<div
      class="shrink-0 rounded-xl border border-white/10 bg-black/20 p-1"
    >
      <button
        type="button"
        aria-expanded=${e}
        title=${b(e?`common.collapse_all`:`common.expand_all`)}
        @click=${()=>this.toggleExpandAll()}
        class="h-full flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white transition-all active:scale-95"
      >
        <svg
          class="w-3 h-3 shrink-0 transition-transform duration-200 ${e?`rotate-180`:``}"
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2 4l4 5 4-5z" />
        </svg>
        <span class="hidden sm:inline">
          ${b(e?`common.collapse_all`:`common.expand_all`)}
        </span>
      </button>
    </div>`}renderFavoritesTab(){if(this.favorites.length===0)return _`<div
        class="w-full flex flex-col items-center justify-center gap-3 py-12 px-4 text-center rounded-xl border border-dashed border-white/10 bg-black/20"
      >
        <div class="text-white/30">${k(!1,`w-8 h-8`)}</div>
        <p class="text-sm text-white/50 leading-relaxed max-w-xs">
          ${b(`map_component.favorites_empty`)}
        </p>
      </div>`;let e=this.favorites.map(e=>n.find(t=>t.type===e)).filter(e=>e!==void 0);return _`<div class="w-full">
      ${this.renderSectionHeading(b(`map_categories.favorites`))}
      ${this.renderMapGrid(e)}
    </div>`}renderActiveTab(){switch(this.activeTab){case`all`:return this.renderAllTab();case`favorites`:return this.renderFavoritesTab();default:return this.renderFeaturedTab()}}renderSearchResults(){let e=this.filteredMaps;return e.length===0?_`<div
        class="w-full flex flex-col items-center justify-center gap-3 py-12 px-4 text-center rounded-xl border border-dashed border-white/10 bg-black/20"
      >
        <svg
          class="w-8 h-8 text-white/30"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-sm text-white/50 leading-relaxed max-w-xs">
          ${b(`map_component.no_results`)}
        </p>
      </div>`:_`<div class="w-full">
      ${this.renderSectionHeading(`${b(`map_component.search_results`)} (${e.length})`)}
      ${this.renderMapGrid(e)}
    </div>`}renderTabButton(e,t){let n=this.activeTab===e;return _`<button
      type="button"
      role="tab"
      aria-selected=${n}
      class="px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all active:scale-95 ${n?`bg-cyber-yellow/10 text-cyber-yellow shadow-[0_0_18px_rgba(245,190,58,0.08)]`:`text-white/60 hover:text-white`}"
      @click=${()=>this.activeTab=e}
    >
      ${t}
    </button>`}render(){let e=this.searchQuery.trim().length>0;return _`
      <div class="space-y-8">
        <div class="w-full flex items-center gap-2">
          ${e?null:_`<div
                  role="tablist"
                  aria-label="${b(`map.map`)}"
                  class="flex-1 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-black/20 p-1"
                >
                  ${this.renderTabButton(`featured`,b(`map.featured`))}
                  ${this.renderTabButton(`all`,b(`map.all`))}
                  ${this.renderTabButton(`favorites`,b(`map.favorites`))}
                </div>
                ${this.activeTab===`all`?this.renderExpandToggle():null}`}
        </div>
        ${e?this.renderSearchResults():this.renderActiveTab()}
        <div
          class="w-full ${this.randomMapDivider?`pt-4 border-t border-white/5`:``}"
        >
          ${this.renderSectionHeading(b(`map_categories.special`))}
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <button
              type="button"
              class="w-full h-full p-3 flex flex-col items-center justify-between rounded-xl border cursor-pointer transition-all duration-200 active:scale-95 gap-3 group ${this.useRandomMap?`bg-cyber-yellow/[0.09] border-cyber-yellow/50 shadow-[0_0_24px_rgba(245,190,58,0.12)]`:`bg-slate-950/35 border-white/10 hover:bg-white/[0.07] hover:border-cyber-yellow/30 hover:-translate-y-0.5`}"
              @click=${this.handleSelectRandomMap}
            >
              <div
                class="w-full aspect-[2/1] relative overflow-hidden rounded-lg bg-black/20"
              >
                <img
                  src=${ae}
                  alt=${b(`map.random`)}
                  draggable="false"
                  @dragstart=${this.preventImageDrag}
                  class="w-full h-full object-cover ${this.useRandomMap?`opacity-100`:`opacity-80`} group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div
                class="text-xs font-bold text-white uppercase tracking-wider text-center leading-tight break-words hyphens-auto"
              >
                ${b(`map.random`)}
              </div>
            </button>
          </div>
        </div>
      </div>
    `}};v([d({type:String})],I.prototype,`selectedMap`,void 0),v([d({type:Boolean})],I.prototype,`useRandomMap`,void 0),v([d({type:Boolean})],I.prototype,`showMedals`,void 0),v([d({type:Boolean})],I.prototype,`randomMapDivider`,void 0),v([d({type:String})],I.prototype,`searchQuery`,void 0),v([d({attribute:!1})],I.prototype,`mapWins`,void 0),v([d({attribute:!1})],I.prototype,`onSelectMap`,void 0),v([d({attribute:!1})],I.prototype,`onSelectRandom`,void 0),v([f()],I.prototype,`activeTab`,void 0),v([f()],I.prototype,`expandedCategories`,void 0),v([f()],I.prototype,`favorites`,void 0),I=v([m(`map-picker`)],I);var L=`bg-gradient-to-b from-amber-200/20 via-amber-400/10 to-amber-950/30 border-amber-200/55 shadow-[0_10px_22px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.16),0_0_18px_rgba(245,190,58,0.1)]`,R=`bg-gradient-to-b from-white/[0.075] to-black/25 border-white/10 shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.07)] hover:-translate-y-0.5 hover:from-white/10 hover:border-white/20 hover:shadow-[0_9px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.1)]`,z=`w-full rounded-xl border transition-all duration-200 opacity-30 grayscale cursor-not-allowed bg-white/5 border-white/5`;function B(e,t=``){return`w-full rounded-2xl border cursor-pointer transition-all duration-200 active:translate-y-0 active:scale-[0.99] ${t} ${e?L:R}`}var V=`text-xs uppercase font-bold tracking-wider leading-tight break-words hyphens-auto`,H=Object.entries(s).filter(([e])=>isNaN(Number(e))),U=[2,3,4,5,6,7,l,r,i,a];function W(e){return e?`text-amber-100`:`text-white/60`}function G(e,t,n,r){return _`
    <button
      class="${B(t,r)} flex items-center justify-center"
      @click=${n}
    >
      <span class="${V} ${W(t)}">
        ${e}
      </span>
    </button>
  `}function K(e,t,n,r,i,a=`space-y-6`,o){return _`
    <section class=${a}>
      ${J(e,t,n,r,o)}
      ${i}
    </section>
  `}var q=[{type:e.City,translationKey:`unit_type.city`},{type:e.DefensePost,translationKey:`unit_type.defense_post`},{type:e.Port,translationKey:`unit_type.port`},{type:e.Warship,translationKey:`unit_type.warship`},{type:e.TransportShip,translationKey:`unit_type.boat`},{type:e.MissileSilo,translationKey:`unit_type.missile_silo`},{type:e.SAMLauncher,translationKey:`unit_type.sam_launcher`},{type:e.AtomBomb,translationKey:`unit_type.atom_bomb`},{type:e.HydrogenBomb,translationKey:`unit_type.hydrogen_bomb`},{type:e.MIRV,translationKey:`unit_type.mirv`},{type:e.Factory,translationKey:`unit_type.factory`},{type:e.OilField,translationKey:`unit_type.oil_field`},{type:e.GasField,translationKey:`unit_type.gas_field`},{type:e.UraniumPlant,translationKey:`unit_type.uranium_plant`}],oe=h`<path
  d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"
/>`,se=h`<path
  fill-rule="evenodd"
  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
  clip-rule="evenodd"
/>`,ce=h`<path
  d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"
/>`,le=h`<path
  fill-rule="evenodd"
  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.922-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
  clip-rule="evenodd"
/>`,ue=h`<path
  fill-rule="evenodd"
  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
  clip-rule="evenodd"
/>`,de=h`<path
  fill-rule="evenodd"
  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
  clip-rule="evenodd"
/>`;function J(e,t,n,r,i){return _`
    <div class="flex items-center gap-4 pb-2 border-b border-white/10">
      <div
        class="w-8 h-8 rounded-lg flex items-center justify-center ${n} ${t}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          ${e}
        </svg>
      </div>
      <h3 class="text-lg font-bold text-white uppercase tracking-wider">
        ${b(r)}
      </h3>
      ${i?_`<div class="ml-auto">${i}</div>`:null}
    </div>
  `}var Y=class extends y{constructor(...e){super(...e),this.sectionGapClass=`space-y-6`,this.mapSearchQuery=``,this.handleMapSearchInput=e=>{let t=e.target;this.mapSearchQuery=t.value},this.clearMapSearch=()=>{this.mapSearchQuery=``},this.handleSelectMap=e=>{this.emit(`map-selected`,{map:e})},this.handleSelectRandom=()=>{this.emit(`random-map-selected`,{})},this.handleDifficultySelect=e=>{this.emit(`difficulty-selected`,{difficulty:e})},this.handleDoomsdayClockSpeedChange=e=>{let t=e.target.value;this.emit(`doomsday-clock-speed-selected`,{speed:t})},this.handleGameModeSelect=e=>{this.emit(`game-mode-selected`,{mode:e})},this.handleTeamCountSelect=e=>{this.emit(`team-count-selected`,{count:e})},this.handleOptionToggle=e=>{this.emit(`option-toggle-changed`,{labelKey:e.labelKey,checked:!e.checked})},this.handleBotsChanged=e=>{let t=e;this.emit(`bots-changed`,t.detail)},this.handleNationsChanged=e=>{let t=e;this.emit(`nations-changed`,t.detail)},this.handleHostCheatToggle=e=>{this.emit(`host-cheat-toggle-changed`,{labelKey:e.labelKey,checked:!e.checked})},this.handleUnitToggle=(e,t)=>{this.emit(`unit-toggle-changed`,{unit:e,checked:t})}}createRenderRoot(){return this}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}renderOptionToggle(e){return e.hidden?_``:e.doomsdayClockSpeed===void 0?G(b(e.labelKey),e.checked,()=>this.handleOptionToggle(e),`p-4 text-center`):this.renderDoomsdayClockToggle(e)}renderDoomsdayClockToggle(e){let t=e.doomsdayClockSpeed;return _`
      <div
        class="${B(e.checked,`p-4 flex flex-col items-center justify-center gap-2 text-center`)}"
        @click=${()=>this.handleOptionToggle(e)}
      >
        <span class="${V} ${W(e.checked)}">
          ${b(e.labelKey)}
        </span>
        ${e.checked?_`
              <select
                class="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-white text-xs"
                @click=${e=>e.stopPropagation()}
                @change=${this.handleDoomsdayClockSpeedChange}
              >
                ${te.map(e=>_`
                    <option value=${e} ?selected=${t===e}>
                      ${b(`doomsday_clock_speed.${e}`)}
                    </option>
                  `)}
              </select>
            `:g}
      </div>
    `}renderUnitTypeOptions(e){return q.map(({type:t,translationKey:n})=>{let r=!e.includes(t);return _`
        <button
          class="${B(r,`group relative min-h-24 overflow-hidden p-4 text-center bg-[linear-gradient(145deg,rgba(38,31,15,.96),rgba(12,13,13,.98))] before:absolute before:inset-1.5 before:rounded-lg before:border before:border-amber-200/10 before:content-[''] hover:before:border-amber-200/35`)}"
          aria-pressed=${r}
          @click=${()=>this.handleUnitToggle(t,r)}
        >
          <span
            class="relative flex flex-col items-center justify-center gap-2 ${V} ${W(r)}"
          >
            <span
              class="grid size-12 place-items-center rounded-[1.15rem] border border-amber-100/20 bg-black/35 shadow-[inset_0_0_18px_rgba(245,190,58,.09)] transition-transform group-hover:-translate-y-0.5"
            >
              <img
                src=${S(t)}
                alt=""
                aria-hidden="true"
                class="size-9 object-contain"
              />
            </span>
            ${b(n)}
          </span>
        </button>
      `})}renderMapSearchInput(){return _`<div class="relative">
      <input
        type="text"
        placeholder="${b(`map_component.search_maps`)}"
        .value=${this.mapSearchQuery}
        @input=${this.handleMapSearchInput}
        class="w-48 px-3 py-1.5 pl-8 pr-7 rounded-lg text-sm bg-transparent border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-malibu-blue/50 transition-all"
      />
      <svg
        class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
      ${this.mapSearchQuery?_`<button
            type="button"
            @click=${this.clearMapSearch}
            class="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all"
          >
            <svg class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
              />
            </svg>
          </button>`:null}
    </div>`}render(){if(!this.settings)return g;let e=this.settings;return _`
      <div class=${this.sectionGapClass}>
        ${K(oe,`text-aquarius`,`bg-malibu-blue/20`,`map.map`,_`<map-picker
            .selectedMap=${e.map.selected}
            .useRandomMap=${e.map.useRandom}
            .randomMapDivider=${e.map.randomMapDivider??!1}
            .showMedals=${e.map.showMedals??!1}
            .mapWins=${e.map.mapWins??new Map}
            .onSelectMap=${this.handleSelectMap}
            .onSelectRandom=${this.handleSelectRandom}
            .searchQuery=${this.mapSearchQuery}
          ></map-picker>`,`solo-config-map space-y-6`,this.renderMapSearchInput())}
        ${K(se,`text-green-400`,`bg-green-500/20`,`difficulty.difficulty`,_`
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${H.map(([t,n])=>{let r=e.difficulty.selected===n,i=e.difficulty.disabled;return _`
                  <div class="group/difficulty-card relative">
                    <button
                      ?disabled=${i}
                      @click=${()=>!i&&this.handleDifficultySelect(n)}
                      class="${i?`${z} flex flex-col items-center p-4 gap-3 h-full`:B(r,`flex flex-col items-center p-4 gap-3 h-full`)}"
                    >
                      <difficulty-display
                        .difficultyKey=${t}
                        class="transform scale-125 origin-center ${i?`pointer-events-none`:``}"
                      ></difficulty-display>
                      <span
                        class="${V} text-center mt-1 text-white"
                      >
                        ${b(`difficulty.${t.toLowerCase()}`)}
                      </span>
                    </button>
                    <difficulty-info
                      .difficultyKey=${t}
                      .disabled=${i}
                    ></difficulty-info>
                  </div>
                `})}
            </div>
          `,`solo-config-difficulty space-y-6`)}
        ${K(ce,`text-purple-400`,`bg-purple-500/20`,`host_modal.mode`,_`
            <div class="grid grid-cols-2 gap-4">
              ${[c.FFA,c.Team].map(t=>_`
                  <button
                    class="${B(e.gameMode.selected===t,`py-6 text-center`)}"
                    @click=${()=>this.handleGameModeSelect(t)}
                  >
                    <span
                      class="text-sm font-bold text-white uppercase tracking-widest"
                    >
                      ${t===c.FFA?b(`game_mode.ffa`):b(`game_mode.teams`)}
                    </span>
                  </button>
                `)}
            </div>
          `,`solo-config-mode space-y-6`)}
        ${e.gameMode.selected===c.FFA?g:_`
              <section class="solo-config-teams space-y-6">
                <div
                  class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 pl-2"
                >
                  ${b(`host_modal.team_count`)}
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
                  ${U.map(t=>_`
                      <button
                        class="${B(e.teamCount.selected===t,`px-4 py-3 text-center`)}"
                        @click=${()=>this.handleTeamCountSelect(t)}
                      >
                        <span class="${V} text-white">
                          ${typeof t==`string`?b(t===`Humans Vs Nations`?`public_lobby.teams_hvn`:`host_modal.teams_${t}`):b(`public_lobby.teams`,{num:t})}
                        </span>
                      </button>
                    `)}
                </div>
              </section>
            `}
        ${K(le,`text-orange-400`,`bg-orange-500/20`,e.options.titleKey,_`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                class="col-span-2 rounded-xl border p-4 flex flex-col justify-center transition-all duration-200 ${e.options.bots.value>0?`border-amber-200/25 bg-white/[0.035]`:`border-white/10 bg-black/20 hover:border-white/20`}"
              >
                <fluent-slider
                  min="0"
                  max="400"
                  step="1"
                  .value=${e.options.bots.value}
                  labelKey=${e.options.bots.labelKey}
                  disabledKey=${e.options.bots.disabledKey}
                  @value-changed=${this.handleBotsChanged}
                ></fluent-slider>
              </div>

              ${e.options.nations&&!e.options.nations.hidden?_`<div
                    class="col-span-2 rounded-xl border p-4 flex flex-col justify-center transition-all duration-200 ${e.options.nations.value>0?`border-amber-200/25 bg-white/[0.035]`:`border-white/10 bg-black/20 hover:border-white/20`}"
                  >
                    <fluent-slider
                      min="0"
                      max="400"
                      step="1"
                      .value=${e.options.nations.value}
                      .defaultValue=${e.options.nations.defaultValue}
                      defaultLabelKey="common.map_default"
                      labelKey=${e.options.nations.labelKey}
                      disabledKey=${e.options.nations.disabledKey}
                      @value-changed=${this.handleNationsChanged}
                    ></fluent-slider>
                  </div>`:g}
              ${e.options.toggles.map(e=>this.renderOptionToggle(e))}
              ${e.options.inputCards}
            </div>
          `,`solo-config-options space-y-6`)}
        ${e.hostCheats?.visible?K(ue,`text-yellow-400`,`bg-yellow-500/20`,e.hostCheats.titleKey,_`
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  ${e.hostCheats.toggles.map(e=>G(b(e.labelKey),e.checked,()=>this.handleHostCheatToggle(e),`p-4 text-center`))}
                  ${e.hostCheats.inputCards}
                </div>
              `,`solo-config-cheats space-y-6`):g}
        ${K(de,`text-teal-400`,`bg-teal-500/20`,e.unitTypes.titleKey,_`
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              ${this.renderUnitTypeOptions(e.unitTypes.disabledUnits)}
            </div>
          `,`solo-config-units space-y-6 pb-6`)}
      </div>
    `}};v([d({attribute:!1})],Y.prototype,`settings`,void 0),v([d({attribute:!1})],Y.prototype,`sectionGapClass`,void 0),v([f()],Y.prototype,`mapSearchQuery`,void 0),Y=v([m(`game-config-settings`)],Y);var fe=`bg-gradient-to-b from-malibu-blue/20 via-malibu-blue/10 to-black/25 border-malibu-blue/55 shadow-[0_10px_22px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14),var(--shadow-malibu-blue)]`,pe=`bg-gradient-to-b from-white/[0.075] to-black/25 border-white/10 shadow-[0_5px_12px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.07)] hover:-translate-y-0.5 hover:from-white/10 hover:border-white/20 hover:shadow-[0_9px_18px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.1)]`,X=`w-full text-center rounded bg-black/60 text-white text-sm font-bold border border-white/20 focus:outline-none focus:border-malibu-blue p-1 my-1`,Z=`text-xs uppercase font-bold tracking-wider leading-tight break-words hyphens-auto`;function Q(e,t=``){return`w-full h-full rounded-2xl border cursor-pointer transition-all duration-200 active:translate-y-0 active:scale-[0.99] relative overflow-hidden ${t} ${e?fe:pe}`}var $=class extends y{constructor(...e){super(...e),this.labelKey=``,this.checked=!1,this.inputType=`number`,this.handleCardClick=()=>{this.emitToggle()}}createRenderRoot(){return this}updated(e){if(e.has(`checked`)&&e.get(`checked`)===!1&&this.checked){let e=this.querySelector(`input`);e?.focus(),e?.select()}}toOptionalNumber(e){if(typeof e==`number`)return Number.isFinite(e)?e:void 0;if(typeof e==`string`){let t=e.trim();if(!t)return;let n=Number(t);return Number.isFinite(n)?n:void 0}}resolveValueOnEnable(){let e=this.inputValue;if(e==null||e===``)return this.defaultInputValue;if(this.minValidOnEnable===void 0)return e;let t=this.toOptionalNumber(e);return t===void 0||t<this.minValidOnEnable?this.defaultInputValue:t}emitToggle(){let e=!this.checked,t=e?this.resolveValueOnEnable():void 0;this.onToggle?.(e,t)}render(){return _`
      <div class="${Q(this.checked)}">
        <button
          type="button"
          aria-pressed=${this.checked}
          @click=${this.handleCardClick}
          class="w-full h-full p-3 flex flex-col items-center justify-between gap-2 focus:outline-none"
        >
          <div
            class="w-5 h-5 rounded border flex items-center justify-center transition-colors mt-1 ${this.checked?`bg-blue-500 border-blue-500`:`border-white/20 bg-white/5`}"
          >
            ${this.checked?_`<svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>`:``}
          </div>

          ${this.checked?_`<div class="h-[30px] my-1"></div>`:_`<div class="h-[2px] w-4 rounded my-3 bg-white/10"></div>`}

          <span
            class="${Z} text-center ${this.checked?`text-white`:`text-white/60`}"
          >
            ${b(this.labelKey)}
          </span>
        </button>

        <!-- Keep the input permanently mounted and just hide it when unchecked.
             Rendering it conditionally (\${checked ? input : nothing}) inserts a
             fresh input on enable, and focusing a just-inserted input forces
             several ms of layout/paint per frame. CSS-hiding an always-present
             input avoids that. -->
        <div
          class="absolute left-3 right-3 top-1/2 -translate-y-1/2 z-10 ${this.checked?``:`hidden`}"
        >
          <input
            type=${this.inputType}
            id=${this.inputId??g}
            min=${this.inputMin??g}
            max=${this.inputMax??g}
            step=${this.inputStep??g}
            .value=${String(this.inputValue??``)}
            class=${X}
            aria-label=${this.inputAriaLabel??g}
            placeholder=${this.inputPlaceholder??g}
            @input=${this.onInput}
            @change=${this.onChange}
            @keydown=${this.onKeyDown}
          />
          ${this.checked&&this.zeroLabel!==void 0&&this.toOptionalNumber(this.inputValue)===0?_`<div
                class="pointer-events-none absolute left-0 right-0 top-full mt-0.5 text-center text-[10px] leading-none text-white/70"
              >
                ${this.zeroLabel}
              </div>`:g}
        </div>
      </div>
    `}};v([d({attribute:!1})],$.prototype,`labelKey`,void 0),v([d({type:Boolean,attribute:!1})],$.prototype,`checked`,void 0),v([d({attribute:!1})],$.prototype,`inputId`,void 0),v([d({attribute:!1})],$.prototype,`inputType`,void 0),v([d({attribute:!1})],$.prototype,`inputMin`,void 0),v([d({attribute:!1})],$.prototype,`inputMax`,void 0),v([d({attribute:!1})],$.prototype,`inputStep`,void 0),v([d({attribute:!1})],$.prototype,`inputValue`,void 0),v([d({attribute:!1})],$.prototype,`inputAriaLabel`,void 0),v([d({attribute:!1})],$.prototype,`inputPlaceholder`,void 0),v([d({attribute:!1})],$.prototype,`zeroLabel`,void 0),v([d({attribute:!1})],$.prototype,`defaultInputValue`,void 0),v([d({attribute:!1})],$.prototype,`minValidOnEnable`,void 0),v([d({attribute:!1})],$.prototype,`onToggle`,void 0),v([d({attribute:!1})],$.prototype,`onInput`,void 0),v([d({attribute:!1})],$.prototype,`onChange`,void 0),v([d({attribute:!1})],$.prototype,`onKeyDown`,void 0),$=v([m(`toggle-input-card`)],$);export{M as a,j as i,X as n,Q as r,Z as t};