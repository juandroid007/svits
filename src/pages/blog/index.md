---
title: Blog
---

{#each posts as post}

<a href={post.url}>{post.date} - {post.title} -&gt</a>
<br/>

{/each}

<script>
  import { url } from '@roxi/routify/runtime'
  import { getCollection } from '../../collections'

  let posts = getCollection('posts', { field: 'date', order: 'desc', isDate: true }).elements
</script>
