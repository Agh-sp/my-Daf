import{$ as e,Q as t,et as n,rt as r,st as i,t as a,tt as o,z as s}from"./decorate-CgSmyiMM.js";import{a as c}from"./DesktopShell-Cy7M529l.js";import{$t as l,Bn as u,Tr as d,bn as f,cr as p,sr as m,un as h,zn as g}from"./index-DKgg39IM.js";import"./PlutoniumIcon-BWNOezod.js";import{t as _}from"./ProfileMenuModal-pGRR1N9W.js";var v=[`free_play.full_game`,`free_play.ranked`,`free_play.custom_lobbies`,`free_play.account`];function y(e){let t=c()?[...v,`free_play.ad_free_steam`]:v;return i`
    <div class="flex flex-col gap-1.5">
      <div class="text-[10px] uppercase tracking-wider text-white/50">
        ${s(e)}
      </div>
      <ul class="flex flex-col gap-1 text-sm text-white/70">
        ${t.map(e=>i`
            <li class="flex gap-2 leading-snug">
              <span class="text-emerald-400 shrink-0" aria-hidden="true"
                >✓</span
              >
              <span>${s(e)}</span>
            </li>
          `)}
      </ul>
    </div>
  `}var b=class extends o{constructor(...e){super(...e),this.cosmetic=null,this.handleManage=async()=>{let e=await u();if(e===!1){await m(s(`account_modal.subscription_portal_failed`));return}window.open(e,`_blank`,`noopener,noreferrer`)},this.handleChangeTier=()=>{this.dispatchEvent(new CustomEvent(`request-close`,{bubbles:!0,composed:!0})),window.location.hash=`modal=store&tab=subscriptions`},this.handleCancel=async()=>{if(await p(this.isSteam()?this.steamText(`account_modal.cancel_subscription_confirm_steam`,`account_modal.cancel_subscription_confirm_steam_no_date`):s(`account_modal.cancel_subscription_confirm`),{heading:s(`account_modal.cancel_subscription`)})){if(!await f()){await m(s(`account_modal.cancel_subscription_failed`));return}await m(this.isSteam()?this.steamText(`account_modal.cancel_subscription_success_steam`,`account_modal.cancel_subscription_success_steam_no_date`):s(`account_modal.cancel_subscription_success`)),g(),this.reloadPage()}},this.reloadPage=()=>{window.location.reload()}}createRenderRoot(){return this}steamText(e,t){let n=this.periodEnd();return n?s(e,{date:n}):s(t)}periodEnd(){return this.sub.currentPeriodEnd?this.sub.currentPeriodEnd.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):null}isGranted(){return d(this.sub)}isSteam(){return this.sub.provider===`steam`}renderStatusPill(){let e=`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider border`;if(this.sub.cancelAtPeriodEnd)return i`<span
        class="${e} bg-amber-500/10 border-amber-500/30 text-amber-300"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        ${s(`account_modal.sub_status_canceling`)}
      </span>`;let t=this.sub.status===`active`||this.sub.status===`trialing`,n=s(`account_modal.sub_status_${this.sub.status}`),r=n.startsWith(`account_modal.sub_status_`)?this.sub.status:n;return i`<span
      class="${e} ${t?`bg-green-500/10 border-green-500/30 text-green-300`:`bg-white/5 border-white/15 text-white/60`}"
    >
      <span
        class="w-1.5 h-1.5 rounded-full ${t?`bg-green-400`:`bg-white/40`}"
      ></span>
      ${r}
    </span>`}renderPeriodLine(e){let t=this.periodEnd();if(!t)return r;if(this.isGranted())return this.renderDateLine(s(`account_modal.sub_granted_perks_end_on`,{tier:e,date:t}),!1);let n=this.sub.cancelAtPeriodEnd?`account_modal.sub_status_canceling_on`:`account_modal.sub_renews_on`;return this.renderDateLine(s(n,{date:t}),this.sub.cancelAtPeriodEnd)}renderDateLine(e,t){return i`<div
      class="flex items-center gap-2 text-sm ${t?`text-amber-200/80`:`text-white/50`}"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-4 h-4 shrink-0"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </svg>
      <span>${e}</span>
    </div>`}renderPerk(e,t){return i`
      <div
        class="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2.5"
      >
        <plutonium-icon .size=${24}></plutonium-icon>
        <div class="flex flex-col min-w-0">
          <span class="text-sm font-bold text-white leading-tight"
            >${e.toLocaleString()}</span
          >
          <span
            class="text-[10px] uppercase tracking-wider text-white/50 leading-tight"
            >${s(t)}</span
          >
        </div>
      </div>
    `}renderManageOnWeb(){return i`
      <p class="text-[11px] text-center text-white/40 leading-snug">
        ${s(`account_modal.manage_subscription_on_web`)}
      </p>
    `}renderGrantedNote(e){return this.sub.currentPeriodEnd?i`
      <div class="flex flex-col gap-3">
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${s(`account_modal.sub_granted_from_purchase`,{tier:e})}
        </p>
        ${y(`free_play.after_grant_heading`)}
      </div>
    `:i`
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${s(`account_modal.sub_granted_indefinite`)}
        </p>
      `}renderSteamActions(){let e=i`<o-button
      class="flex-1 min-w-[8rem]"
      variant="secondary"
      width="block"
      size="md"
      translationKey="account_modal.manage_subscription"
      @click=${this.handleManage}
    ></o-button>`;return this.sub.cancelAtPeriodEnd?i`<div class="flex flex-col gap-2">
        ${e}
        <p class="text-[11px] text-center text-white/40 leading-snug">
          ${this.steamText(`account_modal.manage_subscription_on_steam_ending`,`account_modal.manage_subscription_on_steam_ending_no_date`)}
        </p>
      </div>`:i`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          ${r}
          ${e}
        </div>
        ${i`<p
      class="text-[11px] text-center text-white/40 leading-snug"
    >
      ${s(`account_modal.manage_subscription_on_steam_no_tier_change`)}
    </p>`}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${s(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}renderActions(e){if(this.isGranted())return this.renderGrantedNote(e);if(this.isSteam())return this.renderSteamActions();let t=c();return this.sub.status===`past_due`?i`
        <div class="flex flex-col gap-2">
          <p class="text-sm text-amber-200/80 leading-snug">
            ${s(`account_modal.sub_past_due_note`,{tier:e})}
          </p>
          ${t?this.renderManageOnWeb():i`<o-button
                variant="primary"
                width="block"
                size="md"
                translationKey="store.manage_billing"
                @click=${this.handleManage}
              ></o-button>`}
        </div>
      `:this.sub.cancelAtPeriodEnd?t?this.renderManageOnWeb():i`
        <o-button
          variant="primary"
          width="block"
          size="md"
          translationKey="account_modal.reactivate_subscription"
          @click=${this.handleManage}
        ></o-button>
      `:i`
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          <o-button
            class="flex-1 min-w-[8rem]"
            variant="primary"
            width="block"
            size="md"
            translationKey="account_modal.change_tier"
            @click=${this.handleChangeTier}
          ></o-button>
          ${t?r:i`<o-button
                class="flex-1 min-w-[8rem]"
                variant="secondary"
                width="block"
                size="md"
                translationKey="account_modal.manage_subscription"
                @click=${this.handleManage}
              ></o-button>`}
        </div>
        ${t?this.renderManageOnWeb():r}
        <button
          @click=${this.handleCancel}
          class="self-center text-[11px] font-bold uppercase tracking-widest text-white/30 hover:text-red-400 transition-colors py-1 cursor-pointer"
        >
          ${s(`account_modal.cancel_subscription`)}
        </button>
      </div>
    `}render(){let{sub:e,cosmetic:t}=this,n=h(`subscriptions`,t?.name??e.tier);return i`
      <div class="flex flex-col gap-4">
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="flex flex-col gap-1 min-w-0">
              <div class="text-xl font-bold text-white leading-tight">
                ${n}
              </div>
              ${t?.product?.price?i`<div class="text-sm text-white/50">
                    ${s(`account_modal.sub_price_monthly`,{price:t.product.price})}
                  </div>`:``}
            </div>
            ${this.renderStatusPill()}
          </div>

          ${t?.description?i`<p class="text-sm text-white/70 leading-relaxed">
                ${t.description}
              </p>`:``}
          ${t?i`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${this.renderPerk(t.hardCurrencySignupBonus,`cosmetics.signup_bonus`)}
                ${this.renderPerk(t.dailyHardCurrency,`cosmetics.per_day`)}
              </div>`:``}
          ${this.renderPeriodLine(n)}

          <div class="border-t border-white/10 pt-4">
            ${this.renderActions(n)}
          </div>
        </div>
      </div>
    `}};a([e({type:Object})],b.prototype,`sub`,void 0),a([e({type:Object})],b.prototype,`cosmetic`,void 0),b=a([n(`subscription-panel`)],b);var x=class extends _{constructor(...e){super(...e),this.routerName=`subscription`,this.titleKey=`subscription_modal.title`,this.cosmetics=null}renderSignedIn(e){let t=e.player.pastDueSubscription,n=e.player.subscription??(t?{tier:t.tier,status:`past_due`,currentPeriodEnd:null,cancelAtPeriodEnd:!1,provider:`stripe`}:null);return n?i`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <subscription-panel
            .sub=${n}
            .cosmetic=${this.cosmetics?.subscriptions?.[n.tier]??null}
            @request-close=${()=>this.close()}
          ></subscription-panel>
        </div>
      </div>
    `:i`
        <div class="p-6">
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center flex flex-col items-center gap-4"
          >
            <p class="text-white/60 text-sm">
              ${s(`subscription_modal.none`)}
            </p>
            <div class="w-full text-left rounded-lg bg-white/5 px-4 py-3">
              ${y(`free_play.free_heading`)}
            </div>
            <o-button
              variant="primary"
              size="md"
              translationKey="subscription_modal.browse"
              @click=${()=>{this.close(),window.location.hash=`modal=store&tab=subscriptions`}}
            ></o-button>
          </div>
        </div>
      `}onOpenExtra(){l().then(e=>{this.cosmetics=e})}};a([t()],x.prototype,`cosmetics`,void 0),x=a([n(`subscription-modal`)],x);export{x as SubscriptionModal};