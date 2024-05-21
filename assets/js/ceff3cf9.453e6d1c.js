"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[62049],{98936:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var i=o(17624),r=o(4552);const t={},l="Microsoft Azure Integration",s={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index",title:"Microsoft Azure Integration",description:"The Azure deployment types integrate CloudShell with the Microsoft Azure public cloud. This integration enables the deployment of CloudShell Apps in Microsoft Azure. CloudShell supports deploying Azure virtual machines from Azure Marketplace images and Azure custom images as well as Azure Shared Gallery images using the Azure 2nd Gen shell.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/index.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microsoft Azure Integration and Configuration",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/"},next:{title:"Configure Azure API to work with CloudShell",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell"}},a={},d=[{value:"Azure installation workflow",id:"azure-installation-workflow",level:2},{value:"Related Topics",id:"related-topics",level:2}];function u(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"microsoft-azure-integration",children:"Microsoft Azure Integration"}),"\n",(0,i.jsxs)(n.p,{children:["The Azure deployment types integrate CloudShell with the Microsoft Azure public cloud. This integration enables the deployment of CloudShell Apps in Microsoft Azure. CloudShell supports deploying Azure virtual machines from Azure Marketplace images and Azure custom images as well as Azure Shared Gallery images using the Azure 2",(0,i.jsx)("sup",{children:"nd"})," Gen shell."]}),"\n",(0,i.jsxs)(n.p,{children:['CloudShell supports two integration methods with Azure - "on prem" and "cloud". In "on prem", CloudShell Server is already installed locally and requires a VPN connection to Azure, while in "cloud", CloudShell needs to be installed on the Azure region along with the CloudShell integration resources. For details about the "cloud" method, see ',(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",children:"Integrating Azure with Cloud-based CloudShell Installation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following diagram illustrates an Azure integration (with a local CloudShell installation) hosting two live sandboxes:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:o(90376).c+"",width:"1267",height:"703"})}),"\n",(0,i.jsx)(n.p,{children:"The deployment architecture in Azure requires a management resource group to be created for each relevant Azure region (all Azure regions are supported by CloudShell). This resource group has two virtual networks (VNets):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CloudShell-Management-VNet"}),": (Optional when using a cloud provider resource based on the Azure 2",(0,i.jsx)("sup",{children:"nd"})," Gen shell) VNet containing two Azure virtual machines, which are always on:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Execution-Server-VM"}),": Execution Server to be used to deploy and manage the Azure virtual machines, and run scripts and commands on them."]}),"\n",(0,i.jsx)(n.p,{children:"The Execution Server in the CloudShell Management VNet needs to access the Quali Server, which is located outside of the CloudShell Management VNet (on-premise, another Azure VNet or another public cloud). To allow this access, you need to configure a VPN between the CloudShell Management VNet and the network in which the Quali Server resides."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QualiX-VM"}),": QualiX Server used to enable in-browser connections, such as RDP, Telnet and SSH access to Apps in the sandbox"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CloudShell-Sandbox-VNet"}),": VNet containing a subnet for each CloudShell sandbox, which hosts all Azure App virtual machines created within the sandbox and allows them to communicate with each other. The CloudShell Management VNet\u2019s QualiX Server and Execution Server have access both to this VNet and each virtual machine's operating system to run commands and installations on the sandboxes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Keeping Azure resources, like the CloudShell Management VNet's virtual machines, running at all times entails a fixed monthly rate."})}),"\n",(0,i.jsxs)(n.p,{children:["When a new CloudShell sandbox with Azure Apps is starting, the out-of-the-box setup process creates a new subnet for the sandbox within the ",(0,i.jsx)(n.strong,{children:"CloudShell Sandbox VNet"}),". This VNet is connected to the CloudShell Management VNet using a VNet Peering connection. All Azure Apps within the same sandbox are deployed in this sandbox subnet (within the CloudShell Sandbox VNet), and a dedicated Azure resource group is created for each sandbox to hold all Azure resources related to that sandbox. This architecture allows both QualiX Server and the Execution Server to access the Apps in the sandbox while keeping the Apps within one sandbox isolated from Apps in other sandboxes."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Azure virtual machines in the same sandbox live in the same subnet and can interact with each other."}),"\n",(0,i.jsxs)(n.li,{children:["CloudShell allows sandboxes to have multiple subnets. If multiple subnets are defined (in the blueprint), the setup process will create the defined subnet networks instead of the default subnet. For additional information, see ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"When the sandbox ends, all related Azure resources, including the sandbox subnet, resource group and virtual machines are automatically deleted by CloudShell."}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["We strongly recommend using the 2",(0,i.jsx)("sup",{children:"nd"})," Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: ",(0,i.jsx)(n.a,{href:"/devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell#replacing-the-1st-gen-shell-with-a-2nd-gen-version",children:"Replacing the 1st Gen shell with a 2nd Gen version"}),", ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities",children:"Cloud Provider Shells - Features and Capabilities Per Release"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"azure-installation-workflow",children:"Azure installation workflow"}),"\n",(0,i.jsx)(n.p,{children:"For each Azure region you want to integrate with CloudShell, perform the following steps:"}),"\n",(0,i.jsx)("table",{style:{borderLeftStyle:"solid",borderLeftWidth:0,borderRightStyle:"solid",borderRightWidth:0,borderTopStyle:"solid",borderTopWidth:0,borderBottomStyle:"solid",borderBottomWidth:0,marginLeft:0,marginRight:"auto"},children:(0,i.jsx)("tbody",{children:(0,i.jsx)("tr",{children:(0,i.jsx)("td",{style:{backgroundColor:"#fff9c7"},children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell",children:"Configure Azure API to work with CloudShell"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",children:"Create a Management Resource Group and VNets"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server",children:"Connect the CloudShell Management VNet to Quali Server"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource",children:"Add an Azure Cloud Provider Resource"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template",children:"Add an Azure App Template"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure",children:"Configure an Execution Server Selector for Azure"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure",children:"Configure the Qualix Server for Azure"})}),"\n"]})})})})}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources",children:"Cost Management of Microsoft Azure Resources"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server",children:"Managing the Azure Execution Server"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/custom-routing-for-azure-in-sandboxes",children:"Custom Routing for Azure in Sandboxes"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/azure-known-limitations",children:"Azure Known Limitations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/connect-resources-and-apps#connecting-azure-apps-to-predefined-subnets",children:"Connecting Azure Apps to predefined subnets"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},90376:(e,n,o)=>{o.d(n,{c:()=>i});const i=o.p+"assets/images/Azure-architecture-75f01d0dfca5ed0b0bbef20af53cb17d.png"},4552:(e,n,o)=>{o.d(n,{I:()=>s,M:()=>l});var i=o(11504);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);