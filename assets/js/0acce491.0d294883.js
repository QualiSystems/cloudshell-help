"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56568],{95060:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=t(17624),r=t(4552);const i={sidebar_position:10},d="Get suite template executions",l={id:"api-guide/new-jss-rest-api/get-suite-template-executions",title:"Get suite template executions",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-template-executions.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-suite-template-executions",permalink:"/api-guide/new-jss-rest-api/get-suite-template-executions",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-template-executions.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Get suite template details",permalink:"/api-guide/new-jss-rest-api/get-suite-template-details"},next:{title:"Change suite owner",permalink:"/api-guide/new-jss-rest-api/change-suite-owner"}},a={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"get-suite-template-executions",children:"Get suite template executions"}),"\n",(0,n.jsx)(s.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"Gets the executions of a specific suite template, including job and test details."}),"\n",(0,n.jsx)(s.h3,{id:"url",children:"URL"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"http://{Job Scheduling API IP}:[port#]/api/spaces/{space_name}/SuiteTemplate/{id}/executions?createdBy={createdBy}$count={count}"})}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Description/Comments"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"space_name"}),(0,n.jsx)(s.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"id"}),(0,n.jsxs)(s.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,n.jsx)("br",{}),"For example:",(0,n.jsx)("br",{}),(0,n.jsxs)("code",{children:["ht",(0,n.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,n.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"createdBy"}),(0,n.jsx)(s.td,{children:"CloudShell user who started the execution. You can provide a specific CloudShell username or enter 'anyone' to return all results. (string)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"count"}),(0,n.jsx)(s.td,{children:'Number of executions to get, starting with the last. For example, if the template has 5 executions, a count of "3" will return executions 5, 4, and 3. (number)'})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"GET"})}),"\n",(0,n.jsx)(s.h3,{id:"request",children:"Request"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Headers"}),(0,n.jsx)(s.p,{children:"Example header format:"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"Content-Type: application/json"})})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"200 OK\n"})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Response example"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:'[\n  {\n    "id": "fde35ef4-eb00-4d49-a24c-107f55e2192e",\n    "counter": 9,\n    "suiteTemplateDescription": "",\n    "createdDate": "2020-10-28T12:47:44.64Z",\n    "executedByName": "admin",\n    "executedByUsername": "admin",\n    "suiteTemplateName": "Hardware Network Test",\n    "suiteTemplateId": "b25d72e0-4f44-4b62-949c-02596196b157",\n    "startedDate": "2020-10-28T12:47:50.66Z",\n    "endedDate": "2020-10-28T12:49:51.887Z",\n    "status": 2,\n    "statusDescription": "Succeeded",\n    "jobs": [\n      {\n        "id": "7a1b3d9c-ff65-461e-a7e6-fff538af3159",\n        "name": "job 1",\n        "description": null,\n        "startedDate": "2020-10-28T12:47:50.66Z",\n        "endedDate": "2020-10-28T12:49:51.887Z",\n        "status": 2,\n        "statusDescription": "Succeeded",\n        "testExecutionServerName": "My TES2",\n        "blueprint": {\n          "id": "0efe151f-a581-4e6d-b9e2-7473bbcf297e",\n          "name": "CloudShell Sandbox Template",\n          "url": null\n        },\n        "tests": [\n          {\n            "id": "89c85ae0-2563-45ad-b810-8a0581a0f526",\n            "testId": "17936298/demo_tests1/new_test (1).robot",\n            "name": "new_test (1).robot",\n            "path": "demo_tests1",\n            "repositoryName": "ROBOT Tests",\n            "result": 1,\n            "resultDescription": "Passed",\n            "startedDate": "2020-10-28T12:47:50.66Z",\n            "endedDate": "2020-10-28T12:48:20.962Z",\n            "inputs": [\n              {\n                "name": "additional_parameters",\n                "value": ""\n              }\n            ],\n            "errorCode": 0,\n            "errorMessage": "",\n            "hasReport": false\n          },\n          {\n            "id": "9b3fbf41-a006-426d-8d09-b5463895106b",\n            "testId": "17936298/140_tests_tsivya2/b (101).robot",\n            "name": "b (101).robot",\n            "path": "140_tests_tsivya2",\n            "repositoryName": "ROBOT Tests",\n            "result": 1,\n            "resultDescription": "Passed",\n            "startedDate": "2020-10-28T12:48:20.967Z",\n            "endedDate": "2020-10-28T12:48:51.312Z",\n            "inputs": [\n              {\n                "name": "additional_parameters",\n                "value": "fghfgh"\n              }\n            ],\n            "errorCode": 0,\n            "errorMessage": "",\n            "hasReport": false\n          },\n          {\n            "id": "17cc6edf-0899-4e29-b69f-a7c6899fddac",\n            "testId": "17936298/140_tests_tsivya2/b (102).robot",\n            "name": "b (102).robot",\n            "path": "140_tests_tsivya2",\n            "repositoryName": "ROBOT Tests",\n            "result": 1,\n            "resultDescription": "Passed",\n            "startedDate": "2020-10-28T12:48:51.32Z",\n            "endedDate": "2020-10-28T12:49:21.584Z",\n            "inputs": [\n              {\n                "name": "additional_parameters",\n                "value": "dfgsd"\n              }\n            ],\n            "errorCode": 0,\n            "errorMessage": "",\n            "hasReport": false\n          },\n          {\n            "id": "3c63a8ce-348e-4b5d-acb2-41d3d9f9ecaf",\n            "testId": "17936298/140_tests_tsivya2/b (103).robot",\n            "name": "b (103).robot",\n            "path": "140_tests_tsivya2",\n            "repositoryName": "ROBOT Tests",\n            "result": 1,\n            "resultDescription": "Passed",\n            "startedDate": "2020-10-28T12:49:21.589Z",\n            "endedDate": "2020-10-28T12:49:51.887Z",\n            "inputs": [\n              {\n                "name": "additional_parameters",\n                "value": "dfg"\n              }\n            ],\n            "errorCode": 0,\n            "errorMessage": "",\n            "hasReport": false\n          }\n        ],\n        "sandbox": {\n          "id": "b1824a49-d204-40fc-ae51-fed6e7396960",\n          "name": "job 1 #9",\n          "url": null,\n          "inputs": null\n        },\n        "errorCode": null,\n        "errorMessage": null\n      }\n    ]\n  },\n]\n'})})]}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Response summary"}),(0,n.jsxs)("table",{children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{children:"Parameter"}),(0,n.jsx)("th",{children:"Description/Comments"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"id"}),(0,n.jsx)("td",{children:"Suite execution id. (guid)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"counter"}),(0,n.jsx)("td",{children:"Suite execution number. (numeric)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"suiteTemplateDescription"}),(0,n.jsx)("td",{children:"Suite execution description. (string)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"createdDate"}),(0,n.jsx)("td",{children:"Suite execution creation time. (ISO 8601 Date/Time format)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"executedByName"}),(0,n.jsx)("td",{children:"First and Last name of the CloudShell user who executed the suite. (ISO 8601 Date/Time format)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"executedByUserName"}),(0,n.jsx)("td",{children:"CloudShell username who executed the suite. (string)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"suiteTemplateName"}),(0,n.jsx)("td",{children:"Suite template name. (string)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"suiteTemplateId"}),(0,n.jsx)("td",{children:"Suite template id - included in the suite's URL. (guid)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"startedDate"}),(0,n.jsx)("td",{children:"Suite execution start time. (ISO 8601 Date/Time format)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"endedDate"}),(0,n.jsx)("td",{children:"Suite execution completion time. (ISO 8601 Date/Time format)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"status"}),(0,n.jsxs)("td",{children:["Suite execution status code. (numeric)",(0,n.jsx)("br",{}),"\nFor details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"statusDescription"}),(0,n.jsxs)("td",{children:["Suite execution status description. (string)",(0,n.jsx)("br",{}),"\nFor details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"jobs"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(s.p,{children:["Job details:",(0,n.jsx)("br",{})]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"id"}),": Job ID. (guid)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),": Job name. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"description"}),": Job description, if defined. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"startedDate"}),": Job execution start time. (ISO 8601 Date/Time format)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"endedDate"}),": Job execution completion time. (ISO 8601 Date/Time format)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"status"}),": Job status code. (numeric) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"statusDescription"}),": Job status description. (string) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"testExecutionServerName"}),": Test Execution Service that handled the suite's execution. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"blueprint"}),": Details of the job's blueprint.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"id"}),": Blueprint ID - included in the blueprint's URL. (guid)","\n",(0,n.jsx)("br",{}),"\n","For example:","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.a,{href:"http://192.168.30.6/RM/Diagram/Index/",children:"http://192.168.30.6/RM/Diagram/Index/"}),(0,n.jsx)("b",{children:"0efe151f-a581-4e6d-b9e2-7473bbcf297e"}),"?diagramType=Topology"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Name"}),": Blueprint name. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"URL"}),": Blueprint URL. (string)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"tests"}),": Details of the job's tests.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"id"}),": Unique id of the test\u2019s execution. (guid)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"testID"}),": Test path on the online test repository. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),": Test name. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"path"}),": Test's folder path on the online test repository. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"repositoryName"}),": Name of online repository containing the test. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"result"}),": Test result code. (numeric) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"resultDescription"}),": Test result description. (string) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"startedDate"}),": Test execution start time. (ISO 8601 Date/Time format)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"EndedDate"}),": Test execution completion time. (ISO 8601 Date/Time format)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Inputs"}),": Details about the test's inputs:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),": Input name. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Value"}),": Input value, if defined. (string)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"errorCode"}),": Test error code. (numeric) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"errorMessage"}),": Test error message. (string) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"hasReport"}),": Test report, if generated. (bool)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"sandbox"}),": Details about the sandbox spun up for the job's execution.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"id"}),": Sandbox ID - included in the sandbox URL. (guid)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"name"}),': Sandbox name, comosed of job name, dash and job execution number. (string) For example: "job 1 #1"']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"url"}),": Sandbox URL. (string)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"inputs"}),": Sandbox inputs, if defined. (string)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"errorCode"}),": Job error code. (numeric) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"errorMessage"}),": Job error message. (string) For details, see ",(0,n.jsx)(s.a,{href:"./jss-rest-api-response-codes",children:"Statuses and results"}),"."]}),"\n"]})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>d});var n=t(11504);const r={},i=n.createContext(r);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);