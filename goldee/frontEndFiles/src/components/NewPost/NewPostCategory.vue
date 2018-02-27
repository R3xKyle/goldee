<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <div class="newpost-page">
        <h1>Select a category for your post</h1>
        <h3>Posts stay active for 7 days and must adhere to <a href="">Goldee's guidelines</a>.</h3><br>
        <div class="button-columns">
          <p v-for="(tag, n) in tags":data-index="n">
            <button v-on:click="tagClicked($event, n)" class="clickable-button">{{ tags[n] }}</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'
import jQuery from 'jQuery'
import Toolbar from '../Toolbar'

export default {
  components: {
    Toolbar
  },
  data() {
  	return {
      tags: []
  	}
  },
  methods: {
    loadData: function() {
      this.tags = ["Mentorship & Support", "Volunteer", "Food Share", "Ride Share"]
    },
    tagClicked: function (event, id) {
      var router = new VueRouter()
      alert(this.tags[id])
      router.push('/newpost/post')
      router.go('/newpost/post')
    }
  },
  beforeMount() {
    this.loadData()
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
@import '../../newpost.css'
</style>