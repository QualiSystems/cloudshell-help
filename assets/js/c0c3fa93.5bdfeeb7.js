"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[89128],{27120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=n(17624),i=n(4552);const o={sidebar_position:1},r="New Job Scheduling Architecture",l={id:"install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",title:"New Job Scheduling Architecture",description:"The following diagram illustrates the architecture of a CloudShell deployment with the new New Job Scheduling, including the different components, interconnections and ports. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load.",source:"@site/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture.md",sourceDirName:"install-configure/cloudshell-suite/new-jss-install-config",slug:"/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cloudshell-suite/new-jss-install-config/new-jss-architecture.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"New Job Scheduling Installation and Configuration",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/"},next:{title:"Supported Tools and Technologies (New Job Scheduling)",permalink:"/install-configure/cloudshell-suite/new-jss-install-config/supported-tools"}},c={},d=[];function a(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"new-job-scheduling-architecture",children:"New Job Scheduling Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["The following diagram illustrates the architecture of a CloudShell deployment with the new ",(0,s.jsx)(t.strong,{children:"New Job Scheduling"}),", including the different components, interconnections and ports. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load."]}),"\n",(0,s.jsx)(t.admonition,{title:"Note about the diagram below",type:"note",children:(0,s.jsxs)(t.p,{children:["Components with a ",(0,s.jsx)("span",{style:{color:"green"},children:"green"})," frame denote components related to the New Job Scheduling. ",(0,s.jsx)(t.em,{children:"For details about existing CloudShell components, see"})," ",(0,s.jsx)(t.a,{href:"/install-configure/cs-system-requirements/cs-component-architechture",children:"CloudShell Component Architecture"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(364).c+"",width:"1845",height:"1106"})}),"\n",(0,s.jsx)(t.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The New Job Scheduling services are installed on Kubernetes. These include Job Scheduling Service, Identity Service, Test Discovery Service, Test Execution Service and Sandbox Service. However, Sandbox Service can be installed externally as part of the Quali Server installation."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Sandbox Service comes in two flavors, each using a different MongoDB:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Service embedded on the Quali Server machine that uses MongoDB over port 27017."}),"\n",(0,s.jsx)(t.li,{children:"Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For details, see ",(0,s.jsx)(t.a,{href:"/install-configure/cs-system-requirements/cs-port-requirements",children:"CloudShell Port Requirements"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Component"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ELK"}),(0,s.jsxs)(t.td,{children:["ELK (Elasticsearch, Logstash and Kibana) is an out-of-the-box 3",(0,s.jsx)("sup",{children:"rd"})," party tool that is used to store CloudShell logs. These logs can then be used to investigate deployment issues and bugs, and trace their causes."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"External Test Repository"}),(0,s.jsx)(t.td,{children:"Online test repository that contains tests of a specific type."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Identity Service"}),(0,s.jsx)(t.td,{children:"Identity Service is our authentication engine for the Job Scheduling Service and creates users based on Quali\u2019s identity management mechanism, allowing these users to access and use the Job Scheduling Portal and REST API clients."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Job Scheduling Portal"}),(0,s.jsx)(t.td,{children:"REST API-driven UI client that is used to interact with Job Scheduling Service. Job Scheduling Portal is separate from CloudShell Portal."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Job Scheduling Service"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Job Scheduling Service"})," is a high-performance test automation framework that allows organizations to create, manage and execute test batches. The service is hosted on a Kubernetes cluster and uses Quali Server to extract user, blueprint and sandbox data."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MongoDB"}),(0,s.jsx)(t.td,{children:"Open source database used to store New Job Scheduling-related data (suites, jobs, tests, reports, etc.) as well as permitted user identity information. MongoDB is installed as part of the Quali Server installation. There's also an option to use an existing MongoDB."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"RabbitMQ"}),(0,s.jsx)(t.td,{children:"Open source message queuing tool used by Sandbox Service to manage sandbox creation requests coming from the Job Scheduling Portal and APIs. If needed, RabbitMQ is installed as part of the Quali Server."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Sandbox Service"}),(0,s.jsxs)(t.td,{children:["Sandbox Service is a Python service that comes in two flavors: Windows service (embedded) delivered as part of Quali Server and Linux service included with the New Job Scheduling on Kubernetes (this second flavor supports extremely large deployments, up to hundreds of new sandboxes every few minutes). As such, we also recommend moving the Sandbox Service to the Kubernetes cluster option even for high load deployments without the New Job Scheduling.",(0,s.jsx)("br",{}),"This service performs two key functions:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Processes, prioritizes and invokes all sandbox creation requests against Quali Server. As such, starting with CloudShell 2020.2, Sandbox Service replaces the reservation creation mechanism that was used in pre-2020.2 CloudShell versions, also in deployments that do not use the New Job Scheduling Service. The Windows flavor of the service includes a healthcheck mechanism that actively monitors and restarts the service in the event of a failure."}),(0,s.jsxs)("li",{children:["Acts as the communication layer between Job Scheduling and Quali Server when handling Job Scheduling Service operations. In deployments that use Job Scheduling Services, the Kubernetes-based service needs to be used instead of the Sandbox Service that comes out-of-the-box with Quali Server. For details, see ",(0,s.jsx)(t.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell",children:"Modify CloudShell to Use the Kubernetes-based Services"}),"."]})]}),(0,s.jsx)(t.strong,{children:"For upgrades in CloudShell environments that have Docker"}),", Sandbox Service will be installed externally on Docker and the ",(0,s.jsx)(t.code,{children:"UseEmbeddedSandboxService"})," configuration key needs to be used to configure the deployment to use this external Sandbox Service."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Test Discovery Service"}),(0,s.jsxs)(t.td,{children:["Test Discovery Service is responsible for discovering tests of a specific type. A Test Discovery Service can only discover tests of a specific type in a specific repository. For more information, see ",(0,s.jsx)(t.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",children:"Test Discovery Service"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Test Execution Service"}),(0,s.jsxs)(t.td,{children:["Test Execution Service is responsible for running tests discovered by the Test Discovery Service. For more information, see ",(0,s.jsx)(t.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/",children:"Test Execution Service"}),".",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Important:"})," Test Execution Service does not handle shell and script commands. CloudShell Execution Servers are required to handle such operations (e.g. setup, teardown, resource commands and sandbox commands)."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},364:(e,t,n)=>{n.d(t,{c:()=>s});const s=n.p+"assets/images/JssArchitecture-97057b54dd6434be5381de537c47339f.png"},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>r});var s=n(11504);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);