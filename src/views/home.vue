<template>
  <div class="h-full flex justify-center items-center bg-gray-200">
    <section class="p-4">
      <div>
        <div>
          {{ state.now }}
        </div>
        <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
          <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> -->
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ state.localStr }}</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ state2nd.weekMix }}
            </span>
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {{ state2nd.seasonMix }}
            </span>
          </div>
          <div class="my-10">
            <dl class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >Year</div
                  >
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ state2nd.DY }}</p
                  >
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500"> {{ state2nd.R_DY.toFixed(2) }}%</dd>
              </div>
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >Month</div
                  >
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ state.twDate.getDate() }}</p
                  >
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500"> {{ state2nd.R_DM.toFixed(2) }}%</dd>
              </div>
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >Week</div
                  >
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ state.twDate.getDay() }}</p
                  >
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500"> {{ state2nd.R_DW.toFixed(2) }}%</dd>
              </div>
              <div class="relative">
                <dt>
                  <div
                    class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    >Day</div
                  >
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {{ state.twDate.getHours() }}</p
                  >
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500"> {{ state2nd.R_DD.toFixed(2) }}%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <gitPut class="my-4" />
    </section>
  </div>
</template>

<script setup lang="ts">
  import { reactive, watchEffect, computed } from 'vue';
  import gitPut from '$/gitPut.vue';
  import hook from '@/common/hook';
  import TwDate from '@/util/time';

  //  use-watchEffect
  const state = reactive({
    //  timer-trigger
    now: Date.now(),
    localStr: new Date().toLocaleString(),
    //  tw-time
    twDate: computed(() => new TwDate(state.now)),
  });
  // use computer as filtter
  const state2nd = reactive({
    //  str-label
    weekMix: computed(() => state.twDate.getWeekEn() + '|' + state.twDate.getWeekZh()),
    seasonMix: computed(() => state.twDate.getSeasonEn() + '|' + state.twDate.getSeasonZh()),
    //  ratio
    DY: computed(() => Math.floor(state.twDate.getDayInYear())),
    R_DY: computed(() => 100 * state.twDate.getRatioYear()),
    R_DM: computed(() => 100 * state.twDate.getRatioMonth()),
    R_DW: computed(() => 100 * state.twDate.getRatioWeek()),
    R_DD: computed(() => 100 * state.twDate.getRatioDay()),
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

<style scoped></style>
