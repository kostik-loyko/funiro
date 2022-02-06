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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_header_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/header-nav.js */ \"./src/js/module/header-nav.js\");\n/* harmony import */ var _module_spollers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/spollers.js */ \"./src/js/module/spollers.js\");\n/* harmony import */ var _module_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/burger.js */ \"./src/js/module/burger.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_module_header_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_module_spollers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_module_burger_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/burger.js":
/*!*********************************!*\
  !*** ./src/js/module/burger.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n   const burger = document.querySelector(\".icon-menu\");\r\n   burger.addEventListener(\"click\", () => {\r\n      burger.classList.toggle(\"active\");\r\n      document.querySelector(\".header__nav\").classList.toggle(\"active\");\r\n   })\r\n});\n\n//# sourceURL=webpack://start/./src/js/module/burger.js?");

/***/ }),

/***/ "./src/js/module/header-nav.js":
/*!*************************************!*\
  !*** ./src/js/module/header-nav.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n\r\n   let isMobile = {\r\n      Android: () => {\r\n         return navigator.userAgent.match(/Android/i);\r\n      },\r\n      BlackBerry: () => {\r\n         return navigator.userAgent.match(/BlackBerry/i);\r\n      },\r\n      iOS: () => {\r\n         return navigator.userAgent.match(/iPhone|iPad|iPod/i);\r\n      },\r\n      Opera: () => {\r\n         return navigator.userAgent.match(/Opera Mini/i);\r\n      },\r\n      Windows: () => {\r\n         return navigator.userAgent.match(/IEMobile/i);\r\n      },\r\n      any: () => {\r\n         return (\r\n            isMobile.Android()\r\n            || isMobile.BlackBerry()\r\n            || isMobile.iOS()\r\n            || isMobile.Opera()\r\n            || isMobile.Windows()\r\n         );\r\n      }\r\n   };\r\n\r\n   window.onload = () => {\r\n      document.addEventListener(\"click\", documentActions);\r\n\r\n      function documentActions(e) {\r\n         const targetElevent = e.target;\r\n         if (window.innerWidth > 768 && isMobile.any()) {\r\n            if (targetElevent.classList.contains(\"icon-arrow\")) {\r\n               targetElevent.closest(\".nav__item\").classList.toggle(\"hover\");\r\n            }\r\n            if (!targetElevent.closest(\".nav__item\") && document.querySelectorAll(\".nav__item.hover\").length > 0) {\r\n               document.querySelectorAll(\".nav__item.hover\").forEach((item) => {\r\n                  item.classList.remove(\"hover\");\r\n               })\r\n            }\r\n         }\r\n         if (targetElevent.classList.contains(\"search-form__icon\")) {\r\n            document.querySelector(\".search-form\").classList.toggle(\"active\");\r\n         } else if (!targetElevent.closest(\".search-form\") && document.querySelector(\".search-form.active\")) {\r\n            document.querySelector(\".search-form\").classList.remove(\"active\");\r\n         }\r\n      }\r\n   }\r\n});\r\n\n\n//# sourceURL=webpack://start/./src/js/module/header-nav.js?");

/***/ }),

/***/ "./src/js/module/spollers.js":
/*!***********************************!*\
  !*** ./src/js/module/spollers.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n   const spollersArray = document.querySelectorAll(\"[data-spollers]\");\r\n   if (spollersArray.length > 0) {\r\n      // получение обычных споллеров\r\n      const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {\r\n         return !item.dataset.spollers.split(\",\")[0]\r\n      });\r\n      // инициализация обычных споллеров\r\n      if (spollersRegular.length > 0) {\r\n         initSpollers(spollersRegular);\r\n      };\r\n      // получение спойлеров с медиа запросами\r\n      const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {\r\n         return item.dataset.spollers.split(\",\")[0]\r\n      });\r\n      // инициализация спойлеров с медиа запросами\r\n      if (spollersMedia.length > 0) {\r\n         const breakpointsArray = [];\r\n         spollersMedia.forEach(item => {\r\n            const params = item.dataset.spollers;\r\n            const breakpoint = {};\r\n            const paramsArray = params.split(\",\");\r\n            breakpoint.value = paramsArray[0];\r\n            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : \"max\";\r\n            breakpoint.item = item;\r\n            breakpointsArray.push(breakpoint);\r\n         })\r\n         // получаем уникальные брейкпоинты\r\n         let mediaQueries = breakpointsArray.map(function (item) {\r\n            return \"(\" + item.type + \"-width: \" + item.value + \"px),\" + item.value + \",\" + item.type;\r\n         });\r\n         mediaQueries = mediaQueries.filter(function (item, index, self) {\r\n            return self.indexOf(item) === index\r\n         });\r\n         // работаем с каждым брйкпоинтом\r\n         mediaQueries.forEach(breakpoint => {\r\n            const paramsArray = breakpoint.split(\",\");\r\n            const mediaBreakpoint = paramsArray[1];\r\n            const mediaType = paramsArray[2];\r\n            const matchMedia = window.matchMedia(paramsArray[0]);\r\n            // объеткы с нужными условиями\r\n            const spollersArray = breakpointsArray.filter(function (item) {\r\n               if (item.value === mediaBreakpoint && item.type === mediaType) {\r\n                  return true\r\n               }\r\n            });\r\n            // событие\r\n            matchMedia.addListener(function () {\r\n               initSpollers(spollersArray, matchMedia);\r\n            });\r\n            initSpollers(spollersArray, matchMedia);\r\n         });\r\n      }\r\n      // Инициализация\r\n      function initSpollers(spollersArray, matchMedia = false) {\r\n         spollersArray.forEach(spollersBlock => {\r\n            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n            if (matchMedia.matches || !matchMedia) {\r\n               spollersBlock.classList.add(\"init\");\r\n               initSpollerBody(spollersBlock);\r\n               spollersBlock.addEventListener(\"click\", setSpollerAction);\r\n            } else {\r\n               spollersBlock.classList.remove(\"init\");\r\n               initSpollerBody(spollersBlock, false);\r\n               spollersBlock.removeEventListener(\"click\", setSpollerAction);\r\n            }\r\n         });\r\n      }\r\n      // работа с контентом\r\n      function initSpollerBody(spollersBlock, hideSpollerBody = true) {\r\n         const spollerTitles = spollersBlock.querySelectorAll(\"[data-spoller]\");\r\n         if (spollerTitles.length > 0) {\r\n            spollerTitles.forEach(spollerTitle => {\r\n               if (hideSpollerBody) {\r\n                  spollerTitle.removeAttribute(\"tabindex\");\r\n                  if (!spollerTitle.classList.contains(\"active\")) {\r\n                     spollerTitle.nextElementSibling.hidden = true;\r\n                  }\r\n               } else {\r\n                  spollerTitle.setAttribute(\"tabindex\", \"-1\");\r\n                  spollerTitle.nextElementSibling.hidden = false;\r\n               }\r\n            });\r\n         }\r\n      }\r\n      function setSpollerAction(e) {\r\n         const el = e.target;\r\n         if (el.hasAttribute(\"data-spoller\") || el.closest(\"[data-spoller]\")) {\r\n            const spollerTitle = el.hasAttribute(\"data-spoller\") ? el : el.closest(\"[data-spoller]\");\r\n            const spollersBlock = spollerTitle.closest(\"[data-spollers]\");\r\n            const oneSpoller = spollersBlock.hasAttribute(\"data-one-spoller\") ? true : false;\r\n            if (!spollersBlock.querySelectorAll(\"slide\").length) {\r\n               if (oneSpoller && !spollerTitle.classList.contains(\"active\")) {\r\n                  hideSpollersBody(spollersBlock);\r\n               }\r\n               spollerTitle.classList.toggle(\"active\");\r\n               slideToggle(spollerTitle.nextElementSibling, 500);\r\n            }\r\n            e.preventDefault();\r\n         }\r\n      }\r\n      function hideSpollersBody(spollersBlock) {\r\n         const spollerActiveTitle = spollersBlock.querySelector(\"[data-spoller].active\");\r\n         if (spollerActiveTitle) {\r\n            spollerActiveTitle.classList.remove(\"active\");\r\n            slideUp(spollerActiveTitle.nextElementSibling, 500);\r\n         }\r\n      }\r\n   }\r\n\r\n   // SlideToggle\r\n   let slideUp = (target, duration = 500) => {\r\n      if (!target.classList.contains(\"slide\")) {\r\n         target.classList.add(\"slide\");\r\n         target.style.transitionProperty = 'height, margin, padding';\r\n         target.style.transitionDuration = duration + 'ms';\r\n         target.style.height = target.offsetHeight + 'px';\r\n         target.offsetHeight;\r\n         target.style.overflow = 'hidden';\r\n         target.style.height = 0;\r\n         target.style.paddingTop = 0;\r\n         target.style.paddingBottom = 0;\r\n         target.style.marginTop = 0;\r\n         target.style.marginBottom = 0;\r\n         window.setTimeout(() => {\r\n            target.hidden = true;\r\n            target.style.removeProperty('height');\r\n            target.style.removeProperty('padding-top');\r\n            target.style.removeProperty('padding-bottom');\r\n            target.style.removeProperty('margin-top');\r\n            target.style.removeProperty('margin-bottom');\r\n            target.style.removeProperty('overflow');\r\n            target.style.removeProperty('transition-duration');\r\n            target.style.removeProperty('transition-property');\r\n            target.classList.remove(\"slide\");\r\n         }, duration);\r\n      }\r\n   }\r\n   let slideDown = (target, duration = 500) => {\r\n      if (!target.classList.contains(\"slide\")) {\r\n         target.classList.add(\"slide\");\r\n         if (target.hidden) {\r\n            target.hidden = false;\r\n         }\r\n         let height = target.offsetHeight;\r\n         target.style.overflow = 'hidden';\r\n         target.style.height = 0;\r\n         target.style.paddingTop = 0;\r\n         target.style.paddingBottom = 0;\r\n         target.style.marginTop = 0;\r\n         target.style.marginBottom = 0;\r\n         target.offsetHeight;\r\n         target.style.transitionProperty = \"height, margin, padding\";\r\n         target.style.transitionDuration = duration + 'ms';\r\n         target.style.height = height + 'px';\r\n         target.style.removeProperty('padding-top');\r\n         target.style.removeProperty('padding-bottom');\r\n         target.style.removeProperty('margin-top');\r\n         target.style.removeProperty('margin-bottom');\r\n         window.setTimeout(() => {\r\n            target.style.removeProperty('height');\r\n            target.style.removeProperty('overflow');\r\n            target.style.removeProperty('transition-duration');\r\n            target.style.removeProperty('transition-property');\r\n            target.classList.remove(\"slide\");\r\n         }, duration);\r\n      }\r\n   }\r\n   let slideToggle = (target, duration = 500) => {\r\n      if (target.hidden) {\r\n         return slideDown(target, duration);\r\n      } else {\r\n         return slideUp(target, duration);\r\n      }\r\n   }\r\n});\n\n//# sourceURL=webpack://start/./src/js/module/spollers.js?");

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