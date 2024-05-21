"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[70396],{6052:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=n(17624),t=n(4552);const i={sidebar_position:18},o="Create group",d={id:"api-guide/cs-admin-rest-api/create-group",title:"Create group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/create-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/create-group",permalink:"/api-guide/cs-admin-rest-api/create-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/create-group.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Get all groups",permalink:"/api-guide/cs-admin-rest-api/get-all-groups"},next:{title:"Get group by ID",permalink:"/api-guide/cs-admin-rest-api/get-group-by-id"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const r={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"create-group",children:"Create group"}),"\n",(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Creates one or more new CloudShell groups."}),"\n",(0,s.jsx)(r.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups"})}),"\n",(0,s.jsx)(r.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"POST"})}),"\n",(0,s.jsx)(r.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(r.p,{children:"Example header format:"}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request body"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Name"}),(0,s.jsx)(r.td,{children:"(string) Group name."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Description"}),(0,s.jsx)(r.td,{children:"(string) Group description."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"GroupRole"}),(0,s.jsx)(r.td,{children:"Group's role. Possible values are: External, Regular, DomainAdmin"})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request example"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'{\n  "Groups": [\n    {\n      "Name": "my group",\n      "Description": "my test group",\n      "groupRole": "Regular"\n    }\n  ]\n}\n'})})]}),"\n",(0,s.jsx)(r.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'{\n    "Groups": [\n        {\n            "Name": "mygroup",\n            "Description": "my test group",\n            "ViewOnly": false,\n            "groupType": "UserDefined",\n            "groupRole": "Regular",\n            "Id": 7\n        }\n    ],\n    "Errors": []\n}\n'})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response code"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function p(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>d,M:()=>o});var s=n(11504);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);