import{_ as a}from"./CatBtn-caf797fb.js";import{o as s,d,i as e,j as l,k as t,e as i,n as c,l as v,m as o,p as n,q as r,r as u,g as _,t as p,w as f,T as m,s as h,v as x,x as g,F as b,y,f as k,z as w,A as j,B as z}from"./.pnpm-e78b5e43.js";import{_ as C}from"./index-235f4331.js";import{u as $}from"./app-8989940e.js";import{u as A}from"./mockData-afbbc658.js";const I={class:"box"},U=[e('<div class="cat-box" data-v-4dc4930e><div class="cat" data-v-4dc4930e><div class="helf-box helf-box--ass" data-v-4dc4930e><div class="helf-box clip" data-v-4dc4930e><div class="cat__body" data-v-4dc4930e></div></div><div class="cat__ass" data-v-4dc4930e><div class="cat__body--fake" data-v-4dc4930e></div><div class="cat__foots" data-v-4dc4930e></div><div class="cat__tail" data-v-4dc4930e></div></div></div><div class="helf-box helf-box--head" data-v-4dc4930e><div class="cat__head" data-v-4dc4930e><div class="cat__face" data-v-4dc4930e><div class="cat__ears" data-v-4dc4930e></div><div class="cat__eyes" data-v-4dc4930e></div><div class="cat__mouth" data-v-4dc4930e></div><div class="cat__mustache" data-v-4dc4930e></div></div><div class="cat__foots" data-v-4dc4930e></div></div><div class="helf-box clip" data-v-4dc4930e><div class="cat__body" data-v-4dc4930e></div></div></div></div></div>',1)];const B=C({},[["render",function(a,e,l,t,i,c){return s(),d("div",I,U)}],["__scopeId","data-v-4dc4930e"]]),D=l({__name:"TheAvatar",props:{seed:{},size:{}},setup(a){const e=a,l=t((()=>({height:`${e.size||32}px`,width:`${e.size||32}px`}))),o=`https://api.dicebear.com/6.x/lorelei/svg?seed=${btoa(e.seed||"0")}`;return(a,e)=>(s(),d("div",{class:"bg-black rounded-full",style:c(v(l))},[i("img",{src:o})],4))}}),L={class:"flex h-full"},T={class:"w-300px flex flex-col gap-y-4 p-6"},q=(a=>(w("data-v-da047132"),a=a(),j(),a))((()=>i("hr",null,null,-1))),F={key:1,class:"userList"},R=["onClick"],V={class:"grid"},E={class:"channelView"},G=C(l({__name:"index",setup(e){const l=o(),c=$(),w=A(),j=n({data:[],loading:!1}),C=t((()=>c.user||null)),I=()=>{c.clearUser(),l.push("/")},U=a=>{a?l.push("/app/"+a.sessionId):l.push("/app")};return r((()=>{c.getUser(),(async()=>{if(!j.loading){j.loading=!0;try{await x(1800),j.loading=!1,await x(800),j.data=w.fetchData()}catch{j.data.length=0}finally{j.loading=!1}}})()})),(e,l)=>{var t,c,o;const n=D,r=B,x=a,w=u("Router-view");return s(),d("div",L,[i("div",T,[i("div",{class:"user-card",onClick:l[0]||(l[0]=a=>U(null))},[_(n,{seed:null==(t=v(C))?void 0:t.username,size:64},null,8,["seed"]),i("span",null,p((null==(c=v(C))?void 0:c.username)||"Anonymous"),1)]),q,_(m,{name:"fade",mode:"out-in"},{default:f((()=>[v(j).loading?(s(),h(r,{key:0})):(s(),d("ul",F,[_(g,{name:"show"},{default:f((()=>[(s(!0),d(b,null,y(v(j).data,((a,l)=>{var t;return s(),d("li",{class:z(["user-card",[a.sessionId===(null==(t=e.$route.params)?void 0:t.id)&&"item__active"]]),key:l,onClick:s=>U(a)},[_(n,{seed:a.username,size:52},null,8,["seed"]),i("div",V,[i("span",null,p(a.username),1),i("p",null,p(a.lastUpdateAt),1)])],10,R)})),128))])),_:1})]))])),_:1}),_(x,{onClick:I},{default:f((()=>[k("Logout")])),_:1})]),i("div",E,[(s(),h(w,{key:(null==(o=e.$route.params)?void 0:o.id)||1}))])])}}}),[["__scopeId","data-v-da047132"]]);export{G as default};
