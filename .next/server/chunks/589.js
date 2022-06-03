"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2820);
/* harmony import */ var react_multi_select_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_select_component__WEBPACK_IMPORTED_MODULE_4__);





const valueRenderer = (selected, _options)=>{
    return selected.length ? selected.map(({ label  })=>label).join(", ") : "Select...";
};
const runError = (err)=>{
    if (!err) return;
    console.log(err);
    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Selector: Failed to fetch server info");
};
function HiddenInputs(props) {
    const { isSingle =false , selected =isSingle ? {} : [] , required =false , name =""  } = props;
    return isSingle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        value: selected.value,
        name: name,
        required: required,
        hidden: true,
        readOnly: true
    }) : selected.map((s)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            value: s.value,
            name: `${name}[]`,
            hidden: true,
            readOnly: true
        }, s.value));
}
function BaseSelector(props) {
    const { isSingle =false , required =false , onChange , loading: loadingProp = false  } = props;
    const { startQuery , changeQuery , defaultValue =isSingle ? undefined : [] , name =""  } = props;
    const { rowsFn  } = props;
    const { 0: options , 1: setOptions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue || []);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    const stubElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const value = isSingle ? selected ? [
        selected
    ] : [] : selected;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const form = stubElement.current.closest("form");
        form?.addEventListener("reset", ()=>setSelected(defaultValue));
    }, []);
    const { data: dataInitial , error: initialError , loading: loadingInitial  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`${startQuery}`, {
        variables: {
            limit: 10
        }
    });
    const [getQuery, { data: data1 , error , loading  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`${changeQuery}`);
    const getOptions = (data)=>data ? rowsFn ? rowsFn(data[Object.keys(data)[0]]) : data[Object.keys(data)[0]] : [];
    const filterOptions = (_, filter)=>{
        if (filter.length > 0) getQuery({
            variables: {
                filter
            }
        });
        return _;
    };
    const onChangeFn = (items = [])=>{
        const result = isSingle ? items[items.length - 1] : items;
        if (onChange) onChange(result);
        setSelected(result);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>runError(initialError), [
        initialError
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>runError(error), [
        error
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!dataInitial && !data1) return;
        const searchOptions = data1 ? getOptions(data1) : getOptions(dataInitial);
        const currentOptions = value.filter((o)=>!searchOptions.includes(o.value));
        setOptions([
            ...currentOptions,
            ...searchOptions
        ]);
    }, [
        dataInitial,
        data1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: stubElement,
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_multi_select_component__WEBPACK_IMPORTED_MODULE_4__.MultiSelect, {
                valueRenderer: valueRenderer,
                filterOptions: filterOptions,
                onChange: onChangeFn,
                hasSelectAll: !isSingle,
                isLoading: loading || loadingInitial || loadingProp,
                value: value,
                options: options
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenInputs, {
                isSingle: isSingle,
                required: required,
                selected: selected,
                name: name
            })
        ]
    });
}
function SimpleSelector(props) {
    const { isSingle =false , defaultValue =isSingle ? undefined : [] , required =false , name ="" , onChange  } = props;
    const stubElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: selected , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultValue);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const form = stubElement.current.closest("form");
        form?.addEventListener("reset", ()=>setSelected(defaultValue));
    }, []);
    const onChangeFn = (items = [])=>{
        const result = isSingle ? items[items.length - 1] : items;
        setSelected(result);
        if (onChange) onChange(result);
    };
    const value = isSingle ? selected ? [
        selected
    ] : [] : selected;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: stubElement,
                style: {
                    display: "none"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_multi_select_component__WEBPACK_IMPORTED_MODULE_4__.MultiSelect, {
                valueRenderer: valueRenderer,
                hasSelectAll: !isSingle,
                ...props,
                onChange: onChangeFn,
                value: value
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenInputs, {
                isSingle: isSingle,
                required: required,
                selected: selected,
                name: name
            })
        ]
    });
}
function AlbumSelector(props) {
    const rowsFn = (data)=>data.rows;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: rowsFn,
        startQuery: `
        query ($limit: Int){
          searchAlbum(limit: $limit, status: ["show", "hidden", "coming"]) {
            rows {
              value: id
              label: title
            }
          }
        }
      `,
        changeQuery: `
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
    const rowsFn = (data)=>data.rows;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: rowsFn,
        startQuery: `
        query ($limit: Int){
          searchStudio(limit: $limit) {
            rows {
              value: slug
              label: name
            }
          }
        }
      `,
        changeQuery: `
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
    const rowsFn = (data)=>data.rows;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: rowsFn,
        startQuery: `
        query ($limit: Int){
          searchGame (limit: $limit) {
            rows{
              value: slug
              label: name
            }
          }
        }
      `,
        changeQuery: `
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
    const rowsFn = (data)=>data.rows;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        rowsFn: rowsFn,
        startQuery: `
        query ($limit: Int!){
          searchAnimation(limit: $limit, order: "createdAt", mode: "DESC") {
            rows{
              value: id
              label: title
            }
          }
        }
      `,
        changeQuery: `
        query SearchAnimation($filter: String){
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
        startQuery: `
        query RecentSeries($limit: Int!){
          recentSeries(limit: $limit) {
            value: slug
            label: name
          }
        }
      `,
        changeQuery: `
        query SearchSeries($filter: String){
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
        startQuery: `
        query ($limit: Int!){
          recentPublishers(limit: $limit) {
            value: id
            label: name
          }
        }`,
        changeQuery: `
        query ($filter: String){
          searchPublishersByName(name: $filter) {
            value: id
            label: name
          }
        }`
    });
}
function PlatformSelector(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BaseSelector, {
        ...props,
        startQuery: `
        query ($limit: Int!){
          recentPlatforms(limit: $limit, type: "${props.type}") {
            value: id
            label: name
          }
        }
      `,
        changeQuery: `
        query ($filter: String){
          searchPlatformsByName(name: $filter, type: "${props.type}") {
            value: id
            label: name
          }
        }
      `
    });
}


/***/ }),

/***/ 9503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ withSessionSsr)
/* harmony export */ });
/* unused harmony export withSessionApi */
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);
iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const options = {
    password: process.env.IRONCLAD,
    cookieName: "socuser"
};
const withSessionApi = (handler)=>withIronSessionApiRoute(handler, options);
const withSessionSsr = (handler)=>(0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__/* .withIronSessionSsr */ .c)(handler, options);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;