import{_ as a}from"./TheInput-9951b550.js";import{j as s,C as l,m as e,p as o,k as t,D as n,q as u,E as r,o as i,d,l as v,e as p,t as c,g as m,w as f,x as h,F as g,y as I,B as w,z as y,A as j}from"./.pnpm-e78b5e43.js";import{u as x}from"./app-8989940e.js";import{u as _,N as k}from"./mockData-afbbc658.js";import{_ as V}from"./index-235f4331.js";const b={class:"h-full w-full"},C={key:0,class:"row-center h-full w-full"},D=[(a=>(y("data-v-a9a0a1a4"),a=a(),j(),a))((()=>p("div",{class:"text-2xl font-bad font-bold prose prose-stone"},"Space + R | Chat with Random ",-1)))],B={key:1,class:"h-full flex flex-col gap-y-4"},E={class:"grow overflow-overlay h-10px"},H=V(s({__name:"Channel",setup(s){const y=l(),j=e(),V=x(),H=_(),M=o({inputVal:"",chatlogs:[]}),P=t((()=>{var a;return null==(a=y.params)?void 0:a.id})),R=t((()=>{var a;return P.value?P.value===(null==(a=V.user)?void 0:a.sessionId)?V.user:H.findUserById(P.value):null})),S=t((()=>{var a,s;const l=null==(a=R.value)?void 0:a.username;if(null==(s=R.value)?void 0:s.username)return k.find((a=>a[0]===l))})),T=(a,s,l)=>{M.chatlogs.push({id:M.chatlogs.length+1,from:s,to:l,data:a})},U=()=>{var a,s,l;const e=M.inputVal;if(!e)return;M.inputVal="";const o=null==(a=V.user)?void 0:a.sessionId,t=null==(s=R.value)?void 0:s.sessionId;if(T(e.trim(),o,t),"/time"===e)return void T((new Date).toLocaleString(),t,o);switch(null==(l=S.value)?void 0:l[1]){case"repeat":T("You said: "+e,t,o);break;case"reverse":T(e.split("").reverse().join(""),t,o)}};return n((()=>R.value),(a=>{a&&(async()=>{var a,s,l,e,o,t;M.chatlogs.length=0,M.chatlogs=R.value?[{id:1,from:null==(a=R.value)?void 0:a.sessionId,to:null==(s=V.user)?void 0:s.sessionId,data:(null==(l=S.value)?void 0:l[2])||`Hello, I'm ${null==(e=R.value)?void 0:e.username}.`},{id:2,from:null==(o=V.user)?void 0:o.sessionId,to:null==(t=R.value)?void 0:t.sessionId,data:"Hello!"}]:[]})()}),{immediate:!0}),u((()=>{r("space+r",(function(){const a=H.data[Math.floor(Math.random()*H.data.length)];return j.push("/app/"+a.sessionId),!1}))})),(s,l)=>{var e;const o=a;return i(),d("div",b,[v(R)?(i(),d("div",B,[p("h4",null,"To: "+c(null==(e=v(R))?void 0:e.username),1),p("ul",E,[m(h,{name:"show"},{default:f((()=>[(i(!0),d(g,null,I(v(M).chatlogs,(a=>(i(),d("li",{class:w(["chatPop",[a.from===v(P)?"justify-start":"justify-end"]]),key:a.id},[p("section",null,c(a.data),1)],2)))),128))])),_:1})]),m(o,{value:v(M).inputVal,"onUpdate:value":l[0]||(l[0]=a=>v(M).inputVal=a),placeholder:"Press enter to submit",onOnEnter:U},null,8,["value"])])):(i(),d("div",C,D))])}}}),[["__scopeId","data-v-a9a0a1a4"]]);export{H as default};
