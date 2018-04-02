<template>
  <div id="app">
    <toolbar></toolbar>
      <div id=first-paragraph>
        <div style="margin-left:10%;margin-right:10%;"><b>Connect to your Community</b></div>
        <div style="margin-left:10%;margin-right:10%;"><b>by Giving Back</span></b></div>
        <p><p>

        <div class ="hero-image">
          <div class="second-paragraph">
            <div><b>This ain't your average social site.</b></div>
            <div><b>Goldee is where people come together and</b></div>
            <div><b>make the world a brighter place.</b></div>
            <p></p>
            <router-link to="/register" class="signUp-button"><b>SIGN UP</b></router-link>
          </div>
            <img class="img-responsive" src="../assets/homepage-01.png" style="width:100%;">
        </div>

        <div class=blue-background>
          <div class="blue-paragraph">
          <br></br>
            <div id=blue-header><b>How does Goldee work?</b></div>
            <div id=blue-body>Goldee supports communities help one another.</div>
              <br></br>
                  <div class="blue-image">
                    <img  src="../assets/needsPost.png" style=" width: 84%;">
                    <span class="blue-imgText">Post What You Need</span>
                  </div>
                  <div class="blue-image">
                    <img  src="../assets/match.png" >
                    <span class="blue-imgText">We'll Find Your Match</span>
                  </div>
                  <div class="blue-image">
                    <img  src="../assets/giveBack.png" >
                    <span class="blue-imgText">Review & Give Back</span>
                  </div>

                  <p></p>
                  <router-link to="/register" class="signUp-button-02"><b>GIVE GOLDEE A TRY</b></router-link>
                  <br></br>
                  <br></br>
          </div>
        </div>

        <div class=gray-background>
          <div class="gray-paragraph">
            <br></br>
              <div id=gray-header><b>Easily Connect to Your</b></div>
              <div id=gray-header><b>Communities</b></div>
              <div id=gray-body>Because we all occassionally need a hand,</div>
              <div id=gray-body>and EVERYONE has something to give</div>
              <br></br>
              <div class="gray-image">
                <img  src="../assets/lend-borrow.png" style=" width: 70%;">
                <span class="blue-imgText">Handy Help</span>
              </div>
              <div class="gray-image">
                <img  src="../assets/rideShare.png" style=" width: 70%;">
                <span class="blue-imgText">Share a Ride</span>
              </div>
              <div class="gray-image">
                <img  src="../assets/handyHelp.png" style=" width: 70%;">
                <span class="blue-imgText">Pet Care</span>
              </div>

              <br></br>
              <div class="gray-image">
                <img  src="../assets/meetPeople.png" style=" width: 70%;">
                <span class="blue-imgText">Borrow Something</span>
              </div>
              <div class="gray-image">
                <img  src="../assets/volunteer.png" style=" width: 70%;">
                <span class="blue-imgText">Tech Help</span>
              </div>
              <div class="gray-image">
                <img  src="../assets/petCare.png" style=" width: 70%;">
                <span class="blue-imgText">Volunteer</span>
              </div>

              <p></p>
              <p></p>
              <router-link to="/register" class="signUp-button-02"><b>TRY GOLDEE</b></router-link>
              <br></br>
              <br></br>
          </div>
        </div>

        <div class="white-paragraph">
            <div id="gray-header"><b>We'd love for you to join.</b></div>
            <div id="while-text">Sign up and we'll let you know when Goldee's ready!</div>

            <div id="while-text">
            <p>
              <div style="margin-bottom: 0px; margin-left: 35%;" class="list-item">
                <p class="input-para"><input align="center" style="height:50px; width: 70%;" v-model="email" class="text-input" placeholder="Email"></input></p></p>
              </div>
            </p>
            <p>
              <div style="margin-bottom: 0px; margin-left: 35%;" class="list-item">
                <p class="input-para"><input align="center" style=" height:50px; width: 70%;" v-model="password" placeholder="Password" class="text-input" type="password"></input></p></p>
              </div>
            </p>
              <button class="signUp-button" v-on:click="signUp"><b>SIGN UP</b></button>
            </div>
        </div>
     </div>
     <footbar></footbar>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import Footbar from './Footbar'
import jQuery from 'jQuery'

export default {
  components: {
    Toolbar,
    Footbar
  },
  data() {
  	return {
  	  email: '',
  	  password: ''
  	}
  },
  methods: {
	  login: function (event) {
	    alert(this.email + " " + this.password)
	  }
  }
}
</script>

<style>

input,
input::-webkit-input-placeholder {
    font-size: 20px;
    line-height: 3;
    text-align: center;
}

p span{
  display: block;
}


#first-paragraph {
  float: left;
  text-align: left;
  color: #F77D6B;
  font-size: 40px;
  margin-top: 0px;
}

.hero-image {
  position: relative;
  margin-left:10%;
  margin-right:10%;
}

.second-paragraph{
  position: absolute;
  top: 8px;
  left: 16px;
  color: #1E3C46;
  font-size: 20px;
}

.signUp-button {
  background: #B0E7EA;
  border-style: solid;
  border-color: #B0E7EA;
  color: #1E3C46;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
}

.signUp-button-02 {
background: #F77D6B;
border-style: solid;
border-color: #F77D6B;
color: white;
padding: 16px 40px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 20px;
border-radius: 30px;
}

.homepage-image-01 {
  width: 80%;
  height: 100%;
}

.blue-background {
  background-color: #B0E7EA;
}

#blue-header {
  margin-top:20px;
  font-size: 40px;
}

#blue-body {
  margin-top: 5px;
  font-size: 25px;
}

.blue-paragraph {
  color: #1E3C46;
  text-align: center;
}

#img-responsive {
  margin-left: 2%;
  margin-right: 2%;
}

div.blue-image {
  vertical-align: top;
  display: inline-block;
  text-align: center;
  margin-left: 2%;
  margin-right:2%;
}

.blue-imgText {
float: center;
  display: block;
  text-align: center;
  font-size: 20px;
}

.blue-imgText-paragraph {
text-align: center;
font-size: 16px;

}

.gray-background {
  background-color: #F0EBE7;
  text-align: center;
}

.gray-paragraph {
  color: #1E3C46;
  text-align: center;
}

#gray-header {
  margin-top:20px;
  font-size: 40px;
  color: #F77D6B;
  text-align: center;
}

#gray-body {
  margin-top: 5px;
  font-size: 25px;
}

div.gray-image {
  width: 30%;
  vertical-align: top;
  display: inline-block;
  text-align: center;
  margin-left: 0%;
  margin-right:0%;
}

.white-paragraph {
  margin-top: 7%;
}

#while-text {
  margin-top: 1%;
  font-size: 30px;
  color: #1E3C46;
  text-align: center;
}

.list-item {
  width: 430px;
  text-align: center;
  margin: auto;
}

.input-para {
  text-align: center;
  font-size: 16px;
  padding: 0;
  margin: 0;
  width: 100%;
}

.prompt-label {
  text-align: left;
  color: black;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

</style>
