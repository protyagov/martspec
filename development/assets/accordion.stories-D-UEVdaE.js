import{r as i,j as e,_ as f}from"./index-9Arkqoy1.js";import{I as g}from"./icon-chevron-circle-BQe4uMqs.js";import{P as b}from"./decorators-BVuHKD0M.js";function j({title:r,bgColor:c,expandIconColor:d,bgImg:t,children:l,textColor:m="#212529",defaultExpanded:s=!1,mobileBgResized:h=!1}){const a=i.useId(),[o,p]=i.useState(s),x=()=>{p(u=>!u)};return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-0",children:e.jsxs("button",{type:"button",onClick:x,className:"accordion-header position-relative d-flex w-100 align-items-center justify-content-between p-4 overflow-hidden border-0 rounded-4",style:{backgroundColor:c,color:m},"aria-expanded":s,"data-bs-toggle":"collapse","data-bs-target":`#${a}`,children:[e.jsx("span",{className:"title text-start fw-medium z-1",children:r}),e.jsx(g,{className:`accordion-icon ${o?"accordion-expanded-icon":""}`,style:{color:d}}),t&&e.jsx("img",{className:`bg-image position-absolute ${h?"mobile-bg-resize":""}`,src:t.src,alt:"",width:t.width,height:t.height})]})}),e.jsx("div",{id:a,className:`collapse ${o?"show":""}`,children:e.jsx("div",{"aria-expanded":o,children:l})})]})}const v={title:"Molecule"},n=()=>e.jsx("section",{style:{height:"15%"},children:e.jsx(j,{title:f("VITAMIN.VITAMIN_FAT.NAME"),bgColor:"#fff3e9",expandIconColor:"e95813",bgImg:{src:"/img/page/vitamin/vitamin-list-header-fat-bg.svg",width:114,height:132},mobileBgResized:!1,defaultExpanded:!1,children:e.jsx("p",{className:"pt-4",children:"Here is the content inside the accordion."})})});n.decorators=[b];n.storyName="Accordion";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{n as AccordionStory,v as default};