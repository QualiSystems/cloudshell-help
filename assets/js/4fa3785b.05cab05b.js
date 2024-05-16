"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[7442],{12300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=s(17624),i=s(4552);const r={sidebar_position:36},l="Get all license pools",o={id:"api-guide/cs-admin-rest-api/get-all-license-pools",title:"Get all license pools",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-all-license-pools.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-all-license-pools",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-license-pools",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-all-license-pools.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"Import external users",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/import-external-users"},next:{title:"Get license pool by ID",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-license-pool-by-id"}},d={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-all-license-pools",children:"Get all license pools"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Gets a list of all license pools in CloudShell."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/licensepools"})}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Query parameters"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.limit"}),(0,t.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,t.jsx)("br",{})," Default value : 50"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,t.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,t.jsx)("br",{})," Default value : Name"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,t.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,t.jsx)("br",{})," Default value : 1"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,t.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.filter"}),(0,t.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "LicensePools": [\n        {\n            "Name": "SF license pool",\n            "Description": "License pool for San Francisco domain",\n            "MaxConcurrentReservation": 15,\n            "Domains": [\n                "8cd12c8d-6d40-4dfd-89da-a8d8dde00575"\n            ],\n            "CreateDate": "2023-07-18T06:59:07",\n            "Id": "a4ba81df-ead7-487b-b684-b04300a48e69"\n        },\n        {\n            "Name": "NY license pool",\n            "Description": "License pool for New York domain",\n            "MaxConcurrentReservation": 10,\n            "Domains": [\n                "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33"\n            ],\n            "CreateDate": "2023-07-18T06:55:55",\n            "Id": "a48d85a0-6332-445b-bf03-b04300a3ac9d"\n        }\n    ],\n    "Cursor": "TXkgbGljZW5zZSBwb29s"\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var t=s(11504);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);