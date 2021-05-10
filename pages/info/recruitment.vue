<template>
  <div class="page">
    <section class="container pt-3 pb-3">
      <h4 class="border3 ml-1 mr-1 pt-3" style="margin-bottom: 15px">
        Join us
      </h4>
      <b-row>
        <b-col md="8">
          <p>
            Reach Radio is an online radio station setup in July of last year
            and started properly broadcasting on September 14th, 2020.
          </p>
          <p>
            We are looking for talented individuals to join our team in various
            different areas in order to further improve the programming content
            and community.
          </p>
          <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info"
                  >On Air Team</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>On air team desc</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info"
                  >Production Team</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>ds</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info"
                  >Accordion 3</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>dsadas</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
        <b-col md="4">
          <a href="mailto:recruitment@reachradio.co.uk" class="cbox-text-link">
            <div class="home-pbox pt-2" style="border-radius: 1.5%">
              <p class="cbox-text">
                <strong>
                  <h4>
                    <b-badge variant="primary">Recruitment Inbox</b-badge>
                  </h4> </strong
                >recruitment@reachradio.co.uk
              </p>
            </div>
          </a>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook);
library.add(faTwitterSquare, faInstagram, faTwitch);
let sendData = "";
export default {
  head: {
    title: "Reach - Contact Us",
  },
};
</script>

<style>
.cbox {
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: #d9d9d9 3px 3px 3px 3px;
  width: 100%;
  height: 100px;
}

.cbox-text {
  margin-top: 11px;
  text-align: center;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.cbox-text-link:hover {
  text-decoration: none !important;
}
</style>
