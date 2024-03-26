# Public Cloud Provider Support in CloudShell

In order to allow CloudShell Apps to deploy and manage virtual machines in a public cloud provider such as AWS or Azure in CloudShell, the system administrator needs to perform several configurations. These include setting up a CloudShell management network on the cloud provider, a VPN connection to enable communication between CloudShell and the cloud provider, and a CloudShell "cloud provider resource", which provides the cloud provider's network, storage and access settings to the CloudShell Apps.

In addition, CloudShell tags are attached to all CloudShell-created elements in the cloud provider. You can use these tags to analyze, filter and manage costs associated with your CloudShell activities.

## Related Topics

- [AWS Integration](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/VPC-Ovrv.htm)
- [Microsoft Azure Integration](https://help.quali.com/Online%20Help/0.0/Portal/Content/Admn/Azure-VNET-Ovrv.htm)