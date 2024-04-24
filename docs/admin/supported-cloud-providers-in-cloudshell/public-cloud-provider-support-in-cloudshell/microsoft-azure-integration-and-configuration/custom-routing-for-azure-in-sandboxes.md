---
sidebar_position: 5
---

# Custom Routing for Azure in Sandboxes

CloudShell supports the creation of custom routes in Azure sandboxes, allowing you to force communication from any subnet(s) to go through any specific IP(s). For example, you can have traffic go through a firewall or VPN connection.

To do this, you need to add to your blueprint a blueprint or custom setup script that will tell the Azure cloud provider resource to define the custom routing.

For instructions and implementation examples, see [Custom Routing for Azure Apps](https://help.quali.com/Online%20Help/0.0/Portal/Content/DevGuide/Reference/Custom-Routing-for-Azure.htm) in the CloudShell Dev Guide chapter.
