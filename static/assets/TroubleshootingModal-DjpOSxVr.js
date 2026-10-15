import{t as e}from"./Platform-ChKbd54A.js";import{$ as t,et as n,st as r,t as i,z as a}from"./decorate-CgSmyiMM.js";import{Lr as o,vt as s,yt as c}from"./index-7sHmUmdC.js";async function l(t){let n=navigator.userAgentData,r=e.os,i={engine:n?.brands?n.brands.map(e=>e.brand).join(`, `):navigator.userAgent,platform:navigator.platform,os:r,dpr:window.devicePixelRatio},a=`Canvas2D`,o=t.getContext(`webgl2`,{antialias:!0})??t.getContext(`webgl`,{antialias:!0});o&&(a=typeof WebGL2RenderingContext<`u`&&o instanceof WebGL2RenderingContext?`WebGL2`:`WebGL1`);let s={type:a};if(o){s.antialias=o.getContextAttributes()?.antialias??!1,s.maxTextureSize=o.getParameter(o.MAX_TEXTURE_SIZE);let e=o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT);s.shaderHighp=e!==null&&e.precision>0;let t=o.getExtension(`WEBGL_debug_renderer_info`);if(t){let e=o.getParameter(t.UNMASKED_RENDERER_WEBGL);s.gpu={vendor:o.getParameter(t.UNMASKED_VENDOR_WEBGL),renderer:e,software:/swiftshader|llvmpipe|software/i.test(e)}}else s.gpu={unavailable:!0}}let c;if(`getBattery`in navigator)try{let e=await navigator.getBattery();c={charging:e.charging,level:Math.round(e.level*100)+`%`}}catch{c={unavailable:!0}}else c={unavailable:!0};return{browser:i,rendering:s,power:c}}var u=o(`images/InfoIcon.svg`),d=class extends c{constructor(...e){super(...e),this.routerName=`troubleshooting`,this.markdown=`Loading...`,this.loading=!0,this.initialized=!1}async loadDiagnostics(){let e=document.createElement(`canvas`);this.diagnostics=await l(e),this.loading=!1,this.initialized=!0}renderHeaderSlot(){return s({titleContent:r` <div
        class="w-full flex flex-col sm:flex-row justify-between gap-2"
      >
        <span
          class="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest break-words hyphens-auto"
        >
          <a
            class="hover:text-blue-200 text-blue-400 cursor-pointer"
            @click=${this.close}
            >${a(`main.help`)}</a
          >
          / ${a(`troubleshooting.title`)}
        </span>
        <o-button
          variant="primary"
          size="sm"
          translationKey="common.copy"
          @click=${this.copyDiagnostics}
        ></o-button>
      </div>`,onBack:()=>this.close(),ariaLabel:a(`common.back`)})}renderBody(){return this.loading?r``:r`
      <div class="px-1">
        ${this.section(``,r`${this.infoTip(a(`troubleshooting.hardware_acceleration_tip`),!0)}`)}
        ${this.section(a(`troubleshooting.environment`),r`
            ${this.row(a(`troubleshooting.browser`),this.diagnostics.browser.engine)}
            ${this.row(a(`troubleshooting.platform`),this.diagnostics.browser.platform)}
            ${this.row(a(`troubleshooting.os`),this.diagnostics.browser.os)}
            ${this.row(a(`troubleshooting.device_pixel_ratio`),this.diagnostics.browser.dpr)}
            ${this.infoTip(a(`troubleshooting.chromium_tip`))}
          `)}
        ${this.section(a(`troubleshooting.rendering`),r`
            ${this.row(a(`troubleshooting.renderer`),this.describeRenderer(this.diagnostics.rendering))}
            ${this.row(a(`troubleshooting.max_texture_size`),this.diagnostics.rendering.maxTextureSize??a(`troubleshooting.unknown`))}
            ${this.row(a(`troubleshooting.high_precision_shaders`),this.diagnostics.rendering.shaderHighp===!0?a(`troubleshooting.yes`):a(`troubleshooting.no`))}${this.row(a(`troubleshooting.gpu`),!this.diagnostics.rendering.gpu||this.diagnostics.rendering.gpu.unavailable?a(`troubleshooting.unavailable`):`${this.diagnostics.rendering.gpu.vendor} — ${this.diagnostics.rendering.gpu.renderer}`)}
            ${this.infoTip(a(`troubleshooting.gpu_tip`))}
          `)}
        ${this.section(a(`troubleshooting.power`),r`
            ${this.diagnostics.power.unavailable?this.row(a(`troubleshooting.battery`),a(`troubleshooting.unavailable`)):r`
                  ${this.row(a(`troubleshooting.charging`),this.diagnostics.power.charging?a(`troubleshooting.yes`):a(`troubleshooting.no`))}
                  ${this.row(a(`troubleshooting.battery_level`),this.diagnostics.power.level)}
                `}
            ${this.infoTip(a(`troubleshooting.power_saving_tip`))}
          `)}
      </div>
    `}infoTip(e,t){return r`
      <div
        class="mt-2 ${t?`bg-orange-500/10`:`bg-white/10`} flex gap-2 text-white py-1 px-3 rounded-sm  border-1 ${t?`border-orange-400`:`border-white/40`}"
      >
        <img src="${u}" class="w-4" />
        ${e}
      </div>
    `}onOpen(){this.initialized||(this.initialized=!0,this.loadDiagnostics())}section(e,t){return r`
      <div class="px-4 py-3">
        <h4
          class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          ${e}
        </h4>
        <div class="space-y-1">${t}</div>
      </div>
    `}row(e,t){return r`
      <div class="flex justify-between gap-4 text-sm">
        <span class="text-slate-400">${e}</span>
        <span class="text-right text-white max-w-100">${t}</span>
      </div>
    `}async copyDiagnostics(){if(!this.diagnostics)return;let e="```json\n"+JSON.stringify(this.diagnostics,null,2)+"\n```";await navigator.clipboard.writeText(e),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:r`${a(`troubleshooting.copied_to_clipboard`)}`,type:`info`,duration:3e3}}))}describeRenderer(e){return e.gpu?.software?a(`troubleshooting.software_rendering`):e.type===`Canvas2D`?a(`troubleshooting.canvas_2d_no_gpu`):`${e.type}`}close(){let e=this.isOpen();this.unregisterEscapeHandler(),this.onClose(),this.inline?(this.style.pointerEvents=`none`,e&&window.showPage?.(`page-help`)):this.modalEl?.close()}};i([t({type:String})],d.prototype,`markdown`,void 0),i([t({type:Object})],d.prototype,`diagnostics`,void 0),i([t({type:Boolean})],d.prototype,`loading`,void 0),d=i([n(`troubleshooting-modal`)],d);export{d as TroubleshootingModal};