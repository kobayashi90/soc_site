(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{8349:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgor",function(){return c(7466)}])},7466:function(f,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return v},default:function(){return w}});var g=a(337),h=a(4941),i=a(2378),j=a(5893),k=a(7294),l=a(1555),m=a(2878),n=a(1608),o=a(5005),p=a(5630),c=a(5675),q=a.n(c),d=a(7283),r=a(319),s=a(782),t=a(1163);function e(){var a=(0,i.Z)(["\n  mutation updatePass($key: String!, $pass: String!){\n    updatePass(key: $key, pass: $pass)\n  }\n"]);return e=function(){return a},a}var u=(0,d.Ps)(e()),v=!0;function w(d){var w=d.qKey,a=(0,h.Z)((0,r.D)(u),2),x=a[0],e=a[1].loading,y=(0,t.useRouter)(),f=(0,k.useRef)(null),i=(0,k.useRef)(null),b=(0,k.useState)(!1),v=b[0],z=b[1],c=function(){var a,b;return z((null==f?void 0:null===(a=f.current)|| void 0===a?void 0:a.value)!==(null==i?void 0:null===(b=i.current)|| void 0===b?void 0:b.value))};return(0,j.jsx)(l.Z,{children:(0,j.jsxs)(m.Z,{onSubmit:function(a){a.preventDefault(),x({variables:{key:w,pass:f.current.value}}).then(function(){s.Am.success("Password changed succesfully!"),y.push("/")}).catch(function(a){s.Am.error("Failed to change password")})},className:"site-form grayblock mx-auto my-5",style:{maxWidth:"500px"},children:[(0,j.jsxs)(n.Z,{children:[(0,j.jsx)(l.Z,{md:6,children:(0,j.jsxs)(m.Z.Group,{children:[(0,j.jsx)(m.Z.Label,{htmlFor:"username",style:{color:"black"},children:"New password:"}),(0,j.jsx)(m.Z.Control,{required:!0,type:"password",name:"password",ref:f,onChange:c})]})}),(0,j.jsx)(l.Z,{md:6,children:(0,j.jsxs)(m.Z.Group,{children:[(0,j.jsx)(m.Z.Label,{htmlFor:"password",style:{color:"black"},children:"Repeat new password:"}),(0,j.jsx)(m.Z.Control,{required:!0,type:"password",name:"password",isInvalid:v,ref:i,onChange:c})]})})]}),(0,j.jsx)(n.Z,{className:"mt-3",children:(0,j.jsx)(l.Z,{md:4,className:"mx-auto",children:(0,j.jsx)(o.Z,{type:"submit",className:"w-100",color:"primary",children:e?(0,j.jsx)(q(),(0,g.Z)({},p.Z,{alt:"loading"})):"Change password"})})})]})})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=8349)}),_N_E=a.O()}])