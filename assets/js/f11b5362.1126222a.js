"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[61453],{68384:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var t=r(74848),s=r(28453);const n={sidebar_position:20},d="Edit group",o={id:"api-guide/cs-admin-rest-api/edit-group",title:"Edit group",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/edit-group.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-group",permalink:"/2023.3/api-guide/cs-admin-rest-api/edit-group",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/edit-group.md",tags:[],version:"2023.3",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Get group by ID",permalink:"/2023.3/api-guide/cs-admin-rest-api/get-group-by-id"},next:{title:"Delete group",permalink:"/2023.3/api-guide/cs-admin-rest-api/delete-group"}},l={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:r}=i;return r||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"edit-group",children:"Edit group"})}),"\n",(0,t.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Edit a group's details."}),"\n",(0,t.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/groups/{id}"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description/Comments"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ID"}),(0,t.jsxs)(i.td,{children:["(string) Group's id. Can be retrieved via ",(0,t.jsx)(i.a,{href:"/2023.3/api-guide/cs-admin-rest-api/get-all-groups",children:"Get all groups"}),"."]})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"PUT"})}),"\n",(0,t.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(i.p,{children:"Example header format:"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Name"}),(0,t.jsx)(i.td,{children:"(string) Group name."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"(string) Group description."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"GroupRole"}),(0,t.jsx)(i.td,{children:"Group's role. Possible values are: External, Regular, DomainAdmin"})]})]})]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'{\n  "Name": "my updated group name",\n  "Description": "Updated description",\n  "GroupRole": "Regular"\n}\n'})})]}),"\n",(0,t.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"200 Ok\n"})})]})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>o});var t=r(96540);const s={},n=t.createContext(s);function d(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);