<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 mt-3 standardheader" style="display: flex;">
        <h4 style="padding-right: 10px;">Latest Competitions</h4>
      </div>
      <div v-if="comp.length < 1">
      <h4>We are Reach Radio.</h4>
      <p>Thank you for your interest in taking part in one of our competitions. Unfortunately, at the moment, we aren't running any. Please check back later.</p>
      <h4>How do we run competitions?</h4>
      <p>Our wonderful Patreons pay for these competitions. You can support us by becoming one <a href="https://www.patreon.com/4lifeproductions" target="_blank">here</a></p>
      </div> 

      <b-row align-h="center" style="padding-bottom: 50px;">
          <!-- Per Comp -->
          <div class="mb-2 ml-2" v-for="win in comp" :key="win.uuid">
              <n-link :to='"/win/" + win.slug' class="news-link" style="text-decoration: none;">
                <div class="nbox" style="width: 300px;height: 220px;">
                 <div :style="{ backgroundImage: `url('${win.fields.image}')` }" class="win-div">
                            <p class="enter-win">Enter Now</p></div>
                  <div style="border-top: 5px solid;border-color: #003d91;"><p class="mt-2 ml-1 mr-1" style="text-align: center;">{{win.fields.name}}</p></div>
                </div>
              </n-link>
          </div>


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
    head: {
      title: 'Reach - Competitions',
      meta: [
        {hid: 'description', name: 'description', content: 'You can win with Reach Radio.'}
      ],
    },
    data() {
      return {
        pageNumber: 0,  // default to page 0
        comp: []
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/76286d43-757d-4ad7-86d9-48f44994fc9c/content`, config)
        .then((res) => {
          return {comp: res.data._embedded}
          console.log(comp)
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Competitions not found'})
        })
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    }
  }
</script>

<style>
  .win-div {
    width: 300px; 
    height: 175px; 
    object-fit: cover;
    background-size: cover !important;
    position: relative;
  }
  .enter-win {
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  background-color: #003d91;
  margin-bottom: 0px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
