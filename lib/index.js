(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["better-hsv"] = factory();
	else
		root["better-hsv"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/*
	 * @Project ..
	 * @author zongquan.hzq
	 * @description ..
	 */

	/*
	 * @param hue 色度，0~360
	 * @param saturation 饱和度， 0~1小数
	 * @param value 明度 0~1小数
	 * @output rgb数组
	 */

	var repeat = function repeat(val, num) {
	  var res = [];

	  for (var i = 0; i < num; ++i) {
	    res[i] = val;
	  }

	  return res;
	};

	var produceOrder = function produceOrder(hue, saturation, value) {
	  var max = 255 * value;
	  var min = max * (1 - saturation);
	  var midK = 1 - Math.abs((hue % 120 - 60) / 60);
	  var mid = min + midK * (max - min);

	  return [max, mid, min];
	};

	var rgb2str = function rgb2str() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return ['#'].concat(_toConsumableArray(args.map(function (v) {
	    return parseInt(v, 10).toString(16);
	  }))).join('');
	};

	var _hsv2rgb = function _hsv2rgb(hue, saturation, value) {
	  var _Math = Math;
	  var round = _Math.round;

	  var side = parseInt(hue % 360 / 60);

	  if (!saturation) {
	    return repeat(value, 3).map(round);
	  }

	  var indices = [[0, 1, 2], [1, 0, 2], [2, 0, 1], [2, 1, 0], [1, 2, 0], [0, 2, 1]][side];
	  var vals = produceOrder(hue, saturation, value);

	  return rgb2str.apply(undefined, _toConsumableArray(repeat({}, 3).map(function (o, i) {
	    return vals[indices[i]];
	  })));
	};

	var hypot = function hypot() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  return Math.sqrt(args.map(function (v) {
	    return v * v;
	  }).reduce(function (res, curr) {
	    return res + curr;
	  }));
	};

	var hsv2rgb = function hsv2rgb(hue, saturation, value) {
	  var _produceOrder = produceOrder(hue, saturation, value);

	  var _produceOrder2 = _slicedToArray(_produceOrder, 3);

	  var max = _produceOrder2[0];
	  var mid = _produceOrder2[1];
	  var min = _produceOrder2[2];

	  var newValue = hypot(max, min, min) / hypot(max, min, mid) * value;

	  return _hsv2rgb(hue, saturation, newValue);
	};

	var API = {
	  hsv2rgb: hsv2rgb,
	  _hsv2rgb: _hsv2rgb,
	  rgb2str: rgb2str
	};

	exports.default = API;

/***/ }
/******/ ])
});
;