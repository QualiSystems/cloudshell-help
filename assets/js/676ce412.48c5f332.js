"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[2680],{80516:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(17624),t=o(4552);const i={sidebar_position:7},l="Configure the Qualix Server for Azure",s={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure",title:"Configure the Qualix Server for Azure",description:"- If the only QualiX server in your CloudShell deployment is the one in the CloudShell Management VNet in Azure, refer to the QualiX Installation and Configuration on how to configure it, and for the server address, use the QualiXPublicIp output from the Management Resource Group deployment process - see Create a Management Resource Group and VNets.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Configure an Execution Server Selector for Azure",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure"},next:{title:"Cost Management of Microsoft Azure Resources",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources"}},a={},u=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"configure-the-qualix-server-for-azure",children:"Configure the Qualix Server for Azure"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If the only QualiX server in your CloudShell deployment is the one in the CloudShell Management VNet in Azure, refer to the ",(0,n.jsx)(r.a,{href:"/install-configure/qualix/",children:"QualiX Installation and Configuration"})," on how to configure it, and for the server address, use the ",(0,n.jsx)(r.strong,{children:"QualiXPublicIp"})," output from the Management Resource Group deployment process - see ",(0,n.jsx)(r.a,{href:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",children:"Create a Management Resource Group and VNets"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"If there are more QualiX servers in your CloudShell deployments, do the following for each relevant server:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Install QualiX version 2.3 or above."}),"\n",(0,n.jsxs)(r.li,{children:["Use an attribute to hold the QualiX Server address, and customize the ",(0,n.jsx)(r.code,{children:"UniversalSettings.xml"})," file on the Quali Server machine to have Quali Server take the QualiX Server address from this attribute."]}),"\n",(0,n.jsxs)(r.li,{children:["Add this attribute to the ",(0,n.jsx)(r.strong,{children:"Generic App Model"})," and set its value in all Azure templates defined in the App catalog for this region. Each App must have in this attribute the address of the QualiX Server in the CloudShell Management VNet of its region."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If you selected an internal deployment of the CloudShell Management VNet, the QualiX Server does not have a Public IP and is accessible only by the network that is connected via VPN to the CloudShell Management VNet, which is the network you defined in the ",(0,n.jsx)(r.strong,{children:"On Premise CIDR"})," input parameter when you created the CloudShell Management VNet. In this case, use the QualiX VM's private IP as the server address in the ",(0,n.jsx)(r.code,{children:"ServerUniversalSettings.xml"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["If CloudShell Portal is installed on Azure, in the ",(0,n.jsx)(r.code,{children:"ServerUniversalSettings.xml"}),", specify the CloudShell Portal's private IP."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/portal/sandboxes/sandbox-workspace/resources/connect-remotely-with-qualix",children:"Connect Remotely to Devices with QualiX (RDP, SSH, Telnet)"})}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,r,o)=>{o.d(r,{I:()=>s,M:()=>l});var n=o(11504);const t={},i=n.createContext(t);function l(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);