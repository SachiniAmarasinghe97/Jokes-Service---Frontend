"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./Services/JokesService.js":
/*!**********************************!*\
  !*** ./Services/JokesService.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   acceptJoke: function() { return /* binding */ acceptJoke; },\n/* harmony export */   deleteJoke: function() { return /* binding */ deleteJoke; },\n/* harmony export */   editJoke: function() { return /* binding */ editJoke; },\n/* harmony export */   getAllApprovedJokes: function() { return /* binding */ getAllApprovedJokes; },\n/* harmony export */   getAllNewJokesForAdmin: function() { return /* binding */ getAllNewJokesForAdmin; },\n/* harmony export */   submitJoke: function() { return /* binding */ submitJoke; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n\n\nconst deliveryJokesBaseUrl = \"http://localhost:3001/\";\nconst submitJokesBaseUrl = \"http://localhost:8000/api/joke/\";\nconst adminHeaders = {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer \" + js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"access_token\")\n};\nconst userHeaders = {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": \"Bearer \" + process.env.NEXT_APP_API_TOKEN\n};\nconst submitJoke = async (data)=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(submitJokesBaseUrl + \"\", data, {\n        userHeaders\n    });\n};\nconst getAllApprovedJokes = async ()=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(deliveryJokesBaseUrl + \"jokes\");\n};\nconst getAllNewJokesForAdmin = async ()=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(apiEndPoint, {\n        adminHeaders\n    });\n};\nconst acceptJoke = async (data)=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(apiEndPoint, data, {\n        adminHeaders\n    });\n};\nconst editJoke = async (data)=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].put(apiEndPoint + \"update/\" + data.id, data, {\n        adminHeaders\n    });\n};\nconst deleteJoke = async (jokeId)=>{\n    return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].delete(apiEndPoint + \"delete/\" + jokeId, {\n        adminHeaders\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL1NlcnZpY2VzL0pva2VzU2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTTtBQUNoQyxNQUFNRSx1QkFBdUJDLHdCQUFtRDtBQUNoRixNQUFNRyxxQkFBcUJILGlDQUFpRDtBQUc1RSxNQUFNSyxlQUFlO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUIsWUFBWVAsaURBQU9BLENBQUNRLEdBQUcsQ0FBQztBQUM3QztBQUVBLE1BQU1DLGNBQWM7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixZQUFZUCxPQUFPQSxDQUFDQyxHQUFHLENBQUNPLGtCQUFrQjtBQUMvRDtBQUVPLE1BQU1DLGFBQWEsT0FBT0M7SUFDN0IsT0FBTyxNQUFNYiw2Q0FBS0EsQ0FBQ2MsSUFBSSxDQUFDUixxQkFBcUIsSUFBR08sTUFBSztRQUFDSDtJQUFXO0FBRXJFLEVBQUM7QUFFTSxNQUFNSyxzQkFBc0I7SUFDL0IsT0FBTyxNQUFNZiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDUCx1QkFBdUI7QUFDbEQsRUFBQztBQUVNLE1BQU1jLHlCQUF5QjtJQUNsQyxPQUFPLE1BQU1oQiw2Q0FBS0EsQ0FBQ1MsR0FBRyxDQUFDUSxhQUFZO1FBQUNUO0lBQVk7QUFDcEQsRUFBQztBQUVNLE1BQU1VLGFBQWEsT0FBT0w7SUFDN0IsT0FBTyxNQUFNYiw2Q0FBS0EsQ0FBQ2MsSUFBSSxDQUFDRyxhQUFZSixNQUFLO1FBQUNMO0lBQVk7QUFFMUQsRUFBQztBQUVNLE1BQU1XLFdBQVcsT0FBT047SUFDM0IsT0FBTyxNQUFNYiw2Q0FBS0EsQ0FBQ29CLEdBQUcsQ0FBQ0gsY0FBYSxZQUFXSixLQUFLUSxFQUFFLEVBQUNSLE1BQUs7UUFBQ0w7SUFBWTtBQUM3RSxFQUFDO0FBRU0sTUFBTWMsYUFBWSxPQUFPQztJQUM1QixPQUFPLE1BQU12Qiw2Q0FBS0EsQ0FBQ3dCLE1BQU0sQ0FBQ1AsY0FBYyxZQUFZTSxRQUFPO1FBQUNmO0lBQVk7QUFFNUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9TZXJ2aWNlcy9Kb2tlc1NlcnZpY2UuanM/NDVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5jb25zdCBkZWxpdmVyeUpva2VzQmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RFTElWRVJZX0pPS0VTX0FQSV9CQVNFX1VSTCBcbmNvbnN0IHN1Ym1pdEpva2VzQmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVQk1JVF9KT0tFU19BUElfQkFTRV9VUkxcblxuXG5jb25zdCBhZG1pbkhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIENvb2tpZXMuZ2V0KCdhY2Nlc3NfdG9rZW4nKVxufTtcblxuY29uc3QgdXNlckhlYWRlcnMgPSB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHByb2Nlc3MuZW52Lk5FWFRfQVBQX0FQSV9UT0tFTlxufTtcblxuZXhwb3J0IGNvbnN0IHN1Ym1pdEpva2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KHN1Ym1pdEpva2VzQmFzZVVybCArIFwiXCIsZGF0YSx7dXNlckhlYWRlcnN9KVxuICAgIFxufVxuXG5leHBvcnQgY29uc3QgZ2V0QWxsQXBwcm92ZWRKb2tlcyA9IGFzeW5jICgpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KGRlbGl2ZXJ5Sm9rZXNCYXNlVXJsICsgXCJqb2tlc1wiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFsbE5ld0pva2VzRm9yQWRtaW4gPSBhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLmdldChhcGlFbmRQb2ludCx7YWRtaW5IZWFkZXJzfSk7XG59XG5cbmV4cG9ydCBjb25zdCBhY2NlcHRKb2tlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MucG9zdChhcGlFbmRQb2ludCxkYXRhLHthZG1pbkhlYWRlcnN9KVxuICAgIFxufVxuXG5leHBvcnQgY29uc3QgZWRpdEpva2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBheGlvcy5wdXQoYXBpRW5kUG9pbnQgK1widXBkYXRlL1wiKyBkYXRhLmlkLGRhdGEse2FkbWluSGVhZGVyc30pXG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVKb2tlPSBhc3luYyAoam9rZUlkKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLmRlbGV0ZShhcGlFbmRQb2ludCArIFwiZGVsZXRlL1wiICsgam9rZUlkLHthZG1pbkhlYWRlcnN9KVxuICAgIFxufVxuXG5cbiJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJkZWxpdmVyeUpva2VzQmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19ERUxJVkVSWV9KT0tFU19BUElfQkFTRV9VUkwiLCJzdWJtaXRKb2tlc0Jhc2VVcmwiLCJORVhUX1BVQkxJQ19TVUJNSVRfSk9LRVNfQVBJX0JBU0VfVVJMIiwiYWRtaW5IZWFkZXJzIiwiZ2V0IiwidXNlckhlYWRlcnMiLCJORVhUX0FQUF9BUElfVE9LRU4iLCJzdWJtaXRKb2tlIiwiZGF0YSIsInBvc3QiLCJnZXRBbGxBcHByb3ZlZEpva2VzIiwiZ2V0QWxsTmV3Sm9rZXNGb3JBZG1pbiIsImFwaUVuZFBvaW50IiwiYWNjZXB0Sm9rZSIsImVkaXRKb2tlIiwicHV0IiwiaWQiLCJkZWxldGVKb2tlIiwiam9rZUlkIiwiZGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Services/JokesService.js\n"));

/***/ })

});