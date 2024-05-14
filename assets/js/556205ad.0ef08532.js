"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[1868],{82548:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(17624),i=t(4552);const o={sidebar_position:1},l="CloudShell Component Architecture",r={id:"install-configure/cs-system-requirements/cs-component-architechture",title:"CloudShell Component Architecture",description:"This article illustrates a basic CloudShell deployment. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load. For details about the ports required for communication between the components, see CloudShell Port Requirements. For details about CloudShell in High Availability mode, see Deployment Types (High Availability).",source:"@site/docs/install-configure/cs-system-requirements/cs-component-architechture.md",sourceDirName:"install-configure/cs-system-requirements",slug:"/install-configure/cs-system-requirements/cs-component-architechture",permalink:"/cloudshell-help/next/install-configure/cs-system-requirements/cs-component-architechture",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/install-configure/cs-system-requirements/cs-component-architechture.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell System Requirements",permalink:"/cloudshell-help/next/install-configure/cs-system-requirements/"},next:{title:"CloudShell Port Requirements",permalink:"/cloudshell-help/next/install-configure/cs-system-requirements/cs-port-requirements"}},a={},d=[];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"cloudshell-component-architecture",children:"CloudShell Component Architecture"}),"\n",(0,n.jsxs)(s.p,{children:["This article illustrates a basic CloudShell deployment. Out of the box, CloudShell is installed on Windows along with the Sandbox Service, MongoDB and RabbitMQ service, while the New Job Scheduling services (introduced in CloudShell 2020.2) are deployed on a Kubernetes cluster. New Job Scheduling deployments come with their own Sandbox Service, MongoDB and RabbitMQ installations on Kubernetes to support high load. For details about the ports required for communication between the components, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cs-system-requirements/cs-port-requirements",children:"CloudShell Port Requirements"}),". For details about CloudShell in High Availability mode, see ",(0,n.jsx)(s.a,{href:"../../install-configure/ha-deployment/deployment-types-ha",children:"Deployment Types (High Availability)"}),"."]}),"\n",(0,n.jsx)(s.admonition,{title:"Notes about the diagram below:",type:"note",children:(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)("span",{style:{color:"green"},children:"green"})," frame denotes components related to the New Job Scheduling."]}),"\n",(0,n.jsxs)(s.li,{children:["Components in ",(0,n.jsx)("span",{style:{color:"orange"},children:"orange"})," are 3",(0,n.jsx)("sup",{children:"rd"})," party tools/technologies."]}),"\n",(0,n.jsx)(s.li,{children:"The Insight, QualiX and Portal machines are typically installed outside the private data center in the DMZ network."}),"\n"]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{src:t(43876).c+"",width:"1959",height:"989"}),"\nThe CloudShell components are described in the following table:"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)("span",{style:{color:"red"},children:"*"})," TestShell, CloudShell Authoring and Job Scheduling are CloudShell paid add-on solutions."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Component"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["CloudShell Authoring",(0,n.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,n.jsx)(s.td,{children:"Code-free hardware interface editor for quick driver development for any blueprint, supporting full equipment interchangeability and automatic documentation for easy collaboration."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell Execution Server"}),(0,n.jsx)(s.td,{children:"Remotely executes setup, teardown and sandbox commands. It can also execute test suites and jobs from the Job Scheduling dashboard. This component adds to CloudShell Portal's total execution capacity. Execution servers can be either Windows or Linux-based."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell License Server"}),(0,n.jsx)(s.td,{children:"Manages network license distribution. The License Server can be installed on any machine, and should be installed before installing client components."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell Portal"}),(0,n.jsxs)(s.td,{children:["A self-service web client that enables you to manage your resources, create and manage blueprints and sandboxes, as well as manage and schedule your automated testing.",(0,n.jsx)("br",{}),"You can leverage CloudShell\u2019s extensive automation capabilities to run blueprint and resource commands as well as automate business use cases within Sandboxes."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell Resource Management Client"}),(0,n.jsxs)(s.td,{children:["Use CloudShell Resource Manager to manage resources and usage. For an example of using this component, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/complete-install/install-cloudshell/import-users-from-ad",children:"Import User Definitions from an Active Directory (Optional)"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell Runtime"}),(0,n.jsx)(s.td,{children:"Supports the execution of CloudShell flows and drivers."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"CloudShell Sandbox API"}),(0,n.jsxs)(s.td,{children:["The CloudShell Sandbox API is a REST API that enables you to consume and interact with CloudShell sandboxes. Using Sandbox API, it is possible to integrate CloudShell with software interfaces to develop and automate Continuous Integration/DevOps processes. For example, you can use API functions to view details about blueprints and sandboxes related to a particular user domain and user permissions, and the available actions that can be performed on the blueprints and sandboxes.",(0,n.jsx)("br",{}),"The Sandbox API consists of three components, which reside on the CloudShell Portal machine: ",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(s.strong,{children:"CloudShell Server Proxy"})," - communicates with Quali Server, and communicates internally with CloudShell Sandbox API Gateway"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.strong,{children:"CloudShell Sandbox API Gateway"})," - communicates internally with CloudShell Sandbox API"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(s.strong,{children:"CloudShell Sandbox API"})," - communicates with API Client"]})]})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Database Servers"}),(0,n.jsxs)(s.td,{children:["CloudShell uses SQL and MongoDB. ",(0,n.jsx)("br",{}),"SQL for CloudShell-related data such as blueprints, user identities, inventory resources, configurations, Apps and Insight data for BI analysis. ",(0,n.jsx)("br",{}),"MongoDB is an open source database used to store sandbox events, New Job Scheduling-related data (suites, jobs, tests, reports, etc.) and permitted user identities.MongoDB instances for Quali Server and Sandbox Service are installed as part of the Quali Server installation. There's also an option to use an existing MongoDB Server or cluster."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Elastic Search"}),(0,n.jsx)(s.td,{children:"The 64-bit version of Java is required when using a 64-bit version of Windows."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PyPi Server"}),(0,n.jsx)(s.td,{children:"CloudShell manages driver and script dependencies using PyPi Server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Quali API"}),(0,n.jsx)(s.td,{children:"The Quali API library provides access to job scheduling operations from outside of the Job Scheduling dashboard, as well as functions related to sandboxes, for example, attach file to sandbox and import and export of blueprints."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Quali Server"}),(0,n.jsx)(s.td,{children:"Runs the CloudShell framework and manages CloudShell data."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"QualiX"}),(0,n.jsx)(s.td,{children:"Used for remote desktop gateway (must be accessible from CloudShell Portal and the browsers)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sandbox Service"}),(0,n.jsxs)(s.td,{children:["Sandbox Service is a Python service that comes in two flavors: Windows service (embedded) delivered as part of Quali Server and Linux service included with the New Job Scheduling on Kubernetes (this second flavor supports extremely large deployments, up to hundreds of new sandboxes every few minutes). As such, we also recommend moving the Sandbox Service to the Kubernetes cluster option even for high load deployments without the New Job Scheduling. ",(0,n.jsx)("br",{}),"This service performs two key functions: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Processes, prioritizes and invokes all sandbox creation requests against Quali Server. As such, starting with CloudShell 2020.2, Sandbox Service replaces the reservation creation mechanism that was used in pre-2020.2 CloudShell versions, also in deployments that do not use the New Job Scheduling. The Windows flavor of the service includes a healthcheck mechanism that actively monitors and restarts the service in the event of a failure."}),(0,n.jsxs)("li",{children:["Acts as the communication layer between Job Scheduling and Quali Server when handling New Job Scheduling operations. In deployments that use New Job Scheduling, the Kubernetes-based service needs to be used instead of the Sandbox Service that comes out-of-the-box with Quali Server. For details, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/high-level-install-flow/modify-cloudshell",children:"Modify CloudShell to Use the Kubernetes-based Services"}),"."]})]})," ",(0,n.jsx)(s.strong,{children:"For upgrades in CloudShell environments that have Docker"}),", Sandbox Service will be installed externally on Docker and the ",(0,n.jsx)(s.code,{children:"UseEmbeddedSandboxService"})," configuration key needs to be used to configure the deployment to use this external Sandbox Service."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Sisense"}),(0,n.jsx)(s.td,{children:"CloudShell Insight (BI Server)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"TestShell API"}),(0,n.jsx)(s.td,{children:"The TestShell API library comprises functions for interacting with Quali Server. For example, you can use API functions to create and configure resources, blueprints, routes, and Sandboxes. This API library also provides a set of lab management batch operation functions."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["TestShell Remote Runner",(0,n.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,n.jsx)(s.td,{children:"Executes TestShell-specific automation steps or complete scenarios on remote stations, enabling the launch of any script or protocol on a remote machine, without requiring complex infrastructure."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["TestShell Studio",(0,n.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,n.jsx)(s.td,{children:"Desktop applications for GUI based test authoring and execution. (Studio and Runner are automatically installed with TestShell Studio.)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:(0,n.jsxs)(s.strong,{children:["New Job Scheduling",(0,n.jsx)("span",{style:{color:"red"},children:"*"})," Components:"]})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"ELK"}),(0,n.jsxs)(s.td,{children:["ELK (",(0,n.jsx)(s.em,{children:"Elasticsearch, Logstash and Kibana"}),") is a 3rd party tool that can be used to store CloudShell logs. These logs can then be used to investigate deployment issues and bugs, and trace their causes."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"External Test Repository"}),(0,n.jsx)(s.td,{children:"Online GitLab test repository that contains tests of a specific type. For example, GitLab."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Identity Service"}),(0,n.jsx)(s.td,{children:"Identity Service is our authentication engine for the New Job Scheduling and creates users based on Quali\u2019s identity management mechanism, allowing these users to access and use the Job Scheduling Portal and REST API clients."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Job Scheduling Portal"}),(0,n.jsx)(s.td,{children:"REST API-driven UI client that is used to interact with New Job Scheduling. Job Scheduling Portal is separate from CloudShell Portal."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Job Scheduling Service"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.strong,{children:"Job Scheduling Service"})," is a high-performance test automation framework that allows organizations to create, manage and execute test batches. The service is hosted on a Kubernetes cluster and uses Quali Server to extract user, blueprint and sandbox data."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"RabbitMQ"}),(0,n.jsxs)(s.td,{children:["Open source message queuing tool used by Sandbox Service to manage sandbox creation requests coming from the Job Scheduling Portal and APIs. If needed, ",(0,n.jsx)(s.em,{children:"RabbitMQ"})," is installed as part of the Quali Server."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Test Discovery Service"}),(0,n.jsxs)(s.td,{children:["Test Discovery Service is responsible for discovering tests of a specific type. A Test Discovery Service can only discover tests of a specific type in a specific repository. For more information, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-discovery-service/",children:"Test Discovery Service"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Test Execution Service"}),(0,n.jsxs)(s.td,{children:["Test Execution Service is responsible for running tests discovered by the Test Discovery Service. For more information, see ",(0,n.jsx)(s.a,{href:"/cloudshell-help/next/install-configure/cloudshell-suite/new-jss-install-config/test-execution-service/",children:"Test Execution Service"}),". ",(0,n.jsx)("br",{}),(0,n.jsx)(s.strong,{children:"Important:"})," Test Execution Service does not handle shell and script commands. CloudShell Execution Servers are required to handle such operations."]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},43876:(e,s,t)=>{t.d(s,{c:()=>n});const n=t.p+"assets/images/CloudshellComponents2021.1-cc1179a05202a6c170c87c6bca7954e2.png"},4552:(e,s,t)=>{t.d(s,{I:()=>r,M:()=>l});var n=t(11504);const i={},o=n.createContext(i);function l(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);