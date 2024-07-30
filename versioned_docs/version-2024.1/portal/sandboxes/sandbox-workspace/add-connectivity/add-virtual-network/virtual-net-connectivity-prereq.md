---
sidebar_position: 1
---

# Virtual Network Connectivity Prerequisites

The following configurations are required in order to enable connections using VLAN services.

## Set up virtual network services

For connectivity, Apps and deployed Apps require a VLAN or Subnet service, which knows how to resolve the virtual connections Apps use. VLAN services resolve L2 connections involving private cloud Apps and/or resources, such as vCenter, while Subnet services resolve connections between Apps on a public cloud, such as AWS EC2 and Azure. Therefore, before you start creating connectivity requirements involving Apps, make sure your virtual network services are properly set up. VLANs can also be used to connect physical resources.

For additional information, see [VLAN Connectivity](../../../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md) or [Subnet Connectivity](../../../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/subnet-connectivity/index.md).

## Define the deployed App families and models

Once deployed, Apps transform into resources that can have an IP address of the deployed virtual machine. Every deployed App resource inherits properties and behaviors from the data model of the Shell on which it is based. CloudShell provides the **Generic Deployed App** family and model, which you can use, but you can define your own families and models.

For additional information, see [Defining the Resource Data Model](../../../../../admin/setting-up-cloudshell/inventory-operations/resource-data-modeling-for-1st-gen-shells/defining-the-resource-data-model.md).

## Related Topics

[Apps Overview](../../../../../intro/features/apps-overview.md)