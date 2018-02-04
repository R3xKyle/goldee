<template>
  <div id="toolbar">
  <Slideout :toggleSelectors="['.toggle-button', '.another-toggle']" @on-open="logger">

    <div id="top-bar-logo">
      <router-link to="/" style="float: left;"><img src="../assets/GoldeeLgo.png" height="100" width="160"></router-link>
    </div>

    <div id="top-bar-link">
       <router-link to="/about" class="no-border-button" >Share</router-link>
       <router-link to="/about" class="no-border-button" >About</router-link>
    </div>

    <div id="sidebar-id">


       <nav id="menu">
       			<div>Menu</div>
       		</nav>
          <header>
            <div><button class="toggle-button">☰</button>Panel</div>
          </header>
    </div>

    </Slideout>
  </div>
</template>

<script>
	import Slideout from 'vue-slideout'

  export default {
  	name: 'toolbar',
    components: {
      Slideout
    },
  	data() {
  		return {
  			title: '#toolbar'
  		}
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

#toolbar {
	width: 100%;
	height: 13%;
	background-color: #8EDBDF;

}

#top-bar-logo {
  float: left;
  margin-bottom: 5%;
  margin-top: 0.3%;
  margin-left: 3%;
  vertical-align: middle;
}

#top-bar-link {
  float: left;
  margin-top: 2%;
  margin-bottom: 1%;
  vertical-align: middle;

}

#login-join {
	float: right;
  margin-top: 2%;
	margin-bottom: 1%;
  margin-right: 3%;
	vertical-align: middle;
}

.no-border-button {
	background: none;
	border: none;
    color: #1E3C46;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}

.rounded-cornor-button {
	background: none;
	border-style: solid;
	border-color: #1E3C46;
    color: #1E3C46;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
}

.rounded-cornor-button { border-radius: 20px; }

.slideout-open,
	.slideout-open body,
	.slideout-open .slideout-panel {
		overflow: hidden;
	}

	.slideout-open .slideout-menu {
		display: block;
	}
</style>
