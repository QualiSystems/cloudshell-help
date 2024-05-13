"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[59240],{73436:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=i(17624),s=i(4552);const r={sidebar_position:11},d="Get domain's groups",o={id:"api-guide/cs-admin-rest-api/get-domain-groups",title:"Get domain's groups",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-domain-groups.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-domain-groups",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-groups",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-domain-groups.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Remove blueprints from domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-blueprint-from-domain"},next:{title:"Add groups to domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-groups-to-domain"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-domains-groups",children:"Get domain's groups"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Gets a list of all groups in a given domain."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID"}),(0,t.jsxs)(n.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Query parameters"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.limit"}),(0,t.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,t.jsx)("br",{})," Default value : 50"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,t.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,t.jsx)("br",{})," Default value : Name"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,t.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,t.jsx)("br",{})," Default value : 1"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,t.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.filter"}),(0,t.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "Groups": [\n        {\n            "ParentIds": null,\n            "Sid": "00000000-0000-0000-0000-000000000000",\n            "Name": "System Administrators",\n            "Description": "Built in group, all members have administrative rights.",\n            "ViewOnly": false,\n            "groupType": "System",\n            "groupRole": "SystemAdmin",\n            "Id": -1\n        },\n        {\n            "ParentIds": null,\n            "Sid": "00000000-0000-0000-0000-000000000000",\n            "Name": "domain admin",\n            "Description": null,\n            "ViewOnly": false,\n            "groupType": "UserDefined",\n            "groupRole": "DomainAdmin",\n            "Id": 2\n        },\n        {\n            "ParentIds": null,\n            "Sid": "00000000-0000-0000-0000-000000000000",\n            "Name": "view-only",\n            "Description": null,\n            "ViewOnly": true,\n            "groupType": "UserDefined",\n            "groupRole": "DomainAdmin",\n            "Id": 5\n        }\n    ],\n    "Cursor": null\n}\n'})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>d});var t=i(11504);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);