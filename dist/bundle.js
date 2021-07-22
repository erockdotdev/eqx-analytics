/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dead-simple-console-colors/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/dead-simple-console-colors/index.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("const ConsoleColors = {\n    blue: \"\\x1b[36m%s\\x1b[0m\",\n    red: \"\\x1b[31m%s\\x1b[0m\",\n    green: \"\\x1b[32m%s\\x1b[0m\",\n    yellow: \"\\x1b[33m%s\\x1b[0m\",\n  };\n  const Console = {\n    info: (...message) => {\n      return console.log(ConsoleColors.blue, ...message);\n    },\n    success: (...message) => {\n      console.log(ConsoleColors.green, ...message);\n    },\n    warn: (...message) => {\n      console.log(ConsoleColors.yellow, ...message);\n    },\n    error: (...message) => {\n      console.error(ConsoleColors.red, ...message);\n    },\n  };\n  \n  module.exports = Console;\n  \n\n//# sourceURL=webpack://eqx-analytics/./node_modules/dead-simple-console-colors/index.js?");

/***/ }),

/***/ "./src/analytics-controller/index.ts":
/*!*******************************************!*\
  !*** ./src/analytics-controller/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _browserStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../browserStorage */ \"./src/browserStorage/index.ts\");\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/constants */ \"./src/utilities/constants.ts\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ \"./src/utilities/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\nvar hasSupport = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.hasLocalStorageSupport)();\nvar browserStorage = (0,_browserStorage__WEBPACK_IMPORTED_MODULE_0__.default)(hasSupport);\n/**\n * Page Data Functions\n */\nvar getPageData = function () {\n    var pageData = browserStorage.getItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.pageData);\n    return pageData;\n};\nvar setPageData = function (pageData) {\n    // const isValidObject = checkIfValidPageObject(pageData);\n    // if (!isValidObject) {\n    //   return UNABLE_TO_SET_ITEM;\n    // }\n    browserStorage.setItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.pageData, pageData);\n    return getPageData();\n};\nvar removePageData = function () {\n    browserStorage.removeItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.pageData);\n    return getPageData();\n};\n/**\n * User Data Functions\n */\nvar getUserData = function () {\n    var retrievedItem = browserStorage.getItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.userData);\n    return retrievedItem;\n};\nvar setUserData = function (userData) {\n    // const isValidObject = checkIfValidUserObject(userData);\n    // if (!isValidObject) return UNABLE_TO_SET_ITEM ;\n    browserStorage.setItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.userData, userData);\n    return getUserData();\n};\nvar removeUserData = function () {\n    browserStorage.removeItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.userData);\n    return getUserData();\n};\n/**\n * Event Data Functions\n */\nvar getEventData = function () {\n    var userData = browserStorage.getItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.userData);\n    var pageData = browserStorage.getItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.pageData);\n    var retrievedItem = browserStorage.getItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.eventData);\n    return __assign(__assign(__assign({}, userData), pageData), retrievedItem);\n};\nvar setEventData = function (eventData) {\n    var item = __assign(__assign({}, eventData), { timestamp: _utilities__WEBPACK_IMPORTED_MODULE_2__.timestamp });\n    browserStorage.setItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.eventData, item);\n    return getEventData();\n};\nvar removeEventData = function () {\n    browserStorage.removeItem(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_DATA_KEYS.eventData);\n    return getEventData();\n};\n/**\n * event - get pageData appData, userData, return with event data\n */\nvar useAnalytics = {\n    page: {\n        get: getPageData,\n        set: setPageData,\n        remove: removePageData,\n    },\n    user: {\n        get: getUserData,\n        set: setUserData,\n        remove: removeUserData,\n    },\n    event: {\n        get: getEventData,\n        set: setEventData,\n        remove: removeEventData,\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAnalytics);\n\n\n//# sourceURL=webpack://eqx-analytics/./src/analytics-controller/index.ts?");

/***/ }),

/***/ "./src/browserStorage/browser-storage-utilities.ts":
/*!*********************************************************!*\
  !*** ./src/browserStorage/browser-storage-utilities.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseValue\": () => (/* binding */ parseValue)\n/* harmony export */ });\nvar parseValue = function (input) {\n    var value;\n    try {\n        value = JSON.parse(input);\n        if (typeof value === \"undefined\") {\n            value = input;\n        }\n        if (value === \"true\") {\n            value = true;\n        }\n        if (value === \"false\") {\n            value = false;\n        }\n        if (parseFloat(value) === value && typeof value !== \"object\") {\n            value = parseFloat(value);\n        }\n    }\n    catch (e) {\n        value = input;\n    }\n    return value;\n};\n\n\n//# sourceURL=webpack://eqx-analytics/./src/browserStorage/browser-storage-utilities.ts?");

/***/ }),

/***/ "./src/browserStorage/index.ts":
/*!*************************************!*\
  !*** ./src/browserStorage/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dead-simple-console-colors */ \"./node_modules/dead-simple-console-colors/index.js\");\n/* harmony import */ var dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _browser_storage_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-storage-utilities */ \"./src/browserStorage/browser-storage-utilities.ts\");\n/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/constants */ \"./src/utilities/constants.ts\");\n\n\n\n/**\n * If there is no browser storage (rendering first on server side)\n * return null functions to avoid errors on FE.\n * Also set a try/catch to log errors once storage is available\n */\nvar useBrowserStorage = function (hasSupport) {\n    if (!hasSupport) {\n        dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0___default().error(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR.NO_BROWSER_STORAGE);\n        return {\n            getItem: function () { return null; },\n            setItem: function () { return null; },\n            removeItem: function () { return null; },\n        };\n    }\n    try {\n        var storage_1 = window[_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.STORAGE_TYPE];\n        var getItem = function (key) {\n            var value = storage_1.getItem(key);\n            if (value) {\n                return (0,_browser_storage_utilities__WEBPACK_IMPORTED_MODULE_1__.parseValue)(value);\n            }\n            throw _utilities_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR.UNABLE_TO_RETRIEVE_ITEM;\n        };\n        var setItem = function (key, value) {\n            storage_1.setItem(key, JSON.stringify(value));\n        };\n        var removeItem = function (key) {\n            storage_1.removeItem(key);\n        };\n        return {\n            getItem: getItem,\n            setItem: setItem,\n            removeItem: removeItem,\n        };\n    }\n    catch (error) {\n        console.log(\"Error:\", JSON.stringify(error));\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBrowserStorage);\n\n\n//# sourceURL=webpack://eqx-analytics/./src/browserStorage/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dead-simple-console-colors */ \"./node_modules/dead-simple-console-colors/index.js\");\n/* harmony import */ var dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _analytics_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics-controller */ \"./src/analytics-controller/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\ndead_simple_console_colors__WEBPACK_IMPORTED_MODULE_0___default().info(\"[EQX-ANALYTICS] is running\");\nconsole.log(\"[EQX-ANALYTICS]: useAnalytics\", _analytics_controller__WEBPACK_IMPORTED_MODULE_1__.default);\nmodule.exports = { useAnalytics: _analytics_controller__WEBPACK_IMPORTED_MODULE_1__.default };\n\n\n//# sourceURL=webpack://eqx-analytics/./src/index.ts?");

/***/ }),

/***/ "./src/utilities/constants.ts":
/*!************************************!*\
  !*** ./src/utilities/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STORAGE_TYPE\": () => (/* binding */ STORAGE_TYPE),\n/* harmony export */   \"ANALYTICS_DATA_KEYS\": () => (/* binding */ ANALYTICS_DATA_KEYS),\n/* harmony export */   \"ERROR\": () => (/* binding */ ERROR)\n/* harmony export */ });\nvar STORAGE_TYPE = \"localStorage\";\nvar ANALYTICS_DATA_KEYS = {\n    pageData: \"PAGE_DATA\",\n    userData: \"USER_DATA\",\n    eventData: \"EVENT_DATA\",\n};\nvar ERROR = {\n    NO_BROWSER_STORAGE: { error: \"Error: No browser storage is available\" },\n    UNABLE_TO_RETRIEVE_ITEM: { error: \"Error: Unable to retrieve item\" },\n    UNABLE_TO_SET_ITEM_KEY_ERROR: { error: \"Error: Unable to set item\" },\n    UNABLE_TO_SET_ITEM: { error: \"Error: Incorrect object keys - please verify structure. Unable to set item\" },\n};\n\n\n//# sourceURL=webpack://eqx-analytics/./src/utilities/constants.ts?");

/***/ }),

/***/ "./src/utilities/index.ts":
/*!********************************!*\
  !*** ./src/utilities/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timestamp\": () => (/* binding */ timestamp),\n/* harmony export */   \"compareKeys\": () => (/* binding */ compareKeys),\n/* harmony export */   \"hasLocalStorageSupport\": () => (/* binding */ hasLocalStorageSupport)\n/* harmony export */ });\nvar timestamp = Date.now();\nvar compareKeys = function (a, b) {\n    var aKeys = Object.keys(a).sort();\n    var bKeys = Object.keys(b).sort();\n    return JSON.stringify(aKeys) === JSON.stringify(bKeys);\n};\nvar hasLocalStorageSupport = function () {\n    try {\n        if (typeof window === \"undefined\") {\n            return false;\n        }\n        if (typeof localStorage === \"undefined\") {\n            return false;\n        }\n    }\n    catch (e) {\n        return false;\n    }\n    return true;\n};\n\n\n//# sourceURL=webpack://eqx-analytics/./src/utilities/index.ts?");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;