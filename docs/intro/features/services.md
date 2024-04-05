---
sidebar_position: 9
---

# Services Overview

This article introduces services, their function in CloudShell and outlines how to configure them.

## What is a service?

A service is a CloudShell component that is used to model sandbox components that are not actual physical devices. It can be a public cloud-native service on AWS or Azure or a SaaS product you want to represent in the sandbox. Similar to resources, services have a data model and automation commands, but they are not managed as inventory items. This allows multiple instances of the same service to be used in a sandbox.

## What does a service include?

Services are based on a Shell template, which provides the service's data model and automation script.

In addition, the service can include attributes, to be used by sandbox orchestration processes or to prompt the sandbox end user for inputs that will be used by the service's driver or script. The service's attributes can be published to prompt the sandbox end-user to provide information.

If the Shell template provides it, the service may also include an address field to allow remote access to specific devices or web sites from within the sandbox. For example, to connect to an Amazon CDN service.

## Service creation process

CloudShell provides standardized Shell templates for creating services.

:::note
Depending on your organization, the system administrator and service/blueprint designers may be the same employee.
:::

1. Using the Shellfoundry utility, the service developer creates a Shell from the appropriate Shell template. For additional information, see the CloudShell Dev Guide's [Getting Started with Shell Development](../../devguide/developing-shells/getting-started.md).
    
2. The service developer modifies the Shell's settings, including default attribute values, which inputs to publish in the diagram, and attaches service categories to expose the service to specific domains.
    
3. The system administrator imports the Shell into CloudShell - as explained in [Importing Shells](../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells).
    
    :::note
    For 1st Gen Shells, you can optionally attach the service categories after importing the Shell into CloudShell, via **Resource Manager Client**. For additional information, see [Configuring Services](../../admin/setting-up-cloudshell/inventory-operations/configuring-services.md).
    :::
    
4. The blueprint designer adds the service to the blueprint diagram from the **Apps / Services** catalog and fills in any required attribute values - see [Services in Blueprints](../../portal/blueprints/creating-blueprints/services.md).
5. End-users can now use the services in their sandboxes - see [Services in Sandboxes](../../portal/sandboxes/sandbox-workspace/services.md).