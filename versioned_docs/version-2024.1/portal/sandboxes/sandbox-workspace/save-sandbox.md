---
sidebar_position: 13
---

# Save a Sandbox

Saving a sandbox is part of the Save and Restore paid add-on. Contact your account manager to purchase a license. For details about Save and Restore, see [Sandbox Save and Restore Overview](../sandbox-save-and-restore-overview.md).

This article explains how to save a sandbox.

:::note Notes
- Save and Restore does not apply to persistent environments.
- CloudShell also has a Save As Blueprint option. However, unlike Save As Sandbox, it only saves the diagram and properties of the sandbox but not the state of the sandbox and the sandbox's components. For additional information, see [Save a Sandbox as a Blueprint](./save-sandbox-as-blueprint.md).
:::


## Saving a sandbox

**To save a sandbox:**

1. In the sandbox workspace, click the **Save Sandbox** button.
    
    Note:You can only save a sandbox when the sandbox is in the "Active" or "Active (with Error)" state.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SaveSandboxButton.PNG)
    
    The **Save Sandbox** dialog box is displayed.
    
    ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SaveSandboxDialogBox.PNG)
    
2. Enter a meaningful **Name**.
    
    The default is the sandbox name with a "- Save" added to the end of the name. For example: "Traffic Test with additional configurations – Save”.
    
    :::note
    The saved sandbox name has a limit of 60 characters.
    :::
    
3. Optionally, enter a **Description**. It is recommended that you include a description. For example, to help you differentiate between saved sandboxes that are based on the same sandbox.
    
    By default, the saved sandbox description is empty.
    
4. Click **Save**.
    
    CloudShell creates a saved sandbox. When the saving process completes, the saved sandbox is displayed in the **Saved Sandboxes** dashboard and the original sandbox is available for use. Note that only admins and permitted users of the saved sandbox can see and restore it. They can restore it and then invite permitted users to the new restored sandbox. For details about what information is saved, see the section below.
    

## Sandbox saving state

When you click **Save** in the **Save Sandbox** dialog box, a save script is called and the sandbox enters the **Saving** state.

:::note
While the sandbox is in the saving state, the sandbox is in "view only" mode and cannot be used.
:::

If the sandbox teardown starts before the saving process completes, the saving process will be canceled. To avoid such a scenario, ensure that the sandbox duration is set so that you have enough time to save the sandbox. If you do not, extend the sandbox duration. See [Extend and End Sandboxes](./extend-and-end-sandbox.md) for more information.

Once the saving action completes successfully, a saved sandbox is created and the sandbox returns to the active state. You can then continue working in the sandbox and save additional instances, if required.

## Sandbox save logic

Currently, CloudShell supports saving sandboxes that contain vCenter/OpenStack-based Apps, inventory resources and CloudShell services. Apps of other cloud providers are not supported and therefore, you cannot save a sandbox which contains these elements.

When you save a sandbox, the save logic runs in CloudShell and triggers the vCenter/OpenStack's save command on the vCenter/OpenStack servers, which have deployed Apps in the sandbox.

In the following tables, you will find a detailed explanation of the sandbox components CloudShell saves during the saving process:

### Sandbox elements

<table>
    <thead>
        <th>Element</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Apps</td>
            <td>
            Only vCenter/OpenStack Apps can be saved. Saving sandboxes with Apps based on other cloud providers is currently not supported. Save and Restore applies to all vCenter 2G shell versions and OpenStack 2G shell version 1.2.0 and above.
            </td>
        </tr>
        <tr>
            <td>Inventory Resources</td>
            <td>
            Inventory resources can be saved. 

:::note Notes

- Resources selected from an abstract resource (when the original sandbox was reserved) are saved as is, not as abstracts. However, starting with CloudShell 9.3, resources based on abstract resources behave according to the abstract's defined save behavior - see [Save behavior for abstract resources](../../inventory/managing-abstract-templates/create-abstract-template/abstract-resource-settings.md#save-behavior-for-abstract-resources).
- Device configurations are not saved as part of the saving procedure. However, you can extend the Save and Restore out-of-the-box orchestration scripts to do that, as explained in [Save/Restore Physical Resource Configurations Examples](../../../devguide/develop-orch-scripts/cs-oob-orch/index.md#saverestore-physical-resource-configurations-examples).
:::
            </td>
        </tr>
        <tr>
            <td>Static VMs</td>
            <td>
            CloudShell supports saving sandboxes that contain static VMs (i.e. VMs which are modeled in CloudShell's **Inventory** dashboard, but are not deployed via CloudShell). CloudShell views such components as inventory resources and therefore does not clone these VMs or save their state, as it does for deployed Apps.
            </td>
        </tr>
        <tr>
            <td>Services</td>
            <td>
            When saving a sandbox that contains services, the services are copied along with their attribute values. If the services have published inputs, the values that were entered when the original sandbox was reserved are also saved.
            </td>
        </tr>
        <tr>
            <td>Attachments</td>
            <td>
            Sandbox attachments are not saved.
            </td>
        </tr>
        <tr>
            <td>Labels</td>
            <td>
            The sandbox's labels are saved, including unused labels that were created in the originating blueprint.
            </td>
        </tr>
    </tbody>
</table>

### vCenter/OpenStack Apps

<table>
    <thead>
        <th>Element</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Deployed Apps</td>
            <td>
            Each deployed App in the original sandbox represents a running VM, which was deployed by the App in the sandbox. When saving, CloudShell clones this VM, and creates a snapshot of the cloned VM on the vCenter/OpenStack server. Optionally, you can configure CloudShell to power off the original VM for the duration of the saving process using the **Behavior During Save** attribute, as explained in [vCenter/OpenStack advanced saving configurations](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md#vcenteropenstack-advanced-saving-configurations).

            - In the vCenter server, cloned VMs reside in a folder named as the saved sandbox ID. This folder is located within the Saved Sandboxes folder, defined in the **VM Location** attribute on the vCenter cloud provider resource. For example:
    
            ![](/Images/CloudShell-Portal/Lab-Management/Reservations/SavedSandboxes-vcenter-folder.png)
            
            The **VM Location** folder is located in the vCenter data storage defined on the vCenter cloud provider resource, unless a different value was defined in the **Saved Sandbox Storage** field on the App template, as explained in [vCenter/OpenStack advanced saving configurations](../../../admin/setting-up-cloudshell/cloudshell-configuration-options/save-sandbox-configurations.md#vcenteropenstack-advanced-saving-configurations).
    
            - For OpenStack, a snapshot of the App is created in the **Image** section of the OpenStack web portal.

:::warning Important notes
- The VM's memory state (RAM) is not saved when cloning the VM.
- If the VM is a virtual traffic generator loaded with a test configuration, this configuration will not be exported and saved. It must therefore be reloaded either automatically by the restored sandbox (which requires modifying the Restore script to do the reloading), or manually after you restore the sandbox.
- You should not delete or alter the Saved Sandboxes folder or its contents as this may cause unexpected behavior.
:::
            </td>
        </tr>
        <tr>
            <td>Non-Deployed Apps</td>
            <td>
            If the sandbox you want to save includes vCenter/OpenStack Apps that were not yet deployed, these Apps will be copied as is to the saved sandbox without creating any artifacts in vCenter/OpenStack.

:::note
When restoring a saved sandbox, the Restore script will deploy these Apps, even though they were not already deployed when the original sandbox was saved.
:::
            </td>
        </tr>        
    </tbody>
</table>

### Connectivity

<table>
    <thead>
        <th>Element</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>L1 Connectivity</td>
            <td>
            The route's endpoint information is copied, not the route solution. The save procedure also supports scenarios where connections are created after the sandbox was created and therefore do not exist in the blueprint. 
            </td>
        </tr>
        <tr>
            <td>Mappable resources</td>
            <td>
            Mappable resources such as L1s and Patch Panels are not copied. 
            </td>
        </tr>
        <tr>
            <td>Physical cable requests</td>
            <td>
            Physical cable requests on a resource are copied as is and not disconnected.
            </td>
        </tr>
        <tr>
            <td>Visual connections</td>
            <td>
            Visual connections between endpoints in the sandbox are copied.
            </td>
        </tr>
        <tr>
            <td>L2 Connectivity</td>
            <td>
            L2 connections and VLAN services are copied to the saved sandbox.

- If the VLAN service in the original sandbox is a **VLAN Manual** service, it is copied as is, with the VLAN defined in the service.
    
    If the VLAN service in the original sandbox is a **VLAN Auto** service, it is copied without the allocated VLAN. Therefore, in this case, the restored saved sandbox might get a different VLAN than the one assigned in the original sandbox.
    
    :::note
    If you save a sandbox that has a **VLAN Manual** service, restoring the saved sandbox will fail if the requested VLAN is used in another active sandbox.
    :::
    
- Attribute values set on connections are copied, along with the connection's alias. This includes attributes set on the source blueprint.
- The connection state (connected or disconnected) is not saved. Therefore, when restoring a saved sandbox, if the default **Restore** script is used, all L2 connections will be connected in the sandbox setup phase, regardless of the state of each connection in the original sandbox.

For more information about VLAN services, see [VLAN Connectivity](../../../admin/setting-up-cloudshell/inventory-operations/connectivity-control/vlan-connectivity/index.md).
            </td>
        </tr>
        <tr>
            <td>L3 Connectivity</td>
            <td>
            L3 connections are not copied.
            </td>
        </tr>
    </tbody>
</table>

### Additional information

- The original sandbox's properties, including the blueprint's properties such as orchestration settings, instructions, and configurations are also saved in the restored sandbox, and some reservation properties, including permitted users, and email notifications.
- Sandbox inputs, such as global inputs and published service inputs, are saved with the values that were entered when the sandbox was reserved. These input values are set in the restored sandbox and cannot be changed when restoring.

## Related Topics

- [Sandbox Save and Restore Overview](../sandbox-save-and-restore-overview.md)