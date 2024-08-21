"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[86514],{15034:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(74848),n=s(28453);const t={sidebar_position:27},d="Remove users from group",o={id:"api-guide/cs-admin-rest-api/remove-users-from-group",title:"Remove users from group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-users-from-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-users-from-group",permalink:"/2023.3/api-guide/cs-admin-rest-api/remove-users-from-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-users-from-group.md",tags:[],version:"2023.3",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Add users to group",permalink:"/2023.3/api-guide/cs-admin-rest-api/add-users-to-group"},next:{title:"Get all users",permalink:"/2023.3/api-guide/cs-admin-rest-api/get-all-users"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"remove-users-from-group",children:"Remove users from group"})}),"\n",(0,i.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Removes one or more users from a group."}),"\n",(0,i.jsx)(r.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Description/Comments"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"id"}),(0,i.jsxs)(r.td,{children:["(string) Group's id. Can be retrieved via ",(0,i.jsx)(r.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,i.jsx)(r.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"DELETE"})}),"\n",(0,i.jsx)(r.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(r.p,{children:"Example header format:"}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Description/Comments"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"Id"}),(0,i.jsxs)(r.td,{children:["(string) User's id. Can be retrieved via ",(0,i.jsx)(r.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-group-users",children:"Get group's users"}),"."]})]})})]})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'{\n  "Users": [\n    {\n      "Id": 0\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(r.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response code"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>o});var i=s(96540);const n={},t=i.createContext(n);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);