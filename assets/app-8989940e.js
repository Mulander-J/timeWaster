import{G as s}from"./.pnpm-e78b5e43.js";import{u as e}from"./index-235f4331.js";const r=s({id:"app",state:()=>({user:null}),getters:{},actions:{getUser(){this.user=JSON.parse(e.value||"")},setUser(s){this.user=s||null,e.value=JSON.stringify(this.user)},clearUser(){this.user=null,e.value=null}}});export{r as u};
