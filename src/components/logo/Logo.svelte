<script>
  import { onMount } from 'svelte'
  import { quintOut } from 'svelte/easing'
  import { fade, draw, fly } from 'svelte/transition'
  import { expand } from './expand'
  import { inner, outer } from './shape'
  import { preferences } from '../../stores/preferences'
  $: dark = $preferences.darkMode
  export let visible
  export let animate
  onMount(() => {
    visible = true
  })
</script>

<style>
  .logo {
    margin: auto;
    position: relative;
    width: 246px;
    height: 320px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: white;
    opacity: 1;
  }

  path.dark {
    fill: #222;
  }

  label {
    position: absolute;
    top: 1em;
    left: 1em;
  }

  .centered {
    font-size: 5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    letter-spacing: 0.12em;
    font-weight: 400;
  }

  .centered span {
    will-change: filter;
  }
</style>

<div class="logo">
  {#if visible}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
      <!--g out:fade={{duration: 200}} opacity={dark ? 1 : 0.8}-->
      <g opacity={dark ? 1 : 0.8}>
        {#if animate}
          <path
            class:dark
            in:expand={{duration: 400, delay: 1000, easing: quintOut}}
            style="stroke: #1c63f2; fill: #1c63f2; stroke-width: 50;"
            d={outer}
            />
          <path
            class:dark
            in:draw={{duration: 1000}}
            style="stroke: #1c63f2; stroke-width: 1.8"
            d={inner}
            />
        {:else}
          <path
            class:dark
            style="stroke: #1c63f2; fill: #1c63f2; stroke-width: 50;"
            d={outer}
            />
          <path
            class:dark
            style="stroke: #1c63f2; stroke-width: 1.8"
            d={inner}
            />
        {/if}
      </g>
    </svg>

    <!--div class="centered" out:fly={{y: -20, duration: 800}}-->
    <div class="centered">
      {#each 'SVITS' as char, i}
        {#if animate}
          <span
            class="text-gray-800 dark:text-white duration-200 bg-blue"
            in:fade={{delay: 1000 + i * 150, duration: 800}}
          >{char}</span>
        {:else}
          <span
            class="text-gray-800 dark:text-white duration-200 bg-blue"
          >{char}</span>
        {/if}
      {/each}
    </div>
  {/if}
</div>
