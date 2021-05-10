<template>
  <section class="footer-section" style="margin-bottom: 0px;">
    <b-container>
      <b-row style="padding-top: 20px;">
        <b-col sm="6" class="mb-2" style="font-weight: bold;"><span>Links</span><br><a href="https://cdn.discordapp.com/attachments/651890022710116352/779429446967885824/PP_RR_PDF.pdf" target="_blank">Privacy Policy</a><br><n-link to="/terms/alexa">Alexa Policy</n-link><br><a target="_blank" href="https://www.paypal.me/4lifeproductions">Donate</a><br><ColorModePicker /></b-col>
        <b-col sm="6" class="mb-2" style="font-weight: bold;"><p>Find us elsewhere..</p><a target="_blank" href="https://twitter.com/ReachRadioUK"><font-awesome-icon class="icon-footer" style="font-size: 30px;margin-right: 5px;" :icon="['fab', 'twitter-square']" /></a>
        <a target="_blank" href="https://www.instagram.com/reachradiouk/"><font-awesome-icon class="icon-footer" style="font-size: 30px;margin-right: 5px;" :icon="['fab', 'instagram']" /></a>
        <a target="_blank" href="https://discord.reachradio.co.uk"><font-awesome-icon class="icon-footer" style="font-size: 30px;margin-right: 5px;" :icon="['fab', 'discord']" /></a>
        <a target="_blank" href="https://www.facebook.com/reachradioonline"><font-awesome-icon class="icon-footer" style="font-size: 30px;" :icon="['fab', 'facebook']" /></a></b-col>

      </b-row>
          <p style="padding-bottom: 20px; margin-bottom: 0px;">&copy Reach Radio 2020 | <strong>Created by</strong> Arran & Nathan | <strong>Powered by</strong><a target="_blank" href="https://fyfeweb.com" class="fyfe-footer" style="text-decoration: none"> FyfeWeb</a></p>
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

</style>
