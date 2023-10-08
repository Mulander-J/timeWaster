<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { invoke } from '@tauri-apps/api/tauri';

	let timer: any = null;
	let time = '';
	let per = 0;

	async function setTime() {
		time = await invoke('greet', { prefix: 'Now' });
		per = await invoke('ask_year');
	}

	$: leftPer = Number(100 - per * 100).toFixed(2)
	$: styleLine = `width: ${per * 100}%;`

	onMount(() => {
		timer = setInterval(setTime, 1000);
	});
	onDestroy(() => clearInterval(timer));
</script>

<div class="clock">
	<p class="c-time">{time}</p>
	<div class="c-progress">
		<span class="progressLine" style={styleLine} />
	</div>
	<p class="c-per">Left {leftPer}%</p>
</div>

<style>
	.c-time {
		color: white;
		letter-spacing: 2px;
		font-weight: bold;
		text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
	}
	.c-per {
		text-align: right;
		font-size: 12px;
		color: rgba(255,255,255,.6);
		margin-bottom: 2rem;
	}
	.c-progress {
		position: relative;
		margin: .8rem 0;
		width: 100%;
		min-width: 100%;
		height: 24px;
		background: rgb(226 226 226 / 25%);
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 30px;
		box-shadow: inset 0 1px 2px rgb(0 0 0 / 25%), 0 1px rgb(255 255 255 / 8%);
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.progressLine {
		width: 0%;
		height: 12px;
		border-radius: 20px;
		margin: 2px 6px 0px 6px;
		content: '';
		position: relative;
		background: repeating-linear-gradient(to right, red 0%, blue 50%, red 100%);
		background-size: 200% auto;
		background-position: 0 100%;
		animation: gradient 2s linear infinite forwards;
		transition: all 2s;
	}
	.progressLine::after {
		width: 100%;
		height: 100%;
		content: '';
		border-radius: 20px;
		padding: 1px 1px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		filter: blur(0.8px);
		background: repeating-linear-gradient(to right, red 0%, blue 50%, red 100%);
		background-size: 200% auto;
		background-position: 0 100%;
		z-index: -1;
		animation: gradient 2s linear  infinite forwards;
		transition: all 2s;
	}
	@keyframes gradient {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
