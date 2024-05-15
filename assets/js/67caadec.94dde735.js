"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[31772],{18296:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(17624),l=i(4552);const s={sidebar_position:4},r="CloudShell Linux VA Known limitations",o={id:"install-configure/linux-virtual-appliance/cs-linux-va-known-limitations",title:"CloudShell Linux VA Known limitations",description:"This section lists known limitations.",source:"@site/versioned_docs/version-2023.3/install-configure/linux-virtual-appliance/cs-linux-va-known-limitations.md",sourceDirName:"install-configure/linux-virtual-appliance",slug:"/install-configure/linux-virtual-appliance/cs-linux-va-known-limitations",permalink:"/cloudshell-help/install-configure/linux-virtual-appliance/cs-linux-va-known-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/install-configure/linux-virtual-appliance/cs-linux-va-known-limitations.md",tags:[],version:"2023.3",lastUpdatedAt:171581458e4,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start the Linux Execution Server",permalink:"/cloudshell-help/install-configure/linux-virtual-appliance/post-installation/start-the-es"},next:{title:"High Availability Deployment",permalink:"/cloudshell-help/install-configure/ha-deployment/"}},c={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cloudshell-linux-va-known-limitations",children:"CloudShell Linux VA Known limitations"}),"\n",(0,t.jsx)(n.p,{children:"This section lists known limitations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The time zone cannot be automatically detected when running CloudShell Authoring commands on execution servers over Linux. Therefore, when using TestShell API in a driver, add the ",(0,t.jsx)(n.code,{children:"SetServerConnectionTimeZone"})," function to the driver (after the Logon function). Alternatively, to set the time zone for all drivers on a specific execution server, set the ",(0,t.jsx)(n.code,{children:"ClientTimeZoneId"})," configuration key in the customer.config file of the Linux execution server\u2019s installation directory."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When using file system library, the file location syntax in use must match that used by the Linux directory structure."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The Excel file extensions that are not supported are listed in the following table:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method/Format"}),(0,t.jsx)(n.th,{children:"XLS"}),(0,t.jsx)(n.th,{children:"XLSX"}),(0,t.jsx)(n.th,{children:"XLSM"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Read"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Write"}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GetSheetNames"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"X"}),(0,t.jsx)(n.td,{children:"X"})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Drivers cannot contain any of the following components:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ranorex / GUI Automator"}),"\n",(0,t.jsx)(n.li,{children:"Command shell (PowerShell)"}),"\n",(0,t.jsx)(n.li,{children:"TestShell Spy"}),"\n",(0,t.jsx)(n.li,{children:"exe assets (that is, an exe called from an exe)"}),"\n",(0,t.jsx)(n.li,{children:"Web service asset"}),"\n",(0,t.jsx)(n.li,{children:"ActiveX asset"}),"\n",(0,t.jsx)(n.li,{children:"VISA tool"}),"\n",(0,t.jsx)(n.li,{children:"Cisco OS"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The following are not supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Virtualization (solution packs)"}),"\n",(0,t.jsx)(n.li,{children:"Layer 2 VLAN (solution packs)"}),"\n",(0,t.jsx)(n.li,{children:"SNMP library"}),"\n",(0,t.jsx)(n.li,{children:"JSON Editor convert to XML method"}),"\n",(0,t.jsx)(n.li,{children:"XML Editor validate with XSD method"}),"\n",(0,t.jsx)(n.li,{children:"VMware vSphere libraries"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>r});var t=i(11504);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);