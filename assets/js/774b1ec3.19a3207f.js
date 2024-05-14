"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[74572],{61556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(17624),o=s(4552);const i={sidebar_position:5},a="Configuration Management Overview",r={id:"intro/features/Configuration-Management",title:"Configuration Management Overview",description:"CloudShell supports the execution of Configuration Management scripts or Ansible playbooks on deployed Apps and resources in the sandbox. Scripts of type sh, bash and PowerShell, and Ansible playbooks are supported.",source:"@site/docs/intro/features/Configuration-Management.md",sourceDirName:"intro/features",slug:"/intro/features/Configuration-Management",permalink:"/cloudshell-help/next/intro/features/Configuration-Management",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/features/Configuration-Management.md",tags:[],version:"current",lastUpdatedAt:1715729826e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Blueprint Approval Policy",permalink:"/cloudshell-help/next/intro/features/blueprint-approval-policy"},next:{title:"Connectivity Overview",permalink:"/cloudshell-help/next/intro/features/connectivity"}},l={},d=[{value:"User flows",id:"user-flows",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How Configuration Management works",id:"how-configuration-management-works",level:2},{value:"Related Topics",id:"related-topics",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configuration-management-overview",children:"Configuration Management Overview"}),"\n",(0,t.jsx)(n.p,{children:"CloudShell supports the execution of Configuration Management scripts or Ansible playbooks on deployed Apps and resources in the sandbox. Scripts of type sh, bash and PowerShell, and Ansible playbooks are supported."}),"\n",(0,t.jsx)(n.p,{children:"There is a difference in the way you set up and use App and resource configuration management in CloudShell:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["App configuration management scripts and playbooks are defined on the App template itself, run during the App deployment (automatically as part of the sandbox setup, and manually via Deploy App command and using the Rerun Configuration Management command on deployed Apps that support rerunning configuration management), and support the sequential execution of multiple scripts or playbooks on the same deployed App. For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/manage-app-templates/#adding-app-templates",children:"Adding App templates"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Resource configuration management scripts and playbooks are imported into CloudShell using the Manage > Assets page, attached to resource models or shells, and are manually executed in the sandbox as commands on the resource. For details, see ",(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"user-flows",children:"User flows"}),"\n",(0,t.jsx)(n.p,{children:"App configuration management:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Admin/domain admin: Creates App template > defines Configuration Management > optionally allows sandbox end-users to rerun Configuration Management on deployed Apps"}),"\n",(0,t.jsx)(n.li,{children:"Blueprint designer: Adds App to the blueprint"}),"\n",(0,t.jsx)(n.li,{children:"Sandbox end-user: Starts sandbox > can rerun Configuration Management for Apps that support the option"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Resource configuration management:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Admin/domain admin: Imports shell > creates/discovers resource into inventory > adds Configuration Management asset to CloudShell > associates CM asset with resource model/shell"}),"\n",(0,t.jsx)(n.li,{children:"Blueprint designer: Adds resource to blueprint > can edit setup orchestration to call the Configuration Management asset"}),"\n",(0,t.jsx)(n.li,{children:"Sandbox end user: Can run Configuration Management asset from the resource in the sandbox"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Configuration Management scripts and playbooks use the same settings for Apps and for resources."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Apps:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In CloudShell Portal, open the Manage > Apps page."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create or open an existing App template."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the App's Configuration Management screen, define the scripts/playbooks to run."}),"\n",(0,t.jsx)(n.p,{children:"The scripts/playbooks run in their order of appearance during the App's deployment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["For resources:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In CloudShell Portal, open the Manage > Assets > Resource page."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the script/playbook as a Repository Asset."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure its settings."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Attach the script/playbook to the appropriate resource models/shells."}),"\n",(0,t.jsx)(n.p,{children:"The script/playbook is displayed as a command in the resource's Resource Commands pane."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.strong,{children:"ExecuteCommand"})," and ",(0,t.jsx)(n.strong,{children:"EnqueueCommand"})," APIs to call resource configuration management as part of setup orchestration (using a customized setup script)."]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-configuration-management-works",children:"How Configuration Management works"}),"\n",(0,t.jsx)(n.p,{children:"When configuration management execution called, the following occurs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For custom scripts: CloudShell sends the script's execution to the Execution Server, using SSH/WinRM to connect to the target device for configuration."}),"\n",(0,t.jsxs)(n.li,{children:["For Ansible playbooks:","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"CloudShell sends the execution to the Linux Execution Server using the Execution Server Selector attribute defined in the Ansible shell (Resource Manager Client > Resource Families > Configuration Services > Ansible Configuration)."}),"\n",(0,t.jsx)(n.li,{children:"The Execution Server invokes the Ansible that is installed locally on the Linux Execution Server with the inventory of the target resource. The resource username and password should be passed to the inventory file as well for authentication to the target machine."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(72452).c+"",width:"591",height:"90"})}),"\n",(0,t.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/admin/cloudshell-manage-dashboard/managing-automation/managing-assets",children:"Managing Assets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/run-commands",children:"Run Commands"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/sandboxes/sandbox-workspace/apps/run-app-commands",children:"Run App Commands"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/portal/blueprints/creating-blueprints/import-package",children:"Import a Blueprint Package into CloudShell"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../portal/blueprints/creating-blueprints/export-blueprints",children:"Export Blueprint Packages and Configurations"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cloudshell-help/next/devguide/enable-winrm-on-win-vm-for-cfg-mng",children:"Enable WinRM on Windows VMs to Support Configuration Management"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},72452:(e,n,s)=>{s.d(n,{c:()=>t});const t=s.p+"assets/images/ConfigurationManagementExecutionDiagram_591x90-72e65f24317f2fd28df2e4daaf0c8fe0.png"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>a});var t=s(11504);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);