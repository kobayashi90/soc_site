(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[847],{1220:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/album/[id]",function(){return c(6010)}])},9578:function(a,b,c){"use strict";c.d(b,{X:function(){return t},Z:function(){return s}});var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(1555),j=c(4184),k=c.n(j),l=c(5675),m=c.n(l),n=c(1664),o=c.n(n),p=c(4876),q=c.n(p),r=c(1331);function s(a){var b=a.id,c=a.title,e=a.type,f=void 0===e?"album":e,h=a.status,i=a.height,j=void 0===i?300:i,l=a.width,n=void 0===l?300:l,p=a.placeholder,s=a.style,t="coming"===h,u=p||r.l7,v=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:q().img,children:(0,g.jsx)(m(),{alt:c,src:(0,r.Jn)(b,f),layout:"responsive",width:n,height:j,placeholder:"blur",blurDataURL:u})}),(0,g.jsx)("div",{className:"text-wrap text-center p-2",children:t?"Coming Soon":c})]})};return(0,g.jsx)("div",{className:k()(q().albumBox,(0,d.Z)({},q().coming,t)),style:s,children:t?(0,g.jsx)(v,{}):(0,g.jsx)(o(),{href:"/".concat(f,"/").concat(b),children:(0,g.jsx)(v,{})})})}function t(a){var b=a.items,c=a.type,d=a.width,j=a.height,l=a.style,m=a.colProps,n=void 0===m?{}:m;return b.map(function(a){return(0,h.createElement)(i.Z,(0,f.Z)((0,e.Z)({},n),{key:a.id,className:k()(q().albumBoxContainer,q()[c],"px-1 mb-2")}),(0,g.jsx)(s,(0,f.Z)((0,e.Z)({},a),{style:l,type:c,width:d,height:j})))})}},6658:function(a,b,c){"use strict";c.d(b,{T:function(){return E},Z:function(){return H}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(1555),j=c(5005),k=c(1608),l=c(343),m=c(2878),n=c(4716),o=c(7294),p=c(7283),q=c(3359),r=c(319),s=c(7422),t=c.n(s),u=c(1664),v=c.n(u),w=c(1292),x=c(5043),y=c(9409),z=c.n(y),A=c(2729);function B(){var a=(0,g.Z)(["\n  query ($ostId: ID!) {\n    album(id: $ostId){\n      comments {\n        text\n        username\n      }\n      selfComment {\n        text\n        anon\n      }\n    }\n  }\n"]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  mutation ($text: String!, $anon: Boolean!, $ostId: ID!) {\n    updateComment(text: $text, anon: $anon, ostId: $ostId)\n  }\n"]);return C=function(){return a},a}function D(a){var b=a.side,c=a.onClick;return(0,h.jsx)(i.Z,{xs:"auto",children:(0,h.jsx)(j.Z,{onClick:c,className:"h-100 rounded-3",variant:"outline-light",style:{fontSize:"30px"},children:(0,h.jsx)("span",{className:"fas fa-angle-".concat(b)})})})}function E(a){var b=(0,o.useState)(0),c=b[0],d=b[1],e=(0,o.useRef)(null),f=a.comments,g=void 0===f?[]:f,j=g[c],l=function(){return d(c===g.length-1?0:c+1)};return((0,o.useEffect)(function(){e.current&&clearTimeout(e.current),e.current=setTimeout(l,1e4)},[c]),0===g.length)?null:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(k.Z,{children:(0,h.jsx)(i.Z,{className:"blackblock m-2",children:(0,h.jsxs)(k.Z,{children:[g.length>1&&(0,h.jsx)(D,{side:"left",onClick:function(){return d(0===c?g.length-1:c-1)}}),(0,h.jsxs)(i.Z,{className:"py-3",style:{fontSize:"18px"},children:[j.text,(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"mt-2",children:[j.album&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/album/".concat(j.album.id),className:z().albumSpan,children:j.album.title})]}),!j.album&&j.username&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/profile/".concat(j.username),className:z().albumSpan,children:j.username})]})]})]}),g.length>1&&(0,h.jsx)(D,{side:"right",onClick:l})]})})})})}var F=(0,p.Ps)(B()),G=(0,p.Ps)(C());function H(a){var b=function(a){var b=t()(a.target,{hash:!0});b=(0,e.Z)((0,d.Z)({},b),{anon:"on"===b.anon,ostId:c}),P({variables:b}).then(function(){N(),y(!1)}),a.preventDefault()},c=a.ostId,g=a.comments,p=(0,A.Z)(),s=(0,o.useState)(!1),u=s[0],y=s[1],B=(0,o.useState)(0),C=B[0],E=B[1],H=(0,o.useRef)(null),I=(0,w.Z)().user,J=(0,f.Z)((0,q.t)(F),2),K=J[0],L=J[1],M=L.data,N=L.refetch,O=(0,f.Z)((0,r.D)(G),2),P=O[0],Q=O[1],R=Q.loading,S=(null==M?void 0:M.album)||{comments:void 0===g?[]:g},T=S.comments,U=S.selfComment;(0,o.useEffect)(function(){return K({variables:{ostId:c}})},[I,K,c]),(0,o.useEffect)(function(){H.current&&clearTimeout(H.current),H.current=setTimeout(W,1e4)},[C]);var V=T[C],W=function(){return E(C===T.length-1?0:C+1)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.Z,{show:u,centered:!0,onHide:function(){return y(!1)},children:(0,h.jsx)(l.Z.Body,{className:"m-3",children:(0,h.jsxs)(m.Z,{onSubmit:b,style:{color:"black"},children:[(0,h.jsx)(k.Z,{children:(0,h.jsx)(m.Z.Group,{as:i.Z,children:(0,h.jsx)(n.Z,{required:!0,as:"textarea",name:"text",maxLength:300,defaultValue:U?U.text:""})})}),(0,h.jsx)(k.Z,{className:"mt-2",children:(0,h.jsx)(m.Z.Group,{as:i.Z,children:(0,h.jsx)(m.Z.Check,{type:"checkbox",label:p("Comment_Anon"),name:"anon",defaultChecked:!!U&&U.anon})})}),(0,h.jsx)(k.Z,{className:"mt-2",children:(0,h.jsx)(i.Z,{className:"mx-auto",children:(0,h.jsx)(x.l,{loading:R,type:"submit",color:"primary",children:p("Save comment")})})})]})})}),(0,h.jsx)(k.Z,{children:(0,h.jsxs)(i.Z,{className:"blackblock m-2",children:[V&&(0,h.jsxs)(k.Z,{children:[T.length>1&&(0,h.jsx)(D,{side:"left",onClick:function(){return E(0===C?T.length-1:C-1)}}),(0,h.jsxs)(i.Z,{className:"py-3",style:{fontSize:"18px"},children:[V.text,(0,h.jsx)("br",{}),(0,h.jsxs)("div",{className:"mt-2",children:[V.album&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/album/".concat(V.album.id),className:z().albumSpan,children:V.album.title})]}),!V.album&&V.username&&(0,h.jsxs)("span",{children:[" - ",(0,h.jsx)(v(),{href:"/profile/".concat(V.username),className:z().albumSpan,children:V.username})]})]})]}),T.length>1&&(0,h.jsx)(D,{side:"right",onClick:W})]}),c&&(0,h.jsx)(k.Z,{className:"mt-3 justify-content-center",children:I?(0,h.jsx)(i.Z,{xs:3,children:(0,h.jsx)(j.Z,{onClick:function(){return I?y(!0):null},className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:p(U?"Edit comment":"Add comment")})}):(0,h.jsx)(i.Z,{xs:"4",children:(0,h.jsx)(j.Z,{className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:p("Comment_Login")})})})]})})]})}},6010:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return aG},default:function(){return aH}});var d=c(4924),e=c(6042),f=c(9396),g=c(828),h=c(7297),i=c(5893),j=c(7283),k=c(6252),l=c(3359),m=c(7887),n=c(4184),o=c.n(n),p=c(7294),q=c(6792);class r extends p.Component{}function s(a,b){let c=a;return"left"===a?c=b?"end":"start":"right"===a&&(c=b?"start":"end"),c}let t=p.forwardRef(({bsPrefix:a,placement:b,className:c,style:d,children:e,arrowProps:f,popper:g,show:h,...j},k)=>{a=(0,q.vE)(a,"tooltip");let l=(0,q.SC)(),[m]=(null==b?void 0:b.split("-"))||[],n=s(m,l);return(0,i.jsxs)("div",{ref:k,style:d,role:"tooltip","x-placement":m,className:o()(c,a,`bs-tooltip-${n}`),...j,children:[(0,i.jsx)("div",{className:"tooltip-arrow",...f}),(0,i.jsx)("div",{className:`${a}-inner`,children:e})]})});t.defaultProps={placement:"right"},t.displayName="Tooltip";var u=t,v=c(424),w=c(6454),x=c(6852);function y(a,b,c){var d=c-Date.now();a.current=d<=2147483647?setTimeout(b,d):setTimeout(function(){return y(a,b,c)},2147483647)}c(2473);var z=c(5446),A=c(5654),B=c(3935),C=c(2092),D=c(9606),E=c(2950),F=c(7216),G=c(8146),H=c(5680);let I=()=>{};var J=function(a,b,{disabled:c,clickTrigger:d}={}){let e=b||I;(0,H.Z)(a,e,{disabled:c,clickTrigger:d});let f=(0,G.Z)(a=>{27===a.keyCode&&e(a)});(0,p.useEffect)(()=>{if(c||null==a)return;let b=(0,F.Z)((0,H.f)(a)),d=(b.defaultView||window).event,e=(0,E.Z)(b,"keyup",a=>{if(a===d){d=void 0;return}f(a)});return()=>{e()}},[a,c,f])},K=c(4194),L=c(12);let M=p.forwardRef((a,b)=>{let{flip:c,offset:d,placement:e,containerPadding:f,popperConfig:g={},transition:h}=a,[j,k]=(0,C.Z)(),[l,m]=(0,C.Z)(),n=(0,A.Z)(k,b),o=(0,K.Z)(a.container),q=(0,K.Z)(a.target),[r,s]=(0,p.useState)(!a.show),t=(0,D.Z)(q,j,(0,L.ZP)({placement:e,enableEvents:!!a.show,containerPadding:f||5,flip:c,offset:d,arrowElement:l,popperConfig:g}));a.show?r&&s(!1):a.transition||r||s(!0);let u=(...b)=>{s(!0),a.onExited&&a.onExited(...b)},v=a.show||h&&!r;if(J(j,a.onHide,{disabled:!a.rootClose||a.rootCloseDisabled,clickTrigger:a.rootCloseEvent}),!v)return null;let w=a.children(Object.assign({},t.attributes.popper,{style:t.styles.popper,ref:n}),{popper:t,placement:e,show:!!a.show,arrowProps:Object.assign({},t.attributes.arrow,{style:t.styles.arrow,ref:m})});if(h){let{onExit:x,onExiting:y,onEnter:z,onEntering:E,onEntered:F}=a;w=(0,i.jsx)(h,{in:a.show,appear:!0,onExit:x,onExiting:y,onExited:u,onEnter:z,onEntering:E,onEntered:F,children:w})}return o?B.createPortal(w,o):null});M.displayName="Overlay";var N=M,O=c(1132),P=c(6611),Q=(0,P.Z)("popover-header"),R=(0,P.Z)("popover-body");let S=p.forwardRef(({bsPrefix:a,placement:b,className:c,style:d,children:e,body:f,arrowProps:g,popper:h,show:j,...k},l)=>{let m=(0,q.vE)(a,"popover"),n=(0,q.SC)(),[p]=(null==b?void 0:b.split("-"))||[],r=s(p,n);return(0,i.jsxs)("div",{ref:l,role:"tooltip",style:d,"x-placement":p,className:o()(c,m,p&&`bs-popover-${r}`),...k,children:[(0,i.jsx)("div",{className:"popover-arrow",...g}),f?(0,i.jsx)(R,{children:e}):e]})});S.defaultProps={placement:"right"};var T=Object.assign(S,{Header:Q,Body:R,POPPER_OFFSET:[0,8]}),U=c(1068),V=c(8285);let W={transition:U.Z,rootClose:!1,show:!1,placement:"top"},X=p.forwardRef(({children:a,transition:b,popperConfig:c={},...d},e)=>{let f=(0,p.useRef)({}),[g,h]=function(a){let b=(0,p.useRef)(null),c=(0,q.vE)(void 0,"popover"),d=(0,p.useMemo)(()=>({name:"offset",options:{offset:()=>b.current&&(0,O.Z)(b.current,c)?a||T.POPPER_OFFSET:a||[0,0]}}),[a,c]);return[b,[d]]}(d.offset),j=(0,A.Z)(e,g),k=!0===b?U.Z:b||void 0;return(0,i.jsx)(N,{...d,ref:j,popperConfig:{...c,modifiers:h.concat(c.modifiers||[])},transition:k,children(c,{arrowProps:d,popper:e,show:g}){var h,i;!function(a,b){let{ref:c}=a,{ref:d}=b;a.ref=c.__wrapped||(c.__wrapped=a=>c((0,V.Z)(a))),b.ref=d.__wrapped||(d.__wrapped=a=>d((0,V.Z)(a)))}(c,d);let j=null==e?void 0:e.placement,k=Object.assign(f.current,{state:null==e?void 0:e.state,scheduleUpdate:null==e?void 0:e.update,placement:j,outOfBoundaries:(null==e?void 0:null==(h=e.state)?void 0:null==(i=h.modifiersData.hide)?void 0:i.isReferenceHidden)||!1});return"function"==typeof a?a({...c,placement:j,show:g,...!b&&g&&{className:"show"},popper:k,arrowProps:d}):p.cloneElement(a,{...c,placement:j,arrowProps:d,popper:k,className:o()(a.props.className,!b&&g&&"show"),style:{...a.props.style,...c.style}})}})});X.displayName="Overlay",X.defaultProps=W;var Y=X;function Z(a,b,c){let[d]=b,e=d.currentTarget,f=d.relatedTarget||d.nativeEvent[c];f&&f===e||(0,v.Z)(e,f)||a(...b)}function $({trigger:a,overlay:b,children:c,popperConfig:d={},show:e,defaultShow:f=!1,onToggle:g,delay:h,placement:j,flip:k=j&& -1!==j.indexOf("auto"),...l}){var m,n,o;let q=(0,p.useRef)(null),r=(0,A.Z)(q,c.ref),s=(m=(0,w.Z)(),n=(0,p.useRef)(),(0,x.Z)(function(){return clearTimeout(n.current)}),(0,p.useMemo)(function(){var a=function(){return clearTimeout(n.current)};return{set:function(b,c){void 0===c&&(c=0),m()&&(a(),c<=2147483647?n.current=setTimeout(b,c):y(n,b,Date.now()+c))},clear:a}},[])),t=(0,p.useRef)(""),[u,v]=(0,z.$c)(e,f,g),B=(o=h)&&"object"==typeof o?o:{show:o,hide:o},{onFocus:C,onBlur:D,onClick:E}="function"!=typeof c?p.Children.only(c).props:{},F=a=>{r((0,V.Z)(a))},G=(0,p.useCallback)(()=>{if(s.clear(),t.current="show",!B.show){v(!0);return}s.set(()=>{"show"===t.current&&v(!0)},B.show)},[B.show,v,s]),H=(0,p.useCallback)(()=>{if(s.clear(),t.current="hide",!B.hide){v(!1);return}s.set(()=>{"hide"===t.current&&v(!1)},B.hide)},[B.hide,v,s]),I=(0,p.useCallback)((...a)=>{G(),null==C||C(...a)},[G,C]),J=(0,p.useCallback)((...a)=>{H(),null==D||D(...a)},[H,D]),K=(0,p.useCallback)((...a)=>{v(!u),null==E||E(...a)},[E,v,u]),L=(0,p.useCallback)((...a)=>{Z(G,a,"fromElement")},[G]),M=(0,p.useCallback)((...a)=>{Z(H,a,"toElement")},[H]),N=null==a?[]:[].concat(a),O={ref:F};return -1!==N.indexOf("click")&&(O.onClick=K),-1!==N.indexOf("focus")&&(O.onFocus=I,O.onBlur=J),-1!==N.indexOf("hover")&&(O.onMouseOver=L,O.onMouseOut=M),(0,i.jsxs)(i.Fragment,{children:["function"==typeof c?c(O):(0,p.cloneElement)(c,O),(0,i.jsx)(Y,{...l,show:u,onHide:H,flip:k,placement:j,popperConfig:d,target:q.current,children:b})]})}$.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var _=$,aa=c(1608),ab=c(1555),ac=c(682),ad=c(5005),ae=c(5675),af=c.n(ae),ag=c(9008),ah=c.n(ag),ai=c(782),aj=c(1163),ak=c(119),al=c.n(ak),am=c(3463),an=c.n(am),ao=c(1292),ap=c(9578),aq=c(1331),ar=c(5043),as=c(6658),at=c(2729);function au(){var a=(0,h.Z)(["\nquery downloads ($id: ID!) {\n  downloads(id: $id){\n    title\n    small\n    links{\n      id\n      url\n      provider\n      custom\n      directUrl\n    }\n  }\n}\n"]);return au=function(){return a},a}function av(){var a=(0,h.Z)(["\n  mutation ($ostId: ID!, $score: Int!){\n    rateAlbum(ostId: $ostId, score: $score)\n  }\n"]);return av=function(){return a},a}function aw(){var a=(0,h.Z)(["\n    query ($ostId: ID!) {\n      album(id: $ostId){\n        selfScore\n        avgRating {\n          score\n          users\n        }\n      }\n    }\n  "]);return aw=function(){return a},a}function ax(){var a=(0,h.Z)(["\n  mutation ($ostId: String!) {\n    ","Favorite(ostId: $ostId)\n  }\n"]);return ax=function(){return a},a}function ay(){var a=(0,h.Z)(["\n  query ($ostId: ID!) {\n    album(id: $ostId){\n      isFavorite\n    }\n  }\n"]);return ay=function(){return a},a}var az=(0,j.Ps)(au()),aA=(0,j.Ps)(av());function aB(a){var b=function(a){var b,c=a.value,e=(0,at.Z)(),g=(0,k.x)(),h=o()(A>=c||(m||z)>=c?"fas fa-star":A>=c-.5?"fas fa-star-half":"far fa-star",an().star,(b={},(0,d.Z)(b,an().gold,m?m>=c:z>=c),(0,d.Z)(b,"ps-1",c>1),b));return(0,i.jsx)("span",{className:h,onClick:function(){g.mutate({mutation:aA,variables:{ostId:f,score:c}}).then(function(){ai.Am.success(e("Rating saved!")),w()}).catch(function(a){console.log(a),ai.Am.error(e("Failed to save rating"))})},onMouseOver:function(){return n(c)},onMouseOut:function(){return n()}},c)},c=a.score,e=a.users,f=a.ostId,h=(0,p.useState)(),m=h[0],n=h[1],q=(0,ao.Z)().user,r=(0,j.Ps)(aw()),s=(0,g.Z)((0,l.t)(r),2),t=s[0],u=s[1],v=u.data,w=u.refetch;(0,p.useEffect)(function(){return t({variables:{ostId:f}})},[q]);for(var x=(null==v?void 0:v.album)||{avgRating:{score:c,users:e}},y=x.avgRating,z=x.selfScore,A=y.score,B=y.users,C=[],D=1;D<=5;)C.push((0,i.jsx)(b,{value:D},D)),D++;return(0,i.jsxs)(i.Fragment,{children:[C,(0,i.jsxs)("span",{className:"ms-2",children:["(",A," by ",B," users)"]})]})}var aC=function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:75;return"/_next/image?w=3840&q=".concat(b,"&url=").concat((0,aq.Jn)(a))},aD=function(a){return(0,j.Ps)(ax(),a)},aE=aD("add"),aF=aD("remove"),aG=!0;function aH(a){var b=function(){r(!0),s.mutate({mutation:v.album.isFavorite?aF:aE,variables:{ostId:c}}).then(function(){return ai.Am.success(g(v.album.isFavorite?"Favorite_Added":"Favorite_Removed"))}).catch(function(a){console.log(a),ai.Am.error("Query failed")}).finally(function(){r(!1),w(),h.replace(h.asPath)})},c=a.id,d=a.album,f=a.imageUrl,g=(0,at.Z)(),h=(0,aj.useRouter)(),l=(0,ao.Z)().user,n=(0,p.useState)(!1),q=n[0],r=n[1],s=(0,k.x)(),t=(0,j.Ps)(ay()),u=(0,m.a)(t),v=u.data,w=u.refetch;return(0,p.useEffect)(function(){return w({ostId:c})},[l,c,w]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(aa.Z,{style:{backgroundAttachment:"fixed",backgroundPosition:"top center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundBlendMode:"overlay",backgroundImage:'url("'.concat(aC(d.id,100),'"), linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))')},children:[(0,i.jsxs)(ah(),{children:[(0,i.jsx)("title",{children:d.title}),(0,i.jsx)("meta",{name:"theme-color",content:d.headerColor},"color"),(0,i.jsx)("meta",{property:"og:url",content:"/album/".concat(d.id)},"url"),(0,i.jsx)("meta",{property:"og:title",content:d.title},"title"),(0,i.jsx)("meta",{property:"og:description",content:d.subTitle||d.artists.map(function(a){return a.name}).join(" - ")},"desc"),(0,i.jsx)("meta",{property:"og:image",content:f},"image")]}),(0,i.jsx)(ab.Z,{className:"p-0 px-md-5 pt-3",children:(0,i.jsxs)(ac.Z,{className:"px-0 px-md-5",children:[(0,i.jsxs)(aa.Z,{children:[(0,i.jsx)(ab.Z,{lg:5,children:(0,i.jsx)(af(),{layout:"responsive",width:300,height:300,alt:d.title,src:(0,aq.Jn)(d.id),placeholder:"blur",blurDataURL:d.placeholder||aq.l7})}),(0,i.jsxs)(ab.Z,{lg:7,className:"blackblock",children:[(0,i.jsx)(aa.Z,{children:(0,i.jsxs)(ab.Z,{children:[(0,i.jsx)("h1",{className:o()("text-center",al().title),children:d.title}),(0,i.jsx)("h6",{className:"text-center",style:{whiteSpace:"pre-wrap"},children:d.subTitle}),(0,i.jsx)("table",{className:al().table,children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"width-row",children:g("Release Date")}),(0,i.jsx)("td",{children:new Date(d.releaseDate).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric"})})]}),d.artists.length>0&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Artists")}),(0,i.jsx)("td",{children:d.artists.map(function(a){return a.id,a.name}).join(", ")})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Classification")}),(0,i.jsx)("td",{children:[d.categories.map(function(a){var b=a.name;return g("".concat(b," Soundtrack"))}).join(" & "),d.classifications.map(function(a){return a.name}).join(", ")].filter(function(a){return""!==a}).join(" - ")})]}),d.label&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Published by")}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{className:"btn btn-link p-0",href:"/publisher/".concat(d.label),children:d.label})})]}),d.platforms.length>0&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Platforms")}),(0,i.jsx)("td",{children:d.platforms.map(function(a,b){var c=a.id,e=a.name;return(0,i.jsxs)(p.Fragment,{children:["29"===c?(0,i.jsx)("span",{className:"btn p-0",style:{color:"white"},children:e}):(0,i.jsx)("a",{className:"btn btn-link p-0",href:"/platform/".concat(c),children:e}),b!==d.platforms.length-1&&", "]},c)})})]}),d.games.length>0&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Games")}),(0,i.jsx)("td",{children:d.games.map(function(a,b){var c=a.slug,e=a.name;return(0,i.jsxs)(p.Fragment,{children:[(0,i.jsx)("a",{className:"btn btn-link p-0",href:"/game/".concat(c),children:e}),b!==d.games.length-1&&", "]},c)})})]}),d.animations.length>0&&(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:g("Animations")}),(0,i.jsx)("td",{children:d.animations.map(function(a,b){var c=a.id,e=a.title;return(0,i.jsxs)(p.Fragment,{children:[(0,i.jsx)("a",{className:"btn btn-link p-0",href:"/anim/".concat(c),children:e}),b!==d.animations.length-1&&", "]},c)})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("th",{children:[g("Avg. Rating"),": "]}),(0,i.jsx)("td",{children:(0,i.jsx)(aB,(0,e.Z)({ostId:d.id},d.avgRating))})]})]})})]})}),(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{children:(0,i.jsx)("h6",{className:"text-center",children:d.description})})}),(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{children:(0,i.jsx)(ar.l,{loading:q,onClick:v?b:null,className:"w-100 rounded-3",variant:"outline-light",style:{fontSize:"18px"},children:g(v?v.album.isFavorite?"Favorite_Remove":"Favorite_Add":"Favorite_Login")})})})]})]}),(0,i.jsx)("hr",{}),(0,i.jsxs)(aa.Z,{children:[(0,i.jsx)(aK,{discs:d.discs}),(0,i.jsxs)(ab.Z,{lg:6,className:"blackblock px-10px",children:[d.vgmdb&&(0,i.jsx)(aa.Z,{children:(0,i.jsxs)(ab.Z,{className:"mb-2 ms-2",children:[(0,i.jsxs)("span",{children:["Check album at",":"]}),(0,i.jsx)("a",{className:"ms-2",target:"_blank",rel:"noopener noreferrer",href:d.vgmdb,children:(0,i.jsx)(af(),{width:100,height:30,alt:"VGMdb",src:"/img/assets/vgmdblogo.png"})})]})}),d.stores.length>0&&(0,i.jsx)(aa.Z,{className:"mt-2 px-3",children:(0,i.jsxs)(ab.Z,{className:al().stores,style:{paddingLeft:"15px",paddingTop:"10px",paddingRight:"15px",paddingBottom:"10px"},children:[(0,i.jsx)("h1",{className:"text-center homeTitle",style:{fontSize:"30px"},children:g("Buy_Original")}),(0,i.jsx)("hr",{className:"style-white w-100 mt-0"}),(0,i.jsx)(aa.Z,{children:d.stores.map(function(a,b){var c=a.url,d=a.provider;return"SOON"===d?null:(0,i.jsx)(ab.Z,{md:6,className:"d-flex justify-content-center",children:(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:c,children:(0,i.jsx)(af(),{className:"rounded",width:190,height:65,alt:d,src:"/img/provider/".concat(d,".jpg")})})},b)})})]})}),(0,i.jsx)("hr",{className:"style-white w-100"}),(0,i.jsx)(aI,{id:c,user:l,t:g})]})]}),(0,i.jsx)(as.Z,{ostId:c,comments:d.comments}),d.related.length>0&&(0,i.jsxs)(aa.Z,{children:[(0,i.jsx)(ab.Z,{children:(0,i.jsx)("div",{className:"blackblock m-2",children:(0,i.jsx)("h1",{className:"text-center text-uppercase ost-title",children:g("Related Soundtracks")})})}),(0,i.jsx)(aa.Z,{className:"justify-content-center",children:(0,i.jsx)(ap.X,{colProps:{md:3,xs:6},items:d.related})})]})]})})]})})}function aI(a){var b=a.id,c=a.user,d=a.t,e=(0,m.a)(az,{variables:{id:b}}),f=e.data,g=e.loading,h=e.refetch;if((0,p.useEffect)(function(){return h({id:b})},[c,b,h]),g)return(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{children:(0,i.jsx)(ar.Z,{className:"mx-auto"})})});var j=f.downloads;return(void 0===j?[]:j).map(function(a,b){var c=a.links,e=a.title;return(0,i.jsx)(aa.Z,{children:(0,i.jsxs)(ab.Z,{children:[(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{md:12,children:(0,i.jsx)("h2",{className:"text-center download-txt mb-0",children:e})})}),c.map(function(a){var b=a.id,c=a.url,e=a.provider,f=a.directUrl;return(0,i.jsxs)(p.Fragment,{children:[(0,i.jsx)(aa.Z,{className:"mt-2",children:(0,i.jsx)(ab.Z,{md:12,children:(0,i.jsx)("h5",{className:"text-center",children:e})})}),(0,i.jsxs)(aa.Z,{className:"mx-auto mb-3",children:[(0,i.jsx)(ab.Z,{xs:6,className:" mx-auto py-2",children:(0,i.jsx)(ad.Z,{target:"_blank",variant:"secondary",className:al().download,href:c,children:d("Download")})}),f&&(0,i.jsx)(ab.Z,{className:"py-2",children:(0,i.jsx)(aJ,{target:"_blank",directUrl:f})})]})]},b)}),(0,i.jsx)("hr",{className:"style-white w-100"})]})},b)})}function aJ(a){var b=a.directUrl,c=(0,at.Z)(),d="false"===b,g=function(a){return d?(0,i.jsx)(u,(0,f.Z)((0,e.Z)({},a),{id:al().tooltip,children:c("Become_Donator")})):(0,i.jsx)("div",{})},h=d?(0,i.jsx)(ad.Z,{variant:"secondary",className:o()(al().download,al().direct),disabled:d,children:c("Direct")}):(0,i.jsx)(ad.Z,{target:"_blank",variant:"secondary",className:o()(al().download,al().direct),href:b,children:c("Direct")});return(0,i.jsx)(_,{placement:"top",overlay:g,children:h})}function aK(a){var b=a.discs,c=(0,p.useState)(0),d=c[0],e=c[1],f=(0,at.Z)();return(0,i.jsx)(ab.Z,{lg:6,children:(0,i.jsxs)("div",{className:"blackblock d-inline-block w-100",children:[(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{children:(0,i.jsx)("h1",{className:o()("text-center text-uppercase",al().title),children:f("Tracklist")})})}),b.length>1&&(0,i.jsx)(aa.Z,{style:{transform:"translateY(2px)"},children:b.map(function(a,c){var g=a.number;return(0,i.jsx)(ab.Z,{className:o()("text-center",{"ps-0":c>0,"pe-0":c<b.length-1}),children:(0,i.jsxs)("div",{onClick:function(){return e(g)},className:"py-2",style:{cursor:d===g?"":"pointer",borderStyle:"solid",borderWidth:"2px 2px 2px 2px",borderColor:"#efefef",borderRightStyle:b.length-1===c?"solid":"hidden",borderBottomWidth:d===g?"0px":"2px"},children:[f("Disc")," ",g+1]})},g)})}),(0,i.jsx)(aa.Z,{children:(0,i.jsx)(ab.Z,{children:(0,i.jsx)("div",{style:{padding:"5px 5px 5px 5px",borderStyle:"solid",borderWidth:"2px 2px 2px 2px",borderColor:"#efefef",borderTopWidth:b.length>1?"0px":"2px"},children:(0,i.jsx)("table",{cellSpacing:"0",cellPadding:"1",border:"0",children:(0,i.jsx)("tbody",{children:b.length>0&&b[d].body.split("\n").map(function(a,b){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"smallfont",style:{padding:"8px"},children:(0,i.jsx)("span",{className:"label",children:b+1})}),(0,i.jsx)("td",{className:"smallfont",width:"100%",style:{padding:"8px"},children:a})]},b)})})})})})})]})})}},119:function(a){a.exports={title:"Album_title__ZaGZL",table:"Album_table__NGdRi",content:"Album_content__ActvU",stores:"Album_stores__OMIJi",download:"Album_download__pH_5m",direct:"Album_direct__br6xh"}},4876:function(a){a.exports={albumBoxContainer:"AlbumBoxes_albumBoxContainer___5OUW",anim:"AlbumBoxes_anim__Xn34t",albumBox:"AlbumBoxes_albumBox__qjbi0",img:"AlbumBoxes_img__gFWAG",coming:"AlbumBoxes_coming__jiMAE"}},9409:function(a){a.exports={albumSpan:"Profile_albumSpan__O9GbQ"}},3463:function(a){a.exports={star:"Stars_star__yQXT9",gold:"Stars_gold__v_Nx7"}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=1220)}),_N_E=a.O()}])