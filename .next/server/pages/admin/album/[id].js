"use strict";
(() => {
var exports = {};
exports.id = 2216;
exports.ids = [2216];
exports.modules = {

/***/ 6947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAlbum),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1873);
/* harmony import */ var _components_Selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7352);
/* harmony import */ var _components_SharedForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4978);
/* harmony import */ var _components_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7065);
/* harmony import */ var _components_useUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1292);
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1454);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1331);
/* harmony import */ var _components_RequestCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5994);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5043);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_session__WEBPACK_IMPORTED_MODULE_5__, _components_ApolloClient__WEBPACK_IMPORTED_MODULE_10__]);
([_components_session__WEBPACK_IMPORTED_MODULE_5__, _components_ApolloClient__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const capitalize = (s)=>{
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};
const query = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
query Album ($id: ID!) {
  album(id: $id){
    id
    title
    subTitle
    releaseDate
    vgmdb
    description
    status
    platforms {
      value: id
      label: name
    }
    animations {
      value: id
      label: title
    }
    games {
      value: slug
      label: name
    }
    artists {
      slug
      name
    }
    categories {
      value: name
      label: name
    }
    classifications {
      value: name
      label: name
    }
    stores {
      url
      provider
    }
    discs {
      number
      body
    }
    related {
      value: id
      label: title
    }
  }

  categories {
    value: name
    label: name
  }
  classifications {
    value: name
    label: name
  } 
}
`;
const queryDownload = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
query downloads ($id: ID!) {
  downloads(id: $id) {
    id
    title
    small
    links {
      id
      url
      provider
      custom
      directUrl
    }
  }
}
`;
const getServerSideProps = (0,_components_session__WEBPACK_IMPORTED_MODULE_5__/* .withSessionSsr */ .f)(async ({ params , req  })=>{
    const { id  } = params;
    /* const {username} = req.session
  const user = username ? await db.models.user.findByPk(username) : null

  if (!user) return { redirect: { destination: '/500', permanent: false } } */ const client = (0,_components_ApolloClient__WEBPACK_IMPORTED_MODULE_10__/* .initializeApollo */ ["in"])();
    const { data  } = await client.query({
        query,
        variables: {
            id
        }
    });
    const { album , categories , classifications  } = data;
    if (album === null) return {
        redirect: {
            destination: "/404",
            permanent: false
        }
    };
    return {
        props: {
            id,
            album,
            categories,
            classifications
        } /*, revalidate: 60 */ 
    };
});
const mutation = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
    mutation updateAlbum(
      $id: ID!,
      $title: String,
      $subTitle: String,
      $cover: Upload,
      $releaseDate: String,
      $label: String,
      $description: String,
      $downloads: [DownloadInput],
      $artists: [String],
      $categories: [String],
      $classifications: [String],
      $platforms: [ID],
      $games: [String],
      $animations: [ID],
      $discs: [DiscInput],
      $related: [ID],
      $stores: [StoreInput],
      $vgmdb: String,
      $status: String!,
      $request: ID
    ){
      updateAlbum(
        id: $id,
        title: $title,
        subTitle: $subTitle,
        cover: $cover,
        releaseDate: $releaseDate,
        label: $label,
        description: $description,
        downloads: $downloads,
        artists: $artists,
        categories: $categories,
        classifications: $classifications,
        platforms: $platforms,
        games: $games,
        animations: $animations
        discs: $discs,
        related: $related,
        stores: $stores,
        vgmdb: $vgmdb,
        status: $status,
        request: $request
      ){ id }
    } 
  `;
const vgmQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
  query ($search: String!){
    vgmdb(search: $search){
      vgmdbUrl
      name
      subTitle
      releaseDate
      artists
      categories
      classifications
      tracklist {
        number
        body
      }
    }
  }
`;
function EditAlbum(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
        fluid: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                    xs: 2,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_7__/* .Navigation */ .W_, {
                        title: "Edit"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                    xs: 10,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EditAlbumForm, {
                            ...props
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_7__/* .SharedForms */ .sH, {})
                    ]
                })
            ]
        })
    });
};
function EditAlbumForm({ id , album , categories , classifications  }) {
    const { 0: currentCategories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(album.categories || []);
    const { 0: currentClassifications , 1: setClassifications  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(album.classifications || []);
    const { 0: vgmTracklist , 1: setVgmTracklist  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(album.discs || []);
    const [mutate, { loading  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(mutation);
    const { user  } = (0,_components_useUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(queryDownload, {
        variables: {
            id
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>refetch({
            id
        }), [
        user,
        id,
        refetch
    ]);
    const [getVgmdb, { loading: loadingFetch  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(vgmQuery);
    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const releaseRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const vgmdbRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const subTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const artistsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    function handleSubmitForm(e) {
        e.persist();
        e.preventDefault();
        const formData = (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .prepareForm */ .ar)(e);
        formData.id = album.id;
        mutate({
            mutation,
            variables: formData
        }).then((results)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(`Updated "${formData.title}" succesfully!`);
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
            const { vgmdbUrl , name , subTitle , releaseDate , artists , categories , classifications , tracklist  } = vgmdb;
            releaseRef.current.value = releaseDate;
            vgmdbRef.current.value = vgmdbUrl;
            titleRef.current.value = name;
            subTitleRef.current.value = subTitle;
            artistsRef.current.value = artists.join(",");
            setCategories(categories);
            setClassifications(classifications);
            setVgmTracklist(tracklist);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "addAlbum",
                className: "mb-2 mt-3",
                children: [
                    "Editing ",
                    `"${album.title}"`,
                    " (",
                    album.id,
                    ")"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
                className: "site-form blackblock",
                onSubmit: handleSubmitForm,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "title",
                                            children: "Title:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            ref: titleRef,
                                            h: true,
                                            required: true,
                                            type: "text",
                                            name: "title",
                                            defaultValue: album.title
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "subTitle",
                                            children: "Sub Title:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            ref: subTitleRef,
                                            as: "textarea",
                                            name: "subTitle",
                                            defaultValue: album.subTitle
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "releaseDate",
                                            children: "Release Date:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            ref: releaseRef,
                                            required: true,
                                            type: "date",
                                            name: "releaseDate",
                                            defaultValue: album.releaseDate
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 3,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "label",
                                            children: "Label:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            type: "text",
                                            name: "label",
                                            defaultValue: album.label
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        className: "mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                        htmlFor: "status",
                                        children: "Status:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .SimpleSelector */ .d7, {
                                        isSingle: true,
                                        required: true,
                                        name: "status",
                                        defaultValue: {
                                            value: album.status,
                                            label: capitalize(album.status)
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "title",
                                            children: "Description:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            as: "textarea",
                                            name: "description",
                                            defaultValue: album.description
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "cover",
                                            children: "Cover:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            name: "cover",
                                            type: "file",
                                            accept: "image/*"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 6,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "vgmdb",
                                            children: "VGMdb:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            ref: vgmdbRef,
                                            defaultValue: album.vgmdb,
                                            name: "vgmdb",
                                            type: "text"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                className: "mt-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_13__/* .ButtonLoader */ .l, {
                                    color: "primary",
                                    loading: loadingFetch,
                                    onClick: fetchInfo,
                                    children: "Fetch info"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "artists",
                                            children: "Artists:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
                                            ref: artistsRef,
                                            name: "artists",
                                            as: "textarea",
                                            defaultValue: album.artists.map((a)=>a.name).join(",")
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "categories",
                                            children: "Categories:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .SimpleSelector */ .d7, {
                                            defaultValue: album.categories,
                                            required: true,
                                            name: "categories",
                                            options: categories,
                                            onChange: (values)=>setCategories(values)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "classifications",
                                            children: "Classifications:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .SimpleSelector */ .d7, {
                                            required: true,
                                            name: "classifications",
                                            defaultValue: currentClassifications,
                                            options: classifications,
                                            onChange: (values)=>setClassifications(values)
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "games",
                                            children: "Games:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .GameSelector */ .D_, {
                                            options: {
                                                defaultValue: album.games,
                                                name: "games"
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "platforms",
                                            children: "Platforms:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .PlatformSelector */ .J3, {
                                            categories: currentCategories.map((c)=>c.value),
                                            options: {
                                                defaultValue: album.platforms,
                                                name: "platforms"
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                                md: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                            htmlFor: "animations",
                                            children: "Animations:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .AnimSelector */ .S7, {
                                            options: {
                                                defaultValue: album.animations,
                                                name: "animations"
                                            }
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            md: 12,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {
                                        htmlFor: "related",
                                        children: "Related albums:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Selectors__WEBPACK_IMPORTED_MODULE_6__/* .AlbumSelector */ .Q$, {
                                        options: {
                                            defaultValue: album.related,
                                            name: "related"
                                        }
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_7__/* .DiscList */ .r8, {
                        defaults: vgmTracklist
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_7__/* .StoreDownloads */ .rL, {
                        defaults: album.stores
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestCheck__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        element: vgmdbRef.current
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "style2 style-white"
                    }),
                    data && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SharedForms__WEBPACK_IMPORTED_MODULE_7__/* .Downloads */ .ie, {
                        defaults: data.downloads
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
                            className: "m-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SubmitButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                loading: loading,
                                type: "submit",
                                color: "primary",
                                children: "Save Changes"
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

/***/ 3706:
/***/ ((module) => {

module.exports = import("apollo-upload-client");;

/***/ }),

/***/ 5822:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9311,910,5675,9463,1331,1454,5043,923,9665,683], () => (__webpack_exec__(6947)));
module.exports = __webpack_exports__;

})();