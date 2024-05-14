"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[63080],{74312:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(17624),n=r(4552);const i={sidebar_position:26},d="Add users to group",o={id:"api-guide/cs-admin-rest-api/add-users-to-group",title:"Add users to group",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/add-users-to-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/add-users-to-group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/add-users-to-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/add-users-to-group.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"Get group's users",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-users"},next:{title:"Remove users from group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/remove-users-from-group"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.M)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"add-users-to-group",children:"Add users to group"}),"\n",(0,t.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Adds one or more users to a given group."}),"\n",(0,t.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}/Users"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description/Comments"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"ID"}),(0,t.jsxs)(s.td,{children:["(string) Group's ID. Can be retrieved via ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"POST"})}),"\n",(0,t.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(s.p,{children:"Example header format:"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description/Comments"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Id"}),(0,t.jsxs)(s.td,{children:["(string) User's id. Can be retrieved via ",(0,t.jsx)(s.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-users",children:"Get all users"}),"."]})]})})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n  "Users": [\n    {\n      "Id": 0\n    }\n  ]\n}\n'})})]}),"\n",(0,t.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n    "Errors": []\n}\n'})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>d});var t=r(11504);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);