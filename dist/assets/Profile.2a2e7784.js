import{d as D,aW as p,b9 as i,r as m,c as e,cX as B,a6 as W,bN as y,G as o,ba as v,n as c,S as u,e as ee,au as n,cY as b,j as re,at as g,aI as $,cZ as te,c_ as ne,c$ as se,d0 as ae,as as h,b5 as E,d1 as M,by as C,bl as I,D as P,F as R,aN as U,aa as ie,K as N,aF as oe,cd as ce,bE as ue}from"./index.99a608b2.js";import{g as le}from"./useTitle.115bc98f.js";import{L as de}from"./LinkWithBase.2c5fa6f7.js";import{s as A,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";import{P as pe}from"./PublicKeys.0bd85b4a.js";const me=r=>{const w=D(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(B,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(W,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(y,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const S=await d();v(S,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},we=r=>e(ce,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),ve=()=>{const r=D();le("manage.sidemenu.profile");const{searchParams:w,to:l}=ee(),[d,k]=m(n().username),[a,S]=m(""),[F,H]=m(""),j=$("sso_compatibility_mode"),[T,G]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[J,K]=p(()=>i.get("/authn/getcredentials")),[,O]=p(()=>i.get("/authn/webauthn_begin_registration")),[X,q]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),_=async t=>{if(a()&&a()!==F()){c.warning(r("users.confirm_password_not_same"));return}const s=await G(t);v(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},x=w.sso_id;x&&(b({...n(),sso_id:x}),_(!0));function L(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),_(!0))}window.addEventListener("message",L),re(()=>{window.removeEventListener("message",L)});const[V,Y]=m([]),Z=async()=>{const t=await K();ue(t,Y)};return A()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Z(),e(W,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(te,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(ne,{mr:"$2_5"}),e(se,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ae,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(E,{get children(){return r("global.have_account")}}),e(E,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(y,{get children(){return r("users.update_profile")}}),e(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(C,{get children(){return[e(I,{for:"username",get children(){return r("users.change_username")}}),e(P,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(C,{get children(){return[e(I,{for:"password",get children(){return r("users.change_password")}}),e(P,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{S(t.currentTarget.value)}}),e(R,{get children(){return r("users.change_password-tips")}})]}}),e(C,{get children(){return[e(I,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(P,{id:"confirm-password",type:"password",placeholder:"********",get value(){return F()},onInput:t=>{H(t.currentTarget.value)}}),e(R,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return T()},onClick:[_,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return U(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(y,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(j){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return T()},onClick:()=>{b({...n(),sso_id:""}),_(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return U(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(y,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(ie,{get loading(){return J()},get children(){return e(N,{get each(){return V()},children:t=>e(me,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return X()},onClick:async()=>{if(!A()){c.error(r("users.webauthn_not_supported"));return}const t=await O();v(t,async s=>{const z=ge(s.options),Q=s.session;try{const f=await he(z);v(await q(Q,f),()=>{c.success(r("users.add_webauthn_success"))})}catch(f){f instanceof Error&&c.error(f.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(pe,{isMine:!0,get userId(){return n().id}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(N,{each:oe,children:(t,s)=>e(we,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{ve as default};
