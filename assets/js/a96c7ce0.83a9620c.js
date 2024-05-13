"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84828],{66548:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=i(17624),s=i(4552);const r={sidebar_position:9},d="Add blueprints to domain",l={id:"api-guide/cs-admin-rest-api/add-blueprints-to-domain",title:"Add blueprints to domain",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/add-blueprints-to-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-blueprints-to-domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-blueprints-to-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/add-blueprints-to-domain.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Get domain's blueprints",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-blueprints"},next:{title:"Remove blueprints from domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-blueprint-from-domain"}},a={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"add-blueprints-to-domain",children:"Add blueprints to domain"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Adds one or more blueprints from different domains to the desired domain."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}/blueprints"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ID"}),(0,t.jsxs)(n.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Id"}),(0,t.jsx)(n.td,{children:"(string) Blueprint's id."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ValidateResourceAvailability"}),(0,t.jsxs)(n.td,{children:["(string) Set to ",(0,t.jsx)(n.strong,{children:"true"})," to check that the blueprint's resources are available in the new domain."]})]})]})]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  "Blueprints": [\n    {\n      "Id": "ca60106f-761b-4463-976f-8cc846bc10ff"\n    },\n    {\n      "Id": "a68214a1-3c5d-4534-886d-a1d281e58f21"\n    }    \n  ],\n  "ValidateResourceAvailability": true\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>d});var t=i(11504);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);