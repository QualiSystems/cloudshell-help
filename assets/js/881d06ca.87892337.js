"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57168],{15384:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=r(17624),n=r(4552);const t={sidebar_position:27},d="Remove users from group",o={id:"api-guide/cs-admin-rest-api/remove-users-from-group",title:"Remove users from group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-users-from-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/remove-users-from-group",permalink:"/api-guide/cs-admin-rest-api/remove-users-from-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/remove-users-from-group.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Add users to group",permalink:"/api-guide/cs-admin-rest-api/add-users-to-group"},next:{title:"Get all users",permalink:"/api-guide/cs-admin-rest-api/get-all-users"}},a={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"remove-users-from-group",children:"Remove users from group"}),"\n",(0,i.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Removes one or more users from a group."}),"\n",(0,i.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users"})}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"id"}),(0,i.jsxs)(s.td,{children:["(string) Group's id. Can be retrieved via ",(0,i.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"DELETE"})}),"\n",(0,i.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsx)(s.p,{children:"Example header format:"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Request body"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Description/Comments"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Id"}),(0,i.jsxs)(s.td,{children:["(string) User's id. Can be retrieved via ",(0,i.jsx)(s.a,{href:"/api-guide/cs-admin-rest-api/get-group-users",children:"Get group's users"}),"."]})]})})]})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Request example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n  "Users": [\n    {\n      "Id": 0\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:"Response code"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>d});var i=r(11504);const n={},t=i.createContext(n);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);