<template>
    <div>
        <div v-for="alert in alerts" :key="alert.uuid">
            <div v-if="alert.fields.error == true">
                <b-alert variant="danger" show>
                    {{alert.fields.textField}}
                </b-alert>
            </div>
            <div v-else>
                <b-alert show dismissible>
                    {{alert.fields.textField}}
                </b-alert>
            </div>
        </div>
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
    data() {
      return {
          alerts: []
        }
    },
    mounted: function(){
      axios.get("https://api.radiopanel.co/api/v1/content-types/8d637265-d4f5-443c-a841-29c72f6099d4/content", config)
        .then((res) => {
          this.alerts = res.data._embedded
        })
    },
  };
</script>