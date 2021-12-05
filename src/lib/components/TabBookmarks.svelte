<script>
	export let tabs = [
		{
			url: '/',
			title: 'about',
			bg: 'bg-funkyyellow'
		},
		{
			url: '/projects',
			title: 'projects',
			bg: 'bg-funkycyan'
		},
		{
			url: '/art',
			title: 'visual art',
			bg: 'bg-funkyviolet'
		}
	];
	// export let currentPath = '/blog/some-post';
	// $: active = tabs[0];
</script>

<ul class="absolute top-2 -left-4 z-0">
	{#each tabs as bookmark}
		<li>
			<a
				href={bookmark.url}
				class="inline-block w-8 h-4 transform translate-x-2 transition-transform hover:translate-x-0 {bookmark.bg}"
			>
				<span class="sr-only">{bookmark.title}</span>
			</a>
		</li>
	{/each}
</ul>
