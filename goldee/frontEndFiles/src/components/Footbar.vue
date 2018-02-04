<template>
    <div id="footbar">
      <div id="top-bar-logo">
        <div style="margin-left:0%; margin-top:25%; width: 100%; float: left;">
          <router-link to="/" style="float: left; "><img src="../assets/GoldeeLgo.png" height="100" width="160"></router-link>

          <br>
          </br>
          <div style="margin-left:0%; width: 100%;" >
            <p> @2017 All rights reserved.</p>
          </div>

          <div style="margin-left:0%; width: 100%;">
            <router-link to="/" style="float: left;  text-decoration: none;">Contact Us </router-link>
          </div>
        </div>
        <div style="float: right;">

        </div>
      </div>
    </div>
</template>

<script>
  export default {
  	name: 'footbar',
  	data() {
  		return {
  			title: '#footbar'
  		}
  	}
  }
</script>

<style>

#footbar {
  position: absolute;
  bottom: -470%;
	width: 200%;
	height: 40%;
	background-color: #F7AEA3;
}
</style>
