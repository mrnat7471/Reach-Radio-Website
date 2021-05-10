<template>
  <div class="page">
    <section class="container pb-3">
        <b-row>
            <b-col md="9">
            <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Advertise With Reach</h4>
            <h4>Why advertise on Reach?</h4>
            <p>Reach is the perfect choice for all things gaming, we are, after all, the station for gaming. We are dedicated to making sure your advertising creates a strong and meaningful relationship with our listeners.</p>
            <h4>How much does it cost?</h4>
            <p>We provide a range of advertising options&nbsp;to suit your budget.</p>
            <ul>
                <li>Radio sponsorships</li>
                <li>Site banners</li>
                <li>Fully produced 30-second adverts</li>
            </ul>
            <p>There are only really two main costs for you, <strong>production</strong> and <strong>airtime</strong>; how you customise your package, directly reflects what you pay!</p>
            <h4>Are there any free options?</h4>
            <p>Unfortunately, we currently don’t offer any advertising options free. We are dedicated to you so can support you in offering sound advice about creating your perfect advert.</p>
            <h4>Contact the Sales Team</h4>
            <p>To discuss advertising with us, please direct all emails to <a href="mailto:sales@reachradio.co.uk">sales@reachradio.co.uk</a> or find our sales team on Discord.<br> Alternatively, fill in the form below and we will get back to you as soon as possible.</p>
            <h4>Join our Sales Team</h4>
            <p>Do you have skills in sales, promotions, sponsorship, creative or administration? Contact us directly to see what roles we&nbsp;have&nbsp;available.</p>

            <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
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
              <label for="name" class="pt-2">Your Email</label>
            <input
              class="form-control"
              id="email"
              name="email"
              required
              type="email"
              v-model="form.email"/>
            <label class="pt-2" for="comment">Query</label>
            <textarea
              class="form-control"
              cols="30"
              id="comment"
              name="comment"
              required
              rows="10"
              v-model="form.query"
            ></textarea>
            <b-form-checkbox
              class="mt-3"
              id="gdpr"
              name="gdpr"
              required
              v-model="form.gdpr">I accept to my name being sent to Reach
            </b-form-checkbox>
            <a class="btn btn-success mt-3" href="#" v-on:click="submitAdForm">Submit</a>
          </form>

            </b-col>
            <b-col md="3">

          <Adverts></Adverts>

            </b-col>
        </b-row>
    </section>
</div>
</template>
<script>
  import axios from 'axios'
import Adverts from '~/components/news/Adverts.vue'
  let sendData = ""
export default {
  head: {
      title: 'Reach - Advertise',
      meta: [
        {hid: 'description', name: 'description', content: 'Check out, how to advertise with us!'}
      ],
    },
  components: {
      Adverts
    },
    data(){
        return{
            errors: [],
        success: [],
        loading: false,
        images: [],
        form: {
          name: null,
          message: null,
          email: null,
        },
        text: {
          fields: {
            richText: "",
          }
        },
        }
    },
    methods: {
        submitAdForm() {
        if (this.form.name || this.form.query || this.form.gdpr) {
          let formData = new FormData()
          formData.append("name", this.form.name);
          formData.append("query", this.form.query);
          formData.append("email", this.form.email);
          sendData = JSON.stringify(formData);
          axios.post('https://api.radiopanel.co/api/v1/forms/e7c7684b-8c52-4a67-bbaa-45f1a17f660d/entries', {
              fields: {
              name: this.form.name,
              query: this.form.query,
              email: this.form.email
              }
          }, config).then(result => {
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
        if (!this.form.query) {
          this.errors.push('Message required')
        }
        if (!this.form.gdpr) {
          this.errors.push('You need to accept to us processing your data')
        }
      },
    }
}
</script>
<style>

</style>
