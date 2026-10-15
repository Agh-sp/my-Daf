import{$ as e,Q as t,et as n,st as r,t as i,tt as a,z as o}from"./decorate-CgSmyiMM.js";import{Nn as s,Pn as c,_n as l,gn as u,ir as d}from"./index-DmVmrdQe.js";import"./CapIcon-DL9dS2iI.js";import"./PlutoniumIcon-Bb43tgmR.js";var f=class extends a{constructor(...e){super(...e),this.rewards=[],this.claiming=!1}createRenderRoot(){return this}emitChanged(e){this.dispatchEvent(new CustomEvent(`rewards-changed`,{detail:e,bubbles:!0,composed:!0}))}async handleClaim(e){if(!this.claiming){this.claiming=!0;try{let t=await l(e.id);if(t===!1){await d(o(`account_modal.claim_failed`));return}if(c(),t===`not_found`){let t=await s();this.emitChanged({currency:t===!1?null:t.player.currency??null,rewards:t===!1?this.rewards.filter(t=>t.id!==e.id):t.player.rewards??[]});return}this.emitChanged({currency:t.currency,rewards:this.rewards.filter(t=>t.id!==e.id)})}finally{this.claiming=!1}}}async handleClaimAll(){if(!this.claiming){this.claiming=!0;try{let e=await u();if(e===!1){await d(o(`account_modal.claim_failed`));return}c(),this.emitChanged({currency:e.currency,rewards:[]})}finally{this.claiming=!1}}}formatAmount(e){try{return BigInt(e).toLocaleString()}catch{return e}}rewardLabel(e){return e.note?e.note:e.reason===`subscription_signup_bonus`?o(`account_modal.reward_signup_bonus`):e.reason===`subscription_daily`?o(`account_modal.reward_daily`):e.reason}renderReward(e){let t=e.currencyType===`hard`;return r`
      <div
        class="flex items-center justify-between gap-4 p-3 rounded-lg bg-white/5 border border-white/10"
      >
        <div class="flex items-center gap-3 min-w-0">
          ${t?r`<plutonium-icon .size=${20}></plutonium-icon>`:r`<cap-icon .size=${20}></cap-icon>`}
          <div class="flex flex-col min-w-0">
            <span
              class="text-sm font-bold ${t?`text-green-400`:`text-amber-700`}"
              >+${this.formatAmount(e.amount)}</span
            >
            <span class="text-xs text-white/60 truncate"
              >${this.rewardLabel(e)}</span
            >
          </div>
        </div>
        <o-button
          variant="primary"
          size="xs"
          translationKey="account_modal.claim"
          .disable=${this.claiming}
          @click=${()=>this.handleClaim(e)}
        ></o-button>
      </div>
    `}render(){return this.rewards.length===0?r``:r`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="flex items-center justify-between gap-4 mb-4">
          <h3 class="text-lg font-bold text-white flex items-center gap-2">
            <span>🎁</span>
            ${o(`account_modal.unclaimed_rewards`)}
          </h3>
          ${this.rewards.length>1?r`<o-button
                variant="primary"
                size="xs"
                translationKey="account_modal.claim_all"
                .disable=${this.claiming}
                @click=${this.handleClaimAll}
              ></o-button>`:``}
        </div>
        <div class="flex flex-col gap-2">
          ${this.rewards.map(e=>this.renderReward(e))}
        </div>
      </div>
    `}};i([e({type:Array})],f.prototype,`rewards`,void 0),i([t()],f.prototype,`claiming`,void 0),f=i([n(`rewards-panel`)],f);