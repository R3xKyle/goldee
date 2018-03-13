<template>
  <div id="app">
    <toolbar></toolbar>
      <div id=first-paragraph>
        <div style="margin-left:10%;margin-right:10%;">Connect to your Community</div>
        <div style="margin-left:10%;margin-right:10%;">by Giving Back</span></div>
        <p><p>

        <div class ="hero-image">
          <div class="second-paragraph">
            <div>This ain't your average social site.</div>
            <div>Goldee is where people come together and</div>
            <div>make the world a brighter place.</div>
            <p></p>
            <router-link to="/register" class="signUp-button">SIGN UP</router-link>
          </div>
            <img class="img-responsive" src="../assets/homepage-01.png" style="width:100%;">
        </div>

        <div class=blue-background>
          <div class="blue-paragraph">
          <br></br>
            <div id=blue-header>How does Goldee work?</div>
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
                  <router-link to="/register" class="signUp-button-02">GIVE GOLDEE A TRY</router-link>
                  <br></br>
                  <br></br>
          </div>
        </div>

        <div class=gray-background>
          <div class="gray-paragraph">
            <br></br>
              <div id=gray-header>Examples of Ways to connect</div>
              <div id=gray-body>Click to see example posts.</div>
              <br></br>
              <br></br>



          </div>
        </div>


     </div>

  </div>
</template>

<script>
import Toolbar from './Toolbar'
import jQuery from 'jQuery'

export default {
  components: {
    Toolbar
  },
  mounted() {
  }
}
</script>

<style>

p span{
  display: block;
}


#first-paragraph {
  float: left;
  text-align: left;
  color: #F7AEA3;
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
  background: #8EDBDF;
  border-style: solid;
  border-color: white;
  color: #1E3C46;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;
}

.signUp-button-02 {
background: #F7AEA3;
border-style: solid;
border-color: #F7AEA3;
color: #1E3C46;
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
  background-color: #8EDBDF;
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
}

#gray-body {
  margin-top: 5px;
  font-size: 25px;
}


</style>
