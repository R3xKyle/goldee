<template>
  <div id="app">
    <router-view>
    <Slideout :toggleSelectors="['.toggle-button', '.another-toggle']" @on-open="logger">
		</Slideout>
    </router-view>
  </div>
</template>

<script>
import Slideout from 'vue-slideout'

export default {
  name: 'app',
  components: {
    Slideout
  },
  mounted: function () {
      console.log(this.$children[0].slideout.isOpen())
    },
  methods: {
      logger: function () {
      console.log('open event')
      }
  }
}
</script>

<style>
#app {
  position: absolute;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

</style>
