"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[392],{12332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(17624),s=t(4552);const r={sidebar_position:3},o="Add Virtual Network Connectivity Requirements",c={id:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",title:"Add Virtual Network Connectivity Requirements",description:"Virtual Network connectivity is achieved using VLAN or Subnet services, which create virtual networks. VLAN-based virtual networks enable connections between private cloud Apps, such as vCenter and OpenStack, and support both peer-to-peer and many-to-many connections, and can be used to connect Apps and/or physical resources. Subnet-based networks are used to connect AWS EC2 or Azure Apps to each other. They do this by creating, for every subnet service in the sandbox, a dedicated subnet in the AWS EC2/Azure cloud that allows connecting multiple Apps of the same cloud provider to each other.",source:"@site/versioned_docs/version-2023.3/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req.md",tags:[],version:"2023.3",lastUpdatedAt:1715878866e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"View Virtual Network Connectivity Requirements",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/view-virtual-net-connectivity-req"},next:{title:"Configure Virtual Network Connectivity Requirements",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req"}},d={},a=[{value:"Adding peer-to-peer connectivity route",id:"adding-peer-to-peer-connectivity-route",level:2},{value:"Adding many-to-many connectivity",id:"adding-many-to-many-connectivity",level:2},{value:"Related Topics",id:"related-topics",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"add-virtual-network-connectivity-requirements",children:"Add Virtual Network Connectivity Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Virtual Network connectivity is achieved using VLAN or Subnet services, which create virtual networks. VLAN-based virtual networks enable connections between private cloud Apps, such as vCenter and OpenStack, and support both peer-to-peer and many-to-many connections, and can be used to connect Apps and/or physical resources. Subnet-based networks are used to connect AWS EC2 or Azure Apps to each other. They do this by creating, for every subnet service in the sandbox, a dedicated subnet in the AWS EC2/Azure cloud that allows connecting multiple Apps of the same cloud provider to each other."}),"\n",(0,i.jsx)(n.h2,{id:"adding-peer-to-peer-connectivity-route",children:"Adding peer-to-peer connectivity route"}),"\n",(0,i.jsx)(n.p,{children:"There are two peer-to-peer connectivity types, physical (L1-based) and network layer (L2 or subnet network-based). The network layer connectivity type uses a Connector route, while for physical layer connections, a Route connection type is used and CloudShell selects the L1 resources that are needed to resolve each connection."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"For P2P connections between two AWS EC2 or Azure Apps, CloudShell creates a subnet with 16 IPs."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add peer-to-peer connectivity:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the diagram, hover over an endpoint. From the context menu, select the Create Connection option."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Admins can customize the peer-to-peer connections in a sandbox by adding the ",(0,i.jsx)(n.strong,{children:"P2P VLAN Default"})," service to the diagram and modifying its settings as appropriate."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click a target App or resource to connect."}),"\n",(0,i.jsx)(n.p,{children:"An indication message is displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(14619).c+"",width:"400",height:"53"})}),"\n",(0,i.jsxs)(n.p,{children:["If at least one of the endpoints is an App, a ",(0,i.jsx)(n.strong,{children:"Connector"})," route is created. However, if both endpoints are physical resources but you want to connect them using an L2-based connection, in the ",(0,i.jsx)(n.strong,{children:"Resource Connections"})," dialog box, you will need to select ",(0,i.jsx)(n.strong,{children:"Connector"}),", click the source and target endpoint ports, click ",(0,i.jsx)(n.strong,{children:"Add"})," and then click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A Connector route between the endpoints is created."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Blueprint designers can optionally configure the connectivity requirement's settings."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-many-to-many-connectivity",children:"Adding many-to-many connectivity"}),"\n",(0,i.jsxs)(n.p,{children:["This method enables you to connect multiple endpoints to each other by linking them to the same Virtual Network service in the blueprint. In a sandbox, users can select to connect or disconnect specific routes that are connected to the VLAN service or to connect all routes from the VLAN service's ",(0,i.jsx)(n.strong,{children:"Commands"})," pane."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add many-to-many connectivity:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the diagram, add the appropriate VLAN or Subnet service to the canvas."}),"\n",(0,i.jsx)(n.p,{children:"Use the VLAN Auto service to have CloudShell automatically select the VLAN ID, use the VLAN Manual service to specify a particular VLAN ID\xa0to use, or use the Subnet service to create a new subnet in the AWS EC2 or Azure cloud, and connect AWS EC2/Azure Apps to it."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Before you add a Subnet service, read through ",(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/subnet-connectivity--points-to-consider",children:"Subnet Connectivity - Points to Consider"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.strong,{children:"Add Service"})," dialog box is displayed, configure the parameters available for the service you added. Depending on the service, certain parameters may be read only."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(73196).c+"",width:"602",height:"338"})}),"\n",(0,i.jsx)(n.p,{children:"The parameters are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Alias"}),": display name for the service in the diagram"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Access Mode"}),": (For VLAN services) Interface VLAN mode"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Virtual Network"}),": (For VLAN services) (Read only) Allocated virtual network. The value is displayed only after the virtual network is selected and activated."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VLAN ID"}),": (For VLAN services) VLAN ID to use for the connection"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Public"}),": (For Subnet services) Determine if the Subnet is connected to the internet."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Subnet Size"}),": (For Subnet services) Select the subnet size of this service (block size of the subnet CIDR). Possible values: 16, 32, 64, 128 (corresponding to block sizes of /28, /27, /26 and /25)."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Since each cloud provider has a few IPs in each subnet reserved for networking services, the actual number of Apps that can be added to a subnet is lower than the number set in the subnet size attribute. Currently in AWS, 5 IPs are reserved."}),"\n",(0,i.jsx)(n.li,{children:"When adding multiple VLAN or subnet services, keep in mind the total maximum number of IPs per sandbox is 255."}),"\n"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Add"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Drag an App or resource to the canvas."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Hover over it. From the context menu, select the Create Connection option."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click the service."}),"\n",(0,i.jsx)(n.p,{children:"An indication message is displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(14619).c+"",width:"400",height:"53"})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"Connector"})," route between the endpoints is created."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(39792).c+"",width:"690",height:"116"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Repeat to link additional Apps or resources to the service."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Blueprint designers can optionally configure the connectivity requirement's settings for the endpoints."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/",children:"VLAN Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/",children:"Subnet Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/intro/features/services",children:"Services Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/intro/features/apps-overview",children:"Apps Overview"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},39792:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Visual-Connection-VLAN-App-315793d1010af4ae88b4ce02d833645f.png"},14619:(e,n,t)=>{t.d(n,{c:()=>i});const i="data:image/png;base64,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"},73196:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/VLAN-Add-Service-dialog-b2283269a57abf67aa4ecbe09ffe5890.png"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var i=t(11504);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);