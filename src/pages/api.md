---
title: Api demo
---

<script>
  import { ready } from '@roxi/routify'
  
  let quote
  getData()

  async function getData() {
    const res = await fetch('https://api.kanye.rest/')
    const data = await res.json()
    quote = data.quote
    $ready()
  }
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
