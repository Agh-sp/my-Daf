import{$ as e,Q as t,Z as n,et as r,nt as i,rt as a,st as o,t as s,tt as c,z as l}from"./decorate-CgSmyiMM.js";import{An as u,In as d,J as f,Jt as p,Mn as m,Nn as h,Pn as g,Qt as _,Yt as v,br as y,bt as b,cn as x,en as S,ln as C,mn as w,nn as T,nr as E,rn as D,rr as O,un as k,vt as A,yt as j}from"./index-7sHmUmdC.js";import"./PlutoniumIcon-CJSYyEzH.js";import{t as M}from"./LeaderboardTribeTable-DULeSpxu.js";import{r as N,t as P}from"./PurchaseButton-BpCK0VMX.js";import{c as F,s as I,t as L}from"./CosmeticCard-BXaUBys2.js";import"./InsufficientCurrencyDialog-DAA2ok6U.js";import{t as R}from"./EffectsGrid-U6iDrhWq.js";var z=20,B=2e3,V=class extends c{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=C(await k({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await E(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(B,Math.max(z,Math.floor(e))):z}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let e=`$${this.priceDollars}`;return o`
      <article
        data-custom-currency-card
        data-cosmetic-shell
        data-cosmetic-rarity="common"
        style="background:linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);border-color:rgba(255,255,255,0.15)"
        class="relative flex h-full w-full flex-col items-center overflow-visible rounded-xl border border-white/20 transition-all duration-200 ease-out hover:-translate-y-1 hover:z-10 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        <span
          data-custom-currency-name
          class="w-full whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white"
          >${l(`store.custom_amount`)}</span
        >

        <div
          data-cosmetic-main
          class="group relative flex w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
        >
          <div
            data-custom-currency-preview
            class="relative flex w-full aspect-square flex-col items-center justify-center gap-1 overflow-hidden rounded-lg bg-white/5 p-2"
          >
            <plutonium-icon class="block shrink-0" .size=${64}></plutonium-icon>
            <label for="custom-plutonium-amount" class="sr-only"
              >${l(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${l(`store.plutonium_amount`)}
              min=${z}
              max=${B}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${l(`cosmetics.hard`)}</span
            >
            <span
              data-custom-currency-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${e}</span
            >
          </div>

          <input
            type="range"
            class="w-full accent-green-500 cursor-pointer"
            aria-label=${l(`store.plutonium_amount`)}
            min=${z}
            max=${B}
            step="1"
            .value=${String(this.amount)}
            @input=${this.onSlider}
          />
        </div>

        <div data-cosmetic-action class="mt-auto w-full px-3 pb-3 pt-2">
          <purchase-button
            class="block w-full"
            .dollarPrice=${e}
            .onPurchaseDollar=${this.buy}
            .inlineCheckout=${{request:{kind:`custom_currency`,hardAmount:this.amount},amountCents:this.amount*5,successMessageKey:`store.custom_currency_purchase_success`}}
          ></purchase-button>
        </div>
      </article>
    `}};s([t()],V.prototype,`amount`,void 0),V=s([r(`custom-currency-card`)],V);var H=class extends c{constructor(...e){super(...e),this.pack=null,this.actionContent=a,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(i(o``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){L(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&i(this.pack?this.renderOverlay(this.pack):o``,this.portal),o``}renderOverlay(e){let t=e.cosmetic,n=e.packItems??[];return o`<div
      class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
      @click=${e=>{e.target===e.currentTarget&&this.close()}}
      @open-cosmetic-preview=${this.relayPreview}
    >
      <div
        data-pack-contents
        role="dialog"
        aria-label=${t.displayName}
        class="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl"
      >
        <button
          type="button"
          aria-label=${l(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${t.displayName}
        </h2>
        ${t.description?o`<p class="mb-4 text-sm text-white/60">${t.description}</p>`:o`<div class="mb-4"></div>`}
        ${n.length===0?o`<p class="py-6 text-center text-sm text-white/50">
              ${l(`store.pack_no_items`)}
            </p>`:o`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              ${n.map(e=>o`<div
                    data-pack-contents-item=${e.key}
                    class="flex min-w-0 flex-col items-center gap-1"
                  >
                    <cosmetic-card
                      class="block w-full"
                      .resolved=${e}
                      .onActivate=${e=>this.openPreview(e)}
                    ></cosmetic-card>
                    <span
                      data-pack-contents-type
                      class="text-[10px] font-bold uppercase tracking-wider text-white/50"
                      >${F(e)}</span
                    >
                  </div>`)}
            </div>`}
        ${this.actionContent===a?a:o`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
              ${this.actionContent}
            </div>`}
      </div>
    </div>`}};s([e({attribute:!1})],H.prototype,`pack`,void 0),s([e({attribute:!1})],H.prototype,`actionContent`,void 0),H=s([r(`pack-contents-dialog`)],H);var U=class extends c{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await u(e);t===this.loadSeq&&(this.stats=n)}renderFigures(e){return o`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${l(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${l(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${l(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(e){let t=M(e.window.start),n=M(e.window.end),r=t!==null&&n!==null?l(`store.tribe_stats_window`,{days:e.window.days,start:t,end:n}):l(`store.tribe_stats_window_short`,{days:e.window.days});return o`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${l(`store.tribe_stats_owner`)}
        </span>
        <player-name
          class="min-w-0"
          .username=${e.ownerUsername}
          .publicId=${e.ownerPublicId}
        ></player-name>
      </div>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${r}
        </h3>
        ${this.renderFigures(e.window)}
      </section>
      <section class="flex flex-col gap-2">
        <h3 class="text-xs font-bold uppercase tracking-wider text-white/60">
          ${l(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(e.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?b():this.stats===!1?o`<p class="text-sm font-medium text-red-400">
        ${l(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return a;let e=this.stats.activeBoosts;return e===0?a:o`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${l(`store.tribe_stats_boosted`,{multiplier:e+1})}
    </span>`}render(){return o`<div class="flex flex-col gap-4">
      ${A({titleContent:o`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:l(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};s([e({attribute:!1})],U.prototype,`tribeName`,void 0),s([t()],U.prototype,`stats`,void 0),U=s([r(`tribe-stats-view`)],U);var W,G=100,K={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},q={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},J=W=class extends c{constructor(...e){super(...e),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async e=>{if(e.preventDefault(),this.purchasing)return;let t=this.input?.value.trim()??``;if(t.length===0){this.notice={kind:`error`,text:l(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let n=await d(t);if(this.purchasing=!1,n.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:l(`store.tribe_purchase_live`,{name:n.data.displayName})},await this.refreshAfterPurchase();return}if(n.code===`debt`){this.notice={kind:`error`,text:l(`store.pack_debt`,{debt:n.debt})},await this.refreshAfterPurchase();return}if(n.code===`insufficient_balance`){let e=await this.refreshAfterPurchase(),n=this.price;if(n===null||e===!1){this.notice={kind:`error`,text:l(`store.purchase_failed`)};return}let r=W.hardBalanceOf(e),i=W.balanceOutcome(r,n);if(i!==`shortfall`){this.notice={kind:`error`,text:i===`debt`?this.debtText(-r):l(`store.purchase_failed`)};return}this.showInsufficient(t,n,r);return}if(n.code===`duplicate`){this.notice={kind:`error`,text:l(`store.tribe_duplicate`)};return}if(n.code===`rate_limited`){let e=n.retryAfterSeconds;this.notice={kind:`error`,text:e&&e>0?l(`store.tribe_rate_limited`,{seconds:e}):l(`store.purchase_failed`)};return}this.notice={kind:`error`,text:W.refusalText(n)}},this.boost=async e=>{let t=this.tribeNamesConfig;if(t===null||this.boostingId!==null)return;let n=t.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<n){this.showInsufficient(e.displayName,n,this.hardBalance);return}if(!await O(l(`store.tribe_boost_confirm`,{name:e.displayName,price:n,days:t.boostDurationDays}),{heading:l(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=e.id,this.boostNotice=null;let r=await w(e.id,crypto.randomUUID());if(this.boostingId=null,r.ok){this.boostNotice={kind:`success`,text:l(`store.tribe_boost_success`,{name:e.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.boostNotice={kind:`error`,text:l(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase();if(t===!1){this.boostNotice={kind:`error`,text:l(`store.tribe_boost_failed`)};return}let r=W.hardBalanceOf(t),i=W.balanceOutcome(r,n);if(i!==`shortfall`){this.boostNotice={kind:`error`,text:i===`debt`?this.debtText(-r):l(`store.tribe_boost_failed`)};return}this.showInsufficient(e.displayName,n,r);return}if(r.code===`not_found`){this.boostNotice={kind:`error`,text:l(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:l(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,t]=await Promise.all([m(),p()]);this.data=e,this.tribeNamesConfig=t?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),g();let e=await h();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(e){switch(e.code){case`length`:return l(`store.tribe_name_length`,{min:e.min,max:e.max});case`invalid_charset`:return l(`store.tribe_name_charset`);case`invalid_no_letter`:return l(`store.tribe_name_no_letter`);case`not_allowed`:return l(`store.tribe_name_not_allowed`);default:return l(`store.purchase_failed`)}}debtText(e){return l(`store.pack_debt`,{debt:String(e)})}showInsufficient(e,t,n){this.insufficientInfo={currency:l(`cosmetics.hard`),shortfall:Math.max(1,t-n),item:e,canTopUp:!0}}renderLoginPrompt(){return o`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${l(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${l(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let e=this.price;return o`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${l(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${l(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${l(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${G}
          placeholder=${l(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||e===null}
        >
          ${l(`store.purchase_tribe_button`)}
          ${e===null?``:o`<span class="flex items-center gap-1">
                <plutonium-icon .size=${18}></plutonium-icon>${e}
              </span>`}
        </button>
      </form>
      ${this.notice?o`<p
            class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
          >
            ${this.notice.text}
          </p>`:``}
    </section>`}renderBoostStatus(e){let t=e.activeBoosts??0;if(t===0)return a;let n=t===1?l(`store.tribe_boost_count`):l(`store.tribe_boost_count_plural`,{count:t}),r=e.boostExpiresAt?new Date(e.boostExpiresAt):null,i=r!==null&&!Number.isNaN(r.getTime())?r.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return o`<span class="text-xs text-amber-300 mt-0.5">
      ${n}${i?o` ·
          ${l(`store.tribe_boost_next_expiry`,{date:i})}`:``}
    </span>`}renderBoostButton(e){let t=this.tribeNamesConfig;return t===null||K[e.status]!==`active`?a:o`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(e)}
    >
      ${l(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${t.boostPriceHard}
      </span>
    </button>`}renderStatsButton(e){return K[e.status]===`active`?o`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=e.displayName}
    >
      ${l(`store.tribe_stats_button`)}
    </button>`:a}renderTribeRow(e){let t=q[K[e.status]];return o`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${e.displayName}</span>
        ${this.renderBoostStatus(e)}
        ${e.reviewReason?o`<span class="text-xs text-white/50 mt-0.5"
              >${e.reviewReason}</span
            >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(e)} ${this.renderBoostButton(e)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${t.classes}"
        >
          ${l(t.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return b();if(this.data===!1)return o`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${l(`store.tribes_load_failed`)}
      </p>`;let e=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return e.length===0?o`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${l(`store.no_tribes`)}
      </p>`:o`<div class="flex flex-col gap-2">
      ${e.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?o`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${l(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?o`<p
              class="text-sm font-medium px-1 ${this.boostNotice.kind===`success`?`text-green-400`:`text-red-400`}"
            >
              ${this.boostNotice.text}
            </p>`:``}
        ${this.renderList()}
      </section>
      <insufficient-currency-dialog
        .info=${this.insufficientInfo}
        @close=${()=>this.insufficientInfo=null}
      ></insufficient-currency-dialog>
    </div>`:o`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};s([e({attribute:!1})],J.prototype,`userMeResponse`,void 0),s([t()],J.prototype,`data`,void 0),s([t()],J.prototype,`purchasing`,void 0),s([t()],J.prototype,`notice`,void 0),s([t()],J.prototype,`tribeNamesConfig`,void 0),s([t()],J.prototype,`boostingId`,void 0),s([t()],J.prototype,`boostNotice`,void 0),s([t()],J.prototype,`insufficientInfo`,void 0),s([t()],J.prototype,`statsName`,void 0),s([n(`#tribe-name-input`)],J.prototype,`input`,void 0),J=W=s([r(`tribes-panel`)],J);var Y=[`patterns`,`flags`,`crowns`];function X(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var Z=class extends j{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new R(this),this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.alignFrame=null}modalConfig(){return this.affiliateCode?{}:{tabs:[{key:`packs`,label:`بسته‌ها`},{key:`subscriptions`,label:`اشتراک‌ها`},{key:`bundles`,label:`مجموعه‌ها`},{key:`cosmetics`,label:`ظاهرها`},{key:`effects`,label:`جلوه‌ها`},{key:`tribes`,label:`قبیله‌ها`}]}}connectedCallback(){super.connectedCallback(),this.dir=`rtl`,document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=f();e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>P(this)),this.rowObserver.observe(this))}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect(),this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,super.disconnectedCallback()}updated(e){super.updated(e),P(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,P(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,await this.refresh()}renderHeader(){return A({title:`فروشگاه`,onBack:()=>this.close(),ariaLabel:`بازگشت`})}resolvedPurchasables(){return D(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.relationship===`purchasable`)}cosmeticsGroups(e){let t=this.resolvedPurchasables();return e===`flags`?t.filter(e=>e.type===`flag`).map(e=>[e]):e===`crowns`?t.filter(e=>e.type===`crown`).map(e=>[e]):_(t.filter(e=>e.type===`pattern`||e.type===`skin`))}groupsForTab(e){return this.affiliateCode?_(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode})):e===`cosmetics`?this.cosmeticsGroups(this.cosmeticsSubTab):e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?D(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?D(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){e.type===`cosmeticPack`&&(this.openedPack=e),L(e)&&(this.previewingCosmetic=e),this.inspect(e)}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>N(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return S(e.cosmetic,this.userMeResponse).map(t=>{let n=v(t,e.packItems??[]);return n?I(n):t.name})}renderStatus(e,t=!1){return o`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderCardAction(e,t){if(e.type===`subscription`&&e.relationship===`owned`)return this.renderStatus(l(`store.subscribed`));if(e.type===`cosmeticPack`){if(e.relationship===`owned`)return this.renderStatus(l(`store.pack_owned`));if(e.relationship===`blocked`)return this.renderStatus(l(`store.pack_partially_owned`,{items:this.ownedPackItemNames(e).join(`, `)}),!0)}return this.renderPurchaseAction(e,t)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`){return o`${e.map(e=>{let r=e.find(e=>e.key===this.inspected?.key),i=r??e[0],a=this.renderCardAction(i,t);return o`<cosmetic-card
        data-store-product
        data-cosmetic-key=${e[0].key}
        class=${n}
        .resolved=${e[0]}
        .variants=${e.length>1||e[0].type===`pattern`||e[0].type===`skin`?e:[]}
        .activeVariantKey=${i.key}
        .actionContent=${a}
        state=${r?`focused`:`idle`}
        .onActivate=${e=>this.activate(e)}
        .onVariantActivate=${e=>this.inspect(e)}
      ></cosmetic-card>`})}`}renderPurchaseAction(e,t){let n=e.cosmetic,r=e.relationship===`purchasable`,i=r&&(e.type===`pack`||e.type===`subscription`)?n?.product??null:null,a=r?n?.priceHard:void 0,s=r?n?.priceSoft:void 0,c=t=>T(e,t),u=e.type===`pack`&&i!==null&&n?.name!==void 0?x(i.price):null;return o`<purchase-button
      .product=${i}
      .inlineCheckout=${u===null?null:{request:{kind:`currency_pack`,packName:n.name},amountCents:u,successMessageKey:`store.currency_pack_purchase_success`}}
      .priceHard=${a??null}
      .priceSoft=${s??null}
      .rarity=${n?.rarity??`common`}
      .itemName=${I(e)}
      .dollarLabelKey=${e.type===`subscription`&&t?`store.switch_button`:``}
      .priceSuffix=${e.type===`subscription`?l(`store.price_per_month`):``}
      .onPurchaseDollar=${i?()=>c(`dollar`):void 0}
      .onPurchaseHard=${a===void 0?void 0:()=>c(`hard`)}
      .onPurchaseSoft=${s===void 0?void 0:()=>c(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return o`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(e,t){let n=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,e),r=e.length===0?t.trailingContent?o``:o`<div
              class=${`${t.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${l(t.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(n.items,t.userHasSubscription,t.cardClass);return this.renderBrowserLayout(o`${r}${n.more}${t.trailingContent??``}`,t.gridClass)}renderCosmeticsPanel(){let e=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:`store.no_skins`;return o`
      <div
        class="flex items-center justify-center gap-6 border-b border-white/10 px-4"
      >
        ${Y.map(e=>o`<button
            class="-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(e)}
          >
            ${l(`store.${e}`)}
          </button>`)}
      </div>
      ${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:e})}
    `}renderEffectGrid(){return o`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:o`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return o`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.openedPack&&!this.previewingCosmetic?o`<pack-contents-dialog
          .pack=${this.openedPack}
          .actionContent=${this.renderCardAction(this.openedPack,!1)}
          @close=${()=>this.closePack()}
        ></pack-contents-dialog>`:``}`}renderSubscriptionGrid(){let e=this.userMeResponse===!1?null:this.userMeResponse.player.subscription,t=e!==null&&!y(e);return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:t,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderHeaderSlot(){return o`${this.renderHeader()}
    ${this.previewingCosmetic?o`<cosmetic-preview-modal
          .resolved=${this.previewingCosmetic}
          @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
        ></cosmetic-preview-modal>`:``}`}renderBody(e){return o`<section
      data-store-empty
      dir="rtl"
      class="grid min-h-64 place-items-center px-6 py-16 text-center text-lg font-bold text-white/60"
    >
      خالی
    </section>`}renderTribeGrid(){return this.authSettled?o`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:o``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(){this.affiliateCode=null,this.requestedItem=null,await this.refresh()}onClose(){for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.requestUpdate()}};s([t()],Z.prototype,`authSettled`,void 0),Z=s([r(`store-modal`)],Z);export{Z as StoreModal,X as subTabForItem};