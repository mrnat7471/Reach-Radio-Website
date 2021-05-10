<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 mt-3 standardheader" style="display: flex;">
        <h4 style="padding-right: 10px;">The Reach Top 40</h4>
      </div>
      <div v-if="charttoggle.fields.toggleOff == true" style="text-align: center;margin-left:15px;margin-right: 15px;margin-top:50px;margin-bottom:50px;"><h4>{{charttoggle.fields.pageContent}}</h4></div>
      <div v-else>
      <div v-if="charts.length == 0">
        <h4 style="text-align: center;margin-left:15px;margin-right: 15px;margin-top:50px;margin-bottom:50px;">Sorry, The Reach Top 40 Charts is unavailable. Check back after the Reach Top 40 Show, Sunday at 6pm BST!</h4>
      </div>
      <!-- Per Song same place -->
      <p>Last Updated: {{charttoggle.fields.lastUpdated}}</p>
      <div v-for="song in charts" :key="song.uuid">
        <div v-if="song.fields.song" class="mb-3">
          <div class="grid-container">
            <div class="position" style="background-color: black; color: white; padding-left: 6px; padding-right: 6px;"><div style="width: auto;"><strong><span style="font-size: 20px;">{{song.fields.songNumber}}</span><br>
              <img v-if="song.fields.songChartChange == 'non'" style="transform: rotate(0deg);" src="~assets/icons/arrow.png" width=13>
              <img v-else-if="song.fields.songChartChange == 'up'" style="transform: rotate(-90deg);" src="~assets/icons/arrow.png" width=13>
              <img v-else-if="song.fields.songChartChange == 'down'" style="transform: rotate(90deg);" src="~assets/icons/arrow.png" width=13>
              <img v-else style="margin-top: -5px;transform: rotate(0deg);" src="~assets/icons/arrow.png" width=13>
              </strong>
            </div>
          </div>
          <div class="image imagechange"><img :src="song.fields.song.graphic.medium" style="height: auto; width: 100%;"></div>
          <div class="details pl-3"><h4 class="title">{{song.fields.song.title}}</h4><p>{{song.fields.song.artist}}</p>
          <div class="dl-link-small" v-if="song.fields.song.extraInfo.trackUrl"><a :href="song.fields.song.extraInfo.trackUrl"><img src="~assets/icons/applesmall.png"></a></div>
        </div>

        <div class="dl-link" v-if="song.fields.song.extraInfo.trackUrl"><a :href="song.fields.song.extraInfo.trackUrl"><img src="~assets/icons/applelarge.png"></a></div>
  
        <div class="dl-link" v-if="song.fields.song.extraInfo.track"><a :href="song.fields.song.extraInfo.track.external_urls.spotify"><img src="~assets/icons/spotify.png" style="width: 30px; height: auto; float: right;"></a></div>
      </div>
    </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import VLazyImage from "v-lazy-image";
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    components: {
    VLazyImage
  },
    head: {
      title: 'Reach - Top 40',
      meta: [
        {hid: 'description', name: 'description', content: 'Check our the latest Top 40 songs at Reach Radio'}
      ],
    },
  data() {
      return {
        pageNumber: 0, // default to page 0
        songChartChange: "non",
        song: {"title": "Ashes","artist": "Stellar","graphic": {"medium": "https://i.scdn.co/image/ab67616d00001e023286f23a94f357cdbbb4d718"},"previewUrl": "https://p.scdn.co/mp3-preview/afa227a1a41bf6193f7bf997d06afa267c6ece7b?cid=109630f6f6f349fb89db70a834de46b5", extraInfo: {track: {external_urls:{spotify: 'spotify.com'}}}},
        songNumber: "1",
        charts: [],
        charttoggle: {
          fields: {
          toggleOff: true,
          pageContent: "This week Top40 is currently being updated, please check back later!"}
  },
      }
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/d9582a99-0e48-45e3-88dd-dd25d3e58239/content?pagesize=40`, config)
        .then((res) => {
          return {charts: res.data._embedded.sort((a, b) => parseInt(a.fields.songNumber) - parseInt(b.fields.songNumber))}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Charts not found'})
        })
    },
    mounted: function () {
      axios.get('https://api.radiopanel.co/api/v1/page-types/38e42f5c-a975-434b-a3c5-cf4b63439173/page', config)
        .then((res) => {
          this.charttoggle = res.data;
        })
    }
  }
</script>

<style>
@media(max-width:850px){
  .title {
  text-overflow:initial;
  overflow: hidden;
  max-height: 1.2em;
  }
}

@media (min-width: 850px) {
     .grid-container {
  display: grid;
  grid-template-columns: 2em 6em 1fr 9em;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "position image details dl-link"
}
.position { grid-area: position; }
.image { grid-area: image; }
.details { grid-area: details; }
.dl-link { grid-area: dl-link; }
}
@media (max-width: 850px) {
     .grid-container {
  display: grid;
  grid-template-columns: 2em 6em 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "position image details dl-link"
}
.position { grid-area: position; }
.image { grid-area: image; }
.details { grid-area: details; }
.dl-link { display:none; }
}
@media(min-width:851px){
  .dl-link-small {
    display: none;
    bottom: 0px;
  }
}

</style>
