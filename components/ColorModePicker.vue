<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
      <li><font-awesome-icon @click="$colorMode.preference = 'newyear'" style="font-size: 23px;padding-top:2px;display:none" :icon="['fas', 'glass-cheers']" /></li>
     <li><font-awesome-icon @click="$colorMode.preference = 'christmas'" style="font-size: 23px;padding-top:2px;display:none" :icon="['fas', 'gifts']" /></li>
     <li><font-awesome-icon @click="$colorMode.preference = 'halloween'" style="font-size: 23px;padding-top:2px;display:none" :icon="['fas', 'hat-wizard']" /></li>
    </ul>
  </div>
</template>

<script>
import IconSystem from '../assets/icons/system.svg'
import IconLight from '../assets/icons/light.svg'
import IconDark from '../assets/icons/dark.svg'
import IconSepia from '../assets/icons/sepia.svg'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faGifts, faHatWizard, faGlassCheers} from '@fortawesome/free-solid-svg-icons'
library.add(faGifts, faHatWizard, faGlassCheers)

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
  padding: 0;
  margin: 0;
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
</style>
