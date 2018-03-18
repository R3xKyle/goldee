<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">

      <div class="newpost-page">
        <div v-html="postHTML"></div>
        <div v-html="contactHTML"></div>
        <div><button id="submit" v-on:click="submitForm">Post</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import jQuery from 'jQuery'
import Toolbar from './Toolbar'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      postId: '',
      postHTML: '',
      contactHTML: ''
    }
  },
  methods: {
    loadData: function(event) {
      this.postId = this.$route.params.postid;
      var url = '/post/' + this.postId;
      this.$http.get(url).then((response) => {
        var jsondata = response.body;
        this.postHTML = jsondata;
      });

      var url = '/post/' + this.postId + '/reply';
      this.$http.get(url).then((response) => {
        var jsondata = response.body;
        this.contactHTML = jsondata;
        
      });
    },
    submitForm: function() {
      this.postId = this.$route.params.postid;
      var url = '/post/' + this.postId + '/reply';
      jQuery('#replypost_form').attr('action', url);
      jQuery('#replypost_form').submit();
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
