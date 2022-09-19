(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[518],{9280:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/user",function(){return c(7426)}])},7426:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return G},default:function(){return H}});var d=c(6042),e=c(9396),f=c(828),g=c(7297),h=c(5893),i=c(7294),j=c(1641),k=c(7283),l=c(319),m=c(682),n=c(1608),o=c(1555),p=c(2878),q=c(2318),r=c(4716),s=c(5147),t=c(7931),u=c(5005),v=c(782),w=c(7422),x=c.n(w),y=c(2045),z=c(5043);function A(){var a=(0,g.Z)(["\n    query users($search: String!){\n      users(search: $search){\n        username\n        roles {\n          name\n        }\n      }\n\n      roles {\n        name\n        permissions\n      }\n\n      permissions\n    }\n  "]);return A=function(){return a},a}function B(){var a=(0,g.Z)(["\n  mutation updateUserRoles($username: String!, $roles: [String]!){\n    updateUserRoles(username: $username, roles: $roles)\n  }\n  "]);return B=function(){return a},a}function C(){var a=(0,g.Z)(["\n  mutation DeleteUser($username: String!){\n    deleteUser(username: $username)\n  }\n  "]);return C=function(){return a},a}function D(){var a=(0,g.Z)(["\n  mutation DeleteRole($name:String!){\n    deleteRole(name: $name)\n  }\n  "]);return D=function(){return a},a}function E(){var a=(0,g.Z)(["\n  mutation UpdateRole($key: String!, $name:String!, $permissions:[String]!){\n    updateRole(key: $key, name: $name, permissions: $permissions){\n      name\n    }\n  }\n  "]);return E=function(){return a},a}function F(){var a=(0,g.Z)(["\n  mutation CreateRole($name:String!, $permissions: [String]!){\n    createRole(name: $name, permissions: $permissions) {\n      name\n    }\n  }\n  "]);return F=function(){return a},a}var G=!0;function H(){var a=function(a){a.persist(),a.preventDefault();var b=a.target.value;b.length<3||f({search:b})},b=(0,j.a)((0,k.Ps)(A()),{variables:{search:""}}),c=b.data,f=b.refetch;return(0,h.jsxs)(m.Z,{children:[(0,h.jsx)(n.Z,{className:"site-form blackblock mt-3",children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(n.Z,{children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(p.Z.Group,{children:(0,h.jsxs)(q.Z,{children:[(0,h.jsx)(q.Z.Text,{children:"\uD83D\uDD0E"}),(0,h.jsx)(r.Z,{onChange:a})]})})})}),(0,h.jsx)(n.Z,{className:"mt-2",children:(0,h.jsx)(o.Z,{children:(0,h.jsxs)(s.Z,{variant:"dark",hover:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Username"}),(0,h.jsx)("th",{children:"Roles"}),(0,h.jsx)("th",{})]})}),(0,h.jsx)("tbody",{children:c&&c.users.map(function(a){return(0,h.jsx)(I,(0,e.Z)((0,d.Z)({},a),{roleList:c.roles,refetch:f}),a.username)})})]})})})]})}),(0,h.jsx)(n.Z,{className:"site-form blackblock mt-3",children:(0,h.jsx)(o.Z,{children:(0,h.jsxs)(s.Z,{variant:"dark",hover:!0,children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Role"}),c&&c.permissions.map(function(a,b){return(0,h.jsx)("th",{children:a},b)}),(0,h.jsx)("th",{})]})}),(0,h.jsx)("tbody",{children:c&&c.roles.map(function(a){return(0,h.jsx)(J,(0,e.Z)((0,d.Z)({},a),{permissionList:c.permissions}),a.name)})})]})})}),(0,h.jsx)(K,{})]})}function I(a){var b=function(){r({variables:{username:c}}).then(function(a){v.Am.success('Deleted user "'.concat(c,'" succesfully')),g()}).catch(function(a){console.log(a),v.Am.error('Failed to delete user "'.concat(c,'"'))}).finally(function(){return A(!x)})},c=a.username,d=a.roles,e=a.roleList,g=a.refetch,j=(0,f.Z)((0,l.D)((0,k.Ps)(B())),2),m=j[0],p=j[1].loading,q=(0,f.Z)((0,l.D)((0,k.Ps)(C())),2),r=q[0],s=q[1].removeLoading,w=(0,i.useState)(!1),x=w[0],A=w[1],D=function(a){m({variables:{username:c,roles:a.map(function(a){return a.value})}}).then(function(a){v.Am.success("Updated user succesfully!")}).catch(function(a){console.log(a),v.Am.error(a.message,{autoclose:!1})})};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.Z,{centered:!0,show:x,toggle:function(){return A(!x)},children:(0,h.jsxs)(t.Z.Body,{className:"m-3",style:{color:"black"},children:[(0,h.jsx)(n.Z,{children:(0,h.jsx)(o.Z,{children:'Delete user "'.concat(c,'"?')})}),(0,h.jsx)(n.Z,{className:"mt-2",children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(u.Z,{color:"primary",className:"mx-2",onClick:b,children:s?(0,h.jsx)(z.Z,{dev:!0}):"Yes"}),(0,h.jsx)(u.Z,{color:"primary",className:"mx-2",onClick:function(){return A(!x)},children:"No"})]})})]})}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:c}),(0,h.jsx)("td",{children:(0,h.jsx)(y.d7,{loading:p,onChange:function(a){return D(a)},defaultValue:d.map(function(a){var b=a.name;return{label:b,value:b}}),options:e.map(function(a){var b=a.name;return{label:b,value:b}})})}),(0,h.jsx)("td",{children:(0,h.jsx)(u.Z,{className:"me-2",onClick:function(){return A(!x)},children:"Remove"})})]})]})}function J(a){var b=a.name,c=a.permissions,d=a.permissionList,e=function(){n({variables:{name:b}}).then(function(a){v.Am.success('Removed "'.concat(b,'" role succesfully!'))}).catch(function(a){console.log(a),v.Am.error(a.message,{autoclose:!1})})},g=function(){var a=[];m.forEach(function(b,c){b.current.checked&&a.push(d[c])}),o({variables:{key:b,name:j.current.value,permissions:a}}).then(function(a){v.Am.success('Updated "'.concat(b,'" role succesfully!'))}).catch(function(a){console.log(a),v.Am.error(a.message,{autoclose:!1})})},j=(0,i.useRef)(null),m=(0,i.useMemo)(function(){return Array(d.length).fill().map(function(){return(0,i.createRef)()})},[d]),n=(0,f.Z)((0,l.D)((0,k.Ps)(D())),1)[0],o=(0,f.Z)((0,l.D)((0,k.Ps)(E())),1)[0];return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsx)("input",{style:{width:"100%"},ref:j,type:"text",className:"m-auto",defaultValue:b})}),d.map(function(a,b){return(0,h.jsx)("td",{children:(0,h.jsx)("input",{ref:m[b],type:"checkbox",className:"m-auto",defaultChecked:c.includes(a)})},a)}),(0,h.jsxs)("td",{children:[(0,h.jsx)(u.Z,{className:"me-2",onClick:g,children:"Save"}),(0,h.jsx)(u.Z,{onClick:e,children:"Remove"})]})]})}function K(){var a=function(a){a.preventDefault(),a.persist();var c=x()(a.target,{hash:!0});c.permissions=[],b({variables:c}).then(function(b){v.Am.success('Added "'.concat(a.target.elements.name.value,'" role succesfully!')),a.target.reset()}).catch(function(a){console.log(a),v.Am.error(a.message,{autoclose:!1})})},b=(0,f.Z)((0,l.D)((0,k.Ps)(F())),1)[0];return(0,h.jsx)("div",{className:"site-form blackblock mt-3 p-3",children:(0,h.jsx)(p.Z,{onSubmit:a,children:(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(o.Z,{children:(0,h.jsxs)(p.Z.Group,{children:[(0,h.jsx)(p.Z.Label,{htmlFor:"name",children:"Name:"}),(0,h.jsx)(r.Z,{type:"text",name:"name",required:!0})]})}),(0,h.jsx)(o.Z,{className:"mb-3 mt-auto",children:(0,h.jsx)(u.Z,{type:"submit",color:"primary",children:"Add Role"})})]})})})}},2318:function(a,b,c){"use strict";var d=c(4184),e=c.n(d),f=c(7294),g=c(6611),h=c(6792),i=c(6558),j=c(3045),k=c(5893);let l=(0,g.Z)("input-group-text",{Component:"span"}),m=a=>(0,k.jsx)(l,{children:(0,k.jsx)(i.Z,{type:"checkbox",...a})}),n=a=>(0,k.jsx)(l,{children:(0,k.jsx)(i.Z,{type:"radio",...a})}),o=f.forwardRef(({bsPrefix:a,size:b,hasValidation:c,className:d,as:g="div",...i},l)=>{a=(0,h.vE)(a,"input-group");let m=(0,f.useMemo)(()=>({}),[]);return(0,k.jsx)(j.Z.Provider,{value:m,children:(0,k.jsx)(g,{ref:l,...i,className:e()(d,a,b&&`${a}-${b}`,c&&"has-validation")})})});o.displayName="InputGroup",b.Z=Object.assign(o,{Text:l,Radio:n,Checkbox:m})},5147:function(a,b,c){"use strict";var d=c(4184),e=c.n(d),f=c(7294),g=c(6792),h=c(5893);let i=f.forwardRef(({bsPrefix:a,className:b,striped:c,bordered:d,borderless:f,hover:i,size:j,variant:k,responsive:l,...m},n)=>{let o=(0,g.vE)(a,"table"),p=e()(b,o,k&&`${o}-${k}`,j&&`${o}-${j}`,c&&`${o}-striped`,d&&`${o}-bordered`,f&&`${o}-borderless`,i&&`${o}-hover`),q=(0,h.jsx)("table",{...m,className:p,ref:n});if(l){let r=`${o}-responsive`;return"string"==typeof l&&(r=`${r}-${l}`),(0,h.jsx)("div",{className:r,children:q})}return q});b.Z=i}},function(a){a.O(0,[45,774,888,179],function(){var b;return a(a.s=9280)}),_N_E=a.O()}])