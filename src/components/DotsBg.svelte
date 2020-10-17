<script>
  import { fly } from 'svelte/transition'
</script>

<div class="relative min-h-screen">
  <div in:fly={{duration: 1000}} class="hidden overflow-hidden -z-10 sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
    <div class="relative h-full mx-auto text-gray-300 max-w-screen-xl dark:text-gray-800">
      <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
        <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
      </svg>
      <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
        <pattern id="svg-pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
      </svg>
    </div>
  </div>
  <div class="relative flex items-center h-full">
    <div class="z-10 mx-auto max-w-screen-xl">
      <slot/>
    </div>
  </div>
</div>
