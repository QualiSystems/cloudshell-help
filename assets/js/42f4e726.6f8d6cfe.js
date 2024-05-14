"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69264],{47700:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=n(17624),i=n(4552);const d={sidebar_position:24},t="Remove domains from group",o={id:"api-guide/cs-admin-rest-api/remove-domains-from-group",title:"Remove domains from group",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/remove-domains-from-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-domains-from-group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-domains-from-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/remove-domains-from-group.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Add domains to group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-domains-to-group"},next:{title:"Get group's users",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-users"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"remove-domains-from-group",children:"Remove domains from group"}),"\n",(0,r.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Removes one or more domains from a given group."}),"\n",(0,r.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/domains"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"ID"}),(0,r.jsxs)(s.td,{children:["(string) Group's ID. Can be retrieved via ",(0,r.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"DELETE"})}),"\n",(0,r.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(s.p,{children:"Example header format:"}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request body"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Description/Comments"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Id"}),(0,r.jsxs)(s.td,{children:["(string) Domain's id. Can be retrieved via ",(0,r.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-domains",children:"Get group's domains"}),"."]})]})})]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Request example"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'{\n  "Domains": [\n    {\n      "Id": "5c966733-c496-486d-8b1a-963c13e9a103"\n    },\n    {\n      "Id": "8cd12c8d-6d40-4dfd-89da-a8d8dde00575"\n    },\n  ]\n}\n'})})]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response example"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>o,M:()=>t});var r=n(11504);const i={},d=r.createContext(i);function t(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);