<template>
    <div>
        <input v-model="value">
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref('2021')
</script>

<style scoped>

</style>