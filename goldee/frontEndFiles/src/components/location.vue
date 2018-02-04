<template>
  <div id="app">
   <toolbar></toolbar>
      <div>
        <div>Where are you located?</div>
        <p><p>

        <div id="enter-address">
          <button v-on:click="show = !show">
            Enter Your Address
          </button>
          <transition name="fade">
          <p v-if="show">hello</p>
          </transition>
        </div>
        <input type="search" id="address-input" placeholder="What is your address?" />
        <div>- Or -</div>
        <router-link to="/" class="current_address"><b>Use Current Address</b></router-link>
      </div>
    <footbar></footbar>
  </div>
</template>

import Toolbar from './Toolbar'
import Footbar from './Footbar'
import jQuery from 'jQuery'

export default {
  components: {
    Toolbar,
    Footbar
  },
  data() {
    show: true,
    isDisabled: false
  },
  methods: {
      var places = require('places.js');
      var placesAutocomplete = places({
      container: document.querySelector('#address-input')
      });
  }
}
</script>

<style>
.algolia-places {
  width: 70%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
<style>
