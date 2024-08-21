"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[50777],{14379:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var n=i(74848),r=i(28453);const t={sidebar_position:4},s="Azure Known Limitations",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations",title:"Azure Known Limitations",description:"For up to date Azure limitations, see the official Microsoft Azure doc.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations.md",tags:[],version:"2023.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing the Azure Execution Server",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server"},next:{title:"Custom Routing for Azure in Sandboxes",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/custom-routing-for-azure-in-sandboxes"}},u={},c=[];function a(e){const o={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"azure-known-limitations",children:"Azure Known Limitations"})}),"\n",(0,n.jsxs)(o.p,{children:["For up to date Azure limitations, see the official ",(0,n.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits",children:"Microsoft Azure doc"}),"."]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Limit for Network Security Groups (NSG)"}),": 5000. CloudShell uses 2 NSGs for the QualiX and Execution Server VMs."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Concurrent public IP addresses (dynamic)"}),": 1000 for Basic. Contact Azure support to increase the limit."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Concurrent public IP addresses (static)"}),": 1000 for Basic / 200 for Standard. Contact Azure support to increase the limit."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"NSG rules per NSG"}),": 1000. An average of 2 rules are used per App."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Core quota"}),": Default is 30 per region / maximum is 10K. Contact support to increase the quota."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Number of storage accounts per subscription"}),": 250. Maximum number of sandboxes is 249 (one storage account is always used for management activity)."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Concurrent sandboxes"}),": 249"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Extension scripts"}),": Extension scripts must be uploaded to a public location by the App designer, while in ",(0,n.jsx)(o.strong,{children:"Azure Portal"})," the user only needs to browse for the file and Azure will save it somewhere accessible to the VM."]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>l});var n=i(96540);const r={},t=n.createContext(r);function s(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);