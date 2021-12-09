<script>
	import BrutalistButton from '$lib/components/01_atoms/BrutalistButton.svelte';
	import Tag from '$lib/components/01_atoms/Tag.svelte';

	export let title = 'Example Project';
	export let tags = [];
	export let href = '';
	export let source = '';
	export let cta = 'Check it out';
</script>

<article class="border-t-2 border-black py-10 relative">
	<h2 class="text-4xl mb-2 inline-block">
		{#if source}
			<a class="hover:text-gray-500" href={source} target="_blank">{title}</a>
		{:else}
			{title}
		{/if}
	</h2>
	<div class="py-1 flex flex-row flex-wrap">
		{#each tags as tag, i (tag)}
			<Tag>{tag}</Tag>
		{/each}
	</div>
	<div class="lg:p-3 py-6 dark:text-indigo-50 text-gray-800 space-y-3 text-base">
		<slot />
	</div>
	{#if href}
		<BrutalistButton tag="a" {href} newTab>{cta}</BrutalistButton>
	{/if}
</article>

<style windi:global>
	div :global(ul) {
		@apply list-disc p-6 py-4;
	}
	div :global(h3) {
		@apply text-xl font-semibold tracking-wide;
	}
	div :global(a) {
		@apply text-indigo-400 font-semibold tracking-wide;
	}
</style>
