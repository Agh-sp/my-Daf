import{N as e,P as t,a as n}from"./Platform-ChKbd54A.js";import{$ as r,C as i,P as a,Q as o,S as s,Z as c,et as l,j as u,lt as d,mt as f,o as p,st as m,t as h,vt as g,y as _,z as v}from"./decorate-CgSmyiMM.js";import{t as y}from"./CrazyGamesSDK-CbSm7Wb8.js";import{Ar as b,Br as x,Bt as S,Er as C,Ht as w,Mr as T,Or as E,Tt as D,_t as O,mt as k,u as A,vt as j,yt as M,zt as N}from"./index-DmVmrdQe.js";import"./CopyButton-Dr3ksLZd.js";import{t as P}from"./InviteFriendsButton-z0YhrRbO.js";import{a as F}from"./GameConfigHelpers-DrwcdxyM.js";import{t as I}from"./GameStartAlertController-CNp8d17g.js";var L=`rounded bg-malibu-blue px-1.5 py-0.5 text-[11px] font-bold tracking-widest text-white`,R=class extends M{constructor(...e){super(...e),this.eventBus=null,this.players=[],this.playerCount=0,this.gameConfig=null,this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.isConnecting=!0,this.lobbyCreatorClientID=null,this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.hostedServerTimeOffset=0,this.gameStartAlert=new I(this,()=>this.currentLobbyId!==``),this.leaveLobbyOnClose=!0,this.countdownTimerId=null,this.handledJoinTimeout=!1,this.joinTimeoutArmed=!1,this.hostedLobbySocket=new D(e=>{this.hostedServerTimeOffset=p(e.serverTime),this.hostedLobbies=e.games?.hosted??[],this.hostedLobbiesLoaded=!0}),this.handleLobbyInfo=e=>{let t=e.lobby;this.currentClientID=e.myClientID,this.isConnecting&&t.clients&&(this.isConnecting=!1),this.updateFromLobby({...t,startsAt:t.startsAt??void 0})}}isPrivateLobby(){return this.gameConfig?.gameType===t.Private}get isSpectating(){return this.players.find(e=>e.clientID===this.currentClientID)?.spectator===!0}setSpectating(e){this.eventBus?.emit(new k(e))}renderHeaderSlot(){if(!this.currentLobbyId)return j({title:v(`private_lobby.title`),onBack:()=>this.closeAndLeave(),ariaLabel:v(`common.close`)});let n=this.currentLobbyId&&this.isPrivateLobby()?m`<copy-button .lobbyId=${this.currentLobbyId}></copy-button>`:void 0,r=this.gameConfig?.gameType===t.Public&&this.gameConfig.gameMode!==e.Team,i=this.gameConfig===null||r?void 0:P();return j({titleContent:m`<span class="${O}"
          >${v(`public_lobby.title`)}</span
        >
        ${this.gameStartAlert.renderBell()}`,onBack:()=>this.closeAndLeave(),ariaLabel:v(`common.close`),rightContent:n&&i?m`<div class="flex items-center gap-2">${n}${i}</div>`:n??i})}renderSpectateToggle(){if(this.isConnecting)return m``;let e=this.isSpectating,t=e=>`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest transition ${e?`bg-white text-black`:`text-white/60 hover:text-white`}`;return m`
      <div class="flex items-center gap-1 rounded-xl bg-white/5 p-1">
        <button
          class=${t(!e)}
          ?disabled=${!e}
          @click=${()=>this.setSpectating(!1)}
        >
          ${v(`private_lobby.play`)}
        </button>
        <button
          class=${t(e)}
          ?disabled=${e}
          @click=${()=>this.setSpectating(!0)}
        >
          ${v(`private_lobby.spectate`)}
        </button>
      </div>
    `}renderBody(){if(!this.currentLobbyId)return this.renderJoinForm();let n=this.lobbyStartAt===null?null:s(this.lobbyStartAt,this.serverTimeOffset),r=n===null?this.isPrivateLobby()?v(`private_lobby.joined_waiting`):v(`public_lobby.waiting_for_players`):n>0?v(`public_lobby.starting_in`,{time:a(n)}):v(`public_lobby.started`),i=this.gameConfig?.maxPlayers??0,o=this.players?.filter(e=>!e.spectator).length??0,c=this.isPrivateLobby()?this.lobbyCreatorClientID??``:``;return m`
      <div class="flex flex-col h-full">
        <div class="flex-1 custom-scrollbar p-6 space-y-4 mr-1">
          ${this.isConnecting?m`
                <div
                  class="min-h-[240px] flex flex-col items-center justify-center gap-4"
                >
                  <div
                    class="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"
                  ></div>
                  <p class="text-center text-white/80 text-sm">
                    ${v(`public_lobby.connecting`)}
                  </p>
                </div>
              `:m`
                ${this.gameConfig?this.renderGameConfig():m``}
                ${this.players.length>0?m`
                      <lobby-player-view
                        class="mt-6"
                        .gameMode=${this.gameConfig?.gameMode??e.FFA}
                        .clients=${this.players}
                        .lobbyCreatorClientID=${c}
                        .currentClientID=${this.currentClientID}
                        .anonymizeNames=${this.gameConfig?.anonymizeNames??!1}
                        .teamCount=${this.gameConfig?.playerTeams??2}
                        .isPublicGame=${this.gameConfig?.gameType===t.Public}
                        .nationCount=${F(this.gameConfig?.nations??`default`,this.nationCount)}
                      ></lobby-player-view>
                    `:``}
              `}
        </div>

        ${m`
          <div
            class="p-6 lg:p-6 border-t border-white/10 bg-black/60 backdrop-blur-md shrink-0 sticky bottom-0 z-10"
          >
            <div
              class="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between gap-3"
            >
              <div class="flex flex-col">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-white/40"
                  >${v(`public_lobby.status`)}</span
                >
                <span class="text-sm font-bold text-white">${r}</span>
              </div>
              ${this.renderSpectateToggle()}
              ${i>0?m`
                    <div
                      class="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest"
                    >
                      <span>${o}/${i}</span>
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                        ></path>
                      </svg>
                    </div>
                  `:m``}
            </div>
          </div>
        `}
      </div>
    `}renderJoinForm(){return m`
      <div class="custom-scrollbar p-6 space-y-4 mr-1">
        <form @submit=${this.joinLobbyFromInput}>
          <div class="flex flex-col gap-3">
            <div class="flex gap-2">
              <input
                type="text"
                id="lobbyIdInput"
                placeholder=${v(`private_lobby.enter_id`)}
                @keyup=${this.handleChange}
                class="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-mono text-sm tracking-wider"
              />
              <o-button
                variant="ghost"
                size="md"
                iconPosition="only"
                .title=${v(`common.paste`)}
                .icon=${m`<svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 32 32"
                  height="18px"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15 3 C 13.742188 3 12.847656 3.890625 12.40625 5 L 5 5 L 5 28 L 13 28 L 13 30 L 27 30 L 27 14 L 25 14 L 25 5 L 17.59375 5 C 17.152344 3.890625 16.257813 3 15 3 Z M 15 5 C 15.554688 5 16 5.445313 16 6 L 16 7 L 19 7 L 19 9 L 11 9 L 11 7 L 14 7 L 14 6 C 14 5.445313 14.445313 5 15 5 Z M 7 7 L 9 7 L 9 11 L 21 11 L 21 7 L 23 7 L 23 14 L 13 14 L 13 26 L 7 26 Z M 15 16 L 25 16 L 25 28 L 15 28 Z"
                  ></path>
                </svg>`}
                @click=${this.pasteFromClipboard}
              ></o-button>
            </div>
            <div class="flex gap-2">
              <div class="flex-[2]">
                <o-button
                  title=${v(`private_lobby.join_lobby`)}
                  width="block"
                  submit
                ></o-button>
              </div>
              <div class="flex-1">
                <o-button
                  variant="ghost"
                  title=${v(`private_lobby.spectate`)}
                  width="block"
                  @click=${this.spectateLobbyFromInput}
                ></o-button>
              </div>
            </div>
          </div>
        </form>
        ${this.renderHostedLobbies()}
      </div>
    `}renderHostedLobbies(){let e;return e=this.hostedLobbiesLoaded?this.hostedLobbies.length===0?m`<p class="text-sm text-white/50">
        ${v(`private_lobby.no_open_lobbies`)}
      </p>`:m`<div class="flex flex-col gap-2">
        ${this.hostedLobbies.map(e=>this.renderHostedLobbyRow(e))}
      </div>`:m`<div class="flex justify-center py-3">
        <div
          class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"
        ></div>
      </div>`,m`
      <div class="pt-2">
        <div
          class="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2"
        >
          ${v(`private_lobby.open_lobbies`)}
        </div>
        ${e}
      </div>
    `}renderHostedLobbyRow(e){let t=e.gameConfig,n=t?_(t.gameMap)??t.gameMap:``,r=t?x(`maps/${encodeURIComponent(u(t.gameMap))}/thumbnail.webp`):``,i=t?S(t,null):[],o=t?.disabledUnits?.length??0,c=e.featured?e.label:void 0,l=c===void 0?`text-white`:{gold:`text-amber-300`,blue:`text-sky-300`,green:`text-emerald-300`,red:`text-rose-300`}[e.accent??`gold`],d=t?this.modeSubtitle(t):``,f=c?[n,d].filter(Boolean).join(` · `):d,p=e.startsAt??e.autoStartAt,h=p===void 0?void 0:s(p,this.hostedServerTimeOffset);return m`
      <button
        type="button"
        @click=${()=>this.joinHostedLobby(e)}
        class="w-full px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all flex items-center gap-3 text-left"
      >
        <img
          src=${r}
          alt=${n}
          class="w-12 h-12 rounded-lg object-cover border border-white/10 shrink-0"
          @error=${e=>{e.target.style.display=`none`}}
        />
        <div class="flex flex-col flex-1 min-w-0">
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-sm font-bold truncate ${l}"
              >${c??n}</span
            >
            ${e.custom?m`<span
                  class="px-1.5 py-0.5 bg-orange-500 text-white text-[10px] rounded font-bold uppercase tracking-wider shrink-0"
                  >${v(`public_lobby.custom`)}</span
                >`:``}
          </div>
          <span class="text-xs text-white/60">${f}</span>
          ${i.length>0||o>0?m`<div class="flex flex-wrap gap-1 mt-1">
                ${i.map(e=>m`<span
                    class="px-1.5 py-0.5 bg-white/10 text-white/70 text-[10px] rounded font-bold"
                    >${N(e)}</span
                  >`)}
                ${o>0?m`<span
                      class="px-1.5 py-0.5 bg-red-500/20 text-red-200 text-[10px] rounded font-bold border border-red-500/30"
                      >${v(`private_lobby.disabled_units`)}:
                      ${o}</span
                    >`:``}
              </div>`:``}
        </div>
        <div class="flex flex-col items-end gap-1 shrink-0">
          <div class="flex items-center gap-1 text-white/80 text-xs font-bold">
            ${e.numClients}${t?.maxPlayers?`/${t.maxPlayers}`:``}
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.972 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              ></path>
            </svg>
          </div>
          ${h===void 0?``:m`<span
                class="text-amber-300 text-xs font-bold tabular-nums"
                title=${v(`host_modal.auto_start_timer`)}
                >${h>0?a(h):v(`public_lobby.starting_game`)}</span
              >`}
        </div>
      </button>
    `}async joinHostedLobby(e){let t=e.gameID;this.startTrackingLobby(t,e);try{await this.checkActiveLobby(t)||(this.resetTrackingState(),this.showMessage(v(`private_lobby.not_found`),`red`))}catch(e){console.error(`Error joining hosted lobby:`,e),this.resetTrackingState(),this.showMessage(v(`private_lobby.error`),`red`)}}onOpen(e){this.leaveLobbyOnClose=!0,this.hostedLobbiesLoaded=!1,this.hostedLobbySocket.start();let t=typeof e?.lobbyId==`string`?e.lobbyId:``,n=e?.lobbyInfo;t&&(this.startTrackingLobby(t,n),n||this.handleUrlJoin(t,e?.spectate===!0))}async handleUrlJoin(e,t=!1){try{if(await this.checkActiveLobby(e,t))return;switch(await this.checkArchivedGame(e)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(v(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(v(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(v(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby from URL:`,e),this.resetTrackingState(),this.showMessage(v(`private_lobby.error`),`red`)}}startTrackingLobby(e,t){this.currentLobbyId=e,this.currentClientID=``,this.gameConfig=null,this.players=[],this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0,this.handledJoinTimeout=!1,this.joinTimeoutArmed=!1,this.startLobbyUpdates(),t&&(this.updateFromLobby(t),`clients`in t&&t.clients&&(this.isConnecting=!1))}resetTrackingState(){this.stopLobbyUpdates(),this.currentLobbyId=``,this.currentClientID=``,this.isConnecting=!1}leaveLobby(){this.currentLobbyId&&this.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:this.currentLobbyId},bubbles:!0,composed:!0}))}confirmBeforeClose(){return this.currentLobbyId?this.confirmClose(v(`host_modal.leave_confirmation`)):!0}onClose(){this.hostedLobbySocket.stop(),this.hostedLobbies=[],this.hostedLobbiesLoaded=!1,this.clearCountdownTimer(),this.stopLobbyUpdates(),this.leaveLobbyOnClose&&(this.leaveLobby(),this.updateHistory(`/`)),this.lobbyIdInput&&(this.lobbyIdInput.value=``),this.gameConfig=null,this.players=[],this.currentLobbyId=``,this.currentClientID=``,this.nationCount=0,this.lobbyStartAt=null,this.serverTimeOffset=0,this.lobbyCreatorClientID=null,this.gameStartAlert.reset(),this.isConnecting=!0}disconnectedCallback(){this.hostedLobbySocket.stop(),this.clearCountdownTimer(),this.stopLobbyUpdates(),super.disconnectedCallback()}closeAndLeave(){this.leaveLobby();try{this.updateHistory(`/`)}catch(e){console.warn(`Failed to restore URL on leave:`,e)}this.leaveLobbyOnClose=!1,this.close()}disarmLeaveOnClose(){this.leaveLobbyOnClose=!1}closeWithoutLeaving(){this.disarmLeaveOnClose(),this.close()}updateHistory(e){y.isOnCrazyGames()||history.replaceState(null,``,e)}modeSubtitle(t){return t.gameMode===e.Team?t.playerTeams===`Humans Vs Nations`?v(`host_modal.teams_Humans Vs Nations`):typeof t.playerTeams==`string`?v(`host_modal.teams_`+t.playerTeams):typeof t.playerTeams==`number`?v(`public_lobby.teams`,{num:t.playerTeams}):v(`game_mode.ffa`):v(`game_mode.ffa`)}renderGameConfig(){if(!this.gameConfig)return m``;let e=this.gameConfig,t=_(e.gameMap),n=u(e.gameMap),r=x(`maps/${encodeURIComponent(n)}/thumbnail.webp`),i=this.modeSubtitle(e),a=S(e,this.nationCount).map(e=>m`<span class="${L}">${N(e)}</span>`);return m`
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span class="text-lg font-bold text-white">${t}</span>
        <span class="text-sm text-white/60">${i}</span>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <div
          data-test-map-preview
          class="flex items-center justify-center w-full ${a.length>0?`sm:w-3/5`:``} shrink-0 rounded-lg border border-white/10 bg-black/20 overflow-hidden"
        >
          <img
            src=${r}
            alt=${t??e.gameMap}
            class="block w-full max-h-60 object-contain"
            @error=${e=>{let t=e.target.parentElement;t&&(t.style.display=`none`)}}
          />
        </div>
        ${a.length>0?m`<div
              data-test-lobby-settings
              class="flex flex-wrap content-start gap-1 min-w-0 flex-1 uppercase"
            >
              ${a}
            </div>`:m``}
      </div>
      ${this.renderDisabledUnits()} ${this.renderHostCheats()}
    `}renderDisabledUnits(){if(!this.gameConfig||!this.gameConfig.disabledUnits||this.gameConfig.disabledUnits.length===0)return m``;let e={City:`unit_type.city`,Port:`unit_type.port`,"Defense Post":`unit_type.defense_post`,"SAM Launcher":`unit_type.sam_launcher`,"Missile Silo":`unit_type.missile_silo`,Warship:`unit_type.warship`,Factory:`unit_type.factory`,"Atom Bomb":`unit_type.atom_bomb`,"Ballistic Missile":`unit_type.ballistic_missile`,"Hydrogen Bomb":`unit_type.hydrogen_bomb`,MIRV:`unit_type.mirv`,"Oil Field":`unit_type.oil_field`,"Gas Field":`unit_type.gas_field`,"Uranium Plant":`unit_type.uranium_plant`,"Trade Ship":`player_stats_table.unit.trade`,Transport:`player_stats_table.unit.trans`,"MIRV Warhead":`player_stats_table.unit.mirvw`};return m`
      <div
        class="mt-4 mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg"
      >
        <div
          class="text-xs font-bold text-red-400 uppercase tracking-widest mb-2"
        >
          ${v(`private_lobby.disabled_units`)}
        </div>
        <div class="flex flex-wrap gap-2">
          ${this.gameConfig.disabledUnits.map(t=>{let n=e[t];return m`
              <span
                class="px-2 py-1 bg-red-500/20 text-red-200 text-xs rounded font-bold border border-red-500/30"
              >
                ${n?v(n):t}
              </span>
            `})}
        </div>
      </div>
    `}renderHostCheats(){if(!this.gameConfig?.hostCheats)return m``;let e=this.gameConfig.hostCheats,t=[];return e.infiniteGold&&t.push(m`<span
          class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded font-bold border border-yellow-500/30"
        >
          ${v(`game_settings.infinite_gold`)}
        </span>`),e.infiniteTroops&&t.push(m`<span
          class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded font-bold border border-yellow-500/30"
        >
          ${v(`game_settings.infinite_troops`)}
        </span>`),e.goldMultiplier&&t.push(m`<span
          class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded font-bold border border-yellow-500/30"
        >
          ${v(`game_settings.gold_multiplier`)}:
          x${e.goldMultiplier}
        </span>`),e.startingGold&&t.push(m`<span
          class="px-2 py-1 bg-yellow-500/20 text-yellow-200 text-xs rounded font-bold border border-yellow-500/30"
        >
          ${v(`private_lobby.starting_gold`)}:
          ${parseFloat((e.startingGold/1e6).toPrecision(12))}M
        </span>`),t.length===0?m``:m`
      <div
        class="mt-4 mb-6 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
      >
        <div
          class="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2"
        >
          ${v(`private_lobby.host_cheats`)}
        </div>
        <div class="flex flex-wrap gap-2">${t}</div>
      </div>
    `}updateFromLobby(e){this.players=`clients`in e?e.clients??[]:[],`serverTime`in e&&typeof e.serverTime==`number`&&(this.serverTimeOffset=p(e.serverTime));let t=e.startsAt??null;if(this.lobbyStartAt===null&&t!==null&&i(this.serverTimeOffset)<t&&(this.joinTimeoutArmed=!0),this.lobbyStartAt=t,this.syncCountdownTimer(),e.gameConfig){let t=this.gameConfig?.gameMap!==e.gameConfig.gameMap;this.gameConfig=e.gameConfig,t&&this.loadNationCount()}this.lobbyCreatorClientID=`lobbyCreatorClientID`in e?e.lobbyCreatorClientID??null:null}startLobbyUpdates(){if(this.stopLobbyUpdates(),!this.eventBus){console.warn(`JoinLobbyModal: eventBus not set, cannot subscribe to lobby updates`);return}this.eventBus.on(g,this.handleLobbyInfo)}stopLobbyUpdates(){this.eventBus?.off(g,this.handleLobbyInfo)}syncCountdownTimer(){if(this.lobbyStartAt===null){this.clearCountdownTimer();return}this.countdownTimerId===null&&(this.countdownTimerId=window.setInterval(()=>{this.checkForJoinTimeout(),this.requestUpdate()},1e3))}clearCountdownTimer(){this.countdownTimerId!==null&&(clearInterval(this.countdownTimerId),this.countdownTimerId=null)}checkForJoinTimeout(){this.handledJoinTimeout||!this.joinTimeoutArmed||!this.isConnecting||this.lobbyStartAt===null||!this.isModalOpen||i(this.serverTimeOffset)<this.lobbyStartAt||(this.handledJoinTimeout=!0,window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:v(`public_lobby.join_timeout`),color:`red`,duration:3500}})),this.closeAndLeave())}async loadNationCount(){if(!this.gameConfig){this.nationCount=0;return}let e=this.gameConfig.gameMap;try{let t=await w.getMapData(e).manifest();this.gameConfig?.gameMap===e&&(this.nationCount=t.nations.length)}catch(t){console.warn(`Failed to load nation count`,t),this.gameConfig?.gameMap===e&&(this.nationCount=0)}}isValidLobbyId(e){return n.test(e)}normalizeLobbyId(e){let t=e.trim();if(!t)return null;let n=this.extractLobbyIdFromUrl(t).trim();return this.isValidLobbyId(n)?n:null}sanitizeForLog(e){return e.replace(/[\r\n]/g,``)}extractLobbyIdFromUrl(e){if(!e.startsWith(`http`))return e;try{let t=new URL(e).pathname.match(/game\/([^/]+)/)?.[1];return t&&n.test(t)?t:e}catch(t){return console.warn(`Failed to parse lobby URL`,t),e}}setLobbyId(e){this.lobbyIdInput&&(this.lobbyIdInput.value=this.extractLobbyIdFromUrl(e))}handleChange(e){let t=e.target.value.trim();this.setLobbyId(t)}async pasteFromClipboard(){try{let e=await navigator.clipboard.readText();this.setLobbyId(e)}catch(e){console.warn(`Failed to read clipboard contents: `,e)}}joinLobbyFromInput(e){return e.preventDefault(),this.enterLobbyFromInput(!1)}spectateLobbyFromInput(){return this.enterLobbyFromInput(!0)}async enterLobbyFromInput(e){let t=this.normalizeLobbyId(this.lobbyIdInput.value);if(!t){this.showMessage(v(`private_lobby.not_found`),`red`);return}this.lobbyIdInput.value=t,console.log(`Joining lobby with ID: ${this.sanitizeForLog(t)}`),this.startTrackingLobby(t);try{if(await this.checkActiveLobby(t,e))return;switch(await this.checkArchivedGame(t)){case`success`:return;case`redirected`:return;case`not_found`:this.resetTrackingState(),this.showMessage(v(`private_lobby.not_found`),`red`);return;case`version_mismatch`:this.resetTrackingState(),this.showMessage(v(`private_lobby.version_mismatch`),`red`);return;case`error`:this.resetTrackingState(),this.showMessage(v(`private_lobby.error`),`red`);return}}catch(e){console.warn(`Error checking lobby existence:`,e),this.resetTrackingState(),this.showMessage(v(`private_lobby.error`),`red`)}}showMessage(e,t=`green`){window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:e,duration:3e3,color:t}}))}async checkActiveLobby(e,t=!1){if(await C(),E(e,t))return!0;let n=`${d.gameHttpBase(e)}/${d.gameWorkerPath(e)}/api/game/${e}/exists`,r=await fetch(n,{method:`GET`,headers:{"Content-Type":`application/json`}});if(!r.ok||!(r.headers.get(`content-type`)??``).includes(`application/json`))return!1;let i;try{i=await r.json()}catch(e){return console.warn(`Failed to parse active lobby response`,e),!1}return i.exists?(this.showMessage(v(t?`private_lobby.spectating`:`private_lobby.joined_waiting`)),this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,source:`private`,spectator:t},bubbles:!0,composed:!0})),!0):!1}async checkArchivedGame(e){let t=await fetch(`${T()}/game/${e}`,{method:`GET`,headers:{"Content-Type":`application/json`}});if(t.status===404)return`not_found`;if(t.status!==200)return`error`;let n=await t.json(),r=f.safeParse(n);if(!r.success)return`version_mismatch`;let i=d.gitCommit();if(i!==`DEV`&&r.data.gitCommit!==i){let t=this.sanitizeForLog(e);return console.warn(`Git commit hash mismatch for game ${t}`,n.details),await this.redirectToVersionedShell(e)?`redirected`:`version_mismatch`}return this.leaveLobbyOnClose=!1,A(e,r.data)?(this.close(),`success`):(this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:e,gameRecord:r.data,source:`private`},bubbles:!0,composed:!0})),`success`)}async redirectToVersionedShell(e){let t=await b(d.jwtAudience(),e,window.location.hostname);return t===null?!1:(window.location.href=t,!0)}};h([c(`#lobbyIdInput`)],R.prototype,`lobbyIdInput`,void 0),h([r({attribute:!1})],R.prototype,`eventBus`,void 0),h([o()],R.prototype,`players`,void 0),h([o()],R.prototype,`playerCount`,void 0),h([o()],R.prototype,`gameConfig`,void 0),h([o()],R.prototype,`currentLobbyId`,void 0),h([o()],R.prototype,`currentClientID`,void 0),h([o()],R.prototype,`nationCount`,void 0),h([o()],R.prototype,`lobbyStartAt`,void 0),h([o()],R.prototype,`serverTimeOffset`,void 0),h([o()],R.prototype,`isConnecting`,void 0),h([o()],R.prototype,`lobbyCreatorClientID`,void 0),h([o()],R.prototype,`hostedLobbies`,void 0),h([o()],R.prototype,`hostedLobbiesLoaded`,void 0),R=h([l(`join-lobby-modal`)],R);export{R as JoinLobbyModal};