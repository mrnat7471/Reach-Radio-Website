<template>
  <div class="page" style="overflow: hidden;width:400px;height:700px">
    <Header></Header>
    <h5 class="border3 mr-1 pt-3" style="margin-bottom:15px;margin-left:65px;">Recently Played</h5>
    <b-row align-h="center" class="news1-home-articles ml-1">
    <div :key="item.uuid" v-for="item in songs4" class="height:180px;">
        <div>
          <div style="width: 130px;overflow: hidden;">
            <v-lazy-image  v-if="item.song.graphic.small != null" src-placeholder="~assets/images/main/r-small.webp" height=120  :src="item.song.graphic.medium" style="border-radius:5px;" />
            <img v-else src="~assets/images/main/r-small.webp" height=120  />
            <p style="font-size:15px;max-height: 1.5em;overflow: hidden;margin-bottom:5px;margin-top:4px;font-size:13px;max-width:120px;"><b>{{item.song.title}}</b></p>
            <p style="height: 1.5em;overflow: hidden;margin-bottom:0px;font-size:13px;">{{item.song.artist}}</p>
            <a :href="item.song.extraInfo.trackUrl" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="78.03" height="16"><path fill="#A6A6A6" d="M73.454 0H3.165L2.82.006c-.25.007-.502.022-.751.067A2.414 2.414 0 0 0 .073 2.07c-.045.248-.06.5-.067.75-.004.115-.004.23-.006.346v8.667c.002.117.002.23.006.346.006.251.022.503.067.75.044.252.118.488.234.715.114.223.263.43.442.605.178.18.383.328.607.442.229.118.462.192.713.237.25.045.502.06.751.066.116.003.23.004.345.004l.41.001h70.286c.114 0 .231-.002.345-.005a4.98 4.98 0 0 0 .75-.066c.252-.045.485-.12.716-.237.224-.114.43-.263.606-.442.18-.176.328-.382.444-.605.115-.227.19-.463.232-.714.046-.248.06-.5.07-.75v-.347c.004-.136.004-.271.004-.41V3.576c0-.137 0-.274-.003-.41 0-.114 0-.23-.002-.345a5.066 5.066 0 0 0-.07-.75 2.482 2.482 0 0 0-.231-.714A2.418 2.418 0 0 0 74.956.072a4.891 4.891 0 0 0-.75-.067c-.114-.001-.231-.004-.345-.004L73.454 0z"/><path d="M3.167 14.672c-.114 0-.226-.002-.34-.004a4.758 4.758 0 0 1-.7-.061 2.206 2.206 0 0 1-.622-.206 2.027 2.027 0 0 1-.523-.381 1.995 1.995 0 0 1-.383-.524 2.146 2.146 0 0 1-.204-.621 4.655 4.655 0 0 1-.062-.703l-.006-.343V3.167l.006-.336c.005-.196.017-.452.062-.702.04-.23.107-.433.204-.623A2.087 2.087 0 0 1 2.126.394a4.72 4.72 0 0 1 .703-.061l.338-.005h70.692l.342.005c.193.005.449.016.697.06a2.072 2.072 0 0 1 1.532 1.113c.097.192.163.396.201.62.044.236.057.479.065.707l.001.334c.003.14.003.274.003.409v7.848c0 .137 0 .27-.003.404l-.001.348c-.008.221-.021.464-.064.695a2.055 2.055 0 0 1-.583 1.146 2.03 2.03 0 0 1-.525.384 2.198 2.198 0 0 1-.626.206c-.24.043-.489.055-.7.06-.11.003-.226.005-.337.005H3.167z"/><g fill="#FFF"><path d="M11.547 8.927H8.72l-.684 1.97H6.853l2.679-7.42h1.24l2.678 7.42h-1.224l-.679-1.97zm-2.535-.966h2.242L10.18 4.824h-.088L9.012 7.96zM19.992 8.093c0 1.78-.9 2.896-2.314 2.896-.797 0-1.43-.35-1.723-.941h-.087v2.71h-1.106V5.297h1.065v.925h.082c.34-.638.997-1.018 1.759-1.018 1.424 0 2.324 1.11 2.324 2.89zm-1.136 0c0-1.182-.561-1.897-1.497-1.897-.93 0-1.512.73-1.512 1.903 0 1.167.581 1.897 1.507 1.897.941 0 1.502-.715 1.502-1.903zM26.699 8.093c0 1.78-.9 2.896-2.314 2.896-.797 0-1.43-.35-1.723-.941h-.087v2.71h-1.106V5.297h1.065v.925h.082c.34-.638.997-1.018 1.759-1.018 1.424 0 2.324 1.11 2.324 2.89zm-1.136 0c0-1.182-.561-1.897-1.497-1.897-.93 0-1.512.73-1.512 1.903 0 1.167.581 1.897 1.507 1.897.941 0 1.502-.715 1.502-1.903zM28.228 3.111h1.106v7.785h-1.106V3.111zM35.88 9.384c-.252 1.002-1.147 1.62-2.427 1.62-1.604 0-2.587-1.1-2.587-2.889 0-1.79 1.003-2.927 2.582-2.927 1.558 0 2.499 1.065 2.499 2.823v.386h-3.954v.062c.035.982.606 1.604 1.491 1.604.668 0 1.126-.241 1.332-.679h1.064zM31.993 7.58h2.828c-.026-.88-.56-1.45-1.379-1.45-.817 0-1.388.575-1.45 1.45zM47.025 10.896V5.538h-.071l-2.176 5.142h-.874L41.73 5.538h-.072v5.358h-1.07v-7.42h1.348l2.36 5.636h.087l2.366-5.636h1.347v7.42h-1.07zM54.696 10.896H53.63v-.89h-.087c-.273.638-.843.998-1.692.998-1.24 0-1.928-.756-1.928-2.073V5.297h1.105v3.347c0 .905.365 1.336 1.178 1.336.894 0 1.383-.53 1.383-1.408V5.297h1.106v5.6zM58.498 5.188c1.26 0 2.083.587 2.19 1.573H59.63c-.103-.41-.503-.673-1.131-.673-.618 0-1.085.294-1.085.73 0 .334.283.545.89.684l.93.216c1.064.247 1.563.705 1.563 1.528 0 1.054-.982 1.758-2.319 1.758-1.332 0-2.201-.602-2.299-1.594h1.106c.14.432.55.7 1.219.7.689 0 1.177-.31 1.177-.757 0-.334-.261-.55-.822-.683l-.978-.227c-1.064-.252-1.557-.73-1.557-1.562 0-.993.91-1.693 2.175-1.693zM62.135 3.64c0-.384.304-.678.715-.678s.715.294.715.678c0 .381-.304.674-.715.674s-.715-.293-.715-.674zm.165 1.657h1.1v5.6h-1.1v-5.6zM68.847 7.127c-.129-.545-.58-.951-1.321-.951-.926 0-1.491.71-1.491 1.902 0 1.214.57 1.94 1.491 1.94.7 0 1.177-.32 1.321-.922h1.074c-.143 1.126-1.007 1.908-2.39 1.908-1.63 0-2.628-1.1-2.628-2.926 0-1.795.992-2.89 2.623-2.89 1.403 0 2.252.818 2.395 1.939h-1.074z"/></g></svg>
            </a>
          </div>
        </div>
      </div>
    </b-row>
    <div style="border-bottom: 1px solid gray;width:400px;" class="footer-section">
      <b-row class="mr-4">
        <b-col style="max-width:75px;">
          <img :src="live.song.graphic.medium" height=75 width=75>
        </b-col>
        <b-col class="ml-4 mt-1">
          <audio preload="none"  ref="radioPlayer" style="display: none;">
            <source :src="stationData.fields.stationStreamUrl" type="audio/mpeg">
          </audio>
          <p style="margin-bottom:-7px;margin-top:-2px;height:1.7rem;overflow:hidden;">{{live.song.title}}</p><div style="height:1.7rem;overflow:hidden;"><small>{{live.song.artist}}</small></div>
          <input @input="handleVolumeChange" max="1" min="0" step="0.0001" type="range" value="0.2" style="max-width:160px;min-width:140px;width:100%;">
        </b-col>
        <b-col style="max-width:50px;" class="mt-4 mr-2">
          <font-awesome-icon @click="startPlaying" :icon="['fas', 'play']" style="font-size: 30px;"  v-if="!radioPlayer.playing" />
          <font-awesome-icon @click="stopPlaying" :icon="['fas', 'pause']" style="font-size: 30px;"  v-if="radioPlayer.playing" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import VLazyImage from "v-lazy-image"
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
  library.add(faPlay, faPause)
  import { socket } from '../../helpers/socket';
  import Header from '~/components/header/mobile-header.vue'
  export default {
    components:{
      Header,
      VLazyImage
    },
    layout: "empty",
    data() {
      return {
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
        songs4: [],
        radioPlayer: {
          playing: false,
          volume: 0.2,
          savevolume: null,
        },
        live: {
          songUuid: "",
          song: {
            artist: "",
            title: "",
            graphic: {
              medium: ""
            }
          },
          slot: {
          user: {
            uuid: "r",
            firstName: "Loading",
            lastName: "Data",
            avatar: "https://i.imgur.com/N6rjb6G.png"
          }
        },
        },
      }
    },

    head() {
      return {
        title: "Reach Radio - Popout player"
      };
    },

    asyncData({params, error}) {
      return axios.get(`#`)
        .then((res) => {
          return {stationData: res.data}
          console.log(stationData)
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Competition not found'})
        })
    },

    methods:{
      startPlaying() {
        this.radioPlayer.playing = true;
        this.$refs.radioPlayer.play();
        if(this.radioPlayer.savevolume){
          this.$refs.radioPlayer.volume = this.radioPlayer.savevolume;
        }else{
        this.$refs.radioPlayer.volume = this.radioPlayer.volume;
        }
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: this.live.song.title,
              artist: this.live.song.artist,
              artwork: [
                {src: this.live.song.graphic.medium, sizes: '512x512', type: 'image/jpg'},
              ]
            });
          }
      },
      stopPlaying() {
        this.radioPlayer.playing = false;
        this.$refs.radioPlayer.volume = 0;
      },
      handleVolumeChange(e) {
        if (this.radioPlayer.playing){
        this.radioPlayer.volume = e.target.value;
        this.$refs.radioPlayer.volume = e.target.value;
        }else{
          this.radioPlayer.savevolume = e.target.value
        }
      },
      getNpInfo() {
          // Get API key and Station Info
        axios.get(`#`)
          .then((res) => {
            this.live = res.data;
          })
      },
      loadSongs(){
        axios.get(`#`)
          .then((res) => {
            this.songs4 = res.data._embedded.slice(1,3);
          })
      }
    },
    created: function () {
      this.getNpInfo();
      this.loadSongs();
    },
    mounted() {
      window.setInterval(() => {
        this.loadSongs();
      }, 15000);
      socket.on('current-song-updated', (event) => {
        this.live = event;
        if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: this.live.song.title,
              artist: this.live.song.artist,
              artwork: [
                {src: this.live.song.graphic.medium, sizes: '512x512', type: 'image/jpg'},
              ]
            });
          }
      });
    },
  }

</script>

<style scoped>
.centeredstuff{
  text-align: center;
}
.footer-section{
  position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height:75px;
}
</style>
