<template>
    <b-row align-h="center">
        <div :key="article.uuid" v-for="article in news">
          <b-col class="news-container" sm="3" style="padding-bottom: 15px;">
            <n-link :to="'/news/'+ article.slug" style="text-decoration: none; color: white;">
              <div class="mb-2 home-pbox" style="height: 240px; width: 240px">
                <v-lazy-image src-placeholder="~assets/images/main/r-small.png"  :src="article.featuredImage" style="width: 100%; height: 175px; object-fit: cover" class="imagechange" />
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
  const getNewsArticlesUrl = "https://api.radiopanel.co/api/v1/posts?category=games"
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