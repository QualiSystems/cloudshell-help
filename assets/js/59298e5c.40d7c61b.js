"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[60812],{27268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=t(17624),i=t(4552);const r={sidebar_position:4},o="Configure Physical Network Connectivity Requirements",c={id:"portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req",title:"Configure Physical Network Connectivity Requirements",description:"It is possible to configure new connectivity requirements or modify the properties on existing ones using the Resource Connections - Inventory tab.",source:"@site/docs/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/config-physical-conn-req.md",tags:[],version:"current",lastUpdatedAt:171572335e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add Multiple Physical Network Connectivity Requirements",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/add-multiple-net-req"},next:{title:"Delete Physical Network Connectivity Requirements",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/delete-physical-conn-req"}},l={},a=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-physical-network-connectivity-requirements",children:"Configure Physical Network Connectivity Requirements"}),"\n",(0,s.jsxs)(n.p,{children:["It is possible to configure new connectivity requirements or modify the properties on existing ones using the ",(0,s.jsx)(n.strong,{children:"Resource Connections - Inventory"})," tab."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To configure a connectivity requirement:"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Resource Connections"})," dialog box, click the ",(0,s.jsx)(n.strong,{children:"Inventory"})," tab."]}),"\n",(0,s.jsxs)(n.p,{children:["To edit an existing connectivity requirement, in the blueprint or sandbox, click a connectivity requirement. From the context menu, select the ",(0,s.jsx)(n.strong,{children:"Inventory"})," option."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.strong,{children:"Inventory"})," tab, click a connectivity requirement."]}),"\n",(0,s.jsx)(n.p,{children:"The connectivity requirement's row expands."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can edit the following:"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("thead",{children:[(0,s.jsx)("th",{children:"Field"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Alias"}),(0,s.jsxs)("td",{children:["Click the ",(0,s.jsx)(n.strong,{children:"Alias"})," field and enter the description. The route's alias is displayed for the route in the diagram workspace."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Type"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["To define the data transfer direction between the resources, from the ",(0,s.jsx)(n.strong,{children:"Type"})," dropdown list, select the suitable option:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bi"})," - Supports bidirectional data flow"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Uni (--\x3e)"})," - Supports unidirectional data flow from the left resource to the right resource"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Uni (<--)"})," - Supports unidirectional data flow from the right resource to the left resource"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Status"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.admonition,{type:"danger-one-line",children:(0,s.jsx)(n.p,{children:"As this feature imposes many restrictions on how environments are resolved and cannot be used in conjunction with some other features such as abstract resources, it is strongly recommended to use shared routes only if it is absolutely required."})}),(0,s.jsx)(n.p,{children:"Shared routes enable you to dynamically create an L1 route and then share it across several sandboxes."}),(0,s.jsx)(n.p,{children:"When reserving a blueprint containing a shared route, it is initially resolved like any other route by the reservation process. However, any subsequent reservations of blueprints containing that same route will simply be associated with that active route. Note that CloudShell does not prevent users from disconnecting/reconnecting shared routes in their sandbox, even if other sandboxes are currently using it. When a sandbox containing a shared route ends, CloudShell checks if any other sandboxes are currently associated with the same shared route, and will only disconnect that route when the last remaining sandbox is no longer active. In effect, a shared route is started by the first sandbox requesting it and automatically disconnects when the last sandbox referencing it ends."}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Disconnecting a shared route or tearing down the route's sandbox does not affect other shared routes."})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Points to consider:"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Shared routes must use the same endpoints (resources and ports) and the ports must be defined as shared."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This feature is not supported for connection routes involving abstract resources."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Because multiple sandboxes can use the same route, there are additional restrictions on how it can be used and scheduled."}),"\n",(0,s.jsx)(n.p,{children:"For example, if a specific multi-hop route has already been resolved for a shared route it might conflict with an overlapping sandbox reservation using a different solution. These types of conflicts can be hard to troubleshoot, which again emphasizes the need to use this feature only when there are no alternatives."}),"\n"]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Max Hops"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"This value determines the maximum number of leaps, or hops, between L1 switches or patch panels in the route."}),(0,s.jsxs)(n.p,{children:["For example, if a route has 2 maximum hops defined but the only available connection solution is ",(0,s.jsx)(n.code,{children:"Source<->L1a<->L1b<->L1c<->L1d<->Target"}),", the route will fail because the maximum allowable number of hops is 2 while the route requires 3. The default is set in the ",(0,s.jsx)(n.code,{children:"DefaultMaxHopsForRoute"})," key."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Attribute"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)(n.p,{children:["Route attributes are attributes that have the ",(0,s.jsx)(n.strong,{children:"Link Configurations"})," rule enabled. These attributes reside on the L1 resource ports. Note that changing a route attribute's value updates the actual port on the L1 resource."]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In the blueprint, you can change port attributes in the route's ",(0,s.jsx)(n.strong,{children:"Resource Connections"})," dialog box or ",(0,s.jsx)(n.strong,{children:"Connection Properties"})," side pane, while in the sandbox, you need to use the side pane."]})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"To change a route attribute's value:"})}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do one of the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In the blueprint:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the route. From the context menu, select ",(0,s.jsx)(n.strong,{children:"Inventory"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Click the connection row and scroll down to the attribute."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the sandbox: Click the route. From the context menu, select ",(0,s.jsx)(n.strong,{children:"Properties"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the attribute's check box and specify the value."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Select the attribute's target. Options are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source"}),": Updates the attribute's value on the L1 resource port that is connected to the source endpoint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Target"}),": Updatse the attribute value on the L1 resource port that is connected to the target endpoint"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"All"}),": Updates all L1 resource ports in the route"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"})," (or ",(0,s.jsx)(n.strong,{children:"Activate"})," in the ",(0,s.jsx)(n.strong,{children:"Resource Connections"})," side pane to apply the changes to the L1 resource ports)."]}),"\n",(0,s.jsx)(n.p,{children:"When a route is connected in the sandbox, CloudShell saves the attribute values for the route and applies them to the route's selected resources. For example, if the Speed attribute is set to be 10G, upon connecting a route with such an attribute value, CloudShell will set this speed on the L1 switch."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"To see the attribute's value, from the Sandbox menu, select Show Physical Layer. Hover over the L1 resource and select Structure. In the Resource Structure side pane, click the connection row's arrow and select Attributes."})}),"\n"]}),"\n"]})]})]})]})]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/",children:"Physical Network Connectivity"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/view-phy-net-connectivity-req",children:"View Physical Network Connectivity Requirements"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/add-phy-net-req/",children:"Add Physical Network Connectivity Requirements"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var s=t(11504);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);