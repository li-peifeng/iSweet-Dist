System.register(["./index-legacy.15998fc8.js","./ImageWithError-legacy.1c181ea4.js","./icon-legacy.762cd830.js","./index-legacy.24989484.js","./Layout-legacy.abca5bc1.js","./index-legacy.7f882f83.js","./FolderTree-legacy.81b952ee.js","./index-legacy.8f3f1416.js","./index-legacy.01aa0754.js"],(function(e){"use strict";var n,t,r,a,c,i,o,u,f,l;return{setters:[function(e){n=e.a,t=e.b,r=e.a3,a=e.o,c=e.e,i=e.h,o=e.a0,u=e.a4},function(e){f=e.I},function(e){l=e.O},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(),g=t().replace,d=r.objs.filter((function(e){return e.type===l.IMAGE}));0===d.length&&(d=[r.obj]);var s=function(e){var n=d.findIndex((function(e){return e.name===r.obj.name}));"ArrowLeft"===e.key&&n>0?g(d[n-1].name):"ArrowRight"===e.key&&n<d.length-1&&g(d[n+1].name)};return a((function(){window.addEventListener("keydown",s)})),c((function(){window.removeEventListener("keydown",s)})),i(f,{maxH:"75vh",rounded:"$lg",get src(){return r.raw_url},get fallback(){return i(o,{})},get fallbackErr(){return i(u,{get msg(){return e("home.preview.failed_load_img")}})}})}))}}}));
