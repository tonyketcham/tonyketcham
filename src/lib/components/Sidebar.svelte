<script>
	import BrutalistButton from './BrutalistButton.svelte';
	import FunkyToggle from '$lib/components/FunkyToggle.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<aside class="w-80 relative">
	<section
		class="p-1.5 brutalist-layer bg-white dark:bg-indigo-800 dark:text-white relative"
		style="height: max-content;"
	>
		<div class="relative -mt-6 border-3 border-black">
			<img width="210" height="210" src="mamiya-small.jpeg" alt="Pic of me" class="object-cover" />
		</div>
		<h1 class="text-3xl mb-6">Tony Ketcham</h1>

		<nav class="flex flex-col place-items-end relative -right-3 -mx-2">
			<BrutalistButton href="/" accent="funkycyan" tag="a">about</BrutalistButton>
			<BrutalistButton href="projects" accent="funkyyellow" tag="a">projects</BrutalistButton>
			<BrutalistButton href="art" accent="funkyviolet" tag="a">visual art</BrutalistButton>
		</nav>
		<div class="flex justify-end mt-3">
			<FunkyToggle />
		</div>
		<ul class="absolute -left-6 top-3 text-gray-100 space-y-2">
			<SocialLinks />
		</ul>
	</section>
	<div class="text-gray-300 text-xs text-right mt-2 flex flex-col">
		<a class="hover:text-funkyyellow" href="contact?type=project">have a cool project in mind?</a>
		<a class="text-gray-400 hover:text-funkyviolet" href="contact?type=consulting"
			>looking for consulting?</a
		>
		<a class="text-gray-500 hover:text-funkycyan" href="contact?type=tea">wanna drink tea?</a>
		<a class="text-gray-600 hover:text-funkyyellow" href="contact">contact me</a>
	</div>
</aside>

<style global>
</style>
