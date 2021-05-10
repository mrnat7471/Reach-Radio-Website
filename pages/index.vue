<template>
  <div class="page">
    <section class="container pt-3">
      <Alerts></Alerts>
      <b-row>
        <b-col md="7">
          <Banners></Banners>
          <FeaturedBanner></FeaturedBanner>
        </b-col>
        <b-col md="5">
          
          <Bar></Bar>
          <RecentlyPlayed></RecentlyPlayed>
        </b-col>
      </b-row>
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3 standardheader" id="news-title"
           style="display: flex; width: 100%;">
        <h4 style="padding-right: 10px;">The Latest News</h4>
      </div>
      <Articles></Articles>
    </section>
  </div>
</template>

<script>
  import Articles from '~/components/news/Articles.vue'
  import RecentlyPlayed from '~/components/misc/RecentlyPlayed.vue'
  import Banners from '~/components/misc/Banners.vue'
  import FeaturedBanner from '~/components/misc/FeaturedBanner.vue'
  import Bar from '~/components/misc/Support.vue'
  import Alerts from '~/components/misc/alert.vue'

  export default {
    components: {
      Articles,
      RecentlyPlayed,
      Banners,
      FeaturedBanner,
      Bar, 
      Alerts
    },
    head: {
      title: 'Reach Radio',
    },

  }
</script>

<style>
</style>
