<script>
	import ProjectEntry from './../lib/components/02_molecules/ProjectEntry.svelte';
</script>

<svelte:head>
	<title>Tony's Projects 🧙‍♂️</title>
	<meta name="description" content="a portfolio of sorts" />
</svelte:head>

<article class="p-4">
	<section class="space-y-5 text-lg">
		<h1 class="text-6xl mb-2">Projects</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem ab nemo explicabo
			delectus, eligendi quisquam eveniet adipisci? Commodi sapiente iusto facere doloremque
			repellat pariatur possimus ipsa veniam, corporis velit.
		</p>
		<ProjectEntry
			title="Flatbread 🍞"
			tags={['Node', 'GraphQL', 'TypeScript', 'CLI', 'monorepo']}
			href="https://github.com/tonyketcham/flatbread"
		>
			<p>
				Eat your relational markdown data and query it, too, with GraphQL inside damn near any
				framework (statement awaiting peer-review).
			</p>
			<p>
				Born out of a desire to Gridsome (or Gatsby) anything, this project harnesses a plugin
				architecture to be easily customizable to fit your use cases.
			</p>
		</ProjectEntry>
		<ProjectEntry
			title="Liaison 📧"
			tags={['Vue', 'email', 'JavaScript', 'MJML', 'serverless']}
			href="https://liaison.greatnews.life/"
		>
			<p>
				A modular, data-driven newsletter generator built on the JAMstack with Vue 2. Quickly build
				customizeable, responsive emails by joining together limitless external data sources.
			</p>
			<h3>Features 🥦</h3>
			<ul>
				<li>
					Multiple data sources allow for integration of data from a vast network of content like
					Multisite WordPress, eCommerce shops, blogs, etc.
				</li>
				<li>Plan newsletters across your entire network of assets from one place, seamlessly</li>
				<li>Modular and therefore extensibile by design with custom block types</li>
				<li>Built on the JAMstack, so self-hosting the project can be free</li>
				<li>Generate email-compliant markdown with real-time, client-side MJML transpiling</li>
				<li>
					Create transferrable .lzon project files which can be consumed or modified by other users
				</li>
			</ul>
		</ProjectEntry>
	</section>
</article>
