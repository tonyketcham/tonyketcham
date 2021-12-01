<script>
	export let tag = 'button';
	export let href = '#';
	export let accent = 'white';
</script>

<div class="relative max-w-max mb-3">
	{#if tag === 'button'}
		<button on:click>
			<slot />
		</button>
	{:else}
		<a {href}>
			<slot />
		</a>
	{/if}
	<div class="bottom-layer z-0" style="background-color: {accent};" role="presentation" />
</div>

<style>
	button,
	a {
		@apply inline-block z-10 relative;
		@apply px-4 py-2;
		@apply text-3xl font-medium;
		@apply bg-white border-3 border-black;
	}

	.bottom-layer {
		@apply w-full h-full absolute top-1.5 left-1.5;
		@apply bg-white border-3 border-black;
	}
</style>
