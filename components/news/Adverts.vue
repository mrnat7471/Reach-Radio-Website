<template>
<div class="aimages">
  <b-row align-h="center">
    <div v-for="ad in images" :key="ad.uuid">
      <div v-for="tags in ad.fields.tags" v-if="tags == 'article'">
          <a :href="ad.fields.link" target="_blank"><v-lazy-image src-placeholder="https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png" 
            class="pt-3" :src="ad.fields.file"
            style="max-width: 250px;margin-right: 5px;" /></a>
      </div>
    </div>
  </b-row>
    </div>
</template>
<script>
import axios from 'axios'
import VLazyImage from "v-lazy-image"
  const advertUrl = `#`
export default {
            components: {
    VLazyImage
          },
    data() {
      return{
        images: [],
      }
    },
    mounted: function(){
      axios.get(advertUrl)
        .then((res) => {
          this.images = res.data._embedded
        })
    },
}
</script>
<style>
@media (max-width: 995px) {
  .aimages {
    padding-left: 55px;
  }
}
@media (max-width: 767px) {
  .aimages {
    padding-left: 0px;
  }
}
</style>