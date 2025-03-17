import{a as W,b0 as p,bh as i,m,h as e,dd as B,a8 as D,bW as y,C as o,bi as v,n as c,S as u,b as ee,az as n,de as b,e as re,ay as g,ad as $,df as te,dg as ne,dh as se,di as ae,ax as h,a7 as M,dj as R,bH as S,bu as I,I as P,F as U,ac as E,af as ie,H,aL as oe,aT as ce,cl as ue}from"./index.6d8741bd.js";import{e as le}from"./index.8b35b7f6.js";import{L as de}from"./index.4d76afbf.js";import{s as A,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";import{P as pe}from"./PublicKeys.d82ee4c5.js";const me=r=>{const w=W(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(B,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(D,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(y,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const C=await d();v(C,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},we=r=>e(ce,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),ve=()=>{const r=W();le("manage.sidemenu.profile");const{searchParams:w,to:l}=ee(),[d,k]=m(n().username),[a,C]=m(""),[T,N]=m(""),j=$("sso_compatibility_mode"),[x,J]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[O,q]=p(()=>i.get("/authn/getcredentials")),[,z]=p(()=>i.get("/authn/webauthn_begin_registration")),[G,K]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),f=async t=>{if(a()&&a()!==T()){c.warning(r("users.confirm_password_not_same"));return}const s=await J(t);v(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},F=w.sso_id;F&&(b({...n(),sso_id:F}),f(!0));function L(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),f(!0))}window.addEventListener("message",L),re(()=>{window.removeEventListener("message",L)});const[V,X]=m([]),Q=async()=>{const t=await q();ue(t,X)};return A()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Q(),e(D,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(te,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(ne,{mr:"$2_5"}),e(se,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ae,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(M,{get children(){return r("global.have_account")}}),e(M,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(y,{get children(){return r("users.update_profile")}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(I,{for:"username",get children(){return r("users.change_username")}}),e(P,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(I,{for:"password",get children(){return r("users.change_password")}}),e(P,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{C(t.currentTarget.value)}}),e(U,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(I,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(P,{id:"confirm-password",type:"password",placeholder:"********",get value(){return T()},onInput:t=>{N(t.currentTarget.value)}}),e(U,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return x()},onClick:[f,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return E(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(y,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(j){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return x()},onClick:()=>{b({...n(),sso_id:""}),f(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return E(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(y,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(ie,{get loading(){return O()},get children(){return e(H,{get each(){return V()},children:t=>e(me,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return G()},onClick:async()=>{if(!A()){c.error(r("users.webauthn_not_supported"));return}const t=await z();v(t,async s=>{const Y=ge(s.options),Z=s.session;try{const _=await he(Y);v(await K(Z,_),()=>{c.success(r("users.add_webauthn_success"))})}catch(_){_ instanceof Error&&c.error(_.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(pe,{isMine:!0,get userId(){return n().id}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(H,{each:oe,children:(t,s)=>e(we,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{ve as default};
