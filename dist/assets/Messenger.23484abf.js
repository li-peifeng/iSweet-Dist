import{h as e,bV as i,az as w,a as y,n as b,m as k,b1 as r,bi as c,cl as C,e as R,a8 as o,H as x,at as H,G as T,I as z,aw as B,C as g,ck as F,b4 as L,dB as N}from"./index.381e3abe.js";const V=t=>e(i,{get children(){return t.content}}),W=t=>e(w,{get src(){return t.content}}),D={string:V,image:W},M=()=>{const t=y();b.info(t("manage.messenger-tips"));const[a,l]=k(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=C([]),s=async()=>{const n=await u();F(n,f=>{S(N($=>$.push(f)))})},v=async()=>{const n=await m();L(n)},I=setInterval(s,1e3);return R(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.received_msgs")}}),e(x,{each:h,children:n=>e(H,T({get component(){return D[n.type]}},n))})]}}),e(z,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return t("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return t("manage.send")}})]}})]}})};export{M as Messenger,D as Shower,M as default};
