<template>
  <div class="tWaste-lifeWaster">
    <div class="tWaste-lifeWaster-items tWaste-wasteItems">
      <p>
        <span class="tWaste-lifeWaster-title">浪费</span>
        <span class="tWaste-lwi-txt">{{surData.Days}} 天</span>
        <span class="tWaste-lwi-txt">
          <br/><br/>
          {{surData.Hours}} 时
          {{surData.Minutes}} 分
          {{surData.Seconds}} 秒
        </span>
      </p>
      <span class="tWaste-lifeLine tWaste-countUp"></span>
      <span class="tWaste-lifeLine tWaste-lineUp" :style="'height:'+(50*(100-wastePer)/100)+'%'"></span>
    </div>
    <div class="tWaste-splitLine"></div>
    <div class="tWaste-lifeWaster-items tWaste-lastItems">
      <p>
        <span class="tWaste-lwi-txt">
          {{lastData.Hours}} 时
          {{lastData.Minutes}} 分
          {{lastData.Seconds}} 秒
          <br/><br/>
        </span>
        <span class="tWaste-lifeWaster-title">残余</span>
        <span class="tWaste-lwi-txt">{{lastData.Days}} 天</span>
      </p>
      <span class="tWaste-lifeLine tWaste-countDown"></span>
      <span class="tWaste-lifeLine tWaste-lineDown" :style="'height:'+(50*wastePer/100)+'%'"></span>
    </div>
    <div class="tWaste-userHeader"><p>{{user.userName.slice(0, 1)}}</p></div>
    <div class="tWaste-shortLine"></div>
    <div class="tWaste-distance" >
      <p @click="openDist" class="tWaste-addDist" :class="{'dist-bottom':isEnd,'hidden':isWork}">{{isEdit?'否':'预'}}</p>
      <div v-if="isWork" v-show="isWork">
        <span class="tWaste-lifeWaster-disTitle">距<br/>离</span>
        <p class="tWaste-lifeWaster-disCont">{{distData.content}}</p>
        <p class="tWaste-lifeWaster-disTime">
          {{distData.Days}} 天
          {{distData.Hours}} 时
          {{distData.Minutes}} 分
        </p>
      </div>
    </div>
    <div class="tWaste-distInput" :class="{'dist-hidden':!isEdit}" @keyup.enter="addDist">
      <p> ：事项<input type="text" v-model="distData.content"></p>
      <p> ： 年份<input type="text" v-model="distData.distYear"></p>
      <p> ： 时间<input type="text" v-model="distData.distTime"></p>
    </div>
  </div>
</template>

<script>
import {timeMath} from "@/libs/utils.js";

export default {
  name: "LifeWaster",
  props: ['date','user'],
  data () {
    return {
      wastePer:0,
      isEnd:false,
      isEdit:false,
      isWork:false,
      distData:{
        content:'',
        distYear:'',
        distTime:'',
        Days:0,
        Hours:0,
        Minutes:0
      }
    }
  },
  methods: {
    getTotalData () {
      let year = new Date(this.user.birth).getFullYear()+100
      let month = new Date(this.user.birth).getMonth()+1
      let date = new Date(this.user.birth).getDate()
      let endDate =year+'-'+month+'-'+date
      return new Date(endDate)
    },
    openDist () {
      this.isEdit=!this.isEdit;
      if(this.isWork){
        this.isWork=false
      }
      this.isEnd=false;
    },
    addDist () {
      let time = this.distData.distYear+' '+this.distData.distTime
      let data = timeMath(new Date(time),this.date);
      this.distData.Days=data.Days
      this.distData.Hours=data.Hours
      this.distData.Minutes=data.Minutes
      this.isWork=true
      this.isEdit=false
      this.isEnd=true
    }
  },
  mounted: function () {
    let birthTime = new Date(this.user.birth).getTime()
    let totalTime = this.getTotalData().getTime()
    let curTime = this.date.getTime()
    this.wastePer = Math.ceil(100*(curTime-birthTime)/(totalTime-birthTime))
  },
  computed: {
    surData () {
      return timeMath(this.date,new Date(this.user.birth));
    },
    lastData () {
      return timeMath(this.getTotalData(),this.date);
    }
  }
}
</script>

<style scoped>
.hidden{
  opacity: 0;
  visibility: hidden;
}
.dist-hidden{
  opacity: 0!important;
  width: 8vh!important;
  visibility: hidden;
}
.dist-bottom{
  opacity: 0.8!important;
  top: 12vh!important;
  visibility: visible!important;
}
.tWaste-lifeWaster{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  position: relative;
}
.tWaste-userHeader{
  position: absolute;
  right: 1vh;
  top: -4vh;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  border: 0.5em solid red;
  opacity: 0;
  transition: 1s ease-in-out;
  cursor: pointer;
}
.tWaste-userHeader:hover{
  border-color: #FFF;
}
.tWaste-userHeader p{
  background-color: #FFF;
  color: red;
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 6em;
  vertical-align: middle;
  height: 100%;
  line-height: 1.4em;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.tWaste-userHeader:hover p{
  background-color: red;
  color: #FFF;
}
.tWaste-lifeWaster:hover .tWaste-userHeader{
  opacity: 0.6;
}
.tWaste-lifeWaster-items{
  color: #FFFFFF;
  transition: 1s ease-in-out;
  opacity: 0.6;
  position: relative;
  padding-right: 0.5em;
  cursor: pointer;
  text-align: right;
}
.tWaste-lifeWaster-items:hover .tWaste-lifeWaster-title{
  background-color: red;
  color:#FFFFFF;
}
.tWaste-lifeWaster-items p{
  height: 10vh;
}
.tWaste-lastItems{
  height: 48.75vh;
}
.tWaste-wasteItems{
  height: 38.75vh;
  padding-top: 27.75vh;
}
.tWaste-lifeWaster-title{
  font-size: 2em;
  color: red;
  padding: 0.2em;
  transition: 1s ease-in-out;
}
.tWaste-lwi-txt,.tWaste-lifeWaster-title{
  opacity: 0;
  transition: 1s ease-in-out;
}
.tWaste-lifeWaster:hover .tWaste-lwi-txt,.tWaste-lifeWaster:hover .tWaste-lifeWaster-title{
  opacity: 1;
}
.tWaste-splitLine{
  height: 0.5vh;
  width: 2%;
  background-color: red;
  position: relative;
  visibility: hidden;
  margin: 1vh 0;
  opacity: 0.6;
  transition: 1s ease-in-out;
}
.tWaste-shortLine{
  position: fixed;
  width: 3vh;
  height: 0.5vh;
  top:49.7vh;
  right: 0;
  transition: 1s ease-in-out;
  opacity: 0.6;
  background-color: #FFFFFF;
}
.tWaste-lifeWaster:hover .tWaste-splitLine{
  width: 100%;
  visibility: visible;
}
.tWaste-lifeWaster:hover .tWaste-shortLine{
  width: 0;
}
.tWaste-lifeLine{
  position: fixed;
  width: 0.25em;
  right: 0em;
}
.tWaste-lineUp{
  top: 0;
  height: 50%;
  background-color: #FFF;
}
.tWaste-lineDown{
  bottom: 0;
  height: 50%;
  background-color: #FFF;
}
.tWaste-countUp{
  top: 0;
  background-color: red;
  height: 50%;
}
.tWaste-countDown{
  bottom: 0;
  background-color: red;
  height: 50%;
}
.tWaste-distance{
  position: absolute;
  bottom: 2em;
  right: 0;
  height: 10em;
  width: 100%;
  color: #FFFFFF;
  text-align: right;
  cursor: pointer;
  transition: 1s ease-in-out;
  opacity: 0;
}
.tWaste-addDist{
  cursor: pointer;
  color: red;
  text-align: center;
  padding:0.2em;
  font-size: 1.6em;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  position: absolute;
  top: -3vh;
  right: 3.5vw;
  border:2px solid red;
  background-color: #FFFFFF;
  animation: distWave 1s ease-in-out infinite;
}

@keyframes distWave {
  0%{
    opacity: 0.6;
    box-shadow: 0 0 rgba(255, 0, 0, 0.9);
    transform: scale(1);
  }
  50%{
    transform: scale(1.2);
  }
  100%{
    box-shadow: 0 0 0 1vh rgba(255, 255, 255, 0.3);
    opacity: 0.8;
    transform: scale(1);
  }
}
.tWaste-lifeWaster-disTitle{
  position: absolute;
  color: red;
  right: 0.25em;
  bottom: 3em;
  padding: 0.2em;
  transition: 1s ease-in-out;
  font-size: 2em;
  white-space:pre;
}
.tWaste-lifeWaster-disCont{
  margin-right: 4em;
  overflow: hidden;
  border-bottom: 0.5vh solid red;
  text-overflow: ellipsis;
}
.tWaste-lifeWaster-disTime{
  padding-right: 4em;
}
.tWaste-distance:hover .tWaste-lifeWaster-disTitle{
  background-color: red;
  color: #FFFFFF;
}
.tWaste-lifeWaster:hover .tWaste-distance{
  opacity: 0.6;
}
.tWaste-distInput{
  position: fixed;
  text-align: right;
  color: red;
  bottom: 0;
  right: 1vh;
  width: 12vw;
  opacity: 0;
  transition: 1s ease-in-out;
  background-color: transparent;
}
.tWaste-lifeWaster:hover .tWaste-distInput{
  opacity: 0.8!important;
}
.tWaste-distInput input{
  border: none;
  background-color: transparent;
  color: #FFF;
  width: 100%;
  color: red;
  border-bottom: 0.5vh solid red;
  background-color: #FFFFFF;
  padding: 0.5vh 6vh;
  opacity: 0.95;
}
</style>
