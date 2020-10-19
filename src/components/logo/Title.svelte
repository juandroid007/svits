<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'

  export let text = 'SVITS'
  export let visible
  export let animate
  export let delay = 0
  export let small

  onMount(() => {
    visible = true
  })
</script>

<style>
  label {
    position: absolute;
    top: 1em;
    left: 1em;
  }

  .title {
    font-size: 5rem;
    letter-spacing: 0.12em;
    font-weight: 400;
  }

  .small {
    font-size: 3rem;
  }

  .title span {
    will-change: filter;
  }
</style>

{#if visible}
  <!--div class="centered" out:fly={{y: -20, duration: 800}}-->
  <h1 class="title" class:small>
    {#each text as char, i}
      {#if animate}
        <span
          class="text-gray-800 uppercase dark:text-white duration-200 bg-blue"
          in:fade={{delay: delay + i * (800 / text.length), duration: 800}}
        >{char}</span>
      {:else}
        <span
          class="text-gray-800 uppercase dark:text-white duration-200 bg-blue"
        >{char}</span>
      {/if}
    {/each}
  </h1>
{/if}
