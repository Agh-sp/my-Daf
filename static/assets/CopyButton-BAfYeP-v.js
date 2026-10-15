import{$ as e,I as t,Q as n,et as r,lt as i,s as a,st as o,t as s,tt as c,z as l}from"./decorate-CgSmyiMM.js";import{t as u}from"./CrazyGamesSDK-CbSm7Wb8.js";import{_r as d}from"./index-DiWC4IbR.js";var f=class extends c{constructor(...e){super(...e),this.lobbyId=``,this.lobbySuffix=``,this.includeLobbyQuery=!1,this.copyText=``,this.displayText=``,this.displayContent=null,this.showVisibilityToggle=!0,this.showCopyIcon=!0,this.compact=!1,this.lobbyIdVisible=!0,this.userSettings=new d,this.maskLabel=o`&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;`}createRenderRoot(){return this}willUpdate(e){e.has(`lobbyId`)&&(this.lobbyIdVisible=this.userSettings.lobbyIdVisibility()),(e.has(`showVisibilityToggle`)||e.has(`compact`))&&(!this.showVisibilityToggle||this.compact)&&(this.lobbyIdVisible=!0)}toggleVisibility(){!this.showVisibilityToggle||this.compact||(this.lobbyIdVisible=!this.lobbyIdVisible)}enableSelectAll(e){e.currentTarget.classList.add(`select-all`)}clearSelectAll(e){e.currentTarget.classList.remove(`select-all`)}async buildCopyUrl(){let e=`${i.shareOrigin()}${i.gamePath(this.lobbyId)}`;return this.includeLobbyQuery&&(e+=`?lobby&s=${encodeURIComponent(this.lobbySuffix)}`),e}async resolveCopyText(){return this.copyText?this.copyText:u.isOnCrazyGames()?u.createInviteLink(this.lobbyId):this.lobbyId?await this.buildCopyUrl():``}async handleCopy(){let e=await this.resolveCopyText();if(!e){t(l(`common.failed_copy`),`red`);return}try{await a(e),t(l(`common.copied`),`green`)}catch{t(l(`common.failed_copy`),`red`)}}canCopy(){return!!(this.copyText||this.lobbyId)}render(){let e=this.canCopy(),t=this.showVisibilityToggle&&!this.compact,n=this.displayContent??(this.displayText||this.lobbyId||this.copyText),r=t&&!this.lobbyIdVisible?this.maskLabel:n,i=e?``:`opacity-60 cursor-not-allowed`,a=!this.lobbyId,s=a?`opacity-60 cursor-not-allowed`:``;return this.compact?o`
        <button
          @click=${this.handleCopy}
          class="text-xs text-white/60 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/5 hover:bg-white/10 hover:text-white transition-colors ${i}"
          title="${l(`common.click_to_copy`)}"
          aria-label="${l(`common.click_to_copy`)}"
          ?disabled=${!e}
          type="button"
        >
          ${r}
        </button>
      `:o`
      <div
        class="flex items-center gap-0.5 bg-white/5 rounded-lg px-2 py-1 border border-white/10 max-w-[220px] flex-nowrap"
      >
        ${this.showVisibilityToggle?o`<button
              @click=${this.toggleVisibility}
              class="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors ${s}"
              title="${l(`user_setting.toggle_visibility`)}"
              ?disabled=${a}
              type="button"
            >
              ${this.lobbyIdVisible?o`<svg
                    viewBox="0 0 512 512"
                    height="16px"
                    width="16px"
                    fill="currentColor"
                  >
                    <path
                      d="M256 105c-101.8 0-188.4 62.7-224 151 35.6 88.3 122.2 151 224 151s188.4-62.7 224-151c-35.6-88.3-122.2-151-224-151zm0 251.7c-56 0-101.7-45.7-101.7-101.7S200 153.3 256 153.3 357.7 199 357.7 255 312 356.7 256 356.7zm0-161.1c-33 0-59.4 26.4-59.4 59.4s26.4 59.4 59.4 59.4 59.4-26.4 59.4-59.4-26.4-59.4-59.4-59.4z"
                    ></path>
                  </svg>`:o`<svg
                    viewBox="0 0 512 512"
                    height="16px"
                    width="16px"
                    fill="currentColor"
                  >
                    <path
                      d="M448 256s-64-128-192-128S64 256 64 256c32 64 96 128 192 128s160-64 192-128z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="32"
                    ></path>
                    <path
                      d="M144 256l224 0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="32"
                      stroke-linecap="round"
                    ></path>
                  </svg>`}
            </button>`:``}
        <button
          @click=${this.handleCopy}
          @dblclick=${this.enableSelectAll}
          @mouseleave=${this.clearSelectAll}
          class="font-mono text-xs font-bold text-white px-2 cursor-pointer select-none min-w-[80px] text-center truncate tracking-wider bg-transparent border-0 ${i}"
          title="${l(`common.click_to_copy`)}"
          aria-label="${l(`common.click_to_copy`)}"
          ?disabled=${!e}
          type="button"
        >
          ${r}
        </button>
        ${this.showCopyIcon?o`<button
              @click=${this.handleCopy}
              class="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors ${i}"
              title="${l(`common.click_to_copy`)}"
              aria-label="${l(`common.click_to_copy`)}"
              ?disabled=${!e}
              type="button"
            >
              <svg
                viewBox="0 0 24 24"
                height="16px"
                width="16px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                />
              </svg>
            </button>`:``}
      </div>
    `}};s([e({type:String,attribute:`lobby-id`})],f.prototype,`lobbyId`,void 0),s([e({type:String,attribute:`lobby-suffix`})],f.prototype,`lobbySuffix`,void 0),s([e({type:Boolean,attribute:`include-lobby-query`})],f.prototype,`includeLobbyQuery`,void 0),s([e({type:String,attribute:`copy-text`})],f.prototype,`copyText`,void 0),s([e({type:String,attribute:`display-text`})],f.prototype,`displayText`,void 0),s([e({attribute:!1})],f.prototype,`displayContent`,void 0),s([e({type:Boolean,attribute:`show-visibility-toggle`})],f.prototype,`showVisibilityToggle`,void 0),s([e({type:Boolean,attribute:`show-copy-icon`})],f.prototype,`showCopyIcon`,void 0),s([e({type:Boolean})],f.prototype,`compact`,void 0),s([n()],f.prototype,`lobbyIdVisible`,void 0),f=s([r(`copy-button`)],f);