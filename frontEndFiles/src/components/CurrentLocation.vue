<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
        <div class="page-title">
            Connect with People Near by
        </div>
        <div class="page-sub-title">
            Make a Positive Difference in your Community
        </div>

        <i  v-show="loading" class="fa fa-spinner fa-spin"></i>

        <p>See What's Near You</p>
        <button v-on:click="getLocation" class="location-button">Use My Location</button>
        <div class="next">
        <router-link to="/feedwall" class="next-button">Next</router-link>
        </div>
    </div>
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
  	  position: null,
      latitude: null,
      longitude: null,
      loading: false
  	}
  },
  methods: {

    getLocation() {
       console.log('before run the navigator');
      if(navigator.geolocation) {
         var self = this;
         self.loading = true;
         navigator.geolocation.getCurrentPosition(function(position){
          self.position = position.coords.latitude;
          self.latitude = position.coords.latitude;
          self.longitude = position.coords.longitude;

          console.log(self.latitude);
          console.log(self.longitude);

          self.loading = false;
        })
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
.page {
  width: 100%;
  text-align: center;
}

.page-title {
  text-align: left;
  margin-left: 25%;
  margin-right:20%;
  margin-bottom: 10px;
  font-size: 56px;
}

.page-sub-title {
  text-align: left;
  margin-left: 25%;
  margin-right:20%;
  margin-bottom: 110px;
  font-size: 36px;
  color: #F77D6B;
}

.location-button {
  background: #8EDBDF;
  border-style: solid;
  border-color: white;
  color: #1E3C46;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
}

.next-button {
  background: #F77D6B;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
}

.next {
  margin-top: 80px;
  margin-left: 25%;
  margin-right:20%;
  text-align: right;
}

</style>
