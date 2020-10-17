<script>
  import meta from '../meta.json'
  import { updateAvailable } from '../sw/store'
  import { preferences } from '../stores/preferences'
  import Button from '../components/Button.svelte'
  import Logo from '../components/logo/Logo.svelte'

  import { fly } from 'svelte/transition'

  let dark
  $: dark = $preferences.darkMode
</script>

<svelte:head>
  <title>Svits - A nice SPA stack</title>
</svelte:head>

<div class="container flex flex-col items-center min-h-screen p-6 md:px-16 md:flex-row">
  <div class="mb-6 md:w-1/2 md:mb-0">
    <Logo animate/>
  </div>
  <div class="flex flex-col w-full md:w-1/2" in:fly={{duration: 500, y: -20}}>
    <p class="mb-4 text-justify">{meta.description}</p>
    <a class="mb-6 text-blue-600 hover:underline" href="/features">Cool features -&gt</a>

    <div class="flex -m-2">
      <Button
        class="w-1/2 m-2 font-bold text-center"
        href="https://github.com/juandroid007/svits"
        >Source code</Button
      >
      <Button
        secondary
        on:click={() => $preferences.darkMode = !$preferences.darkMode}
        class="w-1/2 m-2 font-bold"
        >Set {dark ? 'light' : 'dark'} theme</Button
      >
    </div>
  </div>
</div>
