(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{7424:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/album/list",function(){return c(2831)}])},9578:function(g,b,a){"use strict";a.d(b,{X:function(){return t},Z:function(){return s}});var h=a(4924),i=a(6042),j=a(9396),k=a(5893),l=a(7294),m=a(1555),c=a(4184),n=a.n(c),d=a(5675),o=a.n(d),e=a(1664),p=a.n(e),f=a(4876),q=a.n(f),r=a(1331);function s(a){var g=a.id,s=a.title,b=a.type,i=void 0===b?"album":b,j=a.status,c=a.height,t=void 0===c?300:c,d=a.width,u=void 0===d?300:d,l=a.placeholder,m=a.style,e="coming"===j,v=l||r.l7,f=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:q().img,children:(0,k.jsx)(o(),{alt:s,src:(0,r.Jn)(g,i),layout:"responsive",width:u,height:t,placeholder:"blur",blurDataURL:v})}),(0,k.jsx)("div",{className:"text-wrap text-center p-2",children:e?"Coming Soon":s})]})};return(0,k.jsx)("div",{className:n()(q().albumBox,(0,h.Z)({},q().coming,e)),style:m,children:e?(0,k.jsx)(f,{}):(0,k.jsx)(p(),{href:"/".concat(i,"/").concat(g),children:(0,k.jsx)("a",{children:(0,k.jsx)(f,{})})})})}function t(a){var c=a.items,d=a.type,e=a.width,f=a.height,g=a.style,b=a.colProps,h=void 0===b?{}:b;return c.map(function(a){return(0,l.createElement)(m.Z,(0,j.Z)((0,i.Z)({},h),{key:a.id,className:n()(q().albumBoxContainer,q()[d],"px-1 mb-2")}),(0,k.jsx)(s,(0,j.Z)((0,i.Z)({},a),{style:g,type:d,width:e,height:f})))})}},5483:function(g,b,a){"use strict";a.d(b,{Z:function(){return C}});var h=a(7297),i=a(5893),j=a(1555),k=a(1608),c=a(4184),l=a.n(c),d=a(5675),m=a.n(d),n=a(7283),o=a(7887),p=a(7294),e=a(1664),q=a.n(e),r=a(1163),f=a(5162),s=a.n(f),t=a(1331),u=a(5043),v=a(9578),w=a(1292),x=a(2729);function y(){var a=(0,h.Z)(["\n  query {\n    getRandomAlbum {\n      id\n    }\n  }\n"]);return y=function(){return a},a}function z(){var a=(0,h.Z)(["query {\n    albumCount\n    categories {\n      name\n      count\n    }\n  }"]);return z=function(){return a},a}function A(){var a=(0,h.Z)(["query {\n    highlight{\n      id\n      title\n      placeholder\n    }\n  }"]);return A=function(){return a},a}function B(){var d=(0,x.Z)(),e=(0,n.Ps)(y()),a=(0,o.a)(e),b=a.data,c=a.refetch,f=(0,r.useRouter)();return(0,p.useEffect)(c,[f.pathname,c]),(0,i.jsx)("h1",{className:"mx-auto text-center my-2",children:(0,i.jsx)(q(),{href:b?"/album/".concat(b.getRandomAlbum[0].id):"",children:(0,i.jsx)("a",{className:"text-uppercase",children:d("Get Lucky")})})})}function C(a){var b=a.radio,c=a.index,d=(0,x.Z)();return(0,i.jsxs)(j.Z,{md:3,className:l()(s().root,"p-3 ms-md-auto d-flex flex-column col-md-3"),children:[void 0!==c&&c&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(k.Z,{className:"side-menu",children:(0,i.jsx)("h1",{className:"mx-auto text-center my-2",children:(0,i.jsx)("a",{href:"#last-added",children:d("Last Added_header")})})})}),(0,i.jsx)(k.Z,{className:"side-menu",children:(0,i.jsx)(B,{})}),(0,i.jsx)(k.Z,{className:"side-menu mb-3",children:(0,i.jsx)("h1",{className:"mx-auto text-center my-2",children:(0,i.jsx)(q(),{href:"/holy12",children:(0,i.jsx)("a",{className:"text-uppercase",children:d("Random Pull")})})})}),(0,i.jsx)(k.Z,{className:"px-3",children:(0,i.jsxs)(j.Z,{md:12,className:s().socials,children:[(0,i.jsxs)(k.Z,{children:[(0,i.jsx)(j.Z,{className:"d-flex pe-1",children:(0,i.jsx)("div",{className:"ms-auto",children:(0,i.jsx)("a",{href:"https://www.youtube.com/channel/UCb1Q0GuOa8p_7fY-pYnWCmQ",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(m(),{className:"rounded",src:"/img/assets/yt.png",alt:"youtube",height:50,width:50})})})}),(0,i.jsx)(j.Z,{className:"d-flex ps-1",children:(0,i.jsx)("div",{className:"me-auto",children:(0,i.jsx)("a",{href:"https://twitter.com/SittingOnCloud",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(m(),{className:"rounded",src:"/img/assets/twitter.png",alt:"twitter",height:50,width:50})})})})]}),(0,i.jsx)(k.Z,{className:"mt-2",children:(0,i.jsx)(j.Z,{md:12,children:(0,i.jsx)("a",{className:"d-flex justify-content-center px-1",href:"https://discord.gg/x23SFbE",children:(0,i.jsx)("img",{alt:"",style:{height:"auto",maxHeight:"100px",maxWidth:"100%",borderRadius:"10px"},src:"/img/assets/discord.png"})})})}),(0,i.jsx)(k.Z,{className:"mt-1",children:(0,i.jsx)(j.Z,{md:12,className:"d-flex justify-content-center",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ko-fi.com/sittingonclouds",children:(0,i.jsx)("img",{style:{height:"auto",maxHeight:"100px",maxWidth:"100%"},alt:"ko-fi",src:"/img/assets/ko-fi-donate-button.png"})})})})]})}),(0,i.jsx)(D,{}),(0,i.jsx)(E,{}),void 0!==b&&b&&(0,i.jsx)("div",{className:l()(s().socials,"mt-3 p-2 mb-4"),children:(0,i.jsx)("iframe",{title:"radio",frameBorder:"0",style:{height:"335px",width:"100%"},src:"https://radio.sittingonclouds.net/widget"})}),(0,i.jsx)(F,{})]})}function D(){var c=(0,x.Z)(),d=(0,n.Ps)(z()),b=(0,o.a)(d),a=b.data,e=b.loading;return(0,i.jsxs)("div",{className:l()(s().socials,"mt-3"),children:[e&&(0,i.jsx)(u.Z,{className:"mx-auto",size:100}),a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h5",{className:"text-center text-uppercase",style:{fontWeight:700},children:[c("Soundtrack Count"),": ",a.albumCount]}),a.categories.map(function(a,b){var d=a.name,e=(a.id,a.count);return(0,i.jsxs)("h6",{className:"mt-2 text-center",children:[c("".concat(d," Soundtracks")),": ",e]},b)})]})]})}function E(){var e=(0,x.Z)(),f=(0,n.Ps)(A()),b=(0,o.a)(f),c=b.data,g=b.loading,a=(void 0===c?{highlight:{}}:c).highlight,d=a.id,h=a.title,j=a.placeholder;return(0,i.jsxs)("div",{className:l()(s().socials,"mt-3 p-1 mb-4"),children:[g&&(0,i.jsx)(u.Z,{className:"mx-auto",size:100}),d&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h4",{className:"text-center text-uppercase py-1",style:{fontWeight:700},children:e("Highlight Soundtrack")}),(0,i.jsx)(v.Z,{id:d,title:h,placeholder:j,xs:12,style:{height:"auto"}})]})]})}function F(){var b=(0,w.Z)().user,a=(0,p.useRef)(null);return(0,p.useEffect)(function(){var c=a.current;if(c){var b="";b+=window.location,b=encodeURIComponent(encodeURIComponent(b=b.replace(/#.*$/g,"").replace(/^.*:\/*/i,"").replace(/\./g,"[dot]").replace(/\//g,"[obs]").replace(/-/g,"[dash]"))),c.src=c.src.replace("iframe_banner",b)}},[a]),!(0,t.Lu)(b)&&(0,i.jsx)(k.Z,{className:"flex-grow-1",children:(0,i.jsx)(j.Z,{children:(0,i.jsx)("iframe",{ref:a,title:"play-asia",id:"id01_909824",src:"https://www.play-asia.com/38/190%2C000000%2Cnone%2C0%2C0%2C0%2C0%2CFFFFFF%2C000000%2Cleft%2C0%2C0-762s-70joq4-062-783c-29466-901vq93-33iframe_banner-44140px",style:{height:"100%",width:"100%",borderStyle:"none",borderWidth:"0px",borderColor:"#000000",padding:0,margin:0,scrolling:"no",frameborder:0}})})})}},2831:function(f,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return p},default:function(){return q}});var g=a(5893),h=a(1608),i=a(1555),j=a(5005),k=a(5483),l=a(9490),c=a(4184),m=a.n(c),d=a(1664),n=a.n(d),e=a(840),o=a.n(e),p=!0;function q(a){var c=a.albums,b=a.letters;return(0,g.jsxs)(h.Z,{className:"blackbg h-100 px-0",children:[(0,g.jsxs)(i.Z,{className:"p-3",children:[(0,g.jsx)(h.Z,{children:(0,g.jsx)(i.Z,{children:b.map(function(a){return(0,g.jsx)(j.Z,{variant:"secondary",md:"auto",className:m()(o().letter,"p-2 m-1"),href:"#".concat(a),children:(0,g.jsx)("h2",{children:a})},a)})})}),(0,g.jsx)("div",{children:b.map(function(a){return(0,g.jsxs)("div",{className:"mt-4",children:[(0,g.jsx)("div",{className:"divider"}),(0,g.jsx)("h1",{className:"text-center text-capitalize m-0",id:a,children:a}),(0,g.jsx)("div",{className:"divider"}),(0,g.jsx)(h.Z,{className:"my-4 d-flex flex-column",children:c[a].sort(function(a,b){return a.title>b.title}).map(function(a){var b=a.id,c=a.title,d=a.releaseDate,e=a.categories;return(0,g.jsx)(i.Z,{children:(0,g.jsx)(n(),{href:"/album/".concat(b),children:(0,g.jsxs)("a",{className:"text-center mt-2 link",children:[c," (",l.ou.fromISO(d).year,") (",e.map(function(a){return a.name}).join(" / "),")"]})})},b)})})]},a)})})]}),(0,g.jsx)(k.Z,{})]})}},4876:function(a){a.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}},5162:function(a){a.exports={root:"Sidebar_root__WlHvb",socials:"Sidebar_socials__kDIkg"}},840:function(a){a.exports={letter:"letter_letter__Q61tu"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7424)}),_N_E=a.O()}])