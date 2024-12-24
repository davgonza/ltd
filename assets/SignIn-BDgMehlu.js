import{K as f,r as i,j as e,S as n,B as b,o as y,m as v}from"./index-BD5zr3JG.js";import{L as w}from"./LogoHeader-ChOq2T1c.js";import{P as C,I as u}from"./IconifyIcon-D3XK9LQn.js";import{C as P,P as S}from"./PasswordTextField-Dx5bxVfy.js";import{T as r,L as I,b as l}from"./Link-MNJKSpVK.js";import{T as k,F as E,C as W}from"./TextField-DM_UK59V.js";import{D as F,G as c}from"./Grid-DZx4AXVn.js";import"./dividerClasses-BOCPsIRN.js";const L={inputProps:{"aria-label":"Checkbox"}},H=()=>{const x=f(),[t,h]=i.useState(""),[o,p]=i.useState(""),[m,a]=i.useState(null),j=async s=>{if(s.preventDefault(),!t||!o){a("Please fill out all fields.");return}try{const{data:g,error:d}=await y.auth.signInWithPassword({email:t,password:o});if(d){a(d.message);return}x(v.root)}catch{a("An unexpected error occurred. Please try again.")}};return e.jsxs(P,{maxWidth:"sm",sx:{py:10},children:[e.jsx(w,{sx:{justifyContent:"center",mb:5,pointerEvents:"none"}}),e.jsxs(C,{sx:{p:5},children:[e.jsx(n,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",spacing:1,children:e.jsx(r,{variant:"h3",children:"Sign in"})}),m&&e.jsx(r,{variant:"body2",color:"error",sx:{mt:2},children:m}),e.jsxs(b,{component:"form",sx:{mt:3},onSubmit:j,children:[e.jsxs(n,{spacing:2,children:[e.jsx(k,{id:"email",name:"email",type:"email",placeholder:"Enter your email",autoComplete:"email",value:t,onChange:s=>h(s.target.value),fullWidth:!0,required:!0}),e.jsx(S,{id:"password",name:"password",placeholder:"Enter your password",autoComplete:"current-password",value:o,onChange:s=>p(s.target.value),fullWidth:!0,required:!0})]}),e.jsxs(n,{direction:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:"space-between",mt:1,spacing:.5,children:[e.jsx(E,{control:e.jsx(W,{...L,color:"primary"}),label:e.jsx(r,{variant:"subtitle1",children:"Remember me"})}),e.jsx(r,{variant:"subtitle2",color:"primary",children:e.jsx(I,{href:"#!",underline:"hover",children:"Forgot password?"})})]}),e.jsx(l,{type:"submit",size:"large",variant:"contained",sx:{mt:2},fullWidth:!0,children:"Sign in"}),e.jsx(F,{sx:{color:"neutral.main",my:2},children:e.jsx(r,{variant:"subtitle2",children:" or sign in with"})}),e.jsxs(c,{container:!0,spacing:2,children:[e.jsx(c,{item:!0,xs:12,sm:6,children:e.jsx(l,{variant:"outlined",size:"large",startIcon:e.jsx(u,{icon:"devicon:google"}),sx:{color:"error.main",borderColor:"error.main"},fullWidth:!0,children:e.jsx(r,{children:"Google"})})}),e.jsx(c,{item:!0,xs:12,sm:6,children:e.jsx(l,{variant:"outlined",size:"large",startIcon:e.jsx(u,{icon:"logos:facebook"}),sx:{color:"primary.light",borderColor:"primary.light"},fullWidth:!0,children:e.jsx(r,{children:"Facebook"})})})]})]})]})]})};export{H as default};
