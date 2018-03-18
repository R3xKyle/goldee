<template>
  <div id="app">
    <toolbar></toolbar>

      <div>hahaha</div>

    <footer></footer>
  </div>
</template>

<script>

import Vue from 'vue'
import Toolbar from './Toolbar'
import Footbar from './Footbar'
import VueDialog from 'vuedialog';
import { Bus, Component as  Vuedals } from 'vuedals';

VueDialog.setBus(Bus);

export default {
  name: 'vuedialog-example',

  components: {
    Toolbar,
    Footbar,
    VueDialog,
    Vuedals,
    template: '<div>To continue, <span @click="continue()">click here</span><vuedals></vuedals></div>'
  },
  data() {
  	return {
  	}
  },
  methods: {

  continue() {
          VueDialog.confirm('Are you sure of this?')
              .then(_ => alert('You are sure'))
              .catch(_ => alert('Phew..'));
      }

    },
  beforeMounted() {

    },

}

window.onload = function() {
  var app = new Vue({
    el: "#login-div",
  	delimiters: ['[[',']]']
  })
}
</script>


<style>
.vue-dialog.hard-confirm .confirmation-message {
  font-style: italic;
}
.vue-dialog.hard-confirm .input-container {
  margin: 10px 0;
  width: 250px;
}

.vue-dialog.hard-confirm  .input-container input {
  width: 100%;
  margin-bottom: 10px;
}

.vue-dialog.hard-confirm .typed-progress-bar {
  height: 10px;
}

.vue-dialog.hard-confirm .typed-progress-bar > span {
   height: 100%;
   background-color: blue;
   display: block;
   transition: width 1s;
}
</style>
