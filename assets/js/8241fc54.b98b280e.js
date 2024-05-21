"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[42052],{50480:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=i(17624),s=i(4552);const t={sidebar_position:3},l="Minimum Requirements for CloudShell Servers and Clients",d={id:"install-configure/cs-system-requirements/min-requirements-for-cs",title:"Minimum Requirements for CloudShell Servers and Clients",description:"This article includes prerequisites and supported platforms that are required for CloudShell Server components, including Quali Server, Execution Server, QualiX Server, Insight BI and Linux Execution Server.",source:"@site/versioned_docs/version-2023.3/install-configure/cs-system-requirements/min-requirements-for-cs.md",sourceDirName:"install-configure/cs-system-requirements",slug:"/install-configure/cs-system-requirements/min-requirements-for-cs",permalink:"/install-configure/cs-system-requirements/min-requirements-for-cs",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/cs-system-requirements/min-requirements-for-cs.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CloudShell Port Requirements",permalink:"/install-configure/cs-system-requirements/cs-port-requirements"},next:{title:"3rd Party Software",permalink:"/install-configure/cs-system-requirements/third-party-software"}},o={},c=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Hardware requirements for Quali Server",id:"hardware-requirements-for-quali-server",level:3},{value:"Hardware requirements for all other CloudShell servers/clients",id:"hardware-requirements-for-all-other-cloudshell-serversclients",level:3},{value:"Hardware requirements for Kubernetes (for New Job Scheduling)",id:"hardware-requirements-for-kubernetes-for-new-job-scheduling",level:3},{value:"Windows OS\xa0requirements",id:"windows-osrequirements",level:2},{value:"Related Topics",id:"related-topics",level:2}];function h(e){const r={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"minimum-requirements-for-cloudshell-servers-and-clients",children:"Minimum Requirements for CloudShell Servers and Clients"}),"\n",(0,n.jsx)(r.p,{children:"This article includes prerequisites and supported platforms that are required for CloudShell Server components, including Quali Server, Execution Server, QualiX Server, Insight BI and Linux Execution Server."}),"\n",(0,n.jsx)(r.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,n.jsx)(r.h3,{id:"hardware-requirements-for-quali-server",children:"Hardware requirements for Quali Server"}),"\n",(0,n.jsx)(r.p,{children:"Hardware and software requirements change depending on the type and scale of your CloudShell deployment."}),"\n",(0,n.jsx)(r.p,{children:"To help you understand the type of deployment you have, please consult the following table:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\xa0"}),(0,n.jsx)(r.th,{children:"POC environment"}),(0,n.jsx)(r.th,{children:"Team Tier"}),(0,n.jsx)(r.th,{children:"Premium Tier"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Number of users"}),(0,n.jsx)(r.td,{children:"1-5"}),(0,n.jsx)(r.td,{children:"5-50"}),(0,n.jsx)(r.td,{children:"50-500"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Number of concurrent sandboxes"}),(0,n.jsx)(r.td,{children:"1-10"}),(0,n.jsx)(r.td,{children:"10-50"}),(0,n.jsx)(r.td,{children:"50-250"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Number of execution servers"}),(0,n.jsx)(r.td,{children:"1-2"}),(0,n.jsx)(r.td,{children:"1-5"}),(0,n.jsx)(r.td,{children:"5-10"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"The above numbers are estimates intended to give you an idea of the type of deployment and resources you will need. For larger deployments, please contact your Technical Account Manager."})}),"\n",(0,n.jsx)(r.p,{children:"The table below describes the minimum requirements for your Quali Server. Note that it is possible to exceed the deployment size given in the table below with machines that have more memory and cores."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\xa0"}),(0,n.jsx)(r.th,{children:"POC environment"}),(0,n.jsx)(r.th,{children:"Team Tier"}),(0,n.jsx)(r.th,{children:"Premium Tier"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CPU"}),(0,n.jsx)(r.td,{children:"4 logical cores"}),(0,n.jsx)(r.td,{children:"8 logical cores"}),(0,n.jsx)(r.td,{children:"16 logical cores"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Memory"}),(0,n.jsx)(r.td,{children:"8 GB"}),(0,n.jsx)(r.td,{children:"16 GB"}),(0,n.jsx)(r.td,{children:"32 GB"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Storage (hard disk)"}),(0,n.jsx)(r.td,{children:"20 GB"}),(0,n.jsx)(r.td,{children:"40 GB (SSD)"}),(0,n.jsx)(r.td,{children:"100 GB (SSD)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Network card"}),(0,n.jsx)(r.td,{children:"\xa0"}),(0,n.jsx)(r.td,{children:"1/10 GB, according to network load"}),(0,n.jsx)(r.td,{children:"1/10 GB, according to network load"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"hardware-requirements-for-all-other-cloudshell-serversclients",children:"Hardware requirements for all other CloudShell servers/clients"}),"\n",(0,n.jsx)(r.p,{children:"The following table lists the minimum recommended requirements for all other (non-Quali Server) CloudShell server and client machines."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\xa0"}),(0,n.jsx)(r.th,{children:"CPU"}),(0,n.jsx)(r.th,{children:"Memory"}),(0,n.jsx)(r.th,{children:"Storage (hard disk)"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"CloudShell Portal"}),(0,n.jsx)(r.td,{children:"6 logical cores"}),(0,n.jsx)(r.td,{children:"16 GB"}),(0,n.jsx)(r.td,{children:"20 GB (SSD recommended)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Windows Execution Server"}),(0,n.jsx)(r.td,{children:"4 logical cores"}),(0,n.jsx)(r.td,{children:"8 GB"}),(0,n.jsx)(r.td,{children:"60 GB"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Linux Execution Server"}),(0,n.jsx)(r.td,{children:"2 logical cores"}),(0,n.jsx)(r.td,{children:"4 GB"}),(0,n.jsx)(r.td,{children:"60 GB"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"QualiX Server"}),(0,n.jsx)(r.td,{children:"2 logical cores"}),(0,n.jsx)(r.td,{children:"4 GB"}),(0,n.jsx)(r.td,{children:"15 GB"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Insight BI Server"}),(0,n.jsx)(r.td,{children:"For details, please contact your Technical Account Manager."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Resource Manager Client",(0,n.jsx)("br",{}),"TestShell Studio",(0,n.jsx)("br",{}),"CloudShell Authoring",(0,n.jsx)("br",{}),"TestShell Remote Runner"]}),(0,n.jsx)(r.td,{children:"4 logical cores"}),(0,n.jsx)(r.td,{children:"8 GB"}),(0,n.jsx)(r.td,{children:"10 GB"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{title:"Execution Server Recommendations around Test and Shell automation",type:"note",children:(0,n.jsx)(r.p,{children:"Execution Server requirements vary according to the required usage. For example, in a scenario where 16 CPU-intensive tests are run at any given time, an optimal environment would be a machine with 32 CPU cores, with capacity set to 16, or 2 machines with 16 CPU cores, with capacity set to 8 for each machine. In another scenario where 8 memory-intensive tests are run at any given time, an optimal environment would be a machine with 16 GB RAM, with capacity set to 8."})}),"\n",(0,n.jsx)(r.h3,{id:"hardware-requirements-for-kubernetes-for-new-job-scheduling",children:"Hardware requirements for Kubernetes (for New Job Scheduling)"}),"\n",(0,n.jsx)(r.p,{children:"The Kubernetes cluster must have three 2GB memory pods. This is required for the RabbitMQ that is installed on the cluster."}),"\n",(0,n.jsx)(r.h2,{id:"windows-osrequirements",children:"Windows OS\xa0requirements"}),"\n",(0,n.jsxs)(r.p,{children:["The following table lists Windows OS requirements for each CloudShell server and client. For specific software requirements and 3rd party tools, see the ",(0,n.jsx)(r.a,{href:"#related-topics",children:"Related Topics"})," section at the bottom of this page and the ",(0,n.jsx)(r.a,{href:"/install-configure/cs-system-requirements/third-party-software",children:"3rd Party Software"})," article."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Requirements"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Quali Server",(0,n.jsx)("br",{}),"CloudShell Portal",(0,n.jsx)("br",{}),"Windows Execution Server"]}),(0,n.jsxs)(r.td,{children:["Any of the following Windows Server versions: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Server 2012 64 bit Standard or Datacenter edition"}),(0,n.jsx)("li",{children:"Server 2012 R2 64 bit Standard or Datacenter edition"}),(0,n.jsx)("li",{children:"Server 2016 Standard or Datacenter edition"}),(0,n.jsx)("li",{children:"Server 2019 Standard or Datacenter edition"}),(0,n.jsx)("li",{children:"Server 2022 Standard"})]}),(0,n.jsx)(r.strong,{children:"Notes:"}),(0,n.jsx)("br",{}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Windows Servers 2012/2016/2019 support High Availability (HA) solutions."}),(0,n.jsx)("li",{children:"Windows Server 2012 editions are not supported with MongoDB 6 and above."})]})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Linux Execution Server"}),(0,n.jsx)(r.td,{children:"CentOS 7.2 and up"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"QualiX"}),(0,n.jsx)(r.td,{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Ubuntu 20.04 (Default)"}),(0,n.jsx)("li",{children:"RedHat 8"})]})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"Insight BI"}),(0,n.jsxs)(r.td,{children:["Please consult Sisense official documentation at: ",(0,n.jsx)(r.a,{href:"https://documentation.sisense.com/latest/getting-started/minimum-requirements.htm",children:"https://documentation.sisense.com/latest/getting-started/minimum-requirements.htm"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Resource Manager Client",(0,n.jsx)("br",{}),"TestShell Studio",(0,n.jsx)("br",{}),"CloudShell Authoring",(0,n.jsx)("br",{}),"TestShell Remote Runner",(0,n.jsx)("br",{}),"CloudShell Monitor"]}),(0,n.jsxs)(r.td,{children:["Any of the following Windows versions: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"10 Pro edition"}),(0,n.jsx)("li",{children:"11 Pro edition"}),(0,n.jsx)("li",{children:"Any of the above supported Windows Server versions"})]})]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/linux-virtual-appliance/linux-es-va-overview/sw-requirements",children:"Software Requirements (Linux VA)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/ha-installation/overview/requirements",children:"Requirements (High Availability Deployment)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/qualix/qualix-overview/qualix-requirements",children:"Requirements (QualiX)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/cloudshell-sdk/overview/requirements",children:"Requirements (CloudShell SDK)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/cs-insight-bi/install-insight/requirements",children:"Requirements (Insight BI)"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/install-configure/cloudshell-suite/new-jss-install-config/requirements",children:"Requirements (New Job Scheduling)"})}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4552:(e,r,i)=>{i.d(r,{I:()=>d,M:()=>l});var n=i(11504);const s={},t=n.createContext(s);function l(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);