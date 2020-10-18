<script>
  import { fly } from 'svelte/transition'
  import { quintInOut } from 'svelte/easing'
</script>

<div class="relative min-h-screen">
  <div class="hidden overflow-hidden -z-10 sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
    <div class="relative h-full mx-auto text-gray-300 max-w-screen-xl dark:text-gray-600">
      <svg
        transition:fly={{x: -150, y: 150, duration: 1000, opacity: 1, easing: quintInOut}}
        class="absolute right-full transform translate-y-1/4 translate-x-1/10 md:translate-x-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
        <pattern id="svg-pattern-squares-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
      </svg>
      <svg
        transition:fly={{x: 150, y: -150, duration: 1000, opacity: 1, easing: quintInOut}}
        class="absolute left-full transform -translate-y-3/4 -translate-x-1/10 md:-translate-x-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
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
    <div class="container z-10 px-6 mx-auto md:w-7/10 md:px-16">
      <slot/>
    </div>
  </div>
</div>
