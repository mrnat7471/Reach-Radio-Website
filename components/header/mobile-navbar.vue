<template>
  <div>
    <b-navbar class="react-nav" toggleable="xxl">
      <b-container>
        <n-link to="/"><b-navbar-brand ><img src="~assets/images/main/r-silver-icon.webp" width=37 /></b-navbar-brand></n-link>
        <n-link to="/listen"><b-navbar-toggle style="border:0px;"><font-awesome-icon :icon="['fas', 'cog']" style="font-size: 30px;color:white;"/></b-navbar-toggle></n-link>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCog} from '@fortawesome/free-solid-svg-icons'
library.add(faCog)
  export default {
    components: {
    },
  }
</script>
<style>
</style>