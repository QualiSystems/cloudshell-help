"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[34572],{11276:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(17624),d=i(4552);const r={sidebar_position:12},t="Add groups to domain",o={id:"api-guide/cs-admin-rest-api/add-groups-to-domain",title:"Add groups to domain",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-groups-to-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-groups-to-domain",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/add-groups-to-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-groups-to-domain.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Get domain's groups",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-domain-groups"},next:{title:"Remove groups from domain",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/remove-groups-from-domain"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.M)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"add-groups-to-domain",children:"Add groups to domain"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Adds one or more groups to a given domain."}),"\n",(0,n.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ID"}),(0,n.jsxs)(s.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,n.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"POST"})}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(s.p,{children:"Example header format:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Request body"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Id"}),(0,n.jsxs)(s.td,{children:["(string) Group id. Can be retrieved via ",(0,n.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ViewOnly"}),(0,n.jsx)(s.td,{children:'(bool) Specify true to add the group with "view only" permissions.'})]})]})]})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n  "Groups": [\n    {\n      "Id": 1,\n      "ViewOnly": false\n    }\n  ]\n}\n'})})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,d.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,s,i)=>{i.d(s,{I:()=>o,M:()=>t});var n=i(11504);const d={},r=n.createContext(d);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);