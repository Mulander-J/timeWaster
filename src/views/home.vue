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
            </div>
            <input v-model="keyword" class="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 ...">
            <button @click="$router.push({name:'Statistics'})">
                Go
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, computed} from "vue";
import hook from './../common/hook';

const state = reactive({
    now: Date.now(),

    y: 1,
    mon: 1,
    w: 1,
    d: 1,
    h: 0,
    min: 0,
    s: 0,

    DInY: 1,
    DInM: 1,
    DInW: computed(() => state.w / 7 ),
    SInD: computed(() => {
        let dayTotal = 24*3600*1000
    } ),
})

const keyword = ref('2021')

watchEffect(() => {
    state.y = new Date(state.now).getFullYear()
    state.mon = new Date(state.now).getMonth() + 1
    state.w = new Date(state.now).getDay()
    state.d = new Date(state.now).getDate()
    state.h = new Date(state.now).getHours()
    state.min = new Date(state.now).getMinutes()
    state.s = new Date(state.now).getSeconds()
})

let timer = setInterval(() => {
    state.now = Date.now()
}, 800)

hook({
    afterUnmounted: () => {
        clearInterval(timer)
        timer = 0
    }
})
</script>

<style scoped>

</style>
