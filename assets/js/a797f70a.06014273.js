"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[93152],{34760:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=s(17624),t=s(4552);const o={},l="VLAN Connectivity",r={id:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index",title:"VLAN Connectivity",description:"CloudShell provides dedicated VLAN services that enable the creation of Layer 2 connections between both physical and virtual endpoints (for example, physical servers and App-deployed virtual machines) by allocating a VLAN ID for each connection. VLAN-based connectivity supports both peer-to-peer and many-to-many connections.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity",slug:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md",tags:[],version:"2023.3",lastUpdatedAt:1715868987e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Patch Panels",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/patch-panels"},next:{title:"VLAN Connectivity - Points to Consider",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider"}},c={},d=[{value:"How CloudShell creates VLAN connections",id:"how-cloudshell-creates-vlan-connections",level:2},{value:"How CloudShell allocates VLAN IDs",id:"how-cloudshell-allocates-vlan-ids",level:2},{value:"Associate the VLAN service family to the domain categories",id:"associate-the-vlan-service-family-to-the-domain-categories",level:2},{value:"Customize the VLAN service models",id:"customize-the-vlan-service-models",level:2},{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.M)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vlan-connectivity",children:"VLAN Connectivity"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell provides dedicated VLAN services that enable the creation of Layer 2 connections between both physical and virtual endpoints (for example, physical servers and App-deployed virtual machines) by allocating a VLAN ID for each connection. VLAN-based connectivity supports both peer-to-peer and many-to-many connections."}),"\n",(0,i.jsx)(n.p,{children:"To use VLANs in CloudShell, the system administrator needs to perform the following configurations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure the organization's L2 switches are properly modeled in CloudShell, and include the appropriate resource connections, as explained in ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"}),"."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/#associate-the-vlan-service-family-to-the-domain-categories",children:"Associate the VLAN service family to the domain categories"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/#customize-the-vlan-service-models",children:"Customize the VLAN service models"})}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"note",children:(0,i.jsxs)(n.p,{children:["Before setting up your L2 resources and connections, review ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider",children:"VLAN Connectivity - Points to Consider"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["CloudShell supports connecting vCenter Apps to existing port groups. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/connect-resources-and-apps#connecting-vcenter-apps-to-an-existing-vlan-port-group",children:"Connecting vCenter Apps to an existing VLAN port group"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"how-cloudshell-creates-vlan-connections",children:"How CloudShell creates VLAN connections"}),"\n",(0,i.jsx)(n.p,{children:"When resolving a VLAN connection between sandbox resources/Apps, CloudShell assumes the devices can access one another on the L2 network. In other words, if the connection involves several interconnected switches, CloudShell only configures the edges of the layer 2 networks but doesn\u2019t affect what happens inside."}),"\n",(0,i.jsx)(n.p,{children:"For example, the diagram below illustrates an L2 network using three L2 switches. Switch 1 is connected to your physical devices, while switches 2 and 3 comprise the fabric."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(87660).c+"",width:"1678",height:"986"})}),"\n",(0,i.jsx)(n.p,{children:"When connecting any of the endpoints, whether its physical devices or virtual machines deployed in your vCenter server, CloudShell only cares about their immediate ports, and not what happens between them."}),"\n",(0,i.jsx)(n.h2,{id:"how-cloudshell-allocates-vlan-ids",children:"How CloudShell allocates VLAN IDs"}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell allocates VLAN IDs for routes using several parameters that are defined by the administrator in the VLAN service. The parameters are ",(0,i.jsx)(n.strong,{children:"Pool Name"}),", ",(0,i.jsx)(n.strong,{children:"VLAN ID"}),", ",(0,i.jsx)(n.strong,{children:"Allocation Ranges"}),", and ",(0,i.jsx)(n.strong,{children:"Isolation Level"}),", which are explained below."]}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell can check availability for a specific ",(0,i.jsx)(n.strong,{children:"VLAN ID"})," or find an available VLAN\xa0ID within the defined ",(0,i.jsx)(n.strong,{children:"Allocation Ranges"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When connecting a route that uses a VLAN service, CloudShell allocates the VLAN ID based on the availability of the VLAN ID in the pool specified, which is the domain by default. However, if the VLAN ID is ",(0,i.jsx)(n.strong,{children:"Shared"})," (defined in the ",(0,i.jsx)(n.strong,{children:"Isolation Level"})," attribute), it can be shared among multiple connections in the same sandbox and between sandboxes in the same domain/pool."]}),"\n",(0,i.jsx)(n.h2,{id:"associate-the-vlan-service-family-to-the-domain-categories",children:"Associate the VLAN service family to the domain categories"}),"\n",(0,i.jsxs)(n.p,{children:["To expose the VLAN services in the ",(0,i.jsx)(n.strong,{children:"Apps / Services"})," catalog of a specific domain, you must associate the service family to each desirable domain's service category. For information about creating service categories for domains, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/configuring-services#creating-a-service-catalog-category",children:"Creating a service catalog category"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To associate the VLAN services to the domain category:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As system administrator, log into ",(0,i.jsx)(n.strong,{children:"Resource Manager Client"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Admin"})," ribbon, click ",(0,i.jsx)(n.strong,{children:"Resource Families"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the service family containing the VLAN services. For example, ",(0,i.jsx)(n.strong,{children:"Virtual Network"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The family's ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Categories"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Select Category"})," dialog box is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the domain category. To select multiple categories, press the ",(0,i.jsx)(n.strong,{children:"[Shift]"})," key."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"customize-the-vlan-service-models",children:"Customize the VLAN service models"}),"\n",(0,i.jsxs)(n.p,{children:["This section explains how to customize the default settings of the VLAN service and control which settings can be changed by the user in the blueprint diagram. To learn how to add a VLAN service to a blueprint and set the service's attribute values, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/blueprints/creating-blueprints/services",children:"Services in Blueprints"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Additional VLAN services can be created. For example, you could set up multiple VLAN Auto services in the same domain, each with a different allocation range. Simply duplicate an existing VLAN service and edit the settings, as appropriate. Then, in the Scripts - Resource management page, add the new VLAN service model to the Vlan Service Connect All script."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VLAN Auto"}),": This preset automatically selects the VLAN ID for each endpoint connection out of a defined range according to availability in the domain's pool. ",(0,i.jsx)(n.strong,{children:"VLAN Auto"})," allocates VLAN IDs as exclusive by default. This means that the same VLAN ID cannot be used in two or more sandboxes in the same pool."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VLAN Auto"})," selects only one available VLAN ID, even if it is used in ",(0,i.jsx)(n.strong,{children:"Trunk"})," mode."]})}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Customizing a VLAN Auto preset"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To customize a VLAN Auto preset's attributes:"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, open the ",(0,i.jsx)(n.strong,{children:"Virtual Network"})," service family and click the ",(0,i.jsx)(n.strong,{children:"VLAN Auto"})," service model. Alternatively, copy the service model to customize a separate preset."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane is displayed to the right of the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Attributes"})," tab and configure the required attributes:"]}),"\n"]}),"\n"]}),(0,i.jsxs)("table",{children:[(0,i.jsxs)("thead",{children:[(0,i.jsx)("th",{children:"Attribute"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Access Mode"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Determines if the VLAN is configured as Access or Trunk. Default is Access."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Only Access mode is supported for OpenStack instances deployed in CloudShell sandboxes."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Allocation Ranges"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Determines the ranges of VLAN IDs that can be used. CloudShell will select the first available ID from the allocation ranges specified."}),(0,i.jsx)(n.p,{children:"You can specify one or more ranges, and specific VLAN IDs. Multiple values are separated by a comma. Default range is 2-4094 for VLAN and 16777216 for VXLAN."}),(0,i.jsx)(n.p,{children:'For example: "3, 100-220, 300-350"'}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"VXLAN ID ranges are only supported for OpenStack cloud provider. To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack."})}),(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"Modifying a range will not affect VLANs that are currently in use."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Isolation Level"}),(0,i.jsxs)("td",{children:["Determines if the allocated VLAN ID is ",(0,i.jsx)(n.strong,{children:"Exclusive"})," or ",(0,i.jsx)(n.strong,{children:"Shared"}),". Default is ",(0,i.jsx)(n.strong,{children:"Exclusive"}),"."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Virtual Network"}),(0,i.jsx)("td",{children:"Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VLAN ID"}),(0,i.jsxs)("td",{children:["(Optional) Enables you to specify the VLAN ID (or range if ",(0,i.jsx)(n.strong,{children:"Access Mode"})," is set to ",(0,i.jsx)(n.strong,{children:"Trunk"}),") to use. The VLAN ID must be included in the specified allocation range. However, if the VLAN ID is already allocated exclusively to someone else, an error will be displayed."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Pool Name"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"(Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites."}),(0,i.jsx)(n.p,{children:"If empty, the domain name is used."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A VLAN service can allocate the same VLAN in different domains if the pool name is not set."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"QinQ"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["(Only in ",(0,i.jsx)(n.strong,{children:"Access"})," mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is ",(0,i.jsx)(n.strong,{children:"False"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail."})})]})]})]})]}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Save your changes."}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VLAN Manual"}),": This preset enables the user to specify the VLAN ID to use. ",(0,i.jsx)(n.strong,{children:"VLAN Manual"})," allocates VLAN IDs as shared by default."]}),"\n"]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Customizing a VLAN Manual preset"})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To customize a VLAN Manual preset's attributes:"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, open the ",(0,i.jsx)(n.strong,{children:"Virtual Network"})," service family and click the ",(0,i.jsx)(n.strong,{children:"VLAN Manual"})," service model. Alternatively, copy the service model to customize a separate preset."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane is displayed to the right of the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Attributes"})," tab and configure the required attributes:"]}),"\n"]}),"\n"]}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"Access Mode"})}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["Determines if the VLAN is configured as ",(0,i.jsx)(n.strong,{children:"Access"})," or ",(0,i.jsx)(n.strong,{children:"Trunk"}),". Default is Access."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Only ",(0,i.jsx)(n.strong,{children:"Access"})," mode is supported for OpenStack instances deployed in CloudShell sandboxes."]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"Isolation Level"})}),(0,i.jsxs)("td",{children:["Determines if the allocated VLAN ID is ",(0,i.jsx)(n.strong,{children:"Exclusive"})," or ",(0,i.jsx)(n.strong,{children:"Shared"}),". Default is ",(0,i.jsx)(n.strong,{children:"Shared"}),"."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"Virtual Network"})}),(0,i.jsx)("td",{children:"Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"VLAN ID"})}),(0,i.jsxs)("td",{children:["(Mandatory) Enables you to specify the VLAN ID (or range if ",(0,i.jsx)(n.strong,{children:"Access"})," ",(0,i.jsx)(n.strong,{children:"Mode"})," is set to ",(0,i.jsx)(n.strong,{children:"Trunk"}),") to use. If the VLAN ID is already allocated exclusively to someone else, an error will be displayed."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"Pool Name"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"(Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites."}),(0,i.jsx)(n.p,{children:"If empty, the domain name is used."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A VLAN service can allocate the same VLAN in different domains if the pool name is not set."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"QinQ"})}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["(Only in ",(0,i.jsx)(n.strong,{children:"Access"})," mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is ",(0,i.jsx)(n.strong,{children:"False"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail."})})]})]})]})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Save your changes."}),"\n"]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"P2P VLAN Default"}),": This preset enables you to set the default VLAN settings to be used by peer-to-peer connections. By default, it allocates an exclusive VLAN ID for each endpoint connection out of a defined range according to availability in the domain's pool."]}),"\n"]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.strong,{children:"Customizing a P2P VLAN Default preset"})}),(0,i.jsxs)(n.p,{children:["The default VLAN service to be used for peer-to-peer connections can be defined by a ",(0,i.jsx)(n.strong,{children:"P2P VLAN Default"})," service model. Even if not configured, a peer-to-peer fallback is provided by CloudShell, as described in the note at the bottom of this section."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"P2P VLAN Default is an admin-level service that is only visible to domain and system administrators in CloudShell Portal."})}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To customize a P2P VLAN Default preset's attributes:"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer, open the ",(0,i.jsx)(n.strong,{children:"Virtual Network - Administrative"})," service family and click the ",(0,i.jsx)(n.strong,{children:"P2P VLAN Default"})," service model. Alternatively, copy the service model to customize a separate preset."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Parameters"})," pane is displayed to the right of the ",(0,i.jsx)(n.strong,{children:"Resource Families"})," explorer."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Attributes"})," tab and configure the required attributes:"]}),"\n"]}),"\n"]}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Access Mode"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["Determines if the VLAN is configured as ",(0,i.jsx)(n.strong,{children:"Access"})," or ",(0,i.jsx)(n.strong,{children:"Trunk"}),". Default is ",(0,i.jsx)(n.strong,{children:"Access"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Only ",(0,i.jsx)(n.strong,{children:"Access"})," mode is supported for OpenStack instances deployed in CloudShell sandboxes."]})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Allocation Ranges"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Determines the ranges of VLAN IDs that can be used. CloudShell will select the first available ID from the allocation ranges specified."}),(0,i.jsx)(n.p,{children:"You can specify one or more ranges, and specific VLAN IDs. Multiple values are separated by a comma. Default range is 2-4094 for VLAN and 16777216 for VXLAN."}),(0,i.jsx)(n.p,{children:'For example: "3, 100-220, 300-350"'}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"VXLAN ID ranges are only supported for OpenStack cloud provider. To use VXLAN IDs, the VLAN service must be connected to a virtual endpoint that supports VXLAN. VXLAN IDs are supported only for OpenStack."})}),(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"Modifying a range will not affect VLANs that are currently in use."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Isolation Level"}),(0,i.jsxs)("td",{children:["Determines if the allocated VLAN ID is ",(0,i.jsx)(n.strong,{children:"Exclusive"})," or ",(0,i.jsx)(n.strong,{children:"Shared"}),". Default is ",(0,i.jsx)(n.strong,{children:"Exclusive"}),"."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Virtual Network"}),(0,i.jsx)("td",{children:"Read only field that stores the allocated VLAN ID. This can be published for users to see but cannot be edited."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"VLAN ID"}),(0,i.jsxs)("td",{children:["(Optional) Enables you to specify the VLAN ID (or range if ",(0,i.jsx)(n.strong,{children:"Access"})," ",(0,i.jsx)(n.strong,{children:"Mode"})," is set to ",(0,i.jsx)(n.strong,{children:"Trunk"}),") to use. The VLAN ID must be included in the specified allocation range. However, if the VLAN ID is already allocated exclusively to someone else, an error will be displayed."]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Default VLAN"}),(0,i.jsx)("td",{children:"Defines the Virtual Network service as a default service to use for peer-to-peer connections."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Pool Name"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"(Optional) Enables you to specify a value to be used as the pool name. This is especially useful for CloudShell configurations that involve multiple domains in different geographic sites."}),(0,i.jsx)(n.p,{children:"If empty, the domain name is used."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A VLAN service can allocate the same VLAN in different domains if the pool name is not set."})})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"QinQ"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["(Only in ",(0,i.jsx)(n.strong,{children:"Access"})," mode) Sets the VLAN connection to be in QinQ mode. This requires the L2 switch device to support QinQ. Default is ",(0,i.jsx)(n.strong,{children:"False"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If QinQ mode is enabled on the VLAN service but cannot be established on the L2 switch (for example, because it is not supported on the switch or disabled on the port to be used), the connection will fail."})})]})]})]})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Save your changes."}),"\n"]}),(0,i.jsxs)(n.admonition,{title:"Notes",type:"note",children:[(0,i.jsx)(n.p,{children:"When a peer-to-peer connection is being resolved, CloudShell selects a VLAN to use according to the following logic:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CloudShell selects the P2P VLAN Default service that exists in the blueprint."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Otherwise, it uses a P2P VLAN Default service in a category associated to the user's domain."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Otherwise, it uses a P2P VLAN Default service in CloudShell."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Otherwise, the VLAN Auto preset's settings are used."}),"\n"]}),"\n"]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/vlan-connectivity--points-to-consider",children:"VLAN Connectivity - Points to Consider"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/intro/features/services",children:"Services Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/intro/features/apps-overview",children:"Apps Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/connections-legend",children:"Connections Legend"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/connect-resources-and-apps",children:"Connect Resources and Apps"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},87660:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/L2NetworkDiagram-e21411d3652e21b86f92a3526cd38366.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>l});var i=s(11504);const t={},o=i.createContext(t);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);