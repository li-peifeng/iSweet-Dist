!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}System.register(["./index-legacy.1fb62121.js","./style-legacy.a0ae8a60.js","./ImageWithError-legacy.4a9fafe7.js","./icon-legacy.b4719679.js","./helper-legacy.c01a7354.js","./GridItem-legacy.1803fbaf.js","./index-legacy.39d1f94f.js","./Layout-legacy.9de23afb.js","./index-legacy.af66c637.js","./FolderTree-legacy.1548389a.js","./index-legacy.65469719.js","./index-legacy.57784ad1.js","./index-legacy.265aaf44.js"],(function(n){"use strict";var t,r,i,o,a,c,l,u,s,f,g,d,b,h,p,j,m,y,w,x,v,$,_,k,C,O,P,S,M,E;return{setters:[function(e){t=e.bN,r=e.E,i=e.h,o=e.an,a=e.aM,c=e.aa,l=e.a8,u=e.t,s=e.dC,f=e.aD,g=e.S,d=e.aR,b=e.aB,h=e.aC,p=e.ak,j=e.a,m=e.k,y=e.H,w=e.a3,x=e.dc,v=e.l,$=e.bW,_=e.bX},function(e){k=e.b},function(e){C=e.I},function(e){O=e.O,P=e.g},function(e){S=e.I,M=e.u},function(e){E=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var I=function(n){if((0,t().isHide)(n.obj)||n.obj.type!==O.IMAGE)return null;var j=r().setPathAs,m=i(a,{get color(){return o()},boxSize:"$12",get as(){return P(n.obj)}}),y=k({id:1}).show,w=c().rawLink,x=M(),v=x.openWithDoubleClick,$=x.toggleWithClick,_=x.restoreSelectionCache;return i(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var t,r,a;return i(l,(r={w:"$full",get classList(){return{selected:!!n.obj.selected}},class:"image-item viselect-item"},(a={})[t="data-index"]=a[t]||{},a[t].get=function(){return n.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",a._hover=a._hover||{},a._hover.get=function(){return{border:"2px solid ".concat(o())}},"cursor",a.cursor=a.cursor||{},a.cursor.get=function(){return v()||$()?"default":"pointer"},e(r,"onMouseEnter",(function(){j(n.obj.name,n.obj.is_dir,!0)})),e(r,"onContextMenu",(function(e){u((function(){s(n.index,!0,!0)})),y(e,{props:n.obj})})),"children",a.children=a.children||{},a.children.get=function(){return i(f,{w:"$full",pos:"relative",get children(){return[i(g,{get when(){return d()},get children(){return i(S,{pos:"absolute",left:"$1",top:"$1","on:mousedown":function(e){e.stopPropagation()},"on:click":function(e){e.stopPropagation()},get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),i(C,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return i(b,{size:"lg"})},fallbackErr:m,get src(){return w(n.obj)},loading:"lazy","on:dblclick":function(){v()&&(h.emit("gallery",n.obj.name),s(n.index,!0,!0))},"on:click":function(e){if(!v()&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&_())return $()?s(n.index,!n.obj.selected):void h.emit("gallery",n.obj.name)}})]}})},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,a=r[i];(o=n[a]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a,o)}}(r,a),r))}})};n("default",(function(e){var n=j(),t=m((function(){return i(x,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return i(y,{get each(){return w.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return i(E,{obj:e,get index(){return n()}})}})}})})),r=M(),o=(r.isMouseSupported,r.registerSelectContainer),a=r.captureContentMenu;return o(),i(l,{"oncapture:contextmenu":a,class:"viselect-container",spacing:"$2",w:"$full",get children(){return[i(g,{get when(){return"top"===v.show_folder_in_image_view},get children(){return t()}}),i(g,{get when(){return e.images.length>0},get fallback(){return i($,{m:"$2",get children(){return n("home.no_images")}})},get children(){return i(_,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return i(y,{get each(){return w.objs},children:function(e,n){return i(I,{obj:e,get index(){return n()}})}})}})}}),i(g,{get when(){return"bottom"===v.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();
