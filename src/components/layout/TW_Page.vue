<template>
  <div class="tWaste-page"
       :style="[themeObj,bgObj]">
    <TWHeader @setClick="menuShow=true"/>
    <TWView/>
    <TWFooter/>
    <Vodal :show="menuShow" animation="slideDown" @hide="menuShow = false" :height="520" :width="580">
      <TWMenu @on-change="updateThemeMap" @close="menuShow = false"/>
    </Vodal>
  </div>
</template>

<script>
  import './../../assets/style/reset.css'
  import './style/page.css'
  import "vodal/common.css";
  import "vodal/slide-down.css";
  import TWHeader from './TW_Header'
  import TWFooter from './TW_Footer'
  import TWView from './TW_View'
  import TWMenu from './TW_Menu'
  import Vodal from 'vodal';
  const imageMap = {
    7: '0007.PNG',
    10:'0010.png',
    15:'0015.png',
    17:'0017.PNG',
    21:'0021.png'
  };
  export default {
    name: "TW_Page",
    components: {
      TWHeader, TWFooter, TWView,TWMenu,
      Vodal
    },
    created () {
      this.updateTheme();
      this.updateBackGround();
    },
    mounted () {
      setInterval(this.updateBackGround,2000)
    },
    data() {
      return {
        menuShow:false,
        themeObj: null,
        bgObj:null
      }
    },
    methods: {
      //  更新主题色本地缓存
      updateThemeMap(obj) {
        localStorage.setItem('tw_color',JSON.stringify(obj));
        this.updateTheme();
      },
      //  更新主题色
      updateTheme () {
        let THAT = this;
        try {
          let formMap =  JSON.parse(localStorage.getItem('tw_color'));
          if(formMap){
            let temp_theme = {};
            for(let key in formMap) {
              temp_theme[key] = formMap[key].value.hex8
              //  使用rgba制式
              // let rgba = formMap[key].value.rgba;
              // temp_theme[key] = `rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`
            }
            THAT.themeObj = temp_theme;
          }else {
            throw error()
          }

        }catch (e) {
          THAT.themeObj = {
            "--headBg": "#00000000",
            "--headTxt": "#FFFFFFFF",
            "--headHL": "#D0021BFF",
            "--headAnm": "#D0021BFF",
            "--footBg": "#757B785E",
            "--footTxt": "#FFFFFFFF",
            "--footSub": "#1064E1FF",
            "--viewBg": "#00000000",
            "--viewTxt": "#FFFFFFFF",
            "--viewHL": "#D0021BFF",
            "--viewAnm": "#D0021BDB"
          }
        }
        THAT.menuShow = false;
      },
      //  更新背景图-7，10，15，17，21时为特定图片
      updateBackGround () {
        const baseUrl = 'static/ImgLoop/';
        let h = new Date().getHours();
        let imgName = (!!imageMap[h])?imageMap[h]:'geease.jpg';
        this.bgObj ={
          background:`url(${baseUrl}${imgName}) no-repeat center`,
          'background-size': 'cover'
        }
      }
    }
  }
</script>

<style scoped>

</style>
