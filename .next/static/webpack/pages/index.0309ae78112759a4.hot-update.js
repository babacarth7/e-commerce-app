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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"__barrel_optimize__?names=Menu!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ \"./components/dropdown.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_9__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)({\n            callbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - App E-Commerce\" : \"App E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Application Web E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-16 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"mx-auto justify-center md:flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"border border-gray-300 rounded-lg p-1 m-0 text-sm focus:ring-0\",\n                                            placeholder: \"Rechercher un produit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"rounded bg-amber-300 p-1 m-1 text-sm dark:text-black\",\n                                            children: \"Recherche\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2 text-blue-500\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 29\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-blue-500\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white  shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 65,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/order-history\",\n                                                                children: \"Order History\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 70,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 69,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"dropdown-link\",\n                                                                href: \"#\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 76,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"p-2\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"VfgPqudABR9Yqe3CkFIdj7CuBlw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtzREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTXJELDhEQUFDZTt3QkFBS2YsV0FBVTtrQ0FBK0J4Qjs7Ozs7O2tDQUUvQyw4REFBQ3dDO3dCQUFPaEIsV0FBVTtrQ0FDZCw0RUFBQ2lCO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3ZCO0dBckZTM0M7O1FBQzZCSCx1REFBVUE7OztLQUR2Q0c7QUF1RlQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanN4P2MwM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9TdG9yZSdcbmltcG9ydCB7IHNpZ25PdXQsdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBEcm9wRG93bkxpbmsgZnJvbSAnLi9kcm9wZG93bidcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcblxuZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxuICAgIGNvbnN0IFtjYXJ0SXRlbXNDb3VudCwgc2V0Q2FydEl0ZW1zQ291bnRdID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENhcnRJdGVtc0NvdW50KGNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSwgYykgPT4gYSArIGMucXVhbnRpdHksIDApKVxuICAgIH0sIFtjYXJ0LmNhcnRJdGVtc10pXG5cbiAgICBjb25zdCBsb2dvdXRDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIENvb2tpZXMucmVtb3ZlKCdjYXJ0JylcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0FSVF9SRVNFVCcgfSlcbiAgICAgICAgc2lnbk91dCh7IGNhbGxiYWNrVXJsOiAnL2xvZ2luJyB9KVxuICAgIH0gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+IFxuXG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+eyB0aXRsZSA/IHRpdGxlICsgJyAtIEFwcCBFLUNvbW1lcmNlJyA6ICdBcHAgRS1Db21tZXJjZScgfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J0FwcGxpY2F0aW9uIFdlYiBFLUNvbW1lcmNlJyAvPlxuICAgICAgICAgICAgPC9IZWFkPiBcblxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPSdib3R0b20tY2VudGVyJyBsaW1pdD17MX0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggaC0xNiBpdGVtcy1jZW50ZXIgcHgtNCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LW1kJz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1ib2xkJz5zYW1hem9uZTwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdteC1hdXRvIGp1c3RpZnktY2VudGVyIG1kOmZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMSBtLTAgdGV4dC1zbSBmb2N1czpyaW5nLTAnIHBsYWNlaG9sZGVyPSdSZWNoZXJjaGVyIHVuIHByb2R1aXQnLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyb3VuZGVkIGJnLWFtYmVyLTMwMCBwLTEgbS0xIHRleHQtc20gZGFyazp0ZXh0LWJsYWNrJz5SZWNoZXJjaGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciB6LTEwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBjbGFzc05hbWU9J3AtMiB0ZXh0LWJsdWUtNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PT0gJ2xvYWRpbmcnID8gKCdMb2FkaW5nJykgOiBzZXNzaW9uPy51c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBhcz0nZGl2JyBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIHctNTYgb3JpZ2luLXRvcC1yaWdodCBiZy13aGl0ZSAgc2hhZG93LWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24tbGluaycgaHJlZj0nL3Byb2ZpbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24tbGluaycgaHJlZj0nL29yZGVyLWhpc3RvcnknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXIgSGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZHJvcGRvd24tbGluaycgaHJlZj0nIycgb25DbGljaz17bG9nb3V0Q2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJwLTJcIj5Mb2dpbjwvTGluaz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNCc+eyBjaGlsZHJlbiB9PC9tYWluPlxuXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggaC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDI0PC9wPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJNZW51IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmUiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkRyb3BEb3duTGluayIsIkNvb2tpZXMiLCJMYXlvdXQiLCJ0aXRsZSIsImNoaWxkcmVuIiwic3RhdHVzIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2FydCIsImNhcnRJdGVtc0NvdW50Iiwic2V0Q2FydEl0ZW1zQ291bnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2UiLCJhIiwiYyIsInF1YW50aXR5IiwibG9nb3V0Q2xpY2tIYW5kbGVyIiwicmVtb3ZlIiwidHlwZSIsImNhbGxiYWNrVXJsIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicG9zaXRpb24iLCJsaW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImhyZWYiLCJmb3JtIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iLCJ1c2VyIiwiYXMiLCJCdXR0b24iLCJJdGVtcyIsIkl0ZW0iLCJvbkNsaWNrIiwibWFpbiIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.jsx\n"));

/***/ })

});