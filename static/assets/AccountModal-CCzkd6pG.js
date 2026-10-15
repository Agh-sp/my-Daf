import{$ as e,I as t,Q as n,et as r,h as i,l as a,lt as o,rt as s,st as c,t as l,tt as u,z as d}from"./decorate-CgSmyiMM.js";import{a as f,t as p}from"./DesktopShell-Cy7M529l.js";import{t as m}from"./CrazyGamesSDK-CbSm7Wb8.js";import{$n as h,Br as g,Kt as _,Nn as v,Pn as y,Qn as b,Rn as ee,Tn as te,Xn as ne,Yn as x,Zn as S,a as C,ar as w,c as T,i as E,ir as D,n as O,o as k,r as A,rr as j,s as M,t as N,ut as P,vn as F,vt as I,yt as L}from"./index-BXqdvtGy.js";import"./CopyButton-DXMctGGY.js";import"./Difficulties-dYMytb_B.js";import"./RewardsPanel-DOypLNBl.js";import{n as R,t as z}from"./LinkResult-BrjajR8C.js";import"./GameStatsModal-BeQ8YEiu.js";import{n as B,playerProfileUrl as V}from"./PlayerProfileModal-BxCHXQdu.js";var H=class extends u{constructor(...e){super(...e),this._data=null}createRenderRoot(){return this}get data(){return this._data}set data(e){this._data=e,this.requestUpdate()}get avatarUrl(){let e=this._data;return e?i(e):null}get discordDisplayName(){return this._data?.username??``}render(){let e=`https://cdn.discordapp.com/embed/avatars/0.png`,t=this.avatarUrl??e;return c`
      <div class="flex items-center gap-2">
        ${this._data?c`
              <div class="p-[3px] rounded-full bg-gray-500">
                <img
                  class="w-12 h-12 rounded-full block"
                  src="${t}"
                  alt="${d(`discord_user_header.avatar_alt`)}"
                  @error=${t=>{t.target.src=e}}
                />
              </div>
            `:null}
        <span class="font-semibold text-white">${this.discordDisplayName}</span>
      </div>
    `}};l([n()],H.prototype,`_data`,void 0),l([e({attribute:!1})],H.prototype,`data`,null),H=l([r(`discord-user-header`)],H);var U=class extends u{constructor(...e){super(...e),this._data=null,this._avatarError=!1}createRenderRoot(){return this}get data(){return this._data}set data(e){this._data=e,this._avatarError=!1,this.requestUpdate()}render(){if(!this._data)return c``;let e=this._data.personaName?.trim()?this._data.personaName:d(`steam_user_header.default_name`),t=this._data.avatarUrl;return c`
      <div class="flex items-center gap-2">
        ${t&&!this._avatarError?c`
              <div class="p-[3px] rounded-full bg-gray-500">
                <img
                  class="w-12 h-12 rounded-full block"
                  src="${t}"
                  alt="${d(`steam_user_header.avatar_alt`)}"
                  @error=${()=>{this._avatarError=!0}}
                />
              </div>
            `:null}
        <span class="font-semibold text-white">${e}</span>
      </div>
    `}};l([n()],U.prototype,`_data`,void 0),l([n()],U.prototype,`_avatarError`,void 0),l([e({attribute:!1})],U.prototype,`data`,null),U=l([r(`steam-user-header`)],U);var W=class extends u{constructor(...e){super(...e),this.creator=void 0,this.draft=``,this.busy=!1,this.error=``,this.armed=null}createRenderRoot(){return this}willUpdate(e){if(e.has(`creator`)||e.has(`prefillCode`)){if(this.creator||this.prefillCode===void 0)this.draft=this.creator?``:this.prefillCode??``,this.error=``;else{let e=_(this.prefillCode);this.draft=e??this.prefillCode,this.error=e===null?d(`creator_code.errors.invalid`):``}this.armed=null}}cooldownEnd(){if(!this.creator)return null;let e=this.creator.canChangeAt;if(!e)return null;let t=new Date(e);return t.getTime()>Date.now()?t:null}daysUntil(e){return Math.max(1,Math.ceil((e.getTime()-Date.now())/864e5))}formatDate(e){return e.toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})}handleInput(e){this.draft=e.target.value,this.armed=null;let t=this.draft.trim();if(t.length===0){this.error=``;return}this.error=_(t)===null?d(`creator_code.errors.invalid`):``}async handleSet(){if(this.busy||this.cooldownEnd()!==null)return;let e=_(this.draft);if(e===null){this.error=d(`creator_code.errors.invalid`);return}if(this.armed!==`set`){this.armed=`set`;return}this.armed=null,this.busy=!0;let t=await ee(e);if(t.ok){await this.refreshAfterChange(),this.busy=!1;return}this.busy=!1,this.error=this.errorMessage(t)}async handleUnsupport(){if(this.busy)return;if(this.armed!==`unsupport`){this.armed=`unsupport`;return}this.armed=null,this.busy=!0;let e=await F();if(e.ok){await this.refreshAfterChange(),this.busy=!1;return}this.busy=!1,this.error=d(e.code===`rate_limited`?`creator_code.errors.rate_limited`:`creator_code.errors.failed`)}async refreshAfterChange(){let e=await v();e!==!1&&this.dispatchEvent(new CustomEvent(`creator-changed`,{detail:{creator:e.player.creator??null},bubbles:!0,composed:!0}))}errorMessage(e){switch(e.code){case`invalid`:return d(`creator_code.errors.invalid`);case`not_found`:return d(`creator_code.errors.not_found`);case`self_referral`:return d(`creator_code.errors.self_referral`);case`rate_limited`:return d(`creator_code.errors.rate_limited`);case`cooldown`:return e.retryAfterSeconds===null?d(`creator_code.errors.cooldown`):d(`creator_code.cooldown_days`,{days:Math.max(1,Math.ceil(e.retryAfterSeconds/86400))});default:return d(`creator_code.errors.failed`)}}renderStatus(e,t){return c`
      <div class="flex flex-col gap-1">
        <div class="text-xl font-bold text-white leading-tight break-all">
          ${d(`creator_code.supporting`,{name:e.displayName,code:e.code})}
        </div>
        <div class="text-xs text-white/50">
          ${d(`creator_code.since`,{date:this.formatDate(new Date(e.sinceAt))})}
        </div>
        ${t?c`<div class="text-xs text-amber-300">
              ${d(`creator_code.cooldown_days`,{days:this.daysUntil(this.cooldownEnd())})}
            </div>`:s}
      </div>
    `}render(){if(this.creator===void 0)return s;let e=this.cooldownEnd()!==null,t=_(this.draft),n=!e&&!this.busy&&t!==null,r=this.armed===`set`,i=this.armed===`unsupport`;return c`
      <div
        class="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-5 flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <span
            class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
          >
            ${d(`creator_code.title`)}
          </span>
          ${this.creator?this.renderStatus(this.creator,e):s}
        </div>

        <div
          class="${this.creator?`border-t border-white/10 pt-4`:``} flex flex-col gap-2"
        >
          <label
            for="creator-code-panel-input"
            class="text-[10px] uppercase tracking-widest text-white/40 font-bold"
          >
            ${d(`creator_code.input_label`)}
          </label>
          <input
            id="creator-code-panel-input"
            type="text"
            .value=${this.draft}
            @input=${this.handleInput}
            @keydown=${e=>{e.key===`Enter`&&n&&this.handleSet()}}
            placeholder=${d(`creator_code.input_placeholder`)}
            ?disabled=${e||this.busy}
            class="w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 transition-all font-medium hover:bg-white/10 disabled:opacity-50 disabled:hover:bg-white/5 ${this.error?`border-red-500/50 focus:ring-red-500/40 focus:border-red-500/50`:`border-white/10 focus:ring-malibu-blue/50 focus:border-malibu-blue/50`}"
          />
          <div class="text-sm text-red-400 min-h-[1.25rem]">${this.error}</div>
          <o-button
            variant=${r?`warning`:`primary`}
            width="block"
            size="md"
            translationKey=${r?`creator_code.confirm_lock`:this.creator?`creator_code.change`:`creator_code.support`}
            .disable=${!n}
            @click=${this.handleSet}
          ></o-button>
        </div>

        ${this.creator?c`<o-button
              variant=${i?`warning`:`danger`}
              width="block"
              size="md"
              translationKey=${i?`creator_code.confirm_unsupport`:`creator_code.unsupport`}
              .disable=${this.busy}
              @click=${this.handleUnsupport}
            ></o-button>`:s}
      </div>
    `}};l([e({attribute:!1})],W.prototype,`creator`,void 0),l([e({attribute:!1})],W.prototype,`prefillCode`,void 0),l([n()],W.prototype,`draft`,void 0),l([n()],W.prototype,`busy`,void 0),l([n()],W.prototype,`error`,void 0),l([n()],W.prototype,`armed`,void 0),W=l([r(`creator-code-panel`)],W);var G=20;function K(e){if(!/^https?:\/\//i.test(e))return e;let t;try{t=new URL(e)}catch{return e}let n=new URLSearchParams(t.hash.replace(/^#/,``)).get(`publicID`);return n===null||n===``?e:n}var q=class extends u{constructor(...e){super(...e),this.myPublicId=``,this.loading=!0,this.actionPending=!1,this.friends=[],this.friendsTotal=0,this.friendsPage=0,this.incoming=[],this.outgoing=[],this.addInput=``}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadAll()}async loadAll(){this.loading=!0;try{let[e,t]=await Promise.all([A(),E(1,G)]);e&&(this.incoming=e.incoming,this.outgoing=e.outgoing),t&&(this.friends=t.results,this.friendsTotal=t.total,this.friendsPage=t.page)}finally{this.loading=!1}}async loadMore(){if(!this.actionPending){this.actionPending=!0;try{let e=await E(this.friendsPage+1,G);if(!e){t(d(`friends.load_failed`),`red`);return}this.friends=[...this.friends,...e.results],this.friendsPage=e.page,this.friendsTotal=e.total}finally{this.actionPending=!1}}}async refreshFriends(){let e=Math.max(1,this.friendsPage),t=[],n=this.friendsTotal,r=0;for(let i=1;i<=e;i++){let e=await E(i,G);if(!e)return;if(t.push(...e.results),n=e.total,r=e.page,e.results.length<G)break}this.friends=t,this.friendsTotal=n,this.friendsPage=r}async handleSend(){let e=K(this.addInput.trim()).trim().replace(/\s*#\s*/g,`.`);if(e){if(e===this.myPublicId){t(d(`friends.cannot_friend_self`),`red`);return}if(!this.actionPending){this.actionPending=!0;try{let n=await k(e);if(typeof n==`string`){t(d(this.errorKey(n)),`red`);return}if(this.addInput=``,n.status===`accepted`)t(d(`friends.request_auto_accepted`),`green`),await this.loadAll();else{t(d(`friends.request_sent`),`green`);let e=await A();e&&(this.incoming=e.incoming,this.outgoing=e.outgoing)}}finally{this.actionPending=!1}}}}async handleAccept(e){if(!this.actionPending){this.actionPending=!0;try{let n=await N(e);if(n!==!0){t(d(this.errorKey(n)),`red`);return}this.incoming=this.incoming.filter(t=>t.publicId!==e),this.friends=[{publicId:e,createdAt:new Date().toISOString()},...this.friends],this.friendsTotal++,t(d(`friends.request_accepted`),`green`),await this.refreshFriends()}finally{this.actionPending=!1}}}async handleDenyOrWithdraw(e,n){if(!this.actionPending){this.actionPending=!0;try{let r=await O(e);if(r!==!0){t(d(this.errorKey(r)),`red`);return}n===`incoming`?(this.incoming=this.incoming.filter(t=>t.publicId!==e),t(d(`friends.request_denied`),`green`)):(this.outgoing=this.outgoing.filter(t=>t.publicId!==e),t(d(`friends.request_withdrawn`),`green`))}finally{this.actionPending=!1}}}async handleRemove(e){if(!this.actionPending&&await w(d(`friends.confirm_remove`,{publicId:e}))){this.actionPending=!0;try{let n=await C(e);if(n!==!0){t(d(this.errorKey(n)),`red`);return}this.friends=this.friends.filter(t=>t.publicId!==e),this.friendsTotal=Math.max(0,this.friendsTotal-1),t(d(`friends.friend_removed`),`green`),await this.refreshFriends()}finally{this.actionPending=!1}}}errorKey(e){switch(e){case`not_found`:return`friends.error_not_found`;case`conflict`:return`friends.error_conflict`;case`bad_request`:return`friends.error_bad_request`;default:return`common.error_generic`}}formatDate(e){return new Date(e).toLocaleDateString()}render(){return this.loading?c`
        <div class="flex items-center justify-center p-12">
          <div
            class="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
          ></div>
        </div>
      `:c`
      <div class="flex flex-col gap-6">
        ${this.renderTeamInfo()} ${this.renderAddSection()}
        ${this.renderRequestsSection()} ${this.renderFriendsSection()}
      </div>
    `}renderTeamInfo(){return c`
      <div
        class="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 flex items-center gap-3"
      >
        <span class="text-blue-400 text-lg shrink-0">🛡️</span>
        <p class="text-sm text-white/80">
          ${d(`friends.team_info`)}
        </p>
      </div>
    `}renderAddSection(){return c`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">➕</span>
          ${d(`friends.add_friend`)}
        </h3>
        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            .value=${this.addInput}
            @input=${e=>this.addInput=K(e.target.value)}
            @keydown=${e=>{e.key===`Enter`&&this.handleSend()}}
            class="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-mono text-sm"
            placeholder=${d(`friends.public_id_placeholder`)}
            maxlength="200"
            ?disabled=${this.actionPending}
          />
          <button
            @click=${()=>void this.handleSend()}
            ?disabled=${this.actionPending||this.addInput.trim().length===0}
            class="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            ${d(`friends.send_request`)}
          </button>
        </div>
      </div>
    `}renderRequestsSection(){return this.incoming.length===0&&this.outgoing.length===0?``:c`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">✉️</span>
          ${d(`friends.pending_requests`)}
        </h3>
        ${this.incoming.length>0?c`
              <div
                class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
              >
                ${d(`friends.incoming`)}
              </div>
              <div class="space-y-2 mb-4">
                ${this.incoming.map(e=>this.renderRequestRow(e,`incoming`))}
              </div>
            `:``}
        ${this.outgoing.length>0?c`
              <div
                class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
              >
                ${d(`friends.outgoing`)}
              </div>
              <div class="space-y-2">
                ${this.outgoing.map(e=>this.renderRequestRow(e,`outgoing`))}
              </div>
            `:``}
      </div>
    `}renderRequestRow(e,t){return c`
      <div
        class="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-3"
      >
        <div class="flex-1 min-w-0">
          ${B(this,e.username,e.publicId)}
          <div class="text-white/30 text-[10px] mt-0.5">
            ${this.formatDate(e.createdAt)}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${t===`incoming`?c`
                <button
                  @click=${()=>void this.handleAccept(e.publicId)}
                  ?disabled=${this.actionPending}
                  class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${d(`friends.accept`)}
                </button>
                <button
                  @click=${()=>void this.handleDenyOrWithdraw(e.publicId,`incoming`)}
                  ?disabled=${this.actionPending}
                  class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${d(`friends.deny`)}
                </button>
              `:c`
                <button
                  @click=${()=>void this.handleDenyOrWithdraw(e.publicId,`outgoing`)}
                  ?disabled=${this.actionPending}
                  class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${d(`friends.withdraw`)}
                </button>
              `}
        </div>
      </div>
    `}renderFriendsSection(){if(this.friendsTotal===0)return c`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
        >
          <div class="text-4xl mb-3">👥</div>
          <p class="text-white/60 text-sm">
            ${d(`friends.no_friends`)}
          </p>
        </div>
      `;let e=this.friends.length<this.friendsTotal;return c`
      <div class="bg-white/5 rounded-xl border border-white/10 p-6">
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span class="text-blue-400">👥</span>
          ${d(`friends.your_friends`)}
          <span class="text-xs text-white/40 font-medium">
            (${this.friendsTotal})
          </span>
        </h3>
        <div class="space-y-2">
          ${this.friends.map(e=>c`
              <div
                class="flex items-center gap-3 bg-white/5 rounded-lg border border-white/10 p-3"
              >
                <div class="flex-1 min-w-0">
                  ${B(this,e.username,e.publicId)}
                  <div class="text-white/30 text-[10px] mt-0.5">
                    ${d(`friends.friends_since`,{date:this.formatDate(e.createdAt)})}
                  </div>
                </div>
                <button
                  @click=${()=>void this.handleRemove(e.publicId)}
                  ?disabled=${this.actionPending}
                  class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
                >
                  ${d(`friends.remove`)}
                </button>
              </div>
            `)}
        </div>
        ${e?c`
              <div class="flex justify-center mt-4">
                <button
                  @click=${()=>void this.loadMore()}
                  ?disabled=${this.actionPending}
                  class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-white/10 text-white/80 border border-white/10 hover:bg-white/20 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${d(`friends.load_more`)}
                </button>
              </div>
            `:``}
      </div>
    `}};l([e({type:String})],q.prototype,`myPublicId`,void 0),l([n()],q.prototype,`loading`,void 0),l([n()],q.prototype,`actionPending`,void 0),l([n()],q.prototype,`friends`,void 0),l([n()],q.prototype,`friendsTotal`,void 0),l([n()],q.prototype,`friendsPage`,void 0),l([n()],q.prototype,`incoming`,void 0),l([n()],q.prototype,`outgoing`,void 0),l([n()],q.prototype,`addInput`,void 0),q=l([r(`friends-list`)],q);var J=e=>c`
  <svg
    class=${e}
    viewBox="0 0 91.05 91.21"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M45.45,0C21.49,0,1.87,18.47,0,41.95l24.44,10.11c2.07-1.42,4.57-2.24,7.27-2.24,.24,0,.48,0,.72,.02l10.87-15.76c0-.07,0-.15,0-.22,0-9.48,7.72-17.2,17.2-17.2s17.2,7.72,17.2,17.2-7.72,17.2-17.2,17.2c-.13,0-.26,0-.39,0l-15.5,11.06c0,.2,.01,.41,.01,.61,0,7.12-5.79,12.91-12.91,12.91-6.25,0-11.47-4.46-12.66-10.37L1.57,58.03c5.41,19.14,23,33.18,43.88,33.18,25.19,0,45.6-20.42,45.6-45.6S70.63,0,45.45,0Z"
    />
    <path
      d="M28.58,69.2l-5.6-2.31c.99,2.07,2.71,3.8,4.99,4.75,4.93,2.05,10.61-.29,12.67-5.22,.99-2.39,1-5.02,.01-7.41-.98-2.39-2.84-4.26-5.23-5.25-2.37-.99-4.91-.95-7.14-.11l5.79,2.39c3.64,1.52,5.36,5.69,3.84,9.33-1.51,3.64-5.69,5.36-9.33,3.84Z"
    />
    <path
      d="M71.96,33.85c0-6.32-5.14-11.46-11.46-11.46s-11.46,5.14-11.46,11.46,5.14,11.46,11.46,11.46,11.46-5.14,11.46-11.46Zm-20.05-.02c0-4.75,3.86-8.61,8.61-8.61s8.61,3.85,8.61,8.61-3.85,8.61-8.61,8.61-8.61-3.85-8.61-8.61Z"
    />
  </svg>
`,Y=(e,t=`account_modal.link_steam`)=>c`
  <button
    @click=${e}
    class="w-full px-6 py-3 text-white bg-[#1b2838] hover:bg-[#2a475e] border border-[#66c0f4]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#66c0f4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    ${J(`w-5 h-5 shrink-0`)}
    <span class="font-bold tracking-wide">${d(t)}</span>
  </button>
`,X=[`email_exists`,`deleted`,`error`,`no_account`];function re(e){let t=typeof e?.login==`string`?e.login:void 0;if(t===void 0)return;let n=new URLSearchParams(window.location.hash.slice(1));n.delete(`login`);let r=n.toString();return history.replaceState(null,``,r?`#${r}`:window.location.pathname+window.location.search),X.includes(t)?t:void 0}var ie={email_exists:`account_modal.login_email_exists`,deleted:`account_modal.login_deleted`,error:`account_modal.login_error`,no_account:`account_modal.login_no_account`},Z={"account_modal.phone_number":`شماره تلفن`,"account_modal.phone_placeholder":`۹۱۲۳۴۵۶۷۸۹`,"account_modal.phone_auth_coming_soon":`سرویس ارسال پیامک هنوز متصل نشده است.`,"account_modal.auth_login":`ورود`,"account_modal.auth_register":`ثبت‌نام`,"account_modal.auth_phone":`شماره تلفن`,"account_modal.auth_username":`نام کاربری`,"account_modal.auth_signing_in":`در حال ورود…`,"account_modal.auth_password":`رمز عبور`,"account_modal.auth_code":`کد تأیید پیامک`,"account_modal.auth_send_code":`ارسال کد`,"account_modal.auth_submit_login":`ورود به حساب`,"account_modal.auth_submit_register":`ساخت حساب`,"account_modal.auth_code_required":`برای ثبت‌نام، کد پیامک‌شده را وارد کنید.`,"account_modal.auth_login_method":`روش ورود`,"account_modal.auth_login_fields_required":`شماره تلفن یا نام کاربری و رمز عبور را کامل کنید.`,"account_modal.auth_login_failed":`نام کاربری یا رمز عبور نادرست است، یا این حساب مسدود شده است.`,"account_modal.auth_test_login_success":`با حساب {username} وارد شدی.`,"account_modal.auth_phone_invalid":`شماره را بدون +98 و با ۱۰ رقم وارد کنید؛ شماره باید با 9 شروع شود.`,"account_modal.auth_password_required":`رمز عبور را وارد کنید.`};function Q(e){let t=d(e);return document.documentElement.dir===`rtl`&&Z[e]?Z[e]:t===e?Z[e]??e:t}var $=class extends L{constructor(){super(),this.routerName=`account`,this.phoneNumber=``,this.username=``,this.password=``,this.verificationCode=``,this.authMode=`login`,this.loginMethod=`username`,this.authSubmitting=!1,this.isLoadingUser=!1,this.crazyGamesUser=null,this.userMeResponse=null,this.statsTree=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.handleRewardsChanged=e=>{this.userMeResponse&&(this.userMeResponse.player.rewards=e.detail.rewards,e.detail.currency&&(this.userMeResponse.player.currency=e.detail.currency),this.requestUpdate())},this.handleCreatorChanged=e=>{this.userMeResponse&&(this.userMeResponse.player.creator=e.detail.creator,this.prefillCreatorCode=void 0,this.requestUpdate())},this.handleLinkSteam=async()=>{await ne()||await D(d(`account_modal.link_steam_failed`))},this.handleLinkGoogle=async()=>{await x()||await D(d(`account_modal.link_google_failed`))},document.addEventListener(`userMeResponse`,e=>{this.refreshCrazyGamesUser();let t=e;if(t.detail){let e=this.userMeResponse?.player?.publicId;this.userMeResponse=t.detail,this.userMeResponse?.player?.publicId!==e&&(this.resetPlayerData(),this.requestUpdate())}else this.resetPlayerData(),this.requestUpdate()})}refreshCrazyGamesUser(){m.isOnCrazyGames()&&m.getUserProfile().then(e=>{this.crazyGamesUser=e,this.requestUpdate()})}hasAnyStats(){return this.statsTree?Object.keys(this.statsTree).length>0&&Object.values(this.statsTree).some(e=>e&&Object.keys(e).length>0):!1}renderHeaderSlot(){let e=!!this.userMeResponse?.user,t=this.userMeResponse?.player?.publicId??``;return I({title:d(`account_modal.title`),onBack:()=>this.close(),ariaLabel:d(`common.back`),rightContent:e&&!this.isLoadingUser&&t?c`
              <copy-button
                class="shrink-0"
                .copyText=${V(t)}
                .displayText=${d(`player_profile.share`)}
                .showVisibilityToggle=${!1}
              ></copy-button>
            `:void 0})}isLinkedAccount(){return P(this.userMeResponse?.user)||!!this.crazyGamesUser&&this.userMeResponse!==null}modalConfig(){return this.isLoadingUser||!this.isLinkedAccount()?{}:{tabs:[{key:`account`,label:d(`account_modal.tab_account`)},{key:`stats`,label:d(`account_modal.tab_stats`)},{key:`games`,label:d(`account_modal.tab_games`)},{key:`friends`,label:d(`account_modal.tab_friends`)}]}}renderBody(e){return this.isLoadingUser?this.renderLoadingSpinner(d(`account_modal.fetching_account`)):this.isLinkedAccount()?c`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
    `:c`<div class="custom-scrollbar mr-1">
        ${m.isOnCrazyGames()?this.renderCrazyGamesSignIn():this.renderLoginOptions()}
      </div>`}renderTab(e){switch(e){case`stats`:return this.renderStatsTab();case`games`:return this.renderGamesTab();case`friends`:return this.renderFriendsTab();default:return this.renderAccountTab()}}renderPhoneField(){return c`
      <div
        class="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/5 transition focus-within:border-amber-300/50 focus-within:ring-2 focus-within:ring-amber-300/10"
        dir="ltr"
      >
        <span
          class="border-r border-white/10 px-4 py-4 text-sm font-bold text-amber-200"
          >+98</span
        >
        <input
          type="tel"
          inputmode="numeric"
          autocomplete="tel-national"
          maxlength="10"
          .value=${this.phoneNumber}
          @input=${this.handlePhoneInput}
          placeholder=${Q(`account_modal.phone_placeholder`)}
          aria-label=${Q(`account_modal.phone_number`)}
          class="min-w-0 flex-1 bg-transparent px-4 py-4 text-left text-sm font-medium text-white outline-none placeholder:text-white/25"
        />
      </div>
    `}renderPasswordField(){return c`<input
      type="password"
      autocomplete=${this.authMode===`login`?`current-password`:`new-password`}
      .value=${this.password}
      @input=${e=>{this.password=e.target.value}}
      placeholder=${Q(`account_modal.auth_password`)}
      aria-label=${Q(`account_modal.auth_password`)}
      class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
    />`}renderAuthModeToggle(){return c`<div
      class="grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-black/20 p-1"
      role="tablist"
      aria-label=${Q(`account_modal.auth_login_method`)}
    >
      <button
        type="button"
        role="tab"
        aria-selected=${this.authMode===`login`}
        class="rounded-lg px-3 py-2.5 text-sm font-bold transition ${this.authMode===`login`?`bg-amber-300/15 text-amber-100`:`text-white/50 hover:text-white`}"
        @click=${()=>this.authMode=`login`}
      >
        ${Q(`account_modal.auth_login`)}
      </button>
      <button
        type="button"
        role="tab"
        aria-selected=${this.authMode===`register`}
        class="rounded-lg px-3 py-2.5 text-sm font-bold transition ${this.authMode===`register`?`bg-amber-300/15 text-amber-100`:`text-white/50 hover:text-white`}"
        @click=${()=>this.authMode=`register`}
      >
        ${Q(`account_modal.auth_register`)}
      </button>
    </div>`}renderFriendsTab(){return c`<friends-list
      .myPublicId=${this.userMeResponse?.player?.publicId??``}
      @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
    ></friends-list>`}openPlayerProfile(e){document.querySelector(`player-profile-modal`)?.openFromAccount(e)}returnToFriends(){this.open({tab:`friends`})}renderAccountTab(){return this.crazyGamesUser?this.renderCrazyGamesAccount(this.crazyGamesUser):c`
      <div class="flex flex-col gap-6">
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${d(`account_modal.connected_as`)}
            </div>
            <div class="flex items-center gap-8 justify-center flex-wrap">
              <discord-user-header
                .data=${this.userMeResponse?.user?.discord??null}
              ></discord-user-header>
              ${this.userMeResponse?.user?.steam?c`<steam-user-header
                    .data=${this.userMeResponse.user.steam}
                  ></steam-user-header>`:null}
              ${this.renderLoggedInAs()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()} ${this.renderCreatorCodePanel()}
        ${this.renderDesktopLinkGateAction()}
      </div>
    `}renderDesktopLinkGateAction(){return p()===null?s:c`
      <o-button
        variant="secondary"
        width="block"
        size="md"
        translationKey="account_modal.link_existing_account"
        @click=${this.handleShowLinkGate}
      ></o-button>
    `}handleShowLinkGate(){p()?.showLinkGate().catch(e=>{console.error(`AccountModal: showLinkGate failed`,e)})}renderCrazyGamesAccount(e){return c`
      <div class="flex flex-col gap-6">
        <div class="bg-white/5 rounded-xl border border-white/10 p-6">
          <div class="flex flex-col items-center gap-4">
            <div
              class="text-xs text-white/40 uppercase tracking-widest font-bold border-b border-white/5 pb-2 px-8"
            >
              ${d(`account_modal.connected_as`)}
            </div>
            <div class="flex flex-col items-center gap-3">
              <img
                src=${e.profilePictureUrl}
                alt=${e.username}
                class="w-16 h-16 rounded-full object-cover"
                referrerpolicy="no-referrer"
              />
              <div class="text-white text-lg font-medium">${e.username}</div>
              ${this.renderCurrency()}
            </div>
          </div>
        </div>
        ${this.renderRewardsPanel()}
      </div>
    `}renderCrazyGamesSignIn(){return c`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/50 text-sm font-medium mb-6">
            ${d(`account_modal.sign_in_desc`)}
          </p>
          <o-button
            variant="primary"
            width="block"
            size="md"
            translationKey="main.sign_in"
            @click=${this.handleCrazyGamesSignIn}
          ></o-button>
        </div>
      </div>
    `}renderStatsTab(){return this.hasAnyStats()?c`
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `:this.renderEmptyState(`📊`,d(`account_modal.no_stats`))}renderGamesTab(){let e=this.userMeResponse?.player?.publicId??``;return e?c`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>void this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:this.renderEmptyState(`🎮`,d(`account_modal.no_games`))}renderEmptyState(e,t){return c`
      <div
        class="bg-white/5 rounded-xl border border-white/10 p-12 flex flex-col items-center justify-center text-center"
      >
        <div class="text-4xl mb-3">${e}</div>
        <p class="text-white/60 text-sm">${t}</p>
      </div>
    `}renderRewardsPanel(){let e=this.userMeResponse?.player?.rewards??[];return e.length===0?``:c`<rewards-panel
      .rewards=${e}
      @rewards-changed=${this.handleRewardsChanged}
    ></rewards-panel>`}renderCreatorCodePanel(){return c`<creator-code-panel
      .creator=${this.userMeResponse?.player?.creator}
      .prefillCode=${this.prefillCreatorCode}
      @creator-changed=${this.handleCreatorChanged}
    ></creator-code-panel>`}renderCurrency(){let e=this.userMeResponse?.player?.currency;return e?c`
      <currency-display
        .hard=${e.hard}
        .soft=${e.soft}
      ></currency-display>
    `:c``}renderLoggedInAs(){let e=this.userMeResponse?.user;return e?.discord?c`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `:e?.google?c`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${d(`account_modal.linked_account`,{account_name:e.google.email})}
          </div>
          ${this.renderCurrency()} ${this.renderSteamLink()}
        </div>
      `:e?.email?c`
        <div class="flex flex-col items-center gap-3 w-full">
          <div class="text-white text-lg font-medium">
            ${d(`account_modal.linked_account`,{account_name:e.email})}
          </div>
          ${this.renderCurrency()} ${this.renderGoogleLink()}
          ${this.renderSteamLink()}
        </div>
      `:e?.steam?c`
        <div class="flex flex-col items-center gap-3 w-full">
          ${this.renderCurrency()}
        </div>
      `:c``}renderGoogleLink(){let e=this.userMeResponse?.user?.google;if(e){let t=e.email?d(`account_modal.linked_to_google_email`,{email:e.email}):d(`account_modal.linked_to_google`);return c`
        <div class="flex items-center gap-2 text-white/70 text-sm">
          <img
            src=${g(`images/GoogleLogo.svg`)}
            alt=${d(`account_modal.google_alt`)}
            class="w-4 h-4"
          />
          <span>${t}</span>
        </div>
      `}return this.renderLinkGoogleButton()}renderLinkGoogleButton(){return this.userMeResponse?.user?.google?c``:R(this.handleLinkGoogle,f()?`account_modal.link_google_on_web`:`account_modal.link_google`)}renderSteamLink(){return f()?c``:this.userMeResponse?.user?.steam?c`
        <div class="flex flex-col items-center gap-1">
          <div class="flex items-center gap-2 text-white/70 text-sm">
            ${J(`w-4 h-4 shrink-0`)}
            <span>${d(`account_modal.linked_to_steam`)}</span>
          </div>
          <span class="text-white/40 text-xs text-center">
            ${d(`account_modal.link_steam_permanent`)}
          </span>
        </div>
      `:c`
      <div class="w-full flex flex-col gap-1">
        ${Y(this.handleLinkSteam)}
        <span class="text-white/40 text-xs text-center">
          ${d(`account_modal.link_steam_permanent`)}
        </span>
      </div>
    `}async viewGame(e){this.close();let t=encodeURIComponent(e),n=a(o.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromAccount(e)}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}finishLoadingUser(){this.isLoadingUser=!1,this.requestUpdate(),this.restoreGamesScrollAfterOpen&&(this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll())}resetPlayerData(){this.statsTree=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1}renderLoginError(){return this.loginError===void 0?c``:c`
      <div
        class="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4"
      >
        <span class="text-red-400 text-lg leading-none" aria-hidden="true">
          &#9888;
        </span>
        <p class="flex-1 text-sm text-red-200">
          ${d(ie[this.loginError])}
        </p>
        <button
          class="text-red-200/60 hover:text-red-200 text-lg leading-none"
          aria-label=${d(`common.close`)}
          @click=${()=>this.loginError=void 0}
        >
          &times;
        </button>
      </div>
    `}renderLoginOptions(){return c`
      <div class="flex items-center justify-center p-6 min-h-full">
        <div
          class="w-full max-w-md bg-white/5 rounded-2xl border border-white/10 p-8"
        >
          <div class="text-center mb-8">
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-inner"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
            <p class="text-white/50 text-sm font-medium">
              ${d(`account_modal.sign_in_desc`)}
            </p>
            ${this.renderCurrency()}
          </div>

          ${this.renderLoginError()}

          <div class="space-y-4">
            ${this.renderAuthModeToggle()}
            ${this.authMode===`login`?c`
                  <div
                    class="flex gap-2 text-xs"
                    role="group"
                    aria-label=${Q(`account_modal.auth_login_method`)}
                  >
                    <button
                      type="button"
                      class="rounded-lg px-3 py-2 transition ${this.loginMethod===`phone`?`bg-white/10 text-amber-100`:`text-white/45 hover:text-white`}"
                      aria-pressed=${this.loginMethod===`phone`}
                      @click=${()=>this.loginMethod=`phone`}
                    >
                      ${Q(`account_modal.auth_phone`)}
                    </button>
                    <button
                      type="button"
                      class="rounded-lg px-3 py-2 transition ${this.loginMethod===`username`?`bg-white/10 text-amber-100`:`text-white/45 hover:text-white`}"
                      aria-pressed=${this.loginMethod===`username`}
                      @click=${()=>this.loginMethod=`username`}
                    >
                      ${Q(`account_modal.auth_username`)}
                    </button>
                  </div>
                  ${this.loginMethod===`phone`?this.renderPhoneField():c`<input
                        type="text"
                        autocomplete="username"
                        .value=${this.username}
                        @input=${e=>{this.username=e.target.value}}
                        placeholder=${Q(`account_modal.auth_username`)}
                        aria-label=${Q(`account_modal.auth_username`)}
                        class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
                      />`}
                  ${this.renderPasswordField()}
                  <button
                    type="button"
                    ?disabled=${this.authSubmitting}
                    class="w-full rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-3.5 text-sm font-black text-zinc-950 transition hover:from-amber-100 hover:to-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
                    @click=${()=>void this.handleLogin()}
                  >
                    ${this.authSubmitting?Q(`account_modal.auth_signing_in`):Q(`account_modal.auth_submit_login`)}
                  </button>
                `:c`
                  ${this.renderPhoneField()}
                  <div class="flex gap-2">
                    <input
                      type="text"
                      inputmode="numeric"
                      autocomplete="one-time-code"
                      maxlength="6"
                      .value=${this.verificationCode}
                      @input=${e=>{this.verificationCode=e.target.value.replace(/[۰-۹]/g,e=>String(`۰۱۲۳۴۵۶۷۸۹`.indexOf(e))).replace(/[٠-٩]/g,e=>String(`٠١٢٣٤٥٦٧٨٩`.indexOf(e))).replace(/\D/g,``).slice(0,6)}}
                      placeholder=${Q(`account_modal.auth_code`)}
                      aria-label=${Q(`account_modal.auth_code`)}
                      class="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white outline-none transition placeholder:text-white/25 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
                    />
                    <button
                      type="button"
                      class="shrink-0 rounded-xl border border-amber-200/25 bg-amber-200/[.08] px-3 text-xs font-bold text-amber-100 transition hover:bg-amber-200/[.14]"
                      @click=${()=>void this.handleRequestPhoneCode()}
                    >
                      ${Q(`account_modal.auth_send_code`)}
                    </button>
                  </div>
                  ${this.renderPasswordField()}
                  <button
                    type="button"
                    class="w-full rounded-xl bg-gradient-to-br from-amber-200 to-amber-400 px-4 py-3.5 text-sm font-black text-zinc-950 transition hover:from-amber-100 hover:to-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
                    @click=${()=>void this.handleRegister()}
                  >
                    ${Q(`account_modal.auth_submit_register`)}
                  </button>
                  <p class="text-center text-xs leading-5 text-white/40">
                    ${Q(`account_modal.phone_auth_coming_soon`)}
                  </p>
                `}
          </div>

          <!-- Not on Steam: the Steam ticket re-creates the session on reload. -->
          ${j.isOnSteam()?s:c`<div class="mt-8 text-center border-t border-white/10 pt-6">
                <button
                  @click="${this.handleLogout}"
                  class="text-[10px] font-bold text-white/20 hover:text-red-400 transition-colors uppercase tracking-widest pb-0.5"
                >
                  ${d(`account_modal.clear_session`)}
                </button>
              </div>`}
        </div>
      </div>
    `}handlePhoneInput(e){let t=e.target.value.replace(/[۰-۹]/g,e=>String(`۰۱۲۳۴۵۶۷۸۹`.indexOf(e))).replace(/[٠-٩]/g,e=>String(`٠١٢٣٤٥٦٧٨٩`.indexOf(e))).replace(/\D/g,``).slice(0,10);this.phoneNumber=t}async handleLogin(){if(!(this.loginMethod===`phone`?/^9\d{9}$/.test(this.phoneNumber):this.username.trim().length>0)||this.password.length===0){await D(Q(`account_modal.auth_login_fields_required`));return}if(this.loginMethod!==`username`){await D(Q(`account_modal.phone_auth_coming_soon`));return}this.authSubmitting=!0;try{let e=await b(this.username.trim(),this.password);y(),this.userMeResponse=e,t(d(`account_modal.auth_test_login_success`,{username:e.player.username??this.username.trim()}),`green`),this.close()}catch{await D(Q(`account_modal.auth_login_failed`))}finally{this.authSubmitting=!1}}async handleRequestPhoneCode(){if(!/^9\d{9}$/.test(this.phoneNumber)){await D(Q(`account_modal.auth_phone_invalid`));return}await D(Q(`account_modal.phone_auth_coming_soon`))}async handleRegister(){if(!/^9\d{9}$/.test(this.phoneNumber)){await D(Q(`account_modal.auth_phone_invalid`));return}if(this.verificationCode.length!==6){await D(Q(`account_modal.auth_code_required`));return}if(this.password.length===0){await D(Q(`account_modal.auth_password_required`));return}await D(Q(`account_modal.phone_auth_coming_soon`))}async handleCrazyGamesSignIn(){await m.showAuthPrompt();let e=await m.getUserProfile();if(!e)return;y(),await h();let t=await v();t&&(this.userMeResponse=t),this.crazyGamesUser=e,this.requestUpdate()}consumeCreatorCodeArg(e){let t=typeof e?.creatorCode==`string`?e.creatorCode:void 0;if(!t)return;let n=new URLSearchParams(window.location.hash.slice(1));n.delete(`creatorCode`);let r=n.toString();return history.replaceState(null,``,r?`#${r}`:window.location.pathname+window.location.search),t}onOpen(e){this.isLoadingUser=!0,z(e),this.loginError=re(e),this.prefillCreatorCode=this.consumeCreatorCodeArg(e),this.refreshCrazyGamesUser(),v().then(e=>{e&&(this.userMeResponse=e,this.userMeResponse?.player?.publicId&&this.loadPlayerProfile(this.userMeResponse.player.publicId)),this.finishLoadingUser()}).catch(e=>{console.warn(`Failed to fetch user info in AccountModal.open():`,e),this.finishLoadingUser()}),this.requestUpdate()}onClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}async handleLogout(){localStorage.removeItem(T),sessionStorage.removeItem(T),window.dispatchEvent(new Event(M)),await S(),this.close(),window.location.reload()}async loadPlayerProfile(e){try{let t=await te(e);if(!t){this.requestUpdate();return}this.statsTree=t.stats,this.requestUpdate()}catch(e){console.warn(`Failed to load player data:`,e),this.requestUpdate()}}};l([n()],$.prototype,`phoneNumber`,void 0),l([n()],$.prototype,`username`,void 0),l([n()],$.prototype,`password`,void 0),l([n()],$.prototype,`verificationCode`,void 0),l([n()],$.prototype,`authMode`,void 0),l([n()],$.prototype,`loginMethod`,void 0),l([n()],$.prototype,`authSubmitting`,void 0),l([n()],$.prototype,`isLoadingUser`,void 0),l([n()],$.prototype,`crazyGamesUser`,void 0),l([n()],$.prototype,`loginError`,void 0),l([n()],$.prototype,`prefillCreatorCode`,void 0),$=l([r(`account-modal`)],$);export{$ as AccountModal};