webpackJsonp([0],{B1mi:function(t,e,s){t.exports=s.p+"static/img/0021.85fef51.png"},EoAm:function(t,e,s){t.exports=s.p+"static/img/0010.5929163.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("PXGs")},null,null).exports,r=s("/ocq");function c(t){return("00"+t).substr(t.length)}function o(t){var e=function(t){var e=t.getFullYear();return 0==e%4&&0==e%100||0==e%400?366:365}(t),s=Math.ceil((t-new Date(t.getFullYear().toString()))/864e5)+1,a=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),i=0==t.getDay()?7:t.getDay(),n=t.getHours()<12&&t.getHours()>=4?"morning":t.getHours()>=12&&t.getHours()<20?"afternoon":"evening",r=t.getHours()>=12?"PM":"AM";return{date:t,year:t.getFullYear(),week:i,week_en:t.toDateString().split(" ")[0],month:t.getMonth()+1,month_en:t.toDateString().split(" ")[1],day:t.getDate(),dayOfYear:s,dayOfMonth:a,D_W:Math.ceil(100*i/7),D_M:Math.ceil(100*t.getDate()/a),D_Y:Math.ceil(100*s/e),hour:t.getHours(),min:t.getMinutes(),sec:t.getSeconds(),m:r,good:n,yearTotal:e}}function l(t,e){var s={},a=t.getTime()-e.getTime();return isNaN(a)||a<0?null:(s.Days=parseInt(a/1e3/60/60/24),s.TotalHours=parseInt(a/1e3/60/60)+"",s.Hours=s.TotalHours%24,s.TotalMinutes=parseInt(a/1e3/60),s.Minutes=s.TotalMinutes%60+"",s.TotalSeconds=parseInt(a/1e3),s.Seconds=s.TotalSeconds%60,s.TotalMilliseconds=a,s.Milliseconds=a%1e3,s)}var u={name:"CurTime",props:["date","user"],data:function(){return{good:o(this.date).good,focus:""}},methods:{enter:function(){window.open("https://www.baidu.com/s?ie=UTF-8&wd="+this.focus)}},filters:{formatDate:function(t){return function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in s)if(new RegExp("("+a+")").test(e)){var i=s[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?i:c(i))}return e}(new Date(t),"hh:mm:ss")}},watch:{date:function(t,e){this.good=o(e).good}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tWaster-curTime"},[s("div",{staticClass:"tWaster-curTime-item tWaster-curTime-clock"},[t._v("\n    "+t._s(t._f("formatDate")(t.date,t.date))+"\n    "),s("span",{staticClass:"tWaster-curTime-hand icon-middle-finger"})]),t._v(" "),s("div",{staticClass:"tWaster-curTime-item tWaster-curTime-hello"},[s("p",{staticClass:"tWaster-curTime-txt",staticStyle:{"font-size":"6vh"}},[t._v("Good "+t._s(t.good)+" , "+t._s(t.user.userName)+" .")]),t._v(" "),s("p",{staticClass:"tWaster-curTime-txt",staticStyle:{"font-size":"4vh"}},[t._v("What's your searching for today ?")]),t._v(" "),s("div",{staticStyle:{position:"relative"}},[s("i",{staticClass:"tWaster-curTime-enterIco icon-baidu"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.focus,expression:"focus"}],staticClass:"tWaster-curTime-enter",attrs:{type:"text"},domProps:{value:t.focus},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enter(e):null},input:function(e){e.target.composing||(t.focus=e.target.value)}}})])])])},staticRenderFns:[]};var m=s("VU/8")(u,d,!1,function(t){s("RmMj")},"data-v-236d66f1",null).exports,h={name:"CircleProgress",props:["type","theme","root","num","max","dur"],data:function(){var t=this;return{rotate:0,numbers:0,countTo:setInterval(function(){t.numbers++},this.dur?this.dur:5),loop:setInterval(function(){t.rotate++,t.left.style.transform="rotate("+3.6*t.rotate+"deg)"},this.dur?2*this.dur:10)}},mounted:function(){this.box.style.setProperty("--colTxt",this.theme.colTxt),this.box.style.setProperty("--colBg",this.theme.colBg),this.box.style.setProperty("--colOutCir",this.theme.colOutCir),this.box.style.setProperty("--colInCir",this.theme.colInCir)},computed:{stop:function(){return Math.ceil(this.max)},box:function(){return document.querySelector("#"+this.root)},clip:function(){return document.querySelector("#"+this.root+" .tWaste-circle-clip")},left:function(){return document.querySelector("#"+this.root+" .tWaste-circle-left")},right:function(){return document.querySelector("#"+this.root+" .tWaste-circle-right")},numBox:function(){return document.querySelector("#"+this.root+" .tWaste-circle-num")}},watch:{rotate:function(t){t>=100?(this.right.classList.remove("width-none"),this.clip.classList.remove("auto")):t>50&&(this.right.classList.remove("width-none"),this.clip.classList.add("auto")),t==this.stop&&clearInterval(this.loop)},numbers:function(t){t>=this.num&&clearInterval(this.countTo)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tWaste-circle-box",attrs:{id:t.root}},[s("div",{staticClass:"tWaste-circle-cover"}),t._v(" "),t._m(0),t._v(" "),s("p",{staticClass:"tWaste-circle-num tWaste-circle-numUp"},[t._v(t._s(t.numbers))]),t._v(" "),s("p",{staticClass:"tWaste-circle-num tWaste-circle-numDown"},[t._v(t._s(t.max)+"%")]),t._v(" "),s("div",{staticClass:"tWaste-circle-txt"},[s("p",[t._v(t._s(t.type._en))]),t._v(" "),s("p",[t._v(t._s(t.type._ch))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tWaste-circle-clip"},[e("div",{staticClass:"tWaste-circle-left"}),this._v(" "),e("div",{staticClass:"tWaste-circle-right width-none"})])}]};var p={name:"CalcTime",props:["date"],components:{CircleProgress:s("VU/8")(h,v,!1,function(t){s("OohO")},"data-v-15e5c0b9",null).exports},mounted:function(){},data:function(){return{isSwitch:!1,wasteObj:o(this.date),cirDur:5,cirTypeDY:{_ch:"年",_en:o(this.date).year},cirTypeDM:{_ch:"月",_en:o(this.date).month_en},cirTypeDW:{_ch:"周",_en:o(this.date).week_en},cirTheme:{colTxt:"#FFF",colBg:"#FFF",colOutCir:"#f7b3b3",colInCir:"red"},line:[{name:"年",data:o(this.date).year},{name:"月",data:o(this.date).month},{name:"日",data:o(this.date).day},{name:"周",data:o(this.date).week_en}]}},methods:{turnSwitch:function(){this.isSwitch=!this.isSwitch}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tWaste-calcTime"},[s("div",{staticClass:"tWaste-calcTime-circles",class:{"tWaste-switch":!t.isSwitch}},[s("CircleProgress",{attrs:{type:t.cirTypeDY,theme:t.cirTheme,dur:t.cirDur,root:"wasteDY",num:t.wasteObj.dayOfYear,max:t.wasteObj.D_Y}}),t._v(" "),s("CircleProgress",{attrs:{type:t.cirTypeDM,theme:t.cirTheme,dur:t.cirDur,root:"wasteDM",num:t.wasteObj.day,max:t.wasteObj.D_M}}),t._v(" "),s("CircleProgress",{attrs:{type:t.cirTypeDW,theme:t.cirTheme,dur:t.cirDur,root:"wasteDW",num:t.wasteObj.week,max:t.wasteObj.D_W}}),t._v(" "),s("p",{staticClass:"tWaste-timeLine-switch",staticStyle:{left:"2em"},on:{click:t.turnSwitch}},[s("span",{staticClass:"tWaste-timeLine-dot"}),t._v(" "),t._m(0)])],1),t._v(" "),s("div",{staticClass:"tWaste-calcTime-timeLine",class:{"tWaste-switch":t.isSwitch}},[s("span",{staticClass:"tWaste-timeLine-line"}),t._v(" "),t._l(t.line,function(e,a){return s("p",{key:"timeLine"+a,staticClass:"tWaste-timeLine-items"},[s("span",{staticClass:"tWaste-timeLine-dot"}),t._v(" "),s("span",{staticClass:"tWaste-timeLine-txt"},[t._v(t._s(e.data)),s("br"),t._v(t._s(e.name))])])}),t._v(" "),s("p",{staticClass:"tWaste-timeLine-switch",on:{click:t.turnSwitch}},[s("span",{staticClass:"tWaste-timeLine-dot"}),t._v(" "),t._m(1)])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"tWaste-timeLine-txt"},[this._v("Switch"),e("br"),this._v("点击")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"tWaste-timeLine-txt"},[this._v("Switch"),e("br"),this._v("点击")])}]};var f=s("VU/8")(p,_,!1,function(t){s("fcOa")},"data-v-dfb4aefe",null).exports,g={name:"LifeWaster",props:["date","user"],data:function(){return{wastePer:0,isEnd:!1,isEdit:!1,isWork:!1,distData:{content:"",distYear:"",distTime:"",Days:0,Hours:0,Minutes:0}}},methods:{getTotalData:function(){var t=new Date(this.user.birth).getFullYear()+100,e=new Date(this.user.birth).getMonth()+1,s=new Date(this.user.birth).getDate();return new Date(t+"-"+e+"-"+s)},openDist:function(){this.isEdit=!this.isEdit,this.isWork&&(this.isWork=!1),this.isEnd=!1},addDist:function(){var t=this.distData.distYear+" "+this.distData.distTime,e=l(new Date(t),this.date);this.distData.Days=e.Days,this.distData.Hours=e.Hours,this.distData.Minutes=e.Minutes,this.isWork=!0,this.isEdit=!1,this.isEnd=!0}},mounted:function(){var t=new Date(this.user.birth).getTime(),e=this.getTotalData().getTime(),s=this.date.getTime();this.wastePer=Math.ceil(100*(s-t)/(e-t))},computed:{surData:function(){return l(this.date,new Date(this.user.birth))},lastData:function(){return l(this.getTotalData(),this.date)}}},W={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tWaste-lifeWaster"},[s("div",{staticClass:"tWaste-lifeWaster-items tWaste-wasteItems"},[s("p",[s("span",{staticClass:"tWaste-lifeWaster-title"},[t._v("浪费")]),t._v(" "),s("span",{staticClass:"tWaste-lwi-txt"},[t._v(t._s(t.surData.Days)+" 天")]),t._v(" "),s("span",{staticClass:"tWaste-lwi-txt"},[s("br"),s("br"),t._v("\n        "+t._s(t.surData.Hours)+" 时\n        "+t._s(t.surData.Minutes)+" 分\n        "+t._s(t.surData.Seconds)+" 秒\n      ")])]),t._v(" "),s("span",{staticClass:"tWaste-lifeLine tWaste-countUp"}),t._v(" "),s("span",{staticClass:"tWaste-lifeLine tWaste-lineUp",style:"height:"+50*(100-t.wastePer)/100+"%"})]),t._v(" "),s("div",{staticClass:"tWaste-splitLine"}),t._v(" "),s("div",{staticClass:"tWaste-lifeWaster-items tWaste-lastItems"},[s("p",[s("span",{staticClass:"tWaste-lwi-txt"},[t._v("\n        "+t._s(t.lastData.Hours)+" 时\n        "+t._s(t.lastData.Minutes)+" 分\n        "+t._s(t.lastData.Seconds)+" 秒\n        "),s("br"),s("br")]),t._v(" "),s("span",{staticClass:"tWaste-lifeWaster-title"},[t._v("残余")]),t._v(" "),s("span",{staticClass:"tWaste-lwi-txt"},[t._v(t._s(t.lastData.Days)+" 天")])]),t._v(" "),s("span",{staticClass:"tWaste-lifeLine tWaste-countDown"}),t._v(" "),s("span",{staticClass:"tWaste-lifeLine tWaste-lineDown",style:"height:"+50*t.wastePer/100+"%"})]),t._v(" "),s("div",{staticClass:"tWaste-userHeader"},[s("p",[t._v(t._s(t.user.userName.slice(0,1)))])]),t._v(" "),s("div",{staticClass:"tWaste-shortLine"}),t._v(" "),s("div",{staticClass:"tWaste-distance"},[s("p",{staticClass:"tWaste-addDist",class:{"dist-bottom":t.isEnd,hidden:t.isWork},on:{click:t.openDist}},[t._v(t._s(t.isEdit?"否":"预"))]),t._v(" "),t.isWork?s("div",{directives:[{name:"show",rawName:"v-show",value:t.isWork,expression:"isWork"}]},[t._m(0),t._v(" "),s("p",{staticClass:"tWaste-lifeWaster-disCont"},[t._v(t._s(t.distData.content))]),t._v(" "),s("p",{staticClass:"tWaste-lifeWaster-disTime"},[t._v("\n        "+t._s(t.distData.Days)+" 天\n        "+t._s(t.distData.Hours)+" 时\n        "+t._s(t.distData.Minutes)+" 分\n      ")])]):t._e()]),t._v(" "),s("div",{staticClass:"tWaste-distInput",class:{"dist-hidden":!t.isEdit},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addDist(e):null}}},[s("p",[t._v(" ：事项"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.distData.content,expression:"distData.content"}],attrs:{type:"text"},domProps:{value:t.distData.content},on:{input:function(e){e.target.composing||t.$set(t.distData,"content",e.target.value)}}})]),t._v(" "),s("p",[t._v(" ： 年份"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.distData.distYear,expression:"distData.distYear"}],attrs:{type:"text"},domProps:{value:t.distData.distYear},on:{input:function(e){e.target.composing||t.$set(t.distData,"distYear",e.target.value)}}})]),t._v(" "),s("p",[t._v(" ： 时间"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.distData.distTime,expression:"distData.distTime"}],attrs:{type:"text"},domProps:{value:t.distData.distTime},on:{input:function(e){e.target.composing||t.$set(t.distData,"distTime",e.target.value)}}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"tWaste-lifeWaster-disTitle"},[this._v("距"),e("br"),this._v("离")])}]};var D=s("VU/8")(g,W,!1,function(t){s("TFGO")},"data-v-295efd8a",null).exports,C=s("POQF"),w=s.n(C),y=s("EoAm"),T=s.n(y),b=s("vz0p"),x=s.n(b),M=s("rnBj"),E=s.n(M),S=s("B1mi"),k=s.n(S),L=s("c89/"),O=s.n(L),F={name:"Home",components:{CurTime:m,CalcTime:f,LifeWaster:D},data:function(){return{date:new Date,version:{version:"1.0",timeQ:"2018/10/21",author:"金志相 <mulander@qq.com>",link:"https://github.com/Mulander-J"},user:{userName:"Mulander",birth:"1996-07-06"}}},mounted:function(){var t=this;this.timer=setInterval(function(){t.date=new Date},1e3)},computed:{twBgs:function(){var t=this.date.getHours();return 7==t?w.a:10==t?T.a:15==t?x.a:17==t?E.a:21==t?k.a:O.a}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tWaster-wrap"},[s("div",{staticClass:"tWaster-fixed"},[s("img",{staticStyle:{width:"100%"},attrs:{src:t.twBgs,alt:""}})]),t._v(" "),s("header",{staticClass:"tWaster-header"},[s("span",{staticClass:"icon-logo"},[t._l(51,function(t,e){return s("span",{class:"path"+(e+1)})}),t._v(" "),s("p",{staticClass:"icon-logo-version"},[t._m(0),t._v("\n       "+t._s(t.version.version)+"\n       "),t._m(1)])],2)]),t._v(" "),s("div",{staticClass:"tWaster-content"},[s("CalcTime",{attrs:{date:t.date}}),t._v(" "),s("CurTime",{attrs:{date:t.date,user:t.user}}),t._v(" "),s("LifeWaster",{attrs:{date:t.date,user:t.user}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"tWaster-header-btn",attrs:{href:""}},[this._v("Setting"),e("i",{staticClass:"icon-settings"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"tWaster-header-btn",attrs:{href:"https://github.com/Mulander-J",target:"_blank"}},[e("i",{staticClass:"icon-github"}),this._v("GitHub")])}]};var P=s("VU/8")(F,H,!1,function(t){s("eL7j")},"data-v-6f2906e8",null).exports;a.a.use(r.a);var Y=new r.a({routes:[{path:"/",name:"Home",component:P}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:Y,components:{App:n},template:"<App/>"})},OohO:function(t,e){},POQF:function(t,e,s){t.exports=s.p+"static/img/0007.d2f72b7.png"},PXGs:function(t,e){},RmMj:function(t,e){},TFGO:function(t,e){},"c89/":function(t,e,s){t.exports=s.p+"static/img/gd001.894a0d4.png"},eL7j:function(t,e){},fcOa:function(t,e){},rnBj:function(t,e,s){t.exports=s.p+"static/img/0017.edd1b83.png"},vz0p:function(t,e,s){t.exports=s.p+"static/img/0015.65108c4.png"}},["NHnr"]);
//# sourceMappingURL=app.5d1a04c255370cda9163.js.map