(() => {
var exports = {};
exports.id = 3500;
exports.ids = [3500];
exports.modules = {

/***/ 8892:
/***/ (() => {

/* const tokenCompare = process.env.IRONCLAD

async function handler (req, res) {
  const { token, revalidate = [] } = req.body

  if (req.method !== 'POST' || token !== tokenCompare) throw new Error('Forbidden')
  if (revalidate.length === 0) throw new Error('No specified paths to revalidate')

  await Promise.all(revalidate.map(p => res.revalidate(p)))

  return res.json({ success: true, revalidate })
}

export default handler */ 

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