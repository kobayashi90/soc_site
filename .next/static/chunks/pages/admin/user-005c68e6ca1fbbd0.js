(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{9280:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user",function(){return c(7426)}])},7426:function(d,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return G},default:function(){return H}});var e=a(6042),f=a(9396),g=a(828),h=a(7297),i=a(5893),j=a(7294),k=a(7887),l=a(7283),m=a(319),n=a(682),o=a(1608),p=a(1555),q=a(2878),r=a(2318),s=a(4716),t=a(5147),u=a(343),v=a(5005),w=a(782),c=a(7422),x=a.n(c),y=a(2045),z=a(5043);function A(){var a=(0,h.Z)(["\n    query users($username: String!){\n      users(username: $username){\n        username\n        roles {\n          name\n        }\n      }\n\n      roles {\n        name\n        permissions\n      }\n\n      permissions\n    }\n  "]);return A=function(){return a},a}function B(){var a=(0,h.Z)(["\n  mutation updateUserRoles($username: String!, $roles: [String]!){\n    updateUserRoles(username: $username, roles: $roles)\n  }\n  "]);return B=function(){return a},a}function C(){var a=(0,h.Z)(["\n  mutation DeleteUser($username: String!){\n    deleteUser(username: $username)\n  }\n  "]);return C=function(){return a},a}function D(){var a=(0,h.Z)(["\n  mutation DeleteRole($name:String!){\n    deleteRole(name: $name)\n  }\n  "]);return D=function(){return a},a}function E(){var a=(0,h.Z)(["\n  mutation UpdateRole($key: String!, $name:String!, $permissions:[String]!){\n    updateRole(key: $key, name: $name, permissions: $permissions){\n      name\n    }\n  }\n  "]);return E=function(){return a},a}function F(){var a=(0,h.Z)(["\n  mutation CreateRole($name:String!, $permissions: [String]!){\n    createRole(name: $name, permissions: $permissions) {\n      name\n    }\n  }\n  "]);return F=function(){return a},a}var G=!0;function H(){var b=(0,k.a)((0,l.Ps)(A()),{variables:{username:""}}),a=b.data,c=b.refetch;return(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(o.Z,{className:"site-form blackblock mt-3",children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(p.Z,{children:(0,i.jsx)(q.Z.Group,{children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(r.Z.Text,{children:"\uD83D\uDD0E"}),(0,i.jsx)(s.Z,{onChange:function(a){a.persist(),a.preventDefault();var b=a.target.value;b.length<3||c({username:b})}})]})})})}),(0,i.jsx)(o.Z,{className:"mt-2",children:(0,i.jsx)(p.Z,{children:(0,i.jsxs)(t.Z,{variant:"dark",hover:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Username"}),(0,i.jsx)("th",{children:"Roles"}),(0,i.jsx)("th",{})]})}),(0,i.jsx)("tbody",{children:a&&a.users.map(function(b){return(0,i.jsx)(I,(0,f.Z)((0,e.Z)({},b),{roleList:a.roles,refetch:c}),b.username)})})]})})})]})}),(0,i.jsx)(o.Z,{className:"site-form blackblock mt-3",children:(0,i.jsx)(p.Z,{children:(0,i.jsxs)(t.Z,{variant:"dark",hover:!0,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Role"}),a&&a.permissions.map(function(a,b){return(0,i.jsx)("th",{children:a},b)}),(0,i.jsx)("th",{})]})}),(0,i.jsx)("tbody",{children:a&&a.roles.map(function(b){return(0,i.jsx)(J,(0,f.Z)((0,e.Z)({},b),{permissionList:a.permissions}),b.name)})})]})})}),(0,i.jsx)(K,{})]})}function I(a){var b=a.username,f=a.roles,h=a.roleList,r=a.refetch,c=(0,g.Z)((0,m.D)((0,l.Ps)(B())),2),s=c[0],k=c[1].loading,d=(0,g.Z)((0,m.D)((0,l.Ps)(C())),2),t=d[0],n=d[1].removeLoading,e=(0,j.useState)(!1),q=e[0],x=e[1],A=function(a){s({variables:{username:b,roles:a.map(function(a){return a.value})}}).then(function(a){w.Am.success("Updated user succesfully!")}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{centered:!0,show:q,toggle:function(){return x(!q)},children:(0,i.jsxs)(u.Z.Body,{className:"m-3",style:{color:"black"},children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(p.Z,{children:'Delete user "'.concat(b,'"?')})}),(0,i.jsx)(o.Z,{className:"mt-2",children:(0,i.jsxs)(p.Z,{children:[(0,i.jsx)(v.Z,{color:"primary",className:"mx-2",onClick:function(){t({variables:{username:b}}).then(function(a){w.Am.success('Deleted user "'.concat(b,'" succesfully')),r()}).catch(function(a){console.log(a),w.Am.error('Failed to delete user "'.concat(b,'"'))}).finally(function(){return x(!q)})},children:n?(0,i.jsx)(z.Z,{dev:!0}):"Yes"}),(0,i.jsx)(v.Z,{color:"primary",className:"mx-2",onClick:function(){return x(!q)},children:"No"})]})})]})}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:b}),(0,i.jsx)("td",{children:(0,i.jsx)(y.d7,{loading:k,onChange:function(a){return A(a)},defaultValue:f.map(function(b){var a=b.name;return{label:a,value:a}}),options:h.map(function(b){var a=b.name;return{label:a,value:a}})})}),(0,i.jsx)("td",{children:(0,i.jsx)(v.Z,{className:"me-2",onClick:function(){return x(!q)},children:"Remove"})})]})]})}function J(a){var c=a.name,e=a.permissions,b=a.permissionList,d=(0,j.useRef)(null),f=(0,j.useMemo)(function(){return Array(b.length).fill().map(function(){return(0,j.createRef)()})},[b]),h=(0,g.Z)((0,m.D)((0,l.Ps)(D())),1)[0],k=(0,g.Z)((0,m.D)((0,l.Ps)(E())),1)[0];return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("input",{style:{width:"100%"},ref:d,type:"text",className:"m-auto",defaultValue:c})}),b.map(function(a,b){return(0,i.jsx)("td",{children:(0,i.jsx)("input",{ref:f[b],type:"checkbox",className:"m-auto",defaultChecked:e.includes(a)})},a)}),(0,i.jsxs)("td",{children:[(0,i.jsx)(v.Z,{className:"me-2",onClick:function(){var a=[];f.forEach(function(c,d){c.current.checked&&a.push(b[d])}),k({variables:{key:c,name:d.current.value,permissions:a}}).then(function(a){w.Am.success('Updated "'.concat(c,'" role succesfully!'))}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})},children:"Save"}),(0,i.jsx)(v.Z,{onClick:function(){h({variables:{name:c}}).then(function(a){w.Am.success('Removed "'.concat(c,'" role succesfully!'))}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})},children:"Remove"})]})]})}function K(){var a=(0,g.Z)((0,m.D)((0,l.Ps)(F())),1)[0];return(0,i.jsx)("div",{className:"site-form blackblock mt-3 p-3",children:(0,i.jsx)(q.Z,{onSubmit:function(b){b.preventDefault(),b.persist();var c=x()(b.target,{hash:!0});c.permissions=[],a({variables:c}).then(function(a){w.Am.success('Added "'.concat(b.target.elements.name.value,'" role succesfully!')),b.target.reset()}).catch(function(a){console.log(a),w.Am.error(a.message,{autoclose:!1})})},children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(p.Z,{children:(0,i.jsxs)(q.Z.Group,{children:[(0,i.jsx)(q.Z.Label,{htmlFor:"name",children:"Name:"}),(0,i.jsx)(s.Z,{type:"text",name:"name",required:!0})]})}),(0,i.jsx)(p.Z,{className:"mb-3 mt-auto",children:(0,i.jsx)(v.Z,{type:"submit",color:"primary",children:"Add Role"})})]})})})}},2318:function(h,c,a){"use strict";var d=a(4184),i=a.n(d),e=a(7294),f=a(6611),j=a(6792),k=a(6558),l=a(3045),m=a(5893);let g=(0,f.Z)("input-group-text",{Component:"span"}),b=e.forwardRef(({bsPrefix:a,size:b,hasValidation:c,className:d,as:f="div",...g},h)=>{a=(0,j.vE)(a,"input-group");let k=(0,e.useMemo)(()=>({}),[]);return(0,m.jsx)(l.Z.Provider,{value:k,children:(0,m.jsx)(f,{ref:h,...g,className:i()(d,a,b&&`${a}-${b}`,c&&"has-validation")})})});b.displayName="InputGroup",c.Z=Object.assign(b,{Text:g,Radio:a=>(0,m.jsx)(g,{children:(0,m.jsx)(k.Z,{type:"radio",...a})}),Checkbox:a=>(0,m.jsx)(g,{children:(0,m.jsx)(k.Z,{type:"checkbox",...a})})})},5147:function(f,b,a){"use strict";var c=a(4184),g=a.n(c),d=a(7294),h=a(6792),i=a(5893);let e=d.forwardRef(({bsPrefix:j,className:k,striped:l,bordered:m,borderless:n,hover:o,size:d,variant:e,responsive:b,...p},q)=>{let a=(0,h.vE)(j,"table"),r=g()(k,a,e&&`${a}-${e}`,d&&`${a}-${d}`,l&&`${a}-striped`,m&&`${a}-bordered`,n&&`${a}-borderless`,o&&`${a}-hover`),f=(0,i.jsx)("table",{...p,className:r,ref:q});if(b){let c=`${a}-responsive`;return"string"==typeof b&&(c=`${c}-${b}`),(0,i.jsx)("div",{className:c,children:f})}return f});b.Z=e}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=9280)}),_N_E=a.O()}])