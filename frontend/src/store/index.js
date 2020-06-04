import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [{ id: 1, name: 'Football', description: 'Looking for a football buddy around heden', time: '12:00', date: 'Mon 23' }],
    counter: 0,
    password: null,
    username: null,
    title: null,
    checkboxGroup: [],
    datetime: new Date(),
    participants: null,
    description: null
  },

  mutations: {
    joinMutation(state, counter) {
      state.counter += counter
    },
    setUserName(state, payload) {
      state.username = payload
    },
    setUserPassword(state, payload) {
      state.password = payload
    },
    setTitle(state, payload) {
      state.title = payload
    },
    setCheckboxGroup(state, payload) {
      state.checkboxGroup = payload
    },
    setDatetime(state, payload) {
      state.datetime = payload
    },
    setParticipants(state, payload) {
      state.participants = payload
    },
    setDescription(state, payload) {
      state.description = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
