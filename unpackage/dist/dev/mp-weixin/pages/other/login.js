(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/other/login"],{

/***/ 506:
/*!**************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/main.js?{"page":"pages%2Fother%2Flogin"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/other/login.vue */ 507));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 507:
/*!*******************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=411ac2c1&scoped=true& */ 508);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 510);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=411ac2c1&scoped=true&lang=css& */ 512);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 48);

var renderjs





/* normalize component */

var component = Object(_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "411ac2c1",
  null,
  false,
  _login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/other/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 508:
/*!**************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=template&id=411ac2c1&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=411ac2c1&scoped=true& */ 509);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_411ac2c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 509:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=template&id=411ac2c1&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.$t("login.welcome_message")
  var m1 = _vm.$t("login.enter_email_or_phone")
  var m2 = _vm.$t("login.enter_password")
  var m3 = _vm.$t("login.login")
  var m4 = _vm.$t("login.forgot_password")
  var m5 = _vm.$t("login.no_account")
  var m6 = _vm.$t("login.register")
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
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

/***/ 510:
/*!********************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 511);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 511:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 40));
var _lineSdkLoader = __webpack_require__(/*! @/common/line-sdk-loader.js */ 57);
var _vuex = __webpack_require__(/*! vuex */ 44);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uniNavBar = function uniNavBar() {
  __webpack_require__.e(/*! require.ensure | components/third/uni-nav-bar */ "components/third/uni-nav-bar").then((function () {
    return resolve(__webpack_require__(/*! @/components/third/uni-nav-bar.vue */ 731));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      username: '',
      password: '',
      userProfile: null
    };
  },
  components: {
    uniNavBar: uniNavBar
  },
  onLoad: function onLoad(options) {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var liffId, _this;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!_this2.isLogin) {
                liffId = getApp().globalData.siteInfo.liffId;
                _this = _this2; //	console.log('login-linisLoggedIn', liff.isLoggedIn())
                (0, _lineSdkLoader.loadLineSDK)(liffId).then( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(liff) {
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!liff.isLoggedIn()) {
                              _context.next = 4;
                              break;
                            }
                            return _context.abrupt("return", liff.getProfile());
                          case 4:
                            if (!liff.isInClient()) {
                              _context.next = 6;
                              break;
                            }
                            return _context.abrupt("return", liff.login());
                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()).then( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(profile) {
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!(profile && profile.userId)) {
                              _context2.next = 4;
                              break;
                            }
                            console.log(profile);
                            _context2.next = 4;
                            return _this.linelogin(profile.userId, profile.displayName);
                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));
                  return function (_x2) {
                    return _ref2.apply(this, arguments);
                  };
                }()).catch(function (err) {
                  console.error(err);
                });
              }
            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  mounted: function mounted() {
    this.initializeFacebookSDK();
  },
  methods: _objectSpread(_objectSpread({}, (0, _vuex.mapMutations)(["setMobile", "setToken", "setUser"])), {}, {
    linelogin: function linelogin(id, name) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var rest, redirectPath;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this3.util.request({
                  'url': _this3.api.lineLogin,
                  method: 'post',
                  data: {
                    id: id,
                    name: name
                  }
                });
              case 2:
                rest = _context4.sent;
                if (rest.data) {
                  _this3.setToken(rest.data.token);
                  _this3.setUser(rest.data.userInfo);
                  _this3.util.message(_this3.$t('sq-btn.login_successful'), 1, 1000);
                  redirectPath = uni.getStorageSync('redirectPath') || '/';
                  uni.removeStorageSync('redirectPath');
                  uni.reLaunch({
                    url: redirectPath
                  });
                }
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    initializeFacebookSDK: function initializeFacebookSDK() {
      this.$loadFacebookSDK().then(function (FB) {
        //this.fbReady = true;
        console.log('Facebook SDK loaded and initialized.');
      }).catch(function (error) {
        console.error('Error loading Facebook SDK:', error);
      });
    },
    login: function login() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var rest;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this4.username) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return", _this4.util.message(_this4.$t("login.enter_email_or_phone_placeholder"), 3));
              case 2:
                if (_this4.password) {
                  _context6.next = 4;
                  break;
                }
                return _context6.abrupt("return", _this4.util.message(_this4.$t("login.enter_password_placeholder"), 3));
              case 4:
                _context6.next = 6;
                return _this4.util.request({
                  'url': _this4.api.emaillogin,
                  method: 'post',
                  data: {
                    username: _this4.username,
                    password: _this4.password
                  }
                }).then( /*#__PURE__*/function () {
                  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(rest) {
                    var redirectPath;
                    return _regenerator.default.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (!rest.data) {
                              _context5.next = 10;
                              break;
                            }
                            console.log('rest', rest.data.token);
                            // this.setToken(rest.data.token)
                            // this.setUser(rest.data.userInfo)
                            _this4.$store.commit('setUser', rest.data.userInfo);
                            _this4.$store.commit('setToken', rest.data.token);
                            _this4.util.message(_this4.$t('sq-btn.login_successful'), 1, 1000);
                            redirectPath = uni.getStorageSync('redirectPath') || '/';
                            uni.removeStorageSync('redirectPath');
                            uni.reLaunch({
                              url: redirectPath
                            });

                            // uni.reLaunch({
                            // 	url: '/pages/index/index'
                            // })
                            _context5.next = 11;
                            break;
                          case 10:
                            return _context5.abrupt("return", _this4.util.message(rest.msg, 3));
                          case 11:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));
                  return function (_x3) {
                    return _ref3.apply(this, arguments);
                  };
                }()).catch(function (e) {});
              case 6:
                rest = _context6.sent;
              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    openforgot: function openforgot() {
      uni.navigateTo({
        url: '/pages/other/forgetting'
      });
    },
    openregister: function openregister() {
      uni.navigateTo({
        url: '/pages/other/register'
      });
    },
    openlogin: function openlogin(type) {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var redirectPath, url, currentPage, currentPath, _this;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                redirectPath = uni.getStorageSync('redirectPath') || '/'; //uni.removeStorageSync('redirectPath');
                console.log(redirectPath);
                console.log(getApp().globalData.siteInfo.siteroot);
                url = "".concat(getApp().globalData.siteInfo.siteroot, "/h5/#").concat(redirectPath);
                console.log(url);
                if (type == 1) {
                  window.location.href = "".concat(getApp().globalData.siteInfo.siteroot, "/line/").concat(getApp().globalData.siteInfo.uniacid, "?refererUrl=").concat(btoa(url));
                  currentPage = getCurrentPages().pop();
                  currentPath = "/".concat(currentPage.route).concat(currentPage.options ? '?' + Object.keys(currentPage.options).map(function (key) {
                    return "".concat(key, "=").concat(currentPage.options[key]);
                  }).join('&') : ''); //window.liff.login();
                }
                if (type == 2) {
                  // window.location.href =
                  // 	`${getApp().globalData.siteInfo.siteroot}/facebook/${getApp().globalData.siteInfo.uniacid}?refererUrl=${btoa(url)}`
                  _this = _this5;
                  FB.login( /*#__PURE__*/function () {
                    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(response) {
                      return _regenerator.default.wrap(function _callee8$(_context8) {
                        while (1) {
                          switch (_context8.prev = _context8.next) {
                            case 0:
                              if (!response.authResponse) {
                                _context8.next = 5;
                                break;
                              }
                              console.log('Welcome! Fetching your information....');
                              FB.api('/me', {
                                fields: 'id,name,email'
                              }, /*#__PURE__*/function () {
                                var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(userResponse) {
                                  var name, email;
                                  return _regenerator.default.wrap(function _callee7$(_context7) {
                                    while (1) {
                                      switch (_context7.prev = _context7.next) {
                                        case 0:
                                          console.log(userResponse);
                                          console.log('Good to see you, ' + userResponse.name + '.');
                                          name = "";
                                          if (userResponse.name) {
                                            name = userResponse.name;
                                          }
                                          email = "";
                                          if (userResponse.email) {
                                            email = userResponse.email;
                                          }
                                          if (!userResponse.id) {
                                            _context7.next = 11;
                                            break;
                                          }
                                          _context7.next = 9;
                                          return _this.facebooklogin(userResponse.id, name, email);
                                        case 9:
                                          _context7.next = 12;
                                          break;
                                        case 11:
                                          return _context7.abrupt("return", _this.util.message(_this.$t("modal.authorization_failed"), 3));
                                        case 12:
                                        case "end":
                                          return _context7.stop();
                                      }
                                    }
                                  }, _callee7);
                                }));
                                return function (_x5) {
                                  return _ref5.apply(this, arguments);
                                };
                              }());
                              _context8.next = 7;
                              break;
                            case 5:
                              console.log('User cancelled login or did not fully authorize.');
                              return _context8.abrupt("return", _this.util.message(_this.$t("modal.authorization_failed"), 3));
                            case 7:
                            case "end":
                              return _context8.stop();
                          }
                        }
                      }, _callee8);
                    }));
                    return function (_x4) {
                      return _ref4.apply(this, arguments);
                    };
                  }(), {
                    scope: 'public_profile,email'
                  });
                }
              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    facebooklogin: function facebooklogin(id, name, email) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var rest, redirectPath;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _this6.util.request({
                  'url': _this6.api.facebookLogin,
                  method: 'post',
                  data: {
                    id: id,
                    name: name,
                    email: email
                  }
                });
              case 2:
                rest = _context10.sent;
                if (rest.data) {
                  // this.setToken(rest.data.token)
                  // this.setUser(rest.data.userInfo)
                  _this6.$store.commit('setUser', rest.data.userInfo);
                  _this6.$store.commit('setToken', rest.data.token);
                  _this6.util.message(_this6.$t('sq-btn.login_successful'), 1, 1000);
                  redirectPath = uni.getStorageSync('redirectPath') || '/';
                  uni.removeStorageSync('redirectPath');
                  uni.reLaunch({
                    url: redirectPath
                  });
                }
              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 512:
/*!****************************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=style&index=0&id=411ac2c1&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=411ac2c1&scoped=true&lang=css& */ 513);
/* harmony import */ var _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_C_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_C_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_411ac2c1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 513:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/work/ybv3前端0126/用户端小程序/pages/other/login.vue?vue&type=style&index=0&id=411ac2c1&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[506,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/other/login.js.map