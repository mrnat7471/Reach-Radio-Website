<template>
    <div class="page pb-1">
        <section class="container pt-3">
            <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 mt-3 standardheader" style="display: flex;">
                <h4 style="padding-right: 10px;">Podcasts</h4>
            </div>
            <b-row align-h="center" style="padding-bottom: 50px;">
                <div :key="podcast.uuid" v-for="podcast in podcasts">
                    <n-link :to="'/podcasts/' + podcast.slug" class="news-link" style="text-decoration: none;">
                        <div class="podcasts nbox" style="width:255px;margin:5px;">
                            <img v-if="podcast.graphic" style="margin: 3px;width:250px;height:250px;object-fit: cover;" :src="podcast.graphic">
                            <img v-else style="margin: 3px;width:250px;height:250px;object-fit: cover;" src="~/assets/images/main/r-small.webp">
                            <h6 style="text-align: center;margin-top:10px;padding-bottom:10px;">{{podcast.title}}</h6>
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

  export default {
    head: {
      title: 'Reach - Podcasts',
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/podcasts`, config)
        .then((res) => {
          return {podcasts: res.data._embedded}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
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