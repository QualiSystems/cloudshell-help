"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34572],{11276:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=s(17624),r=s(4552);const d={sidebar_position:12},t="Add groups to domain",o={id:"api-guide/cs-admin-rest-api/add-groups-to-domain",title:"Add groups to domain",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-groups-to-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-groups-to-domain",permalink:"/api-guide/cs-admin-rest-api/add-groups-to-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-groups-to-domain.md",tags:[],version:"2023.3",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Get domain's groups",permalink:"/api-guide/cs-admin-rest-api/get-domain-groups"},next:{title:"Remove groups from domain",permalink:"/api-guide/cs-admin-rest-api/remove-groups-from-domain"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"add-groups-to-domain",children:"Add groups to domain"}),"\n",(0,n.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(i.p,{children:"Adds one or more groups to a given domain."}),"\n",(0,n.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description/Comments"})]})}),(0,n.jsx)(i.tbody,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ID"}),(0,n.jsxs)(i.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,n.jsx)(i.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,n.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"POST"})}),"\n",(0,n.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(i.p,{children:"Example header format:"}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Request body"}),(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Parameter"}),(0,n.jsx)(i.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"Id"}),(0,n.jsxs)(i.td,{children:["(string) Group id. Can be retrieved via ",(0,n.jsx)(i.a,{href:"/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"ViewOnly"}),(0,n.jsx)(i.td,{children:'(bool) Specify true to add the group with "view only" permissions.'})]})]})]})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:'{\n  "Groups": [\n    {\n      "Id": 1,\n      "ViewOnly": false\n    }\n  ]\n}\n'})})]}),"\n",(0,n.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:i}={...(0,r.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,i,s)=>{s.d(i,{I:()=>o,M:()=>t});var n=s(11504);const r={},d=n.createContext(r);function t(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);