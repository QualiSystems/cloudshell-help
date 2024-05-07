"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6303],{70996:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=n(17624),t=n(4552);const d={sidebar_position:6},r="Edit domain",l={id:"api-guide/cs-admin-rest-api/edit-domain",title:"Edit domain",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/edit-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/edit-domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/edit-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/edit-domain.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get domain by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-by-id"},next:{title:"Delete domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/delete-domain"}},o={},a=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"edit-domain",children:"Edit domain"}),"\n",(0,s.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Gets a list of all domains in CloudShell"}),"\n",(0,s.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}"})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Parameter"}),(0,s.jsx)(i.th,{children:"Description/Comments"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"ID"}),(0,s.jsxs)(i.td,{children:["(string) Domain's id. Can be retrieved via ",(0,s.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,s.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"PUT"})}),"\n",(0,s.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(i.p,{children:"Example header format:"}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request body"}),(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Parameter"}),(0,s.jsx)(i.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Name"}),(0,s.jsx)(i.td,{children:"(string) Domain name."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Description"}),(0,s.jsx)(i.td,{children:"(string) Domain description."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"EndTime"}),(0,s.jsx)(i.td,{children:"(string) End time of domain's validity. When the end time is reached, the domain will be accessible but no longer in use."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Archived"}),(0,s.jsxs)(i.td,{children:["(bool) ",(0,s.jsx)(i.strong,{children:"true"})," to archive the domain."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"LicensePoolId"}),(0,s.jsxs)(i.td,{children:["(string) Id of the license pool. Can be retrieved via ",(0,s.jsx)(i.a,{href:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-license-pools",children:"Get all license pools"}),"."]})]})]})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Request example"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'{\n    "Name": "MyFirstDomain",\n    "Description": "Updated domain",\n    "EndTime": "05/20/2023 4:37:00 PM",  \n    "Archived": true,\n    "LicensePoolId": "7932E56D-057E-47FE-8E37-B00600A97C7F"\n\n}\n'})}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:'{\n  "Description": "domain\'s new description",\n  "Name": "domain\'s new name"  \n}\n'})})]}),"\n",(0,s.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response code"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-javascript",children:"200 Ok\n"})})]})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>l,M:()=>r});var s=n(11504);const t={},d=s.createContext(t);function r(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);