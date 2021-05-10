var config = {
  headers: {'x-tenant': ''}
}
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Reach Radio - All The Hits',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are broadcasting online 24/7. All you will need is to have an internet connection and you can listen to us anywhere!' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
      { hid: 'twitter:title', name: 'twitter:title', content: 'Reach Radio'},
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ReachRadioUK'},
      { hid: 'twitter:description', name: 'twitter:description', content: 'We are broadcasting online 24/7. All you will need is to have an internet connection and you can listen to us anywhere!'},
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://i.imgur.com/E3hn0WA.png'},
      { hid: 'og:site_name', name: 'og:site_name', content: 'Reach Radio - All The Hits'},
      { hid: 'og:title', name: 'og:title', content: 'Reach Radio - All The Hits'},
      { hid: 'og:description', name: 'og:description', content: 'We are broadcasting online 24/7. All you will need is to have an internet connection and you can listen to us anywhere!'},
      { hid: 'og:type', name: 'og:type', content: 'website'},

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
 /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css',
    '~/assets/fonts/notosans.css',
    '~/assets/css/style.css',
    '~/assets/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-plyr'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/color-mode'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fontawesome',
    '@nuxtjs/toast',
    'nuxt-svg-loader',
    '@nuxtjs/component-cache',
    // Simple usage
  ],
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
  },
  googleAnalytics: {
    id: 'UA-171604924-1'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
axios: {
    proxy: true // Can be also an object with default options
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
  },
  pwa: {
    manifest: {
      name: 'Reach Radio',
      lang: 'en',
      description: 'Get Reach Radio on the go as well as in your web browser.',
      background_color: "#21acfc",
      icon: {
        /* icon options */
      }
    }
  },
  generate: {
    routes () {
      return axios.get('https://my-api/users')
        .then((res) => {
          return res.data.map((user) => {
            return '/users/' + user.id
          })
        })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'submittedform',
        message: 'Form submitted!',
        options: {
          type: 'error'
        }
      }
    ]
}
}
