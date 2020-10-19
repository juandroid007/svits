<script lang="ts">
  import Footer from '../components/Footer.svelte'
  import DotsBg from '../components/DotsBg.svelte'
</script>

<DotsBg>
  <div class="flex flex-col w-full min-h-screen">
    <main class="flex justify-center flex-grow h-full">
      <slot/>
    </main>
    <Footer/>
  </div>
</DotsBg>
