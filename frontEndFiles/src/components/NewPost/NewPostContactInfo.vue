<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <div class="newpost-page">
        <p><input v-model="name" placeholder="Name" class="text-input"></input></p>
        <p>
          <button class="clickable-button">Upload Picture</button>
        </p>
        <p><input v-model="location" placeholder="Location" class="text-input"></input></p>
        <p><input v-model="email" placeholder="Email" class="text-input"></input></p>
        <button class="blue-button" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import jQuery from 'jQuery'
import Toolbar from '../Toolbar'

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      name: '',
      location: '',
      email: ''
    }
  },
  methods: {
    submit: function (event) {
      var result = this.name + " " + this.location + " " + this.email;
      alert(result)
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

<style>

.clickable-button {
  background: Bisque;
  border-style: solid;
  border-color: white;
  color: black;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

.blue-button {
  background: SkyBlue;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

.text-input {
  width: 100%;
  height: 35px;
  font-size: 20px;
}

.block-input {
  width: 100%;
  height: 350px;
  font-size: 20px;
}

.page {
  width: 100%;
  text-align: center;
}

.newpost-page {
  width: 60%;
  text-align: center;
}

</style>