import{bG as y,c as t,ai as b,I as C,r as _,q as p,aL as g,a7 as v,a6 as $,w as M,aO as S,dk as m,ay as L,S as l,aw as O,ax as f,af as G,d as W,K as x,a3 as j,cW as E,l as w,bN as K,bO as z}from"./index.99a608b2.js";import{b as A}from"./Folder.6f30f329.js";import{u as F}from"./index.b1641e2e.js";import{I as H}from"./ImageWithError.20e2dde0.js";import{O as P,g as T}from"./icon.2962d191.js";import{u as q,I as B,a as I}from"./helper.03bd6c32.js";import{G as N}from"./GridItem.735f03e3.js";import"./Layout.169ccb32.js";import"./useTitle.115bc98f.js";import"./FolderTree.a22f4726.js";import"./index.566448af.js";import"./video_box.973a61f7.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.e05649d9.js";import"./LinkWithBase.2c5fa6f7.js";import"./index.b26ac8a3.js";import"./index.33b509af.js";const U=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==P.IMAGE)return null;const{setPathAs:o}=F(),u=t(C,{get color(){return b()},boxSize:"$12",get as(){return T(e.obj)}}),[d,i]=_(!1),r=p(()=>g()&&(d()||e.obj.selected)),{show:a}=A({id:1}),{rawLink:k}=v(),{isMouseSupported:s}=I(),h=q();return t(G.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t($,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{M(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(B,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(H,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(O,{size:"lg"})},fallbackErr:u,get src(){return k(e.obj)},loading:"lazy",get cursor(){return!s()&&(!g()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!g()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},ce=e=>{const c=W(),o=p(()=>t(E,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(x,{get each(){return j.objs.filter(r=>r.is_dir)},children:(r,a)=>t(N,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:d,captureContentMenu:i}=I();return d(),t($,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(K,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(z,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(x,{get each(){return j.objs},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{ce as default};
