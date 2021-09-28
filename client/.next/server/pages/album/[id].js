(() => {
var exports = {};
exports.id = 847;
exports.ids = [847];
exports.modules = {

/***/ 8283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/ApolloClient.js
var ApolloClient = __webpack_require__(8685);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "url"
const external_url_namespaceObject = require("url");
var external_url_default = /*#__PURE__*/__webpack_require__.n(external_url_namespaceObject);
// EXTERNAL MODULE: ./styles/Album.module.scss
var Album_module = __webpack_require__(8044);
var Album_module_default = /*#__PURE__*/__webpack_require__.n(Album_module);
// EXTERNAL MODULE: ./components/AlbumBoxes.jsx
var AlbumBoxes = __webpack_require__(6184);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/album/[id].jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













async function getServerSideProps(context) {
  const client = (0,ApolloClient/* initializeApollo */.i)();
  const {
    id
  } = context.params;
  const {
    data
  } = await client.query({
    query: client_.gql`
      query Album ($id: ID!) {
        Album(id: $id){
          id
          title
          subTitle
          releaseDate
          vgmdb
          description
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
          downloads{
            title
            small
            links{
              url
              directUrl
              provider
              custom
            }
          }
          discs {
            number
            body
          }
          related {
            id
            title
          }
        }
      }
    `,
    variables: {
      id
    }
  });
  return {
    props: _objectSpread(_objectSpread({}, data), {}, {
      imageUrl: fullImage(data.Album.id, 75, context.req)
    })
  };
}

const fullImage = (id, quality = 75, req) => {
  const base = `/_next/image?url=${(0,AlbumBoxes/* getImageUrl */.Jn)(id)}&w=3840&q=${quality}`;
  return req ? external_url_default().format({
    protocol: req.protocol || 'http',
    host: req.headers.host,
    pathname: base
  }) : base;
};

function Page({
  Album,
  imageUrl
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: Album.title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: `/album/${Album.id}`
      }, 'url'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: Album.title
      }, 'title'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: Album.subTitle || Album.artists.map(a => a.name).join(' - ')
      }, 'desc'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: imageUrl
      }, 'image')]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
      className: external_classnames_default()((Album_module_default()).content, 'px-5 pt-3'),
      style: {
        backgroundImage: `url("${fullImage(Album.id, 100)}"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))`
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          lg: 5,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            layout: "responsive",
            width: 300,
            height: 300,
            alt: Album.title,
            src: (0,AlbumBoxes/* getImageUrl */.Jn)(Album.id)
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          lg: 7,
          className: "blackblock",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: external_classnames_default()('text-center', (Album_module_default()).title),
            children: Album.title
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "text-center",
            children: Album.subTitle
          }), /*#__PURE__*/jsx_runtime_.jsx("table", {
            className: (Album_module_default()).table,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tbody", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  className: "width-row",
                  children: "Release Date"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: new Date(Album.releaseDate).toLocaleString(undefined, {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })
                })]
              }), Album.artists.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Artists"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: Album.artists.map(({
                    id,
                    name
                  }) => name).join(', ')
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Classification"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: [Album.classes.map(({
                    name
                  }) => `${name} Soundtrack`).join(' & '), Album.categories.map(({
                    name
                  }) => name).join(', ')].filter(f => f !== '').join(' - ')
                })]
              }), Album.label && /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Published by"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn btn-link p-0",
                    href: `/publisher/${Album.label}`,
                    children: Album.label
                  })
                })]
              }), Album.platforms.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Platforms"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: Album.platforms.map(({
                    id,
                    name
                  }, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "btn btn-link p-0",
                      href: `/platform/${id}`,
                      children: name
                    }), i !== Album.platforms.length - 1 && ', ']
                  }, id))
                })]
              }), Album.games.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Games"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: Album.games.map(({
                    slug,
                    name
                  }, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "btn btn-link p-0",
                      href: `/game/${slug}`,
                      children: name
                    }), i !== Album.games.length - 1 && ', ']
                  }, slug))
                })]
              }), Album.animations.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Animations"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: Album.animations.map(({
                    id,
                    title
                  }, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "btn btn-link p-0",
                      href: `/anim/${id}`,
                      children: title
                    }), i !== Album.animations.length - 1 && ', ']
                  }, id))
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "text-center",
            children: Album.description
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TrackList, {
          discs: Album.discs
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
          lg: 6,
          className: "blackblock px-10px",
          children: [Album.vgmdb && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              className: "mb-2 ml-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Check album at:"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "ms-2",
                target: "_blank",
                rel: "noopener noreferrer",
                href: Album.vgmdb,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  width: 100,
                  height: 30,
                  alt: 'VGMdb',
                  src: "/img/assets/vgmdblogo.png"
                })
              })]
            })
          }), Album.stores.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            className: "mt-2 px-3",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              className: (Album_module_default()).stores,
              style: {
                paddingLeft: '15px',
                paddingTop: '10px',
                paddingRight: '15px',
                paddingBottom: '10px'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                className: "text-center homeTitle",
                style: {
                  fontSize: '40px'
                },
                children: "Buy The Original Soundtrack to support the artists"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
                className: "style-white w-100 mt-0"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: Album.stores.map(({
                  url,
                  provider
                }, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                  md: 6,
                  className: "d-flex justify-content-center",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: url,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      width: 190,
                      height: 65,
                      alt: provider,
                      src: `/img/provider/${provider}.jpg`
                    })
                  })
                }, i))
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
            className: "style-white w-100"
          }), Album.downloads.length > 0 && Album.downloads.map(({
            links,
            title,
            provider
          }, di) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                  md: 12,
                  children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                    className: "text-center download-txt mb-0",
                    children: title
                  })
                })
              }), links.map(({
                url,
                custom,
                directUrl,
                provider
              }, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                  className: "mt-2",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    md: 12,
                    children: /*#__PURE__*/jsx_runtime_.jsx("h5", {
                      className: "text-center",
                      children: provider
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
                  className: "mx-auto mb-3",
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    className: "py-2",
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                      variant: "secondary",
                      className: (Album_module_default()).download,
                      href: url,
                      children: "Download"
                    })
                  })
                })]
              }, i)), /*#__PURE__*/jsx_runtime_.jsx("hr", {
                className: "style-white w-100"
              })]
            })
          }, di))]
        })]
      }), Album.related.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "blackblock w-100 m-3",
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-center ost-title",
              children: "RELATED SOUNDTRACKS"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
          className: "links-list justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(AlbumBoxes/* AlbumBoxList */.Xe, {
            md: 3,
            xs: 6,
            items: Album.related
          })
        })]
      })]
    })]
  });
}
/* function DirectButton ({ directUrl }) {
  const renderTooltip = (props) => (
    <Tooltip {...props} id={styles.tooltip}>
      Become a donator to access direct links!
    </Tooltip>
  )

  return (
    <OverlayTrigger placement='top' overlay={renderTooltip}>
      <Button variant="secondary" className={classNames(styles.download, styles.direct)} href={directUrl} disabled>Direct</Button>
    </OverlayTrigger>
  )
} */

function TrackList({
  discs
}) {
  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
    lg: 6,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "blackblock d-inline-block w-100",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: external_classnames_default()('text-center', (Album_module_default()).title),
            children: "TRACKLIST"
          })
        })
      }), discs.length > 1 && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        style: {
          transform: 'translateY(2px)'
        },
        children: discs.map(({
          number
        }, i) => /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          className: external_classnames_default()('text-center', {
            'ps-0': i > 0,
            'pe-0': i < discs.length - 1
          }),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            onClick: () => setCurrent(number),
            className: "py-2",
            style: {
              cursor: current === number ? '' : 'pointer',
              borderStyle: 'solid',
              borderWidth: '2px 2px 2px 2px',
              borderColor: '#efefef',
              borderRightStyle: discs.length - 1 === i ? 'solid' : 'hidden',
              borderBottomWidth: current === number ? '0px' : '2px'
            },
            children: ["Disc ", number + 1]
          })
        }, number))
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              padding: '5px 5px 5px 5px',
              borderStyle: 'solid',
              borderWidth: '2px 2px 2px 2px',
              borderColor: '#efefef',
              borderTopWidth: discs.length > 1 ? '0px' : '2px'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("table", {
              cellSpacing: "0",
              cellPadding: "1",
              border: "0",
              children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                children: discs.length > 0 && discs[current].body.split('\n').map((track, i) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "smallfont",
                      style: {
                        padding: '8px'
                      },
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "label",
                        children: i + 1
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      className: "smallfont",
                      width: "100%",
                      style: {
                        padding: '8px'
                      },
                      children: track
                    })]
                  }, i);
                })
              })
            })
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ 8044:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Album_title__wBA1W",
	"table": "Album_table__z4X-P",
	"content": "Album_content__2IqIr",
	"stores": "Album_stores__1l3Tn",
	"download": "Album_download__2Ultq",
	"direct": "Album_direct__QfTe5",
	"custom": "Album_custom__1SsLK"
};


/***/ }),

/***/ 8074:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,347,184], () => (__webpack_exec__(8283)));
module.exports = __webpack_exports__;

})();