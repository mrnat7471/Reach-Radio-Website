<template>
  <div class="page">
    <div>
      <section class="container pt-3" style="padding-bottom:180px;">
        <RecentlyPlayed></RecentlyPlayed>
        <Schedule></Schedule>
      </section>
    </div>
  </div>
</template>

<script>
  import RecentlyPlayed from '~/components/misc/RecentlyPlayed.vue'
  import Schedule from '~/components/misc/schedule.vue'

  export default {
    components: {
      RecentlyPlayed,
      Schedule
    },
    head: {
      title: 'Reach Radio',
    },
  }
</script>

<style>
</style>
