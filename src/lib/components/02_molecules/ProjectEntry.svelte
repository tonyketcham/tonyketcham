<script>
	import BrutalistButton from '$lib/components/01_atoms/BrutalistButton.svelte';
	import Tag from '$lib/components/01_atoms/Tag.svelte';
	export let title = 'Example Project';
	export let tags = [];
	export let href = '';
</script>

<article class="border-t-2 mt-6 py-3">
	<h2 class="text-4xl mb-2">{title}</h2>
	<div class="py-1">
		{#each tags as tag, i (tag)}
			<Tag>{tag}</Tag>
		{/each}
	</div>
	<div class="p-3 text-indigo-200 space-y-3 text-base">
		<slot />
	</div>
	{#if href}
		<BrutalistButton tag="a" {href}>Check it out</BrutalistButton>
	{/if}
</article>

<style>
	ul {
		@apply list-disc p-6;
	}
</style>
