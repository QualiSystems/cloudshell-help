---
sidebar_position: 3
---

# Add VMware vCenter Cloud Provider Resource

This article explains how to configure a vCenter cloud provider resource. The **VMware vCenter** cloud provider enables the deployment of virtual machines from vCenter templates, images, clones (existing vCenter VMs) and linked clones (snapshots of existing vCenter VMs). Each deployment type includes the required settings, attributes, and commands. For a video tutorial on how to set up the resource, watch the video at the bottom of the article.
:::tip
We strongly recommend using the 2<sup>nd</sup> Gen version of the shell, which provides significant enhancements and capabilities, and is tamper-resistant from within CloudShell, ensuring your Azure cloud provider resources and Apps are in pristine condition. Useful articles: [Replacing the 1st Gen shell with a 2nd Gen version](../../../../devguide/reference/migrate-1st-gen-shell-to-2nd-gen-shell.md#replacing-the-1st-gen-shell-with-a-2nd-gen-version), [Cloud Provider Shells - Features and Capabilities Per Release](../../cloud-provider-2g-shells-features-and-capabilities.md).
:::
:::note Notes
- vCenter elements created by CloudShell should not be altered as this may cause unexpected behavior.
- The supported versions are vSphere 5.5 - 6.5, 6.7, 7.
:::
**To add a vCenter cloud provider resource:**

1. Log in to the CloudShell domain in which this resource will reside. This will enable the Apps based on this cloud provider resource to be usable in this domain.
2. In the **Inventory** dashboard, in the **Resources** tab, click the folder in which you want to create the resource.
3. Click **\+ Add New**.
4. In the **Create New Resource** dialog box, select the **vCenter** cloud provider template. To use the vCenter 2<sup>nd</sup> Gen shell, select **VMware vCenter Cloud Provider 2G**.
5. Enter a **Name** for the vCenter resource.
    :::note
    The resource's name has a limit of 100 characters and can only contain alpha-numeric characters, spaces, and the following characters: | . - \_ \] \[
    :::
6. Enter the **IP Addres**s of the vCenter server that will be used to deploy the virtual machines.
7. Click **Create**.
    
    The Resource dialog box is displayed.
    
    ![](/Images/Admin-Guide/Inventory-Operations/AppsResourceDiscoveryInformation.png)
    
8. Enter the required information. Unless specified differently, paths are relative to the datacenter so for example, to specify VM storage "datastore cluster" that is under datacenter "QualiSB", enter "datastore cluster" in the **VM Storage** field. For guidance on finding each element in your vCenter server, see [vCenter cheetsheet for versions 5.5-6.5](/attachments/VCenter_5.5_6.5_Cloud_Provider_Resource_Configuration_Cheetsheet.pdf) or [vCenter cheetsheet for version 6.7 and above](/attachments/VCenter_6.7_Cloud_Provider_Resource_Configuration_Cheetsheet.pdf).
    :::note
    All vCenter elements must be located under the same data center.
    :::
    
    <table>
        <thead>
            <th>Attribute</th>
            <th>Supporting shell version</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td>Address</td>
                <td>All</td>
                <td>IP address of the vCenter server</td>
            </tr>
            <tr>
                <td>User</td>
                <td>All</td>
                <td>
                User on the vCenter server.

    The user must be assigned to the root level of the vCenter server with the necessary permissions. For details, see [Required vCenter User Permissions per Deployment Type](./required-vcenter-user-permissions-per-deployment-type.md).
                </td>
            </tr>
            <tr>
                <td>Password</td>
                <td>All</td>
                <td>
                vCenter user's password
    :::important
    Password must not include a # character.
    :::
                </td>
            </tr>
            <tr>
                <td>Default Datacenter</td>
                <td>All</td>
                <td>Datacenter within the vCenter that will be used for virtual machine deployment. All other settings of this vCenter resource should refer to entities associated with this datacenter.</td>
            </tr>
            <tr>
                <td>VM Storage</td>
                <td>All</td>
                <td>
                vCenter storage in which the VMs will be created. The storage can be either a datastore or a datastore cluster. For example: datastore1
    :::note
    To use a specific datastore that resides inside a cluster, specify the cluster name and the datastore name. For example: clustername/storage1
    :::
                </td>
            </tr>
            <tr>
                <td>Holding Network</td>
                <td>All</td>
                <td>
                Default network to be used for the VM’s vNICs when disconnecting them from another network. A distributed port group can also be specified.

    Specify a network under the specified dvSwitch. Do not include the **dvSwitch** name in the path.
    :::note
    Only VNICs in this holding network will be used when connecting Apps based on this cloud provider resource in the sandbox.
    :::
                </td>
            </tr>
            <tr>
                <td>VM Location</td>
                <td>All</td>
                <td>
                Folder in the vSphere datacenter (defined in the **VM Storage** attribute) in which the VM will be created. Default is **Qualisystems**.

    From CloudShell version 9.0, two folders are created within this folder, as needed: `Deployed Apps` and `Saved Sandboxes`. The `Deployed Apps` folder holds the deployed VM Apps and, if you have saved a sandbox as part of the **Save and Restore** paid add-on, the `Saved Sandboxes` folder is created to hold the VM artifacts created when a user saves a sandbox.
                </td>
            </tr>
            <tr>
                <td>Default dvSwitch</td>
                <td>All</td>
                <td>
                (Optional if connectivity is not required) Default vCenter dvSwitch to be used when configuring virtual machine connectivity. Using the vCenter 2nd Gen shell, vSwitch is also supported.
    :::important
    CloudShell needs to create port groups in the dvSwitch in order to use Apps. Therefore, make sure you have an appropriate VMWare license that provides this capability.
    :::
                </td>
            </tr>
            <tr>
                <td>VM Cluster</td>
                <td>All</td>
                <td>
                vCenter cluster or host to use when deploying a virtual machine. To specify a host instead of a cluster, use: Cluster Name/Host IP.

    :::note Notes
    - If the cluster is in **Under Maintenance** mode, the deployment may fail.
    - Discovery of the resource will fail if your vCenter server has a datastore cluster folder with the same name as the specified VM cluster.
    :::
                </td>
            </tr>
            <tr>
                <td>VM Resource Pool</td>
                <td>All</td>
                <td>Resource pool in which the virtual machine is created. Specify a resource pool under the specified **VM Cluster**. Do not include the **VM Cluster** name in the path. Leave this field empty if you specified a specific host name in the **VM Cluster** field or if you don't want to use a resource pool.</td>
            </tr>
            <tr>
                <td>Shutdown Method</td>
                <td>All</td>
                <td>
                Shutdown method to be used when powering off the VM. Options are **Hard** and **Soft**.

    - **Hard**: (Default - starting with vCenter shell 4.2.0) Shuts down the virtual machine without shutting down any running applications
    - **Soft**: Shuts down all running applications on the virtual machine before shutting down the virtual machine.
    :::note
    **Soft** shutdowns require VMware Tools to be installed on the VM.
    :::
                </td>
            </tr>
            <tr>
                <td>Execution Server Selector</td>
                <td>All</td>
                <td>
                (Optional) This attribute points to a pre-defined group of execution servers (grouped by a common **Execution Server Selector** value). To make the association, enter the same value you specified on the execution server.

    For additional information on managing App deployments per domains, see [Managing Private Cloud Apps in Domains](../managing-private-cloud-apps-in-domains.md).
    :::note
    App deployment requires a minimum number of slots to be available. See [Number of execution slots for VM deployments](../../../cloudshell-execution-server-configurations/setting-up-execution-servers-to-run-commands.md#number-of-execution-slots-for-vm-deployments).
    :::
                </td>
            </tr>
            <tr>
                <td>OVF Tool Path</td>
                <td>All</td>
                <td>
                (Relevant when deploying vCenter VM from an image) Path to the OVF tool installation. Use the same path for all execution servers.
    :::note
    This path must be accessible to all execution servers that will be used to deploy Apps.
    :::
                </td>
            </tr>
            <tr>
                <td>Reserved Networks</td>
                <td>All</td>
                <td>(Optional) Comma-separated list of reserved networks. vNICs configured to these networks will not be used for VM connectivity.</td>
            </tr>
            <tr>
                <td>Behavior During Save (optional)</td>
                <td>All</td>
                <td>
                (Applies to the **Save and Restore** paid add-on) The VM's state while the sandbox is being saved. Options are **Remain Powered On** and **Power Off**.

    - **Inherit**: (Default) Uses the setting defined on the vCenter cloud provider resource
    - **Remain Powered On**: The VM will remain powered on during the saving state.
    - **Power Off**: If the VM was powered on before the sandbox entered the saving state, the VM will shut down (power off) for the duration of the save.
    :::note    
    After save has ended, the VM returns to its state prior to saving, regardless of the behavior during the save.
    :::

    If this field is left empty, the default value is **Remain Powered On**.
                </td>
            </tr>
            <tr>
                <td>Saved Sandbox Storage</td>
                <td>All</td>
                <td>
                (Applies to the **Save and Restore** paid add-on) During the saving process, CloudShell creates a clone of the sandbox's App VMs in this vCenter storage, which CloudShell will later use to restore the VM when the user restores the saved sandbox. See [Save a Sandbox](../../../../portal/sandboxes/sandbox-workspace/save-sandbox.md) for more information.

    For storage purposes, these VM clones can be stored in a different data storage than the one configured in the **VM Storage** attribute defined on the vCenter cloud provider resource. The storage can be either a datastore or a datastore cluster. For example: datastore1 or clustername/datastore1.

    If this field is left empty, the default is the value configured in **VM Storage**.
                </td>
            </tr>
            <tr>
                <td>Promiscuous Mode</td>
                <td>All</td>
                <td>(Optional) Configures the port groups on the virtual switch to allow all incoming traffic. This setting is enabled by default.</td>
            </tr>
            <tr>
                <td>Enable Tags</td>
                <td>2<sup>nd</sup> Gen</td>
                <td>(Applies to vCenter 6.5 and above) If enabled, vSphere tags will be added to new vSphere inventory objects created by the Shell - folders, networks, VMs, etc.</td>
            </tr>
        </tbody>
    </table>
    
9. Click **Start Discovery** to validate the vCenter settings.
    
    When the discovery process completes, a confirmation message is displayed. The resource is displayed in the **Inventory** dashboard in CloudShell Portal and in Resource Manager.
    
    Apps can now be added using the vCenter resource. For additional information, see [Adding App templates](../../../cloudshell-manage-dashboard/manage-app-templates/index.md#adding-app-templates).
    
    To customize the App deployment types and publish App orchestration parameters, see [Customizing App Deployment Types](../../customizing-app-deployment-types.md).

    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/3j7OXk7Zp9A" title="Creating a vCenter Cloud Provider Resource" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    

## Related Topics

- [Adding Inventory Resources](../../../../portal/inventory/managing-resources/adding-inventory-resources/index.md)
- [Managing Private Cloud Apps in Domains](../managing-private-cloud-apps-in-domains.md)
