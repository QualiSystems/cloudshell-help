"use strict";(self.webpackChunkcloudshell_help=self.webpackChunkcloudshell_help||[]).push([[6768],{46416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(17624),l=t(4552);const s={sidebar_position:2},r="CloudShell Terminology",o={id:"intro/Term",title:"CloudShell Terminology",description:"This article defines the following terms:",source:"@site/docs/intro/Term.md",sourceDirName:"intro",slug:"/intro/Term",permalink:"/cloudshell-help/next/intro/Term",draft:!1,unlisted:!1,editUrl:"https://github.com/QualiSystems/cloudshell-help/tree/main/docs/intro/Term.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CloudShell Overview",permalink:"/cloudshell-help/next/intro/Abt-CS"},next:{title:"CloudShell - Typical Use Cases",permalink:"/cloudshell-help/next/intro/CS-Use-Cases"}},a={},d=[{value:"Abstract resource",id:"abstract-resource",level:3},{value:"Admin",id:"admin",level:3},{value:"App",id:"app",level:3},{value:"Automation",id:"automation",level:3},{value:"Blueprint",id:"blueprint",level:3},{value:"Blueprint designer",id:"blueprint-designer",level:3},{value:"Categories",id:"categories",level:3},{value:"Cloud provider",id:"cloud-provider",level:3},{value:"CloudShell Portal",id:"cloudshell-portal",level:3},{value:"Commands",id:"commands",level:3},{value:"Configuration Management",id:"configuration-management",level:3},{value:"Connectivity",id:"connectivity",level:3},{value:"Domain",id:"domain",level:3},{value:"Email Notification",id:"email-notification",level:3},{value:"Execution Server",id:"execution-server",level:3},{value:"Insight",id:"insight",level:3},{value:"Instance",id:"instance",level:3},{value:"License Server",id:"license-server",level:3},{value:"Package",id:"package",level:3},{value:"PyPi Server",id:"pypi-server",level:3},{value:"Quali Server",id:"quali-server",level:3},{value:"QualiX",id:"qualix",level:3},{value:"Resource",id:"resource",level:3},{value:"Resource Manager Client",id:"resource-manager-client",level:3},{value:"Route",id:"route",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"Sandbox end-user",id:"sandbox-end-user",level:3},{value:"Script",id:"script",level:3},{value:"Service",id:"service",level:3},{value:"Shell",id:"shell",level:3},{value:"Static VM",id:"static-vm",level:3},{value:"System administrator (sysadmin)",id:"system-administrator-sysadmin",level:3},{value:"Test",id:"test",level:3},{value:"Virtual environment (venv)",id:"virtual-environment-venv",level:3},{value:"Virtualization",id:"virtualization",level:3}];function c(e){const n={a:"a",h1:"h1",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"cloudshell-terminology",children:"CloudShell Terminology"}),"\n",(0,i.jsx)(n.p,{children:"This article defines the following terms:"}),"\n",(0,i.jsx)(n.h3,{id:"abstract-resource",children:"Abstract resource"}),"\n",(0,i.jsxs)(n.p,{children:["Abstract resources are blueprint components that comprise the required settings of the resources you want to use in the sandbox. For example, device model, Firmware version, minimum number of ports, etc. When reserving a blueprint, CloudShell scans the inventory for matching candidates and dynamically allocates them to the sandbox. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Abstract-Resources.htm",children:"Abstract Resources Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"admin",children:"Admin"}),"\n",(0,i.jsx)(n.p,{children:"The CloudShell admin is responsible for setting up CloudShell, creating resources, services and App templates, and providing all the necessary components and assets required to create blueprints and sandboxes. CloudShell has two types of admins: the sysadmin, or Global admin, has full access to all CloudShell domains and the Domain Admin has admin permission in specific domains."}),"\n",(0,i.jsx)(n.h3,{id:"app",children:"App"}),"\n",(0,i.jsxs)(n.p,{children:["An App is a sandbox component that provides the definition of an application hosted on a specific cloud provider. When run in the sandbox, the App deploys a virtual machine (VM) and performs the specified configuration management on it. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Apps.htm",children:"Apps Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"automation",children:"Automation"}),"\n",(0,i.jsxs)(n.p,{children:["Automation refers to script and driver processes/commands that are performed on the sandbox and/or the sandbox components. Examples include resource commands and orchestration scripts that run sandbox setup/teardown processes, as well as configuration management that is run on VMs as part of App deployment. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Autom-Ovrvw.htm",children:"Automation Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"blueprint",children:"Blueprint"}),"\n",(0,i.jsxs)(n.p,{children:["A blueprint is a template of an IT\xa0environment that can be reserved (i.e. brought online). It typically includes the required components (resources, services, Apps) and configurations, automation and networking. When reserving a blueprint, CloudShell creates a sandbox for the specified duration. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Bluprnt.htm",children:"Blueprints"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"blueprint-designer",children:"Blueprint designer"}),"\n",(0,i.jsx)(n.p,{children:"The blueprint designer is a CloudShell user or admin who is responsible for creating and managing blueprints."}),"\n",(0,i.jsx)(n.h3,{id:"categories",children:"Categories"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell categories are elements that are used to organize and display different CloudShell assets. There are two types of categories in CloudShell:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blueprint categories organize blueprints in the Blueprint Catalog."}),"\n",(0,i.jsxs)(n.li,{children:["Service categories perform two functions.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Expose specific services and Apps to specific domains. This requires assigning, to the component, a service category that is linked to the domain."}),"\n",(0,i.jsx)(n.li,{children:"Organize services and Apps in the App / Service catalog. By default, Apps are assigned the Applications category while services are assigned the category defined in their Shell. The Applications and default service categories are linked to the Global domain."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Blprnt-Ctlg-Ctgs.htm",children:"Managing Categories"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"cloud-provider",children:"Cloud provider"}),"\n",(0,i.jsx)(n.p,{children:"Cloud providers are used by CloudShell Apps to deploy and manage VMs as part of the sandbox."}),"\n",(0,i.jsxs)(n.p,{children:["Note that we're adding cloud provider shells to ",(0,i.jsx)(n.a,{href:"https://github.com/orgs/QualiSystems/discussions/categories/integrations",children:"Quali Repositories"})," all the time. For additional information, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Clp-capabilities.htm",children:"Cloud Provider Shells - Features and Capabilities Per Release"}),". In addition, community developers can extend support for additional cloud providers using our Custom Cloud Provider shell. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Sprtd-Cld-Prvdrs.htm",children:"Supported Cloud Providers in CloudShell"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"cloudshell-portal",children:"CloudShell Portal"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell Portal is the CloudShell web client in which admins, designers and end-users operate."}),"\n",(0,i.jsx)(n.h3,{id:"commands",children:"Commands"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Automati",children:"Automation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configuration-management",children:"Configuration Management"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Configuration-Management.htm",children:"Configuration Management Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"connectivity",children:"Connectivity"}),"\n",(0,i.jsx)(n.p,{children:"Connectivity routes represent a connectivity request between two components in the blueprint or sandbox workspace, which is resolved with the reservation of the blueprint. The type of connectivity can be a direct or indirect physical connection between two devices (route), or a network link (connector). CloudShell supports P2P connections (layer 1, 2, and 3) and many to many connections using VLAN or subnet services. Connectivity is established and torn down as part of the default sandbox setup and teardown orchestration and can be manually controlled by the user within the sandbox."}),"\n",(0,i.jsxs)(n.p,{children:["For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Rsc-Cnct/Phys-Ntwrk-Cntnr.htm",children:"Physical Network Connectivity"})," and ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/App-Cnct/Vir-Ntwrk-Cnct-Cntnr.htm",children:"Virtual Network Connectivity"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"domain",children:"Domain"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell domains are pools of CloudShell blueprints, resources, Apps and services, which allow their members to access and use these assets. By default, CloudShell provides the Global domain but additional domains can be created to logically isolate different teams in the organization or geographically-distributed sites and centers."}),"\n",(0,i.jsx)(n.h3,{id:"email-notification",children:"Email Notification"}),"\n",(0,i.jsxs)(n.p,{children:["Email notifications can be used to alert the admin, sandbox owner and permitted users of different sandbox lifecycle events. In addition, email notifications for customers using automation suites are also available, For details. See ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Notification-Emails.htm",children:"Email Notifications Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"execution-server",children:"Execution Server"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell has two types of execution servers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Test Execution Servers are used to execute Robot tests in the New Job Scheduling. Test Execution Servers do not support tests created in TestShell Studio nor shell and script commands, which continue to be executed by CloudShell execution servers. Test Execution Servers use sandbox licenses to run jobs. Test Execution Servers are included with the New Job Scheduling and do not require any additional licensing"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CloudShell Execution Servers run automation (scripts and shell driver commands) on sandboxes and sandbox components, as well as TestShell Studio tests as part of automation suites in the original Job Scheduling. Suite execution is only available for the Windows version. Each CloudShell Execution Server is configured to run a certain number of commands (shell, script) or jobs, which it can run concurrently (By default, 20 commands and 1 job). CloudShell Execution Servers do not require additional licensing."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"insight",children:"Insight"}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell Insight is CloudShell's BI and analytics tool. It provides visibility and business intelligence into CloudShell's inventory and user activity in the form of easy-to-understand graphs, charts and tables. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/BI/CS-Insight-BI.htm",children:"CloudShell Insight BI"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"instance",children:"Instance"}),"\n",(0,i.jsx)(n.p,{children:'In CloudShell Help, the term "instance" may refer to:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Attribute instance: When you associate a global attribute to a shell, that attribute is called an attribute instance. You can modify the settings for that attribute on that particular shell, including default value and value constraints."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'AWS/OpenStack instance: "instance" is the standard term for "VM" in AWS and OpenStack'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Automation suite instance: In this context, "instance" indicates a live execution of an automation suite or automation suite template.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Driver instance: As illustrated below, when a Python command runs in CloudShell, the Execution Server running the command creates both an instance of the command's driver or script and a dedicated Python virtual environment for that instance on the Execution Server, and loads the command's required packages and dependencies into this virtual environment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(35460).c+"",width:"469",height:"418"})}),"\n",(0,i.jsxs)(n.p,{children:["That command as well as all future command executions for that resource, service or App will run on that instance as long as the instance is alive. Once the instance is live, subsequent commands will take less time to run, as the instance already exists and has the required dependencies. The instance idle time is 10 minutes. For additional information, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Exctn-Srv-Exct.htm",children:"Execution Servers - Executions Page"})," and ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Virtual",children:"Virtual environment (venv)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"license-server",children:"License Server"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell License Server is the CloudShell component that contains the purchased CloudShell licenses and provides access tokens to the client computers in order to enable CloudShell software to run."}),"\n",(0,i.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,i.jsx)(n.p,{children:'The term "package" may refer to blueprint package, shell package or Python package.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Blueprint package contains the definition of a blueprint. Blueprint packages are typically used for sharing blueprints between different domains or CloudShell deployments, as backup copies and for automating blueprint modifications via Packaging API."}),"\n",(0,i.jsx)(n.p,{children:"Useful links:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Imprt.htm",children:"Import a Blueprint Package into CloudShell"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Exprt.htm",children:"Exporting a Blueprint Package"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/API/Pckg-API/PackagingAPI.htm",children:"Packaging API"})," (API for automating the creation and configuration of blueprint packages)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Quali-API/Quali%20API%20Library.html#Export%20Package",children:"Export Package"})," (export a blueprint package into CloudShell via Quali API )"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Shell package contains the definition of a shell, which can be imported into CloudShell. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Shells.htm",children:"Shells Overview"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Python package contains Python dependencies that are required for the execution of specific shells and scripts. For details, ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Pyth-Cnfg-Mds.htm",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pypi-server",children:"PyPi Server"}),"\n",(0,i.jsxs)(n.p,{children:["PyPi Server is a CloudShell component, which manages and serves Python packages and dependencies to Python drivers and scripts that are running in CloudShell sandboxes. It is installed on the Quali Server machine and requires access to the Quali Server and Execution Servers. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Pyth-Cnfg-Mds.htm",children:"PyPi Server - Managing Python Shell and Script Dependencies"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"quali-server",children:"Quali Server"}),"\n",(0,i.jsx)(n.p,{children:'Quali Server, which is also called CloudShell Server, is the "brain" of the CloudShell suite. It contains CloudShell\'s configurations, provides user access to CloudShell and processes queries and requests from CloudShell Portal and the APIs.'}),"\n",(0,i.jsx)(n.h3,{id:"qualix",children:"QualiX"}),"\n",(0,i.jsxs)(n.p,{children:["QualiX is a CloudShell program that allows in-browser connections to sandbox devices and VMs using a remote connection protocol such as RDP, Telnet and SSH. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/QualiX/Qualix.htm",children:"QualiX Installation and Configuration"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"resource",children:"Resource"}),"\n",(0,i.jsxs)(n.p,{children:["A resource is a sandbox component that models a physical or virtual device. For example, a switch, router, bridge or static VM. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Resources.htm",children:"Resources Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"resource-manager-client",children:"Resource Manager Client"}),"\n",(0,i.jsx)(n.p,{children:"Resource Manager Client is a CloudShell desktop application that is used for CloudShell administration operations, including managing domains, users and global attributes. It also allows admins to share resources and blueprints across multiple domains."}),"\n",(0,i.jsx)(n.h3,{id:"route",children:"Route"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Connecti",children:"Connectivity"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sandbox",children:"Sandbox"}),"\n",(0,i.jsxs)(n.p,{children:["A sandbox is an active, isolated instance of a blueprint, within a specific domain, which has been reserved for a specific period. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Sndbx-Ovrv.htm",children:"Sandboxes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"sandbox-end-user",children:"Sandbox end-user"}),"\n",(0,i.jsx)(n.p,{children:"The sandbox end-user is the consumer of the sandbox. This user typically logs into CloudShell Portal, finds the appropriate blueprint and reserves it. For example, a sales specialist who wants to present their company's product to a prospective customer or a software tester who needs to run verification tests on their product's latest build."}),"\n",(0,i.jsx)(n.h3,{id:"script",children:"Script"}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell scripts are Python scripts that provide automation commands that can run on the sandbox and on the component level. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Scrpt.htm",children:"Managing Assets"}),". If you're a developer and want to learn how to create and modify scripts, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/DevGuide/Intro/The-CS-DevGuide.htm",children:"The CloudShell DevGuide"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blueprint scripts: Blueprint scripts are scripts that run on the sandbox. For example, running a traffic test that involves several components, including the traffic generator chassis, controller service and DUT."}),"\n",(0,i.jsxs)(n.li,{children:["Orchestration scripts: Orchestration scripts are blueprint scripts that run automatically as part of the sandbox's lifecycle. You can use orchestration scripts to create setup and teardown procedures as well as other custom workflows that can be made available in the sandbox. CloudShell includes several out-of-the-box orchestration scripts, which are provided with our default blueprint template. For details about our out-of-the-box orchestration scripts, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe",children:"CloudShell Sandbox Template"})," and ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm#Configur",children:"Configure Blueprint Orchestration"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Resource scripts: Resource scripts allow you to add automation to specific sandbox components. These scripts are intended to add simple functionality, or to be used for testing and debugging activities. Note that in order to add automation to a shell, the best practice is to use the component\u2019s driver. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/DevGuide/Reference/Resource-Scripts.htm",children:"Resource Scripts"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"service",children:"Service"}),"\n",(0,i.jsxs)(n.p,{children:["A service is a sandbox component that models a public cloud service or SaaS product. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Services.htm",children:"Services Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"shell",children:"Shell"}),"\n",(0,i.jsxs)(n.p,{children:["A shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Shells.htm",children:"Shells Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"static-vm",children:"Static VM"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike CloudShell Apps, static VMs are VMs that are loaded into CloudShell as is from the cloud provider. CloudShell does not manage their lifecycle and the out of the box Setup and Teardown processes do not apply to these types of components. In CloudShell, static VMs are represented by resources. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Static-VMs.htm",children:"Static VMs Overview"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"system-administrator-sysadmin",children:"System administrator (sysadmin)"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Admin",children:"Admin"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"test",children:"Test"}),"\n",(0,i.jsxs)(n.p,{children:["CloudShell supports the management and execution of hardware and network tests. CloudShell tests are developed in ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/TestShell",children:"TestShell Studio"}),", Quali's test development platform, and can be executed using CloudShell automation suites. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/JOB-SCHDL/Wrk-wth-Atmt-Suite.htm",children:"What Are Automation Suites?"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"virtual-environment-venv",children:"Virtual environment (venv)"}),"\n",(0,i.jsx)(n.p,{children:'A virtual environment (or "venv" for short) is a folder containing the Python packages and dependencies required by a particular Python process to run. When the process runs in a sandbox, CloudShell creates a virtual environment and installs the dependencies defined in the requirements.txt file that is associated to the process.'}),"\n",(0,i.jsx)(n.p,{children:"In CloudShell, there are two types of virtual environments."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Virtual environments for Python shell drivers or scripts that are running in CloudShell. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Wht-r-Pyth-VEnvs.htm",children:"What are Python Virtual Environments?"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Virtual environments for jobs that execute Robot Framework tests as part of the New Job Scheduling. For details, see ",(0,i.jsx)(n.a,{href:"https://help.quali.com/Online%20Help/2022.2/Portal/Content/IG/JSS/jss-tr-setup.htm",children:"Setting Up a Test Repository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"virtualization",children:"Virtualization"}),"\n",(0,i.jsx)(n.p,{children:"CloudShell provides out-of-the-box support for Microsoft Azure, vCenter Server and AWS. For other cloud providers, the Custom Cloud Provider shell template allows developers to model the cloud provider of their choice (for details, see the CloudShell Dev Guide). Virtualized components can be modeled in CloudShell using the following Cloud components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Apps: Offline definition templates of the virtual application to be deployed and are deployed and torn down as part of the sandbox lifecycle. The App spins up a dedicated VM and installs the application on it."}),"\n",(0,i.jsx)(n.li,{children:"Static VMs: VMs that can be loaded into CloudShell as is from the cloud provider)"}),"\n",(0,i.jsx)(n.li,{children:"Cloud services: CloudShell services that provide access to a web service. Unlike Apps, CloudShell services do not spin up a VM."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},35460:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/InstanceArchitecture-5e36610efa07d662e2bc338b835e53a6.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>r});var i=t(11504);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);