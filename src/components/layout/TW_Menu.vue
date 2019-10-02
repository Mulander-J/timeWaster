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
              THAT.formMap = {
                "--headBg": {
                  "label": "页首背景",
                  "value": {
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
                  }
                },
                "--headTxt": {
                  "label": "页首文字",
                  "value": {
                    "hsl": {
                      "h": 55.36363636363631,
                      "s": 0,
                      "l": 1,
                      "a": 1
                    },
                    "hex": "#FFFFFF",
                    "hex8": "#FFFFFFFF",
                    "rgba": {
                      "r": 255,
                      "g": 255,
                      "b": 255,
                      "a": 1
                    },
                    "hsv": {
                      "h": 55.36363636363631,
                      "s": 0,
                      "v": 1,
                      "a": 1
                    },
                    "oldHue": 55.36363636363631,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--headHL": {
                  "label": "页首高亮",
                  "value": {
                    "hsl": {
                      "h": 352.71844660194176,
                      "s": 0.980952380952381,
                      "l": 0.4117647058823529,
                      "a": 1
                    },
                    "hex": "#D0021B",
                    "hex8": "#D0021BFF",
                    "rgba": {
                      "r": 208,
                      "g": 2,
                      "b": 27,
                      "a": 1
                    },
                    "hsv": {
                      "h": 352.71844660194176,
                      "s": 0.9903846153846154,
                      "v": 0.8156862745098039,
                      "a": 1
                    },
                    "oldHue": 55.36363636363635,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--headAnm": {
                  "label": "页首动效",
                  "value": {
                    "hsl": {
                      "h": 352.71844660194176,
                      "s": 0.980952380952381,
                      "l": 0.4117647058823529,
                      "a": 1
                    },
                    "hex": "#D0021B",
                    "hex8": "#D0021BFF",
                    "rgba": {
                      "r": 208,
                      "g": 2,
                      "b": 27,
                      "a": 1
                    },
                    "hsv": {
                      "h": 352.71844660194176,
                      "s": 0.9903846153846154,
                      "v": 0.8156862745098039,
                      "a": 1
                    },
                    "oldHue": 55.36363636363635,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--footBg": {
                  "label": "页脚背景",
                  "value": {
                    "hsl": {
                      "h": 150.0000000000001,
                      "s": 0.026200000000000046,
                      "l": 0.47159999999999996,
                      "a": 0.37
                    },
                    "hex": "#757B78",
                    "hex8": "#757B785E",
                    "rgba": {
                      "r": 117,
                      "g": 123,
                      "b": 120,
                      "a": 0.37
                    },
                    "hsv": {
                      "h": 150.0000000000001,
                      "s": 0.05106217111674146,
                      "v": 0.48395592,
                      "a": 0.37
                    },
                    "oldHue": 150.0000000000001,
                    "source": "rgba",
                    "a": 0.37
                  }
                },
                "--footTxt": {
                  "label": "页脚文字",
                  "value": {
                    "hsl": {
                      "h": 271.9148936170212,
                      "s": 0,
                      "l": 1,
                      "a": 1
                    },
                    "hex": "#FFFFFF",
                    "hex8": "#FFFFFFFF",
                    "rgba": {
                      "r": 255,
                      "g": 255,
                      "b": 255,
                      "a": 1
                    },
                    "hsv": {
                      "h": 271.9148936170212,
                      "s": 0,
                      "v": 1,
                      "a": 1
                    },
                    "oldHue": 271.9148936170212,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--footSub": {
                  "label": "页脚高亮",
                  "value": {
                    "hsl": {
                      "h": 215.99999999999991,
                      "s": 0.8649757553151811,
                      "l": 0.47400079999999994,
                      "a": 1
                    },
                    "hex": "#1064E1",
                    "hex8": "#1064E1FF",
                    "rgba": {
                      "r": 16,
                      "g": 100,
                      "b": 225,
                      "a": 1
                    },
                    "hsv": {
                      "h": 215.99999999999991,
                      "s": 0.9276000000000001,
                      "v": 0.884,
                      "a": 1
                    },
                    "oldHue": 215.99999999999991,
                    "source": "hsva",
                    "a": 1
                  }
                },
                "--viewBg": {
                  "label": "内容背景",
                  "value": {
                    "hsl": {
                      "h": 210,
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
                      "h": 210,
                      "s": 0,
                      "v": 0,
                      "a": 0
                    },
                    "oldHue": 210,
                    "source": "hex",
                    "a": 0
                  }
                },
                "--viewTxt": {
                  "label": "内容文字",
                  "value": {
                    "hsl": {
                      "h": 88.65168539325842,
                      "s": 0,
                      "l": 1,
                      "a": 1
                    },
                    "hex": "#FFFFFF",
                    "hex8": "#FFFFFFFF",
                    "rgba": {
                      "r": 255,
                      "g": 255,
                      "b": 255,
                      "a": 1
                    },
                    "hsv": {
                      "h": 88.65168539325842,
                      "s": 0,
                      "v": 1,
                      "a": 1
                    },
                    "oldHue": 88.65168539325842,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--viewHL": {
                  "label": "内容高亮",
                  "value": {
                    "hsl": {
                      "h": 352.71844660194176,
                      "s": 0.980952380952381,
                      "l": 0.4117647058823529,
                      "a": 1
                    },
                    "hex": "#D0021B",
                    "hex8": "#D0021BFF",
                    "rgba": {
                      "r": 208,
                      "g": 2,
                      "b": 27,
                      "a": 1
                    },
                    "hsv": {
                      "h": 352.71844660194176,
                      "s": 0.9903846153846154,
                      "v": 0.8156862745098039,
                      "a": 1
                    },
                    "oldHue": 55.36363636363635,
                    "source": "hex",
                    "a": 1
                  }
                },
                "--viewAnm": {
                  "label": "内容动效",
                  "value": {
                    "hsl": {
                      "h": 352.7184466019418,
                      "s": 0.9809,
                      "l": 0.4117,
                      "a": 0.86
                    },
                    "hex": "#D0021B",
                    "hex8": "#D0021BDB",
                    "rgba": {
                      "r": 208,
                      "g": 2,
                      "b": 27,
                      "a": 0.86
                    },
                    "hsv": {
                      "h": 352.7184466019418,
                      "s": 0.9903579181180272,
                      "v": 0.81553653,
                      "a": 0.86
                    },
                    "oldHue": 352.7184466019418,
                    "source": "rgba",
                    "a": 0.86
                  }
                }
              };
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
