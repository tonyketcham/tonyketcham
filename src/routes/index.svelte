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
		<h1 class="text-6xl mb-2">I'm Tony</h1>
		<blockquote>A digital and analogue forager + maker 👩‍🌾</blockquote>
		<p>
			I'm into developing tools that help others, building neat lookin websites, and experimenting
			with a variety of creative mediums such as generative art, photography, graphic design, audio
			engineering, and 3D printing.
		</p>
		<p>
			In 2016, I started my own creative agency called <a
				href="https://karmalies.studio"
				target="_blank">Karma Lies</a
			>
			where I do the majority of my photo and graphic design work, with some web design + development
			sprinkled in for good measure. I work full-time at
			<a href="https://valpo.life" target="_blank">GreatNews.Life</a> as the lead developer and tech
			department manager.
		</p>
		<p>
			My primary focus is working on full-stack web projects, where I create tools like <a
				href="https://github.com/tonyketcham/flatbread"
				target="_blank">Flatbread</a
			>
			and <a href="https://liaison.greatnews.life/">Liaison</a>, as well as websites like
			<a href="https://resetpresents.com" target="_blank">Reset</a>
			and <a href="https://puerh.wtf" target="_blank">Puerh.wtf</a>. My interests in this space span
			UI/UX, accessibility, serverless applications, devtools, and whatever rabbit hole I'm down
			this week. I'm a big fan of TypeScript and functional programming paradigms. Explore things
			I've <a href="/projects" sveltekit:prefetch>developed</a> or pretty pieces of
			<a href="/art" sveltekit:prefetch>art</a> I've made, if you'd like.
		</p>
		<p>
			If ya like my works, consider sponsoring me on <a
				target="_blank"
				href="https://github.com/sponsors/tonyketcham">GitHub Sponsor</a
			> to keep them sustainable.
		</p>
		<p>
			Over quarantine, I took a deep dive into the world of specialty teas, predominately <a
				href="https://en.wikipedia.org/wiki/Pu%27er_tea"
				target="_blank">puerh tea</a
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
