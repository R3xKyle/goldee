<template>
  <div id="app">
    <toolbar></toolbar>
    <div style="background-color: #F7AEA3; width: 100%; height: 100%;" center>
    <p>Not Found</p>
    </center>

    </div>
     <footer></footer>
  </div>
</template>

<script>

import Vue from 'vue'
import Toolbar from './Toolbar'
import Footbar from './Footbar'

export default {
  components: {
    Toolbar,
    Footbar
  }
}

window.onload = function() {
  var app = new Vue({
    el: "#login-div",
  	delimiters: ['[[',']]']
  })
}


</script>
