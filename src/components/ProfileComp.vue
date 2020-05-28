<template>
  <div>
    <img
      alt="Ladda upp bild på dig själv"
      src="https://www.alzforum.org/sites/default/files/member-default.jpg"
      style="border-radius: 50%; width: 200px; height:200px;"
    />
    <br />
    <input type="button" value="Välj en bild" />
    <p>
      Namn:
      <input type="text" placeholder="Skriv ditt namn" />
    </p>
    <p>
      Ålder:
      <input type="text" placeholder="Skriv in din ålder" />
    </p>
    <p>
      Kön: Man
      <input type="checkbox" />
      Kvinna
      <input type="checkbox" />
      Annat:
      <input type="checkbox" />
    </p>
    <p>
      Stad:
      <select name="stad" id="stad">
        <option value="gbg">Göteborg</option>
        <option value="sthlm">Stockholm</option>
        <option value="malmo">Malmö</option>
      </select>
    </p>
    <br />
    <input type="button" value="Spara" />
  </div>
</template>
<script>
export default {
  name: "Profile"
};
</script>
