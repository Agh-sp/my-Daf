import{$ as e,et as t,st as n,t as r,tt as i}from"./decorate-CgSmyiMM.js";import{Br as a}from"./index-DmVmrdQe.js";var o=`plutonium-icon-styles`;if(!document.getElementById(o)){let e=document.createElement(`style`);e.id=o,e.textContent=`
    @keyframes plutonium-pulse {
      0%, 100% { opacity: 0.45; transform: scale(1); }
      50%      { opacity: 1;    transform: scale(1.12); }
    }
    @keyframes plutonium-rotate {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,document.head.appendChild(e)}var s=class extends i{constructor(...e){super(...e),this.size=48}createRenderRoot(){return this}render(){return n`
      <div
        class="relative inline-flex items-center justify-center"
        style="width:${this.size}px; height:${this.size}px;"
      >
        <div
          style="position:absolute; inset:-25%; pointer-events:none; background:radial-gradient(circle, rgba(34,197,94,0.5) 0%, rgba(34,197,94,0.22) 40%, transparent 68%); animation: plutonium-pulse 2s ease-in-out infinite; will-change: transform, opacity;"
        ></div>
        <img
          src=${a(`images/PlutoniumIcon.svg`)}
          alt="Plutonium"
          style="position:relative; width:${this.size}px; height:${this.size}px; filter: drop-shadow(0 0 4px rgba(34,197,94,0.6)); animation: plutonium-rotate 7s linear infinite; will-change: transform;"
          draggable="false"
        />
      </div>
    `}};r([e({type:Number})],s.prototype,`size`,void 0),s=r([t(`plutonium-icon`)],s);