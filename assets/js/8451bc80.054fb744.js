"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[9532],{13027:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>A,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var o=n(74848),i=n(28453);const t={sidebar_position:6},s="Configure an Execution Server Selector for Azure",c={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure",title:"Configure an Execution Server Selector for Azure",description:"This article explains how to associate an Execution Server to Azure Apps. To learn how to associate an Execution Server to resources, other Apps and blueprints, see Setting Up Execution Servers to Run Commands.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-an-execution-server-selector-for-azure.md",tags:[],version:"2023.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Add an Azure App Template",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/add-an-azure-app-template"},next:{title:"Configure the Qualix Server for Azure",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure"}},l={},u=[];function a(e){const r={a:"a",admonition:"admonition",em:"em",h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"configure-an-execution-server-selector-for-azure",children:"Configure an Execution Server Selector for Azure"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsxs)(r.em,{children:["This article explains how to associate an Execution Server to Azure Apps. To learn how to associate an Execution Server to resources, other Apps and blueprints, see ",(0,o.jsx)(r.a,{href:"/2023.3/admin/cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands",children:"Setting Up Execution Servers to Run Commands"}),"."]})}),"\n",(0,o.jsxs)(r.p,{children:['The CloudShell Management VNet contains an Execution Server called "',(0,o.jsx)(r.strong,{children:"Azure-<region>"}),'" (for example, "Azure-East US"), which resides in a dedicated VM called ',(0,o.jsx)(r.strong,{children:"ExecutionServer-VM"}),". This Execution Server is responsible for running the App's deployment and automation, as well as configuration management operations defined on the App. As this is a Linux Execution Server, it does not support Suite executions."]}),"\n",(0,o.jsxs)(r.p,{children:["In CloudShell, this Execution Server needs to be associated with the Azure cloud provider resource via the ",(0,o.jsx)(r.strong,{children:"Execution Server Selector"})," attribute. This is achieved by setting the same value for this attribute in the Azure cloud provider resource and in the deployed App shell in the App template's ",(0,o.jsx)(r.strong,{children:"App Resource"})," page. Note that this Execution Server will also run any configuration management operations defined in the App. For information about managing, troubleshooting and upgrading Execution Servers on Azure, see ",(0,o.jsx)(r.a,{href:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server",children:"Managing the Azure Execution Server"}),"."]}),"\n",(0,o.jsx)(r.admonition,{type:"important",children:(0,o.jsxs)(r.p,{children:["If CloudShell Server is installed on Azure, rerun the Execution Server's configuration, as explained in ",(0,o.jsx)(r.a,{href:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server#upgrading-an-existing-execution-server",children:"Upgrading an existing Execution Server"}),",and specify the CloudShell Server's private IP. Then, perform the below steps."]})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"To add and configure the Execution Server Selector attribute:"})}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["In ",(0,o.jsx)(r.strong,{children:"CloudShell Portal"}),", configure the Execution Server:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Open the ",(0,o.jsx)(r.strong,{children:"Manage>Execution Servers>Servers"})," page."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:['Find the Execution Server called "Azure-<region>", open its action menu and click ',(0,o.jsx)(r.strong,{children:"Attributes"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Select the ",(0,o.jsx)(r.strong,{children:"Execution Server Selector"})," check box and enter the value you entered for the Azure cloud provider in the previous step."]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:n(29094).A+"",width:"602",height:"208"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Click ",(0,o.jsx)(r.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["When creating the App template, specify the same value on the ",(0,o.jsx)(r.strong,{children:"Execution Server Selector"})," attribute in the relevant App's ",(0,o.jsx)(r.strong,{children:"App Resource"})," page."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Click ",(0,o.jsx)(r.strong,{children:"Done"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Next, ",(0,o.jsx)(r.a,{href:"/2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure",children:"Configure the Qualix Server for Azure"})]}),"\n"]}),"\n"]})]})}function A(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},29094:(e,r,n)=>{n.d(r,{A:()=>o});const o="data:image/png;base64,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"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var o=n(96540);const i={},t=o.createContext(i);function s(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);