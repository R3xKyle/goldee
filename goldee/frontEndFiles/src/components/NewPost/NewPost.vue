<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <div class="newpost-page">
        <p>
          <button id="offerButton" class="clickable-button" v-on:click="offerClicked($event)">Offer</button>
          <button id="requestButton" class="clickable-button" v-on:click="requestClicked($event)">Request</button>
        </p>
        <div v-html="postHTML"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import jQuery from 'jQuery'
import Toolbar from '../Toolbar'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      headline: '',
      description: '',
      offer: false,
      request: false,
      postHTML: ''
    }
  },
  methods: {
    loadData: function(event) {
      this.$http.get('/post/new').then((response) => {
        var jsondata = response.body;
        this.postHTML = jsondata;
      });
    },
    offerClicked: function (event) {
      jQuery('#offerButton').css('background', 'IndianRed');
      jQuery('#offerButton').css('color', 'white');
      this.offer = true;
      if (this.request) {
        jQuery('#requestButton').css('background', 'Bisque');
        jQuery('#requestButton').css('color', 'black');
        this.request = false;
      }
    },
    requestClicked: function (event) {
      jQuery('#requestButton').css('background', 'IndianRed');
      jQuery('#requestButton').css('color', 'white');
      this.request = true;
      if (this.offer) {
        jQuery('#offerButton').css('background', 'Bisque');
        jQuery('#offerButton').css('color', 'black');
        this.offer = false;
      }
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
  @import 'newpost.css';
</style>
