<template>
  <div class="fixedBox">
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
                    <b-icon
                      class="is-pulled-right"
                      :icon="props.expanded ? 'menu-down' : 'menu-up'"
                    ></b-icon>
                  </template>
                  <b-menu-item icon="account" label="Users"></b-menu-item>
                  <b-menu-item icon="cellphone-link">
                    <template slot="label">
                      Devices
                      <b-dropdown
                        aria-role="list"
                        class="is-pulled-right"
                        position="is-bottom-left"
                      >
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
        <div class="block" style="visibility: hidden">
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
        <!-- <div
          v-for="(event, i) in events"
          :key="`${i}-${event.id}`"
          class="contact-form-container"
          :fixed-top="true"
        >
          <span id="event-name">{{event.name}}</span>
          <br />
          <span id="event-des">{{event.description}}</span>
          <br />
          <span id="event-time">{{event.time}}</span>
          <br />
          <span id="event-date">{{event.date}}</span>

          <p id="more-info">...more</p>
        </div>-->

        <div
          v-for="(post, index) in allPosts"
          :key="`${index}-${post.id}`"
          class="contact-form-container"
          :fixed-top="true"
        >
          <div>{{post.title}}</div>
          <div>{{post.description}}</div>
          <div>{{post.city}}</div>
          <div>{{post.timestamp}}</div>
          <div>{{post.duration}} Hours</div>
          <div>{{post.activity}}</div>
          <div>{{post.other}}</div>
          <div>{{post.attendies}}</div>

          <button @click="attend(1)" id="attend-button" >attend</button>
          <span>{{$store.state.counter}}</span>
        </div>
        <hr />
        <paginate
          id="pagination"
          :page-count="20"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        ></paginate>
      </div>
      <hr />
      <div id="app">
        <VueElevator :duration="duration"></VueElevator>
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
    attend(amount) {
      console.log(this.$store.state.counter);
      console.log(this.participants);
      return this.$store.commit("joinMutation", amount);
    },
    clickCallback(pageNum) {
      console.log(pageNum);
    }
  },

  data() {
    return {
      open: false,
      isOpen: 0,
      fullheight: true,
      fullwidth: false,
      overlay: false,
      right: true,
      total: this.$store.state.events,
      pages: 10,
      duration: 4000,
      allPosts: null,
      participants: 0,
      press: true
    };
  },
  created() {
    fetch("/api/posts")
      .then(response => response.json())
      .then(result => {
        this.allPosts = result;
        this.participants = result[0].attendies;
        console.log(result[0].attendies);
        console.log(this.participants);
      });
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
#attend-button {
  background-color: rgb(166, 240, 166);
}
.contact-form-container {
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 100px auto auto auto;
  box-sizing: border-box;

  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border-radius: 10px;
  font-family: "Miller Ban It";
}
#filter-button {
  position: fixed;
  width: 20px;
}

.fixedBox {
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  left: 0;
  right: 0;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  position: fixed;
  align-content: center;
}
.home {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  scrollbar-width: none;
}
#pagination {
  margin-left: 10%;
  margin-right: 10%;
}
</style>

