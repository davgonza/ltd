import{_ as x,K as P,M as y,f as b,r as m,b as R,j as n,c as j,w as G,e as T,a as w,s as $,u as I}from"./index-B4U8ry9K.js";import{k as M,I as h}from"./IconifyIcon-BSNYg932.js";import{T as S,d as L}from"./TextField-BsHFXIJV.js";const N=["className","component","disableGutters","fixed","maxWidth","classes"],_=P(),D=y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,s)=>{const{ownerState:e}=i;return[s.root,s[`maxWidth${b(String(e.maxWidth))}`],e.fixed&&s.fixed,e.disableGutters&&s.disableGutters]}}),U=i=>G({props:i,name:"MuiContainer",defaultTheme:_}),V=(i,s)=>{const e=a=>w(s,a),{classes:r,fixed:d,disableGutters:c,maxWidth:t}=i,o={root:["root",t&&`maxWidth${b(String(t))}`,d&&"fixed",c&&"disableGutters"]};return T(o,e,r)};function z(i={}){const{createStyledComponent:s=D,useThemeProps:e=U,componentName:r="MuiContainer"}=i,d=s(({theme:t,ownerState:o})=>x({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:o})=>o.fixed&&Object.keys(t.breakpoints.values).reduce((a,l)=>{const p=l,u=t.breakpoints.values[p];return u!==0&&(a[t.breakpoints.up(p)]={maxWidth:`${u}${t.breakpoints.unit}`}),a},{}),({theme:t,ownerState:o})=>x({},o.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[t.breakpoints.up(o.maxWidth)]:{maxWidth:`${t.breakpoints.values[o.maxWidth]}${t.breakpoints.unit}`}}));return m.forwardRef(function(o,a){const l=e(o),{className:p,component:u="div",disableGutters:g=!1,fixed:C=!1,maxWidth:W="lg"}=l,k=R(l,N),f=x({},l,{component:u,disableGutters:g,fixed:C,maxWidth:W}),v=V(f,r);return n.jsx(d,x({as:u,ownerState:f,className:j(v.root,p),ref:a},k))})}const B=z({createStyledComponent:$("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,s)=>{const{ownerState:e}=i;return[s.root,s[`maxWidth${b(String(e.maxWidth))}`],e.fixed&&s.fixed,e.disableGutters&&s.disableGutters]}}),useThemeProps:i=>I({props:i,name:"MuiContainer"})}),K=m.forwardRef((i,s)=>{const[e,r]=m.useState(!1),d=c=>{c.preventDefault(),r(!e)};return n.jsx(S,{type:e?"text":"password",InputProps:{endAdornment:n.jsx(L,{position:"end",children:n.jsx(M,{onClick:d,children:e?n.jsx(h,{icon:"material-symbols-light:visibility-outline-rounded"}):n.jsx(h,{icon:"material-symbols-light:visibility-off-outline-rounded"})})})},ref:s,...i})});export{B as C,K as P};