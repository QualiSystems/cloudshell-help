"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[20956],{34792:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var n=r(17624),i=r(4552);const t={sidebar_position:13},d="Remove groups from domain",o={id:"api-guide/cs-admin-rest-api/remove-groups-from-domain",title:"Remove groups from domain",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/remove-groups-from-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-groups-from-domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-groups-from-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/remove-groups-from-domain.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Add groups to domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-groups-to-domain"},next:{title:"Get domain's resources",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-resources"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"remove-groups-from-domain",children:"Remove groups from domain"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Removes one or more blueprints from a domain."}),"\n",(0,n.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/groups"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ID"}),(0,n.jsxs)(s.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,n.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"DELETE"})}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(s.p,{children:"Example header format:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Request body"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Id"}),(0,n.jsxs)(s.td,{children:["(string) Group's id. Can be retrieved via ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Request example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n  "Groups": [\n    {\n      "Id": 1\n    }\n  ]\n}\n'})})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>d});var n=r(11504);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);