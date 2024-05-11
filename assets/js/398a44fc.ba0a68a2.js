"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[55468],{49124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=t(17624),o=t(4552);const i={sidebar_position:2},r="Patch Panels",c={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels",title:"Patch Panels",description:"Patch panels can be used in CloudShell as a replacement or in addition to L1 switches. They can represent real physical patch panels and store the connectivity information.",source:"@site/docs/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels.md",tags:[],version:"current",lastUpdatedAt:1715438982e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"L1 Switches",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches"},next:{title:"VLAN Connectivity",permalink:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/"}},l={},a=[{value:"Patch panel configuration",id:"patch-panel-configuration",level:3},{value:"Patch panels in CloudShell Portal",id:"patch-panels-in-cloudshell-portal",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"patch-panels",children:"Patch Panels"}),"\n",(0,s.jsx)(n.p,{children:"Patch panels can be used in CloudShell as a replacement or in addition to L1 switches. They can represent real physical patch panels and store the connectivity information."}),"\n",(0,s.jsx)(n.p,{children:"A route can be requested between two devices that are connected to the same patch panel, and be activated by the user or automation. A patch panel driver will not do any active operation like an L1 driver does, but automation can refer to the connectivity information for various use cases. Such automation can, for example, send an email to the sandbox owner or to the lab admin with patching instructions."}),"\n",(0,s.jsx)(n.h3,{id:"patch-panel-configuration",children:"Patch panel configuration"}),"\n",(0,s.jsx)(n.p,{children:"To create a patch panel resource, make sure to use the provided resource families (this can be imported from the system.xml or when importing any L1 configuration):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A patch panel family (PatchPanel)"}),"\n",(0,s.jsx)(n.li,{children:"A patch panel model (Generic PatchPanel)"}),"\n",(0,s.jsx)(n.li,{children:"A patch panel jack family (Panel Jack)"}),"\n",(0,s.jsx)(n.li,{children:"A patch panel jack model (Generic Jack)"}),"\n",(0,s.jsx)(n.li,{children:"A resource structure that defines the patch panel hierarchy"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To use the patch panel:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download the latest Additional Files zip file (from ",(0,s.jsx)(n.a,{href:"https://support.quali.com/hc/en-us/articles/231613287",children:"CloudShell Download Center - Earlier Releases"}),") to a temporary location."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Extract the zip file."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.strong,{children:"Resource Manager Client"}),", open the ",(0,s.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Import the ",(0,s.jsx)(n.code,{children:"system.xml"})," file from the extracted zip folder (located in the ",(0,s.jsx)(n.code,{children:"Lab Management"})," sub folder)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create a new resource using the patch panel family and model. Make sure the ",(0,s.jsx)(n.strong,{children:"Patch Panel Driver"})," is selected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Right-click the new resource and click ",(0,s.jsx)(n.strong,{children:"Configuration"})," from the context menu."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Resource Configuration"})," page is displayed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add the patch panel's ports:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Internal Resources"})," pane, right-click the patch panel resource and select ",(0,s.jsx)(n.strong,{children:"New > Resource"})," from the context menu. In the ",(0,s.jsx)(n.strong,{children:"New Resource"})," dialog box, enter the required information and click ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To define which devices are connected to the patch panel ports, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Save the changes."}),"\n",(0,s.jsx)(n.p,{children:"The patch panel can now be used for any route request, same as L1 routes."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"patch-panels-in-cloudshell-portal",children:"Patch panels in CloudShell Portal"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:'This section applies to both patch panels and L1 switches. For brevity, the term "L1 device" is used for both.'})}),"\n",(0,s.jsx)(n.p,{children:"When you reserve a blueprint that has resources with connectivity requirements, CloudShell will resolve those connections using the L1 device resource(s) you configured."}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["You can see an L1 device's resolved connections in real time in the ",(0,s.jsx)(n.strong,{children:"Resource Explorer"}),". Right-click the L1 device resource and select ",(0,s.jsx)(n.strong,{children:"Settings"}),". In the L1 resource's ",(0,s.jsx)(n.strong,{children:"Settings"})," tab, click the ",(0,s.jsx)(n.strong,{children:"Mappings"}),' button. For example, a switch that connects the "Router2" and "Router1" resources to each other:']}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(26072).c+"",width:"847",height:"186"})})]}),"\n",(0,s.jsxs)(n.p,{children:["CloudShell Portal also enables you to reserve specific blades/ports for the duration of the sandbox. You can either drag the L1 resource into the sandbox (its default is shared) and then use the ",(0,s.jsx)(n.strong,{children:"Add sub resources option"})," to add some ports to the diagram (this will allocate the ports exclusively to sandboxes based on this blueprint), or you can use the ",(0,s.jsx)(n.strong,{children:"Unshare"})," option on the L1 device resource itself to get exclusive access to the entire resource for that sandbox."]}),"\n",(0,s.jsxs)(n.p,{children:["To learn how to add sub-resources and unshare a resource, see ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/resources/configure-sub-resources",children:"Configure Sub-resources"})," and ",(0,s.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/resources/share-reserved-resources",children:"Share Reserved Resources"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},26072:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/SwitchMappings-7183aa87ba6e215a9cf3b9b0a8c8116c.png"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);