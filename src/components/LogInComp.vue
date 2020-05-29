<template>
  <div class="login">
      <div class="logo">
    <img alt="Fitbuddy logo" src="../assets/runningbuddy.png" height="300px" width="500px"  >
      </div>
    <div class="login-box">
        <h1>Log in</h1>
        <div class="textbox">
            <input type="text" placeholder="Username" name="" value="">
            </div>

        <div class="textbox">
            <input type="password" placeholder="Password" name="" value="">
            </div>
   <div class="button">     
  <input class="btn-login" type="button" name="" value="Sign in">
  <input class="btn-pass" type="button" name="" value="Forgot password?" >
   </div>
  </div>
    </div>
</template>

<script>
export default {
  name: "LogInComp"
};
</script>

<style scoped>
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
    border-bottom: 6px solid #4caf50;
    margin-bottom: 50px;
    padding: 13px 0
    
}

.login-box .textbox{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom:1px solid #4caf50;
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

.button .btn-login {
    width: 100%;
    background-color: #4caf50;
    border: 2px solid white;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    margin: 12px 0;

    
}
.button .btn-pass {
    border:thick;
    background-color: transparent;
    font-style: italic;
    text-decoration: underline;
    color: blue;
}
</style>