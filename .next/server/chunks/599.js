"use strict";
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hx": () => (/* binding */ getFullPageList),
/* harmony export */   "Jn": () => (/* binding */ getImageUrl),
/* harmony export */   "Lu": () => (/* binding */ skipAds),
/* harmony export */   "RB": () => (/* binding */ getPageList),
/* harmony export */   "XF": () => (/* binding */ getRandomInt),
/* harmony export */   "ar": () => (/* binding */ prepareForm),
/* harmony export */   "l7": () => (/* binding */ PLACEHOLDER),
/* harmony export */   "lV": () => (/* binding */ slugify),
/* harmony export */   "z5": () => (/* binding */ clearKeys)
/* harmony export */ });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3673);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(684);
/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_1__);


const PLACEHOLDER = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVQImWN4fGrVhZ0z/v+5zZAc5yfOwGCtrsbg4em/f7ZvZ7w2Q15Vi6e1iggPAwBwDg7L//0+xAAAAABJRU5ErkJggg==";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const getImageUrl = (id, type = "album")=>`https://cdn.sittingonclouds.net/${type}/${id}.png`;
const skipAds = (user)=>user && user.permissions.includes("SKIP_ADS");
const getFullPageList = (count, limit)=>[
        ...Array(Math.ceil(count / limit))
    ].map((v, i)=>i + 1);
const getPageList = (fullPageList, pageLimit, page)=>{
    const pageList = [
        []
    ];
    fullPageList.forEach((n)=>{
        pageList[pageList.length - 1].push(n);
        if (n % pageLimit === 0) pageList.push([]);
    });
    const currentListIndex = pageList.findIndex((l)=>l.includes(parseInt(page)));
    const currentList = pageList[currentListIndex];
    return {
        pageList,
        currentList,
        currentListIndex
    };
};
function clearKeys(keys, baseIds) {
    const remove = keys.reduce((acum, key)=>{
        const values = baseIds.map((baseId)=>document.getElementById(`${baseId}${key}`).value);
        if (values.every((value)=>!value)) acum.push(key);
        return acum;
    }, []);
    return keys.filter((k)=>!remove.includes(k));
}
const slugify = (text)=>slugify__WEBPACK_IMPORTED_MODULE_0___default()(text, {
        lower: true,
        strict: true
    });
const prepareForm = (e1)=>{
    const data = form_serialize__WEBPACK_IMPORTED_MODULE_1___default()(e1.target, {
        hash: true
    });
    data.releaseDate = new Date(data.releaseDate).toISOString().substring(0, 10);
    if (data.artists) data.artists = data.artists.split(",").map((e)=>e.trim());
    data.discs = data.discs.map((d, i)=>{
        const payload = d;
        payload.number = i;
        return payload;
    });
    if (data.downloads) data.downloads.forEach((link)=>{
        link.small = link.small === "on";
    });
    if (e1.target.elements.cover.files[0] !== undefined) data.cover = e1.target.elements.cover.files[0];
    return data;
};


/***/ })

};
;