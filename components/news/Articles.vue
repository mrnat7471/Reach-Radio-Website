<template>
    <b-row align-h="center" class="news-home-articles">
        <div :key="article.uuid" v-for="article in news">
          <b-col class="news-container" sm="3" style="padding-bottom: 15px;">
            <n-link :to="'/news/'+ article.slug" style="text-decoration: none; color: white;">
              <div class="mb-2 home-pbox" style="height: 230px; width: 240px;border-radius:2.5%;">
                <v-lazy-image src-placeholder="~assets/images/main/r-small.webp"  :src="article.featuredImage" style="width: 100%; height: 165px; object-fit: cover;border-top-left-radius:2.5%;border-top-right-radius:2.5%;" />
                <!-- 'https://varnish.radiopanel.co/resize?url=''&height=165&type=webp'-->
                <p class="home-pbox-text" style="margin-left: 10px;padding-right: 10px;">{{article.title}}</p>
              </div>
            </n-link>
          </b-col>
        </div>
      </b-row>
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
.news-container:hover{
  top: -3px;
}
.news-container{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
@media(max-width:768px){
  .news-home-articles{
  margin-left:0px;
}
}
</style>