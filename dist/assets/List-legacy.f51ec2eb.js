!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(u){a=!0,i=u}finally{try{l||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.62669c0d.js","./style-legacy.630a2bca.js","./index-legacy.9fb0b598.js","./icon-legacy.f6b2517a.js","./helper-legacy.bbf6ffe4.js"],(function(t){"use strict";var r,i,o,l,a,u,c,s,f,d,g,b,h,m,p,y,v,w,j,x,A,S,k,C,O,$,_,P,M,z,D,I,K,T,E,L,H;return{setters:[function(e){r=e.bK,i=e.E,o=e.b,l=e.h,a=e.av,u=e.N,c=e.aQ,s=e.aS,f=e.dz,d=e.t,g=e.aT,b=e.S,h=e.aK,m=e.al,p=e.aA,y=e.a6,v=e.ci,w=e.cX,j=e.ai,x=e.l,A=e.a,S=e.m,k=e.x,C=e.dA,O=e.dB,$=e.G,_=e.dC,P=e.H,M=e.a2,z=e.a7},function(e){D=e.b},function(e){I=e.o},function(e){K=e.g,T=e.O},function(e){E=e.u,L=e.I,H=e.a}],execute:function(){var B=t("c",[{name:"name",textAlign:"left",w:{"@initial":"75%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"25%","@md":"18%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"32%"}}]),G=function(e){if((0,r().isHide)(e.obj))return null;var t=i().setPathAs,A=D({id:1}).show,S=o(),k=S.pushHref,C=S.to,O=H().isMouseSupported,$=E(),_=function(){return x.list_item_filename_overflow};return l(j.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var r,i,o;return l(a,(i={get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item"},(o={})[r="data-index"]=o[r]||{},o[r].get=function(){return e.index},n(i,"w","$full"),n(i,"p","$2"),n(i,"rounded","$lg"),n(i,"transition","all 0.3s"),"_hover",o._hover=o._hover||{},o._hover.get=function(){return{transform:"scale(1.01)",bgColor:u()}},n(i,"as",I),"href",o.href=o.href||{},o.href.get=function(){return e.obj.name},"cursor",o.cursor=o.cursor||{},o.cursor.get=function(){return O()||c()&&!$()?"default":"pointer"},"bgColor",o.bgColor=o.bgColor||{},o.bgColor.get=function(){return s((function(){return!!e.obj.selected}),!0)()?u():void 0},n(i,"on:dblclick",(function(t){O()&&(t.ctrlKey||t.metaKey||t.shiftKey||C(k(e.obj.name)))})),n(i,"on:click",(function(t){if(O())return t.preventDefault();c()&&(t.preventDefault(),$()?C(k(e.obj.name)):f(e.index,!e.obj.selected))})),n(i,"onMouseEnter",(function(){t(e.obj.name,e.obj.is_dir,!0)})),n(i,"onContextMenu",(function(t){d((function(){g(!1),f(e.index,!0,!0)})),A(t,{props:e.obj})})),"children",o.children=o.children||{},o.children.get=function(){return[l(a,{class:"name-box",spacing:"$1",get w(){return B[0].w},get children(){return[l(b,{get when(){return c()},get children(){return l(L,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(t){f(e.index,t.target.checked)}})}}),l(h,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return K(e.obj)},mr:"$1","on:click":function(t){e.obj.type===T.IMAGE&&(t.stopPropagation(),t.preventDefault(),p.emit("gallery",e.obj.name))}}),l(y,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===_()?"unset":"nowrap","overflow-x":"scrollable"===_()?"auto":"hidden",textOverflow:"ellipsis"===_()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),l(y,{class:"size",get w(){return B[1].w},get textAlign(){return B[1].textAlign},get children(){return v(e.obj.size)}}),l(y,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return B[2].w},get textAlign(){return B[2].textAlign},get children(){return w(e.obj.modified)}})]},function(e,t){for(var n in t)(o=t[n]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),i=0;i<r.length;i++){var o,l=r[i];(o=t[l]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,l,o)}}(i,o),i))}})},N=t("L",(function(t){var n=A(),r=e(S(),2),i=r[0],o=r[1],u=e(S(!1),2),f=u[0],h=u[1];k((function(){i()&&t.sortCallback(i(),f())}));var m=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===i()?h(!f()):d((function(){o(e.name),h(!1)}))}}};return l(a,{class:"title",w:"$full",p:"$2",get children(){return[l(a,{get w(){return B[0].w},spacing:"$1",get children(){return[l(b,{get when(){return s((function(){return!t.disableCheckbox}),!0)()&&c()},get children(){return l(L,{get checked(){return C()},get indeterminate(){return O()},onChange:function(e){g(e.target.checked)}})}}),l(y,$((function(){return m(B[0])}),{get children(){return n("home.obj.".concat(B[0].name))}}))]}}),l(y,$({get w(){return B[1].w}},(function(){return m(B[1])}),{get children(){return n("home.obj.".concat(B[1].name))}})),l(y,$({get w(){return B[2].w}},(function(){return m(B[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(B[2].name))}}))]}})})),Q=Object.freeze(Object.defineProperty({__proto__:null,ListTitle:N,default:function(){var e=H(),t=e.isMouseSupported,n=e.registerSelectContainer,r=e.captureContentMenu;return n(),l(z,{onDragOver:function(e){for(var t,n,r=Array.from(null!==(t=null===(n=e.dataTransfer)||void 0===n?void 0:n.items)&&void 0!==t?t:[]),i=0;i<r.length;i++){if("file"===r[i].kind){p.emit("tool","upload"),e.preventDefault();break}}},"oncapture:contextmenu":r,get classList(){return{"viselect-container":t()}},class:"list",w:"$full",spacing:"$1",get children(){return[l(N,{sortCallback:_}),l(P,{get each(){return M.objs},children:function(e,t){return l(G,{obj:e,get index(){return t()}})}})]}})}},Symbol.toStringTag,{value:"Module"}));t("a",Q)}}}))}();
