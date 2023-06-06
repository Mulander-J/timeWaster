<script setup>
import TheHeader from './layouts/TheHeader.vue'
import TheFooter from './layouts/TheFooter.vue'
</script>
<template lang="pug">
TheHeader
main.grow.w-full
    Router-view
TheFooter
</template>

<style lang="scss">
body {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

#app {
    @apply font-sans h-screen flex flex-col;
}
</style>