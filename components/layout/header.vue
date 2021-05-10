<template>
  <div class="header-holder">

<!-- header -->
    <section class="container">
      <div class="header-logo">
        <n-link to="/">
          <div class="logo-changer"> </div>
        </n-link>
      </div>
      <div>
        <div class="song-stuff">
          <b-row>
            <div class="mobile-img"></div>
            <b-col md="3" v-if="live.slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
              <img v-if="live.slot.user.uuid != null" :src="live.slot.user.avatar" class="livepresenterimage pr-4" style="height: 170px;">
            </b-col>
            <div v-if="live.slot.user.uuid ==  'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
              <b-col md="3" v-if="live.song.graphic.medium != null">
                <img v-if="live.slot.user.uuid != null" :src="live.song.graphic.medium" class="livepresenterimage imagechange mb-4"
                     style="width: 7rem; height:7rem; border-radius: 50%; margin-bottom: 20px;">
              </b-col>

              <b-col md="3" v-else>
                <img class="livepresenterimage" src="~assets/images/main/r-small.png"
                     style="width: 7rem; height:7rem; border-radius: 50%;">
              </b-col>
            </div>
            <b-col md="5">
              <div class="content" id="react-banner-content">
                <h4 class="show_time text-change" v-if="live.slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
                  <n-link :to="'/info/team/'+live.slot.user.uuid" class="text-change" style="color: white;">{{live.slot.user.firstName}} {{live.slot.user.lastName}}</n-link>
                </h4>
                <n-link to="/on-air/timetable">
                  <h4 class="text-change" style="color: white;">{{live.slot.title}}</h4>
                </n-link>
                <p v-if="live.slot.user.uuid != null" class="lead text-change" id="current_song">{{live.song.artist}} - {{live.song.title}}</p>
              </div>
            </b-col>
            <b-col md="3" v-if="live.slot.user.uuid != null">
              <div id="react-listen-content">
                <audio :src="'https://stream.reachradio.co.uk?cacheBuster=' + radioPlayer.cacheBuster" ref="radioPlayer"
                       style="display: none;"></audio>
                <b-container class="player">
                  <b-row>
                    <b-col class="pt-4">
                      <button class="btn btn-warning shout" v-b-modal.message>
                        <img height=25/ src="~assets/icons/shoutout.png">
                      </button>
                    </b-col>
                    <b-col class="pt-4" style="margin-left:3px;">
                      <button class="btn btn-success" @click="popoutplayer"> 
                        <img height=25/ src="~assets/icons/popout.png">
                      </button>
                    </b-col>
                    <b-col class="pt-4 startpause">
                      <button @click="startPlaying" class="btn btn-primary plays" v-if="!radioPlayer.playing">
                        <img height=25/ src="~assets/icons/play.png">
                      </button>
                      <button @click="stopPlaying" class="btn btn-primary plays" v-if="radioPlayer.playing">
                        <img height=25/ src="~assets/icons/pause.png">
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
    </section>
      <Navbar></Navbar>

    <b-modal id="message" title="Send A Message" :hide-footer="true" ref="message">
          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          </div>

          <form class="pb-3">
            <label for="name">Your Name</label>
            <input
              class="form-control"
              id="name"
              name="name"
              required
              type="text"
              v-model="form.name"/>
            <label class="pt-2" for="comment">Message</label>
            <textarea
              class="form-control"
              cols="30"
              id="comment"
              name="comment"
              required
              rows="10"
              v-model="form.message"
            ></textarea>
            <b-form-checkbox
              class="mt-3"
              id="acceptGdpr"
              name="acceptGdpr"
              required
              v-model="form.gdpr">I accept to my name being sent to Reach
            </b-form-checkbox>
            <a class="btn btn-success mt-3" href="#" v-on:click="submitDatas">Submit</a>
          </form>
  </b-modal>
  </div>
</template>

<script>
  import axios from 'axios'
  import Navbar from '~/components/header/Navbar.vue'

 let sendData = ""
  var auth = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  const nowPlayingUrl = "https://api.radiopanel.co/api/v1/song-history/now-playing"

  export default {
    components: {
      Navbar,
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
              medium: "https://api.reachradio.co.uk/r-small.png"
            }
          },
          slot: {
          user: {
            uuid: null,
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
      popoutplayer: function () {
        window.open("/listen","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=700,width=400");  
      },
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
        axios.get(nowPlayingUrl)
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
.player{
  border-radius: 7%;
  min-width: 230px; 
  /* min-width: 180px;*/
}
  .header-logo {
    text-align: center;
  }

  .header-logo div {
    display: inline-block;
  }

  .logo {
    width: 25%;
    margin: auto !important;
  }

  .header-holder {
    padding-top: 1rem !important;
    background-position: 50%;
    background-color: #003d91;
    background-attachment: fixed;
    background-size: cover !important;
    background-attachment: scroll;
    background-repeat: no-repeat !important;
    margin-left: auto;
    margin-right: auto;
  }
  .show_time {
    font-weight: bold;
    color: white;
  }

  #current_song {
    color: white;
  }

  .song-stuff {
    margin-left: 21%;
  }

  .livepresenterimage {
    width: 13rem;
    height: 13rem;
    object-fit: cover;
  }

  #react-banner-content {
    padding-top: 5%;
    overflow: hidden;
    margin: auto;
  }

  #react-listen-content {
    padding-top: 13%;
  }

  @media (max-width: 1366px) {
    .livepresenterimage {
      width: 13rem;
      height: 13rem;
      object-fit: cover;
    }
  }

  @media (max-width: 900px) {
    .livepresenterimage {
      margin-left: 20%;
      width: 13rem;
      height: 13rem;
      object-fit: cover;
    }

    .dj-name {
      padding-top: 13%;
      font-weight: bold;
      color: white;
    }

    #react-listen-content {
      margin-top: 20%;
    }
  }

  @media (max-width: 990px) {
    .livepresenterimage {
      display: none;
    }

    .presenterimage {
      display: none;
    }

    .dj-name {
      font-weight: bold;
      color: white;
    }

    .react-nav {
      margin-left: -30%;
    }

    .content {
      text-align: center;
    }
    .song-stuff {
    margin-left: 0%;
  }

    .logo {
      width: 50%;
    }

    #react-listen-content {
      margin-top: -10%;
      margin-bottom: 10px;
      text-align: center;
    }
  }
  @media (max-width: 990px) {
  .startpause {
      margin-left: 10px;
    }
    .volumebar {
      padding-left: 15px;
    }
    .song-stuff {
    margin-left: 20%;
  }
    }
  @media (max-width: 770px) {
    .volumebar {
      margin-top: 5px!important;
    }
    .player {
      max-width: 200px;
    }
    .song-stuff {
    margin-left: 0%;
  }
    


  }
  input[type=range][orient=vertical]
{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* WebKit */
    width: 8px;
    height: 80px;
    padding: 0 5px;
}
</style>
