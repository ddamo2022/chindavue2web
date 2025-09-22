(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 107:
/*!**************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/grace/js/grace.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // 获取ref ( 循环获取，直到 组件创建完成并获取成功 )
  getRefs: function getRefs(ref, _this, count, fun) {
    var _this2 = this;
    if (count >= 50) {
      fun(_this.$refs[ref]);
      return false;
    }
    var refReturn = _this.$refs[ref];
    if (refReturn) {
      fun(refReturn);
    } else {
      count++;
      setTimeout(function () {
        _this2.getRefs(ref, _this, count, fun);
      }, 100);
    }
  }
};

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1319:
/*!*************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-icons/components/uni-icons/uniicons_file_vue.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontData = void 0;
var fontData = [{
  "font_class": "arrow-down",
  "unicode": "\uE6BE"
}, {
  "font_class": "arrow-left",
  "unicode": "\uE6BC"
}, {
  "font_class": "arrow-right",
  "unicode": "\uE6BB"
}, {
  "font_class": "arrow-up",
  "unicode": "\uE6BD"
}, {
  "font_class": "auth",
  "unicode": "\uE6AB"
}, {
  "font_class": "auth-filled",
  "unicode": "\uE6CC"
}, {
  "font_class": "back",
  "unicode": "\uE6B9"
}, {
  "font_class": "bars",
  "unicode": "\uE627"
}, {
  "font_class": "calendar",
  "unicode": "\uE6A0"
}, {
  "font_class": "calendar-filled",
  "unicode": "\uE6C0"
}, {
  "font_class": "camera",
  "unicode": "\uE65A"
}, {
  "font_class": "camera-filled",
  "unicode": "\uE658"
}, {
  "font_class": "cart",
  "unicode": "\uE631"
}, {
  "font_class": "cart-filled",
  "unicode": "\uE6D0"
}, {
  "font_class": "chat",
  "unicode": "\uE65D"
}, {
  "font_class": "chat-filled",
  "unicode": "\uE659"
}, {
  "font_class": "chatboxes",
  "unicode": "\uE696"
}, {
  "font_class": "chatboxes-filled",
  "unicode": "\uE692"
}, {
  "font_class": "chatbubble",
  "unicode": "\uE697"
}, {
  "font_class": "chatbubble-filled",
  "unicode": "\uE694"
}, {
  "font_class": "checkbox",
  "unicode": "\uE62B"
}, {
  "font_class": "checkbox-filled",
  "unicode": "\uE62C"
}, {
  "font_class": "checkmarkempty",
  "unicode": "\uE65C"
}, {
  "font_class": "circle",
  "unicode": "\uE65B"
}, {
  "font_class": "circle-filled",
  "unicode": "\uE65E"
}, {
  "font_class": "clear",
  "unicode": "\uE66D"
}, {
  "font_class": "close",
  "unicode": "\uE673"
}, {
  "font_class": "closeempty",
  "unicode": "\uE66C"
}, {
  "font_class": "cloud-download",
  "unicode": "\uE647"
}, {
  "font_class": "cloud-download-filled",
  "unicode": "\uE646"
}, {
  "font_class": "cloud-upload",
  "unicode": "\uE645"
}, {
  "font_class": "cloud-upload-filled",
  "unicode": "\uE648"
}, {
  "font_class": "color",
  "unicode": "\uE6CF"
}, {
  "font_class": "color-filled",
  "unicode": "\uE6C9"
}, {
  "font_class": "compose",
  "unicode": "\uE67F"
}, {
  "font_class": "contact",
  "unicode": "\uE693"
}, {
  "font_class": "contact-filled",
  "unicode": "\uE695"
}, {
  "font_class": "down",
  "unicode": "\uE6B8"
}, {
  "font_class": "bottom",
  "unicode": "\uE6B8"
}, {
  "font_class": "download",
  "unicode": "\uE68D"
}, {
  "font_class": "download-filled",
  "unicode": "\uE681"
}, {
  "font_class": "email",
  "unicode": "\uE69E"
}, {
  "font_class": "email-filled",
  "unicode": "\uE69A"
}, {
  "font_class": "eye",
  "unicode": "\uE651"
}, {
  "font_class": "eye-filled",
  "unicode": "\uE66A"
}, {
  "font_class": "eye-slash",
  "unicode": "\uE6B3"
}, {
  "font_class": "eye-slash-filled",
  "unicode": "\uE6B4"
}, {
  "font_class": "fire",
  "unicode": "\uE6A1"
}, {
  "font_class": "fire-filled",
  "unicode": "\uE6C5"
}, {
  "font_class": "flag",
  "unicode": "\uE65F"
}, {
  "font_class": "flag-filled",
  "unicode": "\uE660"
}, {
  "font_class": "folder-add",
  "unicode": "\uE6A9"
}, {
  "font_class": "folder-add-filled",
  "unicode": "\uE6C8"
}, {
  "font_class": "font",
  "unicode": "\uE6A3"
}, {
  "font_class": "forward",
  "unicode": "\uE6BA"
}, {
  "font_class": "gear",
  "unicode": "\uE664"
}, {
  "font_class": "gear-filled",
  "unicode": "\uE661"
}, {
  "font_class": "gift",
  "unicode": "\uE6A4"
}, {
  "font_class": "gift-filled",
  "unicode": "\uE6C4"
}, {
  "font_class": "hand-down",
  "unicode": "\uE63D"
}, {
  "font_class": "hand-down-filled",
  "unicode": "\uE63C"
}, {
  "font_class": "hand-up",
  "unicode": "\uE63F"
}, {
  "font_class": "hand-up-filled",
  "unicode": "\uE63E"
}, {
  "font_class": "headphones",
  "unicode": "\uE630"
}, {
  "font_class": "heart",
  "unicode": "\uE639"
}, {
  "font_class": "heart-filled",
  "unicode": "\uE641"
}, {
  "font_class": "help",
  "unicode": "\uE679"
}, {
  "font_class": "help-filled",
  "unicode": "\uE674"
}, {
  "font_class": "home",
  "unicode": "\uE662"
}, {
  "font_class": "home-filled",
  "unicode": "\uE663"
}, {
  "font_class": "image",
  "unicode": "\uE670"
}, {
  "font_class": "image-filled",
  "unicode": "\uE678"
}, {
  "font_class": "images",
  "unicode": "\uE650"
}, {
  "font_class": "images-filled",
  "unicode": "\uE64B"
}, {
  "font_class": "info",
  "unicode": "\uE669"
}, {
  "font_class": "info-filled",
  "unicode": "\uE649"
}, {
  "font_class": "left",
  "unicode": "\uE6B7"
}, {
  "font_class": "link",
  "unicode": "\uE6A5"
}, {
  "font_class": "list",
  "unicode": "\uE644"
}, {
  "font_class": "location",
  "unicode": "\uE6AE"
}, {
  "font_class": "location-filled",
  "unicode": "\uE6AF"
}, {
  "font_class": "locked",
  "unicode": "\uE66B"
}, {
  "font_class": "locked-filled",
  "unicode": "\uE668"
}, {
  "font_class": "loop",
  "unicode": "\uE633"
}, {
  "font_class": "mail-open",
  "unicode": "\uE643"
}, {
  "font_class": "mail-open-filled",
  "unicode": "\uE63A"
}, {
  "font_class": "map",
  "unicode": "\uE667"
}, {
  "font_class": "map-filled",
  "unicode": "\uE666"
}, {
  "font_class": "map-pin",
  "unicode": "\uE6AD"
}, {
  "font_class": "map-pin-ellipse",
  "unicode": "\uE6AC"
}, {
  "font_class": "medal",
  "unicode": "\uE6A2"
}, {
  "font_class": "medal-filled",
  "unicode": "\uE6C3"
}, {
  "font_class": "mic",
  "unicode": "\uE671"
}, {
  "font_class": "mic-filled",
  "unicode": "\uE677"
}, {
  "font_class": "micoff",
  "unicode": "\uE67E"
}, {
  "font_class": "micoff-filled",
  "unicode": "\uE6B0"
}, {
  "font_class": "minus",
  "unicode": "\uE66F"
}, {
  "font_class": "minus-filled",
  "unicode": "\uE67D"
}, {
  "font_class": "more",
  "unicode": "\uE64D"
}, {
  "font_class": "more-filled",
  "unicode": "\uE64E"
}, {
  "font_class": "navigate",
  "unicode": "\uE66E"
}, {
  "font_class": "navigate-filled",
  "unicode": "\uE67A"
}, {
  "font_class": "notification",
  "unicode": "\uE6A6"
}, {
  "font_class": "notification-filled",
  "unicode": "\uE6C1"
}, {
  "font_class": "paperclip",
  "unicode": "\uE652"
}, {
  "font_class": "paperplane",
  "unicode": "\uE672"
}, {
  "font_class": "paperplane-filled",
  "unicode": "\uE675"
}, {
  "font_class": "person",
  "unicode": "\uE699"
}, {
  "font_class": "person-filled",
  "unicode": "\uE69D"
}, {
  "font_class": "personadd",
  "unicode": "\uE69F"
}, {
  "font_class": "personadd-filled",
  "unicode": "\uE698"
}, {
  "font_class": "personadd-filled-copy",
  "unicode": "\uE6D1"
}, {
  "font_class": "phone",
  "unicode": "\uE69C"
}, {
  "font_class": "phone-filled",
  "unicode": "\uE69B"
}, {
  "font_class": "plus",
  "unicode": "\uE676"
}, {
  "font_class": "plus-filled",
  "unicode": "\uE6C7"
}, {
  "font_class": "plusempty",
  "unicode": "\uE67B"
}, {
  "font_class": "pulldown",
  "unicode": "\uE632"
}, {
  "font_class": "pyq",
  "unicode": "\uE682"
}, {
  "font_class": "qq",
  "unicode": "\uE680"
}, {
  "font_class": "redo",
  "unicode": "\uE64A"
}, {
  "font_class": "redo-filled",
  "unicode": "\uE655"
}, {
  "font_class": "refresh",
  "unicode": "\uE657"
}, {
  "font_class": "refresh-filled",
  "unicode": "\uE656"
}, {
  "font_class": "refreshempty",
  "unicode": "\uE6BF"
}, {
  "font_class": "reload",
  "unicode": "\uE6B2"
}, {
  "font_class": "right",
  "unicode": "\uE6B5"
}, {
  "font_class": "scan",
  "unicode": "\uE62A"
}, {
  "font_class": "search",
  "unicode": "\uE654"
}, {
  "font_class": "settings",
  "unicode": "\uE653"
}, {
  "font_class": "settings-filled",
  "unicode": "\uE6CE"
}, {
  "font_class": "shop",
  "unicode": "\uE62F"
}, {
  "font_class": "shop-filled",
  "unicode": "\uE6CD"
}, {
  "font_class": "smallcircle",
  "unicode": "\uE67C"
}, {
  "font_class": "smallcircle-filled",
  "unicode": "\uE665"
}, {
  "font_class": "sound",
  "unicode": "\uE684"
}, {
  "font_class": "sound-filled",
  "unicode": "\uE686"
}, {
  "font_class": "spinner-cycle",
  "unicode": "\uE68A"
}, {
  "font_class": "staff",
  "unicode": "\uE6A7"
}, {
  "font_class": "staff-filled",
  "unicode": "\uE6CB"
}, {
  "font_class": "star",
  "unicode": "\uE688"
}, {
  "font_class": "star-filled",
  "unicode": "\uE68F"
}, {
  "font_class": "starhalf",
  "unicode": "\uE683"
}, {
  "font_class": "trash",
  "unicode": "\uE687"
}, {
  "font_class": "trash-filled",
  "unicode": "\uE685"
}, {
  "font_class": "tune",
  "unicode": "\uE6AA"
}, {
  "font_class": "tune-filled",
  "unicode": "\uE6CA"
}, {
  "font_class": "undo",
  "unicode": "\uE64F"
}, {
  "font_class": "undo-filled",
  "unicode": "\uE64C"
}, {
  "font_class": "up",
  "unicode": "\uE6B6"
}, {
  "font_class": "top",
  "unicode": "\uE6B6"
}, {
  "font_class": "upload",
  "unicode": "\uE690"
}, {
  "font_class": "upload-filled",
  "unicode": "\uE68E"
}, {
  "font_class": "videocam",
  "unicode": "\uE68C"
}, {
  "font_class": "videocam-filled",
  "unicode": "\uE689"
}, {
  "font_class": "vip",
  "unicode": "\uE6A8"
}, {
  "font_class": "vip-filled",
  "unicode": "\uE6C6"
}, {
  "font_class": "wallet",
  "unicode": "\uE6B1"
}, {
  "font_class": "wallet-filled",
  "unicode": "\uE6C2"
}, {
  "font_class": "weibo",
  "unicode": "\uE68B"
}, {
  "font_class": "weixin",
  "unicode": "\uE691"
}];

// export const fontData = JSON.parse<IconsDataItem>(fontDataJson)
exports.fontData = fontData;

/***/ }),

/***/ 1369:
/*!******************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/util.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./calendar.js */ 1370));
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      date = _ref.date,
      selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      range = _ref.range;
    (0, _classCallCheck2.default)(this, Calendar);
    // 当前日期
    this.date = this.getDate(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 范围开始
    this.startDate = startDate;
    // 范围结束
    this.endDate = endDate;
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    // this._getWeek(this.date.fullDate)
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  (0, _createClass2.default)(Calendar, [{
    key: "setDate",
    value: function setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */
  }, {
    key: "cleanMultipleStatus",
    value: function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: []
      };
    }

    /**
     * 重置开始日期
     */
  }, {
    key: "resetSatrtDate",
    value: function resetSatrtDate(startDate) {
      // 范围开始
      this.startDate = startDate;
    }

    /**
     * 重置结束日期
     */
  }, {
    key: "resetEndDate",
    value: function resetEndDate(endDate) {
      // 范围结束
      this.endDate = endDate;
    }

    /**
     * 获取任意时间
     */
  }, {
    key: "getDate",
    value: function getDate(date) {
      var AddDayCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var str = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
      if (!date) {
        date = new Date();
      }
      if ((0, _typeof2.default)(date) !== 'object') {
        date = date.replace(/-/g, '/');
      }
      var dd = new Date(date);
      switch (str) {
        case 'day':
          dd.setDate(dd.getDate() + AddDayCount); // 获取AddDayCount天后的日期
          break;
        case 'month':
          if (dd.getDate() === 31 && AddDayCount > 0) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            var preMonth = dd.getMonth();
            dd.setMonth(preMonth + AddDayCount); // 获取AddDayCount天后的日期
            var nextMonth = dd.getMonth();
            // 处理 pre 切换月份目标月份为2月没有当前日(30 31) 切换错误问题
            if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount));
            }
            // 处理 next 切换月份目标月份为2月没有当前日(30 31) 切换错误问题
            if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount));
            }
          }
          break;
        case 'year':
          dd.setFullYear(dd.getFullYear() + AddDayCount); // 获取AddDayCount天后的日期
          break;
      }
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1; // 获取当前月份的日期，不足10补0
      var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate(); // 获取当前几号，不足10补0
      return {
        fullDate: y + '-' + m + '-' + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }

    /**
     * 获取上月剩余天数
     */
  }, {
    key: "_getLastMonthDays",
    value: function _getLastMonthDays(firstDay, full) {
      var dateArr = [];
      for (var i = firstDay; i > 0; i--) {
        var beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          lunar: this.getlunar(full.year, full.month - 1, beforeDate),
          disable: true
        });
      }
      return dateArr;
    }
    /**
     * 获取本月天数
     */
  }, {
    key: "_currentMonthDys",
    value: function _currentMonthDys(dateData, full) {
      var _this = this;
      var dateArr = [];
      var fullDate = this.date.fullDate;
      var _loop = function _loop(i) {
        var nowDate = full.year + '-' + (full.month < 10 ? full.month : full.month) + '-' + (i < 10 ? '0' + i : i);
        // 是否今天
        var isDay = fullDate === nowDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          // let dateCompBefore = this.dateCompare(this.startDate, fullDate)
          // disableBefore = this.dateCompare(dateCompBefore ? this.startDate : fullDate, nowDate)
          disableBefore = _this.dateCompare(_this.startDate, nowDate);
        }
        if (_this.endDate) {
          // let dateCompAfter = this.dateCompare(fullDate, this.endDate)
          // disableAfter = this.dateCompare(nowDate, dateCompAfter ? this.endDate : fullDate)
          disableAfter = _this.dateCompare(nowDate, _this.endDate);
        }
        var multiples = _this.multipleStatus.data;
        var checked = false;
        var multiplesStatus = -1;
        if (_this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex(function (item) {
              return _this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        var data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.dateEqual(_this.multipleStatus.before, nowDate),
          afterMultiple: _this.dateEqual(_this.multipleStatus.after, nowDate),
          month: full.month,
          lunar: _this.getlunar(full.year, full.month, i),
          disable: !(disableBefore && disableAfter),
          isDay: isDay
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      };
      for (var i = 1; i <= dateData; i++) {
        _loop(i);
      }
      return dateArr;
    }
    /**
     * 获取下月天数
     */
  }, {
    key: "_getNextMonthDays",
    value: function _getNextMonthDays(surplus, full) {
      var dateArr = [];
      for (var i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          lunar: this.getlunar(full.year, Number(full.month) + 1, i),
          disable: true
        });
      }
      return dateArr;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */
  }, {
    key: "getInfo",
    value: function getInfo(date) {
      var _this2 = this;
      if (!date) {
        date = new Date();
      }
      var dateInfo = this.canlender.find(function (item) {
        return item.fullDate === _this2.getDate(date).fullDate;
      });
      return dateInfo;
    }

    /**
     * 比较时间大小
     */
  }, {
    key: "dateCompare",
    value: function dateCompare(startDate, endDate) {
      // 计算截止时间
      startDate = new Date(startDate.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      endDate = new Date(endDate.replace('-', '/').replace('-', '/'));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * 比较时间是否相等
     */
  }, {
    key: "dateEqual",
    value: function dateEqual(before, after) {
      // 计算截止时间
      before = new Date(before.replace('-', '/').replace('-', '/'));
      // 计算详细项的截止时间
      after = new Date(after.replace('-', '/').replace('-', '/'));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
  }, {
    key: "geDateAll",
    value: function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    /**
     * 计算阴历日期显示
     */
  }, {
    key: "getlunar",
    value: function getlunar(year, month, date) {
      return _calendar.default.solar2lunar(year, month, date);
    }
    /**
     * 设置打点
     */
  }, {
    key: "setSelectInfo",
    value: function setSelectInfo(data, value) {
      this.selected = value;
      this._getWeek(data);
    }

    /**
     *  获取多选状态
     */
  }, {
    key: "setMultiple",
    value: function setMultiple(fullDate) {
      var _this$multipleStatus = this.multipleStatus,
        before = _this$multipleStatus.before,
        after = _this$multipleStatus.after;
      if (!this.range) return;
      if (before && after) {
        this.multipleStatus.before = '';
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
        }
      }
      this._getWeek(fullDate);
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */
  }, {
    key: "_getWeek",
    value: function _getWeek(dateData) {
      var _this$getDate = this.getDate(dateData),
        year = _this$getDate.year,
        month = _this$getDate.month;
      var firstDay = new Date(year, month - 1, 1).getDay();
      var currentDay = new Date(year, month, 0).getDate();
      var dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        // 上个月末尾几天
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        // 本月天数
        nextMonthDays: [],
        // 下个月开始几天
        weeks: []
      };
      var canlender = [];
      var surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      var weeks = {};
      // 拼接数组  上个月开始几天 + 本月天数+ 下个月开始几天
      for (var i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }

    //静态方法
    // static init(date) {
    // 	if (!this.instance) {
    // 		this.instance = new Calendar(date);
    // 	}
    // 	return this.instance;
    // }
  }]);
  return Calendar;
}();
var _default = Calendar;
exports.default = _default;

/***/ }),

/***/ 1370:
/*!**********************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/calendar.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
* @1900-2100区间内的公历、农历互转
* @charset UTF-8
* @github  https://github.com/jjonline/calendar.js
* @Author  Jea杨(JJonline@JJonline.Cn)
* @Time    2014-7-21
* @Time    2016-8-13 Fixed 2033hex、Attribution Annals
* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
* @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
* @Version 1.0.3
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/
/* eslint-disable */
var calendar = {
  /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex
      */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
  // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
  // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
  // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
  // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
  // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
  // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
  // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
  // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
  // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
  // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
  // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
  // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
  // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
  // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
  // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
  // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
  // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
  // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
  // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
  // 2090-2099
  0x0d520],
  // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],
  /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],
  /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],
  /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],
  /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],
  /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],
  /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],
  /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],
  /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
  lYearDays: function lYearDays(y) {
    var i;
    var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + this.leapDays(y);
  },
  /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
  leapMonth: function leapMonth(y) {
    // 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },
  /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },
  /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },
  /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {
      // 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },
  /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },
  /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },
  /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {
      return -1;
    }
    if (n < 1 || n > 24) {
      return -1;
    }
    var _table = this.sTermInfo[y - 1900];
    var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
    var _calday = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
    return parseInt(_calday[n - 1]);
  },
  /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
  toChinaMonth: function toChinaMonth(m) {
    // 月 => \u6708
    if (m > 12 || m < 1) {
      return -1;
    } // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },
  /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
  toChinaDay: function toChinaDay(d) {
    // 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";
        break;
      case 20:
        s = "\u4E8C\u5341";
        break;
        break;
      case 30:
        s = "\u4E09\u5341";
        break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];
    }
    return s;
  },
  /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },
  /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
  solar2lunar: function solar2lunar(y, m, d) {
    // 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;
    var leap = 0;
    var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;
      i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;
        temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {
        isLeap = false;
      }
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;
        --i;
      }
    }
    if (offset < 0) {
      offset += temp;
      --i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);
    return {
      'lYear': year,
      'lMonth': month,
      'lDay': day,
      'Animal': this.getAnimal(year),
      'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month),
      'IDayCn': this.toChinaDay(day),
      'cYear': y,
      'cMonth': m,
      'cDay': d,
      'gzYear': gzY,
      'gzMonth': gzM,
      'gzDay': gzD,
      'isToday': isToday,
      'isLeap': isLeap,
      'nWeek': nWeek,
      'ncWeek': "\u661F\u671F" + cWeek,
      'isTerm': isTerm,
      'Term': Term,
      'astro': astro
    };
  },
  /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
    // 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {
      return -1;
    } // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
      return -1;
    } // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {
      return -1;
    } // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;
    var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {
        // 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);
          isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
      offset += day;
    }
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();
    return this.solar2lunar(cY, cM, cD);
  }
};
var _default = calendar;
exports.default = _default;

/***/ }),

/***/ 1371:
/*!************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/i18n/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 1372));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 1373));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 1374));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 1372:
/*!***********************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/i18n/en.json ***!
  \***********************************************************************************************/
/*! exports provided: uni-calender.ok, uni-calender.cancel, uni-calender.today, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.SUN, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-calender.ok\":\"ok\",\"uni-calender.cancel\":\"cancel\",\"uni-calender.today\":\"today\",\"uni-calender.MON\":\"MON\",\"uni-calender.TUE\":\"TUE\",\"uni-calender.WED\":\"WED\",\"uni-calender.THU\":\"THU\",\"uni-calender.FRI\":\"FRI\",\"uni-calender.SAT\":\"SAT\",\"uni-calender.SUN\":\"SUN\"}");

/***/ }),

/***/ 1373:
/*!****************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/i18n/zh-Hans.json ***!
  \****************************************************************************************************/
/*! exports provided: uni-calender.ok, uni-calender.cancel, uni-calender.today, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-calender.ok\":\"确定\",\"uni-calender.cancel\":\"取消\",\"uni-calender.today\":\"今日\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\"}");

/***/ }),

/***/ 1374:
/*!****************************************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/uni_modules/uni-calendar/components/uni-calendar/i18n/zh-Hant.json ***!
  \****************************************************************************************************/
/*! exports provided: uni-calender.ok, uni-calender.cancel, uni-calender.today, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-calender.ok\":\"確定\",\"uni-calender.cancel\":\"取消\",\"uni-calender.today\":\"今日\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\"}");

/***/ }),

/***/ 1389:
/*!*************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/form/w-picker.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var forMatNum = function forMatNum(num) {
  return num < 10 ? '0' + num : num + '';
};
var initPicker = {
  //日期
  date: {
    init: function init(start, end) {
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "date";
      var step = arguments.length > 3 ? arguments[3] : undefined;
      var value = arguments.length > 4 ? arguments[4] : undefined;
      var flag = arguments.length > 5 ? arguments[5] : undefined;
      var disabled = arguments.length > 6 ? arguments[6] : undefined;
      var hasSecond = arguments.length > 7 ? arguments[7] : undefined;
      var aToday = new Date();
      var tYear,
        tMonth,
        tDay,
        tHours,
        tMinutes,
        tSeconds,
        defaultVal = [];
      var initstartDate = new Date(start.toString());
      var endDate = new Date(end.toString());
      if (start > end) {
        initstartDate = new Date(end.toString());
        endDate = new Date(start.toString());
      }
      ;
      var startYear = initstartDate.getFullYear();
      var startMonth = initstartDate.getMonth() + 1;
      var endYear = endDate.getFullYear();
      var years = [],
        months = [],
        days = [],
        hours = [],
        minutes = [],
        seconds = [],
        areas = [],
        returnArr = [],
        dvalDate = [];
      switch (mode) {
        case "half":
          dvalDate = flag ? [].concat((0, _toConsumableArray2.default)(value.split(" ")[0].split("-")), (0, _toConsumableArray2.default)(value.split(" ")[1].split(":"))) : [].concat((0, _toConsumableArray2.default)(value.split(" ")[0].split("-")), [value.split(" ")[1]]);
          break;
        case "date":
        case "yearMonth":
          dvalDate = value.split("-");
          break;
        case "dateTime":
          dvalDate = [].concat((0, _toConsumableArray2.default)(value.split(" ")[0].split("-")), (0, _toConsumableArray2.default)(value.split(" ")[1].split(":")));
          break;
        case "time":
          dvalDate = value.split(":");
          break;
      }
      var curMonth = flag ? dvalDate[1] * 1 : dvalDate[1] + 1;
      var dYear = aToday.getFullYear();
      var dMonth = aToday.getMonth() + 1;
      var dDate = aToday.getDate();
      var totalDays = new Date(startYear, curMonth, 0).getDate();
      var dvalObj = {};
      switch (mode) {
        case "half":
        case "date":
        case "yearMonth":
          var curYear = dvalDate[0];
          var _curMonth = dvalDate[1];
          if (disabled) {
            for (var s = startYear; s <= dYear; s++) {
              years.push(s + '');
            }
            ;
            if (curYear == dYear) {
              for (var m = 1; m <= dMonth; m++) {
                months.push(forMatNum(m));
              }
              ;
            } else {
              for (var _m = 1; _m <= 12; _m++) {
                months.push(forMatNum(_m));
              }
              ;
            }
            if (_curMonth == dMonth) {
              for (var d = 1; d <= dDate; d++) {
                days.push(forMatNum(d));
              }
            } else {
              for (var _d = 1; _d <= totalDays; _d++) {
                days.push(forMatNum(_d));
              }
            }
          } else {
            for (var _s = startYear; _s <= endYear; _s++) {
              years.push(_s + '');
            }
            ;
            for (var _m2 = 1; _m2 <= 12; _m2++) {
              months.push(forMatNum(_m2));
            }
            ;
            for (var _d2 = 1; _d2 <= totalDays; _d2++) {
              days.push(forMatNum(_d2));
            }
          }
          ;
          break;
        default:
          for (var _s2 = startYear; _s2 <= endYear; _s2++) {
            years.push(_s2 + '');
          }
          ;
          for (var _m3 = 1; _m3 <= 12; _m3++) {
            months.push(forMatNum(_m3));
          }
          ;
          for (var _d3 = 1; _d3 <= totalDays; _d3++) {
            days.push(forMatNum(_d3));
          }
          break;
      }
      for (var h = 0; h < 24; h++) {
        hours.push(forMatNum(h));
      }
      for (var _m4 = 0; _m4 < 60; _m4 += step * 1) {
        minutes.push(forMatNum(_m4));
      }
      for (var _s3 = 0; _s3 < 60; _s3++) {
        seconds.push(forMatNum(_s3));
      }
      if (flag) {
        returnArr = [years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]), hours.indexOf(dvalDate[3]), minutes.indexOf(dvalDate[4]) == -1 ? 0 : minutes.indexOf(dvalDate[4]), seconds.indexOf(dvalDate[5])];
      }
      switch (mode) {
        case "date":
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1], returnArr[2]];
            return {
              years: years,
              months: months,
              days: days,
              defaultVal: defaultVal
            };
          } else {
            defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2])];
            return {
              years: years,
              months: months,
              days: days,
              defaultVal: defaultVal
            };
          }
          break;
        case "half":
          areas = [{
            label: "上午",
            value: 0
          }, {
            label: "下午",
            value: 1
          }];
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1], returnArr[2], returnArr[3]];
            return {
              years: years,
              months: months,
              days: days,
              areas: areas,
              defaultVal: defaultVal
            };
          } else {
            var idx = 0;
            areas.map(function (v, k) {
              if (v.label == dvalDate[3]) {
                idx = v.value;
              }
            });
            defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2]), idx];
            return {
              years: years,
              months: months,
              days: days,
              areas: areas,
              defaultVal: defaultVal
            };
          }
          break;
        case "yearMonth":
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1]];
            return {
              years: years,
              months: months,
              defaultVal: defaultVal
            };
          } else {
            defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1])];
            return {
              years: years,
              months: months,
              defaultVal: defaultVal
            };
          }
          break;
        case "dateTime":
          if (flag) {
            defaultVal = returnArr;
          } else {
            if (hasSecond) {
              defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2]), hours.indexOf(dvalDate[3]) == -1 ? 0 : hours.indexOf(dvalDate[3]), minutes.indexOf(dvalDate[4]) == -1 ? 0 : minutes.indexOf(dvalDate[4]), seconds.indexOf(dvalDate[5]) == -1 ? 0 : seconds.indexOf(dvalDate[5])];
            } else {
              defaultVal = [years.indexOf(dvalDate[0]) == -1 ? 0 : years.indexOf(dvalDate[0]), months.indexOf(dvalDate[1]) == -1 ? 0 : months.indexOf(dvalDate[1]), days.indexOf(dvalDate[2]) == -1 ? 0 : days.indexOf(dvalDate[2]), hours.indexOf(dvalDate[3]) == -1 ? 0 : hours.indexOf(dvalDate[3]), minutes.indexOf(dvalDate[4]) == -1 ? 0 : minutes.indexOf(dvalDate[4])];
            }
          }
          if (hasSecond) {
            return {
              years: years,
              months: months,
              days: days,
              hours: hours,
              minutes: minutes,
              seconds: seconds,
              defaultVal: defaultVal
            };
          } else {
            return {
              years: years,
              months: months,
              days: days,
              hours: hours,
              minutes: minutes,
              defaultVal: defaultVal
            };
          }
          break;
        case "time":
          if (flag) {
            defaultVal = [returnArr[3], returnArr[4], returnArr[5]];
          } else {
            if (hasSecond) {
              defaultVal = [hours.indexOf(dvalDate[0]) == -1 ? 0 : hours.indexOf(dvalDate[0]), minutes.indexOf(dvalDate[1]) == -1 ? 0 : minutes.indexOf(dvalDate[1]), seconds.indexOf(dvalDate[2]) == -1 ? 0 : seconds.indexOf(dvalDate[2])];
            } else {
              defaultVal = [hours.indexOf(dvalDate[0]) == -1 ? 0 : hours.indexOf(dvalDate[0]), minutes.indexOf(dvalDate[1]) == -1 ? 0 : minutes.indexOf(dvalDate[1])];
            }
          }
          return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            defaultVal: defaultVal
          };
          break;
      }
    },
    initMonths: function initMonths(year, disabled) {
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var flag = dYear == year ? true : false;
      var months = [];
      if (disabled) {
        if (flag) {
          for (var m = 1; m <= dMonth; m++) {
            months.push(forMatNum(m));
          }
          ;
        } else {
          for (var _m5 = 1; _m5 <= 12; _m5++) {
            months.push(forMatNum(_m5));
          }
          ;
        }
      } else {
        for (var _m6 = 1; _m6 <= 12; _m6++) {
          months.push(forMatNum(_m6));
        }
        ;
      }
      ;
      return months;
    },
    initDays: function initDays(year, month, disabled) {
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var flag = dYear == year && dMonth == month ? true : false;
      var totalDays = new Date(year, month, 0).getDate();
      var dates = [];
      if (flag && disabled) {
        for (var d = 1; d <= dDate; d++) {
          dates.push(forMatNum(d));
        }
        ;
      } else {
        for (var _d4 = 1; _d4 <= totalDays; _d4++) {
          dates.push(forMatNum(_d4));
        }
        ;
      }
      ;
      return dates;
    }
  },
  //短期日期上下午
  limitHour: {
    init: function init() {
      var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
      var dVal = arguments.length > 1 ? arguments[1] : undefined;
      var startDate = new Date();
      var date = [],
        areas = [],
        hours = [];
      var hour = new Date().getHours();
      var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var arrs = [];
      var defaultVal = [];
      var d = 0,
        a = 0,
        h = 0;
      for (var i = 0; i < dayStep; i++) {
        var year = void 0,
          month = void 0,
          day = void 0,
          weekday = void 0;
        year = startDate.getFullYear();
        month = forMatNum(startDate.getMonth() + 1);
        day = forMatNum(startDate.getDate());
        weekday = weeks[startDate.getDay()];
        var label = "";
        switch (i) {
          case 0:
            label = "今天";
            break;
          case 1:
            label = "明天";
            break;
          case 2:
            label = "后天";
            break;
          default:
            label = month + "月" + day + "日" + " " + weekday;
            break;
        }
        date.push({
          label: label,
          value: year + "-" + month + "-" + day,
          today: i == 0 ? true : false
        });
        startDate.setDate(startDate.getDate() + 1);
      }
      if (hour > 12) {
        areas = [{
          label: "下午",
          value: 1
        }];
      } else {
        areas = [{
          label: "上午",
          value: 0
        }, {
          label: "下午",
          value: 1
        }];
      }
      ;
      for (var k = hour > 12 ? hour - 12 : hour; k <= 12; k++) {
        hours.push({
          label: forMatNum(k),
          value: forMatNum(hour > 12 ? k + 12 : k)
        });
      }
      ;
      date.map(function (v, k) {
        if (v.label == dVal[0]) {
          d = k;
        }
      });
      if (d != 0) {
        areas = this.initAreas(date[d]);
        hours = this.initHours(date[d], areas[a]);
      }
      areas.map(function (v, k) {
        if (v.label == dVal[1]) {
          a = k;
        }
      });
      hours.map(function (v, k) {
        if (v.label == dVal[2]) {
          h = k;
        }
      });
      defaultVal = [d, a, h];
      return {
        date: date,
        areas: areas,
        hours: hours,
        defaultVal: defaultVal
      };
    },
    initAreas: function initAreas(date) {
      var areas = [];
      var hour = new Date().getHours();
      if (date.today) {
        if (hour > 12) {
          areas = [{
            label: "下午",
            value: 1
          }];
        } else {
          areas = [{
            label: "上午",
            value: 0
          }, {
            label: "下午",
            value: 1
          }];
        }
        ;
      } else {
        areas = [{
          label: "上午",
          value: 0
        }, {
          label: "下午",
          value: 1
        }];
      }
      return areas;
    },
    initHours: function initHours(dateCol, hourCol) {
      var hours = [];
      var hour = new Date().getHours();
      if (dateCol.today) {
        if (hourCol.value == 1 && hour <= 12) {
          for (var k = 1; k <= 12; k++) {
            hours.push({
              label: forMatNum(k),
              value: forMatNum(hourCol.value == 1 ? k + 12 : k)
            });
          }
          ;
        } else {
          for (var _k = hour > 12 ? hour - 12 : hour; _k <= 12; _k++) {
            hours.push({
              label: forMatNum(_k),
              value: forMatNum(hourCol.value == 1 ? _k + 12 : _k)
            });
          }
          ;
        }
      } else {
        for (var _k2 = 1; _k2 <= 12; _k2++) {
          hours.push({
            label: forMatNum(_k2),
            value: forMatNum(hourCol.value == 1 ? _k2 + 12 : _k2)
          });
        }
        ;
      }
      ;
      return hours;
    }
  },
  //短期日期时间初始化
  limit: {
    init: function init() {
      var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
      var startHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
      var endHour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
      var minuteStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var afterStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
      var dVal = arguments.length > 5 ? arguments[5] : undefined;
      var startDate = new Date();
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var date = [],
        hours = [],
        minutes = [];
      var hour = bsDate.getHours();
      var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
      var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var d = 0,
        h = 0,
        m = 0;
      var defaultVal = [];
      for (var i = 0; i < dayStep; i++) {
        var year = void 0,
          month = void 0,
          day = void 0,
          weekday = void 0;
        year = startDate.getFullYear();
        month = forMatNum(startDate.getMonth() + 1);
        day = forMatNum(startDate.getDate());
        weekday = weeks[startDate.getDay()];
        var label = "";
        switch (i) {
          case 0:
            label = "今天";
            break;
          case 1:
            label = "明天";
            break;
          case 2:
            label = "后天";
            break;
          default:
            label = month + "月" + day + "日" + " " + weekday;
            break;
        }
        date.push({
          label: label,
          value: year + "-" + month + "-" + day,
          flag: i == 0 ? true : false
        });
        startDate.setDate(startDate.getDate() + 1);
      }
      if (hour < startHour) {
        hour = startHour;
      }
      ;
      if (hour > endHour) {
        hour = endHour;
      }
      ;
      for (var k = hour * 1; k <= endHour * 1; k++) {
        hours.push({
          label: forMatNum(k),
          value: forMatNum(k),
          flag: k == hour ? true : false
        });
      }
      ;
      for (var j = minute; j < 60; j += minuteStep * 1) {
        minutes.push({
          label: forMatNum(j),
          value: forMatNum(j)
        });
      }
      date.map(function (v, k) {
        if (v.label == dVal[0]) {
          d = k;
        }
      });
      if (d != 0) {
        hours = this.initHours(startHour = 8, endHour = 20, minuteStep = 1, afterStep = 30, date[d].value);
      }
      hours.map(function (v, k) {
        if (v.label == dVal[1]) {
          h = k;
        }
      });
      minutes.map(function (v, k) {
        if (v.label == dVal[2]) {
          m = k;
        }
      });
      defaultVal = [d, h, m];
      return {
        date: date,
        hours: hours,
        minutes: minutes,
        defaultVal: defaultVal
      };
    },
    initHours: function initHours() {
      var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
      var date = arguments.length > 4 ? arguments[4] : undefined;
      var hours = [];
      var arr = date.split("-");
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var hour = bsDate.getHours();
      var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
      if (hour > endHour) {
        hour = endHour;
      }
      ;
      if (flag) {
        for (var k = hour * 1; k <= endHour * 1; k++) {
          hours.push({
            label: forMatNum(k),
            value: forMatNum(k),
            flag: k == hour ? true : false
          });
        }
        ;
      } else {
        for (var _k3 = startHour * 1; _k3 <= endHour * 1; _k3++) {
          hours.push({
            label: forMatNum(_k3),
            value: forMatNum(_k3),
            flag: false
          });
        }
      }
      ;
      return hours;
    },
    initMinutes: function initMinutes() {
      var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
      var date = arguments.length > 4 ? arguments[4] : undefined;
      var hour = arguments.length > 5 ? arguments[5] : undefined;
      var minutes = [];
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var arr = date.split("-");
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var dHour = bsDate.getHours();
      ;
      var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
      var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
      if (flag) {
        if (hour == dHour) {
          for (var j = minute; j < 60; j += minuteStep * 1) {
            minutes.push({
              label: forMatNum(j),
              value: forMatNum(j)
            });
          }
        } else {
          for (var _j = 0; _j < 60; _j += minuteStep * 1) {
            minutes.push({
              label: forMatNum(_j),
              value: forMatNum(_j)
            });
          }
        }
      } else {
        for (var _j2 = 0; _j2 < 60; _j2 += minuteStep * 1) {
          minutes.push({
            label: forMatNum(_j2),
            value: forMatNum(_j2)
          });
        }
      }
      return minutes;
    }
  },
  //选择区间初始化
  range: {
    init: function init(start, end, value, flag) {
      var aToday = new Date();
      var tYear,
        tMonth,
        tDay,
        tHours,
        tMinutes,
        tSeconds,
        defaultVal = [];
      var initstartDate = new Date(start.toString());
      var endDate = new Date(end.toString());
      if (start > end) {
        initstartDate = new Date(end.toString());
        endDate = new Date(start.toString());
      }
      ;
      var startYear = initstartDate.getFullYear();
      var startMonth = initstartDate.getMonth() + 1;
      var endYear = endDate.getFullYear();
      var fyears = [],
        fmonths = [],
        fdays = [],
        tyears = [],
        tmonths = [],
        tdays = [],
        returnArr = [],
        startDVal = [],
        endDVal = [];
      startDVal = value[0].split("-");
      endDVal = value[1].split("-");
      var curMonth = flag ? startDVal[1] * 1 : startDVal[1] + 1;
      var totalDays = new Date(startYear, curMonth, 0).getDate();
      for (var s = startYear; s <= endYear; s++) {
        fyears.push(s + '');
      }
      ;
      for (var m = 1; m <= 12; m++) {
        fmonths.push(forMatNum(m));
      }
      ;
      for (var d = 1; d <= totalDays; d++) {
        fdays.push(forMatNum(d));
      }
      ;
      for (var _s4 = startDVal[0]; _s4 <= endYear; _s4++) {
        tyears.push(_s4 + '');
      }
      ;
      if (endDVal[0] > startDVal[0]) {
        for (var _m7 = 1; _m7 <= 12; _m7++) {
          tmonths.push(forMatNum(_m7));
        }
        ;
        for (var _d5 = 1; _d5 <= totalDays; _d5++) {
          tdays.push(forMatNum(_d5));
        }
        ;
      } else {
        for (var _m8 = startDVal[1]; _m8 <= 12; _m8++) {
          tmonths.push(forMatNum(_m8));
        }
        ;
        for (var _d6 = startDVal[2]; _d6 <= totalDays; _d6++) {
          tdays.push(forMatNum(_d6));
        }
        ;
      }
      ;
      defaultVal = [fyears.indexOf(startDVal[0]) == -1 ? 0 : fyears.indexOf(startDVal[0]), fmonths.indexOf(startDVal[1]) == -1 ? 0 : fmonths.indexOf(startDVal[1]), fdays.indexOf(startDVal[2]) == -1 ? 0 : fdays.indexOf(startDVal[2]), 0, tyears.indexOf(endDVal[0]) == -1 ? 0 : tyears.indexOf(endDVal[0]), tmonths.indexOf(endDVal[1]) == -1 ? 0 : tmonths.indexOf(endDVal[1]), tdays.indexOf(endDVal[2]) == -1 ? 0 : tdays.indexOf(endDVal[2])];
      return {
        fyears: fyears,
        fmonths: fmonths,
        fdays: fdays,
        tyears: tyears,
        tmonths: tmonths,
        tdays: tdays,
        defaultVal: defaultVal
      };
    },
    initStartDays: function initStartDays(year, month) {
      var totalDays = new Date(year, month, 0).getDate();
      var dates = [];
      for (var d = 1; d <= totalDays; d++) {
        dates.push(forMatNum(d));
      }
      ;
      return dates;
    },
    initEndYears: function initEndYears(curYear, startYear, endYear) {
      var years = [];
      for (var y = curYear; y <= endYear; y++) {
        years.push(forMatNum(y));
      }
      ;
      return years;
    },
    initEndMonths: function initEndMonths(curMonth) {
      var months = [];
      for (var m = curMonth * 1; m <= 12; m++) {
        months.push(forMatNum(m));
      }
      ;
      return months;
    },
    initEndDays: function initEndDays(curYear, curMonth, curDate, tYear, tMonth) {
      var totalDays = new Date(curYear, curMonth, 0).getDate();
      var days = [];
      for (var d = curDate * 1; d <= totalDays; d++) {
        days.push(forMatNum(d));
      }
      ;
      return days;
    },
    initToMonths: function initToMonths(curYear, curMonth, curDate, tYear) {
      var aDate = new Date(curYear, curMonth, curDate).getTime();
      var bDate = new Date(tYear, curMonth, curDate).getTime();
      var months = [];
      if (bDate - aDate > 0) {
        console.log(1);
        for (var m = 1; m <= 12; m++) {
          months.push(forMatNum(m));
        }
        ;
      } else {
        for (var _m9 = curMonth * 1; _m9 <= 12; _m9++) {
          months.push(forMatNum(_m9));
        }
        ;
      }
      return months;
    },
    initToDays: function initToDays(curYear, curMonth, curDate, tYear, tMonth) {
      var aDate = new Date(curYear, curMonth, curDate).getTime();
      var bDate = new Date(tYear, tMonth, curDate).getTime();
      var totalDays = new Date(tYear, tMonth, 0).getDate();
      var days = [];
      if (bDate - aDate > 0) {
        for (var d = 1; d <= totalDays; d++) {
          days.push(forMatNum(d));
        }
        ;
      } else {
        for (var _d7 = curDate * 1; _d7 <= totalDays; _d7++) {
          days.push(forMatNum(_d7));
        }
        ;
      }
      return days;
    }
  }
};
var _default = initPicker;
exports.default = _default;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1696:
/*!*************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/uParse/src/libs/html2json.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _wxDiscode = _interopRequireDefault(__webpack_require__(/*! ./wxDiscode */ 1697));
var _htmlparser = _interopRequireDefault(__webpack_require__(/*! ./htmlparser */ 1698));
/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 *
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {
    obj[items[i]] = true;
  }
  return obj;
}

// Block Elements - HTML 5
var block = makeMap('br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');
function removeDOCTYPE(html) {
  var isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}
function trimHtml(html) {
  return html.replace(/<!--.*?-->/gi, '').replace(/\/\*.*?\*\//gi, '').replace(/[ ]+</gi, '<').replace(/<script[^]*<\/script>/gi, '').replace(/<style[^]*<\/style>/gi, '');
}
function getScreenInfo() {
  var screen = {};
  wx.getSystemInfo({
    success: function success(res) {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    }
  });
  return screen;
}
function html2json(html, customHandler, imageProp, host) {
  // 处理字符串
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = _wxDiscode.default.strDiscode(html);
  // 生成node节点
  var bufArray = [];
  var results = {
    nodes: [],
    imageUrls: []
  };
  var screen = getScreenInfo();
  function Node(tag) {
    this.node = 'element';
    this.tag = tag;
    this.$screen = screen;
  }
  (0, _htmlparser.default)(html, {
    start: function start(tag, attrs, unary) {
      // node for this element
      var node = new Node(tag);
      if (bufArray.length !== 0) {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
      }
      if (block[tag]) {
        node.tagType = 'block';
      } else if (inline[tag]) {
        node.tagType = 'inline';
      } else if (closeSelf[tag]) {
        node.tagType = 'closeSelf';
      }
      node.attr = attrs.reduce(function (pre, attr) {
        var name = attr.name;
        var value = attr.value;
        if (name === 'class') {
          node.classStr = value;
        }
        // has multi attibutes
        // make it array of attribute
        if (name === 'style') {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(' ');
        }

        // if attr already exists
        // merge it
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            // already array, push to last
            pre[name].push(value);
          } else {
            // single value, make it array
            pre[name] = [pre[name], value];
          }
        } else {
          // not exist, put it
          pre[name] = value;
        }
        return pre;
      }, {});

      // 优化样式相关属性
      if (node.classStr) {
        node.classStr += " ".concat(node.tag);
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === 'inline') {
        node.classStr += ' inline';
      }

      // 对img添加额外数据
      if (node.tag === 'img') {
        var imgUrl = node.attr.src;
        imgUrl = _wxDiscode.default.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || ''
        });
        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }

      // 处理a标签属性
      if (node.tag === 'a') {
        node.attr.href = node.attr.href || '';
      }

      // 处理font标签样式属性
      if (node.tag === 'font') {
        var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
        var styleAttrs = {
          color: 'color',
          face: 'font-family',
          size: 'font-size'
        };
        if (!node.styleStr) node.styleStr = '';
        Object.keys(styleAttrs).forEach(function (key) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += "".concat(styleAttrs[key], ": ").concat(value, ";");
          }
        });
      }

      // 临时记录source资源
      if (node.tag === 'source') {
        results.source = node.attr.src;
      }
      if (customHandler.start) {
        customHandler.start(node, results);
      }
      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var _parent = bufArray[0] || results;
        if (_parent.nodes === undefined) {
          _parent.nodes = [];
        }
        _parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end: function end(tag) {
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) {
        console.error('invalid state: mismatch end tag');
      }

      // 当有缓存source资源时于于video补上src资源
      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }
      if (customHandler.end) {
        customHandler.end(node, results);
      }
      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      if (!text.trim()) return;
      var node = {
        node: 'text',
        text: text
      };
      if (customHandler.chars) {
        customHandler.chars(node, results);
      }
      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];
        if (parent.nodes === undefined) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    }
  });
  return results;
}
var _default = html2json;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 1697:
/*!*************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/uParse/src/libs/wxDiscode.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// HTML 支持的数学符号
function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '∀');
  str = str.replace(/&part;/g, '∂');
  str = str.replace(/&exist;/g, '∃');
  str = str.replace(/&empty;/g, '∅');
  str = str.replace(/&nabla;/g, '∇');
  str = str.replace(/&isin;/g, '∈');
  str = str.replace(/&notin;/g, '∉');
  str = str.replace(/&ni;/g, '∋');
  str = str.replace(/&prod;/g, '∏');
  str = str.replace(/&sum;/g, '∑');
  str = str.replace(/&minus;/g, '−');
  str = str.replace(/&lowast;/g, '∗');
  str = str.replace(/&radic;/g, '√');
  str = str.replace(/&prop;/g, '∝');
  str = str.replace(/&infin;/g, '∞');
  str = str.replace(/&ang;/g, '∠');
  str = str.replace(/&and;/g, '∧');
  str = str.replace(/&or;/g, '∨');
  str = str.replace(/&cap;/g, '∩');
  str = str.replace(/&cup;/g, '∪');
  str = str.replace(/&int;/g, '∫');
  str = str.replace(/&there4;/g, '∴');
  str = str.replace(/&sim;/g, '∼');
  str = str.replace(/&cong;/g, '≅');
  str = str.replace(/&asymp;/g, '≈');
  str = str.replace(/&ne;/g, '≠');
  str = str.replace(/&le;/g, '≤');
  str = str.replace(/&ge;/g, '≥');
  str = str.replace(/&sub;/g, '⊂');
  str = str.replace(/&sup;/g, '⊃');
  str = str.replace(/&nsub;/g, '⊄');
  str = str.replace(/&sube;/g, '⊆');
  str = str.replace(/&supe;/g, '⊇');
  str = str.replace(/&oplus;/g, '⊕');
  str = str.replace(/&otimes;/g, '⊗');
  str = str.replace(/&perp;/g, '⊥');
  str = str.replace(/&sdot;/g, '⋅');
  return str;
}

// HTML 支持的希腊字母
function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, 'Α');
  str = str.replace(/&Beta;/g, 'Β');
  str = str.replace(/&Gamma;/g, 'Γ');
  str = str.replace(/&Delta;/g, 'Δ');
  str = str.replace(/&Epsilon;/g, 'Ε');
  str = str.replace(/&Zeta;/g, 'Ζ');
  str = str.replace(/&Eta;/g, 'Η');
  str = str.replace(/&Theta;/g, 'Θ');
  str = str.replace(/&Iota;/g, 'Ι');
  str = str.replace(/&Kappa;/g, 'Κ');
  str = str.replace(/&Lambda;/g, 'Λ');
  str = str.replace(/&Mu;/g, 'Μ');
  str = str.replace(/&Nu;/g, 'Ν');
  str = str.replace(/&Xi;/g, 'Ν');
  str = str.replace(/&Omicron;/g, 'Ο');
  str = str.replace(/&Pi;/g, 'Π');
  str = str.replace(/&Rho;/g, 'Ρ');
  str = str.replace(/&Sigma;/g, 'Σ');
  str = str.replace(/&Tau;/g, 'Τ');
  str = str.replace(/&Upsilon;/g, 'Υ');
  str = str.replace(/&Phi;/g, 'Φ');
  str = str.replace(/&Chi;/g, 'Χ');
  str = str.replace(/&Psi;/g, 'Ψ');
  str = str.replace(/&Omega;/g, 'Ω');
  str = str.replace(/&alpha;/g, 'α');
  str = str.replace(/&beta;/g, 'β');
  str = str.replace(/&gamma;/g, 'γ');
  str = str.replace(/&delta;/g, 'δ');
  str = str.replace(/&epsilon;/g, 'ε');
  str = str.replace(/&zeta;/g, 'ζ');
  str = str.replace(/&eta;/g, 'η');
  str = str.replace(/&theta;/g, 'θ');
  str = str.replace(/&iota;/g, 'ι');
  str = str.replace(/&kappa;/g, 'κ');
  str = str.replace(/&lambda;/g, 'λ');
  str = str.replace(/&mu;/g, 'μ');
  str = str.replace(/&nu;/g, 'ν');
  str = str.replace(/&xi;/g, 'ξ');
  str = str.replace(/&omicron;/g, 'ο');
  str = str.replace(/&pi;/g, 'π');
  str = str.replace(/&rho;/g, 'ρ');
  str = str.replace(/&sigmaf;/g, 'ς');
  str = str.replace(/&sigma;/g, 'σ');
  str = str.replace(/&tau;/g, 'τ');
  str = str.replace(/&upsilon;/g, 'υ');
  str = str.replace(/&phi;/g, 'φ');
  str = str.replace(/&chi;/g, 'χ');
  str = str.replace(/&psi;/g, 'ψ');
  str = str.replace(/&omega;/g, 'ω');
  str = str.replace(/&thetasym;/g, 'ϑ');
  str = str.replace(/&upsih;/g, 'ϒ');
  str = str.replace(/&piv;/g, 'ϖ');
  str = str.replace(/&middot;/g, '·');
  return str;
}
function strcharacterDiscode(str) {
  // 加入常用解析
  str = str.replace(/&nbsp;/g, ' ');
  str = str.replace(/&ensp;/g, ' ');
  str = str.replace(/&emsp;/g, '　');
  str = str.replace(/&quot;/g, "'");
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8226;/g, '•');
  return str;
}

// HTML 支持的其他实体
function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, 'Œ');
  str = str.replace(/&oelig;/g, 'œ');
  str = str.replace(/&Scaron;/g, 'Š');
  str = str.replace(/&scaron;/g, 'š');
  str = str.replace(/&Yuml;/g, 'Ÿ');
  str = str.replace(/&fnof;/g, 'ƒ');
  str = str.replace(/&circ;/g, 'ˆ');
  str = str.replace(/&tilde;/g, '˜');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '–');
  str = str.replace(/&mdash;/g, '—');
  str = str.replace(/&lsquo;/g, '‘');
  str = str.replace(/&rsquo;/g, '’');
  str = str.replace(/&sbquo;/g, '‚');
  str = str.replace(/&ldquo;/g, '“');
  str = str.replace(/&rdquo;/g, '”');
  str = str.replace(/&bdquo;/g, '„');
  str = str.replace(/&dagger;/g, '†');
  str = str.replace(/&Dagger;/g, '‡');
  str = str.replace(/&bull;/g, '•');
  str = str.replace(/&hellip;/g, '…');
  str = str.replace(/&permil;/g, '‰');
  str = str.replace(/&prime;/g, '′');
  str = str.replace(/&Prime;/g, '″');
  str = str.replace(/&lsaquo;/g, '‹');
  str = str.replace(/&rsaquo;/g, '›');
  str = str.replace(/&oline;/g, '‾');
  str = str.replace(/&euro;/g, '€');
  str = str.replace(/&trade;/g, '™');
  str = str.replace(/&larr;/g, '←');
  str = str.replace(/&uarr;/g, '↑');
  str = str.replace(/&rarr;/g, '→');
  str = str.replace(/&darr;/g, '↓');
  str = str.replace(/&harr;/g, '↔');
  str = str.replace(/&crarr;/g, '↵');
  str = str.replace(/&lceil;/g, '⌈');
  str = str.replace(/&rceil;/g, '⌉');
  str = str.replace(/&lfloor;/g, '⌊');
  str = str.replace(/&rfloor;/g, '⌋');
  str = str.replace(/&loz;/g, '◊');
  str = str.replace(/&spades;/g, '♠');
  str = str.replace(/&clubs;/g, '♣');
  str = str.replace(/&hearts;/g, '♥');
  str = str.replace(/&diams;/g, '♦');
  str = str.replace(/&#39;/g, "'");
  return str;
}
function strDiscode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  return str;
}
function urlToHttpUrl(url, domain) {
  if (/^\/\//.test(url)) {
    return "https:".concat(url);
  } else if (/^\//.test(url)) {
    return "https://".concat(domain).concat(url);
  }
  return url;
}
var _default = {
  strDiscode: strDiscode,
  urlToHttpUrl: urlToHttpUrl
};
exports.default = _default;

/***/ }),

/***/ 1698:
/*!**************************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/uParse/src/libs/htmlparser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 *
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */
// Regular Expressions for parsing tags and attributes

var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
function makeMap(str) {
  var obj = {};
  var items = str.split(',');
  for (var i = 0; i < items.length; i += 1) {
    obj[items[i]] = true;
  }
  return obj;
}

// Empty Elements - HTML 5
var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr');

// Block Elements - HTML 5
var block = makeMap('address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video');

// Inline Elements - HTML 5
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr');

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');
function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var last = html;
  var stack = [];
  stack.last = function () {
    return stack[stack.length - 1];
  };
  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    var pos;
    if (!tagName) {
      pos = 0;
    } else {
      // Find the closest opened tag of the same type
      tagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos -= 1) {
        if (stack[pos] === tagName) break;
      }
    }
    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i -= 1) {
        if (handler.end) handler.end(stack[i]);
      }

      // Remove the open elements from the stack
      stack.length = pos;
    }
  }
  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();
    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }
    if (closeSelf[tagName] && stack.last() === tagName) {
      parseEndTag('', tagName);
    }
    unary = empty[tagName] || !!unary;
    if (!unary) stack.push(tagName);
    if (handler.start) {
      var attrs = [];
      rest.replace(attr, function genAttr(matches, name) {
        var value = arguments[2] || arguments[3] || arguments[4] || (fillAttrs[name] ? name : '');
        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\"') // "
        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }
  while (html) {
    chars = true;
    if (html.indexOf('</') === 0) {
      match = html.match(endTag);
      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(endTag, parseEndTag);
        chars = false;
      }

      // start tag
    } else if (html.indexOf('<') === 0) {
      match = html.match(startTag);
      if (match) {
        html = html.substring(match[0].length);
        match[0].replace(startTag, parseStartTag);
        chars = false;
      }
    }
    if (chars) {
      index = html.indexOf('<');
      var text = '';
      while (index === 0) {
        text += '<';
        html = html.substring(1);
        index = html.indexOf('<');
      }
      text += index < 0 ? html : html.substring(0, index);
      html = index < 0 ? '' : html.substring(index);
      if (handler.chars) handler.chars(text);
    }
    if (html === last) throw new Error("Parse Error: ".concat(html));
    last = html;
  }

  // Clean up any remaining tags
  parseEndTag();
}
var _default = HTMLParser;
exports.default = _default;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (!res) {
          resolve(res);
          return;
        }
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__D2CD216",
    appName: "达摩点餐海外版",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.36",
    uniCompilerVersion: "4.36",
    uniRuntimeVersion: "4.36",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined,
    isUniAppX: false
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__D2CD216",
      appName: "达摩点餐海外版",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      isUniAppX: false,
      uniPlatform: undefined || "mp-weixin",
      uniCompileVersion: "4.36",
      uniCompilerVersion: "4.36"
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"达摩点餐海外版","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2024 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"达摩点餐海外版","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"达摩点餐海外版","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"达摩点餐海外版","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"达摩点餐海外版","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!********************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/pages.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!****************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/siteinfo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDev = false;
var siteinfo = {
  isDev: isDev,
  "uniacid": "3",
  "acid": "2",
  "multiid": "0",
  "version": "1.0",
  "siteroot": "https://www.vdamo.com",
  //https://www.vdamo.com  http://212.64.23.83:8081
  // "siteroot": "https://ybv3.b-ke.cn", //wx8b3a52014e0b39e1 18
  "design_method": "3",
  "liffId": "2004473321-d7Wny8Rw",
  "facebookid": "819653516790587"
};
if (false) {} else {
  console.log('development');
}
module.exports = siteinfo;

/***/ }),

/***/ 31:
/*!*************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _index = _interopRequireDefault(__webpack_require__(/*! @/locale/index.js */ 32));
var util = {};
// 验证手机号
util.isTelCode = function (str) {
  /* var reg = /^(\d{8}|\d{11})$/;
  // /^[1]\d{10}$/
  return reg.test(str);
  console.log(reg.test(str)) */
  var result = str.length > 6;
  console.log(result);
  return result;
};
util.isEmail = function (str) {
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  console.log(reg.test(str));
  return reg.test(str);
};
util.nsswr = function (n) {
  return Math.floor(n * 100) / 100;
};
util.swnb = function (t) {
  if (!t) {
    uni.navigateBack({});
  } else {
    setTimeout(function () {
      uni.navigateBack({});
    }, t);
  }
};
util.stfn = function (fn) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  setTimeout(function () {
    fn();
  }, t);
};
util.jqzf = function (obj) {
  return obj.str.length <= obj.n ? obj.str : obj.str.substr(0, obj.n) + '...';
};
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    //月份
    "d+": this.getDate(),
    //日
    "h+": this.getHours(),
    //小时
    "m+": this.getMinutes(),
    //分
    "s+": this.getSeconds(),
    //秒
    "q+": Math.floor((this.getMonth() + 3) / 3),
    //季度
    "S": this.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};
util.formatTime = function (date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return [year, month, day].map(util.formatNumber).join('-') + ' ' + [hour, minute, second].map(util.formatNumber).join(':');
};
util.formatNumber = function (n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};
util.timeToDate = function (num) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "yyyy-MM-dd hh:mm";
  // return util.formatTime(new Date(num * 1000))
  return new Date(+num * 1000).format(fmt);
};
util.dateToTime = function (date) {
  return Math.round((date ? new Date(date.replace(/-/g, '/')) : new Date()).getTime() / 1000);
};
util.countDownTime = function (second) {
  // 总秒数
  var s = Math.floor(second),
    // 天数
    day = Math.floor(s / 3600 / 24),
    // 小时
    hr = Math.floor(s / 3600 % 24),
    // 分钟
    min = Math.floor(s / 60 % 60),
    // 秒
    sec = Math.floor(s % 60);
  return [day, hr, min, sec].map(util.formatNumber);
};
/**  获取数据类型 */
util.getType = function (obj) {
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    return 'array';
  } else if (obj === true || obj === false) {
    return 'boolean';
  } else if ((0, _typeof2.default)(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length) {
    return 'json';
  } else {
    return (0, _typeof2.default)(obj);
  }
};
util.failValue = function (v, k) {
  return v == undefined || v == null || v == 'undefined' || v == 'null' || v == '' || util.getType(v) == 'string' && v.trim() == '' || util.getType(v) == 'array' && v.length == 0 || !v || JSON.stringify(v) == '{}';
};
util.isFailParams = function (option) {
  var field = option.field;
  function fail(key) {
    uni.showModal({
      title: _index.default.t('modal.title'),
      content: option.tips && option.tips[key] ? option.tips[key] : key,
      showCancel: false,
      confirmText: _index.default.t('modal.confirm')
    });
    return false;
  }
  for (var k in field) {
    if (util.failValue(field[k], k)) {
      if (option.filter) {
        if (util.getType(option.filter) == 'string' && k != option.filter) {
          return fail(k);
        } else if (util.getType(option.filter) == 'array' && option.filter.indexOf(k) < 0) {
          return fail(k);
        }
      } else {
        return fail(k);
      }
    }
  }
  return true;
};
util.colorToRGB = function (color) {
  var color1, color2, color3;
  color = "" + color;
  if (typeof color !== "string") return;
  if (color.charAt(0) == "#") {
    color = color.substring(1);
  }
  if (color.length == 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  if (/^[0-9a-fA-F]{6}$/.test(color)) {
    color1 = parseInt(color.substr(0, 2), 16);
    color2 = parseInt(color.substr(2, 2), 16);
    color3 = parseInt(color.substr(4, 2), 16);
    return color1 + "," + color2 + "," + color3;
  }
};
util.ldColor = function (hex) {
  var lum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
};
function Rad(d) {
  return d * Math.PI / 180.0;
}
util.getDistance = function (lat1, lng1, lat2, lng2) {
  var radLat1 = Rad(lat1);
  var radLat2 = Rad(lat2);
  var a = radLat1 - radLat2;
  var b = Rad(lng1) - Rad(lng2);
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378137.0; // 取WGS84标准参考椭球中的地球长半径(单位:m)
  s = Math.round(s * 10000) / 10000;
  // console.log(s)
  if (s < 1000) {
    s = parseInt(s) + 'm';
  } else {
    s = (s / 1000).toFixed(2) + 'km';
  }
  return s;
};
util.settime = function (timestamp) {
  var arrTimestamp = (timestamp + '').split('');
  for (var start = 0; start < 13; start++) {
    if (!arrTimestamp[start]) {
      arrTimestamp[start] = '0';
    }
  }
  timestamp = arrTimestamp.join('') * 1;
  var minute = 1000 * 60,
    hour = minute * 60,
    day = hour * 24,
    halfamonth = day * 15,
    month = day * 30,
    now = new Date().getTime(),
    diffValue = now - timestamp;
  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return '不久前';
  }

  // 计算差异时间的量级
  var monthC = diffValue / month,
    weekC = diffValue / (7 * day),
    dayC = diffValue / day,
    hourC = diffValue / hour,
    minC = diffValue / minute;

  // 数值补0方法
  var zero = function zero(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  // 使用
  if (weekC >= 1) {
    return function () {
      var date = new Date(timestamp),
        nowYear = new Date().getFullYear();
      if (weekC >= 1 && nowYear == date.getFullYear()) {
        return zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
      } else {
        return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
      }
    }();
  } else if (monthC >= 1) {
    return parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return parseInt(minC) + "分钟前";
  }
  return '刚刚';
};
util.DiffTime = function (start_time, end_time) {
  if (start_time.toString().length > 10) {
    start_time = parseInt(start_time / 1000);
    end_time = parseInt(end_time / 1000);
  }
  var startTime = 0,
    endTime = 0;
  if (start_time < end_time) {
    startTime = start_time;
    endTime = end_time;
  } else {
    startTime = end_time;
    endTime = start_time;
  }
  //
  var timeDiff = endTime - startTime,
    year,
    month,
    day,
    hour,
    minute,
    second;
  year = Math.floor(timeDiff / 86400 / 365);
  timeDiff = timeDiff % (86400 * 365);
  month = Math.floor(timeDiff / 86400 / 30);
  timeDiff = timeDiff % (86400 * 30);
  day = Math.floor(timeDiff / 86400);
  timeDiff = timeDiff % 86400;
  hour = Math.floor(timeDiff / 3600);
  timeDiff = timeDiff % 3600;
  minute = Math.floor(timeDiff / 60);
  timeDiff = timeDiff % 60;
  second = timeDiff;
  return [year, month, day, hour, minute, second];
};
util.deepCopy = function (e) {
  return JSON.parse(JSON.stringify(e));
};
util.getUrlParams = function (url) {
  var params = url.indexOf('#') > -1 ? url.split('#')[0].split("?")[1] : url.split("?")[1];
  var reg = /&?([^&]+)/g;
  var res = null,
    arr = [];
  var map = Object.create(null);
  while (res = reg.exec(params)) {
    var paramEntry = res[1].split("=");
    map[paramEntry[0]] = paramEntry[1];
    arr.push(paramEntry[0]);
  }
  map.qarr = arr;
  return map;
};
util.groupArr = function (array) {
  var arr1 = [],
    arr2 = [];
  for (var i in array) {
    if (i % 2 == 0) {
      arr1.push(array[i]);
    } else {
      arr2.push(array[i]);
    }
  }
  return [arr1, arr2];
};
util.getOptions = function (op, _ref) {
  var key = _ref.key,
    q1 = _ref.q1,
    q2 = _ref.q2;
  var id;
  if (op[key]) {
    // console.log(op, op[key])
    id = op[key];
  } else if (op.scene) {
    id = decodeURIComponent(op.scene);
  } else if (op.q) {
    id = util.getUrlParams(decodeURIComponent(op.q))[key];
  } else if (q2) {
    id = q2;
  } else {
    id = q1;
  }
  // console.log(q1, q2, id)
  return id;
};
util.throttle = function (fn, interval) {
  var enterTime = 0; //触发的时间
  var gapTime = interval || 300; //间隔时间
  return function () {
    var context = this,
      backTime = new Date(); //第一次函数return即触发的时间
    // console.log(this)
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime; //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
};

util.debounce = function (fn, interval) {
  var timer;
  var gapTime = interval || 1000; //间隔时间，如果interval不传，则默认1000ms
  return function () {
    var _arguments = arguments,
      _this = this;
    clearTimeout(timer);
    // var context = this;
    // var args = arguments; //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(_this, _arguments);
    }, gapTime);
  };
};
util.hideNum = function (tel) {
  return tel.substr(0, Math.floor((tel.length - 4) / 2)) + '****' + tel.substr(Math.floor((tel.length - 4) / 2) + 4);
};
util.hexToRgba = function (hex, opacity) {
  //16进制颜色转rgba
  return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
};
util.formatLocation = function (longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }
  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);
  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  };
};
util.formatTime = function (time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }
  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;
  return [hour, minute, second].map(function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  }).join(':');
};
util.sB64 = function (f, bs) {
  uni.getFileSystemManager().writeFile({
    filePath: f,
    data: bs,
    encoding: 'base64',
    success: function success(res) {
      uni.saveImageToPhotosAlbum({
        filePath: f,
        success: function success(ress) {
          console.log('success', ress);
          uni.showToast({
            title: '已经保存到系统相册',
            icon: 'none'
          });
        },
        fail: function fail(errr) {
          console.log('errr', errr);
          uni.showToast({
            title: errr.errMsg,
            icon: 'none'
          });
        }
      });
    },
    fail: function fail(err) {
      console.log(err);
    }
  });
};
var _default = util;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 32:
/*!*************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/locale/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 33));
var _zh = _interopRequireDefault(__webpack_require__(/*! ./zh.json */ 34));
var _th = _interopRequireDefault(__webpack_require__(/*! ./th.json */ 35));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vueI18n = _interopRequireDefault(__webpack_require__(/*! vue-i18n */ 36));
//英语语言包

_vue.default.use(_vueI18n.default);
var lang = uni.getStorageSync('language') || 'en';
var i18nConfig = new _vueI18n.default({
  locale: lang,
  // 设置默认语言
  messages: {
    en: _en.default,
    zh: _zh.default,
    th: _th.default
  }
});
var i18n = new _vueI18n.default(i18nConfig);
var _default = i18n;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 33:
/*!************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/locale/en.json ***!
  \************************************************/
/*! exports provided: common, pagetitle, modal, my-agree, drag-btn, tabbar, cartbar, in-cart-popup, cart-popup, product-modal, tc-modal, m-info, shop-notice, shop-select, mr-code, dmf, goods, pay_order, detail, pay-order, check-shop, check-time, self-fetch-addres, take-out-addres, check-save, check-point, discounts, waiter, check-goods, check-notes, order-index, order-list, pay, order-detail, o-out-btn, o-status, o-btn, o-discount, o-in-btn, o-info, my, s-h1, s-h2, my_property, in_goods, in_goods_components, g-table, bz, promptpay, my-addres, integral, lineup, my-other, my-signin, my-vip, other-coupon, wifi, chooseAvatar, other-reserve, recharge, sq-btn, login, password_reset, registration, pointdl, address, my-coupon, refunddl, privacy, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"common\":{\"noOrdersYet\":\"No orders yet\",\"uni.app.quit\":\"Press again to quit the application\",\"uni.async.error\":\"Connection timeout, tap the screen to retry\",\"uni.showActionSheet.cancel\":\"Cancel\",\"uni.showToast.unpaired\":\"Please note that showToast must be paired with hideToast\",\"uni.showLoading.unpaired\":\"Please note that showLoading must be paired with hideLoading\",\"uni.showModal.cancel\":\"Cancel\",\"uni.showModal.confirm\":\"Confirm\",\"uni.chooseImage.cancel\":\"Cancel\",\"uni.chooseImage.sourceType.album\":\"Choose from Album\",\"uni.chooseImage.sourceType.camera\":\"Take Photo\",\"uni.chooseVideo.cancel\":\"Cancel\",\"uni.chooseVideo.sourceType.album\":\"Choose from Album\",\"uni.chooseVideo.sourceType.camera\":\"Record Video\",\"uni.previewImage.cancel\":\"Cancel\",\"uni.previewImage.button.save\":\"Save Image\",\"uni.previewImage.save.success\":\"Image saved to album successfully\",\"uni.previewImage.save.fail\":\"Failed to save image to album\",\"uni.setClipboardData.success\":\"Content copied\",\"uni.scanCode.title\":\"Scan Code\",\"uni.scanCode.album\":\"Album\",\"uni.scanCode.fail\":\"Recognition failed\",\"uni.scanCode.flash.on\":\"Tap to turn on flashlight\",\"uni.scanCode.flash.off\":\"Tap to turn off flashlight\",\"uni.startSoterAuthentication.authContent\":\"Fingerprint recognition in progress...\",\"uni.picker.done\":\"Done\",\"uni.picker.cancel\":\"Cancel\",\"uni.video.danmu\":\"Danmu\",\"uni.video.volume\":\"Volume\",\"uni.button.feedback.title\":\"Feedback\",\"uni.button.feedback.send\":\"Send\"},\"pagetitle\":{\"Membership\":\"Membership\",\"personalcenter\":\"Personal Center\"},\"modal\":{\"title\":\"Warm Reminder\",\"cancelText\":\"Cancel\",\"confirmText\":\"Confirm\",\"return_table\":\"Back to Table\",\"choose_language\":\"Choose Language\",\"chinese\":\"中文\",\"english\":\"English\",\"confirm\":\"Confirm\",\"thai\":\"ไทย\",\"authorization_failed\":\"Authorization failed\",\"year\":\"Year\",\"month\":\"Month\",\"day\":\"Day\",\"hour\":\"Hour\",\"minute\":\"Minute\",\"second\":\"Second\",\"loading_complete\":\"Loading complete\",\"loading\":\"Loading\",\"save\":\"Save\",\"select_date\":\"Select Date\"},\"my-agree\":{\"i_have_read_and_agree\":\"I have read and agree\"},\"drag-btn\":{\"Member Rights\":\"Merbership Benefits\",\"Sales Promotion\":\"Promotions\",\"Coupon\":\"Coupon\",\"stamp cards\":\" Stamp Card\",\"Scan the QR\":\"Scan the QR\",\"address\":\"My Address\",\"Service\":\"Help Center\",\"Contact Us\":\"Contact Us\",\"Policy\":\"Policy\",\"Code\":\"Code\",\"Language\":\"Language\",\"merchant_on_break\":\"The merchant is currently on break, and this feature is unavailable.\",\"receive_gifts\":\"to Receive Gifts\"},\"tabbar\":{\"home\":\"home\",\"goods\":\"Menu\",\"order\":\"order\",\"user\":\"user\",\"my\":\"Me\"},\"cartbar\":{\"total_discount\":\"Total Discount\",\"yuan\":\"Yuan\",\"additional_delivery_fee\":\"Additional Delivery Fee\",\"proceed_to_checkout\":\"Checkout\",\"discount_applied\":\"Discount Applied\"},\"in-cart-popup\":{\"total_discount\":\"Total Discount\",\"delivery\":\"Delivery\",\"yuan\":\"Yuan\",\"additional_delivery_fee\":\"Additional Delivery Fee\",\"clear\":\"Clear\",\"selected_items\":\"Selected Items\",\"packaging_fee\":\"Packaging Fee\",\"pick_up\":\"Pick Up\",\"confirm_cart_clear\":\"Confirm to Clear Cart\",\"discount_applied\":\"Discount Applied\",\"service_fee\":\"Service Fee\"},\"cart-popup\":{\"total_discount\":\"Total Discount\",\"delivery\":\"Delivery\",\"yuan\":\"Yuan\",\"additional_delivery_fee\":\"Additional Delivery Fee\",\"clear\":\"Clear\",\"selected_items\":\"Selected Items\",\"packaging_fee\":\"Packaging Fee\",\"pick_up\":\"Pick Up\",\"confirm_cart_clear\":\"Confirm to Clear Cart\",\"discount_applied\":\"Discount Applied\"},\"product-modal\":{\"portion\":\"Portion\",\"inventory\":\"Inventory\",\"select_required_add_ons\":\"Select Required Add-Ons\",\"member_price\":\"Member Price\",\"mandatory\":\"Mandatory\",\"this_product\":\"This Product\",\"exclusive\":\"Exclusive\",\"specification\":\"Specification\",\"attributes\":\"Attributes\",\"minimum_portion_purchase\":\"Minimum Portion Purchase\",\"sold_out\":\"Sold Out\",\"add_to_bag\":\"Add to Bag\",\"has\":\"Has\",\"from\":\"From\",\"no_less_possible\":\"No Less Possible\",\"buy_now\":\"Buy Now\",\"product_purchase_limit\":\"Product Purchase Limit\"},\"tc-modal\":{\"portion\":\"Portion\",\"inventory\":\"Inventory\",\"select_required_add_ons\":\"Select Required Add-Ons\",\"member_price\":\"Member Price\",\"mandatory\":\"Mandatory\",\"this_product\":\"This Product\",\"exclusive\":\"Exclusive\",\"specification\":\"Specification\",\"attributes\":\"Attributes\",\"minimum_portion_purchase\":\"Minimum Portion Purchase\",\"sold_out\":\"Sold Out\",\"selected_ok\":\"Selected OK\",\"has\":\"Has\",\"from\":\"From\",\"no_less_possible\":\"No Less Possible\",\"buy_now\":\"Buy Now\",\"product_purchase_limit\":\"Product Purchase Limit\"},\"m-info\":{\"membercode\":\"code\",\"balance\":\"Balance\",\"points\":\"Points\",\"coupon\":\"My coupon\",\"welcome, please log in\":\"welcome, please log in\",\"Become a member and enjoy more membership benefits\":\"Become a member and enjoy more membership benefits\",\"Login\":\"Login\"},\"shop-notice\":{\"welcome\":\"Welcome\",\"pleased_to_serve\":\"Pleased to serve you\",\"view\":\"View\",\"full_reduction\":\"Full Reduction\",\"delivery_fee\":\"Delivery Fee\",\"mytian_delivery\":\"Mytian Delivery\",\"store_information\":\"Store Information\",\"full\":\"Full\",\"makeco_delivery\":\"Makeco Delivery\",\"starting_delivery\":\"Starting Delivery\",\"contact_information\":\"Contact Information\",\"call_now\":\"Call Now\",\"delivery_service_provided\":\"Delivery Service Provided\",\"instant_discount\":\"Instant Discount\",\"click_to_collapse\":\"Click to Collapse\",\"items\":\"Items\",\"discount\":\"Discount\",\"merchant_self_delivery\":\"Merchant Self Delivery\",\"more\":\"More\",\"wsb_delivery\":\"WSB Delivery\",\"reduce\":\"Reduce\",\"delivery_range_weather_influence\":\"Delivery Range Influenced by Weather\",\"store_delivery_range\":\"Store Delivery Range\",\"currency\":\"THB\",\"delivery\":\"Delivery\",\"store_by\":\"This Store is Provided By\",\"business_hours\":\"Business Hours\",\"real_time_delivery_range\":\"Real-Time Delivery Range\",\"new_customer_discount\":\"New Customer Discount\",\"view_store_services\":\"View Store Services\",\"store_address\":\"Store Address\",\"next_day\":\"Next Day\",\"every_full\":\"Every Full\",\"maximum_reduction\":\"Maximum Reduction\",\"within_kilometers\":\"Within Kilometers\"},\"shop-select\":{\"resting\":\"Resting\",\"place_order\":\"Place an order\",\"cancel\":\"Cancel\",\"delivery_available\":\"Delivery available\",\"pick_up_available\":\"Pick up available\",\"map\":\"Map\",\"locating\":\"Locating\",\"expand\":\"Expand\",\"frequent\":\"Frequent\",\"store\":\"Store\",\"far_from_store\":\"Your current location is far from the store\",\"accept_reservations\":\"Accept reservations\",\"search\":\"Search\",\"favorite_store\":\"Favorite store\",\"collapse\":\"Collapse\",\"no_relevant_stores\":\"Temporarily unable to find relevant stores\",\"view_map\":\"View map\",\"next_day\":\"Next day\",\"confirm_switch_to\":\"Confirm switch to\",\"confirm_switch_to_store\":\"Confirm switch to this store?\",\"busy\":\"Busy\",\"open\":\"Open\",\"enter_search_content\":\"Please enter search content\",\"enter_store_name\":\"Please enter the store name\",\"distance\":\"\",\"select_store\":\"Select store\",\"store_query\":\"The store?\"},\"mr-code\":{\"membership_code\":\"Membership Code\",\"membership_card_number\":\"Membership Card Number\",\"coupon\":\"Coupon\",\"use_wechat_pay\":\"Use WeChat Pay\",\"points\":\"Points\",\"balance\":\"Balance\",\"wechat_user\":\"WeChat User\",\"auto_update_seconds\":\"The membership code automatically updates every 30 seconds, please use it for in-store purchases.\",\"viewMembershipBenefits\":\"View Membership Benefits\"},\"dmf\":{\"pay_to_merchant\":\"Pay to Merchant\",\"name\":\"Name\",\"amount\":\"Amount\",\"enter_amount\":\"Enter Amount\",\"total_discount\":\"Total Discount\",\"amount_paid\":\"Amount Paid\",\"remarks\":\"Remarks\",\"modify\":\"Modify\",\"add_remark\":\"Add Remarks\",\"pay_bill\":\"Pay Bill\",\"please_enter_amount\":\"Please Enter Amount\",\"placing_order\":\"Placing Order\"},\"goods\":{\"select_specifications\":\"Select\",\"exclusive\":\"Exclusive\",\"portion\":\"Portion\",\"member_price\":\"Member Price\",\"minimum_purchase\":\"Minimum Purchase\",\"limit_per_person\":\"Limit Per Person\",\"limit_per_order\":\"Limit Per Order\",\"daily_limit\":\"Daily Limit\",\"from\":\"From\",\"sales_volume\":\"Sales Volume\",\"Pickup\":\"PickUp\",\"takeout\":\"TakeOut\",\"distanceyou\":\"distance from you\",\"store_switching_disabled\":\"Store Switching is Disabled\",\"sold_out\":\"Sold Out\",\"starting_from\":\"Starting from\",\"required\":\"Required\",\"privacy_policy_notice\":\"Privacy Policy Notice\",\"thank_you_for_your_support_and_attention\":\"Thank you for your support and attention\",\"we_are_fully_aware_of_the_importance_of_personal_information_to_you\":\"We are fully aware of the importance of personal information to you\",\"we_will_comply_with_relevant_laws_and_regulations\":\"We will comply with relevant laws and regulations\",\"to_ensure_that_your_personal_information_is_safe_and_controllable\":\"to ensure that your personal information is safe and controllable\",\"please_click_before_using_this_product\":\"Please click before using this product\",\"privacy_agreement\":\"Privacy Agreement\",\"and_read_carefully\":\"and read carefully\",\"if_you_agree\":\"If you agree\",\"to_all_contents_of\":\"to all contents of\",\"please_click\":\"please click\",\"agree_and_continue\":\"Agree and Continue\",\"to_start_using_our_services\":\"to start using our services\",\"if_you_do_not_agree\":\"If you do not agree\",\"unfortunately_we_will_not_be_able_to_continue_to\":\"unfortunately we will not be able to continue to\",\"provide_services_to_you\":\"provide services to you\",\"login_and_order\":\"Login and order\",\"order_without_logging_in\":\"Order without logging in\",\"scan_to_order\":\"Scan to order\",\"user_agreement\":\"User Agreement\",\"call_and_pick_up_service_not_activated_yet\":\"Call-and-pick-up service not activated yet\",\"notification\":\"Notification\",\"no_table_information_obtained_or_beyond_merchant_range\":\"No table information obtained or beyond merchant range\",\"beyond_merchant_range\":\"Beyond merchant range\",\"please_add_mandatory_items\":\"Please add mandatory items\",\"people\":\"people\",\"actual_spending_reaches\":\"actual spending reaches\",\"includes\":\"includes\",\"gift_after_order_completion\":\"You can receive a gift after completing the order\",\"view_gift\":\"View gift\",\"valid_until\":\"Valid until\",\"gift_balance\":\"Gift balance\",\"gift_points\":\"Gift points\",\"limited_gift_availability\":\"Gift availability is limited and subject to actual distribution\",\"got_it\":\"Got it\",\"store_closed_try_another\":\"Store closed, try another location.\",\"enter_product_name_to_search\":\"Enter product name to search\",\"search\":\"Search\",\"search_history\":\"Search History\",\"confirm_clear_search_history\":\"Are you sure you want to clear search history?\",\"please_enter_search_content\":\"Please enter search content\",\"store_no_order_channel\":\"The store currently has no ordering channels\",\"add_required_items\":\"Please add the required items\"},\"pay_order\":{\"total_discount\":\"Total Discount\",\"subtotal\":\"Subtotal\",\"submit_order\":\"Submit Order\",\"placing_order\":\"Placing Order\",\"are_you_sure_you_want_to_call_the_waiter\":\"Are you sure you want to call the waiter?\",\"vatMoney\":\"VAT\",\"serviceMoney\":\"Service Fee\",\"taxIncluded\":\"Tax(Included)\",\"totaltax\":\"TotalTax\"},\"detail\":{\"loading\":\"Loading\",\"are_you_sure_you_want_to_cancel_the_order\":\"Are you sure you want to cancel the order?\",\"are_you_sure_you_want_to_apply_for_a_refund\":\"Are you sure you want to apply for a refund?\",\"are_you_sure_you_want_to_confirm_receipt\":\"Are you sure you want to confirm receipt?\"},\"pay-order\":{\"total_discount\":\"Total Discount\",\"subtotal\":\"Subtotal\",\"submit_order\":\"Submit Order\",\"pick_up\":\"Pick Up\",\"takeout\":\"Takeout\",\"please_select_dining_option\":\"Please Select Dining Option\",\"please_select_appointment_time\":\"Please Select Appointment Time\",\"please_select_address\":\"Please Select Address\",\"please_enter_contact_number\":\"Please Enter Contact Number\",\"placing_order\":\"Placing Order\"},\"check-shop\":{\"please_confirm_pickup_store\":\"Please Confirm Pickup Store\",\"distance_from_you\":\"Distance From You\",\"change_store\":\"Change Store\",\"this_one\":\"This One\"},\"check-time\":{\"select_appointment_time\":\"Select Appointment Time\",\"hello\":\"Hello\",\"when_to_pick_up\":\"When to Pick Up?\",\"pickup_store\":\"Pickup Store\",\"confirm\":\"Confirm\",\"immediate_pickup\":\"Immediate Pickup\",\"immediate_in-store_pickup\":\"Immediate In-store Pickup\",\"immediate_delivery\":\"Immediate Delivery\",\"start_making_immediately\":\"Start Making Immediately\",\"schedule_pickup\":\"Schedule Pickup\",\"as_per_appointment_time\":\"As Per Appointment Time\",\"in-store_pickup\":\"In-store Pickup\",\"schedule_delivery\":\"Schedule Delivery\",\"start_making\":\"Start Making\",\"today\":\"Today\",\"thursday\":\"Thursday\",\"tomorrow\":\"Tomorrow\",\"friday\":\"Friday\",\"day_after_tomorrow\":\"Day After Tomorrow\",\"saturday\":\"Saturday\"},\"self-fetch-addres\":{\"distance_from_you\":\"Distance From You\",\"contact_phone\":\"Contact Phone\",\"autofill\":\"Autofill\",\"order_pickup_time\":\"Order Pickup Time\",\"pick_up_order_now\":\"Pick Up Order Now\",\"takeout\":\"Takeout\",\"dine_in\":\"Dine In\"},\"take-out-addres\":{\"please_select_delivery_address\":\"Please Select Delivery Address\",\"delivery_time\":\"Delivery Time\",\"deliver_asap\":\"Deliver ASAP\"},\"check-save\":{\"total\":\"Total\",\"estimated_earnings\":\"Estimated Earnings\",\"points\":\"Points\",\"growth_value\":\"Growth Value\",\"order_now\":\"Order Now\"},\"check-point\":{\"collect-points\":\"Collect\",\"current-order-can-obtain\":\"Current order can obtain\",\"discounted-products-can-participate-in-collecting-points\":\"Discounted products can participate in collecting points\"},\"discounts\":{\"package\":\"Package\",\"packing-fee\":\"Packing Fee\",\"delivery\":\"Delivery\",\"delivery-fee\":\"Delivery Fee\",\"reduce\":\"Reduce\",\"delivery-fee-discount\":\"Delivery Fee Discount\",\"full-reduction-promotion\":\"Full Reduction Promotion\",\"new\":\"New\",\"new-customer-discount\":\"New Customer Discount\",\"member\":\"VIP\",\"member-discount\":\"Discount\",\"delivery-fee-full-reduction\":\"Delivery Fee Full Reduction\",\"coupon\":\"Coupon\",\"available-coupons\":\"Available Coupons\",\"available\":\"Available\",\"no-available\":\"No Available\",\"coupons\":\"Discount\"},\"waiter\":{\"waiter\":\"Waiter\"},\"check-goods\":{\"to-be-ordered\":\"To Be Ordered\",\"ordered\":\"Ordered\",\"paid\":\"Paid\",\"service-fee\":\"Service Fee\",\"fold-all\":\"Fold All\",\"view-all\":\"View All\"},\"check-notes\":{\"notes\":\"Notes\",\"please-enter-your-special-requests\":\"Please enter your special requests\"},\"order-index\":{\"store_order\":\"Store\",\"stored_value_order\":\"Value\",\"pay_the_bill_order\":\"Pay\",\"coupon_package_order\":\"Package\",\"confirm_cancel_order\":\"Are you sure you want to cancel the order?\",\"confirm_apply_refund\":\"Are you sure you want to apply for a refund?\",\"manual_sliding_prohibited\":\"Manual sliding prohibited\"},\"order-list\":{\"total\":\"Total\",\"pieces\":\"Pieces\",\"amount\":\"Amount\",\"order_number\":\"Order Number\",\"cancel_order\":\"Cancel\",\"pay_now\":\"Pay Now\",\"apply_for_refund\":\"Apply for Refund\",\"order_again\":\"Order Again\",\"closed\":\"Closed\",\"pending_payment\":\"Pending Payment\",\"paid\":\"Paid\",\"order_pending\":\"Order Pending\",\"in_production\":\"In Production\",\"order_accepted\":\"Order Accepted\",\"production_completed\":\"Production Completed\",\"pending_delivery\":\"Pending Delivery\",\"in_delivery\":\"In Delivery\",\"completed\":\"Completed\",\"refunded\":\"Refunded\",\"remaining\":\"Remaining\",\"minutes\":\"Minutes\"},\"pay\":{\"confirm_payment\":\"Confirm Payment\",\"available\":\"Available\",\"balance_payment\":\"Balance Payment\",\"wechat_payment\":\"WeChat Payment\",\"alipay_payment\":\"Alipay Payment\",\"payment_successful\":\"Payment Successful\",\"payment_failed\":\"Payment Failed\",\"pay\":\"pay\"},\"order-detail\":{\"order_details\":\"Order Details\",\"closed\":\"Closed\",\"pending_payment\":\"Pending Payment\",\"paid_awaiting_order\":\"Paid, Awaiting Order Acceptance\",\"order_accepted_in_preparation\":\"Order Accepted, In Preparation\",\"preparation_complete_awaiting_delivery\":\"Preparation Complete, Awaiting Delivery\",\"in_delivery\":\"In Delivery\",\"completed\":\"Completed\",\"apply_for_refund\":\"Apply for Refund\",\"refunded\":\"Refunded\",\"if_refund_needed\":\"If Refund Needed\",\"please_call_store\":\"Please Call the Store\",\"loading\":\"Loading\",\"confirm_cancel_order\":\"Are you sure you want to cancel the order?\",\"confirm_apply_refund\":\"Are you sure you want to apply for a refund?\",\"confirm_receipt\":\"Are you sure you want to confirm receipt?\",\"confirm_complete_order\":\"Are you sure you want to complete the order?\",\"confirm_call_waiter\":\"Are you sure you want to call the waiter?\"},\"o-out-btn\":{\"cancel_order\":\"Cancel\",\"pay_now\":\"Pay\",\"apply_for_refund_btn\":\"Refund\",\"confirm_receipt_btn\":\"Receipt\",\"order_again\":\"Again\"},\"o-status\":{\"order_placed\":\"Order Placed\",\"dining\":\"Dining\",\"completed_status\":\"Completed\",\"in_preparation\":\"In Preparation\",\"please_pick_up_order\":\"Please Pick Up Order\",\"awaiting_order_acceptance\":\"Awaiting Order Acceptance\",\"awaiting_delivery_status\":\"Awaiting Delivery\",\"in_delivery_status\":\"In Delivery\",\"delivered\":\"Delivered\"},\"o-btn\":{\"please_wait\":\"Please Wait\",\"waiting_for_waiter\":\"Waiting for Waiter to Accept Order\",\"order_successful\":\"Order Successful\",\"sit_and_eat\":\"Sit and Eat\",\"product_in_preparation\":\"Product in Preparation\",\"product_preparation_complete\":\"Product Preparation Complete\",\"thank_you_for_visiting\":\"Thank You for Visiting\",\"refund_successful\":\"Refund Successful\",\"order_closed\":\"Order Closed\",\"order_canceled\":\"Order Canceled\",\"order_awaiting_payment\":\"Order Awaiting Payment\",\"please_wait_store_order\":\"Please Wait, Waiting for Store to Accept Order\",\"product_preparation_completed_waiting_for_rider\":\"Product Preparation Completed, Waiting for Rider to Accept Order\",\"pickup_number\":\"Pickup Number\",\"table_information\":\"Table Information\",\"serial_number\":\"Serial Number\",\"cancel_order\":\"Cancel\",\"pay_immediately\":\"Pay Immediately\",\"apply_for_refund\":\"Apply for Refund\",\"confirm_receipt\":\"Confirm Receipt\",\"order_again\":\"Order Again\"},\"o-discount\":{\"navigation\":\"Goto\",\"service_fee\":\"Service Fee\",\"collapse_all\":\"Collapse All\",\"view_all\":\"View All\",\"packing_fee\":\"Packing Fee\",\"delivery_fee\":\"Delivery Fee\",\"full_discount\":\"Full Discount\",\"new_customer_discount\":\"New Customer Discount\",\"order_count1\":\"Order for the\",\"order_count2\":\"time\",\"discount_applied\":\"Discount Applied\",\"total\":\"Total\"},\"o-in-btn\":{\"pending_payment_in_btn\":\"Pending Payment\",\"complete_order_in_btn\":\"Complete Order\",\"continue_adding_dishes\":\"Add\",\"contact_waiter_for_payment\":\"Call waiter to pay\",\"pay_immediately_in_btn\":\"Pay\",\"cancel_order\":\"Cancel\"},\"o-info\":{\"delivery_information\":\"Delivery Information\",\"delivery_address\":\"Delivery Address\",\"delivery_mode\":\"Delivery Mode\",\"delivery_channel\":\"Delivery Channel\",\"rider_information\":\"Rider Information\",\"order_information\":\"Order Information\",\"order_number\":\"Order Number\",\"order_type\":\"Order Type\",\"dining_type\":\"Dining Type\",\"pick_up_time\":\"Pick-up Time\",\"expected_delivery_time\":\"Expected Delivery Time\",\"order_time\":\"Order Time\",\"payment_method\":\"Payment Method\",\"remarks_information\":\"Remarks Information\",\"copy\":\"Copy\",\"estimated\":\"Estimated\",\"pickup_number\":\"Pick-up number\",\"table_information\":\"Table information\",\"people_dining\":\"Dining\"},\"my\":{\"myorder\":\"My Purchases\",\"order\":\"order\",\"membercode\":\"code\",\"balance\":\"สมดุล\",\"points\":\"points\",\"coupon\":\"coupon\"},\"s-h1\":{\"wechat_user\":\"\",\"better_service_prompt\":\"For better service, please authorize login\",\"gain_more\":\"Gain\",\"unit\":\"units\",\"growth_value\":\"More units of growth value to upgrade to\",\"can_upgrade_to\":\"\",\"login\":\"Login\",\"register\":\"Register\",\"complete_profile\":\"Complete Profile\"},\"s-h2\":{\"wechat_user\":\"WeChat User\",\"become_member\":\"Become a Member\",\"enjoy_more_benefits\":\"Enjoy more member benefits\",\"gain_more\":\"Gain\",\"unit\":\"units\",\"growth_value\":\"Growth Value\",\"can_upgrade_to\":\"Can upgrade to\",\"login\":\"Login\",\"register\":\"Register\",\"complete_profile\":\"Complete Profile\"},\"my_property\":{\"my_assets\":\"My Assets\",\"points\":\"Points\",\"coupons\":\"Coupons\",\"balance\":\"Balance\",\"unused\":\"Unused\",\"points_repeated\":\"Points\",\"coupons_repeated\":\"Coupons\",\"balance_repeated\":\"Balance\"},\"in_goods\":{\"privacy_policy_prompt\":\"Privacy Policy Prompt\",\"privacy_desc\":\"Thank you for your support and attention. We understand the importance of personal information to you and will do our best to protect the security and control of your personal information in accordance with relevant laws and regulations. Before using this product, please click\",\"privacy_agreement\":\"\\\"Privacy Agreement\\\"\",\"read_carefully\":\"and read it carefully. If you agree to all the contents of the \\\"Privacy Agreement\\\", please click 'Agree and Continue' to start using our services. If you do not agree, unfortunately, we will not be able to continue to provide services to you.\",\"login_and_order\":\"Login and Order\",\"no_login_and_order\":\"No Login and Order\",\"scan_to_order\":\"Scan to Order\",\"number_calling_unavailable\":\"Number calling feature is currently unavailable\",\"unable_to_get_table_info\":\"Unable to get table information or out of merchant's range\",\"out_of_merchant_range\":\"Out of merchant's range\",\"add_required_items\":\"Please add required items\"},\"in_goods_components\":{\"view_all\":\"View All\",\"add_dish\":\"Add Dish\",\"table_number\":\"Table Number\",\"add_note\":\"Add Note\",\"place_order_now\":\"Order\",\"coupon\":\"Coupon\",\"discount_applied\":\"Discount Applied\",\"people\":\"People\",\"package\":\"Package\",\"confirm\":\"Confirm\",\"navigation\":\"Goto\",\"confirm_payment\":\"Payment\",\"characters\":\"Characters\",\"collapse_all\":\"Collapse All\",\"items\":\"Items\",\"cancel\":\"Cancel\",\"expected\":\"Expected\",\"order_number\":\"Order Number\",\"none\":\"None\",\"expected_to_gain\":\"Expected to Gain\",\"wait_to_eat\":\"Wait to Eat\",\"points\":\"Points\",\"ordering_store\":\"Ordering Store\",\"order_successful\":\"Order Successful\",\"pickup_time\":\"Pickup Time\",\"discount_offer\":\"Discount Offer\",\"continue_ordering\":\"Reorder\",\"total\":\"Total\",\"total_amount\":\"Total Amount\",\"payment_method\":\"Payment Method\",\"note_information\":\"Note Information\",\"dining_type\":\"Dining Type\",\"place_and_pay\":\"Place and Pay\",\"delivery_time\":\"Delivery Time\",\"discount\":\"Discount\",\"growth_value\":\"Growth Value\",\"order_type\":\"Order Type\",\"packaging_fee\":\"Packaging Fee\",\"copy\":\"Copy\",\"dine_in\":\"Dine In\",\"order_time\":\"Order Time\",\"new_customer_discount\":\"New Customer Discount\",\"new\":\"New\",\"dish_in_preparation\":\"Dish in Preparation\",\"take_away\":\"Take Away\",\"order_information\":\"Order Information\",\"enter_note\":\"Enter Note\"},\"g-table\":{\"welcome_to\":\"Welcome to\",\"hello\":\"Hello\",\"please_select_dining_number\":\"Select number\",\"table_number\":\"Table number\",\"people\":\"People\",\"start_ordering\":\"Start ordering\",\"please_enter_dining_number\":\"Please enter the dining number\",\"number_of_people\":\"Number of people\",\"please_enter\":\"Please enter\",\"cancel\":\"Cancel\",\"confirm\":\"Confirm\",\"other\":\"Other\",\"please_select_number_of_people\":\"Please select the number of people\",\"please_enter_number_of_people\":\"Please enter the number of people\",\"drink_together\":\"Drink together\",\"people_dining\":\"People dining\",\"please_enter_product_name\":\"Please enter the product name\",\"are_you_sure_to_call_waiter\":\"Are you sure you want to call the waiter?\",\"login_member\":\"Login member\",\"enjoy_more_exclusive_privileges\":\"Enjoy more exclusive privileges\",\"login\":\"Login\",\"change_shop\":\"Change shop\",\"select_shop_to_change\":\"Select the shop to change\",\"shop_name\":\"Shop name\",\"search\":\"Search\",\"username\":\"Username\",\"password\":\"Password\",\"forgot_password\":\"Forgot password\",\"remember_me\":\"Remember me\"},\"bz\":{\"please-enter-remarks\":\"Please Enter Remarks\",\"order-notes\":\"Order Notes\",\"upper-limit\":\"Upper Limit\",\"preferences-and-other-requirements\":\"Preferences and Other Requirements\",\"character\":\"Character\",\"quick-entry\":\"Quick Entry\",\"submit\":\"Submit\",\"characters\":\"Characters\"},\"promptpay\":{\"payment_info\":\"Payment Amount\",\"time_left\":\"Time Left\",\"minutes\":\"Minutes\",\"seconds\":\"Seconds\",\"scan_to_pay\":\"Please use PromptPay to scan the QR code for payment\",\"auto_redirect\":\"After a successful payment, the details page will automatically close and redirect to the 'Payment Successful' page\",\"note\":\"Note: PromptPay does not support refunds. For refunds, please contact the merchant.\"},\"my-addres\":{\"contact_person\":\"Name\",\"please_enter_name_of_recipient\":\"Please enter the name of the recipient\",\"gender\":\"Gender\",\"phone_number\":\"Phone Number\",\"please_enter_phone_number\":\"Please enter the phone number\",\"auto_fill\":\"Auto Fill\",\"delivery_address\":\"Delivery Address\",\"click_to_select\":\"Click to Select\",\"house_number\":\"House Number\",\"for_example\":\"For Example\",\"block\":\"Block\",\"building\":\"Building\",\"room\":\"Room\",\"select_label\":\"Select Label\",\"set_as_default_address\":\"Set as Default Address\",\"delete\":\"Delete\",\"save\":\"Save\",\"mr\":\"Mr.\",\"company\":\"Company\",\"ms\":\"Ms.\",\"home\":\"Home\",\"school\":\"School\",\"confirm_delete_address\":\"Confirm delete this address?\",\"missing_user\":\"Missing User\",\"please_enter_contact_person\":\"Please enter Name\",\"enter_phone_number\":\"Enter phone number\",\"please_select_address\":\"Please select address\",\"please_enter_house_number_details\":\"Please enter house number and other details\",\"please_select_label\":\"Please select label\",\"missing_address\":\"Missing Address\",\"please_enter_valid_phone_number\":\"Please enter a valid phone number\",\"save_successful\":\"Save Successful\",\"wechat_import\":\"WeChat Import\",\"add_new_address\":\"Add Address\",\"current_address_out_of_delivery_range\":\"Current address is out of delivery range\"},\"integral\":{\"please_select_delivery_address\":\"Please select delivery address\",\"total\":\"Total\",\"points\":\"Points\",\"confirm_redemption\":\"Confirm redemption\",\"please_select_store\":\"Please select store\",\"distance_from_you\":\"Distance from you\",\"contact_phone_number\":\"Contact phone number\",\"auto_fill\":\"Auto fill\",\"actual\":\"Actual\",\"coupon\":\"Coupon\",\"remaining\":\"Remaining\",\"redeem_coupon\":\"Redeem coupon\",\"redeem_balance\":\"Redeem balance\",\"original_price\":\"Original price\",\"sales\":\"Sales\",\"pieces\":\"Pieces\",\"remaining_pieces\":\"Remaining pieces\",\"product_details\":\"Product details\",\"redeem_now\":\"Redeem now\",\"confirm_redemption_of_product\":\"Confirm redemption of product\",\"hot\":\"Hot\",\"order_number\":\"Order number\",\"total_pieces\":\"Total pieces\",\"actual_payment\":\"Actual payment\",\"cancel_order\":\"Cancel\",\"pay_now\":\"Pay now\",\"apply_for_refund\":\"Apply for refund\",\"confirm_receipt\":\"Confirm receipt\",\"self_pickup_order\":\"Self-pickup order\",\"verification_code\":\"Verification code\",\"i_have_picked_up\":\"I have picked up\",\"all\":\"All\",\"pending_payment\":\"Pending payment\",\"pending_shipment\":\"Pending shipment\",\"pending_receipt\":\"Pending receipt\",\"completed\":\"Completed\",\"redemption_record\":\"Redemption record\",\"are_you_sure_to_cancel_order\":\"Are you sure to cancel the order?\",\"are_you_sure_to_apply_for_refund\":\"Are you sure to apply for a refund?\",\"are_you_sure_to_confirm_receipt\":\"Are you sure to confirm receipt?\",\"have_you_received_the_goods\":\"Have you received the goods?\",\"no_points_detail_yet\":\"No points detail yet\",\"details\":\"Details\",\"delivery_address\":\"Delivery address\",\"store_pickup_address\":\"Store pickup address\",\"purchase_quantity\":\"Purchase quantity\",\"product_type\":\"Product type\",\"physical_product\":\"Physical product\",\"balance\":\"Balance\",\"delivery_method\":\"Delivery method\",\"courier_delivery\":\"Courier delivery\",\"shipping_fee\":\"Shipping fee\",\"free_shipping\":\"Free shipping\",\"store_pickup\":\"Store pickup\",\"order_information\":\"Order information\",\"payment_time\":\"Payment time\",\"courier_name\":\"Courier name\",\"courier_tracking_number\":\"Courier tracking number\",\"payment_method\":\"Payment method\",\"order_details\":\"Order details\",\"courier_fee\":\"Courier fee\",\"please_select_address\":\"Please select address\",\"are_you_sure_to_redeem_product\":\"Are you sure to redeem the product?\",\"points_sign_in\":\"Points sign in\",\"points_record\":\"Points record\",\"points_details\":\"Points details\",\"points_rules\":\"Points rules\",\"no_products_available_for_redemption_in_current_category\":\"No products available for redemption in current category\",\"points_mall\":\"Points mall\",\"rules\":\"Rules\",\"shop\":\"shop\"},\"lineup\":{\"my_number\":\"My Number\",\"waiting_tables_ahead\":\"Waiting Tables Ahead\",\"table\":\"Table\",\"estimated_waiting_time\":\"Estimated Waiting Time\",\"minutes\":\"Minutes\",\"already_waited\":\"Already Waited\",\"phone_number\":\"Phone Number\",\"take_number_time\":\"Take Number Time\",\"take_number_channel\":\"Take Number Channel\",\"take_number_store\":\"Take Number Store\",\"merchant_reminder\":\"Merchant Reminder\",\"you_have_passed\":\"You Have Passed\",\"click_button_to_requeue\":\"Click the Button Below to Requeue\",\"cancel_queue\":\"Cancel Queue\",\"requeue\":\"Requeue\",\"in_queue\":\"In Queue\",\"dined\":\"Dined\",\"passed\":\"Passed\",\"cancelled\":\"Cancelled\",\"loading\":\"Loading\",\"queue_details\":\"Queue Details\",\"prompt\":\"Prompt\",\"confirm_cancel_queue\":\"Confirm Cancel Queue\",\"continue_queue\":\"Continue Queue\",\"cancelling\":\"Cancelling\",\"table_type\":\"Table Type\",\"waiting_tables\":\"Waiting Tables\",\"estimated_waiting\":\"Estimated Waiting\",\"people\":\"People\",\"no_waiting\":\"No Waiting\",\"dining_people\":\"DiningPeople\",\"please_select\":\"Please Select\",\"please_select_people_based_on_table_type\":\"Please Select People Based on Table Type\",\"please_enter_phone_number\":\"Please Enter Phone Number\",\"confirm_take_number\":\"Confirm Take Number\",\"queue_for_number\":\"Queue for Number\",\"my_queue\":\"My Queue\",\"queue\":\"Queue\",\"store_queue_closed\":\"Store Queue Closed\",\"missing_user\":\"Missing User\",\"please_select_valid_people_based_on_table_type\":\"Please Select Valid People Based on Table Type\",\"please_select_people\":\"Please Select People\",\"please_fill_in_phone_number\":\"Please Fill in Phone Number\",\"please_enter_correct_phone_number\":\"Please Enter Correct Phone Number\",\"take_number_info\":\"Take Number Info\"},\"my-other\":{\"stay_tuned\":\"Stay tuned\",\"contact_information\":\"Contact information\",\"copy_wechat_id\":\"Copy WeChat ID\",\"make_a_call\":\"Make a call\",\"long_press_to_identify_qr_code\":\"Long press to identify QR code\",\"if_unable_to_identify_qr_code\":\"If unable to identify QR code\",\"save_image_and_scan_in_wechat\":\"Please save the image and scan it in Line\",\"online_customer_service\":\"Online customer service\",\"contact_us\":\"Contact us\",\"help_center\":\"Help center\",\"user_service_agreement\":\"User service agreement\",\"privacy_policy\":\"Privacy policy\",\"about_us\":\"About us\",\"points_rules\":\"Points rules\",\"version_number\":\"Version number\"},\"my-signin\":{\"consecutive_check_ins\":\"Consecutive check-ins\",\"days\":\"Days\",\"checked_in_today\":\"Checked in today\",\"not_checked_in_today\":\"Not checked in today\",\"checked_in\":\"Checked in\",\"check_in_now\":\"Check in now\",\"consecutive_check_in_rewards\":\"Consecutive check-in rewards\",\"gift_balance\":\"Gift balance\",\"gift_points\":\"Gift points\",\"gift_coupons\":\"Gift coupons\",\"my_check_ins\":\"My check-ins\",\"points\":\"Points\",\"total_points\":\"Total points\",\"total_balance\":\"Total balance\",\"pieces\":\"Pieces\",\"total_coupons\":\"Total coupons\",\"times\":\"Times\",\"total_check_ins\":\"Total check-ins\",\"check_in_instructions\":\"Check-in instructions\",\"check_in\":\"Check-in\",\"tips\":\"Tips\",\"check_in_function_is_closed\":\"Check-in function is closed\",\"back\":\"Back\",\"streak\":\"Streak\"},\"my-vip\":{\"member\":\"Member\",\"level_description\":\"Level description\",\"privileges\":\"Privileges\",\"upgrade_rewards\":\"Upgrade rewards\",\"gift_balance\":\"Gift balance\",\"gift_points\":\"Gift points\",\"membership_benefits\":\"Membership benefits\",\"discount\":\"Discount\",\"product_discount\":\"Product discount\",\"multiplier\":\"Multiplier\",\"points_multiplier\":\"Points multiplier\",\"free_shipping_over\":\"Free shipping over\",\"free_shipping\":\"Free shipping\",\"permanently_valid\":\"Permanently Valid\",\"vip_qr\":\"Show VIP QR\"},\"other-coupon\":{\"cancel_gift\":\"Cancel Gift\",\"on\":\"On\",\"receive\":\"Receive\",\"gifting\":\"Gifting\",\"gifted\":\"Gifted\",\"gift_records\":\"Gift Records\",\"confirm_cancel_gift\":\"Confirm Cancel Gift\",\"used\":\"Used\",\"expired\":\"Expired\",\"coupon_history\":\"Coupon History\",\"coupon_event\":\"Coupon Event\",\"coupon_center\":\"Coupon Center\",\"receive_coupon\":\"Receive Coupon\",\"activity_description\":\"Activity Description\",\"immediate_receive\":\"Immediate Receive\",\"activity_ended\":\"Activity Ended\",\"your_friend\":\"Your Friend\",\"send_you_coupon\":\"Send You Coupon\",\"no_limit\":\"No Limit\",\"full\":\"Full\",\"available\":\"Available\",\"friend_not_received\":\"Friend Not Received\",\"auto_return_hours\":\"Auto Return in Hours\",\"coupon_canceled\":\"Coupon Canceled\",\"coupon_received\":\"Coupon Received\",\"open_expired_coupon\":\"Open Expired Coupon\",\"account_reminder\":\"Account Reminder\",\"immediate_subscribe\":\"Immediate Subscribe\",\"exchange_coupon\":\"Exchange Coupon\",\"gift_record\":\"Gift Record\",\"coupon_collection\":\"Coupon Collection\",\"my_coupons\":\"My Coupons\",\"enter_exchange_code\":\"Enter Exchange Code\",\"confirm_exchange\":\"Confirm Exchange\",\"exchange_center\":\"Exchange Center\",\"exchange_code_description\":\"Exchange Code Description\",\"use_when_ordering\":\"Use When Ordering\",\"confirm_exchange_action\":\"Confirm Exchange Action\"},\"wifi\":{\"wifi_name\":\"WiFi Name:\",\"no_wifi_info\":\"This store has not configured WiFi information\",\"wifi_password\":\"WiFi Password:\",\"quick_connect\":\"Quick connect . No password needed . Protect privacy\",\"phone_wifi_connected\":\"Phone WiFi connected:\",\"wifi_connected\":\"WiFi connected\",\"secure_connect\":\"One-click secure WiFi connection\",\"system_not_supported\":\"The current system does not support related capabilities\",\"password_error\":\"Password error\",\"connection_timeout\":\"Connection timeout, please check if the WiFi is correct or try again\",\"repeated_connection\":\"Repeated connection to Wi-Fi\",\"open_wifi\":\"Please turn on the wifi switch\",\"open_gps\":\"GPS positioning switch not turned on\",\"user_denied\":\"User denied authorization to connect to Wi-Fi\",\"invalid_wifi_name\":\"Invalid wifi name\",\"operator_denied\":\"System operator configuration denied Wi-Fi connection\",\"background_config_not_supported\":\"App cannot configure Wi-Fi in the background\",\"expired_wifi_config\":\"The saved Wi-Fi configuration has expired, please forget the Wi-Fi and try again\",\"invalid_password\":\"Invalid WEP / WPA password\",\"turn_on_wifi_before_connecting\":\"Please turn on the phone's wifi function before connecting\",\"mobile_version_not_supported\":\"Mobile version not supported\",\"connection_successful\":\"Connection successful\"},\"chooseAvatar\":{\"email\":\"email\",\"complete_profile\":\"Complete information\",\"check_now\":\"Go to view\",\"user\":\"User\",\"user_nickname\":\"Nickname\",\"enter_user_nickname\":\"Please enter user nickname\",\"mobile_number\":\"Mobile\",\"change\":\"Change\",\"authorized_mobile_number\":\"Authorized mobile number\",\"real_name\":\"Real name\",\"gender\":\"Gender\",\"birthday\":\"Birthday\",\"birthday_once_modified\":\"Once the birthday is modified\",\"cannot_edit_again\":\"Cannot be edited again\",\"birthday_gift_rules\":\"Birthday gift issuance rules\",\"save\":\"Save\",\"log_out\":\"Log out\",\"male\":\"Male\",\"female\":\"Female\",\"personal_info\":\"Personal information\",\"merchants_discounts_based_on_birthday\":\"Merchants may offer discounts based on birthdays\",\"set_birthday_once\":\"You can only set your birthday once\",\"confirm_set\":\"Are you sure you want to set it?\",\"registration_successful\":\"Registration successful\",\"warm_reminder\":\"Warm reminder\",\"authorized_mobile_number_failed\":\"Authorized mobile number failed\",\"please_authorize_mobile_number\":\"Please authorize the mobile number\",\"modification_successful\":\"Modification successful\",\"select_image_or_nickname\":\"Please select an image or nickname\",\"confirm_logout\":\"Are you sure you want to log out?\",\"activity_description\":\"Activity description\",\"birthday_cannot_be_modified\":\"Birthday cannot be modified\",\"please_birthday\":\"Please select your birthdate\",\"membership_card\":\"Complete your phone number, birthdate, and other information to receive your membership card\",\"code\":\"OPT\",\"enter_code\":\"Enter the OPT\",\"enter_mobile\":\"Please enter mobile\",\"enter_email\":\"Please enter Email\",\"enter_realName\":\"Please enter RealName\",\"requestopt\":\"Request a OPT\",\"enteropt\":\"Enter the OPT\",\"send_verification_code\":\"Send Verification Code\",\"claim_card\":\"Claim Card\"},\"other-reserve\":{\"wechat_user\":\"WeChat User\",\"welcome\":\"Welcome\",\"please_modify_reservation_info\":\"Please modify reservation information\",\"modify\":\"Modify\",\"please_enter_contact_name\":\"Please enter contact name\",\"please_enter_phone_number\":\"Please enter phone number\",\"contact_information\":\"Contact Information\",\"please_enter_reservation_number\":\"Please enter reservation number\",\"reservation_number\":\"Reservation Number\",\"if_other_needs\":\"If other needs\",\"please_note\":\"Please note\",\"deposit_description\":\"Deposit Description\",\"dining_time\":\"Dining Time\",\"number_of_people\":\"Number of People\",\"dining_area\":\"Dining Area\",\"dining_position\":\"Dining Position\",\"reservation_amount\":\"Reservation Amount\",\"time_left_less_than\":\"Time left less than\",\"minutes\":\"Minutes\",\"amount_not_refundable_after_merchant_acceptance\":\"Amount not refundable after merchant acceptance\",\"payment_means_agreement\":\"Payment means you agree to the above rules\",\"pay_now\":\"Pay Now\",\"book_now\":\"Book Now\",\"male\":\"Male\",\"female\":\"Female\",\"lady\":\"Lady\",\"mr\":\"Mr.\",\"reserve\":\"Reserve\",\"please_complete_reservation_info\":\"Please complete reservation information\",\"minimum_reservation_number\":\"Minimum reservation number\",\"missing_type\":\"Missing Type\",\"missing_merchant\":\"Missing Merchant\",\"please_enter_contact_name_again\":\"Please enter contact name again\",\"please_enter_phone_number_again\":\"Please enter phone number again\",\"please_enter_correct_phone_number\":\"Please enter correct phone number\",\"order_verification_code\":\"Order Verification Code\",\"time_and_number_of_people\":\"Time and Number of People\",\"people\":\"People\",\"position_requirements\":\"Position Requirements\",\"contact_information_again\":\"Contact Information Again\",\"reservation_deposit\":\"Reservation Deposit\",\"order_time\":\"Order Time\",\"order_number\":\"Order Number\",\"order_notes\":\"Order Notes\",\"cancel_reservation\":\"Cancel Reservation\",\"contacting_merchant\":\"Contacting Merchant\",\"merchant_processing\":\"Merchant Processing\",\"result_confirmation\":\"Result Confirmation\",\"reservation_details\":\"Reservation Details\",\"confirm_cancel_order\":\"Do you confirm to cancel the order?\",\"cancelling_order\":\"Cancelling Order\",\"operation_successful\":\"Operation Successful\",\"prompt\":\"Prompt\",\"confirm_cancel_reservation\":\"Do you confirm to cancel the reservation?\",\"cancel_reservation_again\":\"Cancel Reservation\",\"continue_reservation\":\"Continue Reservation\",\"cancelling\":\"Cancelling\",\"people_again\":\"People\",\"prepayment_per_table\":\"Prepayment per Table\",\"deposit\":\"Deposit\",\"cancel_if_not_arrived_in_time\":\"Cancel if not arrived in time\",\"cancel_before_dining\":\"Cancel before dining\",\"minutes_can_cancel_order\":\"Minutes can cancel order\",\"reserve_now\":\"Reserve Now\",\"table_reservation\":\"Table Reservation\",\"my_reservations\":\"My Reservations\",\"table_reservation_again\":\"Table Reservation\",\"people_once_more\":\"People\",\"confirm_cancel_reservation_again\":\"Do you confirm to cancel the reservation?\",\"table_reservation_closed\":\"Table Reservation Closed\",\"table_reservation_not_set\":\"Table Reservation not set\",\"minimum_people_per_reservation\":\"Minimum people per reservation\",\"maximum\":\"Maximum\",\"people_final\":\"People\",\"please_choose_reservation_type\":\"Please choose reservation type\",\"reservation_info\":\"Reservation Information\",\"people_count\":\"People\",\"table_count\":\"Table\",\"pay_immediately\":\"Pay Immediately\",\"cancel_reservation_final\":\"Cancel Reservation\"},\"recharge\":{\"all\":\"All\",\"recharge\":\"Recharge\",\"consumption\":\"Consumption\",\"transaction_record\":\"Transaction Record\",\"account_balance\":\"Account Balance\",\"stored_value_exchange\":\"Stored Value Exchange\",\"gift\":\"Gift\",\"balance\":\"Balance\",\"points\":\"Points\",\"first_recharge_reward\":\"First Recharge Reward\",\"please_enter\":\"Please Enter\",\"other_amount\":\"Other Amount\",\"you_will_get\":\"You Will Get\",\"give\":\"Give\",\"upgrade_to_membership_level\":\"Upgrade to Membership Level\",\"instructions\":\"Instructions\",\"membership_stored_value_agreement\":\"Membership Stored Value Agreement\",\"store_value_now\":\"Store Value Now\",\"membership_stored_value\":\"Membership Stored Value\",\"tip\":\"Tip\",\"stored_value_function_is_closed\":\"Stored Value Function is Closed\",\"please_select_a_store\":\"Please Select a Store\",\"please_read_and_agree_to_the_membership_stored_value_agreement_carefully\":\"Please Read and Agree to the Membership Stored Value Agreement Carefully\",\"please_enter_the_stored_value_amount\":\"Please Enter the Stored Value Amount\",\"minimum_recharge_amount\":\"Minimum Recharge Amount\",\"placing_order\":\"Placing Order\"},\"sq-btn\":{\"welcome\":\"Welcome\",\"exclusive_activities\":\"Enjoy exclusive activities after joining\",\"member_gifts\":\"Member gifts\",\"phone_login\":\"Phone Quick Login\",\"not_login_now\":\"Not now\",\"enter_phone_number\":\"Please enter your phone number\",\"enter_verification_code\":\"Please enter the verification code\",\"sent\":\"Sent\",\"login_now\":\"Log in now\",\"not_login\":\"Not now\",\"allow_usage_of_personal_info\":\"Allow us to reasonably use your personal information in necessary situations and fully protect your legitimate rights\",\"protect_legal_rights\":\"Reasonably use your personal information\",\"ensure_rights\":\"Fully protect your legitimate rights\",\"user_agreement\":\"User Agreement\",\"get_verification_code\":\"Get Code\",\"read_and_agree\":\"Please read and agree to\",\"prompt\":\"Prompt\",\"click_top_right_to_share\":\"Click the top right to share\",\"got_it\":\"Got it\",\"binding_successful\":\"Binding successful\",\"registration_successful\":\"Registration successful\",\"warm_prompt\":\"Warm prompt\",\"phone_authorization_failed\":\"Phone authorization failed\",\"seconds\":\"seconds\",\"send_verification_code\":\"Send\",\"login_successful\":\"Login successful\",\"bind_phone_number\":\"Bind Phone Number\"},\"login\":{\"welcome_message\":\"Welcome\",\"phone_number\":\"Phone Number\",\"enter_email_or_phone\":\"Please enter your email or phone number\",\"password\":\"Password\",\"enter_password\":\"Please enter your password\",\"login\":\"Login\",\"forgot_password\":\"Forgot Password\",\"no_account\":\"Don't have an account\",\"register\":\"Register\",\"third_party_login\":\"Third Party Login\",\"enter_email_or_phone_placeholder\":\"Please enter your email or phone number\",\"enter_password_placeholder\":\"Please enter your password\"},\"password_reset\":{\"reset_password\":\"Reset Password\",\"enter_phone_number\":\"Please enter phone number\",\"ente_email\":\"Please enter your email\",\"enter_verification_code\":\"Please enter verification code\",\"enter_new_password\":\"Please enter new password\",\"confirm\":\"Confirm\",\"reset_password_via_email\":\"Reset password via email\",\"reset_password_via_phone\":\"Reset password via phone number\",\"enter_phone_number_again\":\"Please enter phone number\",\"saving\":\"Saving\",\"saved_successfully\":\"Saved successfully\",\"sending\":\"Sending\"},\"registration\":{\"welcome_message\":\"Welcome\",\"enter_phone_number\":\"Please enter phone number\",\"enter_email\":\"Please enter email\",\"enter_verification_code\":\"Please enter code\",\"enter_password\":\"Please enter password\",\"enter_confirm_password\":\"Please enter confirm password\",\"register_and_login\":\"Register and login\",\"register_with_email\":\"Register with email\",\"register_with_phone\":\"Register with phone number\",\"enter_correctly\":\"Please enter correctly\",\"passwords_do_not_match\":\"Passwords do not match\"},\"pointdl\":{\"already_have\":\"Already Have\",\"collect_points\":\"Collect Points\",\"still_missing\":\"Still Missing\",\"can_get\":\"Can Get\",\"balance\":\"Balance\",\"points\":\"Points\",\"coupons\":\"Coupons\",\"event_description\":\"Event Description\",\"points_for_gift\":\"Points for Gift\"},\"address\":{\"please_select_location\":\"Please select a location\"},\"my-coupon\":{\"coupon_unusable\":\"Coupon Unusable\",\"copy\":\"Copy\",\"usage_rules\":\"Usage Rules\",\"all_stores\":\"All Stores\",\"valid_for_n_days\":\"Valid for N Days\",\"coupon_description\":\"Coupon Description\",\"highest_price_discount\":\"Highest Price Discount\",\"choose_friend\":\"Choose Friend\",\"fixed\":\"Fixed\",\"not_applicable_for_specified_products\":\"Not Applicable for Specified Products\",\"usable\":\"Usable\",\"effective_from_day\":\"Effective from Day\",\"lowest_price_discount\":\"Lowest Price Discount\",\"exchange_rules\":\"Exchange Rules\",\"my_coupons\":\"My Coupons\",\"view_product\":\"View Product\",\"exchange\":\"Exchange\",\"instant_discount\":\"Instant Discount\",\"view_store\":\"View Store\",\"coupon_center\":\"Coupon Center\",\"text_type\":\"Text Type\",\"not_applicable_for_specified_stores\":\"Not Applicable for Specified Stores\",\"used_or_expired_coupon\":\"Used or Expired Coupon\",\"exchange_product\":\"Exchange Product\",\"coupon_source\":\"Coupon Source\",\"confirm_gift\":\"Confirm Gift\",\"coupon_display\":\"Coupon Display\",\"usable_coupons\":\"Usable Coupons\",\"applicable_stores_specified\":\"Applicable Stores Specified\",\"expires_soon\":\"Expires Soon\",\"style_type\":\"Style Type\",\"shipping\":\"Shipping\",\"free_shipping\":\"Free Shipping\",\"validity_period\":\"Validity Period\",\"quantity\":\"Quantity\",\"discount\":\"Discount\",\"validity_period_usage\":\"Validity Period for Usage\",\"valid_from\":\"Valid From\",\"days\":\"Days\",\"claim_now\":\"Claim Now\",\"generation\":\"Generation\",\"reason_unusable\":\"Reason Unusable\",\"all_products\":\"All Products\",\"valid_for_n_hours\":\"Valid for N Hours\",\"gift_to_friend\":\"Gift Friend\",\"scan_to_order\":\"Scan to Order\",\"pay_in_person\":\"Pay in Person\",\"second_highest_price_discount\":\"Second Highest Price Discount\",\"takeaway\":\"Takeaway\",\"start\":\"Start\",\"applicable_stores\":\"Applicable Stores\",\"no_restrictions\":\"No Restrictions\",\"applicable_products\":\"Applicable Products\",\"received_coupon\":\"Received Coupon\",\"total\":\"Total\",\"notification\":\"Notification\",\"use_now\":\"Use Now\",\"self_pickup\":\"Self Pickup\",\"applicable_specified_products\":\"Applicable Specified Products\",\"usage_scenario\":\"Usage Scenario\",\"coupon\":\"Coupon\",\"min_purchase\":\"available over\",\"fast_food\":\"Fast Food\",\"activity_name\":\"Activity Name\",\"minimum_purchase\":\"Minimum Purchase\",\"available\":\"Available\",\"valid_until\":\"Valid Until\",\"issued_successfully\":\"Issued Successfully\",\"bonus_balance\":\"Bonus Balance\",\"bonus_points\":\"Bonus Points\",\"login_and_claim\":\"Login and Claim\",\"show_redeem_code\":\"Please Show the Redemption Code to the Store for Pickup\",\"points\":\"Points\",\"added_to_account\":\"Added to Your Account\",\"view_in_miniprogram\":\"Viewable in the Mini Program\",\"personal_center\":\"Personal Center\",\"participate_now\":\"Join the Activity Now\",\"place_order\":\"Place Order\",\"popup_coupon\":\"Popup Coupon\",\"new_user_gift\":\"New User Gift\",\"claimed_successfully\":\"successfully\",\"enter_phone_number\":\"Enter friend's phone number\",\"coupon_not_applicable\":\"Coupon not applicable\"},\"refunddl\":{\"refund_reason\":\"Refund Reason\",\"other_reason\":\"Other Reason\",\"refund_remarks_optional\":\"Refund Remarks (Optional)\",\"apply_refund\":\"Apply for Refund\",\"select_refund_reason\":\"Please Select Refund Reason\"},\"privacy\":{\"privacy_policy_title\":\"User Privacy Protection Guidelines\",\"privacy_policy_intro\":\"Thank you for using our service. Before using this mini program, you should read and agree to\",\"privacy_policy_link\":\"Mini Program Privacy Protection Guidelines\",\"privacy_policy_agreement\":\"If you agree to the Mini Program Privacy Protection Guidelines, please click 'Agree' to start using.\",\"reject_button\":\"Reject\",\"agree_button\":\"Agree\",\"default_privacy_policy_name\":\"User Privacy Protection Guidelines\"}}");

/***/ }),

/***/ 34:
/*!************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/locale/zh.json ***!
  \************************************************/
/*! exports provided: common, modal, pagetitle, my-agree, drag-btn, tabbar, cartbar, in-cart-popup, cart-popup, product-modal, tc-modal, m-info, shop-notice, shop-select, mr-code, dmf, goods, pay_order, detail, pay-order, check-shop, check-time, self-fetch-addres, take-out-addres, check-save, check-point, discounts, waiter, check-goods, check-notes, order-index, order-list, pay, order-detail, o-out-btn, o-status, o-btn, o-discount, o-in-btn, o-info, my, s-h1, s-h2, my_property, in_goods, in_goods_components, g-table, bz, promptpay, my-addres, integral, lineup, my-other, my-signin, my-vip, other-coupon, wifi, chooseAvatar, other-reserve, recharge, sq-btn, login, password_reset, registration, pointdl, addres, my-coupon, refunddl, privacy, shop_activity, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"common\":{\"noOrdersYet\":\"暂无订单\",\"uni.app.quit\":\"再按一次退出应用\",\"uni.async.error\":\"连接服务器超时，点击屏幕重试\",\"uni.showActionSheet.cancel\":\"取消\",\"uni.showToast.unpaired\":\"请注意 showToast 与 hideToast 必须配对使用\",\"uni.showLoading.unpaired\":\"请注意 showLoading 与 hideLoading 必须配对使用\",\"uni.showModal.cancel\":\"取消\",\"uni.showModal.confirm\":\"确定\",\"uni.chooseImage.cancel\":\"取消\",\"uni.chooseImage.sourceType.album\":\"从相册选择\",\"uni.chooseImage.sourceType.camera\":\"拍摄\",\"uni.chooseVideo.cancel\":\"取消\",\"uni.chooseVideo.sourceType.album\":\"从相册选择\",\"uni.chooseVideo.sourceType.camera\":\"拍摄\",\"uni.previewImage.cancel\":\"取消\",\"uni.previewImage.button.save\":\"保存图像\",\"uni.previewImage.save.success\":\"保存图像到相册成功\",\"uni.previewImage.save.fail\":\"保存图像到相册失败\",\"uni.setClipboardData.success\":\"内容已复制\",\"uni.scanCode.title\":\"扫码\",\"uni.scanCode.album\":\"相册\",\"uni.scanCode.fail\":\"识别失败\",\"uni.scanCode.flash.on\":\"轻触照亮\",\"uni.scanCode.flash.off\":\"轻触关闭\",\"uni.startSoterAuthentication.authContent\":\"指纹识别中...\",\"uni.picker.done\":\"完成\",\"uni.picker.cancel\":\"取消\",\"uni.video.danmu\":\"弹幕\",\"uni.video.volume\":\"音量\",\"uni.button.feedback.title\":\"问题反馈\",\"uni.button.feedback.send\":\"发送\"},\"modal\":{\"title\":\"温馨提示\",\"cancelText\":\"取消\",\"confirmText\":\"确定\",\"return_table\":\"返回桌台\",\"choose_language\":\"选择语言\",\"chinese\":\"中文\",\"english\":\"English\",\"confirm\":\"确定\",\"thai\":\"ไทย\",\"authorization_failed\":\"授权失败\",\"year\":\"年\",\"month\":\"月\",\"day\":\"日\",\"hour\":\"时\",\"minute\":\"分\",\"second\":\"秒\",\"loading_complete\":\"加载完毕\",\"loading\":\"加载中\",\"save\":\"保存\",\"select_date\":\"选择日期\"},\"pagetitle\":{\"Membership\":\"Membership\",\"personalcenter\":\"Personal Center\"},\"my-agree\":{\"i_have_read_and_agree\":\"我已阅读并同意\"},\"drag-btn\":{\"Member Rights\":\"会员权益\",\"Sales Promotion\":\"店铺活动\",\"Coupon\":\"优惠券包\",\"stamp cards\":\" Stamp Card\",\"Scan the QR\":\"扫码点餐\",\"address\":\"我的地址\",\"Service\":\"联系客服\",\"Contact Us\":\"联系我们\",\"Policy\":\"协议政策\",\"Code\":\"会员码\",\"Language\":\"切换语言\",\"merchant_on_break\":\"商家休息中，无法使用此功能\",\"receive_gifts\":\"就获得好礼\"},\"tabbar\":{\"home\":\"首页\",\"goods\":\"点单\",\"order\":\"订单\",\"user\":\"会员\",\"my\":\"我的\"},\"cartbar\":{\"total_discount\":\"共减免\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"另需配送费\",\"proceed_to_checkout\":\"去结算\",\"discount_applied\":\"已享受折扣优惠\"},\"in-cart-popup\":{\"total_discount\":\"共减免\",\"delivery\":\"外送\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"另需配送费\",\"clear\":\"清空\",\"selected_items\":\"已选商品\",\"packaging_fee\":\"包装费\",\"pick_up\":\"自提\",\"confirm_cart_clear\":\"确定清空购物车吗\",\"discount_applied\":\"已享受折扣优惠\",\"service_fee\":\"服务费\"},\"cart-popup\":{\"total_discount\":\"共减免\",\"delivery\":\"外送\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"另需配送费\",\"clear\":\"清空\",\"selected_items\":\"已选商品\",\"packaging_fee\":\"包装费\",\"pick_up\":\"自提\",\"confirm_cart_clear\":\"确定清空购物车吗\",\"discount_applied\":\"已享受折扣优惠\"},\"product-modal\":{\"portion\":\"份\",\"inventory\":\"库存\",\"select_required_add_ons\":\"请选择必选加料\",\"member_price\":\"会员价\",\"mandatory\":\"必选\",\"this_product\":\"此商品\",\"exclusive\":\"专享\",\"specification\":\"规格\",\"attributes\":\"属性\",\"minimum_portion_purchase\":\"份起购\",\"sold_out\":\"已售罄\",\"add_to_bag\":\"加入购物袋\",\"has\":\"有\",\"from\":\"起\",\"no_less_possible\":\"不能再少了\",\"buy_now\":\"立即购买\",\"product_purchase_limit\":\"此商品限购\"},\"tc-modal\":{\"portion\":\"份\",\"inventory\":\"库存\",\"select_required_add_ons\":\"请选择必选加料\",\"member_price\":\"会员价\",\"mandatory\":\"必选\",\"this_product\":\"此商品\",\"exclusive\":\"专享\",\"specification\":\"规格\",\"attributes\":\"属性\",\"minimum_portion_purchase\":\"份起购\",\"sold_out\":\"已售罄\",\"selected_ok\":\"选好了\",\"has\":\"有\",\"from\":\"起\",\"no_less_possible\":\"不能再少了\",\"buy_now\":\"立即购买\",\"product_purchase_limit\":\"此商品限购\"},\"m-info\":{\"membercode\":\"会员码\",\"balance\":\"余额\",\"points\":\"积分\",\"coupon\":\"优惠券\",\"welcome, please log in\":\"欢迎光临，请登录\",\"Become a member and enjoy more membership benefits\":\"成为会员，享受更多会员权益\",\"Login\":\"立即登录\"},\"shop-notice\":{\"welcome\":\"欢迎光临\",\"pleased_to_serve\":\"很高兴为您服务\",\"view\":\"查看\",\"full_reduction\":\"满减\",\"delivery_fee\":\"配送费\",\"mytian_delivery\":\"麦芽田配送\",\"store_information\":\"门店信息\",\"full\":\"满\",\"makeco_delivery\":\"码科配送\",\"starting_delivery\":\"起送\",\"contact_information\":\"联系方式\",\"call_now\":\"立即拨打\",\"delivery_service_provided\":\"等提供配送服务\",\"instant_discount\":\"立减\",\"click_to_collapse\":\"点击收起\",\"items\":\"件\",\"discount\":\"优惠\",\"merchant_self_delivery\":\"商家自配送\",\"more\":\"更多\",\"wsb_delivery\":\"外送帮配送\",\"reduce\":\"减\",\"delivery_range_weather_influence\":\"配送范围受天气多方面影响\",\"store_delivery_range\":\"门店配送范围为\",\"currency\":\"THB\",\"delivery\":\"配送\",\"store_by\":\"本店由\",\"business_hours\":\"营业时间\",\"real_time_delivery_range\":\"具体配送范围以实时配送范围为准\",\"new_customer_discount\":\"新客立减\",\"view_store_services\":\"查看门店服务资质\",\"store_address\":\"门店地址\",\"next_day\":\"次日\",\"every_full\":\"每满\",\"maximum_reduction\":\"最高减\",\"within_kilometers\":\"公里内\"},\"shop-select\":{\"resting\":\"休息中\",\"place_order\":\"去下单\",\"cancel\":\"取消\",\"delivery_available\":\"可外送\",\"pick_up_available\":\"可自取\",\"map\":\"地图\",\"locating\":\"定位中\",\"expand\":\"展开\",\"frequent\":\"常去\",\"store\":\"店铺\",\"far_from_store\":\"您当前所在位置距离该门店较远\",\"accept_reservations\":\"接受预定\",\"search\":\"搜索\",\"favorite_store\":\"收藏门店\",\"collapse\":\"收起\",\"no_relevant_stores\":\"暂时搜索不到相关门店\",\"view_map\":\"查看地图\",\"next_day\":\"次日\",\"confirm_switch_to\":\"确认切换到\",\"confirm_switch_to_store\":\"确认切换到该门店吗\",\"busy\":\"繁忙\",\"open\":\"营业中\",\"enter_search_content\":\"请输入搜索内容\",\"enter_store_name\":\"请输入门店名称\",\"distance\":\"距离\",\"select_store\":\"选择门店\",\"store_query\":\"门店吗\"},\"mr-code\":{\"membership_code\":\"会员码\",\"membership_card_number\":\"会员卡号\",\"coupon\":\"优惠券\",\"use_wechat_pay\":\"使用微信支付\",\"points\":\"积分\",\"balance\":\"余额\",\"wechat_user\":\"微信用户\",\"auto_update_seconds\":\"会员码每30秒自动更新,请在店内消费使用\",\"viewMembershipBenefits\":\"查看会员权益\"},\"dmf\":{\"pay_to_merchant\":\"付款给商家\",\"name\":\"名称\",\"amount\":\"金额\",\"enter_amount\":\"输入金额\",\"total_discount\":\"共优惠\",\"actual_payment\":\"实付\",\"remark\":\"备注\",\"modify\":\"修改\",\"add_remark\":\"添加备注\",\"pay_bill\":\"买单\",\"please_enter_amount\":\"请输入金额\",\"ordering\":\"下单中\"},\"goods\":{\"select_specifications\":\"选规格\",\"exclusive\":\"专享\",\"portion\":\"份\",\"member_price\":\"会员价\",\"minimum_purchase\":\"最少购买\",\"limit_per_person\":\"每人限购\",\"limit_per_order\":\"每单限购\",\"daily_limit\":\"每天限购\",\"from\":\"起\",\"sales_volume\":\"销量\",\"Pickup\":\"自取\",\"takeout\":\"外卖\",\"store_switching_disabled\":\"门店切换已关闭\",\"sold_out\":\"已售罄\",\"starting_from\":\"起\",\"required\":\"必选\",\"distanceyou\":\"距离您\",\"privacy_policy_notice\":\"隐私权政策提示\",\"thank_you_for_support\":\"感谢您的支持与关注\",\"importance_of_personal_info\":\"我们深知个人信息对您的重要性\",\"compliance_with_laws\":\"我们将按相关法律法规要求\",\"ensuring_personal_info_safety\":\"尽力保护您的个人信息安全可控\",\"click_before_using\":\"请您在使用本产品前点击\",\"privacy_agreement\":\"隐私权协议\",\"read_carefully\":\"并仔细阅读\",\"if_you_agree\":\"如您同意\",\"entire_content\":\"的全部内容\",\"please_click\":\"请点击\",\"agree_and_continue\":\"同意并继续\",\"start_using_services\":\"开始使用我们的服务\",\"if_you_disagree\":\"如您不同意\",\"unfortunately_we_cannot_continue\":\"很遗憾我们将无法继续为\",\"to_provide_services\":\"您提供服务\",\"log_in_and_order\":\"登录并点餐\",\"order_without_logging_in\":\"不登录并点餐\",\"scan_and_order\":\"扫码点餐\",\"user_agreement\":\"用户协议\",\"calling_service_not_open\":\"暂未开启叫号取餐功能\",\"notice\":\"提示\",\"no_desk_info_or_out_of_range\":\"未获取到桌位信息或者超出商家范围\",\"beyond_merchant_range\":\"超出商家范围\",\"please_add_required_items\":\"请添加必选商品\",\"people\":\"人\",\"actual_spending_reaches\":\"实际消费满\",\"includes\":\"包含\",\"gift_after_order_completion\":\"完成订单后可获赠礼品\",\"view_gift\":\"查看礼品\",\"valid_until\":\"有效期至\",\"gift_balance\":\"赠送余额\",\"gift_points\":\"赠送积分\",\"limited_gift_availability\":\"赠送礼品数量有限，具体以实际发放为准\",\"got_it\":\"我知道了\",\"store_closed_try_another\":\"门店已休息，可尝试选择其他门店\",\"enter_product_name_to_search\":\"请输入商品名称搜索\",\"search\":\"搜索\",\"search_history\":\"搜索历史\",\"confirm_clear_search_history\":\"确认清空搜索历史吗？\",\"please_enter_search_content\":\"请输入搜索内容\",\"store_no_order_channel\":\"门店暂无下单渠道\",\"add_required_items\":\"请添加必选商品\"},\"pay_order\":{\"total_discount\":\"共优惠\",\"subtotal\":\"小计\",\"submit_order\":\"提交订单\",\"placing_order\":\"下单中\",\"are_you_sure_you_want_to_call_the_waiter\":\"您确定要呼叫服务员吗\",\"vatMoney\":\"增值税\",\"serviceMoney\":\"服务费\",\"taxIncluded\":\"Tax(Included)\",\"totaltax\":\"TotalTax\"},\"detail\":{\"loading\":\"加载中\",\"are_you_sure_you_want_to_cancel_the_order\":\"您确定取消订单吗\",\"are_you_sure_you_want_to_apply_for_a_refund\":\"您确定申请退款吗\",\"are_you_sure_you_want_to_confirm_receipt\":\"您确定确认收货吗\"},\"pay-order\":{\"total_discount\":\"共优惠\",\"subtotal\":\"小计\",\"submit_order\":\"提交订单\",\"pick_up\":\"自取\",\"takeout\":\"外卖\",\"please_select_dining_option\":\"请选择就餐方式\",\"please_select_appointment_time\":\"请选择预约时间\",\"please_select_address\":\"请选择地址\",\"please_enter_contact_number\":\"请输入联系电话\",\"placing_order\":\"下单中\"},\"check-shop\":{\"please_confirm_pickup_store\":\"请确认自取门店\",\"distance_from_you\":\"距离您\",\"change_store\":\"更换门店\",\"this_one\":\"就是这家\"},\"check-time\":{\"select_appointment_time\":\"选择预约时间\",\"hello\":\"您好\",\"when_to_pick_up\":\"什么时候取呢\",\"pickup_store\":\"自取门店\",\"confirm\":\"确定\",\"immediate_pickup\":\"立即自取\",\"immediate_in-store_pickup\":\"立即到店自取\",\"immediate_delivery\":\"立即配送\",\"start_making_immediately\":\"立即开始制作\",\"schedule_pickup\":\"预约自取\",\"as_per_appointment_time\":\"按照预约时间\",\"in-store_pickup\":\"到店自取\",\"schedule_delivery\":\"预约送达\",\"start_making\":\"开始制作\",\"today\":\"今天\",\"thursday\":\"周四\",\"tomorrow\":\"明天\",\"friday\":\"周五\",\"day_after_tomorrow\":\"后天\",\"saturday\":\"周六\"},\"self-fetch-addres\":{\"distance_from_you\":\"距离您\",\"contact_phone\":\"联系电话\",\"autofill\":\"自动填写\",\"order_pickup_time\":\"取单时间\",\"pick_up_order_now\":\"立即取单\",\"takeout\":\"打包带走\",\"dine_in\":\"店内就餐\"},\"take-out-addres\":{\"please_select_delivery_address\":\"请选择收货地址\",\"delivery_time\":\"送达时间\",\"deliver_asap\":\"尽快送达\"},\"check-save\":{\"total\":\"合计\",\"estimated_earnings\":\"预计可获得\",\"points\":\"积分\",\"growth_value\":\"成长值\",\"order_now\":\"立即下单\"},\"check-point\":{\"collect-points\":\"集\",\"current-order-can-obtain\":\"当前订单可获得\",\"discounted-products-can-participate-in-collecting-points\":\"优惠商品可参与集点\"},\"discounts\":{\"package\":\"包\",\"packing-fee\":\"包装费\",\"delivery\":\"配\",\"delivery-fee\":\"配送费\",\"reduce\":\"减\",\"delivery-fee-discount\":\"配送费减\",\"full-reduction-promotion\":\"满减优惠\",\"new\":\"新\",\"new-customer-discount\":\"新客立减\",\"member\":\"会\",\"member-discount\":\"会员优惠\",\"delivery-fee-full-reduction\":\"配送费满减\",\"coupon\":\"劵\",\"available-coupons\":\"可用优惠券\",\"available\":\"个可用\",\"no-available\":\"暂无可用\",\"coupons\":\"优惠券\"},\"waiter\":{\"waiter\":\"服务员\"},\"check-goods\":{\"to-be-ordered\":\"待下单\",\"ordered\":\"已下单\",\"paid\":\"已支付\",\"service-fee\":\"服务费\",\"fold-all\":\"收起全部\",\"view-all\":\"查看全部\"},\"check-notes\":{\"notes\":\"备注\",\"please-enter-your-special-requests\":\"请输入您的特殊要求\"},\"order-index\":{\"store_order\":\"门店订单\",\"stored_value_order\":\"储值订单\",\"pay_the_bill_order\":\"买单订单\",\"coupon_package_order\":\"券包订单\",\"confirm_cancel_order\":\"您确定取消订单吗？\",\"confirm_apply_refund\":\"您确定申请退款吗？\",\"manual_sliding_prohibited\":\"禁止手动滑动\"},\"order-list\":{\"total\":\"总计\",\"pieces\":\"件数\",\"amount\":\"金额\",\"order_number\":\"订单号\",\"cancel_order\":\"取消订单\",\"pay_now\":\"立即支付\",\"apply_for_refund\":\"申请退款\",\"order_again\":\"再来一单\",\"closed\":\"已关闭\",\"pending_payment\":\"待支付\",\"paid\":\"已支付\",\"order_pending\":\"订单待处理\",\"in_production\":\"生产中\",\"order_accepted\":\"订单已接受\",\"production_completed\":\"生产完成\",\"pending_delivery\":\"待配送\",\"in_delivery\":\"配送中\",\"completed\":\"已完成\",\"refunded\":\"已退款\",\"remaining\":\"剩余\",\"minutes\":\"分钟\"},\"pay\":{\"confirm_payment\":\"确认支付\",\"available\":\"可用\",\"balance_payment\":\"余额支付\",\"wechat_payment\":\"微信支付\",\"alipay_payment\":\"支付宝支付\",\"payment_successful\":\"支付成功\",\"payment_failed\":\"支付失败\",\"pay\":\"pay\"},\"order-detail\":{\"order_details\":\"订单详情\",\"closed\":\"已关闭\",\"pending_payment\":\"待支付\",\"paid_awaiting_order\":\"已支付待接单\",\"order_accepted_in_preparation\":\"已接单制作中\",\"preparation_complete_awaiting_delivery\":\"制作完成待配送\",\"in_delivery\":\"配送中\",\"completed\":\"已完成\",\"apply_for_refund\":\"申请退款\",\"refunded\":\"已退款\",\"if_refund_needed\":\"如需退款\",\"please_call_store\":\"请致电门店\",\"loading\":\"加载中\",\"confirm_cancel_order\":\"您确定取消订单吗\",\"confirm_apply_refund\":\"您确定申请退款吗\",\"confirm_receipt\":\"您确定确认收货吗\",\"confirm_complete_order\":\"您确定完成订单吗\",\"confirm_call_waiter\":\"您确定要呼叫服务员吗\"},\"o-out-btn\":{\"cancel_order\":\"取消订单\",\"pay_now\":\"立即支付\",\"apply_for_refund_btn\":\"申请退款\",\"confirm_receipt_btn\":\"确认收货\",\"order_again\":\"再来一单\"},\"o-status\":{\"order_placed\":\"已下单\",\"dining\":\"就餐中\",\"completed_status\":\"已完成\",\"in_preparation\":\"制作中\",\"please_pick_up_order\":\"请取单\",\"awaiting_order_acceptance\":\"待接单\",\"awaiting_delivery_status\":\"待配送\",\"in_delivery_status\":\"配送中\",\"delivered\":\"已送达\"},\"o-btn\":{\"please_wait\":\"请稍后\",\"waiting_for_waiter\":\"等待服务员接单\",\"order_successful\":\"下单成功\",\"sit_and_eat\":\"坐等开吃\",\"product_in_preparation\":\"商品制作中\",\"product_preparation_complete\":\"商品制作完成\",\"thank_you_for_visiting\":\"感谢您的光临\",\"refund_successful\":\"退款成功\",\"order_closed\":\"订单已关闭\",\"order_canceled\":\"订单已取消\",\"order_awaiting_payment\":\"订单等待支付\",\"please_wait_store_order\":\"请稍等，等待门店接单\",\"product_preparation_completed_waiting_for_rider\":\"商品制作完成，等待骑手接单\",\"pickup_number\":\"取单号\",\"table_information\":\"桌台信息\",\"serial_number\":\"流水号\",\"cancel_order\":\"取消订单\",\"pay_immediately\":\"立即支付\",\"apply_for_refund\":\"申请退款\",\"confirm_receipt\":\"确认收货\",\"order_again\":\"再来一单\"},\"o-discount\":{\"navigation\":\"导航\",\"service_fee\":\"服务费\",\"collapse_all\":\"收起全部\",\"view_all\":\"查看全部\",\"packing_fee\":\"包装费\",\"delivery_fee\":\"配送费\",\"full_discount\":\"满减优惠\",\"new_customer_discount\":\"新客立减\",\"order_count1\":\"第\",\"order_count2\":\"次下单\",\"discount_applied\":\"已优惠\",\"total\":\"总计\"},\"o-in-btn\":{\"pending_payment_in_btn\":\"待支付\",\"complete_order_in_btn\":\"完成订单\",\"continue_adding_dishes\":\"继续加菜\",\"contact_waiter_for_payment\":\"请联系服务员付款\",\"pay_immediately_in_btn\":\"立即支付\",\"cancel_order\":\"取消订单\"},\"o-info\":{\"delivery_information\":\"配送信息\",\"delivery_address\":\"配送地址\",\"delivery_mode\":\"配送模式\",\"delivery_channel\":\"配送渠道\",\"rider_information\":\"骑手信息\",\"order_information\":\"订单信息\",\"order_number\":\"流水号\",\"order_type\":\"订单类型\",\"dining_type\":\"就餐类型\",\"pick_up_time\":\"取单时间\",\"expected_delivery_time\":\"预计送达时间\",\"order_time\":\"下单时间\",\"payment_method\":\"支付方式\",\"remarks_information\":\"备注信息\",\"copy\":\"复制\",\"estimated\":\"预计\",\"pickup_number\":\"取单号\",\"table_information\":\"桌台信息\",\"people_dining\":\"人就餐\"},\"my\":{\"myorder\":\"我的订单\",\"order\":\"order\",\"membercode\":\"会员码\",\"balance\":\"余额\",\"points\":\"积分\",\"coupon\":\"优惠券\"},\"s-h1\":{\"wechat_user\":\"\",\"better_service_prompt\":\"为给您提供更好的服务请授权登录\",\"gain_more\":\"再获得\",\"unit\":\"个\",\"growth_value\":\"成长值\",\"can_upgrade_to\":\"可升级为\",\"login\":\"登录\",\"register\":\"注册\",\"complete_profile\":\"完善资料\"},\"s-h2\":{\"wechat_user\":\"微信用户\",\"become_member\":\"成为会员\",\"enjoy_more_benefits\":\"享受更多会员权益\",\"gain_more\":\"再获得\",\"unit\":\"个\",\"growth_value\":\"成长值\",\"can_upgrade_to\":\"可升级为\",\"login\":\"登录\",\"register\":\"注册\",\"complete_profile\":\"完善资料\"},\"my_property\":{\"my_assets\":\"我的资产\",\"points\":\"积分\",\"coupons\":\"优惠券\",\"balance\":\"余额\",\"unused\":\"未使用\"},\"in_goods\":{\"privacy_policy_prompt\":\"隐私权政策提示\",\"privacy_desc\":\"感谢您的支持与关注，我们深知个人信息对您的重要性，我们将按相关法律法规要求，尽力保护您的个人信息安全可控。请您在使用本产品前点击\",\"privacy_agreement\":\"《隐私权协议》\",\"read_carefully\":\"并仔细阅读。如您同意《隐私权协议》的全部内容，请点击'同意并继续'开始使用我们的服务。如您不同意，很遗憾我们将无法继续为 您提供服务。\",\"login_and_order\":\"登录并点餐\",\"no_login_and_order\":\"不登录并点餐\",\"scan_to_order\":\"扫码点餐\",\"number_calling_unavailable\":\"暂未开启叫号取餐功能\",\"unable_to_get_table_info\":\"未获取到桌位信息或者超出商家范围\",\"out_of_merchant_range\":\"超出商家范围\",\"add_required_items\":\"请添加必选商品\"},\"in_goods_components\":{\"view_all\":\"查看全部\",\"add_dish\":\"加菜\",\"table_number\":\"桌台号\",\"add_note\":\"添加备注\",\"place_order_now\":\"现在下单\",\"coupon\":\"劵\",\"discount_applied\":\"已优惠\",\"people\":\"人\",\"package\":\"包\",\"confirm\":\"确定\",\"navigation\":\"导航\",\"confirm_payment\":\"确认支付\",\"characters\":\"个字\",\"collapse_all\":\"收起全部\",\"items\":\"件商品\",\"cancel\":\"取消\",\"expected\":\"预计\",\"order_number\":\"订单号\",\"none\":\"无\",\"expected_to_gain\":\"预计可获得\",\"wait_to_eat\":\"坐等开吃\",\"points\":\"积分\",\"ordering_store\":\"下单门店\",\"order_successful\":\"下单成功\",\"pickup_time\":\"取单时间\",\"discount_offer\":\"满减优惠\",\"continue_ordering\":\"继续点餐\",\"total\":\"共\",\"total_amount\":\"合计\",\"payment_method\":\"支付方式\",\"note_information\":\"备注信息\",\"dining_type\":\"就餐类型\",\"place_and_pay\":\"下单并支付\",\"delivery_time\":\"送达时间\",\"discount\":\"减\",\"growth_value\":\"成长值\",\"order_type\":\"订单类型\",\"packaging_fee\":\"包装费\",\"copy\":\"复制\",\"dine_in\":\"店内就餐\",\"order_time\":\"下单时间\",\"new_customer_discount\":\"新客立减\",\"new\":\"新\",\"dish_in_preparation\":\"菜品已在制作中\",\"take_away\":\"打包带走\",\"order_information\":\"订单信息\",\"enter_note\":\"请输入备注\"},\"g-table\":{\"welcome_to\":\"欢迎来到\",\"hello\":\"您好\",\"please_select_dining_number\":\"请选择就餐人数\",\"table_number\":\"桌号\",\"people\":\"人\",\"start_ordering\":\"开始点餐\",\"please_enter_dining_number\":\"请输入就餐人数\",\"number_of_people\":\"人数\",\"please_enter\":\"请输入\",\"cancel\":\"取消\",\"confirm\":\"确定\",\"other\":\"其他\",\"please_select_number_of_people\":\"请选择人数\",\"please_enter_number_of_people\":\"请输入人数\",\"drink_together\":\"一起喝\",\"people_dining\":\"人就餐\",\"please_enter_product_name\":\"请输入商品名称\",\"are_you_sure_to_call_waiter\":\"您确定要呼叫服务员吗\",\"login_member\":\"登录会员\",\"enjoy_more_exclusive_privileges\":\"尊享更多专属特权\",\"login\":\"登录\",\"change_shop\":\"更换商铺\",\"select_shop_to_change\":\"选择你要更换的商铺\",\"shop_name\":\"商铺名称\",\"search\":\"搜索\",\"username\":\"用户名\",\"password\":\"密码\",\"forgot_password\":\"忘记密码\",\"remember_me\":\"记住我\"},\"bz\":{\"please-enter-remarks\":\"请输入备注\",\"order-notes\":\"订单备注\",\"upper-limit\":\"上限\",\"preferences-and-other-requirements\":\"偏好等要求\",\"character\":\"字哦\",\"quick-entry\":\"快捷输入\",\"submit\":\"提交\",\"characters\":\"个字\"},\"promptpay\":{\"payment_info\":\"支付金额\",\"time_left\":\"剩余时间\",\"minutes\":\"分\",\"seconds\":\"秒\",\"scan_to_pay\":\"请使用PromptPay扫描二维码支付\",\"auto_redirect\":\"付款成功后，详情页面会自动关闭，之后会跳转至“付款成功”页面\",\"note\":\"注：PromptPay不支持退款操作，如需退款，请联系商家协商\"},\"my-addres\":{\"contact_person\":\"联系人\",\"please_enter_name_of_recipient\":\"请填写收货人的姓名\",\"gender\":\"性别\",\"phone_number\":\"手机号\",\"please_enter_phone_number\":\"请填写收货手机号码\",\"auto_fill\":\"自动填写\",\"delivery_address\":\"收货地址\",\"click_to_select\":\"点击选择\",\"house_number\":\"门牌号\",\"for_example\":\"例如\",\"block\":\"座\",\"building\":\"楼\",\"room\":\"室\",\"select_label\":\"选择标签\",\"set_as_default_address\":\"设为默认地址\",\"delete\":\"删除\",\"save\":\"保存\",\"mr\":\"先生\",\"company\":\"公司\",\"ms\":\"女士\",\"home\":\"家\",\"school\":\"学校\",\"confirm_delete_address\":\"确定删除该地址吗\",\"missing_user\":\"缺少用户\",\"please_enter_contact_person\":\"请输入联系人\",\"enter_phone_number\":\"输入手机号\",\"please_select_address\":\"请选择地址\",\"please_enter_house_number_details\":\"请输入门牌号等详细地址\",\"please_select_label\":\"请选择标签\",\"missing_address\":\"缺少地址\",\"please_enter_valid_phone_number\":\"请输入正确的手机号\",\"save_successful\":\"保存成功\",\"wechat_import\":\"微信导入\",\"add_new_address\":\"新增地址\",\"current_address_out_of_delivery_range\":\"当前地址超出配送范围\"},\"integral\":{\"please_select_delivery_address\":\"请选择收货地址\",\"total\":\"合计\",\"points\":\"积分\",\"confirm_redemption\":\"确认兑换\",\"please_select_store\":\"请选择门店\",\"distance_from_you\":\"距离您\",\"contact_phone_number\":\"联系电话\",\"auto_fill\":\"自动填写\",\"actual\":\"实\",\"coupon\":\"优惠券\",\"remaining\":\"余\",\"redeem_coupon\":\"兑换优惠券\",\"redeem_balance\":\"兑换余额\",\"original_price\":\"原价\",\"sales\":\"销量\",\"pieces\":\"件\",\"remaining_pieces\":\"剩余\",\"product_details\":\"商品详情\",\"redeem_now\":\"立即兑换\",\"confirm_redemption_of_product\":\"是否确认兑换\",\"hot\":\"热门\",\"order_number\":\"订单编号\",\"total_pieces\":\"共计\",\"actual_payment\":\"实付\",\"cancel_order\":\"取消订单\",\"pay_now\":\"立即支付\",\"apply_for_refund\":\"申请退款\",\"confirm_receipt\":\"确认收货\",\"self_pickup_order\":\"自提订单\",\"verification_code\":\"核销码\",\"i_have_picked_up\":\"我已取货\",\"all\":\"全部\",\"pending_payment\":\"待支付\",\"pending_shipment\":\"待发货\",\"pending_receipt\":\"待收货\",\"completed\":\"已完成\",\"redemption_record\":\"兑换记录\",\"are_you_sure_to_cancel_order\":\"您确认取消订单吗\",\"are_you_sure_to_apply_for_refund\":\"您确认申请退款吗\",\"are_you_sure_to_confirm_receipt\":\"您确认收货吗\",\"have_you_received_the_goods\":\"是否已收到商品\",\"no_points_detail_yet\":\"当前还没有积分明细哦\",\"details\":\"明细\",\"delivery_address\":\"快递发货地址\",\"store_pickup_address\":\"门店自提地址\",\"purchase_quantity\":\"购买数量\",\"product_type\":\"商品类型\",\"physical_product\":\"实物商品\",\"balance\":\"余额\",\"delivery_method\":\"配送方式\",\"courier_delivery\":\"快递配送\",\"shipping_fee\":\"运费\",\"free_shipping\":\"免邮\",\"store_pickup\":\"到店自取\",\"order_information\":\"订单信息\",\"payment_time\":\"支付时间\",\"courier_name\":\"快递名称\",\"courier_tracking_number\":\"快递单号\",\"payment_method\":\"支付方式\",\"order_details\":\"订单详情\",\"courier_fee\":\"快递费\",\"please_select_address\":\"请选择地址\",\"are_you_sure_to_redeem_product\":\"是否确认兑换该商品\",\"points_sign_in\":\"积分签到\",\"points_record\":\"兑换记录\",\"points_details\":\"积分明细\",\"points_rules\":\"积分规则\",\"no_products_available_for_redemption_in_current_category\":\"当前分类没有商品可兑换哦\",\"points_mall\":\"积分商城\",\"rules\":\"规则\",\"shop\":\"商城\"},\"lineup\":{\"my_number\":\"我的号码\",\"waiting_tables_ahead\":\"前方等待桌数\",\"table\":\"桌\",\"estimated_waiting_time\":\"预计等待时长\",\"minutes\":\"分钟\",\"already_waited\":\"已等待\",\"phone_number\":\"手机号\",\"take_number_time\":\"取号时间\",\"take_number_channel\":\"取号渠道\",\"take_number_store\":\"取号门店\",\"merchant_reminder\":\"商家提醒\",\"you_have_passed\":\"您已过号\",\"click_button_to_requeue\":\"可点击下方按钮重新排队取号\",\"cancel_queue\":\"取消排队\",\"requeue\":\"重新排队取号\",\"in_queue\":\"排队中\",\"dined\":\"已就餐\",\"passed\":\"已过号\",\"cancelled\":\"已取消\",\"loading\":\"加载中\",\"queue_details\":\"排队详情\",\"prompt\":\"提示\",\"confirm_cancel_queue\":\"您确定取消排队吗\",\"continue_queue\":\"继续排队\",\"cancelling\":\"取消中\",\"table_type\":\"餐桌类型\",\"waiting_tables\":\"等待桌数\",\"estimated_waiting\":\"预计等待\",\"people\":\"人\",\"no_waiting\":\"无需等候\",\"dining_people\":\"就餐人数\",\"please_select\":\"请选择\",\"please_select_people_based_on_table_type\":\"请根据餐桌类型选择人数\",\"please_enter_phone_number\":\"请输入手机号\",\"confirm_take_number\":\"确认取号\",\"queue_for_number\":\"排队取号\",\"my_queue\":\"我的排队\",\"queue\":\"排队\",\"store_queue_closed\":\"门店排队取号已关闭\",\"missing_user\":\"缺少用户\",\"please_select_valid_people_based_on_table_type\":\"请根据餐桌类型选择有效的人数\",\"please_select_people\":\"请选择人数\",\"please_fill_in_phone_number\":\"请填写手机号\",\"please_enter_correct_phone_number\":\"请输入正确的手机号\",\"take_number_info\":\"取号信息\"},\"my-other\":{\"stay_tuned\":\"敬请期待\",\"contact_information\":\"联系方式\",\"copy_wechat_id\":\"复制微信号\",\"make_a_call\":\"拨打电话\",\"long_press_to_identify_qr_code\":\"长按识别二维码\",\"if_unable_to_identify_qr_code\":\"如无法识别二维码\",\"save_image_and_scan_in_wechat\":\"请保存图片后在Line中扫码识别\",\"online_customer_service\":\"在线客服\",\"contact_us\":\"联系我们\",\"help_center\":\"帮助中心\",\"user_service_agreement\":\"用户服务协议\",\"privacy_policy\":\"隐私权政策\",\"about_us\":\"关于我们\",\"points_rules\":\"积分规则\",\"version_number\":\"版本号\"},\"my-signin\":{\"consecutive_check_ins\":\"已连续签到\",\"days\":\"天\",\"checked_in_today\":\"今日已签到\",\"not_checked_in_today\":\"今日未签到\",\"checked_in\":\"已签到\",\"check_in_now\":\"立即签到\",\"consecutive_check_in_rewards\":\"连续签到奖励\",\"gift_balance\":\"赠送余额\",\"gift_points\":\"赠送积分\",\"gift_coupons\":\"赠送优惠券\",\"my_check_ins\":\"我的签到\",\"points\":\"积分\",\"total_points\":\"累计积分\",\"total_balance\":\"累计余额\",\"pieces\":\"张\",\"total_coupons\":\"累计优惠券\",\"times\":\"次\",\"total_check_ins\":\"累计签到\",\"check_in_instructions\":\"签到说明\",\"check_in\":\"签到\",\"tips\":\"提示\",\"check_in_function_is_closed\":\"签到功能已关闭\",\"back\":\"返回\",\"streak\":\"连续签到\"},\"my-vip\":{\"member\":\"会员\",\"level_description\":\"等级说明\",\"privileges\":\"特权\",\"upgrade_rewards\":\"升级奖励\",\"gift_balance\":\"赠送余额\",\"gift_points\":\"赠送积分\",\"membership_benefits\":\"会员权益\",\"discount\":\"折\",\"product_discount\":\"商品折扣\",\"multiplier\":\"倍\",\"points_multiplier\":\"积分倍率\",\"free_shipping_over\":\"满\",\"free_shipping\":\"免配送费\",\"permanently_valid\":\"永久有效\",\"vip_qr\":\"显示VIP二维码\"},\"other-coupon\":{\"cancel_gift\":\"取消赠送\",\"on\":\"于\",\"receive\":\"领取\",\"gifting\":\"赠送中\",\"gifted\":\"已赠送\",\"gift_records\":\"赠送记录\",\"confirm_cancel_gift\":\"是否确认取消赠送\",\"used\":\"已使用\",\"expired\":\"已失效\",\"coupon_history\":\"历史优惠券\",\"coupon_event\":\"领券活动\",\"coupon_center\":\"领券中心\",\"receive_coupon\":\"领取优惠券\",\"activity_description\":\"活动说明\",\"immediate_receive\":\"立即领取\",\"activity_ended\":\"活动已结束\",\"your_friend\":\"您的好友\",\"send_you_coupon\":\"送您优惠券啦\",\"no_limit\":\"无限制\",\"full\":\"满\",\"available\":\"可用\",\"friend_not_received\":\"您的好友还未领取\",\"auto_return_hours\":\"小时未领取将自动退回哦\",\"coupon_canceled\":\"您的优惠券已取消赠送\",\"coupon_received\":\"优惠券已领取\",\"open_expired_coupon\":\"开启优惠券过期\",\"account_reminder\":\"到账提醒\",\"immediate_subscribe\":\"立即订阅\",\"exchange_coupon\":\"兑换优惠券\",\"gift_record\":\"赠送记录\",\"coupon_collection\":\"优惠券领取\",\"my_coupons\":\"我的优惠券\",\"enter_exchange_code\":\"请输入兑换码\",\"confirm_exchange\":\"确认兑换\",\"exchange_center\":\"兑换中心\",\"exchange_code_description\":\"兑换码兑换后\",\"use_when_ordering\":\"可在下单时使用\",\"confirm_exchange_action\":\"是否确认兑换\"},\"wifi\":{\"wifi_name\":\"WiFi名称：\",\"no_wifi_info\":\"该门店暂未配置WiFi信息\",\"wifi_password\":\"WiFi密码：\",\"quick_connect\":\"快速连接 . 无需密码 . 保护隐私\",\"phone_wifi_connected\":\"手机WiFi已连接：\",\"wifi_connected\":\"WiFi已连接\",\"secure_connect\":\"一键安全连接WiFi\",\"system_not_supported\":\"当前系统不支持相关能力\",\"password_error\":\"密码错误\",\"connection_timeout\":\"连接超时,请查看WiFi是否正确或重试\",\"repeated_connection\":\"重复连接 Wi-Fi\",\"open_wifi\":\"请打开wifi开关\",\"open_gps\":\"未打开 GPS 定位开关\",\"user_denied\":\"用户拒绝授权链接 Wi-Fi\",\"invalid_wifi_name\":\"无效wifi名称\",\"operator_denied\":\"系统运营商配置拒绝连接Wi-Fi\",\"background_config_not_supported\":\"应用在后台无法配置 Wi-Fi\",\"expired_wifi_config\":\"系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试\",\"invalid_password\":\"无效的 WEP / WPA 密码\",\"turn_on_wifi_before_connecting\":\"连接前请先开启手机wifi功能\",\"mobile_version_not_supported\":\"手机版本不支持\",\"connection_successful\":\"连接成功\"},\"chooseAvatar\":{\"email\":\"email\",\"complete_profile\":\"完善资料\",\"check_now\":\"去查看\",\"user\":\"用户\",\"user_nickname\":\"用户昵称\",\"enter_user_nickname\":\"请输入用户昵称\",\"mobile_number\":\"手机号\",\"change\":\"更换\",\"authorized_mobile_number\":\"授权手机号\",\"real_name\":\"真实姓名\",\"gender\":\"性别\",\"birthday\":\"生日\",\"birthday_once_modified\":\"生日一经修改\",\"cannot_edit_again\":\"不可再编辑哦\",\"birthday_gift_rules\":\"生日有礼发放规则\",\"save\":\"保存\",\"log_out\":\"退出登录\",\"male\":\"男\",\"female\":\"女\",\"personal_info\":\"个人资料\",\"merchants_discounts_based_on_birthday\":\"商家可能会根据生日推出相关优惠活动,您只能设置一次个人生日,确定设置吗\",\"set_birthday_once\":\"您只能设置一次个人生日\",\"confirm_set\":\"确定设置吗\",\"registration_successful\":\"注册成功\",\"warm_reminder\":\"温馨提示\",\"authorized_mobile_number_failed\":\"授权手机号失败\",\"please_authorize_mobile_number\":\"请授权手机号\",\"modification_successful\":\"修改成功\",\"select_image_or_nickname\":\"请选择图像或者昵称\",\"confirm_logout\":\"您确定退出登录吗\",\"activity_description\":\"活动说明\",\"birthday_cannot_be_modified\":\"生日无法修改哦\",\"please_birthday\":\"请选择生日\",\"membership_card\":\"完善手机号、生日等资料领取会员卡\",\"code\":\"验证码\",\"enter_code\":\"请输入验证码\",\"enter_mobile\":\"请输入手机号\",\"enter_email\":\"请输入邮箱\",\"enter_realName\":\"请输入姓名\",\"requestopt\":\"获取验证码\",\"enteropt\":\"输入验证码\",\"send_verification_code\":\"Send Verification Code\",\"claim_card\":\"领卡\"},\"other-reserve\":{\"wechat_user\":\"微信用户\",\"welcome\":\"欢迎您\",\"please_modify_reservation_info\":\"请修改预定信息\",\"modify\":\"修改\",\"please_enter_contact_name\":\"请填写联系人姓名\",\"please_enter_phone_number\":\"请输入手机号\",\"contact_information\":\"联系方式\",\"please_enter_reservation_number\":\"请输入预定桌数\",\"reservation_number\":\"预定桌数\",\"if_other_needs\":\"如有其它需求\",\"please_note\":\"请备注说明\",\"deposit_description\":\"定金说明\",\"dining_time\":\"就餐时间\",\"number_of_people\":\"就餐人数\",\"dining_area\":\"就餐区域\",\"dining_position\":\"就餐位置\",\"reservation_amount\":\"预定金额\",\"time_left_less_than\":\"距离就餐时间不足\",\"minutes\":\"分钟\",\"amount_not_refundable_after_merchant_acceptance\":\"商家接单后支付金额无法返还\",\"payment_means_agreement\":\"支付即表示您已同意上述规则说明\",\"pay_now\":\"立即支付\",\"book_now\":\"立即预约\",\"male\":\"男\",\"female\":\"女\",\"lady\":\"女士\",\"mr\":\"先生\",\"reserve\":\"预定\",\"please_complete_reservation_info\":\"请完善预定信息\",\"minimum_reservation_number\":\"预定桌数最小为\",\"missing_type\":\"缺少类型\",\"missing_merchant\":\"缺少商家\",\"please_enter_contact_name_again\":\"请填写联系人姓名\",\"please_enter_phone_number_again\":\"请填写手机号\",\"please_enter_correct_phone_number\":\"请输入正确的手机号\",\"order_verification_code\":\"订单核销码\",\"time_and_number_of_people\":\"时间人数\",\"people\":\"人\",\"position_requirements\":\"位置要求\",\"contact_information_again\":\"联系方式\",\"reservation_deposit\":\"预约定金\",\"order_time\":\"下单时间\",\"order_number\":\"订单编号\",\"order_notes\":\"订单备注\",\"cancel_reservation\":\"取消预定\",\"contacting_merchant\":\"联系商家中\",\"merchant_processing\":\"商家处理中\",\"result_confirmation\":\"结果确认\",\"reservation_details\":\"预约详情\",\"confirm_cancel_order\":\"您确认取消订单吗\",\"cancelling_order\":\"取消订单中\",\"operation_successful\":\"操作成功\",\"prompt\":\"提示\",\"confirm_cancel_reservation\":\"确定取消预定吗\",\"cancel_reservation_again\":\"取消预定\",\"continue_reservation\":\"继续预定\",\"cancelling\":\"取消中\",\"people_again\":\"人\",\"prepayment_per_table\":\"每桌需预付\",\"deposit\":\"订金\",\"cancel_if_not_arrived_in_time\":\"若不能及时到店\",\"cancel_before_dining\":\"就餐前\",\"minutes_can_cancel_order\":\"分钟可取消订单\",\"reserve_now\":\"立即预定\",\"table_reservation\":\"餐桌预定\",\"my_reservations\":\"我的预定\",\"table_reservation_again\":\"餐桌预定\",\"people_once_more\":\"人\",\"confirm_cancel_reservation_again\":\"您确定取消预定吗\",\"table_reservation_closed\":\"餐桌预定已关闭\",\"table_reservation_not_set\":\"餐桌预定功能未设置\",\"minimum_people_per_reservation\":\"人起订\",\"maximum\":\"最多\",\"people_final\":\"人\",\"please_choose_reservation_type\":\"请选择预定类型\",\"reservation_info\":\"预定信息\",\"people_count\":\"人\",\"table_count\":\"桌\",\"pay_immediately\":\"立即支付\",\"cancel_reservation_final\":\"取消预定\"},\"recharge\":{\"all\":\"全部\",\"recharge\":\"充值\",\"consumption\":\"消费\",\"transaction_record\":\"交易记录\",\"account_balance\":\"账户余额\",\"stored_value_exchange\":\"储值兑换\",\"gift\":\"赠\",\"balance\":\"余额\",\"points\":\"积分\",\"first_recharge_reward\":\"首充奖励\",\"please_enter\":\"请输入\",\"other_amount\":\"其他金额\",\"you_will_get\":\"您将获得\",\"give\":\"赠送\",\"upgrade_to_membership_level\":\"提升至会员等级\",\"instructions\":\"使用说明\",\"membership_stored_value_agreement\":\"会员储值协议\",\"store_value_now\":\"立即储值\",\"membership_stored_value\":\"会员储值\",\"tip\":\"提示\",\"stored_value_function_is_closed\":\"储值功能已关闭\",\"please_select_a_store\":\"请选择门店\",\"please_read_and_agree_to_the_membership_stored_value_agreement_carefully\":\"请认真阅读并同意会员储值协议\",\"please_enter_the_stored_value_amount\":\"请输入储值金额\",\"minimum_recharge_amount\":\"最低充值金额\",\"placing_order\":\"下单中\"},\"sq-btn\":{\"welcome\":\"欢迎加入\",\"exclusive_activities\":\"加入后享专属活动\",\"member_gifts\":\"会员好礼\",\"phone_login\":\"手机号快捷登录\",\"not_login_now\":\"暂不登录\",\"enter_phone_number\":\"请输入手机号\",\"enter_verification_code\":\"请填写验证码\",\"sent\":\"已发送\",\"login_now\":\"立即登录\",\"not_login\":\"暂不登录\",\"allow_usage_of_personal_info\":\"允许我们在必要场景下，合理使用您的个人信息，并且充分保障您的合法权利\",\"protect_legal_rights\":\"合理使用您的个人信息\",\"ensure_rights\":\"并且充分保障您的合法权利\",\"user_agreement\":\"用户协议\",\"get_verification_code\":\"获取验证码\",\"read_and_agree\":\"请阅读并同意\",\"prompt\":\"提示\",\"click_top_right_to_share\":\"点击右上角分享\",\"got_it\":\"我知道了\",\"binding_successful\":\"绑定成功\",\"registration_successful\":\"注册成功\",\"warm_prompt\":\"温馨提示\",\"phone_authorization_failed\":\"授权手机号失败\",\"seconds\":\"秒\",\"send_verification_code\":\"发送验证码\",\"login_successful\":\"登录成功\",\"bind_phone_number\":\"绑定手机号\"},\"login\":{\"welcome_message\":\"欢迎使用\",\"phone_number\":\"手机号\",\"enter_email_or_phone\":\"请输入邮箱或手机号码\",\"password\":\"密码\",\"enter_password\":\"请输入密码\",\"login\":\"登录\",\"forgot_password\":\"忘记密码\",\"no_account\":\"没有账号\",\"register\":\"去注册\",\"third_party_login\":\"第三方登录\",\"enter_email_or_phone_placeholder\":\"请输入邮箱或手机号\",\"enter_password_placeholder\":\"请输入密码\"},\"password_reset\":{\"reset_password\":\"重设密码\",\"enter_phone_number\":\"请输入电话号码\",\"ente_email\":\"请输入邮箱\",\"enter_verification_code\":\"请输入验证码\",\"enter_new_password\":\"请输入新密码\",\"confirm\":\"确定\",\"reset_password_via_email\":\"邮箱重设密码\",\"reset_password_via_phone\":\"手机号重设密码\",\"enter_phone_number_again\":\"请输入手机号\",\"saving\":\"保存中\",\"saved_successfully\":\"保存成功\",\"sending\":\"发送中\"},\"registration\":{\"welcome_message\":\"欢迎加入\",\"enter_phone_number\":\"请输入电话号码\",\"enter_email\":\"请输入邮箱\",\"enter_verification_code\":\"请输入验证码\",\"enter_password\":\"请输入密码\",\"enter_confirm_password\":\"请输入确认密码\",\"register_and_login\":\"注册并登录\",\"register_with_email\":\"邮箱注册\",\"register_with_phone\":\"手机号注册\",\"enter_correctly\":\"请输入正确\",\"passwords_do_not_match\":\"输入密码不一致\"},\"pointdl\":{\"already_have\":\"已拥有\",\"collect_points\":\"集点\",\"still_missing\":\"还差\",\"can_get\":\"可获得\",\"balance\":\"余额\",\"points\":\"积分\",\"coupons\":\"优惠券\",\"event_description\":\"活动说明\",\"points_for_gift\":\"集点有礼\"},\"addres\":{\"please_select_location\":\"请选择位置\"},\"my-coupon\":{\"coupon_unusable\":\"不可使用券\",\"copy\":\"复制\",\"usage_rules\":\"使用规则\",\"all_stores\":\"全部门店\",\"valid_for_n_days\":\"个自然日内有效\",\"coupon_description\":\"优惠券说明\",\"highest_price_discount\":\"优惠最高价格商品\",\"choose_friend\":\"选择好友\",\"fixed\":\"固定\",\"not_applicable_for_specified_products\":\"指定商品不适用\",\"usable\":\"可用\",\"effective_from_day\":\"当日起\",\"lowest_price_discount\":\"优惠最低价格商品\",\"exchange_rules\":\"兑换规则\",\"my_coupons\":\"我的券\",\"view_product\":\"查看商品\",\"exchange\":\"兑\",\"instant_discount\":\"立减\",\"view_store\":\"查看门店\",\"coupon_center\":\"领券中心\",\"text_type\":\"文字类型\",\"not_applicable_for_specified_stores\":\"指定门店不适用\",\"used_or_expired_coupon\":\"已使用券已过期\",\"exchange_product\":\"兑换商品\",\"coupon_source\":\"优惠券来源\",\"confirm_gift\":\"确定赠送\",\"coupon_display\":\"优惠券显示\",\"usable_coupons\":\"可使用券\",\"applicable_stores_specified\":\"指定门店适用\",\"expires_soon\":\"距离过期仅剩\",\"style_type\":\"样式类型\",\"shipping\":\"运\",\"free_shipping\":\"免配送费\",\"validity_period\":\"领取有效期\",\"quantity\":\"张\",\"discount\":\"折\",\"validity_period_usage\":\"使用有效期\",\"valid_from\":\"此日起\",\"days\":\"天\",\"claim_now\":\"立即领取\",\"generation\":\"代\",\"reason_unusable\":\"不可用原因\",\"all_products\":\"全部商品\",\"valid_for_n_hours\":\"个小时内有效\",\"gift_to_friend\":\"赠送好友\",\"scan_to_order\":\"扫码点餐\",\"pay_in_person\":\"当面付\",\"second_highest_price_discount\":\"优惠次高价格商品\",\"takeaway\":\"外卖\",\"start\":\"开始\",\"applicable_stores\":\"适用门店\",\"no_restrictions\":\"无限制\",\"applicable_products\":\"适用商品\",\"received_coupon\":\"获得券\",\"total\":\"共\",\"notification\":\"提示\",\"use_now\":\"去使用\",\"self_pickup\":\"自提\",\"applicable_specified_products\":\"指定商品适用\",\"usage_scenario\":\"使用场景\",\"coupon\":\"优惠券\",\"min_purchase\":\"满\",\"fast_food\":\"快餐\",\"activity_name\":\"活动名称\",\"minimum_purchase\":\"满\",\"available\":\"可用\",\"valid_until\":\"有效期至\",\"issued_successfully\":\"发放成功\",\"bonus_balance\":\"赠送余额\",\"bonus_points\":\"赠送积分\",\"login_and_claim\":\"登录并领取\",\"show_redeem_code\":\"请将核销码出示给门店进行取货\",\"points\":\"积分\",\"added_to_account\":\"已放入您的账户\",\"view_in_miniprogram\":\"可在小程序\",\"personal_center\":\"个人中心中查看\",\"participate_now\":\"我也要参与活动\",\"place_order\":\"去下单\",\"popup_coupon\":\"弹窗优惠券\",\"new_user_gift\":\"新人礼包\",\"claimed_successfully\":\"领取成功\",\"enter_phone_number\":\"输入好友手机号\",\"coupon_not_applicable\":\"不可用优惠券\"},\"refunddl\":{\"refund_reason\":\"退款原因\",\"other_reason\":\"其他原因\",\"refund_remarks_optional\":\"请备注退款说明(选填)\",\"apply_refund\":\"申请退款\",\"select_refund_reason\":\"请选择退款原因\"},\"privacy\":{\"privacy_policy_title\":\"用户隐私保护指引\",\"privacy_policy_intro\":\"感谢您的使用，在使用本小程序前，应当阅读并同意\",\"privacy_policy_link\":\"《小程序隐私保护指引》\",\"privacy_policy_agreement\":\"如您同意小程序隐私保护指引，请点击‘同意’开始使用。\",\"reject_button\":\"拒绝\",\"agree_button\":\"同意\",\"default_privacy_policy_name\":\"《用户隐私保护指引》\"},\"shop_activity\":{\"activity_rules\":\"活动规则\",\"activity_type\":\"活动类型\",\"full_discount\":\"满额立减\",\"discount\":\"满减折扣\",\"new_customer_discount\":\"新客立减\",\"activity_time\":\"活动时间\",\"usage_scenario\":\"使用场景\",\"takeaway\":\"外卖\",\"self_pickup\":\"自提\",\"threshold_limit\":\"门槛限制\",\"include_extra_item_price\":\"包含加料商品价格\",\"include_packaging_fee\":\"包含包装费\",\"include_delivery_fee\":\"包含配送费\",\"applicable_products\":\"适用商品\",\"all_products\":\"全部商品\",\"specified_products_applicable\":\"指定商品适用\",\"specified_products_not_applicable\":\"指定商品不适用\",\"activity_products\":\"活动商品\",\"activity_details\":\"活动详情\"}}");

/***/ }),

/***/ 35:
/*!************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/locale/th.json ***!
  \************************************************/
/*! exports provided: common, pagetitle, modal, my-agree, drag-btn, tabbar, cartbar, in-cart-popup, cart-popup, product-modal, tc-modal, m-info, shop-notice, shop-select, mr-code, dmf, goods, pay_order, detail, pay-order, check-shop, check-time, self-fetch-addres, take-out-addres, check-save, check-point, discounts, waiter, check-goods, check-notes, order-index, order-list, pay, order-detail, o-out-btn, o-status, o-btn, o-discount, o-in-btn, o-info, my, s-h1, s-h2, my_property, in_goods, in_goods_components, g-table, bz, promptpay, my-addres, integral, lineup, my-other, my-signin, my-vip, other-coupon, wifi, chooseAvatar, other-reserve, recharge, sq-btn, login, password_reset, registration, pointdl, address, my-coupon, refunddl, privacy, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"common\":{\"noOrdersYet\":\"ยังไม่มีคำสั่งซื้อ\",\"uni.app.quit\":\"กดอีกครั้งเพื่อออกจากแอปพลิเคชัน\",\"uni.async.error\":\"การเชื่อมต่อกับเซิร์ฟเวอร์หมดเวลา แตะหน้าจอเพื่อลองใหม่\",\"uni.showActionSheet.cancel\":\"ยกเลิก\",\"uni.showToast.unpaired\":\"โปรดทราบว่า showToast ต้องใช้ร่วมกับ hideToast\",\"uni.showLoading.unpaired\":\"โปรดทราบว่า showLoading ต้องใช้ร่วมกับ hideLoading\",\"uni.showModal.cancel\":\"ยกเลิก\",\"uni.showModal.confirm\":\"ยืนยัน\",\"uni.chooseImage.cancel\":\"ยกเลิก\",\"uni.chooseImage.sourceType.album\":\"เลือกจากอัลบั้ม\",\"uni.chooseImage.sourceType.camera\":\"ถ่ายภาพ\",\"uni.chooseVideo.cancel\":\"ยกเลิก\",\"uni.chooseVideo.sourceType.album\":\"เลือกจากอัลบั้ม\",\"uni.chooseVideo.sourceType.camera\":\"ถ่ายวิดีโอ\",\"uni.previewImage.cancel\":\"ยกเลิก\",\"uni.previewImage.button.save\":\"บันทึกภาพ\",\"uni.previewImage.save.success\":\"บันทึกภาพลงในอัลบั้มสำเร็จ\",\"uni.previewImage.save.fail\":\"บันทึกภาพลงในอัลบั้มล้มเหลว\",\"uni.setClipboardData.success\":\"คัดลอกเนื้อหาแล้ว\",\"uni.scanCode.title\":\"สแกนรหัส\",\"uni.scanCode.album\":\"อัลบั้ม\",\"uni.scanCode.fail\":\"การรู้จำล้มเหลว\",\"uni.scanCode.flash.on\":\"แตะเพื่อเปิดไฟแฟลช\",\"uni.scanCode.flash.off\":\"แตะเพื่อปิดไฟแฟลช\",\"uni.startSoterAuthentication.authContent\":\"กำลังรับรู้ลายนิ้วมือ...\",\"uni.picker.done\":\"เสร็จสิ้น\",\"uni.picker.cancel\":\"ยกเลิก\",\"uni.video.danmu\":\"ดาน์มู\",\"uni.video.volume\":\"ระดับเสียง\",\"uni.button.feedback.title\":\"ติดต่อเรา\",\"uni.button.feedback.send\":\"ส่ง\"},\"pagetitle\":{\"Membership\":\"ระบบสมาชิก\",\"personalcenter\":\"ข้อมูลส่วนบุคคล\"},\"modal\":{\"title\":\"คำแนะนำ\",\"cancelText\":\"ยกเลิก\",\"confirmText\":\"ตกลง\",\"return_table\":\"กลับไปที่โต๊ะ\",\"choose_language\":\"เลือกภาษา\",\"chinese\":\"中文\",\"english\":\"English\",\"confirm\":\"ตกลง\",\"thai\":\"ไทย\",\"authorization_failed\":\"การอนุญาตล้มเหลว\",\"loading_complete\":\"โหลดเสร็จเรียบร้อย\",\"loading\":\"กำลังโหลด\",\"save\":\"บันทึก\",\"select_date\":\"เลือกวันที่\"},\"my-agree\":{\"i_have_read_and_agree\":\"ฉันได้อ่านและยอมรับ\"},\"drag-btn\":{\"Member Rights\":\"สิทธิพิเศษสมาชิก\",\"Sales Promotion\":\"โปรโมชั่น\",\"Coupon\":\"คูปอง\",\"stamp cards\":\"แสตมป์สะสมน้ำซุป\",\"Scan the QR\":\"สแกน QR\",\"address\":\"ที่อยู่ของฉัน\",\"Service\":\"ติดต่อฝ่ายบริการลูกค้า\",\"Contact Us\":\"ติดต่อเรา\",\"Policy\":\"นโยบาย\",\"Code\":\"รหัสสมาชิก\",\"Language\":\"เปลี่ยนภาษา\",\"merchant_on_break\":\"ร้านปิดพักบริการ ไม่สามารถใช้ฟังก์ชั่นนี้ได้\",\"receive_gifts\":\"แสตมป์ เพื่อรับน้ำซุปฟรี\"},\"tabbar\":{\"home\":\"หน้าแรก\",\"goods\":\"เมนู\",\"order\":\"คำสั่งซื้อ\",\"user\":\"สมาชิก\",\"my\":\"ของฉัน\"},\"cartbar\":{\"total_discount\":\"ส่วนลดทั้งหมด\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"ค่าจัดส่งเพิ่มเติม\",\"proceed_to_checkout\":\"สั่งซื้อ\",\"discount_applied\":\"ได้รับส่วนลดแล้ว\"},\"in-cart-popup\":{\"total_discount\":\"ส่วนลดทั้งหมด\",\"delivery\":\"ส่งถึงบ้าน\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"ค่าจัดส่งเพิ่มเติม\",\"clear\":\"ล้าง\",\"selected_items\":\"สินค้าที่เลือก\",\"packaging_fee\":\"ค่าบรรจุภัณฑ์\",\"pick_up\":\"รับเอง\",\"confirm_cart_clear\":\"ยืนยันล้างรถเข็น\",\"discount_applied\":\"ได้รับส่วนลดแล้ว\",\"service_fee\":\"ค่าบริการ\"},\"cart-popup\":{\"total_discount\":\"ส่วนลดทั้งหมด\",\"delivery\":\"ส่งถึงบ้าน\",\"yuan\":\"THB\",\"additional_delivery_fee\":\"ค่าจัดส่งเพิ่มเติม\",\"clear\":\"ล้าง\",\"selected_items\":\"สินค้าที่เลือก\",\"packaging_fee\":\"ค่าบรรจุภัณฑ์\",\"pick_up\":\"รับเอง\",\"confirm_cart_clear\":\"ยืนยันล้างรถเข็น\",\"discount_applied\":\"ได้รับส่วนลดแล้ว\"},\"product-modal\":{\"portion\":\"ส่วน\",\"inventory\":\"สต็อก\",\"select_required_add_ons\":\"กรุณาเลือกส่วนผสมที่ต้องเพิ่ม\",\"member_price\":\"ราคาสมาชิก\",\"mandatory\":\"จำเป็นต้องเลือก\",\"this_product\":\"สินค้านี้\",\"exclusive\":\"พิเศษ\",\"specification\":\"รายละเอียด\",\"attributes\":\"คุณสมบัติ\",\"minimum_portion_purchase\":\"ขั้นต่ำในการซื้อ\",\"sold_out\":\"สินค้าหมด\",\"add_to_bag\":\"เพิ่มในรถเข็น\",\"has\":\"มี\",\"from\":\"จาก\",\"no_less_possible\":\"ไม่สามารถน้อยกว่านี้ได้\",\"buy_now\":\"ซื้อทันที\",\"product_purchase_limit\":\"จำกัดการซื้อสินค้านี้\"},\"tc-modal\":{\"portion\":\"ส่วน\",\"inventory\":\"สต็อก\",\"select_required_add_ons\":\"กรุณาเลือกส่วนผสมที่ต้องเพิ่ม\",\"member_price\":\"ราคาสมาชิก\",\"mandatory\":\"จำเป็นต้องเลือก\",\"this_product\":\"สินค้านี้\",\"exclusive\":\"พิเศษ\",\"specification\":\"รายละเอียด\",\"attributes\":\"คุณสมบัติ\",\"minimum_portion_purchase\":\"ขั้นต่ำในการซื้อ\",\"sold_out\":\"สินค้าหมด\",\"selected_ok\":\"เลือกเสร็จแล้ว\",\"has\":\"มี\",\"from\":\"จาก\",\"no_less_possible\":\"ไม่สามารถน้อยกว่านี้ได้\",\"buy_now\":\"สั่งทันที\",\"product_purchase_limit\":\"จำกัดการซื้อสินค้านี้\"},\"m-info\":{\"membercode\":\"รหัสสมาชิก\",\"balance\":\"ยอดเงินคงเหลือ\",\"points\":\"คะแนนสะสม\",\"coupon\":\"คูปองของฉัน\",\"welcome, please log in\":\"ยินดีต้อนรับ กรุณาเข้าสู่ระบบ\",\"Become a member and enjoy more membership benefits\":\"สมัครสมาชิกและรับสิทธิประโยชน์มากมาย\",\"Login\":\"เข้าสู่ระบบ\"},\"shop-notice\":{\"welcome\":\"ยินดีต้อนรับ\",\"pleased_to_serve\":\"ยินดีให้บริการ\",\"view\":\"ดู\",\"full_reduction\":\"ลดราคาเต็มจำนวน\",\"delivery_fee\":\"ค่าจัดส่ง\",\"mytian_delivery\":\"การจัดส่งโดย Mytian\",\"store_information\":\"ข้อมูลร้านค้า\",\"full\":\"เต็ม\",\"makeco_delivery\":\"การจัดส่งโดย Makeco\",\"starting_delivery\":\"เริ่มต้นการจัดส่ง\",\"contact_information\":\"ข้อมูลการติดต่อ\",\"call_now\":\"โทรทันที\",\"delivery_service_provided\":\"ให้บริการจัดส่ง\",\"instant_discount\":\"ส่วนลดทันที\",\"click_to_collapse\":\"คลิกเพื่อยุบ\",\"items\":\"รายการ\",\"discount\":\"ส่วนลด\",\"merchant_self_delivery\":\"การจัดส่งโดยร้านค้าเอง\",\"more\":\"เพิ่มเติม\",\"wsb_delivery\":\"การจัดส่งโดย WSB\",\"reduce\":\"ลด\",\"delivery_range_weather_influence\":\"ขอบเขตการจัดส่งอาจได้รับผลกระทบจากสภาพอากาศ\",\"store_delivery_range\":\"ขอบเขตการจัดส่งของร้านค้า\",\"currency\":\"THB\",\"delivery\":\"การจัดส่ง\",\"store_by\":\"ร้านนี้โดย\",\"business_hours\":\"เวลาทำการ\",\"real_time_delivery_range\":\"ขอบเขตการจัดส่งจริงอาจเปลี่ยนแปลงตามสถานการณ์\",\"new_customer_discount\":\"ส่วนลดสำหรับลูกค้าใหม่\",\"view_store_services\":\"ดูบริการของร้านค้า\",\"store_address\":\"ที่อยู่ร้านค้า\",\"next_day\":\"วันถัดไป\",\"every_full\":\"ทุกครั้งที่เต็ม\",\"maximum_reduction\":\"ลดสูงสุด\",\"within_kilometers\":\"ภายในกิโลเมตร\"},\"shop-select\":{\"resting\":\"ปิดพัก\",\"place_order\":\"สั่งซื้อ\",\"cancel\":\"ยกเลิก\",\"delivery_available\":\"สามารถจัดส่งได้\",\"pick_up_available\":\"สามารถรับเองได้\",\"map\":\"แผนที่\",\"locating\":\"กำลังหาตำแหน่ง\",\"expand\":\"ขยาย\",\"frequent\":\"เยี่ยมชมบ่อย\",\"store\":\"ร้านค้า\",\"far_from_store\":\"ตำแหน่งปัจจุบันของคุณอยู่ไกลจากร้านค้า\",\"accept_reservations\":\"รับการจอง\",\"search\":\"ค้นหา\",\"favorite_store\":\"ร้านค้าที่ชื่นชอบ\",\"collapse\":\"ยุบ\",\"no_relevant_stores\":\"ไม่มีร้านค้าที่เกี่ยวข้อง\",\"view_map\":\"ดูแผนที่\",\"next_day\":\"วันถัดไป\",\"confirm_switch_to\":\"ยืนยันการเปลี่ยนไปยัง\",\"confirm_switch_to_store\":\"ยืนยันการเปลี่ยนไปยังร้านค้านี้หรือไม่\",\"busy\":\"ยุ่ง\",\"open\":\"เปิด\",\"enter_search_content\":\"กรุณาใส่เนื้อหาการค้นหา\",\"enter_store_name\":\"กรุณาใส่ชื่อร้านค้า\",\"distance\":\"ระยะทาง\",\"select_store\":\"เลือกร้านค้า\",\"store_query\":\"ร้านค้าหรือไม่\"},\"mr-code\":{\"membership_code\":\"รหัสสมาชิก\",\"membership_card_number\":\"หมายเลขบัตรสมาชิก\",\"coupon\":\"คูปอง\",\"use_wechat_pay\":\"ใช้ WeChat Pay\",\"points\":\"คะแนน\",\"balance\":\"ยอดเงินคงเหลือ\",\"wechat_user\":\"ผู้ใช้ WeChat\",\"auto_update_seconds\":\"รหัสสมาชิกจะอัปเดตอัตโนมัติทุก 30 วินาที กรุณาใช้ที่ร้าน\",\"viewMembershipBenefits\":\"ดูสิทธิประโยชน์ของสมาชิก\"},\"dmf\":{\"pay_to_merchant\":\"ชำระเงินให้กับร้านค้า\",\"name\":\"ชื่อ\",\"amount\":\"จำนวนเงิน\",\"enter_amount\":\"ป้อนจำนวนเงิน\",\"total_discount\":\"ส่วนลดทั้งหมด\",\"actual_payment\":\"การชำระเงินจริง\",\"remark\":\"หมายเหตุ\",\"modify\":\"แก้ไข\",\"add_remark\":\"เพิ่มหมายเหตุ\",\"pay_bill\":\"ชำระบิล\",\"please_enter_amount\":\"กรุณาป้อนจำนวนเงิน\",\"ordering\":\"กำลังสั่งซื้อ\"},\"goods\":{\"select_specifications\":\"เลือกน้ำซุป\",\"exclusive\":\"เฉพาะ\",\"portion\":\"ส่วน\",\"member_price\":\"ราคาสมาชิก\",\"minimum_purchase\":\"ซื้อขั้นต่ำ\",\"limit_per_person\":\"จำกัดต่อคน\",\"limit_per_order\":\"จำกัดต่อคำสั่งซื้อ\",\"daily_limit\":\"จำกัดรายวัน\",\"from\":\"จาก\",\"sales_volume\":\"ยอดขาย\",\"Pickup\":\"รับเอง\",\"takeout\":\"กลับบ้าน\",\"store_switching_disabled\":\"การสลับร้านถูกปิด\",\"sold_out\":\"ขายหมดแล้ว\",\"starting_from\":\"เริ่มต้นที่\",\"required\":\"จำเป็นต้องเลือก\",\"distanceyou\":\"ห่างจากคุณ\",\"privacy_policy_notice\":\"นโยบายความเป็นส่วนตัว\",\"thank_you_for_support\":\"ขอบคุณสำหรับการสนับสนุนและความสนใจของคุณ\",\"importance_of_personal_info\":\"เราตระหนักถึงความสำคัญของข้อมูลส่วนบุคคลของคุณ\",\"compliance_with_laws\":\"เราจะปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง\",\"ensuring_personal_info_safety\":\"พยายามปกป้องข้อมูลส่วนบุคคลของคุณอย่างดีที่สุด\",\"click_before_using\":\"กรุณาคลิกก่อนใช้งาน\",\"privacy_agreement\":\"ข้อตกลงความเป็นส่วนตัว\",\"read_carefully\":\"และอ่านอย่างละเอียด\",\"if_you_agree\":\"หากคุณเห็นด้วย\",\"entire_content\":\"เนื้อหาทั้งหมด\",\"please_click\":\"กรุณาคลิก\",\"agree_and_continue\":\"เห็นด้วยและดำเนินการต่อ\",\"start_using_services\":\"เริ่มใช้งานบริการของเรา\",\"if_you_disagree\":\"หากคุณไม่เห็นด้วย\",\"unfortunately_we_cannot_continue\":\"เราต้องขออภัยที่เราไม่สามารถให้บริการ\",\"to_provide_services\":\"แก่คุณได้\",\"log_in_and_order\":\"เข้าสู่ระบบและสั่งซื้อ\",\"order_without_logging_in\":\"สั่งซื้อโดยไม่ต้องเข้าสู่ระบบ\",\"scan_and_order\":\"สแกนและสั่งซื้อ\",\"user_agreement\":\"ข้อตกลงผู้ใช้\",\"calling_service_not_open\":\"ฟังก์ชันการเรียกยังไม่เปิดให้บริการ\",\"notice\":\"แจ้งเตือน\",\"no_desk_info_or_out_of_range\":\"ไม่มีข้อมูลโต๊ะหรือเกินขอบเขตของร้านค้า\",\"beyond_merchant_range\":\"เกินขอบเขตของร้านค้า\",\"please_add_required_items\":\"กรุณาเพิ่มสินค้าที่จำเป็น\",\"people\":\"คน\",\"actual_spending_reaches\":\"ยอดใช้จ่ายจริงถึง\",\"includes\":\"รวมถึง\",\"gift_after_order_completion\":\"รับของขวัญหลังจากทำรายการเสร็จสิ้น\",\"view_gift\":\"ดูของขวัญ\",\"valid_until\":\"ใช้ได้จนถึง\",\"gift_balance\":\"ยอดคงเหลือของขวัญ\",\"gift_points\":\"คะแนนของขวัญ\",\"limited_gift_availability\":\"ของขวัญมีจำนวนจำกัด ขึ้นอยู่กับการแจกจริง\",\"got_it\":\"รับทราบ\",\"store_closed_try_another\":\"ร้านปิดแล้ว กรุณาลองเลือกร้านอื่น\",\"enter_product_name_to_search\":\"กรุณาใส่ชื่อสินค้าเพื่อค้นหา\",\"search\":\"ค้นหา\",\"search_history\":\"ประวัติการค้นหา\",\"confirm_clear_search_history\":\"คุณต้องการล้างประวัติการค้นหาหรือไม่?\",\"please_enter_search_content\":\"กรุณาใส่เนื้อหาการค้นหา\",\"store_no_order_channel\":\"ร้านไม่มีช่องทางการสั่งซื้อในขณะนี้\",\"add_required_items\":\"กรุณาเพิ่มสินค้าที่จำเป็น\"},\"pay_order\":{\"total_discount\":\"ส่วนลดทั้งหมด\",\"subtotal\":\"ยอดรวมย่อย\",\"submit_order\":\"ส่งคำสั่งซื้อ\",\"placing_order\":\"กำลังสั่งซื้อ\",\"are_you_sure_you_want_to_call_the_waiter\":\"คุณแน่ใจหรือไม่ว่าต้องการเรียกพนักงานเสิร์ฟ\",\"vatMoney\":\"ภาษีมูลค่าเพิ่ม\",\"serviceMoney\":\"ค่าบริการ\",\"taxIncluded\":\"Tax(Included)\",\"totaltax\":\"TotalTax\"},\"detail\":{\"loading\":\"กำลังโหลด\",\"are_you_sure_you_want_to_cancel_the_order\":\"คุณแน่ใจหรือไม่ว่าต้องการยกเลิกคำสั่งซื้อ\",\"are_you_sure_you_want_to_apply_for_a_refund\":\"คุณแน่ใจหรือไม่ว่าต้องการขอคืนเงิน\",\"are_you_sure_you_want_to_confirm_receipt\":\"คุณแน่ใจหรือไม่ว่าต้องการยืนยันการรับสินค้า\"},\"pay-order\":{\"total_discount\":\"ส่วนลดทั้งหมด\",\"subtotal\":\"ยอดรวมย่อย\",\"submit_order\":\"ส่งคำสั่งซื้อ\",\"pick_up\":\"รับสินค้าเอง\",\"takeout\":\"สั่งกลับบ้าน\",\"please_select_dining_option\":\"กรุณาเลือกวิธีการรับประทาน\",\"please_select_appointment_time\":\"กรุณาเลือกเวลานัดหมาย\",\"please_select_address\":\"กรุณาเลือกที่อยู่\",\"please_enter_contact_number\":\"กรุณาป้อนเบอร์ติดต่อ\",\"placing_order\":\"กำลังสั่งซื้อ\"},\"check-shop\":{\"please_confirm_pickup_store\":\"กรุณายืนยันร้านค้ารับสินค้า\",\"distance_from_you\":\"ห่างจากคุณ\",\"change_store\":\"เปลี่ยนร้านค้า\",\"this_one\":\"ร้านนี้\"},\"check-time\":{\"select_appointment_time\":\"เลือกเวลานัดหมาย\",\"hello\":\"สวัสดี\",\"when_to_pick_up\":\"จะรับเมื่อไหร่\",\"pickup_store\":\"ร้านรับสินค้า\",\"confirm\":\"ยืนยัน\",\"immediate_pickup\":\"รับทันที\",\"immediate_in-store_pickup\":\"รับที่ร้านทันที\",\"immediate_delivery\":\"จัดส่งทันที\",\"start_making_immediately\":\"เริ่มทำทันที\",\"schedule_pickup\":\"นัดหมายรับสินค้า\",\"as_per_appointment_time\":\"ตามเวลานัดหมาย\",\"in-store_pickup\":\"รับที่ร้าน\",\"schedule_delivery\":\"นัดหมายจัดส่ง\",\"start_making\":\"เริ่มทำ\",\"today\":\"วันนี้\",\"thursday\":\"วันพฤหัสบดี\",\"tomorrow\":\"พรุ่งนี้\",\"friday\":\"วันศุกร์\",\"day_after_tomorrow\":\"วันมะรืนนี้\",\"saturday\":\"วันเสาร์\"},\"self-fetch-addres\":{\"distance_from_you\":\"ห่างจากคุณ\",\"contact_phone\":\"เบอร์ติดต่อ\",\"autofill\":\"กรอกอัตโนมัติ\",\"order_pickup_time\":\"เวลารับออเดอร์\",\"pick_up_order_now\":\"รับออเดอร์ทันที\",\"takeout\":\"ห่อกลับบ้าน\",\"dine_in\":\"ทานในร้าน\"},\"take-out-addres\":{\"please_select_delivery_address\":\"กรุณาเลือกที่อยู่จัดส่ง\",\"delivery_time\":\"เวลาจัดส่ง\",\"deliver_asap\":\"จัดส่งโดยเร็วที่สุด\"},\"check-save\":{\"total\":\"รวม\",\"estimated_earnings\":\"รายได้ประมาณการ\",\"points\":\"คะแนน\",\"growth_value\":\"ค่าการเติบโต\",\"order_now\":\"สั่งทันที\"},\"check-point\":{\"collect-points\":\"สะสมคะแนน\",\"current-order-can-obtain\":\"ออเดอร์ปัจจุบันสามารถรับได้\",\"discounted-products-can-participate-in-collecting-points\":\"สินค้าลดราคาสามารถร่วมสะสมคะแนนได้\"},\"discounts\":{\"package\":\"แพ็คเกจ\",\"packing-fee\":\"ค่าบรรจุภัณฑ์\",\"delivery\":\"การจัดส่ง\",\"delivery-fee\":\"ค่าจัดส่ง\",\"reduce\":\"ลด\",\"delivery-fee-discount\":\"ส่วนลดค่าจัดส่ง\",\"full-reduction-promotion\":\"โปรโมชั่นส่วนลดเต็มจำนวน\",\"new\":\"ใหม่\",\"new-customer-discount\":\"ส่วนลดลูกค้าใหม่\",\"member\":\"สมาชิก\",\"member-discount\":\"ส่วนลดสมาชิก\",\"delivery-fee-full-reduction\":\"ส่วนลดค่าจัดส่งเต็มจำนวน\",\"coupon\":\"คูปอง\",\"available-coupons\":\"เลือกใช้คูปอง\",\"available\":\"ใช้งานได้\",\"no-available\":\"ไม่มีคูปองที่ใช้ได้\",\"coupons\":\"คูปอง\"},\"waiter\":{\"waiter\":\"พนักงานเสิร์ฟ\"},\"check-goods\":{\"to-be-ordered\":\"รอสั่งซื้อ\",\"ordered\":\"สั่งซื้อแล้ว\",\"paid\":\"ชำระเงินแล้ว\",\"service-fee\":\"ค่าบริการ\",\"fold-all\":\"ย่อทั้งหมด\",\"view-all\":\"ดูทั้งหมด\"},\"check-notes\":{\"notes\":\"หมายเหตุ\",\"please-enter-your-special-requests\":\"กรุณาป้อนคำขอพิเศษของคุณ\"},\"order-index\":{\"store_order\":\"คำสั่งซื้อผ่านหน้าร้าน\",\"stored_value_order\":\"คำสั่งซื้อผ่านการเติมเงิน\",\"pay_the_bill_order\":\"คำสั่งซื้อตามบิล\",\"coupon_package_order\":\"คำสั่งซื้อแบบใช้คูปอง\",\"confirm_cancel_order\":\"คุณแน่ใจหรือไม่ว่าต้องการยกเลิกคำสั่งซื้อ\",\"confirm_apply_refund\":\"คุณแน่ใจหรือไม่ว่าต้องการขอคืนเงิน\",\"manual_sliding_prohibited\":\"ห้ามเลื่อนด้วยตนเอง\"},\"order-list\":{\"total\":\"รวมทั้งหมด\",\"pieces\":\"จำนวนชิ้น\",\"amount\":\"จำนวนเงิน\",\"order_number\":\"หมายเลขคำสั่งซื้อ\",\"cancel_order\":\"ยกเลิกคำสั่งซื้อ\",\"pay_now\":\"จ่ายเงิน\",\"apply_for_refund\":\"ขอคืนเงิน\",\"order_again\":\"สั่งซื้ออีกครั้ง\",\"closed\":\"ปิดแล้ว\",\"pending_payment\":\"รอการชำระเงิน\",\"paid\":\"ชำระเงินแล้ว\",\"order_pending\":\"คำสั่งซื้อรอการจัดการ\",\"in_production\":\"กำลังผลิต\",\"order_accepted\":\"รับคำสั่งซื้อแล้ว\",\"production_completed\":\"การผลิตเสร็จสิ้น\",\"pending_delivery\":\"รอการจัดส่ง\",\"in_delivery\":\"กำลังจัดส่ง\",\"completed\":\"เสร็จสิ้น\",\"refunded\":\"คืนเงินแล้ว\",\"remaining\":\"เหลือ\",\"minutes\":\"นาที\"},\"pay\":{\"confirm_payment\":\"ยืนยันการชำระเงิน\",\"available\":\"ใช้งานได้\",\"balance_payment\":\"ชำระเงินด้วยยอดคงเหลือ\",\"wechat_payment\":\"ชำระเงินผ่าน WeChat\",\"alipay_payment\":\"ชำระเงินผ่าน Alipay\",\"payment_successful\":\"ชำระเงินสำเร็จ\",\"payment_failed\":\"การชำระเงินล้มเหลว\",\"pay\":\"ชำระเงิน\"},\"order-detail\":{\"order_details\":\"รายละเอียดคำสั่งซื้อ\",\"closed\":\"ปิดแล้ว\",\"pending_payment\":\"รอการชำระเงิน\",\"paid_awaiting_order\":\"ชำระเงินแล้ว รอการรับคำสั่งซื้อ\",\"order_accepted_in_preparation\":\"รับคำสั่งซื้อแล้ว กำลังเตรียมการ\",\"preparation_complete_awaiting_delivery\":\"เตรียมการเสร็จสิ้น รอการจัดส่ง\",\"in_delivery\":\"กำลังจัดส่ง\",\"completed\":\"เสร็จสิ้น\",\"apply_for_refund\":\"ขอคืนเงิน\",\"refunded\":\"คืนเงินแล้ว\",\"if_refund_needed\":\"หากต้องการขอคืนเงิน\",\"please_call_store\":\"กรุณาโทรติดต่อร้านค้า\",\"loading\":\"กำลังโหลด\",\"confirm_cancel_order\":\"คุณแน่ใจหรือไม่ว่าต้องการยกเลิกคำสั่งซื้อ\",\"confirm_apply_refund\":\"คุณแน่ใจหรือไม่ว่าต้องการขอคืนเงิน\",\"confirm_receipt\":\"คุณแน่ใจหรือไม่ว่าต้องการยืนยันการรับสินค้า\",\"confirm_complete_order\":\"คุณแน่ใจหรือไม่ว่าต้องการเสร็จสิ้นคำสั่งซื้อ\",\"confirm_call_waiter\":\"คุณแน่ใจหรือไม่ว่าต้องการเรียกพนักงานเสิร์ฟ\"},\"o-out-btn\":{\"cancel_order\":\"ยกเลิกคำสั่งซื้อ\",\"pay_now\":\"จ่ายเงิน\",\"apply_for_refund_btn\":\"ขอคืนเงิน\",\"confirm_receipt_btn\":\"ยืนยันการรับสินค้า\",\"order_again\":\"สั่งซื้ออีกครั้ง\"},\"o-status\":{\"order_placed\":\"สั่งซื้อแล้ว\",\"dining\":\"กำลังรับประทานอาหาร\",\"completed_status\":\"เสร็จสิ้น\",\"in_preparation\":\"กำลังเตรียมการ\",\"please_pick_up_order\":\"กรุณารับคำสั่งซื้อ\",\"awaiting_order_acceptance\":\"รอการรับคำสั่งซื้อ\",\"awaiting_delivery_status\":\"รอการจัดส่ง\",\"in_delivery_status\":\"กำลังจัดส่ง\",\"delivered\":\"จัดส่งแล้ว\"},\"o-btn\":{\"please_wait\":\"กรุณารอ\",\"waiting_for_waiter\":\"รอพนักงานเสิร์ฟรับคำสั่ง\",\"order_successful\":\"สั่งซื้อสำเร็จ\",\"sit_and_eat\":\"นั่งรออาหาร\",\"product_in_preparation\":\"กำลังเตรียมสินค้า\",\"product_preparation_complete\":\"เตรียมสินค้าเสร็จสิ้น\",\"thank_you_for_visiting\":\"ขอบคุณที่มาเยี่ยมชม\",\"refund_successful\":\"คืนเงินสำเร็จ\",\"order_closed\":\"คำสั่งซื้อถูกปิด\",\"order_canceled\":\"คำสั่งซื้อถูกยกเลิก\",\"order_awaiting_payment\":\"คำสั่งซื้อรอการชำระเงิน\",\"please_wait_store_order\":\"กรุณารอร้านค้ารับคำสั่ง\",\"product_preparation_completed_waiting_for_rider\":\"เตรียมสินค้าเสร็จสิ้น รอคนขับรับคำสั่ง\",\"pickup_number\":\"หมายเลขรับสินค้า\",\"table_information\":\"ข้อมูลโต๊ะ\",\"serial_number\":\"หมายเลขซีเรียล\",\"cancel_order\":\"ยกเลิก\",\"pay_immediately\":\"จ่ายเงิน\",\"apply_for_refund\":\"ขอคืนเงิน\",\"confirm_receipt\":\"ยืนยันการรับสินค้า\",\"order_again\":\"สั่งซื้ออีกครั้ง\"},\"o-discount\":{\"navigation\":\"นำทาง\",\"service_fee\":\"ค่าบริการ\",\"collapse_all\":\"ย่อทั้งหมด\",\"view_all\":\"ดูทั้งหมด\",\"packing_fee\":\"ค่าบรรจุภัณฑ์\",\"delivery_fee\":\"ค่าจัดส่ง\",\"full_discount\":\"โปรโมชั่นส่วนลดเต็มจำนวน\",\"new_customer_discount\":\"ส่วนลดลูกค้าใหม่\",\"order_count1\":\"คำสั่งซื้อที่\",\"order_count2\":\"ครั้ง\",\"discount_applied\":\"ส่วนลดรวม\",\"total\":\"รวมทั้งหมด\"},\"o-in-btn\":{\"pending_payment_in_btn\":\"รอจ่าย\",\"complete_order_in_btn\":\"เสร็จสิ้น\",\"continue_adding_dishes\":\"เพิ่มอาหาร\",\"contact_waiter_for_payment\":\" เรียกพนักงานเช็คบิล\",\"pay_immediately_in_btn\":\"จ่ายเงิน\",\"cancel_order\":\"ยกเลิก\"},\"o-info\":{\"delivery_information\":\"ข้อมูลการจัดส่ง\",\"delivery_address\":\"ที่อยู่จัดส่ง\",\"delivery_mode\":\"โหมดการจัดส่ง\",\"delivery_channel\":\"ช่องทางการจัดส่ง\",\"rider_information\":\"ข้อมูลคนขับ\",\"order_information\":\"ข้อมูลคำสั่งซื้อ\",\"order_number\":\"หมายเลขซีเรียล\",\"order_type\":\"ประเภทคำสั่งซื้อ\",\"dining_type\":\"ประเภทการรับประทานอาหาร\",\"pick_up_time\":\"เวลารับสินค้า\",\"expected_delivery_time\":\"เวลาจัดส่งที่คาดไว้\",\"order_time\":\"เวลาสั่งซื้อ\",\"payment_method\":\"วิธีการชำระเงิน\",\"remarks_information\":\"ข้อมูลหมายเหตุ\",\"copy\":\"คัดลอก\",\"estimated\":\"ประมาณ\",\"pickup_number\":\"หมายเลขรับสินค้า\",\"table_information\":\"ข้อมูลโต๊ะ\",\"people_dining\":\"จำนวนคนรับประทานอาหาร\"},\"my\":{\"myorder\":\"การซื้อของฉัน\",\"order\":\"คำสั่งซื้อ\",\"membercode\":\"รหัสสมาชิก\",\"balance\":\"ยอดคงเหลือ\",\"points\":\"คะแนน\",\"coupon\":\"คูปอง\"},\"s-h1\":{\"wechat_user\":\"\",\"better_service_prompt\":\"เพื่อให้บริการที่ดีขึ้น กรุณาอนุญาตการเข้าสู่ระบบ\",\"gain_more\":\"หากสะสมเพิ่มอีก\",\"unit\":\"\",\"growth_value\":\"ครั้ง เพื่อปรับระดับสมาชิกเป็น\",\"can_upgrade_to\":\"\",\"login\":\"เข้าสู่ระบบ\",\"register\":\"สมัครสมาชิก\",\"complete_profile\":\"กรอกข้อมูลให้ครบถ้วน\"},\"s-h2\":{\"wechat_user\":\"ผู้ใช้ WeChat\",\"become_member\":\"เป็นสมาชิก\",\"enjoy_more_benefits\":\"รับสิทธิประโยชน์เพิ่มเติม\",\"gain_more\":\"ได้รับเพิ่ม\",\"unit\":\"รายการ\",\"growth_value\":\"ค่าการเติบโต\",\"can_upgrade_to\":\"สามารถอัพเกรดเป็น\",\"login\":\"เข้าสู่ระบบ\",\"register\":\"สมัครสมาชิก\",\"complete_profile\":\"กรอกข้อมูลให้ครบถ้วน\"},\"my_property\":{\"my_assets\":\"ทรัพย์สินของฉัน\",\"points\":\"คะแนน\",\"coupons\":\"คูปอง\",\"balance\":\"ยอดเงินคงเหลือ\",\"unused\":\"ยังไม่ใช้\"},\"in_goods\":{\"privacy_policy_prompt\":\"แจ้งเตือนนโยบายความเป็นส่วนตัว\",\"privacy_desc\":\"ขอบคุณสำหรับการสนับสนุนและความสนใจของคุณ เราตระหนักถึงความสำคัญของข้อมูลส่วนบุคคลของคุณ เราจะปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้อง พยายามปกป้องข้อมูลส่วนบุคคลของคุณอย่างดีที่สุด กรุณาคลิก\",\"privacy_agreement\":\"《ข้อตกลงความเป็นส่วนตัว》\",\"read_carefully\":\"และอ่านอย่างละเอียด หากคุณเห็นด้วยกับเนื้อหาทั้งหมดของ《ข้อตกลงความเป็นส่วนตัว》กรุณาคลิก 'เห็นด้วยและดำเนินการต่อ' เพื่อเริ่มใช้บริการของเรา หากคุณไม่เห็นด้วย เราต้องขออภัยที่เราไม่สามารถให้บริการแก่คุณได้\",\"login_and_order\":\"เข้าสู่ระบบและสั่งซื้อ\",\"no_login_and_order\":\"สั่งซื้อโดยไม่ต้องเข้าสู่ระบบ\",\"scan_to_order\":\"สแกนเพื่อสั่งอาหาร\",\"number_calling_unavailable\":\"ฟังก์ชั่นเรียกหมายเลขยังไม่พร้อมใช้งาน\",\"unable_to_get_table_info\":\"ไม่สามารถรับข้อมูลโต๊ะได้หรืออยู่นอกเขตบริการของร้านค้า\",\"out_of_merchant_range\":\"อยู่นอกเขตบริการของร้านค้า\",\"add_required_items\":\"โปรดเพิ่มสินค้าที่จำเป็น\"},\"in_goods_components\":{\"view_all\":\"ดูทั้งหมด\",\"add_dish\":\"เพิ่มเมนู\",\"table_number\":\"หมายเลขโต๊ะ\",\"add_note\":\"เพิ่มหมายเหตุ\",\"place_order_now\":\"ยืนยัน\",\"coupon\":\"คูปอง\",\"discount_applied\":\"ใช้ส่วนลดแล้ว\",\"people\":\"คน\",\"package\":\"แพ็คเกจ\",\"confirm\":\"ยืนยัน\",\"navigation\":\"นำทาง\",\"confirm_payment\":\"ยืนยันการชำระเงิน\",\"characters\":\"ตัวอักษร\",\"collapse_all\":\"ย่อทั้งหมด\",\"items\":\"รายการสินค้า\",\"cancel\":\"ยกเลิก\",\"expected\":\"คาดว่า\",\"order_number\":\"หมายเลขคำสั่งซื้อ\",\"none\":\"ไม่มี\",\"expected_to_gain\":\"คาดว่าจะได้รับ\",\"wait_to_eat\":\"นั่งรออาหาร\",\"points\":\"คะแนน\",\"ordering_store\":\"ร้านที่สั่งซื้อ\",\"order_successful\":\"สั่งซื้อสำเร็จ\",\"pickup_time\":\"เวลารับสินค้า\",\"discount_offer\":\"โปรโมชั่นส่วนลดเต็มจำนวน\",\"continue_ordering\":\"เพิ่ม\",\"total\":\"รวม\",\"total_amount\":\"ยอดรวม\",\"payment_method\":\"วิธีการชำระเงิน\",\"note_information\":\"ข้อมูลหมายเหตุ\",\"dining_type\":\"ประเภทการรับประทานอาหาร\",\"place_and_pay\":\"สั่งซื้อและชำระเงิน\",\"delivery_time\":\"เวลาจัดส่ง\",\"discount\":\"ส่วนลด\",\"growth_value\":\"ค่าการเติบโต\",\"order_type\":\"ประเภทคำสั่งซื้อ\",\"packaging_fee\":\"ค่าบรรจุภัณฑ์\",\"copy\":\"คัดลอก\",\"dine_in\":\"ทานในร้าน\",\"order_time\":\"เวลาสั่งซื้อ\",\"new_customer_discount\":\"ส่วนลดลูกค้าใหม่\",\"new\":\"ใหม่\",\"dish_in_preparation\":\"กำลังเตรียมเมนู\",\"take_away\":\"สั่งกลับบ้าน\",\"order_information\":\"ข้อมูลคำสั่งซื้อ\",\"enter_note\":\"กรุณาป้อนหมายเหตุ\"},\"g-table\":{\"welcome_to\":\"ยินดีต้อนรับสู่\",\"hello\":\"สวัสดี\",\"please_select_dining_number\":\"กรุณาเลือกจำนวนผู้รับประทาน\",\"table_number\":\"หมายเลขโต๊ะ\",\"people\":\"คน\",\"start_ordering\":\"เริ่มสั่งอาหาร\",\"please_enter_dining_number\":\"กรุณาป้อนจำนวนผู้รับประทาน\",\"number_of_people\":\"จำนวนคน\",\"please_enter\":\"กรุณาป้อน\",\"cancel\":\"ยกเลิก\",\"confirm\":\"ยืนยัน\",\"other\":\"อื่นๆ\",\"please_select_number_of_people\":\"กรุณาเลือกจำนวนคน\",\"please_enter_number_of_people\":\"กรุณาป้อนจำนวนคน\",\"drink_together\":\"ดื่มด้วยกัน\",\"people_dining\":\"คนรับประทานอาหาร\",\"please_enter_product_name\":\"กรุณาป้อนชื่อสินค้า\",\"are_you_sure_to_call_waiter\":\"คุณแน่ใจหรือว่าต้องการเรียกพนักงานเสิร์ฟ\",\"login_member\":\"เข้าสู่ระบบสมาชิก\",\"enjoy_more_exclusive_privileges\":\"รับสิทธิพิเศษเพิ่มเติม\",\"login\":\"เข้าสู่ระบบ\",\"change_shop\":\"เปลี่ยนร้านค้า\",\"select_shop_to_change\":\"เลือกเปลี่ยนร้านค้า\",\"shop_name\":\"ชื่อร้านค้า\",\"search\":\"ค้นหา\",\"username\":\"ชื่อผู้ใช้\",\"password\":\"รหัสผ่าน\",\"forgot_password\":\"ลืมรหัสผ่าน\",\"remember_me\":\"จดจำฉัน\"},\"bz\":{\"please-enter-remarks\":\"กรุณาป้อนหมายเหตุ\",\"order-notes\":\"หมายเหตุคำสั่งซื้อ\",\"upper-limit\":\"ขีดจำกัดสูงสุด\",\"preferences-and-other-requirements\":\"ความต้องการและความชอบอื่นๆ\",\"character\":\"ตัวอักษร\",\"quick-entry\":\"ป้อนอย่างรวดเร็ว\",\"submit\":\"ส่ง\",\"characters\":\"ตัวอักษร\"},\"promptpay\":{\"payment_info\":\"ข้อมูลการชำระเงิน\",\"time_left\":\"เวลาที่เหลือ\",\"minutes\":\"นาที\",\"seconds\":\"วินาที\",\"scan_to_pay\":\"กรุณาใช้ PromptPay สแกนคิวอาร์โค้ดเพื่อชำระเงิน\",\"auto_redirect\":\"หลังจากชำระเงินสำเร็จ หน้ารายละเอียดจะปิดโดยอัตโนมัติ จากนั้นจะเปลี่ยนไปที่หน้า 'ชำระเงินสำเร็จ'\",\"note\":\"หมายเหตุ: PromptPay ไม่รองรับการคืนเงิน หากต้องการขอคืนเงิน กรุณาติดต่อร้านค้า\"},\"my-addres\":{\"contact_person\":\"ผู้ติดต่อ\",\"please_enter_name_of_recipient\":\"กรุณาป้อนชื่อผู้รับ\",\"gender\":\"เพศ\",\"phone_number\":\"หมายเลขโทรศัพท์\",\"please_enter_phone_number\":\"กรุณาป้อนหมายเลขโทรศัพท์มือถือ\",\"auto_fill\":\"กรอกอัตโนมัติ\",\"delivery_address\":\"ที่อยู่จัดส่ง\",\"click_to_select\":\"คลิกเพื่อเลือก\",\"house_number\":\"เลขที่บ้าน\",\"for_example\":\"ตัวอย่าง\",\"block\":\"บล็อก\",\"building\":\"อาคาร\",\"room\":\"ห้อง\",\"select_label\":\"เลือกป้าย\",\"set_as_default_address\":\"ตั้งเป็นที่อยู่เริ่มต้น\",\"delete\":\"ลบ\",\"save\":\"บันทึก\",\"mr\":\"นาย\",\"company\":\"บริษัท\",\"ms\":\"นางสาว\",\"home\":\"บ้าน\",\"school\":\"โรงเรียน\",\"confirm_delete_address\":\"คุณแน่ใจหรือว่าต้องการลบที่อยู่นี้\",\"missing_user\":\"ขาดผู้ใช้\",\"please_enter_contact_person\":\"กรุณาป้อนผู้ติดต่อ\",\"enter_phone_number\":\"ป้อนหมายเลขโทรศัพท์\",\"please_select_address\":\"กรุณาเลือกที่อยู่\",\"please_enter_house_number_details\":\"กรุณาป้อนรายละเอียดเลขที่บ้าน\",\"please_select_label\":\"กรุณาเลือกป้าย\",\"missing_address\":\"ขาดที่อยู่\",\"please_enter_valid_phone_number\":\"กรุณาป้อนหมายเลขโทรศัพท์ที่ถูกต้อง\",\"save_successful\":\"บันทึกสำเร็จ\",\"wechat_import\":\"นำเข้าจาก WeChat\",\"add_new_address\":\"เพิ่มที่อยู่ใหม่\",\"current_address_out_of_delivery_range\":\"ที่อยู่ปัจจุบันอยู่นอกขอบเขตการจัดส่ง\"},\"integral\":{\"please_select_delivery_address\":\"กรุณาเลือกที่อยู่จัดส่ง\",\"total\":\"รวมทั้งหมด\",\"points\":\"คะแนน\",\"confirm_redemption\":\"ยืนยันการแลก\",\"please_select_store\":\"กรุณาเลือกร้านค้า\",\"distance_from_you\":\"ห่างจากคุณ\",\"contact_phone_number\":\"เบอร์ติดต่อ\",\"auto_fill\":\"กรอกอัตโนมัติ\",\"actual\":\"จริง\",\"coupon\":\"คูปอง\",\"remaining\":\"เหลือ\",\"redeem_coupon\":\"แลกคูปอง\",\"redeem_balance\":\"แลกยอดคงเหลือ\",\"original_price\":\"ราคาปกติ\",\"sales\":\"ยอดขาย\",\"pieces\":\"ชิ้น\",\"remaining_pieces\":\"เหลือ\",\"product_details\":\"รายละเอียดสินค้า\",\"redeem_now\":\"แลกทันที\",\"confirm_redemption_of_product\":\"ยืนยันการแลกสินค้านี้หรือไม่\",\"hot\":\"ยอดนิยม\",\"order_number\":\"หมายเลขคำสั่งซื้อ\",\"total_pieces\":\"รวมทั้งหมด\",\"actual_payment\":\"ชำระเงินจริง\",\"cancel_order\":\"ยกเลิกคำสั่งซื้อ\",\"pay_now\":\"จ่ายเงิน\",\"apply_for_refund\":\"ขอคืนเงิน\",\"confirm_receipt\":\"ยืนยันการรับสินค้า\",\"self_pickup_order\":\"คำสั่งซื้อรับเอง\",\"verification_code\":\"รหัสยืนยัน\",\"i_have_picked_up\":\"ฉันได้เก็บสินค้าแล้ว\",\"all\":\"ทั้งหมด\",\"pending_payment\":\"รอการชำระเงิน\",\"pending_shipment\":\"รอการจัดส่ง\",\"pending_receipt\":\"รอการรับสินค้า\",\"completed\":\"เสร็จสิ้น\",\"redemption_record\":\"ประวัติการแลก\",\"are_you_sure_to_cancel_order\":\"คุณแน่ใจว่าต้องการยกเลิกคำสั่งซื้อหรือไม่\",\"are_you_sure_to_apply_for_refund\":\"คุณแน่ใจว่าต้องการขอคืนเงินหรือไม่\",\"are_you_sure_to_confirm_receipt\":\"คุณแน่ใจว่าต้องการยืนยันการรับสินค้าหรือไม่\",\"have_you_received_the_goods\":\"คุณได้รับสินค้าแล้วหรือไม่\",\"no_points_detail_yet\":\"ยังไม่มีรายละเอียดคะแนนในขณะนี้\",\"details\":\"รายละเอียด\",\"delivery_address\":\"ที่อยู่จัดส่ง\",\"store_pickup_address\":\"ที่อยู่รับสินค้าจากร้าน\",\"purchase_quantity\":\"จำนวนที่ซื้อ\",\"product_type\":\"ประเภทสินค้า\",\"physical_product\":\"สินค้าจริง\",\"balance\":\"ยอดคงเหลือ\",\"delivery_method\":\"วิธีการจัดส่ง\",\"courier_delivery\":\"จัดส่งโดยผู้ขนส่ง\",\"shipping_fee\":\"ค่าจัดส่ง\",\"free_shipping\":\"จัดส่งฟรี\",\"store_pickup\":\"รับสินค้าที่ร้าน\",\"order_information\":\"ข้อมูลคำสั่งซื้อ\",\"payment_time\":\"เวลาชำระเงิน\",\"courier_name\":\"ชื่อผู้ขนส่ง\",\"courier_tracking_number\":\"หมายเลขติดตามผู้ขนส่ง\",\"payment_method\":\"วิธีการชำระเงิน\",\"order_details\":\"รายละเอียดคำสั่งซื้อ\",\"courier_fee\":\"ค่าผู้ขนส่ง\",\"please_select_address\":\"กรุณาเลือกที่อยู่\",\"are_you_sure_to_redeem_product\":\"คุณแน่ใจว่าต้องการแลกสินค้านี้หรือไม่\",\"points_sign_in\":\"เช็คอินเพื่อรับคะแนน\",\"points_record\":\"ประวัติการแลก\",\"points_details\":\"รายละเอียดคะแนน\",\"points_rules\":\"เงื่อนไขคะแนน\",\"no_products_available_for_redemption_in_current_category\":\"ไม่มีสินค้าในหมวดหมู่นี้สำหรับการแลก\",\"points_mall\":\"ห้างคะแนน\",\"rules\":\"กฎ\",\"shop\":\"ห้าง\"},\"lineup\":{\"my_number\":\"หมายเลขของฉัน\",\"waiting_tables_ahead\":\"จำนวนโต๊ะที่รออยู่ข้างหน้า\",\"table\":\"โต๊ะ\",\"estimated_waiting_time\":\"เวลารอคาดการณ์\",\"minutes\":\"นาที\",\"already_waited\":\"รอแล้ว\",\"phone_number\":\"หมายเลขโทรศัพท์\",\"take_number_time\":\"เวลารับหมายเลข\",\"take_number_channel\":\"ช่องทางรับหมายเลข\",\"take_number_store\":\"ร้านค้าที่รับหมายเลข\",\"merchant_reminder\":\"การแจ้งเตือนจากร้านค้า\",\"you_have_passed\":\"คุณผ่านไปแล้ว\",\"click_button_to_requeue\":\"คลิกปุ่มด้านล่างเพื่อรับหมายเลขใหม่\",\"cancel_queue\":\"ยกเลิกคิว\",\"requeue\":\"รับหมายเลขใหม่\",\"in_queue\":\"ในคิว\",\"dined\":\"รับประทานแล้ว\",\"passed\":\"ผ่านแล้ว\",\"cancelled\":\"ยกเลิกแล้ว\",\"loading\":\"กำลังโหลด\",\"queue_details\":\"รายละเอียดคิว\",\"prompt\":\"แจ้งเตือน\",\"confirm_cancel_queue\":\"คุณแน่ใจว่าต้องการยกเลิกคิวหรือไม่\",\"continue_queue\":\"ต่อคิว\",\"cancelling\":\"กำลังยกเลิก\",\"table_type\":\"ประเภทโต๊ะ\",\"waiting_tables\":\"โต๊ะที่รอ\",\"estimated_waiting\":\"คาดว่าจะรอ\",\"people\":\"คน\",\"no_waiting\":\"ไม่ต้องรอ\",\"dining_people\":\"จำนวนคนรับประทานอาหาร\",\"please_select\":\"กรุณาเลือก\",\"please_select_people_based_on_table_type\":\"กรุณาเลือกจำนวนคนตามประเภทโต๊ะ\",\"please_enter_phone_number\":\"กรุณาป้อนหมายเลขโทรศัพท์\",\"confirm_take_number\":\"ยืนยันการรับคิว\",\"queue_for_number\":\"รับคิว\",\"my_queue\":\"คิวทั้งหมด\",\"queue\":\"คิว\",\"store_queue_closed\":\"การต่อคิวรับหมายเลขที่ร้านถูกปิด\",\"missing_user\":\"ขาดผู้ใช้\",\"please_select_valid_people_based_on_table_type\":\"กรุณาเลือกจำนวนคนตามประเภทโต๊ะที่ถูกต้อง\",\"please_select_people\":\"กรุณาเลือกจำนวนคน\",\"please_fill_in_phone_number\":\"กรุณาป้อนหมายเลขโทรศัพท์\",\"please_enter_correct_phone_number\":\"กรุณาป้อนหมายเลขโทรศัพท์ที่ถูกต้อง\",\"take_number_info\":\"ข้อมูลการรับหมายเลข\"},\"my-other\":{\"stay_tuned\":\"โปรดติดตาม\",\"contact_information\":\"ข้อมูลการติดต่อ\",\"copy_wechat_id\":\"คัดลอก WeChat ID\",\"make_a_call\":\"โทรออก\",\"long_press_to_identify_qr_code\":\"กดค้างเพื่อสแกน QR โค้ด\",\"if_unable_to_identify_qr_code\":\"หากไม่สามารถสแกน QR โค้ด\",\"save_image_and_scan_in_wechat\":\"กรุณาบันทึกภาพแล้วสแกนใน Line\",\"online_customer_service\":\"บริการลูกค้าออนไลน์\",\"contact_us\":\"ติดต่อเรา\",\"help_center\":\"ศูนย์ช่วยเหลือ\",\"user_service_agreement\":\"ข้อตกลงบริการผู้ใช้\",\"privacy_policy\":\"นโยบายความเป็นส่วนตัว\",\"about_us\":\"เกี่ยวกับเรา\",\"points_rules\":\"กฎคะแนน\",\"version_number\":\"หมายเลขเวอร์ชัน\"},\"my-signin\":{\"consecutive_check_ins\":\"เช็คอินต่อเนื่อง\",\"days\":\"วัน\",\"checked_in_today\":\"เช็คอินแล้ววันนี้\",\"not_checked_in_today\":\"ยังไม่เช็คอินวันนี้\",\"checked_in\":\"เช็คอินแล้ว\",\"check_in_now\":\"เช็คอินทันที\",\"consecutive_check_in_rewards\":\"รางวัลเช็คอินต่อเนื่อง\",\"gift_balance\":\"ยอดคงเหลือของขวัญ\",\"gift_points\":\"คะแนนของขวัญ\",\"gift_coupons\":\"คูปองของขวัญ\",\"my_check_ins\":\"การเช็คอินของฉัน\",\"points\":\"คะแนน\",\"total_points\":\"คะแนนรวม\",\"total_balance\":\"ยอดคงเหลือรวม\",\"pieces\":\"ชิ้น\",\"total_coupons\":\"คูปองรวม\",\"times\":\"ครั้ง\",\"total_check_ins\":\"การเช็คอินรวม\",\"check_in_instructions\":\"คำอธิบายการเช็คอิน\",\"check_in\":\"เช็คอิน\",\"tips\":\"เคล็ดลับ\",\"check_in_function_is_closed\":\"ฟังก์ชันเช็คอินถูกปิด\",\"back\":\"กลับ\",\"streak\":\"เช็คอินต่อเนื่อง\"},\"my-vip\":{\"member\":\"สมาชิก\",\"level_description\":\"คำอธิบายระดับ\",\"privileges\":\"สิทธิพิเศษ\",\"upgrade_rewards\":\"รางวัลการอัพเกรด\",\"gift_balance\":\"ยอดคงเหลือของขวัญ\",\"gift_points\":\"คะแนนของขวัญ\",\"membership_benefits\":\"สิทธิประโยชน์ของสมาชิก\",\"discount\":\"ส่วนลด\",\"product_discount\":\"ส่วนลดสินค้า\",\"multiplier\":\"เท่า\",\"points_multiplier\":\"ตัวคูณคะแนน\",\"free_shipping_over\":\"ฟรีจัดส่งเมื่อสั่งซื้อมากกว่า\",\"free_shipping\":\"ฟรีค่าจัดส่ง\",\"permanently_valid\":\"ใช้ได้ถาวร\",\"vip_qr\":\"แสดง QR ของ VIP\"},\"other-coupon\":{\"cancel_gift\":\"ยกเลิกของขวัญ\",\"on\":\"ใน\",\"receive\":\"รับ\",\"gifting\":\"กำลังให้ของขวัญ\",\"gifted\":\"ให้ของขวัญแล้ว\",\"gift_records\":\"บันทึกของขวัญ\",\"confirm_cancel_gift\":\"ยืนยันการยกเลิกของขวัญหรือไม่\",\"used\":\"ใช้แล้ว\",\"expired\":\"หมดอายุ\",\"coupon_history\":\"ประวัติคูปอง\",\"coupon_event\":\"กิจกรรมคูปอง\",\"coupon_center\":\"ศูนย์คูปอง\",\"receive_coupon\":\"รับคูปอง\",\"activity_description\":\"คำอธิบายกิจกรรม\",\"immediate_receive\":\"รับทันที\",\"activity_ended\":\"กิจกรรมสิ้นสุดแล้ว\",\"your_friend\":\"เพื่อนของคุณ\",\"send_you_coupon\":\"ส่งคูปองให้คุณ\",\"no_limit\":\"ไม่จำกัด\",\"full\":\"เต็ม\",\"available\":\"ใช้ได้\",\"friend_not_received\":\"เพื่อนของคุณยังไม่ได้รับ\",\"auto_return_hours\":\"ชั่วโมงหากไม่ได้รับจะถูกคืนโดยอัตโนมัติ\",\"coupon_canceled\":\"คูปองของคุณถูกยกเลิกของขวัญ\",\"coupon_received\":\"รับคูปองแล้ว\",\"open_expired_coupon\":\"เปิดคูปองหมดอายุ\",\"account_reminder\":\"การแจ้งเตือนบัญชี\",\"immediate_subscribe\":\"สมัครทันที\",\"exchange_coupon\":\"แลกคูปอง\",\"gift_record\":\"บันทึกของขวัญ\",\"coupon_collection\":\"การรวบรวมคูปอง\",\"my_coupons\":\"คูปองของฉัน\",\"enter_exchange_code\":\"กรุณากรอกรหัสแลกเปลี่ยน\",\"confirm_exchange\":\"ยืนยันการแลกเปลี่ยน\",\"exchange_center\":\"ศูนย์แลกเปลี่ยน\",\"exchange_code_description\":\"รหัสแลกเปลี่ยนหลังจากแลกแล้ว\",\"use_when_ordering\":\"ใช้ได้เมื่อสั่งซื้อ\",\"confirm_exchange_action\":\"ยืนยันการแลกหรือไม่\"},\"wifi\":{\"wifi_name\":\"ชื่อ WiFi：\",\"no_wifi_info\":\"ร้านนี้ยังไม่มีข้อมูล WiFi\",\"wifi_password\":\"รหัสผ่าน WiFi：\",\"quick_connect\":\"เชื่อมต่ออย่างรวดเร็ว . ไม่ต้องใช้รหัสผ่าน . ปกป้องความเป็นส่วนตัว\",\"phone_wifi_connected\":\"WiFi โทรศัพท์เชื่อมต่อแล้ว：\",\"wifi_connected\":\"เชื่อมต่อ WiFi แล้ว\",\"secure_connect\":\"เชื่อมต่อ WiFi อย่างปลอดภัยด้วยปุ่มเดียว\",\"system_not_supported\":\"ระบบปัจจุบันไม่รองรับความสามารถที่เกี่ยวข้อง\",\"password_error\":\"รหัสผ่านผิด\",\"connection_timeout\":\"การเชื่อมต่อหมดเวลา, กรุณาตรวจสอบ WiFi หรือทดลองใหม่\",\"repeated_connection\":\"เชื่อมต่อ Wi-Fi ซ้ำ\",\"open_wifi\":\"กรุณาเปิดสวิตช์ wifi\",\"open_gps\":\"ไม่ได้เปิดสวิตช์ GPS\",\"user_denied\":\"ผู้ใช้ปฏิเสธการอนุญาตเชื่อมต่อ Wi-Fi\",\"invalid_wifi_name\":\"ชื่อ wifi ไม่ถูกต้อง\",\"operator_denied\":\"การตั้งค่าของระบบปฏิเสธการเชื่อมต่อ Wi-Fi\",\"background_config_not_supported\":\"แอปพลิเคชันในพื้นหลังไม่สามารถตั้งค่า Wi-Fi\",\"expired_wifi_config\":\"การตั้งค่า Wi-Fi ที่บันทึกไว้ในระบบหมดอายุแล้ว แนะนำให้ลืม Wi-Fi แล้วลองใหม่\",\"invalid_password\":\"รหัสผ่าน WEP / WPA ไม่ถูกต้อง\",\"turn_on_wifi_before_connecting\":\"กรุณาเปิด wifi โทรศัพท์ก่อนเชื่อมต่อ\",\"mobile_version_not_supported\":\"เวอร์ชั่นมือถือไม่รองรับ\",\"connection_successful\":\"เชื่อมต่อสำเร็จ\"},\"chooseAvatar\":{\"email\":\"email\",\"complete_profile\":\"กรอกข้อมูลให้ครบถ้วน\",\"check_now\":\"ตรวจสอบเดี๋ยวนี้\",\"user\":\"ผู้ใช้\",\"user_nickname\":\"ชื่อเล่นผู้ใช้\",\"enter_user_nickname\":\"กรุณากรอกชื่อเล่นผู้ใช้\",\"mobile_number\":\"หมายเลขโทรศัพท์\",\"change\":\"เปลี่ยน\",\"authorized_mobile_number\":\"หมายเลขโทรศัพท์ที่ได้รับอนุญาต\",\"real_name\":\"ชื่อจริง\",\"gender\":\"เพศ\",\"birthday\":\"วันเกิด\",\"birthday_once_modified\":\"วันเกิดเมื่อแก้ไขแล้ว\",\"cannot_edit_again\":\"ไม่สามารถแก้ไขได้อีก\",\"birthday_gift_rules\":\"กฎการให้ของขวัญวันเกิด\",\"save\":\"บันทึก\",\"log_out\":\"ออกจากระบบ\",\"male\":\"ชาย\",\"female\":\"หญิง\",\"personal_info\":\"ข้อมูลส่วนตัว\",\"merchants_discounts_based_on_birthday\":\"ร้านค้าอาจมีส่วนลดตามวันเกิดของคุณ, คุณสามารถตั้งค่าวันเกิดของคุณได้ครั้งเดียวเท่านั้น, ยืนยันการตั้งค่าหรือไม่\",\"set_birthday_once\":\"คุณสามารถตั้งค่าวันเกิดได้ครั้งเดียวเท่านั้น\",\"confirm_set\":\"ยืนยันการตั้งค่าหรือไม่\",\"registration_successful\":\"ลงทะเบียนสำเร็จ\",\"warm_reminder\":\"การแจ้งเตือนอย่างอบอุ่น\",\"authorized_mobile_number_failed\":\"การอนุญาตหมายเลขโทรศัพท์ล้มเหลว\",\"please_authorize_mobile_number\":\"กรุณาอนุญาตหมายเลขโทรศัพท์\",\"modification_successful\":\"แก้ไขสำเร็จ\",\"select_image_or_nickname\":\"กรุณาเลือกภาพหรือชื่อเล่น\",\"confirm_logout\":\"คุณแน่ใจว่าต้องการออกจากระบบหรือไม่\",\"activity_description\":\"คำอธิบายกิจกรรม\",\"birthday_cannot_be_modified\":\"วันเกิดไม่สามารถแก้ไขได้\",\"please_birthday\":\"กรุณาเลือกวันเกิดของคุณ\",\"membership_card\":\"กรอกหมายเลขโทรศัพท์ วันเกิด และข้อมูลอื่นๆ ให้ครบถ้วนเพื่อรับบัตรสมาชิกของคุณ\",\"code\":\"รหัสยืนยัน\",\"enter_code\":\"กรุณาใส่รหัสยืนยัน\",\"enter_mobile\":\"กรุณาใส่หมายเลขโทรศัพท์\",\"enter_email\":\"กรุณาใส่อีเมล\",\"enter_realName\":\"กรุณาใส่ชื่อจริง\",\"requestopt\":\"ขอรหัสยืนยัน\",\"enteropt\":\"กรอกรหัสยืนยัน\",\"send_verification_code\":\"Send Verification Code\",\"claim_card\":\"รับบัตร\"},\"other-reserve\":{\"wechat_user\":\"ผู้ใช้ WeChat\",\"welcome\":\"ยินดีต้อนรับ\",\"please_modify_reservation_info\":\"กรุณาแก้ไขข้อมูลการจอง\",\"modify\":\"แก้ไข\",\"please_enter_contact_name\":\"กรุณากรอกชื่อผู้ติดต่อ\",\"please_enter_phone_number\":\"กรุณากรอกหมายเลขโทรศัพท์\",\"contact_information\":\"ข้อมูลการติดต่อ\",\"please_enter_reservation_number\":\"กรุณากรอกจำนวนโต๊ะที่จอง\",\"reservation_number\":\"จำนวนโต๊ะที่จอง\",\"if_other_needs\":\"หากมีความต้องการอื่นๆ\",\"please_note\":\"กรุณาใส่หมายเหตุ\",\"deposit_description\":\"คำอธิบายการวางมัดจำ\",\"dining_time\":\"เวลารับประทานอาหาร\",\"number_of_people\":\"จำนวนคนรับประทานอาหาร\",\"dining_area\":\"พื้นที่รับประทานอาหาร\",\"dining_position\":\"ตำแหน่งรับประทานอาหาร\",\"reservation_amount\":\"จำนวนเงินที่จอง\",\"time_left_less_than\":\"เวลาที่เหลือน้อยกว่า\",\"minutes\":\"นาที\",\"amount_not_refundable_after_merchant_acceptance\":\"จำนวนเงินไม่สามารถคืนได้หลังจากร้านค้ารับคำสั่ง\",\"payment_means_agreement\":\"การชำระเงินแสดงว่าคุณยอมรับข้อกำหนดข้างต้น\",\"pay_now\":\"จ่ายเงิน\",\"book_now\":\"จองทันที\",\"male\":\"ชาย\",\"female\":\"หญิง\",\"lady\":\"ผู้หญิง\",\"mr\":\"นาย\",\"reserve\":\"จอง\",\"please_complete_reservation_info\":\"กรุณากรอกข้อมูลการจองให้ครบถ้วน\",\"minimum_reservation_number\":\"จำนวนโต๊ะที่จองขั้นต่ำคือ\",\"missing_type\":\"ขาดประเภท\",\"missing_merchant\":\"ขาดร้านค้า\",\"please_enter_contact_name_again\":\"กรุณากรอกชื่อผู้ติดต่ออีกครั้ง\",\"please_enter_phone_number_again\":\"กรุณากรอกหมายเลขโทรศัพท์อีกครั้ง\",\"please_enter_correct_phone_number\":\"กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง\",\"order_verification_code\":\"รหัสยืนยันคำสั่งซื้อ\",\"time_and_number_of_people\":\"เวลาและจำนวนคน\",\"people\":\"คน\",\"position_requirements\":\"ความต้องการตำแหน่ง\",\"contact_information_again\":\"ข้อมูลการติดต่ออีกครั้ง\",\"reservation_deposit\":\"มัดจำการจอง\",\"order_time\":\"เวลาสั่งซื้อ\",\"order_number\":\"หมายเลขคำสั่งซื้อ\",\"order_notes\":\"หมายเหตุคำสั่งซื้อ\",\"cancel_reservation\":\"ยกเลิกการจอง\",\"contacting_merchant\":\"ติดต่อร้านค้า\",\"merchant_processing\":\"ร้านค้ากำลังดำเนินการ\",\"result_confirmation\":\"ยืนยันผล\",\"reservation_details\":\"รายละเอียดการจอง\",\"confirm_cancel_order\":\"คุณยืนยันการยกเลิกคำสั่งซื้อหรือไม่\",\"cancelling_order\":\"กำลังยกเลิกคำสั่งซื้อ\",\"operation_successful\":\"ดำเนินการสำเร็จ\",\"prompt\":\"แจ้งเตือน\",\"confirm_cancel_reservation\":\"ยืนยันการยกเลิกการจองหรือไม่\",\"cancel_reservation_again\":\"ยกเลิกการจอง\",\"continue_reservation\":\"จองต่อ\",\"cancelling\":\"กำลังยกเลิก\",\"people_again\":\"คน\",\"prepayment_per_table\":\"ต้องชำระล่วงหน้าโต๊ะละ\",\"deposit\":\"มัดจำ\",\"cancel_if_not_arrived_in_time\":\"หากไม่สามารถมาถึงตรงเวลา\",\"cancel_before_dining\":\"ยกเลิกก่อนรับประทานอาหาร\",\"minutes_can_cancel_order\":\"นาทียกเลิกคำสั่งซื้อ\",\"reserve_now\":\"จองทันที\",\"table_reservation\":\"การจองโต๊ะ\",\"my_reservations\":\"การจองของฉัน\",\"table_reservation_again\":\"การจองโต๊ะ\",\"people_once_more\":\"คน\",\"confirm_cancel_reservation_again\":\"คุณยืนยันการยกเลิกการจองหรือไม่\",\"table_reservation_closed\":\"การจองโต๊ะถูกปิด\",\"table_reservation_not_set\":\"ฟังก์ชั่นการจองโต๊ะไม่ได้ตั้งค่า\",\"minimum_people_per_reservation\":\"คนขึ้นไป\",\"maximum\":\"มากที่สุด\",\"people_final\":\"คน\",\"please_choose_reservation_type\":\"กรุณาเลือกประเภทการจอง\",\"reservation_info\":\"ข้อมูลการจอง\",\"people_count\":\"คน\",\"table_count\":\"โต๊ะ\",\"pay_immediately\":\"ชำระเงินทันที\",\"cancel_reservation_final\":\"ยกเลิกการจอง\"},\"recharge\":{\"all\":\"ทั้งหมด\",\"recharge\":\"เติมเงิน\",\"consumption\":\"การใช้จ่าย\",\"transaction_record\":\"ประวัติการทำธุรกรรม\",\"account_balance\":\"ยอดคงเหลือในบัญชี\",\"stored_value_exchange\":\"การแลกเปลี่ยนมูลค่าเก็บ\",\"gift\":\"ของขวัญ\",\"balance\":\"ยอดคงเหลือ\",\"points\":\"คะแนน\",\"first_recharge_reward\":\"รางวัลการเติมเงินครั้งแรก\",\"please_enter\":\"กรุณากรอก\",\"other_amount\":\"จำนวนเงินอื่นๆ\",\"you_will_get\":\"คุณจะได้รับ\",\"give\":\"ให้\",\"upgrade_to_membership_level\":\"อัพเกรดเป็นระดับสมาชิก\",\"instructions\":\"คำแนะนำ\",\"membership_stored_value_agreement\":\"ข้อตกลงมูลค่าเก็บของสมาชิก\",\"store_value_now\":\"เก็บมูลค่าทันที\",\"membership_stored_value\":\"มูลค่าเก็บของสมาชิก\",\"tip\":\"เคล็ดลับ\",\"stored_value_function_is_closed\":\"ฟังก์ชั่นมูลค่าเก็บถูกปิด\",\"please_select_a_store\":\"กรุณาเลือกร้านค้า\",\"please_read_and_agree_to_the_membership_stored_value_agreement_carefully\":\"กรุณาอ่านและยอมรับข้อตกลงมูลค่าเก็บของสมาชิกอย่างละเอียด\",\"please_enter_the_stored_value_amount\":\"กรุณากรอกจำนวนมูลค่าเก็บ\",\"minimum_recharge_amount\":\"จำนวนเงินเติมเงินขั้นต่ำ\",\"placing_order\":\"กำลังสั่งซื้อ\"},\"sq-btn\":{\"welcome\":\"ยินดีต้อนรับเข้าร่วม\",\"exclusive_activities\":\"เข้าร่วมแล้วรับกิจกรรมพิเศษ\",\"member_gifts\":\"ของขวัญสำหรับสมาชิก\",\"phone_login\":\"ล็อกอินด้วยโทรศัพท์\",\"not_login_now\":\"ยังไม่เข้าสู่ระบบ\",\"enter_phone_number\":\"กรุณาใส่หมายเลขโทรศัพท์\",\"enter_verification_code\":\"กรุณาใส่รหัสยืนยัน\",\"sent\":\"ส่งแล้ว\",\"login_now\":\"เข้าสู่ระบบทันที\",\"not_login\":\"ยังไม่เข้าสู่ระบบ\",\"allow_usage_of_personal_info\":\"อนุญาตให้เราใช้ข้อมูลส่วนตัวของคุณในกรณีจำเป็นอย่างสมเหตุสมผล และคุ้มครองสิทธิ์ของคุณอย่างเต็มที่\",\"protect_legal_rights\":\"ใช้ข้อมูลส่วนตัวของคุณอย่างสมเหตุสมผล\",\"ensure_rights\":\"และคุ้มครองสิทธิ์ของคุณอย่างเต็มที่\",\"user_agreement\":\"ข้อตกลงผู้ใช้\",\"get_verification_code\":\"รับรหัสยืนยัน\",\"read_and_agree\":\"กรุณาอ่านและยอมรับ\",\"prompt\":\"แจ้งเตือน\",\"click_top_right_to_share\":\"คลิกที่มุมขวาบนเพื่อแชร์\",\"got_it\":\"ฉันรู้แล้ว\",\"binding_successful\":\"การผูกบัญชีสำเร็จ\",\"registration_successful\":\"การลงทะเบียนสำเร็จ\",\"warm_prompt\":\"คำแนะนำที่อบอุ่น\",\"phone_authorization_failed\":\"การอนุญาตหมายเลขโทรศัพท์ล้มเหลว\",\"seconds\":\"วินาที\",\"send_verification_code\":\"ส่งรหัสยืนยัน\",\"login_successful\":\"เข้าสู่ระบบสำเร็จ\",\"bind_phone_number\":\"ผูกหมายเลขโทรศัพท์\"},\"login\":{\"welcome_message\":\"ยินดีต้อนรับ\",\"phone_number\":\"เบอร์โทรศัพท์\",\"enter_email_or_phone\":\"กรุณาใส่อีเมลหรือเบอร์โทรศัพท์\",\"password\":\"รหัสผ่าน\",\"enter_password\":\"กรุณาใส่รหัสผ่าน\",\"login\":\"เข้าสู่ระบบ\",\"forgot_password\":\"ลืมรหัสผ่าน\",\"no_account\":\"ไม่มีบัญชี\",\"register\":\"ลงทะเบียน\",\"third_party_login\":\"เข้าสู่ระบบผ่านบุคคลที่สาม\",\"enter_email_or_phone_placeholder\":\"กรุณาใส่อีเมลหรือเบอร์โทรศัพท์\",\"enter_password_placeholder\":\"กรุณาใส่รหัสผ่าน\"},\"password_reset\":{\"reset_password\":\"รีเซ็ตรหัสผ่าน\",\"enter_phone_number\":\"กรุณาใส่หมายเลขโทรศัพท์\",\"ente_email\":\"กรุณาใส่อีเมลของคุณ\",\"enter_verification_code\":\"กรุณาใส่รหัสยืนยัน\",\"enter_new_password\":\"กรุณาใส่รหัสผ่านใหม่\",\"confirm\":\"ยืนยัน\",\"reset_password_via_email\":\"รีเซ็ตรหัสผ่านผ่านอีเมล\",\"reset_password_via_phone\":\"รีเซ็ตรหัสผ่านผ่านโทรศัพท์\",\"enter_phone_number_again\":\"กรุณาใส่หมายเลขโทรศัพท์อีกครั้ง\",\"saving\":\"กำลังบันทึก\",\"saved_successfully\":\"บันทึกสำเร็จ\",\"sending\":\"กำลังส่ง\"},\"registration\":{\"welcome_message\":\"ยินดีต้อนรับเข้าร่วม\",\"enter_phone_number\":\"กรุณาใส่หมายเลขโทรศัพท์\",\"enter_email\":\"กรุณาใส่อีเมล\",\"enter_verification_code\":\"กรุณาใส่รหัสยืนยัน\",\"enter_password\":\"กรุณาใส่รหัสผ่าน\",\"enter_confirm_password\":\"กรุณาใส่รหัสผ่านยืนยัน\",\"register_and_login\":\"ลงทะเบียนและเข้าสู่ระบบ\",\"register_with_email\":\"ลงทะเบียนด้วยอีเมล\",\"register_with_phone\":\"ลงทะเบียนด้วยโทรศัพท์\",\"enter_correctly\":\"กรุณาใส่ให้ถูกต้อง\",\"passwords_do_not_match\":\"รหัสผ่านที่ใส่ไม่ตรงกัน\"},\"pointdl\":{\"already_have\":\"มีแล้ว\",\"collect_points\":\"สะสมแต้ม\",\"still_missing\":\"ยังขาด\",\"can_get\":\"สามารถได้รับ\",\"balance\":\"ยอดคงเหลือ\",\"points\":\"แต้ม\",\"coupons\":\"คูปอง\",\"event_description\":\"คำอธิบายกิจกรรม\",\"points_for_gift\":\"สะสมแต้มแลกของขวัญ\"},\"address\":{\"please_select_location\":\"กรุณาเลือกสถานที่\"},\"my-coupon\":{\"coupon_unusable\":\"คูปองไม่สามารถใช้ได้\",\"copy\":\"คัดลอก\",\"usage_rules\":\"กฎการใช้\",\"all_stores\":\"ร้านค้าทั้งหมด\",\"valid_for_n_days\":\"ใช้ได้ภายใน N วัน\",\"coupon_description\":\"รายละเอียดคูปอง\",\"highest_price_discount\":\"ส่วนลดสำหรับสินค้าราคาสูงสุด\",\"choose_friend\":\"เลือกเพื่อน\",\"fixed\":\"คงที่\",\"not_applicable_for_specified_products\":\"ไม่สามารถใช้กับสินค้าที่กำหนดได้\",\"usable\":\"สามารถใช้ได้\",\"effective_from_day\":\"มีผลตั้งแต่วัน\",\"lowest_price_discount\":\"ส่วนลดสำหรับสินค้าราคาต่ำสุด\",\"exchange_rules\":\"กฎการแลกเปลี่ยน\",\"my_coupons\":\"คูปองของฉัน\",\"view_product\":\"ดูสินค้า\",\"exchange\":\"แลกเปลี่ยน\",\"instant_discount\":\"ส่วนลดทันที\",\"view_store\":\"ดูร้านค้า\",\"coupon_center\":\"ศูนย์คูปอง\",\"text_type\":\"ประเภทข้อความ\",\"not_applicable_for_specified_stores\":\"ไม่สามารถใช้กับร้านค้าที่กำหนดได้\",\"used_or_expired_coupon\":\"คูปองที่ใช้หรือหมดอายุแล้ว\",\"exchange_product\":\"แลกเปลี่ยนสินค้า\",\"coupon_source\":\"แหล่งที่มาของคูปอง\",\"confirm_gift\":\"ยืนยันการให้\",\"coupon_display\":\"การแสดงคูปอง\",\"usable_coupons\":\"คูปองที่สามารถใช้ได้\",\"applicable_stores_specified\":\"ร้านค้าที่สามารถใช้ได้\",\"expires_soon\":\"กำลังจะหมดอายุ\",\"style_type\":\"ประเภทสไตล์\",\"shipping\":\"การจัดส่ง\",\"free_shipping\":\"จัดส่งฟรี\",\"validity_period\":\"ระยะเวลาที่ใช้ได้\",\"quantity\":\"จำนวน\",\"discount\":\"ส่วนลด\",\"validity_period_usage\":\"ระยะเวลาที่ใช้ได้สำหรับการใช้งาน\",\"valid_from\":\"ใช้ได้ตั้งแต่\",\"days\":\"วัน\",\"claim_now\":\"รับทันที\",\"generation\":\"รุ่น\",\"reason_unusable\":\"เหตุผลที่ไม่สามารถใช้ได้\",\"all_products\":\"สินค้าทั้งหมด\",\"valid_for_n_hours\":\"ใช้ได้ภายใน N ชั่วโมง\",\"gift_to_friend\":\"มอบให้เพื่อน\",\"scan_to_order\":\"สแกนเพื่อสั่งซื้อ\",\"pay_in_person\":\"ชำระเงินที่หน้าร้าน\",\"second_highest_price_discount\":\"ส่วนลดสำหรับสินค้าราคาสูงสุดอันดับสอง\",\"takeaway\":\"สั่งกลับบ้าน\",\"start\":\"เริ่ม\",\"applicable_stores\":\"ร้านค้าที่สามารถใช้ได้\",\"no_restrictions\":\"ไม่มีข้อจำกัด\",\"applicable_products\":\"สินค้าที่สามารถใช้ได้\",\"received_coupon\":\"รับคูปองแล้ว\",\"total\":\"ทั้งหมด\",\"notification\":\"การแจ้งเตือน\",\"use_now\":\"ใช้ทันที\",\"self_pickup\":\"รับสินค้าเอง\",\"applicable_specified_products\":\"สินค้าที่กำหนดสามารถใช้ได้\",\"usage_scenario\":\"สถานการณ์การใช้งาน\",\"coupon\":\"คูปอง\",\"min_purchase\":\"ขั้นต่ำในการซื้อ\",\"fast_food\":\"อาหารจานด่วน\",\"activity_name\":\"ชื่อกิจกรรม\",\"minimum_purchase\":\"ซื้อขั้นต่ำ\",\"available\":\"สามารถใช้ได้\",\"valid_until\":\"ใช้ได้จนถึง\",\"issued_successfully\":\"ออกให้สำเร็จ\",\"bonus_balance\":\"ยอดคงเหลือโบนัส\",\"bonus_points\":\"คะแนนโบนัส\",\"login_and_claim\":\"เข้าสู่ระบบและรับ\",\"show_redeem_code\":\"โปรดแสดงรหัสเพื่อรับสินค้าที่ร้าน\",\"points\":\"คะแนน\",\"added_to_account\":\"เพิ่มในบัญชีของคุณแล้ว\",\"view_in_miniprogram\":\"สามารถดูได้ในมินิโปรแกรม\",\"personal_center\":\"ศูนย์ส่วนตัว\",\"participate_now\":\"เข้าร่วมกิจกรรม\",\"place_order\":\"สั่งซื้อ\",\"popup_coupon\":\"คูปองป๊อปอัพ\",\"new_user_gift\":\"ของขวัญสำหรับผู้ใช้ใหม่\",\"claimed_successfully\":\"รับสำเร็จ\",\"enter_phone_number\":\"กรอกเบอร์โทรศัพท์ของเพื่อน ์\",\"coupon_not_applicable\":\"คูปองไม่สามารถใช้ได้\"},\"refunddl\":{\"refund_reason\":\"เหตุผลการขอคืนเงิน\",\"other_reason\":\"เหตุผลอื่น\",\"refund_remarks_optional\":\"หมายเหตุการคืนเงิน (เลือกได้)\",\"apply_refund\":\"ขอคืนเงิน\",\"select_refund_reason\":\"กรุณาเลือกเหตุผลการคืนเงิน\"},\"privacy\":{\"privacy_policy_title\":\"แนวทางการปกป้องข้อมูลส่วนบุคคลของผู้ใช้\",\"privacy_policy_intro\":\"ขอบคุณที่ใช้บริการของเรา ก่อนที่จะใช้โปรแกรมนี้ คุณควรอ่านและยอมรับ\",\"privacy_policy_link\":\"แนวทางการปกป้องข้อมูลส่วนบุคคลของโปรแกรม\",\"privacy_policy_agreement\":\"หากคุณยอมรับแนวทางการปกป้องข้อมูลส่วนบุคคลของโปรแกรม กรุณาคลิก 'ยอมรับ' เพื่อเริ่มใช้งาน\",\"reject_button\":\"ปฏิเสธ\",\"agree_button\":\"ยอมรับ\",\"default_privacy_policy_name\":\"แนวทางการปกป้องข้อมูลส่วนบุคคลของผู้ใช้\"}}");

/***/ }),

/***/ 36:
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.28.2 
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'compactDisplay',
  'currency',
  'currencyDisplay',
  'currencySign',
  'localeMatcher',
  'notation',
  'numberingSystem',
  'signDisplay',
  'style',
  'unit',
  'unitDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits'
];

var dateTimeFormatKeys = [
  'dateStyle',
  'timeStyle',
  'calendar',
  'localeMatcher',
  "hour12",
  "hourCycle",
  "timeZone",
  "formatMatcher",
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName' ];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

var isArray = Array.isArray;

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isBoolean (val) {
  return typeof val === 'boolean'
}

function isString (val) {
  return typeof val === 'string'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function isFunction (val) {
  return typeof val === 'function'
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.delete(item)) {
    return arr
  }
}

function arrayFrom (arr) {
  var ret = [];
  arr.forEach(function (a) { return ret.push(a); });
  return ret
}

function includes (arr, item) {
  return !!~arr.indexOf(item)
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = isArray(a);
      var isArrayB = isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Sanitizes html special characters from input strings. For mitigating risk of XSS attacks.
 * @param rawText The raw input from the user that should be escaped.
 */
function escapeHtml(rawText) {
  return rawText
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Escapes html tags and special symbols from all provided params which were returned from parseArgs().params.
 * This method performs an in-place operation on the params object.
 *
 * @param {any} params Parameters as provided from `parseArgs().params`.
 *                     May be either an array of strings or a string->any map.
 *
 * @returns The manipulated `params` object.
 */
function escapeParams(params) {
  if(params != null) {
    Object.keys(params).forEach(function (key) {
      if(typeof(params[key]) == 'string') {
        params[key] = escapeHtml(params[key]);
      }
    });
  }
  return params
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

/**
 * Mixin
 * 
 * If `bridge` mode, empty mixin is returned,
 * else regulary mixin implementation is returned.
 */
function defineMixin (bridge) {
  if ( bridge === void 0 ) bridge = false;

  function mounted () {
    if (this !== this.$root && this.$options.__INTLIFY_META__ && this.$el) {
      this.$el.setAttribute('data-intlify', this.$options.__INTLIFY_META__);
    }
  }

  return bridge
    ? { mounted: mounted } // delegate `vue-i18n-bridge` mixin implementation
    : { // regulary 
    beforeCreate: function beforeCreate () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n = options.__i18nBridge || options.__i18n;
              _i18n.forEach(function (resource) {
                localeMessages = merge(localeMessages, JSON.parse(resource));
              });
              Object.keys(localeMessages).forEach(function (locale) {
                options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
              });
            } catch (e) {
              if (true) {
                error("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }
          this._i18n = options.i18n;
          this._i18nWatcher = this._i18n.watchI18nData();
        } else if (isPlainObject(options.i18n)) {
          var rootI18n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n
            ? this.$root.$i18n
            : null;
          // component local i18n
          if (rootI18n) {
            options.i18n.root = this.$root;
            options.i18n.formatter = rootI18n.formatter;
            options.i18n.fallbackLocale = rootI18n.fallbackLocale;
            options.i18n.formatFallbackMessages = rootI18n.formatFallbackMessages;
            options.i18n.silentTranslationWarn = rootI18n.silentTranslationWarn;
            options.i18n.silentFallbackWarn = rootI18n.silentFallbackWarn;
            options.i18n.pluralizationRules = rootI18n.pluralizationRules;
            options.i18n.preserveDirectiveContent = rootI18n.preserveDirectiveContent;
          }

          // init locale messages via custom blocks
          if ((options.__i18nBridge || options.__i18n)) {
            try {
              var localeMessages$1 = options.i18n && options.i18n.messages ? options.i18n.messages : {};
              var _i18n$1 = options.__i18nBridge || options.__i18n;
              _i18n$1.forEach(function (resource) {
                localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
              });
              options.i18n.messages = localeMessages$1;
            } catch (e) {
              if (true) {
                warn("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }

          var ref = options.i18n;
          var sharedMessages = ref.sharedMessages;
          if (sharedMessages && isPlainObject(sharedMessages)) {
            options.i18n.messages = merge(options.i18n.messages, sharedMessages);
          }

          this._i18n = new VueI18n(options.i18n);
          this._i18nWatcher = this._i18n.watchI18nData();

          if (options.i18n.sync === undefined || !!options.i18n.sync) {
            this._localeWatcher = this.$i18n.watchLocale();
          }

          if (rootI18n) {
            rootI18n.onComponentInstanceCreated(this._i18n);
          }
        } else {
          if (true) {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        // root i18n
        this._i18n = this.$root.$i18n;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        // parent i18n
        this._i18n = options.parent.$i18n;
      }
    },

    beforeMount: function beforeMount () {
      var options = this.$options;
      options.i18n = options.i18n || ((options.__i18nBridge || options.__i18n) ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else if (isPlainObject(options.i18n)) {
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else {
          if (true) {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      }
    },

    mounted: mounted,

    beforeDestroy: function beforeDestroy () {
      if (!this._i18n) { return }

      var self = this;
      this.$nextTick(function () {
        if (self._subscribing) {
          self._i18n.unsubscribeDataChanging(self);
          delete self._subscribing;
        }

        if (self._i18nWatcher) {
          self._i18nWatcher();
          self._i18n.destroyVM();
          delete self._i18nWatcher;
        }

        if (self._localeWatcher) {
          self._localeWatcher();
          delete self._localeWatcher;
        }
      });
    }
  }
}

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: [String, Boolean, Object],
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (isString(props.format)) {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (includes(numberFormatKeys, prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    var tag = (!!props.tag && props.tag !== true) || props.tag === false ? props.tag : 'span';
    return tag
      ? h(tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass
      }, values)
      : values
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice != null) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (isString(value)) {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue, options) {
  if ( options === void 0 ) options = { bridge: false };

  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(defineMixin(options.bridge));
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined || value === null) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-zA-Z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); },
  'capitalize': function (str) { return ("" + (str.charAt(0).toLocaleUpperCase()) + (str.substr(1))); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale === false
    ? false
    : options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || options.datetimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._fallbackRootWithEmptyString = options.fallbackRootWithEmptyString === undefined
    ? true
    : !!options.fallbackRootWithEmptyString;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = new Set();
  this._componentInstanceCreatedListener = options.componentInstanceCreatedListener || null;
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';
  this._postTranslation = options.postTranslation || null;
  this._escapeParameterHtml = options.escapeParameterHtml || false;

  if ('__VUE_I18N_BRIDGE__' in options) {
    this.__VUE_I18N_BRIDGE__ = options.__VUE_I18N_BRIDGE__;
  }

  /**
   * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
   * @param choicesLength {number} an overall amount of available choices
   * @returns a final choice index
  */
  this.getChoiceIndex = function (choice, choicesLength) {
    var thisPrototype = Object.getPrototypeOf(this$1);
    if (thisPrototype && thisPrototype.getChoiceIndex) {
      var prototypeGetChoiceIndex = (thisPrototype.getChoiceIndex);
      return (prototypeGetChoiceIndex).call(this$1, choice, choicesLength)
    }

    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function (_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice
          ? _choice > 1
            ? 1
            : 0
          : 1
      }

      return _choice ? Math.min(_choice, 2) : 0
    };

    if (this$1.locale in this$1.pluralizationRules) {
      return this$1.pluralizationRules[this$1.locale].apply(this$1, [choice, choicesLength])
    } else {
      return defaultImpl(choice, choicesLength)
    }
  };


  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true },postTranslation: { configurable: true },sync: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (isString(message)) {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data, __VUE18N__INSTANCE__: true });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.add(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
    var this$1 = this;
  return this._vm.$watch('$data', function () {
    var listeners = arrayFrom(this$1._dataListeners);
    var i = listeners.length;
    while(i--) {
      Vue.nextTick(function () {
        listeners[i] && listeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale (composer) {
  if (!composer) {
    /* istanbul ignore if */
    if (!this._sync || !this._root) { return null }
    var target = this._vm;
    return this._root.$i18n.vm.$watch('locale', function (val) {
      target.$set(target, 'locale', val);
      target.$forceUpdate();
    }, { immediate: true })
  } else {
    // deal with vue-i18n-bridge
    if (!this.__VUE_I18N_BRIDGE__) { return null }
    var self = this;
    var target$1 = this._vm;
    return this.vm.$watch('locale', function (val) {
      target$1.$set(target$1, 'locale', val);
      if (self.__VUE_I18N_BRIDGE__ && composer) {
        composer.locale.value = val;
      }
      target$1.$forceUpdate();
    }, { immediate: true })
  }
};

VueI18n.prototype.onComponentInstanceCreated = function onComponentInstanceCreated (newI18n) {
  if (this._componentInstanceCreatedListener) {
    this._componentInstanceCreatedListener(newI18n, this);
  }
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._localeChainCache = {};
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

prototypeAccessors.postTranslation.get = function () { return this._postTranslation };
prototypeAccessors.postTranslation.set = function (handler) { this._postTranslation = handler; };

prototypeAccessors.sync.get = function () { return this._sync };
prototypeAccessors.sync.set = function (val) { this._sync = val; };

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (isString(missingRet)) {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return (this._fallbackRootWithEmptyString? !val : isNull(val)) && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (!(isString(ret) || isFunction(ret))) {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string or function !"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (isString(pathRet) || isFunction(pathRet)) {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string or function!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (isString(ret) && (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0)) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);

  // eslint-disable-next-line no-autofix/prefer-const
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (includes(visitedLinkStack, linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._createMessageContext = function _createMessageContext (values, formatter, path, interpolateMode) {
    var this$1 = this;

  var _list = isArray(values) ? values : [];
  var _named = isObject(values) ? values : {};
  var list = function (index) { return _list[index]; };
  var named = function (key) { return _named[key]; };
  var messages = this._getMessages();
  var locale = this.locale;

  return {
    list: list,
    named: named,
    values: values,
    formatter: formatter,
    path: path,
    messages: messages,
    locale: locale,
    linked: function (linkedKey) { return this$1._interpolate(locale, messages[locale] || {}, linkedKey, null, interpolateMode, undefined, [linkedKey]); }
  }
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  if (isFunction(message)) {
    return message(
      this._createMessageContext(values, this._formatter || defaultFormatter, path, interpolateMode)
    )
  }

  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' && !isString(ret) ? ret.join('') : ret
};

VueI18n.prototype._appendItemToChain = function _appendItemToChain (chain, item, blocks) {
  var follow = false;
  if (!includes(chain, item)) {
    follow = true;
    if (item) {
      follow = item[item.length - 1] !== '!';
      item = item.replace(/!/g, '');
      chain.push(item);
      if (blocks && blocks[item]) {
        follow = blocks[item];
      }
    }
  }
  return follow
};

VueI18n.prototype._appendLocaleToChain = function _appendLocaleToChain (chain, locale, blocks) {
  var follow;
  var tokens = locale.split('-');
  do {
    var item = tokens.join('-');
    follow = this._appendItemToChain(chain, item, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && (follow === true))
  return follow
};

VueI18n.prototype._appendBlockToChain = function _appendBlockToChain (chain, block, blocks) {
  var follow = true;
  for (var i = 0; (i < block.length) && (isBoolean(follow)); i++) {
    var locale = block[i];
    if (isString(locale)) {
      follow = this._appendLocaleToChain(chain, locale, blocks);
    }
  }
  return follow
};

VueI18n.prototype._getLocaleChain = function _getLocaleChain (start, fallbackLocale) {
  if (start === '') { return [] }

  if (!this._localeChainCache) {
    this._localeChainCache = {};
  }

  var chain = this._localeChainCache[start];
  if (!chain) {
    if (!fallbackLocale) {
      fallbackLocale = this.fallbackLocale;
    }
    chain = [];

    // first block defined by start
    var block = [start];

    // while any intervening block found
    while (isArray(block)) {
      block = this._appendBlockToChain(
        chain,
        block,
        fallbackLocale
      );
    }

    // last block defined by default
    var defaults;
    if (isArray(fallbackLocale)) {
      defaults = fallbackLocale;
    } else if (isObject(fallbackLocale)) {
      /* $FlowFixMe */
      if (fallbackLocale['default']) {
        defaults = fallbackLocale['default'];
      } else {
        defaults = null;
      }
    } else {
      defaults = fallbackLocale;
    }

    // convert defaults to array
    if (isString(defaults)) {
      block = [defaults];
    } else {
      block = defaults;
    }
    if (block) {
      this._appendBlockToChain(
        chain,
        block,
        null
      );
    }
    this._localeChainCache[start] = chain;
  }
  return chain
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var chain = this._getLocaleChain(locale, fallback);
  var res;
  for (var i = 0; i < chain.length; i++) {
    var step = chain[i];
    res =
      this._interpolate(step, messages[step], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to translate the keypath '" + key + "' with '" + step + "' locale."));
      }
      return res
    }
  }
  return null
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  if(this._escapeParameterHtml) {
    parsedArgs.params = escapeParams(parsedArgs.params);
  }

  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    ret = this._warnDefault(locale, key, ret, host, values, 'string');
    if (this._postTranslation && ret !== null && ret !== undefined) {
      ret = this._postTranslation(ret, key);
    }
    return ret
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (!isString(locale)) {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message || !isString(message)) { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
  }
  this._vm.$set(this._vm.messages, locale, merge(
    typeof this._vm.messages[locale] !== 'undefined' && Object.keys(this._vm.messages[locale]).length
      ? Object.assign({}, this._vm.messages[locale])
      : {},
    message
  ));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  this._clearDateTimeFormat(locale, format);
};

VueI18n.prototype._clearDateTimeFormat = function _clearDateTimeFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._dateTimeFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._dateTimeFormatters[id];
  }
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = dateTimeFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' datetime formats from '" + current + "' datetime formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      formatter = new Intl.DateTimeFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._dateTimeFormatters[id];
      if (!formatter) {
        formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
      }
    }

    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key, options) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    var dtf = !options ? new Intl.DateTimeFormat(locale) : new Intl.DateTimeFormat(locale, options);
    return dtf.format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key, options);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }

    options = Object.keys(args[0]).reduce(function (acc, key) {
        var obj;

      if (includes(dateTimeFormatKeys, key)) {
        return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
      }
      return acc
    }, null);

  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._d(value, locale, key, options)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  this._clearNumberFormat(locale, format);
};

VueI18n.prototype._clearNumberFormat = function _clearNumberFormat (locale, format) {
  // eslint-disable-next-line no-autofix/prefer-const
  for (var key in format) {
    var id = locale + "__" + key;

    if (!this._numberFormatters.hasOwnProperty(id)) {
      continue
    }

    delete this._numberFormatters[id];
  }
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  var chain = this._getLocaleChain(locale, fallback);
  for (var i = 0; i < chain.length; i++) {
    var current = _locale;
    var step = chain[i];
    formats = numberFormats[step];
    _locale = step;
    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (step !== locale && "development" !== 'production' && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
        warn(("Fall back to '" + step + "' number formats from '" + current + "' number formats."));
      }
    } else {
      break
    }
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (isString(args[0])) {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (includes(numberFormatKeys, key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (isString(args[0])) {
      key = args[0];
    }
    if (isString(args[1])) {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.28.2';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ 37:
/*!*****************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/core/util.js ***!
  \*****************************************************/
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
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 40));
var _api = _interopRequireDefault(__webpack_require__(/*! ../api */ 41));
var _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 31));
var _index = _interopRequireDefault(__webpack_require__(/*! @/locale/index.js */ 32));
var _wechatUtil = __webpack_require__(/*! ../wechat-util.js */ 42);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var util = {
  burl: ''
};
util.url = function (action) {
  var url = '';
  if (util.burl) {
    url = util.burl;
  } else {
    var siteInfo = getApp().globalData.siteInfo,
      nowtime = Date.parse(new Date());
    url = util.burl = siteInfo.isDev ? siteInfo.siteroot : siteInfo.siteroot;
  }
  return url + action;
};
function getQuery(url) {
  var theRequest = [];
  if (url.indexOf("?") != -1) {
    var str = url.split('?')[1];
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      if (strs[i].split("=")[0] && unescape(strs[i].split("=")[1])) {
        theRequest[i] = {
          'name': strs[i].split("=")[0],
          'value': unescape(strs[i].split("=")[1])
        };
      }
    }
  }
  return theRequest;
}
function getUrlParam(url, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = url.split('?')[1].match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
util.request = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(option) {
    var _res$data;
    var app, url, _yield$uni$request, _yield$uni$request2, error, res, _res$data2, _res$data3;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (option.mask) {
              uni.showLoading({
                title: option.mask == 1 ? _index.default.t('modal.loading') : option.mask,
                mask: true
              });
            }
            app = getApp().globalData, url = util.url(option.url);
            option = option || {};
            if (url) {
              _context.next = 5;
              break;
            }
            return _context.abrupt("return", false);
          case 5:
            _context.next = 7;
            return uni.request({
              'url': url,
              'data': option.data ? option.data : {},
              'method': option.method ? option.method : 'GET',
              'header': {
                'content-type': option.ct ? 'application/json' : 'application/x-www-form-urlencoded',
                "appType": _api.default.platform,
                'uniacid': app.siteInfo.uniacid,
                'module': 'yb_wm_v3',
                'lang': _index.default.locale,
                'userId': uni.getStorageSync('userId'),
                'shopId': uni.getStorageSync('shopId'),
                'Authorization': "Bearer ".concat(uni.getStorageSync('token'))
              }
            });
          case 7:
            _yield$uni$request = _context.sent;
            _yield$uni$request2 = (0, _slicedToArray2.default)(_yield$uni$request, 2);
            error = _yield$uni$request2[0];
            res = _yield$uni$request2[1];
            if (option.mask) {
              uni.hideLoading();
            }
            if (res.data && res.data.code == 402) {
              util.message(res.data.msg || res.data, 3, 2000);
              uni.reLaunch({
                url: '/pages/other/block'
              });
            }
            if (!((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.code) == 200)) {
              _context.next = 17;
              break;
            }
            return _context.abrupt("return", res.data);
          case 17:
            if (!((res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.code) == 400)) {
              _context.next = 21;
              break;
            }
            return _context.abrupt("return", util.message(res.data.msg || res.data, 3, 2000));
          case 21:
            if (!((res === null || res === void 0 ? void 0 : (_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.code) == 401)) {
              _context.next = 26;
              break;
            }
            console.log('%c token错误', 'color: white; background-color: #ffaaff', res);
            //return util.message(res.data.msg || res.data, 3, 2000)
            // uni.reLaunch({
            // 	url: '/pages/other/login'
            // })

            // this.go({
            // 	url: '/pages/other/login'
            // })
            return _context.abrupt("return", res.data);
          case 26:
            console.log('%c request异常', 'color: white; background-color: #f00000', res);
            return _context.abrupt("return", util.message(res.data.msg || res.data, 3, 2000));
          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
util.ckWz = function (obj) {
  if (_api.default.platform != 'weChat') {
    uni.openLocation({
      latitude: +obj.lat,
      longitude: +obj.lng,
      name: obj.name,
      address: obj.address
    });
  } else {
    (0, _wechatUtil.openLocation)(obj);
  }
};
util.message = function (c, t, d) {
  uni.showToast({
    icon: t == 1 ? 'success' : t == 2 ? 'loading' : t == 3 ? 'none' : '',
    title: c,
    duration: d || 1000
  });
};
util.modal = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(c, t) {
    var _yield$uni$showModal, _yield$uni$showModal2, error, res;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return uni.showModal({
              title: t || _index.default.t('modal.title'),
              cancelText: _index.default.t('modal.cancelText'),
              confirmText: _index.default.t('modal.confirmText'),
              content: c
            });
          case 2:
            _yield$uni$showModal = _context2.sent;
            _yield$uni$showModal2 = (0, _slicedToArray2.default)(_yield$uni$showModal, 2);
            error = _yield$uni$showModal2[0];
            res = _yield$uni$showModal2[1];
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              if (res.confirm) {
                resolve();
              } else if (res.cancel) {
                reject();
              }
            }));
          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
util.makeTel = function (e) {
  console.log(e);
  uni.makePhoneCall({
    phoneNumber: e || '123456'
  });
};

//封装微信等待提示，防止ajax过多时，show多次
util.showLoading = function (c) {
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var isShowLoading = uni.getStorageSync('isShowLoading');
  if (isShowLoading) {
    uni.hideLoading();
    uni.setStorageSync('isShowLoading', false);
  }
  uni.showLoading({
    title: c || '加载中',
    mask: m ? true : false,
    complete: function complete() {
      uni.setStorageSync('isShowLoading', true);
    },
    fail: function fail() {
      uni.setStorageSync('isShowLoading', false);
    }
  });
};
util.getSb = function () {
  var info = getApp().globalData.sb;
  if (info) {
    return info;
  } else {
    info = uni.getSystemInfoSync();
    // console.log(info)
    // let rate=uni.upx2px(750)/750,
    var rate = +(info.windowWidth / 750).toFixed(5),
      customNavh = info.statusBarHeight + 44;
    getApp().globalData.sb = _objectSpread(_objectSpread({}, info), {}, {
      rate: rate,
      customNavh: customNavh
    });
    return getApp().globalData.sb;
  }
};
util.getPage = function () {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var pages = getCurrentPages();
  return pages[pages.length - i];
};
util.getRoute = function () {
  var pages = getCurrentPages(),
    currentPage = pages[pages.length - 1],
    url = currentPage.route || currentPage.__route__; //当前页面url
  //console.log(currentPage, currentPage.__route__, typeof currentPage)
  return url;
};
util.preImg = function (option) {
  uni.previewImage({
    current: option.idx,
    urls: option.urls
  });
};
util.getSetting = function (type) {
  return new Promise(function (resolve, reject) {
    uni.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.' + type]) {
          resolve(1);
        } else {
          resolve(2);
        }
        console.log(res.authSetting);
      }
    });
  });
};
util.setNT = function (n) {
  uni.setNavigationBarTitle({
    title: n
  });
};
util.setNB = function () {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
  var nofc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  uni.setNavigationBarColor({
    frontColor: n.indexOf('#fff') > -1 || nofc ? '#000000' : '#ffffff',
    backgroundColor: n
  });
};
util.sj = function () {
  var r = Math.floor(Math.random() * 1000000 + 0);
  return r;
};
util.fz = function (n) {
  uni.setClipboardData({
    data: n,
    success: function success() {
      util.message('复制成功', 1);
      console.log('success');
    },
    fail: function fail(error) {
      console.log(error);
    }
  });
};
util.compareVersion = function (v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};
util.mpShare = function (obj) {
  // console.log(obj,obj.p ? '/' + obj.p : '',)
  return {
    title: obj.t || '进来看看吧！',
    imageUrl: obj.i,
    path: obj.p ? '/' + obj.p : ''
  };
};
util.getIWH = function (v) {
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: v,
      success: function success(res) {
        if (res.errMsg == 'getImageInfo:ok') {
          resolve(res.height);
        } else {
          resolve(res.height);
        }
      }
    });
  });
};
util.getTranslation = function (page, key) {
  return _index.default.t("".concat(page, ".").concat(key));
};
var _default = util;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 39)();
module.exports = runtime;

/***/ }),

/***/ 39:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 41:
/*!***********************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/api.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var platform = '';
platform = 'mini';
var t = '/channelApi/',
  api = {
    platform: platform,
    config: t + 'config',
    login: t + 'wechat/login',
    emaillogin: t + 'emaillogin',
    resetPassword: t + 'resetPassword',
    emailRegister: t + 'emailRegister',
    facebookLogin: t + 'facebookLogin',
    lineLogin: t + 'lineLogin',
    checkLineCode: t + 'checkLineCode',
    profix: t + 'profix',
    wrg: t + 'wechat/register',
    jm: t + 'wechat/decrypt',
    xgyh: t + 'profix/edit',
    wau: t + 'wechat/authorizationUrl',
    sms: t + 'sendSms',
    wcl: t + 'wechat/wechatLogin',
    pay: t + 'pay',
    orderPay: t + 'pay',
    wxjs: t + 'jssdk',
    gxmb: t + 'profix/mobile',
    updateBirthday: t + 'updateBirthday',
    mrmd: t + 'store/default',
    zbtdz: t + 'region/address',
    dplb: t + 'store',
    region: t + 'region',
    goods: t + 'goods',
    xggwc: t + 'cart',
    wdgwc: t + 'cart',
    qkgwc: t + 'cart/clear',
    wdshdz: t + 'address',
    checkout: t + 'cart/checkout',
    wmxd: t + 'order',
    qxdd: t + 'order/close',
    sqtk: t + 'order/refundApply',
    wdxddz: t + 'cart/address',
    cMap: t + 'configFormMap',
    layout: t + 'drag',
    dplbsc: t + 'collect/store',
    storesc: t + 'collect/store',
    wmmbxx: t + 'messageConfig',
    gglb: t + 'ad',
    wwdd: t + 'order/backlog',
    qrsh: t + 'order/complete',
    czgz: t + 'storeValue',
    yemx: t + 'accountLog',
    jfmx: t + 'integralLog',
    lqzx: t + 'coupon',
    mycp: t + 'my/coupon',
    cCode: t + 'coupon/qrcode',
    bzzx: t + 'helpers',
    yhqzz: t + 'couponRegift',
    confirmGift: t + 'couponRegift/confirmGift',
    getGift: t + 'couponRegift/getGift',
    jszz: t + 'couponRegift/receive',
    xkzx: t + 'giftBig',
    wc: t + 'windowCoupon',
    dhm: t + 'exchangeCode/coupon',
    dhb: t + 'exchangeCode/balance',
    cPrice: t + 'cart/price',
    hydj: t + 'vipCard',
    qrCode: t + 'qrcode',
    mdxx: t + 'personPay',
    tsczxq: t + 'inStore/table',
    ingwc: t + 'inStore/cart',
    inqkgwc: t + 'inStore/cart/clear',
    incheck: t + 'inStore/cart/checkout',
    sPrice: t + 'inStore/cart/price',
    ingoods: t + 'inStore/goods',
    inPeople: t + 'inStore/table',
    inOrder: t + 'inStore/order',
    call: t + 'inStore/table/callWaiter',
    insqxdd: t + 'inStore/order/close',
    spss: t + 'goods/search',
    insqtk: t + 'inStore/order/refundApply',
    inspss: t + 'inStore/goods/search',
    inwcdd: t + 'inStore/order/complete',
    jfscfl: t + 'pointsMallClassification',
    jfsplb: t + 'pointsMall',
    pMallOut: t + 'pointsMall/checkout',
    lqhd: t + 'couponActivity',
    ppcheckout: t + 'personPay/checkout',
    wdqdsj: t + 'signIn',
    jfdd: t + 'pointsMallOrder',
    jfsctk: t + 'pointsMallOrder/refundApply',
    jfscqx: t + 'pointsMallOrder/close',
    jfqrsh: t + 'pointsMallOrder/complete',
    smsLogin: t + 'sendSms',
    sendCode: t + 'sendCode',
    sendRegisterCode: t + 'sendRegisterCode',
    mobileLogin: t + 'mobileLogin',
    bindmobile: t + 'bindmobile',
    goodsPackAll: t + 'inStore/cart/packAll',
    pdcz: t + 'queuingUp/table',
    pdxd: t + 'queuingUp',
    couponPack: t + 'couponPack',
    couponPackOrder: t + 'couponPackOrder',
    birthday: t + 'birthday',
    yyxx: t + 'tableReserve',
    yycj: t + 'tableReserveOrder',
    yycheck: t + 'tableReserve/checkout',
    ldx: t + 'oldWithNew/partyA',
    ldxb: t + 'oldWithNew/partyB',
    ldxhb: t + 'oldWithNew/shear',
    ldxjla: t + 'oldWithNew/recordA',
    ldxjlb: t + 'oldWithNew/recordB',
    startOrder: t + 'inStore/order/startOrder',
    gCategory: t + 'goods/category',
    gInCategory: t + 'inStore/goods/category',
    pQuery: t + 'pay/query',
    logout: t + 'logout',
    wordCoupon: t + 'wordCoupon',
    dOrder: t + 'drinks/order',
    dLog: t + 'drinks/log',
    equityCard: t + 'equityCard',
    equityCardOrder: t + 'equityCardOrder',
    myCard: t + 'equityCardOrder/myCard',
    distributionAD: t + 'partner',
    partnerShear: t + 'partner/share',
    partnerOrder: t + 'partner/order',
    partnerDownline: t + 'partner/downline'
  };
var _default = api;
exports.default = _default;

/***/ }),

/***/ 42:
/*!*******************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/wechat-util.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aliAuthCode = aliAuthCode;
exports.chooseAliPay = chooseAliPay;
exports.choosePhoto = choosePhoto;
exports.chooseWXPay = chooseWXPay;
exports.configWX = configWX;
exports.getDw = getDw;
exports.getEwmLink = getEwmLink;
exports.getImgS = getImgS;
exports.getSLink = getSLink;
exports.jsApiList = void 0;
exports.openLocation = openLocation;
exports.registerConfig = registerConfig;
exports.scanCode = scanCode;
exports.uploadImage = uploadImage;
exports.uploadImg = uploadImg;
exports.wxShare = wxShare;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 38));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 40));
var _util = _interopRequireDefault(__webpack_require__(/*! @/common/core/util */ 37));
var _api = _interopRequireDefault(__webpack_require__(/*! @/common/api */ 41));
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 43));
var _siteinfo = _interopRequireDefault(__webpack_require__(/*! @/common/siteinfo */ 30));
// import wx from "@/static/util-js/jweixin-1.4.0.js";
// let wx = require('@/static/util-js/index.js')

var jsApiList = ["chooseWXPay", "getLocation", "updateAppMessageShareData", "updateTimelineShareData", "onMenuShareAppMessage", "onMenuShareTimeline", "openLocation", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "chooseImage", "getLocalImgData", "downloadImage", "uploadImage", "uploadVoice", "downloadVoice", "scanQRCode"];
exports.jsApiList = jsApiList;
var isWxRegistered = false;
function registerConfig(url) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve, reject) {
      var _yield$util$request, data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _util.default.request({
                'url': _api.default.WxSign,
                // method:'POST',
                // ct: 1,
                data: {
                  url: url || encodeURIComponent(url)
                }
              });
            case 3:
              _yield$util$request = _context.sent;
              data = _yield$util$request.data;
              if (data) {
                wx.config({
                  debug: false,
                  appId: data.appId,
                  nonceStr: data.nonceStr,
                  timestamp: data.timestamp,
                  signature: data.signature,
                  jsApiList: jsApiList
                });
                wx.error(function (err) {
                  console.log('config fail:', err);
                });
                wx.ready(function (res) {
                  resolve();
                  console.log('%c wx.ready ', 'color: white; background-color: #95B46A');
                });
              }
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("微信环境出问题了", _context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
function configWX(url) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              resolve();
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}
function getDw(_x5) {
  return _getDw.apply(this, arguments);
}
function _getDw() {
  _getDw = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(option) {
    var timestamp, firstdwtime, gdlocation;
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            timestamp = Date.parse(new Date()), firstdwtime = uni.getStorageSync('firstdwtime'), gdlocation = getApp().globalData.gdlocation;
            return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(resolve, reject) {
                return _regenerator.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (!(option.t == '0' && gdlocation && timestamp < firstdwtime + 300 * 1000)) {
                          _context8.next = 3;
                          break;
                        }
                        resolve(gdlocation);
                        return _context8.abrupt("return");
                      case 3:
                        // util.showLoading('定位中')
                        uni.getLocation({
                          type: 'gcj02' || false,
                          success: function success(res) {
                            resolve(res);
                            _store.default.commit('dndc/setLatLng', {
                              lat: res.latitude,
                              lng: res.longitude
                            });
                            // uni.hideLoading()
                            getApp().globalData.gdlocation = res;
                            uni.setStorageSync('firstdwtime', timestamp);
                            if (true) {
                              console.log('当前位置res', res);
                            }
                          },
                          fail: function fail(err) {
                            console.log('util.getDwfail', err);
                            resolve({
                              latitude: '39.906930',
                              longitude: '116.397570'
                            });
                            _store.default.commit('dndc/setLatLng', {
                              lat: '39.906930',
                              lng: '116.397570'
                            });
                            // uni.hideLoading()
                            getApp().globalData.gdlocation = {
                              latitude: '39.906930',
                              longitude: '116.397570'
                            };
                          }
                        });
                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));
              return function (_x20, _x21) {
                return _ref8.apply(this, arguments);
              };
            }()));
          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getDw.apply(this, arguments);
}
function openLocation(_x6) {
  return _openLocation.apply(this, arguments);
}
function _openLocation() {
  _openLocation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(obj) {
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return configWX();
          case 2:
            wx.openLocation({
              latitude: +obj.lat,
              longitude: +obj.lng,
              name: obj.name,
              address: obj.address,
              scale: 18,
              infoUrl: obj.url
            });
          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _openLocation.apply(this, arguments);
}
function scanCode(_x7) {
  return _scanCode.apply(this, arguments);
}
function _scanCode() {
  _scanCode = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(obj) {
    return _regenerator.default.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            // console.log(obj)
            uni.scanCode({
              success: function success(res) {
                console.log(res);
                if (res && res.result && !res.path) {
                  var r = res.result.split('/s/')[1].split('/')[0],
                    q = res.result.split('/s/')[1].split('/')[3],
                    t = res.result.split('/s/')[1].split('?')[1];
                  console.log(r, q, t);
                  if (r == 'personPay') {
                    obj.go({
                      t: 1,
                      url: "/pages/shop/in/dmf".concat(q)
                    });
                  } else if (r == 'storeGoods') {
                    obj.go({
                      t: 6,
                      url: "/pages/index/goods".concat(q)
                    });
                  } else if (r == 'fastfood') {
                    obj.go({
                      t: 1,
                      url: "/pages/shop/in/goods".concat(q)
                    });
                  } else if (r == 'table') {
                    obj.go({
                      t: 1,
                      url: "/pages/shop/in/goods?".concat(t)
                    });
                  }
                } else {
                  var path = res.path,
                    tnurl = '/' + path;
                  obj.go({
                    t: 1,
                    url: tnurl
                  });
                }
              },
              fail: function fail(res) {
                console.log('fail', res);
              }
            });
          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _scanCode.apply(this, arguments);
}
function chooseWXPay(_x8, _x9) {
  return _chooseWXPay.apply(this, arguments);
}
function _chooseWXPay() {
  _chooseWXPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(config, callback) {
    return _regenerator.default.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            console.log("%c 支付参数", "font-size:40px;color:orange", config);
            _context12.next = 3;
            return configWX();
          case 3:
            return _context12.abrupt("return", new Promise(function (resolve, reject) {
              wx.chooseWXPay({
                timestamp: config.timeStamp,
                nonceStr: config.nonceStr,
                package: config.package,
                signType: config.signType,
                paySign: config.paySign,
                success: function success(res) {
                  // 支付成功后的回调函数
                  resolve(1);
                  callback && callback(res);
                },
                fail: function fail(e) {
                  resolve(2);
                  uni.showModal({
                    title: '微信支付错误',
                    content: JSON.stringify(e)
                  });
                },
                cancel: function cancel() {
                  resolve(3);
                  // 支付取消
                }
              });
            }));
          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _chooseWXPay.apply(this, arguments);
}
function getImgS(src) {
  return src.indexOf('http') > -1 ? src : _store.default.state.system.attachurl + src;
}
function getEwmLink(src) {
  return "".concat(_siteinfo.default.siteroot, "?i=").concat(_siteinfo.default.uniacid, "&link=/").concat(src);
  // return `${siteInfo.siteroot.match(/(\S*)app/)[1]}app/index.php?i=${siteInfo.uniacid}&c=entry&eid=${siteInfo.eid}&link=/${src}`
}

function getSLink(src) {
  if (_api.default.platform == 'weChat') {
    return "".concat(location.href.split('#')[0], "#/").concat(src);
  }
}
function wxShare() {
  return _wxShare.apply(this, arguments);
}
function _wxShare() {
  _wxShare = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
    var config,
      _args14 = arguments;
    return _regenerator.default.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            config = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
            if (!(_api.default.platform == 'weChat')) {
              _context14.next = 5;
              break;
            }
            return _context14.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(resolve, reject) {
                var url, _config$title, title, _config$desc, desc, _config$link, link, _config$imgUrl, imgUrl;
                return _regenerator.default.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.next = 2;
                        return configWX();
                      case 2:
                        url = config.link || location.href;
                        _config$title = config.title, title = _config$title === void 0 ? _store.default.state.system.name || "标题" : _config$title, _config$desc = config.desc, desc = _config$desc === void 0 ? _store.default.state.system.introduction || '进来看看吧' : _config$desc, _config$link = config.link, link = _config$link === void 0 ? url : _config$link, _config$imgUrl = config.imgUrl, imgUrl = _config$imgUrl === void 0 ? getImgS(_store.default.state.system.icon) : _config$imgUrl; // link = link.split('#')[0] + '#' + link.split('#')[1]  https://v3.b-ke.cn/views/mobile/index.html?uniacid=16
                        link = "".concat(_siteinfo.default.siteroot, "/views/mobile/index.html?uniacid=").concat(_siteinfo.default.uniacid, "&link=").concat(encodeURIComponent(link.split('#')[1]));
                        // `${siteInfo.siteroot.match(/(\S*)app/)[1]}app/index.php?i=${siteInfo.uniacid}&c=entry&eid=${siteInfo.eid}&link=${encodeURIComponent(link.split('#')[1])}`
                        console.log("%c wxShare url", "font-size:20px;color:green", url, link, title, _store.default.state.system.introduction);
                        //朋友
                        wx.updateAppMessageShareData({
                          title: title,
                          desc: desc,
                          link: link,
                          imgUrl: getImgS(imgUrl)
                        });
                        // wx.onMenuShareAppMessage()
                        //圈
                        wx.updateTimelineShareData({
                          title: title,
                          link: link,
                          imgUrl: getImgS(imgUrl)
                        });
                        // wx.onMenuShareTimeline()
                      case 8:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));
              return function (_x22, _x23) {
                return _ref9.apply(this, arguments);
              };
            }()));
          case 5:
            return _context14.abrupt("return");
          case 6:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _wxShare.apply(this, arguments);
}
function choosePhoto(option) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(_api.default.platform != 'weChat')) {
                _context4.next = 4;
                break;
              }
              uni.chooseImage({
                count: +option.num || 9,
                sizeType: ['compressed'],
                // sourceType: ['album'],
                success: function success(res) {
                  resolve(res.tempFilePaths);
                  console.log(res.tempFilePaths);
                }
              });
              _context4.next = 7;
              break;
            case 4:
              _context4.next = 6;
              return configWX();
            case 6:
              wx.chooseImage({
                count: +option.num || 9,
                sizeType: ['compressed'],
                sourceType: ['album', 'camera'],
                success: function () {
                  var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            console.log('choosePhoto', res.localIds);
                            resolve(res.localIds);
                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));
                  function success(_x12) {
                    return _success.apply(this, arguments);
                  }
                  return success;
                }()
              });
            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x10, _x11) {
      return _ref3.apply(this, arguments);
    };
  }());
}
function uploadImage(localId) {
  var showTips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return new Promise(function (resolve, reject) {
    wx.uploadImage({
      localId: localId,
      isShowProgressTips: showTips,
      success: function success(res) {
        resolve(res);
      }
    });
  });
}
function uploadImg(_ref4) {
  var files = _ref4.files;
  // const that = this;
  // async function ys(file) {
  // 	console.log("file", file)
  // 	return new Promise((resolve, reject) => {

  // 		if (that.getType(file) == 'string') {
  // 			if (file.indexOf('http') > -1) {
  // 				return resolve({
  // 					type: 'img',
  // 					url: file.substring(that.assetPath.length)
  // 				})
  // 			}
  // 		}

  // 		picCompress({
  // 			file,
  // 			quality: 5,
  // 			async callBack(ret) {
  // 				//console.log("图片压缩成功");
  // 				const res = await requestByUpload(ret)
  // 				return resolve({
  // 					url: res.src,
  // 					type: "img"
  // 				})
  // 			}
  // 		})
  // 	})
  // }
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(resolve, reject) {
      var images;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              images = files.map( /*#__PURE__*/function () {
                var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(item) {
                  var _yield$util$request2, data;
                  return _regenerator.default.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!item.tmp) {
                            _context5.next = 14;
                            break;
                          }
                          if (!(_api.default.platform != 'weChat')) {
                            _context5.next = 7;
                            break;
                          }
                          _context5.next = 4;
                          return wxUploadImg(item.url);
                        case 4:
                          return _context5.abrupt("return", _context5.sent);
                        case 7:
                          _context5.next = 9;
                          return _util.default.request({
                            'url': _api.default.WxUpload,
                            method: 'POST',
                            data: {
                              mediaId: item.url
                            }
                          });
                        case 9:
                          _yield$util$request2 = _context5.sent;
                          data = _yield$util$request2.data;
                          return _context5.abrupt("return", data);
                        case 12:
                          _context5.next = 15;
                          break;
                        case 14:
                          return _context5.abrupt("return", item.url);
                        case 15:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));
                return function (_x15) {
                  return _ref6.apply(this, arguments);
                };
              }());
              _context6.next = 3;
              return Promise.all(images);
            case 3:
              images = _context6.sent;
              return _context6.abrupt("return", resolve(images));
            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return function (_x13, _x14) {
      return _ref5.apply(this, arguments);
    };
  }());
}
function wxUploadImg(file) {
  return new Promise(function (resolve, reject) {
    uni.uploadFile({
      url: _util.default.url(_api.default.sctp),
      filePath: file,
      fileType: 'image',
      name: 'file',
      header: {
        'content-type': 'multipart/form-data',
        "appType": _api.default.platform,
        'uniacid': _siteinfo.default.uniacid,
        'module': 'yb_wm_v3'
      },
      success: function success(res) {
        resolve(res.data);
        // console.log('uploadImage success, res is:', res)
      },

      fail: function fail(err) {
        console.log('uploadImage fail', err);
      }
      // complete(res) {
      // 	console.log('uploadImage complete', res);
      // }
    });
  });
}

function aliAuthCode() {
  console.log('ap', ap, _store.default.state.config.zfbSettingapp_id);
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(resolve, reject) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              ap.getAuthCode({
                appId: _store.default.state.config.zfbSettingapp_id,
                scopes: ['auth_user']
              }, function (res) {
                // ap.alert (JSON.stringify(res))
                resolve(res);
              });
            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function (_x16, _x17) {
      return _ref7.apply(this, arguments);
    };
  }());
}
function chooseAliPay(_x18, _x19) {
  return _chooseAliPay.apply(this, arguments);
}
function _chooseAliPay() {
  _chooseAliPay = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(config, callback) {
    return _regenerator.default.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            console.log("%c ali支付参数", "font-size:40px;color:orange", config);
            return _context15.abrupt("return", new Promise(function (resolve, reject) {
              ap.tradePay({
                tradeNO: config.trade_no,
                success: function success(res) {
                  if (res && res.resultCode == 9000) {
                    resolve(1);
                  } else if (res && res.resultCode == 6001) {
                    resolve(3);
                  } else {
                    uni.showModal({
                      title: '支付错误代码',
                      content: JSON.stringify(res.resultCode)
                    });
                  }
                  callback && callback(res);
                },
                fail: function fail(e) {
                  resolve(2);
                  uni.showModal({
                    title: '支付错误',
                    content: JSON.stringify(e)
                  });
                },
                cancel: function cancel() {
                  resolve(3);
                }
              });
            }));
          case 2:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _chooseAliPay.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 43:
/*!************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/store/index.js ***!
  \************************************************/
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
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 44));
var _util = _interopRequireDefault(__webpack_require__(/*! ../common/core/util */ 37));
var _api = _interopRequireDefault(__webpack_require__(/*! ../common/api */ 41));
var _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 31));
var _wechatUtil = __webpack_require__(/*! @/common/wechat-util.js */ 42);
var _dndc = _interopRequireDefault(__webpack_require__(/*! ./dndc */ 45));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    system: {
      custom: {
        live: '',
        takeOut: '',
        integral: '',
        balance: '',
        informationTitle: '',
        hbfh: '',
        hbmc: '',
        inStore: ''
      },
      powerList: {}
    },
    user: {},
    mobile: uni.getStorageSync('userTel'),
    token: '',
    isLogin: false,
    noLogin: false,
    isIpx: false,
    scarList: {
      out: {
        data: []
      },
      fast: {
        data: []
      },
      ins: {
        data: []
      }
    },
    sjxx: {},
    sjgood: {},
    ingood: {},
    layout: {
      index: {},
      user: {},
      nav: {},
      copywriting: {},
      defaultImg: {},
      firing: {},
      loadingImg: {},
      style: {},
      copyright: {},
      notice: [],
      orderCollect: {},
      goodStyle: {}
    },
    config: {
      hasKp: false,
      storeBasicSetting: {},
      orderSetting: {},
      integralSettingcustomTxt: '',
      growthSettingcustomTxt: '',
      zfbSettingapp_id: '',
      basicSetting: {},
      storageVal: {},
      vipset: {},
      storageset: {},
      integralSetting: {},
      personPayOrderConfig: {},
      inStoreOrderConfig: {},
      birthdayGift: {}
    },
    adList: {
      index: {},
      orderInfo: {},
      user: {}
    }
  },
  mutations: {
    setUser: function setUser(state, data) {
      data.integral = data.integral || 0;
      data.balance = data.balance || 0;
      state.user = data;
      //state.isLogin = true
      state.isLogin = data.id ? true : false;
      //alert(state.isLogin)
      uni.setStorageSync('userId', data.id);
      // console.log('setUsersetUsersetUser', data, state.isLogin)
    },
    setNoLogin: function setNoLogin(state, data) {
      state.noLogin = true;
    },
    setMobile: function setMobile(state, data) {
      uni.setStorageSync('userTel', data);
      state.mobile = data;
    },
    setToken: function setToken(state, data) {
      // console.log('token', data)
      uni.setStorageSync('token', data);
      //

      state.token = data;
    },
    setSystem: function setSystem(state, data) {
      state.system = data;
    },
    setScarList: function setScarList(state, data) {
      // console.log('setScarList', data, state.scarList)
      if (!data.key) {
        state.scarList['out'] = data.data;
      } else {
        state.scarList[data.key] = data.data;
      }
    },
    setInCar: function setInCar(state, data) {
      state.scarList['ins'] = data.data;
    },
    setSjxx: function setSjxx(state, data) {
      state.sjxx = data;
      // uni.setStorageSync('storeId', data.id)
    },
    setGoods: function setGoods(state, _ref) {
      var params = _ref.params,
        data = _ref.data;
      if (params.dType == "ins") {
        state.ingood = data;
      } else {
        state.sjgood = data;
      }
    },
    setLayout: function setLayout(state, _ref2) {
      var params = _ref2.params,
        data = _ref2.data;
      state.layout[params] = data;
      // console.log(params,data)
    },
    setConfig: function setConfig(state, _ref3) {
      var params = _ref3.params,
        data = _ref3.data;
      state.config[params] = data;
    },
    setadList: function setadList(state, _ref4) {
      var params = _ref4.params,
        data = _ref4.data;
      state.adList[params] = data;
    }
  },
  getters: {},
  actions: {
    getSystem: function getSystem(_ref5) {
      var _arguments = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var commit, state, params, res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref5.commit, state = _ref5.state;
                params = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
                // console.log('state', state, params)
                if (!state.system.color || params.get) {
                  res = {};
                  state.isIpx = _util.default.getSb().model.search('iPhone X') != -1 || _util.default.getSb().model.search('iPhone 1') != -1 || _util.default.getSb().model.search('iPhone1') != -1;
                }
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkBindTel: function checkBindTel(_ref6, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, rootState;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref6.commit, rootState = _ref6.rootState;
                return _context2.abrupt("return", new Promise(function (reslove, reject) {
                  if (!rootState.user.userTel) {
                    uni.showModal({
                      title: '提示',
                      content: '请先绑定手机号',
                      confirmText: '前往绑定',
                      cancelText: '暂不绑定',
                      success: function success(res) {
                        if (res.confirm) {
                          uni.navigateTo({
                            url: '/pages/my/login/index'
                          });
                        }
                      }
                    });
                  } else {
                    reslove();
                  }
                }));
              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getLoginInfo: function getLoginInfo(_ref7) {
      var _arguments2 = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var commit, state, params;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref7.commit, state = _ref7.state;
                params = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : {};
                if (!state.user.id) {
                  _context5.next = 6;
                  break;
                }
                return _context5.abrupt("return");
              case 6:
                _context5.next = 8;
                return new Promise( /*#__PURE__*/function () {
                  var _ref8 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(resolve, reject) {
                    var siteInfo;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            siteInfo = getApp().globalData.siteInfo; // util.showLoading()
                            uni.login({
                              success: function () {
                                var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(lres) {
                                  var res, _res$data, resu;
                                  return _regenerator.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                      switch (_context3.prev = _context3.next) {
                                        case 0:
                                          _context3.next = 2;
                                          return _util.default.request({
                                            'url': _api.default.login,
                                            method: 'post',
                                            // mask: 1,
                                            data: {
                                              code: lres.code
                                            }
                                          });
                                        case 2:
                                          res = _context3.sent;
                                          if (!(res.code == 200)) {
                                            _context3.next = 19;
                                            break;
                                          }
                                          if (!(res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.token)) {
                                            _context3.next = 17;
                                            break;
                                          }
                                          if (res.data.session_key) {
                                            getApp().globalData.session_key = res.data.session_key;
                                          }
                                          commit('setToken', res.data.token);
                                          if (!(res.data && res.data.userInfo)) {
                                            _context3.next = 12;
                                            break;
                                          }
                                          commit('setUser', res.data.userInfo);
                                          resolve();
                                          _context3.next = 17;
                                          break;
                                        case 12:
                                          _context3.next = 14;
                                          return _util.default.request({
                                            'url': _api.default.profix,
                                            data: {}
                                          });
                                        case 14:
                                          resu = _context3.sent;
                                          commit('setUser', resu.data);
                                          resolve();
                                        case 17:
                                          _context3.next = 21;
                                          break;
                                        case 19:
                                          reject();
                                          _util.default.modal('小程序秘钥配置');
                                        case 21:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }
                                  }, _callee3);
                                }));
                                function success(_x3) {
                                  return _success.apply(this, arguments);
                                }
                                return success;
                              }(),
                              fail: function fail(err) {
                                console.log('失败', err);
                                if (err.errMsg.indexOf('permission') > -1) {
                                  resolve();
                                }
                                reject(err);
                              }
                            });
                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                  return function (_x, _x2) {
                    return _ref8.apply(this, arguments);
                  };
                }());
              case 8:
                return _context5.abrupt("return", _context5.sent);
              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    refreshUser: function refreshUser(_ref9, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var commit, state, _yield$util$request, data;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref9.commit, state = _ref9.state;
                _context6.next = 3;
                return _util.default.request({
                  'url': params.get ? _api.default.profix : _api.default.xgyh,
                  method: params.get ? 'GET' : 'POST',
                  mask: params.nomask ? 0 : 1,
                  data: params
                });
              case 3:
                _yield$util$request = _context6.sent;
                data = _yield$util$request.data;
                console.log('533', data);
                if (data && data.token) {
                  commit('setToken', data.token);
                  commit('setUser', data.userInfo);
                }
                if (params.now) {
                  data && commit('setUser', data);
                } else {
                  setTimeout(function () {
                    data && commit('setUser', data);
                  }, 200);
                }
                return _context6.abrupt("return", data);
              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    loginBind: function loginBind(_ref10, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref10.commit, state = _ref10.state;
                _context7.next = 3;
                return _util.default.request({
                  'url': _api.default.bind,
                  method: 'POST',
                  mask: 1,
                  data: params
                });
              case 3:
                res = _context7.sent;
                res && commit('setUser', res.data);
                return _context7.abrupt("return", res);
              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    clearMycar: function clearMycar(_ref11, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var dispatch, commit, state, res;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                dispatch = _ref11.dispatch, commit = _ref11.commit, state = _ref11.state;
                _context8.next = 3;
                return _util.default.request({
                  'url': _api.default.qkgwc,
                  method: 'DELETE',
                  mask: 1,
                  data: params
                });
              case 3:
                res = _context8.sent;
                // if (res) {
                // 	dispatch('getMycar', {
                // 		// key: params.key,
                // 		storeId: params.storeId,
                // 	})
                // }
                res && commit('setScarList', {
                  key: params.key,
                  data: {
                    goodsList: [],
                    goodsCount: 0
                  }
                });
              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    getMycar: function getMycar(_ref12, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                commit = _ref12.commit, state = _ref12.state;
                _context9.next = 3;
                return _util.default.request({
                  'url': _api.default.wdgwc,
                  mask: params.mask,
                  data: params
                });
              case 3:
                res = _context9.sent;
                res && commit('setScarList', {
                  key: params.key,
                  data: res.data
                });
                // console.log('index.js,getMycar', params, state.scarList)
              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    supdCar: function supdCar(_ref13, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var dispatch, commit, state, res;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                dispatch = _ref13.dispatch, commit = _ref13.commit, state = _ref13.state;
                _context10.next = 3;
                return _util.default.request({
                  'url': _api.default.xggwc,
                  ct: 1,
                  method: 'POST',
                  // mask: 1,
                  data: params
                });
              case 3:
                res = _context10.sent;
                if (!res) {
                  _context10.next = 7;
                  break;
                }
                commit('setScarList', {
                  key: params.key,
                  data: res.data.cart
                });
                return _context10.abrupt("return", +res.data.count);
              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    getInCar: function getInCar(_ref14, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                commit = _ref14.commit, state = _ref14.state;
                _context11.next = 3;
                return _util.default.request({
                  'url': _api.default.ingwc,
                  mask: params.mask,
                  data: params
                });
              case 3:
                res = _context11.sent;
                res && commit('setInCar', {
                  key: params.key,
                  data: res.data
                });
              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    supInCar: function supInCar(_ref15, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var dispatch, commit, state, res;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                dispatch = _ref15.dispatch, commit = _ref15.commit, state = _ref15.state;
                _context12.next = 3;
                return _util.default.request({
                  'url': _api.default.ingwc,
                  ct: 1,
                  method: 'POST',
                  data: params
                });
              case 3:
                res = _context12.sent;
                if (!res) {
                  _context12.next = 7;
                  break;
                }
                commit('setInCar', {
                  data: res.data.cart
                });
                return _context12.abrupt("return", +res.data.count);
              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    clearIncar: function clearIncar(_ref16, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var dispatch, commit, state, res;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                dispatch = _ref16.dispatch, commit = _ref16.commit, state = _ref16.state;
                _context13.next = 3;
                return _util.default.request({
                  'url': _api.default.inqkgwc,
                  method: 'DELETE',
                  mask: 1,
                  data: params
                });
              case 3:
                res = _context13.sent;
                res && commit('setInCar', {
                  data: {
                    goodsList: [],
                    goodsCount: 0
                  }
                });
              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    getSjxx: function getSjxx(_ref17, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var commit, state, _yield$util$request2, data;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                commit = _ref17.commit, state = _ref17.state;
                _context14.next = 3;
                return _util.default.request({
                  'url': "".concat(_api.default.dplb, "/").concat(params.storeId),
                  data: {
                    lat: params.lat,
                    lng: params.lng
                  }
                });
              case 3:
                _yield$util$request2 = _context14.sent;
                data = _yield$util$request2.data;
                commit('setSjxx', data);
                return _context14.abrupt("return", data);
              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }))();
    },
    getGoods: function getGoods(_ref18, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var commit, state, _yield$util$request3, data;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                commit = _ref18.commit, state = _ref18.state;
                _context15.next = 3;
                return _util.default.request({
                  'url': params.dType == 'ins' ? _api.default.ingoods : _api.default.goods,
                  data: params
                });
              case 3:
                _yield$util$request3 = _context15.sent;
                data = _yield$util$request3.data;
                commit('setGoods', {
                  data: data,
                  params: params
                });
                return _context15.abrupt("return", data);
              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }))();
    },
    getLayout: function getLayout(_ref19) {
      var _arguments3 = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var commit, state, params, k, res, _k;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                commit = _ref19.commit, state = _ref19.state;
                params = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : {
                  page: 'index',
                  id: '1'
                };
                //alert('开始getLayout0')
                state.isIpx = _util.default.getSb().model.search('iPhone X') != -1 || _util.default.getSb().model.search('iPhone 1') != -1 || _util.default.getSb().model.search('iPhone1') != -1;
                _context16.t0 = _regenerator.default.keys(state.layout);
              case 4:
                if ((_context16.t1 = _context16.t0()).done) {
                  _context16.next = 10;
                  break;
                }
                k = _context16.t1.value;
                if (!state.layout[k].isget) {
                  _context16.next = 8;
                  break;
                }
                return _context16.abrupt("return");
              case 8:
                _context16.next = 4;
                break;
              case 10:
                _context16.next = 12;
                return _util.default.request({
                  'url': _api.default.layout,
                  data: params
                });
              case 12:
                res = _context16.sent;
                // console.timeEnd('getLayout')
                if (res) {
                  for (_k in res.data) {
                    commit('setLayout', {
                      params: _k,
                      data: _objectSpread({
                        isget: true
                      }, res.data[_k])
                    });
                  }
                }
              case 14:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }))();
    },
    getAd: function getAd(_ref20, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var commit, state, k, res, _k2;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                commit = _ref20.commit, state = _ref20.state;
                _context17.t0 = _regenerator.default.keys(state.adList);
              case 2:
                if ((_context17.t1 = _context17.t0()).done) {
                  _context17.next = 8;
                  break;
                }
                k = _context17.t1.value;
                if (!(state.adList[k].isget && !params)) {
                  _context17.next = 6;
                  break;
                }
                return _context17.abrupt("return");
              case 6:
                _context17.next = 2;
                break;
              case 8:
                _context17.next = 10;
                return _util.default.request({
                  'url': _api.default.gglb,
                  data: params
                });
              case 10:
                res = _context17.sent;
                if (res) {
                  for (_k2 in res.data) {
                    commit('setadList', {
                      params: _k2,
                      data: _objectSpread({
                        isget: true
                      }, res.data[_k2])
                    });
                  }
                }
              case 12:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }))();
    },
    getConfig: function getConfig(_ref21, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
        var commit, state, _iterator, _step, _k3, _nkey, res, _iterator2, _step2, k, nkey;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                commit = _ref21.commit, state = _ref21.state;
                if (!params.ident) {
                  _context18.next = 26;
                  break;
                }
                _iterator = _createForOfIteratorHelper(params.ident);
                _context18.prev = 3;
                _iterator.s();
              case 5:
                if ((_step = _iterator.n()).done) {
                  _context18.next = 12;
                  break;
                }
                _k3 = _step.value;
                _nkey = _k3.replace(/\./g, "");
                if (!state.config[_nkey].isget) {
                  _context18.next = 10;
                  break;
                }
                return _context18.abrupt("return");
              case 10:
                _context18.next = 5;
                break;
              case 12:
                _context18.next = 17;
                break;
              case 14:
                _context18.prev = 14;
                _context18.t0 = _context18["catch"](3);
                _iterator.e(_context18.t0);
              case 17:
                _context18.prev = 17;
                _iterator.f();
                return _context18.finish(17);
              case 20:
                _context18.next = 22;
                return _util.default.request({
                  'url': _api.default.cMap,
                  method: 'POST',
                  ct: 1,
                  data: {
                    idents: params.ident
                  }
                });
              case 22:
                res = _context18.sent;
                if (res) {
                  _iterator2 = _createForOfIteratorHelper(params.ident);
                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      k = _step2.value;
                      if (k.indexOf('.') > -1) {
                        nkey = k.replace(/\./g, "");
                        commit('setConfig', {
                          params: nkey,
                          data: res.data[k]
                        });
                      } else {
                        commit('setConfig', {
                          params: k,
                          data: _objectSpread({
                            isget: true
                          }, res.data[k])
                        });
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
                _context18.next = 27;
                break;
              case 26:
                commit('setConfig', {
                  params: params.key,
                  data: params.data
                });
              case 27:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[3, 14, 17, 20]]);
      }))();
    },
    checkLineCode: function checkLineCode(_ref22, linecode) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19() {
        var commit, state, _yield$util$request4, data, redirectPath;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                commit = _ref22.commit, state = _ref22.state;
                if (!state.user.id) {
                  _context19.next = 3;
                  break;
                }
                return _context19.abrupt("return");
              case 3:
                console.log('linecode', linecode);
                _context19.next = 6;
                return _util.default.request({
                  'url': _api.default.checkLineCode,
                  method: 'POST',
                  data: {
                    code: linecode
                  }
                });
              case 6:
                _yield$util$request4 = _context19.sent;
                data = _yield$util$request4.data;
                console.log(data);
                redirectPath = uni.getStorageSync('redirectPath') || '/';
                console.log(redirectPath);
                if (data && data.token) {
                  commit('setToken', data.token);
                  commit('setUser', data.userInfo);
                  uni.reLaunch({
                    url: redirectPath
                  });
                }
              case 12:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }))();
    }
  },
  modules: {
    dndc: _dndc.default
  }
});
var _default = store;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 44:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 45:
/*!*****************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/store/dndc/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 38));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 40));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../common/core/util.js */ 37));
var _api = _interopRequireDefault(__webpack_require__(/*! ../../common/api.js */ 41));
var _default = {
  namespaced: true,
  state: {
    smConfig: [],
    addInfo: {},
    cityInfo: {},
    latLng: {},
    fxsInfo: {},
    fxsSq: {}
  },
  mutations: {
    setSmConfig: function setSmConfig(state, data) {
      state.smConfig = data;
    },
    setAddInfo: function setAddInfo(state, data) {
      state.addInfo = data;
      // console.log('dndc setAddInfo', data)
    },
    setCityInfo: function setCityInfo(state, data) {
      state.cityInfo = data;
      // console.log('dndc setCityInfo', data)
    },
    setLatLng: function setLatLng(state, data) {
      state.latLng = data;
      // console.log('dndc setLatLng', data)
    },
    setFsxInfo: function setFsxInfo(state, data) {
      state.fxsInfo = data;
    },
    setFsxSq: function setFsxSq(state, data) {
      state.fxsSq = data;
    }
  },
  actions: {
    getAddInfo: function getAddInfo(_ref, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var commit, state, add, _yield$util$request, data, _add;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, state = _ref.state;
                if (!(!state.addInfo.maddress && !state.addInfo.city)) {
                  _context.next = 17;
                  break;
                }
                add = {
                  maddress: '',
                  city: ''
                };
                if (params.maddress) {
                  _context.next = 12;
                  break;
                }
                _context.next = 6;
                return _util.default.request({
                  'url': _api.default.zbtdz,
                  data: {
                    lat: params.latitude,
                    lng: params.longitude
                  }
                });
              case 6:
                _yield$util$request = _context.sent;
                data = _yield$util$request.data;
                add.maddress = params.address || data.formatted_addresses && data.formatted_addresses.recommend || data.address;
                add.city = data.region;
                _context.next = 14;
                break;
              case 12:
                add.maddress = params.address;
                add.city = params.city;
              case 14:
                commit('setAddInfo', add);
                _context.next = 18;
                break;
              case 17:
                if (params.address || params.city) {
                  _add = {
                    maddress: '',
                    city: ''
                  };
                  _add.maddress = params.address;
                  _add.city = params.city;
                  commit('setAddInfo', _add);
                }
              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSmConfig: function getSmConfig(_ref2, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                if (state.smConfig.length) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 4;
                return _util.default.request({
                  'url': _api.default.wmmbxx,
                  mask: 1
                });
              case 4:
                res = _context2.sent;
                res && commit('setSmConfig', res.data);
                return _context2.abrupt("return");
              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getFxzx: function getFxzx(_ref3, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit, state = _ref3.state;
                _context3.next = 3;
                return _util.default.request({
                  'url': _api.default.cMap,
                  method: 'POST',
                  ct: 1,
                  data: {
                    idents: ['distributor']
                  }
                });
              case 3:
                res = _context3.sent;
                if (res && res.data) {
                  // res.data.createdAt = res.data.createdAt.substring(0, 16)
                  commit('setFsxInfo', res.data.distributor);
                } else {
                  setTimeout(function () {
                    params.that.go({
                      t: 5,
                      url: '/pages/index/my-index'
                    });
                  }, 1500);
                }
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getFxSq: function getFxSq(_ref4, params) {
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var commit, state, res;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref4.commit, state = _ref4.state;
                _context4.next = 3;
                return _util.default.request({
                  'url': _api.default.distributionAD,
                  mask: 1
                });
              case 3:
                res = _context4.sent;
                if (res) {
                  commit('setFsxSq', res.data);
                } else {
                  setTimeout(function () {
                    params.that.go({
                      t: 5,
                      url: '/pages/index/my-index'
                    });
                  }, 1500);
                }
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 48:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 49:
/*!**************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/common.js ***!
  \**************************************************/
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
var _wechatUtil = __webpack_require__(/*! @/common/wechat-util.js */ 42);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var Plugin = Object.create(null);
Plugin.install = function (Vue, options) {
  Vue.mixin({
    data: function data() {
      return {};
    },
    computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapState)({
      user: function user(state) {
        return state.user;
      },
      uId: function uId(state) {
        return state.user.id || '';
      },
      isVip: function isVip(state) {
        return state.user.level > 0;
      },
      isLogin: function isLogin(state) {
        return state.isLogin;
      },
      noLogin: function noLogin(state) {
        return state.noLogin;
      },
      tColor: function tColor(state) {
        return state.layout.style && state.layout.style.color && state.layout.style.color.btnColor || '#B11E23';
      },
      fontColor: function fontColor(state) {
        return state.layout.style && state.layout.style.color && state.layout.style.color.fontColor || '#fff';
      },
      url: function url(state) {
        return state.system.attachurl;
      },
      system: function system(state) {
        return state.system;
      },
      isIpx: function isIpx(state) {
        return state.isIpx;
      },
      sl: function sl(state) {
        return state.system.custom.hbfh;
      },
      dw: function dw(state) {
        return state.system.custom.hbmc;
      },
      basicSetting: function basicSetting(state) {
        return state.config.basicSetting;
      }
    })), (0, _vuex.mapState)('dndc', ['smConfig', 'fxsInfo', 'fxsSq'])), (0, _vuex.mapState)(['sjxx'])), {}, {
      onImgurl: function onImgurl() {
        return getApp().globalData.onImgurl;
      }
    }),
    methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapActions)(["getSystem", "getLoginInfo", "refreshUser", "getLayout", "getAd"])), (0, _vuex.mapActions)('dndc', ['getSmConfig', 'getAddInfo', 'getFxzx', 'getFxSq'])), (0, _vuex.mapMutations)('dndc', ["setCityInfo", 'setAddInfo'])), {}, {
      go: function go(option) {
        switch (option.t) {
          case undefined:
          case 1:
            uni.navigateTo({
              url: option.url
            });
            break;
          case 2:
            uni.redirectTo({
              url: option.url
            });
            break;
          case 6:
            uni.switchTab({
              url: option.url
            });
            break;
          case 3:
            uni.reLaunch({
              url: option.url
            });
            break;
          case 4:
            uni.navigateBack({
              delta: 1
            });
            break;
          case 5:
            if (getCurrentPages().length > 1) {
              uni.navigateBack({
                delta: 1
              });
            } else {
              uni.reLaunch({
                url: option.url
              });
            }
            break;
        }
      },
      getConfigWX: function getConfigWX() {
        return (0, _wechatUtil.configWX)();
      },
      goUrl: function goUrl(option, obj) {
        var _this = this;
        return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          var url, type, i;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!option) {
                    _context.next = 39;
                    break;
                  }
                  type = option.t || '1';
                  _context.t0 = option.params;
                  _context.next = _context.t0 === 'platform' ? 5 : _context.t0 === 'link' ? 21 : _context.t0 === 'appjump' ? 24 : _context.t0 === 'call' ? 27 : _context.t0 === 'product' ? 29 : _context.t0 === 'productCategory' ? 31 : _context.t0 === 'customPage' ? 34 : 36;
                  break;
                case 5:
                  if (!(option.name.id == 'distribution')) {
                    _context.next = 15;
                    break;
                  }
                  _context.next = 8;
                  return _this.getFxzx();
                case 8:
                  if (_this.fxsInfo.switch) {
                    _context.next = 11;
                    break;
                  }
                  _this.util.message('未开启分销商功能', 3);
                  return _context.abrupt("return");
                case 11:
                  _context.next = 13;
                  return _this.getFxSq();
                case 13:
                  if (_this.fxsSq) {
                    i = _this.fxsSq.state;
                    if (i != 1) {
                      _this.util.message(_this.fxsSq.stateFormat, 3);
                    } else if (i == 1) {
                      _this.go({
                        url: '/pages/order/distribution/fxzx'
                      });
                    }
                  } else {
                    _this.go({
                      url: '/pages/order/distribution/sqfx'
                    });
                  }
                  return _context.abrupt("return");
                case 15:
                  url = _this.changeUrl(option);
                  if (url) {
                    _context.next = 18;
                    break;
                  }
                  return _context.abrupt("return");
                case 18:
                  type = '1';
                  if (url.indexOf('/index/') != -1) {
                    type = '4';
                  }
                  // console.log(this.changeUrl(option))
                  return _context.abrupt("break", 36);
                case 21:
                  type = '1';
                  if (option.category.indexOf('http') > -1) {
                    url = '/pages/other/web-view?src=' + encodeURIComponent(JSON.stringify(option.category.substring(0, 1) == 'h' ? option.category : option.category.substring(7)));
                  } else {
                    url = option.category;
                  }
                  return _context.abrupt("break", 36);
                case 24:
                  url = option.name.path;
                  type = '5';
                  return _context.abrupt("break", 36);
                case 27:
                  _this.util.makeTel(option.param.phone);
                  return _context.abrupt("return");
                case 29:
                  url = "/pages/shop/out/goods-dl?gid=".concat(option.name.id, "&storeId=").concat(_this.$store.state.config.storeInfo.id, "&page=index");
                  return _context.abrupt("break", 36);
                case 31:
                  url = '/pages/index/goods';
                  type = '4';
                  return _context.abrupt("break", 36);
                case 34:
                  url = '/pages/order/other/custom?pid=' + option.name.id;
                  return _context.abrupt("break", 36);
                case 36:
                  if (type == '1') {
                    if (url == '/pages/shop/in/dmf') {
                      if (_this.sjxx && _this.sjxx.id) {
                        uni.navigateTo({
                          url: "/pages/shop/in/dmf?storeId=".concat(_this.sjxx.id)
                        });
                      } else {
                        uni.navigateTo({
                          url: '/pages/shop/select/index?page=cashier'
                        });
                      }
                    } else if (url == '/pages/shop/in/goods') {
                      if (_this.sjxx && _this.sjxx.id) {
                        uni.navigateTo({
                          url: "/pages/shop/in/goods?diningType=6&storeId=".concat(_this.sjxx.id)
                        });
                      } else {
                        uni.navigateTo({
                          url: '/pages/shop/select/index?page=fastOrder'
                        });
                      }
                    } else {
                      uni.navigateTo({
                        url: url
                      });
                    }
                  } else if (type == '4') {
                    uni.switchTab({
                      url: url
                    });
                    if (option.name.id == 'takeOutFood' || option.name.id == 'TakeFood') {
                      uni.setStorageSync('xdtype', option.name.id == 'takeOutFood' ? 1 : 2);
                    }
                  } else if (type == '2') {
                    uni.redirectTo({
                      url: url
                    });
                  } else if (type == '3') {
                    uni.reLaunch({
                      url: url
                    });
                  } else if (type == '5') {
                    uni.navigateToMiniProgram({
                      appId: option.name.appId,
                      path: option.name.path,
                      complete: function complete(res) {
                        // console.log(res)
                      }
                    });
                  }
                  _context.next = 39;
                  break;
                case 39:
                  if (true) {
                    console.log(option, url, type);
                  }
                case 40:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      changeUrl: function changeUrl(option) {
        // console.log(option)
        var url = '';
        if (option.params == 'platform') {
          switch (option.name.id) {
            case 'index':
              url = '/pages/index/index';
              break;
            case 'goods':
            case 'TakeFood':
            case 'takeOutFood':
              url = '/pages/index/goods';
              break;
            case 'myOrder':
              url = '/pages/index/order-index';
              break;
            case 'member':
              url = '/pages/index/my-index';
              break;
            case 'myAddress':
              url = '/pages/my/addres/addresses';
              break;
            case 'contactCustomer':
              url = '/pages/my/other/zkf';
              break;
            case 'conceal':
              url = "/pages/my/other/gywm?t='\u534F\u8BAE\u653F\u7B56'&p=1";
              break;
            case 'aboutUs':
              url = '/pages/my/other/gywmtwo';
              break;
            case 'helpCenter':
              url = '/pages/my/other/bzzx';
              break;
            case 'couponCenter':
              if (option.value && option.value.id) {
                url = "/pages/other/coupon/coupondl?couponId=".concat(option.value.id);
              } else {
                url = '/pages/other/coupon/center';
              }
              break;
            case 'rollPackage':
              if (option.value && option.value.id) {
                url = "/pages/other/rollPackage/rolldl?id=".concat(option.value.id);
              }
              break;
            case 'myCoupon':
              url = '/pages/other/coupon/couponList';
              break;
            case 'giftCard':
              url = '/pages/other/giftCard/cardList';
              break;
            case 'balanceRecharge':
              url = '/pages/other/recharge/index';
              break;
            case 'signIndex':
              url = '/pages/my/signin/index';
              break;
            case 'integralShop':
              url = '/pages/my/integral/shop-index';
              break;
            case 'officialLink':
              url = '/pages/other/web-view?src=' + encodeURIComponent(JSON.stringify(this.basicSetting.officialLink));
              break;
            case 'navigation':
              url = '/pages/shop/select/index?page=index';
              // url = `/pages/shop/select/index?page=index&storeId=${this.$store.state.config.storeInfo.id?this.$store.state.config.storeInfo.id:''}`
              break;
            case 'cardIndex':
              url = '/pages/order/vip/wkk';
              break;
            case 'shopSignUp':
              url = "/pages/other/mall/mbaoming?storeId=".concat(this.$store.state.config.storeInfo.id);
              break;
            case 'shopOrder':
              url = "/pages/other/mall/morder-index";
              break;
            case 'vipCode':
              url = "/pages/my/user/mr-code";
              break;
            case 'setPoint':
              url = "/pages/other/setPoint/pointdl";
              break;
            case 'exchange':
              url = "/pages/other/coupon/dhm";
              break;
            case 'cashier':
              url = '/pages/shop/in/dmf';
              break;
            case 'fastOrder':
              url = "/pages/shop/in/goods";
              break;
            case 'queuing':
              url = '/pages/my/lineup/pdqh';
              break;
            case 'reserve':
              url = '/pages/other/reserve/index';
              break;
            case 'oldWithNew':
              url = '/pages/order/invitation/yqyl';
              break;
            case 'wifi':
              url = '/pages/other/wifi';
              break;
            case 'pData':
              url = '/pages/other/chooseAvatar';
              break;
            case 'vipEquity':
              url = '/pages/my/vip/wkk';
              break;
            case 'pwCoupon':
              url = '/pages/other/pwCoupon/index';
              break;
            case 'drinks':
              url = '/pages/order/storage/list';
              break;
            case 'payVip':
              url = '/pages/other/payVip/index';
              break;
            case 'scanOrder':
              (0, _wechatUtil.scanCode)(this);
              return;
          }
        }
        return url;
      },
      requestSM: function requestSM(type) {
        var _this2 = this;
        return new Promise( /*#__PURE__*/function () {
          var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(resolve, reject) {
            var tarr;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.getSmConfig();
                  case 2:
                    tarr = [];
                    if (_this2.smConfig && type) {
                      _this2.smConfig.forEach(function (v, i) {
                        if (type.includes(v.type)) {
                          tarr.push(v.tempId);
                        }
                      });
                    }
                    if (tarr.length) {
                      _context2.next = 7;
                      break;
                    }
                    resolve();
                    return _context2.abrupt("return");
                  case 7:
                    uni.requestSubscribeMessage({
                      tmplIds: tarr,
                      complete: function complete(res) {
                        if (res.errMsg == 'requestSubscribeMessage:ok') {
                          if (JSON.stringify(res).indexOf('reject') > -1) {
                            reject();
                          } else {
                            resolve();
                          }
                        } else {
                          resolve();
                        }
                        // console.log(res, JSON.stringify(res).indexOf('reject'))
                      }
                    });
                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      getSjgd: function getSjgd(v) {
        return parseInt(v * 2 * this.util.getSb().rate); //375px/750rpx=h/(拖拽式400px*2)
      },
      addFwjl: function addFwjl(obj) {
        this.util.request({
          'url': this.api.fwjl,
          method: 'POST',
          data: {
            storeId: obj.storeId,
            moduleName: obj.origin
          }
        });
      },
      qkdw: function qkdw() {
        var _this3 = this;
        return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  getApp().globalData.gdlocation = null;
                  _this3.setAddInfo(null);
                  _this3.setCityInfo({});
                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }))();
      },
      // async getLocInfo() {
      // 	let lc = await getDw({
      // 		t: 0
      // 	})
      // 	await this.getAddInfo(lc)
      // },
      getImgS: function getImgS(src) {
        return src ? src.indexOf('http') > -1 ? src : this.url + src : '';
      },
      checkLogin: function checkLogin() {
        var _this4 = this;
        return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
          var currentPage, currentPath;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (_this4.isLogin) {
                    _context4.next = 14;
                    break;
                  }
                  _context4.prev = 1;
                  currentPage = getCurrentPages().pop();
                  currentPath = "/".concat(currentPage.route).concat(currentPage.options ? '?' + Object.keys(currentPage.options).map(function (key) {
                    return "".concat(key, "=").concat(currentPage.options[key]);
                  }).join('&') : '');
                  console.log(currentPath);
                  uni.setStorageSync('redirectPath', currentPath);
                  // await this.util.modal('请先进行登录');
                  _this4.go({
                    url: '/pages/other/login'
                  });
                  _context4.next = 12;
                  break;
                case 9:
                  _context4.prev = 9;
                  _context4.t0 = _context4["catch"](1);
                  return _context4.abrupt("return", false);
                case 12:
                  _context4.next = 15;
                  break;
                case 14:
                  return _context4.abrupt("return", true);
                case 15:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[1, 9]]);
        }))();
      }
    })
  });
};
var _default = Plugin;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!********************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/facebook-sdk.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
// plugins/facebook-sdk.js
var _default = {
  install: function install(Vue, options) {
    Vue.prototype.$loadFacebookSDK = function () {
      return new Promise(function (resolve, reject) {
        if (window.FB) {
          resolve(window.FB);
          return;
        }
        window.fbAsyncInit = function () {
          FB.init({
            appId: options.appId,
            cookie: true,
            xfbml: true,
            version: 'v20.0'
          });
          resolve(FB);
        };
        (function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            resolve(window.FB);
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
      });
    };
    Vue.prototype.$checkLoginState = function () {
      return new Promise(function (resolve, reject) {
        FB.getLoginStatus(function (response) {
          if (response.status === 'connected') {
            resolve(response.authResponse);
          } else {
            reject('User not authenticated.');
          }
        });
      });
    };
    Vue.prototype.$fetchUserInformation = function () {
      return new Promise(function (resolve, reject) {
        FB.api('/me', function (response) {
          if (response && !response.error) {
            resolve(response);
          } else {
            reject(response.error);
          }
        });
      });
    };
  }
};
exports.default = _default;

/***/ }),

/***/ 57:
/*!***********************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/line-sdk-loader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLineSDK = loadLineSDK;
function loadLineSDK(liffId) {
  return new Promise(function (resolve, reject) {
    if (window.liff) {
      resolve(window.liff);
      return;
    }
    var script = document.createElement('script');
    script.src = "https://static.line-scdn.net/liff/edge/versions/2.22.3/sdk.js";
    script.onload = function () {
      window.liff.init({
        liffId: liffId
      }).then(function () {
        console.log('liff init--');
        resolve(window.liff);
      }).catch(function (err) {
        reject('LIFF Initialization failed: ' + err);
      });
    };
    script.onerror = function () {
      return reject('Failed to load the LIFF SDK script');
    };
    document.head.appendChild(script);
  });
}

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 66:
/*!*******************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/common/util-mixins.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utilMixins = exports.sljz = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 44);
var _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 31));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var sljz = {
  data: function data() {
    return {
      dataList: [],
      bfList: [],
      isget: false,
      mygd: false
    };
  },
  onReachBottom: _utils.default.debounce(function (e) {
    if (!this.mygd && this.isget) {
      this.isget = false;
      this.getList();
    }
    // console.log('onReachBottom')
  }, 300)
};
exports.sljz = sljz;
var utilMixins = {
  computed: _objectSpread({}, (0, _vuex.mapState)({})),
  methods: {
    timeToDate: function timeToDate(num, fmt) {
      return _utils.default.timeToDate(num, fmt);
    },
    dateToTime: function dateToTime(date) {
      return _utils.default.dateToTime(date);
    },
    getSingleImg: function getSingleImg(url) {
      return url.indexOf('http') > -1 ? url : this.url + url;
    },
    snText: function snText(t, n) {
      return t && t.length > n ? t.substring(0, n) + '...' : t;
    },
    blxs: function blxs(v) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return Number(Number(v).toFixed(n));
    },
    payName: function payName(type) {
      var n = '';
      switch (+type) {
        case 1:
          n = "微信支付";
          break;
        case 2:
          n = "支付宝支付";
          break;
        case 3:
          n = "百度支付";
          break;
        case 5:
          n = "余额支付";
          break;
      }
      return n;
    },
    cTR: function cTR(c) {
      return _utils.default.colorToRGB(c);
    },
    cTRld: function cTRld(c, l) {
      return _utils.default.ldColor(c, l);
    }
  }
};
exports.utilMixins = utilMixins;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 727:
/*!***************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/uni-popup/popup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 728));
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom'
};
var _default = {
  data: function data() {
    return {
      config: config
    };
  },
  mixins: [_message.default]
};
exports.default = _default;

/***/ }),

/***/ 728:
/*!*****************************************************************!*\
  !*** H:/work/ybv3前端0126/用户端小程序/components/uni-popup/message.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  created: function created() {
    if (this.type === 'message') {
      // 不显示遮罩
      this.maskShow = false;
      // 获取子组件对象
      this.childrenMsg = null;
    }
  },
  methods: {
    customOpen: function customOpen() {
      if (this.childrenMsg) {
        this.childrenMsg.open();
      }
    },
    customClose: function customClose() {
      if (this.childrenMsg) {
        this.childrenMsg.close();
      }
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map