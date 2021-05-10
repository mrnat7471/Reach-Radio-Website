<template>
  <div>
    <b-navbar class="react-nav" toggleable="lg">
      <b-container>
        <n-link to="/"><b-navbar-brand ><img src="~assets/images/main/r-silver-icon.webp" width=37 /></b-navbar-brand></n-link>
        <b-navbar-toggle class="nav-mobile fix" target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item class="mobile-pad" to="/">Home</b-nav-item>
            <b-nav-item class="mobile-pad" to="/news">News</b-nav-item>
            <b-nav-item class="mobile-pad" to="/shows">Shows & Presenters</b-nav-item>
            <b-nav-item-dropdown class="mobile-pad" text="On Air">
              <b-dropdown-item to="/on-air/schedule">Schedule</b-dropdown-item>
              <b-dropdown-item to="/on-air/recently-played">Recently Played</b-dropdown-item>
              <!--<b-dropdown-item to="/on-air/top40">Reach Top 40</b-dropdown-item>-->
              <b-dropdown-item to="/on-air/listen">Listen</b-dropdown-item>
              <b-dropdown-item to="/on-air/soundcheck">Soundcheck</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="mobile-pad" text="Community">
              <b-dropdown-item to="/community/truckersmp">TruckersMP</b-dropdown-item>
              <b-dropdown-item to="/community/driveforlife">Drive For Life</b-dropdown-item>
              <b-dropdown-item to="/community/streamers">Streamers</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="mobile-pad" text="About Us">
              <b-dropdown-item to="/info/about">About Us</b-dropdown-item>
              <b-dropdown-item to="/info/team">Team</b-dropdown-item>
              <b-dropdown-item to="/info/contact">Contact Us</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item class="mobile-pad" to="/info/get-ads-with-reach">Advertise</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
