<template>
<div>
    <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-0 mb-1 standardheader" id="news-title"
           style="display: flex; width: 100%;">
        <h4 style="padding-right: 10px;">Recently Played</h4>
      </div>
<b-row align-h="center">
          <div :key="item.uuid" v-for="item in songs">
          <div>
            <div>
              <div class="nbox" style="width: 130px; height: 230px; overflow: hidden;">
                <v-lazy-image v-if="item.song.graphic.small != null" src-placeholder="~assets/images/main/r-small.png" :src="item.song.graphic.medium" style="width: 130px; height: 130px; object-fit: cover" class="imagechange" />
                <img v-else src="~assets/images/main/r-small.png" style="width: 130px; height: 130px; object-fit: cover" class="imagechange"/>
                <h6 class="mt-3 ml-2 mr-2" style="text-align: center; font-weight: bold; max-width:200px; max-height: 2.4em;overflow: hidden;">{{item.song.title}}</h6><p style="text-align: center; max-width:200px; max-height: 1.4em;overflow: hidden;">{{item.song.artist}} </p>
              </div>
            </div>
          </div>
          </div>
          <div :key="item.uuid" v-for="item in songs4" class="recently-mobile">
            <div>
              <div class="nbox" style="width: 130px; height: 230px; overflow: hidden;">
                <v-lazy-image  v-if="item.song.graphic.small != null" src-placeholder="~assets/images/main/r-small.png" :src="item.song.graphic.medium" style="width: 130px; height: 130px; object-fit: cover" class="imagechange" />
                <img v-else src="~assets/images/main/r-small.png" style="width: 130px; height: 130px; object-fit: cover" class="imagechange"/>
                <h6 class="mt-3 ml-2 mr-2" style="text-align: center; font-weight: bold; max-width:200px; max-height: 2.4em;overflow: hidden;">{{item.song.title}}</h6><p style="text-align: center; max-width:200px; max-height: 1.4em;overflow: hidden;">{{item.song.artist}} </p>
              </div>
            </div>
          </div>
        </b-row>
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

  const getSongHistoryUrl = "https://api.radiopanel.co/api/v1/song-history"
  export default {
          components: {
    VLazyImage
          },
    data() {
      return {
        pageNumber: 0,  // default to page 0
        songs: [],
        songs4: [],
        item: {
          song:{
            title: "All The Hits",
            artist: "Reach Radio",
            extraInfo:{
              track:{
                external_urls:{
                  spotify: ""
                  },
                },
              },
            graphic:{
              medium: "~assets/images/main/r-small.png",
            }
          }
        },
      }


    },
    mounted() {
      window.setInterval(() => {
        this.loadSongs();
      }, 15000);

    },
    created: function () {
      this.loadSongs()
      this.loadSongs2()
    },
    methods:{
    async loadSongs() {
       this.loading = true
       try {
         await Promise(this.getArticles())
       } catch (error) {
         this.errormsg = error.message;
       } finally {
         this.loading = false
       }
     },
     async loadSongs2() {
       this.loading = true
       try {
         await Promise(this.getArticles())
       } catch (error) {
         this.errormsg = error.message;
       } finally {
         this.loading = false
       }
     },
    loadSongs() {
       return axios
         .get(getSongHistoryUrl)
         .then(( res ) => {
           this.songs = res.data._embedded.slice(1,3);
           this.songs4 = res.data._embedded.slice(3,4);
         })
      },
    },
  }
</script>
<style>
@media(max-width: 425px) {
  .recently-mobile {
    display: none;
  }
}
</style>
