exports.id = 8111;
exports.ids = [8111];
exports.modules = {

/***/ 522:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Sidebar_root__WlHvb",
	"socials": "Sidebar_socials__kDIkg"
};


/***/ }),

/***/ 8111:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(522);
/* harmony import */ var _styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(599);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9738);
/* harmony import */ var _AlbumBoxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6112);
/* harmony import */ var _useUser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2446);
/* harmony import */ var _useTranslation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useTranslation__WEBPACK_IMPORTED_MODULE_12__]);
_useTranslation__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function GetLucky() {
    const t = (0,_useTranslation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const query = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`
  query {
    getRandomAlbum {
      id
    }
  }
`;
    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(query);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(refetch, [
        router.pathname,
        refetch
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "mx-auto text-center my-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
            href: data ? `/album/${data.getRandomAlbum[0].id}` : "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "text-uppercase",
                children: t("Get Lucky")
            })
        })
    });
}
function Sidebar(props) {
    const { radio =false , index =false  } = props;
    const t = (0,_useTranslation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
        md: 3,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().root), "p-3 ms-md-auto d-flex flex-column col-md-3"),
        children: [
            index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                    className: "side-menu",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mx-auto text-center my-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#last-added",
                            children: t("Last Added_header")
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "side-menu",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GetLucky, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "side-menu mb-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mx-auto text-center my-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                        href: "/holy12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "text-uppercase",
                            children: t("Random Pull")
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                className: "px-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                    md: 12,
                    className: (_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().socials),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    className: "d-flex pe-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ms-auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.youtube.com/channel/UCb1Q0GuOa8p_7fY-pYnWCmQ",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "rounded",
                                                src: "/img/assets/yt.png",
                                                alt: "youtube",
                                                height: 50,
                                                width: 50
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                    className: "d-flex ps-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "me-auto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://twitter.com/SittingOnCloud",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: "rounded",
                                                src: "/img/assets/twitter.png",
                                                alt: "twitter",
                                                height: 50,
                                                width: 50
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            className: "mt-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 12,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "d-flex justify-content-center px-1",
                                    href: "https://discord.gg/x23SFbE",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "",
                                        style: {
                                            height: "auto",
                                            maxHeight: "100px",
                                            maxWidth: "100%",
                                            borderRadius: "10px"
                                        },
                                        src: "/img/assets/discord.png"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                            className: "mt-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 12,
                                className: "d-flex justify-content-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "https://ko-fi.com/sittingonclouds",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        style: {
                                            height: "auto",
                                            maxHeight: "100px",
                                            maxWidth: "100%"
                                        },
                                        alt: "ko-fi",
                                        src: "/img/assets/ko-fi-donate-button.png"
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AlbumCount, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Highlight, {}),
            radio && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().socials), "mt-3 p-2 mb-4"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    title: "radio",
                    frameBorder: "0",
                    style: {
                        height: "335px",
                        width: "100%"
                    },
                    src: "https://radio.sittingonclouds.net/widget"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Ad, {})
        ]
    });
};
function AlbumCount() {
    const t = (0,_useTranslation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const query = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`query {
    albumCount
    classes{
      name
      count
    }
  }`;
    const { data , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(query);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().socials), "mt-3"),
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: "mx-auto",
                size: 100
            }),
            data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                        className: "text-center text-uppercase",
                        style: {
                            fontWeight: 700
                        },
                        children: [
                            t("Soundtrack Count"),
                            ": ",
                            data.albumCount
                        ]
                    }),
                    data.classes.map(({ name , id , count  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                            className: "mt-2 text-center",
                            children: [
                                t(`${name} Soundtracks`),
                                ": ",
                                count
                            ]
                        }, i))
                ]
            })
        ]
    });
}
function Highlight() {
    const t = (0,_useTranslation__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const query = _apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql`query {
    highlight{
      id
      title
      placeholder
    }
  }`;
    const { data ={
        highlight: {}
    } , loading  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(query);
    const { id , title , placeholder  } = data.highlight;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_Sidebar_module_scss__WEBPACK_IMPORTED_MODULE_13___default().socials), "mt-3 p-1 mb-4"),
        children: [
            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: "mx-auto",
                size: 100
            }),
            id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "text-center text-uppercase py-1",
                        style: {
                            fontWeight: 700
                        },
                        children: t("Highlight Soundtrack")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AlbumBoxes__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        id: id,
                        title: title,
                        placeholder: placeholder,
                        xs: 12,
                        style: {
                            height: "auto"
                        }
                    })
                ]
            })
        ]
    });
}
function Ad() {
    const { user  } = (0,_useUser__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const iframe = iframeRef.current;
        if (!iframe) return;
        let t = "";
        t += window.location;
        t = t.replace(/#.*$/g, "").replace(/^.*:\/*/i, "").replace(/\./g, "[dot]").replace(/\//g, "[obs]").replace(/-/g, "[dash]");
        t = encodeURIComponent(encodeURIComponent(t));
        iframe.src = iframe.src.replace("iframe_banner", t);
    }, [
        iframeRef
    ]);
    return !(0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .skipAds */ .Lu)(user) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
        className: "flex-grow-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                ref: iframeRef,
                title: "play-asia",
                id: "id01_909824",
                src: "https://www.play-asia.com/38/190%2C000000%2Cnone%2C0%2C0%2C0%2C0%2CFFFFFF%2C000000%2Cleft%2C0%2C0-762s-70joq4-062-783c-29466-901vq93-33iframe_banner-44140px",
                style: {
                    height: "100%",
                    width: "100%",
                    borderStyle: "none",
                    borderWidth: "0px",
                    borderColor: "#000000",
                    padding: 0,
                    margin: 0,
                    scrolling: "no",
                    frameborder: 0
                }
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;