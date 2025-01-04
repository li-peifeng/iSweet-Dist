import{a as f,b as _,cg as k,b0 as p,bh as d,h as e,a8 as v,bM as F,S as h,ay as c,bH as i,bu as l,I as m,bN as S,H as L,aL as M,C as q,bi as g,n as D,az as P,cX as T,b2 as b,af as U}from"./index-c275bac5.js";import{a as E}from"./FolderTree-65c0a64e.js";import{P as H}from"./PublicKeys-0e2a55c8.js";import"./index-8060b047.js";const z=r=>{const u=f();return e(i,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return u(`users.permissions.${r.name}`)}}),e(b,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},O=()=>{const r=f(),{params:u,back:w}=_(),{id:t}=u,[n,a]=k({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,sso_id:""}),[$,y]=p(()=>d.get(`/admin/user/get?id=${t}`));t&&(async()=>{const s=await y();g(s,a)})();const[x,I]=p(()=>d.post(`/admin/user/${t?"update":"create"}`,n));return e(U,{get loading(){return $()},get children(){return e(v,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(F,{get children(){return r(`global.${t?"edit":"add"}`)}}),e(h,{get when(){return!c.is_guest(n)},get children(){return[e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(m,{id:"username",get value(){return n.username},onInput:s=>a("username",s.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(m,{id:"password",type:"password",placeholder:"********",get value(){return n.password},onInput:s=>a("password",s.currentTarget.value)})]}})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(E,{id:"base_path",get value(){return n.base_path},onChange:s=>a("base_path",s),onlyFolder:!0})]}}),e(i,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(L,{each:M,children:(s,o)=>e(z,{name:s,get can(){return c.can(n,o())},onChange:C=>{C?a("permission",n.permission|=1<<o()):a("permission",n.permission&=~(1<<o()))}})})}})]}}),e(h,{get when(){return t&&!c.is_guest(n)},get children(){return e(H,{isMine:!1,get userId(){return parseInt(t)}})}}),e(q,{get loading(){return x()},onClick:async()=>{const s=await I();g(s,async()=>{D.success(r("global.save_success")),n.username===P().username&&g(await d.get("/me"),T),w()})},get children(){return r(`global.${t?"save":"add"}`)}}),e(i,{w:"fit-content",display:"flex",get children(){return e(b,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:s=>a("disabled",s.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return n.disabled},get children(){return r("users.disabled")}})}})]}})}})};export{O as default};
