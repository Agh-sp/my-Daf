import{A as e,B as t,I as n,M as r,N as i,O as a,P as o,R as s,T as c,U as l,Y as u,q as d,rt as f,t as p,v as m}from"./Platform-ChKbd54A.js";import{E as h}from"./vendor-DPAo4oW-.js";import{$ as g,D as _,E as v,Ot as y,P as b,Q as x,T as S,Z as C,b as w,bt as T,et as E,f as D,lt as O,nt as k,p as A,rt as j,st as M,t as N,tt as P,ut as ee,w as te,wt as ne,z as F}from"./decorate-CgSmyiMM.js";import{f as re}from"./CosmeticSchemas-DRLyea1I.js";import{a as ie}from"./DesktopShell-Cy7M529l.js";import{t as ae}from"./CrazyGamesSDK-CbSm7Wb8.js";import{t as oe}from"./preload-helper-DqxmgrHA.js";import{At as se,Br as I,Dt as ce,Et as le,Ht as ue,Ir as de,Kn as fe,Lr as pe,Mr as me,Mt as he,Nt as ge,Ot as _e,Pr as ve,Pt as ye,Rr as be,Un as xe,Ut as Se,Wt as Ce,ar as we,fr as Te,gr as Ee,gt as De,hr as Oe,ht as ke,jt as Ae,kt as je,mt as Me,pt as Ne,qn as Pe}from"./index-DmVmrdQe.js";import{n as Fe,t as L}from"./Format-Dhp90E0J.js";import{$ as Ie,A as Le,C as Re,D as ze,J as Be,K as Ve,M as R,N as He,O as Ue,Ot as We,P as Ge,Q as Ke,S as qe,St as Je,Tt as Ye,U as Xe,W as z,Y as Ze,_ as Qe,a as $e,at as et,b as tt,bt as nt,c as rt,d as it,et as at,f as ot,ft as st,g as ct,h as lt,i as ut,j as B,k as V,l as dt,lt as ft,mt as pt,nt as mt,o as ht,ot as gt,p as _t,pt as vt,q as yt,rt as bt,s as xt,st as St,tt as Ct,ut as wt,vt as Tt,w as Et,wt as Dt,x as Ot,xt as kt,yt as At}from"./RailroadCache-D_edhQQ5.js";import{t as jt}from"./colord-BshiezEt.js";import{t as Mt}from"./Sounds-CwqeBaPT.js";import{n as Nt}from"./BuildIcons-CDi3EHiD.js";import{n as Pt}from"./ThemeProvider-BejU8akc.js";import{n as Ft,t as It}from"./purify.es-uoe-fY2f.js";import{t as Lt}from"./repeat-DTlGpuLj.js";var Rt=50,zt={enabled:!1,speed:`normal`,warnSeconds:30,drainStartPercent:2,drainMaxPercent:5,drainRampSeconds:90,drainFloorPercent:5,floorStartPercent:40,floorDecaySeconds:90,rotDeathSeconds:150,rotGrainSeconds:10,rotSpecklePercent:15,warshipDrainStartPercent:1,warshipDrainMaxPercent:50,warshipDrainCurveExponent:8},Bt=80,Vt={enabled:!1,startMinutes:30,dropPercentPerMinute:2},Ht=class{constructor(e,t,n=!1,r=!1){this._gameConfig=e,this._isReplay=t,this.listed=n,this._spectator=r,this.unitInfoCache=new Map}transportShipFuelCost(){return{oil:0,gas:0,uranium:0}}tradeShipFuelCost(){return{oil:500,gas:0,uranium:0}}warshipBuildFuelCost(){return{oil:2500,gas:0,uranium:0}}warshipShellFuelCost(){return{oil:50,gas:0,uranium:0}}missileFuelCost(e){switch(e){case u.BallisticMissile:return{oil:0,gas:500,uranium:0};case u.AtomBomb:return{oil:0,gas:1e3,uranium:500};case u.HydrogenBomb:case u.MIRV:return{oil:0,gas:2500,uranium:0};case u.MIRVWarhead:return{oil:0,gas:0,uranium:0};default:throw Error(`No missile fuel cost configured for ${e}`)}}isReplay(){return this._isReplay}isIntentionalSpectator(){return this._spectator}traitorDefenseDebuff(){return .5}traitorDuration(){return 300}doomsdayClockConfig(){let e=this._gameConfig.doomsdayClock,t=zt;return{enabled:e?.enabled??t.enabled,speed:e?.speed??t.speed,warnSeconds:t.warnSeconds,drainStartPercent:t.drainStartPercent,drainMaxPercent:t.drainMaxPercent,drainRampSeconds:t.drainRampSeconds,drainFloorPercent:t.drainFloorPercent,floorStartPercent:t.floorStartPercent,floorDecaySeconds:t.floorDecaySeconds,rotDeathSeconds:t.rotDeathSeconds,rotGrainSeconds:t.rotGrainSeconds,rotSpecklePercent:t.rotSpecklePercent,warshipDrainStartPercent:t.warshipDrainStartPercent,warshipDrainMaxPercent:t.warshipDrainMaxPercent,warshipDrainCurveExponent:t.warshipDrainCurveExponent}}overtimeConfig(){let e=this._gameConfig.overtime,t=Vt;return{enabled:e?.enabled??t.enabled,startMinutes:e?.startMinutes??t.startMinutes,dropPercentPerMinute:t.dropPercentPerMinute}}spawnImmunityDuration(){return this._gameConfig.spawnImmunityDuration??Rt}nationSpawnImmunityDuration(){return Rt}hasExtendedSpawnImmunity(){return this.spawnImmunityDuration()>Rt}gameConfig(){return this._gameConfig}cityTroopIncrease(){return 25e4}msPerTick(){return 100}SAMCooldown(){return 90}SiloCooldown(){return 90}defensePostRange(){return 30}isUnitDisabled(e){return this._gameConfig.disabledUnits?.includes(e)??!1}instantBuild(){return this._gameConfig.instantBuild}disableAlliances(){return this._gameConfig.customAllianceDuration===0||(this._gameConfig.disableAlliances??!1)}isRandomSpawn(){return this._gameConfig.randomSpawn}infiniteTroops(){return this._gameConfig.infiniteTroops}donateTroops(){return this._gameConfig.donateTroops}trainStationMaxRange(){return 110}unitInfo(e){let t=this.unitInfoCache.get(e);if(t!==void 0)return t;let n;switch(e){case u.Warship:n={maxHealth:1e3};break;case u.Shell:n={damage:250};break;case u.Port:n={constructionDuration:this.instantBuild()?0:50,upgradable:!0};break;case u.MissileSilo:n={constructionDuration:this.instantBuild()?0:100,upgradable:!0};break;case u.DefensePost:n={constructionDuration:this.instantBuild()?0:50};break;case u.SAMLauncher:n={constructionDuration:this.instantBuild()?0:300,upgradable:!0};break;case u.City:case u.Factory:case u.OilField:case u.GasField:case u.UraniumPlant:n={constructionDuration:this.instantBuild()?0:e===u.City||e===u.Factory?20:100,upgradable:!0};break;case u.Radar:n={constructionDuration:this.instantBuild()?0:100,upgradable:!0};break;case u.MissileFactory:case u.OilStorage:case u.GasStorage:n={constructionDuration:this.instantBuild()?0:100};break;case u.Arsenal:n={maxHealth:1e3,constructionDuration:this.instantBuild()?0:100,upgradable:!0};break;case u.TransportShip:case u.SAMMissile:case u.AtomBomb:case u.BallisticMissile:case u.HydrogenBomb:case u.MIRV:case u.MIRVWarhead:case u.Speedboat:case u.TradeShip:case u.Train:n={};break;default:ne(e)}return this.unitInfoCache.set(e,n),n}radarRange(e){return 40*Math.max(0,e)}hasInfiniteTroopsFor(e){return this.infiniteTroops()?!0:(this._gameConfig.hostCheats?.infiniteTroops??!1)&&e.isLobbyCreator()}deletionMarkDuration(){return 300}deleteUnitCooldown(){return 300}allianceRequestDuration(){return 200}allianceDuration(){let e=this._gameConfig.customAllianceDuration;return typeof e==`number`&&e>0?e*60*10:300*10}percentageTilesOwnedToWin(e){let t=Bt,n=this.overtimeConfig();if(!n.enabled)return t;let r=Math.floor(e)-n.startMinutes*60;return r<=0?t:Math.max(0,t-Math.floor(r*n.dropPercentPerMinute/60))}armyLimitWarningThreshold(){return .8}numSpawnPhaseTurns(){return this._gameConfig.gameType===o.Singleplayer?100:this.isRandomSpawn()?150:200}maxTroops(n){let r=n.type()===t.Human&&this.hasInfiniteTroopsFor(n)?1e9:2*(y(n.numTilesOwned(),.6)*1e3+5e4)+n.units(u.City).filter(e=>!e.isUnderConstruction()).map(e=>e.level()).reduce((e,t)=>e+t,0)*this.cityTroopIncrease();if(n.type()===t.Bot)return r/3;if(n.type()===t.Human)return r;switch(this._gameConfig.difficulty){case e.Easy:return r*.5;case e.Medium:return r*.75;case e.Hard:return r*1;case e.Impossible:return r*1.25;default:ne(this._gameConfig.difficulty)}}troopIncreaseRate(n){let r=this.maxTroops(n),i=10+y(n.troops(),.73)/4,a=1-n.troops()/r;if(i*=a,n.type()===t.Bot&&(i*=.5),n.type()===t.Nation)switch(this._gameConfig.difficulty){case e.Easy:i*=.9;break;case e.Medium:i*=.95;break;case e.Hard:i*=1;break;case e.Impossible:i*=1.05;break;default:ne(this._gameConfig.difficulty)}return Math.min(n.troops()+i,r)-n.troops()}nukeMagnitudes(e){switch(e){case u.MIRVWarhead:return{inner:12,outer:18};case u.BallisticMissile:return{inner:5,outer:12};case u.AtomBomb:return{inner:12,outer:30};case u.HydrogenBomb:return{inner:80,outer:100}}throw Error(`Unknown nuke type: ${e}`)}nukeAllianceBreakThreshold(){return 100}samRange(e){return this.maxSamRange()-480/(e+5)}maxSamRange(){return 150}structureMinDist(){return 15}warshipVeterancyHealthBonus(){return 20}allianceExtensionPromptOffset(){return 300}},Ut=[{title:`emoji_table.faces`,emojis:[`😀`,`😊`,`🥰`,`😇`,`😎`,`😞`,`🥺`,`😭`,`😱`,`😡`,`😈`,`🤡`,`🥱`,`🫡`,`🤦‍♂️`]},{title:`emoji_table.gestures`,emojis:[`👍`,`👎`,`👋`,`👏`,`✋`,`🙏`,`💪`,`🫴`,`🤌`,`🖕`]},{title:`emoji_table.diplomacy`,emojis:[`🤝`,`🆘`,`🕊️`,`🏳️`,`⏳`,`⚠️`,`❓`,`❤️`,`💔`]},{title:`emoji_table.things`,emojis:[`🔥`,`💥`,`💀`,`☢️`,`🛡️`,`⚓`,`⛵`,`💰`,`🏡`,`🏭`,`🚂`,`🐔`,`🐀`]},{title:`emoji_table.directions`,emojis:[`↖️`,`⬆️`,`↗️`,`⬅️`,`🎯`,`➡️`,`↙️`,`⬇️`,`↘️`],columns:3},{title:`emoji_table.ranks`,emojis:[`👑`,`🥇`,`🥈`,`🥉`],columns:2}],Wt=`qweasd`;function Gt(e){return Wt[e]}function Kt(e){if(e.shiftKey||e.ctrlKey||e.metaKey||e.altKey||!/^Key[A-Z]$/.test(e.code))return null;let t=Wt.indexOf(e.code[3].toLowerCase());return t===-1?null:t}function qt(e,t,n){let r=[...e],i=r.indexOf(t);return i!==-1&&(r[i]=r[n]??null),r[n]=t,r}var Jt=class{constructor(e,t){this.x=e,this.y=t}},Yt=class{constructor(e,t){this.x=e,this.y=t}},Xt=class{constructor(e,t){this.x=e,this.y=t}},Zt=class{constructor(e,t,n=[]){this.unit=e,this.isSelected=t,this.units=n}},Qt=class{constructor(e,t){this.x=e,this.y=t}},$t=class{constructor(e,t){this.x=e,this.y=t}},en=class{constructor(e,t){this.x=e,this.y=t}},tn=class{constructor(e,t,n){this.x=e,this.y=t,this.delta=n}},nn=class{constructor(e,t){this.deltaX=e,this.deltaY=t}},rn=class{constructor(e){this.alternateView=e}},an=class{},on=class{},sn=class{},cn=class{},ln=class{constructor(e){this.structureTypes=e}},un=class{},dn=class{constructor(e){this.rocketDirectionUp=e}},fn=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},pn=class{constructor(e,t,n,r){this.startX=e,this.startY=t,this.endX=n,this.endY=r}},mn=class{},hn=class{},gn=class{constructor(e,t){this.x=e,this.y=t}},_n=class{constructor(e,t){this.x=e,this.y=t}},vn=class{constructor(e,t){this.x=e,this.y=t}},yn=class{constructor(e,t){this.x=e,this.y=t}},bn=class{constructor(e){this.visible=e}},xn=class{constructor(e){this.slot=e}},Sn=class{constructor(e){this.tile=e}},Cn=class{},wn=class{},Tn=class{constructor(e,t){this.tile=e,this.playerID=t}},En=class{constructor(e,t){this.tile=e,this.playerID=t}},Dn=class{constructor(e,t){this.tile=e,this.playerID=t}},On=class{constructor(e){this.attackRatio=e}},kn=class{constructor(e){this.replaySpeedMultiplier=e}},An=class{},jn=class{},Mn=class{},Nn=class{constructor(){}},Pn=class{constructor(e,t){this.x=e,this.y=t}},Fn=class{constructor(e){this.enabled=e}},In=class{constructor(e,t){this.tickExecutionDuration=e,this.tickDelay=t}},Ln=class{constructor(e,t,n,r){this.gameView=e,this.uiState=t,this.canvas=n,this.eventBus=r,this.lastPointerX=0,this.lastPointerY=0,this.lastMouseX=0,this.lastMouseY=0,this.emojiTableOpen=!1,this.emojiKeysDown=new Set,this.lastPointerDownX=0,this.lastPointerDownY=0,this.pointers=new Map,this.passThroughPointers=new Map,this.lastPinchDistance=0,this.lastGestureScale=null,this.pointerDown=!1,this.alternateView=!1,this.selectionBoxActive=!1,this.multiSelectionActive=!1,this.unitSelectionActive=!1,this.longPressTimer=null,this.longPressActive=!1,this.suppressNextTap=!1,this.LONG_PRESS_MS=800,this.moveInterval=null,this.listenerAbort=null,this.activeKeys=new Set,this.keybinds={},this.keybindAndEvent=[],this.coordinateGridEnabled=!1,this.PAN_SPEED=5,this.ZOOM_SPEED=10,this.DRAG_THRESHOLD_PX=10,this.userSettings=new Ee,this.onEmojiTableVisible=e=>{if(this.emojiTableOpen=e.visible,this.emojiKeysDown.clear(),e.visible)for(let e of this.activeKeys)Kt(this.unmodifiedKey(e))!==null&&this.activeKeys.delete(e)},this.onUnitSelection=e=>{this.unitSelectionActive=e.isSelected&&(e.unit!==null||(e.units??[]).length>0),e.isSelected&&(e.units??[]).length>0?(this.multiSelectionActive=!0,this.canvas.style.cursor=`crosshair`):e.isSelected?(this.multiSelectionActive=!1,this.canvas.style.cursor=`crosshair`):(this.multiSelectionActive=!1,this.selectionBoxActive||(this.canvas.style.cursor=``))},this.onKeybindsChanged=()=>{this.buildKeybindTable()},this.onPassThroughPointerDown=e=>{this.isGameInputPassThrough(e)&&(e.button===0&&this.passThroughPointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.onPointerDown(e))},this.onPointerCancel=e=>{if(this.passThroughPointers.has(e.pointerId)){this.cancelPassThroughDrag(e.pointerId);return}this.onPointerUp(e)}}initialize(){this.buildKeybindTable(),globalThis.addEventListener(`${Oe}:${Te}`,this.onKeybindsChanged),this.eventBus.off(Zt,this.onUnitSelection),this.eventBus.on(Zt,this.onUnitSelection),this.eventBus.off(bn,this.onEmojiTableVisible),this.eventBus.on(bn,this.onEmojiTableVisible),this.initializePointerAndKeyboardEvents()}unmodifiedKey(e){return{code:e,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1}}resetPointerState(){this.pointerDown=!1,this.pointers.clear(),this.passThroughPointers.clear(),this.lastGestureScale=null,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive=!1,this.suppressNextTap=!1,this.selectionBoxActive=!1,this.multiSelectionActive=!1}buildKeybindTable(){this.keybinds=this.userSettings.keybinds(p.isMac),this.keybindAndEvent=[],this.addKeybindAndEvent(this.keybinds.boatAttack,()=>{this.eventBus.emit(new Sn)}),this.addKeybindAndEvent(this.keybinds.groundAttack,()=>{this.eventBus.emit(new Cn)}),this.addKeybindAndEvent(this.keybinds.retaliateAttack,()=>{this.eventBus.emit(new wn)}),this.addKeybindAndEvent(this.keybinds.centerCamera,()=>{this.eventBus.emit(new Nn)}),this.addKeybindAndEvent(this.keybinds.selectAllWarships,()=>{this.eventBus.emit(new hn)}),this.addKeybindAndEvent(this.keybinds.requestAlliance,()=>{this.eventBus.emit(new Tn)}),this.addKeybindAndEvent(this.keybinds.breakAlliance,()=>{this.eventBus.emit(new En)}),this.addKeybindAndEvent(this.keybinds.targetPlayer,()=>{this.eventBus.emit(new Dn)}),this.addKeybindAndEvent(this.keybinds.quickChat,()=>{this.eventBus.emit(new yn(this.lastMouseX,this.lastMouseY))},e=>!e.altKey&&!e.ctrlKey&&!e.metaKey&&!this.resetGfxModifierHeld(e)),this.addKeybindAndEvent(this.keybinds.pauseGame,()=>{this.eventBus.emit(new An)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedUp,()=>{this.eventBus.emit(new jn)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.gameSpeedDown,()=>{this.eventBus.emit(new Mn)},e=>!e.repeat),this.addKeybindAndEvent(this.keybinds.attackRatioDown,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new On(-e))}),this.addKeybindAndEvent(this.keybinds.attackRatioUp,()=>{let e=this.userSettings.attackRatioIncrement();this.eventBus.emit(new On(e))}),this.addKeybindAndEvent(this.keybinds.swapDirection,()=>{let e=!this.uiState.rocketDirectionUp;this.eventBus.emit(new dn(e))}),this.addKeybindAndEvent(`Shift+KeyD`,()=>{this.eventBus.emit(new cn)}),this.addKeybindAndEvent(this.keybinds.toggleView,()=>{this.alternateView=!1,this.eventBus.emit(new rn(!1))});let e=this.keybinds.resetGfx??`KeyR`;this.addKeybindAndEvent(e,()=>{this.eventBus.emit(new on)},e=>this.resetGfxModifierHeld(e));let t=[`buildCity`,`buildFactory`,`buildOilField`,`buildGasField`,`buildUraniumPlant`,`buildPort`,`buildDefensePost`,`buildMissileSilo`,`buildSamLauncher`,`buildBallisticMissile`,`buildAtomBomb`,`buildHydrogenBomb`,`buildWarship`,`buildMIRV`];t=t.map(e=>this.keybinds[e]),t.push(`Numpad0`,`Numpad1`,`Numpad2`,`Numpad3`,`Numpad4`,`Numpad5`,`Numpad6`,`Numpad7`,`Numpad8`,`Numpad9`,`Digit0`,`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`,`Digit6`,`Digit7`,`Digit8`,`Digit9`),t.push(...t.map(e=>`Shift+`+e)),t=[...new Set(t)].filter(e=>!!e);for(let e of t)this.addKeybindAndEvent(e,e=>{let t=this.resolveBuildKeybind(e.code,e.shiftKey);t!==null&&this.setGhostStructure(t)},()=>this.canUseBuildKeybinds(),e=>this.resolveBuildKeybind(e.code,e.shiftKey)!==null)}initializePointerAndKeyboardEvents(){this.listenerAbort?.abort(),this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),this.resetPointerState(),this.listenerAbort=new AbortController;let{signal:e}=this.listenerAbort;this.canvas.addEventListener(`pointerdown`,e=>this.onPointerDown(e),{signal:e}),window.addEventListener(`pointerdown`,this.onPassThroughPointerDown,{signal:e}),window.addEventListener(`pointerup`,e=>this.onPointerUp(e),{signal:e}),window.addEventListener(`pointercancel`,this.onPointerCancel,{signal:e}),this.canvas.addEventListener(`wheel`,e=>{this.onScroll(e),this.onShiftScroll(e),e.preventDefault()},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturestart`,e=>{e.preventDefault(),this.lastGestureScale=e.scale},{passive:!1,signal:e}),this.canvas.addEventListener(`gesturechange`,e=>{e.preventDefault(),this.onGestureChange(e)},{passive:!1,signal:e}),this.canvas.addEventListener(`gestureend`,e=>{e.preventDefault(),this.lastGestureScale=null},{passive:!1,signal:e}),window.addEventListener(`pointermove`,this.onPointerMove.bind(this),{signal:e}),this.canvas.addEventListener(`contextmenu`,e=>this.onContextMenu(e),{signal:e}),window.addEventListener(`mousemove`,e=>{this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,(e.movementX||e.movementY)&&this.eventBus.emit(new $t(e.clientX,e.clientY))},{signal:e}),window.addEventListener(`blur`,()=>{this.activeKeys.clear(),this.alternateView&&(this.alternateView=!1,this.eventBus.emit(new rn(!1)));let e=this.selectionBoxActive||this.multiSelectionActive;this.resetPointerState(),e&&this.eventBus.emit(new mn),this.canvas.style.cursor=``},{signal:e}),this.pointers.clear(),this.moveInterval=setInterval(()=>{let e=0,t=0;if(this.activeKeys.has(this.keybinds.boxSelectWarships))return;(this.activeKeys.has(this.keybinds.moveUp)||this.activeKeys.has(`ArrowUp`))&&(t+=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveDown)||this.activeKeys.has(`ArrowDown`))&&(t-=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveLeft)||this.activeKeys.has(`ArrowLeft`))&&(e+=this.PAN_SPEED),(this.activeKeys.has(this.keybinds.moveRight)||this.activeKeys.has(`ArrowRight`))&&(e-=this.PAN_SPEED),(e||t)&&this.eventBus.emit(new nn(e,t));let n=window.innerWidth/2,r=window.innerHeight/2;(this.activeKeys.has(this.keybinds.zoomOut)||this.activeKeys.has(`Minus`)||this.activeKeys.has(`NumpadSubtract`))&&this.eventBus.emit(new tn(n,r,this.ZOOM_SPEED)),(this.activeKeys.has(this.keybinds.zoomIn)||this.activeKeys.has(`Equal`)||this.activeKeys.has(`NumpadAdd`))&&this.eventBus.emit(new tn(n,r,-this.ZOOM_SPEED))},1),window.addEventListener(`keydown`,e=>{if(this.isTextInputTarget(e.target)&&e.code!==`Escape`)return;if(this.keybindMatchesEvent(e,this.keybinds.emojiMenu)&&!e.repeat){e.preventDefault(),this.emojiTableOpen?this.eventBus.emit(new an):this.eventBus.emit(new vn(this.lastMouseX,this.lastMouseY));return}if(this.emojiTableOpen&&Kt(e)!==null){e.preventDefault(),this.emojiKeysDown.add(e.code);return}if(this.keybindMatchesEvent(e,this.keybinds.toggleView)&&(e.preventDefault(),this.alternateView||(this.alternateView=!0,this.eventBus.emit(new rn(!0)))),this.keybindMatchesEvent(e,this.keybinds.coordinateGrid)&&!e.repeat&&(e.preventDefault(),this.coordinateGridEnabled=!this.coordinateGridEnabled,this.eventBus.emit(new Fn(this.coordinateGridEnabled))),e.code===`Escape`){e.preventDefault();let t=!1;this.uiState.ghostStructure!==null&&(this.setGhostStructure(null),t=!0),this.selectionBoxActive&&(this.selectionBoxActive=!1,this.eventBus.emit(new mn),t=!0),this.eventBus.emit(new an),!t&&(this.unitSelectionActive||this.multiSelectionActive)&&this.eventBus.emit(new Zt(null,!1))}(e.code===`Enter`||e.code===`NumpadEnter`)&&this.uiState.ghostStructure!==null&&(e.preventDefault(),this.eventBus.emit(new un));let t=(e.metaKey||e.ctrlKey)&&(e.code===`Minus`||e.code===`Equal`||e.code===`NumpadAdd`||e.code===`NumpadSubtract`);(Object.values(this.keybinds).includes(e.code)||this.keybindAndEvent.some(([t])=>this.keybindMatchesEvent(e,t)))&&!t&&e.preventDefault(),!t&&[this.keybinds.moveUp,this.keybinds.moveDown,this.keybinds.moveLeft,this.keybinds.moveRight,this.keybinds.zoomOut,this.keybinds.zoomIn,`ArrowUp`,`ArrowLeft`,`ArrowDown`,`ArrowRight`,`Minus`,`Equal`,`NumpadAdd`,`NumpadSubtract`,this.keybinds.attackRatioDown,this.keybinds.attackRatioUp,this.keybinds.centerCamera,`ControlLeft`,`ControlRight`,this.keybinds.boxSelectWarships,this.keybinds.emojiMenuModifier,this.keybinds.buildMenuModifier,this.keybinds.altKey].includes(e.code)&&this.activeKeys.add(e.code),e.code===this.keybinds.boxSelectWarships&&(this.uiState.ghostStructure!==null&&this.setGhostStructure(null),this.canvas.style.cursor=`crosshair`)},{signal:e}),window.addEventListener(`keyup`,e=>{if(!(this.isTextInputTarget(e.target)&&!this.activeKeys.has(e.code))){if((e.code===`MetaLeft`||e.code===`MetaRight`||e.code===`ControlLeft`||e.code===`ControlRight`)&&(this.activeKeys.delete(`Minus`),this.activeKeys.delete(`Equal`),this.activeKeys.delete(`NumpadAdd`),this.activeKeys.delete(`NumpadSubtract`),this.activeKeys.delete(this.keybinds.zoomIn),this.activeKeys.delete(this.keybinds.zoomOut)),this.emojiTableOpen){let t=Kt(e);if(t!==null){e.preventDefault(),this.activeKeys.delete(e.code),this.emojiKeysDown.delete(e.code)&&this.eventBus.emit(new xn(t));return}}outerLoop:for(let t of this.keybindAndEvent)if(this.keybindMatchesEvent(e,t[0])){for(let n of t[1].conditions)if(!n(e))continue outerLoop;e.preventDefault(),t[1].handler(e)}this.activeKeys.delete(e.code),e.code===this.keybinds.boxSelectWarships&&!this.selectionBoxActive&&!this.multiSelectionActive&&(this.canvas.style.cursor=``)}},{signal:e})}onPointerDown(e){if(e.button===1){e.preventDefault(),this.eventBus.emit(new Pn(e.clientX,e.clientY));return}e.button>0||(this.pointerDown=!0,this.pointers.set(e.pointerId,e),this.pointers.size===1?(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY,this.eventBus.emit(new Qt(e.clientX,e.clientY)),e.pointerType===`touch`&&(this.longPressActive=!1,this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressTimer=setTimeout(()=>{this.longPressTimer=null,this.longPressActive=!0,this.canvas.style.cursor=`crosshair`,this.eventBus.emit(new gn(this.lastPointerDownX,this.lastPointerDownY))},this.LONG_PRESS_MS))):this.pointers.size===2&&(this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.longPressActive=!1,this.canvas.style.cursor=``),this.lastPinchDistance=this.getPinchDistance()))}isGameInputPassThrough(e){return e.composedPath?.().some(e=>e instanceof HTMLElement&&e.hasAttribute(`data-game-input-pass-through`))??!1}cancelPassThroughDrag(e){this.passThroughPointers.delete(e);let t=this.pointers.keys().next().value===e;if(this.pointers.delete(e)){if(this.pointerDown=this.pointers.size>0,this.pointerDown){if(t){let e=this.pointers.values().next().value;e&&(this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerDownX=e.clientX,this.lastPointerDownY=e.clientY)}this.lastPinchDistance=this.pointers.size>=2?this.getPinchDistance():0;return}this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressActive&&(this.canvas.style.cursor=``),this.longPressActive=!1,this.suppressNextTap=!1}}onPointerUp(e){if(e.button===1){e.preventDefault();return}if(e.button>0)return;if(this.passThroughPointers.has(e.pointerId)&&this.pointers.size>1){this.cancelPassThroughDrag(e.pointerId);return}if(this.passThroughPointers.delete(e.pointerId),!this.pointerDown||!this.pointers.has(e.pointerId))return;this.pointerDown=!1,this.pointers.clear(),this.longPressTimer!==null&&(clearTimeout(this.longPressTimer),this.longPressTimer=null);let t=this.longPressActive;if(this.longPressActive=!1,t&&(this.canvas.style.cursor=``,this.selectionBoxActive||(this.suppressNextTap=!0)),this.selectionBoxActive)if(this.selectionBoxActive=!1,Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY)>=this.DRAG_THRESHOLD_PX){this.eventBus.emit(new pn(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY));return}else this.eventBus.emit(new mn);if(p.isMac&&e.ctrlKey&&!this.gameView.inSpawnPhase()){this.suppressNextTap=!1;return}if(this.activeKeys.has(this.keybinds.buildMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new _n(e.clientX,e.clientY));return}if(this.activeKeys.has(this.keybinds.emojiMenuModifier)){this.suppressNextTap=!1,this.eventBus.emit(new vn(e.clientX,e.clientY));return}if(Math.abs(e.x-this.lastPointerDownX)+Math.abs(e.y-this.lastPointerDownY)<this.DRAG_THRESHOLD_PX){if(e.pointerType===`touch`){if(this.suppressNextTap){this.suppressNextTap=!1,e.preventDefault();return}this.eventBus.emit(new Xt(e.x,e.y)),e.preventDefault();return}!this.userSettings.leftClickOpensMenu()||e.shiftKey||this.gameView.inSpawnPhase()||this.uiState.ghostStructure!==null?this.eventBus.emit(new Jt(e.x,e.y)):this.eventBus.emit(new en(e.clientX,e.clientY))}}onScroll(e){if(!e.shiftKey){let t=this.activeKeys.has(`ControlLeft`)||this.activeKeys.has(`ControlRight`);if(e.ctrlKey){t||Math.abs(e.deltaY)<=10&&this.eventBus.emit(new tn(e.x,e.y,e.deltaY*10));return}if(Math.abs(e.deltaY)<2)return;this.eventBus.emit(new tn(e.x,e.y,e.deltaY))}}onGestureChange(e){if(this.lastGestureScale===null)return;let t=e.scale/this.lastGestureScale;if(!Number.isFinite(t)||t<=0||(this.lastGestureScale=e.scale,this.pointers.size>=2))return;let n=600*(1/t-1);n!==0&&this.eventBus.emit(new tn(e.clientX,e.clientY,n))}onShiftScroll(e){if(e.shiftKey){let t=e.deltaY===0?e.deltaX:e.deltaY,n=this.userSettings.attackRatioIncrement(),r=t>0?-n:n;this.eventBus.emit(new On(r))}}onPointerMove(e){if(e.button===1){e.preventDefault();return}if(e.button>0)return;if(!this.pointerDown){this.eventBus.emit(new Yt(e.clientX,e.clientY));return}if(!this.pointers.has(e.pointerId))return;let t=this.passThroughPointers.get(e.pointerId);if(t){Math.abs(e.clientX-t.x)+Math.abs(e.clientY-t.y)>=this.DRAG_THRESHOLD_PX&&this.cancelPassThroughDrag(e.pointerId);return}if(this.pointers.set(e.pointerId,e),this.pointers.size===1){let t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY;this.longPressTimer!==null&&Math.abs(e.clientX-this.lastPointerDownX)+Math.abs(e.clientY-this.lastPointerDownY)>=this.DRAG_THRESHOLD_PX&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.selectionBoxActive||this.activeKeys.has(this.keybinds.boxSelectWarships)||this.longPressActive?(this.selectionBoxActive=!0,this.eventBus.emit(new fn(this.lastPointerDownX,this.lastPointerDownY,e.clientX,e.clientY))):this.eventBus.emit(new nn(t,n)),this.lastPointerX=e.clientX,this.lastPointerY=e.clientY}else if(this.pointers.size===2){let e=this.getPinchDistance(),t=e-this.lastPinchDistance;if(Math.abs(t)>1){let n=this.getPinchCenter();this.eventBus.emit(new tn(n.x,n.y,-t*2)),this.lastPinchDistance=e}}}onContextMenu(e){if(e.preventDefault(),!this.gameView.inSpawnPhase()){if(this.uiState.ghostStructure!==null){this.setGhostStructure(null);return}if(this.unitSelectionActive){this.eventBus.emit(new Zt(null,!1));return}this.eventBus.emit(new en(e.clientX,e.clientY))}}setGhostStructure(e){this.uiState.ghostStructure===e&&e!==null?this.uiState.upgradeMultiplier=this.uiState.upgradeMultiplier===1?5:1:(this.uiState.upgradeMultiplier=1,this.uiState.ghostStructure=e)}parseKeybind(e){return e?.startsWith(`Shift+`)?{shift:!0,code:e.slice(6)}:{shift:!1,code:e}}keybindMatchesEvent(e,t){let n=this.parseKeybind(t);return e.code===n.code&&e.shiftKey===n.shift}digitFromKeyCode(e){return e?.length===6&&e.startsWith(`Digit`)&&/^[0-9]$/.test(e[5])?e[5]:e?.length===7&&e.startsWith(`Numpad`)&&/^[0-9]$/.test(e[6])?e[6]:null}buildKeybindMatchesDigit(e,t,n){let r=this.parseKeybind(n);if(t!==r.shift)return!1;let i=this.digitFromKeyCode(e),a=this.digitFromKeyCode(r.code);return i!==null&&a!==null&&i===a}resetGfxModifierHeld(e){return this.keybinds.altKey===`AltLeft`||this.keybinds.altKey===`AltRight`?e.altKey&&!e.ctrlKey:this.keybinds.altKey===`ControlLeft`||this.keybinds.altKey===`ControlRight`?e.ctrlKey:this.keybinds.altKey===`ShiftLeft`||this.keybinds.altKey===`ShiftRight`?e.shiftKey:this.keybinds.altKey===`MetaLeft`||this.keybinds.altKey===`MetaRight`?e.metaKey:this.activeKeys.has(this.keybinds.altKey)}addKeybindAndEvent(e,t,...n){let r={handler:t,conditions:n};this.keybindAndEvent.push([e,r])}resolveBuildKeybind(e,t){let n=[{key:`buildCity`,type:u.City},{key:`buildFactory`,type:u.Factory},{key:`buildOilField`,type:u.OilField},{key:`buildGasField`,type:u.GasField},{key:`buildUraniumPlant`,type:u.UraniumPlant},{key:`buildPort`,type:u.Port},{key:`buildDefensePost`,type:u.DefensePost},{key:`buildMissileSilo`,type:u.MissileSilo},{key:`buildArsenal`,type:u.Arsenal},{key:`buildMissileFactory`,type:u.MissileFactory},{key:`buildOilStorage`,type:u.OilStorage},{key:`buildGasStorage`,type:u.GasStorage},{key:`buildSamLauncher`,type:u.SAMLauncher},{key:`buildBallisticMissile`,type:u.BallisticMissile},{key:`buildAtomBomb`,type:u.AtomBomb},{key:`buildHydrogenBomb`,type:u.HydrogenBomb},{key:`buildWarship`,type:u.Warship},{key:`buildMIRV`,type:u.MIRV}];for(let{key:r,type:i}of n)if(this.keybindMatchesEvent({code:e,shiftKey:t},this.keybinds[r]))return i;for(let{key:r,type:i}of n)if(this.buildKeybindMatchesDigit(e,t,this.keybinds[r]))return i;return null}canUseBuildKeybinds(){let e=this.gameView.myPlayer?.();return!this.gameView.inSpawnPhase()&&e?.isAlive()===!0}getPinchDistance(){let e=Array.from(this.pointers.values()),t=e[0].clientX-e[1].clientX,n=e[0].clientY-e[1].clientY;return Math.sqrt(t*t+n*n)}getPinchCenter(){let e=Array.from(this.pointers.values());return{x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}}isTextInputTarget(e){let t=e;return t?typeof t.closest==`function`&&t.closest(`setting-keybind`)!==null||t.tagName===`TEXTAREA`||t.isContentEditable?!0:t.tagName===`INPUT`?t.type!==`range`:!1:!1}destroy(){this.moveInterval!==null&&(clearInterval(this.moveInterval),this.moveInterval=null),globalThis.removeEventListener(`${Oe}:${Te}`,this.onKeybindsChanged),this.listenerAbort?.abort(),this.listenerAbort=null,this.eventBus.off(bn,this.onEmojiTableVisible),this.eventBus.off(Zt,this.onUnitSelection),this.resetPointerState(),this.activeKeys.clear(),this.emojiTableOpen=!1,this.emojiKeysDown.clear(),this.keybindAndEvent=[],this.keybinds={}}},Rn=class{constructor(e,t){this.player=e,this.zoom=t}},zn=class{constructor(e,t){this.x=e,this.y=t}},Bn=class{constructor(e){this.unit=e}},Vn=.03,Hn=class{constructor(e,t,n){this.game=e,this.eventBus=t,this.canvas=n,this.scale=1.8,this.offsetX=-350,this.offsetY=-200,this.lastGoToCallTime=null,this.targetScale=null,this.intervalID=null,this.changed=!1,this._boundingRect=this.canvas.getBoundingClientRect(),this.eventBus.on(tn,e=>this.onZoom(e)),this.eventBus.on(nn,e=>this.onMove(e)),this.eventBus.on(Rn,e=>this.onGoToPlayer(e)),this.eventBus.on(zn,e=>this.onGoToPosition(e)),this.eventBus.on(Bn,e=>this.onGoToUnit(e)),this.eventBus.on(Nn,()=>this.centerCamera())}updateCanvasBoundingRect(){this._boundingRect=this.canvas.getBoundingClientRect()}boundingRect(){return this._boundingRect}width(){return this.boundingRect().width}hasChanged(){return this.changed}resetChanged(){this.changed=!1}handleTransform(e){e.imageSmoothingEnabled=!1,e.setTransform(this.scale,0,0,this.scale,this.game.width()/2-this.offsetX*this.scale,this.game.height()/2-this.offsetY*this.scale)}worldToCanvasCoordinates(e){let t=e.x,n=e.y,r=t-this.game.width()/2,i=n-this.game.height()/2;return{x:(r-this.offsetX)*this.scale+this.game.width()/2,y:(i-this.offsetY)*this.scale+this.game.height()/2}}worldToScreenCoordinates(e){let t=this.worldToCanvasCoordinates(e);return this.canvasToScreenCoordinates(t.x,t.y)}screenToWorldCoordinates(e,t){let n=this.screenToWorldCoordinatesFloat(e,t);return new a(Math.floor(n.x),Math.floor(n.y))}screenToWorldCoordinatesFloat(e,t){let n=this.screenToCanvasCoordinates(e,t);return{x:(n.x-this.game.width()/2)/this.scale+this.offsetX+this.game.width()/2,y:(n.y-this.game.height()/2)/this.scale+this.offsetY+this.game.height()/2}}canvasToScreenCoordinates(e,t){let n=this.boundingRect();return{x:e+n.left,y:t+n.top}}screenToCanvasCoordinates(e,t){let n=this.boundingRect();return{x:e-n.left,y:t-n.top}}screenBoundingRect(){let e=this.boundingRect(),t=e.width,n=e.height,r=-this.game.width()/2/this.scale+this.offsetX,i=-this.game.height()/2/this.scale+this.offsetY,o=r+this.game.width()/2,s=i+this.game.height()/2,c=(t-this.game.width()/2)/this.scale+this.offsetX,l=(n-this.game.height()/2)/this.scale+this.offsetY,u=c+this.game.width()/2,d=l+this.game.height()/2;return[new a(Math.floor(o),Math.floor(s)),new a(Math.floor(u),Math.floor(d))]}isOnScreen(e){let[t,n]=this.screenBoundingRect();return e.x>t.x&&e.x<n.x&&e.y>t.y&&e.y<n.y}screenCenter(){let[e,t]=this.screenBoundingRect();return{screenX:e.x+Math.floor((t.x-e.x)/2),screenY:e.y+Math.floor((t.y-e.y)/2)}}onGoToPlayer(e){this.clearTarget();let t=e.player.nameLocation();t&&(this.target=new a(t.x,t.y),this.targetScale=e.zoom??null,this.intervalID=setInterval(()=>this.goTo(),16))}onGoToPosition(e){this.clearTarget(),this.target=new a(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16)}onGoToUnit(e){this.clearTarget(),this.target=new a(this.game.x(e.unit.lastTile()),this.game.y(e.unit.lastTile())),this.intervalID=setInterval(()=>this.goTo(),16)}centerCamera(){this.clearTarget();let e=this.game.myPlayer()?.nameLocation();e&&(this.target=new a(e.x,e.y),this.intervalID=setInterval(()=>this.goTo(),16))}goTo(){let{screenX:e,screenY:t}=this.screenCenter();if(this.target===null)throw Error(`null target`);let n=Math.abs(this.target.x-e)+Math.abs(this.target.y-t)<2,r=this.targetScale===null||Math.abs(this.scale-this.targetScale)<.01;if(n&&r){this.clearTarget();return}let i,a=window.performance.now();i=this.lastGoToCallTime===null?16:a-this.lastGoToCallTime,this.lastGoToCallTime=a;let o=1-Vn**(i/1e3);if(this.offsetX+=Math.max(Math.min((this.target.x-e)*o,15),-15),this.offsetY+=Math.max(Math.min((this.target.y-t)*o,15),-15),this.targetScale!==null){let e=this.scale,t=1-.7**(i/1e3),n=this.targetScale-this.scale,r=n*t,a=Math.sign(n)*Math.min(Math.abs(n),6*i/1e3);this.scale+=Math.abs(r)>=Math.abs(a)?r:a;let{width:o,height:s}=this.boundingRect();this.offsetX+=(o-this.game.width())*(1/(2*e)-1/(2*this.scale)),this.offsetY+=(s-this.game.height())*(1/(2*e)-1/(2*this.scale))}this.changed=!0}onZoom(e){this.clearTarget();let t=this.scale,n=1+e.delta/600;this.scale/=n,this.scale=Math.max(.2,Math.min(20,this.scale));let r=this.screenToCanvasCoordinates(e.x,e.y),i=(r.x-this.game.width()/2)/t+this.offsetX,a=(r.y-this.game.height()/2)/t+this.offsetY;this.offsetX=i-(r.x-this.game.width()/2)/this.scale,this.offsetY=a-(r.y-this.game.height()/2)/this.scale,this.clampOffsets(),this.changed=!0}clampOffsets(){let e=this.boundingRect(),t=e.width,n=e.height,r=this.game.width(),i=this.game.height(),a=this.scale,o=-r/2+(r-t)/(2*a),s=r/2+(r-t)/(2*a),c=-i/2+(i-n)/(2*a),l=i/2+(i-n)/(2*a);this.offsetX<o?this.offsetX=o:this.offsetX>s&&(this.offsetX=s),this.offsetY<c?this.offsetY=c:this.offsetY>l&&(this.offsetY=l)}onMove(e){this.clearTarget(),this.offsetX-=e.deltaX/this.scale,this.offsetY-=e.deltaY/this.scale,this.clampOffsets(),this.changed=!0}clearTarget(){this.intervalID!==null&&(clearInterval(this.intervalID),this.intervalID=null),this.target=null,this.targetScale=null}override(e=0,t=0,n=1){this.clearTarget(),this.offsetX=e,this.offsetY=t,this.scale=n,this.changed=!0}centerAll(e=1){let t=this.boundingRect().width,n=this.boundingRect().height,r=this.game.width(),i=this.game.height(),a=t/r*e,o=n/i*e,s=Math.min(a,o),c=(r-t)/2/s,l=(i-n)/2/s;this.override(c,l,s)}},Un=6e4;function Wn(e){let t=()=>{try{let t=`${O.gameHttpBase(e)}/${O.gameWorkerPath(e)}/api/singleplayer/${e}/heartbeat`;fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({platform:ce()})}).catch(()=>{})}catch{}};t();let n=setInterval(t,Un);return()=>clearInterval(n)}var Gn=function(e){return e[e.slow=2]=`slow`,e[e.normal=1]=`normal`,e[e.fast=.5]=`fast`,e[e.fastest=0]=`fastest`,e}({}),Kn=[Gn.slow,Gn.normal,Gn.fast,Gn.fastest],qn=60,Jn=class{constructor(e,t,n){this.lobbyConfig=e,this.isReplay=t,this.eventBus=n,this.replayTurns=[],this.turns=[],this.intents=[],this.paused=!1,this.replaySpeedMultiplier=1,this.winner=null,this.allPlayersStats={},this.archived=!1,this.archiveInFlight=!1,this.turnsExecuted=0,this.turnStartTime=0,this.stopHeartbeat=null}updateCallback(e,t){this.clientConnect=e,this.clientMessage=t}start(){if(console.log(`local server starting`),this.turnCheckInterval=setInterval(()=>{let e=O.turnIntervalMs()*this.replaySpeedMultiplier,t=Math.max(0,this.turns.length-this.turnsExecuted),n=this.replaySpeedMultiplier===Gn.fastest&&this.lobbyConfig.gameRecord!==void 0?qn:0;(t===0||n>0&&t<n)&&Date.now()>this.turnStartTime+e&&(this.turnStartTime=Date.now(),this.endTurn())},5),this.eventBus.on(kn,e=>{this.replaySpeedMultiplier=e.replaySpeedMultiplier}),this.isReplay||(this.eventBus.on(jn,()=>{let e=Kn.indexOf(this.replaySpeedMultiplier);e<0||e>=Kn.length-1||(this.replaySpeedMultiplier=Kn[e+1],this.eventBus.emit(new kn(this.replaySpeedMultiplier)))}),this.eventBus.on(Mn,()=>{let e=Kn.indexOf(this.replaySpeedMultiplier);e<=0||(this.replaySpeedMultiplier=Kn[e-1],this.eventBus.emit(new kn(this.replaySpeedMultiplier)))})),this.startedAt=Date.now(),this.clientConnect(),this.lobbyConfig.gameRecord&&(this.replayTurns=de(this.lobbyConfig.gameRecord).turns),this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);if(this.clientID=this.lobbyConfig.gameStartInfo.players[0]?.clientID,!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:[],lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID}),this.isReplay||(this.stopHeartbeat=Wn(this.lobbyConfig.gameStartInfo.gameID))}onMessage(e){if(e.type===`rejoin`){if(!this.clientID)throw Error(`missing clientID`);this.clientMessage({type:`start`,gameStartInfo:this.lobbyConfig.gameStartInfo,turns:this.turns,lobbyCreatedAt:this.lobbyConfig.gameStartInfo.lobbyCreatedAt,myClientID:this.lobbyConfig.gameRecord?void 0:this.clientID})}if(e.type===`intent`){let t={...e.intent,clientID:this.clientID};if(t.type===`toggle_pause`){t.paused?(this.intents.push(t),this.endTurn(),this.paused=!0):(this.paused=!1,this.intents.push(t),this.endTurn());return}if(this.lobbyConfig.gameRecord||this.paused)return;this.intents.push(t)}if(e.type===`hash`){if(!this.lobbyConfig.gameRecord){if(e.turnNumber%100==0){let t=this.turns[e.turnNumber];t&&(t.hash=e.hash)}return}let t=this.replayTurns[e.turnNumber].hash;if(!t){console.warn(`no archived hash found for turn ${e.turnNumber}, client hash: ${e.hash}`);return}t===e.hash?console.log(`hash verified on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`):(console.error(`desync detected on turn ${e.turnNumber}, client hash: ${e.hash}, server hash: ${t}`),this.clientMessage({type:`desync`,turn:e.turnNumber,correctHash:t,clientsWithCorrectHash:0,totalActiveClients:1,yourHash:e.hash}))}e.type===`winner`&&(this.winner=e,this.allPlayersStats=e.allPlayersStats,this.isReplay||this.archiveGameRecord(!1))}turnComplete(){this.turnsExecuted++}endTurn(){if(this.paused)return;if(this.replayTurns.length>0){if(this.turns.length>=this.replayTurns.length){this.endGame();return}this.intents=this.replayTurns[this.turns.length].intents}let e={turnNumber:this.turns.length,intents:this.intents};this.turns.push(e),this.intents=[],this.clientMessage({type:`turn`,turn:e})}endGame(){console.log(`local server ending game`),clearInterval(this.turnCheckInterval),this.stopHeartbeat?.(),this.stopHeartbeat=null,!this.isReplay&&this.archiveGameRecord(!0)}archiveGameRecord(e){if(this.archived||this.archiveInFlight)return;let t=[{persistentID:fe(),username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,clientID:this.clientID,stats:this.allPlayersStats[this.clientID],cosmetics:this.lobbyConfig.gameStartInfo?.players[0].cosmetics}];if(this.lobbyConfig.gameStartInfo===void 0)throw Error(`missing gameStartInfo`);let n=ve(this.lobbyConfig.gameStartInfo.gameID,this.lobbyConfig.gameStartInfo.config,t,this.turns,this.startedAt,Date.now(),this.winner?.winner),r=T.safeParse(n);if(!r.success){let e=h(r.error);console.error(`Error parsing game record`,e);return}this.archiveGame(r.data,e)}async archiveGame(e,t){this.archiveInFlight=!0;try{let n=await xe();if(n===``)return;let r=await Yn(JSON.stringify({...e,gitCommit:O.gitCommit()},be)),i=await fetch(`${me()}/archive_singleplayer_game`,{method:`POST`,headers:{"Content-Type":`application/json`,"Content-Encoding":`gzip`,Authorization:n},body:r,keepalive:t});i.ok?this.archived=!0:console.error(`Failed to archive singleplayer game: ${i.status}`)}catch(e){console.warn(`Failed to archive singleplayer game:`,e)}finally{this.archiveInFlight=!1}}};async function Yn(e){let t=new CompressionStream(`gzip`),n=t.writable.getWriter(),r=t.readable.getReader();n.write(new TextEncoder().encode(e)),n.close();let i=[],a=!1;for(;!a;){let{value:e,done:t}=await r.read();a=t,e&&i.push(e)}let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(o),c=0;for(let e of i)s.set(e,c),c+=e.length;return s.buffer}var Xn=class{constructor(e){this.paused=e}},Zn=class{constructor(e,t){this.target=e,this.tile=t}},Qn=class{constructor(e,t){this.requestor=e,this.recipient=t}},$n=class{constructor(e,t){this.requestor=e,this.recipient=t}},er=class{constructor(e,t,n=1){this.unitId=e,this.unitType=t,this.amount=n}},tr=class{constructor(e){this.requestor=e}},nr=class{constructor(e){this.recipient=e}},rr=class{constructor(e){this.tile=e}},ir=class{constructor(e,t){this.targetID=e,this.troops=t}},ar=class{constructor(e,t){this.dst=e,this.troops=t}},or=class{constructor(e,t,n,r){this.unit=e,this.tile=t,this.rocketDirectionUp=n,this.amount=r}},sr=class{constructor(e){this.targetID=e}},cr=class{constructor(e,t){this.recipient=e,this.emoji=t}},lr=class{constructor(e,t){this.recipient=e,this.gold=t}},ur=class{constructor(e,t){this.recipient=e,this.troops=t}},dr=class{constructor(e,t,n,r,i){this.target=e,this.offeredResource=t,this.offeredAmount=n,this.requestedResource=r,this.requestedAmount=i}},fr=class{constructor(e,t){this.target=e,this.action=t}},pr=class{constructor(e,t,n){this.recipient=e,this.quickChatKey=t,this.target=n}},mr=class{constructor(e,t){this.target=e,this.action=t}},hr=class{constructor(e){this.action=e}},gr=class{constructor(e){this.unitId=e}},_r=class{constructor(e){this.attackID=e}},vr=class{constructor(e){this.unitID=e}},yr=class{constructor(e,t){this.winner=e,this.allPlayersStats=t}},br=class{constructor(e){this.stats=e}},xr=class{constructor(e,t){this.reported=e,this.reason=t}},Sr=class{constructor(e){this.reported=e}},Cr=class{constructor(e,t){this.tick=e,this.hash=t}},wr=class{constructor(e){this.gameID=e}},Tr=class{constructor(e,t){this.unitIds=e,this.tile=t}},Er=e=>`pool-redirect:${e}`,Dr=`pool-redirect-from`,Or=class e{static{this.RECONNECT_MAX_ATTEMPTS=10}static{this.RECONNECT_BASE_DELAY_MS=1e3}static{this.RECONNECT_MAX_DELAY_MS=15e3}constructor(e,t){this.lobbyConfig=e,this.eventBus=t,this.socket=null,this.buffer=[],this.pingInterval=null,this.reconnectTimeout=null,this.reconnectAttempts=0,this.connectionRefused=!1,this.isSessionReady=!1,this.zbinCtx=null,this.unsubscribers=[],this.isLocal=this.lobbyConfig.gameRecord!==void 0||this.lobbyConfig.gameStartInfo?.config.gameType===o.Singleplayer,this.subscribe(Qn,e=>this.onSendAllianceRequest(e)),this.subscribe(tr,e=>this.onAllianceRejectUIEvent(e)),this.subscribe(nr,e=>this.onSendAllianceExtensionIntent(e)),this.subscribe($n,e=>this.onBreakAllianceRequestUIEvent(e)),this.subscribe(rr,e=>this.onSendSpawnIntentEvent(e)),this.subscribe(ir,e=>this.onSendAttackIntent(e)),this.subscribe(er,e=>this.onSendUpgradeStructureIntent(e)),this.subscribe(ar,e=>this.onSendBoatAttackIntent(e)),this.subscribe(sr,e=>this.onSendTargetPlayerIntent(e)),this.subscribe(cr,e=>this.onSendEmojiIntent(e)),this.subscribe(lr,e=>this.onSendDonateGoldIntent(e)),this.subscribe(ur,e=>this.onSendDonateTroopIntent(e)),this.subscribe(dr,e=>this.onSendTradeOfferIntent(e)),this.subscribe(fr,e=>this.onRespondTradeOfferIntent(e)),this.subscribe(pr,e=>this.onSendQuickChatIntent(e)),this.subscribe(mr,e=>this.onSendEmbargoIntent(e)),this.subscribe(hr,e=>this.onSendEmbargoAllIntent(e)),this.subscribe(or,e=>this.onBuildUnitIntent(e)),this.subscribe(Xn,e=>this.onPauseGameIntent(e)),this.subscribe(yr,e=>this.onSendWinnerEvent(e)),this.subscribe(br,e=>this.onSendLiveStatsEvent(e)),this.subscribe(xr,e=>this.onSendPlayerReportEvent(e)),this.subscribe(Cr,e=>this.onSendHashEvent(e)),this.subscribe(_r,e=>this.onCancelAttackIntentEvent(e)),this.subscribe(vr,e=>this.onCancelBoatIntentEvent(e)),this.subscribe(Tr,e=>{this.onMoveWarshipEvent(e)}),this.subscribe(gr,e=>this.onSendDeleteUnitIntent(e)),this.subscribe(Ne,e=>this.onSendKickPlayerIntent(e)),this.subscribe(De,e=>this.onSendUpdateGameConfigIntent(e)),this.subscribe(ke,e=>this.onSendToggleGameStartTimer(e)),this.subscribe(Me,e=>{this.lobbyConfig.spectator=e.spectator,this.sendMsg({type:`spectate`,spectator:e.spectator})})}subscribe(e,t){this.eventBus.on(e,t),this.unsubscribers.push(()=>this.eventBus.off(e,t))}startPing(){this.isLocal||(this.pingInterval??=window.setInterval(()=>{this.socket!==null&&this.socket.readyState===WebSocket.OPEN&&this.sendMsg({type:`ping`,sentAt:Math.floor(performance.now())})},5*1e3))}stopPing(){this.pingInterval&&=(window.clearInterval(this.pingInterval),null)}connect(e,t){this.isLocal?this.connectLocal(e,t):this.connectRemote(e,t)}updateCallback(e,t){this.isLocal?this.localServer.updateCallback(e,t):(this.onconnect=e,this.onmessage=t)}connectLocal(e,t){this.localServer=new Jn(this.lobbyConfig,this.lobbyConfig.gameRecord!==void 0,this.eventBus),this.localServer.updateCallback(e,t),this.localServer.start()}connectRemote(e,t){if(this.connectionRefused)return;this.isSessionReady=!1,this.startPing(),this.killExistingSocket();let n;try{n=O.gameWorkerPath(this.lobbyConfig.gameID)}catch(e){if(!(e instanceof ee))throw e;console.warn(`No server for game`,this.lobbyConfig.gameID,e),this.handleConnectionRefused(he.Unknown);return}let r=new WebSocket(`${O.gameWsBase(this.lobbyConfig.gameID)}/${n}`);this.socket=r;let i=null;this.socket.binaryType=`arraybuffer`,this.onconnect=e,this.onmessage=t,this.socket.onopen=()=>{if(i=Date.now(),console.log(`Connected to game server!`),this.socket===null){console.error(`socket is null`);return}e()},this.socket.onmessage=e=>{this.reconnectAttempts=0,this.cancelReconnect();try{let t=je(new Uint8Array(e.data),this.zbinCtx??void 0);if(t.type===`redirect`){this.handlePoolRedirect(t.gameID);return}if(t.type===`start`&&(this.zbinCtx=_e(t.gameStartInfo.players)),t.type===`lobby_info`||t.type===`start`){let e=sessionStorage.getItem(Dr);e!==null&&(sessionStorage.removeItem(Er(e)),sessionStorage.removeItem(Dr))}this.isSessionReady=!0,this.flushBuffer(),this.onmessage(t)}catch(t){let n=e.data instanceof ArrayBuffer?`${e.data.byteLength} bytes`:typeof e.data;console.error(`Error in onmessage handler:`,t,`frame:`,n);return}},this.socket.onerror=()=>{this.socket!==null&&this.socket.close()},this.socket.onclose=e=>{this.isSessionReady=!1;let t=le(r.url,e,i);if(e.code===Ae.Normal)console.log(`Game socket ${t}`);else{let n=ye(e.code)?`not retrying`:`reconnecting`;console.warn(`Game socket ${t}; ${n}`)}if(ye(e.code)){e.code===Ae.Normal?(this.connectionRefused=!0,this.stopPing()):this.handleConnectionRefused(e.reason);return}this.scheduleReconnect()}}handlePoolRedirect(e){let t=this.lobbyConfig.gameID,n=Er(t);if(sessionStorage.getItem(n)!==null){this.handleConnectionRefused(he.PoolRedirect);return}sessionStorage.setItem(n,`1`),sessionStorage.setItem(Dr,t),window.location.href=O.gamePath(e)}handleConnectionRefused(e){if(this.connectionRefused)return;if(this.connectionRefused=!0,this.stopPing(),e===he.WrongWorker&&!ie()){let e=this.lobbyConfig.gameID,t=`wrong-worker-redirect:${e}`;if(sessionStorage.getItem(t)===null){sessionStorage.setItem(t,`1`),window.location.href=`${O.gameNavigateBase(e)}/game/${e}${window.location.search}`;return}}let t=ge(e)?e:he.Unknown;this.showTerminalDialog(F(`error_modal.connection_refused`,{reason:F(t)}))}showTerminalDialog(e){we(e,{variant:`warning`,confirmText:F(`win_modal.exit`),cancelText:F(`common.close`)}).then(e=>{e&&(window.location.href=_())})}reconnect(){if(this.isLocal){this.connect(this.onconnect,this.onmessage);return}this.scheduleReconnect()}scheduleReconnect(){if(this.connectionRefused||this.reconnectTimeout!==null||this.socket?.readyState===WebSocket.CONNECTING)return;if(this.reconnectAttempts>=e.RECONNECT_MAX_ATTEMPTS){console.warn(`giving up after ${this.reconnectAttempts} reconnect attempts`),this.connectionRefused=!0,this.stopPing(),this.showTerminalDialog(F(`error_modal.connection_lost`));return}this.reconnectAttempts++;let t=e.reconnectDelay(this.reconnectAttempts);console.log(`reconnect attempt ${this.reconnectAttempts}/${e.RECONNECT_MAX_ATTEMPTS} in ${t} ms`),this.reconnectTimeout=window.setTimeout(()=>{this.reconnectTimeout=null,this.connectRemote(this.onconnect,this.onmessage)},t)}static reconnectDelay(t){if(t<=1)return 0;let n=Math.min(e.RECONNECT_MAX_DELAY_MS,e.RECONNECT_BASE_DELAY_MS*2**(t-2));return Math.round(n*(.75+Math.random()*.5))}cancelReconnect(){this.reconnectTimeout!==null&&(window.clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null)}turnComplete(){this.isLocal&&this.localServer.turnComplete()}async joinGame(){let e=this.lobbyConfig.creatorToken??await Pe();delete this.lobbyConfig.creatorToken,this.sendMsg({type:`join`,gameID:this.lobbyConfig.gameID,username:this.lobbyConfig.playerName,clanTag:this.lobbyConfig.playerClanTag??null,cosmetics:this.lobbyConfig.cosmetics,turnstileToken:null,token:e,spectator:this.lobbyConfig.spectator,gitCommit:O.gitCommit(),platform:ce()})}async rejoinGame(e){this.sendMsg({type:`rejoin`,gameID:this.lobbyConfig.gameID,lastTurn:e,token:await Pe(),gitCommit:O.gitCommit()})}leaveGame(){for(let e of this.unsubscribers.splice(0))e();if(this.isLocal){this.localServer.endGame();return}this.connectionRefused=!0,this.stopPing(),this.cancelReconnect(),this.socket!==null&&(this.socket.readyState===WebSocket.OPEN?console.log(`on stop: leaving game`):console.log(`WebSocket is not open. Current state:`,this.socket.readyState),this.killExistingSocket())}onSendAllianceRequest(e){this.sendIntent({type:`allianceRequest`,recipient:e.recipient.id()})}onAllianceRejectUIEvent(e){this.sendIntent({type:`allianceReject`,requestor:e.requestor.id()})}onBreakAllianceRequestUIEvent(e){this.sendIntent({type:`breakAlliance`,recipient:e.recipient.id()})}onSendAllianceExtensionIntent(e){this.sendIntent({type:`allianceExtension`,recipient:e.recipient.id()})}onSendSpawnIntentEvent(e){this.sendIntent({type:`spawn`,tile:e.tile})}onSendAttackIntent(e){this.sendIntent({type:`attack`,targetID:e.targetID,troops:e.troops})}onSendBoatAttackIntent(e){this.sendIntent({type:`boat`,troops:e.troops,dst:e.dst})}onSendUpgradeStructureIntent(e){this.sendIntent({type:`upgrade_structure`,unit:e.unitType,unitId:e.unitId,amount:e.amount})}onSendTargetPlayerIntent(e){this.sendIntent({type:`targetPlayer`,target:e.targetID})}onSendEmojiIntent(e){this.sendIntent({type:`emoji`,recipient:e.recipient===`AllPlayers`?c:e.recipient.id(),emoji:e.emoji})}onSendDonateGoldIntent(e){this.sendIntent({type:`donate_gold`,recipient:e.recipient.id(),gold:e.gold?Number(e.gold):null})}onSendDonateTroopIntent(e){this.sendIntent({type:`donate_troops`,recipient:e.recipient.id(),troops:e.troops})}onSendTradeOfferIntent(e){this.sendIntent({type:`trade_offer`,recipient:e.target.id(),offeredResource:e.offeredResource,offeredAmount:e.offeredAmount,requestedResource:e.requestedResource,requestedAmount:e.requestedAmount})}onRespondTradeOfferIntent(e){this.sendIntent({type:`trade_offer_response`,target:e.target.id(),action:e.action})}onSendQuickChatIntent(e){this.sendIntent({type:`quick_chat`,recipient:e.recipient.id(),quickChatKey:e.quickChatKey,target:e.target})}onSendEmbargoIntent(e){this.sendIntent({type:`embargo`,targetID:e.target.id(),action:e.action})}onSendEmbargoAllIntent(e){this.sendIntent({type:`embargo_all`,action:e.action})}onBuildUnitIntent(e){this.sendIntent({type:`build_unit`,unit:e.unit,tile:e.tile,rocketDirectionUp:e.rocketDirectionUp,amount:e.amount})}onPauseGameIntent(e){this.sendIntent({type:`toggle_pause`,paused:e.paused})}onSendWinnerEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`winner`,winner:e.winner,allPlayersStats:e.allPlayersStats}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onSendLiveStatsEvent(e){(this.isLocal||this.socket?.readyState===WebSocket.OPEN)&&this.sendMsg({type:`live_stats`,stats:e.stats})}onSendPlayerReportEvent(e){if(!this.isLocal){if(this.socket?.readyState!==WebSocket.OPEN){console.log(`WebSocket is not open, dropping report. Current state:`,this.socket?.readyState);return}this.sendMsg({type:`report`,reported:e.reported,reason:e.reason}),this.eventBus.emit(new Sr(e.reported))}}onSendHashEvent(e){this.isLocal||this.socket?.readyState===WebSocket.OPEN?this.sendMsg({type:`hash`,turnNumber:e.tick,hash:e.hash}):console.log(`WebSocket is not open. Current state:`,this.socket?.readyState)}onCancelAttackIntentEvent(e){this.sendIntent({type:`cancel_attack`,attackID:e.attackID})}onCancelBoatIntentEvent(e){this.sendIntent({type:`cancel_boat`,unitID:e.unitID})}onMoveWarshipEvent(e){this.sendIntent({type:`move_warship`,unitIds:e.unitIds,tile:e.tile})}onSendDeleteUnitIntent(e){this.sendIntent({type:`delete_unit`,unitId:e.unitId})}onSendKickPlayerIntent(e){this.sendIntent({type:`kick_player`,targetClientID:e.target})}onSendUpdateGameConfigIntent(e){this.sendIntent({type:`update_game_config`,config:e.config})}onSendToggleGameStartTimer(e){this.sendIntent({type:`toggle_game_start_timer`})}sendIntent(e){let t={type:`intent`,intent:e};this.sendMsg(t)}flushBuffer(){if(!(this.socket===null||this.socket.readyState!==WebSocket.OPEN))for(;this.buffer.length>0;){console.log(`sending dropped message`);let e=this.buffer.shift();if(e===void 0){console.warn(`msg is undefined`);continue}this.socket.send(se(e,this.zbinCtx??void 0))}}sendMsg(e){if(this.connectionRefused)return;if(this.isLocal){this.localServer.onMessage(e);return}else if(this.socket===null)return;let t=e.type===`join`||e.type===`rejoin`||e.type===`ping`;this.socket.readyState===WebSocket.OPEN?!t&&(!this.isSessionReady||this.buffer.length>0)?this.buffer.push(e):this.socket.send(se(e,this.zbinCtx??void 0)):(console.warn(`socket not ready, buffering and reconnecting`),this.buffer.push(e),this.scheduleReconnect())}killExistingSocket(){if(this.isSessionReady=!1,this.socket!==null){this.socket.onmessage=null,this.socket.onopen=null,this.socket.onclose=null,this.socket.onerror=null;try{(this.socket.readyState===WebSocket.OPEN||this.socket.readyState===WebSocket.CONNECTING)&&this.socket.close()}catch(e){console.warn(`Error while closing WebSocket:`,e)}this.socket=null}}};async function kr(){let{default:e}=await oe(async()=>{let{default:e}=await import(`./Worker.worker-1VEEZewp.js`);return{default:e}},[],import.meta.url);return new e}var Ar=class{constructor(e,t,n){this.gameStartInfo=e,this.clientID=t,this.snapshotToRestore=n,this.worker=null,this.isInitialized=!1,this.messageHandlers=new Map}handleWorkerMessage(e){let t=e.data;switch(t.type){case`game_update`:this.gameUpdateCallback&&t.gameUpdate&&this.gameUpdateCallback(t.gameUpdate);break;case`game_update_batch`:if(this.gameUpdateCallback&&t.gameUpdates)for(let e of t.gameUpdates)this.gameUpdateCallback(e);break;case`game_error`:this.gameUpdateCallback&&t.error&&this.gameUpdateCallback(t.error);break;default:t.id&&this.messageHandlers.has(t.id)&&(this.messageHandlers.get(t.id)(t),this.messageHandlers.delete(t.id));break}}async initialize(){let{gameMap:e,gameMapSize:t}=this.gameStartInfo.config,n=kr(),r;try{r=await Se(ue,e,t)}catch(e){throw n.then(e=>e.terminate(),()=>{}),e}let i=await n;return this.worker=i,i.addEventListener(`message`,this.handleWorkerMessage.bind(this)),new Promise((e,t)=>{let n=pe();this.messageHandlers.set(n,n=>{n.type===`initialized`?(this.isInitialized=!0,e()):n.type===`init_error`&&(this.cleanup(),t(Error(n.error)))});let a={type:`init`,id:n,gameStartInfo:this.gameStartInfo,clientID:this.clientID,map:r,snapshot:this.snapshotToRestore};i.postMessage(a,Ce(r)),setTimeout(()=>{this.isInitialized||(this.cleanup(),t(Error(`Worker initialization timeout`)))},6e4)})}start(e){if(!this.isInitialized)throw Error(`Failed to initialize pathfinder`);this.gameUpdateCallback=e}sendTurn(e){if(!this.isInitialized)throw Error(`Worker not initialized`);this.worker.postMessage({type:`turn`,turn:e})}snapshot(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=pe();this.messageHandlers.set(r,e=>{e.type===`snapshot_result`&&(e.snapshot===null?n(Error(`Snapshot failed`)):t(e.snapshot))}),this.worker.postMessage({type:`snapshot`,id:r,gitCommit:e})})}playerProfile(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=pe();this.messageHandlers.set(r,e=>{e.type===`player_profile_result`&&e.result!==void 0&&t(e.result)}),this.worker.postMessage({type:`player_profile`,id:r,playerID:e})})}playerBorderTiles(e){return new Promise((t,n)=>{if(!this.isInitialized){n(Error(`Worker not initialized`));return}let r=pe();this.messageHandlers.set(r,e=>{e.type===`player_border_tiles_result`&&e.result!==void 0&&t(e.result)}),this.worker.postMessage({type:`player_border_tiles`,id:r,playerID:e})})}playerInteraction(e,t,n,r){return new Promise((i,a)=>{if(!this.isInitialized){a(Error(`Worker not initialized`));return}let o=pe(),s=e=>{clearTimeout(e),this.messageHandlers.delete(o)},c=setTimeout(()=>{s(c),console.warn(`player_actions request timed out (request ${o})`),a(Error(`player_actions request timed out`))},5e3);this.messageHandlers.set(o,e=>{e.type===`player_actions_result`?(s(c),i(e.result)):e.type===`player_actions_error`&&(s(c),a(Error(e.error)))}),this.worker.postMessage({type:`player_actions`,id:o,playerID:e,x:t,y:n,units:r})})}playerBuildables(e,t,n,r){return new Promise((i,a)=>{if(!this.isInitialized){a(Error(`Worker not initialized`));return}let o=pe();this.messageHandlers.set(o,e=>{e.type===`player_buildables_result`&&e.result!==void 0&&i(e.result)}),this.worker.postMessage({type:`player_buildables`,id:o,playerID:e,x:t,y:n,units:r})})}attackClusteredPositions(e,t){return new Promise((n,r)=>{if(!this.isInitialized){r(Error(`Worker not initialized`));return}let i=pe(),o=setTimeout(()=>{this.messageHandlers.delete(i),r(Error(`attack_clustered_positions request timed out`))},5e3);this.messageHandlers.set(i,e=>{if(clearTimeout(o),e.type!==`attack_clustered_positions_result`){r(Error(`Unexpected message type for attackClusteredPositions: ${e.type}`));return}n(e.attacks.map(e=>({id:e.id,positions:e.positions.map(e=>new a(e.x,e.y))})))}),this.worker.postMessage({type:`attack_clustered_positions`,id:i,playerID:e,attackID:t})})}transportShipSpawn(e,t){return new Promise((n,r)=>{if(!this.isInitialized){r(Error(`Worker not initialized`));return}let i=pe();this.messageHandlers.set(i,e=>{e.type===`transport_ship_spawn_result`&&e.result!==void 0&&n(e.result)}),this.worker.postMessage({type:`transport_ship_spawn`,id:i,playerID:e,targetTile:t})})}cleanup(){this.worker?.terminate(),this.messageHandlers.clear(),this.gameUpdateCallback=void 0}},jr=class{constructor(e,t,n,r,i,a,o){this.view=e,this.gameMap=t,this.userSettings=n,this.gameMapType=r,this.gameMapSize=i,this.mapLoader=a,this.abortSignal=o}init(){this.gameMap.layers?.length&&Mr(this.gameMapType,this.gameMapSize,this.mapLoader,this.gameMap.layers).then(e=>{this.abortSignal.aborted||(this.view.setMapLayers(this.gameMap.layers,e),this.applyVisibility(),this.applyAlpha())}).catch(e=>console.warn(`[MapLayerController] Failed to load layer images:`,e))}applyVisibility(){let e=this.userSettings.graphicsOverrides();if(!(!e.mapLayerVisibility||!this.gameMap.layers))for(let t of this.gameMap.layers){let n=e.mapLayerVisibility[t.id];n!==void 0&&this.view.setLayerVisible(t.id,n)}}applyAlpha(){let e=this.userSettings.graphicsOverrides();if(this.gameMap.layers)for(let t of this.gameMap.layers){let n=e.mapLayerAlpha?.[t.id];n===void 0?t.alpha!==void 0&&this.view.setLayerAlpha(t.id,t.alpha):this.view.setLayerAlpha(t.id,n)}}};async function Mr(e,t,n,i){let a=n.getMapData(e),o=await a.manifest(),s=new Map,c=t===r.Compact?o.map4x.width:void 0,l=t===r.Compact?o.map4x.height:void 0;return await Promise.all(i.map(async t=>{try{let e=await a.layerPng(t.id);c!==void 0&&l!==void 0&&(e=await createImageBitmap(e,{resizeWidth:c,resizeHeight:l,resizeQuality:`high`})),s.set(t.id,e)}catch(n){console.warn(`[MapLoader] Failed to load layer "${t.id}" for map ${e}: ${n}`)}})),s}function Nr(e,t,n){return t<=0?e:e+Math.floor(e*t*n/100)}var Pr=`#version 300 es
precision highp float;

uniform vec2 uBarSize;
uniform float uBorderWidth;
uniform vec3 uThresholds;
uniform vec3 uColorRed;
uniform vec3 uColorOrange;
uniform vec3 uColorYellow;
uniform vec3 uColorGreen;
uniform float uSolid;       // 1.0 = veterancy pip: fill solid with uSolidColor
uniform vec3 uSolidColor;

in vec2 vLocalPos;
flat in float vProgress;

out vec4 fragColor;

void main() {
  // Veterancy pips are simple solid-filled rectangles (no border/threshold).
  if (uSolid > 0.5) {
    fragColor = vec4(uSolidColor, 1.0);
    return;
  }

  float x = vLocalPos.x;
  float y = vLocalPos.y;
  float w = uBarSize.x;
  float h = uBarSize.y;

  // Border on each side
  float bw = uBorderWidth;
  bool inBorder = x < bw || x > w - bw || y < bw || y > h - bw;

  // Colored fill region
  float fillWidth = vProgress * (w - 2.0 * bw);
  bool inFill = !inBorder && (x - bw) < fillWidth;

  if (inFill) {
    vec3 color;
    if (vProgress < uThresholds.x) color = uColorRed;
    else if (vProgress < uThresholds.y) color = uColorOrange;
    else if (vProgress < uThresholds.z) color = uColorYellow;
    else color = uColorGreen;
    fragColor = vec4(color, 1.0);
  } else {
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
`,Fr=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;        // unit quad [0,1]x[0,1]
layout(location = 1) in vec3 aInstData;   // x, y, progress

uniform mat3 uCamera;
uniform vec2 uBarSize;     // (width, height) in world tiles
uniform vec2 uBarOffset;   // offset from unit center in tiles
uniform float uSolid;      // 1.0 = veterancy pip mode (aInstData.z is a stack slot)
uniform float uPipStride;  // vertical spacing between stacked pips, in tiles

out vec2 vLocalPos;        // [0, barWidth] x [0, barHeight]
flat out float vProgress;

void main() {
  float worldX = aInstData.x;
  float worldY = aInstData.y;
  vProgress = aInstData.z;

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  vec2 offset = uBarOffset;
  // In pip mode each instance is one stacked rank bar; raise it by its slot.
  offset.y -= uSolid * aInstData.z * uPipStride;
  vec2 barOrigin = center + offset;
  vec2 worldPos = barOrigin + aPos * uBarSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos * uBarSize;
}
`,H=3,Ir=H*4,Lr=class{constructor(e,t,n,r){this.config=r,this.maxBars=2048,this.healthCount=0,this.progressCount=0,this.veterancyCount=0,this.gl=e,this.settings=n,this.mapW=t.mapWidth,this.warshipMaxHealth=r.unitInfo(u.Warship).maxHealth??0,this.veterancyHealthBonus=r.warshipVeterancyHealthBonus(),this.program=V(e,Fr,Pr,`BarPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uBarSize=e.getUniformLocation(this.program,`uBarSize`),this.uBarOffset=e.getUniformLocation(this.program,`uBarOffset`),this.uBorderWidth=e.getUniformLocation(this.program,`uBorderWidth`),this.uThresholds=e.getUniformLocation(this.program,`uThresholds`),this.uColorRed=e.getUniformLocation(this.program,`uColorRed`),this.uColorOrange=e.getUniformLocation(this.program,`uColorOrange`),this.uColorYellow=e.getUniformLocation(this.program,`uColorYellow`),this.uColorGreen=e.getUniformLocation(this.program,`uColorGreen`),this.uSolid=e.getUniformLocation(this.program,`uSolid`),this.uSolidColor=e.getUniformLocation(this.program,`uSolidColor`),this.uPipStride=e.getUniformLocation(this.program,`uPipStride`),this.healthData=new Float32Array(this.maxBars*H),this.progressData=new Float32Array(this.maxBars*H),this.veterancyData=new Float32Array(this.maxBars*H),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.maxBars*Ir,e.DYNAMIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Ir,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateBars(e,t,n){this.healthCount=0,this.progressCount=0,this.veterancyCount=0;for(let t of e.values()){if(t.health===null||t.health<=0)continue;let e=Nr(this.warshipMaxHealth,t.veterancy,this.veterancyHealthBonus);t.health<e&&this.pushHealth(t,t.health/e),t.veterancy>0&&this.pushVeterancy(t)}for(let e of t.values()){if(!e.isActive)continue;let t=this.computeStructureProgress(e,n);t!==null&&this.pushProgress(e,t)}}draw(e){if(this.healthCount===0&&this.progressCount===0&&this.veterancyCount===0)return;let t=this.gl,n=this.settings.bar;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uSolid,0),t.uniform1f(this.uBorderWidth,n.borderWidth),t.uniform3f(this.uThresholds,n.threshold1,n.threshold2,n.threshold3),t.uniform3f(this.uColorRed,n.colorRedR,n.colorRedG,n.colorRedB),t.uniform3f(this.uColorOrange,n.colorOrangeR,n.colorOrangeG,n.colorOrangeB),t.uniform3f(this.uColorYellow,n.colorYellowR,n.colorYellowG,n.colorYellowB),t.uniform3f(this.uColorGreen,n.colorGreenR,n.colorGreenG,n.colorGreenB),t.bindVertexArray(this.vao),this.healthCount>0&&(t.uniform2f(this.uBarSize,n.healthBarW,n.healthBarH),t.uniform2f(this.uBarOffset,-n.healthBarW/2,n.healthBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.healthData.subarray(0,this.healthCount*H)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.healthCount)),this.progressCount>0&&(t.uniform2f(this.uBarSize,n.progressBarW,n.progressBarH),t.uniform2f(this.uBarOffset,-n.progressBarW/2,n.progressBarOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.progressData.subarray(0,this.progressCount*H)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.progressCount)),this.veterancyCount>0&&(t.uniform1f(this.uSolid,1),t.uniform3f(this.uSolidColor,n.veterancyR,n.veterancyG,n.veterancyB),t.uniform1f(this.uPipStride,n.veterancyPipH+n.veterancyPipGap),t.uniform2f(this.uBarSize,n.veterancyPipW,n.veterancyPipH),t.uniform2f(this.uBarOffset,n.veterancyPipOffsetX,n.veterancyPipOffsetY),t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferSubData(t.ARRAY_BUFFER,0,this.veterancyData.subarray(0,this.veterancyCount*H)),t.drawArraysInstanced(t.TRIANGLES,0,6,this.veterancyCount)),t.bindVertexArray(null)}dispose(){this.gl.deleteProgram(this.program),this.gl.deleteBuffer(this.instanceBuf),this.gl.deleteVertexArray(this.vao)}pushHealth(e,t){if(this.healthCount>=this.maxBars)return;let n=this.healthCount*H;this.healthData[n]=e.pos%this.mapW,this.healthData[n+1]=(e.pos-this.healthData[n])/this.mapW,this.healthData[n+2]=t,this.healthCount++}pushVeterancy(e){let t=e.pos%this.mapW,n=(e.pos-t)/this.mapW;for(let r=0;r<e.veterancy;r++){if(this.veterancyCount>=this.maxBars)return;let e=this.veterancyCount*H;this.veterancyData[e]=t,this.veterancyData[e+1]=n,this.veterancyData[e+2]=r,this.veterancyCount++}}pushProgress(e,t){if(this.progressCount>=this.maxBars)return;let n=this.progressCount*H,r=e.pos%this.mapW;this.progressData[n]=r,this.progressData[n+1]=(e.pos-r)/this.mapW,this.progressData[n+2]=t,this.progressCount++}computeStructureProgress(e,t){if(e.markedForDeletion!==!1){let n=e.markedForDeletion-t;return Math.max(0,Math.min(1,n/this.config.deletionMarkDuration()))}if(e.underConstruction&&e.constructionStartTick!==null){let n=this.config.unitInfo(e.unitType).constructionDuration??50,r=t-e.constructionStartTick;return Math.min(1,Math.max(0,r/n))}if(e.unitType===`Missile Silo`||e.unitType===`SAM Launcher`){let n=this.missileReadiness(e,t);if(n<1)return n}return null}missileReadiness(e,t){let n=e.level,r=e.missileTimerQueue.length;if(r===0)return 1;let i=n-r,a=e.unitType===`SAM Launcher`?this.config.SAMCooldown():this.config.SiloCooldown(),o=i/n;for(let r of e.missileTimerQueue){let e=t-r;o+=e/a/n}return Math.max(0,Math.min(1,o))}},Rr=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;   // R16UI — tile state per cell
uniform usampler2D uRelationTex; // R8UI — relationship matrix (ownerA × ownerB)
uniform vec2 uMapSize;
uniform uint uHighlightOwner;
uniform int uHighlightThicken; // Chebyshev radius for highlight expansion

out vec4 fragColor;

uint getOwner(ivec2 c) {
  if (c.x < 0 || c.y < 0 || c.x >= int(uMapSize.x) || c.y >= int(uMapSize.y))
    return 0u;
  return texelFetch(uTileTex, c, 0).r & uint(OWNER_MASK);
}

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // --- Border detection ---
  float borderType = 0.0; // 0=interior, ~0.5=normal border, ~1.0=highlight border
  uint maxRel = 0u;       // 0=neutral, 1=friendly, 2=embargo

  if (owner != 0u) {
    // Cardinal neighbor check (standard border)
    uint n = getOwner(tc + ivec2( 0, -1));
    uint s = getOwner(tc + ivec2( 0,  1));
    uint w = getOwner(tc + ivec2(-1,  0));
    uint e = getOwner(tc + ivec2( 1,  0));

    bool isBorder = (n != owner) || (s != owner) || (w != owner) || (e != owner);

    if (isBorder) {
      borderType = 0.5; // normal border

      // Relationship lookup for each cardinal neighbor with different owner
      if (n != owner && n != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, n), 0).r);
      if (s != owner && s != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, s), 0).r);
      if (w != owner && w != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, w), 0).r);
      if (e != owner && e != 0u) maxRel = max(maxRel, texelFetch(uRelationTex, ivec2(owner, e), 0).r);
    }

    // Highlight: N-tile Chebyshev expansion
    if (uHighlightOwner != 0u && owner == uHighlightOwner) {
      if (isBorder) {
        borderType = 1.0; // upgrade to highlight border
      } else {
        // Check expanding rings for any tile with different owner
        for (int d = 1; d <= 10; d++) {
          if (d > uHighlightThicken) break;
          bool found = false;
          // Check all tiles at Chebyshev distance d
          for (int i = -d; i <= d; i++) {
            // Top/bottom edges
            if (getOwner(tc + ivec2(i, -d)) != owner) { found = true; break; }
            if (getOwner(tc + ivec2(i,  d)) != owner) { found = true; break; }
          }
          if (!found) {
            for (int i = -d + 1; i <= d - 1; i++) {
              // Left/right edges (excluding corners already checked)
              if (getOwner(tc + ivec2(-d, i)) != owner) { found = true; break; }
              if (getOwner(tc + ivec2( d, i)) != owner) { found = true; break; }
            }
          }
          if (found) {
            borderType = 1.0; // highlight border
            break;
          }
        }
      }
    }
  }

  // A = relationship: 0.0=neutral, 0.5=friendly, 1.0=embargo
  float relation = float(maxRel) * 0.5;
  // G channel is unused (formerly emberIntensity; ember is now computed in
  // FalloutBloomPass and FalloutLightPass). B channel is unused (defense post
  // proximity is now computed per-tile by DefenseCoveragePass).
  fragColor = vec4(borderType, 0.0, 0.0, relation);
}
`,zr=`#version 300 es
layout(location = 0) in vec2 aPos;
void main() {
  gl_Position = vec4(aPos * 2.0 - 1.0, 0.0, 1.0);
}
`,Br=`#version 300 es
precision highp float;
precision highp int;

// Per-patch tile coord (integer in [0, mapW) × [0, mapH))
layout(location = 0) in vec2 aPos;

uniform vec2 uMapSize;

void main() {
  // Position the point at the center of the target pixel so a 1×1 point
  // rasterizes into exactly that texel. Same trick as TileScatterPass.
  vec2 ndc = ((aPos + 0.5) / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
  gl_PointSize = 1.0;
}
`,Vr=2,Hr=4096,Ur=class{constructor(e,t,n,r,i,a,o){this.highlightOwner=0,this.patchCount=0,this.patchCapacity=Hr,this.gpuCapacityBytes=0,this.gl=e,this.mapW=t,this.mapH=n,this.settings=o,this.tileTex=i,this.relationTex=a,this.program=V(e,Br,R(Rr,{...tt}),`BorderScatterPass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vbo=e.createBuffer(),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.vbo),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,Vr*4,0),e.bindVertexArray(null),this.patchData=new Float32Array(Hr*Vr)}push(e,t){this.patchCount>=this.patchCapacity&&this.grow();let n=this.patchCount*Vr;this.patchData[n]=e,this.patchData[n+1]=t,this.patchCount++}pushWithNeighbors(e,t,n,r){if(!(this.highlightOwner!==0&&(n===this.highlightOwner||r===this.highlightOwner))){this.push(e,t),e>0&&this.push(e-1,t),e<this.mapW-1&&this.push(e+1,t),t>0&&this.push(e,t-1),t<this.mapH-1&&this.push(e,t+1);return}let i=Math.max(1,Math.floor(this.settings.mapOverlay.highlightThicken)),a=Math.max(0,e-i),o=Math.min(this.mapW-1,e+i),s=Math.max(0,t-i),c=Math.min(this.mapH-1,t+i);for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)this.push(t,e)}get count(){return this.patchCount}clear(){this.patchCount=0}setHighlightOwner(e){this.highlightOwner=e}flush(){if(this.patchCount===0)return;let e=this.gl,t=this.patchCount*Vr,n=t*4,r=this.patchData.subarray(0,t);e.bindBuffer(e.ARRAY_BUFFER,this.vbo),n>this.gpuCapacityBytes?(e.bufferData(e.ARRAY_BUFFER,r,e.STREAM_DRAW),this.gpuCapacityBytes=n):e.bufferSubData(e.ARRAY_BUFFER,0,r);let i=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1ui(this.uHighlightOwner,this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(i.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.POINTS,0,this.patchCount),e.bindFramebuffer(e.FRAMEBUFFER,null),this.patchCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.vbo),e.deleteVertexArray(this.vao)}grow(){let e=this.patchCapacity*2,t=new Float32Array(e*Vr);t.set(this.patchData),this.patchData=t,this.patchCapacity=e}},Wr=1024,Gr=class{constructor(e,t,n,r,i){this.highlightOwner=0,this.globalDirty=!0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.program=V(e,zr,R(Rr,{...tt}),`BorderComputePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightOwner=e.getUniformLocation(this.program,`uHighlightOwner`),this.uHighlightThicken=e.getUniformLocation(this.program,`uHighlightThicken`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uRelationTex`),1),this.relationTex=B(e,{width:Wr,height:Wr,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderTex=B(e,{width:t,height:n,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.borderFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.borderTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.vao=ze(e),this._tileTex=r,this.scatter=new Ur(e,t,n,this.borderTex,r,this.relationTex,i)}setHighlightOwner(e){e!==this.highlightOwner&&(this.highlightOwner=e,this.scatter.setHighlightOwner(e),this.globalDirty=!0)}updateRelations(e,t){let n=this.gl,r=Math.min(t,Wr);n.bindTexture(n.TEXTURE_2D,this.relationTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,r,n.RED_INTEGER,n.UNSIGNED_BYTE,e),this.globalDirty=!0}markGlobalDirty(){this.globalDirty=!0}patchTile(e,t,n,r){if(!this.globalDirty){if(this.scatter.count>2048){this.globalDirty=!0,this.scatter.clear();return}this.scatter.pushWithNeighbors(e,t,n,r)}}getBorderTex(){return this.borderTex}draw(){if(this.globalDirty){this.globalDirty=!1,this.scatter.clear();let e=this.gl,t=this.settings.mapOverlay;e.bindFramebuffer(e.FRAMEBUFFER,this.borderFbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1ui(this.uHighlightOwner,this.highlightOwner),e.uniform1i(this.uHighlightThicken,Math.floor(t.highlightThicken)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this._tileTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.relationTex),e.bindVertexArray(this.vao),e.drawArrays(e.TRIANGLES,0,6)}else this.scatter.count>0&&this.scatter.flush()}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.borderTex),e.deleteTexture(this.relationTex),e.deleteFramebuffer(this.borderFbo),this.scatter.dispose()}},Kr=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform sampler2D uPalette;
uniform sampler2D uBorderTex;     // RGBA8 — border flags from BorderComputePass
uniform sampler2D uDefenseCoverageTex; // R8 — 1.0 = defended by same-owner post
uniform sampler2D uAffiliation;   // 256×2 RGBA8 — affiliation colors (row 0 = border)
uniform vec2 uMapSize;
uniform int uAltView;
uniform float uHighlightBrighten;
uniform float uDefenseCheckerDarken;
uniform float uEmbargoTintRatio;
uniform float uFriendlyTintRatio;
uniform vec3 uEmbargoTint;
uniform vec3 uFriendlyTint;

in vec2 vWorldPos;
out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(floor(vWorldPos));
  if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  uint owner = raw & uint(OWNER_MASK);

  // Read pre-computed border flags from BorderComputePass
  vec4 borderData = texelFetch(uBorderTex, tc, 0);
  float borderType = borderData.r;      // 0=interior, ~0.5=normal, ~1.0=highlight
  bool defense = texelFetch(uDefenseCoverageTex, tc, 0).r > 0.5; // same-owner defense post nearby
  float relation = borderData.a;        // 0.0=neutral, ~0.5=friendly, ~1.0=embargo

  bool isBorder = borderType > 0.25;
  bool isHighlightBorder = borderType > 0.75;

  // --- Border stamp: full-brightness border color ---
  if (isBorder && owner != 0u) {
    vec3 bc;
    if (uAltView != 0) {
      // Alt-view: pure affiliation color from palette row 0
      bc = texelFetch(uAffiliation, ivec2(int(owner), 0), 0).rgb;
    } else {
      float u = (float(owner) + 0.5) / float(PALETTE_SIZE);
      bc = texture(uPalette, vec2(u, 0.75)).rgb;
      if (isHighlightBorder) {
        bc = mix(bc, vec3(1.0), uHighlightBrighten);
      }
      // Relationship tint (applied BEFORE defense checkerboard, matching game)
      if (relation > 0.75) {
        bc = mix(bc, uEmbargoTint, uEmbargoTintRatio);
      } else if (relation > 0.25) {
        bc = mix(bc, uFriendlyTint, uFriendlyTintRatio);
      }
      // Defense bonus: checkerboard darken (applied AFTER tint, matching game)
      if (defense) {
        bool checker = ((tc.x + tc.y) & 1) == 1;
        if (checker) bc *= uDefenseCheckerDarken;
      }
    }
    fragColor = vec4(bc, 1.0);
    return;
  }

  discard;
}
`,qr=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
out vec2 vWorldPos;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vWorldPos = aPos;
}
`,Jr=class{constructor(e,t,n,r,i,a,o){this.defenseCoverageTex=null,this.affiliationTex=null,this.altView=!1,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.paletteTex=i,this.borderTex=a,this.program=V(e,qr,R(Kr,{PALETTE_SIZE:Xe(),...tt}),`BorderStampPass`),this.uCam=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uHighlightBrighten=e.getUniformLocation(this.program,`uHighlightBrighten`),this.uDefenseCheckerDarken=e.getUniformLocation(this.program,`uDefenseCheckerDarken`),this.uEmbargoTintRatio=e.getUniformLocation(this.program,`uEmbargoTintRatio`),this.uFriendlyTintRatio=e.getUniformLocation(this.program,`uFriendlyTintRatio`),this.uEmbargoTint=e.getUniformLocation(this.program,`uEmbargoTint`),this.uFriendlyTint=e.getUniformLocation(this.program,`uFriendlyTint`),this.uAltView=e.getUniformLocation(this.program,`uAltView`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.program,`uPalette`),1),e.uniform1i(e.getUniformLocation(this.program,`uBorderTex`),2),e.uniform1i(e.getUniformLocation(this.program,`uAffiliation`),3),e.uniform1i(e.getUniformLocation(this.program,`uDefenseCoverageTex`),4),this.vao=Ue(e,t,n)}setAltView(e){this.altView=e}setAffiliationTex(e){this.affiliationTex=e}setDefenseCoverageTex(e){this.defenseCoverageTex=e}draw(e){let t=this.gl,n=this.settings.mapOverlay;t.useProgram(this.program),t.uniformMatrix3fv(this.uCam,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uHighlightBrighten,n.highlightBrighten),t.uniform1f(this.uDefenseCheckerDarken,n.defenseCheckerDarken),t.uniform1f(this.uEmbargoTintRatio,n.embargoTintRatio),t.uniform1f(this.uFriendlyTintRatio,n.friendlyTintRatio),t.uniform3f(this.uEmbargoTint,n.embargoTintR,n.embargoTintG,n.embargoTintB),t.uniform3f(this.uFriendlyTint,n.friendlyTintR,n.friendlyTintG,n.friendlyTintB),t.uniform1i(this.uAltView,+!!this.altView),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.borderTex),this.affiliationTex&&(t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,this.affiliationTex)),this.defenseCoverageTex&&(t.activeTexture(t.TEXTURE4),t.bindTexture(t.TEXTURE_2D,this.defenseCoverageTex)),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Yr=`#version 300 es
precision highp float;

uniform vec2 uMapSize;
uniform float uCellSize;
uniform float uZoom;
uniform float uFontSize;
uniform sampler2D uGlyphTex;
uniform float uOpacity;

in vec2 vWorldPos;
out vec4 fragColor;

const float GLYPH_COUNT = 36.0;  // 0-9, A-Z

void main() {
  vec2 wp = vWorldPos;
  if (wp.x < 0.0 || wp.y < 0.0 || wp.x >= uMapSize.x || wp.y >= uMapSize.y)
    discard;

  float cs = uCellSize;
  float px = 1.0 / uZoom;       // 1 screen pixel in world units
  float lineW = px * 1.25;

  // Grid cell index + position within cell
  int cellCol = int(floor(wp.x / cs));
  int cellRow = int(floor(wp.y / cs));
  float localX = wp.x - float(cellCol) * cs;
  float localY = wp.y - float(cellRow) * cs;

  // --- Grid lines (at cell boundaries) ---
  if (localX < lineW || localY < lineW) {
    fragColor = vec4(1.0, 1.0, 1.0, uOpacity);
    return;
  }

  // --- Labels (only when cells are large enough on screen) ---
  float cellScreenPx = cs * uZoom;
  if (cellScreenPx < 60.0) discard;

  float fontSize = clamp(uFontSize + (uZoom - 1.0) * 1.2, uFontSize * 0.9, uFontSize * 1.6);
  float gw = fontSize * 0.6 * px;   // glyph width in world units
  float gh = fontSize * px;          // glyph height
  float pad = 8.0 * px;              // padding from cell corner

  float lx = localX - pad;
  float ly = localY - pad;

  // Compute label characters: row alpha + col digits
  // Atlas indices: 0-9 = digits '0'-'9', 10-35 = letters 'A'-'Z'
  int c0, c1 = -1, c2 = -1, c3 = -1;
  int nc;

  // Row part (A, B, ..., Z, AA, AB, ...)
  if (cellRow < 26) {
    c0 = cellRow + 10;
    nc = 1;
  } else {
    c0 = (cellRow / 26 - 1) + 10;
    c1 = (cellRow % 26) + 10;
    nc = 2;
  }

  // Col part (1-indexed: 1, 2, ..., 50)
  int colNum = cellCol + 1;
  if (nc == 1) {
    if (colNum < 10) { c1 = colNum; nc = 2; }
    else { c1 = colNum / 10; c2 = colNum % 10; nc = 3; }
  } else {
    if (colNum < 10) { c2 = colNum; nc = 3; }
    else { c2 = colNum / 10; c3 = colNum % 10; nc = 4; }
  }

  float totalW = float(nc) * gw;

  // Check if on actual glyph
  if (lx < 0.0 || ly < 0.0 || lx >= totalW || ly >= gh) {
    discard;
  }

  int ci = int(floor(lx / gw));
  if (ci < nc) {
    int g;
    if (ci == 0) g = c0;
    else if (ci == 1) g = c1;
    else if (ci == 2) g = c2;
    else g = c3;

    float cu = fract(lx / gw);
    float cv = ly / gh;
    float au = (float(g) + cu) / GLYPH_COUNT;
    vec4 gColor = texture(uGlyphTex, vec2(au, cv));
    fragColor = gColor.a * vec4(gColor.rgb, uOpacity);
    return;
  }
}
`,Xr=10,Zr=50,Qr=2,$r=24,ei=36,ti=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`,ni=class{constructor(e,t,n,r){this.gl=e,this.mapW=t,this.mapH=n,this.cellSize=ri(t,n),this.settings=r,this.glyphTex=this.createGlyphAtlas(),this.program=V(e,Qe,Yr,`CoordinateGridPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uCellSize=e.getUniformLocation(this.program,`uCellSize`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uOpacity=e.getUniformLocation(this.program,`uOpacity`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uGlyphTex`),0),this.vao=Ue(e,t,n)}draw(e,t){let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform2f(this.uMapSize,this.mapW,this.mapH),n.uniform1f(this.uCellSize,this.cellSize),n.uniform1f(this.uZoom,t),n.uniform1f(this.uFontSize,this.settings.altView.gridFontSize),n.uniform1f(this.uOpacity,this.settings.mapOverlay.coordinateGridOpacity),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.glyphTex),n.bindVertexArray(this.vao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphTex)}createGlyphAtlas(){let e=document.createElement(`canvas`);e.width=36*$r,e.height=ei;let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height),t.strokeStyle=`black`,t.lineWidth=4,t.fillStyle=`white`,t.font=`bold ${ei-8}px monospace`,t.textAlign=`center`,t.textBaseline=`middle`;for(let e=0;e<36;e++)t.strokeText(ti[e],e*$r+$r/2,ei/2),t.fillText(ti[e],e*$r+$r/2,ei/2);let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}};function ri(e,t){let n=Math.min(e,t)/Xr,r=Math.max(1,Math.round(t/n)),i=Math.max(1,Math.round(e/n));if(i>Zr){let n=Math.floor(Zr*t/e);r=Math.max(Qr,Math.min(r,n)),i=Zr}return Math.min(e/i,t/r)}var ii=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform vec3 uColor;
uniform float uIsDiagonal;
uniform float uAlpha;

uniform sampler2D uStatusAtlas;
uniform float uHasAtlas;

out vec4 fragColor;

const float LINE_HALF_W = 0.08; // line half-width (normalized to quad)
const float GAP = 0.15;         // center gap radius (normalized)
const float AA = 0.02;          // anti-alias width

const vec3 OUTLINE_BLACK = vec3(0.0);
const vec3 ALLIANCE_GREEN = vec3(0.0, 0.9, 0.2); // Official Alliance Green

// 8 unit directions for the outline dilation sample ring (matching status-icon.frag.glsl)
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (uIsDiagonal > 0.5) {
    // 1. Calculate Diagonal X with black outline
    float d1 = abs(vLocal.x - vLocal.y) * 0.7071;
    float d2 = abs(vLocal.x + vLocal.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.85, 0.98, length(vLocal));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.20, 0.30, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    vec3 xCol = mix(OUTLINE_BLACK, uColor, blend);
    float xAlpha = outlineAlpha;

    // 2. Alliance Handshake Icon with 8-ring dark outline (matching status-icon.frag.glsl)
    vec4 iconTexel = vec4(0.0);
    if (uHasAtlas > 0.5) {
      // Map vLocal [-1.10, +1.10] to icon UV [0, 1] (Y flipped for WebGL)
      vec2 iconUV = vec2(
        (vLocal.x / 1.50) + 0.5,
        1.0 - ((vLocal.y / 1.50) + 0.5)
      );

      if (iconUV.x >= 0.0 && iconUV.x <= 1.0 && iconUV.y >= 0.0 && iconUV.y <= 1.0) {
        // Handshake Icon UV in status-atlas.png (col 0, row 1, cell 256x256, 16px pad)
        // mix(16/768, 240/768, iconUV.x) and mix(272/1024, 496/1024, iconUV.y)
        vec2 atlasUV = vec2(
          mix(0.0208333, 0.3125, iconUV.x),
          mix(0.265625, 0.484375, iconUV.y)
        );
        iconTexel = texture(uStatusAtlas, atlasUV);

        // 8-ring dark outline dilation (matching status-icon.frag.glsl)
        float uStatusOutlinePx = 4.0; // 4px outline radius
        vec2 uStatusTexel = vec2(1.0 / 768.0, 1.0 / 1024.0);
        vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
        float ring = 0.0;
        for (int i = 0; i < 8; i++) {
          ring = max(ring, texture(uStatusAtlas, atlasUV + kRing[i] * sampleStep).a);
        }
        float outlineA = ring * (1.0 - iconTexel.a);
        iconTexel = vec4(mix(OUTLINE_BLACK, iconTexel.rgb, iconTexel.a), max(iconTexel.a, outlineA));
      }
    }

    // 3. Composite Alliance Handshake OVER the Red X reticle
    vec3 finalCol = mix(xCol, iconTexel.rgb, iconTexel.a);
    float finalAlpha = max(xAlpha, iconTexel.a);

    if (finalAlpha < 0.01) discard;
    fragColor = vec4(finalCol, finalAlpha * uAlpha);
  } else {
    float ax = abs(vLocal.x);
    float ay = abs(vLocal.y);

    // Horizontal arm: |y| < lineWidth, |x| > gap
    float hMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ay)
                * smoothstep(GAP - AA, GAP + AA, ax)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ax));

    // Vertical arm: |x| < lineWidth, |y| > gap
    float vMask = smoothstep(LINE_HALF_W + AA, LINE_HALF_W - AA, ax)
                * smoothstep(GAP - AA, GAP + AA, ay)
                * (1.0 - smoothstep(1.0 - AA, 1.0, ay));

    float mask = max(hMask, vMask);
    if (mask < 0.01) discard;

    fragColor = vec4(uColor, mask * 0.9);
  }
}
`,ai=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos; // [0,1] quad

uniform mat3 uCamera;
uniform vec2 uCenter;    // world tile coords
uniform float uHalfSize; // half-size in pixels (screen space)
uniform vec2 uViewport;  // canvas width, height in pixels

out vec2 vLocal; // [-1, +1]

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Project center to clip space
  vec3 clip = uCamera * vec3(uCenter + 0.5, 1.0);

  // Offset in screen pixels → NDC
  vec2 pixelToNDC = 2.0 / uViewport;
  gl_Position = vec4(clip.xy + vLocal * uHalfSize * pixelToNDC, 0.0, 1.0);
}
`,oi=I(`atlases/status-atlas.png`),si=20,ci=new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),li=class{constructor(e){this.statusAtlasTex=null,this.disposed=!1,this.active=!1,this.centerX=0,this.centerY=0,this.canBuild=!1,this.blockedXTile=null,this.gl=e,this.program=V(e,ai,ii,`CrosshairPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uViewport=e.getUniformLocation(this.program,`uViewport`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uIsDiagonal=e.getUniformLocation(this.program,`uIsDiagonal`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uStatusAtlas=e.getUniformLocation(this.program,`uStatusAtlas`),this.uHasAtlas=e.getUniformLocation(this.program,`uHasAtlas`);let t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{if(!this.gl||this.disposed)return;let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n},t.src=oi,this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,ci,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&(e.ghostType===`Warship`||e.ghostType===`MIRV`)?(this.active=!0,this.centerX=e.tileX,this.centerY=e.tileY,this.canBuild=e.canBuild||e.canUpgrade):this.active=!1}triggerBlockedFlash(e,t){this.blockedXTile={x:e,y:t,startTime:Date.now(),duration:600}}draw(e){let t=this.gl,n=Date.now();if(this.blockedXTile){let r=n-this.blockedXTile.startTime;if(r<this.blockedXTile.duration){let n=r/this.blockedXTile.duration,i=1-(1-n)*(1-n),a=this.blockedXTile.y-i*2,o=Math.max(0,1-i*i);t.useProgram(this.program),this.statusAtlasTex?(t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.statusAtlasTex),t.uniform1i(this.uStatusAtlas,1),t.uniform1f(this.uHasAtlas,1)):t.uniform1f(this.uHasAtlas,0),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.blockedXTile.x,a),t.uniform1f(this.uHalfSize,si*2.2),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform3f(this.uColor,1,.05,.05),t.uniform1f(this.uIsDiagonal,1),t.uniform1f(this.uAlpha,o),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6)}else this.blockedXTile=null}this.active&&(t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uHalfSize,si),t.uniform2f(this.uViewport,t.drawingBufferWidth,t.drawingBufferHeight),t.uniform1f(this.uIsDiagonal,0),t.uniform1f(this.uAlpha,1),this.canBuild?t.uniform3f(this.uColor,.9,.15,.15):t.uniform3f(this.uColor,.4,.1,.1),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6))}dispose(){this.disposed=!0;let e=this.gl;this.statusAtlasTex&&=(e.deleteTexture(this.statusAtlasTex),null),e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},ui=`#version 300 es
precision highp float;
precision highp usampler2D;

// Writes 1.0 into the coverage texture for every tile within \`uRange\` of the
// post being stamped AND owned by that post's owner. The texture is cleared to
// 0 first, so a tile no post touches stays 0. Overlapping circles from the same
// owner compose as a boolean union (1.0 over 1.0 is still 1.0 — no blending);
// circles from other owners discard at this tile and leave it untouched.

uniform usampler2D uTileTex;  // R16UI — tile state per cell
uniform vec2 uMapSize;
uniform float uRange;

flat in vec2 vPostCenter;
flat in float vOwner;

out vec4 fragColor;

void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  // Circle test in tile-integer space (matches the old per-fragment loop).
  float dx = float(tc.x) - vPostCenter.x;
  float dy = float(tc.y) - vPostCenter.y;
  if (dx * dx + dy * dy > uRange * uRange) discard;

  // Same-owner test: only the tile's own owner's posts defend it.
  uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
  if (owner != uint(vOwner)) discard;

  fragColor = vec4(1.0);
}
`,di=`#version 300 es
precision highp float;

// One instanced quad per defense post. The quad is a box centered on the post,
// sized to cover the post's range; the fragment shader trims it to a circle and
// filters by tile owner. See DefenseCoveragePass.

layout(location = 0) in vec2 aCorner;  // unit quad corner, [0,1]²
layout(location = 1) in vec3 aPost;     // (tileX, tileY, ownerID)

uniform vec2 uMapSize;
uniform float uRange;

flat out vec2 vPostCenter;
flat out float vOwner;

void main() {
  vPostCenter = aPost.xy;
  vOwner = aPost.z;

  // Box spanning [center - range, center + range] in tile coords, plus a
  // 1-tile margin so the boundary tiles at exactly \`range\` are rasterized
  // (their pixel centers sit just past the un-padded edge).
  vec2 tilePos = aPost.xy + (aCorner * 2.0 - 1.0) * (uRange + 1.0);

  // Tile-resolution FBO (viewport = map size), so map straight to clip space.
  vec2 ndc = (tilePos / uMapSize) * 2.0 - 1.0;
  gl_Position = vec4(ndc, 0.0, 1.0);
}
`,fi=3,pi=128,mi=class{constructor(e,t,n,r,i){this.count=0,this.fullDirty=!0,this.dirtyList=[],this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.blocksX=Math.ceil(t/pi),this.blocksY=Math.ceil(n/pi),this.dirtyBlock=new Uint8Array(this.blocksX*this.blocksY),this.fullFallback=Math.floor(this.blocksX*this.blocksY/2),this.program=V(e,di,R(ui,{OWNER_MASK:tt.OWNER_MASK}),`DefenseCoveragePass`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uRange=e.getUniformLocation(this.program,`uRange`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.coverageTex=B(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.coverageTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW);let a=e.createBuffer();this.instanceBuf=new ct(e,a,256,fi),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuf),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,a),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,fi*4,0),e.vertexAttribDivisor(1,1),e.bindVertexArray(null)}updateDefensePosts(e){this.count=e.length,this.instanceBuf.ensureCapacity(e.length);let t=this.instanceBuf.float32;for(let n=0;n<e.length;n++){let r=e[n],i=n*fi;t[i]=r.x,t[i+1]=r.y,t[i+2]=r.ownerID}if(e.length>0){let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf.buffer),t.bufferSubData(t.ARRAY_BUFFER,0,this.instanceBuf.float32,0,e.length*fi)}this.fullDirty=!0}markTileDirty(e,t){let n=e/pi|0,r=(t/pi|0)*this.blocksX+n;this.dirtyBlock[r]===0&&(this.dirtyBlock[r]=1,this.dirtyList.push(r))}markDirty(){this.fullDirty=!0}getCoverageTex(){return this.coverageTex}draw(){if(!this.fullDirty&&this.dirtyList.length===0)return;let e=this.gl;if(e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.viewport(0,0,this.mapW,this.mapH),e.disable(e.BLEND),e.clearColor(0,0,0,0),e.useProgram(this.program),e.uniform2f(this.uMapSize,this.mapW,this.mapH),e.uniform1f(this.uRange,this.settings.mapOverlay.defensePostRange),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.bindVertexArray(this.vao),this.fullDirty||this.dirtyList.length>this.fullFallback)e.disable(e.SCISSOR_TEST),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count);else{e.enable(e.SCISSOR_TEST);for(let t of this.dirtyList){let n=t%this.blocksX*pi,r=(t/this.blocksX|0)*pi,i=Math.min(pi,this.mapW-n),a=Math.min(pi,this.mapH-r);e.scissor(n,r,i,a),e.clear(e.COLOR_BUFFER_BIT),this.count>0&&e.drawArraysInstanced(e.TRIANGLES,0,6,this.count)}e.disable(e.SCISSOR_TEST)}for(let e of this.dirtyList)this.dirtyBlock[e]=0;this.dirtyList.length=0,this.fullDirty=!1,e.bindFramebuffer(e.FRAMEBUFFER,null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.coverageTex),e.deleteFramebuffer(this.fbo),e.deleteBuffer(this.quadBuf),e.deleteVertexArray(this.vao),this.instanceBuf.dispose()}},hi=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform float uBloomCoverage;
in vec2 vUV;
out vec4 fragColor;
void main() {
  vec4 bloom = texture(uTex, vUV);
  fragColor = bloom * uBloomCoverage;
}
`,gi=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;

uniform float uBroilSpeedCold;
uniform float uBroilSpeedHot;
uniform float uNoiseFreq1;
uniform float uNoiseFreq2;
uniform float uContrastLoCold;
uniform float uContrastLoHot;
uniform float uContrastHiCold;
uniform float uContrastHiHot;
uniform float uMetaFreq;
uniform float uIntensityCold;
uniform float uIntensityHot;
uniform float uMetaInfluenceCold;
uniform float uMetaInfluenceHot;
uniform float uOpacityFadeEnd;
uniform vec3 uBloomColor;
uniform vec3 uParticleColorDark;
uniform vec3 uParticleColorBright;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleStrength;
uniform float uParticleFreshScale;

uniform sampler2D uHeatTex;

out vec4 fragColor;

float hash3(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash3(i);
  float n100 = hash3(i + vec3(1, 0, 0));
  float n010 = hash3(i + vec3(0, 1, 0));
  float n110 = hash3(i + vec3(1, 1, 0));
  float n001 = hash3(i + vec3(0, 0, 1));
  float n101 = hash3(i + vec3(1, 0, 1));
  float n011 = hash3(i + vec3(0, 1, 1));
  float n111 = hash3(i + vec3(1, 1, 1));
  return mix(
    mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
    mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
    f.z);
}

void main() {
  // Bloom FBO is mapW/uTileScale × mapH/uTileScale; each output pixel maps
  // to the center tile of its uTileScale×uTileScale block. Still deterministic
  // and camera-independent — just sparser than 1:1.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  if ((raw & (1u << FALLOUT_BIT)) == 0u) discard;
  uint owner = raw & uint(OWNER_MASK);

  float heat = texelFetch(uHeatTex, tc, 0).r;
  vec2 tileCenter = vec2(tc) + 0.5;

  float speed = mix(uBroilSpeedCold, uBroilSpeedHot, heat);
  float t = uTick * speed;

  float n1 = vnoise3(vec3(tileCenter * uNoiseFreq1, t));
  float n2 = vnoise3(vec3(tileCenter * uNoiseFreq2, t * 1.3));
  float broil = n1 * 0.6 + n2 * 0.4;

  float lo = mix(uContrastLoCold, uContrastLoHot, heat);
  float hi = mix(uContrastHiCold, uContrastHiHot, heat);
  broil = smoothstep(lo, hi, broil);

  float meta = vnoise3(vec3(tileCenter * uMetaFreq, t * 0.5));

  float baseIntensity = mix(uIntensityCold, uIntensityHot, heat);
  float metaInfluence = mix(uMetaInfluenceCold, uMetaInfluenceHot, heat);
  float intensity = baseIntensity * mix(1.0, meta, metaInfluence);

  float opacity = smoothstep(0.0, uOpacityFadeEnd, heat);

  fragColor = vec4(uBloomColor, 1.0) * broil * intensity * opacity;

  // Particle dots — sharper per-tile flicker gated by a stochastic hash.
  // (Relocated here from BorderStampPass; this is fallout-domain logic.)
  float h1 = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
  float h2 = fract(sin(float(tc.x) * 63.7 + float(tc.y) * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    // Per-tile rate variation breaks the global rhythm so tiles don't all
    // pulse at the same frequency. h1 spans [0,1] → rate spans 0.4×–1.6× base.
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(uTick * tileRate + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    // Dampen when fresh (high heat); ramp to full as heat decays.
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade dots out with the glow. Heat decays to 0, but the fallout bit is
    // permanent on tiles that stay unowned, so without this the dots flicker
    // forever once the bloom is gone.
    flick *= opacity;
    vec3 pc = mix(uParticleColorDark, uParticleColorBright, h1) * flick * uParticleStrength;
    float pa = max(pc.r, max(pc.g, pc.b));
    fragColor += vec4(pc, pa);
  }
}
`,_i=`#version 300 es
precision highp float;
uniform sampler2D uTex;
uniform vec2 uDir;
in vec2 vUV;
out vec4 fragColor;
const float w[3] = float[3](0.375, 0.25, 0.0625);
void main() {
  vec4 result = texture(uTex, vUV) * w[0];
  for (int i = 1; i < 3; i++) {
    vec2 off = uDir * float(i);
    result += texture(uTex, vUV + off) * w[i];
    result += texture(uTex, vUV - off) * w[i];
  }
  fragColor = result;
}
`,vi=`#version 300 es
precision highp float;
// Camera-projected map quad -> tile-space UV. Shared by the bloom/glow
// composites so they sample an offscreen map-sized texture in world space.
layout(location = 0) in vec2 aPos;
uniform mat3 uCamera;
uniform vec2 uMapSize;
out vec2 vUV;
void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
  vUV = aPos / uMapSize;
}
`,yi=8,bi=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.extractProg=V(e,zr,R(gi,tt),`FalloutBloomPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),this.uExtractTick=e.getUniformLocation(this.extractProg,`uTick`),this.uExtractTileScale=e.getUniformLocation(this.extractProg,`uTileScale`),this.uBroilSpeedCold=e.getUniformLocation(this.extractProg,`uBroilSpeedCold`),this.uBroilSpeedHot=e.getUniformLocation(this.extractProg,`uBroilSpeedHot`),this.uNoiseFreq1=e.getUniformLocation(this.extractProg,`uNoiseFreq1`),this.uNoiseFreq2=e.getUniformLocation(this.extractProg,`uNoiseFreq2`),this.uContrastLoCold=e.getUniformLocation(this.extractProg,`uContrastLoCold`),this.uContrastLoHot=e.getUniformLocation(this.extractProg,`uContrastLoHot`),this.uContrastHiCold=e.getUniformLocation(this.extractProg,`uContrastHiCold`),this.uContrastHiHot=e.getUniformLocation(this.extractProg,`uContrastHiHot`),this.uMetaFreq=e.getUniformLocation(this.extractProg,`uMetaFreq`),this.uIntensityCold=e.getUniformLocation(this.extractProg,`uIntensityCold`),this.uIntensityHot=e.getUniformLocation(this.extractProg,`uIntensityHot`),this.uMetaInfluenceCold=e.getUniformLocation(this.extractProg,`uMetaInfluenceCold`),this.uMetaInfluenceHot=e.getUniformLocation(this.extractProg,`uMetaInfluenceHot`),this.uOpacityFadeEnd=e.getUniformLocation(this.extractProg,`uOpacityFadeEnd`),this.uBloomColor=e.getUniformLocation(this.extractProg,`uBloomColor`),this.uParticleColorDark=e.getUniformLocation(this.extractProg,`uParticleColorDark`),this.uParticleColorBright=e.getUniformLocation(this.extractProg,`uParticleColorBright`),this.uParticleThresholdUnowned=e.getUniformLocation(this.extractProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.extractProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.extractProg,`uParticleFlickerSpeed`),this.uParticleStrength=e.getUniformLocation(this.extractProg,`uParticleStrength`),this.uParticleFreshScale=e.getUniformLocation(this.extractProg,`uParticleFreshScale`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHeatTex`),1),this.blurProg=V(e,lt,_i,`FalloutBloomPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=V(e,vi,hi,`FalloutBloomPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uBloomCoverage=e.getUniformLocation(this.compositeProg,`uBloomCoverage`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.bloomW=Math.max(1,Math.floor(t/yi)),this.bloomH=Math.max(1,Math.floor(n/yi)),this.texA=this.createBloomTex(this.bloomW,this.bloomH),this.texB=this.createBloomTex(this.bloomW,this.bloomH),this.fboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texA,0),this.fboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.mapVao=Ue(e,t,n),this.quadVao=ze(e)}createBloomTex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t){let n=this.gl,r=n.canvas,i=r.width,a=r.height,o=this.mapW,s=this.mapH,c=this.bloomW,l=this.bloomH;n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,o,s),n.uniform1f(this.uExtractTick,t),n.uniform1f(this.uExtractTileScale,yi);let u=this.settings.falloutBloom;n.uniform1f(this.uBroilSpeedCold,u.broilSpeedCold),n.uniform1f(this.uBroilSpeedHot,u.broilSpeedHot),n.uniform1f(this.uNoiseFreq1,u.noiseFreq1),n.uniform1f(this.uNoiseFreq2,u.noiseFreq2),n.uniform1f(this.uContrastLoCold,u.contrastLoCold),n.uniform1f(this.uContrastLoHot,u.contrastLoHot),n.uniform1f(this.uContrastHiCold,u.contrastHiCold),n.uniform1f(this.uContrastHiHot,u.contrastHiHot),n.uniform1f(this.uMetaFreq,u.metaFreq),n.uniform1f(this.uIntensityCold,u.intensityCold),n.uniform1f(this.uIntensityHot,u.intensityHot),n.uniform1f(this.uMetaInfluenceCold,u.metaInfluenceCold),n.uniform1f(this.uMetaInfluenceHot,u.metaInfluenceHot),n.uniform1f(this.uOpacityFadeEnd,u.opacityFadeEnd),n.uniform3f(this.uBloomColor,u.bloomR,u.bloomG,u.bloomB),n.uniform3f(this.uParticleColorDark,u.particleColorDarkR,u.particleColorDarkG,u.particleColorDarkB),n.uniform3f(this.uParticleColorBright,u.particleColorBrightR,u.particleColorBrightG,u.particleColorBrightB),n.uniform1f(this.uParticleThresholdUnowned,u.particleThresholdUnowned),n.uniform1f(this.uParticleThresholdOwned,u.particleThresholdOwned),n.uniform1f(this.uParticleFlickerSpeed,u.particleFlickerSpeed),n.uniform1f(this.uParticleStrength,u.particleStrength),n.uniform1f(this.uParticleFreshScale,u.particleFreshScale),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.heatManager.getHeatTex()),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6),n.useProgram(this.blurProg),n.bindVertexArray(this.quadVao),n.bindFramebuffer(n.FRAMEBUFFER,this.fboB),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,1/c,0),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,this.fboA),n.viewport(0,0,c,l),n.clear(n.COLOR_BUFFER_BIT),n.uniform2f(this.uBlurDir,0,1/l),n.bindTexture(n.TEXTURE_2D,this.texB),n.drawArrays(n.TRIANGLES,0,6),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,i,a),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,o,s),n.uniform1f(this.uBloomCoverage,u.bloomCoverage),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.texA),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteFramebuffer(this.fboA),e.deleteFramebuffer(this.fboB),e.deleteTexture(this.texA),e.deleteTexture(this.texB),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},xi=`#version 300 es
precision highp float;
uniform sampler2D uTex;
in vec2 vUV;
out vec4 fragColor;
void main() {
  fragColor = texture(uTex, vUV);
}
`,Si=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform vec2 uMapSize;
uniform float uTick;
uniform float uTileScale;
uniform vec3 uFalloutLightColor;
uniform float uFalloutLightIntensity;
uniform float uFalloutLightThreshold;
uniform vec3 uEmberLightColor;
uniform float uEmberLightIntensity;
uniform float uParticleThresholdUnowned;
uniform float uParticleThresholdOwned;
uniform float uParticleFlickerSpeed;
uniform float uParticleFreshScale;
out vec4 fragColor;
void main() {
  // FBO is mapW/uTileScale × mapH/uTileScale; each output pixel samples one
  // tile near the center of its uTileScale×uTileScale source block.
  ivec2 tc = ivec2(gl_FragCoord.xy * uTileScale);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  uint raw = texelFetch(uTileTex, tc, 0).r;
  bool fallout = (raw & (1u << FALLOUT_BIT)) != 0u;
  if (!fallout) discard;

  uint owner = raw & uint(OWNER_MASK);
  float heat = texelFetch(uHeatTex, tc, 0).r;

  // Green fallout glow
  vec3 light = vec3(0.0);
  if (heat >= uFalloutLightThreshold) {
    float fi = heat * uFalloutLightIntensity;
    light += uFalloutLightColor * fi;
  }

  // Ember light — compute the same flicker as FalloutBloomPass.extract inline.
  float h1 = fract(sin(float(tc.x) * 12.9898 + float(tc.y) * 78.233) * 43758.5453);
  float h2 = fract(sin(float(tc.x) * 63.7 + float(tc.y) * 157.3) * 23421.631);
  float pThresh = (owner == 0u) ? uParticleThresholdUnowned : uParticleThresholdOwned;
  if (h2 > pThresh) {
    float tileRate = uParticleFlickerSpeed * (0.4 + h1 * 1.2);
    float flick = max(0.0, sin(uTick * tileRate + h1 * 12.0) * 0.8 + 0.2);
    flick *= flick;
    flick *= mix(uParticleFreshScale, 1.0, 1.0 - heat);
    // Fade embers out with the heat. The fallout bit is permanent on tiles
    // that stay unowned, so without this the ember light flickers forever
    // once the blast has cooled.
    flick *= heat;
    light += uEmberLightColor * flick * uEmberLightIntensity;
  }

  float a = max(light.r, max(light.g, light.b));
  if (a < 0.001) discard;
  fragColor = vec4(light, a);
}
`,Ci=8,wi=class{constructor(e,t,n,r,i,a){this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatManager=i,this.falloutLightProg=V(e,zr,R(Si,tt),`FalloutLightPass.falloutLightProg`),this.uFalloutMapSize=e.getUniformLocation(this.falloutLightProg,`uMapSize`),this.uFalloutLightColor=e.getUniformLocation(this.falloutLightProg,`uFalloutLightColor`),this.uFalloutLightIntensity=e.getUniformLocation(this.falloutLightProg,`uFalloutLightIntensity`),this.uFalloutLightThreshold=e.getUniformLocation(this.falloutLightProg,`uFalloutLightThreshold`),this.uEmberLightColor=e.getUniformLocation(this.falloutLightProg,`uEmberLightColor`),this.uEmberLightIntensity=e.getUniformLocation(this.falloutLightProg,`uEmberLightIntensity`),this.uFalloutTick=e.getUniformLocation(this.falloutLightProg,`uTick`),this.uFalloutTileScale=e.getUniformLocation(this.falloutLightProg,`uTileScale`),this.uParticleThresholdUnowned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdUnowned`),this.uParticleThresholdOwned=e.getUniformLocation(this.falloutLightProg,`uParticleThresholdOwned`),this.uParticleFlickerSpeed=e.getUniformLocation(this.falloutLightProg,`uParticleFlickerSpeed`),this.uParticleFreshScale=e.getUniformLocation(this.falloutLightProg,`uParticleFreshScale`),e.useProgram(this.falloutLightProg),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.falloutLightProg,`uTileTex`),1),this.falloutCompositeProg=V(e,vi,xi,`FalloutLightPass.falloutCompositeProg`),this.uFalloutCompositeCam=e.getUniformLocation(this.falloutCompositeProg,`uCamera`),this.uFalloutCompositeMapSize=e.getUniformLocation(this.falloutCompositeProg,`uMapSize`),e.useProgram(this.falloutCompositeProg),e.uniform1i(e.getUniformLocation(this.falloutCompositeProg,`uTex`),0),this.lightW=Math.max(1,Math.floor(t/Ci)),this.lightH=Math.max(1,Math.floor(n/Ci)),this.falloutTex=this.createRGBA8Tex(this.lightW,this.lightH),this.falloutFbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.falloutFbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.falloutTex,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=ze(e),this.mapQuadVao=Ue(e,t,n)}createRGBA8Tex(e,t){let n=this.gl,r=n.createTexture();return n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),r}draw(e,t,n,r,i){let a=this.gl,o=this.settings.lighting,s=this.settings.falloutBloom;a.bindFramebuffer(a.FRAMEBUFFER,this.falloutFbo),a.viewport(0,0,this.lightW,this.lightH),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND),a.useProgram(this.falloutLightProg),a.uniform2f(this.uFalloutMapSize,this.mapW,this.mapH),a.uniform1f(this.uFalloutTileScale,Ci),a.uniform3f(this.uFalloutLightColor,o.falloutLightR,o.falloutLightG,o.falloutLightB),a.uniform1f(this.uFalloutLightIntensity,o.falloutLightIntensity),a.uniform1f(this.uFalloutLightThreshold,o.falloutLightThreshold),a.uniform3f(this.uEmberLightColor,o.emberLightR,o.emberLightG,o.emberLightB),a.uniform1f(this.uEmberLightIntensity,o.emberLightIntensity),a.uniform1f(this.uFalloutTick,i),a.uniform1f(this.uParticleThresholdUnowned,s.particleThresholdUnowned),a.uniform1f(this.uParticleThresholdOwned,s.particleThresholdOwned),a.uniform1f(this.uParticleFlickerSpeed,s.particleFlickerSpeed),a.uniform1f(this.uParticleFreshScale,s.particleFreshScale),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.heatManager.getHeatTex()),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,this.tileTex),a.bindVertexArray(this.quadVao),a.drawArrays(a.TRIANGLES,0,6),a.bindFramebuffer(a.FRAMEBUFFER,t),a.viewport(0,0,n,r),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE),a.useProgram(this.falloutCompositeProg),a.uniformMatrix3fv(this.uFalloutCompositeCam,!1,e),a.uniform2f(this.uFalloutCompositeMapSize,this.mapW,this.mapH),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.falloutTex),a.bindVertexArray(this.mapQuadVao),a.drawArrays(a.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.falloutLightProg),e.deleteProgram(this.falloutCompositeProg),e.deleteFramebuffer(this.falloutFbo),e.deleteTexture(this.falloutTex),e.deleteVertexArray(this.quadVao),e.deleteVertexArray(this.mapQuadVao)}},Ti=class{constructor(e,t,n,r,i,a){this.lightW=0,this.lightH=0,this.gl=e,this.settings=a,this.mapW=t,this.mapH=n,this.pointLightPass=r,this.falloutLightPass=i,this.blurProg=V(e,lt,_i,`LightmapPass`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.lightTexA=this.createRGBA8Tex(),this.lightTexB=this.createRGBA8Tex(),this.lightFboA=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboA),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexA,0),this.lightFboB=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.lightFboB),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.lightTexB,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.quadVao=ze(e)}createRGBA8Tex(){let e=this.gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),t}ensureLightSize(e,t){if(e===this.lightW&&t===this.lightH)return;this.lightW=e,this.lightH=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.lightTexA),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindTexture(n.TEXTURE_2D,this.lightTexB),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}draw(e,t,n,r){let i=this.gl,a=Math.max(1,t>>1),o=Math.max(1,n>>1);this.ensureLightSize(a,o),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.ONE,i.ONE),this.pointLightPass.draw(e),this.settings.passEnabled.falloutLight&&this.falloutLightPass.draw(e,this.lightFboA,a,o,r);let s=Math.abs(e[0]),c=Math.max(this.mapW,this.mapH),l=Math.min(s*c/this.settings.lighting.blurZoomDivisor,1);i.disable(i.BLEND),i.useProgram(this.blurProg),i.bindVertexArray(this.quadVao);for(let e=0;e<2;e++)i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboB),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,l/a,0),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.lightTexA),i.drawArrays(i.TRIANGLES,0,6),i.bindFramebuffer(i.FRAMEBUFFER,this.lightFboA),i.viewport(0,0,a,o),i.clear(i.COLOR_BUFFER_BIT),i.uniform2f(this.uBlurDir,0,l/o),i.bindTexture(i.TEXTURE_2D,this.lightTexB),i.drawArrays(i.TRIANGLES,0,6);return this.lightTexA}dispose(){let e=this.gl;e.deleteProgram(this.blurProg),e.deleteFramebuffer(this.lightFboA),e.deleteFramebuffer(this.lightFboB),e.deleteTexture(this.lightTexA),e.deleteTexture(this.lightTexB),e.deleteVertexArray(this.quadVao)}},Ei=`#version 300 es
precision highp float;
precision highp usampler2D;

// Layer RGBA texture (PNG with transparency).
uniform sampler2D uLayerTex;

// Raw terrain bytes (R8UI): bit 7 = isLand.
uniform usampler2D uTerrainBytes;

// Per-tile destroyed mask (R8UI): 0 = intact, 1 = destroyed.
// Only sampled when uNukeable > 0.
uniform usampler2D uDestroyedMask;

// 0 = land layer (visible only on land tiles), 1 = water layer.
uniform int uPlacement;

// 0 = permanent, 1 = destroyed in nuke blast radius.
uniform int uNukeable;

// 0.0 = hidden (user toggle), 1.0 = visible.
uniform float uVisible;

// Per-layer alpha multiplier (0–1).  Manifest default × user slider.
uniform float uAlpha;

in vec2 vUV;
out vec4 fragColor;

void main() {
  // User toggle.
  if (uVisible < 0.5) discard;

  ivec2 tc = ivec2(
    int(vUV.x * float(MAP_W)),
    int(vUV.y * float(MAP_H))
  );
  tc = clamp(tc, ivec2(0), ivec2(MAP_W - 1, MAP_H - 1));

  // Land/water placement check: bit 7 of terrain byte = isLand.
  uint terrainByte = texelFetch(uTerrainBytes, tc, 0).r;
  bool isLand = (terrainByte & 0x80u) != 0u;

  if (uPlacement == 0 && !isLand) discard;  // land layer on water tile
  if (uPlacement == 1 && isLand) discard;   // water layer on land tile

  // Nukeable: skip destroyed tiles.
  if (uNukeable == 1) {
    uint destroyed = texelFetch(uDestroyedMask, tc, 0).r;
    if (destroyed > 0u) discard;
  }

  // Sample layer texture.
  vec4 layer = texture(uLayerTex, vUV);
  if (layer.a < 0.01) discard;

  fragColor = vec4(layer.rgb, layer.a * uAlpha);
}
`,Di=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;

out vec2 vUV;

void main() {
  vec3 clip = uCamera * vec3(aPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // aPos ranges [0, mapW] × [0, mapH] — normalize to [0,1] UV.
  vUV = aPos / vec2(float(MAP_W), float(MAP_H));
}
`,Oi=class{constructor(e,t,n,r,i,a,o){this.gl=e,this.terrainBytesTex=t,this.mapW=r,this.mapH=i,this.placement=a,this.nukeable=o,this._visible=!0,this._alpha=1,this.program=V(e,R(Di,{MAP_W:r,MAP_H:i}),R(Ei,{MAP_W:r,MAP_H:i}),`MapLayerPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uPlacement=e.getUniformLocation(this.program,`uPlacement`),this.uNukeable=e.getUniformLocation(this.program,`uNukeable`),this.uVisible=e.getUniformLocation(this.program,`uVisible`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uLayerTex=e.getUniformLocation(this.program,`uLayerTex`),this.uTerrainBytes=e.getUniformLocation(this.program,`uTerrainBytes`),this.uDestroyedMask=e.getUniformLocation(this.program,`uDestroyedMask`),this.layerTex=B(e,{width:n.width,height:n.height,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),e.bindTexture(e.TEXTURE_2D,this.layerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n),this.destroyedData=new Uint8Array(r*i),this.destroyedTex=B(e,{width:r,height:i,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:this.destroyedData,filter:e.NEAREST}),this.vao=Ue(e,r,i)}setVisible(e){this._visible=e}setAlpha(e){this._alpha=Math.max(0,Math.min(1,e))}updateDestroyedMask(e){if(e.length!==this.mapW*this.mapH)return;this.destroyedData.set(e);let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,0,0,this.mapW,this.mapH,t.RED_INTEGER,t.UNSIGNED_BYTE,this.destroyedData)}markTileDestroyed(e){if(e<0||e>=this.mapW*this.mapH||this.destroyedData[e]===1)return;this.destroyedData[e]=1;let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.pixelStorei(t.UNPACK_ALIGNMENT,1),t.texSubImage2D(t.TEXTURE_2D,0,e%this.mapW,Math.floor(e/this.mapW),1,1,t.RED_INTEGER,t.UNSIGNED_BYTE,new Uint8Array([1]))}markTilesDestroyed(e){let t=this.mapW,n=this.mapH,r=-1,i=-1,a=!1;for(let o of e){if(o<0||o>=this.mapW*this.mapH||this.destroyedData[o]===1)continue;this.destroyedData[o]=1;let e=o%this.mapW,s=(o-e)/this.mapW;e<t&&(t=e),e>r&&(r=e),s<n&&(n=s),s>i&&(i=s),a=!0}if(!a)return;let o=this.gl,s=r-t+1,c=i-n+1,l=new Uint8Array(s*c);for(let e=n;e<=i;e++){let r=e*this.mapW+t,i=(e-n)*s;l.set(this.destroyedData.subarray(r,r+s),i)}o.bindTexture(o.TEXTURE_2D,this.destroyedTex),o.pixelStorei(o.UNPACK_ALIGNMENT,1),o.texSubImage2D(o.TEXTURE_2D,0,t,n,s,c,o.RED_INTEGER,o.UNSIGNED_BYTE,l)}restoreFrom(e){let t=this.gl;t.deleteTexture(this.layerTex),this.layerTex=B(t,{width:e.width,height:e.height,internalFormat:t.RGBA8,format:t.RGBA,type:t.UNSIGNED_BYTE,data:null,filter:t.NEAREST}),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,e),t.deleteTexture(this.destroyedTex),this.destroyedTex=B(t,{width:this.mapW,height:this.mapH,internalFormat:t.R8UI,format:t.RED_INTEGER,type:t.UNSIGNED_BYTE,data:this.destroyedData,filter:t.NEAREST})}draw(e){let t=this.gl;t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.layerTex),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.terrainBytesTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.destroyedTex),t.uniform1i(this.uLayerTex,0),t.uniform1i(this.uTerrainBytes,1),t.uniform1i(this.uDestroyedMask,2),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1i(this.uPlacement,this.placement),t.uniform1i(this.uNukeable,+!!this.nukeable),t.uniform1f(this.uVisible,+!!this._visible),t.uniform1f(this.uAlpha,this._alpha),t.bindVertexArray(this.vao),t.drawArrays(t.TRIANGLES,0,6),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteTexture(this.layerTex),e.deleteTexture(this.destroyedTex),e.deleteVertexArray(this.vao)}},ki=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1] over ±HALF tiles

uniform float uElapsed;      // wall-clock ms since activation
uniform vec3  uColor;        // RGB [0-1]
uniform float uPxPerTile;    // camera zoom (pixels per tile)
uniform float uStartRadius;  // screen px
uniform float uChevronSize;  // screen px
uniform float uLineWidth;    // screen px
uniform float uDuration;     // ms
uniform float uConverge;     // 0–1

out vec4 fragColor;

const float HALF = 16.0; // quad half-size in tiles (must match vertex shader)

// SDF: distance to a V-chevron pointing in +Y, centered at origin.
// The chevron has wings at (±w, -wingOff) meeting tip at (0, +tipOff).
float chevronSDF(vec2 p, float w, float tipOff, float wingOff) {
  p.x = abs(p.x);
  vec2 a = vec2(w, -wingOff);
  vec2 b = vec2(0.0, tipOff);
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / dot(ab, ab), 0.0, 1.0);
  return length(p - a - ab * t);
}

void main() {
  float t = uElapsed / uDuration;
  if (t >= 1.0) discard;

  // Convert vLocal to screen pixels relative to center
  float px = vLocal.x * HALF * uPxPerTile;
  float py = vLocal.y * HALF * uPxPerTile;

  // Scale factor (matches game: grows above zoom 10)
  float sc = uPxPerTile > 10.0 ? 1.0 + (uPxPerTile - 10.0) / 10.0 : 1.0;

  float radius = uStartRadius * sc * (1.0 - t * uConverge);
  float cs = uChevronSize * sc;
  float tipOff = cs * 0.4;
  float wingOff = cs * 0.6;
  float w = cs; // wing half-width

  // 4 chevrons pointing inward
  float d = chevronSDF(vec2(px, -(py - radius)), w, tipOff, wingOff);
  d = min(d, chevronSDF(vec2(px, py + radius), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, -(px - radius)), w, tipOff, wingOff));
  d = min(d, chevronSDF(vec2(py, px + radius), w, tipOff, wingOff));

  // Anti-aliased stroke (in screen pixels)
  float half_w = uLineWidth * sc * 0.5;
  float aa = 1.0;
  float mask = 1.0 - smoothstep(half_w - aa, half_w + aa, d);

  if (mask < 0.01) discard;

  float alpha = 1.0 - t;
  fragColor = vec4(uColor, alpha * mask);
}
`,Ai=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter; // world-space tile center

out vec2 vLocal; // [-1, +1] local quad space

void main() {
  vLocal = aPos * 2.0 - 1.0;

  // Quad covers ±16 tiles around center (enough for the chevrons)
  float r = 16.0;
  vec2 world = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(world, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,ji=class{constructor(e,t){this.active=!1,this.centerX=0,this.centerY=0,this.colorR=1,this.colorG=0,this.colorB=0,this.startTime=0,this.gl=e,this.settings=t,this.program=V(e,Ai,ki,`MoveIndicatorPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uElapsed=e.getUniformLocation(this.program,`uElapsed`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.uPxPerTile=e.getUniformLocation(this.program,`uPxPerTile`),this.uStartRadius=e.getUniformLocation(this.program,`uStartRadius`),this.uChevronSize=e.getUniformLocation(this.program,`uChevronSize`),this.uLineWidth=e.getUniformLocation(this.program,`uLineWidth`),this.uDuration=e.getUniformLocation(this.program,`uDuration`),this.uConverge=e.getUniformLocation(this.program,`uConverge`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}show(e,t,n,r,i){this.active=!0,this.centerX=e,this.centerY=t,this.colorR=n,this.colorG=r,this.colorB=i,this.startTime=performance.now()}draw(e,t){if(!this.active)return;let n=this.settings.moveIndicator,r=performance.now()-this.startTime;if(r>=n.duration){this.active=!1;return}let i=this.gl;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform2f(this.uCenter,this.centerX,this.centerY),i.uniform1f(this.uElapsed,r),i.uniform3f(this.uColor,this.colorR,this.colorG,this.colorB),i.uniform1f(this.uPxPerTile,t),i.uniform1f(this.uStartRadius,n.startRadius),i.uniform1f(this.uChevronSize,n.chevronSize),i.uniform1f(this.uLineWidth,n.lineWidth),i.uniform1f(this.uDuration,n.duration),i.uniform1f(this.uConverge,n.converge),i.bindVertexArray(this.vao),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Mi={width:1280,height:768,cellSize:128,cols:10,emojis:{"😀":0,"😊":1,"🥰":2,"😇":3,"😎":4,"😞":5,"🥺":6,"😭":7,"😱":8,"😡":9,"😈":10,"🤡":11,"🥱":12,"🫡":13,"🖕":14,"👋":15,"👏":16,"✋":17,"🙏":18,"💪":19,"👍":20,"👎":21,"🫴":22,"🤌":23,"🤦‍♂️":24,"🤝":25,"🆘":26,"🕊️":27,"🏳️":28,"⌛":29,"🔥":30,"💥":31,"💀":32,"☢️":33,"⚠️":34,"↖️":35,"⬆️":36,"↗️":37,"👑":38,"🥇":39,"⬅️":40,"🎯":41,"➡️":42,"🥈":43,"🥉":44,"↙️":45,"⬇️":46,"↘️":47,"❤️":48,"💔":49,"💰":50,"⚓":51,"⛵":52,"🏡":53,"🛡️":54,"🏭":55,"🚂":56,"❓":57,"🐔":58,"🐀":59}},Ni=null,Pi=null;function Fi(){return Pi??=fetch(I(`atlases/msdf-atlas.json`)).then(e=>{if(!e.ok)throw Error(`Failed to fetch msdf-atlas.json: ${e.status}`);return e.json()}).then(e=>{Ni=e}),Pi}function Ii(){if(Ni===null)throw Error(`Atlas data not loaded; await preloadAtlasData() first`);return{fontSize:Ni.info.size,base:Ni.common.base,scaleW:Ni.common.scaleW,scaleH:Ni.common.scaleH,distanceRange:Ni.distanceField?.distanceRange??4,chars:Ni.chars,kernings:Ni.kernings??[]}}function Li(e){let t=new Float32Array(384),n=new Float32Array(384),r=new Float32Array(384);for(let i of e)i.id<384&&(t[i.id]=i.xadvance,n[i.id]=i.xoffset,r[i.id]=i.width);return{advance:t,xOffset:n,visW:r}}function Ri(e){let t=new Int8Array(384*384);for(let n of e)n.first<384&&n.second<384&&(t[n.first*384+n.second]=n.amount);return t}function zi(){let e=new Map,t=Mi;for(let[n,r]of Object.entries(t.emojis))e.set(n,r);return e}function Bi(e,t){let n=new Float32Array(384*2*4);for(let e of t.chars){if(e.id>=384)continue;let r=e.id*4;n[r+0]=e.xadvance,n[r+1]=e.xoffset,n[r+2]=e.yoffset,n[r+3]=e.width;let i=(384+e.id)*4;n[i+0]=e.height,n[i+1]=e.x/t.scaleW,n[i+2]=e.y/t.scaleH,n[i+3]=(e.x+e.width)/t.scaleW}return B(e,{width:384,height:2,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:n})}function Vi(e,t){let n=t*2;return B(e,{width:32,height:n,internalFormat:e.R32F,format:e.RED,type:e.FLOAT,data:new Float32Array(32*n)})}function Hi(e,t){let n=t*2;return B(e,{width:32,height:n,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:new Uint8Array(32*n)})}function Ui(e,t){return B(e,{width:9,height:t,internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT,data:new Float32Array(9*t*4)})}var Wi=`#version 300 es
precision highp float;

in vec2 vUV;
flat in int vBoxType;
flat in vec4 vColor;

out vec4 fragColor;

void main() {
  if (vColor.a <= 0.0) discard;

  if (vBoxType == 2) {
    // Center crosshair — draw a + shape, discard the four corner quadrants
    float cx = abs(vUV.x - 0.5);
    float cy = abs(vUV.y - 0.5);
    // Each arm is 0.15 wide (30% of half-width)
    if (cx > 0.15 && cy > 0.15) discard;
    fragColor = vColor;
  } else {
    // Wireframe border for name/flag boxes
    float borderWidth = 1.5;
    vec2 pixelSize = fwidth(vUV);
    vec2 border = borderWidth * pixelSize;

    if (vUV.x > border.x && vUV.x < 1.0 - border.x &&
        vUV.y > border.y && vUV.y < 1.0 - border.y) {
      discard;
    }
    fragColor = vColor;
  }
}
`,Gi=`#version 300 es
precision highp float;
precision highp int;

layout(location = 0) in vec2 aPos; // unit quad [0,0]→[1,1]

uniform sampler2D uPlayerData;
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uFontSize;
uniform float uFontBase;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;

// Flag layout (for computing flag box)
uniform float uFlagCellW;
uniform float uFlagCellH;

out vec2 vUV;
flat out int vBoxType; // 0=name, 1=flag, 2=center
flat out vec4 vColor;

void main() {
  // 3 debug boxes per player: 0=name, 1=flag, 2=center crosshair
  int playerIdx = gl_InstanceID / 3;
  int boxType   = gl_InstanceID - playerIdx * 3;

  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0);
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0);
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0);
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);

  // Skip dead players
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  // Lerped world position (same as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vBoxType = -1;
    vColor = vec4(0.0);
    return;
  }

  float nameHalfWidth = pd3.w;

  vec2 boxMin, boxMax;

  if (boxType == 0) {
    // Name text bounding box (green)
    float halfW = nameHalfWidth * nameWorldScale;
    float halfH = uFontBase * nameWorldScale * 0.5;
    boxMin = vec2(wx - halfW, wy - halfH);
    boxMax = vec2(wx + halfW, wy + halfH);
    vColor = vec4(0.0, 1.0, 0.0, 0.9);
  } else if (boxType == 1) {
    // Flag bounding box (yellow)
    float flagIdx = pd4.x;
    if (flagIdx < 0.0) {
      gl_Position = vec4(0.0);
      vUV = vec2(0.0);
      vBoxType = -1;
      vColor = vec4(0.0);
      return;
    }
    float halfW = nameHalfWidth * nameWorldScale;
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);
    boxMin = vec2(wx - halfW - flagWorldW, wy - flagWorldH * 0.5);
    boxMax = vec2(wx - halfW, wy + flagWorldH * 0.5);
    vColor = vec4(1.0, 1.0, 0.0, 0.9);
  } else {
    // Center crosshair (cyan) — fixed world size proportional to name
    float arm = uFontBase * nameWorldScale * 0.3;
    boxMin = vec2(wx - arm, wy - arm);
    boxMax = vec2(wx + arm, wy + arm);
    vColor = vec4(0.0, 1.0, 1.0, 1.0);
  }

  vUV = aPos;
  vBoxType = boxType;
  vec2 worldPos = mix(boxMin, boxMax, aPos);
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ki=128,qi=85,Ji=class{constructor(e,t,n,r){this.gl=e,this.playerDataTex=n,this.maxPlayers=r,this.program=V(e,Gi,Wi,`DebugProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),Ki),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),qi),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`)}draw(e,t,n){let r=this.gl,i=t.name;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,e),r.uniform1f(this.uTime,performance.now()/1e3),r.uniform1f(this.uLerpSpeed,i.lerpSpeed),r.uniform1f(this.uCullThreshold,i.cullThreshold),r.uniform1f(this.uNameScaleFactor,i.nameScaleFactor),r.uniform1f(this.uNameScaleCap,i.nameScaleCap),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,this.playerDataTex),r.bindVertexArray(n),r.drawArraysInstanced(r.TRIANGLES,0,6,this.maxPlayers*3)}dispose(){this.gl.deleteProgram(this.program)}},Yi=class{constructor(e,t,n=128,r=85,i=128){this.cellW=n,this.cellH=r,this.nextLayer=0,this.entries=new Map,this.gl=e,this.onLayerReady=t,this.hwMaxLayers=e.getParameter(e.MAX_ARRAY_TEXTURE_LAYERS),this.layerCount=Math.min(i,this.hwMaxLayers),this.tex=this.allocTexture(this.layerCount),this.canvas=document.createElement(`canvas`),this.canvas.width=this.cellW,this.canvas.height=this.cellH,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!1})}allocTexture(e){let t=this.gl,n=t.createTexture();return t.bindTexture(t.TEXTURE_2D_ARRAY,n),t.texStorage3D(t.TEXTURE_2D_ARRAY,Xi(this.cellW,this.cellH),t.RGBA8,this.cellW,this.cellH,e),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D_ARRAY,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),n}grow(){let e=Math.min(this.layerCount*2,this.hwMaxLayers);if(e<=this.layerCount)return!1;let t=this.gl,n=this.allocTexture(e),r=t.createFramebuffer();t.bindFramebuffer(t.READ_FRAMEBUFFER,r);for(let e=0;e<this.nextLayer;e++)t.framebufferTextureLayer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,this.tex,0,e),t.copyTexSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,e,0,0,this.cellW,this.cellH);return t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.deleteFramebuffer(r),t.generateMipmap(t.TEXTURE_2D_ARRAY),t.deleteTexture(this.tex),this.tex=n,this.layerCount=e,!0}get texture(){return this.tex}getLayer(e){let t=this.entries.get(e);return t&&t.ready?t.layer:-1}request(e){if(this.entries.has(e)||this.nextLayer>=this.layerCount&&!this.grow())return;let t=this.nextLayer++,n={layer:t,ready:!1};this.entries.set(e,n);let r=new Image;r.crossOrigin=`anonymous`,r.onload=()=>{this.ctx.clearRect(0,0,this.cellW,this.cellH);let i=r.width/r.height,a=this.cellW/this.cellH,o,s;i>a?(o=this.cellW,s=this.cellW/i):(s=this.cellH,o=this.cellH*i);let c=(this.cellW-o)*.5,l=(this.cellH-s)*.5;this.ctx.drawImage(r,c,l,o,s);let u=this.gl;u.bindTexture(u.TEXTURE_2D_ARRAY,this.tex),u.texSubImage3D(u.TEXTURE_2D_ARRAY,0,0,0,t,this.cellW,this.cellH,1,u.RGBA,u.UNSIGNED_BYTE,this.canvas),u.generateMipmap(u.TEXTURE_2D_ARRAY),n.ready=!0,this.onLayerReady(e,t)},r.onerror=()=>{console.warn(`Icon image failed to load:`,e)},r.src=e}dispose(){this.gl.deleteTexture(this.tex),this.entries.clear()}};function Xi(e,t){return Math.floor(Math.log2(Math.max(e,t)))+1}var Zi=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2DArray uFlagAtlas;
uniform sampler2D      uEmojiAtlas;
uniform float          uFlagAlpha;

in vec2 vUV;
flat in int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat in int vFlagLayer;
in float vHoverAlpha;

out vec4 fragColor;

void main() {
  if (vIconType < 0) discard;

  vec4 texel;
  if (vIconType == 0) {
    texel = texture(uFlagAtlas, vec3(vUV, float(vFlagLayer)));
    texel.a *= uFlagAlpha;
  } else {
    texel = texture(uEmojiAtlas, vUV);
  }

  if (texel.a < 0.01) discard;
  fragColor = vec4(texel.rgb, texel.a * vHoverAlpha);
}
`,Qi=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // PLAYER_DATA_COLS × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;        // atlas reference font size (same as name shader's uFontSize)
uniform float uFontBase;        // atlas baseline height (same as name shader's uBase)

// Flag cell shape (fixed, matches FlagAtlasArray cell size)
uniform float uFlagCellW;
uniform float uFlagCellH;

// Emoji atlas layout
uniform float uEmojiCell;    // texels per emoji cell (square)
uniform float uEmojiCols;    // columns in emoji atlas
uniform float uEmojiAtlasW;  // emoji atlas texture width
uniform float uEmojiAtlasH;  // emoji atlas texture height

// Row offset (multiples of uFontBase * nameWorldScale)
uniform float uEmojiRowOffset;

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
flat out int vIconType;  // 0 = flag, 1 = emoji, -1 = discard
flat out int vFlagLayer; // valid when vIconType == 0
out float vHoverAlpha;

void main() {
  // Decode instance ID → playerIdx + iconType (0=flag, 1=emoji)
  int playerIdx = gl_InstanceID / 2;
  int iconType  = gl_InstanceID - playerIdx * 2;

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, isHuman, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayer, emojiIdx, smallID, doomsday

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Get atlas/layer index for this icon type
  float atlasIdx = (iconType == 0) ? pd4.x : pd4.y;
  if (atlasIdx < 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' flag/emoji stay visible at any zoom, boosted in
  // lockstep with name.vert.glsl so the row stays aligned and centered.
  if (texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5 &&
      screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vIconType = -1;
    vFlagLayer = 0;
    vHoverAlpha = 1.0;
    return;
  }

  float nameHalfWidth = pd3.w; // in font units (pre-scaled by nameWorldScale at runtime)

  // Compute icon size and position based on type
  float iconW, iconH;
  vec2 iconOrigin;

  if (iconType == 0) {
    // FLAG — to the left of the name. Sampled from sampler2DArray; uses
    // plain [0,1] UVs and the layer is passed via vFlagLayer.
    float flagWorldH = uFontBase * nameWorldScale * 1.2;
    float flagWorldW = flagWorldH * (uFlagCellW / uFlagCellH);

    iconOrigin = vec2(
      wx - nameHalfWidth * nameWorldScale - flagWorldW,
      wy - flagWorldH * 0.5
    );
    iconW = flagWorldW;
    iconH = flagWorldH;

    vUV = aPos;
    vFlagLayer = int(atlasIdx);
  } else {
    // EMOJI — above the name. Sampled from a 2D atlas; compute grid UVs.
    float cellW  = uEmojiCell;
    float cellH  = uEmojiCell;
    float cols   = uEmojiCols;
    float atlasW = uEmojiAtlasW;
    float atlasH = uEmojiAtlasH;

    float emojiWorldSize = uFontBase * nameWorldScale * 1.1;

    // Read precomputed active status icon count from pd8.z (set by CPU, avoids
    // duplicating flag logic here and in status-icon.vert.glsl).
    vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0);
    int totalStatusActive = int(pd8.z);

    // Place emoji as rightmost slot in the combined group, or centered if alone.
    float gap = emojiWorldSize * 0.15;
    int totalItems = totalStatusActive + 1;
    float totalWidth = float(totalItems) * emojiWorldSize + float(totalItems - 1) * gap;
    float emojiX = wx - totalWidth * 0.5 + float(totalStatusActive) * (emojiWorldSize + gap);

    iconOrigin = vec2(emojiX, wy - uFontBase * nameWorldScale * uEmojiRowOffset);
    iconW = emojiWorldSize;
    iconH = emojiWorldSize;

    int idx = int(atlasIdx);
    int col = idx - (idx / int(cols)) * int(cols);
    int row = idx / int(cols);
    float u0 = float(col) * cellW / atlasW;
    float v0 = float(row) * cellH / atlasH;
    float u1 = u0 + cellW / atlasW;
    float v1 = v0 + cellH / atlasH;
    vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
    vFlagLayer = 0;
  }

  // Fade the icon along with the rest of the name plate when the cursor is
  // over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Quad world position
  vec2 worldPos = iconOrigin + aPos * vec2(iconW, iconH);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vIconType = iconType;
}
`,$i=I(`atlases/emoji-atlas.png`),ea=2,ta=class{constructor(e,t,n,r,i){this.emojiAtlasTex=null,this.emojiReady=!1,this.gl=e,this.playerDataTex=n,this.flagAtlas=r,this.maxPlayers=i,this.program=V(e,Qi,Zi,`IconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uFlagAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uEmojiAtlas`),2);let a=Mi;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellW`),128),e.uniform1f(e.getUniformLocation(this.program,`uFlagCellH`),85),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCell`),a.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uEmojiCols`),a.cols),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasW`),a.width),e.uniform1f(e.getUniformLocation(this.program,`uEmojiAtlasH`),a.height),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uEmojiRowOffset=e.getUniformLocation(this.program,`uEmojiRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uFlagAlpha=e.getUniformLocation(this.program,`uFlagAlpha`),this.loadEmojiAtlas()}get ready(){return this.emojiReady}loadEmojiAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.emojiAtlasTex=n,this.emojiReady=!0},t.src=$i}draw(e,t,n,r){if(!this.emojiReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uEmojiRowOffset,a.emojiRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uFlagAlpha,a.flagAlpha),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D_ARRAY,this.flagAtlas.texture),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,this.emojiAtlasTex),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*ea)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.emojiAtlasTex&&e.deleteTexture(this.emojiAtlasTex)}},na={width:768,height:1024,cellSize:256,cols:3,pad:16,icons:{crown:0,traitor:1,disconnected:2,alliance:3,allianceRequest:4,target:5,embargo:6,nukeRed:7,nukeWhite:8,allianceFaded:9,doomsdayClock:10,verified:11}},ra=`#version 300 es
precision highp float;
precision highp sampler2DArray;

uniform sampler2D uStatusAtlas;
uniform sampler2DArray uCrownAtlas; // crown-cosmetic images (skins slot 0)
uniform vec2 uStatusTexel;     // 1/atlasW, 1/atlasH
uniform float uStatusOutlinePx; // outline radius in atlas texels (0 = off)

in vec2 vUV;
in vec2 vLocalUV;
flat in int vCrownLayer;
flat in int vDiscard;
flat in float vAllianceFraction;
flat in vec2 vFadedUV0;
flat in vec2 vFadedUV1;
flat in float vFlashAlpha;
flat in float vOutline;          // 1.0 = draw a dark outline behind this icon
flat in float vDecay;            // 1.0 = tint this icon red (decaying skull)
in float vHoverAlpha;

out vec4 fragColor;

// 8 unit directions for the outline dilation sample ring.
const vec2 kRing[8] = vec2[8](
  vec2(1.0, 0.0), vec2(-1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, -1.0),
  vec2(0.707, 0.707), vec2(-0.707, 0.707),
  vec2(0.707, -0.707), vec2(-0.707, -0.707)
);

void main() {
  if (vDiscard != 0) discard;

  // A crown cosmetic replaces the default first-place crown icon. Only slot 0
  // ever carries a layer, and its quad has no outline margin, so vLocalUV is
  // plain [0,1] over the icon.
  vec4 texel = (vCrownLayer >= 0)
    ? texture(uCrownAtlas, vec3(vLocalUV, float(vCrownLayer)))
    : texture(uStatusAtlas, vUV);

  // Alliance drain: composite faded icon behind colored icon, clipped by fraction.
  // Matches the game's CSS clip-path: inset(topCut% -2px 0 -2px) behavior.
  if (vAllianceFraction > 0.0) {
    // Game formula: topCut = 20 + (1-fraction) * 80 * 0.78  (% → 0..1)
    float topCut = 0.20 + (1.0 - vAllianceFraction) * 0.624;

    // Sample faded icon at corresponding local position
    vec2 fadedUV = mix(vFadedUV0, vFadedUV1, vLocalUV);
    vec4 fadedTexel = texture(uStatusAtlas, fadedUV);

    // Above the cut line → show faded; below → show colored
    texel = vLocalUV.y < topCut ? fadedTexel : texel;
  }

  // Decaying skull: tint red, keeping some luminance so its shading still reads.
  if (vDecay > 0.5) {
    float lum = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
    texel.rgb = vec3(0.90, 0.10, 0.10) * (0.55 + 0.45 * lum);
  }

  // Traitor flash + hover fade: modulate alpha
  float fade = vFlashAlpha * vHoverAlpha;
  texel.a *= fade;

  // Dark outline: dilate the icon's alpha so it stays legible over terrain of a
  // similar color (the green alliance icon vs. irradiated land). Sampling the
  // padded atlas cell never reaches a neighbouring icon.
  if (vOutline > 0.5 && uStatusOutlinePx > 0.0) {
    float ring = 0.0;
    vec2 sampleStep = uStatusTexel * uStatusOutlinePx;
    for (int i = 0; i < 8; i++) {
      ring = max(ring, texture(uStatusAtlas, vUV + kRing[i] * sampleStep).a);
    }
    ring *= fade;
    float outlineA = ring * (1.0 - texel.a);
    texel = vec4(mix(vec3(0.0), texel.rgb, texel.a), max(texel.a, outlineA));
  }

  if (texel.a < 0.01) discard;
  fragColor = texel;
}
`,ia=`#version 300 es
precision highp float;
precision highp int;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures (shared with name shader)
uniform sampler2D uPlayerData; // 8 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uFontSize;
uniform float uFontBase;

// Status atlas layout
uniform float uStatusCell;   // texels per cell (square)
uniform float uStatusCols;   // columns in atlas
uniform float uStatusAtlasW; // atlas texture width
uniform float uStatusAtlasH; // atlas texture height
uniform float uStatusPad;    // transparent padding in texels per side
uniform float uStatusOutlinePx; // dark-outline radius in atlas texels (0 = off)

// Configurable layout
uniform float uStatusRowOffset;  // row Y offset (multiples of uFontBase * nameWorldScale)

uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate
uniform float uAllianceFlashWindowSec; // seconds before expiry the alliance icon flashes (= renewal prompt offset)

out vec2 vUV;
out vec2 vLocalUV;               // 0..1 within the icon cell
flat out int vCrownLayer;        // crown-cosmetic atlas layer for slot 0, or -1
flat out int vDiscard;
flat out float vAllianceFraction; // 0 = no drain effect, >0 = active drain
flat out vec2 vFadedUV0;         // top-left UV of faded alliance cell
flat out vec2 vFadedUV1;         // bottom-right UV of faded alliance cell
flat out float vFlashAlpha;      // traitor flash opacity (1.0 = fully visible)
flat out float vOutline;         // 1.0 = alliance icon, draw a dark outline
flat out float vDecay;           // 1.0 = doomsday skull is DECAYING -> tint red
out float vHoverAlpha;

// Status flag float array — indexed by icon slot.
// Slot mapping: 0=crown, 1=traitor, 2=disconnected, 3=alliance,
//               4=allianceReq, 5=target, 6=embargo, 7=nukeActive, 8=doomsdayClock
float statusFlag[9];

// Read status flags from pd4.w/pd5/pd6 into the statusFlag array.
void readStatusFlags(int playerIdx) {
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0);
  vec4 pd5 = texelFetch(uPlayerData, ivec2(5, playerIdx), 0);
  vec4 pd6 = texelFetch(uPlayerData, ivec2(6, playerIdx), 0);
  statusFlag[0] = pd5.x; // crown
  statusFlag[1] = pd5.y; // traitor
  statusFlag[2] = pd5.z; // disconnected
  statusFlag[3] = pd5.w; // alliance
  statusFlag[4] = pd6.x; // allianceReq
  statusFlag[5] = pd6.y; // target
  statusFlag[6] = pd6.z; // embargo
  statusFlag[7] = pd6.w; // nukeActive
  statusFlag[8] = pd4.w; // doomsdayClock
}

// Count active icons with index < pos.
int countBelow(int pos) {
  int count = 0;
  for (int i = 0; i < pos; i++) {
    if (statusFlag[i] > 0.5) count++;
  }
  return count;
}

// Compute padded UV rect for an atlas cell.
// Returns (u0, v0) in xy and (u1, v1) in zw, inset by pad pixels.
vec4 cellUV(int idx) {
  int col = idx - (idx / int(uStatusCols)) * int(uStatusCols);
  int row = idx / int(uStatusCols);
  float u0 = (float(col) * uStatusCell + uStatusPad) / uStatusAtlasW;
  float v0 = (float(row) * uStatusCell + uStatusPad) / uStatusAtlasH;
  float iconSize = uStatusCell - 2.0 * uStatusPad;
  float u1 = u0 + iconSize / uStatusAtlasW;
  float v1 = v0 + iconSize / uStatusAtlasH;
  return vec4(u0, v0, u1, v1);
}

void main() {
  // Decode instance ID → playerIdx + iconSlot (0..8 status row, 9 = verified
  // badge to the right of the name)
  int playerIdx = gl_InstanceID / 10;
  int iconSlot  = gl_InstanceID - playerIdx * 10;
  bool isVerifiedSlot = (iconSlot == 9);

  // Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagIdx, emojiIdx, smallID, [free]
  vec4 pd7 = texelFetch(uPlayerData, ivec2(7, playerIdx), 0); // nukeTargetsMe, traitorRemainingTicks, allianceFraction, allianceRemainingTicks
  vec4 pd8 = texelFetch(uPlayerData, ivec2(8, playerIdx), 0); // crownLayer, verified, [free]

  // A crown cosmetic skins the first-place crown (slot 0).
  vCrownLayer = (iconSlot == 0 && pd8.x >= 0.0) ? int(pd8.x) : -1;

  vDecay = 0.0; // only the decaying doomsday skull raises this

  // Early out: dead player only (emoji no longer hides status icons)
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Read status flags into array
  readStatusFlags(playerIdx);

  // Early out: this icon slot is inactive. The verified badge (slot 9) is
  // driven by pd8.y, not the status-row flag array.
  bool slotActive = isVerifiedSlot ? (pd8.y > 0.5) : (statusFlag[iconSlot] > 0.5);
  if (!slotActive) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Lerped world position and size (same math as name.vert.glsl)
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // Sizing pipeline (must match name.vert.glsl exactly)
  float baseSize      = max(1.0, floor(ws));
  float nameSize      = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale     = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;

  // Zoom-based culling (same as name shader)
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize  = nameWorldScale * uFontBase * cameraScale;
  // Targeted players' icons (incl. the crosshair) stay visible at any zoom,
  // boosted in lockstep with name.vert.glsl so the layout stays aligned.
  if (statusFlag[5] > 0.5 && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vLocalUV = vec2(0.0);
    vDiscard = 1;
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
    vFlashAlpha = 1.0;
    vOutline = 0.0;
    vHoverAlpha = 1.0;
    return;
  }

  // Icon world size: matches name text height
  float iconWorldSize = uFontBase * nameWorldScale * 1.1;

  float iconX;
  float iconY;
  if (isVerifiedSlot) {
    // Verified badge: small mark tucked against the name's top-right corner,
    // like a superscript. The name line spans wy +- 0.5 * lineHeight; the
    // badge is raised so its lower half overlaps the line's top edge.
    float lineHeight = uFontBase * nameWorldScale;
    iconWorldSize = lineHeight * 0.55;
    iconX = wx + pd3.w * nameWorldScale - lineHeight * 0.04;
    iconY = wy - lineHeight * 0.5 - iconWorldSize * 0.5;
  } else {
    // Count active status icons and position of this one (left-to-right).
    // If an emoji is also active it occupies one extra slot on the right,
    // so include it in the total for centering purposes.
    // totalActive is precomputed by the CPU into pd8.z — single source of truth.
    int totalActive = int(pd8.z);
    bool hasEmoji = (pd4.y >= 0.0);
    int totalItems = totalActive + (hasEmoji ? 1 : 0);
    int myIndex = countBelow(iconSlot);

    // Horizontal centering: treat status icons + emoji as one group.
    float gap = iconWorldSize * 0.15;
    float totalWidth = float(totalItems) * iconWorldSize + float(totalItems - 1) * gap;
    float startX = wx - totalWidth * 0.5;
    iconX = startX + float(myIndex) * (iconWorldSize + gap);

    // Position: same row as the emoji
    iconY = wy - uFontBase * nameWorldScale * uStatusRowOffset;
  }

  // Determine atlas index
  // Slots 0-6 map directly to atlas indices 0-6
  // Slot 7 (nuke): use nukeRed (7) if nukeTargetsMe, else nukeWhite (8)
  int atlasIdx = iconSlot;
  if (iconSlot == 7) {
    atlasIdx = (pd7.x > 0.5) ? 7 : 8;
  }
  if (iconSlot == 8) {
    atlasIdx = 10; // doomsday-clock skull
  }
  if (isVerifiedSlot) {
    atlasIdx = 11; // blue verified check
  }

  // Only the alliance icon (slot 3) gets the dark outline.
  vOutline = (iconSlot == 3) ? 1.0 : 0.0;

  // Fade the status row along with the rest of the name plate when the cursor
  // is over any part of it. Hit test runs on the CPU (NamePass).
  vHoverAlpha = (uFadeOwnerID > 0.0 && pd4.z == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // Dark-outline margin: grow the alliance icon's quad outward into the cell's
  // transparent padding so the outline halo isn't clipped at the quad edge.
  // The icon content keeps its size; only the quad's bounding box grows. Other
  // icons keep marginWorld = 0 and render pixel-identically.
  float iconTexels = uStatusCell - 2.0 * uStatusPad;
  float marginTex = (vOutline > 0.5 && uStatusOutlinePx > 0.0)
    ? min(uStatusPad - 2.0, uStatusOutlinePx + 2.0)
    : 0.0;
  float marginWorld = marginTex * (iconWorldSize / iconTexels);

  // Quad world position (expanded by the outline margin, centred on the icon)
  vec2 iconOrigin = vec2(iconX, iconY) - vec2(marginWorld);
  float quadSize = iconWorldSize + 2.0 * marginWorld;
  vec2 worldPos = iconOrigin + aPos * vec2(quadSize, quadSize);

  // Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // vLocalUV in icon-content space: 0..1 over the icon, <0/>1 in the outline
  // margin. This keeps the drain math below unchanged and samples the
  // transparent padding (never a neighbour) when the quad is expanded.
  vLocalUV = (aPos * quadSize - marginWorld) / iconWorldSize;

  // UV from atlas grid (padded to avoid mipmap bleed)
  vec4 uv = cellUV(atlasIdx);
  vUV = vec2(mix(uv.x, uv.z, vLocalUV.x), mix(uv.y, uv.w, vLocalUV.y));

  // Alliance drain: slot 3 = alliance icon
  float allianceFrac = pd7.z;
  if (iconSlot == 3 && allianceFrac > 0.0 && allianceFrac < 1.0) {
    vAllianceFraction = allianceFrac;
    // Faded alliance icon is at atlas index 9
    vec4 fadedUV = cellUV(9);
    vFadedUV0 = fadedUV.xy;
    vFadedUV1 = fadedUV.zw;
  } else {
    vAllianceFraction = 0.0;
    vFadedUV0 = vec2(0.0);
    vFadedUV1 = vec2(0.0);
  }

  // Traitor flash: slot 1 = traitor icon
  // Frequency ramps linearly from 2 Hz (at 15s) to 5 Hz (at 0s).
  // Phase = uTime*2 + elapsed²*0.1 — the quadratic term adds smooth
  // acceleration without phase discontinuities between ticks.
  vFlashAlpha = 1.0;
  if (iconSlot == 1) {
    float remaining = pd7.y;                          // ticks (0-300, 10/sec)
    float remainingSec = remaining / 10.0;             // seconds
    if (remainingSec <= 15.0 && remainingSec > 0.0) {
      float elapsed = 15.0 - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * 0.1;
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Alliance expiry flash: slot 3 = alliance icon
  // Window matches the renewal prompt offset so the icon flashes exactly
  // while the prompt is up. Same pulse as the traitor flash (2 Hz → 5 Hz).
  if (iconSlot == 3) {
    float window = uAllianceFlashWindowSec;
    float remainingSec = pd7.w / 10.0;                 // ticks → seconds
    if (window > 0.0 && remainingSec <= window && remainingSec > 0.0) {
      float elapsed = window - remainingSec;
      float phase = uTime * 2.0 + elapsed * elapsed * (1.5 / window);
      vFlashAlpha = 0.3 + 0.7 * (0.5 + 0.5 * cos(phase * 6.2832));
    }
  }

  // Doomsday Clock skull: slot 8. While in danger (flag 1.0-1.49) the skull
  // blinks and speeds up as the warn countdown runs out — the progress 0->1 is
  // packed into the flag's fraction. Base ~2 Hz plus a p^2 phase term so it
  // accelerates toward the drain (same trick as the alliance-renewal flash
  // above, which keeps the phase continuous). Holds steady once draining (>=1.5).
  if (iconSlot == 8) {
    if (statusFlag[8] < 1.5) {
      float p = clamp((statusFlag[8] - 1.0) / 0.49, 0.0, 1.0);
      float phase = uTime * 2.0 + p * p * 40.0;
      vFlashAlpha = 0.35 + 0.65 * (0.5 + 0.5 * cos(phase * 6.2832));
    } else {
      vFlashAlpha = 1.0;
    }
    // 3.0 = decaying: steady like draining, but tinted red.
    if (statusFlag[8] > 2.5) vDecay = 1.0;
  }

  vDiscard = 0;
}
`,aa=I(`atlases/status-atlas.png`),oa=10,sa=class{constructor(e,t,n,r,i,a){this.crownAtlas=r,this.statusAtlasTex=null,this.atlasReady=!1,this.gl=e,this.playerDataTex=n,this.maxPlayers=i,this.program=V(e,ia,ra,`StatusIconProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),0),e.uniform1i(e.getUniformLocation(this.program,`uStatusAtlas`),1),e.uniform1i(e.getUniformLocation(this.program,`uCrownAtlas`),2);let o=na;e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uFontBase`),t.base),e.uniform1f(e.getUniformLocation(this.program,`uStatusCell`),o.cellSize),e.uniform1f(e.getUniformLocation(this.program,`uStatusCols`),o.cols),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasW`),o.width),e.uniform1f(e.getUniformLocation(this.program,`uStatusAtlasH`),o.height),e.uniform1f(e.getUniformLocation(this.program,`uStatusPad`),o.pad??0),e.uniform2f(e.getUniformLocation(this.program,`uStatusTexel`),1/o.width,1/o.height),e.uniform1f(e.getUniformLocation(this.program,`uAllianceFlashWindowSec`),a/10),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uStatusRowOffset=e.getUniformLocation(this.program,`uStatusRowOffset`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uStatusOutlinePx=e.getUniformLocation(this.program,`uStatusOutlinePx`),this.loadAtlas()}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.generateMipmap(e.TEXTURE_2D),this.statusAtlasTex=n,this.atlasReady=!0},t.src=aa}draw(e,t,n,r){if(!this.atlasReady)return;let i=this.gl,a=t.name;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uTime,performance.now()/1e3),i.uniform1f(this.uLerpSpeed,a.lerpSpeed),i.uniform1f(this.uCullThreshold,a.cullThreshold),i.uniform1f(this.uNameScaleFactor,a.nameScaleFactor),i.uniform1f(this.uNameScaleCap,a.nameScaleCap),i.uniform1f(this.uStatusRowOffset,a.statusRowOffset),i.uniform1f(this.uFadeOwnerID,r),i.uniform1f(this.uHoverFadeAlpha,a.hoverFadeAlpha),i.uniform1f(this.uStatusOutlinePx,a.statusOutlineWidth),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,this.playerDataTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.statusAtlasTex),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D_ARRAY,this.crownAtlas.texture),i.bindVertexArray(n),i.drawArraysInstanced(i.TRIANGLES,0,6,this.maxPlayers*oa)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.statusAtlasTex&&e.deleteTexture(this.statusAtlasTex)}},ca={ا:`a`,آ:`a`,أ:`a`,إ:`e`,ء:``,ؤ:`v`,ئ:`y`,ب:`b`,پ:`p`,ت:`t`,ث:`s`,ج:`j`,چ:`ch`,ح:`h`,خ:`kh`,د:`d`,ذ:`z`,ر:`r`,ز:`z`,ژ:`zh`,س:`s`,ش:`sh`,ص:`s`,ض:`z`,ط:`t`,ظ:`z`,ع:`a`,غ:`gh`,ف:`f`,ق:`q`,ك:`k`,ک:`k`,گ:`g`,ل:`l`,م:`m`,ن:`n`,ه:`h`,ة:`h`,و:`v`,ي:`y`,ی:`y`,ى:`a`,"۰":`0`,"۱":`1`,"۲":`2`,"۳":`3`,"۴":`4`,"۵":`5`,"۶":`6`,"۷":`7`,"۸":`8`,"۹":`9`,"٠":`0`,"١":`1`,"٢":`2`,"٣":`3`,"٤":`4`,"٥":`5`,"٦":`6`,"٧":`7`,"٨":`8`,"٩":`9`};function la(e){return Array.from(e,e=>e.codePointAt(0)<=255?e:ca[e]??``).join(``).replace(/^a[yi]/,`i`)}function ua(e,t,n,r,i){r.fill(0),i.fill(0);let a=la(e),o=Math.min(a.length,32);for(let e=0;e<o;e++)r[e]=a.charCodeAt(e);if(o===0)return 0;let s=0,c=0;for(let e=0;e<o;e++){let a=r[e];i[e]=s;let o=t.advance[a];e>0&&(o+=n[c*384+a]),s+=o,c=a}let l=r[0],u=r[o-1],d=i[0]+t.xOffset[l],f=i[o-1]+t.xOffset[u]+t.visW[u],p=(d+f)*.5;for(let e=0;e<o;e++)i[e]-=p;return(f-d)*.5}var da=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform float uNightAmbient;
uniform vec3  uOutlineColor;
uniform float uOutlineUsePlayerColor;
uniform float uFillUsePlayerColor;
uniform float uHoverGlowWidth; // px the white hover glow extends past the outline
uniform float uHoverGlowAlpha; // peak opacity of the hover glow

in vec2 vUV;
in vec4 vPlayerColor;   // player territory color (rgb) + alpha
in float vNameShade;      // name fill grayscale shade (0.0 = black)
flat in float vHighlight; // 1.0 when this player is hovered (white glow)
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  // Degenerate fragment — skip
  if (vPlayerColor.a <= 0.0) discard;

  // Border darkens with night: t² stays dark longer, snaps toward the
  // outline color late in the day cycle.
  float t = 1.0 - uNightAmbient;
  float borderT = t * t;

  // Compute fill color: player color, or per-type grayscale shade
  // (black for human, grayer for nation/bot). Applies in day and night.
  vec3 defaultFill = vec3(vNameShade);
  vec3 fillColor = mix(defaultFill, vPlayerColor.rgb, uFillUsePlayerColor);

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // The SDF saturates at sd=0 (screenPxDist = -screenPxRange*0.5).
  // Reserve a 1px margin so saturated fragments always get alpha=0.
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(uOutlineWidth, maxOutline);

  vec3 color;
  float coverage;
  if (uOutlineWidth > 0.0) {
    float outlineDist = screenPxDist + effectiveOutline;
    float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

    vec3 nightOutlineColor = mix(vec3(0.0), uOutlineColor, borderT);
    vec3 borderColor = mix(nightOutlineColor, vPlayerColor.rgb, uOutlineUsePlayerColor);
    color = mix(borderColor, fillColor, fillAlpha);
    coverage = outlineAlpha;
  } else {
    color = fillColor;
    coverage = fillAlpha;
  }

  // Soft white glow behind the hovered player's name. Width is clamped to
  // the SDF margin past the outline so it never hard-clips at the quad edge.
  if (vHighlight > 0.5 && uHoverGlowAlpha > 0.0) {
    float glowWidth = min(uHoverGlowWidth, max(maxOutline - effectiveOutline, 0.0));
    if (glowWidth > 0.0) {
      float g = clamp(1.0 + (screenPxDist + effectiveOutline) / glowWidth, 0.0, 1.0);
      float glowAlpha = g * g * uHoverGlowAlpha;
      float total = coverage + glowAlpha * (1.0 - coverage);
      if (total > 0.0) {
        color = mix(vec3(1.0), color, coverage / total);
        coverage = total;
      }
    }
  }

  fragColor = vec4(color, vPlayerColor.a * coverage);
}
`,fa=`#version 300 es
precision highp float;
precision highp int;
precision highp usampler2D;

// Unit quad vertex position [0,0]→[1,1]
layout(location = 0) in vec2 aPos;

// Data textures
uniform sampler2D  uGlyphMetrics;  // CHAR_RANGE × 2, RGBA32F
uniform sampler2D  uCursorX;       // MAX_CHARS × (MAX_PLAYERS*2), R32F — pre-computed centered cursor X
uniform usampler2D uStrings;       // MAX_CHARS × (MAX_PLAYERS*2), R8UI
uniform sampler2D  uPlayerData;    // 4 × MAX_PLAYERS, RGBA32F

// Uniforms
uniform mat3  uCamera;
uniform float uTime;
uniform float uFontSize;    // atlas reference font size
uniform float uAtlasScaleW; // atlas texture width
uniform float uAtlasScaleH; // atlas texture height
uniform float uBase;        // atlas baseline height

const int MAX_CHARS_PER_LINE = MAX_CHARS;
const int LINES = LINES_PER_PLAYER;
uniform float uLerpSpeed;
uniform float uCullThreshold;
uniform float uNameScaleFactor;
uniform float uNameScaleCap;
uniform float uTroopSizeMultiplier;
uniform float uHighlightOwnerID;
uniform float uFadeOwnerID;    // smallID of player whose name plate the cursor is over (0 = none)
uniform float uHoverFadeAlpha; // alpha multiplier applied to that player's name plate

out vec2 vUV;
out vec4 vPlayerColor;  // player territory color (rgb) + alpha
out float vNameShade;     // name fill grayscale shade (0.0 = black)
flat out float vHighlight; // 1.0 when this player is hovered (white glow)

void main() {
  // 1. Decode instance ID → playerIdx, lineIdx, charPos
  int slotsPerPlayer = LINES * MAX_CHARS_PER_LINE;
  int playerIdx = gl_InstanceID / slotsPerPlayer;
  int remainder = gl_InstanceID - playerIdx * slotsPerPlayer;
  int lineIdx   = remainder / MAX_CHARS_PER_LINE;
  int charPos   = remainder - lineIdx * MAX_CHARS_PER_LINE;

  // 2. Read player data
  vec4 pd0 = texelFetch(uPlayerData, ivec2(0, playerIdx), 0); // srcX, srcY, srcScale, startTime
  vec4 pd1 = texelFetch(uPlayerData, ivec2(1, playerIdx), 0); // tgtX, tgtY, tgtScale, alive
  vec4 pd2 = texelFetch(uPlayerData, ivec2(2, playerIdx), 0); // r, g, b, a
  vec4 pd3 = texelFetch(uPlayerData, ivec2(3, playerIdx), 0); // nameLen, troopLen, nameShade, nameHalfWidth
  vec4 pd4 = texelFetch(uPlayerData, ivec2(4, playerIdx), 0); // flagLayerIdx, emojiAtlasIdx, smallID, 0
  float smallID = pd4.z;

  // Early out: dead player
  if (pd1.w <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // String length for this line
  int len = (lineIdx == 0) ? int(pd3.x) : int(pd3.y);
  if (charPos >= len) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 3. Read char code at this position
  int stringRow = playerIdx * LINES + lineIdx;
  uint charCode = texelFetch(uStrings, ivec2(charPos, stringRow), 0).r;
  if (charCode == 0u) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 4. Compute lerped world position and size
  float elapsed = uTime - pd0.w;
  float t = clamp(1.0 - exp(-uLerpSpeed * elapsed), 0.0, 1.0);
  float wx = mix(pd0.x, pd1.x, t);
  float wy = mix(pd0.y, pd1.y, t);
  float ws = mix(pd0.z, pd1.z, t);

  // 5. Sizing pipeline (matches NameLayer.ts)
  float baseSize  = max(1.0, floor(ws));
  float nameSize  = max(4.0, floor(baseSize * uNameScaleFactor));
  float nameScale = min(baseSize * 0.25, uNameScaleCap);
  float nameWorldScale = (nameSize * nameScale) / uFontSize;
  float worldScale = nameWorldScale;

  bool isHighlighted = uHighlightOwnerID > 0.0 && smallID == uHighlightOwnerID;

  // Targeted players' names must stay findable at any zoom (pd6.y = target
  // status flag; the crosshair in status-icon.vert.glsl matches this).
  bool isTargeted = texelFetch(uPlayerData, ivec2(6, playerIdx), 0).y > 0.5;

  // Troop count is smaller
  if (lineIdx == 1) {
    worldScale *= uTroopSizeMultiplier;
  }

  // Zoom-based culling: compute screen-space size and skip if too small.
  // Highlighted (hovered) names bypass the cull so they're always visible.
  // uCamera[0][0] is the x-scale component of the camera matrix
  float cameraScale = length(vec2(uCamera[0][0], uCamera[1][0]));
  float screenSize = nameWorldScale * uBase * cameraScale;
  // Targeted names bypass the cull, boosted to the smallest size that
  // survives it, so a mark set from across the map is still visible.
  if (isTargeted && screenSize < uCullThreshold) {
    float boost = uCullThreshold / screenSize;
    nameWorldScale *= boost;
    worldScale *= boost;
    screenSize = uCullThreshold;
  }
  if (screenSize < uCullThreshold && !isHighlighted) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 6. Read pre-computed centered cursor X position
  float cursorX = texelFetch(uCursorX, ivec2(charPos, stringRow), 0).r;

  // 7. Glyph metrics for this character
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(int(charCode), 1), 0); // height, atlasU0, atlasV0, atlasU1
  // atlasV1 packed: we need 5 values from 2 RGBA texels (8 slots), so atlasV1 is in m0 slot?
  // Actually let's use: m0=(xadvance, xoffset, yoffset, width), m1=(height, u0, v0, u1), and compute v1
  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Degenerate if glyph has no size (e.g. space)
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vPlayerColor = vec4(0.0);
    vNameShade = 0.0;
    vHighlight = 0.0;
    return;
  }

  // 8. Compute world-space quad position
  float baselineY = -uBase * 0.5; // center vertically
  // Use name-line scale for offset so troops sit below the name, not overlapping
  float lineOffsetY = (lineIdx == 1) ? uBase * nameWorldScale * 1.1 : 0.0;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = vec2(wx, wy + lineOffsetY) + glyphOrigin + aPos * glyphSize;

  // 9. Camera transform
  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  // 10. Fade the whole name plate when the cursor is on top of any part of it
  // so units underneath stay visible. Hit test runs on the CPU (NamePass).
  float hoverAlpha = (uFadeOwnerID > 0.0 && smallID == uFadeOwnerID)
    ? uHoverFadeAlpha : 1.0;

  // 11. UV interpolation across quad
  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vPlayerColor = vec4(pd2.rgb, pd2.a * hoverAlpha); // player territory color + alpha
  vNameShade = pd3.z;         // name fill grayscale shade (0.0 = black)
  vHighlight = isHighlighted ? 1.0 : 0.0;
}
`,pa=I(`atlases/msdf-atlas.png`),ma=class{constructor(e,t,n){this.atlasTex=null,this.atlasReady=!1,this.gl=e,this.textures=n,this.distanceRange=t.distanceRange,this.program=V(e,R(fa,{MAX_CHARS:32,LINES_PER_PLAYER:2}),da,`TextProgram`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1i(e.getUniformLocation(this.program,`uCursorX`),2),e.uniform1i(e.getUniformLocation(this.program,`uStrings`),3),e.uniform1i(e.getUniformLocation(this.program,`uPlayerData`),4),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),t.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleW`),t.scaleW),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),t.scaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),t.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uLerpSpeed=e.getUniformLocation(this.program,`uLerpSpeed`),this.uCullThreshold=e.getUniformLocation(this.program,`uCullThreshold`),this.uNameScaleFactor=e.getUniformLocation(this.program,`uNameScaleFactor`),this.uNameScaleCap=e.getUniformLocation(this.program,`uNameScaleCap`),this.uTroopSizeMultiplier=e.getUniformLocation(this.program,`uTroopSizeMultiplier`),this.uHighlightOwnerID=e.getUniformLocation(this.program,`uHighlightOwnerID`),this.uFadeOwnerID=e.getUniformLocation(this.program,`uFadeOwnerID`),this.uHoverFadeAlpha=e.getUniformLocation(this.program,`uHoverFadeAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uNightAmbient=e.getUniformLocation(this.program,`uNightAmbient`),this.uOutlineColor=e.getUniformLocation(this.program,`uOutlineColor`),this.uOutlineUsePlayerColor=e.getUniformLocation(this.program,`uOutlineUsePlayerColor`),this.uFillUsePlayerColor=e.getUniformLocation(this.program,`uFillUsePlayerColor`),this.uHoverGlowWidth=e.getUniformLocation(this.program,`uHoverGlowWidth`),this.uHoverGlowAlpha=e.getUniformLocation(this.program,`uHoverGlowAlpha`),this.loadAtlas()}get ready(){return this.atlasReady}loadAtlas(){let e=this.gl,t=new Image;t.crossOrigin=`anonymous`,t.onload=()=>{let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),this.atlasTex=n,this.atlasReady=!0},t.src=pa}draw(e,t,n,r,i,a,o){if(!this.atlasReady)return;let s=this.gl,c=t.name;s.useProgram(this.program),s.uniformMatrix3fv(this.uCamera,!1,e),s.uniform1f(this.uTime,performance.now()/1e3),s.uniform1f(this.uDistRange,this.distanceRange),s.uniform1f(this.uLerpSpeed,c.lerpSpeed),s.uniform1f(this.uCullThreshold,c.cullThreshold),s.uniform1f(this.uNameScaleFactor,c.nameScaleFactor),s.uniform1f(this.uNameScaleCap,c.nameScaleCap),s.uniform1f(this.uTroopSizeMultiplier,c.troopSizeMultiplier),s.uniform1f(this.uHighlightOwnerID,a),s.uniform1f(this.uFadeOwnerID,o),s.uniform1f(this.uHoverFadeAlpha,c.hoverFadeAlpha),s.uniform1f(this.uOutlineWidth,c.outlineWidth),s.uniform1f(this.uNightAmbient,i),s.uniform3f(this.uOutlineColor,c.outlineR,c.outlineG,c.outlineB),s.uniform1f(this.uOutlineUsePlayerColor,+!!c.outlineUsePlayerColor),s.uniform1f(this.uFillUsePlayerColor,+!!c.fillUsePlayerColor),s.uniform1f(this.uHoverGlowWidth,c.hoverGlowWidth),s.uniform1f(this.uHoverGlowAlpha,c.hoverGlowAlpha),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,this.atlasTex),s.activeTexture(s.TEXTURE1),s.bindTexture(s.TEXTURE_2D,this.textures.glyphMetrics),s.activeTexture(s.TEXTURE2),s.bindTexture(s.TEXTURE_2D,this.textures.cursor),s.activeTexture(s.TEXTURE3),s.bindTexture(s.TEXTURE_2D,this.textures.strings),s.activeTexture(s.TEXTURE4),s.bindTexture(s.TEXTURE_2D,this.textures.playerData),s.bindVertexArray(n),s.drawArraysInstanced(s.TRIANGLES,0,6,r*2*32)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.atlasTex&&e.deleteTexture(this.atlasTex)}},ha=128/85,ga=32,_a=class e{static{this.UPDATE_SLICES=4}constructor(e,t,n,r,i){this.slots=new Map,this.playerColors=new Map,this.slotsWaitingForFlag=new Map,this.slotsWaitingForCrown=new Map,this.playerDataDirty=!1,this.stringDataDirty=!1,this.cursorDataDirty=!1,this.slicePhase=0,this.highlightOwnerID=0,this.mouseWorldX=-1e9,this.mouseWorldY=-1e9,this.gl=e,this.settings=r,this.maxPlayers=t.maxPlayers??t.players.length;let a=Ii();this.fontSize=a.fontSize,this.fontBase=a.base,this.glyph=Li(a.chars),this.kernTable=Ri(a.kernings),this.emojiCharToIndex=zi(),this.flagAtlas=new Yi(e,(e,t)=>{let n=this.slotsWaitingForFlag.get(e);if(n){this.slotsWaitingForFlag.delete(e);for(let r of n)r.flagUrl===e&&(r.flagLayerIdx=t,this.writePlayerDataRow(r))}}),this.crownAtlas=new Yi(e,(e,t)=>{let n=this.slotsWaitingForCrown.get(e);if(n){this.slotsWaitingForCrown.delete(e);for(let r of n)r.crownUrl===e&&(r.crownLayerIdx=t,this.writePlayerDataRow(r))}},128,128,ga),this.playerByID=new Map;for(let e of t.players){this.playerByID.set(e.id,e);let t=e.smallID*4;this.playerColors.set(e.id,[n[t],n[t+1],n[t+2]])}let o=this.maxPlayers*2;this.cpuPlayerData=new Float32Array(9*this.maxPlayers*4),this.cpuStringData=new Uint8Array(32*o),this.cpuCursorData=new Float32Array(32*o),this.stringRow=new Uint8Array(32),this.cursorRow=new Float32Array(32),this.vao=ze(e),this.glyphMetricsTex=Bi(e,a),this.cursorTex=Vi(e,this.maxPlayers),this.stringTex=Hi(e,this.maxPlayers),this.playerDataTex=Ui(e,this.maxPlayers),this.textProgram=new ma(e,a,{glyphMetrics:this.glyphMetricsTex,cursor:this.cursorTex,strings:this.stringTex,playerData:this.playerDataTex}),this.iconProgram=new ta(e,a,this.playerDataTex,this.flagAtlas,this.maxPlayers),this.statusIconProgram=new sa(e,a,this.playerDataTex,this.crownAtlas,this.maxPlayers,i.allianceExtensionPromptOffset()),this.debugProgram=new Ji(e,a,this.playerDataTex,this.maxPlayers)}addPlayers(e,t){for(let n of e){if(this.playerByID.has(n.id))continue;this.playerByID.set(n.id,n);let e=n.smallID*4;this.playerColors.set(n.id,[t[e],t[e+1],t[e+2]])}}refreshPlayerColors(e){for(let[t,n]of this.playerByID){let r=n.smallID*4;this.playerColors.set(t,[e[r],e[r+1],e[r+2]])}for(let e of this.slots.values())this.writePlayerDataRow(e)}refreshNames(e){for(let[t,n]of e){let e=this.playerByID.get(t);if(e===void 0)continue;e.displayName=n;let r=this.slots.get(t);r!==void 0&&(r.nameLen=0)}}updatePlayerCosmetics(e){for(let t of e){let e=this.playerByID.get(t.id);if(e===void 0)continue;e.flag=t.flag,e.crown=t.crown;let n=this.slots.get(t.id);n!==void 0&&(n.flagUrl!==t.flag&&(n.flagUrl=t.flag,n.flagLayerIdx=-1,this.resolveSlotFlag(n)),n.crownUrl!==t.crown&&(n.crownUrl=t.crown,n.crownLayerIdx=-1,this.resolveSlotCrown(n)),this.writePlayerDataRow(n))}}resolveSlotFlag(e){let t=e.flagUrl;if(!t)return;this.flagAtlas.request(t);let n=this.flagAtlas.getLayer(t);if(n>=0){e.flagLayerIdx=n;return}let r=this.slotsWaitingForFlag.get(t);r||(r=new Set,this.slotsWaitingForFlag.set(t,r)),r.add(e)}resolveSlotCrown(e){let t=e.crownUrl;if(!t)return;this.crownAtlas.request(t);let n=this.crownAtlas.getLayer(t);if(n>=0){e.crownLayerIdx=n;return}let r=this.slotsWaitingForCrown.get(t);r||(r=new Set,this.slotsWaitingForCrown.set(t,r)),r.add(e)}updateNames(t,n,r,i){let a=performance.now()/1e3;if(this.slots.size!==this.playerByID.size){let e=0;for(let t of this.playerByID.values())if(this.slots.has(t.id))e=Math.max(e,this.slots.get(t.id).index+1);else{let n={index:e++,playerID:t.id,static:t,srcX:0,srcY:0,srcScale:0,tgtX:0,tgtY:0,tgtScale:0,startTime:a,alive:!1,nameLen:0,troopLen:0,lastTroopStr:``,lastTroopBucket:-1,flagUrl:t.flag,flagLayerIdx:-1,crownUrl:t.crown,crownLayerIdx:-1,emojiAtlasIdx:-1,nameHalfWidth:0,crown:!1,traitor:!1,disconnected:!1,alliance:!1,allianceReq:!1,target:!1,embargo:!1,nukeActive:!1,nukeTargetsMe:!1,inDoomsdayClock:!1,doomsdayClockDraining:!1,doomsdayClockDecaying:!1,doomsdayClockWarnProgress:0,traitorRemainingTicks:0,allianceFraction:0,allianceRemainingTicks:0};this.slots.set(t.id,n),this.resolveSlotFlag(n),this.resolveSlotCrown(n)}}let o=this.slicePhase;this.slicePhase=(o+1)%e.UPDATE_SLICES;for(let[s,c]of t){let t=this.slots.get(s);if(!t||!r&&t.nameLen!==0&&t.index%e.UPDATE_SLICES!==o)continue;let l=n.get(t.static.smallID),u=l?.isAlive??!1;if(!u&&!t.alive)continue;if(!u&&t.alive){t.alive=!1,this.writePlayerDataRow(t);continue}let d=!t.alive;if(t.alive=u,t.nameLen===0){let e=t.static.displayName;t.nameLen=Math.min(e.length,32),t.nameHalfWidth=this.uploadStringRow(t.index*2,e),d=!0}let f=Math.floor((a+t.index%5*.1)/.5);if(r||t.troopLen===0||f!==t.lastTroopBucket){t.lastTroopBucket=f;let e=Fe(l?.troops??0);e!==t.lastTroopStr&&(t.troopLen=Math.min(e.length,32),t.lastTroopStr=e,this.uploadStringRow(t.index*2+1,e),d=!0)}if(c.x!==t.tgtX||c.y!==t.tgtY||c.size!==t.tgtScale){if(r)t.srcX=c.x,t.srcY=c.y,t.srcScale=c.size;else{let e=a-t.startTime,n=Math.min(1-Math.exp(-this.settings.name.lerpSpeed*e),1);t.srcX+=(t.tgtX-t.srcX)*n,t.srcY+=(t.tgtY-t.srcY)*n,t.srcScale+=(t.tgtScale-t.srcScale)*n}t.tgtX=c.x,t.tgtY=c.y,t.tgtScale=c.size,t.startTime=a,d=!0}let p=-1;if(l?.outgoingEmojis&&l.outgoingEmojis.length>0){for(let e of l.outgoingEmojis)if(e.recipientID===`AllPlayers`){let t=this.emojiCharToIndex.get(e.message);if(t!==void 0){p=t;break}}}p!==t.emojiAtlasIdx&&(t.emojiAtlasIdx=p,d=!0);let m=i?.get(t.static.smallID),h=m?.crown??!1,g=m?.traitor??!1,_=m?.disconnected??!1,v=m?.inDoomsdayClock??!1,y=m?.doomsdayClockDraining??!1,b=m?.doomsdayClockDecaying??!1,x=m?.doomsdayClockWarnProgress??0,S=m?.alliance??!1,C=m?.allianceReq??!1,w=m?.target??!1,T=m?.embargo??!1,E=m?.nukeActive??!1,D=m?.nukeTargetsMe??!1,O=m?.traitorRemainingTicks??0,k=m?.allianceFraction??0,A=m?.allianceRemainingTicks??0;(h!==t.crown||g!==t.traitor||_!==t.disconnected||v!==t.inDoomsdayClock||y!==t.doomsdayClockDraining||b!==t.doomsdayClockDecaying||x!==t.doomsdayClockWarnProgress||S!==t.alliance||C!==t.allianceReq||w!==t.target||T!==t.embargo||E!==t.nukeActive||D!==t.nukeTargetsMe||O!==t.traitorRemainingTicks||k!==t.allianceFraction||A!==t.allianceRemainingTicks)&&(t.crown=h,t.traitor=g,t.disconnected=_,t.inDoomsdayClock=v,t.doomsdayClockDraining=y,t.doomsdayClockDecaying=b,t.doomsdayClockWarnProgress=x,t.alliance=S,t.allianceReq=C,t.target=w,t.embargo=T,t.nukeActive=E,t.nukeTargetsMe=D,t.traitorRemainingTicks=O,t.allianceFraction=k,t.allianceRemainingTicks=A,d=!0),d&&this.writePlayerDataRow(t)}for(let[e,n]of this.slots)!t.has(e)&&n.alive&&(n.alive=!1,this.writePlayerDataRow(n))}uploadStringRow(e,t){let n=ua(t,this.glyph,this.kernTable,this.stringRow,this.cursorRow),r=e*32;return this.cpuStringData.set(this.stringRow,r),this.cpuCursorData.set(this.cursorRow,r),this.stringDataDirty=!0,this.cursorDataDirty=!0,n}writePlayerDataRow(e){let t=this.cpuPlayerData,n=e.index*36;t[n+0]=e.srcX,t[n+1]=e.srcY,t[n+2]=e.srcScale,t[n+3]=e.startTime,t[n+4]=e.tgtX,t[n+5]=e.tgtY,t[n+6]=e.tgtScale,t[n+7]=+!!e.alive;let r=this.playerColors.get(e.playerID)??[0,0,0];t[n+8]=r[0],t[n+9]=r[1],t[n+10]=r[2],t[n+11]=1;let i=this.settings.name,a=0;e.static.playerType===Dt.Nation?a=i.nameShadeNation:e.static.playerType===Dt.Bot&&(a=i.nameShadeBot),t[n+12]=e.nameLen,t[n+13]=e.troopLen,t[n+14]=a,t[n+15]=e.nameHalfWidth,t[n+16]=e.flagLayerIdx,t[n+17]=e.emojiAtlasIdx,t[n+18]=e.static.smallID,t[n+19]=e.doomsdayClockDecaying?3:e.doomsdayClockDraining?2:e.inDoomsdayClock?1+e.doomsdayClockWarnProgress*.49:0,t[n+20]=+!!e.crown,t[n+21]=+!!e.traitor,t[n+22]=+!!e.disconnected,t[n+23]=+!!e.alliance,t[n+24]=+!!e.allianceReq,t[n+25]=+!!e.target,t[n+26]=+!!e.embargo,t[n+27]=+!!e.nukeActive,t[n+28]=+!!e.nukeTargetsMe,t[n+29]=e.traitorRemainingTicks,t[n+30]=e.allianceFraction,t[n+31]=e.allianceRemainingTicks,t[n+32]=e.crownLayerIdx,t[n+33]=+(e.static.verified===!0),t[n+34]=[e.crown,e.traitor,e.disconnected,e.alliance,e.allianceReq,e.target,e.embargo,e.nukeActive,e.inDoomsdayClock||e.doomsdayClockDraining].filter(Boolean).length,t[n+35]=0,this.playerDataDirty=!0}setHighlightOwner(e){this.highlightOwnerID=e}setMouseWorldPos(e,t){this.mouseWorldX=e,this.mouseWorldY=t}hitTestNamePlate(e){let t=this.mouseWorldX,n=this.mouseWorldY,r=this.settings.name;for(let i of this.slots.values()){if(!i.alive)continue;let a=Math.min(1-Math.exp(-r.lerpSpeed*(e-i.startTime)),1),o=i.srcX+(i.tgtX-i.srcX)*a,s=i.srcY+(i.tgtY-i.srcY)*a,c=i.srcScale+(i.tgtScale-i.srcScale)*a,l=Math.max(1,Math.floor(c)),u=Math.max(4,Math.floor(l*r.nameScaleFactor)),d=Math.min(l*.25,r.nameScaleCap),f=this.fontBase*(u*d/this.fontSize),p=i.nameHalfWidth*(u*d/this.fontSize),m=o-p,h=o+p;i.flagLayerIdx>=0&&(m-=f*1.2*ha);let g=s-f*.6,_=i.crown||i.traitor||i.disconnected||i.alliance||i.allianceReq||i.target||i.embargo||i.nukeActive||i.inDoomsdayClock;i.emojiAtlasIdx>=0?g=s-f*r.emojiRowOffset:_&&(g=s-f*r.statusRowOffset);let v=s+f*(1.1+.5*r.troopSizeMultiplier);if(t>=m&&t<=h&&n>=g&&n<=v)return i.static.smallID}return 0}draw(e,t){if(!this.textProgram.ready||this.slots.size===0)return;let n=this.gl;this.stringDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.stringTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED_INTEGER,n.UNSIGNED_BYTE,this.cpuStringData),!1),this.cursorDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.cursorTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,32,this.maxPlayers*2,n.RED,n.FLOAT,this.cpuCursorData),!1),this.playerDataDirty&&=(n.bindTexture(n.TEXTURE_2D,this.playerDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,9,this.maxPlayers,n.RGBA,n.FLOAT,this.cpuPlayerData),!1);let r=this.hitTestNamePlate(performance.now()/1e3);this.textProgram.draw(e,this.settings,this.vao,this.maxPlayers,t,this.highlightOwnerID,r),this.statusIconProgram.draw(e,this.settings,this.vao,r),this.iconProgram.draw(e,this.settings,this.vao,r),this.settings.passEnabled.nameDebug&&this.debugProgram.draw(e,this.settings,this.vao)}dispose(){let e=this.gl;this.textProgram.dispose(),this.iconProgram.dispose(),this.flagAtlas.dispose(),this.crownAtlas.dispose(),this.statusIconProgram.dispose(),this.debugProgram.dispose(),e.deleteTexture(this.glyphMetricsTex),e.deleteTexture(this.cursorTex),e.deleteTexture(this.stringTex),e.deleteTexture(this.playerDataTex),e.deleteVertexArray(this.vao)}},va=`#version 300 es
precision highp float;

uniform sampler2D uSceneTex;
uniform sampler2D uLightTex;
uniform float uAmbient;

in vec2 vUV;
out vec4 fragColor;

void main() {
  vec3 scene = texture(uSceneTex, vUV).rgb;
  vec3 light = texture(uLightTex, vUV).rgb;

  // Scale lights inversely with ambient — invisible at full day, full strength at deep night
  vec3 illumination = min(vec3(uAmbient) + light * (1.0 - uAmbient), vec3(1.2));
  fragColor = vec4(scene * illumination, 1.0);
}
`,ya=class{constructor(e,t){this.gl=e,this.settings=t,this.compositeProg=V(e,lt,va,`NightCompositePass`),this.uCompositeAmbient=e.getUniformLocation(this.compositeProg,`uAmbient`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uSceneTex`),0),e.uniform1i(e.getUniformLocation(this.compositeProg,`uLightTex`),1),this.quadVao=ze(e)}getAmbient(){return this.settings.lighting.ambient}draw(e,t){let n=this.gl;n.disable(n.BLEND),n.useProgram(this.compositeProg),n.uniform1f(this.uCompositeAmbient,this.getAmbient()),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,e),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,t),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.compositeProg),e.deleteVertexArray(this.quadVao)}},ba=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vInnerRadius;
flat in float vOuterRadius;
flat in float vRelation;        // 0 = self, 1 = ally, 2 = enemy

uniform float uTime;            // seconds
uniform vec4 uTelegraphStyle;   // (strokeWidth, dashLen, gapLen, rotationSpeed)
uniform vec4 uTelegraphAlpha;   // (baseAlpha, pulseAmplitude, pulseSpeed, fillAlphaOffset)
uniform vec3 uColorSelf;
uniform vec3 uColorAlly;
uniform vec3 uColorEnemy;

out vec4 fragColor;

void main() {
  float strokeWidth = uTelegraphStyle.x;
  float dashLen = uTelegraphStyle.y;
  float gapLen = uTelegraphStyle.z;
  float rotationSpeed = uTelegraphStyle.w;
  float baseAlphaVal = uTelegraphAlpha.x;
  float pulseAmp = uTelegraphAlpha.y;
  float pulseSpd = uTelegraphAlpha.z;
  float fillAlphaOff = uTelegraphAlpha.w;

  float paddedR = vOuterRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Base alpha with gentle pulsation
  float baseAlpha = baseAlphaVal + pulseAmp * sin(uTime * pulseSpd);

  // Inner circle: filled disc + stroke
  float innerFill = 1.0 - smoothstep(vInnerRadius - 0.5, vInnerRadius, dist);
  float innerStroke = smoothstep(vInnerRadius - strokeWidth - 0.5, vInnerRadius - strokeWidth, dist)
                    * (1.0 - smoothstep(vInnerRadius + strokeWidth, vInnerRadius + strokeWidth + 0.5, dist));

  // Outer circle: dashed ring
  float outerRing = smoothstep(vOuterRadius - strokeWidth - 0.5, vOuterRadius - strokeWidth, dist)
                  * (1.0 - smoothstep(vOuterRadius + strokeWidth, vOuterRadius + strokeWidth + 0.5, dist));

  // Dash pattern on outer ring
  float angle = atan(vLocal.y, vLocal.x);
  float arcPos = angle * vOuterRadius;
  float period = dashLen + gapLen;
  float dashPhase = mod(arcPos + uTime * rotationSpeed, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, dashPhase);

  // Combine
  float fillAlpha = innerFill * max(0.0, baseAlpha - fillAlphaOff);
  float strokeAlpha = innerStroke * baseAlpha;
  float outerAlpha = outerRing * dashAlpha * baseAlpha;

  float alpha = max(max(fillAlpha, strokeAlpha), outerAlpha);
  if (alpha < 0.01) discard;

  vec3 color = vRelation < 0.5 ? uColorSelf
             : vRelation < 1.5 ? uColorAlly
             : uColorEnemy;
  fragColor = vec4(color, alpha);
}
`,xa=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, innerRadius, outerRadius
layout(location = 1) in vec4 aInstance;
// Per-instance: 0 = self, 1 = ally, 2 = enemy
layout(location = 2) in float aRelation;

uniform mat3 uCamera;

out vec2 vLocal;              // [-1, +1] local coords
flat out float vInnerRadius;
flat out float vOuterRadius;
flat out float vRelation;

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vInnerRadius = aInstance.z;
  vOuterRadius = aInstance.w;
  vRelation = aRelation;

  // Expand quad to cover outer circle bbox + padding
  float r = aInstance.w + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Sa=5,Ca=class{constructor(e,t){this.instanceCount=0,this.startTime=performance.now(),this.gl=e,this.settings=t,this.program=V(e,xa,ba,`NukeTelegraphPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uTelegraphStyle=e.getUniformLocation(this.program,`uTelegraphStyle`),this.uTelegraphAlpha=e.getUniformLocation(this.program,`uTelegraphAlpha`),this.uColorSelf=e.getUniformLocation(this.program,`uColorSelf`),this.uColorAlly=e.getUniformLocation(this.program,`uColorAlly`),this.uColorEnemy=e.getUniformLocation(this.program,`uColorEnemy`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let r=e.createBuffer();this.instanceBuf=new ct(e,r,16,Sa);let i=Sa*4;e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,i,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,i,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){let t=e.length;this.instanceBuf.ensureCapacity(t);let n=this.instanceBuf.float32;for(let r=0;r<t;r++){let t=e[r],i=r*Sa;n[i+0]=t.x,n[i+1]=t.y,n[i+2]=t.innerRadius,n[i+3]=t.outerRadius,n[i+4]=t.relation}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*Sa)}}draw(e){if(this.instanceCount===0)return;let t=this.gl,n=this.settings.nukeTelegraph,r=(performance.now()-this.startTime)/1e3;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform1f(this.uTime,r),t.uniform4f(this.uTelegraphStyle,n.strokeWidth,n.dashLen,n.gapLen,n.rotationSpeed),t.uniform4f(this.uTelegraphAlpha,n.baseAlpha,n.pulseAmplitude,n.pulseSpeed,n.fillAlphaOffset),t.uniform3f(this.uColorSelf,n.selfColorR,n.selfColorG,n.selfColorB),t.uniform3f(this.uColorAlly,n.allyColorR,n.allyColorG,n.allyColorB),t.uniform3f(this.uColorEnemy,n.colorR,n.colorG,n.colorB),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},wa=`#version 300 es
precision highp float;

in vec2 vUV;
flat in float vType;

out vec4 fragColor;

// Colors matching upstream
const vec3 COLOR_WHITE = vec3(1.0);
const vec3 OUTLINE_GRAY = vec3(0.549);    // rgba(140, 140, 140)
const vec3 COLOR_RED = vec3(1.0, 0.0, 0.0);
const vec3 OUTLINE_BLACK = vec3(0.0);

void main() {
  float alpha = 0.0;
  vec3 color = vec3(1.0);

  if (vType < 0.5) {
    // Circle marker at untargetable zone boundary
    // White ring with gray outline (upstream: 4px radius, 1.25px stroke)
    float dist = length(vUV);
    float ring = abs(dist - 0.55);
    float lineAlpha = 1.0 - smoothstep(0.06, 0.12, ring);
    float outlineAlpha = 1.0 - smoothstep(0.14, 0.22, ring);
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_GRAY, COLOR_WHITE, blend);
    alpha = outlineAlpha;
  } else {
    // X marker at SAM intercept point
    // Red X with black outline (upstream: 6px arms, 2px stroke)
    float d1 = abs(vUV.x - vUV.y) * 0.7071;
    float d2 = abs(vUV.x + vUV.y) * 0.7071;
    float minD = min(d1, d2);
    float circleMask = 1.0 - smoothstep(0.7, 0.85, length(vUV));
    float lineAlpha = (1.0 - smoothstep(0.08, 0.16, minD)) * circleMask;
    float outlineAlpha = (1.0 - smoothstep(0.18, 0.28, minD)) * circleMask;
    float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
    color = mix(OUTLINE_BLACK, COLOR_RED, blend);
    alpha = outlineAlpha;
  }

  if (alpha < 0.01) discard;
  fragColor = vec4(color, alpha);
}
`,Ta=`#version 300 es
precision highp float;

// Unit quad [-1, +1]
layout(location = 0) in vec2 aCorner;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;
uniform float uPixelSize;
uniform vec4 uMarker;           // (t, type: 0=circle 1=X, 0, 0)
uniform vec2 uMarkerRadii;     // (circleRadiusPx, xRadiusPx)

out vec2 vUV;
flat out float vType;

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

void main() {
  vType = uMarker.y;
  vUV = aCorner;

  vec2 center = bezier(uMarker.x) + 0.5;
  float radius = (vType < 0.5 ? uMarkerRadii.x : uMarkerRadii.y) * uPixelSize;
  vec2 pos = center + aCorner * radius;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ea=`#version 300 es
precision highp float;

in float vT;
in float vArcDist;
in float vEdgeDist;

uniform float uPixelSize;
uniform float uTUntargetableStart;  // -1 = no zone
uniform float uTUntargetableEnd;    // -1 = no zone
uniform float uTSamIntercept;       // 1.0 = no intercept

// Settings uniforms
uniform float uQuadHalfPx;          // total half-width of quad in pixels
uniform float uLineHalfPx;          // main line half-width in pixels
uniform float uOutlineHalfPx;       // outline half-width in pixels
uniform vec4 uDashPattern;          // (dashTargetable, gapTargetable, dashUntargetable, gapUntargetable)
uniform vec3 uLineColor;            // normal line color
uniform vec3 uInterceptColor;       // line color after SAM intercept
uniform vec3 uOutlineColor;         // outline color (normal)
uniform vec3 uInterceptOutlineColor; // outline color (after intercept)

out vec4 fragColor;

void main() {
  // Zone classification
  bool inUntargetable = uTUntargetableStart >= 0.0
    && vT >= uTUntargetableStart
    && vT <= uTUntargetableEnd;
  bool intercepted = vT >= uTSamIntercept;

  // Dash pattern (pixel space)
  float dashLen = inUntargetable ? uDashPattern.z : uDashPattern.x;
  float gapLen = inUntargetable ? uDashPattern.w : uDashPattern.y;
  float period = dashLen + gapLen;
  float pixelDist = vArcDist / uPixelSize;
  float phase = mod(pixelDist, period);
  float dashAlpha = 1.0 - smoothstep(dashLen - 0.5, dashLen + 0.5, phase);
  if (dashAlpha < 0.01) discard;

  // Line vs outline (pixel distance from center line)
  float d = abs(vEdgeDist) * uQuadHalfPx;
  float lineAlpha = 1.0 - smoothstep(uLineHalfPx - 0.4, uLineHalfPx + 0.4, d);
  float outlineAlpha = 1.0 - smoothstep(uOutlineHalfPx - 0.4, uOutlineHalfPx + 0.4, d);
  if (outlineAlpha < 0.01) discard;

  // Color selection
  vec3 lineColor = intercepted ? uInterceptColor : uLineColor;
  vec3 outlineColor = intercepted ? uInterceptOutlineColor : uOutlineColor;
  float blend = outlineAlpha > 0.01 ? lineAlpha / outlineAlpha : 1.0;
  vec3 color = mix(outlineColor, lineColor, blend);

  fragColor = vec4(color, outlineAlpha * dashAlpha);
}
`,Da=`#version 300 es
precision highp float;

// Per-vertex: (t along curve, side: -1 or +1, cumulative arc distance)
layout(location = 0) in vec3 aVertex;

uniform mat3 uCamera;
uniform vec2 uP0, uP1, uP2, uP3;   // Bezier control points
uniform float uPixelSize;           // world units per pixel
uniform float uQuadHalfPx;          // half-width of quad in pixels

out float vT;          // curve parameter (0..1)
out float vArcDist;    // cumulative arc distance (world units)
out float vEdgeDist;   // -1..+1 across the line width

vec2 bezier(float t) {
  float T = 1.0 - t;
  float TT = T * T;
  float tt = t * t;
  return TT * T * uP0 + 3.0 * TT * t * uP1 + 3.0 * T * tt * uP2 + tt * t * uP3;
}

vec2 bezierDeriv(float t) {
  float T = 1.0 - t;
  return 3.0 * (T * T * (uP1 - uP0) + 2.0 * T * t * (uP2 - uP1) + t * t * (uP3 - uP2));
}

void main() {
  float t = aVertex.x;
  float side = aVertex.y;

  vec2 pos = bezier(t);
  vec2 tang = bezierDeriv(t);
  float tangLen = length(tang);
  vec2 normTang = tangLen > 0.001 ? tang / tangLen : vec2(1.0, 0.0);
  vec2 perp = vec2(-normTang.y, normTang.x);

  float halfWidth = uQuadHalfPx * uPixelSize;
  pos += perp * side * halfWidth;
  pos += 0.5; // tile center offset

  vT = t;
  vEdgeDist = side;
  vArcDist = aVertex.z;

  vec3 clip = uCamera * vec3(pos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Oa=128,ka=2,Aa=3,ja=class{constructor(e,t){this.visible=!1,this.data=null,this.gl=e,this.settings=t,this.lineProgram=V(e,Da,Ea,`NukeTrajectoryPass.lineProgram`),this.uLineCamera=e.getUniformLocation(this.lineProgram,`uCamera`),this.uLineP0=e.getUniformLocation(this.lineProgram,`uP0`),this.uLineP1=e.getUniformLocation(this.lineProgram,`uP1`),this.uLineP2=e.getUniformLocation(this.lineProgram,`uP2`),this.uLineP3=e.getUniformLocation(this.lineProgram,`uP3`),this.uLinePixelSize=e.getUniformLocation(this.lineProgram,`uPixelSize`),this.uLineTUntargetableStart=e.getUniformLocation(this.lineProgram,`uTUntargetableStart`),this.uLineTUntargetableEnd=e.getUniformLocation(this.lineProgram,`uTUntargetableEnd`),this.uLineTSamIntercept=e.getUniformLocation(this.lineProgram,`uTSamIntercept`),this.uLineQuadHalfPx=e.getUniformLocation(this.lineProgram,`uQuadHalfPx`),this.uLineLineHalfPx=e.getUniformLocation(this.lineProgram,`uLineHalfPx`),this.uLineOutlineHalfPx=e.getUniformLocation(this.lineProgram,`uOutlineHalfPx`),this.uLineDashPattern=e.getUniformLocation(this.lineProgram,`uDashPattern`),this.uLineLineColor=e.getUniformLocation(this.lineProgram,`uLineColor`),this.uLineInterceptColor=e.getUniformLocation(this.lineProgram,`uInterceptColor`),this.uLineOutlineColor=e.getUniformLocation(this.lineProgram,`uOutlineColor`),this.uLineInterceptOutlineColor=e.getUniformLocation(this.lineProgram,`uInterceptOutlineColor`),this.lineVertexCount=129*ka,this.lineVertices=new Float32Array(this.lineVertexCount*Aa),this.lineVAO=e.createVertexArray(),e.bindVertexArray(this.lineVAO),this.lineBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lineBuf),e.bufferData(e.ARRAY_BUFFER,this.lineVertices.byteLength,e.DYNAMIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0),e.bindVertexArray(null),this.markerProgram=V(e,Ta,wa,`NukeTrajectoryPass.markerProgram`),this.uMarkerCamera=e.getUniformLocation(this.markerProgram,`uCamera`),this.uMarkerP0=e.getUniformLocation(this.markerProgram,`uP0`),this.uMarkerP1=e.getUniformLocation(this.markerProgram,`uP1`),this.uMarkerP2=e.getUniformLocation(this.markerProgram,`uP2`),this.uMarkerP3=e.getUniformLocation(this.markerProgram,`uP3`),this.uMarkerPixelSize=e.getUniformLocation(this.markerProgram,`uPixelSize`),this.uMarker=e.getUniformLocation(this.markerProgram,`uMarker`),this.uMarkerRadii=e.getUniformLocation(this.markerProgram,`uMarkerRadii`),this.markerVAO=e.createVertexArray(),e.bindVertexArray(this.markerVAO);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}update(e){this.data=e,this.visible=e!==null,e&&this.rebuildVertices(e)}rebuildVertices(e){let t=Oa,n=this.lineVertices,r=0,i=e.p0x,a=e.p0y;for(let o=0;o<=t;o++){let s=o/t,c=1-s,l=c*c,u=s*s,d=l*c*e.p0x+3*l*s*e.p1x+3*c*u*e.p2x+u*s*e.p3x,f=l*c*e.p0y+3*l*s*e.p1y+3*c*u*e.p2y+u*s*e.p3y;if(o>0){let e=d-i,t=f-a;r+=Math.sqrt(e*e+t*t)}i=d,a=f;let p=o*ka*Aa;n[p+0]=s,n[p+1]=-1,n[p+2]=r,n[p+3]=s,n[p+4]=1,n[p+5]=r}let o=this.gl;o.bindBuffer(o.ARRAY_BUFFER,this.lineBuf),o.bufferSubData(o.ARRAY_BUFFER,0,n)}draw(e){if(!this.visible||!this.data)return;let t=this.gl,n=this.data,r=this.settings.nukeTrajectory,i=2/(e[0]*t.drawingBufferWidth),a=r.lineWidth/2,o=(r.lineWidth+r.outlineWidth)/2,s=o+1;t.useProgram(this.lineProgram),t.uniformMatrix3fv(this.uLineCamera,!1,e),t.uniform2f(this.uLineP0,n.p0x,n.p0y),t.uniform2f(this.uLineP1,n.p1x,n.p1y),t.uniform2f(this.uLineP2,n.p2x,n.p2y),t.uniform2f(this.uLineP3,n.p3x,n.p3y),t.uniform1f(this.uLinePixelSize,i),t.uniform1f(this.uLineTUntargetableStart,n.tUntargetableStart),t.uniform1f(this.uLineTUntargetableEnd,n.tUntargetableEnd),t.uniform1f(this.uLineTSamIntercept,n.tSamIntercept),t.uniform1f(this.uLineQuadHalfPx,s),t.uniform1f(this.uLineLineHalfPx,a),t.uniform1f(this.uLineOutlineHalfPx,o),t.uniform4f(this.uLineDashPattern,r.dashTargetable,r.gapTargetable,r.dashUntargetable,r.gapUntargetable),t.uniform3f(this.uLineLineColor,r.lineR,r.lineG,r.lineB),t.uniform3f(this.uLineInterceptColor,r.interceptR,r.interceptG,r.interceptB),t.uniform3f(this.uLineOutlineColor,r.outlineR,r.outlineG,r.outlineB),t.uniform3f(this.uLineInterceptOutlineColor,r.interceptOutlineR,r.interceptOutlineG,r.interceptOutlineB),t.bindVertexArray(this.lineVAO),t.drawArrays(t.TRIANGLE_STRIP,0,this.lineVertexCount),this.drawMarkers(e,n,i)}drawMarkers(e,t,n){let r=[];if(t.tUntargetableStart>=0&&(r.push([t.tUntargetableStart,0]),r.push([t.tUntargetableEnd,0])),t.tSamIntercept<1&&r.push([t.tSamIntercept,1]),r.length===0)return;let i=this.gl,a=this.settings.nukeTrajectory;i.useProgram(this.markerProgram),i.uniformMatrix3fv(this.uMarkerCamera,!1,e),i.uniform2f(this.uMarkerP0,t.p0x,t.p0y),i.uniform2f(this.uMarkerP1,t.p1x,t.p1y),i.uniform2f(this.uMarkerP2,t.p2x,t.p2y),i.uniform2f(this.uMarkerP3,t.p3x,t.p3y),i.uniform1f(this.uMarkerPixelSize,n),i.uniform2f(this.uMarkerRadii,a.markerCircleRadius,a.markerXRadius),i.bindVertexArray(this.markerVAO);for(let[e,t]of r)i.uniform4f(this.uMarker,e,t,0,0),i.drawArrays(i.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.lineProgram),e.deleteProgram(this.markerProgram),e.deleteVertexArray(this.lineVAO),e.deleteVertexArray(this.markerVAO)}},Ma=`#version 300 es
precision highp float;

in vec2 vLocalPos;
flat in vec3 vColor;
flat in float vIntensity;

uniform float uFalloffPower;

out vec4 fragColor;

void main() {
  float dist = length(vLocalPos) * 2.0; // [0, 1] from center to edge
  if (dist > 1.0) discard;

  float falloff = pow(1.0 - dist, uFalloffPower);

  float brightness = falloff * vIntensity;
  fragColor = vec4(vColor * brightness, brightness);
}
`,Na=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;         // quad corner [0,1]
layout(location = 1) in vec3 aLightPosIdx;  // x, y, typeIdx
layout(location = 2) in vec3 aLightColor;   // r, g, b

uniform mat3 uCamera;
uniform float uRadiusMultiplier;
uniform float uRadius[MAX_LIGHT_TYPES];
uniform float uIntensity[MAX_LIGHT_TYPES];

out vec2 vLocalPos;
flat out vec3 vColor;
flat out float vIntensity;

void main() {
  int typeIdx = int(aLightPosIdx.z);
  float radius = uRadius[typeIdx] * uRadiusMultiplier;
  vec2 center = vec2(aLightPosIdx.x + 0.5, aLightPosIdx.y + 0.5);
  vec2 worldPos = center + (aPos - 0.5) * radius * 2.0;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vLocalPos = aPos - 0.5; // [-0.5, 0.5]
  vColor = aLightColor.rgb;
  vIntensity = uIntensity[typeIdx];
}
`,Pa={[at]:{r:1,g:.85,b:.5,radius:18,intensity:1.2},[st]:{r:1,g:.75,b:.4,radius:18,intensity:1.2},[mt]:{r:1,g:.6,b:.3,radius:18,intensity:1.2},[wt]:{r:1,g:.55,b:.12,radius:20,intensity:1.3},[bt]:{r:.25,g:.75,b:1,radius:20,intensity:1.3},[kt]:{r:.35,g:1,b:.55,radius:20,intensity:1.3},[Ct]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[pt]:{r:.8,g:.85,b:1,radius:18,intensity:1.2},[ft]:{r:1,g:.4,b:.2,radius:18,intensity:1.2},[nt]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[Tt]:{r:.9,g:.8,b:.6,radius:6,intensity:2.7},[Je]:{r:.9,g:.85,b:.7,radius:10,intensity:2.8},[Ke]:{r:1,g:.9,b:.7,radius:16,intensity:1.1},[Ie]:{r:1,g:.6,b:.3,radius:8,intensity:.5},[et]:{r:1,g:.95,b:.6,radius:22,intensity:1.3},[gt]:{r:1,g:.9,b:.7,radius:18,intensity:1.2},[St]:{r:1,g:.6,b:.3,radius:12,intensity:1},[At]:{r:1,g:.85,b:.5,radius:6,intensity:.5}},Fa=6,Ia=Fa*4,La=64,Ra=12288,za=5,Ba=class{constructor(e,t,n,r,i){this.lightCount=0,this.typeToIdx=new Map,this.radiusArr=new Float32Array(La),this.intensityArr=new Float32Array(La),this.smoothSegs=[],this.lastUnitsUpdateMs=0,this.gl=e,this.settings=r,this.paletteData=n,this.mapW=t.mapWidth,this.tickIntervalMs=i.msPerTick(),this.typeNames=t.unitTypes,this.typeConfigs=Array(t.unitTypes.length);for(let e=0;e<t.unitTypes.length;e++)this.typeConfigs[e]=Pa[t.unitTypes[e]],this.typeToIdx.set(t.unitTypes[e],e);this.lightProg=V(e,R(Na,{MAX_LIGHT_TYPES:La}),Ma,`PointLightPass`),this.uLightCam=e.getUniformLocation(this.lightProg,`uCamera`),this.uRadiusMultiplier=e.getUniformLocation(this.lightProg,`uRadiusMultiplier`),this.uRadiusArr=e.getUniformLocation(this.lightProg,`uRadius`),this.uIntensityArr=e.getUniformLocation(this.lightProg,`uIntensity`),this.uFalloffPower=e.getUniformLocation(this.lightProg,`uFalloffPower`),this.lightData=new Float32Array(Ra*Fa),this.lightBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferData(e.ARRAY_BUFFER,this.lightData.byteLength,e.DYNAMIC_DRAW),this.lightVao=e.createVertexArray(),e.bindVertexArray(this.lightVao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,Ia,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,Ia,12),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}updateLights(e){let t=0;this.smoothSegs.length=0,this.lastUnitsUpdateMs=performance.now();for(let n of e.values()){if(!n.isActive||n.waitTicks>0)continue;let e=this.typeToIdx.get(n.unitType);if(e===void 0||!this.typeConfigs[e])continue;if(t>=Ra)break;let r=n.pos%this.mapW,i=(n.pos-r)/this.mapW;if(Be.has(n.unitType)&&n.lastPos!==n.pos){let e=n.lastPos%this.mapW,a=(n.lastPos-e)/this.mapW;this.smoothSegs.push(t,e,a,r,i)}let a=t*Fa,o=n.ownerID*4;this.lightData[a+0]=r,this.lightData[a+1]=i,this.lightData[a+2]=e,this.lightData[a+3]=this.paletteData[o],this.lightData[a+4]=this.paletteData[o+1],this.lightData[a+5]=this.paletteData[o+2],t++}if(this.lightCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.lightBuf),e.bufferSubData(e.ARRAY_BUFFER,0,this.lightData,0,t*Fa)}}applySmoothing(){let e=this.smoothSegs;if(e.length===0)return;let t=Math.min(1,(performance.now()-this.lastUnitsUpdateMs)/this.tickIntervalMs),n=this.lightData,r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.lightBuf);for(let i=0;i<e.length;i+=za){let a=e[i],o=a*Fa;n[o+0]=e[i+1]+(e[i+3]-e[i+1])*t,n[o+1]=e[i+2]+(e[i+4]-e[i+2])*t,r.bufferSubData(r.ARRAY_BUFFER,a*Ia,n,o,2)}}draw(e){if(this.lightCount===0)return;this.applySmoothing();let t=this.gl,n=this.settings.lighting;t.useProgram(this.lightProg),t.uniformMatrix3fv(this.uLightCam,!1,e),t.uniform1f(this.uRadiusMultiplier,n.lightRadiusMultiplier),t.uniform1f(this.uFalloffPower,n.falloffPower);for(let e=0;e<this.typeNames.length;e++){let t=this.typeConfigs[e];if(!t)continue;let n=this.settings.lightConfigs[this.typeNames[e]];this.radiusArr[e]=n?.radius??t.radius,this.intensityArr[e]=n?.intensity??t.intensity}t.uniform1fv(this.uRadiusArr,this.radiusArr),t.uniform1fv(this.uIntensityArr,this.intensityArr),t.bindVertexArray(this.lightVao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.lightCount)}dispose(){let e=this.gl;e.deleteProgram(this.lightProg),e.deleteVertexArray(this.lightVao),e.deleteBuffer(this.lightBuf)}},Va=`#version 300 es
precision highp float;

in vec2 vLocal; // [-1, +1]

uniform float uRadius;
uniform vec3 uColor;

out vec4 fragColor;

void main() {
  float dist = length(vLocal) * (uRadius + 1.0); // world-space distance from center
  float edge = uRadius;

  // Smooth fill: inside the circle at 20% white
  float fill = 1.0 - smoothstep(edge - 0.5, edge + 0.5, dist);

  // Stroke: 1-tile-wide ring at the edge
  float strokeInner = edge - 1.0;
  float strokeOuter = edge;
  float stroke = smoothstep(strokeInner - 0.5, strokeInner + 0.5, dist)
               * (1.0 - smoothstep(strokeOuter - 0.5, strokeOuter + 0.5, dist));

  float alpha = fill * 0.2 + stroke * 0.5;
  if (alpha < 0.001) discard;

  fragColor = vec4(uColor, alpha);
}
`,Ha=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;   // world-space circle center (tile coords)
uniform float uRadius;  // world-space radius in tiles

out vec2 vLocal; // [-1, +1] local coords within the quad

void main() {
  // Map [0,1] → [-1,+1]
  vLocal = aPos * 2.0 - 1.0;

  // Expand quad to cover circle bbox in world space
  // Add 1-tile padding for the stroke
  float r = uRadius + 1.0;
  vec2 worldPos = uCenter + 0.5 + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ua=class{constructor(e){this.centerX=0,this.centerY=0,this.radius=0,this.warning=!1,this.gl=e,this.program=V(e,Ha,Va,`RangeCirclePass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uRadius=e.getUniformLocation(this.program,`uRadius`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}updateGhostPreview(e){e&&e.rangeRadius>0?(this.centerX=e.radiusTileX,this.centerY=e.radiusTileY,this.radius=e.rangeRadius,this.warning=e.rangeWarning):(this.radius=0,this.warning=!1)}draw(e){if(this.radius<=0)return;let t=this.gl;t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.bindVertexArray(this.vao),t.uniform2f(this.uCenter,this.centerX,this.centerY),t.uniform1f(this.uRadius,this.radius),this.warning?t.uniform3f(this.uColor,1,.2,.2):t.uniform3f(this.uColor,1,1,1),t.drawArrays(t.TRIANGLES,0,6)}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Wa=50,Ga=150,Ka=Ga*Ga,qa=32,Ja=150,Ya=480,Xa=5,Za=.75;function Qa(e){return Ja-Ya/(e+Xa)}function $a(e,t,n){return e<t?t:e>n?n:e}function eo(e,t,n,r,i,a){let o=n-e,s=r-t,c=Math.sqrt(o*o+s*s),l=Math.max(c/3,Wa),u=a?-1:1;return{p0x:e,p0y:t,p1x:e+o/4,p1y:$a(t+s/4+u*l,0,i-1),p2x:e+o*3/4,p2y:$a(t+s*3/4+u*l,0,i-1),p3x:n,p3y:r}}function to(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=!1;for(let h=0;h<10;h++){let h=(d+f)*.5,g=((e*h+t)*h+n)*h+r+.5|0,_=((i*h+a)*h+o)*h+s+.5|0,v=g-c,y=_-l,b=v*v+y*y<=u;b&&(m=!0),(p?b:!b)?d=h:f=h}if(!p&&!m){let d=((e*f+t)*f+n)*f+r+.5|0,p=((i*f+a)*f+o)*f+s+.5|0,m=d-c,h=p-l;if(m*m+h*h>u)return 1}return(d+f)*.5}function no(e,t,n,r,i,a){let o=-1,s=-1,c=1,l=1/qa,u=3*(e.p1x-e.p0x),d=3*(e.p2x-2*e.p1x+e.p0x),f=r-3*e.p2x+3*e.p1x-e.p0x,p=e.p0x,m=3*(e.p1y-e.p0y),h=3*(e.p2y-2*e.p1y+e.p0y),g=i-3*e.p2y+3*e.p1y-e.p0y,_=e.p0y,v=r-t,y=i-n,b=v*v+y*y>4*Ka,x=a.length,S=e.p0x+.5|0,C=e.p0y+.5|0;for(let e=1;e<=qa;e++){let v=e*l,y=v-l,w=((f*v+d)*v+u)*v+p+.5|0,T=((g*v+h)*v+m)*v+_+.5|0,E=!1;if(b){if(o<0){let e=w-t,a=T-n;if(e*e+a*a>Ka){let e=w-r,a=T-i;e*e+a*a>=Ka&&(o=to(f,d,u,p,g,h,m,_,t,n,Ka,y,v,!0),E=!0)}}else if(s<0){let e=w-r,t=T-i;e*e+t*t<Ka?s=to(f,d,u,p,g,h,m,_,r,i,Ka,y,v,!1):E=!0}}if(s>=0&&y<s&&v>=s&&x>0){let e=((f*s+d)*s+u)*s+p+.5|0,t=((g*s+h)*s+m)*s+_+.5|0;for(let n=0;n<x;n++){let r=a[n],i=e-r.x,o=t-r.y;if(i*i+o*o<=r.r*r.r){c=s;break}}if(c<1)break}if(!E&&x>0){let e=w-S,t=T-C,n=e*e+t*t,r=n===0?0:1/n,i=Math.sqrt(n)+Ja+Za,o=i*i;for(let i=0;i<x;i++){let l=a[i],b=l.x-S,x=l.y-C,w=b*b+x*x;if(w>o)continue;let T,E=b*e+x*t;T=E<=0?w:E>=n?w+n-2*E:w-E*E*r;let D=l.r*l.r,O=(l.r+Za)*(l.r+Za);if(T<=O){let e=s>=0&&y<s?s:y,t=to(f,d,u,p,g,h,m,_,l.x,l.y,D,e,v,!1);if(t<1){c=t;break}}}if(c<1)break}S=w,C=T}return{tUntargetableStart:o,tUntargetableEnd:s,tSamIntercept:c}}function ro(e,t,n,r,i,a,o){let s=eo(e,t,n,r,i,a),c=no(s,e,t,Math.round(n),Math.round(r),o);return{...s,...c}}var io=`#version 300 es
precision highp float;

in vec2 vLocal;
flat in float vRadius;
flat in vec4 vColor;
flat in vec2 vArcBounds;
flat in float vSpin;

uniform float uTime;
uniform float uOutline;        // 1.0 = owner mode (outline edges), 0.0 = perspective
uniform float uStrokeWidth;    // ring half-width (world units)
uniform float uDashLen;        // dash length (world units)
uniform float uGapLen;         // gap length (world units)
uniform float uRotationSpeed;  // rotation (world units/sec)
uniform float uAlpha;          // base opacity
uniform float uOutlineWidth;   // outline border width (world units)
uniform float uOutlineSoftness; // smoothstep range (0 = hard edge)

out vec4 fragColor;

const float TWO_PI = 6.2831853;

void main() {
  float paddedR = vRadius + 2.0;
  float dist = length(vLocal) * paddedR;

  // Ring mask: stroke centered on the circle edge
  float ringAlpha = smoothstep(vRadius - uStrokeWidth - 0.5, vRadius - uStrokeWidth, dist)
                  * (1.0 - smoothstep(vRadius + uStrokeWidth, vRadius + uStrokeWidth + 0.5, dist));

  if (ringAlpha < 0.01) discard;

  // Arc clipping
  float angle = atan(vLocal.y, vLocal.x);
  float normAngle = angle < 0.0 ? angle + TWO_PI : angle;
  bool fullCircle = vArcBounds.y - vArcBounds.x >= TWO_PI - 0.001;
  if (!fullCircle) {
    if (normAngle < vArcBounds.x || normAngle > vArcBounds.y) discard;
  }

  // Dash pattern along circumference
  float arcPos = angle * vRadius;
  float period = uDashLen + uGapLen;
  float dashPhase = mod(arcPos + uTime * uRotationSpeed * vSpin, period);
  float dashAlpha = 1.0 - smoothstep(uDashLen - 0.5, uDashLen + 0.5, dashPhase);

  float alpha = ringAlpha * dashAlpha * uAlpha * vColor.a;
  if (alpha < 0.01) discard;

  // Outline: darken fragments near any edge of each dash segment
  float edgeFade = 1.0;
  if (uOutline > 0.5) {
    float ow = uOutlineWidth;
    float soft = uOutlineSoftness;
    // Radial edges (inner/outer ring boundary)
    float fromInner = dist - (vRadius - uStrokeWidth);
    float fromOuter = (vRadius + uStrokeWidth) - dist;
    edgeFade = min(smoothstep(ow - soft, ow + soft, fromInner),
                   smoothstep(ow - soft, ow + soft, fromOuter));
    // Dash start/end edges (circumferential)
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, dashPhase));
    edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, uDashLen - dashPhase));
    // Arc endpoint edges (where circle union clips the arc)
    if (!fullCircle) {
      float arcDistStart = (normAngle - vArcBounds.x) * vRadius;
      float arcDistEnd   = (vArcBounds.y - normAngle) * vRadius;
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistStart));
      edgeFade = min(edgeFade, smoothstep(ow - soft, ow + soft, arcDistEnd));
    }
  }

  vec3 finalColor = vColor.rgb * edgeFade;
  fragColor = vec4(finalColor, alpha);
}
`,ao=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: x, y, radius
layout(location = 1) in vec3 aInstance;
// Per-instance: r, g, b, alpha
layout(location = 2) in vec4 aColor;
// Per-instance: arcStart, arcEnd, spin
layout(location = 3) in vec3 aArcBounds;

uniform mat3 uCamera;

out vec2 vLocal;        // [-1, +1] local coords
flat out float vRadius; // world-space radius for this instance
flat out vec4 vColor;   // relationship color + instance alpha
flat out vec2 vArcBounds; // arc start/end in [0, 2PI)
flat out float vSpin;   // 1.0 = spinning, 0.0 = static

void main() {
  vLocal = aPos * 2.0 - 1.0;
  vRadius = aInstance.z;
  vColor = aColor;
  vArcBounds = aArcBounds.xy;
  vSpin = aArcBounds.z;

  // Expand quad to cover circle bbox + padding for stroke
  float r = aInstance.z + 2.0;
  vec2 center = aInstance.xy + 0.5;
  vec2 worldPos = center + vLocal * r;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,oo=Math.PI*2,so=1e-9,co=100,lo=10,uo=[0,1,0],fo=[1,1,0],po=[1,0,0];function mo(e,t){return e[0]-t[0]}function ho(e){for(;e<0;)e+=oo;for(;e>=oo;)e-=oo;return e}function go(e){if(e.length===0)return[];let t=[];for(let[n,r]of e){let e=ho(n),i=ho(r);i<e?(t.push([e,oo]),t.push([0,i])):t.push([e,i])}t.sort(mo);let n=[],r=[t[0][0],t[0][1]];for(let e=1;e<t.length;e++){let i=t[e];i[0]<=r[1]+so?r[1]=Math.max(r[1],i[1]):(n.push(r),r=[i[0],i[1]])}return n.push(r),n}function _o(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r];if(e===i)continue;let a=i.x-e.x,o=i.y-e.y,s=a*a+o*o;if(s<=so)continue;let c=i.radius-e.radius;if(c>=0&&s<=c*c+so)return[];let l=e.radius+i.radius;if(s>=l*l-so)continue;let u=Math.sqrt(s),d=(e.radius*e.radius+s-i.radius*i.radius)/(2*e.radius*u),f=Math.acos(Math.max(-1,Math.min(1,d))),p=Math.atan2(o,a);n.push([p-f,p+f])}let r=go(n);if(r.length===0)return[[0,oo]];let i=[],a=0;for(let e=0;e<r.length;e++){let[t,n]=r[e];t>a+so&&i.push([a,t]),a=Math.max(a,n)}return a<oo-so&&i.push([a,oo]),i}var vo=class e{static{this.GEOMETRY_REFRESH_INTERVAL_MS=50}constructor(e,t,n){this.instanceCount=0,this.visible=!1,this.mapW=0,this.startTime=performance.now(),this.localPlayerID=0,this.allies=new Set,this.currentTick=0,this.lastTickTime=performance.now(),this.hasUpgradingSAM=!1,this.groupBuckets=[],this.lastGeometryTime=0,this.dirtyGroups=new Set,this.colorScratch=[0,0,0],this.paletteData=null,this.colorMode=`perspective`,this.allianceClusters=new Map,this.lastStructures=null,this.gl=e,this.mapW=t,this.settings=n,this.program=V(e,ao,io,`SamRadiusPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uOutline=e.getUniformLocation(this.program,`uOutline`),this.uStrokeWidth=e.getUniformLocation(this.program,`uStrokeWidth`),this.uDashLen=e.getUniformLocation(this.program,`uDashLen`),this.uGapLen=e.getUniformLocation(this.program,`uGapLen`),this.uRotationSpeed=e.getUniformLocation(this.program,`uRotationSpeed`),this.uAlpha=e.getUniformLocation(this.program,`uAlpha`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uOutlineSoftness=e.getUniformLocation(this.program,`uOutlineSoftness`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();this.instanceBuf=new ct(e,i,64,lo),e.bindBuffer(e.ARRAY_BUFFER,i);let a=lo*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,a,12),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,3,e.FLOAT,!1,a,28),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}setAllies(e){this.allies=e,this.rebuild()}setPaletteData(e){this.paletteData=e}setColorMode(e){e!==this.colorMode&&(this.colorMode=e,this.rebuild())}setAllianceClusters(e){this.allianceClusters=e}setTick(e){e!==this.currentTick&&(this.currentTick=e,this.lastTickTime=performance.now(),this.hasUpgradingSAM&&this.rebuild())}getContinuousTick(){let e=Math.min(1,Math.max(0,(performance.now()-this.lastTickTime)/co));return this.currentTick+e}rebuild(){this.lastStructures&&this.updateStructures(this.lastStructures)}updateStructures(e,t){t!==void 0&&(this.currentTick=t,this.lastTickTime=performance.now()),this.lastGeometryTime=performance.now(),this.lastStructures=e;let n=this.collectSAMCircles(e,this.getContinuousTick());this.uploadInstances(n)}getSAMBaseGroup(e,t){return this.colorMode===`owner`?this.allianceClusters.get(e.ownerID)??e.ownerID:+!t}getSAMColor(e,t){if(this.colorMode===`owner`&&this.paletteData){let t=e*4;if(t+2<this.paletteData.length)return this.colorScratch[0]=this.paletteData[t],this.colorScratch[1]=this.paletteData[t+1],this.colorScratch[2]=this.paletteData[t+2],this.colorScratch}return e===this.localPlayerID?uo:this.allies.has(e)?fo:po}collectSAMCircles(e,t){let n=[],r=this.mapW;this.dirtyGroups.clear();for(let n of e.values()){if(n.unitType!==`SAM Launcher`||!n.isActive)continue;let e=n.ownerID===this.localPlayerID||this.allies.has(n.ownerID),r=this.getSAMBaseGroup(n,e),i=n.samUpgradeStartTick,a=n.samUpgradeDuration??0;i!==null&&t>=i&&t-i<a&&this.dirtyGroups.add(r)}this.hasUpgradingSAM=this.dirtyGroups.size>0;for(let i of e.values()){if(i.unitType!==`SAM Launcher`||!i.isActive)continue;let e=i.ownerID===this.localPlayerID||this.allies.has(i.ownerID),a=this.getSAMBaseGroup(i,e),o=this.getSAMColor(i.ownerID,e),s=i.pos%r,c=(i.pos-s)/r;this.pushSAMCircles(n,i,s,c,o,a,t,e,this.dirtyGroups.has(a))}return n}pushSAMCircles(e,t,n,r,i,a,o,s,c){let l=t.samUpgradeStartTick,u=t.samUpgradeDuration??0,d=a*2,f=a*2+1;if(l!==null&&o>=l&&o-l<u){let a=o-l,c=Math.max(0,Math.min(1,a/u)),p=Qa(t.samUpgradeTargetLevel??0),m=t.samUpgradeStartRange??0,h=m+(p-m)*c;e.push({x:n,y:r,radius:h,r:i[0],g:i[1],b:i[2],alpha:s?1:.35,group:d,spin:+!!s}),e.push({x:n,y:r,radius:p,r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}else e.push({x:n,y:r,radius:Qa(t.level),r:i[0],g:i[1],b:i[2],alpha:1,group:d,spin:1}),c&&e.push({x:n,y:r,radius:Qa(t.level),r:i[0],g:i[1],b:i[2],alpha:s?.35:1,group:f,spin:+!s})}uploadInstances(e){for(let e=0;e<this.groupBuckets.length;e++){let t=this.groupBuckets[e];t&&(t.length=0)}for(let t=0;t<e.length;t++){let n=e[t],r=this.groupBuckets[n.group];r||(r=[],this.groupBuckets[n.group]=r),r.push(n)}let t=0;for(let e=0;e<this.groupBuckets.length;e++){let n=this.groupBuckets[e];if(!(!n||n.length===0))for(let e=0;e<n.length;e++){let r=n[e],i=_o(r,n);for(let e=0;e<i.length;e++){let[n,a]=i[e];this.instanceBuf.ensureCapacity(t+1);let o=t*lo,s=this.instanceBuf.float32;s[o+0]=r.x,s[o+1]=r.y,s[o+2]=r.radius,s[o+3]=r.r,s[o+4]=r.g,s[o+5]=r.b,s[o+6]=r.alpha,s[o+7]=n,s[o+8]=a,s[o+9]=r.spin,t++}}}if(this.instanceCount=t,t>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,t*lo)}}setVisible(e){this.visible=e}draw(t){if(!this.visible||this.instanceCount===0)return;let n=performance.now();if(this.hasUpgradingSAM&&this.lastStructures&&n-this.lastGeometryTime>=e.GEOMETRY_REFRESH_INTERVAL_MS){this.lastGeometryTime=n;let e=this.collectSAMCircles(this.lastStructures,this.getContinuousTick());this.uploadInstances(e)}let r=this.gl,i=(performance.now()-this.startTime)/1e3,a=this.settings.samRadius;r.useProgram(this.program),r.uniformMatrix3fv(this.uCamera,!1,t),r.uniform1f(this.uTime,i),r.uniform1f(this.uOutline,+(this.colorMode===`owner`)),r.uniform1f(this.uStrokeWidth,a.strokeWidth),r.uniform1f(this.uDashLen,a.dashLen),r.uniform1f(this.uGapLen,a.gapLen),r.uniform1f(this.uRotationSpeed,a.rotationSpeed),r.uniform1f(this.uAlpha,a.alpha),r.uniform1f(this.uOutlineWidth,a.outlineWidth),r.uniform1f(this.uOutlineSoftness,a.outlineSoftness),r.bindVertexArray(this.vao),r.drawArraysInstanced(r.TRIANGLES,0,6,this.instanceCount)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},yo=`#version 300 es
precision highp float;

in vec2 vWorld;

uniform vec2 uCenter;
uniform float uHalfSize;
uniform float uTime;     // frame tick counter (increments each frame)
uniform vec3 uColor;     // RGB [0-1], already lightened

out vec4 fragColor;

void main() {
  // Tile-space relative to center
  vec2 tile = floor(vWorld);
  vec2 rel = tile - floor(uCenter);
  float hs = uHalfSize;

  // Is this tile on the border of the selection box?
  bool inXRange = rel.x >= -hs && rel.x <= hs;
  bool inYRange = rel.y >= -hs && rel.y <= hs;
  bool isXEdge = abs(rel.x - hs) < 0.5 || abs(rel.x + hs) < 0.5;
  bool isYEdge = abs(rel.y - hs) < 0.5 || abs(rel.y + hs) < 0.5;

  bool onBorder = (isXEdge && inYRange) || (isYEdge && inXRange);
  if (!onBorder) discard;

  // Stipple: checkerboard pattern (every other tile)
  float stipple = mod(tile.x + tile.y, 2.0);
  if (stipple > 0.5) discard;

  // Pulsating alpha (matches game: base 200/255 ± 55/255)
  float baseAlpha = 0.784;  // 200/255
  float pulseAmp  = 0.216;  // 55/255
  float alpha = baseAlpha + sin(uTime * 0.1) * pulseAmp;

  fragColor = vec4(uColor, alpha);
}
`,bo=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

uniform mat3 uCamera;
uniform vec2 uCenter;    // world-space tile center (integer)
uniform float uHalfSize; // box half-size in tiles

out vec2 vWorld; // world-space position

void main() {
  // Map [0,1] → [-1,+1]
  vec2 local = aPos * 2.0 - 1.0;

  // Expand quad to cover box + 1-tile padding for AA
  float r = uHalfSize + 1.0;
  vWorld = uCenter + 0.5 + local * r;

  vec3 clip = uCamera * vec3(vWorld, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,xo=6,So=class{constructor(e){this.selections=[],this.gl=e,this.program=V(e,bo,yo,`SelectionBoxPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uCenter=e.getUniformLocation(this.program,`uCenter`),this.uHalfSize=e.getUniformLocation(this.program,`uHalfSize`),this.uTime=e.getUniformLocation(this.program,`uTime`),this.uColor=e.getUniformLocation(this.program,`uColor`),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}setSelections(e){this.selections.length=0;for(let t=0;t<e.length;t++)this.selections.push(e[t])}update(e,t,n,r,i,a){this.selections.length=0,e&&this.selections.push({centerX:t,centerY:n,r,g:i,b:a})}hide(){this.selections.length=0}draw(e,t){if(this.selections.length===0)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uHalfSize,xo),n.uniform1f(this.uTime,t),n.bindVertexArray(this.vao);for(let e=0;e<this.selections.length;e++){let t=this.selections[e];n.uniform2f(this.uCenter,t.centerX,t.centerY),n.uniform3f(this.uColor,t.r,t.g,t.b),n.drawArrays(n.TRIANGLES,0,6)}}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteVertexArray(this.vao)}},Co=`#version 300 es
precision highp float;

// Tints the blurred aura with the glow color and the breathing intensity
// (alpha * pulse), premultiplied for an additive composite over the map.
uniform sampler2D uTex;
uniform vec3 uGlowColor;
uniform float uIntensity; // glow alpha * pulse (0 = invisible)
in vec2 vUV;
out vec4 fragColor;

void main() {
  float g = texture(uTex, vUV).r;
  float a = clamp(g * uIntensity, 0.0, 1.0);
  fragColor = vec4(uGlowColor * a, a); // premultiplied
}
`,wo=`#version 300 es
precision highp float;
precision highp usampler2D;

// Emit 1 where a "small" player owns a tile. Territory is sparse (often lone
// tiles), so each cell scans its whole TILE_SCALE block instead of point-
// sampling, else single tiles get missed. OWNER_MASK/TILE_SCALE are injected.

uniform usampler2D uTileTex;      // R16UI — tile state (owner in low bits)
uniform usampler2D uHighlightSet; // R8UI, 1px per owner — 1 = highlighted
uniform vec2 uMapSize;

out vec4 fragColor;

void main() {
  ivec2 base = ivec2(gl_FragCoord.xy) * TILE_SCALE;
  for (int j = 0; j < TILE_SCALE; j++) {
    for (int i = 0; i < TILE_SCALE; i++) {
      ivec2 tc = base + ivec2(i, j);
      if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) continue;
      uint owner = texelFetch(uTileTex, tc, 0).r & uint(OWNER_MASK);
      if (owner != 0u &&
          texelFetch(uHighlightSet, ivec2(int(owner), 0), 0).r > 0u) {
        fragColor = vec4(1.0);
        return;
      }
    }
  }
  discard;
}
`,To=Xe(),Eo=4,Do=class{constructor(e,t,n,r,i){this.active=!1,this.dirty=!1,this.animTime=0,this.lastTime=0,this.gl=e,this.settings=i,this.mapW=t,this.mapH=n,this.tileTex=r,this.extractProg=V(e,zr,R(wo,{...tt,TILE_SCALE:Eo}),`SmallPlayerGlowPass.extractProg`),this.uExtractMapSize=e.getUniformLocation(this.extractProg,`uMapSize`),e.useProgram(this.extractProg),e.uniform1i(e.getUniformLocation(this.extractProg,`uTileTex`),0),e.uniform1i(e.getUniformLocation(this.extractProg,`uHighlightSet`),1),this.blurProg=V(e,lt,_i,`SmallPlayerGlowPass.blurProg`),this.uBlurDir=e.getUniformLocation(this.blurProg,`uDir`),e.useProgram(this.blurProg),e.uniform1i(e.getUniformLocation(this.blurProg,`uTex`),0),this.compositeProg=V(e,vi,Co,`SmallPlayerGlowPass.compositeProg`),this.uCompositeCam=e.getUniformLocation(this.compositeProg,`uCamera`),this.uCompositeMapSize=e.getUniformLocation(this.compositeProg,`uMapSize`),this.uGlowColor=e.getUniformLocation(this.compositeProg,`uGlowColor`),this.uIntensity=e.getUniformLocation(this.compositeProg,`uIntensity`),e.useProgram(this.compositeProg),e.uniform1i(e.getUniformLocation(this.compositeProg,`uTex`),0),this.setTex=B(e,{width:To,height:1,internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST});let a=Math.max(1,Math.ceil(t/Eo)),o=Math.max(1,Math.ceil(n/Eo));this.targetA=Le(e,a,o),this.targetB=Le(e,a,o),this.mapVao=Ue(e,t,n),this.quadVao=ze(e)}update(e){if(e===null){this.active=!1;return}let t=this.gl;t.bindTexture(t.TEXTURE_2D,this.setTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,Math.min(e.length,To),1,t.RED_INTEGER,t.UNSIGNED_BYTE,e),this.active=!0,this.dirty=!0}blurAxis(e,t,n,r){let i=this.gl;Ge(i,t,()=>{i.uniform2f(this.uBlurDir,n,r),i.bindTexture(i.TEXTURE_2D,e.tex),i.bindVertexArray(this.quadVao),i.drawArrays(i.TRIANGLES,0,6)})}draw(e){let t=Math.min(1,this.settings.strength);if(!this.active||t<=0)return;let n=this.gl,r=this.settings,i=n.canvas,a=this.targetA,o=this.targetB,s=performance.now();this.lastTime>0&&(this.animTime+=Math.min(s-this.lastTime,100)*r.pulseSpeed),this.lastTime=s;let c=.5+.5*Math.sin(this.animTime);this.dirty&&=(n.disable(n.BLEND),n.useProgram(this.extractProg),n.uniform2f(this.uExtractMapSize,this.mapW,this.mapH),Ge(n,a,()=>{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.tileTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.setTex),n.bindVertexArray(this.quadVao),n.drawArrays(n.TRIANGLES,0,6)}),n.useProgram(this.blurProg),n.activeTexture(n.TEXTURE0),this.blurAxis(a,o,1/a.w,0),this.blurAxis(o,a,0,1/o.h),!1),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),He(n,i.width,i.height,()=>{n.useProgram(this.compositeProg),n.uniformMatrix3fv(this.uCompositeCam,!1,e),n.uniform2f(this.uCompositeMapSize,this.mapW,this.mapH),n.uniform3fv(this.uGlowColor,r.color),n.uniform1f(this.uIntensity,r.alpha*c*t),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,a.tex),n.bindVertexArray(this.mapVao),n.drawArrays(n.TRIANGLES,0,6)}),n.bindVertexArray(null),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA)}dispose(){let e=this.gl;e.deleteProgram(this.extractProg),e.deleteProgram(this.blurProg),e.deleteProgram(this.compositeProg),e.deleteTexture(this.setTex),e.deleteTexture(this.targetA.tex),e.deleteTexture(this.targetB.tex),e.deleteFramebuffer(this.targetA.fbo),e.deleteFramebuffer(this.targetB.fbo),e.deleteVertexArray(this.mapVao),e.deleteVertexArray(this.quadVao)}},Oo=`#version 300 es
precision highp float;
precision highp usampler2D;

uniform usampler2D uTileTex;
uniform vec2 uMapSize;

uniform float uBreathRadius;   // normalized [0..1], animated via sin

// Configurable parameters (from render settings)
uniform float uHighlightRadiusSq; // tile highlight radius squared
uniform float uHighlightAlpha;    // tile highlight opacity
uniform vec4 uSelfRadii;          // (minR, maxR, _, _)
uniform vec4 uMateRadii;          // (minR, maxR, _, _)
uniform vec2 uGradientStops;      // (innerEdge, solidEnd)

in vec2 vWorldPos;
flat in vec2 vCenter;
flat in float vKind;   // 0 = enemy highlight, 1 = self ring, 2 = teammate ring
flat in vec3 vColor;

out vec4 fragColor;

void main() {
  float dx = vWorldPos.x - vCenter.x;
  float dy = vWorldPos.y - vCenter.y;
  float distSq = dx * dx + dy * dy;
  float dist = sqrt(distSq);

  // --- Enemy tile highlights: only unowned tiles within radius ---
  if (vKind < 0.5) {
    ivec2 tc = ivec2(floor(vWorldPos));
    if (tc.x < 0 || tc.y < 0 || tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y))
      discard;
    if (distSq > uHighlightRadiusSq) discard;
    uint raw = texelFetch(uTileTex, tc, 0).r;
    if ((raw & uint(OWNER_MASK)) != 0u) discard; // owned tile → no highlight
    fragColor = vec4(vColor, uHighlightAlpha);
    return;
  }

  // --- Breathing rings (self or teammate) ---
  float minR, maxR;
  vec3 color;
  if (vKind > 1.5) {
    minR = uMateRadii.x;
    maxR = uMateRadii.y;
    color = vColor;
  } else {
    minR = uSelfRadii.x;
    maxR = uSelfRadii.y;
    // Self ring pulses white → its base color in phase with the breath so one
    // end of the pulse always contrasts with the terrain.
    color = mix(vec3(1.0), vColor, uBreathRadius);
  }

  // Breathing ring: the gradient halo shrinks/expands in radius AND its
  // opacity pulses in phase with the breath — both driven by uBreathRadius.
  // Smooth bell shape: glow ramps up from center to the inner edge, stays
  // solid through the ring's body, then fades out past solidEnd.
  float scale = 0.5 + 0.65 * uBreathRadius; // 0.5 → 1.15 of base radius
  float bMinR = minR * scale;
  float bMaxR = maxR * scale;
  float range = bMaxR - bMinR;
  float t = (dist - bMinR) / range;
  float solidEnd = uGradientStops.y;
  float alpha = 0.0;
  if (dist < bMinR) {
    // Inner glow: transparent at the center (so your territory shows through)
    // ramping up to fully solid at the ring's inner edge.
    alpha = dist / max(bMinR, 0.001);
  } else if (t < solidEnd) {
    alpha = 1.0;
  } else if (t < 1.0) {
    alpha = 1.0 - (t - solidEnd) / (1.0 - solidEnd);
  }
  if (alpha <= 0.0) discard;
  // Opacity pulses 65% → 100% in phase with the radius.
  alpha *= 0.65 + 0.35 * uBreathRadius;
  fragColor = vec4(color, alpha);
}
`,ko=`#version 300 es
precision highp float;

// Unit quad [0,1]
layout(location = 0) in vec2 aPos;
// Per-instance: centerX, centerY, quadRadius, kind
//   kind: 0 = enemy tile highlight, 1 = self ring, 2 = teammate ring
layout(location = 1) in vec4 aInstance;
// Per-instance: r, g, b (base color)
layout(location = 2) in vec3 aColor;

uniform mat3 uCamera;

out vec2 vWorldPos;     // tile-space position of this fragment
flat out vec2 vCenter;  // spawn center (tile coords)
flat out float vKind;
flat out vec3 vColor;

void main() {
  vec2 local = aPos * 2.0 - 1.0; // [-1, +1]
  vec2 center = aInstance.xy;
  float r = aInstance.z;
  vKind = aInstance.w;
  vColor = aColor;
  vCenter = center;

  vec2 worldPos = center + local * r;
  vWorldPos = worldPos;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);
}
`,Ao=7,jo=1.15,Mo=1,No=0,Po=1,Fo=2,Io=class{constructor(e,t,n,r,i){this.active=!1,this.instanceCount=0,this.animTime=0,this.lastTime=0,this.gl=e,this.mapW=t,this.mapH=n,this.tileTex=r,this.settings=i,this.program=V(e,ko,R(Oo,{...tt}),`SpawnOverlayPass`),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uMapSize=e.getUniformLocation(this.program,`uMapSize`),this.uBreathRadius=e.getUniformLocation(this.program,`uBreathRadius`),this.uHighlightRadiusSq=e.getUniformLocation(this.program,`uHighlightRadiusSq`),this.uHighlightAlpha=e.getUniformLocation(this.program,`uHighlightAlpha`),this.uSelfRadii=e.getUniformLocation(this.program,`uSelfRadii`),this.uMateRadii=e.getUniformLocation(this.program,`uMateRadii`),this.uGradientStops=e.getUniformLocation(this.program,`uGradientStops`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uTileTex`),0),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let o=e.createBuffer();this.instanceBuf=new ct(e,o,64,Ao),e.bindBuffer(e.ARRAY_BUFFER,o);let s=Ao*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,s,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,s,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}update(e){if(this.active=e.length>0,!this.active){this.instanceCount=0;return}let t=this.settings,n=t.selfMaxRad*jo+Mo,r=t.mateMaxRad*jo+Mo,i=t.highlightRadius+Mo;this.instanceBuf.ensureCapacity(e.length);let a=this.instanceBuf.float32,o=0,s=(e,t,n)=>{let r=o*Ao;a[r+0]=e.x,a[r+1]=e.y,a[r+2]=n,a[r+3]=t,a[r+4]=e.r,a[r+5]=e.g,a[r+6]=e.b,o++};for(let t of e)!t.isSelf&&!t.isTeammate&&s(t,No,i);for(let t of e)t.isTeammate&&s(t,Fo,r);for(let t of e)t.isSelf&&s(t,Po,n);this.instanceCount=o;let c=this.gl;c.bindBuffer(c.ARRAY_BUFFER,this.instanceBuf.buffer),c.bufferSubData(c.ARRAY_BUFFER,0,this.instanceBuf.float32,0,o*Ao)}draw(e){if(!this.active||this.instanceCount===0)return;let t=this.gl,n=this.settings,r=performance.now();this.lastTime>0&&(this.animTime+=(r-this.lastTime)*n.animSpeed),this.lastTime=r;let i=.5+.5*Math.sin(this.animTime);t.useProgram(this.program),t.uniformMatrix3fv(this.uCamera,!1,e),t.uniform2f(this.uMapSize,this.mapW,this.mapH),t.uniform1f(this.uBreathRadius,i),t.uniform1f(this.uHighlightRadiusSq,n.highlightRadius*n.highlightRadius),t.uniform1f(this.uHighlightAlpha,n.highlightAlpha),t.uniform4f(this.uSelfRadii,n.selfMinRad,n.selfMaxRad,0,0),t.uniform4f(this.uMateRadii,n.mateMinRad,n.mateMaxRad,0,0),t.uniform2f(this.uGradientStops,n.gradientInnerEdge,n.gradientSolidEnd),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tileTex),t.bindVertexArray(this.vao),t.drawArraysInstanced(t.TRIANGLES,0,6,this.instanceCount),t.bindVertexArray(null)}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao)}},Lo=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;
uniform float uOutlineWidth;
uniform int   uHighlightMask;
uniform float uHighlightDimAlpha;
uniform int   uClassic; // 1 = round_6x6 bitmap font, 0 = overpass MSDF

in vec2 vUV;
flat in float vAlive;
flat in float vAtlasIdx;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlive <= 0.0) discard;

  vec3 color;
  float alpha;

  if (uClassic == 1) {
    // round_6x6_modified bitmap: white digits with a baked-in dark outline
    // on a transparent background (non-premultiplied RGBA).
    vec4 texel = texture(uAtlas, vUV);
    if (texel.a <= 0.0) discard;
    color = texel.rgb;
    alpha = texel.a;
  } else {
    // overpass-bold MSDF: white fill with a synthesized dark outline.
    vec3 msd = texture(uAtlas, vUV).rgb;
    float sd = median(msd.r, msd.g, msd.b);

    vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
    vec2 screenTexSize = 1.0 / fwidth(vUV);
    float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

    float screenPxDist = screenPxRange * (sd - 0.5);
    float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

    float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
    float effectiveOutline = min(uOutlineWidth, maxOutline);
    float outlineAlpha = clamp(screenPxDist + effectiveOutline + 0.5, 0.0, 1.0);

    color = mix(vec3(0.0), vec3(1.0), fillAlpha);
    alpha = outlineAlpha;
  }

  // Dim level text for non-highlighted structure types
  if (uHighlightMask != 0) {
    int bit = 1 << int(vAtlasIdx + 0.5);
    if ((uHighlightMask & bit) == 0) {
      alpha *= uHighlightDimAlpha;
    }
  }

  fragColor = vec4(color, alpha);
}
`,Ro=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
layout(location = 2) in float aAtlasIdx;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uZoom;

// Structure icon sizing (mirrors structure.vert.glsl)
uniform float uIconSize;
uniform float uDotsThreshold;
uniform float uScaleFactor;
uniform float uIconGrowZoom;

// Text sizing
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uLevelScale;
uniform float uLevelOffsetY;  // extra height above icon, in halfIconSize units

out vec2 vUV;
flat out float vAlive;
flat out float vAtlasIdx;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  // Same icon scale logic as structure.vert.glsl
  float iconScale;
  if (uZoom <= uDotsThreshold) {
    iconScale = 0.0;  // hidden in dots mode
  } else if (uZoom >= uIconGrowZoom) {
    // World-anchored: grow with the map past this zoom, matching the icons.
    iconScale = uZoom / uIconGrowZoom;
  } else {
    iconScale = min(1.0, uZoom / uScaleFactor);
  }

  // Cull when invisible
  if (iconScale <= 0.0 || charCode == 0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }
  vAlive = 1.0;
  vAtlasIdx = aAtlasIdx;

  float halfIconSize = uIconSize * iconScale * 0.5 / uZoom;

  // Level text scale: proportional to icon size
  float levelScale = halfIconSize * uLevelScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0); // xadvance, xoffset, yoffset, width
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0); // height, u0, v0, u1

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  // Skip degenerate glyphs
  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlive = 0.0;
    return;
  }

  // Position above icon center
  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;
  // above icon top edge; uLevelOffsetY raises (or lowers) it proportionally
  float yOff =
    -halfIconSize * (1.0 + uLevelOffsetY) - levelScale * uBase * 0.6;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,  // + xoffset
    baselineY + m0.z // + yoffset
  ) * levelScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * levelScale;

  vec2 worldPos = center + vec2(0.0, yOff) + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
}
`,zo=I(`fonts/round_6x6_modified.png`),Bo=I(`atlases/msdf-atlas.png`),Vo=[at,st,mt,Ct,pt,ft,wt,bt,kt,vt],Ho=4,Uo=5,Wo=Uo*4,Go=16,Ko=16,qo=208,Jo=114;function Yo(){let e=[];for(let t=0;t<=9;t++)e.push({id:48+t,char:String(t),width:16,height:16,xoffset:0,yoffset:0,xadvance:14,x:t*16,y:64,page:0});return e}var Xo=class{constructor(e,t,n){this.instanceCount=0,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.typeToAtlasCol=new Map,this.highlightMask=0,this.lastUnits=null,this.layoutClassic=null,this.gl=e,this.settings=n,this.mapW=t.mapWidth;for(let e=0;e<t.unitTypes.length;e++){let n=Vo.indexOf(t.unitTypes[e]);n>=0&&this.typeToAtlasCol.set(t.unitTypes[e],n)}this.kernTable=new Int8Array(384*384);let r=Yo(),i={fontSize:Go,base:Ko,scaleW:qo,scaleH:Jo,distanceRange:0,chars:r,kernings:[]};this.classic={glyph:Li(r),metricsTex:Bi(e,i),fontSize:i.fontSize,base:i.base,atlasScaleH:i.scaleH,distanceRange:i.distanceRange,atlasTex:null,atlasReady:!1};let a=Ii();this.msdf={glyph:Li(a.chars),metricsTex:Bi(e,a),fontSize:a.fontSize,base:a.base,atlasScaleH:a.scaleH,distanceRange:a.distanceRange,atlasTex:null,atlasReady:!1},this.program=V(e,Ro,Lo,`StructureLevelPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uIconSize=e.getUniformLocation(this.program,`uIconSize`),this.uDotsThreshold=e.getUniformLocation(this.program,`uDotsThreshold`),this.uScaleFactor=e.getUniformLocation(this.program,`uScaleFactor`),this.uIconGrowZoom=e.getUniformLocation(this.program,`uIconGrowZoom`),this.uFontSize=e.getUniformLocation(this.program,`uFontSize`),this.uAtlasScaleH=e.getUniformLocation(this.program,`uAtlasScaleH`),this.uBase=e.getUniformLocation(this.program,`uBase`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.uOutlineWidth=e.getUniformLocation(this.program,`uOutlineWidth`),this.uLevelScale=e.getUniformLocation(this.program,`uLevelScale`),this.uLevelOffsetY=e.getUniformLocation(this.program,`uLevelOffsetY`),this.uHighlightMask=e.getUniformLocation(this.program,`uHighlightMask`),this.uHighlightDimAlpha=e.getUniformLocation(this.program,`uHighlightDimAlpha`),this.uClassic=e.getUniformLocation(this.program,`uClassic`),this.loadAtlas(zo,this.classic),this.loadAtlas(Bo,this.msdf);let o=e.createBuffer();this.instanceBuf=new ct(e,o,4096,Uo),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,o),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,Wo,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,1,e.FLOAT,!1,Wo,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null)}loadAtlas(e,t){let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>{let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n),t.atlasTex=r,t.atlasReady=!0},n.src=e}updateStructures(e){this.lastUnits=e;let t=this.settings.structureLevel.classicFont;this.layoutClassic=t;let n=t?this.classic.glyph:this.msdf.glyph,r=0;for(let t of e.values()){if(!t.isActive||!Ze.has(t.unitType)||t.level<=1)continue;let e=t.level.toString();ua(e,n,this.kernTable,this.charCodes,this.cursors);let i=t.pos%this.mapW,a=(t.pos-i)/this.mapW,o=Math.min(e.length,Ho),s=this.typeToAtlasCol.get(t.unitType)??0;for(let e=0;e<o;e++){this.instanceBuf.ensureCapacity(r+1);let t=r*Uo,n=this.instanceBuf.float32;n[t+0]=i,n[t+1]=a,n[t+2]=this.cursors[e],n[t+3]=this.charCodes[e],n[t+4]=s,r++}}if(this.instanceCount=r,r>0){let e=this.gl;e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.instanceBuf.float32,0,r*Uo)}}draw(e,t){let n=this.settings.structureLevel.classicFont;this.lastUnits!==null&&this.layoutClassic!==n&&this.updateStructures(this.lastUnits);let r=n?this.classic:this.msdf;if(!r.atlasReady||this.instanceCount===0)return;let i=this.gl,a=this.settings.structure,o=this.settings.structureLevel;i.useProgram(this.program),i.uniformMatrix3fv(this.uCamera,!1,e),i.uniform1f(this.uZoom,t),i.uniform1f(this.uIconSize,a.iconSize),i.uniform1f(this.uDotsThreshold,a.dotsZoomThreshold),i.uniform1f(this.uScaleFactor,a.iconScaleFactorZoomedOut),i.uniform1f(this.uIconGrowZoom,a.iconGrowZoom),i.uniform1f(this.uFontSize,r.fontSize),i.uniform1f(this.uAtlasScaleH,r.atlasScaleH),i.uniform1f(this.uBase,r.base),i.uniform1f(this.uDistRange,r.distanceRange),i.uniform1f(this.uOutlineWidth,o.outlineWidth),i.uniform1f(this.uLevelScale,o.scale),i.uniform1f(this.uLevelOffsetY,o.offsetY),i.uniform1i(this.uHighlightMask,this.highlightMask),i.uniform1f(this.uHighlightDimAlpha,a.highlightDimAlpha),i.uniform1i(this.uClassic,+!!n),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,r.atlasTex),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,r.metricsTex),i.bindVertexArray(this.vao),i.drawArraysInstanced(i.TRIANGLES,0,6,this.instanceCount)}setHighlightTypes(e){let t=0;if(e)for(let n of e){let e=this.typeToAtlasCol.get(n);e!==void 0&&(t|=1<<e)}this.highlightMask=t}dispose(){let e=this.gl;e.deleteProgram(this.program),this.instanceBuf.dispose(),e.deleteVertexArray(this.vao),e.deleteTexture(this.classic.metricsTex),e.deleteTexture(this.msdf.metricsTex),this.classic.atlasTex&&e.deleteTexture(this.classic.atlasTex),this.msdf.atlasTex&&e.deleteTexture(this.msdf.atlasTex)}},Zo=`#version 300 es
precision highp float;

uniform sampler2D uAtlas;
uniform float uDistRange;

in vec2 vUV;
flat in float vAlpha;
flat in vec3 vColor;
flat in float vOutlineWidth;
out vec4 fragColor;

float median(float r, float g, float b) {
  return max(min(r, g), min(max(r, g), b));
}

void main() {
  if (vAlpha <= 0.0) discard;

  vec3 msd = texture(uAtlas, vUV).rgb;
  float sd = median(msd.r, msd.g, msd.b);

  vec2 unitRange = uDistRange / vec2(textureSize(uAtlas, 0));
  vec2 screenTexSize = 1.0 / fwidth(vUV);
  float screenPxRange = max(0.5 * dot(unitRange, screenTexSize), 1.0);

  float screenPxDist = screenPxRange * (sd - 0.5);
  float fillAlpha = clamp(screenPxDist + 0.5, 0.0, 1.0);

  // Colored text with dark outline
  float maxOutline = max(screenPxRange * 0.5 - 1.0, 0.0);
  float effectiveOutline = min(vOutlineWidth, maxOutline);
  float outlineDist = screenPxDist + effectiveOutline;
  float outlineAlpha = clamp(outlineDist + 0.5, 0.0, 1.0);

  // Soft dark halo extending past the hard outline — easier to read over
  // busy terrain. Uses whatever SDF range is left after the hard outline so
  // it can always fade fully to zero before hitting the SDF saturation
  // boundary (otherwise the glow clips at the glyph quad and looks square).
  // Quadratic falloff for a true glow shape — brightest right next to the
  // text, smoothly thinning to nothing.
  float glowExtent = max(screenPxRange * 0.5 - effectiveOutline - 0.5, 0.0);
  float glowT =
    clamp((outlineDist + glowExtent) / max(glowExtent, 0.0001), 0.0, 1.0);
  float glowAlpha = glowExtent > 0.0 ? glowT * glowT * 0.75 : 0.0;

  vec3 color = mix(vec3(0.0), vColor, fillAlpha);
  fragColor = vec4(color, max(outlineAlpha, glowAlpha) * vAlpha);
}
`,Qo=`#version 300 es
precision highp float;

layout(location = 0) in vec2 aPos;

// Per-instance: worldX, worldY, cursorX, charCode
layout(location = 1) in vec4 aInst;
// Per-instance: alpha, colorR, colorG, colorB
layout(location = 2) in vec4 aStyle;
// Per-instance: scale, outlineWidth
layout(location = 3) in vec2 aScaleOutline;

uniform sampler2D uGlyphMetrics;  // CHAR_RANGE x 2, RGBA32F

uniform mat3  uCamera;
uniform float uFontSize;
uniform float uAtlasScaleH;
uniform float uBase;
uniform float uZoom;
uniform float uMinScreenScale;  // minimum world-scale factor when zoomed out

out vec2 vUV;
flat out float vAlpha;
flat out vec3 vColor;
flat out float vOutlineWidth;

void main() {
  float worldX  = aInst.x;
  float worldY  = aInst.y;
  float cursorX = aInst.z;
  int charCode  = int(aInst.w);

  if (charCode == 0 || aStyle.x <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  // Per-instance scale (world units per font em).
  // Zoom-aware minimum: ensure popups don't shrink below minScreenScale when
  // zoomed out.  effectiveScale = max(scale, minScreenScale / zoom) so that
  // at low zoom the popup grows in world-space to maintain a minimum screen
  // footprint.
  float effectiveScale = max(aScaleOutline.x, uMinScreenScale / uZoom);
  float worldScale = effectiveScale / uFontSize;

  // Glyph metrics from data texture
  vec4 m0 = texelFetch(uGlyphMetrics, ivec2(charCode, 0), 0);
  vec4 m1 = texelFetch(uGlyphMetrics, ivec2(charCode, 1), 0);

  float glyphW = m0.w;
  float glyphH = m1.x;
  float u0 = m1.y;
  float v0 = m1.z;
  float u1 = m1.w;
  float v1 = v0 + glyphH / uAtlasScaleH;

  if (glyphW <= 0.0 || glyphH <= 0.0) {
    gl_Position = vec4(0.0);
    vUV = vec2(0.0);
    vAlpha = 0.0;
    vColor = vec3(1.0);
    vOutlineWidth = 0.0;
    return;
  }

  vec2 center = vec2(worldX + 0.5, worldY + 0.5);
  float baselineY = -uBase * 0.5;

  vec2 glyphOrigin = vec2(
    cursorX + m0.y,
    baselineY + m0.z
  ) * worldScale;

  vec2 glyphSize = vec2(glyphW, glyphH) * worldScale;

  vec2 worldPos = center + glyphOrigin + aPos * glyphSize;

  vec3 clip = uCamera * vec3(worldPos, 1.0);
  gl_Position = vec4(clip.xy, 0.0, 1.0);

  vUV = vec2(mix(u0, u1, aPos.x), mix(v0, v1, aPos.y));
  vAlpha = aStyle.x;
  vColor = aStyle.yzw;
  vOutlineWidth = aScaleOutline.y;
}
`,$o=I(`atlases/msdf-atlas.png`),es=10,ts=es*4,ns=2500,rs=8,is=6,as=2,os=1.4,ss=17,cs=1.2;function ls(e){return e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:e.toString()}var us=class{now(){return this.timeFn()}constructor(e,t,n){this.config=n,this.maxInstances=512,this.instanceCount=0,this.atlasTex=null,this.atlasReady=!1,this.charCodes=new Uint8Array(32),this.cursors=new Float32Array(32),this.active=[],this.ghostCostLabel=null,this.attackTroopLabels=[],this.mapW=0,this.timeFn=()=>performance.now(),this.gl=e,this.settings=t;let r=Ii();this.glyph=Li(r.chars),this.kernTable=new Int8Array(384*384),this.distanceRange=r.distanceRange,this.fontSize=r.fontSize,this.atlasScaleH=r.scaleH,this.base=r.base,this.program=V(e,Qo,Zo,`WorldTextPass`),e.useProgram(this.program),e.uniform1i(e.getUniformLocation(this.program,`uAtlas`),0),e.uniform1i(e.getUniformLocation(this.program,`uGlyphMetrics`),1),e.uniform1f(e.getUniformLocation(this.program,`uFontSize`),this.fontSize),e.uniform1f(e.getUniformLocation(this.program,`uAtlasScaleH`),this.atlasScaleH),e.uniform1f(e.getUniformLocation(this.program,`uBase`),this.base),this.uCamera=e.getUniformLocation(this.program,`uCamera`),this.uZoom=e.getUniformLocation(this.program,`uZoom`),this.uMinScreenScale=e.getUniformLocation(this.program,`uMinScreenScale`),this.uDistRange=e.getUniformLocation(this.program,`uDistRange`),this.glyphMetricsTex=Bi(e,r),this.loadAtlas(),this.instanceData=new Float32Array(this.maxInstances*es),this.instanceBuf=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.bufferData(e.ARRAY_BUFFER,this.instanceData.byteLength,e.DYNAMIC_DRAW),this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,this.instanceBuf),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,ts,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,4,e.FLOAT,!1,ts,16),e.vertexAttribDivisor(2,1),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,2,e.FLOAT,!1,ts,32),e.vertexAttribDivisor(3,1),e.bindVertexArray(null)}loadAtlas(){let e=new Image;e.crossOrigin=`anonymous`,e.onload=()=>{let t=this.gl,n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),this.atlasTex=n,this.atlasReady=!0},e.src=$o}setMapWidth(e){this.mapW=e}applyConquestEvents(e){let t=this.now();for(let n of e){let e=t-(n.tickAge??0)*this.config.msPerTick();t-e>=ns||this.active.push({x:n.x,y:n.y+rs,text:`+ `+ls(n.gold),startMs:e,lifetimeMs:ns,riseSpeed:0,colorR:1,colorG:1,colorB:1,scale:is,outlineWidth:as})}}applyBonusEvents(e){if(this.mapW===0)return;let t=this.now(),n=this.settings.bonusPopup;for(let r of e){if(r.gold===0)continue;let e=r.tile%this.mapW,i=Math.floor(r.tile/this.mapW),a=r.gold>=0?`+`:`-`;this.active.push({x:e,y:i+n.yOffset,text:a+` `+ls(Math.abs(r.gold)),startMs:t,lifetimeMs:n.lifetimeMs,riseSpeed:n.riseSpeed,colorR:n.colorR,colorG:n.colorG,colorB:n.colorB,scale:n.scale,outlineWidth:n.outlineWidth})}}setGhostCostLabel(e){if(e===null){this.ghostCostLabel=null;return}let t=1,n=1,r=1;e.canAfford?e.canPlace||(t=.6,n=.6,r=.6):(n=.3,r=.3),this.ghostCostLabel={x:e.tileX,y:e.tileY,text:e.cost>0?L(e.cost):``,topText:e.topText,colorR:t,colorG:n,colorB:r}}setAttackTroopLabels(e){this.attackTroopLabels=e}tick(e){if(this.active.length===0&&this.ghostCostLabel===null&&this.attackTroopLabels.length===0){this.instanceCount=0;return}let t=this.now();for(let e=this.active.length-1;e>=0;e--)t-this.active[e].startMs>=this.active[e].lifetimeMs&&(this.active[e]=this.active[this.active.length-1],this.active.pop());this.rebuildInstances(t,e)}rebuildInstances(e,t){let n=0,r=qe();for(let t of this.active){let r=e-t.startMs,i=Math.max(0,1-r/t.lifetimeMs);if(i<=0)continue;let a=t.riseSpeed>0?t.y-r/1e3*t.riseSpeed:t.y;ua(t.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let o=Math.min(t.text.length,32);for(let e=0;e<o;e++){if(this.charCodes[e]===0)continue;n>=this.maxInstances&&this.growBuffer();let r=n*es;this.instanceData[r+0]=t.x,this.instanceData[r+1]=a,this.instanceData[r+2]=this.cursors[e],this.instanceData[r+3]=this.charCodes[e],this.instanceData[r+4]=i,this.instanceData[r+5]=t.colorR,this.instanceData[r+6]=t.colorG,this.instanceData[r+7]=t.colorB,this.instanceData[r+8]=t.scale,this.instanceData[r+9]=t.outlineWidth,n++}}let i=ss*r/Math.max(t,1e-4);for(let e of this.attackTroopLabels){ua(e.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let t=Math.min(e.text.length,32);for(let r=0;r<t;r++){if(this.charCodes[r]===0)continue;n>=this.maxInstances&&this.growBuffer();let t=n*es;this.instanceData[t+0]=e.x,this.instanceData[t+1]=e.y,this.instanceData[t+2]=this.cursors[r],this.instanceData[t+3]=this.charCodes[r],this.instanceData[t+4]=1,this.instanceData[t+5]=e.colorR,this.instanceData[t+6]=e.colorG,this.instanceData[t+7]=e.colorB,this.instanceData[t+8]=i,this.instanceData[t+9]=cs,n++}}let a=this.ghostCostLabel;if(a){let e=1/Math.max(t,1e-4),i=this.settings.ghostCost.screenScale*r*e,o=a.y+this.settings.ghostCost.screenYOffset*r*e;if(a.topText){let t=a.y-30*r*e;ua(a.topText,this.glyph,this.kernTable,this.charCodes,this.cursors);let o=Math.min(a.topText.length,32);for(let e=0;e<o;e++){if(this.charCodes[e]===0)continue;n>=this.maxInstances&&this.growBuffer();let r=n*es;this.instanceData[r+0]=a.x,this.instanceData[r+1]=t,this.instanceData[r+2]=this.cursors[e],this.instanceData[r+3]=this.charCodes[e],this.instanceData[r+4]=1,this.instanceData[r+5]=a.colorR,this.instanceData[r+6]=a.colorG,this.instanceData[r+7]=a.colorB,this.instanceData[r+8]=i,this.instanceData[r+9]=os,n++}}if(a.text){ua(a.text,this.glyph,this.kernTable,this.charCodes,this.cursors);let e=Math.min(a.text.length,32);for(let t=0;t<e;t++){if(this.charCodes[t]===0)continue;n>=this.maxInstances&&this.growBuffer();let e=n*es;this.instanceData[e+0]=a.x,this.instanceData[e+1]=o,this.instanceData[e+2]=this.cursors[t],this.instanceData[e+3]=this.charCodes[t],this.instanceData[e+4]=1,this.instanceData[e+5]=a.colorR,this.instanceData[e+6]=a.colorG,this.instanceData[e+7]=a.colorB,this.instanceData[e+8]=i,this.instanceData[e+9]=os,n++}}}this.instanceCount=n}growBuffer(){this.maxInstances*=2;let e=new Float32Array(this.maxInstances*es);e.set(this.instanceData),this.instanceData=e;let t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.instanceBuf),t.bufferData(t.ARRAY_BUFFER,this.instanceData.byteLength,t.DYNAMIC_DRAW)}draw(e,t){if(!this.atlasReady||this.instanceCount===0||t<this.settings.bonusPopup.cullZoom)return;let n=this.gl;n.useProgram(this.program),n.uniformMatrix3fv(this.uCamera,!1,e),n.uniform1f(this.uZoom,t);let r=qe();n.uniform1f(this.uMinScreenScale,this.settings.bonusPopup.minScreenScale*r),n.uniform1f(this.uDistRange,this.distanceRange),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.atlasTex),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,this.glyphMetricsTex),n.bindBuffer(n.ARRAY_BUFFER,this.instanceBuf),n.bufferSubData(n.ARRAY_BUFFER,0,this.instanceData,0,this.instanceCount*es),n.bindVertexArray(this.vao),n.drawArraysInstanced(n.TRIANGLES,0,6,this.instanceCount)}setTimeFn(e){this.timeFn=e}clear(){this.active.length=0,this.attackTroopLabels=[],this.instanceCount=0}dispose(){let e=this.gl;e.deleteProgram(this.program),e.deleteBuffer(this.instanceBuf),e.deleteVertexArray(this.vao),e.deleteTexture(this.glyphMetricsTex),this.atlasTex&&e.deleteTexture(this.atlasTex)}},ds=0,fs=1,ps=2,ms=Xe(),hs=2,gs=class{constructor(e,t){this.settings=t,this.cpuData=new Uint8Array(ms*hs*4),this.dirty=!1,this.localPlayerID=0,this.relationData=null,this.relationSize=0,this.gl=e,this.rebuild(),this.tex=B(e,{width:ms,height:hs,internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,data:this.cpuData,filter:e.NEAREST}),this.dirty=!1}getTexture(){return this.tex}setLocalPlayer(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.rebuild())}updateRelations(e,t){this.relationData=e,this.relationSize=t,this.rebuild()}flush(){if(!this.dirty)return;let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.tex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,ms,hs,e.RGBA,e.UNSIGNED_BYTE,this.cpuData),this.dirty=!1}rebuild(){let e=this.cpuData,t=this.localPlayerID,n=this.relationData,r=this.relationSize,i=this.settings.affiliation,a=e=>Math.round(e*255),o=a(i.selfR),s=a(i.selfG),c=a(i.selfB),l=a(i.allyR),u=a(i.allyG),d=a(i.allyB),f=a(i.neutralR),p=a(i.neutralG),m=a(i.neutralB),h=a(i.enemyR),g=a(i.enemyG),_=a(i.enemyB);for(let i=0;i<ms;i++){let a=ds;n&&t>0&&i>0&&i<r&&t<r&&(a=n[t*r+i]);let v=i>0&&i===t,y=i*4;i===0?(e[y]=0,e[y+1]=0,e[y+2]=0,e[y+3]=0):v?(e[y]=o,e[y+1]=s,e[y+2]=c,e[y+3]=255):a===fs?(e[y]=l,e[y+1]=u,e[y+2]=d,e[y+3]=255):a===ps?(e[y]=h,e[y+1]=g,e[y+2]=_,e[y+3]=255):(e[y]=f,e[y+1]=p,e[y+2]=m,e[y+3]=255);let b=(ms+i)*4;i===0?(e[b]=0,e[b+1]=0,e[b+2]=0,e[b+3]=0):v?(e[b]=o,e[b+1]=s,e[b+2]=c,e[b+3]=255):a===fs?(e[b]=l,e[b+1]=u,e[b+2]=d,e[b+3]=255):(e[b]=h,e[b+1]=g,e[b+2]=_,e[b+3]=255)}this.dirty=!0}dispose(){this.gl.deleteTexture(this.tex)}};function _s(e,t,n,r,i){return{tileTex:B(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),trailTex:B(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),paletteTex:r,borderTex:i,heatTexA:B(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST}),heatTexB:B(e,{width:t,height:n,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE,data:null,filter:e.NEAREST})}}function vs(e,t){e.deleteTexture(t.tileTex),e.deleteTexture(t.trailTex),e.deleteTexture(t.heatTexA),e.deleteTexture(t.heatTexB)}var ys=`#version 300 es
precision highp float;
precision highp usampler2D;
uniform sampler2D uHeatTex;
uniform usampler2D uTileTex;
uniform usampler2D uPrevTileTex;
uniform vec2 uMapSize;
uniform float uDecay;
out vec4 fragColor;
void main() {
  ivec2 tc = ivec2(gl_FragCoord.xy);
  if (tc.x >= int(uMapSize.x) || tc.y >= int(uMapSize.y)) discard;

  float heat = texelFetch(uHeatTex, tc, 0).r;
  uint curr = texelFetch(uTileTex, tc, 0).r;
  uint prev = texelFetch(uPrevTileTex, tc, 0).r;

  bool wasFallout = (prev & (1u << FALLOUT_BIT)) != 0u;
  bool isFallout  = (curr & (1u << FALLOUT_BIT)) != 0u;

  if (isFallout && !wasFallout) {
    heat = 1.0;
  } else if (!isFallout && wasFallout) {
    heat = 0.0;
  } else {
    heat = max(0.0, heat - uDecay / 255.0);
  }

  fragColor = vec4(heat, 0.0, 0.0, 1.0);
}
`,bs=class{constructor(e,t,n,r,i,a,o){this.heatCurrent=0,this.needsPrevTileCopy=!0,this.pendingDecay=0,this.heatActive=!1,this.decayAccumulated=0,this.gl=e,this.settings=o,this.mapW=t,this.mapH=n,this.tileTex=r,this.heatTexA=i,this.heatTexB=a,this.heatFboA=this.createFboFor(i),this.heatFboB=this.createFboFor(a),this.prevTileTex=B(e,{width:t,height:n,internalFormat:e.R16UI,format:e.RED_INTEGER,type:e.UNSIGNED_SHORT,data:null,filter:e.NEAREST}),this.prevTileFbo=this.createFboFor(this.prevTileTex),this.tileTexReadFbo=this.createFboFor(r),this.decayProg=V(e,zr,R(ys,tt),`HeatManager`),this.uDecayMapSize=e.getUniformLocation(this.decayProg,`uMapSize`),this.uDecayAmount=e.getUniformLocation(this.decayProg,`uDecay`),e.useProgram(this.decayProg),e.uniform1i(e.getUniformLocation(this.decayProg,`uHeatTex`),0),e.uniform1i(e.getUniformLocation(this.decayProg,`uTileTex`),1),e.uniform1i(e.getUniformLocation(this.decayProg,`uPrevTileTex`),2),this.quadVao=ze(e)}createFboFor(e){let t=this.gl,n=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0),t.bindFramebuffer(t.FRAMEBUFFER,null),n}get heatReadTex(){return this.heatCurrent===0?this.heatTexA:this.heatTexB}get heatWriteFbo(){return this.heatCurrent===0?this.heatFboB:this.heatFboA}swapHeat(){this.heatCurrent=1-this.heatCurrent}getHeatTex(){return this.heatReadTex}updateHeat(){let e=this.gl,t=this.mapW,n=this.mapH;if(this.needsPrevTileCopy){this.blitTileToPrev(),this.needsPrevTileCopy=!1,e.bindFramebuffer(e.FRAMEBUFFER,null);return}if(!this.heatActive){this.pendingDecay=0;return}e.bindFramebuffer(e.FRAMEBUFFER,this.heatWriteFbo),e.viewport(0,0,t,n),e.disable(e.BLEND),e.useProgram(this.decayProg),e.uniform2f(this.uDecayMapSize,t,n),e.uniform1f(this.uDecayAmount,this.pendingDecay),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.heatReadTex),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tileTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.prevTileTex),e.bindVertexArray(this.quadVao),e.drawArrays(e.TRIANGLES,0,6),this.swapHeat(),this.decayAccumulated+=this.pendingDecay,this.decayAccumulated>=255&&(this.heatActive=!1),this.pendingDecay=0,this.blitTileToPrev(),e.bindFramebuffer(e.FRAMEBUFFER,null)}blitTileToPrev(){let e=this.gl;e.bindFramebuffer(e.READ_FRAMEBUFFER,this.tileTexReadFbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,this.prevTileFbo),e.blitFramebuffer(0,0,this.mapW,this.mapH,0,0,this.mapW,this.mapH,e.COLOR_BUFFER_BIT,e.NEAREST)}decayHeat(){this.pendingDecay+=this.settings.falloutBloom.heatDecayPerTick}activate(){this.heatActive=!0,this.decayAccumulated=0}dispose(){let e=this.gl;e.deleteProgram(this.decayProg),e.deleteFramebuffer(this.heatFboA),e.deleteFramebuffer(this.heatFboB),e.deleteFramebuffer(this.prevTileFbo),e.deleteFramebuffer(this.tileTexReadFbo),e.deleteTexture(this.prevTileTex),e.deleteVertexArray(this.quadVao)}},xs=new Set([`Missile Silo`,`SAM Launcher`,`City`,`Atom Bomb`,`Hydrogen Bomb`]),Ss=new Set([`SAM Launcher`,`Atom Bomb`,`Hydrogen Bomb`]),Cs=`renderer:grid_view_enabled`,ws=class{constructor(e,t,n,r,i,a,o=requestAnimationFrame.bind(window),s=cancelAnimationFrame.bind(window)){this.inSpawnPhase=!1,this.mapLayerPasses=new Map,this.terrainBytesTex=null,this.storedLayers=[],this.storedLayerImages=new Map,this.animId=null,this.frameTick=0,this.mapW=0,this.mapH=0,this.lastUnits=new Map,this.lastStructures=new Map,this.localPlayerID=0,this.playerTeams=new Map,this.altView=!1,this.gridView=!1,this.samGhostVisible=!1,this.samHighlightVisible=!1,this.selectedUnitIds=[],this.selectionBoxEntries=[],this.renderLoop=()=>{this.draw(),this.animId=this.raf(this.renderLoop)},this.canvas=e,this.settings=a,this.raf=o,this.caf=s;let c=Et(e,{alpha:!1,antialias:!1,powerPreference:`high-performance`});if(c.gl===null)throw new Re(c.status,c.renderer);this.glLimited=c.status===`limited`?{renderer:c.renderer,maxTextureSize:c.maxTextureSize}:null;let l=c.gl;this.gl=l,l.pixelStorei(l.UNPACK_ALIGNMENT,1),l.getExtension(`EXT_color_buffer_float`)||console.warn(`EXT_color_buffer_float not available — palette may fail`);let u=t.mapWidth,d=t.mapHeight;this.mapW=u,this.mapH=d,this.camera=new Ot(u,d);let f=n();this.terrainPass=new xt(l,n,f,u,d,{backgroundColor:z(this.settings.terrain.backgroundColor)??void 0,oceanColor:z(this.settings.terrain.oceanColor)??void 0,sandColor:z(this.settings.terrain.sandColor)??void 0,plainsColor:z(this.settings.terrain.plainsColor)??void 0,highlandColor:z(this.settings.terrain.highlandColor)??void 0,mountainColor:z(this.settings.terrain.mountainColor)??void 0}),this.terrainBytesTex=B(l,{width:u,height:d,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:f,filter:l.NEAREST}),this.paletteData=r;let p=Xe();this.paletteTex=B(l,{width:p,height:2,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:r,filter:l.NEAREST}),this.effectTex=B(l,{width:p,height:48,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*48*4),filter:l.NEAREST}),this.patternMetaTex=B(l,{width:p,height:1,internalFormat:l.RGBA32F,format:l.RGBA,type:l.FLOAT,data:new Float32Array(p*4),filter:l.NEAREST}),this.patternDataTex=B(l,{width:1024,height:p,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:new Uint8Array(p*1024),filter:l.NEAREST}),this.skinLayerCpu=new Uint8Array(p),this.skinLayerTex=B(l,{width:p,height:1,internalFormat:l.R8UI,format:l.RED_INTEGER,type:l.UNSIGNED_BYTE,data:this.skinLayerCpu,filter:l.NEAREST}),this.skinAnchorCpu=new Uint16Array(p*2),this.skinAnchorTex=B(l,{width:p,height:1,internalFormat:l.RG16UI,format:l.RG_INTEGER,type:l.UNSIGNED_SHORT,data:this.skinAnchorCpu,filter:l.NEAREST}),this.skinAtlas=new it(l,[],()=>{}),this.res=_s(l,u,d,this.paletteTex,null),this.borderPass=new Gr(l,u,d,this.res.tileTex,this.settings),this.res.borderTex=this.borderPass.getBorderTex(),this.defenseCoveragePass=new mi(l,u,d,this.res.tileTex,this.settings),this.heatManager=new bs(l,u,d,this.res.tileTex,this.res.heatTexA,this.res.heatTexB,this.settings),this.territoryPass=new ht(l,u,d,this.res.tileTex,this.paletteTex,this.patternMetaTex,this.patternDataTex,this.skinAtlas.texture,this.skinLayerTex,this.skinAnchorTex,this.settings),this.territoryPass.setBorderPatchConsumer((e,t,n,r)=>{this.borderPass.patchTile(e,t,n,r),this.defenseCoveragePass.markTileDirty(e,t)}),this.territoryPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.territoryPass.setBorderTex(this.res.borderTex),this.spawnOverlayPass=new Io(l,u,d,this.res.tileTex,this.settings.spawnOverlay),this.smallPlayerGlowPass=new Do(l,u,d,this.res.tileTex,this.settings.smallPlayerGlow),this.trailPass=new $e(l,u,d,this.res.trailTex,this.paletteTex,this.effectTex,this.settings),this.spiralRibbonPass=new dt(l,this.settings),this.borderStampPass=new Jr(l,u,d,this.res.tileTex,this.paletteTex,this.res.borderTex,this.settings),this.borderStampPass.setDefenseCoverageTex(this.defenseCoveragePass.getCoverageTex()),this.bloomPass=new bi(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.pointLightPass=new Ba(l,t,r,this.settings,i),this.falloutLightPass=new wi(l,u,d,this.res.tileTex,this.heatManager,this.settings),this.lightmapPass=new Ti(l,u,d,this.pointLightPass,this.falloutLightPass,this.settings),this.nightCompositePass=new ya(l,this.settings),this.railroadPass=new ot(l,u,d,this.res.tileTex,this.paletteTex,this.effectTex,f,this.settings),this.rangeCirclePass=new Ua(l),this.samRadiusPass=new vo(l,u,this.settings),this.samRadiusPass.setPaletteData(r),this.crosshairPass=new li(l),this.structurePass=new rt(l,t,this.paletteTex,this.effectTex,this.settings),this.structureLevelPass=new Xo(l,t,this.settings),this.unitPass=new ut(l,t,this.paletteTex,this.effectTex,this.settings,i),this.namePass=new _a(l,t,r,this.settings,i),this.fxPass=new _t(l,t,this.settings,i),this.barPass=new Lr(l,t,this.settings,i),this.worldTextPass=new us(l,this.settings,i),this.worldTextPass.setMapWidth(this.mapW),this.selectionBoxPass=new So(l),this.moveIndicatorPass=new ji(l,this.settings),this.nukeTrajectoryPass=new ja(l,this.settings),this.nukeTelegraphPass=new Ca(l,this.settings);let m=l.createTexture();l.bindTexture(l.TEXTURE_2D,m),l.texImage2D(l.TEXTURE_2D,0,l.RGBA8,1,1,0,l.RGBA,l.UNSIGNED_BYTE,null),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);let h=l.createFramebuffer();l.bindFramebuffer(l.FRAMEBUFFER,h),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,m,0),l.bindFramebuffer(l.FRAMEBUFFER,null),this.sceneTarget={fbo:h,tex:m,w:1,h:1},this.affiliationPalette=new gs(l,this.settings);let g=this.affiliationPalette.getTexture();this.borderStampPass.setAffiliationTex(g),this.territoryPass.setAffiliationTex(g),this.unitPass.setAffiliationTex(g),this.structurePass.setAffiliationTex(g),this.trailPass.setAffiliationTex(g),this.coordinateGridPass=new ni(l,u,d,this.settings);try{this.gridView=window.localStorage.getItem(Cs)===`true`}catch{this.setGridView(!1)}for(let e of t.players)e.team!==null&&this.playerTeams.set(e.smallID,e.team);this.territoryPass.setTeamMode(this.playerTeams.size>0),this.startLoop()}startLoop(){this.animId??=this.raf(this.renderLoop)}stopLoop(){this.animId!==null&&(this.caf(this.animId),this.animId=null)}resize(e,t){let n=qe();this.canvas.width=Math.round(e*n),this.canvas.height=Math.round(t*n),this.camera.resize(e,t)}setCameraState(e,t,n){this.camera.setCameraState(e,t,n)}uploadTileAndTrailState(e,t){this.territoryPass.setLiveRef(e),this.trailPass.setLiveRef(t)}uploadLiveDelta(e,t){this.territoryPass.applyLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n){this.trailPass.applyLiveDelta(e,t,n)}updateSpiralRibbons(e){this.spiralRibbonPass.updateRibbons(e)}updatePalette(e){let t=this.gl;this.paletteData.set(e),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.paletteTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe(),2,t.RGBA,t.FLOAT,this.paletteData),this.samRadiusPass.setPaletteData(this.paletteData),this.namePass.refreshPlayerColors(this.paletteData)}updateEffectPalette(e){let t=this.gl;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.effectTex),t.texSubImage2D(t.TEXTURE_2D,0,0,0,Xe(),48,t.RGBA,t.FLOAT,e)}addPlayers(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.addPlayers(e,this.paletteData);for(let t of e)t.team!==null&&this.playerTeams.set(t.smallID,t.team);this.territoryPass.setTeamMode(this.playerTeams.size>0)}updatePlayerCosmetics(e,t,n,r){this.updatePalette(t),this.uploadPatterns(n,r),this.namePass.updatePlayerCosmetics(e)}uploadPatterns(e,t){let n=this.gl,r=Xe();n.bindTexture(n.TEXTURE_2D,this.patternMetaTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,1,n.RGBA,n.FLOAT,e),n.bindTexture(n.TEXTURE_2D,this.patternDataTex),n.texSubImage2D(n.TEXTURE_2D,0,0,0,1024,r,n.RED_INTEGER,n.UNSIGNED_BYTE,t)}setPlayerSpawn(e,t,n){let r=e*2;this.skinAnchorCpu[r]=t,this.skinAnchorCpu[r+1]=n;let i=this.gl;i.bindTexture(i.TEXTURE_2D,this.skinAnchorTex),i.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe(),1,i.RG_INTEGER,i.UNSIGNED_SHORT,this.skinAnchorCpu)}initSkinAtlas(e){this.skinAtlas.dispose(),this.skinAtlas=new it(this.gl,e,()=>{}),this.territoryPass.setSkinAtlas(this.skinAtlas.texture)}setPlayerSkin(e,t){let n=-1;t!==null&&(n=this.skinAtlas.getLayer(t),n<0)||(this.skinLayerCpu[e]=n+1,this.uploadSkinLayerTex())}uploadSkinLayerTex(){let e=this.gl;e.bindTexture(e.TEXTURE_2D,this.skinLayerTex),e.texSubImage2D(e.TEXTURE_2D,0,0,0,Xe(),1,e.RED_INTEGER,e.UNSIGNED_BYTE,this.skinLayerCpu)}uploadRailroadState(e){this.railroadPass.uploadRailroadState(e)}updateUnits(e,t){this.lastUnits=e,this.frameTick++,this.unitPass.setFrameTick(this.frameTick),this.unitPass.updateUnits(e,t),this.samRadiusPass.setTick(t),this.barPass.updateBars(e,this.lastStructures,t),this.pointLightPass.updateLights(e),this.heatManager.decayHeat()}updateNames(e,t,n,r){if(this.namePass.updateNames(e,t,n,r),this.localPlayerID>0){let e=t.get(this.localPlayerID),n=new Set(e?.allies??[]),r=this.playerTeams.get(this.localPlayerID);if(r!==void 0)for(let[e,t]of this.playerTeams)t===r&&e!==this.localPlayerID&&n.add(e);this.samRadiusPass.setAllies(n),this.unitPass.setAllies(n)}}refreshNames(e){this.namePass.refreshNames(e)}updateRelations(e,t){this.borderPass.updateRelations(e,t),this.affiliationPalette.updateRelations(e,t)}updateStructures(e){this.lastStructures=e,this.structurePass.updateStructures(e),this.structureLevelPass.updateStructures(e),this.samRadiusPass.updateStructures(e),this.unitPass.setStructures(e);let t=[],n=this.mapW;for(let r of e.values())r.unitType===`Defense Post`&&!r.underConstruction&&t.push({x:r.pos%n,y:(r.pos-r.pos%n)/n,ownerID:r.ownerID});this.defenseCoveragePass.updateDefensePosts(t)}applyDeadUnits(e){e.length>0&&this.fxPass.applyDeadUnits(e)}applyRailroadDust(e){e.length>0&&this.fxPass.applyRailroadDust(e)}applyTerrainRects(e,t){if(e.length===0||(this.terrainPass.applyTerrainRects(e,t),this.railroadPass.applyTerrainRects(e,t),!this.terrainBytesTex))return;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.terrainBytesTex),n.pixelStorei(n.UNPACK_ALIGNMENT,1);let r=0;for(let i of e)n.texSubImage2D(n.TEXTURE_2D,0,i.x,i.y,i.w,i.h,n.RED_INTEGER,n.UNSIGNED_BYTE,t,r),r+=i.w*i.h}rebuildTerrain(){this.terrainPass.setTerrainColors({backgroundColor:z(this.settings.terrain.backgroundColor)??void 0,oceanColor:z(this.settings.terrain.oceanColor)??void 0,sandColor:z(this.settings.terrain.sandColor)??void 0,plainsColor:z(this.settings.terrain.plainsColor)??void 0,highlandColor:z(this.settings.terrain.highlandColor)??void 0,mountainColor:z(this.settings.terrain.mountainColor)??void 0})}applyConquestEvents(e){e.length>0&&(this.fxPass.applyConquestEvents(e),this.worldTextPass.applyConquestEvents(e))}setAttackTroopLabels(e){this.worldTextPass.setAttackTroopLabels(e)}applyBonusEvents(e){if(e.length===0)return;let t=this.localPlayerID>0?e.filter(e=>e.smallID===this.localPlayerID):e;t.length>0&&this.worldTextPass.applyBonusEvents(t)}triggerBlockedFlash(e,t){this.crosshairPass.triggerBlockedFlash(e,t)}updateAttackRings(e){this.fxPass.updateAttackRings(e)}updateGhostPreview(e){this.structurePass.updateGhostPreview(e),this.railroadPass.updateGhostPreview(e),this.rangeCirclePass.updateGhostPreview(e),this.crosshairPass.updateGhostPreview(e);let t=e?.multiplier&&e.multiplier>1?F(`build_menu.upgrade_amount`,{amount:e.multiplier.toString()}):void 0,n=e!==null&&e.showCost&&e.cost>0;this.worldTextPass.setGhostCostLabel(e&&(n||t!==void 0)?{tileX:e.tileX,tileY:e.tileY,cost:n?e.cost:0,canAfford:e.canAfford,canPlace:e.canBuild||e.canUpgrade,topText:t}:null),this.samGhostVisible=e!==null&&xs.has(e.ghostType),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}updateNukeTrajectory(e){this.nukeTrajectoryPass.update(e)}updateNukeTelegraphs(e){this.nukeTelegraphPass.update(e)}updateSpawnOverlay(e,t){this.inSpawnPhase=e,this.spawnOverlayPass.update(t)}updateSmallPlayerGlow(e){this.smallPlayerGlowPass.update(e)}setHighlightOwner(e){this.borderPass.setHighlightOwner(e),this.territoryPass.setHighlightOwner(e),this.namePass.setHighlightOwner(e),this.structurePass.setHighlightOwner(e),this.railroadPass.setHighlightOwner(e)}setMouseWorldPos(e,t){this.namePass.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.structurePass.setHighlightTypes(e),this.structureLevelPass.setHighlightTypes(e),this.samHighlightVisible=e!==null&&e.some(e=>Ss.has(e)),this.samRadiusPass.setVisible(this.samGhostVisible||this.samHighlightVisible)}setLocalPlayerID(e){e!==this.localPlayerID&&(this.localPlayerID=e,this.samRadiusPass.setLocalPlayer(e),this.structurePass.setLocalPlayer(e),this.affiliationPalette.setLocalPlayer(e),this.unitPass.setLocalPlayer(e),this.railroadPass.setLocalPlayer(e))}setLocalRailColor(e,t,n){this.railroadPass.setLocalRailColor(e,t,n)}setSAMAllianceClusters(e){this.samRadiusPass.setAllianceClusters(e)}setAltView(e){this.altView=e,this.territoryPass.setAltView(e),this.borderStampPass.setAltView(e),this.unitPass.setAltView(e),this.structurePass.setAltView(e),this.trailPass.setAltView(e)}setGridView(e){this.gridView=e;try{window.localStorage.setItem(Cs,e?`true`:`false`)}catch{}}getSettings(){return this.settings}setSelectedUnits(e){this.selectedUnitIds.length=0;for(let t=0;t<e.length;t++)this.selectedUnitIds.push(e[t]);this.selectedUnitIds.length===0&&this.selectionBoxPass.hide()}updateSelectionBox(){if(this.selectedUnitIds.length===0)return;let e=this.selectionBoxEntries;e.length=0;let t=0;for(let n=0;n<this.selectedUnitIds.length;n++){let r=this.selectedUnitIds[n],i=this.lastUnits.get(r);if(!i||!i.isActive)continue;this.selectedUnitIds[t++]=r;let a=i.pos%this.mapW,o=Math.floor(i.pos/this.mapW),s=i.ownerID*4,c=Math.min(1,this.paletteData[s]+(1-this.paletteData[s])*.3),l=Math.min(1,this.paletteData[s+1]+(1-this.paletteData[s+1])*.3),u=Math.min(1,this.paletteData[s+2]+(1-this.paletteData[s+2])*.3);e.push({centerX:a,centerY:o,r:c,g:l,b:u})}this.selectedUnitIds.length=t,this.selectionBoxPass.setSelections(e)}showMoveIndicator(e,t,n){let r=n*4,i=Math.min(1,this.paletteData[r]+(1-this.paletteData[r])*.3),a=Math.min(1,this.paletteData[r+1]+(1-this.paletteData[r+1])*.3),o=Math.min(1,this.paletteData[r+2]+(1-this.paletteData[r+2])*.3);this.moveIndicatorPass.show(e,t,i,a,o)}draw(){this.uploadTextures(),this.computeTextures(),this.renderFrame()}uploadTextures(){this.altView&&this.affiliationPalette.flush(),this.inSpawnPhase?this.territoryPass.flushAllDripBuckets():this.territoryPass.drainDripBucket(),this.territoryPass.flushTileTexture()===`full`&&(this.borderPass.markGlobalDirty(),this.defenseCoveragePass.markDirty()),this.territoryPass.consumeFalloutTouched()&&this.heatManager.activate(),this.trailPass.flushTexture(),this.heatManager.updateHeat()}computeTextures(){this.settings.passEnabled.borderCompute&&this.borderPass.draw(),this.defenseCoveragePass.draw()}renderFrame(){let e=this.camera.getMatrix(),t=this.camera.zoom,n=this.canvas.width,r=this.canvas.height;if(this.isLightCompositingActive()){this.resizeSceneTargetIfNeeded(n,r);let t=Ge(this.gl,this.sceneTarget,()=>this.drawBaseLayer(e)),i=this.lightmapPass.draw(e,n,r,this.frameTick);He(this.gl,n,r,()=>this.nightCompositePass.draw(t,i))}else He(this.gl,n,r,()=>this.drawBaseLayer(e));this.renderOverlays(e,t)}isLightCompositingActive(){return this.settings.lighting.enabled}resizeSceneTargetIfNeeded(e,t){if(this.sceneTarget.w===e&&this.sceneTarget.h===t)return;this.sceneTarget.w=e,this.sceneTarget.h=t;let n=this.gl;n.bindTexture(n.TEXTURE_2D,this.sceneTarget.tex),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null)}drawBaseLayer(e){let t=this.gl,n=this.settings.passEnabled,[r,i,a]=z(this.settings.terrain.backgroundColor)??[60,60,60];t.clearColor(r/255,i/255,a/255,1),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),n.terrain&&this.terrainPass.draw(e),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);for(let t of this.mapLayerPasses.values())t.draw(e);n.territory&&this.territoryPass.draw(e)}renderOverlays(e,t){let n=this.gl,r=this.settings.passEnabled;n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),this.spawnOverlayPass.draw(e),r.borderStamp&&this.borderStampPass.draw(e),r.railroad&&this.railroadPass.draw(e,t),r.unit&&this.unitPass.drawGround(e),r.falloutBloom&&this.bloomPass.draw(e,this.frameTick),this.samRadiusPass.draw(e),this.rangeCirclePass.draw(e),this.nukeTrajectoryPass.draw(e),this.crosshairPass.draw(e),r.structure&&this.structurePass.draw(e,t),r.structure&&this.structureLevelPass.draw(e,t),this.smallPlayerGlowPass.draw(e),r.bar&&this.barPass.draw(e),this.updateSelectionBox(),this.selectionBoxPass.draw(e,this.frameTick),this.moveIndicatorPass.draw(e,t),this.nukeTelegraphPass.draw(e),r.trail&&this.trailPass.draw(e),this.altView||this.spiralRibbonPass.draw(e),r.unit&&this.unitPass.drawMissiles(e),r.fx&&(this.fxPass.tick(),this.fxPass.draw(e,t)),(this.gridView||this.altView)&&this.coordinateGridPass.draw(e,t),r.name&&!this.altView&&this.namePass.draw(e,this.nightCompositePass.getAmbient()),this.worldTextPass.tick(t),this.worldTextPass.draw(e,t),n.disable(n.BLEND)}setMapLayers(e,t){for(let e of this.mapLayerPasses.values())e.dispose();if(this.mapLayerPasses.clear(),this.storedLayers=e,this.storedLayerImages=t,!this.terrainBytesTex)return;let n=this.gl;for(let r of e){let e=t.get(r.id);if(!e){console.warn(`[Renderer] Layer image "${r.id}" not found`);continue}let i=+(r.placement===`water`),a=new Oi(n,this.terrainBytesTex,e,this.mapW,this.mapH,i,r.nukeable??!1);this.mapLayerPasses.set(r.id,a)}}setLayerVisible(e,t){this.mapLayerPasses.get(e)?.setVisible(t)}setLayerAlpha(e,t){this.mapLayerPasses.get(e)?.setAlpha(t)}markLayerTilesDestroyed(e,t){this.mapLayerPasses.get(e)?.markTilesDestroyed(t)}setLayerDestroyedMask(e,t){this.mapLayerPasses.get(e)?.updateDestroyedMask(t)}dispose({releaseContext:e=!0}={}){this.stopLoop();for(let e of this.mapLayerPasses.values())e.dispose();this.mapLayerPasses.clear(),this.terrainBytesTex&&=(this.gl.deleteTexture(this.terrainBytesTex),null),this.terrainPass.dispose(),this.territoryPass.dispose(),this.trailPass.dispose(),this.spiralRibbonPass.dispose(),this.borderStampPass.dispose(),this.borderPass.dispose(),this.defenseCoveragePass.dispose(),this.bloomPass.dispose(),this.pointLightPass.dispose(),this.falloutLightPass.dispose(),this.lightmapPass.dispose(),this.nightCompositePass.dispose(),this.heatManager.dispose(),this.affiliationPalette.dispose(),this.coordinateGridPass.dispose(),this.spawnOverlayPass.dispose(),this.smallPlayerGlowPass.dispose(),this.railroadPass.dispose(),this.rangeCirclePass.dispose(),this.samRadiusPass.dispose(),this.crosshairPass.dispose(),this.structurePass.dispose(),this.structureLevelPass.dispose(),this.unitPass.dispose(),this.namePass.dispose(),this.fxPass.dispose(),this.worldTextPass.dispose(),this.selectionBoxPass.dispose(),this.moveIndicatorPass.dispose(),this.nukeTrajectoryPass.dispose(),this.nukeTelegraphPass.dispose(),this.barPass.dispose(),vs(this.gl,this.res),this.gl.deleteTexture(this.paletteTex),this.gl.deleteTexture(this.effectTex),this.gl.deleteTexture(this.patternMetaTex),this.gl.deleteTexture(this.patternDataTex),this.gl.deleteTexture(this.skinLayerTex),this.gl.deleteTexture(this.skinAnchorTex),this.skinAtlas.dispose(),this.gl.deleteFramebuffer(this.sceneTarget.fbo),this.gl.deleteTexture(this.sceneTarget.tex),this.lastUnits=new Map,this.lastStructures=new Map,e&&this.gl.getExtension(`WEBGL_lose_context`)?.loseContext()}},Ts=class{constructor(e,t,n,r,i,a,o,s){this.canvas=e,this.header=t,this.terrainSource=n,this.paletteData=r,this.config=i,this.settings=a,this.raf=o,this.caf=s,this.renderer=null,this.resizeObs=null,this.storedLayers=[],this.storedLayerImages=new Map,this.layerVisibility=new Map,this.layerAlpha=new Map,this.layerDestroyedMasks=new Map,this.onContextRestored=null,this.initRenderer=()=>{this.renderer=new ws(this.canvas,this.header,this.terrainSource,this.paletteData,this.config,this.settings,this.raf,this.caf);let e=this.canvas.getBoundingClientRect();e.width>0&&this.renderer.resize(e.width,e.height)},this.handleContextLost=e=>{e.preventDefault(),console.warn(`[Renderer] WebGL context lost — awaiting restore`),this.renderer&&=(this.renderer.dispose({releaseContext:!1}),null)},this.handleContextRestored=()=>{console.warn(`[Renderer] WebGL context restored`);try{this.initRenderer()}catch(e){this.renderer=null,console.error(`[Renderer] context restore failed`,e);return}if(this.storedLayers.length>0&&this.storedLayerImages.size>0){this.renderer?.setMapLayers(this.storedLayers,this.storedLayerImages);for(let[e,t]of this.layerVisibility)this.renderer?.setLayerVisible(e,t);for(let[e,t]of this.layerAlpha)this.renderer?.setLayerAlpha(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}this.onContextRestored?.()},this.initRenderer(),this.resizeObs=new ResizeObserver(e=>{for(let t of e){let{width:e,height:n}=t.contentRect;e>0&&n>0&&this.renderer?.resize(e,n)}}),this.resizeObs.observe(e),e.addEventListener(`webglcontextlost`,this.handleContextLost,!1),e.addEventListener(`webglcontextrestored`,this.handleContextRestored,!1)}get glLimited(){return this.renderer?.glLimited??null}setCameraState(e,t,n){this.renderer?.setCameraState(e,t,n)}uploadLiveDelta(e,t){this.renderer?.uploadLiveDelta(e,t)}uploadLiveTrailDelta(e,t,n){this.renderer?.uploadLiveTrailDelta(e,t,n)}uploadTileAndTrailState(e,t){this.renderer?.uploadTileAndTrailState(e,t)}updateSpiralRibbons(e){this.renderer?.updateSpiralRibbons(e)}updatePalette(e){this.renderer?.updatePalette(e)}updateEffectPalette(e){this.renderer?.updateEffectPalette(e)}addPlayers(e,t,n,r){this.renderer?.addPlayers(e,t,n,r)}updatePlayerCosmetics(e,t,n,r){this.renderer?.updatePlayerCosmetics(e,t,n,r)}setPlayerSkin(e,t){this.renderer?.setPlayerSkin(e,t)}initSkinAtlas(e){this.renderer?.initSkinAtlas(e)}setPlayerSpawn(e,t,n){this.renderer?.setPlayerSpawn(e,t,n)}uploadRailroadState(e){this.renderer?.uploadRailroadState(e)}updateUnits(e,t){this.renderer?.updateUnits(e,t)}updateNames(e,t,n,r){this.renderer?.updateNames(e,t,n,r)}refreshNames(e){this.renderer?.refreshNames(e)}updateRelations(e,t){this.renderer?.updateRelations(e,t)}updateStructures(e){this.renderer?.updateStructures(e)}applyDeadUnits(e){this.renderer?.applyDeadUnits(e)}applyConquestEvents(e){this.renderer?.applyConquestEvents(e)}setAttackTroopLabels(e){this.renderer?.setAttackTroopLabels(e)}applyBonusEvents(e){this.renderer?.applyBonusEvents(e)}triggerBlockedFlash(e,t){this.renderer?.triggerBlockedFlash(e,t)}applyRailroadDust(e){this.renderer?.applyRailroadDust(e)}applyTerrainRects(e,t){this.renderer?.applyTerrainRects(e,t)}rebuildTerrain(){this.renderer?.rebuildTerrain()}updateAttackRings(e){this.renderer?.updateAttackRings(e)}updateGhostPreview(e){this.renderer?.updateGhostPreview(e)}updateNukeTrajectory(e){this.renderer?.updateNukeTrajectory(e)}updateNukeTelegraphs(e){this.renderer?.updateNukeTelegraphs(e)}updateSpawnOverlay(e,t){this.renderer?.updateSpawnOverlay(e,t)}updateSmallPlayerGlow(e){this.renderer?.updateSmallPlayerGlow(e)}setMapLayers(e,t){this.storedLayers=e,this.storedLayerImages=t,this.renderer?.setMapLayers(e,t);for(let[e,t]of this.layerDestroyedMasks)this.renderer?.setLayerDestroyedMask(e,t)}setLayerVisible(e,t){this.layerVisibility.set(e,t),this.renderer?.setLayerVisible(e,t)}setLayerAlpha(e,t){this.layerAlpha.set(e,t),this.renderer?.setLayerAlpha(e,t)}markLayerTilesDestroyed(e,t){let n=this.layerDestroyedMasks.get(e);n||(n=new Uint8Array(this.header.mapWidth*this.header.mapHeight),this.layerDestroyedMasks.set(e,n));for(let e of t)e>=0&&e<n.length&&(n[e]=1);this.renderer?.markLayerTilesDestroyed(e,t)}setLayerDestroyedMask(e,t){let n=this.layerDestroyedMasks.get(e);n?.length===t.length?n.set(t):this.layerDestroyedMasks.set(e,new Uint8Array(t)),this.renderer?.setLayerDestroyedMask(e,t)}setSelectedUnits(e){this.renderer?.setSelectedUnits(e)}showMoveIndicator(e,t,n){this.renderer?.showMoveIndicator(e,t,n)}setSAMAllianceClusters(e){this.renderer?.setSAMAllianceClusters(e)}setLocalPlayerID(e){this.renderer?.setLocalPlayerID(e)}setLocalRailColor(e,t,n){this.renderer?.setLocalRailColor(e,t,n)}setAltView(e){this.renderer?.setAltView(e)}setGridView(e){this.renderer?.setGridView(e)}setHighlightOwner(e){this.renderer?.setHighlightOwner(e)}setMouseWorldPos(e,t){this.renderer?.setMouseWorldPos(e,t)}setHighlightStructureTypes(e){this.renderer?.setHighlightStructureTypes(e)}getSettings(){return this.renderer?.getSettings()??{}}dispose(){this.resizeObs?.disconnect(),this.resizeObs=null,this.onContextRestored=null,this.renderer?.dispose(),this.canvas.removeEventListener(`webglcontextlost`,this.handleContextLost),this.canvas.removeEventListener(`webglcontextrestored`,this.handleContextRestored)}};function Es(e,t){for(let n of Object.keys(t))Array.isArray(t[n])?n in e&&(e[n]=structuredClone(t[n])):typeof t[n]==`object`&&t[n]!==null&&typeof e[n]==`object`&&e[n]!==null?Es(e[n],t[n]):n in e&&(e[n]=t[n])}var Ds=class{constructor(e,t){this.eventBus=e,this.view=t}init(){this.eventBus.on(rn,e=>this.view.setAltView(e.alternateView)),this.eventBus.on(Fn,e=>this.view.setGridView(e.enabled))}},Os=class{constructor(){}smallID(){return 0}clientID(){return`TERRA_NULLIUS_CLIENT_ID`}id(){return null}isPlayer(){return!1}};function ks(e){let t=new Map;function n(e){for(;t.get(e)!==e;){let n=t.get(e);t.set(e,t.get(n)),e=n}return e}function r(e,r){let i=n(e),a=n(r);i!==a&&t.set(a,i)}for(let n of e.values())n.smallID>0&&t.set(n.smallID,n.smallID);for(let n of e.values())if(!(!n.allies||n.smallID<=0))for(let e of n.allies)t.has(e)&&r(n.smallID,e);let i=new Map;for(let e of t.keys())i.set(e,n(e));return i}var As=1;function js(e,t,n,r){return t<=0?2:e===t?0:n&&e>0&&e<r&&t<r&&n[t*r+e]===As?1:2}function Ms(e,t,n=0,r,i=0,a,o=0){let s=[];for(let c of e.values()){if(c.targetTile===null||!c.isActive||c.waitTicks>0)continue;let e=a?.get(c.id);if(e&&e.startTick>o)continue;let l=Ve[c.unitType];l&&s.push({x:c.targetTile%t,y:(c.targetTile-c.targetTile%t)/t,innerRadius:l.inner,outerRadius:l.outer,relation:js(c.ownerID,n,r,i)})}return s}var Ns=new Set([...yt,St]),Ps=4095;function Fs(e,t,n={}){let r=new Map,i=n.localPlayerSmallID??0,a=n.localPlayerID??``,o=i>0?e.get(i):void 0,s=n.tileState,c=-1,l=0;for(let t of e.values())t.isAlive&&t.tilesOwned>l&&(l=t.tilesOwned,c=t.smallID);let u=new Set,d=new Set;for(let e of t.values())!e.isActive||!Ns.has(e.unitType)||(u.add(e.ownerID),i>0&&s!==void 0&&e.targetTile!==null&&(s[e.targetTile]&Ps)===i&&d.add(e.ownerID));for(let t of e.values()){if(!t.isAlive)continue;let e=t.smallID,s=e===c,l=t.isTraitor,f=t.isDisconnected,p=t.inDoomsdayClock,m=(n.tick??0)-t.markedDoomsdayClockTick,h=n.doomsdayClockWarnTicks??0,g=p&&m>=h,_=p&&t.isDecaying,v=p&&h>0?Math.max(0,Math.min(1,m/h)):0,y=t.traitorRemainingTicks,b=u.has(e),x=d.has(e),S=!1,C=!1,w=!1,T=!1,E=0,D=0;if(o!==void 0&&e!==i&&(S=o.allies.includes(e),T=t.outgoingAllianceRequests.includes(a),C=n.isTransitiveTarget?n.isTransitiveTarget(e):o.targets.includes(e),w=o.embargoes.includes(e)||t.embargoes.includes(i),S&&n.tick!==void 0&&n.allianceDuration!==void 0&&n.localPlayerID)){let e=t.alliances.find(e=>e.other===n.localPlayerID);if(e){let t=Math.max(0,e.expiresAt-n.tick);E=Math.max(0,Math.min(1,t/Math.max(1,n.allianceDuration))),D=t}}(s||l||f||p||y>0||b||S||T||C||w||x)&&r.set(e,{crown:s,traitor:l,disconnected:f,inDoomsdayClock:p,doomsdayClockDraining:g,doomsdayClockDecaying:_,doomsdayClockWarnProgress:v,alliance:S,allianceReq:T,target:C,embargo:w,nukeActive:b,nukeTargetsMe:x,traitorRemainingTicks:y,allianceFraction:E,allianceRemainingTicks:D})}return r}var U=1024,Is=0,Ls=1,Rs=2,W=new Uint8Array(U*U);function zs(e,t){if(W.fill(Is),t&&t.size>0){let e=new Map;for(let[n,r]of t){if(n<=0||n>=U)continue;let t=e.get(r);t||(t=[],e.set(r,t)),t.push(n)}for(let t of e.values())for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let r=t[e],i=t[n];W[r*U+i]=Ls,W[i*U+r]=Ls}}for(let t of e.values()){let e=t.smallID;if(!(e<=0||e>=U)){if(t.allies){for(let n of t.allies)if(n>0&&n<U){let t=e*U+n,r=n*U+e;W[t]<Ls&&(W[t]=Ls),W[r]<Ls&&(W[r]=Ls)}}if(t.embargoes)for(let n of t.embargoes)n>0&&n<U&&(W[e*U+n]=Rs,W[n*U+e]=Rs)}}return{matrix:W,size:U}}var Bs=4096,Vs=class{constructor(e,t){this.unitTrails=new Map,this._dirtyRowMin=1/0,this._dirtyRowMax=-1,this.mapW=e,this.trailState=new Uint16Array(e*t),this.trailCounts=new Uint16Array(e*t)}getTrailState(){return this.trailState}get dirtyRowMin(){return this._dirtyRowMin}get dirtyRowMax(){return this._dirtyRowMax}clearDirtyRows(){this._dirtyRowMin=1/0,this._dirtyRowMax=-1}reset(){this.unitTrails.clear(),this.trailState.fill(0),this.trailCounts.fill(0),this._dirtyRowMin=1/0,this._dirtyRowMax=-1}update(e,t){this.clearDeadUnits(e);for(let n of t){let t=e.get(n);if(!t)continue;let r=Be.has(t.unitType),i=this.unitTrails.get(n);i||(i={value:t.ownerID|(r?Bs:0),tiles:new Set,lastPosStamped:-1},this.unitTrails.set(n,i));let a=r?t.lastPos:t.pos;i.lastPosStamped===-1?(this.claim(a,i),i.lastPosStamped=a):i.lastPosStamped!==a&&(this.bresenham(i.lastPosStamped,a,i),i.lastPosStamped=a)}}clearDeadUnits(e){for(let[t,n]of this.unitTrails)if(!e.has(t)){this.unitTrails.delete(t);for(let e of n.tiles)--this.trailCounts[e]===0&&this.stamp(e,0)}}claim(e,t){t.tiles.has(e)||(t.tiles.add(e),this.trailCounts[e]++),this.stamp(e,t.value)}stamp(e,t){this.trailState[e]=t;let n=e/this.mapW|0;n<this._dirtyRowMin&&(this._dirtyRowMin=n),n>this._dirtyRowMax&&(this._dirtyRowMax=n)}bresenham(e,t,n){let r=this.mapW,i=e%r,a=(e-i)/r,o=t%r,s=(t-o)/r,c=Math.abs(o-i),l=-Math.abs(s-a),u=i<o?1:-1,d=a<s?1:-1,f=c+l;for(;;){let e=a*r+i;if(this.claim(e,n),i===o&&a===s)break;let t=2*f;t>=l&&(f+=l,i+=u),t<=c&&(f+=c,a+=d)}}};function Hs(e){switch(e){case d.Engine:return Ye.Engine;case d.TailEngine:return Ye.TailEngine;case d.Carriage:return Ye.Carriage;default:return null}}function Us(e){return{id:e.id,unitType:e.unitType,ownerID:e.ownerID,lastOwnerID:e.lastOwnerID??null,pos:e.pos,lastPos:e.lastPos,isActive:e.isActive,reachedTarget:e.reachedTarget,retreating:(e.transportShipState?.isRetreating??!1)||e.warshipState?.state===`retreating`,targetable:e.targetable,waitTicks:e.nukeState?.waitTicks??0,markedForDeletion:e.markedForDeletion,health:e.health??null,underConstruction:e.underConstruction??!1,targetUnitId:e.targetUnitId??null,targetTile:e.targetTile??null,troops:e.troops,missileTimerQueue:e.missileTimerQueue,missilesStored:e.missilesStored??0,level:e.level,veterancy:e.warshipState?.veterancy??0,hasTrainStation:e.hasTrainStation,trainType:Hs(e.trainType),loaded:e.loaded??null,constructionStartTick:null,samUpgradeStartTick:e.samUpgrade?.upgradeStartTick??null,samUpgradeStartRange:e.samUpgrade?.startRange??null,samUpgradeTargetLevel:e.samUpgrade?.targetLevel??null,samUpgradeDuration:e.samUpgrade?.duration??null}}function Ws(e,t){e.ownerID=t.ownerID,e.unitType=t.unitType,e.lastOwnerID=t.lastOwnerID??null,e.pos=t.pos,e.lastPos=t.lastPos,e.isActive=t.isActive,e.reachedTarget=t.reachedTarget,e.retreating=(t.transportShipState?.isRetreating??!1)||t.warshipState?.state===`retreating`,e.targetable=t.targetable,e.waitTicks=t.nukeState?.waitTicks??0,e.markedForDeletion=t.markedForDeletion,e.health=t.health??null,e.underConstruction=t.underConstruction??!1,e.targetUnitId=t.targetUnitId??null,e.targetTile=t.targetTile??null,e.troops=t.troops,e.missileTimerQueue=t.missileTimerQueue,e.missilesStored=t.missilesStored??0,e.level=t.level,e.veterancy=t.warshipState?.veterancy??0,e.hasTrainStation=t.hasTrainStation,e.trainType=Hs(t.trainType),e.loaded=t.loaded??null,e.samUpgradeStartTick=t.samUpgrade?.upgradeStartTick??null,e.samUpgradeStartRange=t.samUpgrade?.startRange??null,e.samUpgradeTargetLevel=t.samUpgrade?.targetLevel??null,e.samUpgradeDuration=t.samUpgrade?.duration??null}function Gs(e){switch(e){case t.Human:return Dt.Human;case t.Bot:return Dt.Bot;case t.Nation:return Dt.Nation;default:return Dt.Bot}}function Ks(e){switch(e){case Dt.Human:return t.Human;case Dt.Nation:return t.Nation;default:return t.Bot}}function qs(e){return{smallID:e.smallID,id:e.id,name:e.name,displayName:e.displayName,clanTag:e.clanTag??null,clientID:e.clientID??null,playerType:Gs(e.playerType),team:e.team??null,isLobbyCreator:e.isLobbyCreator}}function Js(e){return{smallID:e.smallID,isAlive:e.isAlive,isDisconnected:e.isDisconnected,killedBy:e.killedBy??null,deathPosition:e.deathPosition??null,tilesOwned:e.tilesOwned,gold:Number(e.gold),tradeGold:Number(e.tradeGold??0n),trainGold:Number(e.trainGold??0n),piracyGold:Number(e.piracyGold??0n),goldEarned:Number(e.goldEarned??0n),oil:e.oil??0,gas:e.gas??0,uranium:e.uranium??0,troops:e.troops,isTraitor:e.isTraitor,traitorRemainingTicks:Math.max(0,e.traitorRemainingTicks??0),inDoomsdayClock:e.inDoomsdayClock??!1,isDecaying:e.isDecaying??!1,markedDoomsdayClockTick:e.markedDoomsdayClockTick??-1,betrayals:e.betrayals,hasSpawned:e.hasSpawned,spawnTile:e.spawnTile,lastDeleteUnitTick:e.lastDeleteUnitTick,allies:e.allies.slice(),embargoes:[],targets:e.targets.slice(),outgoingAttacks:e.outgoingAttacks,incomingAttacks:e.incomingAttacks,outgoingAllianceRequests:e.outgoingAllianceRequests.slice(),tradeOffer:e.tradeOffer??null,alliances:e.alliances,outgoingEmojis:e.outgoingEmojis}}function Ys(e,t){let n=[];for(let r of e){let e=t(r);e!==void 0&&n.push(e)}return n}function Xs(e,t,n){if(e!==void 0)for(let r=0;r+7<e.length;r+=8){let i=t(e[r]);i!==void 0&&(i.tilesOwned=e[r+1],i.gold=e[r+2],i.troops=e[r+3],i.goldEarned=e[r+4],i.oil=e[r+5],i.gas=e[r+6],i.uranium=e[r+7],n?.(e[r]))}}function Zs(e,t,n={}){if(e!==void 0)for(let r=0;r+3<e.length;r+=4){let i=t(e[r]);if(i===void 0)continue;let a=e[r+1]===0?i.outgoingAttacks:i.incomingAttacks,o=e[r+2],s=a[o];s!==void 0&&(n.copy?a[o]={...s,troops:e[r+3]}:s.troops=e[r+3]),n.applied?.(e[r])}}function Qs(e,t,n){if(n===`self`)return e;let r=t.showFrom??`everyone`;if(r===`self`||r===`teammates`&&n!==`teammate`)return{verified:e.verified};let i={...e};return t.territorySkins===!1&&(delete i.pattern,delete i.skin),t.flags===!1&&delete i.flag,t.crowns===!1&&delete i.crown,e.effects!==void 0&&(i.effects=Object.fromEntries(Object.entries(e.effects).filter(([e])=>{let n=re(e);return n===void 0||t[n]!==!1}))),i}function $s(e,t,n,r,i){let a=e.borderColor(t),o=n.pattern?n.pattern.colorPalette??{primaryColor:t.toHex(),secondaryColor:a.toHex()}:void 0;return{territory:r===null?jt(n.color?.color??o?.primaryColor??t.toHex()):t,border:jt(o?.secondaryColor??n.color?.color??(i?e.focusedBorderColor():a).toHex())}}function ec(e){return It.sanitize(e,{ALLOWED_TAGS:[`span`,`img`],ALLOWED_ATTR:[`src`,`alt`,`class`,`style`],ALLOWED_URI_REGEXP:/^https:\/\/cdn\.jsdelivr\.net\/gh\/twitter\/twemoji/,ADD_ATTR:[`style`]})}var tc=f,nc=class{constructor(e){this.player=e}},rc=`[P1]`,ic=new Set([`help.troops`,`help.gold`,`help.alliance`,`help.no_attack`,`help.sorry_attack`,`help.help_defend`,`attack.attack`,`attack.mirv`,`attack.crown`,`defend.defend`,`defend.dont_attack`,`greet.hello`,`greet.good_luck`,`greet.gg`,`greet.thanks`,`greet.oops`,`misc.go`,`misc.team_up`,`warnings.betrayed`,`warnings.mirv_ready`]),ac={"greet.oops":`misc`,"misc.team_up":`attack`},oc=Object.entries(tc).flatMap(([e,t])=>t.map(t=>({category:e,phrase:t}))),sc=(e,t)=>`${e}.${t.key}`,cc=class extends P{constructor(...e){super(...e),this.isOpen=!1,this.pending=null,this.search=``,this.showAll=!1,this.categories=[{id:`help`},{id:`attack`},{id:`defend`},{id:`greet`},{id:`misc`},{id:`warnings`}]}createRenderRoot(){return this}render(){return this.isOpen?M`
      <div
        class="fixed inset-0 bg-black/15 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${e=>e.target===e.currentTarget&&this.close()}
      >
        <div class="relative">
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            aria-label=${F(`common.close`)}
            @click=${()=>this.close()}
          >
            ✕
          </button>
          <div
            class="bg-zinc-900/95 p-3 rounded-xl shadow-2xl shadow-black/50 ring-1 ring-white/10 text-white
                   w-[min(44rem,calc(100vw-32px))] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
          >
            <div class="flex items-baseline gap-2 pe-4">
              <h2 class="font-semibold">${F(`chat.title`)}</h2>
              <span class="truncate text-sm text-zinc-400"
                >${this.recipient?.displayName()}</span
              >
              ${this.pending?null:this.renderAllPhrasesSwitch()}
            </div>
            ${this.pending?this.renderPlayerPicker():this.renderSections()}
          </div>
        </div>
      </div>
    `:null}renderAllPhrasesSwitch(){return M`
      <button
        class="ms-auto shrink-0 flex items-center gap-2 text-sm text-zinc-300 hover:text-white cursor-pointer"
        role="switch"
        aria-checked=${this.showAll}
        @click=${()=>this.showAll=!this.showAll}
      >
        ${F(`chat.all_phrases`)}
        <span
          class="relative inline-block w-8 h-4.5 rounded-full transition-colors ${this.showAll?`bg-blue-500`:`bg-zinc-600`}"
        >
          <span
            class="absolute top-0.5 left-0.5 size-3.5 rounded-full bg-white transition-transform ${this.showAll?`translate-x-3.5`:``}"
          ></span>
        </span>
      </button>
    `}renderSections(){return this.categories.map(({id:e})=>{let t=oc.filter(({category:t,phrase:n})=>{let r=sc(t,n);return(ac[r]??t)===e&&(this.showAll||ic.has(r))}).sort((t,n)=>Number(!ic.has(sc(t.category,t.phrase)))-Number(!ic.has(sc(n.category,n.phrase)))||Number(t.category!==e)-Number(n.category!==e));return t.length===0?null:M`
        <section>
          <h3
            class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
          >
            ${F(`chat.cat.${e}`)}
          </h3>
          <div class="flex flex-wrap gap-1">
            ${t.map(({category:e,phrase:t})=>{let n=F(`chat.${e}.${t.key}`);return M`
                <button
                  class="max-w-[15rem] truncate px-2.5 py-1 rounded-md text-sm text-left
                         bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
                  title=${n.replace(rc,`___`)}
                  @click=${()=>this.pickPhrase(e,t)}
                >
                  ${this.renderWithBlank(this.chipLabel(e,t.key,n))}
                </button>
              `})}
          </div>
        </section>
      `})}chipLabel(e,t,n){let r=`chat.short.${e}.${t}`;return v(r)?F(r):n}renderWithBlank(e){let[t,...n]=e.split(rc);return n.length===0?e:M`${t}<span
        class="inline-block w-6 mx-0.5 border-b border-zinc-400 align-baseline"
      ></span
      >${n.join(rc)}`}renderPlayerPicker(){let{category:e,phrase:t}=this.pending,n=this.targetChoices();return M`
      <div class="flex items-center gap-2">
        <button
          class="px-2 py-1 rounded-md bg-white/5 hover:bg-white/15 cursor-pointer"
          aria-label=${F(`common.back`)}
          @click=${()=>this.pending=null}
        >
          ←
        </button>
        <span class="font-medium">
          ${this.renderWithBlank(F(`chat.${e}.${t.key}`))}
        </span>
      </div>
      <input
        class="px-2 py-1.5 rounded-md bg-zinc-800 ring-1 ring-white/10 text-sm outline-none focus:ring-white/30"
        type="text"
        placeholder=${F(`chat.search`)}
        .value=${this.search}
        @input=${e=>this.search=e.target.value}
        @keydown=${e=>{e.key===`Enter`&&!e.isComposing&&n.length>0&&this.sendPending(n[0])}}
      />
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-1">
        ${n.map(e=>M`
            <button
              class="truncate px-2.5 py-1.5 rounded-md text-sm text-left border-l-4
                     bg-white/5 hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer"
              style="border-left-color: ${e.territoryColor().toHex()}"
              @click=${()=>this.sendPending(e)}
            >
              ${e.displayName()}
            </button>
          `)}
      </div>
    `}targetChoices(){let e=new Set;for(let t of[this.sender,this.recipient])for(let n of[...t.incomingAttacks(),...t.outgoingAttacks()])e.add(n.attackerID),e.add(n.targetID);e.delete(this.sender.smallID()),e.delete(this.recipient.smallID());let n=this.search.trim().toLowerCase();return this.g.players().filter(e=>e.isAlive()&&e.type()!==t.Bot&&e.displayName().toLowerCase().includes(n)).sort((t,n)=>Number(e.has(n.smallID()))-Number(e.has(t.smallID()))||n.numTilesOwned()-t.numTilesOwned())}updated(){if(this.pending){let e=this.querySelector(`input`);e&&document.activeElement!==e&&e.focus()}}initEventBus(e){this.eventBus=e,e.on(an,()=>{this.isOpen&&this.close()}),e.on(yn,e=>{if(this.isOpen){this.close();return}let t=this.g.myPlayer();if(!t?.isAlive())return;let n=this.transformHandler.screenToWorldCoordinates(e.x,e.y);if(!this.g.isValidCoord(n.x,n.y))return;let r=this.g.owner(this.g.ref(n.x,n.y));!r.isPlayer()||r===t||this.open(t,r)}),e.on(nc,e=>{let t=this.g.myPlayer();t?.isAlive()&&this.open(t,e.player)})}pickPhrase(e,t){if(t.requiresPlayer){this.search=``,this.pending={category:e,phrase:t};return}this.send(`${e}.${t.key}`)}sendPending(e){let{category:t,phrase:n}=this.pending;this.send(`${t}.${n.key}`,e)}send(e,t){this.sender&&this.recipient&&this.eventBus.emit(new pr(this.recipient,e,t?.id())),this.close()}open(e,t){e&&t&&(this.recipient=t,this.sender=e),this.pending=null,this.search=``,this.isOpen=!0}close(){this.isOpen=!1,this.pending=null,this.search=``}setRecipient(e){this.recipient=e}setSender(e){this.sender=e}openWithSelection(e,t,n,r){this.open(n,r);let i=tc[e]?.find(e=>e.key===t);i&&this.pickPhrase(e,i)}};N([x()],cc.prototype,`isOpen`,void 0),N([x()],cc.prototype,`pending`,void 0),N([x()],cc.prototype,`search`,void 0),N([x()],cc.prototype,`showAll`,void 0),cc=N([E(`chat-modal`)],cc);var lc=I(`images/BattleshipIconWhite.svg`),uc=I(`images/CityIconWhite.svg`),dc=I(`images/FactoryIconWhite.svg`);I(`images/OilFieldIconWhite.svg`),I(`images/GasFieldIconWhite.svg`),I(`images/UraniumPlantIconWhite.svg`),I(`images/RadarIconWhite.svg`);var fc=I(`images/GoldCoinIcon.svg`);I(`images/OilDropIcon.svg`),I(`images/GasFlameIcon.svg`),I(`images/UraniumIcon.svg`),I(`images/MIRVIcon.svg`);var pc=I(`images/MissileSiloIconWhite.svg`);I(`images/MushroomCloudIconWhite.svg`),I(`images/NukeIconWhite.svg`),I(`images/BallisticMissileIconWhite.svg`);var mc=I(`images/PortIcon.svg`),hc=I(`images/SamLauncherIconWhite.svg`);I(`images/ShieldIconWhite.svg`);var gc=I(`images/SoldierIcon.svg`),_c=I(`images/ClaimIcon.svg`),vc=I(`images/ProfileIcon.svg`),yc=I(`images/GuildIconWhite.svg`),bc=I(`images/TeamIconSolidWhite.svg`),xc=I(`images/UpperLimitIcon.svg`),Sc=I(`images/AllianceIcon.svg`),Cc=I(`images/TraitorIcon.svg`),wc=class{constructor(e){this.player=e}},Tc=class extends P{constructor(...e){super(...e),this.isVisible=!1,this.eventBus=null,this.userSettings=new Ee,this.favorites=[],this.dragOverSlot=null,this.dragged=null,this.onEmojiClicked=()=>{},this.handleBackdropClick=e=>{let t=this.querySelector(`div[class*="bg-zinc-900"]`);t&&!t.contains(e.target)&&this.hideTable()},this.dragOverElsewhere=e=>{this.dragged&&this.dragged.fromSlot!==null&&e.preventDefault()},this.dropElsewhere=e=>{if(!this.dragged||this.dragged.fromSlot===null)return;e.preventDefault();let t=[...this.favorites];t[this.dragged.fromSlot]=null,this.saveFavorites(t),this.dragged=null,this.dragOverSlot=null},this.endDrag=()=>{this.dragged=null,this.dragOverSlot=null}}initEventBus(e){this.eventBus=e,e.on(vn,t=>{let n=this.transformHandler.screenToWorldCoordinates(t.x,t.y);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!this.game.hasOwner(r))return;let i=this.game.owner(r);i instanceof Os||this.showForPlayer(e,i)}),e.on(wc,t=>this.showForPlayer(e,t.player)),e.on(xn,e=>{let t=this.favorites[e.slot];this.isVisible&&t&&this.onEmojiClicked(t)}),e.on(an,()=>{this.hidden||this.hideTable()})}showForPlayer(e,t){this.isVisible||this.showTable(n=>{let r=t===this.game.myPlayer()?c:t;e.emit(new cr(r,m.indexOf(n))),this.hideTable()})}render(){return this.isVisible?M`
      <div
        class="fixed inset-0 bg-black/15 backdrop-brightness-110 flex items-start sm:items-center justify-center z-10002 pt-4 sm:pt-0"
        @click=${this.handleBackdropClick}
        @dragover=${this.dragOverElsewhere}
        @drop=${this.dropElsewhere}
      >
        <div class="relative">
          <!-- Close button -->
          <button
            class="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center
                    bg-zinc-700 hover:bg-red-500 text-white rounded-full shadow-sm transition-colors z-10004"
            @click=${this.hideTable}
          >
            ✕
          </button>

          <div
            class="bg-zinc-900/95 p-3 rounded-xl z-10003 shadow-2xl shadow-black/50 ring-1 ring-white/10
                   max-w-[calc(100vw-32px)] max-h-[calc(100vh-60px)] overflow-y-auto
                   flex flex-col gap-3"
            @contextmenu=${e=>e.preventDefault()}
            @wheel=${e=>e.stopPropagation()}
            @click=${e=>e.stopPropagation()}
          >
            ${this.renderFavorites()}
            ${Ut.filter(e=>!e.columns).map(e=>this.renderSection(e))}
            <!-- Fixed-column sections are small, so they share a row. -->
            <div class="flex gap-6">
              ${Ut.filter(e=>e.columns).map(e=>this.renderSection(e))}
            </div>
          </div>
        </div>
      </div>
    `:null}renderFavorites(){let e=this.favorites.every(e=>e===null),t=!p.isTouch;return M`
      <section class="hidden sm:block">
        <h3
          class="mb-1 text-center text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${F(`emoji_table.favorites`)}
        </h3>
        <div class="flex justify-center gap-1">
          ${this.favorites.map((e,n)=>{let r=`border border-dashed border-zinc-600`;return e&&(r=`cursor-pointer bg-white/5 hover:bg-white/10`),this.dragOverSlot===n&&(r+=` bg-white/20`),M`
              <button
                class="relative flex items-center justify-center size-16 rounded-lg text-5xl transition-colors ${r}"
                draggable=${e?`true`:`false`}
                title=${e?F(`emoji_table.favorite_remove_hint`):``}
                @click=${()=>e&&this.onEmojiClicked(e)}
                @dragstart=${t=>e&&this.startDrag(t,e,n)}
                @dragend=${this.endDrag}
                @dragover=${e=>this.dragOver(e,n)}
                @dragleave=${()=>this.dragOverSlot=null}
                @drop=${e=>this.drop(e,n)}
              >
                ${e??``}
                ${t?M`<span
                      class="pointer-events-none absolute top-0.5 left-1.5 text-xs leading-tight font-mono text-zinc-400"
                      translate="no"
                      >${Gt(n)}</span
                    >`:null}
              </button>
            `})}
        </div>
        ${e?M`<p class="mt-1 text-center text-xs text-zinc-500">
              ${F(t?`emoji_table.favorites_hint`:`emoji_table.favorites_hint_touch`)}
            </p>`:null}
      </section>
    `}startDrag(e,t,n){this.dragged={emoji:t,fromSlot:n},e.dataTransfer?.setData(`text/plain`,t)}dragOver(e,t){this.dragged&&(e.preventDefault(),this.dragOverSlot=t)}drop(e,t){e.preventDefault(),this.dragged&&this.saveFavorites(qt(this.favorites,this.dragged.emoji,t)),this.dragged=null,this.dragOverSlot=null}saveFavorites(e){this.favorites=e,this.userSettings.setFavoriteEmojis(e)}renderSection(e){let t=`grid-cols-[repeat(5,auto)] sm:grid-cols-[repeat(8,auto)] lg:grid-cols-[repeat(10,auto)]`;return e.columns===2&&(t=`grid-cols-[repeat(2,auto)]`),e.columns===3&&(t=`grid-cols-[repeat(3,auto)]`),M`
      <section>
        <h3
          class="mb-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
        >
          ${F(e.title)}
        </h3>
        <div class="grid ${t} gap-1">
          ${e.emojis.map(e=>M`
              <button
                class="flex items-center justify-center cursor-pointer size-12 sm:size-14 rounded-lg
                       text-3xl sm:text-4xl hover:bg-white/10 active:bg-white/20 transition-colors"
                draggable="true"
                @click=${()=>this.onEmojiClicked(e)}
                @dragstart=${t=>this.startDrag(t,e,null)}
                @dragend=${this.endDrag}
              >
                ${e}
              </button>
            `)}
        </div>
      </section>
    `}hideTable(){this.isVisible=!1,this.eventBus?.emit(new bn(!1)),this.requestUpdate()}showTable(e){this.onEmojiClicked=e;let t=this.userSettings.favoriteEmojis();this.favorites=Array.from({length:6},(e,n)=>t[n]??null),this.isVisible=!0,this.eventBus?.emit(new bn(!0)),this.requestUpdate()}createRenderRoot(){return this}};N([x()],Tc.prototype,`isVisible`,void 0),N([x()],Tc.prototype,`favorites`,void 0),N([x()],Tc.prototype,`dragOverSlot`,void 0),Tc=N([E(`emoji-table`)],Tc);var Ec=new Set([n.NUKE_INBOUND,n.HYDROGEN_BOMB_INBOUND,n.MIRV_INBOUND,n.NUKE_DETONATED,n.NAVAL_INVASION_INBOUND,n.CONQUERED_PLAYER,n.ATTACK_REQUEST]),Dc=e=>Ec.has(e),Oc=class extends P{updated(e){super.updated(e),this._eventsContainer&&this._shouldScrollToBottom&&(this._eventsContainer.scrollTop=this._eventsContainer.scrollHeight)}renderButton(e){let{content:t,onClick:n,className:r=``,disabled:i=!1,translate:a=!0,hidden:o=!1}=e;return o?M``:M`
      <button
        class="${r}"
        @click=${n}
        ?disabled=${i}
        ?translate=${a}
      >
        ${t}
      </button>
    `}constructor(){super(),this.active=!1,this.events=[],this.userSettings=new Ee,this._isVisible=!1,this._isCollapsed=!1,this._shouldScrollToBottom=!0,this.updateMap=[[We.DisplayEvent,this.onDisplayMessageEvent.bind(this)],[We.DisplayChatEvent,this.onDisplayChatEvent.bind(this)],[We.AllianceRequestReply,this.onAllianceRequestReplyEvent.bind(this)],[We.BrokeAlliance,this.onBrokeAllianceEvent.bind(this)],[We.TargetPlayer,this.onTargetPlayerEvent.bind(this)],[We.Emoji,this.onEmojiMessageEvent.bind(this)],[We.UnitIncoming,this.onUnitIncomingEvent.bind(this)],[We.AllianceExpired,this.onAllianceExpiredEvent.bind(this)],[We.DonateEvent,this.onDonateEvent.bind(this)]],this.onUiSuggestion=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail;!t||typeof t.description!=`string`||typeof t.type!=`number`||!Number.isFinite(t.createdAt)||t.focusID!==void 0&&typeof t.focusID!=`number`||t.focusID!==void 0&&!Number.isFinite(t.focusID)||t.requestorID!==void 0&&(typeof t.requestorID!=`number`||!Number.isFinite(t.requestorID))||t.duration!==void 0&&(!Number.isFinite(t.duration)||t.duration<0)||this.addEvent({description:t.description,type:t.type,createdAt:t.createdAt,focusID:t.focusID,requestorID:t.requestorID,duration:t.duration,minor:t.minor??!0})},this.events=[]}connectedCallback(){super.connectedCallback(),document.addEventListener(`ui-suggestion`,this.onUiSuggestion)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`ui-suggestion`,this.onUiSuggestion)}init(){this.eventBus.on(Qn,this.onAllianceRequestSentConfirmation.bind(this))}onAllianceRequestSentConfirmation(e){let t=this.game.myPlayer();!t||e.requestor.id()!==t.id()||e.recipient.isRequestingAllianceWith(e.requestor)||this.addEvent({description:F(`events_display.alliance_request_sent`,{name:e.recipient.displayName()}),type:n.ALLIANCE_REQUEST,createdAt:this.game.ticks()})}tick(){if(this.active=!0,this._eventsContainer){let e=this._eventsContainer;this._shouldScrollToBottom=e.scrollHeight-e.scrollTop-e.clientHeight<5}else this._shouldScrollToBottom=!0;!this._isVisible&&!this.game.inSpawnPhase()&&(this._isVisible=!0,this.requestUpdate());let e=this.game.myPlayer();if(!e||!e.isAlive()){this._isVisible&&(this._isVisible=!1,this.requestUpdate());return}let t=this.game.updatesSinceLastTick();if(t)for(let[e,n]of this.updateMap)t[e]?.forEach(n);let r=this.events.filter(e=>{let t=e.duration??80,r=this.game.ticks()-e.createdAt>=t,i=e.type===n.ALLIANCE_REQUEST&&e.requestorID!==void 0&&!this.getRespondableAllianceRequest(e),a=(e.type===n.NUKE_INBOUND||e.type===n.HYDROGEN_BOMB_INBOUND||e.type===n.MIRV_INBOUND||e.type===n.NAVAL_INVASION_INBOUND)&&e.unitView!==void 0&&!e.unitView.isActive(),o=!r&&!a&&!i;return!o&&e.onDelete&&e.onDelete(),o});r.length>30&&(r=r.slice(-30)),this.events.length!==r.length&&(this.events=r,this.requestUpdate());for(let t of e.incomingAttacks()){let r=t.attackerID,i=this.game.playerBySmallID(r);if(!i.isPlayer())continue;let a=i;if(e.isFriendly(a))continue;let o=a.smallID();this.events.some(e=>e.type===n.ATTACK_REQUEST&&e.focusID===o)||this.addEvent({description:F(`events_display.land_attack_inbound`,{name:a.displayName()}),type:n.ATTACK_REQUEST,createdAt:this.game.ticks(),focusID:o,duration:100})}this.requestUpdate()}addEvent(e){let t=`${e.description}::${Math.floor(e.createdAt/1e3)}`;if(this.events.some(e=>`${e.description}::${Math.floor(e.createdAt/1e3)}`===t))return;let n=[...this.events,e];n.sort((e,t)=>e.createdAt-t.createdAt),this.events=n.slice(-200),this.requestUpdate()}resolveParams(e){let t=e.params??{};if((e.message===`events_display.missile_intercepted`||e.message===`events_display.unit_destroyed`)&&typeof t.unit==`string`&&t.unit.startsWith(`unit_type.`)&&(t={...t,unit:F(t.unit)}),t.name===void 0||e.focusPlayerID===void 0)return t;let n=this.game.playerBySmallID(e.focusPlayerID);return n.isPlayer()?{...t,name:n.displayName()}:t}onDisplayMessageEvent(e){let t=this.game.myPlayer();if(e.playerID!==null&&(!t||t.smallID()!==e.playerID))return;let n=e.message;e.message.startsWith(`events_display.`)&&(n=F(e.message,this.resolveParams(e)));let r=e.unitID===void 0?void 0:this.game.unit(e.unitID);this.addEvent({description:n,createdAt:this.game.ticks(),highlight:!0,type:e.messageType,unsafeDescription:!0,unitView:r,focusID:e.focusPlayerID,minor:e.message===`events_display.received_gold_from_captured_ship`})}onDisplayChatEvent(e){let t=this.game.myPlayer();if(e.playerID===null||!t||t.smallID()!==e.playerID)return;let r=F(`chat.${e.category}.${e.key}`),i=r;if(e.target)try{let t=this.game.player(e.target)?.displayName()??e.target;i=r.replace(`[P1]`,t)}catch(t){console.warn(`Failed to resolve player for target ID '${e.target}'`,t);return}let a=``,o;if(e.recipient!==null){let t=this.game.player(e.recipient);a=t?t.displayName():``,o=t?.smallID()}let s=!e.isFrom;this.addEvent({description:F(s?`chat.to`:`chat.from`,{user:a,msg:i}),createdAt:this.game.ticks(),highlight:!s,minor:s,type:n.CHAT,unsafeDescription:!1,focusID:o}),s||this.eventBus.emit(new Mt(`message`))}onAllianceRequestReplyEvent(e){let t=this.game.myPlayer();if(!t)return;if(e.request.recipientID===t.smallID()){let t=e.request.requestorID,r=this.events.filter(e=>!(e.type===n.ALLIANCE_REQUEST&&e.requestorID===t));r.length!==this.events.length&&(this.events=r,this.requestUpdate());return}if(e.request.requestorID!==t.smallID())return;let r=this.game.playerBySmallID(e.request.recipientID);this.addEvent({description:F(`events_display.alliance_request_status`,{name:r.displayName(),status:e.accepted?F(`events_display.alliance_accepted`):F(`events_display.alliance_rejected`)}),type:e.accepted?n.ALLIANCE_ACCEPTED:n.ALLIANCE_REJECTED,highlight:!0,createdAt:this.game.ticks(),focusID:e.request.recipientID}),this.eventBus.emit(new Mt(e.accepted?`alliance-accepted`:`alliance-declined`))}respondToAllianceRequest(e,t){let n=this.getRespondableAllianceRequest(e);n&&(t?this.eventBus.emit(new Qn(n.recipient,n.requestor)):this.eventBus.emit(new tr(n.requestor)),this.events=this.events.filter(t=>t!==e),this.requestUpdate())}onBrokeAllianceEvent(e){let t=this.game.myPlayer();if(!t)return;let r=this.game.playerBySmallID(e.betrayedID),i=this.game.playerBySmallID(e.traitorID);if(!r.isDisconnected())if(!r.isTraitor()&&i===t){this.eventBus.emit(new Mt(`alliance-broken`));let t=Math.round((1-this.game.config().traitorDefenseDebuff())*100),i=Math.floor(this.game.config().traitorDuration()*.1),a=i===1?F(`events_display.duration_second`):F(`events_display.duration_seconds_plural`,{seconds:i});this.addEvent({description:F(`events_display.betrayal_description`,{name:r.displayName(),malusPercent:t,durationText:a}),type:n.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.betrayedID})}else r===t&&(this.eventBus.emit(new Mt(`alliance-broken`)),this.addEvent({description:F(`events_display.betrayed_you`,{name:i.displayName()}),type:n.ALLIANCE_BROKEN,highlight:!0,createdAt:this.game.ticks(),focusID:e.traitorID}))}onAllianceExpiredEvent(e){let t=this.game.myPlayer();if(!t)return;let r=e.player1ID===t.smallID()?e.player2ID:e.player2ID===t.smallID()?e.player1ID:null;if(r===null)return;let i=this.game.playerBySmallID(r);!i||!t.isAlive()||!i.isAlive()||this.addEvent({description:F(`events_display.alliance_expired`,{name:i.displayName()}),type:n.ALLIANCE_EXPIRED,highlight:!0,createdAt:this.game.ticks(),focusID:r})}onDonateEvent(e){let t=this.game.myPlayer();if(!t)return;let r=e.recipientId===t.id(),i=e.senderId===t.id();if(!r&&!i)return;let a=r?this.game.player(e.senderId):this.game.player(e.recipientId),o=e.donationType===`gold`,s=r?o?`events_display.received_gold_from_player`:`events_display.received_troops_from_player`:o?`events_display.sent_gold_to_player`:`events_display.sent_troops_to_player`,c={name:a.displayName(),[o?`gold`:`troops`]:o?L(e.amount):Fe(Number(e.amount))};this.addEvent({description:F(s,c),type:r?n.DONATION_RECEIVED:n.DONATION_SENT,highlight:!0,createdAt:this.game.ticks(),focusID:a.smallID()})}onTargetPlayerEvent(e){let t=this.game.playerBySmallID(e.playerID),r=this.game.myPlayer();if(!r||!r.isFriendly(t))return;let i=this.game.playerBySmallID(e.targetID);this.addEvent({description:F(`events_display.attack_request`,{name:t.displayName(),target:i.displayName()}),type:n.ATTACK_REQUEST,highlight:!0,createdAt:this.game.ticks(),focusID:e.targetID})}emitGoToPlayerEvent(e){let t=this.game.playerBySmallID(e);t.isPlayer()&&this.eventBus.emit(new Rn(t))}getRespondableAllianceRequest(e){if(e.type!==n.ALLIANCE_REQUEST||e.requestorID===void 0)return;let t=this.game.myPlayer(),r=this.game.playerBySmallID(e.requestorID);if(!(!t?.isAlive()||!r.isPlayer()||!r.isAlive()||!r.isRequestingAllianceWith(t)))return{requestor:r,recipient:t}}emitGoToUnitEvent(e){this.eventBus.emit(new Bn(e))}onEmojiMessageEvent(e){let t=this.game.myPlayer();if(!t)return;let r=e.emoji.recipientID===`AllPlayers`?c:this.game.playerBySmallID(e.emoji.recipientID),i=this.game.playerBySmallID(e.emoji.senderID);if(r===t){if(!this.userSettings.emojis())return;this.addEvent({description:`${i.displayName()}: ${e.emoji.message}`,unsafeDescription:!0,type:n.CHAT,highlight:!0,createdAt:this.game.ticks(),focusID:e.emoji.senderID})}else i===t&&r!==`AllPlayers`?this.addEvent({description:F(`events_display.sent_emoji`,{name:r.displayName(),emoji:e.emoji.message}),unsafeDescription:!0,type:n.CHAT,minor:!0,createdAt:this.game.ticks(),focusID:r.smallID()}):i===t&&this.addEvent({description:F(`events_display.sent_emoji_all`,{emoji:e.emoji.message}),unsafeDescription:!0,type:n.CHAT,minor:!0,createdAt:this.game.ticks()})}onUnitIncomingEvent(e){let t=this.game.myPlayer();if(!t||t.smallID()!==e.playerID)return;let n=this.game.unit(e.unitID);this.addEvent({description:e.message,type:e.messageType,unsafeDescription:!1,highlight:!0,createdAt:this.game.ticks(),unitView:n})}getEventDescription(e){return e.unsafeDescription?Ft(ec(e.description)):e.description}renderBetrayalDebuffTimer(){let e=this.game.myPlayer();if(!e||!e.isTraitor())return M``;let t=e.getTraitorRemainingTicks(),n=Math.ceil(t/10);return n<=0?M``:M`
      ${this.renderButton({content:M`${F(`events_display.betrayal_debuff_ends`,{time:n})}`,className:`text-left text-yellow-400`,translate:!1})}
    `}renderEventRow(e){let t=this.getRespondableAllianceRequest(e),n=t!==void 0,r=t?.requestor,i=t?.recipient;return M`
      <tr>
        <td
          class="lg:px-2 lg:py-1 p-1 text-left ${w(e.type)}"
        >
          ${n?M`
                <div class="flex flex-col gap-1.5">
                  ${this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.focusID&&this.emitGoToPlayerEvent(e.focusID)},className:`text-left`})}
                  ${r&&i?M`
                        <div class="flex gap-2">
                          <button
                            class="rounded-md bg-emerald-600 px-2 py-1 text-[11px] font-semibold text-white transition hover:bg-emerald-500"
                            @click=${()=>this.respondToAllianceRequest(e,!0)}
                          >
                            ${F(`events_display.accept_alliance`)}
                          </button>
                          <button
                            class="rounded-md border border-white/15 px-2 py-1 text-[11px] text-slate-200 transition hover:bg-white/10"
                            @click=${()=>this.respondToAllianceRequest(e,!1)}
                          >
                            ${F(`events_display.reject_alliance`)}
                          </button>
                        </div>
                      `:``}
                </div>
              `:e.focusID?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.focusID&&this.emitGoToPlayerEvent(e.focusID)},className:`text-left`}):e.unitView?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.unitView&&this.emitGoToUnitEvent(e.unitView)},className:`text-left`}):this.getEventDescription(e)}
        </td>
      </tr>
    `}renderIncomingTradeOffer(e,t){let n=Math.max(0,Math.ceil((t.expiresAt-this.game.ticks())/10));return M`
      <article
        class="rounded-lg border border-amber-200/20 bg-white/[0.035] p-2 text-white"
        aria-label=${F(`deal.incoming_offer`)}
      >
        <div class="flex min-w-0 items-start justify-between gap-2">
          <strong class="min-w-0 truncate text-xs font-semibold">
            ${F(`deal.offer_to_you`,{sender:e.displayName()})}
          </strong>
          <span class="shrink-0 text-[10px] tabular-nums text-slate-400"
            >${F(`deal.expires_in`,{seconds:n})}</span
          >
        </div>
        <p class="my-1 text-xs text-slate-200">
          ${L(t.offeredAmount)}
          ${F(`deal.resource.${t.offeredResource}`)}
          <span class="px-1 text-amber-200" aria-hidden="true">↔</span>
          ${L(t.requestedAmount)}
          ${F(`deal.resource.${t.requestedResource}`)}
        </p>
        <div class="flex gap-2">
          <button
            class="flex-1 rounded-md bg-amber-300 px-2 py-1 text-xs font-semibold text-slate-950 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            @click=${()=>this.eventBus.emit(new fr(e,`accept`))}
          >
            ${F(`deal.accept`)}
          </button>
          <button
            class="flex-1 rounded-md border border-white/15 px-2 py-1 text-xs font-medium text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            @click=${()=>this.eventBus.emit(new fr(e,`reject`))}
          >
            ${F(`deal.reject`)}
          </button>
        </div>
      </article>
    `}render(){if(!this.active||!this._isVisible)return M``;let e=this.game.myPlayer(),t=!!(e&&e.isTraitor()&&e.getTraitorRemainingTicks()>0),n=e?this.game.players().map(e=>({player:e,offer:e.tradeOffer()})).filter(t=>t.offer!==void 0&&t.offer?.recipientID===e.id()&&t.offer.expiresAt>this.game.ticks()):[],r=[],i=[];for(let e of this.events)Dc(e.type)&&!e.minor&&r.push(e),(!Dc(e.type)||e.minor)&&i.push(e);r.sort((e,t)=>e.createdAt-t.createdAt),i.sort((e,t)=>e.createdAt-t.createdAt);let a=r.slice(-3);i=i.slice(-4);let o=i.length+n.length;return M`
      <div
        class="pointer-events-none fixed left-1/2 top-[max(3.5rem,env(safe-area-inset-top))] z-[207] flex w-[min(36rem,calc(100vw-1.5rem))] -translate-x-1/2 flex-col gap-2"
        aria-live="polite"
        aria-label=${F(`events_display.global_news`)}
      >
        <div
          class="game-battle-news-badge mx-auto flex items-center gap-2 rounded-full border border-amber-300/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-xl"
        >
          <span
            class="h-1.5 w-1.5 ${a.length>0?`animate-pulse bg-amber-300`:`bg-slate-500`} rounded-full"
          ></span>
          ${F(`events_display.global_news`)}
        </div>
        ${a.length>0?a.map(e=>M`
                <div
                  class="pointer-events-auto rounded-xl border border-white/10 border-l-2 border-l-amber-300 bg-slate-950/90 px-3 py-2 text-sm text-white shadow-lg backdrop-blur-xl ${w(e.type)}"
                >
                  ${e.focusID?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.focusID&&this.emitGoToPlayerEvent(e.focusID)},className:`w-full text-left`}):e.unitView?this.renderButton({content:this.getEventDescription(e),onClick:()=>{e.unitView&&this.emitGoToUnitEvent(e.unitView)},className:`w-full text-left`}):this.getEventDescription(e)}
                </div>
              `):M`
              <div
                class="mx-auto rounded-lg border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs text-slate-400 shadow-lg backdrop-blur-xl"
              >
                ${F(`events_display.news_waiting`)}
              </div>
            `}
      </div>
      <section
        class="w-full min-[1200px]:w-96 overflow-hidden rounded-xl border border-amber-200/15 bg-slate-950/90 text-white shadow-lg backdrop-blur-xl pointer-events-auto"
        aria-label=${F(`events_display.activity_feed`)}
      >
        <header
          class="flex items-center justify-between gap-2 border-b border-amber-200/10 px-3 py-2"
        >
          <div
            class="flex items-center gap-2 text-xs font-medium text-slate-200"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
            ${F(`events_display.activity_feed`)}
            ${o>0?M`<span
                  class="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300"
                  >${o}</span
                >`:``}
          </div>
          <button
            class="rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-expanded=${!this._isCollapsed}
            aria-label=${F(this._isCollapsed?`events_display.show_activity_feed`:`events_display.hide_activity_feed`)}
            @click=${()=>{this._isCollapsed=!this._isCollapsed}}
          >
            ${F(this._isCollapsed?`events_display.show_activity_feed`:`events_display.hide_activity_feed`)}
          </button>
        </header>
        ${this._isCollapsed?``:M`
              <div class="max-h-[30vh] overflow-y-auto p-2 lg:max-h-[36vh]">
                <div class="flex flex-col gap-2">
                  ${n.length>0?M`
                        <div
                          class="incoming-trade-offers flex max-h-[min(18dvh,16rem)] flex-col gap-2 overflow-y-auto rounded-lg border border-amber-200/10 bg-white/[0.025] p-2"
                          aria-label=${F(`deal.incoming_offer`)}
                          aria-live="polite"
                        >
                          <div
                            class="flex items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-wide text-amber-100/80"
                          >
                            ${F(`deal.incoming_offer`)}
                            <span
                              class="rounded-full bg-amber-200/10 px-1.5 py-0.5 tabular-nums"
                              >${n.length}</span
                            >
                          </div>
                          ${n.map(({player:e,offer:t})=>this.renderIncomingTradeOffer(e,t))}
                        </div>
                      `:``}
                  ${i.length>0?M`
                        <div
                          class="max-h-[12vh] overflow-y-auto rounded-lg bg-white/[0.035] events-container lg:max-h-[18vh]"
                        >
                          <table
                            class="w-full border-collapse text-xs text-slate-100 lg:text-sm"
                          >
                            <tbody>
                              ${i.map(e=>this.renderEventRow(e))}
                            </tbody>
                          </table>
                        </div>
                      `:n.length===0?M`<p class="px-2 py-1 text-xs text-slate-500">
                          ${F(`events_display.activity_empty`)}
                        </p>`:``}
                  ${t?M`<div
                        class="rounded-lg bg-amber-300/[0.06] px-2 py-1 text-xs text-amber-200"
                      >
                        ${this.renderBetrayalDebuffTimer()}
                      </div>`:``}
                </div>
              </div>
            `}
      </section>
    `}createRenderRoot(){return this}};N([x()],Oc.prototype,`_isVisible`,void 0),N([x()],Oc.prototype,`_isCollapsed`,void 0),N([C(`.events-container`)],Oc.prototype,`_eventsContainer`,void 0),Oc=N([E(`events-display`)],Oc);var kc=class{constructor(e){this.visible=e}},Ac=class extends P{constructor(...e){super(...e),this.isVisible=!1,this._barVisible=!1,this.isActive=!1,this.progressRatio=0}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`7px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){this.isVisible=!0}tick(){if(!this.game||!this.isVisible)return;let e=this.game.config().gameConfig().gameMode===i.Team&&!this.game.inSpawnPhase();this.style.top=e?`7px`:`0px`;let t=this.game.config().spawnImmunityDuration(),n=this.game.config().numSpawnPhaseTurns();if(!this.game.config().hasExtendedSpawnImmunity()||this.game.inSpawnPhase())this.setInactive();else{let e=n+t,r=this.game.ticks();if(r>=e||r<n)this.setInactive();else{let e=Math.max(0,r-n);this.progressRatio=Math.min(1,Math.max(0,e/t)),this.isActive=!0,this.requestUpdate()}}this.emitBarVisibility()}setInactive(){this.isActive&&(this.isActive=!1,this.requestUpdate())}emitBarVisibility(){let e=this.isVisible&&this.isActive;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new kc(this._barVisible)))}render(){return!this.isVisible||!this.isActive?M``:M`
      <div class="w-full h-full flex z-999">
        <div
          class="h-full transition-all duration-100 ease-in-out"
          style="width: ${this.progressRatio*100}%; background-color: rgba(255, 165, 0, 0.9);"
        ></div>
      </div>
    `}};Ac=N([E(`immunity-timer`)],Ac);var jc=class extends P{constructor(...e){super(...e),this.columns=[],this.selected=[],this.open=!1,this.portal=null,this.onDocumentClick=e=>{let t=e.target;this.open&&!this.contains(t)&&!this.portal?.contains(t)&&(this.open=!1)},this.onViewportChange=e=>{let t=e.target;this.open&&!(t instanceof Node&&this.portal?.contains(t))&&this.renderPortal()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this.onDocumentClick),window.addEventListener(`resize`,this.onViewportChange),window.addEventListener(`scroll`,this.onViewportChange,!0)}disconnectedCallback(){document.removeEventListener(`click`,this.onDocumentClick),window.removeEventListener(`resize`,this.onViewportChange),window.removeEventListener(`scroll`,this.onViewportChange,!0),this.removePortal(),super.disconnectedCallback()}updated(){this.renderPortal()}toggle(e){let t=this.selected.includes(e);if(t&&this.selected.length===1)return;let n=this.columns.map(e=>e.id).filter(n=>n===e?!t:this.selected.includes(n));this.dispatchEvent(new CustomEvent(`columns-changed`,{detail:n,bubbles:!0,composed:!0}))}renderPortal(){if(!this.open||!this.isConnected){this.removePortal();return}let e=this.querySelector(`button`);if(e===null)return;this.portal===null&&(this.portal=document.createElement(`div`),this.portal.className=`column-picker-portal`,document.body.appendChild(this.portal));let t=e.getBoundingClientRect(),n=Math.max(8,window.innerWidth-t.right),r=t.bottom+4;k(M`
        <div
          class="column-picker-popover fixed z-2000 bg-gray-800/95 border border-slate-500 rounded-md p-2 flex flex-col gap-1 overflow-y-auto whitespace-nowrap"
          style="top: ${r}px; right: ${n}px; max-height: ${Math.max(80,Math.min(window.innerHeight*.4,window.innerHeight-r-8))}px;"
        >
          ${this.columns.map(e=>{let t=this.selected.includes(e.id);return M`
              <label
                class="flex items-center gap-2 text-xs lg:text-sm text-white cursor-pointer"
              >
                <input
                  type="checkbox"
                  .checked=${t}
                  ?disabled=${t&&this.selected.length===1}
                  @change=${()=>this.toggle(e.id)}
                />
                ${F(e.labelKey)}
              </label>
            `})}
        </div>
      `,this.portal)}removePortal(){this.portal?.remove(),this.portal=null}render(){return M`
      <button
        class="px-0.5 leading-none text-xs lg:text-sm border rounded-md border-slate-500 transition-colors text-white hover:bg-white/10 bg-gray-700/50"
        title=${F(`leaderboard.configure_columns`)}
        aria-expanded=${this.open}
        aria-haspopup="menu"
        @click=${()=>this.open=!this.open}
      >
        ⚙️
      </button>
    `}};N([g({attribute:!1})],jc.prototype,`columns`,void 0),N([g({attribute:!1})],jc.prototype,`selected`,void 0),N([x()],jc.prototype,`open`,void 0),jc=N([E(`column-picker`)],jc);var Mc=600,Nc=2*Mc,Pc=240,Fc=new class{constructor(){this.history=new Map}record(e,t,n){let r=this.history.get(e);r||(r=[],this.history.set(e,r)),r.push({...t,tick:n});let i=n-Nc;for(;r.length>0&&r[0].tick<i;)r.shift();r.length>Pc&&r.splice(0,r.length-Pc)}forget(e){this.history.delete(e)}resetAll(){this.history.clear()}goldIncomePerMin(e){return this.rate(e,e=>e.income)}shipTradeGoldPerMin(e){return this.rate(e,e=>e.trade)}trainTradeGoldPerMin(e){return this.rate(e,e=>e.train)}piracyGoldPerMin(e){return this.rate(e,e=>e.piracy)}rate(e,t){let n=this.history.get(e);if(!n||n.length<2)return 0;let r=n[0],i=n[n.length-1],a=(i.tick-r.tick)/Mc;return a<=0?0:(t(i)-t(r))/a}};function G(e){return{width:`auto`,align:`end`,kinds:[`player`,`team`],isHideable:!0,...e,isOrderable:e.value!==void 0}}function Ic(e,t,n,r){return G({id:e,labelKey:t,headerVisual:{kind:`icon`,src:r},align:`center`,value:e=>e.totalUnitLevels(n),cell:e=>L(e.value)})}var Lc={kind:`icon`,src:gc,white:!0},Rc=[G({id:`rank`,labelKey:`leaderboard.rank`,headerVisual:{kind:`text`,text:`#`},width:`34px`,align:`center`,isHideable:!1,cell:e=>String(e.position)}),G({id:`clan`,labelKey:`leaderboard.clan`,headerVisual:{kind:`icon`,src:yc},width:`80px`,align:`center`,kinds:[`player`],cell:e=>e.clanTag??``}),G({id:`player`,labelKey:`leaderboard.player`,headerVisual:{kind:`icon`,src:vc},width:`100px`,align:`start`,kinds:[`player`],isHideable:!1,cell:e=>e.name}),G({id:`playerType`,labelKey:`leaderboard.playerType`,headerVisual:{kind:`text`,text:`leaderboard.type`},kinds:[`player`],align:`center`,value:e=>{switch(e.type()){case t.Human:return 0;case t.Nation:return 1;case t.Bot:return 2;default:return 3}},cell:e=>{switch(e.value){case 0:return F(`player_type.player`);case 1:return F(`player_type.nation`);case 2:return F(`player_type.bot`);default:return`?`}}}),G({id:`team`,labelKey:`leaderboard.team`,headerVisual:{kind:`icon`,src:bc},width:`100px`,align:`start`,kinds:[`team`],isHideable:!1,cell:e=>e.name}),G({id:`tiles`,labelKey:`leaderboard.owned`,headerVisual:{kind:`icon`,src:_c,white:!0},value:e=>e.numTilesOwned(),cell:(e,t)=>{let n=t.numLandTiles()-t.numTilesWithFallout();return A(n>0?e.value/n:0)}}),G({id:`gold`,labelKey:`leaderboard.gold`,headerVisual:{kind:`icon`,src:fc},value:e=>Number(e.gold()),cell:e=>L(e.value)}),G({id:`goldIncomePerMin`,labelKey:`leaderboard.goldIncomePerMin`,headerVisual:{kind:`icon`,src:fc,superscript:{text:`/m`}},value:e=>Fc.goldIncomePerMin(e.smallID()),cell:e=>L(e.value)}),G({id:`shipTradeGoldPerMin`,labelKey:`leaderboard.shipTradeGoldPerMin`,headerVisual:{kind:`icon`,src:mc,superscript:{text:`/m`}},value:e=>Fc.shipTradeGoldPerMin(e.smallID()),cell:e=>L(e.value)}),G({id:`piracyGoldPerMin`,labelKey:`leaderboard.piracyGoldPerMin`,headerVisual:{kind:`icon`,src:lc,superscript:{text:`/m`}},value:e=>Fc.piracyGoldPerMin(e.smallID()),cell:e=>L(e.value)}),G({id:`trainTradeGoldPerMin`,labelKey:`leaderboard.trainTradeGoldPerMin`,headerVisual:{kind:`icon`,src:dc,superscript:{text:`/m`}},value:e=>Fc.trainTradeGoldPerMin(e.smallID()),cell:e=>L(e.value)}),G({id:`troops`,labelKey:`leaderboard.troops`,headerVisual:Lc,value:e=>e.troops(),cell:e=>Fe(e.value)}),G({id:`maxtroops`,labelKey:`leaderboard.maxtroops`,headerVisual:{...Lc,superscript:{src:xc,white:!0}},value:(e,t)=>t.config().maxTroops(e),cell:e=>Fe(e.value)}),Ic(`cities`,`leaderboard.cities`,u.City,uc),Ic(`ports`,`leaderboard.ports`,u.Port,mc),Ic(`factories`,`leaderboard.factories`,u.Factory,dc),Ic(`silos`,`leaderboard.launchers`,u.MissileSilo,pc),Ic(`sams`,`leaderboard.sams`,u.SAMLauncher,hc),Ic(`warships`,`leaderboard.warships`,u.Warship,lc),G({id:`allies`,labelKey:`leaderboard.allies`,headerVisual:{kind:`icon`,src:Sc},align:`center`,value:e=>e.allies().length,cell:e=>L(e.value)}),G({id:`betrayals`,labelKey:`leaderboard.betrayals`,headerVisual:{kind:`icon`,src:Cc},align:`center`,value:e=>e.betrayals(),cell:e=>L(e.value)})];function zc(e){return Rc.filter(t=>t.kinds.includes(e))}function Bc(e,t){Fc.record(e.smallID(),{income:e.goldEarned(),trade:e.tradeGold(),train:e.trainGold(),piracy:e.piracyGold()},t.ticks())}function Vc(e,t,n){Bc(e,t);let r=new Map;for(let i of n)i.value!==void 0&&r.set(i.id,i.value(e,t));return r}new Map(Rc.map(e=>[e.id,e]));var Hc=24,Uc=180,Wc=4,Gc=4,Kc=`32px`,qc={start:`justify-start text-left`,center:`justify-center text-center`,end:`justify-end text-right`},Jc=`h-6 md:h-8 lg:h-9 min-w-0 px-1 flex items-center`,Yc=`border-l border-l-amber-200/10`,Xc=`border-l border-l-amber-200/20`,Zc=class extends P{constructor(...e){super(...e),this.game=null,this.visible=!1,this.userSettings=new Ee,this.rows=[],this.sortKey=null,this.sortOrder=`desc`,this.scrollOffsetPx=0,this.rowHeightPx=Hc,this.viewportHeightPx=Uc}createRenderRoot(){return this}willUpdate(e){e.has(`visible`)&&this.visible&&(this.scrollOffsetPx=0,this.updateStats())}updated(){let e=this.querySelector(`.stats-table-scroll`);if(!(e instanceof HTMLElement))return;let t=e.querySelector(`.stats-table-row`),n=t instanceof HTMLElement?t.offsetHeight:0,r=e.clientHeight,i=!1;n>0&&n!==this.rowHeightPx&&(this.rowHeightPx=n,i=!0),r>0&&r!==this.viewportHeightPx&&(this.viewportHeightPx=r,i=!0),i&&this.requestUpdate()}onScroll(e){this.scrollOffsetPx=e.target.scrollTop}refresh(){this.visible&&this.updateStats()}visibleColumns(){let e=this.userSettings.statsColumns(this.tableKind);return zc(this.tableKind).filter(t=>!t.isHideable||e.includes(t.id))}setSort(e){this.sortKey===e?this.sortOrder=this.sortOrder===`asc`?`desc`:`asc`:(this.sortKey=e,this.sortOrder=`desc`),this.updateStats()}onColumnsChanged(e){this.userSettings.setStatsColumns(this.tableKind,e.detail),this.updateStats()}updateStats(){if(this.game===null)return;let e=this.visibleColumns(),t=e.filter(e=>e.isOrderable);t.length>0&&!t.some(e=>e.id===this.sortKey)&&(this.sortKey=t[0].id,this.sortOrder=`desc`);let n=this.sortKey,r=this.buildRows(this.game,e),i=this.sortOrder===`asc`?1:-1;this.rows=t.length===0||n===null?r:r.sort((e,t)=>i*((e.values.get(n)??0)-(t.values.get(n)??0))),this.requestUpdate()}renderHeaderVisual(e,t){let n=e.headerVisual;return n===void 0?M`<span>${t}</span>`:n.kind===`text`?M`<span>${F(n.text)}</span>`:M`<span class="inline-flex items-start">
      <img
        class="size-[1.1rem] object-contain ${n.white===!0?`brightness-0 invert`:``}"
        src=${n.src}
        alt=""
        aria-hidden="true"
      />${n.superscript?`src`in n.superscript?M`<img
              class="size-[0.825rem] object-contain -ml-0.5 ${n.superscript.white===!0?`brightness-0 invert`:``}"
              src=${n.superscript.src}
              alt=""
              aria-hidden="true"
            />`:M`<span class="text-[0.6rem] ml-0.5 self-center leading-none"
              >${F(n.superscript.text)}</span
            >`:j}
    </span>`}renderHeaderCell(e,t){let n=F(e.labelKey),r=this.renderHeaderVisual(e,n),i=this.sortKey===e.id;return M`
      <div
        class="stats-table-header-cell ${Jc} justify-center text-center whitespace-nowrap border-b border-b-slate-500 ${t>0?Xc:``}"
        role="columnheader"
        title=${n}
        aria-sort=${e.isOrderable?i?this.sortOrder===`asc`?`ascending`:`descending`:`none`:j}
      >
        ${e.isOrderable?M`<button
              class="inline-flex items-center justify-center gap-1 hover:text-sky-200 transition-colors"
              aria-label=${n}
              @click=${()=>this.setSort(e.id)}
            >
              ${r}
              ${i?M`<span class="text-amber-200" aria-hidden="true"
                    >${this.sortOrder===`asc`?`↑`:`↓`}</span
                  >`:j}
            </button>`:r}
      </div>
    `}renderCell(e,t,n,r,i){return M`
      <div
        class="stats-table-cell ${Jc} ${qc[e.align]} tabular-nums ${t>0?Yc:``} ${r}"
        role="cell"
      >
        ${i?M`<img
              class="mr-1.5 size-5 shrink-0 rounded-sm object-cover shadow-sm"
              src=${I(i)}
              alt=""
              aria-hidden="true"
            />`:j}
        <span class="block min-w-0 w-full truncate">${n}</span>
      </div>
    `}renderRow(e,t,{row:n,position:r},i,a=!1){return M`
      <div
        class="stats-table-row grid col-span-full hover:bg-amber-200/[0.06] ${a?`stats-table-pinned-row bg-amber-200/[0.08]`:``} ${n.emphasized?`font-bold`:``} ${n.onClick?`cursor-pointer`:``}"
        style="grid-template-columns: subgrid; grid-column: 1 / -1;"
        role="row"
        @click=${n.onClick??j}
      >
        ${Lt(t,e=>e.id,(t,a)=>this.renderCell(t,a,t.cell({...n,position:r,value:n.values.get(t.id)??0},e),i,t.id===`player`?n.flagUrl:void 0))}
        <div
          class="h-6 md:h-8 lg:h-9 ${Yc} ${i}"
          aria-hidden="true"
        ></div>
      </div>
    `}render(){let e=this.game;if(!this.visible||e===null)return M``;let t=this.visibleColumns(),n=this.rows.findIndex(e=>e.pinned),r=n>Gc?{row:this.rows[n],position:n+1}:null,i=r===null?this.rows:this.rows.filter((e,t)=>t!==n),a=Math.max(0,Math.floor(this.scrollOffsetPx/this.rowHeightPx)-Wc),o=Math.min(i.length,Math.ceil((this.scrollOffsetPx+this.viewportHeightPx)/this.rowHeightPx)+Wc),s=i.slice(a,o).map((e,t)=>{let i=a+t;return{row:e,position:r!==null&&i>=n?i+2:i+1}}),c=a*this.rowHeightPx,l=(i.length-o)*this.rowHeightPx,u=`${t.map(e=>e.width).join(` `)} ${Kc}`,d=r===null?`max-h-[7.5rem] md:max-h-[10rem] lg:max-h-[11.25rem]`:`max-h-[6rem] md:max-h-[8rem] lg:max-h-[9rem]`;return M`
      <div
        class="stats-table relative mt-1 text-white text-xs lg:text-sm"
        dir="auto"
      >
        <div
          class="overflow-x-auto rounded-xl border border-amber-200/15 bg-[#11110e]/95 shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
          @contextmenu=${e=>e.preventDefault()}
        >
          <div
            class="stats-table-content grid w-max min-w-full"
            style="grid-template-columns: ${u};"
            role="table"
          >
            <div
              class="stats-table-header grid col-span-full font-bold bg-amber-300/[0.08] text-amber-100"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="row"
            >
              ${Lt(t,e=>e.id,(e,t)=>this.renderHeaderCell(e,t))}
              <div
                class="${Jc} justify-center border-b border-b-slate-500 ${Xc}"
                role="columnheader"
              >
                <column-picker
                  class="inline-flex"
                  .columns=${zc(this.tableKind).filter(e=>e.isHideable)}
                  .selected=${this.userSettings.statsColumns(this.tableKind)}
                  @columns-changed=${this.onColumnsChanged}
                ></column-picker>
              </div>
            </div>

            <div
              class="stats-table-scroll ${d} grid col-span-full overflow-y-scroll overflow-x-hidden"
              style="grid-template-columns: subgrid; grid-column: 1 / -1;"
              role="rowgroup"
              @scroll=${this.onScroll}
            >
              ${c>0?M`<div
                    class="stats-table-spacer col-span-full"
                    style="height: ${c}px"
                    aria-hidden="true"
                  ></div>`:j}
              ${Lt(s,e=>e.row.key,(n,i)=>this.renderRow(e,t,n,i<s.length-1||r!==null||l>0?`border-b border-b-slate-500`:``))}
              ${l>0?M`<div
                    class="stats-table-spacer col-span-full"
                    style="height: ${l}px"
                    aria-hidden="true"
                  ></div>`:j}
            </div>

            ${r===null?j:this.renderRow(e,t,r,``,!0)}
          </div>
        </div>
      </div>
    `}};N([g({type:Boolean})],Zc.prototype,`visible`,void 0),N([x()],Zc.prototype,`sortKey`,void 0),N([x()],Zc.prototype,`sortOrder`,void 0),N([x()],Zc.prototype,`scrollOffsetPx`,void 0);var Qc=class extends Zc{constructor(...e){super(...e),this.eventBus=null,this.tableKind=`player`}buildRows(e,t){let n=e.myPlayer();return e.playerViews().filter(e=>e.isAlive()).map(r=>({key:r.id(),name:r.name(),clanTag:r.clanTag(),flagUrl:r.cosmetics.flag,values:Vc(r,e,t),emphasized:n!==null&&(r===n||r.isOnSameTeam(n)),pinned:r===n,onClick:()=>{this.eventBus!==null&&this.eventBus.emit(new Rn(r))}}))}};Qc=N([E(`player-stats`)],Qc);var $c=class{constructor(e){this.visible=e}},el=class extends P{constructor(...e){super(...e),this.ratios=[0],this._barVisible=!1,this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`,`rgba(0, 0, 0, 0.5)`],this.isVisible=!1,this.hoveredIndex=null}createRenderRoot(){return this.style.position=`fixed`,this.style.top=`0`,this.style.left=`0`,this.style.width=`100%`,this.style.height=`9px`,this.style.zIndex=`1000`,this.style.pointerEvents=`none`,this}init(){this.isVisible=!0}tick(){if(this.game.config().gameConfig().gameType===o.Singleplayer&&this.game.inSpawnPhase()){this.ratios=[],this.teams=[],this.colors=[],this.requestUpdate();return}if(this.game.inSpawnPhase())this.ratios=[this.game.ticks()/this.game.config().numSpawnPhaseTurns()],this.teams=[],this.colors=[`rgb(from var(--color-bright-blue) r g b / 0.85)`];else if(this.ratios=[],this.teams=[],this.colors=[],this.game.config().gameConfig().gameMode===i.Team){let e=new Map;for(let t of this.game.players()){let n=t.team();if(n===null)continue;let r=e.get(n)??0;e.set(n,r+t.numTilesOwned())}let t=Pt.current(),n=tl(e.values());if(n>0)for(let[r,i]of e){let e=i/n;this.ratios.push(e),this.teams.push(r),this.colors.push(t.teamColor(r).toRgbString())}}this.requestUpdate(),this.emitBarVisibility()}emitBarVisibility(){let e=this.isVisible&&this.ratios.length>0;e!==this._barVisible&&(this._barVisible=e,this.eventBus?.emit(new $c(this._barVisible)))}render(){return!this.isVisible||this.ratios.length===0||this.colors.length===0||!this.game.inSpawnPhase()&&this.game.config().gameConfig().gameMode!==i.Team?M``:M`
      <div class="relative w-full h-full flex z-999">
        ${this.ratios.map((e,t)=>{let n=this.colors[t]||`rgba(0, 0, 0, 0.5)`;return M`
            <div
              class="h-full pointer-events-auto transition-all duration-100 ease-in-out w-(--width) bg-(--bg) border-b-3 border-r-2 border-black"
              style="--width: ${e*100}%; --bg: ${n};"
              @mouseenter=${()=>this.hoveredIndex=t}
              @mouseleave=${()=>this.hoveredIndex=null}
            ></div>
          `})}
        ${this.renderTooltip()}
      </div>
    `}renderTooltip(){let e=this.hoveredIndex,t=e===null?void 0:this.teams[e];if(e===null||t===void 0)return j;let n=0,r=0;for(let t=0;t<=e;t++)r=(n+this.ratios[t]/2)*100,n+=this.ratios[t];let i=`clamp(64px, ${r}%, calc(100% - 64px))`,a=`team_colors.${t.toLowerCase()}`,o=F(a);return M`
      <div
        class="absolute top-3.5 -translate-x-1/2 z-999 px-2 py-1 rounded bg-black/85 text-white text-xs text-center break-words pointer-events-none"
        style="left: ${i}; max-width: 128px"
      >
        ${F(`spawn_timer.team_percent_tooltip`,{team:o===a?t:o,percent:A(this.ratios[e])})}
      </div>
    `}};N([x()],el.prototype,`hoveredIndex`,void 0),el=N([E(`spawn-timer`)],el);function tl(e){let t=0;for(let n of e)t+=n;return t}var nl=I(`images/ExitIconWhite.svg`),rl=I(`images/SettingIconWhite.svg`),il=I(`images/TreeIconWhite.svg`),al=class{constructor(e=!0,t=!1,n=!1){this.isVisible=e,this.shouldPause=t,this.isPaused=n}},ol=class extends P{constructor(...e){super(...e),this.isVisible=!1,this.alternateView=!1,this.shouldPause=!1,this.wasPausedWhenOpened=!1,this.handleOutsideClick=e=>{this.isVisible&&this.modalOverlay&&e.target===this.modalOverlay&&this.closeModal()},this.handleKeyDown=e=>{this.isVisible&&e.key===`Escape`&&this.closeModal()}}init(){this.eventBus.on(al,e=>{this.isVisible=e.isVisible,this.shouldPause=e.shouldPause,this.wasPausedWhenOpened=e.isPaused,this.pauseGame(!0)})}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener(`click`,this.handleOutsideClick,!0),window.addEventListener(`keydown`,this.handleKeyDown)}disconnectedCallback(){window.removeEventListener(`click`,this.handleOutsideClick,!0),window.removeEventListener(`keydown`,this.handleKeyDown),super.disconnectedCallback()}get open(){return this.isVisible}openModal(){this.isVisible=!0,this.requestUpdate()}closeModal({keepPause:e=!1}={}){this.isVisible=!1,this.requestUpdate(),e||this.pauseGame(!1)}pauseGame(e){e?ae.gameplayStop():this.wasPausedWhenOpened||ae.gameplayStart(),this.shouldPause&&!this.wasPausedWhenOpened&&this.eventBus.emit(new Xn(e))}onTerrainButtonClick(){this.alternateView=!this.alternateView,this.eventBus.emit(new rn(this.alternateView)),this.requestUpdate()}onOpenSettingsButtonClick(){let e=document.getElementById(`game-settings`);if(e===null||typeof e.open!=`function`){console.warn(`In-game settings modal (#game-settings) not found`);return}this.closeModal({keepPause:!0}),e.open({tab:`gameplay`,onReturn:()=>this.openModal()})}onRenderDebugGuiButtonClick(){this.eventBus.emit(new sn),this.closeModal()}onExitButtonClick(){window.location.href=_()}render(){return this.isVisible?M`
      <div
        class="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-xs z-2000 flex items-center justify-center p-4"
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-slate-800 border border-slate-600 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
        >
          <div
            class="flex items-center justify-between p-4 border-b border-slate-600"
          >
            <div class="flex items-center gap-2">
              <img
                src=${rl}
                alt=""
                width="24"
                height="24"
                class="align-middle"
              />
              <h2 class="text-xl font-semibold text-white">
                ${F(`user_setting.game_menu_title`)}
              </h2>
            </div>
            <button
              class="text-slate-400 hover:text-white text-2xl font-bold leading-none"
              @click=${this.closeModal}
            >
              ×
            </button>
          </div>

          <div class="p-4 flex flex-col gap-3">
            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              data-open-settings
              @click="${this.onOpenSettingsButtonClick}"
            >
              <img src=${rl} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${F(`user_setting.open_settings_label`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${F(`user_setting.open_settings_desc`)}
                </div>
              </div>
            </button>

            <button
              class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
              @click="${this.onTerrainButtonClick}"
            >
              <img src=${il} alt="" width="20" height="20" />
              <div class="flex-1">
                <div class="font-medium">
                  ${F(`user_setting.toggle_terrain`)}
                </div>
                <div class="text-sm text-slate-400">
                  ${F(`user_setting.toggle_view_desc`)}
                </div>
              </div>
              <div class="text-sm text-slate-400">
                ${this.alternateView?F(`user_setting.on`):F(`user_setting.off`)}
              </div>
            </button>

            <div class="border-t border-slate-600 pt-3 mt-4">
              <div
                class="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider"
              >
                ${F(`user_setting.development_only`)}
              </div>

              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-slate-700 rounded-sm text-white transition-colors"
                @click="${this.onRenderDebugGuiButtonClick}"
              >
                <img src=${rl} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${F(`user_setting.render_debug_gui`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${F(`user_setting.render_debug_gui_desc`)}
                  </div>
                </div>
              </button>
            </div>

            <div class="border-t border-slate-600 pt-3 mt-4">
              <button
                class="flex gap-3 items-center w-full text-left p-3 hover:bg-red-600/20 rounded-sm text-red-400 transition-colors"
                @click="${this.onExitButtonClick}"
              >
                <img src=${nl} alt="" width="20" height="20" />
                <div class="flex-1">
                  <div class="font-medium">
                    ${F(`user_setting.exit_game_label`)}
                  </div>
                  <div class="text-sm text-slate-400">
                    ${F(`user_setting.exit_game_info`)}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    `:null}};N([x()],ol.prototype,`isVisible`,void 0),N([x()],ol.prototype,`alternateView`,void 0),N([C(`.modal-overlay`)],ol.prototype,`modalOverlay`,void 0),N([g({type:Boolean})],ol.prototype,`shouldPause`,void 0),N([g({type:Boolean})],ol.prototype,`wasPausedWhenOpened`,void 0),ol=N([E(`settings-modal`)],ol);var sl={value:()=>{}};function cl(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+``)||r in n||/[\s.]/.test(r))throw Error(`illegal type: `+r);n[r]=[]}return new ll(n)}function ll(e){this._=e}function ul(e,t){return e.trim().split(/^|\s+/).map(function(e){var n=``,r=e.indexOf(`.`);if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw Error(`unknown type: `+e);return{type:e,name:n}})}ll.prototype=cl.prototype={constructor:ll,on:function(e,t){var n=this._,r=ul(e+``,n),i,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((i=(e=r[a]).type)&&(i=dl(n[i],e.name)))return i;return}if(t!=null&&typeof t!=`function`)throw Error(`invalid callback: `+t);for(;++a<o;)if(i=(e=r[a]).type)n[i]=fl(n[i],e.name,t);else if(t==null)for(i in n)n[i]=fl(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ll(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=Array(i),r=0,i,a;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(a=this._[e],r=0,i=a.length;r<i;++r)a[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw Error(`unknown type: `+e);for(var r=this._[e],i=0,a=r.length;i<a;++i)r[i].value.apply(t,n)}};function dl(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function fl(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=sl,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var pl={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`};function ml(e){var t=e+=``,n=t.indexOf(`:`);return n>=0&&(t=e.slice(0,n))!==`xmlns`&&(e=e.slice(n+1)),pl.hasOwnProperty(t)?{space:pl[t],local:e}:e}function hl(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===`http://www.w3.org/1999/xhtml`&&t.documentElement.namespaceURI===`http://www.w3.org/1999/xhtml`?t.createElement(e):t.createElementNS(n,e)}}function gl(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function _l(e){var t=ml(e);return(t.local?gl:hl)(t)}function vl(){}function yl(e){return e==null?vl:function(){return this.querySelector(e)}}function bl(e){typeof e!=`function`&&(e=yl(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=Array(o),c,l,u=0;u<o;++u)(c=a[u])&&(l=e.call(c,c.__data__,u,a))&&(`__data__`in c&&(l.__data__=c.__data__),s[u]=l);return new K(r,this._parents)}function xl(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Sl(){return[]}function Cl(e){return e==null?Sl:function(){return this.querySelectorAll(e)}}function wl(e){return function(){return xl(e.apply(this,arguments))}}function Tl(e){e=typeof e==`function`?wl(e):Cl(e);for(var t=this._groups,n=t.length,r=[],i=[],a=0;a<n;++a)for(var o=t[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&(r.push(e.call(c,c.__data__,l,o)),i.push(c));return new K(r,i)}function El(e){return function(){return this.matches(e)}}function Dl(e){return function(t){return t.matches(e)}}var Ol=Array.prototype.find;function kl(e){return function(){return Ol.call(this.children,e)}}function Al(){return this.firstElementChild}function jl(e){return this.select(e==null?Al:kl(typeof e==`function`?e:Dl(e)))}var Ml=Array.prototype.filter;function Nl(){return Array.from(this.children)}function Pl(e){return function(){return Ml.call(this.children,e)}}function Fl(e){return this.selectAll(e==null?Nl:Pl(typeof e==`function`?e:Dl(e)))}function Il(e){typeof e!=`function`&&(e=El(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new K(r,this._parents)}function Ll(e){return Array(e.length)}function Rl(){return new K(this._enter||this._groups.map(Ll),this._parents)}function zl(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}zl.prototype={constructor:zl,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function Bl(e){return function(){return e}}function Vl(e,t,n,r,i,a){for(var o=0,s,c=t.length,l=a.length;o<l;++o)(s=t[o])?(s.__data__=a[o],r[o]=s):n[o]=new zl(e,a[o]);for(;o<c;++o)(s=t[o])&&(i[o]=s)}function Hl(e,t,n,r,i,a,o){var s,c,l=new Map,u=t.length,d=a.length,f=Array(u),p;for(s=0;s<u;++s)(c=t[s])&&(f[s]=p=o.call(c,c.__data__,s,t)+``,l.has(p)?i[s]=c:l.set(p,c));for(s=0;s<d;++s)p=o.call(e,a[s],s,a)+``,(c=l.get(p))?(r[s]=c,c.__data__=a[s],l.delete(p)):n[s]=new zl(e,a[s]);for(s=0;s<u;++s)(c=t[s])&&l.get(f[s])===c&&(i[s]=c)}function Ul(e){return e.__data__}function Wl(e,t){if(!arguments.length)return Array.from(this,Ul);var n=t?Hl:Vl,r=this._parents,i=this._groups;typeof e!=`function`&&(e=Bl(e));for(var a=i.length,o=Array(a),s=Array(a),c=Array(a),l=0;l<a;++l){var u=r[l],d=i[l],f=d.length,p=Gl(e.call(u,u&&u.__data__,l,r)),m=p.length,h=s[l]=Array(m),g=o[l]=Array(m);n(u,d,h,g,c[l]=Array(f),p,t);for(var _=0,v=0,y,b;_<m;++_)if(y=h[_]){for(_>=v&&(v=_+1);!(b=g[v])&&++v<m;);y._next=b||null}}return o=new K(o,r),o._enter=s,o._exit=c,o}function Gl(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Kl(){return new K(this._exit||this._groups.map(Ll),this._parents)}function ql(e,t,n){var r=this.enter(),i=this,a=this.exit();return typeof e==`function`?(r=e(r),r&&=r.selection()):r=r.append(e+``),t!=null&&(i=t(i),i&&=i.selection()),n==null?a.remove():n(a),r&&i?r.merge(i).order():i}function Jl(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,a=r.length,o=Math.min(i,a),s=Array(i),c=0;c<o;++c)for(var l=n[c],u=r[c],d=l.length,f=s[c]=Array(d),p,m=0;m<d;++m)(p=l[m]||u[m])&&(f[m]=p);for(;c<i;++c)s[c]=n[c];return new K(s,this._parents)}function Yl(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,a=r[i],o;--i>=0;)(o=r[i])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Xl(e){e||=Zl;function t(t,n){return t&&n?e(t.__data__,n.__data__):!t-!n}for(var n=this._groups,r=n.length,i=Array(r),a=0;a<r;++a){for(var o=n[a],s=o.length,c=i[a]=Array(s),l,u=0;u<s;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new K(i,this._parents).order()}function Zl(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function Ql(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function $l(){return Array.from(this)}function eu(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null}function tu(){let e=0;for(let t of this)++e;return e}function nu(){return!this.node()}function ru(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],a=0,o=i.length,s;a<o;++a)(s=i[a])&&e.call(s,s.__data__,a,i);return this}function iu(e){return function(){this.removeAttribute(e)}}function au(e){return function(){this.removeAttributeNS(e.space,e.local)}}function ou(e,t){return function(){this.setAttribute(e,t)}}function su(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function cu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function lu(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function uu(e,t){var n=ml(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?au:iu:typeof t==`function`?n.local?lu:cu:n.local?su:ou)(n,t))}function du(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function fu(e){return function(){this.style.removeProperty(e)}}function pu(e,t,n){return function(){this.style.setProperty(e,t,n)}}function mu(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function hu(e,t,n){return arguments.length>1?this.each((t==null?fu:typeof t==`function`?mu:pu)(e,t,n??``)):gu(this.node(),e)}function gu(e,t){return e.style.getPropertyValue(t)||du(e).getComputedStyle(e,null).getPropertyValue(t)}function _u(e){return function(){delete this[e]}}function vu(e,t){return function(){this[e]=t}}function yu(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function bu(e,t){return arguments.length>1?this.each((t==null?_u:typeof t==`function`?yu:vu)(e,t)):this.node()[e]}function xu(e){return e.trim().split(/^|\s+/)}function Su(e){return e.classList||new Cu(e)}function Cu(e){this._node=e,this._names=xu(e.getAttribute(`class`)||``)}Cu.prototype={add:function(e){this._names.indexOf(e)<0&&(this._names.push(e),this._node.setAttribute(`class`,this._names.join(` `)))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute(`class`,this._names.join(` `)))},contains:function(e){return this._names.indexOf(e)>=0}};function wu(e,t){for(var n=Su(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Tu(e,t){for(var n=Su(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Eu(e){return function(){wu(this,e)}}function Du(e){return function(){Tu(this,e)}}function Ou(e,t){return function(){(t.apply(this,arguments)?wu:Tu)(this,e)}}function ku(e,t){var n=xu(e+``);if(arguments.length<2){for(var r=Su(this.node()),i=-1,a=n.length;++i<a;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t==`function`?Ou:t?Eu:Du)(n,t))}function Au(){this.textContent=``}function ju(e){return function(){this.textContent=e}}function Mu(e){return function(){var t=e.apply(this,arguments);this.textContent=t??``}}function Nu(e){return arguments.length?this.each(e==null?Au:(typeof e==`function`?Mu:ju)(e)):this.node().textContent}function Pu(){this.innerHTML=``}function Fu(e){return function(){this.innerHTML=e}}function Iu(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??``}}function Lu(e){return arguments.length?this.each(e==null?Pu:(typeof e==`function`?Iu:Fu)(e)):this.node().innerHTML}function Ru(){this.nextSibling&&this.parentNode.appendChild(this)}function zu(){return this.each(Ru)}function Bu(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Vu(){return this.each(Bu)}function Hu(e){var t=typeof e==`function`?e:_l(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Uu(){return null}function Wu(e,t){var n=typeof e==`function`?e:_l(e),r=t==null?Uu:typeof t==`function`?t:yl(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Gu(){var e=this.parentNode;e&&e.removeChild(this)}function Ku(){return this.each(Gu)}function qu(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Ju(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Yu(e){return this.select(e?Ju:qu)}function Xu(e){return arguments.length?this.property(`__data__`,e):this.node().__data__}function Zu(e){return function(t){e.call(this,t,this.__data__)}}function Qu(e){return e.trim().split(/^|\s+/).map(function(e){var t=``,n=e.indexOf(`.`);return n>=0&&(t=e.slice(n+1),e=e.slice(0,n)),{type:e,name:t}})}function $u(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,a;n<i;++n)a=t[n],(!e.type||a.type===e.type)&&a.name===e.name?this.removeEventListener(a.type,a.listener,a.options):t[++r]=a;++r?t.length=r:delete this.__on}}}function ed(e,t,n){return function(){var r=this.__on,i,a=Zu(t);if(r){for(var o=0,s=r.length;o<s;++o)if((i=r[o]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=a,i.options=n),i.value=t;return}}this.addEventListener(e.type,a,n),i={type:e.type,name:e.name,value:t,listener:a,options:n},r?r.push(i):this.__on=[i]}}function td(e,t,n){var r=Qu(e+``),i,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var c=0,l=s.length,u;c<l;++c)for(i=0,u=s[c];i<a;++i)if((o=r[i]).type===u.type&&o.name===u.name)return u.value}return}for(s=t?ed:$u,i=0;i<a;++i)this.each(s(r[i],t,n));return this}function nd(e,t,n){var r=du(e),i=r.CustomEvent;typeof i==`function`?i=new i(t,n):(i=r.document.createEvent(`Event`),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function rd(e,t){return function(){return nd(this,e,t)}}function id(e,t){return function(){return nd(this,e,t.apply(this,arguments))}}function ad(e,t){return this.each((typeof t==`function`?id:rd)(e,t))}function*od(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,a=r.length,o;i<a;++i)(o=r[i])&&(yield o)}var sd=[null];function K(e,t){this._groups=e,this._parents=t}function cd(){return new K([[document.documentElement]],sd)}function ld(){return this}K.prototype=cd.prototype={constructor:K,select:bl,selectAll:Tl,selectChild:jl,selectChildren:Fl,filter:Il,data:Wl,enter:Rl,exit:Kl,join:ql,merge:Jl,selection:ld,order:Yl,sort:Xl,call:Ql,nodes:$l,node:eu,size:tu,empty:nu,each:ru,attr:uu,style:hu,property:bu,classed:ku,text:Nu,html:Lu,raise:zu,lower:Vu,append:Hu,insert:Wu,remove:Ku,clone:Yu,datum:Xu,on:td,dispatch:ad,[Symbol.iterator]:od};function ud(e){return typeof e==`string`?new K([[document.querySelector(e)]],[document.documentElement]):new K([[e]],sd)}function dd(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function fd(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function pd(){}var md=.7,hd=1/md,gd=`\\s*([+-]?\\d+)\\s*`,_d=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*`,vd=`\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*`,yd=/^#([0-9a-f]{3,8})$/,bd=RegExp(`^rgb\\(${gd},${gd},${gd}\\)$`),xd=RegExp(`^rgb\\(${vd},${vd},${vd}\\)$`),Sd=RegExp(`^rgba\\(${gd},${gd},${gd},${_d}\\)$`),Cd=RegExp(`^rgba\\(${vd},${vd},${vd},${_d}\\)$`),wd=RegExp(`^hsl\\(${_d},${vd},${vd}\\)$`),Td=RegExp(`^hsla\\(${_d},${vd},${vd},${_d}\\)$`),Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};dd(pd,q,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Dd,formatHex:Dd,formatHex8:Od,formatHsl:kd,formatRgb:Ad,toString:Ad});function Dd(){return this.rgb().formatHex()}function Od(){return this.rgb().formatHex8()}function kd(){return Hd(this).formatHsl()}function Ad(){return this.rgb().formatRgb()}function q(e){var t,n;return e=(e+``).trim().toLowerCase(),(t=yd.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?jd(t):n===3?new J(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Md(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Md(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=bd.exec(e))?new J(t[1],t[2],t[3],1):(t=xd.exec(e))?new J(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Sd.exec(e))?Md(t[1],t[2],t[3],t[4]):(t=Cd.exec(e))?Md(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=wd.exec(e))?Vd(t[1],t[2]/100,t[3]/100,1):(t=Td.exec(e))?Vd(t[1],t[2]/100,t[3]/100,t[4]):Ed.hasOwnProperty(e)?jd(Ed[e]):e===`transparent`?new J(NaN,NaN,NaN,0):null}function jd(e){return new J(e>>16&255,e>>8&255,e&255,1)}function Md(e,t,n,r){return r<=0&&(e=t=n=NaN),new J(e,t,n,r)}function Nd(e){return e instanceof pd||(e=q(e)),e?(e=e.rgb(),new J(e.r,e.g,e.b,e.opacity)):new J}function Pd(e,t,n,r){return arguments.length===1?Nd(e):new J(e,t,n,r??1)}function J(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}dd(J,Pd,fd(pd,{brighter(e){return e=e==null?hd:hd**+e,new J(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?md:md**+e,new J(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new J(zd(this.r),zd(this.g),zd(this.b),Rd(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Fd,formatHex:Fd,formatHex8:Id,formatRgb:Ld,toString:Ld}));function Fd(){return`#${Bd(this.r)}${Bd(this.g)}${Bd(this.b)}`}function Id(){return`#${Bd(this.r)}${Bd(this.g)}${Bd(this.b)}${Bd((isNaN(this.opacity)?1:this.opacity)*255)}`}function Ld(){let e=Rd(this.opacity);return`${e===1?`rgb(`:`rgba(`}${zd(this.r)}, ${zd(this.g)}, ${zd(this.b)}${e===1?`)`:`, ${e})`}`}function Rd(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function zd(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Bd(e){return e=zd(e),(e<16?`0`:``)+e.toString(16)}function Vd(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new Y(e,t,n,r)}function Hd(e){if(e instanceof Y)return new Y(e.h,e.s,e.l,e.opacity);if(e instanceof pd||(e=q(e)),!e)return new Y;if(e instanceof Y)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),a=Math.max(t,n,r),o=NaN,s=a-i,c=(a+i)/2;return s?(o=t===a?(n-r)/s+(n<r)*6:n===a?(r-t)/s+2:(t-n)/s+4,s/=c<.5?a+i:2-a-i,o*=60):s=c>0&&c<1?0:o,new Y(o,s,c,e.opacity)}function Ud(e,t,n,r){return arguments.length===1?Hd(e):new Y(e,t,n,r??1)}function Y(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}dd(Y,Ud,fd(pd,{brighter(e){return e=e==null?hd:hd**+e,new Y(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?md:md**+e,new Y(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new J(Kd(e>=240?e-240:e+120,i,r),Kd(e,i,r),Kd(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new Y(Wd(this.h),Gd(this.s),Gd(this.l),Rd(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let e=Rd(this.opacity);return`${e===1?`hsl(`:`hsla(`}${Wd(this.h)}, ${Gd(this.s)*100}%, ${Gd(this.l)*100}%${e===1?`)`:`, ${e})`}`}}));function Wd(e){return e=(e||0)%360,e<0?e+360:e}function Gd(e){return Math.max(0,Math.min(1,e||0))}function Kd(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}var qd=e=>()=>e;function Jd(e,t){return function(n){return e+n*t}}function Yd(e,t,n){return e**=+n,t=t**+n-e,n=1/n,function(r){return(e+r*t)**+n}}function Xd(e){return(e=+e)==1?Zd:function(t,n){return n-t?Yd(t,n,e):qd(isNaN(t)?n:t)}}function Zd(e,t){var n=t-e;return n?Jd(e,n):qd(isNaN(e)?t:e)}var Qd=(function e(t){var n=Xd(t);function r(e,t){var r=n((e=Pd(e)).r,(t=Pd(t)).r),i=n(e.g,t.g),a=n(e.b,t.b),o=Zd(e.opacity,t.opacity);return function(t){return e.r=r(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+``}}return r.gamma=e,r})(1);function $d(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var ef=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,tf=new RegExp(ef.source,`g`);function nf(e){return function(){return e}}function rf(e){return function(t){return e(t)+``}}function af(e,t){var n=ef.lastIndex=tf.lastIndex=0,r,i,a,o=-1,s=[],c=[];for(e+=``,t+=``;(r=ef.exec(e))&&(i=tf.exec(t));)(a=i.index)>n&&(a=t.slice(n,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(i=i[0])?s[o]?s[o]+=i:s[++o]=i:(s[++o]=null,c.push({i:o,x:$d(r,i)})),n=tf.lastIndex;return n<t.length&&(a=t.slice(n),s[o]?s[o]+=a:s[++o]=a),s.length<2?c[0]?rf(c[0].x):nf(t):(t=c.length,function(e){for(var n=0,r;n<t;++n)s[(r=c[n]).i]=r.x(e);return s.join(``)})}var of=180/Math.PI,sf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function cf(e,t,n,r,i,a){var o,s,c;return(o=Math.sqrt(e*e+t*t))&&(e/=o,t/=o),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(s=Math.sqrt(n*n+r*r))&&(n/=s,r/=s,c/=s),e*r<t*n&&(e=-e,t=-t,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(t,e)*of,skewX:Math.atan(c)*of,scaleX:o,scaleY:s}}var lf;function uf(e){let t=new(typeof DOMMatrix==`function`?DOMMatrix:WebKitCSSMatrix)(e+``);return t.isIdentity?sf:cf(t.a,t.b,t.c,t.d,t.e,t.f)}function df(e){return e==null||(lf||=document.createElementNS(`http://www.w3.org/2000/svg`,`g`),lf.setAttribute(`transform`,e),!(e=lf.transform.baseVal.consolidate()))?sf:(e=e.matrix,cf(e.a,e.b,e.c,e.d,e.e,e.f))}function ff(e,t,n,r){function i(e){return e.length?e.pop()+` `:``}function a(e,r,i,a,o,s){if(e!==i||r!==a){var c=o.push(`translate(`,null,t,null,n);s.push({i:c-4,x:$d(e,i)},{i:c-2,x:$d(r,a)})}else (i||a)&&o.push(`translate(`+i+t+a+n)}function o(e,t,n,a){e===t?t&&n.push(i(n)+`rotate(`+t+r):(e-t>180?t+=360:t-e>180&&(e+=360),a.push({i:n.push(i(n)+`rotate(`,null,r)-2,x:$d(e,t)}))}function s(e,t,n,a){e===t?t&&n.push(i(n)+`skewX(`+t+r):a.push({i:n.push(i(n)+`skewX(`,null,r)-2,x:$d(e,t)})}function c(e,t,n,r,a,o){if(e!==n||t!==r){var s=a.push(i(a)+`scale(`,null,`,`,null,`)`);o.push({i:s-4,x:$d(e,n)},{i:s-2,x:$d(t,r)})}else (n!==1||r!==1)&&a.push(i(a)+`scale(`+n+`,`+r+`)`)}return function(t,n){var r=[],i=[];return t=e(t),n=e(n),a(t.translateX,t.translateY,n.translateX,n.translateY,r,i),o(t.rotate,n.rotate,r,i),s(t.skewX,n.skewX,r,i),c(t.scaleX,t.scaleY,n.scaleX,n.scaleY,r,i),t=n=null,function(e){for(var t=-1,n=i.length,a;++t<n;)r[(a=i[t]).i]=a.x(e);return r.join(``)}}}var pf=ff(uf,`px, `,`px)`,`deg)`),mf=ff(df,`, `,`)`,`)`),hf=0,gf=0,_f=0,vf=1e3,yf,bf,xf=0,Sf=0,Cf=0,wf=typeof performance==`object`&&performance.now?performance:Date,Tf=typeof window==`object`&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Ef(){return Sf||=(Tf(Df),wf.now()+Cf)}function Df(){Sf=0}function Of(){this._call=this._time=this._next=null}Of.prototype=kf.prototype={constructor:Of,restart:function(e,t,n){if(typeof e!=`function`)throw TypeError(`callback is not a function`);n=(n==null?Ef():+n)+(t==null?0:+t),!this._next&&bf!==this&&(bf?bf._next=this:yf=this,bf=this),this._call=e,this._time=n,Pf()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pf())}};function kf(e,t,n){var r=new Of;return r.restart(e,t,n),r}function Af(){Ef(),++hf;for(var e=yf,t;e;)(t=Sf-e._time)>=0&&e._call.call(void 0,t),e=e._next;--hf}function jf(){Sf=(xf=wf.now())+Cf,hf=gf=0;try{Af()}finally{hf=0,Nf(),Sf=0}}function Mf(){var e=wf.now(),t=e-xf;t>vf&&(Cf-=t,xf=e)}function Nf(){for(var e,t=yf,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:yf=n);bf=e,Pf(r)}function Pf(e){hf||(gf&&=clearTimeout(gf),e-Sf>24?(e<1/0&&(gf=setTimeout(jf,e-wf.now()-Cf)),_f&&=clearInterval(_f)):(_f||=(xf=wf.now(),setInterval(Mf,vf)),hf=1,Tf(jf)))}function Ff(e,t,n){var r=new Of;return t=t==null?0:+t,r.restart(n=>{r.stop(),e(n+t)},t,n),r}var If=cl(`start`,`end`,`cancel`,`interrupt`),Lf=[];function Rf(e,t,n,r,i,a){var o=e.__transition;if(!o)e.__transition={};else if(n in o)return;Vf(e,n,{name:t,index:r,group:i,on:If,tween:Lf,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:0})}function zf(e,t){var n=X(e,t);if(n.state>0)throw Error(`too late; already scheduled`);return n}function Bf(e,t){var n=X(e,t);if(n.state>3)throw Error(`too late; already running`);return n}function X(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw Error(`transition not found`);return n}function Vf(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=kf(a,0,n.time);function a(e){n.state=1,n.timer.restart(o,n.delay,n.time),n.delay<=e&&o(e-n.delay)}function o(a){var l,u,d,f;if(n.state!==1)return c();for(l in r)if(f=r[l],f.name===n.name){if(f.state===3)return Ff(o);f.state===4?(f.state=6,f.timer.stop(),f.on.call(`interrupt`,e,e.__data__,f.index,f.group),delete r[l]):+l<t&&(f.state=6,f.timer.stop(),f.on.call(`cancel`,e,e.__data__,f.index,f.group),delete r[l])}if(Ff(function(){n.state===3&&(n.state=4,n.timer.restart(s,n.delay,n.time),s(a))}),n.state=2,n.on.call(`start`,e,e.__data__,n.index,n.group),n.state===2){for(n.state=3,i=Array(d=n.tween.length),l=0,u=-1;l<d;++l)(f=n.tween[l].value.call(e,e.__data__,n.index,n.group))&&(i[++u]=f);i.length=u+1}}function s(t){for(var r=t<n.duration?n.ease.call(null,t/n.duration):(n.timer.restart(c),n.state=5,1),a=-1,o=i.length;++a<o;)i[a].call(e,r);n.state===5&&(n.on.call(`end`,e,e.__data__,n.index,n.group),c())}function c(){for(var i in n.state=6,n.timer.stop(),delete r[t],r)return;delete e.__transition}}function Hf(e,t){var n=e.__transition,r,i,a=!0,o;if(n){for(o in t=t==null?null:t+``,n){if((r=n[o]).name!==t){a=!1;continue}i=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(i?`interrupt`:`cancel`,e,e.__data__,r.index,r.group),delete n[o]}a&&delete e.__transition}}function Uf(e){return this.each(function(){Hf(this,e)})}function Wf(e,t){var n,r;return function(){var i=Bf(this,e),a=i.tween;if(a!==n){r=n=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===t){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function Gf(e,t,n){var r,i;if(typeof n!=`function`)throw Error();return function(){var a=Bf(this,e),o=a.tween;if(o!==r){i=(r=o).slice();for(var s={name:t,value:n},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=s;break}c===l&&i.push(s)}a.tween=i}}function Kf(e,t){var n=this._id;if(e+=``,arguments.length<2){for(var r=X(this.node(),n).tween,i=0,a=r.length,o;i<a;++i)if((o=r[i]).name===e)return o.value;return null}return this.each((t==null?Wf:Gf)(n,e,t))}function qf(e,t,n){var r=e._id;return e.each(function(){var e=Bf(this,r);(e.value||={})[t]=n.apply(this,arguments)}),function(e){return X(e,r).value[t]}}function Jf(e,t){var n;return(typeof t==`number`?$d:t instanceof q?Qd:(n=q(t))?(t=n,Qd):af)(e,t)}function Yf(e){return function(){this.removeAttribute(e)}}function Xf(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Zf(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttribute(e);return o===i?null:o===r?a:a=t(r=o,n)}}function Qf(e,t,n){var r,i=n+``,a;return function(){var o=this.getAttributeNS(e.space,e.local);return o===i?null:o===r?a:a=t(r=o,n)}}function $f(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttribute(e):(o=this.getAttribute(e),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function ep(e,t,n){var r,i,a;return function(){var o,s=n(this),c;return s==null?void this.removeAttributeNS(e.space,e.local):(o=this.getAttributeNS(e.space,e.local),c=s+``,o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s)))}}function tp(e,t){var n=ml(e),r=n===`transform`?mf:Jf;return this.attrTween(e,typeof t==`function`?(n.local?ep:$f)(n,r,qf(this,`attr.`+e,t)):t==null?(n.local?Xf:Yf)(n):(n.local?Qf:Zf)(n,r,t))}function np(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function rp(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function ip(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&rp(e,i)),n}return i._value=t,i}function ap(e,t){var n,r;function i(){var i=t.apply(this,arguments);return i!==r&&(n=(r=i)&&np(e,i)),n}return i._value=t,i}function op(e,t){var n=`attr.`+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!=`function`)throw Error();var r=ml(e);return this.tween(n,(r.local?ip:ap)(r,t))}function sp(e,t){return function(){zf(this,e).delay=+t.apply(this,arguments)}}function cp(e,t){return t=+t,function(){zf(this,e).delay=t}}function lp(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?sp:cp)(t,e)):X(this.node(),t).delay}function up(e,t){return function(){Bf(this,e).duration=+t.apply(this,arguments)}}function dp(e,t){return t=+t,function(){Bf(this,e).duration=t}}function fp(e){var t=this._id;return arguments.length?this.each((typeof e==`function`?up:dp)(t,e)):X(this.node(),t).duration}function pp(e,t){if(typeof t!=`function`)throw Error();return function(){Bf(this,e).ease=t}}function mp(e){var t=this._id;return arguments.length?this.each(pp(t,e)):X(this.node(),t).ease}function hp(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!=`function`)throw Error();Bf(this,e).ease=n}}function gp(e){if(typeof e!=`function`)throw Error();return this.each(hp(this._id,e))}function _p(e){typeof e!=`function`&&(e=El(e));for(var t=this._groups,n=t.length,r=Array(n),i=0;i<n;++i)for(var a=t[i],o=a.length,s=r[i]=[],c,l=0;l<o;++l)(c=a[l])&&e.call(c,c.__data__,l,a)&&s.push(c);return new Kp(r,this._parents,this._name,this._id)}function vp(e){if(e._id!==this._id)throw Error();for(var t=this._groups,n=e._groups,r=t.length,i=n.length,a=Math.min(r,i),o=Array(r),s=0;s<a;++s)for(var c=t[s],l=n[s],u=c.length,d=o[s]=Array(u),f,p=0;p<u;++p)(f=c[p]||l[p])&&(d[p]=f);for(;s<r;++s)o[s]=t[s];return new Kp(o,this._parents,this._name,this._id)}function yp(e){return(e+``).trim().split(/^|\s+/).every(function(e){var t=e.indexOf(`.`);return t>=0&&(e=e.slice(0,t)),!e||e===`start`})}function bp(e,t,n){var r,i,a=yp(t)?zf:Bf;return function(){var o=a(this,e),s=o.on;s!==r&&(i=(r=s).copy()).on(t,n),o.on=i}}function xp(e,t){var n=this._id;return arguments.length<2?X(this.node(),n).on.on(e):this.each(bp(n,e,t))}function Sp(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function Cp(){return this.on(`end.remove`,Sp(this._id))}function wp(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=yl(e));for(var r=this._groups,i=r.length,a=Array(i),o=0;o<i;++o)for(var s=r[o],c=s.length,l=a[o]=Array(c),u,d,f=0;f<c;++f)(u=s[f])&&(d=e.call(u,u.__data__,f,s))&&(`__data__`in u&&(d.__data__=u.__data__),l[f]=d,Rf(l[f],t,n,f,l,X(u,n)));return new Kp(a,this._parents,t,n)}function Tp(e){var t=this._name,n=this._id;typeof e!=`function`&&(e=Cl(e));for(var r=this._groups,i=r.length,a=[],o=[],s=0;s<i;++s)for(var c=r[s],l=c.length,u,d=0;d<l;++d)if(u=c[d]){for(var f=e.call(u,u.__data__,d,c),p,m=X(u,n),h=0,g=f.length;h<g;++h)(p=f[h])&&Rf(p,t,n,h,f,m);a.push(f),o.push(u)}return new Kp(a,o,t,n)}var Ep=cd.prototype.constructor;function Dp(){return new Ep(this._groups,this._parents)}function Op(e,t){var n,r,i;return function(){var a=gu(this,e),o=(this.style.removeProperty(e),gu(this,e));return a===o?null:a===n&&o===r?i:i=t(n=a,r=o)}}function kp(e){return function(){this.style.removeProperty(e)}}function Ap(e,t,n){var r,i=n+``,a;return function(){var o=gu(this,e);return o===i?null:o===r?a:a=t(r=o,n)}}function jp(e,t,n){var r,i,a;return function(){var o=gu(this,e),s=n(this),c=s+``;return s??(c=s=(this.style.removeProperty(e),gu(this,e))),o===c?null:o===r&&c===i?a:(i=c,a=t(r=o,s))}}function Mp(e,t){var n,r,i,a=`style.`+t,o=`end.`+a,s;return function(){var c=Bf(this,e),l=c.on,u=c.value[a]==null?s||=kp(t):void 0;(l!==n||i!==u)&&(r=(n=l).copy()).on(o,i=u),c.on=r}}function Np(e,t,n){var r=(e+=``)==`transform`?pf:Jf;return t==null?this.styleTween(e,Op(e,r)).on(`end.style.`+e,kp(e)):typeof t==`function`?this.styleTween(e,jp(e,r,qf(this,`style.`+e,t))).each(Mp(this._id,e)):this.styleTween(e,Ap(e,r,t),n).on(`end.style.`+e,null)}function Pp(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function Fp(e,t,n){var r,i;function a(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Pp(e,a,n)),r}return a._value=t,a}function Ip(e,t,n){var r=`style.`+(e+=``);if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!=`function`)throw Error();return this.tween(r,Fp(e,t,n??``))}function Lp(e){return function(){this.textContent=e}}function Rp(e){return function(){var t=e(this);this.textContent=t??``}}function zp(e){return this.tween(`text`,typeof e==`function`?Rp(qf(this,`text`,e)):Lp(e==null?``:e+``))}function Bp(e){return function(t){this.textContent=e.call(this,t)}}function Vp(e){var t,n;function r(){var r=e.apply(this,arguments);return r!==n&&(t=(n=r)&&Bp(r)),t}return r._value=e,r}function Hp(e){var t=`text`;if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!=`function`)throw Error();return this.tween(t,Vp(e))}function Up(){for(var e=this._name,t=this._id,n=Jp(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)if(c=o[l]){var u=X(c,t);Rf(c,e,n,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Kp(r,this._parents,e,n)}function Wp(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(a,o){var s={value:o},c={value:function(){--i===0&&a()}};n.each(function(){var n=Bf(this,r),i=n.on;i!==e&&(t=(e=i).copy(),t._.cancel.push(s),t._.interrupt.push(s),t._.end.push(c)),n.on=t}),i===0&&a()})}var Gp=0;function Kp(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function qp(e){return cd().transition(e)}function Jp(){return++Gp}var Yp=cd.prototype;Kp.prototype=qp.prototype={constructor:Kp,select:wp,selectAll:Tp,selectChild:Yp.selectChild,selectChildren:Yp.selectChildren,filter:_p,merge:vp,selection:Dp,transition:Up,call:Yp.call,nodes:Yp.nodes,node:Yp.node,size:Yp.size,empty:Yp.empty,each:Yp.each,on:xp,attr:tp,attrTween:op,style:Np,styleTween:Ip,text:zp,textTween:Hp,remove:Cp,tween:Kf,delay:lp,duration:fp,ease:mp,easeVarying:gp,end:Wp,[Symbol.iterator]:Yp[Symbol.iterator]};function Xp(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Zp={time:null,delay:0,duration:250,ease:Xp};function Qp(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw Error(`transition ${t} not found`);return n}function $p(e){var t,n;e instanceof Kp?(t=e._id,e=e._name):(t=Jp(),(n=Zp).time=Ef(),e=e==null?null:e+``);for(var r=this._groups,i=r.length,a=0;a<i;++a)for(var o=r[a],s=o.length,c,l=0;l<s;++l)(c=o[l])&&Rf(c,e,t,l,o,n||Qp(c,t));return new Kp(r,this._parents,e,t)}cd.prototype.interrupt=Uf,cd.prototype.transition=$p;var{abs:em,max:tm,min:nm}=Math;[`w`,`e`].map(rm),[`n`,`s`].map(rm),[`n`,`w`,`e`,`s`,`nw`,`ne`,`sw`,`se`].map(rm);function rm(e){return{type:e}}var im=Math.PI,am=2*im,om=1e-6,sm=am-om;function cm(e){this._+=e[0];for(let t=1,n=e.length;t<n;++t)this._+=arguments[t]+e[t]}function lm(e){let t=Math.floor(e);if(!(t>=0))throw Error(`invalid digits: ${e}`);if(t>15)return cm;let n=10**t;return function(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=Math.round(arguments[t]*n)/n+e[t]}}var um=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._=``,this._append=e==null?cm:lm(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,n,r){this._append`Q${+e},${+t},${this._x1=+n},${this._y1=+r}`}bezierCurveTo(e,t,n,r,i,a){this._append`C${+e},${+t},${+n},${+r},${this._x1=+i},${this._y1=+a}`}arcTo(e,t,n,r,i){if(e=+e,t=+t,n=+n,r=+r,i=+i,i<0)throw Error(`negative radius: ${i}`);let a=this._x1,o=this._y1,s=n-e,c=r-t,l=a-e,u=o-t,d=l*l+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>om)if(!(Math.abs(u*s-c*l)>om)||!i)this._append`L${this._x1=e},${this._y1=t}`;else{let f=n-a,p=r-o,m=s*s+c*c,h=f*f+p*p,g=Math.sqrt(m),_=Math.sqrt(d),v=i*Math.tan((im-Math.acos((m+d-h)/(2*g*_)))/2),y=v/_,b=v/g;Math.abs(y-1)>om&&this._append`L${e+y*l},${t+y*u}`,this._append`A${i},${i},0,0,${+(u*f>l*p)},${this._x1=e+b*s},${this._y1=t+b*c}`}}arc(e,t,n,r,i,a){if(e=+e,t=+t,n=+n,a=!!a,n<0)throw Error(`negative radius: ${n}`);let o=n*Math.cos(r),s=n*Math.sin(r),c=e+o,l=t+s,u=1^a,d=a?r-i:i-r;this._x1===null?this._append`M${c},${l}`:(Math.abs(this._x1-c)>om||Math.abs(this._y1-l)>om)&&this._append`L${c},${l}`,n&&(d<0&&(d=d%am+am),d>sm?this._append`A${n},${n},0,1,${u},${e-o},${t-s}A${n},${n},0,1,${u},${this._x1=c},${this._y1=l}`:d>om&&this._append`A${n},${n},0,${+(d>=im)},${u},${this._x1=e+n*Math.cos(i)},${this._y1=t+n*Math.sin(i)}`)}rect(e,t,n,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${n=+n}v${+r}h${-n}Z`}toString(){return this._}};function dm(){return new um}dm.prototype=um.prototype;function Z(e){return function(){return e}}var fm=Math.abs,Q=Math.atan2,pm=Math.cos,mm=Math.max,hm=Math.min,gm=Math.sin,_m=Math.sqrt,vm=Math.PI,ym=vm/2,bm=2*vm;function xm(e){return e>1?0:e<-1?vm:Math.acos(e)}function Sm(e){return e>=1?ym:e<=-1?-ym:Math.asin(e)}function Cm(e){let t=3;return e.digits=function(n){if(!arguments.length)return t;if(n==null)t=null;else{let e=Math.floor(n);if(!(e>=0))throw RangeError(`invalid digits: ${n}`);t=e}return e},()=>new um(t)}function wm(e){return e.innerRadius}function Tm(e){return e.outerRadius}function Em(e){return e.startAngle}function Dm(e){return e.endAngle}function Om(e){return e&&e.padAngle}function km(e,t,n,r,i,a,o,s){var c=n-e,l=r-t,u=o-i,d=s-a,f=d*c-u*l;if(!(f*f<1e-12))return f=(u*(t-a)-d*(e-i))/f,[e+f*c,t+f*l]}function Am(e,t,n,r,i,a,o){var s=e-n,c=t-r,l=(o?a:-a)/_m(s*s+c*c),u=l*c,d=-l*s,f=e+u,p=t+d,m=n+u,h=r+d,g=(f+m)/2,_=(p+h)/2,v=m-f,y=h-p,b=v*v+y*y,x=i-a,S=f*h-m*p,C=(y<0?-1:1)*_m(mm(0,x*x*b-S*S)),w=(S*y-v*C)/b,T=(-S*v-y*C)/b,E=(S*y+v*C)/b,D=(-S*v+y*C)/b,O=w-g,k=T-_,A=E-g,j=D-_;return O*O+k*k>A*A+j*j&&(w=E,T=D),{cx:w,cy:T,x01:-u,y01:-d,x11:w*(i/x-1),y11:T*(i/x-1)}}function jm(){var e=wm,t=Tm,n=Z(0),r=null,i=Em,a=Dm,o=Om,s=null,c=Cm(l);function l(){var l,u,d=+e.apply(this,arguments),f=+t.apply(this,arguments),p=i.apply(this,arguments)-ym,m=a.apply(this,arguments)-ym,h=fm(m-p),g=m>p;if(s||=l=c(),f<d&&(u=f,f=d,d=u),!(f>1e-12))s.moveTo(0,0);else if(h>bm-1e-12)s.moveTo(f*pm(p),f*gm(p)),s.arc(0,0,f,p,m,!g),d>1e-12&&(s.moveTo(d*pm(m),d*gm(m)),s.arc(0,0,d,m,p,g));else{var _=p,v=m,y=p,b=m,x=h,S=h,C=o.apply(this,arguments)/2,w=C>1e-12&&(r?+r.apply(this,arguments):_m(d*d+f*f)),T=hm(fm(f-d)/2,+n.apply(this,arguments)),E=T,D=T,O,k;if(w>1e-12){var A=Sm(w/d*gm(C)),j=Sm(w/f*gm(C));(x-=A*2)>1e-12?(A*=g?1:-1,y+=A,b-=A):(x=0,y=b=(p+m)/2),(S-=j*2)>1e-12?(j*=g?1:-1,_+=j,v-=j):(S=0,_=v=(p+m)/2)}var M=f*pm(_),N=f*gm(_),P=d*pm(b),ee=d*gm(b);if(T>1e-12){var te=f*pm(v),ne=f*gm(v),F=d*pm(y),re=d*gm(y),ie;if(h<vm)if(ie=km(M,N,F,re,te,ne,P,ee)){var ae=M-ie[0],oe=N-ie[1],se=te-ie[0],I=ne-ie[1],ce=1/gm(xm((ae*se+oe*I)/(_m(ae*ae+oe*oe)*_m(se*se+I*I)))/2),le=_m(ie[0]*ie[0]+ie[1]*ie[1]);E=hm(T,(d-le)/(ce-1)),D=hm(T,(f-le)/(ce+1))}else E=D=0}S>1e-12?D>1e-12?(O=Am(F,re,M,N,f,D,g),k=Am(te,ne,P,ee,f,D,g),s.moveTo(O.cx+O.x01,O.cy+O.y01),D<T?s.arc(O.cx,O.cy,D,Q(O.y01,O.x01),Q(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,D,Q(O.y01,O.x01),Q(O.y11,O.x11),!g),s.arc(0,0,f,Q(O.cy+O.y11,O.cx+O.x11),Q(k.cy+k.y11,k.cx+k.x11),!g),s.arc(k.cx,k.cy,D,Q(k.y11,k.x11),Q(k.y01,k.x01),!g))):(s.moveTo(M,N),s.arc(0,0,f,_,v,!g)):s.moveTo(M,N),!(d>1e-12)||!(x>1e-12)?s.lineTo(P,ee):E>1e-12?(O=Am(P,ee,te,ne,d,-E,g),k=Am(M,N,F,re,d,-E,g),s.lineTo(O.cx+O.x01,O.cy+O.y01),E<T?s.arc(O.cx,O.cy,E,Q(O.y01,O.x01),Q(k.y01,k.x01),!g):(s.arc(O.cx,O.cy,E,Q(O.y01,O.x01),Q(O.y11,O.x11),!g),s.arc(0,0,d,Q(O.cy+O.y11,O.cx+O.x11),Q(k.cy+k.y11,k.cx+k.x11),g),s.arc(k.cx,k.cy,E,Q(k.y11,k.x11),Q(k.y01,k.x01),!g))):s.arc(0,0,d,b,y,g)}if(s.closePath(),l)return s=null,l+``||null}return l.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +a.apply(this,arguments))/2-vm/2;return[pm(r)*n,gm(r)*n]},l.innerRadius=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),l):e},l.outerRadius=function(e){return arguments.length?(t=typeof e==`function`?e:Z(+e),l):t},l.cornerRadius=function(e){return arguments.length?(n=typeof e==`function`?e:Z(+e),l):n},l.padRadius=function(e){return arguments.length?(r=e==null?null:typeof e==`function`?e:Z(+e),l):r},l.startAngle=function(e){return arguments.length?(i=typeof e==`function`?e:Z(+e),l):i},l.endAngle=function(e){return arguments.length?(a=typeof e==`function`?e:Z(+e),l):a},l.padAngle=function(e){return arguments.length?(o=typeof e==`function`?e:Z(+e),l):o},l.context=function(e){return arguments.length?(s=e??null,l):s},l}Array.prototype.slice;function Mm(e){return typeof e==`object`&&`length`in e?e:Array.from(e)}function Nm(e,t){return t<e?-1:t>e?1:t>=e?0:NaN}function Pm(e){return e}function Fm(){var e=Pm,t=Nm,n=null,r=Z(0),i=Z(bm),a=Z(0);function o(o){var s,c=(o=Mm(o)).length,l,u,d=0,f=Array(c),p=Array(c),m=+r.apply(this,arguments),h=Math.min(bm,Math.max(-bm,i.apply(this,arguments)-m)),g,_=Math.min(Math.abs(h)/c,a.apply(this,arguments)),v=_*(h<0?-1:1),y;for(s=0;s<c;++s)(y=p[f[s]=s]=+e(o[s],s,o))>0&&(d+=y);for(t==null?n!=null&&f.sort(function(e,t){return n(o[e],o[t])}):f.sort(function(e,n){return t(p[e],p[n])}),s=0,u=d?(h-c*v)/d:0;s<c;++s,m=g)l=f[s],y=p[l],g=m+(y>0?y*u:0)+v,p[l]={data:o[l],index:s,value:y,startAngle:m,endAngle:g,padAngle:_};return p}return o.value=function(t){return arguments.length?(e=typeof t==`function`?t:Z(+t),o):e},o.sortValues=function(e){return arguments.length?(t=e,n=null,o):t},o.sort=function(e){return arguments.length?(n=e,t=null,o):n},o.startAngle=function(e){return arguments.length?(r=typeof e==`function`?e:Z(+e),o):r},o.endAngle=function(e){return arguments.length?(i=typeof e==`function`?e:Z(+e),o):i},o.padAngle=function(e){return arguments.length?(a=typeof e==`function`?e:Z(+e),o):a},o}function Im(e,t,n){this.k=e,this.x=t,this.y=n}Im.prototype={constructor:Im,scale:function(e){return e===1?this:new Im(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Im(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return`translate(`+this.x+`,`+this.y+`) scale(`+this.k+`)`}};var Lm=new Im(1,0,0);Rm.prototype=Im.prototype;function Rm(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Lm;return e.__zoom}var zm=I(`images/BackIconWhite.svg`);function Bm(e,t){return typeof e.color==`function`?t?e.color(t):void 0:e.color}var Vm=class{constructor(){}},Hm=class{constructor(e,t,n,r={}){this.eventBus=e,this.rootMenu=t,this.centerButtonElement=n,this.tooltipElement=null,this.isVisible=!1,this.currentLevel=0,this.menuStack=[],this.currentMenuItems=[],this.centerButtonState=`default`,this.isTransitioning=!1,this.lastHideTime=0,this.reopenCooldownMs=300,this.anchorX=0,this.anchorY=0,this.menuGroups=new Map,this.menuPaths=new Map,this.menuIcons=new Map,this.selectedItemId=null,this.submenuHoverTimeout=null,this.backButtonHoverTimeout=null,this.navigationInProgress=!1,this.originalCenterButtonIcon=``,this.defaultCenterButtonColor=`#0f2744`,this.params=null,this.handleResize=()=>{this.isVisible&&this.clampAndSetMenuPositionForLevel(this.currentLevel)},this.config={menuSize:r.menuSize??190,submenuScale:r.submenuScale??1.5,centerButtonSize:r.centerButtonSize??30,iconSize:r.iconSize??32,centerIconSize:r.centerIconSize??48,disabledColor:r.disabledColor??Pd(128,128,128).toString(),menuTransitionDuration:r.menuTransitionDuration??300,mainMenuInnerRadius:r.mainMenuInnerRadius??40,centerButtonIcon:r.centerButtonIcon??``,maxNestedLevels:r.maxNestedLevels??3,innerRadiusIncrement:r.innerRadiusIncrement??20,tooltipStyle:r.tooltipStyle??``},this.originalCenterButtonIcon=this.config.centerButtonIcon,this.backIconSize=this.config.centerIconSize*.8,this.centerButtonColor=this.defaultCenterButtonColor,this.centerButtonIconSize=this.config.centerIconSize}init(){this.createMenuElement(),this.createTooltipElement(),this.eventBus.on(an,e=>{this.hideRadialMenu()})}createMenuElement(){this.menuElement=ud(document.body).append(`div`).attr(`class`,`radial-menu-container`).style(`position`,`fixed`).style(`display`,`none`).style(`z-index`,`9999`).style(`touch-action`,`none`).style(`top`,`0`).style(`left`,`0`).style(`width`,`100vw`).style(`height`,`100vh`).on(`click`,()=>{this.hideRadialMenu(),this.eventBus.emit(new Vm)}).on(`contextmenu`,e=>{e.preventDefault(),this.hideRadialMenu(),this.eventBus.emit(new Vm)});let e=this.config.menuSize*this.config.submenuScale**(this.config.maxNestedLevels-1),t=this.menuElement.append(`svg`).attr(`width`,e).attr(`height`,e).style(`position`,`absolute`).style(`top`,`50%`).style(`left`,`50%`).style(`transform`,`translate(-50%, -50%)`).style(`pointer-events`,`all`).on(`click`,e=>this.hideRadialMenu()),n=t.append(`g`).attr(`class`,`menu-container`).attr(`transform`,`translate(${e/2},${e/2})`),r=t.append(`defs`).append(`filter`).attr(`id`,`glow`);r.append(`feGaussianBlur`).attr(`stdDeviation`,`2`).attr(`result`,`coloredBlur`);let i=r.append(`feMerge`);i.append(`feMergeNode`).attr(`in`,`coloredBlur`),i.append(`feMergeNode`).attr(`in`,`SourceGraphic`);let a=n.append(`g`).attr(`class`,`center-button`);a.append(`circle`).attr(`class`,`center-button-hitbox`).attr(`r`,this.config.centerButtonSize).attr(`fill`,`transparent`).style(`cursor`,`pointer`).on(`click`,e=>{e.stopPropagation(),this.handleCenterButtonClick()}).on(`touchstart`,e=>{e.preventDefault(),e.stopPropagation(),this.handleCenterButtonClick()}).on(`mouseover`,()=>this.onCenterButtonHover(!0)).on(`mouseout`,()=>this.onCenterButtonHover(!1)),a.append(`circle`).attr(`class`,`center-button-visible`).attr(`r`,this.config.centerButtonSize).attr(`fill`,this.centerButtonColor).style(`pointer-events`,`none`),a.append(`image`).attr(`class`,`center-button-icon`).attr(`xlink:href`,this.config.centerButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2).style(`pointer-events`,`none`)}createTooltipElement(){this.tooltipElement=document.createElement(`div`),this.tooltipElement.className=`radial-tooltip`,this.tooltipElement.style.position=`absolute`,this.tooltipElement.style.pointerEvents=`none`,this.tooltipElement.style.background=`rgba(12, 20, 24, 0.96)`,this.tooltipElement.style.color=`white`,this.tooltipElement.style.padding=`8px 12px`,this.tooltipElement.style.borderRadius=`10px`,this.tooltipElement.style.fontSize=`13px`,this.tooltipElement.style.zIndex=`10000`,this.tooltipElement.style.maxWidth=`250px`,this.tooltipElement.style.display=`none`,document.body.appendChild(this.tooltipElement);let e=document.createElement(`style`);e.textContent=`
      .radial-tooltip .title {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 4px;
      }

      ${this.config.tooltipStyle}
    `,document.head.appendChild(e)}getInnerRadiusForLevel(e){return e===0?40:75}getOuterRadiusForLevel(e){let t=this.getInnerRadiusForLevel(e),n=55;return e!==0&&(n=65),t+n}renderMenuItems(e,t){let n=this.menuElement.select(`.menu-container`);n.selectAll(`.menu-level-${t}`).remove();let r=n.append(`g`).attr(`class`,`menu-level-${t}`);t===0?r.style(`opacity`,1).style(`transform`,`scale(1)`):r.style(`opacity`,0).style(`transform`,`scale(0.5)`),this.menuGroups.set(t,r);let i=-Math.PI/e.length,a=Fm().value(()=>1).padAngle(.03).startAngle(i).endAngle(2*Math.PI+i),o=this.getInnerRadiusForLevel(t),s=this.getOuterRadiusForLevel(t),c=jm().innerRadius(o).outerRadius(s).cornerRadius(7),l=r.selectAll(`.menu-item`).data(a(e)).enter().append(`g`).attr(`class`,`menu-item-group`);return this.renderPaths(l,c,t),this.setupEventHandlers(l,t),this.renderIconsAndText(l,c),this.setupAnimations(r),r}renderPaths(e,t,n){e.append(`path`).attr(`class`,`menu-item-path`).attr(`d`,t).attr(`fill`,e=>{let t=this.params===null||e.data.disabled(this.params),r=t?this.config.disabledColor:Bm(e.data,this.params)??`#1e3a5f`,i=t?.4:.82;return e.data.id===this.selectedItemId&&this.currentLevel>n?r:q(r)?.copy({opacity:i})?.toString()??r}).attr(`stroke`,`rgba(255, 245, 214, 0.24)`).attr(`stroke-width`,1.25).attr(`stroke-linejoin`,`round`).style(`cursor`,e=>this.params===null||e.data.disabled(this.params)?`not-allowed`:`pointer`).style(`opacity`,e=>this.params===null||e.data.disabled(this.params)?.5:1).style(`transition`,`filter ${this.config.menuTransitionDuration/2}ms, fill ${this.config.menuTransitionDuration/2}ms`).attr(`data-id`,e=>e.data.id),e.each(e=>{if(e.data.timerFraction&&this.params){let t=e.data.timerFraction(this.params),n=this.params===null||e.data.disabled(this.params),r=n?this.config.disabledColor:Bm(e.data,this.params)??`#1e3a5f`,i=n?.4:.82,a=q(r)?.copy({opacity:i})?.toString()??r,o=q(Qd(r,`white`)(.4))?.copy({opacity:i})?.toString()??a,s=`timer-gradient-${e.data.id}`,c=this.menuElement.select(`defs`);c.select(`#${s}`).remove();let l=1-t,u=c.append(`linearGradient`).attr(`id`,s).attr(`x1`,0).attr(`y1`,0).attr(`x2`,0).attr(`y2`,1);u.append(`stop`).attr(`class`,`timer-stop-faded`).attr(`offset`,l).attr(`stop-color`,o),u.append(`stop`).attr(`class`,`timer-stop-normal`).attr(`offset`,l).attr(`stop-color`,a),ud(`path[data-id="${e.data.id}"]`).attr(`fill`,`url(#${s})`)}}),e.each(e=>{let t=e.data.id,r=ud(`path[data-id="${t}"]`);if(this.menuPaths.set(t,r),t===this.selectedItemId&&n===0&&this.currentLevel>0){r.attr(`filter`,`url(#glow)`);let t=this.params===null||e.data.disabled(this.params)?this.config.disabledColor:Bm(e.data,this.params)??`#1e3a5f`;r.attr(`fill`,t)}}),this.menuGroups.forEach((e,t)=>{t<this.currentLevel?e.selectAll(`path`).each(function(){ud(this).style(`pointer-events`,`none`)}):t===this.currentLevel&&e.selectAll(`path`).style(`pointer-events`,`auto`)})}setupEventHandlers(e,t){let n=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);e.data.tooltipItems&&e.data.tooltipItems.length>0?this.showTooltip(e.data.tooltipItems):e.data.tooltipKeys&&e.data.tooltipKeys.length>0&&this.showTooltip(e.data.tooltipKeys),!(r||this.currentLevel>0&&this.currentLevel!==t||this.navigationInProgress)&&n.style(`filter`,`brightness(1.5)`)},r=(e,n)=>{let r=this.params===null||e.data.disabled(this.params);if(this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.hideTooltip(),r||this.currentLevel>0&&t===0&&e.data.id===this.selectedItemId)return;n.style(`filter`,null);let i=r?this.config.disabledColor:Bm(e.data,this.params)??`#333333`,a=r?.4:.82;e.data.timerFraction?n.attr(`fill`,`url(#timer-gradient-${e.data.id})`):n.attr(`fill`,q(i)?.copy({opacity:a})?.toString()??i)},i=(e,n)=>{if(n.stopPropagation(),this.params===null||e.data.disabled(this.params)||this.navigationInProgress||(this.eventBus.emit(new Mt(`click`)),this.currentLevel>0&&t===0&&e.data.id!==this.selectedItemId))return;let r=e.data.subMenu?.(this.params);r&&r.length>0?(this.navigationInProgress=!0,this.selectedItemId=e.data.id,this.navigateToSubMenu(r),this.updateCenterButtonState(`back`)):(e.data.action?.(this.params),this.isTransitioning=!1,this.hideRadialMenu())};function a(e){let t=document.querySelector(`.radial-tooltip`);t&&t.style.display!==`none`&&(t.style.left=e.pageX+10+`px`,t.style.top=e.pageY+10+`px`)}e.each(e=>{let t=e.data.id,o=ud(`path[data-id="${t}"]`);o.on(`mouseover`,function(){n(e,o)}),o.on(`mouseout`,function(){r(e,o)}),o.on(`mousemove`,function(e){a(e)}),o.on(`click`,function(t){i(e,t)}),o.on(`touchstart`,function(t){t.preventDefault(),t.stopPropagation(),i(e,t)})})}isItemDisabled(e){return this.params===null||this.params.game.inSpawnPhase()||e.disabled(this.params)}renderIconsAndText(e,t){e.append(`g`).attr(`class`,`menu-item-content`).style(`pointer-events`,`none`).attr(`data-id`,e=>e.data.id).attr(`data-cx`,e=>t.centroid(e)[0].toString()).attr(`data-cy`,e=>t.centroid(e)[1].toString()).each(e=>{let n=e.data.id,r=ud(`g[data-id="${n}"]`),i=this.isItemDisabled(e.data);if(e.data.renderType&&this.params){let n=this.getStateKeyByType(e.data.renderType,i,this.params);n&&r.attr(`data-prev-state`,n),e.data.renderType===`allyExtend`&&this.renderAllyExtendIcon(r.node(),t.centroid(e)[0],t.centroid(e)[1],this.config.iconSize,i,this.params,e.data.icon)}else if(e.data.text)r.append(`text`).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).attr(`x`,t.centroid(e)[0]).attr(`y`,t.centroid(e)[1]).attr(`fill`,`white`).attr(`font-size`,e.data.fontSize??`12px`).attr(`font-family`,`Vazirmatn, sans-serif`).style(`opacity`,i?.5:1).text(e.data.text);else{let n=r.append(`image`).attr(`xlink:href`,e.data.icon).attr(`width`,this.config.iconSize).attr(`height`,this.config.iconSize).attr(`x`,t.centroid(e)[0]-this.config.iconSize/2).attr(`y`,t.centroid(e)[1]-this.config.iconSize/2).attr(`opacity`,i?.5:1);if(te(e.data.icon).then(r=>{if(!r||r===1)return;let i=this.config.iconSize,a=this.config.iconSize,o=Math.round(i*r);r>1?i=o:a=o,n.attr(`width`,i).attr(`height`,a).attr(`x`,t.centroid(e)[0]-i/2).attr(`y`,t.centroid(e)[1]-a/2)}),this.params&&e.data.cooldown?.(this.params)){let n=Math.ceil(e.data.cooldown?.(this.params));r.append(`text`).attr(`class`,`cooldown-text`).text(n+`s`).attr(`fill`,`white`).attr(`opacity`,i?.5:1).attr(`font-size`,`14px`).attr(`font-weight`,`bold`).attr(`x`,t.centroid(e)[0]-this.config.iconSize/4).attr(`y`,t.centroid(e)[1]+this.config.iconSize/2+7)}}this.menuIcons.set(n,r)})}setupAnimations(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`opacity`,1).style(`transform`,`scale(1)`).on(`start`,()=>{this.isTransitioning=!0}).on(`end`,()=>{this.isTransitioning=!1})}navigateToSubMenu(e){this.isTransitioning=!0,this.menuStack.push(this.currentMenuItems),this.currentMenuItems=e,this.currentLevel++,this.clampAndSetMenuPositionForLevel(this.currentLevel),this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.updateMenuGroupVisibility(),this.animatePreviousMenu()}updateMenuGroupVisibility(){this.updateMenuVisibility(`forward`)}updateMenuVisibility(e=`backward`){this.menuGroups.forEach((t,n)=>{n===this.currentLevel?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1),t.selectAll(`path`).style(`pointer-events`,`auto`)):n===this.currentLevel-1&&this.currentLevel>0?(t.style(`display`,`block`),t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8),e===`forward`&&t.selectAll(`path`).each(function(){ud(this).style(`pointer-events`,`none`)})):n!==this.currentLevel+1&&t.transition().duration(this.config.menuTransitionDuration*.5).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){ud(this).style(`display`,`none`)})})}animatePreviousMenu(){this.menuElement.select(`.menu-container`).select(`.menu-level-${this.currentLevel-1}`).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(${this.currentLevel===1?`0.65`:`0.5`})`).style(`opacity`,.8).on(`end`,()=>{this.navigationInProgress=!1})}navigateBack(){this.menuStack.length!==0&&(this.isTransitioning=!0,this.updateMenuLevels(),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.clearSelectedItemHoverState(),this.updateMenuVisibility(`backward`),this.animateMenuTransitions())}updateMenuLevels(){let e=this.menuStack.pop(),t=this.currentLevel-1;this.currentLevel=t,t===0&&(this.selectedItemId=null),this.currentMenuItems=e??[],this.currentLevel===0&&this.updateCenterButtonState(`default`)}clearSelectedItemHoverState(){if(this.selectedItemId){let e=this.menuPaths.get(this.selectedItemId);e&&e.attr(`filter`,null)}this.refresh()}animateMenuTransitions(){let e=this.menuElement.select(`.menu-container`),t=e.select(`.menu-level-${this.currentLevel+1}`),n=e.select(`.menu-level-${this.currentLevel}`);t.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(0.5)`).style(`opacity`,0).on(`end`,function(){ud(this).remove()}),n.empty()?this.renderAndAnimateNewMenu():this.animateExistingMenu(n)}renderAndAnimateNewMenu(){this.renderMenuItems(this.currentMenuItems,this.currentLevel).style(`transform`,`scale(0.8)`).style(`opacity`,.3).transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1})}animateExistingMenu(e){e.transition().duration(this.config.menuTransitionDuration*.8).style(`transform`,`scale(1)`).style(`opacity`,1).on(`end`,()=>{this.isTransitioning=!1,this.navigationInProgress=!1}),e.selectAll(`path`).style(`pointer-events`,`auto`)}showRadialMenu(e,t){this.isReopeningAllowed()&&(this.resetMenu(),this.isTransitioning=!1,this.selectedItemId=null,this.anchorX=e,this.anchorY=t,this.menuElement.style(`display`,`block`),this.clampAndSetMenuPositionForLevel(this.currentLevel),this.isVisible=!0,this.renderMenuItems(this.currentMenuItems,this.currentLevel),this.onCenterButtonHover(!0),window.addEventListener(`resize`,this.handleResize))}hideRadialMenu(){this.isVisible&&(this.isTransitioning=!1,this.menuElement.style(`display`,`none`),this.isVisible=!1,this.selectedItemId=null,this.hideTooltip(),this.resetMenu(),this.isTransitioning=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear(),this.lastHideTime=Date.now(),window.removeEventListener(`resize`,this.handleResize))}handleCenterButtonClick(){if(this.centerButtonState==="default"){this.params&&this.isCenterButtonEnabled()&&this.centerButtonElement?.action(this.params);return}if(this.centerButtonState===`back`){this.navigationInProgress=!0,this.navigateBack();return}}disableAllButtons(){this.updateCenterButtonState(`default`),this.refresh()}updateCenterButtonState(e){if(this.centerButtonState=e,e===`back`){let e=this.config.centerButtonSize*.8;this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,e),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,zm).attr(`width`,this.backIconSize).attr(`height`,this.backIconSize).attr(`x`,-this.backIconSize/2).attr(`y`,-this.backIconSize/2)}e==="default"&&(this.menuElement.select(`.center-button-hitbox`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-visible`).transition().duration(0).attr(`r`,this.config.centerButtonSize),this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,this.originalCenterButtonIcon).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2));let t=this.menuElement.select(`.center-button`),n=this.isCenterButtonEnabled();t.select(`.center-button-hitbox`).style(`cursor`,n?`pointer`:`not-allowed`);let r=e===`back`?this.defaultCenterButtonColor:this.centerButtonColor;t.select(`.center-button-visible`).attr(`fill`,n?r:`#999999`),t.select(`.center-button-icon`).style(`opacity`,n?1:.5)}isCenterButtonEnabled(){return this.currentLevel>0?!0:this.params&&this.centerButtonElement?!this.centerButtonElement.disabled(this.params):!1}onCenterButtonHover(e){if(!this.isCenterButtonEnabled())return;let t=e?1.2:1;this.menuElement.select(`.center-button-hitbox`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t),this.menuElement.select(`.center-button-visible`).transition().duration(200).attr(`r`,this.config.centerButtonSize*t)}isMenuVisible(){return this.isVisible}getCurrentLevel(){return this.currentLevel}setParams(e){this.params=e}getDefaultCenterIconSize(){return this.config.centerIconSize}setCenterButtonAppearance(e,t,n){this.originalCenterButtonIcon=e,this.centerButtonColor=t??this.defaultCenterButtonColor,this.centerButtonIconSize=n??this.config.centerIconSize,this.menuElement&&(this.menuElement.select(`.center-button-icon`).attr(`xlink:href`,e).attr(`width`,this.centerButtonIconSize).attr(`height`,this.centerButtonIconSize).attr(`x`,-this.centerButtonIconSize/2).attr(`y`,-this.centerButtonIconSize/2),this.menuElement.select(`.center-button-visible`).attr(`fill`,this.isCenterButtonEnabled()?this.centerButtonColor:`#999999`),this.updateCenterButtonState(this.centerButtonState))}findMenuItem(e){return this.currentMenuItems.find(t=>t.id===e)}resetMenu(){this.currentLevel=0,this.menuStack=[],this.currentMenuItems=this.rootMenu.subMenu(this.params),this.navigationInProgress=!1,this.menuGroups.clear(),this.menuPaths.clear(),this.menuIcons.clear();let e=this.menuElement?.select(`.menu-container`);e&&e.selectAll(`[class^='menu-level-']`).remove(),this.updateCenterButtonState(`default`),this.submenuHoverTimeout!==null&&(window.clearTimeout(this.submenuHoverTimeout),this.submenuHoverTimeout=null),this.backButtonHoverTimeout!==null&&(window.clearTimeout(this.backButtonHoverTimeout),this.backButtonHoverTimeout=null)}refreshMenu(){this.isVisible&&this.renderMenuItems(this.currentMenuItems,this.currentLevel)}refresh(){!this.isVisible||!this.params||(this.menuPaths.forEach((e,t)=>{let n=this.findMenuItem(t);if(n){let r=this.isItemDisabled(n),i=r?this.config.disabledColor:Bm(n,this.params)??`#333333`,a=r?.4:.82;n.timerFraction||e.attr(`fill`,q(i)?.copy({opacity:a})?.toString()??i),e.style(`opacity`,r?.5:1),e.style(`cursor`,r?`not-allowed`:`pointer`);let o=this.menuIcons.get(t);if(o){if(n.renderType===`allyExtend`&&this.params)this.refreshAllyExtendIcon(n,r,o);else{let e=o.select(`text`);e.empty()||e.style(`opacity`,r?.5:1);let t=o.select(`image`);t.empty()||t.attr(`opacity`,r?.5:1);let i=o.select(`.cooldown-text`);if(this.params&&!i.empty()&&n.cooldown){let e=Math.ceil(n.cooldown(this.params));e<=0?i.remove():i.text(e+`s`)}}this.maybeUpdateTimerGradient(n,i,a)}}}),this.updateCenterButtonState(this.centerButtonState))}refreshAllyExtendIcon(e,t,n){if(e.renderType!==`allyExtend`||!this.params)return;let r=this.getStateKeyByType(e.renderType,t,this.params),i=n.attr(`data-prev-state`);if(!(r&&r===i)){let i=parseFloat(n.attr(`data-cx`)||`0`),a=parseFloat(n.attr(`data-cy`)||`0`);r?n.attr(`data-prev-state`,r):n.selectAll(`*`).remove(),this.renderAllyExtendIcon(n.node(),i,a,this.config.iconSize,t,this.params,e.icon,!0)}}maybeUpdateTimerGradient(e,t,n){if(!e.timerFraction||!this.params)return;let r=e.timerFraction(this.params),i=this.menuElement.select(`#timer-gradient-${e.id}`);if(!i.empty()){let e=1-r,a=q(t)?.copy({opacity:n})?.toString()??t,o=q(Qd(t,`white`)(.4))?.copy({opacity:n})?.toString()??a;i.select(`.timer-stop-faded`).attr(`offset`,e).attr(`stop-color`,o),i.select(`.timer-stop-normal`).attr(`offset`,e).attr(`stop-color`,a)}}getStateKeyByType(e,t,n){switch(e){case`allyExtend`:return this.getAllyExtendStateKey(t,n);default:return null}}getAllyExtendStateKey(e,t){let n=t.playerActions?.interaction;return`${e}:${n?.allianceInfo?.myPlayerAgreedToExtend??!1}:${n?.allianceInfo?.otherAgreedToExtend??!1}`}renderAllyExtendIcon(e,t,n,r,i,a,o,s){if(s)for(;e.firstChild;)e.removeChild(e.firstChild);let c=a.playerActions?.interaction,l=c?.allianceInfo?.myPlayerAgreedToExtend??!1,u=c?.allianceInfo?.otherAgreedToExtend??!1,d=`http://www.w3.org/2000/svg`,f=r*.8,p=o??``;te(p).then(r=>{let a=f*(r??1),o=a*2+2,s=document.createElementNS(d,`image`);if(s.setAttribute(`href`,p),s.setAttribute(`width`,a.toString()),s.setAttribute(`height`,f.toString()),s.setAttribute(`x`,(t-o/2).toString()),s.setAttribute(`y`,(n-f/2).toString()),s.setAttribute(`opacity`,i?`0.5`:`1`),!l){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),s.appendChild(e)}e.appendChild(s);let c=document.createElementNS(d,`image`);if(c.setAttribute(`href`,p),c.setAttribute(`width`,a.toString()),c.setAttribute(`height`,f.toString()),c.setAttribute(`x`,(t-o/2+a+2).toString()),c.setAttribute(`y`,(n-f/2).toString()),c.setAttribute(`opacity`,i?`0.5`:`1`),!u){let e=document.createElementNS(d,`animate`);e.setAttribute(`attributeName`,`opacity`),e.setAttribute(`values`,i?`0.5;0.1;0.5`:`1;0.2;1`),e.setAttribute(`dur`,`1.5s`),e.setAttribute(`repeatCount`,`indefinite`),c.appendChild(e)}e.appendChild(c)})}isReopeningAllowed(){return Date.now()-this.lastHideTime>=this.reopenCooldownMs}showTooltip(e){if(this.tooltipElement){this.tooltipElement.innerHTML=``;for(let t of e){let e=document.createElement(`div`);e.className=t.className,`key`in t?e.textContent=F(t.key,t.params):e.textContent=t.text,this.tooltipElement.appendChild(e)}this.tooltipElement.style.display=`block`}}hideTooltip(){this.tooltipElement&&(this.tooltipElement.style.display=`none`)}clampAndSetMenuPositionForLevel(e){let t=this.getOuterRadiusForLevel(e),n=Math.max(t,this.config.centerButtonSize)+10,r=window.innerWidth,i=window.innerHeight,a=2*n>r?r/2:Math.min(Math.max(this.anchorX,n),r-n),o=2*n>i?i/2:Math.min(Math.max(this.anchorY,n),i-n);this.menuElement.select(`svg`).style(`top`,`${o}px`).style(`left`,`${a}px`)}},Um=I(`images/AllianceRequestBlackIcon.svg`),Wm=I(`images/AllianceRequestWhiteIcon.svg`),Gm=I(`images/CrownIcon.svg`),Km=I(`images/DisconnectedIcon.svg`),qm=I(`images/EmbargoBlackIcon.svg`),Jm=I(`images/EmbargoWhiteIcon.svg`),Ym=I(`images/NukeIconRed.svg`),Xm=I(`images/NukeIconWhite.svg`),Zm=I(`images/TargetIcon.svg`),Qm=I(`images/DoomsdayClockSkull.svg`),$m=`doomsday-clock`,eh=`crown`,th=`disconnected`,nh=`alliance-request`,rh=`target`,ih=`emoji`,ah=`embargo`,oh=`nuke`,sh=`image`,ch=`emoji`;function lh(e){let t=e.playerViews().sort((e,t)=>t.numTilesOwned()-e.numTilesOwned());return t.length>0?t[0]:null}function uh(e){let{game:t,player:n,firstPlace:r,darkMode:i,transitiveTargets:a}=e,o=t.myPlayer(),c=i??!1,l=[];if(n===r){let e=n.cosmetics.crown?.url;l.push({id:eh,kind:sh,src:e?I(e):Gm})}if(n.inDoomsdayClock()&&l.push({id:$m,kind:sh,src:Qm}),n.isDisconnected()&&l.push({id:th,kind:sh,src:Km}),o!==null&&n.isRequestingAllianceWith(o)){let e=c?Um:Wm;l.push({id:nh,kind:sh,src:e})}(a??o?.transitiveTargets()??[]).includes(n)&&l.push({id:rh,kind:sh,src:Zm,center:!0});let u=n.outgoingEmojis().find(e=>e.recipientID===`AllPlayers`||e.recipientID===o?.smallID());if(u&&l.push({id:ih,kind:ch,text:u.message}),o?.hasEmbargo(n)){let e=c?qm:Jm;l.push({id:ah,kind:sh,src:e})}if(!o||n.id()!==o.id()){let e=!1,r=!1,i=n.units(...s.types);for(let n of i)if(n.isActive()){e=!0;let i=n.targetTile();if(o&&i&&t.owner(i).id()===o.id()){r=!0;break}}if(e){let e=r?Ym:Xm;l.push({id:oh,kind:sh,src:e})}}return l}var dh={[l.Hostile]:{color:`#ef4444`,eyeCy:7.5,mouth:`M5 12 Q8 9 11 12`,brows:[`M4 5.5 L6.5 7`,`M12 5.5 L9.5 7`]},[l.Distrustful]:{color:`#f97316`,eyeCy:6.8,mouth:`M5.5 11 Q8 9.2 10.5 11`},[l.Friendly]:{color:`#22c55e`,eyeCy:6.5,mouth:`M5 10 Q8 13 11 10`}},fh=class extends P{constructor(...e){super(...e),this.relation=l.Neutral}createRenderRoot(){return this}render(){let e=dh[this.relation];if(!e)return M``;let{color:t,eyeCy:n,mouth:r,brows:i}=e;return M`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      style="flex-shrink:0"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
      />
      ${i?.map(e=>M`<path
            d="${e}"
            stroke="${t}"
            stroke-width="1.4"
            stroke-linecap="round"
          />`)}
      <circle cx="5.8" cy="${n}" r="0.9" fill="${t}" />
      <circle cx="10.2" cy="${n}" r="0.9" fill="${t}" />
      <path
        d="${r}"
        stroke="${t}"
        stroke-width="1.4"
        fill="none"
        stroke-linecap="round"
      />
    </svg>`}};N([g({type:Number})],fh.prototype,`relation`,void 0),fh=N([E(`relation-smiley`)],fh);var ph=I(`images/SoldierIconAquarius.svg`),mh=I(`images/AllianceIcon.svg`),hh=I(`images/TraitorIcon.svg`),gh=I(`images/BoatIconWhite.svg`),_h=I(`images/EmojiIconWhite.svg`),vh=I(`images/ChatIconWhite.svg`),yh=I(`images/AllianceIconWhite.svg`),bh=I(`images/TraitorIconWhite.svg`),xh=I(`images/TargetIconWhite.svg`),Sh=I(`images/GoldCoinIcon.svg`),Ch=I(`images/SoldierIcon.svg`),wh=I(`images/TradingIconWhite.svg`);function Th(e,t,n){let r=n.x(t),i=n.y(t),a=e.x-r,o=e.y-i;return Math.sqrt(a*a+o*o)}function Eh(e,t){return(n,r)=>Th(e,n.tile(),t)-Th(e,r.tile(),t)}var $=class extends P{constructor(...e){super(...e),this.player=null,this.tile=null,this.playerActions=null,this.playerActionsFor=null,this.playerActionsFetchedAt=0,this.playerActionsVersion=0,this.playerProfile=null,this.unit=null,this._isInfoVisible=!1,this.spawnBarVisible=!1,this.immunityBarVisible=!1,this._isActive=!1,this.userSettings=new Ee,this.lastMouseUpdate=0,this.pointerOnPanel=!1,this.onPanelEnter=()=>this.pointerOnPanel=!0,this.onPanelLeave=()=>this.pointerOnPanel=!1}showShortcutButtons(){return window.innerWidth>=1200&&!p.isTouch}get barOffset(){return(this.spawnBarVisible?7:0)+(this.immunityBarVisible?7:0)}init(){this.eventBus.on($t,e=>this.onMouseEvent(e)),this.eventBus.on(en,e=>this.maybeShow(e.x,e.y)),this.eventBus.on(Xt,e=>this.maybeShow(e.x,e.y)),this.eventBus.on(Vm,()=>this.hide()),this.eventBus.on($c,e=>{this.spawnBarVisible=e.visible}),this.eventBus.on(kc,e=>{this.immunityBarVisible=e.visible}),this.eventBus.on(Tn,e=>this.markActionTaken(e.tile,`requestAlliance`)),this.eventBus.on(En,e=>this.markActionTaken(e.tile,`breakAlliance`)),this.eventBus.on(Dn,e=>this.markActionTaken(e.tile,`target`)),this._isActive=!0}markActionTaken(e,t){let n=this.playerActions;!n||n.player!==this.player||(e===void 0?this._isInfoVisible&&!this.pointerOnPanel:e===this.tile)&&(this.playerActionsVersion++,this.playerActionsFetchedAt=Date.now(),this.playerActions={...n,[t]:!1})}onMouseEvent(e){if(this.pointerOnPanel)return;let t=Date.now();t-this.lastMouseUpdate<100||(this.lastMouseUpdate=t,this.maybeShow(e.x,e.y))}hide(){this.pointerOnPanel=!1,this.setVisible(!1),this.unit=null,this.player=null}maybeShow(e,t){this.hide();let n=this.transform.screenToWorldCoordinates(e,t);if(!this.game.isValidCoord(n.x,n.y))return;let r=this.game.ref(n.x,n.y);if(!r)return;let i=this.game.owner(r);if(i&&i.isPlayer())this.player=i,this.tile=r,this.player.profile().then(e=>{this.playerProfile=e}),this.refreshPlayerActions(this.player,r),this.setVisible(!0);else if(!this.game.isLand(r)){let e=this.game.units(u.Warship,u.TradeShip,u.TransportShip).filter(e=>Th(n,e.tile(),this.game)<50).sort(Eh(n,this.game));e.length>0&&(this.unit=e[0],this.setVisible(!0))}}refreshPlayerActions(e,t){let n=this.game.myPlayer();if(!n||e===n||!this.showShortcutButtons())return;if(this.game.inSpawnPhase()||this.game.owner(t)!==e){this.playerActionsVersion++,this.playerActionsFor=null,this.playerActions=null;return}let r=Date.now();if(this.playerActionsFor===e&&r-this.playerActionsFetchedAt<1e3)return;this.playerActionsFor=e,this.playerActionsFetchedAt=r;let i=++this.playerActionsVersion;n.actions(t,[u.TransportShip]).then(t=>{if(i!==this.playerActionsVersion)return;let n=t.interaction;this.playerActions={player:e,requestAlliance:n?.canSendAllianceRequest??!1,breakAlliance:n?.canBreakAlliance??!1,target:n?.canTarget??!1,boat:t.buildableUnits.some(e=>e.type===u.TransportShip&&e.canBuild!==!1)}}).catch(e=>{console.warn(`Failed to check player actions:`,e)})}tick(){this._isInfoVisible&&this.player&&this.tile!==null&&this.refreshPlayerActions(this.player,this.tile),this.requestUpdate()}setVisible(e){this._isInfoVisible=e,this.requestUpdate()}getPlayerNameColor(e){return e?`text-green-500`:`text-white`}getRelationSmiley(e,n){if(!n||n===e||e.type()!==t.Nation)return``;let r=this.playerProfile?.relations[n.smallID()]??l.Neutral;return r===l.Neutral?``:M`<relation-smiley .relation=${r}></relation-smiley>`}getRelationName(e){switch(e){case l.Hostile:return F(`relation.hostile`);case l.Distrustful:return F(`relation.distrustful`);case l.Neutral:return F(`relation.neutral`);case l.Friendly:return F(`relation.friendly`);default:return F(`relation.default`)}}displayUnitCount(e,t,n){return this.game.config().isUnitDisabled(t)?``:M`<div
          class="flex items-center justify-center gap-0.5 lg:gap-1 rounded-lg border border-amber-100/20 bg-[#171511]/90 p-1 text-[10px] lg:text-xs w-10 lg:w-12 h-7 lg:h-8"
          title=${F(n)}
          aria-label=${F(n)}
          translate="no"
        >
          <img
            src=${Nt(t)}
            alt=""
            aria-hidden="true"
            class="size-5 shrink-0 object-contain"
          />
          <span>${e.totalUnitLevels(t)}</span>
        </div>`}allianceExpirationText(e){let{expiresAt:t}=e,n=t-this.game.ticks(),r=0;return n>0&&(r=Math.max(0,Math.floor(n/10))),b(r)}renderPlayerNameIcons(e){return e.length===0?M``:M`<span class="flex items-center gap-1 shrink-0">
      ${e.map(e=>e.kind===`emoji`&&e.text?M`<span class="h-4 w-4 font-mono text-sm shrink-0" translate="no"
              >${e.text}</span
            >`:e.kind===`image`&&e.src?M`<img src=${e.src} alt="" class="w-4 h-4 shrink-0" />`:M``)}
    </span>`}getNameFontSize(e){let{nameLength:t,iconCount:n,hasFlag:r,hasBetrayal:i,hasAlliance:a,typeAndTeamLen:o}=e,s={perIcon:2,icon:.5,flag:3.5,betrayal:4.2,alliance:6.7,allianceWrapped:3.9},c={perIcon:2.2,icon:.5,flag:4.2,betrayal:4.6,alliance:8.6,allianceWrapped:4.8},l=window.innerWidth,u=l>=1024,d=u?s:c,f=(u?12/18*o+8/10.8:12/14*o+4/8.4)+n*d.perIcon+(n?d.icon:0)+(r?d.flag:0)+(i?d.betrayal:0),p;p=l<640?28.1+(Math.max(360,l)-360)*.119:l<768?44.8:l<1024?41:31.1;let m=!1,h=a?d.alliance:0,g=(p-(f+h))/t;a&&g<.85&&(m=!0,h=d.allianceWrapped,g=(p-(f+h))/t);let _=u?`lg`:`sm`;return{fontSize:`clamp(var(--text-${_}) * .65, var(--text-${_}) * ${g.toFixed(3)}, var(--text-${_}))`,isAllianceWrapped:m}}renderShortcutButton(e,t,n,r){let i=n?D(n):``;return M`<button
      class="relative flex items-center justify-center size-6.5 border rounded-md border-gray-500 hover:bg-white/10 cursor-pointer"
      title=${t}
      @click=${e=>{e.stopPropagation(),r(),this.hide()}}
    >
      <img src=${e} alt="" class="size-5 object-contain" />
      ${i?M`<span
            class="pointer-events-none absolute -bottom-1 -right-1 px-0.5 rounded-sm bg-gray-800 text-[9px] leading-tight font-mono text-gray-300"
            translate="no"
            >${i}</span
          >`:``}
    </button>`}renderPlayerInfo(e){let n=this.game.myPlayer(),r=n?.isFriendly(e),i=n?.isAlliedWith(e),a=e.getTraitorRemainingTicks(),o=null,s=null,c=lh(this.game),l=uh({game:this.game,player:e,firstPlace:c}),d=this.game.config().maxTroops(e),f=e.outgoingAttacks().map(e=>e.troops).reduce((e,t)=>e+t,0),m=e.troops(),h=``;switch(e.type()){case t.Bot:h=F(`player_type.bot`);break;case t.Nation:h=F(`player_type.nation`);break;case t.Human:h=F(`player_type.player`);break}let g=this.game.teamClanTag(e.team()),_=S(e.team(),g),v=h.length,y=_!==``&&e.type()!==t.Bot?(g??_).length+2:0,x=Math.max(v,y),{fontSize:C,isAllianceWrapped:w}=this.getNameFontSize({nameLength:e.displayName().length,iconCount:l.length,hasFlag:!!e.cosmetics.flag,hasBetrayal:a>0,hasAlliance:i??!1,typeAndTeamLen:x});if(i){let t=n?.alliances().find(t=>t.other===e.id());t!==void 0&&(o=w?M`<div
              class="${a===0?`ml-auto`:``} flex flex-col items-center gap-0 text-xs font-bold leading-none shrink-0"
            >
              <img
                src=${mh}
                width="14"
                height="14"
                class="shrink-0"
              />
              <span class="text-[10px] leading-tight"
                >${this.allianceExpirationText(t)}</span
              >
            </div>`:M`<div
              class="${a===0?`ml-auto`:``} flex items-center mr-0 gap-1 text-xs font-bold leading-tight shrink-0"
            >
              <img
                src=${mh}
                width="18"
                height="18"
                class="shrink-0"
              />
              <span>${this.allianceExpirationText(t)}</span>
            </div>`)}a>0&&(s=M`<span class="flex ml-auto items-center shrink-0 "
        ><img src=${hh} alt="" class="w-4 h-4 shrink-0" />
        <span
          class="text-sm text-red-900 
          drop-shadow-[-.2px_-.2px_.8px_rgba(0,0,0,.7),.2px_.2px_.8px_rgba(0,0,0,.7)]"
        >
          ${b(Math.floor(a/10))} </span
        ><span></span
      ></span>`);let T=this.userSettings.keybinds(p.isMac);return M`
      <div class="flex items-start gap-1 lg:gap-2 p-1 lg:p-1.5">
        ${n&&this.showShortcutButtons()?M`<div class="flex flex-col gap-1 self-center shrink-0">
              ${e===n?``:this.renderShortcutButton(vh,F(`player_panel.chat`),T.quickChat,()=>this.eventBus.emit(new nc(e)))}
              ${this.renderShortcutButton(_h,F(`player_panel.emotes`),T.emojiMenu,()=>this.eventBus.emit(new wc(e)))}
            </div>`:``}
        <!-- Left: Gold & Troop bar -->
        <div class="flex flex-col gap-1 shrink-0 w-28 md:w-36">
          <div class="flex items-center gap-1">
            <div
              class="flex items-center justify-center px-1 py-0.5 border rounded-md border-yellow-400 font-bold text-yellow-400 text-sm lg:gap-1"
              translate="no"
            >
              <img src=${Sh} width="13" height="13" />
              <span class="px-0.5">${L(e.gold())}</span>
            </div>
            <div
              class="flex flex-1 flex-col items-center justify-center text-xs font-bold ${f>0?`text-aquarius`:`text-white/40`} drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
              translate="no"
            >
              <span class="flex items-center gap-px leading-none text-xs"
                ><img
                  class="w-2.5 h-2.5 inline-block ${f>0?``:`brightness-0 invert opacity-40`}"
                  src=${f>0?ph:Ch}
                  alt=""
                  aria-hidden="true"
                />↑</span
              >
              <span class="tabular-nums leading-none text-sm mt-0.5"
                >${Fe(f)}</span
              >
            </div>
          </div>
          <div class="w-28 md:w-36" translate="no">
            ${this.renderTroopBar(m,f,d)}
          </div>
        </div>
        <!-- Right: Player identity + Units below -->
        <div
          class="flex flex-col justify-between self-stretch w-[100%] flex-grow-1"
        >
          <div
            class="flex items-center gap-1 lg:gap-2 font-bold text-sm lg:text-lg ${this.getPlayerNameColor(r??!1)}"
          >
            ${e.cosmetics.flag?M`<img
                  class="h-6 object-contain shrink-0"
                  src=${I(e.cosmetics.flag)}
                />`:M``}
            <div class="shrink min-w-0">
              <span
                class="font-mono inline-block leading-[1.2] wrap-anywhere"
                style="font-size: ${C}"
                >${e.displayName()}</span
              >
            </div>
            ${this.getRelationSmiley(e,n)}
            ${_!==``&&e.type()!==t.Bot?M`<div
                  class="flex flex-col items-center leading-tight shrink-0"
                >
                  <span
                    class="text-gray-400 text-xs font-mono font-normal whitespace-nowrap"
                    >${h}</span
                  >
                  <span
                    class="text-xs font-mono font-normal text-gray-400 whitespace-nowrap"
                    >[<span
                      style="color: ${Pt.current().teamColor(e.team()).toHex()}"
                      >${g??_}</span
                    >]</span
                  >
                </div>`:M`<span
                  class="text-gray-400 text-xs font-mono font-normal shrink-0 whitespace-nowrap"
                  >${h}</span
                >`}
            ${this.renderPlayerNameIcons(l)} ${s??``}
            ${o??``}
          </div>
          <div class="mt-2 flex flex-wrap items-center gap-1">
            ${this.displayUnitCount(e,u.City,`unit_type.city`)}
            ${this.displayUnitCount(e,u.Factory,`unit_type.factory`)}
            ${this.displayUnitCount(e,u.Port,`unit_type.port`)}
            ${this.displayUnitCount(e,u.DefensePost,`unit_type.defense_post`)}
            ${this.displayUnitCount(e,u.MissileSilo,`unit_type.missile_silo`)}
            ${this.displayUnitCount(e,u.Arsenal,`unit_type.arsenal`)}
            ${this.displayUnitCount(e,u.SAMLauncher,`unit_type.sam_launcher`)}
            ${this.displayUnitCount(e,u.Warship,`unit_type.warship`)}
            ${this.displayUnitCount(e,u.TransportShip,`unit_type.boat`)}
            ${this.displayUnitCount(e,u.OilField,`unit_type.oil_field`)}
            ${this.displayUnitCount(e,u.GasField,`unit_type.gas_field`)}
            ${this.displayUnitCount(e,u.UraniumPlant,`unit_type.uranium_plant`)}
            ${this.displayUnitCount(e,u.Radar,`unit_type.radar`)}
            ${this.displayUnitCount(e,u.MissileFactory,`unit_type.missile_factory`)}
            ${this.displayUnitCount(e,u.OilStorage,`unit_type.oil_storage`)}
            ${this.displayUnitCount(e,u.GasStorage,`unit_type.gas_storage`)}
          </div>
        </div>
        ${n&&this.showShortcutButtons()?this.renderActionButtons(e,n,T):``}
      </div>
    `}renderActionButtons(e,t,n){let r=e!==t&&this.playerActions?.player===e?this.playerActions:null,i=this.tile,a=i??void 0,o=[];return r?.requestAlliance?o.push(this.renderShortcutButton(yh,F(`player_panel.send_alliance`),n.requestAlliance,()=>this.eventBus.emit(new Tn(a,e.id())))):r?.breakAlliance&&o.push(this.renderShortcutButton(bh,F(`player_panel.break_alliance`),n.breakAlliance,()=>this.eventBus.emit(new En(a,e.id())))),r?.target&&o.push(this.renderShortcutButton(xh,F(`player_panel.target`),n.targetPlayer,()=>this.eventBus.emit(new Dn(a,e.id())))),r?.boat&&o.push(this.renderShortcutButton(gh,F(`user_setting.boat_attack`),n.boatAttack,()=>this.eventBus.emit(new Sn(a)))),e!==t&&i!==null&&o.push(this.renderShortcutButton(wh,F(`deal.menu`),void 0,()=>this.eventBus.emit(new Zn(e,i)))),M`<div
      class="grid grid-rows-2 grid-flow-col auto-cols-max justify-end gap-1 self-center shrink-0 w-14"
    >
      ${o}
    </div>`}renderTroopBar(e,t,n){let r=Math.max(n,1),i=e/r*100,a=t/r*100,o=Math.max(0,Math.min(100,i)),s=Math.max(0,Math.min(100-o,a));return M`
      <div
        class="w-full h-5 lg:h-6 border border-gray-600 rounded-md bg-gray-900/60 overflow-hidden relative"
      >
        <div class="relative h-full">
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-sky-700 transition-transform duration-200 ease-out"
            style="transform: scaleX(${o/100});"
          ></div>
          <div
            class="absolute inset-y-0 left-0 w-full origin-left bg-malibu-blue transition-transform duration-200 ease-out"
            style="transform: translateX(${o}%) scaleX(${s/100});"
          ></div>
        </div>
        <div
          class="absolute inset-0 flex items-center justify-between px-1.5 text-sm font-bold leading-none pointer-events-none"
          translate="no"
        >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${Fe(e)}</span
          >
          <span class="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            >${Fe(n)}</span
          >
        </div>
        <img
          src=${Ch}
          alt=""
          aria-hidden="true"
          width="14"
          height="14"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-0 invert drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] pointer-events-none"
        />
      </div>
    `}renderUnitInfo(e){return M`
      <div class="p-2">
        <div class="font-bold mb-1 ${(e.owner()===this.game.myPlayer()||this.game.myPlayer()?.isFriendly(e.owner()))??!1?`text-green-500`:`text-white`}">
          ${e.owner().displayName()}
        </div>
        <div class="mt-1">
          <div class="text-sm opacity-80">${e.type()}</div>
          ${e.hasHealth()?M` <div class="text-sm">Health: ${e.health()}</div> `:``}
          ${e.type()===u.TransportShip?M`
                <div class="text-sm">
                  Troops: ${Fe(e.troops())}
                </div>
              `:``}
        </div>
      </div>
    `}render(){if(!this._isActive)return M``;let e=this._isInfoVisible?`opacity-100 visible`:`opacity-0 invisible pointer-events-none`;return M`
      <div
        class="fixed top-0 left-0 right-0 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[1001]"
        style="margin-top: ${this.barOffset}px;"
        @click=${()=>this.hide()}
        @contextmenu=${e=>e.preventDefault()}
      >
        <div
          class="bg-gray-800/92 backdrop-blur-sm shadow-xs min-[1200px]:rounded-lg sm:rounded-b-lg shadow-lg text-white text-lg lg:text-base w-full ${this.showShortcutButtons()?`sm:w-[598px]`:`sm:w-[500px]`} overflow-hidden ${e}"
          @mouseenter=${this.onPanelEnter}
          @mouseleave=${this.onPanelLeave}
        >
          ${this.player?this.renderPlayerInfo(this.player):``}
          ${this.unit?this.renderUnitInfo(this.unit):``}
        </div>
      </div>
    `}createRenderRoot(){return this}};N([g({type:Object})],$.prototype,`game`,void 0),N([g({type:Object})],$.prototype,`eventBus`,void 0),N([g({type:Object})],$.prototype,`transform`,void 0),N([x()],$.prototype,`player`,void 0),N([x()],$.prototype,`playerActions`,void 0),N([x()],$.prototype,`playerProfile`,void 0),N([x()],$.prototype,`unit`,void 0),N([x()],$.prototype,`_isInfoVisible`,void 0),N([x()],$.prototype,`spawnBarVisible`,void 0),N([x()],$.prototype,`immunityBarVisible`,void 0),$=N([E(`player-info-overlay`)],$);export{ir as $,pn as $t,Fs as A,Sn as At,Ar as B,kn as Bt,Ys as C,Hn as Ct,Us as D,an as Dt,Ks as E,Pn as Et,Es as F,Dn as Ft,Tr as G,In as Gt,or as H,_n as Ht,Ts as I,Ln as It,Xn as J,sn as Jt,wr as K,An as Kt,ro as L,Qt as Lt,ks as M,Cn as Mt,Os as N,Tn as Nt,Vs as O,un as Ot,Ds as P,wn as Pt,Qn as Q,mn as Qt,Fi as R,$t as Rt,Ws as S,Bn as St,qs as T,On as Tt,_r as U,vn as Ut,kr as V,hn as Vt,vr as W,dn as Wt,fr as X,Xt,Sr as Y,ln as Yt,nr as Z,Zt,ec as _,Or as _t,$c as a,hr as at,Zs as b,Rn as bt,Bc as c,Cr as ct,Ac as d,pr as dt,fn as en,ar as et,Oc as f,rr as ft,tc as g,yr as gt,cc as h,er as ht,al as i,ur as it,Ms as j,En as jt,zs as k,en as kt,Fc as l,br as lt,gc as m,dr as mt,Hm as n,gr as nt,el as o,mr as ot,Tc as p,sr as pt,Zn as q,cn as qt,ol as r,lr as rt,Zc as s,cr as st,$ as t,Ht as tn,$n as tt,kc as u,xr as ut,$s as v,Gn as vt,Js as w,rn as wt,Xs as x,zn as xt,Qs as y,Vn as yt,jr as z,Jt as zt};