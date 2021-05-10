<template>
  <div class="page">
  <div class="container" style="padding-bottom: 5px;padding-top:10px">
      <div v-if="error.statusCode === 404">
      <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Page Not Found</h3>
      <p class="lead">We were unable to find this page.</p>
      </div>
      <div v-else>
      <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Error has Occurred</h3>
      <p class="lead">Seems like something happened and we can't serve you this page..</p>
      <p>Error {{error.statusCode}}: {{error.message}}</p>
      <p>{{error}}</p>
      </div>

    <nuxt-link to="/">Home page</nuxt-link>
  </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
