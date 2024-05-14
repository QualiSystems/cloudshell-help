"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56268],{82268:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(17624),n=s(4552);const i={sidebar_position:33},l="Get all external groups",o={id:"api-guide/cs-admin-rest-api/get-all-external-groups",title:"Get all external groups",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-all-external-groups.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-all-external-groups",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-external-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-all-external-groups.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"Delete user",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-user"},next:{title:"Get users from an external group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-users-from-an-external-group"}},a={},d=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"get-all-external-groups",children:"Get all external groups"}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get all external groups from your active directory/LDAP."}),"\n",(0,r.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"http://{Admin API IP}:{port#}/api/v1/integrations/IdentityManagement/groups"})}),"\n",(0,r.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"GET"})}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(t.p,{children:"Example header format:"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Query parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paginationProperties.limit"}),(0,r.jsxs)(t.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,r.jsx)("br",{})," Default value : 50"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paginationProperties.sort-by"}),(0,r.jsxs)(t.td,{children:["(string) Field to use to sort the results. ",(0,r.jsx)("br",{})," Default value : Name"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paginationProperties.sort-order"}),(0,r.jsxs)(t.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,r.jsx)("br",{})," Default value : 1"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paginationProperties.cursor"}),(0,r.jsx)(t.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"paginationProperties.filter"}),(0,r.jsx)(t.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'{\n    "Groups": [\n        {\n            "Name": "Administrators",\n            "DistinguishedName": "CN=Administrators,CN=Builtin,DC=qualisystems,DC=local"\n        },\n        {\n            "Name": "ADSyncAdmins",\n            "DistinguishedName": "CN=ADSyncAdmins,CN=Users,DC=qualisystems,DC=local"\n        },\n        {\n            "Name": "Azure_DevOps_Cloud_Admins",\n            "DistinguishedName": "CN=Azure_DevOps_Cloud_Admins,OU=00.00.Quali.Azure.Security.Groups,OU=00.00.Microsoft-Azure,OU=00.00.Cloud.Services,OU=00.QUALI.WW.DATA.CENTERS,DC=qualisystems,DC=local"\n        }\n    ],\n    "Cursor": "QXp1cmVfRGV2T3BzX0Nsb3VkX0FkbWlucw=="\n}\n'})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function u(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,t,s)=>{s.d(t,{I:()=>o,M:()=>l});var r=s(11504);const n={},i=r.createContext(n);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);