"use strict";
exports.id = 9324;
exports.ids = [9324];
exports.modules = {

/***/ 9324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c5": () => (/* binding */ isAuthedPage),
/* harmony export */   "yg": () => (/* binding */ hasRolePage)
/* harmony export */ });
/* unused harmony exports isAuthed, hasRole, placeholder, headerColor */
/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4292);
/* harmony import */ var apollo_server_errors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_errors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1873);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_session__WEBPACK_IMPORTED_MODULE_2__]);
_session__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const isAuthed = (next)=>(root, args, context, info)=>{
        if (!context.user) throw new AuthenticationError();
        return next(root, args, context, info);
    };
const hasPerm = (perm)=>(next)=>async (root, args, context, info)=>{
            const roles = await context.user.getRoles();
            const permissions = roles.map((r)=>r.permissions).flat();
            if (!permissions.includes(perm)) throw new ForbiddenError();
            return next(root, args, context, info);
        };
const hasRole = (role)=>[
        isAuthed,
        hasPerm(role)
    ];
const hasRolePage = (allowedRoles)=>(0,_session__WEBPACK_IMPORTED_MODULE_2__/* .withSessionSsr */ .f)(async (context)=>{
        const { req  } = context;
        const { permissions  } = req.session;
        if (!permissions.some((p)=>allowedRoles.includes(p))) return {
            redirect: {
                destination: "/404",
                permanent: false
            }
        };
        return {
            props: {}
        };
    });
const isAuthedPage = (0,_session__WEBPACK_IMPORTED_MODULE_2__/* .withSessionSsr */ .f)(async (context)=>{
    const { req  } = context;
    if (!req.session?.username) return {
        redirect: {
            destination: "/404",
            permanent: false
        }
    };
    else return {
        props: {}
    };
});
const placeholder = (parent, folder)=>{
    if (!parent.placeholder) solvePlaceholder(parent, folder);
    return parent.placeholder;
};
async function solvePlaceholder(parent, folder) {
    const id = parent.slug || parent.id;
    const pathString = path.join("/var/www/soc_img/img", folder);
    const fullPath = path.join(pathString, `${id}.png`);
    parent.placeholder = await processImage(fullPath);
    await parent.save();
}
const headerColor = async (parent, folder)=>parent.headerColor || await solveHeaderColor(parent, folder) || "#ffffff";
async function solveHeaderColor(parent, folder) {
    const color = await getImgColor(`${folder}/${parent.slug || parent.id}`);
    parent.headerColor = color;
    parent.save();
    return color;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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