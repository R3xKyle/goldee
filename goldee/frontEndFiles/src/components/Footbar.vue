<template>
    <div id="footbar">
      <div id="top-bar-logo">
        <div style="margin-left:15%; margin-top:25%; width: 100%;">
        <router-link to="/" style="float: left; "><img src="../assets/GoldeeLgo.png" height="100" width="160"></router-link>

        </div>
        <br>

        <div>@2017 All rights reserved.</div>
        <br>
        <div style="display:inline-block;">
        <router-link to="/" style=" float: left; text-decoration: none;">Terms of Use  </router-link>
        <router-link to="/" style="float: left;  text-decoration: none;"> Terms of Use </router-link>
        <router-link to="/" style="float: left;  text-decoration: none;"> Terms of Use </router-link>
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

.footer {
  background-color: #F7AEA3;
  color: #1E3C46;
  height: 60px;
  position:absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

#footbar {
  position: absolute;
  bottom: -450%;
	width: 100%;
	height: 40%;
	background-color: #F7AEA3;

}
</style>
