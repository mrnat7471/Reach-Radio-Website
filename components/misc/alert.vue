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
  export default {
    data() {
      return {
          alerts: []
        }
    },
    mounted: function(){
      axios.get(`#`)
        .then((res) => {
          this.alerts = res.data._embedded
        })
    },
  };
</script>