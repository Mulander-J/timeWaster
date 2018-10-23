<template>
  <div :id="root" class="tWaste-circle-box">
    <div class="tWaste-circle-cover"></div>
    <div class="tWaste-circle-clip">
      <div class="tWaste-circle-left"></div>
      <div class="tWaste-circle-right width-none"></div>
    </div>
    <p class="tWaste-circle-num tWaste-circle-numUp">{{numbers}}</p>
    <p class="tWaste-circle-num tWaste-circle-numDown">{{max}}%</p>
    <div class="tWaste-circle-txt">
      <p>{{type._en}}</p>
      <p>{{type._ch}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CircleProgress",
  props:['type','theme','root','num','max','dur'],
  data () {
    return {
      rotate:0,
      numbers:0,
      countTo:setInterval(() => {
        this.numbers ++;
      },this.dur?this.dur:5),
      loop:setInterval(() => {
        this.rotate++;
        this.left.style.transform = 'rotate('+ 3.6*this.rotate + 'deg)';
      },this.dur?this.dur*2:10)
    }
  },
  mounted: function () {
    this.box.style.setProperty("--colTxt",this.theme.colTxt);
    this.box.style.setProperty("--colBg",this.theme.colBg);
    this.box.style.setProperty("--colOutCir",this.theme.colOutCir);
    this.box.style.setProperty("--colInCir",this.theme.colInCir);
  },
  computed: {
    stop () {
      return Math.ceil(this.max)
    },
    box () {
      return document.querySelector('#'+this.root)
    },
    clip () {
      return document.querySelector('#'+this.root+' .tWaste-circle-clip')
    },
    left () {
      return document.querySelector('#'+this.root+' .tWaste-circle-left')
    },
    right () {
      return document.querySelector('#'+this.root+' .tWaste-circle-right')
    },
    numBox () {
      return document.querySelector('#'+this.root+' .tWaste-circle-num')
    }
  },
  watch: {
    rotate (oldVal) {
        if(oldVal >= 100){
          this.right.classList.remove('width-none');
          this.clip.classList.remove('auto');
        } else if(oldVal > 50){
          this.right.classList.remove('width-none');
          this.clip.classList.add('auto');
        }
        if(oldVal==this.stop){
          clearInterval(this.loop);
        }
    },
    numbers (oldVal) {
      if(oldVal>=this.num){
        clearInterval(this.countTo);
      }
    }
  }
}
</script>

<style scoped>
.tWaste-circle-box{
  width: var(--r);
  height: var(--r);
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  background-color:transparent;
  margin:1vh 0;
  --colBg:#FFF;
  --colTxt:#000;
  --colOutCir: #f7b3b3;
  --colInCir: red;
  --r:100px;
  --w:50px;
  --bor:10px;
  --rb:80px;
}
.tWaste-circle-cover{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--colBg);
  opacity: 0.4;
  border-radius: 50%;
}
.tWaste-circle-num{
  background: transparent;
  position: absolute;
  width: var(--rb);
  height: var(--rb);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  color: var(--colTxt);
  line-height: var(--rb);
  text-align: center;
  transition: 0.2s ease-in-out;
  font-size: 1.5em;
}
.tWaste-circle-numDown{
  transform: translate(-50%, -50%) rotateY(90deg);
}
.tWaste-circle-box:hover .tWaste-circle-numUp{
  transform: translate(-50%, -50%) rotateY(-90deg);
}
.tWaste-circle-box:hover .tWaste-circle-numDown{
  transform: translate(-50%, -50%) rotateY(0deg);
}
.tWaste-circle-clip{
  width: var(--r);
  height: var(--r);
  position: absolute;
  border: var(--bor) solid var(--colOutCir);
  border-radius: 50%;
  opacity: 0.6;
  clip: rect(0, var(--r), var(--r), var(--w));
}
.tWaste-circle-left{
  width: var(--r);
  height: var(--r);
  position: absolute;
  border: var(--bor) solid var(--colInCir);
  border-radius: 50%;
  clip: rect(0 ,var(--w) ,var(--r) ,0);
  top: calc(-1*var(--bor));
  left: calc(-1*var(--bor));
}
.tWaste-circle-right{
  width: var(--r);
  height: var(--r);
  position: absolute;
  border: var(--bor) solid var(--colInCir);
  border-radius: 50%;
  clip: rect(0, var(--r), var(--r) ,var(--w));
  top: calc(-1*var(--bor));
  left: calc(-1*var(--bor));
}
.tWaste-circle-txt{
  position: absolute;
  color: var(--colBg);
  width: 0%;
  height: 0%;
  top: 0;
  right: 0;
}
.width-none{
  width: 0;
}
.auto{
  clip: auto;
}
</style>
