<style>
  @import '../assets/css/styles.css'
</style>

<template>
  <div id="app">
    <toolbar style="margin-bottom: 0px;"></toolbar>
    <div class="page" style="margin: 0px;">
      <div class="body" style="margin-top: 0px;">
        <h1>Connect with<br/>Good People</h1>
          <h2 style="font-size: 1em;">Make a Positive Difference<br/>in your Community</h2>
      
        <br/>
        <a class="typeform-share button" href="https://erin171.typeform.com/to/omMu5N" data-mode="popup" style="-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;" data-hide-headers=true target="_blank">See Who's Near You </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script>
      </div>
      </div>
      <div class="footer" style="text-align:left; background-color:#F77D6B; margin: 0;">
        <img src="../assets/logo_icon_white.png">
        <p class="footer-text" style="margin-top: 25px">Goldee connects communities of people of care.</p>
        <p class="footer-text" style="text-align: right; margin-right: 20px"><a href="mailto: support@gogoldee.com">Help!</a></p>
        <p class="small-text">Copyright &copy; 2018 All rights reserved.</p>
        <p class="small-text">Terms of Use | Privacy Policy | Safety</p>
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
