<script>
	import { onMount } from 'svelte';
	import { setupBar } from '$lib/titleBar';
	import Todo from '$lib/Todo.svelte';
	import Clock from '$lib/Clock.svelte';

	onMount(()=>{
		setupBar();
	});
</script>

<div class="page-center">
	<Clock/>
	<Todo />
</div>
