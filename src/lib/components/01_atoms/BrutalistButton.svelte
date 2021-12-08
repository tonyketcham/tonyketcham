<script>
	export let tag = 'button';
	export let href = '#';
	export let accent = 'white';
	export let newTab = false;
</script>

<div class="relative max-w-max mb-3">
	{#if tag === 'button'}
		<button
			class="button dark:bg-indigo-600 dark:hover:text-black dark:hover:bg-indigo-100
			hover:bg-gray-100 transition-all duration-150 hover:translate-y-0.5 hover:translate-x-0.5 transform"
			class:hover:bg-funkycyan={accent === 'funkycyan'}
			class:hover:bg-funkyyellow={accent === 'funkyyellow'}
			class:hover:bg-funkyviolet={accent === 'funkyviolet'}
			on:click
		>
			<slot />
		</button>
	{:else}
		<a
			class="button dark:bg-indigo-600 dark:hover:text-black dark:hover:bg-indigo-100 
			hover:bg-gray-100
			transition-all duration-150 hover:translate-y-0.5 hover:translate-x-0.5 transform"
			class:hover:bg-funkycyan={accent === 'funkycyan'}
			class:hover:bg-funkyyellow={accent === 'funkyyellow'}
			class:hover:bg-funkyviolet={accent === 'funkyviolet'}
			{href}
			sveltekit:prefetch
			target={newTab ? '_blank' : '_self'}
		>
			<slot />
		</a>
	{/if}
	<div
		class="bottom-layer z-0 after:dark:bg-indigo-800"
		class:bg-funkycyan={accent === 'funkycyan'}
		class:bg-funkyyellow={accent === 'funkyyellow'}
		class:bg-funkyviolet={accent === 'funkyviolet'}
		role="presentation"
	/>
</div>

<style lang="postcss" global>
	.button {
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
