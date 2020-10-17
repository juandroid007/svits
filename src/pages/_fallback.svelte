<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import Bg from '../components/DotsBg.svelte'
  import { url } from '@roxi/routify/runtime'
  import { fly } from 'svelte/transition'
  let visible = false
  onMount(() => {
    setTimeout(() => visible = true, 100)
  })
  onDestroy(() => visible = false)
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

<Bg>
  <div class="overflow-hidden e404">
    {#if visible}
      <div class="huge" transition:fly={{y: -20, duration: 800}}>404</div>
    {/if}
    <div class="flex flex-col items-center big">
      Page not found.
      <!-- link to the parent folder of _fallback.svelte -->
      <a class="text-blue-600 hover:underline" href={$url('/')}>Go to home -&gt</a>
    </div>
  </div>
</Bg>
