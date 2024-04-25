---
sidebar_position: 12
---

# vCenter Resource Discovery Error: "Discovery failed for resource"

## Error message

For vCenter cloud provider resource called "Quali vCenter1":

:::danger-one-line
Discovery failed for resource 'Quali vCenter1': 'get\_inventory' command failed with 'Exception' error.  
Description: vCenter permissions for configured resource(s) are invalid. The resource is now excluded. To include the resource, navigate to the Inventory page.
:::

## Description

The user defined on the vCenter cloud provider resource doesn't have the required permissions on the vCenter root level.

## Possible Causes

In many situations, the permissions / role are defined on the datacenter or cluster level and this is not sufficient. The user designated for this operation must be granted the required permissions on the root level of the vCenter server.

## Solution

You will need to ensure the user permissions are defined on the vCenter root level. For detailed instructions on how to do this, see [Required vCenter User Permissions per Deployment Type](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/vCenter-User-Prmsn.htm).
