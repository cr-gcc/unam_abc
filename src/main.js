import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//FONT AWESOME
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library, config } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { far } from '@fortawesome/free-regular-svg-icons'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  library.add(fab)
  library.add(far)
  library.add(fas)
//COMPONENTS 
  Vue.component('font-awesome-icon', FontAwesomeIcon)
//
window.axios = require('axios');
//
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
