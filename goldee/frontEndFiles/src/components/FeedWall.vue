<template>
  <div id="app">

    <p> START here! </p>
    <div v-cloak>
      <toolbar></toolbar>
    </div>
    <p> START here! </p>

    <div>
      <p v-for="item in list">
      Line:
        <span v-text="item"></span>
      </p>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Toolbar from './Toolbar'
import InfiniteLoading from 'vue-infinite-loading';



export default {


  components: {
    Toolbar
  },
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
  },
};

</script>
