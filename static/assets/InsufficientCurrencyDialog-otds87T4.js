import{$ as e,et as t,rt as n,st as r,t as i,tt as a,z as o}from"./decorate-DDFJEDDP.js";import"./preload-helper-tkFyO0yo.js";var s=class extends a{constructor(...e){super(...e),this.info=null}createRenderRoot(){return this}close(){this.dispatchEvent(new CustomEvent(`close`))}render(){let e=this.info;return e?r`<confirm-dialog
      .heading=${o(`store.insufficient_currency_title`,{currency:e.currency})}
      .message=${o(`store.insufficient_currency_body`,{amount:e.shortfall,currency:e.currency,item:e.item})}
      variant="warning"
      .wide=${!0}
      .showClose=${!0}
      .buttons=${e.canTopUp?`confirmOnly`:`none`}
      .confirmText=${e.canTopUp?o(`store.purchase_currency`,{currency:e.currency}):``}
      @cancel=${()=>this.close()}
      @confirm=${()=>{this.close(),window.location.href=`/#modal=store&tab=packs`}}
    ></confirm-dialog>`:n}};i([e({attribute:!1})],s.prototype,`info`,void 0),s=i([t(`insufficient-currency-dialog`)],s);