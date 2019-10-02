<template>
    <section class="tWaste-views">
      <TWMain class="tWaste-box" v-if="loginState" :userInfo="twUser"/>
    </section>
</template>

<script>
    import TWMain from './TW_Main'

    export default {
        name: "TW_View",
        components:{TWMain},
        created () {
          this._cacheCheck();
        },
        data () {
          return  {
            loginState:false,  //  true-已登录|false-未登录
            twUser:{
              birth:'1996-01-01',
              userName:'God'
            }
          }
        },
        methods:{
          //  登录校验
          _cacheCheck () {
            let THAT = this;
            THAT.loginState = false;
            try{
              localStorage.setItem('tw_version',JSON.stringify(THAT.$twCof));
              let user_cache = JSON.parse(localStorage.getItem('tw_user'));
              if(user_cache&&user_cache.userName&&user_cache.birth) {
                THAT.twUser = user_cache;
                THAT.$iosRemind(`Welcome Back ${twUser.userName}`);
                THAT.loginState = true;
              }else {
                throw error()
              }
            }catch (e) {
              THAT.loginState = false;
              THAT._logUserName();
            }
          },
          _logUserName () {
            let THAT = this;
            THAT.$iosAlertView({
              title: 'Login',
              text: '用户名',
              input:true,
              placeholder:'请输入用户名',
              buttons:[
                {
                  text: '下一步',
                  bold:true,
                  onClick: function(ops){
                    if(!!ops.value){
                      THAT.twUser.userName = ops.value;
                      THAT._logBirth();
                    }else {
                      THAT._logUserName();
                    }
                  }
                }
              ]
            });
          },
          _logBirth () {
            let THAT = this;
            THAT.$iosAlertView({
              title: 'Login',
              text: '生辰',
              input:true,
              placeholder:'请输入生辰1990-01-01',
              buttons:[
                {
                  text: '提交',
                  bold:true,
                  onClick: function(ops){
                    if(!!ops.value){
                      THAT.twUser.birth = ops.value;
                      THAT.$iosAlert('完成');
                      localStorage.setItem('tw_user',JSON.stringify(THAT.twUser));
                      THAT.loginState = true;
                    }else {
                      THAT._logBirth();
                    }
                  }
                }
              ]
            });
          }
        }
    }
</script>

<style scoped>

</style>
