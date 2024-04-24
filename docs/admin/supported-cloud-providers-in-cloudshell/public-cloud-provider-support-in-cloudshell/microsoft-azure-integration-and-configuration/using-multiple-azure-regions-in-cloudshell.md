---
sidebar_position: 7
---

# Using Multiple Azure Regions in CloudShell

This article provides guidelines on how to configure your Azure cloud provider resources in CloudShell, in case of multiple interconnected regions in Azure.

In each region that has a CloudShell integration, a VNET is created for hosting the content of the sandboxes that will be created in that region. This VNET is always created with the CIDR 10.0.0.0/8. In scenarios where CloudShell is integrated with two or more Azure regions that are connected to each other by VPN, this behavior may cause an allocation conflict when creating a sandbox in one of the regions.

For illustration purposes, consider this scenario of a sandbox deploying subnets in two different regions, each with its own VMs:

![](/Images/Admin-Guide/Azure-deployment-type/Multi-Azure-Deployment.png)

**To successfully implement such a scenario:**

- Make sure CloudShell is integrated with the Azure regions.
- Make sure to set up a VPN tunnel between the regions to allow networking between sandbox VNETs located on the different regions.
- In the same CloudShell domain, create different Azure cloud provider resources, one for each Azure region.
- Make sure the IP range available to each cloud provider resource does not conflict with the ranges of the other cloud provider resources. This is done by specifying the IPs or IP ranges to ignore in the cloud providers' **Networks in Use** attribute. So for example, to use the default CIDR 10.0.0.0/8 (which provides a range of 16,777,216 IPs) in two Azure regions:
    
    - Set region A's cloud provider resource to ignore the first half of the range (1 - 8,388,608)
        
    - Set region B's cloud provider resource to ignore the second half of the range (8,388,609 - 16,777,216)
- To set up network connectivity between each cloud provider's Apps, see [Subnet Connectivity - Points to Consider](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Cnct-Ctrl-Subnets-Cnsdr.htm).
