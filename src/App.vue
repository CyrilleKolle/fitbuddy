<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/post">Post</router-link>
      <router-link to="/signUp">Sign Up</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    -->

    <b-navbar class="is-primary" fixed-top=true>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/post' }">Post</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/profile' }">Profile</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item>
          <div class="buttons" v-if="true">
            <b-navbar-item
              tag="router-link"
              :to="{ path: '/signUp' }"
              class="button is-twitter"
            >Sign Up</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/login' }" class="button is-light">Log in</b-navbar-item>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #68bed8;
$primary-invert: findColorInvert($primary);
$twitter: rgb(64, 115, 255);
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
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

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

/*
body {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  justify-content: center;
  margin: 0 auto;
  box-sizing: border-box;
 
}
*/
</style>
