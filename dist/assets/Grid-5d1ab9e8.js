import{h as t,l as m,H as p,a3 as n,d6 as a}from"./index-96d74d5f.js";import{G as s}from"./GridItem-cf79ca5c.js";import"./Folder-660df475.js";import{u}from"./helper-6076ad27.js";import"./style-bafd9b2a.js";import"./index-92d8e3a2.js";import"./ImageWithError-23e53f96.js";import"./icon-a43561a6.js";import"./index-587a0f2e.js";import"./Layout-cf34720a.js";import"./FolderTree-a744a514.js";import"./index-22cda0b9.js";import"./index-a32ea226.js";import"./index-c7a4b11a.js";import"./video_box-c7458686.js";import"./Paginator-18552d22.js";const w=()=>{const{isMouseSupported:l,registerSelectContainer:r,captureContentMenu:e}=u();return r(),t(a,{"oncapture:contextmenu":e,class:"viselect-container",w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(m.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return n.objs},children:(o,i)=>t(s,{obj:o,get index(){return i()}})})}})};export{w as default};
