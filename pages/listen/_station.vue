<template>
  <div class="page">
  <a style="margin:10px;" href="/listen">back</a>
  <div class="centeredstuff pt-3 pb-3">
      <h2 class="pb-2"><b>{{stationData.fields.stationName}}</b></h2>
      <h6>{{live.slot.title}} with {{live.slot.user.firstName}} {{live.slot.user.lastName}}</h6>
      <p>
      <img :src="live.song.graphic.medium" style="max-width: 280px; max-height: 280px;"></p>
      <p><b>{{live.song.title}}</b><br>{{live.song.artist}} </p>

      <audio :src="stationData.fields.stationStreamUrl" ref="radioPlayer" style="display: none;"></audio>
      <button @click="startPlaying" class="btn btn-primary plays" v-if="!radioPlayer.playing">
        <img height=25/ src="~assets/icons/play.png">
      </button>
      <button @click="stopPlaying" class="btn btn-primary plays" v-if="radioPlayer.playing">
        <img height=25/ src="~assets/icons/pause.png">
      </button>
      <input @change="handleVolumeChange" max="1" min="0" step="0.0001" type="range" value="1" style="display:none;">
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    layout: "empty",
    data() {
      return {
        radioPlayer: {
          playing: false,
          volume: 0.7,
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
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/ba6cd835-cc48-4786-bb2d-4c546deda006/content/${params.station}`, config)
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
        this.$refs.radioPlayer.volume = this.radioPlayer.volume;
      },
      stopPlaying() {
        this.radioPlayer.playing = false;
        this.$refs.radioPlayer.volume = 0;
      },
      handleVolumeChange(e) {
        this.radioPlayer.volume = e.target.value;
        this.$refs.radioPlayer.volume = e.target.value;
      },
      getNpInfo() {
          // Get API key and Station Info
        axios.get('https://api.radiopanel.co/api/v1/song-history/now-playing', config)
          .then((res) => {
            this.live = res.data;
          })
        if (process.client) {

          if ('mediaSession' in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: this.live.song.title,
              artist: this.live.song.artist,
              artwork: [
                {src: this.live.song.graphic.medium, sizes: '512x512', type: 'image/jpg'},
              ]
            });
          }
        }
      }
    },
    created: function () {
      this.getNpInfo();
    },
    mounted() {
      window.setInterval(() => {
        this.getNpInfo();
      }, 15000);

    },
  }

</script>

<style scoped>
.centeredstuff{
    text-align: center;
}
</style>
