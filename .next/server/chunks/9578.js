exports.id = 9578;
exports.ids = [9578];
exports.modules = {

/***/ 5841:
/***/ ((module) => {

// Exports
module.exports = {
	"albumBoxContainer": "AlbumBoxes_albumBoxContainer___5OUW",
	"anim": "AlbumBoxes_anim__Xn34t",
	"albumBox": "AlbumBoxes_albumBox__qjbi0",
	"img": "AlbumBoxes_img__gFWAG",
	"coming": "AlbumBoxes_coming__jiMAE"
};


/***/ }),

/***/ 9578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AlbumBoxList),
/* harmony export */   "Z": () => (/* binding */ AlbumBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5841);
/* harmony import */ var _styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1331);








function AlbumBox(props) {
    const { id , title , type ="album" , status , height =300 , width =300 , placeholder , style  } = props;
    const coming = status === "coming";
    const blurDataURL = placeholder || _utils__WEBPACK_IMPORTED_MODULE_6__/* .PLACEHOLDER */ .l7;
    const BoxContent = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().img),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        alt: title,
                        src: (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .getImageUrl */ .Jn)(id, type),
                        layout: "responsive",
                        width: width,
                        height: height,
                        placeholder: "blur",
                        blurDataURL: blurDataURL
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-wrap text-center p-2",
                    children: coming ? "Coming Soon" : title
                })
            ]
        });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().albumBox), {
            [(_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().coming)]: coming
        }),
        style: style,
        children: coming ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxContent, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: `/${type}/${id}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxContent, {})
        })
    });
}
function AlbumBoxList(props) {
    const { items , type , width , height , style , colProps ={}  } = props;
    return items.map((albumProps)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
            ...colProps,
            key: albumProps.id,
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default().albumBoxContainer), (_styles_AlbumBoxes_module_scss__WEBPACK_IMPORTED_MODULE_7___default())[type], "px-1 mb-2")
        }, /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlbumBox, {
            ...albumProps,
            style: style,
            type: type,
            width: width,
            height: height
        })));
}


/***/ })

};
;