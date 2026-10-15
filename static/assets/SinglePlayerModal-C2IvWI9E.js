import{A as e,M as t,N as n,P as r,Y as i,et as a,nt as o}from"./Platform-ChKbd54A.js";import{Q as s,R as c,et as l,st as u,t as d,z as f}from"./decorate-CgSmyiMM.js";import{Br as p,Ht as m,J as h,Lr as g,St as _,Zt as v,dn as y,ft as b,ir as x,tn as S,vt as C,yt as w}from"./index-BXqdvtGy.js";import{a as T,i as E}from"./ToggleInputCard-DVAHhcuf.js";import{c as D,i as O,l as k,n as A,o as j,r as M,s as N,t as P,u as F}from"./GameConfigHelpers-DrwcdxyM.js";var I=15e3,L=6e4;function R(e,t,n){let r,i=new Promise(e=>{r=setTimeout(()=>e(n()),t)});return Promise.race([e,i]).finally(()=>clearTimeout(r))}var z={selectedMap:a.MiddleEast,selectedDifficulty:e.Easy,bots:400,infiniteGold:!1,infiniteTroops:!1,compactMap:!1,maxTimer:!1,maxTimerValue:void 0,instantBuild:!1,randomSpawn:!1,useRandomMap:!1,gameMode:n.FFA,teamCount:2,goldMultiplier:!1,goldMultiplierValue:void 0,startingGold:!1,startingGoldValue:void 0,disabledUnits:[],customAlliances:!1,customAllianceMinutes:void 0,waterNukes:!1,doomsdayClock:!1,doomsdayClockSpeed:`normal`,overtime:!1,overtimeStartMinutes:void 0},B=null,V=null;async function H(){return B||(V??=(async()=>{let e=new Set,t=!1;return await Promise.all(o.map(async n=>{try{(await m.getMapData(n.type).manifest()).nations.length>0&&e.add(n.type)}catch{t=!0}})),t?(V=null,null):(B=e,e)})(),V)}var U=class extends w{constructor(...e){super(...e),this.routerName=`single-player`,this.selectedMap=z.selectedMap,this.selectedDifficulty=z.selectedDifficulty,this.nations=0,this.defaultNationCount=0,this.bots=z.bots,this.infiniteGold=z.infiniteGold,this.infiniteTroops=z.infiniteTroops,this.compactMap=z.compactMap,this.maxTimer=z.maxTimer,this.maxTimerValue=z.maxTimerValue,this.instantBuild=z.instantBuild,this.randomSpawn=z.randomSpawn,this.useRandomMap=z.useRandomMap,this.gameMode=z.gameMode,this.teamCount=z.teamCount,this.showAchievements=!1,this.mapWins=new Map,this.eligibleMaps=null,this.userMeResponse=!1,this.goldMultiplier=z.goldMultiplier,this.goldMultiplierValue=z.goldMultiplierValue,this.startingGold=z.startingGold,this.startingGoldValue=z.startingGoldValue,this.disabledUnits=[...z.disabledUnits],this.customAlliances=z.customAlliances,this.customAllianceMinutes=z.customAllianceMinutes,this.waterNukes=z.waterNukes,this.doomsdayClock=z.doomsdayClock,this.doomsdayClockSpeed=z.doomsdayClockSpeed,this.overtime=z.overtime,this.overtimeStartMinutes=z.overtimeStartMinutes,this.starting=!1,this.startAttempt=0,this.overlayAttempt=0,this.mapLoader=m,this.toggleAchievements=()=>{this.showAchievements=!this.showAchievements,this.showAchievements&&this.ensureEligibleMaps()},this.handleUserMeResponse=e=>{this.userMeResponse=e.detail,this.applyAchievements(e.detail)},this.handleConfigRandomMapSelected=()=>{this.handleSelectRandomMap()},this.handleConfigMapSelected=e=>{let t=e;this.handleMapSelection(t.detail.map)},this.handleConfigDifficultySelected=e=>{let t=e;this.handleDifficultySelection(t.detail.difficulty)},this.handleConfigDoomsdayClockSpeedSelected=e=>{let t=e;this.doomsdayClockSpeed=t.detail.speed},this.handleConfigGameModeSelected=e=>{let t=e;this.handleGameModeSelection(t.detail.mode)},this.handleConfigTeamCountSelected=e=>{let t=e;this.handleTeamCountSelection(t.detail.count)},this.handleConfigOptionToggleChanged=e=>{let{labelKey:t,checked:n}=e.detail;switch(t){case`game_settings.instant_build`:this.instantBuild=n;break;case`game_settings.random_spawn`:this.randomSpawn=n;break;case`game_settings.infinite_gold`:this.infiniteGold=n;break;case`game_settings.infinite_troops`:this.infiniteTroops=n;break;case`game_settings.compact_map`:this.handleCompactMapChange(n);break;case`game_settings.water_nukes`:this.waterNukes=n;break;case`game_settings.doomsday_clock`:this.doomsdayClock=n;break;default:break}},this.handleConfigUnitToggleChanged=e=>{let{unit:t,checked:n}=e.detail;this.disabledUnits=O(this.disabledUnits,t,n)},this.handleBotsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.bots=t)},this.handleNationsChange=e=>{let t=e.detail.value;isNaN(t)||t<0||t>400||(this.nations=t)},this.handleMaxTimerToggle=(e,t)=>{this.maxTimer=e,this.maxTimerValue=F(t)},this.handleGoldMultiplierToggle=(e,t)=>{this.goldMultiplier=e,this.goldMultiplierValue=F(t)},this.handleStartingGoldToggle=(e,t)=>{this.startingGold=e,this.startingGoldValue=F(t)},this.handleCustomAlliancesToggle=(e,t)=>{this.customAlliances=e,this.customAllianceMinutes=F(t)},this.handleOvertimeToggle=(e,t)=>{this.overtime=e,this.overtimeStartMinutes=F(t)},this.handleOvertimeMinutesKeyDown=e=>{D(e,[`-`,`+`,`e`])},this.handleOvertimeMinutesInput=e=>{let t=e.target,n=N(t,{min:1,max:120,stripPattern:/[e+-]/gi});n!==void 0&&(this.overtimeStartMinutes=n)},this.handleCustomAllianceMinutesKeyDown=e=>{D(e,[`-`,`+`,`e`])},this.handleCustomAllianceMinutesInput=e=>{let t=e.target,n=N(t,{min:0,max:15});n!==void 0&&(this.customAllianceMinutes=n)},this.handleMaxTimerValueKeyDown=e=>{D(e,[`-`,`+`,`e`])},this.handleMaxTimerValueChanges=e=>{let t=e.target,n=N(t,{min:1,max:120,stripPattern:/[e+-]/gi});this.maxTimerValue=n},this.handleGoldMultiplierValueKeyDown=e=>{D(e,[`+`,`-`,`e`,`E`])},this.handleGoldMultiplierValueChanges=e=>{let t=e.target,n=j(t,{min:.1,max:1e3});n===void 0?(this.goldMultiplierValue=void 0,t.value=``):this.goldMultiplierValue=n},this.handleStartingGoldValueKeyDown=e=>{D(e,[`-`,`+`,`e`,`E`])},this.handleStartingGoldValueChanges=e=>{let t=e.target,n=j(t,{min:.1,max:1e3});n===void 0?(this.startingGoldValue=void 0,t.value=``):this.startingGoldValue=n}}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse);let e=h();e!==null&&(this.userMeResponse=e.response,this.applyAchievements(e.response)),this.loadNationCount()}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}async ensureEligibleMaps(){if(this.eligibleMaps)return;let e=await H();e&&(this.eligibleMaps=e)}medalCounts(){let t={[e.Easy]:0,[e.Medium]:0,[e.Hard]:0,[e.Impossible]:0};if(!this.eligibleMaps)return t;for(let[e,n]of this.mapWins)if(this.eligibleMaps.has(e))for(let e of n)t[e]++;return t}applyAchievements(t){if(!t){this.mapWins=new Map;return}let n=t.player.achievements.singleplayerMap,r=new Map;for(let t of n){let{mapName:n,difficulty:i}=t??{},o=typeof n==`string`&&Object.values(a).includes(n),s=typeof i==`string`&&Object.values(e).includes(i);if(!o||!s)continue;let c=n,l=r.get(c)??new Set;l.add(i),r.set(c,l)}this.mapWins=r}renderHeaderSlot(){return C({title:f(`main.solo`)||`Solo`,onBack:()=>this.close(),ariaLabel:f(`common.back`),rightContent:b(this.userMeResponse)?u`<button
              @click=${this.toggleAchievements}
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all shrink-0 ${this.showAchievements?`bg-yellow-500/10 border-yellow-500/30 text-yellow-400`:`text-white/60`}"
            >
              <img
                src=${p(`images/MedalIconWhite.svg`)}
                class="w-4 h-4 opacity-80 shrink-0"
                style="${this.showAchievements?``:`filter: grayscale(1);`}"
              />
              <span
                class="text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >${f(`single_modal.toggle_achievements`)}</span
              >
            </button>
            ${this.showAchievements?this.renderMedalOverview():null}`:void 0})}renderMedalOverview(){let e=this.medalCounts(),t=this.eligibleMaps?.size??null;return u`<div class="basis-full w-full">
      <div
        class="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2.5 rounded-xl border border-yellow-500/20 bg-yellow-500/5"
      >
        <span
          class="text-[11px] font-bold uppercase tracking-wider text-yellow-400/80 shrink-0"
        >
          ${f(`single_modal.medals_earned`)}
        </span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          ${E.map(t=>this.renderMedalStat(t,e[t]))}
        </div>
        <span
          class="ml-auto text-[11px] font-semibold uppercase tracking-wider text-white/40 shrink-0"
        >
          ${f(`single_modal.medals_of_maps`,{total:t??`…`})}
        </span>
      </div>
    </div>`}renderMedalStat(e,t){return u`<div
      class="flex items-center gap-1.5"
      title=${f(`difficulty.${e.toLowerCase()}`)}
    >
      ${T(e,`w-4 h-4`)}
      <span class="text-xs font-medium text-white/50 hidden sm:inline"
        >${f(`difficulty.${e.toLowerCase()}`)}</span
      >
      <span class="text-sm font-bold text-white tabular-nums">${t}</span>
    </div>`}renderBody(){let e=[u`<toggle-input-card
        .labelKey=${`game_settings.max_timer`}
        .checked=${this.maxTimer}
        .inputId=${`end-timer-value`}
        .inputMin=${1}
        .inputMax=${120}
        .inputValue=${this.maxTimerValue}
        .inputAriaLabel=${f(`game_settings.max_timer`)}
        .inputPlaceholder=${f(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleMaxTimerToggle}
        .onInput=${this.handleMaxTimerValueChanges}
        .onKeyDown=${this.handleMaxTimerValueKeyDown}
      ></toggle-input-card>`,u`<toggle-input-card
        .labelKey=${`game_settings.gold_multiplier`}
        .checked=${this.goldMultiplier}
        .inputId=${`gold-multiplier-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.goldMultiplierValue}
        .inputAriaLabel=${f(`game_settings.gold_multiplier`)}
        .inputPlaceholder=${`2.0x`}
        .defaultInputValue=${2}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleGoldMultiplierToggle}
        .onChange=${this.handleGoldMultiplierValueChanges}
        .onKeyDown=${this.handleGoldMultiplierValueKeyDown}
      ></toggle-input-card>`,u`<toggle-input-card
        .labelKey=${`game_settings.starting_gold`}
        .checked=${this.startingGold}
        .inputId=${`starting-gold-value`}
        .inputMin=${.1}
        .inputMax=${1e3}
        .inputStep=${`any`}
        .inputValue=${this.startingGoldValue}
        .inputAriaLabel=${f(`game_settings.starting_gold`)}
        .inputPlaceholder=${`5`}
        .defaultInputValue=${5}
        .minValidOnEnable=${.1}
        .onToggle=${this.handleStartingGoldToggle}
        .onChange=${this.handleStartingGoldValueChanges}
        .onKeyDown=${this.handleStartingGoldValueKeyDown}
      ></toggle-input-card>`,u`<toggle-input-card
        .labelKey=${`game_settings.custom_alliances`}
        .checked=${this.customAlliances}
        .inputMin=${0}
        .inputMax=${15}
        .inputStep=${1}
        .inputValue=${this.customAllianceMinutes}
        .inputAriaLabel=${f(`game_settings.custom_alliances`)}
        .inputPlaceholder=${f(`game_settings.mins_placeholder`)}
        .defaultInputValue=${0}
        .minValidOnEnable=${0}
        .zeroLabel=${`(${f(`public_game_modifier.disable_alliances`)})`}
        .onToggle=${this.handleCustomAlliancesToggle}
        .onInput=${this.handleCustomAllianceMinutesInput}
        .onKeyDown=${this.handleCustomAllianceMinutesKeyDown}
      ></toggle-input-card>`,u`<toggle-input-card
        .labelKey=${`game_settings.overtime`}
        .checked=${this.overtime}
        .inputMin=${1}
        .inputMax=${120}
        .inputStep=${1}
        .inputValue=${this.overtimeStartMinutes}
        .inputAriaLabel=${f(`game_settings.overtime`)}
        .inputPlaceholder=${f(`game_settings.mins_placeholder`)}
        .defaultInputValue=${30}
        .minValidOnEnable=${1}
        .onToggle=${this.handleOvertimeToggle}
        .onInput=${this.handleOvertimeMinutesInput}
        .onKeyDown=${this.handleOvertimeMinutesKeyDown}
      ></toggle-input-card>`];return u`
      <div class="flex flex-col h-full">
        <div
          class="flex-1 min-h-0 overflow-y-auto custom-scrollbar px-4 pt-4 pb-6 sm:px-6 mr-1 mx-auto w-full max-w-7xl"
          dir=${c()}
        >
          <section
            class="relative mb-5 grid gap-4 overflow-hidden rounded-3xl border border-amber-200/20 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,190,58,0.17),_transparent_48%),linear-gradient(135deg,#1a1914,#0d0e0d_68%)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.32)] sm:grid-cols-[minmax(0,1fr)_12rem] sm:items-center sm:p-6"
            aria-label=${f(`single_modal.command_center_title`)}
          >
            <div class="min-w-0">
              <p
                class="mb-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-amber-200/70"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                ></span>
                ${f(`single_modal.command_center_title`)}
              </p>
              <h2 class="m-0 text-xl font-bold text-stone-50 sm:text-2xl">
                ${f(`single_modal.command_center_heading`)}
              </h2>
              <p
                class="mb-0 mt-1 max-w-2xl text-xs leading-6 text-stone-300/75 sm:text-sm"
              >
                ${f(`single_modal.command_center_description`)}
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="rounded-lg border border-amber-200/20 bg-black/25 px-3 py-1.5 text-xs font-semibold text-amber-100"
                >
                  ${f(`single_modal.command_center_mode`)}
                </span>
                <span
                  class="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-stone-200"
                >
                  ${f(`difficulty.${this.selectedDifficulty.toLowerCase()}`)}
                </span>
              </div>
            </div>
            <div
              class="relative hidden h-28 items-center justify-center overflow-hidden rounded-2xl border border-amber-100/15 bg-black/20 sm:flex"
              aria-hidden="true"
            >
              <svg viewBox="0 0 220 120" class="h-full w-full" fill="none">
                <path
                  d="M0 22h220M0 60h220M0 98h220M40 0v120M90 0v120M140 0v120M190 0v120"
                  stroke="#e8d7a0"
                  stroke-opacity=".09"
                  stroke-width="1"
                />
                <path
                  d="M-8 92c26-23 35-3 58-26 18-18 28-6 43-27 17-24 33-9 50-22 19-14 34-3 49-16 13-12 27-9 44-20M-6 111c26-23 35-3 58-26 18-18 28-6 43-27 17-24 33-9 50-22 19-14 34-3 49-16 13-12 27-9 44-20"
                  stroke="#d8bd68"
                  stroke-opacity=".25"
                  stroke-width="1.5"
                />
                <path
                  d="M-8 72c26-23 35-3 58-26 18-18 28-6 43-27 17-24 33-9 50-22 19-14 34-3 49-16 13-12 27-9 44-20"
                  stroke="#d8bd68"
                  stroke-opacity=".18"
                  stroke-width="1.5"
                />
                <circle
                  cx="143"
                  cy="59"
                  r="25"
                  stroke="#f5ce5b"
                  stroke-opacity=".35"
                />
                <circle
                  cx="143"
                  cy="59"
                  r="13"
                  stroke="#f5ce5b"
                  stroke-opacity=".5"
                />
                <path
                  d="M143 25v14m0 40v14m-34-34h14m40 0h14m-34-34v68m-34-34h68"
                  stroke="#f5ce5b"
                  stroke-opacity=".45"
                />
                <circle cx="143" cy="59" r="3" fill="#f5ce5b" />
                <path
                  d="m28 33 5 5-5 5-5-5 5-5Zm159 42 4 4-4 4-4-4 4-4Z"
                  fill="#e7a657"
                  fill-opacity=".8"
                />
              </svg>
              <span
                class="absolute bottom-2 left-3 text-[9px] font-bold tracking-[0.2em] text-amber-100/40"
                >FIELD MAP / 01</span
              >
            </div>
          </section>
          <game-config-settings
            class="singleplayer-config-layout block"
            .sectionGapClass=${`space-y-6`}
            .settings=${{map:{selected:this.selectedMap,useRandom:this.useRandomMap,showMedals:this.showAchievements,mapWins:this.mapWins},difficulty:{selected:this.selectedDifficulty,disabled:this.nations===0},gameMode:{selected:this.gameMode},teamCount:{selected:this.teamCount},options:{titleKey:`game_settings.options`,bots:{value:this.bots,labelKey:`game_settings.bots`,disabledKey:`common.disabled`},nations:{value:this.nations,defaultValue:this.defaultNationCount,labelKey:`game_settings.nations`,disabledKey:`common.disabled`},toggles:[{labelKey:`game_settings.instant_build`,checked:this.instantBuild},{labelKey:`game_settings.random_spawn`,checked:this.randomSpawn},{labelKey:`game_settings.infinite_gold`,checked:this.infiniteGold},{labelKey:`game_settings.infinite_troops`,checked:this.infiniteTroops},{labelKey:`game_settings.compact_map`,checked:this.compactMap},{labelKey:`game_settings.water_nukes`,checked:this.waterNukes},{labelKey:`game_settings.doomsday_clock`,checked:this.doomsdayClock,doomsdayClockSpeed:this.doomsdayClockSpeed}],inputCards:e},unitTypes:{titleKey:`game_settings.disable_units`,disabledUnits:this.disabledUnits}}}
            @map-selected=${this.handleConfigMapSelected}
            @random-map-selected=${this.handleConfigRandomMapSelected}
            @difficulty-selected=${this.handleConfigDifficultySelected}
            @doomsday-clock-speed-selected=${this.handleConfigDoomsdayClockSpeedSelected}
            @game-mode-selected=${this.handleConfigGameModeSelected}
            @team-count-selected=${this.handleConfigTeamCountSelected}
            @bots-changed=${this.handleBotsChange}
            @nations-changed=${this.handleNationsChange}
            @option-toggle-changed=${this.handleConfigOptionToggleChanged}
            @unit-toggle-changed=${this.handleConfigUnitToggleChanged}
          ></game-config-settings>
        </div>

        <!-- Footer Action -->
        <div class="p-6 border-t border-white/10 bg-black/20 shrink-0">
          ${b(this.userMeResponse)&&this.hasOptionsChanged()?u`<div
                class="mb-4 px-4 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-wider text-center"
              >
                ${f(`single_modal.options_changed_no_achievements`)}
              </div>`:null}
          <o-button
            variant="primary"
            width="block"
            size="lg"
            translationKey=${this.starting?`game_settings.starting`:`game_settings.start`}
            .disable=${this.starting}
            @click=${this.startGame}
          ></o-button>
        </div>
      </div>
    `}hasOptionsChanged(){return this.nations!==this.defaultNationCount||this.bots!==z.bots||this.infiniteGold!==z.infiniteGold||this.infiniteTroops!==z.infiniteTroops||this.compactMap!==z.compactMap||this.maxTimer!==z.maxTimer||this.instantBuild!==z.instantBuild||this.randomSpawn!==z.randomSpawn||this.gameMode!==z.gameMode||this.goldMultiplier!==z.goldMultiplier||this.startingGold!==z.startingGold||this.customAlliances!==z.customAlliances||this.customAllianceMinutes!==z.customAllianceMinutes||this.waterNukes!==z.waterNukes||this.doomsdayClock!==z.doomsdayClock||this.doomsdayClock&&this.doomsdayClockSpeed!==z.doomsdayClockSpeed||this.overtime!==z.overtime||this.disabledUnits.length>0}onClose(){if(this.startAttempt++,this.overlayAttempt!==0){this.overlayAttempt=0;let e=document.querySelector(`game-starting-modal`);e instanceof _&&e.hide()}this.resetOptions()}resetOptions(){this.starting=!1,this.selectedMap=z.selectedMap,this.selectedDifficulty=z.selectedDifficulty,this.gameMode=z.gameMode,this.useRandomMap=z.useRandomMap,this.bots=z.bots,this.nations=0,this.defaultNationCount=0,this.infiniteGold=z.infiniteGold,this.infiniteTroops=z.infiniteTroops,this.compactMap=z.compactMap,this.maxTimer=z.maxTimer,this.maxTimerValue=z.maxTimerValue,this.instantBuild=z.instantBuild,this.randomSpawn=z.randomSpawn,this.teamCount=z.teamCount,this.disabledUnits=[...z.disabledUnits],this.goldMultiplier=z.goldMultiplier,this.goldMultiplierValue=z.goldMultiplierValue,this.startingGold=z.startingGold,this.startingGoldValue=z.startingGoldValue,this.customAlliances=z.customAlliances,this.customAllianceMinutes=z.customAllianceMinutes,this.waterNukes=z.waterNukes,this.doomsdayClock=z.doomsdayClock,this.doomsdayClockSpeed=z.doomsdayClockSpeed,this.overtime=z.overtime,this.overtimeStartMinutes=z.overtimeStartMinutes}onOpen(){this.loadNationCount(),S()}handleSelectRandomMap(){this.useRandomMap=!0,this.selectedMap=M(),this.loadNationCount()}handleMapSelection(e){this.selectedMap=e,this.useRandomMap=!1,this.loadNationCount()}handleDifficultySelection(e){this.selectedDifficulty=e}handleCompactMapChange(e){this.compactMap=e,this.bots=P(this.bots,e),this.nations=A(this.nations,this.defaultNationCount,e)}getEndTimerInput(){return this.renderRoot.querySelector(`#end-timer-value`)??this.querySelector(`#end-timer-value`)}handleGameModeSelection(e){this.gameMode=e}handleTeamCountSelection(e){this.teamCount=e}async resolveNameAndCosmetics(e){let t=()=>e?.resolvedName()??y();return await R((async()=>{await e?.whenSeeded();let n=t();return{resolvedName:n,cosmetics:await v({verified:n.verified})}})(),I,()=>{console.warn(`Start preparation exceeded its deadline; starting on defaults`);let e=t();return{resolvedName:e,cosmetics:e.verified?{verified:!0}:{}}})}async startGame(){if(this.starting)return;let e;if(this.maxTimer){if(!this.maxTimerValue||this.maxTimerValue<=0){console.error(`Max timer is enabled but no valid value is set`),await x(f(`single_modal.max_timer_invalid`)||`Please enter a valid max timer value (1-120 minutes)`);let e=this.getEndTimerInput();e&&(e.focus(),e.select());return}e=Math.max(1,Math.min(120,this.maxTimerValue))}this.starting=!0;let o=++this.startAttempt,s=document.querySelector(`game-starting-modal`),c=s instanceof _?s:null;this.overlayAttempt=o,c?.show();try{console.log(`Starting single player game with map: ${a[this.selectedMap]}${this.useRandomMap?` (Randomly selected)`:``}`);let s=g(),c=g(),l=document.querySelector(`username-input`),{resolvedName:u,cosmetics:d}=await this.resolveNameAndCosmetics(l);if(o!==this.startAttempt)return;this.dispatchEvent(new CustomEvent(`join-lobby`,{detail:{gameID:c,gameStartInfo:{gameID:c,players:[{clientID:s,username:u.name,clanTag:l?.getClanTag()??null,cosmetics:d}],config:{gameMap:this.selectedMap,gameMapSize:this.compactMap?t.Compact:t.Normal,gameType:r.Singleplayer,gameMode:this.gameMode,playerTeams:this.teamCount,difficulty:this.selectedDifficulty,maxTimerValue:e,bots:this.bots,infiniteGold:this.infiniteGold,donateGold:this.gameMode===n.Team,donateTroops:this.gameMode===n.Team,infiniteTroops:this.infiniteTroops,instantBuild:this.instantBuild,randomSpawn:this.randomSpawn,disabledUnits:this.disabledUnits.filter(e=>Object.values(i).includes(e)),nations:k(this.nations,this.defaultNationCount),...this.goldMultiplier&&this.goldMultiplierValue?{goldMultiplier:this.goldMultiplierValue}:{},...this.startingGold&&this.startingGoldValue!==void 0?{startingGold:Math.round(this.startingGoldValue*1e6)}:{},...this.customAlliances?{customAllianceDuration:this.customAllianceMinutes??0}:{},...this.waterNukes?{waterNukes:!0}:{},...this.doomsdayClock?{doomsdayClock:{enabled:!0,speed:this.doomsdayClockSpeed}}:{},...this.overtime?{overtime:{enabled:!0,startMinutes:this.overtimeStartMinutes??30}}:{}},lobbyCreatedAt:Date.now()},source:`singleplayer`},bubbles:!0,composed:!0})),this.overlayAttempt=0,this.close()}finally{o===this.startAttempt&&(this.starting=!1),this.overlayAttempt===o&&(this.overlayAttempt=0,c?.hide())}}async loadNationCount(){let e=this.selectedMap;try{let t=await this.mapLoader.getMapData(e).manifest();this.selectedMap===e&&(this.defaultNationCount=t.nations.length,this.nations=this.compactMap?Math.max(0,Math.floor(t.nations.length*.25)):t.nations.length)}catch(e){console.warn(`Failed to load nation count`,e)}}};d([s()],U.prototype,`selectedMap`,void 0),d([s()],U.prototype,`selectedDifficulty`,void 0),d([s()],U.prototype,`nations`,void 0),d([s()],U.prototype,`defaultNationCount`,void 0),d([s()],U.prototype,`bots`,void 0),d([s()],U.prototype,`infiniteGold`,void 0),d([s()],U.prototype,`infiniteTroops`,void 0),d([s()],U.prototype,`compactMap`,void 0),d([s()],U.prototype,`maxTimer`,void 0),d([s()],U.prototype,`maxTimerValue`,void 0),d([s()],U.prototype,`instantBuild`,void 0),d([s()],U.prototype,`randomSpawn`,void 0),d([s()],U.prototype,`useRandomMap`,void 0),d([s()],U.prototype,`gameMode`,void 0),d([s()],U.prototype,`teamCount`,void 0),d([s()],U.prototype,`showAchievements`,void 0),d([s()],U.prototype,`mapWins`,void 0),d([s()],U.prototype,`eligibleMaps`,void 0),d([s()],U.prototype,`userMeResponse`,void 0),d([s()],U.prototype,`goldMultiplier`,void 0),d([s()],U.prototype,`goldMultiplierValue`,void 0),d([s()],U.prototype,`startingGold`,void 0),d([s()],U.prototype,`startingGoldValue`,void 0),d([s()],U.prototype,`disabledUnits`,void 0),d([s()],U.prototype,`customAlliances`,void 0),d([s()],U.prototype,`customAllianceMinutes`,void 0),d([s()],U.prototype,`waterNukes`,void 0),d([s()],U.prototype,`doomsdayClock`,void 0),d([s()],U.prototype,`doomsdayClockSpeed`,void 0),d([s()],U.prototype,`overtime`,void 0),d([s()],U.prototype,`overtimeStartMinutes`,void 0),d([s()],U.prototype,`starting`,void 0),U=d([l(`single-player-modal`)],U);export{L as MIDGAME_AD_DEADLINE_MS,I as START_PREPARE_DEADLINE_MS,U as SinglePlayerModal};