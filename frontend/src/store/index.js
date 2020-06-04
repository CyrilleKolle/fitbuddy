import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:
      [{ id: 1, name: 'Football', description: 'Looking for a football buddy around heden', time: '12:00', date: 'Mon 23' },

      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 }, { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 }
        , { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 },
      { id: 2, name: 'Handball', description: 'Looking for a handball buddy heden', time: '12:00', date: 'Mon 23', participants: 0 }],
    counter: 0,
    password: null,
    username: null,
    title: null,
    description: null,
    city: null,
    timestamp: null,
    duration: null,
    activity: null,
    other: null,
    attendies: null,
    limit: null

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
    setTitle(state, title) {
      state.title = title
    },
    setDescription(state, description) {
      state.description = description
    },
    setTimestamp(state, timestamp) {
      state.timestamp = timestamp
    },
    setDuration(state, duration) {
      state.duration = duration
    },
    setActivity(state, activity) {
      state.activity = activity
    },
    setOther(state, other) {
      state.other = other
    },
    setAttendies(state, attendies) {
      state.attendies = attendies
    },
    setLimit(state, limit) {
      state.limit = limit
    }
  },
  actions: {
  },
  modules: {
  }
})
