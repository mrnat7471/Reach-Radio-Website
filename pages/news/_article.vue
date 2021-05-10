<template>
  <div class="page" id="news3">
    <section class="container">
      <b-row>
        <b-col md="9">
          <div style="max-width:825px;padding-top:15px;"><img style="width:100%;" src="https://nathan7471.xyz/img/lAco9/xEdokonU46.webp/raw" ></div>
          <h2 class="border3 mt-3 mb-1"><b>{{article.title}}</b></h2>
          <p class="mb-1">{{article.summary}}</p>
          <p class="mb-3">{{article.createdAt | moment}} | {{article.user.firstName}} {{article.user.lastName}}</p>
          <div :style="{ backgroundImage: `url('${article.featuredImage}')` }" class="news-bg"></div>
          <p> </p>
          <div style="padding-bottom: 50px" v-html="article.content"></div>
        </b-col>
        <b-col class="pb-3">
          <Adverts></Adverts>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import Adverts from '~/components/news/Adverts.vue'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)
  export default {
    components: {
      Adverts
    },
    data() {
      return{
        images: [],
      }
    },
    asyncData({params, error}) {
      return axios.get(`#`)
        .then((res) => {
          return {article: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
        })
    },
  
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    },
    head() {
      return {
        title: this.article.title,
        meta: [
          {hid: 'description', property: 'description', content: this.article.summary},
          {hid: 'twitter:card', property: 'twitter:card', content: "summary_large_image"},
          {hid: 'twitter:title', property: 'twitter:title', content: this.article.title},
          {hid: 'twitter:creator', property: 'twitter:creator', content: "@reachradiouk"},
          {hid: 'twitter:description', property: 'twitter:description', content: this.article.summary},
          {hid: 'twitter:image', property: 'twitter:image', content: this.article.featuredImage},
          {hid: 'twitter:site', property: 'twitter:site', content: "@reachradiouk"},
          {hid: 'twitter:url', property: 'twitter:url', content: "https://reachradio.co.uk"},
          {hid: 'og:image', name: 'og:image', content: this.article.featuredImage},
          {hid: 'og:site_name', name: 'og:site_name', content: 'Reach Radio'},
          {hid: 'og:title', name: 'og:title', content: this.article.title},
          {hid: 'og:description', name: 'og:description', content: this.article.summary},
          {hid: 'og:type', name: 'og:type', content: "website"},
          {hid: 'og:url', name: 'og:url', content: "https://reachradio.co.uk"}
        ]
      }
    }
  }
</script>

<style>
  .news-bg {
    height: 375px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  blockquote {
    border-left: 2px solid silver;
    margin: 1em 2em;
    padding: 0 0 0em 1em;
  }
  iframe {
      width: 800px!important;
    }

  @media (max-width: 990px) {
    #news3 {
      max-width: 100%;
      overflow-x: hidden;
    }
    .news-bg {
      height: 335px;
    }
    iframe {
      width: 350px!important;
      padding-right: 20px!important;
    }
  }
</style>
