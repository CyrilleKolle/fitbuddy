<template>
  <div>
    <div class="fixedBox">
        <div class="container">
           <div class="logo">
            <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px"  >
          </div>  
          <h1>Registrera</h1>
      
         <div class="textbox">
            <input type="text" placeholder="Förnamn" name="" value="">
            </div>

            <div class="textbox">
            <input type="text" placeholder="Efternamn" name="" value="">
            </div>

          <div class="textbox">
            <input type="text" placeholder="Användarnamn" name="" value="">
            </div>

        <div class="textbox">
            <input type="password" placeholder="Lösenord" name="" value=""> <br>
            
            </div>
        </div>
            <br>
            <b-button @click="success" class="is-twitter" tag="router-link" :to="{ path: '/login' }">Registrera</b-button>
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

.logo {
  margin-left: 250px;
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

.container h1{
    
    font-size: 40px;
    border-bottom: 6px solid #68bed8;
    
    padding: 13px 0
    
}


.container h1,p{
  text-align: center;
}

.textbox input{
    border: none;
    outline: none;
    background:none;
    color: black;
    font-size: 18px;
    width: 50%;
    float: center;
}

.container .textbox{
    width: 50%;
    overflow: hidden;
    font-size: 20px;
    padding: 10px;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom:1px solid #68bed8;
    
}

</style>
