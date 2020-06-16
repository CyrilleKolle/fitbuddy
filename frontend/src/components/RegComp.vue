<template>
  <div>
    <div class="fixedBox">
      <div class="container">
        <div class="logo">
          <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px" />
        </div>
        <h1>Registrera</h1>

        <div class="textbox">
          <input type="text" placeholder="Förnamn" v-model="firstname" />
        </div>

        <div class="textbox">
          <input type="text" placeholder="Efternamn" v-model="lastname" />
        </div>
        <div class="textbox">
          <input type="text" placeholder="Födelseår" v-model="birthyear" />
        </div>

        <div class="textbox">
          <input type="text" placeholder="Användarnamn" v-model="username" />
        </div>

        <div class="textbox">
          <input type="password" placeholder="Lösenord" v-model="password" />
          <br />
        </div>
      </div>
      <div class="button-reg">
        <br />
        <b-button @click="onSubmit" class="is-twitter">Registrera</b-button>
      </div>
      <div class="textbox">
        <label v-if="this.autenicationProblem">Användarenamn finns redan!</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegComp",
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
    },
    birthyear: {
      get() {
        return this.$store.state.birthyear;
      },
      set(birthyear) {
        this.$store.commit("setBirthyear", birthyear);
      }
    },
    firstname: {
      get() {
        return this.$store.state.firstname;
      },
      set(firstname) {
        this.$store.commit("setFirstname", firstname);
      }
    },
    lastname: {
      get() {
        return this.$store.state.lastname;
      },
      set(lastname) {
        this.$store.commit("setLastname", lastname);
      }
    }
  },
  methods: {
    onSubmit() {
      fetch("/api/signUp", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          birthyear: this.birthyear,
          firstname: this.firstname,
          lastname: this.lastname
        })
      }).then(response => {
        if (response.status === 401) {
          this.autenicationProblem = true;
          console.log("gick ej logga in");
        } else {
          this.autenicationProblem = false;
          this.reloadPage();
          console.log("gick att logga in");
        }
      });
    },
    reloadPage() {
      this.$router.push({ name: "Login" });
      window.location.reload();
    }
  },
  data() {
    return {
      autenicationProblem: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  margin-left: 250px;
}

.button-reg {
  margin-left: 420px;
}

.fixedBox {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
  align-content: center;
}

.container h1 {
  font-size: 40px;
  border-bottom: 6px solid #68bed8;

  padding: 13px 0;
}

.container h1,
p {
  text-align: center;
}

.textbox input {
  border: none;
  outline: none;
  background: none;
  color: black;
  font-size: 18px;
  width: 100%;
  float: center;
}

.container .textbox {
  width: 50%;
  overflow: hidden;
  font-size: 20px;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #68bed8;
}
</style>
