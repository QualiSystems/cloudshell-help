"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[99528],{84684:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var i=o(17624),l=o(4552);const r={sidebar_position:6},t="Integrating Azure with Cloud-based CloudShell Installation",s={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",title:"Integrating Azure with Cloud-based CloudShell Installation",description:"This article explains the process for setting up an Azure integration where Quali Server is installed on the Azure region.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Routing for Azure in Sandboxes",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/custom-routing-for-azure-in-sandboxes"},next:{title:"Using Multiple Azure Regions in CloudShell",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell"}},d={},a=[{value:"Related Topics",id:"related-topics",level:3}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"integrating-azure-with-cloud-based-cloudshell-installation",children:"Integrating Azure with Cloud-based CloudShell Installation"}),"\n",(0,i.jsx)(n.p,{children:"This article explains the process for setting up an Azure integration where Quali Server is installed on the Azure region."}),"\n",(0,i.jsx)(n.p,{children:"The process is as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose an Azure region for the integration."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a resource group in this region."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the resource group, create an Azure VM and install CloudShell on it."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can install all the required CloudShell components on this VM or use a combination of VMs in the same VNet."}),"\n",(0,i.jsx)(n.li,{children:'Make sure the VNet has an address space that will not overlap with the CloudShell Sandbox VNet, which is "10.0.0.0/8". Something like "192.168.25.0/24".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell",children:"Configure Azure API to work with CloudShell"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Deploy the Azure template to create the management resource group and VNets, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",children:"Create a Management Resource Group and VNets"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can choose to create a new management resource group or select the CloudShell VM's resource group. However, if you deploy the Azure template in a different resource group, you will also need to create a peering between the CloudShell VM's VNet and the CloudShell management VNet."}),"\n",(0,i.jsxs)(n.li,{children:["In the template, make sure to select the ",(0,i.jsx)(n.strong,{children:"Internal"})," deployment mode."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Connect the Execution Server to the CloudShell Server. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server#connecting-the-execution-server-to-quali-server",children:"Connecting the Execution Server to Quali Server"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create the Azure cloud provider resource and an App template."}),"\n",(0,i.jsx)(n.admonition,{title:"Networking considerations:",type:"important",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To allow all inbound traffic from other Apps in the sandbox, in the App's ",(0,i.jsx)(n.strong,{children:"Deployment Paths"})," page, enable the ",(0,i.jsx)(n.strong,{children:"Allow All Sandbox Traffic"})," attribute."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To allow end users to remotely connect to the App VMs, in the App's ",(0,i.jsx)(n.strong,{children:"Deployment Paths"})," page, make sure to open inbound connections to the VMs using the ",(0,i.jsx)(n.strong,{children:"Inbound Ports"}),' attribute or set up QualiX for in-browser connections via the sandbox itself. For example, specifying "3389" allows RDP connections, while "22" enables QualiX to run in-browser connections. And set the user/password credentials in the App\'s ',(0,i.jsx)(n.strong,{children:"App Resource"})," page."]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To verify the integration, do the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Log into CloudShell Portal, set up and reserve a blueprint that deploys an Azure App on the region."}),"\n",(0,i.jsx)(n.li,{children:"Make sure you can log in to the VMs using the credentials on the App template."}),"\n",(0,i.jsx)(n.li,{children:"For networking, reserve a blueprint that has two Azure Apps and make sure a subnet is created in Azure for the App VMs."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",children:"Microsoft Azure Integration and Configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource",children:"Add an Azure Cloud Provider Resource"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Managing App Templates"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>t});var i=o(11504);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);