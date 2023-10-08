<script lang="ts">
	const pseudoMax = 4;

	let val = '';

	let todos: {
		key: string;
		val: string;
	}[] = [];

	$: pseudoNum = pseudoMax - todos.length;

	async function newDo() {
		todos = [
			...todos,
			{
				val: val.trim(),
				key: Date.now().toString()
			}
		];
		val = '';
	}
</script>

<div class="module-todo">
	<div class="newItem">
		<input id="val-input" placeholder="Todo..." bind:value={val} />
		<button on:click={newDo}>+</button>
	</div>

	<ul class="todo-list">
		{#each todos as item, i}
			<li>
				<input type="checkbox" id={item.key} />
				<label class="todo-item" for={item.key}>
					<span>{i + 1}. {item.val}</span>
					<div class="checker">
						<svg width="15px" height="10px">
							<polyline points="1,5 6,9 14,1" stroke="currentColor" fill="none" />
						</svg>
					</div>
				</label>
			</li>
		{/each}

		{#if pseudoNum > 0}
			{#each Array(pseudoNum) as _}
				<li class="pseudoItem" />
			{/each}
		{/if}
	</ul>
</div>

<style>
	.module-todo {
		width: 300px;
		box-sizing: border-box;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.newItem {
		margin-bottom: 1.2rem;
		width: 100%;
		display: grid;
		grid-template-columns: auto 30px;
		grid-gap: 10px;
	}
	.newItem input {
		height: 30px;
		width: 100%;
		border: none;
		outline: none;
		list-style: none;
		box-sizing: border-box;
		padding: 2px 4px;
		font-size: 16px;
		line-height: 26px;
		border-radius: 2px;
		background-color: rgba(255, 255, 255, 0.7);
	}
	.newItem button {
		border: none;
		outline: none;
		height: 30px;
		width: 30px;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.9);
		transition: 0.3s ease-in-out;
	}
	.newItem button:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
	ul.todo-list {
		list-style: none;
		width: 100%;
		margin: 0;
		padding: 0;
		display: grid;
		grid-gap: 8px;
	}
	input[type='checkbox'] {
		display: none;
	}
	.todo-list li {
		height: 30px;
		width: 100%;
		list-style: none;
		padding: 2px 10px;
		border-radius: 2px;
		background-color: rgba(255, 255, 255, 0.9);
	}
	.todo-item {
		font-size: 16px;
		text-indent: 8px;
		line-height: 26px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #497081;
		transition: all 0.3s ease-in-out;
	}
	.checker {
		position: relative;
		width: 16px;
		height: 16px;
	}
	.checker::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-radius: 50%;
		border: 2px solid;
		top: 0;
		left: 0;
		transition: all 0.4s ease-in 0.5s;
	}
	.checker svg {
		position: absolute;
		left: 0;
		top: 3px;
	}
	svg polyline {
		stroke-dasharray: 0 30;
		transition: all 0.5s ease-out;
	}
	input[type='checkbox']:checked ~ .todo-item {
		color: #44bd1e;
		text-decoration: line-through;
	}
	input[type='checkbox']:checked ~ .todo-item .checker::after {
		transition: all 0.4s ease-in;
		transform: scale(1.5);
		transform-origin: center center;
		opacity: 0;
	}
	input[type='checkbox']:checked ~ .todo-item svg polyline {
		stroke-dasharray: 30 30;
		transition: all 0.5s ease-out 0.4s;
	}

	li.pseudoItem {
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.8) 25%,
			rgba(255, 255, 255, 0.12) 37%,
			rgba(255, 255, 255, 0.8) 63%
		);
		background-color: rgba(255, 255, 255, 0.4);
		background-size: 400% 100%;
		animation: skeleton-circle 1.5s cubic-bezier(0, 0, 1, 1) infinite;
	}
	@keyframes skeleton-circle {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}
</style>
