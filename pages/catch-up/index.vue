<template>
  <div class="page">
    <section class="container pt-3 pb-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">Catch Up</h4>
        </div>
          <h6 style="text-align:center">Catch up on the last weeks shows! See all our shows on <a href="https://mixcloud.com/ReachRadioUK">Mixcloud</a>.</h6>
          <div v-for="member in users" v-if="member.roles[0].name == 'Presenter' || member.roles[0].name == 'Owners' || member.roles[0].name == 'Management' ">
              <b-row align-h="center" style="border-bottom: 1px dashed #1c48a2;margin-top:15px;">
                <div class="border2">
                    <b-col style="text-align:center;min-width:250px;">
                      <img :src="member.avatar" width=150px /><br>
                      <h3 class="border3 ml-1 mr-1 pt-3">{{member.firstName}} {{member.lastName}}</h3>
                    </b-col>
                  
                </div>
                <b-col style="min-width:250px;text-align:center;margin-bottom: 25px;">
                  <div v-for="show in shows" v-if="show.fields.presenter == member.firstName && show.fields.unixtimestamp > currentTime">
                    <b-row><b-col>
                      <n-link style="text-decoration: underline;" class="catch_up_color" :to="'/catch-up/' + show.fields.slug">{{show.fields.showName}}</n-link>
                        <p v-if="show.fields.presenterShow">{{member.firstName}} {{member.lastName}} gets you through {{show.fields.presenterShow}}</p>
                        <p v-else>{{member.firstName}} {{member.lastName}} gets you through {{show.fields.showName}}</p>
                        </b-col>
                        <b-col>
                          <n-link class="catch_up_color" :to="'/catch-up/' + show.fields.slug"><button class="btn btn-primary buttonchange" style="float:right;margin-right:15px;">Listen now</button></n-link>
                          <p style="float:right;margin-right:15px;">(Expires: {{show.fields.unixtimestamp-currentTime | hour}} days)</p>
                        </b-col>
                      </b-row>
                  </div>
                </b-col>
              </b-row>
          </div>
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
    data() {
      return{
        currentTime: moment().unix()-604800,
        users: [],
        shows: []
      }
    },
    mounted: function(){
      axios.get('https://api.radiopanel.co/api/v1/users', config)
        .then((res) => {
          this.users = res.data._embedded
        }),
      axios.get('https://api.radiopanel.co/api/v1/content-types/53984224-3f19-4f3f-b058-e2eb77ebbfbf/content?pagesize=500000', config)
        .then((res) => {
          this.shows = res.data._embedded.sort((b, a) => parseInt(a.fields.unixtimestamp) - parseInt(b.fields.unixtimestamp))
        })
    },
    filters: {
      hour: function (date) {
        return moment.unix(date).format('D');
      }
    },
}
</script>

<style>
</style>
