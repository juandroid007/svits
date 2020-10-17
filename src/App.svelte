<script lang="ts">
  import './sw/sw'

  import { Router } from '@roxi/routify/runtime'
  import { routes } from '../.routify/routes'

  import { isChangingPage } from '@roxi/routify/runtime'
  import NProgress from 'nprogress'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($isChangingPage) {
      NProgress.start()
    }

    if (!$isChangingPage) {
      NProgress.done()
    }
  }

  import { preferences } from './stores/preferences'

  $: document.documentElement.classList.toggle('dark', $preferences.darkMode)
</script>

<Router {routes} />
