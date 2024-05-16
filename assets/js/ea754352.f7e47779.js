"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[53048],{88980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=t(17624),i=t(4552);const s={sidebar_position:4},c="Define the Resource Connections of the Switch or Patch Panel",r={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",title:"Define the Resource Connections of the Switch or Patch Panel",description:'This section applies to patch panels, power switches, L1 switches and L2 switches. For brevity, the term "switch resource" is used for all four.',source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"VLAN Connectivity - Points to Consider",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider"},next:{title:"Subnet Connectivity",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/"}},l={},h=[{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:'This section applies to patch panels, power switches, L1 switches and L2 switches. For brevity, the term "switch resource" is used for all four.'})}),"\n",(0,o.jsx)(n.p,{children:"Once the resource structure of the switch is updated, you can define which devices are connected to the switch's ports by associating the CloudShell resources of those devices to the switch resource(s)."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:'CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"To define resource connections:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.strong,{children:"Resource Manager Client"}),", open the ",(0,o.jsx)(n.strong,{children:"Resource Explorer"})," pane."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Right click the switch resource and click ",(0,o.jsx)(n.strong,{children:"Configuration"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Configuration"})," page is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Connections"})," button at the bottom of the page."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Resource connection"})," dialog box is displayed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Connect a resource's port to a different port in the switch resource by clicking each port's ",(0,o.jsx)(n.strong,{children:"Connected To"})," button, selecting the resource's ",(0,o.jsx)(n.strong,{children:"Family"})," and ",(0,o.jsx)(n.strong,{children:"Resource"}),", and selecting the port to connect."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For each connection, you can set the ",(0,o.jsx)(n.strong,{children:"Connection Weight"}),". To do so, double click the ",(0,o.jsx)(n.strong,{children:"Connection Weight"})," cell of the connection and specify the desired number. The default value is 10."]}),"\n",(0,o.jsx)(n.p,{children:'The connection weight ensures that specific connections take priority over others when an L1 route can be resolved through multiple possible connections. Specifically, the more weight a connection has, the "heavier" it becomes, and CloudShell\'s route resolution will be less likely to choose it, and the opposite is true as well - a connection with less weight will have a higher likelihood of being chosen for a route.'}),"\n",(0,o.jsx)(n.p,{children:"For example, in a hub and spoke formation that includes multiple switches, let's say DUT 1 resource normally uses Switch 1 and Switch 2 to connect to DUT 2. In cases where this route is jammed, you could have DUT 1 use the more expensive central switch instead by setting the sum of this route's connection weights to be lower than that of the normal route."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"OK"})," in the ",(0,o.jsx)(n.strong,{children:"Resource connection"})," dialog box."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Repeat this step to connect all relevant resources to the switch resource."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels",children:"Patch Panels"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches",children:"L1 Switches"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>c});var o=t(11504);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);