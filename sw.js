if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>n(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(l(...s),t)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app-60c8e0e5.js",revision:null},{url:"assets/CatBtn-54c5fc33.js",revision:null},{url:"assets/CatBtn-d2849917.css",revision:null},{url:"assets/Channel-d55a080d.js",revision:null},{url:"assets/Channel-f360ec3f.css",revision:null},{url:"assets/index-42de583f.js",revision:null},{url:"assets/index-52eb9534.css",revision:null},{url:"assets/index-6f4b4890.js",revision:null},{url:"assets/index-cfc64c49.js",revision:null},{url:"assets/index-e4d87b1e.css",revision:null},{url:"assets/index-e979e4dd.css",revision:null},{url:"assets/mockData-4c78674a.js",revision:null},{url:"assets/NotFound-f53ebf37.css",revision:null},{url:"assets/NotFound-f6335987.js",revision:null},{url:"assets/TheInput-48a60911.js",revision:null},{url:"assets/TheInput-ad4f976b.css",revision:null},{url:"index.html",revision:"e73000128993b713068bd84a30b4df49"},{url:"registerSW.js",revision:"b6abd006a952145c55f7a91c35e633f7"},{url:"manifest.webmanifest",revision:"76bf8f8b71c0adea63fbb019b7083333"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
