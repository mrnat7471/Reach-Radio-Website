<template>
  <div class="page">
    <section class="container pt-3 pb-3">
        <b-row>
            <b-col md="9">
        <div class="pt-3 pb-3 text-white pl-3 pr-3 mt-3 mb-3 standardheader"
              style="display: flex; width: 100%;"> 
              <h4 style="padding-right: 10px;">Advertise With Reach</h4>
            </div>
            <p v-html="text.fields.richText"></p>

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
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
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
    mounted: function () {
        axios.get('https://api.radiopanel.co/api/v1/page-types/787c83fd-a60e-473d-b521-9968897560be/page', config)
        .then((res) => {
          this.text = res.data;
        })
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