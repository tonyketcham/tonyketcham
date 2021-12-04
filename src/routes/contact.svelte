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
	let success: string,
		error: string = '';

	function getFormData(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);
		return Object.fromEntries(data.entries());
	}

	function encode(data: Record<string, string>) {
		return Object.keys(data)
			.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&');
	}

	async function handleSubmit(event: Event) {
		const res = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode(getFormData(event) as Record<string, string>)
		});
		if (res.ok) {
			success = "Thanks for reaching out! I'll get back to you soon.";
		} else {
			error = 'Something went wrong. Please try again.';
		}
	}
</script>

<section class="p-4 space-y-6">
	<h1 class="text-4xl">{heading}</h1>
	<form
		class="flex flex-col space-y-2"
		name="contact"
		method="POST"
		on:submit|preventDefault={handleSubmit}
	>
		<input type="hidden" name="form-name" value="contact" />
		<input type="hidden" name="type" value="general" />
		<div>
			<label for="name">Name </label>
			<input type="text" name="name" autocomplete="name" />
		</div>
		<div>
			<label for="email">Email </label>
			<input type="email" name="email" autocomplete="email" required />
		</div>
		<div>
			<label for="message">Message</label>
			<textarea rows="9" name="message" required />
		</div>
		<button
			type="submit"
			class="ml-auto px-6 py-2 bg-black text-white max-w-max disabled:text-gray-400"
			disabled={!!success}>{!!success ? 'Sent! 🧙‍♂️' : 'Send'}</button
		>
		{#if !!success}
			<p class="text-green-500">{success}</p>
		{:else if !!error}
			<p class="text-red-500">{error}</p>
		{/if}
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
