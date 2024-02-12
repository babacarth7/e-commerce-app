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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!@headlessui/react */ \"__barrel_optimize__?names=Menu!=!./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.jsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ \"./components/dropdown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)();\n    const { state } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_6__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" - App E-Commerce\" : \"App E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Application Web E-Commerce\"\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-16 items-center px-4 justify-between shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"text-lg font-bold\",\n                                    children: \"samazone\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"mx-auto justify-center md:flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            className: \"border border-gray-300 rounded-lg p-1 m-0 text-sm focus:ring-0\",\n                                            placeholder: \"Rechercher un produit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"rounded bg-amber-300 p-1 m-1 text-sm dark:text-black\",\n                                            children: \"Recherche\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center z-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-2\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Button, {\n                                                    className: \"text-blue-500\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white  shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Order History\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 41\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_headlessui_react__WEBPACK_IMPORTED_MODULE_9__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                                lineNumber: 69,\n                                                                columnNumber: 45\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                            lineNumber: 68,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/login\",\n                                            className: \"p-2\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                        className: \"flex h-10 justify-center items-center shadow-inner\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Copyright \\xa9 2024\"\n                        }, void 0, false, {\n                            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/components/layout.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"erJFpS/OaHhZrWVyPIAb5BYEeH0=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3ZCO0dBL0VTdEM7O1FBQzZCRix1REFBVUE7OztLQUR2Q0U7QUFpRlQsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanN4P2MwM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuLi91dGlscy9TdG9yZSdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgRHJvcERvd25MaW5rIGZyb20gJy4vZHJvcGRvd24nXG5cbmZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxuICAgIGNvbnN0IFtjYXJ0SXRlbXNDb3VudCwgc2V0Q2FydEl0ZW1zQ291bnRdID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENhcnRJdGVtc0NvdW50KGNhcnQuY2FydEl0ZW1zLnJlZHVjZSgoYSwgYykgPT4gYSArIGMucXVhbnRpdHksIDApKVxuICAgIH0sIFtjYXJ0LmNhcnRJdGVtc10pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD4gXG5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57IHRpdGxlID8gdGl0bGUgKyAnIC0gQXBwIEUtQ29tbWVyY2UnIDogJ0FwcCBFLUNvbW1lcmNlJyB9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nQXBwbGljYXRpb24gV2ViIEUtQ29tbWVyY2UnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+IFxuXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249J2JvdHRvbS1jZW50ZXInIGxpbWl0PXsxfSAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBweC00IGp1c3RpZnktYmV0d2VlbiBzaGFkb3ctbWQnPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LWJvbGQnPnNhbWF6b25lPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J214LWF1dG8ganVzdGlmeS1jZW50ZXIgbWQ6ZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0xIG0tMCB0ZXh0LXNtIGZvY3VzOnJpbmctMCcgcGxhY2Vob2xkZXI9J1JlY2hlcmNoZXIgdW4gcHJvZHVpdCcvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3JvdW5kZWQgYmctYW1iZXItMzAwIHAtMSBtLTEgdGV4dC1zbSBkYXJrOnRleHQtYmxhY2snPlJlY2hlcmNoZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHotMTAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT0ncC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cyA9PT0gJ2xvYWRpbmcnID8gKCdMb2FkaW5nJykgOiBzZXNzaW9uPy51c2VyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudSBhcz0nZGl2JyBjbGFzc05hbWU9J3JlbGF0aXZlIGlubGluZS1ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNTAwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIHctNTYgb3JpZ2luLXRvcC1yaWdodCBiZy13aGl0ZSAgc2hhZG93LWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24tbGluaycgaHJlZj0nL3Byb2ZpbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5rIGNsYXNzTmFtZT0nZHJvcGRvd24tbGluaycgaHJlZj0nL3Byb2ZpbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXIgSGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BEb3duTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wRG93bkxpbmsgY2xhc3NOYW1lPSdkcm9wZG93bi1saW5rJyBocmVmPScvcHJvZmlsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wRG93bkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9XCJwLTJcIj5Mb2dpbjwvTGluaz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgbS1hdXRvIG10LTQgcHgtNCc+eyBjaGlsZHJlbiB9PC9tYWluPlxuXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggaC0xMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2hhZG93LWlubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDI0PC9wPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiVG9hc3RDb250YWluZXIiLCJNZW51IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcmUiLCJ1c2VTZXNzaW9uIiwiRHJvcERvd25MaW5rIiwiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInN0YXR1cyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdGUiLCJjYXJ0IiwiY2FydEl0ZW1zQ291bnQiLCJzZXRDYXJ0SXRlbXNDb3VudCIsImNhcnRJdGVtcyIsInJlZHVjZSIsImEiLCJjIiwicXVhbnRpdHkiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwb3NpdGlvbiIsImxpbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibmF2IiwiaHJlZiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNwYW4iLCJ1c2VyIiwiYXMiLCJCdXR0b24iLCJJdGVtcyIsIkl0ZW0iLCJtYWluIiwiZm9vdGVyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.jsx\n"));

/***/ })

});