(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{6112:function(e,n,t){"use strict";t.d(n,{X:function(){return f},Z:function(){return j}});var l=t(5893),s=t(7294),a=t(1555),c=t(4184),r=t.n(c),i=t(5675),u=t.n(i),m=t(1664),o=t.n(m),x=t(2327),d=t.n(x),h=t(599);function j(e){let{id:n,title:t,type:s="album",status:a,height:c=300,width:i=300,placeholder:m,style:x}=e,j="coming"===a,f=m||h.l7,b=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:d().img,children:(0,l.jsx)(u(),{alt:t,src:(0,h.Jn)(n,s),layout:"responsive",width:i,height:c,placeholder:"blur",blurDataURL:f})}),(0,l.jsx)("div",{className:"text-wrap text-center p-2",children:j?"Coming Soon":t})]});return(0,l.jsx)("div",{className:r()(d().albumBox,{[d().coming]:j}),style:x,children:j?(0,l.jsx)(b,{}):(0,l.jsx)(o(),{href:"/".concat(s,"/").concat(n),children:(0,l.jsx)(b,{})})})}function f(e){let{items:n,type:t,width:c,height:i,style:u,colProps:m={}}=e;return n.map(e=>(0,s.createElement)(a.Z,{...m,key:e.id,className:r()(d().albumBoxContainer,d()[t],"px-1 mb-2")},(0,l.jsx)(j,{...e,style:u,type:t,width:c,height:i})))}},9139:function(e,n,t){"use strict";t.d(n,{Sf:function(){return R},Tv:function(){return z},ZP:function(){return F}});var l=t(7297),s=t(5893),a=t(1555),c=t(5005),r=t(4051),i=t(343),u=t(2878),m=t(4716),o=t(7294),x=t(7283),d=t(3359),h=t(319),j=t(1641),f=t(7422),b=t.n(f),p=t(1664),g=t.n(p),Z=t(1163),N=t(2446),_=t(9738),v=t(6974),C=t(7983),S=t.n(C),k=t(9477),y=t.n(k),B=t(4184),E=t.n(B);function w(){let e=(0,l.Z)(["\n  query ($albumId: ID!) {\n    album(id: $albumId){\n      comments {\n        text\n        username\n      }\n      selfComment {\n        text\n        anon\n      }\n    }\n  }\n"]);return w=function(){return e},e}function A(){let e=(0,l.Z)(["\n  mutation ($text: String!, $anon: Boolean!, $albumId: ID!) {\n    updateComment(text: $text, anon: $anon, albumId: $albumId)\n  }\n"]);return A=function(){return e},e}function I(){let e=(0,l.Z)(["\n  query {\n    recentComments {\n      text\n      anon\n      username\n      album {\n        id\n        title\n      }\n    }\n  }\n"]);return I=function(){return e},e}function $(e){let{side:n,onClick:t}=e;return(0,s.jsx)(a.Z,{xs:"auto",children:(0,s.jsx)(c.Z,{onClick:t,className:"h-100 rounded-3",variant:"outline-light",style:{fontSize:"30px"},children:(0,s.jsx)("span",{className:"fas fa-angle-".concat(n)})})})}function z(e){let[n,t]=(0,o.useState)(0),l=(0,o.useRef)(null),{comments:c=[]}=e,i=c[n],u=()=>t(n===c.length-1?0:n+1);return((0,o.useEffect)(()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(u,1e4)},[n]),0===c.length)?null:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{children:(0,s.jsx)(a.Z,{className:"blackblock m-2",children:(0,s.jsxs)(r.Z,{children:[c.length>1&&(0,s.jsx)($,{side:"left",onClick:()=>t(0===n?c.length-1:n-1)}),(0,s.jsxs)(a.Z,{className:"py-3",style:{fontSize:"18px"},children:[i.text,(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-2",children:[i.album&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/album/".concat(i.album.id),className:S().albumSpan,children:i.album.title})]}),!i.album&&i.username&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/profile/".concat(i.username),className:S().albumSpan,children:i.username})]})]})]}),c.length>1&&(0,s.jsx)($,{side:"right",onClick:u})]})})})})}let T=(0,x.Ps)(w()),D=(0,x.Ps)(A());function F(e){var n;let{albumId:t,comments:l=[]}=e,x=(0,Z.useRouter)(),j=(0,v.Z)(),[f,p]=(0,o.useState)(!1),[C,k]=(0,o.useState)(0),[y,B]=(0,o.useState)(),E=(0,o.useRef)(null),{user:w}=(0,N.Z)(),[A,{data:I,refetch:z}]=(0,d.t)(T),[F,{loading:P}]=(0,h.D)(D),R=(null==I?void 0:I.album.comments)||l,q=null==I?void 0:null===(n=I.album)||void 0===n?void 0:n.selfComment;(0,o.useEffect)(()=>A({variables:{albumId:t}}),[w,A,t]),(0,o.useEffect)(()=>{E.current&&clearTimeout(E.current),E.current=setTimeout(L,1e4)},[C]),(0,o.useEffect)(()=>{var e;let n=null==I?void 0:null===(e=I.album)||void 0===e?void 0:e.selfComment;n&&B(n.text)},[I]),(0,o.useEffect)(()=>B(),[t]);let G=R[C],L=()=>k(C===R.length-1?0:C+1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{show:f,centered:!0,onHide:()=>p(!1),children:(0,s.jsx)(i.Z.Body,{className:"m-3",children:(0,s.jsxs)(u.Z,{onSubmit:function(e){let n=b()(e.target,{hash:!0});n={...n,anon:"on"===n.anon,albumId:t},F({variables:n}).then(()=>{z(),p(!1)}),e.preventDefault()},style:{color:"black"},children:[(0,s.jsx)(r.Z,{children:(0,s.jsx)(u.Z.Group,{as:a.Z,children:(0,s.jsx)(m.Z,{required:!0,as:"textarea",name:"text",maxLength:300,onChange:e=>B(e.target.value),defaultValue:y})})}),(0,s.jsx)(r.Z,{className:"mt-2",children:(0,s.jsx)(u.Z.Group,{as:a.Z,children:(0,s.jsx)(u.Z.Check,{type:"checkbox",label:j("Comment_Anon"),name:"anon",defaultChecked:!!q&&q.anon})})}),(0,s.jsx)(r.Z,{className:"mt-2",children:(0,s.jsx)(a.Z,{className:"mx-auto",children:(0,s.jsx)(_.l,{loading:P,type:"submit",color:"primary",children:j("Save comment")})})})]})})}),(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{className:"blackblock m-2",children:[G&&(0,s.jsxs)(r.Z,{children:[R.length>1&&(0,s.jsx)($,{side:"left",onClick:()=>k(0===C?R.length-1:C-1)}),(0,s.jsxs)(a.Z,{className:"py-3",style:{fontSize:"18px"},children:[G.text,(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-2",children:[G.album&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/album/".concat(G.album.id),className:S().albumSpan,children:G.album.title})]}),!G.album&&G.username&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/profile/".concat(G.username),className:S().albumSpan,children:G.username})]})]})]}),R.length>1&&(0,s.jsx)($,{side:"right",onClick:L})]}),t&&(0,s.jsx)(r.Z,{className:"mt-3 justify-content-center",children:w?(0,s.jsx)(a.Z,{xs:3,children:(0,s.jsx)(c.Z,{onClick:()=>w?p(!0):null,className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:j(q?"Edit comment":"Add comment")})}):(0,s.jsx)(a.Z,{xs:"4",children:(0,s.jsx)(c.Z,{onClick:()=>x.replace("".concat(x.asPath,"?login")),className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:j("Comment_Login")})})})]})})]})}let P=(0,x.Ps)(I());function R(e){let[n,t]=(0,o.useState)(0),l=(0,o.useRef)(null),{data:c,loading:i}=(0,j.a)(P),u=(null==c?void 0:c.recentComments)||[];(0,o.useEffect)(()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(x,1e4)},[n]);let m=u[n],x=()=>t(n===u.length-1?0:n+1);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{className:"mt-3 px-3",children:(0,s.jsx)(a.Z,{className:E()(y().socials,""),children:i?(0,s.jsx)(_.Z,{className:"mx-auto",size:100}):m?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{children:(0,s.jsxs)(a.Z,{className:"pb-3",style:{fontSize:"18px"},children:[m.text,(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"mt-2",children:[m.album&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/album/".concat(m.album.id),className:S().albumSpan,children:m.album.title})]}),!m.album&&m.username&&(0,s.jsxs)("span",{children:[" - ",(0,s.jsx)(g(),{href:"/profile/".concat(m.username),className:S().albumSpan,children:m.username})]})]})]})}),(0,s.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,s.jsx)($,{side:"left",onClick:()=>t(0===n?u.length-1:n-1)}),(0,s.jsx)(a.Z,{className:"d-flex align-items-center justify-content-center",children:(0,s.jsxs)("div",{children:[n+1," / ",u.length]})}),(0,s.jsx)($,{side:"right",onClick:x})]})]}):null})})})}},2327:function(e){e.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}},7983:function(e){e.exports={albumSpan:"Profile_albumSpan__O9GbQ"}},9477:function(e){e.exports={root:"Sidebar_root__WlHvb",socials:"Sidebar_socials__kDIkg"}}}]);