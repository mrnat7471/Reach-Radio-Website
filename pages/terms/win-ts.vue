<template>
  <div class="page" style="padding-top: 10px;padding-bottom: 10px;">
    <section class="container">
    <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3" style="background-color: #003d91;">
            <h4 style="padding-right: 10px;">Terms & Conditions For Reach Radio Competitions</h4>
          </div>
      <div style="padding-bottom: 50px;">
      <p style="padding-top:15px;">The Terms and Conditions for Reach Radio latest Competitions are available below:</p>

      <div v-for="term in terms" :key="term.uuid">
        <a :href="term.fields.competitionTS">{{term.fields.competitionName}}</a>
      </div>
      </div>
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
    data() {
      return {
        pageNumber: 0, // default to page 0
        fields:{competitionName: "Comp", competitionTS: "urlcomp"},
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/98b3c37a-a9e2-44a5-93aa-34fcee463b98/content`, config)
        .then((res) => {
          return {terms: res.data._embedded}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Competition not found'})
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

</style>