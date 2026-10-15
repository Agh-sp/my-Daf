import{Q as e,et as t,st as n,t as r,z as i}from"./decorate-CgSmyiMM.js";import{vt as a,yt as o}from"./index-BXqdvtGy.js";import"./RewardsPanel-DOypLNBl.js";var s=class extends o{constructor(...e){super(...e),this.rewards=[],this.handleRewardsChanged=e=>{this.rewards=e.detail.rewards,this.rewards.length===0&&this.close()}}modalConfig(){return{maxWidth:`620px`}}openWithRewards(e){this.rewards=e,this.open()}open(e){this.rewards.length!==0&&super.open(e)}renderHeaderSlot(){return a({title:i(`rewards_modal.title`),onBack:()=>this.close(),ariaLabel:i(`common.back`)})}renderBody(){return n`
      <div class="p-6">
        <rewards-panel
          .rewards=${this.rewards}
          @rewards-changed=${this.handleRewardsChanged}
        ></rewards-panel>
      </div>
    `}};r([e()],s.prototype,`rewards`,void 0),s=r([t(`rewards-modal`)],s);export{s as RewardsModal};