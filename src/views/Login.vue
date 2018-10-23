<template>
  <div class="tWaster-loginWrap" @keyup.enter="login">
    <h1>Login</h1>
    <input type="text" placeholder="这里输入名字，BTW，下一个是生辰">
    <input type="date" placeholder="这里输入生辰，BTW，下一个也是必填啊">
    <input type="password" placeholder="请输入密码，BTW，下一个阔以跳过">
    <input type="date" placeholder="请输入约定日期，BTW，这个填了就要填下一个了">
    <input type="text" placeholder="请输入约定事项，终于，Hello！World！">
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      user:{
        userName:'',
        birth:'',
        password:'',
        content:'',
        disTime:''
      }
    }
  },
  methods: {
    login () {
      console.log('login');
    }
  }
}
</script>

<style scoped>

</style>
