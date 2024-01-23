/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FrontMonitorSdk"] = factory();
	else
		root["FrontMonitorSdk"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/actionTracker.js":
/*!*************************************!*\
  !*** ./src/common/actionTracker.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionTrackerReport: () => (/* binding */ actionTrackerReport),\n/* harmony export */   autoActionTrackerReport: () => (/* binding */ autoActionTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/common/utils.js\");\n\n\n\n// 手动上报\nvar actionTrackerReport = function actionTrackerReport(actionType, data) {\n  (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('action', {\n    actionType: actionType,\n    data: data\n  });\n};\n\n// 自动上报\nvar autoActionTrackerReport = function autoActionTrackerReport() {\n  window.addEventListener('click', function (e) {\n    var clickedDom = e.target;\n    // 获取自动上报标识内容\n    var target = clickedDom === null || clickedDom === void 0 ? void 0 : clickedDom.getAttribute('data-target');\n    var no = clickedDom === null || clickedDom === void 0 ? void 0 : clickedDom.getAttribute('data-no');\n    // 主动上报设置，避免重复\n    if (no) return;\n    if (target) {\n      (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('action', {\n        actionType: 'click',\n        data: target\n      });\n    } else {\n      var path = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getPath)(clickedDom);\n      (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('action', {\n        actionType: 'click',\n        data: path\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/actionTracker.js?");

/***/ }),

/***/ "./src/common/blankTracker.js":
/*!************************************!*\
  !*** ./src/common/blankTracker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   blankTrackerReport: () => (/* binding */ blankTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n\n\n// 白屏监控\nfunction blankTrackerReport() {\n  var rootElements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var wrapperElements = [\"html\", \"body\"].concat(rootElements);\n  var emptyPoints = 0;\n  function getSelector(element) {\n    var id = element.id,\n      className = element.className,\n      nodeName = element.nodeName;\n    if (id) {\n      return \"#\" + id;\n    } else if (className) {\n      // 过滤空白符 + 拼接\n      return \".\" + className.split(\" \").filter(function (item) {\n        return !!item;\n      }).join(\".\");\n    } else {\n      return nodeName.toLowerCase();\n    }\n  }\n  function isWrapper(element) {\n    var selector = getSelector(element);\n    if (wrapperElements.indexOf(selector) !== -1) {\n      emptyPoints++;\n    }\n  }\n  // 刚开始页面内容为空，等页面渲染完成，再去做判断\n  window.addEventListener('load', function () {\n    var xElements, yElements;\n    // 检查20个坐标\n    for (var i = 0; i < 9; i++) {\n      console.log('xpoint', window.innerWidth * i / 10, window.innerHeight / 2);\n      console.log('ypoint', window.innerWidth / 2, window.innerHeight * i / 10);\n      xElements = document.elementsFromPoint(window.innerWidth * i / 10, window.innerHeight / 2);\n      yElements = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight * i / 10);\n      isWrapper(xElements[0]);\n      isWrapper(yElements[0]);\n    }\n    // 白屏点数占比可自行控制\n    if (emptyPoints >= 20) {\n      var centerElements = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight / 2);\n      console.log(\"emptyPoints++++++++++++++\", getSelector(centerElements[0]));\n      (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('error', {\n        emptyPoints: emptyPoints + \"\",\n        screen: window.screen.width + \"X\" + window.screen.height,\n        viewPoint: window.innerWidth + \"X\" + window.innerHeight,\n        selector: getSelector(centerElements[0]),\n        errorType: 'blankScreen'\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/blankTracker.js?");

/***/ }),

/***/ "./src/common/cache.js":
/*!*****************************!*\
  !*** ./src/common/cache.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCache: () => (/* binding */ addCache),\n/* harmony export */   clearCache: () => (/* binding */ clearCache),\n/* harmony export */   getCache: () => (/* binding */ getCache)\n/* harmony export */ });\nvar caches = [];\nvar getCache = function getCache() {\n  return caches;\n};\nvar addCache = function addCache(cache) {\n  caches.push(cache);\n  return caches;\n};\nvar clearCache = function clearCache() {\n  caches = [];\n};\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/cache.js?");

/***/ }),

/***/ "./src/common/errorTracker.js":
/*!************************************!*\
  !*** ./src/common/errorTracker.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   errorCaptcher: () => (/* binding */ errorCaptcher),\n/* harmony export */   errorTrackerReport: () => (/* binding */ errorTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n\n\n// 手动捕获\nvar errorCaptcher = function errorCaptcher(error, msg) {\n  (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('error', {\n    message: msg,\n    error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2),\n    // 直接传入error类型，序列化会丢失\n    errorType: 'catchError'\n  });\n};\n\n// 全局事件捕获\nvar errorTrackerReport = function errorTrackerReport() {\n  // js错误\n  var originError = window.onerror;\n  window.onerror = function (msg, url, row, col, error) {\n    // 执行原有onerror事件\n    originError && originError.call(window, msg, url, row, col, error);\n    (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('error', {\n      message: msg,\n      file: url,\n      row: row,\n      col: col,\n      error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2),\n      // 直接传入error类型，序列化会丢失,\n      errorType: 'jsError'\n    });\n  };\n\n  // ------- resource error --------\n  window.addEventListener('error', function (error) {\n    var target = error.target;\n    var isElementTarget = target instanceof HTMLScriptElement || target instanceof HTMLLinkElement || target instanceof HTMLImageElement;\n    if (!isElementTarget) {\n      return; // js error不再处理\n    }\n    (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('error', {\n      message: \"加载 \" + target.tagName + \" 资源错误\",\n      file: target.src,\n      errorType: 'resourceError'\n    });\n  }, true);\n  // // 资源加载错误\n  // window.addEventListener('error', (e) => {\n  //   const target = e.target\n  //   // 是否加载资源的标签\n  //   const isResourceElement = target instanceof HTMLScriptElement\n  //     || target instanceof HTMLLinkElement || target instanceof HTMLImageElement\n  //     || target instanceof HTMLVideoElement || target instanceof HTMLAudioElement\n\n  //   // 过滤掉其他错误，避免重复上报\n  //   if (!isResourceElement) return\n\n  //   lazyReport('error', {\n  //     message: `加载${target.tagName}资源错误`,\n  //     file: target.src || target.href || '',\n  //     errorType: 'resourceError'\n  //   })\n  // }, true)\n\n  // promise未被捕获错误\n  window.addEventListener('unhandledrejection', function (error) {\n    (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('error', {\n      message: error.reason,\n      error: JSON.stringify(error, Object.getOwnPropertyNames(error), 2),\n      // 直接传入error类型，序列化会丢失,\n      errorType: 'promiseError'\n    });\n  });\n\n  // 白屏\n  // TODO\n};\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/errorTracker.js?");

/***/ }),

/***/ "./src/common/longTaskTracker.js":
/*!***************************************!*\
  !*** ./src/common/longTaskTracker.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   longTaskTrackerReport: () => (/* binding */ longTaskTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/common/utils.js\");\n\n\nfunction longTaskTrackerReport() {\n  new PerformanceObserver(function (list) {\n    list.getEntries().forEach(function (entry) {\n      if (entry.duration > 100) {\n        var lastEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getLastEvent)();\n        requestIdleCallback(function () {\n          (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('performance', {\n            type: \"longTask\",\n            eventType: lastEvent ? lastEvent.type : '',\n            startTime: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(entry.startTime),\n            // 开始时间\n            duration: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(entry.duration),\n            // 持续时间\n            selector: lastEvent ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getSelector)(lastEvent.path || lastEvent.target) : \"\"\n          });\n        });\n      }\n    });\n  }).observe({\n    entryTypes: [\"longtask\"]\n  });\n}\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/longTaskTracker.js?");

/***/ }),

/***/ "./src/common/pageTracker.js":
/*!***********************************!*\
  !*** ./src/common/pageTracker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hashPageTrackerReport: () => (/* binding */ hashPageTrackerReport),\n/* harmony export */   historyPageTrackerReport: () => (/* binding */ historyPageTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/common/utils.js\");\n\n\nvar historyPageTrackerReport = function historyPageTrackerReport() {\n  var beforeTime = Date.now(); // 进入页面的时间\n  var beforePage = ''; // 上一个页面\n  // 获取页面停留时间\n  function getStayTime() {\n    var curTime = Date.now();\n    var stayTime = curTime - beforeTime;\n    beforeTime = curTime;\n    return stayTime;\n  }\n  window.history.pushState = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.patchEvent)(window.history.pushState, 'monitor_push_state');\n  window.history.replaceState = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.patchEvent)(window.history.replaceState, 'monitor_replace_state');\n\n  // 监听history.pushState\n  window.addEventListener('monitor_push_state', function () {\n    listener();\n  });\n  // 监听history.replaceState\n  window.addEventListener('monitor_replace_state', function () {\n    listener();\n  });\n  // 监听history.forward()、history.back()、history.go()\n  window.addEventListener('popstate', function () {\n    listener();\n  });\n  // 监听页面刷新\n  window.addEventListener('load', function () {\n    listener();\n  });\n  // 监听页面关闭\n  window.addEventListener('unload', function () {\n    listener();\n  });\n  function listener() {\n    var stayTime = getStayTime();\n    var curPage = window.location.href;\n    (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('visit', {\n      stayTime: stayTime,\n      page: beforePage\n    });\n    beforePage = curPage;\n  }\n};\nvar hashPageTrackerReport = function hashPageTrackerReport() {\n  var beforeTime = Date.now(); // 进入页面的时间\n  var beforePage = ''; // 上一个页面\n  // 获取页面停留时间\n  function getStayTime() {\n    var curTime = Date.now();\n    var stayTime = curTime - beforeTime;\n    beforeTime = curTime;\n    return stayTime;\n  }\n  // vue-router hash路由的实现使用兼容的方式，支持pushState优先使用history.pushState，不支持使用hashChange\n  window.history.pushState = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.patchEvent)(window.history.pushState, 'monitor_push_state');\n\n  // hash监听\n  window.addEventListener('hashchange', function () {\n    listener();\n  });\n  // 监听history.pushState\n  window.addEventListener('monitor_push_state', function () {\n    listener();\n  });\n  // 监听history.forward()、history.back()、history.go()\n  // window.addEventListener('popState', () => {\n  //   listener()\n  // })\n  // 监听页面刷新\n  window.addEventListener('load', function () {\n    listener();\n  });\n  // 监听页面关闭\n  window.addEventListener('unload', function () {\n    listener();\n  });\n  function listener() {\n    var stayTime = getStayTime();\n    var curPage = window.location.href;\n    (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('visit', {\n      stayTime: stayTime,\n      page: beforePage\n    });\n    beforePage = curPage;\n  }\n};\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/pageTracker.js?");

/***/ }),

/***/ "./src/common/performanceTracker.js":
/*!******************************************!*\
  !*** ./src/common/performanceTracker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   performanceTrackerReport: () => (/* binding */ performanceTrackerReport)\n/* harmony export */ });\n/* harmony import */ var _report__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report */ \"./src/common/report.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/common/utils.js\");\n\n\nfunction performanceTrackerReport() {\n  var FMP, LCP;\n  // 增加一个性能条目的观察者\n  new PerformanceObserver(function (entryList, observer) {\n    var perfEntries = entryList.getEntries();\n    FMP = perfEntries[0];\n    observer.disconnect(); // 不再观察了\n  }).observe({\n    entryTypes: [\"element\"]\n  }); // 观察页面中有意义的元素\n  // 增加一个性能条目的观察者\n  new PerformanceObserver(function (entryList, observer) {\n    var perfEntries = entryList.getEntries();\n    var lastEntry = perfEntries[perfEntries.length - 1];\n    LCP = lastEntry;\n    observer.disconnect(); // 不再观察了\n  }).observe({\n    entryTypes: [\"largest-contentful-paint\"]\n  }); // 观察页面中最大的元素\n  // 增加一个性能条目的观察者\n  new PerformanceObserver(function (entryList, observer) {\n    var lastEvent = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getLastEvent)();\n    var firstInput = entryList.getEntries()[0];\n    if (firstInput) {\n      // 开始处理的时间 - 开始点击的时间，差值就是处理的延迟\n      var inputDelay = firstInput.processingStart - firstInput.startTime;\n      var duration = firstInput.duration; // 处理的耗时\n      if (inputDelay > 0 || duration > 0) {\n        (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('performance', {\n          type: \"firstInputDelay\",\n          // 首次输入延迟\n          inputDelay: inputDelay ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(inputDelay) : 0,\n          // 延迟的时间\n          duration: duration ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(duration) : 0,\n          startTime: firstInput.startTime,\n          // 开始处理的时间\n          selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : \"\"\n        });\n      }\n    }\n    observer.disconnect(); // 不再观察了\n  }).observe({\n    type: \"first-input\",\n    buffered: true\n  }); // 第一次交互\n\n  // 刚开始页面内容为空，等页面渲染完成，再去做判断\n  window.addEventListener('load', function () {\n    setTimeout(function () {\n      var _window$performance$t = window.performance.timing,\n        fetchStart = _window$performance$t.fetchStart,\n        connectStart = _window$performance$t.connectStart,\n        connectEnd = _window$performance$t.connectEnd,\n        requestStart = _window$performance$t.requestStart,\n        responseStart = _window$performance$t.responseStart,\n        responseEnd = _window$performance$t.responseEnd,\n        domLoading = _window$performance$t.domLoading,\n        domInteractive = _window$performance$t.domInteractive,\n        domContentLoadedEventStart = _window$performance$t.domContentLoadedEventStart,\n        domContentLoadedEventEnd = _window$performance$t.domContentLoadedEventEnd,\n        loadEventStart = _window$performance$t.loadEventStart;\n      // 发送时间指标\n      // 用户体验指标\n      (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('performance', {\n        type: \"timing\",\n        // 统计每个阶段的时间\n        connectTime: connectEnd - connectStart,\n        // TCP连接耗时\n        ttfbTime: responseStart - requestStart,\n        // 首字节到达时间\n        responseTime: responseEnd - responseStart,\n        // response响应耗时\n        parseDOMTime: loadEventStart - domLoading,\n        // DOM解析渲染的时间\n        domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart,\n        // DOMContentLoaded事件回调耗时\n        timeToInteractive: domInteractive - fetchStart,\n        // 首次可交互时间\n        loadTime: loadEventStart - fetchStart // 完整的加载时间\n      });\n      // 发送性能指标\n      var FP = performance.getEntriesByName(\"first-paint\")[0];\n      var FCP = performance.getEntriesByName(\"first-contentful-paint\")[0];\n      console.log(\"FP\", FP);\n      console.log(\"FCP\", FCP);\n      console.log(\"FMP\", FMP);\n      console.log(\"LCP\", LCP);\n      (0,_report__WEBPACK_IMPORTED_MODULE_0__.lazyReport)('performance', {\n        type: \"paint\",\n        firstPaint: FP ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(FP.startTime) : 0,\n        firstContentPaint: FCP ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(FCP.startTime) : 0,\n        firstMeaningfulPaint: FMP ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(FMP.startTime) : 0,\n        largestContentfulPaint: LCP ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatTime)(LCP.renderTime || LCP.loadTime) : 0\n      });\n    }, 3000);\n  });\n}\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/performanceTracker.js?");

/***/ }),

/***/ "./src/common/report.js":
/*!******************************!*\
  !*** ./src/common/report.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   lazyReport: () => (/* binding */ lazyReport),\n/* harmony export */   report: () => (/* binding */ report)\n/* harmony export */ });\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ \"./src/common/cache.js\");\n\nvar timer = null;\nvar lazyReport = function lazyReport(type, params) {\n  console.log(type, params, '----------------', JSON.stringify(params));\n  var appId = window.__monitor_app_id__;\n  var userId = window.__monitor_user_id__;\n  var delay = window.__monitor_delay__;\n  var logParams = {\n    appId: appId,\n    //项目id\n    userId: userId,\n    // 用户id\n    type: type,\n    // error|action|visit|user\n    data: params,\n    currentTime: new Date().getTime(),\n    // 时间戳\n    currentPage: window.location.href,\n    // 当前页面\n    ua: navigator.userAgent // ua信息\n  };\n  (0,_cache__WEBPACK_IMPORTED_MODULE_0__.addCache)(logParams);\n  var data = (0,_cache__WEBPACK_IMPORTED_MODULE_0__.getCache)();\n\n  // 没有延迟\n  if (!delay) {\n    report(data);\n    clearTimeout(timer);\n    return;\n  }\n\n  // 合并日志，大于10条，不再等待delay\n  if (data && data.length > 10) {\n    report(data);\n    clearTimeout(timer);\n    return;\n  }\n  clearTimeout(timer);\n  timer = setTimeout(function () {\n    report(data);\n  }, delay);\n};\nfunction report(data) {\n  console.log(data, 'report_data');\n  var url = window.__monitor_report_url__;\n  // 常规接口上传\n  // 异步 XMLHttpRequest 在卸载页面时，会被忽略\n  // 跨域问题\n  // fetch(url, {\n  //   method: 'POST',\n  //   body: data,\n  //   headers: {\n  //     'Content-Type': 'application/json'\n  //   }\n  // }).then(res => {\n  //   console.log(res)\n  // }).catch(err => {\n  //   console.error(err)\n  // })\n  // 浏览器支持sendBeacon\n  // 数据发送是可靠的。\n  // 数据异步传输。\n  // 不影响下一导航的载入\n  if (navigator.sendBeacon) {\n    navigator.sendBeacon(url, JSON.stringify(data));\n  } else {\n    // JSONP方式\n    // 迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚\n    var img = new Image();\n    img.src = \"\".concat(url, \"?logs=\").concat(JSON.stringify(data));\n  }\n  (0,_cache__WEBPACK_IMPORTED_MODULE_0__.clearCache)();\n}\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/report.js?");

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatTime: () => (/* binding */ formatTime),\n/* harmony export */   getLastEvent: () => (/* binding */ getLastEvent),\n/* harmony export */   getPath: () => (/* binding */ getPath),\n/* harmony export */   getSelector: () => (/* binding */ getSelector),\n/* harmony export */   loadConfig: () => (/* binding */ loadConfig),\n/* harmony export */   patchEvent: () => (/* binding */ patchEvent)\n/* harmony export */ });\n/* harmony import */ var _actionTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTracker */ \"./src/common/actionTracker.js\");\n/* harmony import */ var _errorTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorTracker */ \"./src/common/errorTracker.js\");\n/* harmony import */ var _pageTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageTracker */ \"./src/common/pageTracker.js\");\n/* harmony import */ var _blankTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blankTracker */ \"./src/common/blankTracker.js\");\n/* harmony import */ var _performanceTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performanceTracker */ \"./src/common/performanceTracker.js\");\n/* harmony import */ var _longTaskTracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./longTaskTracker */ \"./src/common/longTaskTracker.js\");\n\n\n\n\n\n\nvar loadConfig = function loadConfig(options) {\n  var appId = options.appId,\n    userId = options.userId,\n    reportUrl = options.reportUrl,\n    autoActionTracker = options.autoActionTracker,\n    delay = options.delay,\n    hashPage = options.hashPage,\n    errorReport = options.errorReport,\n    blankReport = options.blankReport,\n    rootElements = options.rootElements,\n    performanceReport = options.performanceReport;\n  if (appId) window.__monitor_app_id__ = appId;\n  if (userId) window.__monitor_user_id__ = userId;\n  if (reportUrl) window.__monitor_report_url__ = reportUrl;\n  if (delay) window.__monitor_delay__ = delay;\n\n  // 开启错误监控\n  if (errorReport) (0,_errorTracker__WEBPACK_IMPORTED_MODULE_1__.errorTrackerReport)();\n\n  // 开启白屏监控\n  if (blankReport) (0,_blankTracker__WEBPACK_IMPORTED_MODULE_3__.blankTrackerReport)(rootElements);\n\n  // 开启性能监控\n  if (performanceReport) {\n    (0,_performanceTracker__WEBPACK_IMPORTED_MODULE_4__.performanceTrackerReport)();\n    (0,_longTaskTracker__WEBPACK_IMPORTED_MODULE_5__.longTaskTrackerReport)();\n  }\n\n  // 行为日志开启自动埋点\n  if (autoActionTracker) (0,_actionTracker__WEBPACK_IMPORTED_MODULE_0__.autoActionTrackerReport)();\n\n  // 路由监听\n  hashPage ? (0,_pageTracker__WEBPACK_IMPORTED_MODULE_2__.hashPageTrackerReport)() : (0,_pageTracker__WEBPACK_IMPORTED_MODULE_2__.historyPageTrackerReport)();\n};\n\n// 获取元素路径\nvar getPath = function getPath(element) {\n  // 如果存在id唯一标识，返回id信息\n  if (element.id) return \"//*[@id=\\\"\".concat(element.id, \"\\\"]\");\n  // body元素，返回tagname\n  if (document.body === element) return element.tagName;\n  var ix = 0;\n  var siblings = element.parentNode ? element.parentNode.childNodes : [];\n  for (var i = 0; i < siblings.length; i++) {\n    var sibling = siblings[i];\n    if (sibling === element) {\n      if (getPath(element.parentNode)) {\n        return getPath(element.parentNode) + '/' + element.tagName + '[' + (ix + 1) + ']';\n      } else {\n        return element.tagName + '[' + (ix + 1) + ']';\n      }\n    }\n    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;\n  }\n  return '';\n};\n\n// 事件拦截\nvar patchEvent = function patchEvent(originEvent, name) {\n  return function () {\n    // 执行原生方法\n    var res = originEvent.apply(this, arguments);\n    var e = new Event(name);\n    window.dispatchEvent(e);\n    return res;\n  };\n};\n\n// 获取最近一次事件\nvar getLastEvent = function getLastEvent() {\n  var lastEvent;\n  [\"click\", \"touchstart\", \"mousedown\", \"keydown\", \"mouseover\"].forEach(function (eventType) {\n    document.addEventListener(eventType, function (event) {\n      lastEvent = event;\n    }, {\n      capture: true,\n      // 是在捕获阶段还是冒泡阶段执行\n      passive: true // 默认不阻止默认事件\n    });\n  });\n  return lastEvent;\n};\nvar getSelector = function getSelector(pathsOrTarget) {\n  function getSelectors(path) {\n    // 反转 + 过滤 + 映射 + 拼接\n    return path.reverse().filter(function (element) {\n      return element !== document && element !== window;\n    }).map(function (element) {\n      console.log(\"element\", element.nodeName);\n      var selector = \"\";\n      if (element.id) {\n        return \"\".concat(element.nodeName.toLowerCase(), \"#\").concat(element.id);\n      } else if (element.className && typeof element.className === \"string\") {\n        return \"\".concat(element.nodeName.toLowerCase(), \".\").concat(element.className);\n      } else {\n        selector = element.nodeName.toLowerCase();\n      }\n      return selector;\n    }).join(\" \");\n  }\n  if (Array.isArray(pathsOrTarget)) {\n    return getSelectors(pathsOrTarget);\n  } else {\n    var path = [];\n    while (pathsOrTarget) {\n      path.push(pathsOrTarget);\n      pathsOrTarget = pathsOrTarget.parentNode;\n    }\n    return getSelectors(path);\n  }\n};\nvar formatTime = function formatTime(time) {\n  return new Date(time).getTime();\n};\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/common/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionTrackerReport: () => (/* reexport safe */ _common_actionTracker__WEBPACK_IMPORTED_MODULE_0__.actionTrackerReport),\n/* harmony export */   errorCaptcher: () => (/* reexport safe */ _common_errorTracker__WEBPACK_IMPORTED_MODULE_2__.errorCaptcher),\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _common_actionTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/actionTracker */ \"./src/common/actionTracker.js\");\n/* harmony import */ var _common_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/cache */ \"./src/common/cache.js\");\n/* harmony import */ var _common_errorTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/errorTracker */ \"./src/common/errorTracker.js\");\n/* harmony import */ var _common_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/report */ \"./src/common/report.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils */ \"./src/common/utils.js\");\n\n\n\n\n\nfunction init(options) {\n  if (!options) return;\n  // 加载配置项目\n  // 注入监控代码\n  (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.loadConfig)(options);\n\n  // uv统计\n  (0,_common_report__WEBPACK_IMPORTED_MODULE_3__.lazyReport)('user', '加载应用');\n\n  // 页面被卸载，存在埋点数据未上传\n  // 存在问题：\n  // 用户加载了网页并与其交互。\n  // 完成浏览后，用户切换到了其他应用程序，而不是关闭选项卡。\n  // 随后，用户通过手机的应用管理器关闭了浏览器应用。\n  window.addEventListener('unload', function () {\n    var data = (0,_common_cache__WEBPACK_IMPORTED_MODULE_1__.getCache)();\n    data && data.length && (0,_common_report__WEBPACK_IMPORTED_MODULE_3__.report)(data);\n  });\n\n  // 在会话结束时发送统计数据\n  // document.addEventListener(\"visibilitychange\", () => {\n  //   let data = getCache()\n  //   if (document.visibilityState === \"hidden\" && data && data.length) {\n  //     report(data)\n  //   }\n  // });\n}\n\n\n//# sourceURL=webpack://FrontMonitorSdk/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});