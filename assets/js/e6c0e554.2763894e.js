"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[45350],{29205:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(74848),t=i(28453);const s={sidebar_position:2},l="Required vCenter User Permissions per Deployment Type",o={id:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",title:"Required vCenter User Permissions per Deployment Type",description:"To configure vCenter cloud providers, you must use a vCenter user that has a role with the required permissions for the specified deployment type on the root and child objects. Root-level permissions are required because in order to correctly identify each vCenter object (datacenter, templates, dvswitches, etc.) on your cloud provider resource, CloudShell needs to be able to access the vCenter object tree, starting with the root, which is the datacenter.",source:"@site/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type.md",sourceDirName:"admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration",slug:"/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/required-vcenter-user-permissions-per-deployment-type.md",tags:[],version:"2023.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"vCenter Integration Architecture and Prerequisites",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/vcenter-integration-architecture-and-prerequisites"},next:{title:"Add VMware vCenter Cloud Provider Resource",permalink:"/2023.3/admin/supported-cloud-providers-in-cloudshell/private-cloud-provider-support-in-cloudshell/vmware-vcenter-integration-and-configuration/add-vmware-vcenter-cloud-provider-resource"}},a={},c=[];function d(e){const n={h1:"h1",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"required-vcenter-user-permissions-per-deployment-type",children:"Required vCenter User Permissions per Deployment Type"})}),"\n",(0,r.jsx)(n.p,{children:"To configure vCenter cloud providers, you must use a vCenter user that has a role with the required permissions for the specified deployment type on the root and child objects. Root-level permissions are required because in order to correctly identify each vCenter object (datacenter, templates, dvswitches, etc.) on your cloud provider resource, CloudShell needs to be able to access the vCenter object tree, starting with the root, which is the datacenter."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To set up the vCenter user(s) for CloudShell:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the vSphere Client's ",(0,r.jsx)(n.strong,{children:"Administration"})," area, in the ",(0,r.jsx)(n.strong,{children:"Roles"})," section, add or edit a role."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(66722).A+"",width:"940",height:"558"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Grant the permissions for the desired deployment type(s):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Permissions for App deployments:"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy Clone VM from VM / Deploy VM from Linked Clone:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Datastore > Allocate space"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Create folder"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Delete Folder"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Create virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Delete virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Reconfigure virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Resource > Assign vApp to resource pool"}),"\n",(0,r.jsx)(n.li,{children:"Resource > Assign virtual machine to resource pool"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > CPU count"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Memory"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Extend virtual disk"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Device connection"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Power Off"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Power On"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Inventory > Create from existing"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Inventory > Remove"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Clone template"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Clone virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Customize"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Modify customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Read customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Create snapshot"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Remove snapshot"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Revert to snapshot"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Assign or Unassign Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag Category"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Deploy VM from OVF image:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Datastore > Allocate space"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Create folder"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Delete Folder"}),"\n",(0,r.jsx)(n.li,{children:"Network > Assign network"}),"\n",(0,r.jsx)(n.li,{children:"vApp > Import"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Add new disk"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Advanced"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > CPU count"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Memory"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Extend virtual disk"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Device connection"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Inventory > Remove"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Customize"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Modify customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Read customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Assign or Unassign Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag Category"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Deploy VM from Template:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Datastore > Allocate space"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Create folder"}),"\n",(0,r.jsx)(n.li,{children:"Folder > Delete Folder"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Create virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Delete virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Host > Local operations > Reconfigure virtual machine"}),"\n",(0,r.jsx)(n.li,{children:"Resource > Assign vApp to resource pool"}),"\n",(0,r.jsx)(n.li,{children:"Resource > Assign virtual machine to resource pool"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > CPU count"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Memory"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Extend virtual disk"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Device connection"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Power Off"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Interaction > Power On"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Inventory > Create from existing"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Inventory > Remove"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Customize"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Deploy template"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Modify customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Provisioning > Read customization specifications"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Assign or Unassign Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Create vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Delete vSphere Tag Category"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag"}),"\n",(0,r.jsx)(n.li,{children:"vSphere Tagging > Edit vSphere Tag Category"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Connectivity:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Network > Assign network"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Modify device settings"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Configuration > Settings"}),"\n",(0,r.jsx)(n.li,{children:"dvPort group > Create"}),"\n",(0,r.jsx)(n.li,{children:"dvPort group > Delete"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Permissions for Sandbox Save and Restore:"})}),"\n",(0,r.jsx)(n.p,{children:"Snapshot Save and Restore operations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Create snapshot"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Remove snapshot"}),"\n",(0,r.jsx)(n.li,{children:"Virtual machine > Snapshot management > Revert to snapshot"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the ",(0,r.jsx)(n.strong,{children:"Role name"}),", as appropriate."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Finish"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"After creating the role, add a permission to the root level of the vCenter Server."}),"\n",(0,r.jsx)(n.p,{children:'For example, "vcenter1.qualisystems.local":'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(62490).A+"",width:"389",height:"500"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Add the ",(0,r.jsx)(n.strong,{children:"User"})," that will be used by vCenter cloud provider resources to deploy App VMs on the vCenter Server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Assign the new/updated ",(0,r.jsx)(n.strong,{children:"Role"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure the ",(0,r.jsx)(n.strong,{children:"Propagate to children"})," check box is selected."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you cannot ",(0,r.jsx)(n.strong,{children:"Propagate to children"}),", make sure the vCenter account has at least ",(0,r.jsx)(n.strong,{children:"Read-only"})," permission on the datacenter."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the datacenter and select ",(0,r.jsx)(n.strong,{children:"Permissions"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure the account has the ",(0,r.jsx)(n.strong,{children:"Read-only"})," role or higher."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(72164).A+"",width:"1280",height:"858"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},66722:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/vCenterEditRoleDialog-38839f0289b0d7fe7ab2e927fa9223c4.png"},62490:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/vCenterRootLevel-bd359c651022b677b3bd39b972b73404.png"},72164:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/vcenterReadOnlyRoleOnDatacenter-fca5c216160b1d883e324b8e922ef8fd.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(96540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);