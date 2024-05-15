"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[42028],{47852:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(17624),i=s(4552);const r={sidebar_position:14},l="Start adhoc suite execution",d={id:"api-guide/new-jss-rest-api/start-adhoc-suite-execution",title:"Start adhoc suite execution",description:"Description",source:"@site/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/start-adhoc-suite-execution.md",sourceDirName:"api-guide/new-jss-rest-api",slug:"/api-guide/new-jss-rest-api/start-adhoc-suite-execution",permalink:"/cloudshell-help/api-guide/new-jss-rest-api/start-adhoc-suite-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/api-guide/new-jss-rest-api/start-adhoc-suite-execution.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Start suite execution",permalink:"/cloudshell-help/api-guide/new-jss-rest-api/start-suite-execution"},next:{title:"Delete Test Discovery Service",permalink:"/cloudshell-help/api-guide/new-jss-rest-api/delete-test-discovery-service"}},c={},o=[{value:"Description",id:"description",level:3},{value:"URL",id:"url",level:3},{value:"HTTP method",id:"http-method",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function a(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"start-adhoc-suite-execution",children:"Start adhoc suite execution"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Runs an adhoc suite execution. Adhoc suites are created on-the-fly for the execution and cannot be edited, deleted nor rerun."}),"\n",(0,t.jsx)(n.h3,{id:"url",children:"URL"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"http://{Job Scheduling API IP}:{port#}/{space_name}/SuiteExecution/start"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Description/Comments"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"space_name"}),(0,t.jsx)(n.td,{children:"CloudShell domain in which the suite was executed. (string)"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST"})}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Headers"}),(0,t.jsx)(n.p,{children:"Example header format:"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Authorization: Basic <authorization token returned from the login method>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Content-Type: application/json"})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request body"}),(0,t.jsx)(n.p,{children:"Suite details. The parameters of the adhoc suite execution method include:"}),(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Parameter"}),(0,t.jsx)("th",{children:"Description/Comments"})]}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"name"}),(0,t.jsx)("td",{children:"Name of the suite execution. (string)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"description"}),(0,t.jsx)("td",{children:"Optional description for the suite execution. (string)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"testTypeName"}),(0,t.jsxs)("td",{children:["Type of tests to run. (string)",(0,t.jsx)("br",{}),'Currently, the value to use is "Robot".']})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"jobs"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(n.p,{children:["Job details:",(0,t.jsx)("br",{})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Job name. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"description"}),": Job description, if defined. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"durationBufferInMinutes"}),": Job's execution buffer, in minutes. (Numeric)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"blueprint"}),": Details of the job's blueprint.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Blueprint name. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"inputs"}),": Published global inputs defined in the job's blueprint.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": global input's name. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"value"}),": global input's value. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"abstractRequirements"}),": Published requirements in the blueprint's abstract resources.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"type"}),": Type of abstract requirement. (string)\nThere are two options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['"',(0,t.jsx)(n.strong,{children:"Quantity"}),'" when specifying the number of abstract resources to select.']}),"\n",(0,t.jsxs)(n.li,{children:['"',(0,t.jsx)(n.strong,{children:"Attribute"}),'" for any other attribute requirement.']}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"resource"}),": Name of the abstract resource. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),': Name of the abstract requirement. Specify "Quantity" to indicate the number of abstract resources to select.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"value"}),": Requirement's value. (string, numeric for Quantity)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"additionalInputs"}),": Published additional inputs in the blueprint's abstract resources.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"resource"}),": Name of the abstract resource. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Name of the additional info. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"value"}),": Additional info's value. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"serviceInputs"}),": Published inputs belonging to services in the blueprint.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"resource"}),": Name of the service. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Name of the service input. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"value"}),": Service input's value. (string)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"tests"}),": Details of the job's tests.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Name of the test. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"}),": Path to the test's containing folder. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"durationInMinutes"}),": Test's duration in minutes. (Numeric)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"inputs"}),": Test's inputs.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"name"}),": Input name. (string)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Value"}),": Input value. (string)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"repositoryName"}),": Name of online repository containing the test. (string)"]}),"\n"]}),"\n"]}),"\n"]})]})]})]})]})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Request example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n\t"name": "my ad hoc robot execution",\n\t"description": "string",\n\t"testTypeName": "Robot",\n\t"jobs": [\n\t{\n        "name": "job 1",\n        "description": "string",\n        "durationBufferInMinutes": 3,\n        "blueprint": {\n            "name": "my blueprint",\n            "inputs": [\n            {\n            "name": "Sandbox number",\n            "value": "4"\n            }],\n            "abstractRequirements": [\n            {\n            "type": "Quantity",\n            "resource": "DUT resource",\n            "name": "Quantity",\n            "value": "1"\n            }],\n            "additionalInputs": [{\n            "resource": "DUT resource",\n            "name": "Firmware version",\n            "value": "1.00.2"\n            }],\n            "serviceInputs": [{\n            "resource": "Controller service",\n            "name": "Service.Address",\n            "value": "192.168.45.112"\n            }]\n        },\n        "tests": [\n        {\n            "name": "run-traffic.robot",\n            "path": "Traffic tests",\n            "durationInMinutes": 1,\n            "inputs": [\n                {\n                    "name": "Additional CMD Parameters",\n                    "value": ""\n                }\n            ],\n            "repositoryName": "GitHub"\n        }\n        ]\n    }\n]\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response example"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n  "id": "a7f13fe5-ddee-4ec8-971f-a0e6784c8387"\n}\n'})})]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"Response summary"}),(0,t.jsxs)("table",{children:[(0,t.jsxs)("thead",{children:[(0,t.jsx)("th",{children:"Parameter"}),(0,t.jsx)("th",{children:"Description/Comments"})]}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"id"}),(0,t.jsx)("td",{children:"Suite execution id. (guid)"})]})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>d,M:()=>l});var t=s(11504);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);