<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <router-link to="/signUp">Sign Up</router-link>
      <router-link to="/profile">Profile</router-link>

    </div>
    <nav id="log">
      <button>login</button>
      <button>register</button>
      <button>logout</button>
    </nav> -->

      <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <!-- <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                > -->
             
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
.home {
  font-family: "Miller Ban It";
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main-title {
  font-family: "Miller Ban It";
  font-size: 2rem;
  align-items: center;
}
#log {
  float: right;
  position: relative;
  font-size: 24px;
}
#nav {
  padding: 30px;
  position: absolute;
}
#nav :hover {
  color: rgb(12, 142, 202);
}
#feedId {
  display: flex;
  flex-direction: column;
  align-items: center;

}
#post {
  border-top: 2px solid #eee;
  margin-left: auto;
  margin-right: auto;
  max-width: auto;
  padding-bottom: 30px;
  padding-top: 40px;
  text-align: center;
 
  /* width: 600px;
  height: 150px;
  margin: 2px;
  border: 1ex solid rgb(14, 7, 2); */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#event-name {
  float: left;
  font-family: "Miller Ban It";
  font-size: 24px;
  font-style: italic;
  margin-bottom: 20px;
}
#event-des {
  /* border: 0.2ex solid black; */
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
#event-time {
  float: right;
  margin-left: 15px;
  margin-right: 15px;
}
#event-date {
  float: right;
  margin-left: 15px;
  margin-right: 15px;
}
#more-info {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  color: rgb(109, 197, 238);
}
#post-image {
  margin-top: 5px;
  size: 2px;

}
#join-button{
  margin-right: 5px;
}
</style>
