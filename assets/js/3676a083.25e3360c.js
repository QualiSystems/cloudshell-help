"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[33204],{38296:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(17624),r=n(4552);const i={sidebar_position:10},l="New Job Scheduling",d={id:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/new-job-scheduling",title:"New Job Scheduling",description:"Switching between Sandbox Services",source:"@site/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/new-job-scheduling.md",sourceDirName:"admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository",slug:"/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/new-job-scheduling",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/new-job-scheduling",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/new-job-scheduling.md",tags:[],version:"current",lastUpdatedAt:1715594198e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Inventory Dashboard",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/inventory-dashboard"},next:{title:"LDAP Integration",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/cloudshell-configuration-options/customer-configuration-keys-repository/ldap-integration"}},o={},c=[{value:"Switching between Sandbox Services",id:"switching-between-sandbox-services",level:2},{value:"Allowing Quali Server to access the Kubernetes-based Sandbox Service",id:"allowing-quali-server-to-access-the-kubernetes-based-sandbox-service",level:2},{value:"Allowing Quali Server to access the Kubernetes-based RabbitMQ Service",id:"allowing-quali-server-to-access-the-kubernetes-based-rabbitmq-service",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"new-job-scheduling",children:"New Job Scheduling"}),"\n",(0,t.jsx)(s.h2,{id:"switching-between-sandbox-services",children:"Switching between Sandbox Services"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Key"}),(0,t.jsx)("td",{children:(0,t.jsx)(s.code,{children:'<add key="UseEmbeddedSandboxService" value="False"/>'})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Possible values"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"True: Use Quali Server's out-of-the-box Sandbox Service"}),(0,t.jsx)(s.p,{children:"False: Use Kubernetes-based Sandbox Service"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Where to add/change"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Default value"}),(0,t.jsx)("td",{children:"True"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Affected CloudShell Component"}),(0,t.jsx)("td",{children:"CloudShell Server"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Version"}),(0,t.jsx)("td",{children:"2020.2 and above"})]})]})}),"\n",(0,t.jsx)(s.h2,{id:"allowing-quali-server-to-access-the-kubernetes-based-sandbox-service",children:"Allowing Quali Server to access the Kubernetes-based Sandbox Service"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Key"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'<add key="SandboxServiceHost" value="<sandbox-service-svc-external-ip/hostname>"/>'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'<add key="SandboxServiceRestPort" value="<port-number>"/>'})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Possible values"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"SandboxServiceHost - Ip address/hostname"}),(0,t.jsx)(s.p,{children:"SandboxServiceRestPort - port number"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Where to add/change"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Default value"}),(0,t.jsx)("td",{children:"8888 - default port number"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Affected CloudShell Component"}),(0,t.jsx)("td",{children:"CloudShell Server"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Version"}),(0,t.jsx)("td",{children:"2020.2 and above"})]})]})}),"\n",(0,t.jsx)(s.h2,{id:"allowing-quali-server-to-access-the-kubernetes-based-rabbitmq-service",children:"Allowing Quali Server to access the Kubernetes-based RabbitMQ Service"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Key"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'<add key="RabbitHostname" value="<sandbox-service-svc-external-ip/hostname>"/>'})}),(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'<add key="RabbitPort" value="<port-number>"/>'})})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Possible values"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.p,{children:"RabbitHostname - Ip address/hostname"}),(0,t.jsx)(s.p,{children:"RabbitPort - port number"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Where to add/change"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(s.code,{children:"customer.config"})," CloudShell Server installation directory"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Default value"}),(0,t.jsx)("td",{children:"15671 - default port number"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Affected CloudShell Component"}),(0,t.jsx)("td",{children:"CloudShell Server"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Version"}),(0,t.jsx)("td",{children:"2020.2 and above"})]})]})})]})}function h(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4552:(e,s,n)=>{n.d(s,{I:()=>d,M:()=>l});var t=n(11504);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);