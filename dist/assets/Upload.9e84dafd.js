import{be as W,_ as q,a2 as X,a as K,b as Y,E as Z,m as D,cj as E,h as r,S as R,au as v,C as j,H as ee,I as H,a7 as x,al as A,n as te,bR as G,ac as ae,bh as re,ak as J,b1 as V,a6 as _,ck as ne,aR as oe,cl as se,cm as le,cn as ie,d as ce}from"./index.9e1720f6.js";import{a as de,b as ue}from"./index.6866d353.js";async function*pe(a,s,c){const o=new Set;async function d(){const[m,l]=await Promise.race(o);return o.delete(m),l}for(const m of s){const l=(async()=>await c(m,s))().then(u=>[l,u]);o.add(l),o.size>=a&&(yield await d())}for(;o.size;)yield await d()}const ge={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},me=async a=>{let s=[];const c=async(o,d)=>{await new Promise((l,u)=>{const i=n=>{console.error(n),u(n)};if(o.isFile)o.file(n=>{const p=new File([n],d+n.name,{type:n.type});s.push(p),console.log(p),l({})},i);else if(o.isDirectory){const n=o.createReader(),p=()=>{n.readEntries(async g=>{for(let f=0;f<g.length;f++)await c(g[f],d+o.name+"/");l({}),g.length>0&&p()},i)};p()}})};return await c(a,""),s},fe=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),he=async(a,s,c,o=!1,d=!1)=>{let m=new Date().valueOf(),l=0;const u=new FormData;u.append("file",s);const i=await W.put("/fs/form",u,{headers:{"File-Path":encodeURIComponent(a),"As-Task":o,"Content-Type":"multipart/form-data","Last-Modified":s.lastModified,Password:q(),Overwrite:d.toString()},onUploadProgress:n=>{if(n.total){const p=n.loaded/n.total*100|0;c("progress",p);const g=new Date().valueOf(),f=(g-m)/1e3;if(f>1){const y=(n.loaded-l)/f,P=(n.total-n.loaded)/y;c("speed",y),console.log(P),m=g,l=n.loaded}p===100&&c("status","backending")}}});if(i.code!==200)return new Error(i.message)},we=async(a,s,c,o=!1,d=!1)=>{let m=new Date().valueOf(),l=0;const u=await W.put("/fs/put",s,{headers:{"File-Path":encodeURIComponent(a),"As-Task":o,"Content-Type":s.type||"application/octet-stream","Last-Modified":s.lastModified,Password:q(),Overwrite:d.toString()},onUploadProgress:i=>{if(i.total){const n=i.loaded/i.total*100|0;c("progress",n);const p=new Date().valueOf(),g=(p-m)/1e3;if(g>1){const C=(i.loaded-l)/g,$=(i.total-i.loaded)/C;c("speed",C),console.log($),m=p,l=i.loaded}n===100&&c("status","backending")}}});if(u.code!==200)return new Error(u.message)},ke=[{name:"\u6D41\u5F0F",upload:we,provider:/.*/},{name:"\u8868\u5355",upload:he,provider:/.*/}],ye=()=>ke.filter(a=>a.provider.test(X.provider)),be=a=>{const s=K();return r(x,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${A()}`}},get children(){return[r(_,{css:{wordBreak:"break-all"},get children(){return a.path}}),r(v,{spacing:"$2",get children(){return[r(ne,{get colorScheme(){return ge[a.status]},get children(){return s(`home.upload.${a.status}`)}}),r(_,{get children(){return[oe(()=>se(a.speed)),"/s"]}})]}}),r(le,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return r(ie,{get color(){return A()},rounded:"$md"})}}),r(_,{color:"$danger10",get children(){return a.msg}})]}})},Ce=()=>{const a=K(),{pathname:s}=Y(),{refresh:c}=Z(),[o,d]=D(!1),[m,l]=D(!1),[u,i]=D(!1),[n,p]=D(!1),[g,f]=E({uploads:[]}),C=()=>g.uploads.every(({status:e})=>["success","error"].includes(e));let y,$;const P=async e=>{if(e.length!==0){l(!0);for(const t of e){const k=fe(t);f("uploads",h=>[...h,k])}for await(const t of pe(3,e,Q))console.log(t);c(void 0,!0)}},w=(e,t,k)=>{f("uploads",h=>h.path===e,t,k)},T=ye(),[I,N]=D(T[0]),Q=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;w(t,"status","uploading");const k=ce(s(),t);try{const h=await I().upload(k,e,(U,S)=>{w(t,U,S)},u(),n());h?(w(t,"status","error"),w(t,"msg",h.message)):(w(t,"status","success"),w(t,"progress",100))}catch(h){console.error(h),w(t,"status","error"),w(t,"msg",h.message)}};return r(x,{w:"$full",pb:"$2",spacing:"$2",get children(){return r(R,{get when(){return!m()},get fallback(){return[r(v,{spacing:"$2",get children(){return[r(j,{colorScheme:"accent",onClick:()=>{f("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(g.uploads)},get children(){return a("home.upload.clear_done")}}),r(R,{get when(){return C()},get children(){return r(j,{onClick:()=>{l(!1)},get children(){return a("home.upload.back")}})}})]}}),r(ee,{get each(){return g.uploads},children:e=>r(be,e)})]},get children(){return[r(H,{type:"file",multiple:!0,ref(e){const t=y;typeof t=="function"?t(e):y=e},display:"none",onChange:e=>{var t;P(Array.from((t=e.target.files)!=null?t:[]))}}),r(H,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=$;typeof t=="function"?t(e):$=e},display:"none",onChange:e=>{var t;P(Array.from((t=e.target.files)!=null?t:[]))}}),r(x,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${o()?A():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),d(!0)},onDragLeave:()=>{d(!1)},onDrop:async e=>{var z,O,B,L;e.preventDefault(),e.stopPropagation(),d(!1);const t=[],k=Array.from((O=(z=e.dataTransfer)==null?void 0:z.items)!=null?O:[]),h=Array.from((L=(B=e.dataTransfer)==null?void 0:B.files)!=null?L:[]);let U=k.length;const S=[];for(let F=0;F<U;F++){const b=k[F].webkitGetAsEntry();b!=null&&b.isFile?t.push(h[F]):b!=null&&b.isDirectory&&S.push(b)}for(const F of S){const M=await me(F);t.push(...M)}t.length===0&&te.warning(a("home.upload.no_files_drag")),P(t)},spacing:"$4",h:"$56",get children(){return r(R,{get when(){return!o()},get fallback(){return r(G,{get children(){return a("home.upload.release")}})},get children(){return[r(G,{get children(){return a("home.upload.upload-tips")}}),r(ae,{w:"30%",get children(){return r(re,{get value(){return I().name},onChange:e=>{N(T.find(t=>t.name===e))},get options(){return T.map(e=>({label:e.name,value:e.name}))}})}}),r(v,{spacing:"$4",get children(){return[r(J,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return r(de,{})},onClick:()=>{$.click()}}),r(J,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return r(ue,{})},onClick:()=>{y.click()}})]}}),r(v,{spacing:"$4",get children(){return[r(V,{get checked(){return u()},onChange:()=>{i(!u())},get children(){return a("home.upload.add_as_task")}}),r(V,{get checked(){return n()},onChange:()=>{p(!n())},get children(){return a("home.overwrite_existing")}})]}})]}})}})]}})}})};export{Ce as default};
