!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,c,i=[],o=!0,u=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(a){u=!0,c=a}finally{try{o||null==e.return||e.return()}finally{if(u)throw c}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.5dfccf8c.js","./File-legacy.3114cc5e.js","./icon-legacy.c8b02fcf.js","./index-legacy.79c09c14.js","./Layout-legacy.631a8ab3.js","./index-legacy.5bccf7d5.js","./FolderTree-legacy.62a21688.js","./index-legacy.2758fc93.js","./index-legacy.1a951d23.js"],(function(t){"use strict";var e,r,c,i,o,u,a,l;return{setters:[function(n){e=n.dG,r=n.x,c=n.a,i=n.h,o=n.C,u=n.ad,a=n.dH},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(e(),1)[0];function f(){var n,e=null===(n=t())||void 0===n?void 0:n.content,r=a(e).text;e&&window.open(r(),"_blank")}r((function(){f()}));var d=c();return i(u,{get loading(){return t.loading},get children(){return i(l,{get children(){return i(o,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
