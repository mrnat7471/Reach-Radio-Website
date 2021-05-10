<template>
  <div class="page">
      <div class="centeredstuff">
      <h2 class="pt-3 pb-3">Choose A Station</h2>
      <div class="mb-2 ml-2" v-for="station in stations" :key="station.uuid">
                <p><n-link :to='"/listen/"+station.slug' class="btn btn-primary" style="width: 75%; color: white;">{{station.name}}</n-link></p>
          </div>
      </div>
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
    layout: "empty",
    head() {
      return {
        title: "Reach Radio - Popout player"
      };
    },
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/ba6cd835-cc48-4786-bb2d-4c546deda006/content`, config)
        .then((res) => {
          return {stations: res.data._embedded}
          console.log(stations)
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Stations not found'})
        })
    },
  };
</script>
<style scoped>
.centeredstuff{
    text-align: center;
}
</style>