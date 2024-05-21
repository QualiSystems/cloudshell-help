"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[25768],{32076:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=s(17624),t=s(4552);const r={},a="New Job Scheduling REST API",l={id:"api-guide/new-jss-rest-api/index",title:"New Job Scheduling REST API",description:"The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process.",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/index.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/",permalink:"/api-guide/new-jss-rest-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/index.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add or Update Attributes",permalink:"/api-guide/packaging-api/update-the-data-model/add-or-update-attributes"},next:{title:"New Job Scheduling REST API Response Codes",permalink:"/api-guide/new-jss-rest-api/jss-rest-api-response-codes"}},d={},o=[{value:"Live documentation page",id:"live-documentation-page",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"new-job-scheduling-rest-api",children:"New Job Scheduling REST API"}),"\n",(0,n.jsx)(i.p,{children:"The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process."}),"\n",(0,n.jsx)(i.h2,{id:"live-documentation-page",children:"Live documentation page"}),"\n",(0,n.jsxs)(i.p,{children:["The New Job Scheduling live documentation page allows you to test and experiment with the API. It is accessed directly from the Job Scheduling Portal, by clicking the REST API tab on the left. For details, see ",(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/jss-api-login",children:"REST API Page"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["To use the API's methods, you must pass an authentication token. To obtain the token, execute the ",(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/jss-api-login",children:"New Job Scheduling API Login"})," method. There's also a ",(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/refresh-login",children:"Refresh login"})," method for situations where your token's validity period has expired and you need to renew it."]}),"\n",(0,n.jsx)(i.p,{children:"The following New Job Scheduling REST API methods are available:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Account:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/jss-api-login",children:"New Job Scheduling API Login"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/revoke-login",children:"Revoke login"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/refresh-login",children:"Refresh login"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Suite Executions:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-suite-execution",children:"Get suite execution"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/stop-suite-execution",children:"Stop suite execution"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"AdHoc Suites:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/start-adhoc-suite-execution",children:"Start adhoc suite execution"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Suite Templates:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-suite-templates",children:"Get suite templates"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-suite-template-details",children:"Get suite template details"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/delete-suite-template",children:"Delete suite template"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-suite-template-executions",children:"Get suite template executions"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/change-suite-owner",children:"Change suite owner"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/start-suite-execution",children:"Start suite execution"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Test Discovery Servers:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/delete-test-discovery-service",children:"Delete Test Discovery Service"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-test-discovery-services",children:"Get Test Discovery Services"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Test Execution Servers:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/delete-test-execution-service",children:"Delete Test Execution Service"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-test-execution-services",children:"Get Test Execution Services"})}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Test Executions:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/get-test-execution-report",children:"Get test execution report"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/api-support-for-jss-and-js",children:"API Support for New Job Scheduling and Job Scheduling (1st Gen)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/api-guide/new-jss-rest-api/jss-rest-api-response-codes",children:"New Job Scheduling REST API Response Codes"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.M)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,i,s)=>{s.d(i,{I:()=>l,M:()=>a});var n=s(11504);const t={},r=n.createContext(t);function a(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);