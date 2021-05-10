<template>
    <div class="page pb-1">
        <section class="container pt-3">
              <b-row align-h="center" style="padding-bottom:10px; margin-left: 5px;margin-right:5px;">
                <b-col md=4>
                    <div style="text-align:center;">
                        <img style="margin: 3px;height:250px;width:250px;border-radius: 15px;object-fit: cover;" :src="podcast.graphic">
                        <div class="text-podcast">
                            <h5 style="margin-top:10px;text-align:center;">{{podcast.title}}</h5>
                            <p style="text-align:center;">{{podcast.description}}</p>
                        </div>
                    </div>
                </b-col>
                <b-col md=8 class="podcast-fix">
                    <div :key="entry.uuid" v-for="entry in podcast.entries">
                        <b-row style="margin-top:10px;">
                            <b-col sm=2>
                            <a v-b-toggle="'collapse-1-'+entry.slug">
                                <div class="podcast-image-all" style="width: 75px;">
                                    <div class="podcast-image" v-if="entry.graphic" :style="{ backgroundImage: `url('${entry.graphic}')` }">
                                        <div style="background-color:rgb(105,105,105, 0.6);border-color:rgb(105,105,105, 0.6);border-radius:15px;cursor: pointer;max-width: 23px;"><img style="width: 15px;height: 15px;margin:3px;margin-bottom:4px;margin-left: 5px;" src="https://i.np7.dev/4h0nfxdm.svg"></div>
                                    </div>
                                    <div class="podcast-image" v-else :style="{ backgroundImage: `url('${podcast.graphic}')` }">
                                        <div style="background-color:rgb(105,105,105, 0.6);border-color:rgb(105,105,105, 0.6);border-radius:15px;cursor: pointer;max-width: 23px;"><img style="width: 15px;height: 15px;margin:3px;margin-bottom:4px;margin-left: 4px;" src="https://i.np7.dev/4h0nfxdm.svg"></div>
                                    </div>
                                </div>
                            </a>
                            </b-col>
                            <b-col class="podcast-entry-info">
                                <a v-b-toggle="'collapse-1-'+entry.slug">
                                <div style="margin-left:10px;max-width:670px;min-width:150px;">
                                    <h5>{{podcast.title}} - {{entry.title}}</h5>
                                    <p style="max-height: 50px;overflow:hidden;">{{entry.summary}}</p>
                                </div>
                                </a>
                            </b-col>
                        </b-row>
                            <div>
                                <b-collapse :id="'collapse-1-'+entry.slug" class="mt-2" >
                                    <div style="height:50px;" class="players"><vue-plyr><audio ref="player" id="audio" controls>
                                        <source id="audiofile" :src="entry.source" type="audio/mp3" />
                                        </audio></vue-plyr></div>
                                </b-collapse>
                            </div>
                            <div style="border-bottom: 1px solid gray;padding-top:5px; padding-bottom:5px;width: 100%;"></div>
                        
                    </div>
                    
                </b-col>
            </b-row>
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

  export default {
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/podcasts/${params.podcast}`, config)
        .then((res) => {
          return {podcast: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
        })
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    }
  }

</script>
<style>
    .podcast-image {
        max-width: 75px; 
        height: 75px; 
        object-fit: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media (max-width: 992px) {
        .podcast-fix {
        padding-left: 70px;
        }
        .text-podcast {
            width:250px;
            text-align:center;
        }
        .podcast-entry-info {
            margin-left:5px;
        }
    }
    @media (max-width: 767px) {
        .podcast-fix {
        padding-left: 0px;
        
    }
    @media(max-width:575px){
        .podcast-image-all {
            display:none;
            padding-right:5px;
        }
    }
    .text-podcast {
            width:100%;
            text-align:center;
        }
    }
    
</style>