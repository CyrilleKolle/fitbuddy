<template>
  <div id="app">
    <b-navbar class="is-primary" fixed-top="true">
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
        <b-navbar-item tag="router-link" :to="{ path: '/profile' }">Profil</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons" v-if="true">
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

// This is needed for the navbar buttons to not have a transparent backgroundcolor
// when they are focused

.specialbtn.navbar-item:focus {
  background-color: $twitter !important;
}
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
</style>
