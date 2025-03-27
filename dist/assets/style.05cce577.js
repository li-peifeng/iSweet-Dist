import{cS as V,cT as D,m as P,G as N,e as F,k as E,h as A,bK as U,S,cU as j,cV as T,cW as k,aQ as H,j as X,q as Y,i as I,bS as Z,bO as tt,aE as q,t as et}from"./index.bacd141b.js";var b=(t=>(t.menu="solid-contextmenu",t.submenu="solid-contextmenu solid-contextmenu__submenu",t.submenuArrow="solid-contextmenu__submenu-arrow",t.submenuOpen="solid-contextmenu__submenu--is-open",t.separator="solid-contextmenu__separator",t.item="solid-contextmenu__item",t.itemDisabled="solid-contextmenu__item--disabled",t.itemContent="solid-contextmenu__item__content",t.theme="solid-contextmenu__theme--",t.animationWillEnter="solid-contextmenu__will-enter--",t.animationWillLeave="solid-contextmenu__will-leave--",t))(b||{});function K(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}const nt=t=>{let e,i=!0;const[o,c]=P(),[y,x]=P(),w=X(()=>t.children),m=t.name||"s";t=N({name:m,enterActiveClass:m+"-enter-active",enterClass:m+"-enter",enterToClass:m+"-enter-to",exitActiveClass:m+"-exit-active",exitClass:m+"-exit",exitToClass:m+"-exit-to"},t);const{onBeforeEnter:C,onEnter:d,onAfterEnter:u,onBeforeExit:f,onExit:$,onAfterExit:r}=t;function p(n,s){if(!i||t.appear){let l=function(v){n&&(!v||v.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...a),n.classList.remove(...h),et(()=>{o()!==n&&c(n),y()===n&&x(void 0)}),u&&u(n),t.mode==="inout"&&_(n,s))};const g=t.enterClass.split(" "),a=t.enterActiveClass.split(" "),h=t.enterToClass.split(" ");C&&C(n),n.classList.add(...g),n.classList.add(...a),K(()=>{n.classList.remove(...g),n.classList.add(...h),d&&d(n,()=>l()),(!d||d.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))})}s&&!t.mode?x(n):c(n)}function _(n,s){const l=t.exitClass.split(" "),g=t.exitActiveClass.split(" "),a=t.exitToClass.split(" ");if(!s.parentNode)return h();f&&f(s),s.classList.add(...l),s.classList.add(...g),K(()=>{s.classList.remove(...l),s.classList.add(...a)}),$&&$(s,()=>h()),(!$||$.length<2)&&(s.addEventListener("transitionend",h),s.addEventListener("animationend",h));function h(v){(!v||v.target===s)&&(s.removeEventListener("transitionend",h),s.removeEventListener("animationend",h),s.classList.remove(...g),s.classList.remove(...a),o()===s&&c(void 0),r&&r(s),t.mode==="outin"&&p(n,s))}}return Y(n=>{for(e=w();typeof e=="function";)e=e();return I(()=>(e&&e!==n&&(t.mode!=="outin"?p(e,n):i&&c(e)),n&&n!==e&&t.mode!=="inout"&&_(e,n),i=!1,e))}),[o,y]};function it(t){return{all:t=t||new Map,on:function(e,i){var o=t.get(e);o?o.push(i):t.set(e,[i])},off:function(e,i){var o=t.get(e);o&&(i?o.splice(o.indexOf(i)>>>0,1):t.set(e,[]))},emit:function(e,i){var o=t.get(e);o&&o.slice().map(function(c){c(i)}),(o=t.get("*"))&&o.slice().map(function(c){c(e,i)})}}}const L=it(),z=Z(),J=()=>tt(z);function Q(t){var e,i,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(i=Q(t[e]))&&(o&&(o+=" "),o+=i);else for(e in t)t[e]&&(o&&(o+=" "),o+=e);return o}function O(){for(var t,e,i=0,o="";i<arguments.length;)(t=arguments[i++])&&(e=Q(t))&&(o&&(o+=" "),o+=e);return o}const ot=q("<div></div>"),M=(t,e,i)=>t+e<=i?t:t<e?i-e:t-e,st=(t,e)=>{const i={width:window.innerWidth,height:window.innerHeight};return{x:M(t.x,e.width,i.width),y:M(t.y,e.height,i.height)}},ht=t=>{const[e,i]=D(t,["id","theme","animation","onShown","onHidden"]),[o,c]=P(!1),[y,x]=P({x:0,y:0});let w;const[m,C]=P();L.on("show",r=>{var p;r.id===e.id&&(r.event.preventDefault(),C(r.props),c(!0),x((p=r.position)!=null?p:st({x:r.event.clientX,y:r.event.clientY},{width:w.offsetWidth,height:w.offsetHeight})))});const d=()=>{L.emit("hide",e.id),c(!1)},u=N({shown:o,animation:"scale",hide:d,props:m},e);L.on("hideAll",()=>{d()}),F(()=>{L.off("show"),L.off("hideAll")});const f=E(()=>{let r="";return e.animation&&(r=`solid-contextmenu-${e.animation}`),console.log(r),r}),$=E(()=>({enterActiveClass:f()+"-enter-active",exitActiveClass:f()+"-exit-active"}));return A(z.Provider,{value:u,get children(){return A(U,{get children(){return A(nt,N($,{get children(){return A(S,{get when(){return o()},get children(){const r=ot.cloneNode(!0),p=w;return typeof p=="function"?p(r):w=r,rt(r,()=>d()),j(r,i,!1,!1),T(_=>{const n=O(b.menu,i.class,{[`${b.theme}${e.theme}`]:e.theme}),s=y().x+"px",l=y().y+"px";return n!==_._v$&&k(r,_._v$=n),s!==_._v$2&&r.style.setProperty("left",_._v$2=s),l!==_._v$3&&r.style.setProperty("top",_._v$3=l),_},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}}))}})}})};function rt(t,e){const i=o=>{var c;return!t.contains(o.target)&&((c=e())==null?void 0:c())};document.body.addEventListener("click",i),F(()=>document.body.removeEventListener("click",i))}function at(t){return typeof t=="function"}function W(t,e){return at(t)?t(e):t}const dt=q("<div><div></div></div>"),ut=t=>{const[e,i]=D(t,["hidden","disabled","onClick","data","children"]),o=N({hidden:!1,disabled:!1},e),{props:c,hide:y}=J(),x=E(()=>({props:c(),data:t.data})),w=E(()=>W(o.disabled,x())),m=E(()=>W(o.hidden,x())),C=d=>{var u;w()||((u=t.onClick)==null||u.call(t,{event:d,...x()}),y())};return A(S,{get when(){return!m()},get children(){const d=dt.cloneNode(!0),u=d.firstChild;return d.$$click=C,j(d,i,!1,!0),H(u,()=>e.children),T(f=>{const $=O(b.item,{[b.itemDisabled]:w()}),r=b.itemContent;return $!==f._v$&&k(d,f._v$=$),r!==f._v$2&&k(u,f._v$2=r),f},{_v$:void 0,_v$2:void 0}),d}})};V(["click"]);const lt=q("<div></div>"),ct=q("<div><div><span></span></div></div>"),mt=t=>{const[e,i]=D(t,["arrow","children","disabled","hidden","label","class"]),o=N({arrow:"\u25B6\uFE0F",disabled:!1,hidden:!1},e),{props:c,id:y}=J(),x=E(()=>({props:c()})),w=E(()=>W(o.disabled,x())),m=E(()=>W(o.hidden,x()));let C,d;const[u,f]=P({x:0,y:0}),$=()=>{const n=C.getBoundingClientRect(),s=d.getBoundingClientRect(),l={width:window.innerWidth,height:window.innerHeight};let g=n.right;g+s.width>l.width&&(n.left-s.width>0?g=n.left-s.width:g=l.width-s.width);let a=n.top;a+s.height>l.height&&(n.bottom-s.height>0?a=n.bottom-s.height:a=l.height-s.height),f({x:g,y:a}),console.log(u())},[r,p]=P(!1),_=()=>{p(!0),$()};return L.on("hide",n=>{n===y&&p(!1)}),F(()=>{L.off("hide")}),A(S,{get when(){return!m()},get children(){const n=ct.cloneNode(!0),s=n.firstChild,l=s.firstChild;n.$$click=()=>r()?p(!1):_(),n.addEventListener("mouseleave",()=>p(!1)),n.addEventListener("mouseenter",()=>_()),j(n,i,!1,!0);const g=C;return typeof g=="function"?g(s):C=s,H(s,()=>o.label,l),H(l,()=>o.arrow),H(n,A(S,{get when(){return r()},get children(){const a=lt.cloneNode(!0),h=d;return typeof h=="function"?h(a):d=a,H(a,()=>o.children),T(v=>{const B=b.submenu,R=u().x+"px",G=u().y+"px";return B!==v._v$&&k(a,v._v$=B),R!==v._v$2&&a.style.setProperty("left",v._v$2=R),G!==v._v$3&&a.style.setProperty("top",v._v$3=G),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),a}}),null),T(a=>{const h=O(b.item,e.class,{[b.itemDisabled]:w()}),v=b.itemContent,B=b.submenuArrow;return h!==a._v$4&&k(n,a._v$4=h),v!==a._v$5&&k(s,a._v$5=v),B!==a._v$6&&k(l,a._v$6=B),a},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n}})};V(["click"]);const ft=t=>({show:(e,i)=>{L.emit("show",{id:(i==null?void 0:i.id)||(t==null?void 0:t.id),props:(i==null?void 0:i.props)||(t==null?void 0:t.props),event:e,position:i==null?void 0:i.position})},hideAll:()=>{L.emit("hideAll")}});export{mt as C,ft as b,ht as w,ut as x};
