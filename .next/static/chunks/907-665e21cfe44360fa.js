"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{3907:function(d,b,a){a.d(b,{"Q$":function(){return Y},S7:function(){return _},D_:function(){return $},J3:function(){return ac},cZ:function(){return ab},ov:function(){return aa},d7:function(){return X},ln:function(){return Z}});var e=a(5893),c=a(7294),f=a(7887),g=a(7283),h=a(3359),i=a(782),j=Object.defineProperty,k=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(a,b,c)=>b in a?j(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,q=(c,a)=>{for(var b in a||(a={}))n.call(a,b)&&p(c,b,a[b]);if(m)for(var b of m(a))o.call(a,b)&&p(c,b,a[b]);return c},r=(a,b)=>k(a,l(b));!function(c,{insertAt:d}={}){if(!c|| typeof document>"u")return;let b=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===d&&b.firstChild?b.insertBefore(a,b.firstChild):b.appendChild(a),a.styleSheet?a.styleSheet.cssText=c:a.appendChild(document.createTextNode(c))}(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline:0}.rmsc .select-item:hover,.rmsc .select-item:focus{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var s={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},t={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},u=c.createContext({}),v=({props:a,children:b})=>{let[d,e]=(0,c.useState)(a.options);return(0,c.useEffect)(()=>{e(a.options)},[a.options]),c.createElement(u.Provider,{value:r(q(q({t(b){var c;return(null==(c=a.overrideStrings)?void 0:c[b])||s[b]}},t),a),{options:d,setOptions:e})},b)},w=()=>c.useContext(u),x={when:!0,eventTypes:["keydown"]};function y(e,a,f){let b=(0,c.useMemo)(()=>Array.isArray(e)?e:[e],[e]),d=Object.assign({},x,f),{when:g,eventTypes:h}=d,j=(0,c.useRef)(a),{target:i}=d;(0,c.useEffect)(()=>{j.current=a});let k=(0,c.useCallback)(a=>{b.some(b=>a.key===b||a.code===b)&&j.current(a)},[b]);(0,c.useEffect)(()=>{if(g&&"u">typeof window){let a=i?i.current:window;return h.forEach(b=>{a&&a.addEventListener(b,k)}),()=>{h.forEach(b=>{a&&a.removeEventListener(b,k)})}}},[g,h,b,i,a])}var z={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"},A=(a,b)=>{let c;return function(...d){clearTimeout(c),c=setTimeout(()=>{a.apply(null,d)},b)}},B=()=>c.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray"},c.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),C=({checked:b,option:d,onClick:e,disabled:a})=>c.createElement("div",{className:`item-renderer ${a&&"disabled"}`},c.createElement("input",{type:"checkbox",onChange:e,checked:b,tabIndex:-1,disabled:a}),c.createElement("span",null,d.label)),D=({itemRenderer:d=C,option:e,checked:a,tabIndex:f,disabled:g,onSelectionChanged:h,onClick:i})=>{let b=(0,c.useRef)(),j=()=>{g||h(!a)};return y([z.ENTER,z.SPACE],a=>{j(),a.preventDefault()},{target:b}),c.createElement("label",{className:`select-item ${a&&"selected"}`,role:"option","aria-selected":a,tabIndex:f,ref:b},c.createElement(d,{option:e,checked:a,onClick(a){j(),i(a)},disabled:g}))},E=({options:a,onClick:b,skipIndex:d})=>{let{disabled:e,value:f,onChange:g,ItemRenderer:h}=w(),i=(a,b)=>{e||g(b?[...f,a]:f.filter(b=>b.value!==a.value))};return c.createElement(c.Fragment,null,a.map((a,g)=>{let j=g+d;return c.createElement("li",{key:(null==a?void 0:a.key)||g},c.createElement(D,{tabIndex:j,option:a,onSelectionChanged:b=>i(a,b),checked:!!f.find(b=>b.value===a.value),onClick:a=>b(a,j),itemRenderer:h,disabled:a.disabled||e}))}))},F=()=>{let{t:a,onChange:C,options:e,setOptions:F,value:j,filterOptions:G,ItemRenderer:k,disabled:l,disableSearch:f,hasSelectAll:g,ClearIcon:m,debounceDuration:n,isCreatable:o,onCreateOption:H}=w(),h=(0,c.useRef)(),p=(0,c.useRef)(),[b,I]=(0,c.useState)(""),[d,J]=(0,c.useState)(e),[q,K]=(0,c.useState)(""),[r,L]=(0,c.useState)(0),M=(0,c.useCallback)(A(a=>K(a),n),[]),i=(0,c.useMemo)(()=>{let a=0;return f||(a+=1),g&&(a+=1),a},[f,g]),s={label:a(b?"selectAllFiltered":"selectAll"),value:""},N=a=>{let b=d.filter(a=>!a.disabled).map(a=>a.value);if(a){let c=[...j.map(a=>a.value),...b];return(G?d:e).filter(a=>c.includes(a.value))}return j.filter(a=>!b.includes(a.value))},t=()=>{var a;K(""),I(""),null==(a=null==p?void 0:p.current)||a.focus()},O=a=>L(a);y([z.ARROW_DOWN,z.ARROW_UP],a=>{switch(a.code){case z.ARROW_UP:Q(-1);break;case z.ARROW_DOWN:Q(1);break;default:return}a.stopPropagation(),a.preventDefault()},{target:h});let u=async()=>{let a={label:b,value:b,__isNew__:!0};H&&(a=await H(b)),F([a,...e]),t(),C([...j,a])},P=async()=>{var a,b;return G?await G(e,q):(a=e,(b=q)?a.filter(({label:a,value:c})=>null!=a&&null!=c&&a.toLowerCase().includes(b.toLowerCase())):a)},Q=b=>{let a=r+b;a=Math.max(0,a),a=Math.min(a,e.length+Math.max(i-1,0)),L(a)};(0,c.useEffect)(()=>{var a,b;null==(b=null==(a=null==h?void 0:h.current)?void 0:a.querySelector(`[tabIndex='${r}']`))||b.focus()},[r]);let[v,x]=(0,c.useMemo)(()=>{let a=d.filter(a=>!a.disabled);return[a.every(a=>-1!==j.findIndex(b=>b.value===a.value)),0!==a.length]},[d,j]);return(0,c.useEffect)(()=>{P().then(J)},[q,e]),c.createElement("div",{className:"select-panel",role:"listbox",ref:h},!f&&c.createElement("div",{className:"search"},c.createElement("input",{placeholder:a("search"),type:"text","aria-describedby":a("search"),onChange(a){M(a.target.value),I(a.target.value),L(0)},onFocus(){L(0)},value:b,ref:p,tabIndex:0}),c.createElement("button",{type:"button",className:"search-clear-button",hidden:!b,onClick:t,"aria-label":a("clearSearch")},m||c.createElement(B,null))),c.createElement("ul",{className:"options"},g&&x&&c.createElement(D,{tabIndex:1===i?0:1,checked:v,option:s,onSelectionChanged(a){C(N(a))},onClick:()=>O(1),itemRenderer:k,disabled:l}),d.length?c.createElement(E,{skipIndex:i,options:d,onClick:(b,a)=>O(a)}):o?c.createElement("li",{onClick:u,className:"select-item creatable"},`${a("create")} "${b}"`):c.createElement("li",{className:"no-options"},a("noOptions"))))},G=({expanded:a})=>c.createElement("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray"},c.createElement("path",{d:a?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})),H=()=>{let{t:b,value:a,options:d,valueRenderer:e}=w(),g=0===a.length,h=a.length===d.length,f=e&&e(a,d);return g?c.createElement("span",{className:"gray"},f||b("selectSomeItems")):c.createElement("span",null,f||(h?b("allItemsAreSelected"):a.map(a=>a.label).join(", ")))},I=({size:a=24})=>c.createElement("span",{style:{width:a,marginRight:"0.2rem"}},c.createElement("svg",{width:a,height:a,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"}},c.createElement("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"}))),J=()=>{let{t:g,onMenuToggle:m,ArrowRenderer:h,shouldToggleOnHover:n,isLoading:i,disabled:b,onChange:o,labelledBy:j,value:d,isOpen:k,defaultIsOpen:l,ClearSelectedIcon:e,closeOnChangedValue:p}=w();(0,c.useEffect)(()=>{p&&s(!1)},[d]);let[q,r]=(0,c.useState)(!0),[a,s]=(0,c.useState)(l),[t,u]=(0,c.useState)(!1),f=(0,c.useRef)();(function(b,a){let d=(0,c.useRef)(!1);(0,c.useEffect)(()=>{d.current?b():d.current=!0},a)})(()=>{m&&m(a)},[a]),(0,c.useEffect)(()=>{void 0===l&&"boolean"==typeof k&&(r(!1),s(k))},[k]),y([z.ENTER,z.ARROW_DOWN,z.SPACE,z.ESCAPE],a=>{var b;["text","button"].includes(a.target.type)&&[z.SPACE,z.ENTER].includes(a.code)||(q&&(a.code===z.ESCAPE?(s(!1),null==(b=null==f?void 0:f.current)||b.focus()):s(!0)),a.preventDefault())},{target:f});let v=a=>{q&&n&&s(a)};return c.createElement("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":j,"aria-expanded":a,"aria-readonly":!0,"aria-disabled":b,ref:f,onFocus:()=>!t&&u(!0),onBlur(a){!a.currentTarget.contains(a.relatedTarget)&&q&&(u(!1),s(!1))},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)},c.createElement("div",{className:"dropdown-heading",onClick(){q&&s(!i&&!b&&!a)}},c.createElement("div",{className:"dropdown-heading-value"},c.createElement(H,null)),i&&c.createElement(I,null),d.length>0&&null!==e&&c.createElement("button",{type:"button",className:"clear-selected-button",onClick(a){a.stopPropagation(),o([]),q&&s(!1)},disabled:b,"aria-label":g("clearSelected")},e||c.createElement(B,null)),c.createElement(h||G,{expanded:a})),a&&c.createElement("div",{className:"dropdown-content"},c.createElement("div",{className:"panel-content"},c.createElement(F,null))))},K=a=>c.createElement(v,{props:a},c.createElement("div",{className:`rmsc ${a.className||"multi-select"}`},c.createElement(J,null)));function L(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function M(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function N(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){M(d,a,c[a])})}return d}function O(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function P(a){return function(a){if(Array.isArray(a))return L(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||Q(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(a,c){if(a){if("string"==typeof a)return L(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return L(a,c)}}function R(){var a=O(["",""]);return R=function(){return a},a}function S(){var a=O(["",""]);return S=function(){return a},a}var T=function(a,b){return a.length?a.map(function(a){return a.label}).join(", "):"Select..."},U=function(a){a&&(console.log(a),i.Am.error("Selector: Failed to fetch server info"))};function V(a){var b=a.isSingle,c=void 0!==b&&b,d=a.selected,f=void 0===d?c?{}:[]:d,g=a.required,h=a.name,i=void 0===h?"":h;return c?(0,e.jsx)("input",{value:f.value,name:i,required:void 0!==g&&g,hidden:!0,readOnly:!0}):f.map(function(a){return(0,e.jsx)("input",{value:a.value,name:"".concat(i,"[]"),hidden:!0,readOnly:!0},a.value)})}function W(a){var m=a.isSingle,b=void 0!==m&&m,n=a.required,G=a.onChange,o=a.loading,v=a.startQuery,w=a.changeQuery,p=a.defaultValue,q=void 0===p?b?void 0:[]:p,r=a.name,H=a.rowsFn,s=(0,c.useState)(q||[]),x=s[0],I=s[1],t=(0,c.useState)(q),d=t[0],J=t[1],y=(0,c.useRef)(null),z=b?d?[d]:[]:d;(0,c.useEffect)(function(){var a=y.current.closest("form");null==a||a.addEventListener("reset",function(){return J(q)})},[]);var i,j,k=(0,f.a)((0,g.Ps)(R(),v),{variables:{limit:10}}),A=k.data,B=k.error,C=k.loading,u=(i=(0,h.t)((0,g.Ps)(S(),w)),j=2,function(a){if(Array.isArray(a))return a}(i)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(i,j)||Q(i,j)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),L=u[0],l=u[1],D=l.data,E=l.error,F=l.loading,M=function(a){return a?H?H(a[Object.keys(a)[0]]):a[Object.keys(a)[0]]:[]};return(0,c.useEffect)(function(){return U(B)},[B]),(0,c.useEffect)(function(){return U(E)},[E]),(0,c.useEffect)(function(){if(A||D){var a=D?M(D):M(A);I(P(z.filter(function(b){return!a.includes(b.value)})).concat(P(a)))}},[A,D]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{ref:y,style:{display:"none"}}),(0,e.jsx)(K,{valueRenderer:T,filterOptions:function(b,a){return a.length>0&&L({variables:{filter:a}}),b},onChange:function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],c=b?a[a.length-1]:a;G&&G(c),J(c)},hasSelectAll:!b,isLoading:F||C|| void 0!==o&&o,value:z,options:x}),(0,e.jsx)(V,{isSingle:b,required:void 0!==n&&n,selected:d,name:void 0===r?"":r})]})}function X(a){var f=a.isSingle,b=void 0!==f&&f,g=a.defaultValue,k=void 0===g?b?void 0:[]:g,h=a.required,i=a.name,m=a.onChange,l=(0,c.useRef)(null),j=(0,c.useState)(k),d=j[0],n=j[1];return(0,c.useEffect)(function(){var a=l.current.closest("form");null==a||a.addEventListener("reset",function(){return n(k)})},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{ref:l,style:{display:"none"}}),(0,e.jsx)(K,N({valueRenderer:T,hasSelectAll:!b},a,{onChange:function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],c=b?a[a.length-1]:a;n(c),m&&m(c)},value:b?d?[d]:[]:d})),(0,e.jsx)(V,{isSingle:b,required:void 0!==h&&h,selected:d,name:void 0===i?"":i})]})}function Y(a){return(0,e.jsx)(W,N({},a,{rowsFn:function(a){return a.rows},startQuery:'\n        query ($limit: Int){\n          searchAlbum(limit: $limit, status: ["show", "hidden", "coming"]) {\n            rows {\n              value: id\n              label: title\n            }\n          }\n        }\n      ',changeQuery:'\n        query ($filter: String){\n          searchAlbum(title: $filter, status: ["show", "hidden", "coming"]) {\n            rows {\n              value: id\n              label: title\n            }\n          }\n        }\n      '}))}function Z(a){return(0,e.jsx)(W,N({},a,{rowsFn:function(a){return a.rows},startQuery:"\n        query ($limit: Int){\n          searchStudio(limit: $limit) {\n            rows {\n              value: slug\n              label: name\n            }\n          }\n        }\n      ",changeQuery:"\n        query ($filter: String){\n          searchStudio(name: $filter) {\n            rows {\n              value: slug\n              label: name\n            }\n          }\n        }\n      "}))}function $(a){return(0,e.jsx)(W,N({},a,{rowsFn:function(a){return a.rows},startQuery:"\n        query ($limit: Int){\n          searchGame (limit: $limit) {\n            rows{\n              value: slug\n              label: name\n            }\n          }\n        }\n      ",changeQuery:"\n        query ($filter: String){\n          searchGame(name: $filter) {\n            rows {\n              value: slug\n              label: name\n            }\n          }\n        }\n      "}))}function _(a){return(0,e.jsx)(W,N({},a,{rowsFn:function(a){return a.rows},startQuery:'\n        query ($limit: Int!){\n          searchAnimation(limit: $limit, order: "createdAt", mode: "DESC") {\n            rows{\n              value: id\n              label: title\n            }\n          }\n        }\n      ',changeQuery:"\n        query SearchAnimation($filter: String){\n          searchAnimation(title: $filter) {\n            rows {\n              value: id\n              label: title\n            }\n          }\n        }\n      "}))}function aa(a){return(0,e.jsx)(W,N({},a,{startQuery:"\n        query RecentSeries($limit: Int!){\n          recentSeries(limit: $limit) {\n            value: slug\n            label: name\n          }\n        }\n      ",changeQuery:"\n        query SearchSeries($filter: String){\n          searchSeriesByName(name: $filter) {\n            value: slug\n            label: name\n          }\n        }\n      "}))}function ab(a){return(0,e.jsx)(W,N({},a,{startQuery:"\n        query ($limit: Int!){\n          recentPublishers(limit: $limit) {\n            value: id\n            label: name\n          }\n        }",changeQuery:"\n        query ($filter: String){\n          searchPublishersByName(name: $filter) {\n            value: id\n            label: name\n          }\n        }"}))}function ac(a){return(0,e.jsx)(W,N({},a,{startQuery:'\n        query ($limit: Int!){\n          recentPlatforms(limit: $limit, type: "'.concat(a.type,'") {\n            value: id\n            label: name\n          }\n        }\n      '),changeQuery:'\n        query ($filter: String){\n          searchPlatformsByName(name: $filter, type: "'.concat(a.type,'") {\n            value: id\n            label: name\n          }\n        }\n      ')}))}}}])