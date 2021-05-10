<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <p v-html="terms.fields.content"></p>
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
      title: 'Reach - Privacy Policy',
    },
    data() {
      return {
        pageNumber: 0, // default to page 0
        fields:{content: "<p>Loading</p>"},
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/page-types/0c2f9185-e841-429d-89fd-51b3065d6b13/page`, config)
        .then((res) => {
          return {terms: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Policy not found'})
        })
    },
  }
</script>

<style>

</style>
