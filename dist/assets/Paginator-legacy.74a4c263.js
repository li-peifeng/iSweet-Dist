!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,u,c=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(c.push(t.value),!r||c.length!==r);i=!0);}catch(l){o=!0,u=l}finally{try{i||null==n.return||n.return()}finally{if(o)throw u}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}System.register(["./index-legacy.a23801ca.js","./index-legacy.87ecb192.js"],(function(r,n){"use strict";var t,u,c,i,o,l,a,h,f,g,d,m,s,S,y,p,v,x,b;return{setters:[function(e){t=e.G,u=e.ch,c=e.k,i=e.h,o=e.ax,l=e.S,a=e.C,h=e.am,f=e.dd,g=e.H,d=e.bw,m=e.bx,s=e.ae,S=e.bB,y=e.bC,p=e.bD,v=e.bE,x=e.de},function(e){b=e.l}],execute:function(){r("P",(function(r){var n,C=t({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},r),w=e(u({pageSize:C.defaultPageSize,current:C.defaultCurrent}),2),$=w[0],z=w[1];null===(n=C.setResetCallback)||void 0===n||n.call(C,(function(){z("current",C.defaultCurrent)}));var A=c((function(){return Math.ceil(C.total/$.pageSize)})),P=c((function(){var e=$.current,r=Math.max(2,e-Math.floor(C.maxShowPage/2));return Array.from({length:e-r},(function(e,n){return r+n}))})),k=c((function(){var e=$.current,r=Math.min(A()-1,e+Math.floor(C.maxShowPage/2));return Array.from({length:r-e},(function(r,n){return e+1+n}))})),M=c((function(){return Array.from({length:A()},(function(e,r){return 1+r}))})),j={"@initial":"sm","@md":"md"},O=function(e){var r;z("current",e),null===(r=C.onChange)||void 0===r||r.call(C,e)};return i(l,{get when(){return!C.hideOnSinglePage||A()>1},get children(){return i(o,{spacing:"$1",get children(){return[i(l,{get when(){return 1!==$.current},get children(){return[i(a,{size:j,get colorScheme(){return C.colorScheme},onClick:function(){O(1)},px:"$3",children:"1"}),i(h,{size:j,get icon(){return i(f,{})},"aria-label":"Previous",get colorScheme(){return C.colorScheme},onClick:function(){O($.current-1)},w:"2rem !important"})]}}),i(g,{get each(){return P()},children:function(e){return i(a,{size:j,get colorScheme(){return C.colorScheme},onClick:function(){O(e)},px:e>10?"$2_5":"$3",children:e})}}),i(d,{size:j,variant:"unstyled",get defaultValue(){return $.current},onChange:function(e){O(+e)},get children(){return[i(m,{as:a,size:j,width:"auto",px:"$1",variant:"solid",get colorScheme(){return C.colorScheme},get children(){return[i(s,{get px(){return $.current>10?"$1_5":"$2"},get children(){return $.current}}),i(b,{})]}}),i(S,{minW:"80px",get children(){return i(y,{get children(){return i(g,{get each(){return M()},children:function(e){return i(p,{value:e,get children(){return i(v,{px:"$2",children:e})}})}})}})}})]}}),i(g,{get each(){return k()},children:function(e){return i(a,{size:j,get colorScheme(){return C.colorScheme},onClick:function(){O(e)},px:e>10?"$2_5":"$3",children:e})}}),i(l,{get when(){return $.current!==A()},get children(){return[i(h,{size:j,get icon(){return i(x,{})},"aria-label":"Next",get colorScheme(){return C.colorScheme},onClick:function(){O($.current+1)},w:"2rem !important"}),i(a,{size:j,get colorScheme(){return C.colorScheme},onClick:function(){O(A())},get px(){return A()>10?"$2_5":"$3"},get children(){return A()}})]}})]}})}})}))}}}))}();
