import{T as e,c as t,u as n,v as r}from"./Platform-CHHnD-iM.js";import{P as i,Q as a,S as o,et as s,g as c,o as l,rt as u,st as d,t as f,z as p}from"./decorate-DDFJEDDP.js";import{L as ee}from"./Api-BUc1dCNJ.js";import{a as m,i as te}from"./DesktopShell-Cy7M529l.js";import{t as h}from"./CrazyGamesSDK-CbSm7Wb8.js";import{Bt as ne,Ft as re,It as ie,Nt as ae,Pt as oe,Rt as g,St as _,bt as v,ht as y,mt as b,xt as x,yt as S,zt as C}from"./index-D0upx8we.js";import{t as se}from"./StyledSelect-Sa0PzOmQ.js";import{t as ce}from"./repeat-zjuzQ5NN.js";var w=[`ffa`,`teams`,`hvn`],T=[`public`,`hosted`],E=[t,e,r],D=[`2`,`3`,`4`,`5`,`6`,`7`,`8`],le=[...E,...D],O={modes:[],sources:[],teamConfigs:[],hideEmpty:!1,minJoined:null,maxJoined:null,minCapacity:null,maxCapacity:null,minTeamSize:null,maxTeamSize:null},ue={[t]:2,[e]:3,[r]:4};function de(e){let t=e.gameConfig,r=t?.maxPlayers??null,i=t?.playerTeams,a=e.publicGameType===`hosted`?`hosted`:`public`,o=e.numClients??0;if(t?.gameMode!==n.Team)return{mode:`ffa`,source:a,joined:o,capacity:r,teamConfig:null,teamCount:null,teamSize:null};if(i===`Humans Vs Nations`)return{mode:`hvn`,source:a,joined:o,capacity:r,teamConfig:null,teamCount:null,teamSize:null};let s=null,c=null,l=null;if(typeof i==`number`)s=String(i),c=i,l=r!==null&&i>0?Math.floor(r/i):null;else if(typeof i==`string`){let e=ue[i];e!==void 0&&(s=i,l=e,c=r===null?null:Math.floor(r/e))}return{mode:`teams`,source:a,joined:o,capacity:r,teamConfig:s,teamCount:c,teamSize:l}}function k(e){return e?Object.values(e).flat().filter(e=>e!==void 0):[]}function A(e,t,n){return t===null&&n===null?!0:!(e===null||t!==null&&e<t||n!==null&&e>n)}function j(e,t){let n=de(e);return!(t.modes.length>0&&!t.modes.includes(n.mode)||t.sources.length>0&&!t.sources.includes(n.source)||t.teamConfigs.length>0&&(n.teamConfig===null||!t.teamConfigs.includes(n.teamConfig))||t.hideEmpty&&n.joined===0||!A(n.joined,t.minJoined,t.maxJoined)||!A(n.capacity,t.minCapacity,t.maxCapacity)||!A(n.teamSize,t.minTeamSize,t.maxTeamSize))}function M(e,t){return e.startsAt===void 0&&t.startsAt===void 0?0:e.startsAt===void 0?1:t.startsAt===void 0?-1:e.startsAt-t.startsAt}function N(e,t){return e.filter(e=>j(e,t)).sort(M)}var P=`detailed-view-filter-profiles`;function F(e,t){return Array.isArray(e)?[...new Set(e.filter(e=>typeof e==`string`))].filter(e=>t.includes(e)).sort((e,n)=>t.indexOf(e)-t.indexOf(n)):[]}function I(e){if(typeof e!=`number`||!Number.isFinite(e))return null;let t=Math.floor(e);return t<0?null:t}function L(e){if(typeof e!=`object`||!e)return{...O};let t=e;return{modes:F(t.modes,w),sources:F(t.sources,T),teamConfigs:F(t.teamConfigs,le),hideEmpty:t.hideEmpty===!0,minJoined:I(t.minJoined),maxJoined:I(t.maxJoined),minCapacity:I(t.minCapacity),maxCapacity:I(t.maxCapacity),minTeamSize:I(t.minTeamSize),maxTeamSize:I(t.maxTeamSize)}}function R(){return Object.create(null)}function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(){let e;try{let t=localStorage.getItem(P);if(t===null)return R();e=JSON.parse(t)}catch(e){return console.warn(`Failed to read saved lobby filter profiles`,e),R()}if(typeof e!=`object`||!e||Array.isArray(e))return R();let t=R();for(let[n,r]of Object.entries(e))t[n]=L(r);return t}function V(e){try{localStorage.setItem(P,JSON.stringify(e))}catch(e){console.warn(`Failed to save lobby filter profiles`,e)}}function fe(e,t){let n=e.trim().slice(0,32),r=B();return n===``||!z(r,n)&&Object.keys(r).length>=20?r:(r[n]=L(t),V(r),r)}function pe(e){let t=B();return z(t,e)?(delete t[e],V(t),t):t}var H=[`ffa`,`team`,`special`],U=6,W=`all`,G=`h-40`,me=220,he=`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors`,ge=`bg-malibu-blue text-white border-malibu-blue`,K=`bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white`,q=`block text-sm font-bold uppercase tracking-widest text-white`,J=`block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1.5`,Y=`px-2 py-1.5 rounded-lg bg-black/30 border border-white/10 text-white text-xs focus:outline-none focus:border-malibu-blue`,X=`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white transition-colors`,Z=class extends y{constructor(){super(),this.routerName=`detailed-view`,this.lobbies=null,this.filters={...O},this.showFilters=!1,this.profiles={},this.selectedProfile=``,this.profileName=``,this.desktopUpdateState=null,this.viewerTrusted=!1,this.viewerSignedIn=!1,this.showTrustRequired=!1,this.desktopSessionState=null,this.serverTimeOffset=0,this.countdownTimer=null,this.lobbySocket=new _(e=>{this.lobbies=e,this.serverTimeOffset=l(e.serverTime);for(let t of k(e.games))ie.ensure(t.gameConfig?.gameMap,()=>this.requestUpdate())}),this.onDesktopUpdateState=e=>{this.desktopUpdateState=e.detail},this.onUserMe=e=>{this.applyUserMe(e.detail)},this.onDesktopSessionState=e=>{this.desktopSessionState=e.detail},this.slotTops=new Map,this.id=`page-detailed-view`,this.activeTab=W}modalConfig(){return{tabs:[...H.map(e=>({key:e,label:p(`detailed_view.pane_${e}`)})),{key:W,label:p(`detailed_view.tab_all`)}]}}onOpen(){this.profiles=B(),this.lobbySocket.start(),this.countdownTimer??=window.setInterval(()=>this.requestUpdate(),1e3)}onClose(){this.lobbySocket.stop(),this.lobbies=null,this.countdownTimer!==null&&(clearInterval(this.countdownTimer),this.countdownTimer=null)}connectedCallback(){super.connectedCallback(),document.addEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.addEventListener(`userMeResponse`,this.onUserMe);let e=x();e!==null&&this.applyUserMe(e.response),m()&&(this.desktopUpdateState=te(),this.desktopSessionState=ee()),document.addEventListener(`desktop-session-state`,this.onDesktopSessionState)}disconnectedCallback(){document.removeEventListener(`desktop-update-state`,this.onDesktopUpdateState),document.removeEventListener(`userMeResponse`,this.onUserMe),document.removeEventListener(`desktop-session-state`,this.onDesktopSessionState),this.onClose(),super.disconnectedCallback()}applyUserMe(e){this.viewerSignedIn=C(e),this.viewerTrusted=ne(e),h.isOnCrazyGames()&&h.getUserProfile().then(e=>{e!==null&&(this.viewerSignedIn=!0)})}slotElements(){return Array.from(this.querySelectorAll(`[data-lobby-slot]`))}willUpdate(){super.willUpdate(),this.slotTops=new Map(this.slotElements().map(e=>[e.dataset.lobbySlot??``,e.getBoundingClientRect().top]))}updated(){if(!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches)for(let e of this.slotElements()){let t=this.slotTops.get(e.dataset.lobbySlot??``);if(t===void 0)continue;let n=t-e.getBoundingClientRect().top;Math.abs(n)<1||(e.style.transition=`none`,e.style.transform=`translateY(${n}px)`,requestAnimationFrame(()=>{e.style.transition=`transform ${me}ms ease-out`,e.style.transform=``}))}}createRenderRoot(){return this}renderHeaderSlot(){let e=this.activeFilterCount();return b({title:p(`detailed_view.title`),onBack:()=>this.close(),ariaLabel:p(`common.back`),rightContent:d`<o-button
        variant=${this.showFilters?`primary`:`secondary`}
        size="sm"
        title=${e>0?p(`detailed_view.filters_with_count`,{count:e}):p(`detailed_view.filters`)}
        @click=${()=>this.showFilters=!this.showFilters}
      ></o-button>`})}renderBody(e){if(this.lobbies===null)return this.renderLoadingSpinner();let t=k(this.lobbies.games),n=N(t,this.filters),r=(e,t)=>e.filter(e=>e.publicGameType===t);return d`
      <div class="custom-scrollbar p-4 lg:p-6 flex flex-col gap-4">
        ${this.showTrustRequired?g(this.viewerSignedIn,()=>this.showTrustRequired=!1):u}
        ${this.showFilters?this.renderFilterPanel():u}
        ${n.length===0?d`<p class="py-12 text-center text-sm text-white/50">
              ${p(`detailed_view.no_lobbies`)}
            </p>`:e===W?d`
                <!-- One pane per scheduled bucket, cards stacked within it. -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                  ${H.map(e=>this.renderPane(p(`detailed_view.pane_${e}`),r(n,e),r(t,e).length))}
                </div>
                ${this.renderHostedPane(r(n,`hosted`))}
              `:this.renderTypeTab(r(n,e),r(t,e).length)}
      </div>
    `}renderTypeTab(e,t){let n=Math.max(0,U-t);return e.length===0&&n===0?d`<p class="py-12 text-center text-sm text-white/50">
        ${p(`detailed_view.pane_empty`)}
      </p>`:d`
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${this.renderSlots(e,n)}
      </div>
    `}paneHeading(e,t){return p(`detailed_view.pane_heading`,{name:e,count:t})}renderPane(e,t,n){let r=Math.max(0,U-n);return d`
      <section class="flex flex-col gap-2 min-w-0">
        <h3 class="${q}">
          ${this.paneHeading(e,t.length)}
        </h3>
        <div class="flex flex-col gap-4">
          ${t.length===0&&r===0?d`<p
                class="py-6 text-center text-xs text-white/30 rounded-xl border border-dashed border-white/10"
              >
                ${p(`detailed_view.pane_empty`)}
              </p>`:u}
          ${this.renderSlots(t,r)}
        </div>
      </section>
    `}renderSlots(e,t){return d`
      ${ce(e,e=>e.gameID,e=>d`<div class="${G}" data-lobby-slot=${e.gameID}>
            ${this.renderCard(e)}
          </div>`)}
      ${Array.from({length:t},()=>this.renderSpawningSlot())}
    `}renderSpawningSlot(){return d`
      <div
        class="${G} flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface border border-white/10"
      >
        <span
          class="w-8 h-8 border-[3px] border-blue-500/30 border-t-blue-500 rounded-full animate-spin"
        ></span>
        <span class="text-xs uppercase tracking-widest text-white/50">
          ${p(`detailed_view.spawning`)}
        </span>
      </div>
    `}renderHostedPane(e){return e.length===0?u:d`
      <section class="flex flex-col gap-2">
        <h3 class="${q}">
          ${this.paneHeading(p(`detailed_view.pane_hosted`),e.length)}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderSlots(e,0)}
        </div>
      </section>
    `}renderCard(e){let t=e.gameConfig;if(!t)return u;let n=e.startsAt??e.autoStartAt;return re({lobby:e,subtitle:c(t),timeDisplay:this.timeDisplay(e,n),timeDisplayUppercase:n===void 0,heightClass:`h-full`,blocked:v(this.desktopUpdateState,this.desktopSessionState),viewerTrusted:this.viewerTrusted,onClick:()=>this.join(e)})}timeDisplay(e,t){if(t===void 0)return e.publicGameType===`hosted`?p(`public_lobby.waiting_for_players`):p(`detailed_view.queue_position`,{position:((this.lobbies?.games[e.publicGameType]?.filter(e=>e.startsAt===void 0))?.findIndex(t=>t.gameID===e.gameID)??-1)+1});let n=o(t,this.serverTimeOffset);return n>0?i(n):p(`public_lobby.starting_game`)}renderFilterPanel(){return d`
      <div
        class="flex flex-col gap-4 p-4 rounded-2xl bg-black/20 border border-white/10"
      >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(p(`detailed_view.mode`),w.map(e=>({value:e,label:p(`detailed_view.mode_${e}`),active:this.filters.modes.includes(e)})),e=>this.patchFilters({modes:Q(this.filters.modes,e)}))}
          ${this.renderChipGroup(p(`detailed_view.source`),T.map(e=>({value:e,label:p(`detailed_view.source_${e}`),active:this.filters.sources.includes(e)})),e=>this.patchFilters({sources:Q(this.filters.sources,e)}))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderChipGroup(p(`detailed_view.per_team`),E.map(e=>({value:e,label:p(`detailed_view.layout_${e.toLowerCase()}`),active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
          ${this.renderChipGroup(p(`detailed_view.team_count`),D.map(e=>({value:e,label:e,active:this.filters.teamConfigs.includes(e)})),e=>this.toggleTeamConfig(e))}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${this.renderRange(p(`detailed_view.joined_players`),`minJoined`,`maxJoined`)}
          ${this.renderRange(p(`detailed_view.capacity`),`minCapacity`,`maxCapacity`)}
          ${this.renderRange(p(`detailed_view.team_size`),`minTeamSize`,`maxTeamSize`)}
        </div>

        <div class="flex items-center justify-between gap-3 flex-wrap">
          <label
            class="flex items-center gap-2 text-xs text-white/70 cursor-pointer"
          >
            <input
              type="checkbox"
              class="w-4 h-4 accent-malibu-blue"
              .checked=${this.filters.hideEmpty}
              @change=${e=>this.patchFilters({hideEmpty:e.target.checked})}
            />
            ${p(`detailed_view.hide_empty`)}
          </label>
          <button @click=${()=>this.resetFilters()} class="${X}">
            ${p(`detailed_view.reset`)}
          </button>
        </div>

        ${this.renderProfiles()}
      </div>
    `}renderChipGroup(e,t,n){return d`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex flex-wrap gap-1.5">
          ${t.map(e=>d`<button
                @click=${()=>n(e.value)}
                aria-pressed=${e.active?`true`:`false`}
                class="${he} ${e.active?ge:K}"
              >
                ${e.label}
              </button>`)}
        </div>
      </div>
    `}renderRange(e,t,n){return d`
      <div>
        <span class="${J}">${e}</span>
        <div class="flex items-center gap-2">
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${p(`detailed_view.min`)}"
            placeholder=${p(`detailed_view.min`)}
            .value=${$(this.filters[t])}
            @change=${e=>this.setBound(t,e)}
          />
          <span class="text-xs text-white/30">–</span>
          <input
            type="number"
            min="0"
            class="${Y} w-full min-w-0 text-center"
            aria-label="${e} ${p(`detailed_view.max`)}"
            placeholder=${p(`detailed_view.max`)}
            .value=${$(this.filters[n])}
            @change=${e=>this.setBound(n,e)}
          />
        </div>
      </div>
    `}renderProfiles(){let e=Object.keys(this.profiles).sort((e,t)=>e.localeCompare(t));return d`
      <div class="pt-3 border-t border-white/10">
        <span class="${J}"
          >${p(`detailed_view.profiles`)}</span
        >
        <div class="flex flex-wrap items-center gap-2">
          ${se({options:[{value:``,label:p(`detailed_view.no_profile`)},...e.map(e=>({value:e,label:e}))],value:this.selectedProfile,onChange:e=>this.applyProfile(e),ariaLabel:p(`detailed_view.profiles`),className:`flex-1 min-w-[8rem]`})}
          <input
            type="text"
            maxlength="32"
            class="${Y} flex-1 min-w-[8rem]"
            placeholder=${p(`detailed_view.profile_name`)}
            aria-label=${p(`detailed_view.profile_name`)}
            .value=${this.profileName}
            @input=${e=>this.profileName=e.target.value}
          />
          <button @click=${()=>this.saveProfile()} class="${X}">
            ${p(`detailed_view.save_profile`)}
          </button>
          <button
            @click=${()=>this.deleteProfile()}
            ?disabled=${this.selectedProfile===``}
            class="${X} ${this.selectedProfile===``?`opacity-40 cursor-not-allowed`:``}"
          >
            ${p(`detailed_view.delete_profile`)}
          </button>
        </div>
      </div>
    `}activeFilterCount(){let e=this.filters,t=[e.minJoined,e.maxJoined,e.minCapacity,e.maxCapacity,e.minTeamSize,e.maxTeamSize];return+(e.modes.length>0)+ +(e.sources.length>0)+ +(e.teamConfigs.length>0)+ +!!e.hideEmpty+t.filter(e=>e!==null).length}toggleTeamConfig(e){this.patchFilters({teamConfigs:Q(this.filters.teamConfigs,e)})}patchFilters(e){this.filters={...this.filters,...e}}setBound(e,t){let n=t.target.value.trim();if(n===``){this.patchFilters({[e]:null});return}let r=Number(n);this.patchFilters({[e]:Number.isFinite(r)&&r>=0?Math.floor(r):null})}resetFilters(){this.filters={...O},this.selectedProfile=``}applyProfile(e){if(this.selectedProfile=e,e===``)return;let t=z(this.profiles,e)?this.profiles[e]:void 0;t&&(this.filters={...t},this.profileName=e)}saveProfile(){let e=this.profileName.trim();e!==``&&(this.profiles=fe(e,this.filters),this.selectedProfile=z(this.profiles,e)?e:this.selectedProfile)}deleteProfile(){this.selectedProfile!==``&&(this.profiles=pe(this.selectedProfile),this.selectedProfile=``)}canPlay(){let e=document.querySelector(`username-input`);return e?e.canPlay():!0}blockedFromLobbyJoin(){return v(this.desktopUpdateState,this.desktopSessionState)?(S(!1),!0):!1}join(e){if(this.canPlay()&&!this.blockedFromLobbyJoin()){if(!oe(e,this.viewerTrusted)){this.showTrustRequired=!0;return}if(this.close(),e.publicGameType===`hosted`){ae(`join-lobby-modal`,()=>document.querySelector(`join-lobby-modal`)?.open({lobbyId:e.gameID}));return}this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e.gameID,source:`public`,publicLobbyInfo:e},bubbles:!0,composed:!0}))}}};f([a()],Z.prototype,`lobbies`,void 0),f([a()],Z.prototype,`filters`,void 0),f([a()],Z.prototype,`showFilters`,void 0),f([a()],Z.prototype,`profiles`,void 0),f([a()],Z.prototype,`selectedProfile`,void 0),f([a()],Z.prototype,`profileName`,void 0),f([a()],Z.prototype,`desktopUpdateState`,void 0),f([a()],Z.prototype,`viewerTrusted`,void 0),f([a()],Z.prototype,`viewerSignedIn`,void 0),f([a()],Z.prototype,`showTrustRequired`,void 0),f([a()],Z.prototype,`desktopSessionState`,void 0),Z=f([s(`detailed-view-modal`)],Z);function Q(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function $(e){return e===null?``:String(e)}export{Z as DetailedGameViewModal};