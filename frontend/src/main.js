import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import Buefy from 'buefy'
import { dom } from '@fortawesome/fontawesome-svg-core'

import { VueElevator } from 'vue-elevator'
import Paginate from 'vuejs-paginate'


Vue.use(Paginate)
Vue.component('paginate', Paginate)
Vue.component('VueElevator', VueElevator)



dom.watch()

Vue.use(Buefy)
library.add(fas)

library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
