<script>
	import PhotoEntry from '$lib/components/02_molecules/PhotoEntry.svelte';
</script>

<svelte:head>
	<title>Tony's Art 🧙‍♂️</title>
	<meta name="description" content="a portfolio of sorts" />
</svelte:head>

<article class="p-4">
	<section class="space-y-5 text-lg tracking-tighter">
		<h1 class="mb-2 text-6xl">Art + Design</h1>
		<p>
			Since middle school, I've been drawn to design. Back then I was making YouTube backgrounds on
			the family desktop for Halo 3 YouTubers. Now I have my own small agency where I work with some
			of my favorite producers and artists.
		</p>
		<section class="topic">
			<h2>Graphic Design 🌵</h2>
			<p class="mb-1.5">
				Brutalism, grit, and atmosphere drive my approach to crafting rasters. This medium feels
				like an evolving playground of iteration with creative constraints that challenge me to get
				wonky.
			</p>
			<div class="grid grid-cols-[auto]">
				<PhotoEntry
					img={{
						src: '/art/graphic/Reset Presents -- Rewind NYE@0.5x.jpg',
						alt: 'Reset Presents: Rewind NYE',
						width: 1000,
						height: 1250
					}}
				/>
				<PhotoEntry
					img={{
						src: 'https://media.graphcms.com/MPYlO7BQZaOwV2qGKYzw',
						alt: 'Reset Presents: Reloaded',
						width: 1000,
						height: 1250
					}}
				/>
			</div>
		</section>
		<section class="topic">
			<h2>Photography 🤳</h2>
			<div class="mb-1.5 space-y-3">
				<p>
					Interested in hyper-realism and retro-futurism, I apply my study of light and color to
					funky people and liminal spaces.
				</p>
				<p>
					Check out a bunch more on Instagram <a
						href="https://www.instagram.com/karmalies.studio/"
						target="_blank"
					>
						<span class="px-0.5 opacity-50">@</span>karmalies.studio</a
					>
				</p>
			</div>
			<div class="grid grid-cols-[auto]">
				<PhotoEntry
					img={{
						src: '/art/photo/Beverly Shores (for Web @0.25x).jpg',
						alt: 'Beverly Shores station',
						width: 825,
						height: 638
					}}
				/>
				<PhotoEntry
					img={{
						src: '/art/photo/jack laying down [FOR WEB @0.25x].webp',
						alt: 'Jack laying down',
						width: 611,
						height: 639
					}}
				/>
			</div>
		</section>
		<section class="topic">
			<h2>Videography 📹</h2>
			<p class="mb-1.5">
				Like photography, but in motion this time. Usually music videos and editorial edits on event
				recaps.
			</p>
			<div class="flex flex-col space-y-4 my-4">
				<iframe
					title="Vimeo video player"
					src="https://player.vimeo.com/video/556675018?h=c459fd3693"
					width="640"
					height="360"
					frameborder="0"
					allowfullscreen
					class="w-full"
				/>
				<iframe
					width="640"
					height="360"
					src="https://www.youtube-nocookie.com/embed/Nr9o8uqrSeI"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					class="mx-auto w-full"
				/>
			</div>
		</section>
	</section>
</article>

<style lang="postcss" windi:global>
	h2 {
		@apply text-4xl mb-2 font-medium;
	}
	a {
		@apply text-indigo-400 font-semibold tracking-wide;
	}
	.topic {
		@apply lg:px-4 py-6 border-t-2 border-black;
	}
</style>
