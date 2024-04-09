---
sidebar_position: 2
---

# CloudShell Terminology

This article defines the following terms:

### Abstract resource

Abstract resources are blueprint components that comprise the required settings of the resources you want to use in the sandbox. For example, device model, Firmware version, minimum number of ports, etc. When reserving a blueprint, CloudShell scans the inventory for matching candidates and dynamically allocates them to the sandbox. For details, see [Abstract Resources Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Abstract-Resources.htm).

### Admin

The CloudShell admin is responsible for setting up CloudShell, creating resources, services and App templates, and providing all the necessary components and assets required to create blueprints and sandboxes. CloudShell has two types of admins: the sysadmin, or Global admin, has full access to all CloudShell domains and the Domain Admin has admin permission in specific domains.

### App

An App is a sandbox component that provides the definition of an application hosted on a specific cloud provider. When run in the sandbox, the App deploys a virtual machine (VM) and performs the specified configuration management on it. For details, see [Apps Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Apps.htm).

### Automation

Automation refers to script and driver processes/commands that are performed on the sandbox and/or the sandbox components. Examples include resource commands and orchestration scripts that run sandbox setup/teardown processes, as well as configuration management that is run on VMs as part of App deployment. For details, see [Automation Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Autom-Ovrvw.htm).

### Blueprint

A blueprint is a template of an IT environment that can be reserved (i.e. brought online). It typically includes the required components (resources, services, Apps) and configurations, automation and networking. When reserving a blueprint, CloudShell creates a sandbox for the specified duration. For details, see [Blueprints](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Bluprnt.htm).

### Blueprint designer

The blueprint designer is a CloudShell user or admin who is responsible for creating and managing blueprints.

### Categories

CloudShell categories are elements that are used to organize and display different CloudShell assets. There are two types of categories in CloudShell:

- Blueprint categories organize blueprints in the Blueprint Catalog.
- Service categories perform two functions.
    1. Expose specific services and Apps to specific domains. This requires assigning, to the component, a service category that is linked to the domain.
    2. Organize services and Apps in the App / Service catalog. By default, Apps are assigned the Applications category while services are assigned the category defined in their Shell. The Applications and default service categories are linked to the Global domain.

For details, see [Managing Categories](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Blprnt-Ctlg-Ctgs.htm).

### Cloud provider

Cloud providers are used by CloudShell Apps to deploy and manage VMs as part of the sandbox.

Note that we're adding cloud provider shells to [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) all the time. For additional information, see [Cloud Provider Shells - Features and Capabilities Per Release](https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Clp-capabilities.htm). In addition, community developers can extend support for additional cloud providers using our Custom Cloud Provider shell. For details, see [Supported Cloud Providers in CloudShell](https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Sprtd-Cld-Prvdrs.htm).

### CloudShell Portal

CloudShell Portal is the CloudShell web client in which admins, designers and end-users operate.

### Commands

See [Automation](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Automati).

### Configuration Management

See [Configuration Management Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Configuration-Management.htm).

### Connectivity

Connectivity routes represent a connectivity request between two components in the blueprint or sandbox workspace, which is resolved with the reservation of the blueprint. The type of connectivity can be a direct or indirect physical connection between two devices (route), or a network link (connector). CloudShell supports P2P connections (layer 1, 2, and 3) and many to many connections using VLAN or subnet services. Connectivity is established and torn down as part of the default sandbox setup and teardown orchestration and can be manually controlled by the user within the sandbox.

For details, see [Physical Network Connectivity](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Rsc-Cnct/Phys-Ntwrk-Cntnr.htm) and [Virtual Network Connectivity](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/App-Cnct/Vir-Ntwrk-Cnct-Cntnr.htm).

### Domain

CloudShell domains are pools of CloudShell blueprints, resources, Apps and services, which allow their members to access and use these assets. By default, CloudShell provides the Global domain but additional domains can be created to logically isolate different teams in the organization or geographically-distributed sites and centers.

### Email Notification

Email notifications can be used to alert the admin, sandbox owner and permitted users of different sandbox lifecycle events. In addition, email notifications for customers using automation suites are also available, For details. See [Email Notifications Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Notification-Emails.htm).

### Execution Server

CloudShell has two types of execution servers:

- Test Execution Servers are used to execute Robot tests in the New Job Scheduling. Test Execution Servers do not support tests created in TestShell Studio nor shell and script commands, which continue to be executed by CloudShell execution servers. Test Execution Servers use sandbox licenses to run jobs. Test Execution Servers are included with the New Job Scheduling and do not require any additional licensing
    
- CloudShell Execution Servers run automation (scripts and shell driver commands) on sandboxes and sandbox components, as well as TestShell Studio tests as part of automation suites in the original Job Scheduling. Suite execution is only available for the Windows version. Each CloudShell Execution Server is configured to run a certain number of commands (shell, script) or jobs, which it can run concurrently (By default, 20 commands and 1 job). CloudShell Execution Servers do not require additional licensing.
    

### Insight

CloudShell Insight is CloudShell's BI and analytics tool. It provides visibility and business intelligence into CloudShell's inventory and user activity in the form of easy-to-understand graphs, charts and tables. For details, see [CloudShell Insight BI](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/BI/CS-Insight-BI.htm).

### Instance

In CloudShell Help, the term "instance" may refer to:

- Attribute instance: When you associate a global attribute to a shell, that attribute is called an attribute instance. You can modify the settings for that attribute on that particular shell, including default value and value constraints.
- AWS/OpenStack instance: "instance" is the standard term for "VM" in AWS and OpenStack
- Automation suite instance: In this context, "instance" indicates a live execution of an automation suite or automation suite template.
- Driver instance: As illustrated below, when a Python command runs in CloudShell, the Execution Server running the command creates both an instance of the command's driver or script and a dedicated Python virtual environment for that instance on the Execution Server, and loads the command's required packages and dependencies into this virtual environment.
    
    ![](/Images/CloudShell-Portal/InstanceArchitecture.png)
    
    That command as well as all future command executions for that resource, service or App will run on that instance as long as the instance is alive. Once the instance is live, subsequent commands will take less time to run, as the instance already exists and has the required dependencies. The instance idle time is 10 minutes. For additional information, see [Execution Servers - Executions Page](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Exctn-Srv-Exct.htm) and [Virtual environment (venv)](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Virtual).
    

### License Server

CloudShell License Server is the CloudShell component that contains the purchased CloudShell licenses and provides access tokens to the client computers in order to enable CloudShell software to run.

### Package

The term "package" may refer to blueprint package, shell package or Python package.

- Blueprint package contains the definition of a blueprint. Blueprint packages are typically used for sharing blueprints between different domains or CloudShell deployments, as backup copies and for automating blueprint modifications via Packaging API.
    
    Useful links:
    
    - [Import a Blueprint Package into CloudShell](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Imprt.htm)
        
    - [Exporting a Blueprint Package](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Exprt.htm)
        
    - [Packaging API](https://help.quali.com/Online%20Help/2022.2/Portal/Content/API/Pckg-API/PackagingAPI.htm) (API for automating the creation and configuration of blueprint packages)
        
    - [Export Package](https://help.quali.com/Online%20Help/2022.2/Quali-API/Quali%20API%20Library.html#Export%20Package) (export a blueprint package into CloudShell via Quali API )
        
- Shell package contains the definition of a shell, which can be imported into CloudShell. For details, see [Shells Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Shells.htm).
    
- Python package contains Python dependencies that are required for the execution of specific shells and scripts. For details, [PyPi Server - Managing Python Shell and Script Dependencies](../../../admin/cloudshell-execution-server-configurations/setting-up-python-virtual-environments/pypi-server-managing-python-shell-and-script-dependencies.md).
    

### PyPi Server

PyPi Server is a CloudShell component, which manages and serves Python packages and dependencies to Python drivers and scripts that are running in CloudShell sandboxes. It is installed on the Quali Server machine and requires access to the Quali Server and Execution Servers. For details, see [PyPi Server - Managing Python Shell and Script Dependencies](https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Pyth-Cnfg-Mds.htm).

### Quali Server

Quali Server, which is also called CloudShell Server, is the "brain" of the CloudShell suite. It contains CloudShell's configurations, provides user access to CloudShell and processes queries and requests from CloudShell Portal and the APIs.

### QualiX

QualiX is a CloudShell program that allows in-browser connections to sandbox devices and VMs using a remote connection protocol such as RDP, Telnet and SSH. For details, see [QualiX Installation and Configuration](https://help.quali.com/Online%20Help/2022.2/Portal/Content/QualiX/Qualix.htm).

### Resource

A resource is a sandbox component that models a physical or virtual device. For example, a switch, router, bridge or static VM. For details, see [Resources Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Resources.htm).

### Resource Manager Client

Resource Manager Client is a CloudShell desktop application that is used for CloudShell administration operations, including managing domains, users and global attributes. It also allows admins to share resources and blueprints across multiple domains.

### Route

See [Connectivity](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Connecti).

### Sandbox

A sandbox is an active, isolated instance of a blueprint, within a specific domain, which has been reserved for a specific period. For details, see [Sandboxes](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Sndbx-Ovrv.htm).

### Sandbox end-user

The sandbox end-user is the consumer of the sandbox. This user typically logs into CloudShell Portal, finds the appropriate blueprint and reserves it. For example, a sales specialist who wants to present their company's product to a prospective customer or a software tester who needs to run verification tests on their product's latest build.

### Script

CloudShell scripts are Python scripts that provide automation commands that can run on the sandbox and on the component level. For details, see [Managing Assets](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Mng-Scrpt.htm). If you're a developer and want to learn how to create and modify scripts, see [The CloudShell DevGuide](https://help.quali.com/Online%20Help/2022.2/Portal/Content/DevGuide/Intro/The-CS-DevGuide.htm).

- Blueprint scripts: Blueprint scripts are scripts that run on the sandbox. For example, running a traffic test that involves several components, including the traffic generator chassis, controller service and DUT.
- Orchestration scripts: Orchestration scripts are blueprint scripts that run automatically as part of the sandbox's lifecycle. You can use orchestration scripts to create setup and teardown procedures as well as other custom workflows that can be made available in the sandbox. CloudShell includes several out-of-the-box orchestration scripts, which are provided with our default blueprint template. For details about our out-of-the-box orchestration scripts, see [CloudShell Sandbox Template](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/MNG/Wrk-wth-Blprnt-Tmplt.htm#CloudShe) and [Configure Blueprint Orchestration](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Crt-Blprnt/Blprnt-Blprnt-Orchs.htm#Configur).
- Resource scripts: Resource scripts allow you to add automation to specific sandbox components. These scripts are intended to add simple functionality, or to be used for testing and debugging activities. Note that in order to add automation to a shell, the best practice is to use the component’s driver. For details, see [Resource Scripts](https://help.quali.com/Online%20Help/2022.2/Portal/Content/DevGuide/Reference/Resource-Scripts.htm).

### Service

A service is a sandbox component that models a public cloud service or SaaS product. For details, see [Services Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Services.htm).

### Shell

A shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check. For details, see [Shells Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Shells.htm).

### Static VM

Unlike CloudShell Apps, static VMs are VMs that are loaded into CloudShell as is from the cloud provider. CloudShell does not manage their lifecycle and the out of the box Setup and Teardown processes do not apply to these types of components. In CloudShell, static VMs are represented by resources. For details, see [Static VMs Overview](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Static-VMs.htm).

### System administrator (sysadmin)

See [Admin](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/LAB-MNG/Features/Term.htm?tocpath=Introduction%7C_____2#Admin).

### Test

CloudShell supports the management and execution of hardware and network tests. CloudShell tests are developed in [TestShell Studio](https://help.quali.com/Online%20Help/2022.2/TestShell), Quali's test development platform, and can be executed using CloudShell automation suites. For details, see [What Are Automation Suites?](https://help.quali.com/Online%20Help/2022.2/Portal/Content/CSP/JOB-SCHDL/Wrk-wth-Atmt-Suite.htm).

### Virtual environment (venv)

A virtual environment (or "venv" for short) is a folder containing the Python packages and dependencies required by a particular Python process to run. When the process runs in a sandbox, CloudShell creates a virtual environment and installs the dependencies defined in the requirements.txt file that is associated to the process.

In CloudShell, there are two types of virtual environments.

- Virtual environments for Python shell drivers or scripts that are running in CloudShell. For details, see [What are Python Virtual Environments?](https://help.quali.com/Online%20Help/2022.2/Portal/Content/Admn/Wht-r-Pyth-VEnvs.htm).
    
- Virtual environments for jobs that execute Robot Framework tests as part of the New Job Scheduling. For details, see [Setting Up a Test Repository](https://help.quali.com/Online%20Help/2022.2/Portal/Content/IG/JSS/jss-tr-setup.htm).
    

### Virtualization

CloudShell provides out-of-the-box support for Microsoft Azure, vCenter Server and AWS. For other cloud providers, the Custom Cloud Provider shell template allows developers to model the cloud provider of their choice (for details, see the CloudShell Dev Guide). Virtualized components can be modeled in CloudShell using the following Cloud components:

- Apps: Offline definition templates of the virtual application to be deployed and are deployed and torn down as part of the sandbox lifecycle. The App spins up a dedicated VM and installs the application on it.
- Static VMs: VMs that can be loaded into CloudShell as is from the cloud provider)
- Cloud services: CloudShell services that provide access to a web service. Unlike Apps, CloudShell services do not spin up a VM.