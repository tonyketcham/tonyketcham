<svelte:head>
  <title>{status} - Tony's Place</title>
</svelte:head>

<section class="p-16">
  <div class="relative w-max">
    <div class="absolute left-0 right-0 z-0 h-6 bg-yellow-200 bottom-2" />
    <h1 class="relative z-10 font-mono text-6xl font-semibold">
      {status}
    </h1>
  </div>

  <p class="ml-0.5 tracking-wide font-mono text-gray-700">{error.message}</p>
</section>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

<script lang="ts">
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === 'development';
</script>
