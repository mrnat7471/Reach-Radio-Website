<template>
    <div class="page pb-1">
        <section class="container pt-3" style="max-width:800px">
          <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">{{podcast.fields.showName}}</h4>
        <n-link to="/shows">back</n-link>
        <iframe width="100%" height="120" :src='"https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FReachRadioUK%2F" + podcast.fields.slug + "%2F"' frameborder="0" ></iframe>
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
    asyncData({params, error}) {
      return axios.get(`#`, config)
        .then((res) => {
          return {podcast: res.data}
        })
        .catch((e) => {
          error({statusCode: 404, message: 'Post not found'})
        })
    },
    filters: {
      moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm a');
      }
    }
  }

</script>
<style>
    .podcast-image {
        max-width: 75px; 
        height: 75px; 
        object-fit: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media (max-width: 992px) {
        .podcast-fix {
        padding-left: 70px;
        }
        .text-podcast {
            width:250px;
            text-align:center;
        }
        .podcast-entry-info {
            margin-left:5px;
        }
    }
    @media (max-width: 767px) {
        .podcast-fix {
        padding-left: 0px;
        
    }
    @media(max-width:575px){
        .podcast-image-all {
            display:none;
            padding-right:5px;
        }
    }
    .text-podcast {
            width:100%;
            text-align:center;
        }
    }
    
</style>