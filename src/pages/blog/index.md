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

  let posts = getCollection('posts', { field: 'date', order: 'desc', isDate: true })
    .elements
    .map(e => {
      const d = new Date(e.date)
      const mm = d.getMonth() + 1 // getMonth() is zero-based
      const dd = d.getDate()
      const date = [(dd > 9 ? '' : '0') + dd, (mm > 9 ? '' : '0') + mm, d.getFullYear()].join('/')

      return {
        ...e,
	date, 
      }
    })
</script>
