(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{9670:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/[slug]",function(){return c(5542)}])},6112:function(g,b,a){"use strict";a.d(b,{X:function(){return s},Z:function(){return r}});var h=a(9361),i=a(337),j=a(5893),k=a(7294),l=a(1555),c=a(4184),m=a.n(c),d=a(5675),n=a.n(d),e=a(1664),o=a.n(e),f=a(2327),p=a.n(f),q=a(599);function r(a){var g=a.id,s=a.title,b=a.type,i=void 0===b?"album":b,k=a.status,c=a.height,t=void 0===c?300:c,d=a.width,u=void 0===d?300:d,l=a.placeholder,r=a.style,e="coming"===k,v=l||q.l7,f=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:p().img,children:(0,j.jsx)(n(),{alt:s,src:(0,q.Jn)(g,i),layout:"responsive",width:u,height:t,placeholder:"blur",blurDataURL:v})}),(0,j.jsx)("div",{className:"text-wrap text-center p-2",children:e?"Coming Soon":s})]})};return(0,j.jsx)("div",{className:m()(p().albumBox,(0,h.default)({},p().coming,e)),style:r,children:e?(0,j.jsx)(f,{}):(0,j.jsx)(o(),{href:"/".concat(i,"/").concat(g),children:(0,j.jsx)("a",{children:(0,j.jsx)(f,{})})})})}function s(a){var c=a.items,d=a.type,e=a.width,f=a.height,g=a.style,b=a.colProps,h=void 0===b?{}:b;return c.map(function(a){return(0,k.createElement)(l.Z,(0,i.Z)({},h,{key:a.id,className:m()(p().albumBoxContainer,p()[d],"px-1 mb-2")}),(0,j.jsx)(r,(0,i.Z)({},a,{style:g,type:d,width:e,height:f})))})}},5542:function(e,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return p},default:function(){return q}});var f=a(5893),g=a(7294),c=a(9008),h=a.n(c),i=a(682),j=a(1608),k=a(1555),l=a(9490),d=a(5675),m=a.n(d),n=a(6112),o=a(599),p=!0;function q(d){var a=d.game,q=d.imageUrl,e=a.slug,b=a.name,r=a.releaseDate,p=a.publishers,s=a.platforms,c=a.series,t=a.albums,u=a.placeholder,v=a.headerColor;return(0,f.jsxs)(i.Z,{children:[(0,f.jsxs)(h(),{children:[(0,f.jsx)("title",{children:b}),(0,f.jsx)("meta",{property:"og:url",content:"/game/".concat(e)},"url"),(0,f.jsx)("meta",{name:"theme-color",content:v},"color"),(0,f.jsx)("meta",{property:"og:title",content:b},"title"),(0,f.jsx)("meta",{property:"og:description",content:"".concat(c.map(function(a){return a.name}).join(" - ")).concat(c.length>0?" / ":"").concat(p.map(function(a){return a.name}).join(" - "))},"desc"),(0,f.jsx)("meta",{property:"og:image",content:q},"image")]}),(0,f.jsxs)(j.Z,{className:"mt-3",children:[(0,f.jsx)(k.Z,{xs:12,md:4,children:(0,f.jsx)("div",{className:"logoBox blackblock p-3 position-relative w-100",style:{height:"250px"},children:(0,f.jsx)("div",{className:"position-relative w-100 h-100",children:(0,f.jsx)(m(),{layout:"fill",objectFit:"contain",placeholder:"blur",blurDataURL:u,alt:b,src:(0,o.Jn)(e,"game")})})})}),(0,f.jsx)(k.Z,{md:8,className:"mt-3 mt-md-0 my-0 d-flex justify-content-center flex-column",children:(0,f.jsxs)("div",{className:"blackblock",children:[(0,f.jsx)(j.Z,{children:(0,f.jsx)(k.Z,{md:12,children:(0,f.jsx)("h1",{className:"text-center ost-title",children:b})})}),(0,f.jsx)(j.Z,{className:"my-1",children:(0,f.jsxs)(k.Z,{className:"d-flex justify-content-center",children:[(0,f.jsx)("span",{className:"fw-bold me-2",children:"Release Date:"}),(0,f.jsx)("span",{children:l.ou.fromISO(r).setLocale("en-us").toLocaleString({day:"numeric",month:"short",year:"numeric"})})]})}),(0,f.jsx)(j.Z,{className:"my-1",children:(0,f.jsxs)(k.Z,{className:"d-flex justify-content-center",children:[(0,f.jsx)("span",{className:"fw-bold me-2",children:"Publishers:"}),(0,f.jsx)("span",{children:p.map(function(a,c){var b=a.id,d=a.name;return(0,f.jsxs)(g.Fragment,{children:[(0,f.jsx)("a",{className:"btn btn-link p-0 link",href:"/publisher/".concat(b),children:d}),c!==p.length-1&&", "]},b)})})]})}),(0,f.jsx)(j.Z,{className:"my-1",children:(0,f.jsxs)(k.Z,{className:"d-flex justify-content-center",children:[(0,f.jsx)("span",{className:"fw-bold me-2",children:"Platforms:"}),(0,f.jsx)("span",{children:s.map(function(a,c){var b=a.id,d=a.name;return(0,f.jsxs)(g.Fragment,{children:[(0,f.jsx)("a",{className:"btn btn-link p-0 link",href:"/platform/".concat(b),children:d}),c!==s.length-1&&", "]},b)})})]})}),(0,f.jsx)(j.Z,{className:"my-1",children:(0,f.jsxs)(k.Z,{className:"d-flex justify-content-center",children:[(0,f.jsx)("span",{className:"fw-bold me-2",children:"Series:"}),(0,f.jsx)("span",{children:c.map(function(b,d){var a=b.slug,e=b.name;return(0,f.jsxs)(g.Fragment,{children:[(0,f.jsx)("a",{className:"btn btn-link p-0 link",href:"/series/".concat(a),children:e},a),d!==c.length-1&&", "]},a)})})]})})]})})]}),(0,f.jsx)("hr",{className:"style2 style-white"}),(0,f.jsx)(j.Z,{className:"justify-content-center",children:(0,f.jsx)(n.X,{colProps:{md:3,xs:6},items:t})})]})}},2327:function(a){a.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=9670)}),_N_E=a.O()}])