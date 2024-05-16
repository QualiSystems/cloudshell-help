"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[53504],{10128:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(17624),r=s(4552);const i={sidebar_position:4},o="Inventory Drivers and Utilities",c={id:"admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities",title:"Inventory Drivers and Utilities",description:"This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see Shells Overview.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations",slug:"/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/inventory-drivers-and-utilities.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring Services",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/configuring-services"},next:{title:"Viewing Resource Live Status",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/viewing-resource-live-status"}},l={},d=[{value:"Autoloading resource configuration settings",id:"autoloading-resource-configuration-settings",level:2},{value:"Sync To/From device operations",id:"sync-tofrom-device-operations",level:3},{value:"Sync From Device for existing resources",id:"sync-from-device-for-existing-resources",level:4},{value:"Sync To Device for existing resources",id:"sync-to-device-for-existing-resources",level:4}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"inventory-drivers-and-utilities",children:"Inventory Drivers and Utilities"}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/intro/features/shells",children:"Shells Overview"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"autoloading-resource-configuration-settings",children:"Autoloading resource configuration settings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Auto Load"})," is a process that discovers and creates the internal resources of the root resource (for example, switch cards and ports). The Auto Load process automatically updates the configuration of the CloudShell resource to match the structure, mappings and attributes of the device, adding missing sub resources in the process."]}),"\n",(0,t.jsxs)(n.p,{children:["If the resource already exists in CloudShell, Auto Load will exclude any sub resources that are either missing from the device or have the wrong model. However, on existing L1 switch resources, Autoload removes the sub resources from the L1 switch resource instead (as explained in ",(0,t.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#sync-between-the-l1-switch-and-cloudshell",children:"Sync between the L1 switch and CloudShell"}),")."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Auto Load"})," must be performed on new L1 switches not yet inventoried in CloudShell."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To perform Auto Load on a new L1 switch:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a new L1 switch resource in ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click the switch resource and select ",(0,t.jsx)(n.strong,{children:"Configuration"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter the user name and password",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(25740).c+"",width:"575",height:"566"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If this is an existing L1 switch, in the ",(0,t.jsx)(n.strong,{children:"Internal Resources"})," pane, right-click the switch and select ",(0,t.jsx)(n.strong,{children:"Exclude"})," from the context menu.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(60812).c+"",width:"323",height:"439"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make sure the L1 shell's ",(0,t.jsx)(n.code,{children:".exe"})," file is unblocked."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"C:\\Program Files (x86)\\QualiSystems\\CloudShell\\Server\\Drivers"})," folder, right-click the L1 shell's ",(0,t.jsx)(n.code,{children:".exe"})," file and select ",(0,t.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you see an ",(0,t.jsx)(n.strong,{children:"Unblock"})," option, select it and click ",(0,t.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Auto Load"})," button at the bottom of the ",(0,t.jsx)(n.strong,{children:"Configuration"})," tab."]}),"\n",(0,t.jsx)(n.p,{children:"The Auto Load process completes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you excluded the resource before running Auto Load, right-click the switch in the ",(0,t.jsx)(n.strong,{children:"Internal Resources"})," pane and select ",(0,t.jsx)(n.strong,{children:"Include"}),' from the context menu. "Included" resources are available for reservation in a sandbox. Sandboxes are created in the CloudShell Portal (for details, see ',(0,t.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/creating-sandboxes",children:"Creating Sandboxes"}),")."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(78860).c+"",width:"346",height:"438"})}),"\n",(0,t.jsxs)(n.p,{children:["At the end of the Auto Load process, all relevant auto-detected internal resources (blades, ports) are displayed in the ",(0,t.jsx)(n.strong,{children:"Internal Resources"})," pane, under the root resource node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For L1 switches, if the ",(0,t.jsx)(n.strong,{children:"Autoload"})," process made changes to the resource structure, you may need to redefine any lost device connections, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches#define-the-resource-connections-of-the-l1-switch",children:"Define the resource connections of the L1 switch"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sync-tofrom-device-operations",children:"Sync To/From device operations"}),"\n",(0,t.jsxs)(n.p,{children:["You can re-synchronize a resource in the database without performing a full ",(0,t.jsx)(n.strong,{children:"Auto Load"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["While ",(0,t.jsx)(n.strong,{children:"Auto Load"})," updates the resource structure with the structure of the device, ",(0,t.jsx)(n.strong,{children:"Sync"})," does not remove resources that were added manually, but only updates existing ones."]}),"\n",(0,t.jsx)(n.p,{children:"Sync can be performed for a resource or any of its internal resources (e.g. whole chassis, a blade or a port)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sync From Device"})," updates the resource properties stored in ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"})," with the current device settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sync To Device"})," overrides device settings with the current state of the device as documented in ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"As synchronization requires the resource to be reserved, the process first initiates an active sandbox for the resource. If you do not reserve the resource before initiating a sync process, an automatic sandbox will be initiated."}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"note",children:(0,t.jsx)(n.p,{children:"Before running Sync To/From, make sure the CloudShell resource's structure does not include blades or ports that don't exist in the device."})}),"\n",(0,t.jsx)(n.h4,{id:"sync-from-device-for-existing-resources",children:"Sync From Device for existing resources"}),"\n",(0,t.jsxs)(n.p,{children:["This section explains how to update the resource properties stored in ",(0,t.jsx)(n.strong,{children:"Resource Manager Client"})," with the current device settings."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To update the resource properties stored in the Resource Manager with the current device settings:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click the switch from the ",(0,t.jsx)(n.strong,{children:"Resource Explorer"})," tree and select ",(0,t.jsx)(n.strong,{children:"Configuration"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To avoid affecting sandboxes that are using this resource, in the ",(0,t.jsx)(n.strong,{children:"Internal Resources"})," pane, right-click the resource and select ",(0,t.jsx)(n.strong,{children:"Exclude"})," from the context menu."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Sync From Device"})," button at the bottom."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When the Sync From Device process completes, in the ",(0,t.jsx)(n.strong,{children:"Internal Resources"})," pane, right-click the sub-resource and select ",(0,t.jsx)(n.strong,{children:"Include"})," from the context menu."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sync-to-device-for-existing-resources",children:"Sync To Device for existing resources"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"To override device settings with the current state of the device as documented in Resource Manager Client:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Right-click the switch from the ",(0,t.jsx)(n.strong,{children:"Resource Explorer"})," tree and select ",(0,t.jsx)(n.strong,{children:"Configuration"})," from the context menu."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Sync To Device"})," button at the bottom."]}),"\n",(0,t.jsx)(n.p,{children:"The L1 switch's attributes and mappings are updated according to the new data."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["To change the values of specific attributes on the physical device, in the resource's ",(0,t.jsx)(n.strong,{children:"Settings"})," tab, edit the attribute values and click ",(0,t.jsx)(n.strong,{children:"Activate"}),"."]})})]})}function a(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},60812:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/InternalResExclude-d763c945a6416dfee6377f865eb2dc00.png"},78860:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/InternalResInclude-af0bae97554868494ca3f3d6060603ef.png"},25740:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/Inven-Opers_9-c36f34c25361045769695d5f96f372c1.png"},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var t=s(11504);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);