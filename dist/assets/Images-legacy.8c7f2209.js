!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.c36084be.js","./Folder-legacy.7ba54af0.js","./index-legacy.73b6b8ea.js","./ImageWithError-legacy.802f423b.js","./icon-legacy.efe6c5ef.js","./helper-legacy.2f2445ee.js","./GridItem-legacy.1fcbeb91.js","./Layout-legacy.127bbc92.js","./useTitle-legacy.b3d20ff3.js","./FolderTree-legacy.485ee7a5.js","./index-legacy.8dc268bc.js","./video_box-legacy.9bd44817.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.7e387cd4.js","./LinkWithBase-legacy.0445ce18.js","./index-legacy.9c5588ed.js","./index-legacy.52acccdf.js"],(function(t){"use strict";var r,i,o,c,a,l,u,s,f,d,g,b,y,h,m,j,p,v,w,x,$,_,S,O,k,I,A,M,L,P,C,E,G;return{setters:[function(e){r=e.bG,i=e.c,o=e.ai,c=e.I,a=e.r,l=e.q,u=e.aL,s=e.a7,f=e.a6,d=e.w,g=e.aO,b=e.dk,y=e.ay,h=e.S,m=e.aw,j=e.ax,p=e.af,v=e.d,w=e.K,x=e.a3,$=e.cW,_=e.l,S=e.bN,O=e.bO},function(e){k=e.b},function(e){I=e.u},function(e){A=e.I},function(e){M=e.O,L=e.g},function(e){P=e.u,C=e.I,E=e.a},function(e){G=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var K=function(t){if((0,r().isHide)(t.obj)||t.obj.type!==M.IMAGE)return null;var v=I().setPathAs,w=i(c,{get color(){return o()},boxSize:"$12",get as(){return L(t.obj)}}),x=n(a(!1),2),$=x[0],_=x[1],S=l((function(){return u()&&($()||t.obj.selected)})),O=k({id:1}).show,G=s().rawLink,K=E().isMouseSupported,W=P();return i(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var n,r,c;return i(f,(r={w:"$full",get classList(){return{selected:!!t.obj.selected}},class:"image-item viselect-item"},(c={})[n="data-index"]=c[n]||{},c[n].get=function(){return t.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",c._hover=c._hover||{},c._hover.get=function(){return{border:"2px solid ".concat(o())}},e(r,"onMouseEnter",(function(){_(!0),v(t.obj.name,t.obj.is_dir,!0)})),e(r,"onMouseLeave",(function(){_(!1)})),e(r,"onContextMenu",(function(e){d((function(){g(!1),b(t.index,!0,!0)})),O(e,{props:t.obj})})),"children",c.children=c.children||{},c.children.get=function(){return i(y,{w:"$full",pos:"relative",get children(){return[i(h,{get when(){return S()||K()&&t.obj.selected},get children(){return i(C,{pos:"absolute",left:"$1",top:"$1",get checked(){return t.obj.selected},onChange:function(e){b(t.index,e.target.checked)}})}}),i(A,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return i(m,{size:"lg"})},fallbackErr:w,get src(){return G(t.obj)},loading:"lazy",get cursor(){return K()||u()&&!W()?"default":"pointer"},"on:dblclick":function(e){K()&&(e.ctrlKey||e.metaKey||e.shiftKey||j.emit("gallery",t.obj.name))},"on:click":function(){K()||(u()&&!W()?b(t.index,!t.obj.selected):j.emit("gallery",t.obj.name))}})]}})},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,c=r[i];(o=n[c]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c,o)}}(r,c),r))}})};t("default",(function(e){var n=v(),t=l((function(){return i($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return i(w,{get each(){return x.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return i(G,{obj:e,get index(){return n()}})}})}})})),r=E(),o=r.isMouseSupported,c=r.registerSelectContainer,a=r.captureContentMenu;return c(),i(f,{"oncapture:contextmenu":a,get classList(){return{"viselect-container":o()}},spacing:"$2",w:"$full",get children(){return[i(h,{get when(){return"top"===_.show_folder_in_image_view},get children(){return t()}}),i(h,{get when(){return e.images.length>0},get fallback(){return i(S,{m:"$2",get children(){return n("home.no_images")}})},get children(){return i(O,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return i(w,{get each(){return x.objs},children:function(e,n){return i(K,{obj:e,get index(){return n()}})}})}})}}),i(h,{get when(){return"bottom"===_.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();
