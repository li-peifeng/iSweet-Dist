import{h as t,l as m,H as p,a3 as n,db as a}from"./index.7a8254e9.js";import{G as s}from"./GridItem.712e0e14.js";import"./Folder.b8e48847.js";import{u}from"./helper.f4f539c1.js";import"./style.8f926162.js";import"./index.5aafb0b5.js";import"./ImageWithError.97e1c8c6.js";import"./icon.74c9ece1.js";import"./index.9b55b173.js";import"./Layout.2c2ec1bb.js";import"./FolderTree.af50f0b3.js";import"./index.ded2d2eb.js";import"./index.5ded0d4c.js";import"./index.b3a11c36.js";import"./video_box.7b91bc03.js";import"./Paginator.6fc8e7b8.js";const w=()=>{const{isMouseSupported:l,registerSelectContainer:r,captureContentMenu:e}=u();return r(),t(a,{"oncapture:contextmenu":e,class:"viselect-container",w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(m.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return n.objs},children:(o,i)=>t(s,{obj:o,get index(){return i()}})})}})};export{w as default};
