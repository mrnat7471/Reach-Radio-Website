<template>
  <div class="page" style="padding-bottom: 10px;">
    <section class="container pt-3">
      <div style="display: flex;">
        <b-container>
          <b-row>
            <b-col sm="10">
            <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Schedule on {{this.currentTime | moment}}</h3>
            </b-col>
            <b-col>
            <div style="text-align:center">
            <b-button v-if="theday > -7" @click="previousDay" variant="primary" style="margin: 1px; height: 50px;margin-right:3px;">Prev</b-button>
            <b-button v-if="theday < 14" @click="nextDay" variant="primary" style="margin: 1px; height: 50px;">Next</b-button>
            </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container fluid class="time" v-if="slots[0]">
        <b-row>
          <div :key="slot.uuid" v-for="slot in slots" class="col-sm-5 mt-3 mr-3" style="min-width:290px;border-radius:5px;">
            <!-- Slot Div -->
            <b-row class="schedule home-pbox">
              <b-col style="padding-left: 0px; display:block;border-top-left-radius:5px;border-bottom-left-radius:5px;" class="imagechange">
                <img :src="slot.user.avatar" style="border-top-left-radius:5px!important;border-bottom-left-radius:5px;" height=120 v-if="slot.user.avatar != null">
                <img height=120 style="border-top-left-radius:5px;border-radius:5px" src="https://i.imgur.com/N6rjb6G.png" v-else>
              </b-col>
              <b-col class="timetable_slot">
                <h5><br>
                  <div style="min-width: 145px;" v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
                    <div v-if="slot.user.uuid != '3d1921b2-6043-4418-8b04-501ea83b1a52'">{{slot.user.firstName + ' '+slot.user.lastName}}<br></div>
                  </div>
                </h5>
                <div v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
                  <div v-if="slot.user.uuid == '3d1921b2-6043-4418-8b04-501ea83b1a52'">
                    <h5>{{slot.title}}<br></h5>
                    <h6>{{slot.start | hour}} - {{slot.end | hour}}</h6>
                  </div>
                  <div v-else>
                    <h6>{{slot.title}}<br>{{slot.start | hour}} - {{slot.end | hour}}</h6>
                  </div>
                </div>
                <div v-else>
                  <h5>{{slot.title}}<br></h5>
                  <h6>{{slot.start | hour}} - {{slot.end | hour}}</h6>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-row>
      </b-container>
      <p v-else style="text-align:center"><b-spinner variant="primary" label="Spinning"></b-spinner></p><br>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'

  export default {
    head: {
      title: 'Reach - Timetable',
      meta: [
        {hid: 'description', name: 'description', content: 'Check out latest shows from Reach Radio'}
      ],
    },
    data() {
      return {
        currentTime: moment().unix(),
        theday: 0,
        startOfDay: moment()
          .startOf("day")
          .unix(),
        endOfDay: moment()
          .endOf("day")
          .unix(),
        slots: [],
      }
    },
    created: function () {
      this.loadSlots();
    },
    methods: {
      popoutplayer: function () {
        window.open("/listen/reach-radio","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=700,width=400");
      },
      nextDay: function (e) {
        e.preventDefault();
        this.currentTime += 86400;
        this.theday += 1;
        this.loadSlots();
      },
      previousDay: function (e) {
        e.preventDefault();
        this.currentTime -= 86400;
        this.theday -= 1;
        this.loadSlots();
      },
      loadSlots: function () {
        this.startOfDay = moment(this.currentTime * 1000)
          .startOf("day")
          .unix();
        this.endOfDay = moment(this.currentTime * 1000)
          .endOf("day")
          .unix();
        axios
          .get(
            `#`
          )
          .then(response => {
            this.slots = response.data._embedded;
          });
      }
    },
    filters: {
      moment: function (date) {
        return moment.unix(date).format('MMMM Do YYYY');
      },
      hour: function (date) {
        return moment.unix(date).format('H:mm');
      }
    }
  }
</script>

<style>
  .listen_button{
      display:inline!important;
      position: absolute;
      float: right;
      bottom:0;
      right:0;
      margin-right:15px;
      margin-bottom:15px;
    }
  .show2 {
    margin-right: 15px;
  }
  .timetable_slot {
    margin-left: -180px;
  }
  .time {
    margin-left: 8%
  }
  .schedule:hover{
  top: -3px;
}
.schedule{
  position: relative;
  top: 0px;
  transition: all 0.1s ease;
  border-radius:5px;
}
  @media (max-width: 1201px) {
    .timetable_slot {
      margin-left: -35px;
    }
  }
 @media (max-width: 770px) {
    .show2 {
      margin-left: 70px;
    }
  }
  @media (max-width: 573px) {
    .time {
      margin-left: 1%;
    }
    .show2 {
    margin-left: 0px;
  }
  }
</style>
