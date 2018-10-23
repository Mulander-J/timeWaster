<template>
  <div class="tWaster-wrap">
    <div class="tWaster-fixed"><img :src="twBgs" alt="" style="width: 100%"></div>
    <header class="tWaster-header">
      <span class="icon-logo">
       <span v-for="(item,index) in 51" :class="'path'+(index+1)"></span>
       <p class="icon-logo-version">
         <a class="tWaster-header-btn" href="">Setting<i class="icon-settings"></i></a>
         {{version.version}}
         <a class="tWaster-header-btn" href="https://github.com/Mulander-J" target="_blank"><i class="icon-github"></i>GitHub</a>
       </p>
     </span>
    </header>
    <div class="tWaster-content">
      <CalcTime :date="date"></CalcTime>
      <CurTime :date="date" :user="user"></CurTime>
      <LifeWaster :date="date" :user="user"></LifeWaster>
    </div>
  </div>
</template>

<script>
import CurTime from '@/components/CurTime'
import CalcTime from '@/components/CalcTime'
import LifeWaster from '@/components/LifeWaster'
import {vers} from '@/libs/utils.js'
import png07 from './../assets/backImg/0007.png'
import png10 from './../assets/backImg/0010.png'
import png15 from './../assets/backImg/0015.png'
import png17 from './../assets/backImg/0017.png'
import png21 from './../assets/backImg/0021.png'
import pngZero from './../assets/backImg/gd001.png'
export default {
  name: "Home",
  components: {
    CurTime,
    CalcTime,
    LifeWaster,
  },
  data () {
    return{
      date: new Date(),
      version:vers(),
      user:{
        userName:'Mulander',
        birth:'1996-07-06'
      }
    }
  },
  mounted () {
    let _this = this //声明一个变量指向vue实例this,保证作用域一致
    this.timer = setInterval(function() {
      _this.date = new Date();
    }, 1000)
  },
  computed:{
    twBgs () {
      let t = this.date.getHours()
      if(t==7){
        return png07
      }else if(t==10){
        return png10
      }else if(t==15){
        return png15
      }else if(t==17){
        return png17
      }else if(t==21){
        return png21
      }else {
        return pngZero
      }
    }
  }
}
</script>

<style scoped>
  @import "./../../static/fonts/icomoon.css";
.tWaster-wrap{}
.tWaster-fixed{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.tWaster-content{
  display: flex;
  justify-content: space-between;
  height: 90vh;
  min-height: 20em;
  align-items: center;
}
.tWaster-survival{
  width: 10em;
}
.tWaster-header{
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  background-color: transparent;
  padding: 0.8vh 0;
  opacity: 0.8;
}
.icon-logo{
  font-size: 10vh;
  cursor: pointer;
}
.icon-logo span{
  position: relative;
  top: -12vh;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.icon-logo span:nth-child(1){
  position: relative;
  top: -6vh;
  opacity: 0.3;
}
.tWaster-header:hover span{
  top: 0;
  opacity: 1;
}
.tWaster-header:hover .icon-logo-version{
  transform: scale(0.5);
}
.icon-logo-version{
  position: relative;
  color: #FFF;
  font-size: 7vh;
  top: -3vh;
  transform: scale(0);
  transition: 0.5s ease-in-out;
}
.icon-logo-version:before,.icon-logo-version:after{
  content: '';
  position: absolute;
  height: 1vh;
  width: 0%;
  bottom: -1vh;
  background-color: red;
  transition: 0.5s ease-in-out;
  opacity: 0.8;
  animation: iconLogoLine 1s 0s ease-in-out infinite;
}
.icon-logo-version:before{
  left: 50%;
  text-align: right;
}
.icon-logo-version:after{
  right: 50%;
  text-align: right;
}
@keyframes iconLogoLine {
  0%{
    width: 0%;
    opacity: 0.8;
  }
  100%{
    width: 45%;
    opacity: 0.1;
  }
}
.tWaster-header-btn{
  opacity: 0.8;
  color: #FFFFFF;
  transition: 0.1s ease-in-out;
}
.tWaster-header-btn i{
  margin: 0 1em;
  border-radius: 50%;
  overflow: hidden;
  transition: 1s ease-in-out;
}
.tWaster-header-btn:hover{
  color: red;
  opacity: 1;
}
.tWaster-header-btn:hover i{
  animation:btnWave 1s ease-in-out infinite;
}
@keyframes btnWave {
  0%,100%{
    box-shadow: 0 0 rgba(255, 0, 0, 0.9);
  }
  50%{
    box-shadow: 0 0 0 2vh rgba(255, 255, 255, 0.3);
  }
}
</style>
