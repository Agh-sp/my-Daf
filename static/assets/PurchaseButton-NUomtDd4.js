import{$ as e,Q as t,dt as n,et as r,lt as i,nt as a,rt as o,st as s,t as c,tt as l,z as u}from"./decorate-CgSmyiMM.js";import"./preload-helper-DqxmgrHA.js";import{$t as d,Nn as f,Pn as p,ir as m,on as h,qt as g,sn as _}from"./index-DmVmrdQe.js";import"./CapIcon-DL9dS2iI.js";import"./PlutoniumIcon-Bb43tgmR.js";import"./InsufficientCurrencyDialog-DAA2ok6U.js";function ee(e){return e.colorPalette?`pattern:${e.name}:${e.colorPalette.name}`:`pattern:${e.name}`}function v(e,t){let n=new Map(t.map(e=>[e.key,e])),r=new Map(t.filter(e=>e.type===`effect`).map(e=>[`${e.effectType}:${e.cosmetic?.name}`,e])),i=[],a=(e,t,r,a,o)=>{let s=n.get(t)??null;i.push({type:e,key:t,name:r,resolved:s,pattern:a,imageUrl:o,relationship:s?.relationship??`unknown`})};e.pattern&&a(`pattern`,ee(e.pattern),e.pattern.name,e.pattern,null),e.skin&&a(`skin`,`skin:${e.skin.name}`,e.skin.name,null,e.skin.url),e.crown&&a(`crown`,`crown:${e.crown.name}`,e.crown.name,null,e.crown.url);for(let t of Object.values(e.effects??{}))a(`effect`,(r.get(`${t.effectType}:${t.name}`)??null)?.key??`effect:${t.effectType}:${t.name}`,t.name,null,null);return i}function y(e){return e.relationship===`purchasable`?e.type===`effect`?`#modal=store&tab=effects`:`#modal=store&tab=cosmetics&item=${encodeURIComponent(e.key)}`:null}function b(e,t){return e===t?!0:!e.startsWith(`pattern:`)||!t.startsWith(`pattern:`)?!1:e.split(`:`)[1]===t.split(`:`)[1]}function x(e){"@babel/helpers - typeof";return x=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},x(e)}var S=`dahlia`,C=function(e){return e===3?`v3`:e},w=`https://js.stripe.com`,T=`${w}/${S}/stripe.js`,E=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,D=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,O=`loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used`,k=function(e){return E.test(e)||D.test(e)},te=function(){for(var e=document.querySelectorAll(`script[src^="${w}"]`),t=0;t<e.length;t++){var n=e[t];if(k(n.src))return n}return null},A=function(e){var t=e&&!e.advancedFraudSignals?`?advancedFraudSignals=false`:``,n=document.createElement(`script`);n.src=`${T}${t}`;var r=document.head||document.body;if(!r)throw Error(`Expected document.body not to be null. Stripe.js requires a <body> element.`);return r.appendChild(n),n},j=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:`stripe-js`,version:`9.15.0`,startTime:t})},M=null,N=null,P=null,F=function(e){return function(t){e(Error(`Failed to load Stripe.js`,{cause:t}))}},I=function(e,t){return function(){window.Stripe?e(window.Stripe):t(Error(`Stripe.js not available`))}},L=function(e){return M===null?(M=new Promise(function(t,n){if(typeof window>`u`||typeof document>`u`){t(null);return}if(window.Stripe&&e&&console.warn(O),window.Stripe){t(window.Stripe);return}try{var r=te();if(r&&e)console.warn(O);else if(!r)r=A(e);else if(r&&P!==null&&N!==null){var i;r.removeEventListener(`load`,P),r.removeEventListener(`error`,N),(i=r.parentNode)==null||i.removeChild(r),r=A(e)}P=I(t,n),N=F(n),r.addEventListener(`load`,P),r.addEventListener(`error`,N)}catch(e){n(e);return}}),M.catch(function(e){return M=null,Promise.reject(e)})):M},R=function(e,t,n){if(e===null)return null;var r=t[0];if(typeof r!=`string`)throw Error(`Expected publishable key to be of type string, got type ${x(r)} instead.`);var i=r.match(/^pk_test/),a=C(e.version),o=S;i&&a!==o&&console.warn(`Stripe.js@${a} was loaded on the page, but @stripe/stripe-js@9.15.0 expected Stripe.js@${o}. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning`);var s=e.apply(void 0,t);return j(s,n),s},z=function(e){var t=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    ${JSON.stringify(e)}
`;if(e===null||x(e)!==`object`)throw Error(t);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals==`boolean`)return e;throw Error(t)},B,V=!1,H=function(){var e=[...arguments];V=!0;var t=Date.now();return L(B).then(function(n){return R(n,e,t)})};H.setLoadParameters=function(e){if(V&&B){var t=z(e);if(Object.keys(t).reduce(function(t,n){return t&&e[n]===B?.[n]},!0))return}if(V)throw Error(`You cannot change load parameters after calling loadStripe`);B=z(e)};function U(){let e;try{e=i.stripePublishableKey()}catch{return null}return e===void 0||e===``?null:e}function W(e,t){return e.startsWith(`pk_live_`)===(t===n.Prod)}function G(){let e=U();return _()===`stripe`&&e!==null&&W(e,i.env())}var K=null;function q(){let e=U();return e===null?Promise.resolve(null):(K??=H(e).catch(e=>(console.warn(`getStripe: Stripe.js failed to load`,e),K=null,null)),K)}function J(e){return`${window.location.origin}/#purchase-completed?type=${e}`}var Y=class e{constructor(e,t,n,r){this.stripe=e,this.elements=t,this.request=n,this.amountCents=r,this.clientSecret=null}static async create(t,n){let r=await q();return r===null?null:new e(r,r.elements({mode:`payment`,amount:n,currency:`usd`,paymentMethodTypes:[`card`,`link`],appearance:{theme:`night`}}),t,n)}createExpressCheckoutElement(e){return this.elements.create(`expressCheckout`,{buttonHeight:44,emailRequired:e.emailRequired,paymentMethods:{link:`never`,paypal:`never`,amazonPay:`never`,klarna:`never`}})}createPaymentElement(){return this.elements.create(`payment`)}update(e,t){this.request=e,t!==this.amountCents&&(this.amountCents=t,this.elements.update({amount:t})),this.clientSecret=null}async confirm(e={}){try{return await this.confirmInner(e)}catch(e){return console.error(`inline checkout confirm failed`,e),{kind:`error`,message:u(`store.purchase_failed`),stage:`checkout`}}}async confirmInner(e){let{error:t}=await this.elements.submit();if(t)return{kind:`error`,message:t.message??u(`store.checkout_failed`),stage:`checkout`};if(this.clientSecret===null){let e=await h(this.request);if(e.kind===`error`)return{kind:`error`,message:e.error.message,refetchCatalog:e.error.refetchCatalog,stage:`checkout`};if(e.kind===`redirect`)return window.location.href=e.redirectUrl,{kind:`redirecting`};let t=(await this.stripe.retrievePaymentIntent(e.clientSecret).catch(()=>null))?.paymentIntent?.amount;if(t!==void 0&&t!==this.amountCents)return console.error(`inline checkout amount mismatch: intent ${t}, elements ${this.amountCents}`),{kind:`error`,message:u(`store.checkout_failed`),stage:`checkout`,useFallback:!0};this.clientSecret=e.clientSecret}let{error:n,paymentIntent:r}=await this.stripe.confirmPayment({elements:this.elements,clientSecret:this.clientSecret,confirmParams:{return_url:J(this.request.kind),...e.receiptEmail?{receipt_email:e.receiptEmail}:{}},redirect:`if_required`});return n?{kind:`error`,message:n.message??u(`store.purchase_failed`),stage:`payment`}:(this.clientSecret=null,r?.status===`succeeded`?{kind:`success`}:{kind:`pending`})}},X=2500,Z=class extends l{constructor(...e){super(...e),this.request=null,this.amountCents=0,this.priceLabel=``,this.successMessageKey=``,this.walletVisible=!1,this.modalOpen=!1,this.confirming=!1,this.cardReady=!1,this.modalError=null,this.fallbackBusy=!1,this.emailRequired=!1,this.emailValue=``,this.session=null,this.sessionPromise=null,this.expressElement=null,this.paymentElement=null,this.portal=null,this.syncedKey=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.portal=document.createElement(`div`),document.body.appendChild(this.portal)}disconnectedCallback(){this.expressElement?.destroy(),this.expressElement=null,this.destroyPaymentElement(),this.session=null,this.sessionPromise=null,this.walletVisible=!1,this.modalOpen=!1,this.portal&&=(a(s``,this.portal),this.portal.remove(),null),super.disconnectedCallback()}ensureSession(){return this.request===null||!G()?Promise.resolve(null):(this.sessionPromise??=Y.create(this.request,this.amountCents).then(e=>e===null?(this.sessionPromise=null,null):(this.session=e,this.syncSession(),e)).catch(e=>(console.warn(`inline-checkout: session creation failed`,e),this.sessionPromise=null,null)),this.sessionPromise)}syncSession(){if(this.session===null||this.request===null)return;let e=JSON.stringify([this.request,this.amountCents]);e!==this.syncedKey&&(this.syncedKey=e,this.session.update(this.request,this.amountCents))}firstUpdated(){this.initWallet()}updated(e){super.updated(e),(e.has(`request`)||e.has(`amountCents`))&&this.syncSession()}async needsEmail(){let e=await f();return e!==!1&&!e.user.email&&!e.user.google}async initWallet(){let[e,t]=await Promise.all([this.ensureSession(),this.needsEmail()]);if(e===null||this.expressElement!==null)return;let n=this.querySelector(`[data-express-checkout]`);if(n===null||!this.isConnected)return;let r=e.createExpressCheckoutElement({emailRequired:t});r.on(`ready`,({availablePaymentMethods:e})=>{this.walletVisible=e!==void 0}),r.on(`confirm`,e=>void this.confirmWallet(e)),r.mount(n),this.expressElement=r}async confirmWallet(e){if(this.session===null||this.confirming){e.paymentFailed({reason:`fail`});return}this.confirming=!0;try{let t=await this.session.confirm({receiptEmail:e.billingDetails?.email??null});if(t.kind===`error`){if(t.stage===`checkout`&&e.paymentFailed({reason:`fail`}),t.refetchCatalog&&d(),t.useFallback&&this.onFallback){await this.runFallback();return}await m(t.message);return}if(t.kind===`redirecting`){e.paymentFailed({reason:`fail`});return}await this.settle(t)}finally{this.confirming=!1}}async openCardModal(){let[e,t]=await Promise.all([this.ensureSession(),this.needsEmail()]);if(e===null){await this.runFallback();return}this.emailRequired=t,this.modalOpen=!0,this.modalError=null,this.cardReady=!1,await this.updateComplete;let n=this.portal?.querySelector(`[data-payment-element]`);if(!n||this.paymentElement!==null)return;let r=e.createPaymentElement();r.on(`ready`,()=>{this.cardReady=!0}),r.mount(n),this.paymentElement=r}destroyPaymentElement(){this.paymentElement?.destroy(),this.paymentElement=null,this.cardReady=!1}closeCardModal(){this.confirming||(this.modalOpen=!1,this.modalError=null,this.destroyPaymentElement())}emailLooksValid(){return/^\S+@\S+\.\S+$/.test(this.emailValue.trim())}async confirmCard(){if(!(this.session===null||this.confirming||!this.cardReady)&&!(this.emailRequired&&!this.emailLooksValid())){this.confirming=!0,this.modalError=null;try{let e=await this.session.confirm({receiptEmail:this.emailRequired?this.emailValue.trim():null});if(e.kind===`error`){if(e.refetchCatalog&&d(),e.useFallback&&this.onFallback){this.modalOpen=!1,this.destroyPaymentElement(),await this.runFallback();return}this.modalError=e.message;return}this.modalOpen=!1,this.destroyPaymentElement(),await this.settle(e)}finally{this.confirming=!1}}}async settle(e){if(e.kind!==`redirecting`){if(e.kind===`success`){await m(u(this.successMessageKey)),p(),window.location.reload();return}g(),setTimeout(()=>void g(),X),await m(u(`store.purchase_pending`))}}async runFallback(){if(!(!this.onFallback||this.fallbackBusy)){this.fallbackBusy=!0;try{await this.onFallback()}catch(e){console.error(`inline-checkout fallback failed`,e),await m(u(`store.checkout_failed`))}finally{this.fallbackBusy=!1}}}onPriceClick(e){e.stopPropagation(),G()?this.openCardModal():this.runFallback()}render(){this.portal&&a(this.modalOpen?this.renderModal():s``,this.portal);let e=G()?u(`store.pay_with_card`):this.priceLabel;return s`
      <div class="flex w-full flex-col gap-1">
        <div
          data-express-checkout
          class=${this.walletVisible?`w-full`:`hidden`}
        ></div>
        ${this.walletVisible?s`<button
              data-pay-with-card
              class="w-full border-0 bg-transparent py-1 text-center text-xs font-semibold text-blue-300 underline underline-offset-2 cursor-pointer transition-colors duration-200 hover:text-white disabled:opacity-50"
              ?disabled=${this.fallbackBusy||this.confirming}
              @click=${e=>this.onPriceClick(e)}
            >
              ${u(`store.pay_with_card`)}
            </button>`:s`<button
              class="purchase-sparkle-btn relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center
               hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] disabled:opacity-50"
              ?disabled=${this.fallbackBusy||this.confirming}
              @click=${e=>this.onPriceClick(e)}
            >
              <span class="purchase-sparkle-streak"></span>
              ${e}
            </button>`}
      </div>
    `}renderModal(){return s`
      <div
        class="fixed inset-0 z-[10020] flex items-center justify-center bg-black/80"
        @click=${e=>{e.target===e.currentTarget&&this.closeCardModal()}}
      >
        <div
          class="relative mx-4 max-h-[85vh] w-full max-w-sm overflow-y-auto p-6 rounded-2xl border border-white/15 bg-surface shadow-2xl"
        >
          <button
            @click=${()=>this.closeCardModal()}
            ?disabled=${this.confirming}
            aria-label=${u(`common.close`)}
            class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg text-xl leading-none text-white/50 hover:bg-white/10 hover:text-white transition-all disabled:opacity-30"
          >
            ×
          </button>
          <h2 class="text-lg font-bold text-white mb-4 pr-8">
            ${u(`store.pay_with_card`)}
          </h2>
          ${this.emailRequired?s`<label
                  class="mb-1 block text-xs font-medium text-white/70"
                  for="inline-checkout-email"
                  >${u(`store.card_email_label`)}</label
                >
                <input
                  id="inline-checkout-email"
                  data-checkout-email
                  type="email"
                  autocomplete="email"
                  .value=${this.emailValue}
                  ?disabled=${this.confirming}
                  @input=${e=>{this.emailValue=e.target.value}}
                  class="mb-1 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <p class="mb-3 text-xs text-white/50">
                  ${u(`store.card_email_hint`)}
                </p>`:o}
          <div data-payment-element class="mb-4 min-h-[6rem]"></div>
          ${this.modalError===null?o:s`<p class="mb-4 text-sm font-medium text-red-300">
                ${this.modalError}
              </p>`}
          <button
            @click=${()=>void this.confirmCard()}
            ?disabled=${this.confirming||!this.cardReady||this.emailRequired&&!this.emailLooksValid()}
            class="w-full min-h-11 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-base font-bold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            ${this.confirming?s`<span
                  class="inline-block h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"
                ></span>`:o}
            ${u(`store.pay_amount`,{amount:this.priceLabel})}
          </button>
        </div>
      </div>
    `}};c([e({type:Object})],Z.prototype,`request`,void 0),c([e({type:Number})],Z.prototype,`amountCents`,void 0),c([e({type:String})],Z.prototype,`priceLabel`,void 0),c([e({type:String})],Z.prototype,`successMessageKey`,void 0),c([e({type:Function})],Z.prototype,`onFallback`,void 0),c([t()],Z.prototype,`walletVisible`,void 0),c([t()],Z.prototype,`modalOpen`,void 0),c([t()],Z.prototype,`confirming`,void 0),c([t()],Z.prototype,`cardReady`,void 0),c([t()],Z.prototype,`modalError`,void 0),c([t()],Z.prototype,`fallbackBusy`,void 0),c([t()],Z.prototype,`emailRequired`,void 0),c([t()],Z.prototype,`emailValue`,void 0),Z=c([r(`inline-checkout`)],Z);var Q=`purchase-button-styles`;if(!document.getElementById(Q)){let e=document.createElement(`style`);e.id=Q,e.textContent=`
    @keyframes purchase-streak {
      0%   { left: -60%; opacity: 0; }
      10%  { opacity: 1; }
      90%  { opacity: 1; }
      100% { left: 160%; opacity: 0; }
    }
    .purchase-sparkle-streak {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.5) 50%, transparent 100%);
      transform: skewX(-15deg);
      opacity: 0;
    }
    .purchase-btn-wrap:hover .purchase-sparkle-streak,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-streak {
      animation: purchase-streak 0.7s ease-in-out;
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn {
      background: rgb(37,99,235);
      border-color: rgb(96,165,250);
      color: white;
      box-shadow: 0 0 20px rgba(96,165,250,0.6);
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn-hard,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn-hard {
      background: rgb(29,78,216);
      border-color: rgb(96,165,250);
      color: white;
      box-shadow: 0 0 20px rgba(96,165,250,0.6);
    }
    .purchase-btn-wrap:hover .purchase-sparkle-btn-soft,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-sparkle-btn-soft {
      background: rgb(180,83,9);
      border-color: rgb(217,119,6);
      color: white;
      box-shadow: 0 0 20px rgba(217,119,6,0.6);
    }
    @keyframes purchase-pulse {
      0%   { box-shadow: 0 0 15px rgba(96,165,250,0.6), 0 0 30px rgba(37,99,235,0.3); }
      50%  { box-shadow: 0 0 25px rgba(96,165,250,0.9), 0 0 50px rgba(37,99,235,0.5); }
      100% { box-shadow: 0 0 15px rgba(96,165,250,0.6), 0 0 30px rgba(37,99,235,0.3); }
    }
    .purchase-sparkle-btn:hover {
      background: rgb(29,78,216) !important;
      border-color: rgb(96,165,250) !important;
      color: white !important;
      animation: purchase-pulse 1.2s ease-in-out infinite !important;
    }
    .purchase-sparkle-btn-hard:hover {
      background: rgb(29,78,216) !important;
      border-color: rgb(96,165,250) !important;
      color: white !important;
      animation: purchase-pulse 1.2s ease-in-out infinite !important;
    }
    @keyframes purchase-pulse-soft {
      0%   { box-shadow: 0 0 15px rgba(217,119,6,0.6), 0 0 30px rgba(180,83,9,0.3); }
      50%  { box-shadow: 0 0 25px rgba(217,119,6,0.9), 0 0 50px rgba(180,83,9,0.5); }
      100% { box-shadow: 0 0 15px rgba(217,119,6,0.6), 0 0 30px rgba(180,83,9,0.3); }
    }
    .purchase-sparkle-btn-soft:hover {
      background: rgb(180,83,9) !important;
      border-color: rgb(217,119,6) !important;
      color: white !important;
      animation: purchase-pulse-soft 1.2s ease-in-out infinite !important;
    }
    @keyframes purchase-ember-0 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-35px) translateX(5px) scale(0.2); opacity: 0; }
    }
    @keyframes purchase-ember-1 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-30px) translateX(-6px) scale(0.3); opacity: 0; }
    }
    @keyframes purchase-ember-2 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-40px) translateX(3px) scale(0.2); opacity: 0; }
    }
    @keyframes purchase-ember-3 {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
      100% { transform: translateY(-28px) translateX(-4px) scale(0.3); opacity: 0; }
    }
    .purchase-ember {
      pointer-events: none;
      position: absolute;
      top: var(--purchase-particle-top, 0px);
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: rgba(96,165,250,0.9);
      box-shadow: 0 0 4px rgba(96,165,250,0.8);
      opacity: 0;
      display: none;
    }
    .purchase-ember-0 { left: 20%; animation: purchase-ember-0 1.2s ease-out infinite; }
    .purchase-ember-1 { left: 40%; animation: purchase-ember-1 1.5s ease-out infinite 0.25s; }
    .purchase-ember-2 { left: 60%; animation: purchase-ember-2 1.3s ease-out infinite 0.5s; }
    .purchase-ember-3 { left: 80%; animation: purchase-ember-3 1.6s ease-out infinite 0.15s; }
    .purchase-btn-wrap:hover .purchase-ember,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-ember {
      display: block;
    }
    @keyframes purchase-burst-a { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-70px) translateX(14px) scale(0); opacity:0; } }
    @keyframes purchase-burst-b { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-60px) translateX(-12px) scale(0); opacity:0; } }
    @keyframes purchase-burst-c { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-80px) translateX(8px) scale(0); opacity:0; } }
    @keyframes purchase-burst-d { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-55px) translateX(-16px) scale(0); opacity:0; } }
    @keyframes purchase-burst-e { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-75px) translateX(18px) scale(0); opacity:0; } }
    @keyframes purchase-burst-f { 0% { transform: translateY(0) translateX(0) scale(1.2); opacity:1; } 100% { transform: translateY(-65px) translateX(-6px) scale(0); opacity:0; } }
    .purchase-burst {
      pointer-events: none;
      position: absolute;
      top: var(--purchase-particle-top, 0px);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(96,165,250,1);
      box-shadow: 0 0 6px rgba(96,165,250,0.9), 0 0 2px rgba(255,255,255,0.5);
      opacity: 0;
      display: none;
    }
    .purchase-burst-0  { left: 3%;  animation: purchase-burst-a 0.9s  ease-out infinite 0.00s; }
    .purchase-burst-1  { left: 8%;  animation: purchase-burst-d 1.1s  ease-out infinite 0.73s; }
    .purchase-burst-2  { left: 12%; animation: purchase-burst-c 0.95s ease-out infinite 0.41s; }
    .purchase-burst-3  { left: 16%; animation: purchase-burst-f 1.05s ease-out infinite 0.17s; }
    .purchase-burst-4  { left: 20%; animation: purchase-burst-b 0.85s ease-out infinite 0.89s; }
    .purchase-burst-5  { left: 24%; animation: purchase-burst-e 1.0s  ease-out infinite 0.53s; }
    .purchase-burst-6  { left: 28%; animation: purchase-burst-a 1.1s  ease-out infinite 0.29s; }
    .purchase-burst-7  { left: 32%; animation: purchase-burst-c 0.9s  ease-out infinite 0.97s; }
    .purchase-burst-8  { left: 36%; animation: purchase-burst-f 1.05s ease-out infinite 0.61s; }
    .purchase-burst-9  { left: 40%; animation: purchase-burst-d 0.95s ease-out infinite 0.07s; }
    .purchase-burst-10 { left: 44%; animation: purchase-burst-b 1.0s  ease-out infinite 0.83s; }
    .purchase-burst-11 { left: 48%; animation: purchase-burst-e 0.85s ease-out infinite 0.37s; }
    .purchase-burst-12 { left: 52%; animation: purchase-burst-a 1.1s  ease-out infinite 0.67s; }
    .purchase-burst-13 { left: 56%; animation: purchase-burst-f 0.9s  ease-out infinite 0.11s; }
    .purchase-burst-14 { left: 60%; animation: purchase-burst-c 1.05s ease-out infinite 0.79s; }
    .purchase-burst-15 { left: 64%; animation: purchase-burst-d 0.95s ease-out infinite 0.47s; }
    .purchase-burst-16 { left: 68%; animation: purchase-burst-b 1.0s  ease-out infinite 0.23s; }
    .purchase-burst-17 { left: 72%; animation: purchase-burst-e 0.85s ease-out infinite 1.03s; }
    .purchase-burst-18 { left: 76%; animation: purchase-burst-a 1.1s  ease-out infinite 0.57s; }
    .purchase-burst-19 { left: 80%; animation: purchase-burst-f 0.95s ease-out infinite 0.31s; }
    .purchase-burst-20 { left: 6%;  animation: purchase-burst-b 0.92s ease-out infinite 0.15s; }
    .purchase-burst-21 { left: 14%; animation: purchase-burst-e 1.08s ease-out infinite 0.86s; }
    .purchase-burst-22 { left: 22%; animation: purchase-burst-a 0.88s ease-out infinite 0.44s; }
    .purchase-burst-23 { left: 30%; animation: purchase-burst-d 1.02s ease-out infinite 0.71s; }
    .purchase-burst-24 { left: 38%; animation: purchase-burst-f 0.93s ease-out infinite 0.03s; }
    .purchase-burst-25 { left: 46%; animation: purchase-burst-c 1.07s ease-out infinite 0.59s; }
    .purchase-burst-26 { left: 54%; animation: purchase-burst-b 0.87s ease-out infinite 0.92s; }
    .purchase-burst-27 { left: 62%; animation: purchase-burst-e 0.98s ease-out infinite 0.26s; }
    .purchase-burst-28 { left: 70%; animation: purchase-burst-a 1.12s ease-out infinite 0.64s; }
    .purchase-burst-29 { left: 78%; animation: purchase-burst-d 0.91s ease-out infinite 0.38s; }
    .purchase-burst-30 { left: 84%; animation: purchase-burst-c 1.03s ease-out infinite 0.77s; }
    .purchase-burst-31 { left: 88%; animation: purchase-burst-f 0.86s ease-out infinite 0.09s; }
    .purchase-burst-32 { left: 92%; animation: purchase-burst-b 1.06s ease-out infinite 0.52s; }
    .purchase-burst-33 { left: 96%; animation: purchase-burst-e 0.94s ease-out infinite 0.81s; }
    .purchase-burst-34 { left: 10%; animation: purchase-burst-d 0.89s ease-out infinite 0.34s; }
    .purchase-burst-35 { left: 26%; animation: purchase-burst-a 1.04s ease-out infinite 0.96s; }
    .purchase-burst-36 { left: 42%; animation: purchase-burst-f 0.91s ease-out infinite 0.19s; }
    .purchase-burst-37 { left: 58%; animation: purchase-burst-c 1.09s ease-out infinite 0.69s; }
    .purchase-burst-38 { left: 74%; animation: purchase-burst-b 0.87s ease-out infinite 0.46s; }
    .purchase-burst-39 { left: 90%; animation: purchase-burst-e 1.01s ease-out infinite 0.13s; }
    .purchase-btn-wrap:hover .purchase-burst,
    [data-cosmetic-shell]:hover .purchase-btn-wrap .purchase-burst {
      display: block;
    }
    @keyframes cosmetic-spin {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .cosmetic-loading-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.6);
      border-radius: 0.75rem;
      z-index: 20;
    }
    .cosmetic-loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(255,255,255,0.2);
      border-top-color: rgb(96,165,250);
      border-radius: 50%;
      animation: cosmetic-spin 0.8s linear infinite;
    }
  `,document.head.appendChild(e)}var $=class extends l{constructor(...e){super(...e),this.product=null,this.dollarPrice=``,this.priceHard=null,this.priceSoft=null,this.rarity=`common`,this.dollarLabelKey=``,this.priceSuffix=``,this.itemName=``,this.reserveDollar=!1,this.reserveHard=!1,this.reserveSoft=!1,this.inlineCheckout=null,this.insufficient=null,this.confirmingPurchase=null,this.busy=!1}createRenderRoot(){return this}get offersDollar(){return!!((this.product??this.dollarPrice)&&this.onPurchaseDollar)}get offersHard(){return this.priceHard!==null&&this.onPurchaseHard!==void 0}get offersSoft(){return this.priceSoft!==null&&this.onPurchaseSoft!==void 0}handleClick(e,t){e.stopPropagation(),this.executePurchase(t)}requestCurrencyPurchase(e){let t=e===`hard`?this.onPurchaseHard:this.onPurchaseSoft;!t||this.busy||(this.confirmingPurchase={method:e,amount:(e===`hard`?this.priceHard:this.priceSoft)??0,itemName:this.itemName,handler:t})}executePurchase(e){!e||this.busy||(this.busy=!0,Promise.resolve().then(()=>e()).then(e=>{e&&(this.insufficient=e)}).catch(e=>{console.error(`Purchase callback failed`,e),m(u(`store.purchase_failed`))}).finally(()=>this.busy=!1))}showInsufficient(e){this.insufficient=e}renderDollarButton(){let e=this.dollarPrice||this.product?.price;return e?this.inlineCheckout?s`<inline-checkout
        class="block w-full"
        .request=${this.inlineCheckout.request}
        .amountCents=${this.inlineCheckout.amountCents}
        .successMessageKey=${this.inlineCheckout.successMessageKey}
        .priceLabel=${e}
        .onFallback=${this.onPurchaseDollar}
      ></inline-checkout>`:s`
      <button
        class="purchase-sparkle-btn relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center
         hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>this.handleClick(e,this.onPurchaseDollar)}
      >
        <span class="purchase-sparkle-streak"></span>
        ${this.dollarLabelKey?s`${u(this.dollarLabelKey)} `:o}${e}${this.priceSuffix}
      </button>
    `:o}renderHardButton(){return s`
      <button
        class="purchase-sparkle-btn-hard relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2
         hover:bg-blue-600 hover:border-blue-400 hover:text-white hover:shadow-[0_0_20px_rgba(96,165,250,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>{e.stopPropagation(),this.requestCurrencyPurchase(`hard`)}}
      >
        <plutonium-icon .size=${20} style="margin-top:3px"></plutonium-icon>
        ${this.priceHard.toLocaleString()}
      </button>
    `}renderSoftButton(){return s`
      <button
        class="purchase-sparkle-btn-soft relative overflow-hidden w-full min-h-11 px-2 py-1.5 bg-amber-700/20 text-amber-600 border border-amber-700/30 rounded-lg text-base font-bold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2
         hover:bg-amber-700 hover:border-amber-600 hover:text-white hover:shadow-[0_0_20px_rgba(217,119,6,0.6)]"
        ?disabled=${this.busy}
        @click=${e=>{e.stopPropagation(),this.requestCurrencyPurchase(`soft`)}}
      >
        <cap-icon .size=${22} style="margin-top:3px"></cap-icon>
        ${this.priceSoft.toLocaleString()}
      </button>
    `}renderReservedLine(){return s`<span
      aria-hidden="true"
      class="invisible block w-full min-h-11 px-2 py-1.5 border rounded-lg text-base font-bold"
      >0</span
    >`}render(){let e=this.offersDollar,t=this.offersHard,n=this.offersSoft;return!e&&!t&&!n?o:s`
      <div
        class="no-crazygames w-full mt-2 relative purchase-btn-wrap"
        style="--purchase-particle-top: ${((!e&&this.reserveDollar?1:0)+(!e&&!t&&this.reserveHard?1:0))*3}rem"
        aria-busy=${this.busy?`true`:o}
      >
        ${this.rarity===`common`?null:s`<span class="purchase-ember purchase-ember-0"></span>
              <span class="purchase-ember purchase-ember-1"></span>
              <span class="purchase-ember purchase-ember-2"></span>
              <span class="purchase-ember purchase-ember-3"></span>
              ${Array.from({length:40},(e,t)=>s`<span
                    class="purchase-burst purchase-burst-${t}"
                  ></span>`)}`}
        <div class="flex flex-col gap-1 w-full">
          ${e?this.renderDollarButton():this.reserveDollar?this.renderReservedLine():null}
          ${t?this.renderHardButton():this.reserveHard?this.renderReservedLine():null}
          ${n?this.renderSoftButton():this.reserveSoft?this.renderReservedLine():null}
        </div>
        ${this.busy?s`<div class="cosmetic-loading-overlay">
              <div class="cosmetic-loading-spinner"></div>
            </div>`:o}
      </div>
      ${this.confirmingPurchase?s`<confirm-dialog
            .heading=${u(`store.confirm_purchase_title`)}
            .message=${u(`store.confirm_purchase_body`,{item:this.confirmingPurchase.itemName,amount:this.confirmingPurchase.amount,currency:u(this.confirmingPurchase.method===`hard`?`cosmetics.hard`:`cosmetics.soft`)})}
            variant="warning"
            @confirm=${()=>{let e=this.confirmingPurchase;this.confirmingPurchase=null,this.executePurchase(e?.handler)}}
            @cancel=${()=>this.confirmingPurchase=null}
          ></confirm-dialog>`:o}
      <insufficient-currency-dialog
        .info=${this.insufficient}
        @close=${()=>this.insufficient=null}
      ></insufficient-currency-dialog>
    `}};c([e({type:Object})],$.prototype,`product`,void 0),c([e({type:String})],$.prototype,`dollarPrice`,void 0),c([e({type:Number})],$.prototype,`priceHard`,void 0),c([e({type:Number})],$.prototype,`priceSoft`,void 0),c([e({type:String})],$.prototype,`rarity`,void 0),c([e({type:String})],$.prototype,`dollarLabelKey`,void 0),c([e({type:String})],$.prototype,`priceSuffix`,void 0),c([e({type:String})],$.prototype,`itemName`,void 0),c([e({type:Boolean})],$.prototype,`reserveDollar`,void 0),c([e({type:Boolean})],$.prototype,`reserveHard`,void 0),c([e({type:Boolean})],$.prototype,`reserveSoft`,void 0),c([e({type:Object})],$.prototype,`inlineCheckout`,void 0),c([e({type:Function})],$.prototype,`onPurchaseDollar`,void 0),c([e({type:Function})],$.prototype,`onPurchaseHard`,void 0),c([e({type:Function})],$.prototype,`onPurchaseSoft`,void 0),c([t()],$.prototype,`insufficient`,void 0),c([t()],$.prototype,`confirmingPurchase`,void 0),c([t()],$.prototype,`busy`,void 0),$=c([r(`purchase-button`)],$);function ne(e){let t=new Map;for(let n of e.querySelectorAll(`purchase-button`)){let e=n.closest(`cosmetic-card, custom-currency-card`)??n,r=t.get(e.offsetTop);r?r.push(n):t.set(e.offsetTop,[n])}for(let e of t.values()){let t=e.some(e=>e.offersDollar),n=e.some(e=>e.offersHard),r=e.some(e=>e.offersSoft);for(let i of e)i.reserveDollar=t,i.reserveHard=n,i.reserveSoft=r}}export{y as i,v as n,b as r,ne as t};