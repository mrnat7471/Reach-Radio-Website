<template>
  <div>
    <div>
      <top-header></top-header>
      <section class="container">
      </section>
      <nuxt/>
      <thefooter></thefooter>
    </div>
  </div>
  
</template>

<script>
  // Importing the components to include as html.
  import header from '~/components/header/header.vue'
  import thefooter from '~/components/header/thefooter.vue'
  import axios from 'axios'
  export default {
    components: {
      'top-header': header,
      'thefooter': thefooter,
    },
    head: {
      bodyAttrs: {
        class: 'body'
      }
    }
  }
</script>
<style>
.obit{
  background-color: #181a1b;
  filter:grayscale(100%)
}
</style>
