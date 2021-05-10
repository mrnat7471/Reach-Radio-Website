<template>
  <div class="page">
  <div class="container" style="padding-bottom: 5px;padding-top:10px">
      <div v-if="error.statusCode === 404">
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3" style="background-color: #003d91; display: flex;">
        <h4 style="padding-right: 10px;color:white">Page not found</h4>
      </div>
      <p class="lead">We were unable to find this page.</p>
      </div>
      <div v-else>
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3" style="background-color: #003d91; display: flex;">
        <h4 style="padding-right: 10px;color:white">Error Occured</h4>
      </div>
      <p class="lead">Seems like something happened and we can't serve you this page..</p>
      <p>Error {{error.statusCode}}: {{error.message}}</p>
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