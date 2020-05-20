<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/profile">Profile</router-link>
    </div>
      <nav id="log">
      <button>login</button>|
      <button>register</button>|
      <button>logout</button>
    </nav>
    <router-view/>
  
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main-title{
  font-family: 'Miller Ban It';
  font-size: 2rem;
}
#log{
  float: right;
  position: relative;
}
#nav {
  padding: 30px;
  position: absolute;
}
#feedId{
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
#post{

border-top: 1px solid #eee;
	margin-left: auto;
	margin-right: auto;
	max-width: auto;
	padding-bottom: 30px;
	padding-top: 40px;
	text-align: center;
  /* width: 600px;
  height: 150px;
  margin: 2px;
  border: 1ex solid rgb(14, 7, 2); */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#event-name{
  /* float:left */
  font-family: 'Miller Ban It';
	font-size: 24px;
	font-style: italic;
	margin-bottom: 20px;
  
}
#event-des{
/* border: 0.2ex solid black; */
	display: inline-block;
	margin-left: auto;
	margin-right: auto;
}
#event-time{
	float: right;
	margin-left: 15px;
	margin-right: 15px; 
  
 
}
#event-date{
	float: right;
	margin-left: 15px;
	margin-right: 15px; 
}
#more-info{
  display: inline-block;
	margin-left: auto;
	margin-right: auto;
  color: blue;
  float: right;
  
}
</style>
