import{b as v,b1 as c,bi as u,a as w,m as i,h as t,S as x,a8 as S,bV as g,az as C,aT as I,a7 as T,am as _,I as $,C as k,ae as D,ay as d,n as F,bj as L,b4 as M,dd as R}from"./index.381e3abe.js";const z=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){F.warning(a("users.2fa_already_enabled")),n();return}const e=await p();L(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();M(e,()=>{R({...d(),otp:!0}),n()})};return t(D,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(S,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(C,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[I(()=>a("users.or_manual")),":"," ",t(T,{get color(){return _()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t($,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(k,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{z as default};
