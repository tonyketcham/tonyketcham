<script>
	import BrutalistButton from './BrutalistButton.svelte';
	import FunkyToggle from '$lib/components/FunkyToggle.svelte';
</script>

<aside class="w-80 relative">
	<section
		class="p-1.5 brutalist-layer bg-white dark:bg-indigo-800 dark:text-white relative"
		style="height: max-content;"
	>
		<div class="relative -mt-6 border-3 border-black">
			<img src="mamiya-small.jpeg" alt="Pic of me" class="w-full" />
		</div>
		<h1 class="text-3xl mb-6">Tony Ketcham</h1>

		<nav class="flex flex-col place-items-end relative -right-3 -mx-2">
			<BrutalistButton href="/" accent="#00FFC4">about</BrutalistButton>
			<BrutalistButton href="projects" accent="#FFE600">projects</BrutalistButton>
			<BrutalistButton href="art" accent="#EF00FF">visual art</BrutalistButton>
		</nav>
		<div class="flex justify-end mt-3">
			<FunkyToggle />
		</div>
		<ul class="absolute -left-6 top-3 text-gray-100 space-y-2">
			<li>
				<a href="https://github.com/tonyketcham">
					<span class="sr-only">Tony's Github</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						aria-hidden="true"
						role="presentation"
						fill="currentColor"
						stroke-width="2"
						class="w-4 h-4"
						><path
							d="M8.422 20.081c0 .896.01 1.753.016 2.285a.617.617 0 0 0 .422.58c2.078.686 4.317.718 6.414.091l.292-.087a.67.67 0 0 0 .478-.638c.005-.733.017-2.017.017-3.53 0-1.372-.477-2.25-1.031-2.707 3.399-.366 6.97-1.61 6.97-7.227 0-1.61-.592-2.91-1.566-3.934.153-.366.688-1.866-.153-3.878 0 0-1.28-.403-4.201 1.5a14.76 14.76 0 0 0-3.82-.494c-1.298 0-2.597.165-3.819.494C5.52.65 4.24 1.036 4.24 1.036c-.84 2.012-.306 3.512-.153 3.878a5.565 5.565 0 0 0-1.566 3.934c0 5.598 3.552 6.86 6.951 7.227-.439.366-.84 1.006-.973 1.957-.879.384-3.075 1.006-4.45-1.207-.286-.44-1.146-1.519-2.349-1.5-1.28.018-.516.695.02.97.648.347 1.393 1.646 1.565 2.067.306.823 1.299 2.396 5.137 1.72z"
						/></svg
					></a
				>
			</li>
			<li>
				<a href="https://linkedin.com/in/tonyketcham">
					<span class="sr-only">Tony's LinkedIn</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						aria-hidden="true"
						role="presentation"
						fill="currentColor"
						stroke-width="2"
						class="w-4 h-4"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634 3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0 2.063 2.063 0 0 1 4.125 0z"
						/></svg
					></a
				>
			</li>
		</ul>
	</section>
	<div class="text-gray-300 text-sm text-right mt-2 flex flex-col">
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
