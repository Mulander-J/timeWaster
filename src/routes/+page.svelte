<script>
	import { onMount } from 'svelte';
	import { setupBar } from '$lib/titleBar';
	import Todo from '$lib/Todo.svelte';
	import Clock from '$lib/Clock.svelte';
	import setUpCanvas from '$lib/canvas.js';

	onMount(()=>{
		setupBar();
		setUpCanvas();
	});
</script>

<div class="page-center">
	<canvas id="page-bg"/>
	<Clock/>
	<Todo />
</div>
