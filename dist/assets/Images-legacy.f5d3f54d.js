!function(){function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}System.register(["./index-legacy.d32a2611.js","./style-legacy.326991e4.js","./ImageWithError-legacy.68699d01.js","./icon-legacy.7f74f161.js","./helper-legacy.bc308893.js","./GridItem-legacy.ffffec46.js","./index-legacy.63be13ff.js","./Layout-legacy.139bb673.js","./index-legacy.4dbc738a.js","./FolderTree-legacy.b78bed99.js","./index-legacy.79e56aef.js","./index-legacy.b7f7ab83.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,f,g,d,b,h,p,m,j,y,w,x,v,$,_,k,P,C,O,S,M,E;return{setters:[function(e){t=e.bM,r=e.E,i=e.h,o=e.ak,c=e.aJ,a=e.a9,l=e.a8,u=e.t,s=e.dB,f=e.aA,g=e.S,d=e.aP,b=e.ay,h=e.az,p=e.ah,m=e.a,j=e.k,y=e.H,w=e.a3,x=e.da,v=e.l,$=e.bT,_=e.bU},function(e){k=e.b},function(e){P=e.I},function(e){C=e.O,O=e.g},function(e){S=e.I,M=e.u},function(e){E=e.G},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var I=function(n){if((0,t().isHide)(n.obj)||n.obj.type!==C.IMAGE)return null;var m=r().setPathAs,j=i(c,{get color(){return o()},boxSize:"$12",get as(){return O(n.obj)}}),y=k({id:1}).show,w=a().rawLink,x=M(),v=x.openWithDoubleClick,$=x.toggleWithClick,_=x.restoreSelectionCache;return i(p.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){var t,r,c;return i(l,(r={w:"$full",get classList(){return{selected:!!n.obj.selected}},class:"image-item viselect-item"},(c={})[t="data-index"]=c[t]||{},c[t].get=function(){return n.index},e(r,"p","$1"),e(r,"spacing","$1"),e(r,"rounded","$lg"),e(r,"transition","all 0.3s"),e(r,"border","2px solid transparent"),"_hover",c._hover=c._hover||{},c._hover.get=function(){return{border:"2px solid ".concat(o())}},"cursor",c.cursor=c.cursor||{},c.cursor.get=function(){return v()||$()?"default":"pointer"},e(r,"onMouseEnter",(function(){m(n.obj.name,n.obj.is_dir,!0)})),e(r,"onContextMenu",(function(e){u((function(){s(n.index,!0,!0)})),y(e,{props:n.obj})})),"children",c.children=c.children||{},c.children.get=function(){return i(f,{w:"$full",pos:"relative",get children(){return[i(g,{get when(){return d()},get children(){return i(S,{pos:"absolute",left:"$1",top:"$1","on:mousedown":function(e){e.stopPropagation()},"on:click":function(e){e.stopPropagation()},get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),i(P,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return i(b,{size:"lg"})},fallbackErr:j,get src(){return w(n.obj)},loading:"lazy","on:dblclick":function(){v()&&(h.emit("gallery",n.obj.name),s(n.index,!0,!0))},"on:click":function(e){if(!v()&&!(e.ctrlKey||e.metaKey||e.shiftKey)&&_())return $()?s(n.index,!n.obj.selected):void h.emit("gallery",n.obj.name)}})]}})},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,c=r[i];(o=n[c]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c,o)}}(r,c),r))}})};n("default",(function(e){var n=m(),t=j((function(){return i(x,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return i(y,{get each(){return w.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return i(E,{obj:e,get index(){return n()}})}})}})})),r=M(),o=(r.isMouseSupported,r.registerSelectContainer),c=r.captureContentMenu;return o(),i(l,{"oncapture:contextmenu":c,class:"viselect-container",spacing:"$2",w:"$full",get children(){return[i(g,{get when(){return"top"===v.show_folder_in_image_view},get children(){return t()}}),i(g,{get when(){return e.images.length>0},get fallback(){return i($,{m:"$2",get children(){return n("home.no_images")}})},get children(){return i(_,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return i(y,{get each(){return w.objs},children:function(e,n){return i(I,{obj:e,get index(){return n()}})}})}})}}),i(g,{get when(){return"bottom"===v.show_folder_in_image_view},get children(){return t()}})]}})}))}}}))}();
