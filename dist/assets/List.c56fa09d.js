import{bM as O,E as P,b as _,h as t,au as b,N as w,aR as k,dB as h,t as y,S as C,aP as S,aJ as I,ak as z,az as v,a7 as d,ck as D,cZ as L,ah as T,l as E,a as K,m as j,x as B,dC as W,dD as H,aT as G,G as f,dE as R,H as p,a3 as F,a8 as J}from"./index.d28dde6d.js";import{b as N}from"./style.028930a7.js";import{o as U}from"./index.dc6033fa.js";import{g as V,O as x}from"./icon.9d4157ed.js";import{I as $,u as A}from"./helper.819641ac.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"75%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"25%","@md":"18%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"32%"}}],Z=e=>{const{isHide:c}=O();if(c(e.obj))return null;const{setPathAs:s}=P(),{show:g}=N({id:1}),{pushHref:a,to:o}=_(),{openWithDoubleClick:l,toggleWithClick:i,restoreSelectionCache:u}=A(),m=()=>E.list_item_filename_overflow;return t(T.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(b,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:U,get href(){return e.obj.name},get cursor(){return l()||i()?"default":"pointer"},get bgColor(){return k(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":()=>{!l()||(h(e.index,!0,!0),o(a(e.obj.name)))},"on:click":n=>{if(n.preventDefault(),!l()&&!(n.ctrlKey||n.metaKey||n.shiftKey)&&!!u()){if(i())return h(e.index,!e.obj.selected);o(a(e.obj.name))}},onMouseEnter:()=>{s(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{y(()=>{h(e.index,!0,!0)}),g(n,{props:e.obj})},get children(){return[t(b,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(C,{get when(){return S()},get children(){return t($,{"on:mousedown":n=>{n.stopPropagation()},"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{h(e.index,n.target.checked)}})}}),t(I,{class:"icon",boxSize:"$6",get color(){return z()},get as(){return V(e.obj)},mr:"$1",get cursor(){return e.obj.type!==x.IMAGE?"inherit":"pointer"},"on:click":n=>{e.obj.type===x.IMAGE&&(n.ctrlKey||n.metaKey||n.shiftKey||!u()||(v.emit("gallery",e.obj.name),n.preventDefault(),n.stopPropagation()))}}),t(d,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:m()==="multi_line"?"unset":"nowrap","overflow-x":m()==="scrollable"?"auto":"hidden",textOverflow:m()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(d,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return D(e.obj.size)}}),t(d,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},M=e=>{const c=K(),[s,g]=j(),[a,o]=j(!1);B(()=>{s()&&e.sortCallback(s(),a())});const l=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===s()?o(!a()):y(()=>{g(i.name),o(!1)})}});return t(b,{class:"title",w:"$full",p:"$2",get children(){return[t(b,{get w(){return r[0].w},spacing:"$1",get children(){return[t(C,{get when(){return k(()=>!e.disableCheckbox,!0)()&&S()},get children(){return t($,{get checked(){return W()},get indeterminate(){return H()},onChange:i=>{G(i.target.checked)}})}}),t(d,f(()=>l(r[0]),{get children(){return c(`home.obj.${r[0].name}`)}}))]}}),t(d,f({get w(){return r[1].w}},()=>l(r[1]),{get children(){return c(`home.obj.${r[1].name}`)}})),t(d,f({get w(){return r[2].w}},()=>l(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return c(`home.obj.${r[2].name}`)}}))]}})},q=()=>{const e=a=>{var l,i;const o=Array.from((i=(l=a.dataTransfer)==null?void 0:l.items)!=null?i:[]);for(let u=0;u<o.length;u++)if(o[u].kind==="file"){v.emit("tool","upload"),a.preventDefault();break}},{isMouseSupported:c,registerSelectContainer:s,captureContentMenu:g}=A();return s(),t(J,{onDragOver:e,"oncapture:contextmenu":g,class:"list viselect-container",w:"$full",spacing:"$1",get children(){return[t(M,{sortCallback:R}),t(p,{get each(){return F.objs},children:(a,o)=>t(Z,{obj:a,get index(){return o()}})})]}})},ne=Object.freeze(Object.defineProperty({__proto__:null,ListTitle:M,default:q},Symbol.toStringTag,{value:"Module"}));export{M as L,ne as a,r as c};
