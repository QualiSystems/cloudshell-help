"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[89504],{7628:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var i=r(17624),t=r(4552);const n={sidebar_position:26},d="Add users to group",o={id:"api-guide/cs-admin-rest-api/add-users-to-group",title:"Add users to group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-users-to-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-users-to-group",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/add-users-to-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/add-users-to-group.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Get group's users",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/get-group-users"},next:{title:"Remove users from group",permalink:"/cloudshell-help/api-guide/cs-admin-rest-api/remove-users-from-group"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"add-users-to-group",children:"Add users to group"}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Adds one or more users to a given group."}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"ID"}),(0,i.jsxs)(s.td,{children:["(string) Group's ID. Can be retrieved via ",(0,i.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"POST"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(s.p,{children:"Example header format:"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Id"}),(0,i.jsxs)(s.td,{children:["(string) User's id. Can be retrieved via ",(0,i.jsx)(s.a,{href:"/cloudshell-help/api-guide/cs-admin-rest-api/get-all-users",children:"Get all users"}),"."]})]})})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n  "Users": [\n    {\n      "Id": 0\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Response code"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,t.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>d});var i=r(11504);const t={},n=i.createContext(t);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);