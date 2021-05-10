<template>
  <div class="page" style="padding-bottom: 10px;">
    <section class="container pt-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-0 standardheader" style="display: flex;">
          <b-container>
            <b-row>
              <b-col sm="10">
              <h4 style="margin-right: 10px;margin-top: 12px;">Timetable on {{this.currentTime | moment}}</h4>
              </b-col>
              <b-col>
              <div style="text-align:center">
              <button @click="previousDay" class="btn btn-danger" style="margin: 1px; height: 50px;margin-right:3px;">Prev</button>
              <button @click="nextDay" class="btn btn-danger" style="margin: 1px; height: 50px;">Next</button>
              </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <b-container fluid class="time">
          <b-row>
            <div :key="slot.uuid" v-for="slot in slots" class="show2 col-sm-5 mt-3" style="min-width:290px">
              <!-- Slot Div -->
              <b-row>
                <b-col style="padding-left: 0px; display:block" class="imagechange">
                  <img :src="slot.user.avatar" height=120 v-if="slot.user.avatar != null">
                  <img height=120 src="https://i.imgur.com/N6rjb6G.png" v-else>
                </b-col>
                <b-col class="timetable_slot">
                    <h5><br>
                      <div style="min-width: 145px;" v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">{{slot.user.firstName + ' '+slot.user.lastName}}<br></div></h5>
                          
                          <div v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'"><h6>{{slot.title}}<br>
                          {{slot.start | hour}} - {{slot.end | hour}}
                        </h6></div>
                        <div v-else>
                          <h5>{{slot.title}}<br></h5>
                          <h6>
                          {{slot.start | hour}} - {{slot.end | hour}}
                          </h6>
                        </div>
                </b-col>
              </b-row>
            </div>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script>

  import axios from 'axios'
  import moment from 'moment'

  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
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
      nextDay: function (e) {
        e.preventDefault();
        this.currentTime += 86400;
        this.loadSlots();
      },
      previousDay: function (e) {
        e.preventDefault();
        this.currentTime -= 86400;
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
            `https://api.radiopanel.co/api/v1/slots?beforeDate=${this.endOfDay}&afterDate=${this.startOfDay}`, config
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
  .show2 {
    margin-right: 15px;
  }
  .timetable_slot {
    margin-left: -180px;
  }
  .time {
    margin-left: 8%
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
