import adapter from '@sveltejs/adapter-static';
import { windi } from 'svelte-windicss-preprocess';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [windi({}), preprocess({})],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: ['three']
			}
		}
	}
};

export default config;
