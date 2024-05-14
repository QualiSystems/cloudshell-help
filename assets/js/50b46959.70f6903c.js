"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[43688],{72320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(17624),t=s(4552);const i={sidebar_position:28},d="Get all users",l={id:"api-guide/cs-admin-rest-api/get-all-users",title:"Get all users",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-all-users.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-all-users",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-users",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-all-users.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"tutorialSidebar",previous:{title:"Remove users from group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-users-from-group"},next:{title:"Get user by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-user-by-id"}},a={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-all-users",children:"Get all users"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Gets a list of all users in CloudShell."}),"\n",(0,r.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/users"})}),"\n",(0,r.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET"})}),"\n",(0,r.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(n.p,{children:"Example header format:"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Query parameters"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.limit"}),(0,r.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,r.jsx)("br",{})," Default value : 50"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,r.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,r.jsx)("br",{})," Default value : Name"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,r.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,r.jsx)("br",{})," Default value : 1"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,r.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paginationProperties.filter"}),(0,r.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'{\n    "Users": [\n        {\n            "Id": 1,\n            "Sid": "71afdb5c-d479-43a4-993d-0e01d77d02ac",\n            "Username": "admin",\n            "Email": null,\n            "IsActive": true,\n            "IsAdmin": true,\n            "GroupIds": [\n                -1,\n                1\n            ],\n            "TimeZoneInfoId": "Israel Standard Time",\n            "MaxReservationDuration": null,\n            "MaxConcurrentReservations": null,\n            "MaxScheduledSandboxes": null,\n            "MaxOwnedBlueprints": null,\n            "MaxSavedSandboxes": null,\n            "DomainRoles": [\n                {\n                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "134b19d4-6c56-491d-b765-b61191c37f78",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",\n                    "role": "SystemAdmin"\n                },\n                {\n                    "DomainId": "985c3306-fad7-4e85-a4e3-c44876149657",\n                    "role": "SystemAdmin"\n                }\n            ],\n            "DomainName": null,\n            "ImportedSid": null\n        },\n        {\n            "Id": 4,\n            "Sid": "93f41a86-946b-4e96-b8f1-1af642e000f0",\n            "Username": "john",\n            "Email": "",\n            "IsActive": true,\n            "IsAdmin": false,\n            "GroupIds": [\n                1,\n                3\n            ],\n            "TimeZoneInfoId": "Israel Standard Time",\n            "MaxReservationDuration": null,\n            "MaxConcurrentReservations": 100,\n            "MaxScheduledSandboxes": 10000,\n            "MaxOwnedBlueprints": null,\n            "MaxSavedSandboxes": 20,\n            "DomainRoles": [\n                {\n                    "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",\n                    "role": "Regular"\n                },\n                {\n                    "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n                    "role": "Regular"\n                }\n            ],\n            "DomainName": null,\n            "ImportedSid": null\n        }\n    ],\n    "Cursor": null\n}\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>d});var r=s(11504);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);