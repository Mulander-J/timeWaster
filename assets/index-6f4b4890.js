import{_ as a}from"./CatBtn-54c5fc33.js";import{_ as e}from"./TheInput-48a60911.js";import{r as s,d as r,f as n,C as t,b as o,o as u,c,e as i,t as l,u as m,i as d,w as p,T as f,m as g,_ as v}from"./index-cfc64c49.js";import{u as _}from"./app-60c8e0e5.js";const h=s({}),y=s({}),j={class:"loginWrapper"},x={class:"text-3xl"},E={class:"text-center"},b={key:0,class:"hint"},k={key:1,class:"hint"},C=v(r({__name:"index",setup(s){const r=n(),v=_(),[C,D]=t(!0),[I,L]=t(!1),M=()=>{D()},O=o((()=>C.value?"Login":"Register")),{formData:U,formErr:w,clearErr:N}=(a=>{const e=()=>{Object.assign(h,a)},s=()=>{Object.assign(y,a)},r=()=>{e(),s()};return r(),{formData:h,formErr:y,initData:r,updateData:a=>{a&&Object.assign(h,a)},clearData:e,clearErr:s}})({username:""}),P=async()=>{if(!I.value){L(!0);try{N();const a=(()=>{const{username:a}=U;return a?{username:a}:!(w.username="Please enter username")})();a&&(v.setUser({username:a.username,sessionId:"SK28NP0"}),r.push("/app"))}catch(a){w.username=(null==a?void 0:a.message)||"Error"}finally{L(!1)}}};return(s,r)=>{const n=e,t=a;return u(),c("div",j,[i("h2",x,l(m(O)),1),d(n,{value:m(U).username,"onUpdate:value":r[0]||(r[0]=a=>m(U).username=a),errMsg:m(w).username,"onUpdate:errMsg":r[1]||(r[1]=a=>m(w).username=a),placeholder:"Enter your name",max:40},null,8,["value","errMsg"]),i("div",E,[d(t,{class:"mb-4",onClick:P},{default:p((()=>[g(l(m(I)?"Loading":"Start"),1)])),_:1}),d(f,{name:"fade",mode:"out-in"},{default:p((()=>[m(C)?(u(),c("div",b,[g("No account yet? "),i("a",{onClick:M},"Register "),g("one~")])):(u(),c("div",k,[g("Already have a account,"),i("a",{onClick:M},"Login "),g("now!")]))])),_:1})])])}}}),[["__scopeId","data-v-9aaf2753"]]);export{C as default};
