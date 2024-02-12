"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"__barrel_optimize__?names=Menu!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ \"./components/dropdown.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - App E-Commerce\" : \"App E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Application Web E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-16 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"mx-auto justify-center md:flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"border border-gray-300 rounded-lg p-1 m-0 text-sm focus:ring-0\",\n                                            placeholder: \"Rechercher un produit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"rounded bg-amber-300 p-1 m-1 text-sm dark:text-black\",\n                                            children: \"Recherche\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-blue-500\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white  shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 65,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/order-history\",\n                                                                children: \"Order History\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"dropdown-link\",\n                                                                href: \"#\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"VfgPqudABR9Yqe3CkFIdj7CuBlw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtzREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1uRSw4REFBQ2U7d0JBQUtmLFdBQVU7a0NBQStCeEI7Ozs7OztrQ0FFL0MsOERBQUN3Qzt3QkFBT2hCLFdBQVU7a0NBQ2QsNEVBQUNpQjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2QjtHQXJGUzNDOztRQUM2QkgsdURBQVVBOzs7S0FEdkNHO0FBdUZULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzeD9jMDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vdXRpbHMvU3RvcmUnXG5pbXBvcnQgeyBzaWduT3V0LHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgRHJvcERvd25MaW5rIGZyb20gJy4vZHJvcGRvd24nXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKVxuICAgIGNvbnN0IHsgY2FydCB9ID0gc3RhdGVcbiAgICBjb25zdCBbY2FydEl0ZW1zQ291bnQsIHNldENhcnRJdGVtc0NvdW50XSA9IHVzZVN0YXRlKDApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRDYXJ0SXRlbXNDb3VudChjYXJ0LmNhcnRJdGVtcy5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjLnF1YW50aXR5LCAwKSlcbiAgICB9LCBbY2FydC5jYXJ0SXRlbXNdKVxuXG4gICAgY29uc3QgbG9nb3V0Q2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBDb29raWVzLnJlbW92ZSgnY2FydCcpXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0NBUlRfUkVTRVQnIH0pXG4gICAgICAgIHNpZ25PdXQoeyBjYWxsYmFja1VybDogJy9sb2dpbicgfSlcbiAgICB9ICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PiBcblxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnsgdGl0bGUgPyB0aXRsZSArICcgLSBBcHAgRS1Db21tZXJjZScgOiAnQXBwIEUtQ29tbWVyY2UnIH08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdBcHBsaWNhdGlvbiBXZWIgRS1Db21tZXJjZScgLz5cbiAgICAgICAgICAgIDwvSGVhZD4gXG5cbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj0nYm90dG9tLWNlbnRlcicgbGltaXQ9ezF9IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4IGgtMTYgaXRlbXMtY2VudGVyIHB4LTQganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy1tZCc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCc+c2FtYXpvbmU8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbXgtYXV0byBqdXN0aWZ5LWNlbnRlciBtZDpmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J2JvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTEgbS0wIHRleHQtc20gZm9jdXM6cmluZy0wJyBwbGFjZWhvbGRlcj0nUmVjaGVyY2hlciB1biBwcm9kdWl0Jy8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncm91bmRlZCBiZy1hbWJlci0zMDAgcC0xIG0tMSB0ZXh0LXNtIGRhcms6dGV4dC1ibGFjayc+UmVjaGVyY2hlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgei0xMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCIgY2xhc3NOYW1lPSdwLTIgdGV4dC1ibHVlLTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIHB4LTIgcHktMSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPT09ICdsb2FkaW5nJyA/ICgnTG9hZGluZycpIDogc2Vzc2lvbj8udXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUgYXM9J2RpdicgY2xhc3NOYW1lPSdyZWxhdGl2ZSBpbmxpbmUtYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTUwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51LkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCB3LTU2IG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgIHNoYWRvdy1sZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duTGluayBjbGFzc05hbWU9J2Ryb3Bkb3duLWxpbmsnIGhyZWY9Jy9wcm9maWxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wRG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BEb3duTGluayBjbGFzc05hbWU9J2Ryb3Bkb3duLWxpbmsnIGhyZWY9Jy9vcmRlci1oaXN0b3J5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyIEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wRG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Ryb3Bkb3duLWxpbmsnIGhyZWY9JyMnIG9uQ2xpY2s9e2xvZ291dENsaWNrSGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1zPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwicC0yIHRleHQtYmx1ZS01MDBcIj5Mb2dpbjwvTGluaz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNCc+eyBjaGlsZHJlbiB9PC9tYWluPlxuXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggaC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDI0PC9wPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJNZW51IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmUiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkRyb3BEb3duTGluayIsIkNvb2tpZXMiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImNhcnRJdGVtc0NvdW50Iiwic2V0Q2FydEl0ZW1zQ291bnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2UiLCJhIiwiYyIsInF1YW50aXR5IiwibG9nb3V0Q2xpY2tIYW5kbGVyIiwicmVtb3ZlIiwidHlwZSIsImNhbGxiYWNrVXJsIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicG9zaXRpb24iLCJsaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImhyZWYiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iLCJ1c2VyIiwiYXMiLCJCdXR0b24iLCJJdGVtcyIsIkl0ZW0iLCJvbkNsaWNrIiwibWFpbiIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.jsx\n"));

/***/ })

});