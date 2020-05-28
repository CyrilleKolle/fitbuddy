<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld id="main-title" msg="FitBuddy" />
    <b-button @click="open = true" id="filter-button">
      <i class="fas fa-filter"></i>
    </b-button>

    <section>
      <b-sidebar
        type="is-light"
        :fullheight="fullheight"
        :fullwidth="fullwidth"
        :overlay="overlay"
        :right="right"
        :open.sync="open"
      >
        <div class="p-1">
          <!-- <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
          />-->
          <b-menu>
            <b-menu-list label="Filter">
              <b-menu-item icon="information-outline" label="Info"></b-menu-item>
              <b-menu-item icon="settings">
                <template slot="label" slot-scope="props">
                  Administrator
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                </template>
                <b-menu-item icon="account" label="Users"></b-menu-item>
                <b-menu-item icon="cellphone-link">
                  <template slot="label">
                    Devices
                    <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                      <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                      <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
                      <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
                      <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
                    </b-dropdown>
                  </template>
                </b-menu-item>
                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
              </b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>
      <div class="block">
        <b-field grouped group-multiline>
          <div class="control">
            <b-switch v-model="overlay">Overlay</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="fullheight">Fullheight</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="fullwidth">Fullwidth</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="right">Right</b-switch>
          </div>
        </b-field>
      </div>
    </section>
    <div id="feedId">
      <div v-for="event in events" :key="event.id" id="post">
        <span id="event-name">{{event.name}}</span>
        <br />
        <span id="event-des">{{event.description}}</span>
        <br />
        <span id="event-time">{{event.time}}</span>
        <br />
        <span id="event-date">{{event.date}}</span>

        <p id="more-info">...more</p>

        <!-- <div>
          <p>{{$store.state.counter}}</p>/
          <p>{{event.participants}}</p>
        </div>-->
      `   <div class="columns" id="interest" style="height: 0.2px" >
        
            <button class="column is-half" >
              Interested
            </button>
            <!-- <div class="column" > {{event.participants}} </div> -->
              <div class="column">0 </div>
            <!-- <div class="column">{{$store.state.counter}} </div> -->
              <div class="column"> 0 </div>
          </div>`
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    events() {
      console.log("join pressed");
      return this.$store.state.events;
    }
  },
  methods: {
    increment(amount) {
      return this.$store.commit("joinMutation", amount);
    }
  },
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "Title 1",
          text: "Text 1"
        },
        {
          title: "Title 2",
          text: "Text 2"
        },
        {
          title: "Title 3",
          text: "Text 3"
        }
      ],
      open: false,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false
    };
  }
};
</script>
<style>
.p-1 {
  padding: 1em;
}
#interest {
  columns: auto;
}
</style>

