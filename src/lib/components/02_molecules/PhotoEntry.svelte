<script lang="ts">
	import ArtworkEntry from '$lib/components/02_molecules/ArtworkEntry.svelte';

	export let img: Image;

	type Image = {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
</script>

<ArtworkEntry>
	<img
		src={img.src}
		alt={img.alt}
		width={img.width}
		height={img.height}
		class="mx-auto"
		loading="lazy"
	/>
</ArtworkEntry>
