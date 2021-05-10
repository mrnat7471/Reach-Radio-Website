<template>
    <div class="page pb-1">
        <section class="container pt-3" style="max-width:800px">
          <div class="pt-3 pb-3 text-white pl-3 pr-3 mb-3 standardheader" style="padding-bottom:10px; margin-left: 5px;margin-right:5px;">
            <h4 style="padding-right: 10px;">{{podcast.fields.showName}}</h4>
        </div>
        <n-link to="/catch-up">back</n-link>
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


  var config = {
    headers: {
      'x-tenant': '',
      'Authorization': ''
    }
  }
  export default {
    asyncData({params, error}) {
      return axios.get(`https://api.radiopanel.co/api/v1/content-types/53984224-3f19-4f3f-b058-e2eb77ebbfbf/content/${params.listen}`, config)
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