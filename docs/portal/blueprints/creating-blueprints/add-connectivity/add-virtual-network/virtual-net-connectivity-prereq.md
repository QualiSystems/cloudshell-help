---
sidebar_position: 1
---

# Virtual Network Connectivity Prerequisites

The following configurations are required in order to enable connections using VLAN services.

## Set up virtual network services

For connectivity, Apps and deployed Apps require a VLAN or Subnet service, which knows how to resolve the virtual connections Apps use. VLAN services resolve L2 connections involving private cloud Apps and/or resources, such as vCenter, while Subnet services resolve connections between Apps on a public cloud, such as AWS EC2 and Azure. Therefore, before you start creating connectivity requirements involving Apps, make sure your virtual network services are properly set up. VLANs can also be used to connect physical resources.

For additional information, see [VLAN Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-VLAN.htm) or [Subnet Connectivity](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Subnets.htm).

## Define the deployed App families and models

Once deployed, Apps transform into resources that can have an IP address of the deployed virtual machine. Every deployed App resource inherits properties and behaviors from the data model of the Shell on which it is based. CloudShell provides the **Generic Deployed App** family and model, which you can use, but you can define your own families and models.

For additional information, see [Defining the Resource Data Model](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Dfn-Rsrc-Data-Mdl.htm).

## Related Topics

[Apps Overview](https://help.quali.com/Online%20Help/0.0/Portal/Content/CSP/LAB-MNG/Features/Apps.htm)