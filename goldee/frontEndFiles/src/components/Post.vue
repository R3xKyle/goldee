<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="fullpage-container">
	  <div class="fullpage-wp" v-fullpage="opts" ref="register">
	    <div class="page">
        <div class="page-content">
  	      <p>Where do you want to Post?</p>
          <button v-for="(community,n) in communities":data-index="n" v-on:click="makeCommunitySelection($event, n)" class="large-rectangular-button">
            <div>
              <p class="large-rectangular-button-title">{{ community.title }}</p>
              <p class="large-rectangular-button-text">{{ community.description }}</p>
            </div>
          </button>
          <p>
            <button class="gray-button" @click="cancel">CANCEL</button>
            <button class="blue-button" @click="moveNext">NEXT</button>
          </p>
        </div>
	    </div>
      <div class="page">
        <div class="page-content">
          <p>What do you need?</p>
          <button v-for="(helpType,n) in helpTypes":data-index="n" v-on:click="makeHelpTypeSelection($event, n)" class="rectangular-button">{{ helpType }}</button>
          <p>
            <button class="gray-button" @click="cancel">CANCEL</button>
            <button class="blue-button" @click="moveNext">NEXT</button>
          </p>
        </div>
      </div>

	    <div class="page">
        <div class="page-content">
          <p>Where type of thing do you want to borrow?</p>
          <button v-for="(thing,n) in thingsToBorrow":data-index="n" v-on:click="makeThingsToBorrowSelection($event, n)" class="large-rectangular-button">
            <div>
              <p class="large-rectangular-button-title">{{ thing.title }}</p>
              <p class="large-rectangular-button-text">{{ thing.description }}</p>
            </div>
          </button>
          <p>
            <button class="blue-button" @click="moveNext">NEXT</button>
          </p>
        </div>
	    </div>

      <div class="page">
        <div class="page-content">
          <p>Create your Post</p>
          <p>
            <div class="list-item">
              <p class="prompt-label">Headline</p>
              <p class="input-para"><input v-model="title" class="text-input"></input></p></p>
            </div>
          </p>
          <p>
            <div class="list-item">
              <p class="prompt-label">Description</p>
              <p class="input-para"><textarea v-model="content" class="large-text-input"></textarea></p></p>
            </div>
          </p>
          <p>
            <div class="list-item">
              <p class="prompt-label">Estimated Time Needed</p>
              <p></p>
              <vue-slider v-model="timeNeeded" v-bind="sliderOptions">
                <div class="diy-tooltip" slot="tooltip" slot-scope="tooltip">{{ tooltip.value }}</div>
              </vue-slider>
            </div>
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

import vueSlider from 'vue-slider-component'


Vue.use(VueFullpage)

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      title: '',
      content: '',
      communities: [
        {
          title: 'SLOcals',
          description: 'People who call the lovely city of San Luis Obispo home'
        }, 
        {
          title: 'Students of SLO',
          description: 'College students living or studying in San Luis Obispo'
        }
      ],
      helpTypes: ['A Ride', 'Pet Care', 'Borrow Something', 'Learn Something', 'Babysitter', 'Handy Help', 'Tutoring', 'Companionship', 'Moving/Packing Help', 'Yardwork Help', 'House Sitter', 'Mentorship', 'Something Else'],
      thingsToBorrow: [
        {
          title: 'Arts, Crafts, Sewing',
          description: 'Sewing Machine, Print Making, Tools, Knitting & Crocheting...'
        },
        {
          title: 'Cooking & Baking',
          description: 'Blenders, Electric mixers, Pasta makers, Meat grinders'
        }
      ],
      newPostData: {
        'title': '',
        'content': '',
        'communities': [],
        'helpTypes': [],
        'thingsToBorrow': []
      },
      timeNeeded: 1,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        movingFlag: true,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      },
      sliderOptions: {
        min: 0,
        max: 100
      }
    }
  },

  components: {
    vueSlider
  },
  methods: {

    moveNext() {
      this.currentPage++;
      this.$refs.register.$fullpage.moveNext();
    },
    moveBack() {
      this.currentPage--;
      this.$refs.register.$fullpage.movePrev();
    },
    cancel() {

    },
    makeCommunitySelection(event, item) {
      var operationArr = this.newPostData['communities']
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
    makeHelpTypeSelection(event, item) {
      var operationArr = this.newPostData['helpTypes']
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
    makeThingsToBorrowSelection(event, item) {
      var operationArr = this.newPostData['thingsToBorrow']
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
    loadSectionData() {
      
    },
    submitPostData() {
      alert(JSON.stringify(this.newPostData))
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
  beforeMount() {
    this.loadSectionData()
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

.large-text-input {
  resize: none;
  width: 100%;
  height: 120px;
  font-size: 20px;
  border-color: lightgray;
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
  padding-top: 100px;
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

.large-rectangular-button {
  width: 180px;
  height: 95px;
  background: white;
  border-style: solid;
}

</style>
