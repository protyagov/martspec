import{j as e,_ as t}from"./index-9Arkqoy1.js";import{T as y}from"./text-link-arrow-jJ3xugeP.js";import{P as E}from"./decorators-BVuHKD0M.js";const f=({title:i,text:a,link:r,gridColumnClass:l="col-lg-4",bgColor:n="#FFFFFF",image:o,alt:d="Image",arrowImage:c=null,hoverColor:m="",color:x="",hasShadow:u=!1,borderClass:h="",imageZIndex:C=1,imageOpacity:p=1,additionalCardClass:g="",fontFamily:T="",fontSize:w=""})=>e.jsx("div",{className:l,children:e.jsxs("div",{className:`title-text-link-card ${g} ${u?"shadow":""} ${h}`,style:{backgroundColor:n},children:[o&&e.jsx("img",{className:"card-image",src:o,alt:d,style:{zIndex:C,opacity:p}}),e.jsxs("div",{children:[e.jsx("h3",{style:{zIndex:10,position:"relative"},children:i}),e.jsx("p",{style:{zIndex:10,position:"relative"},children:a}),e.jsx(y,{href:r.href,rightIcon:c,text:r.text,isNewTab:!0,color:x,hoverColor:m,fontFamily:T,fontSize:w})]})]})}),I={title:"Molecule"},s=()=>e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(f,{title:t("ELECTROLYTE.HEAD4"),text:t("ELECTROLYTE.DESC4_1"),link:{text:t("ELECTROLYTE.BTN_LINK"),href:"https://ods.od.nih.gov/factsheets/Calcium-Consumer"},image:"/img/page/electrolyte/calcium.webp",alt:"calcium",gridColumnClass:"col-xxl-6",additionalCardClass:"electrolyte-card-style",hasShadow:!0,bgColor:"transparent",imageZIndex:-1,arrowImage:e.jsx("img",{src:"/img/page/electrolyte/arrow-icon.webp",width:19}),color:"#8079CC",hoverColor:"#6760b7"})});s.decorators=[E];s.storyName="TitleTextLinkCard";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{s as TitleTextLinkCardStory,I as default};