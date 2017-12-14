<template>
  <div id="app">
      <toolbar></toolbar>
    <br>
    <br>
    <center>
      <p style="text-align:center; font-size:40px;">Welcome Guest!</p>
      <p style="text-align:center; font-size:20px;">Want to find people near you? Sign up for Goldee. It's free!</p>
      <router-link to="/register" class="signUp-button">SIGN UP</router-link>
      <br></br>
    <div style="height:80%;width:60%; overflow:auto; background-color:#F0EBE7; color:#1E3C46;
                scrollbar-base-color:gold; font-family:sans-serif; padding:10px;">

      <div id="load-box">
      <div>
        <p v-for="item in list" style="background-color:white; height:100px;">
        Line:
          <span v-text="item"></span>
          </p>
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </div>

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
  data() {
    return {
      list: [],
    };
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i);
        }
        this.list = this.list.concat(temp);
        $state.loaded();
      }, 1000);
    },
  },
  components: {
    InfiniteLoading,
    Toolbar
  }
};

</script>

<style>



#load-box {
      margin-top: 10%;
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

</style>
