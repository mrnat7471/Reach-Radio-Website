<template>
  <div class="page" style="padding-bottom: 10px;">
    <section class="container pt-3">
      <h3 class="border3 ml-1 mr-1 pt-2 mb-3">News</h3>
      <b-row align-h="center" v-if="news[0]">
        <div :key="article.uuid" v-for="article in news" class="mb-2 ml-2">
          <div class="news-container">
            <n-link :to="'/news/' + article.slug" class="news-link">
              <div class="home-pbox news-article">
                <v-lazy-image src-placeholder="~assets/images/main/r-small.webp"
                  :src="article.featuredImage" class="news-article-image" />
                <p class="nbox-text ml-1 mr-1 pt-3" style="text-align: center;">{{article.title}}</p>
              </div>
            </n-link>
          </div>
        </div>
      </b-row>
      <p v-else style="text-align:center"><b-spinner variant="primary" label="Spinning"></b-spinner></p><br>
      <div style="text-align:center">
        <b-button @click="previousDay" v-if="currentTime != 1" variant="primary">Prev</b-button>
        <b-button @click="nextDay" variant="primary" v-if="currentTime < Math.ceil(news_info.totalEntities / news_info.itemsPerPage)">Next</b-button>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import VLazyImage from "v-lazy-image"

  export default {
    components: {
    VLazyImage
  },
    head: {
      title: 'Reach - News',
    },
    data() {
      return {
        currentTime: 1,
        items: 20,
        news: [],
        news_info: {
          totalEntities: 0,
        },
      }
    },
    created: function () {
      this.loadSlots();
    },
    methods: {
      nextDay: function (e) {
        e.preventDefault();
        this.currentTime += 1;
        this.loadSlots();
      },
      previousDay: function (e) {
        e.preventDefault();
        this.currentTime -= 1;
        this.loadSlots();
      },
      loadSlots: function () {
        this.page = this.currentTime
        this.items = this.news_info.totalEntities / 20
        axios
          .get(
            `#`
          )
          .then(response => {
            this.news = response.data._embedded;
            this.news_info = response.data._page;
          });
      }
    },
    filters: {
      moment: function (date) {
        return moment.unix(date).format('MMMM Do YYYY');
      },
      hour: function (date) {
        return moment.unix(date).format('H:mm');
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
.news-link{
  text-decoration: none!important;
}
.news-article{
  width: 240px;
  height: 230px;
  border-radius:2.5%;
  margin:5px;
}
.news-article-image{
  width: 240px;
  height: 155px;
  object-fit: cover;
  border-top-left-radius:2.5%;
  border-top-right-radius:2.5%;
}
</style>
