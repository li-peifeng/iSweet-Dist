import{bN as $,E as p,h as t,an as d,aM as k,aa as C,a8 as x,t as y,dC as i,aD as I,S as l,aR as _,aB as M,aC as m,ak as S,a as v,k as W,H as h,a3 as b,dc as E,l as f,bW as L,bX as G}from"./index.6d8741bd.js";import{b as O}from"./style.9524b28e.js";import{I as P}from"./ImageWithError.a3dc01ca.js";import{O as z,g as F}from"./icon.93193a12.js";import{I as H,u as j}from"./helper.5070de3f.js";import{G as K}from"./GridItem.47000dad.js";import"./index.8b35b7f6.js";import"./Layout.ce667f45.js";import"./index.4d76afbf.js";import"./FolderTree.bc6c685d.js";import"./index.4dfd22bb.js";import"./index.64e600db.js";import"./index.2aeb46ee.js";const A=e=>{const{isHide:s}=$();if(s(e.obj)||e.obj.type!==z.IMAGE)return null;const{setPathAs:o}=p(),g=t(k,{get color(){return d()},boxSize:"$12",get as(){return F(e.obj)}}),{show:c}=O({id:1}),{rawLink:u}=C(),{openWithDoubleClick:n,toggleWithClick:a,restoreSelectionCache:w}=j();return t(S.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(x,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${d()}`}},get cursor(){return n()||a()?"default":"pointer"},onMouseEnter:()=>{o(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{y(()=>{i(e.index,!0,!0)}),c(r,{props:e.obj})},get children(){return t(I,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return _()},get children(){return t(H,{pos:"absolute",left:"$1",top:"$1","on:mousedown":r=>{r.stopPropagation()},"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(P,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(M,{size:"lg"})},fallbackErr:g,get src(){return u(e.obj)},loading:"lazy","on:dblclick":()=>{!n()||(m.emit("gallery",e.obj.name),i(e.index,!0,!0))},"on:click":r=>{if(!n()&&!(r.ctrlKey||r.metaKey||r.shiftKey)&&!!w()){if(a())return i(e.index,!e.obj.selected);m.emit("gallery",e.obj.name)}}})]}})}})}})},ee=e=>{const s=v(),o=W(()=>t(E,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(h,{get each(){return b.objs.filter(n=>n.is_dir)},children:(n,a)=>t(K,{obj:n,get index(){return a()}})})}})),{isMouseSupported:g,registerSelectContainer:c,captureContentMenu:u}=j();return c(),t(x,{"oncapture:contextmenu":u,class:"viselect-container",spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return f.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(L,{m:"$2",get children(){return s("home.no_images")}})},get children(){return t(G,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(h,{get each(){return b.objs},children:(n,a)=>t(A,{obj:n,get index(){return a()}})})}})}}),t(l,{get when(){return f.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{ee as default};
