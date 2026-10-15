const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./WebGLGate-SQQwSByS.js","./decorate-CgSmyiMM.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./CosmeticSchemas-DRLyea1I.js","./Platform-ChKbd54A.js","./DesktopShell-Cy7M529l.js"])))=>i.map(i=>d[i]);
import{t as e}from"./AssetUrls-DSHI1MKX.js";import{g as t,p as n,u as r,v as i,y as a}from"./CosmeticSchemas-DRLyea1I.js";import{t as o}from"./preload-helper-DqxmgrHA.js";import{t as s}from"./colord-BshiezEt.js";import{t as c}from"./render-settings-CNuf-48P.js";import{n as l,t as u}from"./BuildIcons-CDi3EHiD.js";import{n as d}from"./RenderSettings-BXksGfUX.js";var f=function(e){return e[e.Tile=0]=`Tile`,e[e.Unit=1]=`Unit`,e[e.Player=2]=`Player`,e[e.DisplayEvent=3]=`DisplayEvent`,e[e.DisplayChatEvent=4]=`DisplayChatEvent`,e[e.AllianceRequest=5]=`AllianceRequest`,e[e.AllianceRequestReply=6]=`AllianceRequestReply`,e[e.BrokeAlliance=7]=`BrokeAlliance`,e[e.AllianceExpired=8]=`AllianceExpired`,e[e.AllianceExtension=9]=`AllianceExtension`,e[e.TargetPlayer=10]=`TargetPlayer`,e[e.Emoji=11]=`Emoji`,e[e.Win=12]=`Win`,e[e.Hash=13]=`Hash`,e[e.UnitIncoming=14]=`UnitIncoming`,e[e.BonusEvent=15]=`BonusEvent`,e[e.RailroadDestructionEvent=16]=`RailroadDestructionEvent`,e[e.RailroadConstructionEvent=17]=`RailroadConstructionEvent`,e[e.RailroadSnapEvent=18]=`RailroadSnapEvent`,e[e.ConquestEvent=19]=`ConquestEvent`,e[e.EmbargoEvent=20]=`EmbargoEvent`,e[e.SpawnPhaseEnd=21]=`SpawnPhaseEnd`,e[e.GamePaused=22]=`GamePaused`,e[e.DonateEvent=23]=`DonateEvent`,e}({}),p=1.5,m=4096;function h(e,t,n){let r=new Map;for(let n of e){let e=n%t,i=(n-e)/t,a=r.get(i);a===void 0?r.set(i,{min:e,max:e}):(e<a.min&&(a.min=e),e>a.max&&(a.max=e))}let i=[...r.keys()].sort((e,t)=>e-t),a=[];for(let e of i){let t=r.get(e),n=t.max-t.min+1,i=a[a.length-1];if(i&&i.y+i.h===e){let e=Math.min(i.x,t.min),r=Math.max(i.x+i.w-1,t.max),a=(r-e+1)*(i.h+1),o=i.sourceArea+n,s=a-o;if(a<=o*p||s<=m){i.x=e,i.w=r-e+1,i.h++,i.sourceArea=o;continue}}a.push({x:t.min,y:e,w:n,h:1,sourceArea:n})}let o=0;for(let e of a)o+=e.w*e.h;let s=new Uint8Array(o),c=Array(a.length),l=0;for(let e=0;e<a.length;e++){let{x:r,y:i,w:o,h:u}=a[e];for(let e=0;e<u;e++){let a=(i+e)*t;for(let e=0;e<o;e++)s[l++]=n(a+r+e)}c[e]={x:r,y:i,w:o,h:u}}return{rects:c,bytes:s}}function g(e,t){t.changedTiles?(t.changedTiles.length>0&&e.uploadLiveDelta(t.tileState,t.changedTiles),t.trailDirtyRowMax>=0&&e.uploadLiveTrailDelta(t.trailState,t.trailDirtyRowMin,t.trailDirtyRowMax)):e.uploadTileAndTrailState(t.tileState,t.trailState),e.updateSpiralRibbons(t.spiralRibbons),t.railroadDirty&&(e.uploadRailroadState(t.railroadState),t.revealedRailTiles.length>0&&e.applyRailroadDust(t.revealedRailTiles)),e.updateUnits(t.units,t.tick),t.structuresDirty&&e.updateStructures(t.units),t.events.deadUnits.length>0&&e.applyDeadUnits(t.events.deadUnits),t.events.conquestEvents.length>0&&e.applyConquestEvents(t.events.conquestEvents),t.events.bonusEvents.length>0&&e.applyBonusEvents(t.events.bonusEvents),e.updateAttackRings(t.attackRings),e.updateNukeTelegraphs(t.nukeTelegraphs),e.updateNames(t.names,t.players,!1,t.playerStatus),t.relationsDirty&&e.updateRelations(t.relationMatrix,t.relationSize),e.setSAMAllianceClusters(t.allianceClusters)}var ee=function(e){return e[e.Engine=0]=`Engine`,e[e.TailEngine=1]=`TailEngine`,e[e.Carriage=2]=`Carriage`,e}({}),te=function(e){return e[e.Human=0]=`Human`,e[e.Bot=1]=`Bot`,e[e.Nation=2]=`Nation`,e}({}),ne=[.6,.1,1],_=`Transport`,re=`Trade Ship`,v=`Warship`,ie=`Speedboat`,y=`Atom Bomb`,b=`Ballistic Missile`,x=`Hydrogen Bomb`,S=`MIRV`,C=`SAMMissile`,w=`Shell`,T=`MIRV Warhead`,ae=`Train`,oe=`City`,se=`Port`,ce=`Factory`,le=`Defense Post`,ue=`SAM Launcher`,de=`Missile Silo`,fe=`Oil Field`,pe=`Gas Field`,me=`Uranium Plant`,he=`Radar`,ge=`Missile Factory`,_e=`Arsenal`,ve=`Oil Storage`,ye=`Gas Storage`,be=`Unknown Structure`,xe=new Set([oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye]),Se=new Set([y,b,x,S]),Ce=new Set([y,b,x,S,T]),we=new Set([_,y,b,x,S,T]),Te={[y]:{inner:12,outer:30},[b]:{inner:5,outer:12},[x]:{inner:80,outer:100},[T]:{inner:12,outer:18}},Ee=[_,re,v,ie,y,b,x,S,C,w,T,oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,ae],De=4096;function E(){return De}function D(e){let t=/^#?([0-9a-fA-F]{6})$/.exec(e.trim());if(!t)return null;let n=parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}var Oe=D(c.terrain.oceanColor),ke=D(c.terrain.backgroundColor);function Ae(e,t,n,r){let i=r?.backgroundColor,a=r?.oceanColor,o=r?.sandColor,s=r?.plainsColor,c=r?.highlandColor,l=r?.mountainColor,u=(e&128)!=0,d=(e&64)!=0,f=e&31,p,m,h,g={ocean:a??Oe,shoreWater:[100,143,255],sand:o??[204,203,158],plains:s??[190,220,138],highland:c??[200,183,138],mountain:l??[230,230,230],peak:i??ke};if(u&&f===31)[p,m,h]=g.peak;else if(u&&d)[p,m,h]=g.sand;else if(u)if(f<10){let e=g.plains;p=e[0],m=e[1]-2*f,h=e[2]}else if(f<20){let e=g.highland,t=f-10;p=Math.min(255,e[0]+2*t),m=Math.min(255,e[1]+2*t),h=Math.min(255,e[2]+2*t)}else{let e=g.mountain,t=Math.floor(f/2);p=Math.min(255,e[0]+t),m=Math.min(255,e[1]+t),h=Math.min(255,e[2]+t)}else if(d){let e=a??Oe;p=Math.round(.7*e[0]+76.5),m=Math.round(.7*e[1]+76.5),h=Math.round(.7*e[2]+76.5)}else{let e=Math.min(f,10),t=g.ocean;p=Math.max(0,t[0]-e),m=Math.max(0,t[1]-e),h=Math.max(0,t[2]-e)}t[n]=p,t[n+1]=m,t[n+2]=h,t[n+3]=255}function je(e,t,n,r){let i=new Uint8Array(t*n*4);for(let a=0;a<t*n;a++)Ae(e[a],i,a*4,r);return i}var Me=32;function Ne(e){return e.map(e=>s(e)).filter(e=>e.isValid()).slice(0,8).map(e=>{let{r:t,g:n,b:r}=e.toRgb();return[t/255,n/255,r/255]})}function Pe(e,t){let n=Ne(e.colors),r,i,a;e.type===`transition`?(r=1,i=e.frequency,a=0):e.type===`spiral`?(r=2,i=e.rotationSpeed,a=0):(r=0,i=e.colorSize,a=e.movementSpeed);let o=[n.length,r,i,a];for(let e=0;e<8;e++){let r=e*4,i=n[e];t[r]=i?i[0]:0,t[r+1]=i?i[1]:0,t[r+2]=i?i[2]:0,t[r+3]=o[e]??0}}var Fe=E(),Ie=150/255,Le=[...r,`structures`,`warship`,`train`,`railroad`];function Re(e,t,n,r){let i=n.toRgb(),a=t*4;e[a]=i.r/255,e[a+1]=i.g/255,e[a+2]=i.b/255,e[a+3]=Ie;let o=r.toRgb(),s=Fe*4+t*4;e[s]=o.r/255,e[s+1]=o.g/255,e[s+2]=o.b/255,e[s+3]=1}function ze(e,t,n,r){let o=n*4;if(e.fill(0,o,o+4),r?.patternData)try{let s=i(r.patternData,a);e[o]=1,e[o+1]=s.width,e[o+2]=s.height,e[o+3]=s.scale,t.set(s.bytes.slice(3),n*1024)}catch(e){console.warn(`Failed to decode territory pattern`,e)}}function Be(e,r,i){let a=r?.[i];if(!a)return;let o=n(e,i,a.name);if(!(!o||o.effectType!==i)&&!(!t(o)&&o.effectType!==`structures`&&o.effectType!==`warship`&&o.effectType!==`train`&&o.effectType!==`railroad`))return o.attributes}function Ve(e,t,n,r){let i=n*8,a=!1;for(let n=0;n<8;n++){let o=((i+n)*Fe+t)*4;for(let t=0;t<4;t++){let i=r===null?0:r[n*4+t];e[o+t]!==i&&(e[o+t]=i,a=!0)}}return a}var He=new Float32Array(Me);function Ue(e,t,n,r){let i=!1;return Le.forEach((a,o)=>{let s=n(a);if(a===`nukeTrail`){let e=s?.type===`spiral`?Ne(s.colors):[];s?.type===`spiral`&&e.length>0?r.setNukeTrailSpiral(t,{radius:s.radius,strands:s.strands,rotationSpeed:s.rotationSpeed,colors:e}):r.clearNukeTrailSpiral(t)}let c=null;s!==void 0&&(Pe(s,He),c=He),Ve(e,t,o,c)&&(i=!0)}),i}var We=class extends Error{constructor(e){super(`WebGL context lost during shader ${e}. The GPU process crashed, reset, or ran out of memory — this is not a shader error.`),this.phase=e,this.name=`GLContextLostError`}};function Ge(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);return t?String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)):`unknown`}function Ke(e,t,n,r){if(e.isContextLost())return new We(t);let i=n?`\n${n}`:` (no info log, glGetError=${e.getError()})`;return Error(`${t===`compile`?`Shader compile`:`Program link`} error [${r}, GPU: ${Ge(e)}]:${i}`)}function qe(e,t,n,r){let i=e.createShader(t);if(e.shaderSource(i,n),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS)){let t=Ke(e,`compile`,e.getShaderInfoLog(i),r);throw e.deleteShader(i),t}return i}function O(e,t,n,r){let i=qe(e,e.VERTEX_SHADER,t,`${r} vertex`),a=qe(e,e.FRAGMENT_SHADER,n,`${r} fragment`),o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,a),e.linkProgram(o),e.deleteShader(i),e.deleteShader(a),!e.getProgramParameter(o,e.LINK_STATUS)){let t=Ke(e,`link`,e.getProgramInfoLog(o),r);throw e.deleteProgram(o),t}return o}function k(e,t){let n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.filter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.filter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrap??e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrap??e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t.internalFormat,t.width,t.height,0,t.format,t.type,t.data),n}function Je(e){let t=e.createVertexArray();e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}function A(e,t){let n=Object.entries(t).map(([e,t])=>`#define ${e} ${t}`).join(`
`);return e.replace(`#version 300 es`,`#version 300 es\n${n}`)}function Ye(e,t,n){return e.bindFramebuffer(e.FRAMEBUFFER,t.fbo),e.viewport(0,0,t.w,t.h),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),n(),e.bindFramebuffer(e.FRAMEBUFFER,null),t.tex}function Xe(e,t,n,r){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,t,n),r()}function Ze(e,t,n){let r=k(e,{width:t,height:n,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.LINEAR}),i=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{fbo:i,tex:r,w:t,h:n}}function j(e,t,n){let r=e.createVertexArray();e.bindVertexArray(r);let i=new Float32Array([0,0,t,0,0,n,0,n,t,0,t,n]),a=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),r}var Qe=E(),$e=/swiftshader|llvmpipe|software/i;function et(e,t={}){let n=e.getContext(`webgl2`,{...t,failIfMajorPerformanceCaveat:!0});if(n){let e=Ge(n);if($e.test(e))return{gl:null,status:`software`,renderer:e};let t=Number(n.getParameter(n.MAX_TEXTURE_SIZE));return t<Qe?{gl:n,status:`limited`,renderer:e,maxTextureSize:t}:{gl:n,status:`ok`}}let r=document.createElement(`canvas`).getContext(`webgl2`);return r?{gl:null,status:`software`,renderer:Ge(r)}:{gl:null,status:`unsupported`,renderer:``}}var tt=class extends Error{constructor(e,t){super(`WebGL2 unavailable: ${e}`),this.glStatus=e,this.renderer=t,this.name=`GLUnavailableError`}};function nt(e,t,n){window.gtag?.(`event`,`gl_init`,{status:e,renderer:e===`ok`?``:t,...n!==void 0&&{max_texture_size:n}})}function rt(e){document.querySelector(`webgl-gate`)||o(async()=>{let{WebGLGate:e}=await import(`./WebGLGate-SQQwSByS.js`);return{WebGLGate:e}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({WebGLGate:t})=>{if(document.querySelector(`webgl-gate`))return;let n=new t;n.status=e,document.body.appendChild(n)})}function M(){return Math.min(window.devicePixelRatio||2,2)}var it=.2,at=20,ot=.7,st=3,ct=class{constructor(e,t){this.canvasW=1,this.canvasH=1,this.mat=new Float32Array(9),this.dirty=!0,this.needsInitialFit=!0,this.mapW=e,this.mapH=t,this.offsetX=e/2,this.offsetY=t/2,this.zoom=1}resize(e,t){let n=M();this.canvasW=Math.round(e*n),this.canvasH=Math.round(t*n),this.needsInitialFit&&this.fitMap(),this.dirty=!0}fitMap(){this.offsetX=this.mapW/2,this.offsetY=this.mapH/2;let e=this.canvasW/this.mapW,t=this.canvasH/this.mapH;this.zoom=Math.min(e,t)*.9,this.dirty=!0,this.needsInitialFit=!1}focusBBox(e,t,n,r,i=1.4){this.offsetX=(e+n+1)/2,this.offsetY=(t+r+1)/2;let a=n-e+1,o=r-t+1,s=this.canvasW/a,c=this.canvasH/o;this.zoom=Math.max(ot,Math.min(st,Math.min(s,c)/i)),this.clampOffset(),this.dirty=!0}panTo(e,t){this.offsetX=e,this.offsetY=t,this.clampOffset(),this.dirty=!0}panBy(e,t){this.offsetX+=e,this.offsetY+=t,this.clampOffset(),this.dirty=!0}setCameraState(e,t,n){this.offsetX=e,this.offsetY=t,this.zoom=n,this.needsInitialFit=!1,this.dirty=!0}zoomBy(e){this.zoom=Math.max(it,Math.min(at,this.zoom*e)),this.clampOffset(),this.dirty=!0}zoomTo(e){this.zoom=Math.max(it,Math.min(at,e)),this.clampOffset(),this.dirty=!0}zoomAtScreen(e,t,n){let r=this.screenToWorld(t,n);this.zoom=Math.max(it,Math.min(at,this.zoom*e));let i=this.screenToWorld(t,n);this.offsetX+=r.x-i.x,this.offsetY+=r.y-i.y,this.clampOffset(),this.dirty=!0}getMatrix(){if(this.dirty){let e=this.zoom*2/this.canvasW,t=this.zoom*-2/this.canvasH,n=-this.offsetX*e,r=-this.offsetY*t,i=this.mat;i[0]=e,i[1]=0,i[2]=0,i[3]=0,i[4]=t,i[5]=0,i[6]=n,i[7]=r,i[8]=1,this.dirty=!1}return this.mat}screenToWorld(e,t){let n=M(),r=e*n/this.canvasW*2-1,i=-(t*n/this.canvasH*2-1),a=this.zoom*2/this.canvasW,o=this.zoom*-2/this.canvasH;return{x:(r- -this.offsetX*a)/a,y:(i- -this.offsetY*o)/o}}worldToScreen(e,t){let n=M();return{x:this.zoom*(e-this.offsetX)/n+this.canvasW/(2*n),y:this.zoom*(t-this.offsetY)/n+this.canvasH/(2*n)}}clampOffset(){let e=this.canvasW/(2*this.zoom),t=this.canvasH/(2*this.zoom);this.offsetX=Math.max(-e,Math.min(this.mapW+e,this.offsetX)),this.offsetY=Math.max(-t,Math.min(this.mapH+t,this.offsetY))}},N=4095,lt=8192,P={OWNER_MASK:4095,FALLOUT_BIT:13,DEFENSE_BIT:14},F=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vWorldPos;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vWorldPos = aPos;
}
`,I=class{constructor(e,t,n,r){this.gl=e,this.buf=t,this.floatsPerInstance=r,this.capacity=n,this.data=new Float32Array(n*r),this.bytes=new Uint8Array(this.data.buffer),e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,this.data.byteLength,e.DYNAMIC_DRAW)}ensureCapacity(e){if(e<=this.capacity)return;for(;this.capacity<e;)this.capacity*=2;let t=new Float32Array(this.capacity*this.floatsPerInstance);t.set(this.data),this.data=t,this.bytes=new Uint8Array(t.buffer);let n=this.gl;n.bindBuffer(n.ARRAY_BUFFER,this.buf),n.bufferData(n.ARRAY_BUFFER,this.data.byteLength,n.DYNAMIC_DRAW)}get float32(){return this.data}get uint8(){return this.bytes}get buffer(){return this.buf}dispose(){this.buf!==null&&this.buf!==void 0&&this.gl.deleteBuffer(this.buf)}},ut=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUV;
void main() {
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
  vUV = aPos;
}
`,dt=`#version 300 es
precision highp float;

uniform float uTime;        // seconds, for rotation
uniform float uRingWidth;   // line thickness in normalized coords

in vec2  vLocalPos;
flat in float vAlpha;

out vec4 fragColor;

const float INNER_R = 0.5;
const float OUTER_R = 0.8;
const float INNER_DASHES = 8.0;
const float OUTER_DASHES = 2.0;
const float PI = 3.14159265;

void main() {
  float dist = length(vLocalPos);
  float angle = atan(vLocalPos.y, vLocalPos.x);

  // Inner ring — thin, many dashes, rotating clockwise
  float innerDist = abs(dist - INNER_R);
  float innerRing = 1.0 - smoothstep(0.0, uRingWidth * 2.0, innerDist);
  float innerAngle = angle + uTime * 1.2;
  float innerDash = smoothstep(0.4, 0.5, abs(fract(innerAngle * INNER_DASHES / (2.0 * PI)) - 0.5) * 2.0);
  innerRing *= innerDash;

  // Outer ring — thick, few dashes, counter-rotating
  float outerDist = abs(dist - OUTER_R);
  float outerRing = 1.0 - smoothstep(0.0, uRingWidth * 3.0, outerDist);
  float outerAngle = angle - uTime * 0.6;
  float outerDash = smoothstep(0.3, 0.4, abs(fract(outerAngle * OUTER_DASHES / (2.0 * PI)) - 0.5) * 2.0);
  outerRing *= outerDash;

  float ring = max(innerRing, outerRing);
  if (ring < 0.01) discard;

  fragColor = vec4(1.0, 0.0, 0.0, ring * vAlpha);
}
`,ft=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec3 aInstData; // x, y, alpha

uniform mat3 uCamera;
uniform float uTilesPerPx;
// Quad half-size in screen px; visible outer ring = 0.8× (frag OUTER_R),
// the rest is headroom for SDF AA.
uniform float uRingScreenPx;

out vec2  vLocalPos;
flat out float vAlpha;

void main() {
  vec2 center = vec2(aInstData.x + 0.5, aInstData.y + 0.5);
  vAlpha = aInstData.z;

  float worldRadius = uRingScreenPx * uTilesPerPx;
  vec2 worldPos = center + (aPos - 0.5) * worldRadius * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = (aPos - 0.5) * 2.0;
}
`,pt=3,mt=200,ht=300,gt=class{constructor(e,t){this.ringCount=0,this.active=[],this.gl=e,this.settings=t,this.program=O(e,ft,dt,`FxAttackRingPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTilesPerPx=e.getUniformLocation(this.program,`uTilesPerPx`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uRingWidth=e.getUniformLocation(this.program,`uRingWidth`),this.uRingScreenPx=e.getUniformLocation(this.program,`uRingScreenPx`);let n=e.createBuffer();this.instanceBuf=new I(e,n,8,pt),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,0,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}update(e){let t=performance.now(),n=new Set;for(let t of e)n.add(t.unitId);for(let e of this.active)!e.fadingOut&&!n.has(e.unitId)&&(e.fadingOut=!0,e.transitionMs=t);for(let n of e){let e=this.active.find(e=>e.unitId===n.unitId);e?(e.x=n.x,e.y=n.y,e.fadingOut&&(e.fadingOut=!1,e.transitionMs=t)):this.active.push({unitId:n.unitId,x:n.x,y:n.y,transitionMs:t,fadingOut:!1})}}tick(){if(this.active.length===0)return;let e=performance.now();for(let t=this.active.length-1;t>=0;t--){let n=this.active[t];n.fadingOut&&e-n.transitionMs>=ht&&(this.active[t]=this.active[this.active.length-1],this.active.pop())}let t=this.active.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=this.active[r],i=e-t.transitionMs,a=t.fadingOut?Math.max(0,1-i/ht):Math.min(1,i/mt),o=r*pt;n[o+0]=t.x,n[o+1]=t.y,n[o+2]=a}this.ringCount=t}draw(e,t){if(this.ringCount===0)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uTilesPerPx,1/t),n.uniform1f(this.uTime,performance.now()/1e3),n.uniform1f(this.uRingWidth,this.settings.fx.shockwaveRingWidth),n.uniform1f(this.uRingScreenPx,this.settings.fx.attackRingScreenPx),n.bindBuffer(n.ARRAY_BUFFER,this.instanceBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.ringCount*pt),n.bindVertexArray(this.vao),n.drawArraysInstanced(n.TRIANGLES,0,6,this.ringCount)}clear(){this.active.length=0,this.ringCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}};function _t(e,t){switch(t){case y:return e.nukeRadiusAtom;case b:return Math.min(e.nukeRadiusAtom,8);case x:return e.nukeRadiusHydro;case T:return e.nukeRadiusMirv;default:return}}var vt=`#version 300 es
precision highp float;

uniform float uRingWidth;
uniform float uTime;      // seconds — animates procedural styles

in vec2  vLocalPos;
flat in float vAlpha;   // 1 - lifetime progress (fades out over the effect)
flat in float vStyle;   // 0 = classic ring, 1 = EMP pulse, 2 = sparkles, 3 = embers, 4 = ballistic ground impact
flat in vec3  vColor0;  // cosmetic: palette color 0
flat in vec3  vColor1;  // cosmetic: palette color 1
flat in vec3  vColor2;  // cosmetic: palette color 2 (pads repeat the last color)
flat in vec3  vColor3;  // cosmetic: palette color 3 (pads repeat the last color)
flat in float vColorCount; // active palette size (1..4)
flat in float vSpeed;   // cosmetic: animation-speed multiplier
flat in float vTransSpeed; // cosmetic: palette step rate (colors/s)
flat in float vThickness; // ring band thickness / avg sparkle size (world tiles)
flat in float vCell;    // sparkles: grid pitch (front-normalized); embers: keep-fraction
flat in float vRadius;  // current front radius (world tiles)

// Palette lookup by (already-wrapped) index.
vec3 colorAt(float i) {
  if (i < 0.5) return vColor0;
  if (i < 1.5) return vColor1;
  if (i < 2.5) return vColor2;
  return vColor3;
}

out vec4 fragColor;

// --- cheap 1D value noise -------------------------------------------------
float hash11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
float vnoise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash11(i), hash11(i + 1.0), u);
}

// Classic expanding white ring (SAM, and nuke style 0).
void classicRing(float dist) {
  float ringDist = abs(dist - 1.0);
  float ring = 1.0 - smoothstep(0.0, uRingWidth, ringDist);
  if (ring < 0.01) discard;
  fragColor = vec4(1.0, 1.0, 1.0, ring * vAlpha);
}

// Pixelated green ground bloom with an uneven, tile-like edge.
void ballisticGroundImpact(float dist) {
  float radius = max(vRadius, 0.001);
  vec2 worldPos = vLocalPos * radius;
  float worldDist = length(worldPos);
  float blockSize = 0.65;
  vec2 cell = floor(worldPos / blockSize);
  vec2 cellCenter = (cell + 0.5) * blockSize;
  float cellNoise = hash11(dot(cell, vec2(127.1, 311.7)) + 19.19);

  // Vary the boundary per tile to create the clustered, pixelated blast shape.
  float cellRadius = radius * (0.78 + cellNoise * 0.38);
  float fill = step(length(cellCenter), cellRadius);
  float mottling = 0.55 + 0.45 * cellNoise;
  float coreAlpha = fill * (0.38 + 0.42 * mottling) * vAlpha;

  float haloWidth = max(vThickness, 1.0);
  float halo = (1.0 - smoothstep(radius * 0.72, radius + haloWidth, worldDist))
    * 0.25 * vAlpha;
  float alpha = max(coreAlpha, halo);
  if (alpha < 0.01) discard;
  vec3 haloColor = vec3(0.38, 0.95, 0.7);
  vec3 color = mix(vColor0, haloColor, clamp(halo * 2.0, 0.0, 0.75));
  fragColor = vec4(color, alpha);
}

// EMP energy pulse — a jagged, crackling ring with rotating lightning arcs and
// a faint trailing energy fill. Colored by the firing player's cosmetic.
void empPulse(float dist) {
  float ang = atan(vLocalPos.y, vLocalPos.x); // -pi..pi
  float tt = uTime * vSpeed;                   // speed-scaled animation time

  // Jagged front: perturb the ideal r=1.0 ring by angular + time noise.
  float n = vnoise(ang * 6.0 + tt * 6.0)
          + 0.5 * vnoise(ang * 17.0 - tt * 11.0);
  float ringR = 0.95 + n * 0.05;
  float ringDist = abs(dist - ringR);

  // Band half-width in local units (dist 1.0 = vRadius world tiles), so the
  // cosmetic's thickness stays constant in tiles while the ring expands.
  // Per-angle flicker (averages ~1.0×) keeps it feeling electric.
  float halfW = 0.5 * vThickness / max(vRadius, 0.001);
  float w = halfW * (0.7 + 0.6 * vnoise(ang * 9.0 + tt * 20.0));
  float ring = 1.0 - smoothstep(0.0, w, ringDist);

  // A couple of bright rotating arcs of "lightning" chasing around the ring.
  float arc = pow(0.5 + 0.5 * sin(ang * 5.0 - tt * 8.0), 8.0)
            + pow(0.5 + 0.5 * sin(ang * 8.0 + tt * 13.0), 12.0);

  // Faint inner energy fill trailing behind the front.
  float inner = smoothstep(ringR, 0.0, dist) * 0.12
              * (0.6 + 0.4 * vnoise(ang * 20.0 + tt * 25.0));

  float glow = ring * (0.8 + arc) + inner;
  if (glow < 0.01) discard;

  // Base color cycles through the whole palette (color0 → color1 → … → wrap)
  // at transitionSpeed steps/s, like the trail shader's transition (0 →
  // static color0, negative → reverse cycle). Arcs flare toward white.
  float idx = uTime * vTransSpeed;
  vec3 base = mix(
    colorAt(mod(floor(idx), vColorCount)),
    colorAt(mod(floor(idx) + 1.0, vColorCount)),
    fract(idx));
  // Padded slots repeat a real color, so this max spans the active palette.
  vec3 bright = max(max(vColor0, vColor1), max(vColor2, vColor3));
  vec3 hot = mix(bright, vec3(1.0), 0.4);
  vec3 col = mix(base, hot, clamp(arc * 0.8, 0.0, 1.0));

  // Whole-ring flicker on top of the lifetime fade (speed-scaled like the rest).
  float life = vAlpha * (0.75 + 0.25 * vnoise(tt * 30.0));
  fragColor = vec4(col, clamp(glow, 0.0, 1.0) * life);
}

// Sparkles — a firework burst: glints start at the center and ride outward
// with the expanding front (fixed positions in front-normalized space, so
// world position = normalized position · radius), reaching the cosmetic's
// full size at fade-out. One candidate glint per normalized grid cell
// (jittered but confined to its cell so each fragment samples only its own
// cell; the pitch vCell comes from the cosmetic's density). Glints keep a
// constant world size (hash-varied ±50% around vThickness, so thickness is
// the average sparkle size) once the burst outgrows the grid; while it's
// young they're capped to their cell, so the early burst reads as a dense
// compact cluster. Each glint twinkles on a hashed phase and takes a hashed
// palette color; the palette cycle advances at transitionSpeed steps/s on
// top of that offset.
void sparkles() {
  float cell = max(vCell, 0.001); // grid pitch (front-normalized units)
  // Rotate the grid off the world axes so the young, dense burst doesn't
  // read as a lattice (the disc cull below is rotation-invariant).
  const mat2 ROT = mat2(0.8253, -0.5646, 0.5646, 0.8253);
  vec2 gp = ROT * vLocalPos;
  vec2 cid = floor(gp / cell);
  float h1 = hash11(dot(cid, vec2(157.0, 113.0)) + 41.7);
  float h2 = hash11(h1 * 251.0 + 7.3);
  float h3 = hash11(h2 * 199.0 + 3.1);
  float h4 = hash11(h3 * 173.0 + 11.3);
  float h5 = hash11(h4 * 149.0 + 5.7);

  // Drop ~1/3 of cells — an organic scatter, not one glint per cell.
  if (h3 < 0.33) discard;

  // Glint radius: constant world size, hash-varied ±50% per glint so
  // vThickness is the AVERAGE sparkle size, and capped to its cell. The
  // jitter amplitude is fixed (cap + jitter = half a cell exactly) so glint
  // positions don't drift as the cap relaxes with the growing radius.
  float rs = min(
    0.5 * vThickness * (0.5 + h5) / max(vRadius, 0.001),
    0.35 * cell);
  vec2 center = (cid + 0.5) * cell + (vec2(h1, h2) - 0.5) * 0.3 * cell;

  // Glints outside the unit disc are culled so the burst stays circular.
  if (length(center) > 1.0) discard;

  // Hashed birth stagger so glints pop in over the first fifth of the life
  // instead of the whole disc appearing at once.
  float lifeT = 1.0 - vAlpha;
  float birth = smoothstep(h4 * 0.2, h4 * 0.2 + 0.08, lifeT);
  if (birth <= 0.0) discard;

  // Solid glint core with a thin anti-aliased rim — glints render fully
  // opaque (the twinkle modulates color brightness, not alpha), holding full
  // opacity through life and fading only over the last quarter.
  float g = clamp((1.0 - length(gp - center) / max(rs, 1e-4)) * 3.0, 0.0, 1.0);
  float tt = uTime * vSpeed;
  float tw = 0.35 +
             0.65 * pow(0.5 + 0.5 * sin(6.2832 * (h3 + tt * (1.5 + h1))), 2.0);
  float endFade = smoothstep(0.0, 0.25, vAlpha);

  float glow = g * birth * endFade;
  if (glow < 0.01) discard;

  // Whole palette steps per glint (floor) keep static colors exact; the cycle
  // blends between steps at transitionSpeed steps/s (0 = static hashed color,
  // negative = reverse), like the EMP base color.
  float idx = uTime * vTransSpeed + floor(h2 * vColorCount);
  vec3 base = mix(
    colorAt(mod(floor(idx), vColorCount)),
    colorAt(mod(floor(idx) + 1.0, vColorCount)),
    fract(idx));
  // Twinkle lives in the color: peaks flare toward white, troughs dim the
  // base — alpha stays saturated so the glints read solid.
  vec3 col = mix(base * (0.7 + 0.3 * tw), vec3(1.0), 0.5 * tw);

  fragColor = vec4(col, clamp(glow, 0.0, 1.0));
}

// Pixel ember splash (style 3). Top-down: chunky embers scattered on a stable
// world-space grid, thrown outward as the blast expands and cooling through the
// palette over the effect. A 2D grid (not angular sectors) — reads as a field
// of pixels, never radial rays. vThickness = ember block size (world tiles);
// vCell = keep-fraction (density-derived: the share of grid cells that light up).
void emberScatter() {
  float R = max(vRadius, 0.001);
  vec2 worldPos = vLocalPos * R; // tiles from the blast centre (grid is stable)
  float block = max(vThickness, 0.5); // chunky pixel size, world tiles
  // Rotate the grid off the world axes so it never reads as a lattice.
  const mat2 ROT = mat2(0.8253, -0.5646, 0.5646, 0.8253);
  vec2 cid = floor((ROT * worldPos) / block);
  float h1 = hash11(dot(cid, vec2(157.0, 113.0)) + 41.7);
  float h2 = hash11(h1 * 251.0 + 7.3);
  // Sparse: keep only a fraction of cells as embers (vCell = keep-fraction).
  if (h1 > clamp(vCell, 0.02, 1.0)) discard;

  // This cell's distance from the centre, front-normalised (0 = centre, 1 = rim).
  vec2 blockCentre = (cid + 0.5) * block;
  float distN = length(blockCentre) / R;
  if (distN > 1.0) discard;

  // Thrown outward as the blast expands: a cell only appears once the eased
  // front has reached its hashed range, so embers spread over the effect.
  float lifeT = 1.0 - vAlpha;
  float ease = 1.0 - (1.0 - lifeT) * (1.0 - lifeT);
  float reach = (0.15 + 0.85 * h2) * ease;
  if (distN > reach) discard;

  float a = smoothstep(0.0, 0.22, vAlpha); // fade over the last fifth of life
  if (a < 0.01) discard;

  // Cooling: hot (color 0) at birth -> cool (last color) as the blast ages,
  // posterised (one palette entry, no blend), with transitionSpeed cycling.
  float coolStep = lifeT * (vColorCount - 1.0);
  float idx = floor(coolStep + uTime * vTransSpeed);
  vec3 col = colorAt(mod(idx, vColorCount));
  fragColor = vec4(col, a);
}

void main() {
  float dist = length(vLocalPos);
  if (vStyle > 3.5) {
    ballisticGroundImpact(dist);
  } else if (vStyle > 2.5) {
    emberScatter();
  } else if (vStyle > 1.5) {
    sparkles();
  } else if (vStyle > 0.5) {
    empPulse(dist);
  } else {
    classicRing(dist);
  }
}
`,yt=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec4 aInstData; // x, y, radius, alpha
layout(location = 2) in float aStyle;   // 0 = classic ring, 1 = EMP pulse, 2 = sparkles
layout(location = 3) in vec3 aColor0;   // EMP: palette color 0
layout(location = 4) in vec3 aColor1;   // EMP: palette color 1
layout(location = 5) in vec3 aColor2;   // EMP: palette color 2
layout(location = 6) in vec3 aColor3;   // EMP: palette color 3
layout(location = 7) in float aColorCount; // active palette size (1..4)
layout(location = 8) in float aSpeed;   // animation-speed multiplier
layout(location = 9) in float aTransSpeed; // palette step rate (colors/s)
layout(location = 10) in float aThickness; // EMP: ring band thickness (world tiles)
layout(location = 11) in float aCell;   // sparkles: grid pitch (front-normalized)

uniform mat3 uCamera;

out vec2  vLocalPos;
flat out float vAlpha;
flat out float vStyle;
flat out vec3  vColor0;
flat out vec3  vColor1;
flat out vec3  vColor2;
flat out vec3  vColor3;
flat out float vColorCount;
flat out float vSpeed;
flat out float vTransSpeed;
flat out float vThickness;
flat out float vCell;
flat out float vRadius;  // current ring radius (world tiles) — converts
                         // absolute thickness into local ring units

// Extra margin so the ring's outer feathering isn't clipped at the quad edge.
const float MARGIN = 1.1; // 10% beyond ring radius

void main() {
  vec2 center = vec2(aInstData.x + 0.5, aInstData.y + 0.5);
  float r = aInstData.z;
  vAlpha = aInstData.w;
  vStyle = aStyle;
  vColor0 = aColor0;
  vColor1 = aColor1;
  vColor2 = aColor2;
  vColor3 = aColor3;
  vColorCount = aColorCount;
  vSpeed = aSpeed;
  vTransSpeed = aTransSpeed;
  vThickness = aThickness;
  vCell = aCell;
  vRadius = r;

  // Quad extent: ring radius plus the full band thickness. The band is
  // absolute (world tiles), so while the ring is young it can be wider than
  // the radius itself — a pure percentage margin would clip it into a box.
  // aThickness is 0 for the classic style, giving the original r * MARGIN.
  float extent = (r + aThickness) * MARGIN;
  vec2 worldPos = center + (aPos - 0.5) * 2.0 * extent;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // vLocalPos stays normalized to the ring radius (dist 1.0 = radius r), so
  // scale by extent/r instead of the fixed margin.
  vLocalPos = (aPos - 0.5) * 2.0 * (extent / max(r, 0.001));
}
`,bt=[1,1,1],xt=[.15,.95,.15],St=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),L=22,R=L*4;function Ct(e,t){if(!e)return t;let n=e.maxRadius*2;return Math.min(Math.max(n/Math.max(e.speed,.001)*1e3,100),15e3)}var wt=class{constructor(e,t){this.gl=e,this.settings=t,this.shockwaveCount=0,this.active=[],this.timeFn=()=>performance.now(),this.program=O(e,yt,vt,`FxShockwavePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uRingWidth=e.getUniformLocation(this.program,`uRingWidth`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),this.quadVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadVbo),e.bufferData(e.ARRAY_BUFFER,St,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let n=e.createBuffer();this.instanceBuf=new I(e,n,64,L),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,R,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,R,16),e.vertexAttribDivisor(2,1);for(let t=0;t<4;t++){let n=3+t;e.enableVertexAttribArray(n),e.vertexAttribPointer(n,3,e.FLOAT,!1,R,20+t*12),e.vertexAttribDivisor(n,1)}e.enableVertexAttribArray(7),e.vertexAttribPointer(7,1,e.FLOAT,!1,R,68),e.vertexAttribDivisor(7,1),e.enableVertexAttribArray(8),e.vertexAttribPointer(8,1,e.FLOAT,!1,R,72),e.vertexAttribDivisor(8,1),e.enableVertexAttribArray(9),e.vertexAttribPointer(9,1,e.FLOAT,!1,R,76),e.vertexAttribDivisor(9,1),e.enableVertexAttribArray(10),e.vertexAttribPointer(10,1,e.FLOAT,!1,R,80),e.vertexAttribDivisor(10,1),e.enableVertexAttribArray(11),e.vertexAttribPointer(11,1,e.FLOAT,!1,R,84),e.vertexAttribDivisor(11,1),e.bindVertexArray(null)}pushNukeShockwave(e,t,n,r){let i=this.settings.fx,a=Ct(r,i.nukeShockwaveDurationMs),o=i.nukeShockwaveDurationMs/a,s=0;if(r?.type===`sparkles`||r?.type===`embers`){let e=r.density??50,t=Math.min(Math.max(Number.isFinite(e)?e:50,2),5e3);s=r.type===`sparkles`?Math.sqrt(2*Math.PI/3/t):Math.min(Math.max(t/500,.04),.6)}this.active.push({x:e,y:t,startMs:this.timeFn(),durationMs:a,maxRadius:r?.maxRadius??n*i.nukeShockwaveRadiusFactor,style:r?r.type===`sparkles`?2:r.type===`embers`?3:1:0,colors:r?.colors??[ne],speed:o,transitionSpeed:r?.transitionSpeed??0,thickness:r?r.thickness??4:0,cell:s})}pushBallisticGroundImpact(e,t,n){this.active.push({x:e,y:t,startMs:this.timeFn(),durationMs:2200,maxRadius:n,style:4,colors:[xt],speed:1,transitionSpeed:0,thickness:Math.max(n*.28,1),cell:0})}pushSAMShockwave(e,t){let n=this.settings.fx;this.active.push({x:e,y:t,startMs:this.timeFn(),durationMs:n.samShockwaveDurationMs,maxRadius:n.samShockwaveRadius,style:0,colors:[bt],speed:1,transitionSpeed:0,thickness:0,cell:0})}tick(){if(this.active.length===0)return;let e=this.timeFn();for(let t=this.active.length-1;t>=0;t--)e-this.active[t].startMs>=this.active[t].durationMs&&(this.active[t]=this.active[this.active.length-1],this.active.pop());this.rebuildInstances(e)}rebuildInstances(e){let t=this.active.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=this.active[r],i=(e-t.startMs)/t.durationMs,a=r*L;n[a+0]=t.x,n[a+1]=t.y,n[a+2]=i*t.maxRadius,n[a+3]=1-i,n[a+4]=t.style;for(let e=0;e<4;e++){let r=t.colors[Math.min(e,t.colors.length-1)],i=a+5+e*3;n[i]=r[0],n[i+1]=r[1],n[i+2]=r[2]}n[a+17]=Math.min(t.colors.length,4),n[a+18]=t.speed,n[a+19]=t.transitionSpeed,n[a+20]=t.thickness,n[a+21]=t.cell}this.shockwaveCount=t}draw(e){if(this.shockwaveCount===0)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uRingWidth,this.settings.fx.shockwaveRingWidth),t.uniform1f(this.uTime,this.timeFn()*.001),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.shockwaveCount*L),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.shockwaveCount)}setTimeFn(e){this.timeFn=e}clear(){this.active.length=0,this.shockwaveCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteBuffer(this.quadVbo)}},Tt={width:540,height:242,rows:[{yOffset:0,height:60,worldWidth:60,worldHeight:60},{yOffset:60,height:38,worldWidth:48,worldHeight:38},{yOffset:98,height:15,worldWidth:17,worldHeight:15},{yOffset:113,height:19,worldWidth:19,worldHeight:19},{yOffset:132,height:12,worldWidth:13,worldHeight:12},{yOffset:144,height:14,worldWidth:16,worldHeight:14},{yOffset:158,height:13,worldWidth:7,worldHeight:13},{yOffset:171,height:12,worldWidth:11,worldHeight:12},{yOffset:183,height:16,worldWidth:24,worldHeight:16},{yOffset:199,height:16,worldWidth:24,worldHeight:16},{yOffset:215,height:7,worldWidth:9,worldHeight:7},{yOffset:222,height:20,worldWidth:21,worldHeight:20}]},Et=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;

in vec2  vAtlasUV;
flat in float vAlpha;

out vec4 fragColor;

void main() {
  vec4 texel = texture(uAtlas, vAtlasUV);
  if (texel.a < 0.01) discard;
  fragColor = vec4(texel.rgb, texel.a * vAlpha);
}
`,Dt=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;
layout(location = 1) in vec3 aInstPos;   // x, y, fxType
layout(location = 2) in vec2 aInstFlags; // frameIdx (uint8), alpha (uint8)

uniform mat3 uCamera;
uniform vec4 uFxUV[FX_TYPE_COUNT];    // vTop, vSpan, uFrameSpan, 0
uniform vec4 uFxWorld[FX_TYPE_COUNT]; // worldW, worldH, 0, 0

out vec2  vAtlasUV;
flat out float vAlpha;

void main() {
  int type = int(aInstPos.z + 0.5);
  float frameIdx = floor(aInstFlags.x + 0.5);
  float alpha = aInstFlags.y / 255.0;

  vec4 uv = uFxUV[type];
  vec4 world = uFxWorld[type];

  vec2 center = vec2(aInstPos.x + 0.5, aInstPos.y + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * vec2(world.x, world.y);

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  float u = (frameIdx + aPos.x) * uv.z;
  float v = uv.x + aPos.y * uv.y;
  vAtlasUV = vec2(u, v);
  vAlpha = alpha;
}
`,Ot=e(`atlases/fx-atlas.png`),z=12,kt=[{frameWidth:60,frameCount:9,frameDurationMs:70,looping:!1},{frameWidth:48,frameCount:9,frameDurationMs:70,looping:!1},{frameWidth:17,frameCount:10,frameDurationMs:70,looping:!1},{frameWidth:19,frameCount:4,frameDurationMs:70,looping:!1},{frameWidth:13,frameCount:4,frameDurationMs:70,looping:!1},{frameWidth:16,frameCount:14,frameDurationMs:90,looping:!1},{frameWidth:7,frameCount:6,frameDurationMs:100,looping:!0},{frameWidth:11,frameCount:4,frameDurationMs:120,looping:!0},{frameWidth:24,frameCount:5,frameDurationMs:120,looping:!0},{frameWidth:24,frameCount:5,frameDurationMs:120,looping:!0},{frameWidth:9,frameCount:3,frameDurationMs:100,looping:!1},{frameWidth:21,frameCount:10,frameDurationMs:90,looping:!1}],At=[{type:6,radiusFactor:1,density:1/25},{type:7,radiusFactor:1,density:1/28},{type:8,radiusFactor:.9,density:1/70},{type:9,radiusFactor:.9,density:1/70}];function jt(e){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}var Mt=4,Nt=16,Pt=class{constructor(e,t,n,r){this.config=r,this.spriteCount=0,this.atlasReady=!1,this.activeFx=[],this.timeFn=()=>performance.now(),this.isDisposed=!1,this.gl=e,this.mapW=t.mapWidth,this.settings=n,this.program=O(e,A(Dt,{FX_TYPE_COUNT:z}),Et,`FxSpritePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uFxUV=e.getUniformLocation(this.program,`uFxUV`),this.uFxWorld=e.getUniformLocation(this.program,`uFxWorld`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),this.atlasTex=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let i=e.createBuffer();this.instanceBuf=new I(e,i,256,Mt),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,i),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Nt,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.UNSIGNED_BYTE,!1,Nt,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null),this.loadAtlas()}async loadAtlas(){try{let e=new Image;if(e.crossOrigin=`anonymous`,e.src=Ot,await e.decode(),this.isDisposed)return;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);let n=Tt,r=new Float32Array(z*4),i=new Float32Array(z*4);for(let e=0;e<z;e++){let t=n.rows[e];r[e*4+0]=t.yOffset/n.height,r[e*4+1]=t.height/n.height,r[e*4+2]=t.worldWidth/n.width,r[e*4+3]=0,i[e*4+0]=t.worldWidth,i[e*4+1]=t.worldHeight,i[e*4+2]=0,i[e*4+3]=0}t.useProgram(this.program),t.uniform4fv(this.uFxUV,r),t.uniform4fv(this.uFxWorld,i),this.atlasReady=!0}catch(e){console.warn(`Failed to load fx atlas:`,e)}}applyRailroadDust(e){let t=this.timeFn();for(let n of e){if(Math.random()>.33)continue;let e=n%this.mapW,r=(n-e)/this.mapW;this.pushFx(e,r,10,t)}}applyConquestEvents(e){let t=this.timeFn(),n=this.settings.fx;for(let r of e){let e=t-(r.tickAge??0)*this.config.msPerTick();t-e>=n.conquestLifetimeMs||this.activeFx.push({x:r.x,y:r.y,fxType:11,startMs:e,lifetimeMs:n.conquestLifetimeMs,fadeIn:n.conquestFadeIn,fadeOut:n.conquestFadeOut})}}spawnFxForUnit(e,t){let n=e.unitType,r=e.pos%this.mapW,i=(e.pos-r)/this.mapW,a=_t(this.settings.fx,n);if(a!==void 0){e.reachedTarget?this.spawnNukeSprites(r,i,a,t,e.pos):this.pushFx(r,i,1,t);return}if(n===`Warship`){this.pushFx(r,i,3,t),this.pushFx(r,i,5,t);return}if(n===`Shell`&&e.reachedTarget){this.pushFx(r,i,4,t);return}if(n===`Train`&&!e.reachedTarget){this.pushFx(r,i,4,t);return}xe.has(n)&&this.pushFx(r,i,2,t)}spawnNukeSprites(e,t,n,r,i){this.pushFx(e,t,0,r);let a=0,o=this.settings.fx.debrisDensity;for(let{type:s,radiusFactor:c,density:l}of At){let u=Math.max(0,Math.floor(n*l*o)),d=n*c;for(let n=0;n<u;n++){let n=i*997+ a++,o=jt(n)*Math.PI*2,c=jt(n+65536)*(d/2),l=Math.floor(Math.cos(o)*c),u=Math.floor(Math.sin(o)*c);this.pushDebris(e+l,t+u,s,r)}}}pushFx(e,t,n,r){let i=kt[n];this.activeFx.push({x:e,y:t,fxType:n,startMs:r,lifetimeMs:i.frameDurationMs*i.frameCount,fadeIn:0,fadeOut:1})}pushDebris(e,t,n,r){let i=this.settings.fx;this.activeFx.push({x:e,y:t,fxType:n,startMs:r,lifetimeMs:i.debrisLifetimeMs,fadeIn:i.debrisFadeIn,fadeOut:i.debrisFadeOut})}tick(){if(this.activeFx.length===0)return;let e=this.timeFn();for(let t=this.activeFx.length-1;t>=0;t--)e-this.activeFx[t].startMs>=this.activeFx[t].lifetimeMs&&(this.activeFx[t]=this.activeFx[this.activeFx.length-1],this.activeFx.pop());this.rebuildInstances(e)}rebuildInstances(e){let t=this.activeFx.length;this.instanceBuf.ensureCapacity(t);for(let n=0;n<t;n++){let t=this.activeFx[n],r=kt[t.fxType],i=e-t.startMs,a;if(r.looping){let e=r.frameDurationMs*r.frameCount;a=Math.floor(i%e/r.frameDurationMs)}else a=Math.min(Math.floor(i/r.frameDurationMs),r.frameCount-1);let o=255;if(t.fadeIn>0||t.fadeOut<1){let e=i/t.lifetimeMs;e<t.fadeIn?o=Math.floor(e/t.fadeIn*255):e>t.fadeOut&&(o=Math.floor((1-e)/(1-t.fadeOut)*255))}let s=n*Mt;this.instanceBuf.float32[s+0]=t.x,this.instanceBuf.float32[s+1]=t.y,this.instanceBuf.float32[s+2]=t.fxType;let c=n*Nt;this.instanceBuf.uint8[c+12]=a,this.instanceBuf.uint8[c+13]=o}this.spriteCount=t}draw(e){if(this.spriteCount===0||!this.atlasReady)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,this.spriteCount*Mt),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.spriteCount)}setTimeFn(e){this.timeFn=e}clear(){this.activeFx.length=0,this.spriteCount=0}dispose(){this.isDisposed=!0;let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteTexture(this.atlasTex)}},Ft=class{constructor(e,t,n,r){this.config=r,this.timeFn=()=>performance.now(),this.mapW=t.mapWidth,this.settings=n,this.spritePass=new Pt(e,t,n,r),this.shockwavePass=new wt(e,n),this.attackRingPass=new gt(e,n)}applyDeadUnits(e){let t=this.timeFn();for(let n of e){let e=t-(n.tickAge??0)*this.config.msPerTick();this.spawnUnit(n,e)}}spawnUnit(e,t){let n=e.unitType,r=e.pos%this.mapW,i=(e.pos-r)/this.mapW,a=_t(this.settings.fx,n);if(a!==void 0){e.reachedTarget?(this.spritePass.spawnFxForUnit(e,t),n===`Ballistic Missile`&&this.shockwavePass.pushBallisticGroundImpact(r,i,a),this.shockwavePass.pushNukeShockwave(r,i,a,e.explosion)):(this.spritePass.spawnFxForUnit(e,t),this.shockwavePass.pushSAMShockwave(r,i));return}this.spritePass.spawnFxForUnit(e,t)}applyRailroadDust(e){this.spritePass.applyRailroadDust(e)}applyConquestEvents(e){this.spritePass.applyConquestEvents(e)}updateAttackRings(e){this.attackRingPass.update(e)}tick(){this.spritePass.tick(),this.shockwavePass.tick(),this.attackRingPass.tick()}draw(e,t){this.spritePass.draw(e),this.shockwavePass.draw(e),this.attackRingPass.draw(e,t)}setTimeFn(e){this.timeFn=e,this.spritePass.setTimeFn(e),this.shockwavePass.setTimeFn(e)}clear(){this.spritePass.clear(),this.shockwavePass.clear(),this.attackRingPass.clear()}dispose(){this.spritePass.dispose(),this.shockwavePass.dispose(),this.attackRingPass.dispose()}},It=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uRailroadTex;     // R8UI — rail type per tile (0=none, 1-6)
uniform usampler2D uGhostRailTex;    // R8UI — ghost rail type per tile (0=none, 1-6)
uniform usampler2D uTileTex;         // R16UI — tile state (for owner lookup)
uniform sampler2D  uPalette;         // RGBA32F — player colors
uniform usampler2D uTerrainTex;      // R8UI — terrain bytes (bit 7 = isLand)
uniform sampler2D  uEffect;          // RGBA32F — shared effect palette, keyed by
                                     //   ownerID. The railroad block starts at
                                     //   row RAILROAD_EFFECT_ROW_BASE; same
                                     //   layout as trail.frag.glsl (row r =
                                     //   color r's rgb; row 0.a = count,
                                     //   1.a = styleId, 2.a = scalar0,
                                     //   3.a = scalar1)

uniform vec2 uMapSize;
uniform float uZoom;
uniform float uTime;                 // seconds, for animated effect styles
uniform float uRailDetailZoom;
uniform float uRailAlpha;
uniform float uRailFade;             // Zoom-based fade multiplier (0..1)
uniform float uRailThickness;        // Track width multiplier (1 = default)
uniform float uGhostOwnerID;         // Player smallID for ghost rail color
uniform float uLocalPlayerID;        // Local player smallID (0 = none)
uniform vec3 uLocalRailColor;        // Rail color for the local player's rails
uniform float uHoverOwner;           // Hovered territory's owner smallID (0 = none)

in vec2 vWorldPos;
out vec4 fragColor;

// Bridge pixel positions per rail type, from OpenFrontIO's RailroadSprites.ts.
// Tests whether 2x-pixel offset (lp) from a tile origin is a bridge pixel.
// Bridge pixel positions from game's RailroadSprites.ts, with -2 offsets
// shifted to -1 to close the gap (game's rail extends into neighbors, ours doesn't).
bool isBridgePixel(uint rt, ivec2 lp) {
  int x = lp.x, y = lp.y;
  if (rt == 1u) { // Vertical
    return (x == -1 || x == 2) && y >= -1 && y <= 1;
  } else if (rt == 2u) { // Horizontal
    return (y == -1 && x >= -1 && x <= 1)
        || (y == 2 && x >= -1 && x <= 1)
        || (y == 3 && (x == -1 || x == 1));
  } else if (rt == 3u) { // TopLeft
    return (x == -1 && (y == -1 || y == 2))
        || (x == 0 && y == 1)
        || (x == 1 && y == 0)
        || (x == 2 && y == -1);
  } else if (rt == 4u) { // TopRight
    return (x == -1 && (y == -1 || y == 0))
        || (x == 0 && y == 1)
        || (x == 1 && y == 2)
        || (x == 2 && (y == -1 || y == 2));
  } else if (rt == 5u) { // BottomLeft
    return (x == -1 && (y == -1 || y == 2))
        || (x == 0 && y == -1)
        || (x == 1 && y == 0)
        || (x == 2 && (y == 1 || y == 2));
  } else if (rt == 6u) { // BottomRight
    return (x == -1 && y >= 0 && y <= 2)
        || (x == 0 && y == -1)
        || (x == 1 && y == -1)
        || (x == 2 && (y == -1 || y == 2));
  }
  return false;
}

// Detailed-mode coverage: 3x3 sub-grid with cross-ties, rail band width
// scaled by uRailThickness (clamped so the two bands never overlap fully).
float railDetailCoverage(uint rt, vec2 f) {
  if (rt == 0u) return 0.0;
  float T = 1.0 / 3.0;
  float T2 = 2.0 / 3.0;
  float w = min(T * uRailThickness, 0.5);
  bool center = (f.x >= T && f.x < T2 && f.y >= T && f.y < T2);
  bool hit = false;
  if (rt == 1u) {
    hit = (f.x < w) || (f.x >= 1.0 - w) || center;
  } else if (rt == 2u) {
    hit = (f.y < w) || (f.y >= 1.0 - w) || center;
  } else if (rt == 3u) {
    hit = (f.y < w) || (f.x < w) || center;
  } else if (rt == 4u) {
    hit = (f.y < w) || (f.x >= 1.0 - w) || center;
  } else if (rt == 5u) {
    hit = (f.y >= 1.0 - w) || (f.x < w) || center;
  } else if (rt == 6u) {
    hit = (f.y >= 1.0 - w) || (f.x >= 1.0 - w) || center;
  }
  return hit ? 1.0 : 0.0;
}

float segDist(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}

// Distance from tile-local point p to the rail centerline of type rt.
// Straights span the tile; corners are two half-segments meeting at center.
float railLineDist(uint rt, vec2 p) {
  if (rt == 1u) return segDist(p, vec2(0.5, 0.0), vec2(0.5, 1.0));
  if (rt == 2u) return segDist(p, vec2(0.0, 0.5), vec2(1.0, 0.5));
  vec2 c = vec2(0.5);
  vec2 e1 = vec2(0.5, (rt == 3u || rt == 4u) ? 0.0 : 1.0); // top or bottom edge
  vec2 e2 = vec2((rt == 3u || rt == 5u) ? 0.0 : 1.0, 0.5); // left or right edge
  return min(segDist(p, c, e1), segDist(p, c, e2));
}

// Line-mode coverage: screen-space anti-aliased line of width uRailThickness
// (in tiles) around the rail centerline of tile-local point p.
float railLineCoverage(uint rt, vec2 p) {
  if (rt == 0u || rt > 6u) return 0.0;
  float halfW = 0.5 * uRailThickness;
  float aa = 0.5 / uZoom; // ~1 screen pixel in tile units
  return 1.0 - smoothstep(halfW - aa, halfW + aa, railLineDist(rt, p));
}

// The owner's railroad cosmetic color, if equipped. Reads the railroad block
// of the shared effect palette with trail semantics (rails are static map
// geometry like trails): the gradient/transition math mirrors trail.frag.glsl
// so the same catalog attributes look identical on both. Returns false when
// the owner has no railroad effect (count 0).
bool railroadEffectColor(int owner, out vec3 color) {
  const int rowBase = RAILROAD_EFFECT_ROW_BASE;
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — the whole track is one color at a time, cross-fading
    // through the list. frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — cyclic gradient banded across the map (world-space
    // diagonal), scrolling over time so the colors travel along the track.
    // colorSize = band width in tiles; movementSpeed = tiles/sec the bands
    // travel.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float cycle = colorSize * float(count);
    float phase =
      fract((vWorldPos.x + vWorldPos.y - uTime * movementSpeed) / cycle);
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));

  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint railType = texelFetch(uRailroadTex, tc, 0).r;
  uint ghostRailType = texelFetch(uGhostRailTex, tc, 0).r;
  vec2 f = fract(vWorldPos);

  bool detailMode = uZoom >= uRailDetailZoom;

  // Compute coverage for real and ghost rails. In line mode, real coverage is
  // accumulated from the 3x3 neighborhood below so thick lines can spill into
  // neighboring tiles.
  float realCov = detailMode ? railDetailCoverage(railType, f) : 0.0;
  // Ghost only renders where there is no real rail (values 1-6 = ghost path)
  // Value 7 = highlight marker (existing rail turns green)
  float ghostCov = (ghostRailType >= 1u && ghostRailType <= 6u && railType == 0u)
    ? (detailMode ? railDetailCoverage(ghostRailType, f) : railLineCoverage(ghostRailType, f))
    : 0.0;
  bool highlighted = (ghostRailType == 7u && railType != 0u);

  // --- 3x3 neighborhood: bridges (both modes) + line coverage (line mode) ---
  bool hitBridge = false;
  ivec2 fp = ivec2(floor(vWorldPos * 2.0)); // fragment pos in game's 2x-pixel grid

  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      ivec2 ntc = tc + ivec2(dx, dy);
      if (ntc.x < 0 || ntc.y < 0 || ntc.x >= int(uMapSize.x) || ntc.y >= int(uMapSize.y))
        continue;
      uint nRail = texelFetch(uRailroadTex, ntc, 0).r;
      if (nRail == 0u) continue;
      if (!detailMode) {
        realCov = max(realCov, railLineCoverage(nRail, vWorldPos - vec2(ntc)));
      }
      if (hitBridge) continue;
      uint nTerr = texelFetch(uTerrainTex, ntc, 0).r;
      if ((nTerr & 0x80u) != 0u) continue; // land tile, no bridge
      ivec2 lp = fp - ntc * 2;
      if (isBridgePixel(nRail, lp)) hitBridge = true;
    }
  }

  bool hitRail = (realCov * uRailAlpha > 0.001);
  bool hitGhost = (ghostCov * uRailAlpha > 0.001);

  if (!hitBridge && !hitRail && !hitGhost) discard;

  // --- Color output ---
  vec3 bridgeColor = vec3(0.773, 0.271, 0.282);

  if (hitRail) {
    float railAlpha = uRailAlpha * realCov;
    uint tileRaw = texelFetch(uTileTex, tc, 0).r;
    uint owner = tileRaw & uint(OWNER_MASK);
    // Local rails use uLocalRailColor (white, or black over light territory)
    // instead of the palette border row.
    vec3 railColor = owner == 0u
      ? vec3(0.75)
      : (owner == uint(uLocalPlayerID)
        ? uLocalRailColor
        : texture(uPalette, vec2((float(owner) + 0.5) / float(PALETTE_SIZE), 0.75)).rgb);
    // railroad cosmetic: rails are colored by the tile owner, so the owner's
    // railroad effect (raw catalog colors, like trails) replaces that color —
    // including the local player's white/black rail color. Like the
    // structures effect it shows while the owner's territory is hovered, and
    // always for the local player (touch devices never hover, and buyers
    // should see what they paid for).
    vec3 effectRGB;
    if (owner != 0u &&
        (owner == uint(uLocalPlayerID) || owner == uint(uHoverOwner + 0.5)) &&
        railroadEffectColor(int(owner), effectRGB)) {
      railColor = effectRGB;
    }
    // Overlapping railroad highlight — green tint
    if (highlighted) railColor = vec3(0.2, 0.85, 0.3);
    if (hitBridge) {
      fragColor = vec4(mix(bridgeColor, railColor, railAlpha), uRailFade);
    } else {
      fragColor = vec4(railColor, railAlpha * uRailFade);
    }
  } else if (hitGhost) {
    float ghostAlpha = uRailAlpha * ghostCov * 0.5;
    vec3 ghostColor = uGhostOwnerID <= 0.0
      ? vec3(0.75)
      : (uGhostOwnerID == uLocalPlayerID
        ? uLocalRailColor
        : texture(uPalette, vec2((uGhostOwnerID + 0.5) / float(PALETTE_SIZE), 0.75)).rgb);
    fragColor = vec4(ghostColor, ghostAlpha * uRailFade);
  } else {
    fragColor = vec4(bridgeColor, uRailFade);
  }
}
`,B=0,Lt=1,Rt=2,zt=3,Bt=4,Vt=5;function Ht(e,t,n){let r=t%n-e%n,i=(t-t%n)/n-(e-e%n)/n;return r===0?B:i===0?Lt:B}function Ut(e,t,n,r){let i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=n%r,l=(n-c)/r,u=o-i,d=s-a,f=c-o,p=l-s;if(u===f&&d===p)return u===0?B:Lt;if(u===0&&f!==0||u!==0&&f===0){if(u===0&&f===1&&d===-1)return Vt;if(u===0&&f===-1&&d===-1)return Bt;if(u===0&&f===1&&d===1)return zt;if(u===0&&f===-1&&d===1||u===1&&f===0&&p===-1)return Rt;if(u===-1&&f===0&&p===-1)return zt;if(u===1&&f===0&&p===1)return Bt;if(u===-1&&f===0&&p===1)return Vt}return B}var Wt=class{constructor(e,t,n,r,i,a,o,s){this.gl=e,this.liveRailroadRef=null,this.railroadDirty=!1,this.ghostTiles=new Map,this.ghostOps=[],this.ghostOwnerID=0,this.localPlayerID=0,this.localRailColor=[.75,.75,.75],this.hoverOwner=0,this.startTime=performance.now(),this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.effectTex=a,this.settings=s,this.program=O(e,F,A(It,{PALETTE_SIZE:E(),RAILROAD_EFFECT_ROW_BASE:40,...P}),`RailroadPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uRailDetailZoom=e.getUniformLocation(this.program,`uRailDetailZoom`),this.uRailAlpha=e.getUniformLocation(this.program,`uRailAlpha`),this.uRailFade=e.getUniformLocation(this.program,`uRailFade`),this.uRailThickness=e.getUniformLocation(this.program,`uRailThickness`),this.uGhostOwnerID=e.getUniformLocation(this.program,`uGhostOwnerID`),this.uLocalPlayerID=e.getUniformLocation(this.program,`uLocalPlayerID`),this.uLocalRailColor=e.getUniformLocation(this.program,`uLocalRailColor`),this.uHoverOwner=e.getUniformLocation(this.program,`uHoverOwner`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uRailroadTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),1),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),2),e.uniform1i(e.getUniformLocation(this.program,`uTerrainTex`),3),e.uniform1i(e.getUniformLocation(this.program,`uGhostRailTex`),4),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),5),e.uniform1f(this.uGhostOwnerID,0),this.terrainTex=k(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:o,filter:e.NEAREST}),this.railroadTex=k(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.ghostRailTex=k(e,{width:t,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.vao=j(e,t,n)}uploadRailroadState(e){this.liveRailroadRef=e,this.railroadDirty=!0}setLocalPlayer(e){this.localPlayerID=e}setLocalRailColor(e,t,n){this.localRailColor=[e,t,n]}setHighlightOwner(e){this.hoverOwner=e}applyTerrainRects(e,t){if(e.length===0)return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.terrainTex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e)n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RED_INTEGER,n.UNSIGNED_BYTE,t,r),r+=i.w*i.h}updateGhostPreview(e){let t=new Map;if(e){let n=this.mapW*this.mapH;for(let r of e.ghostRailPaths){if(r.length===0)continue;let e=this.computePathOrientations(r);for(let r of e)r.ref>=0&&r.ref<n&&t.set(r.ref,r.type+1)}for(let r of e.overlappingRailroads)r>=0&&r<n&&t.set(r,7);this.ghostOwnerID=e.ownerID}else this.ghostOwnerID=0;for(let e of this.ghostTiles.keys())t.has(e)||this.ghostOps.push(e,0);for(let[e,n]of t)this.ghostTiles.get(e)!==n&&this.ghostOps.push(e,n);this.ghostTiles=t}draw(e,t){let n=this.gl,r=this.settings.railroad;this.flushGhostOps();let i=Math.max(r.railFadeRange,0),a=r.railMinZoom-i,o=i<=0?+(t>=r.railMinZoom):Math.min(1,Math.max(0,(t-a)/i));o<=0||(this.railroadDirty&&this.liveRailroadRef!==null&&(n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.railroadTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,this.mapW,this.mapH,n.RED_INTEGER,n.UNSIGNED_BYTE,this.liveRailroadRef),this.railroadDirty=!1),n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform2f(this.uMapSize,this.mapW,this.mapH),n.uniform1f(this.uZoom,t),n.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),n.uniform1f(this.uRailDetailZoom,r.railDetailZoom),n.uniform1f(this.uRailAlpha,r.railAlpha),n.uniform1f(this.uRailFade,o),n.uniform1f(this.uRailThickness,r.railThickness),n.uniform1f(this.uGhostOwnerID,this.ghostOwnerID),n.uniform1f(this.uLocalPlayerID,this.localPlayerID),n.uniform1f(this.uHoverOwner,this.hoverOwner),n.uniform3f(this.uLocalRailColor,this.localRailColor[0],this.localRailColor[1],this.localRailColor[2]),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.railroadTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,this.paletteTex),n.activeTexture(n.TEXTURE3),n.bindTexture(n.TEXTURE_2D,this.terrainTex),n.activeTexture(n.TEXTURE4),n.bindTexture(n.TEXTURE_2D,this.ghostRailTex),n.activeTexture(n.TEXTURE5),n.bindTexture(n.TEXTURE_2D,this.effectTex),n.bindVertexArray(this.vao),n.drawArrays(n.TRIANGLES,0,6))}flushGhostOps(){let e=this.ghostOps;if(e.length===0)return;let t=this.gl;t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,this.ghostRailTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1);let n=new Uint8Array(1);for(let r=0;r<e.length;r+=2){let i=e[r],a=i%this.mapW,o=(i-a)/this.mapW;n[0]=e[r+1],t.texSubImage2D(t.TEXTURE_2D,0,a,o,1,1,t.RED_INTEGER,t.UNSIGNED_BYTE,n)}e.length=0}computePathOrientations(e){if(e.length===0)return[];if(e.length===1)return[{ref:e[0],type:B}];let t=this.mapW,n=[];n.push({ref:e[0],type:Ht(e[0],e[1],t)});for(let r=1;r<e.length-1;r++)n.push({ref:e[r],type:Ut(e[r-1],e[r],e[r+1],t)});let r=e.length-1;return n.push({ref:e[r],type:Ht(e[r],e[r-1],t)}),n}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.railroadTex),e.deleteTexture(this.ghostRailTex),e.deleteTexture(this.terrainTex)}},V=1024,Gt=class{constructor(e,t,n){if(this.layers=new Map,this.disposed=!1,this.gl=e,this.onLayerReady=n,t.length===0){this.tex=this.makeTex(1,1,1);return}this.tex=this.makeTex(V,V,t.length),t.forEach((e,t)=>{this.layers.set(e,t),this.load(e,t)})}get texture(){return this.tex}getLayer(e){return this.layers.get(e)??-1}load(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{this.disposed||(this.uploadImage(n,t),this.onLayerReady(e,t))},n.onerror=()=>{console.warn(`Skin image failed to load:`,e)},n.src=e}uploadImage(e,t){let n=document.createElement(`canvas`);n.width=V,n.height=V;let r=n.getContext(`2d`,{willReadFrequently:!1}),i=Math.min(1,V/e.naturalWidth,V/e.naturalHeight),a=e.naturalWidth*i|0,o=e.naturalHeight*i|0,s=(V-a)/2|0,c=(V-o)/2|0;r.drawImage(e,s,c,a,o);let l=this.gl;l.bindTexture(l.TEXTURE_2D_ARRAY,this.tex),l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,t,V,V,1,l.RGBA,l.UNSIGNED_BYTE,n),l.generateMipmap(l.TEXTURE_2D_ARRAY)}makeTex(e,t,n){let r=this.gl,i=r.createTexture();return r.bindTexture(r.TEXTURE_2D_ARRAY,i),r.texStorage3D(r.TEXTURE_2D_ARRAY,Kt(e,t),r.RGBA8,e,t,n),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D_ARRAY,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),i}dispose(){this.disposed=!0,this.gl.deleteTexture(this.tex),this.layers.clear()}};function Kt(e,t){return Math.floor(Math.log2(Math.max(e,t)))+1}var qt=2*Math.PI,Jt=4,Yt=8,Xt=2,Zt=class{constructor(e){this.params=new Map,this.ribbonsById=new Map,this.ribbonList=[],this.mapW=e}setParams(e,t){this.params.set(e,{radius:t.radius,strands:Math.min(Math.max(Math.round(t.strands),1),8),rotationSpeed:t.rotationSpeed,colors:t.colors})}clearParams(e){this.params.delete(e)}getRibbons(){return this.ribbonList}reset(){this.ribbonsById.clear(),this.ribbonList.length=0}update(e,t){let n=!1;for(let t of this.ribbonsById.keys())e.has(t)||(this.ribbonsById.delete(t),n=!0);for(let r of t){let t=e.get(r);if(!t||!Ce.has(t.unitType)||t.unitType===`MIRV Warhead`)continue;let i=this.ribbonsById.get(r);if(!i){let e=this.params.get(t.ownerID);if(!e)continue;i=this.newRibbon(r,e,t.lastPos),this.ribbonsById.set(r,i),n=!0}t.lastPos!==i.lastPos&&this.advance(i,t.lastPos)}if(n){this.ribbonList.length=0;for(let e of this.ribbonsById.values())this.ribbonList.push(e)}}newRibbon(e,t,n){let r=Math.max(t.radius*Jt,Yt);return{id:e,radius:t.radius,strands:t.strands,twist:qt/r,rotationSpeed:t.rotationSpeed,colors:t.colors,headDist:0,sampleCount:0,samples:new Float32Array(256*5),lastPos:n,dirX:0,dirY:0,hasDir:!1}}advance(e,t){let n=this.mapW,r=e.lastPos%n,i=(e.lastPos-r)/n,a=t%n,o=(t-a)/n;e.lastPos=t;let s=a-r,c=o-i,l=Math.hypot(s,c);if(l===0)return;let u=s/l,d=c/l,f=e.hasDir?e.dirX:u,p=e.hasDir?e.dirY:d,m=e=>{let t=f+(u-f)*e,n=p+(d-p)*e,r=Math.hypot(t,n);return r<1e-6?[u,d]:[t/r,n/r]};if(e.sampleCount===0){let[t,n]=m(0);this.pushSample(e,r,i,-n,t,0)}let h=Math.ceil(l*Xt);for(let t=1;t<=h;t++){let n=t/h,[a,o]=m(n);this.pushSample(e,r+s*n,i+c*n,-o,a,e.headDist+l*n)}e.dirX=u,e.dirY=d,e.hasDir=!0,e.headDist+=l}pushSample(e,t,n,r,i,a){let o=e.sampleCount*5;if(o+5>e.samples.length){let t=new Float32Array(e.samples.length*2);t.set(e.samples),e.samples=t}e.samples[o]=t,e.samples[o+1]=n,e.samples[o+2]=r,e.samples[o+3]=i,e.samples[o+4]=a,e.sampleCount++}},Qt=`#version 300 es
precision highp float;

// Composite the reduced-resolution spiral halo buffer over the scene. The
// buffer holds premultiplied color; the composite blends ADDITIVELY
// (ONE, ONE) so the halo reads as emitted light, and bilinear upsampling
// keeps it soft. The sharp core ribbons draw above this at full resolution.

uniform sampler2D uTex;

in vec2 vUV;
out vec4 fragColor;

void main() {
  fragColor = texture(uTex, vUV);
}
`,$t=`#version 300 es
precision highp float;

// Spiral ribbon shading — a 3D vortex projected onto the map. Spin the helix
// angle with time and derive color (position around the circumference →
// palette, cross-faded) plus a depth cue (cos: segments facing the viewer
// bright, receding ones dark).
//
// Drawn twice per strand (see SpiralRibbonPass) for a glow look — a sharp
// bright core over a soft halo:
//   uCorePass 1: the core ribbon, full resolution, straight alpha into the
//     scene; facing segments get a white-hot center (neon-tube look).
//   uCorePass 0: the halo only, into the reduced-resolution buffer
//     (premultiplied); it is bilinearly upsampled and composited
//     ADDITIVELY over the scene, so it reads as emitted light.

uniform float uTime;       // seconds
uniform float uRotSpeed;   // vortex spin, radians/sec
uniform float uTrailAlpha;
uniform int uColorCount;   // 1..MAX_TRAIL_COLORS colors
uniform vec3 uColors[8];   // palette, wrapped once around the circumference
uniform int uCorePass;     // 1 = full-res core, 0 = low-res glow halo

in float vTheta;
in float vLateral;
out vec4 fragColor;

const float TAU = 6.28318530718;

// Core ribbon profile: opaque within RIB_IN of the strand centerline,
// fading out by RIB_OUT (half-width in tiles). The smoothstep edge doubles
// as anti-aliasing at full resolution.
const float RIB_IN = 0.55;
const float RIB_OUT = 1.0;
// Halo: quadratic falloff to GLOW_OUT tiles with GLOW_STRENGTH peak alpha.
// Composited additively, so crossings and the vortex interior brighten.
const float GLOW_OUT = 3.0;
const float GLOW_STRENGTH = 0.4;
// Core brightness: alpha boost over the plain-trail alpha (a glow's core
// reads as a light source, not a translucent breadcrumb).
const float CORE_ALPHA_BOOST = 1.5;

void main() {
  float d = abs(vLateral);
  float theta = vTheta - uTime * uRotSpeed;
  float f = fract(theta / TAU) * float(uColorCount);
  int i = int(f) % uColorCount;
  int j = (i + 1) % uColorCount;
  float depth = 0.5 + 0.5 * cos(theta);
  vec3 base = mix(uColors[i], uColors[j], fract(f)) * mix(0.55, 1.1, depth);

  if (uCorePass == 1) {
    float core = 1.0 - smoothstep(RIB_IN, RIB_OUT, d);
    if (core <= 0.003) discard;
    // White-hot center, strongest on segments facing the viewer.
    float hot = (1.0 - smoothstep(0.0, RIB_IN, d)) * mix(0.15, 0.55, depth);
    vec3 color = mix(base, vec3(1.0), hot);
    float a = min(uTrailAlpha * CORE_ALPHA_BOOST, 1.0) * core;
    fragColor = vec4(color, a); // straight alpha — scene default blending
  } else {
    float glowFall = 1.0 - smoothstep(0.0, GLOW_OUT, d);
    float glow = GLOW_STRENGTH * glowFall * glowFall;
    if (glow <= 0.003) discard;
    float a = uTrailAlpha * glow;
    fragColor = vec4(base * a, a); // premultiplied — halo buffer
  }
}
`,en=`#version 300 es
precision highp float;

// Spiral ribbon strip — one strand of a spiral nuke trail. Vertices are
// centerline samples expanded to a fixed-width strip (aSide = ±1); this
// shader swings each sample sideways along its perpendicular by the helix
// offset, so the strip follows the strand. Amplitude ramps 0 → uRadius over
// one pitch behind the head (the cone that converges into the missile) —
// evaluated here from uHeadDist so appended vertices never need rewriting.

layout(location = 0) in vec2 aCenter; // centerline sample (world tiles)
layout(location = 1) in vec2 aPerp;   // unit perpendicular of the path there
layout(location = 2) in float aDist;  // cumulative centerline distance
layout(location = 3) in float aSide;  // ±1 — which edge of the strip

uniform mat3 uCamera;
uniform float uHeadDist;  // cumulative distance at the nuke's head
uniform float uConeLen;   // cone length = one helix pitch, tiles
uniform float uRadius;    // helix amplitude, tiles
uniform float uTwist;     // helix phase advance, radians per tile
uniform float uPhase0;    // this strand's phase offset around the axis
uniform float uHalfWidth; // strip half-width, tiles (covers core + glow)

out float vTheta;   // helix angle at this point (un-spun)
out float vLateral; // signed distance from the strand centerline, tiles

const float HALF_PI = 1.57079632679;

void main() {
  float behind = clamp((uHeadDist - aDist) / uConeLen, 0.0, 1.0);
  float amp = uRadius * sin(HALF_PI * behind);
  float theta = aDist * uTwist + uPhase0;
  float off = amp * sin(theta);

  // Strand tangent = centerline direction + lateral swing rate, so the strip
  // stays perpendicular to the strand even on steep swings and in the cone.
  // d(amp)/d(dist) via behind' = -1/uConeLen inside the cone, 0 past it.
  float ampDeriv = behind < 1.0
      ? -uRadius * HALF_PI * cos(HALF_PI * behind) / uConeLen
      : 0.0;
  float offDeriv = ampDeriv * sin(theta) + amp * uTwist * cos(theta);
  // aPerp = (-dirY, dirX), so the centerline direction is (aPerp.y, -aPerp.x).
  vec2 dir = vec2(aPerp.y, -aPerp.x);
  vec2 tangent = dir + aPerp * offDeriv; // never zero: |dir|=1, aPerp ⊥ dir
  vec2 n = normalize(vec2(-tangent.y, tangent.x));

  vec2 world = aCenter + aPerp * off + n * (aSide * uHalfWidth);
  vec3 clip = uCamera * vec3(world, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vTheta = theta;
  vLateral = aSide * uHalfWidth;
}
`,H=6,tn=1.2,nn=3.2,rn=2*Math.PI,an=class{constructor(e,t){this.fbo=null,this.fboTex=null,this.fboW=0,this.fboH=0,this.ribbons=[],this.buffers=new Map,this.vertScratch=new Float32Array(512*2*H),this.colorScratch=new Float32Array(24),this.startTime=performance.now(),this.gl=e,this.settings=t,this.program=O(e,en,$t,`SpiralRibbonPass.program`);let n=t=>e.getUniformLocation(this.program,t);this.uCamera=n(`uCamera`),this.uHeadDist=n(`uHeadDist`),this.uConeLen=n(`uConeLen`),this.uRadius=n(`uRadius`),this.uTwist=n(`uTwist`),this.uPhase0=n(`uPhase0`),this.uHalfWidth=n(`uHalfWidth`),this.uTime=n(`uTime`),this.uRotSpeed=n(`uRotSpeed`),this.uTrailAlpha=n(`uTrailAlpha`),this.uColorCount=n(`uColorCount`),this.uColors=n(`uColors`),this.uCorePass=n(`uCorePass`),this.compositeProgram=O(e,ut,Qt,`SpiralRibbonPass.compositeProgram`),e.useProgram(this.compositeProgram),e.uniform1i(e.getUniformLocation(this.compositeProgram,`uTex`),0),this.fsQuadVao=e.createVertexArray(),e.bindVertexArray(this.fsQuadVao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateRibbons(e){this.ribbons=e;let t=new Set;for(let n of e)t.add(n.id),this.uploadRibbon(n);for(let[e,n]of this.buffers)t.has(e)||(this.gl.deleteVertexArray(n.vao),this.gl.deleteBuffer(n.vbo),this.buffers.delete(e))}uploadRibbon(e){let t=this.gl,n=this.buffers.get(e.id);if(!n){let r=t.createBuffer(),i=t.createVertexArray();t.bindVertexArray(i),t.bindBuffer(t.ARRAY_BUFFER,r);let a=H*4;t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,a,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,2,t.FLOAT,!1,a,8),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,1,t.FLOAT,!1,a,16),t.enableVertexAttribArray(3),t.vertexAttribPointer(3,1,t.FLOAT,!1,a,20),t.bindVertexArray(null),n={vao:i,vbo:r,capacityVerts:0,uploadedSamples:0},this.buffers.set(e.id,n)}if(e.sampleCount<=n.uploadedSamples)return;let r=e.sampleCount*2;if(t.bindBuffer(t.ARRAY_BUFFER,n.vbo),r>n.capacityVerts){let e=Math.max(n.capacityVerts,512);for(;e<r;)e*=2;t.bufferData(t.ARRAY_BUFFER,e*H*4,t.DYNAMIC_DRAW),n.capacityVerts=e,n.uploadedSamples=0}let i=n.uploadedSamples,a=e.sampleCount-i,o=this.expandSamples(e.samples,i,a);t.bufferSubData(t.ARRAY_BUFFER,i*2*H*4,o),n.uploadedSamples=e.sampleCount}expandSamples(e,t,n){let r=n*2*H;if(this.vertScratch.length<r){let e=this.vertScratch.length;for(;e<r;)e*=2;this.vertScratch=new Float32Array(e)}let i=this.vertScratch,a=0;for(let r=0;r<n;r++){let n=(t+r)*5;for(let t=-1;t<=1;t+=2)i[a++]=e[n],i[a++]=e[n+1],i[a++]=e[n+2],i[a++]=e[n+3],i[a++]=e[n+4],i[a++]=t}return i.subarray(0,r)}draw(e){let t=!1;for(let e of this.ribbons)if(e.sampleCount>=2){t=!0;break}t&&(this.renderBuffer(e),this.composite(),this.drawCores(e))}ensureTarget(e,t){if(this.fbo!==null&&e===this.fboW&&t===this.fboH)return;let n=this.gl;this.fboTex===null&&(this.fboTex=n.createTexture(),this.fbo=n.createFramebuffer()),n.bindTexture(n.TEXTURE_2D,this.fboTex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindFramebuffer(n.FRAMEBUFFER,this.fbo),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.fboTex,0),n.bindFramebuffer(n.FRAMEBUFFER,null),this.fboW=e,this.fboH=t}renderBuffer(e){let t=this.gl,n=this.settings.mapOverlay.spiralResolutionScale,r=Math.max(1,Math.round(t.drawingBufferWidth*n)),i=Math.max(1,Math.round(t.drawingBufferHeight*n));this.ensureTarget(r,i);let a=t.getParameter(t.FRAMEBUFFER_BINDING),o=t.getParameter(t.VIEWPORT);t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.viewport(0,0,r,i),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),this.drawStrips(e,0,nn),t.bindFramebuffer(t.FRAMEBUFFER,a),t.viewport(o[0],o[1],o[2],o[3]),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)}drawStrips(e,t,n){let r=this.gl;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1i(this.uCorePass,t),r.uniform1f(this.uHalfWidth,n),r.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),r.uniform1f(this.uTrailAlpha,this.settings.mapOverlay.trailAlpha);for(let e of this.ribbons){if(e.sampleCount<2)continue;let t=this.buffers.get(e.id);if(!t)continue;r.uniform1f(this.uHeadDist,e.headDist),r.uniform1f(this.uConeLen,rn/e.twist),r.uniform1f(this.uRadius,e.radius),r.uniform1f(this.uTwist,e.twist),r.uniform1f(this.uRotSpeed,e.rotationSpeed);let n=Math.min(e.colors.length,8);for(let t=0;t<n;t++)this.colorScratch[t*3]=e.colors[t][0],this.colorScratch[t*3+1]=e.colors[t][1],this.colorScratch[t*3+2]=e.colors[t][2];r.uniform1i(this.uColorCount,n),r.uniform3fv(this.uColors,this.colorScratch),r.bindVertexArray(t.vao);let i=Math.min(e.sampleCount,t.uploadedSamples)*2;for(let t=0;t<e.strands;t++)r.uniform1f(this.uPhase0,t*rn/e.strands),r.drawArrays(r.TRIANGLE_STRIP,0,i)}}composite(){let e=this.gl;e.useProgram(this.compositeProgram),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.fboTex),e.blendFunc(e.ONE,e.ONE),e.bindVertexArray(this.fsQuadVao),e.drawArrays(e.TRIANGLES,0,6),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA)}drawCores(e){this.drawStrips(e,1,tn)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteProgram(this.compositeProgram),e.deleteVertexArray(this.fsQuadVao);for(let t of this.buffers.values())e.deleteVertexArray(t.vao),e.deleteBuffer(t.vbo);this.buffers.clear(),this.fbo&&e.deleteFramebuffer(this.fbo),this.fboTex&&e.deleteTexture(this.fboTex)}},on=`#version 300 es
precision highp float;

uniform sampler2D uPalette;
uniform sampler2D uAtlas;
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — row 1 = unit affiliation
uniform sampler2D uEffect;        // RGBA32F — shared effect palette, keyed by
                                  //   ownerID. The structures block starts at row
                                  //   STRUCT_EFFECT_ROW_BASE; same layout as
                                  //   trail.frag.glsl (row r = color r's rgb;
                                  //   row 0.a = count, 1.a = styleId,
                                  //   2.a = scalar0, 3.a = scalar1)
uniform float uTime;              // seconds, for animated effect styles
uniform float uHoverOwner;        // smallID of the hovered territory's owner
                                  //   (0 = none) — gates the structures effect
uniform float uDotsThreshold;
uniform float uGhostAlpha;       // 1.0 = normal, <1.0 = ghost transparency
uniform vec3  uOutlineColor;     // ghost outline color (vec3(0) = no outline)
uniform int   uAltView;
uniform int   uHighlightMask;   // bitmask of atlas columns to highlight (0 = off)
uniform float uHighlightOutlineW; // outline width for highlighted structures
uniform float uHighlightDimAlpha; // alpha multiplier for non-highlighted structures
uniform float uFillDarken;      // HSV value multiplier on icon fill
uniform float uBorderDarken;    // HSV value multiplier on icon border
uniform float uIconAlpha;       // global multiplier on final icon alpha
uniform vec3  uIconColor;       // color of the inner icon glyph (was white)
uniform float uIconDarken;      // >0: glyph = darkened player color instead of uIconColor
uniform float uLocalPlayerID;

in vec2  vLocalPos;
in vec2  vAtlasUV;
flat in float vOwnerID;
flat in float vUnderConstruction;
flat in float vMarkedForDeletion;
flat in float vZoom;
flat in float vAtlasIdx;
flat in float vIconAtlasIdx;
flat in float vShapeScale;

out vec4 fragColor;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
  return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
}

vec3 darken(vec3 rgb, float vScale) {
  vec3 hsv = rgb2hsv(rgb);
  hsv.z *= vScale;
  return hsv2rgb(hsv);
}

// The owner's structures cosmetic color, if equipped. Reads the structures
// block of the shared effect palette; the gradient/transition math mirrors
// trail.frag.glsl so the same catalog attributes look identical on both.
// Returns false when the owner has no structures effect (count 0).
bool structuresEffectColor(int owner, out vec3 color) {
  const int rowBase = STRUCT_EFFECT_ROW_BASE;
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — one color at a time, cross-fading through the list.
    // frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — the palette spans the icon's diagonal once, so the whole
    // gradient is visible across the shape (world-space banding like the
    // trail's would put the entire icon inside one band and read as a flat
    // color). It scrolls along the diagonal at the trail-equivalent pace:
    // one full slide every colorSize · count / movementSpeed seconds,
    // so both knobs keep their trail timing semantics.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float dn = (vLocalPos.x + vLocalPos.y) * 0.5; // icon diagonal, -0.5..0.5
    float phase =
      fract(dn - uTime * movementSpeed / (colorSize * float(count)));
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

#define PI 3.14159265

// Signed distance to regular polygon edge.
// R = circumradius (center-to-vertex), n = sides, rot = rotation in radians.
// Returns negative inside, positive outside.
float sdPolygon(vec2 p, float R, float n, float rot) {
  float an = PI / n;
  float a = atan(p.y, p.x) - rot;
  a = mod(a + an, 2.0 * an) - an;
  return length(p) * cos(a) - R * cos(an);
}

// Per-structure-type shape SDF.
// Indices: 0=City, 1=Port, 2=Factory, 3=DefensePost, 4=SAM, 5=Silo,
// 6=OilField, 7=GasField, 8=UraniumPlant, 9=Radar, 10=MissileFactory,
// 11=Arsenal, 12=OilStorage, 13=UnknownStructure.
float shapeSDF(vec2 p, float R) {
  if (vAtlasIdx < 0.5)
    return length(p) - R;                     // City → circle
  if (vAtlasIdx < 1.5)
    return sdPolygon(p, R, 5.0, PI * 0.5);    // Port → pentagon (vertex up)
  if (vAtlasIdx < 2.5)
    return sdPolygon(p, R, 6.0, PI / 6.0);    // Factory → hexagon (flat top)
  if (vAtlasIdx < 3.5)
    return sdPolygon(p, R, 8.0, 0.0);         // Defense Post → octagon (flat top)
  if (vAtlasIdx < 4.5)
    return sdPolygon(p, R, 4.0, 0.0);         // SAM Launcher → square (flat sides)
  if (vAtlasIdx < 5.5)
    return sdPolygon(p, R, 3.0, PI * 0.5);    // Missile Silo → triangle (vertex up)
  if (vAtlasIdx < 6.5)
    return sdPolygon(p, R, 6.0, PI / 6.0);    // Oil Field → hexagon
  if (vAtlasIdx < 7.5)
    return sdPolygon(p, R, 5.0, PI * 0.5);     // Gas Field → pentagon
  if (vAtlasIdx < 9.5)
    return sdPolygon(p, R, 8.0, PI / 8.0);    // Radar → octagon
  if (vAtlasIdx < 10.5)
    return sdPolygon(p, R, 6.0, 0.0);          // Missile factory → hexagon
  if (vAtlasIdx < 11.5)
    return sdPolygon(p, R, 4.0, PI / 4.0);     // Arsenal → diamond
  if (vAtlasIdx < 12.5)
    return sdPolygon(p, R, 8.0, PI / 8.0);     // Oil storage → octagon
  return length(p) - R;                       // Unknown installation → circle
}

float segmentDistance(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float glyphStroke(vec2 p, vec2 a, vec2 b, float width) {
  return 1.0 - smoothstep(width, width + fwidth(p.x) * 1.5,
                          segmentDistance(p, a, b));
}

float oilFieldGlyph(vec2 p) {
  float glyph = 0.0;
  // Pump jack silhouette: walking beam, counterweight, support and base.
  glyph = max(glyph, glyphStroke(p, vec2(-0.25, -0.10), vec2(0.20, 0.08), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(0.00, 0.00), vec2(0.00, 0.25), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.20, 0.23), vec2(0.00, 0.00), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(0.20, 0.23), vec2(0.00, 0.00), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.23, 0.27), vec2(0.23, 0.27), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.26, -0.18), vec2(-0.13, -0.18), 0.032));
  glyph = max(glyph, glyphStroke(p, vec2(0.13, 0.10), vec2(0.25, 0.10), 0.029));
  return glyph;
}

float gasFieldGlyph(vec2 p) {
  float glyph = 0.0;
  // Flame outline and inner tongue.
  glyph = max(glyph, glyphStroke(p, vec2(0.00, 0.29), vec2(-0.14, 0.08), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(-0.14, 0.08), vec2(-0.08, -0.02), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(-0.08, -0.02), vec2(-0.19, -0.11), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(-0.19, -0.11), vec2(-0.12, -0.25), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(-0.12, -0.25), vec2(0.00, -0.30), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.00, -0.30), vec2(0.14, -0.23), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.14, -0.23), vec2(0.19, -0.08), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.19, -0.08), vec2(0.09, 0.04), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.09, 0.04), vec2(0.12, 0.13), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.12, 0.13), vec2(0.00, 0.29), 0.028));
  glyph = max(glyph, glyphStroke(p, vec2(0.00, 0.02), vec2(-0.06, -0.10), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.06, -0.10), vec2(0.00, -0.21), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(0.00, -0.21), vec2(0.07, -0.08), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(0.07, -0.08), vec2(0.00, 0.02), 0.025));
  return glyph;
}

float uraniumPlantGlyph(vec2 p) {
  float glyph = 0.0;
  float ringWidth = 0.025;
  vec2 p1 = vec2(p.x * 0.85 + p.y * 0.52, -p.x * 0.52 + p.y * 0.85);
  vec2 p2 = vec2(p.x * 0.85 - p.y * 0.52, p.x * 0.52 + p.y * 0.85);
  glyph = max(glyph, 1.0 - smoothstep(ringWidth, ringWidth + fwidth(p.x),
                                      abs(length(vec2(p.x, p.y * 1.7)) - 0.19)));
  glyph = max(glyph, 1.0 - smoothstep(ringWidth, ringWidth + fwidth(p.x),
                                      abs(length(vec2(p1.x, p1.y * 1.7)) - 0.19)));
  glyph = max(glyph, 1.0 - smoothstep(ringWidth, ringWidth + fwidth(p.x),
                                      abs(length(vec2(p2.x, p2.y * 1.7)) - 0.19)));
  glyph = max(glyph, 1.0 - smoothstep(0.065, 0.065 + fwidth(p.x), length(p)));
  return glyph;
}

float radarGlyph(vec2 p) {
  float glyph = glyphStroke(p, vec2(0.0, -0.2), vec2(0.0, 0.12), 0.03);
  glyph = max(glyph, glyphStroke(p, vec2(-0.16, 0.04), vec2(0.16, 0.04), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.12, 0.22), vec2(0.12, 0.22), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.12, 0.22), vec2(0.0, 0.12), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.12, 0.22), vec2(0.0, 0.12), 0.03));
  return glyph;
}

float missileFactoryGlyph(vec2 p) {
  float glyph = 0.0;
  glyph = max(glyph, glyphStroke(p, vec2(-0.24, -0.22), vec2(0.24, -0.22), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.18, -0.22), vec2(-0.18, 0.12), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.18, -0.22), vec2(0.18, 0.12), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.18, 0.12), vec2(0.18, 0.12), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.18, 0.12), vec2(0.0, 0.25), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.0, 0.25), vec2(0.18, 0.12), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.0, -0.08), vec2(0.0, 0.08), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.06, 0.02), vec2(0.0, 0.08), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(0.06, 0.02), vec2(0.0, 0.08), 0.025));
  return glyph;
}

float arsenalGlyph(vec2 p) {
  float glyph = 0.0;
  glyph = max(glyph, glyphStroke(p, vec2(-0.24, -0.17), vec2(0.02, -0.17), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.24, -0.17), vec2(-0.24, 0.05), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.02, -0.17), vec2(0.02, 0.05), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.24, 0.05), vec2(0.02, 0.05), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.02, -0.02), vec2(0.24, -0.02), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.02, -0.02), vec2(-0.02, 0.20), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.24, -0.02), vec2(0.24, 0.20), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.02, 0.20), vec2(0.24, 0.20), 0.03));
  return glyph;
}

float oilStorageGlyph(vec2 p) {
  float glyph = 0.0;
  glyph = max(glyph, glyphStroke(p, vec2(-0.17, -0.20), vec2(0.17, -0.20), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.17, 0.16), vec2(0.17, 0.16), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.17, -0.20), vec2(-0.17, 0.16), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.17, -0.20), vec2(0.17, 0.16), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.16, 0.16), vec2(0.0, 0.25), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.0, 0.25), vec2(0.16, 0.16), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.0, 0.25), vec2(0.0, 0.33), 0.025));
  glyph = max(glyph, glyphStroke(p, vec2(-0.10, -0.08), vec2(0.10, -0.08), 0.025));
  return glyph;
}

float boxMask(vec2 p, vec2 center, vec2 halfSize) {
  vec2 q = abs(p - center) - halfSize;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
  float aa = max(fwidth(d), 0.002);
  return 1.0 - smoothstep(-aa, aa, d);
}

float portGlyph(vec2 p, out vec3 color) {
  const vec3 darkTeal = vec3(0.086, 0.31, 0.388);
  const vec3 teal = vec3(0.212, 0.835, 0.773);
  const vec3 deepTeal = vec3(0.137, 0.561, 0.588);
  const vec3 paleMint = vec3(0.824, 1.0, 0.941);
  const vec3 gold = vec3(1.0, 0.82, 0.4);

  float alpha = 0.0;
  color = vec3(0.0);

  // The hull and pier sit behind the warehouse.
  float hullHeight = clamp((-p.y - 0.15) / 0.19, 0.0, 1.0);
  float hullHalfWidth = mix(0.27, 0.17, hullHeight);
  float hull = smoothstep(-0.36, -0.34, p.y)
    * (1.0 - smoothstep(-0.17, -0.15, p.y))
    * (1.0 - smoothstep(hullHalfWidth - 0.015, hullHalfWidth, abs(p.x)));
  color = mix(color, darkTeal, hull);
  alpha = max(alpha, hull);

  float hullInset = smoothstep(-0.33, -0.31, p.y)
    * (1.0 - smoothstep(-0.20, -0.18, p.y))
    * (1.0 - smoothstep(hullHalfWidth - 0.045, hullHalfWidth - 0.03, abs(p.x)));
  color = mix(color, teal, hullInset);
  alpha = max(alpha, hullInset);

  float pier = boxMask(p, vec2(0.0, -0.12), vec2(0.31, 0.035));
  color = mix(color, paleMint, pier);
  alpha = max(alpha, pier);

  // Warehouse body, roof trim, and lit windows.
  float warehouse = boxMask(p, vec2(-0.015, 0.035), vec2(0.18, 0.13));
  color = mix(color, deepTeal, warehouse);
  alpha = max(alpha, warehouse);

  float warehouseFace = boxMask(p, vec2(-0.015, 0.025), vec2(0.145, 0.095));
  color = mix(color, teal, warehouseFace);
  alpha = max(alpha, warehouseFace);

  float roof = boxMask(p, vec2(-0.015, 0.17), vec2(0.205, 0.025));
  color = mix(color, paleMint, roof);
  alpha = max(alpha, roof);

  float windows = 0.0;
  windows = max(windows, boxMask(p, vec2(-0.105, 0.03), vec2(0.025, 0.035)));
  windows = max(windows, boxMask(p, vec2(-0.015, 0.03), vec2(0.025, 0.035)));
  windows = max(windows, boxMask(p, vec2(0.075, 0.03), vec2(0.025, 0.035)));
  color = mix(color, paleMint, windows);
  alpha = max(alpha, windows);

  // Match the harbor marker used by the construction-menu artwork.
  float harborMark = glyphStroke(p, vec2(0.0, 0.17), vec2(0.0, 0.33), 0.018);
  harborMark = max(harborMark, glyphStroke(p, vec2(-0.08, 0.25), vec2(0.08, 0.25), 0.018));
  color = mix(color, gold, harborMark);
  alpha = max(alpha, harborMark);

  float waves = glyphStroke(p, vec2(-0.28, -0.39), vec2(-0.12, -0.39), 0.012);
  waves = max(waves, glyphStroke(p, vec2(0.12, -0.39), vec2(0.28, -0.39), 0.012));
  color = mix(color, paleMint, waves);
  alpha = max(alpha, waves);

  return alpha;
}

float defensePostGlyph(vec2 p) {
  float glyph = 0.0;
  glyph = max(glyph, glyphStroke(p, vec2(-0.20, -0.22), vec2(0.20, -0.22), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.16, -0.22), vec2(-0.16, 0.15), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.16, -0.22), vec2(0.16, 0.15), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.16, 0.15), vec2(0.16, 0.15), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.23, 0.15), vec2(-0.23, 0.26), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.08, 0.15), vec2(-0.08, 0.26), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.08, 0.15), vec2(0.08, 0.26), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(0.23, 0.15), vec2(0.23, 0.26), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.23, 0.26), vec2(0.23, 0.26), 0.03));
  glyph = max(glyph, glyphStroke(p, vec2(-0.06, -0.22), vec2(-0.06, -0.02), 0.024));
  glyph = max(glyph, glyphStroke(p, vec2(0.06, -0.22), vec2(0.06, -0.02), 0.024));
  return glyph;
}

float unknownStructureGlyph(vec2 p) {
  float glyph = glyphStroke(p, vec2(-0.11, 0.16), vec2(-0.08, 0.23), 0.035);
  glyph = max(glyph, glyphStroke(p, vec2(-0.08, 0.23), vec2(0.06, 0.25), 0.035));
  glyph = max(glyph, glyphStroke(p, vec2(0.06, 0.25), vec2(0.13, 0.18), 0.035));
  glyph = max(glyph, glyphStroke(p, vec2(0.13, 0.18), vec2(0.12, 0.11), 0.035));
  glyph = max(glyph, glyphStroke(p, vec2(0.12, 0.11), vec2(0.01, 0.01), 0.035));
  glyph = max(glyph, glyphStroke(p, vec2(0.01, 0.01), vec2(0.01, -0.09), 0.035));
  glyph = max(glyph, 1.0 - smoothstep(0.035, 0.05, length(p - vec2(0.01, -0.19))));
  return glyph;
}

void main() {
  float dist = length(vLocalPos);
  float radius = 0.45;
  float borderWidth = 0.06 / vShapeScale;

  float sdf = shapeSDF(vLocalPos, radius);
  float fw = fwidth(dist);

  // When highlight is active, expand the region to include the outer outline band.
  float highlightOutlineW = uHighlightMask != 0 ? uHighlightOutlineW / vShapeScale : 0.0;
  float outerAlpha = 1.0 - smoothstep(-fw, fw, sdf - highlightOutlineW);

  if (outerAlpha <= 0.0) discard;

  float borderMask = 1.0 - smoothstep(-fw, fw, sdf + borderWidth);

  // Player color
  vec4 fillColor;
  vec4 borderColor;

  if (uAltView != 0 && vUnderConstruction < 0.5) {
    vec3 ac = texelFetch(uAffiliation, ivec2(int(vOwnerID), 1), 0).rgb;
    fillColor = vec4(darken(ac, uFillDarken), 1.0);
    borderColor = vec4(darken(ac, uBorderDarken), 1.0);
  } else if (vUnderConstruction > 0.5) {
    fillColor = vec4(198.0/255.0, 198.0/255.0, 198.0/255.0, 1.0);
    borderColor = vec4(127.0/255.0, 127.0/255.0, 127.0/255.0, 1.0);
  } else {
    int owner = int(vOwnerID + 0.5);
    int local = int(uLocalPlayerID);
    float u = (vOwnerID + 0.5) / float(PALETTE_SIZE);
    fillColor = texture(uPalette, vec2(u, 0.25));
    // if local player, use territory color because the border color is grey
    borderColor = texture(uPalette, vec2(u, owner == local ? 0.25 : 0.75));
    // Darken via HSV value so hue/saturation stay intact
    // vScale < 1.0 = darker, > 1.0 = brighter
    fillColor.rgb = darken(fillColor.rgb, uFillDarken);
    borderColor.rgb = darken(borderColor.rgb, uBorderDarken);
    fillColor.a = 1.0;
    borderColor.a = 1.0;
  }

  // structures cosmetic: recolor the fill with the owner's effect (raw catalog
  // colors, like trails — no darken) while their territory is hovered. The
  // local player's own effect always shows — touch devices never hover, and
  // buyers should see what they paid for. The border keeps the player color
  // so ownership stays readable. Skipped for alt view and construction gray.
  bool effectActive = false;
  if (uAltView == 0 && vUnderConstruction < 0.5) {
    int effOwner = int(vOwnerID + 0.5);
    if ((effOwner == int(uHoverOwner + 0.5) ||
         effOwner == int(uLocalPlayerID)) && effOwner > 0) {
      vec3 effectRGB;
      if (structuresEffectColor(effOwner, effectRGB)) {
        fillColor.rgb = effectRGB;
        effectActive = true;
      }
    }
  }

  vec4 bgColor = mix(borderColor, fillColor, borderMask);

  // Sample icon from atlas (white on transparent)
  // Only show icon detail when zoomed in enough
  float iconAlpha = 0.0;
  vec3 iconRGB = vec3(1.0);
  if (vZoom > uDotsThreshold) {
    // Clamp UV to this atlas cell to prevent bleeding into neighbours
    // when uIconFill shrinks the icon (expanding UV range beyond column).
    float col = mod(vIconAtlasIdx, float(ICON_ATLAS_COLS));
    float row = floor(vIconAtlasIdx / float(ICON_ATLAS_COLS));
    float colStart = col / float(ICON_ATLAS_COLS);
    float colEnd = (col + 1.0) / float(ICON_ATLAS_COLS);
    float rowStart = row / float(ICON_ATLAS_ROWS);
    float rowEnd = (row + 1.0) / float(ICON_ATLAS_ROWS);
    vec2 safeUV = vec2(
      clamp(vAtlasUV.x, colStart, colEnd),
      clamp(vAtlasUV.y, rowStart, rowEnd)
    );
    vec4 iconSample = texture(uAtlas, safeUV);
    // Zero out icon outside the valid UV region (clamped pixels would repeat the edge)
    float inBounds = step(colStart, vAtlasUV.x) * step(vAtlasUV.x, colEnd)
                   * step(rowStart, vAtlasUV.y) * step(vAtlasUV.y, rowEnd);
    // Clip to fill area so icon doesn't bleed into the border ring.
    iconAlpha = iconSample.a * borderMask * inBounds;
    iconRGB = iconSample.rgb;
  }

  // Composite: tinted icon over player-colored shape.
  // Classic icons (uIconDarken > 0) tint the glyph with a darkened player
  // color. When the shape itself is already dark, that darkened glyph blends
  // into the shape (and the dark territory behind it) and becomes unreadable —
  // so flip the glyph to the light icon color when the fill is too dark.
  // While the structures effect is animating the fill, the flip becomes a
  // smooth luminance fade so the glyph cross-fades instead of snapping;
  // without the effect this is the classic hard threshold, pixel-identical
  // to having no cosmetic equipped.
  vec3 finalRGB = mix(bgColor.rgb, iconRGB, iconAlpha);

  // Red X overlay for units marked for deletion
  if (vMarkedForDeletion > 0.5) {
    float lineW = max(0.025, fw * 1.5);
    float d1 = abs(vLocalPos.x - vLocalPos.y) * 0.7071; // dist to y=x diagonal
    float d2 = abs(vLocalPos.x + vLocalPos.y) * 0.7071; // dist to y=-x diagonal
    float dMin = min(d1, d2);
    // Extend arms close to the circle edge
    float maskR = max(radius * 1.55, fw * 6.0);
    float mask = 1.0 - smoothstep(maskR - fw, maskR, dist);
    float xLine = (1.0 - smoothstep(lineW - fw, lineW + fw, dMin)) * mask;
    finalRGB = mix(finalRGB, vec3(1.0, 0.25, 0.25), xLine * 0.95);
  }

  // Ghost tint — blend entire surface toward uOutlineColor when non-zero
  float tintActive = step(0.01, dot(uOutlineColor, uOutlineColor));
  finalRGB = mix(finalRGB, uOutlineColor, tintActive * 0.5);

  float finalAlpha = bgColor.a * outerAlpha * uGhostAlpha * uIconAlpha;

  // Build-button hover highlight: white outline on matching types, dim the rest
  if (uHighlightMask != 0) {
    int bit = 1 << int(vAtlasIdx + 0.5);
    if ((uHighlightMask & bit) != 0) {
      // White outline band outside the shape edge (matches game's OutlineFilter)
      float shapeEdge = 1.0 - smoothstep(-fw, fw, sdf);           // 1 inside shape, 0 outside
      float expandedEdge = 1.0 - smoothstep(-fw, fw, sdf - highlightOutlineW); // includes outline band
      float outlineBand = expandedEdge - shapeEdge;                // 1 in outline region only
      finalRGB = mix(finalRGB, vec3(1.0), outlineBand);
      finalAlpha = max(finalAlpha, outlineBand);
    } else {
      finalAlpha *= uHighlightDimAlpha;
    }
  }

  fragColor = vec4(finalRGB, finalAlpha);
}
`,sn=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: x, y, ownerID, underConstruction, atlasIdx, markedForDeletion
layout(location = 1) in vec4 aInst0; // x, y, ownerID, underConstruction
layout(location = 2) in vec2 aInst1; // atlasIdx, markedForDeletion

uniform mat3  uCamera;
uniform float uZoom;

uniform float uIconSize;
uniform float uDotsThreshold;
uniform float uDotScale;
uniform float uScaleFactor;
uniform float uIconGrowZoom;
uniform float uShapeScales[STRUCTURE_COUNT];
uniform float uIconFills[STRUCTURE_COUNT];

out vec2  vLocalPos;
out vec2  vAtlasUV;
flat out float vOwnerID;
flat out float vUnderConstruction;
flat out float vMarkedForDeletion;
flat out float vZoom;
flat out float vAtlasIdx;
flat out float vIconAtlasIdx;
flat out float vShapeScale;

void main() {
  float worldX = aInst0.x;
  float worldY = aInst0.y;
  vOwnerID = aInst0.z;
  vUnderConstruction = aInst0.w;
  vMarkedForDeletion = aInst1.y;
  vZoom = uZoom;
  vAtlasIdx = aInst1.x;
  vIconAtlasIdx = aInst1.x;

  float iconScale;
  if (uZoom <= uDotsThreshold) {
    iconScale = uDotScale;
  } else if (uZoom >= uIconGrowZoom) {
    // World-anchored: grow proportionally to zoom so the structure covers a
    // fixed area of the map. Past this zoom, structures should feel like
    // they're "on" the canvas rather than overlaid at constant pixel size.
    iconScale = uZoom / uIconGrowZoom;
  } else {
    iconScale = min(1.0, uZoom / uScaleFactor);
  }

  int shapeIdx = int(aInst1.x);
  float shapeScale = uShapeScales[shapeIdx];
  vShapeScale = shapeScale;

  float halfSize = uIconSize * iconScale * 0.5 / uZoom * shapeScale;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * halfSize * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos - 0.5;

  // Atlas UV: icons stay the same world size regardless of shape scaling,
  // and are further shrunk by per-shape iconFill (0-1) to add padding inside the frame.
  float uvExpand = shapeScale / uIconFills[shapeIdx];
  float scaledX = 0.5 + (aPos.x - 0.5) * uvExpand;
  float scaledY = 0.5 + (aPos.y - 0.5) * uvExpand;
  float col = mod(vIconAtlasIdx, float(ICON_ATLAS_COLS));
  float row = floor(vIconAtlasIdx / float(ICON_ATLAS_COLS));
  float colU = (col + scaledX) / float(ICON_ATLAS_COLS);
  float rowV = (row + scaledY) / float(ICON_ATLAS_ROWS);
  vAtlasUV = vec2(colU, rowV);
}
`,U=[...u,be],W=6,cn=Math.ceil(U.length/W),G=64,K=6,q=K*4,ln=class{constructor(e,t,n,r,i){this.localPlayerID=0,this.startTime=performance.now(),this.hoverOwner=0,this.affiliationTex=null,this.altView=!1,this.instanceCount=0,this.typeToAtlasCol=new Map,this.highlightMask=0,this.ghost=null,this.ghostBuf=new Float32Array(K),this.gl=e,this.settings=i,this.mapW=t.mapWidth,this.paletteTex=n,this.effectTex=r;for(let e=0;e<t.unitTypes.length;e++){let n=U.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.typeToAtlasCol.set(be,U.indexOf(be)),this.program=O(e,A(sn,{STRUCTURE_COUNT:U.length,ICON_ATLAS_COLS:W,ICON_ATLAS_ROWS:cn}),A(on,{PALETTE_SIZE:E(),ICON_ATLAS_COLS:W,ICON_ATLAS_ROWS:cn,STRUCT_EFFECT_ROW_BASE:16}),`StructurePass`),this.uLocalPlayerID=e.getUniformLocation(this.program,`uLocalPlayerID`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uIconSize=e.getUniformLocation(this.program,`uIconSize`),this.uDotScale=e.getUniformLocation(this.program,`uDotScale`),this.uDotsThreshold=e.getUniformLocation(this.program,`uDotsThreshold`),this.uScaleFactor=e.getUniformLocation(this.program,`uScaleFactor`),this.uIconGrowZoom=e.getUniformLocation(this.program,`uIconGrowZoom`),this.uShapeScales=e.getUniformLocation(this.program,`uShapeScales`),this.uIconFills=e.getUniformLocation(this.program,`uIconFills`),this.uGhostAlpha=e.getUniformLocation(this.program,`uGhostAlpha`),this.uOutlineColor=e.getUniformLocation(this.program,`uOutlineColor`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uHighlightMask=e.getUniformLocation(this.program,`uHighlightMask`),this.uHighlightOutlineW=e.getUniformLocation(this.program,`uHighlightOutlineW`),this.uHighlightDimAlpha=e.getUniformLocation(this.program,`uHighlightDimAlpha`),this.uFillDarken=e.getUniformLocation(this.program,`uFillDarken`),this.uBorderDarken=e.getUniformLocation(this.program,`uBorderDarken`),this.uIconAlpha=e.getUniformLocation(this.program,`uIconAlpha`),this.uIconColor=e.getUniformLocation(this.program,`uIconColor`),this.uIconDarken=e.getUniformLocation(this.program,`uIconDarken`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uHoverOwner=e.getUniformLocation(this.program,`uHoverOwner`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),0),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),e.uniform1f(this.uGhostAlpha,1),e.uniform3f(this.uOutlineColor,0,0,0),e.uniform1i(this.uHighlightMask,0),this.atlasTex=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.loadAtlas();let a=e.createBuffer();this.instanceBuf=new I(e,a,2048,K),this.ghostInstanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.ghostInstanceBuf),e.bufferData(e.ARRAY_BUFFER,q,e.DYNAMIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,q,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,q,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}async loadAtlas(){let e=document.createElement(`canvas`);e.width=W*G,e.height=cn*G;let t=e.getContext(`2d`);if(!t)throw Error(`Failed to create the structure icon atlas canvas`);await Promise.all(u.map(async(e,n)=>{let r=new Image;r.src=l(e),await r.decode();let i=n%W*G,a=Math.floor(n/W)*G;t.drawImage(r,i+4,a+4,G-8,G-8)}));let n=this.gl;n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.atlasTex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR)}setLocalPlayer(e){this.localPlayerID=e}setHighlightOwner(e){this.hoverOwner=e}updateStructures(e){let t=0;for(let n of e.values()){if(!n.isActive)continue;let e=this.typeToAtlasCol.get(n.unitType);if(e===void 0)continue;this.instanceBuf.ensureCapacity(t+1);let r=t*K,i=n.pos%this.mapW,a=(n.pos-i)/this.mapW;this.instanceBuf.float32[r+0]=i,this.instanceBuf.float32[r+1]=a,this.instanceBuf.float32[r+2]=n.ownerID,this.instanceBuf.float32[r+3]=+!!n.underConstruction,this.instanceBuf.float32[r+4]=e,this.instanceBuf.float32[r+5]=n.markedForDeletion===!1?0:1,t++}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*K)}}updateGhostPreview(e){this.ghost=e}setAltView(e){this.altView=e}setHighlightTypes(e){let t=0;if(e)for(let n of e){let e=this.typeToAtlasCol.get(n);e!==void 0&&(t|=1<<e)}this.highlightMask=t}setAffiliationTex(e){this.affiliationTex=e}draw(e,t){let n=this.ghost!==null&&this.typeToAtlasCol.has(this.ghost.ghostType);if(this.instanceCount===0&&!n)return;let r=this.gl;r.useProgram(this.program);let i=this.settings.structure;r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1f(this.uLocalPlayerID,this.localPlayerID),r.uniform1f(this.uZoom,t),r.uniform1f(this.uIconSize,i.iconSize),r.uniform1f(this.uDotsThreshold,i.dotsZoomThreshold),r.uniform1f(this.uDotScale,i.dotScale),r.uniform1f(this.uScaleFactor,i.iconScaleFactorZoomedOut),r.uniform1f(this.uIconGrowZoom,i.iconGrowZoom);let a=new Float32Array(U.length),o=new Float32Array(U.length);for(let e=0;e<U.length;e++){let t=i.shapes[U[e]];a[e]=t?.scale??1,o[e]=t?.iconFill??.6}if(r.uniform1fv(this.uShapeScales,a),r.uniform1fv(this.uIconFills,o),r.uniform1i(this.uAltView,this.altView&&this.settings.altView.recolorStructures?1:0),r.uniform1i(this.uHighlightMask,this.highlightMask),r.uniform1f(this.uHighlightOutlineW,i.highlightOutlineWidth),r.uniform1f(this.uHighlightDimAlpha,i.highlightDimAlpha),r.uniform1f(this.uFillDarken,i.fillDarken),r.uniform1f(this.uBorderDarken,i.borderDarken),r.uniform1f(this.uIconAlpha,i.iconAlpha),r.uniform3f(this.uIconColor,i.iconR,i.iconG,i.iconB),r.uniform1f(this.uIconDarken,i.iconDarken),r.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),r.uniform1f(this.uHoverOwner,this.hoverOwner),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.paletteTex),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,this.atlasTex),this.affiliationTex&&(r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.affiliationTex)),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,this.effectTex),r.bindVertexArray(this.vao),this.instanceCount>0&&(r.uniform1f(this.uGhostAlpha,1),r.uniform3f(this.uOutlineColor,0,0,0),r.drawArraysInstanced(r.TRIANGLES,0,6,this.instanceCount)),n){let e=this.ghost,t=this.typeToAtlasCol.get(e.ghostType);if(r.bindBuffer(r.ARRAY_BUFFER,this.ghostInstanceBuf),r.vertexAttribPointer(1,4,r.FLOAT,!1,q,0),r.vertexAttribPointer(2,2,r.FLOAT,!1,q,16),e.canUpgrade&&e.upgradeTargetTile!==null){let n=e.upgradeTargetTile%this.mapW,i=(e.upgradeTargetTile-n)/this.mapW;this.ghostBuf[0]=n,this.ghostBuf[1]=i,this.ghostBuf[2]=e.ownerID,this.ghostBuf[3]=0,this.ghostBuf[4]=t,this.ghostBuf[5]=0,r.bufferSubData(r.ARRAY_BUFFER,0,this.ghostBuf),r.uniform1f(this.uGhostAlpha,.6),r.uniform3f(this.uOutlineColor,0,.8,0),r.drawArraysInstanced(r.TRIANGLES,0,6,1)}this.ghostBuf[0]=e.tileX,this.ghostBuf[1]=e.tileY,this.ghostBuf[2]=e.ownerID,this.ghostBuf[3]=0,this.ghostBuf[4]=t,this.ghostBuf[5]=0,r.bufferSubData(r.ARRAY_BUFFER,0,this.ghostBuf),r.uniform1f(this.uGhostAlpha,.5),e.canUpgrade?r.uniform3f(this.uOutlineColor,0,.8,0):e.canBuild?r.uniform3f(this.uOutlineColor,0,0,0):r.uniform3f(this.uOutlineColor,.8,.2,.2),r.drawArraysInstanced(r.TRIANGLES,0,6,1),r.bindBuffer(r.ARRAY_BUFFER,this.instanceBuf.buffer),r.vertexAttribPointer(1,4,r.FLOAT,!1,q,0),r.vertexAttribPointer(2,2,r.FLOAT,!1,q,16)}}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),this.ghostInstanceBuf&&e.deleteBuffer(this.ghostInstanceBuf),e.deleteVertexArray(this.vao),e.deleteTexture(this.atlasTex)}},un=`#version 300 es
precision highp float;

uniform sampler2D uTerrain;

in vec2 vUV;
out vec4 fragColor;

void main() {
  fragColor = texture(uTerrain, vUV);
}
`,dn=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vUV;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // aPos ranges [0, mapW] × [0, mapH] — normalize to [0,1] UV
  // (mapSize is baked into the quad vertices, so we pass it as a uniform)
  vUV = aPos / vec2(float(MAP_W), float(MAP_H));
}
`,fn=class{constructor(e,t,n,r,i,a){this.gl=e,this.terrainSource=t,this.rgbaScratch=new Uint8Array,this.mapW=r,this.mapH=i,this.terrainColors=a,this.program=O(e,A(dn,{MAP_W:r,MAP_H:i}),un,`TerrainPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.tex=k(e,{width:r,height:i,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:je(n,r,i,a),filter:e.NEAREST}),this.vao=j(e,r,i)}setTerrainColors(e){this.terrainColors=e;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.tex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RGBA,t.UNSIGNED_BYTE,je(this.terrainSource(),this.mapW,this.mapH,e))}applyTerrainRects(e,t){if(e.length===0)return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.tex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e){let e=i.w*i.h;this.rgbaScratch.length<e*4&&(this.rgbaScratch=new Uint8Array(e*4));for(let n=0;n<e;n++)Ae(t[r+n],this.rgbaScratch,n*4,this.terrainColors);n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RGBA,n.UNSIGNED_BYTE,this.rgbaScratch,0),r+=e}}draw(e){let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tex),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.tex)}},pn=`#version 300 es
precision highp float;
precision highp usampler2D;
precision highp sampler2DArray;

uniform usampler2D uTileTex;      // R16UI — tile state per cell
uniform sampler2D  uPalette;      // RGBA32F — player colors
uniform sampler2D  uPatternMeta;  // RGBA32F — 1D buffer, 1 px per owner. R=hasPattern, G=width, B=height, A=scale
uniform usampler2D uPatternData;  // R8UI    — 2D buffer, row per owner, bytes for bitmask
uniform sampler2DArray uSkinAtlas; // RGBA8 — per-skin PNG layer, tiled via REPEAT wrap
uniform usampler2D uSkinLayer;    // R8UI — 1D buffer, 1 px per owner. 0=no skin, otherwise layer+1
uniform usampler2D uSkinAnchor;   // RG16UI — 1D buffer, anchor tile (cx, cy) per owner. (0,0) = world origin
uniform int uShowPatterns;
uniform int uIsTeamMode;          // 1 = teams (tint skin by team color), 0 = FFA (raw skin colors)
const float SKIN_DIM = 1024.0;    // atlas cell size in tiles — must match SkinAtlasArray.SKIN_DIM

uniform vec2 uMapSize;
uniform int uAltView;
uniform float uStaleNukeBase;
uniform float uStaleNukeVariation;
uniform float uStaleNukeAlpha;
uniform vec3 uStaleNukeColor;
uniform uint uHighlightOwner;      // 0 = no highlight; otherwise smallID of hovered owner
uniform float uHighlightBrighten;  // hover contrast boost strength; 0 = disabled
uniform sampler2D uDefenseCoverageTex; // R8 — 1.0 = tile defended by same-owner post
uniform float uDefenseDarken;      // multiplier applied to fill on defended tiles
uniform sampler2D uBorderTex;      // RGBA8 — border flags; R > 0.25 = border tile
uniform float uSaturation;         // 1 = full color, 0 = grayscale
uniform float uTerritoryAlpha;     // absolute fill opacity; 1 = fully opaque
uniform sampler2D uAffiliation;    // RGBA8 — alt-view relation colors (row 0)
uniform float uAltFillAlpha;       // alt-view translucent fill opacity

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);
  bool fallout = (raw & (1u << FALLOUT_BIT)) != 0u;

  if (owner == 0u && !fallout) discard;

  // --- Stale-nuke ground (any fallout tile, owned or not) ---
  // Renders for owned tiles too so the player's territory color can't bleed
  // through dim/transparent spots in the fallout bloom above.
  if (fallout) {
    float h = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
    float noise = uStaleNukeBase + h * uStaleNukeVariation;
    fragColor = vec4(uStaleNukeColor + vec3(noise), uStaleNukeAlpha);
    return;
  }

  // Alt-view: translucent fill in the owner's relation color (matches the
  // border color BorderStampPass draws in alt-view).
  if (uAltView != 0) {
    vec3 rel = texelFetch(uAffiliation, ivec2(int(owner), 0), 0).rgb;
    fragColor = vec4(rel, uAltFillAlpha);
    return;
  }

  // --- Territory fill (owned, not fallout) ---
  float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
  vec4 color = texture(uPalette, vec2(u, 0.25));

  // uShowPatterns gates both skins and patterns — they're the same
  // "decorate the territory fill" feature from the user's perspective.
  uint skinLayerPlus1 =
    uShowPatterns == 1
      ? texelFetch(uSkinLayer, ivec2(int(owner), 0), 0).r
      : 0u;
  if (skinLayerPlus1 > 0u) {
    // Skin overrides pattern entirely (mutually exclusive). The image is a
    // single stamp centered at the player's spawn tile — UVs outside [0,1]
    // are treated as transparent so tiles beyond the image bounds fall back
    // to the regular palette color. (0,0) anchor sentinel = world origin.
    uvec2 anchor = texelFetch(uSkinAnchor, ivec2(int(owner), 0), 0).rg;
    vec2 anchorOffset = (anchor == uvec2(0u)) ? vec2(0.0) : vec2(anchor);

    vec2 skinUV = (vec2(tc) - anchorOffset) / vec2(SKIN_DIM) + vec2(0.5);
    vec4 skin = texture(uSkinAtlas, vec3(skinUV, float(skinLayerPlus1) - 1.0));
    bool inBounds =
      skinUV.x >= 0.0 && skinUV.x <= 1.0 &&
      skinUV.y >= 0.0 && skinUV.y <= 1.0;
    float skinAlpha = inBounds ? skin.a : 0.0;
    // Transparent (or out-of-bounds) pixels fall through to the player color;
    // opaque pixels show the skin (tinted by team color in team games).
    vec3 skinColor = (uIsTeamMode == 1) ? color.rgb * skin.rgb : skin.rgb;
    color.rgb = mix(color.rgb, skinColor, skinAlpha);
  } else if (uShowPatterns == 1) {
    vec4 meta = texelFetch(uPatternMeta, ivec2(int(owner), 0), 0);
    if (meta.r > 0.0) {
      int pWidth = int(meta.g);
      int pHeight = int(meta.b);
      int pScale = int(meta.a);

      int px = tc.x >> pScale;
      int py = tc.y >> pScale;
      int mx = ((px % pWidth) + pWidth) % pWidth;
      int my = ((py % pHeight) + pHeight) % pHeight;
      int bitIndex = my * pWidth + mx;
      int byteIndex = bitIndex >> 3;

      uint patternByte = texelFetch(uPatternData, ivec2(byteIndex, int(owner)), 0).r;
      bool isPrimary = (patternByte & (1u << uint(bitIndex & 7))) == 0u;

      if (!isPrimary) {
        color = texture(uPalette, vec2(u, 0.75));
      }
    }
  }

  // Hover highlight: boost contrast on the hovered player's tiles, pushing
  // channels away from mid-gray. uHighlightBrighten is the strength; 0 disables.
  if (uHighlightOwner != 0u && owner == uHighlightOwner && uHighlightBrighten > 0.0) {
    float contrast = 1.0 + uHighlightBrighten;
    color.rgb = clamp((color.rgb - 0.5) * contrast + 0.5, 0.0, 1.0);
  }

  // Defense bonus: darken the fill on interior tiles defended by a same-owner
  // post. Border tiles are skipped — they get the checkerboard overlay from
  // BorderStampPass instead. Coverage is tested first so the (rarer) defended
  // tiles are the only ones that pay for the extra border fetch (&& short-
  // circuits in GLSL ES 3.00; texelFetch is derivative-free so this is safe).
  if (texelFetch(uDefenseCoverageTex, tc, 0).r > 0.5 &&
      texelFetch(uBorderTex, tc, 0).r <= 0.25) {
    color.rgb *= uDefenseDarken;
  }

  // Adjust how saturated the fill is by blending toward its luminance.
  if (uSaturation != 1.0) {
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    color.rgb = mix(vec3(luma), color.rgb, uSaturation);
  }

  color.a = uTerritoryAlpha;

  fragColor = color;
}
`,mn=`#version 300 es
precision highp float;
precision highp int;

flat in uint vState;

// R16UI color attachment — integer output type required.
layout(location = 0) out uvec4 fragColor;

void main() {
  fragColor = uvec4(vState, 0u, 0u, 0u);
}
`,hn=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 aPos;    // tile coord (integer in [0, mapW) × [0, mapH))
layout(location = 1) in float aState; // R16UI state value (passed as float, fits in 16 bits exactly)

uniform vec2 uMapSize;

flat out uint vState;

void main() {
  // Position the point at the center of the target pixel so a 1×1 point
  // rasterizes into exactly that texel.
  vec2 ndc = ((aPos + 0.5) / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
  vState = uint(aState);
}
`,J=3,gn=4096,_n=class{constructor(e,t,n,r){this.patchCount=0,this.patchCapacity=gn,this.gpuCapacityBytes=0,this.gl=e,this.mapW=t,this.mapH=n,this.program=O(e,hn,mn,`TileScatterPass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vbo=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vbo);let i=J*4;e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,i,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,1,e.FLOAT,!1,i,8),e.bindVertexArray(null),this.patchData=new Float32Array(gn*J)}push(e,t,n){this.patchCount>=this.patchCapacity&&this.grow();let r=this.patchCount*J;this.patchData[r]=e,this.patchData[r+1]=t,this.patchData[r+2]=n,this.patchCount++}get count(){return this.patchCount}clear(){this.patchCount=0}flush(){if(this.patchCount===0)return;let e=this.gl,t=this.patchCount*J,n=t*4,r=this.patchData.subarray(0,t);e.bindBuffer(e.ARRAY_BUFFER,this.vbo),n>this.gpuCapacityBytes?(e.bufferData(e.ARRAY_BUFFER,r,e.STREAM_DRAW),this.gpuCapacityBytes=n):e.bufferSubData(e.ARRAY_BUFFER,0,r),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.bindVertexArray(this.vao),e.drawArrays(e.POINTS,0,this.patchCount),e.bindFramebuffer(e.FRAMEBUFFER,null),this.patchCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.vbo),e.deleteVertexArray(this.vao)}grow(){let e=this.patchCapacity*2,t=new Float32Array(e*J);t.set(this.patchData),this.patchData=t,this.patchCapacity=e}},vn=class{constructor(e,t,n,r,i,a,o,s,c,l,u){this.highlightOwner=0,this.isTeamMode=!1,this.defenseCoverageTex=null,this.borderTex=null,this.affiliationTex=null,this.altView=!1,this.tilesDirty=!1,this.falloutTouched=!1,this.fullUploadPending=!1,this.borderPatchConsumer=null,this.dripBuckets=[],this.currentBucket=0,this.gl=e,this.settings=u,this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.patternMetaTex=a,this.patternDataTex=o,this.skinAtlasTex=s,this.skinLayerTex=c,this.skinAnchorTex=l,this.cpuTileState=new Uint16Array(t*n),this.nBuckets=Math.max(1,u.tileDrip.bucketCount|0);for(let e=0;e<this.nBuckets;e++)this.dripBuckets.push([]);this.program=O(e,F,A(pn,{PALETTE_SIZE:E(),...P}),`TerritoryPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uStaleNukeBase=e.getUniformLocation(this.program,`uStaleNukeBase`),this.uStaleNukeVariation=e.getUniformLocation(this.program,`uStaleNukeVariation`),this.uStaleNukeAlpha=e.getUniformLocation(this.program,`uStaleNukeAlpha`),this.uStaleNukeColor=e.getUniformLocation(this.program,`uStaleNukeColor`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightBrighten=e.getUniformLocation(this.program,`uHighlightBrighten`),this.uShowPatterns=e.getUniformLocation(this.program,`uShowPatterns`),this.uIsTeamMode=e.getUniformLocation(this.program,`uIsTeamMode`),this.uDefenseDarken=e.getUniformLocation(this.program,`uDefenseDarken`),this.uSaturation=e.getUniformLocation(this.program,`uSaturation`),this.uTerritoryAlpha=e.getUniformLocation(this.program,`uTerritoryAlpha`),this.uAltFillAlpha=e.getUniformLocation(this.program,`uAltFillAlpha`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uPatternMeta`),2),e.uniform1i(e.getUniformLocation(this.program,`uPatternData`),3),e.uniform1i(e.getUniformLocation(this.program,`uSkinAtlas`),4),e.uniform1i(e.getUniformLocation(this.program,`uSkinLayer`),5),e.uniform1i(e.getUniformLocation(this.program,`uSkinAnchor`),6),e.uniform1i(e.getUniformLocation(this.program,`uDefenseCoverageTex`),7),e.uniform1i(e.getUniformLocation(this.program,`uBorderTex`),8),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),9),this.vao=j(e,t,n),this.scatter=new _n(e,t,n,r)}setLiveRef(e){this.cpuTileState.set(e),this.clearDripBuckets(),this.scatter.clear(),this.fullUploadPending=!0,this.tilesDirty=!0,this.falloutTouched=!0}setBorderPatchConsumer(e){this.borderPatchConsumer=e}applyLiveDelta(e,t){let n=this.nBuckets,r=this.dripBuckets;for(let i=0;i<t.length;i++){let a=t[i];r[(a*2654435761>>>0)%n].push(a,e[a])}}drainDripBucket(){let e=this.dripBuckets[this.currentBucket];if(e.length>0){let t=this.cpuTileState,n=this.mapW,r=this.fullUploadPending,i=this.borderPatchConsumer;for(let a=0;a<e.length;a+=2){let o=e[a],s=e[a+1],c=t[o];if((c^s)&8192&&(this.falloutTouched=!0),t[o]=s,!r){let e=o%n,t=(o-e)/n;this.scatter.push(e,t,s),i&&i(e,t,c&N,s&N)}}e.length=0,this.tilesDirty=!0}this.currentBucket=(this.currentBucket+1)%this.nBuckets}flushAllDripBuckets(){let e=!1,t=this.cpuTileState,n=this.mapW,r=this.fullUploadPending,i=this.borderPatchConsumer;for(let a=0;a<this.nBuckets;a++){let o=this.dripBuckets[a];if(o.length!==0){e=!0;for(let e=0;e<o.length;e+=2){let a=o[e],s=o[e+1],c=t[a];if((c^s)&8192&&(this.falloutTouched=!0),t[a]=s,!r){let e=a%n,t=(a-e)/n;this.scatter.push(e,t,s),i&&i(e,t,c&N,s&N)}}o.length=0}}e&&(this.tilesDirty=!0)}clearDripBuckets(){for(let e=0;e<this.nBuckets;e++)this.dripBuckets[e].length=0;this.currentBucket=0}consumeFalloutTouched(){let e=this.falloutTouched;return this.falloutTouched=!1,e}flushTileTexture(){if(!this.tilesDirty)return`none`;let e=this.gl;return this.fullUploadPending?(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.mapW,this.mapH,e.RED_INTEGER,e.UNSIGNED_SHORT,this.cpuTileState),this.scatter.clear(),this.fullUploadPending=!1,this.tilesDirty=!1,`full`):this.scatter.count>0?(this.scatter.flush(),this.tilesDirty=!1,`scatter`):(this.tilesDirty=!1,`none`)}setAltView(e){this.altView=e}setSkinAtlas(e){this.skinAtlasTex=e}setTeamMode(e){this.isTeamMode=e}setHighlightOwner(e){this.highlightOwner=e}setDefenseCoverageTex(e){this.defenseCoverageTex=e}setBorderTex(e){this.borderTex=e}setAffiliationTex(e){this.affiliationTex=e}draw(e){this.flushTileTexture();let t=this.gl,n=this.settings.mapOverlay;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1i(this.uAltView,+!!this.altView),t.uniform1f(this.uStaleNukeBase,n.staleNukeBase),t.uniform1f(this.uStaleNukeVariation,n.staleNukeVariation),t.uniform1f(this.uStaleNukeAlpha,n.staleNukeAlpha),t.uniform3f(this.uStaleNukeColor,n.staleNukeR,n.staleNukeG,n.staleNukeB),t.uniform1ui(this.uHighlightOwner,this.highlightOwner),t.uniform1f(this.uHighlightBrighten,n.highlightFillBrighten),t.uniform1i(this.uShowPatterns,+!!this.settings.passEnabled.territoryPatterns),t.uniform1i(this.uIsTeamMode,+!!this.isTeamMode),t.uniform1f(this.uDefenseDarken,n.territoryDefenseDarken),t.uniform1f(this.uSaturation,n.territorySaturation),t.uniform1f(this.uTerritoryAlpha,n.territoryAlpha),t.uniform1f(this.uAltFillAlpha,this.settings.altView.fillAlpha),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.patternMetaTex),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.patternDataTex),t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D_ARRAY,this.skinAtlasTex),t.activeTexture(t.TEXTURE5),t.bindTexture(t.TEXTURE_2D,this.skinLayerTex),t.activeTexture(t.TEXTURE6),t.bindTexture(t.TEXTURE_2D,this.skinAnchorTex),this.defenseCoverageTex&&(t.activeTexture(t.TEXTURE7),t.bindTexture(t.TEXTURE_2D,this.defenseCoverageTex)),this.borderTex&&(t.activeTexture(t.TEXTURE8),t.bindTexture(t.TEXTURE_2D,this.borderTex)),this.affiliationTex&&(t.activeTexture(t.TEXTURE9),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao),this.scatter.dispose()}},yn=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTrailTex;     // R16UI — trail texel: owner smallID (bits 0-11)
                                  //   + nuke bit (bit 12); 0 = no trail
uniform sampler2D  uPalette;      // RGBA32F — player colors
uniform sampler2D  uAffiliation;  // RGBA8 — affiliation colors (row 0 = border, row 1 = unit)
uniform sampler2D  uEffect;       // RGBA32F — trail effect, keyed by ownerID. Stacked blocks
                                  //   of MAX_TRAIL_COLORS rows: block 0 = transportShipTrail,
                                  //   block 1 = nukeTrail. Within a block (rowBase = block start):
                                  //   row r = color r's rgb; spare alphas hold scalars:
                                  //   row 0.a = color count (0 = no effect → territory color),
                                  //   row 1.a = styleId (0 = gradient, 1 = transition, 2 = spiral),
                                  //   row 2.a = scalar0 (gradient colorSize / transition freq),
                                  //   row 3.a = scalar1 (gradient movementSpeed)
uniform vec2 uMapSize;
uniform float uTrailAlpha;
uniform float uTime;              // seconds, for animated effect styles
uniform int uAltView;

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
    discard;

  uint trailVal = texelFetch(uTrailTex, tc, 0).r;
  uint owner = trailVal & 0xFFFu;       // bits 0-11 = owner smallID
  if (owner == 0u) discard;
  uint isNuke = (trailVal >> 12) & 1u;  // bit 12 = nuke trail

  vec3 color;
  if (uAltView != 0) {
    // Alt view recolors everything by affiliation — effects stay off so the
    // strategic overlay reads consistently.
    color = texelFetch(uAffiliation, ivec2(int(owner), 1), 0).rgb;
  } else {
    int o = int(owner);
    // Boat trails read block 0; nuke trails read block 1 (rows offset by
    // MAX_TRAIL_COLORS). The effect attributes are otherwise identical.
    int rowBase = isNuke == 1u ? MAX_TRAIL_COLORS : 0;
    int count = int(texelFetch(uEffect, ivec2(o, rowBase), 0).a + 0.5);
    if (count <= 0) {
      // No effect — fall back to the player's territory color.
      float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
      color = texture(uPalette, vec2(u, 0.25)).rgb;
    } else if (count == 1) {
      // Single color — flat trail.
      color = texelFetch(uEffect, ivec2(o, rowBase), 0).rgb;
    } else if (int(texelFetch(uEffect, ivec2(o, rowBase + 1), 0).a + 0.5) == 2) {
      // spiral — the vortex itself renders as ribbon geometry above this
      // pass (SpiralRibbonPass); the stamped centerline underneath draws
      // flat in the first color, as the missile's spine.
      color = texelFetch(uEffect, ivec2(o, rowBase), 0).rgb;
    } else if (int(texelFetch(uEffect, ivec2(o, rowBase + 1), 0).a + 0.5) == 1) {
      // transition — the whole trail is one color at a time, cross-fading
      // through the list over time. frequency = color changes per second.
      float frequency = texelFetch(uEffect, ivec2(o, rowBase + 2), 0).a;
      float t = uTime * frequency;
      int i = int(t) % count;
      int j = (i + 1) % count;
      vec3 a = texelFetch(uEffect, ivec2(o, rowBase + i), 0).rgb;
      vec3 b = texelFetch(uEffect, ivec2(o, rowBase + j), 0).rgb;
      color = mix(a, b, fract(t));
    } else {
      // gradient — cyclic gradient banded across the map (world-space diagonal),
      // scrolling over time so a moving trail shifts hue along it. colorSize
      // = band width in tiles; movementSpeed = tiles/sec the bands travel.
      float colorSize = max(texelFetch(uEffect, ivec2(o, rowBase + 2), 0).a, 0.001);
      float movementSpeed = texelFetch(uEffect, ivec2(o, rowBase + 3), 0).a;
      float cycle = colorSize * float(count);
      float phase =
        fract((vWorldPos.x + vWorldPos.y - uTime * movementSpeed) / cycle);
      float f = phase * float(count);
      int i = int(f) % count;
      int j = (i + 1) % count;
      vec3 a = texelFetch(uEffect, ivec2(o, rowBase + i), 0).rgb;
      vec3 b = texelFetch(uEffect, ivec2(o, rowBase + j), 0).rgb;
      color = mix(a, b, fract(f));
    }
  }
  fragColor = vec4(color, uTrailAlpha);
}
`,bn=class{constructor(e,t,n,r,i,a,o){this.affiliationTex=null,this.altView=!1,this.startTime=performance.now(),this.trailsDirty=!1,this.liveTrailRef=null,this.dirtyRowMin=1/0,this.dirtyRowMax=-1,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.trailTex=r,this.paletteTex=i,this.effectTex=a,this.program=O(e,F,A(yn,{PALETTE_SIZE:E(),MAX_TRAIL_COLORS:8,...P}),`TrailPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uTrailAlpha=e.getUniformLocation(this.program,`uTrailAlpha`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTrailTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),this.vao=j(e,t,n)}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setLiveRef(e){this.liveTrailRef=e,this.trailsDirty=!0}applyLiveDelta(e,t,n){this.liveTrailRef=e,n>=0&&(this.trailsDirty&&this.dirtyRowMax<0||(this.dirtyRowMin=Math.min(this.dirtyRowMin,t),this.dirtyRowMax=Math.max(this.dirtyRowMax,n))),this.trailsDirty=!0}flushTexture(){if(!this.trailsDirty)return;let e=this.liveTrailRef;if(e===null)return;let t=this.gl;if(t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.trailTex),this.dirtyRowMax>=0){let n=this.dirtyRowMin,r=this.dirtyRowMax-n+1,i=n*this.mapW;t.texSubImage2D(t.TEXTURE_2D,0,0,n,this.mapW,r,t.RED_INTEGER,t.UNSIGNED_SHORT,e.subarray(i,i+r*this.mapW))}else t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RED_INTEGER,t.UNSIGNED_SHORT,e);this.dirtyRowMin=1/0,this.dirtyRowMax=-1,this.trailsDirty=!1}draw(e){this.flushTexture();let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uTrailAlpha,this.settings.mapOverlay.trailAlpha),t.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),t.uniform1i(this.uAltView,+!!this.altView),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.trailTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.effectTex),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},xn=`#version 300 es
precision highp float;

uniform sampler2D uPalette;
uniform sampler2D uAtlas;
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — row 1 = unit affiliation
uniform sampler2D uEffect;        // RGBA32F — shared effect palette, keyed by
                                  //   ownerID. The warship block starts at row
                                  //   WARSHIP_EFFECT_ROW_BASE and the train
                                  //   block at TRAIN_EFFECT_ROW_BASE; same
                                  //   layout as trail/structure.frag.glsl (row r =
                                  //   color r's rgb; row 0.a = count,
                                  //   1.a = styleId, 2.a = scalar0,
                                  //   3.a = scalar1)
uniform float uTime;              // seconds, for animated effect styles
uniform float uTick;
uniform float uFlickerSpeed;
uniform vec3  uAngryColor;
uniform int   uAltView;
uniform vec3  uSelfColor;         // affiliation self/ally colors (alt-view trade ships)
uniform vec3  uAllyColor;
uniform vec3  uHBombGlowColor;
uniform float uHBombGlowStrength;
uniform float uHBombGlowInner;
uniform float uUntargetableAlpha;

in vec2  vQuadPos;
in vec2  vCellUV;
in vec2  vWorldPos;
flat in float vAtlasCol;
flat in float vOwnerID;
flat in float vFlags;
flat in float vHash;
flat in float vGlow;

out vec4 fragColor;

// Flag constants — must match CPU-side FLAG_* values
const float FLAG_FLICKER        = 1.0;
const float FLAG_ANGRY          = 2.0;
const float FLAG_TRADE_FRIENDLY = 3.0;
const float FLAG_RETREATING     = 4.0;
const float FLAG_FLICKER_UNTARGETABLE = 5.0; // nuke out of SAM range — dimmed
const float FLAG_TRADE_SELF     = 6.0;
const float FLAG_SPEEDBOAT      = 7.0;

// Flicker hot colors: red → orange → yellow → white
const vec3 FLICKER_COLORS[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),   // red
  vec3(1.0, 0.5, 0.0),   // orange
  vec3(1.0, 1.0, 0.0),   // yellow
  vec3(1.0, 1.0, 1.0)    // white
);

// The owner's sprite cosmetic color, if equipped, from the effect-palette
// block starting at row rowBase (the warship or train block). Returns false
// when the owner has no effect in that block (count 0).
//
// \`coord\` positions the gradient: with iconSpace the caller passes the sprite
// diagonal in 0..1 (the palette spans the sprite once, sliding one cycle every
// colorSize · count / movementSpeed seconds — structure.frag.glsl semantics);
// otherwise it passes the world diagonal x + y (colorSize = band width in
// tiles, movementSpeed = tiles/sec — trail.frag.glsl semantics).
bool spriteEffectColor(int rowBase, int owner, float coord, bool iconSpace, out vec3 color) {
  int count = int(texelFetch(uEffect, ivec2(owner, rowBase), 0).a + 0.5);
  if (count <= 0) return false;
  if (count == 1) {
    // Single color — flat recolor.
    color = texelFetch(uEffect, ivec2(owner, rowBase), 0).rgb;
  } else if (int(texelFetch(uEffect, ivec2(owner, rowBase + 1), 0).a + 0.5) == 1) {
    // transition — one color at a time, cross-fading through the list.
    // frequency = color changes per second.
    float frequency = texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a;
    float t = uTime * frequency;
    int i = int(t) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(t));
  } else {
    // gradient — cyclic palette along \`coord\` (see above), scrolling over
    // time.
    float colorSize = max(texelFetch(uEffect, ivec2(owner, rowBase + 2), 0).a, 0.001);
    float movementSpeed = texelFetch(uEffect, ivec2(owner, rowBase + 3), 0).a;
    float cycle = colorSize * float(count);
    float c = iconSpace ? coord : coord / cycle;
    float phase = fract(c - uTime * movementSpeed / cycle);
    float f = phase * float(count);
    int i = int(f) % count;
    int j = (i + 1) % count;
    vec3 a = texelFetch(uEffect, ivec2(owner, rowBase + i), 0).rgb;
    vec3 b = texelFetch(uEffect, ivec2(owner, rowBase + j), 0).rgb;
    color = mix(a, b, fract(f));
  }
  return true;
}

void main() {
  // Untargetable nukes render translucent so players know SAMs can't hit them
  float alphaMul = abs(vFlags - FLAG_FLICKER_UNTARGETABLE) < 0.1
    ? uUntargetableAlpha
    : 1.0;

  // The sprite lives in the central cell-space region [0,1]; for the enlarged
  // hydrogen-bomb quad, anything outside that range is glow-only margin.
  vec4 texel = vec4(0.0);
  bool inSprite = vCellUV.x >= 0.0 && vCellUV.x <= 1.0 &&
                  vCellUV.y >= 0.0 && vCellUV.y <= 1.0;
  if (inSprite) {
    if (abs(vFlags - FLAG_SPEEDBOAT) < 0.1) {
      vec2 pixel = floor(vCellUV * 13.0);
      bool hull =
        (pixel.y == 1.0 && pixel.x == 6.0) ||
        (pixel.y == 2.0 && pixel.x >= 5.0 && pixel.x <= 7.0) ||
        (pixel.y == 3.0 && pixel.x >= 4.0 && pixel.x <= 8.0) ||
        (pixel.y == 4.0 && pixel.x >= 3.0 && pixel.x <= 9.0) ||
        (pixel.y >= 5.0 && pixel.y <= 9.0 &&
          pixel.x >= 2.0 && pixel.x <= 10.0) ||
        (pixel.y == 10.0 && pixel.x >= 3.0 && pixel.x <= 9.0) ||
        (pixel.y == 11.0 && pixel.x >= 4.0 && pixel.x <= 8.0) ||
        (pixel.y == 12.0 && pixel.x >= 5.0 && pixel.x <= 7.0);
      bool deck =
        (pixel.y == 3.0 && pixel.x == 6.0) ||
        (pixel.y == 4.0 && pixel.x >= 5.0 && pixel.x <= 7.0) ||
        ((pixel.y == 5.0 || pixel.y == 6.0) &&
          pixel.x >= 4.0 && pixel.x <= 8.0) ||
        ((pixel.y == 7.0 || pixel.y == 8.0) &&
          pixel.x >= 3.0 && pixel.x <= 9.0);
      bool cockpit =
        (pixel.y == 5.0 && pixel.x >= 5.0 && pixel.x <= 7.0) ||
        (pixel.y == 6.0 && pixel.x == 6.0);
      bool wake =
        (pixel.y == 9.0 && (pixel.x == 0.0 || pixel.x == 12.0)) ||
        (pixel.y == 10.0 && (pixel.x == 1.0 || pixel.x == 11.0)) ||
        (pixel.y == 11.0 && (pixel.x == 2.0 || pixel.x == 10.0)) ||
        (pixel.y == 12.0 && (pixel.x == 3.0 || pixel.x == 9.0));
      bool bowLight = pixel.y == 2.0 && pixel.x == 6.0;
      if (hull || deck || wake) {
        float gray = hull && !deck ? 0.275 : 0.706;
        if (cockpit) gray = 0.510;
        if (wake) gray = 0.392;
        if (bowLight) gray = 0.510;
        texel = vec4(gray, gray, gray, 1.0);
      }
    } else {
      vec2 atlasUV = vec2((vAtlasCol + vCellUV.x) / float(ATLAS_COLS), vCellUV.y);
      texel = texture(uAtlas, atlasUV);
    }
  }

  // Outside the sprite: render the steady soft glow under the hydrogen bomb,
  // otherwise discard. Glow is suppressed in alt (affiliation) view.
  if (texel.a < 0.01) {
    if (vGlow > 0.5 && uAltView == 0) {
      float d = length(vQuadPos - 0.5) * 2.0; // 0 at center → ~1 at quad edge
      float g = (1.0 - smoothstep(uHBombGlowInner, 1.0, d)) * uHBombGlowStrength;
      if (g > 0.001) {
        fragColor = vec4(uHBombGlowColor, g * alphaMul);
        return;
      }
    }
    discard;
  }

  float gray = texel.r;

  // Alt-view: solid affiliation color, no gray-replacement bands
  if (uAltView != 0) {
    // Trade ships: green if self is on either end, yellow if an ally is
    vec3 ac = abs(vFlags - FLAG_TRADE_SELF) < 0.1
      ? uSelfColor
      : abs(vFlags - FLAG_TRADE_FRIENDLY) < 0.1
        ? uAllyColor
        : texelFetch(uAffiliation, ivec2(int(vOwnerID), 1), 0).rgb;
    fragColor = vec4(ac, texel.a * alphaMul);
    return;
  }

  // Player color lookup from palette
  float u = (vOwnerID + 0.5) / float(PALETTE_SIZE);
  vec3 territoryColor = texture(uPalette, vec2(u, 0.25)).rgb;
  vec3 borderColor    = texture(uPalette, vec2(u, 0.75)).rgb;

  // warship cosmetic: recolor the warship's territory-color bands with the
  // owner's effect (raw catalog colors, like trails). The border band keeps
  // the player color so ownership stays readable, and combat signals win: the
  // angry (attacking) override below replaces this with red, and the retreat
  // blink still darkens the center band.
  if (abs(vAtlasCol - float(WARSHIP_COL)) < 0.1) {
    vec3 effectRGB;
    float dn = (vCellUV.x + vCellUV.y) * 0.5; // sprite diagonal, 0..1
    if (spriteEffectColor(WARSHIP_EFFECT_ROW_BASE, int(vOwnerID + 0.5), dn, true, effectRGB)) {
      territoryColor = effectRGB;
    }
  }

  // train cosmetic: the train sprites (engine, carriage, loaded carriage) are
  // the last three atlas columns. The engine is drawn entirely in the border
  // band and the carriages are a border-band frame around a territory-band
  // fill, so recolor both bands — the border band darkened — to keep that
  // engine/frame/fill structure while the whole train takes the effect.
  // The gradient is world-space (like trails and the railroad effect): the
  // 5×5 train sprites fill only the middle of the 13-tile unit cell, so an
  // icon-space gradient would show a sliver of the palette per car, whereas a
  // world-space one runs along the whole train.
  if (vAtlasCol > float(TRAIN_FIRST_COL) - 0.1) {
    vec3 effectRGB;
    float diag = vWorldPos.x + vWorldPos.y;
    if (spriteEffectColor(TRAIN_EFFECT_ROW_BASE, int(vOwnerID + 0.5), diag, false, effectRGB)) {
      territoryColor = effectRGB;
      borderColor = effectRGB * 0.6;
    }
  }

  // Flag states (uint8 passed as float via vertex attribute):
  //   0 = normal
  //   1 = flicker (nukes/warheads — cycling hot colors)
  //   2 = angry (warships attacking — outer ring (180 band) solid red)
  //   4 = retreating (warships fleeing to port — blinking black center)
  float retreatBlink = 0.0;
  if (abs(vFlags - FLAG_ANGRY) < 0.1) {
    // Angry: the outer ring (180) and center (100) go red via territoryColor
    territoryColor = uAngryColor;
  } else if (abs(vFlags - FLAG_RETREATING) < 0.1) {
    // Retreating: slowly blink the center (100 band) black so the ship reads as fleeing
    retreatBlink = step(0.5, fract(uTick * 0.07));
  } else if (abs(vFlags - FLAG_FLICKER) < 0.1 ||
             abs(vFlags - FLAG_FLICKER_UNTARGETABLE) < 0.1) {
    // Flicker: cycle through hot colors, offset by position hash
    float phase = fract(uTick * uFlickerSpeed + vHash);
    int idx = int(phase * 4.0) % 4;
    territoryColor = FLICKER_COLORS[idx];
    borderColor = FLICKER_COLORS[(idx + 2) % 4];
  }

  // Four-band gray replacement:
  //   180/255 ~ 0.706 -> territory color (light band)
  //   130/255 ~ 0.510 -> spawn/mid color (interpolated; used by missiles)
  //   100/255 ~ 0.392 -> center accent (warship center — tracks ring, blinks black)
  //   70/255  ~ 0.275 -> border color (dark band)
  vec3 spawnColor = mix(territoryColor, borderColor, 0.5);
  vec3 centerColor = mix(territoryColor, vec3(0.0), retreatBlink);

  vec3 color;
  if (gray > 0.6) {
    // Light band (180) -> territory color
    color = territoryColor;
  } else if (gray > 0.45) {
    // Mid band (130) -> spawn color
    color = spawnColor;
  } else if (gray > 0.34) {
    // Center accent band (100) -> center color
    color = centerColor;
  } else {
    // Dark band (70) -> border color
    color = borderColor;
  }

  fragColor = vec4(color, texel.a * alphaMul);
}
`,Sn=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance attributes
layout(location = 1) in vec3 aInstPos;   // x, y, ownerID
layout(location = 2) in vec3 aInstFlags; // atlasIdx, flags, flickerHash (uint8→float)

uniform mat3  uCamera;

uniform float uUnitSize;
uniform float uHBombGlowScale; // quad enlargement for the hydrogen bomb glow halo

out vec2  vQuadPos;     // quad coords [0,1] — drives the radial glow falloff
out vec2  vCellUV;      // sprite cell coords; the central 1/scale region is the sprite
out vec2  vWorldPos;    // world-space tile coords — drives the train effect's gradient
flat out float vAtlasCol;
flat out float vOwnerID;
flat out float vFlags;  // 0.0 = normal, 1.0 = flicker, 2.0 = angry
flat out float vHash;   // per-instance hash for flicker phase offset
flat out float vGlow;   // 1.0 if this instance is a hydrogen bomb (draw glow), else 0.0

void main() {
  float worldX = aInstPos.x;
  float worldY = aInstPos.y;
  vOwnerID = aInstPos.z;

  float atlasCol = aInstFlags.x;
  vFlags = aInstFlags.y;
  vAtlasCol = atlasCol;

  // Per-instance hash so each unit flickers independently. Computed CPU-side
  // from the tick position — hashing worldX/Y here would re-roll the phase
  // every frame for nukes whose position is smoothed per frame.
  vHash = aInstFlags.z * (1.0 / 255.0);

  // Hydrogen bombs render an enlarged quad so there's room for a glow halo
  // around the sprite. All other units keep scale 1 (no behavior change).
  float isHBomb = step(abs(atlasCol - float(HYDROGEN_BOMB_COL)), 0.5);
  vGlow = isHBomb;
  float scale = mix(1.0, uHBombGlowScale, isHBomb);

  // UNIT_SIZE is in world-space tiles — no zoom division needed.
  // Units scale with the map like territory tiles do.
  float halfSize = uUnitSize * 0.5 * scale;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * halfSize * 2.0;
  vWorldPos = worldPos;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vQuadPos = aPos;

  // Map the enlarged quad back to sprite cell space: the central 1/scale
  // portion is the sprite, anything outside [0,1] is glow-only margin.
  vCellUV = (aPos - 0.5) * scale + 0.5;
}
`,Cn=e(`atlases/unit-atlas.png`),Y=[_,re,v,y,x,S,C,w,T,`TrainEngine`,`TrainCarriage`,`TrainCarriageLoaded`],wn=Y.length,Tn=Y.indexOf(x),En=Y.indexOf(v),Dn=Y.indexOf(`TrainEngine`),X=4,Z=X*4,On=0,kn=1,An=2,jn=3,Mn=4,Nn=5,Pn=6,Fn=7,In=Y.indexOf(`TrainEngine`),Ln=Y.indexOf(`TrainCarriage`),Rn=Y.indexOf(`TrainCarriageLoaded`),zn=new Set([y,b,x,S,T,C,w]),Bn=new Set([y,b,x,S,C,w,T]),Vn=5;function Hn(e,t){let n=e*.1731+t*.3179;return(n-Math.floor(n))*255|0}function Un(e,t,n){let r=e.createVertexArray();return e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,t),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,n),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Z,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.UNSIGNED_BYTE,!1,Z,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null),r}var Wn=class{constructor(e,t,n,r,i,a){this.affiliationTex=null,this.altView=!1,this.groundCount=0,this.missileCount=0,this.smoothSegs=[],this.lastUnitsUpdateMs=0,this.frameTick=0,this.lastGameTick=-1,this.startTime=performance.now(),this.typeToAtlasCol=new Map,this.localPlayerID=0,this.friendlyOwners=new Set,this.structures=new Map,this.gl=e,this.settings=i,this.mapW=t.mapWidth,this.paletteTex=n,this.effectTex=r,this.tickIntervalMs=a.msPerTick();for(let e=0;e<t.unitTypes.length;e++){let n=Y.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.typeToAtlasCol.set(ie,Y.indexOf(_)),this.typeToAtlasCol.set(b,Y.indexOf(C)),this.program=O(e,A(Sn,{ATLAS_COLS:wn,HYDROGEN_BOMB_COL:Tn}),A(xn,{PALETTE_SIZE:E(),ATLAS_COLS:wn,WARSHIP_COL:En,WARSHIP_EFFECT_ROW_BASE:24,TRAIN_FIRST_COL:Dn,TRAIN_EFFECT_ROW_BASE:32}),`UnitPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTick=e.getUniformLocation(this.program,`uTick`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uUnitSize=e.getUniformLocation(this.program,`uUnitSize`),this.uFlickerSpeed=e.getUniformLocation(this.program,`uFlickerSpeed`),this.uAngryColor=e.getUniformLocation(this.program,`uAngryColor`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),this.uSelfColor=e.getUniformLocation(this.program,`uSelfColor`),this.uAllyColor=e.getUniformLocation(this.program,`uAllyColor`),this.uHBombGlowScale=e.getUniformLocation(this.program,`uHBombGlowScale`),this.uHBombGlowColor=e.getUniformLocation(this.program,`uHBombGlowColor`),this.uHBombGlowStrength=e.getUniformLocation(this.program,`uHBombGlowStrength`),this.uHBombGlowInner=e.getUniformLocation(this.program,`uHBombGlowInner`),this.uUntargetableAlpha=e.getUniformLocation(this.program,`uUntargetableAlpha`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),0),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),2),e.uniform1i(e.getUniformLocation(this.program,`uEffect`),3),this.atlasTex=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.loadAtlas(),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW);let o=e.createBuffer();this.groundBuf=new I(e,o,1024,X),this.groundVao=Un(e,this.quadBuf,o);let s=e.createBuffer();this.missileBuf=new I(e,s,512,X),this.missileVao=Un(e,this.quadBuf,s)}async loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.src=Cn,await e.decode();let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)}emitGround(e,t,n,r,i){this.groundBuf.ensureCapacity(this.groundCount+1);let a=this.groundCount*X;this.groundBuf.float32[a+0]=e,this.groundBuf.float32[a+1]=t,this.groundBuf.float32[a+2]=n;let o=this.groundCount*Z;this.groundBuf.uint8[o+12]=r,this.groundBuf.uint8[o+13]=i,this.groundBuf.uint8[o+14]=Hn(e,t),this.groundCount++}emitMissile(e,t,n,r,i){this.missileBuf.ensureCapacity(this.missileCount+1);let a=this.missileCount*X;this.missileBuf.float32[a+0]=e,this.missileBuf.float32[a+1]=t,this.missileBuf.float32[a+2]=n;let o=this.missileCount*Z;this.missileBuf.uint8[o+12]=r,this.missileBuf.uint8[o+13]=i,this.missileBuf.uint8[o+14]=Hn(e,t),this.missileCount++}setFrameTick(e){this.frameTick=e}updateUnits(e,t){t!==this.lastGameTick&&(this.lastGameTick=t,this.lastUnitsUpdateMs=performance.now()),this.groundCount=0,this.missileCount=0,this.smoothSegs.length=0;for(let t of e.values()){if(!t.isActive||t.waitTicks>0)continue;let e=this.typeToAtlasCol.get(t.unitType);if(e===void 0&&t.unitType===`Train`){let n=t.trainType;e=n===ee.Engine||n===ee.TailEngine?In:t.loaded?Rn:Ln}if(e===void 0)continue;let n=t.unitType===`Warship`&&t.retreating,r=t.unitType===`Warship`&&t.targetUnitId!==null,i=zn.has(t.unitType),a=On;if(t.unitType===`Trade Ship`&&t.targetUnitId!==null&&this.localPlayerID>0){let e=this.structures.get(t.targetUnitId);if(e){let n=e.ownerID;t.ownerID===this.localPlayerID||n===this.localPlayerID?a=Pn:(this.friendlyOwners.has(t.ownerID)||this.friendlyOwners.has(n))&&(a=jn)}}let o=On;a===On?n?o=Mn:r?o=An:t.unitType===`Speedboat`?o=Fn:i&&(o=t.targetable?kn:Nn):o=a;let s=Bn.has(t.unitType),c=t.pos%this.mapW,l=(t.pos-c)/this.mapW;if(s){if(Ce.has(t.unitType)&&t.lastPos!==t.pos){let e=t.lastPos%this.mapW,n=(t.lastPos-e)/this.mapW;this.smoothSegs.push(this.missileCount,e,n,c,l)}if(this.emitMissile(c,l,t.ownerID,e,o),t.unitType===`Shell`&&t.lastPos!==t.pos){let n=t.lastPos%this.mapW,r=(t.lastPos-n)/this.mapW;this.emitMissile(n,r,t.ownerID,e,o)}}else this.emitGround(c,l,t.ownerID,e,o)}let n=this.gl;this.groundCount>0&&(n.bindBuffer(n.ARRAY_BUFFER,this.groundBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.groundBuf.float32,0,this.groundCount*X)),this.missileCount>0&&(n.bindBuffer(n.ARRAY_BUFFER,this.missileBuf.buffer),n.bufferSubData(n.ARRAY_BUFFER,0,this.missileBuf.float32,0,this.missileCount*X))}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setLocalPlayer(e){this.localPlayerID=e}setAllies(e){this.friendlyOwners=e}setStructures(e){this.structures=e}bindProgram(e){let t=this.gl;t.useProgram(this.program);let n=this.settings.unit;t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uTick,this.frameTick),t.uniform1f(this.uTime,(performance.now()-this.startTime)/1e3),t.uniform1f(this.uUnitSize,n.unitSize),t.uniform1f(this.uFlickerSpeed,n.flickerSpeed),t.uniform3f(this.uAngryColor,n.angryR,n.angryG,n.angryB),t.uniform1i(this.uAltView,+!!this.altView);let r=this.settings.affiliation;t.uniform3f(this.uSelfColor,r.selfR,r.selfG,r.selfB),t.uniform3f(this.uAllyColor,r.allyR,r.allyG,r.allyB),t.uniform1f(this.uHBombGlowScale,n.hBombGlowScale),t.uniform3f(this.uHBombGlowColor,n.hBombGlowR,n.hBombGlowG,n.hBombGlowB),t.uniform1f(this.uHBombGlowStrength,n.hBombGlowStrength),t.uniform1f(this.uHBombGlowInner,n.hBombGlowInner),t.uniform1f(this.uUntargetableAlpha,n.untargetableAlpha),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.atlasTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.effectTex)}drawGround(e){if(this.groundCount===0)return;this.bindProgram(e);let t=this.gl;t.bindVertexArray(this.groundVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.groundCount)}drawMissiles(e){if(this.missileCount===0)return;this.applyMissileSmoothing(),this.bindProgram(e);let t=this.gl;t.bindVertexArray(this.missileVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.missileCount)}applyMissileSmoothing(){let e=this.smoothSegs;if(e.length===0)return;let t=Math.min(1,(performance.now()-this.lastUnitsUpdateMs)/this.tickIntervalMs),n=this.missileBuf.float32;for(let r=0;r<e.length;r+=Vn){let i=e[r]*X;n[i+0]=e[r+1]+(e[r+3]-e[r+1])*t,n[i+1]=e[r+2]+(e[r+4]-e[r+2])*t}let r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.missileBuf.buffer),r.bufferSubData(r.ARRAY_BUFFER,0,n,0,this.missileCount*X)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.groundBuf.dispose(),this.missileBuf.dispose(),e.deleteBuffer(this.quadBuf),e.deleteVertexArray(this.groundVao),e.deleteVertexArray(this.missileVao),e.deleteTexture(this.atlasTex)}};function Gn(e,t){if(t.name?.nameScaleFactor!==void 0&&(e.name.nameScaleFactor=t.name.nameScaleFactor),t.name?.cullThreshold!==void 0&&(e.name.cullThreshold=t.name.cullThreshold),t.name?.hoverFadeAlpha!==void 0&&(e.name.hoverFadeAlpha=t.name.hoverFadeAlpha),t.name?.hoverGlowWidth!==void 0&&(e.name.hoverGlowWidth=t.name.hoverGlowWidth),t.name?.hoverGlowAlpha!==void 0&&(e.name.hoverGlowAlpha=t.name.hoverGlowAlpha),t.cosmetics?.flagOpacity!==void 0&&(e.name.flagAlpha=t.cosmetics.flagOpacity),t.structure?.iconSize!==void 0&&(e.structure.iconSize=t.structure.iconSize),(t.structure?.classicIcons??!0)&&(e.structure.borderDarken=.7,e.structure.fillDarken=1,e.structure.iconDarken=.3,e.structure.iconAlpha=.9),t.structure?.classicNumbers!==void 0&&(e.structureLevel.classicFont=t.structure.classicNumbers),t.structure?.showDots===!1&&(e.structure.dotsZoomThreshold=0),t.mapOverlay?.navalHighlight!==void 0&&(e.mapOverlay.navalHighlight=t.mapOverlay.navalHighlight),t.mapOverlay?.highlightFillBrighten!==void 0&&(e.mapOverlay.highlightFillBrighten=t.mapOverlay.highlightFillBrighten),t.mapOverlay?.highlightBrighten!==void 0&&(e.mapOverlay.highlightBrighten=t.mapOverlay.highlightBrighten),t.mapOverlay?.highlightThicken!==void 0&&(e.mapOverlay.highlightThicken=t.mapOverlay.highlightThicken),t.mapOverlay?.territorySaturation!==void 0&&(e.mapOverlay.territorySaturation=t.mapOverlay.territorySaturation),t.mapOverlay?.territoryAlpha!==void 0&&(e.mapOverlay.territoryAlpha=t.mapOverlay.territoryAlpha),t.mapOverlay?.coordinateGridOpacity!==void 0&&(e.mapOverlay.coordinateGridOpacity=t.mapOverlay.coordinateGridOpacity),t.mapOverlay?.staleNukeColor!==void 0){let n=D(t.mapOverlay.staleNukeColor);n!==null&&(e.mapOverlay.staleNukeR=n[0]/255,e.mapOverlay.staleNukeG=n[1]/255,e.mapOverlay.staleNukeB=n[2]/255)}if(t.mapOverlay?.friendlyTintColor!==void 0&&Q(t.mapOverlay.friendlyTintColor,(t,n,r)=>{e.mapOverlay.friendlyTintR=t,e.mapOverlay.friendlyTintG=n,e.mapOverlay.friendlyTintB=r}),t.mapOverlay?.embargoTintColor!==void 0&&Q(t.mapOverlay.embargoTintColor,(t,n,r)=>{e.mapOverlay.embargoTintR=t,e.mapOverlay.embargoTintG=n,e.mapOverlay.embargoTintB=r}),t.mapOverlay?.friendlyTintRatio!==void 0&&(e.mapOverlay.friendlyTintRatio=t.mapOverlay.friendlyTintRatio),t.mapOverlay?.embargoTintRatio!==void 0&&(e.mapOverlay.embargoTintRatio=t.mapOverlay.embargoTintRatio),t.altView?.fillAlpha!==void 0&&(e.altView.fillAlpha=t.altView.fillAlpha),t.affiliation?.selfColor!==void 0&&Q(t.affiliation.selfColor,(t,n,r)=>{e.affiliation.selfR=t,e.affiliation.selfG=n,e.affiliation.selfB=r}),t.affiliation?.allyColor!==void 0&&Q(t.affiliation.allyColor,(t,n,r)=>{e.affiliation.allyR=t,e.affiliation.allyG=n,e.affiliation.allyB=r}),t.affiliation?.enemyColor!==void 0&&Q(t.affiliation.enemyColor,(t,n,r)=>{e.affiliation.enemyR=t,e.affiliation.enemyG=n,e.affiliation.enemyB=r}),t.railroad?.railMinZoom!==void 0&&(e.railroad.railMinZoom=t.railroad.railMinZoom),t.railroad?.railThickness!==void 0&&(e.railroad.railThickness=t.railroad.railThickness),t.smallPlayerGlow?.strength!==void 0&&(e.smallPlayerGlow.strength=t.smallPlayerGlow.strength),t.passEnabled?.fx!==void 0&&(e.passEnabled.fx=t.passEnabled.fx),t.passEnabled?.fallout!==void 0&&(e.passEnabled.falloutBloom=t.passEnabled.fallout,e.passEnabled.falloutLight=t.passEnabled.fallout),t.terrain?.backgroundColor!==void 0&&(e.terrain.backgroundColor=t.terrain.backgroundColor),t.terrain?.oceanColor!==void 0&&(e.terrain.oceanColor=t.terrain.oceanColor),t.terrain?.sandColor!==void 0&&(e.terrain.sandColor=t.terrain.sandColor),t.terrain?.plainsColor!==void 0&&(e.terrain.plainsColor=t.terrain.plainsColor),t.terrain?.highlandColor!==void 0&&(e.terrain.highlandColor=t.terrain.highlandColor),t.terrain?.mountainColor!==void 0&&(e.terrain.mountainColor=t.terrain.mountainColor),t.lighting?.ambient!==void 0&&(e.lighting.ambient=t.lighting.ambient,e.lighting.enabled=t.lighting.ambient<1),t.lighting?.falloffPower!==void 0&&(e.lighting.falloffPower=t.lighting.falloffPower),t.name?.darkNames!==void 0){let n=t.name.darkNames;e.name.fillUsePlayerColor=!n,e.name.outlineUsePlayerColor=n;let r=+!n;e.name.outlineR=r,e.name.outlineG=r,e.name.outlineB=r}t.palette!==void 0&&(e.theme=d(t.palette))}function Q(e,t){let n=D(e);n!==null&&t(n[0]/255,n[1]/255,n[2]/255)}var $=3;function Kn(e,t,n){let r=t%n-e%n,i=(t-t%n)/n-(e-e%n)/n;return r===0?0:+(i===0)}function qn(e,t,n,r){let i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=n%r,l=(n-c)/r,u=o-i,d=s-a,f=c-o,p=l-s;if(u===f&&d===p)return u===0?0:1;if(u===0&&f!==0||u!==0&&f===0){if(u===0&&f===1&&d===-1)return 5;if(u===0&&f===-1&&d===-1)return 4;if(u===0&&f===1&&d===1)return 3;if(u===0&&f===-1&&d===1||u===1&&f===0&&p===-1)return 2;if(u===-1&&f===0&&p===-1)return 3;if(u===1&&f===0&&p===1)return 4;if(u===-1&&f===0&&p===1)return 5}return 0}function Jn(e,t){if(e.length===0)return[];if(e.length===1)return[{ref:e[0],type:0}];let n=[];n.push({ref:e[0],type:Kn(e[0],e[1],t)});for(let r=1;r<e.length-1;r++)n.push({ref:e[r],type:qn(e[r-1],e[r],e[r+1],t)});let r=e.length-1;return n.push({ref:e[r],type:Kn(e[r],e[r-1],t)}),n}var Yn=class{constructor(e,t){this.anims=new Map,this.tileRefCount=new Map,this.railroadDirty=!1,this.revealedRailTiles=[],this.mapW=e,this.railroadState=new Uint8Array(e*t)}apply(e){let t=e.updates[f.RailroadConstructionEvent]??[];for(let e of t)this.addRailroad(e.id,e.tiles,!1);let n=e.updates[f.RailroadSnapEvent]??[];for(let e of n)this.removeRailroad(e.originalId),this.addRailroad(e.newId1,e.tiles1,!0),this.addRailroad(e.newId2,e.tiles2,!0);let r=e.updates[f.RailroadDestructionEvent]??[];for(let e of r)this.removeRailroad(e.id);this.tickAnimations()}get animating(){for(let e of this.anims.values())if(!e.complete)return!0;return!1}clearDirty(){this.railroadDirty=!1}getRailroadTileRefs(e){let t=[];for(let n of e){let e=this.anims.get(n);if(e)for(let n of e.tiles)t.push(n.ref)}return t}getRailroads(){let e=new Map;for(let[t,n]of this.anims)e.set(t,n.tiles.map(e=>e.ref));return e}reset(){this.anims.clear(),this.tileRefCount.clear(),this.railroadState.fill(0),this.railroadDirty=!1}addRailroad(e,t,n){let r=Jn(t,this.mapW),i={tiles:r,headIndex:n?r.length:0,tailIndex:n?0:r.length,complete:n};this.anims.set(e,i);for(let e of r)this.tileRefCount.set(e.ref,(this.tileRefCount.get(e.ref)??0)+1);if(n){for(let e of r)this.railroadState[e.ref]=e.type+1;this.railroadDirty=!0}}removeRailroad(e){let t=this.anims.get(e);if(t){for(let e of t.tiles){let t=(this.tileRefCount.get(e.ref)??1)-1;t<=0?(this.tileRefCount.delete(e.ref),this.railroadState[e.ref]=0):this.tileRefCount.set(e.ref,t)}this.anims.delete(e),this.railroadDirty=!0}}tickAnimations(){this.revealedRailTiles.length=0;for(let e of this.anims.values())if(!e.complete)if(e.tailIndex-e.headIndex<=2*$){for(let t=e.headIndex;t<e.tailIndex;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}e.headIndex=e.tailIndex,e.complete=!0,this.railroadDirty=!0}else{for(let t=e.headIndex;t<e.headIndex+$;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}for(let t=e.tailIndex-$;t<e.tailIndex;t++){let n=e.tiles[t];this.railroadState[n.ref]=n.type+1,this.revealedRailTiles.push(n.ref)}e.headIndex+=$,e.tailIndex-=$,e.headIndex>=e.tailIndex&&(e.complete=!0),this.railroadDirty=!0}}};export{b as $,Ze as A,Me as B,tt as C,ne as Ct,Je as D,h as Dt,nt as E,g as Et,Fe as F,Ee as G,Ne as H,Be as I,Ce as J,Te as K,Re as L,A as M,Xe as N,j as O,f as Ot,Ye as P,y as Q,ze as R,M as S,v as St,rt as T,ee as Tt,E as U,Pe as V,D as W,we as X,xe as Y,_e as Z,F as _,ie as _t,bn as a,x as at,P as b,_ as bt,ln as c,ge as ct,Gt as d,ve as dt,oe as et,Wt as f,se as ft,I as g,w as gt,ut as h,C as ht,Wn as i,ye as it,k as j,O as k,an as l,de as lt,Ct as m,ue as mt,Jn as n,ce as nt,vn as o,S as ot,Ft as p,he as pt,Se as q,Gn as r,pe as rt,fn as s,T as st,Yn as t,le as tt,Zt as u,fe as ut,lt as v,re as vt,et as w,te as wt,ct as x,me as xt,N as y,ae as yt,Ue as z};