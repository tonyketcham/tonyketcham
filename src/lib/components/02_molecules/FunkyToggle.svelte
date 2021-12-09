<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';

	$: oppositeTheme = $theme === 'light' ? 'dark' : 'light';

	if (browser) {
		applyThemeClass($theme);
	}

	function applyThemeClass(newTheme: string) {
		if ($theme) document.body.classList.remove($theme);

		theme.update(() => newTheme);

		document.body.classList.add($theme);
	}

	function toggleTheme() {
		applyThemeClass(oppositeTheme);
	}
</script>

<button
	on:click={toggleTheme}
	aria-label="Switch to {oppositeTheme} mode"
	class="group focus:outline-none ring-0 ring-transparent ring-offset-white"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-6 h-6 overflow-visible transform transition-all ease-in-out"
		class:-rotate-180={$theme === 'dark'}
		viewBox="0 0 30 30"
		><g
			id="dark"
			transform="translate(8 8)"
			fill="#ffe600"
			stroke="#000"
			stroke-width="3"
			class:active={$theme === 'dark'}
			class:next={$theme === 'light'}
		>
			<circle cx="11" cy="11" r="11" stroke="none" /><circle
				cx="11"
				cy="11"
				r="9.5"
				fill="none"
			/></g
		><g
			id="light"
			fill="#fff"
			stroke="#000"
			stroke-width="3"
			class:active={$theme === 'light'}
			class:next={$theme === 'dark'}
		>
			<circle cx="11" cy="11" r="11" stroke="none" /><circle
				cx="11"
				cy="11"
				r="9.5"
				fill="none"
			/></g
		>
		<use xlink:href="#{$theme}" />
	</svg>
</button>

<style>
	.active {
		@apply z-10 relative;
	}
	.next {
		@apply z-0 relative group-focus:stroke-width-5;
	}
</style>
