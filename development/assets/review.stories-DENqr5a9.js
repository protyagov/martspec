import{r as d,j as e,L as l,_ as o}from"./index-BHT3Mvc-.js";import{a as E}from"./app-ids-CkH1oDs0.js";import{g as f,v as u,s as p}from"./SortService-CAdaoZ_i.js";import{u as j,R as C}from"./review-context-Blh947f-.js";import{R as m}from"./review-head-l3-gE1fD.js";import{R as w}from"./review-description-CDiNeoKO.js";import{R as L}from"./review-card-mcbvoGAV.js";import{R as D,S as _,A as R}from"./review-link-DXiLtnRR.js";import"./star-icon-4dJhL_Vy.js";import"./right-arrow-icon-C6XWK5tP.js";import"./text-link-arrow-Pb2gW33u.js";const v=i=>{const[a,t]=d.useState(!1);return d.useEffect(()=>{t(window.matchMedia(i).matches)},[]),d.useEffect(()=>{const s=window.matchMedia(i),n=r=>t(r.matches);return s.addEventListener("change",n),()=>s.removeEventListener("change",n)},[]),a},I=({codes:i,arrLength:a=3,appId:t})=>{const[s,n]=d.useState(null);return d.useEffect(()=>{f({appId:t,countryCode:i.countryCode||"us"}).then(r=>u({reviewData:r.feed.entry,arrLength:a})).then(r=>p({validatedData:r,lang:i.languageCode||"en"})).then(r=>n(r)).catch(()=>u({reviewData:[],arrLength:a}).then(r=>n(r)))},[]),{reviews:s}};function g({head:i,description:a,link:t,slider:s}){return e.jsxs(h,{children:[e.jsxs("header",{className:"review__header",children:[i,t]}),a,s]})}function y({head:i,description:a,link:t,slider:s}){return e.jsxs(h,{children:[e.jsx("header",{className:"review__header",children:i}),a,s,e.jsx("footer",{className:"review__link-wrapper pt-4",children:t})]})}function h({children:i}){return e.jsx("section",{children:e.jsx("div",{className:"row review py-5",children:i})})}function x(){const{data:i,text:a}=j();return e.jsx("ul",{className:"review__list",children:i.reviews.map((t,s)=>"filler"in t?e.jsx(D,{link:e.jsx(_,{}),posIndex:s},a.fillerCard.head[s]):e.jsx(L,{createdDate:t.updated.label,reviewText:t.content.label,reviewerNickname:t.author.name.label,rating:t["im:rating"].label},t.id.label))})}const A=992,k=1400;function N({text:i,appId:a,codes:t}){const s=v(`(max-width: ${A}px)`),n=v(`(max-width: ${k}px)`),r=s?1:n?2:3,{reviews:c}=I({codes:t,arrLength:r,appId:a});return!c||!a?e.jsx(e.Fragment,{}):e.jsx(C.Provider,{value:{data:{reviews:c.slice(0,r),appId:a,countryCode:t.countryCode},text:i},children:s?e.jsx(y,{head:e.jsx(m,{}),description:e.jsx(w,{}),link:e.jsx(R,{}),slider:e.jsx(x,{})}):e.jsx(g,{head:e.jsx(m,{}),description:e.jsx(w,{}),link:e.jsx(R,{}),slider:e.jsx(x,{})})})}const Q={title:"Prototype"},S=()=>e.jsx(N,{appId:E.vitamin,codes:{countryCode:l.countryCode,languageCode:l.language},text:{head:o("REVIEW.HEAD"),description:o("REVIEW.DESCRIPTION"),link:o("REVIEW.LINK_ALL_REVIEWS"),fillerCard:{head:[o("REVIEW.FILLER_CARD.HEAD1"),o("REVIEW.FILLER_CARD.HEAD2"),o("REVIEW.FILLER_CARD.HEAD3")],link:o("REVIEW.FILLER_CARD.LINK")}}});S.storyName="Review";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as ReviewStory,Q as default};
