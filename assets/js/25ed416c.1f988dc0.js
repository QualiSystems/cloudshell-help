"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[74319],{93050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=i(74848),s=i(28453);const t={sidebar_position:10},d="Remove blueprints from domain",o={id:"api-guide/cs-admin-rest-api/remove-blueprint-from-domain",title:"Remove blueprints from domain",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-blueprint-from-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-blueprint-from-domain",permalink:"/2023.3/api-guide/cs-admin-rest-api/remove-blueprint-from-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-blueprint-from-domain.md",tags:[],version:"2023.3",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Add blueprints to domain",permalink:"/2023.3/api-guide/cs-admin-rest-api/add-blueprints-to-domain"},next:{title:"Get domain's groups",permalink:"/2023.3/api-guide/cs-admin-rest-api/get-domain-groups"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"remove-blueprints-from-domain",children:"Remove blueprints from domain"})}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Removes one or more blueprints from a domain."}),"\n",(0,r.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/blueprint"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsxs)(n.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,r.jsx)(n.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"DELETE"})}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(n.p,{children:"Example header format:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Request body"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Id"}),(0,r.jsxs)(n.td,{children:["(string) Blueprint's id. Can be retrieved via ",(0,r.jsx)(n.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-domain-blueprints",children:"Get domain's blueprints"}),"."]})]})})]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Request example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n  "Blueprints": [\n    {\n      "Id": "369960ab-68ff-4fdc-bf02-054a96879812"\n    },\n    {\n      "Id": "a0cd0b72-8ed6-41a8-a460-0ab6253aa6af"\n    }\n  ]\n}\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);