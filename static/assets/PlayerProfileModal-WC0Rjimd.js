import{L as e,R as t}from"./UserSettings-BhVaDNmN.js";import{d as n,k as r,s as i,u as a,y as o}from"./Platform-CHHnD-iM.js";import{t as s}from"./AssetUrls-DSHI1MKX.js";import{$ as c,I as l,P as ee,Q as u,Z as te,dt as ne,et as d,l as re,lt as f,nt as ie,rt as p,s as m,st as h,t as g,tt as _,y as ae,z as v}from"./decorate-DDFJEDDP.js";import{J as oe,Q as se,T as y,_ as ce,g as le,nt as ue,w as de,xt as fe}from"./Api-BUc1dCNJ.js";import"./preload-helper-tkFyO0yo.js";import{A as pe,B as me,C as he,D as ge,E as _e,F as ve,G as ye,H as be,I as xe,K as Se,L as Ce,N as b,O as we,P as Te,R as Ee,S as De,T as Oe,U as ke,V as Ae,W as je,Wt as Me,_t as Ne,gt as x,ht as Pe,j as Fe,k as Ie,mt as S,w as Le,x as Re,z as ze}from"./index-D0upx8we.js";import"./CopyButton-HFPoFVtq.js";import{t as C}from"./Format-Dhp90E0J.js";import"./CapIcon-XQD73Ap1.js";import"./PlutoniumIcon-D5XpOZti.js";import{t as Be}from"./UsernameText-BPPao8Bw.js";import"./LeaderboardTribeTable-C9h03FBU.js";import{n as Ve,r as He,t as w}from"./GameStatsModal-C5nhe8hc.js";import{t as Ue}from"./SignedOutNotice-BgaLDzJ8.js";import"./LeaderboardModal-Bd-xDnhT.js";function We(e){return e.mode===a.FFA||e.mode===void 0&&(e.playerTeams===null||e.playerTeams===void 0)}function Ge(e){if(e.rankedType&&e.rankedType!==`unranked`)return v(`clan_modal.history_type_ranked`,{ranked:e.rankedType});if(We(e))return v(`clan_modal.history_type_ffa`);let t=e.playerTeams;return t===`Humans Vs Nations`?v(`clan_modal.history_type_hvn`):t===`Duos`||t===`Trios`||t===`Quads`?v(`clan_modal.history_type_${t.toLowerCase()}`):t&&/^\d+$/.test(t)?v(`clan_modal.history_type_n_teams`,{count:Number(t)}):v(`clan_modal.history_type_team`)}var Ke=s(`images/LeaderboardIconRegularWhite.svg`),qe=s(`images/ReplayRegularIconWhite.svg`),Je=s(`images/LinkIconWhite.svg`),Ye=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`public`,labelKey:`account_modal.games_type_public`},{key:`private`,labelKey:`account_modal.games_type_private`},{key:`singleplayer`,labelKey:`account_modal.games_type_singleplayer`}],Xe=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],T=class extends _{constructor(...e){super(...e),this.publicId=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.typeFilter=`all`,this.modeFilter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.syncToPublicId()}syncToPublicId(){this.cachedState&&this.cachedState.publicId===this.publicId?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.typeFilter=this.cachedState.typeFilter,this.modeFilter=this.cachedState.modeFilter,this.appendFailed=!1,this.loadState=`ok`):this.publicId&&(this.typeFilter=`all`,this.modeFilter=`all`,this.reload())}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}willUpdate(e){let t=e.get(`publicId`);e.has(`publicId`)&&t!==void 0&&t!==this.publicId&&this.syncToPublicId()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setTypeFilter(e){e!==this.typeFilter&&(this.typeFilter=e,this.reload())}setModeFilter(e){e!==this.modeFilter&&(this.modeFilter=e,this.reload())}async load({append:e}){if(!this.publicId)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=e?this.nextCursor??void 0:void 0,r=await le(this.publicId,{filter:this.modeFilter===`all`?void 0:this.modeFilter,type:this.typeFilter===`all`?void 0:this.typeFilter,cursor:n});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in r){e?this.appendFailed=!0:(this.loadState=`failed`,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...r.results]:r.results,this.nextCursor=r.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{publicId:this.publicId,typeFilter:this.typeFilter,modeFilter:this.modeFilter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}watchReplay(e){this.dispatchEvent(new CustomEvent(`view-game`,{detail:{gameId:e},bubbles:!0,composed:!0}))}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let t=`${f.shareOrigin()}${f.gamePath(e)}`;try{await void m(t),l(v(`common.copied`),`green`)}catch{l(v(`common.failed_copy`),`red`)}}render(){return h`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return h`
      <div class="space-y-2">
        ${this.renderFilterRow(Ye,this.typeFilter,e=>this.setTypeFilter(e))}
        ${this.renderFilterRow(Xe,this.modeFilter,e=>this.setModeFilter(e))}
      </div>
    `}renderFilterRow(e,t,n){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e.map(e=>{let r=t===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${r}
              @click=${()=>n(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${r?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${v(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?x():this.loadState===`failed`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${v(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${v(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=He(this.games),this.groupedFor=this.games),h`
      <div class="space-y-5">
        ${this.grouped.map(e=>h`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${Ve(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?h`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${v(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?h`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${v(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${v(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:h`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?x():``}
      </div>
    `}renderGameRow(e){let t=null;if(e.map)try{t=Me.getMapData(e.map).webpPath}catch{t=null}let n=e.map?ae(e.map)??e.map:null;return h`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${t?h`<div
              class="relative w-full aspect-[30/15] overflow-hidden bg-surface"
            >
              <img
                src=${t}
                alt=${n??``}
                draggable="false"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              ${n?h`<div
                    class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                  >
                    ${n}
                  </div>`:``}
              <div class="absolute top-2 left-2">
                ${this.renderResultBadge(e)}
              </div>
              <div
                class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
              >
                ${w(e.start)}
              </div>
            </div>`:``}
        <div
          class=${t?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${v(`game_list.stats`)}
              aria-label=${v(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ke}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${v(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${v(`common.click_to_copy`)}
              aria-label=${v(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Je}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${v(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${v(`clan_modal.history_watch_replay`)}
              aria-label=${v(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${qe}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${v(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center text-center border-b border-white/5"
        >
          ${this.renderField(v(`account_modal.games_clan_tag`),e.clanTag??`—`)}
          ${this.renderField(v(`account_modal.username_title`),e.username)}
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(v(`clan_modal.history_game_type`),Ge(e))}
          ${t?``:this.renderField(v(`clan_modal.history_map`),n??`—`)}
          ${this.renderField(v(`clan_modal.history_players`),e.totalPlayers===null?`—`:`${e.totalPlayers}`)}
          ${this.renderField(v(`clan_modal.history_duration`),ee(e.durationSeconds))}
        </div>
      </div>
    `}renderField(e,t){return h`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e){let t,n;return e.result===`victory`?(t=v(`clan_modal.history_result_victory`),n=`text-white bg-green-600 border-green-500`):e.result===`defeat`?(t=v(`clan_modal.history_result_defeat`),n=`text-white bg-red-600 border-red-500`):(t=v(`account_modal.games_result_incomplete`),n=`text-white bg-gray-500 border-gray-400`),h`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${n}"
      >${t}</span
    >`}};g([c()],T.prototype,`publicId`,void 0),g([c({type:Object})],T.prototype,`cachedState`,void 0),g([u()],T.prototype,`games`,void 0),g([u()],T.prototype,`nextCursor`,void 0),g([u()],T.prototype,`loading`,void 0),g([u()],T.prototype,`loadingMore`,void 0),g([u()],T.prototype,`loadState`,void 0),g([u()],T.prototype,`appendFailed`,void 0),g([u()],T.prototype,`typeFilter`,void 0),g([u()],T.prototype,`modeFilter`,void 0),T=g([d(`player-game-history-view`)],T);var Ze={city:1,port:2,fact:3,defp:4,silo:5,saml:6,oil:7,gas:8,uran:9,radar:10,mfac:11,arsn:12,ostg:13,gstg:14},Qe=Object.keys(Ze).sort((e,t)=>Ze[e]-Ze[t]),$e={city:`unit_type.city`,defp:`unit_type.defense_post`,fact:`unit_type.factory`,port:`unit_type.port`,saml:`unit_type.sam_launcher`,silo:`unit_type.missile_silo`,oil:`unit_type.oil_field`,gas:`unit_type.gas_field`,uran:`unit_type.uranium_plant`,radar:`unit_type.radar`,mfac:`unit_type.missile_factory`,arsn:`unit_type.arsenal`,ostg:`unit_type.oil_storage`,gstg:`unit_type.gas_storage`,wshp:`unit_type.warship`,abomb:`unit_type.atom_bomb`,ballistic:`unit_type.ballistic_missile`,hbomb:`unit_type.hydrogen_bomb`,mirv:`unit_type.mirv`,mirvw:`player_stats_table.unit.mirvw`,trade:`player_stats_table.unit.trade`,trans:`player_stats_table.unit.trans`};function E(e,t,n,r){return h`
    <div class="w-full">
      <div
        class="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2"
      >
        ${v(e)}
      </div>
      <div class="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
        <table class="w-full table-fixed text-sm text-gray-300">
          <thead>
            <tr class="bg-white/5">
              ${r===void 0?p:h`<th
                    class="px-4 py-2 text-left font-semibold text-gray-400"
                  >
                    ${v(r)}
                  </th>`}
              ${t.map(e=>h`
                  <th class="px-3 py-2 text-center font-semibold text-gray-400">
                    ${v(e)}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${n.map(e=>h`
                <tr class="hover:bg-white/5 transition-colors">
                  ${e.label===void 0?p:h`<td
                        class="px-4 py-2 text-left font-medium text-white/80"
                      >
                        ${v(e.label)}
                      </td>`}
                  ${e.values.map(e=>h`
                      <td class="px-3 py-2 text-center text-white/60">
                        ${C(e)}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </div>
  `}var et=[`player_stats_table.built`,`player_stats_table.destroyed`,`player_stats_table.captured`,`player_stats_table.lost`],tt=class extends _{createRenderRoot(){return this}render(){let n=this.stats,r=(e,t)=>e?.[t]??0n,i=(e,t)=>Array.from({length:t},(t,n)=>r(e,n));return h`
      <div class="grid grid-cols-1 gap-6 w-full">
        ${E(`player_stats_table.building_stats`,et,Qe.map(e=>({label:$e[e],values:i(n?.units?.[e],4)})),`player_stats_table.building`)}
        ${E(`player_stats_table.warship_stats`,et,[{values:i(n?.units?.wshp,4)}])}
        ${E(`player_stats_table.ship_arrivals`,[`player_stats_table.sent`,`player_stats_table.arrived`,`player_stats_table.captured`,`player_stats_table.destroyed`],e.map(e=>({label:$e[e],values:i(n?.boats?.[e],4)})),`player_stats_table.ship_type`)}
        <!-- Launched and Landed count missiles this player fired; Intercepted
        counts incoming missiles their SAMs shot down (bombIntercept credits
        the SAM owner), so the last column is defensive. -->
        ${E(`player_stats_table.nuke_stats`,[`player_stats_table.launched`,`player_stats_table.landed`,`player_stats_table.intercepted`],t.map(e=>({label:$e[e],values:i(n?.bombs?.[e],3)})),`player_stats_table.weapon`)}
        ${E(`player_stats_table.attack_stats`,[`player_stats_table.sent`,`player_stats_table.incoming`,`player_stats_table.cancelled`],[{values:i(n?.attacks,3)}])}
        ${E(`player_stats_table.gold_stats`,[`player_stats_table.workers`,`player_stats_table.war`,`player_stats_table.trade`,`player_stats_table.piracy`,`player_stats_table.trains`,`player_stats_table.trains_external`],[{values:i(n?.gold,6)}])}
        ${E(`player_stats_table.diplomacy_stats`,[`player_stats_table.betrayals`],[{values:[n?.betrayals??0n]}])}
      </div>
    `}};g([c({type:Object})],tt.prototype,`stats`,void 0),tt=g([d(`player-stats-table`)],tt);var nt={cities:`player_stats_tree.stats_cities_per_game`,ports:`player_stats_tree.stats_ports_per_game`,factories:`player_stats_tree.stats_factories_per_game`,defensePosts:`player_stats_tree.stats_defense_posts_per_game`,transports:`player_stats_tree.stats_transports_sent_per_game`,landings:`player_stats_tree.stats_transports_landed_per_game`,tradeArrived:`player_stats_tree.stats_trade_arrived_per_game`,tradeCaptured:`player_stats_tree.stats_trade_captured_per_game`,outgoing:`player_stats_tree.stats_troops_sent_per_game`,incoming:`player_stats_tree.stats_troops_incoming_per_game`,nukes:`player_stats_tree.stats_nukes_launched_per_game`,warships:`player_stats_tree.stats_warships_built_per_game`,tradeGold:`player_stats_tree.stats_trade_gold_per_game`,piracyGold:`player_stats_tree.stats_piracy_gold_per_game`,trainGold:`player_stats_tree.stats_train_gold_per_game`,othersTrainGold:`player_stats_tree.stats_others_train_gold_per_game`},rt={cities:`player_stats_table.built`,ports:`player_stats_table.built`,factories:`player_stats_table.built`,defensePosts:`player_stats_table.built`,transports:`player_stats_tree.stats_transports_sent_short`,landings:`player_stats_tree.stats_transports_landed_short`,tradeArrived:`player_stats_tree.stats_trade_arrived_short`,tradeCaptured:`player_stats_tree.stats_trade_captured_short`,outgoing:`player_stats_tree.stats_outgoing_short`,incoming:`player_stats_table.incoming`,nukes:`player_stats_table.launched`,warships:`player_stats_table.built`,tradeGold:`player_stats_table.trade`,piracyGold:`player_stats_table.piracy`,trainGold:`player_stats_table.trains`,othersTrainGold:`player_stats_table.trains_external`},it=[{heading:`player_stats_tree.stats_group_buildings`,keys:[`cities`,`ports`,`factories`,`defensePosts`]},{heading:`player_stats_tree.stats_group_naval`,keys:[`transports`,`landings`,`tradeArrived`,`tradeCaptured`]},{heading:`player_stats_tree.stats_group_combat`,keys:[`outgoing`,`incoming`,`nukes`,`warships`]},{heading:`player_stats_tree.stats_group_gold`,keys:[`tradeGold`,`piracyGold`,`trainGold`,`othersTrainGold`]}],at={city:`images/CityIconWhite.svg`,port:`images/PortIcon.svg`,factory:`images/FactoryIconWhite.svg`,defensePost:`images/ShieldIconWhite.svg`,transport:`images/BoatIconWhite.svg`,tradeShip:`images/TradeShipIconWhite.svg`,troop:`images/SoldierIcon.svg`,nuke:`images/NukeIconWhite.svg`,warship:`images/DestroyerIconWhite.svg`,gold:`images/GoldCoinIcon.svg`},ot=new Set([`troop`]),st=`ml-1 inline-block h-[1em] w-[1em] object-contain`,ct={city:1.1,port:1.11,factory:1.1,warship:1.1,tradeShip:.5,gold:.9,nuke:.9},lt={cities:`city`,ports:`port`,factories:`factory`,defensePosts:`defensePost`,transports:`transport`,landings:`transport`,tradeArrived:`tradeShip`,tradeCaptured:`tradeShip`,outgoing:`troop`,incoming:`troop`,nukes:`nuke`,warships:`warship`,tradeGold:`gold`,piracyGold:`gold`,trainGold:`gold`,othersTrainGold:`gold`},D=`text-emerald-300 border-emerald-400/20`,O=`text-blue-300 border-blue-400/20`,k=`text-rose-300 border-rose-400/20`,A=`text-amber-300 border-amber-400/20`,ut={cities:D,ports:D,factories:D,defensePosts:D,transports:O,landings:O,tradeArrived:O,tradeCaptured:O,outgoing:k,incoming:k,nukes:k,warships:k,tradeGold:A,piracyGold:A,trainGold:A,othersTrainGold:A};function j(e,t){if(t<=0n)return`—`;let n=Number(e)/Number(t);return n>=1e3?C(n):n>=10?Math.round(n).toString():n.toFixed(1)}function dt(e){let t=e.total,n=e.stats,r=n?.attacks?.[0]??0n,i=n?.attacks?.[1]??0n,a=n?.gold?.[2]??0n,o=n?.gold?.[3]??0n,s=n?.gold?.[4]??0n,c=n?.gold?.[5]??0n,l=n?.units?.city?.[0]??0n,ee=n?.units?.port?.[0]??0n,u=n?.units?.fact?.[0]??0n,te=n?.units?.defp?.[0]??0n,ne=n?.units?.wshp?.[0]??0n,d=(n?.bombs?.abomb?.[0]??0n)+(n?.bombs?.hbomb?.[0]??0n)+(n?.bombs?.mirv?.[0]??0n),re=n?.boats?.trans?.[0]??0n,f=n?.boats?.trans?.[1]??0n,ie=n?.boats?.trade?.[1]??0n,p=n?.boats?.trade?.[2]??0n,m=e.recentGames??[],h=e.recent?.games??m.length,g=e.recent?.wins??m.filter(e=>e.won).length;return{winRate:t>0n?`${(Number(e.wins)/Number(t)*100).toFixed(1)}%`:`—`,recentWinRate:h>0?`${(g/h*100).toFixed(1)}%`:`—`,played:C(t),wins:C(e.wins),losses:C(e.losses),metrics:[{key:`cities`,value:j(l,t)},{key:`ports`,value:j(ee,t)},{key:`factories`,value:j(u,t)},{key:`defensePosts`,value:j(te,t)},{key:`transports`,value:j(re,t)},{key:`landings`,value:j(f,t)},{key:`tradeArrived`,value:j(ie,t)},{key:`tradeCaptured`,value:j(p,t)},{key:`outgoing`,value:j(r,t)},{key:`incoming`,value:j(i,t)},{key:`nukes`,value:j(d,t)},{key:`warships`,value:j(ne,t)},{key:`tradeGold`,value:j(a,t)},{key:`piracyGold`,value:j(o,t)},{key:`trainGold`,value:j(s,t)},{key:`othersTrainGold`,value:j(c,t)}]}}var ft=class extends _{createRenderRoot(){return this}renderMetric(e,t){let n=rt[e],r=v(nt[e]),i=lt[e],a=`transform:scale(${ct[i]??1})${ot.has(i)?`;filter:invert(1)`:``}`;return h`
      <div
        data-stat=${e}
        title=${r}
        class="min-w-0 rounded-xl border bg-white/5 px-3 py-3 text-center ${ut[e]}"
      >
        <div
          data-label
          aria-hidden="true"
          class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
        >
          ${v(n)}
        </div>
        <span class="sr-only">${r}</span>
        <div
          class="mt-1 truncate text-2xl font-black leading-none tabular-nums"
        >
          ${t}<img
            data-unit
            src=${s(at[i])}
            style=${a}
            alt=""
            aria-hidden="true"
            class="${st} align-[-0.1em]"
          /><span data-per-game class="ml-1 text-xs font-semibold text-white/35"
            >${v(`player_stats_tree.stats_per_game_suffix`)}</span
          >
        </div>
      </div>
    `}render(){if(!this.leaf)return h``;let e=dt(this.leaf),t=new Map(e.metrics.map(e=>[e.key,e.value])),n=this.leaf.recent?.games??this.leaf.recentGames?.length??0,r=this.leaf.total>100n&&n>0,i=[{key:`played`,label:`player_stats_tree.stats_played`,value:e.played,tone:`text-blue-300`},{key:`victories`,label:`player_stats_tree.stats_victories`,value:e.wins,tone:`text-emerald-300`},{key:`losses`,label:`player_stats_tree.stats_losses`,value:e.losses,tone:`text-rose-300`}];return h`
      <section
        class="space-y-3"
        aria-label=${v(`player_stats_tree.stats_summary`)}
      >
        <div
          data-win-rate
          class="relative overflow-hidden rounded-xl border border-malibu-blue/25 bg-gradient-to-br from-malibu-blue/15 via-white/5 to-transparent px-4 py-3"
        >
          <div
            class="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-aquarius/10 blur-2xl"
          ></div>
          <div
            class="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,20rem)] sm:items-center"
          >
            <!-- Flex, not a 2-col grid: the halves of a grid would each take
            50% of this flexible column, so the two rates drift apart as the
            viewport widens. Flex sizes them to content and keeps the gap
            fixed. -->
            <div class="flex flex-wrap items-start gap-x-8 gap-y-3">
              <div>
                <div
                  class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                >
                  ${v(`player_stats_tree.stats_win_rate`)}
                </div>
                <div
                  class="mt-1 text-3xl font-black leading-none tabular-nums text-emerald-300"
                >
                  ${e.winRate}
                </div>
              </div>
              ${r?h`
                    <div data-last-100>
                      <div
                        class="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/60"
                      >
                        ${v(`player_stats_tree.stats_last_100`)}
                      </div>
                      <div
                        class="mt-1 text-3xl font-black leading-none tabular-nums text-cyan-300"
                      >
                        ${e.recentWinRate}
                      </div>
                    </div>
                  `:p}
            </div>
            <div
              data-record-group
              class="grid grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-black/20 shadow-inner shadow-black/20"
            >
              ${i.map((e,t)=>h`
                  <div
                    data-record-stat=${e.key}
                    class="min-w-0 px-2 py-3 text-center ${t===0?``:`border-l border-white/10`}"
                  >
                    <div
                      class="truncate text-[10px] font-bold uppercase tracking-wider text-blue-200/55"
                      title=${v(e.label)}
                    >
                      ${v(e.label)}
                    </div>
                    <div
                      class="mt-1 truncate text-xl font-black leading-none tabular-nums ${e.tone}"
                    >
                      ${e.value}
                    </div>
                  </div>
                `)}
            </div>
          </div>
        </div>

        <div class="space-y-3">
          ${it.map(e=>h`
              <div data-metric-group=${e.heading}>
                <div
                  class="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/45"
                >
                  ${v(e.heading)}
                </div>
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  ${e.keys.map(e=>this.renderMetric(e,t.get(e)??`—`))}
                </div>
              </div>
            `)}
        </div>
      </section>
    `}};g([c({attribute:!1})],ft.prototype,`leaf`,void 0),ft=g([d(`player-stats-summary`)],ft);var pt=new Set,mt=new Set([3]),M=`all`,ht=[n.Public,n.Private,`Ranked`,n.Singleplayer],N=class extends _{constructor(...e){super(...e),this.selectedType=M,this.selectedMode=M,this.selectedDifficulty=M,this.selectedRankedType=M}get typeNode(){if(!(this.selectedType===M||this.selectedType===`Ranked`))return this.statsTree?.[this.selectedType]}get availableTypes(){return this.statsTree?ht.filter(e=>e===`Ranked`?Object.keys(this.statsTree?.Ranked??{}).length>0:Object.keys(this.statsTree?.[e]??{}).length>0):[]}get availableModes(){return this.typeNode?se.filter(e=>this.typeNode?.[e]):[]}get availableRankedTypes(){return this.statsTree?.Ranked?Object.keys(this.statsTree.Ranked).filter(e=>Object.values(o).includes(e)):[]}get availableDifficulties(){if(!this.typeNode||this.selectedType===n.Public)return[];let e=this.selectedMode===M?this.availableModes:[this.selectedMode];return Object.values(i).filter(t=>e.some(e=>this.typeNode?.[e]?.[t]))}labelForMode(e){return e===a.FFA?v(`game_mode.ffa`):e===a.Team?v(`game_mode.teams`):v(`game_mode.hvn`)}labelForType(e){return e===M?v(`player_stats_tree.all`):e===`Ranked`?v(`player_stats_tree.ranked`):e===n.Public?v(`player_stats_tree.public`):e===n.Private?v(`player_stats_tree.private`):v(`player_stats_tree.solo`)}renderFilterRow(e){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${e}
      </div>
    `}renderFilterTab(e,t,n,r){return h`
      <button
        type="button"
        role="tab"
        aria-selected=${t}
        title=${r??p}
        @click=${n}
        class="grow basis-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
      >
        ${e}
      </button>
    `}labelForRankedType(e){switch(e){case o.OneVOne:return v(`player_stats_tree.ranked_1v1`);case o.TwoVTwo:return v(`player_stats_tree.ranked_2v2`)}}createRenderRoot(){return this}getSelectedLeaf(){let e;if(e=this.selectedType===M?this.mergeLeaves(this.availableTypes.flatMap(e=>e===`Ranked`?this.getRankedLeaves(M):this.getGameTypeLeaves(e,M,M))):this.selectedType===`Ranked`?this.mergeLeaves(this.getRankedLeaves(this.selectedRankedType)):this.mergeLeaves(this.getGameTypeLeaves(this.selectedType,this.selectedMode,this.selectedType===n.Public?M:this.selectedDifficulty)),!e)return null;let t=this.getSelectedRecentStats();return t?{...e,recent:t}:e}getSelectedRecentStats(){let e=this.statsTree?.recent;if(!e)return;if(this.selectedType===M)return e.all;if(this.selectedType===`Ranked`){let t=e.Ranked;return t?this.selectedRankedType===M?t.all:t[this.selectedRankedType]:void 0}let t=e[this.selectedType];if(!t)return;if(this.selectedMode===M)return this.selectedType===n.Public||this.selectedDifficulty===M?t.all:t[this.selectedDifficulty];let r=t[this.selectedMode];if(r)return this.selectedType===n.Public||this.selectedDifficulty===M?r.all:r[this.selectedDifficulty]}getGameTypeLeaves(e,t,n){let i=this.statsTree?.[e];return i?(t===M?se.filter(e=>i[e]):[t]).flatMap(e=>{let t=i[e];return t?(n===M?Object.keys(t).filter(r):[n]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}):[]}getRankedLeaves(e){let t=this.statsTree?.Ranked;return t?(e===M?this.availableRankedTypes:[e]).flatMap(e=>{let n=t[e];return n?[n]:[]}):[]}mergeLeaves(e){let t=this.reduceLeaves(e);if(t===null)return null;let n=e.length===1?e[0].recent:void 0;return n===void 0?t:{...t,recent:n}}reduceLeaves(e){return e.reduce((e,t)=>e?{wins:e.wins+t.wins,losses:e.losses+t.losses,total:e.total+t.total,stats:this.mergeStats(e.stats,t.stats),recentGames:this.mergeRecentGames(e.recentGames,t.recentGames)}:{wins:t.wins,losses:t.losses,total:t.total,stats:this.cloneStats(t.stats),recentGames:this.mergeRecentGames(void 0,t.recentGames)},null)}mergeRecentGames(e,t){if(!e&&!t)return;let n=new Map;for(let r of[...e??[],...t??[]])n.set(r.gameId,r);return[...n.values()].sort((e,t)=>e.gameId===t.gameId?0:e.gameId>t.gameId?-1:1).slice(0,100)}syncSelection(){let e=this.availableTypes;if(this.selectedType!==M&&!e.includes(this.selectedType)&&(this.selectedType=M),this.selectedType===M)return;if(this.selectedType===`Ranked`){let e=this.availableRankedTypes;this.selectedRankedType!==M&&!e.includes(this.selectedRankedType)&&(this.selectedRankedType=M);return}let t=this.availableModes;this.selectedMode!==M&&!t.includes(this.selectedMode)&&(this.selectedMode=M);let n=this.availableDifficulties;this.selectedDifficulty!==M&&!n.includes(this.selectedDifficulty)&&(this.selectedDifficulty=M)}willUpdate(e){e.has(`statsTree`)&&(this.selectedType=M,this.selectedMode=M,this.selectedDifficulty=M,this.selectedRankedType=M),(e.has(`statsTree`)||e.has(`selectedType`)||e.has(`selectedMode`)||e.has(`selectedDifficulty`)||e.has(`selectedRankedType`))&&this.syncSelection()}setGameType(e){this.selectedType!==e&&(this.selectedType=e,this.requestUpdate())}setMode(e){this.selectedMode!==e&&(this.selectedMode=e,this.requestUpdate())}setRankedType(e){this.selectedRankedType!==e&&(this.selectedRankedType=e,this.requestUpdate())}setDifficulty(e){this.selectedDifficulty!==e&&(this.selectedDifficulty=e,this.requestUpdate())}mergeStats(e,t){if(!(!e&&!t))return e?t?{attacks:this.mergeStatArrays(e.attacks,t.attacks,mt),betrayals:this.mergeStatValue(e.betrayals,t.betrayals),killedAt:this.mergeStatValue(e.killedAt,t.killedAt),conquests:this.mergeStatArrays(e.conquests,t.conquests),boats:this.mergeStatRecord(e.boats,t.boats),bombs:this.mergeStatRecord(e.bombs,t.bombs),gold:this.mergeStatArrays(e.gold,t.gold),units:this.mergeStatRecord(e.units,t.units)}:this.cloneStats(e):this.cloneStats(t)}mergeStatValue(e,t){if(!(e===void 0&&t===void 0))return(e??0n)+(t??0n)}mergeStatArrays(e,t,n=pt){if(!e&&!t)return;let r=Math.max(e?.length??0,t?.length??0),i=[];for(let a=0;a<r;a+=1){let r=e?.[a]??0n,o=t?.[a]??0n;i[a]=n.has(a)?r>o?r:o:r+o}return i}mergeStatRecord(e,t){if(!e&&!t)return;let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=this.mergeStatArrays(e?.[r],t?.[r]);i&&(n[r]=i)}),Object.keys(n).length?n:void 0}cloneStats(e){if(e)return{attacks:e.attacks?[...e.attacks]:void 0,betrayals:e.betrayals,killedAt:e.killedAt,conquests:e.conquests?[...e.conquests]:void 0,boats:e.boats?{...e.boats}:void 0,bombs:e.bombs?{...e.bombs}:void 0,gold:e.gold?[...e.gold]:void 0,units:e.units?{...e.units}:void 0}}render(){let e=this.availableTypes,t=this.availableModes,n=this.availableDifficulties,r=this.availableRankedTypes,i=this.getSelectedLeaf();return h`
      <div class="flex flex-col gap-4">
        <!-- Filters: a type row, then a context-dependent second row (ranked
             type / mode / difficulty), styled like the game-history tab. -->
        <div class="space-y-2">
          ${this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedType===M,()=>this.setGameType(M)),...e.map(e=>this.renderFilterTab(this.labelForType(e),this.selectedType===e,()=>this.setGameType(e)))])}
          ${this.selectedType===`Ranked`&&r.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedRankedType===M,()=>this.setRankedType(M)),...r.map(e=>this.renderFilterTab(this.labelForRankedType(e)??``,this.selectedRankedType===e,()=>this.setRankedType(e)))]):p}
          ${t.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedMode===M,()=>this.setMode(M),v(`player_stats_tree.mode`)),...t.map(e=>this.renderFilterTab(this.labelForMode(e),this.selectedMode===e,()=>this.setMode(e),v(`player_stats_tree.mode`)))]):p}
          ${n.length?this.renderFilterRow([this.renderFilterTab(this.labelForType(M),this.selectedDifficulty===M,()=>this.setDifficulty(M),v(`difficulty.difficulty`)),...n.map(e=>this.renderFilterTab(v(`difficulty.${e.toLowerCase()}`),this.selectedDifficulty===e,()=>this.setDifficulty(e),v(`difficulty.difficulty`)))]):p}
        </div>

        ${i?h`
              <div class="border-t border-white/10">
                <div class="py-3">
                  <player-stats-summary .leaf=${i}></player-stats-summary>
                </div>

                <div class="border-t border-white/10 pt-6">
                  <player-stats-table
                    .stats=${i?.stats??null}
                  ></player-stats-table>
                </div>
              </div>
            `:h`
              <div
                class="py-12 text-center text-white/30 italic border border-white/5 rounded-xl bg-white/5"
              >
                ${v(`player_stats_tree.no_stats`)}
              </div>
            `}
      </div>
    `}};g([c({type:Object})],N.prototype,`statsTree`,void 0),g([u()],N.prototype,`selectedType`,void 0),g([u()],N.prototype,`selectedMode`,void 0),g([u()],N.prototype,`selectedDifficulty`,void 0),g([u()],N.prototype,`selectedRankedType`,void 0),N=g([d(`player-stats-tree-view`)],N);function gt(e){if(e==null)return null;if(typeof e==`number`)return Number.isFinite(e)?e.toLocaleString():null;if(!e)return null;try{return BigInt(e).toLocaleString()}catch{return null}}var P=class extends _{constructor(...e){super(...e),this.hard=null,this.soft=null,this.compact=!1}createRenderRoot(){return this}render(){let e=gt(this.hard),t=gt(this.soft);if(e===null&&t===null)return h``;let n=this.compact,r=n?`flex items-center gap-3 text-xs`:`flex gap-3 justify-center`,i=n?`text-xs text-green-400/70`:`text-sm font-bold text-green-400`,a=n?`text-xs text-amber-600/80`:`text-sm font-bold text-amber-700`;return h`
      <div class="${r}">
        ${e===null?``:h`<div
              class="flex items-center gap-1.5"
              title=${v(`cosmetics.hard`)}
            >
              <plutonium-icon .size=${n?12:16}></plutonium-icon>
              <span class="${i}">${e}</span>
            </div>`}
        ${t===null?``:h`<div
              class="flex items-center gap-1.5"
              title=${v(`cosmetics.soft`)}
            >
              <cap-icon
                .size=${n?14:20}
                style=${n?``:`margin-top:3px`}
              ></cap-icon>
              <span class="${a}">${t}</span>
            </div>`}
      </div>
    `}};g([c({attribute:!1})],P.prototype,`hard`,void 0),g([c({attribute:!1})],P.prototype,`soft`,void 0),g([c({type:Boolean})],P.prototype,`compact`,void 0),P=g([d(`currency-display`)],P);var _t=`font-bold text-blue-300 truncate hover:underline`;function vt(e,t){e.dispatchEvent(new CustomEvent(`view-profile`,{detail:{publicId:t},bubbles:!0,composed:!0}))}function F(e,t,n){return h`<player-name
    .username=${t}
    .publicId=${n}
    .nameClass=${_t}
    .onNameClick=${()=>vt(e,n)}
  ></player-name>`}var yt={0:`pl-1.5`,1:`pl-5`,2:`pl-9`};function bt(e){switch(e){case`duos`:return v(`clan_modal.history_type_duos`);case`trios`:return v(`clan_modal.history_type_trios`);case`quads`:return v(`clan_modal.history_type_quads`);case`1v1`:return v(`clan_modal.stats_1v1`);default:return v(`clan_modal.stats_team_count`,{count:e})}}function xt(e){return e.wins>0||e.losses>0}var I=class extends _{constructor(...e){super(...e),this.expandedTotal=!1,this.expandedTeam=!1,this.expandedRanked=!1,this.toggleTotal=()=>{this.expandedTotal=!this.expandedTotal},this.toggleTeam=()=>{this.expandedTeam=!this.expandedTeam},this.toggleRanked=()=>{this.expandedRanked=!this.expandedRanked}}createRenderRoot(){return this}get teamSubKeys(){return Se.filter(e=>xt(this.stats[e]))}get rankedSubKeys(){return ye.filter(e=>xt(this.stats[e]))}setAllExpanded(e){this.expandedTotal=e,this.expandedTeam=e,this.expandedRanked=e}renderRow(e,t,n,r){let i=Nt(e,t.wins,t.losses),a=!!r&&!r.disabled,o=h`
      <span
        class="w-3 h-3 shrink-0 flex items-center justify-center text-white/40 transition-transform duration-150
          ${r?.expanded?`rotate-90`:``}"
        aria-hidden="true"
      >
        ${a?h`<svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-2.5 h-2.5"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>`:``}
      </span>
    `,s=`${yt[n]} pr-1.5 py-0.5`;if(!r||r.disabled)return h`
        <div class="flex items-center gap-2 ${s}">
          ${o}
          <div class="flex-1 min-w-0">${i}</div>
        </div>
      `;let c=v(r.expanded?`clan_modal.stats_collapse`:`clan_modal.stats_expand`);return h`
      <button
        type="button"
        class="w-full flex items-center gap-2 ${s} text-left rounded-md transition-colors cursor-pointer
          hover:bg-white/10 focus-visible:bg-white/10 focus:outline-none
          ${r.expanded?`bg-white/5`:``}"
        @click=${r.onToggle}
        title=${c}
        aria-expanded=${r.expanded}
      >
        ${o}
        <div class="flex-1 min-w-0">${i}</div>
      </button>
    `}render(){if(!this.stats)return h``;let e=this.teamSubKeys,t=this.rankedSubKeys;return h`
      <div class="space-y-0">
        ${this.renderRow(v(`clan_modal.stats_total`),this.stats.total,0,{expanded:this.expandedTotal,onToggle:this.toggleTotal,disabled:!1})}
        ${this.expandedTotal?h`
              ${this.renderRow(v(`clan_modal.history_type_ffa`),this.stats.ffa,1)}
              ${this.renderRow(v(`clan_modal.stats_team`),this.stats.team,1,{expanded:this.expandedTeam,onToggle:this.toggleTeam,disabled:e.length===0})}
              ${this.expandedTeam?h`${e.map(e=>this.renderRow(bt(e),this.stats[e],2))}`:``}
              ${this.renderRow(v(`clan_modal.stats_hvn`),this.stats.hvn,1)}
              ${this.renderRow(v(`clan_modal.stats_ranked`),this.stats.ranked,1,{expanded:this.expandedRanked,onToggle:this.toggleRanked,disabled:t.length===0})}
              ${this.expandedRanked?h`${t.map(e=>this.renderRow(bt(e),this.stats[e],2))}`:``}
            `:``}
      </div>
    `}};g([c({type:Object})],I.prototype,`stats`,void 0),g([u()],I.prototype,`expandedTotal`,void 0),g([u()],I.prototype,`expandedTeam`,void 0),g([u()],I.prototype,`expandedRanked`,void 0),I=g([d(`clan-stats-breakdown`)],I);function St(e){return e==="default"?`asc`:`desc`}var Ct=new Map;function L(e){let t=Ct.get(e);return t||(t=new Date(e).toLocaleDateString(),Ct.set(e,t)),t}function wt(e){return v(`clan_modal.role_${e}`)}function Tt(e){return e===`leader`?h`<span class="text-sm">👑</span>`:e===`officer`?h`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-4 h-4 text-purple-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>`:h`<svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-4 h-4 text-white/40"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>`}function Et(e,t){return h`
    <div class="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
      <div
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1"
      >
        ${e}
      </div>
      <div class="text-white font-bold text-sm truncate">${t}</div>
    </div>
  `}function Dt(e,t,n){return h`
    <div class="flex items-center gap-1">
      <button
        @click=${()=>n(1)}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;&lt;
      </button>
      <button
        @click=${()=>n(Math.max(1,e-1))}
        ?disabled=${e<=1}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &lt;
      </button>
      <span class="text-xs text-white/50 font-medium px-1">
        ${e} / ${t}
      </span>
      <button
        @click=${()=>n(Math.min(t,e+1))}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;
      </button>
      <button
        @click=${()=>n(t)}
        ?disabled=${e>=t}
        class="px-2 py-1 text-xs font-bold rounded-lg transition-all
          ${e>=t?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
      >
        &gt;&gt;
      </button>
    </div>
  `}function Ot(e,t,n){return h`
    <div
      class="flex items-center justify-center gap-1 pt-4 border-t border-white/10"
    >
      ${Dt(e,t,n)}
    </div>
  `}function R(e,t,n=`clan_modal.search_members_placeholder`,r){let i=h`
    <div class="relative w-full sm:flex-1 sm:min-w-0">
      <input
        type="text"
        .value=${t}
        @input=${e}
        class="w-full h-10 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
        placeholder="${v(n)}"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    </div>
  `;return r?h`
    <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
      ${i}${r}
    </div>
  `:h`<div class="mb-3">${i}</div>`}var kt=[{value:`default`,labelKey:`clan_modal.sort_default`},{value:`winsTotal`,labelKey:`clan_modal.sort_total_wins`},{value:`lossesTotal`,labelKey:`clan_modal.sort_total_losses`},{value:`winsFfa`,labelKey:`clan_modal.sort_ffa_wins`},{value:`lossesFfa`,labelKey:`clan_modal.sort_ffa_losses`},{value:`winsTeam`,labelKey:`clan_modal.sort_team_wins`},{value:`lossesTeam`,labelKey:`clan_modal.sort_team_losses`},{value:`winsHvn`,labelKey:`clan_modal.sort_hvn_wins`},{value:`lossesHvn`,labelKey:`clan_modal.sort_hvn_losses`},{value:`winsRanked`,labelKey:`clan_modal.sort_ranked_wins`},{value:`lossesRanked`,labelKey:`clan_modal.sort_ranked_losses`},{value:`wins1v1`,labelKey:`clan_modal.sort_1v1_wins`},{value:`losses1v1`,labelKey:`clan_modal.sort_1v1_losses`}];function At(e){return h`
    <span
      class="flex flex-col items-start justify-center gap-[3px] w-4 h-4"
      aria-hidden="true"
    >
      ${(e===`asc`?[`w-1.5`,`w-2.5`,`w-3.5`]:[`w-3.5`,`w-2.5`,`w-1.5`]).map(e=>h`<span class="${e} h-[2px] bg-current rounded-sm"></span>`)}
    </span>
  `}function jt(e,t,n,r){let i=v(t===`asc`?`clan_modal.sort_order_asc`:`clan_modal.sort_order_desc`);return h`
    <div class="flex items-center gap-2 shrink-0">
      <label
        class="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline"
      >
        ${v(`clan_modal.sort_by`)}
      </label>
      <select
        @change=${e=>n(e.target.value)}
        class="flex-1 sm:flex-none h-10 pl-3 pr-8 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1rem] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22rgba(255,255,255,0.5)%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22m6 9 6 6 6-6%22/></svg>')]"
      >
        ${kt.map(t=>h`
            <option
              value=${t.value}
              ?selected=${t.value===e}
              class="bg-neutral-900"
            >
              ${v(t.labelKey)}
            </option>
          `)}
      </select>
      <button
        type="button"
        @click=${r}
        title=${i}
        aria-label=${i}
        class="h-10 w-10 shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all"
      >
        ${At(t)}
      </button>
    </div>
  `}var Mt=[10,25,50];function z(e,t,n,r,i){let a=Math.ceil(t/n);return t<=Mt[0]?``:h`
    <div
      class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10"
    >
      <div class="flex items-center gap-2">
        <span
          class="text-[10px] font-bold text-white/40 uppercase tracking-wider"
        >
          ${v(`clan_modal.per_page`)}
        </span>
        ${Mt.map(e=>h`
            <button
              @click=${()=>i(e)}
              class="px-2 py-1 text-xs font-bold rounded-lg transition-all
                ${n===e?`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`:`text-white/40 hover:text-white/70 border border-transparent`}"
            >
              ${e}
            </button>
          `)}
      </div>
      ${Dt(e,a,r)}
    </div>
  `}function Nt(e,t,n){let r=t+n,i=r>0,a=i?Math.round(t/r*100):0,o=i?t/r*100:0,s=i?100-o:0,c=i?a>=50?`text-green-400`:`text-red-400/90`:`text-white/25`;return h`
    <div class="flex items-center gap-2">
      <span
        class="text-[10px] font-bold uppercase tracking-wider text-white/50 w-14 shrink-0 truncate"
        title=${e}
      >
        ${e}
      </span>
      <div
        class="relative flex-1 h-5 rounded-md overflow-hidden bg-white/5"
        role="img"
        aria-label="${t} wins, ${n} losses"
      >
        <div class="absolute inset-0 flex">
          ${t>0?h`<div
                class="bg-malibu-blue h-full"
                style="width:${o}%"
              ></div>`:``}
          ${n>0?h`<div
                class="bg-red-500 h-full"
                style="width:${s}%"
              ></div>`:``}
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-[11px] font-bold text-white tabular-nums whitespace-nowrap pointer-events-none"
        >
          <span>${t>0?`${t}W`:``}</span>
          <span>${n>0?`${n}L`:``}</span>
        </div>
      </div>
      <span
        class="text-xs font-bold shrink-0 tabular-nums w-9 text-right ${c}"
      >
        ${i?`${a}%`:`—`}
      </span>
    </div>
  `}function Pt(e){return e?h`
    <div class="mt-1.5">
      <clan-stats-breakdown .stats=${e}></clan-stats-breakdown>
    </div>
  `:``}function Ft(e,t,n){let r=e.publicId===t;return h`
    <div
      class="flex flex-col py-2.5 px-3 rounded-xl border
        ${r?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
            ${r?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
        >
          ${Tt(e.role)}
        </div>
        <div class="flex-1 min-w-0 flex flex-col">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              ${F(n,e.username,e.publicId)}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span
                class="text-white/30 text-[10px] text-right whitespace-nowrap"
                >${v(`clan_modal.joined_date`,{date:L(e.joinedAt)})}</span
              >
            </div>
          </div>
        </div>
      </div>
      ${Pt(e.stats)}
    </div>
  `}function B(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||e.role.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}function It(e,t){if(!t)return e;let n=t.toLowerCase();return e.filter(e=>e.publicId.toLowerCase().includes(n)||(e.username?.toLowerCase().includes(n)??!1))}var V=class extends _{constructor(...e){super(...e),this.clanTag=``,this.bans=[],this.bansTotal=0,this.bansPage=1,this.bansLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadBans(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadBans(e,t=!0){t?this.loading=!0:this.memberActionPending=!0;try{let t=await we(this.clanTag,e);if(!t){l(v(`clan_modal.error_failed`),`red`);return}if(t.results.length===0&&e>1){await this.loadBans(1,!1);return}this.bans=t.results,this.bansTotal=t.total,this.bansLimit=t.limit,this.bansPage=t.page}finally{t?this.loading=!1:this.memberActionPending=!1}}async handleUnban(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await be(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}this.bans=this.bans.filter(t=>t.publicId!==e),this.bansTotal--,l(v(`clan_modal.member_unbanned`),`green`),this.bans.length===0&&this.bansPage>1&&await this.loadBans(this.bansPage-1,!1)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return x();let e=Math.ceil(this.bansTotal/this.bansLimit),t=this.memberSearch?this.bans.filter(e=>{let t=this.memberSearch.toLowerCase();return e.publicId.toLowerCase().includes(t)||(e.username?.toLowerCase().includes(t)??!1)}):this.bans;return h`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${v(`clan_modal.banned_players_count`,{count:this.bansTotal})}
        </div>
        ${R(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_members_placeholder`)}
        ${t.length===0?h`<div
              class="flex flex-col items-center justify-center p-12 text-center"
            >
              <p class="text-white/40 text-sm">
                ${v(`clan_modal.no_bans`)}
              </p>
            </div>`:h`
              <div class="space-y-3">
                ${t.map(e=>h`
                    <div
                      class="bg-white/5 rounded-xl border border-white/10 p-4 space-y-2"
                    >
                      <div class="flex items-center gap-2">
                        <div
                          class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </div>
                        ${F(this,e.username,e.publicId)}
                        <span class="text-white/30 text-xs shrink-0"
                          >${v(`clan_modal.banned_by_label`)}</span
                        >
                        ${F(this,e.bannedByUsername,e.bannedBy)}
                        <span class="text-white/30 text-xs shrink-0"
                          >${L(e.createdAt)}</span
                        >
                        <div class="flex-1"></div>
                        <button
                          @click=${()=>this.handleUnban(e.publicId)}
                          ?disabled=${this.memberActionPending}
                          class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none shrink-0"
                        >
                          ${v(`clan_modal.unban`)}
                        </button>
                      </div>
                      ${e.reason?h`<div class="text-white/50 text-xs pl-10">
                            ${v(`clan_modal.ban_reason`,{reason:e.reason})}
                          </div>`:``}
                    </div>
                  `)}
              </div>
              ${e>1?Ot(this.bansPage,e,e=>this.loadBans(e,!1)):``}
            `}
      </div>
    `}};g([c()],V.prototype,`clanTag`,void 0),g([u()],V.prototype,`bans`,void 0),g([u()],V.prototype,`bansTotal`,void 0),g([u()],V.prototype,`bansPage`,void 0),g([u()],V.prototype,`bansLimit`,void 0),g([u()],V.prototype,`memberActionPending`,void 0),g([u()],V.prototype,`loading`,void 0),V=g([d(`clan-bans-view`)],V);var H=class extends _{constructor(...e){super(...e),this.pending=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display=`block`}onClick(){this.dispatchEvent(new CustomEvent(`clan-select`,{detail:{tag:this.clan.tag},bubbles:!0,composed:!0}))}renderBadge(){let e=`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0`;return this.clanRole?h`<span class="${e} ${this.clanRole===`leader`?`bg-amber-500/20 text-amber-400 border border-amber-500/30`:`bg-malibu-blue/15 text-aquarius border border-malibu-blue/30`}"
        >${wt(this.clanRole)}</span
      >`:this.pending?h`<span
        class="${e} bg-amber-500/20 text-amber-400 border border-amber-500/30"
        >${v(`clan_modal.request_pending`)}</span
      >`:this.clan.isOpen?h`<span
        class="${e} bg-green-500/20 text-green-400 border border-green-500/30"
        >${v(`clan_modal.open`)}</span
      >`:h`<span
      class="${e} bg-red-500/20 text-red-400 border border-red-500/30"
      >${v(`clan_modal.invite_only`)}</span
    >`}render(){let e=this.clan;return h`
      <button
        @click=${()=>this.onClick()}
        class="w-full text-left bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-xl bg-gradient-to-br ${e.isOpen?`from-malibu-blue/20 to-aquarius/20`:`from-amber-500/20 to-orange-500/20`} flex items-center justify-center border border-white/10 shrink-0"
          >
            <span class="text-white font-bold text-sm">${e.tag}</span>
          </div>
          <div class="flex-1 min-w-0">
            <span class="text-white font-bold truncate block"
              >${e.name}</span
            >
            <div
              class="flex items-center flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-white/40"
            >
              <span
                >${v(`clan_modal.member_count`,{count:e.memberCount??0})}</span
              >
              <!-- Balances ride along on the clan payload — no extra request.
                   Renders nothing when the API reported neither. -->
              <currency-display
                compact
                .hard=${e.hardBalance??null}
                .soft=${e.softBalance??null}
              ></currency-display>
            </div>
          </div>
          ${this.renderBadge()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white/20 group-hover:text-white/50 transition-colors shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};g([c({type:Object})],H.prototype,`clan`,void 0),g([c()],H.prototype,`clanRole`,void 0),g([c({type:Boolean})],H.prototype,`pending`,void 0),H=g([d(`clan-card`)],H);var U=class extends _{constructor(...e){super(...e),this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedState=null,this.searchQuery=``,this.browseData=null,this.browsePage=1,this.loading=!1,this.errorMsg=``,this.searchDebounce=null,this.asyncGeneration=0}createRenderRoot(){return this}emitState(){this.dispatchEvent(new CustomEvent(`browse-updated`,{detail:{data:this.browseData,page:this.browsePage,query:this.searchQuery},bubbles:!0,composed:!0}))}async loadBrowse(){let e=++this.asyncGeneration;this.loading=!0,this.errorMsg=``;try{let t=await ve(this.searchQuery||void 0,this.browsePage);if(e!==this.asyncGeneration)return;if(t===!1)throw Error(`fetch failed`);this.browseData=t,this.emitState()}catch{if(e!==this.asyncGeneration)return;this.errorMsg=v(`clan_modal.error_loading`)}finally{e===this.asyncGeneration&&(this.loading=!1)}}onSearchInput(e){this.searchQuery=e.target.value,this.searchDebounce&&clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout(()=>{this.browsePage=1,this.loadBrowse()},400)}connectedCallback(){super.connectedCallback(),this.cachedState?.data?(this.browseData=this.cachedState.data,this.browsePage=this.cachedState.page,this.searchQuery=this.cachedState.query):this.loadBrowse()}disconnectedCallback(){this.searchDebounce&&clearTimeout(this.searchDebounce),super.disconnectedCallback()}render(){if(this.loading&&!this.browseData)return x();let e=this.browseData?Math.ceil(this.browseData.total/this.browseData.limit):0,t=new Set(this.myPendingRequests.map(e=>e.tag)),n=(this.browseData?.results??[]).filter(e=>!this.myClanRoles.has(e.tag));return h`
      <div class="space-y-4">
        <div class="relative">
          <input
            type="text"
            .value=${this.searchQuery}
            @input=${e=>this.onSearchInput(e)}
            class="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
            placeholder="${v(`clan_modal.search_placeholder`)}"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-white/30 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        ${this.errorMsg?h`<p class="text-red-400 text-sm text-center py-4">
              ${this.errorMsg}
            </p>`:``}

        <div class="space-y-3">
          ${n.length===0&&this.browseData?h`<p class="text-white/40 text-sm text-center py-8">
                ${v(`clan_modal.no_results`)}
              </p>`:n.map(e=>h`<clan-card
                    .clan=${e}
                    ?pending=${t.has(e.tag)}
                  ></clan-card>`)}
        </div>

        ${e>1?h`
              <div class="flex items-center justify-center gap-2 pt-2">
                <button
                  @click=${()=>{this.browsePage=Math.max(1,this.browsePage-1),this.loadBrowse()}}
                  ?disabled=${this.browsePage<=1}
                  class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage<=1?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                >
                  &lt;
                </button>
                <span class="text-xs text-white/50 font-medium">
                  ${this.browsePage} / ${e}
                </span>
                <button
                  @click=${()=>{this.browsePage=Math.min(e,this.browsePage+1),this.loadBrowse()}}
                  ?disabled=${this.browsePage>=e}
                  class="px-2 py-1 text-xs font-bold rounded-lg transition-all ${this.browsePage>=e?`text-white/20 cursor-not-allowed`:`text-white/60 hover:text-white hover:bg-white/10`}"
                >
                  &gt;
                </button>
              </div>
            `:``}
      </div>
    `}};g([c({type:Object})],U.prototype,`myClanRoles`,void 0),g([c({type:Array})],U.prototype,`myPendingRequests`,void 0),g([c({type:Object})],U.prototype,`cachedState`,void 0),g([u()],U.prototype,`searchQuery`,void 0),g([u()],U.prototype,`browseData`,void 0),g([u()],U.prototype,`browsePage`,void 0),g([u()],U.prototype,`loading`,void 0),g([u()],U.prototype,`errorMsg`,void 0),U=g([d(`clan-browse-view`)],U);function Lt(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID();let e=crypto.getRandomValues(new Uint8Array(16));return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function Rt(e){return BigInt(Math.trunc(e))}var W=class extends _{constructor(...e){super(...e),this.clanTag=``,this.currencyType=`soft`,this.amountInput=``,this.balances=null,this.submitting=!1,this.serverError=null,this.idempotencyKey=Lt(),this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal),this.loadBalances()}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(ie(h``,this.portal),this.portal.remove(),null)}async loadBalances(){let e=await de();this.isConnected&&(!e||!e.player.currency||(this.balances=e.player.currency))}currencyLabel(e=this.currencyType){return v(e===`hard`?`cosmetics.hard`:`cosmetics.soft`)}parsedAmount(){let e=this.amountInput.trim();if(!/^\d+$/.test(e))return null;let t=BigInt(e);return t>0n?t:null}exceedsBalance(e){return this.balances?e>Rt(this.balances[this.currencyType]):!1}validationError(){if(this.amountInput.trim()===``)return null;let e=this.parsedAmount();return e===null?v(`clan_modal.donate_invalid_amount`):this.exceedsBalance(e)?v(`clan_modal.donate_insufficient`,{currency:this.currencyLabel()}):null}canSubmit(){let e=this.parsedAmount();return!this.submitting&&e!==null&&!this.exceedsBalance(e)}selectCurrency(e){this.submitting||e===this.currencyType||(this.currencyType=e,this.serverError=null)}onAmountInput(e){this.amountInput=e.target.value,this.serverError=null}cancel(){this.submitting||this.dispatchEvent(new CustomEvent(`cancel`))}async submit(){let e=this.parsedAmount();if(!(!this.canSubmit()||e===null)){this.submitting=!0,this.serverError=null;try{let t=await ge(this.clanTag,this.currencyType,e.toString(),this.idempotencyKey);if(t!==!0){this.serverError=v(t.error,{currency:this.currencyLabel()});return}this.dispatchEvent(new CustomEvent(`donated`,{detail:{currencyType:this.currencyType,amount:e.toString()}}))}finally{this.submitting=!1}}}render(){return this.portal&&ie(this.renderOverlay(),this.portal),h``}renderCurrencyOption(e){let t=this.currencyType===e,n=this.balances?gt(this.balances[e]):null,r=e===`hard`?`bg-green-500/15 border-green-400/70 ring-2 ring-green-400/40 text-white`:`bg-amber-500/15 border-amber-400/70 ring-2 ring-amber-400/40 text-white`;return h`
      <button
        type="button"
        role="radio"
        aria-checked=${t}
        data-currency=${e}
        ?disabled=${this.submitting}
        @click=${()=>this.selectCurrency(e)}
        class="relative flex-1 flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl border transition-all ${t?r:`bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white`} disabled:opacity-50 disabled:pointer-events-none"
      >
        ${t?h`<span
              data-check
              class="absolute top-1.5 right-1.5 w-4 h-4 rounded-full ${e===`hard`?`bg-green-400`:`bg-amber-400`} text-black flex items-center justify-center"
            >
              <svg
                class="w-3 h-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>`:``}
        <span
          class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
        >
          ${e===`hard`?h`<plutonium-icon .size=${14}></plutonium-icon>`:h`<cap-icon .size=${16}></cap-icon>`}
          ${this.currencyLabel(e)}
        </span>
        <span class="text-[11px] text-white/50">
          ${n===null?`…`:v(`clan_modal.donate_your_balance`,{balance:n})}
        </span>
      </button>
    `}renderOverlay(){let e=this.currencyType===`hard`,t=this.validationError(),n=this.serverError??t,r=this.canSubmit();return h`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.cancel()}}
      >
        <div
          class="relative mx-4 w-full max-w-md p-6 rounded-2xl border ${e?`border-red-500/50`:`border-amber-500/50`} bg-surface shadow-2xl"
        >
          <h2 class="text-lg font-bold text-white mb-1">
            ${v(`clan_modal.donate_title`,{tag:this.clanTag})}
          </h2>
          <p class="text-white/50 text-xs mb-4">
            ${v(`clan_modal.donate_subtitle`)}
          </p>

          <div role="radiogroup" class="flex gap-2 mb-4">
            ${this.renderCurrencyOption(`soft`)}
            ${this.renderCurrencyOption(`hard`)}
          </div>

          <label
            class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
            for="clan-donate-amount"
            >${v(`clan_modal.donate_amount`)}</label
          >
          <input
            id="clan-donate-amount"
            type="text"
            inputmode="numeric"
            autocomplete="off"
            placeholder="0"
            .value=${this.amountInput}
            ?disabled=${this.submitting}
            @input=${e=>this.onAmountInput(e)}
            @keydown=${e=>{e.key===`Enter`&&this.submit()}}
            class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm disabled:opacity-50"
          />
          ${n?h`<p class="text-red-400 text-xs mt-2" role="alert">
                ${n}
              </p>`:``}

          <div
            class="mt-4 rounded-xl border p-3 text-xs ${e?`border-red-500/40 bg-red-500/10 text-red-300`:`border-amber-500/30 bg-amber-500/10 text-amber-300`}"
          >
            <p class="font-bold">
              ${v(`clan_modal.donate_irreversible`)}
            </p>
            ${e?h`<p class="mt-1">
                  ${v(`clan_modal.donate_irreversible_hard`)}
                </p>`:``}
          </div>

          <div class="flex gap-3 mt-5">
            <button
              type="button"
              @click=${()=>this.cancel()}
              ?disabled=${this.submitting}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              ${v(`common.cancel`)}
            </button>
            <button
              type="button"
              data-action="donate"
              @click=${()=>void this.submit()}
              ?disabled=${!r}
              class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl text-white transition-all disabled:opacity-50 disabled:pointer-events-none border-0 ${e?`bg-red-600 hover:bg-red-700`:`bg-amber-600 hover:bg-amber-700`}"
            >
              ${v(this.submitting?`clan_modal.donate_submitting`:`clan_modal.donate`)}
            </button>
          </div>
        </div>
      </div>
    `}};g([c()],W.prototype,`clanTag`,void 0),g([u()],W.prototype,`currencyType`,void 0),g([u()],W.prototype,`amountInput`,void 0),g([u()],W.prototype,`balances`,void 0),g([u()],W.prototype,`submitting`,void 0),g([u()],W.prototype,`serverError`,void 0),W=g([d(`clan-donate-dialog`)],W);var G=class extends _{constructor(...e){super(...e),this.clanTag=``,this.myPublicId=null,this.myClanRoles=new Map,this.myPendingRequests=[],this.cachedDetail=null,this.detailTab=`overview`,this.cachedClan=null,this.selectedClan=null,this.discordMeta=null,this.myRole=null,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.pendingRequestCount=0,this.loading=!1,this.actionPending=!1,this.allStatsExpanded=!1,this.membersLoadInFlight=!1,this.memberSearch=``,this.donateOpen=!1,this.memberSearchDebounce=null,this.memberLoadSeq=0,this.asyncGeneration=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.cachedDetail&&this.cachedDetail.tag===this.clanTag?this.restoreFromCache(this.cachedDetail):this.clanTag&&this.loadDetail()}restoreFromCache(e){this.selectedClan=this.cachedClan,this.members=e.members,this.membersTotal=e.membersTotal,this.pendingRequestCount=e.pendingRequestCount,this.memberPage=1;let t=this.myClanRoles.get(this.clanTag);this.myRole=t??null,this.discordMeta=null,this.cachedClan?.discordUrl&&this.loadDiscordMeta(this.cachedClan.discordUrl,this.clanTag,this.asyncGeneration)}async loadDiscordMeta(e,t,n){let r=await xe(e);n!==this.asyncGeneration||this.clanTag!==t||(this.discordMeta=r)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}updated(){this.allStatsExpanded&&this.querySelectorAll(`clan-stats-breakdown`).forEach(e=>e.setAllExpanded(!0))}async loadDetail(){let e=++this.asyncGeneration;this.memberLoadSeq++,this.loading=!0,this.myRole=null,this.pendingRequestCount=0,this.memberSearch=``;let t=this.detailTab===`members`&&this.myClanRoles.has(this.clanTag),n=Ie(this.clanTag);t&&this.loadInitialMembers();let r=await n;if(e===this.asyncGeneration){if(this.loading=!1,!r){l(v(`clan_modal.failed_to_load_clan`),`red`),this.dispatchEvent(new CustomEvent(`navigate-back`,{bubbles:!0,composed:!0}));return}this.selectedClan=r,this.discordMeta=null,r.discordUrl&&this.loadDiscordMeta(r.discordUrl,this.clanTag,e),this.memberPage=1,t||(this.members=[],this.membersTotal=0),this.myRole=this.myClanRoles.get(this.clanTag)??null,this.dispatchEvent(new CustomEvent(`detail-loaded`,{detail:{clan:r,myRole:this.myRole,members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}}async loadInitialMembers(){if(this.membersLoadInFlight||!this.clanTag||!this.myClanRoles.has(this.clanTag)||this.members.length>0)return;let e=this.clanTag;this.membersLoadInFlight=!0;try{let t=await b(e,1,this.membersPerPage,this.memberSort,this.memberOrder);if(e!==this.clanTag||!t)return;this.members=t.results,this.membersTotal=t.total,this.pendingRequestCount=t.pendingRequests??0,this.memberPage=1,this.dispatchEvent(new CustomEvent(`members-loaded`,{detail:{members:this.members,membersTotal:this.membersTotal,pendingRequestCount:this.pendingRequestCount},bubbles:!0,composed:!0}))}finally{this.membersLoadInFlight=!1}}willUpdate(e){(e.has(`detailTab`)||e.has(`selectedClan`))&&this.detailTab===`members`&&this.selectedClan&&this.members.length===0&&this.myClanRoles.has(this.clanTag)&&this.loadInitialMembers()}async loadMemberPage(e,t=this.memberSearch){if(!this.selectedClan)return;let n=++this.memberLoadSeq,r=t?await b(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await b(this.selectedClan.tag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)&&r){if(r.results.length===0&&e>1){await this.loadMemberPage(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan.memberCount!==r.total&&(this.selectedClan={...this.selectedClan,memberCount:r.total})}}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=St(e),this.loadMemberPage(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMemberPage(1)}async handleJoin(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await Ce(this.selectedClan.tag);if(`error`in e){e.error===`clan_modal.sign_in_for_clans`&&window.showPage?.(`page-account`),l(e.reason?v(e.error,{reason:e.reason}):v(e.error),`red`);return}y(),e.status===`joined`?(this.myRole=`member`,await this.loadMemberPage(1),this.dispatchEvent(new CustomEvent(`clan-joined`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0}))):(this.dispatchEvent(new CustomEvent(`request-sent`,{detail:{tag:this.selectedClan.tag,name:this.selectedClan.name},bubbles:!0,composed:!0})),l(v(`clan_modal.join_request_sent`),`green`))}finally{this.actionPending=!1}}}async handleLeave(){if(!(!this.selectedClan||this.actionPending)){this.actionPending=!0;try{let e=await ze(this.selectedClan.tag);if(e!==!0){l(v(e.error),`red`);return}y(),this.dispatchEvent(new CustomEvent(`clan-left`,{detail:{tag:this.selectedClan.tag},bubbles:!0,composed:!0})),l(v(`clan_modal.left_clan`),`green`)}finally{this.actionPending=!1}}}async handleDonated(e){this.donateOpen=!1;let t=this.selectedClan;if(!t)return;let{currencyType:n,amount:r}=e.detail;l(v(`clan_modal.donate_success`,{amount:BigInt(r).toLocaleString(),currency:v(n===`hard`?`cosmetics.hard`:`cosmetics.soft`),tag:t.tag}),`green`),y();let i=this.asyncGeneration,a=await Ie(t.tag);!a||i!==this.asyncGeneration||this.clanTag!==t.tag||(this.selectedClan=a,this.dispatchEvent(new CustomEvent(`clan-donated`,{detail:{clan:a},bubbles:!0,composed:!0})))}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMemberPage(1,t)},200))}render(){if(this.loading)return x();let e=this.selectedClan;if(!e)return``;let t=this.myRole!==null,n=this.myRole===`leader`,r=this.myRole===`officer`,i=n||r,a=this.myPendingRequests.some(t=>t.tag===e.tag);if(this.detailTab===`members`)return t?this.membersLoadInFlight&&this.members.length===0?x():h`
        <div class="space-y-6">
          ${i&&this.pendingRequestCount>0?this.renderRequestsButton():``}
          ${this.renderMembersList()}
        </div>
      `:h`
          <div
            class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
          >
            <p class="text-white/40 text-sm">
              ${v(`clan_modal.members_visible_to_members`)}
            </p>
          </div>
        `;let o=h`
      <div class="flex flex-wrap gap-3">
        ${this.renderActionButtons(t,n,r,a,e)}
      </div>
      ${this.donateOpen&&t?h`<clan-donate-dialog
            .clanTag=${e.tag}
            @donated=${e=>void this.handleDonated(e)}
            @cancel=${()=>this.donateOpen=!1}
          ></clan-donate-dialog>`:``}
    `;return e.discordUrl?h`
        <div class="space-y-4">
          <div class="grid gap-4 sm:grid-cols-5 items-start">
            <div class="sm:col-span-3 flex flex-col gap-4">
              ${this.renderDescriptionCard(e)}
              <div class="grid grid-cols-2 gap-4">
                ${this.renderStatTiles(e)}
              </div>
            </div>
            <div class="sm:col-span-2">
              ${this.renderDiscordCard(e.discordUrl)}
            </div>
          </div>
          ${o}
        </div>
      `:h`
      <div class="space-y-6">
        ${this.renderDescriptionCard(e)}
        <div class="grid grid-cols-2 gap-3">${this.renderStatTiles(e)}</div>
        ${o}
      </div>
    `}renderRequestsButton(){return h`
      <button
        @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-requests`,{bubbles:!0,composed:!0}))}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${v(`clan_modal.join_requests`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${v(`clan_modal.pending_requests_count`,{count:this.pendingRequestCount})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${this.pendingRequestCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}toggleAllStats(){this.allStatsExpanded=!this.allStatsExpanded;let e=this.allStatsExpanded;this.querySelectorAll(`clan-stats-breakdown`).forEach(t=>t.setAllExpanded(e))}renderMembersList(){let e=B(this.members,this.memberSearch),t=v(this.allStatsExpanded?`common.collapse_all`:`common.expand_all`);return h`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${v(`clan_modal.members`)}
          </h3>
          <button
            type="button"
            @click=${()=>this.toggleAllStats()}
            class="text-[10px] font-bold text-white/50 hover:text-white uppercase tracking-wider px-2 py-1 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
            title=${t}
            aria-pressed=${this.allStatsExpanded}
          >
            ${t}
          </button>
        </div>
        ${R(e=>this.onSearchInput(e),this.memberSearch,void 0,jt(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
        <div class="space-y-2">
          ${e.map(e=>Ft(e,this.myPublicId,this))}
        </div>
        ${z(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMemberPage(e),e=>{this.membersPerPage=e,this.loadMemberPage(1)})}
      </div>
    `}renderDescriptionCard(e){return h`
      <div class="bg-white/5 rounded-xl border border-white/10 p-5">
        <p class="text-white/70 text-sm">
          ${e.description||v(`clan_modal.no_description`)}
        </p>
      </div>
    `}renderStatTiles(e){return h`
      ${Et(v(`clan_modal.members`),`${e.memberCount??0}`)}
      ${Et(v(`clan_modal.status`),e.isOpen?v(`clan_modal.open`):v(`clan_modal.invite_only`))}
    `}renderDiscordCard(e){let t=this.discordMeta,n=t?.valid===!0,r=t?.serverName??v(`clan_modal.discord_default_name`),i=t?.valid===!1,a=n?t?.bannerUrl??null:null,o=n?t?.description??null:null,s=n&&(typeof t?.onlineCount==`number`||typeof t?.memberCount==`number`);return h`
      <div
        class="h-full flex flex-col rounded-xl border border-[#5865F2]/25 bg-[#5865F2]/10 overflow-hidden"
      >
        ${a?h`<div
              class="relative w-full aspect-video max-h-56 overflow-hidden"
            >
              <img src=${a} alt="" class="w-full h-full object-cover" />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              ></div>
            </div>`:``}
        <div class="p-5 flex flex-col flex-1">
          ${a?``:h`<div class="flex items-center gap-2 mb-4">
                <svg
                  class="w-5 h-5 text-[#5865F2]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                  />
                </svg>
                <h3
                  class="text-sm font-bold text-white/60 uppercase tracking-wider"
                >
                  ${v(`clan_modal.discord_section_title`)}
                </h3>
              </div>`}
          <div class="flex items-center gap-3.5">
            ${t?.iconUrl?h`<img
                  src=${t.iconUrl}
                  alt=""
                  class="w-12 h-12 rounded-2xl shrink-0 object-cover ring-1 ring-white/10"
                />`:h`<div
                  class="w-12 h-12 rounded-2xl bg-[#5865F2] flex items-center justify-center shrink-0 text-white text-lg font-bold"
                >
                  ${r.charAt(0).toUpperCase()}
                </div>`}
            <div class="min-w-0 flex-1">
              <div class="text-white text-sm font-bold truncate">
                ${r}
              </div>
              ${s?h`<div
                    class="flex items-center gap-1.5 mt-1 text-white/50 text-xs"
                  >
                    <span
                      class="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"
                    ></span>
                    ${v(`clan_modal.discord_online_members`,{online:t?.onlineCount??0,members:t?.memberCount??0})}
                  </div>`:``}
            </div>
          </div>
          ${o?h`<p
                class="mt-3 text-white/50 text-xs leading-relaxed line-clamp-2"
              >
                ${o}
              </p>`:``}
          <!-- Grows when the card is stretched taller than its content,
               pinning the button to the bottom (aligned with Manage). -->
          <div class="flex-1"></div>
          ${i?h`<p class="text-amber-400/80 text-xs mt-4">
                ${v(`clan_modal.discord_invite_unavailable`)}
              </p>`:h`<a
                href=${e}
                target="_blank"
                rel="noopener noreferrer"
                class="mt-4 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white uppercase tracking-wider bg-[#5865F2] hover:bg-[#4752c4] active:bg-[#3c45a5] rounded-xl transition-all shadow-lg shadow-[#5865F2]/20"
              >
                ${v(`clan_modal.open_discord`)}
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>`}
        </div>
      </div>
    `}renderActionButtons(e,t,n,r,i){let a=[];return!e&&this.myPublicId===null?a.push(h`
        <button
          @click=${()=>window.showPage?.(`page-account`)}
          class="flex-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all"
        >
          ${v(`clan_modal.sign_in_to_join`)}
        </button>
      `):!e&&r?a.push(h`
        <button
          disabled
          class="flex-1 px-6 py-3 text-sm font-bold text-white/40 uppercase tracking-wider bg-white/5 rounded-xl border border-white/10 cursor-not-allowed"
        >
          ${v(`clan_modal.request_pending`)}
        </button>
      `):!e&&i.isOpen?a.push(h`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="flex-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          ${v(`clan_modal.join_clan`)}
        </button>
      `):!e&&!i.isOpen&&a.push(h`
        <button
          @click=${()=>this.handleJoin()}
          ?disabled=${this.actionPending}
          class="flex-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${v(`clan_modal.request_invite`)}
        </button>
      `),e&&a.push(h`
        <button
          @click=${()=>this.donateOpen=!0}
          class="flex-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl transition-all shadow-lg hover:shadow-amber-900/40 border border-white/5"
        >
          ${v(`clan_modal.donate`)}
        </button>
      `),e&&!t&&a.push(h`
        <button
          @click=${()=>this.handleLeave()}
          ?disabled=${this.actionPending}
          class="flex-1 px-6 py-3 text-sm font-bold text-white/70 uppercase tracking-wider bg-red-600/30 hover:bg-red-600/50 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
        >
          ${v(`clan_modal.leave_clan`)}
        </button>
      `),(t||n)&&a.push(h`
        <button
          @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-manage`,{bubbles:!0,composed:!0}))}
          class="flex-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-white/10 hover:bg-white/15 rounded-xl transition-all border border-white/10"
        >
          ${v(`clan_modal.manage_clan`)}
        </button>
      `),a}};g([c()],G.prototype,`clanTag`,void 0),g([c()],G.prototype,`myPublicId`,void 0),g([c({type:Object})],G.prototype,`myClanRoles`,void 0),g([c({type:Array})],G.prototype,`myPendingRequests`,void 0),g([c({type:Object})],G.prototype,`cachedDetail`,void 0),g([c()],G.prototype,`detailTab`,void 0),g([c({type:Object})],G.prototype,`cachedClan`,void 0),g([u()],G.prototype,`selectedClan`,void 0),g([u()],G.prototype,`discordMeta`,void 0),g([u()],G.prototype,`myRole`,void 0),g([u()],G.prototype,`members`,void 0),g([u()],G.prototype,`membersTotal`,void 0),g([u()],G.prototype,`memberPage`,void 0),g([u()],G.prototype,`membersPerPage`,void 0),g([u()],G.prototype,`memberSort`,void 0),g([u()],G.prototype,`memberOrder`,void 0),g([u()],G.prototype,`pendingRequestCount`,void 0),g([u()],G.prototype,`loading`,void 0),g([u()],G.prototype,`actionPending`,void 0),g([u()],G.prototype,`allStatsExpanded`,void 0),g([u()],G.prototype,`membersLoadInFlight`,void 0),g([u()],G.prototype,`memberSearch`,void 0),g([u()],G.prototype,`donateOpen`,void 0),G=g([d(`clan-detail-view`)],G);var zt=[{key:`all`,labelKey:`clan_modal.donations_filter_all`},{key:`soft`,labelKey:`cosmetics.soft`},{key:`hard`,labelKey:`cosmetics.hard`}],K=class extends _{constructor(...e){super(...e),this.clanTag=``,this.donations=[],this.total=0,this.page=1,this.perPage=10,this.filter=`all`,this.loading=!1,this.loadState=`ok`,this.asyncGeneration=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.clanTag&&this.load()}async load(){if(!this.clanTag)return;let e=++this.asyncGeneration;this.loading=!0,this.loadState=`ok`;let t=await pe(this.clanTag,{page:this.page,limit:this.perPage,currencyType:this.filter===`all`?void 0:this.filter});if(e===this.asyncGeneration){if(this.loading=!1,`error`in t){this.loadState=t.error,this.donations=[],this.total=0;return}this.donations=t.results,this.total=t.total}}setFilter(e){e!==this.filter&&(this.filter=e,this.page=1,this.load())}setPage(e){e!==this.page&&(this.page=e,this.load())}setPerPage(e){e!==this.perPage&&(this.perPage=e,this.page=1,this.load())}render(){return this.loadState===`forbidden`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.donations_members_only`)}
          </p>
        </div>
      `:h`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return h`
      <div
        role="tablist"
        class="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${zt.map(e=>{let t=this.filter===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${t}
              data-currency-filter=${e.key}
              @click=${()=>this.setFilter(e.key)}
              class="flex-1 px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${v(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading?x():this.loadState===`failed`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${v(`clan_modal.donations_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${v(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.donations.length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.donations_empty`)}
          </p>
        </div>
      `:h`
      <div class="space-y-2">
        ${this.donations.map(e=>this.renderRow(e))}
      </div>
      ${z(this.page,this.total,this.perPage,e=>this.setPage(e),e=>this.setPerPage(e))}
    `}renderRow(e){let t=e.currencyType===`hard`;return h`
      <div
        data-donation-id=${e.id}
        class="flex items-center gap-3 py-2.5 px-3 rounded-xl border bg-white/5 border-white/10"
      >
        <div class="flex-1 min-w-0 flex flex-col">
          ${e.createdBy===null?h`<span class="text-sm text-white/40 italic"
                >${v(`clan_modal.donations_deleted_player`)}</span
              >`:h`<div class="min-w-0">
                ${F(this,e.createdByUsername,e.createdBy)}
              </div>`}
          <span class="text-white/30 text-[10px] whitespace-nowrap"
            >${w(e.createdAt)}</span
          >
        </div>
        <currency-display
          class="shrink-0"
          .hard=${t?e.amount:null}
          .soft=${t?null:e.amount}
        ></currency-display>
      </div>
    `}};g([c()],K.prototype,`clanTag`,void 0),g([u()],K.prototype,`donations`,void 0),g([u()],K.prototype,`total`,void 0),g([u()],K.prototype,`page`,void 0),g([u()],K.prototype,`perPage`,void 0),g([u()],K.prototype,`filter`,void 0),g([u()],K.prototype,`loading`,void 0),g([u()],K.prototype,`loadState`,void 0),K=g([d(`clan-donations-view`)],K);var Bt=s(`images/LeaderboardIconRegularWhite.svg`),Vt=s(`images/ReplayRegularIconWhite.svg`),Ht=s(`images/LinkIconWhite.svg`),Ut=[{key:`all`,labelKey:`clan_modal.history_filter_all`},{key:`ffa`,labelKey:`clan_modal.history_type_ffa`},{key:`team`,labelKey:`clan_modal.history_type_team`},{key:`hvn`,labelKey:`clan_modal.stats_hvn`},{key:`ranked`,labelKey:`clan_modal.stats_ranked`}],q=class extends _{constructor(...e){super(...e),this.clanTag=``,this.cachedState=null,this.games=[],this.nextCursor=null,this.loading=!1,this.loadingMore=!1,this.loadState=`ok`,this.appendFailed=!1,this.filter=`all`,this.asyncGeneration=0,this.sentinel=null,this.observer=null,this.groupedFor=null,this.grouped=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.cachedState&&this.cachedState.tag===this.clanTag?(this.games=this.cachedState.games,this.nextCursor=this.cachedState.nextCursor,this.filter=this.cachedState.filter):this.clanTag&&this.reload()}disconnectedCallback(){super.disconnectedCallback(),this.teardownObserver()}updated(){this.ensureObserver()}async reload(){this.games=[],this.nextCursor=null,this.appendFailed=!1,await this.load({append:!1})}setFilter(e){e!==this.filter&&(this.filter=e,this.reload())}async load({append:e}){if(!this.clanTag)return;let t=++this.asyncGeneration;e?(this.loadingMore=!0,this.appendFailed=!1):(this.loading=!0,this.loadState=`ok`,this.loadingMore=!1);let n=this.filter===`all`?void 0:this.filter,r=e?this.nextCursor??void 0:void 0,i=await Fe(this.clanTag,{filter:n,cursor:r});if(t===this.asyncGeneration){if(e?this.loadingMore=!1:this.loading=!1,`error`in i){e?this.appendFailed=!0:(this.loadState=i.error,this.games=[],this.nextCursor=null);return}this.games=e?[...this.games,...i.results]:i.results,this.nextCursor=i.nextCursor,this.dispatchEvent(new CustomEvent(`history-updated`,{detail:{tag:this.clanTag,filter:this.filter,games:this.games,nextCursor:this.nextCursor},bubbles:!0,composed:!0}))}}ensureObserver(){let e=this.querySelector(`[data-scroll-sentinel]`);e!==this.sentinel&&(this.teardownObserver(),this.sentinel=e,e&&(this.observer=new IntersectionObserver(e=>{for(let t of e)t.isIntersecting&&(this.loading||this.loadingMore||this.nextCursor!==null&&(this.appendFailed||this.load({append:!0})))}),this.observer.observe(e)))}teardownObserver(){this.observer&&=(this.observer.disconnect(),null),this.sentinel=null}async watchReplay(e){try{let t=encodeURIComponent(e),n=re(f.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}})),this.dispatchEvent(new CustomEvent(`close-clan-modal`,{bubbles:!0,composed:!0}))}catch{l(v(`clan_modal.error_failed`),`red`)}}showStats(e){this.dispatchEvent(new CustomEvent(`view-stats`,{detail:{gameId:e},bubbles:!0,composed:!0}))}async copyGameLink(e){let t=`${f.shareOrigin()}${f.gamePath(e)}`;try{await void m(t),l(v(`common.copied`),`green`)}catch{l(v(`common.failed_copy`),`red`)}}render(){return this.loadState===`forbidden`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.history_members_only`)}
          </p>
        </div>
      `:h`<div class="space-y-3">
      ${this.renderFilters()}${this.renderBody()}
    </div>`}renderFilters(){return h`
      <div
        role="tablist"
        class="flex flex-wrap gap-1 p-1 bg-white/5 border border-white/10 rounded-xl"
      >
        ${Ut.map(e=>{let t=this.filter===e.key;return h`
            <button
              type="button"
              role="tab"
              aria-selected=${t}
              @click=${()=>this.setFilter(e.key)}
              class="grow ${e.key===`all`?`basis-full sm:basis-20`:`basis-20`} px-3 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-colors ${t?`bg-malibu-blue/20 text-aquarius border border-malibu-blue/30`:`text-white/50 hover:text-white hover:bg-white/5 border border-transparent`}"
            >
              ${v(e.labelKey)}
            </button>
          `})}
      </div>
    `}renderBody(){return this.loading&&this.games.length===0?x():this.loadState===`failed`?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm mb-3">
            ${v(`clan_modal.history_unavailable`)}
          </p>
          <button
            type="button"
            @click=${()=>this.reload()}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${v(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:this.games.length===0?h`
        <div
          class="bg-white/5 rounded-xl border border-white/10 p-8 text-center"
        >
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.history_empty`)}
          </p>
        </div>
      `:(this.groupedFor!==this.games&&(this.grouped=He(this.games),this.groupedFor=this.games),h`
      <div class="space-y-5">
        ${this.grouped.map(e=>h`
            <div class="space-y-3">
              <div
                class="sticky top-0 z-10 flex items-center gap-3 px-1 py-1.5"
              >
                <span class="h-px flex-1 bg-white/10"></span>
                <h3
                  class="text-xs font-bold uppercase tracking-widest text-white/70 whitespace-nowrap"
                >
                  ${Ve(e.day)}
                </h3>
                <span class="h-px flex-1 bg-white/10"></span>
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                ${e.items.map(e=>this.renderGameRow(e))}
              </div>
            </div>
          `)}
        ${this.renderScrollFooter()}
      </div>
    `)}renderScrollFooter(){return this.nextCursor===null?h`
        <div class="text-center text-[11px] text-white/30 py-3 select-none">
          ${v(`clan_modal.history_end_of_history`)}
        </div>
      `:this.appendFailed?h`
        <div class="text-center py-3">
          <p class="text-white/40 text-xs mb-2">
            ${v(`clan_modal.history_load_more_failed`)}
          </p>
          <button
            type="button"
            @click=${()=>this.load({append:!0})}
            class="text-xs font-bold text-white/60 hover:text-white uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            ${v(`leaderboard_modal.try_again`)}
          </button>
        </div>
      `:h`
      <div class="py-3">
        <div data-scroll-sentinel aria-hidden="true" class="h-px"></div>
        ${this.loadingMore?x():``}
      </div>
    `}renderGameRow(e){let t=null;if(e.map)try{t=Me.getMapData(e.map).webpPath}catch{t=null}let n=e.map?ae(e.map)??e.map:null,r=[],i=[];for(let t of e.clanPlayers)(t.won?r:i).push(t);return h`
      <div
        class="relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
      >
        ${t?h`<div
              class="relative w-full aspect-[30/11] overflow-hidden bg-surface"
            >
              <img
                src=${t}
                alt=${n??``}
                draggable="false"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              ${n?h`<div
                    class="absolute bottom-2 left-3 text-xs font-bold text-white uppercase tracking-wider drop-shadow"
                  >
                    ${n}
                  </div>`:``}
              <div class="absolute top-2 left-2">
                ${this.renderResultBadge(e,r)}
              </div>
              <div
                class="absolute bottom-2 right-2 text-xs font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md whitespace-nowrap"
              >
                ${w(e.start)}
              </div>
            </div>`:``}
        <div
          class=${t?`absolute top-2 right-2 z-[1]`:`flex items-center justify-end px-4 py-3 border-b border-white/5`}
        >
          <div class="flex items-center gap-2 shrink-0">
            <button
              type="button"
              title=${v(`game_list.stats`)}
              aria-label=${v(`game_list.stats`)}
              @click=${()=>this.showStats(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Bt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only">${v(`game_list.stats`)}</span>
            </button>
            <button
              type="button"
              title=${v(`common.click_to_copy`)}
              aria-label=${v(`common.click_to_copy`)}
              @click=${()=>this.copyGameLink(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Ht}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${v(`common.click_to_copy`)}</span
              >
            </button>
            <button
              type="button"
              title=${v(`clan_modal.history_watch_replay`)}
              aria-label=${v(`clan_modal.history_watch_replay`)}
              @click=${()=>this.watchReplay(e.gameId)}
              class="inline-flex w-8 h-8 items-center justify-center text-white bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
            >
              <img
                src=${Vt}
                alt=""
                aria-hidden="true"
                width="18"
                height="18"
              />
              <span class="sr-only"
                >${v(`clan_modal.history_watch_replay`)}</span
              >
            </button>
          </div>
        </div>
        <div
          class="px-4 py-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 justify-items-center text-center"
        >
          ${this.renderField(v(`clan_modal.history_game_type`),Ge(e))}
          ${t?``:this.renderField(v(`clan_modal.history_map`),n??`—`)}
          ${this.renderPlayersField(e)}
          ${this.renderField(v(`clan_modal.history_duration`),ee(e.durationSeconds))}
        </div>
        ${this.renderPlayerLists(e,r,i)}
      </div>
    `}renderField(e,t){return h`
      <div class="min-w-0">
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-0.5"
        >
          ${e}
        </div>
        <div class="text-sm text-white truncate" title=${t}>${t}</div>
      </div>
    `}renderResultBadge(e,t){let n=e.result;if(!n)return h``;let r=e.clanPlayers.length,i=t.length,a=(We(e)||e.rankedType!==void 0&&e.rankedType!==`unranked`)&&r>1&&i>0&&i<r,o,s;return a?(o=v(`clan_modal.history_result_partial`,{wins:i,total:r}),s=`text-white bg-amber-500 border-amber-400`):n===`victory`?(o=v(`clan_modal.history_result_victory`),s=`text-white bg-green-600 border-green-500`):(o=v(`clan_modal.history_result_defeat`),s=`text-white bg-red-600 border-red-500`),h`<span
      class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-lg ${s}"
      >${o}</span
    >`}renderPlayerLists(e,t,n){return e.clanPlayers.length===0?``:h`
      ${t.length>0?this.renderPlayerSection(v(`clan_modal.history_clan_winners`),t,`text-green-400`,`winners`):``}
      ${n.length>0?this.renderPlayerSection(v(`clan_modal.history_clan_members`),n,`text-white/40`,`losers`):``}
    `}renderPlayerSection(e,t,n,r){return h`
      <div
        class="px-4 py-2 border-t border-white/5 text-xs text-white/60 flex flex-wrap items-center gap-x-1 gap-y-1"
        data-player-section=${r}
      >
        <span
          class="text-[10px] font-bold uppercase tracking-wider mr-1 ${n}"
          >${e}:</span
        >
        ${t.map((e,t)=>t===0?this.renderClanPlayerName(e):h`<span
                class="inline-flex items-center gap-x-1 min-w-0 max-w-full"
              >
                <span
                  class="text-white text-2xl leading-none select-none"
                  aria-hidden="true"
                  data-name-separator
                  >&middot;</span
                >${this.renderClanPlayerName(e)}
              </span>`)}
      </div>
    `}renderClanPlayerName(e){return h`
      <span class="inline-flex items-center gap-1 min-w-0 max-w-full">
        <button
          type="button"
          class="font-bold text-blue-300 truncate hover:underline"
          title=${v(`player_profile.view`)}
          @click=${()=>vt(this,e.publicId)}
        >
          ${e.username}
        </button>
        ${e.verified===!0?Re():p}
      </span>
    `}renderPlayersField(e){let t=e.rankedType!==void 0&&e.rankedType!==`unranked`,n=e.totalPlayers??null;return t?this.renderField(v(`clan_modal.history_players`),n===null?`—`:`${n}`):this.renderField(v(`clan_modal.history_clan_players`),n===null?`${e.clanPlayers.length}`:v(`clan_modal.history_clan_players_value`,{clanCount:e.clanPlayers.length,total:n}))}};g([c()],q.prototype,`clanTag`,void 0),g([c({type:Object})],q.prototype,`cachedState`,void 0),g([u()],q.prototype,`games`,void 0),g([u()],q.prototype,`nextCursor`,void 0),g([u()],q.prototype,`loading`,void 0),g([u()],q.prototype,`loadingMore`,void 0),g([u()],q.prototype,`loadState`,void 0),g([u()],q.prototype,`appendFailed`,void 0),g([u()],q.prototype,`filter`,void 0),q=g([d(`clan-game-history-view`)],q);var J=class extends _{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.myPublicId=null,this.myRole=null,this.manageName=``,this.manageDescription=``,this.manageDiscordUrl=``,this.manageIsOpen=!0,this.saving=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.memberSort=`default`,this.memberOrder=`asc`,this.memberActionPending=!1,this.loading=!1,this.confirmAction=null,this.confirmTargetId=null,this.pendingRequestCount=0,this.actionPending=!1,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.selectedClan&&(this.manageName=this.selectedClan.name,this.manageDescription=this.selectedClan.description??``,this.manageDiscordUrl=this.selectedClan.discordUrl??``,this.manageIsOpen=this.selectedClan.isOpen??!0),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await b(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder,t):await b(this.clanTag,e,this.membersPerPage,this.memberSort,this.memberOrder);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=e,this.pendingRequestCount=r.pendingRequests??0,!t&&this.selectedClan&&this.selectedClan.memberCount!==r.total&&this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{memberCount:r.total},bubbles:!0,composed:!0})),this.loading=!1}}async handleSaveSettings(){let e=this.selectedClan;if(!e)return;let t={};if(this.manageName!==e.name&&(t.name=this.manageName),(this.manageDescription??``)!==(e.description??``)&&(t.description=this.manageDescription),(this.manageDiscordUrl??``)!==(e.discordUrl??``)&&(t.discordUrl=this.manageDiscordUrl),this.manageIsOpen!==(e.isOpen??!0)&&(t.isOpen=this.manageIsOpen),Object.keys(t).length===0)return;this.saving=!0;let n=await ke(this.clanTag,t);if(`error`in n){l(v(n.error),`red`),this.saving=!1;return}this.dispatchEvent(new CustomEvent(`clan-updated`,{detail:{name:n.name,description:n.description,discordUrl:n.discordUrl,isOpen:n.isOpen},bubbles:!0,composed:!0})),this.saving=!1,l(v(`clan_modal.settings_saved`),`green`),this.dispatchEvent(new CustomEvent(`navigate-detail`,{bubbles:!0,composed:!0}))}async handlePromote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await me(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}await this.loadMembers(this.memberPage),l(v(`clan_modal.member_promoted`),`green`)}finally{this.memberActionPending=!1}}}async handleDemote(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await Le(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}await this.loadMembers(this.memberPage),l(v(`clan_modal.member_demoted`),`green`)}finally{this.memberActionPending=!1}}}async handleKick(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await Ee(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}await this.loadMembers(this.memberPage),l(v(`clan_modal.member_kicked`),`green`)}finally{this.memberActionPending=!1}}}async handleBan(e,t){if(!this.memberActionPending){this.memberActionPending=!0;try{let n=await he(this.clanTag,e,t.trim().slice(0,200)||void 0);if(n!==!0){l(v(n.error),`red`);return}await this.loadMembers(this.memberPage),l(v(`clan_modal.member_banned`),`green`)}finally{this.memberActionPending=!1}}}async handleDisband(){if(!this.actionPending){this.actionPending=!0;try{let e=await _e(this.clanTag);if(e!==!0){l(v(e.error),`red`);return}y(),this.dispatchEvent(new CustomEvent(`clan-disbanded`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),l(v(`clan_modal.clan_disbanded`),`green`)}finally{this.actionPending=!1}}}clearConfirm(){this.confirmAction=null,this.confirmTargetId=null}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}onSortChange(e){e!==this.memberSort&&(this.memberSort=e,this.memberOrder=St(e),this.loadMembers(1))}onOrderToggle(){this.memberOrder=this.memberOrder===`asc`?`desc`:`asc`,this.loadMembers(1)}render(){if(this.loading)return x();let e=this.selectedClan;return e?h`${this.renderManageContent(e)}${this.renderConfirmOverlay()}`:``}renderConfirmOverlay(){return this.confirmAction?this.confirmAction===`disband`?h`<confirm-dialog
        .message=${v(`clan_modal.confirm_disband`,{tag:this.selectedClan?.tag??``,name:this.selectedClan?.name??``})}
        variant="danger"
        ?disabled=${this.actionPending}
        @confirm=${()=>{this.clearConfirm(),this.handleDisband()}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`kick`&&this.confirmTargetId?h`<confirm-dialog
        .message=${v(`clan_modal.confirm_kick`)}
        variant="warning"
        ?disabled=${this.memberActionPending}
        @confirm=${()=>{let e=this.confirmTargetId;this.clearConfirm(),this.handleKick(e)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:this.confirmAction===`ban`&&this.confirmTargetId?h`<confirm-dialog
        .message=${v(`clan_modal.confirm_ban`)}
        variant="warning"
        textareaPlaceholder=${v(`clan_modal.ban_reason_prompt`)}
        ?disabled=${this.memberActionPending}
        @confirm=${e=>{let t=this.confirmTargetId,n=e.detail.text;this.clearConfirm(),this.handleBan(t,n)}}
        @cancel=${()=>this.clearConfirm()}
      ></confirm-dialog>`:``:``}renderManageContent(e){return h`
      <div class="space-y-6">
        <!-- Edit Settings -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-5"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${v(`clan_modal.clan_settings`)}
          </h3>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${v(`clan_modal.clan_name`)}</label
            >
            <input
              type="text"
              .value=${this.manageName}
              @input=${e=>this.manageName=e.target.value}
              maxlength="35"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
            />
          </div>
          <div>
            <label
              class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
              >${v(`clan_modal.description`)}</label
            >
            <textarea
              .value=${this.manageDescription}
              @input=${e=>this.manageDescription=e.target.value}
              maxlength="200"
              rows="3"
              class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm resize-none"
            ></textarea>
          </div>
          ${this.myRole===`leader`?h`
                <div>
                  <label
                    class="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2"
                    >${v(`clan_modal.discord_url_label`)}</label
                  >
                  <input
                    type="url"
                    .value=${this.manageDiscordUrl}
                    @input=${e=>this.manageDiscordUrl=e.target.value}
                    placeholder="https://discord.gg/..."
                    maxlength="255"
                    class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-malibu-blue/50 focus:border-malibu-blue/50 transition-all font-medium hover:bg-white/10 text-sm"
                  />
                  <p class="text-white/40 text-xs mt-2">
                    ${v(`clan_modal.discord_url_hint`)}
                  </p>
                </div>
              `:``}
          <div class="flex items-center justify-between">
            <div>
              <div class="text-white text-sm font-bold">
                ${v(`clan_modal.open_clan`)}
              </div>
              <div class="text-white/40 text-xs">
                ${v(`clan_modal.open_clan_desc`)}
              </div>
            </div>
            <button
              role="switch"
              aria-checked="${this.manageIsOpen}"
              aria-label="${v(`clan_modal.open_clan`)}"
              @click=${()=>this.manageIsOpen=!this.manageIsOpen}
              class="relative w-12 h-7 rounded-full transition-all ${this.manageIsOpen?`bg-malibu-blue`:`bg-white/20`}"
            >
              <div
                class="absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all ${this.manageIsOpen?`left-6`:`left-1`}"
              ></div>
            </button>
          </div>
          <button
            @click=${()=>this.handleSaveSettings()}
            ?disabled=${this.saving}
            class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-xl transition-all disabled:opacity-50"
          >
            ${this.saving?v(`clan_modal.saving`):v(`clan_modal.save_changes`)}
          </button>
        </div>

        <!-- Member Management -->
        <div
          class="bg-white/5 rounded-2xl border border-white/10 p-6 space-y-4"
        >
          <h3 class="text-sm font-bold text-white/60 uppercase tracking-wider">
            ${v(`clan_modal.members`)} (${e.memberCount??0})
          </h3>
          ${R(e=>this.onSearchInput(e),this.memberSearch,void 0,jt(this.memberSort,this.memberOrder,e=>this.onSortChange(e),()=>this.onOrderToggle()))}
          ${h`
              <div class="space-y-2">
                ${B(this.members,this.memberSearch).map(e=>this.renderManageMemberRow(e))}
              </div>
              ${z(this.memberPage,this.membersTotal,this.membersPerPage,e=>this.loadMembers(e),e=>{this.membersPerPage=e,this.loadMembers(1)})}
            `}
        </div>

        <!-- Danger Zone -->
        <div
          class="bg-red-500/5 rounded-2xl border border-red-500/20 p-6 space-y-4"
        >
          <h3
            class="text-sm font-bold text-red-400/80 uppercase tracking-wider"
          >
            ${v(`clan_modal.danger_zone`)}
          </h3>
          <button
            @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-bans`,{bubbles:!0,composed:!0}))}
            class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30"
          >
            ${v(`clan_modal.banned_players`)}
          </button>
          ${this.myRole===`leader`?h`
                <button
                  @click=${()=>this.dispatchEvent(new CustomEvent(`navigate-transfer`,{bubbles:!0,composed:!0}))}
                  class="w-full px-6 py-3 text-sm font-bold text-amber-400 uppercase tracking-wider bg-amber-600/20 hover:bg-amber-600/30 rounded-xl transition-all border border-amber-500/30"
                >
                  ${v(`clan_modal.transfer_leadership`)}
                </button>
                <button
                  @click=${()=>{this.confirmAction=`disband`,this.confirmTargetId=null}}
                  ?disabled=${this.confirmAction===`disband`}
                  class="w-full px-6 py-3 text-sm font-bold text-red-400 uppercase tracking-wider bg-red-600/20 hover:bg-red-600/30 rounded-xl transition-all border border-red-500/30 disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${v(`clan_modal.disband_clan`)}
                </button>
              `:``}
        </div>
      </div>
    `}renderManageMemberRow(e){let t=e.role===`leader`,n=e.publicId===this.myPublicId,r=!n&&!t&&(this.myRole===`leader`||this.myRole===`officer`&&e.role===`member`),i=!n&&this.myRole===`leader`&&e.role===`member`,a=!n&&this.myRole===`leader`&&e.role===`officer`;return h`
      <div
        class="flex flex-col py-2.5 px-3 rounded-xl border
        ${n?`bg-malibu-blue/10 border-malibu-blue/20`:`bg-white/5 border-white/10`}"
      >
        <div class="flex items-center flex-wrap gap-1.5">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
          ${n?`bg-malibu-blue/20 text-aquarius`:`bg-white/10 text-white/50`}"
          >
            ${Tt(e.role)}
          </div>
          ${F(this,e.username,e.publicId)}
          <span class="text-white/30 text-[10px] whitespace-nowrap">
            ${v(`clan_modal.joined_date`,{date:L(e.joinedAt)})}
          </span>
          <div class="flex items-center gap-1.5 ml-auto flex-wrap justify-end">
            ${i?h`<button
                  @click=${()=>this.handlePromote(e.publicId)}
                  ?disabled=${this.memberActionPending}
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400/70 border border-purple-500/20 hover:bg-purple-500/20 hover:text-purple-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${v(`clan_modal.promote`)}
                </button>`:``}
            ${a?h`<button
                  @click=${()=>this.handleDemote(e.publicId)}
                  ?disabled=${this.memberActionPending}
                  class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60 transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  ${v(`clan_modal.demote`)}
                </button>`:``}
            ${r?h`
                  <button
                    @click=${()=>{this.confirmAction=`kick`,this.confirmTargetId=e.publicId}}
                    ?disabled=${this.memberActionPending||this.confirmAction!==null}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${v(`clan_modal.kick`)}
                  </button>
                  <button
                    @click=${()=>{this.confirmAction=`ban`,this.confirmTargetId=e.publicId}}
                    ?disabled=${this.memberActionPending||this.confirmAction!==null}
                    class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/10 text-red-400/70 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    ${v(`clan_modal.ban`)}
                  </button>
                `:``}
          </div>
        </div>
      </div>
    `}};g([c()],J.prototype,`clanTag`,void 0),g([c({type:Object})],J.prototype,`selectedClan`,void 0),g([c()],J.prototype,`myPublicId`,void 0),g([c()],J.prototype,`myRole`,void 0),g([u()],J.prototype,`manageName`,void 0),g([u()],J.prototype,`manageDescription`,void 0),g([u()],J.prototype,`manageDiscordUrl`,void 0),g([u()],J.prototype,`manageIsOpen`,void 0),g([u()],J.prototype,`saving`,void 0),g([u()],J.prototype,`members`,void 0),g([u()],J.prototype,`membersTotal`,void 0),g([u()],J.prototype,`memberPage`,void 0),g([u()],J.prototype,`membersPerPage`,void 0),g([u()],J.prototype,`memberSort`,void 0),g([u()],J.prototype,`memberOrder`,void 0),g([u()],J.prototype,`memberActionPending`,void 0),g([u()],J.prototype,`loading`,void 0),g([u()],J.prototype,`confirmAction`,void 0),g([u()],J.prototype,`confirmTargetId`,void 0),g([u()],J.prototype,`pendingRequestCount`,void 0),g([u()],J.prototype,`actionPending`,void 0),g([u()],J.prototype,`memberSearch`,void 0),J=g([d(`clan-manage-view`)],J);function Wt(){let e=fe();return e===`localhost`?`http://clanmap.localhost:8787`:`https://clanmap.${e}`}var Gt=class extends _{constructor(...e){super(...e),this.onMessage=async e=>{let t=Wt();if(e.origin!==t||!this.frame||e.source!==this.frame.contentWindow||e.data?.type!==`clanmap:ready`)return;let n=await oe();if(!n)return;let r=this.frame?.contentWindow;r&&r.postMessage({type:`clanmap:auth`,jwt:n.jwt},t)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`message`,this.onMessage)}disconnectedCallback(){window.removeEventListener(`message`,this.onMessage),super.disconnectedCallback()}enterFullscreen(){this.frame?.requestFullscreen?.().catch(()=>{})}render(){return h`<iframe
      src=${Wt()+`/`}
      title=${v(`clan_modal.map_frame_title`)}
      allow="fullscreen"
      allowfullscreen
      class="block w-full h-full border-0 bg-[#0e1116]"
    ></iframe>`}};g([te(`iframe`)],Gt.prototype,`frame`,void 0),Gt=g([d(`clan-map-view`)],Gt);var Y=class extends _{constructor(...e){super(...e),this.myPendingRequests=[],this.actionPending=!1}createRenderRoot(){return this}async handleWithdrawRequest(e){if(!this.actionPending){this.actionPending=!0;try{let t=await je(e);if(t!==!0){l(v(t.error),`red`);return}y(),l(v(`clan_modal.join_request_cancelled`),`green`),this.dispatchEvent(new CustomEvent(`request-withdrawn`,{detail:{tag:e},bubbles:!0,composed:!0}))}finally{this.actionPending=!1}}}render(){return h`
      <div>
        ${this.myPendingRequests.length===0?h`<p class="text-white/40 text-sm text-center py-8">
              ${v(`clan_modal.no_pending_applications`)}
            </p>`:h`
              <div class="space-y-3">
                ${this.myPendingRequests.map(e=>h`
                    <div
                      class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                    >
                      <div
                        class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shrink-0"
                      >
                        <span class="text-amber-400 font-bold text-xs"
                          >${e.tag}</span
                        >
                      </div>
                      <div class="flex-1 min-w-0">
                        <span
                          class="text-white font-bold text-sm truncate block"
                          >${e.name}</span
                        >
                        <span class="text-white/30 text-xs">
                          ${v(`clan_modal.applied`)}
                          ${L(e.createdAt)}
                        </span>
                      </div>
                      <button
                        @click=${()=>this.handleWithdrawRequest(e.tag)}
                        ?disabled=${this.actionPending}
                        class="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/20 hover:bg-red-500/25 transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                      >
                        ${v(`clan_modal.cancel_request`)}
                      </button>
                    </div>
                  `)}
              </div>
            `}
      </div>
    `}};g([c({type:Array})],Y.prototype,`myPendingRequests`,void 0),g([u()],Y.prototype,`actionPending`,void 0),Y=g([d(`clan-my-requests-view`)],Y);var X=class extends _{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.requests=[],this.requestsTotal=0,this.requestsPage=1,this.requestsLimit=20,this.memberActionPending=!1,this.loading=!1,this.memberSearch=``,this.memberSearchDebounce=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadRequests(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),super.disconnectedCallback()}async loadRequests(e,t=!0){t?this.loading=!0:this.memberActionPending=!0;try{let n=await Te(this.clanTag,e);if(!n){t&&l(v(`clan_modal.failed_to_load_requests`),`red`);return}this.requests=n.results,this.requestsTotal=n.total,this.requestsLimit=n.limit,this.requestsPage=e}finally{t?this.loading=!1:this.memberActionPending=!1}}async handleApprove(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await De(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}this.requests=this.requests.filter(t=>t.publicId!==e),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-approved`,{detail:{publicId:e},bubbles:!0,composed:!0})),l(v(`clan_modal.request_approved`),`green`)}finally{this.memberActionPending=!1}}}async handleDeny(e){if(!this.memberActionPending){this.memberActionPending=!0;try{let t=await Oe(this.clanTag,e);if(t!==!0){l(v(t.error),`red`);return}this.requests=this.requests.filter(t=>t.publicId!==e),this.requestsTotal--,this.dispatchEvent(new CustomEvent(`request-denied`,{detail:{publicId:e},bubbles:!0,composed:!0})),l(v(`clan_modal.request_denied`),`green`)}finally{this.memberActionPending=!1}}}onSearchInput(e){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearch=e.target.value,this.requestUpdate()},200)}render(){if(this.loading)return x();let e=Math.ceil(this.requestsTotal/this.requestsLimit),t=It(this.requests,this.memberSearch);return h`
      <div>
        <div
          class="text-[10px] font-bold uppercase tracking-wider text-white/40 mb-2"
        >
          ${v(`clan_modal.pending_requests_count`,{count:this.requestsTotal})}
        </div>
        ${R(e=>this.onSearchInput(e),this.memberSearch,`clan_modal.search_requests_placeholder`)}
        ${t.length===0?h`<div
              class="flex flex-col items-center justify-center p-12 text-center"
            >
              <p class="text-white/40 text-sm">
                ${v(`clan_modal.no_requests`)}
              </p>
            </div>`:h`
              <div class="space-y-3">
                ${t.map(e=>h`
                    <div
                      class="flex items-center gap-3 bg-white/5 rounded-xl border border-white/10 p-4"
                    >
                      <div class="flex-1 min-w-0">
                        ${F(this,e.username,e.publicId)}
                        <span class="text-white/30 text-[10px]">
                          ${v(`clan_modal.requested_on`,{tag:this.selectedClan?.tag??this.clanTag,date:L(e.createdAt)})}
                        </span>
                      </div>
                      <div class="flex items-center gap-2 shrink-0">
                        <button
                          @click=${()=>this.handleApprove(e.publicId)}
                          ?disabled=${this.memberActionPending}
                          class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                        >
                          ${v(`clan_modal.approve`)}
                        </button>
                        <button
                          @click=${()=>this.handleDeny(e.publicId)}
                          ?disabled=${this.memberActionPending}
                          class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all disabled:opacity-50 disabled:pointer-events-none"
                        >
                          ${v(`clan_modal.deny`)}
                        </button>
                      </div>
                    </div>
                  `)}
              </div>
            `}
        ${e>1?Ot(this.requestsPage,e,e=>this.loadRequests(e,!1)):``}
      </div>
    `}};g([c()],X.prototype,`clanTag`,void 0),g([c({type:Object})],X.prototype,`selectedClan`,void 0),g([u()],X.prototype,`requests`,void 0),g([u()],X.prototype,`requestsTotal`,void 0),g([u()],X.prototype,`requestsPage`,void 0),g([u()],X.prototype,`requestsLimit`,void 0),g([u()],X.prototype,`memberActionPending`,void 0),g([u()],X.prototype,`loading`,void 0),X=g([d(`clan-requests-view`)],X);var Z=class extends _{constructor(...e){super(...e),this.clanTag=``,this.selectedClan=null,this.transferTarget=null,this.actionPending=!1,this.members=[],this.membersTotal=0,this.memberPage=1,this.membersPerPage=10,this.loading=!1,this.errorMsg=``,this.confirmAction=null,this.memberSearch=``,this.memberSearchDebounce=null,this.memberLoadSeq=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadMembers(1)}disconnectedCallback(){this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberLoadSeq++,super.disconnectedCallback()}async loadMembers(e,t=this.memberSearch){let n=++this.memberLoadSeq;this.members.length===0&&(this.loading=!0);let r=t?await b(this.clanTag,e,this.membersPerPage,`default`,void 0,t):await b(this.clanTag,e,this.membersPerPage);if(!(n!==this.memberLoadSeq||t!==this.memberSearch)){if(!r){this.loading=!1;return}if(r.results.length===0&&e>1){await this.loadMembers(1,t);return}this.members=r.results,this.membersTotal=r.total,this.memberPage=r.page,this.transferTarget=null,this.loading=!1}}async handleTransfer(){if(!(!this.transferTarget||this.actionPending)){this.actionPending=!0,this.errorMsg=``;try{let e=await Ae(this.clanTag,this.transferTarget);if(e!==!0){l(v(e.error),`red`),this.errorMsg=v(e.error);return}y(),this.dispatchEvent(new CustomEvent(`leadership-transferred`,{detail:{tag:this.clanTag},bubbles:!0,composed:!0})),l(v(`clan_modal.leadership_transferred`),`green`)}finally{this.actionPending=!1}}}onSearchInput(e){let t=e.target.value.trim();t!==this.memberSearch&&(this.memberSearch=t,this.memberSearchDebounce&&clearTimeout(this.memberSearchDebounce),this.memberSearchDebounce=setTimeout(()=>{this.memberSearchDebounce=null,this.loadMembers(1,t)},200))}render(){if(this.loading)return x();let e=this.members.filter(e=>e.role!==`leader`),t=Math.ceil(this.membersTotal/this.membersPerPage);return h`
      ${this.renderContent(e,t)}
      ${this.renderConfirmOverlay()}
    `}renderConfirmOverlay(){return this.confirmAction!==`transfer`||!this.transferTarget?``:h`<confirm-dialog
      .message=${v(`clan_modal.confirm_transfer`,{name:this.transferTarget})}
      variant="warning"
      ?disabled=${this.actionPending}
      @confirm=${()=>{this.confirmAction=null,this.handleTransfer()}}
      @cancel=${()=>{this.confirmAction=null}}
    ></confirm-dialog>`}renderContent(e,t){return h`
      <div class="space-y-6">
        ${this.errorMsg?h`<p class="text-red-400 text-sm">${this.errorMsg}</p>`:``}

        <div class="bg-amber-500/10 rounded-xl border border-amber-500/20 p-4">
          <p class="text-amber-400/80 text-sm">
            ${v(`clan_modal.transfer_warning`)}
          </p>
        </div>

        ${R(e=>this.onSearchInput(e),this.memberSearch)}

        <div class="space-y-2">
          ${B(e,this.memberSearch).map(e=>h`
              <div
                class="relative w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border transition-all text-left
                      ${this.transferTarget===e.publicId?`bg-amber-500/10 border-amber-500/20`:`bg-white/5 border-white/10 hover:bg-white/10`}"
              >
                <button
                  type="button"
                  @click=${()=>this.transferTarget=e.publicId}
                  aria-pressed=${this.transferTarget===e.publicId}
                  aria-labelledby=${`transfer-target-${e.publicId}`}
                  class="absolute inset-0 w-full h-full rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                ></button>
                <div
                  class="relative pointer-events-none w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-xs font-bold shrink-0"
                >
                  ${Tt(e.role)}
                </div>
                <div
                  id=${`transfer-target-${e.publicId}`}
                  class="relative pointer-events-none flex-1 min-w-0"
                >
                  <span
                    class="pointer-events-auto inline-flex max-w-full min-w-0"
                  >
                    ${F(this,e.username,e.publicId)}
                  </span>
                </div>
                <span
                  class="relative pointer-events-none text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0
                        ${e.role===`officer`?`bg-purple-500/20 text-purple-400 border border-purple-500/30`:`bg-white/10 text-white/40 border border-white/10`}"
                >
                  ${wt(e.role)}
                </span>
                ${this.transferTarget===e.publicId?h`<svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="relative pointer-events-none w-5 h-5 text-amber-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>`:``}
              </div>
            `)}
        </div>

        ${t>1?Ot(this.memberPage,t,e=>this.loadMembers(e)):``}

        <button
          @click=${()=>this.confirmAction=`transfer`}
          class="w-full px-6 py-3 text-sm font-bold text-white uppercase tracking-wider rounded-xl transition-all border disabled:opacity-50 disabled:pointer-events-none
                ${this.transferTarget&&!this.actionPending?`bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-amber-900/40 border-white/5`:`bg-white/5 border-white/10 text-white/30 cursor-not-allowed`}"
          ?disabled=${!this.transferTarget||this.actionPending}
        >
          ${this.transferTarget?v(`clan_modal.confirm_transfer`,{name:this.transferTarget}):v(`clan_modal.select_new_leader`)}
        </button>
      </div>
    `}};g([c()],Z.prototype,`clanTag`,void 0),g([c({type:Object})],Z.prototype,`selectedClan`,void 0),g([u()],Z.prototype,`transferTarget`,void 0),g([u()],Z.prototype,`actionPending`,void 0),g([u()],Z.prototype,`members`,void 0),g([u()],Z.prototype,`membersTotal`,void 0),g([u()],Z.prototype,`memberPage`,void 0),g([u()],Z.prototype,`membersPerPage`,void 0),g([u()],Z.prototype,`loading`,void 0),g([u()],Z.prototype,`errorMsg`,void 0),g([u()],Z.prototype,`confirmAction`,void 0),g([u()],Z.prototype,`memberSearch`,void 0),Z=g([d(`clan-transfer-view`)],Z);var Kt=[`map`,`my-clans`,`browse`];function qt(e){return Kt.includes(e)}var Q=class extends Pe{constructor(){super(),this.routerName=`clan`,this.view=`list`,this.loading=!1,this.signedOut=!1,this.myClans=[],this.myPendingRequests=[],this.selectedClanTag=``,this.selectedClan=null,this.myRole=null,this.myPublicId=null,this.myClanRoles=new Map,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.preserveStateForModalHandoff=!1,this.returningFromModalHandoff=!1,this.profileOpenedFromTab=`members`,this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.previousListTab=`my-clans`,this.activeTab=`my-clans`}get onListView(){return this.view===`list`&&!this.selectedClanTag}get onDetailView(){return this.view===`detail`&&!!this.selectedClanTag}get mapComingSoon(){return f.env()===ne.Prod}modalConfig(){return{tabs:this.onListView?[{key:`map`,label:v(`clan_modal.tab_map`)},{key:`my-clans`,label:v(`clan_modal.my_clans`)},{key:`browse`,label:v(`clan_modal.browse`)}]:this.onDetailView?[{key:`overview`,label:v(`clan_modal.tab_overview`)},{key:`members`,label:v(`clan_modal.members`)},{key:`game-history`,label:v(`clan_modal.tab_game_history`)},{key:`donations`,label:v(`clan_modal.tab_donations`)}]:[]}}renderHeaderSlot(){return this.onListView?S({title:v(`clan_modal.title`),onBack:()=>this.close(),ariaLabel:v(`common.back`),rightContent:this.activeTab===`map`&&!this.mapComingSoon?this.fullscreenButton():void 0}):this.renderSubViewHeader()}renderBody(){return h`<div class=${this.onListView&&this.activeTab===`map`?`h-full`:`p-4 lg:p-[1.4rem]`}>
      ${this.renderInner()}
    </div>`}onTabEnter(e){if(qt(e)){this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.detailCache=null,this.gameHistoryCache=null,e===`my-clans`&&this.loadMyClans();return}}fullscreenButton(){let e=v(`fullscreen.enter`);return h`<button
      type="button"
      data-testid="map-fullscreen"
      title=${e}
      aria-label=${e}
      class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white/5 hover:bg-white/10 transition-all border border-white/10 text-white/70 hover:text-white"
      @click=${()=>this.querySelector(`clan-map-view`)?.enterFullscreen()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"
        />
      </svg>
    </button>`}tagPill(e){return h`<span
      class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/50 border border-white/10"
      >[${e}]</span
    >`}clanBalances(e){return h`<div class="flex items-center gap-3">
      <currency-display
        .hard=${e.hardBalance??null}
        .soft=${e.softBalance??null}
      ></currency-display>
      ${this.tagPill(e.tag)}
    </div>`}backToProfile(){let e=this.openedFromProfile;if(e===null)return!1;let t=this.openedFromProfileOrigin;return this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.close(),document.querySelector(`player-profile-modal`)?.returnFromClan(e,t),!0}renderSubViewHeader(){let e=this.selectedClan,t=v(`common.back`);return this.view===`my-requests`?S({title:v(`clan_modal.pending_applications`),onBack:()=>this.view=`list`,ariaLabel:t}):this.view===`manage`?S({title:v(`clan_modal.manage_clan`),onBack:()=>this.view=`detail`,ariaLabel:t,rightContent:e?this.tagPill(e.tag):void 0}):this.view===`transfer`?S({title:v(`clan_modal.transfer_leadership`),onBack:()=>this.view=`manage`,ariaLabel:t}):this.view===`requests`?S({title:v(`clan_modal.join_requests`),onBack:()=>this.view=`detail`,ariaLabel:t}):this.view===`bans`?S({title:v(`clan_modal.banned_players`),onBack:()=>this.view=`manage`,ariaLabel:t}):S({title:e?.name??v(`clan_modal.title`),onBack:()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,Ne.syncArgs(`clan`,{clan:null,tag:null}),this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))},ariaLabel:t,rightContent:e?this.clanBalances(e):void 0})}onOpen(e){if(this.returningFromModalHandoff){this.returningFromModalHandoff=!1;return}this.openedFromProfile=null,this.openedFromProfileOrigin=null;let t=typeof e?.clan==`string`?e.clan.trim():typeof e?.tag==`string`?e.tag.trim():``;t&&this.openDetail(t.toUpperCase()),this.loadMyClans()}onClose(){this.preserveStateForModalHandoff||(this.openedFromProfile=null,this.openedFromProfileOrigin=null,this.activeTab=`my-clans`,this.previousListTab=`my-clans`,this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.browseCache=null,this.detailCache=null,this.gameHistoryCache=null,this.gameHistoryScrollTop=0,this.returningFromModalHandoff=!1)}async loadMyClans(){this.loading=!0;try{let e=await de();if(!this.isModalOpen)return;if(!e||Object.keys(e.user).length===0){this.signedOut=!0,this.myPublicId=null,this.myPendingRequests=[],this.myClanRoles=new Map,this.myClans=[];return}this.signedOut=!1,this.myPublicId=e.player.publicId,this.myPendingRequests=e.player.clanRequests??[];let t=new Map,n=[];for(let r of e.player.clans??[])t.set(r.tag,r.role),n.push({tag:r.tag,name:r.name,description:``,isOpen:!1,memberCount:r.memberCount,softBalance:r.softBalance,hardBalance:r.hardBalance});this.myClanRoles=t,this.myClans=n}finally{this.loading=!1}}renderInner(){return this.loading?this.renderLoadingSpinner():this.view===`my-requests`?h`<clan-my-requests-view
        .myPendingRequests=${this.myPendingRequests}
        @navigate-back=${()=>this.view=`list`}
        @request-withdrawn=${e=>{this.myPendingRequests=this.myPendingRequests.filter(t=>t.tag!==e.detail.tag),this.myPendingRequests.length===0&&(this.view=`list`)}}
      ></clan-my-requests-view>`:this.selectedClanTag?this.view===`manage`?h`<clan-manage-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          .myPublicId=${this.myPublicId}
          .myRole=${this.myRole}
          @navigate-detail=${()=>this.view=`detail`}
          @navigate-bans=${()=>this.view=`bans`}
          @navigate-transfer=${()=>this.view=`transfer`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @clan-updated=${e=>{this.selectedClan&&={...this.selectedClan,...e.detail},this.detailCache=null,y()}}
          @clan-disbanded=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.myClans=this.myClans.filter(t=>t.tag!==e.detail.tag),this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        ></clan-manage-view>`:this.view===`transfer`?h`<clan-transfer-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @leadership-transferred=${()=>{this.loadMyClans().then(()=>this.openDetail(this.selectedClanTag))}}
        ></clan-transfer-view>`:this.view===`requests`?h`<clan-requests-view
          .clanTag=${this.selectedClanTag}
          .selectedClan=${this.selectedClan}
          @navigate-back=${()=>this.view=`detail`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @request-approved=${()=>{this.selectedClan&&={...this.selectedClan,memberCount:(this.selectedClan.memberCount??0)+1},this.detailCache=null}}
        ></clan-requests-view>`:this.view===`bans`?h`<clan-bans-view
          .clanTag=${this.selectedClanTag}
          @navigate-back=${()=>this.view=`manage`}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-bans-view>`:this.activeTab===`donations`?h`<clan-donations-view
          .clanTag=${this.selectedClanTag}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        ></clan-donations-view>`:this.activeTab===`game-history`?h`<clan-game-history-view
          .clanTag=${this.selectedClanTag}
          .cachedState=${this.gameHistoryCache?.tag===this.selectedClanTag?this.gameHistoryCache:null}
          @history-updated=${e=>{this.gameHistoryCache=e.detail}}
          @view-stats=${e=>this.openGameStats(e.detail.gameId)}
          @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
          @close-clan-modal=${()=>this.close()}
        ></clan-game-history-view>`:h`<clan-detail-view
        .clanTag=${this.selectedClanTag}
        .cachedClan=${this.selectedClan}
        .myPublicId=${this.myPublicId}
        .myClanRoles=${this.myClanRoles}
        .myPendingRequests=${this.myPendingRequests}
        .detailTab=${this.activeTab===`members`?`members`:`overview`}
        .cachedDetail=${this.detailCache?.tag===this.selectedClanTag?this.detailCache:null}
        @navigate-back=${()=>{this.backToProfile()||(this.view=`list`,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,this.gameHistoryCache=null,this.setActiveTab(this.previousListTab))}}
        @detail-loaded=${e=>{this.selectedClan=e.detail.clan,this.myRole=e.detail.myRole,this.detailCache={tag:e.detail.clan.tag,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount}}}
        @members-loaded=${e=>{!this.detailCache||this.detailCache.tag!==this.selectedClanTag||(this.detailCache={...this.detailCache,members:e.detail.members,membersTotal:e.detail.membersTotal,pendingRequestCount:e.detail.pendingRequestCount})}}
        @view-profile=${e=>this.openPlayerProfile(e.detail.publicId)}
        @navigate-manage=${()=>this.view=`manage`}
        @navigate-requests=${()=>this.view=`requests`}
        @clan-donated=${e=>{this.selectedClan=e.detail.clan,this.myClans=this.myClans.map(t=>t.tag===e.detail.clan.tag?{...t,softBalance:e.detail.clan.softBalance,hardBalance:e.detail.clan.hardBalance}:t)}}
        @clan-joined=${e=>{this.myClanRoles=new Map([...this.myClanRoles,[e.detail.tag,`member`]]),this.detailCache=null,this.openDetail(e.detail.tag)}}
        @clan-left=${e=>{let t=new Map(this.myClanRoles);t.delete(e.detail.tag),this.myClanRoles=t,this.selectedClan=null,this.selectedClanTag=``,this.myRole=null,this.detailCache=null,!this.backToProfile()&&(this.view=`list`,this.setActiveTab(this.previousListTab))}}
        @request-sent=${e=>{this.myPendingRequests=[...this.myPendingRequests,{tag:e.detail.tag,name:e.detail.name,createdAt:new Date().toISOString()}]}}
      ></clan-detail-view>`:this.activeTab===`map`?this.mapComingSoon?h`<div class="flex h-full items-center justify-center">
          <p class="text-white/40 text-sm">
            ${v(`clan_modal.map_coming_soon`)}
          </p>
        </div>`:this.isModalOpen?h`<clan-map-view class="block h-full"></clan-map-view>`:h``:h`
      ${this.activeTab===`my-clans`?this.renderMyClans():h`<clan-browse-view
            .myClanRoles=${this.myClanRoles}
            .myPendingRequests=${this.myPendingRequests}
            .cachedState=${this.browseCache}
            @browse-updated=${e=>{this.browseCache=e.detail}}
            @clan-select=${e=>this.openDetail(e.detail.tag)}
          ></clan-browse-view>`}
    `}openDetail(e){this.selectedClanTag!==e&&(this.gameHistoryCache=null),qt(this.activeTab)&&(this.previousListTab=this.activeTab),this.selectedClanTag=e,this.view=`detail`,Ne.syncArgs(`clan`,{clan:e,tag:null}),this.setActiveTab(`overview`)}openGameStats(e){let t=document.querySelector(`game-stats-modal`);if(t){this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0,this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}openPlayerProfile(e){let t=document.querySelector(`player-profile-modal`);if(t){this.profileOpenedFromTab=this.activeTab===`game-history`||this.activeTab===`donations`?this.activeTab:`members`,this.profileOpenedFromTab===`game-history`&&(this.gameHistoryScrollTop=this.modalEl?.getScrollTop()??0),this.preserveStateForModalHandoff=!0;try{t.openFromClan(e)}finally{this.preserveStateForModalHandoff=!1}}}returnFromPlayerProfile(){if(!this.selectedClanTag){this.open({});return}if(this.view!==`detail`){this.returningFromModalHandoff=!0,this.open({clan:this.selectedClanTag});return}this.profileOpenedFromTab===`game-history`?this.returnToGameHistory():this.returnToDetailTab(this.profileOpenedFromTab)}openFromProfile(e,t,n){this.open({clan:e}),this.openedFromProfile=t,this.openedFromProfileOrigin=n}returnToDetailTab(e){let t=this.selectedClanTag;t&&(this.returningFromModalHandoff=!0,this.open({clan:t,tab:e}))}returnToGameHistory(){let e=this.selectedClanTag;e&&(this.returningFromModalHandoff=!0,this.open({clan:e,tab:`game-history`}),this.restoreGameHistoryScroll())}async restoreGameHistoryScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`clan-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gameHistoryScrollTop)}renderMyClans(){if(this.signedOut)return Ue(()=>{this.close(),window.showPage?.(`page-account`)},v(`clan_modal.sign_in_for_clans`));let e=this.myClans.length>0,t=this.myPendingRequests.length>0;return!e&&!t?h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <p class="text-white/40 text-sm mb-4">
            ${v(`clan_modal.no_clans`)}
          </p>
          <button
            @click=${()=>this.setActiveTab(`browse`)}
            class="px-6 py-2 text-sm font-bold text-white uppercase tracking-wider bg-malibu-blue hover:bg-aquarius active:bg-malibu-blue/80 rounded-lg transition-all"
          >
            ${v(`clan_modal.browse`)}
          </button>
        </div>
      `:h`
      <div class="space-y-3">
        ${t?this.renderPendingRequestsButton():``}
        ${this.myClans.map(e=>h`
            <clan-card
              .clan=${e}
              .clanRole=${this.myClanRoles.get(e.tag)}
              @clan-select=${e=>this.openDetail(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `}renderPendingRequestsButton(){let e=this.myPendingRequests.length;return h`
      <button
        @click=${()=>this.view=`my-requests`}
        class="w-full flex items-center justify-between bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 p-4 transition-all cursor-pointer group"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="text-left">
            <span class="text-amber-400 text-sm font-bold">
              ${v(`clan_modal.pending_applications`)}
            </span>
            <span class="text-amber-400/60 text-xs block">
              ${v(`clan_modal.pending_requests_count`,{count:e})}
            </span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span
            class="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
          >
            ${e}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-amber-400/40 group-hover:text-amber-400/70 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    `}};g([u()],Q.prototype,`view`,void 0),g([u()],Q.prototype,`loading`,void 0),g([u()],Q.prototype,`signedOut`,void 0),g([u()],Q.prototype,`myClans`,void 0),g([u()],Q.prototype,`myPendingRequests`,void 0),g([u()],Q.prototype,`selectedClanTag`,void 0),g([u()],Q.prototype,`selectedClan`,void 0),g([u()],Q.prototype,`myRole`,void 0),g([u()],Q.prototype,`myClanRoles`,void 0),Q=g([d(`clan-modal`)],Q);function Jt(e){return`${f.shareBase()}#modal=profile&publicID=${encodeURIComponent(e)}`}var $=class extends Pe{constructor(...e){super(...e),this.routerName=`profile`,this.publicId=null,this.username=null,this.statsTree=null,this.clans=[],this.loading=!1,this.openedFrom=null,this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.loadGeneration=0}modalConfig(){return{maxWidth:`960px`,tabs:[{key:`stats`,label:v(`account_modal.tab_stats`)},{key:`games`,label:v(`account_modal.tab_games`)},{key:`clans`,label:v(`account_modal.tab_clans`)}]}}renderHeaderSlot(){return S({title:v(`player_profile.title`),titleContent:this.username?h`<span
            class="text-white text-xl lg:text-2xl font-bold tracking-wide break-words hyphens-auto min-w-0 inline-flex items-center gap-2"
          >
            ${Be(this.username)}
            ${ue(this.username)?Re(`w-5 h-5`):p}
          </span>`:void 0,onBack:()=>this.back(),ariaLabel:v(`common.back`),rightContent:this.publicId?h`
            <player-name
              class="shrink-0"
              .publicId=${this.publicId}
              .copyText=${Jt(this.publicId)}
            ></player-name>
          `:void 0})}renderBody(e){return h`
      <div class="custom-scrollbar mr-1">
        <div class="p-6">${this.renderTab(e)}</div>
      </div>
    `}renderTab(e){switch(e){case`games`:return this.renderGames();case`clans`:return this.renderClans();default:return this.renderProfile()}}renderClans(){return this.loading?this.renderLoadingSpinner(v(`player_profile.loading`)):this.profileLoaded()?this.clans.length===0?h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🛡️</span>
          <p class="text-white/40 text-sm">
            ${v(`player_profile.no_clans`)}
          </p>
        </div>
      `:h`
      <div class="space-y-3">
        ${this.clans.map(e=>h`
            <clan-card
              .clan=${{tag:e.tag,name:e.name,description:``,isOpen:!1,memberCount:e.memberCount,softBalance:e.softBalance,hardBalance:e.hardBalance}}
              .clanRole=${e.role}
              @clan-select=${e=>this.openClan(e.detail.tag)}
            ></clan-card>
          `)}
      </div>
    `:this.renderNotFound()}openClan(e){let t=this.publicId;t!==null&&document.querySelector(`clan-modal`)?.openFromProfile(e,t,this.openedFrom)}returnFromClan(e,t){this.open({publicID:e,tab:`clans`}),this.openedFrom=t}renderGames(){let e=this.publicId;return e?h`
      <player-game-history-view
        .publicId=${e}
        .cachedState=${this.gameHistoryCache?.publicId===e?this.gameHistoryCache:null}
        @history-updated=${e=>{this.gameHistoryCache=e.detail}}
        @view-stats=${e=>this.openGameStats(e.detail.gameId)}
        @view-game=${e=>this.viewGame(e.detail.gameId)}
      ></player-game-history-view>
    `:h`
        <div class="flex flex-col items-center justify-center p-12 text-center">
          <span class="text-4xl mb-4">🎮</span>
          <p class="text-white/40 text-sm">
            ${v(`account_modal.no_games`)}
          </p>
        </div>
      `}renderProfile(){return this.loading?this.renderLoadingSpinner(v(`player_profile.loading`)):this.profileLoaded()?h`
      <player-stats-tree-view
        .statsTree=${this.statsTree}
      ></player-stats-tree-view>
    `:this.renderNotFound()}profileLoaded(){return!!this.publicId&&!!this.statsTree}renderNotFound(){return h`
      <div class="flex flex-col items-center justify-center p-12 text-center">
        <span class="text-4xl mb-4">📊</span>
        <p class="text-white/40 text-sm">
          ${v(`player_profile.not_found`)}
        </p>
      </div>
    `}onOpen(e){let t=typeof e?.publicID==`string`&&e.publicID.length>0?e.publicID:null;if(this.restoreGamesScrollAfterOpen&&t!==null&&t===this.publicId){this.restoreGamesScrollAfterOpen=!1,this.restoreGamesScroll();return}this.openedFrom=null,this.publicId=t,this.username=null,this.statsTree=null,this.clans=[],this.gameHistoryCache=null,this.gamesScrollTop=0,this.restoreGamesScrollAfterOpen=!1,this.loading=t!==null,t!==null&&this.loadProfile(t)}async loadProfile(e){let t=++this.loadGeneration,n=await ce(e);t!==this.loadGeneration||this.publicId!==e||(this.loading=!1,this.statsTree=n===!1?null:n.stats,this.username=n===!1?null:n.username??null,this.clans=n===!1?[]:n.clans??[])}onClose(){}openGameStats(e){this.gamesScrollTop=this.modalEl?.getScrollTop()??0,document.querySelector(`game-stats-modal`)?.openFromProfile(e)}viewGame(e){this.close();let t=encodeURIComponent(e),n=re(f.gamePath(e));history.pushState({join:e},``,n),window.dispatchEvent(new CustomEvent(`join-changed`,{detail:{gameId:t}}))}returnToGames(){this.restoreGamesScrollAfterOpen=!0,this.open({publicID:this.publicId??void 0,tab:`games`})}async restoreGamesScroll(){await this.updateComplete,await this.modalEl?.updateComplete,await this.querySelector(`player-game-history-view`)?.updateComplete,this.modalEl?.setScrollTop(this.gamesScrollTop)}openFromClan(e){this.open({publicID:e}),this.openedFrom=`clan`}openFromLeaderboard(e){this.open({publicID:e}),this.openedFrom=`leaderboard`}openFromAccount(e){this.open({publicID:e}),this.openedFrom=`account`}back(){let e=this.openedFrom;this.close(),e===`clan`?document.querySelector(`clan-modal`)?.returnFromPlayerProfile():e===`leaderboard`?document.querySelector(`leaderboard-modal`)?.open():e===`account`&&document.querySelector(`account-modal`)?.returnToFriends()}};g([u()],$.prototype,`publicId`,void 0),g([u()],$.prototype,`username`,void 0),g([u()],$.prototype,`statsTree`,void 0),g([u()],$.prototype,`clans`,void 0),g([u()],$.prototype,`loading`,void 0),$=g([d(`player-profile-modal`)],$);export{$ as PlayerProfileModal,F as n,Jt as playerProfileUrl,Q as t};