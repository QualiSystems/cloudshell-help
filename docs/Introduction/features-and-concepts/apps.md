---
sidebar_position: 3
---

Apps Overview
=============

Apps enable you to deploy, as part of your sandbox lifecycle, virtual applications (VMs) that are hosted on a cloud provider.

Note that we're adding cloud provider shells to [Quali Repositories](https://github.com/orgs/QualiSystems/discussions/categories/integrations) all the time. For additional information, see [Cloud Provider Shells - Features and Capabilities Per Release](../../../Admn/Clp-capabilities.htm). For unsupported cloud providers, we provide the Custom Cloud Provider Shell which you can use to develop support for your cloud provider. To learn how to load static VMs from vCenter Server into CloudShell as inventory resources, see [Static VMs Overview](Static-VMs.htm).

For video tutorials on Apps, please visit [Quali U Courses portal](https://courses.quali.com/).

What is an App?
---------------

An App is a CloudShell component that provides the definition of an application hosted on a VM. When run in the sandbox, the App deploys a virtual machine (VM) and performs the specified configuration management on it. The CloudShell user can add specific Apps from the App / Service catalog to a blueprint, for example a virtual router or a PostgreSQL database, and connect them to other resources/Apps. Once the App is deployed, an App resource is created, which behaves according to the deployed App Shell specified in the App template. Multiple Apps based on the same App template can run in parallel.

What does an App include?
-------------------------

Apps include the following settings:

*   The cloud provider the App is hosted on
*   The template/image/VM the App is based on
*   (Optional) The configuration management that will run on the VM (software installations, OSconfigurations, etc.). In some cases, the VM may already include the required configurations.
*   The Shell of the deployed App, which may offer additional automation capabilities to the user once the App is deployed
*   (Optional) User access credentials to the VM (user/password)

App configuration process
-------------------------

The App configuration process requires creating a cloud provider resource that will host the App’s VM, enabling network connectivity, if required, and creating the App itself in CloudShell Portal.

:::info
Depending on your organization, the system administrator and App/blueprint designers may be the same employee.
:::

1.  For public clouds like AWS EC2 and Microsoft Azure, CloudShell management networks need to first be installed on the cloud provider region that will host the App's VM. See [Public Cloud Provider Support in CloudShell](../../../Admn/Prp-for-cld-prvdrs.htm).
    
2.  The system administrator creates an Inventory resource for a cloud provider such as VMware vCenter or AWS. For additional information, see [Adding Inventory Resources](../../INVN/Add-Rsrc-Tmplt.htm).
    
    This "cloud provider resource" will deploy the App's VM.
    
3.  To enable connectivity between Apps and resources or other Apps, the system administrator configures VLAN or Subnet services, as appropriate. See [Connectivity Control](../../../Admn/Cnct-Ctrl.htm).
    
4.  The App designer creates App templates, which are based on the cloud provider resource.
    
    This requires configuring the VM to deploy and the application to install on the new VM. For additional information, see [Adding App templates](../../MNG/Mng-Apps.htm#Adding).
    
5.  The blueprint designer adds the App to a blueprint and configures connectivity to other Apps and resources, as appropriate.
    
    For additional information, see [Apps in Blueprints](../App-Actns/Blprnt-Use-Apps.htm#Adding) and [Add Virtual Network Connectivity Requirements](../App-Cnct/Vir-Ntwrk-Cnct-Crt.htm).
    
6.  End-users can now deploy the Apps in sandboxes - see [Apps in Sandboxes](../App-Actns/Sndbx-Use-Apps.htm).