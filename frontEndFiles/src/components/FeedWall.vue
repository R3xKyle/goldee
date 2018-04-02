<template>
  <div id="app">
      <toolbar></toolbar>
    <br>
    <br>
    <center>
      <p style="text-align:center; font-size:40px;">Welcome Guest!           <router-link to="/newpost" ><img class="postImg" src="../assets/post.png"></router-link></p>
      <p style="text-align:center; font-size:20px;">Want to find people near you? Sign up for Goldee. It's free!</p>
      <div style="height:80%;width:60%; overflow:auto; background-color:#F0EBE7; color:#1E3C46;
                scrollbar-base-color:gold; font-family:sans-serif; padding:10px;">
      <p><input type="text" v-model="searchBox" id="search" placeholder="Search..."> <button v-on:click="handleSearch()">Search</button></p>
      <div id="load-box">
          <div v-html="getpostHTML"></div>
      </div>

    </div>
    </center>
  </div>
</template>

<script>
import Vue from 'vue'
import Toolbar from './Toolbar'
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    InfiniteLoading,
    Toolbar
  },
  data() {
    return {
      list: [],
      getpostHTML: '',
      searchBox: ''
    }
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 2; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        $state.loaded();
      }, 5);
    },
    loadData: function(event) {
      this.$http.get('/feed').then((response) => {
        var jsondata = response.body;
        this.getpostHTML = jsondata;
      });
    },
    handleSearch: function(event) {
      this.getpostHTML = '';
      var url = '/feed?query=' + this.searchBox;
      this.$http.get(url).then((response) => {
        var jsondata = response.body;
        this.getpostHTML = jsondata;
      });
    },
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


#load-box {
      margin-top: 1%;
      margin-left: 0px;
}

.signUp-button {
  background: #8EDBDF;
  border-style: solid;
  border-color: #8EDBDF;
  color: #1E3C46;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
}

.postImg {
    width: 30px;
    height: 30px;
}

</style>
