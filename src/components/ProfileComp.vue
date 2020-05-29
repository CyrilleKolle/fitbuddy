<template>
  <div class="profile">
    <div class="img">
      <img
        alt="Ladda upp bild på dig själv"
        src="https://www.alzforum.org/sites/default/files/member-default.jpg"
        style="border-radius: 50%; width: 200px; height:200px;"
      />
      <br />
      <b-button @click="clickMe" class="is-twitter">Välj en bild</b-button>
    </div>
    <div class="namediv">
      <p>
        Namn:
        <input type="text" placeholder="Skriv ditt namn" />
      </p>
    </div>
    <div class="agediv">
      <p>
        Ålder:
        <input type="text" placeholder="Skriv in din ålder" />
      </p>
    </div>
    <div class="genderdiv">
      <!-- Här ska det vara att välja kön -->
    </div>
    <div class="citydiv">
      <p>
        Stad:
        <select name="stad" id="stad">
          <option value="gbg">Göteborg</option>
          <option value="sthlm">Stockholm</option>
          <option value="malmo">Malmö</option>
        </select>
      </p>
    </div>
    <br />
    <b-button class="is-twitter">Spara</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkboxGroup: ["flint"]
    };
  }
};
</script>
