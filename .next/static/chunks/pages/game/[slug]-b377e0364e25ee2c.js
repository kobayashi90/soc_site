(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[532],{9670:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/[slug]",function(){return c(1764)}])},9578:function(a,b,c){"use strict";c.d(b,{X:function(){return t},Z:function(){return s}});var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(1555),j=c(4184),k=c.n(j),l=c(5675),m=c.n(l),n=c(1664),o=c.n(n),p=c(4876),q=c.n(p),r=c(1331);function s(a){var b=a.id,c=a.title,e=a.type,f=void 0===e?"album":e,h=a.status,i=a.height,j=void 0===i?300:i,l=a.width,n=void 0===l?300:l,p=a.placeholder,s=a.style,t="coming"===h,u=p||r.l7,v=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:q().img,children:(0,g.jsx)(m(),{alt:c,src:(0,r.Jn)(b,f),layout:"responsive",width:n,height:j,placeholder:"blur",blurDataURL:u})}),(0,g.jsx)("div",{className:"text-wrap text-center p-2",children:t?"Coming Soon":c})]})};return(0,g.jsx)("div",{className:k()(q().albumBox,(0,d.Z)({},q().coming,t)),style:s,children:t?(0,g.jsx)(v,{}):(0,g.jsx)(o(),{href:"/".concat(f,"/").concat(b),children:(0,g.jsx)(v,{})})})}function t(a){var b=a.items,c=a.type,d=a.width,j=a.height,l=a.style,m=a.colProps,n=void 0===m?{}:m;return b.map(function(a){return(0,h.createElement)(i.Z,(0,f.Z)((0,e.Z)({},n),{key:a.id,className:k()(q().albumBoxContainer,q()[c],"px-1 mb-2")}),(0,g.jsx)(s,(0,f.Z)((0,e.Z)({},a),{style:l,type:c,width:d,height:j})))})}},1764:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return p},default:function(){return q}});var d=c(5893),e=c(7294),f=c(9008),g=c.n(f),h=c(682),i=c(1608),j=c(1555),k=c(120),l=c(5675),m=c.n(l),n=c(9578),o=c(1331),p=!0;function q(a){var b=a.game,c=a.imageUrl,f=b.slug,l=b.name,p=b.releaseDate,q=b.publishers,r=b.platforms,s=b.series,t=b.albums,u=b.placeholder,v=b.headerColor;return(0,d.jsxs)(h.Z,{children:[(0,d.jsxs)(g(),{children:[(0,d.jsx)("title",{children:l}),(0,d.jsx)("meta",{property:"og:url",content:"/game/".concat(f)},"url"),(0,d.jsx)("meta",{name:"theme-color",content:v},"color"),(0,d.jsx)("meta",{property:"og:title",content:l},"title"),(0,d.jsx)("meta",{property:"og:description",content:"".concat(s.map(function(a){return a.name}).join(" - ")).concat(s.length>0?" / ":"").concat(q.map(function(a){return a.name}).join(" - "))},"desc"),(0,d.jsx)("meta",{property:"og:image",content:c},"image")]}),(0,d.jsxs)(i.Z,{className:"mt-3",children:[(0,d.jsx)(j.Z,{xs:12,md:4,children:(0,d.jsx)("div",{className:"logoBox blackblock p-3 position-relative w-100",style:{height:"250px"},children:(0,d.jsx)("div",{className:"position-relative w-100 h-100",children:(0,d.jsx)(m(),{layout:"fill",objectFit:"contain",placeholder:"blur",blurDataURL:u,alt:l,src:(0,o.Jn)(f,"game")})})})}),(0,d.jsx)(j.Z,{md:8,className:"mt-3 mt-md-0 my-0 d-flex justify-content-center flex-column",children:(0,d.jsxs)("div",{className:"blackblock",children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(j.Z,{md:12,children:(0,d.jsx)("h1",{className:"text-center ost-title",children:l})})}),(0,d.jsx)(i.Z,{className:"my-1",children:(0,d.jsxs)(j.Z,{className:"d-flex justify-content-center",children:[(0,d.jsx)("span",{className:"fw-bold me-2",children:"Release Date:"}),(0,d.jsx)("span",{children:k.ou.fromISO(p).setLocale("en-us").toLocaleString({day:"numeric",month:"short",year:"numeric"})})]})}),(0,d.jsx)(i.Z,{className:"my-1",children:(0,d.jsxs)(j.Z,{className:"d-flex justify-content-center",children:[(0,d.jsx)("span",{className:"fw-bold me-2",children:"Publishers:"}),(0,d.jsx)("span",{children:q.map(function(a,b){var c=a.id,f=a.name;return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)("a",{className:"btn btn-link p-0 link",href:"/publisher/".concat(c),children:f}),b!==q.length-1&&", "]},c)})})]})}),(0,d.jsx)(i.Z,{className:"my-1",children:(0,d.jsxs)(j.Z,{className:"d-flex justify-content-center",children:[(0,d.jsx)("span",{className:"fw-bold me-2",children:"Platforms:"}),(0,d.jsx)("span",{children:r.map(function(a,b){var c=a.id,f=a.name;return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)("a",{className:"btn btn-link p-0 link",href:"/platform/".concat(c),children:f}),b!==r.length-1&&", "]},c)})})]})}),(0,d.jsx)(i.Z,{className:"my-1",children:(0,d.jsxs)(j.Z,{className:"d-flex justify-content-center",children:[(0,d.jsx)("span",{className:"fw-bold me-2",children:"Series:"}),(0,d.jsx)("span",{children:s.map(function(a,b){var c=a.slug,f=a.name;return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)("a",{className:"btn btn-link p-0 link",href:"/series/".concat(c),children:f},c),b!==s.length-1&&", "]},c)})})]})})]})})]}),(0,d.jsx)("hr",{className:"style2 style-white"}),(0,d.jsx)(i.Z,{className:"justify-content-center",children:(0,d.jsx)(n.X,{colProps:{md:3,xs:6},items:t})})]})}},4876:function(a){a.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=9670)}),_N_E=a.O()}])