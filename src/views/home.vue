<template>
  <section class="home-wrapper relative w-full p-4 flex justify-center items-center bg-gray-200">
    <span
      class="absolute bar-y bar-r"
      :style="`background:linear-gradient(to bottom, #FBD38D, #e5e7eb ${state.R_DY}%, rgba(229, 231, 235, 0.2));`"
    ></span>
    <span
      class="absolute bar-x bar-b"
      :style="`background:linear-gradient(to left, #FBD38D, #e5e7eb ${state.R_DW}% ,rgba(229, 231, 235, 0.2));`"
    ></span>
    <span
      class="absolute bar-y bar-l"
      :style="`background:linear-gradient(to top, #FBD38D, #e5e7eb ${state.R_DM.toFixed(
        2
      )}%, rgba(229, 231, 235, 0.2));`"
    ></span>
    <span
      class="absolute bar-x bar-t"
      :style="`background:linear-gradient(to right, #FBD38D, #e5e7eb ${state.R_DD.toFixed(
        2
      )}%, #FBD38D);`"
    ></span>
    <div class="bg-white w-8/12 rounded shadow-lg">
      <img
        class="home-img w-full bg-gradient-to-r from-teal-400 to-blue-500 object-cover object-center"
        :src="state.imgUrl"
        alt="unsplash"
        title="unsplash"
      />
      <div class="divide-y divide-gray-200">
        <div class="text-center">
          <div class="font-bold text-xl my-4">{{ state.localStr }}</div>
          <div class="pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ state.weekMix }}
            </span>
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ state.seasonMix }}
            </span>
          </div>
        </div>
        <dl class="pt-4 m-4 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="relative my-4">
            <dt>
              <div
                class="absolute flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white"
                >Year</div
              >
              <p class="ml-20 text-lg leading-6 font-medium text-gray-900"> {{ state.DY }} Day</p>
            </dt>
            <dd class="mt-2 ml-20 text-base text-gray-500"> {{ state.R_DY.toFixed(2) }}%</dd>
          </div>
          <div class="relative my-4">
            <dt>
              <div
                class="absolute flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white"
                >Month</div
              >
              <p class="ml-20 text-lg leading-6 font-medium text-gray-900">
                {{ state.twDate.getDate() }} Day</p
              >
            </dt>
            <dd class="mt-2 ml-20 text-base text-gray-500"> {{ state.R_DM.toFixed(2) }}%</dd>
          </div>
          <div class="relative my-4">
            <dt>
              <div
                class="absolute flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white"
                >Week</div
              >
              <p class="ml-20 text-lg leading-6 font-medium text-gray-900">
                {{ state.twDate.getDay() || 7 }} Day</p
              >
            </dt>
            <dd class="mt-2 ml-20 text-base text-gray-500"> {{ state.R_DW.toFixed(2) }}%</dd>
          </div>
          <div class="relative my-4">
            <dt>
              <div
                class="absolute flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white"
                >Day</div
              >
              <p class="ml-20 text-lg leading-6 font-medium text-gray-900">
                {{ state.twDate.getHours() }} Hour</p
              >
            </dt>
            <dd class="mt-2 ml-20 text-base text-gray-500"> {{ state.R_DD.toFixed(2) }}%</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { reactive, watchEffect, computed } from 'vue';
  import hook from '@/common/hook';
  import TwDate from '@/util/time';

  // const bingUrl = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
  const api = 'https://unsplash.it';
  const randomId = Math.random() * 10;
  const width = 1920;
  const height = 1080;
  let url = `${api}/${width}/${height}?random=${parseInt(randomId.toString(), 10)}`;

  //  use-reactive
  const state = reactive({
    //  backgroundImg
    imgUrl: url,
    //  timer-trigger
    now: Date.now(),
    localStr: new Date().toLocaleString(),
    //  tw-time
    twDate: computed(() => new TwDate(state.now)),
    //  ratio
    DY: computed(() => Math.floor(state.twDate.getDayInYear())),
    R_DY: computed(() => 100 * state.twDate.getRatioYear()),
    R_DM: computed(() => 100 * state.twDate.getRatioMonth()),
    R_DW: computed(() => 100 * state.twDate.getRatioWeek()),
    R_DD: computed(() => 100 * state.twDate.getRatioDay()),
    /*use computer as filtter*/
    //  str-label
    weekMix: computed(() => state.twDate.getWeekEn() + '|' + state.twDate.getWeekZh()),
    seasonMix: computed(() => state.twDate.getSeasonEn() + '|' + state.twDate.getSeasonZh()),
  });

  //  watchEffect
  watchEffect(() => {
    state.localStr = new TwDate(state.now).toLocaleString();
  });
  //  timeInterval
  let timer = setInterval(() => {
    state.now = Date.now();
  }, 800);
  //  test hook
  hook({
    afterUnmounted: () => {
      clearInterval(timer);
      timer = 0;
    },
  });
</script>

<style scoped lang="scss">
  .home-wrapper {
    min-height: calc(100vh - 7rem);
    .bar-x {
      width: 100%;
      height: 2rem;
      left: 0;
      background: transparent;
    }
    .bar-y {
      height: 100%;
      width: 2rem;
      top: 0;
      background: transparent;
    }
    .bar-r {
      right: 0;
    }
    .bar-l {
      left: 0;
    }
    .bar-t {
      top: 0;
    }
    .bar-b {
      bottom: 0;
    }
    .home-img {
      height: calc(100vh - 40rem);
    }
  }
</style>
