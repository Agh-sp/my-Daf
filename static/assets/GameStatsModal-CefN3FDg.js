import"./UserSettings-BhVaDNmN.js";import{d as e,u as t}from"./Platform-CHHnD-iM.js";import{t as n}from"./AssetUrls-DSHI1MKX.js";import{$ as r,P as i,Q as a,et as o,st as s,t as c,tt as l,y as u,z as d}from"./decorate-DDFJEDDP.js";import{f}from"./Api-BUc1dCNJ.js";import{Wt as p,gt as m,ht as h,mt as g}from"./index-BCzm4E-v.js";import"./CopyButton-HFPoFVtq.js";import{t as _}from"./Format-Dhp90E0J.js";function v(e){let t=[];for(let n of e){let e=y(n.start),r=t[t.length-1];r&&r.day===e?r.items.push(n):t.push({day:e,items:[n]})}return t}function y(e){let t=new Date(e);return Number.isFinite(t.getTime())?`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`:e}var b=[`common.month_jan`,`common.month_feb`,`common.month_mar`,`common.month_apr`,`common.month_may`,`common.month_jun`,`common.month_jul`,`common.month_aug`,`common.month_sep`,`common.month_oct`,`common.month_nov`,`common.month_dec`];function x(e){let t=new Date(`${e}T00:00:00`);if(!Number.isFinite(t.getTime()))return e;let n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=Math.round((r.getTime()-i.getTime())/(1440*60*1e3));if(a===0)return d(`clan_modal.history_today`);if(a===1)return d(`clan_modal.history_yesterday`);let o=d(b[t.getMonth()]);return d(`clan_modal.history_date_full`,{day:String(t.getDate()),month:o,year:String(t.getFullYear())})}function S(e){let t=new Date(e);if(!Number.isFinite(t.getTime()))return e;let n=new Date,r=t.toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`});return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()?d(`clan_modal.history_today_at`,{time:r}):d(`clan_modal.history_date_at`,{date:t.toLocaleDateString(),time:r})}var C=function(e){return e.ConquestHumans=`ConquestHumans`,e.ConquestNations=`ConquestNations`,e.ConquestBots=`ConquestBots`,e.Atoms=`Atoms`,e.Hydros=`Hydros`,e.MIRV=`MIRV`,e.TotalGold=`TotalGold`,e.StolenGold=`StolenGold`,e.NavalTrade=`NavalTrade`,e.TrainTrade=`TrainTrade`,e.ConqueredGold=`ConqueredGold`,e.Lifetime=`Lifetime`,e}({}),w={Lifetime:`game_info_modal.survival_time`,ConquestHumans:`game_info_modal.num_of_conquests_humans`,ConquestNations:`game_info_modal.num_of_conquests_nations`,ConquestBots:`game_info_modal.num_of_conquests_bots`,Atoms:`game_info_modal.atoms`,Hydros:`game_info_modal.hydros`,MIRV:`game_info_modal.mirv`,TotalGold:`game_info_modal.all_gold`,StolenGold:`game_info_modal.stolen_gold`,NavalTrade:`game_info_modal.naval_trade`,TrainTrade:`game_info_modal.train_trade`,ConqueredGold:`game_info_modal.conquest_gold`};function T(e){return e.stats!==void 0&&(e.stats.units!==void 0||e.stats.killedAt!==void 0||e.stats.conquests!==void 0)}var E=class{constructor(e){this.duration=e.info.duration,this.players=this.summarizePlayers(e)}get allPlayers(){return this.players}sortedBy(e){return[...this.players].sort((t,n)=>this.getAdjustedScore(n,e)-this.getAdjustedScore(t,e))}score(e,t){return this.getScore(e,t)}summarizePlayers(e){let t={};for(let n of e.info.players){if(n===void 0||!T(n))continue;let e=n.stats,r=(e.gold??[]).map(e=>BigInt(e??0)),i=(e.conquests??[]).map(e=>BigInt(e??0));t[n.clientID]={id:n.clientID,username:n.username,clanTag:n.clanTag,conquests:i,flag:n.cosmetics?.flag??void 0,killedAt:e.killedAt===void 0||e.killedAt===null?void 0:Number(e.killedAt),gold:r,atoms:Number(e.bombs?.abomb?.[0])||0,hydros:Number(e.bombs?.hbomb?.[0])||0,mirv:Number(e.bombs?.mirv?.[0])||0,winner:!1}}let n=e.info.winner;if(n!==void 0&&Array.isArray(n)&&n.length>0){if(n[0]===`player`){let e=n[1];t[e]&&(t[e].winner=!0)}else if(n[0]===`team`)for(let e=2;e<n.length;e++){let r=n[e];t[r]&&(t[r].winner=!0)}}return Object.values(t)}getScore(e,t){switch(t){case`Lifetime`:return e.killedAt===void 0?100:e.killedAt/Math.max(this.duration,1)*10;case`ConquestHumans`:return Number(e.conquests[0]??0n);case`ConquestNations`:return Number(e.conquests[1]??0n);case`ConquestBots`:return Number(e.conquests[2]??0n);case`Atoms`:return e.atoms;case`Hydros`:return e.hydros;case`MIRV`:return e.mirv;case`TotalGold`:return Number(e.gold.reduce((e,t)=>e+t,0n));case`StolenGold`:return Number(e.gold[3]??0n);case`NavalTrade`:return Number(e.gold[2]??0n);case`ConqueredGold`:return Number(e.gold[1]??0n);case`TrainTrade`:{let t=e.gold[4]??0n,n=e.gold[5]??0n;return Number(t+n)}}}getAdjustedScore(e,t){let n=this.getScore(e,t);return e.winner&&(n+=.1),n}},D=n(`images/GoldCoinIcon.svg`),O=class extends l{constructor(...e){super(...e),this.bestScore=1,this.rank=1,this.score=0,this.currentPlayer=!1,this.failedFlag=null}createRenderRoot(){return this}render(){if(!this.player)return s``;let{player:e}=this;return s`
      <li
        data-player-row
        class="group relative grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2 px-3 py-3 transition-colors duration-150 hover:bg-white/[0.055] sm:grid-cols-[2.5rem_minmax(0,1fr)_minmax(13rem,0.9fr)] sm:px-5 sm:py-2.5 ${e.winner?`bg-gradient-to-r from-yellow-400/[0.08] via-yellow-400/[0.025] to-transparent`:this.currentPlayer?`bg-malibu-blue/10`:`bg-transparent`}"
      >
        ${e.winner?s`<div
              class="absolute inset-y-0 left-0 w-0.5 bg-yellow-400/70"
            ></div>`:``}
        ${this.renderRank()} ${this.renderIdentity()}
        <div class="col-start-2 min-w-0 sm:col-start-auto">
          ${this.renderPlayerInfo()}
        </div>
      </li>
    `}willUpdate(e){e.has(`player`)&&e.get(`player`)?.flag!==this.player?.flag&&(this.failedFlag=null)}renderRank(){return s`
      <div
        class="flex size-8 items-center justify-center rounded-lg border font-mono text-xs font-bold tabular-nums sm:size-9 sm:text-sm ${{1:`border-yellow-400/20 bg-yellow-400/10 text-yellow-300`,2:`border-slate-300/15 bg-slate-300/10 text-slate-300`,3:`border-amber-600/20 bg-amber-600/10 text-amber-500`}[this.rank]??`border-white/[0.06] bg-white/[0.035] text-white/35`}"
        aria-label=${String(this.rank)}
      >
        ${this.rank}
      </div>
    `}renderPlayerIcon(){return s`
      <div class="relative shrink-0">
        ${this.renderIcon()}
        ${this.player.winner?this.renderCrownIcon():this.player.killedAt===void 0?``:this.renderEliminatedIcon()}
      </div>
    `}renderCrownIcon(){return s`
      <span
        data-player-status="winner"
        class="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full border border-yellow-300/40 bg-yellow-400 text-yellow-950 shadow-lg"
        role="img"
        aria-label=${d(`clan_modal.history_result_victory`)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-3"
          aria-hidden="true"
        >
          <path
            d="m4 7 4.2 3L12 5l3.8 5L20 7l-1.5 10h-13L4 7Zm2 12h12v2H6v-2Z"
          />
        </svg>
      </span>
    `}renderEliminatedIcon(){return s`
      <span
        data-player-status="eliminated"
        class="absolute -bottom-1 -right-1 leading-none drop-shadow-md"
        role="img"
        aria-label=${d(`clan_modal.history_result_defeat`)}
      >
        <span class="text-sm leading-none" aria-hidden="true">💀</span>
      </span>
    `}renderIdentity(){return s`
      <div class="flex min-w-0 items-center gap-3">
        ${this.renderPlayerIcon()}
        <div
          data-player-identity
          class="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          ${this.player.clanTag?s`<div
                data-player-clan-tag
                class="inline-flex min-w-0 max-w-[40%] shrink-0 rounded-md border border-malibu-blue/20 bg-malibu-blue/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-aquarius/85"
              >
                <span class="truncate">${this.player.clanTag}</span>
              </div>`:``}
          <div
            data-player-name
            class="min-w-0 flex-1 truncate text-sm font-semibold tracking-wide text-white/85 sm:text-[15px]"
            title=${this.player.username}
          >
            ${this.player.username}
          </div>
        </div>
      </div>
    `}renderPlayerInfo(){switch(this.rankType){case C.Lifetime:case C.ConquestHumans:case C.ConquestNations:case C.ConquestBots:return this.renderScoreAsBar();case C.Atoms:case C.Hydros:case C.MIRV:return this.renderBombScore();case C.TotalGold:case C.ConqueredGold:case C.StolenGold:return this.renderGoldScore();case C.NavalTrade:case C.TrainTrade:return this.renderTradeScore();default:return s``}}renderScoreAsBar(){let e=this.rankType===C.Lifetime,t=`${Number(this.score).toFixed(0)}${e?`%`:``}`;return s`
      <div class="flex w-full items-center gap-3">
        ${this.renderScoreBar(t)}
        <div
          data-player-score
          aria-hidden="true"
          class="flex min-h-10 shrink-0 items-center justify-end gap-2 px-3 py-2 font-mono text-sm font-bold tabular-nums text-white/75"
        >
          ${t}
        </div>
      </div>
    `}renderScoreBar(e){let t=Math.max(this.bestScore,1),n=Math.max(this.score,0),r=Math.max(t,n),i=Math.min(Math.max(this.score/t*100,0),100);return s`
      <div class="w-full">
        <div
          role="progressbar"
          aria-label=${this.scoreLabel()}
          aria-valuemin="0"
          aria-valuemax=${r}
          aria-valuenow=${n}
          aria-valuetext=${e}
          class="h-2 w-full overflow-hidden rounded-full bg-white/[0.07]"
        >
          <div
            class="h-full rounded-full bg-gradient-to-r from-malibu-blue/65 to-aquarius shadow-[0_0_10px_rgba(63,169,245,0.2)] w-(--width)"
            style="--width: ${i}%;"
          ></div>
        </div>
      </div>
    `}renderBombScore(){return this.renderValueScore(!1)}renderGoldScore(){return this.renderValueScore(!0)}renderTradeScore(){return this.renderValueScore(!0)}renderValueScore(e){let t=_(this.score);return s`
      <div
        data-player-score
        aria-label=${`${this.scoreLabel()}, ${t}`}
        class="flex min-h-10 items-center justify-end gap-2 px-3 py-2 font-mono text-sm font-bold tabular-nums text-white/75"
      >
        ${e?this.renderCoinIcon():``}
        <div>${t}</div>
      </div>
    `}scoreLabel(){return`${this.player.username}: ${d(w[this.rankType])}`}renderIcon(){let e=this.getFlagUrl();return e?s`<img
        data-player-avatar="flag"
        src=${e}
        alt=""
        draggable="false"
        decoding="async"
        @error=${()=>this.handleFlagError()}
        class="size-10 rounded-xl border border-white/10 bg-white/[0.055] object-contain p-1"
      />`:s`
      <div
        data-player-avatar="fallback"
        class="flex size-10 items-center justify-center rounded-xl border border-malibu-blue/15 bg-gradient-to-br from-malibu-blue/20 to-white/[0.04] text-xs font-bold uppercase tracking-wide text-aquarius/80"
        aria-hidden="true"
      >
        ${this.initials()}
      </div>
    `}getFlagUrl(){if(!this.player.flag||this.failedFlag===this.player.flag)return null;try{return n(this.player.flag)}catch{return null}}handleFlagError(){this.failedFlag=this.player.flag??null,this.requestUpdate()}initials(){let e=this.player.username.trim();return e.length>0?e.slice(0,2).toUpperCase():`?`}renderCoinIcon(){return s`<img
      src=${D}
      width="18"
      height="18"
      class="size-[18px] shrink-0"
      alt=""
      aria-hidden="true"
    />`}};c([r({type:Object})],O.prototype,`player`,void 0),c([r({type:String})],O.prototype,`rankType`,void 0),c([r({type:Number})],O.prototype,`bestScore`,void 0),c([r({type:Number})],O.prototype,`rank`,void 0),c([r({type:Number})],O.prototype,`score`,void 0),c([r({type:Boolean})],O.prototype,`currentPlayer`,void 0),O=c([o(`player-row`)],O);var k=[{type:C.ConquestHumans,label:`game_info_modal.num_of_conquests_humans`},{type:C.ConquestNations,label:`game_info_modal.num_of_conquests_nations`},{type:C.ConquestBots,label:`game_info_modal.num_of_conquests_bots`},{type:C.Atoms,label:`game_info_modal.atoms`},{type:C.Hydros,label:`game_info_modal.hydros`},{type:C.MIRV,label:`game_info_modal.mirv`}],A=[{type:C.TotalGold,label:`game_info_modal.total_gold`},{type:C.ConqueredGold,label:`game_info_modal.conquered`},{type:C.StolenGold,label:`game_info_modal.pirate`},{type:C.TrainTrade,label:`game_info_modal.train_trade`},{type:C.NavalTrade,label:`game_info_modal.naval_trade`}],j=(e,t)=>e.some(e=>e.type===t),M=e=>j(A,e),N=e=>j(k,e),P=class extends l{constructor(...e){super(...e),this.rankType=C.Lifetime}onSort(e){this.dispatchEvent(new CustomEvent(`sort`,{detail:e}))}renderMainButtons(){return s`
      <div
        role="group"
        aria-label=${d(`game_list.stats`)}
        class="grid grid-cols-3 gap-1 rounded-xl border border-white/10 bg-white/[0.04] p-1"
      >
        ${this.renderButton(C.Lifetime,this.rankType===C.Lifetime,`game_info_modal.duration`,this.renderClockIcon())}
        ${this.renderButton(C.ConquestHumans,N(this.rankType),`game_info_modal.war`,this.renderWarIcon())}
        ${this.renderButton(C.TotalGold,M(this.rankType),`game_info_modal.economy`,this.renderEconomyIcon())}
      </div>
    `}renderButton(e,t,n,r){return s`
      <button
        type="button"
        data-ranking-category=${e}
        aria-pressed=${t}
        class="flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-200 sm:gap-2 sm:px-4 sm:text-xs sm:tracking-widest ${t?`border-malibu-blue/30 bg-malibu-blue/20 text-aquarius shadow-(--shadow-malibu-blue-soft)`:`border-transparent text-white/40 hover:bg-white/5 hover:text-white/75`} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquarius/70"
        @click=${()=>this.onSort(e)}
      >
        <span class="hidden sm:block" aria-hidden="true">${r}</span>
        <span class="truncate">${d(n)}</span>
      </button>
    `}renderMetricSelector(e,t){let n=e.length===6;return s`
      <div
        role="group"
        aria-label=${t}
        class="mt-2 grid grid-cols-6 gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 ${n?`sm:grid-cols-6`:`sm:grid-cols-5`}"
      >
        ${e.map((e,t)=>this.renderMetricButton(e.type,e.label,n?`col-span-2`:t<2?`col-span-3`:`col-span-2`))}
      </div>
    `}renderMetricButton(e,t,n){let r=this.rankType===e;return s`
      <button
        type="button"
        data-ranking-metric=${e}
        aria-pressed=${r}
        @click=${()=>this.onSort(e)}
        title=${d(t)}
        class="${n} min-h-11 min-w-0 rounded-lg border px-1.5 py-2 text-[10px] font-bold uppercase leading-tight tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquarius/70 sm:col-span-1 sm:px-2 ${r?`border-malibu-blue/30 bg-malibu-blue/15 text-aquarius`:`border-transparent text-white/40 hover:border-white/10 hover:bg-white/[0.06] hover:text-white/75`}"
      >
        <span class="block min-w-0 break-words">${d(t)}</span>
      </button>
    `}renderClockIcon(){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="size-4"
    >
      <circle cx="12" cy="12" r="8.5" stroke-width="1.7" />
      <path d="M12 7.5V12l3 2" stroke-width="1.7" stroke-linecap="round" />
    </svg>`}renderWarIcon(){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="size-4"
    >
      <path
        d="m6 4 12 12m0-12L6 16m-2 0 4 4m12-4-4 4M5 3l4 1-5 5-1-4 2-2Zm14 0-4 1 5 5 1-4-2-2Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}renderEconomyIcon(){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class="size-4"
    >
      <ellipse cx="12" cy="7" rx="7.5" ry="3.5" stroke-width="1.6" />
      <path
        d="M4.5 7v5c0 2 3.4 3.5 7.5 3.5s7.5-1.5 7.5-3.5V7m-15 5v5c0 2 3.4 3.5 7.5 3.5s7.5-1.5 7.5-3.5v-5"
        stroke-width="1.6"
      />
    </svg>`}render(){return s`
      ${this.renderMainButtons()}
      ${N(this.rankType)?this.renderMetricSelector(k,d(`game_info_modal.war`)):M(this.rankType)?this.renderMetricSelector(A,d(`game_info_modal.economy`)):``}
    `}createRenderRoot(){return this}};c([r({type:String})],P.prototype,`rankType`,void 0),P=c([o(`ranking-controls`)],P);var F=class extends l{constructor(...e){super(...e),this.gameId=null,this.rankType=C.Lifetime,this.mapImage=null,this.gameInfo=null,this.rankedPlayers=[],this.isLoadingGame=!0,this.loadFailed=!1,this.ranking=null,this.requestedGameId=null,this.loadGeneration=0}createRenderRoot(){return this}updated(e){e.has(`gameId`)&&this.gameId!==this.requestedGameId&&(this.requestedGameId=this.gameId,this.gameId?this.fetchGame(this.gameId):(++this.loadGeneration,this.isLoadingGame=!1,this.loadFailed=!1,this.mapImage=null,this.gameInfo=null,this.ranking=null,this.rankedPlayers=[]))}render(){return this.gameId?s`
      <div class="w-full max-w-[800px] mx-auto">
        ${this.isLoadingGame?this.renderLoadingAnimation():this.loadFailed?this.renderError():this.renderRanking()}
      </div>
    `:s``}renderRanking(){return this.rankedPlayers.length===0?s`
        ${this.renderGameInfo()}
        <div
          class="mt-5 flex min-h-56 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-white"
        >
          <div
            class="mb-4 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/35"
            aria-hidden="true"
          >
            ${this.renderTrophyIcon(`size-6`)}
          </div>
          <p class="max-w-md text-sm leading-relaxed text-white/60">
            ${d(`game_info_modal.no_winner`)}
          </p>
        </div>
      `:s`
      ${this.renderGameInfo()}
      <div class="mt-5 flex flex-col gap-3">
        <ranking-controls
          .rankType=${this.rankType}
          @sort=${this.sort}
        ></ranking-controls>
        ${this.renderSummaryTable()}
      </div>
    `}renderError(){return s`
      <div
        role="alert"
        class="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-red-400/15 bg-red-400/[0.04] p-8 text-center text-white"
      >
        <div
          class="mb-4 flex size-12 items-center justify-center rounded-xl border border-red-300/15 bg-red-400/10 text-red-200/70"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="size-6"
          >
            <path
              d="M12 9v4m0 4h.01M10.3 3.8 2.4 17.5A2 2 0 0 0 4.1 20h15.8a2 2 0 0 0 1.7-2.5L13.7 3.8a2 2 0 0 0-3.4 0Z"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p class="mb-5 text-sm text-white/65">
          ${d(`game_info_modal.load_failed`)}
        </p>
        <button
          type="button"
          @click=${()=>this.retry()}
          class="rounded-lg border border-malibu-blue/40 bg-malibu-blue/20 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-aquarius transition-colors hover:border-malibu-blue/60 hover:bg-malibu-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquarius/70"
        >
          ${d(`game_info_modal.retry`)}
        </button>
      </div>
    `}retry(){this.gameId&&this.fetchGame(this.gameId)}renderLoadingAnimation(){return m(d(`game_info_modal.loading_game_info`))}sort(e){this.rankType=e.detail,this.updateRanking()}updateRanking(){this.ranking&&(this.rankedPlayers=this.ranking.sortedBy(this.rankType))}renderGameInfo(){let e=this.gameInfo;if(!e)return s``;let n=u(e.config.gameMap)??e.config.gameMap,r=new Date(e.start).toISOString();return s`
      <div
        data-game-summary
        class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] shadow-[0_18px_50px_rgba(0,0,0,0.2)]"
      >
        <div class="grid sm:grid-cols-[240px_minmax(0,1fr)]">
          <div
            class="relative min-h-36 overflow-hidden border-b border-white/10 bg-deep-navy sm:min-h-44 sm:border-b-0 sm:border-r"
          >
            ${this.mapImage?s`<img
                  data-map-image
                  src=${this.mapImage}
                  alt=${n}
                  draggable="false"
                  decoding="async"
                  @error=${()=>this.handleMapImageError()}
                  class="absolute inset-0 h-full w-full object-cover"
                />`:this.renderMapFallback()}
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/10 sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/25"
            ></div>
          </div>
          <div class="flex min-w-0 flex-col justify-between p-4 sm:p-5">
            <div>
              <div class="mb-2 flex flex-wrap items-center gap-2">
                <span
                  class="rounded-md border border-malibu-blue/25 bg-malibu-blue/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-aquarius"
                >
                  ${d(e.config.gameMode===t.Team?`game_mode.teams`:`game_mode.ffa`)}
                </span>
                <span
                  class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/45"
                >
                  ${this.gameTypeLabel(e.config.gameType)}
                </span>
              </div>
              <h2
                class="truncate text-xl font-bold tracking-wide text-white sm:text-2xl"
                title=${n}
              >
                ${n}
              </h2>
              <div
                data-game-date
                class="mt-2 flex items-center gap-1.5 text-xs font-medium tabular-nums text-white/50"
              >
                <span class="text-aquarius/70" aria-hidden="true">
                  ${this.renderCalendarIcon(`size-3.5`)}
                </span>
                <time datetime=${r}
                  >${S(r)}</time
                >
              </div>
            </div>
            <div class="mt-3 grid grid-cols-2 gap-3">
              ${this.renderInfoMetric(this.renderClockIcon(`size-4`),d(`game_info_modal.duration`),i(e.duration))}
              ${this.renderInfoMetric(this.renderPlayersIcon(`size-4`),d(`game_info_modal.players`),String(e.players.length))}
            </div>
          </div>
        </div>
      </div>
    `}renderInfoMetric(e,t,n){return s`
      <div class="rounded-xl border border-white/[0.08] bg-black/15 p-2.5">
        <div
          class="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/35"
        >
          <span class="text-aquarius/70" aria-hidden="true">${e}</span>
          ${t}
        </div>
        <div class="text-sm font-semibold tabular-nums text-white/85">
          ${n}
        </div>
      </div>
    `}renderMapFallback(){return s`
      <div
        data-map-fallback
        class="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(0,132,209,0.18),transparent_65%)] text-aquarius/35"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="size-12"
        >
          <path
            d="m3 6 5-2 8 3 5-2v13l-5 2-8-3-5 2V6Z"
            stroke-width="1.3"
            stroke-linejoin="round"
          />
          <path d="M8 4v13m8-10v13" stroke-width="1.3" />
        </svg>
      </div>
    `}handleMapImageError(){this.mapImage=null}gameTypeLabel(t){switch(t){case e.Public:return d(`account_modal.games_type_public`);case e.Private:return d(`account_modal.games_type_private`);case e.Singleplayer:return d(`account_modal.games_type_singleplayer`);default:return d(`game_info_modal.unknown_game_type`)}}renderSummaryTable(){let e=this.rankedPlayers.reduce((e,t)=>Math.max(e,this.score(t)),0);return s`
      <section
        aria-label=${d(w[this.rankType])}
        class="overflow-hidden rounded-2xl border border-white/10 bg-black/15 shadow-[0_12px_35px_rgba(0,0,0,0.16)]"
      >
        <ol class="divide-y divide-white/[0.06]">
          ${this.rankedPlayers.map((t,n)=>s`
              <player-row
                class="block"
                .player=${t}
                .rank=${n+1}
                .score=${this.ranking?.score(t,this.rankType)??0}
                .rankType=${this.rankType}
                .bestScore=${e}
              ></player-row>
            `)}
        </ol>
      </section>
    `}renderClockIcon(e){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class=${e}
    >
      <circle cx="12" cy="12" r="8.5" stroke-width="1.7" />
      <path
        d="M12 7.5V12l3 2"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}renderCalendarIcon(e){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class=${e}
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke-width="1.7" />
      <path
        d="M8 3v4m8-4v4M3.5 9.5h17"
        stroke-width="1.7"
        stroke-linecap="round"
      />
    </svg>`}renderPlayersIcon(e){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class=${e}
    >
      <path
        d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19m14-7.8a3 3 0 0 1 2 2.8v1M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-5.7a3 3 0 0 1 0 5.4"
        stroke-width="1.7"
        stroke-linecap="round"
      />
    </svg>`}renderTrophyIcon(e){return s`<svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      class=${e}
    >
      <path
        d="M8 4h8v3.5a4 4 0 0 1-8 0V4Zm4 7.5V16m-3 4h6m-5-4h4M8 6H5v1a4 4 0 0 0 4 4m7-5h3v1a4 4 0 0 1-4 4"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`}score(e){return this.ranking?this.ranking.score(e,this.rankType):0}async fetchGame(e){let t=++this.loadGeneration;this.isLoadingGame=!0,this.loadFailed=!1,this.mapImage=null,this.gameInfo=null,this.ranking=null,this.rankedPlayers=[],this.rankType=C.Lifetime;try{let n=await f(e);if(t!==this.loadGeneration)return;if(!n){this.loadFailed=!0;return}this.gameInfo=n.info,this.ranking=new E(n),this.updateRanking();try{let e=n.info.config.gameMap;this.mapImage=p.getMapData(e).webpPath}catch(e){console.warn(`Failed to load map image:`,e)}}catch(e){t===this.loadGeneration&&(console.warn(`Failed to load game:`,e),this.loadFailed=!0)}finally{t===this.loadGeneration&&(this.isLoadingGame=!1)}}};c([r({type:String})],F.prototype,`gameId`,void 0),c([a()],F.prototype,`rankType`,void 0),c([a()],F.prototype,`mapImage`,void 0),c([a()],F.prototype,`gameInfo`,void 0),c([a()],F.prototype,`rankedPlayers`,void 0),c([a()],F.prototype,`isLoadingGame`,void 0),c([a()],F.prototype,`loadFailed`,void 0),F=c([o(`game-info-view`)],F);var I=class extends h{constructor(...e){super(...e),this.routerName=`stats`,this.gameId=null,this.openedFrom=null}modalConfig(){return{maxWidth:`960px`}}renderHeaderSlot(){return g({title:d(`game_list.stats`),onBack:()=>this.back(),ariaLabel:d(`common.back`),rightContent:this.gameId?s`
            <copy-button
              compact
              class="shrink-0"
              .copyText=${this.gameId}
              .displayText=${this.gameId}
              .showVisibilityToggle=${!1}
            ></copy-button>
          `:void 0})}renderBody(){return s`
      <div class="px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        <game-info-view .gameId=${this.gameId}></game-info-view>
      </div>
    `}onOpen(e){this.gameId=typeof e?.gameID==`string`&&e.gameID.length>0?e.gameID:null}onClose(){this.gameId=null,this.openedFrom=null}openFromAccount(e){this.openedFrom=`account`,this.open({gameID:e})}openFromClan(e){this.openedFrom=`clan`,this.open({gameID:e})}openFromProfile(e){this.openedFrom=`profile`,this.open({gameID:e})}back(){let e=this.openedFrom;this.close(),e===`account`?document.querySelector(`account-modal`)?.returnToGames():e===`profile`?document.querySelector(`player-profile-modal`)?.returnToGames():e===`clan`&&document.querySelector(`clan-modal`)?.returnToGameHistory()}};c([a()],I.prototype,`gameId`,void 0),I=c([o(`game-stats-modal`)],I);export{I as GameStatsModal,x as n,v as r,S as t};