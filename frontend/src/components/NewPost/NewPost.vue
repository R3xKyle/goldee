<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <div class="newpost-page">
        <p>
          <button id="offerButton" class="clickable-button" v-on:click="offerClicked($event)">Offer</button>
          <button id="requestButton" class="clickable-button" v-on:click="requestClicked($event)">Request</button>
        </p>
        <p>
          <input v-model="headline" placeholder="Headline" class="text-input"></input>
          <div id="headlineWarning" style="display:none">Headline cannot be empty. </div>
        </p>
        <p>
          <input v-model="description" placeholder="Description" class="block-input"></input>
          <div id="descriptionWarning" style="display:none">Description cannot be empty. </div>
        </p>
        <button class="blue-button" v-on:click="submit">Submit</button>
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
  	  headline: '',
  	  description: '',
      offer: false,
      request: false
  	}
  },
  methods: {
	  submit: function (event) {
      var result = this.headline + " " + this.description + " ";
      if (this.offer == true) {
        result += "offer";
      } else {
        result += "request";
      }
      if (this.headline == '') {
        jQuery('#headlineWarning').css('display', 'block');
      }
      if (this.description == '') {
        jQuery('#descriptionWarning').css('display', 'block');
      }
      if (this.headline != '' && this.description != '') {
        alert(result)
        var router = new VueRouter();
        router.push('/newpost/contact');
        router.go('/newpost/contact');
      }
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
