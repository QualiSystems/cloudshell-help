---
sidebar_position: 2
---

# What's New

## Features and enhancements

This release includes the following features and enhancements.

### Assembly Lab

A radically different mode of operation for CloudShell is now available!

- Manage devices on a part by part basis
    - Move sub resources from one device to another
    - Solve abstracts using parts from different devices

- Sandboxes can be partially solved by algorithm and partially by human involvement
    - Select solutions for abstract requests
    - Change solutions


#### For more information on Assembly lab, follow these links

- [Assembly Lab Overview](../admin/setting-up-cloudshell/assembly-lab/index.md)
- [Configure an Assembly Lab domain](../admin/setting-up-cloudshell/assembly-lab/configure-assembly-lab-domain.md)

### Capabilities

CloudShell's RBAC implementation, you can now associate user groups with capability sets.
Each capability set can specifically allow or block certain capabilities, overriding the defaults provided by the group role.

[Read more here](../admin/cloudshell-identity-management/managing-cloudshell-permissions/capabilities/index.md)

### Display attributes in Resource Search directly on cards

[Configure specific attributes](../admin/setting-up-cloudshell/cloudshell-configuration-options/resource-search-customizations.md) to appear directly on resource search results.

![SearchResultsWithAttribute](/Images/Admin-Guide/ResourceSearchCustomization/SearchResultsWithLocation.png)

### Filter sandboxes by user input and display the user input in Sandboxes Dashboard

- Configure an attribute to be displayed in sandbox dashboard
- Show only sandboxes which passed a particular value

![Sandbox Dashboard Customization](/Images/Admin-Guide/CustomizingSandboxesDashboard/filter.gif)

[For more details](../admin/setting-up-cloudshell/cloudshell-configuration-options/customizing-sandboxes-dashboard.md)

### Minimum Lead Time

You now have the ability to establish a minimum lead time for reserving Sandboxes within a specific domain. This means that when this setting is configured, any sandbox reservations must be made for a date in the future, not for immediate use.

To implement this, you need to adjust the `MinimumLeadTimeMinutes` parameter via a specific API call. Detailed instructions on how to make this API call can be found in [this guide](../api-guide/cs-admin-rest-api/edit-domain.md).

### API Changes

#### GetResourcesAttributeValues 
Receives a list of resources and returns the values of all the attributes in bulk. This method can be more performant than calling GetResourceAttributeValues or GetResourceDetails in a loop.
Available in Cloudshell Automation API.

#### GetExecutionServers & DeleteExecutionServer

API calls for getting Execution Servers and removing them using automation.

#### GetResourceDetails changes

GetResourceDetails will now show Create & Modified Date for the resource.
