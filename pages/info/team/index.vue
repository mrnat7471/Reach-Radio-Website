<template>
  <div class="page">
    <section class="container pt-3">
      <div>
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">On Air Team</h4>
        </div>
        <!-- Next Row would be a different rank -->
        <b-container class="team-container" id="mobile-center">
          <b-row>
            <div :key="member.uuid" v-for="member in team">
                <div :key="role.name" v-for="role in on_air_roles">
                  <b-col v-if="member.roles[0].name == role.name">
                    <div class="team-member">
                      <img :src="member.avatar" class="team-img imagechange" style="height:250px" v-if="member.avatar">
                      <img class="team-img imagechange" src="~/assets/images/main/r-small.png" style="height:250px" v-else>
                      <n-link :to="'/info/team/' + member.uuid"><h5 class="namechange" style="padding-top: 8px;">{{member.firstName}}</h5></n-link>
                      <div style="text-align:center;">
                      <p class="role" v-bind:style="{color: role.color}">{{role.name}}</p></div>
                        <div style="width: 225px">
                          <h6 v-if="member.customData.show" style="text-decoration: underline;font-weight: bold;">{{member.customData.show}}</h6>
                          <p style="text-overflow:initial;overflow: hidden;max-height: 2.7em;">{{member.bio}}</p>
                        </div>
                        <b-container>
                          <b-row style="margin-top: -7px!important; padding-bottom: 7px;" v-if="member.socials">
                            <b-col><a :href="'https://twitter.com/' + member.socials.twitter" style="padding-right: 10px;"
                                        v-if="member.socials.twitter">
                              <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon-footer"
                                                  style="font-size: 25px;"/>
                              </a>
                              <a :href="'https://instagram.com/' + member.socials.instagram" style="padding-right: 10px;"
                                  v-if="member.socials.instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a :href="'https://twitch.tv/' + member.socials.twitch" v-if="member.socials.twitch">
                                <font-awesome-icon :icon="['fab', 'twitch']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a :href="member.socials.youtube" v-if="member.socials.youtube">
                                <font-awesome-icon :icon="['fab', 'youtube']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a target="_blank" :href="'https://www.facebook.com/'+member.socials.facebook" v-if="member.socials.facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <div v-if="member.socials.discord" style="padding-left:5px;">
                                <font-awesome-icon v-b-tooltip.hover.top="member.socials.discord" :icon="['fab', 'discord']" class="icon-footer" style="font-size: 25px;"/>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>
                  </b-col>
                </div>
              </div>
          </b-row>

        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
          <h4 style="padding-right: 10px;">Behind The Scenes</h4>
        </div>

        <b-row>
            <div :key="member.uuid" v-for="member in team">
                <div :key="role.name" v-for="role in off_air_roles">
                  <b-col v-if="member.roles[0].name == role.name">
                    <div class="team-member">
                      <img :src="member.avatar" class="team-img imagechange" style="height:250px" v-if="member.avatar">
                      <img class="team-img imagechange" src="~/assets/images/main/r-small.png" style="height:250px" v-else>
                      <n-link :to="'/info/team/' + member.uuid"><h5 class="namechange" style="padding-top: 8px;">{{member.firstName}}</h5></n-link>
                      <div style="text-align:center;"><p class="role" v-bind:style="{color: role.color}">{{role.name}}</p></div>
                        <div style="width: 225px">
                          <p style="text-overflow:initial;overflow: hidden;max-height: 2.7em;">{{member.bio}}</p>
                        </div>
                        <b-container>
                          <b-row style="margin-top: -7px!important; padding-bottom: 7px;" v-if="member.socials">
                            <b-col><a :href="'https://twitter.com/' + member.socials.twitter" style="padding-right: 10px;"
                                        v-if="member.socials.twitter">
                              <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon-footer"
                                                  style="font-size: 25px;"/>
                              </a>
                              <a :href="'https://instagram.com/' + member.socials.instagram" style="padding-right: 10px;"
                                  v-if="member.socials.instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a :href="'https://twitch.tv/' + member.socials.twitch" v-if="member.socials.twitch">
                                <font-awesome-icon :icon="['fab', 'twitch']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a :href="member.socials.youtube" v-if="member.socials.youtube" style="padding-left:10px;">
                                <font-awesome-icon :icon="['fab', 'youtube']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <a target="_blank" :href="'https://www.facebook.com/'+member.socials.facebook" v-if="member.socials.facebook" style="padding-left:10px;">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="icon-footer" style="font-size: 25px;"/>
                              </a>
                              <div v-if="member.socials.discord" style="padding-left:10px;">
                                <font-awesome-icon v-b-tooltip.hover.top="member.socials.discord" :icon="['fab', 'discord']" class="icon-footer" style="font-size: 25px;"/>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </div>
                  </b-col>
                </div>
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
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare, faYoutube} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch, faYoutube)
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    data() {
      return {
        member: {
        customData: {
          show: null,
        }
        },
        on_air_roles: [
          {name:'Owners',color: '#724635',},
          {name:'Management',color: '#4169E1',},
          {name:'Presenter',color:'#ff8500',},
          {name:'Cover Presenter',color:'#ff8500',}
        ],
        off_air_roles: [
          {name:'Senior Developer',color: '#228B22',},
          {name:'Log Management',color:'#ffa724',},
          {name:'Developer',color: '#2ECC71',},
          {name:'Sales Manager',color:'#b233ff',},
          {name:'Sales',color:'#b233ff',},
          {name:'Writer',color:'#B20000',}
        ]
      }
    },
    head: {
      title: 'Reach - Team',
      meta: [
        {hid: 'description', name: 'description', content: 'Get to know our team at Reach.'}
      ],
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/users`, config)
        .then((res) => {
          return {team: res.data._embedded}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Users not found'})
        })
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    },
  }

</script>

<style>
.role {
  border: 2px solid;
  border-radius: 25px;
  min-width: 80px;
  padding-left: 5px;
  padding-right: 5px;
}
  .team-container {
    text-align: center;
  }

  .team-member {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    margin: auto;
    width: 254px;
    min-height: 365px;
    overflow: hidden;
    text-align: center;
    margin-bottom: 20px;
  }

  .team-img {
    width: 100%;
    height: 215px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .team-container div {
    display: inline-block;
  }
</style>
