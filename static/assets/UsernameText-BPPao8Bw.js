import{rt as e,st as t}from"./decorate-DDFJEDDP.js";var n=/^(.+)\.(\d{4})$/;function r(e){let t=n.exec(e);return t===null?{base:e,discriminator:null}:{base:t[1],discriminator:t[2]}}function i(n,i=`text-blue-300`){let{base:a,discriminator:o}=r(n);return t`<span
    ><span class=${i}>${a}</span>${o===null?e:t`&nbsp;<span class="text-white/40 font-normal"
            >#${o}</span
          >`}</span
  >`}export{i as t};