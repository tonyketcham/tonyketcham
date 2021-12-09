<script lang="ts">
	import Sidebar from '$lib/components/03_modules/Sidebar.svelte';
	import TabBookmarks from '$lib/components/02_molecules/TabBookmarks.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';

	let content: HTMLElement;
	let autoscroll: boolean;

	beforeUpdate(() => {
		// Check if the content area has been scrolled
		autoscroll = content && content.scrollTop > 0;
	});

	afterUpdate(() => {
		// If the content area has been scrolled, scroll it back to the top on update
		if (autoscroll) content.scrollTo(0, 0);
	});
</script>

<div class="flex w-full min-h-screen !md:hidden">
	<div class="m-auto">
		<Sidebar />
	</div>
</div>
<div class="relative w-full font-mono">
	<a
		href="#main-content"
		class="text-white bg-indigo-800 sr-only focus:p-1 focus:mx-auto focus:absolute focus:inset-x-2 focus:top-2 focus:not-sr-only focus:max-w-max focus:outline-white hover:bg-indigo-700"
		>Skip to content</a
	>
	<div
		class="flex md:flex-row-reverse h-screen p-8 md:p-16 m-auto mx-auto md:space-x-16 md:space-x-reverse max-width"
	>
		<div class="md:block hidden">
			<Sidebar />
		</div>
		<div class="relative flex w-full h-full">
			<TabBookmarks />

			<main
				id="main-content"
				class="relative w-full bg-white brutalist-layer dark:bg-indigo-800 dark:text-white"
			>
				<div class="w-full h-full overflow-auto" bind:this={content}>
					<slot />
				</div>
			</main>
		</div>
	</div>
</div>

<style windi:preflights:global windi:safelist:global global>
	*::selection {
		@apply bg-indigo-500 bg-opacity-50;
	}
	.max-width {
		max-width: 70rem;
	}
	.brutalist-layer {
		@apply border-3 border-black;
		@apply transition-colors ease-in-out duration-200;
	}
	.brutalist-layer:after {
		@apply content- absolute top-1.5 left-1.5 w-full h-full -z-2;
		@apply bg-indigo-500;
	}
</style>
