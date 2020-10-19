<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import Button from '../components/Button.svelte'
  import Logo from '../components/logo/Logo.svelte'
  import Title from '../components/logo/Title.svelte'

  import { fly } from 'svelte/transition'

  let dark
  $: dark = $preferences.darkMode
</script>

<svelte:head>
  <title>{svitsConfig.name}</title>
</svelte:head>

<div class="flex flex-col flex-grow px-4">
  <div class="flex flex-col items-center py-6 my-auto -m-4 md:flex-row">
    <div class="m-4 md:w-1/2">
      <Logo title={false} animate delay={100} />
    </div>
    <div class="w-full m-4" in:fly={{duration: 500, y: -20}}>
      <div class="text-center md:text-left">
        <Title animate />
      </div>
      <p class="mb-4 text-justify">{svitsConfig.description}</p>
      <a class="text-blue-600 hover:underline" href="/features">View cool features -&gt</a>

      <div class="flex mt-4 -m-2">
        <Button
          class="w-1/2 m-2 font-bold text-center"
          href="https://github.com/juandroid007/svits"
          >Get started</Button
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
</div>
