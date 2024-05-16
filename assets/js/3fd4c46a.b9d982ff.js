"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[5784],{8744:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(17624),n=t(4552);const i={sidebar_position:2},d="CloudShell Port Requirements",l={id:"install-configure/cs-system-requirements/cs-port-requirements",title:"CloudShell Port Requirements",description:"This article illustrates the CloudShell suite component architecture and ports used by CloudShell.",source:"@site/versioned_docs/version-2023.3/install-configure/cs-system-requirements/cs-port-requirements.md",sourceDirName:"install-configure/cs-system-requirements",slug:"/install-configure/cs-system-requirements/cs-port-requirements",permalink:"/install-configure/cs-system-requirements/cs-port-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cs-system-requirements/cs-port-requirements.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Component Architecture",permalink:"/install-configure/cs-system-requirements/cs-component-architechture"},next:{title:"Minimum Requirements for CloudShell Servers and Clients",permalink:"/install-configure/cs-system-requirements/min-requirements-for-cs"}},o={},c=[];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"cloudshell-port-requirements",children:"CloudShell Port Requirements"}),"\n",(0,r.jsx)(s.p,{children:"This article illustrates the CloudShell suite component architecture and ports used by CloudShell."}),"\n",(0,r.jsxs)(s.p,{children:["In the diagram below, components with a ",(0,r.jsx)("span",{style:{color:"green"},children:"green"})," frame were added as part of CloudShell 2020.2's new architecture. For details, see ",(0,r.jsx)(s.a,{href:"/install-configure/cs-system-requirements/cs-component-architechture",children:"CloudShell Component Architecture"}),"."]}),"\n",(0,r.jsx)(s.admonition,{title:"Notes about the diagram below:",type:"note",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["A ",(0,r.jsx)("span",{style:{color:"green"},children:"green"})," frame denotes components related to the New Job Scheduling."]}),"\n",(0,r.jsx)(s.li,{children:"The Insight, QualiX and Portal machines are typically installed outside the private data center in the DMZ network."}),"\n",(0,r.jsx)(s.li,{children:"Port directions (outbound/inbound) is illustrated in the diagram."}),"\n"]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:t(72748).c+"",width:"1995",height:"1106"})}),"\n",(0,r.jsx)(s.p,{children:"The following table describes the required ports for each server or machine on which the port needs to be made available."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"The descriptions for each server/machine indicate which components need outbound port access."})}),"\n",(0,r.jsxs)(s.admonition,{title:"Notes",type:"note",children:[(0,r.jsx)(s.p,{children:"Sandbox Service comes in two flavors, each using a different MongoDB:"}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Service embedded on the Quali Server machine that uses MongoDB over port 27017."}),"\n",(0,r.jsx)(s.li,{children:"Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling."}),"\n"]}),(0,r.jsx)(s.p,{children:"Port 27017 is mostly used while port 27020 is used in very specific use cases where Sandbox Service is installed externally to Quali Server."})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Server/Machine"}),(0,r.jsx)(s.th,{children:"Protocol/Port"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudShell Execution Server"}),(0,r.jsx)(s.td,{children:"HTTPS/443"}),(0,r.jsx)(s.td,{children:"Used by the execution servers in an online CloudShell environment."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"None"}),(0,r.jsx)(s.td,{children:"No configuration required for offline CloudShell environments."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudShell Insight (BI Server)"}),(0,r.jsx)(s.td,{children:"TCP/8081"}),(0,r.jsx)(s.td,{children:"Default Sisense Portal."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTPS/443"}),(0,r.jsx)(s.td,{children:"Used by Sisense Portal SSL (if SSL is configured)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"CloudShell Portal"}),(0,r.jsx)(s.td,{children:"HTTP \u2013 TCP/80"}),(0,r.jsx)(s.td,{children:"Used by browsers to access the CloudShell Portal."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTPS/443"}),(0,r.jsx)(s.td,{children:"Used by CloudShell Portal SSL (if SSL is configured)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"External Test Repository"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Port and protocol depend on the test repository to be used."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Job Scheduling Portal"}),(0,r.jsx)(s.td,{children:"HTTP/80"}),(0,r.jsx)(s.td,{children:"Used by browsers to access Job Scheduling Portal and used by Job Scheduling Portal to access Job Scheduling Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/443"}),(0,r.jsx)(s.td,{children:"Used by CloudShell Portal SSL (if SSL is configured)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Job Scheduling Service"}),(0,r.jsx)(s.td,{children:"HTTP/9000"}),(0,r.jsx)(s.td,{children:"Used by Job Scheduling Service to access Quali Server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/80"}),(0,r.jsx)(s.td,{children:"Used by Job Scheduling Service to access Test Execution Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/5000"}),(0,r.jsx)(s.td,{children:"Used by Job Scheduling Service to authenticate CloudShell user access to Job Scheduling portal and REST API clients."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Licensing Server"}),(0,r.jsx)(s.td,{children:"UDP/5093"}),(0,r.jsx)(s.td,{children:"Used by Quali Server, CloudShell Resource Management Client, CloudShell Authoring, TestShell Studio, TestShell Runner, Execution Server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"MongoDB"}),(0,r.jsx)(s.td,{children:"27017"}),(0,r.jsxs)(s.td,{children:["Used by Quali Server and Sandbox Service, which stores sandbox events data related to historic, active and future sandboxes. ",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Tip:"})," This is the default port, but you can change it as appropriate (see ",(0,r.jsx)(s.a,{href:"/install-configure/cloudshell-suite/configure-products/config-mongodb-connection",children:"Configure the MongoDB Database Connection"}),"). Or, you can use a hosted MongoDB solution (on Kuberentes or your organization\u2019s managed MongoDB solution).",(0,r.jsx)("br",{}),(0,r.jsx)(s.strong,{children:"Note:"})," The Sandbox Service comes in two flavors: ",(0,r.jsx)("br",{}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Service embedded on the Quali Server machine that uses MongoDB over port 27017."}),(0,r.jsx)("li",{children:"Kubernetes microservice with MongoDB over port 270720 in CloudShell deployments that use the New Job Scheduling."})]}),"Port 27017 is mostly used while port 27020 is used in very specific use cases where Sandbox Service is installed externally to Quali Server."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"27018"}),(0,r.jsx)(s.td,{children:"Used by Job Scheduling Service to store related data, including information relating to suites, jobs, tests, reports as well as permitted user identity information."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"27019"}),(0,r.jsx)(s.td,{children:"Used by Identity Service to store CloudShell user data for access control within Job Scheduling Services."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"27020"}),(0,r.jsx)(s.td,{children:"Used by Sandbox Service to store sandbox events data related to historic, active and future sandboxes."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," These are the default ports, but you can change them as appropriate (see Configure the MongoDB Database Connection). Or, you can use a hosted MongoDB solution (on Kuberentes or your organization\u2019s managed MongoDB solution) for the different CloudShell services."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Quali Server"}),(0,r.jsx)(s.td,{children:"TCP/8028"}),(0,r.jsx)(s.td,{children:"Used by all CloudShell components to communicate with the Quali Server (CloudShell Portal, Authoring, Resource Manager Client, TestShell Studio, TestShell Runner)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"TCP/8029 TCP/9000"}),(0,r.jsxs)(s.td,{children:["Used by API clients to communicate with the Quali Server. ",(0,r.jsx)("br",{}),"Quali API port TCP/9000 can be changed using the ",(0,r.jsx)(s.code,{children:"QualiApi.Port"})," configuration key."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/8034"}),(0,r.jsx)(s.td,{children:"Used by the Sandbox API Web server (internal)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"TCP/8031 TCP/8029"}),(0,r.jsx)(s.td,{children:"Used by Execution Servers to communicate with the Quali Server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/8030 TCP/8023"}),(0,r.jsxs)(s.td,{children:["Used by Studio and Runner. ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"8023 is a file streamer service used by Quali Server to provide access to shared tests and assets. "}),(0,r.jsx)("li",{children:"8030 is a centralized HTTP service that Quali Server provides. It grants access to centralized Testshell reports (Used for sharing and downloading test reports)."})]})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP \u2013 TCP/8036"}),(0,r.jsx)(s.td,{children:"(PyPi Server) Used by the execution servers to access the local PyPi Server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTPS/443"}),(0,r.jsx)(s.td,{children:"Used in an online CloudShell environment to access the public Python repository."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"QualiX"}),(0,r.jsx)(s.td,{children:"TCP/80"}),(0,r.jsx)(s.td,{children:"Used for remote desktop gateway (must be accessible from CloudShell Portal and the browsers)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"TCP/443"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"RDP/3389"}),(0,r.jsx)(s.td,{children:"Used by QualiX to access the organization's labs. (physical devices and on-prem/cloud VMs)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"SSH/22"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Telnet/23"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"RabbitMQ"}),(0,r.jsx)(s.td,{children:"TCP/5671"}),(0,r.jsx)(s.td,{children:"Default Rabbit MQ port. Used by Sandbox Service, Quali Server and Job Scheduling Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Remote Runner"}),(0,r.jsx)(s.td,{children:"TCP/8101"}),(0,r.jsx)(s.td,{children:"Used by Studio to request test execution."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"REST API Client"}),(0,r.jsx)(s.td,{children:"HTTP/80"}),(0,r.jsx)(s.td,{children:"Used by REST API Client to access Job Scheduling Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTP/443"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Sandbox API Web Server"}),(0,r.jsx)(s.td,{children:"HTTP/82 HTTPS/3443"}),(0,r.jsx)(s.td,{children:"Used by the API clients to connect and communicate with the API."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"TCP/8034 TCP/8032 TCP/8027"}),(0,r.jsxs)(s.td,{children:["The Sandbox API Web Server consists of three components, which reside on the CloudShell Portal machine:",(0,r.jsx)("br",{}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"CloudShell Server Proxy"})," - communicates with Quali Server over TCP 8034, and communicates internally with CloudShell Sandbox API Gateway over TCP 8033"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"CloudShell Sandbox API Gateway"})," - communicates internally with CloudShell Sandbox API over TCP 8032"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)(s.strong,{children:"CloudShell Sandbox API"})," - communicates with API Client over HTTP 82"]})]}),(0,r.jsx)(s.strong,{children:"Note:"})," The Sandbox API configuration wizard is a web-based configuration page that opens port 8027 on the machine hosting the CloudShell Sandbox API component."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Sandbox Service"}),(0,r.jsx)(s.td,{children:"TCP/8888"}),(0,r.jsx)(s.td,{children:"Used by Sandbox Service to access Quali Server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"SQL Server"}),(0,r.jsx)(s.td,{children:"TCP/1433"}),(0,r.jsxs)(s.td,{children:["Used by Quali server to store and retrieve information.",(0,r.jsx)("br",{}),"For more info: ",(0,r.jsx)(s.a,{href:"https://msdn.microsoft.com/en-us/library/cc646023.aspx",children:"https://msdn.microsoft.com/en-us/library/cc646023.aspx"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Test Discovery Service"}),(0,r.jsx)(s.td,{children:"HTTP/80"}),(0,r.jsx)(s.td,{children:"Used by Test Discovery Service to access Job Scheduling Service."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"HTTPS/443"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Test Execution Service"}),(0,r.jsx)(s.td,{children:"HTTP/80"}),(0,r.jsx)(s.td,{children:"Used for bi-directional access between Job Scheduling Service and Test Execution Service."})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},72748:(e,s,t)=>{t.d(s,{c:()=>r});const r=t.p+"assets/images/ComponentPorts2021.1-031d6b611034c83d7e264583a846d25f.png"},4552:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>d});var r=t(11504);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);