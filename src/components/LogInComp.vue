<template>

 <div>
    <div class="fixedBox">
        <div class="login">
           <div class="logo">
            <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px"  >
          </div>  
          <h1>Logga in</h1>
      
          <div class="textbox">
            <input type="text" placeholder="Användarnamn" name="" value="">
            </div>

        <div class="textbox">
            <input type="password" placeholder="Lösenord" name="" value=""> <br>
            
            </div>
        </div>
            <br>
            <b-button @click="success" class="is-twitter" tag="router-link" :to="{ path: '/' }">Logga in</b-button>
        </div>
        </div>
            

<!-- <div class="fixedBox">
    <body>
  <div class="login">
      <div class="logo">
        <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px"  >
      </div>
        <div class="login-box">
            <h1>Log in</h1>
            <div class="textbox">
                <input type="text" placeholder="Användarnamn" name="" value="">
            </div>

            <div class="textbox">
                <input type="password" placeholder="Lösenord" name="" value="">
            </div>
            <div class="buttons" v-if="true">
                <b-button @click="success" class="is-twitter" tag="router-link" :to="{ path: '/' }">Logga in</b-button>
            </div>
        <a class="btn-pass" name=""> Glömt lösenord?</a>
        </div>
  </div>
    </body>
</div> -->
</template>

<script>
export default {
  name: "LogInComp",
  methods: {
            success() {
                this.$buefy.toast.open({
                    message: 'Inloggning lyckades!',
                    type: 'is-twitter',
                    position:'is-bottom',
                    duration:2000,
                   
                })
            },     
        }
};
 
</script>

<style>


.logo {
  margin-left: 50px;
}

.fixedBox {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
}

.login h1{
    
    font-size: 40px;
    border-bottom: 6px solid #68bed8;
    padding: 13px 0
}


.login h1,p{
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

.login .textbox{
    width: 50%;
    overflow: hidden;
    font-size: 20px;
    padding: 10px;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom:1px solid #68bed8;
    
}


/* .fixedBox {
  position: static;
  box-shadow: 1px 1px 30px 0 rgba(0, 0, 0, 0.7);
  width: 85%;
  max-width: 1000px;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
  
}

.login-box {
    padding-top: 200px;
    width: 280px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}

.login-box h1{
    float: left;
    font-size: 40px;
    margin-top: 100px;
    border-bottom: 6px solid #68bed8;
    margin-bottom: 30px;
    padding: 13px 0
    
}

.textbox{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom:1px solid #68bed8;
    
}

.textbox input{
    border: none;
    outline: none;
    background:none;
    color: black;
    font-size: 18px;
    width: 100%;
    float: left;
}

/* .button .btn-login {
    width: 100%;
    border: 2px solid white;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;

    
} 
.btn-pass {
    border:thick;
    background-color: transparent;
    font-style: italic;
    text-decoration: underline;
    color: blue;
} */


</style>