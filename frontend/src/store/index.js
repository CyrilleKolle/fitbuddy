import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    title: null,
    description: null,
    city: null,
    timestamp: null,
    duration: null,
    activity: null,
    other: null,
    attendees: [],
    limit: null,
    checkboxGroup: "",
    datetime: new Date(),
    participants: null,
    selectedCity: null,

    //profil
    loggedInAsUser: null,
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
    // Profile, Inlog & Register

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

    setGender(state, payload) {
      state.gender = payload
    },
    setUserCity(state, payload) {
      state.userCity = payload
    },
    setLoggedInAsUser(state, payload) {
      state.loggedInAsUser = payload
    },

    // Other

    setSelectedCity(state, payload) {
      state.selectedCity = payload
    },
    countMutation(state, counter) {
      state.counter += counter
    },
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
    setAttendees(state, attendees) {
      state.attendees = attendees
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
    },
    setBirthyear(state, payload) {
      state.birthyear = payload
    }
  },

  actions: {
  },
  modules: {
  }
})
