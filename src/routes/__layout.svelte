<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="w-full font-mono">
	<div
		class="flex flex-row-reverse space-x-reverse space-x-16 mx-auto max-width m-auto h-screen p-16"
	>
		<Sidebar />
		<main
			id="main-content"
			class="relative w-full brutalist-layer bg-white dark:bg-indigo-800 dark:text-white"
		>
			<div class="overflow-auto w-full h-full">
				<slot />
			</div>
		</main>
	</div>
</div>

<style windi:preflights:global windi:safelist:global global>
	@import url('https://use.typekit.net/kdi3ftf.css');

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
