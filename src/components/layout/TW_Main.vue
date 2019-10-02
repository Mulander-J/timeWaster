<template>
    <div class="tWaster-main-wrap">
      <TimeRatio class="tWaster-main-ratio" :date="nowDate"/>
      <MainClock class="tWaster-main-clock" :date="nowDate" :user="userInfo"/>
      <TimeRemain class="tWaster-main-remain" :date="nowDate" :user="userInfo"/>
    </div>
</template>

<script>
    import MainClock from './../factory/timeAbout/MainClock'
    import TimeRatio from '../factory/timeAbout/TimeRatio'
    import TimeRemain from './../factory/timeAbout/TimeRemain'
    export default {
        name: "TW_Main",
        props:['userInfo'],
        components:{
          MainClock,
          TimeRatio,
          TimeRemain
        },
        data () {
          return{
            nowDate:new Date()
          }
        },
        mounted() {
          let _this = this //声明一个变量指向vue实例this,保证作用域一致
          this.timer = setInterval(function() {
            _this.nowDate = new Date();
          }, 1000)
        }
    }
</script>

<style scoped>
  .tWaster-main-wrap{
    display: flex;
  }
  .tWaster-main-ratio,.tWaster-main-remain{
    height: 100%;
    width: 20%;
  }
  .tWaster-main-clock{
    height: 100%;
    width: 60%;
  }
</style>
