---
title: Api demo
---

<script>
  import { ready } from '@roxi/routify'
  
  let quote
  export let description
  $: if (quote) {
    description = `Random Kanye tweet: ${quote}`
  }

  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(json => { quote = json.quote })
    .finally($ready)
</script>

<div>
{#if quote}

## Kanye once said:

> {quote}

{:else}

## Loading...

{/if}
</div>
