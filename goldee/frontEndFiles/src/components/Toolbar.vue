<template>
  <div id="toolbar">
    <div id="top-bar-logo">
      <router-link to="/" style="float: left;"><img src="../assets/GoldeeLgo.png" height="100" width="160"></router-link>
    </div>

    <div id="top-bar-link">
       <router-link to="/about" class="no-border-button" >Share</router-link>
       <router-link to="/about" class="no-border-button" >About</router-link>
    </div>

    <div id="login-join">
       <router-link to="/register" class="no-border-button">Sign Up</router-link>
       <router-link to="/login" class="rounded-cornor-button">LOGIN</router-link>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'toolbar',
  	data() {
  		return {
  			title: '#toolbar'
  		}
  	}
  }
</script>

<style>

#toolbar {
	width: 100%;
	height: 13%;
	background-color: #8EDBDF;

}

#top-bar-logo {
  float: left;
  margin-bottom: 5%;
  margin-top: 0.3%;
  margin-left: 3%;
  vertical-align: middle;
}

#top-bar-link {
  float: left;
  margin-top: 2%;
  margin-bottom: 1%;
  vertical-align: middle;

}

#login-join {
	float: right;
  margin-top: 2%;
	margin-bottom: 1%;
  margin-right: 3%;
	vertical-align: middle;
}

.no-border-button {
	background: none;
	border: none;
    color: #1E3C46;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}

.rounded-cornor-button {
	background: none;
	border-style: solid;
	border-color: #1E3C46;
    color: #1E3C46;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}

.rounded-cornor-button { border-radius: 20px; }

</style>
