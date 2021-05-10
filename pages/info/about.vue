<template>
  <div class="page">
    <section class="container">
      <div>
        <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">About Us</h4>
        <b-row>
          <b-col md="8">
            <h5>From 4 Life Productions..</h5>
            <p>Founded in 2020, we are an online radio station focussing on all things gaming.&nbsp;</p>
            <p>We are broadcast 24-hours a day so we can be with you wherever you are in the world.<br><br>
              We try to be community focussed with news, features and discussions about upcoming games and
              provide a service tailored towards the listeners. Holding listener surveys to ascertain what
              people want to listen to - instead of having a program schedule it all.<br><br>
              We also will have some amazing giveaways for our awesome listeners. Watch this space.</p><p>
              <a href="https://cdn.discordapp.com/attachments/651890022710116352/779429446967885824/PP_RR_PDF.pdf" target="_blank">
              Privacy Policy</a> |
              <a href="https://reachradio.co.uk/terms/alexa">Alexa Terms</a>
            </p>
          </b-col>
          <b-col md="4">
            <img class="w-100 h-100 imagechange"
                 src="~/assets/images/main/about.jpg">
          </b-col>
        </b-row>
        <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Become A Supporter</h4>
        <b-row>
          <b-col md="7">
            <p>Do you like what we are doing? Become a supporter today and head to our Patreon site.
            <p>
            <h4>Why should I support Reach?</h4>
            <p>This is a big new project for the community. We want to bring the whole gaming community together and we
              would like <strong>you</strong> to be a part of helping us get off of the ground. We don't just want to
              aim for radio, we aim for the latest community news, the latest TruckersMP travel, events and even
              podcasts. We all need to start somewhere, and we'd like <strong>you</strong> to help this effort.</p>
          </b-col>
          <b-col md="5">
            <a href="https://www.patreon.com/4lifeproductions" target="_blank"><img
              class="w-100 h-100 imagechange"
              src="https://radiopanel.s3.nl-ams.scw.cloud/8c82e6db-b354-49ca-839b-97b9337a0f10.png"/></a>
          </b-col>
        </b-row>
        <b-row>

        </b-row>
        <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Our Patrons</h4>

        <b-container class="patreons">
          <b-row class="patreons-row">
            <b-col style="width:150px" :key="patreon.first_name" sm="2" v-for="patreon in patreons"><img :src="patreon.image_url"
                                                                                     class="patreons-img imagechange"><br>
              <p class="patreons_text">{{patreon.first_name}}</p></b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
  import axios from 'axios'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)

  export default {
    head: {
      title: 'Reach - About',
      meta: [
        {hid: 'description', name: 'description', content: 'Find out more about Reach'}
      ],
    },
    data() {
      return {
        patreons: []
      }
    },
    mounted: function () {
      axios.get(`#`)
        .then((res) => {
          this.patreons = res.data;
        })
    }

  }

</script>

<style>
  .patreons-img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .patreons-row {
    text-align: center;
  }

  blockquote {
    border-left: 2px solid silver;
    margin: 1em 2em;
    padding: 0 0 0em 1em;
  }
</style>
