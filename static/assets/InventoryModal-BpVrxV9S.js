import{t as e}from"./AssetUrls-DSHI1MKX.js";import{$ as t,Q as n,et as r,rt as i,st as a,t as o,tt as s}from"./decorate-CgSmyiMM.js";import{h as c}from"./CosmeticSchemas-DRLyea1I.js";import{$t as l,Rn as u,_r as d,ar as f,cn as p,dr as m,hr as h,ht as g,ln as _,lr as v,mt as y,q as b,rn as x,ur as S,vr as C}from"./index-DKgg39IM.js";import{t as w}from"./SignedOutNotice-Q3syJ4h2.js";import{i as T,s as E}from"./CosmeticCard-Cn9Je4nj.js";import{t as D}from"./EffectsGrid-DP2Y7rqp.js";var O=class extends s{constructor(...e){super(...e),this.entries=[],this.activeCategory=`skins`}createRenderRoot(){return this}renderPreviews(e){let t=e.category===`effects`?e.items.slice(0,3):e.items.slice(0,1),n=e.items.length-t.length;return a`<div
      data-loadout-previews
      class="flex h-10 items-center justify-center ${e.category===`effects`?`-space-x-3`:``}"
    >
      ${t.map((t,n)=>a`<div
            data-loadout-preview
            class="h-10 w-10 overflow-hidden rounded-lg border border-white/20 bg-black/30 p-1 ${e.category===`effects`?`relative`:``}"
            style=${e.category===`effects`?`z-index:${3-n}`:i}
          >
            <cosmetic-preview .resolved=${t}></cosmetic-preview>
          </div>`)}
      ${n>0?a`<span
            data-loadout-more
            class="relative z-10 flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 bg-slate-800 px-1 text-xs font-black text-white"
            >+${n}</span
          >`:i}
    </div>`}render(){return a`<section data-inventory-loadout aria-label="چیدمان موجودی">
      <h2 class="sr-only">چیدمان موجودی</h2>
      <div class="overflow-x-auto overflow-y-visible px-3 py-2">
        <div class="mx-auto flex w-max min-w-max gap-3">
          ${this.entries.map(e=>{let t=e.category===this.activeCategory,n=e.category===`effects`?`${e.items.length} جلوه`:e.summary;return a`<button
              type="button"
              data-loadout-category=${e.category}
              aria-pressed=${t?`true`:`false`}
              aria-label=${`${e.label}: ${n}`}
              class="flex min-h-24 min-w-36 flex-col items-center justify-center gap-1 rounded-xl border p-3 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${t?`border-blue-400 bg-blue-500/20 text-white`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10`}"
              @click=${()=>this.onCategorySelect?.(e.category)}
            >
              ${this.renderPreviews(e)}
              <span class="text-sm font-bold">${e.label}</span>
              <span class="text-xs text-white/60">${e.summary}</span>
            </button>`})}
        </div>
      </div>
    </section>`}};o([t({attribute:!1})],O.prototype,`entries`,void 0),o([t({type:String})],O.prototype,`activeCategory`,void 0),o([t({attribute:!1})],O.prototype,`onCategorySelect`,void 0),O=o([r(`inventory-loadout-bar`)],O);var k=class extends s{constructor(...e){super(...e),this.names=[],this.active=``,this.canAdd=!1,this.canUnequip=!1}createRenderRoot(){return this}renderSlot(e){let t=e===this.active;return a`<div
      class="flex items-stretch overflow-hidden rounded-lg border ${t?`border-blue-400 bg-blue-500/20`:`border-white/15 bg-white/5`}"
    >
      <button
        type="button"
        data-loadout-slot=${e}
        aria-pressed=${t?`true`:`false`}
        aria-label=${`چیدمان ${e}`}
        class="px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-colors ${t?`text-white`:`text-white/75 hover:bg-white/10`}"
        @click=${()=>this.onSelect?.(e)}
      >
        ${e}
      </button>
      ${t?a`<button
            type="button"
            data-loadout-delete=${e}
            aria-label=${`حذف چیدمان ${e}`}
            class="border-l border-white/15 px-2 text-xs font-black text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            @click=${()=>this.onDelete?.(e)}
          >
            ✕
          </button>`:i}
    </div>`}render(){return a`<section
      data-inventory-loadout-menu
      aria-label="چیدمان‌های ذخیره‌شده"
      class="flex flex-wrap items-center gap-2 px-3 pt-3"
    >
      ${this.names.map(e=>this.renderSlot(e))}
      <button
        type="button"
        data-loadout-add
        ?disabled=${!this.canAdd}
        aria-label="افزودن چیدمان"
        class="rounded-lg border border-dashed border-white/25 px-3 py-1.5 text-xs font-black text-white/75 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onAdd?.()}
      >
        +
      </button>
      <button
        type="button"
        data-inventory-unequip-all
        ?disabled=${!this.canUnequip}
        class="ml-auto rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>this.onUnequipAll?.()}
      >
        برداشتن همه
      </button>
    </section>`}};o([t({attribute:!1})],k.prototype,`names`,void 0),o([t({type:String})],k.prototype,`active`,void 0),o([t({type:Boolean})],k.prototype,`canAdd`,void 0),o([t({type:Boolean})],k.prototype,`canUnequip`,void 0),o([t({attribute:!1})],k.prototype,`onSelect`,void 0),o([t({attribute:!1})],k.prototype,`onAdd`,void 0),o([t({attribute:!1})],k.prototype,`onDelete`,void 0),o([t({attribute:!1})],k.prototype,`onUnequipAll`,void 0),k=o([r(`inventory-loadout-menu`)],k);function A(t,n){return{name:t,url:e(`/flags/${n}.svg`),product:null,rarity:`common`,affiliateCode:null}}var j=class extends g{constructor(...e){super(...e),this.routerName=`inventory`,this.search=``,this.isLoading=!1,this.loadFailed=!1,this.ownershipState=`loading`,this.previewingCosmetic=null,this.cosmetics=null,this.userSettings=new C,this.userMeResponse=!1,this.catalogLoad=null,this.inventoryLoadId=0,this.ownershipLoadId=0,this.countryFlagTiles=b.filter(e=>e.code!==`xx`&&e.restricted!==!0).map(e=>({type:`flag`,cosmetic:A(e.name,e.code),colorPalette:null,relationship:`owned`,key:`country:${e.code}`})),this.pages=new D(this),this._onCosmeticSelected=()=>this.updateFromSettings(),this._onUserMe=e=>{this.onUserMe(e.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail}}modalConfig(){return{hideTabs:!0,tabs:[{key:`skins`,label:`ظاهرها`},{key:`flags`,label:`پرچم‌ها`},{key:`crowns`,label:`تاج‌ها`},{key:`effects`,label:`جلوه‌ها`}]}}connectedCallback(){super.connectedCallback(),this.dir=`rtl`,document.addEventListener(`userMeResponse`,this._onUserMe),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),window.addEventListener(`${d}:${h}`,this._onCosmeticSelected),window.addEventListener(`${d}:${m}`,this._onCosmeticSelected),window.addEventListener(`${d}:${v}`,this._onCosmeticSelected),window.addEventListener(`${d}:${S}`,this._onCosmeticSelected)}disconnectedCallback(){this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),super.disconnectedCallback(),document.removeEventListener(`userMeResponse`,this._onUserMe),window.removeEventListener(`${d}:${h}`,this._onCosmeticSelected),window.removeEventListener(`${d}:${m}`,this._onCosmeticSelected),window.removeEventListener(`${d}:${v}`,this._onCosmeticSelected),window.removeEventListener(`${d}:${S}`,this._onCosmeticSelected)}updateFromSettings(){this.requestUpdate()}async loadOwnership(e){let t=++this.ownershipLoadId;if(e!==void 0&&e!==!1){this.userMeResponse=e,this.ownershipState=`loaded`;return}try{let n=await f();if(t!==this.ownershipLoadId)return;if(n===!1){this.userMeResponse=!1,this.ownershipState=`guest`;return}let r=e===!1?!1:await u();if(t!==this.ownershipLoadId)return;if(r===!1){this.userMeResponse=!1,this.ownershipState=`error`;return}this.userMeResponse=r,this.ownershipState=`loaded`}catch{if(t!==this.ownershipLoadId)return;this.userMeResponse=!1,this.ownershipState=`error`}}loadCatalog(){if(this.catalogLoad!==null)return this.catalogLoad;let e=l().finally(()=>{this.catalogLoad===e&&(this.catalogLoad=null)});return this.catalogLoad=e,e}async loadInventory(e){let t=++this.inventoryLoadId;this.isLoading=!0,this.loadFailed=!1,this.ownershipState=`loading`;try{let[n]=await Promise.all([this.loadCatalog(),this.loadOwnership(e)]);if(t!==this.inventoryLoadId)return;this.cosmetics=n,this.loadFailed=n===null}catch{if(t!==this.inventoryLoadId)return;this.cosmetics=null,this.loadFailed=!0,this.ownershipState===`loading`&&(this.ownershipState=`error`)}finally{t===this.inventoryLoadId&&(this.isLoading=!1,this.updateFromSettings())}}async onUserMe(e){await this.loadInventory(e)}includedInSearch(e){return e.replace(/_/g,` `).toLowerCase().includes(this.search.toLowerCase())}handleSearch(e){this.search=e.target.value}hasOwnedCatalogItem(e){return this.resolvedItems().some(t=>e.includes(t.type)&&t.cosmetic!==null&&t.relationship===`owned`)}resolvedItems(){if(this.resolvedCache?.cosmetics===this.cosmetics&&this.resolvedCache.userMeResponse===this.userMeResponse)return this.resolvedCache.items;let e=p(this.cosmetics,this.userMeResponse,null);return this.resolvedCache={cosmetics:this.cosmetics,userMeResponse:this.userMeResponse,items:e},e}equippedSkin(){let e=this.resolvedItems(),t=this.userSettings.getSelectedSkinName();if(t!==null)return e.find(e=>e.type===`skin`&&e.cosmetic?.name===t)??null;let n=this.userSettings.getSelectedPatternName(this.cosmetics);return n===null?null:e.find(e=>e.type===`pattern`&&e.cosmetic?.name===n.name&&(e.colorPalette?.name??null)===(n.colorPalette?.name??null))??null}equippedFlag(){let e=this.userSettings.getFlag();return e===null?null:this.resolvedItems().find(t=>t.type===`flag`&&t.key===e)??this.countryFlagTiles.find(t=>t.key===e)??null}equippedCrown(){let e=this.userSettings.getSelectedCrownName();return e===null?null:this.resolvedItems().find(t=>t.type===`crown`&&t.cosmetic?.name===e)??null}effectSlotFor(e){if(e.type!==`effect`||e.cosmetic===null)return null;let t=e.cosmetic;return c(t)?t.attributes.nukeType:e.effectType??null}equippedEffects(){let e=this.userSettings.getSelectedEffects();return this.resolvedItems().filter(t=>t.type===`effect`&&t.cosmetic!==null&&this.effectSlotFor(t)!==null&&e[this.effectSlotFor(t)]===t.cosmetic.name)}loadoutEntries(){let e=this.equippedEffects();return[...[{category:`skins`,label:`ظاهرها`,item:this.equippedSkin()},{category:`flags`,label:`پرچم‌ها`,item:this.equippedFlag()},{category:`crowns`,label:`تاج‌ها`,item:this.equippedCrown()}].map(({category:e,label:t,item:n})=>({category:e,label:t,items:n?[n]:[],summary:n?T(n):``})),{category:`effects`,label:`جلوه‌ها`,items:e,summary:`${e.length} جلوه`}]}loadoutNames(){return this.userSettings.getLoadouts().map(e=>e.name).sort()}hasEquippedCosmetic(){let e=this.userSettings.captureLoadout(``);return e.pattern!==null||e.flag!==null||e.crown!==null||Object.keys(e.effects).length>0}renderLoadoutMenu(){let e=this.loadoutNames();return a`<inventory-loadout-menu
      .names=${e}
      .active=${this.userSettings.getActiveLoadout()??``}
      .canAdd=${e.length<10}
      .canUnequip=${this.hasEquippedCosmetic()}
      .onSelect=${e=>this.applyLoadout(e)}
      .onAdd=${()=>this.addLoadout()}
      .onDelete=${e=>this.deleteLoadout(e)}
      .onUnequipAll=${()=>this.unequipAll()}
    ></inventory-loadout-menu>`}applyLoadout(e){this.userSettings.getActiveLoadout()!==e&&this.userSettings.applyLoadout(e)&&(this.showMessage(`چیدمان «${e}» اعمال شد`),this.updateFromSettings())}addLoadout(){let e=this.userSettings.addLoadout();if(e===null){this.showMessage(`حداکثر 10 چیدمان مجاز است`);return}this.showMessage(`چیدمان «${e.name}» ذخیره شد`),this.updateFromSettings()}deleteLoadout(e){this.userSettings.deleteLoadout(e),this.showMessage(`چیدمان «${e}» حذف شد`),this.updateFromSettings()}unequipAll(){this.userSettings.unequipAll(),this.showMessage(`همهٔ موارد برداشته شدند`),this.updateFromSettings()}renderEmptyState(e){return a`<p
      data-inventory-empty=${e}
      class="px-4 pt-4 text-center text-sm font-medium text-white/60"
    >
      خالی
    </p>`}renderSkinGrid(){let e=this.resolvedItems().filter(e=>(e.type===`pattern`||e.type===`skin`)&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-skins`,this.search,x(e)),n=this.equippedSkin()?.key;return a`
      ${this.hasOwnedCatalogItem([`pattern`,`skin`])?null:this.renderEmptyState(`skins`)}
      <div
        data-inventory-grid="skins"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>{let t=e.find(e=>e.key===n),r=t??e[0];return a`
            <cosmetic-card
              .resolved=${r}
              .variants=${e}
              .activeVariantKey=${r.key}
              state=${t?`equipped`:`idle`}
              .onActivate=${e=>this.selectCosmetic(e)}
              .onVariantActivate=${e=>this.selectCosmetic(e)}
            ></cosmetic-card>
          `})}
        ${t.more}
      </div>
    `}renderCrownGrid(){let e=this.resolvedItems().filter(e=>e.type===`crown`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),t=this.pages.page(`inventory-crowns`,this.search,e),n=this.equippedCrown()?.key;return a`
      ${this.hasOwnedCatalogItem([`crown`])?null:this.renderEmptyState(`crowns`)}
      <div
        data-inventory-grid="crowns"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${t.items.map(e=>a`
            <cosmetic-card
              .resolved=${e}
              state=${e.key===n?`equipped`:`idle`}
              .onActivate=${()=>this.selectCrown(e)}
            ></cosmetic-card>
          `)}
        ${t.more}
      </div>
    `}renderFlagGrid(){let e=this.equippedFlag()?.key,t=this.resolvedItems().filter(e=>e.type===`flag`&&e.relationship===`owned`&&e.cosmetic!==null&&this.includedInSearch(e.cosmetic.name)),n=this.countryFlagTiles.filter(e=>this.includedInSearch(e.cosmetic.name)||this.includedInSearch(e.key.slice(8))),r=this.pages.page(`inventory-flags`,this.search,[...t,...n]);return a`
      <div
        data-inventory-grid="flags"
        class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        ${r.items.map(t=>a`
            <cosmetic-card
              .resolved=${t}
              state=${e===t.key?`equipped`:`idle`}
              .onActivate=${()=>this.selectFlag(t)}
            ></cosmetic-card>
          `)}
        ${r.more}
      </div>
    `}renderUnequip(e){return a`<div class="flex justify-end px-3 pt-3">
      <button
        type="button"
        data-inventory-unequip
        ?disabled=${(e===`skins`?this.equippedSkin():e===`flags`?this.equippedFlag():this.equippedCrown())===null}
        class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
        @click=${()=>{e===`skins`?this.userSettings.setSelectedPatternName(void 0):e===`flags`?this.userSettings.clearFlag(!0):this.userSettings.setSelectedCrownName(void 0)}}
      >
        برداشتن
      </button>
    </div>`}renderHeaderSlot(){let e=this.userMeResponse!==!1;return a`
      <div
        class="relative flex flex-col border-b border-white/10 pb-4 shrink-0"
      >
        ${y({title:`موجودی`,onBack:()=>this.close(),ariaLabel:`بازگشت`,rightContent:a`<button
            data-inventory-header-action
            type="button"
            class="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-bold text-white transition hover:bg-white/10"
            @click=${()=>{e?(this.close(),window.location.hash=`modal=store&tab=cosmetics`):window.showPage?.(`page-account`)}}
          >
            ${e?`فروشگاه`:`ورود به حساب`}
          </button>`})}

        <div class="md:flex items-center gap-2 justify-center mt-4">
          <input
            class="h-12 w-full max-w-md border border-white/10 bg-black/60
              rounded-xl shadow-inner text-xl text-center focus:outline-none
              focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white placeholder-white/30 transition-all"
            type="text"
            placeholder="جست‌وجو..."
            .value=${this.search}
            @change=${this.handleSearch}
            @keyup=${this.handleSearch}
          />
        </div>
      </div>
      ${this.previewingCosmetic?a`<cosmetic-preview-modal
            .resolved=${this.previewingCosmetic}
            @close-preview=${()=>{this.previewingCosmetic=null}}
          ></cosmetic-preview-modal>`:i}
    `}renderBody(e){if(!this.isModalOpen)return a``;if(this.isLoading||this.ownershipState===`loading`)return a`<div data-inventory-state="loading" aria-busy="true">
        <span class="sr-only">در حال بارگذاری...</span>
        <div
          data-inventory-skeleton="loadout"
          class="mx-3 my-2 h-28 animate-pulse rounded-xl bg-white/5"
        ></div>
        <div
          data-inventory-skeleton="grid"
          class="mx-3 grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          ${Array.from({length:6},()=>a`<div
                class="aspect-square animate-pulse rounded-xl bg-white/5"
              ></div>`)}
        </div>
      </div>`;if(this.loadFailed||this.ownershipState===`error`)return a`<div
        data-inventory-state="error"
        class="flex flex-col items-center gap-4 p-8 text-center text-red-300"
      >
        <p>بارگذاری موجودی ناموفق بود.</p>
        <button
          type="button"
          data-inventory-retry
          ?disabled=${this.isLoading}
          class="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          @click=${e=>{this.isLoading||(e.currentTarget.disabled=!0,this.loadInventory())}}
        >
          تلاش دوباره
        </button>
      </div>`;let t;t=e===`flags`?a`${this.renderUnequip(`flags`)}${this.renderFlagGrid()}`:e===`crowns`?a`${this.renderUnequip(`crowns`)}${this.renderCrownGrid()}`:e===`effects`?a`<div data-inventory-grid="effects" class="min-w-0">
        <effects-grid
          mode="select"
          tabbed
          .cosmetics=${this.cosmetics}
          .userMeResponse=${this.userMeResponse}
          .search=${this.search}
        ></effects-grid>
      </div>`:a`${this.renderUnequip(`skins`)}${this.renderSkinGrid()}`;let n=e;return a`
      ${this.ownershipState===`guest`?a`<div data-inventory-sign-in>
            ${w(()=>window.showPage?.(`page-account`),`برای دیدن ظاهرهای ذخیره‌شده وارد حساب شوید.`)}
          </div>`:i}
      ${this.renderLoadoutMenu()}
      <inventory-loadout-bar
        .entries=${this.loadoutEntries()}
        .activeCategory=${n}
        .onCategorySelect=${e=>this.setActiveTab(e)}
      ></inventory-loadout-bar>
      <div class="px-3 pb-3">${t}</div>
    `}open(e){let t=this.modalConfig().tabs??[],n=(typeof e?.tab==`string`&&t.some(t=>t.key===e.tab)?e.tab:null)??(this.activeTab||t[0]?.key);super.open({...e,...n?{tab:n}:{}})}async onOpen(){if(this.ownershipState===`loading`||this.cosmetics===null&&!this.loadFailed){await this.loadInventory();return}this.updateFromSettings()}onClose(){this.search=``,this.previewingCosmetic=null,this.pages.reset()}onTabEnter(e){this.search=``}selectCosmetic(e){e.type===`pattern`?this.selectPattern(_(e),e):e.type===`skin`&&(this.selectSkin(e.cosmetic?.name??null),this.showSelectedPopup(e))}selectSkin(e){this.userSettings.setSelectedPatternName(e===null?void 0:`skin:${e}`)}selectCrown(e){this.userSettings.setSelectedCrownName(e.cosmetic?.name??void 0),this.showSelectedPopup(e)}selectFlag(e){this.userSettings.setFlag(e.key),this.showSelectedPopup(e)}selectPattern(e,t){if(e===null)this.userSettings.setSelectedPatternName(void 0);else{let t=e.colorPalette?.name===void 0?e.name:`${e.name}:${e.colorPalette.name}`;this.userSettings.setSelectedPatternName(`pattern:${t}`)}this.showSelectedPopup(t)}showSelectedPopup(e){this.showMessage(`${E(e)} انتخاب شد`)}showMessage(e){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:2e3}}))}async refresh(){this.requestUpdate()}};o([n()],j.prototype,`search`,void 0),o([n()],j.prototype,`isLoading`,void 0),o([n()],j.prototype,`loadFailed`,void 0),o([n()],j.prototype,`ownershipState`,void 0),o([n()],j.prototype,`previewingCosmetic`,void 0),j=o([r(`inventory-modal`)],j);export{j as InventoryModal};