{#if level === 1}
  <h1 class="text-6xl">
    <slot />
  </h1>
{:else if level === 2}
  <h2 class="text-5xl">
    <slot />
  </h2>
{:else if level === 3}
  <h3 class="text-4xl">
    <slot />
  </h3>
{:else if level === 4}
  <h4 class="text-3xl">
    <slot />
  </h4>
{:else if level === 5}
  <h5 class="text-2xl">
    <slot />
  </h5>
{:else if level === 6}
  <h6 class="text-xl">
    <slot />
  </h6>
{:else}
  <h7 class="text-lg">
    <slot />
  </h7>
{/if}

<script lang="ts">
  export let level: number = 1;
</script>
