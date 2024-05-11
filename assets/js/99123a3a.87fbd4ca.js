"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[81424],{42948:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(17624),s=i(4552);const n={sidebar_position:20},d="Edit group",l={id:"api-guide/cs-admin-rest-api/edit-group",title:"Edit group",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/edit-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/edit-group.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Get group by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-group-by-id"},next:{title:"Delete group",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-group"}},o={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"edit-group",children:"Edit group"}),"\n",(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Edit a group's details."}),"\n",(0,r.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description/Comments"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ID"}),(0,r.jsxs)(t.td,{children:["(string) Group's id. Can be retrieved via ",(0,r.jsx)(t.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"PUT"})}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Headers"}),(0,r.jsx)(t.p,{children:"Example header format:"}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Request body"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Description/Comments"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Name"}),(0,r.jsx)(t.td,{children:"(string) Group name."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"(string) Group description."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GroupRole"}),(0,r.jsx)(t.td,{children:"Group's role. Possible values are: External, Regular, DomainAdmin"})]})]})]})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Request example"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'{\n  "Name": "my updated group name",\n  "Description": "Updated description",\n  "GroupRole": "Regular"\n}\n'})})]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Response code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"200 Ok\n"})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>d});var r=i(11504);const s={},n=r.createContext(s);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);