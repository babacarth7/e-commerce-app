/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MyApp(param) {\n    let { Component, pageProps: { session, ...pageProps } } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = MyApp;\nfunction Auth(param) {\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n            lineNumber: 31,\n            columnNumber: 16\n        }, this);\n    }\n    return children;\n}\n_s(Auth, \"qjTT3cFWcZ4jNPpBult9BtMMGLI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c1 = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDK0I7QUFDbkI7QUFDSjtBQUV2QyxTQUFTSSxNQUFNLEtBQW1EO1FBQW5ELEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUUsR0FBR0QsV0FBVyxFQUFFLEdBQW5EO0lBQ1gscUJBQ0ksOERBQUNOLDREQUFlQTtRQUFDTyxTQUFTQTtrQkFDdEIsNEVBQUNMLG9EQUFhQTtzQkFDYkcsVUFBVUcsSUFBSSxpQkFDakIsOERBQUNDOzBCQUNDLDRFQUFDSjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O3FDQUcxQiw4REFBQ0Q7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQztLQWRTRjtBQWdCVCxTQUFTSyxLQUFLLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDVixNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxFQUFFUyxNQUFNLEVBQUUsR0FBR1gsMkRBQVVBLENBQUM7UUFDMUJZLFVBQVU7UUFDVkM7WUFDQUgsT0FBT0ksSUFBSSxDQUFDO1FBQ1o7SUFDSjtJQUNBLElBQUlILFdBQVcsV0FBVztRQUN0QixxQkFBTyw4REFBQ0k7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLE9BQU9OO0FBQ1Q7R0FiT0Q7O1FBQ1VOLGtEQUFTQTtRQUNMRix1REFBVUE7OztNQUZ4QlE7QUFlVCwrREFBZUwsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgU3RvcmVQcm92aWRlciBmcm9tICcuLi91dGlscy9TdG9yZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgICAgICAgICAge0NvbXBvbmVudC5hdXRoID8gKFxuICAgICAgICAgIDxBdXRoPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvQXV0aD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICl9XG4gICAgICAgICAgICA8L1N0b3JlUHJvdmlkZXI+XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gdXNlU2Vzc2lvbih7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZCcpXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG4gIFxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG4gIFxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdXRoIiwiQXV0aCIsImNoaWxkcmVuIiwicm91dGVyIiwic3RhdHVzIiwicmVxdWlyZWQiLCJvblVuYXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L3JvdXRlci5qcz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9yb3V0ZXInKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

});