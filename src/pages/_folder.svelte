<script lang="ts">
  import DotsBg from '../components/DotsBg.svelte'
  import meta from '../meta.json'
</script>

<svelte:head>
  <meta name="description" content={meta.description}>
</svelte:head>

<DotsBg>
  <main>
    <slot/>
  </main>
</DotsBg>
