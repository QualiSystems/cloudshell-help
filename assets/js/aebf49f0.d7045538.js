"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[17584],{39076:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(17624),i=o(4552);const r={sidebar_position:1},s="Power Management",l={id:"admin/setting-up-cloudshell/inventory-operations/connected-commands/power-management",title:"Power Management",description:"CloudShell provides its users the ability to control the power to devices in the lab through different power control devices such as PDUs (Power Distribution Units) which can be controlled remotely. This way, users of a particular resource in CloudShell Portal can use the power switch's commands from that target resource even though the commands reside in the power switch's driver. Such commands are called connected commands. For additional information, see Creating Connected Commands.",source:"@site/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connected-commands/power-management.md",sourceDirName:"admin/setting-up-cloudshell/inventory-operations/connected-commands",slug:"/admin/setting-up-cloudshell/inventory-operations/connected-commands/power-management",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connected-commands/power-management",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/versioned_docs/version-2023.3/admin/setting-up-cloudshell/inventory-operations/connected-commands/power-management.md",tags:[],version:"2023.3",lastUpdatedAt:1715885653e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Connected Commands",permalink:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connected-commands/"},next:{title:"JIRA Integration with CloudShell",permalink:"/cloudshell-help/admin/setting-up-cloudshell/jira-integration-with-cloudshell"}},a={},c=[{value:"How CloudShell power management works",id:"how-cloudshell-power-management-works",level:2},{value:"Setting up Power Switches for power management operations",id:"setting-up-power-switches-for-power-management-operations",level:2},{value:"Related Topics",id:"related-topics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"power-management",children:"Power Management"}),"\n",(0,t.jsx)(n.p,{children:"CloudShell provides its users the ability to control the power to devices in the lab through different power control devices such as PDUs (Power Distribution Units) which can be controlled remotely. This way, users of a particular resource in CloudShell Portal can use the power switch's commands from that target resource even though the commands reside in the power switch's driver. Such commands are called connected commands. For additional information, see Creating Connected Commands."}),"\n",(0,t.jsx)(n.p,{children:"By defining the required parameters in the system and associating drivers to the devices, users and administrators can turn devices on and off either manually through the UI or through automated procedures."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["It is possible to run power management commands via ",(0,t.jsx)(n.a,{href:"/cloudshell-help/api-guide/shell-dev-blueprint-design-api/cs-automation-api",children:"CloudShell Automation API"})," and ",(0,t.jsx)(n.a,{href:"/cloudshell-help/api-guide/shell-dev-blueprint-design-api/testshell-api",children:"TestShell API"})," either by executing the ",(0,t.jsx)(n.code,{children:"ExecuteResourceConnected"})," command method on the connected resource in the sandbox or by running the following dedicated API methods: ",(0,t.jsx)(n.code,{children:"PowerCycleResource"}),", ",(0,t.jsx)(n.code,{children:"PowerOffResource"})," and ",(0,t.jsx)(n.code,{children:"PowerOnResource"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"how-cloudshell-power-management-works",children:"How CloudShell power management works"}),"\n",(0,t.jsx)(n.p,{children:"CloudShell allows users to control the power management of resources, using power switches."}),"\n",(0,t.jsx)(n.p,{children:"To enable control on a resource's power management, the resource has to be connected to a power controller through its power port(s)."}),"\n",(0,t.jsx)(n.p,{children:"Once the resource is connected to a power controller, which is based on the PDU Shell, the resource can be switched on or off using the power management connected commands provided by the power switch. The resource must be exclusively reserved to activate power management commands."}),"\n",(0,t.jsx)(n.p,{children:"The PDU Shells are used by CloudShell to interact with the power switches. The interaction method can vary according to the device capabilities. Some examples include; SNMP, Telnet and SSH. For the Shell to operate correctly through built-in CloudShell UI the Shell needs to be based on the PDU Shell template."}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-power-switches-for-power-management-operations",children:"Setting up Power Switches for power management operations"}),"\n",(0,t.jsxs)(n.p,{children:["Like with other Shells, first try finding a suitable Shell in ",(0,t.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"}),". If you find one, import it into CloudShell, create a resource from it, and define the physical connections in CloudShell (just make sure to make a direct connection between the resources - if you have a switch or router resource in between, the connection will fail). Once defined, connected resources will have the power commands available in active sandboxes."]}),"\n",(0,t.jsxs)(n.p,{children:["If we don\u2019t have what you\u2019re looking for, create a new shell using the PDU Shell template and implement the required capabilities. For additional information, see the CloudShell Dev Guide's ",(0,t.jsx)(n.a,{href:"/cloudshell-help/devguide/developing-shells/common-driver-recipes#defining-a-connected-command-which-runs-on-another-resource",children:"Defining a connected command (which runs on another resource)"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel",children:"Define the Resource Connections of the Switch or Patch Panel"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>l,M:()=>s});var t=o(11504);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);