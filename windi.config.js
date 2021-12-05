// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	safelist: ['dark', 'light', 'bg-funkycyan', 'bg-funkyyellow', 'bg-funkyviolet'],
	theme: {
		fontFamily: {
			mono: ['divenire-mono', 'monospace']
		},
		extend: {
			colors: {
				funkycyan: '#00FFC4',
				funkyyellow: '#FFE600',
				funkyviolet: '#EF00FF'
			}
		}
	}
});
