<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
	import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

	const url = '/Lowpoly_tree_sample';
	let mesh: THREE.Mesh;

	const mtlLoader = new MTLLoader();
	const objLoader = new OBJLoader();

	// Load the object and material resources
	mtlLoader.load(url + '.mtl', (mtl) => {
		mtl.preload();
		objLoader.setMaterials(mtl);

		objLoader.load(url + '.obj', (event) => {
			mesh = event.children[0] as THREE.Mesh;
			console.log(mesh);
			return mesh;
		});
	});

	async function loadMesh(mesh: THREE.Mesh) {
		return new Promise((resolve: (value: THREE.Mesh) => any) => {
			if (mesh) {
				resolve(mesh);
			}
		});
	}

	// Wait for the mesh to load before adding it to the scene
	$: meshPromise = loadMesh(mesh);

	let spin = 0;

	SC.onFrame(() => {
		spin += 0.01;
	});
</script>

<SC.Canvas antialias background={new THREE.Color('transparent')} shadows>
	{#await meshPromise then mesh}
		<SC.Mesh
			geometry={mesh.geometry}
			material={mesh.material}
			rotation={[0, spin, 0]}
			position={[0, -10, 1]}
			scale={[0.75, 0.75, 0.75]}
		/>
	{/await}
	<SC.PerspectiveCamera position={[5, 5, 30]} />
	<SC.OrbitControls enableZoom={true} maxPolarAngle={Math.PI * 0.51} />
	<SC.AmbientLight intensity={0.6} />
	<SC.DirectionalLight intensity={0.6} position={[-2, 3, 2]} shadow={{ mapSize: [2048, 2048] }} />
</SC.Canvas>
