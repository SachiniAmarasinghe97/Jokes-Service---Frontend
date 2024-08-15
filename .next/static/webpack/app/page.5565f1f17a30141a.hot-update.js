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

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"(app-pages-browser)/./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos/dist/aos.css */ \"(app-pages-browser)/./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _Services_JokesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/JokesService */ \"(app-pages-browser)/./Services/JokesService.js\");\n// pages/login.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import { submitJokesAPI } from '../utils/axiosInstance';\n// Mock function to get types (e.g., from a database)\nconst fetchTypes = ()=>{\n    // Simulate fetching types from a database\n    return new Promise((resolve)=>{\n        setTimeout(()=>resolve([\n                \"all\",\n                \"funny\",\n                \"dark\"\n            ]), 500);\n    });\n};\n// Mock function to get jokes\n// const fetchJokes = (start, count, type = 'all') => {\n//   const allJokes = Array.from({ length: count }, (_, i) => ({\n//     id: start + i,\n//     text: `Joke number ${start + i + 1}`,\n//     type: i % 2 === 0 ? 'funny' : 'dark', // Example types: 'funny' and 'dark'\n//   }));\n//   const filteredJokes = type === 'all' ? allJokes : allJokes.filter(joke => joke.type === type);\n//   return new Promise((resolve) => {\n//     setTimeout(() => resolve(filteredJokes), 500);\n//   });\n// };\nfunction Home() {\n    _s();\n    const [jokes, setJokes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const [types, setTypes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [popupVisible, setPopupVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newJoke, setNewJoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [addingJoke, setAddingJoke] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n        fetchJokes();\n        loadTypes();\n    }, []);\n    // useEffect(() => {\n    //   loadJokes();\n    // }, [activeTab]);\n    const fetchJokes = async ()=>{\n        try {\n            alert(\"Hello\");\n            const response = await (0,_Services_JokesService__WEBPACK_IMPORTED_MODULE_4__.getAllApprovedJokes)();\n            setJokes(response);\n            console.log(JSON.stringify(jokes));\n        } catch (error) {\n            console.error(\"Error fetching jokes:\", error);\n            return [];\n        }\n    };\n    const loadTypes = async ()=>{\n        // Simulate fetching types from a database\n        const fetchedTypes = await fetchTypes();\n        setTypes(fetchedTypes);\n    };\n    const loadJokes = async ()=>{\n        setLoading(true);\n        const newJokes = await fetchJokes(page * 5, 5, activeTab);\n        setJokes((prevJokes)=>[\n                ...prevJokes,\n                ...newJokes\n            ]);\n        setPage((prevPage)=>prevPage + 1);\n        setLoading(false);\n    };\n    const handleTabClick = (type)=>{\n        setActiveTab(type);\n        setJokes([]);\n        setPage(0);\n        loadJokes();\n    };\n    const handleAddJoke = async ()=>{\n        setAddingJoke(true);\n        // Simulate adding a joke (e.g., to a database)\n        setTimeout(()=>{\n            setJokes([\n                {\n                    id: Date.now(),\n                    text: newJoke,\n                    type: activeTab\n                },\n                ...jokes\n            ]);\n            setNewJoke(\"\");\n            setAddingJoke(false);\n            setPopupVisible(false);\n        }, 500);\n    };\n    // const handleAddJoke = async () => {\n    //   setAddingJoke(true);\n    //   try {\n    //     const response = await submitJokesAPI.post(\"/create\", {\n    //       content: newJoke,\n    //       type: activeTab, // Assuming the joke type is based on the active tab\n    //     });\n    //     // Assuming the response contains the new joke\n    //     setJokes([\n    //       { id: response.data._id, content: newJoke, type: activeTab },\n    //       ...jokes,\n    //     ]);\n    //     setNewJoke(\"\");\n    //     setPopupVisible(false);\n    //   } catch (error) {\n    //     console.error(\"Error adding joke:\", error);\n    //   } finally {\n    //     setAddingJoke(false);\n    //   }\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center bg-cover bg-center mt-8 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-2xl bg-white p-8 rounded-lg shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-6 text-center\",\n                        children: \"Jokes\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6 flex justify-center space-x-4\",\n                        children: types.map((type)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleTabClick(type),\n                                className: \"py-2 px-4 rounded-md \".concat(activeTab === type ? \"bg-blue-600 text-white\" : \"bg-gray-200 text-gray-700\"),\n                                children: type.charAt(0).toUpperCase() + type.slice(1)\n                            }, type, false, {\n                                fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setPopupVisible(true),\n                            className: \"py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500\",\n                            children: \"Want to add a new joke?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-4 mb-6\",\n                        children: jokes.map((joke)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                \"data-aos\": \"fade-up\",\n                                className: \"p-4 border border-gray-300 rounded-md shadow-sm\",\n                                children: joke.text\n                            }, joke.id, false, {\n                                fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                                lineNumber: 150,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: loadJokes,\n                            disabled: loading,\n                            className: \"py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                            children: loading ? \"Loading...\" : \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                            lineNumber: 160,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            popupVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-6 rounded-lg shadow-lg w-full max-w-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-semibold mb-4\",\n                            children: \"Add a New Joke\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                            lineNumber: 174,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: newJoke,\n                            onChange: (e)=>setNewJoke(e.target.value),\n                            rows: \"4\",\n                            className: \"w-full p-2 border border-gray-300 rounded-md\",\n                            placeholder: \"Enter your joke here...\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                            lineNumber: 175,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setPopupVisible(false),\n                                    className: \"py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-2\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                                    lineNumber: 183,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleAddJoke,\n                                    disabled: addingJoke || !newJoke,\n                                    className: \"py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500\",\n                                    children: addingJoke ? \"Adding...\" : \"Add Joke\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                                    lineNumber: 189,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                            lineNumber: 182,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                    lineNumber: 173,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n                lineNumber: 172,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Code94-Assignment\\\\Frontend\\\\app\\\\page.jsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"h4JcRciyyRu7ImmVorD1XQaxKPM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7NEJBQzFDSSxNQUFLOzRCQUNMakIsV0FBVTs0QkFDVmtCLGFBQVk7Ozs7OztzQ0FFZCw4REFBQ25COzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQ0NDLFNBQVMsSUFBTWhDLGdCQUFnQjtvQ0FDL0I0QixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNHO29DQUNDQyxTQUFTVjtvQ0FDVGdCLFVBQVVuQyxjQUFjLENBQUNGO29DQUN6QjJCLFdBQVU7OENBRVR6QixhQUFhLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVDO0dBeEt3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvbG9naW4uanNcblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcbmltcG9ydCB7Z2V0QWxsQXBwcm92ZWRKb2tlc30gZnJvbSAnLi4vU2VydmljZXMvSm9rZXNTZXJ2aWNlJ1xuLy8gaW1wb3J0IHsgc3VibWl0Sm9rZXNBUEkgfSBmcm9tICcuLi91dGlscy9heGlvc0luc3RhbmNlJztcblxuXG4vLyBNb2NrIGZ1bmN0aW9uIHRvIGdldCB0eXBlcyAoZS5nLiwgZnJvbSBhIGRhdGFiYXNlKVxuY29uc3QgZmV0Y2hUeXBlcyA9ICgpID0+IHtcbiAgLy8gU2ltdWxhdGUgZmV0Y2hpbmcgdHlwZXMgZnJvbSBhIGRhdGFiYXNlXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShbXCJhbGxcIiwgXCJmdW5ueVwiLCBcImRhcmtcIl0pLCA1MDApO1xuICB9KTtcbn07XG5cbi8vIE1vY2sgZnVuY3Rpb24gdG8gZ2V0IGpva2VzXG4vLyBjb25zdCBmZXRjaEpva2VzID0gKHN0YXJ0LCBjb3VudCwgdHlwZSA9ICdhbGwnKSA9PiB7XG4vLyAgIGNvbnN0IGFsbEpva2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgKF8sIGkpID0+ICh7XG4vLyAgICAgaWQ6IHN0YXJ0ICsgaSxcbi8vICAgICB0ZXh0OiBgSm9rZSBudW1iZXIgJHtzdGFydCArIGkgKyAxfWAsXG4vLyAgICAgdHlwZTogaSAlIDIgPT09IDAgPyAnZnVubnknIDogJ2RhcmsnLCAvLyBFeGFtcGxlIHR5cGVzOiAnZnVubnknIGFuZCAnZGFyaydcbi8vICAgfSkpO1xuLy8gICBjb25zdCBmaWx0ZXJlZEpva2VzID0gdHlwZSA9PT0gJ2FsbCcgPyBhbGxKb2tlcyA6IGFsbEpva2VzLmZpbHRlcihqb2tlID0+IGpva2UudHlwZSA9PT0gdHlwZSk7XG4vLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZShmaWx0ZXJlZEpva2VzKSwgNTAwKTtcbi8vICAgfSk7XG4vLyB9O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2pva2VzLCBzZXRKb2tlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwb3B1cFZpc2libGUsIHNldFBvcHVwVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtuZXdKb2tlLCBzZXROZXdKb2tlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWRkaW5nSm9rZSwgc2V0QWRkaW5nSm9rZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIEFPUy5pbml0KCk7XG4gICAgZmV0Y2hKb2tlcygpO1xuICAgIGxvYWRUeXBlcygpO1xuICB9LCBbXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBsb2FkSm9rZXMoKTtcbiAgLy8gfSwgW2FjdGl2ZVRhYl0pO1xuXG4gIGNvbnN0IGZldGNoSm9rZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGFsZXJ0KFwiSGVsbG9cIik7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEFsbEFwcHJvdmVkSm9rZXMoKTtcbiAgICAgIHNldEpva2VzKHJlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGpva2VzKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGpva2VzOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRUeXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBTaW11bGF0ZSBmZXRjaGluZyB0eXBlcyBmcm9tIGEgZGF0YWJhc2VcbiAgICBjb25zdCBmZXRjaGVkVHlwZXMgPSBhd2FpdCBmZXRjaFR5cGVzKCk7XG4gICAgc2V0VHlwZXMoZmV0Y2hlZFR5cGVzKTtcbiAgfTtcblxuICBjb25zdCBsb2FkSm9rZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCBuZXdKb2tlcyA9IGF3YWl0IGZldGNoSm9rZXMocGFnZSAqIDUsIDUsIGFjdGl2ZVRhYik7XG4gICAgc2V0Sm9rZXMoKHByZXZKb2tlcykgPT4gWy4uLnByZXZKb2tlcywgLi4ubmV3Sm9rZXNdKTtcbiAgICBzZXRQYWdlKChwcmV2UGFnZSkgPT4gcHJldlBhZ2UgKyAxKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYWJDbGljayA9ICh0eXBlKSA9PiB7XG4gICAgc2V0QWN0aXZlVGFiKHR5cGUpO1xuICAgIHNldEpva2VzKFtdKTtcbiAgICBzZXRQYWdlKDApO1xuICAgIGxvYWRKb2tlcygpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZEpva2UgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0QWRkaW5nSm9rZSh0cnVlKTtcbiAgICAvLyBTaW11bGF0ZSBhZGRpbmcgYSBqb2tlIChlLmcuLCB0byBhIGRhdGFiYXNlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0Sm9rZXMoW3sgaWQ6IERhdGUubm93KCksIHRleHQ6IG5ld0pva2UsIHR5cGU6IGFjdGl2ZVRhYiB9LCAuLi5qb2tlc10pO1xuICAgICAgc2V0TmV3Sm9rZSgnJyk7XG4gICAgICBzZXRBZGRpbmdKb2tlKGZhbHNlKTtcbiAgICAgIHNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gICAgfSwgNTAwKTtcbiAgfTtcblxuICAvLyBjb25zdCBoYW5kbGVBZGRKb2tlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHNldEFkZGluZ0pva2UodHJ1ZSk7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3VibWl0Sm9rZXNBUEkucG9zdChcIi9jcmVhdGVcIiwge1xuICAvLyAgICAgICBjb250ZW50OiBuZXdKb2tlLFxuICAvLyAgICAgICB0eXBlOiBhY3RpdmVUYWIsIC8vIEFzc3VtaW5nIHRoZSBqb2tlIHR5cGUgaXMgYmFzZWQgb24gdGhlIGFjdGl2ZSB0YWJcbiAgLy8gICAgIH0pO1xuXG4gIC8vICAgICAvLyBBc3N1bWluZyB0aGUgcmVzcG9uc2UgY29udGFpbnMgdGhlIG5ldyBqb2tlXG4gIC8vICAgICBzZXRKb2tlcyhbXG4gIC8vICAgICAgIHsgaWQ6IHJlc3BvbnNlLmRhdGEuX2lkLCBjb250ZW50OiBuZXdKb2tlLCB0eXBlOiBhY3RpdmVUYWIgfSxcbiAgLy8gICAgICAgLi4uam9rZXMsXG4gIC8vICAgICBdKTtcbiAgLy8gICAgIHNldE5ld0pva2UoXCJcIik7XG4gIC8vICAgICBzZXRQb3B1cFZpc2libGUoZmFsc2UpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGpva2U6XCIsIGVycm9yKTtcbiAgLy8gICB9IGZpbmFsbHkge1xuICAvLyAgICAgc2V0QWRkaW5nSm9rZShmYWxzZSk7XG4gIC8vICAgfVxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1jb3ZlciBiZy1jZW50ZXIgbXQtOCBtYi04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy0yeGwgYmctd2hpdGUgcC04IHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNiB0ZXh0LWNlbnRlclwiPkpva2VzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IGZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAge3R5cGVzLm1hcCgodHlwZSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e3R5cGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKHR5cGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0yIHB4LTQgcm91bmRlZC1tZCAke1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gdHlwZVxuICAgICAgICAgICAgICAgICAgPyBcImJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktMjAwIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3R5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cFZpc2libGUodHJ1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmVlbi03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTUwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgV2FudCB0byBhZGQgYSBuZXcgam9rZT9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IG1iLTZcIj5cbiAgICAgICAgICB7ICBqb2tlcy5tYXAoKGpva2UpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtqb2tlLmlkfVxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtqb2tlLnRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRKb2tlc31cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIHNoYWRvdy1zbSBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIkxvYWQgTW9yZVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUG9wdXAgZm9yIEFkZGluZyBKb2tlICovfVxuICAgICAge3BvcHVwVmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTUwIHotNTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgbWF4LXctbWRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkFkZCBhIE5ldyBKb2tlPC9oMz5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICB2YWx1ZT17bmV3Sm9rZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdKb2tlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBqb2tlIGhlcmUuLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtdC00XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQb3B1cFZpc2libGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1tZCBzaGFkb3ctc20gaG92ZXI6YmctZ3JheS02MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktNTAwIG1yLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkSm9rZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWRkaW5nSm9rZSB8fCAhbmV3Sm9rZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgYmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCByb3VuZGVkLW1kIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmVlbi03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyZWVuLTUwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWRkaW5nSm9rZSA/IFwiQWRkaW5nLi4uXCIgOiBcIkFkZCBKb2tlXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkFPUyIsImdldEFsbEFwcHJvdmVkSm9rZXMiLCJmZXRjaFR5cGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiSG9tZSIsImpva2VzIiwic2V0Sm9rZXMiLCJwYWdlIiwic2V0UGFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidHlwZXMiLCJzZXRUeXBlcyIsInBvcHVwVmlzaWJsZSIsInNldFBvcHVwVmlzaWJsZSIsIm5ld0pva2UiLCJzZXROZXdKb2tlIiwiYWRkaW5nSm9rZSIsInNldEFkZGluZ0pva2UiLCJpbml0IiwiZmV0Y2hKb2tlcyIsImxvYWRUeXBlcyIsImFsZXJ0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZmV0Y2hlZFR5cGVzIiwibG9hZEpva2VzIiwibmV3Sm9rZXMiLCJwcmV2Sm9rZXMiLCJwcmV2UGFnZSIsImhhbmRsZVRhYkNsaWNrIiwidHlwZSIsImhhbmRsZUFkZEpva2UiLCJpZCIsIkRhdGUiLCJub3ciLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpva2UiLCJkYXRhLWFvcyIsImRpc2FibGVkIiwiaDMiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwicm93cyIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});