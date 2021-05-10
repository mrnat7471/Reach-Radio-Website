<template>
<div>
    <b-carousel
            :interval="4000"
            @sliding-end="onSlideEnd"
            @sliding-start="onSlideStart"
            background="#ababab"
            controls
            id="carousel-1"
            img-height="405"
            img-width="728"
            style="text-shadow: 1px 1px 2px #333;max-height: 350px; margin-bottom: 12px;"
            v-model="slide"
          >
            <div :v-bind="banner.uuid" v-for="banner in banners" :key="banner.uuid">
              <a :href="banner.link" target="_blank">
                <b-carousel-slide :img-src="banner.image"
                                  class="carousel-image">
                </b-carousel-slide>
              </a>
            </div>

          </b-carousel>
    </div>
</template>
<script>
import axios from 'axios'
  const bannersGetUrl = "https://api.radiopanel.co/api/v1/banners?random=true"
export default {
    data() {
      return{
        banners: [{
          banner: {
            link: "https://discord.reachradio.co.uk",
            image: "https://cdn.radiopanel.co/c9a65443-eed1-41ed-b9d2-743223b5ee75/52f298b3-ea3f-4bc8-95c8-17fa348d3601.jpg",
          }
        }],
        slide: 0,
        sliding: null
      }
    },
    mounted: function(){
      axios.get(bannersGetUrl)
        .then((res) => {
          this.banners = res.data._embedded
        })
    },
    methods:{
        onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>