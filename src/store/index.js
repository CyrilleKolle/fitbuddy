import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [{id: 1, name:'Football', description: 'Looking for a football buddy around heden', time:'12:00', date:'Mon 23'}, 
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23'}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
