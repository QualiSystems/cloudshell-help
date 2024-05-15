---
sidebar_position: 11
---

# Shells Overview

A shell enables CloudShell users to interact with different sandbox elements, like physical devices and virtual appliances. A shell models the sandbox element in CloudShell and provides commands that CloudShell users and automation processes can run on it, like Power On and Health Check.

Shells can be downloaded from [Quali Repositories](https://github.com/orgs/QualiSystems/repositories) page and have different levels - Certified, Preview & Community grade. Each shell is based on a standard, which defines the shell's data model and functions. For more information, visit the [The CloudShell DevGuide](../../devguide/index.md) or ask a question in our Community [Forum](https://community.quali.com/).

## Our shells

CloudShell shells can be thought of as either 1st Generation shells (1<sup>st</sup> Gen) or 2<sup>nd</sup> Generation shells (2nd Gen). Both types of shells can coexist inside the same CloudShell sandbox, but they differ in their structure and in the way that they are managed.

- **1<sup>st</sup> Gen Shells** are imported as CloudShell packages that contain the data model and driver for the intended sandbox element. 1<sup>st</sup> Gen shells allow extensive control of the family and model, and therefore are not standardized. While they allow maximal flexibility, when using them, some shell management capabilities may not be available. 1st Gen Shells use the blueprint packaging mechanism - see [Import a Blueprint Package into CloudShell](../../portal/blueprints/creating-blueprints/import-package.md).
    
- **2<sup>nd</sup> Gen Shells** are imported through CloudShell Portal’s Shells management page. 2<sup>nd</sup> Gen shells are based on standardized models and attributes, which streamlines the creation, maintenance and sharing of shells. Unlike 1st Gen shells, which can be modified from Resource Manager Client, 2nd Gen shells cannot be altered, ensuring their integrity. For details, see [Managing Shells](../../admin/cloudshell-manage-dashboard/managing-shells.md).
    
:::tip-one-line
Both 1st and 2nd shells can coexist with each other in the same CloudShell sandbox. However, it is strongly recommended to migrate any 1<sup>st</sup> Gen shells to 2<sup>nd</sup> Gen. ***Today all shells released by Quali are 2nd Gen***.
:::

## How to use shells in CloudShell

:::note
Depending on your organization, the system administrator and domain administrator may be the same employee.
:::

1. The system administrator imports the shell into CloudShell, as explained in [Importing Shells](../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells).
2. In the **Inventory** dashboard, the domain administrator creates a resource based on the shell. For additional information, see [Adding Inventory Resources](../../portal/inventory/managing-resources/adding-inventory-resources/index.md).
    
    The resource is available for the domain’s users.
    
    :::note
    This step does not apply to shells that create services. If the shell creates services, the service is created in CloudShell when you import the shell and is available in the domains defined in the shell's service category.
    :::
    
3. Blueprint designers add the resource to the blueprint, and if needed, configure connectivity to other elements in the blueprint. For additional information, see [Add Connectivity](../../portal/blueprints/creating-blueprints/add-connectivity/index.md).

## Related Topics

- [Cloud Provider Shells - Features and Capabilities Per Release](../../admin/supported-cloud-providers-in-cloudshell/cloud-provider-2g-shells-features-and-capabilities.md)