import{et as e,st as t,t as n,z as r}from"./decorate-DDFJEDDP.js";import{q as i}from"./Api-BUc1dCNJ.js";import{t as a}from"./InGameModal-Dg_yQR8o.js";import{ht as o,mt as s}from"./index-D0upx8we.js";import"./Difficulties-Dt6XMdGC.js";var c=class extends o{constructor(){super(),this.isAttemptingLogin=!1,this.retryInterval=void 0,this.loginGeneration=0,this.token=null,this.email=null,this.attemptCount=0}modalConfig(){return{maxWidth:`620px`}}renderHeaderSlot(){return s({title:r(`token_login_modal.title`),onBack:()=>this.close(),ariaLabel:r(`common.back`)})}renderBody(){return t`
      <div class="flex-1 flex flex-col gap-4 p-6">
        ${this.email?this.loginSuccess(this.email):this.loggingIn()}
      </div>
    `}loggingIn(){return t`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-blue-400/40 bg-blue-500/10 flex items-center justify-center"
        >
          <div
            class="w-6 h-6 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin"
          ></div>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-lg font-semibold text-white">${r(`token_login_modal.title`)}</p>
          <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-blue-400/80 animate-pulse"></div>
          </div>
        </div>
      </div>
    `}loginSuccess(e){return t`
      <div class="flex items-center gap-4">
        <div
          class="w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-500/10 flex items-center justify-center"
        >
          <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
        <p class="text-base text-white/90">${r(`token_login_modal.success`,{email:e})}</p>
      </div>
    `}openWithToken(e){this.token=e,this.open()}open(e){this.token&&super.open(e)}onOpen(){this.loginGeneration++,this.email=null,this.attemptCount=0,this.isAttemptingLogin=!1,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.requestUpdate(),this.retryInterval=setInterval(()=>this.tryLogin(),3e3),this.tryLogin()}onClose(){this.loginGeneration++,this.token=null,clearInterval(this.retryInterval),clearTimeout(this.successTimeout),this.attemptCount=0,this.isAttemptingLogin=!1}async tryLogin(){let e=this.loginGeneration;if(!this.isAttemptingLogin){if(this.attemptCount>3){this.close(),a(r(`error_modal.login_failed`));return}if(this.attemptCount++,this.isAttemptingLogin=!0,this.token===null){this.close();return}try{let t=await i(this.token);if(e!==this.loginGeneration||t.status===`retry`)return;if(t.status===`failed`){clearInterval(this.retryInterval),this.close();let e={consumed:`error_modal.login_token_consumed`,expired:`error_modal.login_token_expired`,invalid:`error_modal.login_token_invalid`}[t.code];a(r(e));return}this.email=t.email,clearInterval(this.retryInterval),this.successTimeout=setTimeout(()=>{e===this.loginGeneration&&(this.close(),window.location.reload())},1e3),this.requestUpdate()}catch(t){e===this.loginGeneration&&console.error(t)}finally{e===this.loginGeneration&&(this.isAttemptingLogin=!1)}}}};c=n([e(`token-login`)],c);export{c as TokenLoginModal};