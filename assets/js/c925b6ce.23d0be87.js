"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[85308],{77440:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=i(17624),r=i(4552);const s={sidebar_position:19},d="Get group by ID",o={id:"api-guide/cs-admin-rest-api/get-group-by-id",title:"Get group by ID",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/get-group-by-id.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-group-by-id",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-by-id",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/get-group-by-id.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Create group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-group"},next:{title:"Edit group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-group"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-group-by-id",children:"Get group by ID"}),"\n",(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets a group's details using the group's id."}),"\n",(0,n.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description/Comments"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ID"}),(0,n.jsxs)(t.td,{children:["(string) Group's ID. Can be retrieved via ",(0,n.jsx)(t.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET"})}),"\n",(0,n.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(t.p,{children:"Example header format:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{\n    "ParentIds": null,\n    "Sid": "42038eb9-9a58-4298-8a38-0be6f4d3b87a",\n    "Name": "my group",\n    "Description": "my group\'s description",\n    "ViewOnly": false,\n    "groupType": "UserDefined",\n    "groupRole": "Regular",\n    "Id": 7\n}\n'})})]}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("summary",{children:"Response code"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>d});var n=i(11504);const r={},s=n.createContext(r);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);