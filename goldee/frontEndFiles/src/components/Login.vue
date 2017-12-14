<template>
  <div id="app">
    <toolbar></toolbar>
    <div style="background-color: #F7AEA3; width: 100%; height: 100%;" center>
    <p><input v-model="email" placeholder="goldee@gmail.com"></input></p>
    <p><input v-model="password" type="password"></input></p>
    <button v-on:click="login">Login</button>
    </center>

    </div>
     <footer></footer>
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
