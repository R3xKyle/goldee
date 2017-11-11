<template>
  <div id="app">
    <toolbar></toolbar>
    <p><input v-model="email" placeholder="goldee@gmail.com"></input></p>
    <p><input v-model="password" type="password"></input></p>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>

import Vue from 'vue'
import Toolbar from './Toolbar'

export default {
  components: {
    Toolbar
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