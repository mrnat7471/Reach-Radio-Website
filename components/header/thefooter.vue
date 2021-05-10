<template>
  <section class="footer-section" style="margin-bottom: 0px;">
    <b-container>
      <b-row style="padding-top: 10px;">
        <b-col class="mb-1" style="font-weight: bold;">
          <p style="padding-top:5px;">&copy Reach Radio 2020 - 2021 | <strong>Created by</strong> Arran & <a target="_blank" href="https://nathan7471.dev" class="fyfe-footer" style="text-decoration: none">Nathan</a> | <strong>Powered by</strong><a target="_blank" href="https://fyfeweb.com" class="fyfe-footer" style="text-decoration: none"> FyfeWeb</a></p>
        </b-col>
        <b-col sm=1.5 style="font-weight: bold;"><ColorModePicker /></b-col>
        <b-col sm=2 class="mb-1" style="font-weight: bold;padding-top:5px;">
          <a target="_blank" href="https://twitter.com/ReachRadioUK"><font-awesome-icon class="icon-footer" style="font-size: 25px;margin-right: 5px;" :icon="['fab', 'twitter-square']" /></a>
          <a target="_blank" href="https://www.instagram.com/reachradiouk/"><font-awesome-icon class="icon-footer" style="font-size: 25px;margin-right: 5px;" :icon="['fab', 'instagram']" /></a>
          <a target="_blank" href="https://discord.reachradio.co.uk"><font-awesome-icon class="icon-footer" style="font-size: 25px;margin-right: 5px;" :icon="['fab', 'discord']" /></a>
          <a target="_blank" href="https://www.facebook.com/reachradioonline"><font-awesome-icon class="icon-footer" style="font-size: 25px;" :icon="['fab', 'facebook']" /></a>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
  import ColorModePicker from '@/components/ColorModePicker'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)
  export default {
    components: {
      ColorModePicker
    }
  }
</script>

<style>
.icon-footer:hover{
  top: -3px;
}
.icon-footer{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
</style>
