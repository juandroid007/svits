<script>
  import { fly } from 'svelte/transition'
  import Logo from '../components/logo/Logo.svelte'
  import Title from '../components/logo/Title.svelte'

  export let title
</script>

<style>
  :global(.layout h1, .layout h2, .layout h3) {
    @apply text-gray-800;
    letter-spacing: 0.12em;
    font-weight: 400;
  }

  :global(.dark .layout h1, .dark .layout h2, .dark .layout h3) {
    color: white;
  }

  :global(.layout h1) {
    font-size: 2.5rem;
  }
  :global(.layout h2) {
    font-size: 2rem;
  }
  :global(.layout h3) {
    font-size: 1.5rem;
  }
</style>

<svelte:head>
  <title>Svits - {title}</title>
</svelte:head>

<div class="container p-6 md:px-16">
  <div class="flex flex-col items-center w-full mb-6">
    <a in:fly={{duration: 500, y: -20}} href="/" title="Go to home">
      <Logo width='128px'/>
    </a>
  </div>

  <div class="layout" in:fly={{duration: 500, y: -20}}>
    <div class="mb-6 border-b border-gray-500 border-dashed">
      <Title text={title} animate small />
    </div>
    <slot />
  </div>
</div>
