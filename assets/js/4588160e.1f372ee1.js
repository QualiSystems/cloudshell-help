"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[11768],{96568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=i(17624),r=i(4552);const t={sidebar_position:1},o="Configure Azure API to work with CloudShell",l={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell",title:"Configure Azure API to work with CloudShell",description:"CloudShell Apps communicate with Azure using the Azure API. To enable the two platforms to work with each other, you need to add a web application that has permission to use the Azure API.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Microsoft Azure Integration",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/"},next:{title:"Create a Management Resource Group and VNets",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets"}},c={},d=[{value:"Add an Azure web application",id:"add-an-azure-web-application",level:2},{value:"Delegate Azure API permissions to the web application",id:"delegate-azure-api-permissions-to-the-web-application",level:2},{value:"Configure the web application as Contributor",id:"configure-the-web-application-as-contributor",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-azure-api-to-work-with-cloudshell",children:"Configure Azure API to work with CloudShell"}),"\n",(0,s.jsx)(n.p,{children:"CloudShell Apps communicate with Azure using the Azure API. To enable the two platforms to work with each other, you need to add a web application that has permission to use the Azure API."}),"\n",(0,s.jsx)(n.admonition,{title:"Notes:",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You will need an Azure Global Administrator, Application Administrator or Cloud Application Administrator role to perform this procedure."}),"\n",(0,s.jsx)(n.li,{children:'During the app registration process, you will need to save the subscription ID, client ID, tenant ID, and client secret key for later use in your CloudShell "cloud provider resource".'}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"This configuration is a three-step process:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell#add-an-azure-web-application",children:"Add an Azure web application"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell#delegate-azure-api-permissions-to-the-web-application",children:"Delegate Azure API permissions to the web application"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/configure-azure-api-to-work-with-cloudshell#configure-the-web-application-as-contributor",children:"Configure the web application as Contributor"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-an-azure-web-application",children:"Add an Azure web application"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To add an Azure web application:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Log in to ",(0,s.jsx)(n.a,{href:"https://portal.azure.com/#",children:"https://portal.azure.com"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.strong,{children:"Subscriptions"})," page and make sure you have an active subscription."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(20988).c+"",width:"1181",height:"300"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure your subscription has the appropriate permissions."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the user menu, click the ",(0,s.jsx)(n.strong,{children:"More links"})," button and select ",(0,s.jsx)(n.strong,{children:"My permissions"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(74968).c+"",width:"285",height:"245"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"My permissions"})," blade, click ",(0,s.jsx)(n.strong,{children:"Resource Provider Status"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Resource Provider Status"})," blade, make sure the following permissions are registered (register any missing ones):"]}),"\n",(0,s.jsx)("table",{style:{marginLeft:0,marginRight:"auto"},className:"TableStyle-Alternate-Row-Color",cellSpacing:"21",children:(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{className:"TableStyle-Alternate-Row-Color-Body-Body1",children:[(0,s.jsx)("td",{className:"TableStyle-Alternate-Row-Color-BodyB-Column1-Body1",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"level0_print",children:"Microsoft.Compute"}),(0,s.jsx)("li",{className:"level0_print",children:"microsoft.support"}),(0,s.jsx)("li",{className:"level0_print",children:"Microsoft.Resources"}),(0,s.jsx)("li",{className:"level0_print",children:"Microsoft.Features"}),(0,s.jsx)("li",{className:"level0_print",children:(0,s.jsxs)(n.p,{children:["Microsoft.Net",(0,s.jsx)("span",{className:"SearchHighlight SearchHighlight4",children:"work"})]})})]})}),(0,s.jsx)("td",{className:"TableStyle-Alternate-Row-Color-BodyA-Column1-Body1",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Microsoft.Authorization"}),(0,s.jsx)("li",{children:"Microsoft.Storage"}),(0,s.jsx)("li",{children:"Microsoft.OperationalInsights"})]})})]})})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Return to the ",(0,s.jsx)(n.strong,{children:"Subscriptions"})," page and copy and store the ",(0,s.jsx)(n.strong,{children:"Subscription ID"})," somewhere you'll remember."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(22440).c+"",width:"765",height:"300"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["From the left pane, select ",(0,s.jsx)(n.strong,{children:"Azure Active Directory"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the active directory's blade, click ",(0,s.jsx)(n.strong,{children:"App registrations"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"App registrations"})," blade, click the ",(0,s.jsx)(n.strong,{children:"New registration"})," button."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enter the new web application's settings:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Name"}),(0,s.jsx)(n.td,{children:'Name of the web application. For example, "CloudShell App".'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Supported account types"}),(0,s.jsxs)(n.td,{children:["Select ",(0,s.jsx)(n.strong,{children:"Accounts in this organizational directory only (<your company> only - Single tenant)"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Redirect URL"}),(0,s.jsxs)(n.td,{children:["Select ",(0,s.jsx)(n.strong,{children:"Web"}),' and enter a URL. For example, "',(0,s.jsx)(n.a,{href:"https://quali.com",children:"https://quali.com"}),'". This is required for creating the web application but does not affect it.']})]})]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Register"})," at the bottom of the blade."]}),"\n",(0,s.jsx)(n.p,{children:"The new web application is displayed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(55176).c+"",width:"963",height:"442"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy and store the ",(0,s.jsx)(n.strong,{children:"Application (client) ID"})," and ",(0,s.jsx)(n.strong,{children:"Directory (tenant) ID"}),". You will need these values when creating the cloud provider resource in CloudShell."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Proceed to the next section to delegate Azure API permissions to the web application."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"delegate-azure-api-permissions-to-the-web-application",children:"Delegate Azure API permissions to the web application"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To delegate Azure API permissions to the web application:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Return to the ",(0,s.jsx)(n.strong,{children:"App registrations"})," blade of the subscription's active directory."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click the web application you created in the previous section. If you don't see the web application, select ",(0,s.jsx)(n.strong,{children:"All applications"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the web application's page, click ",(0,s.jsx)(n.strong,{children:"API permissions"})," and do the following:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Delegate ",(0,s.jsx)(n.strong,{children:"Azure Service Management"})," permission: Click ",(0,s.jsx)(n.strong,{children:"Add a permission"}),". In the ",(0,s.jsx)(n.strong,{children:"Request API permissions"})," blade, in the ",(0,s.jsx)(n.strong,{children:"Microsoft APIs"})," tab, click the ",(0,s.jsx)(n.strong,{children:"Azure Service Management"})," tile, make sure the ",(0,s.jsx)(n.strong,{children:"Delegated permissions"})," tile is selected and select the ",(0,s.jsx)(n.strong,{children:"Access Azure Service Management as organization users"})," checkbox. Click ",(0,s.jsx)(n.strong,{children:"Add permissions"})," at the bottom of the blade."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure the ",(0,s.jsx)(n.strong,{children:"Sign in and read user profile"})," permission was delegated for ",(0,s.jsx)(n.strong,{children:"Microsoft Graph"}),". If not, click ",(0,s.jsx)(n.strong,{children:"Add a permission"}),". In the ",(0,s.jsx)(n.strong,{children:"Request API permissions"})," blade, in the ",(0,s.jsx)(n.strong,{children:"Microsoft APIs"})," tab, scroll down and click the ",(0,s.jsx)(n.strong,{children:"Microsoft Graph"})," tile. Select ",(0,s.jsx)(n.strong,{children:"Delegated permissions"}),", expand ",(0,s.jsx)(n.strong,{children:"User"})," and select ",(0,s.jsx)(n.strong,{children:"User.Read (Sign in and read user profile)"}),". Click ",(0,s.jsx)(n.strong,{children:"Add permissions"})," at the bottom of the blade."]}),"\n",(0,s.jsx)(n.p,{children:"The API permissions blade should look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(13600).c+"",width:"1311",height:"445"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Make sure the ",(0,s.jsx)(n.strong,{children:"Grant admin consent for <your company>"})," link is checked next to the ",(0,s.jsx)(n.strong,{children:"Add a permission"})," button."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, create a ",(0,s.jsx)(n.strong,{children:"client secret"})," (Azure application) key to be used by the CloudShell App for authentication with Azure."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the web application's page, click ",(0,s.jsx)(n.strong,{children:"Certificates & secrets"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"New client secret"})," and set it to expire ",(0,s.jsx)(n.strong,{children:"In 2 years"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The client secret key is displayed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(90468).c+"",width:"1183",height:"606"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy and store the key value somewhere you'll remember. This is the ",(0,s.jsx)(n.strong,{children:"Azure Application Key"})," you will need to specify in the Azure cloud provider resource in CloudShell."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The client secret key is displayed only once and will disappear when you leave this blade."})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Proceed to the next section to configure the web application as ",(0,s.jsx)(n.strong,{children:"Contributor"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-web-application-as-contributor",children:"Configure the web application as Contributor"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Contributor"})," role enables CloudShell to create and manage virtual machines and other Azure services."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure the Azure web application as Contributor:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Return to the ",(0,s.jsx)(n.strong,{children:"Subscriptions"})," page and click the subscription's name."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, ",(0,s.jsx)(n.strong,{children:"VS Account"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(54024).c+"",width:"797",height:"301"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the blade that appears, click ",(0,s.jsx)(n.strong,{children:"Access control (IAM)"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Access Control"})," blade is displayed."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you don't see this blade, clear your browser's cache and refresh the page."})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add"})," and select ",(0,s.jsx)(n.strong,{children:"Add Role assignment"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Add role assignment"})," blade, in the ",(0,s.jsx)(n.strong,{children:"Role"})," tab, select the ",(0,s.jsx)(n.strong,{children:"Contributor"})," role."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Select members"}),", and search for the web application you created."]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(98120).c+"",width:"1181",height:"708"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select the app and click ",(0,s.jsx)(n.strong,{children:"Select"})," at the bottom of the blade."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Review + assign"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To verify that the web application was created correctly, in the ",(0,s.jsx)(n.strong,{children:"Access control (IAM)"})," blade, click the ",(0,s.jsx)(n.strong,{children:"Role assignments"})," tab and make sure it is displayed as a ",(0,s.jsx)(n.strong,{children:"Contributor"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(82508).c+"",width:"1052",height:"581"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/microsoft-azure-integration/create-a-management-resource-group-and-vnets",children:"Create a Management Resource Group and VNets"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},20988:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/ActiveSubscription-7e3f8b4f71d14e038c55c39eb157e027.png"},98120:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/AddUsersSelectApp-c552e135ee07fbcb72155b4601137b96.png"},82508:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/NewContributorWebApp-3266e41f220e56eaf2fab4a9333e8b07.png"},55176:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/NewWebApp-541676bdd0a217438c52ab514f39d2bf.png"},13600:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/RequiredPermissions-eedeb38e247ee955154b454cf07f68cb.png"},90468:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/SecretKey-5f90eda7a8bf1607ff80906feade280e.png"},74968:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/ShowUserPermissions-103b77a7e387822d46ec95bde368fcab.png"},54024:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/subscription-1bd8197bc8ef701cfa4acd5f741a5bf9.png"},22440:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/subscription2-5e4c9ce15e90790f2674e2a98e8a9e5e.png"},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>o});var s=i(11504);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);