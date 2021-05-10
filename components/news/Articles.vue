<template>
  <div>
    <h5 class="border3 ml-1 mr-1 pt-3 mb-3">The Latest News</h5>
    <b-row align-h="center" class="news-home-articles">
        <div :key="article.uuid" v-for="article in news">
          <b-col class="news-container" sm="3">
            <n-link :to="'/news/'+ article.slug" style="text-decoration: none;">
              <div class="home-pbox home-articles">
                <v-lazy-image src-placeholder="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png"
                  :src="article.featuredImage" class="home-articles-image" />
                <p class="home-pbox-text">{{article.title}}</p>
              </div>
            </n-link>
          </b-col>
        </div>
      </b-row>
  </div>
</template>
<script>
import axios from 'axios'
import VLazyImage from "v-lazy-image"

const getNewsArticlesUrl = `#`
export default {
  components: {
    VLazyImage
  },
  data() {
    return{
      news: {},
    }
  },
  mounted: function () {
    this.loadArticles()
  },
  methods:{
    async loadArticles() {
      this.loading = true
      try {
        await Promise(this.getArticles())
      } catch (error) {
        this.errormsg = error.message;
      } finally {
        this.loading = false
      }
    },
    getArticles() {
      return axios
        .get(getNewsArticlesUrl)
        .then(( res ) => {
          this.news = res.data._embedded.slice(0,4);
        })
    },
  }
}
</script>
<style>
.news-home-articles{
  margin-left:-70px;
}
@media(max-width:768px){
  .news-home-articles{
  margin-left:0px;
}
}
.news-container{
  padding-bottom: 15px;
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
.news-container:hover{
  top: -3px;
}
.home-articles{
  height: 230px;
  width: 240px;
  border-radius:2.5%;
}
.home-pbox-text{
  margin-left: 10px;
  padding-right: 10px;
}
.home-articles-image{
  width: 100%;
  height: 165px;
  object-fit: cover;
  border-top-left-radius:2.5%;
  border-top-right-radius:2.5%;
}
</style>
