<template>
    <div style="height: 50rem">
        <h1>主题色配置</h1>
        <div class="tWaster-menu-form">
          <div>
            <p class="tWaster-menu-formRow" :class="{'tWaster-menu-active':key===curColor}"
               v-for="(val,key,index) in formMap" :key="index"
               @click="changeCruColor(key)">
              <label>{{val.label}}:</label><span>{{val.value.hex8}}</span>
            </p>
          </div>
          <div>
            <sketch-picker @input="updateValue" v-model="editColors" />
            <div class="tWaster-menu-btnRow">
              <button @click="$emit('on-change',formMap)">确认</button>
              <button @click="$emit('close')">关闭</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import forMatJson from './formMap.json'
    import {Sketch} from 'vue-color'
    export default {
        name: "TW_Menu",
        components:{'sketch-picker': Sketch},
        data () {
          return {
            curColor:'--headBg',
            editColors:{
              "hsl": {
                "h": 150,
                "s": 0,
                "l": 0,
                "a": 0
              },
              "hex": "#000000",
              "hex8": "#00000000",
              "rgba": {
                "r": 0,
                "g": 0,
                "b": 0,
                "a": 0
              },
              "hsv": {
                "h": 150,
                "s": 0,
                "v": 0,
                "a": 0
              },
              "oldHue": 150,
              "source": "hex",
              "a": 0
            },
            formMap:null
          }
        },
        created () {
          this.getLocalColor()
        },
        methods:{
          updateValue (v) {
            this.formMap[this.curColor].value = v;
          },
          changeCruColor(code){
            this.curColor = code;
            this.editColors = this.formMap[code].value
          },
          getLocalColor () {
            let THAT = this;
            try {
              let cacheObj = JSON.parse(localStorage.getItem('tw_color'));
              if(cacheObj){
                THAT.formMap =  cacheObj;
              }else {
                throw error()
              }
            }catch (err) {
              THAT.formMap = forMatJson;
              localStorage.setItem('tw_color',JSON.stringify(THAT.formMap))
            }
          }
        }
    }
</script>

<style scoped>
  .tWaster-menu-form{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: start;
  }
  .tWaster-menu-formRow{
    margin: 1rem 0;
    border: 1px solid #000;
    padding: 4px;
    cursor: pointer;
  }
  .tWaster-menu-active{
    background: beige;
  }
  .tWaster-menu-btnRow{
    text-align: center;
    margin: 1rem 0;
  }
  .tWaster-menu-btnRow button{
    cursor: pointer;
  }
</style>
