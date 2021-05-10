<template>
  <div class="page">
    <section class="container pt-3 pb-3">
      <div>
        <div v-if="versions.supported_game_version">
          <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Latest TruckersMP Information</h3>
          <div>
              <b-row>
                <b-col><h6 style="text-align: center">ETS2 Supported Version</h6>
                <p style="text-align: center">{{versions.supported_game_version}}</p><br></b-col>

                <b-col><h6 style="text-align: center">ATS Supported Version</h6>
                <p style="text-align: center">{{versions.supported_game_version}}</p><br></b-col>

                <b-col><h6 style="text-align: center">Currently Trucking</h6>
                <p style="text-align: center">{{theplayers.totalPlayers}}</p></b-col>
              </b-row>
          </div>
        </div>
        <div v-else>
          <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Latest TruckersMP Information</h3>
          <p style="text-align:center"><b-spinner variant="primary" label="Spinning"></b-spinner></p>
        </div>

        <div v-if="theplayers.servers[0]">
          <h3 class="border3 ml-1 mr-1 pt-3 mb-3">TruckersMP Traffic</h3>

          <div class="grid-container2">
          <div v-for="server in theplayers.servers" v-if="server.shortname == 'EU SIM 1'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>Simulation 1 ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in sim1" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
          </div>
          <div v-for="server in theplayers.servers" v-if="server.shortname == 'EU SIM 2'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>Simulation 2 ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in sim2" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
            </div>
          <div v-for="server in theplayers.servers" v-if="server.shortname == 'US SIM' && server.game == 'ETS2'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>US Simulation ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in ussim" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
          </div>
          </div>
          <div class="grid-container2">
          <div v-for="server in theplayers.servers" v-if="server.shortname == 'EU ARC'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>Arcade ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in arcade" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
            </div>

          <div v-for="server in theplayers.servers" v-if="server.shortname == 'EU PM'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>ProMods ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in pm" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
          </div>
          <div v-for="server in theplayers.servers" v-if="server.shortname == 'US SIM' && server.game == 'ATS'">
              <div class="pt-3 pb-3 mb-1 m-2 home-pbox-1 grid-item2">
                <div class="pl-3">
                  <h6>ATS US Simulation ({{server.players}}/{{server.maxplayers}})</h6>
                  <span v-for="city in ussim" :key="city.name">{{city.name}} - <strong v-bind:style="{color: city.color}">{{city.newSeverity}}</strong> ({{city.players}})<br></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3 class="border3 ml-1 mr-1 pt-3 mb-3">TruckersMP Traffic</h3>
          <p style="text-align:center"><b-spinner variant="primary" label="Spinning"></b-spinner></p>
        </div>

        <div v-if="events[0]">
          <b-row>
            <b-col>
            <h3 class="border3 ml-1 mr-1 pt-3 mb-3">TruckersMP Events Today</h3>
            </b-col>
          </b-row>

          <b-row style="margin-bottom: 10px; margin-left: 5px; margin-right: 5px;" v-for="event in events" v-bind:key="event.id">
            <b-col class="mb-3">
            <div><span style="font-size: 1.17em;"><b>{{event.name}}</b></span>
            <span v-if="event.server.id !== 0" style="font-size:14px;">({{event.game}} - {{event.server.name}})<br></span>
            <span v-else style="font-size:14px;">({{event.game}} - To be determined)<br></span>
            <div class="pt-1"><span v-if="event.vtc.name"><b>{{event.vtc.name}}</b></span><span v-else><b>{{event.user.username}}</b></span>
            | Starting Location: {{event.departure.city}} ({{event.departure.location}}) | {{event.start_at | tonow}} at {{event.start_at | hour}} UTC</div></div></b-col>
            <b-col sm=4 class="mb-3" ><a class="btn btn-primary buttonchange" style="float:right;" target="_blank" :href="'https://truckersmp.com'+event.url">More Info</a></b-col>
          </b-row>
        </div>
        <div v-else>
          <h3 class="border3 ml-1 mr-1 pt-3 mb-3">TruckersMP Events Today</h3>
          <p style="text-align:center"><b-spinner variant="primary" label="Spinning"></b-spinner></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

   import axios from 'axios'
   import moment from 'moment'

  export default {
    head: {
      title: 'Reach - Travel',
      meta: [
        {hid: 'description', name: 'description', content: 'Check out the latest on the road'}
      ],
    },
    data() {
      return {
        theplayers: {
          servers: []
        },
        versions: {},
        events: {},
        sim1: [],
        sim2: [],
        ussim: [],
        arcade: [],
        pm: [],
        pma: [],
        atsussim: [],
      }
    },
    mounted: function () {
      this.getPlayers();
      this.getVersion();
      this.getTruck();
      this.getsim1();
      this.getsim2();
      this.getussim();
      this.getarcade();
      this.getpm();
      this.getpma();
      this.getatsussim();
    },
    methods: {
      getTruck() {
        axios.get('#')
          .then((res) => {
            this.events = res.data.response.today.slice(0, 4);
          })
      },
      getPlayers() {
        axios.get('#')
          .then((res) => {
            this.theplayers = res.data.response;
          })
      },
      getVersion() {
        axios.get('#')
          .then((res) => {
            this.versions = res.data;
          })
      },
      getsim1() {
        axios.get('#')
          .then((res) => {
            this.sim1 = res.data.response.slice(0, 4);
          })
      },
      getsim2() {
        axios.get('#')
          .then((res) => {
            this.sim2 = res.data.response.slice(0, 4);
          })
      },
      getussim() {
        axios.get('#')
          .then((res) => {
            this.ussim = res.data.response.slice(0, 4);
          })
      },
      getarcade() {
        axios.get('#')
          .then((res) => {
            this.arcade = res.data.response.slice(0, 4);
          })
      },
      getpm() {
        axios.get('#')
          .then((res) => {
            this.pm = res.data.response.slice(0, 4);
          })
      },
      getpma() {
        axios.get('#')
          .then((res) => {
            this.pma = res.data.response.slice(0, 4);
          })
      },
      getatssim() {
        axios.get('#')
          .then((res) => {
            this.atssim = res.data.response.slice(0, 4);
          })
      },
      getatsussim() {
        axios.get('#')
          .then((res) => {
            this.atsussim = res.data.response.slice(0, 4);
          })
      }

    },
    filters: {
      tonow: function (date) {
        return moment(date).format('MMMM Do');
      },
      hour: function (date) {
        return moment(date).format('H:mm');
      },
    }
  }
</script>

<style>
.grid-container2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
}
.grid-item2 {
  margin:3px;
}
</style>
