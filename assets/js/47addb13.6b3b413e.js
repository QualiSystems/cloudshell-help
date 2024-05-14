"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[42851],{16920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(17624),s=t(4552);const o={},r="Add Physical Network Connectivity Requirements",c={id:"portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/index",title:"Add Physical Network Connectivity Requirements",description:"After you add resources into the blueprint or sandbox, you can add their connectivity requirements by drawing connectivity lines between them. There are four connection types: Route, Cable, Tap, and Visual. They are explained in detail below. For app connections, see Add Virtual Network Connectivity Requirements.",source:"@site/docs/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/index.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/index.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"View Physical Network Connectivity Requirements",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/view-phy-net-connectivity-req"},next:{title:"Add Multiple Physical Network Connectivity Requirements",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/add-multiple-net-req"}},d={},l=[{value:"Related Topics",id:"related-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"add-physical-network-connectivity-requirements",children:"Add Physical Network Connectivity Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["After you add resources into the blueprint or sandbox, you can add their connectivity requirements by drawing connectivity lines between them. There are four connection types: Route, Cable, Tap, and Visual. They are explained in detail below. For app connections, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",children:"Add Virtual Network Connectivity Requirements"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Creating a route request in the blueprint doesn\u2019t guarantee that a possible solution (actual physical connectivity between the endpoints) exists."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To add resource connectivity requirements:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the diagram, hover over a resource and from the context menu, select the Create Connection option."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(25932).c+"",width:"290",height:"147"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Click a target resource to connect."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Resource Connections"})," dialog box is displayed, listing the ports in both the source and target resources that can be used to create the connectivity requirement."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(45779).c+"",width:"726",height:"482"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Connection Type"})," dropdown list, select the connection type."]}),"\n",(0,i.jsxs)(n.p,{children:["Each connection type is represented by a color code (see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/view-phy-net-connectivity-req",children:"View Physical Network Connectivity Requirements"}),"). For the different connection line types and icons used to indicate different connection variations, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/connections-legend",children:"Connections Legend"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Connection type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Route (Logical)"}),(0,i.jsx)(n.td,{children:"A route represents a logical connection between two endpoints that may or may not be connected directly and are represented on the diagram by lines. A route may be requested from a source resource that is connected indirectly to the target resource via an L1 switch or patch panel, it can also be used to represent a virtual network link between the two devices. Each of the inner connections between the source and target resource is a route segment. Route segments can be physical connections between two devices, or mapped connections within the switch or panel."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Cable (Physical)"}),(0,i.jsxs)(n.td,{children:["Represents a request for a physical connection between two endpoints. The cable indicates a direct connection between two resources hence includes only one segment. This requires communicating the cable request to the system administrator who needs to physically connect the resources with a cable. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," The following workflow is provided to address situations where you need to make a physical connection between resources in the blueprint. A different workflow may be used to suit your organization's needs.",(0,i.jsx)("br",{}),"i. Email the required cable connection to the system administrator. You can draw the connectivity lines between the resources in the blueprint and send them in a CSV file - see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/export-blueprints/export-diagram",children:"Exporting Diagrams"}),". ",(0,i.jsx)("br",{}),"ii. The system administrator connects the resources with a physical cable and notifies you that the connection is ready. ",(0,i.jsx)("br",{}),"iii. Reserve the blueprint and create the missing connection using the Cable (Physical) connection type.",(0,i.jsx)("br",{}),"iv. Connect the resources.",(0,i.jsx)("br",{})," Once a connection is established, the broken connection line becomes a solid line."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Tap (Logical)"}),(0,i.jsx)(n.td,{children:"Creates a type of route that represents a unidirectional connection from a tapped resource (source) to a monitoring device (target). The tap route is direction sensitive."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connector (Visual)"}),(0,i.jsxs)(n.td,{children:["This connection is visual only and can be created between any types of endpoints, connectable and non-connectable alike. This connection type does not have connected and disconnected states, just one default state. This type can be used for many different reasons. For example, to visualize some logical relation between endpoints in the diagram, or to pass information to the blueprint's orchestration or one of the resources regarding custom relations between resources. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This connection is also used for L2 and L3 connectivity (CloudShell determines this automatically based on the endpoints) - see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req",children:"Add Virtual Network Connectivity Requirements"}),"."]})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The available source and target port lists are updated according to the selected connection type."}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, use the filters located in the left filter bar to find the ports to use. The following filters are available:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Filter category"}),(0,i.jsx)(n.th,{children:"Options"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resources"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"In this workspace:"}),"\xa0Selecting this option will display only ports that are already part of the workspace"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Include already in use:"}),"\xa0Selecting this option will include ports that are currently being used by other connections"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Availability"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Show all:"}),"\xa0Will display all ports either they are available or not"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Available Now:"}),"\xa0Will display ports that are currently available ( for blueprint editing only)"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"For this sandbox:"}),"\xa0Will display ports that are available for the sandbox duration (for sandbox only)"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Connectivity"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Only disconnected:"}),"\xa0Will display ports that are not physically connected to any other device"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Only connected:"}),"\xa0Will display ports that are physically connected to another device"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Any status:"}),"\xa0Will display ports whether either they are physically connected or not"]})]})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Domain (available for blueprint editing only)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:[(0,i.jsx)(n.strong,{children:"Current domain:"}),"\xa0Deselecting this option will display ports from domains other than the current domain"]})})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["It is also possible to add custom filters based on attribute values. For example, filtering by protocol type. To configure an attribute to be shown as a filter in the ",(0,i.jsx)(n.strong,{children:"Resource Connections"})," dialog box, enable the ",(0,i.jsx)(n.strong,{children:"Displayed in Route Creation"})," rule in the attribute in ",(0,i.jsx)(n.strong,{children:"Resource Manager"}),". The user should be able to filter ports based on the attributes values."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To specify multiple routes between the two endpoints, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/add-connectivity/add-physical-network/add-phy-net-req/",children:"Add Multiple Physical Network Connectivity Requirements"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Select Source Port"})," pane, select the port of the source endpoint."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.strong,{children:"Select Target Port"})," pane, select the port of the target endpoint."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add"})," button to add the connectivity requirement. You can add more connectivity requirements between additional ports by repeating the same sequence."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"})," to add the new route."]}),"\n",(0,i.jsx)(n.p,{children:"An indication message is displayed. For example:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:t(14619).c+"",width:"400",height:"53"}),(0,i.jsx)(n.br,{}),"\n","When connecting the routes in a sandbox, CloudShell resolves the routes (establishes the required internal mappings in the L1 or Patch Panel resources along the route, or uses a Virtual Network if an App is included in the route)."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To check if the connectivity requirement you added can be solved, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/check-blueprint",children:"Check Blueprint"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/",children:"Physical Network Connectivity"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/physical-net-connectivity-prereq",children:"Physical Network Connectivity Prerequisites"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/view-phy-net-connectivity-req",children:"View Physical Network Connectivity Requirements"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/",children:"Add Multiple Physical Network Connectivity Requirements"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req",children:"Configure Physical Network Connectivity Requirements"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25932:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/CreateConnectionButton-f9a550667704ed747aff33312bbcb26a.png"},45779:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ResourceConnectionWindow-8c0d371d43914f4ee7896e53edeab6ca.png"},14619:(e,n,t)=>{t.d(n,{c:()=>i});const i="data:image/png;base64,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"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);