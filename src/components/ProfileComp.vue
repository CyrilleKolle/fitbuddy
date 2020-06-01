<template>
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
      <b-field label="Namn"></b-field>
      <input type="text" placeholder="Skriv in ditt namn" value />
    </div>
    <div class="inputdiv">
      <b-field label="Ålder">
        <input type="text" placeholder="Skriv in din ålder" value />
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
