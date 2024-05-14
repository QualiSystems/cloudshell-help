---
sidebar_position: 9
---

# Resources Overview

This article introduces resources, their function in CloudShell and outlines how to configure them.

## What is a resource?

A resource is a CloudShell component that is used to model a physical device in a sandbox, such as a switch, bridge or router. It has a data model and automation commands that are used to control the device.

Unlike CloudShell services and Apps, a resource is attached to a specific device and therefore managed as a unique inventory item. This means that when a resource is being used in a sandbox, that resource is exclusively allocated to the sandbox. CloudShell provides the option of setting the sharing policy on a resource to allow the same resource to be used in multiple sandboxes simultaneously.

## Virtual resources

Resources are also used to model virtual devices in CloudShell. CloudShell has two types of virtual resources, static VMs and deployed Apps:

- A static VM can be loaded into CloudShell and used as a resource - see [Static VMs Overview](./static-vms.md).
- Once deployed in the sandbox, an App becomes a resource and is managed as an inventory item for the duration of the sandbox or until the App is deleted from the cloud provider.

## What does a resource include?

Resources are based on a Shell template, which provides the resource's data model, structure including blades and ports, attributes and driver. By default, all resources include an address and User/Password attributes to allow CloudShell to communicate with the device.

## Resource creation process

CloudShell provides standardized Shell templates for creating resources.

:::note
Depending on your organization, the system administrator and service/blueprint designers may be the same employee.
:::

1. Check for a suitable out-of-the-box Shell in [Quali Repositories](https://github.com/orgs/QualiSystems/repositories).
    
2. If a suitable Shell doesn't exist, using the Shellfoundry utility, the resource developer creates a resource Shell from the appropriate Shell template. For additional information, see the CloudShell Dev Guide's [Getting Started with Shell Development](../../devguide/developing-shells/getting-started.md).
3. The system administrator imports the Shell into CloudShell and creates an inventory resource - see [Importing Shells](../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells) and [Adding Inventory Resources](../../portal/inventory/managing-resources/adding-inventory-resources/index.md).
4. The blueprint designer adds the resource to the blueprint diagram from the Resources catalog - see [Resources in Blueprints](../../portal/blueprints/creating-blueprints/resources/).
5. End-users can now use the resources in their sandboxes - see [Resources in Sandboxes](../../portal/sandboxes/sandbox-workspace/resources/).