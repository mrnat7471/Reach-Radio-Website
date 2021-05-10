<template>
  <div class="page">
    <section class="container pt-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">News</h4>
        </div>
        <b-row align-h="center" style="padding-bottom: 50px;">
          <div :key="article.uuid" v-for="article in news" class="mb-2 ml-2">
            <div>
              <n-link :to="'/news/' + article.slug" class="news-link" style="text-decoration: none;">
                <div class="nbox" style="width: 240px;height: 240px;">
                  <v-lazy-image src-placeholder="~assets/images/main/r-small.png" :src="article.featuredImage" style="width: 240px; height: 165px; object-fit: cover" class="imagechange" />
                  <p class="nbox-text ml-1 mr-1 pt-3" style="text-align: center;">{{article.title}}</p>
                </div>
              </n-link>
            </div>
          </div>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>

  import axios from 'axios'
  import moment from 'moment'
  import VLazyImage from "v-lazy-image"
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
    components: {
    VLazyImage
  },
    head: {
      title: 'Reach - All News',
    },
    data() {
      return {
        pageNumber: 0  // default to page 0
      }


    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/posts?pagesize=500`, config)
        .then((res) => {
          return {news: res.data._embedded}
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
