import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [{id: 1, name:'Football', description: 'basketball buddy heden', time:'12:00', date:'Mon 23', image: ''}, 
    {id: 2, name: 'Handball'}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
