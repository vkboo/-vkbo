(self["webpackChunk_vkbo_hooks"] = self["webpackChunk_vkbo_hooks"] || []).push([["mf-dep__mfsu-development_mf-va_nanoid_js"],{

/***/ "./.mfsu-development/mf-va_nanoid.js":
/*!*******************************************!*\
  !*** ./.mfsu-development/mf-va_nanoid.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": function() { return /* reexport safe */ nanoid__WEBPACK_IMPORTED_MODULE_0__.customAlphabet; },
/* harmony export */   "customRandom": function() { return /* reexport safe */ nanoid__WEBPACK_IMPORTED_MODULE_0__.customRandom; },
/* harmony export */   "nanoid": function() { return /* reexport safe */ nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid; },
/* harmony export */   "random": function() { return /* reexport safe */ nanoid__WEBPACK_IMPORTED_MODULE_0__.random; },
/* harmony export */   "urlAlphabet": function() { return /* reexport safe */ nanoid__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; }
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");



/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": function() { return /* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet; },
/* harmony export */   "random": function() { return /* binding */ random; },
/* harmony export */   "customRandom": function() { return /* binding */ customRandom; },
/* harmony export */   "customAlphabet": function() { return /* binding */ customAlphabet; },
/* harmony export */   "nanoid": function() { return /* binding */ nanoid; }
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

var random = function random(bytes) {
  return crypto.getRandomValues(new Uint8Array(bytes));
};
var customRandom = function customRandom(alphabet, defaultSize, getRandom) {
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1;
  var step = -~(1.6 * mask * defaultSize / alphabet.length);
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSize;
    var id = '';

    while (true) {
      var bytes = getRandom(step);
      var j = step;

      while (j--) {
        id += alphabet[bytes[j] & mask] || '';
        if (id.length === size) return id;
      }
    }
  };
};
var customAlphabet = function customAlphabet(alphabet) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 21;
  return customRandom(alphabet, size, random);
};
var nanoid = function nanoid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 21;
  return crypto.getRandomValues(new Uint8Array(size)).reduce(function (id, _byte) {
    _byte &= 63;

    if (_byte < 36) {
      id += _byte.toString(36);
    } else if (_byte < 62) {
      id += (_byte - 26).toString(36).toUpperCase();
    } else if (_byte > 62) {
      id += '-';
    } else {
      id += '_';
    }

    return id;
  }, '');
};

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": function() { return /* binding */ urlAlphabet; }
/* harmony export */ });
var urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

/***/ })

}]);