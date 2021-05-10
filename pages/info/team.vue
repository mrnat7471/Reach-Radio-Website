<template>
  <div class="page">
    <section class="container pt-3">
      <div>
        <h3 class="border3 ml-1 mr-1 pt-3 mb-3">Our Team</h3>
        <!-- Next Row would be a different rank -->
        <b-container class="team-container" id="mobile-center">
          <b-row>
            <div :key="member.uuid" v-for="member in team" v-if="member.customData.hideProfileOnTeamPage != true">
                <div>
                  <b-col>
                    <div class="team-member">
                      <img :src="member.avatar" class="team-img imagechange" style="height:250px" v-if="member.avatar">
                      <img class="team-img imagechange" src="~/assets/images/main/r-small.webp" style="height:250px" v-else>
                      <h5 class="namechange" style="padding-top: 8px;">{{member.firstName}}</h5>
                      <div style="text-align:center;">
                      <h6><u>{{member.roles[0].name}}</u></h6></div>
                        <div style="width: 225px">
                          <p style="text-overflow:initial;overflow: hidden;height: 1.35em;">{{member.bio}}</p>
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
  export default {
    data() {
      return {
        member: {
          customData: {
            hideProfileOnTeamPage: false,
          }
        },
        test: ", ",
      }
    },
    head: {
      title: 'Reach - Team',
      meta: [
        {hid: 'description', name: 'description', content: 'Get to know our team at Reach.'}
      ],
    },
    asyncData({params, error}) {
      return axios.get(`#`)
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
