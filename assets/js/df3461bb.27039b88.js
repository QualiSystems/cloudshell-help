"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[84448],{19940:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=n(17624),s=n(4552);const d={sidebar_position:5},r="Get domain by ID",a={id:"api-guide/cs-admin-rest-api/get-domain-by-id",title:"Get domain by ID",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-domain-by-id.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/get-domain-by-id",permalink:"/api-guide/cs-admin-rest-api/get-domain-by-id",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-admin-rest-api/get-domain-by-id.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Create domain",permalink:"/api-guide/cs-admin-rest-api/create-domain"},next:{title:"Edit domain",permalink:"/api-guide/cs-admin-rest-api/edit-domain"}},o={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"get-domain-by-id",children:"Get domain by ID"}),"\n",(0,t.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Get a domain's details."}),"\n",(0,t.jsx)(i.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"http://{Admin API IP}:{port#}/api/v1/domains/{id}"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description/Comments"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ID"}),(0,t.jsxs)(i.td,{children:["(string) Domain's ID. Can be retrieved via ",(0,t.jsx)(i.a,{href:"/api-guide/cs-admin-rest-api/get-all-domains",children:"Get all domains"}),"."]})]})})]}),"\n",(0,t.jsx)(i.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"GET"})}),"\n",(0,t.jsx)(i.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(i.p,{children:"Example header format:"}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsx)(i.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:'{\n    "Id": "5c966733-c496-486d-8b1a-963c13e9a103",\n    "Archived": false,\n    "EndTime": null,\n    "LicensePoolId": null,\n    "Description": "New York team\'s domain",\n    "Name": "New York"\n}\n'})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-javascript",children:"200 OK\n"})})]})]})}function p(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>r});var t=n(11504);const s={},d=t.createContext(s);function r(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);