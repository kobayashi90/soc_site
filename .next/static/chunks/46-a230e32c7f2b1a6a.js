"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[46],{8046:function(e,n,s){s.d(n,{r8:function(){return eG},ie:function(){return eC},W_:function(){return eA},sH:function(){return ek},rL:function(){return eL}});var l=s(5893),t=s(7294),r=s(4051),a=s(1555),i=s(5005),c=s(2878),o=s(4716),d=s(3907),u=s(599),m=s(7297),h=s(782),x=s(2628),j=s(7283),Z=s(319);function p(){let e=(0,m.Z)(["\nmutation createPublisher($name:String!){\n  createPublisher(\n    name: $name\n  ) {\n    id\n    name\n  }\n}\n\n"]);return p=function(){return e},e}let g=(0,j.Ps)(p());function f(){let[e,{loading:n}]=(0,Z.D)(g);return(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("div",{id:"addPub",className:"mb-2",children:"Add Publisher"}),(0,l.jsx)("div",{className:"site-form blackblock",children:(0,l.jsx)(c.Z,{onSubmit:function(n){e({mutation:g,variables:{name:n.target.elements.name.value}}).then(e=>{h.Am.success('Added "'.concat(n.target.elements.name.value,'" publisher succesfully!')),n.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})}),n.preventDefault(),n.persist()},children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:8,children:(0,l.jsx)(o.Z,{type:"text",name:"name"})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsx)(x.Z,{loading:n,type:"submit",color:"primary",className:"mb-2",children:"Add Publisher"})})]})})})]})}var b=s(7422),v=s.n(b);function y(){let e=(0,m.Z)(["\n    mutation CreateSeries($slug:String!, $name:String!, $cover: Upload!){\n      createSeries(\n        name: $name\n        slug: $slug\n        cover: $cover\n      ) {\n        slug\n        name\n      }\n    }\n    \n"]);return y=function(){return e},e}let S=(0,j.Ps)(y());function D(){let[e,n]=(0,t.useState)(""),[s,{loading:i}]=(0,Z.D)(S);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"addSeries",className:"mb-2 mt-3",children:"Add Series"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",onSubmit:function(e){e.preventDefault(),e.persist();let n=v()(e.target,{hash:!0});n.cover=e.target.elements.cover.files[0],s({mutation:S,variables:n}).then(s=>{h.Am.success('Added "'.concat(n.name,'" series succesfully!')),e.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})},children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Slug:"}),(0,l.jsx)(o.Z,{type:"text",name:"slug",readOnly:!0,value:e})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",onChange:e=>n((0,u.lV)(e.target.value))})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*"})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{className:"m-auto",children:(0,l.jsx)(x.Z,{loading:i,type:"submit",children:"Add Series"})})})]})]})}function $(){let e=(0,m.Z)(["\nmutation CreateGame($cover:Upload!, $releaseDate:String!, $slug:String!, $name:String!, $series: [String]!, $publishers:[ID]!, $platforms:[ID]){\n  createGame(\n    name: $name\n    slug: $slug\n    series: $series\n    publishers: $publishers   \n    releaseDate: $releaseDate\n    cover: $cover,\n    platforms: $platforms\n  ) {\n      slug\n    }\n  }\n"]);return $=function(){return e},e}let N=(0,j.Ps)($());function A(){let[e,n]=(0,t.useState)(""),[s,{loading:i}]=(0,Z.D)(N);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"addGame",className:"mb-2 mt-3",children:"Add Game"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",onSubmit:function(e){e.preventDefault(),e.persist();let n=v()(e.target,{hash:!0});n.cover=e.target.elements.cover.files[0],n.releaseDate=new Date(n.releaseDate).toISOString().substring(0,10),n.series||(n.series=[]),n.publishers||(n.publishers=[]),n.platforms||(n.platforms=[]),s({mutation:N,variables:n}).then(s=>{h.Am.success('Added "'.concat(n.name,'" game succesfully!')),e.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})},children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Slug:"}),(0,l.jsx)(o.Z,{type:"text",name:"slug",readOnly:!0,value:e})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",onChange:e=>n((0,u.lV)(e.target.value))})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"releaseDate",children:"Release Date:"}),(0,l.jsx)(o.Z,{type:"date",name:"releaseDate"})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"series",children:"Series:"}),(0,l.jsx)(d.ov,{options:{name:"series"}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"publishers",children:"Publishers:"}),(0,l.jsx)(d.cZ,{options:{name:"publishers"}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"platforms",children:"Platforms:"}),(0,l.jsx)(d.J3,{categories:["Game"],options:{name:"platforms"}})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*"})]})})}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{className:"m-auto",children:(0,l.jsx)(x.Z,{loading:i,type:"submit",color:"primary",children:"Add Game"})})})]})]})}function k(){let e=(0,m.Z)(["\nmutation CreateStudio($slug:String!, $name:String!){\n  createStudio(\n    name: $name\n    slug: $slug\n  ) {\n    slug\n    name\n  }\n}\n\n"]);return k=function(){return e},e}let G=(0,j.Ps)(k());function P(){let[e,n]=(0,t.useState)(""),[s]=(0,Z.D)(G);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"addStudio",className:"mb-2 mt-3",children:"Add Studio"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",onSubmit:function(e){e.preventDefault(),e.persist();let n=v()(e.target,{hash:!0});s({mutation:G,variables:n}).then(s=>{h.Am.success('Added "'.concat(n.name,'" studio succesfully!')),e.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})},children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Slug:"}),(0,l.jsx)(o.Z,{type:"text",name:"slug",readOnly:!0,value:e})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",onChange:e=>n((0,u.lV)(e.target.value))})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{className:"m-auto",children:(0,l.jsx)(i.Z,{type:"submit",color:"primary",children:"Add Studio"})})})]})]})}function L(){let e=(0,m.Z)(["\nmutation CreateAnimation($cover:Upload, $subTitle:String, $releaseDate:String!, $title:String!, $studios: [String]!){\n  createAnimation(\n    title: $title\n    subTitle: $subTitle\n    studios: $studios   \n    releaseDate: $releaseDate\n    cover: $cover\n  ) {\n      id\n    }\n  }\n"]);return L=function(){return e},e}let F=(0,j.Ps)(L());function C(){let[e,{loading:n}]=(0,Z.D)(F);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"addAnim",className:"mb-2 mt-3",children:"Add Animation"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",onSubmit:function(n){n.preventDefault(),n.persist();let s=v()(n.target,{hash:!0});s.cover=n.target.elements.cover.files[0],s.releaseDate=new Date(s.releaseDate).toISOString().substring(0,10),e({mutation:F,variables:s}).then(e=>{h.Am.success('Added "'.concat(s.title,'" animation succesfully!')),n.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})},children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Title:"}),(0,l.jsx)(o.Z,{type:"text",name:"title"})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Sub-title:"}),(0,l.jsx)(o.Z,{type:"text",name:"subTitle"})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"releaseDate",children:"Release Date:"}),(0,l.jsx)(o.Z,{type:"date",name:"releaseDate"})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"studios",children:"Studios:"}),(0,l.jsx)(d.ln,{options:{name:"studios"}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*",required:!0})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{className:"m-auto",children:(0,l.jsx)(x.Z,{loading:n,type:"submit",color:"primary",children:"Add Animation"})})})]})]})}function E(){let e=(0,m.Z)(["\n    mutation CreatePlatform($name:String!, $type: String!){\n      createPlatform(\n        name: $name\n        type: $type\n      ) {\n        id\n        name\n      }\n    }\n    \n"]);return E=function(){return e},e}let V=(0,j.Ps)(E());function I(){let[e]=(0,Z.D)(V);return(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("div",{id:"addPlat",className:"mb-2",children:"Add Platform"}),(0,l.jsx)("div",{className:"site-form blackblock",children:(0,l.jsxs)(c.Z,{onSubmit:function(n){let s=v()(n.target,{hash:!0});e({mutation:V,variables:s}).then(e=>{h.Am.success('Added "'.concat(n.target.elements.name.value,'" platform succesfully!')),n.target.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})}),n.preventDefault(),n.persist()},children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",required:!0})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"type",children:"Type:"}),(0,l.jsxs)("select",{className:"form-control",name:"type",children:[(0,l.jsx)("option",{value:"Game",children:"Game"}),(0,l.jsx)("option",{value:"Animation",children:"Animation"})]})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{className:"m-auto",children:(0,l.jsx)(i.Z,{type:"submit",color:"primary",children:"Add Platform"})})})]})})]})}function O(){let e=(0,m.Z)(["\n    mutation UpdatePublisher($id: ID!, $name:String!){\n      updatePublisher(\n        id: $id\n        name: $name\n      ) {\n        id\n        name\n      }\n    } \n"]);return O=function(){return e},e}function R(){let e=(0,m.Z)(["\n    mutation DeletePublisher($id: ID!){\n      deletePublisher(id: $id)\n    }   \n"]);return R=function(){return e},e}let q=(0,j.Ps)(O()),T=(0,j.Ps)(R());function U(){let e=(0,t.useRef)(null),[n,{loading:s}]=(0,Z.D)(q),[i,{loading:u}]=(0,Z.D)(T);function m(n,s){let l=e.current;n({variables:v()(l,{hash:!0})}).then(e=>{h.Am.success("".concat(s," publisher succesfully!")),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("div",{id:"editPub",className:"mb-2",children:"Edit Publisher"}),(0,l.jsx)("div",{className:"site-form blackblock",children:(0,l.jsxs)(c.Z,{ref:e,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"id",children:"Publisher:"}),(0,l.jsx)(d.cZ,{options:{isSingle:!0,required:!0,name:"id"}})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",required:!0})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>m(n,"Edited"),loading:s,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>m(i,"Deleted"),loading:u,children:"Delete Publisher"})})]})]})})]})}var w=s(1641),_=s(3359);function M(){let e=(0,m.Z)(["\n  query Platform($key: ID!){\n    platform(id: $key){\n      name\n      type\n    }\n  }\n"]);return M=function(){return e},e}function z(){let e=(0,m.Z)(["\n      query {\n        categories {\n          name\n        }     \n      }\n    "]);return z=function(){return e},e}function J(){let e=(0,m.Z)(["\n    mutation UpdatePlatform($key:ID!, $name:String, $type: String!){\n      updatePlatform(\n        key: $key\n        name: $name\n        type: $type\n      ) {\n        id\n        name\n      }\n    }\n    \n"]);return J=function(){return e},e}function B(){let e=(0,m.Z)(["\n    mutation DeletePlatform($key:ID!){\n      deletePlatform(key: $key)\n    }\n    \n"]);return B=function(){return e},e}let H=(0,j.Ps)(M()),W=(0,j.Ps)(z()),Y=(0,j.Ps)(J()),K=(0,j.Ps)(B());function Q(){let{data:e={}}=(0,w.a)(W),{categories:n=[]}=e,s=(0,t.useRef)(null),[i,{loading:u}]=(0,Z.D)(Y),[m,{loading:j}]=(0,Z.D)(K),[p,{data:g,loading:f}]=(0,_.t)(H);function b(e,n){let l=s.current,t=v()(l,{hash:!0});e({variables:t}).then(e=>{h.Am.success("".concat(n," platform succesfully!")),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("div",{id:"editPlat",className:"mb-2",children:"Edit Platform"}),(0,l.jsx)("div",{className:"site-form blackblock",children:(0,l.jsxs)(c.Z,{ref:s,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"key",children:"Platform:"}),(0,l.jsx)(d.J3,{categories:n.map(e=>e.name),options:{isSingle:!0,required:!0,name:"key",onChange:e=>p({variables:{key:e.value}}),loading:f}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",required:!0,defaultValue:g&&g.platform.name})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"type",children:"Type:"}),(0,l.jsx)("select",{className:"form-control",name:"type",children:n.map(e=>(0,l.jsx)("option",{selected:g&&g.platform.type===e.name,value:e.name,children:e.name},e.name))})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>b(i,"Edited"),loading:u,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>b(m,"Deleted"),loading:j,children:"Delete Platform"})})]})]})})]})}function X(){let e=(0,m.Z)(["\n  query Series($slug: String!){\n    seriesOne(slug: $slug){\n      name\n    }\n  }\n"]);return X=function(){return e},e}function ee(){let e=(0,m.Z)(["\n    mutation UpdateSeries($slug:String!, $name:String, $cover: Upload){\n      updateSeries(\n        name: $name\n        slug: $slug\n        cover: $cover\n      ) {\n        slug\n        name\n      }\n    }\n"]);return ee=function(){return e},e}function en(){let e=(0,m.Z)(["\n    mutation DeleteSeries($slug:String!){\n      deleteSeries(slug: $slug)\n    }\n"]);return en=function(){return e},e}let es=(0,j.Ps)(X()),el=(0,j.Ps)(ee()),et=(0,j.Ps)(en());function er(){let e=(0,t.useRef)(null),[n,{loading:s}]=(0,Z.D)(el),[i,{loading:u}]=(0,Z.D)(et),[m,{data:j,error:p,loading:g}]=(0,_.t)(es);function f(n,s){let l=e.current,t=v()(l,{hash:!0});l.elements.cover.files&&(t.cover=l.elements.cover.files[0]),n({variables:t}).then(e=>{h.Am.success("".concat(s," series succesfully!")),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,t.useEffect)(()=>{p&&(console.log(p),h.Am.error(p.message,{autoclose:!1}))},[p]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"editSeries",className:"mb-2 mt-3",children:"Edit Series"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",ref:e,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Series:"}),(0,l.jsx)(d.ov,{options:{isSingle:!0,required:!0,name:"slug",loading:g,onChange:e=>m({variables:{slug:e.value}})}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",defaultValue:j&&j.seriesOne.name})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*"})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(n,"Edited"),loading:s,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(i,"Deleted"),loading:u,children:"Delete Series"})})]})]})]})}function ea(){let e=(0,m.Z)(["\n  query Game($slug: String!){\n    game(slug:$slug){\n      name\n      releaseDate\n      publishers {\n        value: id\n        label: name\n      }\n      platforms {\n        value: id\n        label: name\n      }\n      series {\n        value: slug\n        label: name\n      }\n    }\n  }\n"]);return ea=function(){return e},e}function ei(){let e=(0,m.Z)(["\n    mutation UpdateGame($cover:Upload, $releaseDate:String, $slug:String, $name:String, $series: [String], $publishers:[ID], $platforms:[ID]){\n      updateGame(\n        name: $name\n        slug: $slug\n        series: $series\n        publishers: $publishers   \n        releaseDate: $releaseDate\n        cover: $cover,\n        platforms: $platforms\n      ) {\n          slug\n        }\n      }\n"]);return ei=function(){return e},e}function ec(){let e=(0,m.Z)(["\n    mutation DeleteGame($slug: String!){\n      deleteGame(slug: $slug)\n    }\n"]);return ec=function(){return e},e}let eo=(0,j.Ps)(ea()),ed=(0,j.Ps)(ei()),eu=(0,j.Ps)(ec());function em(){let e=(0,t.useRef)(null),[n,{loading:s}]=(0,Z.D)(ed),[i,{loading:u}]=(0,Z.D)(eu),[m,{data:j,loading:p,error:g}]=(0,_.t)(eo);function f(n,s){let l=e.current,t=v()(l,{hash:!0});t.cover=l.elements.cover.files[0],t.releaseDate=new Date(t.releaseDate).toISOString().substring(0,10),n({variables:t}).then(e=>{h.Am.success("".concat(s,' "').concat(t.name,'" game succesfully!')),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,t.useEffect)(()=>{g&&(console.log(g),h.Am.error(g.message,{autoclose:!1}))},[g]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"editGame",className:"mb-2 mt-3",children:"Edit Game"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",ref:e,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Game:"}),(0,l.jsx)(d.D_,{options:{isSingle:!0,required:!0,name:"slug",loading:p,onChange:e=>m({variables:{slug:e.value}})}})]})}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",defaultValue:j&&j.game.name})]})}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"releaseDate",children:"Release Date:"}),(0,l.jsx)(o.Z,{type:"date",name:"releaseDate",defaultValue:j&&j.game.releaseDate})]})})]}),j&&(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"series",children:"Series:"}),(0,l.jsx)(d.ov,{options:{loading:p,name:"series",defaultValue:null==j?void 0:j.game.series}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"publishers",children:"Publishers:"}),(0,l.jsx)(d.cZ,{options:{loading:p,name:"publishers",defaultValue:null==j?void 0:j.game.publishers}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"platforms",children:"Platforms:"}),(0,l.jsx)(d.J3,{categories:["Game"],options:{name:"platforms",defaultValue:null==j?void 0:j.game.platforms}})]})})]}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*"})]})})}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(n,"Edited"),loading:s,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(i,"Deleted"),loading:u,children:"Delete Game"})})]})]})]})}function eh(){let e=(0,m.Z)(["\n    mutation UpdateStudio($slug: String!, $name:String!){\n      updateStudio(\n        slug: $slug\n        name: $name\n      ) {\n        slug\n      }\n    }\n"]);return eh=function(){return e},e}function ex(){let e=(0,m.Z)(["\n    mutation DeleteStudio($slug: String!){\n      deleteStudio(slug: $slug)\n    }\n"]);return ex=function(){return e},e}let ej=(0,j.Ps)(eh()),eZ=(0,j.Ps)(ex());function ep(){let e=(0,t.useRef)(null),[n,s]=(0,t.useState)(),[i,{loading:u}]=(0,Z.D)(ej),[m,{loading:j}]=(0,Z.D)(eZ);function p(n,s){let l=e.current;n({variables:v()(l,{hash:!0})}).then(e=>{h.Am.success("".concat(s," studio succesfully!")),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,l.jsxs)("div",{className:"mt-3",children:[(0,l.jsx)("div",{id:"editStudio",className:"mb-2",children:"Edit Studio"}),(0,l.jsx)("div",{className:"site-form blackblock",children:(0,l.jsxs)(c.Z,{ref:e,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"slug",children:"Studio:"}),(0,l.jsx)(d.ln,{options:{isSingle:!0,required:!0,name:"slug",onChange:e=>s(e.label)}})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Name:"}),(0,l.jsx)(o.Z,{type:"text",name:"name",required:!0,defaultValue:n})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>p(i,"Edited"),loading:u,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>p(m,"Deleted"),loading:j,children:"Delete Studio"})})]})]})})]})}function eg(){let e=(0,m.Z)(["\n  query Anim($id: ID!){\n    animation(id: $id){\n      title\n      subTitle\n      releaseDate\n      studios {\n        value: slug\n        label: name\n      }\n    }\n  }\n"]);return eg=function(){return e},e}function ef(){let e=(0,m.Z)(["\nmutation UpdateAnimation($id: ID!, $cover:Upload, $subTitle:String, $releaseDate:String, $title:String, $studios: [String]){\n  updateAnimation(\n    id: $id\n    title: $title\n    subTitle: $subTitle\n    studios: $studios   \n    releaseDate: $releaseDate\n    cover: $cover\n  ) {\n      id\n    }\n  }\n"]);return ef=function(){return e},e}function eb(){let e=(0,m.Z)(["\nmutation DeleteAnimation($id: ID!){\n  deleteAnimation(id: $id) \n}\n"]);return eb=function(){return e},e}let ev=(0,j.Ps)(eg()),ey=(0,j.Ps)(ef()),eS=(0,j.Ps)(eb());function eD(){let e=(0,t.useRef)(null),[n,{loading:s}]=(0,Z.D)(ey),[i,{loading:u}]=(0,Z.D)(eS),[m,{data:j,error:p,loading:g}]=(0,_.t)(ev);function f(n,s){let l=e.current,t=v()(l,{hash:!0});t.cover=l.elements.cover.files[0],t.releaseDate=new Date(t.releaseDate).toISOString().substring(0,10),n({variables:t}).then(e=>{h.Am.success("".concat(s,' "').concat(t.title,'" animation succesfully!')),l.reset()}).catch(e=>{console.log(e),h.Am.error(e.message,{autoclose:!1})})}return(0,t.useEffect)(()=>{p&&(console.log(p),h.Am.error(p.message,{autoclose:!1}))},[p]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{id:"editAnim",className:"mb-2 mt-3",children:"Edit Animation"}),(0,l.jsxs)(c.Z,{className:"site-form blackblock",ref:e,children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Animation:"}),(0,l.jsx)(d.S7,{options:{isSingle:!0,name:"id",loading:g,onChange:e=>m({variables:{id:e.value}})}})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Title:"}),(0,l.jsx)(o.Z,{type:"text",name:"title",defaultValue:j&&j.animation.title})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"name",children:"Sub-title:"}),(0,l.jsx)(o.Z,{type:"text",name:"subTitle",defaultValue:j&&j.animation.subTitle})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"releaseDate",children:"Release Date:"}),(0,l.jsx)(o.Z,{type:"date",name:"releaseDate",defaultValue:j&&j.animation.releaseDate})]})}),j&&(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"studios",children:"Studios:"}),(0,l.jsx)(d.ln,{options:{name:"studios",defaultValue:j.animation.studios}})]})}),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(o.Z,{name:"cover",type:"file",accept:"image/*"})]})})]}),(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(n,"Edited"),loading:s,children:"Save Changes"})}),(0,l.jsx)(a.Z,{xs:"auto",className:"my-auto mx-1",children:(0,l.jsx)(x.Z,{type:"button",onClick:()=>f(i,"Deleted"),loading:u,children:"Delete Animation"})})]})]})]})}let e$=[{value:"SOON",label:"SOON"},{value:"amazon",label:"Amazon"},{value:"amazon_jp",label:"Amazon JP"},{value:"play_asia",label:"Play Asia"},{value:"cd_japan",label:"CD Japan"},{value:"spotify",label:"Spotify"},{value:"google_play",label:"Google Play"},{value:"steam",label:"Steam"},{value:"mora",label:"Mora"},{value:"apple_music",label:"Apple Music"},{value:"ototoy",label:"OTOTOY"},{value:"bandcamp",label:"Bandcamp"},{value:"deezer",label:"Deezer"}],eN=[{value:"SOON",label:"SOON"},{value:"MEGA",label:"MEGA"},{value:"MEDIAFIRE",label:"MediaFire"},{value:"GOOGLEDRIVE",label:"Google Drive"},{value:"BEDRIVE",label:"BeDrive"},{value:"MIRROR",label:"Mirror"}];function eA(e){let{title:n}=e;return(0,l.jsxs)("div",{className:"sticky-top",children:[(0,l.jsx)("div",{className:"mb-2 mt-3 text-center",children:"Navigation"}),(0,l.jsxs)("div",{className:"py-2 site-form blackblock d-flex flex-column",children:[(0,l.jsxs)("a",{href:"#addAlbum",children:[n," Album"]}),(0,l.jsx)("a",{href:"#addPub",children:"Add Publisher"}),(0,l.jsx)("a",{href:"#addPlat",children:"Add Platform"}),(0,l.jsx)("a",{href:"#addSeries",children:"Add Series"}),(0,l.jsx)("a",{href:"#addGame",children:"Add Game"}),(0,l.jsx)("a",{href:"#addStudio",children:"Add Studio"}),(0,l.jsx)("a",{href:"#addAnim",children:"Add Animation"}),(0,l.jsx)("a",{className:"mt-3",href:"#editPub",children:"Edit Publisher"}),(0,l.jsx)("a",{href:"#editPlat",children:"Edit Platform"}),(0,l.jsx)("a",{href:"#editSeries",children:"Edit Series"}),(0,l.jsx)("a",{href:"#editGame",children:"Edit Game"}),(0,l.jsx)("a",{href:"#editStudio",children:"Edit Studio"}),(0,l.jsx)("a",{href:"#editAnim",children:"Edit Animation"})]})]})}function ek(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{}),(0,l.jsx)(I,{}),(0,l.jsx)(D,{}),(0,l.jsx)(A,{}),(0,l.jsx)(P,{}),(0,l.jsx)(C,{}),(0,l.jsx)(U,{}),(0,l.jsx)(Q,{}),(0,l.jsx)(er,{}),(0,l.jsx)(em,{}),(0,l.jsx)(ep,{}),(0,l.jsx)(eD,{})]})}function eG(e){let{defaults:n=[{number:0}]}=e,[s,c]=(0,t.useState)(n);return(0,t.useEffect)(()=>{c(n)},[n]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(i.Z,{className:"me-2",color:"primary",onClick:function(){let e=s[s.length-1];c([...s,{number:e?e.number+1:0}])},children:"Add Disc"}),(0,l.jsx)(i.Z,{color:"primary",onClick:function(){let e=[];s.forEach(n=>{let s=document.getElementById("discInput".concat(n.number)).value;s&&0!==s.length&&e.push({number:e.length,body:s})}),c(e)},children:"Remove empty discs"})]})}),(0,l.jsx)(r.Z,{className:"mt-3",children:s.map(e=>(0,l.jsx)(eP,{...e},e.number))})]})}function eP(e){let{number:n,body:s=""}=e,i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{i.current.value=s},[s]),(0,l.jsx)(a.Z,{md:6,className:"mb-3",children:(0,l.jsx)(r.Z,{children:(0,l.jsx)(a.Z,{md:12,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsxs)(c.Z.Label,{children:["Disc ",n+1,":"]}),(0,l.jsx)(o.Z,{ref:i,required:!0,name:"discs[][body]",as:"textarea",id:"discInput".concat(n),defaultValue:s})]})})})})}function eL(e){let n=e.defaults||[],[s,m]=(0,t.useState)(e.defaults?n.map((e,n)=>n):[0]);return(0,t.useEffect)(()=>{0===s.length&&m([0])},[s]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(i.Z,{className:"me-2",color:"primary",onClick:()=>m([...s,s[s.length-1]+1]),children:"Add Store link"}),(0,l.jsx)(i.Z,{color:"primary",onClick:()=>m((0,u.z5)(s,["storeInput"])),children:"Remove empty links"})]})}),(0,l.jsx)(r.Z,{className:"mt-3",children:s.map((e,s)=>(0,l.jsx)(a.Z,{md:6,className:"mb-3",children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{children:"Provider:"}),(0,l.jsx)(d.d7,{isSingle:!0,name:"stores[".concat(s,"][provider]"),defaultValue:n[e]?e$.find(s=>s.value===n[e].provider):e$[0],options:e$})]})}),(0,l.jsx)(a.Z,{md:6,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{children:"Url:"}),(0,l.jsx)(o.Z,{required:!0,name:"stores[".concat(s,"][url]"),defaultValue:n[e]?n[e].url:"",id:"storeInput".concat(e),type:"text"})]})})]})},e))})]})}function eF(e){let{valueList:n=[],length:s=0,setValueList:t,prefix:u=0}=e;return n.map((e,m)=>(0,l.jsx)(r.Z,{children:(0,l.jsxs)(a.Z,{children:[(0,l.jsxs)(r.Z,{className:"mb-3",children:[(0,l.jsx)(a.Z,{children:(0,l.jsxs)(c.Z.Group,{className:"mt-1",children:[(0,l.jsxs)(c.Z.Label,{children:["Category ",u+m+1," title:"]}),(0,l.jsx)(o.Z,{defaultValue:e.title,required:!0,name:"downloads[".concat(m+u,"][title]"),type:"text"})]})}),(0,l.jsx)(a.Z,{md:"auto",className:"mt-auto",children:(0,l.jsx)(c.Z.Group,{children:(0,l.jsx)(i.Z,{color:"primary",onClick:()=>(function(e){let s=[...n];s.splice(e,1),t(s)})(m),disabled:1===s,children:"Remove category"})})}),(0,l.jsx)(a.Z,{md:"auto",className:"mt-auto",children:(0,l.jsx)(c.Z.Group,{children:(0,l.jsx)(i.Z,{className:"me-2",color:"primary",onClick:()=>(function(e){let s=[...n],l=[...s[e].links,{id:"n".concat(s[e].links.length)}];s[e]={...s[e],links:l},t(s)})(m),children:"Add Download Link"})})}),(0,l.jsx)(a.Z,{md:"auto",className:"mt-auto mb-3",children:(0,l.jsxs)("div",{className:"form-check",children:[(0,l.jsx)(o.Z,{defaultValue:e.small,type:"checkbox",name:"downloads[".concat(m+u,"][small]"),className:"form-check-input"}),(0,l.jsx)(c.Z.Label,{className:"form-check-label",htmlFor:"downloads[".concat(m+u,"][small]"),children:"Small Title"})]})})]}),e.links.map((e,s)=>(0,l.jsxs)(r.Z,{className:"mb-3",children:[(0,l.jsx)(a.Z,{children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{children:"Provider:"}),(0,l.jsx)(d.d7,{isSingle:!0,defaultValue:eN.find(n=>n.value===e.provider),name:"downloads[".concat(m+u,"][links][").concat(s,"][provider]"),options:eN})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{children:"Url:"}),(0,l.jsx)(o.Z,{defaultValue:e.url,required:!0,type:"text",name:"downloads[".concat(m+u,"][links][").concat(s,"][url]")})]})}),(0,l.jsx)(a.Z,{md:4,children:(0,l.jsxs)(c.Z.Group,{children:[(0,l.jsx)(c.Z.Label,{children:"Direct Url:"}),(0,l.jsx)(o.Z,{defaultValue:e.directUrl,required:!0,type:"text",name:"downloads[".concat(m+u,"][links][").concat(s,"][directUrl]")})]})})]})}),(0,l.jsx)(a.Z,{md:"auto",className:"mt-auto",children:(0,l.jsx)(c.Z.Group,{children:(0,l.jsx)(i.Z,{color:"primary",onClick:()=>(function(e,s){let l=[...n],r=[...l[e].links];r.splice(s,1),l[e]={...l[e],links:r},t(l)})(m,s),children:"Remove link"})})})]},e.id))]})},e.id))}function eC(e){let{defaults:n=[]}=e,[s,c]=(0,t.useState)(n),[o,d]=(0,t.useState)([]),u=s.length+o.length;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(eF,{valueList:s,setValueList:c,length:u}),(0,l.jsx)(eF,{valueList:o,setValueList:d,length:u,prefix:s.length}),(0,l.jsx)(r.Z,{className:"mb-3",children:(0,l.jsx)(a.Z,{children:(0,l.jsx)(i.Z,{className:"me-2",color:"primary",onClick:()=>d([...o,{id:"n".concat(o.length),links:[]}]),children:"Add Download Section"})})})]})}}}]);