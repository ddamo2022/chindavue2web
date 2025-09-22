(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/common/sq-btn"],{

/***/ 860:
/*!**************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sq-btn.vue?vue&type=template&id=21327966&scoped=true& */ 861);
/* harmony import */ var _sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sq-btn.vue?vue&type=script&lang=js& */ 863);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sq-btn.vue?vue&type=style&index=0&id=21327966&scoped=true&lang=scss& */ 865);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 48);

var renderjs





/* normalize component */

var component = Object(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21327966",
  null,
  false,
  _sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/common/sq-btn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 861:
/*!*********************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=template&id=21327966&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sq-btn.vue?vue&type=template&id=21327966&scoped=true& */ 862);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_template_id_21327966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 862:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=template&id=21327966&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function () {
      return Promise.all(/*! import() | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 722))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = _vm.type == 1 ? {} : null
  var m0 = _vm.type == 1 ? _vm.$t("sq-btn.welcome") : null
  var m1 = _vm.type == 1 ? _vm.$t("sq-btn.enter_phone_number") : null
  var m2 = _vm.type == 1 ? _vm.$t("sq-btn.enter_verification_code") : null
  var g0 =
    _vm.type == 1 && _vm.time <= 0
      ? _vm.params.tel && _vm.params.tel.length > 7
      : null
  var g1 =
    _vm.type == 1 && _vm.time <= 0
      ? _vm.params.tel && _vm.params.tel.length > 7
      : null
  var m3 = _vm.type == 1 && !(_vm.time <= 0) ? _vm.$t("sq-btn.sent") : null
  var m4 = _vm.type == 1 ? _vm.$t("sq-btn.login_now") : null
  var m5 = _vm.type == 1 ? _vm.$t("sq-btn.allow_usage_of_personal_info") : null
  var m6 =
    _vm.type == 1
      ? _vm.basicSetting.agreementTitle || _vm.$t("sq-btn.user_agreement")
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        m0: m0,
        m1: m1,
        m2: m2,
        g0: g0,
        g1: g1,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 863:
/*!***************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sq-btn.vue?vue&type=script&lang=js& */ 864);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 864:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 38));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 40));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 44);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uniPopup = function uniPopup() {
  Promise.all(/*! require.ensure | components/uni-popup/uni-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-popup/uni-popup")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 722));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var mgAgree = function mgAgree() {
  __webpack_require__.e(/*! require.ensure | components/form/my-agree */ "components/form/my-agree").then((function () {
    return resolve(__webpack_require__(/*! @/components/form/my-agree.vue */ 1453));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  name: 'sq-btn',
  components: {
    uniPopup: uniPopup,
    mgAgree: mgAgree
  },
  props: {
    cname: '',
    // sname: '',
    type: {
      type: String,
      default: '1'
    },
    storeid: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    lType: {
      type: Number,
      default: 1
    }
  },
  data: function data() {
    return {
      loading: false,
      isAgree: false,
      params: {
        telcode: '+66',
        tel: '',
        code: ''
      },
      disabled: false,
      time: 0,
      btntxt: this.$t('sq-btn.get_verification_code'),
      partyAid: '',
      partnerId: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0, _vuex.mapState)({
    basicSetting: function basicSetting(state) {
      return state.config.basicSetting;
    }
  })), {}, {
    mrtxImg: function mrtxImg() {
      return "".concat(this.onImgurl, "my/mrtx.png");
    }
  }),
  watch: {
    // sname: {
    // 	handler(newVal) {
    // 		console.log('newVal', newVal)
    // 	},
    // 	immediate: true
    // },
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(["setMobile", "setToken", "setUser", "setNoLogin"])), {}, {
    open: function open(aid) {
      // if (aid) {
      // 	this.partyAid = aid
      // }
      // this.$refs['popup'].open()

      var currentPage = getCurrentPages().pop();
      var currentPath = "/".concat(currentPage.route).concat(currentPage.options ? '?' + Object.keys(currentPage.options).map(function (key) {
        return "".concat(key, "=").concat(currentPage.options[key]);
      }).join('&') : '');
      console.log(currentPath);
      uni.setStorageSync('redirectPath', currentPath);
      uni.navigateTo({
        url: '/pages/other/login'
      });
    },
    openf: function openf(aid) {
      var currentPage = getCurrentPages().pop();
      var currentPath = "/".concat(currentPage.route).concat(currentPage.options ? '?' + Object.keys(currentPage.options).map(function (key) {
        return "".concat(key, "=").concat(currentPage.options[key]);
      }).join('&') : '');
      console.log(currentPath);
      uni.setStorageSync('redirectPath', currentPath);
      uni.navigateTo({
        url: '/pages/other/login'
      });
      // if (aid) {
      // 	this.partnerId = aid
      // }
      // this.$refs['popup'].open()
    },
    close: function close() {
      this.$refs['popup'].close();
    },
    change: function change(_ref) {
      var show = _ref.show;
      this.$emit('change', show);
    },
    tlogin: function tlogin() {
      if (!this.isAgree) {
        this.util.message("".concat(this.$t('sq-btn.read_and_agree')).concat(this.basicSetting.agreementTitle || this.$t('sq-btn.user_agreement')), 3, 2000);
      } else {
        this.$refs['popup'].close();
      }
    },
    clickNoLogin: function clickNoLogin() {
      this.setNoLogin();
      this.$refs['popup'].close();
    },
    share: function share() {
      uni.showModal({
        title: this.$t('sq-btn.prompt'),
        content: this.$t('sq-btn.click_top_right_to_share'),
        showCancel: false,
        confirmText: this.$t('sq-btn.got_it')
      });
    },
    onGetAuthorize: function onGetAuthorize(res) {
      var _this = this;
      // console.log('onGetAuthorize', res)
      my.getOpenUserInfo({
        fail: function fail(res) {},
        success: function success(res) {
          // console.log('my.getOpenUserInfo', JSON.parse(res.response).response)
          var result = JSON.parse(res.response).response;
          _this.refreshUser({
            storeId: _this.storeid,
            portrait: result.avatar,
            userName: result.nickName,
            userId: _this.uId
          }).then(function (res) {
            _this.$emit('refresh');
          });
        }
      });
    },
    getAlPhoneNumber: function getAlPhoneNumber() {
      var _this2 = this;
      my.getPhoneNumber({
        success: function success(res) {
          var resData = JSON.parse(res.response);
          _this2.util.request({
            url: _this2.api.jm,
            method: 'POST',
            data: {
              data: resData.response
            }
          }).then(function (res) {
            console.log('jm res', res);
            if (res.data) {
              _this2.show = false;
              if (_this2.type == 4) {
                _this2.util.message(_this2.$t('sq-btn.binding_successful'), 1, 1000);
              } else {
                _this2.$emit('refresh', res.data);
              }
              _this2.refreshUser({
                nomask: 1,
                get: 1,
                now: 1
              });
            }
          });
          console.log('getAlPhoneNumber success', resData);
        },
        fail: function fail(res) {
          console.log('getAlPhoneNumber fail', res);
        }
      });
    },
    mpGetphonenumber: function mpGetphonenumber(result) {
      var _this3 = this;
      this.loading = true;
      console.log('mpGetphonenumber', result);
      if (result.detail.errMsg == 'getPhoneNumber:ok') {
        var sessionKey = getApp().globalData.session_key,
          data = result.detail.encryptedData,
          iv = result.detail.iv;
        // userId = this.uId
        this.util.request({
          url: this.api.jm,
          method: 'POST',
          data: {
            sessionKey: sessionKey,
            data: data,
            iv: iv
          }
        }).then( /*#__PURE__*/function () {
          var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
            var rest;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this3.loading = false;
                    if (!res.data.phoneNumber) {
                      _context2.next = 9;
                      break;
                    }
                    _this3.setMobile(res.data.phoneNumber);
                    uni.setStorageSync('userTel', res.data.phoneNumber);
                    _context2.next = 6;
                    return _this3.util.request({
                      'url': _this3.api.gxmb,
                      method: 'post',
                      data: {
                        mobile: res.data.phoneNumber,
                        partyAid: _this3.partyAid,
                        partnerId: _this3.partnerId
                      }
                    }).then( /*#__PURE__*/function () {
                      var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(rest) {
                        return _regenerator.default.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log('rest', rest);
                                _this3.setToken(rest.data.token);
                                _this3.setUser(rest.data.userInfo);
                                _this3.util.message(_this3.$t('sq-btn.registration_successful'), 1, 1000);
                                _this3.$emit('rf');
                              case 5:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                      return function (_x2) {
                        return _ref3.apply(this, arguments);
                      };
                    }()).catch(function (e) {
                      _this3.loading = false;
                    });
                  case 6:
                    rest = _context2.sent;
                    _context2.next = 10;
                    break;
                  case 9:
                    console.log(res);
                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }()).catch(function () {
          _this3.loading = false;
        });
        console.log(sessionKey, data, iv);
      } else {
        this.loading = false;
        uni.showModal({
          title: this.$t('sq-btn.warm_prompt'),
          content: this.$t('sq-btn.phone_authorization_failed'),
          showCancel: false,
          confirmText: i18n.t('modal.confirm')
        });
        return;
      }
    },
    sendcode: function sendcode(type) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this4.params.tel && _this4.params.tel.length > 7)) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 3;
                return _this4.util.request({
                  'url': _this4.api.smsLogin,
                  method: 'POST',
                  data: {
                    mobile: _this4.params.telcode + _this4.params.tel,
                    type: type
                  }
                });
              case 3:
                _this4.time = 60;
                _this4.timer();
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    timer: function timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + this.$t('sq-btn.seconds');
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = this.$t('sq-btn.send_verification_code');
        this.disabled = false;
      }
    },
    h5Login: function h5Login() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var rest;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (_this5.isAgree) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return", _this5.util.message("".concat(_this5.$t('sq-btn.read_and_agree')).concat(_this5.basicSetting.agreementTitle || _this5.$t('sq-btn.user_agreement')), 3, 2000));
              case 2:
                if (!(_this5.params.tel && _this5.params.tel.length > 7 && _this5.params.code)) {
                  _context5.next = 8;
                  break;
                }
                _this5.setMobile(_this5.params.telcode + _this5.params.tel);
                uni.setStorageSync('userTel', _this5.params.tel);
                _context5.next = 7;
                return _this5.util.request({
                  'url': _this5.api.mobileLogin,
                  method: 'post',
                  data: {
                    mobile: _this5.params.telcode + _this5.params.tel,
                    code: _this5.params.code
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(rest) {
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            console.log('rest', rest);
                            _this5.setToken(rest.data.token);
                            _this5.setUser(rest.data.userInfo);
                            _this5.util.message(_this5.$t('sq-btn.login_successful'), 1, 1000);
                            _this5.$emit('rf');
                            _this5.close();
                          case 6:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                  return function (_x3) {
                    return _ref4.apply(this, arguments);
                  };
                }()).catch(function (e) {
                  _this5.loading = false;
                });
              case 7:
                rest = _context5.sent;
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    bindmobile: function bindmobile() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var rest;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (_this6.isAgree) {
                  _context7.next = 2;
                  break;
                }
                return _context7.abrupt("return", _this6.util.message("".concat(_this6.$t('sq-btn.read_and_agree')).concat(_this6.basicSetting.agreementTitle || _this6.$t('sq-btn.user_agreement')), 3, 2000));
              case 2:
                if (!(_this6.params.tel && _this6.params.tel.length > 7 && _this6.params.code)) {
                  _context7.next = 8;
                  break;
                }
                _this6.setMobile(_this6.params.telcode + _this6.params.tel);
                uni.setStorageSync('userTel', _this6.params.tel);
                _context7.next = 7;
                return _this6.util.request({
                  'url': _this6.api.gxmb,
                  method: 'post',
                  data: {
                    mobile: _this6.params.telcode + _this6.params.tel,
                    code: _this6.params.code,
                    partyAid: _this6.partyAid,
                    partnerId: _this6.partnerId,
                    type: "bindmobile"
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(rest) {
                    return _regenerator.default.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            console.log('rest', rest);
                            _this6.setToken(rest.data.token);
                            _this6.setUser(rest.data.userInfo);
                            _this6.util.message(_this6.$t('sq-btn.login_successful'), 1, 1000);
                            _this6.$emit('rf');
                            _this6.close();
                          case 6:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));
                  return function (_x4) {
                    return _ref5.apply(this, arguments);
                  };
                }()).catch(function (e) {
                  _this6.loading = false;
                });
              case 7:
                rest = _context7.sent;
              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 865:
/*!************************************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=style&index=0&id=21327966&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./sq-btn.vue?vue&type=style&index=0&id=21327966&scoped=true&lang=scss& */ 866);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_sq_btn_vue_vue_type_style_index_0_id_21327966_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 866:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/components/common/sq-btn.vue?vue&type=style&index=0&id=21327966&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common/sq-btn.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/sq-btn-create-component',
    {
        'components/common/sq-btn-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(860))
        })
    },
    [['components/common/sq-btn-create-component']]
]);
