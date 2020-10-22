---
title: Api demo
---

<script>
  import { ready } from '@roxi/routify'
  
  let quote

  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => { quote = json.quote })
    .finally($ready)
</script>

<svelte:head>
{#if quote}
  <meta name="description" content="Random Kanye tweet: {quote}"/>
{/if}
</svelte:head>

<div>
{#if quote}

## Kanye once said on Twitter:

> {quote}

{:else}

## Loading...

{/if}
</div>
