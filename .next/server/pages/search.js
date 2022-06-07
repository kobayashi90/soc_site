"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603,2888];
exports.modules = {

/***/ 5935:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7801);
/* harmony import */ var _styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(599);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9738);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_useTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_useTranslation__WEBPACK_IMPORTED_MODULE_11__]);
_components_useTranslation__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const limit = 30;
const queryHeader = "query Search($title: String!, $limit: Int!, $page: Int!)";
async function getServerSideProps(context) {
    const { locale  } = context;
    const localeStrings = await (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_11__/* .getTranslation */ .i)(locale);
    return {
        props: {
            localeStrings
        }
    };
}
function Search() {
    const t = (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const search = router.query.q;
    const categories = {
        byTitle: {
            query: "searchAlbum(title: $title, limit: $limit, page: $page){ count, items: rows { id, title, classes { name }, releaseDate, placeholder } }",
            title: t("Albums"),
            type: "album"
        },
        byArtist: {
            query: "searchAlbumByArtist(name: $title, limit: $limit, page: $page){ count, items: rows { id, title, classes { name }, releaseDate, placeholder } }",
            title: `${t("Albums")} (${"by artists"})`,
            type: "album"
        },
        games: {
            query: "searchGame(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name, releaseDate, placeholder } }",
            title: t("Games"),
            type: "game"
        },
        studios: {
            query: "searchStudio(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name } }",
            title: t("Studios")
        },
        anims: {
            query: "searchAnimation(title: $title, limit: $limit, page: $page){ count, items: rows { id, title, releaseDate, placeholder } }",
            title: t("Animations"),
            type: "anim"
        },
        series: {
            query: "searchSeries(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name, placeholder } }",
            title: t("Series"),
            type: "series"
        }
    };
    const initialState = {};
    Object.keys(categories).forEach((name)=>{
        initialState[name] = false;
    });
    const query = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  ${queryHeader}{
    byTitle: ${categories.byTitle.query}
    byArtist: ${categories.byArtist.query}
    games: ${categories.games.query}
    studios: ${categories.studios.query}
    anims: ${categories.anims.query}
    series: ${categories.series.query}
  }
  `;
    const [getInitial, { data , loading: initialLoad  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(query, {
        variables: {
            title: search,
            limit,
            page: 0
        }
    });
    const { 0: loadingState , 1: setLoadingState  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(initialState);
    const setLoading = (name, value)=>setLoadingState({
            ...loadingState,
            [name]: value
        });
    const loading = initialLoad || Object.values(loadingState).some((c)=>c.loading);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (search) getInitial();
    }, [
        search,
        getInitial
    ]);
    if (!search) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        className: "h-100 bg-dark",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            md: 12,
                            className: "my-1 px-4 py-3",
                            style: {
                                backgroundColor: "#33353e"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "searchTitle",
                                children: [
                                    t("Search Results for"),
                                    ": ",
                                    router.query.q
                                ]
                            })
                        })
                    }),
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                className: "mx-auto my-2"
                            })
                        })
                    }),
                    data && Object.entries(categories).map(([name, value])=>categories[name] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchSection, {
                            search: search,
                            category: name,
                            ...value,
                            ...data[name],
                            setLoading: setLoading
                        }, name))
                ]
            })
        })
    });
};
function SearchSection(props) {
    const { count: initialCount , title , items: initialItems , type , search , category , query , setLoading  } = props;
    const { 0: initialized , 1: setInit  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: items , 1: setItems  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(initialItems);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);
    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(initialCount);
    const [getInfo] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
      ${queryHeader}{
        result: ${query}
      }
    `, {
        onCompleted: (data)=>{
            setLoading(category, false);
            setItems(data.result.items);
        },
        onError: (err)=>{
            console.log(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Failed to fetch some results");
            setCount(0);
        }
    });
    const start = page * limit;
    const calculatedEnd = start + limit;
    const end = count < calculatedEnd ? count : calculatedEnd;
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (initialized) {
            setLoading(category, true);
            getInfo({
                variables: {
                    title: search,
                    limit,
                    page
                }
            });
        } else setInit(true);
    }, [
        page
    ]);
    return count > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                className: "mb-1 mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                        md: "auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            children: [
                                title,
                                " (",
                                count > limit ? `${start + 1} - ${end}` : count,
                                ")"
                            ]
                        })
                    }),
                    count > limit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                        md: "auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav, {
                            children: Array.from(Array(Math.ceil(count / limit)), (x, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
                                    disabled: page === i,
                                    onClick: ()=>setPage(i),
                                    className: "py-0 px-2",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: i + 1
                                    })
                                }, i))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: `/${type}/${item.id}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            md: 6,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_12___default().result), "mx-1 d-flex flex-row mb-3"),
                                children: [
                                    type && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                        md: "auto",
                                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_styles_Search_module_scss__WEBPACK_IMPORTED_MODULE_12___default().cover), "px-0"),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            objectFit: "contain",
                                            alt: item.title,
                                            src: (0,_components_utils__WEBPACK_IMPORTED_MODULE_8__/* .getImageUrl */ .Jn)(item.id, type),
                                            width: 180,
                                            height: 180,
                                            placeholder: "blur",
                                            blurDataURL: item.placeholder
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                        className: "p-2 px-4 my-auto",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                children: item.title
                                            }),
                                            item.releaseDate && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "card-text mt-2",
                                                children: item.releaseDate
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, item.id))
            })
        ]
    }) : null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 684:
/***/ ((module) => {

module.exports = require("form-serialize");

/***/ }),

/***/ 2748:
/***/ ((module) => {

module.exports = require("luxon");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 4932:
/***/ ((module) => {

module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ 3082:
/***/ ((module) => {

module.exports = require("react-ga");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3673:
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ }),

/***/ 3706:
/***/ ((module) => {

module.exports = import("apollo-upload-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,5675,9505,1664,599,2102,9738,2225,7119], () => (__webpack_exec__(5935)));
module.exports = __webpack_exports__;

})();