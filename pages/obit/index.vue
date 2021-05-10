<template>
    <div class="pb-1" style="background-color: #181a1b;color:white;">
      <section class="container pt-3">
        <div class="pt-3 pb-3 text-black pl-3 pr-3 mt-3 mb-3 standardheader2" id="news-title"
                  style="display: flex; width: 100%;">
                      <h4 style="padding-right: 10px;">The Latest News</h4>
                  </div>
        <Articles></Articles>
      </section>
        
    </div>
</template>
<script>
import Articles from '~/components/news/Articles-orbis.vue'
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
    layout: 'orbis',
    components: {
      Articles
    },
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
.standardheader2 {
    background-color:#414a4c;
}
</style>