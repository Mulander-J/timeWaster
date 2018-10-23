<template>
  <div class="tWaster-curTime">
    <div class="tWaster-curTime-item tWaster-curTime-clock">
      {{date|formatDate(date)}}
      <span class="tWaster-curTime-hand icon-middle-finger"></span>
    </div>
    <div class="tWaster-curTime-item tWaster-curTime-hello">
      <p class="tWaster-curTime-txt" style="font-size: 6vh">Good {{good}} , {{user.userName}} .</p>
      <p class="tWaster-curTime-txt" style="font-size: 4vh">What's your searching for today ?</p>
      <div style="position: relative">
        <i class="tWaster-curTime-enterIco icon-baidu"></i>
        <input class="tWaster-curTime-enter" v-model="focus" type="text" @keyup.enter="enter"/>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate, timeWaste} from '@/libs/utils.js'
export default {
  name: "CurTime",
  props: ['date','user'],
  data () {
    return {
      good:timeWaste(this.date).good,
      focus:''
    }
  },
  methods: {
    enter () {
      window.open("https://www.baidu.com/s?ie=UTF-8&wd="+this.focus);
    }
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'hh:mm:ss');
    }
  },
  watch: {
    date ( oldVal,newVal ) {
      this.good=timeWaste(newVal).good
    }
  }
}
</script>

<style scoped>
@import "./../../static/fonts/icomoon.css";
.tWaster-curTime{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  color: #FFF;
}
.tWaster-curTime-item{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tWaster-curTime-clock{
  position: relative;
  font-size: 20vh;
  cursor: pointer;
  transition: 2s ease-out;
  opacity: 0.1;
}
.tWaster-curTime-clock:hover{
  opacity: 1;
}
.tWaster-curTime-txt{
  transition: 2s ease-out;
  opacity: 0.1;
}
.tWaster-curTime-enter{
  border: none;
  height: 4vh;
  color: #FFFFFF;
  font-size: 4vh;
  line-height: 4vh;
  padding: 3vh 10vw;
  border-bottom: 0.5vh solid #FFFFFF;
  background-color: transparent;
  transition: 2s ease-out;
  opacity: 0.1;
}
.tWaster-curTime-enterIco{
  opacity: 0.1;
  color: #FFFFFF !important;
  position: absolute;
  left: 4vw;
  font-size: 4vh;
  top: 0.5vh;
}
.tWaster-curTime-enter:focus{
  opacity: 1;
}
.tWaster-curTime-hello:hover .tWaster-curTime-txt,.tWaster-curTime-hello:hover .tWaster-curTime-enterIco{
  opacity: 0.5;
}
.tWaster-curTime-hello{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tWaster-curTime-hand{
  position: absolute;
  background-color: red;
  border-radius: 50%;
  height: 4vh;
  width: 4vh;
  left: 50%;
  bottom: 3%;
  font-size: 3vh;
  padding: 0.5vh;
  overflow: hidden;
  opacity: 0;
}
.tWaster-curTime-clock:hover .tWaster-curTime-hand{
  opacity: 1;
}
</style>
