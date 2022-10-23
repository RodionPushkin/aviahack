(function(){"use strict";var e={7877:function(e,n){const t="http://localhost:80/api/";class r{async get(e,n){return await this.request("get",e,n)}async post(e,n,t){return await this.request("post",e,t,n)}async put(e,n,t){return await this.request("put",e,t,n)}async delete(e,n,t){return await this.request("delete",e,t,n)}async request(e,n,r,o){o||(o={}),o["Content-Type"]="application/json",o["Accept"]="application/json";let a={method:e,headers:o};return r&&(a.body=JSON.stringify(r)),await fetch(t+n,a).then((e=>e.json())).then((e=>e)).catch((e=>[]))}}n["Z"]=new r},2237:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n,t,r,a,i){const u=(0,o.up)("headerComponent"),c=(0,o.up)("mainComponent"),s=(0,o.up)("footerComponent");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(c),(0,o.Wm)(s)],64)}const i=e=>((0,o.dD)("data-v-11cea7fb"),e=e(),(0,o.Cn)(),e),u={class:"header"},c={class:"container"},s=i((()=>(0,o._)("span",null,"aviahack",-1))),l=i((()=>(0,o._)("span",null,"МТС",-1))),f=(0,o.uE)('<label for="burger" data-v-11cea7fb><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu" data-v-11cea7fb><line x1="3" y1="12" x2="21" y2="12" data-v-11cea7fb></line><line x1="3" y1="6" x2="21" y2="6" data-v-11cea7fb></line><line x1="3" y1="18" x2="21" y2="18" data-v-11cea7fb></line></svg></label>',1),d={class:"nav"};function p(e,n,t,a,i,p){const h=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",u,[(0,o._)("div",c,[(0,o.Wm)(h,{onClick:n[0]||(n[0]=e=>i.isMenuOpened=!1),to:"/",class:"logo"},{default:(0,o.w5)((()=>[s,(0,o.Uk)(" — "),l])),_:1}),(0,o.wy)((0,o._)("input",{type:"checkbox",id:"burger","onUpdate:modelValue":n[1]||(n[1]=e=>i.isMenuOpened=e)},null,512),[[r.e8,i.isMenuOpened]]),f,(0,o._)("nav",d,[(0,o.Wm)(h,{onClick:n[2]||(n[2]=e=>i.isMenuOpened=!1),to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("главная")])),_:1}),(0,o.Wm)(h,{onClick:n[3]||(n[3]=e=>i.isMenuOpened=!1),to:"/panel"},{default:(0,o.w5)((()=>[(0,o.Uk)("панель")])),_:1})])])])}var h={name:"header.component",data(){return{isMenuOpened:!1}}},v=t(89);const m=(0,v.Z)(h,[["render",p],["__scopeId","data-v-11cea7fb"]]);var b=m;const g=e=>((0,o.dD)("data-v-7e3f2d2e"),e=e(),(0,o.Cn)(),e),y={class:"main"},w=g((()=>(0,o._)("div",{class:"background"},[(0,o._)("div",{class:"buble"}),(0,o._)("div",{class:"buble"})],-1)));function k(e,n,t,r,a,i){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("main",y,[w,(0,o.Wm)(u)])}var C={name:"main.component"};const O=(0,v.Z)(C,[["render",k],["__scopeId","data-v-7e3f2d2e"]]);var _=O;const j={class:"footer"};function x(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("footer",j)}var E={name:"footer.component"};const S=(0,v.Z)(E,[["render",x]]);var T=S,A={components:{headerComponent:b,mainComponent:_,footerComponent:T}};const M=(0,v.Z)(A,[["render",a]]);var D=M,N=t(2483),P=t(7877);const q=async(e,n,t)=>{let r,o=await P.Z.get(`user?token=${localStorage.getItem("token")}`).then((e=>e));r=o.length>0,r?"/auth"==e.path?t({path:"/panel"}):t():"/auth"==e.path?t():"/panel"==e.path&&t({path:"/auth"})},W=[{path:"/",name:"главная",component:()=>t.e(834).then(t.bind(t,4834))},{path:"/auth",name:"вход",beforeEnter:q,component:()=>t.e(183).then(t.bind(t,7183))},{path:"/panel",name:"панель",beforeEnter:q,component:()=>t.e(713).then(t.bind(t,713))}],Z=(0,N.p7)({history:(0,N.PO)("/"),routes:W});var L=Z,U=t(65),B=(0,U.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(D).use(B).use(L).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{183:"225a669b",713:"b3a4aada",834:"0cb65b05"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{183:"22cbee72",713:"a437528b",834:"2813c0f2"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="aviahack:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={183:1,713:1,834:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkaviahack"]=self["webpackChunkaviahack"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2237)}));r=t.O(r)})();
//# sourceMappingURL=app.fe5e6a05.js.map