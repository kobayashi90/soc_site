exports.id = 9738;
exports.ids = [9738];
exports.modules = {

/***/ 7801:
/***/ ((module) => {

// Exports
module.exports = {
	"result": "Search_result__EgNgJ",
	"cover": "Search_cover__7Boi4",
	"spin": "Search_spin__km_on"
};


/***/ }),

/***/ 9738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ ButtonLoader),
  "Z": () => (/* binding */ Loader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/svg-loaders/svg-smil-loaders/oval.svg
var oval = __webpack_require__(5630);
// EXTERNAL MODULE: ./styles/Search.module.scss
var Search_module = __webpack_require__(7801);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
;// CONCATENATED MODULE: ./public/img/assets/clouds.png
/* harmony default export */ const clouds = ({"src":"/_next/static/media/clouds.6cb49613.png","height":1391,"width":1353,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBUlEQVR42h2PzysEYQBAvxyUi1J7cHLlKzlo2z+Bgz+ApBy15SCsHWZ3ZyZC5MKswxb2JiS3lbSbr0QuDlMOIgcXt8mPZu1M5numPbx6h3d5AhDYGakLUulCf6TNhMSx0xIQAmtY6lyHHy8K9FI3Op8iznUm3uVTGpJC53sU+9NwmA3ZHYftMShPhrhTSZRSArMv+qka3LkGnxdbfJ1v8Fgp8XswD046agdNZ5Sau0nDLVIvWzQqO/ytjkBxIAmMlIqtDK3705CHE0gIb4/D2ByE5V4lyAr5vTbjr9y0eL2q8XJ9iVMPaNoTPnNCCkB462dy9iNQR95TVPWeo4X3QL2Ze+3Nf+q+rZExgOA+AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./components/Loader.jsx







function Loader(props) {
    const { className ="" , style ={} , size =150  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (Search_module_default()).spin),
        style: {
            ...style,
            height: size,
            width: size
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            layout: "responsive",
            height: size,
            width: size,
            alt: "loading",
            src: clouds
        })
    });
};
const ButtonLoader = (props)=>{
    const { loading , text  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
        ...props,
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            ...oval/* default */.Z,
            alt: "loading"
        }) : text
    });
};


/***/ })

};
;