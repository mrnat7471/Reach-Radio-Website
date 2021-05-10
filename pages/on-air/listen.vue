<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 mt-3 standardheader" style="display: flex;">
        <h4 style="padding-right: 10px;">Listen to Reach Radio</h4>
      </div>
      <b-row align-h="center" style="padding-bottom: 50px;">
        <div v-for="type in listens">
          <div class="mb-2 ml-2">
            <div>
              <a :href="type.fields.link" target="_blank" class="news-link" style="text-decoration: none;">
                <div class="nbox" style="width: 300px;height: 220px;">
                  <img class="imagechange" :src="type.fields.logo" style="width: 300px; height: 175px; object-fit: cover">
                  <p class="mt-2 ml-1 mr-1" style="text-align: center;">{{type.fields.name}}</p>
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
  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    head: {
      title: 'Reach - Listen',
      meta: [
        {hid: 'description', name: 'description', content: 'How to listen to Reach Radio.'}
      ],
    },
  asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/08882f1c-64fd-4b49-9265-c0ef5ca432fa/content`, config)
        .then((res) => {
          return {listens: res.data._embedded}
        })
        .catch((e) => { 
          error({statusCode: 404, message: 'How to listen not found'})
        })
    },
  }

</script>

<style>

</style>
