import{j as a,L as n,_ as e}from"./index-lb0AEHtY.js";import{P as m}from"./decorators-Bt19gwcT.js";function h(){const l=n.SUPPORTED_LANG,s=location.pathname,o=i=>{if(s.length>1){const t=new RegExp("/("+l.join("|")+")(/|$)","i"),r=s.match(t),c=r?r[0]:"/";return s.replace(c,"/"+i+"/").replace(/\/$/,"")}return"/"+i};return a.jsx("ul",{className:"navbar-nav",children:a.jsxs("li",{className:"nav-item dropdown",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:n.languageName(n.language)}),a.jsx("ul",{className:"dropdown-menu dropdown-menu-end fade-down",children:l.map(i=>a.jsx("li",{hidden:n.language==i,children:a.jsx("a",{className:"nav-link dropdown-item",href:o(i),children:n.languageName(i)})},"nav-lang-link-"+i))})]})})}function p(){return a.jsx("nav",{className:"ms-navbar navbar-expand-lg",children:a.jsxs("div",{className:"ms-s-offset my-0",children:[a.jsx("a",{className:"ms-navbar-brand",href:n.i18nLink("/"),children:a.jsx("img",{src:"/img/logo.svg",alt:e("ERROR.404_BTN"),className:"d-inline-block align-text-top"})}),a.jsx("button",{className:"navbar-toggler navbar-toggler-open",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:"#5396C6"})})}),a.jsxs("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[a.jsxs("ul",{className:"navbar-nav me-auto",children:[a.jsxs("li",{className:"nav-item dropdown ps-lg-5",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdownMain",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:e("NAV.ABOUT")}),a.jsxs("ul",{className:"dropdown-menu dropdown-menu-end fade-down","aria-labelledby":"navbarDropdownMain",children:[a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("about"),children:e("ABOUT.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("mission"),children:e("MISSION.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("team"),children:e("TEAM.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("careers"),children:e("CAREERS.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("privacy-policy"),children:e("PP.HEAD")})})]})]}),a.jsxs("li",{className:"nav-item dropdown ps-lg-5",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdownPages",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:e("NAV.APPS")}),a.jsxs("ul",{className:"dropdown-menu dropdown-menu-end fade-down","aria-labelledby":"navbarDropdownPages",children:[a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("vitamin"),children:e("VITAMIN.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("bodysize"),children:e("SIZE.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("bodymass"),children:e("MASS.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("waistline"),children:e("WAIST.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("bodyzinc"),children:e("ZINC.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("emotion"),children:e("EMOTION.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:n.i18nLink("electrolyte"),children:e("ELECTROLYTE.HEAD")})})]})]})]}),h()]})]})})}const g={title:"Organism"},d=()=>a.jsx("section",{children:a.jsx(p,{})});d.decorators=[m];d.storyName="Navigation Bar";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as NavigationBarStory,g as default};
