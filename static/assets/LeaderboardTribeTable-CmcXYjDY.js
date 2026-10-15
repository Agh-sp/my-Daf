import{$ as e,Q as t,et as n,rt as r,st as i,t as a,tt as o,z as s}from"./decorate-CgSmyiMM.js";import{Dr as c,Mt as l,Pn as u,x as d}from"./index-DKgg39IM.js";import"./CopyButton-CC1TKQW3.js";import{t as f}from"./UsernameText-DoWhly_W.js";var p=class extends o{constructor(...e){super(...e),this.username=null,this.publicId=``,this.copyText=``,this.onNameClick=null,this.nameClass=``}createRenderRoot(){return this}render(){let e=this.username??this.publicId,t=this.copyText===``?this.username??this.publicId:this.copyText,n=this.username!==null&&this.username!==void 0&&this.username!==``?f(this.username,this.nameClass===``?void 0:``):null;return i`
      <span class="inline-flex items-center gap-1.5 min-w-0 max-w-full">
        ${this.onNameClick?i`<button
              type="button"
              class=${this.nameClass===``?`text-xs text-white/60 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:bg-white/10 hover:text-white transition-colors`:this.nameClass}
              title=${s(`player_profile.view`)}
              aria-label=${s(`player_profile.view`)}
              @click=${()=>this.onNameClick?.()}
            >
              ${n??e}
            </button>`:i`<copy-button
              compact
              .copyText=${t}
              .displayText=${e}
              .displayContent=${n}
              .showVisibilityToggle=${!1}
              .showCopyIcon=${!1}
            ></copy-button>`}
        ${c(this.username)?d():r}
      </span>
    `}};a([e({attribute:!1})],p.prototype,`username`,void 0),a([e({type:String})],p.prototype,`publicId`,void 0),a([e({type:String})],p.prototype,`copyText`,void 0),a([e({attribute:!1})],p.prototype,`onNameClick`,void 0),a([e({type:String})],p.prototype,`nameClass`,void 0),p=a([n(`player-name`)],p);function m(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(t===null)return null;let[n,r,i]=[t[1],t[2],t[3]].map(Number),a=new Date(n,r-1,i);return a.getFullYear()!==n||a.getMonth()!==r-1||a.getDate()!==i?null:a.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function h(e){return e===1?{color:`text-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400/20`,icon:`👑`}:e===2?{color:`text-slate-300 bg-slate-400/10 ring-1 ring-slate-400/20`,icon:`🥈`}:e===3?{color:`text-amber-600 bg-amber-600/10 ring-1 ring-amber-600/20`,icon:`🥉`}:{color:`text-white/40 bg-white/5`,icon:String(e)}}var g=class extends o{constructor(...e){super(...e),this.tribeData=null,this.isLoading=!1,this.error=null,this.hasLoaded=!1}createRenderRoot(){return this}async ensureLoaded(){this.hasLoaded||this.isLoading||await this.loadTribeLeaderboard()}async loadTribeLeaderboard(){this.isLoading=!0,this.error=null;try{let e=await u();if(!e)throw Error(`Failed to load tribe leaderboard`);this.tribeData=e,this.hasLoaded=!0}catch(e){console.warn(`loadTribeLeaderboard: request failed`,e),this.error=s(`leaderboard_modal.error`)}finally{this.isLoading=!1}}openProfile(e){l(`player-profile-modal`).then(()=>document.querySelector(`player-profile-modal`)?.openFromLeaderboard(e),e=>console.error(`player-profile-modal failed to load:`,e))}renderLoading(){return i`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-6"
        ></div>
        <p class="text-blue-200/80 text-sm font-bold tracking-widest uppercase">
          ${s(`common.loading`)}
        </p>
      </div>
    `}renderError(){return i`
      <div
        class="flex flex-col items-center justify-center p-12 text-white h-full"
      >
        <div
          class="bg-red-500/10 p-6 rounded-full mb-6 border border-red-500/20 shadow-lg shadow-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <p class="mb-8 text-center text-red-100/80 font-medium">
          ${this.error??s(`leaderboard_modal.error`)}
        </p>
        <button
          class="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-bold uppercase transition-all active:scale-95"
          @click=${()=>this.loadTribeLeaderboard()}
        >
          ${s(`leaderboard_modal.try_again`)}
        </button>
      </div>
    `}renderNoData(){return i`
      <div
        class="flex flex-col items-center justify-center p-12 text-white/40 h-full"
      >
        <div class="bg-white/5 p-6 rounded-full mb-6 border border-white/5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white/60 mb-2">
          ${s(`leaderboard_modal.no_data_yet`)}
        </h3>
        <p class="text-white/30 text-sm">
          ${s(`leaderboard_modal.tribes_no_stats`)}
        </p>
      </div>
    `}renderBoostCell(e){let t=e.activeBoosts;if(t===0)return i`<span class="text-white/20">—</span>`;let n=t+1;return i`<span
      class="font-mono font-medium text-amber-300"
      title=${s(`leaderboard_modal.tribes_boost_value_tooltip`,{multiplier:n})}
      >${s(`leaderboard_modal.tribes_boost_value`,{multiplier:n})}</span
    >`}renderWindow(e){let t=m(e.start),n=m(e.end);return t===null||n===null?r:i`
      <div
        class="px-4 py-2 text-[11px] text-white/40 border-b border-white/5 bg-black/20"
      >
        ${s(`leaderboard_modal.tribes_window`,{days:e.windowDays,start:t,end:n})}
      </div>
    `}render(){if(this.isLoading)return this.renderLoading();if(this.error)return this.renderError();if(!this.tribeData||this.tribeData.tribes.length===0)return this.renderNoData();let{tribes:e}=this.tribeData,t=Math.max(...e.map(e=>e.playerReach),1);return i`
      <div class="h-full">
        <div class="h-full border border-white/5 bg-black/20 flex flex-col">
          ${this.renderWindow(this.tribeData)}
          <div
            class="flex-1 min-h-0 overflow-y-auto overflow-x-auto scrollbar-thin scrollbar-thumb-white/20"
          >
            <table class="w-full text-sm border-collapse table-fixed">
              <!-- Sized to keep Player Reach — the column the board is
                   ranked by — on screen at mobile widths rather than behind
                   a horizontal scroll (26rem total, fits ~420px). -->
              <colgroup>
                <col style="width: 3.5rem" />
                <col style="width: 7rem" />
                <col style="width: 4rem" />
                <col style="width: 4.5rem" />
                <col style="width: 7rem" />
              </colgroup>
              <thead class="sticky top-0 z-10">
                <tr
                  class="text-white/40 text-[10px] uppercase tracking-wider border-b border-white/5 bg-[#1e2433]"
                >
                  <th class="py-4 px-4 text-center font-bold">
                    ${s(`leaderboard_modal.rank`)}
                  </th>
                  <th class="py-4 px-4 text-left font-bold">
                    ${s(`leaderboard_modal.tribes_name`)}
                  </th>
                  <th
                    class="py-4 px-2 text-right font-bold whitespace-nowrap"
                    title=${s(`leaderboard_modal.tribes_boost_tooltip`)}
                  >
                    ${s(`leaderboard_modal.tribes_boost`)}
                  </th>
                  <th class="py-4 px-4 text-right font-bold whitespace-nowrap">
                    ${s(`leaderboard_modal.games`)}
                  </th>
                  <th
                    class="py-4 px-4 text-right font-bold pr-6 whitespace-nowrap"
                    title=${s(`leaderboard_modal.tribes_reach_tooltip`)}
                  >
                    ${s(`leaderboard_modal.tribes_reach`)}
                  </th>
                </tr>
              </thead>
              <tbody>
                ${e.map(e=>{let{color:n,icon:r}=h(e.rank);return i`
                    <tr
                      class="border-b border-white/5 hover:bg-white/[0.07] transition-colors group"
                    >
                      <td class="py-3 px-4 text-center">
                        <div
                          class="w-10 h-10 mx-auto flex items-center justify-center rounded-lg font-bold font-mono text-lg ${n}"
                        >
                          ${r}
                        </div>
                      </td>
                      <!-- Tribe name is primary, buyer secondary beneath it:
                           an Owner column would push Player Reach back off
                           screen on mobile. <player-name> owns the
                           username-or-publicId fallback. -->
                      <td class="py-3 px-4 wrap-break-words">
                        <div class="flex flex-col gap-0.5 min-w-0">
                          <span class="font-bold text-white">
                            ${e.name}
                          </span>
                          <player-name
                            class="min-w-0"
                            .username=${e.ownerUsername}
                            .publicId=${e.ownerPublicId}
                            .nameClass=${`text-[11px] text-white/50 hover:text-white/80 hover:underline transition-colors truncate text-left`}
                            .onNameClick=${()=>this.openProfile(e.ownerPublicId)}
                          ></player-name>
                        </div>
                      </td>
                      <td class="py-3 px-2 text-right">
                        ${this.renderBoostCell(e)}
                      </td>
                      <td
                        class="py-3 px-4 text-right font-mono text-white/80"
                        title=${s(`leaderboard_modal.tribes_games_tooltip`,{count:e.gamesAppeared.toLocaleString()})}
                      >
                        ${e.gamesAppeared.toLocaleString()}
                      </td>
                      <td class="py-3 px-4 text-right pr-6">
                        <div class="flex flex-col items-end gap-1">
                          <span
                            class="text-white font-mono font-medium"
                            title=${s(`leaderboard_modal.tribes_reach_value_tooltip`,{count:e.playerReach.toLocaleString()})}
                            >${e.playerReach.toLocaleString()}</span
                          >
                          <div
                            class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"
                          >
                            <div
                              class="h-full bg-blue-500/50 rounded-full"
                              style="width: ${e.playerReach/t*100}%"
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  `})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `}};a([t()],g.prototype,`tribeData`,void 0),a([t()],g.prototype,`isLoading`,void 0),a([t()],g.prototype,`error`,void 0),g=a([n(`leaderboard-tribe-table`)],g);export{m as t};