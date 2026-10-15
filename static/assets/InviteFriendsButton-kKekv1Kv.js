import{B as e,N as t,Z as n,k as r,z as i}from"./Platform-ChKbd54A.js";import{$ as a,Et as o,F as s,Q as c,T as l,et as u,st as d,t as f,tt as p,z as m}from"./decorate-CgSmyiMM.js";import{Fr as h,Gt as g,gr as _}from"./index-BXqdvtGy.js";import{n as v,r as y}from"./ThemeProvider-BluFYE8g.js";import{t as b}from"./repeat-HlqVS8N8.js";function x(t,n,r,i=C(t.length,n.length)){let a=new Map,s=new Map,c=[];for(let e of t){let t=e.teamIndex===null?void 0:n[e.teamIndex];if(t===void 0){c.push(e);continue}a.set(e,t),s.set(t,(s.get(t)??0)+1)}let l=new Map,u=[];for(let e of c)e.clanTag?(l.has(e.clanTag)||l.set(e.clanTag,[]),l.get(e.clanTag).push(e)):u.push(e);let d=Array.from(l.values()).sort((e,t)=>t.length-e.length);for(let e of d){let t=null,r=0;for(let e of n){let n=s.get(e)??0;t!==null&&r<=n||(r=n,t=e)}if(t!==null){for(let n of e)r<i?(r++,a.set(n,t)):a.set(n,`kicked`);s.set(t,r)}}let f=new Set;for(let e of t)e.clientID!==null&&f.add(e.clientID);let p=new Map,m=(e,t)=>{let n=p.get(e);n===void 0&&(n=new Set,p.set(e,n)),n.add(t)};for(let e of t)if(e.clientID!==null)for(let t of e.friends)f.has(t)&&(m(e.clientID,t),m(t,e.clientID));let h=new Map;for(let[e,t]of a.entries())e.clientID!==null&&t!==`kicked`&&h.set(e.clientID,t);let g=e=>{let t=e.clientID===null?void 0:p.get(e.clientID),o=null,c=-1,l=r?-1:1/0;for(let e of n){let n=s.get(e)??0;if(n>=i)continue;let a=0;if(t!==void 0)for(let n of t)h.get(n)===e&&a++;(a>c||a===c&&(r?n>l:n<l))&&(c=a,l=n,o=e)}if(o===null){a.set(e,`kicked`);return}s.set(o,(s.get(o)??0)+1),a.set(e,o),e.clientID!==null&&h.set(e.clientID,o)},_=u.filter(t=>t.playerType===e.Nation);_.length>0&&(_=new y(o(_[0].id)).shuffleArray(_));let v=u.filter(t=>t.playerType!==e.Nation);for(let e of v.concat(_))g(e);return a}function S(e,t,n,r){let i=C(e.length+r,t.length);return x(e,t,n===`Duos`||n===`Trios`||n===`Quads`,i)}function C(e,t){return Math.ceil(e/t)}var w=class extends p{constructor(...e){super(...e),this.gameMode=t.FFA,this.clients=[],this.teamPreview=[],this.teamMaxSize=0,this.lobbyCreatorClientID=``,this.currentClientID=``,this.teamCount=2,this.nameReveals=[],this.anonymizeNames=!1,this.nationCount=0,this.isPublicGame=!1,this.showTeamColors=!1,this._clanUpdateTimeout=null,this._teamClanTags=new Map,this._viewerFriends=new Set,this.userSettings=new _}get theme(){return v.current()}get activePlayers(){return this.clients.filter(e=>!e.spectator)}get spectators(){return this.clients.filter(e=>e.spectator===!0)}get effectiveNationCount(){return this.isPublicGame&&this.teamCount===`Humans Vs Nations`?this.activePlayers.length:this.nationCount}willUpdate(e){if(e.has(`clients`)||e.has(`currentClientID`)){let e=this.currentClientID?this.clients.find(e=>e.clientID===this.currentClientID):void 0;this._viewerFriends=new Set(e?.friends??[])}if(e.has(`gameMode`)||e.has(`clients`)||e.has(`teamCount`)||e.has(`nationCount`)||e.has(`isPublicGame`)){let e=this.getTeamList();this.computeTeamPreview(e),this.showTeamColors=e.length<=7}}disconnectedCallback(){super.disconnectedCallback(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null)}render(){return d`
      <div class="border-t border-white/10 pt-6">
        <div class="flex justify-between items-center mb-4">
          <div
            class="text-xs font-bold text-white/40 uppercase tracking-widest"
          >
            ${this.activePlayers.length}
            ${this.activePlayers.length===1?m(`host_modal.player`):m(`host_modal.players`)}
            <span style="margin: 0 8px;">•</span>
            ${this.effectiveNationCount}
            ${this.effectiveNationCount===1?m(`host_modal.nation_player`):m(`host_modal.nation_players`)}
          </div>
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${this.gameMode===t.Team?this.renderTeamMode():this.renderFreeForAll()}
        </div>
        ${this.renderSpectators()}
      </div>
    `}renderSpectators(){let e=this.spectators;return e.length===0?d``:d`
      <div class="mt-4">
        <div
          class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4"
        >
          ${e.length}
          ${e.length===1?m(`host_modal.spectator`):m(`host_modal.spectators`)}
        </div>
        <div
          class="players-list block rounded-lg border border-white/10 bg-white/5 p-2"
        >
          ${b(e,e=>e.clientID??e.username,e=>d`<span
                class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
              >
                <span class="text-white"
                  >${this.getClientDisplayName(e)}
                  ${this.renderVerifiedBadge(e)}</span
                >
              </span>`)}
        </div>
      </div>
    `}createRenderRoot(){return this}renderTeamMode(){let e=this.teamPreview.filter(e=>e.players.length>0||e.team===r.Nations),t=this.teamPreview.filter(e=>e.players.length===0&&e.team!==r.Nations);return d` <div
      class="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch"
    >
      <div
        class="w-full md:w-60 bg-gray-800 p-2 border border-gray-700 rounded-lg"
      >
        <div class="font-bold mb-1.5 text-gray-300 text-sm">
          ${m(`host_modal.players`)}
        </div>
        ${b(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d`<div
              class="px-2 py-1 rounded-sm mb-1 text-xs text-white border break-words
                ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
            >
              ${t} ${this.renderVerifiedBadge(e)}
              ${this.renderFriendBadge(e)}
            </div>`})}
      </div>
      <div class="flex-1 flex flex-col gap-3 md:gap-4 md:pr-1">
        <div>
          <div class="font-semibold text-gray-200 mb-1 text-sm">
            ${m(`host_modal.assigned_teams`)}
          </div>
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${b(e,e=>e.team,e=>this.renderTeamCard(e,!1))}
          </div>
        </div>
        <div>
          ${t.length>0?d`<div class="font-semibold text-gray-200 mb-1 text-sm">
                ${m(`host_modal.empty_teams`)}
              </div>`:``}
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            ${b(t,e=>e.team,e=>this.renderTeamCard(e,!0))}
          </div>
        </div>
      </div>
    </div>`}renderRevealToggle(e){if(!this.onToggleNameReveal||!this.anonymizeNames)return d``;let t=this.nameReveals.includes(e);return d`<button
      @click=${()=>this.onToggleNameReveal?.(e)}
      title=${m(`host_modal.toggle_name_reveal`)}
      style="background:none;border:none;cursor:pointer;font-size:13px;line-height:1;margin-left:4px;opacity:${t?`1`:`0.35`};"
    >
      👁
    </button>`}renderFreeForAll(){return d`${b(this.activePlayers,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d`<span
          class="player-tag ${this.isCurrentPlayer(e)?`current-player`:``}"
        >
          <span class="text-white"
            >${t} ${this.renderVerifiedBadge(e)}
            ${this.renderFriendBadge(e)}</span
          >
          ${this.renderRevealToggle(e.clientID)}
          ${e.clientID===this.lobbyCreatorClientID?d`<span class="host-badge"
                >(${m(`host_modal.host_badge`)})</span
              >`:this.onKickPlayer?d`<button
                  class="remove-player-btn"
                  @click=${()=>this.onKickPlayer?.(e.clientID)}
                  aria-label=${m(`host_modal.remove_player`,{username:t})}
                >
                  <svg
                    class="h-2.5 w-2.5 stroke-white"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  >
                    <line x1="4" y1="4" x2="12" y2="12" />
                    <line x1="12" y1="4" x2="4" y2="12" />
                  </svg>
                </button>`:d``}
        </span>`})} `}renderTeamCard(e,t=!1){let n=e.team===r.Nations?this.effectiveNationCount:e.players.length,i=e.team===r.Nations?this.effectiveNationCount:this.teamMaxSize,a=this._teamClanTags.get(e.team)??null,o=l(e.team,a);return d`
      <div
        class="bg-gray-800 border rounded-xl flex flex-col
          ${this.teamContainsCurrentPlayer(e)?`border-sky-500/60`:`border-gray-700`}"
      >
        <div
          class="px-2 py-1 font-bold flex items-center justify-between text-white rounded-t-xl text-[13px] gap-2 bg-gray-700/70"
        >
          <div class="flex items-center gap-1.5 min-w-0">
            ${this.showTeamColors?d` <span
                  class="inline-block w-2.5 h-2.5 rounded-full border-2 border-white/90 shadow-inner bg-(--bg) shrink-0"
                  style="--bg:${this.teamHeaderColor(e.team)};"
                ></span>`:null}
            <span class="truncate">${o}</span>
          </div>
          <span class="text-white/90 font-bold text-[13px] shrink-0"
            >${n}/${i}</span
          >
        </div>
        <div class="p-2 ${t?``:`flex flex-col gap-1.5`}">
          ${t?d`<div class="text-[11px] italic text-gray-400">
                ${m(`host_modal.empty_team`)}
              </div>`:b(e.players,e=>e.clientID??e.username,e=>{let t=this.getClientDisplayName(e);return d` <div
                    class="px-2 py-1 rounded-sm text-xs flex items-center justify-between border
                      ${this.isCurrentPlayer(e)?`bg-malibu-blue/20 border-sky-500/40`:`bg-gray-700/70 border-transparent`}"
                  >
                    <span class="flex items-center gap-1 min-w-0">
                      <span class="truncate text-white">${t}</span>
                      ${this.renderVerifiedBadge(e)}
                      ${this.renderFriendBadge(e)}
                    </span>
                    ${this.renderRevealToggle(e.clientID)}
                    ${e.clientID===this.lobbyCreatorClientID?d`<span class="ml-2 text-[11px] text-green-300"
                          >(${m(`host_modal.host_badge`)})</span
                        >`:this.onKickPlayer?d`<button
                            class="remove-player-btn ml-2"
                            @click=${()=>this.onKickPlayer?.(e.clientID)}
                            aria-label=${m(`host_modal.remove_player`,{username:t})}
                          >
                            <svg
                              class="h-2.5 w-2.5 stroke-white"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2.5"
                              stroke-linecap="round"
                            >
                              <line x1="4" y1="4" x2="12" y2="12" />
                              <line x1="12" y1="4" x2="4" y2="12" />
                            </svg>
                          </button>`:d``}
                  </div>`})}
        </div>
      </div>
    `}getTeamList(){if(this.gameMode!==t.Team)return[];let e=this.activePlayers.length+this.effectiveNationCount,n=this.teamCount;if(n===`Humans Vs Nations`)return[r.Humans,r.Nations];let i;return i=typeof n==`number`?Math.max(2,n):Math.max(2,Math.ceil(e/(n===`Duos`?2:n===`Trios`?3:n===`Quads`?4:2))),i<8?[r.Red,r.Blue,r.Yellow,r.Green,r.Purple,r.Orange,r.Teal].slice(0,i):Array.from({length:i},(e,t)=>`Team ${t+1}`)}teamHeaderColor(e){try{return this.theme.teamColor(e).toHex()}catch{return`#3b3f46`}}computeTeamPreview(n=[]){if(this.gameMode!==t.Team){this.teamPreview=[],this.teamMaxSize=0,this._teamClanTags.clear(),this._clanUpdateTimeout!==null&&(window.clearTimeout(this._clanUpdateTimeout),this._clanUpdateTimeout=null);return}if(this.teamCount===`Humans Vs Nations`){this.teamMaxSize=this.activePlayers.length,this.teamPreview=[{team:r.Humans,players:[...this.activePlayers]},{team:r.Nations,players:[]}],this.triggerClanUpdate();return}let a=S(this.activePlayers.map(t=>new i(t.username,e.Human,t.clientID,t.clientID,!1,t.clanTag,t.friends??[],t.teamIndex??null)),n,this.teamCount,this.effectiveNationCount),o=new Map;for(let e of n)o.set(e,[]);for(let[e,t]of a.entries()){if(t===`kicked`)continue;let n=o.get(t);if(!n)continue;let r=this.clients.find(t=>t.clientID===e.clientID);r&&n.push(r)}this.teamCount===`Duos`?this.teamMaxSize=2:this.teamCount===`Trios`?this.teamMaxSize=3:this.teamCount===`Quads`?this.teamMaxSize=4:this.teamMaxSize=Math.max(1,Math.ceil((this.clients.length+this.effectiveNationCount)/n.length)),this.teamPreview=n.map(e=>({team:e,players:o.get(e)??[]})),this.triggerClanUpdate()}triggerClanUpdate(){this._teamClanTags.size===0?this.updateTeamClanTags():this.scheduleClanUpdate()}scheduleClanUpdate(){this._clanUpdateTimeout===null&&(this._clanUpdateTimeout=window.setTimeout(()=>{this.updateTeamClanTags(),this._clanUpdateTimeout=null,this.requestUpdate()},500))}updateTeamClanTags(){this._teamClanTags.clear();for(let e of this.teamPreview){let t=s(e.players);this._teamClanTags.set(e.team,t)}}isCurrentPlayer(e){return!!this.currentClientID&&e.clientID===this.currentClientID}teamContainsCurrentPlayer(e){return e.players.some(e=>this.isCurrentPlayer(e))}getClientDisplayName(t){let r=n(t.username,t.clanTag);return!this.userSettings.anonymousNames()||this.currentClientID&&t.clientID===this.currentClientID?r:n(h(t.username,e.Human)??t.username,t.clanTag)}renderVerifiedBadge(e){let t=this.userSettings.anonymousNames()&&!this.isCurrentPlayer(e);return e.verified!==!0||t?d``:d`<svg
      viewBox="0 0 24 24"
      class="inline-block w-3.5 h-3.5 align-[-2px] text-blue-400 shrink-0"
      aria-label=${m(`username.verified_heading`)}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="white"
        stroke-width="2.2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>`}renderFriendBadge(e){return!this._viewerFriends.has(e.clientID)||this.isCurrentPlayer(e)||this.anonymizeNames||this.userSettings.anonymousNames()?d``:d`<svg
      viewBox="0 0 24 24"
      class="lobby-friend-badge inline-block w-4 h-4 align-[-3px] text-emerald-400 shrink-0"
      fill="currentColor"
      aria-label=${m(`friends.lobby_marker`)}
    >
      <title>${m(`friends.lobby_marker`)}</title>
      <circle cx="9" cy="8" r="3.6"></circle>
      <path
        d="M9 13.2c-3.4 0-6.3 1.7-6.3 3.9V20h12.6v-2.9c0-2.2-2.9-3.9-6.3-3.9z"
      ></path>
      <circle cx="17.4" cy="8.6" r="2.9"></circle>
      <path
        d="M17.4 13.4c-.7 0-1.3.06-1.9.18 1.2 1 1.9 2.24 1.9 3.52V20h5.4v-2.6c0-1.9-2.4-4-5.4-4z"
      ></path>
    </svg>`}};f([a({type:String})],w.prototype,`gameMode`,void 0),f([a({type:Array})],w.prototype,`clients`,void 0),f([c()],w.prototype,`teamPreview`,void 0),f([c()],w.prototype,`teamMaxSize`,void 0),f([a({type:String})],w.prototype,`lobbyCreatorClientID`,void 0),f([a({type:String})],w.prototype,`currentClientID`,void 0),f([a({attribute:`team-count`})],w.prototype,`teamCount`,void 0),f([a({type:Function})],w.prototype,`onKickPlayer`,void 0),f([a({type:Function})],w.prototype,`onToggleNameReveal`,void 0),f([a({type:Array})],w.prototype,`nameReveals`,void 0),f([a({type:Boolean})],w.prototype,`anonymizeNames`,void 0),f([a({type:Number})],w.prototype,`nationCount`,void 0),f([a({type:Boolean})],w.prototype,`isPublicGame`,void 0),f([c()],w.prototype,`showTeamColors`,void 0),w=f([u(`lobby-player-view`)],w);function T(){if(!g.isAvailable())return;let e=m(`public_lobby.invite_friends`);return d`<button
    data-test-invite-friends
    type="button"
    @click=${()=>void g.openInviteDialog()}
    class="flex items-center gap-1.5 bg-white/5 hover:bg-white/10 rounded-lg px-2 py-1 border border-white/10 text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
    title=${e}
    aria-label=${e}
  >
    <svg
      class="w-4 h-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM16 7a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2V7z"
      ></path>
    </svg>
    ${e}
  </button>`}export{T as t};