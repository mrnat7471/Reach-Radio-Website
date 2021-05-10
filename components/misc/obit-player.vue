<template>
    <div>
        <div>
            <section class="container pt-3">
                <div>
                    <h4 style="text-align: center; color:white;">{{live.song.artist}} - {{live.song.title}}</h4>
                </div>
                <audio src="https://stream.reachradio.co.uk" ref="radioPlayer" style="display: none;"></audio>
                <button @click="startPlaying" class="btn btn-primary plays" v-if="!radioPlayer.playing">
                    <img height=25/ src="~assets/icons/play.png">
                </button>
                <button @click="stopPlaying" class="btn btn-primary plays" v-if="radioPlayer.playing">
                    <img height=25/ src="~assets/icons/pause.png">
                </button>
                <input @change="handleVolumeChange" max="1" min="0" step="0.0001" type="range" value="0.2">
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
  export default {
    layout: "empty",
    data() {
      return {
        radioPlayer: {
          playing: false,
          volume: 0.2,
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
        axios.get(`#`)
          .then((res) => {
            this.live = res.data;
          })
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
<style>
</style>
