System.register(["./index-legacy.1405f988.js","./ImageWithError-legacy.6f3f295c.js","./icon-legacy.f93349d4.js","./index-legacy.5a975947.js","./Layout-legacy.5002e876.js","./index-legacy.5eea1392.js","./FolderTree-legacy.cb167e6c.js","./index-legacy.8a81e799.js","./index-legacy.551d3b73.js"],(function(e){"use strict";var n,t,r,a,c,i,o,u,f,l;return{setters:[function(e){n=e.a,t=e.b,r=e.a2,a=e.o,c=e.e,i=e.h,o=e.$,u=e.a3},function(e){f=e.I},function(e){l=e.O},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(),d=t().replace,g=r.objs.filter((function(e){return e.type===l.IMAGE}));0===g.length&&(g=[r.obj]);var s=function(e){var n=g.findIndex((function(e){return e.name===r.obj.name}));"ArrowLeft"===e.key&&n>0?d(g[n-1].name):"ArrowRight"===e.key&&n<g.length-1&&d(g[n+1].name)};return a((function(){window.addEventListener("keydown",s)})),c((function(){window.removeEventListener("keydown",s)})),i(f,{maxH:"75vh",rounded:"$lg",get src(){return r.raw_url},get fallback(){return i(o,{})},get fallbackErr(){return i(u,{get msg(){return e("home.preview.failed_load_img")}})}})}))}}}));
