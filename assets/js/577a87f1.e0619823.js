"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[62140],{57812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var i=r(17624),t=r(4552);const o={},l="VMware vCenter Integration and Configuration",s={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/index",title:"VMware vCenter Integration and Configuration",description:"This article discusses the integration of CloudShell with vCenter to allow CloudShell to spin up and manage the lifecycle of VMs hosted on vCenter Server. vCenter integration is provided out of the box starting with CloudShell version 7.0 and includes the following:",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/index.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/index.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenStack Known Limitations",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/openstack-integration-and-configuration/openstack-known-limitations"},next:{title:"vCenter Integration Architecture and Prerequisites",permalink:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites"}},d={},a=[{value:"CloudShell App deployment flow on vCenter",id:"cloudshell-app-deployment-flow-on-vcenter",level:2},{value:"Basic Requirements",id:"basic-requirements",level:2},{value:"vCenter integration workflow",id:"vcenter-integration-workflow",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vmware-vcenter-integration-and-configuration",children:"VMware vCenter Integration and Configuration"}),"\n",(0,i.jsx)(n.p,{children:"This article discusses the integration of CloudShell with vCenter to allow CloudShell to spin up and manage the lifecycle of VMs hosted on vCenter Server. vCenter integration is provided out of the box starting with CloudShell version 7.0 and includes the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VM lifecycle management (Deploy App, Power On, Refresh IP, Power Off and Delete)"}),"\n",(0,i.jsxs)(n.li,{children:["Connectivity with other VMs and physical resources, including static VMs. Connectivity is based on vCenter dvSwitch (standard vSwitch supported in ",(0,i.jsxs)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/1691",children:["vCenter 2",(0,i.jsx)("sup",{children:"nd"})," Gen cloud provider shell"]}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Snapshot management (Save Snapshot, Restore Snapshot, and Get Snapshots)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CloudShell supports two integration modes with vCenter, where Quali Server is installed internally on a vCenter VM or externally."}),"\n",(0,i.jsx)(n.h2,{id:"cloudshell-app-deployment-flow-on-vcenter",children:"CloudShell App deployment flow on vCenter"}),"\n",(0,i.jsx)(n.p,{children:"During the deployment of vCenter Apps in a CloudShell sandbox, CloudShell accesses the vCenter Server defined in the cloud provider resource, and does the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creates the VM on the ESXi host or host cluster."}),"\n",(0,i.jsx)(n.li,{children:"Creates connectivity. Allocates VLAN ID for each required VLAN network, according to VLAN allocation policy defined in the sandbox (VLAN services), and adds the VM's NIC(s) to the network(s)."}),"\n",(0,i.jsx)(n.li,{children:"Powers on the VM and refreshes the VM's IP."}),"\n",(0,i.jsx)(n.li,{children:"Runs configuration management on the VM (if defined)."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-requirements",children:"Basic Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["The following VMware vSphere components are required for CloudShell integration with vCenter (supported version is listed in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites",children:"vCenter Integration Architecture and Prerequisites"}),"):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["vSphere\xae Standard\u2122 / Enterprise Plus\u2122/ with Operations Management\u2122 / Platinum\u2122","\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"CloudShell connectivity requires vSphere\xae Enterprise Plus\u2122 and above."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"vSphere Client"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"vCenter server"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ESXi server"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["dvSwitch that is capable of creating and configuring port groups (vCenter 2",(0,i.jsx)("sup",{children:"nd"})," Gen shell supports standard vSwitch as well)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that for additional capabilities or to integrate with other VMware vSphere components such as vSphere Client, you will need to implement a custom cloud provider that supports these options. For details, see the Dev Guide's ",(0,i.jsx)(n.a,{href:"/cloudshell-help/devguide/develop-custom-cloud-provider-shells/getting-started-with-cp-dev",children:"Getting Started with Cloud Provider Development"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"vcenter-integration-workflow",children:"vCenter integration workflow"}),"\n",(0,i.jsx)(n.p,{children:"For each vCenter Server you want to integrate with CloudShell, perform the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Prepare vCenter Server for integration with CloudShell. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites",children:"vCenter Integration Architecture and Prerequisites"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Designate a vCenter user with the required permissions to be used by CloudShell to access and interact with vCenter Server. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",children:"Required vCenter User Permissions per Deployment Type"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource",children:"Add VMware vCenter Cloud Provider Resource"})," based on the specifications of the designated vCenter datacenter."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Set up CloudShell App Templates to deploy and configure VMs on the datacenter. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-a-vcenter-app-template",children:"Add a vCenter App Template"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To have CloudShell App deployments run on specific domains in CloudShell, follow the steps in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/managing-private-cloud-apps-in-domains",children:"Managing Private Cloud Apps in Domains"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure QualiX for in-browser connections to App VMs hosted on vCenter Server from the sandbox. See ",(0,i.jsx)(n.a,{href:"/cloudshell-help/install-configure/qualix/",children:"QualiX Installation and Configuration"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The QualiX Server must be accessible to the vCenter Server and can be installed either externally or in a VM on the vCenter Server."})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>l});var i=r(11504);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);