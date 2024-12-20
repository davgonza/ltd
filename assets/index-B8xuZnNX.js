import{g as Q,a as q,s as B,_ as a,r as p,u as X,d as Yt,b as D,j as r,c as M,e as Z,f as _,h as jt,i as _t,k as Y,l as wt,m as Rt,p as yt,n as mt,o as Et,B as at,S as st}from"./index-B4U8ry9K.js";import{T as Pt,u as xt,g as pt,r as Qt,m as qt,a as Xt,P as ht,c as Zt,b as Jt,d as Kt,o as St,e as te,M as ee,L as et,i as oe,f as Ct,S as ne,h as $t,I as ot,j as re,k as ft}from"./IconifyIcon-BSNYg932.js";import{L as se,a as ae}from"./LogoHeader-C45Ik1al.js";import{u as ie,a as it,B as Dt,L as ut,T as rt,b as le}from"./Link-C29-BqaT.js";import{L as Bt,a as Lt,T as vt,M as ce}from"./Toolbar-COv8hkor.js";function de(t){return q("MuiCollapse",t)}Q("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const pe=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ue=t=>{const{orientation:e,classes:o}=t,n={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return Z(n,de,o)},fe=B("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(({theme:t,ownerState:e})=>a({height:0,overflow:"hidden",transition:t.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:t.transitions.create("width")},e.state==="entered"&&a({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),ge=B("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(t,e)=>e.wrapper})(({ownerState:t})=>a({display:"flex",width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),me=B("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(t,e)=>e.wrapperInner})(({ownerState:t})=>a({width:"100%"},t.orientation==="horizontal"&&{width:"auto",height:"100%"})),Mt=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiCollapse"}),{addEndListener:s,children:l,className:c,collapsedSize:i="0px",component:d,easing:f,in:u,onEnter:k,onEntered:x,onEntering:y,onExit:C,onExited:j,onExiting:h,orientation:w="vertical",style:P,timeout:v=Yt.standard,TransitionComponent:A=Pt}=n,L=D(n,pe),R=a({},n,{orientation:w,collapsedSize:i}),b=ue(R),W=xt(),F=ie(),E=p.useRef(null),S=p.useRef(),T=typeof i=="number"?`${i}px`:i,$=w==="horizontal",G=$?"width":"height",U=p.useRef(null),J=it(o,U),N=m=>O=>{if(m){const H=U.current;O===void 0?m(H):m(H,O)}},g=()=>E.current?E.current[$?"clientWidth":"clientHeight"]:0,I=N((m,O)=>{E.current&&$&&(E.current.style.position="absolute"),m.style[G]=T,k&&k(m,O)}),z=N((m,O)=>{const H=g();E.current&&$&&(E.current.style.position="");const{duration:nt,easing:lt}=pt({style:P,timeout:v,easing:f},{mode:"enter"});if(v==="auto"){const bt=W.transitions.getAutoHeightDuration(H);m.style.transitionDuration=`${bt}ms`,S.current=bt}else m.style.transitionDuration=typeof nt=="string"?nt:`${nt}ms`;m.style[G]=`${H}px`,m.style.transitionTimingFunction=lt,y&&y(m,O)}),V=N((m,O)=>{m.style[G]="auto",x&&x(m,O)}),Gt=N(m=>{m.style[G]=`${g()}px`,C&&C(m)}),Vt=N(j),Ht=N(m=>{const O=g(),{duration:H,easing:nt}=pt({style:P,timeout:v,easing:f},{mode:"exit"});if(v==="auto"){const lt=W.transitions.getAutoHeightDuration(O);m.style.transitionDuration=`${lt}ms`,S.current=lt}else m.style.transitionDuration=typeof H=="string"?H:`${H}ms`;m.style[G]=T,m.style.transitionTimingFunction=nt,h&&h(m)}),Wt=m=>{v==="auto"&&F.start(S.current||0,m),s&&s(U.current,m)};return r.jsx(A,a({in:u,onEnter:I,onEntered:V,onEntering:z,onExit:Gt,onExited:Vt,onExiting:Ht,addEndListener:Wt,nodeRef:U,timeout:v==="auto"?null:v},L,{children:(m,O)=>r.jsx(fe,a({as:d,className:M(b.root,c,{entered:b.entered,exited:!u&&T==="0px"&&b.hidden}[m]),style:a({[$?"minWidth":"minHeight"]:T},P),ref:J},O,{ownerState:a({},R,{state:m}),children:r.jsx(ge,{ownerState:a({},R,{state:m}),className:b.wrapper,ref:E,children:r.jsx(me,{ownerState:a({},R,{state:m}),className:b.wrapperInner,children:l})})}))}))});Mt.muiSupportAuto=!0;const xe=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],he=["component","slots","slotProps"],ve=["component"];function be(t,e){const{className:o,elementType:n,ownerState:s,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:i}=e,d=D(e,xe),{component:f,slots:u={[t]:void 0},slotProps:k={[t]:void 0}}=l;D(l,he);const x=u[t]||n,y=Qt(k[t],s),C=qt(a({className:o},d,{externalForwardedProps:void 0,externalSlotProps:y})),{props:{component:j},internalRef:h}=C,w=D(C.props,ve),P=it(h,y==null?void 0:y.ref,e.ref),v=c?c(w):{},A=a({},s,v),L=j,R=Xt(x,a({},t==="root",!u[t]&&i,w,L&&{as:L},{ref:P}),A);return Object.keys(v).forEach(b=>{delete R[b]}),[x,R]}function ye(t){return q("MuiAppBar",t)}Q("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Ce=["className","color","enableColorOnDark","position"],ke=t=>{const{color:e,position:o,classes:n}=t,s={root:["root",`color${_(e)}`,`position${_(o)}`]};return Z(s,ye,n)},ct=(t,e)=>t?`${t==null?void 0:t.replace(")","")}, ${e})`:e,Ae=B(ht,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[`position${_(o.position)}`],e[`color${_(o.color)}`]]}})(({theme:t,ownerState:e})=>{const o=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return a({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!t.vars&&a({},e.color==="default"&&{backgroundColor:o,color:t.palette.getContrastText(o)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&a({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&a({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette.AppBar.defaultBg:ct(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?t.vars.palette.text.primary:ct(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?t.vars.palette[e.color].main:ct(t.vars.palette.AppBar.darkBg,t.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?t.vars.palette[e.color].contrastText:ct(t.vars.palette.AppBar.darkColor,t.vars.palette[e.color].contrastText)},!["inherit","transparent"].includes(e.color)&&{backgroundColor:"var(--AppBar-background)"},{color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Ie=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiAppBar"}),{className:s,color:l="primary",enableColorOnDark:c=!1,position:i="fixed"}=n,d=D(n,Ce),f=a({},n,{color:l,position:i,enableColorOnDark:c}),u=ke(f);return r.jsx(Ae,a({square:!0,component:"header",ownerState:f,elevation:4,className:M(u.root,s,i==="fixed"&&"mui-fixed"),ref:o},d))}),je=Zt(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function we(t){return q("MuiAvatar",t)}Q("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Re=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Ee=t=>{const{classes:e,variant:o,colorDefault:n}=t;return Z({root:["root",o,n&&"colorDefault"],img:["img"],fallback:["fallback"]},we,e)},Pe=B("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[o.variant],o.colorDefault&&e.colorDefault]}})(({theme:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:a({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:a({backgroundColor:t.palette.grey[400]},t.applyStyles("dark",{backgroundColor:t.palette.grey[600]})))}]})),Se=B("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),$e=B(je,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,e)=>e.fallback})({width:"75%",height:"75%"});function De({crossOrigin:t,referrerPolicy:e,src:o,srcSet:n}){const[s,l]=p.useState(!1);return p.useEffect(()=>{if(!o&&!n)return;l(!1);let c=!0;const i=new Image;return i.onload=()=>{c&&l("loaded")},i.onerror=()=>{c&&l("error")},i.crossOrigin=t,i.referrerPolicy=e,i.src=o,n&&(i.srcset=n),()=>{c=!1}},[t,e,o,n]),s}const Be=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:c,component:i="div",slots:d={},slotProps:f={},imgProps:u,sizes:k,src:x,srcSet:y,variant:C="circular"}=n,j=D(n,Re);let h=null;const w=De(a({},u,{src:x,srcSet:y})),P=x||y,v=P&&w!=="error",A=a({},n,{colorDefault:!v,component:i,variant:C}),L=Ee(A),[R,b]=be("img",{className:L.img,elementType:Se,externalForwardedProps:{slots:d,slotProps:{img:a({},u,f.img)}},additionalProps:{alt:s,src:x,srcSet:y,sizes:k},ownerState:A});return v?h=r.jsx(R,a({},b)):l||l===0?h=l:P&&s?h=s[0]:h=r.jsx($e,{ownerState:A,className:L.fallback}),r.jsx(Pe,a({as:i,ownerState:A,className:M(L.root,c),ref:o},j,{children:h}))});function Le(t){return q("MuiCard",t)}Q("MuiCard",["root"]);const Me=["className","raised"],Te=t=>{const{classes:e}=t;return Z({root:["root"]},Le,e)},Ne=B(ht,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})(()=>({overflow:"hidden"})),ze=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiCard"}),{className:s,raised:l=!1}=n,c=D(n,Me),i=a({},n,{raised:l}),d=Te(i);return r.jsx(Ne,a({className:M(d.root,s),elevation:l?8:void 0,ref:o,ownerState:i},c))}),Oe=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Fe(t,e,o){const n=e.getBoundingClientRect(),s=o&&o.getBoundingClientRect(),l=St(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const f=l.getComputedStyle(e);c=f.getPropertyValue("-webkit-transform")||f.getPropertyValue("transform")}let i=0,d=0;if(c&&c!=="none"&&typeof c=="string"){const f=c.split("(")[1].split(")")[0].split(",");i=parseInt(f[4],10),d=parseInt(f[5],10)}return t==="left"?s?`translateX(${s.right+i-n.left}px)`:`translateX(${l.innerWidth+i-n.left}px)`:t==="right"?s?`translateX(-${n.right-s.left-i}px)`:`translateX(-${n.left+n.width-i}px)`:t==="up"?s?`translateY(${s.bottom+d-n.top}px)`:`translateY(${l.innerHeight+d-n.top}px)`:s?`translateY(-${n.top-s.top+n.height-d}px)`:`translateY(-${n.top+n.height-d}px)`}function Ue(t){return typeof t=="function"?t():t}function dt(t,e,o){const n=Ue(o),s=Fe(t,e,n);s&&(e.style.webkitTransform=s,e.style.transform=s)}const Ge=p.forwardRef(function(e,o){const n=xt(),s={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},l={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:i=!0,children:d,container:f,direction:u="down",easing:k=s,in:x,onEnter:y,onEntered:C,onEntering:j,onExit:h,onExited:w,onExiting:P,style:v,timeout:A=l,TransitionComponent:L=Pt}=e,R=D(e,Oe),b=p.useRef(null),W=it(Jt(d),b,o),F=g=>I=>{g&&(I===void 0?g(b.current):g(b.current,I))},E=F((g,I)=>{dt(u,g,f),te(g),y&&y(g,I)}),S=F((g,I)=>{const z=pt({timeout:A,style:v,easing:k},{mode:"enter"});g.style.webkitTransition=n.transitions.create("-webkit-transform",a({},z)),g.style.transition=n.transitions.create("transform",a({},z)),g.style.webkitTransform="none",g.style.transform="none",j&&j(g,I)}),T=F(C),$=F(P),G=F(g=>{const I=pt({timeout:A,style:v,easing:k},{mode:"exit"});g.style.webkitTransition=n.transitions.create("-webkit-transform",I),g.style.transition=n.transitions.create("transform",I),dt(u,g,f),h&&h(g)}),U=F(g=>{g.style.webkitTransition="",g.style.transition="",w&&w(g)}),J=g=>{c&&c(b.current,g)},N=p.useCallback(()=>{b.current&&dt(u,b.current,f)},[u,f]);return p.useEffect(()=>{if(x||u==="down"||u==="right")return;const g=Kt(()=>{b.current&&dt(u,b.current,f)}),I=St(b.current);return I.addEventListener("resize",g),()=>{g.clear(),I.removeEventListener("resize",g)}},[u,x,f]),p.useEffect(()=>{x||N()},[x,N]),r.jsx(L,a({nodeRef:b,onEnter:E,onEntered:T,onEntering:S,onExit:G,onExited:U,onExiting:$,addEndListener:J,appear:i,in:x,timeout:A},R,{children:(g,I)=>p.cloneElement(d,a({ref:W,style:a({visibility:g==="exited"&&!x?"hidden":void 0},v,d.props.style)},I))}))});function Ve(t){return q("MuiDrawer",t)}Q("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const He=["BackdropProps"],We=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Tt=(t,e)=>{const{ownerState:o}=t;return[e.root,(o.variant==="permanent"||o.variant==="persistent")&&e.docked,e.modal]},Ye=t=>{const{classes:e,anchor:o,variant:n}=t,s={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${_(o)}`,n!=="temporary"&&`paperAnchorDocked${_(o)}`]};return Z(s,Ve,e)},_e=B(ee,{name:"MuiDrawer",slot:"Root",overridesResolver:Tt})(({theme:t})=>({zIndex:(t.vars||t).zIndex.drawer})),kt=B("div",{shouldForwardProp:jt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Tt})({flex:"0 0 auto"}),Qe=B(ht,{name:"MuiDrawer",slot:"Paper",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.paper,e[`paperAnchor${_(o.anchor)}`],o.variant!=="temporary"&&e[`paperAnchorDocked${_(o.anchor)}`]]}})(({theme:t,ownerState:e})=>a({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(t.vars||t).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(t.vars||t).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(t.vars||t).palette.divider}`})),Nt={left:"right",right:"left",top:"down",bottom:"up"};function qe(t){return["left","right"].indexOf(t)!==-1}function Xe({direction:t},e){return t==="rtl"&&qe(e)?Nt[e]:e}const At=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiDrawer"}),s=xt(),l=_t(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:i="left",BackdropProps:d,children:f,className:u,elevation:k=16,hideBackdrop:x=!1,ModalProps:{BackdropProps:y}={},onClose:C,open:j=!1,PaperProps:h={},SlideProps:w,TransitionComponent:P=Ge,transitionDuration:v=c,variant:A="temporary"}=n,L=D(n.ModalProps,He),R=D(n,We),b=p.useRef(!1);p.useEffect(()=>{b.current=!0},[]);const W=Xe({direction:l?"rtl":"ltr"},i),E=a({},n,{anchor:i,elevation:k,open:j,variant:A},R),S=Ye(E),T=r.jsx(Qe,a({elevation:A==="temporary"?k:0,square:!0},h,{className:M(S.paper,h.className),ownerState:E,children:f}));if(A==="permanent")return r.jsx(kt,a({className:M(S.root,S.docked,u),ownerState:E,ref:o},R,{children:T}));const $=r.jsx(P,a({in:j,direction:Nt[W],timeout:v,appear:b.current},w,{children:T}));return A==="persistent"?r.jsx(kt,a({className:M(S.root,S.docked,u),ownerState:E,ref:o},R,{children:$})):r.jsx(_e,a({BackdropProps:a({},d,y,{transitionDuration:v}),className:M(S.root,S.modal,u),open:j,ownerState:E,onClose:C,hideBackdrop:x,ref:o},R,L,{children:$}))});function Ze(t){return q("MuiListItem",t)}const K=Q("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function Je(t){return q("MuiListItemButton",t)}const tt=Q("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),Ke=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],to=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters]},eo=t=>{const{alignItems:e,classes:o,dense:n,disabled:s,disableGutters:l,divider:c,selected:i}=t,f=Z({root:["root",n&&"dense",!l&&"gutters",c&&"divider",s&&"disabled",e==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},Je,o);return a({},o,f)},oo=B(Dt,{shouldForwardProp:t=>jt(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:to})(({theme:t,ownerState:e})=>a({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${tt.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${tt.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${tt.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${tt.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${tt.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),zt=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:l=!1,component:c="div",children:i,dense:d=!1,disableGutters:f=!1,divider:u=!1,focusVisibleClassName:k,selected:x=!1,className:y}=n,C=D(n,Ke),j=p.useContext(et),h=p.useMemo(()=>({dense:d||j.dense||!1,alignItems:s,disableGutters:f}),[s,j.dense,d,f]),w=p.useRef(null);wt(()=>{l&&w.current&&w.current.focus()},[l]);const P=a({},n,{alignItems:s,dense:h.dense,disableGutters:f,divider:u,selected:x}),v=eo(P),A=it(w,o);return r.jsx(et.Provider,{value:h,children:r.jsx(oo,a({ref:A,href:C.href||C.to,component:(C.href||C.to)&&c==="div"?"button":c,focusVisibleClassName:M(v.focusVisible,k),ownerState:P,className:M(v.root,y)},C,{classes:v,children:i}))})});function no(t){return q("MuiListItemSecondaryAction",t)}Q("MuiListItemSecondaryAction",["root","disableGutters"]);const ro=["className"],so=t=>{const{disableGutters:e,classes:o}=t;return Z({root:["root",e&&"disableGutters"]},no,o)},ao=B("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,o.disableGutters&&e.disableGutters]}})(({ownerState:t})=>a({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Ot=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=n,l=D(n,ro),c=p.useContext(et),i=a({},n,{disableGutters:c.disableGutters}),d=so(i);return r.jsx(ao,a({className:M(d.root,s),ownerState:i,ref:o},l))});Ot.muiName="ListItemSecondaryAction";const io=["className"],lo=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],co=(t,e)=>{const{ownerState:o}=t;return[e.root,o.dense&&e.dense,o.alignItems==="flex-start"&&e.alignItemsFlexStart,o.divider&&e.divider,!o.disableGutters&&e.gutters,!o.disablePadding&&e.padding,o.button&&e.button,o.hasSecondaryAction&&e.secondaryAction]},po=t=>{const{alignItems:e,button:o,classes:n,dense:s,disabled:l,disableGutters:c,disablePadding:i,divider:d,hasSecondaryAction:f,selected:u}=t;return Z({root:["root",s&&"dense",!c&&"gutters",!i&&"padding",d&&"divider",l&&"disabled",o&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",u&&"selected"],container:["container"]},Ze,n)},uo=B("div",{name:"MuiListItem",slot:"Root",overridesResolver:co})(({theme:t,ownerState:e})=>a({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&a({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${tt.root}`]:{paddingRight:48}},{[`&.${K.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${K.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${K.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${K.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${K.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:Y(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:Y(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),fo=B("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ft=p.forwardRef(function(e,o){const n=X({props:e,name:"MuiListItem"}),{alignItems:s="center",autoFocus:l=!1,button:c=!1,children:i,className:d,component:f,components:u={},componentsProps:k={},ContainerComponent:x="li",ContainerProps:{className:y}={},dense:C=!1,disabled:j=!1,disableGutters:h=!1,disablePadding:w=!1,divider:P=!1,focusVisibleClassName:v,secondaryAction:A,selected:L=!1,slotProps:R={},slots:b={}}=n,W=D(n.ContainerProps,io),F=D(n,lo),E=p.useContext(et),S=p.useMemo(()=>({dense:C||E.dense||!1,alignItems:s,disableGutters:h}),[s,E.dense,C,h]),T=p.useRef(null);wt(()=>{l&&T.current&&T.current.focus()},[l]);const $=p.Children.toArray(i),G=$.length&&oe($[$.length-1],["ListItemSecondaryAction"]),U=a({},n,{alignItems:s,autoFocus:l,button:c,dense:S.dense,disabled:j,disableGutters:h,disablePadding:w,divider:P,hasSecondaryAction:G,selected:L}),J=po(U),N=it(T,o),g=b.root||u.Root||uo,I=R.root||k.root||{},z=a({className:M(J.root,I.className,d),disabled:j},F);let V=f||"li";return c&&(z.component=f||"div",z.focusVisibleClassName=M(K.focusVisible,v),V=Dt),G?(V=!z.component&&!f?"div":V,x==="li"&&(V==="li"?V="div":z.component==="li"&&(z.component="div")),r.jsx(et.Provider,{value:S,children:r.jsxs(fo,a({as:x,className:M(J.container,y),ref:N,ownerState:U},W,{children:[r.jsx(g,a({},I,!Ct(g)&&{as:V,ownerState:a({},U,I.ownerState)},z,{children:$})),$.pop()]}))})):r.jsx(et.Provider,{value:S,children:r.jsxs(g,a({},I,{as:V,ref:N},!Ct(g)&&{ownerState:a({},U,I.ownerState)},z,{children:[$,A&&r.jsx(Ot,{children:A})]}))})}),go=["getTrigger","target"];function mo(t,e){const{disableHysteresis:o=!1,threshold:n=100,target:s}=e,l=t.current;return s&&(t.current=s.pageYOffset!==void 0?s.pageYOffset:s.scrollTop),!o&&l!==void 0&&t.current<l?!1:t.current>n}const xo=typeof window<"u"?window:null;function ho(t={}){const{getTrigger:e=mo,target:o=xo}=t,n=D(t,go),s=p.useRef(),[l,c]=p.useState(()=>e(s,n));return p.useEffect(()=>{const i=()=>{c(e(s,a({target:o},n)))};return i(),o.addEventListener("scroll",i,{passive:!0}),()=>{o.removeEventListener("scroll",i,{passive:!0})}},[o,e,JSON.stringify(n)]),l}const vo=t=>r.jsxs(ne,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...t,children:[r.jsx("mask",{id:"mask0_8121_67",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:r.jsx("rect",{width:"32",height:"32",fill:"white"})}),r.jsxs("g",{mask:"url(#mask0_8121_67)",children:[r.jsx("path",{d:"M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z",fill:"currentColor"}),r.jsx("path",{opacity:"0.4",d:"M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z",fill:"currentColor"})]})]}),Ut=[{id:1,name:"Employees",path:Rt.root,pathName:"dashboard",svgIcon:vo,active:!0},{id:9,name:"Authentication",pathName:"authentication",icon:"material-symbols:security-rounded",active:!0,items:[{id:10,name:"Sign in",path:yt.signin,pathName:"sign-in",active:!0},{id:11,name:"Sign up",path:yt.signup,pathName:"sign-up",active:!0}]},{id:8,name:"Sign Out",path:"#!",pathName:"sign-out",icon:"humbleicons:logout",active:!0}],bo="data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAQAAAA7QAAAgEAQUxQSOEAAAABcBTbVuQ8CV8CUpDSDoKD4AAcEAfEQUtAwpfwJfQ87N7yR8QE4GFMXW2h0UbPEe/L1xZCtYV3pCy0tvDCxxZidXpUFnLLPZkXeofcGQvB842yUFwupoXkdBKUJZNDW2guAMJCtACNqQwoU4a4UB0zV6lz9R9cqXFli/vf/e/+d/+7/93/7n/3v/vf/e/+d/87YI0rU65G5+qfuMqRqwhjSoHMVAOEqQCg8tQAQIwlDQckliacV44qrmeGBm7K4GeWO0Blp+LppMxYwvPw46UKXg0/ZcSy4P2Y+zAeTHuKeAgAVlA4IEACAABQHwCdASruAAMBPpFGnkylo6KiInKIeLASCWlu4W8g+eI5gAoSXeHPtmzLmpmAbD62HxJFvfJW6x5ISTZTT1TZUeLzYVoiEiSoqFj6WrLl8QMgRNJJYxwzA2JZV0Iczu8KGkpWn6qggAfLanUkXeI0kc+D4CxYG7OpYFGVD5UGBXoaSl5j60hC9jXWszTEc8+xNJGPEaSMeI0kY8RlvL/rVquXc9NB4jSRjyCZ0MAYLe63etDSRjxNb0FS4OtwqOd1rE0kZAY+ZeAU3UGuP9K330knugxJPp1f+kjHibB1F4Sz42Zn+lZesgY5XCMIDg7KrN5XSRHMTnb0cbLfHhhrhoAAAP74rn9Rfar+JRycDj/k+rqish+BMGbgL/1Jkm8PRmFF6/e0U6ZoNfhFhQcxOMtleVblMH15FxF35pQuUg9Yj6elm/cffYz9Bnwr+4lHrts4I49fGniVczbSf2mk/JTXZZI3BlOuyukomrUI5XXodJK3jNGiqAkqHWrtNsG6rF7FDp6DMT/rv+vR99l/+1fRYATzlt31BxDErIg4gi500AAADqb7eg5g/+TpT7yQeJHUDpwBIqEIDGnGHQF3HPmkfNld1UkM8jyiVlzR1ByCqOjOwWBa40ryawQy136m9QMmA1E//r3Rnwc/2//csvjHjagwoSq6QxUHid7/8q/j5aY99OIDg1Bv4C6z//YlG/mcVLDeudER4TGPj/8kvvdZRwBviJiWdmz/doV/wPyb+L04FfR1t510d3Xn4AA=",yo=()=>r.jsx(ze,{sx:{background:`url(${bo}) no-repeat`,width:238}}),Co=({items:t,open:e})=>{const o=mt();return r.jsx(Mt,{in:e,timeout:"auto",unmountOnExit:!0,children:r.jsx($t,{component:"ul",children:t==null?void 0:t.map(n=>r.jsx(Ft,{sx:{py:0,pl:7,pr:0},children:r.jsx(zt,{selected:o.pathname===n.path,component:n.path?ut:"div",href:n.path,sx:{opacity:n.active?1:.5,pl:3,mt:.5},children:r.jsx(Bt,{primary:n.name})})},n.id))})})},ko=({item:t})=>{const e=mt(),[o,n]=p.useState(!1),s=()=>{n(!o)},{name:l,path:c,icon:i,svgIcon:d,active:f,items:u}=t;async function k(){console.log("clicked signout"),await Et.auth.signOut()}const x=i?r.jsx(ot,{icon:i,fontSize:32}):d?r.jsx(d,{sx:{fontSize:32}}):null;return r.jsxs(Ft,{sx:{flexDirection:"column",alignItems:"stretch",p:0,opacity:f?1:.5},onClick:y=>{y.target.textContent=="Sign Out"&&k()},children:[r.jsxs(zt,{selected:e.pathname===c,component:c?ut:"div",onClick:s,href:c,sx:[e.pathname===c&&{".MuiListItemIcon-root":{color:"common.white"}},{"&:hover .MuiListItemIcon-root":{color:"common.white"}},{pl:3,py:2}],children:[r.jsx(Lt,{sx:{mr:3,color:"primary.light",transition:"color 0.3s"},children:x}),r.jsx(Bt,{primary:l,sx:[e.pathname===c&&{fontWeight:600}]}),u&&r.jsx(ot,{icon:o?"ph:caret-up-bold":"ph:caret-down-bold"})]}),u&&r.jsx(Co,{items:u,open:o})]})},Ao=()=>r.jsx($t,{sx:{display:"inline-flex",flexDirection:"column",gap:3},children:Ut.map(t=>r.jsx(ko,{item:t},t.id))}),It=()=>r.jsxs(r.Fragment,{children:[r.jsx(vt,{disableGutters:!0,children:r.jsx(se,{})}),r.jsx(at,{sx:t=>({px:5,height:`calc(100vh - ${t.mixins.toolbar.minHeight}px)`,overflowY:"auto"}),children:r.jsxs(st,{gap:17,py:4,children:[r.jsx(Ao,{}),r.jsx(yo,{})]})})]}),Io=({drawerWidth:t,mobileOpen:e,onTransitionEnd:o,onHandleDrawerClose:n})=>r.jsxs(at,{component:"nav",sx:{width:{lg:t},flexShrink:{sm:0}},"aria-label":"drawer",children:[r.jsx(At,{variant:"temporary",open:e,onTransitionEnd:o,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",lg:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:t}},children:r.jsx(It,{})}),r.jsx(At,{variant:"permanent",sx:{display:{xs:"none",lg:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:t}},open:!0,children:r.jsx(It,{})})]}),jo=({children:t})=>{const e=ho({disableHysteresis:!0,threshold:0});return p.cloneElement(t,{elevation:e?3:0})},wo="/ltd/assets/profile-BIQfvPEa.png",Ro=[{id:0,label:"Profile",icon:"material-symbols:person"},{id:1,label:"My Account",icon:"material-symbols:account-box-sharp"},{id:2,label:"Logout",icon:"uiw:logout"}],Eo=()=>{const[t,e]=p.useState(null),o=!!t,[n,s]=p.useState(""),[l,c]=p.useState("User");p.useEffect(()=>{(async()=>{var x,y,C;const{data:k}=await Et.auth.getSession();if(k){let h=(C=(y=(x=k.session)==null?void 0:x.user)==null?void 0:y.user_metadata)==null?void 0:C.name;localStorage.getItem("signedUpName")&&(h=localStorage.getItem("signedUpName")),s(h||"Anonymous")}})()},[]);const i=u=>{e(u.currentTarget)},d=()=>{e(null)},f=Ro.map(u=>r.jsxs(ce,{onClick:d,sx:{"&:hover .account-menu-icon":{color:"common.white"}},children:[r.jsx(Lt,{children:r.jsx(ot,{icon:u.icon,sx:{color:"primary.main"},className:"account-menu-icon"})}),r.jsx(rt,{variant:"body1",children:u.label})]},u.id));return r.jsxs(r.Fragment,{children:[r.jsxs(le,{onClick:i,"aria-controls":o?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,sx:{px:{xs:1,sm:2},minWidth:"auto"},children:[r.jsx(Be,{sx:{width:{xs:48,sm:60},height:{xs:48,sm:60},borderRadius:4,mr:{xs:0,xl:2.5}},alt:"User Profile",src:wo}),r.jsxs(at,{sx:{display:{xs:"none",xl:"block"}},children:[r.jsxs(st,{direction:"row",alignItems:"center",columnGap:6,children:[r.jsx(rt,{variant:"h6",component:"p",color:"primary.darker",gutterBottom:!0,children:n}),r.jsx(ot,{icon:"ph:caret-down-bold",fontSize:16,color:"primary.darker"})]}),r.jsx(rt,{variant:"subtitle2",textAlign:"left",color:"primary.lighter",children:l})]})]}),r.jsx(re,{anchorEl:t,id:"account-menu",open:o,onClose:d,onClick:d,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:f})]})},Po=({drawerWidth:t,onHandleDrawerToggle:e})=>{const o=mt(),n=p.useMemo(()=>Ut.find(l=>o.pathname===l.path).name,[o]);return r.jsx(jo,{children:r.jsx(Ie,{position:"fixed",sx:{width:{lg:`calc(100% - ${t}px)`},ml:{sm:`${t}px`}},children:r.jsxs(vt,{sx:{justifyContent:"space-between",gap:{xs:1,sm:5}},children:[r.jsxs(st,{direction:"row",alignItems:"center",columnGap:{xs:1,sm:2},sx:{display:{lg:"none"}},children:[r.jsx(ut,{href:Rt.root,children:r.jsx(ft,{color:"inherit","aria-label":"logo",children:r.jsx(ae,{sx:{fontSize:56}})})}),r.jsx(ft,{color:"inherit","aria-label":"open drawer",onClick:e,children:r.jsx(ot,{icon:"mdi:hamburger-menu",sx:{fontSize:{xs:24,sm:32}}})}),r.jsx(ft,{"aria-label":"search-icon",sx:{display:{md:"none"}},children:r.jsx(ot,{icon:"gravity-ui:magnifier",sx:{color:"primary.main",fontSize:{xs:24,sm:32}}})})]}),r.jsx(rt,{variant:"h1",color:"primary.darker",sx:{display:{xs:"none",lg:"block"}},children:n}),r.jsx(st,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:{xs:1,sm:2,xl:5.25},width:1,children:r.jsx(Eo,{})})]})})})},So=()=>r.jsxs(rt,{variant:"h6",component:"footer",sx:{pt:3.75,textAlign:{xs:"center",md:"right"}},children:[r.jsx(at,{component:"span",sx:{color:"error.main",verticalAlign:"middle"}})," ",r.jsx(ut,{href:"https://themewagon.com/",target:"_blank",rel:"noopener","aria-label":"Explore ThemeWagon Website",sx:{color:"text.primary","&:hover":{color:"primary.main"}}})]}),gt=345,To=({children:t})=>{const[e,o]=p.useState(!1),[n,s]=p.useState(!1),l=()=>{s(!0),o(!1)},c=()=>{s(!1)},i=()=>{n||o(!e)};return r.jsxs(st,{direction:"row",children:[r.jsx(Po,{drawerWidth:gt,onHandleDrawerToggle:i}),r.jsx(Io,{drawerWidth:gt,mobileOpen:e,onTransitionEnd:c,onHandleDrawerClose:l}),r.jsxs(at,{component:"main",sx:d=>({flexGrow:1,p:{xs:d.spacing(4,2),sm:d.spacing(4,5),lg:d.spacing(4)},minHeight:"100vh",width:{xs:1,sm:`calc(100% - ${gt}px)`},bgcolor:"neutral.lighter"}),children:[r.jsx(vt,{}),t,r.jsx(So,{})]})]})};export{To as default};
