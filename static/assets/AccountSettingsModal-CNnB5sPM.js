import{$ as e,Q as t,et as n,nt as r,rt as i,s as a,st as o,t as s,tt as c,z as l}from"./decorate-DDFJEDDP.js";import{F as u,K as d,N as f,V as p,Y as m,d as h,s as g,x as _}from"./Api-BUc1dCNJ.js";import{a as v}from"./DesktopShell-Cy7M529l.js";import{t as y}from"./CrazyGamesSDK-CbSm7Wb8.js";import{t as b}from"./InGameModal-Dg_yQR8o.js";import{Jt as x}from"./index-6j9FYAGO.js";import{n as S,t as C}from"./LinkResult-CIMLuqgN.js";import{t as w}from"./StyledSelect-Sa0PzOmQ.js";import{t as T}from"./ProfileMenuModal-BoVy6lFi.js";var E=class extends c{constructor(...e){super(...e),this.typedWord=``,this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(r(o``,this.portal),this.portal.remove(),null)}render(){return this.portal&&r(this.renderOverlay(),this.portal),o``}confirmWord(){return l(`account_modal.delete_account_confirm_word`)}wordMatches(){return this.typedWord.trim().toUpperCase()===this.confirmWord().toUpperCase()}renderOverlay(){let e=this.confirmWord();return o`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border border-red-500/50 bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-2">
            ${l(`account_modal.delete_account_title`)}
          </h2>
          <p class="text-sm font-medium text-red-300 mb-5">
            ${l(`account_modal.delete_account_warning`)}
          </p>
          <label class="block mb-5">
            <span class="text-white/50 text-xs">
              ${l(`account_modal.delete_account_type_to_confirm`,{word:e})}
            </span>
            <input
              type="text"
              .value=${this.typedWord}
              @input=${e=>this.typedWord=e.target.value}
              placeholder=${e}
              autocomplete="off"
              class="mt-1.5 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm"
            />
          </label>
          <div class="flex gap-3">
            <button
              @click=${()=>this.handleCancel()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              ${l(`common.cancel`)}
            </button>
            <button
              @click=${()=>this.handleConfirm()}
              ?disabled=${!this.wordMatches()}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
            >
              ${l(`account_modal.delete_account_confirm_button`)}
            </button>
          </div>
        </div>
      </div>
    `}handleConfirm(){this.wordMatches()&&this.dispatchEvent(new CustomEvent(`confirm`))}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`))}};s([t()],E.prototype,`typedWord`,void 0),E=s([n(`delete-account-dialog`)],E);var D=class extends c{constructor(...e){super(...e),this.audiences=[],this.audience=``,this.token=null,this.busy=!1,this.copied=!1,this.errorKey=null,this.expiryTimer=null,this.handleAudienceChange=e=>{this.audience=e,this.clearToken(),this.errorKey=null},this.handleGenerate=async()=>{if(this.busy)return;this.busy=!0,this.errorKey=null,this.clearToken();let e=this.audience,t=await g(e);if(this.busy=!1,e!==this.audience)return;if(!t.ok){this.errorKey=t.code===`rate_limited`?`account_modal.identity_token_rate_limited`:t.code===`logged_out`?`account_modal.identity_token_logged_out`:`account_modal.identity_token_failed`;return}this.token=t.data.token;let n=Date.parse(t.data.expiresAt)-Date.now();this.expiryTimer=setTimeout(()=>this.clearToken(),Math.max(n,0))},this.handleCopy=async()=>{if(this.token)try{await a(this.token,()=>this.copied=!0,()=>this.copied=!1)}catch{}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadAudiences()}disconnectedCallback(){this.clearToken(),super.disconnectedCallback()}async loadAudiences(){let e=await _();this.audiences=e,e.includes(this.audience)||(this.audience=e[0]??``,this.clearToken())}render(){return this.audiences.length===0?i:o`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <div class="text-white font-medium">
          ${l(`account_modal.identity_token_title`)}
        </div>
        <div class="text-white/50 text-sm mt-1">
          ${l(`account_modal.identity_token_desc`)}
        </div>
        <div class="mt-4 flex items-center gap-3">
          ${w({options:this.audiences.map(e=>({value:e,label:e})),value:this.audience,onChange:this.handleAudienceChange,ariaLabel:l(`account_modal.identity_token_site`),className:`flex-1`})}
          <o-button
            variant="primary"
            size="sm"
            translationKey="account_modal.identity_token_generate"
            .disable=${this.busy}
            @click=${this.handleGenerate}
          ></o-button>
        </div>
        ${this.errorKey?o`<div class="text-red-400 text-sm mt-3">
              ${l(this.errorKey)}
            </div>`:i}
        ${this.token?this.renderToken(this.token):i}
      </div>
    `}renderToken(e){return o`
      <div class="mt-4 flex items-center gap-3">
        <input
          type="text"
          readonly
          .value=${e}
          aria-label=${l(`account_modal.identity_token_title`)}
          @focus=${e=>e.target.select()}
          class="flex-1 min-w-0 px-3 py-1.5 bg-black/40 border border-white/20 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-blue-500"
        />
        <o-button
          variant="secondary"
          size="sm"
          translationKey=${this.copied?`account_modal.identity_token_copied`:`account_modal.identity_token_copy`}
          @click=${this.handleCopy}
        ></o-button>
      </div>
      <div class="text-white/50 text-xs mt-2">
        ${l(`account_modal.identity_token_note`,{site:this.audience})}
      </div>
    `}clearToken(){this.expiryTimer!==null&&(clearTimeout(this.expiryTimer),this.expiryTimer=null),this.token=null,this.copied=!1}};s([t()],D.prototype,`audiences`,void 0),s([t()],D.prototype,`audience`,void 0),s([t()],D.prototype,`token`,void 0),s([t()],D.prototype,`busy`,void 0),s([t()],D.prototype,`copied`,void 0),s([t()],D.prototype,`errorKey`,void 0),D=s([n(`identity-token-card`)],D);var O=class extends c{constructor(...e){super(...e),this.player=null,this.user=null,this.email=``,this.consentBusy=!1,this.deleteDialogOpen=!1,this.deleteBusy=!1,this.handleDeleteAccount=async()=>{if(this.deleteDialogOpen=!1,this.deleteBusy)return;this.deleteBusy=!0;let e=await h();if(this.deleteBusy=!1,e.ok){u(),await b(l(`account_modal.delete_account_scheduled`)),window.location.replace(`/`);return}if(e.code===`logged_out`){u(),window.location.replace(`/`);return}e.code===`forbidden`&&e.message!==void 0?await b(e.message):e.code===`rate_limited`?await b(l(`account_modal.delete_account_rate_limited`)):await b(l(`account_modal.delete_account_failed`))},this.handleEmailInput=e=>{this.email=e.target.value},this.handleSubmit=async()=>{if(!this.email){await b(l(`account_modal.enter_email_address`));return}await b(await d(this.email)?l(`account_modal.recovery_email_sent`,{email:this.email}):l(`account_modal.failed_to_send_recovery_email`))},this.handleLinkGoogle=async()=>{await p()||await b(l(`account_modal.link_google_failed`))}}createRenderRoot(){return this}closeDialogs(){this.deleteDialogOpen=!1}disconnectedCallback(){this.closeDialogs(),super.disconnectedCallback()}isSteamPrimary(){return x(this.user??void 0)}render(){return o`
      <div class="flex flex-col gap-6">
        ${this.renderMarketingCard()}
        <identity-token-card></identity-token-card>
        ${this.renderDeleteAccountCard()}
      </div>
    `}renderMarketingCard(){let e=this.player?.marketingConsent;if(!e)return i;let t=e.hasEmail,n=e.consented===`approved`,r=!t&&this.isSteamPrimary();return o`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <!-- Centred against the title+description block, like the delete card. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${l(`account_modal.marketing_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${l(t?`account_modal.marketing_desc`:r?`account_modal.marketing_no_email_steam`:`account_modal.marketing_no_email`)}
            </div>
          </div>
          ${t||r?o`<button
                role="switch"
                aria-checked=${n?`true`:`false`}
                aria-label=${l(`account_modal.marketing_title`)}
                ?disabled=${this.consentBusy||r}
                @click=${()=>this.setConsent(!n)}
                class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 disabled:opacity-60 ${n?`bg-malibu-blue shadow-[var(--shadow-malibu-blue-pill)]`:`bg-white/15`}"
              >
                <span
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${n?`translate-x-6`:`translate-x-1`}"
                ></span>
              </button>`:i}
        </div>
        ${t||this.isSteamPrimary()?i:this.renderEmailBinding()}
      </div>
    `}renderEmailBinding(){return o`
      <div class="mt-4 space-y-3">
        ${this.renderEmailField()}
        <div class="flex items-center gap-4 py-1">
          <div class="h-px bg-white/10 flex-1"></div>
          <span
            class="text-[10px] uppercase tracking-widest text-white/30 font-bold"
          >
            ${l(`account_modal.or`)}
          </span>
          <div class="h-px bg-white/10 flex-1"></div>
        </div>
        ${this.user?.google?i:S(this.handleLinkGoogle,v()?`account_modal.link_google_on_web`:`account_modal.link_google`)}
      </div>
    `}renderEmailField(){return o`
      <input
        type="email"
        .value=${this.email}
        @input=${this.handleEmailInput}
        placeholder=${l(`account_modal.email_placeholder`)}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10"
      />
      <o-button
        variant="primary"
        width="block"
        size="md"
        translationKey="account_modal.get_magic_link"
        @click=${this.handleSubmit}
      ></o-button>
    `}renderDeleteAccountCard(){return y.isOnCrazyGames()||m.isOnSteam()?i:o`
      <div class="bg-white/5 rounded-xl border border-red-500/30 p-6">
        <!-- The button is one line against a two-line block, so centre it
             rather than pinning it to the first line. -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex-1">
            <div class="text-white font-medium">
              ${l(`account_modal.delete_account_title`)}
            </div>
            <div class="text-white/50 text-sm mt-1">
              ${l(`account_modal.delete_account_desc`)}
            </div>
          </div>
          <o-button
            variant="danger"
            size="sm"
            translationKey="account_modal.delete_account_title"
            .disable=${this.deleteBusy}
            @click=${()=>{this.deleteDialogOpen=!0}}
          ></o-button>
        </div>
      </div>
      ${this.deleteDialogOpen?o`<delete-account-dialog
            @confirm=${this.handleDeleteAccount}
            @cancel=${()=>{this.deleteDialogOpen=!1}}
          ></delete-account-dialog>`:i}
    `}async setConsent(e){let t=this.player?.marketingConsent;if(!t||!t.hasEmail||this.consentBusy)return;let n=t.consented,r=e?`approved`:`denied`;n!==r&&(this.consentBusy=!0,t.consented=r,this.requestUpdate(),await f(e)||(t.consented=n),this.consentBusy=!1,this.requestUpdate())}};s([e({attribute:!1})],O.prototype,`player`,void 0),s([e({attribute:!1})],O.prototype,`user`,void 0),s([t()],O.prototype,`email`,void 0),s([t()],O.prototype,`consentBusy`,void 0),s([t()],O.prototype,`deleteDialogOpen`,void 0),s([t()],O.prototype,`deleteBusy`,void 0),O=s([n(`account-settings-panel`)],O);var k=class extends T{constructor(...e){super(...e),this.routerName=`account-settings`,this.titleKey=`account_settings_modal.title`}renderSignedIn(e){return o`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">
          <account-settings-panel
            .player=${e.player}
            .user=${e.user}
          ></account-settings-panel>
        </div>
      </div>
    `}onOpenExtra(e){C(e)}onClose(){this.querySelector(`account-settings-panel`)?.closeDialogs()}};k=s([n(`account-settings-modal`)],k);export{k as AccountSettingsModal};