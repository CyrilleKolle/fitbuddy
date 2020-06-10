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
    title: null,
    description: null,
    city: null,
    timestamp: null,
    duration: null,
    activity: null,
    other: null,
    attendies: null,
    limit: null,
    checkboxGroup: [],
    datetime: new Date(),
    participants: null,

    //profil
    username: null,
    password: null,
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    birthyear: null,
    gender: null,
    userCity: null,
  },

  mutations: {
    // Profil, Inlog & Register
    setUserName(state, payload) {
      state.username = payload
    },
    setUserPassword(state, payload) {
      state.password = payload
    },
    setFirstname(state, payload) {
      state.firstname = payload
    },
    setLastname(state, payload) {
      state.lastname = payload
    },
    setEmail(state, payload) {
      state.email = payload
    },
    setPhone(state, payload) {
      state.phone = payload
    },
    setBirthyear(state, payload) {
      state.birthyear = payload
    },
    setGender(state, payload) {
      state.gender = payload
    },
    setUserCity(state, payload) {
      state.userCity = payload
    },

    // Other

    joinMutation(state, counter) {
      state.counter += counter
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
