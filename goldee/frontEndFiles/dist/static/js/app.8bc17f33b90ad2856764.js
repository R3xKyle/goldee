webpackJsonp([0],{

/***/ "+3kS":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/test_avatar.b8fddf3.jpg";

/***/ }),

/***/ "+LUL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/lend-borrow.d2ea812.png";

/***/ }),

/***/ "+g0x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7123d07b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Location_vue__ = __webpack_require__("T+ca");
function injectStyle (ssrContext) {
  __webpack_require__("MlGu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7123d07b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Location_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "/9hY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',{staticClass:"page-container"},[_c('p',{staticClass:"title"},[_vm._v("Your Profile")]),_vm._v(" "),_c('p',{staticClass:"content"},[_c('table',{staticClass:"main-table"},[_vm._m(0),_vm._v(" "),_c('tr',[_c('table',{attrs:{"width":"100%"}},[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('p',[_vm._v("A clear and recent photo of your face allows community ...")]),_vm._v(" "),_c('p',[_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("UPLOAD A NEW IMAGE")])])])])])]),_vm._v(" "),_c('tr',[_c('table',{attrs:{"width":"100%"}},[_vm._m(2),_vm._v(" "),_c('tr',[_c('td',{attrs:{"align":"left"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.firstname),expression:"firstname"}],staticClass:"text-input",domProps:{"value":(_vm.firstname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.firstname=$event.target.value}}})]),_vm._v(" "),_c('td',{attrs:{"align":"left"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.lastname),expression:"lastname"}],staticClass:"text-input",domProps:{"value":(_vm.lastname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.lastname=$event.target.value}}})])])])])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',{attrs:{"align":"left"}},[_vm._v("Profile Photo")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{attrs:{"width":"200px"}},[_c('img',{staticClass:"avatar",attrs:{"src":__webpack_require__("+3kS")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',{attrs:{"align":"left","width":"50%"}},[_vm._v("First Name")]),_vm._v(" "),_c('td',{attrs:{"align":"left","width":"50%"}},[_vm._v("Last Name")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "/cHN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0jZp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'picture-input',
  props: {
    width: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    height: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    margin: {
      type: [String, Number],
      default: 0
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    size: {
      type: [String, Number],
      default: Number.MAX_SAFE_INTEGER
    },
    name: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    buttonClass: {
      type: String,
      default: 'btn btn-primary button'
    },
    removeButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    aspectButtonClass: {
      type: String,
      default: 'btn btn-secondary button secondary'
    },
    prefill: {
      type: [String, File],
      default: ''
    },
    prefillOptions: {
      type: Object,
      default: () => {
        return {};
      }
    },
    crop: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    removable: {
      type: Boolean,
      default: false
    },
    hideChangeButton: {
      type: Boolean,
      default: false
    },
    autoToggleAspectRatio: {
      type: Boolean,
      default: false
    },
    toggleAspectRatio: {
      type: Boolean,
      default: false
    },
    changeOnClick: {
      type: Boolean,
      default: true
    },
    plain: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 10000
    },
    alertOnError: {
      type: Boolean,
      default: true
    },
    customStrings: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    prefill() {
      if (this.prefill) {
        this.preloadImage(this.prefill, this.prefillOptions);
      } else {
        this.removeImage();
      }
    }
  },
  data() {
    return {
      imageSelected: false,
      previewHeight: 0,
      previewWidth: 0,
      draggingOver: false,
      canvasWidth: 0,
      canvasHeight: 0,
      strings: {
        upload: '<p>Your device does not support file uploading.</p>',
        drag: 'Drag an image or <br>click here to select a file',
        tap: 'Tap here to select a photo <br>from your gallery',
        change: 'Change Photo',
        aspect: 'Landscape/Portrait',
        remove: 'Remove Photo',
        select: 'Select a Photo',
        selected: '<p>Photo successfully selected!</p>',
        fileSize: 'The file size exceeds the limit',
        fileType: 'This file type is not supported.'
      }
    };
  },
  mounted() {
    this.updateStrings();
    if (this.prefill) {
      this.preloadImage(this.prefill, this.prefillOptions);
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    });
    if (this.supportsPreview) {
      this.pixelRatio = Math.round(window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI);
      const canvas = this.$refs.previewCanvas;
      if (canvas.getContext) {
        this.context = canvas.getContext('2d');
        this.context.scale(this.pixelRatio, this.pixelRatio);
      }
    }
    if (this.accept !== 'image/*') {
      this.fileTypes = this.accept.split(',');
      this.fileTypes = this.fileTypes.map(s => s.trim());
    }

    this.canvasWidth = this.width;
    this.canvasHeight = this.height;

    this.$on('error', error => {
      if (this.alertOnError) {
        alert(error.message);
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    updateStrings() {
      for (let s in this.customStrings) {
        if (s in this.strings && typeof this.customStrings[s] === 'string') {
          this.strings[s] = this.customStrings[s];
        }
      }
    },
    onClick() {
      if (!this.imageSelected) {
        this.selectImage();
        return;
      }

      if (this.changeOnClick) {
        this.selectImage();
      }

      this.$emit('click');
    },
    onResize() {
      this.resizeCanvas();

      if (this.imageObject) {
        this.drawImage(this.imageObject);
      }
    },
    onDragStart() {
      if (!this.supportsDragAndDrop) {
        return;
      }
      this.draggingOver = true;
    },
    onDragStop() {
      if (!this.supportsDragAndDrop) {
        return;
      }
      this.draggingOver = false;
    },
    onFileDrop(e) {
      this.onDragStop();
      this.onFileChange(e);
    },
    onFileChange(e, prefill) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      if (files[0].size <= 0 || files[0].size > this.size * 1024 * 1024) {
        this.$emit('error', {
          type: 'fileSize',
          fileSize: files[0].size,
          fileType: files[0].type,
          fileName: files[0].name,
          message: this.strings.fileSize + ' (' + this.size + 'MB)'
        });
        return;
      }
      if (files[0].name === this.fileName && files[0].size === this.fileSize && this.fileModified === files[0].lastModified) {
        return;
      }

      this.file = files[0];
      this.fileName = files[0].name;
      this.fileSize = files[0].size;
      this.fileModified = files[0].lastModified;
      this.fileType = files[0].type;

      if (this.accept === 'image/*') {
        if (files[0].type.substr(0, 6) !== 'image/') {
          return;
        }
      } else {
        if (this.fileTypes.indexOf(files[0].type) === -1) {
          this.$emit('error', {
            type: 'fileType',
            fileSize: files[0].size,
            fileType: files[0].type,
            fileName: files[0].name,
            message: this.strings.fileType
          });
          return;
        }
      }
      this.imageSelected = true;
      this.image = '';
      if (this.supportsPreview) {
        this.loadImage(files[0], prefill || false);
      } else {
        this.$emit(prefill ? 'prefill' : 'change');
      }
    },
    loadImage(file, prefill) {
      this.getEXIFOrientation(file, orientation => {
        this.setOrientation(orientation);
        let reader = new FileReader();
        reader.onload = e => {
          this.image = e.target.result;
          this.$emit(prefill ? 'prefill' : 'change');
          this.imageObject = new Image();
          this.imageObject.onload = () => {
            if (this.autoToggleAspectRatio) {
              let canvasOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight);
              let imageOrientation = this.getOrientation(this.imageObject.width, this.imageObject.height);
              if (canvasOrientation !== imageOrientation) {
                this.rotateCanvas();
              }
            }
            this.drawImage(this.imageObject);
          };
          this.imageObject.src = this.image;
        };
        reader.readAsDataURL(file);
      });
    },
    drawImage(image) {
      this.imageWidth = image.width;
      this.imageHeight = image.height;
      this.imageRatio = image.width / image.height;
      let offsetX = 0;
      let offsetY = 0;
      let scaledWidth = this.previewWidth;
      let scaledHeight = this.previewHeight;
      const previewRatio = this.previewWidth / this.previewHeight;
      if (this.crop) {
        if (this.imageRatio >= previewRatio) {
          scaledWidth = scaledHeight * this.imageRatio;
          offsetX = (this.previewWidth - scaledWidth) / 2;
        } else {
          scaledHeight = scaledWidth / this.imageRatio;
          offsetY = (this.previewHeight - scaledHeight) / 2;
        }
      } else {
        if (this.imageRatio >= previewRatio) {
          scaledHeight = scaledWidth / this.imageRatio;
          offsetY = (this.previewHeight - scaledHeight) / 2;
        } else {
          scaledWidth = scaledHeight * this.imageRatio;
          offsetX = (this.previewWidth - scaledWidth) / 2;
        }
      }
      const canvas = this.$refs.previewCanvas;
      canvas.style.background = 'none';
      canvas.width = this.previewWidth * this.pixelRatio;
      canvas.height = this.previewHeight * this.pixelRatio;
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      if (this.rotate) {
        this.context.translate(offsetX * this.pixelRatio, offsetY * this.pixelRatio);
        this.context.translate(scaledWidth / 2 * this.pixelRatio, scaledHeight / 2 * this.pixelRatio);
        this.context.rotate(this.rotate);
        offsetX = -scaledWidth / 2;
        offsetY = -scaledHeight / 2;
      }
      this.context.drawImage(image, offsetX * this.pixelRatio, offsetY * this.pixelRatio, scaledWidth * this.pixelRatio, scaledHeight * this.pixelRatio);
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    removeImage() {
      this.$refs.fileInput.value = '';
      this.$refs.fileInput.type = '';
      this.$refs.fileInput.type = 'file';
      this.fileName = '';
      this.fileType = '';
      this.fileSize = 0;
      this.fileModified = 0;
      this.imageSelected = false;
      this.image = '';
      this.file = null;
      this.imageObject = null;
      this.$refs.previewCanvas.style.backgroundColor = 'rgba(200,200,200,.25)';
      this.$refs.previewCanvas.width = this.previewWidth * this.pixelRatio;
      this.$emit('remove');
    },
    rotateImage() {
      this.rotateCanvas();

      if (this.imageObject) {
        this.drawImage(this.imageObject);
      }

      let newOrientation = this.getOrientation(this.canvasWidth, this.canvasHeight);
      this.$emit('aspectratiochange', newOrientation);
    },
    resizeCanvas() {
      let previewRatio = this.canvasWidth / this.canvasHeight;
      let newWidth = this.$refs.container.clientWidth;
      if (!this.toggleAspectRatio && newWidth === this.containerWidth) {
        return;
      }
      this.containerWidth = newWidth;
      this.previewWidth = Math.min(this.containerWidth - this.margin * 2, this.canvasWidth);
      this.previewHeight = this.previewWidth / previewRatio;
    },
    getOrientation(width, height) {
      let orientation = 'square';

      if (width > height) {
        orientation = 'landscape';
      } else if (width < height) {
        orientation = 'portrait';
      }

      return orientation;
    },
    switchCanvasOrientation() {
      const canvasWidth = this.canvasWidth;
      const canvasHeight = this.canvasHeight;

      this.canvasWidth = canvasHeight;
      this.canvasHeight = canvasWidth;
    },
    rotateCanvas() {
      this.switchCanvasOrientation();
      this.resizeCanvas();
    },
    setOrientation(orientation) {
      this.rotate = false;
      if (orientation === 8) {
        this.rotate = -Math.PI / 2;
      } else if (orientation === 6) {
        this.rotate = Math.PI / 2;
      } else if (orientation === 3) {
        this.rotate = -Math.PI;
      }
    },
    getEXIFOrientation(file, callback) {
      var reader = new FileReader();
      reader.onload = e => {
        var view = new DataView(e.target.result);
        if (view.getUint16(0, false) !== 0xFFD8) {
          return callback(-2);
        }
        var length = view.byteLength;
        var offset = 2;
        while (offset < length) {
          var marker = view.getUint16(offset, false);
          offset += 2;
          if (marker === 0xFFE1) {
            if (view.getUint32(offset += 2, false) !== 0x45786966) {
              return callback(-1);
            }
            var little = view.getUint16(offset += 6, false) === 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;
            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) === 0x0112) {
                return callback(view.getUint16(offset + i * 12 + 8, little));
              }
            }
          } else if ((marker & 0xFF00) !== 0xFF00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }
        return callback(-1);
      };
      reader.readAsArrayBuffer(file.slice(0, 65536));
    },
    preloadImage(source, options) {
      options = Object.assign({}, options);
      if (typeof source === 'object') {
        this.imageSelected = true;
        this.image = '';
        if (this.supportsPreview) {
          this.loadImage(source, true);
        } else {
          this.$emit('prefill');
        }
        return;
      }
      let headers = new Headers();
      headers.append('Accept', 'image/*');
      fetch(source, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      }).then(response => {
        return response.blob();
      }).then(imageBlob => {
        let e = { target: { files: [] } };
        const fileName = options.fileName || source.split('/').slice(-1)[0];
        let mediaType = options.mediaType || 'image/' + (options.fileType || fileName.split('.').slice(-1)[0]);
        mediaType = mediaType.replace('jpg', 'jpeg');
        e.target.files[0] = new File([imageBlob], fileName, { type: mediaType });
        this.onFileChange(e, true);
      }).catch(err => {
        this.$emit('error', {
          type: 'failedPrefill',
          message: 'Failed loading prefill image: ' + err
        });
      });
    }
  },
  computed: {
    supportsUpload() {
      if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
        return false;
      }
      const el = document.createElement('input');
      el.type = 'file';
      return !el.disabled;
    },
    supportsPreview() {
      return window.FileReader && !!window.CanvasRenderingContext2D;
    },
    supportsDragAndDrop() {
      const div = document.createElement('div');
      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && !('ontouchstart' in window || navigator.msMaxTouchPoints);
    },
    computedClasses() {
      const classObject = {};
      classObject['dragging-over'] = this.draggingOver;
      return classObject;
    },
    fontSize() {
      return Math.min(0.04 * this.previewWidth, 21) + 'px';
    }
  }
});

/***/ }),

/***/ "2PyM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toolbar__ = __webpack_require__("djO7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_infinite_loading__ = __webpack_require__("qK+J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_infinite_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_infinite_loading__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      list: []
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
    }
  },
  components: {
    InfiniteLoading: __WEBPACK_IMPORTED_MODULE_2_vue_infinite_loading___default.a,
    Toolbar: __WEBPACK_IMPORTED_MODULE_1__Toolbar__["a" /* default */]
  }
});

/***/ }),

/***/ "2f0p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_PictureInput_vue__ = __webpack_require__("0jZp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_136c33e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_PictureInput_vue__ = __webpack_require__("WFXy");
function injectStyle (ssrContext) {
  __webpack_require__("QaeE")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-136c33e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_PictureInput_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_136c33e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_vue_loader_lib_selector_type_template_index_0_PictureInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4x6I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'toolbar',
	data() {
		return {
			title: '#toolbar'
		};
	}
});

/***/ }),

/***/ "5nVP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',{attrs:{"id":"first-paragraph"}},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('p'),_c('p'),_c('div',{staticClass:"hero-image"},[_c('div',{staticClass:"second-paragraph"},[_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('p'),_vm._v(" "),_c('router-link',{staticClass:"signUp-button",attrs:{"to":"/register"}},[_c('b',[_vm._v("SIGN UP")])])],1),_vm._v(" "),_c('img',{staticClass:"img-responsive",staticStyle:{"width":"100%"},attrs:{"src":__webpack_require__("r9bD")}})]),_vm._v(" "),_c('div',{staticClass:"blue-background"},[_c('div',{staticClass:"blue-paragraph"},[_c('br'),_c('br'),_vm._v(" "),_vm._m(5),_vm._v(" "),_c('div',{attrs:{"id":"blue-body"}},[_vm._v("Goldee supports communities help one another.")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_c('p'),_vm._v(" "),_c('router-link',{staticClass:"signUp-button-02",attrs:{"to":"/register"}},[_c('b',[_vm._v("GIVE GOLDEE A TRY")])]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('br'),_c('br')],1)]),_vm._v(" "),_c('div',{staticClass:"gray-background"},[_c('div',{staticClass:"gray-paragraph"},[_c('br'),_c('br'),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_c('div',{attrs:{"id":"gray-body"}},[_vm._v("Because we all occassionally need a hand,")]),_vm._v(" "),_c('div',{attrs:{"id":"gray-body"}},[_vm._v("and EVERYONE has something to give")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('router-link',{staticClass:"signUp-button-02",attrs:{"to":"/register"}},[_c('b',[_vm._v("TRY GOLDEE")])]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('br'),_c('br')],1)]),_vm._v(" "),_c('div',{staticClass:"white-paragraph"},[_vm._m(17),_vm._v(" "),_c('div',{attrs:{"id":"while-text"}},[_vm._v("Sign up and we'll let you know when Goldee's ready!")]),_vm._v(" "),_c('div',{attrs:{"id":"while-text"}},[_c('p'),_c('div',{staticClass:"list-item",staticStyle:{"margin-bottom":"0px","margin-left":"35%"}},[_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"text-input",staticStyle:{"height":"50px","width":"70%"},attrs:{"align":"center","placeholder":"Email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item",staticStyle:{"margin-bottom":"0px","margin-left":"35%"}},[_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"text-input",staticStyle:{"height":"50px","width":"70%"},attrs:{"align":"center","placeholder":"Password","type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('button',{staticClass:"signUp-button",on:{"click":_vm.signUp}},[_c('b',[_vm._v("SIGN UP")])])])])]),_vm._v(" "),_c('footbar')],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-left":"10%","margin-right":"10%"}},[_c('b',[_vm._v("Connect to your Community")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-left":"10%","margin-right":"10%"}},[_c('b',[_vm._v("by Giving Back")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b',[_vm._v("This ain't your average social site.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b',[_vm._v("Goldee is where people come together and")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b',[_vm._v("make the world a brighter place.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"blue-header"}},[_c('b',[_vm._v("How does Goldee work?")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blue-image"},[_c('img',{staticStyle:{"width":"84%"},attrs:{"src":__webpack_require__("BkgK")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Post What You Need")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blue-image"},[_c('img',{attrs:{"src":__webpack_require__("7PKB")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("We'll Find Your Match")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blue-image"},[_c('img',{attrs:{"src":__webpack_require__("ICje")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Review & Give Back")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"gray-header"}},[_c('b',[_vm._v("Easily Connect to Your")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"gray-header"}},[_c('b',[_vm._v("Communities")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("+LUL")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Handy Help")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("cV1Q")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Share a Ride")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("Ims8")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Pet Care")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("uQwB")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Borrow Something")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("O4kd")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Tech Help")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gray-image"},[_c('img',{staticStyle:{"width":"70%"},attrs:{"src":__webpack_require__("gNKV")}}),_vm._v(" "),_c('span',{staticClass:"blue-imgText"},[_vm._v("Volunteer")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"gray-header"}},[_c('b',[_vm._v("We'd love for you to join.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7PKB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/match.3ba4edc.png";

/***/ }),

/***/ "7bOG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BSUY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"footbar"}},[_c('div',{attrs:{"id":"top-bar-logo"}},[_c('div',{staticStyle:{"margin-left":"0%","margin-top":"25%","width":"100%","float":"left"}},[_c('router-link',{staticStyle:{"float":"left"},attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__("K/vL"),"height":"100","width":"160"}})]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"0%","width":"100%"}},[_c('router-link',{staticStyle:{"float":"left","text-decoration":"none"},attrs:{"to":"/"}},[_vm._v("Contact Us ")])],1)],1),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-left":"0%","width":"100%"}},[_c('p',[_vm._v(" @2017 All rights reserved.")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BkgK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/needsPost.c89d908.png";

/***/ }),

/***/ "Bpe0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footbar_vue__ = __webpack_require__("sHmv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9050ae2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footbar_vue__ = __webpack_require__("BSUY");
function injectStyle (ssrContext) {
  __webpack_require__("cWWD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Footbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a9050ae2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Footbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "F0CY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',{staticClass:"fullpage-container"},[_c('div',{directives:[{name:"fullpage",rawName:"v-fullpage",value:(_vm.opts),expression:"opts"}],ref:"register",staticClass:"fullpage-wp"},[_c('div',{staticClass:"page"},[_c('div',{staticClass:"page-content"},[_c('p',[_vm._v("Where do you want to Post?")]),_vm._v(" "),_vm._l((_vm.communities),function(community,n){return _c('button',{staticClass:"large-rectangular-button",attrs:{"data-index":n},on:{"click":function($event){_vm.makeCommunitySelection($event, n)}}},[_c('div',[_c('p',{staticClass:"large-rectangular-button-title"},[_vm._v(_vm._s(community.title))]),_vm._v(" "),_c('p',{staticClass:"large-rectangular-button-text"},[_vm._v(_vm._s(community.description))])])])}),_vm._v(" "),_c('p',[_c('button',{staticClass:"gray-button",on:{"click":_vm.cancel}},[_vm._v("CANCEL")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])])],2)]),_vm._v(" "),_c('div',{staticClass:"page"},[_c('div',{staticClass:"page-content"},[_c('p',[_vm._v("What do you need?")]),_vm._v(" "),_vm._l((_vm.helpTypes),function(helpType,n){return _c('button',{staticClass:"rectangular-button",attrs:{"data-index":n},on:{"click":function($event){_vm.makeHelpTypeSelection($event, n)}}},[_vm._v(_vm._s(helpType))])}),_vm._v(" "),_c('p',[_c('button',{staticClass:"gray-button",on:{"click":_vm.cancel}},[_vm._v("CANCEL")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])])],2)]),_vm._v(" "),_c('div',{staticClass:"page"},[_c('div',{staticClass:"page-content"},[_c('p',[_vm._v("Where type of thing do you want to borrow?")]),_vm._v(" "),_vm._l((_vm.thingsToBorrow),function(thing,n){return _c('button',{staticClass:"large-rectangular-button",attrs:{"data-index":n},on:{"click":function($event){_vm.makeThingsToBorrowSelection($event, n)}}},[_c('div',[_c('p',{staticClass:"large-rectangular-button-title"},[_vm._v(_vm._s(thing.title))]),_vm._v(" "),_c('p',{staticClass:"large-rectangular-button-text"},[_vm._v(_vm._s(thing.description))])])])}),_vm._v(" "),_c('p',[_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])])],2)]),_vm._v(" "),_c('div',{staticClass:"page"},[_c('div',{staticClass:"page-content"},[_c('p',[_vm._v("Create your Post")]),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item"},[_c('p',{staticClass:"prompt-label"},[_vm._v("Headline")]),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.title),expression:"title"}],staticClass:"text-input",domProps:{"value":(_vm.title)},on:{"input":function($event){if($event.target.composing){ return; }_vm.title=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item"},[_c('p',{staticClass:"prompt-label"},[_vm._v("Description")]),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.content),expression:"content"}],staticClass:"large-text-input",domProps:{"value":(_vm.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.content=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item"},[_c('p',{staticClass:"prompt-label"},[_vm._v("Estimated Time Needed")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('vue-slider',_vm._b({scopedSlots:_vm._u([{key:"tooltip",fn:function(tooltip){return _c('div',{staticClass:"diy-tooltip"},[_vm._v(_vm._s(tooltip.value))])}}]),model:{value:(_vm.timeNeeded),callback:function ($$v) {_vm.timeNeeded=$$v},expression:"timeNeeded"}},'vue-slider',_vm.sliderOptions,false))],1),_vm._v(" "),_c('p'),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToThingsSection}},[_vm._v("NONE")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.submitSelectionData}},[_vm._v("NEXT")])])])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Fs8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toolbar__ = __webpack_require__("djO7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footbar__ = __webpack_require__("Bpe0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jQuery__ = __webpack_require__("LlRI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jQuery__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_0__Toolbar__["a" /* default */],
    Footbar: __WEBPACK_IMPORTED_MODULE_1__Footbar__["a" /* default */]
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function (event) {
      alert(this.email + " " + this.password);
    }
  }
});

/***/ }),

/***/ "ICje":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/giveBack.29cbb8b.png";

/***/ }),

/***/ "Ims8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/handyHelp.784fc4f.png";

/***/ }),

/***/ "JJT7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toolbar__ = __webpack_require__("djO7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footbar__ = __webpack_require__("Bpe0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jQuery__ = __webpack_require__("LlRI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jQuery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animate_css__ = __webpack_require__("oPmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullpage_vue_src_fullpage_css__ = __webpack_require__("jaTL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullpage_vue_src_fullpage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fullpage_vue_src_fullpage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullpage_vue__ = __webpack_require__("K4fh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullpage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fullpage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_picture_input__ = __webpack_require__("2f0p");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













__WEBPACK_IMPORTED_MODULE_2_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_fullpage_vue___default.a);

/* harmony default export */ __webpack_exports__["a"] = ({
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
        beforeChange: function (prev, next) {},
        afterChange: function (prev, next) {}
      }
    };
  },

  components: {
    PictureInput: __WEBPACK_IMPORTED_MODULE_7_vue_picture_input__["a" /* default */],
    Toolbar: __WEBPACK_IMPORTED_MODULE_0__Toolbar__["a" /* default */],
    Footbar: __WEBPACK_IMPORTED_MODULE_1__Footbar__["a" /* default */]
  },
  methods: {

    onChange() {
      console.log('New picture selected!');
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.');
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!');
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
      for (var i = this.currentTag + 1; i < 7; i++) {
        if (this.tagSelection[i]) {
          return i;
        }
      }
      return 7;
    },
    prevAvailableTag() {
      for (var i = this.currentTag - 1; i > 0; i--) {
        if (this.tagSelection[i]) {
          return i;
        }
      }
      return 0;
    },
    tagClicked(event, id) {
      if (this.tagSelection[id]) {
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'none');
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'black');
      } else {
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'white');
      }
      this.tagSelection[id] = !this.tagSelection[id];
    },
    makeLendSelection(event, type, item) {
      var operationArr = this.userSelection['lendItems'][type];
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'none');
          __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item);
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'white');
      }
    },
    makeThingsSelection(event, item) {
      var operationArr = this.userSelection['thingsToDo'];
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'none');
          __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item);
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_3_jQuery___default()(event.currentTarget).css('color', 'white');
      }
    },
    submitSelectionData() {
      alert(JSON.stringify(this.userSelection));
    },
    moveToNextTag() {
      var nextTag = this.nextAvailableTag();
      this.currentTag = nextTag;
      this.currentPage = nextTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToPrevTag() {
      var prevTag = this.prevAvailableTag();
      this.currentTag = prevTag;
      this.currentPage = prevTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToThingsSection() {
      for (var i = 0; i < 7; i++) {
        this.tagSelection[i] = false;
      }
      this.moveToNextTag();
    },
    handleScroll(event) {
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    }
  },
  created() {
    window.addEventListener('mousewheel', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }
});

/***/ }),

/***/ "JXOo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Jax7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K/vL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/GoldeeLgo.1117187.png";

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c01ff64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("yQcy");
function injectStyle (ssrContext) {
  __webpack_require__("JXOo")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c01ff64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MlGu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "N2gs":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__("cHtD");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//Vue.config.productionTip = false

/* eslint-disable no-new */

/***/ }),

/***/ "O4kd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/volunteer.b888199.png";

/***/ }),

/***/ "QaeE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "QzrD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('center',[_c('p',{staticStyle:{"text-align":"center","font-size":"40px"}},[_vm._v("Welcome Guest!")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"center","font-size":"20px"}},[_vm._v("Want to find people near you? Sign up for Goldee. It's free!")]),_vm._v(" "),_c('router-link',{staticClass:"signUp-button",attrs:{"to":"/register"}},[_vm._v("SIGN UP")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('div',{staticStyle:{"height":"80%","width":"60%","overflow":"auto","background-color":"#F0EBE7","color":"#1E3C46","scrollbar-base-color":"gold","font-family":"sans-serif","padding":"10px"}},[_c('div',{attrs:{"id":"load-box"}},[_c('div',[_vm._l((_vm.list),function(item){return _c('p',{staticStyle:{"background-color":"white","height":"100px"}},[_vm._v("\n      Line:\n        "),_c('span',{domProps:{"textContent":_vm._s(item)}})])}),_vm._v(" "),_c('infinite-loading',{on:{"infinite":_vm.infiniteHandler}})],2)])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "T+ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',[_c('div',[_vm._v("Where are you located?")]),_vm._v(" "),_c('p'),_c('p'),_c('div',{attrs:{"id":"enter-address"}},[_c('button',{on:{"click":function($event){_vm.show = !_vm.show}}},[_vm._v("\n          Enter Your Address\n        ")]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.show)?_c('p',[_vm._v("hello")]):_vm._e()])],1),_vm._v(" "),_c('input',{attrs:{"type":"search","id":"address-input","placeholder":"What is your address?"}}),_vm._v(" "),_c('div',[_vm._v("- Or -")]),_vm._v(" "),_c('router-link',{staticClass:"current_address",attrs:{"to":"/"}},[_c('b',[_vm._v("Use Current Address")])])],1),_vm._v(" "),_c('footbar')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "V7RX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toolbar__ = __webpack_require__("djO7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jQuery__ = __webpack_require__("LlRI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jQuery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animate_css__ = __webpack_require__("oPmM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullpage_vue_src_fullpage_css__ = __webpack_require__("jaTL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fullpage_vue_src_fullpage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fullpage_vue_src_fullpage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullpage_vue__ = __webpack_require__("K4fh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fullpage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fullpage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_slider_component__ = __webpack_require__("GDE4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_slider_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_slider_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













__WEBPACK_IMPORTED_MODULE_1_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_fullpage_vue___default.a);

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_0__Toolbar__["a" /* default */]
  },
  data() {
    return {
      title: '',
      content: '',
      communities: [{
        title: 'SLOcals',
        description: 'People who call the lovely city of San Luis Obispo home'
      }, {
        title: 'Students of SLO',
        description: 'College students living or studying in San Luis Obispo'
      }],
      helpTypes: ['A Ride', 'Pet Care', 'Borrow Something', 'Learn Something', 'Babysitter', 'Handy Help', 'Tutoring', 'Companionship', 'Moving/Packing Help', 'Yardwork Help', 'House Sitter', 'Mentorship', 'Something Else'],
      thingsToBorrow: [{
        title: 'Arts, Crafts, Sewing',
        description: 'Sewing Machine, Print Making, Tools, Knitting & Crocheting...'
      }, {
        title: 'Cooking & Baking',
        description: 'Blenders, Electric mixers, Pasta makers, Meat grinders'
      }],
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
        beforeChange: function (prev, next) {},
        afterChange: function (prev, next) {}
      },
      sliderOptions: {
        min: 0,
        max: 100
      }
    };
  },

  components: {
    vueSlider: __WEBPACK_IMPORTED_MODULE_6_vue_slider_component___default.a
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
    cancel() {},
    makeCommunitySelection(event, item) {
      var operationArr = this.newPostData['communities'];
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'none');
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item);
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'white');
      }
    },
    makeHelpTypeSelection(event, item) {
      var operationArr = this.newPostData['helpTypes'];
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'none');
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item);
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'white');
      }
    },
    makeThingsToBorrowSelection(event, item) {
      var operationArr = this.newPostData['thingsToBorrow'];
      if (operationArr.includes(item)) {
        var index = operationArr.indexOf(item);
        if (index > -1) {
          operationArr.splice(index, 1);
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'none');
          __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'black');
        }
      } else {
        operationArr.push(item);
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('background', 'gray');
        __WEBPACK_IMPORTED_MODULE_2_jQuery___default()(event.currentTarget).css('color', 'white');
      }
    },
    loadSectionData() {},
    submitPostData() {
      alert(JSON.stringify(this.newPostData));
    },
    moveToNextTag() {
      var nextTag = this.nextAvailableTag();
      this.currentTag = nextTag;
      this.currentPage = nextTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToPrevTag() {
      var prevTag = this.prevAvailableTag();
      this.currentTag = prevTag;
      this.currentPage = prevTag + 4;
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    },
    moveToThingsSection() {
      for (var i = 0; i < 7; i++) {
        this.tagSelection[i] = false;
      }
      this.moveToNextTag();
    },
    handleScroll(event) {
      this.$refs.register.$fullpage.moveTo(this.currentPage, true);
    }
  },
  beforeMount() {
    this.loadSectionData();
  },
  created() {
    window.addEventListener('mousewheel', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('mousewheel', this.handleScroll);
  }
});

/***/ }),

/***/ "WFXy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"picture-input",attrs:{"id":"picture-input"}},[(!_vm.supportsUpload)?_c('div',{domProps:{"innerHTML":_vm._s(_vm.strings.upload)}}):(_vm.supportsPreview)?_c('div',[_c('div',{staticClass:"preview-container",style:({maxWidth: _vm.previewWidth + 'px', height: _vm.previewHeight + 'px', borderRadius: _vm.radius + '%'})},[_c('canvas',{ref:"previewCanvas",staticClass:"picture-preview",class:_vm.computedClasses,style:({height: _vm.previewHeight + 'px', zIndex: _vm.zIndex + 1 }),on:{"drag":function($event){$event.stopPropagation();$event.preventDefault();},"dragover":function($event){$event.stopPropagation();$event.preventDefault();},"dragstart":function($event){$event.stopPropagation();$event.preventDefault();_vm.onDragStart($event)},"dragenter":function($event){$event.stopPropagation();$event.preventDefault();_vm.onDragStart($event)},"dragend":function($event){$event.stopPropagation();$event.preventDefault();_vm.onDragStop($event)},"dragleave":function($event){$event.stopPropagation();$event.preventDefault();_vm.onDragStop($event)},"drop":function($event){$event.stopPropagation();$event.preventDefault();_vm.onFileDrop($event)},"click":function($event){$event.preventDefault();_vm.onClick($event)}}}),_vm._v(" "),(!_vm.imageSelected && !_vm.plain)?_c('div',{staticClass:"picture-inner",style:({top: -_vm.previewHeight + 'px', marginBottom: -_vm.previewHeight + 'px', fontSize: _vm.fontSize, borderRadius: _vm.radius + '%', zIndex: _vm.zIndex + 2})},[(_vm.supportsDragAndDrop)?_c('span',{staticClass:"picture-inner-text",domProps:{"innerHTML":_vm._s(_vm.strings.drag)}}):_c('span',{staticClass:"picture-inner-text",domProps:{"innerHTML":_vm._s(_vm.strings.tap)}})]):_vm._e()]),_vm._v(" "),(_vm.imageSelected && !_vm.hideChangeButton)?_c('button',{class:_vm.buttonClass,on:{"click":function($event){$event.preventDefault();_vm.selectImage($event)}}},[_vm._v(_vm._s(_vm.strings.change))]):_vm._e(),_vm._v(" "),(_vm.imageSelected && _vm.removable)?_c('button',{class:_vm.removeButtonClass,on:{"click":function($event){$event.preventDefault();_vm.removeImage($event)}}},[_vm._v(_vm._s(_vm.strings.remove))]):_vm._e(),_vm._v(" "),(_vm.imageSelected && _vm.toggleAspectRatio && _vm.width !== _vm.height)?_c('button',{class:_vm.aspectButtonClass,on:{"click":function($event){$event.preventDefault();_vm.rotateImage($event)}}},[_vm._v(_vm._s(_vm.strings.aspect))]):_vm._e()]):_c('div',[(!_vm.imageSelected)?_c('button',{class:_vm.buttonClass,on:{"click":function($event){$event.preventDefault();_vm.selectImage($event)}}},[_vm._v(_vm._s(_vm.strings.select))]):_c('div',[_c('div',{domProps:{"innerHTML":_vm._s(_vm.strings.selected)}}),_vm._v(" "),(!_vm.hideChangeButton)?_c('button',{class:_vm.buttonClass,on:{"click":function($event){$event.preventDefault();_vm.selectImage($event)}}},[_vm._v(_vm._s(_vm.strings.change))]):_vm._e(),_vm._v(" "),(_vm.removable)?_c('button',{class:_vm.removeButtonClass,on:{"click":function($event){$event.preventDefault();_vm.removeImage($event)}}},[_vm._v(_vm._s(_vm.strings.remove))]):_vm._e()])]),_vm._v(" "),_c('input',{ref:"fileInput",attrs:{"type":"file","name":_vm.name,"id":_vm.id,"accept":_vm.accept},on:{"change":_vm.onFileChange}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "abAi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',{staticClass:"fullpage-container"},[_c('div',{directives:[{name:"fullpage",rawName:"v-fullpage",value:(_vm.opts),expression:"opts"}],ref:"register",staticClass:"fullpage-wp"},[_c('div',{staticClass:"page-1 page",staticStyle:{"background-color":"#F7AEA3","width":"100%","height":"10%"}},[_c('div',{staticClass:"page-content"},[_c('div',{staticStyle:{"overflow":"scroll","background-color":"white","margin":"2%","width":"100%","height":"150%","border-radius":"25px"}},[_c('p',{staticClass:"part-1"},[_vm._v("Create an Account")]),_vm._v(" "),_c('div',{staticClass:"list-line"},[_c('div',{staticClass:"name-list-item",staticStyle:{"margin":"20px"}},[_c('p',{staticClass:"prompt-label"},[_vm._v("First Name")]),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.firstname),expression:"firstname"}],staticClass:"text-input",staticStyle:{"width":"90%"},domProps:{"value":(_vm.firstname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.firstname=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"name-list-item"},[_vm._m(0),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.lastname),expression:"lastname"}],staticClass:"text-input",staticStyle:{"width":"90%"},domProps:{"value":(_vm.lastname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.lastname=$event.target.value}}})])])]),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item",staticStyle:{"margin-bottom":"50px"}},[_vm._m(1),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"text-input",domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_c('div',{staticClass:"list-item"},[_vm._m(2),_vm._v(" "),_c('p',{staticClass:"input-para"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"text-input",attrs:{"type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_c('p')]),_vm._v(" "),_c('p'),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("SIGN UP")])]),_vm._v(" "),_vm._m(3)])]),_vm._v(" "),_c('div',{staticClass:"page-2 page",staticStyle:{"background-color":"#F7AEA3"}},[_c('div',{staticStyle:{"overflow":"scroll","background-color":"white","margin":"2%","width":"60%","height":"150%","border-radius":"25px"}},[_c('p',{staticClass:"part-2"},[_vm._v("Upload your Picture")]),_vm._v(" "),_c('picture-input',{ref:"pictureInput",attrs:{"width":"350","height":"350","margin":"16","accept":"image/jpeg,image/png","size":"10","buttonClass":"btn","customStrings":{
          upload: '<h1>Bummer!</h1>',
          drag: 'Drag a Picture Here'
        }},on:{"change":_vm.onChange}}),_vm._v(" "),_c('p'),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])],1)]),_vm._v(" "),_c('div',{staticClass:"page-3 page",staticStyle:{"background-color":"#F7AEA3"}},[_c('p',{staticClass:"part-3"},[_vm._v("Find a Community Near You")]),_vm._v(" "),_c('button',{staticClass:"gray-button"},[_vm._v("USE MY LOCATION")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])]),_vm._v(" "),_c('div',{staticClass:"page-4 page",staticStyle:{"background-color":"#F7AEA3"}},[_c('p',{staticClass:"part-4"},[_vm._v("Join a Public Community")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveNext}},[_vm._v("NEXT")])]),_vm._v(" "),_c('div',{staticClass:"page-5 page"},[_c('div',{staticClass:"page-content"},[_c('p',{staticClass:"part-5"},[_vm._v("Can you Lend any of these Items?")]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 1)}}},[_vm._m(4)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 2)}}},[_vm._m(5)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 3)}}},[_vm._m(6)])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 4)}}},[_vm._m(7)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 5)}}},[_vm._m(8)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.tagClicked($event, 6)}}},[_vm._m(9)])]),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToThingsSection}},[_vm._v("NONE")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])])]),_vm._v(" "),_c('div',{staticClass:"page-6 page"},[_c('div',{staticClass:"page-content"},[_c('p',{staticClass:"part-6"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Books")]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Children')}}},[_vm._v("Children")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Young Adult')}}},[_vm._v("Young Adult")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Fiction')}}},[_vm._v("Fiction")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Non Fiction')}}},[_vm._v("Non Fiction")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Text Books')}}},[_vm._v("Text Books")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Books', 'Other')}}},[_vm._v("Other")])]),_vm._v(" "),_c('p',[_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])])])]),_vm._v(" "),_c('div',{staticClass:"page-7 page"},[_c('div',{staticClass:"page-content"},[_c('p',{staticClass:"part-7"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Musical Instruments")]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Guitar')}}},[_vm._v("Guitar")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Ukuleles')}}},[_vm._v("Ukuleles")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Mandolin')}}},[_vm._v("Mandolin")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Banjo')}}},[_vm._v("Banjo")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Amplifier')}}},[_vm._v("Amplifier")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Effects')}}},[_vm._v("Effects")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Drum & Percussions')}}},[_vm._v("Drum & Percussions")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Keyboards & Midi')}}},[_vm._v("Keyboards & Midi")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Microphone and Accessories')}}},[_vm._v("Microphone and Accessories")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Brass Instruments')}}},[_vm._v("Brass Instruments")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Stringed Instruments')}}},[_vm._v("Stringed Instruments")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Wind & Woodwind Instruments')}}},[_vm._v("Wind & Woodwind Instruments")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'Studio Recording Equipment')}}},[_vm._v("Studio Recording Equipment")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Musical Instruments', 'DJ Equipment')}}},[_vm._v("DJ Equipment")])]),_vm._v(" "),_c('p',[_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])])])]),_vm._v(" "),_c('div',{staticClass:"page-8 page"},[_c('div',{staticClass:"page-content"},[_c('p',{staticClass:"part-8"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Pet Supplies")]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Crate')}}},[_vm._v("Crate")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Cage')}}},[_vm._v("Cage")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Heat Lamps')}}},[_vm._v("Heat Lamps")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Carriers')}}},[_vm._v("Carriers")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Gates')}}},[_vm._v("Gates")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Training Collar')}}},[_vm._v("Training Collar")])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Bark Collar')}}},[_vm._v("Bark Collar")]),_vm._v(" "),_c('button',{staticClass:"rectangular-button",on:{"click":function($event){_vm.makeLendSelection($event, 'Pet Supplies', 'Other')}}},[_vm._v("Other")])]),_vm._v(" "),_c('p',[_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])])])]),_vm._v(" "),_c('div',{staticClass:"page-9 page"},[_c('p',{staticClass:"part-9"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Home Improvement")]),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])]),_vm._v(" "),_c('div',{staticClass:"page-10 page"},[_c('p',{staticClass:"part-10"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Games")]),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])]),_vm._v(" "),_c('div',{staticClass:"page-11 page"},[_c('p',{staticClass:"part-11"},[_vm._v("Select the Items you may be able to Lend")]),_vm._v(" "),_c('p',{staticClass:"subtitle"},[_vm._v("Other, Misc")]),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToPrevTag}},[_vm._v("BACK")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.moveToNextTag}},[_vm._v("NEXT")])]),_vm._v(" "),_c('div',{staticClass:"page-12 page"},[_c('div',{staticClass:"page-content"},[_c('p',{staticClass:"part-12"},[_vm._v("What kind of things can you do?")]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Share a Ride')}}},[_vm._m(10)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Teach a Skill')}}},[_vm._m(11)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Mentor Someone')}}},[_vm._m(12)])]),_vm._v(" "),_c('p',{staticClass:"buttons-line"},[_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Babysit')}}},[_vm._m(13)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Care for Pets')}}},[_vm._m(14)]),_vm._v(" "),_c('button',{staticClass:"square-button",on:{"click":function($event){_vm.makeThingsSelection($event, 'Handy Help')}}},[_vm._m(15)])]),_vm._v(" "),_c('button',{staticClass:"gray-button",on:{"click":_vm.moveToThingsSection}},[_vm._v("NONE")]),_vm._v(" "),_c('button',{staticClass:"blue-button",on:{"click":_vm.submitSelectionData}},[_vm._v("NEXT")])])])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"prompt-label"},[_vm._v("Last Name "),_c('img',{attrs:{"src":__webpack_require__("bUZt")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"prompt-label"},[_vm._v("Email "),_c('img',{attrs:{"src":__webpack_require__("bUZt")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"prompt-label"},[_vm._v("Password"),_c('img',{attrs:{"src":__webpack_require__("bUZt")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',[_vm._v("haha")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Books")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Children's, Young Adult, Fiction, Non Fiction, Textbooks")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Musical Instruments")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("High Chairs, Backpacks, Strollers, Swings, Feeding...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Pet Supplies")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Blenders, Electric Mixers, Pasta Makers, Meat Grinders...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Home Improvement")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Sewing Machine, Print Making Tools, Kinitting & Crocheting...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Games")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Borad Games, Video Games, Lawn Games, etc.")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Other, Misc")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Blenders, Electric Mixers, Pasta Makers, Meat Grinders...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Share a Ride")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Daily carpool, trips to the grocery store, road trip to LA")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Teach a Skill")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("New language, music, computer programs...")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Mentor Someone")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Young people after school, or someone new to your industry")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Babysit")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Watch a group of children during an event, or one-on-one")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Care for Pets")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Dog Walking, Petsitting, Pet Training, Animal Whispering")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',{staticClass:"square-button-title"},[_vm._v("Handy Help")]),_vm._v(" "),_c('p',{staticClass:"square-button-text"},[_vm._v("Minor home repaits, Furniture assembly, Hanging shelves...")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "bUZt":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAeCAYAAADD0FVVAAAAAXNSR0IArs4c6QAAAklJREFUSA3tVb9rVEEQntl7yTsPURO0MYiFhSIGThCCSBoLE/AfsI8QMJVRVNTiFSJaJKkSCGhjJQQUFCEg2IqFEIiFlSj+aEIS0sS8S27HmXfs3u6+l3sXsNMtbma++ebbH7P7DuD/+NsngJ0E6dHtg1u/NyeR6AoQHAOE74T4vLqvNo13Hm/sVrurKD24cTxtpItEdCosRsTPcW88ivenvoU5iQtFKUmqqV55TwT1oqKsEGEpVkfOY5JshRwVAhI39Mr1ToLCkbzwxA9HTlRWqQFvukTe7kus9J4Q6+LCE76LiZ8Tbei1EV5Gf5uIq7HquVpNZr6I5RNbtTnmZXwLtJycKKEedTmoYAGTmTXBxErs5kO+5PKiRGfdIkD1ulPMt8PnM9l2n+bne9Jfyw9JwyS3ITeZJ+wFqPmsp+KBM/dwfHxbUpHJiyBousbxHgSlWhZAE+nPTxLckh8roDWNEUBNwL0Ovl41TZqb2Bp2pXwOfQb0bKUC0cXLUKkPZXBz6QPsvHsD0Gx6NLfeinoMJxDBaPiSRYy/8/aVxULHbj9MmNis0MRiizA3Xyrqkrv1S0XlDMNRhLmcUlFpiv7x1dY0lz+2GmWRvFMqKu8D+w+3KyPubdD5drLllYqq03XA2n5bp04OAhw4ZOMip1Q0OnfBq0OlIMQ8Agf2nvJrWncvsCE2XjwDftsmzCxtZ0/cx7jeAFZUoXoCoCfkyZlkZjfW+T+v8+A5N3nip4Zlty9fGf4UzMqKTbIbm/ER5+Kjg3e74f8DnD/S8rRV0kvm5AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "cHtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__("lO7g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Register__ = __webpack_require__("dIqY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Login__ = __webpack_require__("xJsL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Profile__ = __webpack_require__("o9cx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FeedWall__ = __webpack_require__("o7Vb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Post__ = __webpack_require__("xCCR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Location__ = __webpack_require__("+g0x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App__ = __webpack_require__("M93x");



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);









const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__components_Home__["a" /* default */] }, { path: '/register', component: __WEBPACK_IMPORTED_MODULE_3__components_Register__["a" /* default */] }, { path: '/login', component: __WEBPACK_IMPORTED_MODULE_4__components_Login__["a" /* default */] }, { path: '/profile', component: __WEBPACK_IMPORTED_MODULE_5__components_Profile__["a" /* default */] }, { path: '/feedwall', component: __WEBPACK_IMPORTED_MODULE_6__components_FeedWall__["a" /* default */] }, { path: '/post', component: __WEBPACK_IMPORTED_MODULE_7__components_Post__["a" /* default */] }, { path: '/location', component: __WEBPACK_IMPORTED_MODULE_8__components_Location__["a" /* default */] }];

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes,
  linkActiveClass: 'active'
});

/* unused harmony default export */ var _unused_webpack_default_export = ({ router });



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  router,
  el: '#app',
  data: {
    show: true
  },
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_9__App__["a" /* default */] }
});

/***/ }),

/***/ "cV1Q":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/rideShare.a681ab6.png";

/***/ }),

/***/ "cWWD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dIqY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__ = __webpack_require__("JJT7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ed33869_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__ = __webpack_require__("abAi");
function injectStyle (ssrContext) {
  __webpack_require__("N2gs")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Register_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ed33869_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "djO7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__ = __webpack_require__("4x6I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de144bb6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Toolbar_vue__ = __webpack_require__("ngWU");
function injectStyle (ssrContext) {
  __webpack_require__("gHPl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Toolbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_de144bb6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Toolbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eseH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gHPl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "gNKV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/petCare.e868028.png";

/***/ }),

/***/ "igIV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('toolbar'),_vm._v(" "),_c('div',{staticStyle:{"background-color":"#F7AEA3","width":"100%","height":"100%"},attrs:{"center":""}},[_c('p',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],attrs:{"placeholder":"goldee@gmail.com"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('p',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],attrs:{"type":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('button',{on:{"click":_vm.login}},[_vm._v("Login")])]),_vm._v(" "),_c('footer')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jaTL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lO7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("Fs8J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_515a07a5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("5nVP");
function injectStyle (ssrContext) {
  __webpack_require__("/cHN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_515a07a5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nKb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toolbar__ = __webpack_require__("djO7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footbar__ = __webpack_require__("Bpe0");
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_1__Toolbar__["a" /* default */],
    Footbar: __WEBPACK_IMPORTED_MODULE_2__Footbar__["a" /* default */]
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function (event) {
      alert(this.email + " " + this.password);
    }
  }
});

window.onload = function () {
  var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: "#login-div",
    delimiters: ['[[', ']]']
  });
};

/***/ }),

/***/ "ngWU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"toolbar"}},[_c('div',{attrs:{"id":"top-bar-logo"}},[_c('router-link',{staticStyle:{"float":"left"},attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__("K/vL"),"height":"100","width":"160"}})])],1),_vm._v(" "),_c('div',{attrs:{"id":"top-bar-link"}},[_c('router-link',{staticClass:"no-border-button",attrs:{"to":"/about"}},[_vm._v("Share")]),_vm._v(" "),_c('router-link',{staticClass:"no-border-button",attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._v(" "),_c('div',{attrs:{"id":"login-join"}},[_c('router-link',{staticClass:"no-border-button",attrs:{"to":"/register"}},[_vm._v("Sign Up")]),_vm._v(" "),_c('router-link',{staticClass:"rounded-cornor-button",attrs:{"to":"/login"}},[_vm._v("LOGIN")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "o7Vb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FeedWall_vue__ = __webpack_require__("2PyM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b3070864_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FeedWall_vue__ = __webpack_require__("QzrD");
function injectStyle (ssrContext) {
  __webpack_require__("Jax7")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FeedWall_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b3070864_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FeedWall_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "o9cx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__ = __webpack_require__("yoF/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f521153_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__ = __webpack_require__("/9hY");
function injectStyle (ssrContext) {
  __webpack_require__("eseH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f521153_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "oPmM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "r9bD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/homepage-01.f2ed6f6.png";

/***/ }),

/***/ "sHmv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'footbar',
	data() {
		return {
			title: '#footbar'
		};
	}
});

/***/ }),

/***/ "uQwB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/meetPeople.1bd0828.png";

/***/ }),

/***/ "xCCR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__("V7RX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9183a34_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__("F0CY");
function injectStyle (ssrContext) {
  __webpack_require__("7bOG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c9183a34_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  components: {}
});

/***/ }),

/***/ "xJsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("nKb+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_106858da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__("igIV");
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_106858da_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yQcy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "yoF/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Toolbar__ = __webpack_require__("djO7");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Toolbar: __WEBPACK_IMPORTED_MODULE_1__Toolbar__["a" /* default */]
  }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.8bc17f33b90ad2856764.js.map