!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.d32a2611.js","./index-legacy.f7cbed04.js","./item_type-legacy.4bd28ded.js","./index-legacy.4dbc738a.js"],(function(r){"use strict";var n,t,u,l,i,a,c,o,g,d,f,h,b,v,y,s,p,w,O,m,k,C,x,j,D,A,E,S;return{setters:[function(e){n=e.a,t=e.h,u=e.S,l=e.bt,i=e.aR,a=e.aJ,c=e.a1,o=e.aA,g=e.a2,d=e.I,f=e.bF,h=e.T,b=e.bv,v=e.bw,y=e.bx,s=e.by,p=e.bz,w=e.bA,O=e.bB,m=e.H,k=e.bC,C=e.bD,x=e.bE,j=e.F,D=e.bG},function(e){A=e.F},function(e){E=e.T},function(e){S=e.n}],execute:function(){r("I",(function(r){var T=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,c;return t(l,(n={},"for",(c={}).for=c.for||{},c.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",c.children=c.children||{},c.children.get=function(){return[i((function(){return T("settings.".concat(r.key))})),t(u,{get when(){return r.flag===A.DEPRECATED},get children(){return t(a,{ml:"$2",as:S,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,c),n))}}),t(c,{get fallback(){return t(o,{get children(){return T("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[E.String,E.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===E.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===A.READONLY}})}}),t(g,{get when(){return r.type===E.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===A.READONLY}})}}),t(g,{get when(){return r.type===E.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===A.READONLY}})}}),t(g,{get when(){return r.type===E.Select},get children(){return t(b,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===A.READONLY},get children(){return[t(v,{get children(){return[t(y,{get children(){return T("global.choose")}}),t(s,{}),t(p,{})]}}),t(w,{get children(){return t(O,{get children(){return t(m,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(k,{value:e,get children(){return[t(C,{get children(){return T("settings.".concat(r.key,"s.").concat(e))}}),t(x,{})]}})}})}})}})]}})}})]}}),t(j,{get children(){return i((function(){return!!r.help}),!0)()?T("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();
