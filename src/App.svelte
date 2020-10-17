<script lang="ts">
  import './sw/sw'

  import { Router } from '@roxi/routify/runtime'
  import { routes } from '../.routify/routes'

  import { preferences } from './stores/preferences'

  $: document.documentElement.classList.toggle('dark', $preferences.darkMode)
</script>

<Router {routes} />
