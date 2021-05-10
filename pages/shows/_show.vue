<template>
  <div class="page" id="news3">
    <section class="container pt-4 pb-1">
      <b-row>
        <b-col md="9">
          <div style="text-align:center;padding-top:20px;margin: auto;width: 50%;">
            <div v-if="shows2.fields.backgroundImage" style="max-width: 500px;" class="shows-background" :style="{ backgroundImage: `url('${shows2.fields.backgroundImage}')` }">
              <div style="text-align:center;"><img :src="shows2.fields.presenterImage" style="height:310px;" /></div>
            </div>
            <div v-else style="max-width: 500px;" class="shows-background">
              <div style="text-align:center;"><img :src="shows2.fields.presenterImage" style="height:310px;" /></div>
            </div>
          </div>
          <div style="text-align:center!important">
            <h2 class="border3 mt-3 mb-1"><b>{{shows2.fields.show}} with {{shows2.fields.presenter}} {{shows2.fields.presenterLastName}}</b></h2>
            <p class="mb-3 pt-3">{{shows2.fields.showInformation}}</p>
          </div>

          <h4 class="border3 mt-3 mb-3"><b>Catch up with my latest shows:</b></h4>
          <div v-for="show in shows" :key="show.fields" v-if="shows2.fields.presenter == show.fields.presenter">
            <div v-for="showtime in presentertimes" :key="showtime" v-if="show.fields.presenter == showtime.name">
            <div v-if="show.fields.unixtimestamp > showtime.time">
                <b-row class="pb-2">
                  <b-col>
                    <n-link style="text-decoration: underline;" class="catch_up_color" :to="'/shows/catchup/' + show.fields.slug">{{show.fields.showName}}</n-link>
                  </b-col>
                  <b-col>
                    <n-link class="catch_up_color" :to="'/shows/catchup/' + show.fields.slug"><button class="btn btn-primary buttonchange" style="float:right;margin-right:15px;">Listen now</button></n-link>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
          <p style="text-align:center">Check out more shows on our Mixcloud <a href="https://www.mixcloud.com/ReachRadioUK/" target="_blank">here</a>.</p>
        </b-col>
        <b-col class="pb-3" v-if="shows2.fields.showSponsorLink">
          <h4 style="text-align:center">Sponsored By<br>
            <a :href="shows2.fields.showSponsorLink" target="_blank">
              <img class="pt-3" :src="shows2.fields.showSponsorImg" style="max-width: 250px;margin-right: 5px;" />
            </a>
          </h4>
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

  export default {
    components: {
    },
    data() {
      return{
        presentertimes: [
          { name: "Ethan", time: moment().unix()-604800},
          { name: "Joseph", time: moment().unix()-604800},
          { name: "Mark", time: moment().unix()-604800},
          { name: "Arran", time: moment().unix()-1814400},
          { name: "George", time: moment().unix()-3024000},
          { name: "Flaming", time: moment().unix()-1814400},
          { name: "Oliver", time: moment().unix()-1814400},
          { name: "Ellis", time: moment().unix()-3024000},
          { name: "Talha", time: moment().unix()-3024000},
          { name: "Ben", time: moment().unix()-3024000},
          { name: "Matt", time: moment().unix()-3024000},
          { name: "Zac", time: moment().unix()-3024000},
          { name: "Joe", time: moment().unix()-3024000},
          { name: "Wayne", time: moment().unix()-3024000},
          { name: "Brooklyn", time: moment().unix()-3024000}
        ],
        currentTime: moment().unix()-1814400,
        shows: [],
        shows2: {
          fields:{}},
        images: [],
      }
    },
    mounted: function(){
      axios.get(`#`)
        .then((res) => {
          this.shows2 = res.data
        }),
      axios.get(`#`)
        .then((res) => {
          this.shows = res.data._embedded.sort((b, a) => parseInt(a.fields.unixtimestamp) - parseInt(b.fields.unixtimestamp))
        })
    },
    filters: {
      hour: function (date) {
        return moment.unix(date).format('D');
      }
    },
  }
</script>

<style>
.shows-background{
  background-image: url("~assets/images/banner/banner.jpg");
  background-position: top;
  background-attachment: fixed;
  background-size: cover;
  background-attachment: scroll;
  background-repeat: no-repeat;
}


  @media (max-width: 990px) {
    .shows-background {
      display:none;
    }
  }
</style>
