<template>
  <div>
    <div class="header-holder">
      <Navbar></Navbar>
      <div class="mt-2" style="text-align:center;color:white;">
        <b-badge variant="danger">LIVE NOW</b-badge>
        <h5 class="mt-1"><b>{{live.title}} <span v-if="live.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">With {{live.user.firstName}} {{live.user.lastName}}</span></b></h5>
        <h6>{{live.start | hour}} - {{live.end | hour}}</h6>
      </div>
      <p style="margin-bottom:0px;text-align:center;" v-if="live.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
        <img :src="live.user.avatar" class="livepresenterimage">
      </p>
      <p style="margin-bottom:0px;text-align:center;" v-else>
        <br>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import Navbar from '~/components/header/Navbar.vue' 

 let sendData = ""
  const nowPlayingUrl = `#`

  export default {
    components: {
      Navbar,
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
          title: "Loading...",
          start: 0,
          end: 0,
          user: {
            uuid: null,
            firstName: "Loading..."
          }
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
      getNpInfo() {
        axios.get(nowPlayingUrl, auth)
          .then((res) => {
            this.live = res.data;
          })
      }
    }
  }
</script>
<style>
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .header-logo {
    justify-content: center;
  }

  .header-logo div {
    display: inline-block;
  }

  

  .header-holder {
    background-position: 50%;
    background-color: #003d91;
    background-size: cover;
    background-attachment: scroll;
  }

  .livepresenterimage {
    height: 170px;
  }

  #react-banner-content {
    padding-top: 5%;
    overflow: hidden;
    margin: auto;
  }

  #react-listen-content {
    padding-top: 13%;
  }

  @media (max-width: 990px) {
    .logo {
      width: 50%;
    }
     .listen-div {
      display:none;
     }
    .livepresenterimage-div {
      display:none;
    }
    .listen-badge{
      display:inline!important;
    }
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
      color: #FFF!important;
      text-align: center;
    }

</style>
