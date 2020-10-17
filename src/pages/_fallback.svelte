<script lang="ts">
  import { onMount } from 'svelte'
  import { url } from '@roxi/routify/runtime'
  import { fly } from 'svelte/transition'
  let visible = false
  onMount(() => {
    setTimeout(() => visible = true, 100)
  })
</script>

<style>
  .huge {
    font-size: 12rem;
  }

  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<svelte:head>
  <title>Svits - 404</title>
</svelte:head>

<div class="relative h-screen">
  <div class="overflow-hidden e404">
    {#if visible}
      <div class="huge" in:fly={{y: -20, duration: 800}}>404</div>
    {/if}
    <div class="flex flex-col items-center big">
      Page not found.
      <!-- link to the parent folder of _fallback.svelte -->
      <a class="text-blue-600 hover:underline" href={$url('/')}>Go to home -&gt</a>
    </div>
  </div>
</div>
