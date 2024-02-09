"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6303],{70996:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var t=n(17624),s=n(4552);const d={sidebar_position:6},r="Edit domain",o={id:"api-guide/cs-admin-rest-api/edit-domain",title:"Edit domain",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/edit-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/edit-domain.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get domain by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-by-id"},next:{title:"Delete domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-domain"}},l={},a=[{value:"Description",id:"description",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"edit-domain",children:"Edit domain"}),"\n",(0,t.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Gets a list of all domains in CloudShell"}),"\n",(0,t.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(i.p,{children:"PUT"}),"\n",(0,t.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"URL"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}\n"})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(i.p,{children:"Example header format:"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Content-Type: application/json"})}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description/Comments"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"id"}),(0,t.jsx)(i.td,{children:"(string) Domain's id."})]})})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Name"}),(0,t.jsx)(i.td,{children:"(string) Domain name."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"(string) Domain description."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"EndTime"}),(0,t.jsx)(i.td,{children:"(string) End time of domain's validity. When the end time is reached, the domain will be accessible but no longer in use."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Archived"}),(0,t.jsxs)(i.td,{children:["(bool) ",(0,t.jsx)(i.strong,{children:"true"})," to archive the domain."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"LicensePoolId"}),(0,t.jsxs)(i.td,{children:["(string) Id of the license pool. Can be retrieved via ",(0,t.jsx)(i.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/RefGuides/RM-API/admin-api-get-all-license-pools.htm",children:"Get all license pools"}),"."]})]})]})]}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'{\n    "Name": "MyFirstDomain",\n    "Description": "Updated domain",\n    "EndTime": "05/20/2023 4:37:00 PM",  \n    "Archived": true,\n    "LicensePoolId": "7932E56D-057E-47FE-8E37-B00600A97C7F"\n\n}\n'})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'{\n  "Description": "domain\'s new description",\n  "Name": "domain\'s new name"  \n}\n'})})]}),"\n",(0,t.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(i.p,{children:"200 OK"})]})]})}function h(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>o,M:()=>r});var t=n(11504);const s={},d=t.createContext(s);function r(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);