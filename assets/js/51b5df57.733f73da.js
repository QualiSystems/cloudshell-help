"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6224],{26216:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(17624),s=i(4552);const r={sidebar_position:4},d="Create domain",a={id:"api-guide/cs-admin-rest-api/create-domain",title:"Create domain",description:"Description",source:"@site/docs/api-guide/cs-admin-rest-api/create-domain.md",sourceDirName:"api-guide/cs-admin-rest-api",slug:"/api-guide/cs-admin-rest-api/create-domain",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/create-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/cs-admin-rest-api/create-domain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get all domains",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-all-domains"},next:{title:"Get domain by ID",permalink:"/cloudshell-help/next/api-guide/cs-admin-rest-api/get-domain-by-id"}},o={},c=[{value:"Description",id:"description",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-domain",children:"Create domain"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Creates a new domain in CloudShell."}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:"POST"}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"URL"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"http://{Admin API IP}:{port#}/api/v1/domains\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Name"}),(0,t.jsx)(n.td,{children:"(string) License pool name."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"(string) License pool's description."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Archived"}),(0,t.jsx)(n.td,{children:'(bool) (Optional) Specify "true" to create an archived domain.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"EndTime (Optional)"}),(0,t.jsx)(n.td,{children:"(string) (Optional) Domain's expiration time. When this time is reached, the domain will still be accessible but no longer in use."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LicensePoolId"}),(0,t.jsx)(n.td,{children:"(string) (Optional) Name of the license pool to use for the domain."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Description"}),(0,t.jsx)(n.td,{children:"(string) (Optional) Domain's name."})]})]})]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  "Archived": true,\n  "EndTime": "string",\n  "LicensePoolId": "string",\n  "EndTime": "05/20/2023 4:37:00 PM"\n  "Description": "string",\n  "Name": "string"\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "Id": "e7d4289c-4355-435e-bc8f-aea0591af53c"\n}\n'})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Response code"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"201 Created\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>a,M:()=>d});var t=i(11504);const s={},r=t.createContext(s);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);