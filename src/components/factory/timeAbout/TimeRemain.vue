<template>
  <div class="tWaste-lifeWaster">
    <div class="tWaste-userHeader"><p>{{user.userName.slice(0, 1)}}</p></div>
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
  </div>
</template>

<script>
  import {timeMath} from "@/libs/utils.js";

  export default {
    name: "TimeRemain",
    props: ['date','user'],
    data () {
      return {
        wastePer:0
      }
    },
    methods: {
      getTotalData () {
        let year = new Date(this.user.birth).getFullYear()+100
        let month = new Date(this.user.birth).getMonth()+1
        let date = new Date(this.user.birth).getDate()
        let endDate =year+'-'+month+'-'+date
        return new Date(endDate)
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
  .tWaste-lifeWaster{
    height: 100%;
    position: relative;
  }
  .tWaste-userHeader{
    position: absolute;
    right: 1rem;
    top: -4rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: 0.5rem solid var(--viewHL);
    opacity: 0;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  .tWaste-userHeader:hover{
    border-color: var(--viewTxt);
  }
  .tWaste-userHeader p{
    background-color: var(--viewTxt);
    color: var(--viewHL);
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 6rem;
    vertical-align: middle;
    height: 100%;
    line-height: 8rem;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
  }
  .tWaste-userHeader:hover p{
    background-color: var(--viewHL);
    color: var(--viewTxt);
  }
  .tWaste-lifeWaster:hover .tWaste-userHeader{
    opacity: 0.6;
  }

  .tWaste-lifeWaster-items{
    color: var(--viewTxt);
    transition: .2s ease-in-out;
    opacity: 0.6;
    position: relative;
    padding-right: 0.5rem;
    cursor: pointer;
    text-align: right;
    height: 50%;
  }
  .tWaste-lifeWaster-items:hover .tWaste-lifeWaster-title{
    background-color: var(--viewHL);
    color:var(--viewTxt);
  }
  .tWaste-lifeWaster-items p{
    height: max-content;
    width: 100%;
    text-align: center;
    position: absolute;
    right: 0;
    font-size: 1.6rem;
  }
  .tWaste-wasteItems p{
    bottom: 0;
  }
  .tWaste-lastItems p{
    top: 0;
  }
  .tWaste-lifeWaster-title{
    font-size: 2.4rem;
    color: var(--viewHL);
    padding: 0.4rem 0.8rem;
    transition: .2s ease-in-out;
  }
  .tWaste-lwi-txt,.tWaste-lifeWaster-title{
    opacity: 0;
    transition: .2s ease-in-out;
  }
  .tWaste-lifeWaster:hover .tWaste-lwi-txt,.tWaste-lifeWaster:hover .tWaste-lifeWaster-title{
    opacity: 1;
  }
  .tWaste-splitLine{
    height: 0.2rem;
    width: 2%;
    background-color: var(--viewHL);
    position: relative;
    visibility: hidden;
    margin: 1rem 0;
    opacity: 0.6;
    transition: .2s ease-in-out;
  }
  .tWaste-lifeWaster:hover .tWaste-splitLine{
    width: 100%;
    visibility: visible;
  }
  .tWaste-lifeLine{
    position: fixed;
    width: 0.25em;
    right: 0em;
  }
  .tWaste-lineUp{
    top: 0;
    height: 50%;
    background-color: var(--viewTxt);
  }
  .tWaste-lineDown{
    bottom: 0;
    height: 50%;
    background-color: var(--viewTxt);
  }
  .tWaste-countUp{
    top: 0;
    background-color: var(--viewHL);
    height: 50%;
  }
  .tWaste-countDown{
    bottom: 0;
    background-color: var(--viewHL);
    height: 50%;
  }

</style>
