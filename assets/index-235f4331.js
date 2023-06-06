import{u as e,N as t,c as n,a as r,b as o,o as s,d as a,e as i,f as l,r as c,g as u,F as d,h as p}from"./.pnpm-e78b5e43.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const f={},m=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in f)return;f[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const o=r[n];if(o.href===e&&(!t||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},h={path:"/app",name:"Chat",component:()=>m((()=>import("./index-fe53635e.js")),["assets/index-fe53635e.js","assets/CatBtn-caf797fb.js","assets/.pnpm-e78b5e43.js","assets/.pnpm-680714c2.css","assets/CatBtn-d2849917.css","assets/app-8989940e.js","assets/mockData-afbbc658.js","assets/index-52eb9534.css"]),children:[{path:"",name:"Launch",component:()=>m((()=>import("./Channel-767abb91.js")),["assets/Channel-767abb91.js","assets/TheInput-9951b550.js","assets/.pnpm-e78b5e43.js","assets/.pnpm-680714c2.css","assets/TheInput-ad4f976b.css","assets/app-8989940e.js","assets/mockData-afbbc658.js","assets/Channel-f360ec3f.css"])},{path:":id",name:"Channel",component:()=>m((()=>import("./Channel-767abb91.js")),["assets/Channel-767abb91.js","assets/TheInput-9951b550.js","assets/.pnpm-e78b5e43.js","assets/.pnpm-680714c2.css","assets/TheInput-ad4f976b.css","assets/app-8989940e.js","assets/mockData-afbbc658.js","assets/Channel-f360ec3f.css"])}]},_=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),g={path:"/",name:"Login",component:()=>m((()=>import("./index-2152ccae.js")),["assets/index-2152ccae.js","assets/CatBtn-caf797fb.js","assets/.pnpm-e78b5e43.js","assets/.pnpm-680714c2.css","assets/CatBtn-d2849917.css","assets/TheInput-9951b550.js","assets/TheInput-ad4f976b.css","assets/app-8989940e.js","assets/index-e4d87b1e.css"])},y={path:"/:pathMatch(.*)*",name:"NotFound",component:()=>m((()=>import("./NotFound-cadb788b.js")),["assets/NotFound-cadb788b.js","assets/.pnpm-e78b5e43.js","assets/.pnpm-680714c2.css","assets/NotFound-f53ebf37.css"])},E=[g,y],O=Object.freeze(Object.defineProperty({__proto__:null,NOT_FOUND_ROUTE:y,ROOT_ROUTE:g,default:E},Symbol.toStringTag,{value:"Module"}));const b=(v=Object.assign({"./modules/app.ts":_,"./modules/basic.ts":O}),L=[],Object.keys(v).forEach((e=>{const t=v[e].default;if(!t)return;const n=Array.isArray(t)?[...t]:[t];L.push(...n)})),L);var v,L;const T=e("token",""),j=["/"],P=["/app"];t.configure({showSpinner:!1});const N=n({history:r(),routes:b,strict:!0,scrollBehavior:()=>({left:0,top:0})});var S;(function(e){e.beforeEach((()=>{t.start()})),e.afterEach((()=>{t.done()}))})(S=N),function(e){e.beforeEach((async(e,t,n)=>{const r=!!T.value;j.includes(e.path)?r?n("/app"):n():P.includes(e.path)?r?n():n("/"):n()}))}(S);const x=o(),A=[i("div",{class:"text-center text-3xl py-2"},[i("span",null,[l("TimeWaster"),i("sup",null,"v3.0")])],-1)];const R=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},k=R({},[["render",function(e,t){return s(),a("header",null,A)}]]),w={class:"mix-blend-soft-light bg-white text-center py-1 md:py-2 transition-all duration-700 ease-linear"},I=[i("a",{target:"_blank",href:"https://github.com/Mulander-J/timeWaster"},[i("div",{class:"flex justify-center items-center"},[i("span",null,"MIT LICENSE 2019 Mulander "),i("div",{class:"ml-2 i-logos:github-icon"})])],-1)];const C=R({},[["render",function(e,t){return s(),a("footer",w,I)}]]),M={class:"grow w-full"},D=p({__name:"App",setup:e=>(e,t)=>{const n=c("Router-view");return s(),a(d,null,[u(k),i("main",M,[u(n)]),u(C)],64)}});D.use(N),D.use(x),D.mount("#app");export{R as _,T as u};
