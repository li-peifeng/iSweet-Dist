import{d9 as O,dz as F,m as P,G as N,e as S,k as A,h as E,bK as X,S as T,dn as j,da as W,dA as k,aQ as H,j as Y,q as I,i as U,dy as Z,du as tt,aE as D,t as et}from"./index-96d74d5f.js";var $=(t=>(t.menu="solid-contextmenu",t.submenu="solid-contextmenu solid-contextmenu__submenu",t.submenuArrow="solid-contextmenu__submenu-arrow",t.submenuOpen="solid-contextmenu__submenu--is-open",t.separator="solid-contextmenu__separator",t.item="solid-contextmenu__item",t.itemDisabled="solid-contextmenu__item--disabled",t.itemContent="solid-contextmenu__item__content",t.theme="solid-contextmenu__theme--",t.animationWillEnter="solid-contextmenu__will-enter--",t.animationWillLeave="solid-contextmenu__will-leave--",t))($||{});function K(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}const nt=t=>{let e,i=!0;const[o,c]=P(),[y,g]=P(),x=Y(()=>t.children),m=t.name||"s";t=N({name:m,enterActiveClass:m+"-enter-active",enterClass:m+"-enter",enterToClass:m+"-enter-to",exitActiveClass:m+"-exit-active",exitClass:m+"-exit",exitToClass:m+"-exit-to"},t);const{onBeforeEnter:C,onEnter:a,onAfterEnter:u,onBeforeExit:f,onExit:w,onAfterExit:r}=t;function b(n,s){if(!i||t.appear){let l=function(v){n&&(!v||v.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...d),n.classList.remove(...h),et(()=>{o()!==n&&c(n),y()===n&&g(void 0)}),u&&u(n),t.mode==="inout"&&p(n,s))};const _=t.enterClass.split(" "),d=t.enterActiveClass.split(" "),h=t.enterToClass.split(" ");C&&C(n),n.classList.add(..._),n.classList.add(...d),K(()=>{n.classList.remove(..._),n.classList.add(...h),a&&a(n,()=>l()),(!a||a.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))})}s&&!t.mode?g(n):c(n)}function p(n,s){const l=t.exitClass.split(" "),_=t.exitActiveClass.split(" "),d=t.exitToClass.split(" ");if(!s.parentNode)return h();f&&f(s),s.classList.add(...l),s.classList.add(..._),K(()=>{s.classList.remove(...l),s.classList.add(...d)}),w&&w(s,()=>h()),(!w||w.length<2)&&(s.addEventListener("transitionend",h),s.addEventListener("animationend",h));function h(v){(!v||v.target===s)&&(s.removeEventListener("transitionend",h),s.removeEventListener("animationend",h),s.classList.remove(..._),s.classList.remove(...d),o()===s&&c(void 0),r&&r(s),t.mode==="outin"&&b(n,s))}}return I(n=>{for(e=x();typeof e=="function";)e=e();return U(()=>(e&&e!==n&&(t.mode!=="outin"?b(e,n):i&&c(e)),n&&n!==e&&t.mode!=="inout"&&p(e,n),i=!1,e))}),[o,y]};function it(t){return{all:t=t||new Map,on:function(e,i){var o=t.get(e);o?o.push(i):t.set(e,[i])},off:function(e,i){var o=t.get(e);o&&(i?o.splice(o.indexOf(i)>>>0,1):t.set(e,[]))},emit:function(e,i){var o=t.get(e);o&&o.slice().map(function(c){c(i)}),(o=t.get("*"))&&o.slice().map(function(c){c(e,i)})}}}const L=it(),J=Z(),Q=()=>tt(J);function V(t){var e,i,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(i=V(t[e]))&&(o&&(o+=" "),o+=i);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function R(){for(var t,e,i=0,o="";i<arguments.length;)(t=arguments[i++])&&(e=V(t))&&(o&&(o+=" "),o+=e);return o}const ot=D("<div></div>"),M=(t,e,i)=>t+e<=i?t:t<e?i-e:t-e,st=(t,e)=>{const i={width:window.innerWidth,height:window.innerHeight};return{x:M(t.x,e.width,i.width),y:M(t.y,e.height,i.height)}},ht=t=>{const[e,i]=F(t,["id","theme","animation","onShown","onHidden"]),[o,c]=P(!1),[y,g]=P({x:0,y:0});let x;const[m,C]=P();L.on("show",r=>{r.id===e.id&&(r.event.preventDefault(),C(r.props),c(!0),g(r.position??st({x:r.event.clientX,y:r.event.clientY},{width:x.offsetWidth,height:x.offsetHeight})))});const a=()=>{L.emit("hide",e.id),c(!1)},u=N({shown:o,animation:"scale",hide:a,props:m},e);L.on("hideAll",()=>{a()}),S(()=>{L.off("show"),L.off("hideAll")});const f=A(()=>{let r="";return e.animation&&(r=`solid-contextmenu-${e.animation}`),console.log(r),r}),w=A(()=>({enterActiveClass:f()+"-enter-active",exitActiveClass:f()+"-exit-active"}));return E(J.Provider,{value:u,get children(){return E(X,{get children(){return E(nt,N(w,{get children(){return E(T,{get when(){return o()},get children(){const r=ot.cloneNode(!0),b=x;return typeof b=="function"?b(r):x=r,rt(r,()=>a()),j(r,i,!1,!1),W(p=>{const n=R($.menu,i.class,{[`${$.theme}${e.theme}`]:e.theme}),s=y().x+"px",l=y().y+"px";return n!==p._v$&&k(r,p._v$=n),s!==p._v$2&&r.style.setProperty("left",p._v$2=s),l!==p._v$3&&r.style.setProperty("top",p._v$3=l),p},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}}))}})}})};function rt(t,e){const i=o=>{var c;return!t.contains(o.target)&&((c=e())==null?void 0:c())};document.body.addEventListener("click",i),S(()=>document.body.removeEventListener("click",i))}function dt(t){return typeof t=="function"}function q(t,e){return dt(t)?t(e):t}const at=D("<div><div></div></div>"),ut=t=>{const[e,i]=F(t,["hidden","disabled","onClick","data","children"]),o=N({hidden:!1,disabled:!1},e),{props:c,hide:y}=Q(),g=A(()=>({props:c(),data:t.data})),x=A(()=>q(o.disabled,g())),m=A(()=>q(o.hidden,g())),C=a=>{var u;x()||((u=t.onClick)==null||u.call(t,{event:a,...g()}),y())};return E(T,{get when(){return!m()},get children(){const a=at.cloneNode(!0),u=a.firstChild;return a.$$click=C,j(a,i,!1,!0),H(u,()=>e.children),W(f=>{const w=R($.item,{[$.itemDisabled]:x()}),r=$.itemContent;return w!==f._v$&&k(a,f._v$=w),r!==f._v$2&&k(u,f._v$2=r),f},{_v$:void 0,_v$2:void 0}),a}})};O(["click"]);const lt=D("<div></div>"),ct=D("<div><div><span></span></div></div>"),mt=t=>{const[e,i]=F(t,["arrow","children","disabled","hidden","label","class"]),o=N({arrow:"▶️",disabled:!1,hidden:!1},e),{props:c,id:y}=Q(),g=A(()=>({props:c()})),x=A(()=>q(o.disabled,g())),m=A(()=>q(o.hidden,g()));let C,a;const[u,f]=P({x:0,y:0}),w=()=>{const n=C.getBoundingClientRect(),s=a.getBoundingClientRect(),l={width:window.innerWidth,height:window.innerHeight};let _=n.right;_+s.width>l.width&&(n.left-s.width>0?_=n.left-s.width:_=l.width-s.width);let d=n.top;d+s.height>l.height&&(n.bottom-s.height>0?d=n.bottom-s.height:d=l.height-s.height),f({x:_,y:d}),console.log(u())},[r,b]=P(!1),p=()=>{b(!0),w()};return L.on("hide",n=>{n===y&&b(!1)}),S(()=>{L.off("hide")}),E(T,{get when(){return!m()},get children(){const n=ct.cloneNode(!0),s=n.firstChild,l=s.firstChild;n.$$click=()=>r()?b(!1):p(),n.addEventListener("mouseleave",()=>b(!1)),n.addEventListener("mouseenter",()=>p()),j(n,i,!1,!0);const _=C;return typeof _=="function"?_(s):C=s,H(s,()=>o.label,l),H(l,()=>o.arrow),H(n,E(T,{get when(){return r()},get children(){const d=lt.cloneNode(!0),h=a;return typeof h=="function"?h(d):a=d,H(d,()=>o.children),W(v=>{const B=$.submenu,z=u().x+"px",G=u().y+"px";return B!==v._v$&&k(d,v._v$=B),z!==v._v$2&&d.style.setProperty("left",v._v$2=z),G!==v._v$3&&d.style.setProperty("top",v._v$3=G),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),d}}),null),W(d=>{const h=R($.item,e.class,{[$.itemDisabled]:x()}),v=$.itemContent,B=$.submenuArrow;return h!==d._v$4&&k(n,d._v$4=h),v!==d._v$5&&k(s,d._v$5=v),B!==d._v$6&&k(l,d._v$6=B),d},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n}})};O(["click"]);const ft=t=>({show:(e,i)=>{L.emit("show",{id:(i==null?void 0:i.id)||(t==null?void 0:t.id),props:(i==null?void 0:i.props)||(t==null?void 0:t.props),event:e,position:i==null?void 0:i.position})},hideAll:()=>{L.emit("hideAll")}});export{mt as C,ft as b,ht as w,ut as x};
