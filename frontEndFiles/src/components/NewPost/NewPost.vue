<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page">
      <router-link to="/feedwall" ><img class="cancelPostImg" src="../../assets/cancelPost.png"></router-link>
      <div class="newpost-page">
        <div class="category">
          <p>Select a Category for your Post</p>
          <p>All posts stay active for 30 days and must adhere to Goldee's guidelines.</p>
        </div>
        <div v-html="postHTML"></div>
        <div><button id="nextToPost" v-on:click="showPost($event)">Next</button></div>
        <div><button id="postToContact" style="display:none" v-on:click="showContact($event)">Next</button></div>
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

#postType input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
}

#postType label {
  display: inline-block;
  width: 60px;
  background-color: Bisque;
  color: black;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  padding: 10px 25px;
  border-radius: 20px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition:    all 0.1s ease-in-out;
  -ms-transition:     all 0.1s ease-in-out;
  -o-transition:      all 0.1s ease-in-out;
  transition:         all 0.1s ease-in-out;
}

#postType input:checked + label {
  background-color: IndianRed;
  color: white;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#postType li {
  display: inline;
}

#postType {
  list-style-type: none;
}


#category input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
}

#category label {
  display: inline-block;
  width: 120px;
  background-color: Bisque;
  color: black;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  text-shadow: none;
  padding: 10px 25px;
  border-radius: 20px;
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition:    all 0.1s ease-in-out;
  -ms-transition:     all 0.1s ease-in-out;
  -o-transition:      all 0.1s ease-in-out;
  transition:         all 0.1s ease-in-out;
}

#category input:checked + label {
  background-color: IndianRed;
  color: white;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#category li {
  display: inline;
  margin: 10px 0;
}

#category {
  list-style-type: none;
}

.cancelPostImg {
  width: 30px;
  height: 30px;
}

</style>
