<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="fullpage-container">
	  <div class="fullpage-wp" v-fullpage="opts" ref="register">
	    <div class="page-1 page">
        <div class="page-content">
  	      <p class="part-1">Create an Account</p>
  	      <div class="list-line">
            <div class="name-list-item">
              <p class="prompt-label">First Name</p>
              <p class="input-para"><input class="text-input" v-model="firstname"></input></p>
            </div>
            <div class="name-list-item">
              <p class="prompt-label">Last Name</p>
              <p class="input-para"><input class="text-input" v-model="lastname"></p>
            </div>
          </div>
  	      <p>
            <div class="list-item">
              <p class="prompt-label">Email</p>
              <p class="input-para"><input v-model="email" class="text-input"></input></p></p>
            </div>
          </p>
          <p>
            <div class="list-item">
              <p class="prompt-label">Password</p>
              <p class="input-para"><input v-model="password" class="text-input" type="password"></input></p></p>
            </div>
          </p>
  	      <button class="blue-button" @click="moveNext">SIGN UP</button>
        </div>
	    </div>
      <div class="page-2 page">
        <p class="part-2">Upload your Picture</p>

    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="350"
      height="350"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a Picture Here'
      }">
    </picture-input>
  <p></p>
        <button class="blue-button" @click="moveNext">NEXT</button>
      </div>

	    <div class="page-3 page">
	      <p class="part-3">Find a Community Near You</p>
	      <button class="gray-button">USE MY LOCATION</button>
	      <button class="blue-button" @click="moveNext">NEXT</button>
	    </div>
      <div class="page-4 page">
        <p class="part-4">Join a Public Community</p>
        <button class="blue-button" @click="moveNext">NEXT</button>
      </div>
	    <div class="page-5 page">
        <div class="page-content">
  	      <p class="part-5">Can you Lend any of these Items?</p>
  	      <p class="buttons-line">
            <button v-on:click="tagClicked($event, 1)" class="square-button">
              <div>
                <p class="square-button-title">Books</p>
                <p class="square-button-text">Children's, Young Adult, Fiction, Non Fiction, Textbooks</p>
              </div>
            </button>
            <button v-on:click="tagClicked($event, 2)" class="square-button">
              <div>
                <p class="square-button-title">Musical Instruments</p>
                <p class="square-button-text">High Chairs, Backpacks, Strollers, Swings, Feeding...</p>
              </div>
            </button>
            <button v-on:click="tagClicked($event, 3)" class="square-button">
              <div>
                <p class="square-button-title">Pet Supplies</p>
                <p class="square-button-text">Blenders, Electric Mixers, Pasta Makers, Meat Grinders...</p>
              </div>
            </button>
          </p>
  	      <p class="buttons-line">
            <button v-on:click="tagClicked($event, 4)" class="square-button">
              <div>
                <p class="square-button-title">Home Improvement</p>
                <p class="square-button-text">Sewing Machine, Print Making Tools, Kinitting & Crocheting...</p>
              </div>
            </button>
    	      <button v-on:click="tagClicked($event, 5)" class="square-button">
              <div>
                <p class="square-button-title">Games</p>
                <p class="square-button-text">Borad Games, Video Games, Lawn Games, etc.</p>
              </div>
            </button>
            <button v-on:click="tagClicked($event, 6)" class="square-button">
              <div>
                <p class="square-button-title">Other, Misc</p>
                <p class="square-button-text">Blenders, Electric Mixers, Pasta Makers, Meat Grinders...</p>
              </div>
            </button>
          </p>
  	      <button class="gray-button" @click="moveToThingsSection">NONE</button>
  	      <button class="blue-button" @click="moveToNextTag">NEXT</button>
        </div>
	    </div>
	    <div class="page-6 page">
        <div class="page-content">
  	      <p class="part-6">Select the Items you may be able to Lend</p>
          <p class="subtitle">Books</p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Books', 'Children')" class="rectangular-button">Children</button>
            <button v-on:click="makeLendSelection($event, 'Books', 'Young Adult')" class="rectangular-button">Young Adult</button>
            <button v-on:click="makeLendSelection($event, 'Books', 'Fiction')" class="rectangular-button">Fiction</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Books', 'Non Fiction')" class="rectangular-button">Non Fiction</button>
            <button v-on:click="makeLendSelection($event, 'Books', 'Text Books')" class="rectangular-button">Text Books</button>
            <button v-on:click="makeLendSelection($event, 'Books', 'Other')" class="rectangular-button">Other</button>
          </p>
          <p>
            <button class="gray-button" @click="moveToPrevTag">BACK</button>
            <button class="blue-button" @click="moveToNextTag">NEXT</button>
          </p>
        </div>
	    </div>
      <div class="page-7 page">
        <div class="page-content">
          <p class="part-7">Select the Items you may be able to Lend</p>
          <p class="subtitle">Musical Instruments</p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Guitar')" class="rectangular-button">Guitar</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Ukuleles')" class="rectangular-button">Ukuleles</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Mandolin')" class="rectangular-button">Mandolin</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Banjo')" class="rectangular-button">Banjo</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Amplifier')" class="rectangular-button">Amplifier</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Effects')" class="rectangular-button">Effects</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Drum & Percussions')" class="rectangular-button">Drum & Percussions</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Keyboards & Midi')" class="rectangular-button">Keyboards & Midi</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Microphone and Accessories')" class="rectangular-button">Microphone and Accessories</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Brass Instruments')" class="rectangular-button">Brass Instruments</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Stringed Instruments')" class="rectangular-button">Stringed Instruments</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Wind & Woodwind Instruments')" class="rectangular-button">Wind & Woodwind Instruments</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'Studio Recording Equipment')" class="rectangular-button">Studio Recording Equipment</button>
            <button v-on:click="makeLendSelection($event, 'Musical Instruments', 'DJ Equipment')" class="rectangular-button">DJ Equipment</button>
          </p>
          <p>
            <button class="gray-button" @click="moveToPrevTag">BACK</button>
            <button class="blue-button" @click="moveToNextTag">NEXT</button>
          </p>
        </div>
      </div>
      <div class="page-8 page">
        <div class="page-content">
          <p class="part-8">Select the Items you may be able to Lend</p>
          <p class="subtitle">Pet Supplies</p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Crate')" class="rectangular-button">Crate</button>
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Cage')" class="rectangular-button">Cage</button>
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Heat Lamps')" class="rectangular-button">Heat Lamps</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Carriers')" class="rectangular-button">Carriers</button>
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Gates')" class="rectangular-button">Gates</button>
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Training Collar')" class="rectangular-button">Training Collar</button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Bark Collar')" class="rectangular-button">Bark Collar</button>
            <button v-on:click="makeLendSelection($event, 'Pet Supplies', 'Other')" class="rectangular-button">Other</button>
          </p>
          <p>
            <button class="gray-button" @click="moveToPrevTag">BACK</button>
            <button class="blue-button" @click="moveToNextTag">NEXT</button>
          </p>
        </div>
      </div>
      <div class="page-9 page">
        <p class="part-9">Select the Items you may be able to Lend</p>
        <p class="subtitle">Home Improvement</p>

        <button class="gray-button" @click="moveToPrevTag">BACK</button>
        <button class="blue-button" @click="moveToNextTag">NEXT</button>
      </div>
      <div class="page-10 page">
        <p class="part-10">Select the Items you may be able to Lend</p>
        <p class="subtitle">Games</p>
        <button class="gray-button" @click="moveToPrevTag">BACK</button>
        <button class="blue-button" @click="moveToNextTag">NEXT</button>
      </div>
      <div class="page-11 page">
        <p class="part-11">Select the Items you may be able to Lend</p>
        <p class="subtitle">Other, Misc</p>
        <button class="gray-button" @click="moveToPrevTag">BACK</button>
        <button class="blue-button" @click="moveToNextTag">NEXT</button>
      </div>
      <div class="page-12 page">
        <div class="page-content">
          <p class="part-12">What kind of things can you do?</p>
          <p class="buttons-line">
            <button v-on:click="makeThingsSelection($event, 'Share a Ride')" class="square-button">
              <div>
                <p class="square-button-title">Share a Ride</p>
                <p class="square-button-text">Daily carpool, trips to the grocery store, road trip to LA</p>
              </div>
            </button>
            <button v-on:click="makeThingsSelection($event, 'Teach a Skill')" class="square-button">
              <div>
                <p class="square-button-title">Teach a Skill</p>
                <p class="square-button-text">New language, music, computer programs...</p>
              </div>
            </button>
            <button v-on:click="makeThingsSelection($event, 'Mentor Someone')" class="square-button">
              <div>
                <p class="square-button-title">Mentor Someone</p>
                <p class="square-button-text">Young people after school, or someone new to your industry</p>
              </div>
            </button>
          </p>
          <p class="buttons-line">
            <button v-on:click="makeThingsSelection($event, 'Babysit')" class="square-button">
              <div>
                <p class="square-button-title">Babysit</p>
                <p class="square-button-text">Watch a group of children during an event, or one-on-one</p>
              </div>
            </button>
            <button v-on:click="makeThingsSelection($event, 'Care for Pets')" class="square-button">
              <div>
                <p class="square-button-title">Care for Pets</p>
                <p class="square-button-text">Dog Walking, Petsitting, Pet Training, Animal Whispering</p>
              </div>
            </button>
            <button v-on:click="makeThingsSelection($event, 'Handy Help')" class="square-button">
              <div>
                <p class="square-button-title">Handy Help</p>
                <p class="square-button-text">Minor home repaits, Furniture assembly, Hanging shelves...</p>
              </div>
            </button>
          </p>
          <button class="gray-button" @click="moveToThingsSection">NONE</button>
          <button class="blue-button" @click="submitSelectionData">NEXT</button>
        </div>
      </div>
	  </div>
	</div>
  </div>
</template>

<script>

import Toolbar from './Toolbar'

import Vue from 'vue'
import jQuery from 'jQuery'

import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'

import PictureInput from 'vue-picture-input'


Vue.use(VueFullpage)

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      tagSelection: {
      	1: false,
      	2: false,
      	3: false,
      	4: false,
      	5: false,
      	6: false
      },

      userSelection: {
        lendItems: {
          'Books': [],
          'Musical Instruments': [],
          'Pet Supplies': [],
          'Home Improvement': [],
          'Games': [],
          'Other, Misc': []
        },
        thingsToDo: []
      },
      currentTag: 0,
      currentPage: 0,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        movingFlag: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  },

  components: {
    PictureInput
  },
  methods: {

    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },


    moveNext() {
      this.currentPage++;
      this.$refs.register.$fullpage.moveNext();
    },
    moveBack() {
      this.currentPage--;
      this.$refs.register.$fullpage.movePrev();
    },
    nextAvailableTag() {
      for (var i=this.currentTag+1; i<7; i++) {
      	if (this.tagSelection[i]) {
      	  return i;
      	}
      }
      return 7;
    },
    prevAvailableTag() {
      for (var i=this.currentTag-1; i>0; i--) {
      	if (this.tagSelection[i]) {
      	  return i;
      	}
      }
      return 0;
    },
    tagClicked(event, id) {
      if (this.tagSelection[id]) {
      	jQuery(event.currentTarget).css('background', 'none');
      	jQuery(event.currentTarget).css('color', 'black');
      } else {
      	jQuery(event.currentTarget).css('background', 'gray');
        jQuery(event.currentTarget).css('color', 'white');
      }
      this.tagSelection[id] = !(this.tagSelection[id])
    },
    makeLendSelection(event, type, item) {
      var operationArr = this.userSelection['lendItems'][type]
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          jQuery(event.currentTarget).css('background', 'none');
          jQuery(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item)
        jQuery(event.currentTarget).css('background', 'gray');
        jQuery(event.currentTarget).css('color', 'white');
      }
    },
    makeThingsSelection(event, item) {
      var operationArr = this.userSelection['thingsToDo']
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          jQuery(event.currentTarget).css('background', 'none');
          jQuery(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item)
        jQuery(event.currentTarget).css('background', 'gray');
        jQuery(event.currentTarget).css('color', 'white');
      }
    },
    submitSelectionData() {
      alert(JSON.stringify(this.userSelection))
    },
    moveToNextTag() {
      var nextTag = this.nextAvailableTag();
      this.currentTag = nextTag;
      this.currentPage = nextTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToPrevTag() {
      var prevTag = this.prevAvailableTag();
      this.currentTag = prevTag
      this.currentPage = prevTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToThingsSection() {
      for (var i=0; i<7; i++) {
        this.tagSelection[i] = false;
      }
      this.moveToNextTag()
    },
    handleScroll(event) {
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    }
  },
  created () {
    window.addEventListener('mousewheel', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('mousewheel', this.handleScroll);
  }
}

</script>

<style>

.fullpage-container {
 	position: absolute;
 	left: 0;
 	bottom: 0;
 	width: 100%;
 	height: 95%;

}

.prompt-label {
  text-align: left;
  color: black;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.input-para {
  text-align: left;
  font-size: 14px;
  padding: 0;
  margin: 0;
  width: 100%;
}

.page-content {
  width: 600px;
  margin: auto;
}

.name-list-item {
  width: 270px;
  display: inline-block;
}

.list-item {
  width: 550px;
  margin: auto;
}

.list-line {
  width: 600px;
}

.text-input {
  width: 100%;
  height: 35px;
  font-size: 20px;
}

.buttons-line {
  display: inline-block;
}

.page {
	display: block;
  background: white;
	text-align: center;
	font-size: 26px;
	color: black;
}

.page-1 {
	padding-top: 100px;
}

.page-2 {
  padding-top: 100px;
}

.page-3 {
	padding-top: 50px;
}

.page-4 {
	padding-top: 50px;
}

.page-5 {
	padding-top: 50px;
}

.page-6 {
  padding-top: 50px;
}

.page-7 {
  padding-top: 50px;
}

.page-8 {
  padding-top: 50px;
}

.page-9 {
  padding-top: 50px;
}

.page-10 {
  padding-top: 50px;
}

.page-11 {
  padding-top: 50px;
}

.page-12 {
  padding-top: 50px;
}

.blue-button {
  background: SkyBlue;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

.gray-button {
  background: Gray;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

.square-button {
  width: 180px;
  height: 180px;
  background: white;
  border-style: solid;
}

.square-button-text {
  padding: 0;
  margin: 0;
}

.rectangular-button {
  width: 180px;
  height: 65px;
  background: white;
  border-style: solid;
}

</style>
