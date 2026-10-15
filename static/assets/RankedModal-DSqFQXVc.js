import{Q as e,et as t,st as n,t as r,z as i}from"./decorate-CgSmyiMM.js";import{t as a}from"./CrazyGamesSDK-CbSm7Wb8.js";import{Nn as o,ft as s,rr as c,vt as l,yt as u}from"./index-DiWC4IbR.js";var d=class extends u{isRankedEligible(){return s(this.userMeResponse)||this.crazyGamesSignedIn}constructor(){super(),this.routerName=`ranked`,this.elo=`...`,this.elo2v2=`...`,this.userMeResponse=!1,this.errorMessage=null,this.crazyGamesSignedIn=!1,this.handleUserMeResponse=e=>{this.errorMessage=null,this.userMeResponse=e.detail,this.updateElo()},this.id=`page-ranked`}connectedCallback(){super.connectedCallback(),document.addEventListener(`userMeResponse`,this.handleUserMeResponse)}disconnectedCallback(){document.removeEventListener(`userMeResponse`,this.handleUserMeResponse),super.disconnectedCallback()}updateElo(){if(this.errorMessage){this.elo=i(`map_component.error`),this.elo2v2=i(`map_component.error`);return}if(this.isRankedEligible()){let e=this.userMeResponse?this.userMeResponse.player.leaderboard:void 0,t=i(`matchmaking_modal.no_elo`);this.elo=e?.oneVone?.elo??t,this.elo2v2=e?.twoVtwo?.elo??t}}async onOpen(){this.elo=`...`,this.elo2v2=`...`,this.errorMessage=null;try{let e=await o();this.userMeResponse=e,this.crazyGamesSignedIn=a.isOnCrazyGames()&&await a.getUserProfile()!==null}catch(e){console.warn(`Failed to fetch user profile for ranked modal`,e),this.userMeResponse=!1,this.errorMessage=i(`map_component.error`),this.elo=i(`map_component.error`),this.elo2v2=i(`map_component.error`)}finally{this.updateElo()}}createRenderRoot(){return this}renderHeaderSlot(){return l({title:i(`mode_selector.ranked_title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}renderBody(){return n`
      <div class="custom-scrollbar p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${this.renderCard(i(`mode_selector.ranked_1v1_title`),this.errorMessage??(this.isRankedEligible()?i(`matchmaking_modal.elo`,{elo:this.elo}):i(`mode_selector.ranked_title`)),()=>this.handleRanked(`1v1`))}
          ${this.renderCard(i(`mode_selector.ranked_2v2_title`),this.errorMessage??(this.isRankedEligible()?i(`matchmaking_modal.elo`,{elo:this.elo2v2}):i(`mode_selector.ranked_title`)),()=>this.handleRanked(`2v2`))}
          ${this.renderDisabledCard(i(`mode_selector.coming_soon`),``)}
          ${this.renderDisabledCard(i(`mode_selector.coming_soon`),``)}
        </div>
        <p class="mt-6 text-xs text-white/60 leading-relaxed text-center">
          ${i(`mode_selector.ranked_pairing_note`)}
        </p>
      </div>
    `}renderCard(e,t,r){return n`
      <button
        @click=${r}
        class="relative flex flex-col w-full h-28 sm:h-32 rounded-2xl bg-malibu-blue border-0 transition-all duration-200 hover:bg-aquarius hover:scale-[1.03] hover:shadow-[var(--shadow-action-card-hover)] active:bg-malibu-blue/80 active:scale-[0.98] p-6 items-center justify-center gap-3"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white uppercase tracking-widest leading-tight"
          >
            ${e}
          </h3>
          <p
            class="text-xs text-white/80 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${t}
          </p>
        </div>
      </button>
    `}renderDisabledCard(e,t){return n`
      <div
        class="group relative isolate flex flex-col w-full h-28 sm:h-32 overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-md border-0 shadow-none p-6 items-center justify-center gap-3 opacity-50 cursor-not-allowed"
      >
        <div class="flex flex-col items-center gap-1 text-center">
          <h3
            class="text-lg sm:text-xl font-bold text-white/60 uppercase tracking-widest leading-tight"
          >
            ${e}
          </h3>
          <p
            class="text-xs text-white/40 uppercase tracking-wider whitespace-pre-line leading-tight"
          >
            ${t}
          </p>
        </div>
      </div>
    `}async handleRanked(e){if(await c()===!1){this.close(),window.showPage?.(`page-account`);return}document.dispatchEvent(new CustomEvent(`open-matchmaking`,{detail:{mode:e}}))}};r([e()],d.prototype,`elo`,void 0),r([e()],d.prototype,`elo2v2`,void 0),r([e()],d.prototype,`userMeResponse`,void 0),r([e()],d.prototype,`errorMessage`,void 0),r([e()],d.prototype,`crazyGamesSignedIn`,void 0),d=r([t(`ranked-modal`)],d);export{d as RankedModal};