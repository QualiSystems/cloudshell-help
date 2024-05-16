"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[23708],{31684:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=n(17624),s=n(4552);const r={sidebar_position:1},t="Requirements (High Availability Deployment)",a={id:"install-configure/ha-installation/overview/requirements",title:"Requirements (High Availability Deployment)",description:"This section describes the CloudShell clustering requirements.",source:"@site/versioned_docs/version-2023.3/install-configure/ha-installation/overview/requirements.md",sourceDirName:"install-configure/ha-installation/overview",slug:"/install-configure/ha-installation/overview/requirements",permalink:"/cloudshell-help/install-configure/ha-installation/overview/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/ha-installation/overview/requirements.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"CloudShell High Availability Installation Overview",permalink:"/cloudshell-help/install-configure/ha-installation/overview/"},next:{title:"Software Licenses",permalink:"/cloudshell-help/install-configure/ha-installation/overview/software-licenses"}},o={},d=[{value:"4-machine High availability setup",id:"4-machine-high-availability-setup",level:2},{value:"6-machine High availability setup",id:"6-machine-high-availability-setup",level:2}];function h(e){const i={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"requirements-high-availability-deployment",children:"Requirements (High Availability Deployment)"}),"\n",(0,l.jsx)(i.p,{children:"This section describes the CloudShell clustering requirements."}),"\n",(0,l.jsx)(i.p,{children:"The following table lists the requirements for the following infrastructure components: NICs, Switches and host."}),"\n",(0,l.jsxs)(i.p,{children:["Based on the ",(0,l.jsx)(i.a,{href:"/cloudshell-help/install-configure/ha-deployment/",children:"High Availability Deployment"})," guide, the administrator should select the optimal set up for the environment (4/6 nodes on physical or virtual machines)."]}),"\n",(0,l.jsxs)(i.p,{children:["For additional requirements to configure Web Server Load Balancing, see ",(0,l.jsx)(i.a,{href:"/cloudshell-help/install-configure/ha-installation/install-configure-cs-server/install-configure-cs-portal/config-web-server-load-balancing/requirements",children:"Requirements (High Availability Load Balancer)"}),"."]}),"\n",(0,l.jsxs)(i.p,{children:["For hardware/OS\xa0requirements for CloudShell servers and clients, see ",(0,l.jsx)(i.a,{href:"/cloudshell-help/install-configure/cs-system-requirements/min-requirements-for-cs",children:"Minimum Requirements for CloudShell Servers and Clients"}),"."]}),"\n",(0,l.jsx)(i.h2,{id:"4-machine-high-availability-setup",children:"4-machine High availability setup"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsxs)("thead",{children:[(0,l.jsx)("th",{children:"Component"}),(0,l.jsx)("th",{children:"Requirements"})]}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Quali Application Server, License server, CloudShell Portal"}),(0,l.jsx)("td",{children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition)."}),"\n",(0,l.jsx)(i.li,{children:"2 network adapters (one for cluster use and one for client use)"}),"\n",(0,l.jsx)(i.li,{children:"Failover cluster role installed"}),"\n",(0,l.jsx)(i.li,{children:"Windows Failover Cluster Manager installed"}),"\n",(0,l.jsx)(i.li,{children:"4 IP addresses free in the client subnet (for Cluster front, and components roles)"}),"\n"]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"SQL cluster / MongoDB cluster"}),(0,l.jsx)("td",{children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["As explained in ",(0,l.jsx)(i.a,{href:"/cloudshell-help/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})]}),"\n"]})})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"6-machine-high-availability-setup",children:"6-machine High availability setup"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsxs)("thead",{children:[(0,l.jsx)("th",{children:"Component"}),(0,l.jsx)("th",{children:"Requirements"})]}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"CloudShell HA (Quali Application Server plus License server)"}),(0,l.jsx)("td",{children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition)."}),"\n",(0,l.jsx)(i.li,{children:"2 network adapters (one for cluster use and one for client use)"}),"\n",(0,l.jsx)(i.li,{children:"Failover cluster role installed"}),"\n",(0,l.jsx)(i.li,{children:"Windows Failover Cluster Manager installed"}),"\n",(0,l.jsx)(i.li,{children:"3 Available IPs in the client subnet (for Cluster front and components roles)"}),"\n"]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"CloudShell Portal"}),(0,l.jsx)("td",{children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"2 machines running a CloudShell-supported Windows Server version (Standard or Datacenter edition)."}),"\n",(0,l.jsx)(i.li,{children:"2 network adapters (one for cluster use and one for client use)"}),"\n",(0,l.jsx)(i.li,{children:"Failover cluster role installed"}),"\n",(0,l.jsx)(i.li,{children:"Cluster is configured using Windows Failover Cluster Manager"}),"\n",(0,l.jsx)(i.li,{children:"Available IP in the client subnet (for Cluster front)"}),"\n",(0,l.jsx)(i.li,{children:"IIS 8.0 installed"}),"\n",(0,l.jsxs)(i.li,{children:["ASP.NET 4.5 enabled on IIS 8.0 web server (see ",(0,l.jsx)(i.a,{href:"http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-using-aspnet-35-and-aspnet-45",children:"http://www.iis.net/learn/get-started/whats-new-in-iis-8/iis-80-using-aspnet-35-and-aspnet-45"}),")"]}),"\n"]})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"SQL cluster / MongoDB cluster"}),(0,l.jsx)("td",{children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["As explained in ",(0,l.jsx)(i.a,{href:"/cloudshell-help/install-configure/cs-system-requirements/database-prereq",children:"Database Prerequisites"})]}),"\n"]})})]})]})]})]})}function c(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},4552:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>t});var l=n(11504);const s={},r=l.createContext(s);function t(e){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);