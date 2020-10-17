<script>
  import { fly } from 'svelte/transition'
  import Logo from '../components/logo/Logo.svelte'
</script>

<style>
</style>

<div class="container p-6 md:px-16">
  <div class="flex flex-col items-center w-full mb-6">
    <a in:fly={{duration: 500, y: -20}} href="/" title="Go to home"><Logo/></a>
  </div>

  <div class="layout" in:fly={{duration: 500, y: -20}}>
    <slot />
  </div>
</div>
