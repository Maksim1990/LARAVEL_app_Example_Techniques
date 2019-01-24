/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ "./resources/js/route.js");

var url = Object(_route__WEBPACK_IMPORTED_MODULE_0__["default"])('test', [34]);
console.log(url);

/***/ }),

/***/ "./resources/js/route.js":
/*!*******************************!*\
  !*** ./resources/js/route.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var routes = __webpack_require__(/*! ./routes.json */ "./resources/js/routes.json"); // route('home',['1'])


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var args = Array.prototype.slice.call(arguments);
  var name = args.shift();
  var errMessage = 'Error. Undefined route name';
  var arrURLReplacements = ['http://', 'https://'];

  if (routes[name] === undefined) {
    console.log(errMessage);
  } else {
    var strCurrentLocation = window.location.href;
    var strDefaultHttp = arrURLReplacements[0];

    for (var i = 0; i < arrURLReplacements.length; i++) {
      if (strCurrentLocation.search(arrURLReplacements[i]) >= 0) {
        strCurrentLocation = strCurrentLocation.replace(arrURLReplacements[i], "");
        strDefaultHttp = arrURLReplacements[i];
      }
    }

    var arrBaseUrl = strCurrentLocation.split('/'); //-- Check if URL format is correct and build resulted URL for JS

    if (arrBaseUrl.length > 1) {
      return strDefaultHttp + arrBaseUrl[0] + '/' + arrBaseUrl[1] + '/' + routes[name].split('/').map(function (str) {
        return str[0] == '{' ? args.shift() : str;
      }).join('/');
    } else {
      console.log(errMessage);
    }
  }
});

/***/ }),

/***/ "./resources/js/routes.json":
/*!**********************************!*\
  !*** ./resources/js/routes.json ***!
  \**********************************/
/*! exports provided: , alpha, beta, test, default */
/***/ (function(module) {

module.exports = {"":"/","alpha":"alpha","beta":"beta","test":"login/{id}"};

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/custom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer2\OSPanel\domains\laraPHPUnit.local\resources\js\custom.js */"./resources/js/custom.js");


/***/ })

/******/ });