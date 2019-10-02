<template>
  <header class="tWaste-header">
      <span class="tWaste-header-logo icon-logo">
       <i v-for="(item,index) in 51" v-if="item!==33"
          :class="'path'+(index+1)" :key="item+'_logo_'+index"></i>
      </span>
    <span class="icon-logo-version">
         <a class="tWaste-header-btn" @click="$emit('setClick')"
            href="javascript:void(0);">Setting<i class="icon-settings"></i></a>
         V{{$twCof.version}}
         <a class="tWaste-header-btn"
            :href="$twCof.GitUrl" target="_blank"><i class="icon-github"></i>GitHub</a>
       </span>
  </header>
</template>

<script>
    export default {
        name: "TW_Header"
    }
</script>

<style scoped>
  @import "../../../static/fonts/icomoon.css";
</style>
