"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[13060],{49072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=n(17624),i=n(4552);const l={},r="New Job Scheduling REST API",o={id:"api-guide/new-jss-rest-api/index",title:"New Job Scheduling REST API",description:"The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process.",source:"@site/docs/api-guide/new-jss-rest-api/index.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/",permalink:"/cloudshell-help/next/api-guide/new-jss-rest-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/new-jss-rest-api/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add or Update Attributes",permalink:"/cloudshell-help/next/api-guide/packaging-api/update-the-data-model/add-or-update-attributes"},next:{title:"New Job Scheduling REST API Response Codes",permalink:"/cloudshell-help/next/api-guide/new-jss-rest-api/jss-rest-api-response-codes"}},a={},h=[{value:"Live documentation page",id:"live-documentation-page",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"new-job-scheduling-rest-api",children:"New Job Scheduling REST API"}),"\n",(0,s.jsx)(t.p,{children:"The New Job Scheduling REST API enables developers to perform certain administrative actions, including managing your Test Execution and Discovery services and integrating Job Scheduling operations as part of a CI/CD process."}),"\n",(0,s.jsx)(t.h2,{id:"live-documentation-page",children:"Live documentation page"}),"\n",(0,s.jsxs)(t.p,{children:["The New Job Scheduling live documentation page allows you to test and experiment with the API. It is accessed directly from the Job Scheduling Portal, by clicking the REST API tab on the left. For details, see ",(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/JSS/jss-rest-api.htm",children:"REST API Page"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To use the API's methods, you must pass an authentication token. To obtain the token, execute the ",(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-accessToken.htm",children:"New Job Scheduling API Login"})," method. There's also a ",(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-refreshToken.htm",children:"Refresh login"})," method for situations where your token's validity period has expired and you need to renew it."]}),"\n",(0,s.jsx)(t.p,{children:"The following New Job Scheduling REST API methods are available:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Account:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-accessToken.htm",children:"New Job Scheduling API Login"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-revokeToken.htm",children:"Revoke login"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-refreshToken.htm",children:"Refresh login"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Suite Executions:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-execution.htm",children:"Get suite execution"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-stop-suite-execution.htm",children:"Stop suite execution"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"AdHoc Suites:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-start-adhoc-suite-execution.htm",children:"Start adhoc suite execution"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Suite Templates:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-templates.htm",children:"Get suite templates"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-details.htm",children:"Get suite template details"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-suite.htm",children:"Delete suite template"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-suite-executions.htm",children:"Get suite template executions"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-changeowner.htm",children:"Change suite owner"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-start-suite-execution.htm",children:"Start suite template"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Test Discovery Servers:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-tds.htm",children:"Delete Test Discovery Service"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tds.htm",children:"Get Test Discovery Services"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Test Execution Servers:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-delete-tes.htm",children:"Delete Test Execution Service"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-tes.htm",children:"Get Test Execution Services"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Test Executions:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-get-test-execution-report.htm",children:"Get test execution report"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-comparison.htm",children:"API Support for New Job Scheduling and Job Scheduling (1st Gen)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/API/JSS-API/jss-rest-api-response-codes.htm",children:"New Job Scheduling REST API Response Codes"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var s=n(11504);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);