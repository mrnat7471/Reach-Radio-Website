<template>
  <div class="page">
    <div>
      <section class="container pt-3">
        <Alerts></Alerts>
        <b-row>
          <b-col md="7">
            <Banners></Banners>
            <FeaturedBanner></FeaturedBanner>
          </b-col>
          <b-col md="5">
            <RecentlyPlayed></RecentlyPlayed>
          </b-col>
        </b-row>
        <Articles></Articles>
      </section>
    </div>
  </div>
</template>

<script>
  import Articles from '~/components/news/Articles.vue'
  import RecentlyPlayed from '~/components/misc/RecentlyPlayed.vue'
  import Banners from '~/components/misc/Banners.vue'
  import FeaturedBanner from '~/components/misc/FeaturedBanner.vue'
  import Alerts from '~/components/misc/alert.vue'

  export default {
    components: {
      Articles,
      RecentlyPlayed,
      Banners,
      FeaturedBanner,
      Alerts
    },
    head: {
      title: 'Reach Radio - Home',
    },
  }
</script>
