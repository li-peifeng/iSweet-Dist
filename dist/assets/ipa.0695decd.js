import{a as u,m as a,aa as p,aL as g,h as e,au as d,C as r,dN as h,dO as f,a2 as n,dM as k}from"./index.9e1720f6.js";import{F as C}from"./File.e1b9a706.js";import"./icon.faf3cea3.js";import"./index.48102ec1.js";import"./Layout.c9e32e83.js";import"./SwitchColorMode.054f5229.js";import"./FolderTree.4a7f7c76.js";import"./index.6866d353.js";import"./index.64de6cba.js";const j=()=>{const t=u(),[o,i]=a(!1),[s,l]=a(!1),{currentObjLink:c}=p(),{copyCurrentRawLink:m}=g();return e(C,{get children(){return e(d,{spacing:"$2",get children(){return[e(r,{as:"a",colorScheme:"warning",get href(){return`itms-services://?action=download-manifest&url=${h}/i/${f(encodeURIComponent(n.raw_url)+"/"+k(encodeURIComponent(n.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"danger",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}}),e(r,{colorScheme:"success",onClick:()=>m(!0),get children(){return t("home.toolbar.copy_link")}}),e(r,{as:"a",colorScheme:"accent",get href(){return n.raw_url},target:"_blank",get children(){return t("home.preview.download")}})]}})}})};export{j as default};
