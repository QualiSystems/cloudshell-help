"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6137],{99286:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(17624),d=s(4552);const t={sidebar_position:22},r="Owner Sandboxes",o={id:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier",title:"Owner Sandboxes",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier.md",sourceDirName:"api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide",slug:"/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/sandbox-owner-identifier.md",tags:[],version:"2023.3",lastUpdatedAt:1715813545e3,sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Execution Stop",permalink:"/cloudshell-help/api-guide/cs-sandbox-api/cs-sandbox-api-version-2-reference-guide/execution-stop"},next:{title:"Shell Development and Blueprint Design API",permalink:"/cloudshell-help/category/shell-development-and-blueprint-design-api"}},c={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP\xa0method",id:"httpmethod",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"owner-sandboxes",children:"Owner Sandboxes"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Returns list of sandboxes for a specific owner name"}),"\n",(0,i.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"http://{CloudShell Sandbox API Gateway IP\xa0address}:{port#}/api/v2/sandboxes/owners/{owner_identifier}"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description/Comments"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"owner_identifier"})}),(0,i.jsxs)(n.td,{children:["The name of the user (",(0,i.jsx)(n.code,{children:"string"}),")."]})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"httpmethod",children:"HTTP\xa0method"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET"})}),"\n",(0,i.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Headers"}),(0,i.jsxs)(n.p,{children:["Example header format for the ",(0,i.jsx)(n.code,{children:"sandboxes"})," method:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,i.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response example"}),(0,i.jsx)(n.p,{children:"This method returns a list of all the active sandboxes a specific owner has."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'[\n  {\n    "name": "Sanity Testing on Latest Build",\n    "id": "fa4a313a-061d-4a40-9815-9730dd7c916f",\n    "description": "Blueprint with preconfigured sanity tests to be run on the latest build.",\n    "state": "Ready",\n    "blueprint": {\n      "name": "Sanity Testing Blueprint",\n      "id": "506f1880-5ba0-48ad-9385-d259edcf885b"\n    }\n  },\n  {\n    "name": "System Diagnostics Test",\n    "id": "0b0747f3-b3bb-4de1-b0f0-9c15b7327bb9",\n    "description": "Blueprint that automates system diagnostics checks on the local network.",\n    "state": "Ready",\n    "blueprint": {\n      "name": "System Diagnostics Blueprint",\n      "id": "07e70b79-3cba-4f1a-a957-fb4b0552fb33"\n    }\n  }\n]\n'})})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Response summary"}),(0,i.jsxs)(n.p,{children:["The response output properties of the ",(0,i.jsx)(n.code,{children:"sandboxes"})," method are described in the following table."]}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Sub Property"}),(0,i.jsx)(n.th,{children:"Description/Comments"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsxs)(n.td,{children:["The name of the sandbox. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsxs)(n.td,{children:["The ID of the sandbox. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"description"})}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsxs)(n.td,{children:["A text description of the sandbox. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"state"})}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsxs)(n.td,{children:["The current state of the sandbox. Possible values: Pending, Setup, Ready, Teardown, Error, Ended. ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"blueprint"})}),(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsxs)(n.td,{children:["The details of the sandbox's blueprint ",(0,i.jsx)(n.code,{children:"(Array)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsxs)(n.td,{children:["The name of the blueprint ",(0,i.jsx)(n.code,{children:"(string)"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\xa0"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsxs)(n.td,{children:["The id of the blueprint ",(0,i.jsx)(n.code,{children:"(string)"})]})]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>o,M:()=>r});var i=s(11504);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);