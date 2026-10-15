const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./debug-H8INCJfb.js","./PlayerInfoOverlay-D38q6x3C.js","./decorate-CgSmyiMM.js","./vendor-DPAo4oW-.js","./rolldown-runtime-BpQH8Ho1.js","./CosmeticSchemas-DRLyea1I.js","./Platform-ChKbd54A.js","./index-DKgg39IM.js","./preload-helper-DqxmgrHA.js","./AssetUrls-DSHI1MKX.js","./CrazyGamesSDK-CbSm7Wb8.js","./DesktopShell-Cy7M529l.js","./index-DV9LZC5N.css","./colord-BshiezEt.js","./ThemeProvider-CyR01NIT.js","./RenderSettings-BXksGfUX.js","./render-settings-CNuf-48P.js","./purify.es-GTKMcGcf.js","./repeat-pW9_nObi.js","./RailroadCache-C43ReGV2.js","./BuildIcons-CDi3EHiD.js","./Format-Dhp90E0J.js","./Sounds-VbeXv_UQ.js"])))=>i.map(i=>d[i]);
import{$ as e,B as t,D as n,E as r,G as i,H as a,I as o,L as s,N as c,O as l,P as u,T as d,U as f,W as p,X as m,Y as h,Z as g,k as _,q as v,t as y,v as b}from"./Platform-ChKbd54A.js";import{t as x}from"./vendor-DPAo4oW-.js";import{t as S}from"./AssetUrls-DSHI1MKX.js";import{$ as C,D as w,Dt as T,F as E,I as ee,N as te,P as D,Q as O,R as ne,St as re,T as ie,Tt as ae,V as oe,Z as se,b as ce,c as le,ct as ue,dt as de,et as k,ht as fe,k as pe,lt as me,n as he,r as ge,rt as _e,st as A,t as j,tt as M,v as ve,vt as ye,z as N}from"./decorate-CgSmyiMM.js";import{_ as be,h as xe,y as Se}from"./CosmeticSchemas-DRLyea1I.js";import{a as Ce}from"./DesktopShell-Cy7M529l.js";import{t as P}from"./CrazyGamesSDK-CbSm7Wb8.js";import{t as we}from"./preload-helper-DqxmgrHA.js";import{$t as Te,Br as Ee,En as De,J as Oe,Lr as ke,Rn as Ae,Ut as je,Wt as Me,Y as Ne,_ as Pe,_r as Fe,cn as Ie,cr as Le,ct as Re,fr as ze,gr as Be,jr as Ve,kn as He,lt as Ue,m as We,p as Ge,q as Ke,sn as qe,sr as Je,st as Ye,un as Xe,vr as F}from"./index-DKgg39IM.js";import{n as I,t as L}from"./Format-Dhp90E0J.js";import{C as Ze,E as Qe,G as $e,Ot as R,S as et,T as tt,Tt as nt,X as rt,Y as it,r as at,t as ot,u as st,wt as ct,y as lt}from"./RailroadCache-C43ReGV2.js";import{$ as ut,$t as dt,A as ft,At as pt,B as mt,Bt as ht,C as gt,Ct as _t,D as vt,Dt as yt,Et as bt,F as xt,Ft as St,G as Ct,Gt as wt,H as Tt,Ht as Et,I as Dt,It as Ot,J as kt,Jt as At,K as jt,Kt as Mt,L as Nt,Lt as Pt,M as Ft,Mt as It,N as Lt,Nt as Rt,O as zt,Ot as Bt,P as Vt,Pt as Ht,Q as Ut,Qt as Wt,R as Gt,Rt as Kt,S as qt,St as Jt,T as Yt,Tt as Xt,U as Zt,Ut as Qt,Vt as $t,W as en,Wt as tn,X as nn,Xt as rn,Y as an,Yt as on,Z as sn,Zt as z,_ as cn,_t as ln,a as un,at as dn,b as fn,bt as pn,c as mn,ct as hn,d as gn,dt as _n,en as vn,et as yn,f as bn,ft as xn,g as Sn,gt as Cn,h as wn,ht as Tn,i as En,it as Dn,j as On,jt as kn,k as An,kt as jn,l as Mn,lt as Nn,m as Pn,mt as Fn,n as In,nt as Ln,o as Rn,ot as zn,p as Bn,pt as Vn,q as Hn,qt as Un,r as Wn,rt as Gn,s as Kn,st as qn,t as Jn,tn as Yn,tt as Xn,u as Zn,ut as Qn,v as $n,vt as er,w as tr,wt as nr,x as rr,xt as ir,y as ar,z as or,zt as sr}from"./PlayerInfoOverlay-D38q6x3C.js";import{r as cr,t as lr}from"./colord-BshiezEt.js";import{t as ur}from"./WebGLFrameBuilder-Dmr6ynqB.js";import{n as dr,r as fr,t as pr}from"./Sounds-VbeXv_UQ.js";import{a as mr,i as B,n as hr,r as gr}from"./BuildIcons-CDi3EHiD.js";import{t as _r}from"./RenderSettings-BXksGfUX.js";import{n as vr}from"./UserSettingModal-BpVkOR5X.js";import{n as yr}from"./ThemeProvider-CyR01NIT.js";import{n as br}from"./purify.es-GTKMcGcf.js";import{a as xr,i as Sr,n as Cr,o as wr,r as Tr}from"./DoomsdayClock-B0kwTCEE.js";import{i as Er,n as Dr}from"./PurchaseButton-CYkjwCp8.js";import{l as Or,s as kr}from"./CosmeticCard-Cn9Je4nj.js";import{audioMixer as Ar,initAudioMixer as jr,streamsMusic as Mr}from"./AudioMixer-CPfVez6t.js";var Nr=3e4;function Pr(e){if(e.length===0)return;let t=[...e].sort((e,t)=>e-t),n=e=>Fr(t[Math.max(0,Math.ceil(e/100*t.length)-1)]);return{p50:n(50),p90:n(90),p99:n(99),count:t.length}}function Fr(e){return Math.round(e*100)/100}var Ir=class{constructor(e,t,n=Nr){this.gameID=e,this.clientID=t,this.flushIntervalMs=n,this.frameTime=[],this.tickExecution=[],this.tickInterval=[],this.roundTrip=[],this.lastFrameAt=null,this.timer=null,this.onVisibilityChange=()=>{this.lastFrameAt=null}}start(){this.timer===null&&(this.timer=setInterval(()=>this.flush(),this.flushIntervalMs),document.addEventListener(`visibilitychange`,this.onVisibilityChange))}stop(){this.timer!==null&&(clearInterval(this.timer),this.timer=null,document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.flush())}recordFrame(e){this.lastFrameAt!==null&&this.frameTime.push(e-this.lastFrameAt),this.lastFrameAt=e}recordTickExecution(e){this.tickExecution.push(e)}recordTickInterval(e){this.tickInterval.push(e)}recordRoundTrip(e){this.roundTrip.push(e)}flush(){let e={};for(let[t,n]of[[`frame_time`,this.frameTime],[`tick_execution`,this.tickExecution],[`tick_interval`,this.tickInterval],[`ws_rtt`,this.roundTrip]]){let r=Pr(n);if(r!==void 0){for(let[n,i]of Object.entries(r))e[`${t}_${n}`]=i;n.length=0}}Object.keys(e).length!==0&&Ne(`game_perf`,e,{gameID:this.gameID,clientID:this.clientID??``})}},Lr=8,Rr=20,zr=.3,Br=zr*.03,Vr=20,Hr=new Map([[h.City,`city`],[h.Factory,`factory`],[h.MissileSilo,`missile-silo`],[h.SAMLauncher,`sam-silo`]]),Ur=[...Hr.keys()],Wr=class{constructor(e,t,n){this.game=e,this.eventBus=t,this.transformHandler=n,this.current=null,this.currentGain=0}tick(){let e=this.desiredTrack(),t=e===null?0:this.zoomGain();e===this.current&&Math.abs(t-this.currentGain)<Br||(this.current=e,this.currentGain=t,this.eventBus.emit(new dr(e,t)))}zoomGain(){let e=Rr-Lr,t=(this.transformHandler.scale-Lr)/e;return zr*Math.max(0,Math.min(1,t))}desiredTrack(){if(this.transformHandler.scale<Lr)return null;let{screenX:e,screenY:t}=this.transformHandler.screenCenter();if(!this.game.isValidCoord(e,t))return null;let n=this.game.ref(e,t),r=null;for(let e of this.game.nearbyUnits(n,Vr,Ur))(r===null||e.distSquared<r.distSquared)&&(r={type:e.unit.type(),distSquared:e.distSquared});return r===null?null:Hr.get(r.type)??null}},Gr=63/255,Kr=169/255,qr=245/255,Jr=248/255,Yr=113/255,Xr=113/255,Zr=250,Qr=200;function $r(e,t){if(e.length!==2||t.length!==2)return;let n=(e,t,n)=>Math.abs(n.x-e)+Math.abs(n.y-t),r=n(t[0].dstX,t[0].dstY,e[0])+n(t[1].dstX,t[1].dstY,e[1]);n(t[0].dstX,t[0].dstY,e[1])+n(t[1].dstX,t[1].dstY,e[0])<r&&([e[0],e[1]]=[e[1],e[0]])}var ei=class{constructor(e,t,n,r){this.game=e,this.eventBus=t,this.userSettings=n,this.view=r,this.attacks=new Map,this.inFlightRequest=!1,this.alternateView=!1,this.labelBuf=[]}init(){this.eventBus.on(nr,e=>{this.alternateView=e.alternateView});let e=()=>{this.pushLabels(),requestAnimationFrame(e)};requestAnimationFrame(e)}getTickIntervalMs(){return 200}tick(){if(!this.userSettings.attackingTroopsOverlay()||this.alternateView){this.attacks.size>0&&this.attacks.clear();return}let e=this.game.myPlayer();if(!e){this.attacks.clear();return}let n=new Set;for(let t of e.outgoingAttacks()){if(!t.targetID)continue;let e=this.game.playerBySmallID(t.targetID);!e||!e.isPlayer()||(n.add(t.id),this.ensureEntry(t.id,t.troops,!1))}for(let r of e.incomingAttacks()){let e=this.game.playerBySmallID(r.attackerID);!e||!e.isPlayer()||e.type()===t.Bot||(n.add(r.id),this.ensureEntry(r.id,r.troops,!0))}for(let e of this.attacks.keys())n.has(e)||this.attacks.delete(e);this.inFlightRequest||(this.inFlightRequest=!0,e.attackClusteredPositions().then(e=>{let t=performance.now();for(let{id:n,positions:r}of e){let e=this.attacks.get(n);e&&this.reconcileSlots(e,r,t)}}).catch(()=>{this.attacks.clear()}).finally(()=>{this.inFlightRequest=!1}))}ensureEntry(e,t,n){let r=I(t),i=this.attacks.get(e);if(i){i.text=r,i.isIncoming=n;return}this.attacks.set(e,{text:r,isIncoming:n,slots:[]})}reconcileSlots(e,t,n){$r(t,e.slots),e.slots.length>t.length&&(e.slots.length=t.length);for(let r=0;r<t.length;r++){let i=t[r],a=e.slots[r];if(!a){e.slots.push({curX:i.x,curY:i.y,srcX:i.x,srcY:i.y,dstX:i.x,dstY:i.y,startMs:n});continue}let o=Math.min(1,(n-a.startMs)/Zr),s=a.srcX+(a.dstX-a.srcX)*o,c=a.srcY+(a.dstY-a.srcY)*o;Math.hypot(i.x-s,i.y-c)>Qr?(a.curX=i.x,a.curY=i.y,a.srcX=i.x,a.srcY=i.y,a.dstX=i.x,a.dstY=i.y,a.startMs=n):(a.srcX=s,a.srcY=c,a.curX=s,a.curY=c,a.dstX=i.x,a.dstY=i.y,a.startMs=n)}}pushLabels(){if(this.alternateView||this.attacks.size===0){this.labelBuf.length>0&&(this.labelBuf=[],this.view.setAttackTroopLabels(this.labelBuf));return}let e=performance.now(),t=[];for(let n of this.attacks.values()){let r=n.isIncoming?Jr:Gr,i=n.isIncoming?Yr:Kr,a=n.isIncoming?Xr:qr;for(let o of n.slots){let s=Math.min(1,(e-o.startMs)/Zr);o.curX=o.srcX+(o.dstX-o.srcX)*s,o.curY=o.srcY+(o.dstY-o.srcY)*s,t.push({x:o.curX,y:o.curY,text:n.text,colorR:r,colorG:i,colorB:a})}}this.labelBuf=t,this.view.setAttackTroopLabels(t)}};function ti(e){let{gm:t,targetTile:n,magnitude:r}=e,i=r.inner*r.inner,a=new Map;return t.circleSearch(n,r.outer,(e,n)=>{let r=t.ownerID(e);if(r>0){let e=n<=i?1:.5,t=a.get(r)??0;a.set(r,t+e)}return!0}),a}function ni(e){let{game:t,targetTile:n,magnitude:r,allySmallIds:a,threshold:o}=e;if(!a||a.size===0)return!1;if(t.anyUnitNearby(n,r.outer,i.types,e=>e.owner().isPlayer()&&a.has(e.owner().smallID())))return!0;let s=r.inner*r.inner,c=new Map,l=!1;return t.circleSearch(n,r.outer,(e,n)=>{let r=t.ownerID(e);if(r>0&&a.has(r)){let e=n<=s?1:.5,t=(c.get(r)??0)+e;if(c.set(r,t),t>o)return l=!0,!1}return!0}),l}function ri(e){let{game:t,targetTile:n,magnitude:r,threshold:a}=e,o=new Set,s=ti({gm:t,targetTile:n,magnitude:r});for(let[e,t]of s)t>a&&o.add(e);return t.nearbyUnits(n,r.outer,i.types).forEach(({unit:e})=>o.add(e.owner().smallID())),o}function ii(e){return e===h.AtomBomb||e===h.HydrogenBomb||e===h.OilField||e===h.GasField||e===h.UraniumPlant}var ai=.9999;function oi(e,t,n,r){return t.has(e)?!1:!n.has(e)||r.has(e)}var si=class{constructor(e,t,n,r,i,a){this.game=e,this.eventBus=t,this.uiState=n,this.transformHandler=r,this.view=i,this.userSettings=a,this.ghostUnit=null,this.connectedAllySmallIds=new Set,this.usedSafetyAllies=new Set,this.mousePos={x:0,y:0},this.lastGhostQueryAt=0,this.pendingConfirm=null,this.lastGhostData=null,this.nukeTrajectoryStatic=null}init(){this.eventBus.on(Kt,e=>this.moveGhost(e)),this.eventBus.on(sr,e=>this.requestConfirmStructure(e)),this.eventBus.on(Bt,()=>this.requestConfirmStructure(new sr(this.mousePos.x,this.mousePos.y)));let e=()=>{let t=this.lastGhostData,n=this.nukeTrajectoryStatic;if(t!==null||n!==null){let e=this.transformHandler.screenToWorldCoordinatesFloat(this.mousePos.x,this.mousePos.y);if(t!==null){let n=!t.snapToPlacement&&!(t.canUpgrade&&t.upgradeTargetTile!==null);this.view.updateGhostPreview({...t,tileX:t.snapToPlacement?t.tileX:e.x-.5,tileY:t.snapToPlacement?t.tileY:e.y-.5,...n?{radiusTileX:e.x-.5,radiusTileY:e.y-.5}:{}})}if(n!==null){let t=Nt(n.srcX,n.srcY,e.x-.5,e.y-.5,this.game.height(),n.directionUp,n.sams),r=Math.floor(e.x),i=Math.floor(e.y);this.game.isValidCoord(r,i)&&this.game.isImpassable(this.game.ref(r,i))&&(t.tSamIntercept=Math.min(t.tSamIntercept,ai)),this.view.updateNukeTrajectory(t)}}requestAnimationFrame(e)};requestAnimationFrame(e)}tick(){this.syncGhostState(),this.renderGhost()}syncGhostState(){let e=this.uiState.ghostStructure;this.ghostUnit?e===null?this.removeGhostStructure():e!==this.ghostUnit.buildableUnit.type&&(this.clearGhostStructure(),this.createGhostStructure(e)):e!==null&&this.createGhostStructure(e)}renderGhost(){if(!this.ghostUnit)return;let e=performance.now();if(e-this.lastGhostQueryAt<50)return;this.lastGhostQueryAt=e;let t,n,r=this.transformHandler.screenToWorldCoordinates(this.mousePos.x,this.mousePos.y);this.game.isValidCoord(r.x,r.y)&&(t=this.game.ref(r.x,r.y),n=t,this.game.isImpassable(t)&&(t=void 0));let i=!1,a=this.game.myPlayer(),o=this.ghostUnit.buildableUnit.type;if(t&&a&&(o===h.AtomBomb||o===h.HydrogenBomb)){this.connectedAllySmallIds.clear();let e=a.allies();for(let t=0;t<e.length;t++){let n=e[t];n.isDisconnected()||this.connectedAllySmallIds.add(n.smallID())}this.connectedAllySmallIds.size>0&&(i=ni({game:this.game,targetTile:t,magnitude:this.game.config().nukeMagnitudes(o),allySmallIds:this.connectedAllySmallIds,threshold:this.game.config().nukeAllianceBreakThreshold()}))}this.game?.myPlayer()?.buildables(t,[this.ghostUnit?.buildableUnit.type]).then(e=>{if(!this.ghostUnit){this.pendingConfirm=null,this.emitGhostPreview(t,i,n);return}let r=e.find(e=>e.type===this.ghostUnit.buildableUnit.type);if(!r){Object.assign(this.ghostUnit.buildableUnit,{canBuild:!1,canUpgrade:!1}),this.pendingConfirm=null,this.emitGhostPreview(t,i,n);return}if(this.ghostUnit.buildableUnit=r,this.pendingConfirm!==null){let e=this.pendingConfirm;this.pendingConfirm=null,this.isGhostReadyForConfirm()&&this.createStructure(e)}this.emitGhostPreview(t,i,n)})}emitGhostPreview(e,t,n){let r=this.buildGhostPreviewData(e,t);r===null?(this.lastGhostData=null,this.view.updateGhostPreview(null)):this.lastGhostData=r,this.updateNukeTrajectoryPreview(n)}updateNukeTrajectoryPreview(e){if(!this.ghostUnit||e===void 0){this.clearNukeTrajectory();return}let t=this.ghostUnit.buildableUnit.type;if(t!==h.AtomBomb&&t!==h.HydrogenBomb){this.clearNukeTrajectory();return}let n=this.game.myPlayer();if(!n){this.clearNukeTrajectory();return}let r=n.units(h.MissileSilo).filter(e=>e.isActive()&&!e.isInCooldown()&&!e.isUnderConstruction());if(r.length===0){this.clearNukeTrajectory();return}let i=this.game.x(e),a=this.game.y(e);r.sort((e,t)=>Math.abs(this.game.x(e.tile())-i)+Math.abs(this.game.y(e.tile())-a)-(Math.abs(this.game.x(t.tile())-i)+Math.abs(this.game.y(t.tile())-a)));let o=r[0],s=this.uiState.rocketDirectionUp,c=this.game.x(o.tile()),l=this.game.y(o.tile()),u=new Set;for(let e of this.game.players())n.isOnSameTeam(e)&&u.add(e.smallID());let d=new Set;for(let e of n.allies())d.add(e.smallID());let f=d.size>0?ri({game:this.game,targetTile:e,magnitude:this.game.config().nukeMagnitudes(t),threshold:this.game.config().nukeAllianceBreakThreshold()}):new Set,p=[];for(let e of this.game.units(h.SAMLauncher)){if(!e.isActive())continue;let t=e.owner();if(t===n||!oi(t.smallID(),u,d,f))continue;let r=this.game.config().samRange(e.level());p.push({x:this.game.x(e.tile()),y:this.game.y(e.tile()),r})}this.nukeTrajectoryStatic={srcX:c,srcY:l,directionUp:s,sams:p}}clearNukeTrajectory(){this.nukeTrajectoryStatic=null,this.view.updateNukeTrajectory(null)}buildGhostPreviewData(e,t){if(!this.ghostUnit||e===void 0)return null;let n=this.game.myPlayer();if(!n)return null;let r=this.ghostUnit.buildableUnit,a=r.canUpgrade===!1&&i.has(r.type)&&r.canBuild!==!1?r.canBuild:e,o=null;r.canUpgrade!==!1&&(o=this.game.unit(r.canUpgrade)?.tile()??null);let s=0;switch(r.type){case h.SAMLauncher:{let e=this.resolveGhostRangeLevel(r)??1;s=this.game.config().samRange(e);break}case h.AtomBomb:case h.HydrogenBomb:s=this.game.config().nukeMagnitudes(r.type).outer;break;case h.Factory:s=this.game.config().trainStationMaxRange();break;case h.DefensePost:s=this.game.config().defensePostRange();break}let c=this.game.x(a),l=this.game.y(a);s>0&&r.canUpgrade!==!1&&o!==null&&(c=this.game.x(o),l=this.game.y(o));let u=r.type===h.AtomBomb,d=r.canUpgrade!==!1||u?this.uiState.upgradeMultiplier??1:1,f=m(r,d),p=n.gold()>=f;return u&&(p&&=n.readyMissileCount()>=d),{ghostType:r.type,tileX:this.game.x(a),tileY:this.game.y(a),snapToPlacement:a!==e,radiusTileX:c,radiusTileY:l,canBuild:r.canBuild!==!1,canUpgrade:r.canUpgrade!==!1,cost:Number(f),multiplier:d,showCost:this.userSettings.cursorCostLabel(),canAfford:p,ghostRailPaths:r.ghostRailPaths,overlappingRailroads:r.overlappingRailroads,ownerID:n.smallID(),upgradeTargetTile:o,rangeRadius:s,rangeWarning:t}}isGhostReadyForConfirm(){if(!this.ghostUnit)return!1;let e=this.ghostUnit.buildableUnit;return e.canBuild!==!1||e.canUpgrade!==!1}requestConfirmStructure(e){!this.ghostUnit&&!this.uiState.ghostStructure||(this.isGhostReadyForConfirm()?this.createStructure(e):this.pendingConfirm=e)}createStructure(e){if(!this.ghostUnit)return;if(this.ghostUnit.buildableUnit.canBuild===!1&&this.ghostUnit.buildableUnit.canUpgrade===!1){this.removeGhostStructure();return}let t=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(this.ghostUnit.buildableUnit.canUpgrade!==!1)this.eventBus.emit(new Tn(this.ghostUnit.buildableUnit.canUpgrade,this.ghostUnit.buildableUnit.type,this.uiState.upgradeMultiplier||1)),this.removeGhostStructure();else if(this.ghostUnit.buildableUnit.canBuild){if(!this.game.isValidCoord(t.x,t.y))return;let e=this.ghostUnit.buildableUnit.type,n=this.game.ref(t.x,t.y);if(this.shouldBlockRecentAllyNuke(n,e))return;let r=e===h.AtomBomb,i=e===h.AtomBomb||e===h.HydrogenBomb?this.uiState.rocketDirectionUp:void 0;this.eventBus.emit(new Tt(e,n,i,r?this.uiState.upgradeMultiplier||1:void 0)),ii(e)||this.removeGhostStructure()}else this.removeGhostStructure()}shouldBlockRecentAllyNuke(e,t){let n=this.userSettings.nukeAllianceSafetyDuration();if(n<=0||t!==h.AtomBomb&&t!==h.HydrogenBomb&&t!==h.MIRV)return!1;let r=this.game.myPlayer()?.alliances();if(!r?.length)return!1;let i=this.game.ticks(),a=new Map;for(let e of r)!this.usedSafetyAllies.has(e.id)&&i-e.createdAt<=n&&a.set(this.game.player(e.other).smallID(),e.id);if(a.size===0)return!1;let o=t===h.MIRV?[this.game.ownerID(e)]:ri({game:this.game,targetTile:e,magnitude:this.game.config().nukeMagnitudes(t),threshold:this.game.config().nukeAllianceBreakThreshold()}),s=!1;for(let e of o){let t=a.get(e);t!==void 0&&(this.usedSafetyAllies.add(t),s=!0)}return s&&this.view.triggerBlockedFlash(this.game.x(e)+.5,this.game.y(e)+.5),s}moveGhost(e){this.mousePos.x=e.x,this.mousePos.y=e.y}createGhostStructure(e){e!==null&&this.game.myPlayer()!==null&&(this.ghostUnit={buildableUnit:{type:e,canBuild:!1,canUpgrade:!1,cost:0n,overlappingRailroads:[],ghostRailPaths:[]}})}clearGhostStructure(){this.pendingConfirm=null,this.ghostUnit=null,this.lastGhostData=null,this.view.updateGhostPreview(null),this.clearNukeTrajectory()}removeGhostStructure(){this.clearGhostStructure(),this.uiState.ghostStructure=null}resolveGhostRangeLevel(e){if(e.type===h.SAMLauncher){if(e.canUpgrade!==!1){let t=this.game.unit(e.canUpgrade);if(t)return t.level()+1;console.warn(`Failed to find existing SAMLauncher for upgrade`)}return 1}}},ci=class{constructor(e,t,n,r){this.game=e,this.eventBus=t,this.transformHandler=n,this.view=r,this.lastOwnerID=0}init(){this.eventBus.on(Kt,e=>this.onMouseMove(e))}navalHighlightEnabled(){return this.view.getSettings().mapOverlay?.navalHighlight??!1}onMouseMove(e){let t=this.transformHandler.screenToWorldCoordinatesFloat(e.x,e.y);this.view.setMouseWorldPos(t.x,t.y);let n=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.game.isValidCoord(n.x,n.y)){this.lastOwnerID!==0&&(this.lastOwnerID=0,this.view.setHighlightOwner(0));return}let r=0,i=this.game.ref(n.x,n.y);if(this.game.isLand(i))r=this.game.tileState(i)&lt;else if(this.navalHighlightEnabled()){let e=null,t=2500;for(let n of this.game.units(h.Warship,h.TradeShip,h.TransportShip)){let r=this.game.euclideanDistSquared(i,n.tile());r<t&&(t=r,e=n)}e!==null&&(r=e.owner().smallID())}r!==this.lastOwnerID&&(this.lastOwnerID=r,this.view.setHighlightOwner(r))}},li=100,ui=class{constructor(e,t){this.game=e,this.eventBus=t,this.enabled=e.config().gameConfig().liveStatsEnabled===!0&&!e.config().isReplay()}tick(){if(!this.enabled)return;let e=this.game.ticks();if(e<=0||e%li!==0)return;let t={turn:e,players:this.game.players().flatMap(e=>{let t=e.clientID();return t===null?[]:[{clientID:t,tilesOwned:e.numTilesOwned(),troops:e.troops(),gold:e.gold().toString(),isAlive:e.isAlive(),team:e.team(),killedBy:e.killedBy(),deathPosition:e.deathPosition()}]}).sort((e,t)=>e.clientID.localeCompare(t.clientID))};this.eventBus.emit(new Nn(t))}},di=5,fi=10,pi=10,mi=100,hi=new Set([h.City,h.Factory,h.Port]),gi=new Set([o.NUKE_INBOUND,o.HYDROGEN_BOMB_INBOUND,o.MIRV_INBOUND]),_i=class{constructor(e,t){this.game=e,this.eventBus=t,this.lastMirvHitSoundTick=-1/0,this.lastNukeWarningSoundTick=-1/0,this.lastTrainStationSoundTick=-1/0,this.hadTrainStation=new Map,this.lastTrainStationSweepTick=-1/0,this.onSpawnIntent=()=>{this.game.myPlayer()!==null&&this.emit(`spawn`)}}init(){this.eventBus.on(xn,this.onSpawnIntent)}tick(){let e=this.game.updatesSinceLastTick();if(!e)return;this.pruneTrainStations();for(let t of e[R.Unit]??[]){let e=this.game.unit(t.id);e!==void 0&&this.handleUnit(e)}(e[R.SpawnPhaseEnd]??[]).length>0&&this.emit(`game-start`);let n=this.game.myPlayer();if(n!==null){for(let r of e[R.ConquestEvent]??[])if(r.conquerorId===n.id()){let e=this.game.player(r.conqueredId);this.emit(e.type()===t.Human?`conquered`:`ka-ching`)}for(let t of e[R.UnitIncoming]??[]){if(t.playerID!==n.smallID()||!gi.has(t.messageType))continue;let e=this.game.ticks();e-this.lastNukeWarningSoundTick<fi||(this.lastNukeWarningSoundTick=e,this.emit(`nuke-warning`))}}}handleUnit(e){switch(e.isActive()&&e.createdAt()===this.game.ticks()&&this.onCreated(e),hi.has(e.type())&&this.handleTrainStation(e),e.type()){case h.AtomBomb:this.onNukeDetonation(e,`atom-hit`);break;case h.MIRVWarhead:this.onMirvWarheadDetonation(e);break;case h.HydrogenBomb:this.onNukeDetonation(e,`hydrogen-hit`);break}}onMirvWarheadDetonation(e){if(e.isActive()||!e.reachedTarget())return;let t=this.game.ticks();t-this.lastMirvHitSoundTick<di||(this.lastMirvHitSoundTick=t,this.emit(`atom-hit`))}onCreated(e){let t=this.game.myPlayer();switch(e.type()){case h.AtomBomb:this.emit(`atom-launch`);break;case h.HydrogenBomb:this.emit(`hydrogen-launch`);break;case h.MIRV:this.emit(`mirv-launch`);break;case h.Warship:e.owner()===t&&this.emit(`build-warship`);break;case h.City:e.owner()===t&&this.emit(`build-city`);break;case h.Port:e.owner()===t&&this.emit(`build-port`);break;case h.DefensePost:e.owner()===t&&this.emit(`build-defense-post`);break;case h.SAMLauncher:e.owner()===t&&this.emit(`sam-built`);break;case h.MissileSilo:e.owner()===t&&this.emit(`silo-built`);break;case h.Factory:e.owner()===t&&this.emit(`build-factory`);break;case h.TransportShip:e.owner()===t&&this.emit(`transport-ship`);break}}pruneTrainStations(){let e=this.game.ticks();if(!(e-this.lastTrainStationSweepTick<mi)){this.lastTrainStationSweepTick=e;for(let e of this.hadTrainStation.keys()){let t=this.game.unit(e);(t===void 0||!t.isActive())&&this.hadTrainStation.delete(e)}}}handleTrainStation(e){if(!e.isActive()){this.hadTrainStation.delete(e.id());return}let t=e.hasTrainStation();if(this.hadTrainStation.get(e.id())===!1&&t&&e.owner()===this.game.myPlayer()){let e=this.game.ticks();e-this.lastTrainStationSoundTick>=pi&&(this.lastTrainStationSoundTick=e,this.emit(`build-train-station`))}this.hadTrainStation.set(e.id(),t)}onNukeDetonation(e,t){e.isActive()||e.reachedTarget()&&this.emit(t)}emit(e){this.eventBus.emit(new pr(e))}},vi=class{constructor(e,t){this.eventBus=e,this.view=t}init(){this.eventBus.on(on,e=>this.view.setHighlightStructureTypes(e.structureTypes))}},yi=10,bi=class{constructor(e,t,n,r){this.game=e,this.eventBus=t,this.transformHandler=n,this.view=r,this.selectedUnit=null,this.multiSelectedWarships=[],this.dragRectEl=null}tick(){this.multiSelectedWarships=this.multiSelectedWarships.filter(e=>e.isActive())}init(){this.eventBus.on(z,e=>this.onUnitSelection(e)),this.ensureDragRectEl(),this.eventBus.on(vn,e=>{this.updateDragRect(e.startX,e.startY,e.endX,e.endY)});let e=()=>this.hideDragRect();this.eventBus.on(dt,e),this.eventBus.on(Wt,e),this.eventBus.on(yt,e),this.eventBus.on(sr,e=>this.onMouseUp(e)),this.eventBus.on(rn,e=>this.onTouch(e)),this.eventBus.on(dt,e=>this.onSelectionBoxComplete(e)),this.eventBus.on($t,()=>this.onSelectAllWarships())}ensureDragRectEl(){if(this.dragRectEl!==null)return;let e=document.createElement(`div`);e.id=`warship-drag-rect`,e.style.position=`fixed`,e.style.pointerEvents=`none`,e.style.display=`none`,e.style.zIndex=`30`,e.style.borderStyle=`dashed`,e.style.borderWidth=`1px`,e.style.boxSizing=`border-box`,document.body.appendChild(e),this.dragRectEl=e}updateDragRect(e,t,n,r){let i=this.dragRectEl;if(i===null)return;let a=Math.min(e,n),o=Math.min(t,r),s=Math.abs(n-e),c=Math.abs(r-t),l=this.game.myPlayer(),u=l?l.territoryColor().lighten(.2):null,d=u?u.alpha(.85).toRgbString():`rgba(100, 200, 255, 0.85)`,f=u?u.alpha(.06).toRgbString():`rgba(100, 200, 255, 0.06)`;i.style.left=`${a}px`,i.style.top=`${o}px`,i.style.width=`${s}px`,i.style.height=`${c}px`,i.style.borderColor=d,i.style.backgroundColor=f,i.style.display=`block`}hideDragRect(){this.dragRectEl!==null&&(this.dragRectEl.style.display=`none`)}findWarshipsNearCell(e){let t=this.game.myPlayer();return t?this.game.units(h.Warship).filter(n=>n.isActive()&&n.owner()===t&&this.game.manhattanDist(n.tile(),e)<=yi).sort((t,n)=>this.game.manhattanDist(t.tile(),e)-this.game.manhattanDist(n.tile(),e)):[]}onMouseUp(e,t,n){if(t===void 0){let n=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.game.isValidCoord(n.x,n.y))return;t=this.game.ref(n.x,n.y)}if(this.game.isWater(t)){if(this.multiSelectedWarships.length>0){let e=this.game.myPlayer(),n=this.multiSelectedWarships.filter(t=>t.isActive()&&t.owner()===e).map(e=>e.id());n.length>0&&this.eventBus.emit(new Ct(n,t)),this.eventBus.emit(new z(null,!1));return}if(this.selectedUnit){this.eventBus.emit(new Ct([this.selectedUnit.id()],t)),this.eventBus.emit(new z(this.selectedUnit,!1));return}n??=this.findWarshipsNearCell(t),n.length>0&&this.eventBus.emit(new z(n[0],!0))}}onTouch(e){let t=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.game.isValidCoord(t.x,t.y))return;let n=this.game.ref(t.x,t.y);if(this.game.inSpawnPhase()){this.game.isWater(n)||this.eventBus.emit(new sr(e.x,e.y));return}if(!this.game.isWater(n)){this.eventBus.emit(new jn(e.x,e.y));return}if(this.selectedUnit||this.multiSelectedWarships.length>0){this.onMouseUp(new sr(e.x,e.y),n);return}let r=this.findWarshipsNearCell(n);r.length>0?this.onMouseUp(new sr(e.x,e.y),n,r):this.eventBus.emit(new jn(e.x,e.y))}onSelectionBoxComplete(e){let t=Math.min(e.startX,e.endX),n=Math.min(e.startY,e.endY),r=Math.max(e.startX,e.endX),i=Math.max(e.startY,e.endY),a=this.game.myPlayer();if(!a)return;let o=this.game.units(h.Warship).filter(e=>{if(!e.isActive()||e.owner()!==a)return!1;let o=this.transformHandler.worldToScreenCoordinates(new l(this.game.x(e.tile()),this.game.y(e.tile())));return o.x>=t&&o.x<=r&&o.y>=n&&o.y<=i});o.length>0&&this.selectedUnit&&this.eventBus.emit(new z(this.selectedUnit,!1)),this.eventBus.emit(new z(null,!0,o))}getAllWarships(){let e=this.game.myPlayer();return e?this.game.units(h.Warship).filter(t=>t.isActive()&&t.owner()===e):[]}selectedAllWarships(){let e=this.getAllWarships();return e.length>0&&this.multiSelectedWarships.length===e.length}onSelectAllWarships(){let e=this.getAllWarships();e.length!==0&&(this.selectedUnit&&this.eventBus.emit(new z(this.selectedUnit,!1)),this.eventBus.emit(new z(null,!this.selectedAllWarships(),e)))}onUnitSelection(e){if(this.multiSelectedWarships=[],this.selectedUnit=null,!e.isSelected){this.view.setSelectedUnits([]);return}(e.units??[]).length>0?(this.multiSelectedWarships=e.units,this.view.setSelectedUnits(e.units.map(e=>e.id()))):(this.selectedUnit=e.unit,this.view.setSelectedUnits(e.unit?[e.unit.id()]:[]))}},xi=class{static{this.timings={}}static{this.enabled=!1}static setEnabled(e){this.enabled=e}static isEnabled(){return this.enabled}static clear(){this.enabled&&(this.timings={})}static record(e,t){!this.enabled||!Number.isFinite(t)||(this.timings[e]=(this.timings[e]??0)+t)}static start(){return this.enabled?performance.now():0}static end(e,t){if(!this.enabled||t===0)return;let n=performance.now()-t;this.record(e,n)}static consume(){if(!this.enabled)return{};let e={...this.timings};return this.timings={},e}},Si=3,Ci=class extends M{constructor(...e){super(...e),this.active=!1,this.events=[],this.alliancesCheckedAt=new Map,this._isVisible=!1,this.updateMap=[[R.AllianceRequest,this.onAllianceRequestEvent.bind(this)],[R.AllianceRequestReply,this.onAllianceRequestReplyEvent.bind(this)],[R.BrokeAlliance,this.onBrokeAllianceEvent.bind(this)],[R.AllianceExtension,this.onAllianceExtensionEvent.bind(this)]]}createRenderRoot(){return this}addEvent(e){let t=this.events;e.type===o.ALLIANCE_REQUEST&&(t=t.filter(t=>t.type!==o.ALLIANCE_REQUEST||t.requestorID!==e.requestorID)),t=[...t,e];let n=t.filter(e=>e.type===o.ALLIANCE_REQUEST);if(n.length>Si){let e=n.reduce((e,t)=>t.createdAt<e.createdAt?t:e);t=t.filter(t=>t!==e)}this.events=t,this.requestUpdate()}removeEvent(e){this.events=[...this.events.slice(0,e),...this.events.slice(e+1)]}removeAllianceRenewalEvents(e){this.events=this.events.filter(t=>!(t.type===o.RENEW_ALLIANCE&&t.allianceID===e))}tick(){this.active=!0,!this._isVisible&&!this.game.inSpawnPhase()&&(this._isVisible=!0,this.requestUpdate());let e=this.game.myPlayer();if(!e||!e.isAlive()){this._isVisible&&(this._isVisible=!1,this.requestUpdate());return}this.checkForAllianceExpirations();let t=this.game.updatesSinceLastTick();if(t)for(let[e,n]of this.updateMap)t[e]?.forEach(n);let n=this.events.filter(e=>(e.duration===void 0||this.game.ticks()-e.createdAt<e.duration)&&(e.type!==o.ALLIANCE_REQUEST||this.game.playerBySmallID(e.requestorID).isAlive()&&this.game.playerBySmallID(e.requestorID).isRequestingAllianceWith(this.game.myPlayer())));this.events.length!==n.length&&(this.events=n,this.requestUpdate())}checkForAllianceExpirations(){let e=this.game.myPlayer();if(!e?.isAlive())return;let t=new Set;for(let n of e.alliances()){if(t.add(n.id),n.expiresAt>this.game.ticks()+this.game.config().allianceExtensionPromptOffset()||(this.alliancesCheckedAt.get(n.id)??0)>=this.game.ticks()-this.game.config().allianceExtensionPromptOffset())continue;this.alliancesCheckedAt.set(n.id,this.game.ticks());let e=this.game.player(n.other);this.addEvent({description:N(`events_display.about_to_expire`,{name:e.displayName()}),type:o.RENEW_ALLIANCE,buttons:[{text:N(`events_display.focus`),className:`btn-gray`,action:()=>this.eventBus.emit(new pn(e)),preventClose:!0},{text:N(`events_display.renew_alliance`,{name:e.displayName()}),className:`btn`,action:()=>this.eventBus.emit(new sn(e))},{text:N(`events_display.ignore`),className:`btn-info`,action:()=>{}}],createdAt:this.game.ticks(),focusID:e.smallID(),allianceID:n.id,requestorID:e.smallID()})}for(let[e]of this.alliancesCheckedAt)t.has(e)||(this.removeAllianceRenewalEvents(e),this.alliancesCheckedAt.delete(e),this.requestUpdate())}onAllianceRequestEvent(e){let t=this.game.myPlayer();if(!t||e.recipientID!==t.smallID())return;let n=this.game.playerBySmallID(e.requestorID);!n.isPlayer()||!n.isAlive()||(n.isAlliedWith(t)||this.eventBus.emit(new pr(`alliance-suggested`)),document.dispatchEvent(new CustomEvent(`ui-suggestion`,{detail:{description:N(e.isPeaceRequest?`events_display.request_peace`:`events_display.request_alliance`,{name:n.displayName()}),type:o.ALLIANCE_REQUEST,createdAt:this.game.ticks(),focusID:e.requestorID,requestorID:e.requestorID,duration:this.game.config().allianceRequestDuration(),minor:!1}})))}onAllianceRequestReplyEvent(e){let t=this.game.myPlayer();if(!t||e.request.recipientID!==t.smallID())return;let n=e.request.requestorID,r=this.events.filter(e=>!(e.type===o.ALLIANCE_REQUEST&&e.focusID===n));r.length!==this.events.length&&(this.events=r,this.requestUpdate())}onBrokeAllianceEvent(e){this.removeAllianceRenewalEvents(e.allianceID),this.alliancesCheckedAt.delete(e.allianceID),this.requestUpdate()}onAllianceExtensionEvent(e){let t=this.game.myPlayer();!t||t.smallID()!==e.playerID||(this.removeAllianceRenewalEvents(e.allianceID),this.requestUpdate())}emitGoToPlayerEvent(e){let t=this.game.playerBySmallID(e);t&&this.eventBus.emit(new pn(t))}render(){return!this.active||!this._isVisible||this.events.length===0?A``:A`
      <div
        class="flex flex-col gap-2 w-full min-[1200px]:w-96 pointer-events-auto mt-2"
      >
        ${[...this.events].sort((e,t)=>{let n=e.priority??1e5,r=t.priority??1e5;return n===r?t.createdAt-e.createdAt:r-n}).map(e=>A`
            <div
              class="bg-gray-800/92 backdrop-blur-sm rounded-lg shadow-lg border-l-4 border-yellow-400 p-3 lg:p-4 text-white"
            >
              <button
                class="text-left text-sm lg:text-base font-semibold w-full cursor-pointer ${ce(e.type)}"
                @click=${()=>this.emitGoToPlayerEvent(e.focusID)}
              >
                ${e.description}
              </button>
              <div class="flex flex-wrap gap-1.5 mt-2">
                ${e.buttons.map(t=>A`
                    <button
                      class="inline-block px-3 py-1 text-white rounded-sm text-xs lg:text-sm cursor-pointer transition-colors duration-300
                        ${t.className.includes(`btn-info`)?`bg-blue-500 hover:bg-blue-600`:t.className.includes(`btn-gray`)?`bg-gray-500 hover:bg-gray-600`:`bg-green-600 hover:bg-green-700`}"
                      @click=${()=>{if(t.action(),!t.preventClose){let t=this.events.findIndex(t=>t===e);t!==-1&&this.removeEvent(t)}this.requestUpdate()}}
                    >
                      ${t.text}
                    </button>
                  `)}
              </div>
            </div>
          `)}
      </div>
    `}};j([O()],Ci.prototype,`_isVisible`,void 0),Ci=j([k(`actionable-events`)],Ci);var wi,Ti=1.6,Ei=2,Di=150,Oi=150,ki=class extends M{static{wi=this}static{this.styles=ue`
    .alert-border {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border: 17px solid;
      box-sizing: border-box;
      z-index: 40;
      opacity: 0;
    }

    .alert-border.betrayal {
      border-color: #ee0000;
    }

    .alert-border.land-attack {
      border-color: #ffa500;
    }

    .alert-border.animate {
      animation: alertBlink ${Ti}s ease-in-out ${Ei};
    }

    @keyframes alertBlink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `}constructor(){if(super(),this.userSettings=new F,this.isActive=!1,this.alertType=`betrayal`,this.animationTimeout=null,this.seenAttackIds=new Set,this.lastAlertTick=-1,this.outgoingAttackTicks=new Map,!document.querySelector(`style[data-alert-frame]`)){let e=document.createElement(`style`);e.setAttribute(`data-alert-frame`,``),e.textContent=wi.styles.cssText,document.head.appendChild(e)}}createRenderRoot(){return this}init(){}tick(){if(!this.game)return;let e=this.game.myPlayer();if(!e||!e.isAlive()){this.seenAttackIds.clear(),this.outgoingAttackTicks.clear(),this.lastAlertTick=-1;return}this.trackOutgoingAttacks(),this.game.updatesSinceLastTick()?.[R.BrokeAlliance]?.forEach(e=>{this.onBrokeAllianceUpdate(e)}),this.checkForNewAttacks()}onBrokeAllianceUpdate(e){let t=this.game.myPlayer();t&&this.game.playerBySmallID(e.betrayedID)===t&&(this.alertType=`betrayal`,this.activateAlert())}activateAlert(){this.userSettings.alertFrame()&&(this.isActive=!0,this.lastAlertTick=this.game.ticks(),this.requestUpdate())}trackOutgoingAttacks(){let e=this.game.myPlayer();if(!e||!e.isAlive())return;let t=this.game.ticks(),n=e.outgoingAttacks();for(let e of n)if(e.targetID!==0&&!e.retreating){let n=this.outgoingAttackTicks.get(e.targetID);(n===void 0||t-n>=Di)&&this.outgoingAttackTicks.set(e.targetID,t)}for(let[e,n]of this.outgoingAttackTicks.entries())t-n>Di&&this.outgoingAttackTicks.delete(e)}checkForNewAttacks(){let e=this.game.myPlayer();if(!e||!e.isAlive())return;let n=e.incomingAttacks(),r=this.game.ticks(),i=this.lastAlertTick!==-1&&r-this.lastAlertTick<Oi,a=e.troops()/5;for(let e of n)if(!e.retreating&&!this.seenAttackIds.has(e.id)){if(this.game.playerBySmallID(e.attackerID).type()===t.Bot){this.seenAttackIds.add(e.id);continue}let n=this.outgoingAttackTicks.get(e.attackerID),o=n!==void 0&&r-n<Di,s=e.troops<a;!i&&!o&&!s?(this.seenAttackIds.add(e.id),this.alertType=`land-attack`,this.activateAlert()):this.seenAttackIds.add(e.id)}let o=new Set(n.map(e=>e.id));for(let e of this.seenAttackIds)o.has(e)||this.seenAttackIds.delete(e)}dismissAlert(){this.isActive=!1,this.animationTimeout&&=(clearTimeout(this.animationTimeout),null),this.requestUpdate()}render(){return this.isActive?A`
      <div
        class=${`alert-border animate ${this.alertType}`}
        @animationend=${()=>this.dismissAlert()}
      ></div>
    `:A``}};j([O()],ki.prototype,`isActive`,void 0),j([O()],ki.prototype,`alertType`,void 0),ki=wi=j([k(`alert-frame`)],ki);function Ai(e){if(e.length<1)return[];let t=e[0]>>>0,n=[],r=1;for(let i=0;i<t&&r+1<e.length;i++){let t=e[r]>>>0,i=e[r+1]>>>0;if(i<2||r+i>e.length)break;switch(t){case 1:{if(i<7)break;let t=e[r+2]>>>0,a=e[r+3]>>>0,o=e[r+4]>>>0,s=e[r+5]>>>0,c=e[r+6]>>>0;if(7+c!==i)break;let l=r+7,u=l+c,d=e.slice(l,u);n.push({kind:`grid`,unitId:t,planId:a,startTick:o,ticksPerStep:s,path:d});break}case 2:{if(i<9)break;let t=e[r+2]>>>0,a=e[r+3]>>>0,o=e[r+4]>>>0,s=e[r+5]>>>0,c=e[r+6]>>>0,l=e[r+7]>>>0,u=e[r+8]>>>0;if(9+l+u!==i)break;let d=r+9,f=d+l,p=f,m=p+u,h=e.slice(d,f),g=e.slice(p,m);n.push({kind:`train`,engineUnitId:t,carUnitIds:h,planId:a,startTick:o,speed:s,spacing:c,path:g});break}default:break}r+=i}return n}var ji=class{constructor(e){this.gm=e,this.cellSize=100,this.grid=Array(Math.ceil(e.height()/this.cellSize)).fill(null).map(()=>Array(Math.ceil(e.width()/this.cellSize)).fill(null).map(()=>new Map))}snapshot(e){let t=[];for(let n of this.grid)for(let r of n){let n=[];for(let[t,i]of r)n.push([t,[...i].map(t=>e(t))]);t.push(n)}return t}restoreSnapshot(e,t){let n=this.grid[0]?.length??0;e.forEach((e,r)=>{let i=this.grid[Math.floor(r/n)][r%n];for(let[n,r]of e)i.set(n,new Set(r.map(t)))})}getGridCoords(e,t){return[Math.floor(e/this.cellSize),Math.floor(t/this.cellSize)]}addUnit(e){let t=e.tile(),[n,r]=this.getGridCoords(this.gm.x(t),this.gm.y(t));if(this.isValidCell(n,r)){let t=this.grid[r][n].get(e.type());t===void 0?this.grid[r][n].set(e.type(),new Set([e])):t.add(e)}}removeUnit(e){let t=e.tile();this.removeUnitByTile(e,t)}removeUnitByTile(e,t){let[n,r]=this.getGridCoords(this.gm.x(t),this.gm.y(t));if(this.isValidCell(n,r)){let t=this.grid[r][n].get(e.type());t!==void 0&&t.delete(e)}}updateUnitCell(e){let t=e.tile(),n=e.lastTile();if(t===n)return;let r=this.cellSize,i=Math.floor(this.gm.x(n)/r),a=Math.floor(this.gm.y(n)/r),o=Math.floor(this.gm.x(t)/r),s=Math.floor(this.gm.y(t)/r);(i!==o||a!==s)&&(this.removeUnitByTile(e,n),this.addUnit(e))}isValidCell(e,t){return e>=0&&e<this.grid[0].length&&t>=0&&t<this.grid.length}getCellsInRange(e,t){let n=this.gm.x(e),r=this.gm.y(e),i=this.cellSize,[a,o]=this.getGridCoords(n,r);return{startGridX:Math.max(0,a-Math.ceil((t-n%i)/i)),endGridX:Math.min(this.grid[0].length-1,a+Math.ceil((t-(i-n%i))/i)),startGridY:Math.max(0,o-Math.ceil((t-r%i)/i)),endGridY:Math.min(this.grid.length-1,o+Math.ceil((t-(i-r%i))/i))}}squaredDistanceFromTile(e,t){let n=this.gm.x(t),r=this.gm.y(t),i=this.gm.x(e.tile()),a=this.gm.y(e.tile()),o=i-n,s=a-r;return o*o+s*s}nearbyUnits(e,t,n,r,i=!1){let a=[],o=this.gm,s=o.x(e),c=o.y(e),{startGridX:l,endGridX:u,startGridY:d,endGridY:f}=this.getCellsInRange(e,t),p=t*t;if(Array.isArray(n)){for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let l=this.grid[e][t];for(let e of n){let t=l.get(e);if(t!==void 0)for(let e of t){if(!e.isActive()||!i&&e.isUnderConstruction())continue;let t=e.tile(),n=o.x(t)-s,l=o.y(t)-c,u=n*n+l*l;if(u>p)continue;let d={unit:e,distSquared:u};r!==void 0&&!r(d)||a.push(d)}}}return a}let m=n;for(let e=d;e<=f;e++)for(let t=l;t<=u;t++){let n=this.grid[e][t].get(m);if(n!==void 0)for(let e of n){if(!e.isActive()||!i&&e.isUnderConstruction())continue;let t=e.tile(),n=o.x(t)-s,l=o.y(t)-c,u=n*n+l*l;if(u>p)continue;let d={unit:e,distSquared:u};r!==void 0&&!r(d)||a.push(d)}}return a}unitIsInRange(e,t,n,r,i=!1){return!e.isActive()||!i&&e.isUnderConstruction()||r!==void 0&&e.owner().id()!==r?!1:this.squaredDistanceFromTile(e,t)<=n}hasUnitNearby(e,t,n,r,i=!1){let{startGridX:a,endGridX:o,startGridY:s,endGridY:c}=this.getCellsInRange(e,t),l=t*t;for(let t=s;t<=c;t++)for(let s=a;s<=o;s++){let a=this.grid[t][s].get(n);if(a!==void 0){for(let t of a)if(this.unitIsInRange(t,e,l,r,i))return!0}}return!1}anyUnitNearby(e,t,n,r,i,a=!1){let{startGridX:o,endGridX:s,startGridY:c,endGridY:l}=this.getCellsInRange(e,t),u=t*t;for(let t=c;t<=l;t++)for(let c=o;c<=s;c++)for(let o of n){let n=this.grid[t][c].get(o);if(n!==void 0){for(let t of n)if(this.unitIsInRange(t,e,u,i,a)&&r(t))return!0}}return!1}};function Mi(e,t,n){let r=[];for(let i of e.values()){if(i.unitType!==`Transport`||i.targetTile===null||!i.isActive||i.retreating||i.ownerID!==n)continue;let e=i.targetTile;r.push({x:e%t,y:(e-e%t)/t,unitId:i.id})}return r}var Ni=e=>e instanceof Uint32Array?e:Uint32Array.from(e),Pi=class{constructor(){this.grid=new Map,this.trains=new Map,this.trainUnitToEngine=new Map,this.idsCache=[],this.idsDirty=!0}gridPlans(){return this.grid}hasGridPlan(e){return this.grid.has(e)}plannedUnitIds(){if(this.idsDirty){this.idsDirty=!1;let e=this.idsCache;e.length=0;for(let t of this.grid.keys())e.push(t);for(let[t,n]of this.trains){e.push(t);for(let t of n.carUnitIds)t!==0&&e.push(t)}}return this.idsCache}applyRecords(e){for(let t of e){if(t.kind===`grid`){if(t.ticksPerStep<1||t.path.length<1)continue;let e=this.grid.get(t.unitId);if(e&&t.planId<=e.planId)continue;this.grid.set(t.unitId,{planId:t.planId,startTick:t.startTick,ticksPerStep:t.ticksPerStep,path:Ni(t.path)})}else{if(t.speed<1||t.path.length<1)continue;let e=this.trains.get(t.engineUnitId);if(e&&t.planId<=e.planId)continue;e&&this.clearTrainPlan(t.engineUnitId);let n=Ni(t.carUnitIds);this.trains.set(t.engineUnitId,{planId:t.planId,speed:t.speed,spacing:t.spacing,carUnitIds:n,path:Ni(t.path),cursor:0,usedTilesBuf:new Uint32Array(Math.max(0,n.length*t.spacing+3)),usedHead:0,usedLen:0,lastAdvancedTick:t.startTick}),this.trainUnitToEngine.set(t.engineUnitId,t.engineUnitId);for(let e of n)e!==0&&this.trainUnitToEngine.set(e,t.engineUnitId)}this.idsDirty=!0}}unitRemoved(e){this.grid.delete(e)&&(this.idsDirty=!0),this.clearTrainPlan(e)}clearTrainPlan(e){let t=this.trainUnitToEngine.get(e)??(this.trains.has(e)?e:null);if(t===null)return;this.trainUnitToEngine.delete(e);let n=this.trains.get(t);if(n!==void 0){this.trains.delete(t),this.idsDirty=!0,this.trainUnitToEngine.delete(t);for(let e of n.carUnitIds)e!==0&&this.trainUnitToEngine.delete(e)}}advance(e,t){this.advanceGrid(e,t),this.advanceTrains(e,t)}advanceGrid(e,t){for(let[n,r]of this.grid){let i=t.tileOf(n);if(i===void 0){this.grid.delete(n),this.idsDirty=!0;continue}let a=e-r.startTick,o=a<=0?0:Math.floor(a/Math.max(1,r.ticksPerStep)),s=r.path.length-1,c=r.path[Math.max(0,Math.min(s,o))];if(c!==i){t.move(n,c);continue}t.rest(n),a>0&&o>=s&&(this.grid.delete(n),this.idsDirty=!0)}}advanceTrains(e,t){let n=[];for(let[r,i]of this.trains){if(t.tileOf(r)===void 0){n.push(r);continue}let a=e-i.lastAdvancedTick;if(a<=0)continue;let{path:o}=i,s=o.length-1,c=i.usedTilesBuf.length,l=e=>{c!==0&&(i.usedLen<c?(i.usedTilesBuf[(i.usedHead+i.usedLen)%c]=e,i.usedLen++):(i.usedTilesBuf[i.usedHead]=e,i.usedHead=(i.usedHead+1)%c))},u=e=>e<0||e>=i.usedLen||c===0?null:i.usedTilesBuf[(i.usedHead+e)%c],d=!1;for(let e=0;e<a;e++){let e=i.cursor;if(e>=s)break;for(let t=0;t<i.speed&&e+t<o.length;t++)l(o[e+t]);i.cursor=Math.min(s,e+i.speed);for(let e=i.carUnitIds.length-1;e>=0;--e){let n=i.carUnitIds[e];if(n===0)continue;let r=t.tileOf(n);if(r===void 0)continue;let a=u((e+1)*i.spacing+2);a!==null&&a!==r&&(t.move(n,a),d=!0)}let n=o[i.cursor];n!==t.tileOf(r)&&(t.move(r,n),d=!0)}i.lastAdvancedTick=e,!d&&i.cursor>=s&&n.push(r)}for(let e of n)this.clearTrainPlan(e)}};function Fi(e,t){t.isAlive!==void 0&&(e.isAlive=t.isAlive),t.isDisconnected!==void 0&&(e.isDisconnected=t.isDisconnected),t.killedBy!==void 0&&(e.killedBy=t.killedBy),t.deathPosition!==void 0&&(e.deathPosition=t.deathPosition),t.tilesOwned!==void 0&&(e.tilesOwned=t.tilesOwned),t.gold!==void 0&&(e.gold=Number(t.gold)),t.tradeGold!==void 0&&(e.tradeGold=Number(t.tradeGold)),t.trainGold!==void 0&&(e.trainGold=Number(t.trainGold)),t.piracyGold!==void 0&&(e.piracyGold=Number(t.piracyGold)),t.goldEarned!==void 0&&(e.goldEarned=Number(t.goldEarned)),t.oil!==void 0&&(e.oil=t.oil),t.gas!==void 0&&(e.gas=t.gas),t.uranium!==void 0&&(e.uranium=t.uranium),t.troops!==void 0&&(e.troops=t.troops),t.isTraitor!==void 0&&(e.isTraitor=t.isTraitor),t.traitorRemainingTicks!==void 0&&(e.traitorRemainingTicks=Math.max(0,t.traitorRemainingTicks)),t.inDoomsdayClock!==void 0&&(e.inDoomsdayClock=t.inDoomsdayClock),t.markedDoomsdayClockTick!==void 0&&(e.markedDoomsdayClockTick=t.markedDoomsdayClockTick),t.isDecaying!==void 0&&(e.isDecaying=t.isDecaying),t.betrayals!==void 0&&(e.betrayals=t.betrayals),t.hasSpawned!==void 0&&(e.hasSpawned=t.hasSpawned),t.spawnTile!==void 0&&(e.spawnTile=t.spawnTile),t.lastDeleteUnitTick!==void 0&&(e.lastDeleteUnitTick=t.lastDeleteUnitTick),t.allies!==void 0&&(e.allies=t.allies.slice()),t.targets!==void 0&&(e.targets=t.targets.slice()),t.outgoingAllianceRequests!==void 0&&(e.outgoingAllianceRequests=t.outgoingAllianceRequests.slice()),t.tradeOffer!==void 0&&(e.tradeOffer=t.tradeOffer===null?null:{...t.tradeOffer}),t.outgoingAttacks!==void 0&&(e.outgoingAttacks=t.outgoingAttacks),t.incomingAttacks!==void 0&&(e.incomingAttacks=t.incomingAttacks),t.alliances!==void 0&&(e.alliances=t.alliances),t.outgoingEmojis!==void 0&&(e.outgoingEmojis=t.outgoingEmojis)}var Ii=new F,Li={r:0,g:255,b:0,a:1},Ri={r:255,g:0,b:0,a:1},V=.35,zi=class{constructor(e,t,n,r){this.game=e,this.nameData=n,this.equippedCosmetics=r,this.anonymousName=null,this.state=tr(t),Ii.emojis()||(this.state.outgoingEmojis=[]),this.static=Yt(t),t.clientID===e.myClientID()?this.anonymousName=t.name:this.anonymousName=ke(t.name,t.playerType),this.refreshCosmetics()}refreshCosmetics(){this.cosmetics=ar(this.equippedCosmetics,this.game.cosmeticVisibility(),this.cosmeticOwner()),this.computeColors();let e=this.cosmetics.pattern;this.decoder=e===void 0?void 0:new be(e,Se)}cosmeticOwner(){if(this.static.clientID!==null&&this.static.clientID===this.game.myClientID())return`self`;let e=this.game.myPlayer()?.team()??null;return e!==null&&this.team()===e?`teammate`:`other`}computeColors(){let e=yr.current(),t=this.cosmetics.pattern,n=$n(e,e.territoryColor(this),this.cosmetics,this.team(),this.game.myClientID()===this.static.clientID);this._territoryColor=n.territory,this._borderColor=n.border,this._structureColors=e.structureColors(this._territoryColor);let r=t?(this._territoryColor.brightness()+this._borderColor.brightness())/2:this._territoryColor.brightness();this._railColor=r>.8?lr(`rgb(0,0,0)`):e.focusedBorderColor();let i=this._borderColor.toRgb();this._borderColorNeutral=this._borderColor,this._borderColorFriendly=lr({r:Math.round(i.r*(1-V)+Li.r*V),g:Math.round(i.g*(1-V)+Li.g*V),b:Math.round(i.b*(1-V)+Li.b*V),a:i.a}),this._borderColorEmbargo=lr({r:Math.round(i.r*(1-V)+Ri.r*V),g:Math.round(i.g*(1-V)+Ri.g*V),b:Math.round(i.b*(1-V)+Ri.b*V),a:i.a}),this._borderColorDefendedNeutral=e.defendedBorderColors(this._borderColorNeutral),this._borderColorDefendedFriendly=e.defendedBorderColors(this._borderColorFriendly),this._borderColorDefendedEmbargo=e.defendedBorderColors(this._borderColorEmbargo)}refreshColors(){this.computeColors()}applyUpdate(e){Fi(this.state,e),Ii.emojis()||(this.state.outgoingEmojis=[])}setEmbargoSmallIDs(e){this.state.embargoes=e}territoryColor(e){return e===void 0||this.decoder===void 0||this.decoder.isPrimary(this.game.x(e),this.game.y(e))?this._territoryColor:this._borderColor}structureColors(){return this._structureColors}railColor(){return this._railColor}borderColor(e,t=!1){if(e===void 0)return this._borderColor;let{hasEmbargo:n,hasFriendly:r}=this.borderRelationFlags(e),i,a;if(n?(i=this._borderColorEmbargo,a=this._borderColorDefendedEmbargo):r?(i=this._borderColorFriendly,a=this._borderColorDefendedFriendly):(i=this._borderColorNeutral,a=this._borderColorDefendedNeutral),!t)return i;let o=this.game.x(e),s=this.game.y(e);return o%2==0&&s%2==0||s%2==1&&o%2==1?a.light:a.dark}borderRelationFlags(e){let t=this.smallID(),n=!1,r=!1;for(let i of this.game.neighbors(e)){if(!this.game.hasOwner(i))continue;let e=this.game.owner(i);if(!(!e.isPlayer()||e.smallID()===t)){if(this.hasEmbargo(e)){n=!0;break}(this.isFriendly(e)||e.isFriendly(this))&&(r=!0)}}return{hasEmbargo:n,hasFriendly:r}}async actions(e,t){return this.game.worker.playerInteraction(this.id(),e&&this.game.x(e),e&&this.game.y(e),t)}async buildables(e,t){return this.game.worker.playerBuildables(this.id(),e&&this.game.x(e),e&&this.game.y(e),t)}async borderTiles(){return this.game.worker.playerBorderTiles(this.id())}outgoingAttacks(){return this.state.outgoingAttacks}incomingAttacks(){return this.state.incomingAttacks}async attackClusteredPositions(e){return this.game.worker.attackClusteredPositions(this.smallID(),e)}units(...e){let t=this.game.unitsOwnedBy(this.smallID());return e.length===0?t.filter(e=>this.game.isUnitVisible(e)):t.filter(t=>e.includes(t.type())&&this.game.isUnitVisible(t))}readyMissileCount(){return this.units(h.MissileSilo).reduce((e,t)=>t.isUnderConstruction()?e:e+Math.max(0,t.level()-t.missileTimerQueue().length),0)}nameLocation(){return this.nameData}smallID(){return this.state.smallID}name(){return this.anonymousName!==null&&Ii.anonymousNames()?this.anonymousName:this.static.name}displayName(){return this.anonymousName!==null&&Ii.anonymousNames()?this.anonymousName:this.static.displayName}clanTag(){return this.anonymousName!==null&&Ii.anonymousNames()?null:this.static.clanTag}clientID(){return this.static.clientID}id(){return this.static.id}team(){return this.static.team}type(){switch(this.static.playerType){case ct.Human:return t.Human;case ct.Bot:return t.Bot;case ct.Nation:return t.Nation;default:return t.Bot}}isAlive(){return this.state.isAlive}killedBy(){return this.state.killedBy}deathPosition(){return this.state.deathPosition}isPlayer(){return!0}numTilesOwned(){return this.state.tilesOwned}allies(){return this.state.allies.map(e=>this.game.playerBySmallID(e))}targets(){return this.state.targets.map(e=>this.game.playerBySmallID(e))}gold(){return BigInt(this.state.gold)}tradeGold(){return this.state.tradeGold}trainGold(){return this.state.trainGold}piracyGold(){return this.state.piracyGold}goldEarned(){return this.state.goldEarned}oil(){return this.state.oil}gas(){return this.state.gas}uranium(){return this.state.uranium}troops(){return this.state.troops}totalUnitLevels(e){return this.units(e).filter(e=>!e.isUnderConstruction()).map(e=>e.level()).reduce((e,t)=>e+t,0)}isMe(){return this.smallID()===this.game.myPlayer()?.smallID()}isLobbyCreator(){return this.static.isLobbyCreator}isAlliedWith(e){return this.state.allies.some(t=>e.smallID()===t)}isOnSameTeam(e){return this.static.team!==null&&this.static.team===e.static.team}isFriendly(e){return this.isAlliedWith(e)||this.isOnSameTeam(e)}isRequestingAllianceWith(e){return this.state.outgoingAllianceRequests.some(t=>e.id()===t)}alliances(){return this.state.alliances}hasEmbargoAgainst(e){return this.state.embargoes.includes(e.smallID())}hasEmbargo(e){return this.hasEmbargoAgainst(e)||e.hasEmbargoAgainst(this)}profile(){return this.game.worker.playerProfile(this.smallID())}bestTransportShipSpawn(e){return this.game.worker.transportShipSpawn(this.id(),e)}transitiveTargets(){let e=[];for(let t of this.state.targets)e.push(this.game.playerBySmallID(t));for(let t of this.state.allies){let n=this.game.playerBySmallID(t);for(let t of n.state.targets)e.push(this.game.playerBySmallID(t))}let t=this.static.team;if(t!==null){for(let n of this.game.playerViews())if(n!==this&&n.static.team===t)for(let t of n.state.targets)e.push(this.game.playerBySmallID(t))}return e}hasTransitiveTarget(e){if(this.state.targets.includes(e))return!0;for(let t of this.state.allies){let n=this.game.playerBySmallID(t);if(n&&n.state.targets.includes(e))return!0}let t=this.static.team;if(t!==null){for(let n of this.game.playerViews())if(n!==this&&n.static.team===t&&n.state.targets.includes(e))return!0}return!1}isTraitor(){return this.state.isTraitor}getTraitorRemainingTicks(){return this.state.traitorRemainingTicks}inDoomsdayClock(){return this.state.inDoomsdayClock}isDecaying(){return this.state.isDecaying}doomsdayClockTicks(){return this.inDoomsdayClock()?this.game.ticks()-this.state.markedDoomsdayClockTick:0}betrayals(){return this.state.betrayals}outgoingEmojis(){return this.state.outgoingEmojis}tradeOffer(){return this.state.tradeOffer}hasSpawned(){return this.state.hasSpawned}isDisconnected(){return this.state.isDisconnected}lastDeleteUnitTick(){return this.state.lastDeleteUnitTick}deleteUnitCooldown(){return Math.max(0,this.game.config().deleteUnitCooldown()-(this.game.ticks()+1-this.lastDeleteUnitTick()))/10}};function Bi(e){switch(e){case nt.Engine:return v.Engine;case nt.TailEngine:return v.TailEngine;case nt.Carriage:return v.Carriage;default:return}}var Vi=class{constructor(e,t){this.gameView=e,this._wasUpdated=!0,this.lastPos=[],this.state=vt(t),this._warshipState=t.warshipState,this._transportShipState=t.transportShipState,this._nukeState=t.nukeState,this.lastPos.push(t.pos),this._createdAt=this.gameView.ticks(),this.state.underConstruction&&(this.state.constructionStartTick=this._createdAt)}createdAt(){return this._createdAt}wasUpdated(){return this._wasUpdated}lastTiles(){return this.lastPos}lastTile(){return this.lastPos.length===0?this.state.pos:this.lastPos[0]}update(e){this.lastPos.push(e.pos),this._wasUpdated=!0;let t=this.state.underConstruction;qt(this.state,e),this._warshipState=e.warshipState,this._transportShipState=e.transportShipState,this._nukeState=e.nukeState,this.state.underConstruction&&!t?this.state.constructionStartTick=this.gameView.ticks():this.state.underConstruction||(this.state.constructionStartTick=null)}applyDerivedPosition(e){let t=this.state.pos;this.lastPos.push(e),this._wasUpdated=!0,this.state.lastPos=t,this.state.pos=e}applyDerivedRest(){this.state.lastPos=this.state.pos}id(){return this.state.id}targetable(){return this.state.targetable}markedForDeletion(){return this.state.markedForDeletion}type(){return this.state.unitType}troops(){return this.state.troops}warshipState(){if(this._warshipState===void 0)throw Error(`warshipState called on non-warship unit`);return this._warshipState}updateWarshipState(e){throw Error(`updateWarshipState is not supported on UnitView`)}isInCombat(){return this._warshipState?.isInCombat??!1}touch(){throw Error(`touch is not supported on UnitView`)}transportShipState(){return this._transportShipState??{isRetreating:!1,troops:0}}updateTransportShipState(e){throw Error(`updateTransportShipState is not supported on UnitView`)}nukeState(){if(this._nukeState===void 0)throw Error(`nukeState called on non-nuke unit`);return this._nukeState}updateNukeState(e){throw Error(`updateNukeState is not supported on UnitView`)}tile(){return this.state.pos}owner(){return this.gameView.playerBySmallID(this.state.ownerID)}isActive(){return this.state.isActive}reachedTarget(){return this.state.reachedTarget}hasHealth(){return this.state.health!==null}health(){return this.state.health??0}veterancy(){return this.state.veterancy}recordKill(e){throw Error(`recordKill is not supported on UnitView`)}recordTradeCapture(){throw Error(`recordTradeCapture is not supported on UnitView`)}isUnderConstruction(){return this.state.underConstruction}isInCooldown(){return this.state.missileTimerQueue.length===this.state.level}targetUnitId(){return this.state.targetUnitId??void 0}targetTile(){return this.state.targetTile??void 0}missileReadinesss(){let e=this.state.level,t=this.state.missileTimerQueue.length;if(t===0)return 1;let n=e-t;if(n===0&&e>1)return 0;let r=n/e,i=this.state.unitType===h.SAMLauncher?this.gameView.config().SAMCooldown():this.gameView.config().SiloCooldown();for(let t of this.state.missileTimerQueue){let n=(this.gameView.ticks()-t)/i/e;r+=n}return r}level(){return this.state.level}hasTrainStation(){return this.state.hasTrainStation}trainType(){return Bi(this.state.trainType)}isLoaded(){return this.state.loaded??void 0}missileTimerQueue(){return this.state.missileTimerQueue}missilesStored(){return this.type()===h.Arsenal?this.state.missilesStored??0:0}missileCapacity(){return this.type()===h.Arsenal?10*this.level():0}};function Hi(){return new F().graphicsOverrides().cosmetics??{}}var Ui=class{constructor(e,t,n,r,i,a,o,s){this.worker=e,this._config=t,this._mapData=n,this._myClientID=r,this._myUsername=i,this._myClanTag=a,this._gameID=o,this.startTick=null,this.smallIDToID=new Map,this._players=new Map,this._units=new Map,this._playerStates=new Map,this._unitStates=new Map,this._visibleUnitStates=new Map,this._nextVisibleUnitStates=new Map,this._teams=new Map,this._teamClanTags=null,this.updatedTiles=[],this.updatedTerrainTiles=[],this.nukeImpactTiles=[],this._unitsByOwner=new Map,this._unitsByOwnerStale=!0,this._names=new Map,this._trailIdsScratch=[],this._structuresDirty=!1,this._firstPopulate=!0,this._myPlayer=null,this._namesDirty=!0,this._relationsDirty=!0,this._clustersDirty=!0,this.motion=new Pi,this.plannedUnits={tileOf:e=>{let t=this._units.get(e);return t?.isActive()?t.tile():void 0},move:(e,t)=>{let n=this._units.get(e);n.applyDerivedPosition(t),this.unitGrid.updateUnitCell(n)},rest:e=>this._units.get(e).applyDerivedRest()},this.toDelete=new Set,this._cosmetics=new Map,this._cosmeticVisibility=Hi(),this._gameOver=!1,this._markedPlayers=null,this._ownSpawnRing=!1,this._map=this._mapData.gameMap,this.lastUpdate=null,this.unitGrid=new ji(this._map),this._cosmetics=new Map(s.map(e=>[e.clientID,e.cosmetics??{}]));let c=this._map.width(),l=this._map.height();this.trailManager=new zt(c,l),this.spiralTrails=new st(c),this.railroadCache=new ot(c,l),this._frame={tick:0,inSpawnPhase:!0,tileState:this._map.tileStateBuffer(),trailState:this.trailManager.getTrailState(),spiralRibbons:this.spiralTrails.getRibbons(),railroadState:this.railroadCache.railroadState,units:this._visibleUnitStates,players:this._playerStates,names:this._names,events:{deadUnits:[],conquestEvents:[],bonusEvents:[]},changedTiles:null,railroadDirty:!1,revealedRailTiles:this.railroadCache.revealedRailTiles,trailDirtyRowMin:0,trailDirtyRowMax:-1,playerStatus:new Map,relationMatrix:new Uint8Array,relationSize:0,relationsDirty:!1,allianceClusters:new Map,nukeTelegraphs:[],attackRings:[],structuresDirty:!1}}isOnEdgeOfMap(e){return this._map.isOnEdgeOfMap(e)}updatesSinceLastTick(){return this.lastUpdate?.updates??null}motionPlans(){return this.motion.gridPlans()}motionPlannedUnitIds(){return this.motion.plannedUnitIds()}isCatchingUp(){return(this.lastUpdate?.pendingTurns??0)>1}update(e){this._unitsByOwnerStale=!0,this.toDelete.forEach(e=>{this._units.delete(e),this._unitStates.delete(e)}),this.toDelete.clear(),this.lastUpdate=e,this.updatedTiles=[],this.updatedTerrainTiles=[];let n=this.lastUpdate.packedTileUpdates;for(let e=0;e+1<n.length;e+=2){let t=n[e],r=n[e+1],i=this.updateTile(t,r);this.updatedTiles.push(t),i&&this.updatedTerrainTiles.push(t)}let r=e.packedNukeImpacts;if(this.nukeImpactTiles=r?Array.from(r):[],e.packedMotionPlans&&this.motion.applyRecords(Ai(e.packedMotionPlans)),e.updates===null)throw Error(`lastUpdate.updates not initialized`);let i=e.updates[R.SpawnPhaseEnd][0];i&&(this.startTick=i.startTick),e.updates[R.Win].length>0&&(this._gameOver=!0);let a=g(this._myUsername,this._myClanTag);if(e.playerNameViewData!==void 0){for(let t in e.playerNameViewData){let n=this._players.get(t);n!==void 0&&n.state.isAlive&&(n.nameData=e.playerNameViewData[t])}this._namesDirty=!0}e.updates[R.Player].forEach(n=>{let r=this._players.get(n.id);if(n.clientID!==void 0&&n.clientID===this._myClientID&&(n.name=this._myUsername,n.displayName=a,n.clanTag=this._myClanTag),n.smallID!==void 0&&this.smallIDToID.set(n.smallID,n.id),n.allies!==void 0&&(this._relationsDirty=!0,this._clustersDirty=!0),n.embargoes!==void 0&&(this._relationsDirty=!0),r!==void 0){r.applyUpdate(n);let t=e.playerNameViewData?.[n.id];t!==void 0&&(r.nameData=t)}else{let r=new zi(this,n,e.playerNameViewData?.[n.id],this._cosmetics.get(n.clientID??``)??(n.playerType===t.Nation&&n.nationFlag?{flag:`/flags/${n.nationFlag}.svg`}:void 0)??{});this._players.set(n.id,r),this._playerStates.set(n.smallID,r.state);let i=r.team();i!==null&&this._teams.set(n.smallID,i),this._namesDirty=!0,this._relationsDirty=!0,this._clustersDirty=!0,this._teamClanTags=null}}),e.updates[R.Player].forEach(e=>{if(e.embargoes===void 0)return;let t=this._players.get(e.id);if(t===void 0)return;let n=gt(e.embargoes,e=>this._players.get(e)?.smallID());t.setEmbargoSmallIDs(n)});let o=e=>this._playerStates.get(e);rr(e.packedPlayerUpdates,o),fn(e.packedAttackUpdates,o),this._myClientID&&(this._myPlayer??=this.playerByClientID(this._myClientID));for(let e of this._units.values())e._wasUpdated=!1,e.lastPos.length>1&&(e.lastPos=e.lastPos.slice(-1));e.updates[R.Unit].forEach(e=>{let t=this._units.get(e.id),n=it.has(e.unitType);if(t!==void 0){n&&(t.state.ownerID!==e.ownerID||t.state.level!==e.level||t.state.isActive!==e.isActive||t.state.underConstruction&&!(e.underConstruction??!1))&&(this._structuresDirty=!0);let r=this.motion.hasGridPlan(e.id),i=t.state.pos,a=t.state.lastPos;t.update(e),r&&(t.state.pos=i,t.state.lastPos=a,t.lastPos.pop())}else t=new Vi(this,e),this._units.set(e.id,t),this._unitStates.set(e.id,t.state),this.unitGrid.addUnit(t),n&&(this._structuresDirty=!0);e.isActive?t.tile()!==t.lastTile()&&this.unitGrid.updateUnitCell(t):this.unitGrid.removeUnit(t),t.isActive()||(this.toDelete.add(t.id()),this.motion.unitRemoved(t.id()))}),this.motion.advance(e.tick,this.plannedUnits),this.refreshVisibleUnits(),this.populateFrame(e)}isUnitVisible(e){return!0}refreshVisibleUnits(){let e=this._nextVisibleUnitStates;e.clear();for(let t of this._units.values())t.isActive()&&e.set(t.id(),t.state);let t=e.size!==this._visibleUnitStates.size;if(!t){for(let[n,r]of e)if(this._visibleUnitStates.get(n)!==r){t=!0;break}}this._visibleUnitStates.clear();for(let[t,n]of e)this._visibleUnitStates.set(t,n);t&&(this._structuresDirty=!0)}populateFrame(e){this.trailManager.clearDirtyRows(),this.railroadCache.apply(e),this._trailIdsScratch.length=0;for(let e of this._units.values())e.isActive()&&rt.has(e.type())&&this._trailIdsScratch.push(e.id());if(this.trailManager.update(this._unitStates,this._trailIdsScratch),this.spiralTrails.update(this._unitStates,this._trailIdsScratch),this._namesDirty){this._namesDirty=!1,this._names.clear();for(let e of this._players.values())this._names.set(e.id(),{playerID:e.id(),x:e.nameData?.x??0,y:e.nameData?.y??0,size:e.nameData?.size??0})}this.buildFrameEvents(e);let t=this._frame;if(t.tick=e.tick,t.inSpawnPhase=this.startTick===null,t.railroadDirty=this.railroadCache.railroadDirty,t.trailDirtyRowMin=this.trailManager.dirtyRowMin,t.trailDirtyRowMax=this.trailManager.dirtyRowMax,t.playerStatus=ft(this._playerStates,this._visibleUnitStates,{localPlayerSmallID:this._myPlayer?.smallID()??0,localPlayerID:this._myPlayer?.id()??``,tileState:this._map.tileStateBuffer(),tick:e.tick,allianceDuration:this._config.allianceDuration(),isTransitiveTarget:e=>(this._markedPlayers?.has(e)??!1)||(this._myPlayer?.hasTransitiveTarget(e)??!1),doomsdayClockWarnTicks:this._config.doomsdayClockConfig().warnSeconds*10}),this._relationsDirty){this._relationsDirty=!1;let e=An(this._playerStates,this._teams);t.relationMatrix=e.matrix,t.relationSize=e.size,t.relationsDirty=!0}else t.relationsDirty=!1;this._clustersDirty&&(this._clustersDirty=!1,t.allianceClusters=Ft(this._playerStates)),t.nukeTelegraphs=On(this._unitStates,this._map.width(),this._myPlayer?.smallID()??0,t.relationMatrix,t.relationSize,this.motion.gridPlans(),e.tick),t.attackRings=this._myPlayer?Mi(this._unitStates,this._map.width(),this._myPlayer.smallID()):[],t.structuresDirty=this._structuresDirty,this._firstPopulate?(t.changedTiles=null,t.structuresDirty=!0,this._firstPopulate=!1):t.changedTiles=this.updatedTiles,this.railroadCache.clearDirty(),this._structuresDirty=!1}buildFrameEvents(e){let t=this._frame.events;t.deadUnits.length=0,t.conquestEvents.length=0,t.bonusEvents.length=0;for(let n of e.updates[R.Unit]??[])n.isActive||t.deadUnits.push({unitType:n.unitType,pos:n.pos,reachedTarget:n.reachedTarget,ownerSmallID:n.ownerID});let n=this._myPlayer?.id();for(let r of e.updates[R.ConquestEvent]??[]){if(r.conquerorId!==n)continue;let e=this._players.get(r.conqueredId);if(e===void 0)continue;let i=e.nameLocation();i!==void 0&&t.conquestEvents.push({x:i.x,y:i.y,gold:Number(r.gold)})}for(let n of e.updates[R.BonusEvent]??[]){let e=this._players.get(n.player);e!==void 0&&t.bonusEvents.push({playerID:n.player,smallID:e.smallID(),tile:n.tile,gold:Number(n.gold),troops:n.troops})}}frameData(){return this._frame}setNukeTrailSpiral(e,t){this.spiralTrails.setParams(e,t)}clearNukeTrailSpiral(e){this.spiralTrails.clearParams(e)}recentlyUpdatedTiles(){return this.updatedTiles}recentlyUpdatedTerrainTiles(){return this.updatedTerrainTiles}recentlyNukedTiles(){return this.nukeImpactTiles}nearbyUnits(e,t,n,r){return this.unitGrid.nearbyUnits(e,t,n,r).filter(({unit:e})=>this.isUnitVisible(e))}hasUnitNearby(e,t,n,r,i){return this.unitGrid.hasUnitNearby(e,t,n,r,i)}anyUnitNearby(e,t,n,r,i,a){return this.unitGrid.anyUnitNearby(e,t,n,r,i,a)}myClientID(){return this._myClientID}myPlayer(){return this._myPlayer}player(e){let t=this._players.get(e);if(t===void 0)throw Error(`player id ${e} not found`);return t}players(){return Array.from(this._players.values())}teamClanTag(e){if(!e)return null;if(this._teamClanTags===null){if(this._players.size===0)return null;this._teamClanTags=this.initTeamClanTags()}return this._teamClanTags.get(e)??null}invalidateTeamClanTags(){this._teamClanTags=null}initTeamClanTags(){let e=new Map;for(let t of this._players.values()){let n=t.team();if(n){let r=e.get(n);r||(r=[],e.set(n,r)),r.push(t)}}let t=new Map;for(let[n,r]of e.entries())t.set(n,E(r));return t}refreshPlayerColors(){for(let e of this._players.values())e.refreshColors()}cosmeticVisibility(){return this._cosmeticVisibility}refreshPlayerCosmetics(){this._cosmeticVisibility=Hi();for(let e of this._players.values())e.refreshCosmetics()}playerBySmallID(e){if(e===0)return new Lt;let t=this.smallIDToID.get(e);if(t===void 0)throw Error(`small id ${e} not found`);return this.player(t)}playerByClientID(e){let t=Array.from(this._players.values()).filter(t=>t.clientID()===e)[0]??null;return t===null?null:t}hasPlayer(e){return!1}playerViews(){return Array.from(this._players.values())}owner(e){return this.playerBySmallID(this.ownerID(e))}ticks(){return this.lastUpdate===null?0:this.lastUpdate.tick}gameOver(){return this._gameOver}inSpawnPhase(){return this.startTick===null}isSpawnImmunityActive(){return this.inSpawnPhase()||this.ticksSinceStart()<this._config.spawnImmunityDuration()}isNationSpawnImmunityActive(){return this.inSpawnPhase()||this.ticksSinceStart()<this._config.nationSpawnImmunityDuration()}elapsedGameSeconds(){return this.ticksSinceStart()/10}ticksSinceStart(){return this.inSpawnPhase()?0:Math.max(0,this.ticks()-this.startTick)}config(){return this._config}isSpectator(){return!this.myPlayer()?.isAlive()||this._config.isReplay()}units(...e){return e.length===0?Array.from(this._units.values()).filter(e=>e.isActive()&&this.isUnitVisible(e)):Array.from(this._units.values()).filter(t=>t.isActive()&&e.includes(t.type())&&this.isUnitVisible(t))}unitsOwnedBy(e){if(this._unitsByOwnerStale){this._unitsByOwnerStale=!1,this._unitsByOwner.clear();for(let e of this._units.values()){if(!e.isActive())continue;let t=e.state.ownerID,n=this._unitsByOwner.get(t);n===void 0?this._unitsByOwner.set(t,[e]):n.push(e)}}return this._unitsByOwner.get(e)??[]}unit(e){let t=this._units.get(e);return t&&this.isUnitVisible(t)?t:void 0}unitInfo(e){return this._config.unitInfo(e)}unitStates(){return this._unitStates}playerStates(){return this._playerStates}ref(e,t){return this._map.ref(e,t)}isValidRef(e){return this._map.isValidRef(e)}x(e){return this._map.x(e)}y(e){return this._map.y(e)}cell(e){return this._map.cell(e)}width(){return this._map.width()}height(){return this._map.height()}numLandTiles(){return this._map.numLandTiles()}waterVersion(){return this._map.waterVersion()}layers(){return this._mapData.layers??[]}isValidCoord(e,t){return this._map.isValidCoord(e,t)}isLand(e){return this._map.isLand(e)}isImpassable(e){return this._map.isImpassable(e)}isOceanShore(e){return this._map.isOceanShore(e)}isOcean(e){return this._map.isOcean(e)}isShoreline(e){return this._map.isShoreline(e)}magnitude(e){return this._map.magnitude(e)}terrainByte(e){return this._map.terrainByte(e)}setWater(e){this._map.setWater(e)}setShorelineBit(e){this._map.setShorelineBit(e)}clearShorelineBit(e){this._map.clearShorelineBit(e)}setOcean(e){this._map.setOcean(e)}setMagnitude(e,t){this._map.setMagnitude(e,t)}ownerID(e){return this._map.ownerID(e)}hasOwner(e){return this._map.hasOwner(e)}setOwnerID(e,t){return this._map.setOwnerID(e,t)}hasFallout(e){return this._map.hasFallout(e)}setFallout(e,t){return this._map.setFallout(e,t)}isBorder(e){return this._map.isBorder(e)}neighbors(e){return this._map.neighbors(e)}forEachNeighbor(e,t){this._map.forEachNeighbor(e,t)}neighbors4(e,t){return this._map.neighbors4(e,t)}neighbors8(e,t){return this._map.neighbors8(e,t)}forEachNeighborWithDiag(e,t){this._map.forEachNeighborWithDiag(e,t)}isWater(e){return this._map.isWater(e)}isShore(e){return this._map.isShore(e)}cost(e){return this._map.cost(e)}terrainType(e){return this._map.terrainType(e)}forEachTile(e){return this._map.forEachTile(e)}manhattanDist(e,t){return this._map.manhattanDist(e,t)}euclideanDistSquared(e,t){return this._map.euclideanDistSquared(e,t)}circleSearch(e,t,n){return this._map.circleSearch(e,t,n)}bfs(e,t){return this._map.bfs(e,t)}tileState(e){return this._map.tileState(e)}tileStateBuffer(){return this._map.tileStateBuffer()}updateTile(e,t){return this._map.updateTile(e,t)}numTilesWithFallout(){return this._map.numTilesWithFallout()}gameID(){return this._gameID}focusedPlayer(){return this.myPlayer()}setMarkedPlayers(e){this._markedPlayers=e}markedPlayers(){return this._markedPlayers}setOwnSpawnRing(e){this._ownSpawnRing=e}ownSpawnRing(){return this._ownSpawnRing}},Wi=S(`sprites/atombomb.png`),Gi=S(`sprites/hydrogenbomb.png`),Ki=S(`sprites/mirv2.png`),qi=S(`sprites/samMissile.png`),Ji=S(`sprites/tradeship.png`),Yi=S(`sprites/trainCarriage.png`),Xi=S(`sprites/trainCarriageLoaded.png`),Zi=S(`sprites/trainEngine.png`),Qi=S(`sprites/transportship.png`),$i=S(`sprites/warship.png`),ea={Engine:`Engine`,Carriage:`Carriage`,LoadedCarriage:`LoadedCarriage`},ta={[h.TransportShip]:Qi,[h.Warship]:$i,[h.SAMMissile]:qi,[h.BallisticMissile]:qi,[h.AtomBomb]:Wi,[h.HydrogenBomb]:Gi,[h.TradeShip]:Ji,[h.MIRV]:Ki,[ea.Engine]:Zi,[ea.Carriage]:Yi,[ea.LoadedCarriage]:Xi},na=new Map,ra=async()=>{let e=Object.entries(ta),t=e.length,n=0;await Promise.all(e.map(async([e,r])=>{let i=e;if(!r||r===``){console.warn(`No sprite URL for ${i}, skipping...`);return}try{let e=new Image;e.crossOrigin=`anonymous`,e.src=r,await new Promise((t,n)=>{e.onload=()=>t(),e.onerror=e=>n(e)});let a=await createImageBitmap(e);na.set(i,a),n++,n===t&&console.log(`All sprites loaded.`)}catch(e){console.warn(`Failed to load sprite for ${i}:`,e)}}))};function ia(e){switch(e.trainType()){case v.Engine:case v.TailEngine:return ea.Engine;case v.Carriage:default:return e.isLoaded()?ea.LoadedCarriage:ea.Carriage}}var aa=e=>{let t=e.type();if(t===h.Train){let t=ia(e);return na.get(t)??null}return na.get(t)??null},oa=new Map,sa=(e,t,n,r)=>{let i=document.createElement(`canvas`);i.width=e.width,i.height=e.height;let a=i.getContext(`2d`);a.drawImage(e,0,0);let o=a.getImageData(0,0,i.width,i.height),s=o.data,c=t.toRgb(),l=n.toRgb(),u=r.toRgb();for(let e=0;e<s.length;e+=4){let t=s[e],n=s[e+1],r=s[e+2];t===180&&n===180&&r===180?(s[e]=c.r,s[e+1]=c.g,s[e+2]=c.b):t===70&&n===70&&r===70?(s[e]=l.r,s[e+1]=l.g,s[e+2]=l.b):t===130&&n===130&&r===130&&(s[e]=u.r,s[e+1]=u.g,s[e+2]=u.b)}return a.putImageData(o,0,0),i};function ca(e,t,n){let r=e.owner();return`${`${e.type()}-${e.trainType()}-${e.isLoaded()}`}-${r.id()}-${t.toRgbString()}-${n.toRgbString()}`}var la=(e,t,n,r)=>{let i=n??e.owner().territoryColor(),a=r??e.owner().borderColor(),o=t.spawnHighlightColor(),s=ca(e,i,a);if(oa.has(s))return oa.get(s);let c=aa(e);if(c===null)throw Error(`Failed to load sprite for ${e.type()}`);let l=sa(c,i,a,o);return oa.set(s,l),l},ua=S(`images/SoldierIcon.svg`),da=S(`images/SwordIcon.svg`),H=class extends M{constructor(...e){super(...e),this.active=!1,this.incomingBoatIDs=new Set,this.spriteDataURLCache=new Map,this._isVisible=!1,this.incomingAttacks=[],this.outgoingAttacks=[],this.outgoingLandAttacks=[],this.outgoingBoats=[],this.incomingBoats=[]}createRenderRoot(){return this}init(){}tick(){this.active=!0,!this._isVisible&&!this.game.inSpawnPhase()&&(this._isVisible=!0);let e=this.game.myPlayer();if(!e||!e.isAlive()){this._isVisible&&=!1;return}let n=this.game.updatesSinceLastTick();if(n)for(let t of n[R.UnitIncoming])t.playerID===e.smallID()&&t.messageType===o.NAVAL_INVASION_INBOUND&&this.incomingBoatIDs.add(t.unitID);let r=[];for(let e of this.incomingBoatIDs){let t=this.game.unit(e);t&&t.isActive()&&t.type()===h.TransportShip?r.push(t):this.incomingBoatIDs.delete(e)}this.incomingBoats=r,this.incomingAttacks=e.incomingAttacks().filter(e=>this.game.playerBySmallID(e.attackerID).type()!==t.Bot),this.outgoingAttacks=e.outgoingAttacks().filter(e=>e.targetID!==0),this.outgoingLandAttacks=e.outgoingAttacks().filter(e=>e.targetID===0),this.outgoingBoats=e.units().filter(e=>e.type()===h.TransportShip),this.requestUpdate()}renderButton(e){let{content:t,onClick:n,className:r=``,disabled:i=!1,translate:a=!0,hidden:o=!1}=e;return o?A``:A`
      <button
        class="${r}"
        @click=${n}
        ?disabled=${i}
        ?translate=${a}
      >
        ${t}
      </button>
    `}emitCancelAttackIntent(e){this.game.myPlayer()&&this.eventBus.emit(new Zt(e))}emitBoatCancelIntent(e){this.game.myPlayer()&&this.eventBus.emit(new en(e))}emitGoToPlayerEvent(e){let t=this.game.playerBySmallID(e);this.eventBus.emit(new pn(t))}getBoatSpriteDataURL(e){let t=`boat-${e.owner().id()}`,n=this.spriteDataURLCache.get(t);if(n)return n;try{let n=la(e,yr.current()).toDataURL();return this.spriteDataURLCache.set(t,n),n}catch{return``}}async attackWarningOnClick(e){let t=this.game.playerBySmallID(e.attackerID);if(t!==void 0){if(t instanceof zi){let n=(await t.attackClusteredPositions(e.id))[0]?.positions[0];n?this.eventBus.emit(new ir(n.x,n.y)):this.emitGoToPlayerEvent(e.attackerID)}}else this.emitGoToPlayerEvent(e.attackerID)}handleRetaliate(e){let t=this.game.playerBySmallID(e.attackerID);if(!t)return;let n=this.game.myPlayer();if(!n)return;let r=Math.min(e.troops,this.uiState.attackRatio*n.troops());this.eventBus.emit(new ut(t.id(),r))}renderIncomingAttacks(){return this.incomingAttacks.length===0?A``:this.incomingAttacks.map(e=>A`
        <div
          class="flex items-center gap-0.5 w-full bg-gray-800/92 backdrop-blur-sm sm:rounded-lg px-1.5 py-0.5 overflow-hidden"
        >
          ${this.renderButton({content:A`<span class="inline-flex items-center"
                ><img
                  src="${ua}"
                  class="h-4 w-4"
                  style="filter: brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4551%) hue-rotate(348deg) brightness(89%) contrast(97%)"
                />↓</span
              ><span class="ml-1">${I(e.troops)}</span>
              <span class="truncate ml-1"
                >${this.game.playerBySmallID(e.attackerID)?.displayName()}</span
              >
              ${e.retreating?`(${N(`events_display.retreating`)}...)`:``} `,onClick:()=>this.attackWarningOnClick(e),className:`text-left text-red-400 inline-flex items-center gap-0.5 lg:gap-1 min-w-0`,translate:!1})}
          ${e.retreating?``:this.renderButton({content:A`<img
                  src="${da}"
                  class="h-4 w-4"
                  style="filter: brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(4551%) hue-rotate(348deg) brightness(89%) contrast(97%)"
                />`,onClick:()=>this.handleRetaliate(e),className:`ml-auto inline-flex items-center justify-center cursor-pointer bg-red-900/50 hover:bg-red-800/70 sm:rounded-lg px-1.5 py-1 border border-red-700/50`,translate:!1})}
        </div>
      `)}renderOutgoingAttacks(){return this.outgoingAttacks.length===0?A``:this.outgoingAttacks.map(e=>A`
        <div
          class="flex items-center gap-0.5 w-full bg-gray-800/92 backdrop-blur-sm sm:rounded-lg px-1.5 py-0.5 overflow-hidden"
        >
          ${this.renderButton({content:A`<span class="inline-flex items-center"
                ><img
                  src="${ua}"
                  class="h-4 w-4"
                  style="filter: brightness(0) saturate(100%) invert(62%) sepia(80%) saturate(500%) hue-rotate(175deg) brightness(100%)"
                />↑</span
              ><span class="ml-1">${I(e.troops)}</span>
              <span class="truncate ml-1"
                >${this.game.playerBySmallID(e.targetID)?.displayName()}</span
              > `,onClick:async()=>this.attackWarningOnClick(e),className:`text-left text-aquarius inline-flex items-center gap-0.5 lg:gap-1 min-w-0`,translate:!1})}
          ${e.retreating?A`<span class="ml-auto truncate text-aquarius"
                >(${N(`events_display.retreating`)}...)</span
              >`:this.renderButton({content:`❌`,onClick:()=>this.emitCancelAttackIntent(e.id),className:`ml-auto text-left shrink-0`,disabled:e.retreating})}
        </div>
      `)}renderOutgoingLandAttacks(){return this.outgoingLandAttacks.length===0?A``:this.outgoingLandAttacks.map(e=>A`
        <div
          class="flex items-center gap-0.5 w-full bg-gray-800/92 backdrop-blur-sm sm:rounded-lg px-1.5 py-0.5 overflow-hidden"
        >
          ${this.renderButton({content:A`<span class="inline-flex items-center"
                ><img
                  src="${ua}"
                  class="h-4 w-4"
                  style="filter: brightness(0) saturate(100%) invert(62%) sepia(80%) saturate(500%) hue-rotate(175deg) brightness(100%)"
                />↑</span
              ><span class="ml-1">${I(e.troops)}</span>
              ${N(`help_modal.ui_wilderness`)}`,className:`text-left text-aquarius inline-flex items-center gap-0.5 lg:gap-1 min-w-0`,translate:!1})}
          ${e.retreating?A`<span class="ml-auto truncate text-aquarius"
                >(${N(`events_display.retreating`)}...)</span
              >`:this.renderButton({content:`❌`,onClick:()=>this.emitCancelAttackIntent(e.id),className:`ml-auto text-left shrink-0`,disabled:e.retreating})}
        </div>
      `)}getBoatTargetName(e){let t=e.targetTile();if(t===void 0)return``;let n=this.game.ownerID(t);return n===0?N(`help_modal.ui_wilderness`):this.game.playerBySmallID(n)?.displayName()??``}renderBoatIcon(e){let t=this.getBoatSpriteDataURL(e);return t?A`<img
      src="${t}"
      class="h-5 w-5 inline-block"
      style="image-rendering: pixelated"
    />`:A``}getBoatETA(e){let t=this.game.motionPlans().get(e.id());if(!t)return``;let n=t.path.length*t.ticksPerStep,r=t.startTick+n-this.game.ticks();if(r<=0)return`0s`;let i=r*this.game.config().msPerTick(),a=Math.ceil(i/1e3),o=Math.floor(a/60),s=a%60;return(o?`${o}m`:``)+(s?`${s}s`:``)}renderBoats(){return this.outgoingBoats.length===0?A``:this.outgoingBoats.map(e=>A`
        <div
          class="flex items-center gap-0.5 w-full bg-gray-800/92 backdrop-blur-sm sm:rounded-lg px-1.5 py-0.5 overflow-hidden"
        >
          ${this.renderButton({content:A`${this.renderBoatIcon(e)}
              <span class="inline-block min-w-[3rem] text-right"
                >${I(e.troops())}</span
              >
              <span class="truncate text-xs ml-1"
                >${this.getBoatTargetName(e)}</span
              >
              <span class="text-xs ml-1 text-slate-300"
                >${this.getBoatETA(e)}</span
              >`,onClick:()=>this.eventBus.emit(new Jt(e)),className:`text-left text-aquarius inline-flex items-center gap-0.5 lg:gap-1 min-w-0`,translate:!1})}
          ${e.transportShipState().isRetreating?A`<span class="ml-auto truncate text-aquarius"
                >(${N(`events_display.retreating`)}...)</span
              >`:this.renderButton({content:`❌`,onClick:()=>this.emitBoatCancelIntent(e.id()),className:`ml-auto text-left shrink-0`,disabled:e.transportShipState().isRetreating})}
        </div>
      `)}renderIncomingBoats(){return this.incomingBoats.length===0?A``:this.incomingBoats.map(e=>A`
        <div
          class="flex items-center gap-0.5 w-full bg-gray-800/92 backdrop-blur-sm sm:rounded-lg px-1.5 py-0.5 overflow-hidden"
        >
          ${this.renderButton({content:A`${this.renderBoatIcon(e)}
              <span class="inline-block min-w-[3rem] text-right"
                >${I(e.troops())}</span
              >
              <span class="truncate text-xs ml-1"
                >${e.owner()?.displayName()}</span
              >
              <span class="text-xs ml-1 text-slate-300"
                >${this.getBoatETA(e)}</span
              >`,onClick:()=>this.eventBus.emit(new Jt(e)),className:`text-left text-red-400 inline-flex items-center gap-0.5 lg:gap-1 min-w-0`,translate:!1})}
        </div>
      `)}render(){return!this.active||!this._isVisible||!(this.outgoingAttacks.length>0||this.outgoingLandAttacks.length>0||this.outgoingBoats.length>0||this.incomingAttacks.length>0||this.incomingBoats.length>0)?A``:A`
      <div
        class="w-full mb-1 mt-1 sm:mt-0 pointer-events-auto grid grid-cols-2 gap-1 text-white text-sm lg:text-base max-h-[7rem] overflow-y-auto"
      >
        ${this.renderOutgoingAttacks()} ${this.renderOutgoingLandAttacks()}
        ${this.renderBoats()} ${this.renderIncomingAttacks()}
        ${this.renderIncomingBoats()}
      </div>
    `}};j([O()],H.prototype,`_isVisible`,void 0),j([O()],H.prototype,`incomingAttacks`,void 0),j([O()],H.prototype,`outgoingAttacks`,void 0),j([O()],H.prototype,`outgoingLandAttacks`,void 0),j([O()],H.prototype,`outgoingBoats`,void 0),j([O()],H.prototype,`incomingBoats`,void 0),H=j([k(`attacks-display`)],H);var fa=[[{unitType:h.AtomBomb,description:`build_menu.desc.atom_bomb`,key:`unit_type.atom_bomb`,countable:!1},{unitType:h.BallisticMissile,description:`build_menu.desc.ballistic_missile`,key:`unit_type.ballistic_missile`,countable:!1},{unitType:h.MIRV,description:`build_menu.desc.mirv`,key:`unit_type.mirv`,countable:!1},{unitType:h.HydrogenBomb,description:`build_menu.desc.hydrogen_bomb`,key:`unit_type.hydrogen_bomb`,countable:!1}],[{unitType:h.Warship,description:`build_menu.desc.warship`,key:`unit_type.warship`,countable:!0},{unitType:h.Port,description:`build_menu.desc.port`,key:`unit_type.port`,countable:!0},{unitType:h.MissileSilo,description:`build_menu.desc.missile_silo`,key:`unit_type.missile_silo`,countable:!0},{unitType:h.SAMLauncher,description:`build_menu.desc.sam_launcher`,key:`unit_type.sam_launcher`,countable:!0},{unitType:h.DefensePost,description:`build_menu.desc.defense_post`,key:`unit_type.defense_post`,countable:!0}],[{unitType:h.City,description:`build_menu.desc.city`,key:`unit_type.city`,countable:!0},{unitType:h.Factory,description:`build_menu.desc.factory`,key:`unit_type.factory`,countable:!0},{unitType:h.OilField,description:`build_menu.desc.oil_field`,key:`unit_type.oil_field`,countable:!0},{unitType:h.GasField,description:`build_menu.desc.gas_field`,key:`unit_type.gas_field`,countable:!0},{unitType:h.UraniumPlant,description:`build_menu.desc.uranium_plant`,key:`unit_type.uranium_plant`,countable:!0},{unitType:h.MissileFactory,description:`build_menu.desc.missile_factory`,key:`unit_type.missile_factory`,countable:!0},{unitType:h.OilStorage,description:`build_menu.desc.oil_storage`,key:`unit_type.oil_storage`,countable:!0},{unitType:h.GasStorage,description:`build_menu.desc.gas_storage`,key:`unit_type.gas_storage`,countable:!0}]],pa=fa.flat(),ma=10,ha=class extends M{constructor(...e){super(...e),this.refreshRequestId=0,this.lastRefreshTick=-1/0,this.refreshInFlight=!1,this.playerBuildables=null,this.filteredBuildTable=fa,this._hidden=!0}init(){this.eventBus.on(Et,e=>{if(!this.game.myPlayer()?.isAlive()||!this._hidden)return;let t=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.game.isValidCoord(t.x,t.y))return;let n=this.game.ref(t.x,t.y);this.showMenu(n)}),this.eventBus.on(yt,()=>this.hideMenu()),this.eventBus.on(Qt,()=>this.hideMenu()),this.eventBus.on(Pt,()=>this.hideMenu())}tick(){this._hidden||this.refresh()}static{this.styles=ue`
    :host {
      display: block;
    }
    .build-menu {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      background: linear-gradient(
        145deg,
        rgba(12, 34, 37, 0.98),
        rgba(5, 17, 21, 0.98)
      );
      border: 1px solid rgba(92, 210, 195, 0.32);
      padding: 20px;
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.68),
        0 0 35px rgba(92, 210, 195, 0.09);
      border-radius: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: min(1000px, 95vw);
      max-height: 95vh;
      overflow: auto;
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
    }
    .build-description {
      font-size: 0.68rem;
      color: #bdd1ce;
      line-height: 1.35;
    }
    .build-fuel-cost {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      font-size: 0.65rem;
      color: #bdd1ce;
      text-align: center;
    }
    .resource-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
    .build-cost .resource-icon {
      width: 18px;
      height: 18px;
      margin-left: 2px;
    }
    .build-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(126px, 1fr));
      gap: 12px;
      width: 100%;
    }
    .build-button {
      position: relative;
      width: 100%;
      min-width: 0;
      min-height: 154px;
      border: 1px solid rgba(179, 224, 217, 0.13);
      background: linear-gradient(
        145deg,
        rgba(24, 53, 54, 0.9),
        rgba(8, 23, 27, 0.96)
      );
      color: #e5edf7;
      border-radius: 17px;
      cursor: pointer;
      transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease,
        filter 0.18s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 13px 9px;
      gap: 7px;
    }
    .build-button:not(:disabled):hover {
      background: linear-gradient(
        155deg,
        rgba(64, 53, 27, 0.92),
        rgba(24, 23, 19, 0.98)
      );
      transform: translateY(-3px);
      border-color: rgba(92, 210, 195, 0.72);
      box-shadow:
        0 10px 26px rgba(0, 0, 0, 0.28),
        0 0 22px rgba(92, 210, 195, 0.16),
        inset 0 1px 0 rgba(255, 255, 255, 0.12);
    }
    .build-button:not(:disabled):active {
      transform: translateY(0) scale(0.98);
    }
    .build-button:disabled {
      background: linear-gradient(
        145deg,
        rgba(21, 30, 32, 0.92),
        rgba(10, 17, 19, 0.96)
      );
      border-color: rgba(255, 255, 255, 0.1);
      cursor: not-allowed;
    }
    .build-button:disabled .build-icon {
      filter: grayscale(0.72) saturate(0.55) brightness(0.78)
        drop-shadow(0 3px 6px rgba(0, 0, 0, 0.42));
    }
    .build-button:disabled .build-cost {
      color: #e6bd68;
    }
    .build-icon {
      display: block;
      width: 58px;
      height: 58px;
      margin-bottom: 3px;
      filter: drop-shadow(0 5px 9px rgba(0, 0, 0, 0.46))
        drop-shadow(0 0 10px rgba(120, 200, 210, 0.16));
      transition:
        filter 0.18s ease,
        transform 0.18s ease;
    }
    .build-button:not(:disabled):hover .build-icon {
      transform: translateY(-1px) scale(1.06);
      filter: drop-shadow(0 7px 11px rgba(0, 0, 0, 0.5))
        drop-shadow(0 0 13px rgba(120, 200, 210, 0.28));
    }
    .build-name {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 0;
      text-align: center;
      line-height: 1.25;
    }
    .build-cost {
      font-size: 13px;
      color: #f3cb78;
      font-weight: 550;
    }
    .hidden {
      display: none !important;
    }
    .build-count-chip {
      position: absolute;
      top: 7px;
      right: 7px;
      background-color: rgba(12, 12, 12, 0.85);
      color: #f4d26e;
      padding: 2px 8px;
      border-radius: 10000px;
      transition: all 0.2s ease;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-content: center;
      border: 1px solid rgba(92, 210, 195, 0.24);
    }
    .build-button:not(:disabled):hover > .build-count-chip {
      background-color: #433716;
      border-color: #5cd2c3;
    }
    .build-button:not(:disabled):active > .build-count-chip {
      background-color: #56461a;
    }
    .build-button:disabled > .build-count-chip {
      background-color: #151515;
      border-color: #33302a;
      cursor: not-allowed;
    }
    .build-count {
      font-weight: bold;
      font-size: 12px;
    }

    @media (max-width: 768px) {
      .build-menu {
        padding: 12px;
        max-height: 80vh;
        width: 94vw;
      }
      .build-button {
        min-height: 120px;
        padding: 8px 5px;
        gap: 4px;
      }
      .build-icon {
        width: 44px;
        height: 44px;
      }
      .build-name {
        font-size: 12px;
        margin-bottom: 3px;
      }
      .build-cost {
        font-size: 11px;
      }
      .build-count {
        font-weight: bold;
        font-size: 10px;
      }
      .build-count-chip {
        padding: 1px 5px;
      }
    }

    @media (max-width: 480px) {
      .build-menu {
        padding: 8px;
        max-height: 70vh;
      }
      .build-row {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 7px;
      }
      .build-button {
        min-height: 102px;
        padding: 7px 4px;
      }
      .build-icon {
        width: 40px;
        height: 40px;
      }
      .build-name {
        font-size: 10px;
        margin-bottom: 2px;
      }
      .build-cost {
        font-size: 9px;
      }
      .build-fuel-cost {
        font-size: 8px;
      }
      .build-count {
        font-weight: bold;
        font-size: 8px;
      }
      .build-count-chip {
        padding: 0 3px;
      }
      .build-button img {
        width: 24px;
        height: 24px;
      }
      .build-cost img {
        width: 10px;
        height: 10px;
      }
    }
  `}canBuildOrUpgrade(e){if(this.game?.myPlayer()===null||this.playerBuildables===null)return!1;let t=this.playerBuildables.find(t=>t.type===e.unitType);return t?t.canBuild!==!1||t.canUpgrade!==!1:!1}cost(e){for(let t of this.playerBuildables??[])if(t.type===e.unitType)return t.cost;return 0n}count(e){let t=this.game?.myPlayer();return t?t.totalUnitLevels(e.unitType).toString():`?`}fuelUsage(e){let t=this.game?.config();if(!t)return[];switch(e.unitType){case h.AtomBomb:case h.BallisticMissile:case h.HydrogenBomb:case h.MIRV:{let n=t.missileFuelCost(e.unitType);return[...n.gas>0?[{label:`build_menu.fuel_per_launch`,amount:n.gas,icon:`gas`}]:[],...n.uranium>0?[{label:`build_menu.uranium_per_bomb`,amount:n.uranium,icon:`uranium`}]:[]]}case h.Warship:{let e=t.warshipShellFuelCost(),n=t.transportShipFuelCost();return[...e.oil>0?[{label:`build_menu.fuel_per_shot`,amount:e.oil,icon:`oil`}]:[],...n.oil>0?[{label:`build_menu.fuel_per_transport_attack`,amount:n.oil,icon:`oil`}]:[],...t.warshipBuildFuelCost().oil>0?[{label:`build_menu.oil_per_ship`,amount:t.warshipBuildFuelCost().oil,icon:`oil`}]:[]]}case h.Port:{let e=t.tradeShipFuelCost();return e.oil>0?[{label:`build_menu.oil_per_trade_ship`,amount:e.oil,icon:`oil`}]:[]}default:return[]}}sendBuildOrUpgrade(e,t){if(e.canUpgrade!==!1)this.eventBus.emit(new Tn(e.canUpgrade,e.type));else if(e.canBuild){let n=e.type===h.AtomBomb||e.type===h.HydrogenBomb?this.uiState.rocketDirectionUp:void 0;this.eventBus.emit(new Tt(e.type,t,n))}this.hideMenu()}render(){return A`
      <div
        class="build-menu ${this._hidden?`hidden`:``}"
        @contextmenu=${e=>e.preventDefault()}
      >
        ${this.filteredBuildTable.map(e=>A`
            <div class="build-row">
              ${e.map(e=>{let t=this.playerBuildables?.find(t=>t.type===e.unitType);if(t===void 0)return A``;let n=t.canBuild!==!1||t.canUpgrade!==!1;return A`
                  <button
                    class="build-button"
                    @click=${()=>this.sendBuildOrUpgrade(t,this.clickedTile)}
                    ?disabled=${!n}
                    title=${n?``:N(`build_menu.not_enough_money`)}
                  >
                    ${gr(e.unitType)}
                    <span class="build-name">
                      ${e.key&&N(e.key)}
                    </span>
                    <span class="build-description"
                      >${e.description&&N(e.description)}</span
                    >
                    ${this.fuelUsage(e).map(({label:e,amount:t,icon:n})=>A`
                        <span class="build-fuel-cost" translate="no">
                          ${N(e)} ${B(n)}
                          ${L(t)}
                        </span>
                      `)}
                    <span class="build-cost" translate="no">
                      ${L(this.game&&this.game.myPlayer()?this.cost(e):0)}
                      ${B(`gold`)}
                    </span>
                    ${e.countable?A`<div class="build-count-chip">
                          <span class="build-count">${this.count(e)}</span>
                        </div>`:``}
                  </button>
                `})}
            </div>
          `)}
      </div>
    `}hideMenu(){this._hidden=!0,this.refreshRequestId++,this.refreshInFlight=!1,this.lastRefreshTick=-1/0,this.requestUpdate()}showMenu(e){this.refreshRequestId++,this.clickedTile=e,this._hidden=!1,this.playerBuildables=null,this.lastRefreshTick=-1/0,this.refresh()}refresh(){if(this.refreshInFlight||this.game.ticks()-this.lastRefreshTick<ma)return;let e=this.game.myPlayer();if(!e)return;let t=++this.refreshRequestId,n=this.clickedTile;this.refreshInFlight=!0,this.lastRefreshTick=this.game.ticks(),this.filteredBuildTable=this.getBuildableUnits(),e.buildables(n,r.types).then(e=>{t!==this.refreshRequestId||this._hidden||this.clickedTile!==n||(this.playerBuildables=e,this.requestUpdate())}).catch(e=>{console.error(`Failed to refresh build menu:`,e)}).finally(()=>{t===this.refreshRequestId&&(this.refreshInFlight=!1)})}getBuildableUnits(){return fa.map(e=>e.filter(e=>!this.game?.config()?.isUnitDisabled(e.unitType)))}get isVisible(){return!this._hidden}};j([O()],ha.prototype,`_hidden`,void 0),ha=j([k(`build-menu`)],ha);var ga=class extends M{constructor(...e){super(...e),this.active=!1,this._hidden=!1,this.newEvents=0,this.chatEvents=[]}toggleHidden(){this._hidden=!this._hidden,this._hidden&&(this.newEvents=0),this.requestUpdate()}addEvent(e){this.chatEvents=[...this.chatEvents,e],this._hidden&&this.newEvents++,this.requestUpdate()}removeEvent(e){this.chatEvents=[...this.chatEvents.slice(0,e),...this.chatEvents.slice(e+1)]}onDisplayMessageEvent(e){if(e.messageType!==o.CHAT)return;let t=this.game.myPlayer();e.playerID!==null&&(!t||t.smallID()!==e.playerID)||this.addEvent({description:e.message,createdAt:this.game.ticks(),highlight:!0,unsafeDescription:!0})}init(){}tick(){let e=this.game.updatesSinceLastTick();if(e===null)return;let t=e[R.DisplayEvent];if(t){for(let e of t)if(e.messageType===o.CHAT){let t=this.game.myPlayer();if(e.playerID!==null&&(!t||t.smallID()!==e.playerID))continue;this.chatEvents=[...this.chatEvents,{description:e.message,unsafeDescription:!0,createdAt:this.game.ticks()}]}}this.chatEvents.length>100&&(this.chatEvents=this.chatEvents.slice(-100)),this.requestUpdate()}getChatContent(e){return e.unsafeDescription?br(cn(e.description)):e.description}render(){return this.active?A`
      <div
        class="pointer-events-auto ${this._hidden?`w-fit px-2.5 py-1.25`:``} rounded-md bg-black/60 relative max-h-[30vh] flex flex-col-reverse overflow-y-auto w-full lg:bottom-2.5 lg:right-2.5 z-50 lg:max-w-[30vw] lg:w-full lg:w-auto"
      >
        <div>
          <div class="w-full bg-black/80 sticky top-0 px-2.5">
            <button
              class="text-white cursor-pointer pointer-events-auto ${this._hidden?`hidden`:``}"
              @click=${this.toggleHidden}
            >
              Hide
            </button>
          </div>

          <button
            class="text-white cursor-pointer pointer-events-auto ${this._hidden?``:`hidden`}"
            @click=${this.toggleHidden}
          >
            Chat
            <span
              class="${this.newEvents?``:`hidden`} inline-block px-2 bg-red-500 rounded-xs"
              >${this.newEvents}</span
            >
          </button>

          <table
            class="w-full border-collapse text-white shadow-lg lg:text-xl text-xs pointer-events-none ${this._hidden?`hidden`:``}"
          >
            <tbody>
              ${this.chatEvents.map(e=>A`
                  <tr class="border-b border-gray-200/0">
                    <td class="lg:p-3 p-1 text-left">
                      ${this.getChatContent(e)}
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
        </div>
      </div>
    `:A``}createRenderRoot(){return this}};j([O()],ga.prototype,`_hidden`,void 0),j([O()],ga.prototype,`newEvents`,void 0),j([O()],ga.prototype,`chatEvents`,void 0),ga=j([k(`chat-display`)],ga);var _a=Ge(class extends We{constructor(){super(...arguments),this.key=_e}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Pe(e),this.key=t),n}}),va=class{constructor(e){this.target=e}};h.City,h.Factory,h.Port,h.DefensePost,h.Warship,h.MissileSilo,h.AtomBomb;var ya,ba=S(`images/SwordIcon.svg`),U=class extends M{static{ya=this}constructor(...e){super(...e),this.attackRatio=.2,this._isVisible=!1,this._notification=null,this._oil=0,this._gas=0,this._uranium=0,this._storedMissiles=0,this._missileCapacity=0,this._attackingTroops=0,this._goldGain=null,this._goldGainPulseId=0,this._goldGainTimeoutId=null,this._tutorialHighlight=null,this._troopRateIsIncreasing=!0,this._nearbyPlayerIDs=new Set,this._borderRefreshCounter=0,this._borderTilesPromise=null,this._lastAttackTickByTarget=new Map,this.onAttackRatioSettingChanged=()=>{this.uiState!==void 0&&(this.attackRatio=new F().attackRatio(),this.onAttackRatioChange(this.attackRatio),this.requestUpdate())}}static{this.BORDER_REFRESH_INTERVAL=10}static{this.ATTACK_THRESHOLD_TICKS=150}connectedCallback(){super.connectedCallback(),globalThis.addEventListener(`${Fe}:settings.attackRatio`,this.onAttackRatioSettingChanged)}init(){this.attackRatio=new F().attackRatio(),this.uiState.attackRatio=this.attackRatio,this.eventBus.on(va,e=>{this._tutorialHighlight=e.target}),this.eventBus.on(Xt,e=>{let t=this.attackRatio+e.attackRatio/100;t<.01&&(t=.01),t>1&&(t=1),t===.11&&this.attackRatio===.01&&(t=.1),this.attackRatio=t,this.onAttackRatioChange(this.attackRatio)})}tick(){!this._isVisible&&!this.game.inSpawnPhase()&&this.setVisibile(!0);let e=this.game.myPlayer();if(e===null||!e.isAlive()){this.setVisibile(!1);return}this.updateTroopIncrease();let t=this.game.config();this._maxTroops=t.maxTroops(e),this._gold=e.gold(),this._oil=e.oil(),this._gas=e.gas(),this._uranium=e.uranium();let n=e.units(h.Arsenal).filter(e=>e.isActive()&&!e.isUnderConstruction());this._storedMissiles=n.reduce((e,t)=>e+t.missilesStored(),0),this._missileCapacity=n.reduce((e,t)=>e+t.missileCapacity(),0),this._troops=e.troops(),this._attackingTroops=e.outgoingAttacks().map(e=>e.troops).reduce((e,t)=>e+t,0),this.troopRate=t.troopIncreaseRate(e)*10,new F().helpMessages()&&ve()<20&&(this.trackOutgoingAttacks(e),this.refreshNearbyPlayers(e),this._notification=this.computeNotification(e,t));let r=this.game.updatesSinceLastTick();if(r){let t=e.id(),n=r[R.BonusEvent];if(n)for(let e of n)e.player===t&&e.gold>0&&this.addGoldGain(BigInt(e.gold));let i=r[R.ConquestEvent];if(i)for(let e of i)e.conquerorId===t&&e.gold>0n&&this.addGoldGain(e.gold);let a=r[R.DonateEvent];if(a)for(let e of a)e.donationType===`gold`&&e.recipientId===t&&e.amount>0n&&this.addGoldGain(e.amount)}this.requestUpdate()}addGoldGain(e){this._goldGain=e,this._goldGainPulseId++,this._goldGainTimeoutId!==null&&clearTimeout(this._goldGainTimeoutId),this._goldGainTimeoutId=setTimeout(()=>{this._goldGain=null,this._goldGainTimeoutId=null,this.requestUpdate()},2e3)}trackOutgoingAttacks(e){let t=this.game.ticks();for(let n of e.outgoingAttacks())n.targetID!==0&&!n.retreating&&this._lastAttackTickByTarget.set(n.targetID,t);for(let[e,n]of this._lastAttackTickByTarget.entries())t-n>ya.ATTACK_THRESHOLD_TICKS*2&&this._lastAttackTickByTarget.delete(e)}refreshNearbyPlayers(e){this._borderRefreshCounter++,!(this._borderRefreshCounter<ya.BORDER_REFRESH_INTERVAL||this._borderTilesPromise!==null)&&(this._borderRefreshCounter=0,this._borderTilesPromise=e.borderTiles().then(t=>{this._borderTilesPromise=null;let n=e.smallID(),r=new Set;for(let e of t.borderTiles)for(let t of this.game.neighbors(e)){let e=this.game.ownerID(t);e!==0&&e!==n&&r.add(e)}this._nearbyPlayerIDs=r}))}computeNotification(e,t){let n=this.game.ticks(),{gameMode:r,gameType:i}=t.gameConfig(),a=r===c.Team&&i===u.Public,o=t.donateTroops();if(a&&o&&this._troops/Math.max(this._maxTroops,1)>=t.armyLimitWarningThreshold())return{type:`warning`,message:`control_panel.army_limit_warning`};if(this._troops<1e4&&this._troops>0)return{type:`warning`,message:`control_panel.low_troops_warning`};for(let t of this._nearbyPlayerIDs){let r;try{r=this.game.playerBySmallID(t)}catch{continue}if(!r.isPlayer()||!r.isAlive())continue;let i=this._lastAttackTickByTarget.get(t)??-1,a=(n-i)/10;if(i<0||a>15){if(r.isTraitor()&&e.isAlliedWith(r))return{type:`info`,message:`control_panel.traitor_neighbor_info`};if(r.isDisconnected()&&e.isAlliedWith(r))return{type:`info`,message:`control_panel.allied_afk_neighbor_info`};if(r.isDisconnected()&&e.isOnSameTeam(r))return{type:`info`,message:`control_panel.teammate_afk_neighbor_info`}}}return null}disconnectedCallback(){super.disconnectedCallback(),globalThis.removeEventListener(`${Fe}:settings.attackRatio`,this.onAttackRatioSettingChanged),this._goldGainTimeoutId!==null&&(clearTimeout(this._goldGainTimeoutId),this._goldGainTimeoutId=null)}updateTroopIncrease(){let e=this.game?.myPlayer();if(e===null)return;let t=this.game.config().troopIncreaseRate(e);this._troopRateIsIncreasing=t>=this._lastTroopIncreaseRate,this._lastTroopIncreaseRate=t}onAttackRatioChange(e){this.uiState!==void 0&&(this.uiState.attackRatio=e)}setVisibile(e){this._isVisible=e,this.requestUpdate()}handleRatioSliderInput(e){let t=e.target,n=Number(t.value);this.attackRatio=n/100,this.onAttackRatioChange(this.attackRatio)}handleRatioSliderPointerUp(e){e.target.blur()}calculateTroopBar(){let e=Math.max(this._maxTroops,1),t=this._troops/e*100,n=this._attackingTroops/e*100,r=Math.max(0,Math.min(100,t));return{greenPercent:r,orangePercent:Math.max(0,Math.min(100-r,n))}}renderMobileTroopBar(){let{greenPercent:e,orangePercent:t}=this.calculateTroopBar();return A`
      <div
        class="w-full h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: scaleX(${e/100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-aquarius transition-transform duration-200 ease-out"
            style="transform: translateX(${e}%) scaleX(${t/100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-xs font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${I(this._troops)}</span
          >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${I(this._maxTroops)}</span
          >
        </div>
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
          translate="no"
        >
          <div
            class="flex items-center gap-0.5 px-1 ${this.tutorialHighlightClass(`troop_rate`)}"
          >
            <img
              src=${Pn}
              alt=""
              aria-hidden="true"
              width="12"
              height="12"
              class="brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            />
            <span
              class="text-[10px] font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ${this._troopRateIsIncreasing?`text-green-400`:`text-orange-400`}"
              >+${I(this.troopRate)}/s</span
            >
          </div>
        </div>
      </div>
    `}renderDesktopTroopBar(){let{greenPercent:e,orangePercent:t}=this.calculateTroopBar();return A`
      <div
        class="w-full h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: scaleX(${e/100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-aquarius transition-transform duration-200 ease-out"
            style="transform: translateX(${e}%) scaleX(${t/100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center text-lg font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="flex-1 flex justify-end h-full items-center pr-0.5">
            <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              >${I(this._troops)}</span
            >
          </span>
          <span
            class="h-full flex items-center px-0.5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >/</span
          >
          <span
            class="flex-1 flex justify-start h-full items-center pl-0.5 gap-0.5"
          >
            <span
              class="text-white tabular-nums w-[3.5rem] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              >${I(this._maxTroops)}</span
            >
            <img
              src=${Pn}
              alt=""
              aria-hidden="true"
              width="22"
              height="22"
              class="shrink-0 brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ml-1.5"
            />
          </span>
        </div>
      </div>
    `}tutorialHighlightClass(e){return this._tutorialHighlight===e?`tutorial-highlight`:``}renderNotification(){if(!this._notification)return A``;let e=this._notification.type===`warning`;return A`
      <div
        class="flex items-center gap-1.5 px-1.5 py-1 rounded-md border text-xs font-medium mb-1 ${e?`border-orange-400/60 bg-orange-400/10 text-orange-300`:`border-blue-400/60 bg-blue-400/10 text-blue-300`}"
      >
        <span class="shrink-0">${e?`⚠`:`ℹ`}</span>
        <span>${N(this._notification.message)}</span>
      </div>
    `}renderDesktop(){return A`
      ${this.renderNotification()}
      <!-- Row 1: troop rate | troop bar | gold -->
      <div class="flex gap-1.5 items-center mb-1">
        <!-- Troop rate -->
        <div
          class="flex items-center gap-1 shrink-0 border rounded-md font-bold text-sm py-0.5 px-1 w-[5.5rem] ${this.tutorialHighlightClass(`troop_rate`)} ${this._troopRateIsIncreasing?`border-green-400`:`border-orange-400`}"
          translate="no"
        >
          <img
            src=${Pn}
            alt=""
            aria-hidden="true"
            width="13"
            height="13"
            class="shrink-0"
            style="filter: ${this._troopRateIsIncreasing?`brightness(0) saturate(100%) invert(74%) sepia(44%) saturate(500%) hue-rotate(83deg) brightness(103%)`:`brightness(0) saturate(100%) invert(65%) sepia(60%) saturate(600%) hue-rotate(330deg) brightness(105%)`}"
          />
          <span
            class="text-sm font-bold tabular-nums ${this._troopRateIsIncreasing?`text-green-400`:`text-orange-400`}"
            >+${I(this.troopRate)}/s</span
          >
        </div>
        <!-- Troop bar -->
        <div class="flex-1 ${this.tutorialHighlightClass(`troops`)}">
          ${this.renderDesktopTroopBar()}
        </div>
        ${this.renderFuelAmount(`oil`,this._oil,`control_panel.oil`)}
        ${this.renderFuelAmount(`gas`,this._gas,`control_panel.gas`)}
        ${this.renderFuelAmount(`uranium`,this._uranium,`control_panel.uranium`)}
        <!-- Gold -->
        <div
          class="flex items-center gap-1 shrink-0 border rounded-md border-yellow-400 font-bold text-yellow-400 text-sm py-0.5 px-1 min-w-[4.5rem] relative ${this.tutorialHighlightClass(`gold`)}"
          translate="no"
        >
          ${this._goldGain===null?``:_a(this._goldGainPulseId,A`<span
                  class="gold-gain-pop absolute -top-5 right-[5px] min-[1015px]:right-[9px] text-green-400 text-sm font-extrabold tabular-nums whitespace-nowrap pointer-events-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                  >+${L(this._goldGain)}</span
                >`)}
          ${B(`gold`)}
          <span class="tabular-nums">${L(this._gold)}</span>
        </div>
      </div>
      <!-- Row 2: attack ratio | slider -->
      <div
        class="flex items-center gap-1.5 ${this.tutorialHighlightClass(`attack_ratio`)}"
        translate="no"
      >
        <div
          class="flex items-center gap-1 shrink-0 border border-gray-600 rounded-md px-1 py-0.5 text-sm font-bold text-white cursor-pointer w-[8rem]"
        >
          <img
            src=${ba}
            alt=""
            aria-hidden="true"
            width="12"
            height="12"
            style="filter: brightness(0) invert(1);"
          />
          <span
            >${(this.attackRatio*100).toFixed(0)}%
            (${I((this.game?.myPlayer()?.troops()??0)*this.attackRatio)})</span
          >
        </div>
        <input
          type="range"
          min="1"
          max="100"
          .value=${String(Math.round(this.attackRatio*100))}
          @input=${e=>this.handleRatioSliderInput(e)}
          @pointerup=${e=>this.handleRatioSliderPointerUp(e)}
          class="flex-1 h-1.5 accent-aquarius cursor-pointer"
        />
      </div>
    `}renderSidebar(){return A`
      ${this.renderNotification()}
      <section
        class="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/25 p-2"
      >
        <div
          class="flex items-center justify-between gap-2 rounded-lg border border-amber-300/25 bg-amber-300/5 px-2 py-1.5"
        >
          <div
            class="flex items-center gap-1.5 text-sm font-bold text-amber-200"
            translate="no"
          >
            ${B(`gold`)}
            <span>${N(`control_panel.gold`)}</span>
          </div>
          <span class="tabular-nums text-sm font-bold text-amber-100"
            >${L(this._gold)}</span
          >
        </div>
        <div class="grid grid-cols-2 gap-1.5">
          ${[{icon:`oil`,value:this._oil,label:`control_panel.oil`},{icon:`gas`,value:this._gas,label:`control_panel.gas`},{icon:`uranium`,value:this._uranium,label:`control_panel.uranium`},{icon:`missile`,value:this._storedMissiles,label:`control_panel.missile_assets`,capacity:this._missileCapacity}].map(({icon:e,value:t,label:n,capacity:r})=>A`
              <div
                class="flex min-w-0 flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-1 py-2"
                title=${N(n)}
              >
                ${B(e)}
                <span class="text-[0.65rem] text-zinc-400"
                  >${N(n)}</span
                >
                <span class="max-w-full truncate text-xs font-bold tabular-nums"
                  >${L(t)}${r===void 0?``:` / ${L(r)}`}</span
                >
              </div>
            `)}
        </div>
        <div class="flex items-center justify-between text-xs text-zinc-300">
          <span>${N(`control_panel.troops`)}</span>
          <span class="flex items-center gap-1 font-semibold tabular-nums">
            <img src=${Pn} width="15" height="15" alt="" />
            ${I(this._troops)} / ${I(this._maxTroops)}
          </span>
        </div>
        ${this.renderDesktopTroopBar()}
        <div
          class="flex items-center justify-between rounded-lg border border-white/10 px-2 py-1.5 text-xs"
        >
          <span
            class=${this._troopRateIsIncreasing?`text-green-300`:`text-orange-300`}
          >
            ${N(`control_panel.troop_rate`)}
          </span>
          <span
            class="font-bold tabular-nums ${this._troopRateIsIncreasing?`text-green-300`:`text-orange-300`}"
          >
            +${I(this.troopRate)}/s
          </span>
        </div>
        <label
          class="flex flex-col gap-1 rounded-lg border border-white/10 px-2 py-1.5 text-xs"
        >
          <span class="flex items-center justify-between gap-2">
            <span class="flex items-center gap-1 text-zinc-300">
              <img src=${ba} width="13" height="13" alt="" />
              ${N(`control_panel.attack_ratio`,{percent:(this.attackRatio*100).toFixed(0),troops:I(this._troops*this.attackRatio)})}
            </span>
            <span class="font-bold text-amber-200"
              >${(this.attackRatio*100).toFixed(0)}%</span
            >
          </span>
          <input
            type="range"
            min="1"
            max="100"
            .value=${String(Math.round(this.attackRatio*100))}
            @input=${e=>this.handleRatioSliderInput(e)}
            @pointerup=${e=>this.handleRatioSliderPointerUp(e)}
            class="w-full accent-amber-400"
          />
        </label>
      </section>
    `}renderMobile(){return A`
      ${this.renderNotification()}
      <div class="flex gap-2 items-center">
        <!-- Gold -->
        <div
          class="flex items-center justify-center p-1 gap-0.5 border rounded-md border-yellow-400 font-bold text-yellow-400 text-xs w-[15%] shrink-0 relative ${this.tutorialHighlightClass(`gold`)}"
          translate="no"
        >
          ${this._goldGain===null?``:_a(this._goldGainPulseId,A`<span
                  class="gold-gain-pop absolute -top-5 right-[5px] min-[1015px]:right-[9px] text-green-400 text-xs font-extrabold tabular-nums whitespace-nowrap pointer-events-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                  >+${L(this._goldGain)}</span
                >`)}
          ${B(`gold`)}
          <span class="px-0.5">${L(this._gold)}</span>
        </div>
        ${this.renderFuelAmount(`oil`,this._oil,`control_panel.oil`,!0)}
        ${this.renderFuelAmount(`gas`,this._gas,`control_panel.gas`,!0)}
        ${this.renderFuelAmount(`uranium`,this._uranium,`control_panel.uranium`,!0)}
        ${this.renderFuelAmount(`missile`,this._storedMissiles,`control_panel.missile_assets`,!0,this._missileCapacity)}
        <!-- Troop bar -->
        <div
          class="w-[23%] shrink-0 flex items-center ${this.tutorialHighlightClass(`troops`)}"
        >
          ${this.renderMobileTroopBar()}
        </div>
        <!-- Sword + % and troop count label -->
        <div class="flex flex-col items-center justify-center shrink-0">
          <div class="flex items-center gap-0.5">
            <img
              src=${ba}
              alt=""
              aria-hidden="true"
              width="10"
              height="10"
              style="filter: brightness(0) invert(1);"
            />
            <span
              class="text-white text-[11px] font-bold tabular-nums text-center leading-tight whitespace-pre-wrap"
              >${N(`control_panel.attack_ratio`,{percent:(this.attackRatio*100).toFixed(0),troops:I((this.game?.myPlayer()?.troops()??0)*this.attackRatio)})}</span
            >
          </div>
        </div>
        <!-- Attack ratio slider -->
        <div
          class="flex-1 ${this.tutorialHighlightClass(`attack_ratio`)}"
          translate="no"
        >
          <input
            type="range"
            min="1"
            max="100"
            .value=${String(Math.round(this.attackRatio*100))}
            @input=${e=>this.handleRatioSliderInput(e)}
            @pointerup=${e=>this.handleRatioSliderPointerUp(e)}
            class="w-full h-1.5 accent-aquarius cursor-pointer"
          />
        </div>
      </div>
    `}renderFuelAmount(e,t,n,r=!1,i){let a=N(n);return A`
      <div
        class="flex items-center justify-center gap-1 shrink-0 border rounded-md ${r?e===`missile`?`w-[13%] p-1 text-[10px]`:`w-[9%] p-1 text-[10px]`:`min-w-[4rem] px-1 py-0.5 text-sm`} font-bold text-white border-gray-500 tabular-nums"
        title=${a}
        aria-label=${`${a}: ${L(t)}`}
        translate="no"
      >
        ${B(e)}
        <span
          >${L(t)}${i===void 0?``:`/${L(i)}`}</span
        >
      </div>
    `}render(){return A`
      <style>
        @keyframes gold-gain-pop {
          0% {
            transform: translateY(4px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .gold-gain-pop {
          animation: gold-gain-pop 0.25s ease-out;
        }
      </style>
      <div
        class="pointer-events-auto ${this._isVisible?`w-full text-sm`:`hidden`}"
        @contextmenu=${e=>e.preventDefault()}
      >
        <div class="hidden max-[639px]:block">${this.renderMobile()}</div>
        <div class="block max-[639px]:hidden">${this.renderSidebar()}</div>
      </div>
    `}createRenderRoot(){return this}};j([O()],U.prototype,`attackRatio`,void 0),j([O()],U.prototype,`_maxTroops`,void 0),j([O()],U.prototype,`troopRate`,void 0),j([O()],U.prototype,`_troops`,void 0),j([O()],U.prototype,`_isVisible`,void 0),j([O()],U.prototype,`_notification`,void 0),j([O()],U.prototype,`_gold`,void 0),j([O()],U.prototype,`_oil`,void 0),j([O()],U.prototype,`_gas`,void 0),j([O()],U.prototype,`_uranium`,void 0),j([O()],U.prototype,`_storedMissiles`,void 0),j([O()],U.prototype,`_missileCapacity`,void 0),j([O()],U.prototype,`_attackingTroops`,void 0),j([O()],U.prototype,`_goldGain`,void 0),j([O()],U.prototype,`_goldGainPulseId`,void 0),j([O()],U.prototype,`_tutorialHighlight`,void 0),U=ya=j([k(`control-panel`)],U);function xa(e,t,n){let r=t.filter(e=>e.value!==void 0),i=new Map(r.map(e=>[e.id,0]));for(let t of e)if(t.isAlive()){mn(t,n);for(let e of r)i.set(e.id,(i.get(e.id)??0)+e.value(t,n))}return i}var Sa=class extends Kn{constructor(...e){super(...e),this.tableKind=`team`}buildRows(e,t){let n=new Map,r=e.myPlayer()?.team()??null;for(let t of e.playerViews()){let e=t.team();if(e===null)continue;let r=n.get(e)??[];r.push(t),n.set(e,r)}return[...n.entries()].map(([n,i])=>{let a=`team_colors.${n.toLowerCase()}`,o=N(a);return{key:n,name:o===a?n:o,values:xa(i,t,e),emphasized:n===r,pinned:n===r}})}};Sa=j([k(`team-stats`)],Sa);var W=class extends M{constructor(...e){super(...e),this.isPlayerStatsShown=!1,this.isTeamStatsShown=!1,this.isVisible=!1,this.isPlayerTeamLabelVisible=!1,this.playerTeam=null,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this.playerColor=new cr(`#FFFFFF`),this.game=null,this.eventBus=null,this.showPlayerStatsAfterSpawn=!1}createRenderRoot(){return this}init(){this.isVisible=!0,this.eventBus?.on(un,e=>{this.spawnBarVisible=e.visible}),this.eventBus?.on(Zn,e=>{this.immunityBarVisible=e.visible}),this.isTeamGame&&(this.isPlayerTeamLabelVisible=!0),y.isDesktopWidth&&(this.showPlayerStatsAfterSpawn=!0)}getTickIntervalMs(){return 1e3}tick(){if(this.game===null)return;let e=this.game.myPlayer()?.team();this.playerTeam===null&&e!=null&&(this.playerTeam=e,this.playerColor=yr.current().teamColor(e)),this.showPlayerStatsAfterSpawn&&!this.game.inSpawnPhase()&&(this.showPlayerStatsAfterSpawn=!1,this.isPlayerStatsShown=!0),!this.game.inSpawnPhase()&&this.isPlayerTeamLabelVisible&&(this.isPlayerTeamLabelVisible=!1),this.playerStats?.refresh(),this.teamStats?.refresh()}get barOffset(){return(this.spawnBarVisible?7:0)+(this.immunityBarVisible?7:0)}togglePlayerStats(){this.isPlayerStatsShown=!this.isPlayerStatsShown}toggleTeamStats(){this.isTeamStatsShown=!this.isTeamStatsShown}get isTeamGame(){return this.game?.config().gameConfig().gameMode===c.Team}render(){return A`
      <aside
        class=${`fixed top-0 left-0 z-900 flex flex-col max-h-[calc(100vh-80px)] overflow-y-auto rounded-br-2xl border-b border-r border-amber-200/15 bg-[#11110e]/95 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl ${this.isPlayerStatsShown||this.isTeamStatsShown?`max-[400px]:w-full max-[400px]:rounded-none`:``} transition-all duration-300 ease-out transform ${this.isVisible?`translate-x-0`:`hidden`}`}
        style="margin-top: ${this.barOffset}px;"
      >
        <div class="flex items-center gap-4 xl:gap-6 text-white">
          <button
            type="button"
            class="flex items-center gap-2 rounded-lg border border-amber-200/20 bg-amber-200/[0.06] p-2 text-amber-100 transition-colors hover:border-amber-200/40 hover:bg-amber-200/10"
            aria-label=${N(`leaderboard.player`)}
            aria-pressed=${this.isPlayerStatsShown}
            @click=${this.togglePlayerStats}
          >
            <svg
              viewBox="0 0 24 24"
              class="size-5"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 19V5m0 14h17M8 16v-4m4 4V8m4 8v-6m4 6V4"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>
            ${this.isPlayerStatsShown?A`<span class="text-xs font-bold"
                  >${N(`leaderboard.player`)}</span
                >`:``}
          </button>
          ${this.isTeamGame?A`
                <button
                  type="button"
                  class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-2 text-stone-300 transition-colors hover:border-amber-200/30 hover:bg-amber-200/[0.06]"
                  aria-label=${N(`leaderboard.team`)}
                  aria-pressed=${this.isTeamStatsShown}
                  @click=${this.toggleTeamStats}
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="size-5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m10.5-12.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3.5 2a2.5 2.5 0 1 0-1.5-4.5m1.5 8h.5a3.5 3.5 0 0 1 3.5 3.5V20"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  ${this.isTeamStatsShown?A`<span class="text-xs font-bold"
                        >${N(`leaderboard.team`)}</span
                      >`:``}
                </button>
              `:null}
          ${this.isPlayerStatsShown||this.isTeamStatsShown?A`<span
                class="ml-auto text-[10px] text-slate-500 select-all leading-none self-start"
                title=${N(`help_modal.game_id_tooltip`)}
                >${this.game?.gameID()??``}</span
              >`:null}
        </div>
        ${this.isPlayerTeamLabelVisible?A`
              <div
                class="flex items-center w-full text-white mt-2"
                @contextmenu=${e=>e.preventDefault()}
              >
                ${N(`help_modal.ui_your_team`)}
                <span
                  style="--color: ${this.playerColor.toRgbString()}"
                  class="text-(--color)"
                >
                  &nbsp;${ie(this.playerTeam,this.game?.teamClanTag(this.playerTeam))}
                  &#10687;
                </span>
              </div>
            `:null}
        <div class="flex flex-col gap-2 min-w-0 w-full">
          <player-stats
            class=${this.isPlayerStatsShown?`block min-w-0`:`hidden`}
            .game=${this.game}
            .eventBus=${this.eventBus}
            .visible=${this.isPlayerStatsShown}
          ></player-stats>
          <team-stats
            class=${this.isTeamStatsShown&&this.isTeamGame?`block min-w-0`:`hidden`}
            .game=${this.game}
            .visible=${this.isTeamStatsShown&&this.isTeamGame}
          ></team-stats>
        </div>
        <slot></slot>
      </aside>
    `}};j([O()],W.prototype,`isPlayerStatsShown`,void 0),j([O()],W.prototype,`isTeamStatsShown`,void 0),j([O()],W.prototype,`isVisible`,void 0),j([O()],W.prototype,`isPlayerTeamLabelVisible`,void 0),j([O()],W.prototype,`playerTeam`,void 0),j([O()],W.prototype,`spawnBarVisible`,void 0),j([O()],W.prototype,`immunityBarVisible`,void 0),j([C({attribute:!1})],W.prototype,`game`,void 0),j([C({attribute:!1})],W.prototype,`eventBus`,void 0),j([se(`player-stats`)],W.prototype,`playerStats`,void 0),j([se(`team-stats`)],W.prototype,`teamStats`,void 0),W=j([k(`game-left-sidebar`)],W);var Ca=S(`images/DoomsdayClockSkull.svg`),wa=class extends M{constructor(...e){super(...e),this.hasWinner=!1,this.refreshKey=0}createRenderRoot(){return this}secondsToHms(e){let t=e=>e<10?`0${e}`:e,n=Math.floor(e/3600),r=Math.floor(e%3600/60),i=Math.floor(e%3600%60);return n===0?`${t(r)}:${t(i)}`:`${t(n)}:${t(r)}:${t(i)}`}isTeamGame(){return this.game.config().gameConfig().gameMode!==c.FFA}sideTiles(e){if(!e)return 0;let n=e.team();return!this.isTeamGame()||n===null?e.numTilesOwned():this.game.playerViews().filter(e=>e.team()===n&&e.isAlive()&&e.type()!==t.Bot).reduce((e,t)=>e+t.numTilesOwned(),0)}teamDisplayName(e){let t=`team_colors.${e.toLowerCase()}`,n=N(t);return n===t?e:n}teamColor(e){return yr.current().teamColor(e).toHex()}render(){let e=this.game?.config().doomsdayClockConfig(),t=this.game?.myPlayer(),n=!!e?.enabled&&!this.hasWinner;if(this.style.display=n?`block`:`none`,!n||!e)return A``;let r=!!t&&t.isAlive(),i=Math.floor(this.game.elapsedGameSeconds()),a=this.game.numLandTiles()-this.game.numTilesWithFallout(),o=t?.team()??null,s=this.sideTiles(t),c=Tr({...e,teamGame:this.isTeamGame()},a,i),l=wr({...e,teamGame:this.isTeamGame()},i),u=a>0?c/a*100:0,d=a>0?s/a*100:0,f=t?.inDoomsdayClock()??!1,p=Math.floor((t?.doomsdayClockTicks()??0)/10),m=f&&p>=e.warnSeconds,h=m&&(t?.isDecaying()??!1),g=r&&!f&&c>0&&d<=u*1.1,_=f||g,v=l.done?N(`doomsday_clock.final`,{pct:l.currentPercent}):l.growing?N(`doomsday_clock.growing`,{pct:l.targetPercent,time:this.secondsToHms(l.secondsToTarget)}):N(`doomsday_clock.next_wave`,{pct:l.targetPercent,time:this.secondsToHms(l.secondsToNextGrowth)}),y=``,b=``,x=v;if(r&&m&&t&&h)y=N(`doomsday_clock.decaying`,{rate:Sr(t.numTilesOwned(),p,e)}),b=`text-red-500 font-bold`;else if(r&&m&&t){let n=this.game.config().maxTroops(t),r=p-e.warnSeconds,i=xr(n,r,e),a=Cr(n,r,e);y=N(`doomsday_clock.collapsing`,{rate:I(Math.max(0,Math.min(t.troops()-i,a)))}),b=`text-red-400 font-bold`}else r&&f?(y=N(`doomsday_clock.unstable`),b=`text-red-400 font-bold`,x=N(`doomsday_clock.decay_in`,{secs:Math.max(0,e.warnSeconds-p)})):r&&(y=N(`doomsday_clock.stable`),b=g?`text-orange-300 font-bold`:`text-green-400`);return A`
      <style>
        @keyframes sd-red {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(248, 113, 113, 0);
          }
          50% {
            box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.95);
          }
        }
        @keyframes sd-orange {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(251, 146, 60, 0);
          }
          50% {
            box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.9);
          }
        }
        .sd-pulse-red {
          animation: sd-red 1s ease-in-out infinite;
        }
        .sd-pulse-orange {
          animation: sd-orange 1.8s ease-in-out infinite;
        }
      </style>
      <div class="${`w-fit flex flex-col gap-1.5 py-2 px-4 bg-gray-800/92 backdrop-blur-sm shadow-xs rounded-bl-lg text-white text-sm`} ${_?`sd-pulse-red`:l.waveFlash?`sd-pulse-orange`:``}">
        <div class="flex items-center justify-between gap-3">
          <span
            class="flex items-center gap-1.5 font-bold tracking-wide text-red-400"
          >
            <img src=${Ca} alt="" width="20" height="20" />
            ${N(`doomsday_clock.title`)}
          </span>
          <span class=${b}>${y}</span>
        </div>
        <div class="relative h-2.5 w-52 overflow-hidden rounded bg-gray-600/60">
          <!-- your held share (green) vs the target threshold (red bar): the gap
               between them shows how far you are from safe. -->
          <div
            class="absolute inset-y-0 left-0 bg-green-400"
            style="width:${Math.min(100,d)}%"
          ></div>
          <div
            class="absolute inset-y-0 w-0.5 bg-red-500"
            style="left:${Math.min(100,u)}%"
          ></div>
        </div>
        <div class="flex items-center justify-between gap-3 text-gray-300">
          <span>
            ${N(`doomsday_clock.hold`,{pct:u.toFixed(1)})}
          </span>
          ${r?o===null?A`<span
                  class=${_?`text-red-300`:`text-green-300`}
                >
                  ${N(`doomsday_clock.you`,{pct:d.toFixed(1)})}
                </span>`:A`<span style=${`color:${this.teamColor(o)}`}>
                  ${N(`doomsday_clock.your_team`,{team:this.teamDisplayName(o),pct:d.toFixed(1)})}
                </span>`:``}
        </div>
        ${x?A`<div class="text-xs text-gray-400">${x}</div>`:``}
      </div>
    `}};j([C({attribute:!1})],wa.prototype,`game`,void 0),j([C({attribute:!1})],wa.prototype,`hasWinner`,void 0),j([C({attribute:!1})],wa.prototype,`refreshKey`,void 0),wa=j([k(`doomsday-clock-panel`)],wa);var Ta=class extends M{constructor(...e){super(...e),this.hasWinner=!1,this.refreshKey=0}createRenderRoot(){return this}isTeamGame(){return this.game.config().gameConfig().gameMode!==c.FFA}firstPlace(){let e=this.game.myPlayer(),t=this.game.playerViews().filter(e=>e.isAlive());if(!this.isTeamGame()){let n=null;for(let e of t)(n===null||e.numTilesOwned()>n.numTilesOwned())&&(n=e);return n===null?null:{name:n.displayName(),tiles:n.numTilesOwned(),isMine:e!==null&&n.id()===e.id()}}let n=new Map;for(let e of t){let t=e.team();t!==null&&n.set(t,(n.get(t)??0)+e.numTilesOwned())}let r=null;for(let e of n)(r===null||e[1]>r[1])&&(r=e);return r!==null&&r[0]===_.Bot||r===null?null:{name:this.teamDisplayName(r[0]),tiles:r[1],isMine:e!==null&&e.team()===r[0]}}teamDisplayName(e){let t=`team_colors.${e.toLowerCase()}`,n=N(t);return n===t?e:n}render(){let e=this.game?.config().overtimeConfig(),t=Math.floor(this.game?.elapsedGameSeconds()??0),n=!!e?.enabled&&!this.hasWinner&&t>=e.startMinutes*60;if(this.style.display=n?`block`:`none`,!n||!e)return A``;let r=this.game.numLandTiles()-this.game.numTilesWithFallout(),i=this.game.config().percentageTilesOwnedToWin(t),a=this.firstPlace(),o=r>0&&a!==null?a.tiles/r*100:0,s=Math.floor(o),c=a!==null&&this.game.myPlayer()!==null&&!a.isMine?`bg-red-400`:`bg-green-400`;return A`
      <div class="${`w-fit flex flex-col gap-1.5 py-2 px-4 bg-gray-800/92 backdrop-blur-sm shadow-xs rounded-bl-lg text-white text-sm`}">
        <div class="flex items-center justify-between gap-3">
          <span class="font-bold tracking-wide text-orange-400">
            ${N(`overtime.title`)}
          </span>
          <span class="text-orange-300 font-bold">
            ${N(`overtime.to_win`,{pct:i})}
          </span>
        </div>
        <div class="relative h-2.5 w-52 overflow-hidden rounded bg-gray-600/60">
          <!-- first place's held share (green when that's your side, red when
               an opponent leads) vs the shrinking win threshold (orange bar):
               the gap between them is how close the game is to ending. -->
          <div
            class="absolute inset-y-0 left-0 ${c}"
            style="width:${Math.min(100,o)}%"
          ></div>
          <div
            class="absolute inset-y-0 w-0.5 bg-orange-400"
            style="left:${Math.min(100,i)}%"
          ></div>
        </div>
        ${a===null?``:A`<div class="text-xs text-gray-300">
              ${N(`overtime.first_place`,{name:a.name,pct:s})}
            </div>`}
      </div>
    `}};j([C({attribute:!1})],Ta.prototype,`game`,void 0),j([C({attribute:!1})],Ta.prototype,`hasWinner`,void 0),j([C({attribute:!1})],Ta.prototype,`refreshKey`,void 0),Ta=j([k(`overtime-panel`)],Ta);var Ea=class{constructor(e=!0,t=!1){this.visible=e,this.isSingleplayer=t}},Da=class extends M{constructor(...e){super(...e),this.visible=!1,this._replaySpeedMultiplier=1,this.isSingleplayer=!1}createRenderRoot(){return this}init(){this.eventBus&&(this.eventBus.on(Ea,e=>{this.visible=e.visible,this.isSingleplayer=e.isSingleplayer}),this.eventBus.on(ht,e=>{this._replaySpeedMultiplier=e.replaySpeedMultiplier,this.requestUpdate()}))}getTickIntervalMs(){return 1e3}tick(){this.visible&&this.requestUpdate()}onReplaySpeedChange(e){this._replaySpeedMultiplier=e,this.eventBus?.emit(new ht(e))}render(){return this.visible?A`
      <div
        class="p-2 border border-amber-200/20 bg-[#171511]/95 text-amber-50 shadow-lg backdrop-blur-sm rounded-l-xl"
        @contextmenu=${e=>e.preventDefault()}
      >
        <label class="block mb-2 text-amber-100" translate="no">
          ${this.game?.config()?.isReplay()?N(`replay_panel.replay_speed`):N(`replay_panel.game_speed`)}
        </label>
        <div class="grid grid-cols-4 gap-2">
          ${this.renderSpeedButton(er.slow,`replay_panel.slow_speed`)}
          ${this.renderSpeedButton(er.normal,`replay_panel.normal_speed`)}
          ${this.renderSpeedButton(er.fast,`replay_panel.fast_speed`)}
          ${this.renderSpeedButton(er.fastest,N(`replay_panel.fastest_game_speed`))}
        </div>
      </div>
    `:A``}renderSpeedButton(e,t){return A`
      <button
        class="min-h-9 rounded-lg border border-white/15 px-2 text-sm font-bold transition hover:border-amber-200/70 hover:bg-amber-200/10 ${this._replaySpeedMultiplier===e?`bg-amber-300 text-zinc-950 border-amber-200`:`text-white`}"
        @click=${()=>this.onReplaySpeedChange(e)}
      >
        ${t.startsWith(`replay_panel.`)?N(t):t}
      </button>
    `}};j([C({type:Boolean})],Da.prototype,`visible`,void 0),j([O()],Da.prototype,`_replaySpeedMultiplier`,void 0),j([C({type:Boolean})],Da.prototype,`isSingleplayer`,void 0),Da=j([k(`replay-panel`)],Da);var Oa=S(`images/ExitIconWhite.svg`),ka=S(`images/FastForwardIconSolidWhite.svg`),Aa=S(`images/PauseIconWhite.svg`),ja=S(`images/PlayIconWhite.svg`),Ma=S(`images/ReplayRegularIconWhite.svg`),Na=S(`images/SettingIconWhite.svg`),Pa=S(`images/FullscreenIconWhite.svg`),Fa=S(`images/ExitFullscreenIconWhite.svg`),Ia=60,La=30,Ra=10,za=4e3,G=class extends M{constructor(...e){super(...e),this._isSinglePlayer=!1,this._isReplayVisible=!1,this._isVisible=!0,this.isPaused=!1,this.isFullscreen=!1,this.timer=0,this.hideFullscreenButton=P.isOnCrazyGames()||Ce(),this.hasWinner=!1,this.isLobbyCreator=!1,this.isPrivateLobby=!1,this.hasShownOneMinuteWarning=!1,this.newLobbyRequested=!1,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this.onFullscreenChange=()=>{this.isFullscreen=!!document.fullscreenElement},this.secondsToHms=e=>{let t=e=>e<10?`0${e}`:e,n=Math.floor(e/3600),r=Math.floor(e%3600/60),i=Math.floor(e%3600%60);return n===0?`${t(r)}:${t(i)}`:`${t(n)}:${t(r)}:${t(i)}`}}createRenderRoot(){return this.style.display=`flex`,this.style.flexDirection=`column`,this.style.alignItems=`center`,this.style.gap=`6px`,this}init(){this._isSinglePlayer=this.game?.config()?.gameConfig()?.gameType===u.Singleplayer||this.game.config().isReplay(),this.isPrivateLobby=this.game?.config()?.gameConfig()?.gameType===u.Private,this._isVisible=!0,this.hasShownOneMinuteWarning=!1,this.eventBus.on(un,e=>{this.spawnBarVisible=e.visible,this.updateParentOffset()}),this.eventBus.on(Zn,e=>{this.immunityBarVisible=e.visible,this.updateParentOffset()}),this.eventBus.on(Cn,()=>{this.hasWinner=!0,this.requestUpdate()}),this.eventBus.on(Mt,()=>{(this._isSinglePlayer||this.game?.config()?.isReplay()||this.isLobbyCreator&&!this.game.config().listed)&&this.onPauseButtonClick()}),this.requestUpdate()}connectedCallback(){super.connectedCallback(),document.addEventListener(`fullscreenchange`,this.onFullscreenChange),this.onFullscreenChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`fullscreenchange`,this.onFullscreenChange)}getTickIntervalMs(){return 250}tick(){if(!this.isLobbyCreator&&this.game.myPlayer()?.isLobbyCreator()&&(this.isLobbyCreator=!0,this.requestUpdate()),this.game.inSpawnPhase()){if(this.game.config().gameConfig().gameType===u.Singleplayer){let e=this.game.config().gameConfig().maxTimerValue;this.timer=e==null?0:e*60;return}let e=this.game.config().numSpawnPhaseTurns()-this.game.ticks(),t=Math.ceil(e/10);this.timer=Math.max(0,t);return}let e=Math.floor(this.game.elapsedGameSeconds());if(this.hasWinner)return;let t=this.game.config().gameConfig().maxTimerValue;t==null?this.timer=e:(this.timer=Math.max(0,t*60-e),this.maybeShowOneMinuteWarning())}maybeShowOneMinuteWarning(){!this.hasWinner&&!this.game.inSpawnPhase()&&this.timer>0&&this.timer<=Ia&&!this.hasShownOneMinuteWarning&&(this.hasShownOneMinuteWarning=!0,ee(N(`game_timer.one_minute_remaining`),`red`,za))}updateParentOffset(){let e=(this.spawnBarVisible?7:0)+(this.immunityBarVisible?7:0),t=this.parentElement;t&&(t.style.marginTop=`${e}px`)}toggleReplayPanel(){this._isReplayVisible=!this._isReplayVisible,this.eventBus.emit(new Ea(this._isReplayVisible,this._isSinglePlayer))}onPauseButtonClick(){this.isPaused=!this.isPaused,this.isPaused?P.gameplayStop():P.gameplayStart(),this.eventBus.emit(new kt(this.isPaused))}async onNewLobbyButtonClick(){if(!this.newLobbyRequested&&await Le(N(`new_lobby_prompt.confirm`),{variant:`warning`})&&!this.newLobbyRequested){this.newLobbyRequested=!0,this.requestUpdate();try{let e=(await De(this.game.gameID())).gameID;window.location.href=`${window.location.origin}${me.gamePath(e)}?host`}catch(e){console.error(`Failed to create successor lobby`,e),this.newLobbyRequested=!1,this.requestUpdate(),Je(N(`new_lobby_prompt.failed`))}}}async onExitButtonClick(){this.game.myPlayer()?.isAlive()&&!await Le(N(`help_modal.exit_confirmation`),{variant:`iranianMilitary`})||(await P.gameplayStop(),window.location.href=w())}onSettingsButtonClick(){this.eventBus.emit(new En(!0,this._isSinglePlayer,this.isPaused))}onFullscreenButtonClick(){document.fullscreenElement?document.exitFullscreen().catch(e=>{console.warn(`Failed to exit fullscreen:`,e)}):document.documentElement.requestFullscreen().catch(e=>{console.warn(`Failed to enter fullscreen:`,e)})}render(){if(this.game===void 0)return A``;let e=this.game.config().gameConfig().maxTimerValue!=null&&!this.game.inSpawnPhase()&&!this.hasWinner&&this.timer>0,t=e&&this.timer<=Ia,n=e&&this.timer<=La,r=e&&this.timer<=Ra,i=n?`game-end-timer-flash`:t?`game-end-timer-last-minute`:``;return A`
      <style>
        @keyframes game-end-timer-text-flash {
          0%,
          100% {
            color: rgb(248 113 113);
          }
          50% {
            color: white;
          }
        }
        @keyframes game-end-timer-sidebar-flash {
          0%,
          100% {
            background-color: rgb(0 0 0 / 0.92);
          }
          50% {
            background-color: rgb(185 28 28 / 0.96);
          }
        }
        .game-end-timer-last-minute {
          color: rgb(248 113 113);
        }
        .game-end-timer-flash {
          animation: game-end-timer-text-flash 1s ease-in-out infinite;
        }
        .game-end-timer-sidebar-flash {
          animation: game-end-timer-sidebar-flash 1s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .game-end-timer-flash {
            animation: none;
            color: white;
          }
          .game-end-timer-sidebar-flash {
            animation: none;
            background-color: rgb(185 28 28 / 0.96);
          }
        }
      </style>
      <aside
        class=${`w-fit flex flex-row items-center gap-3 border border-amber-200/15 py-2 px-3 bg-[#171511]/95 backdrop-blur-sm shadow-lg rounded-bl-2xl transition-transform duration-300 ease-out transform text-amber-50 ${r?`game-end-timer-sidebar-flash`:``} ${this._isVisible?`translate-x-0`:`translate-x-full`}`}
        @contextmenu=${e=>e.preventDefault()}
      >
        <!-- In-game time -->
        <div data-game-timer class=${i}>
          ${this.secondsToHms(this.timer)}
        </div>

        <!-- Buttons -->
        ${this.maybeRenderReplayButtons()}

        <div class="cursor-pointer" @click=${this.onSettingsButtonClick}>
          <img src=${Na} alt="settings" width="20" height="20" />
        </div>

        ${document.fullscreenEnabled&&!this.hideFullscreenButton?A`<div
              class="cursor-pointer"
              @click=${this.onFullscreenButtonClick}
            >
              <img
                src=${this.isFullscreen?Fa:Pa}
                alt=${this.isFullscreen?N(`fullscreen.exit`):N(`fullscreen.enter`)}
                width="20"
                height="20"
              />
            </div>`:``}

        <div class="cursor-pointer" @click=${this.onExitButtonClick}>
          <img src=${Oa} alt="exit" width="20" height="20" />
        </div>
      </aside>
      <doomsday-clock-panel
        .game=${this.game}
        .hasWinner=${this.hasWinner}
        .refreshKey=${this.timer}
      ></doomsday-clock-panel>
      <overtime-panel
        .game=${this.game}
        .hasWinner=${this.hasWinner}
        .refreshKey=${this.timer}
      ></overtime-panel>
    `}maybeRenderReplayButtons(){let e=this._isSinglePlayer||this.game?.config()?.isReplay(),t=e||this.isLobbyCreator&&!this.game.config().listed,n=this.isLobbyCreator&&this.isPrivateLobby;return A`
      ${e?A`
            <button
              type="button"
              class="grid size-9 place-items-center rounded-lg transition hover:bg-amber-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
              aria-label=${N(`replay_panel.replay_speed`)}
              title=${N(`replay_panel.replay_speed`)}
              @click=${this.toggleReplayPanel}
            >
              <img
                src=${ka}
                alt=""
                aria-hidden="true"
                class="size-5"
              />
            </button>
          `:``}
      ${t?A`
            <button
              type="button"
              class="grid size-9 place-items-center rounded-lg transition hover:bg-amber-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200"
              aria-label=${this.isPaused?N(`replay_viewer.play`):N(`user_setting.pause_game`)}
              title=${this.isPaused?N(`replay_viewer.play`):N(`user_setting.pause_game`)}
              @click=${this.onPauseButtonClick}
            >
              <img
                src=${this.isPaused?ja:Aa}
                alt=""
                aria-hidden="true"
                class="size-5"
              />
            </button>
          `:``}
      ${n?A`
            <div
              class="cursor-pointer ${this.newLobbyRequested?`opacity-50 pointer-events-none`:``}"
              @click=${this.onNewLobbyButtonClick}
              title=${N(`win_modal.new_lobby`)}
            >
              <img
                src=${Ma}
                alt=${N(`win_modal.new_lobby`)}
                width="20"
                height="20"
              />
            </div>
          `:``}
    `}};j([O()],G.prototype,`_isSinglePlayer`,void 0),j([O()],G.prototype,`_isReplayVisible`,void 0),j([O()],G.prototype,`_isVisible`,void 0),j([O()],G.prototype,`isPaused`,void 0),j([O()],G.prototype,`isFullscreen`,void 0),j([O()],G.prototype,`timer`,void 0),G=j([k(`game-right-sidebar`)],G);var Ba,Va=`hasClosedCollusionWarning`,K=class extends M{static{Ba=this}constructor(...e){super(...e),this.isVisible=!1,this.hasClosedCollusionWarning=localStorage.getItem(Va)!==null,this.isPaused=!1,this.isImmunityActive=!1,this.isCatchingUp=!1,this.catchingUpTicks=0,this.isOvertimeNotice=!1,this.toastMessage=null,this.toastColor=`green`,this.toastTimeout=null,this.toastPointerId=null,this.toastDragStart={x:0,y:0},this.toastDragOffset={x:0,y:0},this.dismissToast=()=>{this.toastTimeout!==null&&(clearTimeout(this.toastTimeout),this.toastTimeout=null),this.toastPointerId=null,this.toastDragOffset={x:0,y:0},this.toastMessage=null},this.handleShowMessage=e=>{let{message:t,duration:n,color:r}=e.detail??{};(typeof t==`string`||t&&typeof t.values==`object`)&&(this.toastMessage=t,this.toastColor=r===`red`?`red`:`green`,this.toastPointerId=null,this.toastDragOffset={x:0,y:0},this.requestUpdate(),this.toastTimeout!==null&&clearTimeout(this.toastTimeout),this.toastTimeout=window.setTimeout(this.dismissToast,typeof n==`number`?n??2e3:2e3))},this.onToastPointerDown=e=>{e.button!==0||this.toastPointerId!==null||(this.toastPointerId=e.pointerId,this.toastDragStart={x:e.clientX,y:e.clientY},e.currentTarget.setPointerCapture(e.pointerId))},this.onToastPointerMove=e=>{e.pointerId===this.toastPointerId&&(this.toastDragOffset={x:e.clientX-this.toastDragStart.x,y:e.clientY-this.toastDragStart.y})},this.onToastPointerUp=e=>{if(e.pointerId===this.toastPointerId){if(Math.hypot(e.clientX-this.toastDragStart.x,e.clientY-this.toastDragStart.y)>=Ba.TOAST_DISMISS_DISTANCE){this.dismissToast();return}this.toastPointerId=null,this.toastDragOffset={x:0,y:0}}},this.onToastPointerCancel=e=>{e.pointerId===this.toastPointerId&&(this.toastPointerId=null,this.toastDragOffset={x:0,y:0})},this.onCloseCollusionWarning=()=>{localStorage.setItem(Va,`true`),this.hasClosedCollusionWarning=!0,this.requestUpdate()}}static{this.CATCHING_UP_SHOW_THRESHOLD=10}static{this.OVERTIME_NOTICE_SECONDS=5}static{this.TOAST_DISMISS_DISTANCE=80}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`show-message`,this.handleShowMessage)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`show-message`,this.handleShowMessage),this.toastTimeout!==null&&clearTimeout(this.toastTimeout)}init(){this.isVisible=!0,this.requestUpdate()}tick(){let e=this.game.updatesSinceLastTick()?.[R.GamePaused];e&&e.length>0&&(this.isPaused=e[e.length-1].paused);let t=this.game.config().numSpawnPhaseTurns(),n=this.game.ticks()-t;this.isImmunityActive=this.game.config().hasExtendedSpawnImmunity()&&!this.game.inSpawnPhase()&&this.game.isSpawnImmunityActive()&&n<100,!this.game.config().isReplay()&&this.game.isCatchingUp()?this.catchingUpTicks++:this.catchingUpTicks=0,this.isCatchingUp=this.catchingUpTicks>=Ba.CATCHING_UP_SHOW_THRESHOLD;let r=this.game.config().overtimeConfig(),i=r.startMinutes*60,a=this.game.elapsedGameSeconds();this.isOvertimeNotice=r.enabled&&!this.game.inSpawnPhase()&&a>=i&&a<i+Ba.OVERTIME_NOTICE_SECONDS,this.isVisible=this.game.inSpawnPhase()||this.isPaused||this.isImmunityActive||this.isCatchingUp||this.isOvertimeNotice,this.requestUpdate()}getMessage(){return this.isCatchingUp?N(`heads_up_message.catching_up`):this.isPaused?this.game.config().gameConfig().gameType===u.Singleplayer?N(`heads_up_message.singleplayer_game_paused`):N(`heads_up_message.multiplayer_game_paused`):this.isImmunityActive?N(`heads_up_message.pvp_immunity_active`,{seconds:Math.round(this.game.config().spawnImmunityDuration()/10)}):this.isOvertimeNotice?N(`overtime.started`):this.game.config().isReplay()||this.game.config().isIntentionalSpectator()?this.game.config().isRandomSpawn()?N(`heads_up_message.random_spawn_spectator`):N(`heads_up_message.choose_spawn_spectator`):this.game.config().isRandomSpawn()?N(`heads_up_message.random_spawn`):N(`heads_up_message.choose_spawn`)}render(){return A`
      <div style="pointer-events: none;">
        ${this.toastMessage?A`
              <div
                data-game-toast
                data-game-input-pass-through
                class="fixed top-6 left-1/2 -translate-x-1/2 z-[1002]
                       max-w-[90vw] pointer-events-auto touch-none select-none
                       cursor-grab active:cursor-grabbing"
                @pointerdown=${this.onToastPointerDown}
                @pointermove=${this.onToastPointerMove}
                @pointerup=${this.onToastPointerUp}
                @pointercancel=${this.onToastPointerCancel}
                @contextmenu=${e=>e.preventDefault()}
              >
                <div
                  data-game-toast-content
                  class="px-6 py-4 rounded-xl animate-fade-in-out"
                  style="min-width: 200px; text-align: center;
                  transform: translate3d(${this.toastDragOffset.x}px, ${this.toastDragOffset.y}px, 0);
                  transition: ${this.toastPointerId===null?`transform 180ms cubic-bezier(0.4, 0, 0.2, 1)`:`none`};
                  background: ${this.toastColor===`red`?`rgba(239,68,68,0.1)`:`rgba(34,197,94,0.1)`};
                  border: 1px solid ${this.toastColor===`red`?`rgba(239,68,68,0.5)`:`rgba(34,197,94,0.5)`};
                  color: white;
                  box-shadow: 0 0 30px 0 ${this.toastColor===`red`?`rgba(239,68,68,0.3)`:`rgba(34,197,94,0.3)`};
                  backdrop-filter: blur(12px);"
                >
                  ${typeof this.toastMessage==`string`?A`<span class="font-medium"
                        >${this.toastMessage}</span
                      >`:this.toastMessage}
                </div>
              </div>
            `:null}
        ${this.isVisible?A`
              <div
                class="fixed top-[15%] left-1/2 -translate-x-1/2 z-[799]
                            inline-flex items-center justify-center min-h-8 lg:min-h-10
                            w-fit max-w-[90vw]
                            bg-gray-800/70 rounded-md lg:rounded-lg
                            backdrop-blur-xs text-white text-md lg:text-xl px-3 lg:px-4 py-1
                            text-center break-words"
                style="word-wrap: break-word; hyphens: auto;"
                @contextmenu=${e=>e.preventDefault()}
              >
                ${this.getMessage()}
              </div>
            `:null}
        ${this.game?.inSpawnPhase()&&!this.game.config().isReplay()&&!this.game.config().isIntentionalSpectator()&&this.game.config().gameConfig().rankedType!==a.OneVOne&&this.game.config().gameConfig().gameMode===c.FFA&&this.game.config().gameConfig().gameType===u.Public&&!this.hasClosedCollusionWarning?A`
              <div
                class="fixed top-[25%] left-1/2 -translate-x-1/2 z-[799]
                            inline-flex flex-col items-center justify-center min-h-8 lg:min-h-10
                            w-fit max-w-[90vw]
                            bg-amber-500/70 rounded-md lg:rounded-lg
                            backdrop-blur-xs text-white text-md lg:text-xl px-3 lg:px-4 py-3
                            text-center break-words"
                style="word-wrap: break-word; hyphens: auto; pointer-events: auto;"
                @contextmenu=${e=>e.preventDefault()}
              >
                <div>${N(`heads_up_message.ffa_collusion`)}</div>
                <button
                  class="mt-2 px-3 py-1 rounded bg-black/20 hover:bg-black/30 text-sm"
                  @click=${this.onCloseCollusionWarning}
                >
                  ${N(`heads_up_message.dont_show_again`)}
                </button>
              </div>
            `:null}
      </div>
    `}};j([O()],K.prototype,`isVisible`,void 0),j([O()],K.prototype,`hasClosedCollusionWarning`,void 0),j([O()],K.prototype,`isPaused`,void 0),j([O()],K.prototype,`isImmunityActive`,void 0),j([O()],K.prototype,`isCatchingUp`,void 0),j([O()],K.prototype,`isOvertimeNotice`,void 0),j([O()],K.prototype,`toastMessage`,void 0),j([O()],K.prototype,`toastColor`,void 0),j([O()],K.prototype,`toastDragOffset`,void 0),K=Ba=j([k(`heads-up-message`)],K);var Ha=S(`images/AllianceIconWhite.svg`),Ua=S(`images/BoatIconWhite.svg`),Wa=S(`images/BuildIconWhite.svg`);S(`images/ChatIconWhite.svg`);var Ga=S(`images/DonateGoldIconWhite.svg`);S(`images/DonateTroopIconWhite.svg`);var Ka=S(`images/TradingIconWhite.svg`);S(`images/EmojiIconWhite.svg`);var qa=S(`images/InfoIcon.svg`),Ja=S(`images/SwordIconWhite.svg`);S(`images/TargetIconWhite.svg`);var Ya=S(`images/TraitorIconWhite.svg`),Xa=S(`images/XIcon.svg`),q={build:`#e6c74a`,building:`#1e3a5f`,boat:`#2a82c9`,disabled:`#94a3b8`,ally:`#4ade80`,breakAlly:`#dc2626`,breakAllyNoDebuff:`#d97706`,delete:`#ef4444`,info:`#475569`,target:`#ef4444`,attack:`#ef4444`,infoDetails:`#7f8c8d`,infoEmoji:`#fbbf24`,trade:`#0891b2`,embargo:`#7c3aed`,tooltip:{cost:`#f59e0b`,count:`#94a3b8`},chat:{default:`#6366f1`,help:`#22c55e`,attack:`#ef4444`,defend:`#3b82f6`,greet:`#f97316`,misc:`#a855f7`,warnings:`#fbbf24`}};function Za(e){let t=e.selected;if(t===null)return!1;let n=t.isFriendly;return typeof n==`function`?n.call(t,e.myPlayer):!1}function Qa(e){let t=e.selected;if(t===null)return!1;let n=t.isDisconnected;return typeof n==`function`?n.call(t):!1}q.chat.default,q.target,q.trade,N(`player_panel.start_trade`),q.embargo,N(`player_panel.stop_trade`);var $a={id:`ally_request`,name:`request`,disabled:e=>!e.playerActions?.interaction?.canSendAllianceRequest,displayed:e=>!e.playerActions?.interaction?.canBreakAlliance,color:q.ally,icon:Ha,action:e=>{e.playerActionHandler.handleAllianceRequest(e.myPlayer,e.selected),e.closeMenu()}},eo={id:`ally_extend`,name:`extend`,displayed:e=>!!e.playerActions?.interaction?.allianceInfo?.inExtensionWindow,disabled:e=>!e.playerActions?.interaction?.allianceInfo?.canExtend,color:q.ally,icon:Ha,action:e=>{e.playerActions?.interaction?.allianceInfo?.canExtend&&(e.playerActionHandler.handleExtendAlliance(e.selected),e.closeMenu())},timerFraction:e=>{let t=e.playerActions?.interaction;if(!t?.allianceInfo)return 1;let n=Math.max(0,t.allianceInfo.expiresAt-e.game.ticks()),r=Math.max(1,e.game.config().allianceExtensionPromptOffset());return Math.max(0,Math.min(1,n/r))},renderType:`allyExtend`},to={id:`ally_break`,name:`break`,disabled:e=>!e.playerActions?.interaction?.canBreakAlliance,displayed:e=>!!e.playerActions?.interaction?.canBreakAlliance,color:e=>e.selected?.isTraitor()||e.selected?.isDisconnected()?q.breakAllyNoDebuff:q.breakAlly,icon:Ya,action:e=>{e.playerActionHandler.handleBreakAlliance(e.myPlayer,e.selected),e.closeMenu()}};q.ally,q.ally,q.info,q.infoEmoji;var no={id:`info`,name:`info`,disabled:e=>!e.selected||e.game.inSpawnPhase(),icon:qa,color:q.info,action:e=>{e.playerPanel.show(e.playerActions,e.tile)}};function ro(e,t){let r=new Set,a=e=>{t.isUnitDisabled(e)||r.add(e)};return e?i.types.forEach(a):n.types.forEach(a),r}function io(t,r,i){let a=ro(t.selected===t.myPlayer,t.game.config());return pa.filter(e=>a.has(e.unitType)&&(r===`attack`?n.has(e.unitType):!n.has(e.unitType))).map(n=>({id:`${i}_${n.unitType}`,name:n.key?n.key.replace(`unit_type.`,``):n.unitType.toString(),disabled:e=>!e.buildMenu.canBuildOrUpgrade(n),color:e=>e.buildMenu.canBuildOrUpgrade(n)&&r===`attack`?q.attack:q.building,icon:hr(n.unitType),tooltipItems:[{text:N(n.key??``),className:`title`},{text:N(n.description??``),className:`description`},{text:`${L(t.buildMenu.cost(n))} ${N(`player_panel.gold`)}`,className:`cost`},n.countable?{text:`${t.buildMenu.count(n)}x`,className:`count`}:null].filter(e=>e!==null),subMenu:t=>{let r=t.playerActions.buildableUnits.find(e=>e.type===n.unitType);if(!r)return[];let i=n.unitType===h.AtomBomb&&r.canBuild!==!1;if(r.canUpgrade===!1&&!i||!t.buildMenu.canBuildOrUpgrade(n))return[];let a=t.game.myPlayer(),o=e(r,a?.gold()??0n);if(i&&(o=Math.min(o,a?.readyMissileCount()??0)),o<=1)return[];let c=[1,...i?s:p,o];return c.map((e,t)=>{let a=t===c.length-1,s=e<=o,l=m(r,e);return{id:a?`upgrade_${n.unitType}_max`:`upgrade_${n.unitType}_${e}`,name:N(`build_menu.upgrade_amount`,{amount:e.toString()}),text:N(`build_menu.upgrade_amount`,{amount:e.toString()}),fontSize:`20px`,color:e=>s&&(e.game.myPlayer()?.gold()??0n)>=l?q.building:q.disabled,icon:``,tooltipItems:[{text:N(`radial_menu.upgrade_x`,{amount:e.toString()}),className:`title`},{text:`${L(l)} ${N(`player_panel.gold`)}`,className:`cost`}],disabled:e=>!s||(e.game.myPlayer()?.gold()??0n)<l,action:t=>{i?t.eventBus.emit(new Tt(r.type,t.tile,t.uiState?.rocketDirectionUp,e)):t.eventBus.emit(new Tn(r.canUpgrade,r.type,e)),t.closeMenu()}}})},action:e=>{let t=e.playerActions.buildableUnits.find(e=>e.type===n.unitType);if(t!==void 0){if(e.buildMenu.canBuildOrUpgrade(n)){if(t.canUpgrade!==!1)e.eventBus.emit(new Tn(t.canUpgrade,t.type));else if(t.canBuild!==!1){let r=n.unitType===h.AtomBomb||n.unitType===h.HydrogenBomb?e.uiState?.rocketDirectionUp:void 0;e.eventBus.emit(new Tt(t.type,e.tile,r))}}e.closeMenu()}}}))}var ao={id:`attack`,name:`radial_attack`,disabled:e=>e.game.inSpawnPhase(),icon:Ja,color:q.attack,subMenu:e=>e===void 0?[]:io(e,`attack`,`attack`)},oo={id:`attack`,name:`radial_donate_gold`,disabled:e=>e.game.inSpawnPhase()||!e.playerActions?.interaction?.canDonateGold,icon:Ga,color:`#f59e0b`,action:e=>{e.selected&&e.playerPanel.openSendGoldModal(e.playerActions,e.tile,e.selected)}},so={id:`delete`,name:`delete`,cooldown:e=>e.myPlayer.deleteUnitCooldown(),disabled:e=>{let t=e.game.owner(e.tile),n=e.game.isLand(e.tile);return!t.isPlayer()||t.id()!==e.myPlayer.id()||!n||e.game.inSpawnPhase()||e.myPlayer.deleteUnitCooldown()>0?!0:e.myPlayer.units().filter(t=>!t.isUnderConstruction()&&t.markedForDeletion()===!1&&i.has(t.type())&&e.game.manhattanDist(t.tile(),e.tile)<=5).length===0},icon:Xa,color:q.delete,tooltipKeys:[{key:`radial_menu.delete_unit_title`,className:`title`},{key:`radial_menu.delete_unit_description`,className:`description`}],action:e=>{let t=ae(e.myPlayer.units().filter(t=>!t.isUnderConstruction()&&t.markedForDeletion()===!1&&i.has(t.type())&&e.game.manhattanDist(t.tile(),e.tile)<=5),t=>e.game.manhattanDist(t.tile(),e.tile));t&&e.playerActionHandler.handleDeleteUnit(t.id()),e.closeMenu()}},co={id:`build`,name:`build`,disabled:e=>e.game.inSpawnPhase(),icon:Wa,color:q.build,subMenu:e=>e===void 0?[]:io(e,`build`,`build`)},lo={id:`boat`,name:`boat`,disabled:e=>!e.playerActions.buildableUnits.some(e=>e.type===h.TransportShip&&e.canBuild),icon:Ua,color:q.boat,action:async e=>{e.playerActionHandler.handleBoatAttack(e.myPlayer,e.tile),e.closeMenu()}},uo={id:`player_deal`,name:`deal.title`,text:N(`deal.menu`),color:q.trade,icon:Ka,disabled:e=>e.selected===null||e.selected===e.myPlayer,subMenu:e=>[{id:`deal.trade`,name:`deal.trade`,text:N(`deal.trade`),color:q.trade,disabled:()=>!1,action:()=>{e.selected&&(e.closeMenu(),e.eventBus.emit(new Hn(e.selected,e.tile)))}},{id:`deal.defense_pact`,name:`deal.defense_pact`,text:N(`deal.defense_pact`),color:q.disabled,disabled:()=>!0},{id:`deal.protectorate`,name:`deal.protectorate`,text:N(`deal.protectorate`),color:q.disabled,disabled:()=>!0},{id:`deal.sanctions`,name:`deal.sanctions`,text:N(e.playerActions.interaction?.canEmbargo?`deal.sanctions`:`player_panel.start_trade`),color:q.embargo,disabled:e=>e.selected===null||e.selected===e.myPlayer,action:e=>{let t=e.selected;t&&(e.playerActionHandler.handleEmbargo(t,e.playerActions.interaction?.canEmbargo?`start`:`stop`),e.closeMenu())}}]},fo={disabled:e=>{let t=e.game.owner(e.tile);return e.game.isLand(e.tile)?e.game.inSpawnPhase()?!!(e.game.config().isRandomSpawn()||t.isPlayer()):Za(e)&&!Qa(e)?!e.playerActions.interaction?.canDonateTroops:!e.playerActions.canAttack:!0},action:e=>{if(e.game.inSpawnPhase())e.playerActionHandler.handleSpawn(e.tile);else if(Za(e)&&!Qa(e)){let t=e.selected,n=e.uiState?.attackRatio??1,r=Math.floor(n*e.myPlayer.troops());r>0&&e.playerActionHandler.handleDonateTroops(t,r)}else e.playerActionHandler.handleAttack(e.myPlayer,e.selected?.id()??null);e.closeMenu()}},po={id:`root`,name:`root`,disabled:()=>!1,icon:qa,color:q.info,subMenu:e=>{let t=e.selected?.isAlliedWith(e.myPlayer),r=Qa(e),i=e.game.owner(e.tile),a=i.isPlayer()&&i.id()===e.myPlayer.id(),o=e.playerActions.interaction?.allianceInfo?.inExtensionWindow,s=e.playerActions.buildableUnits?.some(e=>n.has(e.type)&&e.canBuild!==!1)??!1,c=Za(e)&&!r&&!s;return[no,...e.selected&&e.selected!==e.myPlayer?[uo]:[],...a?[so,$a,co]:[t&&!r?to:lo,o?eo:$a,c?oo:ao]].filter(e=>e!==null)}},mo=class{constructor(e,t){if(this.game=e,this.eventBus=t,this.ctModal=document.querySelector(`chat-modal`),!this.ctModal)throw Error(`Chat modal element not found. Ensure chat-modal element exists in DOM before initializing ChatIntegration`)}setupChatModal(e,t){this.ctModal.setSender(e),this.ctModal.setRecipient(t)}createQuickChatMenu(e){if(!this.ctModal)throw Error(`Chat modal not set`);let t=this.game.myPlayer();if(!t)throw Error(`Current player not found`);return this.ctModal.categories.map(n=>{let r=N(`chat.cat.${n.id}`),i=q.chat[n.id]||q.chat.default,a=(Sn[n.id]||[]).map(r=>{let a=N(`chat.${n.id}.${r.key}`);return{id:`phrase-${n.id}-${r.key}`,name:a,disabled:()=>!1,text:this.shortenText(a),fontSize:`10px`,color:i,tooltipItems:[{text:a,className:`description`}],action:i=>{r.requiresPlayer?this.ctModal.openWithSelection(n.id,r.key,t,e):this.eventBus.emit(new _n(e,`${n.id}.${r.key}`,void 0))}}});return{id:`chat-category-${n.id}`,name:r,disabled:()=>!1,text:r,color:i,_action:()=>{},subMenu:()=>a}})}shortenText(e,t=15){return e.length<=t?e:e.substring(0,t-3)+`...`}},ho=class{constructor(e,t){this.eventBus=e,this.uiState=t}handleAttack(e,t){this.eventBus.emit(new ut(t,this.uiState.attackRatio*e.troops()))}handleBoatAttack(e,t){this.eventBus.emit(new yn(t,this.uiState.attackRatio*e.troops()))}async findBestTransportShipSpawn(e,t){return await e.bestTransportShipSpawn(t)}handleSpawn(e){this.eventBus.emit(new xn(e))}handleAllianceRequest(e,t){this.eventBus.emit(new Ut(e,t))}handleExtendAlliance(e){this.eventBus.emit(new sn(e))}handleBreakAlliance(e,t){this.eventBus.emit(new Xn(e,t))}handleTargetPlayer(e){e&&this.eventBus.emit(new Vn(e))}handleDonateGold(e){this.eventBus.emit(new Gn(e,null))}handleDonateTroops(e,t){let n=t??null;n!==null&&n<=0||this.eventBus.emit(new Dn(e,n))}handleEmbargo(e,t){this.eventBus.emit(new zn(e,t))}handleEmoji(e,t){this.eventBus.emit(new qn(e,t))}handleDeleteUnit(e){this.eventBus.emit(new Ln(e))}},go=S(`images/DonateTroopIconWhite.svg`),_o=S(`images/SwordIconWhite.svg`);function vo(){return{canAttack:!1,buildableUnits:[],canSendEmojiAllPlayers:!1}}var yo=class{getTickIntervalMs(){return 500}constructor(e,t,n,r,i,a,o){this.eventBus=e,this.game=t,this.transformHandler=n,this.emojiTable=r,this.buildMenu=i,this.uiState=a,this.playerPanel=o,this.clickedTile=null;let s={centerButtonIcon:_o,centerButtonSize:34,iconSize:34,menuTransitionDuration:240,tooltipStyle:`
        .radial-tooltip .cost {
          margin-top: 4px;
          color: ${q.tooltip.cost};
        }
        .radial-tooltip .count {
          color: ${q.tooltip.count};
        }
      `};this.radialMenu=new In(this.eventBus,po,fo,s),this.playerActionHandler=new ho(this.eventBus,this.uiState),this.chatIntegration=new mo(this.game,this.eventBus)}init(){this.radialMenu.init(),this.eventBus.on(jn,e=>{let t=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.game.isValidCoord(t.x,t.y))return;let n=this.game.ref(t.x,t.y);if(this.clickedTile=n,this.game.isSpectator()){this.game.owner(n).isPlayer()&&this.playerPanel.show(vo(),n);return}let r=this.game.myPlayer();r!==null&&r.actions(n).then(t=>{this.updatePlayerActions(r,t,n,e.x,e.y)}).catch(e=>{console.warn(`Failed to load radial menu actions:`,e)})})}async updatePlayerActions(e,t,n,r=null,i=null){this.buildMenu.playerBuildables=t.buildableUnits;let a=this.game.owner(n),o=a.isPlayer()?a:null;o&&this.chatIntegration.setupChatModal(e,o);let s={myPlayer:e,selected:o,tile:n,playerActions:t,game:this.game,buildMenu:this.buildMenu,emojiTable:this.emojiTable,playerActionHandler:this.playerActionHandler,playerPanel:this.playerPanel,chatIntegration:this.chatIntegration,uiState:this.uiState,closeMenu:()=>this.closeMenu(),eventBus:this.eventBus},c=o!==null&&o.isFriendly(e)&&!o.isDisconnected();this.radialMenu.setCenterButtonAppearance(c?go:_o,c?`#22d3ee`:`#0f2744`,c?this.radialMenu.getDefaultCenterIconSize()*.75:this.radialMenu.getDefaultCenterIconSize()),this.radialMenu.setParams(s),r!==null&&i!==null?this.radialMenu.showRadialMenu(r,i):this.radialMenu.refresh()}async tick(){if(!this.radialMenu.isMenuVisible()||this.clickedTile===null)return;let e=this.game.myPlayer();if(e===null)return;let t=this.clickedTile;e.actions(t).then(n=>{this.updatePlayerActions(e,n,t)}).catch(e=>{console.warn(`Failed to refresh radial menu actions:`,e)})}closeMenu(){this.radialMenu.isMenuVisible()&&this.radialMenu.hideRadialMenu(),this.buildMenu.isVisible&&this.buildMenu.hideMenu(),this.emojiTable.isVisible&&this.emojiTable.hideTable(),this.playerPanel.isVisible&&this.playerPanel.hide()}},bo=class{constructor(){this.tabId=`${Date.now()}-${Math.random()}`,this.lockKey=`multi-tab-lock`,this.heartbeatIntervalMs=1e3,this.staleThresholdMs=3e3,this.heartbeatTimer=null,this.isPunished=!1,this.punishmentCount=0,this.startPenaltyCallback=()=>{},window.addEventListener(`storage`,this.onStorageEvent.bind(this)),window.addEventListener(`beforeunload`,this.onBeforeUnload.bind(this))}startMonitoring(e){this.startPenaltyCallback=e,this.writeLock(),this.heartbeatTimer=window.setInterval(()=>this.heartbeat(),this.heartbeatIntervalMs)}stopMonitoring(){this.heartbeatTimer!==null&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null),this.readLock()?.owner===this.tabId&&localStorage.removeItem(this.lockKey),window.removeEventListener(`storage`,this.onStorageEvent.bind(this)),window.removeEventListener(`beforeunload`,this.onBeforeUnload.bind(this))}heartbeat(){let e=Date.now(),t=this.readLock();if(!t||t.owner===this.tabId||e-t.timestamp>this.staleThresholdMs){this.writeLock(),this.isPunished=!1;return}this.isPunished||this.applyPunishment()}onStorageEvent(e){if(e.key===this.lockKey&&e.newValue){let t;try{t=JSON.parse(e.newValue)}catch(e){console.error(`Failed to parse lock`,e);return}t.owner!==this.tabId&&!this.isPunished&&this.applyPunishment()}}onBeforeUnload(){this.readLock()?.owner===this.tabId&&localStorage.removeItem(this.lockKey)}applyPunishment(){this.isPunished=!0,this.punishmentCount++;let e=1e4;this.startPenaltyCallback(e),setTimeout(()=>{this.isPunished=!1},e)}writeLock(){localStorage.setItem(this.lockKey,JSON.stringify({owner:this.tabId,timestamp:Date.now()}))}readLock(){let e=localStorage.getItem(this.lockKey);if(!e)return null;try{return JSON.parse(e)}catch(t){return console.error(`Failed to parse lock`,e,t),null}}},J=class extends M{constructor(...e){super(...e),this.duration=5e3,this.countdown=5,this.isVisible=!1,this.fakeIp=``,this.deviceFingerprint=``,this.reported=!0}createRenderRoot(){return this}tick(){this.game.inSpawnPhase()||this.game.config().gameConfig().gameType===u.Singleplayer||me.env()===de.Dev||this.game.config().isReplay()||this.detector||(this.detector=new bo,this.detector.startMonitoring(e=>{this.show(e)}))}init(){this.fakeIp=this.generateFakeIp(),this.deviceFingerprint=this.generateDeviceFingerprint(),this.reported=!0}generateFakeIp(){return Array.from({length:4},()=>Math.floor(Math.random()*255)).join(`.`)}generateDeviceFingerprint(){return Array.from({length:32},()=>Math.floor(Math.random()*16).toString(16)).join(``)}show(e){this.game.myPlayer()?.isAlive()&&(this.duration=e,this.countdown=Math.ceil(e/1e3),this.isVisible=!0,this.intervalId=window.setInterval(()=>{this.countdown--,this.countdown<=0&&this.hide()},1e3),this.requestUpdate())}hide(){this.isVisible=!1,this.intervalId&&=(window.clearInterval(this.intervalId),void 0),this.dispatchEvent(new CustomEvent(`penalty-complete`,{bubbles:!0,composed:!0})),this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.intervalId&&window.clearInterval(this.intervalId)}render(){return this.isVisible?A`
      <div
        class="fixed inset-0 z-50 overflow-auto bg-red-500/20 flex items-center justify-center"
      >
        <div
          class="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full m-4 transition-all transform"
        >
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-bold text-red-600 dark:text-red-400">
              ${N(`multi_tab.warning`)}
            </h2>
            <div
              class="px-2 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse"
            >
              RECORDING
            </div>
          </div>

          <p class="mb-4 text-gray-800 dark:text-gray-200">
            ${N(`multi_tab.detected`)}
          </p>

          <div
            class="mb-4 p-3 bg-gray-100 dark:bg-gray-900 rounded-md text-sm font-mono"
          >
            <div class="flex justify-between mb-1">
              <span class="text-gray-500 dark:text-gray-400">IP:</span>
              <span class="text-red-600 dark:text-red-400">${this.fakeIp}</span>
            </div>
            <div class="flex justify-between mb-1">
              <span class="text-gray-500 dark:text-gray-400"
                >Device Fingerprint:</span
              >
              <span class="text-red-600 dark:text-red-400"
                >${this.deviceFingerprint}</span
              >
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500 dark:text-gray-400">Reported:</span>
              <span class="text-red-600 dark:text-red-400"
                >${this.reported?`TRUE`:`FALSE`}</span
              >
            </div>
          </div>

          <p class="mb-4 text-gray-800 dark:text-gray-200">
            ${N(`multi_tab.please_wait`)}
            <span class="font-bold text-xl">${this.countdown}</span>
            ${N(`multi_tab.seconds`)}
          </p>

          <div
            class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4"
          >
            <div
              class="bg-red-600 dark:bg-red-500 h-2.5 rounded-full transition-all duration-1000 ease-linear w-(--width)"
              style="--width: ${this.countdown/(this.duration/1e3)*100}%"
            ></div>
          </div>

          <p class="text-sm text-gray-600 dark:text-gray-400">
            ${N(`multi_tab.explanation`)}
          </p>

          <p class="mt-3 text-xs text-red-500 font-semibold">
            Repeated violations may result in permanent account suspension.
          </p>
        </div>
      </div>
    `:A``}};j([C({type:Number})],J.prototype,`duration`,void 0),j([O()],J.prototype,`countdown`,void 0),j([O()],J.prototype,`isVisible`,void 0),j([O()],J.prototype,`fakeIp`,void 0),j([O()],J.prototype,`deviceFingerprint`,void 0),j([O()],J.prototype,`reported`,void 0),J=j([k(`multi-tab-modal`)],J);var xo=class extends M{constructor(...e){super(...e),this.isVisible=!1,this.gameID=null}createRenderRoot(){return this}init(){this.eventBus.on(jt,e=>this.onNewLobby(e))}onNewLobby(e){if(this.gameID=e.gameID,this.game?.myPlayer()?.isLobbyCreator()){window.location.href=this.lobbyUrl(!0);return}this.isVisible=!0,this.requestUpdate()}lobbyUrl(e){let t=this.gameID??``,n=`${window.location.origin}${me.gamePath(t)}`;return e?`${n}?host`:n}_handleJoin(){if(this.gameID!==null){if(P.isOnCrazyGames()){let e=P.createInviteLink(this.gameID);if(e!==null)try{window.top.location.href=e;return}catch(e){console.error(`CrazyGames: top navigation failed`,e)}}window.location.href=this.lobbyUrl(!1)}}_handleDismiss(){this.isVisible=!1,this.requestUpdate()}render(){return this.isVisible?A`
      <div
        class="fixed top-4 left-1/2 -translate-x-1/2 z-[10010] flex items-center gap-3 bg-gray-800/90 text-white px-4 py-3 rounded-lg shadow-2xl backdrop-blur-xs max-w-[90%]"
      >
        <span>${N(`new_lobby_prompt.message`)}</span>
        <o-button
          variant="primary"
          translationKey="new_lobby_prompt.join"
          @click=${this._handleJoin}
        ></o-button>
        <button
          class="text-white/70 hover:text-white text-xl leading-none px-1"
          aria-label=${N(`new_lobby_prompt.dismiss`)}
          @click=${this._handleDismiss}
        >
          ✕
        </button>
      </div>
    `:A``}};j([O()],xo.prototype,`isVisible`,void 0),xo=j([k(`new-lobby-prompt`)],xo);var So,Y=class extends M{static{So=this}ensureUiText(){let e=this.langSelector&&this.langSelector.isConnected?this.langSelector:document.querySelector(`lang-selector`);this.langSelector=e;let t=e?.currentLang??null,n=e?.translations,r=e?.defaultTranslations;t===this.uiTextLang&&n===this.uiTextTranslationsRef&&r===this.uiTextDefaultTranslationsRef||(this.uiTextLang=t,this.uiTextTranslationsRef=n,this.uiTextDefaultTranslationsRef=r,this.uiText={copied:N(`common.copied`),failedCopy:N(`common.failed_copy`),copyClipboard:N(`performance_overlay.copy_clipboard`),reset:N(`performance_overlay.reset`),copyJsonTitle:N(`performance_overlay.copy_json_title`),fps:N(`performance_overlay.fps`),avg60s:N(`performance_overlay.avg_60s`),frame:N(`performance_overlay.frame`),tps:N(`performance_overlay.tps`),tpsAvg60s:N(`performance_overlay.tps_avg_60s`),tickExec:N(`performance_overlay.tick_exec`),maxLabel:N(`performance_overlay.max_label`),tickDelay:N(`performance_overlay.tick_delay`),layersHeader:N(`performance_overlay.layers_header`),tickLayersHeader:N(`performance_overlay.tick_layers_header`),collapse:N(`performance_overlay.collapse`),expand:N(`performance_overlay.expand`),renderLayersTableHeader:N(`performance_overlay.render_layers_table_header`),tickLayersTableHeader:N(`performance_overlay.tick_layers_table_header`)})}static computeLayerBreakdown(e){return Array.from(e.entries()).map(([e,t])=>({name:e,avg:t.avg,max:t.max,total:t.total})).sort((e,t)=>t.total-e.total)}static{this.styles=ue`
    .performance-overlay {
      position: fixed;
      top: var(--top, 20px);
      left: var(--left, 50%);
      transform: var(--transform, translateX(-50%));
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 32px 16px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 12px;
      z-index: 9999;
      user-select: none;
      cursor: default;
      transition: none;
      box-sizing: border-box;
      width: var(--overlay-width, min(460px, calc(100vw - 16px)));
      max-width: calc(100vw - 16px);
      max-height: calc(100vh - 16px);
      overflow: hidden;
    }

    .overlay-scroll {
      overflow: auto;
      max-height: calc(100vh - 56px);
    }

    .performance-overlay.dragging {
      cursor: grabbing;
      transition: none;
      opacity: 0.5;
    }

    .drag-handle {
      position: absolute;
      top: 0;
      left: 0;
      right: 12px; /* leave space for the resize handle */
      height: 32px;
      cursor: grab;
      touch-action: none;
      pointer-events: auto;
    }

    .performance-overlay.dragging .drag-handle {
      cursor: grabbing;
    }

    .performance-line {
      margin: 2px 0;
    }

    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .collapse-button {
      width: 22px;
      height: 18px;
      padding: 0;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      font-family: monospace;
      font-size: 12px;
      line-height: 1;
      cursor: pointer;
      user-select: none;
      pointer-events: auto;
    }

    .resize-handle {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 12px;
      cursor: ew-resize;
      touch-action: none;
      pointer-events: auto;
    }

    .resize-handle::after {
      content: "";
      position: absolute;
      top: 6px;
      bottom: 6px;
      right: 4px;
      width: 2px;
      border-radius: 2px;
      background: rgba(255, 255, 255, 0.25);
    }

    .performance-good {
      color: #4ade80; /* green-400 */
    }

    .performance-warning {
      color: #fbbf24; /* amber-400 */
    }

    .performance-bad {
      color: #f87171; /* red-400 */
    }

    .close-button {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      color: white;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      user-select: none;
      pointer-events: auto;
    }

    .reset-button {
      position: absolute;
      top: 8px;
      left: 8px;
      height: 20px;
      padding: 0 6px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      color: white;
      font-size: 10px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      user-select: none;
      pointer-events: auto;
    }

    .copy-json-button {
      position: absolute;
      top: 8px;
      left: 70px;
      height: 20px;
      padding: 0 6px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 4px;
      color: white;
      font-size: 10px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      user-select: none;
      pointer-events: auto;
    }

    .layers-section {
      margin-top: 4px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 4px;
    }

    .layer-row {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      margin-top: 2px;
      padding: 2px 4px;
      border-radius: 3px;
      background: linear-gradient(
        90deg,
        rgba(56, 189, 248, 0.35) 0%,
        rgba(56, 189, 248, 0.35) var(--pct, 0%),
        rgba(56, 189, 248, 0) var(--pct, 0%),
        rgba(56, 189, 248, 0) 100%
      );
    }

    .layer-row.table-header {
      background: none;
      opacity: 0.75;
      font-size: 11px;
      margin-top: 4px;
    }

    .layer-row.inactive {
      opacity: 0.5;
    }

    .layer-name {
      flex: 0 0 280px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .layer-metrics {
      flex: 0 0 auto;
      white-space: nowrap;
    }
  `}constructor(){super(),this.subscribedEventBus=null,this.isUserSettingsListenerAttached=!1,this.currentFPS=0,this.averageFPS=0,this.frameTime=0,this.tickExecutionAvg=0,this.tickExecutionMax=0,this.tickDelayAvg=0,this.tickDelayMax=0,this.isVisible=!1,this.currentTPS=0,this.averageTPS=0,this.isDragging=!1,this.position={x:8,y:8},this.copyStatus=`idle`,this.renderLayersExpanded=!1,this.tickLayersExpanded=!1,this.overlayWidthPx=null,this.frameCount=0,this.lastTime=0,this.frameTimes=[],this.frameTimesSum=0,this.fpsHistory=[],this.fpsHistorySum=0,this.lastSecondTime=0,this.framesThisSecond=0,this.fpsRafId=null,this.tickExecutionTimes=[],this.tickExecutionTimesSum=0,this.tickDelayTimes=[],this.tickDelayTimesSum=0,this.tickTimestamps=[],this.tickHead1s=0,this.tickHead60s=0,this.copyStatusTimeoutId=null,this.resizeState=null,this.dragState=null,this.layerStats=new Map,this.tickLayerStats=new Map,this.tickLayerLastCount=0,this.tickLayerLastTotalMs=0,this.tickLayerLastDurations={},this.renderLastTickFrameCount=0,this.renderLastTickLayerTotalMs=0,this.renderLastTickLayerDurations={},this.renderPerTickLayerStats=new Map,this.langSelector=null,this.uiTextLang=null,this.uiTextTranslationsRef=void 0,this.uiTextDefaultTranslationsRef=void 0,this.uiText={copied:`common.copied`,failedCopy:`common.failed_copy`,copyClipboard:`performance_overlay.copy_clipboard`,reset:`performance_overlay.reset`,copyJsonTitle:`performance_overlay.copy_json_title`,fps:`performance_overlay.fps`,avg60s:`performance_overlay.avg_60s`,frame:`performance_overlay.frame`,tps:`performance_overlay.tps`,tpsAvg60s:`performance_overlay.tps_avg_60s`,tickExec:`performance_overlay.tick_exec`,maxLabel:`performance_overlay.max_label`,tickDelay:`performance_overlay.tick_delay`,layersHeader:`performance_overlay.layers_header`,tickLayersHeader:`performance_overlay.tick_layers_header`,collapse:`performance_overlay.collapse`,expand:`performance_overlay.expand`,renderLayersTableHeader:`performance_overlay.render_layers_table_header`,tickLayersTableHeader:`performance_overlay.tick_layers_table_header`},this.onTogglePerformanceOverlay=e=>{let t=!this.isVisible;this.setVisible(t),this.userSettings.setPerformanceOverlay(t)},this.onTickMetricsEvent=e=>{this.updateTickMetrics(e.tickExecutionDuration,e.tickDelay)},this.onUserSettingsChanged=e=>{let t=e.detail===`true`;this.isVisible!==t&&this.setVisible(t)},this.onDragPointerMove=e=>{if(!this.dragState||e.pointerId!==this.dragState.pointerId)return;let t=e.clientX-this.dragState.dragStart.x,n=e.clientY-this.dragState.dragStart.y,r=window.innerWidth,i=window.innerHeight,a=Math.min(460,Math.max(0,r-16)),o=Math.min(this.overlayWidthPx??a,r-16);this.position={x:Math.max(8,Math.min(r-o-8,t)),y:Math.max(8,Math.min(i-100,n))}},this.onDragPointerUp=e=>{!this.dragState||e.pointerId!==this.dragState.pointerId||(globalThis.removeEventListener(`pointermove`,this.onDragPointerMove),globalThis.removeEventListener(`pointerup`,this.onDragPointerUp),globalThis.removeEventListener(`pointercancel`,this.onDragPointerUp),this.dragState=null,this.isDragging=!1)},this.handleDragPointerDown=e=>{e.preventDefault(),e.stopPropagation(),this.isDragging=!0,this.dragState={pointerId:e.pointerId,dragStart:{x:e.clientX-this.position.x,y:e.clientY-this.position.y}},globalThis.addEventListener(`pointermove`,this.onDragPointerMove),globalThis.addEventListener(`pointerup`,this.onDragPointerUp),globalThis.addEventListener(`pointercancel`,this.onDragPointerUp)},this.onResizePointerMove=e=>{if(!this.resizeState||e.pointerId!==this.resizeState.pointerId)return;let t=window.innerWidth,n=Math.max(8,Math.min(this.position.x,t)),r=Math.max(120,t-n-8),i=Math.min(260,r),a=e.clientX-this.resizeState.startClientX,o=this.resizeState.startWidthPx+a,s=Math.max(i,Math.min(r,o));this.resizeState.pendingWidthPx=s,this.renderRoot.querySelector(`.performance-overlay`)?.style.setProperty(`--overlay-width`,`${s}px`)},this.onResizePointerUp=e=>{!this.resizeState||e.pointerId!==this.resizeState.pointerId||(globalThis.removeEventListener(`pointermove`,this.onResizePointerMove),globalThis.removeEventListener(`pointerup`,this.onResizePointerUp),globalThis.removeEventListener(`pointercancel`,this.onResizePointerUp),this.overlayWidthPx=this.resizeState.pendingWidthPx,this.resizeState=null)},this.handleResizePointerDown=e=>{e.preventDefault(),e.stopPropagation();let t=this.renderRoot.querySelector(`.performance-overlay`)?.getBoundingClientRect().width??460;this.resizeState={pointerId:e.pointerId,startClientX:e.clientX,startWidthPx:t,pendingWidthPx:t},globalThis.addEventListener(`pointermove`,this.onResizePointerMove),globalThis.addEventListener(`pointerup`,this.onResizePointerUp),globalThis.addEventListener(`pointercancel`,this.onResizePointerUp)},this.handleReset=()=>{this.frameCount=0,this.lastTime=0,this.frameTimes=[],this.frameTimesSum=0,this.fpsHistory=[],this.fpsHistorySum=0,this.lastSecondTime=0,this.framesThisSecond=0,this.currentFPS=0,this.averageFPS=0,this.frameTime=0,this.tickExecutionTimes=[],this.tickDelayTimes=[],this.tickExecutionTimesSum=0,this.tickDelayTimesSum=0,this.tickExecutionAvg=0,this.tickExecutionMax=0,this.tickDelayAvg=0,this.tickDelayMax=0,this.currentTPS=0,this.averageTPS=0,this.tickTimestamps=[],this.tickHead1s=0,this.tickHead60s=0,this.layerStats.clear(),this.tickLayerStats.clear(),this.tickLayerLastCount=0,this.tickLayerLastTotalMs=0,this.tickLayerLastDurations={},this.renderLastTickFrameCount=0,this.renderLastTickLayerTotalMs=0,this.renderLastTickLayerDurations={},this.renderPerTickLayerStats.clear(),this.renderLayersExpanded=!1,this.tickLayersExpanded=!1},this.toggleRenderLayersExpanded=e=>{e.preventDefault(),e.stopPropagation(),this.renderLayersExpanded=!this.renderLayersExpanded},this.toggleTickLayersExpanded=e=>{e.preventDefault(),e.stopPropagation(),this.tickLayersExpanded=!this.tickLayersExpanded}}init(){this.setVisible(this.userSettings.performanceOverlay()),this.subscribedEventBus&&this.subscribedEventBus!==this.eventBus&&(this.subscribedEventBus.off(Un,this.onTogglePerformanceOverlay),this.subscribedEventBus.off(wt,this.onTickMetricsEvent),this.subscribedEventBus=null),this.subscribedEventBus!==this.eventBus&&(this.eventBus.on(Un,this.onTogglePerformanceOverlay),this.eventBus.on(wt,this.onTickMetricsEvent),this.subscribedEventBus=this.eventBus),this.isUserSettingsListenerAttached||=(globalThis.addEventListener(`${Fe}:${Be}`,this.onUserSettingsChanged),!0)}disconnectedCallback(){super.disconnectedCallback(),this.stopFpsLoop(),this.isUserSettingsListenerAttached&&=(globalThis.removeEventListener(`${Fe}:${Be}`,this.onUserSettingsChanged),!1),this.subscribedEventBus&&=(this.subscribedEventBus.off(Un,this.onTogglePerformanceOverlay),this.subscribedEventBus.off(wt,this.onTickMetricsEvent),null),this.copyStatusTimeoutId&&=(clearTimeout(this.copyStatusTimeoutId),null),this.resizeState&&=(globalThis.removeEventListener(`pointermove`,this.onResizePointerMove),globalThis.removeEventListener(`pointerup`,this.onResizePointerUp),globalThis.removeEventListener(`pointercancel`,this.onResizePointerUp),null),this.dragState&&(globalThis.removeEventListener(`pointermove`,this.onDragPointerMove),globalThis.removeEventListener(`pointerup`,this.onDragPointerUp),globalThis.removeEventListener(`pointercancel`,this.onDragPointerUp),this.dragState=null,this.isDragging=!1)}setVisible(e){this.isVisible=e,xi.setEnabled(e),e?this.startFpsLoop():this.stopFpsLoop(),!e&&this.resizeState&&(globalThis.removeEventListener(`pointermove`,this.onResizePointerMove),globalThis.removeEventListener(`pointerup`,this.onResizePointerUp),globalThis.removeEventListener(`pointercancel`,this.onResizePointerUp),this.resizeState=null),!e&&this.dragState&&(globalThis.removeEventListener(`pointermove`,this.onDragPointerMove),globalThis.removeEventListener(`pointerup`,this.onDragPointerUp),globalThis.removeEventListener(`pointercancel`,this.onDragPointerUp),this.dragState=null,this.isDragging=!1)}handleClose(){this.setVisible(!1),this.userSettings.setPerformanceOverlay(!1)}startFpsLoop(){if(this.fpsRafId!==null)return;let e=()=>{this.updateFrameMetrics(0),this.fpsRafId=requestAnimationFrame(e)};this.fpsRafId=requestAnimationFrame(e)}stopFpsLoop(){this.fpsRafId!==null&&(cancelAnimationFrame(this.fpsRafId),this.fpsRafId=null,this.lastTime=0,this.lastSecondTime=0,this.framesThisSecond=0)}updateFrameMetrics(e,t){if(!this.isVisible)return;let n=performance.now();if(this.lastTime===0){this.lastTime=n,this.lastSecondTime=n;return}let r=n-this.lastTime;if(this.frameTimes.push(r),this.frameTimesSum+=r,this.frameTimes.length>60){let e=this.frameTimes.shift();e!==void 0&&(this.frameTimesSum-=e)}if(this.frameTimes.length>0){let e=this.frameTimesSum/this.frameTimes.length;this.currentFPS=Math.round(1e3/e),this.frameTime=Math.round(e)}if(this.framesThisSecond++,n-this.lastSecondTime>=1e3){if(this.fpsHistory.push(this.framesThisSecond),this.fpsHistorySum+=this.framesThisSecond,this.fpsHistory.length>60){let e=this.fpsHistory.shift();e!==void 0&&(this.fpsHistorySum-=e)}this.fpsHistory.length>0&&(this.averageFPS=Math.round(this.fpsHistorySum/this.fpsHistory.length)),this.framesThisSecond=0,this.lastSecondTime=n}this.lastTime=n,this.frameCount++,t&&this.updateLayerStats(t)}updateLayerStats(e){Object.entries(e).forEach(([e,t])=>{let n=this.layerStats.get(e);if(!n)this.layerStats.set(e,{avg:t,max:t,last:t,total:t});else{let r=n.avg+.2*(t-n.avg),i=Math.max(n.max,t),a=n.total+t;this.layerStats.set(e,{avg:r,max:i,last:t,total:a})}})}updateRenderPerTickMetrics(e,t){if(this.isVisible){this.renderLastTickFrameCount=e,this.renderLastTickLayerDurations=t,this.renderLastTickLayerTotalMs=Object.values(t).reduce((e,t)=>e+t,0);for(let[e,n]of Object.entries(t)){let t=this.renderPerTickLayerStats.get(e);if(!t){this.renderPerTickLayerStats.set(e,{avg:n,max:n,last:n,total:n});continue}let r=t.avg+.2*(n-t.avg),i=Math.max(t.max,n),a=t.total+n;this.renderPerTickLayerStats.set(e,{avg:r,max:i,last:n,total:a})}}}updateTickLayerMetrics(e){if(!this.isVisible)return;let t=Object.entries(e);this.tickLayerLastCount=t.length,this.tickLayerLastDurations=e,this.tickLayerLastTotalMs=t.reduce((e,[,t])=>e+t,0),t.forEach(([e,t])=>{let n=this.tickLayerStats.get(e);if(!n)this.tickLayerStats.set(e,{avg:t,max:t,last:t,total:t});else{let r=n.avg+.2*(t-n.avg),i=Math.max(n.max,t),a=n.total+t;this.tickLayerStats.set(e,{avg:r,max:i,last:t,total:a})}})}updateTickMetrics(e,t){if(!this.isVisible)return;let n=performance.now();for(this.tickTimestamps.push(n);this.tickHead1s<this.tickTimestamps.length&&n-this.tickTimestamps[this.tickHead1s]>1e3;)this.tickHead1s++;for(;this.tickHead60s<this.tickTimestamps.length&&n-this.tickTimestamps[this.tickHead60s]>6e4;)this.tickHead60s++;let r=this.tickTimestamps.length-this.tickHead1s,i=this.tickTimestamps.length-this.tickHead60s;this.currentTPS=r;let a=i>0?this.tickTimestamps[this.tickHead60s]:n,o=Math.min(60,Math.max(1,(n-a)/1e3));if(this.averageTPS=Math.round(i/o*10)/10,this.tickHead60s>4e3&&(this.tickTimestamps=this.tickTimestamps.slice(this.tickHead60s),this.tickHead1s=Math.max(0,this.tickHead1s-this.tickHead60s),this.tickHead60s=0),e!==void 0){if(this.tickExecutionTimes.push(e),this.tickExecutionTimesSum+=e,this.tickExecutionTimes.length>60){let e=this.tickExecutionTimes.shift();e!==void 0&&(this.tickExecutionTimesSum-=e)}if(this.tickExecutionTimes.length>0){let e=this.tickExecutionTimesSum/this.tickExecutionTimes.length;this.tickExecutionAvg=Math.round(e*100)/100;let t=0;for(let e of this.tickExecutionTimes)t=Math.max(t,e);this.tickExecutionMax=Math.round(t)}}if(t!==void 0){if(this.tickDelayTimes.push(t),this.tickDelayTimesSum+=t,this.tickDelayTimes.length>60){let e=this.tickDelayTimes.shift();e!==void 0&&(this.tickDelayTimesSum-=e)}if(this.tickDelayTimes.length>0){let e=this.tickDelayTimesSum/this.tickDelayTimes.length;this.tickDelayAvg=Math.round(e*100)/100;let t=0;for(let e of this.tickDelayTimes)t=Math.max(t,e);this.tickDelayMax=Math.round(t)}}}getPerformanceColor(e){return e>=55?`performance-good`:e>=30?`performance-warning`:`performance-bad`}getTPSColor(e){return e>=18?`performance-good`:e>=10?`performance-warning`:`performance-bad`}buildPerformanceSnapshot(){return{timestamp:new Date().toISOString(),fps:{current:this.currentFPS,average60s:this.averageFPS,frameTimeMs:this.frameTime,history:[...this.fpsHistory]},tps:{current:this.currentTPS,average60s:this.averageTPS},ticks:{executionAvgMs:this.tickExecutionAvg,executionMaxMs:this.tickExecutionMax,delayAvgMs:this.tickDelayAvg,delayMaxMs:this.tickDelayMax,executionSamples:[...this.tickExecutionTimes],delaySamples:[...this.tickDelayTimes]},renderPerTickLast:{frames:this.renderLastTickFrameCount,layerTotalMs:this.renderLastTickLayerTotalMs,layers:{...this.renderLastTickLayerDurations}},layers:So.computeLayerBreakdown(this.layerStats).map(e=>({...e})),tickLayers:So.computeLayerBreakdown(this.tickLayerStats).map(e=>({...e}))}}clearCopyStatusTimeout(){this.copyStatusTimeoutId!==null&&(clearTimeout(this.copyStatusTimeoutId),this.copyStatusTimeoutId=null)}scheduleCopyStatusReset(){this.clearCopyStatusTimeout(),this.copyStatusTimeoutId=setTimeout(()=>{this.copyStatus=`idle`,this.copyStatusTimeoutId=null},2e3)}async handleCopyJson(){let e=this.buildPerformanceSnapshot(),t=JSON.stringify(e,null,2);try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(t);else{let e=document.createElement(`textarea`);e.value=t,e.style.position=`fixed`,e.style.left=`-9999px`,document.body.appendChild(e),e.select(),document.execCommand(`copy`),document.body.removeChild(e)}this.copyStatus=`success`}catch(e){console.warn(`Failed to copy performance snapshot`,e),this.copyStatus=`error`}this.scheduleCopyStatusReset()}render(){if(!this.isVisible)return A``;this.ensureUiText();let e=window.innerWidth,t=window.innerHeight,n=Math.min(460,Math.max(0,e-16)),r=Math.min(this.overlayWidthPx??n,e-16),i=Math.max(8,e-r-8),a=Math.max(8,Math.min(this.position.x,i)),o=Math.max(8,Math.min(this.position.y,t-100)),s=this.copyStatus===`success`?this.uiText.copied:this.copyStatus===`error`?this.uiText.failedCopy:this.uiText.copyClipboard,c=this.renderLayersExpanded?So.computeLayerBreakdown(this.layerStats):[],l=this.tickLayersExpanded?So.computeLayerBreakdown(this.tickLayerStats):[],u=c.slice(0,10),d=l.slice(0,10),f=u.length>0?Math.max(...u.map(e=>e.avg)):1,p=d.length>0?Math.max(...d.map(e=>e.avg)):1,m=this.overlayWidthPx===null?``:`--overlay-width: ${this.overlayWidthPx}px;`;return A`
      <div
        class="performance-overlay ${this.isDragging?`dragging`:``}"
        style="--left: ${a}px; --top: ${o}px; --transform: none; ${m}"
      >
        <div
          class="drag-handle"
          @pointerdown=${this.handleDragPointerDown}
        ></div>
        <button class="reset-button" @click="${this.handleReset}">
          ${this.uiText.reset}
        </button>
        <button
          class="copy-json-button"
          @click="${this.handleCopyJson}"
          title="${this.uiText.copyJsonTitle}"
        >
          ${s}
        </button>
        <button class="close-button" @click="${this.handleClose}">×</button>
        <div
          class="resize-handle"
          @pointerdown=${this.handleResizePointerDown}
        ></div>
        <div class="overlay-scroll">
          <div class="performance-line">
            ${this.uiText.fps}
            <span class="${this.getPerformanceColor(this.currentFPS)}"
              >${this.currentFPS}</span
            >
          </div>
          <div class="performance-line">
            ${this.uiText.avg60s}
            <span class="${this.getPerformanceColor(this.averageFPS)}"
              >${this.averageFPS}</span
            >
          </div>
          <div class="performance-line">
            ${this.uiText.frame}
            <span class="${this.getPerformanceColor(1e3/this.frameTime)}"
              >${this.frameTime}ms</span
            >
          </div>
          <div class="performance-line">
            ${this.uiText.tps}
            <span class="${this.getTPSColor(this.currentTPS)}"
              >${this.currentTPS}</span
            >
            (${this.uiText.tpsAvg60s}
            <span>${this.averageTPS}</span>)
          </div>
          <div class="performance-line">
            ${this.uiText.tickExec}
            <span>${this.tickExecutionAvg.toFixed(2)}ms</span>
            (${this.uiText.maxLabel} <span>${this.tickExecutionMax}ms</span>)
          </div>
          <div class="performance-line">
            ${this.uiText.tickDelay}
            <span>${this.tickDelayAvg.toFixed(2)}ms</span>
            (${this.uiText.maxLabel} <span>${this.tickDelayMax}ms</span>)
          </div>
          ${this.layerStats.size?A`<div class="layers-section">
                <div class="performance-line section-header">
                  <span>${this.uiText.layersHeader}</span>
                  <button
                    class="collapse-button"
                    @click=${this.toggleRenderLayersExpanded}
                    title=${this.renderLayersExpanded?this.uiText.collapse:this.uiText.expand}
                  >
                    ${this.renderLayersExpanded?`▾`:`▸`}
                  </button>
                </div>
                <div class="performance-line">
                  ${N(`performance_overlay.render_layers_summary`,{frames:this.renderLastTickFrameCount,ms:this.renderLastTickLayerTotalMs.toFixed(2)})}
                </div>
                ${this.renderLayersExpanded?A`<div class="layer-row table-header" style="--pct: 0%;">
                        <span class="layer-name"></span>
                        <span class="layer-metrics">
                          ${this.uiText.renderLayersTableHeader}
                        </span>
                      </div>
                      ${u.map(e=>{let t=Math.min(100,e.avg/f*100||0),n=this.renderLastTickLayerDurations[e.name]??0,r=this.renderPerTickLayerStats.get(e.name)?.avg??0,i=n<=.01,a=`${e.name} | last tick render: ${n.toFixed(2)}ms`;return A`<div
                          class="layer-row ${i?`inactive`:``}"
                          style="--pct: ${t}%;"
                          title=${a}
                        >
                          <span class="layer-name" title=${e.name}
                            >${e.name}
                          </span>
                          <span class="layer-metrics">
                            ${e.avg.toFixed(2)} / ${e.max.toFixed(2)}ms
                            | ${r.toFixed(2)}ms
                          </span>
                        </div>`})}`:A``}
              </div>`:A``}
          ${this.tickLayerStats.size?A`<div class="layers-section">
                <div class="performance-line section-header">
                  <span>${this.uiText.tickLayersHeader}</span>
                  <button
                    class="collapse-button"
                    @click=${this.toggleTickLayersExpanded}
                    title=${this.tickLayersExpanded?this.uiText.collapse:this.uiText.expand}
                  >
                    ${this.tickLayersExpanded?`▾`:`▸`}
                  </button>
                </div>
                <div class="performance-line">
                  ${N(`performance_overlay.tick_layers_summary`,{count:this.tickLayerLastCount,ms:this.tickLayerLastTotalMs.toFixed(2)})}
                </div>
                ${this.tickLayersExpanded?A`<div class="layer-row table-header" style="--pct: 0%;">
                        <span class="layer-name"></span>
                        <span class="layer-metrics">
                          ${this.uiText.tickLayersTableHeader}
                        </span>
                      </div>
                      ${d.map(e=>{let t=Math.min(100,e.avg/p*100||0),n=this.tickLayerLastDurations[e.name]??0,r=n<=.01,i=`${e.name} | last tick: ${n.toFixed(2)}ms`;return A`<div
                          class="layer-row ${r?`inactive`:``}"
                          style="--pct: ${t}%;"
                          title=${i}
                        >
                          <span class="layer-name" title=${e.name}
                            >${e.name}</span
                          >
                          <span class="layer-metrics">
                            ${e.avg.toFixed(2)} / ${e.max.toFixed(2)}ms
                          </span>
                        </div>`})}`:A``}
              </div>`:A``}
        </div>
      </div>
    `}};j([C({type:Object})],Y.prototype,`eventBus`,void 0),j([C({type:Object})],Y.prototype,`userSettings`,void 0),j([O()],Y.prototype,`currentFPS`,void 0),j([O()],Y.prototype,`averageFPS`,void 0),j([O()],Y.prototype,`frameTime`,void 0),j([O()],Y.prototype,`tickExecutionAvg`,void 0),j([O()],Y.prototype,`tickExecutionMax`,void 0),j([O()],Y.prototype,`tickDelayAvg`,void 0),j([O()],Y.prototype,`tickDelayMax`,void 0),j([O()],Y.prototype,`isVisible`,void 0),j([O()],Y.prototype,`currentTPS`,void 0),j([O()],Y.prototype,`averageTPS`,void 0),j([O()],Y.prototype,`isDragging`,void 0),j([O()],Y.prototype,`position`,void 0),j([O()],Y.prototype,`copyStatus`,void 0),j([O()],Y.prototype,`renderLayersExpanded`,void 0),j([O()],Y.prototype,`tickLayersExpanded`,void 0),j([O()],Y.prototype,`overlayWidthPx`,void 0),j([O()],Y.prototype,`tickLayerLastCount`,void 0),j([O()],Y.prototype,`tickLayerLastTotalMs`,void 0),j([O()],Y.prototype,`tickLayerLastDurations`,void 0),j([O()],Y.prototype,`renderLastTickFrameCount`,void 0),j([O()],Y.prototype,`renderLastTickLayerTotalMs`,void 0),j([O()],Y.prototype,`renderLastTickLayerDurations`,void 0),Y=So=j([k(`performance-overlay`)],Y);var Co={common:`ring-white/15`,uncommon:`ring-green-400/50`,rare:`ring-blue-400/50`,epic:`ring-purple-300/50`,legendary:`ring-orange-400/60`},wo=class extends M{constructor(...e){super(...e),this.cosmetics={},this.catalog=null,this.userMe=!1}createRenderRoot(){return this}updated(){this.toggleAttribute(`hidden`,this.childElementCount===0)}connectedCallback(){super.connectedCallback(),this.load()}async load(){let[e,t]=await Promise.all([Te(),Ae()]);this.catalog=e,this.userMe=t}openStore(e){let t=Er(e);t!==null&&window.open(new URL(t,`${window.location.origin}/`).toString(),`_blank`,`noopener`)}displayName(e){return e.type===`crown`?Xe(`crowns`,e.name):e.type===`effect`?Xe(`effects`,e.name):Xe(`territory_patterns.pattern`,e.name)}renderPreview(e){if(e.pattern!==null)return Or(e.pattern,48,48);if(e.imageUrl!==null)return A`<img
        src=${e.imageUrl}
        alt=""
        class="h-full w-full object-contain pointer-events-none"
        draggable="false"
        loading="lazy"
      />`;let t=e.resolved?.cosmetic;return t===void 0?A`<span class="text-xs font-bold text-white/40">?</span>`:xe(t)?t.attributes.type===`sparkles`?A`<sparkles-swatch
            class="block h-full w-full"
            .explosion=${t.attributes}
          ></sparkles-swatch>`:A`<shockwave-swatch
            class="block h-full w-full"
            .explosion=${t.attributes}
          ></shockwave-swatch>`:A`<trail-swatch
      class="block h-full w-full"
      .trail=${t.attributes}
    ></trail-swatch>`}renderTile(e){let t=this.displayName(e),n=Er(e)!==null,r=Co[e.resolved?.cosmetic?.rarity??``]??`ring-white/15`,i=n?N(`player_panel.cosmetic_get_label`,{name:t}):t;return A`
      <button
        type="button"
        class=${`relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-white/5 p-1 ring-1 ${r}
          ${n?`cursor-pointer transition hover:bg-white/10 active:scale-95`:`cursor-default`}`}
        title=${i}
        aria-label=${i}
        ?disabled=${!n}
        @click=${t=>{t.stopPropagation(),this.openStore(e)}}
      >
        ${this.renderPreview(e)}
        ${n?A`<span
              class="absolute bottom-0 right-0 rounded-tl bg-malibu-blue px-1 text-[10px] font-black leading-tight text-white"
              aria-hidden="true"
              >+</span
            >`:_e}
      </button>
    `}render(){let e=Dr(this.cosmetics,Ie(this.catalog,this.userMe,null));return e.length===0?_e:A`
      <div class="flex items-center gap-2">
        <span
          class="text-xs font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${N(`player_panel.cosmetics`)}
        </span>
        <div class="flex flex-wrap items-center gap-1.5">
          ${e.map(e=>this.renderTile(e))}
        </div>
      </div>
    `}};j([C({attribute:!1})],wo.prototype,`cosmetics`,void 0),j([O()],wo.prototype,`catalog`,void 0),j([O()],wo.prototype,`userMe`,void 0),wo=j([k(`equipped-cosmetics-row`)],wo);var To=`h-5 w-5 shrink-0 transition-transform group-hover:scale-110 text-zinc-400`,Eo=`text-base sm:text-[14px] leading-5 font-semibold tracking-tight`,Do=()=>{let e=`group w-full min-w-[50px] select-none flex flex-col items-center justify-center gap-1 rounded-lg py-1.5 border border-white/10 bg-white/4 shadow-xs transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/20 active:translate-y-[1px]`;return{normal:`${e} text-white/90 hover:bg-white/10 hover:text-white`,red:`${e} text-red-400 hover:bg-red-500/10 hover:text-red-300 focus-visible:ring-red-400/30`,green:`${e} text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 focus-visible:ring-emerald-400/30`,yellow:`${e} text-[#f59e0b] hover:bg-[#f59e0b]/10 hover:text-[#fbbf24] focus-visible:ring-[#f59e0b]/30`,indigo:`${e} text-indigo-400 hover:bg-indigo-500/10 hover:text-indigo-300 focus-visible:ring-indigo-400/30`,sky:`${e} text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:text-[#0ea5e9] focus-visible:ring-[#38bdf8]/30`}},X=e=>{let{onClick:t,type:n=`normal`,icon:r,iconAlt:i,title:a,label:o,disabled:s=!1}=e;return A`
    <button
      @click=${t}
      class="${Do()[n]}"
      title="${a}"
      type="button"
      aria-label="${a}"
      ?disabled=${s}
    >
      <img src=${r} alt=${i} aria-hidden="true" class="${To}" />
      <span class="${Eo}">${o}</span>
    </button>
  `},Oo=class extends M{constructor(...e){super(...e),this.spacing=`md`,this.color=`bg-zinc-700/80`}createRenderRoot(){return this}render(){let e={sm:`my-0.5`,md:`my-1`,lg:`my-2`};return A`<div
      role="separator"
      aria-hidden="true"
      class="${e[this.spacing]??e.md} h-px ${this.color||`bg-zinc-700/80`}"
    ></div>`}};j([C({type:String})],Oo.prototype,`spacing`,void 0),j([C({type:String})],Oo.prototype,`color`,void 0),Oo=j([k(`ui-divider`)],Oo);var ko=new Map(Object.entries({buddhism:`bt kh la lk mm mn sg th`,christianity:`am ao ar at au aw bb be bg bi bj bo br bs bw by bz ca cd cf ch cl cm co cr cu cv cw cy de dk do ec ee es et fi fj fm fr ga gb gd ge gf gh gp gq gr gt gu gy hn hr ht hu ie is it jm ke ki lc lr ls lt lu lv md me mg mk mq mt mw mx mz na nc ni no pa pe pf pg ph pl pr py re ro rs ru rw sb sc se si sk sr ss st sv sz tg tl to tt tz ua ug us vc ve vi vu ws za zm zw`,hinduism:`in mu np`,islam:`ae af al az ba bd bf bh bn ci dj dz eg eh er gm gn gw id iq ir jo kg km kw kz lb ly ma ml mr mv my ne ng om pk ps qa sa sd sl sn so sy td tj tm tn tr uz ye yt`,judaism:`il`,other:`tw`,unaffiliated:`cn cz hk jp kp kr mo nl nz uy vn`}).flatMap(([e,t])=>t.split(/\s+/).filter(Boolean).map(t=>[t,e])));function Ao(e){return ko.get(e.toLowerCase())}var jo=S(`images/ExitIconWhite.svg`),Mo=S(`images/ShieldIconWhite.svg`),No=class extends M{constructor(...e){super(...e),this.eventBus=null,this.myPlayer=null,this.target=null,this.open=!1,this.alreadyKicked=!1,this.isAdmin=!1,this.handleKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),this.closeModal())},this.handleKickClick=async e=>{e.stopPropagation();let t=this.myPlayer,n=this.target,r=this.eventBus;if(!t||!n||!this.canKick(t,n)||this.alreadyKicked||!r)return;let i=n.clientID();!i||i.length===0||await Le(N(`player_panel.kick_confirm`,{name:n.displayName()}))&&(r.emit(new Ue(i)),this.dispatchEvent(new CustomEvent(`kicked`,{detail:{playerId:String(n.id())}})),this.closeModal())}}createRenderRoot(){return this}updated(e){e.has(`open`)&&this.open&&queueMicrotask(()=>this.querySelector(`[role="dialog"]`)?.focus())}closeModal(){this.dispatchEvent(new CustomEvent(`close`))}canKick(e,n){return(e.isLobbyCreator()||this.isAdmin)&&n!==e&&n.type()===t.Human&&!!n.clientID()}render(){if(!this.open)return A``;let e=this.myPlayer,t=this.target;if(!e||!t)return A``;let n=this.canKick(e,t),r=this.alreadyKicked,i=N(`player_panel.moderation`),a=N(r?`player_panel.kicked`:`player_panel.kick`);return A`
      <div class="absolute inset-0 z-1200 flex items-center justify-center p-4">
        <div
          class="absolute inset-0 bg-black/60 rounded-2xl"
          @click=${()=>this.closeModal()}
        ></div>

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="moderation-title"
          class="relative z-10 w-full max-w-120 focus:outline-hidden"
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <div
            class="rounded-2xl bg-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-800 max-h-[90vh] text-zinc-200"
            @click=${e=>e.stopPropagation()}
          >
            <div class="mb-3 flex items-center justify-between relative">
              <div class="flex items-center gap-2">
                <img
                  src=${Mo}
                  alt=""
                  aria-hidden="true"
                  class="h-5 w-5"
                />
                <h2
                  id="moderation-title"
                  class="text-lg font-semibold tracking-tight text-zinc-100"
                >
                  ${i}
                </h2>
              </div>

              <button
                type="button"
                @click=${()=>this.closeModal()}
                class="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-white shadow-sm hover:bg-red-500 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 focus:outline-hidden"
                aria-label=${N(`common.close`)}
                title=${N(`common.close`)}
              >
                ✕
              </button>
            </div>

            <div
              class="mb-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div
                class="text-sm font-semibold text-zinc-100 truncate"
                title=${t.displayName()}
              >
                ${t.displayName()}
              </div>
            </div>

            <div class="grid auto-cols-fr grid-flow-col gap-1">
              ${X({onClick:this.handleKickClick,icon:jo,iconAlt:`Kick`,title:a,label:a,type:`red`,disabled:r||!n})}
            </div>
          </div>
        </div>
      </div>
    `}};j([C({attribute:!1})],No.prototype,`eventBus`,void 0),j([C({attribute:!1})],No.prototype,`myPlayer`,void 0),j([C({attribute:!1})],No.prototype,`target`,void 0),j([C({type:Boolean})],No.prototype,`open`,void 0),j([C({type:Boolean})],No.prototype,`alreadyKicked`,void 0),j([C({type:Boolean})],No.prototype,`isAdmin`,void 0),No=j([k(`player-moderation-modal`)],No);var Po=S(`images/SirenIconWhite.svg`),Fo=class extends M{constructor(...e){super(...e),this.eventBus=null,this.target=null,this.open=!1,this.reason=null,this.handleKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),this.closeModal())},this.handleSubmit=e=>{e.stopPropagation();let t=this.target,n=this.reason;if(!t||!n||!this.eventBus)return;let r=t.clientID();r&&(this.eventBus.emit(new Qn(r,n)),this.closeModal())}}createRenderRoot(){return this}updated(e){e.has(`open`)&&this.open&&(this.reason=null,queueMicrotask(()=>this.querySelector(`[role="dialog"]`)?.focus()))}closeModal(){this.dispatchEvent(new CustomEvent(`close`))}render(){if(!this.open)return A``;let e=this.target;if(!e)return A``;let t=N(`player_panel.report_title`);return A`
      <div class="absolute inset-0 z-1200 flex items-center justify-center p-4">
        <div
          class="absolute inset-0 bg-black/60 rounded-2xl"
          @click=${()=>this.closeModal()}
        ></div>

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="report-title"
          class="relative z-10 w-full max-w-120 focus:outline-hidden"
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <div
            class="rounded-2xl bg-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-800 max-h-[90vh] text-zinc-200"
            @click=${e=>e.stopPropagation()}
          >
            <div class="mb-3 flex items-center justify-between relative">
              <div class="flex items-center gap-2">
                <img
                  src=${Po}
                  alt=""
                  aria-hidden="true"
                  class="h-5 w-5"
                />
                <h2
                  id="report-title"
                  class="text-lg font-semibold tracking-tight text-zinc-100"
                >
                  ${t}
                </h2>
              </div>

              <button
                type="button"
                @click=${()=>this.closeModal()}
                class="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-white shadow-sm hover:bg-red-500 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 focus:outline-hidden"
                aria-label=${N(`common.close`)}
                title=${N(`common.close`)}
              >
                ✕
              </button>
            </div>

            <div
              class="mb-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div
                class="text-sm font-semibold text-zinc-100 truncate"
                title=${e.displayName()}
              >
                ${e.displayName()}
              </div>
            </div>

            <div class="mb-4 flex flex-col gap-1" role="radiogroup">
              ${re.options.map(e=>{let t=this.reason===e;return A`
                  <button
                    type="button"
                    role="radio"
                    aria-checked=${t}
                    @click=${()=>this.reason=e}
                    class=${`w-full text-left rounded-lg border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white/20 ${t?`border-red-400/60 bg-red-500/15 text-red-300`:`border-white/10 bg-white/4 text-zinc-200 hover:bg-white/10`}`}
                  >
                    ${N(`player_panel.report_reason_${e}`)}
                  </button>
                `})}
            </div>

            <button
              type="button"
              @click=${this.handleSubmit}
              ?disabled=${this.reason===null}
              class="w-full rounded-lg border border-red-400/40 bg-red-500/15 py-2 text-sm font-semibold text-red-300 transition-colors hover:bg-red-500/25 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-400/30"
            >
              ${N(`player_panel.report_submit`)}
            </button>
          </div>
        </div>
      </div>
    `}};j([C({attribute:!1})],Fo.prototype,`eventBus`,void 0),j([C({attribute:!1})],Fo.prototype,`target`,void 0),j([C({type:Boolean})],Fo.prototype,`open`,void 0),j([O()],Fo.prototype,`reason`,void 0),Fo=j([k(`player-report-modal`)],Fo);var Z=class extends M{constructor(...e){super(...e),this.eventBus=null,this.open=!1,this.mode=`troops`,this.total=0,this.uiState=null,this.format=I,this.myPlayer=null,this.target=null,this.gameView=null,this.heading=null,this.sendAmount=0,this.selectedPercent=null,this.PRESETS=[10,25,50,75,100],this.handleKeydown=e=>{e.key===`Escape`&&(e.preventDefault(),this.closeModal()),e.key===`Enter`&&(e.preventDefault(),this.confirm())},this.i18n={title:e=>this.mode===`troops`?N(`send_troops_modal.title_with_name`,{name:e}):N(`send_gold_modal.title_with_name`,{name:e}),availableChip:()=>N(`common.available`),availableTooltip:()=>this.mode===`troops`?N(`send_troops_modal.available_tooltip`):N(`send_gold_modal.available_tooltip`),max:()=>N(`common.preset_max`),ariaSlider:()=>this.mode===`troops`?N(`send_troops_modal.aria_slider`):N(`send_gold_modal.aria_slider`),summarySend:()=>N(`common.send`),summaryKeep:()=>N(`common.summary_keep`),closeLabel:()=>N(`common.close`),cancel:()=>N(`common.cancel`),send:()=>N(`common.send`),cap:()=>N(`common.cap_label`),capTooltip:()=>N(`common.cap_tooltip`),sliderTooltip:(e,t)=>N(`common.slider_tooltip`,{percent:e,amount:t}),capacityNote:e=>N(`send_troops_modal.capacity_note`,{amount:e}),targetDeadTitle:()=>N(`common.target_dead`),targetDeadNote:()=>N(`common.target_dead_note`)}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback();let e=this.uiState&&typeof this.uiState.attackRatio==`number`?Math.round(this.uiState.attackRatio*100):100;this.selectedPercent=this.sanitizePercent(e);let t=this.getPercentBasis();this.sendAmount=this.clampSend(Math.floor(t*this.selectedPercent/100))}updated(e){if(e.has(`open`)&&this.open){if(!this.isSenderAlive()||!this.isTargetAlive()){this.closeModal();return}queueMicrotask(()=>this.querySelector(`[role="dialog"]`)?.focus())}if(e.has(`total`)||e.has(`mode`)||e.has(`target`)||e.has(`gameView`)){let e=this.getPercentBasis();if(this.selectedPercent!==null){let t=this.sanitizePercent(this.selectedPercent),n=Math.floor(e*t/100);this.sendAmount=this.clampSend(n)}else this.sendAmount=this.clampSend(this.sendAmount)}}closeModal(){this.dispatchEvent(new CustomEvent(`close`))}confirm(){if(!this.isSenderAlive()||!this.isTargetAlive()||!this.eventBus)return;let e=this.myPlayer,t=this.target,n=this.limitAmount(this.sendAmount);if(!(!e||!t||n<=0)){if(this.mode===`troops`){if(n>Number(e.troops()))return;this.eventBus.emit(new Dn(t,n))}else{if(n>Number(e.gold()))return;this.eventBus.emit(new Gn(t,BigInt(n)))}this.dispatchEvent(new CustomEvent(`confirm`,{detail:{amount:n,closePanel:!0,success:!0}})),this.closeModal()}}toNum(e){return Number(typeof e==`bigint`?e:e??0)}getTotalNumber(){let e=this.toNum(this.total);return this.isSenderAlive()?e:0}sanitizePercent(e){return T(e,0,100)}getCapacityLeft(){if(!this.isTargetAlive())return 0;if(this.mode!==`troops`||!this.gameView||!this.target)return null;let e=this.toNum(this.target.troops()),t=this.toNum(this.gameView.config().maxTroops(this.target));return Math.max(0,t-e)}getPercentBasis(){return this.getTotalNumber()}limitAmount(e){let t=this.getCapacityLeft(),n=this.getTotalNumber();return T(e,0,t===null?n:Math.min(n,t))}clampSend(e){let t=T(e,0,this.getTotalNumber());return this.limitAmount(t)}percentOfBasis(e){let t=this.getPercentBasis();return t?Math.round(e/t*100):0}keepAfter(e){let t=this.getTotalNumber();return Math.max(0,t-e)}getFillColor(){return this.mode===`troops`?`rgb(168 85 247)`:`rgb(234 179 8)`}getMinKeepRatio(){return this.mode===`troops`?.3:0}isTargetAlive(){return this.target?.isAlive()??!1}isSenderAlive(){return this.myPlayer?.isAlive()??!1}renderHeader(){let e=this.target?.name?.()??``;return A`
      <div class="mb-3 flex items-center justify-between relative">
        <h2
          id="send-title"
          class="text-lg font-semibold tracking-tight text-zinc-100"
        >
          ${this.heading??this.i18n.title(e)}
        </h2>
        <!-- Close button -->
        <button
          type="button"
          @click=${()=>this.closeModal()}
          class="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-white shadow-sm hover:bg-red-500 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 focus:outline-hidden"
          aria-label=${this.i18n.closeLabel()}
          title=${this.i18n.closeLabel()}
        >
          ✕
        </button>
      </div>
    `}renderAvailable(){let e=this.getTotalNumber();return A`
      <div class="mb-4 pb-3 border-b border-zinc-800">
        <div class="flex items-center gap-2 text-[13px]">
          <!-- Available -->
          <span
            class="inline-flex items-center gap-1 rounded-full bg-indigo-600/15 px-2 py-0.5 ring-1 ring-indigo-400/40 text-indigo-100"
            title=${this.i18n.availableTooltip()}
          >
            <span class="opacity-90">${this.i18n.availableChip()}</span>
            <span class="font-mono tabular-nums">${this.format(e)}</span>
          </span>
        </div>
      </div>
    `}renderPresets(e){let t=this.getTotalNumber(),n=!this.isSenderAlive()||!this.isTargetAlive();return A`
      <div class="mb-8 grid grid-cols-5 gap-2">
        ${this.PRESETS.map(r=>{let i=this.sanitizePercent(r),a=(this.selectedPercent??e)===i,o=i===100?this.i18n.max():`${i}%`;return A`
            <button
              ?disabled=${n}
              class="rounded-lg px-3 py-2 text-sm ring-1 transition
                ${n?`bg-zinc-800/70 text-zinc-400 ring-zinc-700 cursor-not-allowed`:a?`bg-indigo-600 text-white ring-indigo-300/60`:`bg-zinc-800 text-zinc-200 ring-zinc-700 hover:bg-zinc-700 hover:text-zinc-50`}"
              @click=${()=>{if(n)return;this.selectedPercent=i;let e=Math.floor(t*i/100);this.sendAmount=this.clampSend(e)}}
              ?aria-pressed=${a}
              title="${i}%"
            >
              ${o}
            </button>
          `})}
      </div>
    `}renderSlider(e){let t=this.getTotalNumber(),n=this.getCapacityLeft(),r=n===null?t:Math.min(t,n),i=!this.isSenderAlive()||!this.isTargetAlive(),a=n===null?null:Math.max(0,Math.min(100,Math.round(Math.min(n,t)/(t||1)*100))),o=this.getFillColor(),s=t<=0||i;return A`
      <div class="${a===null?`mb-2`:`mb-8`}">
        <div
          class="relative px-1 rounded-lg overflow-visible focus-within:ring-2 focus-within:ring-indigo-500/30"
        >
          <input
            type="range"
            min="0"
            .max=${t}
            .value=${this.sendAmount}
            ?disabled=${s}
            @input=${e=>{if(i)return;let n=Number(e.target.value),a=t?Math.round(n/t*100):0;this.selectedPercent=this.sanitizePercent(a);let o=Math.min(n,r);this.sendAmount=this.clampSend(o)}}
            class="w-full appearance-none bg-transparent range-x focus:outline-hidden"
            aria-label=${this.i18n.ariaSlider()}
            aria-valuemin="0"
            aria-valuemax=${r}
            aria-valuetext=${this.i18n.sliderTooltip(e,this.format(this.sendAmount))}
            style="--percent:${e}%; --fill:${o}; --track: rgba(255,255,255,.28); --thumb-ring: rgb(24 24 27);"
          />

          <!-- Tooltip -->
          <div
            class="pointer-events-none absolute -top-6 -translate-x-1/2 select-none left-(--pos)"
            style="--pos: ${e}%"
          >
            <div
              class="rounded-sm bg-[#0f1116] ring-1 ring-zinc-700 text-zinc-100 px-1.5 py-0.5 text-[12px] shadow-sm whitespace-nowrap w-max z-50"
            >
              ${e}% • ${this.format(this.sendAmount)}
            </div>
          </div>

          <!-- Cap marker -->
          ${a===null?A``:A`
                <div
                  class="pointer-events-none absolute top-1/2 -translate-y-1/2 h-3 w-0.5 bg-amber-400/80 shadow-sm left-(--pos)"
                  style="--pos:${a}%;"
                  title=${this.i18n.capTooltip()}
                ></div>
                <div
                  class="pointer-events-none absolute top-full mt-1.5 -translate-x-1/2 select-none left-(--pos)"
                  style="--pos:${a}%"
                >
                  <div
                    class="rounded-sm bg-[#0f1116] ring-1 ring-amber-400/40 text-amber-200 px-1 py-0.5 text-[11px] shadow-sm whitespace-nowrap"
                  >
                    ${this.i18n.cap()}
                  </div>
                </div>
              `}
        </div>
      </div>
    `}renderCapacityNote(e){return e===this.sendAmount?A``:A`<p class="mt-1 text-xs text-amber-300">
      ${this.i18n.capacityNote(this.format(e))}
    </p>`}renderSummary(e){let t=this.getTotalNumber(),n=this.keepAfter(e),r=this.getMinKeepRatio()>0&&n<Math.floor(t*this.getMinKeepRatio());return A`
      <div class="mt-3 text-center text-sm text-zinc-200">
        ${this.i18n.summarySend()}
        <span class="font-semibold text-indigo-400 font-mono"
          >${this.format(e)}</span
        >
        · ${this.i18n.summaryKeep()}
        <span
          class="font-semibold font-mono ${r?`text-amber-400`:`text-emerald-400`}"
        >
          ${this.format(n)}
        </span>
      </div>
    `}renderActions(){let e=this.getTotalNumber(),t=!this.isSenderAlive()||!this.isTargetAlive(),n=e<=0||this.clampSend(this.sendAmount)<=0||t;return A`
      <div class="mt-5 flex justify-end gap-2">
        <button
          class="h-10 min-w-24 rounded-lg px-3 text-sm font-semibold
                 text-zinc-100 bg-zinc-800 ring-1 ring-zinc-700
                 hover:bg-zinc-700 focus:outline-hidden
                 focus-visible:ring-2 focus-visible:ring-white/20"
          @click=${()=>this.closeModal()}
        >
          ${this.i18n.cancel()}
        </button>
        <button
          class="h-10 min-w-24 rounded-lg px-3 text-sm font-semibold text-white
                 bg-indigo-600 enabled:hover:bg-indigo-500
                 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-400/50
                 disabled:cursor-not-allowed disabled:opacity-50"
          ?disabled=${n}
          @click=${()=>this.confirm()}
        >
          ${this.i18n.send()}
        </button>
      </div>
    `}renderDeadNote(){return A`
      <div
        class="mb-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-amber-200 text-sm"
      >
        <div class="font-semibold">${this.i18n.targetDeadTitle()}</div>
        <div>${this.i18n.targetDeadNote()}</div>
      </div>
    `}renderSliderStyles(){return A`
      <style>
        .range-x {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          outline: none;
          background: transparent;
        }
        .range-x::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            var(--fill) 0,
            var(--fill) var(--percent),
            /* allowed (clamped) fill */ rgba(255, 255, 255, 0.22)
              var(--percent),
            rgba(255, 255, 255, 0.22) 100%
          );
        }
        .range-x::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: var(--fill);
          border: 3px solid var(--thumb-ring);
          margin-top: -5px;
        }
        .range-x::-moz-range-track {
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.22);
        }
        .range-x::-moz-range-progress {
          height: 8px;
          border-radius: 9999px;
          background: var(--fill);
        }
        .range-x::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 9999px;
          background: var(--fill);
          border: 3px solid var(--thumb-ring);
        }
      </style>
    `}render(){if(!this.open)return A``;let e=this.percentOfBasis(this.sendAmount),t=this.limitAmount(this.sendAmount);return A`
      <div class="absolute inset-0 z-1100 flex items-center justify-center p-4">
        <div
          class="absolute inset-0 bg-black/60 rounded-2xl"
          @click=${()=>this.closeModal()}
        ></div>

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="send-title"
          class="relative z-10 w-full max-w-135 focus:outline-hidden"
          tabindex="0"
          @keydown=${this.handleKeydown}
        >
          <div
            class="rounded-2xl bg-zinc-900 p-5 shadow-2xl ring-1 ring-zinc-800 max-h-[90vh] text-zinc-200"
            @click=${e=>e.stopPropagation()}
          >
            ${this.renderHeader()} ${this.renderAvailable()}
            ${this.isTargetAlive()?A``:this.renderDeadNote()}
            ${this.renderPresets(e)} ${this.renderSlider(e)}
            ${this.mode===`troops`?this.renderCapacityNote(t):A``}
            ${this.renderSummary(t)} ${this.renderActions()}
            ${this.renderSliderStyles()}
          </div>
        </div>
      </div>
    `}};j([C({attribute:!1})],Z.prototype,`eventBus`,void 0),j([C({type:Boolean})],Z.prototype,`open`,void 0),j([C({type:String})],Z.prototype,`mode`,void 0),j([C({type:Object})],Z.prototype,`total`,void 0),j([C({type:Object})],Z.prototype,`uiState`,void 0),j([C({attribute:!1})],Z.prototype,`format`,void 0),j([C({attribute:!1})],Z.prototype,`myPlayer`,void 0),j([C({attribute:!1})],Z.prototype,`target`,void 0),j([C({attribute:!1})],Z.prototype,`gameView`,void 0),j([C({type:String})],Z.prototype,`heading`,void 0),j([O()],Z.prototype,`sendAmount`,void 0),j([O()],Z.prototype,`selectedPercent`,void 0),Z=j([k(`send-resource-modal`)],Z);var Io=[`gold`,`oil`,`gas`,`uranium`,`missile`],Lo={gold:S(`images/GoldCoinIcon.svg`),oil:S(`images/OilDropIcon.svg`),gas:S(`images/GasFlameIcon.svg`),uranium:S(`images/UraniumIcon.svg`),missile:hr(h.BallisticMissile)},Q=class extends M{constructor(...e){super(...e),this.eventBus=null,this.viewer=null,this.target=null,this.offeredResource=`gold`,this.requestedResource=`oil`,this.offeredAmount=`1000`,this.requestedAmount=`1000`,this.activeCategory=`trade`,this.close=()=>{this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))},this.sendOffer=()=>{let e=Number(this.offeredAmount),t=Number(this.requestedAmount);!this.eventBus||!this.target||this.viewer?.hasEmbargo(this.target)||!Number.isSafeInteger(e)||!Number.isSafeInteger(t)||e<1||t<1||e>this.available(this.viewer,this.offeredResource)||this.offeredResource===this.requestedResource||(this.eventBus.emit(new Fn(this.target,this.offeredResource,e,this.requestedResource,t)),this.close())}}createRenderRoot(){return this}respond(e){!this.eventBus||!this.target||e===`accept`&&this.viewer?.hasEmbargo(this.target)||(this.eventBus.emit(new nn(this.target,e)),this.close())}toggleEmbargo(){let e=this.viewer,t=this.target;!this.eventBus||!e||!t||this.eventBus.emit(new zn(t,e.hasEmbargoAgainst(t)?`stop`:`start`))}available(e,t){if(!e)return 0;switch(t){case`gold`:return Number(e.gold());case`oil`:return e.oil();case`gas`:return e.gas();case`uranium`:return e.uranium();case`missile`:return e.units(h.Arsenal).filter(e=>e.isActive()&&!e.isUnderConstruction()).reduce((e,t)=>e+t.missilesStored(),0)}}resourceLabel(e){switch(e){case`gold`:return N(`deal.resource.gold`);case`oil`:return N(`deal.resource.oil`);case`gas`:return N(`deal.resource.gas`);case`uranium`:return N(`deal.resource.uranium`);case`missile`:return N(`deal.resource.missile`)}}renderAmount(e,t){return A`<span class="inline-flex items-center gap-1" translate="no">
      <img
        src=${Lo[e]}
        alt=""
        class="size-4 object-contain"
      />
      <span>${L(t)}</span>
      <span translate="yes">${this.resourceLabel(e)}</span>
    </span>`}renderAmountInput(e,t,n,r=this.viewer,i){return A`<label class="flex min-w-0 flex-1 flex-col gap-1">
      <span class="text-xs text-zinc-300">${this.resourceLabel(e)}</span>
      <input
        type="number"
        min="1"
        max=${i??2**53-1}
        step="1"
        inputmode="numeric"
        .value=${t}
        @input=${e=>n(e.currentTarget.value)}
        class="w-full rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white outline-none focus:border-cyan-400"
      />
      <span class="text-xs text-zinc-400">
        ${N(`deal.available`,{amount:L(this.available(r,e))})}
      </span>
    </label>`}renderOffer(e,t){let n=e.offeredResource,r=e.offeredAmount,i=e.requestedResource,a=e.requestedAmount;return A`<div
      class="rounded-xl border border-cyan-400/25 bg-cyan-950/30 p-3"
    >
      <div class="mb-2 font-semibold text-cyan-100">
        ${N(t?`deal.incoming_offer`:`deal.pending_offer`)}
      </div>
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <span
          >${N(t?`deal.they_give`:`deal.you_give`)}</span
        >
        ${this.renderAmount(n,r)}
      </div>
      <div class="my-1 text-center text-zinc-400">↕</div>
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <span
          >${N(t?`deal.you_give`:`deal.they_give`)}</span
        >
        ${this.renderAmount(i,a)}
      </div>
      ${t?A`<div class="mt-3 flex gap-2">
            <button
              class="flex-1 rounded-lg bg-emerald-600 px-3 py-2 font-semibold hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
              ?disabled=${!!(this.viewer&&this.target&&this.viewer.hasEmbargo(this.target))}
              @click=${()=>this.respond(`accept`)}
            >
              ${N(`deal.accept`)}
            </button>
            <button
              class="flex-1 rounded-lg bg-zinc-700 px-3 py-2 hover:bg-zinc-600"
              @click=${()=>this.respond(`reject`)}
            >
              ${N(`deal.reject`)}
            </button>
          </div>`:A`<button
            class="mt-3 w-full rounded-lg bg-zinc-700 px-3 py-2 hover:bg-zinc-600"
            @click=${()=>this.respond(`cancel`)}
          >
            ${N(`deal.cancel_offer`)}
          </button>`}
    </div>`}render(){let e=this.viewer,t=this.target;if(!e||!t)return A``;let n=t.tradeOffer()?.recipientID===e.id()?t.tradeOffer():null,r=e.tradeOffer()?.recipientID===t.id()?e.tradeOffer():null,i=Number(this.offeredAmount),a=!e.hasEmbargo(t)&&Number.isSafeInteger(i)&&i>0&&i<=this.available(e,this.offeredResource)&&Number.isSafeInteger(Number(this.requestedAmount))&&Number(this.requestedAmount)>0&&this.offeredResource!==this.requestedResource;return A`<div
      class="fixed inset-0 z-[10003] flex items-center justify-center overflow-y-auto bg-black/70 p-3"
      dir=${ne()}
      @click=${this.close}
      @keydown=${e=>{e.key===`Escape`&&this.close()}}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="trade-deal-title"
        class="w-full max-w-xl rounded-2xl border border-white/10 bg-zinc-900 text-zinc-100 shadow-2xl"
        @click=${e=>e.stopPropagation()}
      >
        <header
          class="flex items-center justify-between border-b border-white/10 px-5 py-4"
        >
          <div>
            <h2 id="trade-deal-title" class="text-lg font-bold">
              ${N(`deal.title`)}
            </h2>
            <p class="text-sm text-zinc-400">${t.displayName()}</p>
          </div>
          <button
            class="rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/10"
            aria-label=${N(`common.close`)}
            @click=${this.close}
          >
            ✕
          </button>
        </header>

        <div class="max-h-[75vh] space-y-4 overflow-y-auto p-5">
          <nav
            class="grid grid-cols-2 gap-2 sm:grid-cols-4"
            aria-label=${N(`deal.categories`)}
          >
            ${[`defense_pact`,`protectorate`].map(e=>A`<button
                  disabled
                  class="rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-500"
                  title=${N(`deal.coming_soon`)}
                >
                  ${N(`deal.${e}`)}
                  <span class="mt-1 block"
                    >${N(`deal.coming_soon`)}</span
                  >
                </button>`)}
            <button
              aria-current=${this.activeCategory===`sanctions`?`page`:void 0}
              class=${this.activeCategory===`sanctions`?`rounded-xl border border-cyan-400/40 bg-cyan-950/60 px-2 py-3 text-xs font-semibold text-cyan-100`:`rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-300`}
              @click=${()=>this.activeCategory=`sanctions`}
            >
              ${N(`deal.sanctions`)}
              <span class="mt-1 block"
                >${N(`player_panel.stop_trade`)}</span
              >
            </button>
            <button
              aria-current=${this.activeCategory===`trade`?`page`:void 0}
              class=${this.activeCategory===`trade`?`rounded-xl border border-cyan-400/40 bg-cyan-950/60 px-2 py-3 text-xs font-semibold text-cyan-100`:`rounded-xl border border-white/10 bg-zinc-800/60 px-2 py-3 text-xs text-zinc-300`}
              @click=${()=>this.activeCategory=`trade`}
            >
              ${N(`deal.trade`)}
            </button>
          </nav>

          ${this.activeCategory===`sanctions`?A`<div
                class="rounded-xl border border-violet-400/25 bg-violet-950/30 p-4"
              >
                <h3 class="mb-3 font-semibold">
                  ${N(`deal.sanctions`)}
                </h3>
                <button
                  class="w-full rounded-xl bg-violet-700 px-4 py-3 font-bold text-white transition hover:bg-violet-600"
                  @click=${this.toggleEmbargo}
                >
                  ${N(e.hasEmbargoAgainst(t)?`player_panel.start_trade`:`player_panel.stop_trade`)}
                </button>
              </div>`:A`
                ${n?this.renderOffer(n,!0):``}
                ${r?this.renderOffer(r,!1):``}
                <div
                  class="rounded-xl border border-white/10 bg-zinc-800/50 p-4"
                >
                  <h3 class="mb-3 font-semibold">
                    ${N(`deal.make_offer`)}
                  </h3>
                  <div class="grid grid-cols-2 gap-3">
                    <label class="flex min-w-0 flex-col gap-1">
                      <span class="text-xs text-zinc-300"
                        >${N(`deal.you_give`)}</span
                      >
                      <select
                        .value=${this.offeredResource}
                        @change=${e=>{this.offeredResource=e.currentTarget.value,this.offeredResource===this.requestedResource&&(this.requestedResource=Io.find(e=>e!==this.offeredResource))}}
                        class="rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white"
                      >
                        ${Io.map(e=>A`<option value=${e}>
                              ${this.resourceLabel(e)}
                            </option>`)}
                      </select>
                    </label>
                    ${this.renderAmountInput(this.offeredResource,this.offeredAmount,e=>this.offeredAmount=e,e,this.available(e,this.offeredResource))}
                    <label class="flex min-w-0 flex-col gap-1">
                      <span class="text-xs text-zinc-300"
                        >${N(`deal.you_receive`)}</span
                      >
                      <select
                        .value=${this.requestedResource}
                        @change=${e=>this.requestedResource=e.currentTarget.value}
                        class="rounded-lg border border-white/15 bg-zinc-800 px-3 py-2 text-white"
                      >
                        ${Io.map(e=>A`<option
                              value=${e}
                              ?disabled=${e===this.offeredResource}
                            >
                              ${this.resourceLabel(e)}
                            </option>`)}
                      </select>
                    </label>
                    ${this.renderAmountInput(this.requestedResource,this.requestedAmount,e=>this.requestedAmount=e,t)}
                  </div>
                  <button
                    class="mt-4 w-full rounded-xl bg-cyan-600 px-4 py-3 font-bold text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-40"
                    ?disabled=${!a}
                    @click=${this.sendOffer}
                  >
                    ${N(`deal.send_offer`)}
                  </button>
                  <p class="mt-2 text-xs text-zinc-400">
                    ${N(`deal.acceptance_note`)}
                  </p>
                </div>
              `}
        </div>
      </section>
    </div>`}};j([C({attribute:!1})],Q.prototype,`eventBus`,void 0),j([C({attribute:!1})],Q.prototype,`viewer`,void 0),j([C({attribute:!1})],Q.prototype,`target`,void 0),j([O()],Q.prototype,`offeredResource`,void 0),j([O()],Q.prototype,`requestedResource`,void 0),j([O()],Q.prototype,`offeredAmount`,void 0),j([O()],Q.prototype,`requestedAmount`,void 0),j([O()],Q.prototype,`activeCategory`,void 0),Q=j([k(`trade-deal-modal`)],Q);var Ro=S(`images/AllianceIconWhite.svg`),zo=S(`images/ChatIconWhite.svg`),Bo=S(`images/DonateGoldIconWhite.svg`),Vo=S(`images/DonateTroopIconWhite.svg`),Ho=S(`images/EmojiIconWhite.svg`),Uo=S(`images/SirenIconWhite.svg`),Wo=S(`images/ShieldIconWhite.svg`),Go=S(`images/StopIconWhite.svg`),Ko=S(`images/TargetIconWhite.svg`),qo=S(`images/TradingIconWhite.svg`),Jo=S(`images/TraitorIconLightRed.svg`),Yo=S(`images/TraitorIconWhite.svg`),Xo=S(`images/GoldCoinIcon.svg`),Zo=S(`images/SoldierIcon.svg`),Qo=S(`images/OilFieldIconWhite.svg`),$o=S(`images/GasFieldIconWhite.svg`),es=S(`images/UraniumPlantIconWhite.svg`),$=class extends M{constructor(...e){super(...e),this.actions=null,this.tile=null,this._profileForPlayerId=null,this.kickedPlayerIDs=new Set,this.sendTarget=null,this.sendMode=`none`,this.dealTarget=null,this.isVisible=!1,this.allianceExpiryText=null,this.allianceExpirySeconds=null,this.otherProfile=null,this.suppressNextHide=!1,this.moderationTarget=null,this.reportTarget=null,this.reportedClientIDs=new Set,this.playerRole=null,this.gameListed=!1,this.closeSend=()=>{this.sendTarget=null,this.sendMode=`none`},this.confirmSend=e=>{this.closeSend(),e.detail?.closePanel&&this.hide()},this.closeModeration=()=>{this.moderationTarget=null},this.handleModerationKicked=e=>{let t=e.detail?.playerId;t&&this.kickedPlayerIDs.add(String(t)),this.closeModeration(),this.hide()},this.closeReport=()=>{this.reportTarget=null}}setRole(e){this.playerRole=e}get isAdminRole(){return this.playerRole===`admin`||this.playerRole===`root`}createRenderRoot(){return this}initEventBus(e){this.eventBus=e,e.on(Hn,e=>this.openDealModal(e.target,e.tile)),e.on(yt,e=>{this.isVisible&&this.hide()}),e.on(tn,e=>{this.uiState.rocketDirectionUp=e.rocketDirectionUp,this.requestUpdate()}),e.on(an,e=>{this.reportedClientIDs.add(e.reported),this.requestUpdate(),ee(N(`player_panel.report_sent`),`green`)})}init(){this.eventBus.on(sr,()=>{if(this.suppressNextHide){this.suppressNextHide=!1;return}this.hide()}),this.ctModal=document.querySelector(`chat-modal`),this.ctModal||console.warn(`ChatModal element not found in DOM`),this.g.config().gameConfig().gameType===u.Private&&He(this.g.gameID()).then(e=>{this.gameListed=e})}async tick(){if(this.isVisible&&this.tile){let e=this.g.owner(this.tile);if(e&&e.isPlayer()){let t=e,n=t.id();this._profileForPlayerId!==Number(n)&&(this.otherProfile=await t.profile(),this._profileForPlayerId=Number(n))}let t=this.g.myPlayer();if(t!==null&&t.isAlive()){try{this.actions=await t.actions(this.tile,null)}catch(e){console.warn(`Failed to refresh player panel actions:`,e)}if(this.actions?.interaction?.allianceInfo?.expiresAt!==void 0){let e=this.actions.interaction.allianceInfo.expiresAt-this.g.ticks(),t=Math.max(0,Math.floor(e/10));e>0?(this.allianceExpirySeconds=t,this.allianceExpiryText=D(t)):(this.allianceExpirySeconds=null,this.allianceExpiryText=null)}else this.allianceExpirySeconds=null,this.allianceExpiryText=null}this.requestUpdate()}}show(e,t){this.actions=e,this.tile=t,this.moderationTarget=null,this.reportTarget=null,this.isVisible=!0,this.requestUpdate()}openSendGoldModal(e,t,n){this.suppressNextHide=!0,this.actions=e,this.tile=t,this.sendTarget=n,this.sendMode=`gold`,this.moderationTarget=null,this.reportTarget=null,this.isVisible=!0,this.requestUpdate()}openDealModal(e,t){this.suppressNextHide=!0,this.tile=t,this.dealTarget=e,this.isVisible=!0,this.moderationTarget=null,this.reportTarget=null,this.requestUpdate()}hide(){this.isVisible=!1,this.sendMode=`none`,this.sendTarget=null,this.dealTarget=null,this.moderationTarget=null,this.reportTarget=null,this.requestUpdate()}handleClose(e){e.stopPropagation(),this.hide()}handleAllianceClick(e,t,n){e.stopPropagation(),this.eventBus.emit(new Ut(t,n)),this.hide()}handleBreakAllianceClick(e,t,n){e.stopPropagation(),this.eventBus.emit(new Xn(t,n)),this.hide()}openSendTroops(e){this.suppressNextHide=!0,this.sendTarget=e,this.sendMode=`troops`}openSendGold(e){this.suppressNextHide=!0,this.sendTarget=e,this.sendMode=`gold`}handleDonateTroopClick(e,t,n){e.stopPropagation(),this.openSendTroops(n)}handleDonateGoldClick(e,t,n){e.stopPropagation(),this.openSendGold(n)}handleEmbargoClick(e,t,n){e.stopPropagation(),this.eventBus.emit(new zn(n,`start`)),this.hide()}handleStopEmbargoClick(e,t,n){e.stopPropagation(),this.eventBus.emit(new zn(n,`stop`)),this.hide()}onStopTradingAllClick(e){e.stopPropagation(),this.eventBus.emit(new dn(`start`))}onStartTradingAllClick(e){e.stopPropagation(),this.eventBus.emit(new dn(`stop`))}handleEmojiClick(e,t,n){e.stopPropagation(),this.emojiTable.showTable(e=>{t===n?this.eventBus.emit(new qn(d,b.indexOf(e))):this.eventBus.emit(new qn(n,b.indexOf(e))),this.emojiTable.hideTable(),this.hide()})}handleChat(e,t,n){if(e.stopPropagation(),!this.ctModal){console.warn(`ChatModal element not found in DOM`);return}this.ctModal.open(t,n),this.hide()}handleTargetClick(e,t){e.stopPropagation(),this.eventBus.emit(new Vn(t.id())),this.hide()}openModeration(e,t){e.stopPropagation(),this.suppressNextHide=!0,this.moderationTarget=t}openReport(e,t){e.stopPropagation(),this.suppressNextHide=!0,this.reportTarget=t}canReport(e,n){return this.g.config().gameConfig().gameType!==u.Singleplayer&&!this.g.config().isReplay()&&!this.g.gameOver()&&n!==e&&n.type()===t.Human&&!!n.clientID()}handleToggleRocketDirection(e){e.stopPropagation();let t=!this.uiState.rocketDirectionUp;this.eventBus.emit(new tn(t))}identityChipProps(e){switch(e){case t.Nation:return{labelKey:`player_type.nation`,classes:`border-indigo-400/25 bg-indigo-500/10 text-indigo-200`,icon:`🏛️`};case t.Bot:return{labelKey:`player_type.bot`,classes:`border-purple-400/25 bg-purple-500/10 text-purple-200`,icon:`⚔️`};case t.Human:default:return{labelKey:`player_type.player`,classes:`border-zinc-400/20 bg-zinc-500/5 text-zinc-300`,icon:`👤`}}}getRelationClass(e){let t=`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 shadow-[inset_0_0_8px_rgba(255,255,255,0.04)]`;switch(e){case f.Hostile:return`${t} border-red-400/30 bg-red-500/10 text-red-200`;case f.Distrustful:return`${t} border-red-300/40 bg-red-300/10 text-red-300`;case f.Friendly:return`${t} border-emerald-400/30 bg-emerald-500/10 text-emerald-200`;case f.Neutral:default:return`${t} border-zinc-400/30 bg-zinc-500/10 text-zinc-200`}}getRelationName(e){switch(e){case f.Hostile:return N(`relation.hostile`);case f.Distrustful:return N(`relation.distrustful`);case f.Friendly:return N(`relation.friendly`);case f.Neutral:default:return N(`relation.neutral`)}}getExpiryColorClass(e){return e===null?`text-white`:e<=30?`text-red-400`:e<=60?`text-yellow-400`:`text-emerald-400`}getTraitorRemainingSeconds(e){let t=e.getTraitorRemainingTicks();return!e.isTraitor()||t<=0?null:Math.ceil(t/10)}renderTraitorBadge(e){if(!e.isTraitor())return A``;let t=this.getTraitorRemainingSeconds(e),n=t===null?null:D(t),r=t===null?``:`mx-1 size-1 rounded-full bg-red-400/70 ${t<=10?`animate-pulse`:``}`;return A`
      <div class="mt-1" role="status" aria-live="polite" aria-atomic="true">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-red-400/30
            bg-red-500/10 px-2.5 py-0.5 text-sm font-semibold text-red-200
            shadow-[inset_0_0_8px_rgba(239,68,68,0.12)]"
          title=${N(`player_panel.traitor`)}
        >
          <img src=${Jo} alt="" aria-hidden="true" class="size-4.5" />
          <span class="tracking-tight"
            >${N(`player_panel.traitor`)}</span
          >
          ${n?A`<span class=${r}></span>
                <span
                  class="tabular-nums font-bold text-red-100 whitespace-nowrap text-sm"
                >
                  ${n}
                </span>`:``}
        </span>
      </div>
    `}renderModeration(e,t,n){let r=this.canReport(e,t),i=(e.isLobbyCreator()||n)&&(!this.gameListed||n);if(!r&&!i)return A``;let a=this.reportedClientIDs.has(t.clientID()??``),o=N(a?`player_panel.reported`:`player_panel.report`),s=N(`player_panel.moderation`);return A`
      <ui-divider></ui-divider>
      <div class="grid auto-cols-fr grid-flow-col gap-1">
        ${r?X({onClick:e=>this.openReport(e,t),icon:Uo,iconAlt:`Report`,title:o,label:o,type:`red`,disabled:a}):``}
        ${i?X({onClick:e=>this.openModeration(e,t),icon:Wo,iconAlt:`Moderation`,title:s,label:s,type:`red`}):``}
      </div>
    `}renderRelationPillIfNation(e,n){if(e.type()!==t.Nation||e.isTraitor()||n?.isAlliedWith&&n.isAlliedWith(e)||!this.otherProfile||!n)return A``;let r=this.otherProfile.relations?.[n.smallID()]??f.Neutral;return A`
      <div class="mt-1">
        <span class="text-sm font-semibold ${this.getRelationClass(r)}">${this.getRelationName(r)}</span>
      </div>
    `}renderIdentityRow(e,n){let r=e.cosmetics.flag,i=r?.match(/\/flags\/(.+)\.svg$/)?.[1],a=typeof i==`string`?Ke.find(e=>e.code===i):void 0,o=e.type()===t.Human?null:this.identityChipProps(e.type());return A`
      <div class="flex items-center gap-2.5 flex-wrap">
        ${r?A`<img
              src=${S(r)}
              alt=${a?.name??N(`cosmetics.type_flag`)}
              title=${a?.name??N(`cosmetics.type_flag`)}
              class="h-10 w-10 rounded-full object-cover"
              @error=${e=>{e.target.style.display=`none`}}
            />`:``}

        <div class="flex-1 min-w-0">
          <h2
            class="text-xl font-bold tracking-[-0.01em] text-zinc-50 truncate"
            title=${e.displayName()}
          >
            ${e.displayName()}
          </h2>
          ${e.type()===t.Nation?A`<div
                class="mt-1 text-xs text-zinc-300"
                title=${N(`country_religion.source`)}
              >
                <span class="text-zinc-400"
                  >${N(`player_panel.religion`)}:</span
                >
                ${N(i?`country_religion.${Ao(i)??`unavailable`}`:`country_religion.unavailable`)}
              </div>`:``}
        </div>
        ${o?A`<span
              class=${`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-semibold ${o.classes}`}
              role="status"
              aria-label=${N(o.labelKey)}
              title=${N(o.labelKey)}
            >
              <span aria-hidden="true" class="leading-none">${o.icon}</span>
              <span class="tracking-tight"
                >${N(o.labelKey)}</span
              >
            </span>`:A``}
      </div>
      ${this.renderTraitorBadge(e)}
      ${this.renderRelationPillIfNation(e,n)}
    `}renderResources(e){return A`
      <div class="mb-1 grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-5">
        ${[{icon:Xo,amount:L(e.gold()||0),label:`player_panel.gold`},{icon:Zo,amount:I(e.troops()||0),label:`player_panel.troops`},{icon:Qo,amount:L(e.oil()),label:`control_panel.oil`},{icon:$o,amount:L(e.gas()),label:`control_panel.gas`},{icon:es,amount:L(e.uranium()),label:`control_panel.uranium`}].map(e=>A`<div
            class="flex min-w-0 items-center gap-1.5 rounded-lg border border-amber-100/10 bg-amber-100/[0.035] px-2 py-1.5 text-white"
            title=${N(e.label)}
          >
            <img
              src=${e.icon}
              alt=""
              aria-hidden="true"
              class="h-4 w-4 shrink-0 object-contain"
            />
            <span
              translate="no"
              class="min-w-0 truncate tabular-nums text-xs font-semibold"
              >${e.amount}</span
            >
          </div>`)}
      </div>
    `}renderRocketDirectionToggle(){return A`
      <ui-divider></ui-divider>
      <button
        class="flex w-full items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-left text-white hover:bg-white/8 active:scale-[0.995] transition"
        @click=${e=>this.handleToggleRocketDirection(e)}
      >
        <div class="flex flex-col">
          <span class="text-sm font-semibold tracking-tight">
            ${N(`player_panel.flip_rocket_trajectory`)}
          </span>
          <span class="text-xs text-zinc-300" translate="no">
            ${this.uiState.rocketDirectionUp?N(`player_panel.arc_up`):N(`player_panel.arc_down`)}
          </span>
        </div>
        <span class="text-lg" aria-hidden="true">🔀</span>
      </button>
    `}renderStats(e,t){return A`
      <!-- Betrayals -->
      <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
        <div
          class="flex items-center gap-2 text-[15px] font-medium text-zinc-100 leading-snug"
        >
          <span aria-hidden="true">⚠️</span>
          <span>${N(`player_panel.betrayals`)}</span>
        </div>
        <div class="text-right text-[14px] font-semibold text-zinc-200">
          ${e.betrayals()}
        </div>
      </div>

      <!-- Trading / Embargo -->
      <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
        <div
          class="flex items-center gap-2 text-[15px] font-medium text-zinc-100 leading-snug"
        >
          <span aria-hidden="true">⚓</span>
          <span>${N(`player_panel.trading`)}</span>
        </div>
        <div
          class="flex items-center justify-end gap-2 text-[14px] font-semibold"
        >
          ${e.hasEmbargoAgainst(t)?A`<span class="text-amber-400"
                >${N(`player_panel.stopped`)}</span
              >`:A`<span class="text-blue-400"
                >${N(`player_panel.active`)}</span
              >`}
        </div>
      </div>
    `}renderAlliances(e){let t=e.allies(),n=new Map;for(let t of e.alliances())n.set(t.other,t.expiresAt);let r=e=>{let t=n.get(e.id());if(t===void 0)return null;let r=t-this.g.ticks();return Math.max(0,Math.floor(r/10))},i=new Intl.Collator(void 0,{sensitivity:`base`}),a=[...t].sort((e,t)=>{let n=r(e)??1/0,a=r(t)??1/0;return n===a?i.compare(e.displayName(),t.displayName()):n-a});return A`
      <div class="select-none">
        <div class="flex items-center justify-between mb-2">
          <div
            id="alliances-title"
            class="text-[15px] font-medium text-zinc-200"
          >
            ${N(`player_panel.alliances`)}
          </div>
          <span
            aria-labelledby="alliances-title"
            class="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-[10px]
                 text-[12px] text-zinc-100 bg-white/10 border border-white/20"
          >
            ${t.length}
          </span>
        </div>

        <div
          class="rounded-lg bg-zinc-800/70 ring-1 ring-zinc-700/60 w-full min-w-0"
        >
          <ul
            class="max-h-48 overflow-y-auto p-2
                 flex flex-wrap gap-1.5
                 scrollbar-thin scrollbar-thumb-zinc-600 hover:scrollbar-thumb-zinc-500 scrollbar-track-zinc-800"
            role="list"
            aria-labelledby="alliances-title"
            translate="no"
          >
            ${a.length===0?A`<li class="text-zinc-400 text-[14px] px-1">
                  ${N(`common.none`)}
                </li>`:a.map(e=>{let t=r(e);return A`<li
                    class="max-w-full inline-flex items-center gap-1.5
                           rounded-md border border-white/10 bg-white/5
                           px-2.5 py-1 text-[14px] text-zinc-100
                           hover:bg-white/8 active:scale-[0.99] transition"
                    title=${e.displayName()}
                  >
                    <span class="truncate">${e.displayName()}</span>
                    ${t===null?``:A`<span
                          class="text-[11px] font-semibold leading-none tabular-nums ${this.getExpiryColorClass(t)}"
                          >${D(t)}</span
                        >`}
                  </li>`})}
          </ul>
        </div>
      </div>
    `}renderAllianceExpiry(){return this.allianceExpiryText===null?A``:A`
      <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-base">
        <div class="font-semibold text-zinc-300">
          ${N(`player_panel.alliance_time_remaining`)}
        </div>
        <div class="text-right font-semibold">
          <span
            class="inline-flex items-center rounded-full px-2 py-0.5 text-[14px] font-bold ${this.getExpiryColorClass(this.allianceExpirySeconds)}"
            >${this.allianceExpiryText}</span
          >
        </div>
      </div>
    `}renderActions(e,t){let n=this.g.myPlayer(),r=this.actions?.interaction?.canDonateGold,i=this.actions?.interaction?.canDonateTroops,a=this.actions?.interaction?.canSendAllianceRequest,o=t===n?this.actions?.canSendEmojiAllPlayers:this.actions?.interaction?.canSendEmoji,s=this.actions?.interaction?.canBreakAlliance,c=this.actions?.interaction?.canTarget,l=this.actions?.interaction?.canEmbargo;return A`
      <div class="flex flex-col gap-2.5">
        <div class="grid auto-cols-fr grid-flow-col gap-1">
          ${X({onClick:n=>this.handleChat(n,e,t),icon:zo,iconAlt:`Chat`,title:N(`player_panel.chat`),label:N(`player_panel.chat`)})}
          ${o?X({onClick:n=>this.handleEmojiClick(n,e,t),icon:Ho,iconAlt:`Emoji`,title:N(`player_panel.emotes`),label:N(`player_panel.emotes`),type:`normal`}):``}
          ${c?X({onClick:e=>this.handleTargetClick(e,t),icon:Ko,iconAlt:`Target`,title:N(`player_panel.target`),label:N(`player_panel.target`),type:`normal`}):``}
          ${i?X({onClick:n=>this.handleDonateTroopClick(n,e,t),icon:Vo,iconAlt:`Troops`,title:N(`player_panel.send_troops`),label:N(`player_panel.troops`),type:`normal`}):``}
          ${r?X({onClick:n=>this.handleDonateGoldClick(n,e,t),icon:Bo,iconAlt:`Gold`,title:N(`player_panel.send_gold`),label:N(`player_panel.gold`),type:`normal`}):``}
        </div>
        <ui-divider></ui-divider>
        ${t===e?A``:A`
              <div class="grid auto-cols-fr grid-flow-col gap-1">
                ${X(l?{onClick:n=>this.handleEmbargoClick(n,e,t),icon:Go,iconAlt:`Stop Trading`,title:N(`player_panel.stop_trade`),label:N(`player_panel.stop_trade`),type:`yellow`}:{onClick:n=>this.handleStopEmbargoClick(n,e,t),icon:qo,iconAlt:`Start Trading`,title:N(`player_panel.start_trade`),label:N(`player_panel.start_trade`),type:`green`})}
                ${s?X({onClick:n=>this.handleBreakAllianceClick(n,e,t),icon:Yo,iconAlt:`Break Alliance`,title:N(`player_panel.break_alliance`),label:N(`player_panel.break_alliance`),type:`red`}):``}
                ${a?X({onClick:n=>this.handleAllianceClick(n,e,t),icon:Ro,iconAlt:`Alliance`,title:N(`player_panel.send_alliance`),label:N(`player_panel.send_alliance`),type:`indigo`}):``}
              </div>
            `}
        ${t===e?A`<div class="grid auto-cols-fr grid-flow-col gap-1">
              ${X({onClick:e=>this.onStopTradingAllClick(e),icon:Go,iconAlt:`Stop Trading With All`,title:this.actions?.canEmbargoAll?N(`player_panel.stop_trade_all`):`${N(`player_panel.stop_trade_all`)} - ${N(`cooldown`)}`,label:this.actions?.canEmbargoAll?N(`player_panel.stop_trade_all`):`${N(`player_panel.stop_trade_all`)} ⏳`,type:`yellow`,disabled:!this.actions?.canEmbargoAll})}
              ${X({onClick:e=>this.onStartTradingAllClick(e),icon:qo,iconAlt:`Start Trading With All`,title:this.actions?.canEmbargoAll?N(`player_panel.start_trade_all`):`${N(`player_panel.start_trade_all`)} - ${N(`cooldown`)}`,label:this.actions?.canEmbargoAll?N(`player_panel.start_trade_all`):`${N(`player_panel.start_trade_all`)} ⏳`,type:`green`,disabled:!this.actions?.canEmbargoAll})}
            </div>`:``}
        ${this.renderModeration(e,t,this.isAdminRole)}
      </div>
    `}render(){if(this.dealTarget){let e=this.g.myPlayer();return e?A`<trade-deal-modal
            .viewer=${e}
            .target=${this.dealTarget}
            .game=${this.g}
            .eventBus=${this.eventBus}
            @close=${()=>{this.dealTarget=null,this.isVisible=!1}}
          ></trade-deal-modal>`:A``}if(!this.isVisible)return A``;let e=this.g.myPlayer(),t=this.g.isSpectator();if(!e&&!t||!this.tile)return A``;let n=this.g.owner(this.tile);if(!n||!n.isPlayer())return this.hide(),console.warn(`Tile is not owned by a player`),A``;let r=n,i=e??r,a=i.gold(),o=Number(i.troops());return A`
      <style>
        /* Soft glowing ring animation for traitors */
        .traitor-ring {
          border-radius: 1rem;
          box-shadow:
            0 0 0 2px rgba(239, 68, 68, 0.34),
            0 0 12px 4px rgba(239, 68, 68, 0.22),
            inset 0 0 14px rgba(239, 68, 68, 0.13);
          animation: glowPulse 2.4s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 2px rgba(239, 68, 68, 0.22),
              0 0 8px 2px rgba(239, 68, 68, 0.15),
              inset 0 0 8px rgba(239, 68, 68, 0.07);
          }
          50% {
            box-shadow:
              0 0 0 4px rgba(239, 68, 68, 0.38),
              0 0 18px 6px rgba(239, 68, 68, 0.26),
              inset 0 0 18px rgba(239, 68, 68, 0.15);
          }
        }
      </style>

      <div
        class="fixed inset-0 z-10001 flex items-center justify-center overflow-auto
               bg-black/15 backdrop-brightness-110 pointer-events-auto"
        @contextmenu=${e=>e.preventDefault()}
        @wheel=${e=>e.stopPropagation()}
        @click=${()=>this.hide()}
      >
        <div
          class="pointer-events-auto max-h-[90vh] min-w-75 max-w-100 px-4 py-2"
          @click=${e=>e.stopPropagation()}
        >
          <div class="relative">
            <div
              class="absolute inset-2 -z-10 rounded-2xl bg-black/25 backdrop-blur-[2px]"
            ></div>
            <div
              class=${`relative w-full bg-zinc-900/95 rounded-2xl text-zinc-100 shadow-2xl shadow-black/50
                 ${r.isTraitor()?`traitor-ring`:`ring-1 ring-white/5`}`}
            >
              <div class="overflow-visible">
                <div
                  class="overflow-auto [-webkit-overflow-scrolling:touch] resize-y max-h-[calc(100vh-120px-env(safe-area-inset-bottom))]"
                >
                  <div class="sticky top-0 z-20 flex justify-end p-2">
                    <button
                      @click=${this.handleClose}
                      class="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-700 text-white shadow-sm hover:bg-red-500 transition-colors"
                      aria-label=${N(`common.close`)||`Close`}
                      title=${N(`common.close`)||`Close`}
                    >
                      ✕
                    </button>
                  </div>

                  <div
                    class="p-6 flex flex-col gap-2 font-sans antialiased text-[14.5px] leading-relaxed"
                  >
                    <!-- Identity (flag, name, type, traitor, relation) -->
                    <div class="mb-1">
                      ${this.renderIdentityRow(r,i)}
                    </div>

                    <!-- Cosmetics the player has equipped -->
                    <equipped-cosmetics-row
                      .cosmetics=${r.cosmetics}
                    ></equipped-cosmetics-row>

                    ${this.sendTarget&&!t?A`
                          <send-resource-modal
                            .open=${this.sendMode!==`none`}
                            .mode=${this.sendMode}
                            .total=${this.sendMode===`troops`?o:a}
                            .uiState=${this.uiState}
                            .myPlayer=${i}
                            .target=${this.sendTarget}
                            .gameView=${this.g}
                            .eventBus=${this.eventBus}
                            .format=${this.sendMode===`troops`?I:L}
                            @confirm=${this.confirmSend}
                            @close=${this.closeSend}
                          ></send-resource-modal>
                        `:``}
                    ${this.moderationTarget?A`
                          <player-moderation-modal
                            .open=${!0}
                            .myPlayer=${i}
                            .target=${this.moderationTarget}
                            .eventBus=${this.eventBus}
                            .isAdmin=${this.isAdminRole}
                            .alreadyKicked=${this.kickedPlayerIDs.has(String(this.moderationTarget.id()))}
                            @close=${this.closeModeration}
                            @kicked=${this.handleModerationKicked}
                          ></player-moderation-modal>
                        `:``}
                    ${this.reportTarget?A`
                          <player-report-modal
                            .open=${!0}
                            .target=${this.reportTarget}
                            .eventBus=${this.eventBus}
                            @close=${this.closeReport}
                          ></player-report-modal>
                        `:``}

                    <ui-divider></ui-divider>

                    <!-- Resources -->
                    ${this.renderResources(r)}

                    <!-- Rocket direction toggle -->
                    ${r===i&&!t?this.renderRocketDirectionToggle():``}

                    <ui-divider></ui-divider>

                    <!-- Stats: betrayals / trading -->
                    ${this.renderStats(r,i)}

                    <ui-divider></ui-divider>

                    <!-- Alliances list -->
                    ${this.renderAlliances(r)}

                    <!-- Alliance time remaining -->
                    ${this.renderAllianceExpiry()}
                    ${t?e?this.renderModeration(e,r,this.isAdminRole):``:A`
                          <ui-divider></ui-divider>
                          <!-- Actions -->
                          ${this.renderActions(i,r)}
                        `}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};j([O()],$.prototype,`sendTarget`,void 0),j([O()],$.prototype,`sendMode`,void 0),j([O()],$.prototype,`dealTarget`,void 0),j([O()],$.prototype,`isVisible`,void 0),j([O()],$.prototype,`allianceExpiryText`,void 0),j([O()],$.prototype,`allianceExpirySeconds`,void 0),j([O()],$.prototype,`otherProfile`,void 0),j([O()],$.prototype,`suppressNextHide`,void 0),j([O()],$.prototype,`moderationTarget`,void 0),j([O()],$.prototype,`reportTarget`,void 0),j([O()],$.prototype,`playerRole`,void 0),j([O()],$.prototype,`gameListed`,void 0),$=j([k(`player-panel`)],$);var ts=class extends M{constructor(...e){super(...e),this.playerBuildables=null,this.keybinds={},this._cities=0,this._warships=0,this._factories=0,this._missileSilo=0,this._port=0,this._defensePost=0,this._samLauncher=0,this.allDisabled=!1,this._hoveredUnit=null,this.tutorialHighlight=null}createRenderRoot(){return this}init(){let e=this.game.config(),t=new F;this.keybinds=t.parsedUserKeybinds(),this.allDisabled=r.types.every(t=>e.isUnitDisabled(t));let n={city:h.City,port:h.Port,defense_post:h.DefensePost,factory:h.Factory,warship:h.Warship,silo:h.MissileSilo,atom:h.AtomBomb,hydrogen:h.HydrogenBomb,mirv:h.MIRV,sam:h.SAMLauncher};this.eventBus.on(va,e=>{this.tutorialHighlight=(e.target&&n[e.target])??null,this.requestUpdate()}),this.requestUpdate()}cost(e){for(let t of this.playerBuildables??[])if(t.type===e)return t.cost;return 0n}canBuild(e){if(this.game?.config().isUnitDisabled(e))return!1;let t=this.game?.myPlayer(),n=this.game?.config();if(!t||!n)return!1;switch(e){case h.AtomBomb:case h.BallisticMissile:case h.HydrogenBomb:case h.MIRV:{let r=n.missileFuelCost(e);return this.cost(e)<=t.gold()&&t.units(h.MissileSilo).length>0&&t.oil()>=r.oil&&t.gas()>=r.gas&&t.uranium()>=r.uranium}case h.Warship:return this.cost(e)<=t.gold()&&t.units(h.Port).length>0&&t.oil()>=n.warshipBuildFuelCost().oil;default:return this.cost(e)<=t.gold()&&(e!==h.TransportShip||t.oil()>=n.transportShipFuelCost().oil)}}totalStoredMissiles(){return(this.game.myPlayer()?.units(h.Arsenal)??[]).reduce((e,t)=>e+(t.isActive()&&!t.isUnderConstruction()?t.missilesStored():0),0)}totalMissileCapacity(){return(this.game.myPlayer()?.units(h.Arsenal)??[]).reduce((e,t)=>e+(t.isActive()&&!t.isUnderConstruction()?t.missileCapacity():0),0)}fuelUsage(e){let t=this.game?.config();if(!t)return[];switch(e){case h.AtomBomb:case h.BallisticMissile:case h.HydrogenBomb:case h.MIRV:{let n=t.missileFuelCost(e);return[...n.gas>0?[{label:`build_menu.fuel_per_launch`,amount:n.gas,icon:`gas`}]:[],...n.uranium>0?[{label:`build_menu.uranium_per_bomb`,amount:n.uranium,icon:`uranium`}]:[]]}case h.Warship:return[{label:`build_menu.oil_per_ship`,amount:t.warshipBuildFuelCost().oil,icon:`oil`},{label:`build_menu.fuel_per_shot`,amount:t.warshipShellFuelCost().oil,icon:`oil`},{label:`build_menu.fuel_per_transport_attack`,amount:t.transportShipFuelCost().oil,icon:`oil`}].filter(({amount:e})=>e>0);case h.Port:{let e=t.tradeShipFuelCost();return e.oil>0?[{label:`build_menu.oil_per_trade_ship`,amount:e.oil,icon:`oil`}]:[]}default:return[]}}tick(){let e=this.game?.myPlayer();e&&(e.buildables(void 0,r.types).then(e=>{this.playerBuildables=e}),this._cities=e.totalUnitLevels(h.City),this._missileSilo=e.totalUnitLevels(h.MissileSilo),this._port=e.totalUnitLevels(h.Port),this._defensePost=e.totalUnitLevels(h.DefensePost),this._samLauncher=e.totalUnitLevels(h.SAMLauncher),this._factories=e.totalUnitLevels(h.Factory),this._warships=e.totalUnitLevels(h.Warship),this.requestUpdate())}render(){let e=this.game?.myPlayer();return!this.game||!e||this.game.inSpawnPhase()||!e.isAlive()||this.allDisabled?null:A`
      <div class="unit-display-shell">
        <h2
          class="px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider text-amber-200/80"
        >
          ${N(`build_menu.title`)}
        </h2>
        <div class="unit-display-list">
          ${this.renderUnitItem(this._cities,h.City,`city`,this.keybinds.buildCity?.key??`1`)}
          ${this.renderUnitItem(this._factories,h.Factory,`factory`,this.keybinds.buildFactory?.key??`2`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.OilField),h.OilField,`oil_field`,this.keybinds.buildOilField?.key??`o`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.GasField),h.GasField,`gas_field`,this.keybinds.buildGasField?.key??`i`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.UraniumPlant),h.UraniumPlant,`uranium_plant`,this.keybinds.buildUraniumPlant?.key??`j`)}
          ${this.renderUnitItem(this._port,h.Port,`port`,this.keybinds.buildPort?.key??`3`)}
          ${this.renderUnitItem(this._defensePost,h.DefensePost,`defense_post`,this.keybinds.buildDefensePost?.key??`4`)}
          ${this.renderUnitItem(this._missileSilo,h.MissileSilo,`missile_silo`,this.keybinds.buildMissileSilo?.key??`5`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.Arsenal),h.Arsenal,`arsenal`,this.keybinds.buildArsenal?.key??`Shift+A`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.MissileFactory),h.MissileFactory,`missile_factory`,this.keybinds.buildMissileFactory?.key??`m`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.OilStorage),h.OilStorage,`oil_storage`,this.keybinds.buildOilStorage?.key??`l`)}
          ${this.renderUnitItem(e.totalUnitLevels(h.GasStorage),h.GasStorage,`gas_storage`,this.keybinds.buildGasStorage?.key??`h`)}
          ${this.renderUnitItem(this._samLauncher,h.SAMLauncher,`sam_launcher`,this.keybinds.buildSamLauncher?.key??`6`)}
          ${this.renderUnitItem(this._warships,h.Warship,`warship`,this.keybinds.buildWarship?.key??`7`)}
          ${this.renderUnitItem(null,h.BallisticMissile,`ballistic_missile`,this.keybinds.buildBallisticMissile?.key??`b`)}
          ${this.renderUnitItem(null,h.AtomBomb,`atom_bomb`,this.keybinds.buildAtomBomb?.key??`8`)}
          ${this.renderUnitItem(null,h.HydrogenBomb,`hydrogen_bomb`,this.keybinds.buildHydrogenBomb?.key??`9`)}
          ${this.renderUnitItem(null,h.MIRV,`mirv`,this.keybinds.buildMIRV?.key??`0`)}
        </div>
      </div>
    `}renderUnitItem(e,t,n,r){if(this.game.config().isUnitDisabled(t))return A``;let i=this.uiState.ghostStructure===t,a=this._hoveredUnit===t,o=r.replace(`Digit`,``).replace(`Key`,``).toUpperCase();return A`
      <div
        class="unit-display-item"
        @mouseenter=${()=>{this._hoveredUnit=t,this.requestUpdate()}}
        @mouseleave=${()=>{this._hoveredUnit=null,this.requestUpdate()}}
      >
        ${a?A`
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-gray-200 text-center w-max text-xs bg-gray-800/90 backdrop-blur-xs rounded-sm p-1 z-[100] shadow-lg pointer-events-none"
              >
                <div class="font-bold text-sm mb-1">
                  ${N(`unit_type.`+n)}${` [${o}]`}
                </div>
                <div class="p-2">
                  ${N(`build_menu.desc.`+n)}
                </div>
                ${t===h.Arsenal?A`<div
                      class="border-t border-white/10 px-2 py-1 text-amber-200"
                    >
                      ${N(`build_menu.desc.arsenal_stock`,{amount:`${L(this.totalStoredMissiles())} / ${L(this.totalMissileCapacity())}`})}
                    </div>`:null}
                ${t===h.Warship?A`<div
                      class="mt-1 px-2 py-1 text-[10px] text-cyan-300 border-t border-white/10"
                    >
                      ⇧ ${N(`build_menu.warship_shift_hint`)}
                    </div>`:null}
                <div class="flex items-center justify-center gap-1">
                  ${B(`gold`)}
                  <span class="text-yellow-300"
                    >${L(this.cost(t))}</span
                  >
                </div>
                ${this.fuelUsage(t).map(({label:e,amount:t,icon:n})=>A`
                    <div
                      class="mt-1 flex items-center justify-center gap-1 text-cyan-200"
                    >
                      <span>${N(e)}</span>
                      ${B(n)}
                      <span>${L(t)}</span>
                    </div>
                  `)}
              </div>
            `:null}
        <div
          class="unit-display-button ${this.canBuild(t)?``:`is-unavailable`}
             ${i?`is-selected`:``}
             ${this.tutorialHighlight===t?`tutorial-highlight`:``}"
          @click=${()=>{i?this.uiState.ghostStructure=null:this.canBuild(t)&&(this.uiState.ghostStructure=t),this.requestUpdate()}}
          @mouseenter=${()=>{switch(t){case h.AtomBomb:case h.BallisticMissile:case h.HydrogenBomb:this.eventBus?.emit(new on([h.MissileSilo,h.SAMLauncher]));break;case h.Warship:this.eventBus?.emit(new on([h.Port]));break;default:this.eventBus?.emit(new on([t]))}}}
          @mouseleave=${()=>this.eventBus?.emit(new on(null))}
        >
          ${A`<div class="unit-display-key">${o}</div>`}
          <div class="unit-display-content">
            ${mr(t)}
            <span class="unit-display-name"
              >${N(`unit_type.${n}`)}</span
            >
            ${e===null?null:A`<span class="unit-display-count"
                  >${L(e)}</span
                >`}
          </div>
        </div>
      </div>
    `}};ts=j([k(`unit-display`)],ts);var ns=class extends M{createRenderRoot(){return this}constructor(){super(),this.hasShownDeathModal=!1,this.isVisible=!1,this.isWin=!1,this.isRankedGame=!1,this.patternContent=null,this.rand=Math.random()}render(){return A`
      <div
        class="${this.isVisible?`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800/70 p-4 md:p-6 shrink-0 rounded-lg z-[10010] shadow-2xl backdrop-blur-xs text-white w-[min(90vw,700px)] max-w-[90%] max-h-[90dvh] overflow-hidden flex flex-col`:`hidden`}"
      >
        <h2 class="m-0 mb-4 text-[26px] text-center text-white shrink-0">
          ${this._title||``}
        </h2>
        <div class="min-h-0 flex-1 overflow-y-auto pr-0.5">
          ${this.innerHtml()}
        </div>
        <div class="mt-4 flex justify-between gap-2.5 shrink-0">
          <o-button
            variant="primary"
            width="block"
            class="flex-1"
            translationKey="win_modal.exit"
            @click=${this._handleExit}
          ></o-button>
          ${this.isRankedGame?A`
                <o-button
                  variant="primary"
                  width="block"
                  class="flex-1"
                  translationKey="win_modal.requeue"
                  @click=${this._handleRequeue}
                ></o-button>
              `:null}
          <o-button
            variant="primary"
            width="block"
            class="flex-1"
            .title=${this.game?.myPlayer()?.isAlive()?N(`win_modal.keep`):N(`win_modal.spectate`)}
            @click=${this.hide}
          ></o-button>
        </div>
      </div>
    `}innerHtml(){return pe()?this.discordDisplay():!this.isWin&&ve()<3?this.renderYoutubeTutorial():this.rand<.5?this.discordDisplay():this.renderPatternButton()}renderYoutubeTutorial(){return A`
      <div class="text-center mb-6 bg-black/30 p-2.5 rounded-sm">
        <h3 class="text-xl font-semibold text-white mb-3">
          ${N(`win_modal.youtube_tutorial`)}
        </h3>
        <!-- 56.25% = 9:16 -->
        <div class="relative w-full pb-[56.25%]">
          ${y.isElectron?A`<video
                class="absolute top-0 left-0 w-full h-full rounded-sm"
                src="${this.isVisible?he:``}"
                controls
                preload="metadata"
              ></video>`:A`<iframe
                class="absolute top-0 left-0 w-full h-full rounded-sm"
                src="${this.isVisible?ge:``}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>`}
        </div>
      </div>
    `}renderPatternButton(){return A`
      <div class="text-center mb-6 bg-black/30 p-2.5 rounded-sm">
        <h3 class="text-xl font-semibold text-white mb-3">
          ${N(`win_modal.support_openfront`)}
        </h3>
        ${Ce()?null:A`<p class="text-white mb-3">
              ${N(`win_modal.territory_pattern`)}
            </p>`}
        <div
          class="mx-auto w-full overflow-x-auto overflow-y-visible rounded-sm"
        >
          <div
            class="flex min-w-max items-start justify-center gap-4 px-1 py-1"
          >
            ${this.patternContent}
          </div>
        </div>
      </div>
    `}async loadPatternContent(){let e=await Ae(),t=Ie(await Te(),e,null).filter(e=>e.type===`pattern`&&e.relationship===`purchasable`);if(t.length===0){this.patternContent=A``;return}let n=[...t].sort(()=>Math.random()-.5),r=n.slice(0,Math.min(3,n.length));this.patternContent=A`
      <div class="flex gap-4 flex-nowrap justify-start items-start">
        ${r.map(e=>{let t=e.cosmetic;return A`
            <div data-win-cosmetic-promo class="flex w-40 flex-col gap-2">
              <cosmetic-card
                .resolved=${e}
                .interactive=${!1}
              ></cosmetic-card>
              <purchase-button
                .priceHard=${t?.priceHard??null}
                .priceSoft=${t?.priceSoft??null}
                .rarity=${t?.rarity??`common`}
                .itemName=${kr(e)}
                .onPurchaseHard=${()=>qe(e,`hard`)}
                .onPurchaseSoft=${()=>qe(e,`soft`)}
              ></purchase-button>
            </div>
          `})}
      </div>
    `}discordDisplay(){return A`
      <div class="text-center mb-6 bg-black/30 p-2.5 rounded-sm">
        <h3 class="text-xl font-semibold text-white mb-3">
          ${N(`win_modal.join_discord`)}
        </h3>
        <p class="text-white mb-3">
          ${N(`win_modal.discord_description`)}
        </p>
        <a
          href="https://discord.com/invite/openfront"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-sm font-semibold transition-all duration-200 hover:bg-indigo-700 hover:-translate-y-px no-underline"
        >
          ${N(`win_modal.join_server`)}
        </a>
      </div>
    `}async show(){P.gameplayStop(),this.isRankedGame=this.game.config().gameConfig().rankedType!==void 0,this.isVisible=!0,this.requestUpdate();try{await this.loadPatternContent()}catch(e){console.warn(`Failed to load win modal cosmetics`,e);return}this.requestUpdate()}hide(){this.isVisible=!1,this.requestUpdate()}_handleExit(){this.hide(),window.location.href=w()}_handleRequeue(){this.hide(),document.dispatchEvent(new CustomEvent(`matchmaking-requeue`,{detail:{mode:this.game.config().gameConfig().rankedType===a.TwoVTwo?`2v2`:`1v1`}}))}init(){}tick(){let e=this.game.myPlayer();!this.hasShownDeathModal&&e&&!e.isAlive()&&!this.game.inSpawnPhase()&&e.hasSpawned()&&(this.hasShownDeathModal=!0,this._title=N(`win_modal.died`),this.eventBus.emit(new pr(`defeat`)),this.show()),(this.game.updatesSinceLastTick()?.[R.Win]??[]).forEach(e=>{if(e.winner===void 0)this.eventBus.emit(new Cn(void 0,e.allPlayersStats)),this._title=N(`win_modal.match_cancelled`),this.isWin=!1,history.replaceState(null,``,`${window.location.pathname}?replay`),this.show();else if(e.winner[0]===`team`)this.eventBus.emit(new Cn(e.winner,e.allPlayersStats)),e.winner[1]===this.game.myPlayer()?.team()?(this._title=N(`win_modal.your_team`),this.isWin=!0,P.happytime()):(this._title=N(`win_modal.other_team`,{team:e.winner[1]}),this.isWin=!1),this.playEndOfGameSound(),history.replaceState(null,``,`${window.location.pathname}?replay`),this.show();else if(e.winner[0]===`nation`)this.eventBus.emit(new Cn(e.winner,e.allPlayersStats)),this._title=N(`win_modal.nation_won`,{nation:e.winner[1]}),this.isWin=!1,this.playEndOfGameSound(),this.show();else{let t=this.game.playerByClientID(e.winner[1]);if(!t?.isPlayer())return;let n=t.clientID();n!==null&&this.eventBus.emit(new Cn([`player`,n],e.allPlayersStats)),n!==null&&n===this.game.myPlayer()?.clientID()?(this._title=N(`win_modal.you_won`),this.isWin=!0,P.happytime()):(this._title=N(`win_modal.other_won`,{player:t.displayName()}),this.isWin=!1),this.playEndOfGameSound(),history.replaceState(null,``,`${window.location.pathname}?replay`),this.show()}})}playEndOfGameSound(){this.isWin?this.eventBus.emit(new pr(`victory`)):!this.hasShownDeathModal&&this.game.myPlayer()?.hasSpawned()&&this.eventBus.emit(new pr(`defeat`))}};j([O()],ns.prototype,`isVisible`,void 0),j([O()],ns.prototype,`isWin`,void 0),j([O()],ns.prototype,`isRankedGame`,void 0),j([O()],ns.prototype,`patternContent`,void 0),ns=j([k(`win-modal`)],ns);function rs(e,t,n,r,i,a){let o=new _t(t,n,e),s=new F,c={attackRatio:20,ghostStructure:null,rocketDirectionUp:!0,upgradeMultiplier:1};document.querySelector(`game-starting-modal`).hide();let l=document.querySelector(`emoji-table`);(!l||!(l instanceof Bn))&&console.error(`EmojiTable element not found in the DOM`),l.transformHandler=o,l.game=t,l.initEventBus(n);let u=document.querySelector(`build-menu`);(!u||!(u instanceof ha))&&console.error(`BuildMenu element not found in the DOM`),u.game=t,u.eventBus=n,u.uiState=c,u.transformHandler=o;let d=document.querySelector(`game-left-sidebar`);(!d||!(d instanceof W))&&console.error(`GameLeftSidebar element not found in the DOM`),d.game=t,d.eventBus=n;let f=document.querySelector(`control-panel`);f instanceof U||console.error(`ControlPanel element not found in the DOM`),f.eventBus=n,f.uiState=c,f.game=t;let p=document.querySelector(`events-display`);p instanceof bn||console.error(`events display not found`),p.eventBus=n,p.game=t,p.uiState=c;let m=document.querySelector(`actionable-events`);m instanceof Ci||console.error(`actionable events not found`),m.eventBus=n,m.game=t,m.uiState=c;let h=document.querySelector(`attacks-display`);h instanceof H||console.error(`attacks display not found`),h.eventBus=n,h.game=t,h.uiState=c;let g=document.querySelector(`chat-display`);g instanceof ga||console.error(`chat display not found`),g.eventBus=n,g.game=t;let _=document.querySelector(`player-info-overlay`);_ instanceof Jn||console.error(`player info overlay not found`),_.eventBus=n,_.transform=o,_.game=t;let v=document.querySelector(`win-modal`);v instanceof ns||console.error(`win modal not found`),v.eventBus=n,v.game=t;let y=document.querySelector(`new-lobby-prompt`);y instanceof xo||console.error(`new lobby prompt not found`),y.eventBus=n,y.game=t;let b=document.querySelector(`replay-panel`);b instanceof Da||console.error(`replay panel not found`),b.eventBus=n,b.game=t;let x=document.querySelector(`game-right-sidebar`);x instanceof G||console.error(`Game Right bar not found`),x.game=t,x.eventBus=n;let S=document.querySelector(`settings-modal`);S instanceof Wn||console.error(`settings modal not found`),S.eventBus=n;let C=document.getElementById(`game-settings`);C===null?console.warn(`In-game settings modal (#game-settings) not found`):(C.uiState=c,C.mapLayers=t.layers(),C.onLayerVisibilityChange=(e,t)=>{i.setLayerVisible(e,t)},C.onLayerAlphaChange=(e,t)=>{i.setLayerAlpha(e,t)}),vr(s);let w=document.querySelector(`unit-display`);w instanceof ts||console.error(`unit display not found`),w.game=t,w.eventBus=n,w.uiState=c;let T=document.querySelector(`player-panel`);T instanceof $||console.error(`player panel not found`),T.g=t,T.initEventBus(n),T.emojiTable=l,T.uiState=c,T.setRole(r);let E=document.querySelector(`chat-modal`);E instanceof wn||console.error(`chat modal not found`),E.g=t,E.transformHandler=o,E.initEventBus(n);let ee=document.querySelector(`multi-tab-modal`);ee instanceof J||console.error(`multi-tab modal not found`),ee.game=t;let te=document.querySelector(`heads-up-message`);te instanceof K||console.error(`heads-up message not found`),te.game=t;let D=document.querySelector(`performance-overlay`);D instanceof Y||console.error(`performance overlay not found`),D.eventBus=n,D.userSettings=s;let O=document.querySelector(`alert-frame`);O instanceof ki||console.error(`alert frame not found`),O.game=t;let ne=document.querySelector(`spawn-timer`);ne instanceof Rn||console.error(`spawn timer not found`),ne.game=t,ne.eventBus=n,ne.transformHandler=o;let re=document.querySelector(`immunity-timer`);return re instanceof gn||console.error(`immunity timer not found`),re.game=t,re.eventBus=n,new is(o,c,[new bi(t,n,o,i),new si(t,n,c,o,i,s),new ci(t,n,o,i),new ui(t,n),new vi(n,i),new Vt(n,i),new ei(t,n,s,i),new _i(t,n),new Wr(t,n,o),...a?[a]:[],p,m,h,g,u,new yo(n,t,o,l,u,c,T),ne,re,d,w,x,f,_,v,y,b,S,T,te,ee,O,D],D)}var is=class{constructor(e,t,n,r){this.transformHandler=e,this.uiState=t,this.layers=n,this.performanceOverlay=r,this.layerTickState=new Map}initialize(){ra().catch(e=>console.warn(`Failed to preload sprites:`,e)),this.layers.forEach(e=>e.init?.()),window.addEventListener(`resize`,()=>this.transformHandler.updateCanvasBoundingRect()),this.transformHandler.centerAll(.9)}tick(){let e=performance.now(),t=xi.isEnabled(),n={};for(let r of this.layers){if(!r.tick)continue;let i=this.layerTickState.get(r)??{lastTickAtMs:-1/0},a=r.getTickIntervalMs?.()??0;if(a>0&&e-i.lastTickAtMs<a){this.layerTickState.set(r,i);continue}i.lastTickAtMs=e,this.layerTickState.set(r,i);let o=t?performance.now():0;if(r.tick(),t&&o!==0){let e=performance.now()-o,t=r.constructor?.name??`UnknownLayer`;n[t]=(n[t]??0)+e}}t&&this.performanceOverlay.updateTickLayerMetrics(n)}},as=x(),os=500,ss=class{constructor(e,t){this.eventBus=e,this.mixer=t,this.backgroundMusic=null,this.wantsMusic=!1,this.musicStarted=!1,this.ambienceTracks=new Map,this.currentAmbience=null,this.fadingOut=new Set,this.fadingIn=new Set,this.buildBackgroundMusic(),this.onPlaySoundEffect=e=>this.mixer.play(e.effect),this.onSetAmbience=e=>this.setAmbience(e.track,e.gain),e.on(pr,this.onPlaySoundEffect),e.on(dr,this.onSetAmbience),this.stopFollowingVolume=this.mixer.onChange(e=>{e===`ambience`&&this.retargetAmbience(),e===`music`&&this.startMusicIfAudible()})}buildBackgroundMusic(){this.safely(`initialize background music`,()=>{let e=new as.Howl({src:[S(`sounds/music/gameplay.mp3`)],loop:!0,volume:0,html5:Mr(),preload:!1});this.backgroundMusic=e,e.once(`loaderror`,()=>this.replaceFailedMusic(e)),e.on(`playerror`,()=>{this.musicStarted=!1}),this.mixer.register(e,`music`)})}replaceFailedMusic(e){this.backgroundMusic===e&&(this.mixer.unregister(e),this.safely(`unload failed background music`,()=>e.unload()),this.backgroundMusic=null,this.musicStarted=!1,this.buildBackgroundMusic())}dispose(){if(this.eventBus.off(pr,this.onPlaySoundEffect),this.eventBus.off(dr,this.onSetAmbience),this.stopFollowingVolume(),this.backgroundMusic!==null){let e=this.backgroundMusic;this.mixer.unregister(e),this.safely(`stop background music`,()=>e.stop()),this.safely(`unload background music`,()=>e.unload()),this.backgroundMusic=null}this.ambienceTracks.forEach(e=>{this.safely(`stop ambience track`,()=>e.stop()),this.safely(`unload ambience track`,()=>e.unload())}),this.ambienceTracks.clear(),this.fadingOut.clear(),this.fadingIn.clear(),this.currentAmbience=null}safely(e,t){try{t()}catch(t){console.warn(`SoundManager: failed to ${e}`,t)}}playBackgroundMusic(){this.wantsMusic=!0,this.startMusicIfAudible()}startMusicIfAudible(){let e=this.backgroundMusic;if(!(e===null||!this.wantsMusic||this.musicStarted)&&this.mixer.isAudible(`music`)){this.musicStarted=!0;try{e.state()===`unloaded`&&e.load(),e.play()}catch(e){this.musicStarted=!1,console.warn(`SoundManager: failed to play background music`,e)}}}stopBackgroundMusic(){this.wantsMusic=!1,this.musicStarted=!1,this.safely(`stop background music`,()=>this.backgroundMusic?.stop())}playSoundEffect(e){this.mixer.play(e)}setAmbience(e,t=1){if(e===this.currentAmbience){this.mixer.setAmbienceEnvelope(t);return}this.safely(`set ambience`,()=>{if(this.fadeOutCurrent(),this.mixer.setAmbienceEnvelope(t),this.currentAmbience=e,e===null)return;let n=this.mixer.volumeFor(`ambience`),r=this.getOrLoadAmbience(e);if(r===null)return;r.off(`fade`),this.fadingOut.delete(r),r.playing()||r.play();let i=r.volume();n===0||i===n?(this.fadingIn.delete(r),r.volume(n)):this.fadeInTo(r,i,n)})}fadeInTo(e,t,n){this.fadingIn.add(e),e.fade(t,n,os),e.once(`fade`,()=>this.fadingIn.delete(e))}retargetAmbience(){if(this.currentAmbience===null)return;let e=this.ambienceTracks.get(this.currentAmbience);e===void 0||this.fadingOut.has(e)||this.safely(`retarget ambience`,()=>{let t=this.mixer.volumeFor(`ambience`);if(!this.fadingIn.has(e)){e.volume(t);return}let n=e.volume();if(e.off(`fade`),this.fadingIn.delete(e),n===t){e.volume(t);return}this.fadeInTo(e,n,t)})}fadeOutCurrent(){if(this.currentAmbience===null)return;let e=this.ambienceTracks.get(this.currentAmbience);if(e===void 0)return;this.fadingIn.delete(e);let t=e.volume();if(t===0){e.stop(),this.fadingOut.add(e);return}this.fadingOut.add(e),e.fade(t,0,os),e.once(`fade`,()=>{e.stop(),this.fadingOut.delete(e)})}getOrLoadAmbience(e){let t=this.ambienceTracks.get(e);if(t)return t;let n=fr.get(e);if(!n)return null;try{let t=new as.Howl({src:[n],loop:!0,volume:0});return this.ambienceTracks.set(e,t),t}catch(t){return console.warn(`SoundManager: failed to load ambience ${e}`,t),null}}};function cs(e,t){let n,r,i,a=new Promise(e=>r=e),o=new Promise(e=>i=e);console.log(`joining lobby: gameID: ${t.gameID}`);let s=new F;yr.reset(),Mn.resetAll();let c=new ln(t,e),l=null,u=async()=>{t.clanTagCheck!==void 0&&(t.playerClanTag=await t.clanTagCheck),console.log(`Joining game lobby ${t.gameID}`),c.joinGame()},d=new Map,f=null,p=null,m=0,h=(e,t)=>{let n=`${e}:${t}`,r=d.get(n);if(r!==void 0)return f=r,r;let i=je(e,t);return d.set(n,i),f=i,i.catch(e=>{d.get(n)===i&&d.delete(n),f===i&&(f=null),p===n&&(p=null,m=0),console.warn(`lobby: terrain preload failed for "${n}"; will retry at game start`,e)}),i};return c.connect(u,a=>{let o=Ye(a);if(o!==void 0&&e.emit(new fe(o)),a.type===`lobby_info`){n=a.myClientID,e.emit(new ye(a.lobby,a.myClientID));let t=a.lobby.gameConfig;if(t===void 0)p=null,m=0;else{let e=`${t.gameMap}:${t.gameMapSize}`;p===e?m++:(p=e,m=1),m>=3&&h(t.gameMap,t.gameMapSize)}return}if(a.type===`prestart`&&(console.log(`lobby: game prestarting: ${JSON.stringify(a,Ee)}`),h(a.gameMap,a.gameMapSize),r()),a.type===`start`&&(r(),console.log(`lobby: game started: ${JSON.stringify(Re(a),Ee,2)}`),n=a.myClientID,i(),t.gameStartInfo=a.gameStartInfo,ds(t,n,e,c,s,f,Me).then(e=>{l=e,e.start()}).catch(e=>{console.error(`error creating client game`,e),l=null;let r=document.querySelector(`game-starting-modal`);if(r&&r.classList.add(`hidden`),e instanceof Ze){tt(e.glStatus);return}ps(e.message,e.stack,t.gameID,n,!0,!1,`error_modal.connection_error`)})),a.type===`error`)if(a.error===`full-lobby`||a.error===`game-started`)document.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:t.gameID,cause:a.error},bubbles:!0,composed:!0}));else if(a.error===`kick_reason.host_left`)Je(N(`kick_reason.host_left`)).then(()=>{document.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:t.gameID,cause:`host-left`},bubbles:!0,composed:!0}))});else if(a.error===`kick_reason.match_cancelled`)document.dispatchEvent(new CustomEvent(`leave-lobby`,{detail:{lobby:t.gameID,cause:`match-cancelled`},bubbles:!0,composed:!0})),document.dispatchEvent(new CustomEvent(`matchmaking-requeue`)),window.dispatchEvent(new CustomEvent(`show-message`,{detail:{message:N(`kick_reason.match_cancelled`),color:`red`,duration:5e3}}));else if(a.error===`version_mismatch`)if(console.info(`version mismatch: bundle ${me.gitCommit()}, server ${a.gitCommit}`),Ce())Je(N(`update_available.desktop`));else{let e=Ve(t.gameID,a.gitCommit),n=me.resolveGame(t.gameID);e===null?n.kind===`cross`?window.location.href=`https://${n.host}/game/${t.gameID}${window.location.search}`:oe()===null?Je(N(`update_available.message`)).then(()=>{te()}):Je(N(`update_available.message`)):window.location.href=e}else ps(a.error,a.message,t.gameID,n,!0,!1,`error_modal.connection_error`)}),{stop:(e=!1)=>!e&&l?.shouldPreventWindowClose()?(console.log(`Player is active, prevent leaving game`),!1):(console.log(`leaving game`),l?(l.stop(),l=null):c.leaveGame(),!0),prestart:a,join:o}}function ls(e,t,n){let r=e.gameMap,i=r.width(),a=r.height(),o=()=>{let e=new Uint8Array(i*a);for(let t=0;t<a;t++)for(let n=0;n<i;n++)e[t*i+n]=r.terrainByte(r.ref(n,t));return e},s=le();s.id=`webgl-debug-canvas`,s.style.pointerEvents=`none`,document.body.insertBefore(s,document.body.firstChild);let c={current:null},l=e=>(c.current=e,0),u=e=>{c.current=null},d=new Float32Array(4096*2*4),f;try{f=new Dt(s,{mapWidth:i,mapHeight:a,unitTypes:[...$e],players:[],maxPlayers:1024},o,d,t,n,l,u)}catch(e){throw e instanceof Ze&&Qe(e.glStatus,e.renderer),s.remove(),e}return f.glLimited?(Qe(`limited`,f.glLimited.renderer,f.glLimited.maxTextureSize),tt(`limited`)):Qe(`ok`,``),window.__webglView=f,{view:f,glCanvas:s,cachedWebGLFrameCallback:c}}function us(e,t,n,r,i,a,o,s){let c=e.gameMap,l=c.width(),u=c.height(),d=n.clientWidth,f=n.clientHeight,p=new ResizeObserver(e=>{for(let t of e){let{width:e,height:n}=t.contentRect;e>0&&n>0&&(d=e,f=n)}});p.observe(n);let m=()=>{let e=i.scale,n=et(),a=i.offsetX+l/2+(d-l)/(2*e),o=i.offsetY+u/2+(f-u)/(2*e);t.setCameraState(a,o,e*n);let s=r.current;r.current=null,s?.(performance.now())};o.on(Ct,e=>{let n=e.tile,r=a.x(n),i=a.y(n),o=a.unit(e.unitIds[0]);o!==void 0&&t.showMoveIndicator(r,i,o.owner().smallID())});let h=null,g=e=>{s(e),m(),h=requestAnimationFrame(g)};h=requestAnimationFrame(g);let _=()=>{h!==null&&(cancelAnimationFrame(h),h=null),p.disconnect()},v=new ur(t);return t.onContextRestored=()=>{v.clearCaches();let e=l*u,n=new Uint8Array(e);for(let t=0;t<e;t++)n[t]=a.terrainByte(t);t.applyTerrainRects([{x:0,y:0,w:l,h:u}],n);let r=a.frameData();t.uploadTileAndTrailState(r.tileState,r.trailState),t.updateStructures(r.units),t.uploadRailroadState(r.railroadState),t.updateRelations(r.relationMatrix,r.relationSize),v.update(a)},{builder:v,stopFrameLoop:_}}async function ds(e,t,n,r,i,a,o){if(e.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);let s=new Yn(e.gameStartInfo.config,e.gameRecord!==void 0,e.gameStartInfo.listed,e.spectator===!0),c;c=a?await a:await je(e.gameStartInfo.config.gameMap,e.gameStartInfo.config.gameMapSize);let l=Gt(),u=new mt(e.gameStartInfo,t);await u.initialize(),await l;let d=new Ui(u,s,c,t,e.playerName,e.playerClanTag,e.gameStartInfo.gameID,e.gameStartInfo.players),f=document.createElement(`div`);f.id=`game-input-overlay`,f.style.position=`fixed`,f.style.left=`0`,f.style.top=`0`,f.style.width=`100%`,f.style.height=`100%`,f.style.touchAction=`none`,document.body.appendChild(f);let p=new ss(n,Ar()??jr(i));try{let a=()=>{let e=_r();return at(e,i.graphicsOverrides()),e},{view:l,glCanvas:m,cachedWebGLFrameCallback:h}=ls(c,s,a()),g=new AbortController,_=new or(l,c,i,e.gameStartInfo.config.gameMap,e.gameStartInfo.config.gameMapSize,o,g.signal);globalThis.addEventListener(`${Fe}:settings.anonymousNames`,()=>{E.refreshNames(d),d.invalidateTeamClanTags()},{signal:g.signal});let v=()=>{xt(l.getSettings(),a())},y=()=>{l.rebuildTerrain(),d.refreshPlayerColors(),E.refreshPalette(d)},b=()=>JSON.stringify({...i.graphicsOverrides().cosmetics,flagOpacity:void 0}),x=b();globalThis.addEventListener(`${Fe}:${ze}`,()=>{v(),y();let e=b();e!==x&&(x=e,E.refreshCosmetics(d))},{signal:g.signal});let S=null,C=!1;n.on(At,()=>{if(S===null){if(C)return;C=!0,we(async()=>{let{createDebugGui:e}=await import(`./debug-H8INCJfb.js`);return{createDebugGui:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]),import.meta.url).then(({createDebugGui:e})=>{S=e(l.getSettings(),{setOverride:(e,t)=>E.setEffectOverride(e,t)},a,y),S.open()}).finally(()=>{C=!1})}else S.destroy(),S=null});let w=rs(f,d,n,e.playerRole,l,_),T=new Ir(e.gameID,t),{builder:E,stopFrameLoop:ee}=us(c,l,m,h,w.transformHandler,d,n,e=>T.recordFrame(e)),te=!1;return console.log(`creating private game got difficulty: ${e.gameStartInfo.config.difficulty}`),new fs(e,t,n,w,new Ot(d,w.uiState,f,n),r,u,d,p,i,E,g,()=>{te||(te=!0,ee(),l.dispose(),m.remove(),f.remove())},T)}catch(e){throw p.dispose(),e}}var fs=class{constructor(e,t,n,r,i,a,o,s,c,l,u=null,d=null,f=null,p=null){this.lobby=e,this.clientID=t,this.eventBus=n,this.renderer=r,this.input=i,this.transport=a,this.worker=o,this.gameView=s,this.soundManager=c,this.userSettings=l,this.webglBuilder=u,this.graphicsListenerAbort=d,this.disposeRenderer=f,this.metrics=p,this.myPlayer=null,this.isActive=!1,this.turnsSeen=0,this.awaitingStart=!0,this.lastMousePosition=null,this.lastMessageTime=0,this.connectionCheckInterval=null,this.goToPlayerTimeout=null,this.lastTickReceiveTime=0,this.currentTickDelay=void 0,this.lastMessageTime=Date.now()}shouldPreventWindowClose(){return!!this.myPlayer?.isAlive()}start(){console.log(`starting client game`),this.isActive=!0,this.lastMessageTime=Date.now(),this.metrics?.start(),setTimeout(()=>{this.connectionCheckInterval=setInterval(()=>this.onConnectionCheck(),1e3)},2e4),this.eventBus.on(sr,this.inputEvent.bind(this)),this.eventBus.on(Kt,this.onMouseMove.bind(this)),this.eventBus.on(bt,this.autoUpgradeEvent.bind(this)),this.eventBus.on(pt,this.doBoatAttackUnderCursor.bind(this)),this.eventBus.on(It,this.doGroundAttackUnderCursor.bind(this)),this.eventBus.on(Ht,this.doRetaliateAttackMostRecent.bind(this)),this.eventBus.on(Rt,this.doRequestAllianceUnderCursor.bind(this)),this.eventBus.on(kn,this.doBreakAllianceUnderCursor.bind(this)),this.eventBus.on(St,this.doTargetPlayerUnderCursor.bind(this)),this.renderer.initialize(),this.input.initialize(),this.worker.start(e=>{if(this.lobby.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);if(`errMsg`in e){ps(e.errMsg,e.stack??`missing`,this.lobby.gameStartInfo.gameID,this.clientID),console.error(e.stack),this.stop();return}this.transport.turnComplete(),e.updates[R.Hash].forEach(e=>{this.eventBus.emit(new hn(e.tick,e.hash))}),this.gameView.update(e),this.webglBuilder?.update(this.gameView),this.renderer.tick(),e.tickExecutionDuration!==void 0&&this.metrics?.recordTickExecution(e.tickExecutionDuration),this.eventBus.emit(new wt(e.tickExecutionDuration,this.currentTickDelay)),this.currentTickDelay=void 0});let e=()=>{console.log(`Connected to game server!`),this.awaitingStart=!0,this.transport.rejoinGame(this.turnsSeen)},t=!1;this.transport.updateCallback(e,e=>{if(this.lastMessageTime=Date.now(),e.type===`start`){if(console.log(`starting game! in client game runner`),this.awaitingStart=!1,this.gameView.config().isRandomSpawn()){let e=()=>{let t=this.gameView.myPlayer();if(this.gameView.inSpawnPhase()&&!t?.hasSpawned()){this.goToPlayerTimeout=setTimeout(e,1e3);return}if(t){if(!this.gameView.inSpawnPhase()&&!t.hasSpawned()){ps(`spawn_failed`,N(`error_modal.spawn_failed.description`),this.lobby.gameID,this.clientID,!0,!1,`error_modal.spawn_failed.title`);return}this.eventBus.emit(new pn(t,10))}};e()}for(let t of e.turns)if(!(t.turnNumber<this.turnsSeen)){for(;t.turnNumber-1>this.turnsSeen;)this.worker.sendTurn({turnNumber:this.turnsSeen,intents:[]}),this.turnsSeen++;this.worker.sendTurn(t),this.turnsSeen++}}if(e.type===`desync`){if(this.lobby.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);ps(`desync from server: ${JSON.stringify(e)}`,``,this.lobby.gameStartInfo.gameID,this.clientID,!0,!1,`error_modal.desync_notice`)}if(e.type===`error`&&ps(e.error,e.message,this.lobby.gameID,this.clientID,!0,!1,`error_modal.connection_error`),e.type===`pong`&&this.metrics?.recordRoundTrip(Math.floor(performance.now())-e.sentAt),e.type===`new_lobby`&&this.eventBus.emit(new jt(e.gameID)),e.type===`turn`){!this.gameView.inSpawnPhase()&&!t&&this.gameView.myPlayer()&&this.userSettings.goToPlayer()&&(t=!0,this.eventBus.emit(new pn(this.gameView.myPlayer(),8)));let n=Date.now();this.lastTickReceiveTime>0&&(this.currentTickDelay=n-this.lastTickReceiveTime,this.transport.isLocal||this.metrics?.recordTickInterval(this.currentTickDelay)),this.lastTickReceiveTime=n,this.turnsSeen===e.turn.turnNumber?(this.worker.sendTurn(this.gameView.config().isReplay()?{...e.turn,intents:e.turn.intents.filter(e=>e.type!==`toggle_pause`)}:e.turn),this.turnsSeen++):(this.awaitingStart?console.debug:console.error)(`got wrong turn have turns ${this.turnsSeen}, received turn ${e.turn.turnNumber}`)}}),console.log(`sending join game`),this.transport.rejoinGame(0)}stop(){this.soundManager.dispose(),this.graphicsListenerAbort?.abort(),this.input.destroy(),this.disposeRenderer?.(),this.isActive&&(this.isActive=!1,this.metrics?.stop(),this.worker.cleanup(),this.transport.leaveGame(),this.connectionCheckInterval&&=(clearInterval(this.connectionCheckInterval),null),this.goToPlayerTimeout&&=(clearTimeout(this.goToPlayerTimeout),null))}inputEvent(e){if(!this.isActive||this.renderer.uiState.ghostStructure!==null)return;let t=this.renderer.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.gameView.isValidCoord(t.x,t.y))return;console.log(`clicked cell ${t}`);let n=this.gameView.ref(t.x,t.y);if(this.gameView.isLand(n)&&!this.gameView.hasOwner(n)&&this.gameView.inSpawnPhase()&&!this.gameView.config().isRandomSpawn()){this.eventBus.emit(new xn(n));return}if(!this.gameView.inSpawnPhase()){if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}this.myPlayer.actions(n,[h.TransportShip]).then(e=>{e.canAttack?this.eventBus.emit(new ut(this.gameView.owner(n).id(),this.myPlayer.troops()*this.renderer.uiState.attackRatio)):this.canAutoBoat(e.buildableUnits,n)&&this.sendBoatAttackIntent(n)}).catch(e=>{console.warn(`Failed to check boat attack actions:`,e)})}}autoUpgradeEvent(e){if(!this.isActive)return;let t=this.renderer.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.gameView.isValidCoord(t.x,t.y))return;let n=this.gameView.ref(t.x,t.y);if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}this.gameView.inSpawnPhase()||this.findAndUpgradeNearestBuilding(n)}findAndUpgradeNearestBuilding(e){this.myPlayer.actions(e,i.types).then(t=>{let n=[];for(let r of t.buildableUnits)if(r.canUpgrade!==!1){let t=this.gameView.units().find(e=>e.id()===r.canUpgrade);if(t){let i=this.gameView.manhattanDist(e,t.tile());n.push({unitId:r.canUpgrade,unitType:r.type,distance:i})}}if(n.length===0)return;let r=ae(n,e=>e.distance);if(r){for(let n of t.buildableUnits)if(n.canUpgrade===!1&&n.type!==r.unitType){let t=this.myPlayer.id(),i=this.gameView.nearbyUnits(e,this.gameView.config().structureMinDist(),n.type).filter(({unit:e})=>e.owner().id()===t).sort((e,t)=>e.distSquared-t.distSquared)[0];if(i&&this.gameView.manhattanDist(e,i.unit.tile())<=r.distance)return}this.eventBus.emit(new Tn(r.unitId,r.unitType))}}).catch(e=>{console.warn(`Failed to check structure upgrade actions:`,e)})}doBoatAttackUnderCursor(e){let t=this.actionTile(e.tile);if(t!==null){if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}this.myPlayer.buildables(t,[h.TransportShip]).then(e=>{this.canBoatAttack(e)===!1?console.warn(`Boat attack triggered but can't send Transport Ship to tile`):this.sendBoatAttackIntent(t)}).catch(e=>{console.warn(`Failed to check boat attack actions:`,e)})}}doGroundAttackUnderCursor(){let e=this.getTileUnderCursor();if(e!==null){if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}this.myPlayer.actions(e,null).then(t=>{t.canAttack&&this.eventBus.emit(new ut(this.gameView.owner(e).id(),this.myPlayer.troops()*this.renderer.uiState.attackRatio))}).catch(e=>{console.warn(`Failed to check ground attack actions:`,e)})}}doRetaliateAttackMostRecent(){if(!this.isActive||this.gameView.inSpawnPhase())return;if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}let e=this.myPlayer.incomingAttacks().filter(e=>this.gameView.playerBySmallID(e.attackerID).type()!==t.Bot);if(e.length===0)return;let n=e[e.length-1],r=this.gameView.playerBySmallID(n.attackerID);if(!r)return;let i=Math.min(n.troops,this.renderer.uiState.attackRatio*this.myPlayer.troops());this.eventBus.emit(new ut(r.id(),i))}doRequestAllianceUnderCursor(e){let t=this.actionTile(e.tile);if(t===null)return;if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}let n=this.myPlayer,r=this.gameView.owner(t);if(!r.isPlayer()||e.playerID!==void 0&&r.id()!==e.playerID)return;let i=r;n.actions(t).then(e=>{e.interaction?.canSendAllianceRequest?this.eventBus.emit(new Ut(n,i)):e.interaction?.allianceInfo?.canExtend&&this.eventBus.emit(new sn(i))}).catch(e=>{console.warn(`Failed to check alliance actions:`,e)})}doBreakAllianceUnderCursor(e){let t=this.actionTile(e.tile);if(t===null)return;if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}let n=this.myPlayer,r=this.gameView.owner(t);if(!r.isPlayer()||e.playerID!==void 0&&r.id()!==e.playerID)return;let i=r;n.actions(t).then(e=>{e.interaction?.canBreakAlliance&&this.eventBus.emit(new Xn(n,i))}).catch(e=>{console.warn(`Failed to check alliance actions:`,e)})}doTargetPlayerUnderCursor(e){let t=this.actionTile(e.tile);if(t===null)return;if(this.myPlayer===null){if(!this.clientID)return;let e=this.gameView.playerByClientID(this.clientID);if(e===null)return;this.myPlayer=e}let n=this.gameView.owner(t);if(!n.isPlayer()||e.playerID!==void 0&&n.id()!==e.playerID)return;let r=n;this.myPlayer.actions(t).then(e=>{e.interaction?.canTarget&&this.eventBus.emit(new Vn(r.id()))}).catch(e=>{console.warn(`Failed to check target actions:`,e)})}actionTile(e){return e===void 0?this.getTileUnderCursor():!this.isActive||this.gameView.inSpawnPhase()?null:e}getTileUnderCursor(){if(!this.isActive||!this.lastMousePosition||this.gameView.inSpawnPhase())return null;let e=this.renderer.transformHandler.screenToWorldCoordinates(this.lastMousePosition.x,this.lastMousePosition.y);return this.gameView.isValidCoord(e.x,e.y)?this.gameView.ref(e.x,e.y):null}canBoatAttack(e){return e.find(e=>e.type===h.TransportShip)?.canBuild??!1}sendBoatAttackIntent(e){this.myPlayer&&this.eventBus.emit(new yn(e,this.myPlayer.troops()*this.renderer.uiState.attackRatio))}canAutoBoat(e,t){if(!this.gameView.isLand(t))return!1;let n=this.canBoatAttack(e);return n===!1?!1:this.gameView.euclideanDistSquared(t,n)<1e4}onMouseMove(e){this.lastMousePosition={x:e.x,y:e.y}}onConnectionCheck(){if(this.transport.isLocal)return;let e=Date.now(),t=e-this.lastMessageTime;t>5e3&&(console.log(`No message from server for ${t} ms, reconnecting`),this.lastMessageTime=e,this.transport.reconnect())}};function ps(e,t,n,r,i=!1,a=!0,o=`error_modal.crashed`){if(document.querySelector(`#error-modal`))return;Oe(e,t,n,r,o);let s=N(e),c=s===e?e:s,l=document.createElement(`div`);l.id=`error-modal`;let u=[a?N(`error_modal.paste_discord`):null,N(o),`game id: ${n}`,`client id: ${r}`,`Error: ${c}`,t?`Message: ${t}`:null].filter(Boolean).join(`
`),d=document.createElement(`pre`);d.textContent=u;let f=document.createElement(`button`);if(f.textContent=N(`error_modal.copy_clipboard`),f.className=`copy-btn`,f.addEventListener(`click`,async()=>{try{await navigator.clipboard.writeText(u),f.textContent=N(`common.copied`)}catch{f.textContent=N(`common.failed_copy`)}}),l.appendChild(d),l.appendChild(f),i){let e=document.createElement(`button`);e.textContent=`X`,e.className=`close-btn`,e.addEventListener(`click`,()=>{l.remove()}),l.appendChild(e)}document.body.appendChild(l)}export{fs as ClientGameRunner,cs as joinLobby};