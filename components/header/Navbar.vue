<template>
  <div>
    <b-navbar class="react-nav" toggleable="lg">
      <b-container>
        <b-navbar-toggle class="nav-mobile fix" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="mobile-pad" to="/">Home</b-nav-item>
            <b-nav-item class="mobile-pad" to="/news">News</b-nav-item>
            <b-nav-item class="mobile-pad" to="/win">Win</b-nav-item>
            <b-nav-item-dropdown class="mobile-pad" right text="On Air">
              <b-dropdown-item to="/on-air/timetable">Timetable</b-dropdown-item>
              <b-dropdown-item to="/on-air/recently-played">Recently Played</b-dropdown-item> 
              <b-dropdown-item to="/on-air/top40">Reach Top 40</b-dropdown-item>
              <b-dropdown-item to="/on-air/listen">Listen</b-dropdown-item>
              <b-dropdown-item to="/catch-up">Catch Up</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="mobile-pad" right text="Community">
              <b-dropdown-item to="/community/truckersmp">Travel</b-dropdown-item>
              <b-dropdown-item to="/community/streamers">Streamers</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="mobile-pad" right text="About Us">
              <b-dropdown-item to="/info/about">About Us</b-dropdown-item>
              <b-dropdown-item to="/info/team">Team</b-dropdown-item>
              <b-dropdown-item to="/info/contact">Contact Us</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="mobile-pad" to="/info/get-ads-with-reach">Advertise</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <lights></lights>
  </div>
</template>
<script>
  import xmaslights from '~/components/misc/Lights.vue'
  export default {
    components: {
      lights: xmaslights,
    },
  }

</script>
<style>
.react-nav {
    padding-left: 29%;
  }

@media(max-width: 426px) {
  .react-nav {
    padding-left: 32%;
  }
}
</style>