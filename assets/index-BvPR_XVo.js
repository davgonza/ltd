import{g as K,a as ee,s as M,_ as i,r as f,u as Q,d as Fe,b as S,j as r,c as z,e as q,f as F,h as ke,i as He,k as ne,l as Ge,m as Ae,p as W,n as fe,o as we,B as te,S as J}from"./index-BffvnMS3.js";import{T as je,u as ge,g as ie,r as Ve,m as We,a as Ye,P as me,c as Qe,b as qe,d as Xe,o as Ee,e as _e,M as Ze,L as ve,S as Je,f as Ie,I as Y,h as Ke,i as de}from"./IconifyIcon-ChPDkeFH.js";import{L as et,a as tt}from"./LogoHeader-DwJd6eUm.js";import{u as ot,a as le,B as rt,L as ce,T as Z,b as nt}from"./Link-BoEG2NUU.js";import{l as _,g as st,L as Re,a as De,b as Be,T as xe,M as at}from"./Toolbar-qpUJEl-R.js";import"./dividerClasses-DXSXRjSb.js";function it(e){return ee("MuiCollapse",e)}K("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const lt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ct=e=>{const{orientation:t,classes:o}=e,n={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return q(n,it,o)},pt=M("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.state==="entered"&&t.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>i({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&i({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),dt=M("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>i({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ut=M("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>i({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Pe=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiCollapse"}),{addEndListener:s,children:l,className:c,collapsedSize:a="0px",component:p,easing:g,in:d,onEnter:A,onEntered:h,onEntering:b,onExit:k,onExited:j,onExiting:y,orientation:w="vertical",style:E,timeout:m=Fe.standard,TransitionComponent:C=je}=n,P=S(n,lt),I=i({},n,{orientation:w,collapsedSize:a}),v=ct(I),G=ge(),L=ot(),D=f.useRef(null),B=f.useRef(),N=typeof a=="number"?`${a}px`:a,$=w==="horizontal",H=$?"width":"height",V=f.useRef(null),pe=le(o,V),O=x=>T=>{if(x){const U=V.current;T===void 0?x(U):x(U,T)}},u=()=>D.current?D.current[$?"clientWidth":"clientHeight"]:0,R=O((x,T)=>{D.current&&$&&(D.current.style.position="absolute"),x.style[H]=N,A&&A(x,T)}),oe=O((x,T)=>{const U=u();D.current&&$&&(D.current.style.position="");const{duration:X,easing:re}=ie({style:E,timeout:m,easing:g},{mode:"enter"});if(m==="auto"){const he=G.transitions.getAutoHeightDuration(U);x.style.transitionDuration=`${he}ms`,B.current=he}else x.style.transitionDuration=typeof X=="string"?X:`${X}ms`;x.style[H]=`${U}px`,x.style.transitionTimingFunction=re,b&&b(x,T)}),ze=O((x,T)=>{x.style[H]="auto",h&&h(x,T)}),Le=O(x=>{x.style[H]=`${u()}px`,k&&k(x)}),Ne=O(j),Oe=O(x=>{const T=u(),{duration:U,easing:X}=ie({style:E,timeout:m,easing:g},{mode:"exit"});if(m==="auto"){const re=G.transitions.getAutoHeightDuration(T);x.style.transitionDuration=`${re}ms`,B.current=re}else x.style.transitionDuration=typeof U=="string"?U:`${U}ms`;x.style[H]=N,x.style.transitionTimingFunction=X,y&&y(x)}),Ue=x=>{m==="auto"&&L.start(B.current||0,x),s&&s(V.current,x)};return r.jsx(C,i({in:d,onEnter:R,onEntered:ze,onEntering:oe,onExit:Le,onExited:Ne,onExiting:Oe,addEndListener:Ue,nodeRef:V,timeout:m==="auto"?null:m},P,{children:(x,T)=>r.jsx(pt,i({as:p,className:z(v.root,c,{entered:v.entered,exited:!d&&N==="0px"&&v.hidden}[x]),style:i({[$?"minWidth":"minHeight"]:N},E),ref:pe},T,{ownerState:i({},I,{state:x}),children:r.jsx(dt,{ownerState:i({},I,{state:x}),className:v.wrapper,ref:D,children:r.jsx(ut,{ownerState:i({},I,{state:x}),className:v.wrapperInner,children:l})})}))}))});Pe.muiSupportAuto=!0;const ft=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],gt=["component","slots","slotProps"],mt=["component"];function xt(e,t){const{className:o,elementType:n,ownerState:s,externalForwardedProps:l,getSlotOwnerState:c,internalForwardedProps:a}=t,p=S(t,ft),{component:g,slots:d={[e]:void 0},slotProps:A={[e]:void 0}}=l;S(l,gt);const h=d[e]||n,b=Ve(A[e],s),k=We(i({className:o},p,{externalForwardedProps:void 0,externalSlotProps:b})),{props:{component:j},internalRef:y}=k,w=S(k.props,mt),E=le(y,b==null?void 0:b.ref,t.ref),m=c?c(w):{},C=i({},s,m),P=j,I=Ye(h,i({},e==="root",!d[e]&&a,w,P&&{as:P},{ref:E}),C);return Object.keys(m).forEach(v=>{delete I[v]}),[h,I]}function ht(e){return ee("MuiAppBar",e)}K("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const vt=["className","color","enableColorOnDark","position"],bt=e=>{const{color:t,position:o,classes:n}=e,s={root:["root",`color${F(t)}`,`position${F(o)}`]};return q(s,ht,n)},se=(e,t)=>e?`${e==null?void 0:e.replace(")","")}, ${t})`:t,yt=M(me,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${F(o.position)}`],t[`color${F(o.color)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[900];return i({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},t.position==="fixed"&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},t.position==="absolute"&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},t.position==="sticky"&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},t.position==="static"&&{position:"static"},t.position==="relative"&&{position:"relative"},!e.vars&&i({},t.color==="default"&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&t.color!=="default"&&t.color!=="inherit"&&t.color!=="transparent"&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},t.color==="inherit"&&{color:"inherit"},e.palette.mode==="dark"&&!t.enableColorOnDark&&{backgroundColor:null,color:null},t.color==="transparent"&&i({backgroundColor:"transparent",color:"inherit"},e.palette.mode==="dark"&&{backgroundImage:"none"})),e.vars&&i({},t.color==="default"&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:se(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:se(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:se(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:se(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},!["inherit","transparent"].includes(t.color)&&{backgroundColor:"var(--AppBar-background)"},{color:t.color==="inherit"?"inherit":"var(--AppBar-color)"},t.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Ct=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiAppBar"}),{className:s,color:l="primary",enableColorOnDark:c=!1,position:a="fixed"}=n,p=S(n,vt),g=i({},n,{color:l,position:a,enableColorOnDark:c}),d=bt(g);return r.jsx(yt,i({square:!0,component:"header",ownerState:g,elevation:4,className:z(d.root,s,a==="fixed"&&"mui-fixed"),ref:o},p))}),kt=Qe(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function At(e){return ee("MuiAvatar",e)}K("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const wt=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],jt=e=>{const{classes:t,variant:o,colorDefault:n}=e;return q({root:["root",o,n&&"colorDefault"],img:["img"],fallback:["fallback"]},At,t)},Et=M("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:i({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:i({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),It=M("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Rt=M(kt,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Dt({crossOrigin:e,referrerPolicy:t,src:o,srcSet:n}){const[s,l]=f.useState(!1);return f.useEffect(()=>{if(!o&&!n)return;l(!1);let c=!0;const a=new Image;return a.onload=()=>{c&&l("loaded")},a.onerror=()=>{c&&l("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=o,n&&(a.srcset=n),()=>{c=!1}},[e,t,o,n]),s}const Bt=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiAvatar"}),{alt:s,children:l,className:c,component:a="div",slots:p={},slotProps:g={},imgProps:d,sizes:A,src:h,srcSet:b,variant:k="circular"}=n,j=S(n,wt);let y=null;const w=Dt(i({},d,{src:h,srcSet:b})),E=h||b,m=E&&w!=="error",C=i({},n,{colorDefault:!m,component:a,variant:k}),P=jt(C),[I,v]=xt("img",{className:P.img,elementType:It,externalForwardedProps:{slots:p,slotProps:{img:i({},d,g.img)}},additionalProps:{alt:s,src:h,srcSet:b,sizes:A},ownerState:C});return m?y=r.jsx(I,i({},v)):l||l===0?y=l:E&&s?y=s[0]:y=r.jsx(Rt,{ownerState:C,className:P.fallback}),r.jsx(Et,i({as:a,ownerState:C,className:z(P.root,c),ref:o},j,{children:y}))});function Pt(e){return ee("MuiCard",e)}K("MuiCard",["root"]);const Tt=["className","raised"],St=e=>{const{classes:t}=e;return q({root:["root"]},Pt,t)},Mt=M(me,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),$t=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiCard"}),{className:s,raised:l=!1}=n,c=S(n,Tt),a=i({},n,{raised:l}),p=St(a);return r.jsx(Mt,i({className:z(p.root,s),elevation:l?8:void 0,ref:o,ownerState:a},c))}),zt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Lt(e,t,o){const n=t.getBoundingClientRect(),s=o&&o.getBoundingClientRect(),l=Ee(t);let c;if(t.fakeTransform)c=t.fakeTransform;else{const g=l.getComputedStyle(t);c=g.getPropertyValue("-webkit-transform")||g.getPropertyValue("transform")}let a=0,p=0;if(c&&c!=="none"&&typeof c=="string"){const g=c.split("(")[1].split(")")[0].split(",");a=parseInt(g[4],10),p=parseInt(g[5],10)}return e==="left"?s?`translateX(${s.right+a-n.left}px)`:`translateX(${l.innerWidth+a-n.left}px)`:e==="right"?s?`translateX(-${n.right-s.left-a}px)`:`translateX(-${n.left+n.width-a}px)`:e==="up"?s?`translateY(${s.bottom+p-n.top}px)`:`translateY(${l.innerHeight+p-n.top}px)`:s?`translateY(-${n.top-s.top+n.height-p}px)`:`translateY(-${n.top+n.height-p}px)`}function Nt(e){return typeof e=="function"?e():e}function ae(e,t,o){const n=Nt(o),s=Lt(e,t,n);s&&(t.style.webkitTransform=s,t.style.transform=s)}const Ot=f.forwardRef(function(t,o){const n=ge(),s={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},l={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:a=!0,children:p,container:g,direction:d="down",easing:A=s,in:h,onEnter:b,onEntered:k,onEntering:j,onExit:y,onExited:w,onExiting:E,style:m,timeout:C=l,TransitionComponent:P=je}=t,I=S(t,zt),v=f.useRef(null),G=le(qe(p),v,o),L=u=>R=>{u&&(R===void 0?u(v.current):u(v.current,R))},D=L((u,R)=>{ae(d,u,g),_e(u),b&&b(u,R)}),B=L((u,R)=>{const oe=ie({timeout:C,style:m,easing:A},{mode:"enter"});u.style.webkitTransition=n.transitions.create("-webkit-transform",i({},oe)),u.style.transition=n.transitions.create("transform",i({},oe)),u.style.webkitTransform="none",u.style.transform="none",j&&j(u,R)}),N=L(k),$=L(E),H=L(u=>{const R=ie({timeout:C,style:m,easing:A},{mode:"exit"});u.style.webkitTransition=n.transitions.create("-webkit-transform",R),u.style.transition=n.transitions.create("transform",R),ae(d,u,g),y&&y(u)}),V=L(u=>{u.style.webkitTransition="",u.style.transition="",w&&w(u)}),pe=u=>{c&&c(v.current,u)},O=f.useCallback(()=>{v.current&&ae(d,v.current,g)},[d,g]);return f.useEffect(()=>{if(h||d==="down"||d==="right")return;const u=Xe(()=>{v.current&&ae(d,v.current,g)}),R=Ee(v.current);return R.addEventListener("resize",u),()=>{u.clear(),R.removeEventListener("resize",u)}},[d,h,g]),f.useEffect(()=>{h||O()},[h,O]),r.jsx(P,i({nodeRef:v,onEnter:D,onEntered:N,onEntering:B,onExit:H,onExited:V,onExiting:$,addEndListener:pe,appear:a,in:h,timeout:C},I,{children:(u,R)=>f.cloneElement(p,i({ref:G,style:i({visibility:u==="exited"&&!h?"hidden":void 0},m,p.props.style)},R))}))});function Ut(e){return ee("MuiDrawer",e)}K("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const Ft=["BackdropProps"],Ht=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Te=(e,t)=>{const{ownerState:o}=e;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},Gt=e=>{const{classes:t,anchor:o,variant:n}=e,s={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${F(o)}`,n!=="temporary"&&`paperAnchorDocked${F(o)}`]};return q(s,Ut,t)},Vt=M(Ze,{name:"MuiDrawer",slot:"Root",overridesResolver:Te})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),be=M("div",{shouldForwardProp:ke,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Te})({flex:"0 0 auto"}),Wt=M(me,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`paperAnchor${F(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${F(o.anchor)}`]]}})(({theme:e,ownerState:t})=>i({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),Se={left:"right",right:"left",top:"down",bottom:"up"};function Yt(e){return["left","right"].indexOf(e)!==-1}function Qt({direction:e},t){return e==="rtl"&&Yt(t)?Se[t]:t}const ye=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiDrawer"}),s=ge(),l=He(),c={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:a="left",BackdropProps:p,children:g,className:d,elevation:A=16,hideBackdrop:h=!1,ModalProps:{BackdropProps:b}={},onClose:k,open:j=!1,PaperProps:y={},SlideProps:w,TransitionComponent:E=Ot,transitionDuration:m=c,variant:C="temporary"}=n,P=S(n.ModalProps,Ft),I=S(n,Ht),v=f.useRef(!1);f.useEffect(()=>{v.current=!0},[]);const G=Qt({direction:l?"rtl":"ltr"},a),D=i({},n,{anchor:a,elevation:A,open:j,variant:C},I),B=Gt(D),N=r.jsx(Wt,i({elevation:C==="temporary"?A:0,square:!0},y,{className:z(B.paper,y.className),ownerState:D,children:g}));if(C==="permanent")return r.jsx(be,i({className:z(B.root,B.docked,d),ownerState:D,ref:o},I,{children:N}));const $=r.jsx(E,i({in:j,direction:Se[G],timeout:m,appear:v.current},w,{children:N}));return C==="persistent"?r.jsx(be,i({className:z(B.root,B.docked,d),ownerState:D,ref:o},I,{children:$})):r.jsx(Vt,i({BackdropProps:i({},p,b,{transitionDuration:m}),className:z(B.root,B.modal,d),open:j,ownerState:D,onClose:k,hideBackdrop:h,ref:o},I,P,{children:$}))}),qt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Xt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},_t=e=>{const{alignItems:t,classes:o,dense:n,disabled:s,disableGutters:l,divider:c,selected:a}=e,g=q({root:["root",n&&"dense",!l&&"gutters",c&&"divider",s&&"disabled",t==="flex-start"&&"alignItemsFlexStart",a&&"selected"]},st,o);return i({},o,g)},Zt=M(rt,{shouldForwardProp:e=>ke(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Xt})(({theme:e,ownerState:t})=>i({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${_.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ne(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${_.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:ne(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${_.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:ne(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:ne(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${_.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${_.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Me=f.forwardRef(function(t,o){const n=Q({props:t,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:l=!1,component:c="div",children:a,dense:p=!1,disableGutters:g=!1,divider:d=!1,focusVisibleClassName:A,selected:h=!1,className:b}=n,k=S(n,qt),j=f.useContext(ve),y=f.useMemo(()=>({dense:p||j.dense||!1,alignItems:s,disableGutters:g}),[s,j.dense,p,g]),w=f.useRef(null);Ge(()=>{l&&w.current&&w.current.focus()},[l]);const E=i({},n,{alignItems:s,dense:y.dense,disableGutters:g,divider:d,selected:h}),m=_t(E),C=le(w,o);return r.jsx(ve.Provider,{value:y,children:r.jsx(Zt,i({ref:C,href:k.href||k.to,component:(k.href||k.to)&&c==="div"?"button":c,focusVisibleClassName:z(m.focusVisible,A),ownerState:E,className:z(m.root,b)},k,{classes:m,children:a}))})}),Jt=["getTrigger","target"];function Kt(e,t){const{disableHysteresis:o=!1,threshold:n=100,target:s}=t,l=e.current;return s&&(e.current=s.pageYOffset!==void 0?s.pageYOffset:s.scrollTop),!o&&l!==void 0&&e.current<l?!1:e.current>n}const eo=typeof window<"u"?window:null;function to(e={}){const{getTrigger:t=Kt,target:o=eo}=e,n=S(e,Jt),s=f.useRef(),[l,c]=f.useState(()=>t(s,n));return f.useEffect(()=>{const a=()=>{c(t(s,i({target:o},n)))};return a(),o.addEventListener("scroll",a,{passive:!0}),()=>{o.removeEventListener("scroll",a,{passive:!0})}},[o,t,JSON.stringify(n)]),l}const oo=e=>r.jsxs(Je,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...e,children:[r.jsx("mask",{id:"mask0_8121_67",style:{maskType:"luminance"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"32",height:"32",children:r.jsx("rect",{width:"32",height:"32",fill:"white"})}),r.jsxs("g",{mask:"url(#mask0_8121_67)",children:[r.jsx("path",{d:"M13.6704 7.84579L14.0416 13.3657L14.2258 16.1401C14.2278 16.4255 14.2725 16.7089 14.3588 16.9813C14.5813 17.5101 15.1168 17.8461 15.6993 17.8227L24.5756 17.242C24.96 17.2357 25.3312 17.3795 25.6074 17.6417C25.8377 17.8603 25.9864 18.1461 26.0333 18.4536L26.049 18.6403C25.6817 23.7265 21.9461 27.9689 16.8704 29.064C11.7946 30.1591 6.58965 27.8457 4.08145 23.3799C3.35836 22.0824 2.90671 20.6564 2.75301 19.1853C2.68881 18.7499 2.66055 18.31 2.66848 17.87C2.66055 12.417 6.5438 7.70262 11.9796 6.5661C12.6339 6.46422 13.2752 6.81057 13.5376 7.40738C13.6054 7.54559 13.6502 7.69362 13.6704 7.84579Z",fill:"currentColor"}),r.jsx("path",{opacity:"0.4",d:"M29.3335 13.083L29.3242 13.1264L29.2973 13.1896L29.301 13.3631C29.2871 13.5929 29.1983 13.8139 29.0455 13.9926C28.8862 14.1786 28.6686 14.3053 28.429 14.3545L28.2829 14.3745L18.0418 15.0381C17.7011 15.0717 17.3619 14.9618 17.1087 14.7359C16.8975 14.5475 16.7626 14.2934 16.7245 14.0195L16.0371 3.79334C16.0251 3.75877 16.0251 3.72129 16.0371 3.6867C16.0465 3.40482 16.1706 3.13838 16.3817 2.9469C16.5926 2.75542 16.8731 2.65486 17.1602 2.66769C23.2401 2.82237 28.3499 7.19431 29.3335 13.083Z",fill:"currentColor"})]})]}),$e=[{id:2,name:"Employees",path:Ae.root,pathName:"dashboard",svgIcon:oo,active:!0},{id:9,name:"Authentication",pathName:"authentication",icon:"material-symbols:security-rounded",active:!0,items:[{id:10,name:"Sign in",path:W.signin,pathName:"sign-in",active:!0},{id:11,name:"Sign up",path:W.signup,pathName:"sign-up",active:!0}]},{id:1,name:"Customers",path:"#!",pathName:"leaderboard",icon:"ri:bar-chart-line"},{id:4,name:"Process",path:"#!",pathName:"products",icon:"mdi:shopping-outline"},{id:5,name:"Reports",path:"#!",pathName:"sales-report",icon:"ph:chart-line"},{id:7,name:"Settings",path:"#!",pathName:"settings",icon:"fluent:settings-24-regular",active:!0,items:[{id:12,name:"Classifications",path:W.signin,pathName:"#",active:!1},{id:13,name:"Sectors",path:W.signup,pathName:"#",active:!1},{id:14,name:"Banks",path:W.signup,pathName:"#",active:!1},{id:15,name:"Users",path:W.signup,pathName:"#",active:!1}]},{id:8,name:"Sign Out",path:"#!",pathName:"sign-out",icon:"humbleicons:logout",active:!0}],ro="data:image/webp;base64,UklGRkgDAABXRUJQVlA4WAoAAAAQAAAA7QAAAgEAQUxQSOEAAAABcBTbVuQ8CV8CUpDSDoKD4AAcEAfEQUtAwpfwJfQ87N7yR8QE4GFMXW2h0UbPEe/L1xZCtYV3pCy0tvDCxxZidXpUFnLLPZkXeofcGQvB842yUFwupoXkdBKUJZNDW2guAMJCtACNqQwoU4a4UB0zV6lz9R9cqXFli/vf/e/+d/+7/93/7n/3v/vf/e/+d/87YI0rU65G5+qfuMqRqwhjSoHMVAOEqQCg8tQAQIwlDQckliacV44qrmeGBm7K4GeWO0Blp+LppMxYwvPw46UKXg0/ZcSy4P2Y+zAeTHuKeAgAVlA4IEACAABQHwCdASruAAMBPpFGnkylo6KiInKIeLASCWlu4W8g+eI5gAoSXeHPtmzLmpmAbD62HxJFvfJW6x5ISTZTT1TZUeLzYVoiEiSoqFj6WrLl8QMgRNJJYxwzA2JZV0Iczu8KGkpWn6qggAfLanUkXeI0kc+D4CxYG7OpYFGVD5UGBXoaSl5j60hC9jXWszTEc8+xNJGPEaSMeI0kY8RlvL/rVquXc9NB4jSRjyCZ0MAYLe63etDSRjxNb0FS4OtwqOd1rE0kZAY+ZeAU3UGuP9K330knugxJPp1f+kjHibB1F4Sz42Zn+lZesgY5XCMIDg7KrN5XSRHMTnb0cbLfHhhrhoAAAP74rn9Rfar+JRycDj/k+rqish+BMGbgL/1Jkm8PRmFF6/e0U6ZoNfhFhQcxOMtleVblMH15FxF35pQuUg9Yj6elm/cffYz9Bnwr+4lHrts4I49fGniVczbSf2mk/JTXZZI3BlOuyukomrUI5XXodJK3jNGiqAkqHWrtNsG6rF7FDp6DMT/rv+vR99l/+1fRYATzlt31BxDErIg4gi500AAADqb7eg5g/+TpT7yQeJHUDpwBIqEIDGnGHQF3HPmkfNld1UkM8jyiVlzR1ByCqOjOwWBa40ryawQy136m9QMmA1E//r3Rnwc/2//csvjHjagwoSq6QxUHid7/8q/j5aY99OIDg1Bv4C6z//YlG/mcVLDeudER4TGPj/8kvvdZRwBviJiWdmz/doV/wPyb+L04FfR1t510d3Xn4AA=",no=()=>r.jsx($t,{sx:{background:`url(${ro}) no-repeat`,width:238}}),so=({items:e,open:t})=>{const o=fe();return r.jsx(Pe,{in:t,timeout:"auto",unmountOnExit:!0,children:r.jsx(Ie,{component:"ul",children:e==null?void 0:e.map(n=>r.jsx(Re,{sx:{py:0,pl:7,pr:0},children:r.jsx(Me,{selected:o.pathname===n.path,component:n.path?ce:"div",href:n.path,sx:{opacity:n.active?1:.5,pl:3,mt:.5},children:r.jsx(De,{primary:n.name})})},n.id))})})},ao=({item:e})=>{const t=fe(),[o,n]=f.useState(!1),s=()=>{n(!o)},{name:l,path:c,icon:a,svgIcon:p,active:g,items:d}=e;async function A(){console.log("clicked signout"),await we.auth.signOut()}const h=a?r.jsx(Y,{icon:a,fontSize:32}):p?r.jsx(p,{sx:{fontSize:32}}):null;return r.jsxs(Re,{sx:{flexDirection:"column",alignItems:"stretch",p:0,opacity:g?1:.5},onClick:b=>{b.target.textContent=="Sign Out"&&A()},children:[r.jsxs(Me,{selected:t.pathname===c,component:c?ce:"div",onClick:s,href:c,sx:[t.pathname===c&&{".MuiListItemIcon-root":{color:"common.white"}},{"&:hover .MuiListItemIcon-root":{color:"common.white"}},{pl:3,py:2}],children:[r.jsx(Be,{sx:{mr:3,color:"primary.light",transition:"color 0.3s"},children:h}),r.jsx(De,{primary:l,sx:[t.pathname===c&&{fontWeight:600}]}),d&&r.jsx(Y,{icon:o?"ph:caret-up-bold":"ph:caret-down-bold"})]}),d&&r.jsx(so,{items:d,open:o})]})},io=()=>r.jsx(Ie,{sx:{display:"inline-flex",flexDirection:"column",gap:3},children:$e.map(e=>r.jsx(ao,{item:e},e.id))}),Ce=()=>r.jsxs(r.Fragment,{children:[r.jsx(xe,{disableGutters:!0,children:r.jsx(et,{})}),r.jsx(te,{sx:e=>({px:5,height:`calc(100vh - ${e.mixins.toolbar.minHeight}px)`,overflowY:"auto"}),children:r.jsxs(J,{gap:17,py:4,children:[r.jsx(io,{}),r.jsx(no,{})]})})]}),lo=({drawerWidth:e,mobileOpen:t,onTransitionEnd:o,onHandleDrawerClose:n})=>r.jsxs(te,{component:"nav",sx:{width:{lg:e},flexShrink:{sm:0}},"aria-label":"drawer",children:[r.jsx(ye,{variant:"temporary",open:t,onTransitionEnd:o,onClose:n,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",lg:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:e}},children:r.jsx(Ce,{})}),r.jsx(ye,{variant:"permanent",sx:{display:{xs:"none",lg:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:e}},open:!0,children:r.jsx(Ce,{})})]}),co=({children:e})=>{const t=to({disableHysteresis:!0,threshold:0});return f.cloneElement(e,{elevation:t?3:0})},po="/ltd/assets/profile-BIQfvPEa.png",uo=[{id:0,label:"Profile",icon:"material-symbols:person"},{id:1,label:"My Account",icon:"material-symbols:account-box-sharp"},{id:2,label:"Logout",icon:"uiw:logout"}],fo=()=>{const[e,t]=f.useState(null),o=!!e,[n,s]=f.useState(""),[l,c]=f.useState("User");f.useEffect(()=>{(async()=>{var h,b,k,j,y,w,E;const{data:A}=await we.auth.getSession();if(A){const m=A;let C=(k=(b=(h=m.session)==null?void 0:h.user)==null?void 0:b.user_metadata)==null?void 0:k.name;(w=(y=(j=m==null?void 0:m.session)==null?void 0:j.user)==null?void 0:y.email)!=null&&w.includes("perezabby")&&(c("Admin"),console.log("here 1"),localStorage.setItem("is","true")),console.log("test",(E=m==null?void 0:m.session)==null?void 0:E.user),localStorage.getItem("signedUpName")&&(C=localStorage.getItem("signedUpName")),s(C||"Anonymous")}})()},[]);const a=d=>{t(d.currentTarget)},p=()=>{t(null)},g=uo.map(d=>r.jsxs(at,{onClick:p,sx:{"&:hover .account-menu-icon":{color:"common.white"}},children:[r.jsx(Be,{children:r.jsx(Y,{icon:d.icon,sx:{color:"primary.main"},className:"account-menu-icon"})}),r.jsx(Z,{variant:"body1",children:d.label})]},d.id));return r.jsxs(r.Fragment,{children:[r.jsxs(nt,{onClick:a,"aria-controls":o?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,sx:{px:{xs:1,sm:2},minWidth:"auto"},children:[r.jsx(Bt,{sx:{width:{xs:48,sm:60},height:{xs:48,sm:60},borderRadius:4,mr:{xs:0,xl:2.5}},alt:"User Profile",src:po}),r.jsxs(te,{sx:{display:{xs:"none",xl:"block"}},children:[r.jsxs(J,{direction:"row",alignItems:"center",columnGap:6,children:[r.jsx(Z,{variant:"h6",component:"p",color:"primary.darker",gutterBottom:!0,children:n}),r.jsx(Y,{icon:"ph:caret-down-bold",fontSize:16,color:"primary.darker"})]}),r.jsx(Z,{variant:"subtitle2",textAlign:"left",color:"primary.lighter",children:localStorage.getItem("is")=="true"?"Admin":l})]})]}),r.jsx(Ke,{anchorEl:e,id:"account-menu",open:o,onClose:p,onClick:p,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:g})]})},go=({drawerWidth:e,onHandleDrawerToggle:t})=>{const o=fe(),n=f.useMemo(()=>$e.find(l=>o.pathname===l.path).name,[o]);return r.jsx(co,{children:r.jsx(Ct,{position:"fixed",sx:{width:{lg:`calc(100% - ${e}px)`},ml:{sm:`${e}px`}},children:r.jsxs(xe,{sx:{justifyContent:"space-between",gap:{xs:1,sm:5}},children:[r.jsxs(J,{direction:"row",alignItems:"center",columnGap:{xs:1,sm:2},sx:{display:{lg:"none"}},children:[r.jsx(ce,{href:Ae.root,children:r.jsx(de,{color:"inherit","aria-label":"logo",children:r.jsx(tt,{sx:{fontSize:56}})})}),r.jsx(de,{color:"inherit","aria-label":"open drawer",onClick:t,children:r.jsx(Y,{icon:"mdi:hamburger-menu",sx:{fontSize:{xs:24,sm:32}}})}),r.jsx(de,{"aria-label":"search-icon",sx:{display:{md:"none"}},children:r.jsx(Y,{icon:"gravity-ui:magnifier",sx:{color:"primary.main",fontSize:{xs:24,sm:32}}})})]}),r.jsx(Z,{variant:"h1",color:"primary.darker",sx:{display:{xs:"none",lg:"block"}},children:n}),r.jsx(J,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:{xs:1,sm:2,xl:5.25},width:1,children:r.jsx(fo,{})})]})})})},mo=()=>r.jsxs(Z,{variant:"h6",component:"footer",sx:{pt:3.75,textAlign:{xs:"center",md:"right"}},children:[r.jsx(te,{component:"span",sx:{color:"error.main",verticalAlign:"middle"}})," ",r.jsx(ce,{href:"https://themewagon.com/",target:"_blank",rel:"noopener","aria-label":"Explore ThemeWagon Website",sx:{color:"text.primary","&:hover":{color:"primary.main"}}})]}),ue=345,ko=({children:e})=>{const[t,o]=f.useState(!1),[n,s]=f.useState(!1),l=()=>{s(!0),o(!1)},c=()=>{s(!1)},a=()=>{n||o(!t)};return r.jsxs(J,{direction:"row",children:[r.jsx(go,{drawerWidth:ue,onHandleDrawerToggle:a}),r.jsx(lo,{drawerWidth:ue,mobileOpen:t,onTransitionEnd:c,onHandleDrawerClose:l}),r.jsxs(te,{component:"main",sx:p=>({flexGrow:1,p:{xs:p.spacing(4,2),sm:p.spacing(4,5),lg:p.spacing(4)},minHeight:"100vh",width:{xs:1,sm:`calc(100% - ${ue}px)`},bgcolor:"neutral.lighter"}),children:[r.jsx(xe,{}),e,r.jsx(mo,{})]})]})};export{ko as default};
