"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[57592],{83596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(17624),s=n(4552);const i={sidebar_position:2},l="Create a Management Resource Group and VNets",o={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",title:"Create a Management Resource Group and VNets",description:"The Azure Resource Template deployment process creates the CloudShell management resource group, the CloudShell Management VNet and CloudShell Sandbox VNet within the resource group and a peering between these networks, which are detailed in Microsoft Azure Integration. You will then need to configure the Execution Server and QualiX Server created in the CloudShell Management VNet to access the Quali Server.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure Azure API to work with CloudShell",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell"},next:{title:"Connect the CloudShell Management VNet to Quali Server",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server"}},d={},c=[];function a(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-a-management-resource-group-and-vnets",children:"Create a Management Resource Group and VNets"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Azure Resource Template"})," deployment process creates the CloudShell management resource group, the CloudShell Management VNet and CloudShell Sandbox VNet within the resource group and a peering between these networks, which are detailed in ",(0,r.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/",children:"Microsoft Azure Integration"}),". You will then need to configure the Execution Server and QualiX Server created in the CloudShell Management VNet to access the Quali Server."]}),"\n",(0,r.jsx)(t.admonition,{title:"Notes:",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["We strongly recommend using the new and improved ",(0,r.jsx)(t.a,{href:"https://github.com/orgs/QualiSystems/discussions/1687",children:"Azure 2nd Gen shell"}),". If you're using the 1",(0,r.jsx)("sup",{children:"st"})," Gen version of the shell that comes out of the box with CloudShell, see ",(0,r.jsx)(t.a,{href:"https://help.quali.com/Online%20Help/2021.1/Portal/Content/Admn/Azure-Crt-Mng-RSc-Grp.htm",children:"this version"})," of the online help."]}),"\n",(0,r.jsxs)(t.li,{children:["The below procedure assumes you already have CloudShell Server installed locally. However, if you plan on installing CloudShell Server on the Azure region, see ",(0,r.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",children:"Integrating Azure with Cloud-based CloudShell Installation"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"To create a CloudShell management resource group and the required networks:"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Import the Azure template file from ",(0,r.jsx)(t.a,{href:"https://support.quali.com/hc/en-us/articles/231613247-Quali-s-Download-Center",children:"CloudShell Download Center"}),". The template file is provided as a JSON file for each CloudShell release version."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Log in to ",(0,r.jsx)(t.a,{href:"https://portal.azure.com/#",children:"https://portal.azure.com"})," and open the ",(0,r.jsx)(t.strong,{children:"Template specs"})," page."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Import template"})," and import the Azure template file."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(24256).c+"",width:"743",height:"337"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Basics"})," tab, fill in the template spec's mandatory details (Name, Subscription, Resource Group, Location, Version), and click ",(0,r.jsx)(t.strong,{children:"Next"})," until the template spec is created."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(20136).c+"",width:"764",height:"710"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Click the name of the new template spec."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(5408).c+"",width:"894",height:"339"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the blade that appears, click ",(0,r.jsx)(t.strong,{children:"Deploy"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Custom deployment"})," page is displayed."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(32956).c+"",width:"770",height:"848"})}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Specify the ",(0,r.jsx)(t.strong,{children:"Subscription"}),", ",(0,r.jsx)(t.strong,{children:"Resource group"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.strong,{children:"Instance details"})," area, fill in the deployment parameters."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Required?"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CloudShell Admin"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsx)(t.td,{children:"The CloudShell admin user"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CloudShell Admin Password"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsx)(t.td,{children:"The CloudShell admin\u2019s password"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CloudShell Server IP"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsx)(t.td,{children:"The IP address of the Quali Server"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CloudShell SSH User Name"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["Create a user name and password to be used to connect to the QualiX and Execution Server that will be created in Azure.",(0,r.jsx)("br",{}),"Make sure you save these credentials for future use."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CloudShell SSH Password"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["Create a password to be used with the ",(0,r.jsx)(t.strong,{children:"CloudShell SSH User Name"}),".",(0,r.jsx)("br",{}),"Password must contain 12-72 characters and include 1 lower case character, 1 upper case character and 1 special character."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Management Vnet CIDR"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["The IP range (in CIDR notation) to be used for the CloudShell Management VNet. Specify a class C CIDR (/24).",(0,r.jsx)("br",{}),'For example: "192.168.120.0/24".']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Management Vnet VPN\xa0Subnet CIDR"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["(Relevant if ",(0,r.jsx)(t.strong,{children:"Create VPN Endpoint"})," is set to ",(0,r.jsx)(t.strong,{children:"True"}),") The IP range (in CIDR notation) of the subnet in which the VPN connection is set. This range must be included in the CloudShell Management VNet\u2019s range.",(0,r.jsx)("br",{}),'For example: "192.168.120.0/28".']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Management Vnet Subnet CIDR"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["The IP range (in CIDR notation) of the subnet to be used by the CloudShell Management VNet.",(0,r.jsx)("br",{}),"This range must be included in the CloudShell Management VNet\u2019s range. This subnet is used by CloudShell components such as QualiX Server and Execution Server.",(0,r.jsx)("br",{}),'For example: "192.168.120.16/28".']})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Deployment Mode"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["Use external deployment to create a QualiX VM with a public IP, or internal deployment to create the QualiX VM with a private IP. Possible values are ",(0,r.jsx)(t.strong,{children:"External"})," and ",(0,r.jsx)(t.strong,{children:"Internal"}),".",(0,r.jsx)("br",{}),"The private IP is accessible from the networks that are connected to the CloudShell Management VNet (such as the network in which the Quali Server resides)."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Create VPN Endpoint"}),(0,r.jsx)(t.td,{children:"Required"}),(0,r.jsxs)(t.td,{children:["Set to ",(0,r.jsx)(t.strong,{children:"True"})," to create a VPN endpoint to the CloudShell Management VNet to support a hybrid scenario."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"On Premise CIDR"}),(0,r.jsx)(t.td,{children:"Optional"}),(0,r.jsx)(t.td,{children:"The IP range (in CIDR notation) of the private network in which the Quali Server resides (outside of the CloudShell Management VNet)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VPN Address"}),(0,r.jsx)(t.td,{children:"Optional"}),(0,r.jsx)(t.td,{children:"The public IP address of the router on the network in which Quali Server resides."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Sandbox Vnet CIDR"}),(0,r.jsx)(t.td,{children:"Optional"}),(0,r.jsx)(t.td,{children:"The IP range (in CIDR notation) to be used for the Sandbox VNet."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Sandbox Vnet Subnet CIDR"}),(0,r.jsx)(t.td,{children:"Optional"}),(0,r.jsx)(t.td,{children:"The IP range (in CIDR notation) of the deafult subnet that will be created for the Sandbox VNet. This range must be included in the Sandbox VNet\u2019s range. Note that after the template is deployed you can delete this redundant subnet manually."})]})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Review + create"}),", and then ",(0,r.jsx)(t.strong,{children:"Create"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The Template is being deployed."}),"\n",(0,r.jsxs)(t.p,{children:["If an error message is displayed, click the message to learn more about the error.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.img,{src:n(82272).c+"",width:"327",height:"201"})]}),"\n",(0,r.jsxs)(t.p,{children:["To track the deployment's progress, click the ",(0,r.jsx)(t.strong,{children:"Notifications"})," button."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(79965).c+"",width:"609",height:"333"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The Azure Template deployment's output includes the QualiX Public IP and, if required, the VPN Public IP. You will need this information to connect to the Azure subnets and App VMs from CloudShell."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Click ",(0,r.jsx)(t.strong,{children:"Go to resource group"})," and then click the name of the resource group."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(97384).c+"",width:"790",height:"485"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In the blade that appears, click ",(0,r.jsx)(t.strong,{children:"Deployments"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(45968).c+"",width:"1133",height:"547"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["For the ",(0,r.jsx)(t.strong,{children:"QualiX Public IP"}),", click the QualiX deployment and expand ",(0,r.jsx)(t.strong,{children:"Deployment Details"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["(If VPN was configured in the Azure Template) For the ",(0,r.jsx)(t.strong,{children:"VPN Public IP"}),", click the CloudShell VPN deployment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Next, if your installation requires a VPN connection, ",(0,r.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server",children:"Connect the CloudShell Management VNet to Quali Server"}),". If not, ",(0,r.jsx)(t.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource",children:"Add an Azure Cloud Provider Resource"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},45968:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/AzureDeployments-96c8fcc7b5aea714ea59c50fb7303d24.png"},5408:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/ClickAzureTemplate-0cede4111a18b43124bed711485070df.png"},97384:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/ClickResourceGroup-8bb9862d4d9f0732fb3fd8e4b7a2acab.png"},82272:(e,t,n)=>{n.d(t,{c:()=>r});const r="data:image/png;base64,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"},79965:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/TemplateDeploymentNotification-e16f891bba705ab0d47a592390640a74.png"},32956:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/TemplateSettingsBlade-b10b4b85816ff3467be3e7586ec055fe.png"},20136:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/TemplateSpecCreation-ecb700932d203c84ae7cfca200bc7fea.png"},24256:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/TemplateSpecImport-63b38506f20af1020536148604180c9b.png"},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var r=n(11504);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);