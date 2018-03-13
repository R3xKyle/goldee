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
  @import 'newpost.css';
</style>