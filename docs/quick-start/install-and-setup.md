---
sidebar_position: 2
---

# Quickstart Guide - CloudShell Installation and Initial Setup

In this guide, we’ll focus on installing CloudShell, setting up users and domains and populating the inventory.

Target audience: Admins

## Basic flow

Using CloudShell, setting up the test environment is simple:

1. Install CloudShell.
2. Set up users, groups and domains.
3. Create resources, services and Apps.
4. Check your work.

## Install CloudShell

CloudShell suite contains several basic components and optional add-ons that provide additional capabilities.

The basic components are:

- CloudShell Portal: CloudShell's web portal that allows end users to reserve blueprints on demand from a self-service catalog, and enables admins and designers to administer CloudShell and create blueprints.
- Quali Server: Processes requests, manages and shares data/resources with CloudShell clients (Portal, APIs, etc.) from the CloudShell databases (MySQL, MongoDB).
- Execution Server: CloudShell component that executes commands and tests. Multiple execution servers can be installed for distributed provisioning.

1. Make sure the machine(s) that will host CloudShell comply with our [CloudShell System Requirements](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/sys-req.htm).
    
    :::info
    CloudShell’s servers and clients can coexist on the same machine, but for load/performance reasons, you might want to consider installing high-load components such as Quali Server, CloudShell Portal and the Execution Servers on dedicated machines.
    :::
    
2. Install and configure CloudShell suite. For details, see [CloudShell Suite Installation Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/ovrvw.htm).
    
    You can also install CloudShell in a [High Availability](https://help.quali.com/Online%20Help/0.0/Portal/Content/IG/Overview/hi-avail.htm) configuration.
    
3. We highly recommend using CloudShell’s Insight, our BI platform. Insight is provided free of charge with out-of-the-box resource utilization and activity dashboards, but can be customized as a paid add-on. For details, see [CloudShell Insight BI](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/BI/CS-Insight-BI.htm).
4. You might also want to install and configure [QualiX Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/QualiX/Ovrv.htm), to allow your sandbox end-users to remotely connect to the sandbox’s devices and VMs from the browser, without needing the machine’s credentials nor an RDP or SSH client.

## Optionally set up users, groups and domains

Depending on your organization, you might want to set up domains for your different teams or sites. A domain is basically a space that includes the resources, Apps and blueprints that apply to a specific team, project or geographically-distributed site in your organization, and the users that belong to that team or site.

Groups are the link that connects users to a domain. Each group has a role, which is delegated to that group’s members in the domain. As such, you could have a single user with different roles in different domains. That user could be a “regular user” in one domain but a “domain admin” in another.

This diagram illustrates how users, groups and domains work together:

![](/Images/CloudShell-Portal/Quickstart/UsersGroupsDomain.png)

### Related Topics

- [Adding Domains](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Mng-Dmn.htm)
- [Managing CloudShell Groups](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-Grp.htm)
- [Managing CloudShell Users](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Add-Usr.htm)

## Create Resources and Apps

Now's a good time to start populating your inventory with resources, Apps and services, which the blueprint designers can later add to their blueprints. For details on how to create these components, see the related topics section that follows.

Each one of these components is based on a shell, which is a plugin that defines how the component will behave in the sandbox. A shell models a specific component, so if we want to create a Juniper switch, we’ll need a Juniper switch shell and to deploy or load a Google Cloud VM, we’ll need a shell that can do that. To quickly see how CloudShell works, we recommend using our [PUT](https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/putshell/dist/Putshell.zip) and [Traffic Generator](https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/trafficshell/dist/Trafficshell.zip) mock shells.

CloudShell supports 4 types of components:

- Resource models an actual physical or virtual device. It could be a layer 2 Cisco switch or some existing virtual appliance on the cloud that you’d like to load into CloudShell. Feel free to use our [PUT Shell Mock](https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/putshell/dist/Putshell.zip) and [Traffic Shell Mock](https://github.com/QualiSystemsLab/Quali-University-Prep/raw/master/Shells/trafficshell/dist/Trafficshell.zip) resources.
- App is the definition of virtual application to be deployed as part of the sandbox. It defines the VM to be deployed and configuration management script or playbook that will install the application(s) on top of the VM. Apps live in the context of a sandbox and when the sandbox ends, CloudShell’s teardown script will also delete the VM from the cloud.
- Service is a sandbox component that injects some code into the sandbox. It could be used to register to a cloud-based service like a traffic generator on Azure.
- Abstract resource is a component that includes the settings you need from a specific resource. When the blueprint is reserved, CloudShell finds a matching resource in the CloudShell inventory and puts it in the blueprint instead of the abstract. Abstract resources provide the blueprint with additional flexibility and can also be used in combination with other resources.

:::note
Quali has a vibrant [developer’s community](https://github.com/orgs/QualiSystems/discussions/categories/integrations) that is continuously developing new shells. Please browse it to see if we already have the shell you need. If we don’t, feel free to create or extend an existing shell, or propose a shell in our [Idea box](https://community.quali.com/ideabox).
:::

### Related Topics

- [Shells Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Shells.htm)
- [Resources Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Resources.htm)
- [Apps Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Apps.htm)
- [Services Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Services.htm)
- [Abstract Resources Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Abstract-Resources.htm)
- [Migrating 1st Gen Shells to 2nd Gen](../devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell.md)

## Check components

Now that you've set up your domains, inventory and Apps, it's time to make sure everything's in working order:

1. Make sure the users you created can connect to their domains and have the appropriate permissions. For example, domain admins should have access to the Manage dashboard and be able to create/edit resources in the Inventory dashboard.

1. Make sure the domains include the right components:
    1. Log into a domain as a regular user.
    2. Create a blueprint.
    3. Open the Resource and Service/App catalogs and make sure the appropriate resources are available.
        
        - If any resources are missing, make sure you created them in the right domain.
        
        - Apps are exposed to domains via a service category that is attached to the Apps. Make sure the service category is associated to the right domain(s).
    4. Add some resources/Apps to the blueprint and reserve.
    5. Make sure the sandbox 's setup process completes successfully.
        
        When the sandbox is active, its resources should appear reserved in the Inventory dashboard and the Apps should be deployed.