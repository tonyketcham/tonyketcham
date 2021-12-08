<script>
	import TreeScene from '../lib/components/TreeScene.svelte';
</script>

<svelte:head>
	<title>Tony 🧙‍♂️</title>
	<meta name="description" content="a portfolio of sorts" />
</svelte:head>

<article class="p-4">
	<div class="relative -m-4 md:float-right md:ml-0 md:mb-0 md:-mr-4 md:-mt-4 md:w-1/2 h-70">
		<TreeScene />
	</div>
	<section class="space-y-5 text-lg tracking-tighter">
		<h1 class="mb-2 text-6xl">I'm Tony</h1>
		<blockquote>A digital and analogue forager + maker 👩‍🌾</blockquote>
		<p>
			I create neat tools like <a href="https://github.com/tonyketcham/flatbread" target="_blank"
				>Flatbread</a
			>
			and <a href="https://liaison.greatnews.life/" target="_blank">Liaison</a> to help others,
			build cool + accessible websites like
			<a href="https://resetpresents.com" target="_blank">Reset</a>, and experiment with a variety
			of creative mediums.
		</p>
		<p>
			My interests in the web realm span UI/UX, accessibility, serverless applications, devtools,
			and whatever niche I'm taking a nose dive in this week. Explore things I've <a
				href="/projects"
				sveltekit:prefetch>developed</a
			>
			or pretty pieces of
			<a href="/art" sveltekit:prefetch>art</a> I've made, if you'd like.
		</p>
		<p>
			In 2016, I founded my own creative agency called <a
				href="https://karmalies.studio"
				target="_blank">Karma Lies</a
			>
			offering unorthodox brand development via photography, graphic design, UI/UX, and web development.
			These days, I camp out at
			<a href="https://valpo.life" target="_blank">GreatNews.Life</a> as the lead developer and tech
			department manager.
		</p>
		<p>
			Over quarantine, I took a deep dive into the wild world of specialty tea, predominately <a
				href="https://en.wikipedia.org/wiki/Pu%27er_tea"
				target="_blank">pu-erh (shēng chá)</a
			>, and haven't yet swam back up to the surface. Wish me luck! If you wanna talk tea,
			<a href="/contact?type=tea" sveltekit:prefetch>hit me up</a>; I'd love to have a tea session
			together.
		</p>
	</section>
</article>

<style>
	blockquote {
		@apply border-l-4 border-indigo-500 bg-indigo-600 bg-opacity-25;
		@apply pl-3;
		@apply font-medium text-base;
	}
	a {
		@apply text-funkyviolet hover:opacity-70 transition-opacity visited:text-green-500;
	}
</style>
