"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[65960],{41944:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(17624),t=s(4552);const i={sidebar_position:14},l="Get all groups",o={id:"api-guide/cs-admin-rest-api/get-all-groups",title:"Get all groups",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-all-groups.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-all-groups",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-all-groups.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Remove resources from domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-resource-from-domain"},next:{title:"Add domains to group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-domains-to-group"}},a={},d=[{value:"Description",id:"description",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-all-groups",children:"Get all groups"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Gets a list of all groups in CloudShell."}),"\n",(0,r.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(n.p,{children:"GET"}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"URL"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"http://{Admin API IP}:{port#}/api/v1/groups\n"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(n.p,{children:"Example header format:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Query parameters"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.limit"}),(0,r.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,r.jsx)("br",{})," Default value : 50"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,r.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,r.jsx)("br",{})," Default value : Name"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,r.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,r.jsx)("br",{})," Default value : 1"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,r.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.filter"}),(0,r.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n    "Groups": [\n        {\n            "ParentIds": null,\n            "Sid": "fa414b79-174f-4906-9c95-976caf363864",\n            "Name": "System Administrators",\n            "Description": "Built in group, all members have administrative rights.",\n            "ViewOnly": false,\n            "groupType": "System",\n            "groupRole": "SystemAdmin",\n            "Id": -1\n        },\n        {\n            "ParentIds": null,\n            "Sid": "88fc9928-a1f3-45c3-99cd-45a46d256592",\n            "Name": "Everyone",\n            "Description": null,\n            "ViewOnly": false,\n            "groupType": "System",\n            "groupRole": "Regular",\n            "Id": 1\n        },\n        {\n            "ParentIds": null,\n            "Sid": "1c7a0c13-600e-43ae-ab2d-6f594e245912",\n            "Name": "domain admin",\n            "Description": null,\n            "ViewOnly": false,\n            "groupType": "UserDefined",\n            "groupRole": "DomainAdmin",\n            "Id": 2\n        },\n        {\n            "ParentIds": null,\n            "Sid": "a2bf342a-5883-4e1a-87a5-5bb6e13b421b",\n            "Name": "regular users",\n            "Description": null,\n            "ViewOnly": false,\n            "groupType": "UserDefined",\n            "groupRole": "Regular",\n            "Id": 3\n        }\n    ],\n    "Cursor": null\n}\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>l});var r=s(11504);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);