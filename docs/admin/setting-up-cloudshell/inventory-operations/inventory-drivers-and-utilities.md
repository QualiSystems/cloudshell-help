---
sidebar_position: 4
---

# Inventory Drivers and Utilities
:::important
This article only applies to resources based on 1st Gen shells. While CloudShell supports 1st Gen shells, we recommend using 2nd Gen shells, which offer enhanced shell management capabilities. For details, see [Shells Overview](../../../intro/features/shells.md).
:::
## Autoloading resource configuration settings

**Auto Load** is a process that discovers and creates the internal resources of the root resource (for example, switch cards and ports). The Auto Load process automatically updates the configuration of the CloudShell resource to match the structure, mappings and attributes of the device, adding missing sub resources in the process.

If the resource already exists in CloudShell, Auto Load will exclude any sub resources that are either missing from the device or have the wrong model. However, on existing L1 switch resources, Autoload removes the sub resources from the L1 switch resource instead (as explained in [Sync between the L1 switch and CloudShell](../inventory-operations/connectivity-control/l1-switches.md#sync-between-the-l1-switch-and-cloudshell)).
:::note
**Auto Load** must be performed on new L1 switches not yet inventoried in CloudShell.
:::
**To perform Auto Load on a new L1 switch:**

1. Create a new L1 switch resource in **Resource Manager Client**.
2. Right-click the switch resource and select **Configuration**.
3. Enter the user name and password  
    ![](/Images/Admin-Guide/Inventory-Operations/Inven-Opers_9.png)
4. If this is an existing L1 switch, in the **Internal Resources** pane, right-click the switch and select **Exclude** from the context menu.  
    ![](/Images/Admin-Guide/Inventory-Operations/InternalResExclude.png).
5. Make sure the L1 shell's `.exe` file is unblocked.
    
    1. In the `C:\Program Files (x86)\QualiSystems\CloudShell\Server\Drivers` folder, right-click the L1 shell's `.exe` file and select **Properties**.
        
    2. If you see an **Unblock** option, select it and click **OK**.
        

5. Click the **Auto Load** button at the bottom of the **Configuration** tab.
    
    The Auto Load process completes.
    
6. If you excluded the resource before running Auto Load, right-click the switch in the **Internal Resources** pane and select **Include** from the context menu. "Included" resources are available for reservation in a sandbox. Sandboxes are created in the CloudShell Portal (for details, see [Creating Sandboxes](../../../portal/sandboxes/creating-sandboxes.md)).
    
    ![](/Images/Admin-Guide/Inventory-Operations/InternalResInclude.png)
    
    At the end of the Auto Load process, all relevant auto-detected internal resources (blades, ports) are displayed in the **Internal Resources** pane, under the root resource node.
    
7. For L1 switches, if the **Autoload** process made changes to the resource structure, you may need to redefine any lost device connections, see [Define the resource connections of the L1 switch](../inventory-operations/connectivity-control/l1-switches.md#define-the-resource-connections-of-the-l1-switch).

### Sync To/From device operations

You can re-synchronize a resource in the database without performing a full **Auto Load**.

While **Auto Load** updates the resource structure with the structure of the device, **Sync** does not remove resources that were added manually, but only updates existing ones.

Sync can be performed for a resource or any of its internal resources (e.g. whole chassis, a blade or a port).

- **Sync From Device** updates the resource properties stored in **Resource Manager Client** with the current device settings.
- **Sync To Device** overrides device settings with the current state of the device as documented in **Resource Manager Client**.

As synchronization requires the resource to be reserved, the process first initiates an active sandbox for the resource. If you do not reserve the resource before initiating a sync process, an automatic sandbox will be initiated.
:::note Important
Before running Sync To/From, make sure the CloudShell resource's structure does not include blades or ports that don't exist in the device.
:::
#### Sync From Device for existing resources

This section explains how to update the resource properties stored in **Resource Manager Client** with the current device settings.

**To update the resource properties stored in the Resource Manager with the current device settings:**

1. Right-click the switch from the **Resource Explorer** tree and select **Configuration**.
    
2. To avoid affecting sandboxes that are using this resource, in the **Internal Resources** pane, right-click the resource and select **Exclude** from the context menu.
3. Click the **Sync From Device** button at the bottom.

4. When the Sync From Device process completes, in the **Internal Resources** pane, right-click the sub-resource and select **Include** from the context menu.

#### Sync To Device for existing resources

**To override device settings with the current state of the device as documented in Resource Manager Client:**

1. Right-click the switch from the **Resource Explorer** tree and select **Configuration** from the context menu.
2. Click the **Sync To Device** button at the bottom.
    
    The L1 switch's attributes and mappings are updated according to the new data.
    
:::note
To change the values of specific attributes on the physical device, in the resource's **Settings** tab, edit the attribute values and click **Activate**.
:::