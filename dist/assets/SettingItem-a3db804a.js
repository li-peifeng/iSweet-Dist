import{a as h,h as t,S as c,bu as d,ac as i,aM as y,a1 as b,aD as m,a2 as g,I as f,bG as S,T as C,bw as T,bx as k,by as w,bz as x,bA as D,bB as O,bC as v,H as I,bD as E,bE as F,bF as $,F as o,bH as A}from"./index-c275bac5.js";import{F as u}from"./index-75c490b4.js";import{T as a}from"./item_type-32dc6fdf.js";import{m as L}from"./index-8060b047.js";const H=e=>{const l=h();return t(A,{get w(){return e.w??"100%"},display:"flex",flexDirection:"column",get children(){return[t(c,{get when(){return!e.hideLabel},get children(){return t(d,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[i(()=>l(`settings.${e.key}`)),t(c,{get when(){return e.flag===u.DEPRECATED},get children(){return t(y,{ml:"$2",as:L,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}})}}),t(b,{get fallback(){return t(m,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(f,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(S,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(C,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(T,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(k,{get children(){return[t(w,{get children(){return l("global.choose")}}),t(x,{}),t(D,{})]}}),t(O,{get children(){return t(v,{get children(){return t(I,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(E,{value:n,get children(){return[t(F,{get children(){return l(`settings.${e.key}s.${n}`)}}),t($,{})]}})})}})}})]}})}})]}}),t(o,{get children(){return i(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{H as I};
