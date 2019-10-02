<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-size: 100%;
    box-sizing: border-box;
  }
  body{
    display: flex;
    -webkit-transform-origin: 0px 0px 0px;
    transform-origin: 0px 0px 0px;
    overflow: hidden;
    position: relative;
  }
  #app{
    height: 100%;
    width: 100%;
    position: relative;
  }
</style>
