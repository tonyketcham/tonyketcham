<script>
	import TreeScene from '../lib/components/TreeScene.svelte';
</script>

<svelte:head>
	<title>Tony 🧙‍♂️</title>
	<meta name="description" content="a portfolio of sorts" />
</svelte:head>

<article class="p-4">
	<div class=" md:float-right -m-4 md:ml-0 md:mb-0 md:-mr-4 md:-mt-4 md:w-1/2 h-70 relative">
		<TreeScene />
	</div>
	<section class="space-y-5 text-lg">
		<h1 class="text-6xl mb-2">Hi I'm Tony</h1>
		<blockquote>A digital and analogue forager + maker 👩‍🌾</blockquote>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem ab nemo explicabo
			delectus, eligendi quisquam eveniet adipisci? Commodi sapiente iusto facere doloremque
			repellat pariatur possimus ipsa veniam, corporis velit.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem ab nemo explicabo
			delectus, eligendi quisquam eveniet adipisci? Commodi sapiente iusto facere doloremque
			repellat pariatur possimus ipsa veniam, corporis velit.
		</p>
	</section>
</article>

<style>
	blockquote {
		@apply border-l-4 border-indigo-500 bg-indigo-600 bg-opacity-25;
		@apply pl-3;
		@apply font-medium text-base;
	}
</style>
