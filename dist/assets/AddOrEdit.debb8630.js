import{a as b,b as x,ch as $,b0 as o,bf as g,h as t,a7 as C,bS as _,bF as d,bs as m,H as v,C as S,bg as h,n as k,ad as F,bT as T,aS as c,I,bE as E,T as L,b2 as H,S as M,F as D}from"./index.2cf91021.js";import{a as R}from"./FolderTree.d0c13661.js";import"./index.e19bbbf3.js";const q=e=>{const r=b();return t(d,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(m,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(T,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(I,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(E,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(L,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(d,{w:"fit-content",display:"flex",get children(){return t(H,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(M,{get when(){return e.help},get children(){return t(D,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},V=()=>{const e=b(),{params:r,back:n}=x(),{id:u}=r,[s,l]=$({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1,header:"",header_sub:!1}),[f,w]=o(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await w();h(a,l)})();const[y,p]=o(()=>g.post(`/admin/meta/${u?"update":"create"}`,s));return t(F,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(_,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(d,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(m,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(R,{id:"path",get value(){return s.path},onChange:a=>l("path",a)})]}}),t(v,{each:[{name:"password",type:"string",sub:"p_sub"},{name:"write",type:"bool",sub:"w_sub"},{name:"hide",type:"text",sub:"h_sub",help:!0},{name:"header",type:"text",sub:"header_sub",help:!0},{name:"readme",type:"text",sub:"r_sub",help:!0}],children:a=>t(q,{get name(){return a.name},get type(){return a.type},get value(){return s[a.name]},onChange:i=>l(a.name,i),get sub(){return s[a.sub]},onSub:i=>l(a.sub,i),get help(){return a.help}})}),t(S,{get loading(){return y()},onClick:async()=>{const a=await p();h(a,()=>{k.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{V as default};
