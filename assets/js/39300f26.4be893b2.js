"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41296],{91827:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=i(74848),n=i(28453);const r={sidebar_position:17},o="Delete Test Execution Service",c={id:"api-guide/new-jss-rest-api/delete-test-execution-service",title:"Delete Test Execution Service",description:"Description",source:"@site/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/delete-test-execution-service.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/delete-test-execution-service",permalink:"/api-guide/new-jss-rest-api/delete-test-execution-service",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/delete-test-execution-service.md",tags:[],version:"2024.1",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Get Test Discovery Services",permalink:"/api-guide/new-jss-rest-api/get-test-discovery-services"},next:{title:"Get Test Execution Services",permalink:"/api-guide/new-jss-rest-api/get-test-execution-services"}},d={},l=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"delete-test-execution-service",children:"Delete Test Execution Service"})}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Deletes a Test Execution Service."}),"\n",(0,s.jsxs)(t.admonition,{title:"Notes",type:"info",children:[(0,s.jsx)(t.p,{children:"When deleting a Test Execution Service, it is marked as deleted and the following takes place:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The Test Execution Service will not get new execution tasks."}),"\n",(0,s.jsx)(t.li,{children:"Test that are pending/running on the Test Execution Service will be terminated."}),"\n",(0,s.jsx)(t.li,{children:"The status of jobs assigned to the Test Execution Service will be set to terminated with the reason being that the Test Execution Service was deleted."}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/{space_name}/ExecutionServer/{id}"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:["Test Execution Service's id, which can be retrieved via ",(0,s.jsx)(t.a,{href:"./get-test-execution-services",children:"Get Test Execution Services"})," method."]})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"DELETE"})}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(t.p,{children:"Example header format:"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"200 OK\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);