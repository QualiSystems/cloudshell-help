"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5376],{86752:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=s(17624),t=s(4552);const r={sidebar_position:38},o="Create license pool",l={id:"api-guide/cs-admin-rest-api/create-license-pool",title:"Create license pool",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/create-license-pool.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/create-license-pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-license-pool",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/create-license-pool.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:38,frontMatter:{sidebar_position:38},sidebar:"tutorialSidebar",previous:{title:"Get license pool by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-license-pool-by-id"},next:{title:"Edit license pool",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-license-pool"}},c={},d=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-license-pool",children:"Create license pool"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Creates a new license pool in CloudShell."}),"\n",(0,i.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/licensepools"})}),"\n",(0,i.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(n.p,{children:"Example header format:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsx)(n.td,{children:"(bool) License pool name."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"(string) License pool's password"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MaxConcurrentReservation"}),(0,i.jsx)(n.td,{children:"(int) Maximum number of licenses (sandbox reservations) allowed by the license pool."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Domains"}),(0,i.jsx)(n.td,{children:"(string) List of domain ids to add the license pool to."})]})]})]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n    "Name": "NY license pool",\n    "Description": "License pool for New York team",\n    "MaxConcurrentReservation": 10,\n    "Domains": ["2702ce9e-2db8-4b1d-94d6-1c4bf1b40267", "be342a7f-e2b8-45c6-9b32-0869b505029c"]\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n    "Name": "New York license pool",\n    "Description": "License pool for New York team",\n    "MaxConcurrentReservation": 10,\n    "Domains": [\n        "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n        "dcd91805-4e1c-48a8-88c7-d9805e876783"\n    ],\n    "CreateDate": "0001-01-01T00:00:00",\n    "Id": "18967cc7-f239-496c-a900-b04300a5dafc"\n}\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response code"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>o});var i=s(11504);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);