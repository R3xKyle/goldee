<template>
  <div id="app">
    <toolbar></toolbar>
      <div class="body">
        <router-link to="/feedwall" ><img class="cancelPostImg" src="../../assets/cancelPost.png" style="width:auto; height:50px"></router-link>
        <h1>Select a category for your post</h1>
        <!-- <div v-html="postHTML"></div> -->
        <div class="categories">
          <button class="button-gray" style="width:250px; height:50px">Food/Drink</button>
          <button class="button-gray" style="width:250px; height:50px">Hangouts</button>
          <br />
          <button class="button-gray" style="width:250px; height:50px">Volunteer</button>
          <button class="button-gray" style="width:250px; height:50px">Sports/Fitness</button>
          <br />
          <button class="button-gray" style="width:250px; height:50px">Learn/Teach</button>
          <button class="button-gray" style="width:250px; height:50px">Lend/Borrow</button>
          <br />
          <button class="button-gray" style="width:250px; height:50px">Rideshare</button>
          <button class="button-gray" style="width:250px; height:50px">Something else</button>
        </div>
        <h3>Posts stay active for 7 days<br/>and must adhere to <a href="../GoldeeTerm.vue">Goldee's guidelines</a>.</h3>
        <button class="button-pink" style="margin-top: 20px; width:100px; height:40px" id="nextToPost" v-on:click="showPost($event)">Next</button>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <div id="footer" class="footer">
        <img src="../../assets/logo_icon_white.png">
        <p class="footer-text" style="margin-top: 25px">Goldee connects communities of people of care.</p>
        <p class="footer-text" style="text-align: right; margin-right: 20px"><a href="mailto: support@gogoldee.com">Help!</a></p>
        <p class="small-text">Copyright &copy; 2018 All rights reserved.</p>
        <p class="small-text">Terms of Use | Privacy Policy | Safety</p>
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
      postHTML: '',
      tags: []
    }
  },
  methods: {
    loadData: function(event) {
      this.$http.get('/post/new').then((response) => {
        var jsondata = response.body;
        this.postHTML = jsondata;
        var values = document.getElementById('categoryMenu').options;
        alert(values);
      });
    },
    showPost: function (event) {
      jQuery('.postInfo').css('display', 'block');
      jQuery('.category').css('display', 'none');
      jQuery('#postToContact').css('display', 'block');
      jQuery('#nextToPost').css('display', 'none');
    },
    showContact: function (event) {
      jQuery('.contactInfo').css('display', 'block');
      jQuery('.postInfo').css('display', 'none');
      jQuery('#submit').css('display', 'block');
      jQuery('#postToContact').css('display', 'none');
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
  @import '../../assets/css/styles.css'
  @import '../../assets/css/buttons.css'
</style>
