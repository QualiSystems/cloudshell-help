"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[69728],{15472:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=r(17624),o=r(4552);const s={sidebar_position:2},t="Cost Management of Microsoft Azure Resources",a={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources",title:"Cost Management of Microsoft Azure Resources",description:"To assist with your Microsoft Azure cost management activities, Microsoft Azure resources, such as subnets, virtual machines and VNets, which are created by CloudShell Apps include the following tags: Blueprint, CreatedBy, Domain, Name, Owner, and SandboxId.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/cost-management-of-microsoft-azure-resources.md",tags:[],version:"2023.3",lastUpdatedAt:171630703e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configure the Qualix Server for Azure",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-the-qualix-server-for-azure"},next:{title:"Managing the Azure Execution Server",permalink:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/managing-the-azure-execution-server"}},l={},d=[{value:"Download usage data from the Azure billing center",id:"download-usage-data-from-the-azure-billing-center",level:2},{value:"Filter usage data",id:"filter-usage-data",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cost-management-of-microsoft-azure-resources",children:"Cost Management of Microsoft Azure Resources"}),"\n",(0,i.jsxs)(n.p,{children:["To assist with your Microsoft Azure cost management activities, Microsoft Azure resources, such as subnets, virtual machines and VNets, which are created by CloudShell Apps include the following tags: ",(0,i.jsx)(n.strong,{children:"Blueprint"}),", ",(0,i.jsx)(n.strong,{children:"CreatedBy"}),", ",(0,i.jsx)(n.strong,{children:"Domain"}),", ",(0,i.jsx)(n.strong,{children:"Name"}),", ",(0,i.jsx)(n.strong,{children:"Owner"}),", and ",(0,i.jsx)(n.strong,{children:"SandboxId"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Important:",type:"note",children:(0,i.jsx)(n.p,{children:"These tags should not be altered as this may result in inaccurate usage data reports."})}),"\n",(0,i.jsx)(n.h2,{id:"download-usage-data-from-the-azure-billing-center",children:"Download usage data from the Azure billing center"}),"\n",(0,i.jsx)(n.p,{children:"This procedure explains how to download an Azure subscription\u2019s usage data from the Azure billing center. The data is provided in a SCV file."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To download Microsoft Azure usage data:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Sign in to the ",(0,i.jsx)(n.a,{href:"https://account.windowsazure.com/subscriptions?correlationId=00000000-0000-0000-0000-000000000000",children:"Microsoft Azure Account Center"})," using your Microsoft account or Organizational ID."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the required subscription."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Specify the desired period."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Download Usage"})," drop down list, select ",(0,i.jsx)(n.strong,{children:"Version 2 - Preview"}),". The Version 2 CSV file contains the updated terminology and user tags required to properly filter Azure resources."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(35556).c+"",width:"670",height:"133"})}),"\n",(0,i.jsx)(n.p,{children:"A CSV file detailing the subscription\u2019s usage data is downloaded."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"filter-usage-data",children:"Filter usage data"}),"\n",(0,i.jsx)(n.p,{children:"In the CSV file, the subscription\u2019s usage data is arranged in 3 tables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Provisioning Status"})," \u2013 General information regarding subscriptions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Statement"})," \u2013 Summary and payments amounts"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Daily Usage"})," - Detailed information regarding resource usage"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Daily Usage"})," table displays CloudShell custom tags attached to CloudShell elements created in Azure. Here are a few examples of how to use CloudShell tags in your budget:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For a general budget, filter by the ",(0,i.jsx)(n.strong,{children:"CreatedBy"})," tag with the ",(0,i.jsx)(n.strong,{children:"CloudShell"})," value, and specify an amount."]}),"\n",(0,i.jsxs)(n.li,{children:["For information regarding specific users, filter by the ",(0,i.jsx)(n.strong,{children:"Owner"})," tag and specify the owner for whom to create a budget.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The report includes sandbox owners only. Permitted users who modified existing sandboxes are not included."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For information regarding the number of times a blueprint can be reserved, select the ",(0,i.jsx)(n.strong,{children:"Blueprint"})," tag and select a specific blueprint."]}),"\n",(0,i.jsxs)(n.li,{children:["For information regarding the number of Azure virtual machines that can be created per domain, select the ",(0,i.jsx)(n.strong,{children:"Domain"})," tag and select a certain domain."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(71556).c+"",width:"1367",height:"430"})}),"\n",(0,i.jsxs)(n.p,{children:["For additional information on Azure billing and setting up billing alerts, see ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/billing/billing-understand-your-bill",children:"Understand your bill for Microsoft Azure"})," and Set up billing alerts for your ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/billing-set-up-alerts",children:"Microsoft Azure subscriptions on the official Microsoft Documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Advanced billing options are available using the Microsoft Azure API and other 3rd party tools."})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},35556:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/BillingCurrentPeriod-a40f314cacb326a220d62addaaed3454.jpg"},71556:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/BillingTags-9c128c3928a8989ebd2fb635db305ffb.png"},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>t});var i=r(11504);const o={},s=i.createContext(o);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);