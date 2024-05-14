"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[98332],{66780:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(17624),t=r(4552);const i={sidebar_position:34},a="Get users from an external group",l={id:"api-guide/cs-admin-rest-api/get-users-from-an-external-group",title:"Get users from an external group",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-users-from-an-external-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-users-from-an-external-group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-users-from-an-external-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-users-from-an-external-group.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:34,frontMatter:{sidebar_position:34},sidebar:"tutorialSidebar",previous:{title:"Get all external groups",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-external-groups"},next:{title:"Import external users",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/import-external-users"}},o={},d=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function u(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"get-users-from-an-external-group",children:"Get users from an external group"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Get users from a group in your active directory/LDAP."}),"\n",(0,n.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/groups/{groupName}/users"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"groupName"}),(0,n.jsxs)(s.td,{children:["Name of the group (e.g. \u201cAzure_DevOps_Cloud_Admins\u201d). Can be retrieved via ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-external-groups",children:"Get all external groups"}),"."]})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET"})}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(s.p,{children:"Example header format:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Query parameters"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"paginationProperties.limit"}),(0,n.jsxs)(s.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,n.jsx)("br",{})," Default value : 50"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"paginationProperties.sort-by"}),(0,n.jsx)(s.td,{children:"(string) Field to use to sort the results. Default value : Name"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"paginationProperties.sort-order"}),(0,n.jsxs)(s.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,n.jsx)("br",{})," Default value : 1"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"paginationProperties.cursor"}),(0,n.jsx)(s.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"paginationProperties.filter"}),(0,n.jsx)(s.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n    "Users": [\n        {\n            "Id": "S-1-5-21-1487810946-2753822684-3978873285-7489",\n            "Username": "user1.s",\n            "DisplayName": "user1",\n            "DistinguishedName": "CN=user1 Vlasenko,OU=00.05.Quali-IL-Ops.And.IT,OU=00.00.Quali-IL-Departments,OU=00.00.Petah-Tikva,OU=00.00.Quali-IL,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",\n            "Email": "user1@quali.com",\n            "DomainName": "QUALISYSTEMS"\n        },\n        {\n            "Id": "S-1-5-21-1487810946-2753822684-3978873285-11090",\n            "Username": "user2.j",\n            "DisplayName": "user2",\n            "DistinguishedName": "CN=user2 Castro,OU=00.08.Quali-US.Texas-Ops.And.IT,OU=00.00.Quali-US.Texas-Departments,OU=00.00.Quali-US.Texas,OU=00.01.Quali-US,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",\n            "Email": "user2@quali.com",\n            "DomainName": "QUALISYSTEMS"\n        },\n        {\n            "Id": "S-1-5-21-1487810946-2753822684-3978873285-22202",\n            "Username": "user3.h",\n            "DisplayName": "user 3",\n            "DistinguishedName": "CN=user3 Poldian,OU=00.05.Quali-IL-Ops.And.IT,OU=00.00.Quali-IL-Departments,OU=00.00.Petah-Tikva,OU=00.00.Quali-IL,OU=03.QUALI.WW.CORPORATE.ORGANIZATION,DC=qualisystems,DC=local",\n            "Email": "user3.p@quali.com",\n            "DomainName": "QUALISYSTEMS"\n        }\n    ],\n    "Cursor": null\n}\n\n\n'})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function c(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>l,M:()=>a});var n=r(11504);const t={},i=n.createContext(t);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);