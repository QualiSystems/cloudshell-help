"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[32532],{65480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(17624),o=t(4552);const s={sidebar_position:1},r="VLAN Connectivity - Points to Consider",l={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider",title:"VLAN Connectivity - Points to Consider",description:"When setting up your L2 resources, take these points into consideration.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider",permalink:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider.md",tags:[],version:"2023.3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VLAN Connectivity",permalink:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/"},next:{title:"Define the Resource Connections of the Switch or Patch Panel",permalink:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel"}},c={},a=[{value:"Compatibility",id:"compatibility",level:2},{value:"Out-of-the-box support",id:"out-of-the-box-support",level:2},{value:"Networking",id:"networking",level:2},{value:"VLAN services",id:"vlan-services",level:2},{value:"OpenStack",id:"openstack",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vlan-connectivity---points-to-consider",children:"VLAN Connectivity - Points to Consider"}),"\n",(0,i.jsx)(n.p,{children:"When setting up your L2 resources, take these points into consideration."}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"out-of-the-box-support",children:"Out-of-the-box support"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CloudShell automatically deploys and tears down L2 connections when starting and ending the sandbox."}),"\n",(0,i.jsx)(n.li,{children:"CloudShell provides out-of-the-box support for multiple VLAN networks in the same sandbox."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"CloudShell only controls and models the leaf switches (those connected to the endpoints). All L2 switches in the fabric must be fully trunked."}),"\n",(0,i.jsxs)(n.li,{children:["To enable the use of VLANs between physical end points, make sure you connect the physical devices to the appropriate L2 switch resources, as explained in ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["To auto-discover an L2 switch resource and add it to the CloudShell inventory, you should use an appropriate CloudShell L2 Shell (from ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/repositories",children:"Quali Repositories"}),") that provides all the required VLAN connectivity capabilities."]}),"\n",(0,i.jsx)(n.li,{children:"To enable connections for virtual machines deployed in a private cloud, make sure to configure networking in their cloud provider resource. For example, define the vCenter dvswitch or OpenStack management network when configuring the cloud provider resource."}),"\n",(0,i.jsxs)(n.li,{children:["CloudShell supports L2 connections based on SDN. For details, see the ",(0,i.jsx)(n.a,{href:"https://github.com/QualiSystems/cloudshell-standards/blob/master/Documentation/SDN_controller_standard.md",children:"SDN Controller Shell Standard"})," and shells in the ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"})," page."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vlan-services",children:"VLAN services"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VLAN service customizations"}),": Additional VLAN services can be created. For example, you could set up multiple VLAN Auto services in the same domain, each with a different allocation range. Simply duplicate an existing VLAN service and edit the settings, as appropriate. Then, in the ",(0,i.jsx)(n.strong,{children:"Scripts - Resource"})," management page, add the new VLAN service model to the ",(0,i.jsx)(n.strong,{children:"Vlan Service Connect All"})," script."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modifying a range on a VLAN service does not affect VLANs that are currently in use."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Peer-to-peer (P2P) connections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"P2P VLAN Default"})," is an admin-level service that is only visible to domain and system administrators in CloudShell Portal."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When a peer-to-peer connection is being resolved, CloudShell selects a VLAN to use according to the following logic:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"CloudShell selects the P2P VLAN Default service that exists in the blueprint."}),"\n",(0,i.jsx)(n.li,{children:"Otherwise, it uses a P2P VLAN Default service in a category associated to the user's domain."}),"\n",(0,i.jsx)(n.li,{children:"Otherwise, it uses a P2P VLAN Default service in CloudShell."}),"\n",(0,i.jsxs)(n.li,{children:["Otherwise, the ",(0,i.jsx)(n.strong,{children:"VLAN Auto"})," preset's settings are used."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"openstack",children:"OpenStack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Only Access mode is supported for OpenStack instances deployed in CloudShell sandboxes."}),"\n",(0,i.jsxs)(n.li,{children:["VXLAN ID ranges are only supported for OpenStack cloud provider, and configured in the Allocated Ranges attribute of the VLAN service.","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["VLAN Trunking: Starting with OpenStack Cloud Provider Shell version 1.2.0, CloudShell will create a new interface on the deployed App's VM for every connected VLAN service. For details, see ",(0,i.jsx)(n.a,{href:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-configuration-requirements",children:"OpenStack Configuration Requirements"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/intro/features/services",children:"Services Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/intro/features/apps-overview",children:"Apps Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/add-connectivity/connections-legend",children:"Connections Legend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/connect-resources-and-apps",children:"Connect Resources and Apps"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var i=t(11504);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);