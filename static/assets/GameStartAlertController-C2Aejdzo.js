import{u as e}from"./UserSettings-BhVaDNmN.js";import{t}from"./vendor-DPAo4oW-.js";import{t as n}from"./AssetUrls-DSHI1MKX.js";import{st as r,z as i}from"./decorate-DDFJEDDP.js";var a=t(),o=class{constructor(t,n){this.host=t,this.isWaitingForGame=n,this.armed=!1,this.sound=null,this.userSettings=new e,this.toggle=()=>{if(this.armed){this.armed=!1,this.host.requestUpdate();return}this.armed=!0,this.host.requestUpdate(),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:i(`public_lobby.notify_armed`),duration:3e3,color:`green`}})),typeof Notification<`u`&&Notification.permission==="default"&&Notification.requestPermission(),this.loadSound()},this.handleGameStarting=()=>{if(!(!this.armed||!this.isWaitingForGame())){try{this.loadSound().play()}catch(e){console.warn(`Failed to play game-start alert sound`,e)}if(!(typeof Notification>`u`||Notification.permission!==`granted`))try{let e=new Notification(i(`public_lobby.notify_started`));e.onclick=()=>{window.focus(),e.close()}}catch(e){console.warn(`Failed to show game-start notification`,e)}}},t.addController(this)}hostConnected(){document.addEventListener(`game-starting`,this.handleGameStarting)}hostDisconnected(){document.removeEventListener(`game-starting`,this.handleGameStarting)}renderBell(){let e=i(this.armed?`public_lobby.notify_on`:`public_lobby.notify_off`);return r`<button
      type="button"
      class="inline-flex ml-auto p-1 rounded-lg transition-colors ${this.armed?`text-amber-300 hover:text-amber-200`:`text-white/40 hover:text-white`}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.armed}
      @click=${this.toggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill=${this.armed?`currentColor`:`none`}
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </button>`}reset(){this.armed=this.userSettings.lobbyStartAlerts(),this.armed&&this.loadSound(),this.host.requestUpdate()}loadSound(){return this.sound??=new a.Howl({src:[n(`sounds/effects/game-start-alert.mp3`)]}),this.sound}};export{o as t};