<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import Button from '../components/Button.svelte'
  import Logo from '../components/logo/Logo.svelte'
  import Title from '../components/logo/Title.svelte'
  import { url } from '@roxi/routify/runtime'
  import { prefetch, metatags } from '@roxi/routify'

  import { fly } from 'svelte/transition'
  // import { getCollection } from '../collections'

  let dark
  $: dark = $preferences.darkMode

  // let articles = getCollection('posts', { field: 'title', order: 'cresc' }).elements

  metatags.title = svitsConfig.name
</script>

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
      <div class="flex flex-wrap -m-2 sm:-m-4">
        <a class="m-2 text-blue-600 sm:m-4 hover:underline" use:prefetch href={$url('./features')}>View cool features -&gt</a>
        <a class="m-2 text-blue-600 sm:m-4 hover:underline" use:prefetch href={$url('./api')}>View api demo -&gt</a>
      </div>

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
