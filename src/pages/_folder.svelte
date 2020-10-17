<script lang="ts">
  import meta from '../meta.json'
</script>

<svelte:head>
  <meta name="description" content={meta.description}>
</svelte:head>

<main>
  <slot/>
</main>
