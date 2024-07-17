"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[91488],{67804:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>a});var i=t(17624),r=t(4552);const n={sidebar_position:20},d="API Support for New Job Scheduling and Job Scheduling (1st Gen)",l={id:"api-guide/new-jss-rest-api/api-support-for-jss-and-js",title:"API Support for New Job Scheduling and Job Scheduling (1st Gen)",description:"The section compares the APIs for the different Job Scheduling features. The New Job Scheduling has a dedicated RESTful API while the original Job Scheduling uses the Quali API.",source:"@site/docs/api-guide/new-jss-rest-api/api-support-for-jss-and-js.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/api-support-for-jss-and-js",permalink:"/next/api-guide/new-jss-rest-api/api-support-for-jss-and-js",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/api-guide/new-jss-rest-api/api-support-for-jss-and-js.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Get test execution report",permalink:"/next/api-guide/new-jss-rest-api/get-test-execution-report"},next:{title:"New Job Scheduling",permalink:"/next/jss/"}},c={},a=[{value:"API support",id:"api-support",level:3},{value:"Related Topics",id:"related-topics",level:2}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"api-support-for-new-job-scheduling-and-job-scheduling-1st-gen",children:"API Support for New Job Scheduling and Job Scheduling (1st Gen)"}),"\n",(0,i.jsxs)(s.p,{children:["The section compares the APIs for the different Job Scheduling features. The New Job Scheduling has a dedicated RESTful API while the original Job Scheduling uses the ",(0,i.jsx)(s.a,{href:"pathname:///api-docs/2023.3/Quali-API/Quali%20API%20Library.html",children:"Quali API"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:'For brevity, the term "Job Scheduling (1st Gen)" denotes the original Job Scheduling which is accessed via CloudShell Portal.'})}),"\n",(0,i.jsx)(s.h3,{id:"api-support",children:"API support"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"\xa0"}),(0,i.jsx)(s.th,{children:"New Job Scheduling"}),(0,i.jsx)(s.th,{children:"1st Gen Job Scheduling"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Authentication operations:"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Login"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"POST /api/Account/login"})]}),(0,i.jsxs)(s.td,{children:["Available via ",(0,i.jsx)(s.code,{children:"(/API/Auth/Login)"})," API"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Refresh"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET /api/Token/refresh/{refresh_token}"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Revoke"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"POST /api/Token/revoke API"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Execution Server management operations:"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get execution servers"}),(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET /api/ExecutionServer"})," API"]}),(0,i.jsx)(s.td,{children:"Available via Get Execution Servers API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get execution server details"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET /api/ExecutionServer"})," API"]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Delete execution server"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"DELETE /api/ExecutionServer/{id}"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Suite management operations:"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get available suite templates"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available via Get Available Suite Templates API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get suite template details"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET http://<Job Scheduling Ingress>/api/spaces/<space_name>/SuiteTemplate/<suite template id>"})]}),(0,i.jsxs)(s.td,{children:["Available via Get Suite Template Details API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET http://<Quali Server>:9000/API/Scheduling/SuiteTemplates/suiteTemplateName"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Delete suite template"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"DELETE /api/spaces/{space_name}/SuiteTemplate/{id}"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Change suite owner"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"PUT \u200b/api\u200b/spaces\u200b/{space_name}\u200b/SuiteTemplate\u200b/{id}\u200b/changeowner"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get suite details"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:'GET "http://<Job Scheduling Ingress>/api/spaces/<space_name>/SuiteExecution/<suite execution id>'})]}),(0,i.jsxs)(s.td,{children:["Available via Get Suite Details API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET http://<Quali Server>:9000/API/Scheduling/Suites/suiteId"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get suite status"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET /api/spaces/{space_name}/SuiteTemplate/{id}"})]}),(0,i.jsxs)(s.td,{children:["Available via Get Suite Status API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET http://<Quali Server>:9000/API/Scheduling/Suites/Status/suiteId"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get test folder child elements"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available for TestShell Studio tests only"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get test information"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available for TestShell Studio tests only"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.strong,{children:"Suite execution operations:"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get suite executions for specific template"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET \u200b/api\u200b/spaces\u200b/{space_name}\u200b/SuiteExecution\u200b/{id} GET API"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Stop suite execution"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)(s.code,{children:"POST /api/spaces/{space_name}/SuiteExecution/{id}/stop"})]}),(0,i.jsxs)(s.td,{children:["Available via Stop Suite Execution API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"DELETE http://<Quali Server>:9000/API/Scheduling/Suites/SuiteId"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Enqueue custom suite"}),(0,i.jsxs)(s.td,{children:["Available via ",(0,i.jsx)(s.code,{children:"/api/spaces/{space_name}/SuiteExecution/{id}"})," GET API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)(s.code,{children:"POST http://<Job Scheduling Ingress>/api/spaces/{space_name}/SuiteTemplate/{id}/start"})]}),(0,i.jsxs)(s.td,{children:["Available via Enqueue Custom Suite API",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"POST http://<Quali Server>:9000/API/Scheduling/Suites"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Enqueue custom job"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available via Enqueue Custom Job API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get job details"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET /api/spaces/{space_name}/SuiteExecution/{id}"})]}),(0,i.jsx)(s.td,{children:"Available via Get Job Details API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Stop job execution"}),(0,i.jsxs)(s.td,{children:["Not supported for specific job executions. Supported for suite executions via ",(0,i.jsx)(s.code,{children:"/api/spaces/{space_name}/SuiteExecution/{id}/stop"})," API"]}),(0,i.jsx)(s.td,{children:"Available via Stop Job Execution API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get jobs in queue"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available via Get Queued Jobs API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get running jobs"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"Available via Get Running Jobs API"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Deploy dedicated reservation per job"}),(0,i.jsx)(s.td,{children:"Available"}),(0,i.jsx)(s.td,{children:"Available"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Generate suite execution report"}),(0,i.jsxs)(s.td,{children:["Available",(0,i.jsx)("br",{}),(0,i.jsx)(s.strong,{children:"Syntax:"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.code,{children:"GET/api/spaces/{space_name}/TestExecution/{id}/Report"})]}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Reservation operations:"}),(0,i.jsx)("br",{}),"The following APIs are available for both Job Scheduling features via Quali API."]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get reservation attachment"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Get reservation attachment details"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Delete file from reservation"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.strong,{children:"Configuration operations:"}),(0,i.jsx)("br",{}),"The following APIs are available for both Job Scheduling features via Quali API."]}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Import package"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"\xa0"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Export package"}),(0,i.jsx)(s.td,{children:"\xa0"}),(0,i.jsx)(s.td,{children:"\xa0"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/next/jss/jss-portal/jss-rest-api",children:"REST API Page"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>d});var i=t(11504);const r={},n=i.createContext(r);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);