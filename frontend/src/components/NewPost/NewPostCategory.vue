<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <div class="newpost-page">
        <p>Select a Category for your Post</p>
        <p>All posts stay active for 30 days and must adhere to Goldee's guidelines.</p>
        <p v-for="(tag, n) in tags":data-index="n">
          <button v-on:click="tagClicked($event, n)" class="clickable-button">{{ tags[n] }}</button>
        </p>
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