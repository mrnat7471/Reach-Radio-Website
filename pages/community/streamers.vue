<template>
  <div class="page">
    <section class="container pt-3 pb-3">
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 mt-3 standardheader" style="display: flex;">
            <h4 style="padding-right: 10px;">Our Partnered Streamers</h4>
        </div>
        <b-row align-h="center">
        <div v-for="streamer in streamers" :key="streamer.uuid">
          <div v-if="streamer.lastStatus">
            <div v-if="streamer.lastStatus.stream != null">
              <b-col sm="3" style="padding-bottom: 15px;">
                <div v-if="streamer.lastStatus.user != null">
                <a :href="'https://twitch.tv/' + streamer.lastStatus.user.display_name" target="_blank" style="text-decoration: none; color: white;">
                    <div class="streamers-border">
                  <div v-if="streamer.lastStatus.stream != null" class="mb-2 streamer" :style="{ backgroundImage: `url('https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamer.name}-291x169.jpg')` }">
                    <img :src="streamer.lastStatus.user.profile_image_url" style="margin: 5px;width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">
                    <span class="ml-1">{{streamer.lastStatus.user.display_name}}</span>
                    <span v-if="streamer.lastStatus.stream != null" class="mr-2 mt-2" style="float:right; color: white;background-color: #FF0000!important;padding:2px;border-radius: 10%;"><strong>LIVE</strong></span>
                  </div>

                  <div v-else class="mb-2 streamer" :style="{ backgroundImage: `url('${streamer.lastStatus.user.offline_image_url}')` }">
                    <img :src="streamer.lastStatus.user.profile_image_url" style="margin: 5px;width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">
                    <span class="ml-1">{{streamer.lastStatus.user.display_name}}</span>
                    <span v-if="streamer.lastStatus.stream != null" class="mr-2 mt-2" style="float:right; color: white;"><strong>LIVE</strong></span>
                  </div>
                  </div>
                </a>
                </div>
              </b-col>
            </div>
          </div>
        </div>
        <div v-for="streamer in streamers" :key="streamer.uuid">
          <div v-if="streamer.lastStatus">
            <div v-if="streamer.lastStatus.stream == null">
              <b-col sm="3" style="padding-bottom: 15px;">
                <div v-if="streamer.lastStatus.user != null">
                  <a :href="'https://twitch.tv/' + streamer.lastStatus.user.display_name" target="_blank" style="text-decoration: none; color: white;">
                    <div class="streamers-border">
                      <div v-if="streamer.lastStatus.user.offline_image_url" class="mb-2 streamer" :style="{ backgroundImage: `url('${streamer.lastStatus.user.offline_image_url}')` }">
                        <img :src="streamer.lastStatus.user.profile_image_url" style="margin: 5px;width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">
                        <span class="ml-1">{{streamer.lastStatus.user.display_name}}</span>
                      </div>
                      <div v-else class="mb-2 streamer" :style="{ backgroundImage: `url('https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/c68967ab-a07d-4349-9a3c-e3fe7b6191eb.png')` }">
                        <img :src="streamer.lastStatus.user.profile_image_url" style="margin: 5px;width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">
                        <span class="ml-1">{{streamer.lastStatus.user.display_name}}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </b-col>
            </div>
          </div>
        </div>
      </b-row>
    </section>
</div>
</template>
<script>
import axios from 'axios'
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    head: {
      title: 'Reach - Streamers',
      meta: [
        {hid: 'description', name: 'description', content: 'See the latest Reach Radio partnered streamers'}
      ],
    },
  data() {
      return {
        pageNumber: 0, // default to page 0
        bio: "normal",
        lastStatus: {user:{"display_name": "Nathan7471","offline_image_url":"https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/11b605c8-0783-4b4b-a0ee-6251ae046b71.png", "profile_image_url":"https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/11b605c8-0783-4b4b-a0ee-6251ae046b71.png", "stream": "hi"}}
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/twitch-channels`, config)
        .then((res) => {
          return {streamers: res.data._embedded}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Charts not found'})
        })
    },
  }
</script>
<style>
    .streamers-border{
        border-style: solid;
        height: 175px;
        width: 300px;
        padding: 3px;
    }
    .streamer {
        background-size: 288px 162px;
        height: 162px;
        width: 288px;
        object-fit: cover;
    }
    .streamers-border-featured{
        border-style: solid;
        height: 175px;
        width: 300px;
        padding: 3px;
    }
    .streamer-featured {
        background-size: 288px 162px;
        height: 162px;
        width: 288px;
        object-fit: cover;
    }
    .nobanner {
      background-image: url('https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/11b605c8-0783-4b4b-a0ee-6251ae046b71.png", "profile_image_url":"https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/11b605c8-0783-4b4b-a0ee-6251ae046b71.png')
    }
</style>