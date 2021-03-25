<template>
  <div class="m-4">
    <div class="absolute bottom-2/12 inset-x-0 text-center">
      <span class="relative inline-flex rounded-md shadow-sm">
        <button
          @click="freshList"
          class="animate-bounce bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:outline-none"
        >
          Refresh
        </button>
        <span v-show="loading" class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
      </span>
    </div>

    <div class="grid grid-flow-row gap-4">
      <div
        class="font-mono text-lg font-black tracking-wide flex items-center justify-around h-20 bg-indigo-400 odd:bg-purple-400 border border-gray-300 shadow rounded-md"
        v-for="i in issues"
        :key="i.id"
      >
        <span>{{ i.title }}</span>
        <span>{{ i.body }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Api from './../api';

  let issues = ref([]);
  let loading = ref(false);
  let freshList = () => {
    loading.value = true;
    Api.getIssueList()
      .then((res) => {
        issues.value = res.data;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  freshList();
</script>

<style scoped></style>
