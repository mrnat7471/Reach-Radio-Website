<template>
  <div class="page">
    <section class="container" style="padding-bottom:180px;">
      <div>
        <h5 class="border3 ml-1 mr-1 pt-4 mb-3">News</h5>
        <b-row class="pl-1">
          <div :key="article.uuid" v-for="article in news" class="mb-1 ml-1">
            <div class="news-container">
              <n-link :to="'/news/' + article.slug" class="news-link" style="text-decoration: none;">
                <div class="home-pbox" style="width: 160px;height: 210px;border-radius:2.5%;margin:5px;">
                  <v-lazy-image src-placeholder="~assets/images/main/r-small.webp" :src="'https://varnish.radiopanel.co/resize?url='+article.featuredImage+'&height=340'" style="width: 160px; height: 125px; object-fit: cover;border-top-left-radius:2.5%;border-top-right-radius:2.5%;" />
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
      return axios.get(`#`)
        .then((res) => {
          return {news: res.data._embedded.slice(0,25)}
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
.news-container:hover{
  top: -3px;
}
.news-container{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
</style>
