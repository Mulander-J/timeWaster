<template>
  <div class="tWaste-calcTime">
    <div class="tWaste-calcTime-circles" :class="{'tWaste-switch':!isSwitch}">
      <CircleProgress :type="cirTypeDY" :theme="cirTheme" :dur="cirDur" :root="'wasteDY'" :num="wasteObj.dayOfYear" :max="(wasteObj.D_Y)"></CircleProgress>
      <CircleProgress :type="cirTypeDM" :theme="cirTheme" :dur="cirDur" :root="'wasteDM'" :num="wasteObj.day" :max="(wasteObj.D_M)"></CircleProgress>
      <CircleProgress :type="cirTypeDW" :theme="cirTheme" :dur="cirDur" :root="'wasteDW'" :num="wasteObj.week" :max="(wasteObj.D_W)"></CircleProgress>
      <p class="tWaste-timeLine-switch" @click="turnSwitch" style="left: 2em">
        <span class="tWaste-timeLine-dot"></span>
        <span class="tWaste-timeLine-txt">Switch<br/>点击</span>
      </p>
    </div>
    <div class="tWaste-calcTime-timeLine" :class="{'tWaste-switch':isSwitch}">
      <span class="tWaste-timeLine-line"></span>
      <p v-for="(item,index) in line" :key="'timeLine'+index" class="tWaste-timeLine-items">
        <span class="tWaste-timeLine-dot"></span>
        <span class="tWaste-timeLine-txt">{{item.data}}<br/>{{item.name}}</span>
      </p>
      <p class="tWaste-timeLine-switch" @click="turnSwitch">
        <span class="tWaste-timeLine-dot"></span>
        <span class="tWaste-timeLine-txt">Switch<br/>点击</span>
      </p>
    </div>
  </div>
</template>

<script>
  import {timeWaste} from '@/libs/utils.js'
  import CircleProgress from '@/components/public/CircleProgress'

  export default {
    name: "TimeRatio",
    props:{
      date:{
        default:()=>{
          new Date()
        }
      }
    },
    components: {
      CircleProgress
    },
    data () {
      return {
        isSwitch:false,
        wasteObj:timeWaste(this.date),
        cirDur:5,
        cirTypeDY:{
          _ch:'年',
          _en:timeWaste(this.date).year
        },
        cirTypeDM:{
          _ch:'月',
          _en:timeWaste(this.date).month_en
        },
        cirTypeDW:{
          _ch:'周',
          _en:timeWaste(this.date).week_en
        },
        cirTheme:{
          colTxt:'var(--viewTxt)',
          colBg:'var(--viewTxt)',
          colOutCir:'var(--viewAnm)',
          colInCir: 'var(--viewHL)'
        },
        line:[
          {
            name:'年',
            data:timeWaste(this.date).year
          }, {
            name:'月',
            data:timeWaste(this.date).month
          }, {
            name:'日',
            data:timeWaste(this.date).day
          }, {
            name:'周',
            data:timeWaste(this.date).week_en
          },
        ]
      }
    },
    methods: {
      turnSwitch () {
        this.isSwitch = !this.isSwitch
      }
    }
  }
</script>

<style scoped>
  .tWaste-calcTime{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .tWaste-calcTime-circles{
    position: relative;
    transition: 2s all ease-in-out;
  }
  .tWaste-switch{
    left: -30vh !important;
  }
  .tWaste-calcTime-timeLine{
    position: absolute;
    left: 1rem;
    transition: 1s ease-in-out;
  }
  .tWaste-timeLine-items,.tWaste-timeLine-switch{
    position: relative;
    cursor: pointer;
    margin: 1em 0;
  }

  .tWaste-timeLine-items:hover .tWaste-timeLine-dot,.tWaste-timeLine-switch:hover .tWaste-timeLine-dot{
    background-color: var(--viewTxt);
    border-color: var(--viewHL);
    animation:dotWave 1s ease-in-out infinite;
  }
  .tWaste-timeLine-items:hover .tWaste-timeLine-txt{
    color: var(--viewHL);
    opacity: 1;
    transform: scale(1.8) translateX(1em);
  }
  .tWaste-timeLine-switch:hover .tWaste-timeLine-txt{
    opacity: 1;
  }
  .tWaste-timeLine-dot{
    position: absolute;
    width: 1em;
    height: 1em;
    top: 50%;
    left: 0;
    background-color: var(--viewHL);
    transition: 0.8s ease-in-out;
    transform: translateY(-50%);
    border: 0.2em solid var(--viewTxt);
    border-radius: 50%;
    opacity: 0.8;
  }
  .tWaste-timeLine-switch .tWaste-timeLine-dot{
    background-color: deepskyblue;
    border: 0.2em solid var(--viewTxt);
  }
  @keyframes dotWave {
    0%{
      opacity: 0.6;
      box-shadow: 0 0 var(--viewHL);
    }
    100%{
      box-shadow: 0 0 0 1vh rgba(255, 255, 255, 0.3);
      opacity: 0.8;
    }
  }
  .tWaste-timeLine-line{
    position: absolute;
    opacity: 0.6;
    width: 0.2em;
    left: 0.4em;
    top: -25%;
    height: 150%;
    background-color: var(--viewTxt);
  }
  .tWaste-timeLine-txt{
    position: relative;
    display: block;
    left: 2em;
    opacity: 0.6;
    transition: 0.5s ease-in-out;
  }
</style>
