import{a as $,b as k,b0 as C,bh as d,m as M,de as y,h as e,ax as l,C as i,ae as S,df as v,dg as x,dh as o,H as g,di as h,dj as F,dk as n,bi as u,n as H,a8 as B}from"./index-c275bac5.js";import{e as D}from"./index-b2248fd1.js";import{D as L}from"./DeletePopover-9152f7d6.js";import{W as R}from"./Wether-ccd95bab.js";const P=()=>{const r=$();D("manage.sidemenu.metas");const{to:c}=k(),[m,p]=C(()=>d.get("/admin/meta/list")),[f,b]=M([]),a=async()=>{const t=await p();u(t,s=>b(s.content))};a();const[w,T]=y(t=>d.post(`/admin/meta/delete?id=${t}`));return e(B,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(l,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return m()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{c("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(o,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(h,{get children(){return r(`metas.${t}`)}})}),e(h,{get children(){return r("global.operations")}})]}})}}),e(F,{get children(){return e(g,{get each(){return f()},children:t=>e(o,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(R,{get yes(){return t.write}})}}),e(n,{get children(){return e(l,{spacing:"$2",get children(){return[e(i,{onClick:()=>{c(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(L,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);u(s,()=>{H.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{P as default};
