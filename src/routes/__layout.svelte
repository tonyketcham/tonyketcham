<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TabBookmarks from '$lib/components/TabBookmarks.svelte';
</script>

<div class="relative w-full font-mono">
	<a
		href="#main-content"
		class="text-white bg-indigo-800 sr-only focus:p-1 focus:mx-auto focus:absolute focus:inset-x-2 focus:top-2 focus:not-sr-only focus:max-w-max focus:outline-white hover:bg-indigo-700"
		>Skip to content</a
	>
	<div
		class="flex flex-row-reverse h-screen p-16 m-auto mx-auto space-x-16 space-x-reverse max-width"
	>
		<Sidebar />
		<div class="relative flex w-full h-full">
			<TabBookmarks />

			<main
				id="main-content"
				class="relative w-full bg-white brutalist-layer dark:bg-indigo-800 dark:text-white"
			>
				<div class="w-full h-full overflow-auto">
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
