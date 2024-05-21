"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[52304],{21456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=n(17624),i=n(4552);const r={sidebar_position:9},d="Get suite template details",l={id:"api-guide/new-jss-rest-api/get-suite-template-details",title:"Get suite template details",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-template-details.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/get-suite-template-details",permalink:"/api-guide/new-jss-rest-api/get-suite-template-details",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/get-suite-template-details.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Delete suite template",permalink:"/api-guide/new-jss-rest-api/delete-suite-template"},next:{title:"Get suite template executions",permalink:"/api-guide/new-jss-rest-api/get-suite-template-executions"}},a={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"get-suite-template-details",children:"Get suite template details"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets a detailed summary of a suite template in a domain."}),"\n",(0,s.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"http://{Job Scheduling API IP}:{port#}/api/spaces/{space_name}/SuiteTemplate/{id}"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description/Comments"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"space_name"}),(0,s.jsx)(t.td,{children:"CloudShell domain in which the suite was executed. (string)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"id"}),(0,s.jsxs)(t.td,{children:["Suite execution's ID- included in the suite's URL. (string)",(0,s.jsx)("br",{}),"For example:",(0,s.jsx)("br",{}),(0,s.jsxs)("code",{children:["ht",(0,s.jsx)("span",{children:"tp"}),"://192.168.74.11/Test%20Lab/execution/",(0,s.jsx)("b",{children:"1ab91be7-6136-4fd5-b22d-72c462947459"}),"/"]})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET"})}),"\n",(0,s.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Headers"}),(0,s.jsx)(t.p,{children:"Example header format:"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Content-Type: application/json"})})]}),"\n",(0,s.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response example"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'{\n  "id": "b25d72e0-4f44-4b62-949c-02596196b157",\n  "createdDate": "2020-10-28T10:30:19.122Z",\n  "ownerUsername": "admin",\n  "ownerName": "admin",\n  "modifiedDate": "2020-10-28T11:10:07.78Z",\n  "modifiedByUsername": "admin",\n  "modifiedByName": "admin",\n  "testTypeName": "Robot",\n  "testTypeId": "59aabbe8-dc0b-48c4-81af-d76f915b47b1",\n  "spaceId": "35f2d31b-7ce2-45b1-b7aa-7e5002a9031c",\n  "spaceName": "Test Lab",\n  "name": "Hardware Network Test",\n  "description": "",\n  "cronTrigger": null,\n  "shouldStartAutomatically": false,\n  "jobs": [\n    {\n      "name": "job 1",\n      "description": "",\n      "durationBufferInMinutes": 0,\n      "blueprint": {\n        "id": "0efe151f-a581-4e6d-b9e2-7473bbcf297e",\n        "name": "CloudShell Sandbox Template",\n        "inputs": []\n      },\n      "tests": [\n        {\n          "id": "17936298/demo_tests1/new_test (1).robot",\n          "name": "new_test (1).robot",\n          "path": "demo_tests1",\n          "durationInMinutes": 1,\n          "inputs": [\n            {\n              "name": "additional_parameters",\n              "value": ""\n            }\n          ],\n          "repositoryName": "ROBOT Tests"\n        },\n        {\n          "id": "17936298/140_tests_tsivya2/b (101).robot",\n          "name": "b (101).robot",\n          "path": "140_tests_tsivya2",\n          "durationInMinutes": 1,\n          "inputs": [\n            {\n              "name": "additional_parameters",\n              "value": "fghfgh"\n            }\n          ],\n          "repositoryName": "ROBOT Tests"\n        },\n        {\n          "id": "17936298/140_tests_tsivya2/b (102).robot",\n          "name": "b (102).robot",\n          "path": "140_tests_tsivya2",\n          "durationInMinutes": 3,\n          "inputs": [\n            {\n              "name": "additional_parameters",\n              "value": "dfgsd"\n            }\n          ],\n          "repositoryName": "ROBOT Tests"\n        },\n        {\n          "id": "17936298/140_tests_tsivya2/b (103).robot",\n          "name": "b (103).robot",\n          "path": "140_tests_tsivya2",\n          "durationInMinutes": 4,\n          "inputs": [\n            {\n              "name": "additional_parameters",\n              "value": "dfg"\n            }\n          ],\n          "repositoryName": "ROBOT Tests"\n        }\n      ]\n    }\n  ]\n}\n'})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Response summary"}),(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Parameter"}),(0,s.jsx)("th",{children:"Description/Comments"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"id"}),(0,s.jsx)("td",{children:"Suite execution id. (guid)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"createdDate"}),(0,s.jsx)("td",{children:"Suite template creation time. (ISO 8601 Date/Time format)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"ownerUserName"}),(0,s.jsx)("td",{children:"CloudShell username who owns the suite template. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"ownerName"}),(0,s.jsx)("td",{children:"First and Last name of the CloudShell user who owns the suite template. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"modifiedDate"}),(0,s.jsx)("td",{children:"Last modification time of suite template. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"modifiedByUserName"}),(0,s.jsx)("td",{children:"CloudShell user who last modified the template. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"testTypeName"}),(0,s.jsx)("td",{children:"Testing framewor of suite's tests. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"testTypeId"}),(0,s.jsx)("td",{children:"ID of the test type. (guid)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"spaceId"}),(0,s.jsx)("td",{children:"ID of domain in which the suite template resides. (guid)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"spaceName"}),(0,s.jsx)("td",{children:"Domain in which the suite template resides. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"Suite template name. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"description"}),(0,s.jsx)("td",{children:"Suite template description. (string)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cronTrigger"}),(0,s.jsx)("td",{children:"Configured recurring executions of this suite, in cron. (cron expression)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"shouldStartAutomatically"}),(0,s.jsx)("td",{children:"Specifies if suite execution is set to start automatically (true). (bool)"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"jobs"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(t.p,{children:["Job details:",(0,s.jsx)("br",{})]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": Job name. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"description"}),": Job description, if defined. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"durationBufferInMinutes"}),": Buffer period, in minutes. (numeric)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"blueprint"}),": Details of the job's blueprint.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": Blueprint ID - included in the blueprint's URL. (guid)","\n",(0,s.jsx)("br",{}),"\n","For example:","\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.a,{href:"http://192.168.30.6/RM/Diagram/Index/",children:"http://192.168.30.6/RM/Diagram/Index/"}),(0,s.jsx)("b",{children:"0efe151f-a581-4e6d-b9e2-7473bbcf297e"}),"?diagramType=Topology"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": Blueprint name. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"inputs"}),": Inputs defined on the job's blueprint. (string) (string)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"tests"}),": Details of the job's tests.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": Test ID. (guid)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": Test name. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"path"}),": Test path from the root. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"durationInMinutes"}),": Test's duration, in minutes. (numeric)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"inputs"}),": Details about the test's inputs:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"}),": Input name. (string)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Value"}),": Input value, if defined. (string)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"repositoryName"}),": Name of online repository containing the test. (string)"]}),"\n"]}),"\n"]}),"\n"]})]})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>d});var s=n(11504);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);