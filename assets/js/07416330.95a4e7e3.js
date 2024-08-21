"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[90601],{58003:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=r(74848),i=r(28453);const d={sidebar_position:25},t="Get group's users",a={id:"api-guide/cs-admin-rest-api/get-group-users",title:"Get group's users",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-group-users.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-group-users",permalink:"/2023.3/api-guide/cs-admin-rest-api/get-group-users",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-group-users.md",tags:[],version:"2023.3",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Remove domains from group",permalink:"/2023.3/api-guide/cs-admin-rest-api/remove-domains-from-group"},next:{title:"Add users to group",permalink:"/2023.3/api-guide/cs-admin-rest-api/add-users-to-group"}},o={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"get-groups-users",children:"Get group's users"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Gets a list of all users in a given domain."}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ID"}),(0,s.jsxs)(n.td,{children:["(string) Group's ID. Can be retrieved via ",(0,s.jsx)(n.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,s.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(n.p,{children:"Example header format:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Query parameters"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paginationProperties.limit"}),(0,s.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,s.jsx)("br",{})," Default value : 50"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,s.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,s.jsx)("br",{})," Default value : Name"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,s.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,s.jsx)("br",{})," Default value : 1"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,s.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"paginationProperties.filter"}),(0,s.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n    "Users": [\n        {\n            "Id": 1,\n            "Sid": "71afdb5c-d479-43a4-993d-0e01d77d02ac",\n            "Username": "admin",\n            "Email": null,\n            "IsActive": true,\n            "IsAdmin": true,\n            "GroupIds": [\n                -1,\n                1\n            ],\n            "TimeZoneInfoId": "Israel Standard Time",\n            "MaxReservationDuration": null,\n            "MaxConcurrentReservations": null,\n            "MaxScheduledSandboxes": null,\n            "MaxOwnedBlueprints": null,\n            "MaxSavedSandboxes": null,\n            "DomainRoles": [\n                {\n                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "134b19d4-6c56-491d-b765-b61191c37f78",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "985c3306-fad7-4e85-a4e3-c44876149657",\n                    "role": "SystemAdmin"\n                }\n            ],\n            "DomainName": null,\n            "ImportedSid": null\n        },\n        {\n            "Id": 4,\n            "Sid": "93f41a86-946b-4e96-b8f1-1af642e000f0",\n            "Username": "john",\n            "Email": "",\n            "IsActive": true,\n            "IsAdmin": false,\n            "GroupIds": [\n                1,\n                3\n            ],\n            "TimeZoneInfoId": "Israel Standard Time",\n            "MaxReservationDuration": null,\n            "MaxConcurrentReservations": 100,\n            "MaxScheduledSandboxes": 10000,\n            "MaxOwnedBlueprints": null,\n            "MaxSavedSandboxes": 20,\n            "DomainRoles": [\n                {\n                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n                    "role": "Regular"\n                }\n            ],\n            "DomainName": null,\n            "ImportedSid": null\n        }\n    ],\n    "Cursor": null\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Response code"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(96540);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);