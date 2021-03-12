<template>
    <div class="tw-container">
        <h1>index</h1>
        <div>
            <div class="bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500">
                main
                <br>
                {{state.now}}
                {{state.h}}
                {{state.min}}
                {{state.s}}
                {{state.mon}}
                {{state.y}}
                {{state.d}}
                {{state.DInW}}
                {{renderState.dateStr}}
            </div>
            <gitPut /> 
            <button @click="$router.push({name:'statistics'})">
                Go
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, computed} from "vue"
import gitPut from './../components/gitPut.vue'
import hook from './../common/hook'
import TwDate from './../util/time'

//  use-watchEffect
const state = reactive({
    //  timer-trigger
    now: Date.now(),
    //  date-nums
    y: 1,
    mon: 1,
    w: 1,
    d: 1,
    h: 0,
    min: 0,
    s: 0,
    DInW: 0
})
//  use computer as filtter
const renderState = reactive({
    dateStr: computed(() =>  new TwDate(state.now).toLocaleString())
})
//  timeInterval
let timer = setInterval(() => {
    state.now = Date.now()
}, 800)
//  test hook
hook({
    afterUnmounted: () => {
        clearInterval(timer)
        timer = 0
    }
})
//  watchEffect
watchEffect(() => {
    state.y = new TwDate(state.now).getFullYear()
    state.mon = new TwDate(state.now).getMonth() + 1
    state.w = new TwDate(state.now).getDay()
    state.d = new TwDate(state.now).getDate()
    state.h = new TwDate(state.now).getHours()
    state.min = new TwDate(state.now).getMinutes()
    state.s = new TwDate(state.now).getSeconds()
    state.DInW = new TwDate(state.now).getRatioYear()
})
</script>

<style scoped>

</style>
