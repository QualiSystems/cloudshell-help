"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[22124],{79396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(17624),l=n(4552),r=n(96788),i=n(79940);const o={},a="Useful CloudShell Automation API Code Examples",c={id:"devguide/available-cs-api/useful-cs-api-examples/index",title:"Useful CloudShell Automation API Code Examples",description:"This section provides different code examples that can be used for reference.",source:"@site/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/index.mdx",sourceDirName:"devguide/available-cs-api/useful-cs-api-examples",slug:"/devguide/available-cs-api/useful-cs-api-examples/",permalink:"/devguide/available-cs-api/useful-cs-api-examples/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/devguide/available-cs-api/useful-cs-api-examples/index.mdx",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automating CloudShell Sandboxes for DevOps",permalink:"/devguide/available-cs-api/automate-cs-sandboxes-for-devops"},next:{title:"Starting an API Session Outside of CloudShell",permalink:"/devguide/available-cs-api/useful-cs-api-examples/start-api-outside-cs"}},u={},d=[];function p(e){const t={h1:"h1",p:"p",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"useful-cloudshell-automation-api-code-examples",children:"Useful CloudShell Automation API Code Examples"}),"\n",(0,s.jsx)(t.p,{children:"This section provides different code examples that can be used for reference."}),"\n","\n",(0,s.jsx)(r.c,{items:(0,i.wt)().items})]})}function m(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},96788:(e,t,n)=>{n.d(t,{c:()=>v});n(11504);var s=n(65456),l=n(79940),r=n(10867),i=n(95944),o=n(18136),a=n(84357),c=n(56448);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(17624);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(r.c,{href:t,className:(0,s.c)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:l,description:r}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(c.c,{as:"h2",className:(0,s.c)("text--truncate",u.cardTitle),title:l,children:[n," ",l]}),r&&(0,d.jsx)("p",{className:(0,s.c)("text--truncate",u.cardDescription),title:r,children:r})]})}function f(e){let{item:t}=e;const n=(0,l.Gw)(t),s=function(){const{selectMessage:e}=(0,i.A)();return t=>e(t,(0,a.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,o.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,l._4)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,l.wt)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const r=(0,l.ML)(t);return(0,d.jsx)("section",{className:(0,s.c)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},95944:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(11504),l=n(28264);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,l.c)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return s[Math.min(r,s.length-1)]}(n,t,e)}}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>i});var s=n(11504);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);