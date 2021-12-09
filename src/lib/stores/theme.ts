import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { Writable } from 'svelte/store';

export let theme: Writable<string>;

// check for localStorage, this won't run on SSR
if (browser && typeof localStorage !== 'undefined') {
	const stored = localStorage.theme;
	console.log(stored);
	theme = writable(stored || getUserThemePreference());

	// Update localStorage on store state change
	theme.subscribe((value) => (localStorage.theme = value));
} else {
	// fallback to default theme
	theme = writable('light');
}

function getUserThemePreference(): string {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}
