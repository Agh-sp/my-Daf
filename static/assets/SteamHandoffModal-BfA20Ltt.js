import{u as e}from"./UserSettings-BhVaDNmN.js";import{Q as t,et as n,st as r,t as i,z as a}from"./decorate-DDFJEDDP.js";import{ht as o,mt as s,ot as c}from"./index-D0upx8we.js";var l=`flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all border-0`,u=`bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80`,d=`bg-malibu-blue text-white hover:bg-aquarius`,f=class extends o{constructor(...t){super(...t),this.launched=!1,this.remember=!1,this.userSettings=new e,this.lobbyId=null,this.onPlayInBrowser=null,this.cancelLaunch=null}modalConfig(){return{maxWidth:`480px`}}renderHeaderSlot(){return s({title:a(`steam_handoff.title`),onBack:()=>this.close(),ariaLabel:a(`common.back`)})}offer(e,t,n){this.isOpen()&&this.lobbyId===e||(this.lobbyId=e,this.onPlayInBrowser=n,this.remember=!1,this.launched=!1,this.open(),t===`steam`&&this.launch())}open(e){this.lobbyId!==null&&super.open(e)}onClose(){this.cancelLaunch?.(),this.cancelLaunch=null,this.onPlayInBrowser!==null&&this.lobbyId!==null&&window.location.pathname.includes(`/game/${this.lobbyId}`)&&history.replaceState(null,``,`/`),this.lobbyId=null,this.onPlayInBrowser=null}launch(){this.lobbyId!==null&&(this.launched=!0,this.cancelLaunch?.(),this.cancelLaunch=c(this.lobbyId))}chooseSteam(){this.remember&&this.userSettings.setSteamLobbyLinks(`steam`),this.launch()}chooseBrowser(){this.remember&&this.userSettings.setSteamLobbyLinks(`browser`);let e=this.onPlayInBrowser;this.onPlayInBrowser=null,this.close(),e?.()}renderBody(){return r`
      <div class="flex flex-col gap-4 p-6">
        <p class="text-sm text-white/80">
          ${a(this.launched?`steam_handoff.launched`:`steam_handoff.prompt`)}
        </p>
        ${this.launched?null:r`<label
              class="flex items-center gap-2 text-xs text-white/60 cursor-pointer"
            >
              <input
                type="checkbox"
                class="steam-handoff-remember"
                .checked=${this.remember}
                @change=${e=>this.remember=e.target.checked}
              />
              ${a(`steam_handoff.remember`)}
            </label>`}
        <div class="flex gap-3">
          <button
            class="steam-handoff-browser-btn ${l} ${u}"
            @click=${()=>this.chooseBrowser()}
          >
            ${a(`steam_handoff.play_in_browser`)}
          </button>
          <button
            class="steam-handoff-steam-btn ${l} ${d}"
            @click=${()=>this.launched?this.launch():this.chooseSteam()}
          >
            ${a(this.launched?`steam_handoff.try_again`:`steam_handoff.open_in_steam`)}
          </button>
        </div>
      </div>
    `}};i([t()],f.prototype,`launched`,void 0),i([t()],f.prototype,`remember`,void 0),f=i([n(`steam-handoff-modal`)],f);export{f as SteamHandoffModal};