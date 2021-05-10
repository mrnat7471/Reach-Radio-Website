<template>
  <div>
    <b-row class="ml-1 mt-2">
      <b-row v-if="curSong.uuid">
        <b-col>
          <div style="max-width:120px;max-height:120px;"><v-lazy-image v-if="curSong.song.graphic.medium != null" src-placeholder="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" :src="curSong.song.graphic.medium" style="width:100%;object-fit: cover;border-radius:5px;" />
          <img v-else src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" height=120 /></div><!-- 'https://varnish.radiopanel.co/resize?url=''&height=120' -->
        </b-col>
        <b-col md=7.5>
          <span class="badge badge-danger mb-1" ><img src="https://cdn.radiopanel.co/c9a65443-eed1-41ed-b9d2-743223b5ee75/dcc1a271-6b47-4e41-ac5b-6857f78deb45.svg" height=18 /> NOW PLAYING</span>
          <p style="margin-bottom:0px;max-height: 1.5em;overflow: hidden;max-width:250px"><b>{{curSong.song.title}}</b></p>
          <p style="margin-bottom:0px;max-height: 1.5em;overflow: hidden;max-width:250px">{{curSong.song.artist}}</p>
          <a :href="curSong.song.extraInfo.trackUrl" target="_blank" >
            <div class="apple_music_logo"></div>
          </a>
        </b-col>
      </b-row>

    </b-row>
    <h5 v-if="songs" class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Recently Played</h5>
    <b-row align-h="center" class="news1-home-articles ml-1" v-if="songs">
      <div :key="item.uuid" v-for="item in songs">
        <div>
          <div>
            <div style="width: 130px; height: 230px; overflow: hidden;padding-right:15px;">
              <v-lazy-image v-if="item.song.graphic.small != null" src-placeholder="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" height=120 width=120 :src="item.song.graphic.medium" style="border-radius:5px;"  />
              <img v-else src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" height=120 />
              <p style="font-size:15px;height: 1.5em;overflow: hidden;margin-bottom:5px;margin-top:4px;font-size:13px;"><b>{{item.song.title}}</b></p>
              <p style="max-height: 1.5em;overflow: hidden;margin-bottom:0px;font-size:13px;">{{item.song.artist}} </p>
              <a :href="item.song.extraInfo.trackUrl" target="_blank" >
                <div class="apple_music_logo"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div :key="item.uuid" v-for="item in songs4" class="recently-mobile">
        <div>
          <div style="width: 130px; height: 230px; overflow: hidden;">
            <v-lazy-image  v-if="item.song.graphic.small != null" src-placeholder="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" height=120  :src="item.song.graphic.medium" style="border-radius:5px;" />
            <img v-else src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" height=120  />
            <p style="font-size:15px;max-height: 1.5em;overflow: hidden;margin-bottom:5px;margin-top:4px;font-size:13px;"><b>{{item.song.title}}</b></p>
            <p style="height: 1.5em;overflow: hidden;margin-bottom:0px;font-size:13px;">{{item.song.artist}}</p>
            <a :href="item.song.extraInfo.trackUrl" target="_blank">
              <div class="apple_music_logo"></div>
            </a>
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
  import { socket } from '../../helpers/socket';
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)

  const getSongHistoryUrl = `#`
  export default {
          components: {
    VLazyImage
          },
    data() {
      return {
        pageNumber: 0,  // default to page 0
        curSong: {
          test: null,
          uuid: null,
          song: {
            graphic: {},
            extraInfo: {}
          }
        },
        songs: [],
        songs4: [],
        song1: {
          song:{
          artist: "Loading",
          title: "loading",
          graphic:{},
          extraInfo:{
          trackUrl: "Loading"
        }
        }
        },
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
              medium: "song",
            }
          }
        },
      }
    },
    mounted() {
      window.setInterval(() => {
        this.loadSongs();
      }, 15000);

      socket.on('current-song-updated', (event) => {
        this.curSong = event;
      });

    },
    created: function () {
      this.loadSongs()
      this.loadSongs2()
      this.loadInitial()
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
      loadInitial() {
       return axios
         .get(getSongHistoryUrl)
         .then(( res ) => {
           this.curSong = res.data._embedded[0];
         })
      },
    },
  }
</script>
<style>
.news1-home-articles{
  margin-left:-60px!important;
}
@media(max-width:1200px){
  .news1-home-articles{
  margin-left:-110px!important;
  }
  .recently-mobile {
    display: none;
  }
}
@media(max-width:990px){
  .news1-home-articles{
  margin-left:0px!important;
  }
}
.b-skeleton {
  border-radius:5px;
}
</style>
