import{a as T,b as k,a$ as C,be as d,m as M,dm as y,h as e,av as l,C as i,ac as v,dn as S,dp as F,dq as o,H as g,dr as u,ds as H,dt as n,bf as h,n as x,a7 as B}from"./index.534eb759.js";import{e as D}from"./index.c989b9e4.js";import{D as L}from"./DeletePopover.8414b11e.js";import{W as R}from"./Wether.67e464e5.js";const P=()=>{const r=T();D("manage.sidemenu.metas");const{to:c}=k(),[m,p]=C(()=>d.get("/admin/meta/list")),[f,b]=M([]),a=async()=>{const t=await p();h(t,s=>b(s.content))};a();const[w,$]=y(t=>d.post(`/admin/meta/delete?id=${t}`));return e(B,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return m()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{c("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(v,{w:"$full",overflowX:"auto",get children(){return e(S,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(o,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(H,{get children(){return e(g,{get each(){return f()},children:t=>e(o,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(R,{get yes(){return t.write}})}}),e(n,{get children(){return e(l,{spacing:"$2",get children(){return[e(i,{onClick:()=>{c(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(L,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await $(t.id);h(s,()=>{x.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{P as default};
