exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AlbumBoxList)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2598);
/* harmony import */ var _styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3080);
/* harmony import */ var _styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function AlbumBox(props) {
  const {
    id,
    title,
    type = 'album',
    coming = false
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
    href: `/${type}/${id}`,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5___default().albumBox), {
        [(_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5___default().coming)]: coming
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_5___default().img),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
          alt: title,
          src: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getImageUrl */ .J)(id, type),
          layout: "responsive",
          width: 300,
          height: 300
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "text-wrap text-center px-1 py-2",
        children: coming ? 'Coming Soon' : title
      })]
    })
  });
}
function AlbumBoxList({
  xs,
  md,
  items
}) {
  return items.map(props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Col, {
    xs: xs,
    md: md,
    className: "px-1 mb-3",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AlbumBox, _objectSpread({}, props))
  }, props.id));
}

/***/ }),

/***/ 2598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ getImageUrl)
/* harmony export */ });
const getImageUrl = (id, type = 'album') =>  false ? 0 : `https://beta.sittingonclouds.net/live/${type}/${id}.png`;

/***/ }),

/***/ 3080:
/***/ ((module) => {

// Exports
module.exports = {
	"albumBox": "AlbumBoxes_albumBox__19Sjj",
	"img": "AlbumBoxes_img__9QJdJ",
	"coming": "AlbumBoxes_coming__1lGpA"
};


/***/ })

};
;