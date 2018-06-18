<style>
  @import '../assets/css/styles.css'
</style>
<template>
  <div id="app">
    <toolbar style="margin-bottom: 0px;"></toolbar>
    <!-- <div class="page" style="margin: 0px;"> -->
      <div class="body" style="margin-top: 0px;">
        <h1>Welcome back!</h1>
        <form action="/action_page.php">
        <input type="text" name="username" v-model="email" placeholder="username">
        <br/>
        <input type="password" input v-model="password" style="width:300px; height:50px" type="text" name="password" placeholder="password">
        <br/>
        <input class="button-pink" style="margin-top: 20px; width:100px; height:40px; border-radius: 50px;" type="submit" value="Login">
        </form>
      </div>
      <div class="footer" style="text-align:left; background-color:#F77D6B; margin: 0;">
        <img src="../assets/logo_icon_white.png">
        <p class="footer-text" style="margin-top: 25px">Goldee connects communities of people of care.</p>
        <p class="footer-text" style="text-align: right; margin-right: 20px"><a href="mailto: support@gogoldee.com">Help!</a></p>
        <p class="small-text">Copyright &copy; 2018 All rights reserved.</p>
        <p class="small-text">Terms of Use | Privacy Policy | Safety</p>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>

import Vue from 'vue'
import Toolbar from './Toolbar'
import Footbar from './Footbar'

export default {
  components: {
    Toolbar,
    Footbar
  },
  data() {
  	return {
  	  email: '',
  	  password: ''
  	}
  },
  methods: {
	  login: function (event) {
	    alert(this.email + " " + this.password)
	  }
  }
}

window.onload = function() {
  var app = new Vue({
    el: "#login-div",
  	delimiters: ['[[',']]']
  })
}


</script>
