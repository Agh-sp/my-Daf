import{$ as e,Q as t,et as n,ot as r,rt as i,st as a,t as o,tt as s,z as c}from"./decorate-DDFJEDDP.js";import{_ as l,h as u,y as d}from"./CosmeticSchemas-DRLyea1I.js";import{a as f}from"./DesktopShell-Cy7M529l.js";import{un as p}from"./index-D0upx8we.js";import"./CapIcon-XQD73Ap1.js";import"./PlutoniumIcon-D5XpOZti.js";import{r as m,t as h}from"./colord-BshiezEt.js";var g=h(`#4ade80`),_=g.toHex(),v=g.darken(.125).toHex(),ee=`#4785b5`,te=`#bedc8a`,ne=.588,y=.588,b=`#ffffff`,re=T(_,.65),ie=T(_,.1),x=[`#ff0000`,`#ff8000`,`#ffff00`,`#ffffff`],ae=x.map((e,t)=>he(e,x[(t+2)%4])),oe=1.2,se=.8,ce=6,le=`M13 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13h11zM6 20H4v-2h2zm0-4H4v-2h2zm0-4H4v-2h2zm5 8H8v-2h3zm0-4H8v-2h3zm0-4H8v-2h3zm3.5-6H6V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7h-3V6.5a.5.5 0 0 0-.5-.5zm7.5 7v9h-2.5v-4h-2v4H15v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z`,ue=[`..D..`,`.DLD.`,`DLLLD`,`.DLD.`,`..D..`],de=[`.....L.....`,`..LLLDLLL..`,`.LLLDDDLLL.`,`.LLDDDDDLL.`,`.LDDDLDDDL.`,`LDDDLLLDDDL`,`.LDDDLDDDL.`,`.LLDDDDDLL.`,`.LLLDDDLLL.`,`..LLLDLLL..`,`.....L.....`],fe=[`.....`,`..D..`,`.DDD.`,`..D..`,`.....`],pe=[`.....`,`.LLL.`,`.LDL.`,`.LLL.`,`.....`],me=[`....M....`,`..MMMMM..`,`.MMMLMMM.`,`.MMLLLMM.`,`MMLLLLLMM`,`.MMLLLMM.`,`.MMMLMMM.`,`..MMMMM..`,`....M....`],S=1,C=2,w=5;function T(e,t){let n=h(e).toHsv();return h({h:n.h,s:n.s,v:n.v*t}).toHex()}function he(e,t,n=.5){let r=h(e).toRgb(),i=h(t).toRgb();return h({r:r.r+(i.r-r.r)*n,g:r.g+(i.g-r.g)*n,b:r.b+(i.b-r.b)*n}).toHex()}function ge(e){return e.filter(e=>h(e).isValid()).map(e=>h(e).toHex())}var E=e=>({fill:e,anim:i});function D(e,t,n,a){let o=n.length;if(o===1||t.type===`spiral`)return{paint:E(n[0]),defs:i};if(t.type===`transition`){let e=t.frequency>0?r`<animate
            attributeName="fill"
            values=${[...n,n[0]].join(`;`)}
            dur="${o/t.frequency}s"
            repeatCount="indefinite"
          ></animate>`:i;return{paint:{fill:n[0],anim:e},defs:i}}let s=Math.max(t.colorSize,.001)*o,[c,l,u,d]=a.space===`world`?[0,0,s/2,s/2]:[a.x,a.y,a.size,a.size],f=t.movementSpeed,p=f===0?i:r`<animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="0 0"
          to="${Math.sign(f)*u} ${Math.sign(f)*d}"
          dur="${Math.min(Math.max(s/Math.abs(f),se),ce)}s"
          repeatCount="indefinite"
        ></animateTransform>`,m=r`<linearGradient
    id=${e}
    gradientUnits="userSpaceOnUse"
    spreadMethod="repeat"
    x1=${c}
    y1=${l}
    x2=${c+u}
    y2=${l+d}
  >
    ${n.map((e,t)=>r`<stop offset=${t/o} stop-color=${e}></stop>`)}
    <stop offset="1" stop-color=${n[0]}></stop>
    ${p}
  </linearGradient>`;return{paint:E(`url(#${e})`),defs:m}}function _e(e,t,n,r){let i=``;return e.forEach((e,a)=>{for(let o=0;o<e.length;o++)e[o]===t&&(i+=`M${n+o} ${r+a}h1v1h-1z`)}),i}function O(e,t,n,i){let a=t-Math.floor(e[0].length/2),o=n-Math.floor(e.length/2);return r`<g shape-rendering="crispEdges">
    ${Object.keys(i).map(t=>{let n=i[t];return r`<path d=${_e(e,t,a,o)} fill=${n.fill}>
        ${n.anim}
      </path>`})}
  </g>`}function k(e){let t=``;for(let n=1;n<e.length;n++){let[r,i]=e[n-1],[a,o]=e[n],s=Math.abs(a-r),c=-Math.abs(o-i),l=r<a?1:-1,u=i<o?1:-1,d=s+c;for(;t+=`M${r} ${i}h1v1h-1z`,!(r===a&&i===o);){let e=2*d;e>=c&&(d+=c,r+=l),e<=s&&(d+=s,i+=u)}}return t}function A(e,t,n){let r=1/3,i=``;for(let a=0;a<3;a++)for(let o=0;o<3;o++){let s=o===1&&a===1;e===S?s||=o===0||o===2:e===C?s||=a===0||a===2:e===w&&(s||=a===2||o===0),s&&(i+=`M${(t+o*r).toFixed(4)} ${(n+a*r).toFixed(4)}h${r.toFixed(4)}v${r.toFixed(4)}h-${r.toFixed(4)}z`)}return i}function ve(e,t,n,r,i,a,o){let s=[];for(let c=e;c<=t;c+=.5){let e=Math.min((t-c)/a,1),l=n+r*Math.sin(Math.PI/2*e)*Math.sin(c/i*2*Math.PI+o);s.push(`${c} ${l.toFixed(2)}`)}return`M ${s.join(` L `)}`}function j(e,t,n){return a`<svg
    class="block w-full h-full"
    viewBox="0 0 ${e} ${e}"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>${t}</defs>
    ${n}
  </svg>`}var M=e=>r`<rect width=${e} height=${e} fill=${ee}></rect>`,N=e=>r`<rect width=${e} height=${e} fill=${te}></rect>
    <rect width=${e} height=${e} fill=${_} fill-opacity=${ne}></rect>`;function ye(e,t,n){let a=[[1,21],[7,16],[12,13],[18,8]],{paint:o,defs:s}=n.length>0?D(e,t,n,{space:`world`}):{paint:E(_),defs:i};return j(24,s,r`${M(24)}
      <path data-trail d=${k(a)} fill=${o.fill} opacity=${y} shape-rendering="crispEdges">
        ${o.anim}
      </path>
      ${O(ue,18,8,{L:E(_),D:E(v)})}`)}function be(e,t,n){let{paint:a,defs:o}=n.length>0?D(e,t,n,{space:`world`}):{paint:E(_),defs:i},s=i;if(t.type===`spiral`&&n.length>0){let e=Math.min(Math.max(Math.round(t.strands),1),8),a=Math.min(Math.max(t.radius,1),8),o=t.rotationSpeed>0?2*Math.PI/t.rotationSpeed:0;s=r`<g data-spiral fill="none" stroke-linecap="round">
      ${Array.from({length:e},(t,s)=>{let c=ve(0,17,12.5,a,10,8,s*2*Math.PI/e),l=n[s%n.length],u=-s*o/e,d=e=>o>0?r`<animate attributeName="opacity" values=${e} dur="${o}s" begin="${u}s" repeatCount="indefinite"></animate>`:i;return r`<g data-strand>
          ${d(`1;0.35;1`)}
          <path d=${c} stroke=${l} stroke-width="2.4" opacity="0.55" style="filter:blur(0.6px);mix-blend-mode:screen"></path>
          <path d=${c} stroke=${l} stroke-width="0.9"></path>
          <path d=${c} stroke="#fff" stroke-width="0.35" opacity="0.9">
            ${d(`0.9;0;0.9`)}
          </path>
        </g>`})}
    </g>`}let c=e=>({fill:e[0],anim:r`<animate attributeName="fill" values=${e.join(`;`)} dur="${oe}s" calcMode="discrete" repeatCount="indefinite"></animate>`});return j(24,o,r`${M(24)}
      <path data-trail d=${k([[0,12],[17,12]])} fill=${a.fill} opacity=${y} shape-rendering="crispEdges">
        ${a.anim}
      </path>
      ${s}
      ${O(me,17,12,{L:c(x),M:c(ae)})}`)}function xe(e,t,n){let{paint:a,defs:o}=n.length>0?D(e,t,n,{space:`icon`,x:-.5,y:-.5,size:1}):{paint:E(re),defs:i},s=.59;return j(1,r`${o}
      <clipPath id="${e}-fill"><circle cx="0.5" cy="0.5" r="0.39"></circle></clipPath>`,r`${N(1)}
      <circle cx="0.5" cy="0.5" r="0.45" fill=${ie}></circle>
      <circle data-fill cx="0.5" cy="0.5" r="0.39" fill=${a.fill}>${a.anim}</circle>
      <g clip-path="url(#${e}-fill)">
        <g
          transform="translate(${(1-s)/2} ${(1-s)/2}) scale(${s/24})"
        >
          <path data-glyph d=${le} fill="#fff"></path>
        </g>
      </g>`)}function Se(e,t,n){let{paint:a,defs:o}=n.length>0?D(e,t,n,{space:`icon`,x:2,y:2,size:11}):{paint:E(_),defs:i};return j(15,o,r`${M(15)}
      ${O(de,7,7,{L:a,D:E(v)})}`)}function Ce(e,t,n){let a=n.length>0?D(e,t,n,{space:`world`}):{paint:E(_),defs:i},o=n.length>0?D(`${e}-dark`,t,n.map(e=>we(e,.6)),{space:`world`}):{paint:E(v),defs:i},s=``;for(let e=0;e<24;e++)s+=A(C,e,11);return j(24,r`${a.defs}${o.defs}`,r`${N(24)}
      <path data-rails d=${s} fill=${b}></path>
      ${[13,15,17].map(e=>O(pe,e,11,{L:a.paint,D:o.paint}))}
      ${O(fe,19,11,{D:o.paint})}`)}function we(e,t){let n=h(e).toRgb();return h({r:n.r*t,g:n.g*t,b:n.b*t}).toHex()}function Te(e,t,n){let{paint:a,defs:o}=n.length>0?D(e,t,n,{space:`world`}):{paint:E(b),defs:i},s=``;for(let e=0;e<15;e++)s+=A(C,e,8);s+=A(w,15,8);for(let e=9;e<24;e++)s+=A(S,15,e);return j(24,o,r`${N(24)}
      <path data-rails d=${s} fill=${a.fill}>${a.anim}</path>`)}var Ee=0,P=class extends s{constructor(...e){super(...e),this.effect=null,this.uid=`effect-scene-${++Ee}`}createRenderRoot(){return this}render(){let e=this.effect;if(e===null)return a``;let t=ge(e.attributes.colors),n;switch(e.effectType){case`transportShipTrail`:n=ye(this.uid,e.attributes,t);break;case`nukeTrail`:n=be(this.uid,e.attributes,t);break;case`structures`:n=xe(this.uid,e.attributes,t);break;case`warship`:n=Se(this.uid,e.attributes,t);break;case`train`:n=Ce(this.uid,e.attributes,t);break;case`railroad`:n=Te(this.uid,e.attributes,t);break}return a`<div
      data-effect-scene=${e.effectType}
      class="w-full h-full rounded-md overflow-hidden"
    >
      ${n}
    </div>`}};o([e({attribute:!1})],P.prototype,`effect`,void 0),P=o([n(`effect-scene`)],P);var F=`#9919ff`,I=class extends s{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}render(){return a`<div
      class="w-full h-full flex items-center justify-center overflow-hidden"
    >
      <div data-ring class="rounded-full" style="width:85%;height:85%;"></div>
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-ring]`);if(!t||!n)return;let r=t.colors.length>0?t.colors:[F],i=n.clientWidth||100,a=t.size>0?t.thickness/t.size:.1,o=Math.min(Math.max(a*i,2),i/2);n.style.borderStyle=`solid`,n.style.borderWidth=`${o}px`,n.style.borderColor=r[0];let s=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);if(this.animations.push(n.animate([{transform:`scale(0.1)`,opacity:1},{transform:`scale(1)`,opacity:0}],{duration:s*1e3,iterations:1/0,easing:`linear`})),r.length>=2&&t.transitionSpeed!==0){let e=t.transitionSpeed>0?r:[...r].reverse();this.animations.push(n.animate([...e,e[0]].map(e=>({borderColor:e})),{duration:r.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};o([e({attribute:!1})],I.prototype,`explosion`,void 0),I=o([n(`shockwave-swatch`)],I);function L(e){let t=Math.sin(e*12.9898+78.233)*43758.5453;return t-Math.floor(t)}var R=class extends s{constructor(...e){super(...e),this.explosion=null,this.animations=[]}createRenderRoot(){return this}dotCount(){let e=this.explosion,t=e?.type===`sparkles`?e.density:10;return Math.round(Math.min(Math.max(t,4),40))}render(){return a`<div data-box class="relative w-full h-full overflow-hidden">
      ${Array.from({length:this.dotCount()},(e,t)=>{let n=L(t)*2*Math.PI,r=Math.sqrt(L(t+101))*42;return a`<div
          data-dot
          class="absolute rounded-full"
          style="left:${50+Math.cos(n)*r}%;top:${50+Math.sin(n)*r}%;transform:translate(-50%,-50%);opacity:0;"
        ></div>`})}
    </div>`}updated(e){if(!e.has(`explosion`))return;for(let e of this.animations)e.cancel();this.animations=[];let t=this.explosion,n=this.querySelector(`[data-box]`);if(!t||!n)return;let r=this.querySelectorAll(`[data-dot]`);if(r.length===0)return;let i=t.colors.length>0?t.colors:[F],a=n.clientWidth||100,o=t.size>0?t.thickness/t.size:.05,s=Math.min(Math.max(o*a,3),a/4),c=Math.min(Math.max(t.size/Math.max(t.speed,.001),.6),3);this.animations.push(n.animate([{transform:`scale(0.05)`,opacity:1,offset:0},{transform:`scale(1)`,opacity:1,offset:.75},{transform:`scale(1)`,opacity:0,offset:1}],{duration:c*1e3,iterations:1/0,easing:`linear`})),r.forEach((e,n)=>{let r=s*(.5+L(n+307));if(e.style.width=`${r}px`,e.style.height=`${r}px`,e.style.backgroundColor=i[n%i.length],this.animations.push(e.animate([{opacity:1},{opacity:.65},{opacity:1}],{duration:(.5+L(n+211)*.6)*1e3,iterations:1/0,easing:`ease-in-out`})),i.length>=2&&t.transitionSpeed!==0){let r=t.transitionSpeed>0?i:[...i].reverse(),a=n%r.length,o=[...r.slice(a),...r.slice(0,a)];this.animations.push(e.animate([...o,o[0]].map(e=>({backgroundColor:e})),{duration:i.length/Math.abs(t.transitionSpeed)*1e3,iterations:1/0,easing:`linear`}))}})}disconnectedCallback(){super.disconnectedCallback();for(let e of this.animations)e.cancel();this.animations=[]}};o([e({attribute:!1})],R.prototype,`explosion`,void 0),R=o([n(`sparkles-swatch`)],R);function z(e,t,n){return e===null?De():a`<pattern-preview-canvas
    .pattern=${e}
    .targetWidth=${t}
    .targetHeight=${n}
  ></pattern-preview-canvas>`}var B=class extends s{constructor(...e){super(...e),this.targetWidth=150,this.targetHeight=150,this.paintedKey=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add(`block`,`h-full`,`w-full`),this.hasUpdated&&this.paint()}disconnectedCallback(){super.disconnectedCallback();let e=this.querySelector(`canvas`);e&&(e.width=0,e.height=0),this.paintedKey=null}render(){return a`<canvas
      role="img"
      aria-label=${c(`cosmetics.pattern_preview`)}
      class="w-full h-full object-contain [image-rendering:pixelated] pointer-events-none"
    ></canvas>`}updated(e){super.updated(e),this.paint()}paint(){let e=this.querySelector(`canvas`),t=Ae(this.pattern,this.targetWidth,this.targetHeight);e===null||t===this.paintedKey||(this.paintedKey=je(e,this.pattern,this.targetWidth,this.targetHeight)?t:null)}};o([e({attribute:!1})],B.prototype,`pattern`,void 0),o([e({attribute:!1})],B.prototype,`targetWidth`,void 0),o([e({attribute:!1})],B.prototype,`targetHeight`,void 0),B=o([n(`pattern-preview-canvas`)],B);function De(){return a`
    <div
      class="md:hidden flex items-center justify-center h-full w-full bg-white rounded overflow-hidden relative border border-[#ccc] box-border"
    >
      <div
        class="grid grid-cols-2 grid-rows-2 gap-0 w-[calc(100%-1px)] h-[calc(100%-2px)] box-border"
      >
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
        <div class="bg-white border border-black/10 box-border"></div>
      </div>
    </div>
    <div
      class="hidden md:flex items-center justify-center h-full w-full rounded overflow-hidden relative text-center p-1"
    >
      <span
        class="text-[10px] font-black text-white/40 uppercase leading-none break-words w-full"
      >
        ${c(`territory_patterns.select_skin`)}
      </span>
    </div>
  `}var Oe=new m(`#ffffff`).toRgb(),ke=new m(`#000000`).toRgb();function Ae(e,t,n){return[e.name,e.patternData,e.colorPalette?.primaryColor??`undefined`,e.colorPalette?.secondaryColor??`undefined`,t,n].join(`-`)}function je(e,t,n,r){let i;try{i=new l({name:t.name,patternData:t.patternData,colorPalette:t.colorPalette},d)}catch(t){return console.error(`Error decoding pattern`,t),e.width=0,e.height=0,!1}let a=i.scaledWidth(),o=i.scaledHeight();n=n===void 0?a:Math.max(1,Math.floor(n/a))*a,r=r===void 0?o:Math.max(1,Math.floor(r/o))*o,e.width=n,e.height=r;let s=e.getContext(`2d`,{willReadFrequently:!0});if(!s)throw Error(`2D context not supported`);let c=s.createImageData(n,r),u=c.data,f=t.colorPalette?.primaryColor?new m(t.colorPalette.primaryColor).toRgb():Oe,p=t.colorPalette?.secondaryColor?new m(t.colorPalette.secondaryColor).toRgb():ke,h=0;for(let e=0;e<r;e++)for(let t=0;t<n;t++){let n=i.isPrimary(t,e)?f:p;u[h++]=n.r,u[h++]=n.g,u[h++]=n.b,u[h++]=255}return s.putImageData(c,0,0),!0}var Me={common:`text-white/60`,uncommon:`text-green-400`,rare:`text-blue-400`,epic:`text-purple-300`,legendary:`text-orange-400`},V=class extends s{constructor(...e){super(...e),this.showAdFree=!1,this.perks=[],this.items=[]}createRenderRoot(){return this}render(){if(!this.artist&&!this.rarity&&!this.colorPalette&&!this.showAdFree&&this.usdValue===void 0&&this.perks.length===0&&this.items.length===0)return i;let e=Me[this.rarity??``]??`text-white/70`;return a`<div
      data-cosmetic-info
      class="group/cosmetic-info pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-end"
      @click=${e=>e.stopPropagation()}
    >
      <button
        type="button"
        aria-label="Show cosmetic details"
        class="pointer-events-auto flex h-7 w-7 cursor-help items-center justify-center rounded-full bg-black/55 text-xs font-black text-white/80 ring-1 ring-white/20 transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        ?
      </button>
      <div
        role="tooltip"
        class="pointer-events-none absolute right-0 top-9 hidden w-max max-w-full flex-col gap-0.5 whitespace-normal rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-left text-xs text-white shadow-xl group-hover/cosmetic-info:flex group-focus-within/cosmetic-info:flex"
      >
        ${this.rarity?a`<div class="font-bold uppercase tracking-wider ${e}">
              ${c(`cosmetics.${this.rarity}`)}
            </div>`:i}
        ${this.showAdFree?a`<div class="font-bold text-green-400">
              ${c(`cosmetics.adfree`)}
            </div>`:i}
        ${this.usdValue===void 0?i:a`<div>
              ${c(`cosmetics.usd_value`,{usd:`$${this.usdValue.toFixed(2)}`})}
            </div>`}
        ${this.perks.map(e=>a`<div class="max-w-56">
              <span class="font-bold text-purple-300">${e.label}:</span>
              <span class="text-white/80">${e.info}</span>
            </div>`)}
        ${this.items.length>0?a`<div data-cosmetic-info-items class="max-w-56">
              <span class="font-bold text-purple-300"
                >${c(`cosmetics.pack_includes`)}</span
              >
              <span class="text-white/80">${this.items.join(`, `)}</span>
            </div>`:i}
        ${this.colorPalette?a`<div>
              ${c(`cosmetics.color_label`)}
              ${p(`territory_patterns.color_palette`,this.colorPalette)}
            </div>`:i}
        ${this.artist?a`<div>
              ${c(`cosmetics.artist_label`)} ${this.artist}
            </div>`:i}
        ${this.aiDisclosed===!0?a`<div class="text-white/70">
                ${c(`cosmetics.ai_label`)}
              </div>`:i}
      </div>
    </div>`}};o([e({type:String})],V.prototype,`artist`,void 0),o([e({type:Boolean})],V.prototype,`aiDisclosed`,void 0),o([e({type:String})],V.prototype,`rarity`,void 0),o([e({type:String})],V.prototype,`colorPalette`,void 0),o([e({type:Boolean})],V.prototype,`showAdFree`,void 0),o([e({type:Number})],V.prototype,`usdValue`,void 0),o([e({type:Array})],V.prototype,`perks`,void 0),o([e({type:Array})],V.prototype,`items`,void 0),V=o([n(`cosmetic-info`)],V);function H(e){let t=e.cosmetic;return t===null?e.type===`crown`||e.type===`flag`?c(`common.none`):c(`territory_patterns.pattern.default`):e.type===`flag`&&e.key===`country:xx`?c(`common.none`):e.type===`pattern`||e.type===`skin`?p(`territory_patterns.pattern`,t.name):e.type===`pack`||e.type===`cosmeticPack`?(t.displayName??``).replace(/(^|[\s-])\p{L}/gu,e=>e.toLocaleUpperCase()):e.type===`subscription`?p(`subscriptions`,t.name):e.type===`effect`?p(`effects`,t.name):e.type===`crown`?p(`crowns`,t.name):p(`flags`,t.name)}function U(e){let t=H(e),n=e.colorPalette;return n===null||e.cosmetic===null?t:c(`inventory.selected_cosmetic_variant`,{name:t,variant:p(`territory_patterns.color_palette`,n.name)})}function Ne(e){switch(e.type){case`pattern`:case`skin`:return c(`cosmetics.type_skin`);case`flag`:return c(`cosmetics.type_flag`);case`crown`:return c(`cosmetics.type_crown`);case`effect`:return c(`cosmetics.type_effect`,{type:c(`effects.type.${e.effectType}`)});default:return``}}function W(e){return e.cosmetic?.rarity??`common`}function Pe(e){switch(W(e)){case`uncommon`:return c(`cosmetics.uncommon`);case`rare`:return c(`cosmetics.rare`);case`epic`:return c(`cosmetics.epic`);case`legendary`:return c(`cosmetics.legendary`);default:return c(`cosmetics.common`)}}var G={common:`bg-white/10 text-white/80 border-white/20`,uncommon:`bg-green-500/15 text-green-300 border-green-400/40`,rare:`bg-blue-500/15 text-blue-300 border-blue-400/40`,epic:`bg-purple-500/15 text-purple-300 border-purple-400/40`,legendary:`bg-orange-500/15 text-orange-300 border-orange-400/40`};function Fe(e){return G[W(e)]??G.common}var K=`400px`,q=new Map,J;function Ie(){return J===void 0?typeof IntersectionObserver>`u`?(J=null,J):(J=new IntersectionObserver(e=>{for(let t of e)q.get(t.target)?.(t.isIntersecting)},{rootMargin:K,scrollMargin:K}),J):J}function Le(){return Ie()!==null}function Re(e,t){let n=Ie();return n===null?(t(!0),()=>{}):(q.set(e,t),n.observe(e),()=>{q.get(e)===t&&(q.delete(e),n.unobserve(e))})}var Y=class extends s{constructor(...e){super(...e),this.size=`card`,this.near=!1,this.stopObserving=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add(`block`,`h-full`,`w-full`),this.stopObserving=Re(this,e=>{this.near=e})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserving?.(),this.stopObserving=null,this.near=!1}render(){return a`<div
      data-cosmetic-preview=${this.resolved.cosmetic===null?`default`:this.resolved.type}
      class=${this.size===`detail`?`h-full w-full`:this.resolved.type===`subscription`?`w-full`:`aspect-square w-full`}
    >
      ${this.near||!this.deferrable()?this.renderResolvedPreview():i}
    </div>`}deferrable(){if(this.size!==`card`)return!1;let e=this.resolved.type;return e===`pattern`||e===`effect`||e===`flag`||e===`crown`||e===`skin`}renderResolvedPreview(){if(this.resolved.type===`pattern`){let e=this.resolved.cosmetic;return z(e===null?null:{name:e.name,patternData:e.pattern,colorPalette:this.resolved.colorPalette??void 0},150,150)}if(this.resolved.type===`skin`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():a`<img
        src=${e.url}
        alt=${H(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`effect`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():u(e)?e.attributes.type===`sparkles`?a`<sparkles-swatch
            class="block w-full h-full"
            .explosion=${e.attributes}
          ></sparkles-swatch>`:a`<shockwave-swatch
          class="block w-full h-full"
          .explosion=${e.attributes}
        ></shockwave-swatch>`:a`<effect-scene
        class="block w-full h-full"
        .effect=${e}
      ></effect-scene>`}if(this.resolved.type===`crown`){let e=this.resolved.cosmetic;return e===null?this.renderDefaultPreview():a`<img
        src=${e.url}
        alt=${H(this.resolved)}
        class="w-full h-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`}if(this.resolved.type===`pack`){let e=this.resolved.cosmetic,t=e.currency===`hard`,n=t?a`<plutonium-icon
            class="block shrink-0"
            .size=${80}
          ></plutonium-icon>`:a`<cap-icon class="block shrink-0" .size=${80}></cap-icon>`,r=t?`text-green-400`:`text-amber-700`,o=t?`cosmetics.hard`:`cosmetics.soft`;return a`<div
        class="relative flex h-full w-full flex-col items-center justify-center gap-0.5 overflow-visible text-center"
      >
        ${n}
        <span class="text-lg font-black leading-none ${r}"
          >${e.amount.toLocaleString()}</span
        >
        <span class="text-[10px] font-bold leading-none text-white/50 uppercase"
          >${c(o)}</span
        >
        ${e.product?.price?a`<span
              data-pack-price
              class="pt-0.5 text-sm font-bold leading-none text-blue-300"
              >${e.product.price}</span
            >`:i}
        ${e.bonusAmount>0?a`<div
              class="absolute top-8 -right-10 w-40 bg-green-500 text-white text-[10px] font-black py-0.5 rotate-45 shadow-md uppercase tracking-wide pointer-events-none"
            >
              ${c(`cosmetics.free`,{numFree:e.bonusAmount.toLocaleString()})}
            </div>`:i}
      </div>`}if(this.resolved.type===`cosmeticPack`)return this.renderPackPreview(this.resolved.packItems??[]);if(this.resolved.type===`subscription`){let e=this.resolved.cosmetic;return a`<div
        class="flex flex-col items-center justify-center h-full w-full text-center gap-2 p-1"
      >
        <div class="flex flex-col items-center gap-1 w-full">
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${24}></plutonium-icon>
            <span class="text-sm font-bold text-green-400"
              >${e.hardCurrencySignupBonus.toLocaleString()}</span
            >
            <span class="text-[10px] text-white/50 uppercase"
              >${c(`cosmetics.signup_bonus`)}</span
            >
          </div>
          <div class="self-start flex items-center gap-1.5">
            <plutonium-icon .size=${24}></plutonium-icon>
            <span class="text-sm font-bold text-green-400"
              >${e.dailyHardCurrency.toLocaleString()}</span
            >
            <span class="text-[10px] text-white/50 uppercase"
              >${c(`cosmetics.per_day`)}</span
            >
          </div>
          <span
            class="self-start text-left text-[10px] font-bold text-purple-300 uppercase tracking-wide"
            ><span class="text-green-400">✓</span> ${c(`cosmetics.verified_name`)}</span
          >
          ${e.unlimitedRanked?a`<span
                class="self-start text-left text-[10px] font-bold text-purple-300 uppercase tracking-wide"
                ><span class="text-green-400">✓</span> ${c(`cosmetics.unlimited_ranked`)}</span
              >`:i}
          ${e.canCreatePublicLobbies?a`<span
                class="self-start text-left text-[10px] font-bold text-purple-300 uppercase tracking-wide"
                ><span class="text-green-400">✓</span> ${c(`cosmetics.public_lobbies`)}</span
              >`:i}
        </div>
      </div>`}return a`<img
      src=${this.resolved.cosmetic.url}
      alt=${H(this.resolved)}
      class="w-full h-full object-contain pointer-events-none"
      draggable="false"
      loading="lazy"
      @error=${e=>{let t=e.currentTarget,n=`/flags/xx.svg`;t.src&&!t.src.endsWith(n)&&(t.src=n)}}
    />`}renderPackPreview(e){let t=e.slice(0,4),n=e.length-t.length;return a`<div
      class="relative grid h-full w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden"
    >
      ${t.map(e=>a`<div
            data-cosmetic-pack-item=${e.key}
            class="flex min-h-0 min-w-0 items-center justify-center overflow-hidden rounded bg-black/30 p-1"
          >
            <cosmetic-preview .resolved=${e} size="card"></cosmetic-preview>
          </div>`)}
      ${n>0?a`<span
            class="absolute bottom-1 right-1 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white"
            >${c(`cosmetics.pack_more_items`,{count:n})}</span
          >`:i}
    </div>`}renderDefaultPreview(){return a`<div
      class="w-full h-full flex items-center justify-center text-white/40 text-xs uppercase"
    >
      ${c(`territory_patterns.pattern.default`)}
    </div>`}};o([e({attribute:!1})],Y.prototype,`resolved`,void 0),o([e({type:String})],Y.prototype,`size`,void 0),o([t()],Y.prototype,`near`,void 0),Y=o([n(`cosmetic-preview`)],Y);function X(e){if(!e||e.cosmetic===null)return!1;let t=e.type;return t!==`flag`&&t!==`crown`&&t!==`subscription`&&t!==`pack`&&t!==`cosmeticPack`}var Z=class extends s{createRenderRoot(){return this}isPreviewable(){return X(this.resolved)}onBubbleClick(e){e.stopPropagation(),e.preventDefault(),this.dispatchEvent(new CustomEvent(`open-cosmetic-preview`,{bubbles:!0,composed:!0,detail:this.resolved}))}render(){return this.isPreviewable()?a`<div
      data-cosmetic-preview-bubble
      class="group/preview-bubble absolute right-2 bottom-2 z-10"
      @click=${this.onBubbleClick}
    >
      <button
        type="button"
        aria-label=${c(`store.preview_cosmetic`)}
        title=${c(`store.preview_cosmetic`)}
        class="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-black/60 text-cyan-300 ring-1 ring-cyan-400/40 shadow-md shadow-black/60 transition-all duration-150 hover:scale-110 hover:bg-cyan-950/80 hover:text-cyan-200 hover:ring-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <svg
          class="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </button>
    </div>`:i}};o([e({attribute:!1})],Z.prototype,`resolved`,void 0),Z=o([n(`cosmetic-preview-bubble`)],Z);var Q,ze=`cosmetic-card-styles`;if(!document.getElementById(ze)){let e=document.createElement(`style`);e.id=ze,e.textContent=`
    @keyframes cosmetic-card-legendary-pulse {
      0%, 100% { box-shadow: 0 0 15px rgba(251,146,60,0.8), 0 0 30px rgba(251,146,60,0.4); }
      50% { box-shadow: 0 0 25px rgba(251,146,60,0.9), 0 0 45px rgba(251,146,60,0.5); }
    }
    @keyframes cosmetic-card-shimmer {
      0% { left: -60%; }
      100% { left: 160%; }
    }
    @keyframes cosmetic-card-border-sweep {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes cosmetic-card-sparkle-0 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      40%, 60% { opacity: 1; transform: scale(1.2) rotate(20deg); }
    }
    @keyframes cosmetic-card-sparkle-1 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      30%, 55% { opacity: 1; transform: scale(1.1) rotate(-15deg); }
    }
    @keyframes cosmetic-card-sparkle-2 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      45%, 65% { opacity: 1; transform: scale(1.3) rotate(10deg); }
    }
    @keyframes cosmetic-card-sparkle-3 {
      0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
      35%, 58% { opacity: 1; transform: scale(1) rotate(-20deg); }
    }

    [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      background: linear-gradient(to top, rgba(80,80,80,0.55) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(255,255,255,0.15);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      background: linear-gradient(to top, rgba(30,100,30,0.65) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(74,222,128,0.45);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      background: linear-gradient(to top, rgba(20,60,160,0.7) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(96,165,250,0.5);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      background: linear-gradient(to top, rgba(90,20,160,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(192,132,252,0.6);
    }
    [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      background: linear-gradient(to top, rgba(180,80,0,0.75) 0%, rgba(15,15,20,0.85) 100%);
      border-color: rgba(251,146,60,0.65);
    }

    cosmetic-card:hover { position: relative; z-index: 10; }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="common"] {
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="uncommon"] {
      transform: translateY(-4px);
      box-shadow: 0 0 12px rgba(74,222,128,0.6);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="rare"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(96,165,250,0.7);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="epic"] {
      transform: translateY(-4px);
      box-shadow: 0 0 14px rgba(192,132,252,0.85);
    }
    cosmetic-card:hover [data-cosmetic-shell][data-cosmetic-rarity="legendary"] {
      transform: translateY(-6px) scale(1.12);
      animation: cosmetic-card-legendary-pulse 1.4s ease-in-out infinite;
    }

    [data-cosmetic-main], [data-cosmetic-action] {
      position: relative;
      z-index: 3;
    }
    [data-cosmetic-shimmer] {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: 2;
      overflow: hidden;
      border-radius: 0.75rem;
      opacity: 0;
    }
    [data-cosmetic-shimmer]::after {
      content: "";
      pointer-events: none;
      position: absolute;
      top: 0;
      left: -60%;
      width: 40%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(192,132,252,0.45) 50%, transparent 100%);
      transform: skewX(-15deg);
    }
    [data-cosmetic-rarity="legendary"] [data-cosmetic-shimmer]::after {
      background: linear-gradient(90deg, transparent 0%, rgba(255,200,80,0.5) 50%, transparent 100%);
    }
    cosmetic-card:hover [data-cosmetic-shimmer] { opacity: 1; }
    cosmetic-card:hover [data-cosmetic-shimmer]::after {
      animation: cosmetic-card-shimmer 0.8s ease-in-out;
    }

    /* A gold conic gradient spinning about the card's centre, clipped to the
       card's rounded box. z-index:-1 puts it above the shell's own background
       but below the card content, so it reads as a full-card overlay sweeping
       around behind the preview and name. */
    [data-cosmetic-border-sweep] {
      pointer-events: none;
      position: absolute;
      inset: -2px;
      z-index: -1;
      display: block;
      border-radius: 0.85rem;
      overflow: hidden;
      opacity: 0;
    }
    [data-cosmetic-border-sweep]::after {
      content: "";
      position: absolute;
      inset: -100%;
      transform-origin: center;
      will-change: transform;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(255,200,80,0) 60deg,
        rgba(255,200,80,0.9) 120deg,
        rgba(255,200,80,1) 180deg,
        rgba(255,200,80,0.9) 240deg,
        rgba(255,200,80,0) 300deg,
        transparent 360deg
      );
    }
    cosmetic-card:hover [data-cosmetic-border-sweep] {
      opacity: 1;
    }
    cosmetic-card:hover [data-cosmetic-border-sweep]::after {
      animation: cosmetic-card-border-sweep 8s linear infinite;
    }

    [data-cosmetic-sparkle] {
      pointer-events: none;
      position: absolute;
      z-index: 11;
      display: block;
      width: 14px;
      height: 9px;
      line-height: 1;
      opacity: 0;
      filter: drop-shadow(0 0 5px rgba(255, 220, 140, 0.82));
    }
    [data-cosmetic-sparkle] svg {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 1px;
    }
    cosmetic-card:hover [data-cosmetic-sparkle="0"] { animation: cosmetic-card-sparkle-0 1.6s ease-in-out infinite; }
    cosmetic-card:hover [data-cosmetic-sparkle="1"] { animation: cosmetic-card-sparkle-1 1.9s ease-in-out infinite 0.3s; }
    cosmetic-card:hover [data-cosmetic-sparkle="2"] { animation: cosmetic-card-sparkle-2 1.7s ease-in-out infinite 0.7s; }
    cosmetic-card:hover [data-cosmetic-sparkle="3"] { animation: cosmetic-card-sparkle-3 2s ease-in-out infinite 0.1s; }

    /* No prefers-reduced-motion opt-out: these animations are the legendary
       treatment, and suppressing them left the card with a frozen gold wash
       and invisible (opacity: 0) sparkles rather than a calmer effect. */
  `,document.head.appendChild(e)}var $=class extends s{static{Q=this}constructor(...e){super(...e),this.variants=[],this.activeVariantKey=null,this.state=`idle`,this.showSwatches=!0,this.interactive=!0,this.actionContent=i,this.onHoverStart=()=>{W(this.activeResolved)===`legendary`&&(Q.ensureBackdrop().style.background=`rgba(0,0,0,0.6)`)},this.onHoverEnd=()=>{Q.backdrop!==null&&(Q.backdrop.style.background=`rgba(0,0,0,0)`)}}get activeResolved(){return this.variants.find(e=>e.key===this.activeVariantKey)??this.resolved}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.addEventListener(`mouseenter`,this.onHoverStart),this.addEventListener(`mouseleave`,this.onHoverEnd)}disconnectedCallback(){this.removeEventListener(`mouseenter`,this.onHoverStart),this.removeEventListener(`mouseleave`,this.onHoverEnd),this.onHoverEnd(),super.disconnectedCallback()}static{this.backdrop=null}static ensureBackdrop(){return Q.backdrop??=(()=>{let e=document.createElement(`div`);return e.dataset.cosmeticBackdrop=``,e.style.cssText=`
        pointer-events: none;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0);
        z-index: 9;
        transition: background 0.3s ease;
      `,document.body.appendChild(e),e})(),Q.backdrop}updated(){this.dataset.cosmeticState=this.state}rarityClass(e){switch(e){case`uncommon`:return`border-zinc-300/70`;case`rare`:return`border-violet-300/70`;case`epic`:return`border-fuchsia-300/70`;case`legendary`:return`border-amber-400/70`;default:return`border-white/20`}}rarityHoverClass(e){switch(e){case`uncommon`:return`hover:shadow-[0_14px_30px_rgba(74,222,128,0.22)]`;case`rare`:return`hover:shadow-[0_14px_30px_rgba(96,165,250,0.28)]`;case`epic`:return`hover:shadow-[0_14px_34px_rgba(232,121,249,0.32)]`;case`legendary`:return`hover:shadow-[0_16px_38px_rgba(251,191,36,0.38)]`;default:return`hover:shadow-[0_12px_26px_rgba(255,255,255,0.14)]`}}renderSwatches(){let e=this.variants.filter(e=>e.colorPalette!==null||e.type===`pattern`&&e.cosmetic!==null);if(!this.interactive||!this.showSwatches||e.length===0)return i;let t=this.activeResolved.key;return a`<div
      data-cosmetic-swatches
      class="flex flex-wrap items-center justify-center gap-1 w-full pt-2"
    >
      ${e.map(e=>{let n=e.colorPalette,r=n?.primaryColor??`#ffffff`,i=n?.secondaryColor??`#000000`,o=e.key===t,s=n?p(`territory_patterns.color_palette`,n.name):c(`territory_patterns.pattern.default`);return a`<button
          type="button"
          data-variant-key=${e.key}
          title=${s}
          aria-label=${s}
          aria-pressed=${o?`true`:`false`}
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full p-0 m-0 appearance-none cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1 transition-transform duration-150 hover:scale-110"
          @click=${t=>{t.stopPropagation(),this.onVariantActivate?.(e)}}
        >
          <span
            data-cosmetic-swatch-dot
            aria-hidden="true"
            class="h-5 w-5 rounded-full ${o?`scale-110 ring-2 ring-white`:``}"
            style="background-image: linear-gradient(135deg, ${r} 0 calc(50% - 0.5px), rgba(255,255,255,0.55) calc(50% - 0.5px) calc(50% + 0.5px), ${i} calc(50% + 0.5px) 100%);"
          ></span>
        </button>`})}
    </div>`}subscriptionPerks(){if(this.activeResolved.type!==`subscription`)return[];let e=this.activeResolved.cosmetic,t=[{label:c(`cosmetics.verified_name`),info:c(`cosmetics.verified_name_info`)}];return e.unlimitedRanked&&t.push({label:c(`cosmetics.unlimited_ranked`),info:c(`cosmetics.unlimited_ranked_info`)}),e.canCreatePublicLobbies&&t.push({label:c(`cosmetics.public_lobbies`),info:c(`cosmetics.public_lobbies_info`)}),t}render(){let e=this.activeResolved,t=W(e),n=H(e),r=this.state===`focused`,o=this.state===`equipped`,s=`${this.rarityClass(t)} ${o?`ring-2 ring-emerald-400/70 shadow-[0_0_24px_rgba(52,211,153,0.45)]`:``} ${this.rarityHoverClass(t)}`,l=e.cosmetic,u=l?.priceHard===void 0?void 0:l.priceHard/20,d=a`
      <div class="relative w-full flex-1 ${e.type===`subscription`?`h-auto`:`aspect-square`}">
        <div
          class="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white/5 p-2"
        >
          <cosmetic-preview .resolved=${e} size="card"></cosmetic-preview>
        </div>
        ${o?a`<span
              data-cosmetic-equipped="true"
              class="absolute bottom-1 left-1 z-[4] rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-200/70"
              >✓ ${c(`inventory.equipped`)}</span
            >`:i}
      </div>
    `,p=a`<span
      data-cosmetic-name
      class="w-full capitalize  whitespace-normal break-words px-3 pt-3 text-center text-sm font-bold leading-tight text-white ${this.interactive?`cursor-pointer`:``}"
      @click=${()=>this.interactive&&this.onActivate?.(e)}
      >${n}</span
    >`;return a`<div
      data-cosmetic-shell
      data-cosmetic-state=${this.state}
      data-cosmetic-rarity=${t}
      class="relative flex h-full flex-col items-center overflow-visible rounded-xl border transition-all duration-200 ease-out hover:-translate-y-1 ${s}"
    >
      ${t===`epic`||t===`legendary`?a`<span data-cosmetic-shimmer aria-hidden="true"></span>`:i}
      ${t===`legendary`?a`<span data-cosmetic-border-sweep aria-hidden="true"></span>
            <span
              data-cosmetic-sparkle="0"
              aria-hidden="true"
              style="top: 4px; left: 4px"
              ><svg viewBox="0 0 36 24">
                <path fill="#239f40" d="M1 1h34v7H1z" />
                <path fill="#fff" d="M1 8h34v8H1z" />
                <path fill="#da0000" d="M1 16h34v7H1z" />
                <path
                  fill="#da0000"
                  d="M18 9.5 16 12l2 2.5 2-2.5-2-2.5Z"
                /></svg
            ></span>
            <span
              data-cosmetic-sparkle="1"
              aria-hidden="true"
              style="top: 4px; right: 4px"
              ><svg viewBox="0 0 36 24">
                <path fill="#239f40" d="M1 1h34v7H1z" />
                <path fill="#fff" d="M1 8h34v8H1z" />
                <path fill="#da0000" d="M1 16h34v7H1z" />
                <path
                  fill="#da0000"
                  d="M18 9.5 16 12l2 2.5 2-2.5-2-2.5Z"
                /></svg
            ></span>
            <span
              data-cosmetic-sparkle="2"
              aria-hidden="true"
              style="bottom: 4px; left: 4px"
              ><svg viewBox="0 0 36 24">
                <path fill="#239f40" d="M1 1h34v7H1z" />
                <path fill="#fff" d="M1 8h34v8H1z" />
                <path fill="#da0000" d="M1 16h34v7H1z" />
                <path
                  fill="#da0000"
                  d="M18 9.5 16 12l2 2.5 2-2.5-2-2.5Z"
                /></svg
            ></span>
            <span
              data-cosmetic-sparkle="3"
              aria-hidden="true"
              style="bottom: 4px; right: 4px"
              ><svg viewBox="0 0 36 24">
                <path fill="#239f40" d="M1 1h34v7H1z" />
                <path fill="#fff" d="M1 8h34v8H1z" />
                <path fill="#da0000" d="M1 16h34v7H1z" />
                <path
                  fill="#da0000"
                  d="M18 9.5 16 12l2 2.5 2-2.5-2-2.5Z"
                /></svg
            ></span>`:i}
      ${p}
      <!-- The info bubble anchors to this wrapper, not the whole card, so it
           lands on the artwork's corner instead of over the name — and stays
           outside the card's own button, which may not nest a control.
           flex-1 down this chain hands any row-stretch slack (a taller
           sibling card, e.g. the custom-amount slider) to the artwork box,
           instead of pooling it as a void between artwork and buttons. -->
      <div class="relative w-full flex-1 flex flex-col">
        ${this.interactive?a`<button
              type="button"
              data-cosmetic-main
              aria-label=${n}
              aria-pressed=${o?`true`:i}
              aria-current=${r?`true`:i}
              class="group relative flex flex-1 flex-col items-center gap-2 w-full rounded-xl px-3 pb-3 pt-2 cursor-pointer outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-1"
              @click=${()=>this.onActivate?.(e)}
            >
              ${d}
            </button>`:a`<div
              data-cosmetic-main
              class="group relative flex flex-1 w-full flex-col items-center gap-2 rounded-xl px-3 pb-3 pt-2"
            >
              ${d}
            </div>`}
        ${this.interactive&&e.cosmetic!==null?a`<cosmetic-info
                .artist=${l?.artist}
                .aiDisclosed=${l?.aiDisclosed}
                .rarity=${t}
                .colorPalette=${e.colorPalette?.name}
                .showAdFree=${e.relationship===`purchasable`&&!f()}
                .usdValue=${u}
                .perks=${this.subscriptionPerks()}
                .items=${(e.packItems??[]).map(U)}
              ></cosmetic-info>
              <cosmetic-preview-bubble
                .resolved=${e}
              ></cosmetic-preview-bubble>`:i}
      </div>
      ${this.renderSwatches()}
      ${this.actionContent===i?i:a`<div data-cosmetic-action class="mt-auto w-full px-3 pb-3 pt-2">
            ${this.actionContent}
          </div>`}
    </div>`}};o([e({attribute:!1})],$.prototype,`resolved`,void 0),o([e({attribute:!1})],$.prototype,`variants`,void 0),o([e({type:String})],$.prototype,`activeVariantKey`,void 0),o([e({type:String})],$.prototype,`state`,void 0),o([e({type:Boolean})],$.prototype,`showSwatches`,void 0),o([e({type:Boolean})],$.prototype,`interactive`,void 0),o([e({attribute:!1})],$.prototype,`onActivate`,void 0),o([e({attribute:!1})],$.prototype,`onVariantActivate`,void 0),o([e({attribute:!1})],$.prototype,`actionContent`,void 0),$=Q=o([n(`cosmetic-card`)],$);export{Fe as a,Ne as c,H as i,z as l,Le as n,Pe as o,Re as r,U as s,X as t};