<template>
  <div class="page">
    <section class="container pt-3 pb-3">

      <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Contact Us</h4>
      <b-row>
        <b-col md="8">
          <p>Please use this form to contact the management team of Reach Radio.</p>

          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
          </div>
          <p v-if="success.length">
            <b-alert
              :show="dismissCountDown"
              @dismiss-count-down="countDownChanged"
              @dismissed="dismissCountDown=0"
              dismissible
              variant="success"
            >
          Your form has been submitted
          <b-progress
            :max="dismissSecs"
            :value="dismissCountDown"
            height="4px"
            variant="warning"
          ></b-progress>
          </b-alert>
          </p>

          <form class="pb-3">
            <label for="name">Your Name</label>
            <input
              class="form-control"
              id="name"
              name="name"
              required
              type="text"
              v-model="form.name"/>

              <label for="email">Your Email</label>
            <input
              class="form-control pb-3"
              id="mailaddress"
              name="mailaddress"
              required
              type="email"
              v-model="form.mailaddress"/>

            <label class="pt-2" for="comment">Message</label>
            <textarea
              class="form-control"
              cols="30"
              id="comment"
              name="comment"
              required
              rows="10"
              v-model="form.message"
            ></textarea>
            <b-form-checkbox
              class="mt-3"
              id="gdpr"
              name="gdpr"
              required
              v-model="form.gdpr">I accept to my name and email being sent to Reach
            </b-form-checkbox>
            <a class="btn btn-success mt-3" href="#" v-on:click="submitData">Submit</a>
          </form>
        </b-col>
        <b-col md="4">
          <h2 class="pb-3">Alternatively...</h2>
          <a href="mailto:admin@reachradio.co.uk" class="cbox-text-link">
            <div class="home-pbox pt-2" style="border-radius:1.5%;">
              <p class="cbox-text"><strong>
                <h4>
                  <b-badge variant="primary">Complaints</b-badge>
                </h4>
              </strong>admin@reachradio.co.uk
              </p>
            </div>
          </a>
          <a href="mailto:development@reachradio.co.uk" class="cbox-text-link">
          <div class="home-pbox pt-2" style="border-radius:1.5%;">
            <p class="cbox-text"><strong>
              <h4>
                <b-badge variant="success">Sales / Advertising</b-badge>
              </h4>
            </strong>sales@reachradio.co.uk
            </p>
          </div>
          </a>
          <a href="mailto:development@reachradio.co.uk" class="cbox-text-link">
          <div class="home-pbox pt-2" style="border-radius:1.5%;">
            <p class="cbox-text"><strong>
              <h4>
                <b-badge variant="dark">Development</b-badge>
              </h4>
            </strong>development@reachradio.co.uk
            </p>
          </div>
          </a>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {faDiscord, faFacebook, faInstagram, faTwitch, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

  library.add(faTwitterSquare, faInstagram, faDiscord, faFacebook)
  library.add(faTwitterSquare, faInstagram, faTwitch)
  let sendData = ""
  export default {
    head: {
      title: 'Reach - Contact Us',
    },
    data() {
      return {
        errors: [],
        success: [],
        loading: false,
        form: {
          name: null,
          message: null,
        }
      };
    },
    methods: {
      submitData() {
        if (this.form.name || this.form.message || this.form.gdpr) {
          let formData = new FormData()
          formData.append("name", this.form.name);
          formData.append("email", this.form.mailaddress);
          formData.append("message", this.form.message);
          sendData = JSON.stringify(formData);
          axios.post('https://api.radiopanel.co/api/v1/forms/a13d822f-4921-4f61-a334-faae213fc6d0/entries', {
            fields: {
              name: this.form.name,
              message: this.form.message,
              email: this.form.mailaddress
            }
          }, auth).then(result => {
            this.$toast.success('Thank you for your message', {
              position: 'bottom-right',
              duration: 5000,
            })
          }).catch((e) => {
            this.$toast.error(e.response.data.message, {
              position: 'bottom-right',
              duration: 5000,
            })
          })
        }
        this.errors = [];
        if (!this.form.name) {
          this.errors.push('Name required')
        }
        if (!this.form.mailaddress) {
          this.errors.push('Message required')
        }
        if (!this.form.message) {
          this.errors.push('Message required')
        }
        if (!this.form.gdpr) {
          this.errors.push('You need to accept to us processing your data')
        }
      }
    }
  }
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
    text-decoration:none!important
  }
</style>
