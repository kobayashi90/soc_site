(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./styles/Sidebar.module.scss
var Sidebar_module = __webpack_require__(1911);
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Sidebar.jsx




function Sidebar() {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
    md: 3,
    className: external_classnames_default()((Sidebar_module_default()).root, 'bg-dark'),
    children: "123"
  });
}
// EXTERNAL MODULE: ./components/AlbumBoxes.jsx
var AlbumBoxes = __webpack_require__(6184);
// EXTERNAL MODULE: ./components/ApolloClient.js
var ApolloClient = __webpack_require__(8685);
;// CONCATENATED MODULE: ./pages/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const md = 3;
const xs = 6;
const limit = 12;
async function getServerSideProps() {
  const client = (0,ApolloClient/* initializeApollo */.i)();
  const {
    data
  } = await client.query({
    query: client_.gql`
      query searchAlbums($limit: Int){
        released: searchAlbums(
          limit: $limit,
          status: ["show","coming"],
          order: ["releaseDate", "createdAt"]
        ){
          rows{
            id,
            status
            title
          }
        },

        added: searchAlbums(limit: $limit){
          rows{
            id,
            title
          }
        }
      }
    `,
    variables: {
      limit
    }
  });
  return {
    props: _objectSpread({}, data)
  };
}
function Home({
  added,
  released
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
    className: "h-100",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
      className: "p-3",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-center homeTitle p-3",
            children: "LAST RELEASES"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        className: "justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(AlbumBoxes/* AlbumBoxList */.Xe, {
          xs: xs,
          md: md,
          items: released.rows
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          md: 6,
          className: "mt-3 flex-grow-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/game",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-center blackButton px-3 py-2",
              children: "More Games Releases"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          md: 6,
          className: "mt-3  flex-grow-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/anim",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-center blackButton px-3 py-2",
              children: "More Animation Releases"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "text-center homeTitle p-3",
            children: "LAST ADDED"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        className: "justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(AlbumBoxes/* AlbumBoxList */.Xe, {
          xs: xs,
          md: md,
          items: added.rows
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        className: "mt-3",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Col, {
          md: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/last-added",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-center blackButton",
              children: "More Last Added"
            })
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {})]
  });
}

/***/ }),

/***/ 1911:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Sidebar_root__1tre7"
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
var __webpack_exports__ = __webpack_require__.X(0, [61,347,184], () => (__webpack_exec__(8906)));
module.exports = __webpack_exports__;

})();