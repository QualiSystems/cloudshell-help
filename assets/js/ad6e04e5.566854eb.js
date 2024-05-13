"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[3116],{19276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=i(17624),r=i(4552);const l={sidebar_position:7},t="Using Multiple Azure Regions in CloudShell",s={id:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell",title:"Using Multiple Azure Regions in CloudShell",description:"This article provides guidelines on how to configure your Azure cloud provider resources in CloudShell, in case of multiple interconnected regions in Azure.",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/using-multiple-azure-regions-in-cloudshell.md",tags:[],version:"current",lastUpdatedAt:171563037e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Integrating Azure with Cloud-based CloudShell Installation",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/microsoft-azure-integration-and-configuration/integrating-azure-with-cloud-based-cloudshell-installation"},next:{title:"Managing Public Cloud Apps in Domains",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/public-cloud-provider-support-in-cloudshell/managing-public-cloud-apps-in-domains"}},u={},d=[];function c(e){const n={a:"a",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"using-multiple-azure-regions-in-cloudshell",children:"Using Multiple Azure Regions in CloudShell"}),"\n",(0,o.jsx)(n.p,{children:"This article provides guidelines on how to configure your Azure cloud provider resources in CloudShell, in case of multiple interconnected regions in Azure."}),"\n",(0,o.jsx)(n.p,{children:"In each region that has a CloudShell integration, a VNET is created for hosting the content of the sandboxes that will be created in that region. This VNET is always created with the CIDR 10.0.0.0/8. In scenarios where CloudShell is integrated with two or more Azure regions that are connected to each other by VPN, this behavior may cause an allocation conflict when creating a sandbox in one of the regions."}),"\n",(0,o.jsx)(n.p,{children:"For illustration purposes, consider this scenario of a sandbox deploying subnets in two different regions, each with its own VMs:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(93964).c+"",width:"1137",height:"609"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To successfully implement such a scenario:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make sure CloudShell is integrated with the Azure regions."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make sure to set up a VPN tunnel between the regions to allow networking between sandbox VNETs located on the different regions."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In the same CloudShell domain, create different Azure cloud provider resources, one for each Azure region."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Make sure the IP range available to each cloud provider resource does not conflict with the ranges of the other cloud provider resources. This is done by specifying the IPs or IP ranges to ignore in the cloud providers' ",(0,o.jsx)(n.strong,{children:"Networks in Use"})," attribute. So for example, to use the default CIDR 10.0.0.0/8 (which provides a range of 16,777,216 IPs) in two Azure regions:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Set region A's cloud provider resource to ignore the first half of the range (1 - 8,388,608)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Set region B's cloud provider resource to ignore the second half of the range (8,388,609 - 16,777,216)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To set up network connectivity between each cloud provider's Apps, see ",(0,o.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",children:"Subnet Connectivity - Points to Consider"}),"."]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},93964:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/Multi-Azure-Deployment-9ce3775af2f506285d71b6add618f90f.png"},4552:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>t});var o=i(11504);const r={},l=o.createContext(r);function t(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);