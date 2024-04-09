---
sidebar_position: 1
---

# Administrative Operations Overview

This guide covers CloudShell administrative operations. Some of these actions are performed in **Resource Manager Client** and others in **CloudShell Portal**

Admin responsibilities include:

- Defining the resource data model
- Populating the resource data model
- Adding users, groups, and domains
- Assigning users to groups and domains
- Setting up the CloudShell license server

## ![](/Images/Admin-Guide/Admin-operations.png) Define the resource data hierarchy

After defining the data model, structure resource families and models into a logical hierarchy.

## ![](/Images/Admin-Guide/Admin-operations_1.png) Build the attributes repository

Use attributes to define resource runtime behavior, to assist with route resolution, and to define blueprint categories.

## ![](/Images/Admin-Guide/Admin-operations_3.png) Add resource families and models

Define the various models for each type or resource family, and populate the resource repository with instances of these models.
:::important
Tasks related to the resource data model only apply to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which already include all the data modeling and configurations, and offer enhanced shell management capabilities. For details, see [Shells Overview](../intro/features/shells.md).
:::
## ![](/Images/Admin-Guide/Admin-operations_4.png) Define CloudShell users

Add or import your users into CloudShell.

## ![](/Images/Admin-Guide/Admin-operations_5.png) Control permission levels

Manage user access to resources by assigning them users to groups. Permission levels are determined by group membership.

## ![](/Images/Admin-Guide/Admin-operations_6.png) Allocate resources

Associating groups with domains allows the group's user access to domain resources.

## Related Topics

- [CloudShell Deployment Overview](../admin/setting-up-cloudshell/cloudshell-deployment-overview.md)
- [Inventory Operations](../admin/setting-up-cloudshell/inventory-operations/)
- [CloudShell Identity Management](../admin/cloudshell-identity-management/)
- [](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/ID-Mngmt.htm)[CloudShell Manage Dashboard](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/MNG/Mng-CS-Cat.htm)
- [CloudShell Execution Server Configurations](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Stp-Exctn-Srvr.htm)
