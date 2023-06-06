<script setup lang="ts">
const props = defineProps<{
    seed?: string
    size: number
}>()

const sizeWrap = computed(()=>({
    height: `${props.size || 32}px`,
    width: `${props.size || 32}px`
}))

const _src = `https://api.dicebear.com/6.x/lorelei/svg?seed=${btoa(props.seed || '0')}`

// console.log('_src', _src)
</script>

<template lang="pug">
.bg-black.rounded-full(:style="sizeWrap"): img(:src="_src")
</template>