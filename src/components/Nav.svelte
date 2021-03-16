<nav class="p-1">
  <ul class="flex space-x-4 text-lg">
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="."
        class:active={isPageActive(undefined)}>me</a
      >
    </li>
    <li>
      <a
        aria-current={segment === 'resume' ? 'page' : undefined}
        href="resume"
        class:active={isPageActive('resume')}
        >me <i class="text-xs">(but formal)</i></a
      >
    </li>
    <li>
      <a
        aria-current={segment === 'projects' ? 'page' : undefined}
        href="projects"
        class:active={isPageActive('projects')}>projects</a
      >
    </li>

    <li>
      <a
        sapper:prefetch
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog"
        class:active={isPageActive('blog')}>blog</a
      >
    </li>
  </ul>
</nav>

<script lang="ts">
  export let segment: string;

  $: isPageActive = (page: string | undefined) => segment === page;
</script>

<style lang="postcss">
  .active {
    @apply p-1 rounded bg-green-300;
  }
</style>
