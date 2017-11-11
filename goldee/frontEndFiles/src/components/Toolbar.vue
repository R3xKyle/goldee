<template>
  <div id="toolbar">
    <div id="login-join">
       <router-link to="/login" class="no-border-button">Login</router-link>
       <router-link to="/register" class="rounded-cornor-button">Join</router-link>
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
	height: 5%;
	background-color: DeepSkyBlue;
}

#login-join {
	float: right;
	margin: 10px 20px;
	vertical-align: middle;
}

.no-border-button {
	background: none;
	border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.rounded-cornor-button {
	background: none;
	border-style: solid;
	border-color: white;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.rounded-cornor-button { border-radius: 20px; }

</style>
