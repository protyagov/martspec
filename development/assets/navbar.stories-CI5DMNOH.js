import{j as a,L as e,_ as s}from"./index-cZ6DS98p.js";import{P as m}from"./decorators-CRdw65Cu.js";function p(){const n=e.SUPPORTED_LANG,l=location.pathname,d=i=>{if(l.length>1){const t=new RegExp("/("+n.join("|")+")(/|$)","i"),r=l.match(t),c=r?r[0]:"/";return l.replace(c,"/"+i+"/").replace(/\/$/,"")}return"/"+i};return a.jsx("ul",{className:"navbar-nav",children:a.jsxs("li",{className:"nav-item dropdown",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:e.languageName(e.language)}),a.jsx("ul",{className:"dropdown-menu dropdown-menu-end fade-down",children:n.map(i=>a.jsx("li",{hidden:e.language==i,children:a.jsx("a",{className:"nav-link dropdown-item",href:d(i),children:e.languageName(i)})},"nav-lang-link-"+i))})]})})}const h=[{key:"vitamin",labelKey:"VITAMIN.HEAD"},{key:"bodysize",labelKey:"SIZE.HEAD"},{key:"bodymass",labelKey:"MASS.HEAD"},{key:"waistline",labelKey:"WAIST.HEAD"},{key:"bodyzinc",labelKey:"ZINC.HEAD"},{key:"emotion",labelKey:"EMOTION.HEAD"},{key:"electrolyte",labelKey:"ELECTROLYTE.HEAD"}];function g(){return a.jsx("nav",{className:"ms-navbar navbar-expand-lg",children:a.jsxs("div",{className:"ms-s-offset my-0",children:[a.jsx("a",{className:"ms-navbar-brand",href:e.i18nLink("/"),children:a.jsx("img",{src:"/img/logo.svg",alt:s("ERROR.404_BTN"),className:"d-inline-block align-text-top"})}),a.jsx("button",{className:"navbar-toggler navbar-toggler-open",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:a.jsx("svg",{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:"#5396C6"})})}),a.jsxs("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[a.jsxs("ul",{className:"navbar-nav me-auto",children:[a.jsxs("li",{className:"nav-item dropdown ps-lg-5",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdownMain",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:s("NAV.ABOUT")}),a.jsxs("ul",{className:"dropdown-menu dropdown-menu-end fade-down","aria-labelledby":"navbarDropdownMain",children:[a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink("about"),children:s("ABOUT.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink("mission"),children:s("MISSION.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink("team"),children:s("TEAM.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink("careers"),children:s("CAREERS.HEAD")})}),a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink("privacy-policy"),children:s("PP.HEAD")})})]})]}),a.jsxs("li",{className:"nav-item dropdown ps-lg-5",children:[a.jsx("a",{className:"nav-link",href:"#",id:"navbarDropdownPages",role:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",children:s("NAV.APPS")}),a.jsx("ul",{className:"dropdown-menu dropdown-menu-end fade-down","aria-labelledby":"navbarDropdownPages",children:h.map(({key:n,labelKey:l})=>({key:n,text:s(l)})).sort((n,l)=>n.text.localeCompare(l.text)).map(({key:n,text:l})=>a.jsx("li",{children:a.jsx("a",{className:"nav-link dropdown-item",href:e.i18nLink(n),children:l})},n))})]})]}),p()]})]})})}const b={title:"Organism"},o=()=>a.jsx("section",{children:a.jsx(g,{})});o.decorators=[m];o.storyName="Navigation Bar";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{o as NavigationBarStory,b as default};
