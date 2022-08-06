"use strict";
exports.id = 9665;
exports.ids = [9665];
exports.modules = {

/***/ 7352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 1873:
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