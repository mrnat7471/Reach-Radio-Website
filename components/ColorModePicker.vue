<template>
  <div class="page">
    <ul>
      <b-button variant="primary" @click="$colorMode.preference = 'light'">Light Mode</b-button>
      <b-button variant="primary" @click="$colorMode.preference = 'dark'">Dark Mode</b-button>
    </ul>
  </div>
</template>

<script>
import IconSystem from '../assets/icons/system.svg'
import IconLight from '../assets/icons/light.svg'
import IconDark from '../assets/icons/dark.svg'
import IconSepia from '../assets/icons/sepia.svg'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faGifts, faHatWizard, faGlassCheers, faTruck} from '@fortawesome/free-solid-svg-icons'
library.add(faGifts, faHatWizard, faGlassCheers, faTruck)

export default {
  components: {
    IconSystem,
    IconLight,
    IconDark,
    IconSepia
  },
  data () {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}

#color:hover{
  top: -3px;
}
#color{
  position: relative;
  top: 0px;
  cursor: pointer;
  transition: all 0.1s ease;
}
</style>
