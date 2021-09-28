(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(2562);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./public/img/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/image/public/img/assets/logo.31f29beaa4dcd70e23aa834409c4aacc.png","height":584,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEUE1v+PsNeCwvCYvuWT1/9c0P1gvvJsyP7hwaOUsdud6P/MmHmCzPemxNuEud6xuL6ezuTPo4+Mp87KysSL2f+0zd3bpJTVvq7blILdzLjMsqnak3+B0v9qJrSHAAAAFnRSTlMEn2ra9yVQsv6Pe/eDV7TVoOyF7Tm5ZOwpnAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADVJREFUCJljYGVnZ2NgYGVgYJdhYeHi5+ZhEBHm4JAUF+RlEBUTE5OQlhJgYOJkZOYU4mMDACZUAfGWwn+sAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header.jsx









function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: (Header_module_default()).bannerBg,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
          className: "h-100",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            className: "my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  alt: "SOC Logo",
                  src: logo,
                  height: 150,
                  width: 265
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
            xs: "auto",
            className: external_classnames_default()((Header_module_default()).login, 'ms-sm-auto mb-sm-5'),
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              variant: "primary",
              children: "Log In"
            })
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
      expand: "sm",
      bg: "dark",
      variant: "dark",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Toggle, {
          "aria-controls": "responsive-navbar-nav"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Collapse, {
          id: "responsive-navbar-nav",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
            className: "me-auto py-2 py-sm-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Home"
            }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Last Added"
            }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Album List"
            }), /*#__PURE__*/jsx_runtime_.jsx(Dropdown, {
              name: "Games",
              items: [{
                name: 'Game Releases',
                href: '/'
              }, {
                name: 'Game Series',
                href: '/'
              }, {
                name: 'Game Publishers',
                href: '/'
              }, {
                name: 'Game Platforms',
                href: '/'
              }, {
                name: 'Game List',
                href: '/'
              }]
            }), /*#__PURE__*/jsx_runtime_.jsx(Dropdown, {
              name: "Animations",
              items: [{
                name: 'Animation Releases',
                href: '/'
              }, {
                name: 'Animation List',
                href: '/'
              }, {
                name: 'Studioss',
                href: '/'
              }]
            }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Contact"
            }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Album Admin"
            }), /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              href: "/",
              name: "Manage Users"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(SearchBar, {})]
      })
    })]
  });
}

function Dropdown({
  name,
  items = []
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.NavDropdown, {
    title: name,
    className: external_classnames_default()((Header_module_default()).navLink, (Header_module_default()).dropMenu),
    children: items.map(({
      href,
      name
    }, i) => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: href,
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.NavDropdown.Item, {
        children: name
      })
    }, i))
  });
}

function NavLink({
  href,
  name
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: href,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
      className: (Header_module_default()).navLink,
      children: name
    })
  });
}

function SearchBar() {
  const ref = (0,external_react_.useRef)(null);
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  /* const path = usePath()
  const [, setParams] = useQueryParams() */

  const onKeyDownHandler = e => {
    /* if (e.keyCode === 13 && ref.current && ref.current.value) {
      if (path === '/search') setParams({ s: ref.current.value })
      else navigate('/search', false, { s: ref.current.value })
    } */
  };

  (0,external_react_.useEffect)(() => {
    if (open) ref.current.focus();
  }, [open]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: (Header_module_default()).search,
    className: external_classnames_default()({
      'w-100': open
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      ref: ref,
      onKeyDown: onKeyDownHandler,
      type: "text",
      style: {
        display: open ? 'block' : 'none'
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: `fas fa-${open ? 'times' : 'search'}`,
      style: {
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    })]
  });
}
// EXTERNAL MODULE: ./components/ApolloClient.js
var ApolloClient = __webpack_require__(8685);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function MyApp({
  Component,
  pageProps
}) {
  const apolloClient = (0,ApolloClient/* useApollo */.U)(pageProps.initialApolloState);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(client_.ApolloProvider, {
    client: apolloClient,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Sitting on Clouds"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "/"
      }, 'url'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Sitting on Clouds \u2014 High Quality soundtrack library"
      }, 'title'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Largest Video Game & Animation Soundtrack \u30B5\u30A6\u30F3\u30C9\u30C8\u30E9\u30C3\u30AF Archive"
      }, 'desc'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "/img/assets/clouds_thumb.png"
      }, 'image')]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
      fluid: true,
      className: "flex-grow-1",
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 2562:
/***/ ((module) => {

// Exports
module.exports = {
	"bannerBg": "Header_bannerBg__E1j6g",
	"login": "Header_login__2unys",
	"navLink": "Header_navLink__26Aod",
	"search": "Header_search__1XOqJ"
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,347], () => (__webpack_exec__(9676)));
module.exports = __webpack_exports__;

})();