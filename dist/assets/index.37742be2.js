import{h as t,H as C,a8 as M,k as F,ax as T,ay as R,bU as c,a2 as $,a1 as N,b as f,a as h,O as W,Q as z,N as P,S as E,aL as d,bV as p,m as H,bW as A,aw as g,ad as l,aE as Y,W as n,X as o,bX as U,bY as j,bZ as X,b_ as q,b$ as J,c0 as Q,c1 as Z,c2 as K,c3 as G,c4 as ee,c5 as te,c6 as ne,c7 as oe,c8 as re,c9 as ae,aP as ie,b1 as se,bi as ce,Y as D,al as w,bu as le,bn as ue,bo as me,bp as ge,bq as de,br as _e,aC as I,a_ as O,bt as k,bj as he,ca as pe,n as Ee,cb as fe,cc as Ae,cd as Ie}from"./index.8f47759d.js";import{F as S,I as be,b as ve,c as Le,d as Te,S as V,e as Re,a as $e}from"./index.583cab3f.js";import{A as we,j as Se,c as Ce,k as Pe,h as B}from"./index.8080d0ee.js";import{S as De}from"./index.891dfa1c.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e[e.TRAFFIC=11]="TRAFFIC",e))(i||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const ke=e=>{const r=F(()=>{if(!T.is_admin(R())){if(e.role===void 0)return!1;if(e.role===c.GENERAL&&!T.is_general(R()))return!1}return!0});return t(N,{get fallback(){return t(Ve,e)},get children(){return[t($,{get when(){return!r()},children:null}),t($,{get when(){return e.children},get children(){return t(Be,e)}})]}})},Ve=e=>{const{pathname:r}=f(),a=h(),u=()=>r()===e.to;return t(we,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:m=>{var L;if(y(),e.refresh){(L=m.stopPropagation)==null||L.call(m);let _=e.to;_.startsWith("http")||(_=z(_)),window.open(_,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(d,{mr:"$2",get as(){return e.icon}})}}),t(p,{get children(){return a(e.title)}})]}})},Be=e=>{const{pathname:r}=f(),[a,u]=H(r().includes(e.to)),m=h();return t(l,{w:"$full",get children(){return[t(A,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(d,{mr:"$2",get as(){return e.icon}})}}),t(p,{get children(){return m(e.title)}})]}}),t(d,{as:Se,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(M,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(C,{get each(){return e.items},children:r=>t(ke,r)})}});function ye(e){return Y({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>o(()=>import("./Common.aa925186.js"),["assets/Common.aa925186.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/SettingItem.9016b078.js","assets/item_type.ee87ae79.js","assets/index.8080d0ee.js","assets/ResponsiveGrid.834c80c3.js","assets/index.891dfa1c.js"])),v=[{title:"manage.sidemenu.profile",icon:U,to:"/@manage",role:c.GUEST,component:n(()=>o(()=>import("./Profile.ef4496fd.js"),["assets/Profile.ef4496fd.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/index.8080d0ee.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.2f67ad47.js"]))},{title:"manage.sidemenu.settings",icon:j,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:X,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:q,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:J,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:Q,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:S,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:S,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:Z,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.f5667d84.js"),["assets/S3.f5667d84.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/SettingItem.9016b078.js","assets/item_type.ee87ae79.js","assets/index.8080d0ee.js","assets/ResponsiveGrid.834c80c3.js","assets/FolderTree.0f6b4212.js","assets/index.4aedc6f8.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.891dfa1c.js"]))},{title:"manage.sidemenu.ftp",icon:K,to:"/@manage/settings/ftp",component:()=>t(s,{get group(){return i.FTP}})},{title:"manage.sidemenu.traffic",icon:G,to:"/@manage/settings/traffic",component:()=>t(s,{get group(){return i.TRAFFIC}})},{title:"manage.sidemenu.other",icon:ee,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.3ddfa537.js"),["assets/Other.3ddfa537.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/FolderTree.0f6b4212.js","assets/index.8080d0ee.js","assets/index.583cab3f.js","assets/SettingItem.9016b078.js","assets/item_type.ee87ae79.js","assets/index.891dfa1c.js"]))}]},{title:"manage.sidemenu.tasks",icon:ye,to:"/@manage/tasks",role:c.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:be,to:"/@manage/tasks/offline_download",role:c.GENERAL,component:n(()=>o(()=>import("./offline_download.7175e2df.js"),["assets/offline_download.7175e2df.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/helper.599f9cfb.js","assets/Paginator.69e23ef5.js","assets/index.8080d0ee.js"]))},{title:"manage.sidemenu.upload",icon:te,to:"/@manage/tasks/upload",role:c.GENERAL,component:n(()=>o(()=>import("./Upload.6d4f3f87.js"),["assets/Upload.6d4f3f87.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/helper.599f9cfb.js","assets/Paginator.69e23ef5.js","assets/index.8080d0ee.js"]))},{title:"manage.sidemenu.copy",icon:ve,to:"/@manage/tasks/copy",role:c.GENERAL,component:n(()=>o(()=>import("./Copy.07ef2e3d.js"),["assets/Copy.07ef2e3d.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/helper.599f9cfb.js","assets/Paginator.69e23ef5.js","assets/index.8080d0ee.js"]))},{title:"manage.sidemenu.decompress",icon:Ce,to:"/@manage/tasks/decompress",role:c.GENERAL,component:n(()=>o(()=>import("./Decompress.5983c087.js"),["assets/Decompress.5983c087.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/helper.599f9cfb.js","assets/Paginator.69e23ef5.js","assets/index.8080d0ee.js"]))}]},{title:"manage.sidemenu.users",icon:ne,to:"/@manage/users",component:n(()=>o(()=>import("./Users.f2c2b780.js"),["assets/Users.f2c2b780.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/DeletePopover.a8f72636.js","assets/Wether.1802c397.js"]))},{title:"manage.sidemenu.storages",icon:oe,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.8441841a.js"),["assets/Storages.8441841a.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/DeletePopover.a8f72636.js"]))},{title:"manage.sidemenu.metas",icon:De,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.737fdfec.js"),["assets/Metas.737fdfec.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/DeletePopover.a8f72636.js","assets/Wether.1802c397.js"]))},{title:"manage.sidemenu.indexes",icon:re,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.ebdb6a51.js"),["assets/indexes.ebdb6a51.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/Common.aa925186.js","assets/index.583cab3f.js","assets/SettingItem.9016b078.js","assets/item_type.ee87ae79.js","assets/index.8080d0ee.js","assets/ResponsiveGrid.834c80c3.js","assets/index.891dfa1c.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:ae,component:n(()=>o(()=>import("./backup-restore.3edc5456.js"),["assets/backup-restore.3edc5456.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/index.583cab3f.js","assets/index.4aedc6f8.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:Le,to:"/",role:c.GUEST,refresh:!0}],{isOpen:xe,onOpen:Me,onClose:y}=ie(),[Je,Fe]=se(()=>ce.get("/auth/logout")),Ne=()=>{const e=h(),{to:r}=f(),a=async()=>{he(await Fe(),()=>{pe(),Ee.success(e("manage.logout_success")),window.location.href="/"})};return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return D("$background","$neutral2")()},get children(){return[t(A,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(w,{"aria-label":"menu",get icon(){return t(Pe,{})},display:{"@sm":"none"},onClick:Me,size:"sm"}),t(p,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(w,{"aria-label":"logout",get icon(){return t(Te,{})},onClick:a,size:"sm"})}})]}}),t(le,{get opened(){return xe()},placement:"left",onClose:y,get children(){return[t(ue,{}),t(me,{get children(){return[t(ge,{}),t(de,{color:"$info9",get children(){return e("manage.title")}}),t(_e,{get children(){return[t(b,{items:v}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(V,{}),t(d,{as:B,cursor:"pointer",boxSize:"$7",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),O.show({status:"success",description:e("home.toolbar.local_settings_auto"),closable:!1}),setTimeout(function(){location.reload()},2500)}}),t(k,{})]}})}})]}})]}})]}})]}})},We=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.cac237fc.js"),["assets/AddOrEdit.cac237fc.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.834c80c3.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.cac237fc.js"),["assets/AddOrEdit.cac237fc.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.834c80c3.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.77aba26b.js"),["assets/AddOrEdit.77aba26b.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/FolderTree.0f6b4212.js","assets/index.8080d0ee.js","assets/PublicKeys.2f67ad47.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.77aba26b.js"),["assets/AddOrEdit.77aba26b.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/FolderTree.0f6b4212.js","assets/index.8080d0ee.js","assets/PublicKeys.2f67ad47.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.c92187bd.js"),["assets/AddOrEdit.c92187bd.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/FolderTree.0f6b4212.js","assets/index.8080d0ee.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.c92187bd.js"),["assets/AddOrEdit.c92187bd.js","assets/index.8f47759d.js","assets/index.121f8076.css","assets/FolderTree.0f6b4212.js","assets/index.8080d0ee.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.c3abea41.js"),["assets/2fa.c3abea41.js","assets/index.8f47759d.js","assets/index.121f8076.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.d18082e8.js"),["assets/Messenger.d18082e8.js","assets/index.8f47759d.js","assets/index.121f8076.css"]))}],ze=e=>(Re(e.title),t(I,{h:"$full",get children(){return t(p,{get children(){return e.title}})}})),x=(e,r=[])=>(e.forEach(a=>{a.children?x(a.children,r):r.push({to:fe(a.to,"/@manage"),component:a.component||(()=>t(ze,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),He=x(v).concat(We),Ye=()=>{const e=h();return $e(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ne,{}),t(A,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return D("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:v}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(V,{}),t(d,{as:B,cursor:"pointer",boxSize:"$7",onClick:()=>{localStorage.removeItem("hope-ui-color-mode"),O.show({status:"success",description:"\u8BBE\u7F6E\u6210\u529F\uFF0C\u5373\u5C06\u81EA\u52A8\u5237\u65B0",closable:!1}),setTimeout(function(){location.reload()},2500)}}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Ae,{get children(){return t(C,{each:He,children:r=>t(Ie,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"}));export{Oe as F,i as G,Qe as i};
