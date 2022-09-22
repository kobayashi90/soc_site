exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 3985:
/***/ ((module) => {

// Exports
module.exports = {
	"a": "Search_a__nDmgQ",
	"result": "Search_result__EgNgJ",
	"cover": "Search_cover__7Boi4",
	"spin": "Search_spin__km_on"
};


/***/ }),

/***/ 5043:
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
var oval = __webpack_require__(9437);
// EXTERNAL MODULE: ./styles/Search.module.scss
var Search_module = __webpack_require__(3985);
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


/***/ }),

/***/ 7352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ RequestSelector),
/* harmony export */   "D_": () => (/* binding */ GameSelector),
/* harmony export */   "J3": () => (/* binding */ PlatformSelector),
/* harmony export */   "Q$": () => (/* binding */ AlbumSelector),
/* harmony export */   "S7": () => (/* binding */ AnimSelector),
/* harmony export */   "cZ": () => (/* binding */ PublisherSelector),
/* harmony export */   "d7": () => (/* binding */ SimpleSelector),
/* harmony export */   "ln": () => (/* binding */ StudioSelector),
/* harmony export */   "ov": () => (/* binding */ SeriesSelector)
/* harmony export */ });
/* unused harmony export BaseSelector */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2820);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_select_component__WEBPACK_IMPORTED_MODULE_3__);




const limit = 10;
const valueRenderer = (selected, _options)=>{
    return selected.length ? selected.map(({ label  })=>label).join(", ") : "Select...";
};
function HiddenInputs(props) {
    const { isSingle =false , value =[] , required =false , name  } = props;
    return isSingle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: value[0] ? value[0].value : "",
        name: name,
        required: required,
        hidden: true,
        readOnly: true
    }) : value.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            value: s.value,
            name: name ? `${name}[]` : undefined,
            hidden: true,
            readOnly: true
        }, s.value));
}
function BaseSelector(props) {
    const { startQuery , changeQuery , rowsFn , options: selectorOptions = {}  } = props;
    const { defaultValue , isSingle =false , required =false , loading: loadingProp = false , name , onChange  } = selectorOptions;
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useApolloClient)();
    const stubElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue || []);
    const filterOptions = async (_, filter)=>{
        setLoading(true);
        const { data  } = await client.query({
            query: filter.length === 0 && startQuery ? startQuery : changeQuery,
            variables: {
                filter,
                limit
            }
        });
        setOptions(getOptions(data));
        setLoading(false);
        return _;
    };
    const getOptions = (data)=>data ? rowsFn ? rowsFn(data[Object.keys(data)[0]]) : data[Object.keys(data)[0]] : [];
    const onChangeFn = (items = [])=>{
        const result = isSingle ? items.slice(-1) : items;
        if (onChange) onChange(isSingle ? result[0] : result);
        setValue(result);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const form = stubElement.current.closest("form");
        form?.addEventListener("reset", ()=>setValue(defaultValue || []));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (startQuery) {
            setLoading(true);
            client.query({
                query: startQuery,
                variables: {
                    limit
                }
            }).then(({ data  })=>setOptions(getOptions(data))).finally(()=>setLoading(false));
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultValue) setValue(isSingle ? [
            defaultValue
        ] : defaultValue);
    }, [
        defaultValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: stubElement,
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_multi_select_component__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
                valueRenderer: valueRenderer,
                filterOptions: filterOptions,
                onChange: onChangeFn,
                hasSelectAll: !isSingle,
                isLoading: loading || loadingProp,
                value: value,
                options: options
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenInputs, {
                isSingle: isSingle,
                required: required,
                value: value,
                name: name
            })
        ]
    });
}
function SimpleSelector(props) {
    const { isSingle =false , defaultValue =isSingle ? undefined : [] , required =false , name ="" , onChange  } = props;
    const stubElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue || []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const form = stubElement.current.closest("form");
        form?.addEventListener("reset", ()=>setValue(defaultValue));
    }, []);
    const onChangeFn = (items = [])=>{
        const result = isSingle ? items.slice(-1) : items;
        if (onChange) onChange(isSingle ? result[0] : result);
        setValue(result);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (defaultValue) setValue(isSingle ? [
            defaultValue
        ] : defaultValue);
    }, [
        defaultValue,
        isSingle
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: stubElement,
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_multi_select_component__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, {
                valueRenderer: valueRenderer,
                hasSelectAll: !isSingle,
                ...props,
                onChange: onChangeFn,
                value: value
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenInputs, {
                isSingle: isSingle,
                required: required,
                value: value,
                name: name
            })
        ]
    });
}
function AlbumSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: (data)=>data.rows,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int){
          searchAlbum(limit: $limit, status: ["show", "hidden", "coming"]) {
            rows {
              value: id
              label: title
            }
          }
        }
      `,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchAlbum(title: $filter, status: ["show", "hidden", "coming"]) {
            rows {
              value: id
              label: title
            }
          }
        }
      `
    });
}
function StudioSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: (data)=>data.rows,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int){
          searchStudio(limit: $limit) {
            rows {
              value: slug
              label: name
            }
          }
        }
      `,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchStudio(name: $filter) {
            rows {
              value: slug
              label: name
            }
          }
        }
      `
    });
}
function GameSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: (data)=>data.rows,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int){
          searchGame (limit: $limit) {
            rows{
              value: slug
              label: name
            }
          }
        }
      `,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchGame(name: $filter) {
            rows {
              value: slug
              label: name
            }
          }
        }
      `
    });
}
function AnimSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: (data)=>data.rows,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int!){
          searchAnimation(limit: $limit, order: "createdAt", mode: "DESC") {
            rows{
              value: id
              label: title
            }
          }
        }
      `,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchAnimation(title: $filter) {
            rows {
              value: id
              label: title
            }
          }
        }
      `
    });
}
function SeriesSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int!){
          recentSeries(limit: $limit) {
            value: slug
            label: name
          }
        }
      `,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchSeriesByName(name: $filter) {
            value: slug
            label: name
          }
        }
      `
    });
}
function PublisherSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($limit: Int!){
          recentPublishers(limit: $limit) {
            value: id
            label: name
          }
        }`,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String){
          searchPublishersByName(name: $filter) {
            value: id
            label: name
          }
        }`
    });
}
function PlatformSelector(props) {
    const { categories =[]  } = props;
    const mapCategories = `[${categories.map((c)=>`"${c}"`).join(",")}]`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String) {
          searchPlatformsByName(name: $filter, categories: ${mapCategories}) {
            value: id
            label: name
          }
        }
      `
    });
}
function RequestSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: (data)=>data.rows,
        startQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query {
          searchRequests (state: ["pending"], donator: [false]) {
            rows {
              value: id
              label: title
            }
          }
        }`,
        changeQuery: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        query ($filter: String) {
          searchRequests (state: ["pending", "hold"], filter: $filter) {
            rows {
              value: id
              label: title
            }
          }
        }`
    });
}


/***/ })

};
;