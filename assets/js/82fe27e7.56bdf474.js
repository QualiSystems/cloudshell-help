"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[56940],{84700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(17624),s=t(4552);const o={sidebar_position:4},r="Configure Virtual Network Connectivity Requirements",a={id:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req",title:"Configure Virtual Network Connectivity Requirements",description:"Blueprint designers can configure new Virtual Network connectivity requirements or modify the properties of existing ones.",source:"@site/versioned_docs/version-2023.3/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/config-virtual-conn-req.md",tags:[],version:"2023.3",lastUpdatedAt:1716305963e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Add Virtual Network Connectivity Requirements",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/add-virtual-net-connectivity-req"},next:{title:"Delete Virtual Network Connectivity Requirements",permalink:"/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/delete-virtual-conn-req"}},c={},d=[{value:"Related Topics",id:"related-topics",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-virtual-network-connectivity-requirements",children:"Configure Virtual Network Connectivity Requirements"}),"\n",(0,i.jsx)(n.p,{children:"Blueprint designers can configure new Virtual Network connectivity requirements or modify the properties of existing ones."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"To configure a connectivity requirement's properties:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["In the diagram, click a connectivity route. From the context menu, select ",(0,i.jsx)(n.strong,{children:"Properties"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Connection Properties"})," side pane is displayed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the arrow button in the upper right-hand corner of a connectivity requirement's row. From the context menu, select ",(0,i.jsx)(n.strong,{children:"Attributes"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(79460).c+"",width:"332",height:"287"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Connector Attributes"})," side pane is displayed. The side pane includes a diagram of the source and target endpoints and lists the connectivity requirement's attributes. Editable attributes have a ",(0,i.jsx)(n.img,{src:t(91484).c+"",width:"19",height:"21"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8612).c+"",width:"332",height:"441"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If an endpoint is an App or a deployed App and a vNIC is not specified, CloudShell will use the first available vNIC (in the holding network specified in the App's cloud provider resource) to make the connection."}),"\n",(0,i.jsxs)(n.p,{children:["You can specify the vNIC to use in the ",(0,i.jsx)(n.strong,{children:"Requested Source Vnic Name"})," and ",(0,i.jsx)(n.strong,{children:"Requested Target Vnic Name"})," attributes (the source and target endpoints are identified on the diagram at the top of the ",(0,i.jsx)(n.strong,{children:"Connector Attributes"}),' side pane). Use commas to specify multiple vNIC names. For private cloud Apps, you can specify the full name or index number of the vNIC (for example, "Network adapter 2" or simply \u201c2\u201d). For public cloud Apps, specify the device index number (for example, "2").']}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell also allows mapping sub-resources that reside on the deployed App, like blades and ports, to other endpoints, but this requires some configuration. For details, see the CloudShell Dev Guide's ",(0,i.jsx)(n.a,{href:"/devguide/reference/map-connections-using-app-sub-resources",children:"Mapping Connections using App Sub-resources"})," article."]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For AWS EC2 and Azure Apps that have multiple connections, the vNICs must be sequential. In other words, if there is a gap in the sequence, CloudShell will try to use the next vNIC in the sequence to fill the gap, but if that vNIC is missing, the sandbox will fail. For example, if your VM is connected to 4 subnets, you will be able to specify indexes 0 and 3 on specific connections, and CloudShell will use eth0 and eth3 on them. The other 2 connections that don't have a specified index will use eth1 and eth2 randomly. The same example will fail if either eth1 or eth2 are missing."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the App's connection fails, make sure the vNIC is available in the holding network specified in the App's cloud provider resource."}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/intro/features/apps-overview",children:"Apps Overview"})})]})}function p(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},79460:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ConnectorAttributesOpen-372bcd39d37341d956a8917589a4dfed.png"},8612:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ConnectorAttributesSidePane-fad5099686f5d21006df980632787315.png"},91484:(e,n,t)=>{t.d(n,{c:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAYAAACkCdXRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADbSURBVDhP7ZJNC0RAHIf3+38BIScHcXDiqFyRkxJxcpLiIsnrbxumts2Ol1J78RznaZ5m/jMv3MgTu85/Y9M0IcsyxHGMcRzp6sql2DzPqOsalmVBEAQkSULNyukYOUUYhpBlGbZtw3VdFEVB7crpWBAEEEURPM9D13X0fU/Nh8MY2eT7PiRJWq5mmiaqqqL2m90YGbbneeA4bgkZhoG2bandshtL0xSO40BV1WXoTdNQ8xtmjAxc0zQoioKyLDEMAzVsmLGu6xBFEfI83/wnFocPcIUndp0bY8AbiCMdg94YOEwAAAAASUVORK5CYII="},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);