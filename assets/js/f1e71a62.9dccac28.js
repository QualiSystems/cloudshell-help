"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[91708],{64876:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=r(17624),t=r(4552);const i={sidebar_position:35},a="Import external users",l={id:"api-guide/cs-admin-rest-api/import-external-users",title:"Import external users",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/import-external-users.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/import-external-users",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/import-external-users",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/import-external-users.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:35,frontMatter:{sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Get users from an external group",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-users-from-an-external-group"},next:{title:"Get all license pools",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-license-pools"}},o={},d=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"import-external-users",children:"Import external users"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Import users from your active directory/LDAP into CloudShell."}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/users"})}),"\n",(0,s.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST"})}),"\n",(0,s.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(n.p,{children:"Example header format:"}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Request body"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UserName"}),(0,s.jsxs)(n.td,{children:["External user name. Can be retrieved via ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-users-from-an-external-group",children:"Get users from an external group"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"GroupName"}),(0,s.jsxs)(n.td,{children:["External group name. Can be retrieved via ",(0,s.jsx)(n.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-external-groups",children:"Get all external groups"}),". ",(0,s.jsx)("br",{})," TIP: You should import by group name for larger organizations containing hundreds of users as importing all users may fail due to active directory/LDAP limitations."]})]})]})]})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Request example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "UserName": "James Porter",\n}\n'})}),(0,s.jsx)(n.p,{children:"By group name:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  "GroupName": "Azure_DevOps_Cloud_Admins"\n}\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n    "Users": [\n        {\n            "Id": 11,\n            "Sid": "750ad20a-ccf7-4185-a1d9-9202bd108f71",\n            "Username": "automationuser",\n            "Email": null,\n            "IsActive": true,\n            "IsAdmin": false,\n            "GroupIds": [\n                1\n            ],\n            "TimeZoneInfoId": null,\n            "MaxReservationDuration": 1440,\n            "MaxConcurrentReservations": 10,\n            "MaxScheduledSandboxes": 10,\n            "MaxOwnedBlueprints": 10,\n            "MaxSavedSandboxes": null,\n            "DomainRoles": [],\n            "DomainName": "QUALISYSTEMS",\n            "ImportedSid": "S-1-5-21-1487810946-2753822684-3978873285-7293"\n        }\n    ],\n    "Errors": []\n}\n'})})]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"Response code"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>a});var s=r(11504);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);