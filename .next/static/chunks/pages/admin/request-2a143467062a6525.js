(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{1365:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/request",function(){return c(8906)}])},8906:function(d,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return D},default:function(){return E}});var e=a(828),f=a(7297),g=a(5893),h=a(7294),i=a(682),j=a(1555),k=a(343),l=a(2878),m=a(1608),n=a(4716),o=a(2318),p=a(5147),q=a(7283),r=a(319),s=a(7887),t=a(2045),u=a(5043),c=a(7422),v=a.n(c),w=a(782);function x(){var a=(0,f.Z)(["\n    mutation ($id: ID!, $reason: String){\n      rejectRequest(id: $id, reason: $reason)\n    }\n  "]);return x=function(){return a},a}function y(){var a=(0,f.Z)(["\n    mutation ($id: ID!, $title: String, $link: String, $state: String, $comments: String, $reason: String){\n      editRequest(id: $id, title: $title, link: $link, state: $state, comments: $comments, reason: $reason){\n        ","\n      }\n    }\n  "]);return y=function(){return a},a}function z(){var a=(0,f.Z)(["\n  query ($state: String!, $donator: [Boolean!]!) {\n    requests(state: [$state], donator: $donator) {\n      ","\n    }\n  }\n"]);return z=function(){return a},a}var A=["Complete","Pending","Hold"].map(function(a){return{label:a,value:a.toLowerCase()}}),B=["Donators","Members"].map(function(a){return{label:a,value:"Donators"===a}}),C="\n  id\n  title\n  link\n  user\n  userID\n  state\n  donator\n  reason\n  comments\n",D=!0;function E(){return(0,g.jsx)(i.Z,{children:(0,g.jsx)(j.Z,{children:(0,g.jsx)(G,{})})})}function F(b){var a=b.request,B=b.setRequest,o=(0,q.Ps)(x()),p=(0,q.Ps)(y(),C),c=(0,e.Z)((0,r.D)(o),2),D=c[0],s=c[1],d=s.loading,f=(0,e.Z)((0,r.D)(p),2),E=f[0],t=f[1],i=t.loading,z=(0,h.useRef)(null);return(0,g.jsxs)(k.Z,{show:a,onHide:function(){return B()},centered:!0,children:[(0,g.jsx)(k.Z.Body,{children:(0,g.jsxs)(l.Z,{ref:z,children:[(0,g.jsxs)(m.Z,{children:[(0,g.jsxs)(l.Z.Group,{as:j.Z,children:[(0,g.jsx)(l.Z.Label,{htmlFor:"title",style:{color:"black"},children:"Title:"}),(0,g.jsx)(l.Z.Control,{required:!0,type:"text",name:"title",defaultValue:null==a?void 0:a.title})]}),(0,g.jsxs)(l.Z.Group,{as:j.Z,children:[(0,g.jsx)(l.Z.Label,{htmlFor:"link",style:{color:"black"},children:"Link:"}),(0,g.jsx)(l.Z.Control,{required:!0,type:"text",name:"link",defaultValue:null==a?void 0:a.link})]})]}),(0,g.jsx)(m.Z,{className:"mt-3",children:(0,g.jsxs)(l.Z.Group,{as:j.Z,children:[(0,g.jsx)(l.Z.Label,{htmlFor:"state",style:{color:"black"},children:"Status:"}),(0,g.jsx)("select",{className:"form-control",name:"state",defaultValue:null==a?void 0:a.state,children:A.map(function(a){return(0,g.jsx)("option",{value:a.value,children:a.label},a.value)})})]})}),(0,g.jsx)(m.Z,{className:"mt-3",children:(0,g.jsxs)(l.Z.Group,{as:j.Z,children:[(0,g.jsx)(l.Z.Label,{htmlFor:"comment",style:{color:"black"},defaultValue:null==a?void 0:a.comment,children:"Comments:"}),(0,g.jsx)(n.Z,{required:!0,as:"textarea",name:"comment"})]})}),(0,g.jsx)(m.Z,{className:"mt-3",children:(0,g.jsxs)(l.Z.Group,{as:j.Z,children:[(0,g.jsx)(l.Z.Label,{htmlFor:"reason",style:{color:"black"},defaultValue:null==a?void 0:a.reason,children:"Reason:"}),(0,g.jsx)(n.Z,{required:!0,as:"textarea",name:"reason"})]})})]})}),(0,g.jsxs)(k.Z.Footer,{children:[(0,g.jsx)(u.l,{loading:d,disabled:i,variant:"danger",onClick:function(){var c=z.current,b=v()(c,{hash:!0});b.id=a.id,D({variables:b}).then(function(a){w.Am.success("Request rejected succesfully!"),B(),c.reset()}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})},children:"Reject"}),(0,g.jsx)(u.l,{loading:i,disabled:d,variant:"primary",onClick:function(){var c=z.current,b=v()(c,{hash:!0});b.id=a.id,E({variables:b}).then(function(a){w.Am.success("Updated request succesfully!"),B(a.data.editRequest),c.reset()}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})},children:"Save Changes"})]})]})}function G(){var a=(0,h.useState)(["pending"]),e=a[0],p=a[1],b=(0,h.useState)(B.map(function(a){return a.value})),q=b[0],r=b[1],c=(0,h.useState)(""),s=c[0],u=c[1],d=(0,h.useState)(),f=d[0],i=d[1],k=function(a){a.persist(),a.preventDefault(),u(a.target.value)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(F,{request:f,setRequest:i}),(0,g.jsxs)(l.Z,{className:"site-form blackblock mt-5 py-4",children:[(0,g.jsx)(m.Z,{className:"mb-3",children:(0,g.jsx)(j.Z,{children:(0,g.jsx)(l.Z.Group,{children:(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(o.Z.Text,{children:"\uD83D\uDD0E"}),(0,g.jsx)(n.Z,{type:"text",onBlur:k,onKeyDown:function(a){"Enter"===a.key&&k(a)}})]})})})}),(0,g.jsxs)(m.Z,{className:"my-3",children:[(0,g.jsx)(j.Z,{md:"auto",children:(0,g.jsx)(l.Z.Label,{htmlFor:"status",children:"Status:"})}),(0,g.jsx)(j.Z,{children:(0,g.jsx)(t.d7,{onChange:function(a){return p(a.map(function(a){return a.value}))},required:!0,name:"status",defaultValue:[{label:"Pending",value:"pending"}],options:A})})]}),(0,g.jsxs)(m.Z,{className:"my-3",children:[(0,g.jsx)(j.Z,{md:"auto",children:(0,g.jsx)(l.Z.Label,{htmlFor:"status",children:"Users:"})}),(0,g.jsx)(j.Z,{children:(0,g.jsx)(t.d7,{onChange:function(a){return r(a.map(function(a){return a.value}))},required:!0,name:"users",defaultValue:B,options:B})})]}),e.map(function(a){return(0,g.jsx)(H,{state:a,users:q,search:s.toLowerCase(),setRequest:i},a)})]})]})}function H(a){var b=a.state,e=a.users,l=a.search,n=a.setRequest,f="hold"===b,h=(0,q.Ps)(z(),C),c=(0,s.a)(h,{variables:{state:b,donator:e}}),i=c.data,k=c.loading,d=c.error;return d&&(console.log(d),w.Am.error("Failed to fetch requests")),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Z,{className:"mt-4",children:(0,g.jsx)(j.Z,{children:(0,g.jsx)("h3",{className:"text-capitalize",children:b})})}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(j.Z,{style:{height:"500px"},children:(0,g.jsxs)("div",{className:"overflow-auto h-100",children:[k&&(0,g.jsx)(u.Z,{dev:!0,className:"mx-auto"}),i&&(0,g.jsxs)(p.Z,{variant:"dark",hover:!0,responsive:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"ID"}),(0,g.jsx)("th",{children:"Title"}),(0,g.jsx)("th",{children:"Link"}),(0,g.jsx)("th",{children:"User"}),(0,g.jsx)("th",{children:"Donator"}),f&&(0,g.jsx)("th",{children:"Reason"}),(0,g.jsx)("th",{children:"Comments"}),(0,g.jsx)("th",{})]})}),(0,g.jsx)("tbody",{children:(0,g.jsx)(function(){return i.requests.filter(function(a){var b=a.title,c=a.link;return(null==b?void 0:b.toLowerCase().includes(l))||(null==c?void 0:c.toLowerCase())===l}).map(function(a){var b=a.id,d=a.title,e=a.link,h=a.user,c=a.userID,i=a.donator,j=a.reason,k=a.comments;return(0,g.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return n(a)},children:[(0,g.jsx)("td",{children:b}),(0,g.jsx)("td",{children:d}),(0,g.jsx)("td",{children:e}),(0,g.jsx)("td",{children:h||(c?"<@".concat(c,">"):"Not Found")}),(0,g.jsx)("td",{style:{textAlign:"center"},children:i?"\u2B50":""}),f&&(0,g.jsx)("td",{children:j}),(0,g.jsx)("td",{children:k})]},b)})},{})})]})]})})})]})}},2318:function(h,c,a){"use strict";var d=a(4184),i=a.n(d),e=a(7294),f=a(6611),j=a(6792),k=a(6558),l=a(3045),m=a(5893);let g=(0,f.Z)("input-group-text",{Component:"span"}),b=e.forwardRef(({bsPrefix:a,size:b,hasValidation:c,className:d,as:f="div",...g},h)=>{a=(0,j.vE)(a,"input-group");let k=(0,e.useMemo)(()=>({}),[]);return(0,m.jsx)(l.Z.Provider,{value:k,children:(0,m.jsx)(f,{ref:h,...g,className:i()(d,a,b&&`${a}-${b}`,c&&"has-validation")})})});b.displayName="InputGroup",c.Z=Object.assign(b,{Text:g,Radio:a=>(0,m.jsx)(g,{children:(0,m.jsx)(k.Z,{type:"radio",...a})}),Checkbox:a=>(0,m.jsx)(g,{children:(0,m.jsx)(k.Z,{type:"checkbox",...a})})})},5147:function(f,b,a){"use strict";var c=a(4184),g=a.n(c),d=a(7294),h=a(6792),i=a(5893);let e=d.forwardRef(({bsPrefix:j,className:k,striped:l,bordered:m,borderless:n,hover:o,size:d,variant:e,responsive:b,...p},q)=>{let a=(0,h.vE)(j,"table"),r=g()(k,a,e&&`${a}-${e}`,d&&`${a}-${d}`,l&&`${a}-striped`,m&&`${a}-bordered`,n&&`${a}-borderless`,o&&`${a}-hover`),f=(0,i.jsx)("table",{...p,className:r,ref:q});if(b){let c=`${a}-responsive`;return"string"==typeof b&&(c=`${c}-${b}`),(0,i.jsx)("div",{className:c,children:f})}return f});b.Z=e}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=1365)}),_N_E=a.O()}])