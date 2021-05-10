<template>
    <b-row align-h="center">
        <div :key="article.uuid" v-for="article in news">
          <b-col class="news-container" sm="3" style="padding-bottom: 15px;">
            <n-link :to="'/obit/'+ article.slug" style="text-decoration: none; color: white;">
              <div class="mb-2 obit-pbox w-250 h-250" style="height: 250px; width: 250px">
                <img :src="article.featuredImage" style="width: 100%; height: 175px; object-fit: cover;filter: grayscale(100%);" class="imagechange">
                <p class="home-pbox-text obit-text" style="margin-left: 10px;padding-right: 10px;">{{article.title}}</p>
              </div>
            </n-link>
          </b-col>
        </div>
      </b-row>
</template>
<script>
import axios from 'axios'
  const getNewsArticlesUrl = `#`
export default {
    data() {
        return{
        news: {
          article: {
            uuid: "404",
            slug: "404",
            title: "Loading info...",
            featuredImage: "https://radiopanel.s3.nl-ams.scw.cloud/2ea3994d-418b-43d0-ab77-6fb2af67d331.png",
          }
        },
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
.obit-pbox {
    background-color:#181a1b!important;
    box-shadow: #2d2f30 3px 3px 3px 3px!important;
  }
.obit-text {
  color:white;
}
</style>