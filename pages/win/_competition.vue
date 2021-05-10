<template>
  <div class="page" style="padding-top: 10px;padding-bottom: 10px;">
    <section class="container">
    <b-row>
    <b-col md="9">
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 standardheader">
            <h4 style="padding-right: 10px;">{{compwin.fields.name}}</h4>
          </div>
          <div :style="{ backgroundImage: `url('${compwin.fields.image}')` }" class="win-bg"></div>
          <div class="pt-3 text-white pl-3 pr-3 mb-4 standardheader">
            <p style="padding-right: 10px; padding-bottom: 15px; height: 100%;">Ends at {{compwin.fields.endsAt}}</p>
          </div>
      <p v-html="compwin.fields.description"></p>
      <a href="/terms/win-ts"><p>Terms & Conditions apply</p></a>
      </b-col>
      <b-col>
        <b-row align-h="center">
        <div v-if="compwin.fields.sponsored == true" style="text-align:center">
          <img class="pt-3" style="max-width: 250px;margin-right: 5px;"
            :src="compwin.fields.sponsorImage"/>
            <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 standardheader" style="max-width: 250px;">
                <h5 style="padding-right: 10px;text-align: center;">Sponsored By</h5><h4 style="text-align: center;">{{compwin.fields.sponsorName}}</h4>
              </div>
                <p class="mt-2" style="text-align: center;">{{compwin.fields.sponsorMessage}}</p>
        </div>
        </b-row>
          </b-col>
          </b-row>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)


  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    data(){
      return{
        compwin: []
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/76286d43-757d-4ad7-86d9-48f44994fc9c/content/${params.competition}`, config)
        .then((res) => {
          return {compwin: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Competition not found'})
        })
    },
  }
</script>

<style>
  .win-bg {
    height: 375px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
