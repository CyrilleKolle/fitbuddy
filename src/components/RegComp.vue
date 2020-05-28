<template>
  <div>
        <div class="container">
          <h1>Registrera</h1>
          <p>
            Fyll i detta formulär för att skapa ett konto.</p>
          <hr>
      
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Skriv in e-mail" name="email" id="email" required>

          <label for="full-name"><b>Fullständiga namn</b></label>
          <input type="text" placeholder="Ange fullt namn" name="full-name" id="full-name" required>

          <label for="användarnamn"><b>Användarnamn</b></label>
          <input type="text" placeholder="Skriv in användarnamnet" name="användarnamn" id="användarnamn" required>
      
          <label for="lösen"><b>Lösenord</b></label>
          <input type="lösenord" placeholder="Skriv in lösenord" name="lösen" id="lösen" required>
      
          <label for="psw-repeat"><b>Repetera lösenord</b></label>
          <input type="lösenord" placeholder="Repetera lösenord" name="psw-repeat" id="psw-repeat" required>

          <hr>
        
          <button type="submit" class="registerbtn">Registrera</button>
        </div>
      
        <div class="container signin">
          <p>Har du redan ett konto? <a href="#">Logga in</a>.</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'RegComp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box}

.container {
  padding: 16px;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity:1;
}


a {
  color: dodgerblue;
}

.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
