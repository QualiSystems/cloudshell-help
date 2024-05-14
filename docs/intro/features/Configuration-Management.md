---
sidebar_position: 5
---

# Configuration Management Overview

CloudShell supports the execution of Configuration Management scripts or Ansible playbooks on deployed Apps and resources in the sandbox. Scripts of type sh, bash and PowerShell, and Ansible playbooks are supported.

There is a difference in the way you set up and use App and resource configuration management in CloudShell:

- App configuration management scripts and playbooks are defined on the App template itself, run during the App deployment (automatically as part of the sandbox setup, and manually via Deploy App command and using the Rerun Configuration Management command on deployed Apps that support rerunning configuration management), and support the sequential execution of multiple scripts or playbooks on the same deployed App. For details, see [Adding App templates](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Apps.htm#Adding).
- Resource configuration management scripts and playbooks are imported into CloudShell using the Manage > Assets page, attached to resource models or shells, and are manually executed in the sandbox as commands on the resource. For details, see [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm).
    

## User flows

App configuration management:

- Admin/domain admin: Creates App template > defines Configuration Management > optionally allows sandbox end-users to rerun Configuration Management on deployed Apps
- Blueprint designer: Adds App to the blueprint
- Sandbox end-user: Starts sandbox > can rerun Configuration Management for Apps that support the option

Resource configuration management:

- Admin/domain admin: Imports shell > creates/discovers resource into inventory > adds Configuration Management asset to CloudShell > associates CM asset with resource model/shell
- Blueprint designer: Adds resource to blueprint > can edit setup orchestration to call the Configuration Management asset
- Sandbox end user: Can run Configuration Management asset from the resource in the sandbox

## Configuration

Configuration Management scripts and playbooks use the same settings for Apps and for resources.

- For Apps:
    1. In CloudShell Portal, open the Manage > Apps page.
    2. Create or open an existing App template.
    3. In the App's Configuration Management screen, define the scripts/playbooks to run.
        
        The scripts/playbooks run in their order of appearance during the App's deployment.
        
- For resources:
    1. In CloudShell Portal, open the Manage > Assets > Resource page.
    2. Import the script/playbook as a Repository Asset.
    3. Configure its settings.
    4. Attach the script/playbook to the appropriate resource models/shells.
        
        The script/playbook is displayed as a command in the resource's Resource Commands pane.
        
        :::tip  
        You can use the **ExecuteCommand** and **EnqueueCommand** APIs to call resource configuration management as part of setup orchestration (using a customized setup script).
        :::
        

## How Configuration Management works

When configuration management execution called, the following occurs:

- For custom scripts: CloudShell sends the script's execution to the Execution Server, using SSH/WinRM to connect to the target device for configuration.
- For Ansible playbooks:
    1. CloudShell sends the execution to the Linux Execution Server using the Execution Server Selector attribute defined in the Ansible shell (Resource Manager Client > Resource Families > Configuration Services > Ansible Configuration).
    2. The Execution Server invokes the Ansible that is installed locally on the Linux Execution Server with the inventory of the target resource. The resource username and password should be passed to the inventory file as well for authentication to the target machine.

![](/Images/CloudShell-Portal/Lab-Management/ConfigurationManagementExecutionDiagram_591x90.png)

## Related Topics

- [Managing Assets](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-Scrpt.htm)
- [Run Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Sndbx-Run-Cmd.htm)
- [Run App Commands](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/App-Actns/Sndbx-Apps-Run-Cmnds.htm)
- [Import a Blueprint Package into CloudShell](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Imprt.htm)
- [Export Blueprint Packages and Configurations](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Exprt-Imprt/Blprnt-Exprt-Pckgs-Cnfgs.htm)
- [Enable WinRM on Windows VMs to Support Configuration Management](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Config-Mng/Cnfg-WinRM-for-CM.htm)