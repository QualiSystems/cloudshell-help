"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[4008],{53756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(17624),i=t(4552);const s={sidebar_position:1},l="vCenter Integration Architecture and Prerequisites",o={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites",title:"vCenter Integration Architecture and Prerequisites",description:"vCenter Integration Architecture",source:"@site/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"VMware vCenter Integration and Configuration",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/"},next:{title:"Required vCenter User Permissions per Deployment Type",permalink:"/cloudshell-help/next/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type"}},a={},d=[{value:"vCenter Integration Architecture",id:"vcenter-integration-architecture",level:2},{value:"CloudShell access to vCenter",id:"cloudshell-access-to-vcenter",level:2},{value:"vCenter Prerequisites",id:"vcenter-prerequisites",level:2},{value:"vCenter machine&#39;s operating system",id:"vcenter-machines-operating-system",level:3},{value:"Licensing",id:"licensing",level:3},{value:"Networking",id:"networking",level:3},{value:"VMware",id:"vmware",level:3},{value:"Best Practices: VMware folders and templates",id:"best-practices-vmware-folders-and-templates",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vcenter-integration-architecture-and-prerequisites",children:"vCenter Integration Architecture and Prerequisites"}),"\n",(0,r.jsx)(n.h2,{id:"vcenter-integration-architecture",children:"vCenter Integration Architecture"}),"\n",(0,r.jsx)(n.p,{children:"When deploying a vCenter App in a sandbox, the CloudShell Execution Server connects to the vCenter server and creates the VM according to the settings (parent VM/image, datacenter, ESXi host or host cluster, storage, dvSwitch, etc.) defined on the App and the App's vCenter cloud provider resource. Specifically, CloudShell accesses the datacenter, finds the parent VM, snapshot, template or image defined on the App template*, and creates the VM from that parent object. If the App has a connectivity requirement defined in the sandbox, CloudShell will create a port group on the dvSwitch, add the VM's vNIC and configure the VLAN on this vNIC and on all other connected vNICs."}),"\n",(0,r.jsxs)(n.p,{children:["** When restoring a saved sandbox with deployed vCenter Apps, CloudShell creates the App VMs from the VM clones CloudShell created during the sandbox saving process. For additional information, see ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/save-sandbox",children:"Save a Sandbox"}),".*"]}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"note",children:(0,r.jsx)(n.p,{children:"vCenter elements created by CloudShell should not be altered as this may cause unexpected behavior."})}),"\n",(0,r.jsx)(n.p,{children:"The following diagram illustrates a vCenter integration (with a local CloudShell installation) hosting a live sandbox that has 6 deployed VMs connected to a VLAN network:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(64536).c+"",width:"620",height:"333"})}),"\n",(0,r.jsx)(n.h2,{id:"cloudshell-access-to-vcenter",children:"CloudShell access to vCenter"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure your CloudShell Execution Server communicates to the vCenter Management IP over HTTPS/port 443. Make sure to allow HTTPS/port 443 through the appropriate firewalls."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"vcenter-prerequisites",children:"vCenter Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"For CloudShell integration with vCenter Server, the following preparations need to be made on the vCenter Server."}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,r.jsx)(n.p,{children:"Please consult your resident vSphere expert before performing these configurations."})}),"\n",(0,r.jsx)(n.h3,{id:"vcenter-machines-operating-system",children:"vCenter machine's operating system"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Windows / Linux"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"licensing",children:"Licensing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["vSphere version: 5.5 - 6.5, 6.7, 7 (vSphere\xae Standard\u2122 / Enterprise Plus\u2122/ with Operations Management\u2122 / Platinum\u2122)","\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"CloudShell connectivity requires vSphere\xae Enterprise Plus\u2122 and above."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"vSphere Client"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"vCenter server"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"ESXi server"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"dvSwitch that is capable of creating and configuring port groups"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"networking",children:"Networking"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Physical backbone \u2013 a single switch with management interface and VLAN assignment capability, physically connected to NICs on the ESXis"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"dvSwitch: During App deployment, CloudShell creates connectivity between vCenter App VMs as well as physical resources by creating VLAN networks in the sandbox. First, CloudShell allocates a VLAN for each peer-to-peer or many-to-many network in the sandbox and adds the connected endpoints to the relevant network."}),"\n",(0,r.jsx)(n.p,{children:"CloudShell manages VM networking via the dvSwitch, so if you require networking, you will need a dvSwitch that is capable of creating and configuring port groups."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["vSwitch connectivity is supported in the vCenter 2",(0,r.jsx)("sup",{children:"nd"})," Gen cloud provider shell and requires the same vSwitch name to be set on all relevant VM cluster hosts. The ",(0,r.jsx)(n.strong,{children:"VMware vCenter Cloud Provider Shell 2G"})," shell can be downloaded ",(0,r.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/1691",children:"here"}),"."]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connected to the same physical NICs as the physical backbone switch"}),"\n",(0,r.jsx)(n.li,{children:"Capable of creating and configuring port groups"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For connectivity between different datacenters, the dvSwitches and other switches or lab components must be fully trunked."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The physical switch must be configured to route the individual VLAN traffic to a DHCP server."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DHCP server can be either:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Managed as a service on board the switch"}),"\n",(0,r.jsx)(n.li,{children:"A dedicated DHCP server created in VMware (Windows/Linux) on a management network, reaching all segments for IP assignment"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DHCP should be able to manage all required segments according to architecture design."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Physical network should not be configured with gateways, in order to prevent cross-VLAN communication by default."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VMs must have network adapter(s). Starting with vCenter 2G version 3.4.0, CloudShell will create VMXNET3 adapters on the VMs if required by the sandbox. For example, if the VM has 2 network adapters of type e1000, but the App has 3 connector lines, CloudShell will create a 3rd network adapter of the same type as the last one (e1000)."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"vmware",children:"VMware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Datacenter: Since CloudShell does not provide out-of-the-box support for connectivity between VMs on multiple datacenters, it is recommeded to designate a single datacenter to be used for CloudShell App deployments. The datacenter doesn't have to be dedicated only to CloudShell activity."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Host cluster \u2013 including all ESXi hosts (1 or more) to be managed by CloudShell"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Datastore or datastore (DS) cluster that includes all data stores (1 or more) to be managed by CloudShell:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Using VMware vSAN license/external SAN"}),"\n",(0,r.jsx)(n.li,{children:"(For datastore clusters) Using NFS cluster, containing all external datastores"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Notes about storage:",type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"VMs are stored on the datastore or datastore cluster defined on the cloud provider resource."}),"\n",(0,r.jsx)(n.li,{children:"CloudShell does not support cross-storage communication. Therefore, if you\u2019re using multiple cloud provider resources in the same sandbox and want to share the storage among the VMs, make sure all cloud provider resources use the same storage."}),"\n"]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"best-practices-vmware-folders-and-templates",children:"Best Practices: VMware folders and templates"}),"\n",(0,r.jsx)(n.p,{children:"To help you organize your CloudShell activity on vSphere, we've come up with these best practices:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"Management" folder - should contain all management VMs:',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Quali server (Quali Server can be installed on a dedicated VM on the vCenter or in an external location with networking to the vCenter Server)"}),"\n",(0,r.jsxs)(n.li,{children:["QualiX: In order to use QualiX for in-browser connections to App VMs, make sure the QualiX machine is accessible to the sandbox application network. See ",(0,r.jsx)(n.a,{href:"/cloudshell-help/next/install-configure/qualix/",children:"QualiX Installation and Configuration"})]}),"\n",(0,r.jsx)(n.li,{children:"DHCP (if used with a dedicated server) - other applications and services that manage Cloudshell-deployed VM capabilities"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['"Infrastructure" folder \u2013 for infrastructure static VMs:',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Static always-on VMs (Firewalls, DBs, etc.)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['"Base Templates" folder \u2013 for all App templates to be deployed on CloudShell sandboxes:',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Must have VMware tools installed (needs to be included with image or VM template with which CloudShell creates the App VM)"}),"\n",(0,r.jsx)(n.li,{children:"DHCP IP settings"}),"\n",(0,r.jsx)(n.li,{children:"A snapshot called \u201cclean\u201d \u2013 after VM is powered off"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},64536:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/vCenter-Architecture_620x333-ceae382d89a6730ca06a56257355fd8a.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var r=t(11504);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);