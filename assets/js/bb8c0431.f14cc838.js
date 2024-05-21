"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34412],{91408:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var r=n(17624),i=n(4552);const d={sidebar_position:15},t="Add resources to domain",o={id:"api-guide/cs-admin-rest-api/add-resource-to-domain",title:"Add resources to domain",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-resource-to-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-resource-to-domain",permalink:"/api-guide/cs-admin-rest-api/add-resource-to-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-resource-to-domain.md",tags:[],version:"2023.3",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Get domain's resources",permalink:"/api-guide/cs-admin-rest-api/get-domain-resources"},next:{title:"Remove resources from domain",permalink:"/api-guide/cs-admin-rest-api/remove-resource-from-domain"}},a={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"add-resources-to-domain",children:"Add resources to domain"}),"\n",(0,r.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Add resources from other domains to a give domain."}),"\n",(0,r.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/resources"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ID"}),(0,r.jsxs)(s.td,{children:["(string) Domain's id. Can be retrieved via ",(0,r.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"POST"})}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(s.p,{children:"Example header format:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request body"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsxs)(s.td,{children:["(string) Resource id. Can be retrieved via ",(0,r.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-domain-resources",children:"Get domain's resources"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"IncludeDescendants"}),(0,r.jsxs)(s.td,{children:["(bool) (Optional) Include sub-resources in the domain. Default is ",(0,r.jsx)(s.strong,{children:"true"}),"."]})]})]})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request example"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'{\n\n  "Resources": [\n    {\n      "Id": "6deda6fb-8f56-4c12-ac29-00b3fb7756db",\n      "IncludeDescendants": true\n\t}\n  ]\n}\n'})})]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>t});var r=n(11504);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);