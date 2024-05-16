"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[44076],{45640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(17624),r=t(4552);const o={sidebar_position:3},s="Connect the CloudShell Management VNet to Quali Server",c={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server",title:"Connect the CloudShell Management VNet to Quali Server",description:"Note that this procedure only applies to scenarios where Quali Server is not installed in Azure. If Quali Server is installed on Azure, see Integrating Azure with Cloud-based CloudShell Installation.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/connect-the-cloudshell-management-vnet-to-quali-server.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Management Resource Group and VNets",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets"},next:{title:"Add an Azure Cloud Provider Resource",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource"}},d={},l=[];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"connect-the-cloudshell-management-vnet-to-quali-server",children:"Connect the CloudShell Management VNet to Quali Server"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Note that this procedure only applies to scenarios where Quali Server is not installed in Azure. If Quali Server is installed on Azure, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation",children:"Integrating Azure with Cloud-based CloudShell Installation"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"This article guides you on how to set up the VPN connection between Quali Server and Azure."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This can be done in various ways and is subject to your organization\u2019s IT policy. For illustration purposes, this article shows how to set up a site-to-site VPN connection."})}),"\n",(0,i.jsx)(n.p,{children:"A VPN connection is needed to allow the execution server installed on Azure to work with CloudShell, and to allow resources deployed on Azure to connect back to CloudShell resources that are on your private network, like on prem devices and vCenter VMs."}),"\n",(0,i.jsxs)(n.p,{children:["For this procedure, you will need the IP address of your Quali Server VPN endpoint (provided by your IT administrator) and the ",(0,i.jsx)(n.strong,{children:"VPN Public IP"}),", which is created by the Azure Template deployment and can be found in the management resource group\u2019s VPN deployment output."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To connect the CloudShell Management VNet to Quali Server:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to ",(0,i.jsx)(n.a,{href:"https://portal.azure.com/",children:"https://portal.azure.com/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open the ",(0,i.jsx)(n.strong,{children:"Local network gateways"})," page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the name of the local network gateway residing in the management resource group created by the Azure Template deployment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the blade that appears, click ",(0,i.jsx)(n.strong,{children:"Configuration"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Configuration"})," blade is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The configuration parameters should already be filled out using the values you specified in the Azure template."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IP\xa0address"}),(0,i.jsxs)(n.td,{children:["The IP address defined in the Azure template's ",(0,i.jsx)(n.strong,{children:"VPN Address"})," parameter. of the Quali Server's VPN endpoint specified in the Azure Template."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Address space"}),(0,i.jsxs)(n.td,{children:["The IP range (in CIDR notation) defined in the Azure tempalte's ",(0,i.jsx)(n.strong,{children:"On Premise CIDR"})," parameter. This range will be used by the CloudShell Management VNet and by the virtual machines that will be created by CloudShell."]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Connections"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Connections"})," blade is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the blade that appears, click ",(0,i.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Add connection"})," blade is displayed."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(81196).c+"",width:"311",height:"698"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fill in the connection's parameters."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Name"}),(0,i.jsx)(n.td,{children:"Name for the connection."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connection type"}),(0,i.jsxs)(n.td,{children:["Type of connection to be made. By design, ",(0,i.jsx)(n.strong,{children:"Site-to-site"})," is selected for security and encryption reasons."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Virtual network gateway"}),(0,i.jsxs)(n.td,{children:["Azure virtual network to be used by this connection.",(0,i.jsx)("br",{}),"Select the virtual network in the management resource group created by the Azure Template deployment"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Local network gateway"}),(0,i.jsx)(n.td,{children:"Local network gateway for which a connection will be added."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Shared key (PSK)"}),(0,i.jsxs)(n.td,{children:["Encryption key to be used to encrypt the connection.",(0,i.jsx)("br",{}),"The same shared key must be used in both the virtual network and local network gateways. If your gateway device doesn't provide one, you can make one up here and provide it to your device."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Subscription"}),(0,i.jsx)(n.td,{children:"The subscription can't be changed when adding a connection to an existing peer."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resource group"}),(0,i.jsx)(n.td,{children:"The resource group can't be changed when adding a connection to an existing peer."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Location"}),(0,i.jsx)(n.td,{children:"The location can't be changed when adding a connection to an existing peer."})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The connection is created. For more information about the connection, open the gateway's ",(0,i.jsx)(n.strong,{children:"Connections"})," blade or click the ",(0,i.jsx)(n.strong,{children:"Create connection"})," notification"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(42132).c+"",width:"488",height:"127"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Next, ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-cloud-provider-resource",children:"Add an Azure Cloud Provider Resource"}),"."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},81196:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/AzureAddConnectionBlade-0ee208e97ca96ad98be3cadee9cc8886.png"},42132:(e,n,t)=>{t.d(n,{c:()=>i});const i="data:image/png;base64,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"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>s});var i=t(11504);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);