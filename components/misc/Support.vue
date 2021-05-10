<template>
   <div>
     <h3 class="border3 ml-1 mr-1 pt-3 mb-3" style="text-align:left!important;">Support Us</h3>
    <div>    
      <p style="text-align:center">{{Support.fields.supportTextArea}}</p>
      <b-container align-v="center">
        <b-row class="justify-content-sm-center">
          <b-col sm=4>
            <a :href="Support.fields.paypalLink" target="_blank"><img style="padding-right: 20px;" src="~assets/icons/paypallogo.png"></a>
          </b-col>
          <b-col sm=2>
            <a :href="Support.fields.patreonLink" target="_blank"><img style="width: 25px; height: 25px;" src="~assets/icons/patreon.png"></a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  const getSupportModuleUrl = `#`
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