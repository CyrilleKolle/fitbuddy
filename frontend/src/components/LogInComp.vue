<template>
  <div class="fixedBox">
    <div class="login">
      <div class="logo">
        <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px" />
      </div>
      <h1>Logga in</h1>
      <div class="textbox">
        <input type="text" placeholder="Användarnamn" v-model="username" />
      </div>
      <div class="textbox">
        <input type="password" placeholder="Lösenord" v-model="password" />
        <br />
      </div>
      <div class="button-log">
        <br />
        <b-button class="is-twitter" @click="onSubmit()">Logga in</b-button>
      </div>
      <div v-if="authenticationProblem">Fel användarnamn eller lösenord!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInComp",
  computed: {
    username: {
      get() {
        return this.$store.state.username;
      },
      set(username) {
        this.$store.commit("setUserName", username);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(password) {
        this.$store.commit("setUserPassword", password);
      }
    }
  },
  methods: {
    onSubmit() {
      fetch("/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then(response => {
        if (response.status === 401) {
          this.authenticationProblem = true;
          console.log("gick ej logga in");
        } else {
          this.authenticationProblem = false;
          this.reloadPage();
          console.log("gick att logga in");
        }
      });
    },
    reloadPage() {
      this.$router.push({ name: "Home" });
      window.location.reload();
    }
  },
  data() {
    return {
      authenticationProblem: false
    };
  }
};
</script>

<style>
.login {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  scrollbar-width: none;
}

.button-log {
  margin-left: 420px;
}

.logo {
  margin-left: 250px;
}

.fixedBox {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
}

.login h1 {
  font-size: 40px;
  border-bottom: 6px solid #68bed8;
  padding: 13px 0;
}

.login h1,
p {
  text-align: center;
}

.textbox input {
  border: none;
  outline: none;
  color: black;
  font-size: 18px;
  width: 100%;
  float: center;
}

.login .textbox {
  width: 50%;
  overflow: hidden;
  font-size: 20px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #68bed8;
}
</style>