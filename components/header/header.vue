<template>
  <div>
    <div class="header-holder">
      <Navbar></Navbar>
      <b-container>
        <b-row class="presenter-header" v-if="live">
          <b-col md=2 v-if="live.slotType.name != 'No Presenter'" class="livepresenterimage-div mr-3">
            <div v-if="live.user.avatar" :style="{ backgroundImage: `url('https://varnish.radiopanel.co/resize?url=${live.user.avatar}&height=270')` }" class="livepresenterimage"></div>
          </b-col>
          <b-col md=2 v-if="live.slotType.name == 'No Presenter'" class="reach-banner">
            <div class="content reach-banner-content">
              <span class="badge badge-danger" >ON AIR</span>
              <h5 class="reach-banner-content-text">{{live.title}}</h5>
              <p v-if="live.start">{{live.start | hour}} - {{live.end | hour}}
                <a href="/listen-mobile/reach-radio-128aac">
                  <button type="button" class="btn btn-dark btn-sm listen-badge">Listen Now</button>
                </a>
              </p>
            </div>
          </b-col>
          <b-col md=3 v-if="live.slotType.name != 'No Presenter'" class="reach-banner">
            <div class="content reach-banner-content">
              <span class="badge badge-danger" >ON AIR</span>
              <span v-b-modal.message class="badge badge-dark">Shoutout</span>
              <h5 class="reach-banner-content-text">{{live.title}} with {{live.user.firstName}} {{live.user.lastName}}</h5>
              <p v-if="live.start">{{live.start | hour}} - {{live.end | hour}}
                <a href="/listen-mobile/reach-radio-128aac" target="_blank">
                  <button type="button" class="btn btn-dark btn-sm listen-badge">Listen Now</button>
                </a>
              </p>
            </div>
          </b-col>
          <b-col md=1 style="padding-left:0px;">
            <a class="listen" @click="popoutplayer">
              <div class="listen-div">
                <button type="button" class="btn btn-dark btn-sm">Listen Now</button>
              </div>
            </a>

          </b-col>
        </b-row>
        <b-row v-else>
          <b-col md=2 style="padding-right:0px;">
            <div class="content" id="react-banner-content" style="color: white;top: 50%;">
              <span class="badge badge-danger" >ON AIR</span>
              <n-link to="/on-air/schedule">
                <h5 class="text-change" style="color: white;margin-top:10px">Non Stop Hits</h5>
              </n-link>
              <p style="margin-bottom:25px;">0:00 - 0:00
                <a href="/listen-mobile/reach-radio-128aac">
                  <button type="button" class="btn btn-dark btn-sm listen-badge" style="position: relative;float: right;margin-right:15px;">Listen Now</button>
                </a>
              </p>
            </div>
          </b-col>
          <b-col md=1 style="padding-left:0px;">
            <a class="listen" @click="popoutplayer">
              <div class="listen-div">
                <button type="button" class="btn btn-dark btn-sm">Listen Now</button>
              </div>
            </a>

          </b-col>
        </b-row>
      </b-container>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import Navbar from '~/components/header/Navbar.vue'
  import Modal from '~/components/misc/request-modal.vue'

  let sendData = ""
  const nowPlayingUrl = `#`
  export default {
    components: {
      Navbar,
      Modal
    },
    filters: {
      hour: function (date) {
        return moment.unix(date).format('H:mm');
      }
    },
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        errors: [],
        success: [],
        loading: false,
        live: {
          slotType: {},
          user: {}
        },

      }
    },
    created: function () {
      this.getNpInfo();
    },
    mounted() {
      window.setInterval(() => {
        this.getNpInfo();
      }, 30000);

    },
    methods: {
      popoutplayer: function () {
        window.open("/listen/reach-radio","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=700,width=400");
      },
       countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      getNpInfo() {
        axios.get(nowPlayingUrl)
          .then((res) => {
            this.live = res.data;
          })
      }
    }
  }
</script>
<style>
  .presenter-header{
    padding-top:15px;
  }
  .header-holder {
    background-position: 50%;
    background-color: #003d91;
    background-size: cover;
    background-attachment: scroll;
  }
  .livepresenterimage {
    width: 13rem;
    height: 170px;
    background-position: top;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: scroll;
    background-repeat: no-repeat;
  }
  .reach-banner{
    padding-right:0px;
  }
  .reach-banner-content {
    padding-top: 5%;
    overflow: hidden;
    margin: auto;
    color: white;
    top: 50%;
  }
  .reach-banner-content-text {
    color: white;
    margin-top:10px;
  }
  .reach-listen-content {
    padding-top: 13%;
  }
  .listen-badge{
    display:none;
  }
  .listen-div {
    top: 38px;
    width: 105px;
    position: absolute;
  }
  .listen {
    text-decoration: none;
    font-size: 22px;
    text-align: center;
  }
  @media (max-width: 990px) {
    .livepresenterimage-div {
      display:none;
    }
  }
  @media(max-width:767px){
    .listen-div {
      display:none;
     }
    .listen-badge{
      display:inline!important;
      position: relative;
      float: right;
      margin-right:15px;
    }
  }
</style>
