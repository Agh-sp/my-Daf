import{t as e}from"./Platform-CHHnD-iM.js";import{t}from"./AssetUrls-DSHI1MKX.js";import{$ as n,et as r,st as i,t as a,z as o}from"./decorate-DDFJEDDP.js";import{ht as s,mt as c}from"./index-BCzm4E-v.js";async function l(t){let n=navigator.userAgentData,r=e.os,i={engine:n?.brands?n.brands.map(e=>e.brand).join(`, `):navigator.userAgent,platform:navigator.platform,os:r,dpr:window.devicePixelRatio},a=`Canvas2D`,o=t.getContext(`webgl2`,{antialias:!0})??t.getContext(`webgl`,{antialias:!0});o&&(a=typeof WebGL2RenderingContext<`u`&&o instanceof WebGL2RenderingContext?`WebGL2`:`WebGL1`);let s={type:a};if(o){s.antialias=o.getContextAttributes()?.antialias??!1,s.maxTextureSize=o.getParameter(o.MAX_TEXTURE_SIZE);let e=o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT);s.shaderHighp=e!==null&&e.precision>0;let t=o.getExtension(`WEBGL_debug_renderer_info`);if(t){let e=o.getParameter(t.UNMASKED_RENDERER_WEBGL);s.gpu={vendor:o.getParameter(t.UNMASKED_VENDOR_WEBGL),renderer:e,software:/swiftshader|llvmpipe|software/i.test(e)}}else s.gpu={unavailable:!0}}let c;if(`getBattery`in navigator)try{let e=await navigator.getBattery();c={charging:e.charging,level:Math.round(e.level*100)+`%`}}catch{c={unavailable:!0}}else c={unavailable:!0};return{browser:i,rendering:s,power:c}}var u=t(`images/InfoIcon.svg`),d=class extends s{constructor(...e){super(...e),this.routerName=`troubleshooting`,this.markdown=`Loading...`,this.loading=!0,this.initialized=!1}async loadDiagnostics(){let e=document.createElement(`canvas`);this.diagnostics=await l(e),this.loading=!1,this.initialized=!0}renderHeaderSlot(){return c({titleContent:i` <div
        class="w-full flex flex-col sm:flex-row justify-between gap-2"
      >
        <span
          class="text-white text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-widest break-words hyphens-auto"
        >
          <a
            class="hover:text-blue-200 text-blue-400 cursor-pointer"
            @click=${this.close}
            >${o(`main.help`)}</a
          >
          / ${o(`troubleshooting.title`)}
        </span>
        <o-button
          variant="primary"
          size="sm"
          translationKey="common.copy"
          @click=${this.copyDiagnostics}
        ></o-button>
      </div>`,onBack:()=>this.close(),ariaLabel:o(`common.back`)})}renderBody(){return this.loading?i``:i`
      <div class="px-1">
        ${this.section(``,i`${this.infoTip(o(`troubleshooting.hardware_acceleration_tip`),!0)}`)}
        ${this.section(o(`troubleshooting.environment`),i`
            ${this.row(o(`troubleshooting.browser`),this.diagnostics.browser.engine)}
            ${this.row(o(`troubleshooting.platform`),this.diagnostics.browser.platform)}
            ${this.row(o(`troubleshooting.os`),this.diagnostics.browser.os)}
            ${this.row(o(`troubleshooting.device_pixel_ratio`),this.diagnostics.browser.dpr)}
            ${this.infoTip(o(`troubleshooting.chromium_tip`))}
          `)}
        ${this.section(o(`troubleshooting.rendering`),i`
            ${this.row(o(`troubleshooting.renderer`),this.describeRenderer(this.diagnostics.rendering))}
            ${this.row(o(`troubleshooting.max_texture_size`),this.diagnostics.rendering.maxTextureSize??o(`troubleshooting.unknown`))}
            ${this.row(o(`troubleshooting.high_precision_shaders`),this.diagnostics.rendering.shaderHighp===!0?o(`troubleshooting.yes`):o(`troubleshooting.no`))}${this.row(o(`troubleshooting.gpu`),!this.diagnostics.rendering.gpu||this.diagnostics.rendering.gpu.unavailable?o(`troubleshooting.unavailable`):`${this.diagnostics.rendering.gpu.vendor} — ${this.diagnostics.rendering.gpu.renderer}`)}
            ${this.infoTip(o(`troubleshooting.gpu_tip`))}
          `)}
        ${this.section(o(`troubleshooting.power`),i`
            ${this.diagnostics.power.unavailable?this.row(o(`troubleshooting.battery`),o(`troubleshooting.unavailable`)):i`
                  ${this.row(o(`troubleshooting.charging`),this.diagnostics.power.charging?o(`troubleshooting.yes`):o(`troubleshooting.no`))}
                  ${this.row(o(`troubleshooting.battery_level`),this.diagnostics.power.level)}
                `}
            ${this.infoTip(o(`troubleshooting.power_saving_tip`))}
          `)}
      </div>
    `}infoTip(e,t){return i`
      <div
        class="mt-2 ${t?`bg-orange-500/10`:`bg-white/10`} flex gap-2 text-white py-1 px-3 rounded-sm  border-1 ${t?`border-orange-400`:`border-white/40`}"
      >
        <img src="${u}" class="w-4" />
        ${e}
      </div>
    `}onOpen(){this.initialized||(this.initialized=!0,this.loadDiagnostics())}section(e,t){return i`
      <div class="px-4 py-3">
        <h4
          class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400"
        >
          ${e}
        </h4>
        <div class="space-y-1">${t}</div>
      </div>
    `}row(e,t){return i`
      <div class="flex justify-between gap-4 text-sm">
        <span class="text-slate-400">${e}</span>
        <span class="text-right text-white max-w-100">${t}</span>
      </div>
    `}async copyDiagnostics(){if(!this.diagnostics)return;let e="```json\n"+JSON.stringify(this.diagnostics,null,2)+"\n```";await navigator.clipboard.writeText(e),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:i`${o(`troubleshooting.copied_to_clipboard`)}`,type:`info`,duration:3e3}}))}describeRenderer(e){return e.gpu?.software?o(`troubleshooting.software_rendering`):e.type===`Canvas2D`?o(`troubleshooting.canvas_2d_no_gpu`):`${e.type}`}close(){let e=this.isOpen();this.unregisterEscapeHandler(),this.onClose(),this.inline?(this.style.pointerEvents=`none`,e&&window.showPage?.(`page-help`)):this.modalEl?.close()}};a([n({type:String})],d.prototype,`markdown`,void 0),a([n({type:Object})],d.prototype,`diagnostics`,void 0),a([n({type:Boolean})],d.prototype,`loading`,void 0),d=a([r(`troubleshooting-modal`)],d);export{d as TroubleshootingModal};