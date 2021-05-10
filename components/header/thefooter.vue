<template>
  <div class="footer-section-1">
    <audio preload="none" src="https://stream.reachradio.co.uk/128-aac" ref="radioPlayer" style="display: none;"></audio>
    <b-collapse id="collapse-4" v-model="visible">
      <b-card style="border-radius:0px;height:100vh;" class="fullplayer" v-if="carmode">
        <font-awesome-icon @click="carmode = !carmode" :icon="['fas', 'times']" style="font-size: 25px;"/>
        <img style="margin-left:63px;" src="https://nathan7471.xyz/img/lAco9/GOvIRulA51.png/raw" width=150>
        <div style="text-align:center;margin-top:15px;" >
          <img :src="live.song.graphic.medium" height=200 width=200 style="border-radius:5px;margin-bottom:15px;"><br>
          <h6 style="margin-bottom:0px;"><b>{{live.song.title}}</b></h6>
          <small>{{live.song.artist}}</small><br><br>
          <font-awesome-icon @click="startPlaying" :icon="['fas', 'play']" style="font-size: 70px;"  v-if="!radioPlayer.playing" />
          <font-awesome-icon @click="stopPlaying" :icon="['fas', 'pause']" style="font-size: 70px;"  v-if="radioPlayer.playing" />
        </div>
      </b-card>

      <b-card style="border-radius:0px;height:100vh;" class="fullplayer" v-else>
        <font-awesome-icon :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible" :icon="['fas', 'chevron-up']" style="font-size: 25px;margin-right:5px;"/>
        <font-awesome-icon @click="carmode = !carmode" :icon="['fas', 'car']" style="font-size: 25px;" />
        <img style="margin-left:23px;" src="https://nathan7471.xyz/img/lAco9/GOvIRulA51.png/raw" width=150>
        <div style="text-align:center;margin-top:15px;" >
          <img :src="live.song.graphic.medium" height=250 width=250 style="border-radius:5px;margin-bottom:15px;"><br>
          <h6 style="margin-bottom:0px;"><b>{{live.song.title}}</b></h6>
          <small>{{live.song.artist}}</small><br>
          <div :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible" style="margin-top:15px;">
            <n-link to="recently-played">
              <b-button size=sm>Recently Played</b-button>
            </n-link>
            <n-link to="shoutout">
              <b-button size=sm>Shoutout</b-button>
            </n-link><br><br>
          </div>
      
          <font-awesome-icon @click="startPlaying" :icon="['fas', 'play']" style="font-size: 30px;"  v-if="!radioPlayer.playing" />
          <font-awesome-icon @click="stopPlaying" :icon="['fas', 'pause']" style="font-size: 30px;"  v-if="radioPlayer.playing" />
        </div>
      </b-card>
    </b-collapse>

  <section class="footer-section" style="margin-bottom: 0px;" id="container">
    <div style="border-bottom: 1px solid gray;" v-if="!visible">
      <b-row class="mr-4">
        <b-col style="max-width:75px;" :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible">
          <img :src="live.song.graphic.medium" height=75 width=75>
        </b-col>
        <b-col class="ml-4 mt-1" :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible">
          <p style="margin-bottom:0px;height:1.7rem;overflow:hidden;"><b>{{live.slot.title}}</b></p>
          <p style="margin-bottom:-7px;margin-top:-2px;height:1.7rem;overflow:hidden;">{{live.song.title}}</p><div style="height:1.7rem;overflow:hidden;"><small>{{live.song.artist}}</small></div>
        </b-col>
        <b-col style="max-width:50px;" class="mt-4 mr-2">
          <font-awesome-icon @click="startPlaying" :icon="['fas', 'play']" style="font-size: 30px;"  v-if="!radioPlayer.playing" />
          <font-awesome-icon @click="stopPlaying" :icon="['fas', 'pause']" style="font-size: 30px;"  v-if="radioPlayer.playing" />
        </b-col>
      </b-row>
    </div>
    <p style="text-align:center;height:45px;" v-if="!carmode">
      <b-row align-h="center" class="ml-2 mr-2" style="margin-top:10px;">
        <n-link to="/" class="footer-icons" style="text-decoration:none;"><b-col>
          <font-awesome-icon :icon="['fas', 'home']" style="font-size: 25px;"/>
          <p>Home</p>
        </b-col></n-link>
        <n-link to="/shows" class="footer-icons" style="text-decoration:none;"><b-col>
          <font-awesome-icon :icon="['fas', 'music']" style="font-size: 25px;"/>
          <p>Catch-up</p>
        </b-col></n-link>
        <n-link to="/shoutout" class="footer-icons" style="text-decoration:none;"><b-col>
          <font-awesome-icon :icon="['fas', 'bullhorn']" style="font-size: 25px;"/>
          <p>Shoutout</p>
        </b-col></n-link>
        <n-link to="/news" class="footer-icons" style="text-decoration:none;"><b-col>
          <font-awesome-icon :icon="['fas', 'newspaper']" style="font-size: 25px;"/>
          <p>News</p>
        </b-col></n-link>
      </b-row>
    </p>
  </section>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faPlay, faPause, faHome, faMusic, faBullhorn, faNewspaper, faTimes, faCar, faChevronUp} from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faPause, faHome, faMusic, faBullhorn, faNewspaper, faTimes, faCar, faChevronUp)

   import axios from 'axios';
  import { socket } from '../../helpers/socket';

  export default {
    layout: "empty",
    data() {
      return {
        visible: false,
        carmode: false,
        radioPlayer: {
          playing: false,
          volume: 1,
        },
        live: {
          songUuid: "",
          song: {
            artist: "Loading...",
            title: "Loading...",
            graphic: {
              medium: "https://i.imgur.com/N6rjb6G.png",
            }
          },
          slot: {
            title: "Loading...",
          user: {
            uuid: "r",
            firstName: "Loading",
            lastName: "Data...",
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

<style>
.footer-section{
    position: fixed; 
    bottom: 0;
    left: 0;
    right: 0;
}
.icon-footer:hover{
  top: -3px;
}
.icon-footer{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
.news-container:hover{
  top: -3px;
}
.news-container{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
}
.footer-section-1{
    position: fixed; 
    top: 0;
    left: 0;
    right: 0;
    height:auto;
}
</style>
