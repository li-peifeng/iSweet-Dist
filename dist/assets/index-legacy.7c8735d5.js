!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return j()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}n.wrap=s;var g={};function d(){}function m(){}function h(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(A([])));v&&v!==r&&o.call(v,a)&&(p=v);var b=h.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,n){function r(i,a,u,c){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,g=s.value;return g&&"object"==t(g)&&o.call(g,"__await")?n.resolve(g.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(g).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,g;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=h,l(b,"constructor",h),l(h,"constructor",m),m.displayName=l(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=A,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;$(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),g}},n}function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.83e1ba72.js","./index-legacy.e333a5c1.js","./index-legacy.2259f4df.js","./index-legacy.11261a76.js"],(function(t,o){"use strict";var i,a,u,c,l,s,f,g,d,m,h,p,y,v,b,w,E,x,L,$,S,A,j,k,O,I,_,C,P,T,G,N,R,F,D,z,Y,U,B,M,V,W,X,H,q,Q,Z,J,K,tt,et,nt,rt,ot,it,at,ut,ct,lt,st,ft,gt,dt,mt,ht,pt,yt,vt,bt,wt,Et,xt,Lt;return{setters:[function(t){i=t.h,a=t.H,u=t.a8,c=t.k,l=t.ay,s=t.az,f=t.bL,g=t.a2,d=t.a1,m=t.b,h=t.a,p=t.O,y=t.Q,v=t.N,b=t.S,w=t.aM,E=t.bM,x=t.m,L=t.bN,$=t.ax,S=t.ae,A=t.aF,j=t.W,k=t.X,O=t.bO,I=t.bP,_=t.bQ,C=t.bR,P=t.bS,T=t.bT,G=t.bU,N=t.bV,R=t.bW,F=t.bX,D=t.bY,z=t.bZ,Y=t.b_,U=t.b$,B=t.c0,M=t.aP,V=t.b0,W=t.bh,X=t.Y,H=t.am,q=t.bt,Q=t.bm,Z=t.bn,J=t.bo,K=t.bp,tt=t.bq,et=t.aD,nt=t.aZ,rt=t.bs,ot=t.bi,it=t.c1,at=t.n,ut=t.c2,ct=t.c3,lt=t.c4},function(t){st=t.F,ft=t.I,gt=t.b,dt=t.c,mt=t.d,ht=t.S,pt=t.e,yt=t.a},function(t){vt=t.A,bt=t.i,wt=t.c,Et=t.j,xt=t.h},function(t){Lt=t.S}],execute:function(){var $t=t("G",function(t){return t[t.SINGLE=0]="SINGLE",t[t.SITE=1]="SITE",t[t.STYLE=2]="STYLE",t[t.PREVIEW=3]="PREVIEW",t[t.GLOBAL=4]="GLOBAL",t[t.ARIA2=5]="ARIA2",t[t.INDEX=6]="INDEX",t[t.SSO=7]="SSO",t[t.LDAP=8]="LDAP",t[t.S3=9]="S3",t[t.FTP=10]="FTP",t[t.TRAFFIC=11]="TRAFFIC",t}($t||{})),St=t("F",function(t){return t[t.PUBLIC=0]="PUBLIC",t[t.PRIVATE=1]="PRIVATE",t[t.READONLY=2]="READONLY",t[t.DEPRECATED=3]="DEPRECATED",t}(St||{})),At=function(t){var e=c((function(){if(!l.is_admin(s())){if(void 0===t.role)return!1;if(t.role===f.GENERAL&&!l.is_general(s()))return!1}return!0}));return i(d,{get fallback(){return i(jt,t)},get children(){return[i(g,{get when(){return!e()},children:null}),i(g,{get when(){return t.children},get children(){return i(kt,t)}})]}})},jt=function(t){var e=m().pathname,n=h(),r=function(){return e()===t.to};return i(vt,{get cancelBase(){return t.to.startsWith("http")},display:"flex",as:p,get href(){return t.to},onClick:function(e){if(Gt(),t.refresh){var n;null===(n=e.stopPropagation)||void 0===n||n.call(e);var r=t.to;r.startsWith("http")||(r=y(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:r()?"$info4":v(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return r()?"$info4":""},get color(){return r()?"$info11":""},get external(){return t.external},get children(){return[i(b,{get when(){return t.icon},get children(){return i(w,{mr:"$2",get as(){return t.icon}})}}),i(E,{get children(){return n(t.title)}})]}})},kt=function(t){var e=m().pathname,n=r(x(e().includes(t.to)),2),o=n[0],a=n[1],u=h();return i(S,{w:"$full",get children(){return[i(L,{justifyContent:"space-between",onClick:function(){a(!o())},w:"$full",alignItems:"center",get _hover(){return{bgColor:v()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[i($,{get children(){return[i(b,{get when(){return t.icon},get children(){return i(w,{mr:"$2",get as(){return t.icon}})}}),i(E,{get children(){return u(t.title)}})]}}),i(w,{as:bt,get transform(){return o()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),i(b,{get when(){return o()},get children(){return i(S,{pl:"$2",get children(){return i(Ot,{get items(){return t.children}})}})}})]}})},Ot=function(t){return i(u,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return i(a,{get each(){return t.items},children:function(t){return i(At,t)}})}})};var It=j((function(){return k((function(){return o.import("./Common-legacy.3dbf16b1.js")}),void 0)})),_t=[{title:"manage.sidemenu.profile",icon:O,to:"/@manage",role:f.GUEST,component:j((function(){return k((function(){return o.import("./Profile-legacy.92ff66a4.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:I,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:_,to:"/@manage/settings/site",component:function(){return i(It,{get group(){return $t.SITE}})}},{title:"manage.sidemenu.style",icon:C,to:"/@manage/settings/style",component:function(){return i(It,{get group(){return $t.STYLE}})}},{title:"manage.sidemenu.preview",icon:P,to:"/@manage/settings/preview",component:function(){return i(It,{get group(){return $t.PREVIEW}})}},{title:"manage.sidemenu.global",icon:T,to:"/@manage/settings/global",component:function(){return i(It,{get group(){return $t.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:st,to:"/@manage/settings/sso",component:function(){return i(It,{get group(){return $t.SSO}})}},{title:"manage.sidemenu.ldap",icon:st,to:"/@manage/settings/ldap",component:function(){return i(It,{get group(){return $t.LDAP}})}},{title:"manage.sidemenu.s3",icon:G,to:"/@manage/settings/s3",component:j((function(){return k((function(){return o.import("./S3-legacy.7e26f1cd.js")}),void 0)}))},{title:"manage.sidemenu.ftp",icon:N,to:"/@manage/settings/ftp",component:function(){return i(It,{get group(){return $t.FTP}})}},{title:"manage.sidemenu.traffic",icon:R,to:"/@manage/settings/traffic",component:function(){return i(It,{get group(){return $t.TRAFFIC}})}},{title:"manage.sidemenu.other",icon:F,to:"/@manage/settings/other",component:j((function(){return k((function(){return o.import("./Other-legacy.1e5a0781.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(t){return A({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},t)},to:"/@manage/tasks",role:f.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:ft,to:"/@manage/tasks/offline_download",role:f.GENERAL,component:j((function(){return k((function(){return o.import("./offline_download-legacy.c1ee871f.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:D,to:"/@manage/tasks/upload",role:f.GENERAL,component:j((function(){return k((function(){return o.import("./Upload-legacy.81a21ec0.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:gt,to:"/@manage/tasks/copy",role:f.GENERAL,component:j((function(){return k((function(){return o.import("./Copy-legacy.570a3726.js")}),void 0)}))},{title:"manage.sidemenu.decompress",icon:wt,to:"/@manage/tasks/decompress",role:f.GENERAL,component:j((function(){return k((function(){return o.import("./Decompress-legacy.969cc326.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:z,to:"/@manage/users",component:j((function(){return k((function(){return o.import("./Users-legacy.777cda22.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:Y,to:"/@manage/storages",component:j((function(){return k((function(){return o.import("./Storages-legacy.156fd54e.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:Lt,to:"/@manage/metas",component:j((function(){return k((function(){return o.import("./Metas-legacy.316c057f.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:U,to:"/@manage/indexes",component:j((function(){return k((function(){return o.import("./indexes-legacy.7fe35047.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:B,component:j((function(){return k((function(){return o.import("./backup-restore-legacy.a502d663.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:dt,to:"/",role:f.GUEST,refresh:!0}],Ct=M(),Pt=Ct.isOpen,Tt=Ct.onOpen,Gt=Ct.onClose,Nt=r(V((function(){return W.get("/auth/logout")})),2),Rt=(Nt[0],Nt[1]),Ft=function(){var t=h(),r=m().to,o=function(){var o,i=(o=e().mark((function n(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ot,e.next=3,Rt();case 3:e.t1=e.sent,e.t2=function(){it(),at.success(t("manage.logout_success")),r("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},(0,e.t0)(e.t1,e.t2);case 6:case"end":return e.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,i){var a=o.apply(t,e);function u(t){n(a,r,i,u,c,"next",t)}function c(t){n(a,r,i,u,c,"throw",t)}u(void 0)}))});return function(){return i.apply(this,arguments)}}();return i(S,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return X("$background","$neutral2")()},get children(){return[i(L,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[i($,{spacing:"$2",get children(){return[i(H,{"aria-label":"menu",get icon(){return i(Et,{})},display:{"@sm":"none"},onClick:Tt,size:"sm"}),i(E,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){r("/@manage")},get children(){return t("manage.title")}})]}}),i($,{spacing:"$1",get children(){return i(H,{"aria-label":"logout",get icon(){return i(mt,{})},onClick:o,size:"sm"})}})]}}),i(q,{get opened(){return Pt()},placement:"left",onClose:Gt,get children(){return[i(Q,{}),i(Z,{get children(){return[i(J,{}),i(K,{color:"$info9",get children(){return t("manage.title")}}),i(tt,{get children(){return[i(Ot,{items:_t}),i(et,{get children(){return i($,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[i(ht,{}),i(w,{as:xt,cursor:"pointer",boxSize:"$7",onClick:function(){localStorage.removeItem("hope-ui-color-mode"),nt.show({status:"success",description:t("home.toolbar.local_settings_auto"),closable:!1}),setTimeout((function(){location.reload()}),2500)}}),i(rt,{})]}})}})]}})]}})]}})]}})},Dt=[{to:"/storages/add",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.3001a73a.js")}),void 0)}))},{to:"/storages/edit/:id",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.3001a73a.js")}),void 0)}))},{to:"/users/add",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.6a503477.js")}),void 0)}))},{to:"/users/edit/:id",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.6a503477.js")}),void 0)}))},{to:"/metas/add",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.027f7aba.js")}),void 0)}))},{to:"/metas/edit/:id",component:j((function(){return k((function(){return o.import("./AddOrEdit-legacy.027f7aba.js")}),void 0)}))},{to:"/2fa",component:j((function(){return k((function(){return o.import("./2fa-legacy.69aede1b.js")}),void 0)}))},{to:"/messenger",component:j((function(){return k((function(){return o.import("./Messenger-legacy.d3538418.js")}),void 0)}))}],zt=function(t){return pt(t.title),i(et,{h:"$full",get children(){return i(E,{get children(){return t.title}})}})},Yt=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.forEach((function(e){e.children?t(e.children,n):n.push({to:ut(e.to,"/@manage"),component:e.component||function(){return i(zt,{get title(){return e.title},get to(){return e.to||"empty"}})}})})),n}(_t).concat(Dt),Ut=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var t=h();return yt((function(){return t("manage.title")})),i(S,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[i(Ft,{}),i(L,{w:"$full",h:"calc(100vh - 64px)",get children(){return[i(S,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return X("$background","$neutral2")()},overflowY:"auto",get children(){return[i(Ot,{items:_t}),i(et,{get children(){return i($,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[i(ht,{}),i(w,{as:xt,cursor:"pointer",boxSize:"$7",onClick:function(){localStorage.removeItem("hope-ui-color-mode"),nt.show({status:"success",description:"设置成功，即将自动刷新",closable:!1}),setTimeout((function(){location.reload()}),2500)}}),i(rt,{})]}})}})]}}),i(S,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return i(ct,{get children(){return i(a,{each:Yt,children:function(t){return i(lt,{get path(){return t.to},get component(){return t.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));t("i",Ut)}}}))}();
