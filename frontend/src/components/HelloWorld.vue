<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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
      }).then(result => {
        console.log(this.username, this.password);
        console.log(result);
      });
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
