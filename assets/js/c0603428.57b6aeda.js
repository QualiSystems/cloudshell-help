"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[21416],{35492:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=s(17624),i=s(4552);const t={sidebar_position:14},a="Get domain's resources",d={id:"api-guide/cs-admin-rest-api/get-domain-resources",title:"Get domain's resources",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-domain-resources.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-domain-resources",permalink:"/api-guide/cs-admin-rest-api/get-domain-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-domain-resources.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Remove groups from domain",permalink:"/api-guide/cs-admin-rest-api/remove-groups-from-domain"},next:{title:"Add resources to domain",permalink:"/api-guide/cs-admin-rest-api/add-resource-to-domain"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-domains-resources",children:"Get domain's resources"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Gets a list of all resources (and sub-resources) in a domain."}),"\n",(0,r.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/resources"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ID"}),(0,r.jsxs)(n.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,r.jsx)(n.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET"})}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(n.p,{children:"Example header format:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Query parameters"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.limit"}),(0,r.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,r.jsx)("br",{})," Default value : 50"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,r.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,r.jsx)("br",{})," Default value : Name"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,r.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,r.jsx)("br",{})," Default value : 1"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,r.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.filter"}),(0,r.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n    "Resources": [        \n        {\n            "FullPath": "Bridge1",\n            "FullName": "Bridge1",\n            "IsExcluded": false,\n            "reservedStatus": "Available",\n            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",\n            "Name": "CDS_OPS_Bridgit10",\n            "Description": "",\n            "Type": "LabResource",\n            "ModificationDate": "2021-01-31T12:10:52",\n            "CreateDate": "2021-01-31T12:10:52",\n            "Version": 4,\n            "Id": "3063656e-52ba-4760-962a-0609006f54f8"\n        },\n        {\n            "FullPath": "Bridge1/Jack1",\n            "FullName": "Bridge1/Jack1",\n            "IsExcluded": false,\n            "reservedStatus": "Available",\n            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",\n            "Name": "PPJackVLb14",\n            "Description": "",\n            "Type": "LabResource",\n            "ModificationDate": "2021-01-31T12:10:21",\n            "CreateDate": "2021-01-31T12:10:21",\n            "Version": 33,\n            "Id": "4bcb852a-f4bf-4ab2-97db-02b1fec07733"\n        },\n        {\n            "FullPath": "Bridge1/Jack2",\n            "FullName": "Bridge1/Jack2",\n            "IsExcluded": false,\n            "reservedStatus": "Available",\n            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",\n            "Name": "PPJackVLb14",\n            "Description": "",\n            "Type": "LabResource",\n            "ModificationDate": "2021-01-31T12:10:21",\n            "CreateDate": "2021-01-31T12:10:21",\n            "Version": 33,\n            "Id": "f3c8ed5e-d76f-4b5f-9548-7d37a2f387a4"\n        },\n        {\n            "FullPath": "Bridge1/Jack3",\n            "FullName": "Bridge1/Jack3",\n            "IsExcluded": false,\n            "reservedStatus": "Available",\n            "ParentId": "0e951eff-0530-42aa-913e-cd27b3a2ebc7",\n            "Name": "PPJackVLb14",\n            "Description": "",\n            "Type": "LabResource",\n            "ModificationDate": "2021-01-31T12:10:21",\n            "CreateDate": "2021-01-31T12:10:21",\n            "Version": 33,\n            "Id": "ccf544fa-070a-4157-8a37-07b1ba12aaf8"\n        },\n    ],\n    "Cursor": "100"\n}\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>a});var r=s(11504);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);