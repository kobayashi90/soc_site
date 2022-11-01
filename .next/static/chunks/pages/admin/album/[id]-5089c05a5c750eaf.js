(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[216],{7612:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/album/[id]",function(){return t(9884)}])},9884:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return G},default:function(){return _}});var n=t(7297),l=t(5893),a=t(7294),r=t(7283),i=t(319),d=t(1641),c=t(3359),o=t(682),u=t(4051),m=t(1555),h=t(2878),x=t(4716),j=t(782),Z=t(3907),f=t(8046),p=t(2628),b=t(2446),g=t(599),$=t(2392),v=t(9738);function y(){let e=(0,n.Z)(["\nquery downloads ($id: ID!) {\n  downloads(id: $id) {\n    id\n    title\n    small\n    links {\n      id\n      url\n      provider\n      custom\n      directUrl\n    }\n  }\n}\n"]);return y=function(){return e},e}function S(){let e=(0,n.Z)(["\n    mutation updateAlbum(\n      $id: ID!,\n      $title: String,\n      $subTitle: String,\n      $cover: Upload,\n      $releaseDate: String,\n      $label: String,\n      $description: String,\n      $downloads: [DownloadInput],\n      $artists: [String],\n      $categories: [String],\n      $classifications: [String],\n      $platforms: [ID],\n      $games: [String],\n      $animations: [ID],\n      $discs: [DiscInput],\n      $related: [ID],\n      $stores: [StoreInput],\n      $vgmdb: String,\n      $status: String!,\n      $request: ID\n    ){\n      updateAlbum(\n        id: $id,\n        title: $title,\n        subTitle: $subTitle,\n        cover: $cover,\n        releaseDate: $releaseDate,\n        label: $label,\n        description: $description,\n        downloads: $downloads,\n        artists: $artists,\n        categories: $categories,\n        classifications: $classifications,\n        platforms: $platforms,\n        games: $games,\n        animations: $animations\n        discs: $discs,\n        related: $related,\n        stores: $stores,\n        vgmdb: $vgmdb,\n        status: $status,\n        request: $request\n      ){ id }\n    } \n  "]);return S=function(){return e},e}function w(){let e=(0,n.Z)(["\n  query ($search: String!){\n    vgmdb(search: $search){\n      vgmdbUrl\n      name\n      subTitle\n      releaseDate\n      artists\n      categories\n      classifications\n      tracklist {\n        number\n        body\n      }\n    }\n  }\n"]);return w=function(){return e},e}let D=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1),N=(0,r.Ps)(y()),L=(0,r.Ps)(S()),F=(0,r.Ps)(w());var G=!0;function _(e){return(0,l.jsx)(o.Z,{fluid:!0,children:(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(m.Z,{xs:2,children:(0,l.jsx)(f.W_,{title:"Edit"})}),(0,l.jsxs)(m.Z,{xs:10,children:[(0,l.jsx)(V,{...e}),(0,l.jsx)(f.sH,{})]})]})})}function V(e){let{id:s,album:t,categories:n,classifications:r}=e,[o,y]=(0,a.useState)(t.categories||[]),[S,w]=(0,a.useState)(t.classifications||[]),[G,_]=(0,a.useState)(t.discs||[]),[V,{loading:C}]=(0,i.D)(L),{user:T}=(0,b.Z)(),{data:q,refetch:k}=(0,d.a)(N,{variables:{id:s}});(0,a.useEffect)(()=>{k({id:s})},[T,s,k]);let[I,{loading:A}]=(0,c.t)(F),E=(0,a.useRef)(null),P=(0,a.useRef)(null),R=(0,a.useRef)(null),U=(0,a.useRef)(null),H=(0,a.useRef)(null);async function O(){let{data:e}=await I({variables:{search:R.current.value}});if(null==e?void 0:e.vgmdb){let{vgmdb:s}=e,{vgmdbUrl:t,name:n,subTitle:l,releaseDate:a,artists:r,categories:i,classifications:d,tracklist:c}=s;P.current.value=a,R.current.value=t,E.current.value=n,U.current.value=l,H.current.value=r.join(","),y(i),w(d),_(c)}}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{id:"addAlbum",className:"mb-2 mt-3",children:["Editing ",'"'.concat(t.title,'"')," (",t.id,")"]}),(0,l.jsxs)(h.Z,{className:"site-form blackblock",onSubmit:function(e){e.persist(),e.preventDefault();let s=(0,g.ar)(e);s.id=t.id,V({mutation:L,variables:s}).then(e=>{j.Am.success('Updated "'.concat(s.title,'" succesfully!'))}).catch(e=>{console.log(e),j.Am.error(e.message,{autoclose:!1})})},children:[(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(m.Z,{md:3,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"title",children:"Title:"}),(0,l.jsx)(x.Z,{ref:E,h:!0,required:!0,type:"text",name:"title",defaultValue:t.title})]})}),(0,l.jsx)(m.Z,{md:3,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"subTitle",children:"Sub Title:"}),(0,l.jsx)(x.Z,{ref:U,as:"textarea",name:"subTitle",defaultValue:t.subTitle})]})}),(0,l.jsx)(m.Z,{md:3,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"releaseDate",children:"Release Date:"}),(0,l.jsx)(x.Z,{ref:P,required:!0,type:"date",name:"releaseDate",defaultValue:t.releaseDate})]})}),(0,l.jsx)(m.Z,{md:3,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"label",children:"Label:"}),(0,l.jsx)(x.Z,{type:"text",name:"label",defaultValue:t.label})]})})]}),(0,l.jsx)(u.Z,{className:"mb-3",children:(0,l.jsx)(m.Z,{children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"status",children:"Status:"}),(0,l.jsx)(Z.d7,{isSingle:!0,required:!0,name:"status",defaultValue:{value:t.status,label:D(t.status)},options:["Show","Hidden","Coming"].map(e=>({label:e,value:e.toLowerCase()}))})]})})}),(0,l.jsxs)(u.Z,{className:"mb-3",children:[(0,l.jsx)(m.Z,{md:6,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"title",children:"Description:"}),(0,l.jsx)(x.Z,{as:"textarea",name:"description",defaultValue:t.description})]})}),(0,l.jsx)(m.Z,{md:6,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"cover",children:"Cover:"}),(0,l.jsx)(x.Z,{name:"cover",type:"file",accept:"image/*"})]})})]}),(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(m.Z,{md:6,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"vgmdb",children:"VGMdb:"}),(0,l.jsx)(x.Z,{ref:R,defaultValue:t.vgmdb,name:"vgmdb",type:"text"})]})}),(0,l.jsx)(m.Z,{className:"mt-auto",children:(0,l.jsx)(v.l,{color:"primary",loading:A,onClick:O,children:"Fetch info"})}),(0,l.jsx)(m.Z,{})]}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsxs)(u.Z,{className:"mb-3",children:[(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"artists",children:"Artists:"}),(0,l.jsx)(x.Z,{ref:H,name:"artists",as:"textarea",defaultValue:t.artists.map(e=>e.name).join(",")})]})}),(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"categories",children:"Categories:"}),(0,l.jsx)(Z.d7,{defaultValue:t.categories,required:!0,name:"categories",options:n,onChange:e=>y(e)})]})}),(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"classifications",children:"Classifications:"}),(0,l.jsx)(Z.d7,{required:!0,name:"classifications",defaultValue:S,options:r,onChange:e=>w(e)})]})})]}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"games",children:"Games:"}),(0,l.jsx)(Z.D_,{options:{defaultValue:t.games,name:"games"}})]})}),(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"platforms",children:"Platforms:"}),(0,l.jsx)(Z.J3,{categories:o.map(e=>e.value),options:{defaultValue:t.platforms,name:"platforms"}})]})}),(0,l.jsx)(m.Z,{md:4,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"animations",children:"Animations:"}),(0,l.jsx)(Z.S7,{options:{defaultValue:t.animations,name:"animations"}})]})})]}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(m.Z,{md:12,children:(0,l.jsxs)(h.Z.Group,{children:[(0,l.jsx)(h.Z.Label,{htmlFor:"related",children:"Related albums:"}),(0,l.jsx)(Z.Q$,{options:{defaultValue:t.related,name:"related"}})]})})}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsx)(f.r8,{defaults:G}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsx)(f.rL,{defaults:t.stores}),(0,l.jsx)("hr",{className:"style2 style-white"}),(0,l.jsx)($.Z,{element:R.current}),(0,l.jsx)("hr",{className:"style2 style-white"}),q&&(0,l.jsx)(f.ie,{defaults:q.downloads}),(0,l.jsx)(u.Z,{children:(0,l.jsx)(m.Z,{className:"m-auto",children:(0,l.jsx)(p.Z,{loading:C,type:"submit",color:"primary",children:"Save Changes"})})})]})]})}}},function(e){e.O(0,[46,774,888,179],function(){return e(e.s=7612)}),_N_E=e.O()}]);