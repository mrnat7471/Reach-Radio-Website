<template>
  <div class="page">
    <section class="container pt-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">About Us</h4>
        </div>
        <b-row>
          <b-col md="8">
            <h5>From 4 Life Productions..</h5>
            <p v-html="about.fields.richText"></p>
          </b-col>
          <b-col md="4">
            <img class="w-100 h-100 imagechange"
                 :src="about.fields.image">
          </b-col>
        </b-row>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">Become A Supporter</h4>
        </div>
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
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">Our Patrons</h4>
        </div>

        <b-container class="patreons">
          <b-row class="patreons-row" align-h="center">
            <b-col sm="2"><img
              class="patreons-img imagechange"
              src="https://media.discordapp.net/attachments/734843922131583027/740919079325663272/Fast_Cargo_truck_100x100.jpg"><br>
              <p class="patreons_text">Fast Cargo VTC</p></b-col>
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
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }

  export default {
    head: {
      title: 'Reach - About',
      meta: [
        {hid: 'description', name: 'description', content: 'Find out more about Reach'}
      ],
    },
    data() {
      return {
        patreons: [],
        about: {
          fields: {
            richText: "",
            image: "https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/0931e8a0-063b-4cc6-a7f7-a4b7a9c1e3e2.jpg",
          }
        }
      }
    },
    mounted: function () {
      axios.get('https://api.radiopanel.co/api/v1/patreons?random=true', config)
        .then((res) => {
          this.patreons = res.data;
        })
        axios.get('https://api.radiopanel.co/api/v1/page-types/a8d2913d-5a05-4b30-ae7b-f613df32b047/page', config)
        .then((res) => {
          this.about = res.data;
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
