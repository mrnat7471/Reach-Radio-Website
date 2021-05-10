<template>
   <div>
     <div class="pt-3 pb-3 text-white pl-3 pr-3  mb-3 standardheader" id="news-title"
           style="display: flex; width: 100%;">
        <h4 style="padding-right: 50px;">Support Us</h4>
        <a :href="Support.fields.paypalLink" target="_blank"><img style="padding-right: 20px;" src="~assets/icons/paypallogo.png"></a>

        <a :href="Support.fields.patreonLink" target="_blank"><img style="width: 25px; height: 25px;" src="~assets/icons/patreon.png"></a>

      </div>
    <div class="ml-2 mr-3 pb-1">
      <p style="text-align:center">{{Support.fields.supportTextArea}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  const getSupportModuleUrl = "https://api.radiopanel.co/api/v1/page-types/be02a740-28dd-4e5a-a3e0-60fc87d7ba85/page"
export default {
    data() {
      return{
        Support: {
        fields: {
            "barAim": "250",
            "barAmount": "0",
            "paypalLink": "https://www.paypal.com/paypalme/4lifeproductions",
            "patreonLink": "https://www.patreon.com/4lifeproductions",
            "supportTextArea": "Support us today and help us with our running costs"
          },
        }
      }
    },
    mounted: function(){
      axios.get(getSupportModuleUrl)
        .then((res) => {
          this.Support = res.data
        })
    },
}
</script>