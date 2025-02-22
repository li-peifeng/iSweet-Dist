import{h as t,H as C,a8 as M,k as F,ax as T,ay as $,bU as c,a2 as R,a1 as N,b as f,a as h,O as W,Q as z,N as P,S as E,aL as d,bV as p,m as H,bW as I,aw as g,ad as l,aE as U,W as n,X as o,bX as Y,bY as j,bZ as X,b_ as q,b$ as J,c0 as Q,c1 as Z,c2 as K,c3 as G,c4 as ee,c5 as te,c6 as ne,c7 as oe,c8 as re,c9 as ae,aP as ie,b1 as se,bi as ce,Y as D,al as S,ca as le,n as ue,bu as me,bn as ge,bo as de,bp as _e,bq as he,br as pe,aC as A,a_ as O,bt as k,cb as Ee,cc as fe,cd as Ie}from"./index.381e3abe.js";import{F as w,I as Ae,b as ve,c as be,d as Le,S as V,e as Te,a as $e}from"./index.b32ea32c.js";import{A as Re,j as Se,c as we,k as Ce,h as B}from"./index.3362ebdd.js";import{S as Pe}from"./index.5c3e5e28.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e[e.TRAFFIC=11]="TRAFFIC",e))(i||{}),De=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(De||{});const Oe=e=>{const r=F(()=>{if(!T.is_admin($())){if(e.role===void 0)return!1;if(e.role===c.GENERAL&&!T.is_general($()))return!1}return!0});return t(N,{get fallback(){return t(ke,e)},get children(){return[t(R,{get when(){return!r()},children:null}),t(R,{get when(){return e.children},get children(){return t(Ve,e)}})]}})},ke=e=>{const{pathname:r}=f(),a=h(),u=()=>r()===e.to;return t(Re,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:m=>{var L;if(y(),e.refresh){(L=m.stopPropagation)==null||L.call(m);let _=e.to;_.startsWith("http")||(_=z(_)),window.open(_,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(d,{mr:"$2",get as(){return e.icon}})}}),t(p,{get children(){return a(e.title)}})]}})},Ve=e=>{const{pathname:r}=f(),[a,u]=H(r().includes(e.to)),m=h();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(d,{mr:"$2",get as(){return e.icon}})}}),t(p,{get children(){return m(e.title)}})]}}),t(d,{as:Se,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(v,{get items(){return e.children}})}})}})]}})},v=e=>t(M,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(C,{get each(){return e.items},children:r=>t(Oe,r)})}});function Be(e){return U({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>o(()=>import("./Common.65a73042.js"),["assets/Common.65a73042.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/SettingItem.709c0a47.js","assets/item_type.ee87ae79.js","assets/index.3362ebdd.js","assets/ResponsiveGrid.20c28daf.js","assets/index.5c3e5e28.js"])),b=[{title:"manage.sidemenu.profile",icon:Y,to:"/@manage",role:c.GUEST,component:n(()=>o(()=>import("./Profile.9482514d.js"),["assets/Profile.9482514d.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/index.3362ebdd.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.bff59a98.js"]))},{title:"manage.sidemenu.settings",icon:j,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:X,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:q,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:J,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:Q,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:w,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:w,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:Z,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.b34807a8.js"),["assets/S3.b34807a8.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/SettingItem.709c0a47.js","assets/item_type.ee87ae79.js","assets/index.3362ebdd.js","assets/ResponsiveGrid.20c28daf.js","assets/FolderTree.6ff10d4f.js","assets/index.b3bd7f11.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.5c3e5e28.js"]))},{title:"manage.sidemenu.ftp",icon:K,to:"/@manage/settings/ftp",component:()=>t(s,{get group(){return i.FTP}})},{title:"manage.sidemenu.traffic",icon:G,to:"/@manage/settings/traffic",component:()=>t(s,{get group(){return i.TRAFFIC}})},{title:"manage.sidemenu.other",icon:ee,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.3a5714cb.js"),["assets/Other.3a5714cb.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/FolderTree.6ff10d4f.js","assets/index.3362ebdd.js","assets/index.b32ea32c.js","assets/SettingItem.709c0a47.js","assets/item_type.ee87ae79.js","assets/index.5c3e5e28.js"]))}]},{title:"manage.sidemenu.tasks",icon:Be,to:"/@manage/tasks",role:c.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:Ae,to:"/@manage/tasks/offline_download",role:c.GENERAL,component:n(()=>o(()=>import("./offline_download.a24b6f39.js"),["assets/offline_download.a24b6f39.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/helper.f12d6812.js","assets/Paginator.7e96886c.js","assets/index.3362ebdd.js"]))},{title:"manage.sidemenu.upload",icon:te,to:"/@manage/tasks/upload",role:c.GENERAL,component:n(()=>o(()=>import("./Upload.5d66275f.js"),["assets/Upload.5d66275f.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/helper.f12d6812.js","assets/Paginator.7e96886c.js","assets/index.3362ebdd.js"]))},{title:"manage.sidemenu.copy",icon:ve,to:"/@manage/tasks/copy",role:c.GENERAL,component:n(()=>o(()=>import("./Copy.784a0425.js"),["assets/Copy.784a0425.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/helper.f12d6812.js","assets/Paginator.7e96886c.js","assets/index.3362ebdd.js"]))},{title:"manage.sidemenu.decompress",icon:we,to:"/@manage/tasks/decompress",role:c.GENERAL,component:n(()=>o(()=>import("./Decompress.ab5c9ed0.js"),["assets/Decompress.ab5c9ed0.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/helper.f12d6812.js","assets/Paginator.7e96886c.js","assets/index.3362ebdd.js"]))}]},{title:"manage.sidemenu.users",icon:ne,to:"/@manage/users",component:n(()=>o(()=>import("./Users.1e93c249.js"),["assets/Users.1e93c249.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/DeletePopover.8e8c95fa.js","assets/Wether.7d848469.js"]))},{title:"manage.sidemenu.storages",icon:oe,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.363d312c.js"),["assets/Storages.363d312c.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/DeletePopover.8e8c95fa.js"]))},{title:"manage.sidemenu.metas",icon:Pe,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.8dc290e9.js"),["assets/Metas.8dc290e9.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/DeletePopover.8e8c95fa.js","assets/Wether.7d848469.js"]))},{title:"manage.sidemenu.indexes",icon:re,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.ba8f9782.js"),["assets/indexes.ba8f9782.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/Common.65a73042.js","assets/index.b32ea32c.js","assets/SettingItem.709c0a47.js","assets/item_type.ee87ae79.js","assets/index.3362ebdd.js","assets/ResponsiveGrid.20c28daf.js","assets/index.5c3e5e28.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ae,component:n(()=>o(()=>import("./backup-restore.ab9960e6.js"),["assets/backup-restore.ab9960e6.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/index.b32ea32c.js","assets/index.b3bd7f11.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:be,to:"/",role:c.GUEST,refresh:!0}],{isOpen:ye,onOpen:xe,onClose:y}=ie();se(()=>ce.get("/auth/logout"));const Me=()=>{const e=h(),{to:r}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return D("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(S,{"aria-label":"menu",get icon(){return t(Ce,{})},display:{"@sm":"none"},onClick:xe,size:"sm"}),t(p,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(S,{"aria-label":"logout",get icon(){return t(Le,{})},onClick:()=>{le(),ue.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(me,{get opened(){return ye()},placement:"left",onClose:y,get children(){return[t(ge,{}),t(de,{get children(){return[t(_e,{}),t(he,{color:"$info9",get children(){return e("manage.title")}}),t(pe,{get children(){return[t(v,{items:b}),t(A,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(V,{}),t(d,{as:B,cursor:"pointer",boxSize:"$7",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),O.show({status:"success",description:e("home.toolbar.local_settings_auto"),closable:!1}),setTimeout(function(){location.reload()},2500)}}),t(k,{})]}})}})]}})]}})]}})]}})},Fe=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.217a46cf.js"),["assets/AddOrEdit.217a46cf.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.20c28daf.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.217a46cf.js"),["assets/AddOrEdit.217a46cf.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.20c28daf.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.1675f0b1.js"),["assets/AddOrEdit.1675f0b1.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/FolderTree.6ff10d4f.js","assets/index.3362ebdd.js","assets/PublicKeys.bff59a98.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.1675f0b1.js"),["assets/AddOrEdit.1675f0b1.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/FolderTree.6ff10d4f.js","assets/index.3362ebdd.js","assets/PublicKeys.bff59a98.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.13c97c0e.js"),["assets/AddOrEdit.13c97c0e.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/FolderTree.6ff10d4f.js","assets/index.3362ebdd.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.13c97c0e.js"),["assets/AddOrEdit.13c97c0e.js","assets/index.381e3abe.js","assets/index.a020acf1.css","assets/FolderTree.6ff10d4f.js","assets/index.3362ebdd.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.8ba9e222.js"),["assets/2fa.8ba9e222.js","assets/index.381e3abe.js","assets/index.a020acf1.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.23484abf.js"),["assets/Messenger.23484abf.js","assets/index.381e3abe.js","assets/index.a020acf1.css"]))}],Ne=e=>(Te(e.title),t(A,{h:"$full",get children(){return t(p,{get children(){return e.title}})}})),x=(e,r=[])=>(e.forEach(a=>{a.children?x(a.children,r):r.push({to:Ee(a.to,"/@manage"),component:a.component||(()=>t(Ne,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),We=x(b).concat(Fe),ze=()=>{const e=h();return $e(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Me,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return D("$background","$neutral2")()},overflowY:"auto",get children(){return[t(v,{items:b}),t(A,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(V,{}),t(d,{as:B,cursor:"pointer",boxSize:"$7",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),O.show({status:"success",description:"\u8BBE\u7F6E\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u5237\u65B0",closable:!1}),setTimeout(function(){location.reload()},2500)}}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(fe,{get children(){return t(C,{each:We,children:r=>t(Ie,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Xe=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{De as F,i as G,Xe as i};
