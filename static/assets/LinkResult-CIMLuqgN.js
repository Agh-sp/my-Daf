import{t as e}from"./AssetUrls-BCuYgOzJ.js";import{st as t,z as n}from"./decorate-DDFJEDDP.js";import{t as r}from"./InGameModal-Dg_yQR8o.js";import{Mt as i,Z as a}from"./index-6j9FYAGO.js";var o=(r,i=`account_modal.link_google`)=>t`
  <button
    @click=${r}
    class="w-full px-6 py-3 text-[#1f1f1f] bg-white hover:bg-[#f7f8f8] border border-[#dadce0] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4] transition-colors duration-200 flex items-center justify-center gap-3 shadow-lg"
  >
    <img
      src=${e(`images/GoogleLogo.svg`)}
      alt=${n(`account_modal.google_alt`)}
      class="w-5 h-5"
    />
    <span class="font-bold tracking-wide">${n(i)}</span>
  </button>
`,s={google:`account_modal.link_google_success`,already_linked:`account_modal.link_google_already_linked`,steam:`account_modal.link_steam_success`,account_already_has_steam:`steam_link_modal.reason_account_already_has_steam`,steam_linked_elsewhere:`steam_link_modal.reason_steam_linked_elsewhere`,steam_has_progress:`steam_link_modal.reason_steam_has_progress`,error:`account_modal.link_google_error`,steam_error:`account_modal.link_steam_error`};async function c(){let e=()=>void r(n(`steam_link_modal.reason_steam_has_progress`)),t=await a();if(!t.ok){if(t.reason===`rate_limited`){r(n(`steam_link_modal.reason_rate_limited`,{seconds:t.retryAfterSeconds??0}));return}return e()}let o=t.conflict;if(o===null)return e();if(!o.discardable){r(n(o.block===`paid`?`steam_link_modal.reason_discard_blocked_paid`:`steam_link_modal.reason_discard_blocked`));return}await i(`steam-link-modal`).catch(()=>{});let s=document.querySelector(`steam-link-modal`);if(s===null||typeof s.openForConflict!=`function`)return console.warn(`offerSteamConflictDiscard: steam-link-modal unavailable`),e();await s.openForConflict(o.account)}function l(e){let t=typeof e?.link==`string`?e.link:void 0;if(t===void 0)return;let i=new URLSearchParams(window.location.hash.slice(1));i.delete(`link`);let a=i.toString();if(history.replaceState(null,``,a?`#${a}`:window.location.pathname+window.location.search),!Object.prototype.hasOwnProperty.call(s,t))return;if(t===`steam_has_progress`){c();return}let o=s[t];r(n(o))}export{o as n,l as t};