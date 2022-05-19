(() => {
var exports = {};
exports.id = 3847;
exports.ids = [3847,2888];
exports.modules = {

/***/ 7689:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Album_title__ZaGZL",
	"table": "Album_table__NGdRi",
	"content": "Album_content__ActvU",
	"stores": "Album_stores__OMIJi",
	"download": "Album_download__pH_5m",
	"direct": "Album_direct__br6xh"
};


/***/ }),

/***/ 5541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7689);
/* harmony import */ var _styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_useUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2446);
/* harmony import */ var _components_AlbumBoxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6112);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(599);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9738);
/* harmony import */ var _components_ApolloClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2102);
/* harmony import */ var _components_CommentsCarrousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9139);
/* harmony import */ var _components_useTranslation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ApolloClient__WEBPACK_IMPORTED_MODULE_13__, _components_CommentsCarrousel__WEBPACK_IMPORTED_MODULE_14__, _components_useTranslation__WEBPACK_IMPORTED_MODULE_15__]);
([_components_ApolloClient__WEBPACK_IMPORTED_MODULE_13__, _components_CommentsCarrousel__WEBPACK_IMPORTED_MODULE_14__, _components_useTranslation__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const query = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
query ($id: ID!) {
  album(id: $id){
    id
    title
    subTitle
    releaseDate
    vgmdb
    description
    placeholder
    headerColor
    status
    platforms {
      id
      name
    }
    animations {
      id
      title
    }
    games {
      slug
      name
    }
    artists {
      slug
      name
    }
    classes {
      name
    }
    categories {
      name
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
      id
      title
      placeholder
    }
    comments {
      text
      username
    }
    selfComment {
      text
    }
    favorites
  }
}
`;
const queryDownload = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
query downloads ($id: ID!) {
  downloads(id: $id){
    title
    small
    links{
      id
      url
      provider
      custom
      directUrl
    }
  }
}
`;
/* export async function getStaticPaths () {
  if (isGithub) return { paths: [], fallback: 'blocking' }

  const client = initializeApollo()
  const { data } = await client.query({
    query: gql`
      query searchAlbum($limit: Int, $page: Int ){
        searchAlbum(
          limit: $limit
          page: $page
        ){
          rows { id }
        }
      }
    `,
    variables: { limit: 40 }
  })

  const paths = data.searchAlbum.rows.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: 'blocking' }
} */ async function /* getStaticProps */ getServerSideProps(context) {
    const { params , locale  } = context;
    const { id  } = params;
    const client = (0,_components_ApolloClient__WEBPACK_IMPORTED_MODULE_13__/* .initializeApollo */ ["in"])();
    const { data  } = await client.query({
        query,
        variables: {
            id
        }
    });
    if (data.album === null || data.album.status !== "show") return {
        redirect: {
            destination: "/404",
            permanent: false
        }
    };
    const localeStrings = await (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_15__/* .getTranslation */ .i)(locale);
    return {
        props: {
            id,
            album: data.album,
            imageUrl: fullImage(data.album.id, 50),
            localeStrings
        }
    };
}
const fullImage = (id, quality = 75)=>`/_next/image?w=3840&q=${quality}&url=${(0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .getImageUrl */ .Jn)(id)}`
;
const favoriteTemplate = (query1)=>_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation ($ostId: String!) {
    ${query1}Favorite(ostId: $ostId)
  }
`
;
const addFavorite = favoriteTemplate("add");
const removeFavorite = favoriteTemplate("remove");
function Page(props) {
    const { id: id1 , album , imageUrl  } = props;
    const t = (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const { user  } = (0,_components_useUser__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { 0: loadingFavorite , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { data , loading , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(queryDownload, {
        variables: {
            id: id1
        }
    });
    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useApolloClient)();
    const getFavorite = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query ($ostId: ID!) {
    album(id: $ostId){
      isFavorite
    }
  }
`;
    const { data: dataFavorite , refetch: refetchFavorite  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(getFavorite);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>refetch({
            id: id1
        })
    , [
        user,
        id1,
        refetch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>refetchFavorite({
            ostId: id1
        })
    , [
        user,
        id1,
        refetchFavorite
    ]);
    function submitFavorite() {
        setLoading(true);
        client.mutate({
            mutation: dataFavorite.album.isFavorite ? removeFavorite : addFavorite,
            variables: {
                ostId: id1
            }
        }).then(()=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(t(dataFavorite.album.isFavorite ? "Favorite_Added" : "Favorite_Removed"))
        ).catch((err)=>{
            console.log(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error("Query failed");
        }).finally(()=>{
            setLoading(false);
            refetchFavorite();
            router.replace(router.asPath);
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().content),
                style: {
                    backgroundSize: "contain",
                    backgroundImage: `url("${fullImage(album.id, 90)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))`
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: album.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "theme-color",
                                content: album.headerColor
                            }, "color"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:url",
                                content: `/album/${album.id}`
                            }, "url"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:title",
                                content: album.title
                            }, "title"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:description",
                                content: album.subTitle || album.artists.map((a)=>a.name
                                ).join(" - ")
                            }, "desc"),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                property: "og:image",
                                content: imageUrl
                            }, "image")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        className: "p-0 px-md-5 pt-3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {
                            className: "px-0 px-md-5",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                            lg: 5,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                layout: "responsive",
                                                width: 300,
                                                height: 300,
                                                alt: album.title,
                                                src: (0,_components_utils__WEBPACK_IMPORTED_MODULE_11__/* .getImageUrl */ .Jn)(album.id),
                                                placeholder: "blur",
                                                blurDataURL: album.placeholder || _components_utils__WEBPACK_IMPORTED_MODULE_11__/* .PLACEHOLDER */ .l7
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                            lg: 7,
                                            className: "blackblock",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("text-center", (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title)),
                                                                children: album.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "text-center",
                                                                style: {
                                                                    whiteSpace: "pre-wrap"
                                                                },
                                                                children: album.subTitle
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                                                className: (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().table),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    className: "width-row",
                                                                                    children: t("Release Date")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: new Date(album.releaseDate).toLocaleString(undefined, {
                                                                                        day: "numeric",
                                                                                        month: "short",
                                                                                        year: "numeric"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.artists.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Artists")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: album.artists.map(({ id , name  })=>name
                                                                                    ).join(", ")
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Classification")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: [
                                                                                        album.classes.map(({ name  })=>t(`${name} Soundtrack`)
                                                                                        ).join(" & "),
                                                                                        album.categories.map(({ name  })=>name
                                                                                        ).join(", ")
                                                                                    ].filter((f)=>f !== ""
                                                                                    ).join(" - ")
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.label && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Published by")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                        className: "btn btn-link p-0",
                                                                                        href: `/publisher/${album.label}`,
                                                                                        children: album.label
                                                                                    })
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.platforms.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Platforms")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: album.platforms.map(({ id , name  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                                                                            children: [
                                                                                                id === "29" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "btn p-0",
                                                                                                    style: {
                                                                                                        color: "white"
                                                                                                    },
                                                                                                    children: name
                                                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    className: "btn btn-link p-0",
                                                                                                    href: `/platform/${id}`,
                                                                                                    children: name
                                                                                                }),
                                                                                                i !== album.platforms.length - 1 && ", "
                                                                                            ]
                                                                                        }, id)
                                                                                    )
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.games.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Games")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: album.games.map(({ slug , name  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    className: "btn btn-link p-0",
                                                                                                    href: `/game/${slug}`,
                                                                                                    children: name
                                                                                                }),
                                                                                                i !== album.games.length - 1 && ", "
                                                                                            ]
                                                                                        }, slug)
                                                                                    )
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.animations.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                                    children: t("Animations")
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                                    children: album.animations.map(({ id , title  }, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    className: "btn btn-link p-0",
                                                                                                    href: `/anim/${id}`,
                                                                                                    children: title
                                                                                                }),
                                                                                                i !== album.animations.length - 1 && ", "
                                                                                            ]
                                                                                        }, id)
                                                                                    )
                                                                                })
                                                                            ]
                                                                        }),
                                                                        album.favorites > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                                children: [
                                                                                    t("Favorite Score"),
                                                                                    ": ",
                                                                                    album.favorites,
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "ms-1 fas fa-star"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "text-center",
                                                            children: album.description
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_12__/* .ButtonLoader */ .l, {
                                                            loading: loadingFavorite,
                                                            onClick: dataFavorite ? submitFavorite : null,
                                                            className: "w-100 rounded-3",
                                                            variant: "outline-light",
                                                            style: {
                                                                fontSize: "18px"
                                                            },
                                                            text: t(dataFavorite ? dataFavorite.album.isFavorite ? "Favorite_Remove" : "Favorite_Add" : "Favorite_Login")
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TrackList, {
                                            discs: album.discs
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                            lg: 6,
                                            className: "blackblock px-10px",
                                            children: [
                                                album.vgmdb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        className: "mb-2 ml-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "Check album at",
                                                                    ":"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                className: "ms-2",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                href: album.vgmdb,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                    width: 100,
                                                                    height: 30,
                                                                    alt: "VGMdb",
                                                                    src: "/img/assets/vgmdblogo.png"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                album.stores.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    className: "mt-2 px-3",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        className: (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().stores),
                                                        style: {
                                                            paddingLeft: "15px",
                                                            paddingTop: "10px",
                                                            paddingRight: "15px",
                                                            paddingBottom: "10px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                className: "text-center homeTitle",
                                                                style: {
                                                                    fontSize: "30px"
                                                                },
                                                                children: t("Buy_Original")
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                                className: "style-white w-100 mt-0"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                                children: album.stores.map(({ url , provider  }, i)=>provider === "SOON" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                                        md: 6,
                                                                        className: "d-flex justify-content-center",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            href: url,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                                                className: "rounded",
                                                                                width: 190,
                                                                                height: 65,
                                                                                alt: provider,
                                                                                src: `/img/provider/${provider}.jpg`
                                                                            })
                                                                        })
                                                                    }, i)
                                                                )
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: "style-white w-100"
                                                }),
                                                loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            className: "mx-auto"
                                                        })
                                                    })
                                                }),
                                                data?.downloads.map(({ links , title , provider: provider1  }, di)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                                        md: 12,
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            className: "text-center download-txt mb-0",
                                                                            children: title
                                                                        })
                                                                    })
                                                                }),
                                                                links.map(({ id , url , custom , provider , directUrl  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                                                    md: 12,
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                                        className: "text-center",
                                                                                        children: provider
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                                                                className: "mx-auto mb-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                                                        className: "py-2",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                                            target: "_blank",
                                                                                            variant: "secondary",
                                                                                            className: (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().download),
                                                                                            href: url,
                                                                                            children: t("Download")
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                                                                        className: "py-2",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DirectButton, {
                                                                                            target: "_blank",
                                                                                            directUrl: directUrl
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }, id)
                                                                ),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                                    className: "style-white w-100"
                                                                })
                                                            ]
                                                        })
                                                    }, di)
                                                )
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CommentsCarrousel__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    ostId: id1,
                                    comments: album.comments
                                }),
                                album.related.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "blackblock m-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-center text-uppercase ost-title",
                                                    children: t("Related Soundtracks")
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                                            className: "justify-content-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AlbumBoxes__WEBPACK_IMPORTED_MODULE_10__/* .AlbumBoxList */ .X, {
                                                colProps: {
                                                    md: 3,
                                                    xs: 6
                                                },
                                                items: album.related
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
function DirectButton(props1) {
    const { directUrl  } = props1;
    const t = (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const disabled = directUrl === "/unauthorized";
    const renderTooltip = (props)=>disabled ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            ...props,
            id: (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().tooltip),
            children: t("Become_Donator")
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
    ;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.OverlayTrigger, {
        placement: "top",
        overlay: renderTooltip,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
            target: "_blank",
            variant: "secondary",
            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()((_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().download), (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().direct)),
            href: directUrl,
            disabled: disabled,
            children: t("Direct")
        })
    });
}
function TrackList(props) {
    const { discs  } = props;
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const t = (0,_components_useTranslation__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
        lg: 6,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "blackblock d-inline-block w-100",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("text-center text-uppercase", (_styles_Album_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title)),
                            children: t("Tracklist")
                        })
                    })
                }),
                discs.length > 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    style: {
                        transform: "translateY(2px)"
                    },
                    children: discs.map(({ number  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("text-center", {
                                "ps-0": i > 0,
                                "pe-0": i < discs.length - 1
                            }),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>setCurrent(number)
                                ,
                                className: "py-2",
                                style: {
                                    cursor: current === number ? "" : "pointer",
                                    borderStyle: "solid",
                                    borderWidth: "2px 2px 2px 2px",
                                    borderColor: "#efefef",
                                    borderRightStyle: discs.length - 1 === i ? "solid" : "hidden",
                                    borderBottomWidth: current === number ? "0px" : "2px"
                                },
                                children: [
                                    t("Disc"),
                                    " ",
                                    number + 1
                                ]
                            })
                        }, number)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                padding: "5px 5px 5px 5px",
                                borderStyle: "solid",
                                borderWidth: "2px 2px 2px 2px",
                                borderColor: "#efefef",
                                borderTopWidth: discs.length > 1 ? "0px" : "2px"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                cellSpacing: "0",
                                cellPadding: "1",
                                border: "0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: discs.length > 0 && discs[current].body.split("\n").map((track, i)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "smallfont",
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "label",
                                                        children: i + 1
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "smallfont",
                                                    width: "100%",
                                                    style: {
                                                        padding: "8px"
                                                    },
                                                    children: track
                                                })
                                            ]
                                        }, i);
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 684:
/***/ ((module) => {

"use strict";
module.exports = require("form-serialize");

/***/ }),

/***/ 2748:
/***/ ((module) => {

"use strict";
module.exports = require("luxon");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 4932:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ 3082:
/***/ ((module) => {

"use strict";
module.exports = require("react-ga");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3673:
/***/ ((module) => {

"use strict";
module.exports = require("slugify");

/***/ }),

/***/ 6153:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ }),

/***/ 3706:
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,1397,9505,1664,5675,2102,599,9738,2225,7119,6112,9139], () => (__webpack_exec__(5541)));
module.exports = __webpack_exports__;

})();