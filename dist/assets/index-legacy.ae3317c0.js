!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],c=!0,u=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(a){u=!0,o=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.5dfccf8c.js","./index-legacy.79c09c14.js","./index-legacy.5bccf7d5.js","./index-legacy.1a951d23.js"],(function(n,t){"use strict";var r,o,i,c,u,a,l,s,g,d,m,f,p,h,b,v,y,$,E,A,S,j,w,k,C,I,x,L,O,T,R,P,_,D,G,N,z,Y,U,B,V,W,F,M,X,H,Q,q,K,Z,J,ee,ne,te,re,oe,ie,ce,ue,ae,le,se,ge,de,me,fe,pe,he,be,ve,ye;return{setters:[function(e){r=e.h,o=e.H,i=e.a7,c=e.k,u=e.aw,a=e.ax,l=e.bQ,s=e.a1,g=e.a0,d=e.b,m=e.a,f=e.O,p=e.Q,h=e.N,b=e.S,v=e.aK,y=e.bR,$=e.m,E=e.bS,A=e.av,S=e.ac,j=e.aD,w=e.W,k=e.X,C=e.bT,I=e.bU,x=e.bV,L=e.bW,O=e.bX,T=e.bY,R=e.bZ,P=e.b_,_=e.b$,D=e.c0,G=e.c1,N=e.c2,z=e.c3,Y=e.c4,U=e.aO,B=e.a$,V=e.be,W=e.Y,F=e.ak,M=e.c5,X=e.n,H=e.bq,Q=e.bj,q=e.bk,K=e.bl,Z=e.bm,J=e.bn,ee=e.aB,ne=e.aY,te=e.bp,re=e.c6,oe=e.c7,ie=e.c8},function(e){ce=e.F,ue=e.I,ae=e.b,le=e.c,se=e.d,ge=e.S,de=e.e,me=e.a},function(e){fe=e.A,pe=e.j,he=e.c,be=e.k,ve=e.h},function(e){ye=e.S}],execute:function(){var $e=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e}($e||{})),Ee=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(Ee||{})),Ae=function(e){var n=c((function(){if(!u.is_admin(a())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!u.is_general(a()))return!1}return!0}));return r(g,{get fallback(){return r(Se,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(je,e)}})]}})},Se=function(e){var n=d().pathname,t=m(),o=function(){return n()===e.to};return r(fe,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(Oe(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},je=function(n){var t=d().pathname,o=e($(t().includes(n.to)),2),i=o[0],c=o[1],u=m();return r(S,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){c(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(A,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return u(n.title)}})]}}),r(v,{as:pe,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(S,{pl:"$2",get children(){return r(we,{get items(){return n.children}})}})}})]}})},we=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(Ae,e)}})}})};var ke=w((function(){return k((function(){return t.import("./Common-legacy.c3fd1af6.js")}),void 0)})),Ce=[{title:"manage.sidemenu.profile",icon:C,to:"/@manage",role:l.GUEST,component:w((function(){return k((function(){return t.import("./Profile-legacy.29bc4880.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:I,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:x,to:"/@manage/settings/site",component:function(){return r(ke,{get group(){return $e.SITE}})}},{title:"manage.sidemenu.style",icon:L,to:"/@manage/settings/style",component:function(){return r(ke,{get group(){return $e.STYLE}})}},{title:"manage.sidemenu.preview",icon:O,to:"/@manage/settings/preview",component:function(){return r(ke,{get group(){return $e.PREVIEW}})}},{title:"manage.sidemenu.global",icon:T,to:"/@manage/settings/global",component:function(){return r(ke,{get group(){return $e.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:ce,to:"/@manage/settings/sso",component:function(){return r(ke,{get group(){return $e.SSO}})}},{title:"manage.sidemenu.ldap",icon:ce,to:"/@manage/settings/ldap",component:function(){return r(ke,{get group(){return $e.LDAP}})}},{title:"manage.sidemenu.s3",icon:R,to:"/@manage/settings/s3",component:w((function(){return k((function(){return t.import("./S3-legacy.34b756b0.js")}),void 0)}))},{title:"manage.sidemenu.ftp",icon:P,to:"/@manage/settings/ftp",component:function(){return r(ke,{get group(){return $e.FTP}})}},{title:"manage.sidemenu.other",icon:_,to:"/@manage/settings/other",component:w((function(){return k((function(){return t.import("./Other-legacy.416bb67b.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return j({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",role:l.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:ue,to:"/@manage/tasks/offline_download",role:l.GENERAL,component:w((function(){return k((function(){return t.import("./offline_download-legacy.62b24088.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:D,to:"/@manage/tasks/upload",role:l.GENERAL,component:w((function(){return k((function(){return t.import("./Upload-legacy.e84bf1d6.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:ae,to:"/@manage/tasks/copy",role:l.GENERAL,component:w((function(){return k((function(){return t.import("./Copy-legacy.eed55e00.js")}),void 0)}))},{title:"manage.sidemenu.decompress",icon:he,to:"/@manage/tasks/decompress",role:l.GENERAL,component:w((function(){return k((function(){return t.import("./Decompress-legacy.21372fe0.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:G,to:"/@manage/users",component:w((function(){return k((function(){return t.import("./Users-legacy.99173992.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:N,to:"/@manage/storages",component:w((function(){return k((function(){return t.import("./Storages-legacy.4631cb22.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:ye,to:"/@manage/metas",component:w((function(){return k((function(){return t.import("./Metas-legacy.91859025.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:z,to:"/@manage/indexes",component:w((function(){return k((function(){return t.import("./indexes-legacy.90505631.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Y,component:w((function(){return k((function(){return t.import("./backup-restore-legacy.bc6d236f.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:le,to:"/",role:l.GUEST,refresh:!0}],Ie=U(),xe=Ie.isOpen,Le=Ie.onOpen,Oe=Ie.onClose;B((function(){return V.get("/auth/logout")}));var Te=function(){var e=m(),n=d().to;return r(S,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return W("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(A,{spacing:"$2",get children(){return[r(F,{"aria-label":"menu",get icon(){return r(be,{})},display:{"@sm":"none"},onClick:Le,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(A,{spacing:"$1",get children(){return r(F,{"aria-label":"logout",get icon(){return r(se,{})},onClick:function(){M(),X.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(H,{get opened(){return xe()},placement:"left",onClose:Oe,get children(){return[r(Q,{}),r(q,{get children(){return[r(K,{}),r(Z,{color:"$info9",get children(){return e("manage.title")}}),r(J,{get children(){return[r(we,{items:Ce}),r(ee,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(ge,{}),r(v,{as:ve,cursor:"pointer",boxSize:"$7",onClick:function(){localStorage.removeItem("hope-ui-color-mode"),ne.show({status:"success",description:"设置成功，即将自动刷新",closable:!1}),setTimeout((function(){location.reload()}),2500)}}),r(te,{})]}})}})]}})]}})]}})]}})},Re=[{to:"/storages/add",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.cdbf3394.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.cdbf3394.js")}),void 0)}))},{to:"/users/add",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.d17bc618.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.d17bc618.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.0b474f7d.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return k((function(){return t.import("./AddOrEdit-legacy.0b474f7d.js")}),void 0)}))},{to:"/2fa",component:w((function(){return k((function(){return t.import("./2fa-legacy.cf66cff8.js")}),void 0)}))},{to:"/messenger",component:w((function(){return k((function(){return t.import("./Messenger-legacy.e5cdbd11.js")}),void 0)}))}],Pe=function(e){return de(e.title),r(ee,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},_e=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:re(n.to,"/@manage"),component:n.component||function(){return r(Pe,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ce).concat(Re),De=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return me((function(){return e("manage.title")})),r(S,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Te,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(S,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return W("$background","$neutral2")()},overflowY:"auto",get children(){return[r(we,{items:Ce}),r(ee,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(ge,{}),r(v,{as:ve,cursor:"pointer",boxSize:"$7",onClick:function(){localStorage.removeItem("hope-ui-color-mode"),ne.show({status:"success",description:"设置成功，即将自动刷新",closable:!1}),setTimeout((function(){location.reload()}),2500)}}),r(te,{})]}})}})]}}),r(S,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(oe,{get children(){return r(o,{each:_e,children:function(e){return r(ie,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",De)}}}))}();
