<template>
  <div class="page" style="padding-bottom: 160px;">
    <section class="container pt-3">
      <div>
        <div style="display: flex;">
          <b-container>
            <b-row>
              <b-col sm="10" style="text-align:center;">
                <h3 style="margin-bottom:0px;">Catch Up</h3>
                <h4 class="border3 ml-1 mr-1 mb-3">{{this.currentTime | moment}}</h4>
              </b-col>
              <b-col>
              <div style="text-align:center">
              <b-button @click="previousDay" variant="primary" style="margin: 1px; height: 50px;margin-right:3px;">Prev</b-button>
              <b-button @click="nextDay" variant="primary" style="margin: 1px; height: 50px;">Next</b-button>
              </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <b-container fluid class="time">
          <b-row>
            <div :key="slot.uuid" v-for="slot in slots" v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'" class="col-sm-5 mt-3 mr-3" style="min-width:290px;border-radius:5px;">
              <!-- Slot Div -->
              <b-row class="schedule home-pbox">
                <b-col style="padding-left: 0px; display:block;border-top-left-radius:5px;border-bottom-left-radius:5px;" class="imagechange">
                  <img :src="slot.user.avatar" style="border-top-left-radius:5px!important;border-bottom-left-radius:5px;" height=120 v-if="slot.user.avatar != null">
                  <img height=120 style="border-top-left-radius:5px;border-radius:5px" src="https://i.imgur.com/N6rjb6G.png" v-else>
                </b-col>
                <b-col class="timetable_slot">
                    <h6 style="margin-bottom:0px;margin-top:13px;"><b>
                        <div style="min-width: 145px;" v-if="slot.user.uuid != 'c4b3638a-074c-40e2-8c09-6dcef23ab0ff'">
                            <div v-if="slot.user.uuid != '3d1921b2-6043-4418-8b04-501ea83b1a52'">
                                {{slot.user.firstName + ' '+slot.user.lastName}}<br>
                            </div>
                        </div>
                    </b></h6>
                    <div>
                        <h6 style="margin-bottom:0px;">{{slot.title}}</h6>
                        <small>{{slot.start | hour}} - {{slot.end | hour}}</small>
                        <n-link to="/" v-if="currentTime >= slot.start && currentTime <= slot.end">
                            <b-button pill size="sm" variant="primary" style="float:right;">Listen now</b-button>
                        </n-link>
                        <b-button v-else-if="catchuptime <= slot.end" pill disabled size="sm" variant="secondary" style="float:right;">Unavailable</b-button>
                        <div v-for="show in shows">
                            <n-link :to="'catch-up/'+show.fields.slug" v-if="show.fields.presenterShow == slot.title && show.fields.presenter == slot.user.firstName && show.fields.unixtimestamp <= endOfDay && show.fields.unixtimestamp >= startOfDay">
                                <b-button pill size="sm" variant="primary" style="float:right;">Listen back</b-button>
                            </n-link>
                        </div>
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

  export default {
    head: {
      title: 'Reach - Timetable',
      meta: [
        {hid: 'description', name: 'description', content: 'Check out latest shows from Reach Radio'}
      ],
    },
    data() {
      return {
        catchuptime:    moment().unix()+240,
        currentTime: moment().unix(),
        startOfDay: moment()
          .startOf("day")
          .unix(),
        endOfDay: moment()
          .endOf("day")
          .unix(),
        slots: [],
        shows: []
      }
    },
    created: function () {
      this.loadSlots();
    },
    mounted: function(){
      axios.get(`#`)
        .then((res) => {
          this.shows = res.data._embedded.sort((b, a) => parseInt(a.fields.unixtimestamp) - parseInt(b.fields.unixtimestamp))
        })
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
            `#`,
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
