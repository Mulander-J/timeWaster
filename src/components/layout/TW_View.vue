<template>
    <section class="tWaste-views">
      <TWMain class="tWaste-box" v-if="loginState" :userInfo="twUser"/>
      <div class="tWaste-empty"></div>
    </section>
</template>

<script>
    import TWMain from './TW_Main'
    import Swal from 'sweetalert2'
    export default {
        name: "TW_View",
        components:{TWMain,Swal},
        mounted () {
          this._cacheCheck();
        },
        data () {
          return  {
            loginState:false,
            twUser:{
              birth:'1996-01-01',
              userName:'God'
            }
          }
        },
        methods:{
          _cacheCheck () {
            let THAT = this;
            THAT.loginState = false;
            try{
              localStorage.setItem('tw_version',JSON.stringify(THAT.$twCof));
              let user_cache = JSON.parse(localStorage.getItem('tw_user'));
              if(user_cache&&user_cache.userName&&user_cache.birth) {
                THAT.twUser = user_cache;
                Swal.fire({
                  title: `Welcome Back \n ${user_cache.userName}`,
                  width: 600,
                  padding: '3em',
                  background: '#fff',
                  backdrop: `
                    rgba(0,0,123,0.4)
                    url("static/image/nyan-cat.gif")
                    center left
                    no-repeat
                  `
                }).then((result) => {
                  THAT.loginState = true;
                });
              }else {
                throw error()
              }
            }catch (e) {
              THAT.loginState = false;
              THAT._logUser();
            }
          },
          _logUser () {
            let THAT = this;
            Swal.mixin({
              input: 'text',
              confirmButtonText: 'Next &rarr;',
              showCancelButton: true,
              progressSteps: ['1', '2'],
              background: '#fff',
              backdrop: `
                    rgba(0,0,123,0.4)
                    url("static/image/nyan-cat.gif")
                    center left
                    no-repeat
                  `
            }).queue([
              {
                title: 'UserName',
                text: 'Please input username'
              },
              {
                title: 'Birth',
                text: 'Please input birdth [YYYY-MM-DD]'
              }
            ]).then((result) => {
              if (result.value&&result.value[0]&&result.value[1]) {
                try{
                  let reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
                  let regExp = new RegExp(reg);
                  if(!regExp.test(result.value[1])){
                    alert("Wrong date format:YYYY-MM-DD");
                    throw error()
                  }
                  Swal.fire({
                    title: 'All done!',
                    html:
                      'Your Info: <pre><code>' +
                      JSON.stringify(result.value) +
                      '</code></pre>',
                    confirmButtonText: 'Waste!'
                  }).then(res=>{
                    THAT.twUser.userName = result.value[0];
                    THAT.twUser.birth = new Date(result.value[1]).toDateString();
                    localStorage.setItem('tw_user',JSON.stringify(THAT.twUser));
                    THAT.loginState = true;
                  })
                }catch (e) {
                  THAT._logUser();
                }
              }else {
                THAT._logUser();
              }
            })
          }
        }
    }
</script>

<style scoped>

</style>
