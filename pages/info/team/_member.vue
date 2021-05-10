<template>
    <div class="page pb-1">
        <section class="container pt-3" style="max-width:800px">
            <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
                <h4 style="padding-right: 10px;">Profile</h4>
            </div>
            <b-container fluid>
                <b-row align-h="center">
                    <b-col md=4.2>
                        <div class="team-member2" style="margin-bottom:5px;">
                            <img :src="profile.avatar" class="team-img imagechange" style="height:250px" v-if="profile.avatar">
                            <img class="team-img imagechange" src="~/assets/images/main/r-small.png" style="height:250px" v-else>
                                <b-row align-h="center"><h5 style="padding-top: 8px;">{{profile.firstName}} {{profile.lastName}}</h5><br></b-row>
                                    <div :key="role.name" v-for="role in on_air_roles" style="text-align:center;margin:auto">
                                        <b-row align-h="center"><div v-if="profile.roles[0].name == role.name" class="role2">
                                            <p class="role3" v-bind:style="{color: role.color}">{{role.name}}</p>
                                        </div></b-row>
                                    </div>
                                    <div :key="role.name" v-for="role in off_air_roles" style="text-align:center;margin:auto">
                                        <b-row align-h="center"><div v-if="profile.roles[0].name == role.name" class="role2">
                                            <p class="role3" v-bind:style="{color: role.color}">{{role.name}}</p>
                                        </div></b-row>
                                    </div>
                                    <b-row align-h="center"><p><b>Joined:</b> {{profile.createdAt | moment}}</p></b-row>
                                    <b-row align-h="center" v-if="profile.customData.favouriteGame"><p><b>Favourite Game:</b> {{profile.customData.favouriteGame}}</p></b-row>
                                        <b-row style="margin-top: -7px!important; padding-bottom: 7px;text-align:center;" v-if="profile.socials">
                                            <b-col><a :href="'https://twitter.com/' + profile.socials.twitter" style="padding-right: 10px;"
                                                        v-if="profile.socials.twitter">
                                            <font-awesome-icon :icon="['fab', 'twitter-square']" class="icon-footer"
                                                                style="font-size: 25px;"/>
                                            </a>
                                            <a :href="'https://instagram.com/' + profile.socials.instagram" style="padding-right: 10px;"
                                                v-if="profile.socials.instagram">
                                                <font-awesome-icon :icon="['fab', 'instagram']" class="icon-footer" style="font-size: 25px;"/>
                                            </a>
                                            <a :href="'https://twitch.tv/' + profile.socials.twitch" v-if="profile.socials.twitch">
                                                <font-awesome-icon :icon="['fab', 'twitch']" class="icon-footer" style="font-size: 25px;"/>
                                            </a>
                                            <a :href="profile.socials.youtube" v-if="profile.socials.youtube">
                                                <font-awesome-icon :icon="['fab', 'youtube']" class="icon-footer" style="font-size: 25px;"/>
                                            </a>
                                            <a target="_blank" :href="'https://www.facebook.com/'+profile.socials.facebook" v-if="profile.socials.facebook">
                                                <font-awesome-icon :icon="['fab', 'facebook']" class="icon-footer" style="font-size: 25px;"/>
                                            </a>
                                            <a v-if="profile.socials.discord">
                                                <font-awesome-icon v-b-tooltip.hover.top="profile.socials.discord" :icon="['fab', 'discord']" class="icon-footer" style="font-size: 25px;"/>
                                            </a>
                                            </b-col>
                                        </b-row>
                        </div>
                    </b-col>
                    <b-col md=5 v-if="profile.customData.favouriteSong">
                        
                        <div style="background-color: black; color: white;">
                            <h6 style="text-align:center">Favourite Song:</h6>
                            <div>
                                <div class="image imagechange"><img :src="profile.customData.favouriteSong.graphic.medium" style="height: auto; width: 100%;"></div>
                            </div>
                            <div>
                                <h4 style="text-align:center">{{profile.customData.favouriteSong.title}}</h4>
                                <p style="text-align:center;margin-bottom:1px;">{{profile.customData.favouriteSong.artist}}</p>
                            </div>
                            <div class="pb-1" style="text-align:center" v-if="profile.customData.favouriteSong.extraInfo.trackUrl">
                                <a :href="profile.customData.favouriteSong.extraInfo.trackUrl"><img src="~assets/icons/applesmall.png"></a>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <div :key="role.name" v-for="role in on_air_roles">
                <div v-if="profile.roles[0].name == role.name">
                    <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="display: flex;">
                        <h4 style="padding-right: 10px;">Catchup Episodes</h4>
                    </div>
                    <b-row>
                        <b-col>
                                <div class="team-member2 about-us" style="min-height: 300px;min-height:340px;margin-bottom:15px;padding-bottom:1px;">
                                    <div style="padding-top:15px;"></div>
                                    <div v-for="theshow in shows" v-if="theshow.fields.presenter == profile.firstName">
                                        <div v-if="theshow.fields.unixtimestamp > currentTime" style="padding-left: 15px;" class="catch_up_color">
                                            <b-row><b-col>
                                            <n-link style="text-decoration: underline;" class="catch_up_color" :to="'/catch-up/' + theshow.fields.slug">{{theshow.fields.showName}}</n-link>
                                            <p v-if="theshow.fields.presenterShow">{{profile.firstName}} {{profile.lastName}} gets you through {{theshow.fields.presenterShow}}.</p>
                                            <p v-else>{{profile.firstName}} {{profile.lastName}} gets you through {{theshow.fields.showName}}.</p>
                                            </b-col>
                                            <b-col>
                                                <n-link class="catch_up_color" :to="'/catch-up/' + theshow.fields.slug"><button class="btn btn-primary buttonchange" style="float:right;margin-right:15px;">Listen now</button></n-link>
                                                <p style="float:right;margin-right:15px;">(Expires: {{theshow.fields.unixtimestamp-currentTime | hour}} days)</p>
                                            </b-col>
                                            </b-row>
                                        </div>
                                    </div>
                                </div>
                        </b-col>
                    </b-row>
                </div>
                </div>
            </b-container>
        </section>
    </div>   
</template>
<script>
  import axios from 'axios'
  import moment from 'moment'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)


  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    data() {
      return {
        currentTime: moment().unix()-604800,
        profile: {
            roles: [{
                name: "hi"
            }],
            firstName: "Loading",
            lastName: "Loading",
            avatar: " ",
            createdAt: "2020-01-07T18:37:43.570Z",
            bio: "Loading",
            customData: {
                aboutMe: "Loading",
                favouriteSong: {
                    graphic: {
                        medium: "",
                    },
                    artist: "Loading",
                    title: "Loading"
                }
            },
        },
        shows:[
            {
            fields:
            {
                slug: "breakfast-with-joseph-rumens-21-12-2020",
                showName: "Reach Breakfast 21-12-2020",
                presenter: "Joseph",
                unixtimestamp: "1608508800"
            }
            }
        ],
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
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/users/${params.member}`, config)
        .then((res) => {
          return {profile: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
        })
    },
    mounted: function () {
        this.getshows();
    },
    methods: {
        getshows() {
            axios.get('https://api.radiopanel.co/api/v1/content-types/53984224-3f19-4f3f-b058-e2eb77ebbfbf/content?pagesize=50000', config)
            .then((res) => {
            this.shows = res.data._embedded.sort((b, a) => parseInt(a.fields.unixtimestamp) - parseInt(b.fields.unixtimestamp));
            }) 
        },
    },
    filters: {
      moment: function (date) {
        return moment(date).format('Do MMMM YYYY');
      },
      hour: function (date) {
        return moment.unix(date).format('D');
      }
    },
  }

</script>
<style>
  .team-member2 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    width: 254px;
    min-height: 330px;
  }
  .about-us {
      text-align:left;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      width: 100%
  }
  .role3 {
  border: 2px solid;
  border-radius: 25px;
  padding-left: 5px;
  padding-right: 5px;
  text-align:center;
  margin-left:25px;
  margin-right:25px;

}
</style>