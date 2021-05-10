<template>
    <div>
        <div class="header-orbis">
            <div class="header-logo">
                <n-link to="/obit">
                    <img class="logo2" src="~assets/images/main/reachlogo.png" to="/orbis">
                </n-link>
            </div>
            <section class="container pt-3">
                <div>
                    <div class="song-stuff">
                        <b-row>
                            <div class="mobile-img"></div>
                            <b-col md="5">
                            <div class="content" id="react-banner-content">
                                <h4 style="color: white;">{{live.slot.title}}</h4>
                                <p class="lead" id="current_song">{{live.song.artist}} - {{live.song.title}}</p>
                            </div>
                            </b-col>
                            <b-col md="3">
                                <div id="react-listen-content">
                                    <audio :src="'https://stream.reachradio.co.uk?cacheBuster=' + radioPlayer.cacheBuster" ref="radioPlayer"
                                        style="display: none;"></audio>

                                    <b-container class="player2">
                                    <b-row>
                                        <b-col class="pt-4">
                                        <button class="btn btn-warning shout plays2" v-b-modal.message>
                                            <img height=25/ src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/ca66069a-7264-4b3f-98f5-ef6318fb68d0.svg">
                                        </button>
                                        </b-col>
                                        <b-col class="pt-4 startpause">
                                        <button @click="startPlaying" class="btn btn-primary plays2" v-if="!radioPlayer.playing">
                                            <img height=25/ src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/a01dadcd-df3d-484b-8d20-4923156ce77a.svg">
                                        </button>
                                        <button @click="stopPlaying" class="btn btn-primary plays2" v-if="radioPlayer.playing">
                                            <img height=25/ src="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/b9c2d858-6a4e-4ad2-86b6-4c41e5fd472b.svg">
                                        </button>
                                        </b-col>

                                        <b-col style="margin-top: 5%;" class="volumebar">
                                        <input @change="handleVolumeChange" max="1" min="0" step="0.001" type="range" orient="vertical" value="0.2">
                                        </b-col>
                                    </b-row>
                                    </b-container>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </div>
                <b-modal id="message" title="Send A Message" :hide-footer="true" ref="message">
                    <p>We are not taking requests at this time.</p>
                </b-modal>
            </section>
        </div>
        <nuxt/>
    </div>
</template>
<script>
import Articles from '~/components/news/Articles.vue'
  import axios from 'axios'
  import Navbar from '~/components/header/Navbar.vue'
 let sendData = ""
  var auth = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }

  export default {
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        errors: [],
        success: [],
        loading: false,
        form: {
          name: null,
          message: null,
        },
        radioPlayer: {
          playing: false,
          volume: 0.2,
          cacheBuster: Math.ceil(Math.random() * 1000000),
        },
        live: {
          songUuid: "",
          song: {
            artist: "Reach Radio",
            title: "All The Hits",
            graphic: {
              medium: "https://i.imgur.com/N6rjb6G.png"
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
    created: function () {
      this.getNpInfo();
    },
    mounted() {
      window.setInterval(() => {
        this.getNpInfo();
      }, 15000);

    },
    methods: {
       countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      hideModal() {
        this.$refs['message'].hide()
      },
      submitDatas() {
        if (this.form.name || this.form.message || this.form.gdpr) {
          let formData = new FormData()
          formData.append("name", this.form.name);
          formData.append("type", "message");
          formData.append("requestOrigin", "website");
          formData.append("message", this.form.message);
          sendData = JSON.stringify(formData);
          axios.post('https://api.radiopanel.co/api/v1/requests', {
              name: this.form.name,
              type: "message",
              requestOrigin: "website",
              message: this.form.message
          }, auth).then(result => {
            this.hideModal()
            this.$toast.success('Thank you for your message', {
              position: 'bottom-right',
              duration: 5000,
            })
          }).catch((e) => {
            this.$toast.error(e.response.data.message, {
              position: 'bottom-right',
              duration: 5000,
            })
          })
        }
        this.errors = [];
        if (!this.form.name) {
          this.errors.push('Name required')
        }
        if (!this.form.message) {
          this.errors.push('Message required')
        }
        if (!this.form.gdpr) {
          this.errors.push('You need to accept to us processing your data')
        }
      },
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
        axios.get('https://api.radiopanel.co/api/v1/song-history/now-playing', auth)
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

    }

  }

</script>
<style>
  .plays2 {
    background-color:gray;
    border-color: gray;
}
.player2{
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 7%;
  width: 180px;
}
.logo2 {
    width: 15%;
    margin: auto !important;
  }
html {
  background-color: #181a1b
  }
  .header-orbis {
      background-color: #181a1b
  }
   @media (max-width: 990px) {
     .logo2 {
    width: 25%;
  }
   }
   @media (max-width: 764px) {
     .logo2 {
    width: 50%;
  }
   }
</style>