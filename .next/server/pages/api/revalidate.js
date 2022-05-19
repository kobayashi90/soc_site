"use strict";
(() => {
var exports = {};
exports.id = 3500;
exports.ids = [3500];
exports.modules = {

/***/ 8892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tokenCompare = process.env.IRONCLAD;
async function handler(req, res) {
    const { token , revalidate =[]  } = req.body;
    if (req.method !== "POST" || token !== tokenCompare) throw new Error("Forbidden");
    if (revalidate.length === 0) throw new Error("No specified paths to revalidate");
    await Promise.all(revalidate.map((p)=>res.unstable_revalidate(p)
    ));
    return res.json({
        success: true,
        revalidate
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8892));
module.exports = __webpack_exports__;

})();