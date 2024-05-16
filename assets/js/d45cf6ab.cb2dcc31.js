"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[97820],{61248:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=s(17624),d=s(4552);const t={sidebar_position:29},r="Get user by ID",a={id:"api-guide/cs-admin-rest-api/get-user-by-id",title:"Get user by ID",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-user-by-id.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-user-by-id",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-user-by-id",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-user-by-id.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:29,frontMatter:{sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"Get all users",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-users"},next:{title:"Create user",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/create-user"}},l={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"get-user-by-id",children:"Get user by ID"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get a user's details."}),"\n",(0,i.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/users/{id}"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description/Comments"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ID"}),(0,i.jsxs)(n.td,{children:["(string) User's ID. Can be retrieved via ",(0,i.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-users",children:"Get all users"})," or ",(0,i.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-group-users",children:"Get group's users"}),"."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(n.p,{children:"Example header format:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'{\n    "Id": 14,\n    "Sid": "02358185-f2a7-465f-8d05-6052590896e2",\n    "Username": "john m",\n    "Email": "john@example.com",\n    "IsActive": true,\n    "IsAdmin": true,\n    "GroupIds": [\n        -1,\n        1\n    ],\n    "TimeZoneInfoId": "Israel Standard Time",\n    "MaxReservationDuration": 1,\n    "MaxConcurrentReservations": 2,\n    "MaxScheduledSandboxes": 2,\n    "MaxOwnedBlueprints": 2,\n    "MaxSavedSandboxes": 0,\n    "DomainRoles": [\n        {\n            "DomainId": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n            "role": "SystemAdmin"\n        },\n        {\n            "DomainId": "357ff49d-4ffd-4b3e-bc07-041dd4fd0f33",\n            "role": "SystemAdmin"\n        },\n        {\n            "DomainId": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n            "role": "SystemAdmin"\n        },\n        {\n            "DomainId": "134b19d4-6c56-491d-b765-b61191c37f78",\n            "role": "SystemAdmin"\n        },\n        {\n            "DomainId": "dcd91805-4e1c-48a8-88c7-d9805e876783",\n            "role": "SystemAdmin"\n        },\n        {\n            "DomainId": "985c3306-fad7-4e85-a4e3-c44876149657",\n            "role": "SystemAdmin"\n        }\n    ],\n    "DomainName": null,\n    "ImportedSid": null\n}\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response code"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>r});var i=s(11504);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);