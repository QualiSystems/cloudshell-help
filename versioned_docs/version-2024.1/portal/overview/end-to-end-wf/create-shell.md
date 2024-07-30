---
sidebar_position: 1
---

# Creating and Using Shells in CloudShell

This article explains the end-to-end flow for creating and using Shells in CloudShell. For layer 1 switch Shells, see [L1 Switches](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/l1-switches.md).

To create and use a Shell:

1. Check for a suitable OOTB Shell in the [Quali Repositories](https://github.com/orgs/QualiSystems/repositories) page.
2. If a suitable Shell exists, import the Shell into CloudShell, as explained in [Importing Shells](../../../admin/cloudshell-manage-dashboard/managing-shells.md#importing-shells), and proceed to step 6.
3. If you find a Shell but need to extend or change it, see CloudShell Dev Guide's [Customizing Shells](../../../devguide/developing-shells/customize-shells.md).
4. If a suitable Shell doesn't exist, create a new Shell from our standard pool:
    1. Install Shellfoundry - see [Installing or Updating Shellfoundry](../../../devguide/developing-shells/getting-started.md#installing-or-updating-shellfoundry) in the CloudShell Dev Guide.
    2. Associate CloudShell to Shellfoundry - see [Configuring CloudShell Connection Settings](../../../devguide/developing-shells/getting-started.md#configuring-cloudshell-connection-settings) in the CloudShell Dev Guide.
    3. Get a list of all available standard templates - see [Setting the Standard](../../../devguide/developing-shells/modeling-shells-with-tosca.md#setting-the-standard) in the CloudShell Dev Guide.
        
        Every standard has a dedicated GitHub repo with documentation to help you find the Shell that is most suitable for the type of resource you want to model. To see our standards, click [here](https://github.com/orgs/QualiSystems/discussions?discussions_q=label%3AStandard+).
        
    4. Create a new Shell from a suitable template and name it after the device's model - see [Setting the Standard](../../../devguide/developing-shells/modeling-shells-with-tosca.md#setting-the-standard).
5. Package and import the Shell into CloudShell's inventory - see [Packaging and importing a Shell into CloudShell](../../../devguide/reference/shellfoundry.md#packaging-and-importing-a-shell-into-cloudshell) in the CloudShell Dev Guide.
6. Create new CloudShell items as appropriate - see [Adding Inventory Resources](../../inventory/managing-resources/adding-inventory-resources/index.md).
7. For layer 2 switch resources, model the switch's connections in CloudShell - see [Define the Resource Connections of the Switch or Patch Panel](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/define-the-resource-connections-of-the-switch-or-patch-panel.md).