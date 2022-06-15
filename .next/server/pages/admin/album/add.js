"use strict";
(() => {
var exports = {};
exports.id = 2490;
exports.ids = [2490];
exports.modules = {

/***/ 2628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SubmitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_loaders_svg_smil_loaders_oval_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5630);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);





function SubmitButton(props) {
    return props.loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: props.type,
        variant: "primary",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, "py-0"),
        disabled: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
            alt: "",
            ...svg_loaders_svg_smil_loaders_oval_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            height: 35,
            width: 35
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: props.type,
        variant: "primary",
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className),
        onClick: props.onClick,
        children: props.children
    });
};


/***/ }),

/***/ 7287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddAlbumPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9675);
/* harmony import */ var _components_SharedForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8046);
/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2628);
/* harmony import */ var _components_resolvers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3551);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(599);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_resolvers__WEBPACK_IMPORTED_MODULE_8__]);
_components_resolvers__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const getServerSideProps = (0,_components_resolvers__WEBPACK_IMPORTED_MODULE_8__/* .hasRolePage */ .yg)([
    "CREATE"
]);
function AddAlbumPage() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 2,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W_, {
                    title: "Add"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                xs: 10,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddAlbum, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_6__/* .SharedForms */ .sH, {})
                ]
            })
        ]
    });
};
const queryClasses = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
      query {
        categories {
          name
        }
        classes {
          name
        }     
      }
    `;
const mutation = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
    mutation createAlbum(
      $title: String,
      $subTitle: String,
      $cover: Upload,
      $releaseDate: String,
      $label: String,
      $description: String,
      $downloads: [DownloadInput],
      $artists: [String],
      $classes: [String],
      $categories: [String],
      $platforms: [ID],
      $games: [String],
      $animations: [ID],
      $discs: [DiscInput],
      $related: [ID],
      $stores: [StoreInput],
      $vgmdb: String,
      $status: String!
    ){
      createAlbum(
        title: $title,
        subTitle: $subTitle,
        cover: $cover,
        releaseDate: $releaseDate,
        label: $label,
        description: $description,
        downloads: $downloads,
        artists: $artists,
        classes: $classes,
        categories: $categories,
        platforms: $platforms,
        games: $games,
        animations: $animations
        discs: $discs,
        related: $related,
        stores: $stores,
        vgmdb: $vgmdb,
        status: $status
      )
      {
        id
      }
    }
  `;
const vgmQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`
  query ($search: String!){
    vgmdb(search: $search){
      vgmdbUrl
      name
      releaseDate
      categories
      classifications
      tracklist {
        number
        body
      }
    }
  }
`;
function AddAlbum(props) {
    const { 0: currentClasses , 1: setClasses  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: currentClassifications , 1: setClassifications  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: vgmTracklist , 1: setVgmTracklist  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { data: classData = {}  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(queryClasses);
    const [getVgmdb, { loading: loadingFetch  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(vgmQuery);
    const { classes =[] , categories: categories1 = []  } = classData;
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const releaseRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const vgmdbRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [addMutation, { loading  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(mutation, {
        refetchQueries: "searchAlbum"
    });
    async function handleSubmitForm(e) {
        e.persist();
        e.preventDefault();
        const data = (0,_components_utils__WEBPACK_IMPORTED_MODULE_9__/* .prepareForm */ .ar)(e);
        addMutation({
            variables: data
        }).then((results)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(`Added "${data.title}" succesfully!`);
            e.target.reset();
        }).catch((err)=>{
            console.log(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(err.message, {
                autoclose: false
            });
        });
    }
    async function fetchInfo() {
        const { data  } = await getVgmdb({
            variables: {
                search: vgmdbRef.current.value
            }
        });
        if (data?.vgmdb) {
            const { vgmdb  } = data;
            const { vgmdbUrl , name , releaseDate , categories , classifications , tracklist  } = vgmdb;
            releaseRef.current.value = releaseDate;
            vgmdbRef.current.value = vgmdbUrl;
            titleRef.current.value = name;
            setClasses(categories);
            setClassifications(classifications);
            setVgmTracklist(tracklist);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "addAlbum",
                className: "mb-2 mt-3",
                children: "Add Album"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
                className: "site-form blackblock",
                onSubmit: handleSubmitForm,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "title",
                                            children: "Title:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            ref: titleRef,
                                            required: true,
                                            type: "text",
                                            name: "title"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "subTitle",
                                            children: "Sub Title:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            as: "textarea",
                                            name: "subTitle"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "releaseDate",
                                            children: "Release Date:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            ref: releaseRef,
                                            required: true,
                                            type: "date",
                                            name: "releaseDate"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "label",
                                            children: "Label:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            type: "text",
                                            name: "label"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                        htmlFor: "status",
                                        children: "Status:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .SimpleSelector */ .d7, {
                                        isSingle: true,
                                        required: true,
                                        name: "status",
                                        defaultValue: {
                                            value: "show",
                                            label: "Show"
                                        },
                                        options: [
                                            "Show",
                                            "Hidden",
                                            "Coming"
                                        ].map((label)=>({
                                                label,
                                                value: label.toLowerCase()
                                            }))
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "title",
                                            children: "Description:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            as: "textarea",
                                            name: "description"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "cover",
                                            children: "Cover:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            required: true,
                                            name: "cover",
                                            type: "file",
                                            accept: "image/*"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "vgmdb",
                                            children: "VGMdb:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            ref: vgmdbRef,
                                            name: "vgmdb",
                                            type: "text"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                className: "mt-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_10__/* .ButtonLoader */ .l, {
                                    color: "primary",
                                    loading: loadingFetch,
                                    onClick: fetchInfo,
                                    children: "Fetch info"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "artists",
                                            children: "Artists:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                            name: "artists",
                                            as: "textarea"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "classes",
                                            children: "Classification:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .SimpleSelector */ .d7, {
                                            required: true,
                                            name: "classes",
                                            defaultValue: currentClasses.map((c)=>({
                                                    value: c,
                                                    label: c
                                                })),
                                            options: classes.map((c)=>({
                                                    value: c.name,
                                                    label: c.name
                                                })),
                                            onChange: (values)=>setClasses(values.map((v)=>v.value))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "categories",
                                            children: "Categories:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .SimpleSelector */ .d7, {
                                            required: true,
                                            name: "categories",
                                            defaultValue: currentClassifications.map((c)=>({
                                                    value: c,
                                                    label: c
                                                })),
                                            options: categories1.map((c)=>({
                                                    value: c.name,
                                                    label: c.name
                                                })),
                                            onChange: (values)=>setClassifications(values.map((v)=>v.value))
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "games",
                                            children: "Games:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .GameSelector */ .D_, {
                                            name: "games"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "platforms",
                                            children: "Platforms:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .PlatformSelector */ .J3, {
                                            classes: currentClasses,
                                            name: "platforms"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                            htmlFor: "animations",
                                            children: "Animations:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .AnimSelector */ .S7, {
                                            name: "animations"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            md: 12,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {
                                        htmlFor: "related",
                                        children: "Related OSTs:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_5__/* .AlbumSelector */ .Q$, {
                                        name: "related"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_6__/* .DiscList */ .r8, {
                        defaults: vgmTracklist
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_6__/* .StoreDownloads */ .rL, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_6__/* .Downloads */ .ie, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
                            className: "m-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                loading: loading,
                                type: "submit",
                                color: "primary",
                                children: "Add Album"
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4292:
/***/ ((module) => {

module.exports = require("apollo-server-errors");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 684:
/***/ ((module) => {

module.exports = require("form-serialize");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 2820:
/***/ ((module) => {

module.exports = require("react-multi-select-component");

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

/***/ 1454:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,5675,7014,599,9738,589,3551,8046], () => (__webpack_exec__(7287)));
module.exports = __webpack_exports__;

})();