import{h as e,bS as i,ay as $,a as w,n as b,m as C,b0 as r,bf as c,ch as R,e as k,a7 as o,H as x,as as H,G as T,I as F,av as L,C as g,cg as N,b3 as W,dy as z}from"./index.2cf91021.js";const B=n=>e(i,{get children(){return n.content}}),D=n=>e($,{get src(){return n.content}}),G={string:B,image:D},P=()=>{const n=w();b.info(n("manage.messenger-tips"));const[s,l]=C(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,h]=r(()=>c.post("/admin/message/send",{message:s()})),[m,S]=R([]),a=async()=>{const t=await u();N(t,I=>{S(z(y=>y.push(I)))})},v=async()=>{const t=await h();W(t)},f=setInterval(a,1e3);return k(()=>clearInterval(f)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:m,children:t=>e(H,T({get component(){return G[t.type]}},t))})]}}),e(F,{w:"$full",get value(){return s()},onInput:t=>l(t.currentTarget.value)}),e(L,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:a,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{P as Messenger,G as Shower,P as default};
