<template>
  <div>
      <snow></snow>
      <fireworks></fireworks>
      <top-header></top-header>
      <section class="container">

      </section>
      <nuxt/>
      <thefooter></thefooter>
  </div>
  
</template>

<script>
  // Importing the components to include as html.
  import header from '~/components/layout/header.vue'
  import Fireworks from '~/components/misc/Fireworks.vue'
  import Snow from '~/components/misc/Snow.vue'
  import axios from 'axios'
  import thefooter from '~/components/layout/thefooter.vue'
  export default {
    components: {
      'top-header': header,
      'thefooter': thefooter,
      'snow': Snow,
      'fireworks': Fireworks,
    },
    head: {
      bodyAttrs: {
        class: 'body'
      }
    },
    methods: {

    }
  }
</script>
<style>
</style>
