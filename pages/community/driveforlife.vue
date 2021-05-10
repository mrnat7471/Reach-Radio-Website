<template>
  <div class="page" id="news3">
    <section class="container pt-4 pb-1">
      <b-row>
        <b-col md="9">
              <div style="text-align:center;background-color:#181a1b"><p><img src="https://nathan7471.xyz/img/lAco9/yeMahIRe80.png/raw" style="max-width:310px;" /></p></div>
          <div style="text-align:center!important">
            <h2 class="border3 mt-3 mb-1"><b>Drive For Life Takeover</b></h2>
            <p class="mb-3 pt-3">Missed out on your favourite Drive For Life Takeover show? Or just wanna listen again? Well check all the
              shows broadcasted on Reach Radio, TruckStopRadio and Simulator Hits. Want to support Drive For Life charity? Donate <a href="https://donate.driveforlife.online" target="_blank">here</a>.<br><br> We want to thank all the presenters for helping out:
            </p>
                  <h6><b>Technical Support Team:</b> Joseph Rumens, Arran Hodges, Nathan Powell, Flaming.</h6>
              <div class="d4l-grid">
                  <div>
                    <h6 style="text-align:left;"><b>Reach Radio Presenters:</b></h6>
                    <ul style="text-align:left;">
                      <li>Joseph Rumens</li>
                      <li>Arran Hodges</li>
                      <li>Ben Norris</li>
                      <li>Matt Gill</li>
                      <li>Flaming</li>
                      <li>Oliver Flynn</li>
                      <li>George Grayburn</li>
                    </ul>
                  </div>
                  <div>
                    <h6 style="text-align:left;"><b>TSR Presenters:</b></h6>
                    <ul style="text-align:left;">
                      <li>n/a</li>
                    </ul>
                  </div>
                  <div>
                      <h6 style="text-align:left;"><b>Simulator Hits Presenters:</b></h6>
                      <ul style="text-align:left;">
                        <li>Jason M</li>
                        <li>Dave Gibbson</li>
                        <li>DJ Brooklyn</li>
                        <li>Doba</li>
                        <li>Joe H</li>
                        <li>Kyle Python</li>
                        <li>Glando</li>
                      </ul>
                  </div>
              </div>
          </div>

          <h4 class="border3 mt-3 mb-3"><b>Catch up with all the Drive For Life Takeover shows:</b></h4>
          <div v-for="show in shows" :key="show.fields">
            <div>
            <div>
                <b-row class="pb-2">
                  <b-col>
                    <a style="text-decoration: underline;" class="catch_up_color" :href="'https://mixcloud.com'+show.fields.slug">{{show.fields.showName}}</a>
                  </b-col>
                  <b-col>
                    <a class="catch_up_color" :href="'https://mixcloud.com'+show.fields.slug" target="_blank"><button class="btn btn-primary d4l-buttonchange" style="float:right;margin-right:15px;">Listen now</button></a>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="pb-3">
          <h4 style="text-align:center">In partnership with<br>
            <a href="https://reachradio.co.uk" target="_blank">
              <img class="pt-3" src="https://nathan7471.xyz/img/lAco9/TIlowaGu92.png/raw" style="max-width: 250px;margin-right: 5px;" />
            </a>
            <a href="https://truckstopradio.co.uk" target="_blank">
              <img class="pt-3" src="https://nathan7471.xyz/img/lAco9/wIQeLuLI40.png/raw" style="max-width: 210px;margin-right: 5px;" />
            </a>
            <a href="https://simulatorhits.com" target="_blank">
              <img class="pt-3" src="https://nathan7471.xyz/img/lAco9/YUtIhiZa94.jpg/raw" style="max-width: 200px;margin-right: 5px;" />
            </a>
          </h4>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)

  export default {
    colorMode: 'drive',
    components: {
    },
    data() {
      return{
        shows: [
          { fields: {
            slug: "/ReachRadioUK/countdown-mix/",
            showName: "Countdown Mix",
            unixtimestamp: "1617451699"
          }},
          {
          fields: {
            slug: "/ReachRadioUK/countdown-with-flaming/",
            showName: "Countdown With Flaming",
            unixtimestamp: "1617446150"
          }},
          {
          fields: {
            slug: "/ReachRadioUK/drive-for-life-dance-with-matt-gill/",
            showName: "Drive For Life Dance With Matt Gill",
            unixtimestamp: "1617499995.6739647"
          }},
          {
          fields: {
            slug: "/ReachRadioUK/drive-for-life-party-with-arran-hodges-1/",
            showName: "Drive For Life Party With Arran Hodges",
            unixtimestamp: "1617577486.4076226"
          }},
          {
          fields: {
            slug: "/ReachRadioUK/drive-for-life-party-with-arran-hodges/",
            showName: "Drive For Life Party With Arran Hodges",
            unixtimestamp: "1617472921.3085604"
          }},
          {
            fields: {
              slug: "/ReachRadioUK/drive-for-life-party-with-ben-norris/",
              showName: "Drive For Life Party With Ben Norris",
              unixtimestamp: "1617483721.4340334"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/drive-for-life-party-with-dj-brooklyn/",
              showName: "Drive For Life Party With DJ Brooklyn",
              unixtimestamp: "1617476521.4462922"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/drive-for-life-top-40-with-wayne-fysh/",
              showName: "Drive For Life Top 40 With Wayne Fysh",
              unixtimestamp: "1617562921.0373354"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/early-mornings-with-flaming/",
              showName: "Early Mornings With Flaming",
              unixtimestamp: "1617512521.455555"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/early-mornings-with-oliver-flynn/",
              showName: "Early Mornings With Oliver Flynn",
              unixtimestamp: "1617519721.6217957"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/evenings-with-glando/",
              showName: "Evenings With Glando",
              unixtimestamp: "1617570121.0205595"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/non-stop-hits-with-george-grayburn/",
              showName: "Non Stop Hits With George Grayburn",
              unixtimestamp: "1617415321.5037165"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/saturday-afternoons-with-arran-hodges/",
              showName: "Saturday Afternoons With Arran Hodges",
              unixtimestamp: "1617454921.4948547"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/sunday-afternoons-with-joe-h/",
              showName: "Sunday Afternoons With Joe H",
              unixtimestamp: "1617548521.1583648"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/sunday-afternoons-with-zac-smith/",
              showName: "Sunday Afternoons With Zac Smith",
              unixtimestamp: "1617541321.3375087"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-hits-with-dj-ucjohn/",
              showName: "Weekend Hits With DJ UCJOHN",
              unixtimestamp: "1617555721.247967"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-hits-with-dave-gibbson/",
              showName: "Weekend Hits With Dave Gibbson",
              unixtimestamp: "1617469321.1625228"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-hits-with-kyle-python/",
              showName: "Weekend Hits With Kyle Python",
              unixtimestamp: "1617462121.3441381"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-mornings-with-doba/",
              showName: "Weekend Mornings With Doba",
              unixtimestamp: "1617534121.2350667"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-mornings-with-flaming/",
              showName: "Weekend Mornings With Flaming",
              unixtimestamp: "1617526921.3307376"
            }},
          {
            fields: {
              slug: "/ReachRadioUK/weekend-mornings-with-joseph-rumens/",
              showName: "Weekend Mornings With Joseph Rumens",
              unixtimestamp: "1617451808"
            }
          }
        ],
      }
    },
    mounted: function(){
      this.shows = this.shows.sort((b, a) => parseInt(a.fields.unixtimestamp) - parseInt(b.fields.unixtimestamp))
    },
    filters: {
      hour: function (date) {
        return moment.unix(date).format('D');
      }
    },
  }
</script>

<style>
.d4l-grid {
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
.d4l-buttonchange{
  background-color:rgb(63,28,94);
  border-color: rgb(63,28,94);
}
.d4l-buttonchange:hover{
  background-color:rgb(63,28,94);
  border-color: rgb(63,28,94);
}
.d4l-buttonchange:focus{
  background-color:rgb(63,28,94);
  border-color: rgb(63,28,94);
  box-shadow: 1px 1px 1px 1px rgb(63,28,94);
}
.d4l-buttonchange:active{
  background-color:rgb(63,28,94);
  border-color: rgb(63,28,94);
  box-shadow: 1px 1px 1px 1px rgb(63,28,94);
}
</style>
