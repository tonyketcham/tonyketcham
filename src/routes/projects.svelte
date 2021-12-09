<script>
	import ProjectEntry from './../lib/components/02_molecules/ProjectEntry.svelte';
</script>

<svelte:head>
	<title>Tony's Projects 🧙‍♂️</title>
	<meta name="description" content="a portfolio of sorts" />
</svelte:head>

<article class="p-4">
	<section class="space-y-5 text-lg tracking-tighter">
		<h1 class="mb-2 text-6xl">Projects</h1>
		<p>A select compilation of my software, spanning devtools, web apps, and computer vision.</p>
		<div class="px-4">
			<ProjectEntry
				title="Flatbread 🍞"
				tags={['flat-file', 'Node', 'GraphQL', 'TypeScript', 'CLI', 'monorepo']}
				href="https://github.com/tonyketcham/flatbread"
				source="https://github.com/tonyketcham/flatbread"
				cta="Bake it"
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
				title="Liaison 📬"
				tags={['Vue', 'email', 'JavaScript', 'web app', 'serverless']}
				href="https://liaison.greatnews.life/"
				cta="Build it"
			>
				<a href="https://liaison.greatnews.life/" target="_blank">
					<img
						src="/projects/Liaison Screenshot.jpg"
						alt="Liaison screenshot"
						class="rounded object-cover w-full"
						width="1448"
						height="771"
					/>
				</a>
				<p>
					A modular, data-driven newsletter generator built on the JAMstack with Vue 2. Quickly
					build customizeable, responsive emails by joining together limitless external data
					sources.
				</p>
				<h3>Features 🥦</h3>
				<ul>
					<li>
						Multiple data sources allow for integration of data from a vast network of content like
						Multisite WordPress, eCommerce shops, blogs, etc.
					</li>
					<li>Plan newsletters across your entire network of assets from one place, seamlessly.</li>
					<li>Modular and therefore extensibile by design with custom block types.</li>
					<li>Built on the JAMstack, so self-hosting the project can be free.</li>
					<li>Generate email-compliant markdown with real-time, client-side MJML transpiling.</li>
					<li>
						Create transferrable <code>.lzon</code> project files which can be consumed or modified by
						other users.
					</li>
				</ul>
			</ProjectEntry>
			<ProjectEntry
				title="Reset Presents ✨"
				tags={['website', 'SvelteKit', 'serverless', 'events', 'GraphCMS']}
				href="https://resetpresents.com/"
				source="https://github.com/Karma-Lies/reset"
				cta="Reset it"
			>
				<a href="https://resetpresents.com/events" target="_blank" class="block">
					<img
						src="/projects/Reset Presents - Events Page-min.png"
						alt="Reset Presents event page"
						class="rounded"
						width="608"
						height="429"
					/>
				</a>
				<a href="https://resetpresents.com/contact" target="_blank" class="block">
					<img
						src="/projects/Reset Presents - Contact Page.png"
						alt="Reset Presents event page"
						class="rounded"
						width="608"
						height="299"
					/>
				</a>
				<p>
					The online anchor of Chicago's premiere inclusive event organization for underground
					talent, Reset Presents. This project experiments with how a minimal production company
					website can accessibly appear and behave, focusing on making it easy to access information
					about our events.
				</p>
			</ProjectEntry>
			<ProjectEntry
				title="Depth Mapper 📷"
				tags={['Java', 'OpenCV', 'computer vision', 'CLI']}
				href="https://github.com/tonyketcham/Depth-Mapper"
				source="https://github.com/tonyketcham/Depth-Mapper"
				cta="Map it"
			>
				<p>
					Generates a depth map from a focal stack of images, using ideas proposed in <a
						href="https://graphics.stanford.edu/papers/focalstack/focalstack.pdf"
						>this Stanford graphics paper</a
					>.
				</p>
				<h3>🗜️ Example</h3>
				<p>Take a highly textured scene of 32 input images:</p>
				<div class="flex flex-wrap justify-center p-4 bg-black bg-opacity-10 rounded">
					<section class="image-card">
						<h4>Image in the Stack</h4>
						<img
							src="https://github.com/tonyketcham/Depth-Mapper/raw/master/src/TestImages/_0009_Highly%20Textured%20Input%20-%2009.jpg"
							alt="Amethyst crystal with a cat statue, super shallow depth of field"
							width="1280"
							height="720"
						/>
					</section>
					<section class="image-card">
						<h4>📚 Focus Stack</h4>
						<img
							src="https://github.com/tonyketcham/Depth-Mapper/blob/master/src/gitresources/Focus%20Stacked.jpg?raw=true"
							alt="Amethyst crystal with a cat statue, generated max depth of field"
							width="1280"
							height="720"
						/>
					</section>
					<section class="image-card">
						<h4>📦 Depth Map</h4>
						<img
							src="https://github.com/tonyketcham/Depth-Mapper/raw/master/src/gitresources/Depth%20Map.jpg"
							alt="Amethyst crystal with a cat statue, generated depth map"
							width="1280"
							height="720"
						/>
					</section>
				</div>
			</ProjectEntry>
			<ProjectEntry
				title="unplugin-obj 🧵"
				tags={['threejs', 'webgl', 'devtool', 'bundler plugin', 'TypeScript', 'monorepo']}
				href="https://github.com/tonyketcham/unplugin-obj"
				source="https://github.com/tonyketcham/unplugin-obj"
				cta="Stringify it"
			>
				<p>
					Import <code>.obj</code> files as strings in Vite, Rollup, Webpack + more.
				</p>
			</ProjectEntry>
			<ProjectEntry
				title="🧙‍♂️ p5-Svelte 🕸"
				tags={['svelte', 'p5.js', 'generative art', 'component library']}
				href="https://github.com/tonyketcham/p5-svelte"
				source="https://github.com/tonyketcham/p5-svelte"
				cta="Generate it"
			>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://camo.githubusercontent.com/d55dd54222627893fd23c241c42f9930322feb138bca7e04573f7b7fcf78b8be/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f70726163746963616c6465762f696d6167652f66657463682f732d2d354c34514934425f2d2d2f635f6c696d6974253243665f6175746f253243666c5f70726f6772657373697665253243715f3636253243775f3838302f68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f692f6f7a7565743571706577367439727570366f34702e676966"
					class="lg:absolute top-6 right-0"
					><img
						src="https://camo.githubusercontent.com/d55dd54222627893fd23c241c42f9930322feb138bca7e04573f7b7fcf78b8be/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f70726163746963616c6465762f696d6167652f66657463682f732d2d354c34514934425f2d2d2f635f6c696d6974253243665f6175746f253243666c5f70726f6772657373697665253243715f3636253243775f3838302f68747470733a2f2f6465762d746f2d75706c6f6164732e73332e616d617a6f6e6177732e636f6d2f692f6f7a7565743571706577367439727570366f34702e676966"
						alt="10print made using p5-svelte"
						width="150"
						height="150"
						data-canonical-src="https://res.cloudinary.com/practicaldev/image/fetch/s--5L4QI4B_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/ozuet5qpew6t9rup6o4p.gif"
						style="max-width: 100%;"
					/></a
				>
				<p>Easily add p5 sketches to a Svelte project 🍛 🌱</p>
			</ProjectEntry>
			<ProjectEntry
				title="🌱 Pu-erh, wtf? 🍵"
				tags={['website', 'Gridsome', 'serverless', 'Netlify CMS']}
				href="https://puerh.wtf/"
				source="https://github.com/tonyketcham/puerh.wtf"
				cta="Drink it"
			>
				<p>Documenting all the teas I come across.</p>
				<p>
					Currently in flux, undergoing a major refactor over to SvelteKit and Flatbread. The next
					version of the UI is gonna be wild & I'm very excited for it.
				</p>
			</ProjectEntry>
			<ProjectEntry
				title="Jetstream 🍃"
				tags={['Adobe XD', 'plugin', 'TailwindCSS', 'color']}
				href="https://github.com/tonyketcham/jetstream"
				source="https://github.com/tonyketcham/jetstream"
				cta="Pull it"
			>
				<p>Pull Tailwind's color palette into Adobe XD.</p>
			</ProjectEntry>
		</div>
	</section>
</article>

<style windi:global>
	code {
		@apply bg-indigo-500 bg-opacity-10 rounded px-1;
		@apply tracking-normal;
	}
	img {
		@apply border-3 border-black;
		@apply rounded;
	}
	.image-card {
		@apply lg:w-1/2 relative flex-grow;
		@apply space-y-2 p-1.5;
	}
	.image-card h4 {
		@apply text-xl font-bold;
		@apply absolute top-0;
		@apply bg-black text-white px-2 rounded-tl;
	}
</style>
