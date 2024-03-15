"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[41352],{68828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(17624),o=t(4552);const i={},r="Add Connectivity",l={id:"portal/sandboxes/sandbox-workspace/add-connectivity/index",title:"Add Connectivity",description:"Blueprints and sandboxes can contain different elements, such as physical and virtual devices as well as VMs on a public or private cloud. A big part of the sandbox is connectivity between these different elements, so after you add elements into your blueprint or sandbox, you can set up their connectivity requirements using connection lines and network services.",source:"@site/docs/portal/sandboxes/sandbox-workspace/add-connectivity/index.md",sourceDirName:"portal/sandboxes/sandbox-workspace/add-connectivity",slug:"/portal/sandboxes/sandbox-workspace/add-connectivity/",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/portal/sandboxes/sandbox-workspace/add-connectivity/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Labels",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/labels"},next:{title:"Physical Network Connectivity",permalink:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/"}},a={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add-connectivity",children:"Add Connectivity"}),"\n",(0,s.jsx)(n.p,{children:"Blueprints and sandboxes can contain different elements, such as physical and virtual devices as well as VMs on a public or private cloud. A big part of the sandbox is connectivity between these different elements, so after you add elements into your blueprint or sandbox, you can set up their connectivity requirements using connection lines and network services."}),"\n",(0,s.jsx)(n.p,{children:"The following connectivity layers are supported:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L1 networks between physical devices using direct physical route connections between the endpoints. Real-time mapping is supported and can be displayed, showing the L1 resource(s) and ports being used for the connections in the sandbox."}),"\n",(0,s.jsxs)(n.li,{children:["L2 (VLAN) networks between physical or virtual devices/VMs using a ",(0,s.jsx)(n.strong,{children:"VLAN"})," service."]}),"\n",(0,s.jsxs)(n.li,{children:["L3 (subnet) networks for virtual elements using a ",(0,s.jsx)(n.strong,{children:"Subnet"})," service. For example, VMs on a public cloud such as AWS or Azure."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VLAN and Subnet networks support many-to-many connections."}),"\n",(0,s.jsx)(n.li,{children:'CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.'}),"\n",(0,s.jsxs)(n.li,{children:["For virtual machines, CloudShell provides additional networking customization options including port rules, security groups and more. For details, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding",children:"Adding App templates"}),"."]}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Rsc-Cnct/Phys-Ntwrk-Cntnr.htm",children:"Physical Network Connectivity"})," and ",(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Cnct/Vir-Ntwrk-Cnct-Cntnr.htm",children:"Virtual Network Connectivity"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Rsrc-Cnct.htm",children:"Connect Resources and Apps"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl.htm",children:"Connectivity Control"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);