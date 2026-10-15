import{Q as e,et as t,st as n,t as r,z as i}from"./decorate-CgSmyiMM.js";import{pr as a,st as o,vt as s,yt as c}from"./index-7sHmUmdC.js";var l=`flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border-0`,u=`bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80`,d=`bg-malibu-blue text-white hover:bg-aquarius`,f=class extends c{constructor(...e){super(...e),this.launched=!1,this.remember=!1,this.userSettings=new a,this.lobbyId=null,this.onPlayInBrowser=null,this.cancelLaunch=null}modalConfig(){return{maxWidth:`480px`}}renderHeaderSlot(){return s({title:i(`steam_handoff.title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}offer(e,t,n){this.isOpen()&&this.lobbyId===e||(this.lobbyId=e,this.onPlayInBrowser=n,this.remember=!1,this.launched=!1,this.open(),t===`steam`&&this.launch())}open(e){this.lobbyId!==null&&super.open(e)}onClose(){this.cancelLaunch?.(),this.cancelLaunch=null,this.onPlayInBrowser!==null&&this.lobbyId!==null&&window.location.pathname.includes(`/game/${this.lobbyId}`)&&history.replaceState(null,``,`/`),this.lobbyId=null,this.onPlayInBrowser=null}launch(){this.lobbyId!==null&&(this.launched=!0,this.cancelLaunch?.(),this.cancelLaunch=o(this.lobbyId))}chooseSteam(){this.remember&&this.userSettings.setSteamLobbyLinks(`steam`),this.launch()}chooseBrowser(){this.remember&&this.userSettings.setSteamLobbyLinks(`browser`);let e=this.onPlayInBrowser;this.onPlayInBrowser=null,this.close(),e?.()}renderBody(){return n`
      <div class="flex flex-col gap-4 p-6">
        <p class="text-sm text-white/80">
          ${i(this.launched?`steam_handoff.launched`:`steam_handoff.prompt`)}
        </p>
        ${this.launched?null:n`<label
              class="flex items-center gap-2 text-xs text-white/60 cursor-pointer"
            >
              <input
                type="checkbox"
                class="steam-handoff-remember"
                .checked=${this.remember}
                @change=${e=>this.remember=e.target.checked}
              />
              ${i(`steam_handoff.remember`)}
            </label>`}
        <div class="flex gap-3">
          <button
            class="steam-handoff-browser-btn ${l} ${u}"
            @click=${()=>this.chooseBrowser()}
          >
            ${i(`steam_handoff.play_in_browser`)}
          </button>
          <button
            class="steam-handoff-steam-btn ${l} ${d}"
            @click=${()=>this.launched?this.launch():this.chooseSteam()}
          >
            ${i(this.launched?`steam_handoff.try_again`:`steam_handoff.open_in_steam`)}
          </button>
        </div>
      </div>
    `}};r([e()],f.prototype,`launched`,void 0),r([e()],f.prototype,`remember`,void 0),f=r([t(`steam-handoff-modal`)],f);export{f as SteamHandoffModal};