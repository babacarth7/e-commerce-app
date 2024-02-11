"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.jsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction LoginScreen() {\n    _s();\n    const { handleSubmit, register, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();\n    const submitHandler = (param)=>{\n        let { email, password } = param;\n        console.log(email, password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Login\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"mx-auto max-w-screen-md\",\n            onSubmit: handleSubmit(submitHandler),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-xl\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"mail\",\n                            ...register(\"email\", {\n                                required: \"Please enter email\",\n                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,\n                                message: \"Please enter valid email\"\n                            }),\n                            className: \"w-full\",\n                            id: \"email\",\n                            autoFocus: true\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this),\n                        errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-red-500\",\n                            children: errors.email.message\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"w-full\",\n                            id: \"password\",\n                            autoFocus: true\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"primary-button\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 \",\n                    children: [\n                        \"Don't have an account? \\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"register\",\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/login.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(LoginScreen, \"xbOwt3w2TgR/lm/5AE3R2r9iWSc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm\n    ];\n});\n_c = LoginScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginScreen);\nvar _c;\n$RefreshReg$(_c, \"LoginScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNhO0FBQ0E7QUFFekMsU0FBU0k7O0lBRUwsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsRUFBRyxHQUFHTCx3REFBT0E7SUFDbEUsTUFBTU0sZ0JBQWdCO1lBQUUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7UUFDdkNDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0M7SUFDdkI7SUFDQSxxQkFDSSw4REFBQ1QsMERBQU1BO1FBQUNZLE9BQU07a0JBQ1YsNEVBQUNDO1lBQUtDLFdBQVU7WUFBMEJDLFVBQVVaLGFBQWFJOzs4QkFDN0QsOERBQUNTO29CQUFHRixXQUFVOzhCQUFlOzs7Ozs7OEJBQzdCLDhEQUFDRztvQkFBSUgsV0FBVTs7c0NBQ1gsOERBQUNJOzRCQUFNQyxTQUFROzs7Ozs7c0NBQ2YsOERBQUNDOzRCQUNHQyxNQUFLOzRCQUNKLEdBQUdqQixTQUFTLFNBQVM7Z0NBQ2xCa0IsVUFBVTtnQ0FDVkMsT0FBTztnQ0FDUEMsU0FBUzs0QkFDYixFQUFFOzRCQUNEVixXQUFVOzRCQUNYVyxJQUFHOzRCQUNIQyxTQUFTOzs7Ozs7d0JBRVpwQixPQUFPRSxLQUFLLGtCQUNULDhEQUFDUzs0QkFBSUgsV0FBVTtzQ0FBZ0JSLE9BQU9FLEtBQUssQ0FBQ2dCLE9BQU87Ozs7Ozs7Ozs7Ozs4QkFHM0QsOERBQUNQO29CQUFJSCxXQUFVOztzQ0FDWCw4REFBQ0k7NEJBQU1DLFNBQVE7c0NBQVc7Ozs7OztzQ0FDMUIsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFXUCxXQUFVOzRCQUFTVyxJQUFHOzRCQUFXQyxTQUFTOzs7Ozs7Ozs7Ozs7OEJBRXJFLDhEQUFDVDtvQkFBSUgsV0FBVTs4QkFDWCw0RUFBQ2E7d0JBQU9iLFdBQVU7a0NBQWlCOzs7Ozs7Ozs7Ozs4QkFFdkMsOERBQUNHO29CQUFJSCxXQUFVOzt3QkFBUTtzQ0FFbkIsOERBQUNmLGtEQUFJQTs0QkFBQzZCLE1BQUs7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDO0dBekNTMUI7O1FBRXNERCxvREFBT0E7OztLQUY3REM7QUEyQ1QsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4PzllZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5cbmZ1bmN0aW9uIExvZ2luU2NyZWVuKCkge1xuXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sIH0gPSB1c2VGb3JtKClcbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKCB7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCB0aXRsZT0nTG9naW4nPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LXNjcmVlbi1tZCcgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRIYW5kbGVyKX0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWItNCB0ZXh0LXhsJz5Mb2dpbjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J21haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnUGxlYXNlIGVudGVyIGVtYWlsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogL15bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXSsuW2EtekEtWjAtOS0uXSskL2ksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB2YWxpZCBlbWFpbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPntlcnJvcnMuZW1haWwubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIGNsYXNzTmFtZT0ndy1mdWxsJyBpZD0ncGFzc3dvcmQnIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00Jz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3ByaW1hcnktYnV0dG9uJz5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBcIj5cbiAgICAgICAgICAgICAgICAgICAgIERvbiZhcG9zO3QgaGF2ZSBhbiBhY2NvdW50PyAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ncmVnaXN0ZXInPlJlZ2lzdGVyPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luU2NyZWVuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsInVzZUZvcm0iLCJMb2dpblNjcmVlbiIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwic3VibWl0SGFuZGxlciIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJoMSIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwidmFsdWUiLCJtZXNzYWdlIiwiaWQiLCJhdXRvRm9jdXMiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.jsx\n"));

/***/ })

});