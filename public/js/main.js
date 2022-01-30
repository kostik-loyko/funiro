/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_header_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/header-nav.js */ \"./src/js/module/header-nav.js\");\n\r\n\r\n(0,_module_header_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/header-nav.js":
/*!*************************************!*\
  !*** ./src/js/module/header-nav.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n\r\n   let isMobile = {\r\n      Android: () => {\r\n         return navigator.userAgent.match(/Android/i);\r\n      },\r\n      BlackBerry: () => {\r\n         return navigator.userAgent.match(/BlackBerry/i);\r\n      },\r\n      iOS: () => {\r\n         return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n      },\r\n      Opera: () => {\r\n         return navigator.userAgent.match(/Opera Mini/i);\r\n      },\r\n      Windows: () => {\r\n         return navigator.userAgent.match(/IEMobile/i);\r\n      },\r\n      any: () => {\r\n         return (\r\n            isMobile.Android()\r\n            || isMobile.BlackBerry()\r\n            || isMobile.iOS()\r\n            || isMobile.Opera()\r\n            || isMobile.Windows()\r\n         );\r\n      }\r\n   };\r\n\r\n   window.onload = () => {\r\n      document.addEventListener(\"click\", documentActions);\r\n\r\n      function documentActions(e) {\r\n         const targetElevent = e.target;\r\n         if (window.innerWidth > 768 && isMobile.any()) {\r\n            if (targetElevent.classList.contains(\"icon-arrow\")) {\r\n               targetElevent.closest(\".nav__item\").classList.toggle(\"hover\");\r\n            }\r\n            if (!targetElevent.closest(\".nav__item\") && document.querySelectorAll(\".nav__item.hover\").length > 0) {\r\n               document.querySelectorAll(\".nav__item.hover\").forEach((item) => {\r\n                  item.classList.remove(\"hover\");\r\n               })\r\n            }\r\n         }\r\n         if (targetElevent.classList.contains(\"search-form__icon\")) {\r\n            document.querySelector(\".search-form\").classList.toggle(\"active\");\r\n         } else if (!targetElevent.closest(\".search-form\") && document.querySelector(\".search-form.active\")) {\r\n            document.querySelector(\".search-form\").classList.remove(\"active\");\r\n         }\r\n      }\r\n   }\r\n});\r\n\n\n//# sourceURL=webpack://start/./src/js/module/header-nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;