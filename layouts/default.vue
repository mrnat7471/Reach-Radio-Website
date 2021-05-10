<template>
  <div>
    <div v-if="obitToggle == 'active'" class="obit">
      <div style="text-align:center;">
            <div>
                <n-link to="/obit">
                    <img style="max-width: 200px;margin: auto !important;" src="https://nathan7471.xyz/img/lAco9/TIlowaGu92.png/raw">
                </n-link>
                <obitplayer></obitplayer>
                <div style="color:white">
                  <p><br></p>
                  <h1>More information to be released shortly</h1>
                  <!--<h1>HRH Prince Philip,<br>The Duke of Edinburgh</h1>
                  <p><img src="https://pbs.twimg.com/media/EyhruuVWQAAku2D?format=jpg&amp;name=large" alt="Philip" style="max-width: 300px;"></p>
                  <h4>1921 - 2021</h4>
                  <p><br></p>-->
                </div>
            </div>
        </div>
    </div>
    <div v-else>
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
  import obitplayer from '~/components/misc/obit-player.vue'
  export default {
    components: {
      'top-header': header,
      'thefooter': thefooter,
      'obitplayer': obitplayer
    },
    head: {
      bodyAttrs: {
        class: 'body'
      }
    },
    data() {
        return {
          obitToggle: process.env.OBIT,
        }
    },
  }
</script>
<style>
.obit{
  background-color: #181a1b;
  filter:grayscale(100%)
}
</style>
