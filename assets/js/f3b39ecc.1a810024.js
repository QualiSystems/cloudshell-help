"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[93682],{59244:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>p});var o=n(17624),s=n(4552);const r={sidebar_position:3},l="Apps Overview",t={id:"intro/features/apps-overview",title:"Apps Overview",description:"Apps enable you to deploy, as part of your sandbox lifecycle, virtual applications (VMs) that are hosted on a cloud provider.",source:"@site/versioned_docs/version-2023.3/intro/features/apps-overview.md",sourceDirName:"intro/features",slug:"/intro/features/apps-overview",permalink:"/cloudshell-help/intro/features/apps-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/apps-overview.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Abstract Resources Overview",permalink:"/cloudshell-help/intro/features/abstract-resources"},next:{title:"Blueprint Approval Policy",permalink:"/cloudshell-help/intro/features/blueprint-approval-policy"}},a={},p=[{value:"What is an App?",id:"what-is-an-app",level:2},{value:"What does an App include?",id:"what-does-an-app-include",level:2},{value:"App configuration process",id:"app-configuration-process",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"apps-overview",children:"Apps Overview"}),"\n",(0,o.jsx)(i.p,{children:"Apps enable you to deploy, as part of your sandbox lifecycle, virtual applications (VMs) that are hosted on a cloud provider."}),"\n",(0,o.jsxs)(i.p,{children:["Note that we're adding cloud provider shells to ",(0,o.jsx)(i.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"})," all the time. For additional information, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities",children:"Cloud Provider Shells - Features and Capabilities Per Release"}),". For unsupported cloud providers, we provide the Custom Cloud Provider Shell which you can use to develop support for your cloud provider. To learn how to load static VMs from vCenter Server into CloudShell as inventory resources, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/intro/features/static-vms",children:"Static VMs Overview"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.img,{src:n(46664).c+"",width:"39",height:"35"}),"For video tutorials on Apps, please visit ",(0,o.jsx)(i.a,{href:"https://courses.quali.com/",children:"Quali U Courses portal"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"what-is-an-app",children:"What is an App?"}),"\n",(0,o.jsx)(i.p,{children:"An App is a CloudShell component that provides the definition of an application hosted on a VM. When run in the sandbox, the App deploys a virtual machine (VM) and performs the specified configuration management on it. The CloudShell user can add specific Apps from the App / Service catalog to a blueprint, for example a virtual router or a PostgreSQL database, and connect them to other resources/Apps. Once the App is deployed, an App resource is created, which behaves according to the deployed App Shell specified in the App template. Multiple Apps based on the same App template can run in parallel."}),"\n",(0,o.jsx)(i.h2,{id:"what-does-an-app-include",children:"What does an App include?"}),"\n",(0,o.jsx)(i.p,{children:"Apps include the following settings:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"The cloud provider the App is hosted on"}),"\n",(0,o.jsx)(i.li,{children:"The template/image/VM the App is based on"}),"\n",(0,o.jsx)(i.li,{children:"(Optional) The configuration management that will run on the VM (software installations, OS\xa0configurations, etc.). In some cases, the VM may already include the required configurations."}),"\n",(0,o.jsx)(i.li,{children:"The Shell of the deployed App, which may offer additional automation capabilities to the user once the App is deployed"}),"\n",(0,o.jsx)(i.li,{children:"(Optional) User access credentials to the VM (user/password)"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"app-configuration-process",children:"App configuration process"}),"\n",(0,o.jsx)(i.p,{children:"The App configuration process requires creating a cloud provider resource that will host the App\u2019s VM, enabling network connectivity, if required, and creating the App itself in CloudShell Portal."}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"Depending on your organization, the system administrator and App/blueprint designers may be the same employee."})}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["For public clouds like AWS EC2 and Microsoft Azure, CloudShell management networks need to first be installed on the cloud provider region that will host the App's VM. See ",(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/",children:"Public Cloud Provider Support in CloudShell"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["The system administrator creates an Inventory resource for a cloud provider such as VMware vCenter or AWS. For additional information, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/portal/inventory/managing-resources/adding-inventory-resources/",children:"Adding Inventory Resources"}),"."]}),"\n",(0,o.jsx)(i.p,{children:'This "cloud provider resource" will deploy the App\'s VM.'}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["To enable connectivity between Apps and resources or other Apps, the system administrator configures VLAN or Subnet services, as appropriate. See ",(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/",children:"Connectivity Control"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"The App designer creates App templates, which are based on the cloud provider resource."}),"\n",(0,o.jsxs)(i.p,{children:["This requires configuring the VM to deploy and the application to install on the new VM. For additional information, see ",(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/",children:"Adding App templates"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"The blueprint designer adds the App to a blueprint and configures connectivity to other Apps and resources, as appropriate."}),"\n",(0,o.jsxs)(i.p,{children:["For additional information, see ",(0,o.jsx)(i.a,{href:"../../portal/blueprints/creating-blueprints/apps",children:"Apps in Blueprints"})," and ",(0,o.jsx)(i.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",children:"Add Virtual Network Connectivity Requirements"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["End-users can now deploy the Apps in sandboxes - see ",(0,o.jsx)(i.a,{href:"../../portal/sandboxes/sandbox-workspace/apps/",children:"Apps in Sandboxes"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains",children:"Managing Public Cloud Apps in Domains"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"../../devguide/develop-custom-cloud-provider-shells/",children:"Developing Custom Cloud Provider Shells"})}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},46664:(e,i,n)=>{n.d(i,{c:()=>o});const o=n.p+"assets/images/video-icon-c0904e9de36f33a2bb9e4143425777f5.jpg"},4552:(e,i,n)=>{n.d(i,{I:()=>t,M:()=>l});var o=n(11504);const s={},r=o.createContext(s);function l(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);