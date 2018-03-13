<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
    <button v-on:click="getLocation">My Current Location</button>
    </div>
  </div>
</template>

import Vue from 'vue'
import VueRouter from 'vue-router'
import jQuery from 'jQuery'
import Toolbar from '../Toolbar'
import VueGeolocation from 'vue-browser-geolocation';

export default {
  components: {
    Toolbar
  },
  data() {
  	return {
    currentLocation: {
             currentLocationLat: null,
             currentLocationLon: null,
             currentLocation: null
         }
  	}
  },
  methods: {
   console.log('hello')
   getLocation() {

     console.log('hello')

     if ('geolocation' in navigator) {
        var gl = navigator.geolocation
        gl.getCurrentPosition(function(position) {
          this.currentLocation = position.coords
          this.currentLocationLon = position.coords.longitude
          this.currentLocationLat = position.coords.latitude
          console.log(this.currentLocation)
        }.bind(this)) // bind to `this` so it's the current component.
        alert(currentLocation)
     }
      console.log("in getLocation function, this currentLocation is " + this.currentLocation);
      print(this.currentLocation)
   }
 }
}

<style>
.page {
  width: 100%;
  text-align: center;
}
</style>
