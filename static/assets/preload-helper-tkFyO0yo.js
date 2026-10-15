import{$ as e,Q as t,et as n,nt as r,st as i,t as a,tt as o,z as s}from"./decorate-DDFJEDDP.js";var c=class extends o{constructor(...e){super(...e),this.heading=``,this.message=``,this.variant=`danger`,this.textareaPlaceholder=``,this.confirmText=``,this.cancelText=``,this.disabled=!1,this.showClose=!1,this.wide=!1,this.buttons=`confirmCancel`,this.text=``,this.portal=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){super.disconnectedCallback(),this.portal&&=(r(i``,this.portal),this.portal.remove(),null)}render(){return this.portal&&r(this.renderOverlay(),this.portal),i``}renderOverlay(){let e=this.variant===`iranianMilitary`,t=this.variant===`danger`,n=e?`border-emerald-500/50`:t?`border-red-500/50`:`border-amber-500/50`,r=e?`bg-[#111914]`:`bg-surface`,a=e?`text-emerald-100`:t?`text-red-300`:`text-amber-300`,o=e?`bg-emerald-700 text-white hover:bg-emerald-600`:t?`bg-red-600 text-white hover:bg-red-700`:`bg-amber-600 text-white hover:bg-amber-700`;return i`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.handleCancel()}}
      >
        <div
          class="relative mx-4 w-full overflow-hidden ${this.wide?`max-w-md`:`max-w-sm`} p-6 rounded-2xl border ${n} ${r} shadow-2xl"
        >
          ${e?i`<div class="absolute inset-x-0 top-0 flex h-1 flex-col">
                <span class="flex-1 bg-emerald-500"></span>
                <span class="flex-1 bg-white"></span>
                <span class="flex-1 bg-red-500"></span>
              </div>`:``}
          ${this.showClose?i`<button
                @click=${()=>this.handleCancel()}
                class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                ×
              </button>`:``}
          ${this.heading?i`<h2 class="text-lg font-bold text-white mb-2 pr-8">
                ${this.heading}
              </h2>`:``}
          ${e?i`<div class="mb-5 flex items-center gap-3">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-900/50 shadow-inner"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 48 48" class="h-9 w-9">
                    <path
                      d="M9 21a15 15 0 0 1 30 0v15H9z"
                      fill="#315b3e"
                      stroke="#b9c98a"
                      stroke-width="1.5"
                    />
                    <path d="M14 20a10 10 0 0 1 20 0z" fill="#758c4e" />
                    <path d="M17 20h14v3H17z" fill="#c7ad70" />
                    <rect
                      x="18"
                      y="25"
                      width="12"
                      height="8"
                      rx="3"
                      fill="#c99668"
                    />
                    <path d="M18 28h12v2H18z" fill="#493b30" />
                    <path
                      d="M12 37h24l4 7H8z"
                      fill="#365d3b"
                      stroke="#b9c98a"
                      stroke-width="1.2"
                    />
                    <path d="M18 38h12v2H18z" fill="#16864a" />
                    <path d="M18 40h12v2H18z" fill="#f5f1df" />
                    <path d="M18 42h12v2H18z" fill="#d8323b" />
                    <circle cx="21" cy="27" r="1" fill="#262821" />
                    <circle cx="27" cy="27" r="1" fill="#262821" />
                  </svg>
                </div>
                <p class="text-sm font-medium ${a}">${this.message}</p>
              </div>`:i`<p class="text-sm font-medium ${a} mb-5">
                ${this.message}
              </p>`}
          ${this.textareaPlaceholder?i`<textarea
                .value=${this.text}
                @input=${e=>this.text=e.target.value}
                maxlength="200"
                rows="2"
                placeholder="${this.textareaPlaceholder}"
                class="w-full px-3 py-2 mb-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm resize-none"
              ></textarea>`:``}
          ${this.buttons===`none`?``:i`<div class="flex gap-3">
                ${this.buttons===`confirmCancel`?i`<button
                      @click=${()=>this.handleCancel()}
                      ?disabled=${this.disabled}
                      class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all disabled:opacity-50 disabled:pointer-events-none"
                    >
                      ${this.cancelText||s(`common.cancel`)}
                    </button>`:``}
                <button
                  @click=${()=>this.handleConfirm()}
                  ?disabled=${this.disabled}
                  class="flex-1 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl ${o} transition-all disabled:opacity-50 disabled:pointer-events-none border-0"
                >
                  ${this.confirmText||s(`common.confirm`)}
                </button>
              </div>`}
        </div>
      </div>
    `}handleConfirm(){this.dispatchEvent(new CustomEvent(`confirm`,{detail:{text:this.text}})),this.text=``}handleCancel(){this.dispatchEvent(new CustomEvent(`cancel`)),this.text=``}};a([e()],c.prototype,`heading`,void 0),a([e()],c.prototype,`message`,void 0),a([e()],c.prototype,`variant`,void 0),a([e()],c.prototype,`textareaPlaceholder`,void 0),a([e()],c.prototype,`confirmText`,void 0),a([e()],c.prototype,`cancelText`,void 0),a([e({type:Boolean})],c.prototype,`disabled`,void 0),a([e({type:Boolean})],c.prototype,`showClose`,void 0),a([e({type:Boolean})],c.prototype,`wide`,void 0),a([e()],c.prototype,`buttons`,void 0),a([t()],c.prototype,`text`,void 0),c=a([n(`confirm-dialog`)],c);var l=`modulepreload`,u=function(e,t){return new URL(e,t).href},d={},f=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=u(t,n),t in d)return;d[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:l,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};export{f as t};