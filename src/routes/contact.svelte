<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		let heading = 'Contact me';

		// switch (page.query.get('type')) {
		// 	case 'project':
		// 		heading = 'Have a project in mind?';
		// 		break;
		// 	case 'consulting':
		// 		heading = 'Need consulting work?';
		// 		break;
		// 	case 'tea':
		// 		heading = 'Wanna do a tea session together? 🍵';
		// 		break;
		// 	default:
		// 		heading = 'Contact me';
		// 		break;
		// }
		return {
			props: {
				heading
			}
		};
	}
</script>

<script lang="ts">
	export let heading = 'Contact me';
</script>

<section class="p-4 space-y-6">
	<h1 class="text-4xl">{heading}</h1>
	<form class="flex flex-col space-y-2" name="contact" method="POST" data-netlify="true">
		<div>
			<label for="name">Name </label>
			<input type="text" name="name" autocomplete="name" />
		</div>
		<div>
			<label for="email">Email </label>
			<input type="email" name="email" autocomplete="email" />
		</div>
		<div>
			<label for="message">Message</label>
			<textarea rows="9" name="message" />
		</div>
		<button type="submit" class="ml-auto px-6 py-2 bg-black text-white max-w-max">Send</button>
	</form>
</section>

<style lang="postcss">
	form > div {
		@apply flex flex-col;
	}

	form > * > input,
	form > * > textarea {
		@apply border-2 border-black;
		@apply text-black font-bold;
		@apply p-2;
	}
</style>
