<template>
  <div id="app">
    <b-navbar class="is-primary" :fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <!-- <img
            src="../assets/runningbuddy.png"
            alt="Fitbuddy logo"
          />-->
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Hem</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/post' }">Inlägg</b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/profile' }"
          v-if="this.loggedInAsUser !== null"
        >Profil</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons" v-if="this.loggedInAsUser === null">
            <b-navbar-item
              tag="router-link"
              :to="{ path: '/signUp' }"
              class="button is-twitter specialbtn"
            >Registrera</b-navbar-item>
            <b-navbar-item
              tag="router-link"
              :to="{ path: '/login' }"
              class="button is-light"
            >Logga in</b-navbar-item>
          </div>
          <div class="buttons" v-if="this.loggedInAsUser !== null">
            <label class="username">
              Inloggad:
              <b>{{this.loggedInAsUser}}</b>
            </label>
            <b-navbar-item @click="logOut()" class="button is-twitter specialbtn">Logga ut</b-navbar-item>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    // http://localhost:3000/
    fetch("/api")
      .then(response => response.json())
      .then(result => {
        this.loggedInAsUser = result.username;
      });
  },
  computed: {
    loggedInAsUser: {
      get() {
        return this.$store.state.loggedInAsUser;
      },
      set(loggedInAsUser) {
        this.$store.commit("setLoggedInAsUser", loggedInAsUser);
      }
    }
  },
  methods: {
    logOut() {
      fetch("/api/logOut", {
        method: "delete",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          this.reloadPage();
        } else {
          console.log("gick inte att logga ut");
        }
      });
    },
    reloadPage() {
      this.$router.push({ name: "Home" });
      window.location.reload();
    }
  }
};
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors

$primary: #68bed8;
$primary-invert: findColorInvert($primary);
$twitter: rgb(64, 115, 255);
$twitter-invert: findColorInvert($twitter);

// This is needed for the navbar buttons to not have a transparent backgroundcolor
// when they are focused

.specialbtn.navbar-item:focus {
  background-color: $twitter !important;
}

.username {
  color: black;
  margin-right: 10px;
  margin-bottom: 10px;
}

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>

