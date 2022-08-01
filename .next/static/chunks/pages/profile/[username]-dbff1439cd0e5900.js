(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[240],{6326:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/[username]",function(){return c(9846)}])},9578:function(a,b,c){"use strict";c.d(b,{X:function(){return t},Z:function(){return s}});var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(1555),j=c(4184),k=c.n(j),l=c(5675),m=c.n(l),n=c(1664),o=c.n(n),p=c(4876),q=c.n(p),r=c(1331);function s(a){var b=a.id,c=a.title,e=a.type,f=void 0===e?"album":e,h=a.status,i=a.height,j=void 0===i?300:i,l=a.width,n=void 0===l?300:l,p=a.placeholder,s=a.style,t="coming"===h,u=p||r.l7,v=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:q().img,children:(0,g.jsx)(m(),{alt:c,src:(0,r.Jn)(b,f),layout:"responsive",width:n,height:j,placeholder:"blur",blurDataURL:u})}),(0,g.jsx)("div",{className:"text-wrap text-center p-2",children:t?"Coming Soon":c})]})};return(0,g.jsx)("div",{className:k()(q().albumBox,(0,d.Z)({},q().coming,t)),style:s,children:t?(0,g.jsx)(v,{}):(0,g.jsx)(o(),{href:"/".concat(f,"/").concat(b),children:(0,g.jsx)(v,{})})})}function t(a){var b=a.items,c=a.type,d=a.width,j=a.height,l=a.style,m=a.colProps,n=void 0===m?{}:m;return b.map(function(a){return(0,h.createElement)(i.Z,(0,f.Z)((0,e.Z)({},n),{key:a.id,className:k()(q().albumBoxContainer,q()[c],"px-1 mb-2")}),(0,g.jsx)(s,(0,f.Z)((0,e.Z)({},a),{style:l,type:c,width:d,height:j})))})}},6658:function(a,b,c){"use strict";c.d(b,{T:function(){return E},Z:function(){return H}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(1555),j=c(5005),k=c(1608),l=c(343),m=c(2878),n=c(4716),o=c(7294),p=c(7283),q=c(3359),r=c(319),s=c(7422),t=c.n(s),u=c(1664),v=c.n(u),w=c(1292),x=c(5043),y=c(9409),z=c.n(y),A=c(2729);function B(){var a=(0,g.Z)(["\n  query ($albumId: ID!) {\n    album(id: $albumId){\n      comments {\n        text\n        username\n      }\n      selfComment {\n        text\n        anon\n      }\n    }\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  mutation ($text: String!, $anon: Boolean!, $albumId: ID!) {\n    updateComment(text: $text, anon: $anon, albumId: $albumId)\n  }\n"]);return C=function(){return a},a}function D(a){var b=a.side,c=a.onClick;return(0,h.jsx)(i.Z,{xs:"auto",children:(0,h.jsx)(j.Z,{onClick:c,className:"h-100 rounded-3",variant:"outline-light",style:{fontSize:"30px"},children:(0,h.jsx)("span",{className:"fas fa-angle-".concat(b)})})})}function E(a){var b=(0,o.useState)(0),c=b[0],d=b[1],e=(0,o.useRef)(null),f=a.comments,g=void 0===f?[]:f,j=g[c],l=function(){return d(c===g.length-1?0:c+1)};return((0,o.useEffect)(function(){e.current&&clearTimeout(e.current),e.current=setTimeout(l,1e4)},[c]),0===g.length)?null:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(k.Z,{children:(0,h.jsx)(i.Z,{className:"blackblock m-2",children:(0,h.jsxs)(k.Z,{children:[g.length>1&&(0,h.jsx)(D,{side:"left",onClick:function(){return d(0===c?g.length-1:c-1)}}),(0,h.jsxs)(i.Z,{className:"py-3",style:{fontSize:"18px"},children:[j.text,(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"mt-2",children:[j.album&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/album/".concat(j.album.id),className:z().albumSpan,children:j.album.title})]}),!j.album&&j.username&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/profile/".concat(j.username),className:z().albumSpan,children:j.username})]})]})]}),g.length>1&&(0,h.jsx)(D,{side:"right",onClick:l})]})})})})}var F=(0,p.Ps)(B()),G=(0,p.Ps)(C());function H(a){var b=function(a){var b=t()(a.target,{hash:!0});b=(0,e.Z)((0,d.Z)({},b),{anon:"on"===b.anon,albumId:c}),P({variables:b}).then(function(){N(),y(!1)}),a.preventDefault()},c=a.albumId,g=a.comments,p=(0,A.Z)(),s=(0,o.useState)(!1),u=s[0],y=s[1],B=(0,o.useState)(0),C=B[0],E=B[1],H=(0,o.useRef)(null),I=(0,w.Z)().user,J=(0,f.Z)((0,q.t)(F),2),K=J[0],L=J[1],M=L.data,N=L.refetch,O=(0,f.Z)((0,r.D)(G),2),P=O[0],Q=O[1],R=Q.loading,S=(null==M?void 0:M.album)||{comments:void 0===g?[]:g},T=S.comments,U=S.selfComment;(0,o.useEffect)(function(){return K({variables:{albumId:c}})},[I,K,c]),(0,o.useEffect)(function(){H.current&&clearTimeout(H.current),H.current=setTimeout(W,1e4)},[C]);var V=T[C],W=function(){return E(C===T.length-1?0:C+1)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{show:u,centered:!0,onHide:function(){return y(!1)},children:(0,h.jsx)(l.Z.Body,{className:"m-3",children:(0,h.jsxs)(m.Z,{onSubmit:b,style:{color:"black"},children:[(0,h.jsx)(k.Z,{children:(0,h.jsx)(m.Z.Group,{as:i.Z,children:(0,h.jsx)(n.Z,{required:!0,as:"textarea",name:"text",maxLength:300,defaultValue:U?U.text:""})})}),(0,h.jsx)(k.Z,{className:"mt-2",children:(0,h.jsx)(m.Z.Group,{as:i.Z,children:(0,h.jsx)(m.Z.Check,{type:"checkbox",label:p("Comment_Anon"),name:"anon",defaultChecked:!!U&&U.anon})})}),(0,h.jsx)(k.Z,{className:"mt-2",children:(0,h.jsx)(i.Z,{className:"mx-auto",children:(0,h.jsx)(x.l,{loading:R,type:"submit",color:"primary",children:p("Save comment")})})})]})})}),(0,h.jsx)(k.Z,{children:(0,h.jsxs)(i.Z,{className:"blackblock m-2",children:[V&&(0,h.jsxs)(k.Z,{children:[T.length>1&&(0,h.jsx)(D,{side:"left",onClick:function(){return E(0===C?T.length-1:C-1)}}),(0,h.jsxs)(i.Z,{className:"py-3",style:{fontSize:"18px"},children:[V.text,(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"mt-2",children:[V.album&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/album/".concat(V.album.id),className:z().albumSpan,children:V.album.title})]}),!V.album&&V.username&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/profile/".concat(V.username),className:z().albumSpan,children:V.username})]})]})]}),T.length>1&&(0,h.jsx)(D,{side:"right",onClick:W})]}),c&&(0,h.jsx)(k.Z,{className:"mt-3 justify-content-center",children:I?(0,h.jsx)(i.Z,{xs:3,children:(0,h.jsx)(j.Z,{onClick:function(){return I?y(!0):null},className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:p(U?"Edit comment":"Add comment")})}):(0,h.jsx)(i.Z,{xs:"4",children:(0,h.jsx)(j.Z,{className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:p("Comment_Login")})})})]})})]})}},9846:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return E},default:function(){return F}});var d=c(4924),e=c(828),f=c(7297),g=c(9815),h=c(5893),i=c(7294),j=c(7283),k=c(319),l=c(682),m=c(1608),n=c(1555),o=c(5005),p=c(343),q=c(2878),r=c(120),s=c(5675),t=c.n(s),u=c(9578),v=c(6658),w=c(5043),x=c(7422),y=c.n(x),z=c(782),A=c(1292),B=c(9008),C=c.n(B);function D(){var a=(0,f.Z)(["\n  mutation updateUser($username: String, $password: String, $email: String, $pfp: Upload){\n    updateUser(username: $username, password: $password, email: $email, pfp: $pfp)\n  }\n"]);return D=function(){return a},a}var E=!0;function F(a){var b=(0,A.Z)().user,c=a.userProfile,f=c.comments,j=c.favorites,k=c.imgUrl,p=c.placeholder,q=c.username,s=(0,g.Z)(j),w=(0,i.useState)(!1),x=w[0],y=w[1],z=r.ou.now().diff(r.ou.fromMillis(c.createdAt),["years","months"]);return Object.entries(z.values).forEach(function(a){var b=(0,e.Z)(a,2),c=b[0],f=b[1];z=z.set((0,d.Z)({},c,Math.floor(f)))}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(C(),{children:[(0,h.jsx)("meta",{property:"og:url",content:"/profile/".concat(q)},"url"),(0,h.jsx)("meta",{property:"og:description",content:"".concat(q,"'s awesome cloud")},"desc"),(0,h.jsx)("meta",{property:"og:image",content:k},"image")]}),(null==b?void 0:b.username)===q&&(0,h.jsx)(H,{setProfile:y,showProfile:x}),(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)(m.Z,{className:"mt-3",children:[(0,h.jsx)(n.Z,{xs:"auto",className:"blackblock",children:(0,h.jsx)("div",{className:"p-1 position-relative",style:{height:"200px",width:"200px"},children:(0,h.jsx)(t(),{style:{borderRadius:"25px"},layout:"fill",alt:"placeholder",src:k,blurDataURL:p})})}),(0,h.jsxs)(n.Z,{className:"blackblock ms-3 my-0 d-flex justify-content-center flex-column",children:[(0,h.jsx)(m.Z,{children:(0,h.jsx)(n.Z,{md:12,children:(0,h.jsx)("h1",{className:"text-center album-title",children:q})})}),(0,h.jsx)(m.Z,{className:"my-1",children:(0,h.jsxs)(n.Z,{className:"d-flex justify-content-center",children:[(0,h.jsx)("span",{className:"fw-bold me-1",children:"Floating for:"}),(0,h.jsx)("span",{children:z.toHuman()})]})}),(null==b?void 0:b.username)===c.username&&(0,h.jsx)(m.Z,{className:"mt-3",children:(0,h.jsx)(n.Z,{className:"d-flex justify-content-center",children:(0,h.jsx)(o.Z,{onClick:function(){return y(!0)},className:"rounded-3",variant:"outline-light",children:"Edit Account"})})})]})]}),(0,h.jsx)(v.T,{comments:f}),(0,h.jsx)("hr",{className:"style2 style-white"}),(0,h.jsx)(m.Z,{children:(0,h.jsx)(n.Z,{children:(0,h.jsx)("h1",{style:{fontSize:"45px"},className:"text-center homeTitle py-2",id:"last-releases",children:"Favorites"})})}),(0,h.jsx)(m.Z,{className:"justify-content-center",children:(0,h.jsx)(u.X,{colProps:{md:3,xs:6},items:s.sort(function(a,b){return a.title>b.title})})})]})]})}var G=(0,j.Ps)(D());function H(a){var b=a.showProfile,c=a.setProfile,d=(0,A.Z)(),f=d.user,g=d.refetch,i=(0,e.Z)((0,k.D)(G),2),j=i[0],l=i[1],o=l.loading,r=function(a){a.preventDefault();var b=y()(a.target,{hash:!0});b.pfp=a.target.elements.pfp.files[0],j({variables:b}).then(function(){z.Am.success("User updated succesfully!"),g(),c(!1)}).catch(function(a){z.Am.error("Failed to update user")})};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.Z,{show:b,centered:!0,onHide:function(){return c(!1)},children:(0,h.jsx)(p.Z.Body,{className:"m-3",children:(0,h.jsxs)(q.Z,{onSubmit:r,children:[(0,h.jsxs)(m.Z,{children:[(0,h.jsxs)(q.Z.Group,{as:n.Z,children:[(0,h.jsx)(q.Z.Label,{htmlFor:"username",style:{color:"black"},children:"Username:"}),(0,h.jsx)(q.Z.Control,{type:"text",name:"username",defaultValue:null==f?void 0:f.username})]}),(0,h.jsxs)(q.Z.Group,{as:n.Z,children:[(0,h.jsx)(q.Z.Label,{htmlFor:"email",style:{color:"black"},children:"Email:"}),(0,h.jsx)(q.Z.Control,{type:"text",name:"email",defaultValue:null==f?void 0:f.email})]})]}),(0,h.jsx)(m.Z,{className:"mt-3",children:(0,h.jsxs)(q.Z.Group,{as:n.Z,children:[(0,h.jsx)(q.Z.Label,{htmlFor:"password",style:{color:"black"},children:"Password (empty to keep it unchanged):"}),(0,h.jsx)(q.Z.Control,{type:"password",name:"password"})]})}),(0,h.jsx)(m.Z,{className:"mt-3",children:(0,h.jsxs)(q.Z.Group,{as:n.Z,children:[(0,h.jsx)(q.Z.Label,{htmlFor:"pfp",style:{color:"black"},children:"Profile pic:"}),(0,h.jsx)(q.Z.Control,{type:"file",name:"pfp"})]})}),(0,h.jsx)(m.Z,{className:"mt-4",children:(0,h.jsx)(n.Z,{md:6,className:"mx-auto",children:(0,h.jsx)(w.l,{loading:o,type:"submit",className:"w-100",color:"primary",children:"Update User"})})})]})})})})}},4876:function(a){a.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}},9409:function(a){a.exports={albumSpan:"Profile_albumSpan__O9GbQ"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=6326)}),_N_E=a.O()}])