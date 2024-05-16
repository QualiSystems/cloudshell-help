"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[87236],{53540:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var n=s(17624),i=s(4552);const a={sidebar_position:1},l="Creating Suites",r={id:"jss/jss-portal/job-scheduling-page/managing-suites/create-suites",title:"Creating Suites",description:"A suite must have at least one job that has a test, but you can have several jobs, each with different tests. Each job is associated to a CloudShell blueprint, which is reserved when the job is executed. Tests are run sequentially in the order they were added to the job.",source:"@site/versioned_docs/version-2023.3/jss/jss-portal/job-scheduling-page/managing-suites/create-suites.md",sourceDirName:"jss/jss-portal/job-scheduling-page/managing-suites",slug:"/jss/jss-portal/job-scheduling-page/managing-suites/create-suites",permalink:"/cloudshell-help/jss/jss-portal/job-scheduling-page/managing-suites/create-suites",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/jss/jss-portal/job-scheduling-page/managing-suites/create-suites.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Managing Suites",permalink:"/cloudshell-help/jss/jss-portal/job-scheduling-page/managing-suites"},next:{title:"Editing Suites",permalink:"/cloudshell-help/jss/jss-portal/job-scheduling-page/managing-suites/edit-suites"}},d={},o=[{value:"Using the sandbox&#39;s details in a test",id:"using-the-sandboxs-details-in-a-test",level:2},{value:"Sandbox object example",id:"sandbox-object-example",level:3},{value:"Connectivity context that is passed into tests",id:"connectivity-context-that-is-passed-into-tests",level:3},{value:"Usage examples",id:"usage-examples",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"creating-suites",children:"Creating Suites"}),"\n",(0,n.jsx)(t.p,{children:"A suite must have at least one job that has a test, but you can have several jobs, each with different tests. Each job is associated to a CloudShell blueprint, which is reserved when the job is executed. Tests are run sequentially in the order they were added to the job."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"To create a suite:"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard, click ",(0,n.jsx)(t.strong,{children:"Space"})," in the top left corner and select the CloudShell domain."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"+ Add New Suite"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter the suite\u2019s ",(0,n.jsx)(t.strong,{children:"Name"})," (50 characters max) and optionally a ",(0,n.jsx)(t.strong,{children:"Description"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["By default, suites are executed on demand by the user or automation process. To run on a recurring schedule, expand ",(0,n.jsx)(t.strong,{children:"Advanced Scheduling"})," and set the time interval in Cron syntax."]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Cron example"}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(50272).c+"",width:"476",height:"259"})}),(0,n.jsx)(t.p,{children:"The suite will be triggered as follows:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1740).c+"",width:"497",height:"174"})})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add a job:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"+ Add Job"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter the job\u2019s ",(0,n.jsx)(t.strong,{children:"Name"})," (50 characters max), ",(0,n.jsx)(t.strong,{children:"Duration"})," (in minutes) and ",(0,n.jsx)(t.strong,{children:"Description"})," (optional). The job\u2019s duration comprises the estimated duration of each of the job's tests, with buffer and provisioning estimates (if the blueprint includes setup/teardown commands)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the Blueprint ",(0,n.jsx)(t.img,{src:s(15332).c+"",width:"15",height:"15"})," button and select a blueprint. The suite\u2019s execution will create a sandbox based on this blueprint for this job and run the tests on the sandbox environment."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Persistent blueprints as well as blueprints that require approval are unavailable for the New Job Scheduling."})}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"info",children:(0,n.jsx)(t.p,{children:"The New Job Scheduling exposes only global inputs for blueprints. If your blueprint requires other types of inputs that don\u2019t have a default value, the job execution will fail. To prevent this from happening, make sure those inputs have default values."})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If the blueprint has inputs, the ",(0,n.jsx)(t.strong,{children:"Blueprint Inputs"})," section is displayed. Expand the section and specify the values as appropriate. Global inputs, abstract requirements, additional info and service inputs are supported."]}),"\n",(0,n.jsx)(t.p,{children:"For example, blueprint containing a global input:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(2576).c+"",width:"950",height:"203"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add tests to the job:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Tests"})," ",(0,n.jsx)(t.img,{src:s(15332).c+"",width:"15",height:"15"})," button."]}),"\n",(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["To learn how to use the sandbox's details in Robot tests, see the ",(0,n.jsx)(t.a,{href:"#using-the-sandboxs-details-in-a-test",children:"Using the sandbox's details in a test"})," section below."]}),"\n",(0,n.jsxs)(t.li,{children:["We also have Community grade libraries that allow you to use CloudShell Automation and Quali API to connect to CloudShell and run commands from your Robot tests. For details, see our ",(0,n.jsx)(t.a,{href:"https://github.com/QualiSystemsLab/JSS-Robot-Test-Samples",children:"JSS-Robot-Test-Samples"})," GitHub repo."]}),"\n"]})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Add a Test"})," pane on the right, search for a suitable test, click the test\u2019s name and set the test\u2019s ",(0,n.jsx)(t.strong,{children:"Duration"})," (in minutes)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Additional CMD Parameters"})," field, optionally specify parameters to pass to the test's execution. The parameters must be in Robot ",(0,n.jsx)(t.a,{href:"https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html",children:"test execution command line format"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"-D 'My doc'  -v my_var:120 -v my_var2:10\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"To use variables from an external file in the test, declare the variables python file in the test itself."}),(0,n.jsx)(t.p,{children:"For example:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"*** Settings *** \n| Variables | variables_file.py\n"})})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Repeat to add additional tests."}),"\n",(0,n.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The best practice is to set each robot suite (single robot test file) to run a single test. Setting a robot suite to run multiple tests is supported. However, if one of the tests fails, the New Job Scheduling will not be able to identify which test failed."}),"\n",(0,n.jsxs)(t.li,{children:["However, if you wish to add multiple tests to the job, make sure all of the tests' dependencies are included in the ",(0,n.jsx)(t.code,{children:"requirements.txt"})," file that will be used when executing the first test in the job. For details, see ",(0,n.jsx)(t.a,{href:"/cloudshell-help/install-configure/cloudshell-suite/new-jss-install-config/test-repository-config/set-up-repo",children:"Setting Up a Test Repository"}),"."]}),"\n"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Add additional jobs, as appropriate."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.strong,{children:"Create"}),". The suite is displayed in the ",(0,n.jsx)(t.strong,{children:"Job Scheduling"})," dashboard."]}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"If the suite is not created, it\u2019s probably because you didn\u2019t specify some mandatory details. Scroll up and fill in the details marked in red. For example:"}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(44613).c+"",width:"1021",height:"422"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-sandboxs-details-in-a-test",children:"Using the sandbox's details in a test"}),"\n",(0,n.jsx)(t.p,{children:"This section explains how to configure your Robot Framework tests to use details from the sandbox."}),"\n",(0,n.jsxs)(t.p,{children:["This is achieved using the ",(0,n.jsx)(t.strong,{children:"sandbox"})," object, which CloudShell passes automatically to the tests as a variable. The object includes details about the sandbox, such as sandbox id, end time, components (resources, Apps, services), connections and inputs."]}),"\n",(0,n.jsx)(t.h3,{id:"sandbox-object-example",children:"Sandbox object example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'"sandbox": {\n    "id": "uuid",\n    "end_time": "datetime (iso 8601)",\n    "teardown_time": "datetime (iso 8601)",\n    "global_inputs": [\n      {\n        "name": "string",\n        "value": "string"\n      }\n    ],\n    "additional_inputs": [\n      {\n        "name": "string",\n        "value": "string",\n        "resource_name": "string"\n      }\n    ],\n    "abstract_requirements": [\n      {\n        "name": "string",\n        "value": "string",\n        "resource_name": "string",\n        "type": "string"\n      }\n    ],\n    "service_inputs": [\n      {\n        "name": "string",\n        "value": "string",\n        "resource_name": "string"\n      }\n    ],\n    "resources": [\n      {\n        "name": "string",\n        "address": "string",\n        "full_address": "string",\n        "family": "string",\n        "model": "string",\n        "blueprint_alias": "string",\n        "connected_to": "string"\n      }\n    ]\n  }\n'})}),"\n",(0,n.jsx)(t.h3,{id:"connectivity-context-that-is-passed-into-tests",children:"Connectivity context that is passed into tests"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{\n    "connectivity":\n        "server_address: .. ,\n        "cloudshell_api_port: .. ,\n        "cloudshell_api_scheme: .. ,\n        "quali_api_port: .. ,\n        "admin_auth_token: .. ,\n        "use_webapi_endpoint: .. ,\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"usage-examples",children:"Usage examples"}),"\n",(0,n.jsx)(t.p,{children:"Robot test that uses the sandbox's id, global input and value:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"*** Settings ***\nLibrary    Collections\n\n*** Test Cases ***\nPrint sandbox id and 1st global input\n    print sandbox id ${sandbox.id}\n    print 1st global input ${sandbox.global_inputs}\n\n*** Keywords ***\n    print sandbox id\n    [Arguments] ${id}\n    Log To Console ${id}\n    print 1st global input\n    [Arguments] ${global_inputs}\n    ${num} = Get From List ${global_inputs} 0\n    Log To Console  ${num.value}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},15332:(e,t,s)=>{s.d(t,{c:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEcSURBVChTjYrPSgJRFMbPmxQERYHQQhCShIGJBKG2QdueoWV/qEQbEiukEE1w0yoqimjhCyT6KuG959yZ69RQZ+5QMTGNHT5+fHznB2/mKkM/f6Onu95U12NGiTrv/I008H1/40nPdNz0sMMmOP3xbNuda7sTySbY1958Uy00XUOV0tmEzKXKXKh/EhYbZKK+Csd/0cFtwq4ge07ZM4pz3NfBXcJOkKtTro7fvH/9+Dn9fhr/Qr6GSycYpx7o4CFhRyg4uHwsQzqGYddDHTwm7AhWVVoVaVXRcEKHzQbaR2KlLO2ysJl/dzah1VOrB6J4KIshRUpv9Vwgou0rLO2L0t4oheywybZCpM6z2qrJ9V2xtjP6Rd75yw6R+gSCiqZd3s2fGQAAAABJRU5ErkJggg=="},50272:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/JssAdvancedSchedulingCron_476x259-55c5c500eebf79c219da0cd46bd10651.png"},2576:(e,t,s)=>{s.d(t,{c:()=>n});const n="data:image/png;base64,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"},44613:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/JssCreateSuiteTemplate-c240bb7d8c30442f63379d4cf91c0421.png"},1740:(e,t,s)=>{s.d(t,{c:()=>n});const n=s.p+"assets/images/JssCrontagGuru_497x174-99d853e9add336a114ba8e4d063f34dd.png"},4552:(e,t,s)=>{s.d(t,{I:()=>r,M:()=>l});var n=s(11504);const i={},a=n.createContext(i);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);