<script>
	import FunkyToggle from '../lib/components/FunkyToggle.svelte';
	import BrutalistButton from './../lib/components/BrutalistButton.svelte';
</script>

<div class="w-full font-text">
	<div
		class="flex flex-row-reverse space-x-reverse space-x-16 mx-auto max-width m-auto h-screen p-16"
	>
		<aside
			class="w-80 flex-shrink relative brutalist-layer p-1.5 bg-white dark:bg-indigo-800 dark:text-white"
			style="height: max-content;"
		>
			<div class="relative -mt-6 border-3 border-black">
				<img src="mamiya-small.jpeg" alt="Pic of me" class="w-full" />
			</div>
			<h1 class="text-3xl mb-3">Tony Ketcham</h1>

			<nav class="flex flex-col place-items-end relative -right-3 -mx-2">
				<BrutalistButton href="/" accent="#00FFC4">about</BrutalistButton>
				<BrutalistButton href="projects" accent="#FFE600">projects</BrutalistButton>
				<BrutalistButton href="art" accent="#EF00FF">visual art</BrutalistButton>
			</nav>
			<div class="flex justify-end mt-3">
				<FunkyToggle />
			</div>
		</aside>

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
