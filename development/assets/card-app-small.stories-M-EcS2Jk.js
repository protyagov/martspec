import{j as e,L as d,_ as a}from"./index-BsijFx_C.js";import{B as c}from"./button-chevron-right-DR8Yr95P.js";import{B as p}from"./buttonLinkStylePlain-CIoA7VWt.js";import{P as x}from"./decorators-BOI3c4VP.js";const h=({iconSrc:i,iconAlt:s,title:n,subtitle:r,content:o,button:t,backgroundColor:m="#FFFFFF"})=>e.jsxs("div",{className:"card-app-small d-flex flex-column align-items-start px-4 py-4 rounded-5 h-100",style:{backgroundColor:m},children:[e.jsxs("div",{className:"d-flex align-items-center gap-3 mb-4",children:[e.jsx("div",{className:"icon",children:e.jsx("img",{src:i,alt:s,width:50,height:50})}),e.jsxs("div",{children:[e.jsx("h1",{className:"mb-1",children:n}),e.jsx("h2",{className:"fs-5",children:r})]})]}),e.jsx("p",{className:"mb-4",children:o}),t.buttonType==="ButtonLinkStylePlain"?e.jsx(p,{text:t.text,link:t.link}):e.jsx(c,{text:t.text,link:t.link})]}),j={title:"Molecule"},l=()=>e.jsxs("div",{style:{maxWidth:"410px"},children:[e.jsx("style",{children:`
            .card-app-small {
                box-shadow: 0 8px 24px rgba(149, 157, 165, 0.2);
                border: 1px solid #E5E7EB;
                background-color: #FFFFFF;
            }
            .card-app-small h1 {
                margin: 0 0 0.25rem 0;
            }
            .card-app-small h2 {
                margin: 0 0 0.5rem 0;
            }
            .card-app-small p {
                font-size: 1.5rem;
            }
        `}),e.jsx(h,{iconSrc:"/img/page/vitamin/vitamin-ring-icon-main-page.svg",iconAlt:a("VITAMIN.ICO1"),title:a("VITAMIN.HEAD1"),subtitle:a("VITAMIN.SUBHEAD1"),content:a("VITAMIN.TEXT1"),button:{buttonType:"ButtonChevronRight",text:a("VITAMIN.BUTTON_OPEN_NUTRIENTS"),link:d.i18nLink("vitamin"),color:"#1686FF"},backgroundColor:"#FFF"})]});l.decorators=[x];l.storyName="CardAppSmall";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as CardAppSmallStory,j as default};
