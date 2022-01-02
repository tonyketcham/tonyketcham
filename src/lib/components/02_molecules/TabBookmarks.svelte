<script>
	import { page } from '$app/stores';

	export let tabs = [
		{
			url: '/',
			title: 'about',
			bg: 'bg-funkycyan'
		},
		{
			url: '/projects',
			title: 'projects',
			bg: 'bg-funkyyellow'
		},
		{
			url: '/art',
			title: 'visual art',
			bg: 'bg-funkyviolet'
		}
	];
</script>

<ul class="absolute top-2 -left-4 z-0">
	{#each tabs as bookmark}
		<li>
			<a
				href={bookmark.url}
				class="inline-block w-8 h-4 transform translate-x-2 transition-transform hover:translate-x-0 {bookmark.bg}"
				class:translate-x-0={bookmark.url === $page.url.pathname}
			>
				<span class="sr-only">{bookmark.title}</span>
			</a>
		</li>
	{/each}
</ul>
