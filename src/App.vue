<template>
  <nav
    class="h-16 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500 transition-all duration-700 ease-linear"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="menuShow = !menuShow"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            :aria-expanded="menuShow"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="[menuShow ? 'hidden' : 'block']"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="[menuShow ? 'block' : 'hidden']"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="TimeWaster"
            />
            <img class="hidden lg:block h-8 w-auto" src="/img/logo.gif" alt="TimeWaster" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                v-for="mn in menu"
                :key="mn.name"
                :to="mn.path"
                class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                active-class="bg-gray-900 text-white"
                >{{ mn.meta.title }}</router-link
              >
            </div>
          </div>
        </div>
        <gitPut />
        <a
          class="text-black hover:text-white ml-2"
          target="_blank"
          href="https://github.com/Mulander-J/timeWaster"
        >
          <svg
            class="ml-1 fill-current"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M958.815566 364.415116c0-63.830795-21.276932-119.150818-59.575408-170.215454 12.766159-55.320023 8.510773-114.895431-12.766159-165.960067-4.255386-12.766159-12.766159-21.276932-25.532319-25.532318-17.021545-4.255386-72.341568-12.766159-187.236999 59.575409-93.6185-21.276932-191.492386-21.276932-280.855499 0C277.953751-10.058882 222.633728-1.54811 205.612183 2.707277c-12.766159 4.255386-21.276932 12.766159-25.532318 25.532318-25.532318 55.320023-29.787704 110.640045-12.766159 165.960067-38.298477 51.064636-59.575409 110.640045-59.575409 170.215454 0 229.790863 127.66159 302.132431 246.812408 327.664749-8.510773 29.787704-12.766159 55.320023-12.766159 80.852341v4.255386c-89.363113 17.021545-119.150818-17.021545-153.193908-63.830795-21.276932-29.787704-46.80925-63.830795-93.6185-72.341568-21.276932-4.255386-46.80925 8.510773-51.064636 29.787704-4.255386 21.276932 8.510773 46.80925 29.787704 51.064636 12.766159 4.255386 29.787704 21.276932 46.80925 42.553864 38.298477 51.064636 93.6185 119.150818 221.28009 102.129272V938.892273c0 25.532318 17.021545 42.553863 42.553864 42.553864s42.553863-17.021545 42.553863-42.553864v-123.406204-42.553863c0-29.787704 8.510773-55.320023 29.787704-76.596955 12.766159-12.766159 17.021545-29.787704 8.510773-42.553863-4.255386-17.021545-17.021545-25.532318-34.043091-29.787705-123.406204-17.021545-238.301635-55.320023-238.301635-255.32318 0-51.064636 17.021545-93.6185 51.064636-131.916977 12.766159-12.766159 12.766159-29.787704 8.510773-42.553864-12.766159-38.298477-12.766159-72.341568-4.255386-106.384658 21.276932 4.255386 59.575409 17.021545 110.640045 55.320022 12.766159 8.510773 25.532318 8.510773 38.298477 4.255387 89.363113-25.532318 187.236999-25.532318 276.600112 0 12.766159 4.255386 25.532318 0 34.043091-4.255387 55.320023-38.298477 93.6185-51.064636 110.640045-55.320022 8.510773 34.043091 8.510773 68.086182-4.255386 102.129272-4.255386 17.021545-4.255386 34.043091 8.510772 42.553864 34.043091 34.043091 51.064636 80.852341 51.064636 131.916976 0 200.003158-114.895431 242.557022-238.301635 255.323181-17.021545 0-29.787704 12.766159-34.043091 29.787704-4.255386 17.021545 0 34.043091 8.510773 42.553864 21.276932 21.276932 29.787704 51.064636 29.787704 80.852341V938.892273c0 25.532318 17.021545 42.553863 42.553864 42.553864s42.553863-17.021545 42.553863-42.553864v-161.704681c4.255386-29.787704 0-55.320023-12.766159-80.852341 102.129272-21.276932 246.812408-89.363113 246.812408-331.920135z"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      v-show="menuShow"
      id="mobile-menu"
      class="sm:hidden relative z-10 bg-red-500 sm:bg-green-500 md:bg-blue-500 lg:bg-pink-500 xl:bg-teal-500"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
          v-for="mn in menu"
          :key="mn.name"
          :to="mn.path"
          active-class="bg-gray-900 text-white"
          class="bg-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium duration-800 ease-in-out"
          >{{ mn.meta.title }}</router-link
        >
      </div>
    </div>
  </nav>

  <main
    class="w-full box-border border-8 border-red-300 sm:border-green-300 md:border-blue-300 lg:border-pink-300 xl:border-teal-300 transition-all duration-700 ease-linear"
  >
    <router-view />
  </main>

  <footer
    class="h-8 flex justify-center items-center bg-black text-red-500 sm:text-green-500 md:text-blue-500 lg:text-pink-500 xl:text-teal-500 text-center py-1 sm:py-2 lg:py-4 transition-all duration-700 ease-linear"
    >MIT LICENSE 2019 Mulander</footer
  >
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { routes } from './router';
  import gitPut from '$/gitPut.vue';

  const menu = [...routes];
  const menuShow = ref(false);
</script>

<style scope lang="scss">
  #app {
    height: 100vh;
    position: relative;
    main {
      min-height: calc(100vh - 6rem);
    }
  }
</style>
