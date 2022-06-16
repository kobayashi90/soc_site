exports.id = 9738;
exports.ids = [9738];
exports.modules = {

/***/ 7801:
/***/ ((module) => {

// Exports
module.exports = {
	"a": "Search_a__nDmgQ",
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
/* harmony default export */ const clouds = ({"src":"/_next/static/media/clouds.6cb49613.png","height":1391,"width":1353,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXH/mk3/hjThnGz9yKr/fyj/eyT/fSL9eCj/eiKMaVPyfzbdgkv+fCX+eB/9dx7/iDX9dBr/eB+xf16CZlf4upCkclB32fByV0TEurfndi3VtaZz4PH9eCH/iz36jkSNwMWHtdjkj1d7vu4GkKrcAAAAHXRSTlMA+Nj+/fn2EyGv/uwuntTq/oSO/f74/rj+/f79yYCy1AUAAAAJcEhZcwAANdMAADXTAQwhQ3cAAABGSURBVAiZBcEFAoAgEATApY+wOw5Q//9HZwDy1jYOoI6ZuXXwReRe5AHmXZWaioQ59zAHlvBGa73wiBS/63iiA9Jd60b4AYEeA9S99jztAAAAAElFTkSuQmCC"});
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
    const { loading , children  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Button, {
        style: {
            position: "relative"
        },
        ...props,
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-100 w-100",
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-100 w-100",
                    style: {
                        position: "relative"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        layout: "fill",
                        objectFit: "contain",
                        ...oval/* default */.Z,
                        alt: "loading"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    visibility: loading ? "hidden" : "visible"
                },
                children: children
            })
        ]
    });
};


/***/ })

};
;