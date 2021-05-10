<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Listen to Reach Radio</h4>
      <b-row align-h="center" style="padding-bottom: 50px;">
        <div v-for="type in listens">
          <div class="mb-2 ml-2">
            <div>
              <a :href="type.fields.link" target="_blank" class="news-link" style="text-decoration: none;">
                <div class="home-pbox" style="max-width: 300px;max-height: 220px;border-radius:2.5%;margin:5px;">
                  <img :src="type.fields.logo" style="max-width: 300px; max-height: 175px; object-fit: cover;border-top-left-radius:2.5%;border-top-right-radius:2.5%;">
                  <p class="mt-2 ml-1 mr-1 pb-2" style="text-align: center;">{{type.fields.name}}</p>
                </div>
              </a>
            </div>
          </div>
          </div>
        </b-row>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    head: {
      title: 'Reach - Listen',
      meta: [
        {hid: 'description', name: 'description', content: 'How to listen to Reach Radio.'}
      ],
    },
  asyncData({params, error}) {
      return axios.get(`#`)
        .then((res) => {
          return {listens: res.data._embedded}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'How to listen not found'})
        })
    },
  }

</script>
