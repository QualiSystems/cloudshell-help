"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[713],{18198:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(74848),i=n(28453);const r={sidebar_position:5},d="Get suite execution",l={id:"api-guide/new-jss-rest-api/get-suite-execution",title:"Get suite execution",description:"Description",source:"@site/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/get-suite-execution.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-suite-execution",permalink:"/api-guide/new-jss-rest-api/get-suite-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2024.1/api-guide/new-jss-rest-api/get-suite-execution.md",tags:[],version:"2024.1",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Refresh login",permalink:"/api-guide/new-jss-rest-api/refresh-login"},next:{title:"Stop suite execution",permalink:"/api-guide/new-jss-rest-api/stop-suite-execution"}},o={},c=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"get-suite-execution",children:"Get suite execution"})}),"\n",(0,t.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(s.p,{children:"Get a suite execution's details."}),"\n",(0,t.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteExecution/{id}"})}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Description/Comments"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"space_name"}),(0,t.jsx)(s.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsxs)(s.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,t.jsx)("br",{}),"For example:",(0,t.jsx)("br",{}),(0,t.jsxs)("code",{children:["ht",(0,t.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,t.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"GET"})}),"\n",(0,t.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(s.p,{children:"Example header format:"}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'{\n  "id": "1ab91be7-6136-4fd5-b22d-72c462947459",\n  "counter": 1,\n  "suiteTemplateDescription": "",\n  "createdDate": "2020-10-28T10:30:22.035Z",\n  "executedByName": "admin",\n  "executedByUsername": "admin",\n  "suiteTemplateName": "Hardware Network Test",\n  "suiteTemplateId": "b25d72e0-4f44-4b62-949c-02596196b157",\n  "startedDate": "2020-10-28T10:30:31.14Z",\n  "endedDate": "2020-10-28T10:31:01.43Z",\n  "status": 2,\n  "statusDescription": "Succeeded",\n  "jobs": [\n    {\n      "id": "205aac56-5826-4b5e-a96a-5887b0940b40",\n      "name": "job 1",\n      "description": null,\n      "startedDate": "2020-10-28T10:30:31.14Z",\n      "endedDate": "2020-10-28T10:31:01.43Z",\n      "status": 2,\n      "statusDescription": "Succeeded",\n      "testExecutionServerName": "My TES2",\n      "blueprint": {\n        "id": "0e1e151f-a581-4e6d-b9e2-7473b1d2297e",\n        "name": "CloudShell Sandbox Template",\n        "url": "http://192.168.30.6/RM/Diagram/Index/0e1e151f-a581-4e6d-b9e2-7473b1d2297e?diagramType=Topology"\n      },\n      "tests": [\n        {\n          "id": "672df5e3-e103-46ad-b324-88ca9b520c97",\n          "testId": "17936298/demo_tests1/new_test (1).robot",\n          "name": "new_test (1).robot",\n          "path": "demo_tests1",\n          "repositoryName": "ROBOT Tests",\n          "result": 1,\n          "resultDescription": "Passed",\n          "startedDate": "2020-10-28T10:30:31.14Z",\n          "endedDate": "2020-10-28T10:31:01.43Z",\n          "inputs": [\n            {\n              "name": "additional_parameters",\n              "value": ""\n            }\n          ],\n          "errorCode": 0,\n          "errorMessage": "",\n          "hasReport": true\n        }\n      ],\n      "sandbox": {\n        "id": "46dccae6-88ff-47cf-9d67-f1f058a125a0",\n        "name": "job 1 #1",\n        "url": "http://192.168.30.6/RM/Diagram/Index/46dccae6-88ff-47cf-9d67-f1f058a125a0",\n        "inputs": null\n      },\n      "errorCode": null,\n      "errorMessage": null\n    }\n  ]\n}\n'})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Response summary"}),(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Parameter"}),(0,t.jsx)("th",{children:"Description/Comments"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"id"}),(0,t.jsx)("td",{children:"Suite execution id. (guid)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"counter"}),(0,t.jsx)("td",{children:"Suite execution number. (numeric)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"suiteTemplateDescription"}),(0,t.jsx)("td",{children:"Suite execution description. (string)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"createdDate"}),(0,t.jsx)("td",{children:"Suite execution creation time. (ISO 8601 Date/Time format)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"executedByName"}),(0,t.jsx)("td",{children:"First and Last name of the CloudShell user who executed the suite. (ISO 8601 Date/Time format)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"executedByUserName"}),(0,t.jsx)("td",{children:"CloudShell username who executed the suite. (string)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"suiteTemplateName"}),(0,t.jsx)("td",{children:"Suite template name. (string)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"suiteTemplateId"}),(0,t.jsx)("td",{children:"Suite template id - included in the suite's URL. (guid)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"startedDate"}),(0,t.jsx)("td",{children:"Suite execution start time. (ISO 8601 Date/Time format)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"endedDate"}),(0,t.jsx)("td",{children:"Suite execution completion time. (ISO 8601 Date/Time format)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"status"}),(0,t.jsxs)("td",{children:["Suite execution status code. (numeric)",(0,t.jsx)("br",{}),"\nFor details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"statusDescription"}),(0,t.jsxs)("td",{children:["Suite execution status description. (string)",(0,t.jsx)("br",{}),"\nFor details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"jobs"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(s.p,{children:["Job details:",(0,t.jsx)("br",{})]}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"id"}),": Job ID. (guid)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"}),": Job name. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"description"}),": Job description, if defined. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"startedDate"}),": Job execution start time. (ISO 8601 Date/Time format)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"endedDate"}),": Job execution completion time. (ISO 8601 Date/Time format)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"status"}),": Job status code. (numeric) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"statusDescription"}),": Job status description. (string) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"testExecutionServerName"}),": Test Execution Service that handled the suite's execution. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"blueprint"}),": Details of the job's blueprint.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"id"}),": Blueprint ID - included in the blueprint's URL. (guid)","\n",(0,t.jsx)("br",{}),"\n","For example:","\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"http://192.168.30.6/RM/Diagram/Index/",children:"http://192.168.30.6/RM/Diagram/Index/"}),(0,t.jsx)("b",{children:"0e1e151f-a581-4e6d-b9e2-7473b1d2297e"}),"?diagramType=Topology"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Name"}),": Blueprint name. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"URL"}),": Blueprint URL. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"tests"}),": Details of the job's tests.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"id"}),": Unique id of the test\u2019s execution. (guid)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"testID"}),": Test path on the online test repository. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"}),": Test name. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"path"}),": Test's folder path on the online test repository. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"repositoryName"}),": Name of online repository containing the test. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"result"}),": Test result code. (numeric) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"resultDescription"}),": Test result description. (string) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"startedDate"}),": Test execution start time. (ISO 8601 Date/Time format)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"EndedDate"}),": Test execution completion time. (ISO 8601 Date/Time format)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Inputs"}),": Details about the test's inputs:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"}),": Input name. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Value"}),": Input value, if defined. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"errorCode"}),": Test error code. (numeric) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"errorMessage"}),": Test error message. (string) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"hasReport"}),": Test report, if generated. (bool)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"sandbox"}),": Details about the sandbox spun up for the job's execution.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"id"}),": Sandbox ID - included in the sandbox URL. (guid)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"name"}),': Sandbox name, composed of job name, dash and job execution number. (string) For example: "job 1 #1"']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"url"}),": Sandbox URL. (string)"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"inputs"}),": Sandbox inputs, if defined. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"errorCode"}),": Job error code. (numeric) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"errorMessage"}),": Job error message. (string) For details, see ",(0,t.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n"]})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function d(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);