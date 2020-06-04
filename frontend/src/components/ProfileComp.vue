<template>
  <div class="fixedBox">
    <div class="profile">
      <div class="img">
        <h1>Profil</h1>
        <br />
        <img
          alt="Ladda upp bild på dig själv"
          src="https://www.alzforum.org/sites/default/files/member-default.jpg"
          style="border-radius: 50%; width: 300px; height:300px;"
        />
        <br />
        <b-button class="is-twitter">Välj en bild</b-button>
      </div>
      <div class="inputdiv">
        <b-field label="Email"></b-field>
        <input type="email" placeholder="Skriv in din email" value />
      </div>
      <div class="inputdiv">
        <b-field label="Telefonnummer"></b-field>
        <input type="tel" placeholder="0701234567" pattern="[0-9]{10}" required />
      </div>
      <div class="inputdiv">
        <b-field label="Ålder">
          <input type="number" placeholder="Skriv in din ålder" min="16" />
        </b-field>
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
            <b-select placeholder="Välj vilken stad">
              <option value="gbg">Göteborg</option>
              <option value="sthlm">Stockholm</option>
              <option value="malmo">Malmö</option>
            </b-select>
          </b-field>
        </section>
      </div>
      <br />
      <b-button class="is-twitter">Spara</b-button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: ""
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
