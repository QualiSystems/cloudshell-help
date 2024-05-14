"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[27216],{72548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(17624),o=t(4552);const s={sidebar_position:1},l="Subnet Connectivity - Points to Consider",r={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",title:"Subnet Connectivity - Points to Consider",description:"When adding a subnet to a blueprint diagram, take the following points under consideration. To learn how to add a subnet to a blueprint and set the service's attribute values, see Services in Blueprints.",source:"@site/docs/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Subnet Connectivity",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/"},next:{title:"Connected Commands",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connected-commands/"}},d={},c=[{value:"General",id:"general",level:2},{value:"Out-of-the-box support",id:"out-of-the-box-support",level:2},{value:"Sandbox IP limit",id:"sandbox-ip-limit",level:2},{value:"Private cloud Apps",id:"private-cloud-apps",level:2},{value:"Cloud provider resource",id:"cloud-provider-resource",level:2},{value:"Connections",id:"connections",level:2},{value:"Modifying subnets",id:"modifying-subnets",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"subnet-connectivity---points-to-consider",children:"Subnet Connectivity - Points to Consider"}),"\n",(0,i.jsxs)(n.p,{children:["When adding a subnet to a blueprint diagram, take the following points under consideration. To learn how to add a subnet to a blueprint and set the service's attribute values, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["By default, CloudShell creates a single subnet on the public cloud for the sandbox's public cloud Apps. However, blueprint designers can have CloudShell create additional subnets.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If both AWS and Azure Apps are included in the sandbox, CloudShell will create two subnets, one for each public cloud."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["There are two ways to create additional subnets, by adding ",(0,i.jsx)(n.strong,{children:"Subnet"})," services to the blueprint diagram or creating peer-to-peer connections by directly creating a ",(0,i.jsx)(n.strong,{children:"Connector"})," route between two AWS EC2 or Azure Apps."]}),"\n",(0,i.jsx)(n.li,{children:"A sandbox that has additional subnets will create these subnets instead of the default one."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"out-of-the-box-support",children:"Out-of-the-box support"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CloudShell provides out-of-the-box support for multiple subnets in the same sandbox for AWS EC2/Azure Apps."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sandbox-ip-limit",children:"Sandbox IP limit"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The maximum number of IPs per sandbox is 255. Therefore, when adding multiple subnet services, make sure the total subnet size does not exceed this limit."}),"\n",(0,i.jsx)(n.li,{children:"For P2P connections between two AWS EC2 or Azure Apps, CloudShell creates a subnet with 16 IPs."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"private-cloud-apps",children:"Private cloud Apps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Subnet services cannot be connected to private cloud Apps, such as vCenter. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cloud-provider-resource",children:"Cloud provider resource"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All Apps connected to the same subnet must use the same cloud provider resource for their deployment. This prevents modeling a network with components in different clouds."}),"\n",(0,i.jsx)(n.li,{children:"CloudShell allows changing a connected deployed App's deployment type as long as the new deployment type uses the same cloud provider resource."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connections",children:"Connections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Deployed Apps cannot be connected or disconnected in the sandbox."}),"\n",(0,i.jsxs)(n.p,{children:["However, if you need to disconnect a deployed App, you can remove it from the sandbox. This will both disconnect the App from the subnets or Apps it is connected to, and delete the App's VM from the cloud provider. For additional information, see ",(0,i.jsx)(n.a,{href:"../../../../../portal/sandboxes/sandbox-workspace/apps/",children:"Apps in Sandboxes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It is possible to connect Azure Apps to predefined subnets residing on the Sandbox VNet. This capability is supported for Azure 2",(0,i.jsx)("sup",{children:"nd"})," Gen cloud provider resources. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/connect-resources-and-apps#connecting-azure-apps-to-predefined-subnets",children:"Connecting Azure Apps to predefined subnets"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the diagram has any subnet services, make sure all AWS EC2/Azure Apps in that diagram are connected to at least one subnet. For additional information, see ",(0,i.jsx)(n.a,{href:"../../../../../portal/sandboxes/sandbox-workspace/apps/",children:"Apps in Sandboxes"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For AWS EC2 instances, the subnet range allocation is independent from the IP allocation. As a result, instance IPs may not be included in the defined range of their subnet. Please note that this is a display issue and does not affect connectivity."}),"\n",(0,i.jsx)(n.p,{children:"For example, the IPs allocated to the deployed instances are outside the subnet's range:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(57975).c+"",width:"602",height:"189"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"modifying-subnets",children:"Modifying subnets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Subnet services cannot be added, edited or removed from a sandbox. For additional information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/services",children:"Services in Sandboxes"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../../../../portal/blueprints/creating-blueprints/apps/",children:"Apps in Blueprints"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},57975:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/AWSSubnetConnectivity-8778bc8d4054df6d9e61ac372067d6cf.png"},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>l});var i=t(11504);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);