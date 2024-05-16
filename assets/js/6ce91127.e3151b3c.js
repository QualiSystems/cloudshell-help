"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[73260],{98564:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(17624),s=t(4552);const o={sidebar_position:6},r="Connectivity Overview",a={id:"intro/features/connectivity",title:"Connectivity Overview",description:"Blueprints and sandboxes can contain different elements, such as physical and virtual devices as well as VMs on a public or private cloud. A big part of the sandbox is connectivity between these different elements, so after you add elements into your blueprint or sandbox, you can set up their connectivity requirements using connection lines and network services.",source:"@site/versioned_docs/version-2023.3/intro/features/connectivity.md",sourceDirName:"intro/features",slug:"/intro/features/connectivity",permalink:"/cloudshell-help/intro/features/connectivity",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/intro/features/connectivity.md",tags:[],version:"2023.3",lastUpdatedAt:1715881303e3,sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Configuration Management Overview",permalink:"/cloudshell-help/intro/features/Configuration-Management"},next:{title:"Email Notifications Overview",permalink:"/cloudshell-help/intro/features/email-notifications"}},l={},c=[{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"connectivity-overview",children:"Connectivity Overview"}),"\n",(0,i.jsx)(n.p,{children:"Blueprints and sandboxes can contain different elements, such as physical and virtual devices as well as VMs on a public or private cloud. A big part of the sandbox is connectivity between these different elements, so after you add elements into your blueprint or sandbox, you can set up their connectivity requirements using connection lines and network services."}),"\n",(0,i.jsx)(n.p,{children:"The following connectivity layers are supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 networks between physical devices using direct physical route connections between the endpoints. Real-time mapping is supported and can be displayed, showing the L1 resource(s) and ports being used for the connections in the sandbox."}),"\n",(0,i.jsxs)(n.li,{children:["L2 (VLAN) networks between physical or virtual devices/VMs using a ",(0,i.jsx)(n.strong,{children:"VLAN"})," service."]}),"\n",(0,i.jsxs)(n.li,{children:["L3 (subnet) networks for virtual elements using a ",(0,i.jsx)(n.strong,{children:"Subnet"})," service. For example, VMs on a public cloud such as AWS or Azure."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Notes",type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VLAN and Subnet networks support many-to-many connections."}),"\n",(0,i.jsx)(n.li,{children:'CloudShell cannot create connectivity paths involving both L1 and L2 networking devices. Only pure L1 or pure L2 paths are supported. For example, "DUT1 - L1 - L2 - DUT2" path is not supported.'}),"\n",(0,i.jsxs)(n.li,{children:["For virtual machines, CloudShell provides additional networking customization options including port rules, security groups and more. For details, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/admin/cloudshell-manage-dashboard/manage-app-templates/app-template/adding-app-template",children:"Adding App templates"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see ",(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/add-physical-network/",children:"Physical Network Connectivity"})," and ",(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/add-connectivity/add-virtual-network/",children:"Virtual Network Connectivity"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/cloudshell-help/portal/sandboxes/sandbox-workspace/connect-resources-and-apps",children:"Connect Resources and Apps"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/..",children:"Connectivity Control"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);