<template>
<div class="fixedBox">
  <div id="wrapper">
    <section>
      <div class="contact-form-container">
        <h1>Skapa ditt pass</h1>
        <div class="contact-form">
          <form @submit.prevent="onSubmit">
            <!-- titel -->
            <div class="box">
              <label> Titel för ditt pass: <input v-model="title" placeholder="Vad vill du göra?" required /> </label>
            </div>

            <!-- förvalda träningstyper m.h.a checkboxar -->
            <div class="workout-types">
              <label><strong>Träningstyp:</strong></label>
            <div class="block"> 
                <b-checkbox v-model="checkboxGroup" native-value="Football"> Fotboll </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Tennis"> Tennis </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="cycling"> Cykling </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="run"> Löpning </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Bandy"> Bandy </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="swimming"> Simning </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="climbing"> Klättring </b-checkbox>
                <b-checkbox v-model="checkboxGroup" native-value="Gym"> Gym </b-checkbox>
              </div>
            </div>
            
            <!-- Användaren kan m.h.a av en kalender bestämma dag -->
            <div class="box">
              <label>
                När vill du träna ?
                <b-datetimepicker v-model="datetime" placeholder="Click to select...">
                  <template slot="left">
                    <button class="button is-primary" @click="datetime = new Date()" >
                      <b-icon icon="clock"></b-icon>
                      <span>Nutid  </span>
                    </button>
                  </template>
                  <template slot="right">
                    <button class="button is-danger" @click="datetime = null">
                      <b-icon icon="close"></b-icon>
                      <span>Töm  </span>
                    </button>
                  </template>
                </b-datetimepicker>
              </label>
            </div>

            <!-- Deltagare -->
            <div class="box">
              <label> Hur många deltagere söker du ?
                <b-numberinput v-model="participants" type="is-info" size="is-small" min="1" icon-pack="fas"></b-numberinput>
              </label>
            </div>

            <!-- Användaren kan här beskriva mer i detalj vad andra behöver veta -->
            <div class="box">
              <label>
                Kort beskrivning av vad ni vill göra! 
                <textarea
                  v-model="description"
                  cols="30"
                  rows="10"
                  placeholder="Ska träna i slottskogen kl 10.00 vill någon haka på ?"
                  required
                ></textarea>
              </label>
            </div>

            <!-- knappen som skickar vidare datan registrerad mot databasen -->
            <input class="button" type="submit" value="skapa ditt träningspass" />
          </form>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  data() {
    // datan som representer utgångs punkt av formulärets input-element
    return {
        title: null,
        checkboxGroup: [],
        datetime: new Date(),
        participants: null,
        description: null
    };
  },
  methods: {
    /*
        Denna method tar hand om datan registrerad av användaren efter att ha klickat på "submit"
        */
    onSubmit() {
      console.log("titel: " + this.title);
      console.log("träningstyp: " + this.checkboxGroup);
      console.log("kalender: " + this.datetime);
      console.log("deltagare: " + this.participants);
      console.log("beskrivning: " + this.description);

      // omkonverterar input från formuläret m.h.a v-model till ett Json-objekt och skickar mot express
      fetch("http://localhost:3000/post", {
        body: JSON.stringify({
          title: this.title,
          workout: this.checkboxGroup,
          calenderWithTime: this.datetime,
          participants: this.participants,
          description: this.description
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST"
      });
    }
  }
};
</script>

<style scoped>
.fixedBox {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
}

.main-container {
  margin: 0;
  padding: 0;
}
/* Osynlig wrapper som möjligör kontroll över contact-form-container */

section {
  display: flex;
  height: 100vh;
}

/* elemntet som håller hela formuläret förutom */

.contact-form-container {
  margin: 0 auto;
}

/* Titel */

.contact-form-container h1 {
  margin-bottom: 30px;
  font-size: 2.5em;
}

/* här skriver man in sitt meddelande */

.box {
  border: 1px solid grey;
  margin: 10px auto;
  padding: 12px 18px;
  width: 100%;
  border-radius: 8px;
}
/* Gör ändringar formulärets alla labels */

.workout-types {
  padding: 10px;
}
.box label {
  display: block; /* elemnten ska visas under varandra */
  text-align: left;
  color: #333;
  text-transform: uppercase; /* a -> A  etc.. */
  font-size: 13px;
}

/* Gör ändringar i formulärets alla input + textarean */

.box input,
.box textarea {
  width: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 12px;
  margin-top: 6px;
}
.box input:focus {
  background-color: rgba(200, 200, 200, 0.1);
}
/* submit knappen */

.button {
  background-color: #421616;
  width: 87%;
  padding: 13px 0;
  color: #dbdad8;
  font-size: 1.3rem;
  border-radius: 8px;
}
</style>