"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5364],{96884:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=i(17624),s=i(4552);const r={sidebar_position:3},l="Get all domains",d={id:"api-guide/cs-admin-rest-api/get-all-domains",title:"Get all domains",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-all-domains.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-all-domains",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-all-domains.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Administration API token",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-admin-api-token"},next:{title:"Create domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-domain"}},a={},o=[{value:"Description",id:"description",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"get-all-domains",children:"Get all domains"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Gets a list of all domains in CloudShell"}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:"GET"}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"URL"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"http://{Admin API IP}:{port#}/api/v1/domains\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Query parameters"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.limit"}),(0,t.jsxs)(n.td,{children:["(integer) Number of results to return per page. Can retrieve up to 250 results per page. Default if unspecified: 50. Optional. ",(0,t.jsx)("br",{})," Default value : 50"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-by"}),(0,t.jsxs)(n.td,{children:["(string) Field to use to sort the results. ",(0,t.jsx)("br",{})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.sort-order"}),(0,t.jsxs)(n.td,{children:["(integer) 1 for ascending, -1 for descending. Defaults to ascending. Optional. ",(0,t.jsx)("br",{})," Default value : 1"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.cursor"}),(0,t.jsx)(n.td,{children:"(string) When paging, the response will include a cursor field. Use the cursor to get next set of results. Optional."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paginationProperties.filter"}),(0,t.jsx)(n.td,{children:'(string) String to use to filter for domains containing this string. For example: "lab" would return lab1, testlab, olabo. Optional.'})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "Domains": [\n        {\n            "Id": "5c966733-c496-486d-8b1a-963c13e9a103",\n            "Archived": false,\n            "EndTime": null,\n            "LicensePoolId": null,\n            "Description": "New York team\'s domain",\n            "Name": "New York"\n        },\n        {\n            "Id": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575",\n            "Archived": false,\n            "EndTime": null,\n            "LicensePoolId": null,\n            "Description": "San Francisco team\'s domain",\n            "Name": "San Fran"\n        },\n        {\n            "Id": "dbaf480c-09f7-46d3-a2e2-e35d3e374a16",\n            "Archived": false,\n            "EndTime": null,\n            "LicensePoolId": null,\n            "Description": "Global domain",\n            "Name": "Global"\n        }\n    ],\n    "Cursor": null\n}\n'})})]}),"\n",(0,t.jsx)(i,{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("summary",{children:"Response example"}),"\n200"]})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>d,M:()=>l});var t=i(11504);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);