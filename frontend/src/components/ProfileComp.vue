<template>
  <div class="fixedBox">
    <div class="profile">
      <div class="img">
        <h1>{{ this.firstname }} {{ this.lastname }}</h1>
        <h5>{{ this.age }} år</h5>
        <br />
        <img
          alt="Ladda upp bild på dig själv"
          src="https://www.alzforum.org/sites/default/files/member-default.jpg"
          style="border-radius: 50%; width: 300px; height:300px;"
        />
        <br />
        <!-- <b-button class="is-twitter">Välj en bild</b-button> -->
        <b-field class="file">
          <b-upload v-model="file">
            <a class="button is-twitter upload">
              <b-icon icon="upload"></b-icon>
              <span>Välj en bild</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">{{ file.name }}</span>
        </b-field>
      </div>
      <div class="inputdiv">
        <b-field label="Email"></b-field>
        <input type="email" placeholder="Skriv in din email" v-model="email" />
      </div>
      <div class="inputdiv">
        <b-field label="Telefonnummer"></b-field>
        <input type="tel" placeholder="0701234567" pattern="[0-9]{10}" required v-model="phone" />
      </div>
      <div class="genderdiv">
        <section>
          <b-field label="Kön">
            <div class="block">
              <b-radio v-model="gender" name="gender" native-value="Man">Man</b-radio>
              <b-radio v-model="gender" name="gender" native-value="Kvinna">Kvinna</b-radio>
              <b-radio v-model="gender" name="gender" native-value="Annat">Annat</b-radio>
            </div>
          </b-field>
        </section>
      </div>
      <div class="citydiv">
        <section>
          <b-field label="Stad">
            <b-select placeholder="Välj vilken stad" v-model="city">
              <option value="Göteborg">Göteborg</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Malmö">Malmö</option>
            </b-select>
          </b-field>
        </section>
      </div>
      <br />
      <b-button class="is-twitter" @click="onSubmit()">Spara</b-button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    fetch(`/api/loadProfile/${this.loggedInAsUser}`)
      .then(response => response.json())
      .then(result => {
        this.username = result[0].username;
        this.firstname = result[0].firstname;
        this.lastname = result[0].lastname;
        this.email = result[0].email;
        this.phone = result[0].phone;
        this.birthyear = result[0].birthyear;
        this.gender = result[0].gender;
        this.city = result[0].city;
        this.calculateAge();
      });
  },
  computed: {
    loggedInAsUser() {
      return this.$store.state.loggedInAsUser;
    },
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
        this.$store.commit("setPassword", password);
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
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(email) {
        this.$store.commit("setEmail", email);
      }
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(phone) {
        this.$store.commit("setPhone", phone);
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
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(gender) {
        this.$store.commit("setGender", gender);
      }
    },
    city: {
      get() {
        return this.$store.state.userCity;
      },
      set(city) {
        this.$store.commit("setUserCity", city);
      }
    }
  },
  methods: {
    onSubmit() {
      fetch("/api/updateProfile", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          city: this.city,
          username: this.username
        })
      });
    },
    calculateAge() {
      var d = new Date();
      var n = d.getFullYear();
      var userAge = n - this.birthyear;
      this.age = userAge;
    }
  },
  data() {
    return {
      age: null,
      file: null
    };
  }
};
</script>

<style scoped>
.fixedBox {
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  left: 0;
  right: 0;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  position: static;
  align-content: center;
}
.profile {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  scrollbar-width: none;
}
h1 {
  font-size: 2.5em;
  left: 0;
  right: 0;
}
* {
  text-align: center;
}
.img {
  padding: 30px;
}
.upload {
  margin: auto;
}

.inputdiv {
  width: 50%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin: 0 auto;
  border-bottom: 1px solid #68bed8;
}

.genderdiv {
  padding: 8px 0;
  margin: 0 auto;
}
input {
  border: none;
  outline: none;
  background: none;
  color: black;
  font-size: 18px;
  width: 100%;
  float: left;
}
</style>
