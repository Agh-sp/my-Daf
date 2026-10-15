import{a as e,h as t,m as n,y as r}from"./vendor-DPAo4oW-.js";import{$ as i,Q as a,Z as o,et as s,nt as c,rt as l,st as u,t as d,tt as f,z as p}from"./decorate-CgSmyiMM.js";import{An as m,In as h,J as g,Jt as _,Mn as v,Nn as y,Pn as b,Qt as x,Yt as S,ar as C,bt as w,cn as T,en as ee,ln as E,mn as D,nn as O,or as k,rn as A,sr as j,un as M,vt as N,wr as P,yt as F}from"./index-DiWC4IbR.js";import"./PlutoniumIcon-BTk-nwdd.js";import{t as I}from"./LeaderboardTribeTable-By-1UK_1.js";import{r as L,t as R}from"./PurchaseButton-QCz1vsr8.js";import{c as z,s as B,t as V}from"./CosmeticCard-DQbOYROv.js";import"./InsufficientCurrencyDialog-DAA2ok6U.js";import{t as H}from"./EffectsGrid-C6uXg7I1.js";var U=20,W=2e3,G=class extends f{constructor(...e){super(...e),this.amount=100,this.buy=async()=>{let e=E(await M({kind:`custom_currency`,hardAmount:this.amount}),`store.custom_currency_purchase_success`);e!==null&&await C(e)}}createRenderRoot(){return this}clamp(e){return Number.isFinite(e)?Math.min(W,Math.max(U,Math.floor(e))):U}get priceDollars(){return(this.amount/20).toFixed(2)}onSlider(e){this.amount=this.clamp(Number(e.target.value))}onInputChange(e){this.amount=this.clamp(Number(e.target.value))}render(){let e=`$${this.priceDollars}`;return u`
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
          >${p(`store.custom_amount`)}</span
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
              >${p(`store.plutonium_amount`)}</label
            >
            <input
              id="custom-plutonium-amount"
              type="number"
              class="custom-plutonium-input w-full min-w-0 max-w-24 text-center bg-black/30 border border-green-500/30 rounded px-1 py-0.5 text-lg font-black leading-none text-green-400 outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400/40"
              aria-label=${p(`store.plutonium_amount`)}
              min=${U}
              max=${W}
              step="1"
              .value=${String(this.amount)}
              @change=${this.onInputChange}
            />
            <span
              class="text-[10px] font-bold leading-none text-white/50 uppercase"
              >${p(`cosmetics.hard`)}</span
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
            aria-label=${p(`store.plutonium_amount`)}
            min=${U}
            max=${W}
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
    `}};d([a()],G.prototype,`amount`,void 0),G=d([s(`custom-currency-card`)],G);var K=class extends f{constructor(...e){super(...e),this.pack=null,this.actionContent=l,this.portal=null,this.onKeyDown=e=>{e.key===`Escape`&&this.close()},this.relayPreview=e=>{e.stopPropagation(),this.openPreview(e.detail)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),window.addEventListener(`keydown`,this.onKeyDown)}disconnectedCallback(){window.removeEventListener(`keydown`,this.onKeyDown),this.portal&&=(c(u``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}close(){this.dispatchEvent(new CustomEvent(`close`))}openPreview(e){V(e)&&this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:e}))}render(){return this.portal&&c(this.pack?this.renderOverlay(this.pack):u``,this.portal),u``}renderOverlay(e){let t=e.cosmetic,n=e.packItems??[];return u`<div
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
          aria-label=${p(`common.close`)}
          @click=${()=>this.close()}
          class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          ×
        </button>
        <h2 class="mb-1 pr-8 text-lg font-bold text-white">
          ${t.displayName}
        </h2>
        ${t.description?u`<p class="mb-4 text-sm text-white/60">${t.description}</p>`:u`<div class="mb-4"></div>`}
        ${n.length===0?u`<p class="py-6 text-center text-sm text-white/50">
              ${p(`store.pack_no_items`)}
            </p>`:u`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
              ${n.map(e=>u`<div
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
                      >${z(e)}</span
                    >
                  </div>`)}
            </div>`}
        ${this.actionContent===l?l:u`<div data-pack-contents-action class="mx-auto mt-4 max-w-xs">
              ${this.actionContent}
            </div>`}
      </div>
    </div>`}};d([i({attribute:!1})],K.prototype,`pack`,void 0),d([i({attribute:!1})],K.prototype,`actionContent`,void 0),K=d([s(`pack-contents-dialog`)],K);var q=class extends f{constructor(...e){super(...e),this.tribeName=``,this.stats=null,this.loadSeq=0}createRenderRoot(){return this}updated(e){e.has(`tribeName`)&&this.tribeName!==``&&this.load(this.tribeName)}async load(e){let t=++this.loadSeq;this.stats=null;let n=await m(e);t===this.loadSeq&&(this.stats=n)}renderFigures(e){return u`<div class="grid grid-cols-2 gap-2">
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${p(`store.tribe_stats_games`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.gamesAppeared.toLocaleString()}
        </span>
      </div>
      <div
        class="bg-surface rounded-lg border border-white/10 px-3 py-2 flex flex-col"
        title=${p(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-white/40"
        >
          ${p(`leaderboard_modal.tribes_reach`)}
        </span>
        <span class="font-mono text-lg text-white">
          ${e.playerReach.toLocaleString()}
        </span>
      </div>
    </div>`}renderStats(e){let t=I(e.window.start),n=I(e.window.end),r=t!==null&&n!==null?p(`store.tribe_stats_window`,{days:e.window.days,start:t,end:n}):p(`store.tribe_stats_window_short`,{days:e.window.days});return u`<div class="flex flex-col gap-4">
      <div class="flex items-center gap-2 text-sm">
        <span class="text-white/40 font-medium">
          ${p(`store.tribe_stats_owner`)}
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
          ${p(`store.tribe_stats_lifetime`)}
        </h3>
        ${this.renderFigures(e.lifetime)}
      </section>
    </div>`}renderBody(){return this.stats===null?w():this.stats===!1?u`<p class="text-sm font-medium text-red-400">
        ${p(`store.tribe_stats_failed`)}
      </p>`:this.renderStats(this.stats)}renderBoostedBadge(){if(this.stats===null||this.stats===!1)return l;let e=this.stats.activeBoosts;return e===0?l:u`<span
      class="shrink-0 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded px-2 py-0.5"
    >
      ${p(`store.tribe_stats_boosted`,{multiplier:e+1})}
    </span>`}render(){return u`<div class="flex flex-col gap-4">
      ${N({titleContent:u`<span
          class="text-white text-xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
        >
          ${this.stats!==null&&this.stats!==!1?this.stats.name:this.tribeName} ${this.renderBoostedBadge()}
        </span>`,onBack:()=>this.dispatchEvent(new CustomEvent(`back`)),ariaLabel:p(`common.back`),padded:!1,showDivider:!1})}
      ${this.renderBody()}
    </div>`}};d([i({attribute:!1})],q.prototype,`tribeName`,void 0),d([a()],q.prototype,`stats`,void 0),q=d([s(`tribe-stats-view`)],q);var J,Y=100,X={pending:`active`,live:`active`,rejected:`rejected`,revoked:`rejected`},Z={active:{labelKey:`store.tribe_status_active`,classes:`bg-green-500/20 text-green-300 border-green-500/30`},rejected:{labelKey:`store.tribe_status_rejected`,classes:`bg-red-500/20 text-red-300 border-red-500/30`}},Q=J=class extends f{constructor(...e){super(...e),this.userMeResponse=!1,this.data=null,this.purchasing=!1,this.notice=null,this.tribeNamesConfig=null,this.boostingId=null,this.boostNotice=null,this.insufficientInfo=null,this.statsName=null,this.loadStarted=!1,this.submit=async e=>{if(e.preventDefault(),this.purchasing)return;let t=this.input?.value.trim()??``;if(t.length===0){this.notice={kind:`error`,text:p(`store.tribe_name_required`)};return}if(this.hardBalance<0){this.notice={kind:`error`,text:this.debtText(-this.hardBalance)};return}this.purchasing=!0,this.notice=null;let n=await h(t);if(this.purchasing=!1,n.ok){this.input&&(this.input.value=``),this.notice={kind:`success`,text:p(`store.tribe_purchase_live`,{name:n.data.displayName})},await this.refreshAfterPurchase();return}if(n.code===`debt`){this.notice={kind:`error`,text:p(`store.pack_debt`,{debt:n.debt})},await this.refreshAfterPurchase();return}if(n.code===`insufficient_balance`){let e=await this.refreshAfterPurchase(),n=this.price;if(n===null||e===!1){this.notice={kind:`error`,text:p(`store.purchase_failed`)};return}let r=J.hardBalanceOf(e),i=J.balanceOutcome(r,n);if(i!==`shortfall`){this.notice={kind:`error`,text:i===`debt`?this.debtText(-r):p(`store.purchase_failed`)};return}this.showInsufficient(t,n,r);return}if(n.code===`duplicate`){this.notice={kind:`error`,text:p(`store.tribe_duplicate`)};return}if(n.code===`rate_limited`){let e=n.retryAfterSeconds;this.notice={kind:`error`,text:e&&e>0?p(`store.tribe_rate_limited`,{seconds:e}):p(`store.purchase_failed`)};return}this.notice={kind:`error`,text:J.refusalText(n)}},this.boost=async e=>{let t=this.tribeNamesConfig;if(t===null||this.boostingId!==null)return;let n=t.boostPriceHard;if(this.hardBalance<0){this.boostNotice={kind:`error`,text:this.debtText(-this.hardBalance)};return}if(this.hardBalance<n){this.showInsufficient(e.displayName,n,this.hardBalance);return}if(!await k(p(`store.tribe_boost_confirm`,{name:e.displayName,price:n,days:t.boostDurationDays}),{heading:p(`store.tribe_boost_heading`),variant:`warning`}))return;this.boostingId=e.id,this.boostNotice=null;let r=await D(e.id,crypto.randomUUID());if(this.boostingId=null,r.ok){this.boostNotice={kind:`success`,text:p(`store.tribe_boost_success`,{name:e.displayName})},await this.refreshAfterPurchase();return}if(r.code===`debt`){this.boostNotice={kind:`error`,text:p(`store.pack_debt`,{debt:r.debt})},await this.refreshAfterPurchase();return}if(r.code===`insufficient_balance`){let t=await this.refreshAfterPurchase();if(t===!1){this.boostNotice={kind:`error`,text:p(`store.tribe_boost_failed`)};return}let r=J.hardBalanceOf(t),i=J.balanceOutcome(r,n);if(i!==`shortfall`){this.boostNotice={kind:`error`,text:i===`debt`?this.debtText(-r):p(`store.tribe_boost_failed`)};return}this.showInsufficient(e.displayName,n,r);return}if(r.code===`not_found`){this.boostNotice={kind:`error`,text:p(`store.tribe_boost_gone`)},await this.load();return}this.boostNotice={kind:`error`,text:p(`store.tribe_boost_failed`)}}}createRenderRoot(){return this}updated(){!this.loadStarted&&this.userMeResponse!==!1&&(this.loadStarted=!0,this.load())}async load(){let[e,t]=await Promise.all([v(),_()]);this.data=e,this.tribeNamesConfig=t?.tribeNames??null}get price(){return this.tribeNamesConfig?.priceHard??null}get hardBalance(){return this.userMeResponse===!1?0:this.userMeResponse.player.currency?.hard??0}async refreshAfterPurchase(){await this.load(),b();let e=await y();return e===!1?!1:(document.dispatchEvent(new CustomEvent(`userMeResponse`,{detail:e,bubbles:!0,cancelable:!0})),e)}static hardBalanceOf(e){return e===!1?0:e.player.currency?.hard??0}static balanceOutcome(e,t){return e<0?`debt`:t-e<=0?`unexplained`:`shortfall`}static refusalText(e){switch(e.code){case`length`:return p(`store.tribe_name_length`,{min:e.min,max:e.max});case`invalid_charset`:return p(`store.tribe_name_charset`);case`invalid_no_letter`:return p(`store.tribe_name_no_letter`);case`not_allowed`:return p(`store.tribe_name_not_allowed`);default:return p(`store.purchase_failed`)}}debtText(e){return p(`store.pack_debt`,{debt:String(e)})}showInsufficient(e,t,n){this.insufficientInfo={currency:p(`cosmetics.hard`),shortfall:Math.max(1,t-n),item:e,canTopUp:!0}}renderLoginPrompt(){return u`<div
      class="flex flex-col items-center justify-center gap-4 py-16 text-center"
    >
      <p class="text-white/60 font-medium">
        ${p(`store.tribes_login_required`)}
      </p>
      <button
        class="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer"
        @click=${()=>window.showPage?.(`page-account`)}
      >
        ${p(`main.sign_in`)}
      </button>
    </div>`}renderPurchaseCard(){let e=this.price;return u`<section
      class="bg-surface rounded-xl border border-white/10 p-6 flex flex-col gap-3"
    >
      <h3 class="text-lg font-bold text-white">
        ${p(`store.tribes_purchase_heading`)}
      </h3>
      <p class="text-white/60 text-sm leading-relaxed">
        ${p(`store.tribes_purchase_description`)}
      </p>
      <form class="flex flex-col sm:flex-row gap-2" @submit=${this.submit}>
        <label for="tribe-name-input" class="sr-only"
          >${p(`store.tribe_name_placeholder`)}</label
        >
        <input
          id="tribe-name-input"
          type="text"
          maxlength=${Y}
          placeholder=${p(`store.tribe_name_placeholder`)}
          class="flex-1 min-w-0 bg-black/30 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/40"
          ?disabled=${this.purchasing}
        />
        <button
          type="submit"
          class="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded px-4 py-2 whitespace-nowrap transition-colors cursor-pointer"
          ?disabled=${this.purchasing||e===null}
        >
          ${p(`store.purchase_tribe_button`)}
          ${e===null?``:u`<span class="flex items-center gap-1">
                <plutonium-icon .size=${18}></plutonium-icon>${e}
              </span>`}
        </button>
      </form>
      ${this.notice?u`<p
            class="text-sm font-medium ${this.notice.kind===`success`?`text-green-400`:`text-red-400`}"
          >
            ${this.notice.text}
          </p>`:``}
    </section>`}renderBoostStatus(e){let t=e.activeBoosts??0;if(t===0)return l;let n=t===1?p(`store.tribe_boost_count`):p(`store.tribe_boost_count_plural`,{count:t}),r=e.boostExpiresAt?new Date(e.boostExpiresAt):null,i=r!==null&&!Number.isNaN(r.getTime())?r.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):null;return u`<span class="text-xs text-amber-300 mt-0.5">
      ${n}${i?u` ·
          ${p(`store.tribe_boost_next_expiry`,{date:i})}`:``}
    </span>`}renderBoostButton(e){let t=this.tribeNamesConfig;return t===null||X[e.status]!==`active`?l:u`<button
      class="shrink-0 flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      ?disabled=${this.boostingId!==null}
      @click=${()=>this.boost(e)}
    >
      ${p(`store.tribe_boost_button`)}
      <span class="flex items-center gap-0.5 normal-case">
        <plutonium-icon .size=${14}></plutonium-icon>${t.boostPriceHard}
      </span>
    </button>`}renderStatsButton(e){return X[e.status]===`active`?u`<button
      class="shrink-0 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-xs font-bold uppercase tracking-wider rounded px-2.5 py-1.5 transition-colors cursor-pointer"
      @click=${()=>this.statsName=e.displayName}
    >
      ${p(`store.tribe_stats_button`)}
    </button>`:l}renderTribeRow(e){let t=Z[X[e.status]];return u`<div
      class="flex items-center justify-between gap-3 bg-surface rounded-lg border border-white/10 px-4 py-3"
    >
      <div class="flex flex-col min-w-0">
        <span class="font-bold text-white truncate">${e.displayName}</span>
        ${this.renderBoostStatus(e)}
        ${e.reviewReason?u`<span class="text-xs text-white/50 mt-0.5"
              >${e.reviewReason}</span
            >`:``}
      </div>
      <div class="shrink-0 flex items-center gap-2">
        ${this.renderStatsButton(e)} ${this.renderBoostButton(e)}
        <span
          class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${t.classes}"
        >
          ${p(t.labelKey)}
        </span>
      </div>
    </div>`}renderList(){if(this.data===null)return w();if(this.data===!1)return u`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${p(`store.tribes_load_failed`)}
      </p>`;let e=[...this.data.names].sort((e,t)=>(t.activeBoosts??0)-(e.activeBoosts??0));return e.length===0?u`<p
        class="text-white/40 text-sm font-bold uppercase tracking-wider text-center py-8"
      >
        ${p(`store.no_tribes`)}
      </p>`:u`<div class="flex flex-col gap-2">
      ${e.map(e=>this.renderTribeRow(e))}
    </div>`}render(){return this.userMeResponse===!1?this.renderLoginPrompt():this.statsName===null?u`<div
      class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
    >
      ${this.renderPurchaseCard()}
      <section class="flex flex-col gap-3">
        <h3
          class="text-sm font-bold uppercase tracking-wider text-white/60 px-1"
        >
          ${p(`store.your_tribes_heading`)}
        </h3>
        ${this.boostNotice?u`<p
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
    </div>`:u`<div
        class="p-6 lg:p-8 flex flex-col gap-6 max-w-2xl mx-auto w-full"
      >
        <tribe-stats-view
          .tribeName=${this.statsName}
          @back=${()=>this.statsName=null}
        ></tribe-stats-view>
      </div>`}};d([i({attribute:!1})],Q.prototype,`userMeResponse`,void 0),d([a()],Q.prototype,`data`,void 0),d([a()],Q.prototype,`purchasing`,void 0),d([a()],Q.prototype,`notice`,void 0),d([a()],Q.prototype,`tribeNamesConfig`,void 0),d([a()],Q.prototype,`boostingId`,void 0),d([a()],Q.prototype,`boostNotice`,void 0),d([a()],Q.prototype,`insufficientInfo`,void 0),d([a()],Q.prototype,`statsName`,void 0),d([o(`#tribe-name-input`)],Q.prototype,`input`,void 0),Q=J=d([s(`tribes-panel`)],Q);var te=t({categories:e(t({id:r(),name:r()})).default([]),products:e(t({id:r(),name:r(),description:r(),price:n().int().nonnegative(),currency:r(),imageUrl:r().nullable(),paymentUrl:r().nullable().optional(),categoryId:r().nullable().optional(),categoryName:r().nullable().optional()}))}),ne=[`patterns`,`flags`,`crowns`];function re(e){return e.startsWith(`crown:`)?`crowns`:e.startsWith(`flag:`)?`flags`:`patterns`}var $=class extends F{constructor(...e){super(...e),this.routerName=`store`,this.cosmetics=null,this.affiliateCode=null,this.userMeResponse=!1,this.authSettled=!1,this.localProducts=[],this.localProductCategories=[],this.selectedLocalCategory=``,this.localProductsError=!1,this.cosmeticsSubTab=`patterns`,this.requestedItem=null,this.inspected=null,this.previewingCosmetic=null,this.visibleGroups=[],this.openedPack=null,this.pages=new H(this),this.onUserMeEvent=e=>{let t=e;this.onUserMe(t.detail)},this.onOpenCosmeticPreview=e=>{let t=e;this.previewingCosmetic=t.detail,this.requestUpdate()},this.rowObserver=null,this.alignFrame=null}modalConfig(){return{tabs:[{key:`products`,label:`محصولات`}]}}connectedCallback(){super.connectedCallback(),this.dir=`rtl`,document.addEventListener(`userMeResponse`,this.onUserMeEvent);let e=g();e!==null&&this.onUserMe(e.response),this.addEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),typeof ResizeObserver<`u`&&(this.rowObserver??=new ResizeObserver(()=>R(this)),this.rowObserver.observe(this))}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.onUserMeEvent),this.removeEventListener(`open-cosmetic-preview`,this.onOpenCosmeticPreview),this.rowObserver?.disconnect(),this.alignFrame!==null&&cancelAnimationFrame(this.alignFrame),this.alignFrame=null,super.disconnectedCallback()}updated(e){super.updated(e),R(this),!(typeof requestAnimationFrame>`u`)&&(this.alignFrame??=requestAnimationFrame(()=>{this.alignFrame=null,R(this)}))}async onUserMe(e){this.userMeResponse=e,this.authSettled=!0,await this.refresh()}renderHeader(){return N({title:`فروشگاه`,onBack:()=>this.close(),ariaLabel:`بازگشت`})}resolvedPurchasables(){return A(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.relationship===`purchasable`)}cosmeticsGroups(e){let t=this.resolvedPurchasables();return e===`flags`?t.filter(e=>e.type===`flag`).map(e=>[e]):e===`crowns`?t.filter(e=>e.type===`crown`).map(e=>[e]):x(t.filter(e=>e.type===`pattern`||e.type===`skin`))}groupsForTab(e){return this.affiliateCode?x(this.resolvedPurchasables().filter(e=>{let t=e.cosmetic;return t!==null&&`affiliateCode`in t&&t.affiliateCode===this.affiliateCode})):e===`cosmetics`?this.cosmeticsGroups(this.cosmeticsSubTab):e===`effects`?this.resolvedPurchasables().filter(e=>e.type===`effect`).map(e=>[e]):e===`packs`?this.resolvedPurchasables().filter(e=>e.type===`pack`).map(e=>[e]):e===`bundles`?A(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`cosmeticPack`&&(e.relationship!==`blocked`||this.ownedPackItemNames(e).length>0)).map(e=>[e]):e===`subscriptions`?A(this.cosmetics,this.userMeResponse,this.affiliateCode).filter(e=>e.type===`subscription`&&(e.relationship===`purchasable`||e.relationship===`owned`)).map(e=>[e]):[]}inspect(e){this.inspected=e,this.requestUpdate()}activate(e){e.type===`cosmeticPack`&&(this.openedPack=e),V(e)&&(this.previewingCosmetic=e),this.inspect(e)}closePack(){this.openedPack=null,this.requestUpdate()}reconcileInspection(e){let t=e.flat(),n=this.requestedItem;if(n!==null){let e=t.find(e=>L(e.key,n));if(e!==void 0){this.requestedItem=null,this.inspected=e;return}}let r=t.find(e=>e.key===this.inspected?.key);this.inspected=r??e[0]?.[0]??null}selectVisible(e){this.visibleGroups=e,this.reconcileInspection(e)}onTabEnter(e){this.selectVisible(this.groupsForTab(e)),this.requestUpdate()}setCosmeticsSubTab(e){this.cosmeticsSubTab=e,this.selectVisible(this.cosmeticsGroups(e)),this.requestUpdate()}ownedPackItemNames(e){return ee(e.cosmetic,this.userMeResponse).map(t=>{let n=S(t,e.packItems??[]);return n?B(n):t.name})}renderStatus(e,t=!1){return u`<span
      data-store-status
      class="mt-2 flex min-h-11 w-full items-center justify-center rounded-lg border px-2 py-1.5 text-center font-bold ${t?`border-white/15 bg-white/5 text-xs text-white/60`:`border-emerald-500/40 bg-emerald-500/15 text-base text-emerald-300`}"
      >${e}</span
    >`}renderLocalProducts(){if(this.localProductsError)return u`<section
        role="alert"
        dir="rtl"
        class="p-8 text-center text-sm text-rose-300"
      >
        دریافت محصولات از سرور ناموفق بود.
      </section>`;let e=this.localProducts.filter(e=>!this.selectedLocalCategory||e.categoryId===this.selectedLocalCategory);return u`<section
      dir="rtl"
      class="p-4"
    >
      ${this.localProductCategories.length>0?u`<label class="mb-4 flex items-center gap-3 text-sm text-white/70">
            <span>${p(`store.local_product_category`)}</span>
            <select
              class="rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white"
              .value=${this.selectedLocalCategory}
              @change=${e=>this.selectedLocalCategory=e.target.value}
            >
              <option value="">${p(`store.local_product_all_categories`)}</option>
              ${this.localProductCategories.map(e=>u`<option value=${e.id}>${e.name}</option>`)}
            </select>
          </label>`:``}
      ${e.length===0?u`<p class="p-8 text-center text-sm text-white/45">
                ${p(this.selectedLocalCategory?`store.local_products_empty_category`:`store.local_products_empty`)}
              </p>`:u`<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      ${e.map(e=>u`<article
          class="overflow-hidden rounded-xl border border-white/10 bg-white/[.04]"
        >
          ${e.imageUrl?u`<img
                src=${e.imageUrl}
                alt=${e.name}
                loading="lazy"
                class="h-48 w-full object-cover"
              />`:``}
          <div class="space-y-2 p-4">
            <h3 class="font-bold text-white">${e.name}</h3>
            ${e.categoryName?u`<p class="text-xs text-sky-200">${e.categoryName}</p>`:``}
            <p class="whitespace-pre-wrap text-sm text-white/60">
              ${e.description}
            </p>
            <p class="font-bold text-amber-200">
              ${e.price.toLocaleString()} ${e.currency}
            </p>
            ${e.paymentUrl?u`<a
                  href=${e.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-300"
                  >${p(`store.local_product_pay`)}</a
                >`:``}
          </div>
        </article>`)}
      </div>`}
    </section>`}renderCardAction(e,t){if(e.type===`subscription`&&e.relationship===`owned`)return this.renderStatus(p(`store.subscribed`));if(e.type===`cosmeticPack`){if(e.relationship===`owned`)return this.renderStatus(p(`store.pack_owned`));if(e.relationship===`blocked`)return this.renderStatus(p(`store.pack_partially_owned`,{items:this.ownedPackItemNames(e).join(`, `)}),!0)}return this.renderPurchaseAction(e,t)}renderCosmeticCards(e=this.visibleGroups,t=!1,n=`block h-full min-w-0`){return u`${e.map(e=>{let r=e.find(e=>e.key===this.inspected?.key),i=r??e[0],a=this.renderCardAction(i,t);return u`<cosmetic-card
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
      ></cosmetic-card>`})}`}renderPurchaseAction(e,t){let n=e.cosmetic,r=e.relationship===`purchasable`,i=r&&(e.type===`pack`||e.type===`subscription`)?n?.product??null:null,a=r?n?.priceHard:void 0,o=r?n?.priceSoft:void 0,s=t=>O(e,t),c=e.type===`pack`&&i!==null&&n?.name!==void 0?T(i.price):null;return u`<purchase-button
      .product=${i}
      .inlineCheckout=${c===null?null:{request:{kind:`currency_pack`,packName:n.name},amountCents:c,successMessageKey:`store.currency_pack_purchase_success`}}
      .priceHard=${a??null}
      .priceSoft=${o??null}
      .rarity=${n?.rarity??`common`}
      .itemName=${B(e)}
      .dollarLabelKey=${e.type===`subscription`&&t?`store.switch_button`:``}
      .priceSuffix=${e.type===`subscription`?p(`store.price_per_month`):``}
      .onPurchaseDollar=${i?()=>s(`dollar`):void 0}
      .onPurchaseHard=${a===void 0?void 0:()=>s(`hard`)}
      .onPurchaseSoft=${o===void 0?void 0:()=>s(`soft`)}
    ></purchase-button>`}renderBrowserLayout(e,t=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`){return u`<div data-store-browser class="grid grid-cols-1 gap-4 p-3">
      <div data-store-grid class=${t}>${e}</div>
    </div>`}renderBrowser(e,t){let n=this.pages.page(`store-grid`,`${this.affiliateCode??``}:${this.activeTab}:${this.cosmeticsSubTab}`,e),r=e.length===0?t.trailingContent?u``:u`<div
              class=${`${t.emptyClass??`col-span-full`} py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`}
            >
              ${p(t.emptyTranslationKey)}
            </div>`:this.renderCosmeticCards(n.items,t.userHasSubscription,t.cardClass);return this.renderBrowserLayout(u`${r}${n.more}${t.trailingContent??``}`,t.gridClass)}renderCosmeticsPanel(){let e=this.cosmeticsSubTab===`flags`?`store.no_flags`:this.cosmeticsSubTab===`crowns`?`store.no_crowns`:`store.no_skins`;return u`
      <div
        class="flex items-center justify-center gap-6 border-b border-white/10 px-4"
      >
        ${ne.map(e=>u`<button
            class="-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${this.cosmeticsSubTab===e?`border-malibu-blue text-aquarius`:`border-transparent text-white/40 hover:text-white/70`}"
            @click=${()=>this.setCosmeticsSubTab(e)}
          >
            ${p(`store.${e}`)}
          </button>`)}
      </div>
      ${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:e})}
    `}renderEffectGrid(){return u`<effects-grid
      mode="purchase"
      tabbed
      .cosmetics=${this.cosmetics}
      .userMeResponse=${this.userMeResponse}
      .affiliateCode=${this.affiliateCode}
      .focusedKey=${this.inspected?.key??null}
      .onPurchaseFocus=${e=>this.activate(e)}
      .renderPurchaseAction=${e=>this.renderPurchaseAction(e,!1)}
      .onVisiblePurchaseItemsChange=${e=>{this.selectVisible(e.map(e=>[e])),this.requestUpdate()}}
    ></effects-grid>`}renderPackGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_packs`,trailingContent:u`<custom-currency-card
        class="block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48"
      ></custom-currency-card>`,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderBundleGrid(){return u`${this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_bundles`})}${this.openedPack&&!this.previewingCosmetic?u`<pack-contents-dialog
          .pack=${this.openedPack}
          .actionContent=${this.renderCardAction(this.openedPack,!1)}
          @close=${()=>this.closePack()}
        ></pack-contents-dialog>`:``}`}renderSubscriptionGrid(){let e=this.userMeResponse===!1?null:this.userMeResponse.player.subscription,t=e!==null&&!P(e);return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_subscriptions`,userHasSubscription:t,gridClass:`flex flex-wrap items-stretch justify-center content-start gap-4 p-4 sm:p-8`,cardClass:`block w-[calc(50%-0.5rem)] max-w-48 shrink-0 sm:w-48`,emptyClass:`w-full py-8 text-center text-sm font-bold uppercase tracking-wider text-white/40`})}renderHeaderSlot(){return u`${this.renderHeader()}
    ${this.previewingCosmetic?u`<cosmetic-preview-modal
          .resolved=${this.previewingCosmetic}
          @close-preview=${()=>{this.previewingCosmetic=null,this.requestUpdate()}}
        ></cosmetic-preview-modal>`:``}`}renderBody(e){return this.renderLocalProducts()}renderTribeGrid(){return this.authSettled?u`<tribes-panel
      .userMeResponse=${this.userMeResponse}
    ></tribes-panel>`:u``}renderAffiliateGrid(){return this.renderBrowser(this.visibleGroups,{emptyTranslationKey:`store.no_affiliate_items`})}async onOpen(e){this.pages.reset(),this.selectVisible(this.groupsForTab(this.activeTab)),await this.refresh()}onClose(){for(let e of this.querySelectorAll(`inline-checkout`))e.closeCardModal();this.affiliateCode=null,this.openedPack=null,this.previewingCosmetic=null,this.pages.reset(),this.requestedItem=null,this.selectVisible(this.groupsForTab(this.activeTab))}async refresh(){this.localProductsError=!1;let e;try{e=await fetch(j(`/products`),{signal:AbortSignal.timeout(1e4)})}catch{this.localProductsError=!0,this.requestUpdate();return}if(!e.ok)this.localProductsError=!0;else try{let t=te.safeParse(await e.json());if(!t.success)throw Error(`Invalid local product catalog`);this.localProducts=t.data.products,this.localProductCategories=t.data.categories,this.selectedLocalCategory&&!this.localProductCategories.some(e=>e.id===this.selectedLocalCategory)&&(this.selectedLocalCategory=``)}catch{this.localProductsError=!0}this.requestUpdate()}};d([a()],$.prototype,`authSettled`,void 0),d([a()],$.prototype,`localProducts`,void 0),d([a()],$.prototype,`localProductCategories`,void 0),d([a()],$.prototype,`selectedLocalCategory`,void 0),d([a()],$.prototype,`localProductsError`,void 0),$=d([s(`store-modal`)],$);export{$ as StoreModal,re as subTabForItem};