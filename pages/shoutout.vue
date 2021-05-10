<template>
  <div class="page pt-2 pl-4 pr-4" style="padding-bottom:180px;">
    <h5 class="border3 ml-2 mr-1 pt-4" style="margin-bottom:15px;">Send a shoutout</h5>
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </div>

    <form class="pb-3">
      <label for="name">Your Name</label>
      <input
        class="form-control"
        id="name"
        name="name"
        required
        type="text"
        v-model="form.name"/>
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
        id="acceptGdpr"
        name="acceptGdpr"
        required
        v-model="form.gdpr">I accept to my name being sent to Reach
      </b-form-checkbox>
      <a class="btn btn-success mt-3" href="#" v-on:click="submitDatas">Submit</a>
    </form>
  </div>
</template>
<script>
  import axios from 'axios'
  import Navbar from '~/components/header/Navbar.vue' 

 let sendData = ""
  export default {
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        errors: [],
        success: [],
        loading: false,
        form: {
          name: null,
          message: null,
        },
        radioPlayer: {
          playing: false,
          volume: 0.2,
          cacheBuster: Math.ceil(Math.random() * 1000000),
        },
        live: {
          songUuid: "",
          song: {
            artist: "Reach Radio",
            title: "All The Hits",
            graphic: {
              medium: "https://api.reachradio.co.uk/r-small.png"
            }
          },
          slot: {
          user: {
            uuid: null,
          }
        },
        },
        
      }
    },
    methods: {
      hideModal() {
        this.$refs['message'].hide()
      },
      submitDatas() {
        if (this.form.name || this.form.message || this.form.gdpr) {
          let formData = new FormData()
          formData.append("name", this.form.name);
          formData.append("type", "message");
          formData.append("requestOrigin", "Reach Radio Mobile App"); // Change to Reach Radio
          formData.append("message", this.form.message);
          sendData = JSON.stringify(formData);
          axios.post('https://api.radiopanel.co/api/v1/requests', {
              name: this.form.name,
              type: "message",
              requestOrigin: "Reach Radio Mobile App", // Change to Reach Radio
              message: this.form.message
          }, auth).then(result => {
            this.hideModal()
            this.$toast.success('Thank you for your message', {
              position: 'top-right',
              duration: 5000,
            })
          }).catch((e) => {
            this.$toast.error(e.response.data.message, {
              position: 'top-right',
              duration: 5000,
            })
          })
        }
        this.errors = [];
        if (!this.form.name) {
          this.errors.push('Name required')
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