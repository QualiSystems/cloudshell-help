"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20268],{47620:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var s=n(17624),r=n(4552);const d={sidebar_position:23},t="Add domains to group",o={id:"api-guide/cs-admin-rest-api/add-domains-to-group",title:"Add domains to group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-domains-to-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-domains-to-group",permalink:"/api-guide/cs-admin-rest-api/add-domains-to-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-domains-to-group.md",tags:[],version:"2023.3",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"Get group's domains",permalink:"/api-guide/cs-admin-rest-api/get-group-domains"},next:{title:"Remove domains from group",permalink:"/api-guide/cs-admin-rest-api/remove-domains-from-group"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"add-domains-to-group",children:"Add domains to group"}),"\n",(0,s.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Adds one or more domains to a given group."}),"\n",(0,s.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/domain"})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Parameter"}),(0,s.jsx)(i.th,{children:"Description/Comments"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"ID"}),(0,s.jsxs)(i.td,{children:["(string) Group's ID. Can be retrieved via ",(0,s.jsx)(i.a,{href:"/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"POST"})}),"\n",(0,s.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(i.p,{children:"Example header format:"}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request body"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Parameter"}),(0,s.jsx)(i.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Id"}),(0,s.jsxs)(i.td,{children:["(string) Domain ids. Can be retrieved via ",(0,s.jsx)(i.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"ViewOnly"}),(0,s.jsx)(i.td,{children:'(bool) Specify true to add the group with "view only" permissions.'})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request example"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'{\n  "Domains": [\n    {\n      "Id": "domain1 id"\n    },\n    {\n      "Id": "domain2 id"\n    }\n  ],\n  "ViewOnly": true\n}\n'})})]}),"\n",(0,s.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response code"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function p(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>t});var s=n(11504);const r={},d=s.createContext(r);function t(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);