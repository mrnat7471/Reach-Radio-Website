<template>
  <div class="page">
    <section class="container pt-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">Recently Played</h4>
        </div>
        <b-row align-h="center" style="padding-bottom: 50px;">
          <div v-for="item in songs">
          <div class="mb-2 ml-2">
            <div>
              <div class="nbox imagechange" style="width: 210px;min-height: 310px;">
                <a :href="item.song.extraInfo.trackUrl" v-if="item.song.graphic.large != null" target="_blank"><v-lazy-image v-if="item.song.graphic.large != null" src-placeholder="~assets/images/main/r-small.png" :src="item.song.graphic.large" style="width: 210px; height: 210px; object-fit: cover"></v-lazy-image></a>
                <v-lazy-image v-else src="~assets/images/main/r-small.png" style="width: 210px; height: 210px; object-fit: cover"></v-lazy-image>
                <h6 class="mt-3 ml-2 mr-2" style="text-align: center; font-weight: bold;">{{item.song.title}}</h6><p style="text-align: center;">{{item.song.artist}} </p>
              </div>
            </div>
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
  import VLazyImage from "v-lazy-image";
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
      title: 'Reach - Recently Played',
    },
    data() {
      return {
        pageNumber: 0,  // default to page 0
        songs: [],
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
              large: "~assets/images/main/r-small.png",
            }
          }
        }
      }


    },
    created: function () {
      this.loadSongs()
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
    loadSongs() {
       return axios
         .get('https://api.radiopanel.co/api/v1/song-history',config)
         .then(( res ) => {
           this.songs = res.data._embedded.slice(1,13);
         })
      },
    },
  }
</script>
