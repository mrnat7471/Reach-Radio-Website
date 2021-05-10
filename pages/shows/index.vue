<template>
<div class="page">
    <b-container>
        <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Shows & Presenters</h4>
        <b-row>
            <div :key="member.uuid" v-for="member in team" v-if="member.fields.published == true">
                <div>
                    <b-col style="padding-right:0px;">
                        <section class="container pt-3 pb-3">
                            <n-link :to='"/shows/"+member.slug' style="text-decoration: none;">
                                <div class="home-pbox" style="width: 300px;min-height: 310px;border-radius:2.5%;margin:5px;">
                                    <div v-if="member.fields.backgroundImage" style="text-align:center" class="show-background" :style="{ backgroundImage: `url('${member.fields.backgroundImage}')` }"><img :src="member.fields.presenterImage" style="height: 235px; object-fit: cover;border-radius:2.5%;" /></div>
                                    <div v-else style="text-align:center" class="show-background"><img :src="'https://varnish.radiopanel.co/resize?url='+member.fields.presenterImage+'&height=235'" style="height: 235px; object-fit: cover;border-radius:2.5%;" /></div>
                                    <p class="nbox-text ml-1 mr-1 pt-3 pb-3" style="text-align: center;"><b>{{member.fields.show}} with {{member.fields.presenter}} {{member.fields.presenterLastName}}</b><br>{{member.fields.showTimes}}</p>
                                </div>
                            </n-link>
                        </section>
                    </b-col>
                </div>
            </div>
        </b-row>
    </b-container>
</div>
</template>
<script>
import axios from 'axios'


  
export default {
    data() {
        return {
            member: {
            customData: {
            show: null,
            showtimes: null
            }
            },
        }
    },
    asyncData({params, error}) {
      return axios.get("content-types/16a9ce1a-19ef-447c-85ad-924936b2da36/content/")
        .then((res) => {
          return {team: res.data._embedded.sort((a, b) => parseInt(a.fields.weight) - parseInt(b.fields.weight))}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Users not found'})
        })
    },
}
</script>
<style>
.show-background{
    background-image: url("~assets/images/banner/banner.jpg");
    background-position: top;
    background-attachment: fixed;
    background-size: cover;
    background-attachment: scroll;
    background-repeat: no-repeat;
    border-top-left-radius:2.5%;
    border-top-right-radius:2.5%;
}
</style>