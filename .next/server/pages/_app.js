/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.jsx\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/pages/_app.jsx\",\n        lineNumber: 6,\n        columnNumber: 8\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ1k7QUFFM0MsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDRyw4REFBQ0gsb0RBQWFBO2tCQUNULDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLWFwcC8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFN0b3JlUHJvdmlkZXIgZnJvbSAnLi4vdXRpbHMvU3RvcmUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgIDxTdG9yZVByb3ZpZGVyPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgIDwvU3RvcmVQcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIlN0b3JlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./utils/Store.jsx":
/*!*************************!*\
  !*** ./utils/Store.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: {\n        cartItems: []\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/babacarthiam/Desktop/e-commerce-app/utils/Store.jsx\",\n        lineNumber: 39,\n        columnNumber: 12\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9TdG9yZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpRDtBQUUxQyxNQUFNRSxzQkFBUUYsb0RBQWFBLEdBQUU7QUFFcEMsTUFBTUcsZUFBZTtJQUNqQkMsTUFBTTtRQUFFQyxXQUFXLEVBQUU7SUFBQztBQUMxQjtBQUVBLFNBQVNDLFFBQVFDLEtBQUssRUFBRUMsTUFBTTtJQUMxQixPQUFRQSxPQUFPQyxJQUFJO1FBQ2YsS0FBSztZQUFpQjtnQkFDbEIsTUFBTUMsVUFBVUYsT0FBT0csT0FBTztnQkFDOUIsTUFBTUMsWUFBWUwsTUFBTUgsSUFBSSxDQUFDQyxTQUFTLENBQUNRLElBQUksQ0FDdkMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTCxRQUFRSyxJQUFJO2dCQUV4QyxNQUFNVixZQUFZTyxZQUNaTCxNQUFNSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ1csR0FBRyxDQUFDLENBQUNGLE9BQ3hCQSxLQUFLRyxJQUFJLEtBQUtMLFVBQVVLLElBQUksR0FBR1AsVUFBVUksUUFFM0M7dUJBQUlQLE1BQU1ILElBQUksQ0FBQ0MsU0FBUztvQkFBRUs7aUJBQVE7Z0JBQ3hDLE9BQU87b0JBQUUsR0FBR0gsS0FBSztvQkFBRUgsTUFBTTt3QkFBRSxHQUFHRyxNQUFNSCxJQUFJO3dCQUFFQztvQkFBVTtnQkFBRTtZQUMxRDtRQUVBLEtBQUs7WUFBb0I7Z0JBQ3JCLE1BQU1BLFlBQVlFLE1BQU1ILElBQUksQ0FBQ0MsU0FBUyxDQUFDYSxNQUFNLENBQzNDLENBQUNKLE9BQVNBLEtBQUtDLElBQUksS0FBS1AsT0FBT0csT0FBTyxDQUFDSSxJQUFJO2dCQUU3QyxPQUFPO29CQUFFLEdBQUdSLEtBQUs7b0JBQUVILE1BQU07d0JBQUUsR0FBR0csTUFBTUgsSUFBSTt3QkFBRUM7b0JBQVU7Z0JBQUU7WUFDeEQ7UUFFRjtZQUNJLE9BQU9FO0lBQ2Y7QUFDSjtBQUVBLFNBQVNZLGNBQWUsRUFBQ0MsUUFBUSxFQUFFO0lBQy9CLE1BQU0sQ0FBQ2IsT0FBT2MsU0FBUyxHQUFHcEIsaURBQVVBLENBQUNLLFNBQVNIO0lBQzlDLE1BQU1tQixRQUFRO1FBQUVmO1FBQU9jO0lBQVM7SUFDaEMscUJBQU8sOERBQUNuQixNQUFNcUIsUUFBUTtRQUFDRCxPQUFPQTtrQkFBUUY7Ozs7OztBQUMxQztBQUVBLGlFQUFlRCxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS1hcHAvLi91dGlscy9TdG9yZS5qc3g/NjY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgY2FydDogeyBjYXJ0SXRlbXM6IFtdIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdDQVJUX0FERF9JVEVNJzoge1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IG5ld0l0ZW0uc2x1Z1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gZXhpc3RJdGVtXG4gICAgICAgICAgICAgICAgPyBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gZXhpc3RJdGVtLm5hbWUgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdDQVJUX1JFTU9WRV9JVEVNJzoge1xuICAgICAgICAgICAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnICE9PSBhY3Rpb24ucGF5bG9hZC5zbHVnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIoIHtjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbiAgICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH1cbiAgICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlUHJvdmlkZXIiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNhcnQiLCJjYXJ0SXRlbXMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3SXRlbSIsInBheWxvYWQiLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInNsdWciLCJtYXAiLCJuYW1lIiwiZmlsdGVyIiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/Store.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();