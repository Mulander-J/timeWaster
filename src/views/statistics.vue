<template>
  <div class="m-4">
    <div
      class="grid grid-flow-col grid-rows-2 sm:grid-rows-3 md:grid-rows-4 lg:grid-rows-5 xl:grid-rows-6 gap-4"
    >
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
  Api.getIssueList().then((res) => {
    issues.value = res.data;
  });
</script>

<style scoped></style>
