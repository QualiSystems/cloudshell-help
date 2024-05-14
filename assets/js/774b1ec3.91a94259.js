"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[74572],{61556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(17624),o=t(4552);const s={sidebar_position:4},r="Configuration Management Overview",a={id:"intro/features/Configuration-Management",title:"Configuration Management Overview",description:"CloudShell supports the execution of Configuration Management scripts or Ansible playbooks on deployed Apps and resources in the sandbox. Scripts of type sh, bash and PowerShell, and Ansible playbooks are supported.",source:"@site/docs/intro/features/Configuration-Management.md",sourceDirName:"intro/features",slug:"/intro/features/Configuration-Management",permalink:"/cloudshell-help/next/intro/features/Configuration-Management",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/features/Configuration-Management.md",tags:[],version:"current",lastUpdatedAt:1715645694e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Apps Overview",permalink:"/cloudshell-help/next/intro/features/apps-overview"},next:{title:"Connectivity Overview",permalink:"/cloudshell-help/next/intro/features/connectivity"}},l={},d=[{value:"User flows",id:"user-flows",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How Configuration Management works",id:"how-configuration-management-works",level:2},{value:"Related Topics",id:"related-topics",level:2}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuration-management-overview",children:"Configuration Management Overview"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell supports the execution of Configuration Management scripts or Ansible playbooks on deployed Apps and resources in the sandbox. Scripts of type sh, bash and PowerShell, and Ansible playbooks are supported."}),"\n",(0,i.jsx)(n.p,{children:"There is a difference in the way you set up and use App and resource configuration management in CloudShell:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["App configuration management scripts and playbooks are defined on the App template itself, run during the App deployment (automatically as part of the sandbox setup, and manually via Deploy App command and using the Rerun Configuration Management command on deployed Apps that support rerunning configuration management), and support the sequential execution of multiple scripts or playbooks on the same deployed App. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding",children:"Adding App templates"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Resource configuration management scripts and playbooks are imported into CloudShell using the Manage > Assets page, attached to resource models or shells, and are manually executed in the sandbox as commands on the resource. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm",children:"Managing Assets"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"user-flows",children:"User flows"}),"\n",(0,i.jsx)(n.p,{children:"App configuration management:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin/domain admin: Creates App template > defines Configuration Management > optionally allows sandbox end-users to rerun Configuration Management on deployed Apps"}),"\n",(0,i.jsx)(n.li,{children:"Blueprint designer: Adds App to the blueprint"}),"\n",(0,i.jsx)(n.li,{children:"Sandbox end-user: Starts sandbox > can rerun Configuration Management for Apps that support the option"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Resource configuration management:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Admin/domain admin: Imports shell > creates/discovers resource into inventory > adds Configuration Management asset to CloudShell > associates CM asset with resource model/shell"}),"\n",(0,i.jsx)(n.li,{children:"Blueprint designer: Adds resource to blueprint > can edit setup orchestration to call the Configuration Management asset"}),"\n",(0,i.jsx)(n.li,{children:"Sandbox end user: Can run Configuration Management asset from the resource in the sandbox"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Configuration Management scripts and playbooks use the same settings for Apps and for resources."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For Apps:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In CloudShell Portal, open the Manage > Apps page."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create or open an existing App template."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the App's Configuration Management screen, define the scripts/playbooks to run."}),"\n",(0,i.jsx)(n.p,{children:"The scripts/playbooks run in their order of appearance during the App's deployment."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For resources:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In CloudShell Portal, open the Manage > Assets > Resource page."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import the script/playbook as a Repository Asset."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure its settings."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Attach the script/playbook to the appropriate resource models/shells."}),"\n",(0,i.jsx)(n.p,{children:"The script/playbook is displayed as a command in the resource's Resource Commands pane."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.strong,{children:"ExecuteCommand"})," and ",(0,i.jsx)(n.strong,{children:"EnqueueCommand"})," APIs to call resource configuration management as part of setup orchestration (using a customized setup script)."]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-configuration-management-works",children:"How Configuration Management works"}),"\n",(0,i.jsx)(n.p,{children:"When configuration management execution called, the following occurs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For custom scripts: CloudShell sends the script's execution to the Execution Server, using SSH/WinRM to connect to the target device for configuration."}),"\n",(0,i.jsxs)(n.li,{children:["For Ansible playbooks:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"CloudShell sends the execution to the Linux Execution Server using the Execution Server Selector attribute defined in the Ansible shell (Resource Manager Client > Resource Families > Configuration Services > Ansible Configuration)."}),"\n",(0,i.jsx)(n.li,{children:"The Execution Server invokes the Ansible that is installed locally on the Linux Execution Server with the inventory of the target resource. The resource username and password should be passed to the inventory file as well for authentication to the target machine."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(72452).c+"",width:"591",height:"90"})}),"\n",(0,i.jsx)(n.h2,{id:"related-topics",children:"Related Topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm",children:"Managing Assets"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Run-Cmd.htm",children:"Run Commands"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm",children:"Run App Commands"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Imprt.htm",children:"Import a Blueprint Package into CloudShell"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Exprt-Pckgs-Cnfgs.htm",children:"Export Blueprint Packages and Configurations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-WinRM-for-CM.htm",children:"Enable WinRM on Windows VMs to Support Configuration Management"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},72452:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ConfigurationManagementExecutionDiagram_591x90-72e65f24317f2fd28df2e4daaf0c8fe0.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var i=t(11504);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);