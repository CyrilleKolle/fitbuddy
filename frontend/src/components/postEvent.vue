<template>
  <div class="fixedBox">
    <div class="wrapper">
      <section>
        <div class="contact-form-container">
          <h1>Skapa ditt pass</h1>
          <div class="contact-form">
            <form @submit.prevent="onSubmit">
              <!-- titel -->
              <div class="box">
                <label>
                  Titel för ditt pass:
                  <input
                    v-model="title"
                    placeholder="Vad vill du göra?"
                    required
                  />
                </label>
              </div>

              <!-- förvalda träningstyper m.h.a checkboxar -->
              <div class="workout-types">
                <label>
                  <strong>Träningstyp:</strong>
                </label>
                <div class="block">
                  <b-radio v-model="checkboxGroup" native-value="Football">Fotboll</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="Tennis">Tennis</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="cycling">Cykling</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="run">Löpning</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="Bandy">Bandy</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="swimming">Simning</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="climbing">Klättring</b-radio>
                  <b-radio v-model="checkboxGroup" native-value="Gym">Gym</b-radio>
                </div>
              </div>

              <!-- Användaren kan m.h.a av en kalender bestämma dag -->
              <div class="box">
                <label>
                  När vill du träna ?
                  <b-datetimepicker v-model="datetime" placeholder="Välj dag och tid..."></b-datetimepicker>
                </label>
              </div>

              <!-- Deltagare -->
              <div class="box">
                <label>
                  Hur många deltagere söker du ?
                  <b-numberinput
                    v-model="participants"
                    type="is-info"
                    size="is-small"
                    min="1"
                    icon-pack="fas"
                  ></b-numberinput>
                </label>
              </div>

              <div class="box">
                <b-select placeholder="Välj stad" v-model="selectedCity">
                  <option value="Göteborg">Göteborg</option>
                  <option value="Malmö">Malmö</option>
                  <option value="Stockholm">Stockholm</option>
                </b-select>
              </div>

              <div class="box">
                <b-select placeholder="Längd på passet" v-model="duration">
                  <option value="30">30 min</option>
                  <option value="45">45 min</option>
                  <option value="60">60 min</option>
                  <option value="75">75 min</option>
                  <option value="90">90 min</option>
                  <option value="120">120 min</option>
                  <option value="180">180 min</option>
                </b-select>
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
              <input class="button" type="submit" value="Skapa ditt träningspass" />
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  // datan som representer utgångs punkt av formulärets input-element
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(title) {
        this.$store.commit("setTitle", title);
      }
    },
    checkboxGroup: {
      get() {
        return this.$store.state.checkboxGroup;
      },
      set(checkboxGroup) {
        this.$store.commit("setCheckboxGroup", checkboxGroup);
      }
    },
    datetime: {
      get() {
        return this.$store.state.datetime;
      },
      set(datetime) {
        this.$store.commit("setDatetime", datetime);
      }
    },
    participants: {
      get() {
        return this.$store.state.participants;
      },
      set(participants) {
        this.$store.commit("setParticipants", participants);
      }
    },
    selectedCity: {
      get() {
        return this.$store.state.selectedCity;
      },
      set(selectedCity) {
        this.$store.commit("setSelectedCity", selectedCity);
      }
    },
    duration: {
      get() {
        return this.$store.state.duration;
      },
      set(duration) {
        this.$store.commit("setDuration", duration);
      }
    },
    description: {
      get() {
        return this.$store.state.description;
      },
      set(description) {
        this.$store.commit("setDescription", description);
      }
    },
    loggedInAsUser: {
      get() {
        return this.$store.state.loggedInAsUser;
      },
      set(loggedInAsUser) {
        this.$store.commit("setLoggedInAsUser", loggedInAsUser);
      }
    },
    attendees() {
      return this.$store.state.attendees;
    }
  },
  methods: {
    /*
    Denna method tar hand om datan registrerad av användaren efter att ha klickat på "submit"
    */

    onSubmit() {
      let newUID = uuid.v4();
      /* 
      En popup ruta kommer först att dyka upp och frågar användaren ifall datan stämmer.
      Fetchen kommer isåfall att ske så fort användaren har klickat på "OK" annars kommer 
      informationen att skickas oavsett och allt försvinner enligt koden nedan via .then efter fetch
      */
      this.$buefy.dialog.confirm({
        message: "Stämmer all information nu ? ",
        onConfirm: () =>
          // omkonverterar input från formuläret m.h.a v-model till ett Json-objekt och skickar mot express
          fetch("/api/createpost", {
            body: JSON.stringify({
              postId: newUID,
              title: this.title,
              description: this.description,
              city: this.selectedCity,
              timestamp: this.datetime,
              duration: this.duration,
              activity: this.checkboxGroup,
              attendees: [],
              limit: this.participants,
              counter: 0,
              creator: this.loggedInAsUser
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST"
          }).then(() => {
            // Efter att ha skickat information till databasen återgå till hemsidan
            this.$router.push("/");
            // Återställer till ett tomt formulär

            this.title = null;
            this.checkboxGroup = [];
            this.datetime = null;
            this.participants = null;
            this.description = null;
            this.selectedCity = null;
            this.duration = null;
          })
      });
    }
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

.wrapper {
  overflow-y: auto;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  margin: 0 auto;
  scrollbar-width: none;
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
  box-shadow: none;
  text-align: center;
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
  background-color: rgb(64, 115, 255);
  width: 87%;

  color: white;
  font-size: 1.3rem;
  border-radius: 8px;
}
</style>
